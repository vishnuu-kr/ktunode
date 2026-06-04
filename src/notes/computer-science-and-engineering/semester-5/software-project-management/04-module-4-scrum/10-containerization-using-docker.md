---
title: "Containerization Using Docker"
subject: "SOFTWARE PROJECT MANAGEMENT"
module: "Module 4: Scrum "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b6a0"
status: "completed"
scrapedAt: "2026-05-20T16:49:23.342Z"
---
# Software Project Management: Module 4 - Scrum: Containerization Using Docker

These notes cover containerization using Docker within the context of a Scrum project, focusing on how it can improve development, testing, and deployment workflows.

**Learning Outcomes:**

*   Understand the concept of containerization and its benefits in software development.
*   Explain the role of Docker in containerization.
*   Describe how Docker can be used in a Scrum project to improve collaboration and efficiency.
*   Create a simple Dockerfile and build a Docker image.
*   Understand the basics of Docker Compose for multi-container applications.

## 1. Introduction to Containerization

*   **Definition:** Containerization is an operating system-level virtualization method for deploying and running distributed applications without launching an entire virtual machine (VM) for each application.

*   **Key Concepts:**
    *   **Isolation:**  Containers isolate applications from each other and from the underlying operating system, preventing conflicts and ensuring consistency.
    *   **Portability:** Containers package an application with all its dependencies (libraries, binaries, configuration files), allowing it to run consistently across different environments (development, testing, production).
    *   **Lightweight:** Containers share the host OS kernel, making them much smaller and faster to start than VMs.
    *   **Resource Efficiency:** Containers consume fewer resources (CPU, memory) compared to VMs, allowing for higher density and utilization.

*   **Benefits in Software Development:**
    *   **Consistency:**  Ensures applications behave the same in different environments, reducing "it works on my machine" issues.
    *   **Faster Deployment:**  Quickly deploy applications with all dependencies pre-configured.
    *   **Improved Collaboration:**  Developers can easily share and deploy containers with consistent environments.
    *   **Simplified Scaling:**  Easily scale applications by running multiple containers.
    *   **Microservices Architecture:**  Ideal for building and deploying microservices applications.
    *   **CI/CD Pipelines:** Streamlines Continuous Integration and Continuous Delivery pipelines.
    *   **Version Control of Environments:** A Dockerfile acts as a version control system for your application's runtime environment.

*   **Comparison with Virtual Machines (VMs):**

    | Feature           | Containers                      | Virtual Machines                     |
    | ----------------- | --------------------------------- | -------------------------------------- |
    | Virtualization    | Operating System Level            | Hardware Level                       |
    | Size              | Smaller (MBs)                     | Larger (GBs)                         |
    | Startup Time      | Faster (seconds)                  | Slower (minutes)                       |
    | Resource Usage    | Lower                             | Higher                               |
    | Isolation         | Less strong than VMs             | Stronger                               |
    | OS Requirement    | Shares host OS kernel           | Requires a full OS for each VM       |

## 2. Docker: The Containerization Platform

*   **Definition:** Docker is a platform for developing, shipping, and running applications in containers. It provides a set of tools and technologies to create, manage, and orchestrate containers.

*   **Key Components:**
    *   **Docker Engine:**  The core Docker runtime that builds, runs, and manages containers. It includes the Docker daemon (dockerd) and the Docker CLI.
    *   **Docker Image:** A read-only template containing instructions for creating a Docker container. It includes the application code, runtime, libraries, environment variables, and configuration files.
    *   **Docker Container:** A runnable instance of a Docker image. It's an isolated environment that executes the application.
    *   **Dockerfile:** A text file containing instructions for building a Docker image. It specifies the base image, application code, dependencies, and other configurations.
    *   **Docker Hub:** A public registry for storing and sharing Docker images.  Think of it like GitHub for Docker images.  You can also have private Docker registries.
    *   **Docker Compose:** A tool for defining and managing multi-container Docker applications. It uses a YAML file to define the services, networks, and volumes required for the application.

*   **Docker Workflow:**

    1.  **Create a Dockerfile:** Define the instructions for building the image.
    2.  **Build the Docker Image:** Use the `docker build` command to create the image from the Dockerfile.
    3.  **Run the Docker Container:** Use the `docker run` command to create and run a container from the image.
    4.  **Push the Image (Optional):** Push the image to a Docker registry (e.g., Docker Hub) to share it.
    5.  **Pull the Image (Optional):** Pull the image from a Docker registry to run it on a different machine.

## 3. Docker in Scrum Projects

*   **Benefits for Scrum Teams:**
    *   **Consistent Development Environments:**  Ensure all team members use the same development environment, eliminating environment-related bugs and inconsistencies.  This is *crucial* for velocity prediction in sprints.
    *   **Simplified Testing:**  Easily create and deploy test environments, allowing for faster and more reliable testing.
    *   **Improved Collaboration:**  Share Docker images with the team, allowing them to quickly set up and test each other's code.
    *   **Faster Iteration Cycles:**  Rapidly build, test, and deploy changes, enabling faster iteration cycles and faster feedback.
    *   **Reduced Integration Issues:**  Early integration and testing of components in a containerized environment reduces integration issues later in the development process.
    *   **Automated Deployment:** Docker integrates well with CI/CD pipelines, automating the deployment process and reducing the risk of errors.
    *   **Reproducible Builds:**  Docker ensures that builds are reproducible, meaning that the same Dockerfile will always produce the same image, regardless of the environment.  This increases trust in the build process.
    *   **Microservices Alignment:**  Containers align perfectly with microservices architecture, allowing teams to independently develop, deploy, and scale individual services.

*   **Docker in Different Scrum Events:**

    *   **Sprint Planning:**  Discuss the Docker environment requirements for the sprint's user stories.
    *   **Daily Scrum:**  Update the team on the status of Docker-related tasks, such as building images, testing containers, and deploying to environments.
    *   **Sprint Review:**  Demonstrate the working software in a Docker container, showcasing its functionality and stability.
    *   **Sprint Retrospective:**  Discuss how Docker has impacted the sprint's velocity and identify areas for improvement in the containerization workflow.

*   **Example Scenario:**  A Scrum team is working on a web application. They use Docker to create a consistent development environment for all team members. Each developer has a Dockerfile that defines the application's dependencies and configuration. They can quickly build and run the application in a container, ensuring that it behaves the same way on their local machines and in the testing environment. This reduces the time spent debugging environment-related issues and improves the overall efficiency of the sprint.  They can even use a Docker container inside their CI/CD pipeline for automated testing and deployment.

## 4. Creating a Simple Dockerfile

*   **Dockerfile Instructions:**

    | Instruction | Description                                                                                                     | Example                                          |
    | ----------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
    | `FROM`      | Specifies the base image to use.                                                                               | `FROM ubuntu:latest`                             |
    | `RUN`       | Executes commands inside the container during image building.                                                     | `RUN apt-get update && apt-get install -y python3` |
    | `COPY`      | Copies files and directories from the host machine to the container.                                             | `COPY . /app`                                    |
    | `ADD`       | Similar to COPY, but can also extract compressed files and fetch files from URLs.                                | `ADD myapp.tar.gz /app`                           |
    | `WORKDIR`   | Sets the working directory inside the container.                                                               | `WORKDIR /app`                                   |
    | `EXPOSE`    | Exposes a port on the container.                                                                                 | `EXPOSE 8080`                                    |
    | `CMD`       | Specifies the default command to run when the container starts.  Only ONE CMD instruction is allowed.             | `CMD ["python3", "app.py"]`                      |
    | `ENTRYPOINT`| Configures a container that will run as an executable. It's often used to define the main process of the image. | `ENTRYPOINT ["/usr/bin/executable"]`             |
    | `ENV`       | Sets environment variables inside the container.                                                                  | `ENV APP_HOME /app`                               |

*   **Example Dockerfile (Python Web Application):**

    ```dockerfile
    # Use an official Python runtime as a parent image
    FROM python:3.9-slim-buster

    # Set the working directory to /app
    WORKDIR /app

    # Copy the current directory contents into the container at /app
    COPY . /app

    # Install any needed packages specified in requirements.txt
    RUN pip install --no-cache-dir -r requirements.txt

    # Make port 80 available to the world outside this container
    EXPOSE 80

    # Define environment variable
    ENV NAME World

    # Run app.py when the container launches
    CMD ["python3", "app.py"]
    ```

*   **Building the Docker Image:**

    ```bash
    docker build -t my-python-app .
    ```

    *   `-t my-python-app`:  Tags the image with the name `my-python-app`.  This is how you'll refer to the image later.
    *   `.`: Specifies the current directory as the build context (where the Dockerfile is located).

*   **Running the Docker Container:**

    ```bash
    docker run -d -p 80:80 my-python-app
    ```

    *   `-d`: Runs the container in detached mode (in the background).
    *   `-p 80:80`: Maps port 80 on the host machine to port 80 on the container. This allows you to access the application from your browser.

## 5. Docker Compose for Multi-Container Applications

*   **Definition:** Docker Compose is a tool for defining and running multi-container Docker applications. It uses a YAML file (`docker-compose.yml`) to define the services, networks, and volumes required for the application.

*   **Key Concepts:**
    *   **Services:** Each service represents a single container that runs part of the application.
    *   **Networks:** Networks allow containers to communicate with each other.
    *   **Volumes:** Volumes allow containers to persist data.

*   **Example `docker-compose.yml` (Web Application with Database):**

    ```yaml
    version: "3.9"
    services:
      web:
        build: .  # Build context is the current directory (where the Dockerfile is)
        ports:
          - "8000:8000"
        depends_on:
          - db
        environment:
          DATABASE_URL: postgres://user:password@db:5432/mydb

      db:
        image: postgres:13
        environment:
          POSTGRES_USER: user
          POSTGRES_PASSWORD: password
          POSTGRES_DB: mydb
        volumes:
          - db_data:/var/lib/postgresql/data

    volumes:
      db_data:
    ```

*   **Explanation:**

    *   `version: "3.9"`: Specifies the Docker Compose file format version.
    *   `services:`: Defines the services that make up the application (web and db).
    *   `web:`:  Defines the web application service.
        *   `build: .`: Specifies that the Docker image for the web application should be built from the Dockerfile in the current directory.
        *   `ports: - "8000:8000"`: Maps port 8000 on the host machine to port 8000 on the web container.
        *   `depends_on: - db`: Specifies that the web application depends on the database service.  Docker Compose will start the `db` service *before* the `web` service.
        *   `environment`: Sets environment variables for the web application.  Crucially, it sets the database URL, which is how the web app will connect to the database.  Note that the hostname `db` *resolves to the database container's IP address within the Docker network*.
    *   `db:`: Defines the database service.
        *   `image: postgres:13`: Uses the official PostgreSQL 13 image from Docker Hub.
        *   `environment`: Sets environment variables for the database (user, password, database name).
        *   `volumes: - db_data:/var/lib/postgresql/data`: Creates a volume named `db_data` and mounts it to the `/var/lib/postgresql/data` directory inside the database container. This allows the database data to persist even when the container is stopped and restarted.
    *   `volumes:`: Defines the volumes used by the application. `db_data` is a named volume.  Data stored in named volumes is preserved across container restarts and updates, providing a persistent storage solution for database data.

*   **Running the Application with Docker Compose:**

    ```bash
    docker-compose up -d
    ```

    *   `docker-compose up`:  Creates and starts the services defined in the `docker-compose.yml` file.
    *   `-d`: Runs the services in detached mode (in the background).

*   **Stopping the Application with Docker Compose:**

    ```bash
    docker-compose down
    ```

## 6. Important Points to Remember

*   **Security:** Secure your Docker images and containers. Use trusted base images, scan for vulnerabilities, and follow security best practices.  Never store secrets (passwords, API keys) directly in your Dockerfiles.  Use environment variables or secrets management solutions instead.
*   **Image Size:** Keep your Docker images small. Use multi-stage builds to reduce image size and improve build performance.  Remove unnecessary dependencies and files.
*   **Docker Hub:**  Be aware of the terms of service for Docker Hub, especially if you are using it for private images.
*   **Orchestration:** For production deployments, consider using container orchestration platforms like Kubernetes or Docker Swarm to manage and scale your containers.  Docker Compose is primarily for development and testing.
*   **Logging:** Implement proper logging for your containers to monitor their health and troubleshoot issues.  Use a centralized logging system.
*   **Updates:**  Keep your Docker Engine and Docker Compose versions up-to-date to benefit from the latest features and security fixes.
*   **Docker ignore:** Use a `.dockerignore` file to exclude unnecessary files and directories from being copied into the Docker image. This can significantly reduce image size and build time.
*   **Resource Limits:**  Set resource limits (CPU, memory) for your containers to prevent them from consuming too many resources and affecting other containers on the same host.

## 7. Practice Questions/Exercises

1.  **Question:** What are the key benefits of using containerization in software development?
    *   **Answer:** Consistency, faster deployment, improved collaboration, simplified scaling, and microservices architecture.

2.  **Question:** Explain the difference between a Docker image and a Docker container.
    *   **Answer:** A Docker image is a read-only template, while a Docker container is a runnable instance of that image.

3.  **Question:** Write a Dockerfile that creates a simple Node.js application. Assume you have a `package.json` and `index.js` file in the same directory.

    ```dockerfile
    FROM node:16-alpine

    WORKDIR /app

    COPY package*.json ./

    RUN npm install

    COPY . .

    EXPOSE 3000

    CMD ["npm", "start"]
    ```

4.  **Question:** What is Docker Compose used for?
    *   **Answer:** Docker Compose is used for defining and managing multi-container Docker applications.

5.  **Question:** Explain the purpose of the `depends_on` keyword in a `docker-compose.yml` file.
    *   **Answer:** The `depends_on` keyword specifies that one service depends on another. Docker Compose will start the dependent service before starting the service that depends on it.

6. **Question:**  Why is it important to keep Docker images small?
    *   **Answer:** Smaller images download and deploy faster, consume less storage space, and improve overall application performance.

7. **Question:** How would you prevent sensitive information like API keys from being included directly in your Dockerfile?
    * **Answer:** Use environment variables injected at runtime or a secrets management solution.

These notes provide a solid foundation for understanding and utilizing Docker in Scrum projects. Remember to practice creating Dockerfiles and using Docker Compose to solidify your knowledge. Good luck!
