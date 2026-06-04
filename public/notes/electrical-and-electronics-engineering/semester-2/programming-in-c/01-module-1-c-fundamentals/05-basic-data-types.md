---
title: "Basic Data types"
subject: "PROGRAMMING IN C"
module: "Module 1: C Fundamentals  "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f98dd"
status: "completed"
scrapedAt: "2026-05-23T16:08:55.048Z"
---
# PROGRAMMING IN C - Module 1: C Fundamentals

## Topic: Basic Data Types

Welcome, everyone! Today, we're diving into the very bedrock of C programming: **Basic Data Types**. Think of these as the fundamental building blocks that allow our programs to understand and work with different kinds of information. Without them, how would a computer know if we're talking about a whole number, a decimal, or perhaps a single letter? It's C's way of categorizing information, and understanding these types is absolutely crucial for writing any meaningful program. This is where our journey into computational problem-solving, as outlined in **CO1 (Infer a computational problem and develop C programs from them using basic constructs of C language)**, truly begins. We need to understand what kind of "data" we're dealing with before we can even start thinking about processing it.

### What is a Data Type?

In essence, a **data type** tells the C compiler two very important things about a piece of data:

1.  **What kind of value it can hold:** Is it an integer (a whole number), a floating-point number (a number with a decimal point), or something else?
2.  **How much memory it will occupy:** Different types require different amounts of space in the computer's memory.
3.  **What operations can be performed on it:** You can add two numbers, but it doesn't make much sense to "add" two characters in the same way.

The C language, as described in classics like Kernighan and Ritchie's "The C Programming Language" (often called the "K&R book"), provides a set of **fundamental (or basic) data types** that we'll be using constantly. These are the pre-defined types that the language itself understands.

### The Core Basic Data Types in C

Let's introduce the main players. We have four primary basic data types in C:

*   **`int` (Integer)**
*   **`float` (Floating-Point)**
*   **`double` (Double-Precision Floating-Point)**
*   **`char` (Character)**

Let's explore each one in detail.

#### 1. The `int` Type: For Whole Numbers

The `int` data type is used to store whole numbers – numbers without any fractional part. Think about counting apples, the number of students in a class, or a year. These are all integers.

*   **What it represents:** Whole numbers (positive, negative, or zero).
*   **Memory:** Typically, an `int` occupies 2 or 4 bytes of memory, depending on the system architecture. This is a key point to remember, as it influences the range of numbers you can store.
*   **Range:** The range of values an `int` can hold is system-dependent. However, a standard `int` can generally store values from approximately -32,768 to +32,767 (if it's 2 bytes) or from approximately -2,147,483,648 to +2,147,483,647 (if it's 4 bytes). K&R's book discusses how the size of basic types like `int` can vary, which is important for portability.

**Example:**
Imagine you're building a simple program to track the number of guests at a party.

```c
#include <stdio.h>

int main() {
    int numberOfGuests = 50; // Storing the number 50
    int year = 2023;         // Storing the year 2023

    printf("The party has %d guests.\n", numberOfGuests);
    printf("The current year is %d.\n", year);

    return 0;
}
```

Here, `numberOfGuests` and `year` are declared as `int` because they represent whole numbers. We use the `%d` format specifier in `printf` to display these integer values.

**Important Note for Exams:** Always be mindful of the potential range of `int`. If you expect to store very large numbers, you might need to consider variations like `long int`.

#### Modifiers for `int`: `short`, `long`, `signed`, `unsigned`

C allows us to further refine the `int` type using *modifiers*. These change the size or the sign (positive/negative) of the integer.

*   **`short int` (or `short`):** Stores smaller integers. It typically uses less memory than `int` (often 2 bytes) and thus has a smaller range. Useful when memory is a concern and you know your numbers won't be too large.
*   **`long int` (or `long`):** Stores larger integers. It typically uses more memory than `int` (often 4 bytes or even 8 bytes) and has a wider range. Essential when dealing with potentially large counts or values.
*   **`signed` (default):** Allows the integer to be positive, negative, or zero. This is the default behavior for `int`, `short int`, and `long int`.
*   **`unsigned`:** Allows the integer to be only non-negative (zero or positive). Because it doesn't need to store negative signs, an `unsigned int` can typically store twice the range of positive values compared to a `signed int` of the same size. For example, an `unsigned int` might range from 0 to over 4 billion.

**Example using modifiers:**

```c
#include <stdio.h>

int main() {
    short int smallNumber = 100;        // Potentially smaller range
    long int bigNumber = 1000000000L;  // Larger range, 'L' suffix is good practice
    unsigned int positiveCount = 50000; // Only positive numbers

    printf("Small number: %hd\n", smallNumber);      // %hd for short int
    printf("Big number: %ld\n", bigNumber);        // %ld for long int
    printf("Positive count: %u\n", positiveCount);   // %u for unsigned int

    return 0;
}
```

**Remember this:** The `L` suffix for `long int` literals (like `1000000000L`) ensures the number is treated as a `long int` from the start. Similarly, `U` for `unsigned` and `LL` for `long long`.

#### 2. The `float` and `double` Types: For Numbers with Decimal Points

When we need to represent numbers that have fractional parts – like measurements, currency, or scientific values – we use floating-point types. C provides two primary ones: `float` and `double`.

*   **`float`:** Represents single-precision floating-point numbers.
    *   **What it represents:** Numbers with decimal points.
    *   **Memory:** Typically occupies 4 bytes.
    *   **Range and Precision:** Offers a good range of values, but with limited precision. It can typically accurately represent about 6-7 decimal digits. This means if you have a number like 12345.67890123, `float` might only store it accurately up to 12345.678.
*   **`double`:** Represents double-precision floating-point numbers.
    *   **What it represents:** Numbers with decimal points, offering greater precision than `float`.
    *   **Memory:** Typically occupies 8 bytes (twice that of `float`).
    *   **Range and Precision:** Offers a much wider range of values and significantly higher precision, typically about 15-16 decimal digits. For most scientific and engineering calculations, `double` is preferred.

**Analogy:** Think of `float` like a regular ruler that's marked in centimeters and millimeters. It's good for most everyday tasks. `double` is like a high-precision caliper that can measure to fractions of a millimeter, giving you much more accurate readings for demanding jobs.

**Example:** Let's calculate the area of a circle.

```c
#include <stdio.h>

int main() {
    float radiusFloat = 5.5f; // Use 'f' suffix for float literals
    double radiusDouble = 5.5; // 'double' is the default for decimal literals

    float piFloat = 3.14159f;
    double piDouble = 3.141592653589793;

    float areaFloat = piFloat * radiusFloat * radiusFloat;
    double areaDouble = piDouble * radiusDouble * radiusDouble;

    printf("Area (float): %f\n", areaFloat); // %f for float
    printf("Area (double): %lf\n", areaDouble); // %lf for double

    return 0;
}
```

**Key Point for `float`/`double`:**
*   Use the `f` suffix (e.g., `5.5f`) for `float` literals to explicitly tell the compiler it's a `float`. If you omit it, the number `5.5` will be treated as a `double` by default.
*   For `printf`, use `%f` for `float` and `%lf` for `double`. For `scanf`, use `%f` for `float` and `%lf` for `double` to read values into these types. (Note: While `%f` works for `double` in `scanf`, using `%lf` is more consistent and recommended by many style guides to avoid confusion.)

**Exam Tip:** Understand the trade-off between `float` and `double`. `float` uses less memory but is less precise. `double` uses more memory but is much more precise. For calculations involving many steps or requiring high accuracy, `double` is the safe bet. Herbert Schildt's "C: The Complete Reference" often emphasizes the importance of choosing the right floating-point type for accuracy.

#### `long double`

There's also `long double`, which provides even higher precision than `double`, but it's less commonly used in introductory contexts and its exact size and precision are system-defined.

#### 3. The `char` Type: For Single Characters

The `char` data type is designed to hold a single character, such as a letter ('A', 'b'), a digit ('7'), a punctuation mark ('.', '!'), or a special symbol ('$', '#').

*   **What it represents:** A single character.
*   **Memory:** Typically occupies 1 byte of memory.
*   **How it's stored:** Internally, `char` is usually stored as a small integer value corresponding to its ASCII (American Standard Code for Information Interchange) value. For example, the character 'A' is stored as the integer 65. This is why `char` can sometimes be treated as a small integer.

**Example:** Storing a grade or an initial.

```c
#include <stdio.h>

int main() {
    char initial = 'J'; // Store the character 'J'
    char grade = 'A';   // Store the character 'A'
    char symbol = '$';  // Store the symbol '$'

    printf("Your initial is: %c\n", initial); // %c for character
    printf("You received a grade: %c\n", grade);
    printf("The symbol is: %c\n", symbol);

    // We can also see its ASCII value
    printf("The ASCII value of '%c' is %d\n", initial, initial);

    return 0;
}
```

**Key Point for `char`:**
*   Character literals are enclosed in single quotes (e.g., `'A'`, `'7'`, `'$'`). Do *not* use double quotes (`"A"`) for single characters; double quotes are for strings (sequences of characters), which we'll cover later.
*   The format specifier for `char` in `printf` is `%c`.

**Exam Consideration:** Because `char` is stored as an integer, you can sometimes perform arithmetic on it. For instance, `'B' - 'A'` would result in `1` (since 'B' has ASCII 66 and 'A' has ASCII 65). This is a common trick in C programming questions.

#### `signed char` and `unsigned char`

Similar to `int`, `char` can also be `signed` or `unsigned`. However, the most common usage is the plain `char` type.

### Other Important Built-in Types

While `int`, `float`, `double`, and `char` are the core basic types, C also offers `void`.

*   **`void`:** This is a special type that means "no type" or "no value." It's not used to declare variables in the way the others are. Instead, it's used in two main contexts:
    1.  **Function Return Type:** When a function doesn't return any value, its return type is declared as `void`.
    2.  **Pointers:** A `void` pointer (`void *`) is a generic pointer that can point to any data type. This is a more advanced concept, but it's good to be aware of `void`'s existence.

### Type Conversion (Type Casting)

Sometimes, you need to convert a value from one data type to another. This is called **type conversion** or **type casting**. C performs **implicit type conversion** automatically in many situations, but you can also force it using **explicit type casting**.

**Implicit Conversion:** C often converts operands to a common type before performing an operation. For example, if you add an `int` and a `float`, the `int` will usually be promoted to a `float` before the addition.

**Explicit Conversion (Casting):** You can explicitly cast a value by putting the desired data type in parentheses before the variable or value.

**Example:**

```c
#include <stdio.h>

int main() {
    int count = 10;
    float price = 2.50;

    // Implicit conversion: count (int) is promoted to float for multiplication
    float totalCost = count * price;

    printf("Total cost (implicit conversion): %f\n", totalCost);

    // Explicit casting: converting an integer result to a float
    int sum = 15;
    int num = 2;
    float average = (float)sum / num; // Cast sum to float BEFORE division

    printf("Average (explicit cast): %f\n", average);

    return 0;
}
```

**Crucial Point for Casting:** In `(float)sum / num`, if you don't cast `sum` to `float` *before* the division, the division `sum / num` (which is `15 / 2`) would be integer division, resulting in `7`. The cast ensures floating-point division, giving `7.5`. This is a very common pitfall! This links directly to **CO1**, as performing calculations correctly relies on understanding how data types interact.

### `sizeof` Operator

We mentioned that data types occupy different amounts of memory. The `sizeof` operator is a built-in C operator that tells you the size (in bytes) of a data type or a variable.

**Example:**

```c
#include <stdio.h>

int main() {
    printf("Size of int: %zu bytes\n", sizeof(int));
    printf("Size of float: %zu bytes\n", sizeof(float));
    printf("Size of double: %zu bytes\n", sizeof(double));
    printf("Size of char: %zu bytes\n", sizeof(char));

    int myNum = 100;
    printf("Size of variable myNum: %zu bytes\n", sizeof(myNum));

    return 0;
}
```
The format specifier `%zu` is used with `sizeof` because `sizeof` returns a value of type `size_t`, which is an unsigned integer type.

### Connecting to Course Outcomes

*   **CO1 (Infer a computational problem and develop C programs from them using basic constructs of C language):** Understanding basic data types is the *first* step in inferring a computational problem. If the problem involves counting, you'll use `int`. If it involves measurements, you'll use `float` or `double`. Choosing the correct data type directly impacts how you write your program and how it functions.
*   **CO2 (Develop C programs using arrays, matrices, and strings):** Arrays, matrices, and strings are all *collections* of basic data types. You can have an array of integers (`int arr[10];`), an array of characters (which forms a string), etc. So, a solid grasp of individual data types is foundational for these more complex data structures.
*   **CO3 (Utilize functions to find solution to the computational problems by dividing it into a number of modules and abstract data types):** Functions can accept arguments of basic data types and can return values of basic data types. For example, a function to calculate the square root might take a `double` and return a `double`.
*   **CO4 (Develop C programs using pointers for dynamic data handling):** Pointers themselves can point to variables of any basic data type. Understanding `int *`, `float *`, `char *` is essential for pointer arithmetic and dynamic memory allocation.
*   **CO5 (Use files in C to permanently store and manipulate data):** When you read from or write to files, you are often reading or writing data of basic types (numbers, characters). File I/O functions expect you to know the data type you are handling.

### Summary and Key Takeaways

*   **Data types** define the kind of data a variable can hold and the memory it occupies.
*   The fundamental types are `int`, `float`, `double`, and `char`.
*   `int` is for whole numbers. Use `short` and `long` for smaller or larger integers. Use `unsigned` for non-negative values.
*   `float` and `double` are for numbers with decimal points. `double` offers more precision. Remember the `f` suffix for `float` literals and `%f`/`%lf` format specifiers.
*   `char` is for single characters, stored internally as ASCII values. Enclose characters in single quotes (`' '`) and use `%c`.
*   **Type casting** is crucial for converting between types, especially to ensure correct arithmetic operations like division. Be careful with integer division!
*   The `sizeof` operator helps you determine memory usage.

Mastering these basic data types is like learning the alphabet before you can write a novel. They are your first and most fundamental tools in C programming.

---

## Sample Questions with Answers

**Conceptual Questions:**

1.  **Question:** What is the primary purpose of a data type in C programming?
    **Answer:** A data type in C serves to define the nature of the data that a variable can store, the amount of memory that variable will occupy, and the operations that can be performed on it. This allows the compiler to manage memory and process data correctly. (Connects to the introductory explanation of data types and foundational for CO1).

2.  **Question:** Explain the difference between `float` and `double` in terms of memory usage and precision.
    **Answer:** `float` typically uses 4 bytes of memory and offers precision for about 6-7 decimal digits. `double` typically uses 8 bytes of memory and offers higher precision for about 15-16 decimal digits. `double` is preferred for calculations requiring greater accuracy. (Connects to the explanation of floating-point types, important for CO1 and CO3).

3.  **Question:** Why is the `f` suffix important for `float` literals, and what is the corresponding format specifier for printing a `float`?
    **Answer:** The `f` suffix (e.g., `3.14f`) explicitly tells the compiler that the literal is a `float`. Without it, decimal literals are treated as `double` by default. The format specifier for printing a `float` is `%f`. (Connects to the details of `float` usage, important for CO1).

**Exam-Oriented Questions:**

4.  **Question:** Consider the following C code snippet:
    ```c
    int a = 10;
    int b = 3;
    float result = a / b;
    printf("%f", result);
    ```
    What will be the output of this code, and why?
    **Answer:** The output will be `3.000000`.
    **Reasoning:** Inside the calculation `a / b`, both `a` and `b` are integers. C performs integer division when both operands are integers. So, `10 / 3` results in `3` (the fractional part is discarded). This integer `3` is then implicitly converted to a `float` (3.0) and assigned to `result`. The `printf` statement then prints this float value. To get `3.333...`, one of the operands must be a float *before* the division, e.g., `float result = (float)a / b;` or `float result = a / (float)b;`. This highlights the importance of type casting for correct arithmetic, crucial for CO1.

5.  **Question:** Write a C program that declares a variable for the population of a country (which can be very large) and a variable for the average temperature of a city. Use appropriate basic data types for both.
    **Answer:**
    ```c
    #include <stdio.h>

    int main() {
        // Using long int for a large population count
        long int countryPopulation = 7800000000L; // 7.8 billion

        // Using float or double for average temperature, double offers more precision
        double cityAvgTemperature = 25.75;

        printf("Estimated population of the country: %ld\n", countryPopulation);
        printf("Average temperature in the city: %.2f degrees Celsius\n", cityAvgTemperature); // %.2f to show 2 decimal places

        return 0;
    }
    ```
    **Reasoning:** `long int` is chosen for population because it can hold larger integer values than a standard `int`. `double` is chosen for temperature as it's a real number and `double` provides better precision than `float` for potentially finer temperature readings. The format specifiers `%ld` for `long int` and `%.2f` for `double` (formatted to two decimal places) are used. This demonstrates applying data types to real-world scenarios, aligning with CO1.

6.  **Question:** What is the difference in output between `printf("%c", 'X');` and `printf("%d", 'X');`?
    **Answer:**
    *   `printf("%c", 'X');` will output the character `X`.
    *   `printf("%d", 'X');` will output the ASCII (or equivalent character encoding) decimal value of the character `X`. For 'X', this is typically 88.
    **Reasoning:** The `%c` format specifier tells `printf` to interpret its argument as a character and display it as such. The `%d` format specifier tells `printf` to interpret its argument as an integer and display it in decimal form. This showcases the dual nature of `char` as both a character and a small integer, important for understanding `char` for CO1.
