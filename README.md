
## Docker-Template:

This repository serves as a template to containerize an application with a Next.js frontend and Flask backend using Docker. 

### To use this template:
 
```
git clone https://github.com/SunDevilRocketry/Docker-Template.git
cd Docker-Template/docker-Test
docker compose up --build
```
You must fill in the [Next.js Dockerfile](docker-test/nextjs/Dockerfile), [python Dockerfile](docker-test/python/Dockerfile), and [compose.yaml](docker-test/compose.yaml) for the template to work. A walkthrough of the creation of the project along with complete and more detailed versions of the Dockerfile's and compose.yaml can be found in the [docs folder](./docker-test/docs/).
