# image from node which use alpine3.16
# the mos of the time the starting point is an image created by someone
# in this case node because it means that the alpine has node in his environment
FROM node:19.2-alpine3.16

EXPOSE 4200
# nodealpine has the app directory by default
# cd app basically
WORKDIR /app


COPY src /app/src
COPY tests angular.json package.json setup-jest.ts tailwind.config.js tsconfig.app.json tsconfig.json tsconfig.spec.json ./

RUN npm install

CMD npm run start
