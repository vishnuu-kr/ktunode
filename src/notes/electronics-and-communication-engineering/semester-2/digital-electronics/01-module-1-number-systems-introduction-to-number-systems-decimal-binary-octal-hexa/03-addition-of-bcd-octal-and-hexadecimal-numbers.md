---
title: "Addition of BCD, Octal and Hexadecimal numbers."
subject: "DIGITAL ELECTRONICS"
module: "Module 1: Number Systems: Introduction to number systems (decimal, binary, octal, hexadecimal) and their bases "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9120463779487da639"
status: "completed"
scrapedAt: "2026-05-23T17:37:27.613Z"
---
# Digital Electronics: Module 1 - Number Systems and Arithmetic Operations

## Topic: Addition of BCD, Octal, and Hexadecimal Numbers

Welcome, everyone! Today, we're going to dive into a crucial aspect of digital electronics: how computers perform arithmetic. Specifically, we'll be focusing on adding numbers represented in different number systems – BCD, Octal, and Hexadecimal. Understanding these operations is fundamental to grasping how digital systems process information, and it directly ties into our Course Outcome 1 (CO1): explaining number systems and their properties.

Think about it: your calculator, your computer, your smartphone – they all deal with numbers. While humans are comfortable with the decimal system (base-10), the internal workings of digital circuits are built around the binary system (base-2). So, how do we bridge this gap? By understanding how to perform arithmetic operations in these various systems. This topic will also lay the groundwork for CO3, which deals with implementing logic circuits for data processing.

### Recap: Our Number System Players

Before we start adding, let's quickly refresh our memories about the systems we're working with. This is essential for CO1.

*   **Decimal (Base-10):** This is our everyday number system. It uses ten digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9. Each digit's position represents a power of 10. For example, the number 123 is (1 * 10²) + (2 * 10¹) + (3 * 10⁰).
*   **Binary (Base-2):** The language of computers. It uses only two digits: 0 and 1. Each digit's position represents a power of 2. For example, the binary number 1011 is (1 * 2³) + (0 * 2²) + (1 * 2¹) + (1 * 2⁰) = 8 + 0 + 2 + 1 = 11 in decimal.
*   **Octal (Base-8):** Uses eight digits: 0, 1, 2, 3, 4, 5, 6, and 7. Each position represents a power of 8. It's often used as a more compact way to represent binary numbers, as three binary digits can be grouped to form one octal digit (2³ = 8). For example, 101101 in binary is 101 101, which is 55 in octal.
*   **Hexadecimal (Base-16):** Uses sixteen symbols: 0-9 and then A-F to represent values 10 through 15. Each position represents a power of 16. This is very popular in computing for memory addresses and data representation because four binary digits can form one hexadecimal digit (2⁴ = 16). For example, 10110110 in binary is 1011 0110, which is B6 in hexadecimal.

**Key Takeaway:** The fundamental principles of addition (carrying over when a sum exceeds the base) apply across all number systems, but the value that triggers a carry and the carry value itself will differ based on the base.

### Addition in Octal (Base-8)

Octal addition works just like decimal addition, but remember our digits only go up to 7. If the sum of two digits (plus any carry-in) reaches 8 or more, we have to carry over.

**The Rule:** When the sum of two octal digits is 8 or greater, subtract 8 from the sum and carry over 1 to the next higher position.

Let's try an example. Imagine you're a shopkeeper in a futuristic Octal-ville where everything is sold in eights. You need to add two orders: 35 octal and 24 octal.

```
   35 (octal)
+  24 (octal)
------
```

1.  **Rightmost column (units place):** 5 + 4 = 9.
    *   Since 9 is greater than 7 (the maximum octal digit), we need to perform an octal addition.
    *   9 in decimal is equivalent to one group of 8 plus 1 remaining. So, 9₁₀ = 11₈.
    *   We write down the '1' in the units place and carry over the '1' to the next column (the 8¹ place).

    ```
       1  (carry)
       35
    +  24
    ------
         1
    ```

2.  **Next column (8¹ place):** 1 (carry) + 3 + 2 = 6.
    *   Since 6 is less than 8, we simply write down '6'.

    ```
       1
       35
    +  24
    ------
       61
    ```

So, 35 octal + 24 octal = 61 octal.

**Another Example with a Carry:** Let's add 47 octal and 35 octal.

```
   47 (octal)
+  35 (octal)
------
```

1.  **Units place:** 7 + 5 = 12 (decimal).
    *   12 in octal is 1 group of 8 plus 4 remaining. So, 12₁₀ = 14₈.
    *   Write down '4', carry over '1'.

    ```
       1  (carry)
       47
    +  35
    ------
         4
    ```

2.  **8¹ place:** 1 (carry) + 4 + 3 = 8 (decimal).
    *   8 in octal is exactly 1 group of 8 plus 0 remaining. So, 8₁₀ = 10₈.
    *   Write down '0', carry over '1' to the 8² place.

    ```
       1  (carry)
       1  (carry from previous step)
       47
    +  35
    ------
      04
    ```

3.  **8² place:** 1 (carry) = 1.
    *   Write down '1'.

    ```
       1
       1
       47
    +  35
    ------
      104
    ```

So, 47 octal + 35 octal = 104 octal.

**How this relates to CO1:** We're directly applying the base-8 concept. The carry mechanism (subtracting 8 and carrying 1) is a direct consequence of the base.

**Exam Tip:** When performing octal addition, it's often helpful to mentally convert the sum of two digits to octal. For example, 6+5=11 (decimal). 11 = 1*8 + 3, so it's 13 in octal. Write down 3, carry 1.

### Addition in Hexadecimal (Base-16)

Hexadecimal addition is similar, but our "carry trigger" is 16. We use digits 0-9 and A-F (where A=10, B=11, C=12, D=13, E=14, F=15).

**The Rule:** When the sum of two hexadecimal digits is 16 or greater, subtract 16 from the sum and carry over 1 to the next higher position.

Let's go back to our digital shopkeeper, but this time they use Hexadecimal-units. Suppose we need to add A3 hex and 4F hex.

```
   A3 (hex)
+  4F (hex)
-------
```

1.  **Rightmost column (units place):** 3 + F.
    *   F represents 15 in decimal.
    *   So, 3 + 15 = 18 (decimal).
    *   Since 18 is greater than 15 (the max hex digit), we need to carry.
    *   18 in hexadecimal is 1 group of 16 plus 2 remaining. So, 18₁₀ = 12₁₆.
    *   We write down '2' and carry over '1' to the 16¹ place.

    ```
       1  (carry)
       A3
    +  4F
    -------
         2
    ```

2.  **Next column (16¹ place):** 1 (carry) + A + 4.
    *   A represents 10 in decimal.
    *   So, 1 + 10 + 4 = 15 (decimal).
    *   15 in decimal is represented by 'F' in hexadecimal.
    *   Since 15 is less than 16, there's no carry. We write down 'F'.

    ```
       1
       A3
    +  4F
    -------
       F2
    ```

So, A3 hex + 4F hex = F2 hex.

**Another Example with a Carry:** Let's add 8E hex and 97 hex.

```
   8E (hex)
+  97 (hex)
-------
```

1.  **Units place:** E + 7.
    *   E is 14. So, 14 + 7 = 21 (decimal).
    *   21 in hex: 21 = 1 * 16 + 5. So, 21₁₀ = 15₁₆.
    *   Write down '5', carry over '1'.

    ```
       1  (carry)
       8E
    +  97
    -------
         5
    ```

2.  **16¹ place:** 1 (carry) + 8 + 9.
    *   1 + 8 + 9 = 18 (decimal).
    *   18 in hex: 18 = 1 * 16 + 2. So, 18₁₀ = 12₁₆.
    *   Write down '2', carry over '1' to the 16² place.

    ```
       1  (carry)
       1  (carry from previous step)
       8E
    +  97
    -------
      25
    ```

3.  **16² place:** 1 (carry) = 1.
    *   Write down '1'.

    ```
       1
       1
       8E
    +  97
    -------
      125
    ```

So, 8E hex + 97 hex = 125 hex.

**How this relates to CO1:** Again, we're using the base-16 rules. The hexadecimal digits (A-F) and the carry logic are directly tied to the base.

**Exam Tip:** Converting hexadecimal sums to their decimal value first, then back to hex, is a reliable way to avoid errors, especially when dealing with multiple carries. For example, E + 7 = 14 + 7 = 21. 21 / 16 = 1 remainder 5. So it's 15 hex.

### Addition in BCD (Binary Coded Decimal)

Now, BCD is a bit different. BCD represents each decimal digit with its own 4-bit binary equivalent. This means we don't treat a BCD number as a straight binary number; we have to add decimal digits one by one, and then correct the result if it's invalid BCD. This is a crucial concept for CO1 and also touches on CO3 as it requires specific correction logic.

**BCD Representation Reminder:**
*   0 = 0000
*   1 = 0001
*   2 = 0010
*   3 = 0011
*   4 = 0100
*   5 = 0101
*   6 = 0110
*   7 = 0111
*   8 = 1000
*   9 = 1001

**The Problem:** If we just add two BCD digits using standard binary addition, we might get a result that is not a valid BCD digit (i.e., greater than 9, or represented by more than 4 bits which isn't the case if we add 4-bit numbers). For example, adding 5 (0101) and 7 (0111) in binary gives 1100, which is 12 in decimal. But in BCD, 12 is represented as 0001 0010.

**The BCD Addition Process (for each digit pair):**

1.  **Add the two BCD digits using standard binary addition.**
2.  **Check the result:**
    *   If the sum is **less than or equal to 9** (i.e., the sum is a valid BCD digit and no carry out of the 4-bit group occurred *in decimal addition*), the result is valid BCD. No correction is needed for this digit position.
    *   If the sum is **greater than 9** OR if there was a **carry-out** from the 4-bit binary addition, the result is invalid BCD.
3.  **Correction Step (if invalid):** Add **0110** (which is 6 in decimal) to the sum. This "pushes" the result into the next valid BCD range. If adding 0110 generates a carry-out, that carry is propagated to the next BCD digit position.

Let's illustrate this with an analogy. Imagine you have two bins that can hold a maximum of 9 apples. You're adding apples from two sources. If you add 5 apples from source A and 7 from source B, you get 12 apples. Since your bin can only hold up to 9, you fill the first bin with 9, and you have 3 left over. Those 3 go into the next bin, and you also have to account for the fact that you filled the first bin completely. This "filling up" and "carrying over" is what the 0110 correction does.

**Example 1: Adding BCD digits where no correction is needed.**
Add 23 BCD and 34 BCD.

*   **Units digit:** 3 (0011) + 4 (0100) = 7 (0111).
    *   Result 0111 is <= 9. Valid BCD.

*   **Tens digit:** 2 (0010) + 3 (0011) = 5 (0101).
    *   Result 0101 is <= 9. Valid BCD.

```
   0010 0011  (23 BCD)
+  0011 0100  (34 BCD)
------------
   0101 0111  (57 BCD)
```
Result: 57 BCD.

**Example 2: Adding BCD digits where correction IS needed.**
Add 48 BCD and 35 BCD.

*   **Units digit:** 8 (1000) + 5 (0101) = 1101 (binary).
    *   1101 is 13 in decimal. This is > 9, so it's invalid BCD.
    *   **Correction:** Add 0110 to 1101.
        ```
           1101
        +  0110
        -------
          10011
        ```
    *   The result is 10011. The rightmost 4 bits are 0011 (which is 3). There's a carry-out of 1. This '3' is the correct unit digit. The carry-out of '1' goes to the tens place.

*   **Tens digit:** 4 (0100) + 3 (0011) = 0111 (binary).
    *   Now, we must add the carry from the units digit: 0111 + 1 (carry) = 1000 (binary).
    *   Result 1000 is <= 9. Valid BCD.

So, combining the results:
Tens digit result: 1000
Units digit result: 0011

The final BCD sum is 1000 0011, which represents 83 BCD.

**Let's re-do Example 2 more formally:**

```
   0100 1000  (48 BCD)
+  0011 0101  (35 BCD)
------------
```

1.  **Add units digits:** 1000 + 0101 = 1101. (Invalid, > 9)
    *   **Correct:** 1101 + 0110 = 10011.
    *   The unit digit is 0011. Carry = 1.

2.  **Add tens digits:** 0100 + 0011 = 0111.
    *   **Add carry:** 0111 + 1 (carry) = 1000. (Valid, <= 9)
    *   The tens digit is 1000. No carry-out.

Combining: 1000 (tens) 0011 (units) = 1000 0011 (83 BCD).

**Example 3: Multiple Carries and Corrections**
Add 59 BCD and 67 BCD.

```
   0101 1001  (59 BCD)
+  0110 0111  (67 BCD)
------------
```

1.  **Units digit:** 1001 (9) + 0111 (7) = 10000 (binary).
    *   This is 16 in decimal. Invalid (> 9) AND has a carry-out.
    *   **Correction:** 10000 + 0110 = 10110 (binary).
    *   The unit digit is 0110 (6). Carry = 1.

2.  **Tens digit:** 0101 (5) + 0110 (6) = 1011 (binary).
    *   This is 11 in decimal. Invalid (> 9).
    *   **Add carry from units digit:** 1011 + 1 (carry) = 1100 (binary).
    *   This is 12 in decimal. Still invalid (> 9).
    *   **Correction:** 1100 + 0110 = 10010 (binary).
    *   The tens digit is 0010 (2). Carry = 1.

3.  **Hundreds digit:** There's a carry of 1 from the tens digit. So, we have 0000 + 1 (carry) = 0001.
    *   The hundreds digit is 0001 (1).

Combining: 0001 (hundreds) 0010 (tens) 0110 (units) = 0001 0010 0110, which is 126 BCD.

**How this relates to CO1 & CO3:** BCD addition directly demonstrates understanding of BCD representation (CO1). The correction step (adding 0110) is a specific algorithm, which in digital circuits would be implemented using logic gates, thus paving the way for CO3 (implementing combinational logic circuits).

**Exam Tip:** The rule for BCD correction is: IF (binary sum > 9) OR (carry-out from binary sum), THEN add 0110. Remember that the carry-out from the *binary addition itself* also triggers the correction, even if the resulting 4-bit sum is <= 9. For instance, 8+8=16 (binary 10000). The 4-bit sum is 0000, but there was a carry-out, so you still add 0110.

### Connecting to Course Outcomes

Let's explicitly see how this topic fulfills our course objectives:

*   **CO1: Explain the fundamental concepts of number systems (decimal, binary, octal, hexadecimal) including their bases and conversion techniques.**
    *   By performing addition in octal (base-8) and hexadecimal (base-16), we're reinforcing the understanding of how different bases affect arithmetic operations.
    *   BCD addition highlights a unique representation that is tied to decimal, showing the relationship and differences between binary and decimal representations, and how these are handled in a "coded" system. The "why" behind the 0110 correction is rooted in the base-10 nature of BCD.

*   **CO2: Utilize Boolean postulates and theorems to simplify logic expressions and implement circuits using basic logic gates.**
    *   While we haven't designed circuits yet, understanding BCD addition is the precursor to designing a BCD adder circuit. The correction step (adding 0110 when the sum is invalid) requires logic gates to detect the invalid condition and to perform the addition of 0110. This is where the "analysis" aspect of CO2 starts to come into play.

*   **CO3: Implement combinational logic circuits for data processing and manipulation.**
    *   As mentioned for CO2, BCD addition is a prime example of data manipulation. A BCD adder circuit is a complex combinational circuit that takes two BCD numbers as input and produces their sum in BCD. The logic for detecting an invalid sum and applying the correction is precisely what we would design using combinational logic.

### Summary and Key Points

*   **Octal Addition:** Sum digits. If sum >= 8, subtract 8 and carry 1.
*   **Hexadecimal Addition:** Sum digits. If sum >= 16, subtract 16 and carry 1. Remember A=10, F=15.
*   **BCD Addition:** Add each BCD digit pair using binary addition. **Crucially**, if the binary sum is > 9 OR if there's a carry-out from the 4-bit binary sum, add 0110 to the result and handle any resulting carry.

These arithmetic operations are the building blocks for more complex digital systems. Mastering them ensures you have a solid grasp of how digital computers handle numbers, fulfilling our core objectives for this module.

---

## Sample Questions with Answers

Here are some practice questions to test your understanding:

**Conceptual Questions:**

1.  **Question:** Why is a correction step required for BCD addition, but not for standard octal or hexadecimal addition?
    **Answer:** BCD represents each decimal digit with a fixed 4-bit binary code. When performing binary addition on two BCD digits, the result might exceed the maximum decimal value that can be represented by 4 bits (which is 9). Standard octal and hexadecimal addition, on the other hand, are performed directly according to their respective bases (8 and 16), where carries are handled naturally by the base system itself. The BCD correction step ensures that the output remains a valid representation of each decimal digit, in line with its decimal value. This is a direct application of CO1.

2.  **Question:** In BCD addition, under what two conditions do we need to add 0110 to the binary sum of two nibbles?
    **Answer:** We need to add 0110 if either:
    a) The binary sum of the two 4-bit BCD nibbles is greater than 9 (decimal).
    b) There is a carry-out from the 4-bit binary addition of the two nibbles.
    This directly tests understanding of the BCD addition algorithm, relevant to CO1 and foundational for CO3.

**Exam-Oriented Questions:**

3.  **Question:** Add the following octal numbers: 73 octal + 45 octal.
    **Answer:**
    ```
       1  (carry)
       73
    +  45
    ------
      140 (octal)
    ```
    *   **Units:** 3 + 5 = 8 (decimal). 8 = 10 octal. Write 0, carry 1.
    *   **Eights:** 1 (carry) + 7 + 4 = 12 (decimal). 12 = 14 octal. Write 4, carry 1.
    *   **Sixty-fours:** 1 (carry). Write 1.
    Result: 140 octal. This is a typical exam-style arithmetic question for CO1.

4.  **Question:** Add the following hexadecimal numbers: 9F hex + A8 hex.
    **Answer:**
    ```
       1  (carry)
       9F
    +  A8
    -------
      147 (hex)
    ```
    *   **Units:** F (15) + 8 = 23 (decimal). 23 = 1 * 16 + 7 = 17 hex. Write 7, carry 1.
    *   **Sixteens:** 1 (carry) + 9 + A (10) = 20 (decimal). 20 = 1 * 16 + 4 = 14 hex. Write 4, carry 1.
    *   **Two hundred fifty-sixes:** 1 (carry). Write 1.
    Result: 147 hex. Another standard exam question for CO1.

5.  **Question:** Add the following BCD numbers: 68 BCD + 27 BCD.
    **Answer:**
    ```
       0110 1000  (68 BCD)
    +  0010 0111  (27 BCD)
    ------------
    ```
    *   **Units digit:** 8 (1000) + 7 (0111) = 1111 (binary). This is 15 decimal.
        *   15 > 9, so it's invalid.
        *   **Correction:** 1111 + 0110 = 10101 (binary).
        *   Unit digit is 0101 (5). Carry = 1.

    *   **Tens digit:** 6 (0110) + 2 (0010) = 0110 (binary).
        *   Add carry: 0110 + 1 (carry) = 0111 (binary). This is 7 decimal.
        *   7 <= 9, so it's valid. No carry-out.
        *   Tens digit is 0111 (7).

    *   Combine: 0111 (tens) 0101 (units) = 0111 0101 BCD, which is 75 BCD.

    Result: 75 BCD. This question tests the core BCD addition and correction logic, crucial for CO1 and CO3.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
