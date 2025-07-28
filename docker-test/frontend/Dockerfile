# The first line of your dockerfile MUST include the base image, like so:
FROM node:18

# Sets the working directory for the container, basically from now on everthing will be performed inside a /app ("app" is an arbitary name, but using "app" is pretty common)
WORKDIR /app

# Copy package.json and package-lock
COPY package*.json ./
# INTERESTING DOCKER FACT:
# Dockerfiles use layer caching, which means that it treats each command as an individual layer. 
# Basically when docker looks at each line, if the line has changed: rebuild, if line has not changed: use cache,
# also if a layer has changed, all layers that follow it will be rebuilt as well.
# Why does this matter? Say we make a change in our code, the following npm install command will have to be 
# rebuilt, along with most of the commands that follow. However, the commands that precede it are not
# affected by this change, and so they don't need to be rebuilt. With layer chaching, docker simply uses the 
# cache to obtain the preceding commands as opposed to rebuilding them, which would be uneffecient and of course, useless.
# Install app dependancies
RUN npm install

# Copy rest of code into the container
COPY . .
# This command copies absolutley everyting which is pretty cool, however this casuses a problem. This command
# will also copy node_modules, which is a problem because node_modules is absolutley huge. We can resolve this problem
# through the use of a .dockerignore file

# Tells docker to expose this port so our computer can use it
EXPOSE 3000

# Run the app, this is what docker uses to actually run the container
CMD ["npm", "start"]
