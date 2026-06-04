---
title: "Operators - Arithmetic, Bitwise, Relational, Boolean Logical, Assignment, Conditional (Ternary)"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 1: Introduction to Java: Structure of a simple java program"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac91"
status: "completed"
scrapedAt: "2026-05-20T16:26:56.877Z"
---
# OBJECT ORIENTED PROGRAMMING - Module 1: Introduction to Java - Operators

## Topic: Operators in Java

### Introduction

This module covers the fundamental operators in Java. Operators are special symbols that perform specific operations on one, two, or three operands, and then return a result. Understanding operators is crucial for writing any Java program as they are used to perform calculations, make comparisons, manipulate data, and control program flow.

### Learning Outcomes

Upon completion of this module, you will be able to:

*   Understand the different types of operators in Java.
*   Use arithmetic operators to perform mathematical calculations.
*   Manipulate bits using bitwise operators.
*   Compare values using relational operators.
*   Evaluate logical expressions using boolean logical operators.
*   Assign values to variables using assignment operators.
*   Use the conditional (ternary) operator for concise decision-making.

### 1. Arithmetic Operators

Arithmetic operators are used to perform mathematical calculations.

*   **Key Concepts & Definitions:**

    *   `+` (Addition): Adds two operands.
    *   `-` (Subtraction): Subtracts the second operand from the first.
    *   `*` (Multiplication): Multiplies two operands.
    *   `/` (Division): Divides the first operand by the second.
    *   `%` (Modulus): Returns the remainder of a division operation.
    *   `++` (Increment): Increases the value of a variable by 1. (Prefix and Postfix)
    *   `--` (Decrement): Decreases the value of a variable by 1. (Prefix and Postfix)

*   **Examples:**

    ```java
    int a = 10;
    int b = 5;

    System.out.println("a + b = " + (a + b)); // Output: a + b = 15
    System.out.println("a - b = " + (a - b)); // Output: a - b = 5
    System.out.println("a * b = " + (a * b)); // Output: a * b = 50
    System.out.println("a / b = " + (a / b)); // Output: a / b = 2
    System.out.println("a % b = " + (a % b)); // Output: a % b = 0

    int c = 5;
    System.out.println("c++ = " + (c++)); // Postfix increment: Output: c++ = 5 (c becomes 6 after this line)
    System.out.println("c = " + c);         // Output: c = 6
    int d = 5;
    System.out.println("++d = " + (++d)); // Prefix increment: Output: ++d = 6 (d becomes 6 before this line)
    ```

*   **Important Points to Remember:**

    *   Division by zero results in `ArithmeticException`.
    *   The modulus operator (%) returns the remainder, useful for checking divisibility.
    *   Be aware of the difference between prefix and postfix increment/decrement operators.

### 2. Bitwise Operators

Bitwise operators perform operations on individual bits of data.  They operate on integer operands.

*   **Key Concepts & Definitions:**

    *   `&` (Bitwise AND): Performs a bitwise AND operation.
    *   `|` (Bitwise OR): Performs a bitwise OR operation.
    *   `^` (Bitwise XOR): Performs a bitwise XOR operation.
    *   `~` (Bitwise Complement): Inverts the bits of an operand.
    *   `<<` (Left Shift): Shifts the bits of an operand to the left.
    *   `>>` (Right Shift): Shifts the bits of an operand to the right (signed).
    *   `>>>` (Unsigned Right Shift): Shifts the bits of an operand to the right (unsigned - fills with 0s).

*   **Examples:**

    ```java
    int a = 5;   // Binary: 00000101
    int b = 3;   // Binary: 00000011

    System.out.println("a & b = " + (a & b)); // Output: a & b = 1 (Binary: 00000001)
    System.out.println("a | b = " + (a | b)); // Output: a | b = 7 (Binary: 00000111)
    System.out.println("a ^ b = " + (a ^ b)); // Output: a ^ b = 6 (Binary: 00000110)
    System.out.println("~a = " + (~a));   // Output: ~a = -6 (Binary: 11111010 - Two's complement representation)
    System.out.println("a << 2 = " + (a << 2)); // Output: a << 2 = 20 (Binary: 00010100 - multiplies by 2^2 = 4)
    System.out.println("a >> 1 = " + (a >> 1)); // Output: a >> 1 = 2 (Binary: 00000010 - divides by 2)
    System.out.println("a >>> 1 = " + (a >>> 1)); // Output: a >>> 1 = 2 (Binary: 00000010)

    int negativeNumber = -5;  //Binary: 11111011 (Two's Complement)
    System.out.println("negativeNumber >> 1 = " + (negativeNumber >> 1)); // Output: -3 (11111101 - Signed Right Shift)
    System.out.println("negativeNumber >>> 1 = " + (negativeNumber >>> 1)); //Output: 2147483645 (01111111111111111111111111111101 - Unsigned Right Shift)
    ```

*   **Important Points to Remember:**

    *   Bitwise operators work on the binary representation of numbers.
    *   Left shift multiplies by powers of 2, while right shift divides by powers of 2.
    *   The unsigned right shift `>>>` is useful for ensuring positive results when shifting negative numbers.
    *   Understanding Two's complement is crucial for negative number bitwise operations.

### 3. Relational Operators

Relational operators are used to compare two values and return a boolean result (true or false).

*   **Key Concepts & Definitions:**

    *   `==` (Equal to): Checks if two operands are equal.
    *   `!=` (Not equal to): Checks if two operands are not equal.
    *   `>` (Greater than): Checks if the first operand is greater than the second.
    *   `<` (Less than): Checks if the first operand is less than the second.
    *   `>=` (Greater than or equal to): Checks if the first operand is greater than or equal to the second.
    *   `<=` (Less than or equal to): Checks if the first operand is less than or equal to the second.

*   **Examples:**

    ```java
    int a = 10;
    int b = 5;

    System.out.println("a == b: " + (a == b)); // Output: a == b: false
    System.out.println("a != b: " + (a != b)); // Output: a != b: true
    System.out.println("a > b: " + (a > b));   // Output: a > b: true
    System.out.println("a < b: " + (a < b));   // Output: a < b: false
    System.out.println("a >= b: " + (a >= b)); // Output: a >= b: true
    System.out.println("a <= b: " + (a <= b)); // Output: a <= b: false
    ```

*   **Important Points to Remember:**

    *   Relational operators always return a boolean value (`true` or `false`).
    *   Be careful when comparing floating-point numbers for equality due to potential precision issues.  Use a tolerance range instead.  For example: `Math.abs(a - b) < 0.00001` to check if two floats are "close enough".
    *   `==` compares object references. To compare the *content* of objects, use the `.equals()` method.

### 4. Boolean Logical Operators

Boolean logical operators are used to combine or modify boolean expressions.

*   **Key Concepts & Definitions:**

    *   `&&` (Logical AND): Returns true if both operands are true.
    *   `||` (Logical OR): Returns true if at least one operand is true.
    *   `!` (Logical NOT): Inverts the boolean value of an operand.
    *   `&` (Boolean Logical AND): Similar to `&&`, but *always* evaluates both operands.
    *   `|` (Boolean Logical OR): Similar to `||`, but *always* evaluates both operands.
    *   `^` (Boolean Logical XOR): Returns true if the operands are different, false if they are the same.

*   **Examples:**

    ```java
    boolean a = true;
    boolean b = false;

    System.out.println("a && b: " + (a && b)); // Output: a && b: false
    System.out.println("a || b: " + (a || b)); // Output: a || b: true
    System.out.println("!a: " + (!a));     // Output: !a: false
    System.out.println("a & b: " + (a & b));   // Output: a & b: false
    System.out.println("a | b: " + (a | b));   // Output: a | b: true
    System.out.println("a ^ b: " + (a ^ b));   // Output: a ^ b: true


    // Short-circuiting example:
    int x = 5;
    if (x > 10 && (x / 0) > 1) {  //(x / 0) will NOT be evaluated because x > 10 is false
       System.out.println("This will not be printed.");
    }

    if (x < 10 & (x / 0) > 1) { //(x / 0) WILL be evaluated, causing an ArithmeticException.
        System.out.println("This will ALSO not be printed.");
    }
    ```

*   **Important Points to Remember:**

    *   `&&` and `||` are *short-circuiting* operators, meaning they only evaluate the second operand if necessary.  This can improve performance and prevent errors (like dividing by zero).
    *   `&` and `|` *always* evaluate both operands.
    *   `!` is a unary operator that inverts the boolean value.

### 5. Assignment Operators

Assignment operators are used to assign values to variables.

*   **Key Concepts & Definitions:**

    *   `=` (Assignment): Assigns the value of the right operand to the left operand.
    *   `+=` (Add and assign): Adds the right operand to the left operand and assigns the result to the left operand.
    *   `-=` (Subtract and assign): Subtracts the right operand from the left operand and assigns the result to the left operand.
    *   `*=` (Multiply and assign): Multiplies the left operand by the right operand and assigns the result to the left operand.
    *   `/=` (Divide and assign): Divides the left operand by the right operand and assigns the result to the left operand.
    *   `%=` (Modulus and assign): Calculates the modulus of the left operand by the right operand and assigns the result to the left operand.
    *   `&=` (Bitwise AND and assign): Performs a bitwise AND operation between the left and right operands and assigns the result to the left operand.
    *   `|=` (Bitwise OR and assign): Performs a bitwise OR operation between the left and right operands and assigns the result to the left operand.
    *   `^=` (Bitwise XOR and assign): Performs a bitwise XOR operation between the left and right operands and assigns the result to the left operand.
    *   `<<=` (Left shift and assign): Shifts the bits of the left operand to the left by the number of bits specified by the right operand and assigns the result to the left operand.
    *   `>>=` (Right shift and assign): Shifts the bits of the left operand to the right by the number of bits specified by the right operand and assigns the result to the left operand.
    *   `>>>=` (Unsigned right shift and assign): Shifts the bits of the left operand to the right by the number of bits specified by the right operand, filling with zeros, and assigns the result to the left operand.

*   **Examples:**

    ```java
    int a = 10;

    a += 5; // a = a + 5;   a is now 15
    System.out.println("a += 5: " + a); // Output: a += 5: 15

    a -= 3; // a = a - 3;   a is now 12
    System.out.println("a -= 3: " + a); // Output: a -= 3: 12

    a *= 2; // a = a * 2;   a is now 24
    System.out.println("a *= 2: " + a); // Output: a *= 2: 24

    a /= 4; // a = a / 4;   a is now 6
    System.out.println("a /= 4: " + a); // Output: a /= 4: 6

    a %= 2; // a = a % 2;   a is now 0
    System.out.println("a %= 2: " + a); // Output: a %= 2: 0

    a = 5; //Reset a
    a &= 3; // a = a & 3;   a is now 1
    System.out.println("a &= 3: " + a); // Output: a &= 3: 1

    a = 5; // Reset a
    a |= 3;  // a = a | 3;   a is now 7
    System.out.println("a |= 3: " + a); // Output: a |= 3: 7

    a = 5;  // Reset a
    a ^= 3; // a = a ^ 3;   a is now 6
    System.out.println("a ^= 3: " + a); // Output: a ^= 3: 6

    a = 5; // Reset a
    a <<= 2; // a = a << 2;  a is now 20
    System.out.println("a <<= 2: " + a); // Output: a <<= 2: 20

    a = 5;  // Reset a
    a >>= 1; // a = a >> 1;  a is now 2
    System.out.println("a >>= 1: " + a); // Output: a >>= 1: 2

    a = -5;  // Reset a
    a >>>= 1; // a = a >>> 1; a is now 2147483645
    System.out.println("a >>>= 1: " + a); // Output: a >>>= 1: 2147483645
    ```

*   **Important Points to Remember:**

    *   Assignment operators provide a shorthand way to perform an operation and assign the result back to the variable.
    *   Ensure the data types are compatible when using assignment operators.

### 6. Conditional (Ternary) Operator

The conditional operator is a shorthand way to write a simple `if-else` statement.

*   **Key Concepts & Definitions:**

    *   `condition ? expression1 : expression2`
    *   If the `condition` is true, `expression1` is evaluated and returned.
    *   If the `condition` is false, `expression2` is evaluated and returned.

*   **Examples:**

    ```java
    int a = 10;
    int b = 5;

    int max = (a > b) ? a : b; // max will be assigned the value of a (10) because a > b is true.
    System.out.println("Max: " + max); // Output: Max: 10

    String message = (a % 2 == 0) ? "Even" : "Odd"; // message will be assigned "Even" since a is even.
    System.out.println("Message: " + message); // Output: Message: Even
    ```

*   **Important Points to Remember:**

    *   The ternary operator can make code more concise, but it should be used judiciously to avoid making code harder to read.
    *   It is often used for simple conditional assignments.

### Practice Questions & Exercises

1.  **Write a Java program to calculate the area and perimeter of a rectangle using arithmetic operators.  The length and width are input by the user.**

    ```java
    import java.util.Scanner;

    public class Rectangle {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);

            System.out.print("Enter the length of the rectangle: ");
            double length = scanner.nextDouble();

            System.out.print("Enter the width of the rectangle: ");
            double width = scanner.nextDouble();

            double area = length * width;
            double perimeter = 2 * (length + width);

            System.out.println("Area of the rectangle: " + area);
            System.out.println("Perimeter of the rectangle: " + perimeter);

            scanner.close();
        }
    }
    ```

2.  **Write a Java program to check if a number is even or odd using the modulus operator and a ternary operator.**

    ```java
    import java.util.Scanner;

    public class EvenOdd {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);

            System.out.print("Enter an integer: ");
            int number = scanner.nextInt();

            String result = (number % 2 == 0) ? "Even" : "Odd";

            System.out.println(number + " is " + result);

            scanner.close();
        }
    }
    ```

3.  **Given `int x = 10; int y = 3;`, what are the values of x and y after executing `x = x ^ y; y = x ^ y; x = x ^ y;`?  Explain the bitwise logic.**

    *   **Answer:** This code snippet swaps the values of `x` and `y` using bitwise XOR.

        *   Initially: `x = 10 (1010)`, `y = 3 (0011)`
        *   `x = x ^ y;`:  `x = 1010 ^ 0011 = 1001 (9)`
        *   `y = x ^ y;`:  `y = 1001 ^ 0011 = 1010 (10)`
        *   `x = x ^ y;`:  `x = 1001 ^ 1010 = 0011 (3)`

        *   Finally: `x = 3`, `y = 10`

4.  **Explain the difference between `&&` and `&` operators in Java.**

    *   **Answer:** `&&` is a *short-circuiting* logical AND operator. It only evaluates the second operand if the first operand is true. `&` is a bitwise AND operator (when applied to integers) and a boolean logical AND operator (when applied to booleans) and *always* evaluates both operands.

5.  **What happens if you divide by zero in Java? How can you prevent this?**

    *   **Answer:** Dividing by zero in Java will throw an `ArithmeticException`. You can prevent this by checking if the divisor is zero before performing the division, using an `if` statement.  Alternatively, use a try-catch block to handle the exception.

### Conclusion

Understanding and utilizing Java operators effectively is essential for building robust and efficient programs. This module provided a comprehensive overview of various operator types, including arithmetic, bitwise, relational, boolean logical, assignment, and the conditional (ternary) operator. By mastering these operators, you will be well-equipped to perform a wide range of operations and solve complex problems in your Java projects. Remember to practice consistently and refer to the Java documentation for further details and advanced usage.
