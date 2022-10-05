FROM nginx:1.23-alpine
COPY ./nginx/conf.d/ /etc/nginx/conf.d/
COPY ./nginx/nginx.conf /etc/nginx/
# COPY --from=dist /app/build /usr/share/nginx/html
# EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]