FROM node

WORKDIR /home/src/

COPY package.json ./
COPY . .

RUN npm install

EXPOSE 8080

CMD ["node", "app/index.js"]