FROM nginx:latest

# Add our code
ADD ./.nginx/templates /etc/nginx/templates
ADD ./dist/client /etc/nginx/html
WORKDIR /etc/nginx/html

ENV NGINX_HOST=0.0.0.0
ENV NGINX_PORT=${PORT}

# Run the app.  CMD is required to run on Heroku
# $PORT is set by Heroku			
# sudo systemctl start nginx
CMD ["/bin/bash", "-c", "/docker-entrypoint.d/20-envsubst-on-templates.sh && nginx -g 'daemon off;'"]

