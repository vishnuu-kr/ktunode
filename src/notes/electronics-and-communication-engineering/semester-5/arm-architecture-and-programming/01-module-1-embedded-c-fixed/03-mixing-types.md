---
title: "mixing types"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 1: Embedded C: Fixed"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feada"
status: "completed"
scrapedAt: "2026-05-23T17:53:11.213Z"
---
# ARM Architecture and Programming: Module 1 - Embedded C: Fixed-Point Arithmetic

## Topic: Mixing Types in Embedded C

This module explores the use of C in embedded systems, focusing on fixed-point arithmetic. A crucial aspect of this is understanding how different data types interact when used together in calculations. This topic delves into type conversions, potential pitfalls, and best practices for managing mixed-type expressions in embedded C, particularly relevant for ARM Cortex-M microcontrollers.

### 1. Introduction to Data Types in Embedded C

Embedded systems often deal with limited resources, making efficient use of data types crucial. C provides various built-in data types, each with specific memory requirements and precision:

*   **Integral Types:**
    *   `char`: Typically 8 bits, can be signed or unsigned. Used for character data and small integer values.
    *   `short` / `short int`: Typically 16 bits, signed.
    *   `int`: Typically 16 or 32 bits, signed. The "natural" integer size of the processor.
    *   `long` / `long int`: Typically 32 bits, signed.
    *   `long long` / `long long int`: Typically 64 bits, signed.
*   **Floating-Point Types:**
    *   `float`: Single-precision floating-point (typically 32 bits).
    *   `double`: Double-precision floating-point (typically 64 bits).

**Important Note:** The exact size of `int`, `short`, and `long` can vary between architectures and compilers. For ARM Cortex-M processors, `int` is usually 32 bits. (Lewis, Ch. 3)

### 2. The Concept of Type Mixing

Type mixing occurs when operations are performed between variables or constants of different data types. C has rules for how these different types are converted to a common type before the operation is executed. Understanding these rules is vital to prevent unexpected results and ensure correct program behavior.

### 3. Implicit Type Conversions (Usual Arithmetic Conversions)

C employs a set of rules, often referred to as "usual arithmetic conversions," to handle mixed-type expressions. The general principle is to convert operands to a common, "wider" type to maintain precision.

**Key Principles of Usual Arithmetic Conversions:**

1.  **Integer Promotions:**
    *   Operands of type `char`, `short`, bit-fields, and enumerated types are first converted to `int` if `int` can represent all possible values of the original type.
    *   If `int` cannot represent all values, they are converted to `unsigned int`.
    *   (Lewis, Ch. 3)

2.  **Floating-Point Promotions:**
    *   If one operand is `float` and the other is `double`, the `float` is converted to `double`.

3.  **Common Type Determination:**
    *   If, after integer and floating-point promotions, the operands have different types, the following hierarchy is used to determine the common type:
        *   If either operand is `double`, the other is converted to `double`.
        *   Else if either operand is `float`, the other is converted to `float`.
        *   Else if either operand is `long double`, the other is converted to `long double`. (Less common in embedded systems due to resource constraints)
        *   Else (both are integral types):
            *   If both are unsigned, the one with the smaller rank is converted to the type of the other.
            *   If one is unsigned and the other is signed, and the unsigned type's rank is greater than or equal to the signed type's rank, the signed operand is converted to the unsigned type.
            *   If the signed type can represent all values of the unsigned type, the unsigned operand is converted to the signed type.
            *   Otherwise, both operands are converted to the unsigned version of the signed type.
    *   (Lewis, Ch. 3), (Yiu, Ch. 5)

**Example:**

```c
unsigned char uchar_var = 10;
int int_var = 5;
float float_var = 2.5f;

// Example 1: unsigned char + int
int result1 = uchar_var + int_var;
// uchar_var is promoted to int.
// Both operands are int. The operation is performed as int + int.
// result1 will be 15.

// Example 2: int + float
float result2 = int_var + float_var;
// int_var is converted to float.
// Both operands are float. The operation is performed as float + float.
// result2 will be 7.5f.

// Example 3: unsigned char + float
float result3 = uchar_var + float_var;
// uchar_var is promoted to int.
// Then int_var is converted to float.
// Both operands are float. The operation is performed as float + float.
// result3 will be 12.5f.
```

### 4. Explicit Type Conversions (Casting)

While implicit conversions handle many situations, you can also explicitly convert a value from one type to another using a **cast operator**. This is often necessary to:

*   Force a specific conversion.
*   Prevent unintended implicit conversions.
*   Perform operations in a particular order.

**Syntax:** `(target_type) expression`

**Example:**

```c
int a = 10;
float b = 3.0f;
float result = (float)a / b; // Explicitly cast 'a' to float before division

// Without the cast:
// float result_implicit = a / b; // 'a' would be implicitly converted to float anyway here.
// But consider:
int division_result = a / (int)b; // Explicitly cast 'b' to int before division. This performs integer division.

// Fixed-point context example (conceptual)
// Assume Q15 format (1 sign bit, 15 fractional bits)
// Representing 0.5 as a Q15 integer: 0x4000
int q15_val = 0x4000; // Represents 0.5
float float_val = 0.25f;

// If we want to multiply them:
// Option 1: Convert Q15 to float
float result_float = (float)q15_val / 32768.0f * float_val; // Convert Q15 to float, then multiply
// This might be less efficient due to floating-point operations.

// Option 2: Convert float to Q15 (requires careful scaling)
// int q15_float = (int)(float_val * 32768.0f); // Scale float to Q15 integer
// int result_q15 = q15_val * q15_float / 32768; // Multiply Q15 integers and scale back

// Option 3: Direct multiplication of Q15 and float (implicit conversion)
// float result_mixed = q15_val * float_val; // q15_val converted to float first

```

### 5. Pitfalls and Considerations in Mixed-Type Operations

Mixing types, especially with fixed-point arithmetic, can lead to subtle errors if not handled carefully.

#### 5.1. Data Loss and Precision Reduction

*   **Floating-point to Integer Conversion:** When a floating-point number is converted to an integer (either implicitly or explicitly), the fractional part is truncated (not rounded).
    ```c
    float f = 9.9f;
    int i = f; // i becomes 9
    ```
*   **Wider to Narrower Type Conversion:** Converting a value from a wider type to a narrower type can result in overflow or loss of data if the value exceeds the range of the narrower type.
    ```c
    long large_num = 100000;
    short small_num = large_num; // Potential data loss or overflow if short cannot hold 100000
    ```
    (Lewis, Ch. 3)

#### 5.2. Integer Division with Floating-Point Operands

When an operation involves both integer and floating-point types, the integer operands are converted to floating-point before the operation. However, if you *intend* integer division, you must ensure both operands are integers *before* the division.

```c
int numerator = 10;
float denominator = 3.0f;

// Incorrect for integer division:
float result_float_div = numerator / denominator; // denominator is implicitly converted to float, then float division occurs (3.33...)

// Correct for float division:
float result_float_div_correct = (float)numerator / denominator; // numerator converted to float, then float division

// If you want integer division behavior:
// You MUST cast the FLOAT to INT BEFORE division
int result_int_div = numerator / (int)denominator; // denominator (3.0f) becomes 3, then 10 / 3 = 3 (integer division)
```

#### 5.3. Signed vs. Unsigned Conversions

The rules for converting between signed and unsigned integers can be particularly tricky. When a signed integer is converted to an unsigned integer, the value is preserved if it can be represented in the unsigned type. Otherwise, the value is modified by adding or subtracting one more than the maximum value of the unsigned type until it falls within the range.

```c
int signed_val = -5;
unsigned int unsigned_val = 5;

// Example of signed to unsigned conversion:
unsigned int converted_val = signed_val; // -5 becomes a very large positive number (e.g., 0xFFFFFFFB on a 32-bit system)
                                          // because it's represented using two's complement bit pattern.

// Example of unsigned to signed conversion:
int signed_converted_val = unsigned_val; // 5 remains 5
```

(Lewis, Ch. 3)

#### 5.4. Fixed-Point Specific Issues

When mixing fixed-point (often represented as integers with an implicit scaling factor) with floating-point or other integer types, you must be meticulous about scaling.

*   **Multiplying two Q15 numbers:** `Q15_A * Q15_B` results in a value that needs to be shifted right by 15 bits to maintain the Q15 format.
    ```c
    // Q15_A represents 0.5 (0x4000)
    // Q15_B represents 0.25 (0x2000)
    int q15_a = 0x4000;
    int q15_b = 0x2000;

    // Direct multiplication without scaling
    int intermediate_result = q15_a * q15_b; // This is 0x80000000 (a large number, bit pattern for -2^31)
                                             // The actual value is 0.5 * 0.25 = 0.125.
                                             // In Q15, 0.125 would be 0x1000.

    // Correct multiplication with scaling
    int result_q15 = (q15_a * q15_b) >> 15; // Shift right by 15 to get the correct Q15 value
                                            // intermediate_result >> 15 = 0x80000000 >> 15 = 0x1000 (which is 4096 decimal, representing 0.125)

    // Mixing with float:
    float float_val = 0.75f;
    // Convert Q15 to float for calculation
    float q15_a_as_float = (float)q15_a / 32768.0f; // 0.5f
    float mixed_result_float = q15_a_as_float * float_val; // 0.5f * 0.75f = 0.375f
    ```
    (Lewis, Ch. 9), (Zhu, Ch. 6)

### 6. Best Practices for Mixing Types

1.  **Be Explicit with Casts:** Whenever there's potential ambiguity or a need to control the conversion process, use explicit casts. This makes your code more readable and less prone to errors.
2.  **Promote to the Widest Type:** In general, it's safer to promote smaller types to wider types (e.g., `char` to `int`, `float` to `double`) before performing operations to minimize loss of precision.
3.  **Understand the Implicit Conversion Rules:** Familiarize yourself thoroughly with C's usual arithmetic conversions.
4.  **Avoid Unsigned/Signed Mixing When Possible:** If you can maintain a consistent signedness throughout your calculations, it often simplifies things and reduces potential conversion errors.
5.  **Be Careful with Integer Division:** If you need integer division, ensure both operands are integers *before* the division operation. If one operand is a float, cast it to an integer.
6.  **Test Thoroughly:** Especially in embedded systems, test your code with a variety of input values to ensure it behaves as expected. Pay attention to edge cases and boundary conditions.
7.  **Fixed-Point Scaling is Paramount:** When working with fixed-point, always ensure your intermediate and final results are correctly scaled. This often involves explicit shifts or multiplications/divisions by the scaling factor.
    *   When multiplying two fixed-point numbers of the same format (e.g., Qm.n), the result will have 2n fractional bits. You need to shift right by n to bring it back to Qm.n format.
    *   When dividing, the process is more complex and might involve converting to a wider format or using specific algorithms to maintain precision.

### 7. Practice Questions

1.  Consider the following C code snippet. What will be the value of `result`?
    ```c
    unsigned char a = 200;
    char b = -50;
    int result = a + b;
    ```
    *(Hint: Think about integer promotion and signed/unsigned conversion rules.)*

2.  What is the difference between implicit and explicit type conversion? Provide an example for each.

3.  You have a sensor that provides readings as `float` values, but your control algorithm requires integer inputs. You need to convert the `float` readings to `int` for calculations. If a reading is `15.7`, what will the `int` value be after conversion? If a reading is `-3.2`, what will the `int` value be?

4.  Write a C code snippet to perform integer division of `15` by `4` using a `float` variable for the divisor. Ensure the result is an integer and not a floating-point number.

5.  Suppose you are working with Q1.15 fixed-point numbers (1 sign bit, 15 fractional bits). You have two Q1.15 variables, `q15_x = 0x6000` (representing 0.75) and `q15_y = 0x2000` (representing 0.25). Write the C code to multiply them and store the result back in a Q1.15 variable, `q15_result`.

### 8. Answers to Practice Questions

1.  **Answer:** `result` will be `150`.
    *   `a` (unsigned char) is promoted to `int` (200).
    *   `b` (char) is promoted to `int` (-50).
    *   The operation is `200 + (-50)`, which equals `150`. Both operands are treated as `int` and the result is an `int`.

2.  **Answer:**
    *   **Implicit Type Conversion:** Happens automatically by the compiler based on C's conversion rules when different data types are mixed in an expression or assignment.
        ```c
        int i = 10;
        float f = 3.14f;
        float result_implicit = i + f; // 'i' is implicitly converted to float before addition.
        ```
    *   **Explicit Type Conversion (Casting):** Performed by the programmer using the cast operator `(target_type) expression`.
        ```c
        int i = 10;
        float f = 3.14f;
        int result_explicit = (int)(i / f); // 'f' is explicitly converted to int before division (truncating 3.14 to 3).
        ```

3.  **Answer:**
    *   If the `float` reading is `15.7`, the `int` value will be `15` (fractional part is truncated).
    *   If the `float` reading is `-3.2`, the `int` value will be `-3` (fractional part is truncated).

4.  **Answer:**
    ```c
    int numerator = 15;
    float float_divisor = 4.0f;

    // Perform integer division by casting the float divisor to int
    int integer_division_result = numerator / (int)float_divisor;

    // Alternatively, you could cast the numerator too if desired, but it's not strictly necessary for integer division here
    // int integer_division_result = (int)numerator / (int)float_divisor;

    // If you were to do float division and then convert to int:
    // float float_result = (float)numerator / float_divisor; // This would be 3.75
    // int truncated_float_result = (int)float_result; // This would be 3
    ```

5.  **Answer:**
    ```c
    // Assuming Q1.15 format (32-bit integer representation)
    // 0x6000 = 24576 decimal. For Q1.15, this is 24576 / 32768 = 0.75
    int q15_x = 0x6000;
    // 0x2000 = 8192 decimal. For Q1.15, this is 8192 / 32768 = 0.25
    int q15_y = 0x2000;

    // Multiplication of two Q1.15 numbers:
    // The product of two Q1.15 numbers has 30 fractional bits.
    // To get back to Q1.15 format, we need to shift right by 15 bits.
    // For example: (0.75) * (0.25) = 0.1875
    // In Q1.15, 0.1875 * 32768 = 6144.
    // 6144 in hex is 0x1800.

    // Calculation:
    // The direct multiplication results in a 64-bit value if we promote to long long to avoid intermediate overflow:
    long long intermediate_product = (long long)q15_x * q15_y;

    // Now, shift right by 15 to get the Q1.15 result.
    // Note: If intermediate_product is negative, the behavior of right shift depends on whether it's arithmetic or logical.
    // For signed integers, >> is typically an arithmetic shift. We want to maintain the Q format correctly.
    // A safer approach for fixed-point multiplication and division is to use dedicated libraries or careful bit manipulation.
    // For simple positive multiplication, a right shift works.
    int q15_result = (int)(intermediate_product >> 15);

    // Let's verify:
    // intermediate_product = 24576 * 8192 = 201326592
    // 201326592 >> 15 = 6144
    // 6144 decimal is 0x1800 hex.
    // 0x1800 represents 6144 / 32768 = 0.1875, which is correct.
    ```

---

### 9. Summary and Key Takeaways

*   Mixing data types in C involves implicit conversions governed by "usual arithmetic conversions" or explicit conversions via casting.
*   Implicit conversions aim to preserve precision by promoting operands to a common, wider type.
*   Be cautious of data loss or precision reduction when converting from wider to narrower types, or from floating-point to integer types (truncation).
*   Integer division requires both operands to be integers *before* the division.
*   When working with fixed-point arithmetic, careful scaling is crucial, especially during multiplication and division. Always account for the loss of fractional bits in multiplication by shifting.
*   Explicit casting improves code clarity and helps prevent unintended conversions.
*   Thorough testing is essential to validate mixed-type operations in embedded systems.

This topic is fundamental for writing robust and predictable embedded C code, especially when dealing with sensor data, calculations involving different precisions, and implementing fixed-point arithmetic for efficiency on ARM Cortex-M processors.

**Referenced Learning Outcomes:**
*   **CO1:** Use the features of C that are frequently used in embedded systems (Knowledge Level: K3) - *This topic directly addresses C's type system and its usage in calculations, a core feature in embedded C.*
*   **CO2:** Explain a programmer’s view of processor architecture (Knowledge Level: K2) - *Understanding data types and their sizes is part of the programmer's view of the processor's capabilities.*
*   **CO3:** Choose between programming at the level of assembly or C as appropriate (Knowledge Level: K3) - *Efficiently mixing types in C can sometimes avoid the need for assembly language for performance-critical arithmetic, influencing this choice.*

**Referenced Textbooks:**
*   Lewis, D. W. (2015). *Fundamentals of Embedded Software with the ARM Cortex M3* (2nd ed.). Pearson. (Primarily Ch. 3 for basic C types and conversions)
*   Yiu, J. (2014). *The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors* (3rd ed.). Elsevier. (Can provide context on register sizes and data handling relevant to C types)
*   Zhu, Y. (2018). *Embedded systems with ARM Cortex M Microcontrollers in Assembly and C* (3rd ed.). E-man Press. (Likely covers fixed-point arithmetic and C nuances for embedded)

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
