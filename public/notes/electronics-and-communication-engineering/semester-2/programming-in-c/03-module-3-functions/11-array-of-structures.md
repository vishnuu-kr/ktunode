---
title: "Array of structures"
subject: "PROGRAMMING IN C"
module: "Module 3: Functions "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da379"
status: "completed"
scrapedAt: "2026-05-23T17:42:23.127Z"
---
# PROGRAMMING IN C: Module 3: Functions

## Topic: Arrays of Structures

Welcome, everyone! Today, we're going to dive into a really powerful combination in C programming: **arrays of structures**. We've already explored structures, giving us the ability to group related data items under a single name, like creating a blueprint for a "student" with fields for roll number, name, and marks. Now, imagine you need to manage data for *not just one* student, but for an entire class of students. How would you store and access all of them efficiently? That’s precisely where arrays of structures come in. This topic is a fantastic bridge, connecting our understanding of arrays and structures, and directly contributing to several of our course outcomes, especially **CO2 (developing programs using arrays, matrices, and strings)** and **CO3 (utilizing functions to solve problems by dividing them into modules)**.

### Why Arrays of Structures? The Need for Organization

Think about a real-world scenario. You're building a library management system. Each book has a title, author, ISBN, and publication year. If you only had one book, a single structure would be perfect:

```c
struct Book {
    char title[100];
    char author[50];
    int isbn;
    int year;
};
```

But a library has thousands, maybe millions, of books! Storing them individually would be chaotic. We need a way to manage a collection of these "book" entities. This is where arrays shine. Just as an array of integers lets you store multiple integer values, an array of structures allows you to store multiple instances of your custom data types.

So, an **array of structures** is simply an array where each element is a structure of the same defined type. It's like having a whole row of your "student" blueprints, each filled with the details of a different student.

### Declaring and Defining Arrays of Structures

Declaring an array of structures is very similar to declaring any other array. You first need your structure definition, and then you declare an array of that structure type.

Let's stick with our student example. Suppose we want to store details for 30 students.

First, the structure definition (which we've seen before):

```c
struct Student {
    int roll_no;
    char name[50];
    float marks;
};
```

Now, to declare an array of 30 `Student` structures:

```c
struct Student students[30]; // Declares an array named 'students' capable of holding 30 Student structures.
```

Here, `students` is the name of our array. `students[0]` will refer to the first `Student` structure, `students[1]` to the second, and so on, up to `students[29]`.

Think of it like this: If `struct Student` is a single record card for a student, `students[30]` is a filing cabinet drawer filled with 30 such record cards.

### Accessing Elements in an Array of Structures

Accessing individual elements within an array of structures follows the standard array indexing. You use the array name, followed by the index in square brackets, to select a specific structure. Once you have selected a structure, you use the dot operator (`.`) to access its individual members.

Let's say we want to store the roll number for the first student in our `students` array. We would do this:

```c
students[0].roll_no = 101;
```

And to store the name of the second student:

```c
strcpy(students[1].name, "Alice"); // Remember to use strcpy for strings!
```

And to store the marks of the fifth student:

```c
students[4].marks = 85.5;
```

**Important Reminder:** You access a specific *structure* using `array_name[index]`. Then, you access a *member* within that selected structure using the dot operator: `array_name[index].member_name`. This is a crucial point for exams, so make sure you get this right!

### Iterating Through Arrays of Structures: The Power of Loops

The real power of arrays of structures becomes evident when you need to perform operations on multiple elements, such as inputting data for all students, displaying their details, or perhaps calculating an average. This is where loops, especially `for` loops, become your best friend.

Let's say we want to input details for all 30 students:

```c
#include <stdio.h>
#include <string.h> // For strcpy and other string functions

struct Student {
    int roll_no;
    char name[50];
    float marks;
};

int main() {
    struct Student students[30];
    int i; // Loop counter

    printf("Enter details for %d students:\n", 30);

    for (i = 0; i < 30; i++) {
        printf("\nStudent %d:\n", i + 1);

        printf("  Roll Number: ");
        scanf("%d", &students[i].roll_no); // Accessing the roll_no member of the i-th student

        printf("  Name: ");
        scanf("%s", students[i].name); // Accessing the name member of the i-th student

        printf("  Marks: ");
        scanf("%f", &students[i].marks); // Accessing the marks member of the i-th student
    }

    printf("\n--- Student Details Entered ---\n");
    for (i = 0; i < 30; i++) {
        printf("\nStudent %d:\n", i + 1);
        printf("  Roll Number: %d\n", students[i].roll_no);
        printf("  Name: %s\n", students[i].name);
        printf("  Marks: %.2f\n", students[i].marks);
    }

    return 0;
}
```

In this example, the loop `for (i = 0; i < 30; i++)` is used to iterate through each of the 30 `Student` structures. Inside the loop, `students[i]` selects the current structure, and then `.roll_no`, `.name`, and `.marks` access its members for input and output.

This pattern of using a loop to process array elements is fundamental and directly supports **CO2**.

### Passing Arrays of Structures to Functions

Now, this is where our understanding of functions from **Module 3** truly comes into play and helps us achieve **CO3**. Often, you'll want to perform specific operations on your array of structures, like finding the student with the highest marks, calculating the average marks, or printing details of students who scored above a certain threshold. It’s good practice to encapsulate these operations within functions.

How do we pass an entire array of structures to a function? We can pass the array name and its size.

Let’s create a function to find and display the details of the student with the highest marks.

```c
#include <stdio.h>
#include <string.h>

struct Student {
    int roll_no;
    char name[50];
    float marks;
};

// Function to find and display the student with the highest marks
// It takes the array of students and the number of students as input.
void findTopStudent(struct Student students[], int num_students) {
    int i;
    int top_index = 0; // Assume the first student has the highest marks initially
    float max_marks = students[0].marks;

    for (i = 1; i < num_students; i++) {
        if (students[i].marks > max_marks) {
            max_marks = students[i].marks;
            top_index = i;
        }
    }

    printf("\n--- Top Performing Student ---\n");
    printf("  Roll Number: %d\n", students[top_index].roll_no);
    printf("  Name: %s\n", students[top_index].name);
    printf("  Marks: %.2f\n", students[top_index].marks);
}

int main() {
    struct Student class[10]; // Let's take a smaller class size for this example
    int num_students = 10;
    int i;

    printf("Enter details for %d students:\n", num_students);
    for (i = 0; i < num_students; i++) {
        printf("\nStudent %d:\n", i + 1);
        printf("  Roll Number: ");
        scanf("%d", &class[i].roll_no);
        printf("  Name: ");
        scanf("%s", class[i].name);
        printf("  Marks: ");
        scanf("%f", &class[i].marks);
    }

    // Call the function to find and display the top student
    findTopStudent(class, num_students);

    return 0;
}
```

In the `findTopStudent` function, `struct Student students[]` signifies that the function expects an array of `Student` structures. When you pass `class` from `main` to `findTopStudent`, you are essentially passing a pointer to the first element of the `class` array. The `num_students` argument tells the function how many elements are in the array, which is crucial for the loop to know where to stop.

**Considerations for Passing Structures to Functions:**

*   **Pass by Value vs. Pass by Reference:** When you pass an array to a function in C, it's actually the *address* of the first element that is passed (which is akin to "pass by reference" for the array itself). This means modifications made to the array elements within the function *will* affect the original array in the calling function. This is a key concept, often tested, and a direct application of how C handles arrays and functions.
*   **Efficiency:** Passing large arrays of structures by value (if that were directly possible for arrays) could be inefficient due to copying. The default behavior of passing arrays in C is efficient.

### Structures Containing Arrays

It's also common to have structures where one or more members are themselves arrays. For example, a `Student` structure might include an array of marks for different subjects.

```c
#define NUM_SUBJECTS 5

struct StudentWithSubjects {
    int roll_no;
    char name[50];
    float subject_marks[NUM_SUBJECTS]; // An array of marks
    float average_marks;
};
```

When working with such structures, you'd access individual marks like this: `students[i].subject_marks[j]`.

### Structures Containing Pointers to Arrays (Advanced but important!)

While not the primary focus of "arrays of structures," it's worth noting that a structure can also contain a pointer to an array. This is often used for dynamic memory allocation, where the size of the array isn't fixed at compile time. This ties into **CO4** (using pointers for dynamic data handling). For instance, a `Student` structure might have a pointer to an array of marks if the number of subjects can vary per student.

### Real-World Analogies and Use Cases

*   **Employee Records:** An array of `Employee` structures, where each `Employee` structure has `employee_id`, `name`, `salary`, and `hire_date`. You could easily find the highest-paid employee or list all employees hired in a specific year.
*   **Inventory Management:** An array of `Product` structures, each with `product_id`, `name`, `price`, and `quantity_in_stock`. You could display all products below a certain stock level.
*   **Student Grades:** As we've seen, managing student data is a prime example. You could extend it to store grades for multiple subjects, calculate GPAs, and rank students.
*   **Contact List:** An array of `Contact` structures, with fields for `name`, `phone_number`, and `email`.

### Common Pitfalls and Exam Tips

*   **Array Index Out of Bounds:** Just like with regular arrays, accessing `students[i]` where `i` is greater than or equal to the array size will lead to undefined behavior. Always ensure your loops are correctly bounded.
*   **Forgetting `strcpy`:** When assigning values to string members within a structure in an array, always use `strcpy` or `strncpy` from `<string.h>`. Direct assignment (`students[i].name = "New Name";`) is incorrect for strings in C.
*   **Off-by-One Errors:** Be extra careful with loop conditions (`< size` vs. `<= size - 1`). The correct way to iterate from the first element (index 0) to the last element (index `size - 1`) is `for (i = 0; i < size; i++)`.
*   **Passing to Functions:** Understand that when you pass an array to a function, you are passing its address. If the function modifies the array, the original array is changed.
*   **Defining and Accessing:** Double-check the syntax for defining the array and accessing its members. `structure_variable.member_name` is the core. For arrays, it's `array_name[index].member_name`.

### Connecting to Course Outcomes

*   **CO2 (Develop C programs using arrays, matrices, and strings):** This topic directly expands your ability to use arrays by allowing you to manage collections of complex data types (structures).
*   **CO3 (Utilize functions to find solution to the computational problems by dividing it into a number of modules and abstract data types):** We've seen how arrays of structures are perfectly suited to be processed by functions. You can create modular code, where each function handles a specific task related to your collection of data structures. This promotes code reusability and maintainability.

Remember, mastering arrays of structures is a significant step in building more complex and practical C programs. It’s about organizing and manipulating collections of related data in a structured and efficient manner.

---

## Sample Questions with Answers

**1. Conceptual Question:**

What is an array of structures in C, and why is it useful?

**Answer:**
An array of structures is a collection (an array) where each element is a variable of the same user-defined structure type. It's useful because it allows us to manage multiple records of related data efficiently. For instance, if we define a `Student` structure, an array of `Student` structures lets us store and process information for an entire class of students, rather than managing each student's data individually. This organization is crucial for creating comprehensive applications like databases, inventory systems, or student management systems. It directly supports **CO2** by extending array usage to complex data types.

**2. Exam-Oriented Question:**

Consider the following C code snippet:

```c
#include <stdio.h>

struct Point {
    int x;
    int y;
};

int main() {
    struct Point path[5]; // Array of 5 Point structures
    int i;

    for (i = 0; i < 5; i++) {
        path[i].x = i * 2;
        path[i].y = i * 3;
    }

    printf("Points: ");
    for (i = 0; i < 5; i++) {
        printf("(%d, %d) ", path[i].x, path[i].y);
    }
    printf("\n");

    return 0;
}
```

What will be the output of this program? Explain the logic.

**Answer:**
**Output:**
```
Points: (0, 0) (2, 3) (4, 6) (6, 9) (8, 12)
```

**Explanation:**
The program declares an array `path` of 5 structures, where each structure is of type `Point` and contains two integer members: `x` and `y`.

The first `for` loop (from `i = 0` to `4`) iterates through each element of the `path` array.
*   For `i = 0`: `path[0].x` is set to `0 * 2 = 0`, and `path[0].y` is set to `0 * 3 = 0`.
*   For `i = 1`: `path[1].x` is set to `1 * 2 = 2`, and `path[1].y` is set to `1 * 3 = 3`.
*   For `i = 2`: `path[2].x` is set to `2 * 2 = 4`, and `path[2].y` is set to `2 * 3 = 6`.
*   For `i = 3`: `path[3].x` is set to `3 * 2 = 6`, and `path[3].y` is set to `3 * 3 = 9`.
*   For `i = 4`: `path[4].x` is set to `4 * 2 = 8`, and `path[4].y` is set to `4 * 3 = 12`.

The second `for` loop then iterates through the `path` array again, printing the `x` and `y` coordinates of each `Point` structure in the format `(x, y)`. This correctly produces the output shown above. The access pattern `path[i].x` and `path[i].y` is crucial here, demonstrating how to access members of structures within an array.

**3. Application Question:**

Write a C function `displayStudentsByMarks` that takes an array of `Student` structures (defined as `struct Student { int roll_no; char name[50]; float marks; };`), the number of students, and a minimum marks threshold as input. The function should print the roll number and name of all students whose marks are greater than or equal to the provided threshold.

**Answer:**

```c
#include <stdio.h>
#include <string.h> // Typically needed if you manipulate names, but not strictly for this display function

// Assume Student structure is defined as:
// struct Student {
//     int roll_no;
//     char name[50];
//     float marks;
// };

void displayStudentsByMarks(struct Student students[], int num_students, float min_marks) {
    int i;
    printf("\n--- Students Scoring %.2f or Above ---\n", min_marks);
    for (i = 0; i < num_students; i++) {
        // Check if the current student's marks meet the threshold
        if (students[i].marks >= min_marks) {
            printf("Roll No: %d, Name: %s\n", students[i].roll_no, students[i].name);
        }
    }
    printf("--------------------------------------\n");
}

// Example of how to use this function in main:
/*
int main() {
    struct Student class[3] = {
        {101, "Alice", 85.5},
        {102, "Bob", 72.0},
        {103, "Charlie", 91.0}
    };
    int num = 3;
    float threshold = 80.0;

    displayStudentsByMarks(class, num, threshold);

    return 0;
}
*/
```

**Explanation:**
This function adheres to **CO3** by creating a modular solution. It accepts the `students` array, its size `num_students`, and a `min_marks` threshold. The `for` loop iterates through each `Student` structure in the array. Inside the loop, an `if` condition checks if the `marks` member of the current student (`students[i].marks`) is greater than or equal to `min_marks`. If the condition is true, the student's roll number and name are printed. This function demonstrates effective use of arrays of structures and conditional logic within a function.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
