#!/usr/bin/env bash
set -euo pipefail

# Arreglo de NextAuth para el frontend en Kubernetes
# REQUISITOS: kubectl configurado apuntando al cluster (control plane / Cloud Shell)

NAMESPACE=${NAMESPACE:-demo}
DEPLOY=${DEPLOY:-bidaitxakur}
SECRET_NAME=${SECRET_NAME:-nextauth-secrets}
NEXTAUTH_URL=${NEXTAUTH_URL:-https://huellasdelnorte.com}

info() { echo -e "[INFO] $*"; }
warn() { echo -e "[WARN] $*"; }

info "[1/6] Crear/actualizar secret ${SECRET_NAME} en namespace ${NAMESPACE}"
kubectl create secret generic "$SECRET_NAME" -n "$NAMESPACE" \
  --from-literal=NEXTAUTH_SECRET="$(openssl rand -base64 32)" \
  --from-literal=NEXTAUTH_URL="$NEXTAUTH_URL" \
  --dry-run=client -o yaml | kubectl apply -f -

info "[2/6] Verificar deployment objetivo"
if ! kubectl -n "$NAMESPACE" get deploy "$DEPLOY" >/dev/null 2>&1; then
  warn "Deployment '$DEPLOY' no encontrado en '$NAMESPACE'. Mostrando deployments disponibles:"
  kubectl -n "$NAMESPACE" get deploy -o name || true
  exit 1
fi

info "[3/6] Inyectar variables del secret al deployment ${DEPLOY}"
kubectl -n "$NAMESPACE" set env "deployment/${DEPLOY}" --from="secret/${SECRET_NAME}"

info "[4/6] Reiniciar deployment"
kubectl -n "$NAMESPACE" rollout restart "deployment/${DEPLOY}"

info "[5/6] Esperar a que el rollout complete"
kubectl -n "$NAMESPACE" rollout status "deployment/${DEPLOY}" --timeout=180s

info "[6/6] Mostrar logs recientes"
kubectl -n "$NAMESPACE" logs -l app="$DEPLOY" --tail=150 --since=10m || true

info "Listo. Verifica que no haya errores de NEXTAUTH_SECRET en los logs y prueba en ${NEXTAUTH_URL}."