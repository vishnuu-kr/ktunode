---
title: "Operators  - Arithmetic Operators"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe680"
status: "completed"
scrapedAt: "2026-05-23T17:51:25.726Z"
---
## OBJECT ORIENTED PROGRAMMING: Module 2: Core Java Fundamentals: Operators - Arithmetic Operators

---

### **1. Introduction to Operators in Java**

*   **Definition:** Operators are special symbols that perform operations on one or more operands (variables or values). They are the building blocks of expressions in Java.
*   **Purpose:** Operators allow us to manipulate data, perform calculations, and control the flow of our programs.
*   **Types of Operators in Java:**
    *   Arithmetic Operators
    *   Relational Operators
    *   Logical Operators
    *   Assignment Operators
    *   Increment and Decrement Operators
    *   Bitwise Operators
    *   Conditional (Ternary) Operator
    *   Instanceof Operator
    *   Shift Operators
    *   `String` Concatenation Operator
*   **Operator Precedence and Associativity:** Operators have defined precedence and associativity rules that determine the order in which operations are performed within an expression. Understanding these rules is crucial for writing correct and predictable code. (Refer to Herbert Schildt's "Java: The Complete Reference" for detailed precedence tables).

---

### **2. Arithmetic Operators**

Arithmetic operators are used to perform mathematical calculations. They operate on numerical data types (integers and floating-point numbers).

#### **2.1. Binary Arithmetic Operators**

These operators require two operands.

| Operator | Description                               | Example                                    | Result |
| :------- | :---------------------------------------- | :----------------------------------------- | :----- |
| `+`      | Addition                                  | `int sum = 10 + 5;`                        | `15`   |
| `-`      | Subtraction                               | `int difference = 10 - 5;`                 | `5`    |
| `*`      | Multiplication                            | `int product = 10 * 5;`                    | `50`   |
| `/`      | Division                                  | `int quotient = 10 / 5;`                   | `2`    |
| `%`      | Modulus (Remainder of division)           | `int remainder = 10 % 3;`                  | `1`    |

**Important Notes on Division (`/`):**

*   **Integer Division:** When both operands are integers, the division results in an integer. Any fractional part is discarded (truncated).
    *   Example: `7 / 2` results in `3`, not `3.5`.
    *   (Deitel & Deitel, "Java How to Program" emphasizes this behavior for integer division.)
*   **Floating-Point Division:** If at least one operand is a floating-point type (`float` or `double`), the result will be a floating-point number.
    *   Example: `7.0 / 2` results in `3.5`.
    *   Example: `7 / 2.0` results in `3.5`.

**Example Usage:**

```java
public class ArithmeticDemo {
    public static void main(String[] args) {
        int a = 15;
        int b = 4;

        System.out.println("a + b = " + (a + b));      // Output: a + b = 19
        System.out.println("a - b = " + (a - b));      // Output: a - b = 11
        System.out.println("a * b = " + (a * b));      // Output: a * b = 60
        System.out.println("a / b = " + (a / b));      // Output: a / b = 3 (Integer division)
        System.out.println("a % b = " + (a % b));      // Output: a % b = 3 (Remainder of 15 divided by 4)

        double c = 15.0;
        double d = 4.0;

        System.out.println("c / d = " + (c / d));      // Output: c / d = 3.75 (Floating-point division)
    }
}
```

**Connecting to Course Outcomes:**

*   **CO2:** This topic directly addresses the utilization of operators in Java to develop programs. Understanding arithmetic operators is fundamental for performing calculations within Java programs.

#### **2.2. Unary Arithmetic Operators**

These operators require only one operand.

| Operator | Description                     | Example        | Result |
| :------- | :------------------------------ | :------------- | :----- |
| `+`      | Unary Plus (Indicates positivity) | `int x = +10;` | `10`   |
| `-`      | Unary Minus (Negates value)     | `int y = -x;`  | `-10`  |

**Important Notes on Unary Plus (`+`):**

*   The unary plus operator simply returns the value of its operand. It's often used for clarity or when an expression requires a positive sign.
*   It is rarely used explicitly because numerical literals are positive by default.

**Important Notes on Unary Minus (`-`):**

*   The unary minus operator is used to negate the value of its operand. It changes the sign of a number.

**Example Usage:**

```java
public class UnaryArithmeticDemo {
    public static void main(String[] args) {
        int num1 = 25;
        int num2 = -num1; // Unary minus
        int num3 = +num1; // Unary plus

        System.out.println("num1: " + num1);  // Output: num1: 25
        System.out.println("num2: " + num2);  // Output: num2: -25
        System.out.println("num3: " + num3);  // Output: num3: 25
    }
}
```

**Connecting to Course Outcomes:**

*   **CO2:** Similar to binary arithmetic operators, unary operators are essential for numerical manipulation in Java programs.

---

### **3. Key Concepts and Definitions**

*   **Operand:** A value or variable that an operator acts upon.
*   **Operator:** A symbol that performs a specific operation.
*   **Expression:** A combination of operands and operators that evaluates to a single value.
*   **Integer Division:** Division where both operands are integers. The fractional part of the result is discarded.
*   **Floating-Point Division:** Division where at least one operand is a floating-point type (`float` or `double`). The result is a floating-point number.
*   **Modulus Operator (`%`):** Returns the remainder of an integer division. This is useful for tasks like checking if a number is even or odd, or for distributing items into groups.
*   **Unary Operator:** An operator that operates on a single operand.
*   **Binary Operator:** An operator that operates on two operands.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### **4. Examples from Textbooks/References**

*   **Herbert Schildt's "Java: The Complete Reference":** Schildt thoroughly explains operator precedence and associativity, which is critical for understanding how complex arithmetic expressions are evaluated. He provides numerous examples of how to use arithmetic operators in various contexts.
*   **Deitel & Deitel's "Java How to Program, Early Objects":** Deitel and Deitel focus on practical application, showcasing how arithmetic operators are used in simple calculations and as building blocks for more complex algorithms. They often use examples involving calculating areas, sums, and averages.
*   **Y. Daniel Liang's "Introduction to Java Programming":** Liang's approach often involves step-by-step problem-solving, demonstrating how arithmetic operators are used to translate mathematical formulas into Java code. For instance, he might show how to calculate compound interest or convert temperatures.

---

### **5. Practice Questions and Exercises**

**Question 1:**
What will be the output of the following Java code snippet?

```java
int x = 10;
int y = 3;
System.out.println(x / y);
System.out.println(x % y);
```

**Answer:**
The output will be:
```
3
1
```
*   `x / y` (10 / 3) performs integer division, resulting in 3.
*   `x % y` (10 % 3) calculates the remainder of 10 divided by 3, which is 1.

**Question 2:**
Consider the following code:

```java
double price = 19.99;
int quantity = 3;
double totalCost = price * quantity;
System.out.println(totalCost);
```
What is the data type of `totalCost` and what will be the output?

**Answer:**
*   The data type of `totalCost` will be `double`.
*   The output will be: `59.97`
    *   This is because `price` is a `double`, and when multiplied by an `int`, the result is promoted to a `double`, preserving the decimal part.

**Question 3:**
Write a Java program that calculates the area of a rectangle given its length and width, both as integers. The program should print the calculated area.

**Example Input:**
Length = 12
Width = 5

**Expected Output:**
Area of the rectangle: 60

**Solution:**

```java
public class RectangleArea {
    public static void main(String[] args) {
        int length = 12;
        int width = 5;

        int area = length * width;

        System.out.println("Area of the rectangle: " + area);
    }
}
```

**Question 4:**
If you have `int count = 7;`, what is the result of `count++ + count;`? Explain your reasoning.

**Answer:**
The result will be `15`. Here's why:
1.  The expression `count++ + count;` involves the pre-increment operator (`++`) and the addition operator (`+`).
2.  Java's operator precedence and associativity rules come into play. In this case, the `count++` (post-increment) operation is evaluated first.
3.  **Post-increment (`count++`):** The *current value* of `count` (which is 7) is used in the expression, and *then* `count` is incremented to 8.
4.  So, the expression effectively becomes `7 + 8`.
5.  The addition is performed, resulting in `15`.
6.  Finally, the value of `count` is updated to 8 after the entire expression has been evaluated.

**Important Point to Remember:** Be mindful of the difference between pre-increment (`++count`) and post-increment (`count++`) when they are part of a larger expression. The order of evaluation and when the increment happens is crucial.

---

### **6. Important Points to Remember**

*   **Type Promotion:** When arithmetic operations involve operands of different numeric types, Java automatically promotes the "smaller" type to the "larger" type before performing the operation to prevent loss of precision. For example, `int + double` will result in a `double`.
*   **Integer Division Truncation:** Always remember that integer division in Java truncates any fractional part. If you need decimal results from division, ensure at least one of the operands is a floating-point type.
*   **Modulus Operator for Divisibility:** The modulus operator (`%`) is a powerful tool for checking divisibility. If `a % b == 0`, it means `a` is perfectly divisible by `b`.
*   **Unary Operators:** While unary plus is generally not explicitly used, unary minus is essential for negating values.
*   **Operator Precedence:** For complex expressions, refer to operator precedence tables to ensure you understand the order of operations. Parentheses `()` can be used to override default precedence and enforce a specific order.

---

### **7. Alignment with Course Outcomes**

*   **CO2: Utilise datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs.**
    *   This topic directly contributes to CO2 by teaching the fundamental arithmetic operators used in Java for calculations and data manipulation, which are essential for developing any program that involves numerical operations.
*   **Knowledge Level (K3 - Application):** By working through examples and practice questions, students should be able to apply their understanding of arithmetic operators to solve basic programming problems. They can use these operators to implement mathematical formulas and logic within their Java programs.

---