---
title: "Structures - Defining a Structure variable"
subject: "PROGRAMMING IN C"
module: "Module 3: Functions "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da377"
status: "completed"
scrapedAt: "2026-05-23T17:42:20.985Z"
---
# PROGRAMMING IN C: Module 3: Functions - Structures: Defining a Structure Variable

Welcome to Module 3! We've already explored the power of functions to break down complex problems into manageable pieces, fostering modularity and reusability. This is crucial for tackling larger, more intricate programs, directly aligning with **Course Outcome 3 (CO3)** – using functions to solve computational problems by dividing them into modules.

Today, we're diving into a powerful concept that complements functions beautifully: **Structures**. Think of structures as a way to group related data items of *different* data types under a single name. This is a fundamental step towards creating more organized and meaningful data representations, which will be key for achieving **Course Outcome 1 (CO1)** by allowing us to model real-world problems more accurately.

## What Exactly is a Structure?

Imagine you're creating a program to manage information about students. A student typically has a name (a string), an age (an integer), and a grade point average or GPA (a floating-point number).

In C, we've been working with individual variables: `char name[50];`, `int age;`, `float gpa;`. If you want to pass information about *one* student to a function, you'd have to pass these three variables separately. This can become quite cumbersome, especially if you have many students or many pieces of information per student.

This is where structures come in! A structure allows us to bundle these related variables together into a single, cohesive unit. It's like creating a custom data type tailored to our specific needs.

**Key Concept:** A **structure** in C is a user-defined data type that allows you to group together variables of different data types under a single name. These individual variables within a structure are called **members** or **fields**.

Think of it like a "Student Record" or a "Book Entry." Each record or entry has multiple pieces of information associated with it, but it all pertains to *one* specific entity.

**Reference Point:** As Byron S. Gottfried mentions in "Programming with C," structures are an excellent way to model real-world entities. They provide a way to represent complex data in a more organized and logical manner.

## Defining a Structure: The Blueprint

Before we can create a structure variable, we first need to define the *structure type*. This is like creating a blueprint for our data. We use the `struct` keyword for this.

Let's define our `Student` structure:

```c
struct student {
    char name[50];  // Member for student's name
    int age;        // Member for student's age
    float gpa;      // Member for student's GPA
};
```

**Explanation:**

*   `struct student`: This declares a new structure type named `student`. The name `student` is called the **structure tag**.
*   `{ ... }`: The curly braces enclose the members of the structure.
*   `char name[50];`, `int age;`, `float gpa;`: These are the individual members of the `student` structure. Notice they are of different data types.

This definition itself doesn't create any storage for data. It's just a template. It tells the compiler, "Hey, when you see a `struct student`, it will have these three members."

## Defining a Structure Variable: Creating an Instance

Once we have defined the structure type (our blueprint), we can now create **variables** of that structure type. Think of this as taking the blueprint and building an actual house. Each variable will hold the data for one specific student.

There are a few ways to declare structure variables:

### 1. Declaration at the Time of Structure Definition

This is the most common way to declare variables immediately after defining the structure type.

```c
struct student {
    char name[50];
    int age;
    float gpa;
} student1, student2; // Declaring two variables of type 'struct student'
```

Here, `student1` and `student2` are now variables of type `struct student`. Each of them has its own `name`, `age`, and `gpa` members.

### 2. Declaration After the Structure Definition

You can also define the structure first and then declare variables of that type later in your program.

```c
// Define the structure type first
struct student {
    char name[50];
    int age;
    float gpa;
};

// Now, declare variables of this type
int main() {
    struct student student3; // Declaring a single variable
    struct student students[10]; // Declaring an array of structure variables
    // ... rest of your code
    return 0;
}
```

Here, `student3` is a variable of type `struct student`. `students` is an array where each element is a `struct student` variable, capable of holding data for 10 different students. This is extremely useful and ties directly into **Course Outcome 2 (CO2)**, as it shows how structures can be used with arrays, allowing us to manage collections of complex data.

### 3. Using `typedef` for Simpler Declarations

Working with `struct student` every time can be a bit verbose. We can use `typedef` to create an alias for our structure type, making declarations much cleaner. This is a very popular and good practice!

```c
// Define the structure type and create an alias for it
typedef struct {
    char name[50];
    int age;
    float gpa;
} StudentInfo; // StudentInfo is now an alias for our structure type

int main() {
    StudentInfo student4; // Declaring a variable using the alias
    StudentInfo student5, student6; // Declaring multiple variables
    // ... rest of your code
    return 0;
}
```

Now, instead of `struct student student4;`, we can simply write `StudentInfo student4;`. This makes your code much more readable and easier to manage, especially when dealing with many structures.

**Remember this:** `typedef` doesn't create a new data type; it creates a synonym for an existing one. It's purely for convenience and readability.

## Accessing Structure Members

Once we have declared a structure variable, we need a way to access and manipulate its individual members. We use the **dot operator** ( `. ` ) for this.

Let's go back to our `student1` variable. To assign a name to `student1`, we would do:

```c
// Assuming student1 has been declared as 'struct student student1;'
strcpy(student1.name, "Alice Smith"); // Use strcpy for strings
student1.age = 20;
student1.gpa = 3.85;
```

**Explanation:**

*   `student1.name`: This refers to the `name` member of the `student1` variable.
*   `student1.age`: This refers to the `age` member of the `student1` variable.
*   `student1.gpa`: This refers to the `gpa` member of the `student1` variable.

**Important Note on Strings:** Remember that `name` is an array of characters (a string). You cannot assign a string directly like `student1.name = "Alice Smith";`. You must use string manipulation functions like `strcpy()` from the `<string.h>` library. This is a common pitfall, so pay attention!

## Putting It All Together: An Example

Let's write a small program that defines a `Book` structure, declares a variable of this type, and then populates and prints its details. This will solidify our understanding of defining and using structure variables.

**Course Outcome Connection:** This example directly demonstrates the ability to define and use custom data types, crucial for CO1, and by extension, helps in structuring data for functions as per CO3.

```c
#include <stdio.h>
#include <string.h> // Required for strcpy

// 1. Define the structure type
struct Book {
    char title[100];
    char author[50];
    int pages;
    float price;
};

int main() {
    // 2. Declare a variable of the 'struct Book' type
    struct Book myBook;

    // 3. Populate the members of the structure variable
    strcpy(myBook.title, "The C Programming Language");
    strcpy(myBook.author, "Brian W. Kernighan & Dennis M. Ritchie");
    myBook.pages = 300;
    myBook.price = 450.00; // Assuming price in some currency

    // 4. Access and display the members
    printf("--- Book Details ---\n");
    printf("Title: %s\n", myBook.title);
    printf("Author: %s\n", myBook.author);
    printf("Pages: %d\n", myBook.pages);
    printf("Price: %.2f\n", myBook.price);

    return 0;
}
```

**Running this code would produce:**

```
--- Book Details ---
Title: The C Programming Language
Author: Brian W. Kernighan & Dennis M. Ritchie
Pages: 300
Price: 450.00
```

**Relatable Analogy:** Think of the `struct Book` definition as the template for a library card. The `myBook` variable is an actual library card filled out for a specific book. `myBook.title` is the space on the card for the book's title, `myBook.author` for the author, and so on. We fill in these spaces using the dot operator.

**From the Textbooks:** Kernighan and Ritchie's "The C Programming Language" (often called K&R) is foundational for C programming. Their approach to structures emphasizes creating abstract data types to model problems, which is exactly what we're doing here. Herbert Schildt's "C: The Complete Reference" also provides extensive coverage on structures, detailing various ways to declare and use them, and highlighting their importance in building complex applications.

## Summary and Key Takeaways

Today we learned about **structures**, a powerful feature in C that allows us to group related data of different types.

*   We define a structure using the `struct` keyword to create a **structure type** or **blueprint**.
*   We then declare **structure variables** of this type, which are instances that hold actual data.
*   We can declare variables at the same time as the definition or later.
*   Using `typedef` provides a cleaner syntax for declaring structure variables.
*   We access individual members of a structure variable using the **dot operator** (`.`).
*   Remember to use appropriate functions (like `strcpy`) for string members.

Understanding structures is vital for building more complex and organized programs, especially when you need to pass collections of related data to functions, directly supporting **CO3**. It also paves the way for more advanced topics like pointers to structures, which are crucial for dynamic memory allocation and data manipulation, aligning with **CO4**.

---

## Sample Questions with Answers

**1. Conceptual Question:** What is the fundamental difference between defining a structure type and declaring a structure variable? Explain with an analogy.

**Answer:**
Defining a structure type (`struct MyData { ... };`) is like creating a blueprint for a house. It specifies the design, the number of rooms, their sizes, etc., but it's not a physical house itself. It tells the compiler what kind of data will be grouped together.

Declaring a structure variable (e.g., `struct MyData house1;` or `MyData house1;` if `typedef` is used) is like building an actual house based on that blueprint. This variable is a physical instance that occupies memory and can store specific values for each of its members (e.g., `house1.numberOfRooms = 3;`).

**2. Exam-Oriented Question:** Consider the following C code snippet:

```c
#include <stdio.h>

struct Point {
    int x;
    int y;
};

int main() {
    struct Point p1;
    p1.x = 10;
    p1.y = 20;

    struct Point p2 = {30, 40};

    printf("p1.x = %d, p1.y = %d\n", p1.x, p1.y);
    printf("p2.x = %d, p2.y = %d\n", p2.x, p2.y);

    return 0;
}
```
What will be the output of this program? Explain why.

**Answer:**
**Output:**
```
p1.x = 10, p1.y = 20
p2.x = 30, p2.y = 40
```

**Explanation:**
*   The `struct Point` defines a structure with two integer members, `x` and `y`.
*   `struct Point p1;` declares a variable `p1` of type `struct Point`. The members `p1.x` and `p1.y` are accessed using the dot operator (`.`) and assigned values `10` and `20` respectively.
*   `struct Point p2 = {30, 40};` demonstrates another way to declare and initialize a structure variable. When members are initialized using a comma-separated list within curly braces, the values are assigned to the members in the order they are defined in the structure. So, `30` is assigned to `p2.x` and `40` to `p2.y`.
*   The `printf` statements then correctly display the values stored in the respective members of `p1` and `p2`.

**3. Practical Application Question:** You need to store information about employees, including their employee ID (integer), name (string), and salary (float). Define a structure for this and then declare a variable to hold the details of one employee.

**Answer:**

```c
#include <stdio.h>
#include <string.h> // Required for strcpy

// Define the Employee structure
struct Employee {
    int employeeID;
    char name[100];
    float salary;
};

int main() {
    // Declare a variable of type struct Employee
    struct Employee emp1;

    // Assign sample values (you would typically get these from input)
    emp1.employeeID = 101;
    strcpy(emp1.name, "John Doe");
    emp1.salary = 60000.50;

    // You can then use this variable, e.g., print its details:
    printf("Employee ID: %d\n", emp1.employeeID);
    printf("Name: %s\n", emp1.name);
    printf("Salary: %.2f\n", emp1.salary);

    return 0;
}

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
