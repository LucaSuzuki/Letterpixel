#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# Entrar no backend e ativar venv
pushd "$SCRIPT_DIR/backend_movie_search" >/dev/null
if [ ! -d "venv" ]; then
  python3 -m venv venv
fi
source venv/bin/activate
python3 -m pip install -r requirements.txt

# Rodar Flask em background
export FLASK_APP=app.py
flask run &
popd >/dev/null

# Esperar 3 segundos para backend subir
sleep 3

# Entrar no frontend
pushd "$SCRIPT_DIR/movie_search" >/dev/null
if [ ! -d "node_modules" ]; then
  npm install --no-fund --no-audit --silent
fi
npm run dev
popd >/dev/null
