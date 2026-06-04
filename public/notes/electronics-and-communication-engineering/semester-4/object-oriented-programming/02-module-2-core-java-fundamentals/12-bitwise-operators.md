---
title: "Bitwise Operators"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 2: Core Java Fundamentals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe681"
status: "completed"
scrapedAt: "2026-05-23T17:51:26.422Z"
---
# OBJECT ORIENTED PROGRAMMING - Module 2: Core Java Fundamentals

## Topic: Bitwise Operators

---

### 1. Introduction to Bitwise Operators

Bitwise operators are operators that perform operations on individual bits of binary representations of numbers. In Java, these operators are used to manipulate data at the bit level. They are typically used for low-level programming, such as graphics, encryption, and data compression.

**Key Concept:** Bitwise operations treat their operands as sequences of bits and perform logical operations on corresponding bits.

**Alignment with Course Outcomes:**

*   **CO2 (K3):** Utilize datatypes, operators, control statements, object oriented class, object concepts in Java to develop programs. Bitwise operators are a type of operator that can be used within Java programs to manipulate data.

**Referenced Textbooks:**

*   **Java: The Complete Reference by Herbert Schildt:** Chapter 6, "Operators," often covers bitwise operators in detail.
*   **Java How to Program by Deitel & Deitel:** Chapters on fundamental data types and operators will likely include bitwise operations.
*   **Introduction to Java Programming by Y. Daniel Liang:** Similar to the above, this textbook will cover operator categories.

---

### 2. Types of Bitwise Operators in Java

Java provides the following bitwise operators:

| Operator | Description                             |
| :------- | :-------------------------------------- |
| `&`      | Bitwise AND                             |
| `|`      | Bitwise OR                              |
| `^`      | Bitwise XOR (Exclusive OR)              |
| `~`      | Bitwise Complement (One's Complement) |
| `<<`     | Left Shift                              |
| `>>`     | Signed Right Shift                      |
| `>>>`    | Unsigned Right Shift                    |

**Key Concepts:**

*   **Bitwise AND (`&`):** Performs a logical AND operation on each pair of corresponding bits. The result bit is 1 only if both bits are 1.
*   **Bitwise OR (`|`):** Performs a logical OR operation on each pair of corresponding bits. The result bit is 1 if at least one of the bits is 1.
*   **Bitwise XOR (`^`):** Performs a logical XOR operation on each pair of corresponding bits. The result bit is 1 if the bits are different.
*   **Bitwise Complement (`~`):** Inverts all the bits of its operand. If a bit is 0, it becomes 1, and if it is 1, it becomes 0. This is also known as the one's complement.
*   **Left Shift (`<<`):** Shifts the bits of the left operand to the left by the number of positions specified by the right operand. Vacated bits on the right are filled with zeros.
*   **Signed Right Shift (`>>`):** Shifts the bits of the left operand to the right by the number of positions specified by the right operand. Vacated bits on the left are filled with the sign bit (the most significant bit) of the original number, preserving the sign.
*   **Unsigned Right Shift (`>>>`):** Shifts the bits of the left operand to the right by the number of positions specified by the right operand. Vacated bits on the left are always filled with zeros, regardless of the sign of the original number.

**Referenced Textbooks:**

*   **Java: The Complete Reference by Herbert Schildt:** Provides detailed explanations and examples for each bitwise operator.
*   **Introduction to Java Programming by Y. Daniel Liang:** Offers clear explanations of how these operators work with integer types.
*   **Head First Java by Sierra K.:** Might use more intuitive analogies to explain bitwise operations, making them easier to grasp.

---

### 3. Bitwise AND (`&`)

**Description:** The `&` operator compares each bit of the first operand to the corresponding bit of the second operand. If both bits are 1, the corresponding result bit is set to 1. Otherwise, the result bit is set to 0.

**Truth Table for AND:**

| Bit 1 | Bit 2 | Result |
| :---- | :---- | :----- |
| 0     | 0     | 0      |
| 0     | 1     | 0      |
| 1     | 0     | 0      |
| 1     | 1     | 1      |

**Example:**

Let's consider two integer variables, `a` and `b`.

```java
int a = 10; // Binary: 0000 1010
int b = 7;  // Binary: 0000 0111

int result = a & b; // 0000 1010 & 0000 0111 = 0000 0010
```

In this example, `result` will be `2`.

**Use Cases:**

*   **Masking:** To check if a specific bit is set. For example, `if ((number & 1) == 1)` checks if the least significant bit is 1.
*   **Clearing specific bits:** `number & (~mask)` can be used to clear bits specified by `mask`.

**Referenced Textbooks:**

*   **Java: The Complete Reference by Herbert Schildt:** Chapter 6.
*   **Java How to Program by Deitel & Deitel:** Section on bitwise operators.

---

### 4. Bitwise OR (`|`)

**Description:** The `|` operator compares each bit of the first operand to the corresponding bit of the second operand. If either bit is 1, the corresponding result bit is set to 1. Otherwise, the result bit is set to 0.

**Truth Table for OR:**

| Bit 1 | Bit 2 | Result |
| :---- | :---- | :----- |
| 0     | 0     | 0      |
| 0     | 1     | 1      |
| 1     | 0     | 1      |
| 1     | 1     | 1      |

**Example:**

```java
int a = 10; // Binary: 0000 1010
int b = 7;  // Binary: 0000 0111

int result = a | b; // 0000 1010 | 0000 0111 = 0000 1111
```

In this example, `result` will be `15`.

**Use Cases:**

*   **Setting specific bits:** `number | mask` can be used to set bits specified by `mask`.

**Referenced Textbooks:**

*   **Java: The Complete Reference by Herbert Schildt:** Chapter 6.
*   **Introduction to Java Programming by Y. Daniel Liang:** Explains setting bits using the OR operator.

---

### 5. Bitwise XOR (`^`)

**Description:** The `^` operator compares each bit of the first operand to the corresponding bit of the second operand. If the bits are different, the corresponding result bit is set to 1. Otherwise, the result bit is set to 0.

**Truth Table for XOR:**

| Bit 1 | Bit 2 | Result |
| :---- | :---- | :----- |
| 0     | 0     | 0      |
| 0     | 1     | 1      |
| 1     | 0     | 1      |
| 1     | 1     | 0      |

**Example:**

```java
int a = 10; // Binary: 0000 1010
int b = 7;  // Binary: 0000 0111

int result = a ^ b; // 0000 1010 ^ 0000 0111 = 0000 1101
```

In this example, `result` will be `13`.

**Use Cases:**

*   **Toggling specific bits:** `number ^ mask` can be used to toggle bits specified by `mask`. If a bit in `number` is 1 and the corresponding bit in `mask` is 1, it becomes 0. If it's 0 and the mask bit is 1, it becomes 1.
*   **Swapping two numbers without a temporary variable:**
    ```java
    int x = 5;
    int y = 10;
    x = x ^ y;
    y = x ^ y; // y now holds original value of x
    x = x ^ y; // x now holds original value of y
    ```
*   **Simple encryption/decryption:** XORing a message with a key can encrypt it, and XORing the encrypted message with the same key can decrypt it.

**Referenced Textbooks:**

*   **Java: The Complete Reference by Herbert Schildt:** Chapter 6.
*   **Programming JAVA a Primer by Balagurusamy E:** Often includes examples of XOR for bit manipulation.
*   **Head First Java by Sierra K.:** May present XOR as a way to flip bits.

---

### 6. Bitwise Complement (`~`)

**Description:** The `~` operator inverts every bit of its operand. This is also known as the one's complement. For a signed integer, this operation is closely related to finding the negative of a number using two's complement representation.

**Example:**

```java
int a = 10; // Binary (assuming 8 bits for simplicity): 0000 1010

int result = ~a; // Binary: 1111 0101
```

The binary representation `1111 0101` in two's complement typically represents `-11`.

**How Two's Complement Works (for negative numbers):**

1.  Take the absolute value of the number.
2.  Represent it in binary.
3.  Invert all the bits (one's complement).
4.  Add 1 to the result.

So, `~a` is equivalent to `(-a) - 1`.

**Referenced Textbooks:**

*   **Java: The Complete Reference by Herbert Schildt:** Chapter 6.
*   **Java How to Program by Deitel & Deitel:** Explanation of bitwise complement and its relation to two's complement.

---

### 7. Bitwise Shift Operators

#### 7.1 Left Shift (`<<`)

**Description:** The `<<` operator shifts the bits of the left operand to the left by the number of positions specified by the right operand. The vacated bits on the right are filled with zeros.

**Example:**

```java
int a = 10; // Binary: 0000 1010

int result = a << 1; // Shift left by 1: 0001 0100 (Decimal: 20)
int result2 = a << 2; // Shift left by 2: 0010 1000 (Decimal: 40)
```

**Effect:** Shifting left by `n` positions is equivalent to multiplying the number by `2^n`.

**Referenced Textbooks:**

*   **Java: The Complete Reference by Herbert Schildt:** Chapter 6.
*   **Introduction to Java Programming by Y. Daniel Liang:** Provides examples of left shift for multiplication.

#### 7.2 Signed Right Shift (`>>`)

**Description:** The `>>` operator shifts the bits of the left operand to the right by the number of positions specified by the right operand. The vacated bits on the left are filled with the sign bit of the original number. This preserves the sign of the number.

**Example:**

**Positive Number:**

```java
int a = 10; // Binary: 0000 1010

int result = a >> 1; // Shift right by 1: 0000 0101 (Decimal: 5)
```

**Negative Number (using two's complement):**

Let's consider `-10`.
1. Absolute value is 10: `0000 1010`
2. Invert: `1111 0101`
3. Add 1: `1111 0110` (This is -10 in 8-bit two's complement)

```java
int b = -10; // Binary: 1111 0110

int result_b = b >> 1; // Shift right by 1. Sign bit is 1.
                         // Result: 1111 1011 (Decimal: -5)
```

**Effect:** Shifting right by `n` positions is equivalent to dividing the number by `2^n` (integer division).

**Referenced Textbooks:**

*   **Java: The Complete Reference by Herbert Schildt:** Chapter 6.
*   **Java How to Program by Deitel & Deitel:** Explains signed right shift and its behavior with negative numbers.

#### 7.3 Unsigned Right Shift (`>>>`)

**Description:** The `>>>` operator shifts the bits of the left operand to the right by the number of positions specified by the right operand. The vacated bits on the left are **always** filled with zeros, regardless of the sign of the original number.

**Example:**

**Positive Number:**

```java
int a = 10; // Binary: 0000 1010

int result = a >>> 1; // Shift right by 1, fill with 0: 0000 0101 (Decimal: 5)
```
(Same as signed right shift for positive numbers)

**Negative Number:**

Let's consider `-10`.
Binary (8-bit two's complement): `1111 0110`

```java
int b = -10; // Binary: 1111 0110

int result_b = b >>> 1; // Shift right by 1, fill with 0: 0111 1101 (Decimal: 125)
```

**Use Cases:**

*   **Treating integers as unsigned bit patterns:** Useful in specific algorithms or data processing where the sign bit should not be propagated.

**Referenced Textbooks:**

*   **Java: The Complete Reference by Herbert Schildt:** Chapter 6.
*   **Introduction to Java Programming by Y. Daniel Liang:** Highlights the difference between `>>` and `>>>`.

---

### 8. Bitwise Assignment Operators

Java also provides compound assignment operators that combine a bitwise operator with the assignment operator.

| Operator | Equivalent to |
| :------- | :------------ |
| `&=`     | `a = a & b`   |
| `|=`     | `a = a | b`   |
| `^=`     | `a = a ^ b`   |
| `<<=`    | `a = a << b`  |
| `>>=`    | `a = a >> b`  |
| `>>>=`   | `a = a >>> b` |

**Example:**

```java
int x = 10; // 0000 1010
int y = 7;  // 0000 0111

x &= y;     // x = x & y;  x becomes 2 (0000 0010)
```

**Referenced Textbooks:**

*   **Java: The Complete Reference by Herbert Schildt:** Chapter 6.

---

### 9. Bitwise Operators and `boolean` Type

**Important Point to Remember:** Bitwise operators cannot be applied to the `boolean` type in Java. This is a crucial distinction from logical operators (`&&`, `||`, `!`).

**Referenced Textbooks:**

*   **Java How to Program by Deitel & Deitel:** Explicitly states this restriction.
*   **Head First Java by Sierra K.:** Emphasizes the difference between bitwise and logical operators.

---

### 10. Practical Applications and Examples

*   **Graphics:** Manipulating pixel data by setting or clearing individual bits representing color components.
*   **Networking:** Packing and unpacking data for efficient transmission.
*   **File Compression:** Algorithms often use bitwise operations to reduce file sizes.
*   **Cryptography:** Bitwise operations are fundamental to many encryption algorithms.
*   **Low-level hardware control:** Interfacing with hardware often requires direct bit manipulation.

**Example: Checking if a number is Even or Odd**

The least significant bit (LSB) of a binary number determines if it's even or odd.
*   If LSB is 0, the number is even.
*   If LSB is 1, the number is odd.

We can use the bitwise AND operator with 1 to check this:

```java
public class CheckEvenOdd {
    public static void main(String[] args) {
        int number1 = 10; // Binary: ...00001010
        int number2 = 7;  // Binary: ...00000111

        // Check number1
        if ((number1 & 1) == 0) {
            System.out.println(number1 + " is even."); // This will be printed
        } else {
            System.out.println(number1 + " is odd.");
        }

        // Check number2
        if ((number2 & 1) == 0) {
            System.out.println(number2 + " is even.");
        } else {
            System.out.println(number2 + " is odd."); // This will be printed
        }
    }
}
```

**Example: Setting and Clearing Bits**

Let's say we have a variable representing a set of flags, where each bit corresponds to a particular option.

```java
public class BitwiseFlags {
    public static void main(String[] args) {
        // Assume flags:
        // 0001 (1) - READ_PERMISSION
        // 0010 (2) - WRITE_PERMISSION
        // 0100 (4) - EXECUTE_PERMISSION

        int permissions = 0; // No permissions initially

        // Grant read permission
        int READ_PERMISSION = 1;
        permissions = permissions | READ_PERMISSION; // permissions is now 1 (0001)

        // Grant write permission
        int WRITE_PERMISSION = 2;
        permissions = permissions | WRITE_PERMISSION; // permissions is now 3 (0011)

        // Check if write permission is granted
        int CHECK_WRITE = 2; // Same as WRITE_PERMISSION
        if ((permissions & CHECK_WRITE) != 0) {
            System.out.println("Write permission is granted."); // This will be printed
        }

        // Revoke write permission
        int CLEAR_WRITE = ~WRITE_PERMISSION; // ~0010 becomes 1101 (assuming 4 bits for illustration)
        permissions = permissions & CLEAR_WRITE; // 0011 & 1101 = 0001
        System.out.println("Permissions after revoking write: " + permissions); // Prints 1

        // Toggle execute permission
        int EXECUTE_PERMISSION = 4;
        permissions = permissions ^ EXECUTE_PERMISSION; // 0001 ^ 0100 = 0101 (permissions is now 5)
        System.out.println("Permissions after toggling execute: " + permissions); // Prints 5

        permissions = permissions ^ EXECUTE_PERMISSION; // 0101 ^ 0100 = 0001 (permissions is back to 1)
        System.out.println("Permissions after toggling execute again: " + permissions); // Prints 1
    }
}
```

**Referenced Textbooks:**

*   **Java: The Complete Reference by Herbert Schildt:** Chapter 6 provides various practical examples.
*   **Programming JAVA a Primer by Balagurusamy E:** Often uses bitwise operators for bit manipulation examples.
*   **Core Java: An Integrated Approach by Nageswararao R.:** May cover bitwise operations in the context of low-level data manipulation.

---

### 11. Important Points to Remember

*   Bitwise operators work on the binary representation of integer types (`byte`, `short`, `int`, `long`) and `char`. They do not work on `float`, `double`, or `boolean`.
*   When performing bitwise operations, Java implicitly promotes `byte`, `short`, and `char` operands to `int` before the operation. The result is an `int`.
*   Signed right shift (`>>`) preserves the sign of the number, while unsigned right shift (`>>>`) always fills with zeros.
*   Left shift (`<<`) by `n` is equivalent to multiplication by `2^n`.
*   Right shift (`>>` or `>>>`) by `n` is equivalent to division by `2^n` (integer division).
*   Bitwise operators are different from logical operators (`&&`, `||`). Logical operators work on `boolean` values and can short-circuit.

**Alignment with Course Outcomes:**

*   **CO2 (K3):** Understanding and applying these operators directly contributes to utilizing operators effectively in Java programs.

---

### 12. Practice Questions

**Question 1:**
What will be the value of `x` after the following code snippet?

```java
int x = 5;  // Binary: 0101
x = x ^ 3;  // Binary of 3: 0011
```
a) 5
b) 6
c) 7
d) 8

**Question 2:**
What is the result of `~0` in Java? (Assume 32-bit integers)
a) 0
b) 1
c) -1
d) An error

**Question 3:**
If `num = 20` (Binary: `0001 0100`), what is the result of `num >>> 2`?
a) 5
b) -5
c) 10
d) 15

**Question 4:**
Which bitwise operator can be used to check if the least significant bit of an integer is set?
a) `|`
b) `&`
c) `^`
d) `~`

**Question 5:**
Explain the difference between `>>` and `>>>` operators with an example using a negative number.

---

### 13. Answers to Practice Questions

**Answer 1:**
`x = 5` (0101)
`3`   (0011)
`x ^ 3` -> `0101 ^ 0011` = `0110`
`0110` in decimal is 6.
**Correct Answer: b) 6**

**Answer 2:**
`0` in 32-bit binary is `0000...0000` (32 zeros).
`~0` inverts all the bits to `1111...1111` (32 ones).
In two's complement representation, this is the value `-1`.
**Correct Answer: c) -1**

**Answer 3:**
`num = 20` (Binary: `0001 0100`)
`num >>> 2`: Shift right by 2 positions, filling with zeros.
`0001 0100` >>> 2  becomes `0000 0101`
`0000 0101` in decimal is 5.
**Correct Answer: a) 5**

**Answer 4:**
The bitwise AND operator (`&`) with 1 isolates the least significant bit. If the LSB is 1, the result of `num & 1` will be 1; otherwise, it will be 0.
**Correct Answer: b) &**

**Answer 5:**
The `>>` (signed right shift) operator shifts bits to the right and fills the vacated leftmost bits with the sign bit of the original number. This preserves the sign.
The `>>>` (unsigned right shift) operator shifts bits to the right and always fills the vacated leftmost bits with zeros, regardless of the original sign.

**Example:**
Consider `num = -10`.
In 8-bit two's complement, -10 is `1111 0110`.

*   **`num >> 1`:**
    `1111 0110` >> 1. The sign bit is 1, so it's filled with 1.
    Result: `1111 1011`. In two's complement, this is -5.

*   **`num >>> 1`:**
    `1111 0110` >>> 1. The vacated bit is filled with 0.
    Result: `0111 1101`. In decimal, this is 125.

This clearly shows that `>>` maintains the negative sign, while `>>>` treats the number as an unsigned pattern, resulting in a large positive value.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
