---
title: "Reading and displaying strings"
subject: "PROGRAMMING IN C"
module: "Module 2: Arrays "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da36c"
status: "completed"
scrapedAt: "2026-05-23T17:42:07.635Z"
---
# PROGRAMMING IN C: MODULE 2 - ARRAYS

## Topic: Reading and Displaying Strings

Welcome, everyone! Today, we're diving into a fundamental aspect of C programming: **handling strings**. Now, you might be thinking, "Strings? Aren't we talking about arrays?" And you're absolutely right! In C, strings are intimately related to arrays. In fact, a string in C is simply a **one-dimensional array of characters**, terminated by a special character: the null terminator, `\0`. Understanding how to read and display these character arrays is crucial for building interactive and user-friendly programs. This topic directly supports our **Course Outcome 2 (CO2)**: "Develop C programs using arrays, matrices, and strings," and also touches upon **Course Outcome 1 (CO1)** as we'll be taking input from the user, which involves basic input/output constructs.

Let's get started by exploring how C represents and manipulates these sequences of characters we call strings.

### 1. Strings as Character Arrays: The Foundation

Imagine you want to store the name "Alice" in your program. How do we represent this as an array of characters? We create a character array, like so:

```c
char name[6];
```

Here, `name` is an array that can hold 6 characters. Why 6 for "Alice"? Let's break it down:

*   'A'
*   'l'
*   'i'
*   'c'
*   'e'

That's five characters. But remember our special rule: **every C string must be terminated by a null character, `\0`**. This null terminator is our program's way of knowing where the string ends. Without it, if we tried to print "Alice" using a string function, it would keep reading characters beyond 'e' until it stumbled upon a `\0` somewhere else in memory, potentially leading to garbage output or even a program crash! So, our `name` array actually stores:

`'A'`, `'l'`, `'i'`, `'c'`, `'e'`, `'\0'`

This is why we needed an array of size 6 for a 5-character string. The general rule of thumb is: **if your string has `n` characters, you need a character array of at least `n + 1` size to accommodate the null terminator.**

As Byron Gottfried in his "Programming with C" (4th Edition) emphasizes, this null termination is a convention that allows C to handle strings dynamically, knowing where a string begins and ends.

### 2. Reading Strings: Getting Input from the User

Now that we understand what strings are, how do we get them into our programs from the user? We have a couple of primary ways to do this, each with its own nuances.

#### 2.1. Using `scanf()`

The `scanf()` function, which you're already familiar with for reading numbers, can also be used to read strings. We use the `%s` format specifier for this.

Let's say we want to read a person's name:

```c
#include <stdio.h>

int main() {
    char name[50]; // Declare a character array to store the name

    printf("Enter your name: ");
    scanf("%s", name); // Read the string into the 'name' array

    printf("Hello, %s!\n", name); // Display the name

    return 0;
}
```

**What's happening here?**

1.  We declare `name` as a character array of size 50. This gives us plenty of room for most names.
2.  `printf("Enter your name: ");` prompts the user for input.
3.  `scanf("%s", name);` is where the magic happens. The `%s` tells `scanf` to read characters from the input stream until it encounters whitespace (like a space, tab, or newline). It then stores these characters into the `name` array and automatically appends the null terminator `\0` for us.

**Important Note about `scanf("%s")`:** This is a common point of confusion and a potential pitfall! `scanf("%s", name)` will **stop reading at the first whitespace character.** This means if you enter "John Doe", `scanf` will only read "John" into the `name` array. The " Doe" part will be left in the input buffer, which can cause problems for subsequent input operations.

**Think of it like this:** If you're asking someone for their first name, and they give you their full name, `scanf("%s")` is like only listening to the first word they say.

To mitigate buffer overflow issues (where the user enters more characters than your array can hold), it's good practice to specify a maximum field width with `%s`:

```c
scanf("%49s", name); // Read at most 49 characters to leave space for '\0'
```

This tells `scanf` to read at most 49 characters, ensuring we don't overflow our `name` array of size 50. This is a crucial defensive programming technique.

#### 2.2. Using `fgets()`: The Safer and Recommended Way

Because of the limitations of `scanf("%s")` with spaces, C provides a much more robust function for reading strings: `fgets()`. This function is part of the `<stdio.h>` library and is generally preferred for reading strings, especially when you expect input that might contain spaces.

Let's see how `fgets()` works:

```c
#include <stdio.h>

int main() {
    char sentence[100]; // Declare a character array

    printf("Enter a sentence: ");
    fgets(sentence, sizeof(sentence), stdin); // Read the sentence

    printf("You entered: %s\n", sentence); // Display the sentence

    return 0;
}
```

**What's different here?**

1.  `fgets(sentence, sizeof(sentence), stdin);`
    *   The first argument (`sentence`) is the character array where the input will be stored.
    *   The second argument (`sizeof(sentence)`) is the maximum number of characters to read, **including the null terminator**. `fgets` is designed to prevent buffer overflows by respecting this limit.
    *   The third argument (`stdin`) specifies the input stream, which is typically the standard input (your keyboard).

**Key Feature of `fgets()`:** Unlike `scanf("%s")`, `fgets()` **reads until it encounters a newline character (`\n`) or reaches the specified maximum number of characters (minus one for the null terminator).** Crucially, it **includes the newline character in the buffer** if it reads it, and then appends the null terminator `\0`.

**Potential Quirk with `fgets()`:** If the user presses Enter after typing their input, `fgets()` will store that newline character (`\n`) just before the null terminator (`\0`). This can sometimes be unexpected. For example, if you print a string read by `fgets`, you might notice an extra blank line because the stored newline character causes the output cursor to move to the next line, and then `printf` itself adds another newline.

Consider this:
If you type "Hello!" and press Enter, `fgets` might store `{'H', 'e', 'l', 'l', 'o', '!', '\n', '\0'}`.
When you print `%s`, `printf` prints "Hello!" and then encounters `\n`, moving to the next line. Then `printf`'s own `\n` moves it to the line *after* that.

To handle this, you might want to remove the trailing newline if it exists. A common way is to find the newline and replace it with a null terminator.

```c
#include <stdio.h>
#include <string.h> // For strlen

int main() {
    char sentence[100];
    printf("Enter a sentence: ");
    fgets(sentence, sizeof(sentence), stdin);

    // Remove the trailing newline, if present
    int len = strlen(sentence);
    if (len > 0 && sentence[len - 1] == '\n') {
        sentence[len - 1] = '\0';
    }

    printf("You entered: %s\n", sentence);
    return 0;
}
```

Herbert Schildt's "C: The Complete Reference" (4th Edition) highlights `fgets` as the preferred function for string input due to its safety features and ability to read spaces, which `scanf("%s")` struggles with.

### 3. Displaying Strings: Showing Output to the User

Displaying strings is usually more straightforward. The `printf()` function is our primary tool here, using the `%s` format specifier.

```c
#include <stdio.h>

int main() {
    char greeting[] = "Welcome to C Programming!"; // String literal initialization

    printf("Message: %s\n", greeting);

    return 0;
}
```

Here, we're initializing a character array `greeting` directly with a string literal `"Welcome to C Programming!"`. The compiler automatically calculates the size of the array and adds the null terminator `\0` at the end.

When `printf("%s", greeting);` is executed, `printf` starts printing characters from the `greeting` array, one by one, until it encounters the null terminator `\0`. It then stops printing. This is why the null terminator is so vital.

**What if you have an array that isn't initialized as a string literal, but you want to treat it as one?**

```c
#include <stdio.h>

int main() {
    char my_chars[6] = {'H', 'e', 'l', 'l', 'o', '\0'};

    printf("My string is: %s\n", my_chars);

    return 0;
}
```

This works perfectly because we've explicitly placed the `\0` at the end of our manually defined character array.

**Common Pitfall:** If you forget the `\0`, you'll run into trouble.

```c
#include <stdio.h>

int main() {
    char no_null[5] = {'W', 'o', 'r', 'l', 'd'}; // MISSING '\0'

    printf("Trying to print: %s\n", no_null); // POTENTIAL PROBLEM!

    return 0;
}
```

In this scenario, `printf` will likely print "World" and then continue printing whatever characters happen to be in memory after `no_null` until it finds a `\0`. This is undefined behavior and can lead to strange output or crashes.

Yashavant Kanetkar’s "Let Us C" often uses practical examples to illustrate these points, emphasizing the importance of memory management and the role of the null terminator in string operations.

### 4. String Initialization Methods

Let's quickly recap how we can initialize strings (character arrays):

1.  **Using String Literals:** This is the most common and convenient way. The compiler automatically adds the null terminator.

    ```c
    char message[] = "Hello"; // Array size is automatically 6 ('H','e','l','l','o','\0')
    char another_message[10] = "World"; // Array size is 10, 'W','o','r','l','d','\0' followed by garbage/zeros
    ```

2.  **Initializing Character by Character:** You explicitly assign each character, including the null terminator.

    ```c
    char word[4] = {'C', '+', '+', '\0'}; // Array size is 4
    ```

3.  **Using `strcpy()` (for later, but good to know):** This function from `<string.h>` copies one string to another.

    ```c
    #include <string.h>
    char str1[20];
    char str2[] = "Programming";
    strcpy(str1, str2); // Copies "Programming" into str1
    ```
    (We'll cover `strcpy` and other string manipulation functions in more detail later, but it's a way to get strings into arrays too.)

### 5. Connecting to Course Outcomes

*   **CO1 (Infer a computational problem and develop C programs from them using basic constructs):** Reading and displaying strings involves using `printf` for output and `scanf` or `fgets` for input, which are fundamental C constructs. We're taking user input (a common computational problem) and displaying processed information.
*   **CO2 (Develop C programs using arrays, matrices, and strings):** This entire topic is dedicated to strings, which are a special type of character array. We've seen how to declare, initialize, read into, and print from these arrays. This directly addresses the "strings" part of CO2.
*   **CO3 (Utilize functions to find solution...):** We've used standard library functions like `printf`, `scanf`, and `fgets`. Understanding these functions is key to using C effectively. Later, we'll see how functions like `strlen`, `strcpy`, `strcat` help us manipulate strings.
*   **CO4 & CO5:** While not the primary focus, these operations lay the groundwork for dynamic memory handling (pointers) and file I/O, as strings are often stored in files and manipulated using pointers.

### Summary and Key Takeaways

*   **Strings in C are null-terminated character arrays.** The `\0` character signals the end of the string.
*   When declaring a character array for a string of length `n`, always allocate at least `n + 1` space.
*   `scanf("%s", array_name)` reads a string up to the first whitespace. It's prone to buffer overflows and doesn't handle spaces well.
*   `fgets(array_name, size, stream)` is the preferred, safer way to read strings. It reads until a newline or the specified size is reached, includes the newline if read, and prevents buffer overflows.
*   `printf("%s", array_name)` is used to display strings. It prints characters until it encounters the `\0`.
*   **Always be mindful of the null terminator!** It's the backbone of string handling in C.

This understanding of reading and displaying strings is a stepping stone to much more powerful string manipulation techniques you'll learn soon. Keep practicing, and don't hesitate to experiment!

---

## Sample Questions and Answers

**Q1. What is the significance of the null terminator (`\0`) in C strings? Explain with an example.**

**Answer:**
The null terminator (`\0`) is a special character that marks the end of a string in C. It's crucial because C functions that process strings, like `printf("%s", ...)` or `strlen()`, rely on this terminator to know where the string actually ends. Without it, these functions would continue reading beyond the intended string, leading to incorrect results or crashes.

**Example:**
Consider a character array `char my_string[5] = {'H', 'i', '\0', 'X', 'Y'};`.
When you use `printf("%s", my_string);`, it will print "Hi" and then stop because it encounters `\0`. It will not print 'X' or 'Y'. If `my_string` was declared as `char my_string[5] = {'H', 'i'};` (without the `\0`), `printf("%s", my_string);` would print "Hi" and then whatever characters happen to be stored at memory locations after `'i'` until a `\0` is found, leading to undefined behavior.

**Q2. Explain the difference between `scanf("%s", str)` and `fgets(str, size, stdin)` for reading strings. Which one is generally preferred and why?**

**Answer:**
The primary differences lie in their behavior regarding whitespace and buffer overflow prevention:

*   **`scanf("%s", str)`:**
    *   **Whitespace:** Stops reading input at the first whitespace character (space, tab, newline).
    *   **Buffer Overflow:** It does not inherently prevent buffer overflows. If the user enters more characters than the array can hold, it will write past the array's bounds, corrupting memory.
    *   **Null Terminator:** Automatically appends `\0`.

*   **`fgets(str, size, stdin)`:**
    *   **Whitespace:** Reads characters until a newline character (`\n`) is encountered or until `size - 1` characters have been read. It *includes* the newline character in the buffer if it reads it.
    *   **Buffer Overflow:** It is designed to prevent buffer overflows by respecting the `size` limit, ensuring `size - 1` characters are read at most, leaving space for `\0`.
    *   **Null Terminator:** Automatically appends `\0` after the read characters (including the newline, if present).

**Preference:** `fgets()` is generally preferred because it is safer. It handles strings containing spaces correctly and protects against buffer overflows, which are common security vulnerabilities and sources of bugs.

**Q3. Write a C program that asks the user for their full name (including spaces) and then prints a personalized greeting.**

**Answer:**
```c
#include <stdio.h>

int main() {
    char fullName[100]; // Buffer to store the full name

    printf("Please enter your full name: ");

    // Use fgets for safe and space-aware input
    // Reads at most 99 characters to ensure space for '\0'
    if (fgets(fullName, sizeof(fullName), stdin) != NULL) {

        // Optional: Remove the trailing newline character if it was read
        // This is good practice for cleaner output
        int len = 0;
        while (fullName[len] != '\0') {
            len++;
        }
        if (len > 0 && fullName[len - 1] == '\n') {
            fullName[len - 1] = '\0';
        }

        printf("Hello, %s! Welcome!\n", fullName);
    } else {
        printf("Error reading input.\n");
    }

    return 0;
}
```

**Reasoning:**
We use `fgets` to read the full name because it can handle spaces. We provide `sizeof(fullName)` to tell `fgets` the maximum buffer size, ensuring safety. The `if (fgets(...) != NULL)` checks if the input operation was successful. We also include a common cleanup step to remove the trailing newline that `fgets` might have stored, making the greeting look neater.

**Q4. Consider the following code snippet:**

```c
char message[10] = "C is fun!";
printf("%s", message);
```
**What will be printed? Explain why.**

**Answer:**
The output will be: `C is fun!`

**Explanation:**
The string literal `"C is fun!"` has 9 characters: 'C', ' ', 'i', 's', ' ', 'f', 'u', 'n', '!'. When initialized into `char message[10]`, the compiler automatically appends the null terminator `\0`. So, `message` effectively becomes `{'C', ' ', 'i', 's', ' ', 'f', 'u', 'n', '!', '\0'}`.
The `printf("%s", message);` function reads characters from `message` starting from the first element until it encounters the null terminator `\0`. It prints each character it reads. Since the `\0` is at the 10th position (index 9), all 9 characters of "C is fun!" are printed before the null terminator is reached. No extra characters will be printed because the array has sufficient space and the null terminator is correctly placed.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
