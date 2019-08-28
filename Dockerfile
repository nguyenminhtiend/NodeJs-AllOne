FROM node:alpine

ENV NODE_ENV=production
ENV DB_HOST=localhost
ENV DB_USERNAME=root
ENV DB_PASSWORD=Password.123
ENV DB_DATABASE=node-all

WORKDIR /usr/app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]