---
title: "Integer Representation"
subject: "FOUNDATIONS OF COMPUTING: FROM HARDWARE ESSENTIALS TO WEB DESIGN"
module: "Module 2: Binary representation of data and numbers"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da2d5"
status: "completed"
scrapedAt: "2026-05-23T17:39:16.527Z"
---
# Module 2: Binary Representation of Data and Numbers - Integer Representation

Welcome, everyone! Today, we're diving into a fundamental concept in computing: how computers understand and work with numbers. Specifically, we'll focus on **Integer Representation**. This might sound a bit technical, but it's the bedrock upon which all our calculations, from simple arithmetic to complex algorithms, are built. Understanding this will directly help us with **CO1** (identifying fundamental IT components and workings) and especially **CO2** (explaining data representations and basic computer functioning).

Think about it: your computer is a marvel of engineering, but at its core, it's just a bunch of electrical switches. These switches can be either ON or OFF. How do we represent something as rich and varied as numbers using just these two states? That's where binary comes in, and today, we're exploring how integers – those whole numbers, both positive and negative – are represented in this binary language.

## The Language of Switches: Bits and Bytes

Before we get into integers, let's quickly recap the building blocks. Everything in a computer is ultimately represented by **bits**, which are binary digits: either a 0 or a 1. These are like tiny light switches. A collection of these bits is grouped together into a **byte**, which typically consists of 8 bits.

Imagine you have a row of 8 light switches. Each switch can be either on or off. How many different combinations can you create? Well, for each switch, you have 2 options. With 8 switches, you have $2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2 = 2^8 = 256$ possible combinations. This is the fundamental idea behind how computers store information – by arranging these bits in specific patterns.

This concept of representing information using bits and bytes is crucial for **CO1** and **CO2**. It’s how data, in its most raw form, is handled by the hardware.

## Representing Positive Integers: The Power of Place Value

So, how do we map our familiar decimal numbers (base-10) to these binary numbers (base-2)? The key is the **place value system**, just like in our everyday decimal system.

In the decimal system, the number 345 means:
*   3 hundreds (3 x $10^2$)
*   4 tens (4 x $10^1$)
*   5 ones (5 x $10^0$)

Binary works exactly the same way, but the base is 2 instead of 10. Each position in a binary number represents a power of 2. Let's take a standard 8-bit representation (a byte) and look at the place values from right to left:

*   $2^0$ (which is 1)
*   $2^1$ (which is 2)
*   $2^2$ (which is 4)
*   $2^3$ (which is 8)
*   $2^4$ (which is 16)
*   $2^5$ (which is 32)
*   $2^6$ (which is 64)
*   $2^7$ (which is 128)

Let's convert a binary number, say `01011010`, into its decimal equivalent. We look at each bit and multiply it by its corresponding place value:

```
   0     1     0     1     1     0     1     0   (Binary)
----- ----- ----- ----- ----- ----- ----- -----
 128    64    32    16     8     4     2     1   (Place Values - Powers of 2)
```

So, `01011010` in binary is:
$(0 \times 128) + (1 \times 64) + (0 \times 32) + (1 \times 16) + (1 \times 8) + (0 \times 4) + (1 \times 2) + (0 \times 1)$
$= 0 + 64 + 0 + 16 + 8 + 0 + 2 + 0$
$= 90$ (in decimal)

This process of converting binary to decimal is a fundamental skill. You'll often be asked to do this in exams to test your understanding of **CO2**.

### Quick Conversion Tip:
To convert a decimal number to binary, you can use successive division by 2, taking the remainders. For example, to convert 90 to binary:

*   90 / 2 = 45 remainder 0
*   45 / 2 = 22 remainder 1
*   22 / 2 = 11 remainder 0
*   11 / 2 = 5 remainder 1
*   5 / 2 = 2 remainder 1
*   2 / 2 = 1 remainder 0
*   1 / 2 = 0 remainder 1

Reading the remainders from bottom to top gives `1011010`. If we need an 8-bit representation, we pad with a leading zero: `01011010`.

**Remember this:** Each bit position has a weight that is a power of 2. The rightmost bit is $2^0$, and the weight increases as you move left. This is a direct application of **CO2**.

## Representing Negative Integers: The Challenge of the Sign

Now, things get a bit more interesting. How do we represent negative numbers? If we only had a way to show positive numbers, computers would be very limited. We need a way to indicate whether a number is positive or negative.

There are a few methods, but the most common and efficient one used in modern computers is **Two's Complement**.

### Method 1: Sign-Magnitude (Simpler, but less practical)

One intuitive way is to dedicate the leftmost bit to represent the sign.
*   If the leftmost bit is **0**, the number is positive.
*   If the leftmost bit is **1**, the number is negative.

Let's consider 8-bit representation again. For a positive number, say +45, it would be `00101101` (since 45 in binary is `101101`, padded with a leading 0 for the sign).

For -45, we would simply flip the sign bit: `10101101`.

**The problem with sign-magnitude?** It's a bit clunky.
1.  **Two zeros:** You have both +0 (`00000000`) and -0 (`10000000`). This is redundant.
2.  **Arithmetic is complex:** Adding a positive and a negative number requires special handling of the sign bit, making the circuitry more complicated.

While conceptually easy to grasp, sign-magnitude isn't ideal for efficient computation. Schneider and Gersting, in "Invitation to Computer Science," emphasize that practical systems opt for more efficient representations.

### Method 2: One's Complement (A step towards Two's Complement)

In one's complement, to get the negative of a number, you flip all the bits.
*   Positive 45: `00101101`
*   Negative 45 (one's complement): Flip all bits of `00101101` to get `11010010`.

This is better than sign-magnitude as it streamlines some operations. However, it still suffers from the **two zeros** problem (+0 is `00000000`, -0 is `11111111`).

### Method 3: Two's Complement (The Winner!)

Two's complement is the dominant method today because it elegantly solves the problems of sign-magnitude and one's complement. It uses a clever trick to handle signs and simplifies arithmetic operations.

**How to get the Two's Complement of a number (to represent its negative):**

1.  **Start with the binary representation of the positive number.**
2.  **Flip all the bits** (0 becomes 1, 1 becomes 0) – this is the one's complement.
3.  **Add 1** to the result.

Let's find the two's complement representation of -45 using 8 bits:

1.  Positive 45: `00101101`
2.  Flip the bits (one's complement): `11010010`
3.  Add 1:
    ```
      11010010
    +        1
    ----------
      11010011
    ```
So, -45 in 8-bit two's complement is `11010011`.

**Why is this so great?**

*   **No duplicate zeros:** There's only one representation for zero (`00000000`).
*   **Simplified Addition:** Adding a positive and a negative number works seamlessly. For instance, adding 5 and -3:
    *   5 in 8-bit: `00000101`
    *   -3 (two's complement):
        *   3: `00000011`
        *   Flip: `11111100`
        *   Add 1: `11111101`
    *   Now add `00000101` + `11111101`:
        ```
          00000101  (5)
        + 11111101  (-3)
        ----------
        100000010
        ```
        If we are working with 8 bits, the leftmost `1` (the 9th bit) is a **carry-out** and is discarded. The result is `00000010`, which is indeed 2! This is a huge win for computer hardware design as it simplifies the arithmetic logic unit (ALU). Englander, in "The Architecture of Computer Hardware, Systems Software, & Networking," highlights this efficiency as a key reason for two's complement's adoption.

**Interpreting Two's Complement Numbers:**

The leftmost bit still indicates the sign (0 for positive, 1 for negative). To find the decimal value of a two's complement number:

*   **If the leftmost bit is 0:** Treat it as a standard unsigned binary number.
*   **If the leftmost bit is 1:** You need to find its magnitude. The easiest way is to convert it back to its positive equivalent by performing the two's complement operation again: flip all bits and add 1. Then, add a minus sign to the result.

Let's interpret `11010011` (our -45 example):
1.  Leftmost bit is 1, so it's negative.
2.  Flip bits: `00101100`
3.  Add 1: `00101101`
4.  Convert to decimal: This is 64 + 16 + 8 + 4 + 1 = 93? Wait, something is wrong. Ah, the place values for negative numbers in two's complement are different!

Let's correct that. For an n-bit two's complement number $b_{n-1}b_{n-2}...b_1b_0$:
*   The value is $-b_{n-1} \times 2^{n-1} + b_{n-2} \times 2^{n-2} + ... + b_1 \times 2^1 + b_0 \times 2^0$.
*   Notice the leftmost bit's place value is negative.

Let's re-evaluate `11010011` (8 bits, so n=8):
*   $b_7 = 1, b_6 = 1, b_5 = 0, b_4 = 1, b_3 = 0, b_2 = 0, b_1 = 1, b_0 = 1$
*   Value = $(-1 \times 2^7) + (1 \times 2^6) + (0 \times 2^5) + (1 \times 2^4) + (0 \times 2^3) + (0 \times 2^2) + (1 \times 2^1) + (1 \times 2^0)$
*   Value = $(-1 \times 128) + (1 \times 64) + (0 \times 32) + (1 \times 16) + (0 \times 8) + (0 \times 4) + (1 \times 2) + (1 \times 1)$
*   Value = $-128 + 64 + 0 + 16 + 0 + 0 + 2 + 1$
*   Value = $-128 + 83 = -45$. Correct!

This understanding is vital for **CO2**. Knowing how to convert between decimal and two's complement is a common exam question. Pay attention to the bit width (e.g., 8-bit, 16-bit, 32-bit) as it affects the range of numbers that can be represented.

**Range of Integers in Two's Complement (for n bits):**

*   The smallest (most negative) number is $-2^{n-1}$.
*   The largest positive number is $2^{n-1} - 1$.

For an 8-bit system (n=8):
*   Smallest: $-2^{8-1} = -2^7 = -128$
*   Largest: $2^{8-1} - 1 = 2^7 - 1 = 128 - 1 = 127$

So, an 8-bit signed integer can represent values from -128 to +127. This range is important to remember.

## Fixed-Point vs. Floating-Point Representation

So far, we've talked about **integers** – whole numbers. But what about numbers with fractional parts, like 3.14 or -0.001? Computers also need to represent these, and they do so using different schemes. The two primary ways are **fixed-point** and **floating-point** representation.

While this module focuses on integers, it's important to know these exist, as they directly relate to **CO2**.

*   **Fixed-Point Representation:** Imagine a decimal number where the decimal point is *always* in the same position. For example, if we agree that there are always 2 digits after the decimal point, then 1234 would be stored as 1234.00, and 567 would be 0567.00. It's simple but limits the range and precision. In binary, this means the "binary point" has a fixed position.
*   **Floating-Point Representation:** This is like scientific notation. A number is represented by a **mantissa** (the significant digits) and an **exponent**. For example, 123,000,000 can be written as $1.23 \times 10^8$. This allows for a much wider range of numbers and greater precision, but it's more complex to implement and can introduce small rounding errors. The IEEE 754 standard is the common way this is done in computers.

For our current topic on integer representation, we'll stick to the whole numbers, but keep in mind that representing all types of numbers requires different techniques.

## How This Relates to Web Design (CO4)

You might be wondering, "How does integer representation in binary relate to building a webpage?" Well, while **CO4** focuses on HTML, CSS, and JavaScript, the underlying principles of data representation are everywhere.

When you write JavaScript code, you're dealing with numbers. For instance, if you're counting items in a shopping cart or calculating a total price, you're working with integers. The JavaScript engine, running on the computer's CPU, uses these binary integer representations to perform these calculations. Even if you don't directly manipulate bits, the way numbers are stored and processed by the computer's hardware, as we've discussed, underpins how your JavaScript code behaves.

For example, if you have a variable `count = 5;` and you increment it `count++;`, the CPU will perform an addition operation on the binary representation of 5. The result will be stored back as the binary representation of 6. Understanding these foundations helps in debugging and understanding potential performance issues, especially when dealing with very large numbers or many computations, which can indirectly affect interactive web pages.

## Summary and Key Takeaways

To wrap up our discussion on integer representation:

*   Computers use the **binary system** (base-2) to represent all data, including numbers.
*   **Positive integers** are represented using place values that are powers of 2.
*   **Negative integers** are most commonly represented using **two's complement**. This method is preferred for its efficiency and the elimination of duplicate zero representations.
*   To find the two's complement of a number, flip all its bits and add 1.
*   The leftmost bit in signed representations (like two's complement) acts as a **sign bit**.
*   The number of bits used (e.g., 8-bit, 16-bit, 32-bit) determines the range of integers that can be represented.

Mastering these concepts is fundamental for understanding how computers process information, directly supporting **CO1** and **CO2**. It’s the silent language that makes all our digital interactions possible.

---

## Sample Questions and Answers

**Q1. Convert the decimal number 100 to an 8-bit binary representation.**

**Answer:**
To convert 100 to binary, we can use successive division by 2:
*   100 / 2 = 50 R 0
*   50 / 2 = 25 R 0
*   25 / 2 = 12 R 1
*   12 / 2 = 6 R 0
*   6 / 2 = 3 R 0
*   3 / 2 = 1 R 1
*   1 / 2 = 0 R 1

Reading the remainders from bottom to top, we get `1100100`.
Since we need an 8-bit representation, we pad with a leading zero: `01100100`.

**Reasoning:** This question tests the fundamental skill of converting decimal to binary, a core aspect of understanding data representation as required by **CO2**.

**Q2. What is the 8-bit two's complement representation of -50?**

**Answer:**
1.  Start with the positive value of 50 in 8-bit binary:
    *   50 in decimal: $32 + 16 + 2 = 2^5 + 2^4 + 2^1$
    *   Binary: `00110010` (for 8 bits)

2.  Find the one's complement by flipping all the bits:
    *   `11001101`

3.  Add 1 to the one's complement:
    *   `11001101 + 1 = 11001110`

So, the 8-bit two's complement representation of -50 is `11001110`.

**Reasoning:** This question directly assesses understanding of the two's complement method for negative integer representation, which is a key part of **CO2**. It's a common exam topic.

**Q3. Explain why two's complement is preferred over sign-magnitude representation for integers in computer systems.**

**Answer:**
Two's complement is preferred over sign-magnitude for several reasons:

1.  **Simplified Arithmetic:** Two's complement allows for uniform addition and subtraction circuits. Adding a positive number and a negative number can be performed using the same hardware as adding two positive numbers. In sign-magnitude, separate logic is needed to handle the sign bits during addition and subtraction, making the circuitry more complex.
2.  **Single Representation for Zero:** In two's complement, there is only one representation for zero (`00000000` in 8 bits). Sign-magnitude has two representations for zero: +0 (`00000000`) and -0 (`10000000`), which is redundant and can complicate comparisons.

These advantages lead to more efficient and simpler hardware design, a crucial aspect of computer architecture relevant to **CO1** and **CO2**.

**Reasoning:** This question probes the conceptual understanding of the "why" behind specific data representations, linking the technical details to practical implications in computer design, directly addressing **CO2**.

**Q4. If a system uses 16-bit two's complement representation, what is the largest positive integer it can store?**

**Answer:**
For an n-bit two's complement system, the largest positive integer is given by the formula $2^{n-1} - 1$.
In this case, n = 16.
Largest positive integer = $2^{16-1} - 1 = 2^{15} - 1$.
$2^{10} = 1024$ (approximately 1K)
$2^{15} = 2^5 \times 2^{10} = 32 \times 1024 = 32768$.
So, the largest positive integer is $32768 - 1 = 32767$.

**Reasoning:** This question tests the knowledge of the range of representable numbers in two's complement, a critical concept for **CO2**. It's a typical recall and calculation question for exams.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
