---
title: "Identifiers"
subject: "PROGRAMMING IN C"
module: "Module 1: C Fundamentals  "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da34d"
status: "completed"
scrapedAt: "2026-05-23T17:41:35.194Z"
---
# Programming in C: Module 1 - C Fundamentals

## Topic: Identifiers

Welcome, everyone! Today, we're diving into the very foundational building blocks of any C program. Think of C as a language, just like English or Hindi. And just like any language, it has its own vocabulary and rules for naming things. In C, these named entities – like variables, functions, and other elements you'll create – are called **identifiers**. Getting this right is crucial because it directly impacts how you write, understand, and manage your code. This is fundamental to **CO1: Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements.** Without proper identifiers, you simply can't express your problem-solving logic in C.

### What Exactly is an Identifier?

An identifier is essentially a name given to various entities within a C program. Imagine you're organizing your kitchen. You label your spice jars: "Salt," "Pepper," "Turmeric." These labels are like identifiers. In C, you'll give names to:

*   **Variables:** These are like containers that hold data. For example, you might have a variable named `age` to store a person's age, or `total_score` to keep track of a game's score.
*   **Functions:** These are blocks of code that perform a specific task. You might have a function named `calculateSum` to add two numbers, or `displayMessage` to print something on the screen.
*   **Arrays:** These are collections of similar data items. You might name an array `studentNames` to store a list of student names.
*   **Structures and Unions:** These are user-defined data types that group different types of data together. You might name a structure `EmployeeDetails`.
*   **Enums (Enumerations):** These define a set of named integer constants. You might have an enum for `DaysOfWeek`.
*   **Macros:** These are preprocessor directives that define symbolic constants or simple code replacements. You might define a macro `PI` for the value of pi.

Essentially, anything you create and need to refer to later in your program will have an identifier.

### Rules for Forming Identifiers

Now, C doesn't let you name things arbitrarily. It has a strict set of rules, much like how in English, a sentence has a subject, verb, and object in a particular order for it to make sense. These rules ensure that the C compiler can correctly distinguish between different entities. Let's break them down:

1.  **Starting Character:** An identifier must **always** begin with either a **letter** (a-z or A-Z) or an **underscore** (`_`).
    *   Think of it like the first letter of a word. You can't start a word with a number, right? Similarly, an identifier can't start with a digit.
    *   **Example:** `count`, `_total`, `myVariable` are all valid starting points.
    *   **Invalid:** `1st_value`, `99bottles`, `$price`.

2.  **Subsequent Characters:** After the first character, an identifier can consist of **letters** (a-z, A-Z), **digits** (0-9), or the **underscore** (`_`).
    *   This gives you flexibility to create descriptive names.
    *   **Example:** `userName`, `emp_id_123`, `data_value_X` are all valid.

3.  **Case Sensitivity:** This is a big one, and a common source of confusion for beginners! C is **case-sensitive**. This means `myVariable`, `myvariable`, and `MYVARIABLE` are all treated as **three different identifiers**.
    *   Imagine you have two friends, Alice and alice. If you're talking about them, you need to be specific. C is like that!
    *   **Example:** If you declare `int score;` and later try to use `SCORE`, the compiler won't recognize it as the same variable.
    *   **Tip for exams:** Always be consistent with your casing. It's good practice to adopt a naming convention (like using `camelCase` or `snake_case`) and stick to it. For instance, using `myVariable` or `my_variable`.

4.  **No Spaces or Special Characters (except underscore):** You cannot use spaces or most special characters like `+`, `-`, `*`, `/`, `%`, `#`, `@`, `!`, etc., within an identifier. The only exception is the underscore `_`.
    *   Spaces would make it impossible for the compiler to know where one name ends and another begins.
    *   **Example:** `first name` is invalid, use `firstName` or `first_name`. `value@home` is invalid.

5.  **Keywords are Reserved:** C has a set of reserved words, called **keywords**, that have special meanings to the compiler. You **cannot** use any keyword as an identifier.
    *   Keywords are like the command words in any language – you can't use "stop" as the name of your pet dog if "stop" also means "halt."
    *   Some common keywords include `int`, `float`, `char`, `if`, `else`, `while`, `for`, `return`, `void`, `struct`, `union`, `enum`, `auto`, `break`, `case`, `const`, `continue`, `default`, `do`, `double`, `extern`, `goto`, `long`, `register`, `short`, `signed`, `sizeof`, `static`, `switch`, `typedef`, `unsigned`, `volatile`. We'll encounter many of these as we progress.
    *   **Example:** You cannot declare a variable named `int` or a function named `if`.
    *   **Common Pitfall:** Accidentally trying to use a keyword. For example, trying to name a variable `return` or `char`.

6.  **Length of Identifiers:** The C standard allows for identifiers to be of significant length, but historically, older compilers might have only considered the first few characters. Modern C standards (like C99 and later) specify that at least the first 63 characters of an identifier must be significant. However, it's good practice to keep identifiers reasonably short and descriptive.
    *   **Recommendation:** While you *can* create extremely long identifiers, it's often better for readability to stick to names that are meaningful but not excessively verbose. Think about how you'd explain something – you'd use a concise name.

### Examples of Valid and Invalid Identifiers

Let's solidify this with some quick examples. Imagine we are writing a program to manage a library.

**Valid Identifiers:**

*   `book_title`: Represents the title of a book. (Starts with a letter, uses letters and underscore).
*   `memberID_101`: Represents a member's ID. (Starts with a letter, uses letters, digits, and underscore).
*   `totalBooks`: Represents the total count of books. (Starts with a letter, uses mixed case).
*   `_privateVar`: Often used by convention to indicate an internal variable. (Starts with an underscore).
*   `ISBN_978`: Represents an ISBN number.

**Invalid Identifiers:**

*   `123Book`: Starts with a digit. The compiler won't know where to start reading the name.
*   `book title`: Contains a space. The compiler would see "book" and then think "title" is a separate, unknown token.
*   `member-id`: Contains a hyphen, which is not allowed. Use `member_id` instead.
*   `return`: This is a reserved keyword in C. You cannot use it.
*   `@cost`: Contains a special character `@`.

### Why are these rules important? Connecting to Course Outcomes

Understanding these identifier rules directly supports **CO1: Infer a computational problem and develop C programs from them using basic constructs of C language including the control statements.**

*   **Problem Inference:** When you analyze a problem, you identify the key pieces of information you need to store and the actions you need to perform. For example, in a student management system, you'd need to store `studentName`, `studentID`, `gpa`, and perform actions like `addStudent` or `calculateAverageGPA`. The ability to name these clearly and correctly is the first step in translating the problem into code.
*   **Basic Constructs:** Variables are the most fundamental data constructs. Functions are the basic units of action. Arrays (which we'll cover more in Module 2, related to **CO2**) also need identifiers. Every time you declare a variable or define a function, you are using the identifier rules.
*   **Control Statements:** While identifiers themselves don't dictate control flow, the variables you use *within* control statements (like `if`, `while`, `for`) need valid names. For instance, `if (age >= 18)` uses the identifier `age`.

Imagine you're trying to explain how to make tea. You need names for the ingredients: `water`, `teaLeaves`, `sugar`, `milk`. You also need names for the actions: `boilWater`, `addTeaLeaves`, `strain`, `serve`. If you couldn't name these things, your instructions would be impossibly confusing. Identifiers are C's way of allowing us to create clear, understandable instructions for the computer.

Kernighan and Ritchie, in their seminal book "The C Programming Language," emphasize the importance of clear naming for maintainability and readability. Good identifiers are not just about following rules; they are about writing code that humans can understand.

### Naming Conventions and Best Practices

Beyond the strict rules, there are conventions that make your code much more professional and easier to work with.

*   **Descriptive Names:** Always aim for names that clearly indicate the purpose of the variable or function. Instead of `x` or `a`, use `distance` or `speed`. Instead of `proc()`, use `calculateTotal()` or `printReport()`.
*   **Consistency:** Choose a naming style (like `camelCase` for variables and `PascalCase` for functions, or `snake_case` for both) and stick to it throughout your project. This makes your code look organized.
*   **Avoid Ambiguity:** Don't use names that are too similar, especially if they differ only by case or a single character, as this can lead to confusion and errors.
*   **Use Underscores for Separation:** In longer names, underscores can improve readability. For example, `average_monthly_sales` is often easier to read than `averagemonthlysales`.
*   **Constants:** For values that don't change, like mathematical constants or fixed configuration values, it's a common practice to use all uppercase letters with underscores. For example, `const float PI = 3.14159;` or `#define MAX_SIZE 100`.

Think of it like choosing names for your children. You want names that are easy to say, spell, and that you won't regret later!

### Summary: Key Takeaways for Identifiers

Remember these points about identifiers:

*   They are names for variables, functions, etc.
*   Must start with a letter or underscore.
*   Can contain letters, digits, and underscores thereafter.
*   C is case-sensitive! `MyVar` is different from `myvar`.
*   Keywords are forbidden as identifiers.
*   Spaces and most special characters are not allowed.
*   Descriptive and consistent naming is crucial for good programming.

Mastering these rules will set you up for success in writing clear, functional C programs. It’s the first step in being able to express your computational logic effectively.

---

## Sample Questions and Answers

Here are a few questions to test your understanding, covering both conceptual and exam-style thinking:

**Question 1 (Conceptual):** Explain why C is a case-sensitive language and provide an example of how this affects identifier usage.

**Answer:** C is case-sensitive because the compiler distinguishes between uppercase and lowercase letters when interpreting identifiers. This means that `count`, `Count`, and `COUNT` are recognized as three distinct identifiers. For example, if you declare an integer variable `int studentCount = 10;`, and then later try to print it using `printf("%d", studentcount);`, the compiler will produce an error because `studentcount` is not defined – it's considered different from `studentCount`. This sensitivity requires programmers to be meticulous with their casing to avoid errors and ensure their code functions as intended.

**Question 2 (Exam-Oriented):** Which of the following are valid identifiers in C?
    a) `total_marks`
    b) `1st_student`
    c) `my-variable`
    d) `class`
    e) `_counter`
    f) `floatValue`

**Answer:**
    *   **a) `total_marks`**: Valid. Starts with a letter, contains letters and an underscore.
    *   **b) `1st_student`**: Invalid. Starts with a digit.
    *   **c) `my-variable`**: Invalid. Contains a hyphen (`-`), which is not allowed.
    *   **d) `class`**: Invalid. `class` is a reserved keyword in C++. (While not a C keyword, it's a good example of reserved words. In strict C, `class` might be valid, but it's best to avoid it due to common usage in other languages and potential confusion. However, the common C keywords do *not* include `class`. Let's assume for an exam context that standard C keywords are being tested. If `class` *were* a keyword, it would be invalid. As it is not a standard C keyword, technically it might be valid in C. However, to be safe and follow best practices, we avoid it). **Correction for clarity in C:** `class` is NOT a reserved keyword in standard C. It is a keyword in C++. Therefore, in a C context, `class` *is* a valid identifier. This highlights the importance of knowing the specific language's keywords.
    *   **e) `_counter`**: Valid. Starts with an underscore, followed by letters.
    *   **f) `floatValue`**: Valid. Starts with a letter, contains letters.

    *Corrected Answer for `d) class` in C context:* **d) `class`**: Valid in standard C, as it is not a reserved keyword. However, it's good practice to avoid it as it's a keyword in C++.

**Question 3 (Conceptual/Application):** You are writing a program to manage a simple online store. You need to store the price of an item, the quantity in stock, and the name of the item. You also need a function to calculate the total cost of an order. Suggest valid and descriptive identifiers for these.

**Answer:**
*   For the price of an item: `itemPrice` or `price_of_item`
*   For the quantity in stock: `quantityInStock` or `stock_quantity`
*   For the name of the item: `itemName` or `item_name`
*   For the function to calculate total cost: `calculateTotalCost` or `compute_order_total`

These identifiers are descriptive, follow the rules (starting with a letter, containing letters and underscores), and are easy for other programmers (and yourself in the future) to understand. For instance, using `itemPrice` immediately tells you it's about the price of an item, unlike a generic `x` or `val`.

**Question 4 (Exam-Oriented - Pitfall):** A programmer writes the following code snippet:

```c
int rate = 10;
float Rate = 20.5;
printf("Rate is: %f\n", rate);
```

What will be the output, and why?

**Answer:** The output will be:
`Rate is: 10.000000`

This happens because C is case-sensitive. The code declares two different variables: `rate` (an integer) and `Rate` (a float). The `printf` statement is trying to print the value of the variable named `rate` (which is 10). However, it incorrectly uses the format specifier `%f`, which is meant for floating-point numbers. When an integer is printed with `%f`, it is promoted to a float, resulting in `10.000000`. If the intention was to print the float variable `Rate`, the statement should have been `printf("Rate is: %f\n", Rate);`. This illustrates how subtle case differences and incorrect format specifiers can lead to unexpected (but often predictable) behavior.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
