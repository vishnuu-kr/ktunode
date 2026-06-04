---
title: "Operations on pointers"
subject: "PROGRAMMING IN C"
module: "Module 4: Pointers "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f990a"
status: "completed"
scrapedAt: "2026-05-23T16:09:30.852Z"
---
# PROGRAMMING IN C: Module 4 - Pointers
## Topic: Operations on Pointers

Welcome, everyone, to Module 4, where we dive deep into one of the most powerful, and perhaps initially intimidating, features of C programming: **Pointers**. Today, we're going to unravel the mysteries of *operations on pointers*. Understanding these operations is crucial because it directly empowers us to tackle dynamic data handling, a key aspect of our Course Outcome 4 (CO4). We'll see how pointers aren't just memory addresses, but tools that allow us to manipulate data in incredibly flexible ways.

Think of memory like a vast city, and each house in this city has a unique address. A regular variable is like living in a house – you know its contents (the value of the variable), but you might not always know its precise street address. A **pointer**, on the other hand, is like a **notebook where you jot down the address of a house**. This notebook itself occupies a space in memory, and what it *holds* is an address.

### What is a Pointer? A Quick Recap

Before we start operating on them, let's quickly solidify what pointers are.

*   **Definition:** A pointer is a variable that stores the **memory address of another variable**.
*   **Declaration:** We declare a pointer using the asterisk (`*`) symbol. For example, `int *ptr;` declares `ptr` as a pointer that can hold the address of an integer variable.

### The Core Operations: What Can We Do with Pointers?

The power of pointers lies in the operations we can perform on them. These operations allow us to navigate memory, access and modify data indirectly, and manage dynamic memory allocation. Let's explore them one by one.

#### 1. The Address-Of Operator (`&`)

This is our fundamental tool for getting started. The `&` operator, when placed before a variable name, gives you the **memory address of that variable**. It's like asking, "Where is this variable located in memory?"

**Analogy:** Imagine you have a friend, Alice, who lives in a house. You know Alice (the variable), but to send her a letter, you need her house number and street name (her memory address). The `&` operator is like looking up Alice's address in the phone book or asking someone for it.

**Example:**

```c
int age = 30;
int *ptr_age; // Declare a pointer to an integer

ptr_age = &age; // Store the address of 'age' in 'ptr_age'

printf("The value of age is: %d\n", age);
printf("The address of age is: %p\n", &age); // Using %p for addresses
printf("The value stored in ptr_age is: %p\n", ptr_age); // ptr_age holds the address of age
```

**Why is this important?** This is the very first step to using pointers effectively. We need to know *where* the data is before we can point to it. This directly relates to CO4, as it’s the foundation for dynamic data handling. You're learning to manage *where* data resides, not just *what* the data is.
