FROM node:lts-alpine
LABEL authors="borosboyo"

ENV APP_HOME=/usr/src/movesong-frontend

WORKDIR ${APP_HOME}
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
# add app
COPY . ./

RUN npm cache clean --force && npm install

# start app
CMD ["npm", "run", "dev"]
