### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/ca-frontend /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

#/usr/src/app/dist/b8it148-frontend
# ### STAGE 1: Build ###
# FROM node:12.7-alpine AS build
# WORKDIR /usr/src/app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# ### STAGE 2: Run ###
# FROM nginx:1.17.1-alpine
# COPY --from=build /usr/src/app/dist/application-frontend /usr/share/nginx/html