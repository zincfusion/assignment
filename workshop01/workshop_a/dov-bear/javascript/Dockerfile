#-------base image
# 18 is bullseye which is ubuntu
ARG NODE_VER=18

FROM node:${NODE_VER}

#-------Building the image
# create /app and cd into it
WORKDIR /app

# e.g Additional packages, can run any linux command
# RUN apt update && apt install nginx -y

# copy app into /app
# . represent root of project
# for directtories no need .
ADD main.js .
ADD package.json .
ADD package-lock.json .
ADD public public
ADD views views
# don't copy node_modules instead load the dependencies

# Install the dependencies
# npm ci is specifically for docker dependencies
RUN npm ci
#RUN ["npm","ci"]
# above 2 lines are equivalent, the first line runs via the shell which interacts with the shell, the second line interacts directly with the kernel

# OPTIONAL: Install curl if base image is not present but in this case it is present
# RUN apt update && apt install curl -y

#-------Running the image
# Set any environment variables required by the application
ENV PORT=5000
ENV INSTANCE_NAME=dov-bear
ENV INSTANCE_HASH=100ef62f9d962f2a0b632b01c1074851

# note that the following curl command must exist in the base image else this cannot work
# HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
#     CMD curl http://localhost:${APP_PORT}/healthz || exit

EXPOSE ${PORT}

# how to run the program
ENTRYPOINT ["node","main.js"]
#CMD['3000']
# The above executes node main.js 3000