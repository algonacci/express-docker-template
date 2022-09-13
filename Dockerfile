FROM node:18-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . ./

CMD [ "npx", "tsc", "node", "dist/server.js" ]
