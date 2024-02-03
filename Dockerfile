FROM node:20-alpine
# Tell docker to get node.js version 20

WORKDIR /app
# Set working directory for docker to run commands

COPY ./src .
# Copy all src folder and paste it to /app (just a dot because working dir is already /app)

RUN npm install
# Tell docker to run npm install while app is being build

EXPOSE 5173
# Still no clue


CMD ["npm", "run", "dev",]
# After build done (container made) docker will run this command