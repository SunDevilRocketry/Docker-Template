
  

# The following file contains more details on the flask back end Dockerfile:

### Lightweight Python image

	FROM python:3.12-slim

More python base images can be found at https://hub.docker.com/_/python

### Set the working directory inside the container.

	WORKDIR /app

### Copy the requirements.txt file into the container and install dependencies.

If you are using a virtual environment, you can generate a requirements.txt using: 'pip freeze > requirements.txt'

Otherwise you will have to manually write the file

	COPY requirements.txt .

	RUN pip install --no-cache-dir -r requirements.txt

### Copy the entire application code into the container.  

	COPY . .

### Expose the port your application will run on  

	EXPOSE 4000 

### Define the command to run your Flask application when the container starts.

	CMD ["python", "i-love-sdr.py"]
