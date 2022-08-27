FROM node:16-alpine

WORKDIR /server

COPY . . 

RUN apk update && apk add bash