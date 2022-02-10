# BUILD project
Step 1: `docker-compose build`</br>
Step 2: `docker-compose up -d`</br>

**NOTE:**
- Copy the template files to .env and docker-compose.yml
- In PRODUCTION, when the code changes, you need to be rebuilt and run docker: `docker-compose up --build -d`
---

# GUIDE Docker Compose command:
#### Build: `docker-compose build`
#### Run: `docker-compose up -d`
#### Rebuild and run: `docker-compose up --build -d`
#### Npm install: `docker-compose exec -w /opt/node_app node npm install`
#### Add a package: `docker-compose exec -w /opt/node_app node npm install --save <package name>`
---

# GUIDE Docker command
#### Build: `docker build -t IMAGE_NAME .`
#### Run container from image: `docker run -d -p 80:3000 IMAGE_NAME`
#### Get list all container: `docker ps -a`
#### Exec container: `docker exec -it CONTAINER_ID /bin/bash`
#### Stop container: `docker stop CONTAINER_ID`
#### Remove container: `docker rm CONTAINER_ID`
#### Get images: `docker images`
#### Remove image: `docker image rm IMAGE_NAME`
