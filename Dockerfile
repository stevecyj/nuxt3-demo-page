FROM node:18-alpine AS builder
ARG theme=10

RUN mkdir -p /nuxt-app
WORKDIR /nuxt-app
COPY . .

RUN apk update && apk add --no-cache bash && /bin/bash
RUN npm i -g pm2
RUN npm ci && npm cache clean --force
RUN THEME=$theme npm run build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000

ENTRYPOINT ["pm2-runtime", "start", "/nuxt-app/ecosystem.config.cjs"]