#!/bin/sh
cd ./frontend && npm run build
cd .. && docker build -t taxapp-frontend ./frontend
docker build -t taxapp-backend ./backend
docker compose up
