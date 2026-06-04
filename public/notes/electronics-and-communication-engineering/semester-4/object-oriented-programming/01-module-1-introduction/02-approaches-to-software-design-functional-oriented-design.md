---
title: "Approaches to Software Design  - Functional Oriented Design"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe66b"
status: "completed"
scrapedAt: "2026-05-23T17:51:11.729Z"
---
# OBJECT ORIENTED PROGRAMMING - Module 1: Introduction

## Topic: Approaches to Software Design - Functional Oriented Design

This module introduces fundamental concepts in software design, focusing on the **Functional Oriented Design (FOD)** approach. Understanding FOD is crucial as it serves as a contrast to the Object-Oriented Design (OOD) paradigm, which will be explored later.

### 1. Learning Outcomes Covered in this Topic

While this topic primarily lays the groundwork for understanding different design approaches, it contributes to:

*   **CO1: Summarize the object-oriented concepts - classes, objects, constructors, data hiding, inheritance and polymorphism and to illustrate it using UML diagrams. (Knowledge Level: K2)**
    *   By understanding FOD, we begin to appreciate the limitations that OOD aims to address, indirectly highlighting the importance of concepts like encapsulation (related to data hiding).
*   **CO2: Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs. (Knowledge Level: K3)**
    *   FOD often relies heavily on control statements and data manipulation, which are foundational to programming in any paradigm.

### 2. Key Concepts and Definitions

#### 2.1. What is Software Design?

Software design is the process of planning and defining the architecture, components, interfaces, and other characteristics of a software system. It's about deciding *how* a software system will be built to meet specified requirements.

**Reference:** *Fundamentals of Software Engineering* by Rajib Mall emphasizes that design is a crucial phase that bridges requirements and implementation.

#### 2.2. Approaches to Software Design

There are various ways to approach the design of a software system. Two prominent ones are:

*   **Functional Oriented Design (FOD)**
*   **Object-Oriented Design (OOD)** (which we will cover in subsequent modules)

#### 2.3. Functional Oriented Design (FOD)

Functional Oriented Design is a software development approach that decomposes a system into a set of functions or procedures. The focus is on the *actions* or *processes* that the system performs.

*   **Core Idea:** Treat the system as a collection of functions, each responsible for a specific task.
*   **Data Handling:** Data is often passed between these functions, and it can be global or passed as parameters.
*   **Structure:** The system is organized as a hierarchy of functions, where a main function calls other sub-functions.
*   **Emphasis:** The emphasis is on the "what" and "how" of the processes.

**Reference:** While Herbert Schildt's *Java: The Complete Reference* primarily focuses on OOD, understanding FOD helps appreciate the evolution of programming paradigms. Balagurusamy's *Programming JAVA a Primer* might touch upon procedural aspects before diving into OOP.

##### 2.3.1. Characteristics of FOD

*   **Top-Down Decomposition:** The system is broken down from a high-level view into smaller, more manageable functions.
*   **Procedural Flow:** The program execution follows a sequential flow of control through various functions.
*   **Data as a Separate Entity:** Data is often considered separate from the functions that operate on it.
*   **Focus on Algorithms:** The design prioritizes the algorithms and logic required to perform specific tasks.

##### 2.3.2. How FOD Works (Conceptual Flow)

1.  **Identify Main Functionality:** Determine the overall purpose of the system.
2.  **Decompose into Sub-Functions:** Break down the main functionality into smaller, independent functions.
3.  **Data Flow:** Define how data is passed between these functions.
4.  **Implement Functions:** Write the code for each function.
5.  **Integrate:** Assemble the functions into a complete program.

#### 2.4. Comparison with Object-Oriented Design (OOD) - A Glimpse

While this topic is about FOD, it's useful to foreshadow the comparison:

| Feature          | Functional Oriented Design (FOD) | Object-Oriented Design (OOD) |
| :--------------- | :------------------------------- | :--------------------------- |
| **Focus**        | Functions/Procedures             | Objects/Data                 |
| **Decomposition** | Top-down, into functions         | Bottom-up, into objects      |
| **Data Handling** | Data is separate from functions  | Data and functions bundled (encapsulation) |
| **Modularity**   | Based on functions               | Based on objects             |
| **Reusability**  | Primarily function reusability   | Object reusability (inheritance) |

**Reference:** Bahrami's *Object Oriented Systems Development using the Unified Modeling Language* and Barclay & Savage's *Object Oriented Design with UML and Java* will delve deeper into OOD, making the contrast with FOD clearer.

### 3. Examples of Functional Oriented Design

Consider a simple calculator program. In FOD, we might design it with the following functions:

*   `add(num1, num2)`: Takes two numbers and returns their sum.
*   `subtract(num1, num2)`: Takes two numbers and returns their difference.
*   `multiply(num1, num2)`: Takes two numbers and returns their product.
*   `divide(num1, num2)`: Takes two numbers and returns their quotient.
*   `getUserInput()`: Prompts the user for numbers and the operation.
*   `displayResult(result)`: Displays the calculated result.

The main program flow would be:

1.  Call `getUserInput()` to get numbers and operation.
2.  Based on the operation, call the appropriate `add`, `subtract`, `multiply`, or `divide` function.
3.  Pass the result to `displayResult()`.

**Example in Pseudocode:**

```pseudocode
// Main program
function main() {
    num1 = 0
    num2 = 0
    operation = ""
    result = 0

    // Get input
    input_data = getUserInput()
    num1 = input_data.number1
    num2 = input_data.number2
    operation = input_data.operation

    // Perform operation
    if (operation == "+") {
        result = add(num1, num2)
    } else if (operation == "-") {
        result = subtract(num1, num2)
    } // ... and so on

    // Display result
    displayResult(result)
}

// Helper functions
function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

// ... other functions
```

**Important Point to Remember:** In this FOD example, `num1`, `num2`, `operation`, and `result` are treated as separate data items that are passed around between functions.

### 4. Advantages of Functional Oriented Design

*   **Simplicity for Small Projects:** For straightforward, task-oriented programs, FOD can be easier to grasp and implement initially.
*   **Clear Process Flow:** The step-by-step nature of functions makes the execution path easy to follow for simple logic.
*   **Good for Sequential Tasks:** Well-suited for problems that can be naturally broken down into a series of sequential operations.

### 5. Disadvantages of Functional Oriented Design

*   **Difficulty in Managing Complexity:** As the system grows, managing a large number of functions and their interactions can become very difficult.
*   **Data Scattering:** Data can be scattered across many functions, making it hard to track and maintain. Changes to data structures can require modifying numerous functions.
*   **Limited Reusability:** While functions can be reused, reusing entire sets of related data and behaviors is challenging.
*   **Maintenance Issues:** Modifications in one part of the system can have unintended consequences in other parts due to shared data and dependencies.
*   **Poor Modularity:** Functions might have strong dependencies on global data or other specific functions, reducing their independence.
*   **Difficulty in Real-World Modeling:** Real-world problems often involve entities with both data and behavior, which FOD doesn't directly model.

**Reference:** Deitel & Deitel's *Java How to Program, Early Objects* would likely contrast these disadvantages with the benefits of OOD.

### 6. Practice Questions and Exercises

**Question 1:**
What is the primary focus of Functional Oriented Design?

*   A) Objects and their interactions
*   B) Functions and procedures
*   C) Data structures and databases
*   D) User interfaces and graphical elements

**Answer:** B) Functions and procedures

**Question 2:**
In Functional Oriented Design, how is data typically handled?

*   A) Data is encapsulated within objects.
*   B) Data is global or passed as parameters between functions.
*   C) Data is immutable and cannot be changed.
*   D) Data is only accessible by specific external modules.

**Answer:** B) Data is global or passed as parameters between functions.

**Question 3:**
Which of the following is a common characteristic of FOD?

*   A) Top-down decomposition into functions
*   B) Bottom-up composition of objects
*   C) Emphasis on data hiding
*   D) Inheritance and polymorphism

**Answer:** A) Top-down decomposition into functions

**Question 4:**
Consider a simple program to calculate the area of a circle. If you were to design this using FOD, what might be some of the functions you would create?

**Answer:**
Possible functions could include:
*   `get_radius_from_user()`: To get the radius input from the user.
*   `calculate_circle_area(radius)`: To compute the area using the formula pi * radius^2.
*   `display_area(area)`: To show the calculated area to the user.
*   `main()`: To orchestrate the calls to these functions.

**Question 5:**
What is a significant disadvantage of Functional Oriented Design when dealing with large and complex software systems?

**Answer:**
A significant disadvantage is the difficulty in managing complexity. As the system grows, the sheer number of functions and their interdependencies become hard to track and maintain. Data scattering across functions also leads to maintenance headaches.

### 7. Important Points to Remember

*   **FOD is Function-centric:** The core building block is the function.
*   **Top-Down Approach:** Break down the problem into smaller, sequential functions.
*   **Data is Often Separate:** Data is treated as distinct from the operations performed on it.
*   **Contrast with OOD:** FOD serves as a foundational understanding before delving into the more modular and data-centric Object-Oriented Design.
*   **Limitations for Complexity:** While simple for basic tasks, FOD struggles with managing large-scale, complex software.

This topic provides a crucial starting point for understanding how software can be structured. By recognizing the strengths and weaknesses of Functional Oriented Design, we can better appreciate the advantages offered by Object-Oriented Design in subsequent modules.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
