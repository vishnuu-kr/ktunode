---
title: "Reading and displaying strings"
subject: "PROGRAMMING IN C"
module: "Module 2: Arrays "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e4b"
status: "completed"
scrapedAt: "2026-05-20T16:35:22.745Z"
---
Alright class, welcome back to our exciting journey into the world of Programming in C! Today, we're diving headfirst into **Module 2: Arrays**, and our specific focus for this session is **Reading and Displaying Strings**.

Now, you might be thinking, "Strings? Aren't those just words or sentences?" And yes, you're absolutely right! But in C, the way we handle strings is a bit unique, and it ties directly into what we've learned about arrays. In fact, understanding strings is a crucial step towards mastering **Course Outcome 2 (CO2)**: "Develop C programs using arrays, matrices, and strings." This is where we start applying our array knowledge to a very common data type. We'll also be building on **Course Outcome 1 (CO1)**, as we'll be taking input (reading) and producing output (displaying), which are fundamental to any program's interaction with the user.

So, let's get started!

### Understanding Strings in C: More Than Just Characters

Before we talk about reading and displaying, we need to understand *what* a string really is in C. Unlike some other programming languages where strings are built-in types, in C, a string is essentially an **array of characters**.

Think about it like this: if you have the name "Alice", that's a sequence of characters: 'A', 'l', 'i', 'c', 'e'. In C, we represent this as an array of characters. But there's a crucial detail that distinguishes a regular character array from a true C-style string. Every C string is terminated by a special character called the **null terminator**, represented by `\0`.

So, the string "Alice" is stored in memory as:
`'A' | 'l' | 'i' | 'c' | 'e' | '\0'`

This `\0` is like a secret signal to the C compiler and standard library functions. It tells them where the string ends. Without it, a function reading the string wouldn't know when to stop, potentially reading garbage data from memory, which can lead to all sorts of bugs. This is a **critical concept** to remember!

#### Why the Null Terminator?

Why go through this trouble? The null terminator allows C strings to have variable lengths. We don't need to declare a fixed-size character array for a string of exactly, say, 5 characters. We can declare a character array of, say, 100 characters, and store a 5-character string "Alice" in it, followed by `\0`. The `\0` tells functions like `printf` and `scanf` to stop printing or reading after 'e', even though there are still 94 more spaces available in the array. This flexibility is a hallmark of C programming.

You'll find this concept thoroughly explained in **Byron S. Gottfried's "Programming with C"** and **Kernighan and Ritchie's "The C Programming Language"**, both of which emphasize C's low-level, memory-efficient approach.

### Reading Strings: Getting Input from the User

Now that we know what a string is in C, let's see how we can get a string from the user. We have a couple of primary ways to do this using standard input functions.

#### 1. `scanf()` for Strings (with a Catch!)

You're already familiar with `scanf()` for reading numbers. You can also use it to read strings. The format specifier for a string is `%s`.

Let's say we have a character array:
```c
char name[50]; // Declare an array to hold up to 49 characters + '\0'
```

And we try to read input like this:
```c
printf("Enter your name: ");
scanf("%s", name); // Read the string into the 'name' array
```

**Here's the catch with `scanf("%s", ...)`:** it reads input until it encounters whitespace (a space, tab, or newline character). This means if you enter "Alice Wonderland", `scanf("%s", name)` will only store "Alice" into the `name` array, and "Wonderland" will be left in the input buffer for the next read operation.

This is often not what we want when reading a full name or a phrase. So, while `scanf("%s", ...)` is simple, it has this limitation of stopping at whitespace.

**Important Note on `scanf()` and Arrays:** When you use `scanf("%s", name)`, you pass the array name `name`. This is perfectly fine because the name of an array, when used in an expression like this, evaluates to the memory address of its first element. `scanf` needs this address to know where to start storing the characters. You **do not** use the `&` operator with array names when passing them to `scanf("%s", ...)`. Remember this!

#### 2. `fgets()`: The Safer and More Versatile Choice

For reading strings that might contain spaces, or just for a generally safer approach, `fgets()` is the preferred function. It's part of the `<stdio.h>` library, just like `scanf()`.

The `fgets()` function has three arguments:
`fgets(char *str, int n, FILE *stream);`

*   `char *str`: This is a pointer to the character array where the string will be stored.
*   `int n`: This is the maximum number of characters to read, **including** the null terminator. `fgets` will read at most `n-1` characters from the input stream and append the null terminator. This is a crucial safety feature to prevent buffer overflows.
*   `FILE *stream`: This specifies the input source. For standard keyboard input, we use `stdin`.

Let's see an example:
```c
char fullName[50];
printf("Enter your full name: ");
fgets(fullName, sizeof(fullName), stdin);
```

**What makes `fgets()` special?**
1.  **Reads spaces:** It reads characters until it encounters the specified number of characters or a newline character (`\n`).
2.  **Includes the newline:** If `fgets` reads a newline character and there's space for it in the buffer, it **includes the newline character** (`\n`) in the string before adding the null terminator (`\0`). This is a key difference from `scanf("%s", ...)`.

So, if you enter "Alice Wonderland" and press Enter, `fgets` might store:
`'A' | 'l' | 'i' | 'c' | 'e' | ' ' | 'W' | 'o' | 'n' | 'd' | 'e' | 'r' | 'l' | 'a' | 'n' | 'd' | '\n' | '\0'`

This trailing newline might be something you need to handle later, perhaps by removing it if it's not desired for further processing. We'll touch on that briefly.

**Why `sizeof(fullName)`?**
Using `sizeof(fullName)` as the second argument to `fgets` is a common and good practice. It ensures that you are telling `fgets` the exact size of your buffer, allowing it to read a maximum of `sizeof(fullName) - 1` characters, leaving room for the null terminator and preventing buffer overflows. This aligns with the principles of robust programming discussed in books like **Jeri R. Hanly and Elliot B. Koffman's "Problem Solving and Program Design in C"**.

#### Handling the Trailing Newline from `fgets()`

Often, you don't want that newline character at the end of your string. Here's a common way to remove it:

```c
#include <string.h> // For strlen()

// ... after fgets ...

// Find the length of the string
int len = strlen(fullName);

// Check if the last character is a newline and if the string is not empty
if (len > 0 && fullName[len - 1] == '\n') {
    fullName[len - 1] = '\0'; // Replace newline with null terminator
}
```
This snippet uses `strlen()` from `<string.h>` to find the length and then checks if the last character is indeed a newline. If it is, it overwrites it with the null terminator. This is a good example of manipulating strings as arrays of characters.

### Displaying Strings: Showing Output to the User

Displaying strings is generally straightforward in C, primarily using the `printf()` function.

#### 1. `printf()` with `%s`

The `%s` format specifier in `printf()` is used to print a null-terminated string.

```c
char message[] = "Hello, World!"; // A string literal, automatically null-terminated
printf("%s\n", message);

char anotherMessage[50] = {'C', ' ', 'i', 's', ' ', 'f', 'u', 'n', '\0'};
printf("%s\n", anotherMessage);
```

When `printf` encounters `%s`, it starts printing characters from the provided memory address until it hits the `\0` terminator. This is where that null terminator is so essential!

**Example Scenario:** Imagine you're building a simple address book program. You've stored a person's name in a character array. When you want to display their entry, you'd use `printf` with `%s` to show their name. This directly relates to **CO2** as we're processing and displaying string data stored in an array.

#### 2. `puts()`: A Simpler Alternative for Displaying Strings

`puts()` is another function from `<stdio.h>` specifically designed for printing strings. Its advantage is simplicity:

`puts(const char *str);`

It takes a single argument: a pointer to the string you want to display.

```c
char greeting[] = "Welcome to C programming!";
puts(greeting);
```

**Key difference between `printf("%s", ...)` and `puts(...)`:**
`puts()` automatically appends a newline character (`\n`) at the end of the string it prints. `printf("%s", ...)` does not, unless you explicitly include `\n` in the format string (e.g., `printf("%s\n", ...)`) or within the string itself.

So, `puts(greeting);` would output:
`Welcome to C programming!`
(followed by a newline)

Whereas `printf("%s", greeting);` would output:
`Welcome to C programming!`
(with no automatic newline)

Choosing between `printf("%s", ...)` and `puts()` depends on whether you need that automatic newline or more control over the output format.

### Connecting to Course Outcomes and Learning

Let's quickly recap how this topic directly supports our Course Outcomes:

*   **CO1 (Infer computational problem and develop C programs using basic constructs):** Reading and displaying strings are fundamental I/O operations. Understanding how `scanf`, `fgets`, `printf`, and `puts` work allows you to take user input (like a name, address, or message) and present results or information back to the user. This is the very essence of program interaction.
*   **CO2 (Develop C programs using arrays, matrices, and strings):** This entire topic is *about* strings, which are character arrays. We've learned how to declare character arrays, how they are terminated by `\0`, and how to use standard functions to read data into them and print data from them. This is a direct application of array concepts to a vital data type.
*   **CO3 (Utilize functions to find solutions):** We've seen how `scanf`, `fgets`, `printf`, `puts`, and `strlen` are pre-built functions that solve specific problems related to string handling. This highlights the power of modularity and using existing tools, a core aspect of CO3.

**Exam Focus:**
When you see questions about strings in exams, they often test your understanding of:
1.  The null terminator (`\0`).
2.  The difference between `scanf("%s", ...)` and `fgets()`, especially regarding whitespace and buffer overflow prevention.
3.  How `fgets()` includes the newline and how to remove it.
4.  The difference between `printf("%s", ...)` and `puts()`.
5.  Declaring character arrays of appropriate sizes.

**Common Pitfalls:**
*   Forgetting the null terminator when manually building strings.
*   Using `scanf("%s", ...)` when spaces are expected in the input.
*   Not allocating enough space for the string in the character array, leading to buffer overflows.
*   Forgetting to remove the newline character from `fgets()` when it's not desired.
*   Using `&` with array names when passing to `scanf("%s", ...)`. This is a classic mistake for beginners!

Remember, C is about control and efficiency. Understanding how strings are managed at this fundamental level gives you a deep insight into how text processing works under the hood. This knowledge, as found in classics like **Kernighan and Ritchie**, is invaluable.

So, to sum up, strings in C are null-terminated character arrays. We use functions like `scanf` (with caution for spaces) and `fgets` (for safer, space-inclusive reading) to get string input, and `printf` or `puts` to display them. Always be mindful of the null terminator and buffer sizes!

---

### Sample Questions and Answers

Let's test your understanding with a few questions.

**Question 1 (Conceptual):** What is a C-style string, and what character signifies its end?
**Answer:** A C-style string is an array of characters terminated by a special character called the null terminator (`\0`). The null terminator is crucial because it tells C functions where the string ends. Without it, functions reading the string might read beyond the allocated memory.

**Question 2 (Practical - `scanf` vs `fgets`):** Consider the following code snippet:
```c
#include <stdio.h>

int main() {
    char city[20];
    printf("Enter a city name: ");
    scanf("%s", city);
    printf("You entered: %s\n", city);
    return 0;
}
```
If the user inputs "New York", what will be displayed as "You entered:"? Explain why.

**Answer:**
The output will be: `You entered: New`.

**Reasoning:**
The `scanf("%s", city)` function reads characters from the input until it encounters whitespace (like the space between "New" and "York"). It stores "New" into the `city` array and stops. The space and "York" remain in the input buffer. Therefore, only "New" is displayed. This demonstrates the limitation of `scanf("%s", ...)` when dealing with strings containing spaces.

**Question 3 (Practical - `fgets` and newline):** Write a C code snippet to read a full sentence from the user using `fgets` and then print it without the potential trailing newline character.

**Answer:**
```c
#include <stdio.h>
#include <string.h> // Required for strlen()

int main() {
    char sentence[100]; // Buffer to hold the sentence

    printf("Please enter a sentence: ");
    
    // Read the sentence using fgets, safely into the buffer
    // sizeof(sentence) ensures we don't overflow the buffer
    if (fgets(sentence, sizeof(sentence), stdin) != NULL) {
        
        // Find the length of the string read
        int len = strlen(sentence);
        
        // Check if the last character is a newline and if the string is not empty
        if (len > 0 && sentence[len - 1] == '\n') {
            // Replace the newline character with a null terminator
            sentence[len - 1] = '\0';
        }
        
        // Print the processed sentence
        printf("You entered: %s\n", sentence);
        
    } else {
        printf("Error reading input.\n");
    }
    
    return 0;
}
```
**Reasoning:**
1.  `fgets(sentence, sizeof(sentence), stdin)` reads up to `sizeof(sentence) - 1` characters or until a newline is encountered, storing it in `sentence`. It includes the newline if there's space.
2.  `strlen(sentence)` calculates the length of the string actually stored.
3.  The `if (len > 0 && sentence[len - 1] == '\n')` condition checks if the string is not empty and if its last character is indeed a newline.
4.  If the condition is true, `sentence[len - 1] = '\0';` replaces that newline with a null terminator, effectively removing it from the string's logical end.
5.  Finally, `printf("%s\n", sentence);` prints the string, which now correctly does not have an extra newline appended by `fgets`.

This covers our fundamental topic of reading and displaying strings. Keep practicing these functions, and you'll become very comfortable with string manipulation in C!
