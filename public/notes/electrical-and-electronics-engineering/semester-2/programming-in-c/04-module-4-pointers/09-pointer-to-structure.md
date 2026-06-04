---
title: "Pointer to structure"
subject: "PROGRAMMING IN C"
module: "Module 4: Pointers "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9911"
status: "completed"
scrapedAt: "2026-05-23T16:09:36.515Z"
---
# Module 4: Pointers - Topic: Pointer to Structure

Welcome back, everyone! In our journey through the powerful world of C programming, we've already delved into the fascinating concept of pointers. We've seen how they allow us to directly manipulate memory, giving us immense flexibility and control. Today, we're going to take that power a step further by exploring a crucial application: **Pointers to Structures**.

Think of structures as custom data types you create to group related data items together. For instance, if you're building a program to manage student records, you might create a `struct student` to hold fields like `name`, `roll_number`, and `marks`. Now, what if you need to pass these complex structures to functions, or manage them dynamically in memory? That's precisely where pointers to structures come in, and they are absolutely fundamental for achieving dynamic data handling, directly aligning with **Course Outcome CO4**. This topic will also reinforce our understanding of basic C constructs and control statements (**CO1**) as we use them in conjunction with pointers and structures.

## Understanding Structures: A Quick Recap

Before we dive into pointers, let's quickly refresh our understanding of structures. Remember, a structure is a user-defined data type that allows you to combine variables of different data types under a single name.

**Example:**

```c
struct student {
    char name[50];
    int roll_number;
    float marks;
};
```

This `student` structure can hold the name, roll number, and marks of a student. To use it, we declare a variable of this structure type:

```c
struct student s1;
```

And to access its members, we use the dot operator (`.`):

```c
strcpy(s1.name, "Alice");
s1.roll_number = 101;
s1.marks = 85.5;
```

Now, imagine you have an array of these `student` structures, or you want to pass a single `student` structure to a function that modifies its contents. Doing this directly by value can sometimes be inefficient, especially if your structure is large. This is where passing by reference, using pointers, becomes incredibly useful.

## What is a Pointer to a Structure?

A pointer to a structure is simply a pointer variable that stores the memory address of a structure variable. Just like a pointer to an integer stores the address of an integer variable, a pointer to a structure stores the address of a structure variable.

Let's say we have our `student` structure. If we declare a pointer variable named `ptr_student`, it can hold the address of a `struct student` variable.

**Declaration:**

```c
struct student *ptr_student;
```

Here, `ptr_student` is declared as a pointer to `struct student`. This means `ptr_student` can only store the memory address of a variable of type `struct student`.

## Accessing Structure Members Through a Pointer

This is where things get a little different from regular pointers. When you have a pointer to a structure, you need a special operator to access the members of the structure it points to. This operator is the **arrow operator (`->`)**.

Let's say `ptr_student` holds the address of `s1`.

```c
struct student s1;
struct student *ptr_student;

ptr_student = &s1; // Assign the address of s1 to ptr_student

// Now, how do we access s1.name using ptr_student?
```

You might be tempted to use `*ptr_student.name` or `(*ptr_student).name`. And indeed, `(*ptr_student).name` is the correct way using the dereference operator (`*`) and the dot operator (`.`). However, C provides a more convenient and commonly used operator for this purpose: the arrow operator (`->`).

**Using the Arrow Operator (`->`):**

```c
strcpy(ptr_student->name, "Bob");
ptr_student->roll_number = 102;
ptr_student->marks = 92.0;
```

The `->` operator is a shorthand for dereferencing the pointer and then accessing the member using the dot operator. So, `ptr_student->name` is equivalent to `(*ptr_student).name`. This is a crucial point to remember, and you'll see it used extensively in C code. As Herbert Schildt mentions in "C: The Complete Reference," the arrow operator is essential for navigating through structures when using pointers.

**Why is this important?** Think about passing a large structure to a function. If you pass it by value, a complete copy of the structure is made, which can be memory-intensive and time-consuming. By passing a pointer to the structure, you only pass the address (a small piece of data), and the function can then access and modify the original structure using the arrow operator. This directly supports **CO4** by enabling efficient dynamic data handling.

## Passing Structures to Functions Using Pointers

This is perhaps the most common and impactful use of pointers to structures. Let's see how we can create a function that takes a pointer to a `student` structure and modifies its data.

**Example:**

```c
#include <stdio.h>
#include <string.h>

struct student {
    char name[50];
    int roll_number;
    float marks;
};

// Function to update student details
void update_student_details(struct student *s) {
    // Accessing members using the arrow operator
    strcpy(s->name, "Charlie");
    s->roll_number = 103;
    s->marks = 78.5;
}

int main() {
    struct student s1;
    struct student *ptr_s1;

    ptr_s1 = &s1; // Point ptr_s1 to s1

    printf("Before update:\n");
    printf("Name: %s, Roll No: %d, Marks: %.2f\n", s1.name, s1.roll_number, s1.marks); // Initially uninitialized

    // Call the function, passing the address of s1
    update_student_details(ptr_s1); // Or simply update_student_details(&s1);

    printf("\nAfter update:\n");
    printf("Name: %s, Roll No: %d, Marks: %.2f\n", s1.name, s1.roll_number, s1.marks);

    return 0;
}
```

**Explanation:**

1.  We define the `student` structure.
2.  We have a function `update_student_details` that accepts a `struct student *s` as its argument. This `s` is a pointer that will receive the address of a `student` structure.
3.  Inside `update_student_details`, we use the arrow operator (`->`) to modify the members of the structure that `s` points to.
4.  In `main`, we declare a `student` variable `s1` and a pointer `ptr_s1`.
5.  We assign the address of `s1` to `ptr_s1` using the address-of operator (`&`).
6.  We then call `update_student_details`, passing `ptr_s1` (which is `&s1`). The function modifies the original `s1` structure because it's working with its address.

This is a classic example of **pass-by-reference** for structures. Kernighan and Ritchie in "The C Programming Language" heavily emphasize the efficiency gains when passing large data aggregates by reference. This technique is essential for implementing dynamic data structures like linked lists, trees, and graphs, where structures are often manipulated via pointers.

## Pointers to Structures and Arrays

What happens when you have an array of structures? For instance, an array of `student` records for an entire class.

```c
struct student class[3]; // An array of 3 student structures
struct student *ptr_class;
```

Now, `ptr_class` can be used to point to any element of the `class` array. Remember, an array name itself often decays into a pointer to its first element.

```c
ptr_class = class; // Equivalent to ptr_class = &class[0];
```

To access the members of the *first* student in the array using `ptr_class`:

```c
strcpy(ptr_class->name, "David");
ptr_class->roll_number = 104;
```

To access the members of the *second* student (element at index 1):

Since `ptr_class` points to `class[0]`, `ptr_class + 1` will point to `class[1]`. So, to access members of `class[1]`:

```c
strcpy((ptr_class + 1)->name, "Eve");
(ptr_class + 1)->roll_number = 105;
```

This can look a bit intimidating, but it's just pointer arithmetic. `ptr_class + 1` moves the pointer forward by the size of one `struct student`.

Alternatively, and often more readable, you can use pointer arithmetic with the dereference operator:

```c
strcpy((* (ptr_class + 1)).name, "Eve"); // Equivalent to (ptr_class + 1)->name
```

Or even more simply, if you want to access the `roll_number` of the third student (`class[2]`):

```c
int third_student_roll = (*(ptr_class + 2)).roll_number;
```

Or using the arrow operator:

```c
int third_student_roll = (ptr_class + 2)->roll_number;
```

This ability to traverse arrays of structures using pointers is a cornerstone of dynamic data handling, directly supporting **CO4**. Yashavant Kanetkar's "Let Us C" often provides excellent, practical examples of manipulating arrays of structures, which are very useful for exam preparation.

## Dynamic Memory Allocation with Structures

This is where pointers truly shine, enabling us to create structures on the fly as our program runs, without knowing the exact number of structures needed beforehand. This is achieved using dynamic memory allocation functions like `malloc()` and `calloc()`, which return pointers to the allocated memory.

Let's allocate memory for a single `student` structure dynamically:

```c
#include <stdio.h>
#include <stdlib.h> // For malloc
#include <string.h>

struct student {
    char name[50];
    int roll_number;
    float marks;
};

int main() {
    struct student *dynamic_student_ptr;

    // Allocate memory for one struct student
    // sizeof(struct student) gives the total bytes needed
    dynamic_student_ptr = (struct student *) malloc(sizeof(struct student));

    // Check if allocation was successful
    if (dynamic_student_ptr == NULL) {
        printf("Memory allocation failed!\n");
        return 1; // Indicate an error
    }

    // Now, dynamic_student_ptr points to a block of memory
    // that can hold a struct student. We can access its members:
    strcpy(dynamic_student_ptr->name, "Frank");
    dynamic_student_ptr->roll_number = 106;
    dynamic_student_ptr->marks = 88.0;

    printf("Dynamically allocated student:\n");
    printf("Name: %s, Roll No: %d, Marks: %.2f\n",
           dynamic_student_ptr->name,
           dynamic_student_ptr->roll_number,
           dynamic_student_ptr->marks);

    // Crucial: Free the allocated memory when done
    free(dynamic_student_ptr);
    dynamic_student_ptr = NULL; // Good practice to set to NULL after freeing

    return 0;
}
```

**Explanation:**

1.  `malloc(sizeof(struct student))` requests a block of memory large enough to hold one `struct student`.
2.  `malloc` returns a `void *` pointer. We cast it to `struct student *` because we intend to store a `student` structure there.
3.  We **always** check if the returned pointer is `NULL`. If `malloc` fails (e.g., due to insufficient memory), it returns `NULL`.
4.  We use the arrow operator (`->`) to access and set the members of the dynamically allocated structure.
5.  Finally, and this is extremely important, we use `free(dynamic_student_ptr)` to release the memory back to the system. Failing to do so leads to memory leaks, which can cause your program or the system to slow down or crash over time. This is a critical aspect of dynamic memory management covered in **CO4**.

You can also allocate memory for an array of structures dynamically. For example, to allocate space for 5 students:

```c
struct student *class_array;
int num_students = 5;

class_array = (struct student *) malloc(num_students * sizeof(struct student));

if (class_array == NULL) {
    // Handle error
}

// Now class_array is a pointer to the first element of a dynamically
// allocated array of 5 struct students. You can access them like:
// class_array[i].member or (class_array + i)->member
```

This ability to dynamically size data structures is what makes C so powerful for system programming and complex applications, directly addressing **CO4**.

## Structures Containing Pointers (and vice versa)

We've seen pointers *to* structures. But what about structures that *contain* pointers? This is fundamental for building linked lists, where each node in the list is a structure that contains data *and* a pointer to the next node.

**Example: A Node in a Linked List**

```c
struct node {
    int data;
    struct node *next; // A pointer to another node of the same type
};
```

Here, the `node` structure has an `int` data field and a `next` field, which is a pointer to another `struct node`. This `next` pointer is what links one node to the next, forming the chain.

When creating such a structure dynamically:

```c
struct node *newNode;
newNode = (struct node *) malloc(sizeof(struct node));
if (newNode == NULL) { /* handle error */ }

newNode->data = 100;
newNode->next = NULL; // Initialize the next pointer to NULL
```

You can also have pointers within structures that point to *different* types of data, or even to functions. While `struct student *name_ptr;` within `struct student` is less common, `char *name_ptr;` within a `struct student` to store a dynamically allocated name string is very common.

**Important Note for Exams:** Understanding how to define a self-referential structure (a structure containing a pointer to itself) is crucial. Many questions revolve around linked lists, trees, and other dynamic data structures built using such self-referential structures.

## Key Takeaways and Exam Tips

Let's consolidate some of the most important points:

*   **Pointer to Structure Declaration:** `struct struct_name *pointer_variable_name;`
*   **Accessing Members via Pointer:** The arrow operator `->` is used. `pointer_variable_name->member_name` is equivalent to `(*pointer_variable_name).member_name`. This is a critical concept for **CO4**.
*   **Passing Structures to Functions:** Pass a pointer to the structure for efficiency (pass-by-reference), allowing the function to modify the original structure.
*   **Arrays of Structures:** You can use pointer arithmetic and the arrow operator to traverse and access elements of arrays of structures.
*   **Dynamic Memory Allocation:** Use `malloc()` (or `calloc()`) with `sizeof(struct struct_name)` to allocate memory for structures dynamically. Always check for `NULL` and `free()` the memory when done. This is vital for **CO4**.
*   **Self-Referential Structures:** Structures containing pointers to themselves are the building blocks of dynamic data structures like linked lists.

**Exam Strategy:**

*   Be prepared to write code snippets that declare structures, pointers to structures, and demonstrate member access using the arrow operator.
*   Understand how to pass structures to functions by pointer and write simple functions that modify structure members.
*   Questions might involve dynamically allocating memory for structures and handling potential allocation failures.
*   Familiarize yourself with the syntax for accessing elements in dynamically allocated arrays of structures.
*   Practice drawing memory layouts for simple scenarios involving pointers to structures.

By mastering pointers to structures, you gain the ability to manage complex data efficiently and build sophisticated dynamic data structures, fulfilling the requirements of **CO4** and significantly enhancing your problem-solving capabilities in C.

---

## Sample Questions with Answers

Here are a few sample questions to test your understanding, ranging from conceptual to more exam-oriented.

**Q1. Conceptual: What is the primary purpose of using a pointer to a structure?**

**Answer:** The primary purpose of using a pointer to a structure is to enable efficient handling of structure data, especially when passing structures to functions or managing them dynamically. Instead of copying the entire structure (which can be large and inefficient), you pass only its memory address. This allows functions to access and modify the original structure directly (pass-by-reference). It's also fundamental for dynamic memory allocation and building complex data structures like linked lists. This directly relates to **CO4**.

**Q2. Syntax & Operator: If `ptr` is a pointer to a `struct employee` and `salary` is a member of `struct employee`, how do you access the salary using `ptr`?**

**Answer:** You would use the arrow operator: `ptr->salary`. This is equivalent to `(*ptr).salary`.

**Q3. Application: Write a C program snippet that declares a structure `point` with `x` and `y` integer coordinates, declares a pointer to `point`, dynamically allocates memory for one `point`, initializes its coordinates to (10, 20), and prints them.**

**Answer:**

```c
#include <stdio.h>
#include <stdlib.h> // For malloc

// Declare the structure
struct point {
    int x;
    int y;
};

int main() {
    struct point *ptr_p; // Declare a pointer to struct point

    // Dynamically allocate memory for one struct point
    ptr_p = (struct point *) malloc(sizeof(struct point));

    // Check for allocation success
    if (ptr_p == NULL) {
        printf("Memory allocation failed!\n");
        return 1; // Exit with an error code
    }

    // Initialize the members using the arrow operator
    ptr_p->x = 10;
    ptr_p->y = 20;

    // Print the coordinates
    printf("Point coordinates: (%d, %d)\n", ptr_p->x, ptr_p->y);

    // Free the allocated memory
    free(ptr_p);
    ptr_p = NULL; // Good practice

    return 0;
}
```

**Reasoning:**
This snippet demonstrates key concepts: declaring a pointer to a structure, using `malloc` for dynamic allocation, type casting the `void*` returned by `malloc`, checking for `NULL`, using the arrow operator (`->`) to access and modify structure members of a dynamically allocated structure, and finally, freeing the memory. This aligns perfectly with **CO4**.

**Q4. Conceptual Understanding & Potential Pitfall: Consider the following code. What is the potential issue, and how can it be fixed?**

```c
#include <stdio.h>
#include <string.h>

struct book {
    char title[50];
    float price;
};

void read_book(struct book *b) {
    strcpy(b->title, "The C Programming Language");
    b->price = 499.99;
}

int main() {
    struct book my_book;
    struct book *ptr_book;

    ptr_book = &my_book;
    read_book(ptr_book);

    printf("Title: %s, Price: %.2f\n", my_book.title, my_book.price);

    return 0;
}
```

**Answer:**
There is **no issue** with this code. It correctly demonstrates passing a structure pointer to a function to modify the original structure. The `read_book` function receives a pointer to `my_book`, and using the arrow operator (`->`), it successfully modifies the `title` and `price` members of `my_book`. The `printf` statement then displays the updated values. This is a standard example of pass-by-reference for structures.

**Q5. Exam-Oriented: You are given an array of `struct student` (defined as in the notes). Write a C function that takes a pointer to the first student in the array and the number of students, and returns the average marks of all students.**

**Answer:**

```c
#include <stdio.h>

// Assuming struct student is defined as:
struct student {
    char name[50];
    int roll_number;
    float marks;
};

// Function to calculate average marks
float calculate_average_marks(struct student *students, int count) {
    if (students == NULL || count <= 0) {
        return 0.0; // Handle empty or invalid input
    }

    float total_marks = 0.0;

    // Iterate through the array of students using the pointer
    for (int i = 0; i < count; i++) {
        // Accessing marks of the i-th student using pointer arithmetic and arrow operator
        total_marks += (students + i)->marks;
        // Alternatively and often more readable: total_marks += students[i].marks;
    }

    return total_marks / count;
}

int main() {
    struct student class_data[3] = {
        {"Alice", 101, 85.5},
        {"Bob", 102, 92.0},
        {"Charlie", 103, 78.5}
    };

    int num_students = 3;
    float avg;

    // Pass the address of the first element of the array
    avg = calculate_average_marks(class_data, num_students);
    // Or equivalently: avg = calculate_average_marks(&class_data[0], num_students);

    printf("Average marks: %.2f\n", avg);

    return 0;
}
```

**Reasoning:**
This function takes `struct student *students` which points to the first element. The loop iterates `count` times. Inside the loop, `(students + i)` uses pointer arithmetic to get the address of the `i`-th `student` structure in the array. The arrow operator `->marks` then accesses the `marks` member of that specific student. The function calculates and returns the average. This is a direct application of pointer arithmetic and accessing array elements via a structure pointer, crucial for **CO4** and demonstrating understanding of how arrays and pointers interact. The comment `// Alternatively and often more readable: total_marks += students[i].marks;` highlights that array indexing `students[i]` is essentially syntactic sugar for `*(students + i)`, and `students[i].marks` is equivalent to `(students + i)->marks`, reinforcing the connection between array access and pointer operations.
