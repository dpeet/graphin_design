# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project to the working directory
COPY . .

# Make port 3000 available outside the container
EXPOSE 5173

# Run the application when the container launches
CMD ["npm", "run", "dev"]