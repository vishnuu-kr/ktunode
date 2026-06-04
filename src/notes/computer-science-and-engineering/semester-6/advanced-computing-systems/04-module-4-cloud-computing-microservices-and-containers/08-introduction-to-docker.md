---
title: "Introduction to Docker."
subject: "ADVANCED COMPUTING SYSTEMS"
module: "Module 4: Cloud Computing, Microservices and Containers:"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bac1"
status: "completed"
scrapedAt: "2026-05-20T16:50:03.894Z"
---
# ADVANCED COMPUTING SYSTEMS - Module 4: Cloud Computing, Microservices and Containers - Topic: Introduction to Docker

## Introduction

These notes provide a comprehensive introduction to Docker, covering its key concepts, benefits, and basic usage. Docker is a crucial technology in modern cloud computing and microservices architectures, enabling efficient application deployment and management.

## Learning Outcomes

Upon completion of this topic, you should be able to:

*   Understand the fundamental concepts of containerization and Docker.
*   Explain the benefits of using Docker for application development and deployment.
*   Describe the Docker architecture and its components (Docker Engine, Docker Images, Docker Containers, Docker Hub, Dockerfiles).
*   Build, run, and manage Docker containers using basic Docker commands.
*   Understand the difference between Docker images and Docker containers.
*   Describe how Docker facilitates microservices architecture.

## 1. Containerization and Docker Fundamentals

*   **What is Containerization?**

    *   Containerization is a form of operating system virtualization. Applications are packaged with their dependencies (libraries, binaries, configuration files) into a single, standardized unit called a container.  This ensures that the application runs consistently across different environments (development, testing, production).
    *   Contrast with Virtual Machines (VMs): VMs virtualize the *hardware*, requiring a full OS for each VM. Containers virtualize the *OS*, sharing the host OS kernel, making them lightweight and faster to start.

*   **Docker: The Leading Containerization Platform**

    *   Docker is an open-source platform that enables developers to automate the deployment, scaling, and management of applications using containerization.
    *   Docker uses the underlying OS kernel's features, such as namespaces and cgroups, to isolate and manage containers.

*   **Key Benefits of Containerization and Docker**

    *   **Consistency:**  Ensure applications run the same way regardless of the environment.
    *   **Portability:** Containers can be easily moved between different environments (laptops, servers, cloud platforms).
    *   **Efficiency:**  Containers are lightweight and consume fewer resources compared to VMs.
    *   **Speed:** Faster startup and deployment times compared to VMs.
    *   **Isolation:** Applications within containers are isolated from each other and the host OS, improving security.
    *   **Scalability:**  Easily scale applications by creating multiple container instances.
    *   **Version Control:**  Docker images allow versioning of applications and their dependencies.

## 2. Docker Architecture and Components

*   **Docker Engine**

    *   The core of the Docker platform.  It's a client-server application with these major components:
        *   **Docker Daemon (dockerd):**  The persistent background process that manages Docker images, containers, networks, and volumes. It listens for Docker API requests.
        *   **Docker Client (docker):** The command-line interface (CLI) tool that allows users to interact with the Docker daemon. It sends commands to the daemon to build, run, and manage containers.
        *   **Docker API:** A RESTful API used by the Docker client and other tools to communicate with the Docker daemon.

*   **Docker Images**

    *   A read-only template that contains the instructions for creating a Docker container.
    *   Think of it as a blueprint or a snapshot of an application and its dependencies.
    *   Images are built from a `Dockerfile`.
    *   Images are layered, with each layer representing a step in the `Dockerfile`. This layering optimizes storage and distribution.

*   **Docker Containers**

    *   A runnable instance of a Docker image.
    *   A container is a lightweight, isolated environment that runs the application defined in the image.
    *   Multiple containers can be created from the same image.
    *   Containers are ephemeral; they can be started, stopped, created, moved, and deleted.

*   **Docker Hub**

    *   A public registry of Docker images.
    *   It's a centralized repository where developers can share and download Docker images.
    *   Docker Hub contains official images for popular operating systems, programming languages, and applications.
    *   Organizations can also create private Docker registries for internal use.
    *   Alternatives to Docker Hub include Quay.io, Google Container Registry (GCR), and Amazon Elastic Container Registry (ECR).

*   **Dockerfiles**

    *   A text file containing instructions for building a Docker image.
    *   The `Dockerfile` defines the base image, installs dependencies, copies application code, sets environment variables, and specifies the command to run when the container starts.
    *   Example `Dockerfile`:

        ```dockerfile
        # Use an official Python runtime as a parent image
        FROM python:3.9-slim-buster

        # Set the working directory to /app
        WORKDIR /app

        # Copy the current directory contents into the container at /app
        COPY . /app

        # Install any needed packages specified in requirements.txt
        RUN pip install --no-cache-dir -r requirements.txt

        # Make port 8000 available to the world outside this container
        EXPOSE 8000

        # Define environment variable
        ENV NAME World

        # Run app.py when the container launches
        CMD ["python", "app.py"]
        ```

## 3. Basic Docker Commands

*   **`docker pull <image_name>`**: Downloads an image from a registry (e.g., Docker Hub).

    *   Example: `docker pull ubuntu:latest`

*   **`docker build -t <image_name> .`**: Builds a Docker image from a `Dockerfile` in the current directory. The `-t` option assigns a tag (name) to the image.

    *   Example: `docker build -t my-python-app .`

*   **`docker images`**: Lists all available Docker images on your system.

*   **`docker run <image_name>`**: Creates and runs a container from an image.

    *   Example: `docker run ubuntu` (Runs an interactive Ubuntu shell)
    *   Example: `docker run -d -p 8080:80 my-web-app` (`-d` runs the container in detached mode (background), `-p` maps port 8080 on the host to port 80 in the container.)

*   **`docker ps`**: Lists running containers.

*   **`docker ps -a`**: Lists all containers (running and stopped).

*   **`docker stop <container_id>`**: Stops a running container.

*   **`docker rm <container_id>`**: Removes a stopped container.

*   **`docker rmi <image_id>`**: Removes an image.

*   **`docker exec -it <container_id> bash`**:  Executes a command (e.g., `bash`) inside a running container, providing an interactive terminal.

*   **`docker logs <container_id>`**:  Displays the logs of a container.

## 4. Docker Images vs. Docker Containers

| Feature        | Docker Image                               | Docker Container                                  |
|----------------|--------------------------------------------|---------------------------------------------------|
| Definition     | A read-only template or blueprint.          | A runnable instance of an image.                  |
| State          | Static                                       | Dynamic                                         |
| Function       | Defines the application and its dependencies. | Executes the application.                        |
| Persistence    | Persists until explicitly deleted.         | Ephemeral; exists only while running (by default). |
| Creation       | Built from a `Dockerfile`.                 | Created from an image using `docker run`.         |
| Analogy        | Class in object-oriented programming.      | Object (instance of the class).                   |

## 5. Docker and Microservices

*   **Microservices Architecture:** An architectural style that structures an application as a collection of small, independent, and loosely coupled services, modeled around a business domain.

*   **How Docker Facilitates Microservices:**

    *   **Isolation:** Docker containers provide isolation for each microservice, preventing dependencies from conflicting and ensuring that failures in one service don't cascade to others.
    *   **Portability:**  Each microservice can be packaged as a Docker image and deployed consistently across different environments.
    *   **Scalability:** Docker simplifies scaling microservices by allowing you to easily create multiple container instances of each service.  Orchestration tools like Kubernetes automate the process.
    *   **Deployment:** Docker simplifies the deployment process by providing a consistent way to package and run microservices.
    *   **Resource Efficiency:**  Docker containers are lightweight, allowing you to run more microservices on the same hardware compared to VMs.

*   **Example:**  An e-commerce application might be composed of microservices for:
    *   Product Catalog
    *   Order Management
    *   Payment Processing
    *   User Authentication

    Each of these services can be packaged as a Docker container, making them independent and easily scalable.

## Important Points to Remember

*   Docker uses layered images to optimize storage and distribution.
*   `Dockerfile` is the blueprint for building Docker images.
*   Docker Hub is a public registry for sharing and downloading Docker images.
*   Containers are ephemeral by default; data is lost when the container stops unless volumes are used.
*   Docker is a key enabler for microservices architectures.
*   Always use the `-d` option when running containers in production to run them in detached mode.
*   Consider using orchestration tools like Kubernetes for managing complex deployments of multiple containers.

## Practice Questions and Exercises

**1. What is containerization, and how does it differ from virtualization (using VMs)?**

*Answer:* Containerization is a form of OS virtualization where applications and their dependencies are packaged into a single unit.  It shares the host OS kernel, making it lightweight.  Virtualization (VMs) virtualizes the hardware, requiring a full OS for each VM, making them resource-intensive.

**2. Explain the purpose of a `Dockerfile`.**

*Answer:* A `Dockerfile` is a text file containing instructions for building a Docker image. It specifies the base image, installs dependencies, copies application code, and defines the command to run when the container starts.

**3. What is the difference between `docker run` and `docker exec` commands?**

*Answer:* `docker run` creates and starts a new container from a Docker image. `docker exec` executes a command inside an *already running* container.

**4. How can you run a Docker container in the background?**

*Answer:* Use the `-d` (detached) option with the `docker run` command. Example: `docker run -d my-image`.

**5. You have a Docker image named `my-app:1.0`. How do you create a container from this image and map port 8080 on your host machine to port 80 on the container?**

*Answer:* `docker run -p 8080:80 my-app:1.0`

**6.  Explain how Docker facilitates the microservices architecture.**

*Answer:* Docker allows each microservice to be packaged as a self-contained unit with all its dependencies, ensuring consistency across environments.  It also promotes isolation, scalability, and easier deployment of individual microservices.  These containerized microservices can be easily managed and scaled independently.

**7. Write a simple `Dockerfile` for a Node.js application that copies the `package.json` and `app.js` files to the container, installs dependencies, and starts the application.**

```dockerfile
FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

This `Dockerfile` does the following:

*   `FROM node:16`: Uses the official Node.js version 16 image as the base image.
*   `WORKDIR /app`: Sets the working directory inside the container to `/app`.
*   `COPY package*.json ./`: Copies the `package.json` and `package-lock.json` files (if it exists) from the current directory on your host to the `/app` directory inside the container.
*   `RUN npm install`: Installs the dependencies listed in `package.json`.
*   `COPY . .`: Copies all the remaining files from your host (including `app.js`) to the `/app` directory inside the container.
*   `EXPOSE 3000`: Exposes port 3000, which the Node.js application will listen on.
*   `CMD ["npm", "start"]`: Defines the command to run when the container starts. This assumes your `package.json` has a script named "start" that runs your application (e.g., `node app.js`).

**8.  What is Docker Hub, and what is its purpose?**

*Answer:* Docker Hub is a cloud-based registry service provided by Docker for finding and sharing container images. It serves as a public repository where developers can upload and download Docker images, enabling collaboration and easy distribution of applications. It also hosts official images.

This concludes the introduction to Docker.  Further exploration of topics like Docker Compose, Docker Swarm, and Kubernetes will build upon these fundamental concepts.
