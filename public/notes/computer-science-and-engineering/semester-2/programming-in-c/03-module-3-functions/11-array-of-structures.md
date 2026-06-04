---
title: "Array of structures"
subject: "PROGRAMMING IN C"
module: "Module 3: Functions "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e58"
status: "completed"
scrapedAt: "2026-05-20T16:35:31.419Z"
---
## PROGRAMMING IN C: Module 3: Functions - Array of Structures

Welcome, everyone! Today, we're diving into a really powerful combination in C programming: **Arrays of Structures**. Think of structures as a way to group related data items under a single name, creating your own custom data types. Now, what if you need to manage a collection of these custom data types? That's where arrays of structures come in, and they are absolutely essential for tackling many real-world problems.

This topic directly ties into several of our Course Outcomes (COs):

*   **CO2: Develop C programs using arrays, matrices, and strings.** We're extending our understanding of arrays here to hold complex data types.
*   **CO3: Utilize functions to find solution to the computational problems by dividing it into a number of modules and abstract data types.** We'll see how functions can effectively operate on arrays of structures, making our code modular and manageable.
*   **CO1: Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements.** Many problems we encounter, from managing student records to inventory systems, naturally lend themselves to being solved using arrays of structures, and we'll use our control statements (loops, conditionals) to work with them.

Let's get started!

### 1. Revisiting Structures: The Building Blocks

Before we build with arrays of structures, let's quickly recap what a structure is. A structure is a user-defined data type that allows you to group together different data types under a single name. Think of it like a "record" or a "card" that holds related information.

For example, if we want to represent a "student," we might need their name (a string), their roll number (an integer), and their marks (a float). We can define a structure like this:

```c
struct Student {
    char name[50];
    int roll_no;
    float marks;
};
```

Here, `struct Student` is our custom data type. Each member (`name`, `roll_no`, `marks`) is an individual data item. To create a variable of this type, we'd write:

```c
struct Student student1;
```

And to access its members, we use the dot operator (`.`):

```c
strcpy(student1.name, "Alice");
student1.roll_no = 101;
student1.marks = 85.5;
```

This is fundamental. Now, imagine you need to store information for not just one student, but for an entire class of, say, 30 students. This is where arrays become indispensable.

### 2. Introducing Arrays of Structures: Collections of Records

So, an array is a collection of elements of the *same* data type. What if we want a collection of `struct Student` variables? That's exactly what an **array of structures** is!

We can declare an array of `struct Student` like this:

```c
struct Student class[30]; // An array to hold data for 30 students
```

Now, `class` is an array where each element (`class[0]`, `class[1]`, ..., `class[29]`) is a `struct Student` variable. Each of these elements can hold the `name`, `roll_no`, and `marks` for a different student.

**Analogy:** Think of a library. Each book is like a structure (it has a title, author, ISBN, etc.). An array of structures would be like the entire shelf or even the whole library catalog, where each entry represents a book. You can access individual books (structures) by their position in the catalog (array index).

#### How to Access Elements in an Array of Structures

Accessing elements within an array of structures requires a combination of the array indexing operator `[]` and the structure member access operator `.`.

To access the roll number of the *third* student in our `class` array (remember, arrays are 0-indexed, so the third student is at index 2), you would write:

```c
class[2].roll_no
```

And to set the name of the fifth student:

```c
strcpy(class[4].name, "Bob");
```

This syntax is crucial. You first specify which element of the array you want using `[index]`, and *then* you specify which member of that structure you want using `.member_name`.

### 3. Working with Arrays of Structures: Practical Examples

Let's put this into practice. Suppose we want to create a program that manages a list of employees, where each employee has an ID, a name, and a salary.

**Defining the Structure:**

```c
struct Employee {
    int emp_id;
    char name[50];
    float salary;
};
```

**Declaring an Array of Structures:**

Let's say we want to store data for 5 employees.

```c
struct Employee company_roster[5];
```

**Inputting Data:**

We can use a loop to input data for each employee. This is where our control statements (specifically, the `for` loop) are invaluable.

```c
#include <stdio.h>
#include <string.h> // For strcpy

// Structure definition for Employee
struct Employee {
    int emp_id;
    char name[50];
    float salary;
};

int main() {
    struct Employee company_roster[5];
    int i;

    printf("Enter details for 5 employees:\n");

    // Loop to get input for each employee
    for (i = 0; i < 5; i++) {
        printf("\n--- Employee %d ---\n", i + 1);

        printf("Enter Employee ID: ");
        scanf("%d", &company_roster[i].emp_id);

        // Consume the newline character left by scanf
        getchar(); // Important for string input after numeric input

        printf("Enter Employee Name: ");
        // Using fgets for safer string input, reads up to 49 chars + null terminator
        fgets(company_roster[i].name, sizeof(company_roster[i].name), stdin);
        // Remove trailing newline character if fgets added one
        company_roster[i].name[strcspn(company_roster[i].name, "\n")] = 0;

        printf("Enter Employee Salary: ");
        scanf("%f", &company_roster[i].salary);
    }

    // Now we have the data, let's display it.
    printf("\n\n--- Employee Roster ---\n");
    for (i = 0; i < 5; i++) {
        printf("Employee ID: %d\n", company_roster[i].emp_id);
        printf("Name: %s\n", company_roster[i].name);
        printf("Salary: %.2f\n", company_roster[i].salary);
        printf("--------------------\n");
    }

    return 0;
}
```

**A Few Important Notes from this Example:**

*   **`scanf` and `fgets`:** Notice the use of `getchar()` after `scanf("%d", ...)` and before `fgets`. When `scanf` reads a number, it leaves the newline character (`\n`) in the input buffer. The subsequent `fgets` would immediately read this leftover newline, resulting in an empty string for the name. `getchar()` consumes this newline. Using `fgets` for strings is generally safer than `scanf("%s", ...)` because `fgets` allows you to specify the maximum number of characters to read, preventing buffer overflows (a common security vulnerability). We also clean up the trailing newline that `fgets` might add using `strcspn`. This is a common pitfall for beginners!
*   **Looping is Key:** When dealing with arrays, loops are your best friends. Whether it's for input, processing, or output, you'll almost always use a `for` or `while` loop.

#### Processing Data: Finding the Highest Paid Employee

Let's extend the example. How about we find the employee with the highest salary?

We can modify our loop:

```c
#include <stdio.h>
#include <string.h>

struct Employee {
    int emp_id;
    char name[50];
    float salary;
};

int main() {
    struct Employee company_roster[5];
    int i;
    int highest_paid_index = 0; // Assume the first employee is highest paid initially

    printf("Enter details for 5 employees:\n");
    for (i = 0; i < 5; i++) {
        printf("\n--- Employee %d ---\n", i + 1);
        printf("Enter Employee ID: ");
        scanf("%d", &company_roster[i].emp_id);
        getchar(); // Consume newline
        printf("Enter Employee Name: ");
        fgets(company_roster[i].name, sizeof(company_roster[i].name), stdin);
        company_roster[i].name[strcspn(company_roster[i].name, "\n")] = 0; // Remove newline
        printf("Enter Employee Salary: ");
        scanf("%f", &company_roster[i].salary);
    }

    // Find the highest paid employee
    for (i = 1; i < 5; i++) { // Start from the second employee (index 1)
        if (company_roster[i].salary > company_roster[highest_paid_index].salary) {
            highest_paid_index = i; // Update index if current employee is paid more
        }
    }

    printf("\n\n--- Highest Paid Employee ---\n");
    printf("ID: %d\n", company_roster[highest_paid_index].emp_id);
    printf("Name: %s\n", company_roster[highest_paid_index].name);
    printf("Salary: %.2f\n", company_roster[highest_paid_index].salary);

    return 0;
}
```

In this snippet, `highest_paid_index` keeps track of the *index* of the employee with the highest salary found so far. We initialize it to `0` (the first employee) and then iterate through the rest of the array, updating `highest_paid_index` whenever we find an employee with a greater salary. This is a common pattern for finding maximum/minimum values in an array.

### 4. Functions and Arrays of Structures: Modularizing Your Code

This is where **CO3** truly shines! We can write functions that accept arrays of structures as arguments. This makes our programs cleaner, more organized, and easier to understand and maintain.

When you pass an array to a function in C, you're actually passing a pointer to the first element of the array. This is efficient because you're not copying the entire array.

Let's rewrite our example using functions:

```c
#include <stdio.h>
#include <string.h>

// Structure definition
struct Employee {
    int emp_id;
    char name[50];
    float salary;
};

// Function to input employee data
void inputEmployeeData(struct Employee emp[], int count) {
    int i;
    printf("Enter details for %d employees:\n", count);
    for (i = 0; i < count; i++) {
        printf("\n--- Employee %d ---\n", i + 1);
        printf("Enter Employee ID: ");
        scanf("%d", &emp[i].emp_id);
        getchar(); // Consume newline
        printf("Enter Employee Name: ");
        fgets(emp[i].name, sizeof(emp[i].name), stdin);
        emp[i].name[strcspn(emp[i].name, "\n")] = 0; // Remove newline
        printf("Enter Employee Salary: ");
        scanf("%f", &emp[i].salary);
    }
}

// Function to display employee data
void displayEmployeeData(struct Employee emp[], int count) {
    int i;
    printf("\n\n--- Employee Roster ---\n");
    for (i = 0; i < count; i++) {
        printf("Employee ID: %d\n", emp[i].emp_id);
        printf("Name: %s\n", emp[i].name);
        printf("Salary: %.2f\n", emp[i].salary);
        printf("--------------------\n");
    }
}

// Function to find the highest paid employee and return its index
int findHighestPaidEmployee(struct Employee emp[], int count) {
    int i;
    int highest_paid_index = 0;

    for (i = 1; i < count; i++) {
        if (emp[i].salary > emp[highest_paid_index].salary) {
            highest_paid_index = i;
        }
    }
    return highest_paid_index;
}

int main() {
    const int NUM_EMPLOYEES = 5; // Define the number of employees
    struct Employee company_roster[NUM_EMPLOYEES];

    // Call the function to input data
    inputEmployeeData(company_roster, NUM_EMPLOYEES);

    // Call the function to display all data
    displayEmployeeData(company_roster, NUM_EMPLOYEES);

    // Find and display the highest paid employee
    int index = findHighestPaidEmployee(company_roster, NUM_EMPLOYEES);
    printf("\n\n--- Highest Paid Employee ---\n");
    printf("ID: %d\n", company_roster[index].emp_id);
    printf("Name: %s\n", company_roster[index].name);
    printf("Salary: %.2f\n", company_roster[index].salary);

    return 0;
}
```

**How this relates to CO3:**

*   We've divided the problem into smaller, manageable modules (`inputEmployeeData`, `displayEmployeeData`, `findHighestPaidEmployee`).
*   Each function operates on the `struct Employee` data type (our "abstract data type" in a broader sense, as it's user-defined), making the code reusable and easier to debug.
*   `inputEmployeeData` and `displayEmployeeData` take `struct Employee emp[]` as an argument. This means they can work with *any* array of `Employee` structures, not just `company_roster`. The `count` parameter is essential because C functions don't inherently know the size of an array passed to them.

### 5. Passing Individual Structures to Functions

You can also pass individual `struct` variables to functions. This is useful when a function needs to work on just one record.

```c
#include <stdio.h>
#include <string.h>

struct Student {
    char name[50];
    float gpa;
};

// Function to display a single student's details
void displayStudent(struct Student s) {
    printf("Name: %s, GPA: %.2f\n", s.name, s.gpa);
}

int main() {
    struct Student student1;
    strcpy(student1.name, "Charlie");
    student1.gpa = 3.8;

    struct Student student2;
    strcpy(student2.name, "Diana");
    student2.gpa = 3.5;

    // Pass individual structures to the function
    displayStudent(student1);
    displayStudent(student2);

    return 0;
}
```

**Important Note on Passing by Value vs. By Reference:**

*   When you pass a structure variable to a function like `displayStudent(struct Student s)`, it's passed **by value**. This means a *copy* of the entire structure is made and sent to the function. Any changes made to `s` inside `displayStudent` will *not* affect the original `student1` in `main`.
*   If you want to modify the original structure from within a function, you must pass it **by pointer**. This is a key concept we'll explore more in Module 4, but for now, remember that passing an array of structures to a function effectively passes pointers to its elements.

### 6. Common Pitfalls and Exam Focus

When working with arrays of structures, be mindful of these common issues:

*   **Array Indexing:** Always remember arrays are zero-indexed. Off-by-one errors are frequent when looping.
*   **`scanf` vs. `fgets`:** As discussed, mixing `scanf` for numbers and `fgets` for strings requires careful handling of the newline character. Many programming contest problems or exam questions might use input methods that lead to this issue.
*   **Buffer Overflows:** Always use `fgets` with a size limit or `strncpy` to prevent writing beyond the allocated memory for strings within your structures. This is crucial for secure and stable code.
*   **Function Signatures:** When passing arrays of structures to functions, ensure the function signature correctly declares the array (e.g., `struct Employee emp[]`) and that you pass the array size as a separate argument.
*   **Member Access:** Correctly use the `.` operator to access members of a structure variable or an element within an array of structures. If you are using pointers to structures, you'll use the `->` operator (which we'll cover more in Module 4).

**Exam Relevance:**

*   You'll likely be asked to define a structure, declare an array of structures, and then write functions to perform operations like inputting, displaying, searching, sorting, or calculating based on the data within the structures.
*   Problems might involve finding the highest/lowest value, counting elements that meet certain criteria, or organizing the data.
*   Understanding how to loop through an array of structures and access individual members is fundamental.
*   Functions that manipulate arrays of structures are very common.

### 7. Summary and Key Takeaways

To wrap up, arrays of structures are a powerful way to manage collections of related, complex data.

*   **What they are:** Collections of structure variables of the same type.
*   **Declaration:** `struct YourStructName arrayName[size];`
*   **Access:** `arrayName[index].member_name;`
*   **Operations:** Typically involve loops to iterate through the array elements.
*   **Functions:** Crucial for modularity. Functions can accept arrays of structures as arguments (passed by pointer to the first element), enabling organized data processing.

This topic is a cornerstone for building more complex applications in C. It bridges the gap between basic data types and real-world data representation, empowering you to solve more intricate computational problems.

---

### Sample Questions and Answers

**Question 1 (Conceptual):**
What is the primary advantage of using an array of structures compared to an array of individual variables?

**Answer:**
The primary advantage is **data organization and relatedness**. An array of individual variables would require multiple arrays to store related data for a single entity (e.g., one array for names, another for roll numbers, another for marks). An array of structures allows you to group all related data for a single entity (like a student) into one cohesive unit (a `struct Student`), and then create a collection of these units using an array. This makes code cleaner, more readable, and easier to manage, as you're dealing with a single logical entity at a time. It directly supports **CO2** by providing a structured way to handle collections of data.

---

**Question 2 (Practical - Code Snippet):**
Consider the following code:

```c
#include <stdio.h>

struct Item {
    int id;
    float price;
};

int main() {
    struct Item inventory[3] = {{101, 15.50}, {102, 22.75}, {103, 10.00}};
    int i;

    // What will be printed?
    for (i = 0; i < 3; i++) {
        printf("Item ID: %d, Price: %.2f\n", inventory[i].id, inventory[i].price);
    }

    return 0;
}
```
Explain the output and how it relates to array of structures.

**Answer:**
The code initializes an array named `inventory` which holds three elements. Each element is of type `struct Item`. The structure `Item` contains two members: `id` (an integer) and `price` (a float). The initialization `{{101, 15.50}, {102, 22.75}, {103, 10.00}}` uses an array initializer to set the members of each structure in the array.

The `for` loop iterates from `i = 0` to `i = 2`. In each iteration:
*   `inventory[i].id` accesses the `id` member of the `i`-th `struct Item` in the `inventory` array.
*   `inventory[i].price` accesses the `price` member of the `i`-th `struct Item`.

Therefore, the output will be:

```
Item ID: 101, Price: 15.50
Item ID: 102, Price: 22.75
Item ID: 103, Price: 10.00
```

This example demonstrates how to declare, initialize, and access elements of an array of structures, directly addressing **CO2**.

---

**Question 3 (Problem Solving):**
Write a C program that defines a structure `Point` with integer members `x` and `y`. The program should create an array of 5 `Point` structures, get the coordinates for each point from the user, and then write a function that calculates and returns the distance of each point from the origin (0,0). The main function should then print these distances.

*(Hint: The distance of a point (x, y) from the origin is sqrt(x*x + y*y). You'll need to include `<math.h>` for `sqrt`.)*

**Answer:**

```c
#include <stdio.h>
#include <math.h> // For sqrt()

// Define the Point structure
struct Point {
    int x;
    int y;
};

// Function to calculate distance from origin for an array of points
void calculateDistances(struct Point points[], int count, float distances[]) {
    int i;
    for (i = 0; i < count; i++) {
        // Calculate distance using Pythagorean theorem
        distances[i] = sqrt((float)(points[i].x * points[i].x) + (float)(points[i].y * points[i].y));
    }
}

int main() {
    const int NUM_POINTS = 5;
    struct Point coordinates[NUM_POINTS];
    float distances_from_origin[NUM_POINTS];
    int i;

    printf("Enter coordinates for %d points:\n", NUM_POINTS);

    // Input coordinates for each point
    for (i = 0; i < NUM_POINTS; i++) {
        printf("\nPoint %d:\n", i + 1);
        printf("Enter x-coordinate: ");
        scanf("%d", &coordinates[i].x);
        printf("Enter y-coordinate: ");
        scanf("%d", &coordinates[i].y);
    }

    // Call the function to calculate distances
    calculateDistances(coordinates, NUM_POINTS, distances_from_origin);

    // Display the calculated distances
    printf("\n\nDistances from Origin:\n");
    for (i = 0; i < NUM_POINTS; i++) {
        printf("Point %d (x=%d, y=%d) is %.2f units away from origin.\n",
               i + 1, coordinates[i].x, coordinates[i].y, distances_from_origin[i]);
    }

    return 0;
}
```

**Explanation:**
1.  **Structure Definition:** `struct Point { int x; int y; };` defines our custom data type.
2.  **Array Declaration:** `struct Point coordinates[NUM_POINTS];` creates an array to hold 5 `Point` structures.
3.  **Input:** A loop prompts the user to enter `x` and `y` for each point, storing them in `coordinates[i].x` and `coordinates[i].y`.
4.  **`calculateDistances` Function:**
    *   This function takes the `coordinates` array, its `count`, and an output array `distances[]` as arguments. This demonstrates **CO3** by using a function to process an array of structures.
    *   It iterates through each `Point` in the `coordinates` array.
    *   For each point, it calculates the Euclidean distance from the origin using `sqrt(x*x + y*y)`. Note the type casting to `float` to ensure the `sqrt` function receives a floating-point number.
    *   The result is stored in the corresponding index of the `distances` array.
5.  **Output:** The `main` function then iterates through the `distances` array and prints the results, along with the original coordinates for clarity.

This example showcases the practical application of arrays of structures and functions working together, touching on **CO1, CO2, and CO3**.
