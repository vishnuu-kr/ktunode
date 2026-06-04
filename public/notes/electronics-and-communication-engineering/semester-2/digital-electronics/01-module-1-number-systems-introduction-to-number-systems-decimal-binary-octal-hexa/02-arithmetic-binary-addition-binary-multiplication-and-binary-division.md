---
title: "Arithmetic - Binary Addition, Binary Multiplication and Binary Division."
subject: "DIGITAL ELECTRONICS"
module: "Module 1: Number Systems: Introduction to number systems (decimal, binary, octal, hexadecimal) and their bases "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9120463779487da638"
status: "completed"
scrapedAt: "2026-05-23T17:37:25.958Z"
---
# Module 1: Number Systems - Arithmetic Operations in Binary

Welcome, everyone! In our previous sessions, we’ve laid a strong foundation for understanding different number systems – decimal, binary, octal, and hexadecimal. We learned how these systems represent numbers and how to convert between them. Now, it’s time to get our hands dirty with the *arithmetic* side of things, specifically in the **binary** system. Why binary? Because it’s the language our digital computers speak! Understanding binary arithmetic is absolutely crucial for comprehending how digital circuits perform calculations, which directly ties into several of our course outcomes, especially **CO1** (understanding number systems) and **CO3** (implementing circuits for data processing).

Think of it this way: your smartphone, your laptop, even a simple digital watch – they all operate on binary signals. When you type a number, add two values, or perform any calculation, at the lowest level, it's all happening in binary. So, let's dive into how we do addition, multiplication, and division in binary.

## 1. Binary Addition

Just like in decimal addition, binary addition involves adding digits column by column, from right to left. The key difference, of course, lies in the digits we have: only 0 and 1.

Let's recall the basic rules of binary addition:

*   **0 + 0 = 0** (No carry)
*   **0 + 1 = 1** (No carry)
*   **1 + 0 = 1** (No carry)
*   **1 + 1 = 10** (Here's the important part! It's 0 with a carry of 1 to the next position.)

You might wonder, "Where does this 1+1=10 come from?" Remember, in binary, we only have two digits. So, when we reach the value '2' in decimal, it's represented as '10' in binary. The '0' is the sum in the current position, and the '1' is carried over to the next higher position, just like in decimal addition when you carry over a 1 when the sum of digits is 10 or more.

Let's look at an example. Suppose we want to add 101 (which is 5 in decimal) and 011 (which is 3 in decimal).

```
   1 0 1   (Decimal 5)
+  0 1 1   (Decimal 3)
-------
```

We start from the rightmost column (the least significant bit, or LSB):

*   **Column 1 (Rightmost):** 1 + 1 = 10. Write down 0, carry over 1.

    ```
       1
      1 0 1
    + 0 1 1
    -------
          0
    ```

*   **Column 2 (Middle):** 0 + 1 + (carry 1) = 10. Write down 0, carry over 1.

    ```
      1 1
      1 0 1
    + 0 1 1
    -------
        0 0
    ```

*   **Column 3 (Leftmost):** 1 + 0 + (carry 1) = 10. Write down 0, carry over 1.

    ```
      1 1 1
      1 0 1
    + 0 1 1
    -------
      0 0 0
    ```

*   **Final Carry:** We have a carry of 1 to the next position, so we write it down.

    ```
      1 1 1
      1 0 1
    + 0 1 1
    -------
     1 0 0 0
    ```

So, 101 + 011 = 1000. Let's check our decimal equivalent: 5 + 3 = 8. And 1000 in binary is indeed 8. Perfect!

**Important Point:** Just like in decimal, you can add multiple binary numbers by carrying over the sums to the next significant bit. This process forms the basis of **half-adders** and **full-adders**, which are fundamental combinational logic circuits we'll discuss later (linking to **CO3**). Thomas L. Floyd’s “Digital Fundamentals” often uses these simple examples to build up to more complex circuits.

Let's try another one: 1101 + 1011

```
   1 1 0 1   (Decimal 13)
+  1 0 1 1   (Decimal 11)
---------
```

*   Rightmost: 1 + 1 = 10. Write 0, carry 1.
*   Next: 0 + 1 + carry 1 = 10. Write 0, carry 1.
*   Next: 1 + 0 + carry 1 = 10. Write 0, carry 1.
*   Leftmost: 1 + 1 + carry 1 = 11. Write 1, carry 1.
*   Final carry: 1.

```
   1 1 1
   1 1 0 1
+  1 0 1 1
---------
  1 1 0 0 0
```

So, 1101 + 1011 = 11000. Decimal check: 13 + 11 = 24. Binary 11000 is $1*2^4 + 1*2^3 + 0*2^2 + 0*2^1 + 0*2^0 = 16 + 8 = 24$. It works!

**Exam Tip:** Always be meticulous with your carries. A misplaced carry is a very common mistake in binary addition, so double-check each column.

## 2. Binary Multiplication

Binary multiplication is remarkably simpler than decimal multiplication because you're only ever multiplying by 0 or 1. This makes the process very straightforward, often referred to as a "shift and add" operation.

The basic rules are:

*   **0 x 0 = 0**
*   **0 x 1 = 0**
*   **1 x 0 = 0**
*   **1 x 1 = 1**

Notice that multiplying by 0 always results in 0, and multiplying by 1 leaves the number unchanged. This is precisely what happens in decimal multiplication when you multiply by 0 or 1.

Let's see an example: Multiply 101 by 11.
In decimal, this is 5 x 3 = 15.

```
   1 0 1   (Multiplier - 5)
x    1 1   (Multiplicand - 3)
-------
```

We perform multiplication similar to decimal:

*   **Step 1: Multiply the multiplicand (101) by the LSB of the multiplier (1).**
    101 x 1 = 101.

    ```
       1 0 1
    x    1 1
    -------
       1 0 1   <-- (101 x 1)
    ```

*   **Step 2: Multiply the multiplicand (101) by the next bit of the multiplier (1).** Since this '1' is in the second position (representing 2), we shift the result one place to the left, or equivalently, add a 0 at the end.
    101 x 1 = 101. Shifted left, it becomes 1010.

    ```
       1 0 1
    x    1 1
    -------
       1 0 1
     1 0 1 0   <-- (101 x 1, shifted)
    ```

*   **Step 3: Add the partial products.**

    ```
       1 0 1
    x    1 1
    -------
       1 0 1
     1 0 1 0
    -------
     1 1 1 1
    ```

So, 101 x 11 = 1111. Let's check the decimal: 15. And 1111 in binary is $1*2^3 + 1*2^2 + 1*2^1 + 1*2^0 = 8 + 4 + 2 + 1 = 15$. Success!

Let’s try another one: 110 x 101 (Decimal 6 x 5 = 30)

```
     1 1 0   (6)
  x  1 0 1   (5)
  ---------
     1 1 0   <-- (110 x 1)
    0 0 0    <-- (110 x 0, shifted)
  1 1 0      <-- (110 x 1, shifted twice)
  ---------
```

Now, add the partial products:

```
     1 1 0
  x  1 0 1
  ---------
     1 1 0
    0 0 0
  1 1 0
  ---------
  1 1 1 1 0
```

The result is 11110. Let's convert to decimal: $1*2^4 + 1*2^3 + 1*2^2 + 1*2^1 + 0*2^0 = 16 + 8 + 4 + 2 + 0 = 30$. It matches!

**Analogy:** Think of multiplication like writing down each number you're adding, but shifted. If you're multiplying by 11, you write the number, then write the number again shifted over, and add them. If you're multiplying by 101, you write the number, add a zero (for the '0' in the multiplier), then write the number again shifted further, and add them all up. This "shift and add" concept is fundamental in how processors perform multiplication efficiently. R.P. Jain's "Modern Digital Electronics" often provides a more in-depth look at the hardware implementations of these arithmetic operations.

**Exam Tip:** The key here is consistent shifting. Make sure you add the correct number of zeros for each partial product based on the position of the multiplier bit.

## 3. Binary Division

Binary division is also conceptually similar to decimal long division, but again, much simpler due to the limited digits. You'll be repeatedly subtracting and checking if the divisor can fit into the current part of the dividend.

Let's recall the basic rules for division:

*   **0 ÷ 1 = 0**
*   **1 ÷ 1 = 1**
*   Division by zero is undefined (and in digital circuits, this is a critical error condition).

When we perform binary division, we compare the divisor with a portion of the dividend. If the portion is greater than or equal to the divisor, we write '1' in the quotient and subtract the divisor from that portion. If it's smaller, we write '0' in the quotient. Then, we bring down the next bit of the dividend and repeat the process.

Let's try an example: Divide 1100 by 10. (Decimal 12 ÷ 2 = 6).

```
        ______
   10 | 1100
```

*   **Step 1:** Look at the first part of the dividend that's at least as long as the divisor.
    The divisor is 10 (2 in decimal).
    The first two bits of the dividend are 11.
    Is 11 greater than or equal to 10? Yes (11 in binary is 3, 10 is 2).
    So, we write '1' in the quotient.
    Subtract 10 from 11. 11 - 10 = 1.

    ```
        1____
   10 | 1100
      - 10
      ----
        01
    ```

*   **Step 2:** Bring down the next bit from the dividend (which is 0), making it 010.
    The current number is 010 (which is 10 in binary).
    Is 010 greater than or equal to 10? Yes (10 in binary is 2).
    So, we write '1' in the quotient.
    Subtract 10 from 010. 010 - 10 = 0.

    ```
        11___
   10 | 1100
      - 10
      ----
        010
      -  10
      ----
         00
    ```

*   **Step 3:** Bring down the next bit from the dividend (which is 0), making it 000.
    The current number is 000.
    Is 000 greater than or equal to 10? No.
    So, we write '0' in the quotient.
    We don't subtract anything.

    ```
        110
   10 | 1100
      - 10
      ----
        010
      -  10
      ----
         000
    ```

We have no more bits to bring down, so the division is complete. The quotient is 110.
Let's check: 110 in binary is $1*2^2 + 1*2^1 + 0*2^0 = 4 + 2 + 0 = 6$. This matches our decimal calculation 12 ÷ 2 = 6.

Let's try another one: Divide 10101 by 101. (Decimal 21 ÷ 5 = 4 with a remainder of 1).

```
        ______
   101 | 10101
```

*   **Step 1:** Divisor is 101. First three bits of dividend are 101.
    Is 101 >= 101? Yes.
    Quotient bit: 1.
    Subtract: 101 - 101 = 0.

    ```
        1____
   101 | 10101
      - 101
      -----
          0
    ```

*   **Step 2:** Bring down next bit (0). Current number is 0.
    Is 0 >= 101? No.
    Quotient bit: 0.
    No subtraction.

    ```
        10___
   101 | 10101
      - 101
      -----
          00
    ```

*   **Step 3:** Bring down next bit (1). Current number is 001.
    Is 001 >= 101? No.
    Quotient bit: 0.
    No subtraction.

    ```
        100__
   101 | 10101
      - 101
      -----
          001
    ```

We have no more bits. The quotient is 100.
The remainder is 001, which is 1.
Let's check decimal: Quotient is 4, remainder is 1. 21 ÷ 5 = 4 R 1. Correct!

**Analogy:** Imagine you have 12 cookies and you want to divide them equally among 2 friends. You take a group of cookies (say, 3), see if it’s enough for each friend (yes, 3 is more than 2), give them 2 cookies, and you have 1 left. Then you take the next cookie, combine it with the remainder, and repeat. Binary division is the same process, but with fewer choices: either the number fits (subtract 1) or it doesn’t (subtract 0).

This process of repeated subtraction is also implemented in hardware using adders and shifters, which aligns with **CO3** concerning data manipulation. Digital logic design often involves building circuits that can perform these arithmetic operations, making them computationally powerful.

**Exam Tip:** Pay close attention to the subtractions and when to bring down the next bit. Ensure you compare the divisor with the *correct length* of the dividend portion. If at any point the current dividend portion is smaller than the divisor, you MUST place a '0' in the quotient for that position before bringing down the next bit.

## Connecting to Course Outcomes

Let's briefly recap how these operations tie into our course objectives:

*   **CO1: Explain the fundamental concepts of number systems (decimal, binary, octal, hexadecimal) including their bases and conversion techniques.** Our entire discussion today has been based on binary (base-2) arithmetic, reinforcing its unique rules and how they differ from decimal (base-10). We've used decimal equivalents to verify our binary calculations, solidifying the understanding of bases and conversions.

*   **CO3: Implement combinational logic circuits for data processing and manipulation.** Binary addition, multiplication, and division are the core operations performed by digital circuits. Understanding these algorithms is the first step towards designing circuits like adders, multipliers, and dividers. For instance, a binary adder circuit directly implements the logic for binary addition.

Remember, mastering these fundamental arithmetic operations in binary is not just about memorizing rules; it’s about understanding the logic behind computation in digital systems. This knowledge will be foundational as we move on to more complex digital circuits and systems.

## Sample Questions and Answers

Here are a few questions to test your understanding, ranging from conceptual recall to application:

**Question 1 (Conceptual):** What is the result of 1 + 1 in binary, and why?
**Answer:** The result of 1 + 1 in binary is 10. In binary, we only have two digits (0 and 1). The sum '2' in decimal is represented as '10' in binary, where '0' is the sum in the current position and '1' is carried over to the next significant position. This is analogous to decimal addition where 9 + 1 = 10, with a 0 in the units place and a carry of 1 to the tens place.

**Question 2 (Application):** Perform the binary multiplication: 1101 x 101. Show your steps.
**Answer:**
Decimal equivalent: 13 x 5 = 65.

```
    1 1 0 1   (13)
x   1 0 1   (5)
---------
    1 1 0 1   <-- (1101 x 1)
   0 0 0 0    <-- (1101 x 0, shifted)
 1 1 0 1     <-- (1101 x 1, shifted twice)
---------
 1 0 0 0 0 0 1
```

Adding the partial products:
   1101
  0000
+1101
---------
 1000001

Result: 1000001.
Decimal check: $1*2^6 + 0*2^5 + 0*2^4 + 0*2^3 + 0*2^2 + 0*2^1 + 1*2^0 = 64 + 1 = 65$.

**Question 3 (Conceptual/Pitfall):** When performing binary division, what should you do if the current portion of the dividend is smaller than the divisor?
**Answer:** If the current portion of the dividend is smaller than the divisor, you must place a '0' in the quotient for that position. You then bring down the next bit from the dividend to form a new number to compare with the divisor. Failing to place the '0' will lead to an incorrect quotient.

**Question 4 (Application):** Perform the binary division: 11100 ÷ 100. Show your steps.
**Answer:**
Decimal equivalent: 28 ÷ 4 = 7.

```
        ____
  100 | 11100
```

*   **Step 1:** First three bits: 111. Is 111 >= 100? Yes.
    Quotient bit: 1.
    Subtract: 111 - 100 = 11.
    ```
        1___
  100 | 11100
      - 100
      -----
        011
    ```

*   **Step 2:** Bring down next bit (0). Current number: 0110.
    Is 0110 >= 100? Yes (0110 is 6, 100 is 4).
    Quotient bit: 1.
    Subtract: 0110 - 100 = 010. (Or 110 - 100 = 10. Add the leading 0 back if needed).
    ```
        11__
  100 | 11100
      - 100
      -----
        0110
      -  100
      ------
         010
    ```

*   **Step 3:** Bring down next bit (0). Current number: 0100.
    Is 0100 >= 100? Yes (0100 is 4, 100 is 4).
    Quotient bit: 1.
    Subtract: 0100 - 100 = 0.
    ```
        111
  100 | 11100
      - 100
      -----
        0110
      -  100
      ------
         0100
       - 100
       ------
           0
    ```

Result: 111.
Decimal check: 111 in binary is $1*2^2 + 1*2^1 + 1*2^0 = 4 + 2 + 1 = 7$. This matches 28 ÷ 4 = 7.

Keep practicing these operations! The more you do them, the more intuitive they will become.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
