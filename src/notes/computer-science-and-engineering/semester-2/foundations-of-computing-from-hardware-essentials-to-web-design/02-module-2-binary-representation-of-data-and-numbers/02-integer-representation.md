---
title: "Integer Representation"
subject: "FOUNDATIONS OF COMPUTING: FROM HARDWARE ESSENTIALS TO WEB DESIGN"
module: "Module 2: Binary representation of data and numbers"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5df9"
status: "completed"
scrapedAt: "2026-05-20T16:34:14.916Z"
---
Alright everyone, welcome back to Foundations of Computing! Today, we're diving deep into the second module, specifically focusing on **Integer Representation**. This is a really fundamental topic, and understanding it is crucial because, as we'll see, everything a computer does ultimately boils down to manipulating numbers, specifically in binary.

Think about it: the amazing software, the beautiful websites, the complex games – they all start with raw data. And how do we represent that data inside the computer? That’s where our journey into binary representation begins. Today, we're going to nail down how computers handle whole numbers, or **integers**.

---

## Module 2: Binary Representation of Data and Numbers

### Topic: Integer Representation

Remember CO1 (Identify the fundamental components and the working of an IT environment) and CO2 (Explain the data representations, CPU architectures, and the basic functioning of a computer)? Understanding integer representation is directly linked to both. We're learning *how* data is represented, which is a core component of how computers function.

---

### The Need for Binary: Why Not Decimal?

We humans are comfortable with the decimal system (base-10), with its ten digits (0-9). But computers, at their most basic level, operate on electrical signals that are either "on" or "off." These two states are perfect for representing binary digits, or **bits**. A '0' can represent "off" or low voltage, and a '1' can represent "on" or high voltage.

So, instead of ten different voltage levels, we have just two. This simplicity is what makes digital electronics so reliable and cost-effective. As Schneider and Gersting mention in "Invitation to Computer Science," this binary nature is a foundational aspect of all digital systems.

---

### Understanding Positional Notation

Before we jump into binary, let's quickly revisit how our familiar decimal system works. It's based on **positional notation**. In a number like 345:

*   The '5' is in the ones place ($5 \times 10^0$)
*   The '4' is in the tens place ($4 \times 10^1$)
*   The '3' is in the hundreds place ($3 \times 10^2$)

The value of a digit depends on its position. The same principle applies to binary, but instead of powers of 10, we use powers of 2.

---

### Unsigned Integer Representation: The Simplest Form

Let's start with the most straightforward way to represent positive whole numbers: **unsigned integers**. These are numbers where we don't need to worry about positive or negative signs.

Imagine you have a string of bits, say 8 bits. What does this represent?

Let's take an 8-bit example: `01011011`

In binary, each position represents a power of 2, starting from the rightmost bit (the **Least Significant Bit** or LSB) as $2^0$, then $2^1$, $2^2$, and so on, up to $2^{n-1}$ for an n-bit number.

For our 8-bit number `01011011`:

*   Rightmost bit (LSB): 1 is in the $2^0$ position. Value: $1 \times 2^0 = 1 \times 1 = 1$
*   Next bit: 1 is in the $2^1$ position. Value: $1 \times 2^1 = 1 \times 2 = 2$
*   Next bit: 0 is in the $2^2$ position. Value: $0 \times 2^2 = 0 \times 4 = 0$
*   Next bit: 1 is in the $2^3$ position. Value: $1 \times 2^3 = 1 \times 8 = 8$
*   Next bit: 1 is in the $2^4$ position. Value: $1 \times 2^4 = 1 \times 16 = 16$
*   Next bit: 0 is in the $2^5$ position. Value: $0 \times 2^5 = 0 \times 32 = 0$
*   Next bit: 1 is in the $2^6$ position. Value: $1 \times 2^6 = 1 \times 64 = 64$
*   Leftmost bit (MSB): 0 is in the $2^7$ position. Value: $0 \times 2^7 = 0 \times 128 = 0$

To get the total decimal value, we sum these up: $1 + 2 + 0 + 8 + 16 + 0 + 64 + 0 = \mathbf{91}$.

So, the unsigned binary number `01011011` represents the decimal number 91.

**How many different numbers can we represent with n bits?** Since each bit can be either 0 or 1, we have 2 choices for each bit. For n bits, that's $2 \times 2 \times ... \times 2$ (n times), which equals $2^n$.

*   With 8 bits, we can represent $2^8 = 256$ different values.
*   Since these are *unsigned*, these values range from 0 to $2^n - 1$. For 8 bits, this is 0 to 255.

**Relatable Example:** Imagine you have 8 light switches in a row. Each switch can be either on (1) or off (0). How many different combinations of on/off states can you create? It's 2 choices for the first switch, 2 for the second, and so on, giving you $2^8 = 256$ total combinations. Each combination can represent a unique number from 0 up to 255.

**Exam Tip:** Be ready to convert between binary and decimal for unsigned integers. They might give you a binary number and ask for its decimal equivalent, or vice-versa. And remember that $2^0 = 1$, not 0 – that's a common little mistake!

---

### Signed Integer Representation: Handling the Negative

Now, what about negative numbers? Computers need to represent both positive and negative integers. This is where things get a bit more interesting. There are several ways to do this, but the most common and practically used method in modern computers is **Two's Complement**.

Let's look at a couple of methods:

#### 1. Sign-Magnitude Representation (Historical Context, Less Common)

In this method, the leftmost bit (the Most Significant Bit or MSB) is designated as the **sign bit**.
*   If the sign bit is 0, the number is positive.
*   If the sign bit is 1, the number is negative.

The remaining bits represent the magnitude (the absolute value) of the number.

**Example with 8 bits:**

*   `01011011`: Sign bit is 0 (positive). The magnitude is `1011011`, which is 91 in decimal. So, this represents +91.
*   `11011011`: Sign bit is 1 (negative). The magnitude is `1011011`, which is 91 in decimal. So, this represents -91.

**Why isn't this the standard?**
*   **Two representations for zero:** Both `00000000` (+0) and `10000000` (-0) represent zero, which is redundant.
*   **Complicated arithmetic:** Adding or subtracting numbers requires checking signs and performing different operations, making the circuitry more complex.

This is why, as Irv Englander points out in "The Architecture of Computer Hardware, Systems Software, & Networking," most modern systems opt for more efficient representations.

#### 2. Two's Complement Representation (The Dominant Method)

This is the workhorse of signed integer representation in virtually all modern computers. It’s clever because it simplifies arithmetic operations.

**How does it work?**

For an n-bit system:
*   **Positive numbers:** Are represented just like unsigned integers. The MSB is 0. The range for positive numbers is from 0 up to $2^{n-1} - 1$.
*   **Negative numbers:** Are represented in a special way. The MSB is 1, indicating a negative number.

**To find the two's complement representation of a negative number (-X):**

1.  **Find the binary representation of the positive equivalent (X).** Make sure it fits within the n bits.
2.  **Invert all the bits** (change 0s to 1s and 1s to 0s). This is called the **one's complement**.
3.  **Add 1** to the result.

**Example: Represent -91 using 8 bits.**

1.  Positive 91 in 8 bits is `01011011`.
2.  Invert the bits (one's complement): `10100100`
3.  Add 1: `10100100` + `1` = `10100101`.

So, `10100101` in 8-bit two's complement represents -91.

**What about zero?** `00000000` represents 0. There's only one representation for zero, which is good!

**What's the range for n-bit two's complement?**
*   The most positive number is $2^{n-1} - 1$.
*   The most negative number is $-2^{n-1}$.

**For 8 bits (n=8):**
*   Range: $-2^{8-1}$ to $2^{8-1} - 1$, which is $-2^7$ to $2^7 - 1$.
*   This means -128 to +127.
*   Notice the range isn't symmetric: there's one more negative number than positive numbers.

**Why is this so good for arithmetic?**
Let's add `+5` and `-3` in 8-bit two's complement.
*   `+5` is `00000101`
*   `-3`:
    1.  `+3` is `00000011`
    2.  Invert: `11111100`
    3.  Add 1: `11111101` (this is -3)

Now, add them:
```
  00000101  (+5)
+ 11111101  (-3)
----------
  100000010
```
If we take only the lower 8 bits, we get `00000010`. This is the binary representation of +2! It worked perfectly, just like regular addition, without needing special sign checks. The carry-out from the MSB is simply discarded. This is the magic of two's complement.

**How to convert a two's complement binary number back to decimal?**

If the MSB is 0, it's positive, and you convert it as an unsigned number.
If the MSB is 1, it's negative. You can use the same process:
1.  Invert all the bits.
2.  Add 1.
3.  Convert the resulting positive binary number to decimal.
4.  Put a negative sign in front of it.

**Example: Convert `11111010` (8-bit two's complement) to decimal.**

1.  MSB is 1, so it's negative.
2.  Invert bits: `00000101`
3.  Add 1: `00000110`
4.  Convert `00000110` to decimal: It's 6.
5.  So, `11111010` represents **-6**.

**Another way to think about the value of a two's complement number:**

For an n-bit number $b_{n-1}b_{n-2}...b_1b_0$:
*   If $b_{n-1}$ is 0 (positive), the value is $b_{n-1}2^{n-1} + b_{n-2}2^{n-2} + ... + b_12^1 + b_02^0$.
*   If $b_{n-1}$ is 1 (negative), the value is $-b_{n-1}2^{n-1} + b_{n-2}2^{n-2} + ... + b_12^1 + b_02^0$.
    *   Notice the MSB has a *negative* weight.

**Example: `10100101` (8-bit two's complement)**
This is $1 \times (-2^7) + 0 \times 2^6 + 1 \times 2^5 + 0 \times 2^4 + 0 \times 2^3 + 1 \times 2^2 + 0 \times 2^1 + 1 \times 2^0$
$= 1 \times (-128) + 0 \times 64 + 1 \times 32 + 0 \times 16 + 0 \times 8 + 1 \times 4 + 0 \times 2 + 1 \times 1$
$= -128 + 0 + 32 + 0 + 0 + 4 + 0 + 1$
$= -128 + 37 = -91$.
This formula is also very useful for understanding and verification!

**Exam Tip:** Two's complement is critical. You absolutely *must* know how to convert between decimal and two's complement binary, and how to find the two's complement of a number. Understand the range of numbers representable with a given number of bits. For CO2, this is directly related to how the CPU handles data.

---

### Fixed-Width Representation and Overflow

Computers use fixed-width representations for integers. This means there's a set number of bits (like 8, 16, 32, or 64 bits) allocated for each integer.

What happens if you try to store a number that's too large or too small for the allocated bits? This is called **overflow**.

**Example with 8-bit unsigned integers:**
*   Maximum value is 255 (`11111111`).
*   If you try to add 1 to 255, you get 256.
*   In 8-bit binary, `11111111` + `1` = `100000000`.
*   The extra '1' on the left is carried out and discarded because we only have 8 bits.
*   The result in 8 bits is `00000000`, which is 0! This is an overflow.

**Example with 8-bit two's complement:**
*   Maximum positive value is 127 (`01111111`).
*   If you add `01111111` (127) and `1` (1):
    ```
      01111111  (+127)
    + 00000001  ( +1)
    ----------
      10000000
    ```
    The result is `10000000`. In 8-bit two's complement, this is -128. So, adding 1 to 127 resulted in -128! This is an overflow.

**Key Point:** Overflow is a silent error. The computer doesn't usually stop; it just wraps around. Understanding overflow is important for writing reliable code, especially when dealing with calculations that might exceed the limits of the data type.

---

### Why is this relevant to Web Design (CO4)?

While CO4 focuses on web development (HTML, CSS, JavaScript), understanding these foundational concepts of data representation is crucial for the "foundations" part of our course title.

*   **JavaScript Numbers:** JavaScript internally uses a 64-bit floating-point representation for all numbers, but it also has bitwise operators that operate on 32-bit signed integers using two's complement. When you perform bitwise operations in JavaScript, the number is temporarily converted to a 32-bit signed integer, the operation is performed, and then the result is converted back to a 64-bit floating-point number. This means you can encounter overflow or unexpected behavior if you're not aware of these underlying representations.
*   **Data Validation:** When users input numbers into web forms, you need to validate them. Understanding the potential range of integer values and how they might be represented can help you write more robust validation logic to prevent errors and security issues. For example, if a system expects a positive 16-bit integer, you'd need to check if the input is within the range of 0 to 65535.

So, even though you might not be manually converting binary to decimal in your daily web development tasks, the *principles* of integer representation underpin how numbers are handled by the programming languages and systems you use.

---

### Summary and Key Takeaways

*   Computers use binary (base-2) because it maps directly to electrical states (on/off).
*   **Unsigned integers** represent only non-negative numbers. An n-bit unsigned integer can represent $2^n$ values, from 0 to $2^n - 1$.
*   **Signed integers** represent both positive and negative numbers.
*   **Two's Complement** is the standard method for signed integer representation.
    *   Positive numbers are represented as usual.
    *   Negative numbers (-X) are found by taking the binary of X, inverting all bits (one's complement), and adding 1.
    *   The MSB is the sign bit (0 for positive, 1 for negative).
    *   An n-bit two's complement system can represent numbers from $-2^{n-1}$ to $2^{n-1} - 1$.
*   **Overflow** occurs when a number is too large or too small to be represented by the allocated bits, leading to wrap-around behavior.
*   Understanding these concepts helps explain how data is processed by the CPU (CO2) and is indirectly relevant to programming languages used in web development (CO4).

---

### Sample Questions and Answers

**Question 1: Convert the unsigned binary number `110101` to its decimal equivalent.**

**Answer:**
To convert `110101` to decimal, we use positional notation with powers of 2:
*   `1` is in the $2^5$ position: $1 \times 32 = 32$
*   `1` is in the $2^4$ position: $1 \times 16 = 16$
*   `0` is in the $2^3$ position: $0 \times 8 = 0$
*   `1` is in the $2^2$ position: $1 \times 4 = 4$
*   `0` is in the $2^1$ position: $0 \times 2 = 0$
*   `1` is in the $2^0$ position: $1 \times 1 = 1$

Total decimal value = $32 + 16 + 0 + 4 + 0 + 1 = \mathbf{53}$.

---

**Question 2: What is the 8-bit two's complement representation of the decimal number -42?**

**Answer:**
1.  **Find the binary for positive 42.**
    *   42 in decimal.
    *   Largest power of 2 less than or equal to 42 is 32 ($2^5$).
    *   $42 - 32 = 10$.
    *   Largest power of 2 less than or equal to 10 is 8 ($2^3$).
    *   $10 - 8 = 2$.
    *   Largest power of 2 less than or equal to 2 is 2 ($2^1$).
    *   $2 - 2 = 0$.
    *   So, 42 is $32 + 8 + 2 = 2^5 + 2^3 + 2^1$.
    *   In 8 bits: `00101010`

2.  **Invert the bits (one's complement):**
    `00101010` becomes `11010101`.

3.  **Add 1:**
    `11010101` + `1` = `11010110`.

Therefore, the 8-bit two's complement representation of -42 is **`11010110`**.

---

**Question 3: Explain why two's complement is the preferred method for representing signed integers in computers.**

**Answer:**
Two's complement is preferred for several key reasons:
1.  **Simplified Arithmetic:** It allows for uniform addition and subtraction circuitry. Positive and negative numbers can be added using the same hardware logic, which significantly simplifies the design of the Arithmetic Logic Unit (ALU) in the CPU (CO2). There's no need for separate logic to handle signs during addition/subtraction.
2.  **Single Representation for Zero:** Unlike sign-magnitude representation, two's complement has only one way to represent zero (`0000...00`), avoiding redundancy.
3.  **Consistent Range:** While not perfectly symmetric (e.g., for 8 bits, -128 to +127), the range is well-defined and efficient for calculations.

These points highlight how data representation directly impacts the internal workings and efficiency of the computer's hardware.

---

**Question 4: What is overflow, and what is a potential consequence of it in a 4-bit two's complement system when adding 6 and 3?**

**Answer:**
**Overflow** is an error condition that occurs when the result of an arithmetic operation is too large (positive overflow) or too small (negative overflow) to be represented by the fixed number of bits allocated for that data type.

In a 4-bit two's complement system:
*   The range is from $-2^{4-1}$ to $2^{4-1} - 1$, which is $-2^3$ to $2^3 - 1$, or **-8 to +7**.

Let's add 6 and 3:
*   Decimal 6 in 4-bit two's complement is `0110` (since 6 is positive, MSB is 0).
*   Decimal 3 in 4-bit two's complement is `0011` (since 3 is positive, MSB is 0).

Adding them:
```
  0110  (+6)
+ 0011  (+3)
------
  1001
```
The result is `1001`.

**Potential Consequence:**
In a 4-bit two's complement system, `1001` represents -7.
So, adding 6 and 3 results in -7. This is a classic example of **positive overflow**. The correct mathematical sum (9) is outside the representable range (+7), and the system "wraps around" to a negative number. This can lead to incorrect calculations if not handled properly.

---

I hope this deep dive into integer representation has been clear and illuminating! Understanding these fundamental binary concepts is like learning the alphabet before writing a novel. It's the bedrock upon which all more complex computing operations are built. Keep these principles in mind as we move forward!
