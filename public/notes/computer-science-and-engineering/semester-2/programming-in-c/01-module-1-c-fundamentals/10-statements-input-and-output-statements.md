---
title: "Statements - Input and Output statements"
subject: "PROGRAMMING IN C"
module: "Module 1: C Fundamentals "
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5e33"
status: "completed"
scrapedAt: "2026-05-20T16:35:06.151Z"
---
# PROGRAMMING IN C: Module 1: C Fundamentals
## Topic: Statements - Input and Output Statements

Welcome, everyone! Today, we embark on our C programming journey with a fundamental, yet incredibly important, topic: **Input and Output Statements**. Think of these as the voice and ears of your C programs. Without them, your program would be like a brilliant mind trapped in a silent, unseeing body. It can do calculations, follow logic, but it can't interact with the outside world.

Why are these so crucial? Well, to solve any real-world computational problem (and you'll recall our Course Outcome CO1: "Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements"), we need a way to get data *into* our program and get results *out*. Whether it's calculating the area of a circle based on a radius you provide, or displaying the temperature from a sensor, input and output are the bridges connecting your program to reality.

### Understanding the Core: What are Statements?

Before we dive into input/output specifically, let's clarify what a "statement" is in C. In C, a statement is a complete instruction that the C compiler can execute. It's like a sentence in English – it expresses a complete thought or action. Most C statements end with a semicolon (;). For example, `int age = 25;` is an assignment statement, and `printf("Hello\n");` is an output statement. We'll be focusing on those that handle communication with the user or the system.

### The Standard Libraries: Our Gateway to I/O

C, in its core, is quite minimal. However, it provides a rich set of **standard libraries** that offer pre-written functions for common tasks. For input and output, the most vital library we'll use is `stdio.h`. The `stdio` stands for **Standard Input/Output**. To use any of the functions from this library, we need to tell the compiler to include it at the beginning of our program using the `#include` directive.

So, almost every C program you write will start with:

```c
#include <stdio.h>
```

This line is like packing all the necessary tools before you start building something. It makes functions like `printf` and `scanf` available to you.

### Output Statements: Speaking to the World

Our primary tool for outputting information from a C program is the `printf()` function. The name itself is a clue: "print formatted". This function is incredibly versatile.

#### `printf()`: The Workhorse of Output

The `printf()` function can display text, numbers, and even the values of variables. It takes one or more arguments, with the first argument being a **format string**. This format string is a sequence of characters, some of which might be special "format specifiers" that tell `printf` what kind of data to expect and how to display it.

Let's break this down with an analogy. Imagine you're giving instructions to a chef. The format string is your recipe instruction: "Add 2 cups of flour." Here, "Add" is the action, "2 cups" is the quantity, and "flour" is the ingredient. `printf` works similarly.

**Common Format Specifiers for `printf()`:**

*   `%d` or `%i`: For printing integer (whole number) values.
*   `%f`: For printing floating-point values (numbers with decimal points).
*   `%c`: For printing a single character.
*   `%s`: For printing a string (a sequence of characters).
*   `\n`: This is a **newline character**. It's not a format specifier for a variable, but it's crucial! It tells `printf` to move the cursor to the beginning of the next line. Without it, all your output would be on a single, long line.

**Example 1: Displaying Simple Text**

```c
#include <stdio.h>

int main() {
    printf("Hello, world!\n"); // Displaying a simple message
    printf("This is a C program.\n");
    return 0;
}
```

When you run this, the output will be:

```
Hello, world!
This is a C program.
```

See how the `\n` made them appear on separate lines? This is what we mean by "formatted" output.

**Example 2: Displaying Variables**

Now, let's see how to display the values stored in variables. This is where format specifiers come into play.

Suppose we want to announce someone's age and their score in a game.

```c
#include <stdio.h>

int main() {
    int age = 30;
    float score = 85.5;
    char initial = 'A';
    char name[] = "Alice"; // A string

    printf("Name: %s\n", name);          // %s for string
    printf("Age: %d years old\n", age);  // %d for integer
    printf("Score: %.2f\n", score);      // %.2f for float, displaying 2 decimal places
    printf("Initial: %c\n", initial);    // %c for character

    return 0;
}
```

Output:

```
Name: Alice
Age: 30 years old
Score: 85.50
Initial: A
```

Notice how the values in the parentheses after the format string (`name`, `age`, `score`, `initial`) correspond to the format specifiers (`%s`, `%d`, `%f`, `%c`) in order. The `%.2f` is a bit more advanced: it tells `printf` to display the floating-point number with exactly two digits after the decimal point. This kind of control is why `printf` is so powerful, and it directly relates to CO1 as we are presenting the results of our computation.

**Common Pitfalls with `printf()`:**

*   **Forgetting `#include <stdio.h>`**: If you forget this, the compiler won't know what `printf` is, and you'll get an error like "implicit declaration of function ‘printf’".
*   **Mismatched format specifiers and variable types**: If you use `%d` for a `float` or `%f` for an `int`, you'll get garbage output. The specifier *must* match the data type.
*   **Forgetting `\n`**: This can lead to confusing output where lines blend together.
*   **Forgetting the semicolon**: Always end statements with a semicolon!

### Input Statements: Listening to the User

Just as important as displaying information is getting information *from* the user or another source. For this, we use the `scanf()` function. The name `scanf` stands for "scan formatted". It's the counterpart to `printf`.

#### `scanf()`: Reading Formatted Input

`scanf()` reads input from the standard input stream (usually the keyboard) and parses it according to a specified format string. It then stores the parsed values into the variables you provide.

This is where things get a *little* trickier than `printf`. `scanf` needs to know *where* in memory to put the data it reads. For this, we use the **address-of operator** (`&`).

**Why the `&`?**

Think of your variables as mailboxes. Each mailbox has a unique address. When `printf` wants to display the contents of a mailbox, it's told "go to mailbox `age` and read what's inside." But when `scanf` needs to *put* something into a mailbox, it needs to know the *exact address* of that mailbox. The `&` operator gives us precisely that – the memory address of a variable.

**Common Format Specifiers for `scanf()`:**

The format specifiers for `scanf` are largely the same as for `printf`:

*   `%d` or `%i`: Reads an integer.
*   `%f`: Reads a floating-point number.
*   `%c`: Reads a single character.
*   `%s`: Reads a string (a sequence of characters).

**Example 3: Reading an Integer**

Let's write a program that asks for a user's age and then prints it back.

```c
#include <stdio.h>

int main() {
    int userAge; // Declare a variable to store the age

    printf("Please enter your age: "); // Prompt the user
    scanf("%d", &userAge);           // Read an integer and store it at the address of userAge

    printf("You are %d years old.\n", userAge); // Display the entered age
    return 0;
}
```

**How it works:**

1.  `printf("Please enter your age: ");` displays a message asking for input.
2.  `scanf("%d", &userAge);` waits for the user to type something and press Enter.
3.  The `%d` tells `scanf` to expect an integer.
4.  The `&userAge` tells `scanf` to take the integer entered by the user and store it in the memory location corresponding to the `userAge` variable.
5.  The final `printf` displays the value that was read and stored.

This is a direct application of CO1 – taking input to solve a problem (in this case, the problem is to confirm what the user entered).

**Example 4: Reading Multiple Inputs**

You can read multiple values with a single `scanf` call.

```c
#include <stdio.h>

int main() {
    int num1, num2;
    float average;

    printf("Enter two integers: ");
    scanf("%d %d", &num1, &num2); // Read two integers

    printf("Enter a floating-point number: ");
    scanf("%f", &average);       // Read a float

    printf("The first integer is: %d\n", num1);
    printf("The second integer is: %d\n", num2);
    printf("The average value is: %.2f\n", average);

    return 0;
}
```

**Important Note on Reading Strings with `scanf()`:**

When using `scanf("%s", variable_name)` to read strings, there's a crucial detail. `scanf("%s", ...)` by default stops reading when it encounters whitespace (like a space, tab, or newline). This means if you enter "John Doe", `scanf("%s", ...)` will only read "John". To read a whole line, including spaces, you'd typically use `fgets()`, which is a more robust function for reading strings, but for now, let's focus on basic string input with `scanf`.

Let's try reading a name using `scanf`:

```c
#include <stdio.h>

int main() {
    char firstName[20]; // Declare a character array to hold a name (up to 19 chars + null terminator)

    printf("Enter your first name: ");
    scanf("%s", firstName); // Read a string (stops at first space)

    printf("Hello, %s!\n", firstName);
    return 0;
}
```

If you enter "Jane", it works fine. If you enter "Jane Doe", it will print "Hello, Jane!".

**Common Pitfalls with `scanf()`:**

*   **Forgetting the `&` operator**: This is perhaps the most common mistake! Without `&`, `scanf` is given a value, not an address, leading to errors or corrupted data.
*   **Mismatched format specifiers**: Just like with `printf`, using `%d` for a float will cause problems.
*   **Input Buffer Issues**: When `scanf` reads input, it often leaves characters in an input buffer. This can cause problems in subsequent `scanf` calls, especially when mixing `%c` or `%s` with other format specifiers. For example, if you read an integer using `%d`, the newline character (`\n`) pressed by the user remains in the buffer. If the next operation is to read a character using `%c`, it will read that leftover newline, not the actual character you intended. A common way to "clean" the buffer is by adding ` " %c"` to your `scanf` format string, or a loop to discard characters until a newline. (This is a more advanced topic, but good to be aware of!)
*   **Buffer Overflow with `%s`**: If the user enters more characters than your character array can hold for a string, `scanf("%s", ...)` will write beyond the allocated memory, causing a **buffer overflow**, which is a serious security vulnerability and can crash your program. This is why using fixed-size `%s` is discouraged in robust programming, and functions like `fgets` are preferred for string input.

### Connecting to Course Outcomes

Let's explicitly link what we've learned back to our Course Outcomes:

*   **CO1: Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements.**
    *   Input and output statements are *fundamental* to this. How can you solve a problem if you can't even get the numbers to work with or display the answer? For example, a problem might be "calculate the average of two numbers." To solve this, you *must* use `scanf` to get the two numbers and `printf` to display the calculated average.
*   **CO2: Develop C programs using arrays, matrices, and strings.**
    *   While we touched on strings with `scanf("%s", ...)` and storing them in character arrays, this is just the beginning. As we learn more about arrays, we'll use `scanf` to populate them with data and `printf` to display their contents. For instance, reading 10 numbers into an array would involve a loop with `scanf`.
*   **CO3: Utilize functions to find solution to the computational problems by dividing it into a number of modules and abstract data types.**
    *   `printf` and `scanf` are themselves library functions. When you create your own functions, you'll often want them to accept input parameters (like `int sum(int a, int b)`) and return output values (or use `printf` internally to display results). This allows your functions to be reusable building blocks, interacting with the outside world through these I/O mechanisms.
*   **CO4: Develop C programs using pointers for dynamic data handling.**
    *   The `&` operator used with `scanf` directly introduces us to pointers. `scanf` needs the memory address of a variable to store the input, and `&variable` gives you that address. This is our first glimpse into pointer usage.
*   **CO5: Use files in C to permanently store and manipulate data.**
    *   Input and output are not limited to the keyboard and screen. `stdio.h` also provides functions for file input and output (like `fopen`, `fprintf`, `fscanf`, `fclose`). Learning `printf` and `scanf` first lays the groundwork for understanding how data is formatted and transferred, making the transition to file I/O smoother.

### Key Takeaways and Exam Tips

*   **Always `#include <stdio.h>`** for `printf` and `scanf`.
*   **`printf()`** is for outputting data. Use format specifiers (`%d`, `%f`, `%c`, `%s`) to control how data is displayed. Use `\n` for newlines.
*   **`scanf()`** is for reading input. It requires the **address-of operator (`&`)** before each variable to store the input correctly.
*   **Match format specifiers to variable types** in both `printf` and `scanf`. This is a very common source of errors.
*   Be mindful of the input buffer, especially when mixing different types of input, and the limitations of `scanf("%s", ...)` regarding spaces and buffer overflows.

Consider these points for your exams:
*   You might be asked to write a simple C program that takes input and produces output.
*   Questions could focus on explaining the purpose of `printf` and `scanf`, their syntax, and common format specifiers.
*   You might be given code snippets with errors related to missing `#include`, incorrect format specifiers, or missing `&` in `scanf`, and asked to identify and correct them.
*   Understanding the role of the `&` operator with `scanf` is crucial, as it hints at pointer concepts.

### Sample Questions and Answers

**Question 1 (Conceptual):** What is the primary purpose of the `stdio.h` header file in C programming?

**Answer:** The `stdio.h` header file provides the declarations for standard input and output functions in C, such as `printf()` for outputting formatted text to the console and `scanf()` for reading formatted input from the console. Including this file makes these essential communication tools available to your program.

**Question 2 (Exam-Oriented - Error Identification):** Identify the error in the following C code snippet and explain why it's an error.

```c
#include <stdio.h>

int main() {
    int number;
    printf("Enter a number: ");
    scanf("%d", number); // Error is here
    printf("You entered: %d\n", number);
    return 0;
}
```

**Answer:** The error is in the `scanf("%d", number);` line. The `scanf` function requires the memory address of the variable where it should store the input value. The correct way to provide this is by using the address-of operator (`&`). So, the line should be `scanf("%d", &number);`. Without the `&`, `scanf` is given the *value* of `number` (which is uninitialized at this point, potentially leading to unpredictable behavior) instead of its memory location.

**Question 3 (Conceptual/Application):** Explain the difference between `printf("%f", float_variable);` and `printf("%.2f", float_variable);`.

**Answer:** Both statements are used to print a floating-point variable. However, `printf("%f", float_variable);` prints the floating-point number with a default precision, usually 6 digits after the decimal point. On the other hand, `printf("%.2f", float_variable);` specifically formats the output to display exactly two digits after the decimal point. This is useful for controlling the presentation of currency, percentages, or other values where a fixed number of decimal places is required.

**Question 4 (Exam-Oriented - Small Program):** Write a C program that asks the user for their name and their age, and then prints a message like "Hello, [Name]! You are [Age] years old."

**Answer:**

```c
#include <stdio.h>

int main() {
    char name[50]; // Allocate space for a name up to 49 characters
    int age;

    printf("Enter your name: ");
    scanf("%s", name); // Read the name (stops at the first space)

    printf("Enter your age: ");
    scanf("%d", &age); // Read the age

    printf("Hello, %s! You are %d years old.\n", name, age);

    return 0;
}
```

**Explanation for the Answer:**
*   We include `stdio.h` for `printf` and `scanf`.
*   `char name[50];` declares a character array to store the name. We choose 50 as a reasonable buffer size, but remember `scanf("%s", ...)` will only read up to the first space. For names with spaces, `fgets` would be better, but this fulfills the prompt using `scanf`.
*   `int age;` declares an integer variable for the age.
*   We use `printf` to prompt the user for input.
*   `scanf("%s", name);` reads the input string and stores it in `name`. Note: no `&` is needed for character arrays when passed directly to `scanf` for `%s` format specifier because the array name itself decays to a pointer to its first element.
*   `scanf("%d", &age);` reads the integer input and stores it at the memory address of `age`.
*   Finally, `printf("Hello, %s! You are %d years old.\n", name, age);` displays the collected information using the appropriate format specifiers for the string and integer.

And that, class, is our introduction to the essential world of input and output in C! These statements are your program's lifeline to the outside world, and mastering them is your first big step. Keep practicing, and you'll be communicating with your computer like a pro in no time!
