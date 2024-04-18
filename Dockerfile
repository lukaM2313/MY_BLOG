FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g serve

COPY . .

RUN npm run build

CMD ["serve", "-s", "dist/myblog", "-l", "4200"]

EXPOSE 4200

