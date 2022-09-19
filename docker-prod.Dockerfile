# Common build stage
FROM node:16.17.0-alpine3.15

COPY ./dist ./app/dist

COPY ./.env.production.local ./app

COPY ./package.json ./app

WORKDIR /app

RUN npm install npm --location=global

RUN npm install --omit=dev

ENV NODE_ENV production

CMD ["npm", "run", "start"]

EXPOSE 3000
