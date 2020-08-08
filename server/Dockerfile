FROM node:14

WORKDIR /app

COPY package.json .

RUN npm i bcrypt

RUN npm install

COPY . .

ENTRYPOINT [ "npx", "nodemon", "start" ]