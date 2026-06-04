---
title: "Binary representation of data and numbers"
subject: "FOUNDATIONS OF COMPUTING: FROM HARDWARE ESSENTIALS TO WEB DESIGN"
module: "Module 2: Binary representation of data and numbers"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5df8"
status: "completed"
scrapedAt: "2026-05-20T16:34:14.174Z"
---
# Foundations of Computing: From Hardware Essentials to Web Design

## Module 2: Binary Representation of Data and Numbers

Welcome to Module 2! In this module, we're going to dive deep into the very heart of how computers understand and process information. We've already touched upon the fundamental components of an IT environment (that's **CO1** right there!), and now we're going to build upon that by understanding how computers *represent* all the data we work with, from text and images to numbers and instructions. This is crucial for understanding CPU architectures and basic computer functioning, which directly links to **CO2**. So, let's get started on this fascinating journey into the world of binary!

---

### Understanding the Language of Computers: Why Binary?

Imagine you're trying to teach someone a new language, but you can only use two sounds: a "buzz" and a "whirr." It sounds limiting, right? Well, computers are a bit like that. At their absolute core, computers work with electrical signals. These signals can be in one of two states: **ON** (electricity is flowing) or **OFF** (electricity is not flowing).

Think of it like a light switch. It's either on, or it's off. There's no in-between. This simple, two-state system is the foundation of everything a computer does. This concept, that computers operate on these basic "on" or "off" states, is a fundamental aspect of understanding the hardware essentials (**CO1**) and how data is processed (**CO2**).

This "on" or "off" state is represented by the digits **1** (for ON) and **0** (for OFF). This system is called the **binary numeral system**, or **base-2**.

*   **What is a "bit"?** Each individual 0 or 1 is called a **bit**, which is short for "binary digit." It's the smallest unit of data in a computer.

Now, you might be thinking, "How can just 0s and 1s represent something as complex as a photograph, a word document, or even a movie?" That's where the magic of *representation* comes in. By combining bits in different sequences, we can represent an astonishing array of information.

---

### Representing Numbers: The Power of Positional Notation

We're all very familiar with the **decimal numeral system**, or **base-10**. We use ten digits (0 through 9), and the position of each digit tells us its value. For instance, in the number 345:

*   The '5' is in the ones place (10⁰).
*   The '4' is in the tens place (10¹).
*   The '3' is in the hundreds place (10²).

So, 345 means (3 * 10²) + (4 * 10¹) + (5 * 10⁰) = 300 + 40 + 5 = 345.

Binary works on the *exact same principle*, but instead of powers of 10, we use **powers of 2**. Each position in a binary number represents a power of 2, starting from 2⁰ on the rightmost side.

Let's look at an example. Consider the binary number **1011**:

*   **Rightmost bit (1):** This is the 2⁰ place (which is 1). So, 1 * 1 = 1.
*   **Next bit to the left (1):** This is the 2¹ place (which is 2). So, 1 * 2 = 2.
*   **Next bit to the left (0):** This is the 2² place (which is 4). So, 0 * 4 = 0.
*   **Leftmost bit (1):** This is the 2³ place (which is 8). So, 1 * 8 = 8.

To convert **1011** to decimal, we add up the values from each position: 8 + 0 + 2 + 1 = **11**.

So, the binary number `1011` is equivalent to the decimal number `11`.

This positional system, using powers of 2, is how computers handle all numerical data. Understanding this conversion is a core skill for **CO2**, as it shows how raw binary translates into meaningful numbers.

**Quick Recap:**
*   Binary is base-2, using only 0s and 1s.
*   Decimal is base-10, using 0-9.
*   The position of a digit in both systems determines its value, based on powers of the base.

**How is this tested?** You'll often see questions asking you to convert binary numbers to decimal, or vice versa. Always remember to work from right to left, starting with 2⁰.

**Analogy:** Think of a score in a game. If you have a series of lamps, and each lamp is either ON or OFF, you can assign a value to each lamp (e.g., 1, 2, 4, 8, 16, etc., corresponding to powers of 2). By turning specific lamps ON, you can create different scores.

#### Converting Decimal to Binary

To convert a decimal number to binary, we can use a process of repeated division by 2.

Let's convert the decimal number **25** to binary:

1.  **Divide 25 by 2:** 25 / 2 = 12 with a remainder of **1**.
2.  **Divide the quotient (12) by 2:** 12 / 2 = 6 with a remainder of **0**.
3.  **Divide the quotient (6) by 2:** 6 / 2 = 3 with a remainder of **0**.
4.  **Divide the quotient (3) by 2:** 3 / 2 = 1 with a remainder of **1**.
5.  **Divide the quotient (1) by 2:** 1 / 2 = 0 with a remainder of **1**.

Now, we read the remainders from bottom to top: **11001**. So, the decimal number 25 is `11001` in binary.

Let's check: (1 * 2⁴) + (1 * 2³) + (0 * 2²) + (0 * 2¹) + (1 * 2⁰) = 16 + 8 + 0 + 0 + 1 = 25. Perfect!

*   **Important Note:** Always remember to read the remainders from *bottom to top* when converting decimal to binary. It's a common mistake to read them from top to bottom!

#### Binary Arithmetic: Addition

Just like with decimal numbers, we can perform arithmetic operations in binary. Let's look at binary addition. The rules are simple:

*   0 + 0 = 0
*   0 + 1 = 1
*   1 + 0 = 1
*   1 + 1 = 0 with a **carry-over of 1** to the next position.

This last rule is key. When you add 1 + 1 in binary, you get 0 in that position, and the '1' carries over, just like when you have 9 + 1 = 10 in decimal (you get 0 in the ones place and carry over the 1 to the tens place).

Let's add two binary numbers: `1011` and `0110`.

```
   1011  (Decimal 11)
+  0110  (Decimal 6)
-------
```

Starting from the rightmost column:

1.  **1 + 0 = 1**. Write down 1.
    ```
       1011
    +  0110
    -------
           1
    ```
2.  **1 + 1 = 0 with a carry of 1**. Write down 0 and carry the 1 to the next column.
    ```
      1
       1011
    +  0110
    -------
          01
    ```
3.  **0 + 1 + (carry 1) = 0**. Write down 0.
    ```
      1
       1011
    +  0110
    -------
         001
    ```
4.  **1 + 0 = 1**. Write down 1.
    ```
      1
       1011
    +  0110
    -------
      1001
    ```

So, `1011` + `0110` = `1001`.

Let's check this in decimal: 11 + 6 = 17. And `1001` in binary is (1 * 8) + (0 * 4) + (0 * 2) + (1 * 1) = 8 + 1 = 9. Uh oh, something went wrong in our calculation! Let's re-do step 3 carefully.

Ah, I see it! In step 3, it's 0 (from `1011`) + 1 (from `0110`) + the **carry of 1**. So, 0 + 1 + 1 = 0 with a carry of 1. Let's correct that:

```
      11  <-- Carries
       1011  (Decimal 11)
    +  0110  (Decimal 6)
    -------
      10001 (Decimal 17)
```

Let's retrace:

1.  **1 + 0 = 1**.
2.  **1 + 1 = 0, carry 1**.
3.  **0 + 1 + carry 1 = 0, carry 1**.
4.  **1 + 0 + carry 1 = 0, carry 1**.
5.  We have a final carry of 1.

So, the result is `10001`.
Let's convert `10001` to decimal: (1 * 16) + (0 * 8) + (0 * 4) + (0 * 2) + (1 * 1) = 16 + 1 = **17**. Success!

Binary arithmetic, especially addition, is a fundamental concept tested in exams and crucial for understanding how processors perform calculations, directly supporting **CO2**.

---

### Representing Other Data: Beyond Numbers

Computers don't just store numbers; they store text, images, sounds, and instructions. How do they do that using only 0s and 1s? Again, it's all about **representation schemes**.

#### Text Representation: Character Encoding

To represent letters, punctuation, and special characters, computers use **character encoding schemes**. These are like dictionaries that map a specific sequence of bits to a particular character.

*   **ASCII (American Standard Code for Information Interchange):** This was one of the earliest and most widely used encoding schemes. It uses 7 bits (sometimes extended to 8 bits) to represent characters. For example:
    *   The uppercase letter 'A' is represented by the binary code `01000001`.
    *   The lowercase letter 'a' is `01100001`.
    *   The digit '7' is `00110111`.

    Notice that there's a pattern. The difference between 'A' and 'a' is a single bit flip in the sixth position (from the left, starting with position 1). This consistency helps in processing text.

*   **Unicode:** As the world became more globalized, ASCII wasn't enough. It couldn't represent characters from many other languages (like Chinese, Arabic, or Cyrillic) or a vast array of symbols. Unicode was developed to address this. It's a much larger standard that can represent over a million characters.
    *   Commonly, Unicode characters are represented using **UTF-8**, a variable-length encoding. A character might be represented using 1 to 4 bytes (8 bits each). This makes it efficient for English text (often using just one byte, compatible with ASCII) while still being able to represent any character in any language.

Understanding character encoding is vital for comprehending how text is stored and processed, directly linking to **CO2**. When you type on your keyboard, the computer translates that keystroke into a binary code using one of these schemes.

*   **Exam Tip:** Be aware of different encoding schemes and their purpose. While you might not need to memorize all ASCII codes, understanding the concept of a mapping between characters and binary is crucial.

#### Representing Images

Images are stored as a grid of tiny dots called **pixels**. Each pixel has a color. To represent the color of each pixel in binary, we use different schemes:

*   **Black and White Images:** Each pixel can be either black or white. This is simple! One bit can represent a pixel: 0 for white, 1 for black (or vice versa, depending on the convention).
*   **Grayscale Images:** These images have shades of gray. We need more bits per pixel to represent the different shades. For example, 8 bits per pixel can represent 2⁸ = 256 different shades of gray.
*   **Color Images:** This is where it gets more complex. Colors are typically represented using a combination of primary colors: Red, Green, and Blue (RGB).
    *   In an **RGB color model**, each pixel's color is defined by the intensity of red, green, and blue light.
    *   Commonly, each of these primary colors is assigned 8 bits (a "byte"), allowing for 256 levels of intensity for red, 256 for green, and 256 for blue.
    *   So, a single color pixel would be represented by 24 bits (8 bits for Red + 8 bits for Green + 8 bits for Blue). This allows for 256 x 256 x 256 = 16,777,216 possible colors!

The way images are stored and processed, using binary to represent pixel data, is a direct application of data representation in computing, supporting **CO2**.

#### Representing Sound

Digital audio is created by sampling an analog sound wave at regular intervals and assigning a numerical value to the amplitude (loudness) of the wave at each sample point.

*   **Sampling Rate:** How often the sound wave is measured per second (e.g., 44,100 times per second for CDs).
*   **Bit Depth:** How many bits are used to represent the amplitude of each sample. Higher bit depth means more precise representation of the sound and a wider dynamic range. For example, 16-bit audio (like CDs) can represent 2¹⁶ = 65,536 different amplitude levels.

These numerical values are stored in binary, allowing computers to play back audio.

#### Representing Instructions: Machine Code

Beyond just data, computers also execute instructions – the steps that make up a program. These instructions are also represented in binary, forming what's known as **machine code** or **machine language**.

*   Each type of operation (like adding two numbers, moving data, or comparing values) has a unique binary code called an **opcode**.
*   Instructions also specify which data or memory locations to operate on (these are called operands).

For example, a simplified instruction might look like:
`00100011 01010001`

The first part (`00100011`) could be the opcode for "add," and the second part (`01010001`) could be the operand, specifying a memory address where the number to be added is stored.

The processor in the computer is designed to read and execute these binary instructions directly. This is the lowest level of programming and is fundamental to how a CPU works, directly linking to **CO2**. Without understanding that instructions are also binary, we can't grasp how software makes hardware do things.

*   **Schneider & Gersting** delve into this in Chapter 3, discussing the fetch-decode-execute cycle, where the CPU processes these binary instructions.

---

### Data Storage and Organization: Bytes, Words, and Beyond

We've talked about bits, but computers rarely deal with single bits. Bits are usually grouped together.

*   **Byte:** A byte is a group of **8 bits**. It's the most common unit for storing a character (like in ASCII) or a small number. When we say a file is 5 megabytes, it means 5 million bytes.

    Example: The binary number `10110101` is 1 byte.

*   **Word:** A word is the number of bits that a CPU can process simultaneously. This varies depending on the CPU architecture. Common word sizes are 16 bits, 32 bits, or 64 bits. A 32-bit CPU can process data in chunks of 32 bits at a time.

These groupings are essential for efficiently storing and retrieving data from memory and for the CPU's processing capabilities. Understanding these units is part of grasping how hardware and data interact, reinforcing **CO1** and **CO2**.

**Remember this:** The byte is your fundamental building block for many data types.

---

### Negative Numbers: Signed Binary Representation

So far, we've only looked at representing positive numbers. How do computers represent negative numbers? This is a crucial aspect of **CO2**, as it's how arithmetic operations involving negative values are handled. There are a few common methods:

1.  **Sign-Magnitude Representation:**
    *   The leftmost bit is used as the **sign bit**. A `0` indicates a positive number, and a `1` indicates a negative number.
    *   The remaining bits represent the magnitude (absolute value) of the number.

    Example (using 8 bits):
    *   `+5` might be `00000101`
    *   `-5` might be `10000101`

    **Problem:** This method has two representations for zero (`+0` and `-0`) and makes addition and subtraction more complex for the CPU.

2.  **One's Complement:**
    *   To get the one's complement of a binary number, you invert all the bits (change 0s to 1s and 1s to 0s).
    *   For negative numbers, you take the one's complement of the positive version.

    Example (using 8 bits):
    *   `+5` is `00000101`
    *   `-5` (one's complement) is the inversion of `00000101`, which is `11111010`.

    **Problem:** Still has two representations for zero and complex arithmetic.

3.  **Two's Complement Representation (Most Common):**
    *   This is the method almost all modern computers use. It simplifies arithmetic operations.
    *   To find the two's complement of a binary number (to represent its negative):
        1.  Find the one's complement (invert all bits).
        2.  Add 1 to the result.

    Example (using 8 bits):
    *   Let's find the two's complement for `-5`.
    *   First, the positive version of 5: `00000101`
    *   Step 1: Invert the bits (one's complement): `11111010`
    *   Step 2: Add 1: `11111010 + 1 = 11111011`

    So, `-5` in 8-bit two's complement is `11111011`.

    **Why is it good?**
    *   There's only one representation for zero.
    *   Addition and subtraction work seamlessly. For example, to subtract 5 from 10, you can simply add 10 and the two's complement of 5. The processor's adder circuit handles it without needing a separate subtractor.

    Let's try adding 10 and -5 using 8-bit two's complement:
    *   `+10` is `00001010`
    *   `-5` is `11111011`

    ```
      11111010  (Carry-ins)
      00001010  (+10)
    + 11111011  (-5)
    ----------
     100000101
    ```
    When adding `00001010` and `11111011`, the leftmost carry (the 9th bit) is discarded because we are working within 8 bits. The result is `00000101`, which is indeed +5! This elegant handling of negative numbers is a key aspect of CPU architecture (**CO2**).

*   **Schneider & Gersting** and **Englander** both cover these representations extensively, highlighting their importance for numerical computation.

---

### Floating-Point Representation: Numbers with Decimal Points

We've covered integers, but what about numbers with fractional parts, like 3.14 or 0.005? These are represented using **floating-point notation**.

*   **Concept:** Floating-point representation is similar to scientific notation (e.g., 6.02 x 10²³). It breaks a number down into three parts:
    1.  **Sign:** Positive or negative.
    2.  **Exponent:** The power to which the base (usually 2 in computers) is raised. This determines the "size" or magnitude of the number.
    3.  **Mantissa (or Significand):** The digits of the number, normalized.

*   **IEEE 754 Standard:** This is the most common standard for floating-point representation. It defines formats for single-precision (32-bit) and double-precision (64-bit) numbers.

    For example, a single-precision number uses:
    *   1 bit for the sign.
    *   8 bits for the exponent.
    *   23 bits for the mantissa.

    The interpretation of these bits follows specific rules to reconstruct the original number. This allows computers to represent a very wide range of numbers, from very small fractions to very large numbers, albeit with some limitations in precision.

Understanding floating-point representation is important for fields that require precise calculations, like scientific computing or financial applications. It's another layer of data representation that impacts **CO2**.

---

### Error Detection and Correction: Ensuring Data Integrity

With all this binary manipulation, how do we ensure that the data isn't corrupted during transmission or storage? This is where **error detection** and **error correction** come in.

*   **Parity Bit:** A simple way to detect errors is using a **parity bit**. A parity bit is an extra bit added to a binary string to make the total number of '1's either even (even parity) or odd (odd parity).

    *   **Even Parity:** If the data has an even number of 1s, the parity bit is 0. If it has an odd number of 1s, the parity bit is 1.
    *   **Odd Parity:** If the data has an odd number of 1s, the parity bit is 0. If it has an even number of 1s, the parity bit is 1.

    When the data is received, the parity is checked. If the parity doesn't match the expected parity, it indicates that an error has occurred (specifically, an odd number of bits have flipped).

    Example (Even Parity):
    *   Data: `10110` (three 1s - odd)
    *   Parity bit needed: `1` (to make the total number of 1s even: `101101`)
    *   If the received data is `101100`, the parity check will fail (two 1s), indicating an error.

*   **More Advanced Techniques:** While parity is simple, it can only detect an odd number of bit errors. For more robust error handling, more sophisticated codes like **Hamming codes** or **Cyclic Redundancy Checks (CRCs)** are used. These can not only detect multiple bit errors but also correct them in many cases.

These techniques are crucial for reliable data storage and communication, impacting **CO1** (understanding IT environments) and the overall integrity of data processed by the computer (**CO2**).

---

### Connection to Web Design (CO4)

You might be wondering, "How does all this binary stuff relate to web design?" It's a great question! While you won't be directly manipulating binary code when building websites with HTML, CSS, and JavaScript, the underlying principles are fundamental.

*   **Data Representation:** When you create a web page, you're dealing with text (HTML tags, content), images (JPEGs, PNGs), and potentially user input (numbers, text). All of this data, when stored on a server, transmitted over the internet, and displayed in your browser, is ultimately represented in binary. Understanding how characters are encoded (like UTF-8 for web text) is directly relevant.
*   **File Formats:** Images like JPEGs and PNGs are complex files structured using specific binary formats. Your browser knows how to interpret these binary structures to display images correctly.
*   **Network Communication:** When your browser requests a web page, it sends requests and receives data over the internet. All of this communication happens through protocols that transmit binary data.
*   **JavaScript and Data Types:** In JavaScript, you work with various data types (strings, numbers, booleans). The underlying computer systems represent these types using binary. While JavaScript abstracts this away, understanding the binary foundation helps appreciate why different data types behave the way they do.

So, while **CO4** focuses on application (building web pages), the knowledge from **CO1** and **CO2** about data representation provides the essential foundation. It’s like learning the alphabet and grammar before you can write a novel. You don't see the individual letters in a published book, but they are undeniably there, forming every word.

---

### Summary and Key Takeaways

We've covered a lot of ground in this module! Let's reinforce the most important points:

*   **Binary is the fundamental language of computers**, built on two states: ON (1) and OFF (0).
*   **Bits are the smallest unit of data**. Bytes are groups of 8 bits.
*   **Positional notation** is key: in binary, the position of a digit determines its value based on powers of 2. Mastering binary-to-decimal and decimal-to-binary conversion is essential.
*   Computers represent **text** using character encoding schemes like ASCII and Unicode.
*   **Images, sound, and instructions** are all converted into binary sequences through specific representation methods.
*   **Two's complement** is the standard way to represent negative numbers, simplifying arithmetic.
*   **Floating-point representation** (like IEEE 754) handles numbers with decimal points.
*   **Error detection** (like parity bits) helps ensure data integrity.

This understanding of how data is represented in binary is absolutely critical for all subsequent modules. It underpins how CPUs operate, how memory is managed, and how information flows through an IT system. Keep these concepts sharp!

---

## Sample Questions and Answers

Here are a few questions to help you test your understanding and prepare for exams.

**1. Conceptual Question:**
**Question:** Why do computers use binary (base-2) representation instead of the decimal (base-10) system that humans commonly use?
**Answer:** Computers use binary because their fundamental building blocks, transistors, can easily represent two distinct states: ON (represented by 1) and OFF (represented by 0). This is due to the simple on/off nature of electrical signals. Implementing ten distinct states for decimal representation would require much more complex and less reliable hardware.

**2. Conversion Question:**
**Question:** Convert the binary number `1101101` to its decimal equivalent.
**Answer:**
We use positional notation with powers of 2, starting from the rightmost digit (2⁰):
`1101101` (binary)
= (1 * 2⁶) + (1 * 2⁵) + (0 * 2⁴) + (1 * 2³) + (1 * 2²) + (0 * 2¹) + (1 * 2⁰)
= (1 * 64) + (1 * 32) + (0 * 16) + (1 * 8) + (1 * 4) + (0 * 2) + (1 * 1)
= 64 + 32 + 0 + 8 + 4 + 0 + 1
= **109** (decimal)

**3. Arithmetic Question:**
**Question:** Perform the following binary addition: `10110` + `01110`
**Answer:**
```
   1 1 1   <-- Carries
   10110   (Decimal 22)
+  01110   (Decimal 14)
---------
  100100   (Decimal 36)
```
Step-by-step:
*   Rightmost: 0 + 0 = 0
*   Next: 1 + 1 = 0, carry 1
*   Next: 1 + 1 + carry 1 = 1, carry 1
*   Next: 0 + 1 + carry 1 = 0, carry 1
*   Leftmost: 1 + 0 + carry 1 = 0, carry 1 (which becomes the most significant bit)
Result: `100100`.
Decimal check: 22 + 14 = 36. Binary `100100` = (1*32) + (0*16) + (0*8) + (1*4) + (0*2) + (0*1) = 32 + 4 = 36. Correct.

**4. Representation Question:**
**Question:** Explain the concept of two's complement representation for negative numbers and why it is preferred in computer systems.
**Answer:** Two's complement is a method for representing signed integers. To get the two's complement of a number (e.g., to represent its negative), you invert all the bits of its positive representation (one's complement) and then add 1. It is preferred because it simplifies the design of arithmetic logic units (ALUs) in CPUs. Specifically, addition and subtraction operations can be performed using the same hardware circuitry without needing separate circuits for subtraction or handling different sign conventions. It also provides a single representation for zero, unlike sign-magnitude or one's complement.

**5. Application/Knowledge Level K2 Question:**
**Question:** How is the letter 'C' represented in binary if using the ASCII standard? (Assume an 8-bit representation with even parity).
**Answer:**
First, find the ASCII value for 'C'. In ASCII, 'C' is decimal 67.
Now, convert 67 to binary:
67 / 2 = 33 remainder **1**
33 / 2 = 16 remainder **1**
16 / 2 = 8  remainder **0**
8 / 2 =  4  remainder **0**
4 / 2 =  2  remainder **0**
2 / 2 =  1  remainder **0**
1 / 2 =  0  remainder **1**
Reading remainders bottom-up: `1000011`.
This is 7 bits. For an 8-bit representation, we typically pad with a leading 0: `01000011`.
Now, let's check for even parity. The number of 1s in `01000011` is 3 (odd).
To ensure even parity, the parity bit (which would be the leftmost bit in some conventions, or an appended bit) should be `1`. If we append it, it would be `01000011`**`1`**. However, if the first bit is designated as the parity bit in an 8-bit field, then the data `1000011` would have a parity bit of `1` prepended: `11000011`. A more common way to express this, if asked for the 8-bit ASCII representation, is simply the 7-bit code padded with a leading zero: `01000011`. If the question *specifically* asks for the parity bit's inclusion for *even* parity, and assuming the parity bit is *added* to the data: `01000011` (3 ones) needs a `1` to make it even. So the full transmitted bit string would be `010000111` (9 bits) or `101000011` if the parity bit is prepended. The most straightforward answer for the 8-bit ASCII representation is `01000011`. The parity is an extra layer.

*(Self-correction for clarity: Often, when asked for the 8-bit ASCII representation, it implies the standard 7-bit code plus a padding bit. If parity is mentioned, it's usually an additional bit or the most significant bit is repurposed. The most common interpretation for "8-bit ASCII" of 'C' is `01000011`.)*
Let's stick to the most direct answer for the 8-bit representation: **`01000011`**. The parity discussion is a separate check.
