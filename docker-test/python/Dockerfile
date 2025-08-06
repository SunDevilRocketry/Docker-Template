# Lightweight Python image, "python:3.12-slim" for example.
FROM <insert python base image>

# Set the working directory inside the container.
WORKDIR /app

# Copy the requirements.txt file into the container and install dependencies.
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire application code into the container.
COPY . .

# Expose the port your application will run on
EXPOSE <insert port number>

# Define the command to run your Flask application when the container starts.
CMD ["python", "filename.py"]