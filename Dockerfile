# Use a Node.js base image for the builder stage
FROM node:16-alpine as builder

# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm && pnpm install --prod

# Copy the rest of the application code
COPY . .

# Use a lightweight Node.js base image for the runtime stage
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy the built artifacts from the builder stage
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package*.json /app/
COPY --from=builder /app/index.js /app/
COPY --from=builder /app/api /app/api

# Set the user to node to avoid running the container as root
USER node

# Expose the port your app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
