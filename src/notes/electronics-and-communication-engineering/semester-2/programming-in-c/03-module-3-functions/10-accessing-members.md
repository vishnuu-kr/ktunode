---
title: "Accessing members"
subject: "PROGRAMMING IN C"
module: "Module 3: Functions "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da378"
status: "completed"
scrapedAt: "2026-05-23T17:42:22.047Z"
---
# PROGRAMMING IN C

## Module 3: Functions

### Topic: Accessing Members

Welcome, everyone, to Module 3 of our Programming in C course! We've already laid the groundwork with basic programming constructs, and now we're diving into something truly powerful: **Functions**. Functions are the building blocks that allow us to break down complex problems into manageable, reusable pieces. Think of them like specialized workers in a factory, each performing a specific task.

This particular topic, "Accessing Members," might sound a little abstract at first. But don't worry, by the end of this session, you'll understand exactly what it means and why it's so crucial for writing efficient and organized C programs. Our primary goal here, as outlined in **Course Outcome 3 (CO3)**, is to equip you with the ability to "Utilize functions to find solution to the computational problems by dividing it into a number of modules and abstract data types." Accessing members is a key mechanism for how these modules, or functions, interact and share information.

### What are Functions and Why Do We Need Them?

Before we talk about "accessing members," let's briefly revisit what functions are. A function is essentially a self-contained block of code designed to perform a specific task. We define a function, give it a name, and then we can "call" that function whenever we need its task performed.

Why is this so important?

*   **Modularity:** As mentioned, functions break down large programs into smaller, more manageable pieces. This makes development, debugging, and maintenance much easier. Imagine building a car – you wouldn't try to assemble the entire thing at once; you'd work on the engine, the chassis, the electrical system separately. Functions are like these individual components.
*   **Reusability:** Once you write a function, you can use it multiple times in your program, or even in different programs, without having to rewrite the same code. This saves a lot of effort and reduces the chance of errors. Think about a `calculate_area_of_circle` function. You'll likely need this in many parts of your program, so writing it once and calling it is much better than writing the formula everywhere.
*   **Abstraction:** Functions hide the complex details of how a task is performed. When you use a function, you only need to know what it *does* and what information it *needs* (its inputs) and what it *returns* (its output). This is like using a calculator – you press the buttons, and it gives you the answer, without you needing to know the intricate workings of the circuitry inside.

This ties directly into **CO3**, where we emphasize dividing problems into modules. Functions are our primary tool for this modular approach.

### Understanding "Members" in the Context of Functions

Now, let's get to "accessing members." What are these "members"? In C, the term "members" is most commonly associated with two fundamental data structures: **structures** and **unions**.

*   **Structures (`struct`)**: A structure is a user-defined data type that allows you to group together variables of different data types under a single name. Think of it as a record or a blueprint for an entity. For example, you might define a `student` structure to hold a student's name (a string), their roll number (an integer), and their marks (a float).

    ```c
    struct student {
        char name[50];
        int roll_no;
        float marks;
    };
    ```

*   **Unions (`union`)**: A union is similar to a structure in that it groups different data types, but with a key difference: all members of a union share the same memory location. This means a union can only hold the value of one member at a time. They are useful for situations where you need to store data of different types, but only one type at any given moment, saving memory.

    ```c
    union data {
        int i;
        float f;
        char str[20];
    };
    ```

When we talk about "accessing members" in relation to functions, we mean **how functions can read from or modify the individual components (members) of a structure or a union**. This is a core part of how different parts of your program, organized into functions, can interact with and manage data.

This directly relates to **CO2**, which is about developing programs using arrays, matrices, and strings, and by extension, user-defined data types like structures. Understanding how functions interact with structures is a natural progression from handling basic data types.

### How Do Functions Access Structure/Union Members?

The primary way to access members of a structure or union in C is using the **dot operator (`.`)**.

Let's say you have a `student` structure variable named `s1`. To access the `name` member of `s1`, you would write:

```c
strcpy(s1.name, "Alice"); // Using strcpy to assign a string to the name member
```

To access the `roll_no`:

```c
s1.roll_no = 101;
```

And for `marks`:

```c
s1.marks = 85.5;
```

Now, how do functions fit into this? Functions can access structure members in several ways, primarily through **passing structures as arguments to functions**. This is where the magic happens and where **CO3** truly comes into play – we are indeed using functions to operate on our data modules.

#### 1. Passing a Structure by Value

When you pass a structure by value to a function, a complete copy of the structure is made and passed to the function. Any modifications made to the structure within the function will *not* affect the original structure outside the function.

Let's illustrate this with a function that prints student details:

```c
#include <stdio.h>
#include <string.h> // For strcpy

// Define the student structure
struct student {
    char name[50];
    int roll_no;
    float marks;
};

// Function to display student details (passing structure by value)
void display_student(struct student s) {
    printf("Student Name: %s\n", s.name);
    printf("Roll Number: %d\n", s.roll_no);
    printf("Marks: %.2f\n", s.marks);

    // Let's try to change something, but it won't affect the original
    s.marks = 0.0;
    printf("Marks inside function after change: %.2f\n", s.marks);
}

int main() {
    struct student student1;

    // Initialize the student1 structure
    strcpy(student1.name, "Bob");
    student1.roll_no = 102;
    student1.marks = 92.3;

    printf("--- Before calling display_student ---\n");
    printf("Original student1 marks: %.2f\n", student1.marks);

    // Call the function, passing student1 by value
    display_student(student1);

    printf("\n--- After calling display_student ---\n");
    // The original student1's marks remain unchanged
    printf("Original student1 marks after function call: %.2f\n", student1.marks);

    return 0;
}
```

**Explanation and Analogy:**

Imagine you have a physical report card (the `student` structure). When you pass it to a teacher "by value" to review (the `display_student` function), the teacher receives a photocopy of your report card. The teacher can write notes on the photocopy, even change a grade on it. But when they hand the photocopy back to you, your original report card remains exactly as it was.

This is how passing by value works for structures. The function `display_student` received a copy of `student1`. It could access `s.name`, `s.roll_no`, and `s.marks` using the dot operator. It even modified `s.marks` to `0.0`. However, this modification only happened on the copy, not the original `student1` in `main`.

**When is this useful?** When you want a function to *read* data from a structure but not *change* the original data.

#### 2. Passing a Structure by Pointer (More Common and Efficient)

Passing by value can be inefficient, especially for large structures, because it involves copying the entire structure's data. A more common and efficient approach is to pass a **pointer** to the structure. This way, the function receives the memory address of the original structure, not a copy.

When you pass a pointer to a structure, you need a special operator to access its members: the **arrow operator (`->`)**, also known as the structure pointer operator.

Let's modify the previous example to pass by pointer:

```c
#include <stdio.h>
#include <string.h> // For strcpy

// Define the student structure
struct student {
    char name[50];
    int roll_no;
    float marks;
};

// Function to display student details (passing structure pointer)
void display_student_ptr(struct student *s_ptr) { // s_ptr is a pointer to a student
    printf("Student Name: %s\n", s_ptr->name); // Accessing member using arrow operator
    printf("Roll Number: %d\n", s_ptr->roll_no);
    printf("Marks: %.2f\n", s_ptr->marks);

    // Let's try to change something, and it WILL affect the original
    s_ptr->marks = 0.0; // Modifying through the pointer
    printf("Marks inside function after change: %.2f\n", s_ptr->marks);
}

int main() {
    struct student student1;

    // Initialize the student1 structure
    strcpy(student1.name, "Alice");
    student1.roll_no = 101;
    student1.marks = 85.5;

    printf("--- Before calling display_student_ptr ---\n");
    printf("Original student1 marks: %.2f\n", student1.marks);

    // Call the function, passing the ADDRESS of student1
    display_student_ptr(&student1); // Pass the address using '&'

    printf("\n--- After calling display_student_ptr ---\n");
    // The original student1's marks ARE changed
    printf("Original student1 marks after function call: %.2f\n", student1.marks);

    return 0;
}
```

**Explanation and Analogy:**

Now, instead of a photocopy, you give the teacher the *original* report card and its locker number (the memory address). The teacher goes to that locker, opens the report card, reads it, and can even make corrections directly on the original. When the teacher is done, your report card in the locker has been updated.

This is passing by pointer. The `display_student_ptr` function receives the address of `student1`. The `->` operator is the key here. `s_ptr->name` is equivalent to `(*s_ptr).name`. It means "go to the memory location pointed to by `s_ptr`, and then access the `name` member there." Because we are accessing the original data, any changes made using the arrow operator directly affect `student1` in `main`.

**Why is this more common?**

*   **Efficiency:** It avoids the overhead of copying large structures.
*   **Modifying Original Data:** Often, functions are designed to modify the data passed to them, and passing by pointer allows this. This is crucial for functions that update records, perform calculations that change values, etc.

This skill is directly relevant to **CO4**, which deals with pointers for dynamic data handling. While this example doesn't use dynamic allocation, it demonstrates the fundamental concept of using pointers to access and manipulate data, which is a cornerstone of **CO4**.

**Key takeaway:** When passing structures to functions, passing by pointer using the arrow operator (`->`) is generally preferred for efficiency and the ability to modify the original data.

#### 3. Returning a Structure from a Function

Functions can also be designed to *create* or *modify* a structure and then *return* that structure to the calling function.

```c
#include <stdio.h>
#include <string.h>

struct point {
    int x;
    int y;
};

// Function to create and return a point structure
struct point create_point(int x_val, int y_val) {
    struct point p; // Declare a local structure variable
    p.x = x_val;
    p.y = y_val;
    return p; // Return the structure by value
}

int main() {
    struct point p1;

    // Call the function and assign the returned structure to p1
    p1 = create_point(10, 20);

    printf("Point coordinates: (%d, %d)\n", p1.x, p1.y);

    return 0;
}
```

**Explanation and Analogy:**

Think of `create_point` as a machine that takes two numbers (coordinates) as input and outputs a complete, labeled "point" object. The `main` function then receives this "point" object and stores it in its `p1` variable.

Here, the `create_point` function creates a *local* structure variable `p`. When `return p;` is executed, a copy of `p` is made and sent back to `main`. The `main` function then assigns this returned copy to `p1`.

**Important Note:** While returning structures by value is possible, it can be inefficient for very large structures due to the copying involved. In such cases, you might pass a pointer to an *existing* structure (in `main`) to the function, and the function would populate that structure and the `main` function would then use it. The approach shown above is perfectly fine for smaller structures like `point`.

This ability to return data structures from functions is a direct application of **CO3**, as functions are providing a complete data module as their output.

### Accessing Members of Structures within Structures (Nested Structures)

Just like you can have variables within structures, you can also have entire structures as members of another structure. This is called a **nested structure**. Accessing members of nested structures follows the same dot operator rule, chaining them together.

```c
#include <stdio.h>
#include <string.h>

// Inner structure
struct address {
    char street[50];
    char city[50];
    int pincode;
};

// Outer structure containing the inner structure
struct person {
    char name[50];
    struct address home_address; // Nested structure
    int age;
};

int main() {
    struct person p1;

    // Accessing members of the nested structure
    strcpy(p1.name, "John Doe");
    p1.age = 30;

    strcpy(p1.home_address.street, "123 Main St");
    strcpy(p1.home_address.city, "Anytown");
    p1.home_address.pincode = 12345;

    printf("Person: %s\n", p1.name);
    printf("Address: %s, %s, %d\n", p1.home_address.street, p1.home_address.city, p1.home_address.pincode);

    return 0;
}
```

**Explanation:**

Here, `p1.home_address` refers to the entire `address` structure within `p1`. To get to the `street` member within that `address` structure, we use `p1.home_address.street`. It's like navigating through folders on your computer: `MyDocuments -> Projects -> C_Project -> source.c`.

If we were to pass `p1` to a function by pointer, say `void process_person(struct person *person_ptr)`, we would access the nested members like this:

*   `person_ptr->name`
*   `person_ptr->home_address.street` (Wait, can we mix `->` and `.`? Yes, we can!)
*   Or, more explicitly using the dereference first: `(*person_ptr).home_address.street`
*   To access the street member using the pointer more directly: `person_ptr->home_address.street`

Let's re-evaluate this for nested structures when using pointers. If `person_ptr` points to a `struct person`, then `person_ptr->home_address` gives you the `struct address` *member*. To access `street` within that, you still use the dot operator on the `struct address`: `person_ptr->home_address.street`. This is a common and correct way.

Alternatively, and often seen as more explicit when dealing with nested pointers:
If you had a pointer to the `address` structure itself: `struct address *addr_ptr = &(person_ptr->home_address);`, then you'd use `addr_ptr->street`.
But within the `process_person` function, `person_ptr->home_address.street` is perfectly clear.

This concept is fundamental to building complex data representations, which is a key aspect of what we aim for in **CO2** and **CO3**.

### Accessing Union Members

Accessing members of a union is identical to accessing members of a structure using the dot operator (`.`) or the arrow operator (`->`) if you have a pointer to the union. The crucial difference, as we discussed, is that only one member of a union can hold a value at a time.

```c
#include <stdio.h>

union shared_data {
    int integer_val;
    float float_val;
    char char_val;
};

// Function to process a union
void process_union(union shared_data data, int type) {
    if (type == 1) { // Expecting an integer
        printf("Processing Integer: %d\n", data.integer_val);
    } else if (type == 2) { // Expecting a float
        printf("Processing Float: %.2f\n", data.float_val);
    } else if (type == 3) { // Expecting a character
        printf("Processing Character: %c\n", data.char_val);
    } else {
        printf("Unknown type.\n");
    }
}

int main() {
    union shared_data data_item;

    // Store an integer
    data_item.integer_val = 100;
    process_union(data_item, 1); // Pass the union and its intended type

    // Store a float - this overwrites the integer value
    data_item.float_val = 3.14;
    process_union(data_item, 2); // Pass the union and its intended type

    // Store a character - this overwrites the float value
    data_item.char_val = 'A';
    process_union(data_item, 3); // Pass the union and its intended type

    // What happens if we try to access the integer value now?
    // This is a common pitfall!
    printf("Accessing integer_val after storing char: %d\n", data_item.integer_val); // Garbage!

    return 0;
}
```

**Explanation and Analogy:**

A union is like a single box that can hold either a coin, a button, or a marble. You can only put one item in the box at a time. If you put in a coin, then take it out and put in a marble, the space that was occupied by the coin now holds the marble. If you try to look for the coin after putting in the marble, you'll just see the marble, not the coin you remember putting in.

In the example, we first stored `100` in `integer_val`. When `process_union` was called with `type = 1`, it correctly interpreted the data in memory as an integer. Then, we stored `3.14` in `float_val`. This *overwrote* the memory location where `100` was stored. When `process_union` was called with `type = 2`, it correctly interpreted the bits in memory as a float. Finally, storing `'A'` further modified the memory.

The last `printf` statement highlights the danger: `printf("Accessing integer_val after storing char: %d\n", data_item.integer_val);`. Because we last stored a character, the memory now contains the binary representation of 'A'. When we tell C to interpret this memory as an `int`, it gives us a nonsensical number. This is why it's critical to keep track of which type of data is currently stored in a union.

**Common Pitfall:** Trying to access a member of a union that is not the currently active member. Always know what type is stored!

### Connection to Course Outcomes

Let's quickly recap how this topic of "Accessing Members" ties into our Course Outcomes:

*   **CO2 (Arrays, matrices, strings):** Structures and unions are advanced data types that build upon our understanding of arrays and basic types. Accessing members is how we manipulate these complex data aggregates.
*   **CO3 (Functions for modularity and abstract data types):** This is where we see the strongest connection. Functions are the tools we use to process, manipulate, and manage data stored in structures and unions. Passing structures by value or by pointer allows functions to act as modules that operate on these data types, fulfilling the goal of modular programming.
*   **CO4 (Pointers for dynamic data handling):** Passing structures by pointer is a direct application of pointer knowledge. It's the efficient and often necessary way to let functions work with data without making unnecessary copies.

By mastering how functions access members of structures and unions, you are building a strong foundation for creating well-organized, efficient, and powerful C programs.

---

### Sample Questions and Answers

Here are some questions to help you solidify your understanding and prepare for exams:

**Question 1 (Conceptual):**
What is the primary operator used to access members of a structure when you have a structure variable, and what is the primary operator used when you have a pointer to a structure?

**Answer:**
The primary operator used to access members of a structure when you have a structure variable is the **dot operator (`.`)**.
When you have a pointer to a structure, the primary operator used to access its members is the **arrow operator (`->`)**.

**Question 2 (Application):**
Consider the following C code. What will be printed as the "Marks after function call"? Explain why.

```c
#include <stdio.h>

struct Result {
    int score;
    float percentage;
};

void update_result(struct Result r) {
    r.score = 95;
    r.percentage = 90.5;
}

int main() {
    struct Result student_res = {80, 75.0};
    update_result(student_res);
    printf("Marks after function call: %.1f\n", student_res.percentage);
    return 0;
}
```

**Answer:**
The output will be:
`Marks after function call: 75.0`

**Explanation:**
The `update_result` function receives the `student_res` structure **by value**. This means a copy of `student_res` is made and passed to the function. Inside `update_result`, the members `r.score` and `r.percentage` are modified. However, these modifications are applied only to the local copy (`r`) within the function. The original `student_res` structure in `main` remains unchanged. Therefore, when `student_res.percentage` is printed in `main`, it still holds its original value of `75.0`.

**Question 3 (Analysis/Comparison):**
Compare and contrast passing a structure to a function by value versus passing by pointer, in terms of efficiency and the ability to modify the original data.

**Answer:**
*   **Passing by Value:**
    *   **Efficiency:** Less efficient, especially for large structures, as it involves creating and passing a complete copy of the structure. This consumes more memory and processing time.
    *   **Modifying Original Data:** The function receives a copy. Any changes made to the structure members within the function affect only the copy, not the original structure in the calling function. This is useful when you want to read data without altering it.

*   **Passing by Pointer:**
    *   **Efficiency:** More efficient. It involves passing only the memory address of the structure, which is a small, fixed-size piece of data, regardless of the structure's size. This saves memory and reduces overhead.
    *   **Modifying Original Data:** The function receives the address of the original structure. Using the arrow operator (`->`) or dereferencing the pointer, the function can directly access and modify the members of the original structure. This is the preferred method when a function needs to update or change the data.

**Question 4 (Problem Solving/Code Generation):**
Write a C program that defines a `Book` structure with members `title` (char array), `author` (char array), and `pages` (int). Create a function `display_book_info` that takes a pointer to a `Book` structure and prints its details. In `main`, declare a `Book` variable, initialize it, and then call `display_book_info` to print its details.

**Answer:**

```c
#include <stdio.h>
#include <string.h> // For strcpy

// Define the Book structure
struct Book {
    char title[100];
    char author[100];
    int pages;
};

// Function to display book information using a pointer
void display_book_info(struct Book *book_ptr) {
    printf("--- Book Information ---\n");
    printf("Title: %s\n", book_ptr->title); // Accessing members via pointer
    printf("Author: %s\n", book_ptr->author);
    printf("Pages: %d\n", book_ptr->pages);
    printf("----------------------\n");
}

int main() {
    struct Book my_book; // Declare a Book variable

    // Initialize the Book variable
    strcpy(my_book.title, "The C Programming Language");
    strcpy(my_book.author, "Kernighan & Ritchie");
    my_book.pages = 250;

    // Call the function, passing the address of my_book
    display_book_info(&my_book);

    return 0;
}

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
