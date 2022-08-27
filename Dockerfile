# Common build stage
FROM node:16.17.0-alpine3.15

COPY . ./app

WORKDIR /app

RUN npm install -g npm

RUN npm install --omit=dev

EXPOSE 3000

ENV NODE_ENV production

CMD ["npm", "run", "start"]
