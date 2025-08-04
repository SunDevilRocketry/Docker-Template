# The following file contains more details on the compose.yaml file:

### The following service object will contain all of our containers
	services:

### Service name:

		backend:

### "build:" must be followed by the path to this projects dockerfile, this Dockerfile is what's used to build the container

			build: ./backend

### Port forwarding used to run the container
			ports:

				- '4000:4000'

### Naming your container helps for clarity purposes

			container_name: backend-container

  
### Frontend service 
		frontend:

			build: ./frontend

			ports:

				- '3000:3000'

			container_name: frontend-container

  

### Note: 
Docker volumes are really only necessary when using an actual database. My backend doesn't actually create/store any data, so therefore i'm not going to include it. However if you did need it, you can declare it like so:

This code tells docker to create a docker volume called "postgress_data"

	volumes:
		postgress_data:
