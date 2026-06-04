---
title: "Statements - Input and Output statements"
subject: "PROGRAMMING IN C"
module: "Module 1: C Fundamentals  "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da354"
status: "completed"
scrapedAt: "2026-05-23T17:41:42.616Z"
---
# Module 1: C Fundamentals - Statements: Input and Output

Welcome, everyone! Today, we're diving into a fundamental aspect of programming in C: how our programs *talk* to the outside world. Think about it – a program that can't receive information or display results is like a brilliant mind trapped in silence. Input and output (often shortened to I/O) statements are our tools to break that silence. They're how our C programs interact with users, read from files, and display information on the screen. This is crucial for building any useful application, and it directly ties into our **Course Outcome 1 (CO1): Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements.** Without input and output, we can't even get the data *into* our program to begin with, let alone see if our calculations are correct.

Let's get started by understanding the basic players in C's I/O.

## The Standard I/O Library: `stdio.h`

Before we can use any C functions for input and output, we need to tell the C compiler that we intend to use them. We do this by including the *standard input/output header file*. This is done with the `#include` directive at the very beginning of your C program:

```c
#include <stdio.h>
```

Think of `stdio.h` as a toolbox. It contains pre-written functions that handle the complex details of communicating with your computer's peripherals – like the keyboard (for input) and the screen (for output). We don't need to reinvent the wheel; we just need to know which tools from the toolbox to use and how to use them. This is a common theme in C, as emphasized in books like Kernighan and Ritchie's "The C Programming Language," where they stress the importance of using standard libraries.

### Why a Header File?

You might wonder why we need a header file. It's a way to organize functions and their declarations. The header file contains the *prototypes* of the I/O functions, essentially telling the compiler about the function's name, what kind of data it expects (its arguments), and what kind of data it will return. This allows the compiler to check if you're using the functions correctly *before* your program even runs.

## Output Statements: `printf()` – Talking to the World!

The most common and versatile output statement in C is `printf()`. Yes, it stands for "print formatted." The "formatted" part is important because it means `printf()` can do much more than just display plain text. It can display text mixed with the values of variables, and it can control how those values are displayed (e.g., how many decimal places for a floating-point number).

Let's break down `printf()`:

**Syntax:**

```c
printf("format_string", argument1, argument2, ...);
```

*   **`"format_string"`:** This is the string literal that you want to display. It can contain regular text and special sequences called *format specifiers*.
*   **`argument1, argument2, ...`:** These are the variables or expressions whose values you want to display. They correspond to the format specifiers in the `format_string`.

**Format Specifiers: The Magic Codes**

Format specifiers are how `printf()` knows what *type* of data to expect and how to display it. They start with a percent sign (`%`). Here are some of the most common ones:

*   `%d` or `%i`: For integers (whole numbers, like `int`).
*   `%f`: For floating-point numbers (numbers with decimal points, like `float` and `double`).
*   `%c`: For a single character (like `char`).
*   `%s`: For strings (sequences of characters).
*   `%x` or `%X`: For hexadecimal integers.
*   `%o`: For octal integers.
*   `%%`: To print a literal percent sign (`%`).

**Example 1: Simple Text Output**

```c
#include <stdio.h>

int main() {
    printf("Hello, C Programming!"); // Just printing a string
    printf("\n"); // Printing a newline character to move to the next line
    printf("This is another line of text.");
    return 0;
}
```

**Output:**

```
Hello, C Programming!
This is another line of text.
```

Here, `\n` is a special character called an *escape sequence*. It represents a newline character, moving the cursor to the beginning of the next line. There are many escape sequences, like `\t` for a tab, `\\` for a backslash, and `\"` for a double quote.

**Example 2: Displaying Variable Values**

This is where `printf()` really shines! It lets us combine text with the actual values stored in our variables.

```c
#include <stdio.**h**>

int main() {
    int age = 25;
    float temperature = 98.6;
    char initial = 'J';

    printf("My age is %d years.\n", age);
    printf("The temperature is %f degrees Fahrenheit.\n", temperature);
    printf("My initial is %c.\n", initial);

    // We can also print multiple variables in one go!
    printf("Name: John, Age: %d, Initial: %c, Temp: %f\n", age, initial, temperature);

    return 0;
}
```

**Output:**

```
My age is 25 years.
The temperature is 98.600000 degrees Fahrenheit.
My initial is J.
Name: John, Age: 25, Initial: J, Temp: 98.600000
```

**Observation:** Notice how `printf()` automatically filled in the `%d`, `%f`, and `%c` placeholders with the values of `age`, `temperature`, and `initial` respectively. The order matters! The first specifier gets the first variable, the second specifier gets the second variable, and so on. This is a critical concept for **CO1**, as it allows us to present the results of our computations in a human-readable way.

**Controlling Output Format: Precision and Width**

`printf()` is very powerful because it allows us to control the appearance of the output. This is particularly useful for making reports or tables neat.

*   **Width:** You can specify a minimum field width. For example, `%5d` means display the integer in a field of at least 5 characters. If the number is shorter, it will be padded with spaces (usually on the left, making it right-aligned).
*   **Precision:** For floating-point numbers, you can specify the number of digits after the decimal point using `.precision`. For example, `%.2f` will display a floating-point number with exactly two digits after the decimal point.

**Example 3: Controlled Formatting**

```c
#include <stdio.h>

int main() {
    float pi = 3.14159265;
    int count = 5;

    printf("Value of pi (default): %f\n", pi);
    printf("Value of pi (2 decimal places): %.2f\n", pi);
    printf("Value of pi (5.3 precision): %5.3f\n", pi); // Width of 5, 3 decimal places

    printf("Count (default): %d\n", count);
    printf("Count (width of 4): %4d\n", count); // Right-aligned in 4 spaces

    return 0;
}
```

**Output:**

```
Value of pi (default): 3.141593
Value of pi (2 decimal places): 3.14
Value of pi (5.3 precision): 3.142
Count (default): 5
Count (width of 4):    5
```

**Key Takeaway for `printf()`:** It's your primary tool for displaying information. Always remember to match your format specifiers with the data types of your variables. Incorrect specifiers lead to garbled output or even program crashes! This is a classic area where beginners make mistakes, so pay close attention to this.

## Input Statements: `scanf()` – Listening to the User!

Now, how do we get data *into* our program? That's where `scanf()` comes in. Similar to `printf()`, `scanf()` stands for "scan formatted." It reads data from the standard input (usually the keyboard) and converts it according to the format specifiers you provide.

**Syntax:**

```c
scanf("format_string", &variable1, &variable2, ...);
```

*   **`"format_string"`:** This string tells `scanf()` what kind of data to expect and how to interpret it. It typically contains format specifiers matching the types of variables you want to read.
*   **`&variable1, &variable2, ...`:** This is the crucial part! The ampersand (`&`) before each variable name is essential. It means "the address of." `scanf()` needs to know *where* in memory to store the input data. Without the `&`, `scanf()` would be trying to read into a location that the program doesn't own, leading to undefined behavior. This is a very common point of confusion for new C programmers.

**Format Specifiers for `scanf()`:**

The format specifiers used with `scanf()` are largely the same as `printf()`, but their purpose is reversed:

*   `%d` or `%i`: Reads an integer.
*   `%f`: Reads a floating-point number (typically stored in a `float`).
*   `%lf`: Reads a floating-point number (typically stored in a `double`). **Important Note:** While `%f` works for `float` in `printf`, you *must* use `%lf` for `double` in `scanf`. This is a frequent gotcha!
*   `%c`: Reads a single character.
*   `%s`: Reads a string (a sequence of characters) until a whitespace character (space, tab, newline) is encountered.
*   `%x`, `%o`, etc.: For reading hexadecimal, octal, etc.

**Example 4: Reading and Displaying an Integer**

```c
#include <stdio.h>

int main() {
    int user_number; // Declare a variable to store the input

    printf("Please enter an integer: "); // Prompt the user
    scanf("%d", &user_number);          // Read the integer and store it in user_number

    printf("You entered: %d\n", user_number); // Display what was entered

    return 0;
}
```

**How it works:**
1.  The program prints "Please enter an integer: ".
2.  `scanf("%d", &user_number);` waits. The program pauses, and the cursor stays on the same line.
3.  The user types a number (e.g., `42`) and presses Enter.
4.  `scanf()` reads "42", recognizes it as an integer because of `%d`, and stores its numerical value into the memory location pointed to by `&user_number`.
5.  The program then continues, and `printf("You entered: %d\n", user_number);` displays the value that was just stored.

**Example 5: Reading Multiple Inputs**

```c
#include <stdio.h>

int main() {
    int quantity;
    float price;

    printf("Enter the quantity and price (e.g., 10 4.99): ");
    scanf("%d %f", &quantity, &price); // Read an integer and a float

    printf("You entered Quantity: %d, Price: %.2f\n", quantity, price);

    return 0;
}
```

**Example 6: Reading a String (with a pitfall!)**

```c
#include <stdio.h>

int main() {
    char name[50]; // Declare a character array (string) of size 50

    printf("Enter your first name: ");
    scanf("%s", name); // Read the string into the 'name' array

    printf("Hello, %s!\n", name);

    return 0;
}
```

**Output Scenario:**
If the user enters "Alice Bob" when prompted for the first name:
```
Enter your first name: Alice Bob
Hello, Alice!
```
Notice that `scanf("%s", name);` only reads "Alice" because it stops at the space. The "Bob" is left in the input buffer, which can cause problems for subsequent `scanf()` calls. This is a classic pitfall, and it's why `scanf()` for strings isn't always the best choice for multi-word inputs.

**Handling Whitespace with `scanf("%c")`**

Reading characters with `%c` can also be tricky because `scanf("%c", ...)` will read *any* character, including whitespace.

Consider this:

```c
#include <stdio.h>

int main() {
    char first_char, second_char;

    printf("Enter first character: ");
    scanf("%c", &first_char); // Reads 'A'

    printf("Enter second character: ");
    scanf("%c", &second_char); // This will read the newline left by the previous Enter!

    printf("First: %c, Second: %c\n", first_char, second_char);

    return 0;
}
```

If you enter 'A' and press Enter, the newline character (`\n`) from the Enter key press is still in the input buffer. The next `scanf("%c", &second_char);` will read that newline character instead of waiting for the user to input the second character.

**The Fix for `scanf("%c")` and String Input Buffers:**

To "consume" any leftover whitespace characters (like newlines) in the input buffer before reading the next input, you can put a space before the format specifier in `scanf()`.

*   **For `%c`:** `scanf(" %c", &variable);` (the space before `%c` tells `scanf` to skip any whitespace characters first).
*   **For `%s`:** `scanf(" %s", variable);` (similarly, skips leading whitespace).

Let's rewrite the character example with the fix:

```c
#include <stdio.h>

int main() {
    char first_char, second_char;

    printf("Enter first character: ");
    scanf(" %c", &first_char); // The space before %c is important here!

    printf("Enter second character: ");
    scanf(" %c", &second_char); // The space before %c is important here too!

    printf("First: %c, Second: %c\n", first_char, second_char);

    return 0;
}
```

This corrected version will now properly wait for user input for both characters.

**`scanf()` Return Value:**

`scanf()` returns the number of items successfully read and assigned. This is very useful for error checking. If `scanf` is expecting an integer and the user types letters, it won't be able to perform the conversion and will return a value less than the number of items it was trying to read.

```c
#include <stdio.h>

int main() {
    int number;
    int items_read;

    printf("Enter a number: ");
    items_read = scanf("%d", &number);

    if (items_read == 1) { // Check if exactly one item was read successfully
        printf("You entered: %d\n", number);
    } else {
        printf("Invalid input! Please enter an integer.\n");
        // You might want to clear the input buffer here if you were to re-prompt
    }

    return 0;
}
```

This checking aligns with building robust programs, which is essential for all COs as we move towards more complex applications.

**Alternative to `scanf()` for Strings: `fgets()`**

For reading strings, especially if they might contain spaces, `fgets()` is generally a safer and more robust option than `scanf("%s", ...)`. It can read an entire line of input, including spaces, up to a specified number of characters, and it includes the newline character at the end if it fits.

**Syntax:**

```c
fgets(buffer, size, stream);
```

*   `buffer`: The character array where the input will be stored.
*   `size`: The maximum number of characters to read (including the null terminator `\0`). `fgets` will read at most `size - 1` characters.
*   `stream`: The input source, usually `stdin` for standard input.

```c
#include <stdio.h>

int main() {
    char full_name[100]; // Buffer to store the full name

    printf("Enter your full name: ");
    fgets(full_name, sizeof(full_name), stdin); // Read up to 99 chars + null terminator

    printf("Your full name is: %s", full_name); // Note: fgets includes the newline

    return 0;
}
```

If the user enters "Alice Wonderland" and presses Enter:
```
Enter your full name: Alice Wonderland
Your full name is: Alice Wonderland
```
`fgets` reads the whole line. A common task after using `fgets` is to remove the trailing newline character if it exists, as it's often not desired in further processing.

**Why `fgets` is often preferred over `scanf("%s")`:**

1.  **Buffer Overflow Protection:** `fgets` takes the buffer size as an argument, preventing it from writing beyond the allocated memory, which `scanf("%s")` can do if the input is too long. This is a critical security consideration.
2.  **Handles Spaces:** `fgets` reads the entire line until the newline character, allowing you to input names or phrases with spaces. `scanf("%s")` stops at the first whitespace.

## Connecting Input/Output to Course Outcomes

Let's recap how these I/O statements directly support our course objectives:

*   **CO1 (Infer a computational problem and develop C programs from them using basic constructs...):** Input statements (`scanf`, `fgets`) allow us to gather the data needed to solve a computational problem. Output statements (`printf`) allow us to display the results, making our programs useful and allowing us to verify our solutions. For example, if we want to write a program to calculate the area of a rectangle, `scanf` will be used to get the length and width from the user, and `printf` will display the calculated area. This is the very foundation of creating interactive or data-driven programs.

*   **CO2 (Develop C programs using arrays, matrices, and strings):** When we read strings using `scanf("%s", ...)` or `fgets()`, we are directly working with arrays of characters. Similarly, if we were to read a matrix of numbers, we would use `scanf` repeatedly within loops to populate a 2D array. Understanding how to input and output these data structures is paramount for CO2.

*   **CO3 (Utilize functions to find solution...):** While `printf` and `scanf` are themselves functions, we often use them within our own custom functions. For instance, a function designed to get user input might contain `scanf` or `fgets` calls, and a function to display a report would use `printf`. This reinforces the modularity and reusability aspect of CO3.

*   **CO5 (Use files in C to permanently store and manipulate data):** While we haven't covered file I/O in depth yet, the principles of formatted input and output using `printf` and `scanf` are directly transferable to file operations using functions like `fprintf` and `fscanf`. So, mastering these basic I/O statements lays the groundwork for file handling.

## Common Pitfalls and Exam Tips

*   **Missing `&` with `scanf()`:** This is the most common error for beginners. Always remember `&` for `scanf`, but *not* for `scanf("%s", ...)` or `fgets()` as the array name itself decays into a pointer.
*   **`%f` vs. `%lf` in `scanf()`:** Use `%lf` for `double` with `scanf()`. This trips up many students.
*   **Input Buffer Issues:** Be mindful of leftover newlines, especially when mixing `%c` or `%s` with other input types. Use ` scanf(" %c", ...)` or `fgets()` to manage this.
*   **`scanf("%s")` and Spaces:** Remember that `%s` stops at whitespace. Use `fgets()` for inputs that may contain spaces.
*   **Return Value of `scanf()`:** Use the return value for basic input validation.
*   **`printf` Format Specifier Mismatch:** Ensure the specifier (`%d`, `%f`, `%c`, etc.) matches the data type of the variable you are printing.

**Exam Focus:** Expect questions that test your understanding of `printf` formatting (width, precision) and the correct usage of `scanf` with different data types, especially the `%lf` for `double`. You might also see questions about handling input buffer issues or comparing `scanf("%s")` with `fgets()`.

## Summary

Today, we’ve armed ourselves with the essential tools for communication in C: `printf()` for output and `scanf()` (and `fgets()`) for input. These aren't just commands; they are the bridge between our programs and the outside world, enabling interaction and data processing. Remember the importance of the `stdio.h` header, the magic of format specifiers, the crucial `&` with `scanf`, and the difference between `%f` and `%lf`. Mastering these fundamentals is your first major step in becoming a proficient C programmer.

---

## Sample Questions with Answers

**Question 1 (Conceptual):** What is the purpose of the `#include <stdio.h>` directive in a C program?

**Answer:** The `#include <stdio.h>` directive tells the C preprocessor to include the contents of the standard input/output header file (`stdio.h`). This file contains declarations for standard input and output functions like `printf()` and `scanf()`, allowing the program to use these functions for interacting with the user and displaying information.

**Question 2 (Exam-Oriented):** Write a C program that prompts the user to enter their age and the city they live in. Then, it should display a message like: "You are [age] years old and you live in [city]."

**Answer:**

```c
#include <stdio.h>

int main() {
    int user_age;
    char user_city[50]; // Array to store the city name (up to 49 characters + null terminator)

    // Prompt for age
    printf("Enter your age: ");
    scanf("%d", &user_age); // Read the age

    // Prompt for city (using fgets for city names with spaces)
    printf("Enter the city you live in: ");
    // Consume the newline character left by the previous scanf
    // Or more robustly: use " %49[^\n]" with scanf, but fgets is generally better for lines.
    // For this example, let's clear the buffer with an extra scanf or a simple loop.
    // A common approach to clear the buffer after %d:
    while (getchar() != '\n'); // Consume any leftover characters including the newline

    fgets(user_city, sizeof(user_city), stdin); // Read the city name

    // Display the output message
    printf("You are %d years old and you live in %s", user_age, user_city);

    return 0;
}
```

**Reasoning:**
*   We include `stdio.h` for `printf` and `scanf`/`fgets`.
*   We declare an `int` for age and a `char` array for the city name.
*   `scanf("%d", &user_age);` correctly reads an integer and stores it using its address.
*   A common issue after `scanf("%d", ...)` is that the newline character from pressing Enter remains in the input buffer. If we immediately call `fgets`, it will read this leftover newline as the "city" input. The `while (getchar() != '\n');` line is a simple way to clear the input buffer by reading and discarding characters until a newline is found.
*   `fgets(user_city, sizeof(user_city), stdin);` reads the city name, safely handling spaces and preventing buffer overflows.
*   Finally, `printf` displays the collected information using the appropriate format specifiers. Note that `fgets` includes the newline, so `printf` will end with a newline inherently.

**Question 3 (Tricky/Exam-Oriented):** What will be the output of the following C code snippet?

```c
#include <stdio.h>

int main() {
    char c1, c2;
    printf("Enter two characters: ");
    scanf("%c", &c1);
    scanf(" %c", &c2); // Notice the space before %c
    printf("c1 = %c, c2 = %c\n", c1, c2);
    return 0;
}
```
If the user inputs `A` then presses Enter, and then inputs `B` and presses Enter.

**Answer:**

```
c1 = A, c2 = B
```

**Reasoning:**
1.  The first `printf` prompts the user.
2.  `scanf("%c", &c1);` reads the first character the user types, which is `A`, and stores it in `c1`. The newline character (`\n`) from the Enter key press remains in the input buffer.
3.  The second `scanf(" %c", &c2);` is called. The space before `%c` is crucial. It instructs `scanf` to first skip any whitespace characters in the input buffer. This includes the newline character that was left by the previous Enter key press.
4.  After skipping the whitespace, `scanf` then reads the next character, which is `B`, and stores it in `c2`.
5.  Finally, `printf` displays `c1 = A, c2 = B`. If the space before `%c` in the second `scanf` were omitted, `c2` would likely contain the newline character instead of `B`.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
