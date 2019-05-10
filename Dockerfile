FROM node:8.9.4-alpine
ENV NODE_ENV=development

WORKDIR /app
RUN npm init -y && npm install
