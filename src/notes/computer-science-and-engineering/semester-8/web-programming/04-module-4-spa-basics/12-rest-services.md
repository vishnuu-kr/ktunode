---
title: "REST Services"
subject: "WEB PROGRAMMING"
module: "Module 4: SPA – Basics"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc54"
status: "completed"
scrapedAt: "2026-05-20T17:28:45.528Z"
---
# Web Programming - Module 4: SPA – Basics - REST Services

## Introduction to REST Services

**What are REST Services?**

REST (Representational State Transfer) is an architectural style for designing networked applications. It's a set of principles that guide the design of web services that are simple, scalable, and efficient. RESTful services are often used to build APIs (Application Programming Interfaces) that allow different software applications to communicate with each other over the internet.

**Key Characteristics of REST:**

*   **Client-Server Architecture:** The client (e.g., a web browser, mobile app) is responsible for the user interface and user experience, while the server is responsible for data storage and retrieval. This separation allows for independent development and scaling.
*   **Stateless:** Each request from the client to the server must contain all the information necessary to understand and fulfill the request. The server should not store any client context between requests. This improves scalability and reliability.
*   **Cacheable:** Responses from the server can be cached by the client or by intermediary servers to improve performance.
*   **Uniform Interface:** This is a core principle of REST and is broken down into several sub-constraints:
    *   **Identification of Resources:** Resources (e.g., a user, a product, a list of articles) are identified by unique URIs (Uniform Resource Identifiers).
    *   **Manipulation of Resources Through Representations:** When a client wants to manipulate a resource, it does so through its representation. A representation is a snapshot of the resource at a particular moment in time (e.g., JSON, XML).
    *   **Self-descriptive Messages:** Each message contains enough information to describe how to process the message. This includes the HTTP method, headers, and the body of the message.
    *   **Hypermedia as the Engine of Application State (HATEOAS):** This is the most advanced principle. It means that clients should be able to discover other available actions and resources through links provided in the server's responses. This allows the server to evolve its API without breaking clients.
*   **Layered System:** A client cannot ordinarily tell whether it is connected directly to the end server, or to an intermediary along the way. Intermediary servers can be used for load balancing, caching, or security.
*   **Code on Demand (Optional):** Servers can temporarily extend client functionality by transferring executable code (e.g., JavaScript).

---

## Core Concepts of REST Services

### 1. Resources

*   **Definition:** In REST, anything that can be named and accessed can be considered a resource. This could be a document, an image, a service, or even an object in a database.
*   **Identification:** Resources are identified by unique URIs. For example:
    *   `https://api.example.com/users` (Represents a collection of users)
    *   `https://api.example.com/users/123` (Represents a specific user with ID 123)
    *   `https://api.example.com/products/456/reviews` (Represents reviews for a specific product)

### 2. HTTP Methods (Verbs)

HTTP methods are used to perform actions on resources. The most common HTTP methods used in RESTful services are:

*   **GET:**
    *   **Purpose:** Retrieve a representation of a resource or a collection of resources.
    *   **Characteristics:** Idempotent (multiple identical requests have the same effect as a single request), safe (does not change the state of the server).
    *   **Example:** `GET /users/123` (Retrieve user with ID 123)
    *   **Example:** `GET /products?category=electronics` (Retrieve products in the electronics category)

*   **POST:**
    *   **Purpose:** Create a new resource or submit data to a resource for processing.
    *   **Characteristics:** Not idempotent (multiple identical requests can create multiple resources or have different effects).
    *   **Example:** `POST /users` with a request body containing new user data (Create a new user)
    *   **Example:** `POST /orders` with order details (Create a new order)

*   **PUT:**
    *   **Purpose:** Update an existing resource or create a resource at a specific URI if it doesn't exist.
    *   **Characteristics:** Idempotent (multiple identical requests will result in the same final state).
    *   **Example:** `PUT /users/123` with updated user data (Update user with ID 123)
    *   **Example:** `PUT /products/456` with updated product data (Update product with ID 456)

*   **DELETE:**
    *   **Purpose:** Delete a resource.
    *   **Characteristics:** Idempotent (multiple identical requests will result in the same final state – the resource remains deleted).
    *   **Example:** `DELETE /users/123` (Delete user with ID 123)
    *   **Example:** `DELETE /products/456` (Delete product with ID 456)

*   **PATCH:**
    *   **Purpose:** Partially update an existing resource. Only the fields that need to be updated are sent in the request.
    *   **Characteristics:** Generally not idempotent (though can be designed to be).
    *   **Example:** `PATCH /users/123` with `{"email": "new.email@example.com"}` (Update only the email of user 123)

### 3. Representations

*   **Definition:** A representation is a snapshot of a resource at a particular moment in time. It's how the resource is transmitted between the client and the server.
*   **Formats:** Common formats include:
    *   **JSON (JavaScript Object Notation):** Lightweight, human-readable, and widely used in web APIs.
    *   **XML (Extensible Markup Language):** More verbose than JSON but still used.
    *   **HTML:** Can be used to represent resources, especially for browser-based interactions.
    *   **Plain Text:** For simple data.
*   **Content Negotiation:** The client can specify the desired representation format using the `Accept` header, and the server can respond with the most suitable format using the `Content-Type` header.
    *   **Example:** `Accept: application/json`

### 4. Status Codes

HTTP status codes provide information about the outcome of a client's request. Key status codes used in RESTful services:

*   **2xx (Success):**
    *   `200 OK`: The request was successful.
    *   `201 Created`: The request was successful, and a new resource was created. Often returned after a `POST` request.
    *   `204 No Content`: The request was successful, but there is no content to return. Often returned after a `DELETE` request.

*   **3xx (Redirection):**
    *   `301 Moved Permanently`: The requested resource has been permanently moved to a new URI.
    *   `304 Not Modified`: Used for caching; indicates the resource has not changed since the last request.

*   **4xx (Client Error):**
    *   `400 Bad Request`: The server could not understand the request due to invalid syntax.
    *   `401 Unauthorized`: The request requires user authentication.
    *   `403 Forbidden`: The server understood the request but refuses to authorize it.
    *   `404 Not Found`: The server cannot find the requested resource.
    *   `405 Method Not Allowed`: The HTTP method used is not allowed for the requested resource.
    *   `409 Conflict`: The request could not be completed due to a conflict with the current state of the resource.

*   **5xx (Server Error):**
    *   `500 Internal Server Error`: The server encountered an unexpected condition that prevented it from fulfilling the request.
    *   `503 Service Unavailable`: The server is not ready to handle the request (e.g., due to overload or maintenance).

---

## Designing RESTful APIs

**Principles for Good RESTful API Design:**

1.  **Use Nouns for Resources:** URIs should represent resources, not actions. Use nouns (singular or plural) to identify resources.
    *   **Good:** `/users`, `/products`, `/orders/123`
    *   **Bad:** `/getUsers`, `/createProduct`, `/deleteOrder`

2.  **Use HTTP Methods for Actions:** Use the appropriate HTTP methods to perform operations on resources.
    *   `GET /users` -> Retrieve all users.
    *   `POST /users` -> Create a new user.
    *   `GET /users/123` -> Retrieve user with ID 123.
    *   `PUT /users/123` -> Update user with ID 123.
    *   `DELETE /users/123` -> Delete user with ID 123.

3.  **Use Plural Nouns for Collections:** Represent collections of resources using plural nouns.
    *   `GET /users` (Get all users)
    *   `POST /users` (Create a new user within the users collection)

4.  **Use Hierarchical URIs:** Structure URIs to reflect the relationships between resources.
    *   `GET /users/123/orders` (Get all orders for user with ID 123)
    *   `GET /products/456/reviews` (Get all reviews for product with ID 456)

5.  **Use Query Parameters for Filtering, Sorting, and Pagination:** Don't clutter URIs with complex filtering logic. Use query parameters.
    *   `GET /products?category=electronics&sortBy=price&page=2&limit=10`

6.  **Use Request and Response Bodies for Data:** Use JSON or XML in request and response bodies for sending and receiving data.

7.  **Use Meaningful Status Codes:** Return appropriate HTTP status codes to indicate the outcome of the request.

8.  **Provide Error Details:** In case of an error (4xx or 5xx status codes), provide a clear and informative error message in the response body, often in JSON format.
    *   **Example Error Response:**
        ```json
        {
          "error": {
            "code": "NOT_FOUND",
            "message": "The requested user with ID 999 was not found."
          }
        }
        ```

9.  **Versioning:** Consider how you will version your API as it evolves. Common approaches include:
    *   **URI Versioning:** `https://api.example.com/v1/users`
    *   **Header Versioning:** `Accept: application/vnd.example.v1+json`
    *   **Query Parameter Versioning:** `https://api.example.com/users?version=1`

---

## Integrating REST Services in Single Page Applications (SPAs)

SPAs interact with RESTful services to fetch and manipulate data, creating dynamic and interactive user experiences.

**How SPAs Use REST Services:**

1.  **Initial Data Load:** When a SPA loads, it often makes `GET` requests to various REST endpoints to fetch initial data needed to render the UI.
2.  **User Actions:** When a user performs an action (e.g., submitting a form, clicking a button to add an item), the SPA makes `POST`, `PUT`, `DELETE`, or `PATCH` requests to the REST API to update data on the server.
3.  **Dynamic Updates:** As data is received from the REST API, the SPA updates its UI without requiring a full page reload.
4.  **Client-Side Routing:** SPAs typically use client-side routing. While the UI might change, the underlying URI often represents a specific "state" or "view" of the data fetched via REST.

**Technologies Used for AJAX and REST Integration:**

*   **JavaScript's `fetch` API:** The modern, promise-based way to make HTTP requests.
*   **`XMLHttpRequest` (XHR):** The older, event-driven API for making HTTP requests.
*   **Libraries like Axios:** A popular promise-based HTTP client for browsers and Node.js, offering more features and a cleaner API than native XHR.

**Example (using `fetch` API in JavaScript):**

```javascript
// Fetch a list of users
fetch('https://api.example.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse the response body as JSON
  })
  .then(data => {
    console.log('Users:', data);
    // Update your SPA's UI with the user data
  })
  .catch(error => {
    console.error('Error fetching users:', error);
    // Handle errors, e.g., display an error message to the user
  });

// Create a new user
const newUser = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com'
};

fetch('https://api.example.com/users', {
  method: 'POST', // Specify the HTTP method
  headers: {
    'Content-Type': 'application/json' // Indicate that the body is JSON
  },
  body: JSON.stringify(newUser) // Convert the JavaScript object to a JSON string
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(createdUser => {
    console.log('User created:', createdUser);
    // Update UI, e.g., add the new user to the list
  })
  .catch(error => {
    console.error('Error creating user:', error);
  });
```

---

## Practice Questions & Exercises

**Multiple Choice Questions:**

1.  Which HTTP method is used to retrieve a resource without modifying it?
    a) POST
    b) PUT
    c) GET
    d) DELETE

2.  What is the primary characteristic of a stateless REST service?
    a) The server stores client state between requests.
    b) Each request from the client must contain all necessary information.
    c) Responses are always cached by the client.
    d) The API uses only GET requests.

3.  Which of the following is a common representation format for REST APIs?
    a) HTML
    b) JSON
    c) XML
    d) All of the above

4.  A `201 Created` status code typically indicates:
    a) The request was successful, and a new resource was created.
    b) The client's request was malformed.
    c) The requested resource was not found.
    d) The server experienced an internal error.

5.  Which REST principle involves using links within responses to guide clients to other related resources or actions?
    a) Client-Server
    b) Stateless
    c) Cacheable
    d) HATEOAS

**Short Answer Questions:**

1.  Explain the difference between `PUT` and `POST` HTTP methods in the context of REST.
2.  Why is statelessness an important principle in RESTful web services?
3.  Describe the role of URIs in RESTful API design.
4.  What is the purpose of content negotiation in REST services?
5.  Give an example of a URI that represents a sub-resource.

**Practical Exercise:**

Imagine you are designing a simple REST API for managing a to-do list.

1.  Define URIs for the following operations:
    *   Get all to-do items.
    *   Get a specific to-do item by its ID.
    *   Create a new to-do item.
    *   Update an existing to-do item by its ID.
    *   Delete a to-do item by its ID.

2.  For each operation, specify the appropriate HTTP method and expected request/response body format (assume JSON).

---

## Answers to Practice Questions

**Multiple Choice Answers:**

1.  **c) GET**
2.  **b) Each request from the client must contain all necessary information.**
3.  **d) All of the above** (While JSON and XML are most common for APIs, HTML can also be used).
4.  **a) The request was successful, and a new resource was created.**
5.  **d) HATEOAS**

**Short Answer Answers:**

1.  **PUT vs. POST:**
    *   **POST:** Used to **create** a new resource or submit data to a resource. It's typically used when the server decides the URI for the new resource. It is **not idempotent**. Multiple identical POST requests can create multiple resources or have different effects.
    *   **PUT:** Used to **update** an existing resource or **create** a resource at a specific, client-defined URI if it doesn't exist. It is **idempotent**. Multiple identical PUT requests will have the same effect as a single request – the resource at that URI will be in the specified state.

2.  **Statelessness:** Statelessness means that the server does not store any client context (like session state) between requests. Each request from the client must contain all the information the server needs to process it. This improves scalability (servers don't need to manage session data), reliability (if one server fails, another can handle the request without losing client context), and visibility (each request can be understood independently).

3.  **Role of URIs:** URIs (Uniform Resource Identifiers) are fundamental to REST. They serve as the **unique identifiers for resources**. Clients use these URIs to locate and interact with specific resources on the server. They provide a clear and consistent way to address data and functionality.

4.  **Content Negotiation:** Content negotiation allows the client and server to agree on the format of the resource representation to be exchanged. The client uses the `Accept` header to indicate the formats it can understand (e.g., `application/json`, `application/xml`), and the server uses the `Content-Type` header to specify the format of the representation it is sending back. This enables flexibility and interoperability.

5.  **Example of a Sub-Resource URI:**
    *   `https://api.example.com/users/123/orders` (Represents the "orders" sub-resource belonging to the user with ID 123).
    *   `https://api.example.com/products/456/reviews` (Represents the "reviews" sub-resource for the product with ID 456).

**Practical Exercise Answers:**

Assuming a base URL like `https://api.example.com/todos`:

1.  **URIs and HTTP Methods:**

    *   **Get all to-do items:**
        *   **URI:** `/todos`
        *   **Method:** `GET`
        *   **Request Body:** None
        *   **Response Body:** `[ { "id": 1, "task": "Buy groceries", "completed": false }, { "id": 2, "task": "Learn REST", "completed": true } ]` (JSON array of to-do objects)

    *   **Get a specific to-do item by its ID:**
        *   **URI:** `/todos/{id}` (e.g., `/todos/1`)
        *   **Method:** `GET`
        *   **Request Body:** None
        *   **Response Body:** `{ "id": 1, "task": "Buy groceries", "completed": false }` (JSON object of the to-do item)
        *   **Error Response (if not found):** `404 Not Found`

    *   **Create a new to-do item:**
        *   **URI:** `/todos`
        *   **Method:** `POST`
        *   **Request Body:** `{ "task": "Write notes" }` (JSON object with task description)
        *   **Response Body:** `{ "id": 3, "task": "Write notes", "completed": false }` (JSON object of the newly created to-do item, including its assigned ID)
        *   **Status Code:** `201 Created`

    *   **Update an existing to-do item by its ID:**
        *   **URI:** `/todos/{id}` (e.g., `/todos/1`)
        *   **Method:** `PUT`
        *   **Request Body:** `{ "id": 1, "task": "Buy organic groceries", "completed": true }` (JSON object with updated details)
        *   **Response Body:** `{ "id": 1, "task": "Buy organic groceries", "completed": true }` (JSON object of the updated to-do item)
        *   **Status Code:** `200 OK` (or `204 No Content` if no body is returned)

    *   **Delete a to-do item by its ID:**
        *   **URI:** `/todos/{id}` (e.g., `/todos/1`)
        *   **Method:** `DELETE`
        *   **Request Body:** None
        *   **Response Body:** None
        *   **Status Code:** `204 No Content` (or `200 OK` if a confirmation message is returned)

---

## Important Points to Remember

*   **REST is an architectural style, not a strict protocol.** It's a set of guidelines for designing networked applications.
*   **Resources are key.** Everything is a resource, identified by a URI.
*   **HTTP methods define actions.** Use `GET`, `POST`, `PUT`, `DELETE`, `PATCH` appropriately.
*   **Statelessness is crucial for scalability and reliability.**
*   **JSON is the de facto standard for data exchange** in modern REST APIs.
*   **Meaningful URIs and status codes are vital for a well-designed API.**
*   **SPAs heavily rely on RESTful services** to fetch and manipulate data asynchronously, enabling dynamic user experiences without full page reloads.
*   **`fetch` API and libraries like Axios** are your primary tools in JavaScript for interacting with REST services.
