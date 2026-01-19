@echo off
setlocal
pushd backend_movie_search
if not exist venv (
  python -m venv venv
)
call venv\Scripts\activate
python -m pip install -r requirements.txt
start /B python app.py
popd

timeout /t 3 >nul

pushd movie_search
if not exist node_modules (
  npm install --no-fund --no-audit --silent
)
npm run dev
popd

endlocal
