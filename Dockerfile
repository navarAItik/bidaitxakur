# Este Dockerfile es para el servicio de proxy/inicialización del monorepo
FROM nginx:alpine

# Copiar configuración de nginx para servir como proxy reverso
COPY docker/nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]