FROM node:lts
WORKDIR /App
COPY ./app.js .
COPY ./models ./models
COPY ./package.json .
RUN npm install -g nodemon
RUN npm install
EXPOSE 3000
CMD ["nodemon", "app.js"]