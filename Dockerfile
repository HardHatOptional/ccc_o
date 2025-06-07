FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy source code
COPY . .

# Build the application
RUN npm run build

EXPOSE 3000

ENV NODE_ENV=production
# Default start command
CMD ["npm", "start"]