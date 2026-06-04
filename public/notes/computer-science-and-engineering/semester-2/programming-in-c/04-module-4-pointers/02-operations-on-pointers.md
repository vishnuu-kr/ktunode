---
title: "Operations on pointers"
subject: "PROGRAMMING IN C"
module: "Module 4: Pointers "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e60"
status: "completed"
scrapedAt: "2026-05-20T16:35:36.378Z"
---
Absolutely! Let's dive into the fascinating world of pointers and their operations in C. This module is crucial because it unlocks powerful ways to manage memory and build more efficient and dynamic programs. Think of it as learning the secret handshake of C programming – once you get it, a whole new level of control becomes available.

---

## Module 4: Pointers - Operations on Pointers

Welcome, everyone! In our previous sessions, we laid the groundwork for understanding what pointers *are*. We learned that a pointer is a variable that stores the *memory address* of another variable. It's like having a sticky note with someone's house address written on it. You don't have the person themselves, but you know exactly where to find them.

Today, we're going to talk about what we can *do* with these sticky notes, these addresses. What operations can we perform on pointers? This is where the real magic of pointers starts to unfold, and it directly ties into **Course Outcome 4 (CO4)**: "Develop C programs using pointers for dynamic data handling." Understanding pointer operations is the key to dynamic memory allocation, linked lists, trees, and so much more. It's how we can make our programs adaptable and efficient.

Let's also keep in mind **Course Outcome 2 (CO2)**, "Develop C programs using arrays, matrices, and strings." You'll see how pointers are intrinsically linked to these fundamental data structures. In fact, in C, arrays and pointers are very closely related.

### 1. Dereferencing a Pointer: Accessing the Value

The most fundamental operation we perform on a pointer is to *dereference* it. What does that mean? It means going to the address stored in the pointer and retrieving the *value* at that location.

Think back to our sticky note analogy. If you have a sticky note with an address, dereferencing is like going to that house and picking up the package that's waiting for you on the doorstep.

In C, we use the **asterisk symbol (*)**, also known as the "dereference operator" or "indirection operator," to achieve this.

Let's see how it works:

```c
#include <stdio.h>

int main() {
    int age = 30;         // A regular integer variable
    int *ptr_age;         // A pointer to an integer

    ptr_age = &age;       // ptr_age now stores the memory address of 'age'

    printf("The value of age is: %d\n", age);
    printf("The address of age is: %p\n", &age); // %p is for printing pointer addresses
    printf("The value stored in ptr_age (the address of age) is: %p\n", ptr_age);

    // Now, let's dereference ptr_age to get the value of age
    printf("The value pointed to by ptr_age is: %d\n", *ptr_age);

    return 0;
}
```

**Explanation:**

*   `int age = 30;`: We declare an integer variable `age` and initialize it to 30.
*   `int *ptr_age;`: We declare a pointer variable `ptr_age` that is designed to hold the address of an `int`. The `*` here in the declaration tells the compiler that `ptr_age` is a pointer.
*   `ptr_age = &age;`: The `&` operator (the "address-of" operator) gets the memory address of `age`. We then assign this address to our pointer `ptr_age`. So, `ptr_age` now "points to" `age`.
*   `*ptr_age`: This is the dereferencing part. When we use `*` *before* a pointer variable (after it's been declared and assigned an address), it means "go to the address stored in `ptr_age` and give me the value found there." In this case, it retrieves the value 30, which is stored in `age`.

**Why is this important?** This operation is fundamental to **CO4** because it allows us to indirectly access and modify the original variable. We can change the value of `age` not by directly writing `age = 40;`, but by doing `*ptr_age = 40;`. The pointer acts as a conduit.

*Remember this:* The `*` operator has two meanings in C:
1.  In a declaration (`int *ptr;`), it declares a variable as a pointer.
2.  In an expression (`*ptr_age`), it dereferences a pointer to access the value it points to.

**A Relatable Example:** Imagine you're a pizza delivery driver. Your GPS (the pointer) has the address of a customer (the variable `age`). When you arrive at the address, you look at the doorstep for the pizza (the value). The address itself is `ptr_age`, and the pizza you retrieve is `*ptr_age`.

### 2. Pointer Arithmetic: Moving Through Memory

This is where things get really interesting and a bit more abstract. Pointers don't just point to a single byte of memory; they point to entire data types. When you perform arithmetic operations on pointers, the compiler intelligently adjusts the address based on the *size* of the data type the pointer points to. This is known as **pointer arithmetic**.

Let's consider our `int *ptr_age` example. An `int` typically takes up 4 bytes of memory (this can vary depending on the system, but for our examples, let's assume 4 bytes).

**Key Operations:**

*   **Incrementing a Pointer (`ptr++`):** When you increment a pointer, it doesn't just add 1 to the memory address. It adds the *size of the data type* it points to. So, if `ptr_age` points to an `int` (4 bytes), `ptr_age++` will move the pointer forward by 4 bytes, so it points to the *next* integer in memory.

*   **Decrementing a Pointer (`ptr--`):** Similarly, `ptr--` moves the pointer backward by the size of the data type.

*   **Adding an Integer to a Pointer (`ptr + n`):** This moves the pointer forward by `n` times the size of the data type. `ptr + 5` will move the pointer forward by 5 elements.

*   **Subtracting an Integer from a Pointer (`ptr - n`):** This moves the pointer backward by `n` times the size of the data type.

*   **Subtracting Two Pointers (`ptr1 - ptr2`):** If two pointers point to elements of the *same* array, subtracting them gives you the number of elements between them. The result is an `int`.

**Example with Arrays:** Pointer arithmetic is most commonly and usefully demonstrated with arrays. Remember **CO2**? Arrays and pointers are tightly coupled.

```c
#include <stdio.h>

int main() {
    int numbers[] = {10, 20, 30, 40, 50}; // An array of 5 integers
    int *ptr_numbers;

    ptr_numbers = numbers; // 'numbers' itself is a pointer to the first element (numbers[0])

    printf("Using array indexing:\n");
    printf("numbers[0] = %d\n", numbers[0]);
    printf("numbers[1] = %d\n", numbers[1]);

    printf("\nUsing pointer arithmetic:\n");
    // ptr_numbers points to numbers[0]
    printf("*ptr_numbers = %d\n", *ptr_numbers); // Dereferencing gives the value of numbers[0]

    // Move ptr_numbers to point to the next element (numbers[1])
    ptr_numbers = ptr_numbers + 1; // or ptr_numbers++;
    printf("*(ptr_numbers + 1) = %d\n", *ptr_numbers); // This will print 20 (value of numbers[1])

    // Let's go back to the start and access elements systematically
    ptr_numbers = numbers; // Reset ptr_numbers to point to numbers[0]

    printf("\nAccessing array elements using a loop and pointer arithmetic:\n");
    for (int i = 0; i < 5; i++) {
        // ptr_numbers + i calculates the address of the i-th element
        // * (ptr_numbers + i) dereferences it to get the value
        printf("Element %d: %d\n", i, *(ptr_numbers + i));
    }

    // Example of pointer subtraction
    int *ptr1 = &numbers[2]; // Points to 30
    int *ptr2 = &numbers[0]; // Points to 10
    printf("\nDifference between ptr1 and ptr2: %ld\n", ptr1 - ptr2); // Output will be 2 (integer difference)

    return 0;
}
```

**Explanation of Array and Pointer Connection:**

*   In C, the name of an array (like `numbers`) is essentially a constant pointer to its first element. So, `numbers` is equivalent to `&numbers[0]`.
*   When we write `ptr_numbers = numbers;`, we are assigning the address of the first element of the array to our pointer.
*   `*(ptr_numbers + i)`: This is a very common idiom. `ptr_numbers + i` calculates the address of the `i`-th element from where `ptr_numbers` is currently pointing, and `*` dereferences it to get the value. This is functionally equivalent to `numbers[i]`.

**Why is this crucial for CO2 and CO4?** This demonstrates how pointers can be used to traverse arrays, which is fundamental to processing arrays efficiently. It also paves the way for **dynamic data handling** because we can allocate memory dynamically and then use pointer arithmetic to move through that block of memory.

**Think of it like this:** If you have a row of houses (the array elements), and your pointer is at the first house, incrementing the pointer means moving to the *next* house in the row. You don't just jump to the next street; you move to the *neighboring* house of the same type.

**Common Pitfall:** Trying to perform arithmetic on pointers that don't point to elements of the same array (or one past the end) leads to undefined behavior. The compiler doesn't know how to interpret the arithmetic.

### 3. Pointers to Pointers: The Address of an Address

Just as a pointer can store the address of a regular variable, a "pointer to a pointer" can store the address of *another pointer*. This might sound a bit mind-bending at first, but it's incredibly useful, especially when dealing with arrays of pointers or when you want a function to modify a pointer itself.

We declare a pointer to a pointer using two asterisks. For example, `int **ptr_to_ptr;` declares `ptr_to_ptr` as a pointer that points to a pointer to an integer.

Let's build on our `age` and `ptr_age` example:

```c
#include <stdio.h>

int main() {
    int age = 30;
    int *ptr_age = &age;       // ptr_age stores the address of age
    int **ptr_to_ptr;          // A pointer to a pointer to an int

    ptr_to_ptr = &ptr_age;     // ptr_to_ptr stores the address of ptr_age

    printf("Value of age: %d\n", age);
    printf("Address of age: %p\n", &age);
    printf("Value of ptr_age (address of age): %p\n", ptr_age);
    printf("Address of ptr_age: %p\n", &ptr_age);
    printf("Value of ptr_to_ptr (address of ptr_age): %p\n", ptr_to_ptr);

    // Accessing the value of age using different levels of indirection:

    // 1. Direct access:
    printf("\nAccessing age directly: %d\n", age);

    // 2. Via one-level pointer (ptr_age):
    printf("Accessing age via *ptr_age: %d\n", *ptr_age);

    // 3. Via two-level pointer (ptr_to_ptr):
    //    *ptr_to_ptr gives us the value stored in ptr_to_ptr, which is the address of ptr_age.
    //    So, *ptr_to_ptr is the same as ptr_age.
    //    Then, *(*ptr_to_ptr) dereferences this value (which is ptr_age),
    //    effectively giving us the value of age.
    printf("Accessing age via *(*ptr_to_ptr): %d\n", *(*ptr_to_ptr));

    // Modifying age using ptr_to_ptr
    // We want to change age to 50.
    // *(*ptr_to_ptr) = 50;  // This is the same as age = 50;
    // Or, *ptr_age = 50;    // This is also the same as age = 50;

    printf("\nModifying age via ptr_to_ptr...\n");
    *(*ptr_to_ptr) = 50;
    printf("New value of age: %d\n", age); // Should be 50

    return 0;
}
```

**Explanation:**

*   `ptr_to_ptr = &ptr_age;`: We are storing the memory address *of the pointer `ptr_age`* into `ptr_to_ptr`.
*   `*ptr_to_ptr`: This dereferences `ptr_to_ptr` once. Since `ptr_to_ptr` holds the address of `ptr_age`, `*ptr_to_ptr` evaluates to `ptr_age` itself (the address of `age`).
*   `*(*ptr_to_ptr)`: This dereferences the result of `*ptr_to_ptr`. Since `*ptr_to_ptr` is `ptr_age`, this is equivalent to `*ptr_age`, which finally gives us the value of `age`.

**When is this useful?**

*   **Functions that modify pointers:** If you pass a pointer to a function and want that function to change *which variable the pointer points to*, you need to pass a pointer to that pointer.
*   **Arrays of strings:** A common way to represent an array of strings is as an array of character pointers (`char *strings[]`). To pass this structure around or modify it, you might encounter pointers to these pointers.
*   **Dynamic memory allocation:** For complex data structures, especially those that grow or shrink, you'll often use pointers to pointers.

**Analogy:** Think of a treasure hunt.
*   `age` is the treasure.
*   `ptr_age` is a map with the treasure's location.
*   `ptr_to_ptr` is a map that tells you where to find *that* map.

To get the treasure (`age`), you first use the second map (`ptr_to_ptr`) to find the first map (`ptr_age`), and then use the first map (`ptr_age`) to find the treasure (`age`).
