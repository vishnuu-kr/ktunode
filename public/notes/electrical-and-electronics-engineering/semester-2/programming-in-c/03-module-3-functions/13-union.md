---
title: "Union."
subject: "PROGRAMMING IN C"
module: "Module 3: Functions "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9907"
status: "completed"
scrapedAt: "2026-05-23T16:09:28.448Z"
---
# PROGRAMMING IN C - Module 3: Functions - Union

Welcome, everyone! Today, we're going to dive into a fascinating data structure in C called **Union**. You've already mastered structures, which are like a collection of different data types grouped together under one name. Unions, on the other hand, are similar but with a very important twist that makes them incredibly useful in specific scenarios. Think of them as a "shared memory" space.

Our journey with unions today will help us understand how to manage memory efficiently and how to create more flexible and powerful programs. This directly ties into **CO1** (understanding basic C constructs) and **CO3** (utilizing functions to solve problems by dividing them into modules and abstract data types). Unions, like structures and functions, allow us to abstract data and create more organized code.

## What is a Union?

At its core, a union is a user-defined data type that allows you to store different types of data in the same memory location. But here's the crucial part: **a union can only hold one of its members at any given time**. This is fundamentally different from a structure, where all members reside in distinct memory locations, and thus the total memory occupied by a structure is the sum of the sizes of its members.

Let's use an analogy to make this clearer. Imagine a toolbox.

*   **Structure:** A structure is like a toolbox with separate compartments for different tools. You can put a hammer in one compartment, a screwdriver in another, and a wrench in a third. All tools are present simultaneously. The total space the toolbox takes up is the sum of the space needed for each compartment.
*   **Union:** A union is like a single compartment in that toolbox that can hold *either* a hammer, *or* a screwdriver, *or* a wrench. You can't put all three in that single compartment at the same time. If you put a hammer in, the space is occupied by the hammer. If you then decide to put a screwdriver in, it overwrites the hammer. The size of the union is determined by the size of its largest member.

This concept of sharing memory is powerful. It allows us to save memory when we know that only one of several possible data types will be active at any given point in time.

## Defining a Union

The syntax for defining a union is very similar to defining a structure:

```c
union UnionName {
    dataType1 member1;
    dataType2 member2;
    // ... more members
};
```

Let's say we want to create a union that can store either an integer, a float, or a character. We would define it like this:

```c
union Data {
    int integerValue;
    float floatValue;
    char charValue;
};
```

Here, `Data` is the name of our union. It has three members: `integerValue` (an `int`), `floatValue` (a `float`), and `charValue` (a `char`).

**Remember this:** The memory allocated for a union is equal to the size of its largest member. For our `Data` union, assuming `sizeof(int)` is 4 bytes, `sizeof(float)` is 4 bytes, and `sizeof(char)` is 1 byte, the total size of the `Data` union would be 4 bytes (the size of the largest member, which is either `int` or `float`).

## Declaring Union Variables

Once a union type is defined, you can declare variables of that union type:

```c
union UnionName variableName;
```

Using our `Data` union example:

```c
union Data myData;
```

Now, `myData` is a variable of type `union Data`. This `myData` variable will occupy 4 bytes of memory (assuming the sizes mentioned earlier).

## Accessing Union Members

We access members of a union using the dot operator (`.`), just like with structures. However, the *meaning* of the data stored depends entirely on which member we last assigned a value to.

Let's illustrate:

```c
#include <stdio.h>

union Data {
    int integerValue;
    float floatValue;
    char charValue;
};

int main() {
    union Data myData;

    // Assigning an integer value
    myData.integerValue = 10;
    printf("Integer value: %d\n", myData.integerValue);
    // When we print floatValue or charValue now, the output is undefined
    // because the memory location currently holds an integer.

    // Assigning a float value
    myData.floatValue = 3.14159;
    printf("Float value: %f\n", myData.floatValue);
    // Now, the memory location holds a float. Printing integerValue or charValue
    // will give garbage values derived from the float's binary representation.

    // Assigning a character value
    myData.charValue = 'A';
    printf("Character value: %c\n", myData.charValue);
    // Now, the memory location holds a character.

    // Let's see what happens if we try to print another member after assigning a character
    printf("Integer value after char assignment: %d\n", myData.integerValue); // This will likely be garbage!

    return 0;
}
```

**Output (example, actual integer value after char assignment may vary):**

```
Integer value: 10
Float value: 3.141590
Character value: A
Integer value after char assignment: 16777216
```

See what happened? When we assigned `'A'` to `myData.charValue`, the memory was interpreted as a character. When we then tried to print `myData.integerValue`, C tried to interpret those same 4 bytes (or however many bytes `int` takes) as an integer. The result is a "garbage" value because the bit pattern representing `'A'` doesn't correspond to a meaningful integer.

**Key Takeaway:** You must keep track of which type of data you last stored in the union. Accessing a member other than the one most recently assigned a value will lead to undefined behavior. This is a critical point, often tested in exams!

This relates to **CO1** because it's about understanding the fundamental behavior of data types and memory. It also touches on **CO3** as we are defining an abstract data type (the union) and need to manage its state.

## When to Use Unions?

Unions are particularly useful in situations where you have data that can be one of several types, but never more than one at a time. This can lead to significant memory savings. Here are a few common use cases:

1.  **Representing Variants:** Imagine you're building a system to store different types of sensor readings. A sensor might provide a temperature (a float), a pressure (an int), or a status code (a char). If you know that at any given moment, a sensor reading will be *either* a temperature *or* a pressure *or* a status, a union is ideal.

    Let's consider an `SensorReading` union:

    ```c
    union SensorReading {
        float temperature;
        int pressure;
        char status_code;
    };
    ```

    If we used a structure with all these members, it would take `sizeof(float) + sizeof(int) + sizeof(char)` bytes. With the union, it only takes `sizeof(float)` (assuming float is the largest). This is a direct memory saving!

2.  **Interfacing with Hardware:** Sometimes, when working with hardware or low-level systems, you might need to interpret a block of memory in different ways. For example, a certain 32-bit memory location might represent a single 32-bit integer, or it could be interpreted as four 8-bit characters (like ASCII values). A union can be used to facilitate this kind of reinterpretation.

    ```c
    typedef union {
        unsigned int word; // A 32-bit word
        unsigned char byte[4]; // Four 8-bit bytes
    } MemoryWord;

    MemoryWord mem;
    mem.word = 0x41424344; // Hexadecimal representation

    printf("As word: %x\n", mem.word);
    printf("As bytes: %c %c %c %c\n", mem.byte[0], mem.byte[1], mem.byte[2], mem.byte[3]);
    ```

    **Output:**
    ```
    As word: 41424344
    As bytes: D C B A
    ```
    *(Note: The order of bytes might be Little-endian or Big-endian depending on your system's architecture. In this example, it's showing Little-endian where the least significant byte `0x44` is at the lowest address, but printed in reverse character order)*.

    This demonstrates how a single memory block can be viewed as different types. This is a bit advanced and relates to **CO4** (pointers and dynamic data handling) if you were to manipulate memory addresses, but the union itself provides a clean way to declare this shared interpretation.

3.  **State Machines and Tagged Unions:** Often, you'll want to know *which* type of data is currently stored in the union. A common pattern is to use a "tag" or "discriminator" variable alongside the union. This tag, usually an `enum` or an `int`, indicates the type of data currently active. This pattern is sometimes called a "tagged union."

    Let's expand on our `SensorReading` example:

    ```c
    typedef enum {
        TEMP,
        PRESSURE,
        STATUS
    } ReadingType;

    typedef struct {
        ReadingType type; // The tag
        union {
            float temperature;
            int pressure;
            char status_code;
        } data; // The union
    } SensorData;

    int main() {
        SensorData reading;

        // Reading is a temperature
        reading.type = TEMP;
        reading.data.temperature = 25.5;
        printf("Temperature: %.1f\n", reading.data.temperature);

        // Reading is now a pressure
        reading.type = PRESSURE;
        reading.data.pressure = 1013;
        printf("Pressure: %d\n", reading.data.pressure);

        // How to safely access it? Use the tag!
        if (reading.type == PRESSURE) {
            printf("Current reading is pressure: %d\n", reading.data.pressure);
        } else if (reading.type == TEMP) {
            printf("Current reading is temperature: %.1f\n", reading.data.temperature);
        }

        return 0;
    }
    ```

    This `struct` containing both the tag and the union is a very robust way to handle variant data. You check the `type` member first to know which member of the `data` union is valid. This is a prime example of abstracting data and managing it using a structure and union together, directly supporting **CO3**.

## Key Differences from Structures

It's worth reiterating the core difference to avoid confusion:

*   **Structures:** All members occupy their own memory space. The total size is the sum of individual member sizes (plus padding, potentially).
*   **Unions:** All members share the *same* memory space. The total size is the size of the *largest* member. Only one member can hold a valid value at any given time.

Consider `Gottfried's "Programming with C"` and `Kernighan and Ritchie's "The C Programming Language"`. Both texts emphasize that the fundamental distinction lies in memory allocation and how data is interpreted. K&R's iconic book is particularly sharp on these foundational aspects.

## Common Pitfalls and Exam Tips

1.  **Accessing the Wrong Member:** I cannot stress this enough! Always know what type of data you most recently stored. Using a tag (like in the `SensorData` example) is the safest way to manage this. If you're just using a raw union variable, make a mental note (or a real one in your code comments!) of what's inside.
    *   *Exam Tip:* Expect questions that test your understanding of what happens when you access a different member. They might show a code snippet and ask for the output, or ask you to identify potential errors.

2.  **Size of Union:** Remember the union's size is dictated by its largest member. If you have `union { int a; char b; }`, the size will be `sizeof(int)`, not `sizeof(int) + sizeof(char)`.
    *   *Exam Tip:* Questions might involve calculating the memory footprint of a union.

3.  **Initialization:** You can only initialize *one* member of a union at the time of declaration. The member initialized is the one that holds the valid value initially.

    ```c
    union Data initData = { 25 }; // Initializes integerValue
    // or
    union Data initData = { .integerValue = 25 }; // C99 and later, using designated initializers

    // You CANNOT do this:
    // union Data initData = { 25, 3.14 }; // This is an error!
    ```
    *   *Exam Tip:* Be aware of correct initialization syntax for unions.

4.  **Use with Functions:** Unions can be passed to functions, either by value or by pointer. When passing by value, a copy of the union is made. When passing by pointer, you're passing the address of the union.

    ```c
    void displayData(union Data d) {
        // d is a copy of the original union
        printf("Inside function: %d\n", d.integerValue);
    }

    void displayDataPtr(union Data *ptr) {
        // ptr points to the original union
        printf("Inside function via pointer: %f\n", ptr->floatValue); // Using arrow operator for pointers
    }
    ```
    This directly supports **CO3**, as functions are modular units, and unions can be data units passed between these modules.

## Summary of Key Concepts

*   **Definition:** `union UnionName { member1; member2; ... };`
*   **Memory:** All members share the same memory space. Size is determined by the largest member.
*   **Access:** Use the dot operator (`.`) for variables, arrow operator (`->`) for pointers.
*   **Usage:** Only one member can hold a valid value at a time.
*   **Safety:** Use a tag or keep track of the currently active member to avoid undefined behavior.
*   **Use Cases:** Memory saving, representing variants, hardware interfacing.

Unions are a sophisticated tool. Used correctly, they can lead to more efficient and elegant code. Think of them as specialized containers where you optimize for space by accepting the limitation of holding only one item at a time.

Remember, your understanding of unions is crucial for grasping more advanced C concepts and for efficient memory management, which aligns with **CO1** and provides building blocks for **CO3** and **CO5** when dealing with how data is structured and potentially stored or communicated.

---

## Sample Questions and Answers

**1. Conceptual Question:**
Explain the fundamental difference between a `struct` and a `union` in C, focusing on memory allocation and data storage.

**Answer:**
The primary difference lies in how their members are stored in memory.
*   A **structure (`struct`)** allocates separate memory locations for each of its members. The total size of a structure is the sum of the sizes of all its members, possibly with some padding added by the compiler for alignment purposes. All members can hold their values simultaneously.
*   A **union**, on the other hand, allocates a single memory location that is shared by all its members. The size of the union is equal to the size of its largest member. At any given point in time, only one member of the union can hold a valid value; assigning a value to one member overwrites the data previously held by any other member.

**2. Practical Question:**
Consider the following C code. What will be printed, and why?

```c
#include <stdio.h>

union Test {
    int i;
    float f;
};

int main() {
    union Test t;
    t.f = 10.5;
    printf("t.f = %f, t.i = %d\n", t.f, t.i);
    return 0;
}
```

**Answer:**
The output will be something like: `t.f = 10.500000, t.i = 1073741824` (the value of `t.i` might vary depending on the system's architecture and floating-point representation).

**Reasoning:**
1.  A `union Test` is declared. Assuming `sizeof(float)` is 4 bytes and `sizeof(int)` is 4 bytes, the union `t` will occupy 4 bytes.
2.  `t.f = 10.5;` assigns the floating-point value `10.5` to the union. The memory occupied by `t` now holds the binary representation of `10.5` as a `float`.
3.  `printf("t.f = %f, t.i = %d\n", t.f, t.i);` then attempts to read this same memory location in two different ways:
    *   `t.f` is read as a `float`, so it correctly prints `10.5`.
    *   `t.i` is read as an `int`. Since the memory contains the binary pattern of `10.5` (a float), when this pattern is interpreted as an integer, it results in a large, seemingly arbitrary number. This is because the bit representation of floating-point numbers is very different from integers.

**3. Exam-Oriented Question:**
What is the size of the following union on a typical system where `sizeof(int)` is 4 bytes and `sizeof(char)` is 1 byte?

```c
union Example {
    int number;
    char letter[10];
    float value;
};
```

**Answer:**
The size of the union `Example` will be determined by its largest member.
*   `sizeof(int number)` is 4 bytes.
*   `sizeof(char letter[10])` is 10 bytes.
*   `sizeof(float value)` is 4 bytes.

The largest member is `letter`, which is 10 bytes. Therefore, the `union Example` will occupy **10 bytes** of memory. The compiler might add padding to ensure alignment requirements are met, but the minimum size is dictated by the largest member.

**4. Conceptual Question with Code:**
How can you safely access members of a union to avoid the issues demonstrated in question 2? Provide a code snippet illustrating your approach.

**Answer:**
You can safely access union members by using a "tag" or "discriminator" variable that keeps track of which member is currently active. This is often done by creating a structure that contains both the tag and the union.

**Code Snippet:**

```c
#include <stdio.h>

typedef enum {
    INT_TYPE,
    FLOAT_TYPE
} DataType;

typedef union {
    int i;
    float f;
} ValueUnion;

typedef struct {
    DataType type;     // The tag
    ValueUnion data;   // The union
} TaggedValue;

int main() {
    TaggedValue tv;

    // Store an integer
    tv.type = INT_TYPE;
    tv.data.i = 42;

    // Safely access the integer
    if (tv.type == INT_TYPE) {
        printf("Stored integer: %d\n", tv.data.i);
    } else {
        // This branch won't be taken for this assignment
        printf("Unexpected type.\n");
    }

    // Store a float
    tv.type = FLOAT_TYPE;
    tv.data.f = 99.9;

    // Safely access the float
    if (tv.type == FLOAT_TYPE) {
        printf("Stored float: %.1f\n", tv.data.f);
    } else {
        // This branch won't be taken for this assignment
        printf("Unexpected type.\n");
    }

    // Demonstrate potential issue if tag is ignored (for educational purpose only)
    tv.type = INT_TYPE; // Manually setting type to INT_TYPE
    tv.data.f = 123.45; // Storing a float anyway

    if (tv.type == INT_TYPE) {
        printf("Interpreting float as int (unsafe): %d\n", tv.data.i); // BAD PRACTICE
    }

    return 0;
}
```

**Explanation:**
In this example, `TaggedValue` is a structure. `tv.type` (the tag) tells us whether `tv.data` (the union) currently holds an `INT_TYPE` or a `FLOAT_TYPE`. Before accessing `tv.data.i` or `tv.data.f`, we check `tv.type`. This ensures we are always interpreting the union's memory correctly, preventing the "garbage value" problem. This approach enhances code clarity and safety, aligning with the goals of **CO3** in managing abstract data types effectively.
