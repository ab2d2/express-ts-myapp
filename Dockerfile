FROM node:12-stretch
USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node . .
RUN npm run compile
EXPOSE 3000
CMD [ "node", "dist/index.js" ]