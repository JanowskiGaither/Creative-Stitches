Set-Location ./frontend

# Copy the Library folder
# For now its just generic .js files
.\copyLibrary.ps1

npm run build

Set-Location ..
docker build -t taxapp-frontend ./frontend
docker build -t taxapp-backend ./backend
docker compose up