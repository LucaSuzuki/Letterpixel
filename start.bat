@echo off
cd backend_movie_search
python -m venv venv
call venv\Scripts\activate
pip install -r requirements.txt


start /B python app.py

timeout /t 3

cd ..\movie_search
npm install --no-fund --no-audit --silent
npm run dev
