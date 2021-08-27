### STAGE 1: Build ###
FROM node:14-alpine AS build
WORKDIR /usr/src/app
COPY package*json ./

RUN npm install
COPY . .
RUN npm run build -- --configuration=$CONFIG

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/fp-frontend /usr/share/nginx/html

# RUN rm -rf /usr/share/nginx/html/*
# COPY --from=build /usr/src/app/dist/fp-frontend/ /usr/share/nginx/html/
# RUN rm -rf /etc/nginx/conf.d/default.conf
# COPY ./nginx.conf /etc/nginx/nginx.conf
# EXPOSE 80