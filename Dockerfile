FROM alpine AS build
WORKDIR /app

RUN addgroup -S app \
    && adduser -S app -G app

# Install Node.js and NPM
RUN apk add --update nodejs npm

# Install dependencies
COPY ./Portfolio/package.json .
RUN npm i
RUN npm i serve -g

# Copy source code.
COPY ./Portfolio .

RUN npm run build

FROM build AS final
USER app
EXPOSE 8080
CMD ["serve", "-s", "dist", "-l", "8080"]