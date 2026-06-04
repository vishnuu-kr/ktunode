---
title: "Number Systems: Introduction to number systems (decimal, binary, octal, hexadecimal) and their bases - conversion methods between decimal, binary, octal and hexadecimal number systems."
subject: "DIGITAL ELECTRONICS"
module: "Module 1: Number Systems: Introduction to number systems (decimal, binary, octal, hexadecimal) and their bases "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9652"
status: "completed"
scrapedAt: "2026-05-23T16:05:18.489Z"
---
# DIGITAL ELECTRONICS - Module 1: Number Systems

Welcome to the fascinating world of Digital Electronics! Before we dive into building complex digital circuits, we need to understand the very language they speak. This language isn't English, or any human language, but rather a system of numbers. In this module, we'll introduce you to the fundamental number systems used in digital electronics and how to navigate between them. This forms the bedrock for everything else we'll learn, directly impacting our ability to **(CO1) explain the fundamental concepts of number systems (decimal, binary, octal, hexadecimal) including their bases and conversion techniques.**

## 1.1 Introduction to Number Systems: The Foundation of Digital Logic

Think about how we represent quantities in our everyday lives. We use the **decimal system**, which is familiar and intuitive. But in digital systems, things are much simpler. They operate based on the presence or absence of an electrical signal, which naturally lends itself to a two-state system. This is where the **binary system** comes in.

Imagine a light switch. It's either ON or OFF. There's no in-between. In digital electronics, ON can represent a '1' and OFF can represent a '0'. These '0's and '1's are the building blocks of all digital information.

However, working solely with long strings of 0s and 1s can be cumbersome for humans. That's why we also use other number systems that are more compact and easier to manage, yet still directly related to the binary system. These are the **octal** and **hexadecimal** systems. Understanding these systems and how to convert between them is crucial, as it allows us to represent and manipulate digital data efficiently. This skill directly ties into **(CO1) explaining the fundamental concepts of number systems**.

### What is a Number System?

At its core, a number system is a way of representing numerical values using a set of symbols, called digits, and a base (or radix). The base determines how many unique digits are available in the system. The position of a digit within a number also plays a vital role, indicating its "weight" or magnitude.

Let's explore the primary number systems we'll encounter:

#### 1.1.1 The Decimal Number System (Base-10)

This is the system we use every day. It has **ten** unique digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9.

*   **Base:** 10
*   **Digits:** 0-9

The decimal system is a **positional number system**. This means the value of a digit depends on its position within the number. For example, in the number 572:

*   The '2' is in the **units** (or ones) place, representing $2 \times 10^0 = 2 \times 1 = 2$.
*   The '7' is in the **tens** place, representing $7 \times 10^1 = 7 \times 10 = 70$.
*   The '5' is in the **hundreds** place, representing $5 \times 10^2 = 5 \times 100 = 500$.

So, 572 in decimal is $500 + 70 + 2 = 572$. This is often written as $572_{10}$ to explicitly indicate the base.

**(Relatable Example):** Think of a odometer in a car. As the car drives, the numbers tick over. The rightmost digit represents units of distance (miles or kilometers), the next digit to the left represents tens of distance, and so on. Each digit has a "place value" based on powers of 10.

#### 1.1.2 The Binary Number System (Base-2)

This is the fundamental number system of digital electronics. It uses only **two** unique digits: 0 and 1.

*   **Base:** 2
*   **Digits:** 0, 1

Similar to decimal, binary is a positional system. The positions represent powers of 2. Each digit in a binary number is called a **bit** (binary digit).

Let's take a binary number, say $1011_2$:

*   The rightmost '1' is in the $2^0$ (units) place: $1 \times 2^0 = 1 \times 1 = 1$.
*   The next '1' is in the $2^1$ (twos) place: $1 \times 2^1 = 1 \times 2 = 2$.
*   The '0' is in the $2^2$ (fours) place: $0 \times 2^2 = 0 \times 4 = 0$.
*   The leftmost '1' is in the $2^3$ (eights) place: $1 \times 2^3 = 1 \times 8 = 8$.

To convert $1011_2$ to decimal, we sum these values: $8 + 0 + 2 + 1 = 11_{10}$.

**(Relatable Example):** Imagine a simple music player with just two buttons: "Next Song" and "Previous Song". Each button can be either pressed or not pressed. This is a binary system. Now, imagine a sequence of these button presses representing different actions. The order and timing of these presses (the positions) convey information, much like bits in a binary number.

#### 1.1.3 The Octal Number System (Base-8)

The octal system uses **eight** unique digits: 0, 1, 2, 3, 4, 5, 6, and 7.

*   **Base:** 8
*   **Digits:** 0-7

The positions in an octal number represent powers of 8. For instance, $257_8$:

*   The '7' is in the $8^0$ place: $7 \times 8^0 = 7 \times 1 = 7$.
*   The '5' is in the $8^1$ place: $5 \times 8^1 = 5 \times 8 = 40$.
*   The '2' is in the $8^2$ place: $2 \times 8^2 = 2 \times 64 = 128$.

So, $257_8 = 128 + 40 + 7 = 175_{10}$.

**(Relatable Example):** Many older computer systems used octal notation for representing memory addresses or file permissions. Think of a dial with numbers 0 through 7. You can set the dial to any of these numbers. If you have multiple such dials, their combination, like 257 on three dials, represents a specific setting.

#### 1.1.4 The Hexadecimal Number System (Base-16)

The hexadecimal system is widely used in digital electronics, especially for representing memory addresses, color codes (in web design), and machine code. It uses **sixteen** unique symbols. The first ten are the familiar decimal digits (0-9), and for the remaining six, we use letters A, B, C, D, E, and F.

*   **Base:** 16
*   **Digits:** 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F

Where:
*   A represents 10
*   B represents 11
*   C represents 12
*   D represents 13
*   E represents 14
*   F represents 15

The positions in a hexadecimal number represent powers of 16. Let's look at $1A3_{16}$:

*   The '3' is in the $16^0$ place: $3 \times 16^0 = 3 \times 1 = 3$.
*   The 'A' (which is 10) is in the $16^1$ place: $10 \times 16^1 = 10 \times 16 = 160$.
*   The '1' is in the $16^2$ place: $1 \times 16^2 = 1 \times 256 = 256$.

So, $1A3_{16} = 256 + 160 + 3 = 419_{10}$.

**(Relatable Example):** Think about car license plates. They often combine numbers and letters. While not strictly hexadecimal, it illustrates the idea of using more symbols than just 0-9 to represent a larger range of values in a compact way. Hexadecimal is like a super-efficient shorthand for binary.

## 1.2 Conversion Methods: Bridging the Number Systems

Now that we've met our players – decimal, binary, octal, and hexadecimal – the next crucial skill is learning how to convert numbers between them. This is essential for translating human-readable data into machine-readable data and vice-versa. Mastering these conversions directly helps us achieve **(CO1) explain the fundamental concepts of number systems... and conversion techniques.**

There are several conversion pathways, but they all rely on the fundamental understanding of place values and bases. The most common and practical conversions are:

*   Decimal to Other Bases
*   Other Bases to Decimal
*   Binary to Octal and Hexadecimal
*   Octal and Hexadecimal to Binary

Let's break these down.

### 1.2.1 Converting from Decimal to Other Bases (Binary, Octal, Hexadecimal)

The primary method for converting a decimal number to another base (like binary, octal, or hexadecimal) is the **repeated division by the target base** method. You keep dividing the decimal number by the target base and record the remainders. The remainders, read from bottom to top, form the number in the new base.

**The Process:**

1.  Divide the decimal number by the target base.
2.  Record the remainder.
3.  Use the quotient from the division as the new number for the next step.
4.  Repeat steps 1-3 until the quotient becomes zero.
5.  The number in the new base is formed by reading the remainders from the last (bottom) to the first (top).

**Example 1: Convert Decimal 45 to Binary**

Target Base = 2

*   $45 \div 2 = 22$ remainder **1**
*   $22 \div 2 = 11$ remainder **0**
*   $11 \div 2 = 5$ remainder **1**
*   $5 \div 2 = 2$ remainder **1**
*   $2 \div 2 = 1$ remainder **0**
*   $1 \div 2 = 0$ remainder **1**

Reading the remainders from bottom to top: $101101_2$.
So, $45_{10} = 101101_2$.

**(Exam Tip):** Always double-check your conversion by converting back! If you convert $101101_2$ back to decimal: $1 \times 2^5 + 0 \times 2^4 + 1 \times 2^3 + 1 \times 2^2 + 0 \times 2^1 + 1 \times 2^0 = 32 + 0 + 8 + 4 + 0 + 1 = 45$. It matches!

**Example 2: Convert Decimal 175 to Octal**

Target Base = 8

*   $175 \div 8 = 21$ remainder **7**
*   $21 \div 8 = 2$ remainder **5**
*   $2 \div 8 = 0$ remainder **2**

Reading the remainders from bottom to top: $257_8$.
So, $175_{10} = 257_8$.

**Example 3: Convert Decimal 419 to Hexadecimal**

Target Base = 16

*   $419 \div 16 = 26$ remainder **3**
*   $26 \div 16 = 1$ remainder **10 (A)**
*   $1 \div 16 = 0$ remainder **1**

Reading the remainders from bottom to top: $1A3_{16}$.
So, $419_{10} = 1A3_{16}$.

### 1.2.2 Converting from Other Bases to Decimal

To convert a number from any base (binary, octal, hexadecimal) to decimal, you use the **positional notation** or **weighted sum** method. This is essentially reversing the process of defining the number systems.

**The Process:**

1.  Identify the base of the number you want to convert.
2.  Identify the digits and their positions.
3.  Multiply each digit by its corresponding place value (the base raised to the power of its position, starting from $0$ for the rightmost digit).
4.  Sum up all these products to get the decimal equivalent.

**Example 1: Convert Binary $101101_2$ to Decimal**

*   Digits: 1, 0, 1, 1, 0, 1
*   Positions (from right, starting at 0): 5, 4, 3, 2, 1, 0

Conversion:
$1 \times 2^5 + 0 \times 2^4 + 1 \times 2^3 + 1 \times 2^2 + 0 \times 2^1 + 1 \times 2^0$
$= 1 \times 32 + 0 \times 16 + 1 \times 8 + 1 \times 4 + 0 \times 2 + 1 \times 1$
$= 32 + 0 + 8 + 4 + 0 + 1$
$= 45_{10}$

So, $101101_2 = 45_{10}$.

**Example 2: Convert Octal $257_8$ to Decimal**

*   Digits: 2, 5, 7
*   Positions (from right, starting at 0): 2, 1, 0

Conversion:
$2 \times 8^2 + 5 \times 8^1 + 7 \times 8^0$
$= 2 \times 64 + 5 \times 8 + 7 \times 1$
$= 128 + 40 + 7$
$= 175_{10}$

So, $257_8 = 175_{10}$.

**Example 3: Convert Hexadecimal $1A3_{16}$ to Decimal**

Remember: A = 10, B = 11, C = 12, D = 13, E = 14, F = 15.

*   Digits: 1, A (10), 3
*   Positions (from right, starting at 0): 2, 1, 0

Conversion:
$1 \times 16^2 + 10 \times 16^1 + 3 \times 16^0$
$= 1 \times 256 + 10 \times 16 + 3 \times 1$
$= 256 + 160 + 3$
$= 419_{10}$

So, $1A3_{16} = 419_{10}$.

### 1.2.3 Converting Between Binary, Octal, and Hexadecimal

The beauty of octal and hexadecimal systems is their direct relationship with binary. This is because their bases ($8 = 2^3$ and $16 = 2^4$) are powers of 2. This makes conversions between them very straightforward.

#### Converting Binary to Octal

Since $8 = 2^3$, each octal digit can be represented by **three** binary digits (bits).

**The Process:**

1.  Starting from the rightmost bit of the binary number, group the bits into sets of three.
2.  If the leftmost group does not have three bits, pad it with leading zeros on the left.
3.  Convert each group of three binary bits into its equivalent octal digit.

**Example: Convert Binary $11010111_2$ to Octal**

1.  Group into threes from the right: $11 \ 010 \ 111$
2.  Pad the leftmost group: $011 \ 010 \ 111$
3.  Convert each group:
    *   $011_2 = 3_8$ ($0 \times 4 + 1 \times 2 + 1 \times 1$)
    *   $010_2 = 2_8$ ($0 \times 4 + 1 \times 2 + 0 \times 1$)
    *   $111_2 = 7_8$ ($1 \times 4 + 1 \times 2 + 1 \times 1$)

So, $11010111_2 = 327_8$.

**(Exam Tip):** You can use a lookup table for these small conversions. It's a good idea to memorize the 3-bit binary to octal equivalents:
000 = 0, 001 = 1, 010 = 2, 011 = 3, 100 = 4, 101 = 5, 110 = 6, 111 = 7.

#### Converting Octal to Binary

This is the reverse of the previous method. Each octal digit is converted into its **three-bit** binary equivalent.

**The Process:**

1.  Take each octal digit.
2.  Convert each octal digit into its 3-bit binary equivalent.
3.  Concatenate these binary groups.

**Example: Convert Octal $327_8$ to Binary**

*   $3_8 = 011_2$
*   $2_8 = 010_2$
*   $7_8 = 111_2$

Concatenating: $011010111_2$.
If the leading zeros are not significant (which they usually aren't unless specified), we can write it as $11010111_2$.

So, $327_8 = 11010111_2$.

#### Converting Binary to Hexadecimal

Since $16 = 2^4$, each hexadecimal digit can be represented by **four** binary digits (bits).

**The Process:**

1.  Starting from the rightmost bit of the binary number, group the bits into sets of four.
2.  If the leftmost group does not have four bits, pad it with leading zeros on the left.
3.  Convert each group of four binary bits into its equivalent hexadecimal digit.

**Example: Convert Binary $1101011101_2$ to Hexadecimal**

1.  Group into fours from the right: $110 \ 1011 \ 1010$
2.  Pad the leftmost group: $0110 \ 1011 \ 1010$
3.  Convert each group:
    *   $0110_2 = 6_{16}$ ($0 \times 8 + 1 \times 4 + 1 \times 2 + 0 \times 1$)
    *   $1011_2 = B_{16}$ ($1 \times 8 + 0 \times 4 + 1 \times 2 + 1 \times 1 = 11_{10}$)
    *   $1010_2 = A_{16}$ ($1 \times 8 + 0 \times 4 + 1 \times 2 + 0 \times 1 = 10_{10}$)

So, $1101011101_2 = 6BA_{16}$.

**(Exam Tip):** Memorize the 4-bit binary to hexadecimal equivalents. This is a very common and useful conversion.
0000 = 0, 0001 = 1, ..., 1001 = 9, 1010 = A, 1011 = B, 1100 = C, 1101 = D, 1110 = E, 1111 = F.

#### Converting Hexadecimal to Binary

This is the reverse of the previous method. Each hexadecimal digit is converted into its **four-bit** binary equivalent.

**The Process:**

1.  Take each hexadecimal digit.
2.  Convert each hexadecimal digit into its 4-bit binary equivalent.
3.  Concatenate these binary groups.

**Example: Convert Hexadecimal $6BA_{16}$ to Binary**

*   $6_{16} = 0110_2$
*   $B_{16} = 1011_2$
*   $A_{16} = 1010_2$

Concatenating: $011010111010_2$.
Again, we can drop leading zeros: $11010111010_2$.

So, $6BA_{16} = 11010111010_2$.

#### Converting Octal to Hexadecimal and Vice Versa

You can convert directly, but it's often easier to go via binary.

*   **Octal to Hexadecimal:** Octal to Binary (group by 3 bits), then Binary to Hexadecimal (group by 4 bits).
*   **Hexadecimal to Octal:** Hexadecimal to Binary (group by 4 bits), then Binary to Octal (group by 3 bits).

**Example: Convert Octal $327_8$ to Hexadecimal**

1.  Octal to Binary: $327_8 = 011 \ 010 \ 111_2 = 11010111_2$
2.  Binary to Hexadecimal: Group $11010111_2$ into fours: $0110 \ 1011_2$.
    *   $0110_2 = 6_{16}$
    *   $1011_2 = B_{16}$

So, $327_8 = 6B_{16}$.

This direct relationship via binary is why these systems are so powerful in digital design. They provide a human-friendly way to represent binary data. Understanding these conversions is fundamental for tasks like reading memory dumps, debugging code, and understanding data representations in various digital systems, which directly supports **(CO1)**.

## Summary of Key Concepts and Conversions

*   **Number Systems** are defined by their **base** (number of unique digits) and their **digits**.
*   **Decimal (Base-10):** Digits 0-9.
*   **Binary (Base-2):** Digits 0, 1. The fundamental language of digital systems.
*   **Octal (Base-8):** Digits 0-7. Efficiently represents 3-bit binary groups.
*   **Hexadecimal (Base-16):** Digits 0-9, A-F. Efficiently represents 4-bit binary groups and is widely used.
*   **Conversion:**
    *   **Decimal to Other Bases:** Repeated division by the target base, read remainders bottom-up.
    *   **Other Bases to Decimal:** Weighted sum of digits using powers of the base.
    *   **Binary $\leftrightarrow$ Octal:** Group binary bits by 3s, or convert each octal digit to 3 bits.
    *   **Binary $\leftrightarrow$ Hexadecimal:** Group binary bits by 4s, or convert each hex digit to 4 bits.
    *   **Octal $\leftrightarrow$ Hexadecimal:** Typically via binary as an intermediate step.

Remember these methods, and practice them often! They are the foundation upon which all your digital logic will be built. Being comfortable with these conversions will make future modules much easier to grasp.

---

## Sample Questions and Answers

**Q1. Convert the decimal number 123 to its binary equivalent.**

*   **Concept:** Decimal to Binary conversion using repeated division.
*   **Solution:**
    $123 \div 2 = 61$ R **1**
    $61 \div 2 = 30$ R **1**
    $30 \div 2 = 15$ R **0**
    $15 \div 2 = 7$ R **1**
    $7 \div 2 = 3$ R **1**
    $3 \div 2 = 1$ R **1**
    $1 \div 2 = 0$ R **1**
    Reading remainders from bottom to top: $1111011_2$.
*   **Answer:** $123_{10} = 1111011_2$.

**Q2. Convert the binary number $10110110_2$ to its octal equivalent.**

*   **Concept:** Binary to Octal conversion by grouping bits.
*   **Solution:**
    Group the binary number into sets of three from the right: $10 \ 110 \ 110$.
    Pad the leftmost group with leading zeros: $010 \ 110 \ 110$.
    Convert each group:
    $010_2 = 2_8$
    $110_2 = 6_8$
    $110_2 = 6_8$
*   **Answer:** $10110110_2 = 266_8$.

**Q3. Convert the hexadecimal number $A5_{16}$ to its decimal equivalent.**

*   **Concept:** Hexadecimal to Decimal conversion using weighted sum.
*   **Solution:**
    Hexadecimal A represents decimal 10.
    $A5_{16} = (A \times 16^1) + (5 \times 16^0)$
    $= (10 \times 16) + (5 \times 1)$
    $= 160 + 5$
    $= 165_{10}$
*   **Answer:** $A5_{16} = 165_{10}$.

**Q4. Convert the octal number $73_8$ to its hexadecimal equivalent.**

*   **Concept:** Octal to Hexadecimal conversion (via binary).
*   **Solution:**
    1.  Convert Octal to Binary:
        $7_8 = 111_2$
        $3_8 = 011_2$
        So, $73_8 = 111011_2$.
    2.  Convert Binary to Hexadecimal:
        Group the binary number into sets of four from the right: $11 \ 1011$.
        Pad the leftmost group: $0011 \ 1011$.
        Convert each group:
        $0011_2 = 3_{16}$
        $1011_2 = B_{16}$
*   **Answer:** $73_8 = 3B_{16}$.

**Q5. Why is the binary number system fundamental to digital electronics? (Conceptual Question)**

*   **Concept:** Understanding the physical basis of digital systems.
*   **Solution:** Digital electronic circuits operate based on the presence or absence of an electrical signal. This can be represented by two distinct states: typically a high voltage representing '1' and a low voltage representing '0'. The binary system, with its two digits (0 and 1), directly maps to these two physical states, making it the natural and most efficient language for digital computers and circuits. Other number systems like octal and hexadecimal are used as convenient shorthand for binary representations, but the underlying operation is always binary. This directly relates to **CO1**.
*   **Answer:** The binary system's two digits (0 and 1) directly correspond to the two fundamental states (ON/OFF, HIGH/LOW voltage) that electronic components like transistors can easily represent and manipulate. This makes binary the natural and efficient language for digital systems.
