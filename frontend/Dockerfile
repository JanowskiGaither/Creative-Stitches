FROM nginx:latest
COPY ./dist /srv/http/example-app/dist
COPY ./nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80