# Usamos una base de Node.js (no Nginx)
FROM node:18-alpine

# Creamos la carpeta de trabajo
WORKDIR /app

# 1. Instalamos dependencias
COPY package.json package-lock.json* ./
RUN npm install

# 2. Copiamos el resto del código
COPY . .

# 3. Construimos la aplicación (Build)
# Desactivamos el telemetría de Next.js para que vaya más rápido
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# 4. Exponemos el puerto 3000 (el estándar de Next.js)
EXPOSE 3000

# 5. Arrancamos
CMD ["npm", "start"]
