FROM alpine
WORKDIR /app

# Install Node.js and NPM
RUN apk add --update nodejs npm

# Install dependencies
COPY ./Portfolio/package.json .
RUN npm i
RUN npm i serve -g

# Copy source code
COPY ./Portfolio .

# Manually set the Reality gateway URL.
# Vite doesn't support runtime environment variables.
# In theory, this can be overriden with a custom .env file when in development.
ENV VITE_GatewayUrl=http://gateway/gql

RUN npm run build

EXPOSE 8080
CMD ["serve", "-s", "dist", "-l", "8080"]