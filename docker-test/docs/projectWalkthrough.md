### First off, what is an image and container?
An image can be thought of as a recipie for how to create your project. It contains details on your code, dependancies, 
configurations, and etc. It's read-only, an image on its own can't actually run anything. Think of it like a class.
A container runs an instance of an image. It uses your image to build and run your project in an isolated environment. 
Think of it like an object created from a class (image).

### Extra Info
- While using Docker, if your full application uses multiple separate projects (frontend, backend, and database for ex.) it is  good practice to create a container for each project. One container, one responsibility. In my example, 
this app contains a frontend and a backend, so I create a container for the frontend and another container for the backend. 

- While the specific commands you must include for your Dockerfile will vary depending on project type, the process for  containing your project remains largely the same.

- The command 'docker init' basically does everything for you...
Though for learning purposes i'll describe the manual way. 

## Containing a project
1. Create the dockerfile:
 - In the root directory of your project create a new file, you can simply name it "Dockerfile"
 - See actual Dockerfile's for more details
2. Build your image
- In your terminal run the following:

		npm run build 
	    
	(I don't think this line is absolutely neccesary, 
        however my frontend image wouldn't build without running this first)
        
	    docker build -t docker_example  
       
     "docker_example" is the name if your image, "." is the path to your working directory
3. Run your container
  - In terminal run: 
					       
		docker run -p 3000:3000 docker_example
       "3000:3000" can be thought of as a bridge between our computer and the container. computerport:containerport
  
- To stop running the container:
	- In another terminal:
	        
	        docker ps 
           
        to retrieve the CONTAINER ID, among other things
		 
			docker stop <CONATINER ID> 

		to stop the container
4. Debugging
- You can use the docker desktop app to debug your container.
    - When your container is running it should pop up in the containers tap.
    - Here you can do cool stuff with your container, like stoping it. an important thing is:
    Docker Scout:
        1. From the images tab click on your running image
        2. Towards the right of the screen, in the vulnerabilities tab click analyze
        3. This will analyze your container and look for any vulnerabilities within your code,
        if it finds any it will let you know, along with tips on how to fix them. 

### Docker Container: 
A tool that tells your containers how they need to work together to create the full application

How to create this?

5. compose.yaml
- In your root directory (in my case, the directory that contains the frontend and backend folders,
    since these represent my two containers), create file "compose.yaml"
    - see actual file for details
    - if you decide to make a change in one of your containers, you can use 


			docker compose build frontend

		 to rebuild it, where "frontend" is the service name of your container.

Now that all that is done, you can run 'docker compose up' in the directory that contains your compose.yaml to 
run all of your containers together. 

To run yourself

	git clone https://github.com/xeflore1/Docker-Test.git
	cd Docker-Test/docker-Test
	docker compose up --build
In order for the project to actually work you will have to fill in the Dockerfile's and compose.yaml

### Additional notes:
- For complex projects build time can be quite large, docker.buildcloud is a tool that
uses the cloud to acheive faster build times. Might be something worth checking out in the furure. 
- Docker volume: 
A file on our computer that docker can use to save data between containers. As is, containers don't share data, and when the container is closed all state and data is lost, this is no good but the use of docker volume fixes this problem. This project doesn't use an actual database so I did not implement a Docker volume, however if you needed to it would need to be written in the compose.yaml file. 



