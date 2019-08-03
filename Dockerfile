FROM node:10

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install
RUN npm install -g nodemon

COPY . .

EXPOSE 3000

CMD npm start