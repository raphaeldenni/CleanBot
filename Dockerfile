FROM node:22 AS base

RUN corepack enable pnpm

RUN mkdir /app-build/
WORKDIR /app-build/

COPY package.json pnpm-lock.yaml /app-build/
RUN pnpm fetch
RUN pnpm install --frozen-lockfile

# ---

FROM base AS build
COPY . /app-build/

RUN pnpm tsc -b

# ---

FROM node:22-alpine
RUN addgroup -S app && adduser -S app -G app
USER app

COPY --from=build /app-build/dist/ /app/

COPY --from=build /app-build/node_modules/ /app/node_modules/

WORKDIR /app/

CMD node deploy-commands.js && node index.js
