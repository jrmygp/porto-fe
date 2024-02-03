FROM mhart/alpine-node:20.11.0
# Tell docker to get node.js version 20

WORKDIR /app
# Set working directory for docker to run commands

COPY package.json .
# Copy package.json file so docker can run npm install after

RUN npm install
# Tell docker to run npm install while app is being build

COPY . .
# Copy everything else

EXPOSE 5173
# Still no clue


CMD ["npm", "run", "dev",]
# After build done (container made) docker will run this command