# base image
FROM node:14.17.0-alpine3.13

# add app
COPY . /app

WORKDIR /app


ENV PATH /app/node_modules/.bin:$PATH


COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install --silent


# start app
CMD ["npm", "start"]
