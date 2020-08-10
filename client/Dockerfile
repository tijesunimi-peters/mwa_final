#Grab the latest alpine image
# FROM alpine:latest
FROM nginx:latest

# Add our code
ADD ./nginx.conf /etc/nginx/nginx.conf
ADD ./dist/client /etc/nginx/html
WORKDIR /etc/nginx/html

# ADD ./dist/client /opt/webapp/
# WORKDIR /opt/webapp

# RUN adduser -D myuser
# USER myuser

ENV NGINX_HOST=0.0.0.0
ENV NGINX_PORT=${PORT}

# Expose is NOT supported by Heroku
# EXPOSE 5000 		

# Run the image as a non-root user
RUN adduser myuser --disabled-login --disabled-password
USER myuser

# Run the app.  CMD is required to run on Heroku
# $PORT is set by Heroku			
# sudo systemctl start nginx
RUN ls -al 

ENTRYPOINT ["/docker-entrypoint.sh"]

RUN ["chmod", "+x", "/docker-entrypoint.sh"]
# CMD gunicorn --bind 0.0.0.0:$PORT wsgi 
CMD nginx -g daemon off

