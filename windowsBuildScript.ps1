Set-Location ./frontend

npm run build

Set-Location ..

docker build -t taxapp-frontend ./frontend
docker build -t taxapp-backend ./backend
docker compose up