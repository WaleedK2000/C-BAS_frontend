FROM node:14.17.0-alpine3.13

# set working directory
WORKDIR /app


ENV PATH /app/node_modules/.bin:$PATH


COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent

# start app
CMD ["npm", "start"]