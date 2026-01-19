#!/bin/bash

# Entrar no backend e ativar venv
cd backend_movie_search
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Rodar Flask em background
export FLASK_APP=app.py
flask run &

# Esperar 3 segundos para backend subir
sleep 3

# Entrar no frontend
cd ../movie_search
npm install
npm run dev
