---
title: "Passing structure to function"
subject: "PROGRAMMING IN C"
module: "Module 3: Functions "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da37a"
status: "completed"
scrapedAt: "2026-05-23T17:42:24.285Z"
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

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


#### 2. Passing Structures by Reference (using Pointers)

This is like giving someone the *actual* document and saying, "Here, edit this directly." Whatever they do to it, it's the original document that gets changed. This is very useful when you *intend* for a function to modify the original data.

**Concept:** Instead of passing the entire structure, you pass the memory address of the structure. The function then uses this address (a pointer) to access and manipulate the original structure's members. This is a direct application of **CO4** where we learn to use pointers for data handling.

**Syntax:**

```c
return_type function_name(struct structure_tag *pointer_variable) {
    // Function body
    // Use -> operator to access members through the pointer
}
```

**Example:** Using the same `Student` structure.

```c
#include <stdio.h>
#include <string.h> // For strcpy

// Define the Student structure
struct Student {
    char name[50];
    int rollNo;
    float marks;
};

// Function to update student marks (passing by reference)
void updateStudentMarks(struct Student *sPtr) {
    printf("--- Inside Function (Updating Marks) ---\n");
    printf("Current marks via pointer: %.2f\n", sPtr->marks);

    // Modify the marks using the pointer
    sPtr->marks = 95.75; // This WILL change the original student1.marks
    printf("Marks updated to: %.2f\n", sPtr->marks);
    printf("--------------------------------------\n");
}

// Function to display student details using a pointer
void displayStudentByRef(struct Student *sPtr) {
    printf("--- Student Details (Via Pointer) ---\n");
    printf("Name: %s\n", sPtr->name);
    printf("Roll No: %d\n", sPtr->rollNo);
    printf("Marks: %.2f\n", sPtr->marks);
    printf("-------------------------------------\n");
}

int main() {
    struct Student student1;

    strcpy(student1.name, "Bob");
    student1.rollNo = 102;
    student1.marks = 78.00;

    printf("--- Before Function Calls ---\n");
    printf("Original Student 1 Marks: %.2f\n", student1.marks);
    printf("---------------------------\n");

    // Call updateStudentMarks, passing the address of student1
    updateStudentMarks(&student1);

    printf("\n--- After Update Function Call ---\n");
    printf("Original Student 1 Marks: %.2f\n", student1.marks); // Notice this HAS changed!
    printf("---------------------------------\n");

    // Now let's display using a function that takes a pointer
    displayStudentByRef(&student1);

    return 0;
}
```

**Explanation:**
*   In `main`, `student1` is created.
*   When `updateStudentMarks(&student1);` is called, the *address* of `student1` is passed to the `sPtr` pointer in the function.
*   Inside `updateStudentMarks`, `sPtr->marks = 95.75;` uses the `->` (arrow operator) to dereference the pointer and access the `marks` member of the *original* `student1` structure. This modification is permanent.
*   When the function returns, `student1.marks` in `main` has indeed been updated.
*   Similarly, `displayStudentByRef` takes a pointer and uses `->` to access the original data for display.

**Why the `->` Operator?**
Remember how we access members of a structure using the dot (`.`) operator? For example, `student1.marks`. When you have a *pointer* to a structure, say `struct Student *sPtr`, you can't use `sPtr.marks` because `sPtr` is an address, not the structure itself. The `->` operator is a shorthand that does two things:
1.  It dereferences the pointer (like `(*sPtr)`) to get to the structure itself.
2.  It then accesses the member (like `.marks`).
So, `sPtr->marks` is equivalent to `(*sPtr).marks`. The arrow operator is cleaner and more conventional when working with structure pointers.

**When to Use Pass by Reference (Pointers):**
*   When you want the function to be able to *modify* the original structure. This is very common for functions that update or process data.
*   For very large structures. Copying them can be computationally expensive and consume more memory. Passing a pointer is much more efficient.
*   When returning multiple values from a function. You can pass pointers to variables (which could be members of a structure or separate variables) and let the function modify them.

**Key Takeaway (Pass by Reference):** The function operates directly on the original structure. Changes made via the pointer affect the original.

### Working with Arrays of Structures

Just like you can pass arrays of basic data types to functions, you can also pass arrays of structures. The principles remain the same.

**Passing Arrays of Structures by Value:**
This would involve copying the *entire array* of structures. This is rarely done in practice due to extreme inefficiency, especially for large arrays of large structures. You would typically pass a pointer to the first element and the size of the array.

**Passing Arrays of Structures by Reference (Recommended):**
This is the standard and efficient way. You pass a pointer to the first element of the array and the number of elements.

**Example:**

```c
#include <stdio.h>
#include <string.h>

struct Student {
    char name[50];
    int rollNo;
    float marks;
};

// Function to display details of all students in an array
// Takes a pointer to the first Student and the number of students
void displayAllStudents(struct Student *students, int count) {
    printf("\n--- Displaying All Students ---\n");
    for (int i = 0; i < count; i++) {
        // Accessing members of the i-th student using pointer arithmetic and ->
        printf("Student %d:\n", i + 1);
        printf("  Name: %s\n", (students + i)->name); // or students[i].name
        printf("  Roll No: %d\n", (students + i)->rollNo); // or students[i].rollNo
        printf("  Marks: %.2f\n", (students + i)->marks); // or students[i].marks
    }
    printf("-------------------------------\n");
}

// Function to find the student with the highest marks
// Returns a pointer to the student with the highest marks
struct Student* findTopper(struct Student *students, int count) {
    if (count <= 0) {
        return NULL; // No students
    }

    struct Student *topperPtr = &students[0]; // Assume first student is topper initially
    float maxMarks = students[0].marks;

    for (int i = 1; i < count; i++) {
        if (students[i].marks > maxMarks) {
            maxMarks = students[i].marks;
            topperPtr = &students[i]; // Update topper pointer
        }
    }
    return topperPtr;
}

int main() {
    struct Student class[3];

    strcpy(class[0].name, "Alice");
    class[0].rollNo = 101;
    class[0].marks = 85.50;

    strcpy(class[1].name, "Bob");
    class[1].rollNo = 102;
    class[1].marks = 78.00;

    strcpy(class[2].name, "Charlie");
    class[2].rollNo = 103;
    class[2].marks = 92.30;

    // Pass the array (which decays to a pointer to its first element)
    // and the size to the display function.
    displayAllStudents(class, 3);

    // Find the topper
    struct Student *classTopper = findTopper(class, 3);

    if (classTopper != NULL) {
        printf("\n--- Class Topper ---\n");
        printf("Name: %s\n", classTopper->name);
        printf("Roll No: %d\n", classTopper->rollNo);
        printf("Marks: %.2f\n", classTopper->marks);
        printf("--------------------\n");
    }

    return 0;
}
```

**Explanation:**
*   In `displayAllStudents`, `struct Student *students` receives the address of the first element of the `class` array. `count` tells us how many students there are.
*   Inside the loop, `(students + i)` is pointer arithmetic. It moves the pointer `i` positions forward in memory, effectively pointing to the `i`-th `Student` structure.
*   We then use `->` to access the members of that specific student. Notice how `students[i].name` is an alternative way to access the same data, making it more readable. This is a good point for **CO2** (using arrays) and **CO4** (pointers).
*   In `findTopper`, we return a *pointer* to the structure with the highest marks. This is very efficient as we don't copy the entire structure, just its address.

### Common Pitfalls and Exam Tips

1.  **Forgetting the `&` when passing by reference:** If a function expects `struct Student *ptr`, you *must* pass `&myStruct`. Forgetting the `&` will cause a type mismatch error (or unexpected behavior if it compiles).
2.  **Using `.` instead of `->` with pointers:** If you have `struct Student *sPtr`, you must use `sPtr->member`, not `sPtr.member`. This is a very common mistake for beginners.
3.  **Modifying a copy instead of the original:** If you intend to modify the original structure but accidentally pass by value, your changes will be lost upon function return. Always double-check if you need to pass by value or reference based on your function's purpose.
4.  **Passing large structures by value repeatedly:** Be mindful of performance. If you're working with large structures and calling functions that operate on them frequently, passing by reference (pointer) is usually the better choice.
5.  **Array Decay:** When you pass an array name to a function, it "decays" into a pointer to its first element. So, `void myFunction(int arr[])` is equivalent to `void myFunction(int *arr)`. When dealing with structures, `void displayStudents(struct Student s[])` is equivalent to `void displayStudents(struct Student *s)`.

### Relating to Course Outcomes

*   **CO1 (Infer a computational problem and develop C programs...):** Understanding how to pass structures helps in designing programs that model real-world entities efficiently. For example, a program managing inventory might use a `Product` structure, and functions to update stock or calculate prices would effectively use structure passing.
*   **CO2 (Develop C programs using arrays, matrices, and strings):** We've seen how to handle arrays of structures, which is a direct application of this outcome. Structuring related data and then managing collections of these structures is fundamental.
*   **CO3 (Utilize functions to find solution... modules and abstract data types):** Passing structures is a prime example of using functions to encapsulate operations on abstract data types (our custom structures). It promotes modularity and makes code easier to understand and maintain.
*   **CO4 (Develop C programs using pointers for dynamic data handling):** Passing structures by reference is a direct application of pointers. It demonstrates how pointers allow us to efficiently manage and modify data, especially complex data types like structures.

So, by mastering passing structures, you're not just learning a C syntax trick; you're learning a powerful technique for building robust, organized, and efficient C programs.

---

## Sample Questions and Answers

Here are a few questions to test your understanding, ranging from conceptual to practical exam-style ones.

**Question 1 (Conceptual):**
What is the main difference between passing a structure to a function by value and by reference in C?

**Answer:**
*   **Pass by Value:** A complete copy of the original structure is made and passed to the function. Any modifications made to the structure within the function affect only this copy and do not alter the original structure.
*   **Pass by Reference:** The memory address of the original structure is passed to the function (usually via a pointer). The function can then access and modify the original structure directly. Any changes made using the pointer will affect the original structure.

**Question 2 (Practical - Identify the error):**
Consider the following C code snippet. What is the likely error or problem?

```c
#include <stdio.h>

struct Point {
    int x;
    int y;
};

void movePoint(struct Point p, int dx, int dy) {
    p.x += dx;
    p.y += dy;
    printf("Inside function: Point is (%d, %d)\n", p.x, p.y);
}

int main() {
    struct Point myPoint = {10, 20};
    movePoint(myPoint, 5, 5);
    printf("In main: Point is (%d, %d)\n", myPoint.x, myPoint.y);
    return 0;
}
```

**Answer:**
The `movePoint` function is called with `myPoint` passed **by value**. Inside `movePoint`, the coordinates `p.x` and `p.y` are modified. However, since `p` is a copy, these modifications are local to the function. When the function returns, the original `myPoint.x` and `myPoint.y` in `main` remain unchanged. The output will show the modified coordinates inside the function, but the original coordinates in `main` will be printed as (10, 20). The "problem" is that the function *fails to update the original point*, which might be the intended behavior depending on the requirement. If the intention was to modify the original point, it should have been passed by reference.

**Question 3 (Exam Style - Implementation):**
Write a C program that defines a `Book` structure with members `title` (char array), `author` (char array), and `price` (float). Create a function `applyDiscount` that takes a pointer to a `Book` structure and a discount percentage (float). The function should reduce the book's price by the given discount. In `main`, create a `Book` object, display its details, call `applyDiscount`, and then display the updated details.

**Answer:**

```c
#include <stdio.h>
#include <string.h> // For strcpy

// Define the Book structure
struct Book {
    char title[100];
    char author[100];
    float price;
};

// Function to apply discount to a book's price (pass by reference)
void applyDiscount(struct Book *bookPtr, float discountPercentage) {
    // Ensure discount is within a reasonable range (optional but good practice)
    if (discountPercentage < 0.0 || discountPercentage > 100.0) {
        printf("Invalid discount percentage.\n");
        return;
    }

    // Calculate discount amount
    float discountAmount = bookPtr->price * (discountPercentage / 100.0);

    // Update the price
    bookPtr->price -= discountAmount;
}

// Function to display book details
void displayBook(struct Book book) {
    printf("Title: %s\n", book.title);
    printf("Author: %s\n", book.author);
    printf("Price: %.2f\n", book.price);
}

int main() {
    struct Book myBook;

    // Initialize the book
    strcpy(myBook.title, "The C Programming Language");
    strcpy(myBook.author, "Kernighan & Ritchie");
    myBook.price = 550.00;

    printf("--- Original Book Details ---\n");
    displayBook(myBook);

    // Apply a 10% discount
    applyDiscount(&myBook, 10.0); // Passing the address of myBook

    printf("\n--- Book Details After 10%% Discount ---\n");
    displayBook(myBook); // displayBook still takes by value for simplicity here

    return 0;
}
```

**Reasoning:**
*   The `Book` structure is defined as required.
*   `applyDiscount` correctly takes a `struct Book *bookPtr` (pointer to `Book`) and a `float discountPercentage`.
*   Inside `applyDiscount`, `bookPtr->price` is used to access and modify the price of the *original* `Book` object because it operates via a pointer.
*   In `main`, `myBook` is created.
*   `displayBook(myBook)` is called, passing `myBook` by value. This is fine as we only want to display, not modify.
*   `applyDiscount(&myBook, 10.0)` is crucial. We pass the *address* of `myBook` so that the discount is applied to the original object.
*   The final `displayBook(myBook)` call shows the updated price, confirming that the pass-by-reference mechanism in `applyDiscount` worked as intended. This question tests both structure definition and the correct usage of pointers for modifying structure members, aligning with **CO3** and **CO4**.