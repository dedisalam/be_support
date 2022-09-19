FROM node:16.17.0-alpine3.15

COPY ./src ./app/src
COPY ./package.json ./app/
COPY ./.env.development.local ./app/
COPY ./nodemon.json ./app/

WORKDIR /app

RUN npm install npm --location=global

RUN npm install

ENV NODE_ENV development

CMD ["npm", "run", "dev"]