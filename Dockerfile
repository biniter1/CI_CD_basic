From node:18-slim

WORKDIR /app

COPY package*.json ./

Run nmp install

COPY . .

EXPOSE 3000

CMD ["nmp","start"]