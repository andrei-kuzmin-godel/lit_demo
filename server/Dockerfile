FROM node:14-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json package-lock.json /usr/src/app/
RUN npm ci --silent --only=production
COPY . /usr/src/app

USER nobody

EXPOSE 3000
CMD ["node", "index.js"]
