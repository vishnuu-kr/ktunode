---
title: "Accessing array elements using pointers"
subject: "PROGRAMMING IN C"
module: "Module 4: Pointers "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e62"
status: "completed"
scrapedAt: "2026-05-20T16:35:37.845Z"
---
## Programming in C: Module 4 - Pointers

### Topic: Accessing Array Elements Using Pointers

Welcome, everyone, to Module 4 of our Programming in C course! We're diving deep into one of the most powerful, yet sometimes intimidating, features of C: **pointers**. Today, we'll focus on a specific, incredibly useful application of pointers: **accessing array elements using pointers**.

You've already mastered the basics of arrays – those contiguous blocks of memory that hold a collection of similar data types. We know how to declare them, initialize them, and access elements using the familiar square bracket notation: `arrayName[index]`. This is all well and good, and often the most straightforward way. However, C, true to its nature, offers us a more direct, low-level way to interact with memory, and that's where pointers come in. Understanding how pointers interact with arrays will not only unlock a deeper understanding of how C manages memory but will also open doors to more efficient and flexible programming techniques.

Think of an array like a row of houses on a street, each with a unique address. The array name is like the street name, and the index is like the house number. So, `myArray[5]` means "the 5th house on `myArray` street." Now, imagine you have a special tool, a pointer, that can directly hold the address of a specific house. With this tool, you can not only find that house but also get to the houses next to it very easily. This is precisely what pointers allow us to do with arrays.

This topic directly supports **CO4: Develop C programs using pointers for dynamic data handling.** While we're not quite at "dynamic data handling" yet in the sense of `malloc` and `free`, understanding pointers with arrays is the foundational step. It's like learning to ride a bicycle before attempting a cross-country tour. You'll also find connections to **CO2: Develop C programs using arrays, matrices, and strings**, as strings in C are, in essence, character arrays.

Let's get started!

---

### The Array-Pointer Connection: A Deeper Look

In C, when you declare an array, the array's name itself has a special property. It often behaves like a pointer to the **first element** of the array. This is a crucial concept.

Consider this declaration:

```c
int numbers[5]; // An array of 5 integers
```

When the compiler sets aside memory for `numbers`, it creates 5 contiguous memory locations. Let's say the address of the first element, `numbers[0]`, is `0x1000`. Then, `numbers[1]` would be at `0x1004` (assuming 4-byte integers), `numbers[2]` at `0x1008`, and so on.

The name `numbers`, in most contexts, evaluates to the address of `numbers[0]`. So, `numbers` is equivalent to `&numbers[0]`. This is a powerful convention that links arrays and pointers inextricably.

**Why is this important?** Because it allows us to use pointer arithmetic, a technique we'll explore extensively, to move through the array.

---

### Pointer Arithmetic: Navigating the Array

Pointer arithmetic is simply the process of adding or subtracting an integer from a pointer. When you perform arithmetic on a pointer, it doesn't just add or subtract bytes; it adds or subtracts multiples of the **size of the data type** the pointer points to. This is the magic that makes it work seamlessly with arrays.

Let's illustrate with our `numbers` array. If `ptr` is a pointer to an integer (`int *ptr;`), and we make it point to the first element of `numbers`:

```c
int numbers[5] = {10, 20, 30, 40, 50};
int *ptr;

ptr = numbers; // This is equivalent to ptr = &numbers[0];
```

Now, `ptr` holds the address `0x1000` (our hypothetical address for `numbers[0]`).

1.  **Incrementing the pointer (`ptr + 1`)**:
    If `ptr` points to `numbers[0]`, then `ptr + 1` will not point to `0x1000 + 1` byte. Instead, it will point to `0x1000 + sizeof(int)` bytes, which is `0x1000 + 4` bytes (assuming `int` is 4 bytes). This means `ptr + 1` will now point to `numbers[1]`.

2.  **Adding an offset (`ptr + i`)**:
    Similarly, `ptr + i` will point to the memory location `i` elements *after* the element `ptr` currently points to. So, `ptr + 2` would point to `numbers[2]`.

This behavior is precisely what allows us to access any element of the array using a pointer and an offset.

**This is a key takeaway:** Pointer arithmetic automatically scales by the size of the pointed-to data type. This is what makes it so powerful and prevents you from manually calculating memory addresses. Remember this, as it's a common point of confusion for beginners.

---

### Accessing Elements Using Pointer Arithmetic

Now that we understand pointer arithmetic, how do we actually *get* the value stored at a specific location using our pointer? We use the **dereference operator (`*`)**.

If `ptr` points to `numbers[0]`, then `*ptr` gives us the value at that address, which is `10`.

Let's see how we can access all elements of the array:

```c
#include <stdio.h>

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};
    int *ptr;
    int i;

    // Make ptr point to the first element of the array
    ptr = numbers; // Same as ptr = &numbers[0];

    printf("Accessing array elements using pointers:\n");

    // Loop through the array using pointer arithmetic
    for (i = 0; i < 5; i++) {
        // (ptr + i) gives the address of the i-th element
        // *(ptr + i) dereferences that address to get the value
        printf("Element at index %d: %d\n", i, *(ptr + i));
    }

    return 0;
}
```

**Explanation:**

*   `ptr = numbers;` sets our pointer `ptr` to the base address of the array.
*   Inside the loop, `(ptr + i)` calculates the address of the `i`-th element. For `i=0`, it's `ptr`; for `i=1`, it's `ptr + 1` (which is `ptr + sizeof(int)` bytes away); and so on.
*   `*(ptr + i)` then fetches the value stored at that calculated address.

This is where we see the direct connection to **CO2** (arrays) and **CO4** (pointers). We are using pointers to traverse and access array elements.

---

### Pointer Notation vs. Array Notation

You'll notice that `*(ptr + i)` achieves the same result as `numbers[i]`. In fact, C often treats these notations almost interchangeably. The array subscript notation `arrayName[index]` is actually translated by the C compiler into a pointer expression: `*(arrayName + index)`.

So, the expression `numbers[i]` is, internally, the same as `*(numbers + i)`. This confirms our earlier point that array names often decay into pointers to their first element.

This is a very elegant feature of C. It allows us to conceptualize arrays as blocks of memory that we can step through using pointers.

Let's look at another way to iterate using pointers that emphasizes the pointer's movement:

```c
#include <stdio.h>

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};
    int *ptr;
    int i;

    // Make ptr point to the first element
    ptr = numbers;

    printf("\nAccessing array elements by advancing the pointer:\n");

    // Loop while the pointer is within the array bounds
    // A common way is to loop exactly 'size' times
    for (i = 0; i < 5; i++) {
        // Dereference the current pointer to get the value
        printf("Element %d: %d\n", i, *ptr);
        // Move the pointer to the next element
        ptr++; // This is equivalent to ptr = ptr + 1;
    }

    return 0;
}
```

**Explanation:**

*   Here, we initialize `ptr` to `numbers`.
*   Inside the loop, `*ptr` gives us the value at the current address pointed to by `ptr`.
*   `ptr++` is the key here. It increments the pointer `ptr` to point to the *next* integer in memory. Since `ptr` is an `int *`, `ptr++` moves it `sizeof(int)` bytes forward.

This second method is often seen as more "pointer-idiomatic." It really emphasizes the pointer's journey through the array. Many experienced C programmers prefer this style when dealing with arrays, as it clearly shows the manipulation of memory addresses.

**Which notation to use?**

*   `numbers[i]` is generally more readable for direct access when the index is known and static.
*   `*(ptr + i)` is useful when you need to calculate the address based on a starting pointer and an offset, perhaps when the array name itself isn't directly available or when working with dynamically allocated memory.
*   `ptr++` and `*ptr` is common in loops where you process elements sequentially and don't need to refer to them by index explicitly within the loop body.

For exam purposes, understanding both `*(arrayName + index)` and how `ptr++` works with `*ptr` is crucial. They are different ways to achieve the same goal.

---

### Strings and Pointers

As mentioned earlier, strings in C are just null-terminated arrays of characters. This means everything we've learned about accessing array elements with pointers applies directly to strings.

Let's take an example:

```c
#include <stdio.h>

int main() {
    char message[] = "Hello, C!"; // A string is a char array
    char *ptr;
    int i = 0;

    // ptr points to the first character of the string
    ptr = message;

    printf("Accessing string characters using pointers:\n");

    // Loop until we hit the null terminator ('\0')
    while (*ptr != '\0') {
        // Print the character at the current pointer location
        printf("%c", *ptr);

        // Move to the next character
        ptr++;
    }
    printf("\n"); // Newline for formatting

    // Let's re-initialize ptr to demonstrate another way
    ptr = message;
    printf("Accessing string characters using ptr + i:\n");
    i = 0;
    while (ptr[i] != '\0') { // Using array-like notation with pointer
        printf("%c", ptr[i]);
        i++;
    }
    printf("\n");

    // And one more: using pointer arithmetic with the original array name
    printf("Accessing string characters using *(message + i):\n");
    for (i = 0; message[i] != '\0'; i++) {
        printf("%c", *(message + i));
    }
    printf("\n");

    return 0;
}
```

**Output of the above program:**

```
Accessing string characters using pointers:
Hello, C!
Accessing string characters using ptr + i:
Hello, C!
Accessing string characters using *(message + i):
Hello, C!
```

In this example:

*   `char message[] = "Hello, C!";` declares and initializes a character array. The compiler automatically adds the null terminator `\0` at the end.
*   `ptr = message;` makes `ptr` point to the first character, 'H'.
*   The `while (*ptr != '\0')` loop continues as long as the character pointed to by `ptr` is not the null terminator.
*   `*ptr` dereferences the pointer to get the current character.
*   `ptr++` moves the pointer to the next character in memory.

This demonstrates how versatile pointers are. They aren't just for integers or floats; they can handle any data type, including characters, making them fundamental for string manipulation in C. This is a direct application of **CO2** and **CO4**.

---

### Common Pitfalls and Exam Tips

When working with pointers and arrays, there are a few common traps to watch out for:

1.  **Array Index Out of Bounds:**
    Just like with regular array access, if you use pointer arithmetic to access memory beyond the allocated size of the array, you're stepping into undefined territory. This can lead to crashes or corrupted data.
    *   **Example Pitfall:**
        ```c
        int arr[3] = {1, 2, 3};
        int *p = arr;
        printf("%d\n", *(p + 3)); // Problem! Accessing beyond arr[2]
        ```
    *   **Tip:** Always ensure your pointer operations stay within the bounds of the array. Often, you'll need to know the size of the array. A loop condition like `i < array_size` or checking against a pointer to the element *after* the last one is crucial.

2.  **Uninitialized Pointers:**
    A pointer that hasn't been assigned a valid memory address (or `NULL`) is dangerous. Dereferencing it can cause a segmentation fault or other unpredictable behavior.
    *   **Example Pitfall:**
        ```c
        int *p_bad; // p_bad is uninitialized
        // *p_bad = 10; // DANGER!
        ```
    *   **Tip:** Always initialize pointers, either to `NULL` or to a valid memory address (like the start of an array or the address of a variable).

3.  **Confusing Pointer Value vs. Value at Pointer:**
    This is perhaps the most fundamental misunderstanding. `ptr` holds an *address*, while `*ptr` gives you the *value* stored at that address.
    *   **Tip:** Keep asking yourself: "Am I talking about the address itself, or what's inside that memory location?"

4.  **Forgetting `sizeof()`:**
    While pointer arithmetic is automatic, it's vital to remember *why* it works. It's because the compiler knows the `sizeof(data_type)` when it sees a `data_type *`.
    *   **Tip:** If you're ever unsure about memory layouts or pointer arithmetic, mentally (or physically) trace the addresses and think about how `sizeof()` is implicitly used.

**Exam Focus:**

*   Be ready to write code that uses pointer arithmetic to access and print array elements.
*   Understand the equivalence between `array[i]` and `*(array + i)`.
*   Explain how `ptr++` works for different pointer types (`char *`, `int *`, `float *`, etc.).
*   Be able to demonstrate string traversal using pointers.
*   Questions often revolve around predicting the output of code involving pointer arithmetic on arrays, especially with mixed notations.

---

### Connecting to Course Outcomes

Let's explicitly tie this topic back to our Course Outcomes:

*   **CO1: Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements.**
    By understanding how to access array elements with pointers, you're building a more fundamental understanding of memory. This knowledge can inform how you structure loops (`for`, `while`) and conditional statements when dealing with sequences of data, even if you're not directly using pointers in every single problem.

*   **CO2: Develop C programs using arrays, matrices, and strings.**
    This is where the direct impact is felt. We've seen how pointers provide an alternative, often more efficient, way to traverse and manipulate arrays and strings. Understanding this linkage is crucial for advanced array/string operations and for working with libraries that heavily rely on pointers.

*   **CO3: Utilize functions to find solution to the computational problems by dividing it into a number of modules and abstract data types.**
    While not directly about functions yet, passing arrays to functions in C often involves passing a pointer to the first element. Understanding how arrays are represented by pointers is essential for writing functions that can process arrays correctly.

*   **CO4: Develop C programs using pointers for dynamic data handling.**
    This is the primary outcome this topic supports. Accessing array elements with pointers is the bedrock upon which dynamic memory allocation (`malloc`, `calloc`, `realloc`, `free`) is built. When you allocate memory dynamically, you get back a pointer, and you then use pointer arithmetic to treat that block of memory as an array. Without this foundation, dynamic data handling would be impossible.

*   **CO5: Use files in C to permanently store and manipulate data.**
    File I/O operations often involve reading data into arrays or writing array contents to files. Sometimes, this is done using pointers and `fread`/`fwrite` functions, which operate on blocks of memory pointed to by pointers. So, the skills learned here indirectly support file operations.

---

### Review and Summary

So, to recap our journey through accessing array elements with pointers:

*   An array name, in most contexts, acts as a pointer to its first element.
*   Pointer arithmetic automatically scales by the `sizeof()` the data type the pointer points to, allowing us to move through memory linearly.
*   `*(ptr + i)` allows us to access the `i`-th element relative to the address `ptr` points to.
*   `ptr++` advances the pointer to the next element of the specified data type.
*   Strings are character arrays and can be manipulated just like any other array using pointers.
*   This understanding is fundamental for dynamic memory allocation and efficient data manipulation in C.

Remember the equivalence: `array[index]` is the same as `*(array + index)`. This is a core concept.

You are now equipped with the essential knowledge of how pointers interact with arrays. This is a significant step in mastering C programming. Keep practicing these concepts, and don't hesitate to experiment!

---

### Sample Questions and Answers

**Q1. Conceptual Question:** Explain the relationship between an array name and a pointer in C.

**Answer:** In C, when an array is declared, its name, in most expressions, decays into a pointer to its first element. For an array `arr`, `arr` is equivalent to `&arr[0]`. This behavior is fundamental to how C handles arrays and allows for pointer arithmetic to be seamlessly applied to array traversal. For example, `*(arr + i)` is equivalent to `arr[i]`.

**Q2. Exam-Oriented Question:** What will be the output of the following C code snippet?

```c
#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40};
    int *ptr = arr; // ptr points to arr[0]

    printf("%d %d\n", *ptr, *(ptr + 2));

    ptr++; // ptr now points to arr[1]
    printf("%d %d\n", *ptr, *(ptr + 1));

    return 0;
}
```

**Answer:**

```
10 30
20 30
```

**Reasoning:**

*   **Line 1:** `int *ptr = arr;` makes `ptr` point to the first element, `arr[0]` (value 10).
*   **Line 1 (printf):**
    *   `*ptr` dereferences `ptr`, giving the value at `arr[0]`, which is `10`.
    *   `*(ptr + 2)` calculates the address of `arr[0] + 2 * sizeof(int)`, which points to `arr[2]`. Dereferencing it gives the value `30`.
    *   So, the first output line is `10 30`.
*   **Line 2:** `ptr++;` increments `ptr`. Since `ptr` is an `int *`, it moves to point to the next integer, which is `arr[1]` (value 20).
*   **Line 2 (printf):**
    *   `*ptr` dereferences the *current* `ptr` (which points to `arr[1]`), giving the value `20`.
    *   `*(ptr + 1)` calculates the address of `arr[1] + 1 * sizeof(int)`, which points to `arr[2]`. Dereferencing it gives the value `30`.
    *   So, the second output line is `20 30`.

**Q3. Conceptual Question:** How does pointer arithmetic differ from regular integer arithmetic? Provide an example.

**Answer:** Pointer arithmetic differs because it operates based on the size of the data type the pointer points to, not on bytes directly. When you add an integer `n` to a pointer `p` of type `T *`, the resulting address is `p + n * sizeof(T)`.

**Example:**
If `int *ptr` points to an address `0x1000` (assuming `sizeof(int)` is 4 bytes):
*   `ptr + 1` will result in the address `0x1000 + 1 * 4 = 0x1004`.
*   `ptr + 2` will result in the address `0x1000 + 2 * 4 = 0x1008`.

If `char *c_ptr` points to the same address `0x1000` (assuming `sizeof(char)` is 1 byte):
*   `c_ptr + 1` will result in the address `0x1000 + 1 * 1 = 0x1001`.
*   `c_ptr + 2` will result in the address `0x1000 + 2 * 1 = 0x1002`.

This automatic scaling is what makes pointer arithmetic suitable for navigating arrays.

**Q4. Practical Question:** Write a C program that declares a string, then uses a pointer to iterate through it and print each character on a new line.

**Answer:**

```c
#include <stdio.h>

int main() {
    char myString[] = "Programming";
    char *strPtr;

    strPtr = myString; // strPtr points to the first character ('P')

    printf("Characters in the string:\n");
    while (*strPtr != '\0') {
        printf("%c\n", *strPtr); // Print the character pointed to by strPtr
        strPtr++;                // Move strPtr to the next character
    }

    return 0;
}
