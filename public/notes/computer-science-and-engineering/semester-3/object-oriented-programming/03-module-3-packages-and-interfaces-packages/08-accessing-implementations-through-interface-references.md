---
title: "accessing implementations through interface references"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 3: Packages and Interfaces – Packages "
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8acbb"
status: "completed"
scrapedAt: "2026-05-20T16:29:02.808Z"
---
# OBJECT ORIENTED PROGRAMMING: Module 3 - Packages and Interfaces: Accessing Implementations Through Interface References

## Introduction

This module focuses on how interfaces and packages work together in Object-Oriented Programming (OOP), specifically how to access implementations of classes through interface references.  This is a core concept for achieving loose coupling, flexibility, and maintainability in your code.

## Learning Outcomes

By the end of this topic, you will be able to:

*   Understand the concept of accessing implementations through interface references.
*   Explain the benefits of using interface references.
*   Demonstrate how to create and use interfaces.
*   Demonstrate how to implement interfaces in classes.
*   Write code that accesses class implementations through interface references.
*   Explain the role of packages in structuring interface-based code.

## 1. Key Concepts and Definitions

*   **Interface:** A contract that defines a set of methods (and optionally constants) that a class must implement. It specifies *what* a class should do, but not *how* it should do it.
*   **Implementation:** The actual code that defines how an interface's methods are executed within a class. A class *implements* an interface.
*   **Interface Reference:** A variable or parameter declared using an interface type.  This reference can hold an instance of any class that implements that interface.
*   **Polymorphism:** The ability of an object to take on many forms. When using interface references, the same method call can behave differently depending on the actual object (the implementation) being referenced.
*   **Loose Coupling:**  A design principle where components of a system are independent of each other.  Interface references promote loose coupling because the client code only depends on the interface, not the specific implementation class.
*   **Packages:** A way to organize related classes and interfaces into namespaces. Packages help avoid naming conflicts and improve code organization.
