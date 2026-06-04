---
title: "Command line Arguments."
subject: "PROGRAMMING IN C"
module: "Module 3: Functions "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9902"
status: "completed"
scrapedAt: "2026-05-23T16:09:24.542Z"
---
## PROGRAMMING IN C - Module 3: Functions

### Topic: Command Line Arguments

Welcome, everyone! Today, we’re diving into a really practical and often overlooked aspect of C programming: **Command Line Arguments**. You know, sometimes when you run a program, you want to give it some extra information right from the start, without having to type it into the program itself after it has begun. This is precisely what command line arguments allow us to do. Think of it like giving instructions to a chef when you place your order at a restaurant – you don’t go into the kitchen; you just tell the waiter what you want. Similarly, command line arguments are how we "tell" our C programs what to do or what data to work with when we launch them.

This topic is especially relevant to **CO1: Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements.** and **CO3: Utilize functions to find solution to the computational problems by dividing it into a number of modules and abstract data types.** Why? Because command line arguments allow us to make our programs more flexible and reusable. Instead of writing a new program for every slightly different task, we can write one program and customize its behavior using arguments passed during execution. This ties directly into modularity and solving problems efficiently, core principles we aim for in programming.

Let's get started by understanding how C programs receive these arguments.

#### The `main` Function's Secret Parameters

You’re all familiar with the standard `main` function, right? Usually, we see it as `int main() { ... }`. However, the C standard actually allows `main` to accept two arguments. These are special, and they are designed to receive the information passed from the command line. These two arguments are:

1.  **`argc` (Argument Count):** This is an integer. What do you think it counts? Yes, you guessed it – it counts the *number of arguments* provided on the command line, including the program’s name itself.
2.  **`argv` (Argument Vector):** This is an array of strings (character pointers, to be precise). Each string in this array represents one of the arguments passed on the command line.

So, a typical `main` function signature that can handle command line arguments looks like this:

```c
int main(int argc, char *argv[]) {
    // Your program logic here
    return 0;
}
```

Or, more formally, `char *argv[]` is equivalent to `char **argv`. Both mean an array of character pointers.

Think of it this way: when you type a command like `myprogram arg1 arg2 50`, your operating system breaks this whole line into individual pieces.
*   The first piece is always the name of the program being executed (`myprogram` in this case).
*   The subsequent pieces are the arguments you’ve provided (`arg1`, `arg2`, `50`).

The C runtime environment then takes these pieces and neatly stores them in `argc` and `argv`:
*   `argc` would be 4 (the program name + 3 arguments).
*   `argv[0]` would point to the string `"myprogram"`.
*   `argv[1]` would point to `"arg1"`.
*   `argv[2]` would point to `"arg2"`.
*   `argv[3]` would point to `"50"`.
*   And `argv[4]` would be a NULL pointer, marking the end of the array.

It’s crucial to remember that `argv[0]` *always* contains the name of the program itself. This is a common point of confusion, so always keep that in mind! As Herbert Schildt mentions in *C: The Complete Reference*, understanding the structure of `argv` is key to effectively processing command-line input.

#### Example: Simply Displaying Arguments

Let’s write a small program to illustrate this. Imagine you’re building a tool that processes files. You might want to see what files were specified.

```c
#include <stdio.h>

int main(int argc, char *argv[]) {
    printf("Total number of arguments: %d\n", argc);

    printf("Arguments are:\n");
    for (int i = 0; i < argc; i++) {
        printf("argv[%d]: %s\n", i, argv[i]);
    }

    return 0;
}
```

**How to Compile and Run:**

1.  Save the code as `show_args.c`.
2.  Compile it using your C compiler (e.g., GCC):
    ```bash
    gcc show_args.c -o show_args
    ```
3.  Now, run it with some arguments:
    ```bash
    ./show_args hello world 123
    ```

**Expected Output:**

```
Total number of arguments: 4
Arguments are:
argv[0]: ./show_args
argv[1]: hello
argv[2]: world
argv[3]: 123
```

See? `argc` correctly reported 4, and each argument, including the program’s name `./show_args`, is printed. This basic demonstration directly helps us with **CO1** by showing how we can receive external input to influence our program's execution.

#### Working with Arguments: Conversion and Validation

Now, a very important point: all arguments received in `argv` are **strings**. Even if you type a number like `123`, it arrives in `argv` as the string `"123"`. If you want to use these arguments as numbers (integers, floats, etc.), you *must* convert them. This is where functions from `<stdlib.h>` come in handy, like:

*   `atoi()`: Converts a string to an integer.
*   `atof()`: Converts a string to a floating-point number.
*   `atol()`: Converts a string to a long integer.

Let’s consider a program that adds two numbers provided on the command line.

```c
#include <stdio.h>
#include <stdlib.h> // For atoi()

int main(int argc, char *argv[]) {
    int num1, num2, sum;

    // Check if the correct number of arguments is provided
    if (argc != 3) {
        printf("Usage: %s <number1> <number2>\n", argv[0]);
        return 1; // Indicate an error
    }

    // Convert the arguments (strings) to integers
    num1 = atoi(argv[1]);
    num2 = atoi(argv[2]);

    // Perform the addition
    sum = num1 + num2;

    printf("The sum of %d and %d is: %d\n", num1, num2, sum);

    return 0; // Indicate success
}
```

**How to Compile and Run:**

1.  Save as `adder.c`.
2.  Compile:
    ```bash
    gcc adder.c -o adder
    ```
3.  Run:
    ```bash
    ./adder 25 50
    ```

**Expected Output:**

```
The sum of 25 and 50 is: 75
```

**What if we don’t provide enough arguments?**

```bash
./adder 25
```

**Expected Output:**

```
Usage: ./adder <number1> <number2>
```

This `if (argc != 3)` check is absolutely vital. It's a form of **input validation**. Without it, if you ran `./adder 25`, `atoi(argv[2])` would be trying to convert `NULL` (since `argv[2]` doesn't exist), leading to unpredictable behavior and likely a crash. Brian Kernighan and Dennis Ritchie in *The C Programming Language* emphasize robust error handling, and checking `argc` is the first step.

**Common Pitfalls and Exam Tips:**
*   **Remember `argv` elements are strings:** Always convert them if you need to perform arithmetic operations.
*   **Always check `argc`:** Ensure the user provides the expected number of arguments. This is a classic requirement in many programming assignments and exams.
*   **`argv[0]` is the program name:** Don’t forget this when counting or accessing arguments.
*   **Error return value:** Returning a non-zero value from `main` (like `return 1;`) is a conventional way to signal that the program terminated due to an error.

#### Handling Different Data Types

What if we need floating-point numbers? We use `atof()`:

```c
#include <stdio.h>
#include <stdlib.h> // For atof()

int main(int argc, char *argv[]) {
    float num1, num2, product;

    if (argc != 3) {
        printf("Usage: %s <float1> <float2>\n", argv[0]);
        return 1;
    }

    // Convert arguments to float
    num1 = atof(argv[1]);
    num2 = atof(argv[2]);

    product = num1 * num2;

    printf("The product of %.2f and %.2f is: %.2f\n", num1, num2, product);

    return 0;
}
```

**Running:**

```bash
./producter 3.14 2.5
```

**Output:**

```
The product of 3.14 and 2.50 is: 7.85
```

This ability to pass different types of data makes our programs much more versatile, directly supporting **CO1**. We can build a single calculator program that can perform addition, subtraction, multiplication, or division based on arguments passed.

#### Example Scenario: A Simple File Copy Program

Let’s think about a real-world scenario. Imagine you have a simple file copying utility. How would you design it to take the source and destination file names from the command line?

```c
#include <stdio.h>
#include <stdlib.h> // For exit()

int main(int argc, char *argv[]) {
    FILE *source_file, *dest_file;
    char ch;

    // Expecting program name, source file, destination file
    if (argc != 3) {
        printf("Usage: %s <source_file> <destination_file>\n", argv[0]);
        return 1; // Indicate incorrect usage
    }

    // Open the source file in read mode
    source_file = fopen(argv[1], "r");
    if (source_file == NULL) {
        perror("Error opening source file"); // Prints a system error message
        return 1; // Indicate file error
    }

    // Open the destination file in write mode
    dest_file = fopen(argv[2], "w");
    if (dest_file == NULL) {
        perror("Error opening destination file");
        fclose(source_file); // Close the source file before exiting
        return 1; // Indicate file error
    }

    // Copy character by character
    while ((ch = fgetc(source_file)) != EOF) {
        fputc(ch, dest_file);
    }

    printf("File '%s' copied successfully to '%s'.\n", argv[1], argv[2]);

    // Close the files
    fclose(source_file);
    fclose(dest_file);

    return 0; // Indicate success
}
```

**How to Use:**

1.  Create a dummy source file, say `source.txt`, with some content.
2.  Save the code as `copy_file.c`.
3.  Compile: `gcc copy_file.c -o copy_file`
4.  Run: `./copy_file source.txt destination.txt`

This program takes the source file name (`source.txt`) and the destination file name (`destination.txt`) directly from the command line. This is a powerful example of **CO1** and **CO5 (Use files in C)** working together. We’re not hardcoding file names; we’re making our copy utility generic and reusable. E Balagurusamy often highlights such practical applications in *Programming In Ansi C* to demonstrate the utility of C concepts.

#### Advanced Command Line Argument Parsing (Briefly)

For more complex programs, you might have options or flags (like `-v` for verbose output, or `-o output_file.txt` to specify an output file). Parsing these requires more sophisticated logic, often involving loops and `if-else` statements to check specific argument strings. Libraries like `getopt` (common in Unix-like systems) are designed for this, but for basic C, you’ll typically manage it with `strcmp()` from `<string.h>` to compare argument strings.

For example, if you wanted a program that echoes text, but with a flag to convert it to uppercase:

```c
#include <stdio.h>
#include <string.h> // For strcmp()
#include <ctype.h>  // For toupper()

int main(int argc, char *argv[]) {
    int to_uppercase = 0; // Flag to indicate if conversion is needed

    // Check for the uppercase flag first
    if (argc > 1 && strcmp(argv[1], "-U") == 0) {
        to_uppercase = 1;
        // Adjust loop to start from the next argument if flag is present
        // We'll print arguments starting from index 2 if flag is used
        for (int i = 2; i < argc; i++) {
            if (to_uppercase) {
                for (int j = 0; argv[i][j] != '\0'; j++) {
                    putchar(toupper(argv[i][j]));
                }
            } else {
                printf("%s", argv[i]);
            }
            if (i < argc - 1) {
                putchar(' '); // Add space between arguments
            }
        }
    } else {
        // No flag, print as is
        for (int i = 1; i < argc; i++) { // Start from 1 to skip program name
            printf("%s", argv[i]);
            if (i < argc - 1) {
                putchar(' ');
            }
        }
    }
    putchar('\n');
    return 0;
}
```

**Running:**

```bash
./echo_upper hello world
```
**Output:**
```
hello world
```

```bash
./echo_upper -U hello world
```
**Output:**
```
HELLO WORLD
```

This example touches upon **CO1** by showing how we can structure a program to respond to different input formats, making it more intelligent. Yashavant Kanetkar's *Let Us C* often provides excellent, step-by-step examples for such conditional logic.

#### Connection to Course Outcomes

Let’s summarize how command line arguments tie into our course objectives:

*   **CO1 (Basic Constructs, Control Statements):** Command line arguments are direct inputs. Using them involves `main` function parameters, conditional statements (`if`), loops (`for`), and string manipulation/conversion, all fundamental C constructs.
*   **CO3 (Functions, Modularity):** By passing arguments, we make our `main` function (and functions called by it) more generic. Instead of writing separate programs for adding 5 and 10 versus adding 20 and 30, one `adder` program using command line arguments handles both. This promotes code reuse and modularity – a single function can serve multiple purposes based on input.
*   **CO5 (Files):** As seen in the file copy example, command line arguments are crucial for making file-handling programs flexible. We don’t hardcode file names, allowing users to specify source and destination files dynamically.

Understanding command line arguments is a step towards writing more robust, user-friendly, and professional C programs. It’s about making your programs adaptable to the user’s needs without modifying the source code itself.

### Sample Questions with Answers

1.  **Question:** What are the two parameters that the `main` function can accept to handle command line arguments, and what do they represent?
    **Answer:** The `main` function can accept `int argc` and `char *argv[]`.
    *   `argc` (argument count) is an integer that stores the total number of arguments passed to the program on the command line, including the program's name.
    *   `argv` (argument vector) is an array of character pointers (strings), where each pointer (`argv[i]`) points to one of the command line arguments. `argv[0]` is always the program's name.

2.  **Question:** In a C program, if you execute `./myprog 100 20.5`, what will be the value of `argc` and the content of `argv[1]` and `argv[2]`?
    **Answer:**
    *   `argc` will be `3` (program name + 2 arguments).
    *   `argv[1]` will be the string `"100"`.
    *   `argv[2]` will be the string `"20.5"`.
    *   **Reasoning:** Command line arguments are always passed as strings, regardless of what they look like. `argc` counts the total number of these string arguments, including the program's name itself.

3.  **Question:** Why is it important to check the value of `argc` before accessing elements of `argv` in a C program?
    **Answer:** It is crucial to check `argc` to prevent **buffer overflows** or **segmentation faults** (crashes). If the program expects a certain number of arguments (e.g., 3) but the user provides fewer (e.g., 1), attempting to access `argv[1]` or `argv[2]` when they don't exist will lead to undefined behavior as the program tries to read memory it doesn't own. This is a fundamental aspect of robust programming and error handling.

4.  **Question:** Write a C program that takes a single command line argument representing a filename, opens that file, and prints its content to the console. Ensure you handle the case where the file cannot be opened.
    **Answer:**
    ```c
    #include <stdio.h>
    #include <stdlib.h> // For exit()

    int main(int argc, char *argv[]) {
        FILE *file_ptr;
        char ch;

        // Check if exactly one filename argument is provided
        if (argc != 2) {
            printf("Usage: %s <filename>\n", argv[0]);
            return 1; // Indicate incorrect usage
        }

        // Open the file specified by the command line argument
        file_ptr = fopen(argv[1], "r");

        // Check if the file was opened successfully
        if (file_ptr == NULL) {
            perror("Error opening file"); // Print system error message
            printf("Could not open file: %s\n", argv[1]);
            return 1; // Indicate file opening error
        }

        printf("Content of '%s':\n", argv[1]);
        // Read and print the file content character by character
        while ((ch = fgetc(file_ptr)) != EOF) {
            putchar(ch);
        }

        // Close the file
        fclose(file_ptr);

        return 0; // Indicate success
    }
    ```
    **Explanation:**
    *   The `main` function checks if `argc` is exactly 2 (program name + filename). If not, it prints a usage message and exits.
    *   `fopen(argv[1], "r")` attempts to open the file whose name is stored in `argv[1]` in read mode.
    *   If `fopen` returns `NULL`, it means the file could not be opened (e.g., it doesn't exist, or permissions are denied). `perror` is used to display a descriptive error message.
    *   If the file opens successfully, the program reads characters using `fgetc` and prints them using `putchar` until `EOF` (End Of File) is reached.
    *   Finally, `fclose` closes the file. This question directly tests **CO1** and **CO5**.

5.  **Question:** How would you convert the command line argument `argv[1]` to an integer in C, and what header file is typically required?
    **Answer:** You would use the `atoi()` function from the `<stdlib.h>` header file.
    Example:
    ```c
    #include <stdlib.h>
    // ...
    int number = atoi(argv[1]);
    ```
    **Reasoning:** This is a direct application of type conversion for command-line arguments, a core concept covered in this topic.
