---
title: "Pointer to structure"
subject: "PROGRAMMING IN C"
module: "Module 4: Pointers "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e67"
status: "completed"
scrapedAt: "2026-05-20T16:35:41.460Z"
---
Okay, class, let's dive into Module 4 of our Programming in C course. We've been building a strong foundation with variables, data types, control structures, and functions. Now, we're venturing into a topic that is absolutely crucial for mastering C programming and, I must say, often considered the 'magic' of C: **Pointers**.

Specifically, today we're going to focus on a very powerful combination: **Pointers to Structures**. This is where things get really interesting, and it directly addresses one of our course outcomes: **CO4: Develop C programs using pointers for dynamic data handling.** Understanding pointers to structures will unlock your ability to manage complex data efficiently, a key skill in real-world programming.

You'll find this topic extensively covered in our primary texts: Byron S. Gottfried's "Programming with C" and Hanly & Koffman's "Problem Solving and Program Design in C." These books offer excellent theoretical grounding, and I'll be weaving in concepts and examples from them, as well as referencing the indispensable "The C Programming Language" by Kernighan and Ritchie.

### Module 4: Pointers - A Quick Refresher

Before we jump into structures, let's just quickly revisit what a pointer is. Think of a pointer as a variable that doesn't hold a regular value like an integer or a character. Instead, it holds a *memory address*. It's like a signpost that points to another location in the computer's memory where some other data is stored.

We declare a pointer using the asterisk `*` symbol. For example:

```c
int *ptr; // Declares ptr as a pointer to an integer
char *charPtr; // Declares charPtr as a pointer to a character
```

The address of a variable is obtained using the address-of operator `&`. So, if `num` is an integer variable, `&num` gives us the memory address where `num` is stored.

And how do we *access* the value stored at the memory address that a pointer holds? That's where the dereference operator `*` comes in again. If `ptr` holds the address of `num`, then `*ptr` gives us the value of `num`.

Remember this: **A pointer stores a memory address, and the dereference operator `*` retrieves the value at that address.**

### What are Structures, Anyway?

Now, structures. We've likely touched upon them, but let's solidify our understanding. A structure is a user-defined data type that allows us to group together variables of different data types under a single name. Think of it as creating your own custom data type.

Why would we need this? Imagine you need to store information about a student. A student has a name (a string), an age (an integer), and a GPA (a float). You could use three separate variables, but it would be much cleaner and more organized to group them into a single `Student` structure.

Here's how we define a structure:

```c
struct Student {
    char name[50];
    int age;
    float gpa;
};
```

And here's how we declare a variable of this `Student` type:

```c
struct Student student1;
```

We access members of a structure using the dot operator (`.`).

```c
strcpy(student1.name, "Alice"); // Using strcpy because name is a character array
student1.age = 20;
student1.gpa = 3.85;
```

Gottfried's "Programming with C" gives excellent examples of defining and using structures for various real-world entities like bank accounts, employee records, and geometrical shapes. It highlights how structures help in organizing data logically, making our programs more readable and manageable.

### The Power Unleashed: Pointers to Structures

Okay, now for the main event: **Pointers to Structures**. Just as we can have pointers to basic data types like integers or characters, we can also have pointers that hold the memory address of an entire structure.

Why is this so important? Imagine you have a large structure, perhaps containing details of a complex object or a record with many fields. Passing such a structure directly to a function (by value) means copying the entire structure. If the structure is large, this can be inefficient in terms of both time and memory.

Using a pointer to a structure allows us to pass the *address* of the structure to a function. The function can then access and even modify the original structure using this address. This is a fundamental aspect of **dynamic data handling** (CO4).

#### Declaring a Pointer to a Structure

The syntax is straightforward, building on what we already know. If `struct Student` is our structure type, a pointer to it would be declared like this:

```c
struct Student *ptrStudent;
```

Here, `ptrStudent` is a pointer variable that can store the memory address of a `struct Student` variable.

#### Assigning the Address of a Structure to a Pointer

To make our pointer point to an actual `struct Student` variable, we use the address-of operator `&`:

```c
struct Student student1;
struct Student *ptrStudent;

// Assign the address of student1 to ptrStudent
ptrStudent = &student1;
```

Now, `ptrStudent` holds the memory address where the `student1` structure is stored.

#### Accessing Structure Members Through a Pointer

This is where a new, very important operator comes into play: the **arrow operator** (`->`).

If you have a pointer to a structure, say `ptrStudent`, and it points to `student1`, how do you access `student1.age` using `ptrStudent`? You *can't* directly use the dot operator with the pointer itself. You *could* dereference the pointer to get the structure and *then* use the dot operator:

```c
// Option 1: Dereference and then use dot operator (less common for member access)
(*ptrStudent).age = 21;
```

Notice the parentheses around `*ptrStudent`. This is crucial! Without them, `*ptrStudent.age` would be interpreted as `*(ptrStudent.age)`, which is incorrect because `ptrStudent` is a pointer, not a structure variable, and doesn't have a member named `age`. The expression `*ptrStudent` evaluates to the `struct Student` object itself.

However, this is a bit verbose. C provides a more concise and widely used operator for this specific purpose: the **arrow operator (`->`)**.

```c
// Option 2: Using the arrow operator (preferred and common)
ptrStudent->age = 21;
strcpy(ptrStudent->name, "Bob");
ptrStudent->gpa = 3.9;
```

The arrow operator `->` is essentially a shorthand for dereferencing a pointer and then accessing a member using the dot operator. So, `ptrStudent->age` is equivalent to `(*ptrStudent).age`.

**Remember this:** When working with pointers to structures, the arrow operator `->` is your best friend for accessing members. It's clean, efficient, and the standard way to do it. Kernighan and Ritchie's "The C Programming Language" emphasizes this operator as a syntactic sugar that makes pointer-to-structure manipulation much more natural.

#### Example: A Real-World Scenario

Let's imagine we're building a system to manage a library. We'll have a `Book` structure:

```c
struct Book {
    char title[100];
    char author[50];
    int publicationYear;
    float price;
};
```

Now, suppose we want to write a function to display the details of a book. Instead of passing the entire `Book` structure by value, we can pass a pointer to it.

```c
#include <stdio.h>
#include <string.h> // For strcpy

// Define the Book structure
struct Book {
    char title[100];
    char author[50];
    int publicationYear;
    float price;
};

// Function to display book details using a pointer
void displayBook(struct Book *bookPtr) {
    printf("--- Book Details ---\n");
    // Using the arrow operator to access members
    printf("Title: %s\n", bookPtr->title);
    printf("Author: %s\n", bookPtr->author);
    printf("Year: %d\n", bookPtr->publicationYear);
    printf("Price: %.2f\n", bookPtr->price);
    printf("--------------------\n");
}

int main() {
    struct Book myBook;
    struct Book *bookPtr;

    // Initialize the book details
    strcpy(myBook.title, "The Hitchhiker's Guide to the Galaxy");
    strcpy(myBook.author, "Douglas Adams");
    myBook.publicationYear = 1979;
    myBook.price = 9.99;

    // Assign the address of myBook to bookPtr
    bookPtr = &myBook;

    // Call the function, passing the pointer
    displayBook(bookPtr);

    // We can also directly pass the address of myBook to the function
    printf("\nCalling displayBook directly with address of myBook:\n");
    displayBook(&myBook);

    // Let's demonstrate modifying using the pointer
    printf("\nModifying book price using the pointer...\n");
    bookPtr->price = 10.50; // Or (&myBook)->price = 10.50;
    printf("New price: %.2f\n", myBook.price); // Accessing directly to verify

    return 0;
}
```

In this example, `displayBook` takes a `struct Book *bookPtr`. Inside the function, `bookPtr->title`, `bookPtr->author`, etc., are used to access the members of the `myBook` structure. This is a classic case of how pointers to structures facilitate efficient data handling and allow functions to work with original data. This directly relates to **CO4** and demonstrates **K3 (Application)** level of understanding as we're applying pointer concepts to a structured data scenario.

#### Pointers to Structures and Dynamic Memory Allocation

This is where pointers to structures truly shine and are indispensable for **dynamic data handling (CO4)**. What if we don't know beforehand how many books we need to store? We can use `malloc()` or `calloc()` from `<stdlib.h>` to allocate memory for structures on the heap.

Let's say we want to allocate memory for a single `Book` structure:

```c
#include <stdlib.h> // For malloc

// ... (struct Book definition and displayBook function as above)

int main() {
    struct Book *dynamicBook; // Pointer to a dynamically allocated Book structure

    // Allocate memory for one Book structure
    // sizeof(struct Book) gives us the size of the structure in bytes
    // malloc returns a void pointer, so we cast it to struct Book *
    dynamicBook = (struct Book *)malloc(sizeof(struct Book));

    // ALWAYS check if allocation was successful
    if (dynamicBook == NULL) {
        printf("Memory allocation failed!\n");
        return 1; // Indicate an error
    }

    // Now, dynamicBook points to a block of memory that can hold a Book.
    // We use the arrow operator to access its members.
    strcpy(dynamicBook->title, "1984");
    strcpy(dynamicBook->author, "George Orwell");
    dynamicBook->publicationYear = 1949;
    dynamicBook->price = 8.75;

    displayBook(dynamicBook); // Display the dynamically allocated book

    // IMPORTANT: Free the allocated memory when done to prevent memory leaks
    free(dynamicBook);
    dynamicBook = NULL; // Good practice to set pointer to NULL after freeing

    return 0;
}
```

This demonstrates a core principle of dynamic data handling. We're not limited by statically declared array sizes. We can allocate memory for structures precisely when and as much as we need it during program execution. This is the essence of what Hanly & Koffman describe as managing data structures when their size is not known at compile time.

#### Using Pointers to Structures with Arrays of Structures

We can also have arrays of structures, and pointers can be used to traverse them efficiently.

```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

struct Book {
    char title[100];
    char author[50];
    int publicationYear;
    float price;
};

void displayBook(struct Book *bookPtr) {
    printf("  Title: %s, Author: %s, Year: %d, Price: %.2f\n",
           bookPtr->title, bookPtr->author, bookPtr->publicationYear, bookPtr->price);
}

int main() {
    // Declare an array of 3 Book structures
    struct Book library[3];
    int i;

    // Initialize the array elements
    strcpy(library[0].title, "Dune");
    strcpy(library[0].author, "Frank Herbert");
    library[0].publicationYear = 1965;
    library[0].price = 12.50;

    strcpy(library[1].title, "Brave New World");
    strcpy(library[1].author, "Aldous Huxley");
    library[1].publicationYear = 1932;
    library[1].price = 9.75;

    strcpy(library[2].title, "Fahrenheit 451");
    strcpy(library[2].author, "Ray Bradbury");
    library[2].publicationYear = 1953;
    library[2].price = 8.99;

    printf("Displaying library using array indexing:\n");
    for (i = 0; i < 3; i++) {
        // Using dot operator with array indexing
        printf("Book %d: ", i + 1);
        displayBook(&library[i]); // Pass address of each element
    }

    // Now, let's use a pointer to traverse the array
    struct Book *ptrLibrary;
    ptrLibrary = library; // The name of an array often decays to a pointer to its first element

    printf("\nDisplaying library using a pointer to the array:\n");
    for (i = 0; i < 3; i++) {
        // Accessing elements using pointer arithmetic and arrow operator
        // ptrLibrary points to library[0], library[0].title is (*ptrLibrary).title
        // To get to the next element, we increment the pointer: ptrLibrary++
        // ptrLibrary + i points to the i-th element (after the initial one)
        // So, (ptrLibrary + i)->title is equivalent to library[i].title
        printf("Book %d: ", i + 1);
        displayBook(ptrLibrary + i);
    }
    // Or even more compactly within the loop:
    printf("\nDisplaying library using pointer arithmetic and ++:\n");
    for (i = 0; i < 3; i++) {
        printf("Book %d: ", i + 1);
        displayBook(ptrLibrary);
        ptrLibrary++; // Move pointer to the next Book structure
    }


    return 0;
}
```

In this example:
1.  `struct Book library[3];` declares an array where each element is a `struct Book`.
2.  `ptrLibrary = library;` makes `ptrLibrary` point to the beginning of the `library` array. Crucially, the name of an array (like `library`) in many contexts decays into a pointer to its first element. So, `library` here is equivalent to `&library[0]`.
3.  `ptrLibrary + i` uses pointer arithmetic. If `ptrLibrary` points to `library[0]`, then `ptrLibrary + 1` points to `library[1]`, `ptrLibrary + 2` points to `library[2]`, and so on. Each increment moves the pointer by the size of one `struct Book`.
4.  `(ptrLibrary + i)->title` is how we access the `title` member of the `struct Book` located at the memory address `ptrLibrary + i`. This is equivalent to `library[i].title`.

This shows how pointers and pointer arithmetic, combined with structures, allow us to efficiently navigate and manage collections of structured data, directly supporting **CO4** and demonstrating **K3**. Yashavant Kanetkar's "Let Us C" often provides excellent, clear examples of pointer arithmetic and its application with arrays.

#### Functions Returning Pointers to Structures

You can also have functions that return a pointer to a structure. This is useful if a function needs to return a dynamically allocated structure or a pointer to an existing structure.

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Person {
    char name[50];
    int age;
};

// Function that returns a pointer to a dynamically allocated Person structure
struct Person *createPerson(const char *name, int age) {
    struct Person *p = (struct Person *)malloc(sizeof(struct Person));
    if (p == NULL) {
        return NULL; // Indicate failure
    }
    strcpy(p->name, name);
    p->age = age;
    return p; // Return the pointer to the newly created Person
}

int main() {
    struct Person *person1;

    person1 = createPerson("Alice", 30);

    if (person1 != NULL) {
        printf("Created person: Name=%s, Age=%d\n", person1->name, person1->age);
        // Remember to free the allocated memory
        free(person1);
        person1 = NULL;
    } else {
        printf("Failed to create person.\n");
    }

    return 0;
}
```

In `createPerson`, we allocate memory for a `Person` structure, initialize its members, and then return the pointer to this newly created structure. The caller of `createPerson` is then responsible for managing this dynamically allocated memory (i.e., calling `free()` when done). This is a powerful pattern for creating data objects on demand, aligning perfectly with **CO4**.

#### Pitfalls and Important Reminders

1.  **Null Pointers:** Always check if a pointer obtained from `malloc` or a function returning a pointer is `NULL` before dereferencing it. Dereferencing a `NULL` pointer leads to undefined behavior, often a crash.
2.  **Memory Leaks:** If you allocate memory dynamically using `malloc` or `calloc` and forget to `free` it when you're done, you create a memory leak. Over time, this can consume all available memory, causing your program or even the system to slow down or crash. Always `free` what you `malloc`!
3.  **Dangling Pointers:** A pointer that points to a memory location that has already been freed is called a dangling pointer. Accessing memory through a dangling pointer also leads to undefined behavior. Setting a pointer to `NULL` after freeing its memory is a good practice to avoid dangling pointers.
4.  **Pointer Arithmetic:** Be careful with pointer arithmetic. `ptr + i` adds `i * sizeof(*ptr)` to the address. Ensure your increments/decrements are correct, especially when dealing with arrays of structures.
5.  **Arrow vs. Dot Operator:** Remember `->` is for pointers to structures, and `.` is for structure variables themselves.

These are the common issues highlighted in most C programming resources, including Schildt's "C The Complete Reference," which provides detailed discussions on memory management and common pointer-related errors.

### Connecting to Course Outcomes

Let's explicitly tie this back to our Course Outcomes:

*   **CO4: Develop C programs using pointers for dynamic data handling.**
    This entire topic is built around CO4. By learning pointers to structures, we gain the ability to:
    *   Allocate and deallocate memory for complex data structures at runtime (using `malloc`, `calloc`, `free`).
    *   Pass complex data structures to functions efficiently, avoiding costly copies.
    *   Build dynamic data structures like linked lists, trees, etc., where each node might be a structure pointed to by another structure.
    This is the essence of dynamic data handling, moving beyond fixed-size arrays and stack-allocated variables. You'll be applying these concepts at a **K3 (Application)** level.

*   **CO1: Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements.**
    While not directly a pointer topic, understanding structures and how to manage them with pointers is crucial for representing complex data derived from computational problems. For instance, if a problem requires tracking multiple related pieces of information (like coordinates of a point, properties of a particle), a structure is the natural choice, and pointers make managing collections of these easier.

*   **CO3: Utilize functions to find solution to the computational problems by dividing it into a number of modules and abstract data types.**
    Structures allow us to define our own abstract data types. Pointers to structures are the primary way we pass these custom data types to functions, enabling modular programming. Functions that operate on `struct Person *` or `struct Book *` are modules that can process specific data items efficiently.

### Conclusion and What to Practice

So, we've covered what pointers to structures are, how to declare and use them with the arrow operator, how they are essential for dynamic memory allocation, and how they work with arrays. This is a cornerstone of advanced C programming.

For your practice, I strongly recommend:

*   Creating your own structures for various real-world entities (e.g., `Employee`, `Vehicle`, `Point`, `Rectangle`).
*   Writing functions that take pointers to these structures as arguments and perform operations like initialization, display, calculation (e.g., area of a rectangle).
*   Experimenting with dynamic memory allocation using `malloc` for these structures.
*   Trying to build a simple linked list where each node is a structure containing data and a pointer to the next node. This is a classic application of pointers to structures.

Balagurusamy's "Programming in ANSI C" also offers a wealth of exercises that reinforce these concepts with clear, step-by-step examples.

Remember, mastering pointers, especially pointers to structures, is key to unlocking C's full potential for efficient and dynamic data manipulation. It's a concept that requires practice, but the rewards in terms of programming power are immense!

---

### Sample Questions and Answers

**Q1. What is the primary operator used to access members of a structure when you have a pointer to that structure?**

*   **Answer:** The arrow operator (`->`). For example, if `ptr` is a pointer to a structure named `myStruct` with a member `data`, you access it as `ptr->data`. This is equivalent to `(*ptr).data`.

**Q2. Explain the significance of pointers to structures in the context of dynamic data handling (CO4).**

*   **Answer:** Pointers to structures are fundamental to dynamic data handling in C. They allow us to:
    *   Allocate memory for structures on the heap using functions like `malloc()` and `calloc()`. This means we can create data structures whose size is not known at compile time and can grow or shrink during program execution.
    *   Pass structures to functions efficiently by passing only their address (a pointer), rather than copying the entire structure, which saves memory and processing time, especially for large structures.
    *   Build complex dynamic data structures such as linked lists, trees, graphs, where each element (node) is typically a structure containing data and pointers to other structures.

**Q3. Consider the following code snippet. What will be printed? Explain why.**

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int value;
    struct Node *next;
};

int main() {
    struct Node *head = (struct Node *)malloc(sizeof(struct Node));
    if (head == NULL) return 1;

    head->value = 10;
    head->next = NULL;

    struct Node *temp = head; // temp points to the same node as head

    printf("%d\n", temp->value); // Accessing value via temp

    // What happens if we do this?
    // head = NULL; // This only changes the pointer 'head', not 'temp'

    printf("%d\n", temp->value); // Accessing value via temp again

    free(head); // Free the memory pointed to by head

    // What would happen if we tried to access temp->value here?
    // printf("%d\n", temp->value); // DANGEROUS! temp is now a dangling pointer.

    return 0;
}
```

*   **Answer:**
    The code will first print `10`.
    Then, it will print `10` again.
    **Explanation:**
    1.  `head` is allocated memory for a `Node` structure, and its `value` is set to 10.
    2.  `temp` is assigned the value of `head`. This means `temp` now points to the *same memory location* as `head`. Both pointers refer to the dynamically allocated `Node`.
    3.  `printf("%d\n", temp->value);` correctly accesses the `value` member of the `Node` that `temp` points to, printing `10`.
    4.  The line `head = NULL;` only changes the `head` pointer itself to point to `NULL`. It *does not* affect `temp`, which still points to the original memory location.
    5.  The second `printf("%d\n", temp->value);` also accesses the `value` member of the `Node` that `temp` points to, which is still the same node with `value = 10`.
    6.  `free(head);` deallocates the memory that `head` (and therefore `temp`) was pointing to.
    7.  The commented-out line `printf("%d\n", temp->value);` would attempt to access memory that has been freed, making `temp` a "dangling pointer." This would result in undefined behavior, likely a program crash or garbage output. This demonstrates why it's important to be mindful of pointer relationships and memory management.

**Q4. Write a C program snippet that defines a `Student` structure, creates a dynamically allocated `Student` object, initializes its members using pointer notation, and then prints its details.**

*   **Answer:**

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Define the Student structure
struct Student {
    char name[50];
    int rollNumber;
    float marks;
};

// Function to display student details (using pointer)
void displayStudent(struct Student *sPtr) {
    printf("Name: %s\n", sPtr->name);
    printf("Roll Number: %d\n", sPtr->rollNumber);
    printf("Marks: %.2f\n", sPtr->marks);
}

int main() {
    // Declare a pointer to a Student structure
    struct Student *studentPtr;

    // Dynamically allocate memory for one Student object
    studentPtr = (struct Student *)malloc(sizeof(struct Student));

    // Check if memory allocation was successful
    if (studentPtr == NULL) {
        printf("Error: Memory allocation failed!\n");
        return 1; // Exit with an error code
    }

    // Initialize members using the arrow operator
    strcpy(studentPtr->name, "Rahul Sharma");
    studentPtr->rollNumber = 101;
    studentPtr->marks = 85.5;

    // Display the student details using the function
    printf("Student Information:\n");
    displayStudent(studentPtr);

    // Free the dynamically allocated memory
    free(studentPtr);
    studentPtr = NULL; // Set pointer to NULL after freeing

    return 0;
}
