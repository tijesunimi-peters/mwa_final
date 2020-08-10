FROM nginx:latest

# Run the image as a non-root user
# RUN adduser --disabled-login myuser
# USER myuser

# Add our code
ADD ./.nginx/templates /etc/nginx/templates
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
ADD ./dist/client /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

ENV NGINX_HOST=0.0.0.0
ENV NGINX_PORT=${PORT}
# ENV NGINX_ENVSUBST_OUTPUT_DIR=/etc/nginx


# Run the app.  CMD is required to run on Heroku
# $PORT is set by Heroku			
# CMD ["/bin/bash", "-c", "/docker-entrypoint.d/20-envsubst-on-templates.sh && nginx -g 'daemon off;'"]
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'

