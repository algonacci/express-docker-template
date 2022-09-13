FROM node:18-slim

WORKDIR /app

COPY package*.json ./

RUN npm install typescript

RUN npm install --only=production

COPY . ./

RUN tsc -p .

ENV PORT=8080
EXPOSE 8080
USER node

CMD ["node", "dist/server.js" ]
