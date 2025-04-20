# -------- Stage 1: Build React App --------
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the source code
COPY ./src ./src
COPY ./public ./public

# Inject environment variables
ARG REACT_APP_API_SIGN_UP
ARG REACT_APP_API_SIGN_IN
ARG REACT_APP_API_PROVINCES
ARG REACT_APP_API_TOURS
ARG REACT_APP_CLOUDINARY_NAME
ARG REACT_APP_API_TOUR_DETAIL
ARG REACT_APP_API_GUIDES
ARG REACT_APP_API_BOOKING
ARG REACT_APP_API_PROFILE
ARG REACT_APP_API_MY_BOOKED

ENV REACT_APP_API_SIGN_UP=$REACT_APP_API_SIGN_UP
ENV REACT_APP_API_SIGN_IN=$REACT_APP_API_SIGN_IN
ENV REACT_APP_API_PROVINCES=$REACT_APP_API_PROVINCES
ENV REACT_APP_API_TOURS=$REACT_APP_API_TOURS
ENV REACT_APP_CLOUDINARY_NAME=$REACT_APP_CLOUDINARY_NAME
ENV REACT_APP_API_TOUR_DETAIL=$REACT_APP_API_TOUR_DETAIL
ENV REACT_APP_API_GUIDES=$REACT_APP_API_GUIDES
ENV REACT_APP_API_BOOKING=$REACT_APP_API_BOOKING
ENV REACT_APP_API_PROFILE=$REACT_APP_API_PROFILE
ENV REACT_APP_API_MY_BOOKED=$REACT_APP_API_MY_BOOKED

# Build the React app
RUN npm run build

# -------- Stage 2: Serve with Nginx --------
FROM nginx:alpine

# Copy custom nginx config (if using react-router-dom)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx in the background
CMD ["nginx", "-g", "daemon off;"]
