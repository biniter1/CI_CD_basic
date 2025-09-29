From node:18-slim

WORKDIR /app

COPY package*.json ./

Run npm install

COPY . .

EXPOSE 3000

CMD ["npm","start"]