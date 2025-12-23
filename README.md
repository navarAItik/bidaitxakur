# 🐾 Huellas del Norte – Plataforma Web (Frontend Next.js + Backend Django)

Este repositorio contiene la aplicación web Huellas del Norte con:
- ⚛️ Frontend: Next.js (React + TypeScript, Tailwind)
- 🐍 Backend: Django REST Framework
- ☸️ Despliegue objetivo: Kubernetes (k3s en OCI Always Free) con Ingress + cert-manager

📌 Estado verificado (producción k3s)
- ✅ Frontend en ns demo: deployment bidaitxakur Available=1. NextAuth configurado vía Secret.
- 🔐 Ingress y TLS: IngressClass nginx (k8s.io/ingress-nginx) y ClusterIssuer letsencrypt-prod Ready=True.
- 🚧 Backend: código presente (backend/ y apps/backend/) pero no desplegado; se identificó un fallo previo de InvalidImageName por referencia de imagen inválida (mayúsculas/<>). 

🎯 Objetivos de este README
- 🧪 Explicar cómo ejecutar en local (desarrollo).
- 🏗️ Explicar cómo construir y publicar imágenes multi-arquitectura (ARM64/AMD64) por digest.
- ☸️ Explicar cómo desplegar en k3s (secrets, config, imagen por digest, migraciones).
- 🩺 Explicar cómo diagnosticar problemas comunes (InvalidImageName, ImagePullBackOff, exec format error).

---

## 🗂️ 1. Estructura del repositorio

- 🖥️ frontend/ o src/: código del frontend Next.js (ver package.json, next.config.js)
- 🐘 backend/ y apps/backend/: código del backend Django (petfriendly_backend, api)
- 🐳 docker/: Dockerfiles de backend/frontend y nginx.conf
- 📚 docs/: documentación técnica (infra, API, arquitectura)
- 🛠️ scripts/: utilidades (diagnóstico, extracción de backend, etc.)

💡 Notas
- Existen dos rutas de backend (backend/ y apps/backend/) con settings.py equivalente. Elegir una como fuente de build antes de producción.

---

## 📦 2. Requisitos (desarrollo local)

- 🔧 Node.js 18+ y PNPM/NPM/Yarn (para frontend)
- 🐍 Python 3.10+ y pip (para backend) o Docker (recomendado)
- 🐳 Docker con buildx (para build multi-arch)

---

## ⚙️ 3. Desarrollo local (rápido)

Frontend (Next.js):
1) 📄 Copiar variables de ejemplo: `cp frontend/.env.example frontend/.env` (ajustar si procede)
2) 📦 Instalar dependencias: `cd frontend && npm install`
3) 🏃 Ejecutar en dev: `npm run dev`

Backend (Django):
1) 🔑 Variables: copiar `backend/.env.example` a `.env` y ajustar si existe; si no, usar variables de entorno.
2) 📦 Instalar: `cd backend && pip install -r requirements.txt`
3) 🗄️ Base de datos: por defecto usa SQLite si no hay `DATABASE_URL`.
4) 🔄 Migraciones y runserver:
   - `python manage.py migrate`
   - `python manage.py runserver 0.0.0.0:8000`

Compose (opcional si existe docker-compose.yml):
- 🐳 `docker compose up --build`

---

## 🏗️ 4. Build y publicación de la imagen del backend (multi-arch y por digest)

Los nodos en OCI suelen ser ARM64. Construir al menos `linux/arm64` o multi-arch para evitar ⚠️ `exec format error`.

Ejemplo usando GHCR (GitHub Container Registry):

1) 🔐 Variables y login GHCR:
```
cd backend  # o apps/backend si se usa esa ruta
IMAGE_BASE=ghcr.io/org/bidaitxakur-backend
TAG=2025-12-22
IMAGE="${IMAGE_BASE}:${TAG}"
echo "<GHCR_PAT_WITH_WRITE>" | docker login ghcr.io -u "<GHCR_USER>" --password-stdin
```

2) 🧰 Buildx multi-arch y push:
```
docker buildx create --use || docker buildx use default

docker buildx build \
  --platform linux/arm64,linux/amd64 \
  -t "${IMAGE}" \
  --push \
  .
```

3) 🔎 Obtener digest (manifest list) para despliegue inmutable:
```
docker buildx imagetools inspect "${IMAGE}" | sed -n '1,80p'
# Usar el valor de "Digest:" superior:
# ghcr.io/org/bidaitxakur-backend@sha256:<digest>
```

Entregar para despliegue:
- 🏷️ Imagen tag: `ghcr.io/org/bidaitxakur-backend:2025-12-22`
- 🧬 Digest: `ghcr.io/org/bidaitxakur-backend@sha256:<digest>`
- 🔒 ¿Privado?: Sí/No. Si Sí, token con solo `read:packages` para k8s.

---

## ☸️ 5. Despliegue en k3s/k8s (producción)

Prerequisitos confirmados en el cluster:
- 🌐 IngressClass nginx activo.
- 🔐 cert-manager y ClusterIssuer letsencrypt-prod en Ready=True.
- 🧩 Namespace de trabajo (ej. demo).

5.1 Frontend – NextAuth
- 🔑 Secret (ya aplicado en producción, ejemplo reproducible):
```
kubectl create secret generic nextauth-secrets -n demo \
  --from-literal=NEXTAUTH_SECRET="$(openssl rand -base64 48)" \
  --from-literal=AUTH_SECRET="$(openssl rand -base64 48)" \
  --from-literal=NEXTAUTH_URL="https://huellasdelnorte.com" \
  --from-literal=NEXTAUTH_TRUST_HOST="true" \
  --dry-run=client -o yaml | kubectl apply -f -

kubectl -n demo set env deploy/bidaitxakur --from=secret/nextauth-secrets
kubectl -n demo rollout restart deploy/bidaitxakur
kubectl -n demo rollout status deploy/bidaitxakur --timeout=180s
```

5.2 Backend – variables y secretos
- 🔑 Secret (producción):
```
kubectl -n demo create secret generic backend-secrets \
  --from-literal=DJANGO_SECRET_KEY="$(openssl rand -base64 48)" \
  --from-literal=DATABASE_URL="postgres://USER:PASS@HOST:5432/DB?sslmode=require" \
  --dry-run=client -o yaml | kubectl apply -f -
```
- 🗂️ ConfigMap:
```
kubectl -n demo create configmap backend-config \
  --from-literal=DJANGO_DEBUG="False" \
  --from-literal=DJANGO_ALLOWED_HOSTS="huellasdelnorte.com,.huellasdelnorte.com" \
  --dry-run=client -o yaml | kubectl apply -f -
```

5.3 Backend – imagePullSecret (si GHCR privado)
```
kubectl -n demo create secret docker-registry ghcr-creds \
  --docker-server=ghcr.io \
  --docker-username="<GHCR_USER>" \
  --docker-password="<GHCR_PAT_READ_ONLY>" \
  --docker-email="devnull@example.com"

# Asociar al Deployment (solo una vez):
kubectl -n demo patch deploy backend --type='json' \
  -p='[{"op":"add","path":"/spec/template/spec/imagePullSecrets","value":[{"name":"ghcr-creds"}]}]'
```

5.4 Backend – actualizar imagen por digest y validar
```
CNAME=$(kubectl -n demo get deploy backend -o jsonpath='{.spec.template.spec.containers[0].name}')
DIGEST="ghcr.io/org/bidaitxakur-backend@sha256:<digest>"
kubectl -n demo set image deploy/backend "${CNAME}=${DIGEST}"
kubectl -n demo rollout status deploy/backend --timeout=180s
kubectl -n demo get pods -l app=backend -o wide
```

5.5 Migraciones (una vez el pod esté Running)
```
POD=$(kubectl -n demo get pods -l app=backend --no-headers | awk '$3=="Running"{print $1; exit}')
kubectl -n demo exec "$POD" -- python manage.py migrate
```

---

## 🔧 6. Variables del backend (Django)

En petfriendly_backend/settings.py se usan variables:
- 🔑 DJANGO_SECRET_KEY (obligatoria en producción)
- 🐞 DJANGO_DEBUG ("False" en producción)
- 🌐 DJANGO_ALLOWED_HOSTS (incluye huellasdelnorte.com y subdominios necesarios)
- 🗄️ DATABASE_URL (PostgreSQL recomendado; si no existe, cae a SQLite para dev)
- 🌍 CORS_ALLOW_ALL_ORIGINS=True por defecto: restringir en producción a dominios de la app

REST Framework: permisos por defecto AllowAny (endurecer según necesidad).

---

## 🩺 7. Diagnóstico y problemas comunes

InvalidImageName:
- ❗ Causa: nombre con mayúsculas, con `<>`, con `https://` o variables sin expandir. Solución: referencia válida y minúscula `<registry>/<repo>:<tag>` o despliegue por digest `@sha256:...`.

ImagePullBackOff / Unauthorized:
- 🔒 Causa: imagen privada sin imagePullSecret o credenciales inválidas. Solución: crear secret docker-registry y asociarlo.

Exec format error:
- 🧬 Causa: imagen amd64 ejecutando en nodo ARM64. Solución: publicar `linux/arm64` o multi-arch.

Verificación:
```
kubectl -n demo get deploy,pods,ingress -o wide
kubectl -n demo describe pod <pod>
kubectl -n demo logs <pod> --tail=200
```

---

## 🤝 8. Contribución y licencias

- 🐛 Issues y PRs bienvenidos.
- 📄 Licencia: MIT (ver archivo LICENSE si existe).

---

## 📊 9. Estado actual (resumen)

- ✅ Frontend: OK en k3s (NextAuth configurado)
- 🔐 Ingress/TLS: OK (nginx + cert-manager)
- 🚧 Backend: pendiente imagen válida + variables (secret/config) + migraciones

---

## 📬 10. Contacto y soporte

- 📦 Para publicar imagen del backend: enviar tag y digest (GHCR) y si es privado, confirmar tipo de auth y creación de imagePullSecret con lectura.
- 🚀 Para despliegue de backend: una vez proporcionados digest y DB, aplicaré Deployment/Service e Ingress y ejecutaré migraciones.
