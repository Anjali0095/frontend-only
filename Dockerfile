# Use an official node image as a base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Install a simple web server to serve the build files
RUN npm install -g serve

# Expose port 3000 to access the application
EXPOSE 3000

# Command to run the application
CMD ["serve", "-s", "build"]

