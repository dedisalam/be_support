# Common build stage
FROM node:14.19.3
COPY . ./app
WORKDIR /app
RUN npm install
ENV NODE_ENV production
CMD ["npm", "run", "start-prod"]
EXPOSE 3000