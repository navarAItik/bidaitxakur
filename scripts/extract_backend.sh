#!/usr/bin/env bash
set -euo pipefail

# Extrae información del backend desde las rutas backend/ y apps/backend/
# Ejecutar en el host que tiene el repo en ~/bidaitxakur (control plane/Cloud Shell)

cd ~/bidaitxakur

log_file="backend_full_$(date +%F_%H%M).log"

{
  echo "=== GIT HEAD ==="
  git --no-pager log --oneline -1 || true
  echo

  BACKEND_DIRS=(backend apps/backend)
  for d in "${BACKEND_DIRS[@]}"; do
    if [ -d "$d" ]; then
      echo ">>> DIR: $d"

      echo "=== SETTINGS.PY ($d) ==="
      find "$d" -type f -name "settings.py" -print -exec sed -n '1,999p' {} \;
      echo

      echo "=== REQUIREMENTS ($d) ==="
      find "$d" -maxdepth 2 -type f -name "requirements*.txt" -print -exec cat {} \;
      echo

      echo "=== DOCKERFILE ($d) ==="
      if [ -f "$d/Dockerfile" ]; then
        echo "$d/Dockerfile"
        sed -n '1,200p' "$d/Dockerfile"
      else
        echo "NO ENCONTRADO"
      fi
      echo

      echo "=== .ENV.EXAMPLE ($d) ==="
      if [ -f "$d/.env.example" ]; then
        echo "$d/.env.example"
        cat "$d/.env.example"
      else
        echo "NO ENCONTRADO"
      fi
      echo

      echo "=== manage.py ($d) ==="
      if [ -f "$d/manage.py" ]; then
        echo "$d/manage.py"
        sed -n '1,120p' "$d/manage.py"
      else
        echo "NO ENCONTRADO"
      fi
      echo

      echo "=== ESTRUCTURA PY ($d) ==="
      find "$d" -type f -name "*.py" | head -100
      echo
    fi
  done

  echo "=== DOCKERFILE(S) RAIZ ==="
  for f in Dockerfile docker/backend.Dockerfile backend/Dockerfile apps/backend/Dockerfile; do
    if [ -f "$f" ]; then
      echo "$f"
      sed -n '1,200p' "$f"
      echo
    fi
  done

  echo "=== .ENV.EXAMPLE RAIZ ==="
  if [ -f .env.example ]; then
    cat .env.example
  else
    echo "NO ENCONTRADO"
  fi
  echo

  echo "=== DOCKER-COMPOSE RAIZ ==="
  for f in docker-compose.yml docker-compose.yaml; do
    if [ -f "$f" ]; then
      echo "$f"
      cat "$f"
      echo
    fi
  done
} | tee "$log_file"

echo "[INFO] Log generado: $log_file"