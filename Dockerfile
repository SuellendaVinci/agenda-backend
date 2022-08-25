FROM node:16-alpine

WORKDIR /server

COPY . . 

RUN yarn 

CMD ["yarn", "start"]