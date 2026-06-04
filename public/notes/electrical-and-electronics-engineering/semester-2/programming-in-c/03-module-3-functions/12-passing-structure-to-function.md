---
title: "Passing structure to function"
subject: "PROGRAMMING IN C"
module: "Module 3: Functions "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9906"
status: "completed"
scrapedAt: "2026-05-23T16:09:27.657Z"
---
# PROGRAMMING IN C - Module 3: Functions

## Topic: Passing Structures to Functions

Welcome, everyone! Today, we're diving into a really exciting and practical aspect of C programming: how to use structures with functions. This is a key skill that will help you organize your code, make it more readable, and tackle more complex problems. Remember, our overarching goal in this module is to learn how to break down big problems into smaller, manageable pieces using functions (that's **CO3** – utilizing functions to find solutions). And passing structures to functions is a prime example of how we can create these modular, well-defined components.

You've already learned about structures, right? Think of them as custom data types that group related variables under a single name. For example, instead of managing `studentName`, `studentRollNumber`, and `studentMarks` separately, we can bundle them into a `Student` structure. This is fantastic for organizing data. But what if we want to perform an action on this bundled data, like printing a student's details or calculating their average mark? That's where functions come in, and specifically, passing structures to functions.

### Why Pass Structures to Functions?

Imagine you have a function to display student information. If you were to pass each individual member of the `Student` structure (`student.name`, `student.rollNo`, `student.marks`) as separate arguments to your function, it would become quite cumbersome.

Let's say our `Student` structure looks like this:

```c
struct Student {
    char name[50];
    int rollNo;
    float marks;
};
```

A function to print might look like:

```c
void printStudentDetails(char name[], int roll, float mark) {
    printf("Name: %s\n", name);
    printf("Roll No: %d\n", roll);
    printf("Marks: %.2f\n", mark);
}
```

And you'd call it like: `printStudentDetails(myStudent.name, myStudent.rollNo, myStudent.marks);`

See how many arguments that is? Now, imagine a structure with 10 or 15 members! It would be a nightmare to manage. Passing the entire structure as a *single* argument makes our code much cleaner, more organized, and less prone to errors. This directly helps us achieve **CO3** by abstracting away the complexity of individual data members.

### How Do We Pass Structures to Functions?

C offers two primary ways to pass structures to functions:

1.  **Pass by Value:** This is the default and most common method. When you pass a structure by value, a *complete copy* of the original structure is created and passed to the function. Any modifications made to the structure *inside* the function will affect only this copy, not the original structure in the calling code.

2.  **Pass by Reference (using Pointers):** Here, instead of a copy, you pass the memory address of the original structure. The function then works directly with the original structure. Any changes made through the pointer will directly affect the original structure. This is often more efficient for large structures as it avoids the overhead of copying.

Let's explore each of these in detail.

#### 1. Passing Structures by Value

This is like giving a friend a photocopy of your notes. They can write all over the photocopy, make notes, highlight, but your original notes remain untouched.

**Concept:** When a structure is passed by value, the compiler creates a new, distinct copy of the structure in the function's local memory space. The function receives this copy.

**Syntax:**

```c
return_type function_name(struct structure_tag variable_name) {
    // Function body
    // Changes here affect only the copy
}
```

**Example:** Let's use our `Student` structure.

```c
#include <stdio.h>
#include <string.h> // For strcpy

// Define the Student structure
struct Student {
    char name[50];
    int rollNo;
    float marks;
};

// Function to display student details (passing by value)
void displayStudent(struct Student s) {
    printf("--- Student Details (Inside Function) ---\n");
    printf("Name: %s\n", s.name);
    printf("Roll No: %d\n", s.rollNo);
    printf("Marks: %.2f\n", s.marks);
    printf("--------------------------------------\n");

    // Let's try to modify the copy
    s.marks = 99.99; // This only changes the local copy of 's'
    printf("Marks modified inside function to: %.2f\n", s.marks);
}

int main() {
    struct Student student1;

    strcpy(student1.name, "Alice");
    student1.rollNo = 101;
    student1.marks = 85.50;

    printf("--- Before Function Call ---\n");
    printf("Original Student 1 Marks: %.2f\n", student1.marks);
    printf("---------------------------\n");

    // Call the function, passing student1 by value
    displayStudent(student1);

    printf("\n--- After Function Call ---\n");
    printf("Original Student 1 Marks: %.2f\n", student1.marks); // Notice this remains unchanged
    printf("---------------------------\n");

    return 0;
}
```

**Explanation:**
*   In `main`, `student1` is created.
*   When `displayStudent(student1);` is called, a *complete copy* of `student1` is made and assigned to the parameter `s` within `displayStudent`.
*   Inside `displayStudent`, we print the details of `s` (which are identical to `student1` at this point).
*   We then change `s.marks` to `99.99`. This modification *only* happens to the copy of the structure within the `displayStudent` function.
*   When the function returns, the copy (`s`) is destroyed. The original `student1` in `main` remains unaffected. This is a crucial point for exams!

**When to Use Pass by Value:**
*   When you want to ensure that the function does not alter the original structure.
*   For small structures where the overhead of copying is negligible.

**Key Takeaway (Pass by Value):** The original structure is safe. Changes are confined to the function's local copy.
