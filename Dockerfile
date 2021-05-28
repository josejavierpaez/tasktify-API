FROM node:14

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./
COPY entrypoint.sh ./
RUN chmod +x entrypoint.sh
RUN yarn install

COPY . .

EXPOSE 5000

ENTRYPOINT ["./entrypoint.sh"]