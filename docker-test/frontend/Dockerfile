# The first line of your dockerfile MUST include the base image, like so:
FROM <include base image here> 
# Node base images are available at https://hub.docker.com/_/node

# Sets the working directory for the container, basically from now on everthing will be performed inside a /app ("app" is an arbitary name, but using "app" is pretty common)
WORKDIR /app

# Copy package.json and package-lock
COPY package*.json ./

# Install app dependancies
RUN npm install

# Copy rest of code into the container
COPY . .

# This command builds the app, which is necessary for production.
RUN npm run build

# The port is the port that the app will run on, this is usually 3000
EXPOSE <include port# here>

# Run the app, this is what docker uses to actually run the container
CMD ["npm", "start"]
