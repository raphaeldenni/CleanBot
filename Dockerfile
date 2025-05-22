FROM node:22-alpine

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

RUN mkdir /app
WORKDIR /app

COPY pnpm-lock.yaml /app
RUN pnpm fetch

COPY package.json /app
RUN pnpm install

COPY . /app

CMD [ "pnpm", "start" ]
