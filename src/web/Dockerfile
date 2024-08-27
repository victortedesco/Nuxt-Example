FROM node:22-alpine AS build

WORKDIR /app

COPY src/web/package*.json ./
RUN npm install

COPY src/web/ .
RUN npm run build
RUN npm prune --omit=dev

FROM node:22-alpine as production

WORKDIR /app

COPY --from=build /app /app

EXPOSE 3000

CMD ["npm", "start"]
