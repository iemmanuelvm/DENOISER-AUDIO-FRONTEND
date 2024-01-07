# Use an official Node.js runtime as a parent image
FROM node:16

WORKDIR /app

COPY package.json .
RUN npm install --legacy-peer-deps


COPY . .

## EXPOSE [Port you mentioned in the vite.config file]

EXPOSE 5173

CMD ["npm", "run", "dev"]