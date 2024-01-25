FROM node:18-alpine AS builder

RUN mkdir -p /nuxt-app
WORKDIR /nuxt-app
COPY . .

RUN apk update && apk add --no-cache bash && /bin/bash
RUN npm ci && npm cache clean --force
RUN npm run build


FROM keymetrics/pm2:latest-alpine

RUN mkdir -p /nuxt-app/.output
WORKDIR /nuxt-app/.output

COPY --from=builder /nuxt-app/.output .
COPY ./ecosystem.config.cjs /nuxt-app

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000

ENTRYPOINT ["pm2-runtime", "start", "/nuxt-app/ecosystem.config.cjs"]
# ENTRYPOINT ["tail", "-f", "/dev/null"]