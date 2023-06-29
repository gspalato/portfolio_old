FROM alpine
WORKDIR /app

# Install Node.js and NPM
RUN apk add --update nodejs npm

# Install dependencies
COPY ./Portfolio/package.json .
RUN npm i
RUN npm i serve -g

# Copy source code.
COPY ./Portfolio .
COPY ./Portfolio/.env ./.env

RUN npm run build

EXPOSE 8080
CMD ["serve", "-s", "dist", "-l", "8080"]