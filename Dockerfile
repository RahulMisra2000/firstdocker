FROM node
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY ./server.js ./server.js
EXPOSE 3000
CMD [ "npm", "start" ]
