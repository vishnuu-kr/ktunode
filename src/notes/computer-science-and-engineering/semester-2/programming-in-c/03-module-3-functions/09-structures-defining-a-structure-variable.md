---
title: "Structures - Defining a Structure variable"
subject: "PROGRAMMING IN C"
module: "Module 3: Functions "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e56"
status: "completed"
scrapedAt: "2026-05-20T16:35:29.967Z"
---
## Programming in C: Module 3 - Functions
### Topic: Structures - Defining a Structure Variable

Hello everyone! Welcome back to our journey into the fascinating world of C programming. In our previous sessions, we've built a strong foundation with basic data types, control structures, and arrays. Today, we're going to take a significant leap forward and explore a powerful concept that allows us to group related data items together: **Structures**.

Think about real-world scenarios. We often deal with collections of information that naturally belong together. For example, when we talk about a "student," we're not just thinking about their roll number. We're thinking about their name, their marks in different subjects, their address, and maybe even their date of birth. All these pieces of information describe a single entity – a student. Similarly, a "book" has a title, an author, a price, and a publication year.

In C, we use **structures** to model these real-world entities by allowing us to create custom data types that can hold multiple, different types of data under a single name. This is a crucial step towards building more organized and sophisticated programs, directly relating to our Course Outcome **CO3: Utilize functions to find solution to the computational problems by dividing it into a number of modules and abstract data types.** Structures are a way to create these "abstract data types" – custom blueprints for our data.

Let's dive into how we actually define and use these structure variables.

### Understanding Structures: The Blueprint Analogy

Before we can create a structure variable, we need to define the *structure itself*. Think of defining a structure as creating a blueprint or a template. This blueprint specifies what kind of information our structure will hold, and importantly, the data types of each piece of information.

For instance, let's go back to our "student" example. What information do we want to store?

*   **Roll Number:** This is typically an integer.
*   **Name:** This is a sequence of characters, so a character array (string).
*   **Marks:** We might have marks in different subjects. For simplicity, let's say we have a single total marks, which could be a float or an integer.
*   **Address:** This could be another string.

So, our "blueprint" for a student might look something like this:

```c
struct student {
    int roll_no;
    char name[50]; // Assuming a name up to 49 characters + null terminator
    float marks;
    char address[100]; // Assuming an address up to 99 characters
};
```

Let's break down this definition:

*   **`struct student`**: This declares a structure tag named `student`. The `struct` keyword is essential. This `student` tag is like the name we give to our blueprint.
*   **`{ ... }`**: The curly braces enclose the *members* or *fields* of the structure. These are the individual data items that will make up our structure.
*   **`int roll_no;`**, **`char name[50];`**, etc.: These are the members. Each member has a name (like `roll_no`, `name`) and a data type (like `int`, `char[50]`).

This definition doesn't actually create any storage for student data yet. It's just the *definition* of what a "student" *is* in terms of data.
