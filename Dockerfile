# Common build stage
FROM node:14.14.0-alpine3.12 as common-build-stage

COPY . ./app

WORKDIR /app

RUN npm install

ENV NODE_ENV production

CMD ["npm", "run", "start-prod"]

EXPOSE 3000


