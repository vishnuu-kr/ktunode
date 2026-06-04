---
title: "Proxy"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Software design "
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c8a2"
status: "completed"
scrapedAt: "2026-05-20T17:11:18.377Z"
---
# Software Engineering: Module 2: Software Design - The Proxy Pattern

---

## Module 2: Software Design - The Proxy Pattern

This module delves into the **Proxy pattern**, a structural design pattern that provides a surrogate or placeholder for another object to control access to it.

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Understand the purpose and intent of the Proxy pattern.**
*   **Identify the key participants and their roles in the Proxy pattern.**
*   **Recognize different types of Proxy patterns and their applications.**
*   **Implement the Proxy pattern in object-oriented programming.**
*   **Explain the benefits and drawbacks of using the Proxy pattern.**
*   **Apply the Proxy pattern to solve real-world software design problems.**

---

### 1. Purpose and Intent of the Proxy Pattern

*   **Core Idea:** To provide a surrogate or placeholder for another object to control access to it.
*   **Intent:**
    *   **Control Access:** The proxy acts as an intermediary, allowing you to perform actions *before* or *after* accessing the real object.
    *   **Add Functionality:** It can introduce additional behavior without modifying the original object's code.
    *   **Decouple:** It decouples the client from the real object, allowing for flexibility and extensibility.

**When to use the Proxy pattern:**

*   When you need a level of indirection to an object.
*   When you want to protect the real object from certain actions.
*   When you want to add behavior to an object without modifying its class.
*   When you want to manage the lifecycle or resource usage of an object.

---

### 2. Key Participants and Roles

The Proxy pattern involves three key participants:

*   **Subject Interface:**
    *   Defines the common interface for both the RealSubject and the Proxy.
    *   This ensures that the client can interact with the Proxy as if it were the RealSubject.
    *   Typically declares the operations that clients can request.

*   **RealSubject:**
    *   Represents the actual object that the proxy is controlling access to.
    *   It performs the core business logic.
    *   The Proxy delegates requests to the RealSubject.

*   **Proxy:**
    *   Maintains a reference to the RealSubject.
    *   Implements the same Subject interface as the RealSubject.
    *   Controls access to the RealSubject.
    *   May create the RealSubject or request it from some other source.
    *   Can perform actions before or after forwarding the request to the RealSubject.

---

### 3. Types of Proxy Patterns

The Proxy pattern can be categorized based on the type of indirection or functionality it provides:

#### 3.1. Virtual Proxy

*   **Purpose:** To defer the creation and initialization of an expensive object until it's actually needed.
*   **How it works:**
    *   The Proxy holds a reference to the RealSubject (initially `null`).
    *   When a method is called on the Proxy for the first time, it creates the RealSubject and then delegates the call.
    *   Subsequent calls are directly delegated to the existing RealSubject.
*   **Benefits:**
    *   **Performance Improvement:** Avoids the overhead of creating expensive objects when they are not used.
    *   **Resource Management:** Helps manage resources by creating objects only when necessary.
*   **Example:** Loading a large image file. The Virtual Proxy can display a placeholder until the image is fully loaded.

#### 3.2. Remote Proxy

*   **Purpose:** To represent an object that resides in a different address space.
*   **How it works:**
    *   The Proxy acts as a local representative for a remote object.
    *   It handles the communication (e.g., network requests, serialization) with the remote RealSubject.
    *   The client interacts with the Remote Proxy as if it were a local object.
*   **Benefits:**
    *   **Abstraction of Network Communication:** Hides the complexity of remote object access.
    *   **Simplifies Distributed Systems:** Makes remote objects appear local to the client.
*   **Example:** Accessing a web service or a remote database.

#### 3.3. Protection Proxy

*   **Purpose:** To control access to the RealSubject based on certain permissions or conditions.
*   **How it works:**
    *   The Proxy checks the authorization of the client before forwarding the request to the RealSubject.
    *   It can deny access or perform specific actions based on user roles or other criteria.
*   **Benefits:**
    *   **Security Enforcement:** Provides an additional layer of security.
    *   **Access Control:** Manages who can access what.
*   **Example:** An administrator proxy that only allows certain operations by authorized users.
