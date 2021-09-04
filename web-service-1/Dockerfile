FROM node:16-alpine3.11
RUN apk update && apk add bash
WORKDIR "/home/node/app"
COPY . "/home/node/app"
EXPOSE 3000
RUN npm install
CMD ["node","index.js" ]