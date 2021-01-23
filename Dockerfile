FROM node
WORKDIR /app
COPY ./package.json .
RUN npm install

# Just to see what got installed
RUN ls -alt
COPY ./server.js ./server.js

# Just to see if it copied over the server.js
RUN ls -alt
COPY ./pages ./pages/

# Just to see if it copied over the pages folder
RUN ls -alt

# This is the default port. 
# Can of course be overridden in the .env file which we supply to the docker run which spins up the container
# It will be available in the environment of the container. In case of node, in process.env.PORT 
ARG DEFAULT_PORT=3000
ENV PORT $DEFAULT_PORT

EXPOSE $PORT
CMD [ "npm", "start" ]
