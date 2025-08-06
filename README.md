## Usage:
This repository serves as a template for how to containerize an application with a Next.js frontend and flask backend using Docker. A walkthrough of the creation of the project along with complete and more detailed versions of the Dockerfile's and compose.yaml can be found in the [docs folder](./docker-test/docs/). 

## Setup:
- I first created a simple flask backend that includes one route that returns the message: "i love sdr"
- I also creted a simple nextjs frontend that fetches this route to obtain and display the message
- You must also install docker desktop at: https://www.docker.com/
- Bonus tip: if you are using vs code downloading the Docker extension is pretty helpful. 

