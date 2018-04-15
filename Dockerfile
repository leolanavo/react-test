FROM node

WORKDIR /usr/src/react

COPY . .

RUN npm install

CMD [ "npm", "start" ]
