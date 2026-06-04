---
title: "Binary representation of data and numbers"
subject: "FOUNDATIONS OF COMPUTING: FROM HARDWARE ESSENTIALS TO WEB DESIGN"
module: "Module 2: Binary representation of data and numbers"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9754"
status: "completed"
scrapedAt: "2026-05-23T16:06:52.761Z"
---
# Module 2: Binary Representation of Data and Numbers

Welcome back, everyone! In our first module, we got a broad overview of what computing is all about. Now, we're diving deep into the very language that computers speak: **binary**. This module is absolutely fundamental because everything a computer does, from displaying this text to running complex software, is ultimately built on this simple concept.

Our journey in this module will focus on how we represent all sorts of information – numbers, text, images, sounds – using just two symbols: 0 and 1. This is the core of **binary representation of data and numbers**, and understanding it will unlock so much of how computers work. This directly ties into our **Course Outcome 1 (CO1)**, as we start identifying the fundamental components and working of an IT environment by understanding its basic language. More specifically, it will help us achieve **Course Outcome 2 (CO2)** by explaining data representations.

## 1. The Binary System: Why Two Symbols?

Think about how we count in our everyday lives. We use the **decimal system**, which is based on ten digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9. We call this the base-10 system. Why base-10? Probably because we have ten fingers! It's a natural way for us to group things.

Computers, however, are electronic devices. Their fundamental building blocks operate on the principle of having an "on" state or an "off" state. Imagine a light switch. It's either on or off. There's no in-between. This "on/off" duality is perfect for representing two distinct states, and that's where binary comes in.

The **binary system** is a **base-2 system**. It uses only two digits: **0** and **1**.

*   **0** can represent "off," "false," or "no signal."
*   **1** can represent "on," "true," or "signal present."

These individual 0s and 1s are called **bits** (short for **binary digits**). A single bit is the smallest unit of data a computer can process.

**Analogy:** Think of it like a simple on/off switch for a light. You can have the light *off* (0) or the light *on* (1). Now, imagine you have multiple light switches. By arranging them in different combinations of on and off, you can represent much more complex information than just a single light. This is precisely what computers do with bits!

*(Schneider & Gersting, Chapter 2)* often emphasizes that the simplicity of binary is its strength. Electronic circuits are much easier and more reliable to build and operate when they only need to distinguish between two voltage levels (high for 1, low for 0) rather than ten different levels needed for decimal.

## 2. Representing Numbers in Binary

So, how do we represent numbers like 5, 10, or 256 using only 0s and 1s? We use a positional number system, much like the decimal system.

In the decimal system, each digit's position represents a power of 10:

*   The rightmost digit is in the $10^0$ (ones) place.
*   The next digit to the left is in the $10^1$ (tens) place.
*   The next is in the $10^2$ (hundreds) place, and so on.

For example, the decimal number 123 means:
$1 \times 10^2 + 2 \times 10^1 + 3 \times 10^0 = 100 + 20 + 3 = 123$.

The binary system works the same way, but with powers of 2:

*   The rightmost bit is in the $2^0$ (ones) place.
*   The next bit to the left is in the $2^1$ (twos) place.
*   The next is in the $2^2$ (fours) place.
*   The next is in the $2^3$ (eights) place, and so on.

Let's convert some binary numbers to decimal:

**Example 1:** The binary number `101`

*   Starting from the right:
    *   `1` is in the $2^0$ place: $1 \times 2^0 = 1 \times 1 = 1$
    *   `0` is in the $2^1$ place: $0 \times 2^1 = 0 \times 2 = 0$
    *   `1` is in the $2^2$ place: $1 \times 2^2 = 1 \times 4 = 4$

*   Add them up: $4 + 0 + 1 = 5$. So, `101` in binary is `5` in decimal.

**Example 2:** The binary number `11010`

*   Starting from the right:
    *   `0` is in the $2^0$ place: $0 \times 2^0 = 0 \times 1 = 0$
    *   `1` is in the $2^1$ place: $1 \times 2^1 = 1 \times 2 = 2$
    *   `0` is in the $2^2$ place: $0 \times 2^2 = 0 \times 4 = 0$
    *   `1` is in the $2^3$ place: $1 \times 2^3 = 1 \times 8 = 8$
    *   `1` is in the $2^4$ place: $1 \times 2^4 = 1 \times 16 = 16$

*   Add them up: $16 + 8 + 0 + 2 + 0 = 26$. So, `11010` in binary is `26` in decimal.

**Converting Decimal to Binary:**
To convert a decimal number to binary, you can use the method of repeated division by 2. Keep track of the remainders.

**Example 3:** Convert decimal `23` to binary.

1.  $23 \div 2 = 11$ remainder **1**
2.  $11 \div 2 = 5$ remainder **1**
3.  $5 \div 2 = 2$ remainder **1**
4.  $2 \div 2 = 1$ remainder **0**
5.  $1 \div 2 = 0$ remainder **1**

Now, read the remainders from bottom to top: `10111`. So, decimal `23` is binary `10111`.

*   Let's check: $1 \times 2^4 + 0 \times 2^3 + 1 \times 2^2 + 1 \times 2^1 + 1 \times 2^0 = 16 + 0 + 4 + 2 + 1 = 23$. Perfect!

This process of converting between decimal and binary is a core skill and often tested. It directly supports **CO2** by explaining data representations. Remember the place values: 1, 2, 4, 8, 16, 32, 64, 128... These are the building blocks!

### How many numbers can we represent?

With $n$ bits, we can represent $2^n$ different values.

*   1 bit: $2^1 = 2$ values (0, 1)
*   2 bits: $2^2 = 4$ values (00, 01, 10, 11)
*   3 bits: $2^3 = 8$ values (000 to 111)
*   8 bits (a byte): $2^8 = 256$ values (0 to 255)

This is why you'll often hear about bytes and kilobytes, megabytes, etc. These are all based on powers of 2.

## 3. Beyond Integers: Representing Other Data Types

Computers don't just store whole numbers. They need to store text, decimal numbers (like 3.14), images, sounds, and instructions. How do they do it with just 0s and 1s?

### 3.1 Representing Text: Character Encoding

Text is made up of characters: letters (a-z, A-Z), numbers (0-9), punctuation marks (!, ?, .), and special symbols (@, #, $). To store these, we need a way to assign a unique binary code to each character. This is done through **character encoding schemes**.

The most common and historically important schemes are:

*   **ASCII (American Standard Code for Information Interchange):** This was one of the earliest and widely adopted standards.
    *   Standard ASCII uses 7 bits, allowing for 128 characters (uppercase and lowercase English letters, numbers, punctuation, and control characters).
    *   Extended ASCII uses 8 bits (a byte), allowing for 256 characters, which includes additional symbols and accented characters for different languages.
    *   **Example:** In ASCII, the character 'A' is represented by the decimal number 65. Converting 65 to binary (using 7 bits for simplicity):
        *   $65 \div 2 = 32$ R **1**
        *   $32 \div 2 = 16$ R **0**
        *   $16 \div 2 = 8$ R **0**
        *   $8 \div 2 = 4$ R **0**
        *   $4 \div 2 = 2$ R **0**
        *   $2 \div 2 = 1$ R **0**
        *   $1 \div 2 = 0$ R **1**
        *   Reading bottom-up: `1000001`. So, 'A' is `1000001` in 7-bit ASCII.
    *   If we use 8 bits (a byte), we typically pad with a leading 0: `01000001`.

*   **Unicode:** As the world became more globalized and the need to represent characters from many different languages (Chinese, Arabic, Cyrillic, etc.) arose, ASCII proved insufficient. Unicode was developed to provide a universal standard.
    *   Unicode assigns a unique number (called a **code point**) to virtually every character in every writing system, plus many symbols and emojis.
    *   Unicode can be represented using different **encoding forms**, such as UTF-8, UTF-16, and UTF-32.
    *   **UTF-8** is the most common on the web. It's a variable-width encoding, meaning it uses a different number of bytes for different characters. ASCII characters (0-127) are represented using a single byte (identical to 8-bit ASCII). Characters from other languages and symbols use more bytes (2 to 4 bytes). This backward compatibility with ASCII and efficient use of space for common characters makes UTF-8 very popular.
    *   **Why this is important:** When you save a text file, the computer needs to know which encoding was used to interpret the bytes correctly. Saving a file as UTF-8 and opening it with an assumption of ASCII can lead to garbled characters, which is a common pitfall.

*(Schneider & Gersting, Chapter 2)* discusses character encoding as a prime example of how abstract data is given concrete binary representation. *(Englander, Chapter 4)* also touches upon character sets as part of the overall system architecture.

**Relatable Example:** Think about sending an email or posting on social media. When you type your message, your computer converts each character into its binary representation using an encoding like UTF-8. This binary data is then transmitted. The receiving computer interprets this binary data back into characters based on the same encoding. If the encoding doesn't match, you might see strange symbols instead of the intended text. This is why it’s crucial for systems to agree on how data is represented.

### 3.2 Representing Real Numbers (Floating-Point Numbers)

So far, we've focused on integers (whole numbers). What about numbers with decimal points, like 3.14159 or 0.001? These are called **real numbers** or **floating-point numbers**.

Representing these in binary is more complex. Computers typically use the **IEEE 754 standard** for floating-point representation. The idea is to break a number into three parts:

1.  **Sign:** A single bit indicating if the number is positive (0) or negative (1).
2.  **Exponent:** This part determines the magnitude or "range" of the number, similar to scientific notation ($1.23 \times 10^4$). It tells us where to "float" the decimal (or binary) point.
3.  **Mantissa (or Significand):** This part represents the significant digits of the number.

Let's take a simplified analogy. Imagine representing a number like 123.45.

*   We can write it in scientific notation as $1.2345 \times 10^2$.
*   Here, the sign is positive.
*   The exponent is 2.
*   The mantissa is 1.2345.

The IEEE 754 standard applies this concept to binary. The exponent part allows us to represent very large and very small numbers, as well as numbers with fractional parts.

*   **Important Note:** Floating-point representation is often an *approximation*. Because computers use a fixed number of bits, they can't always represent real numbers precisely. This can lead to tiny rounding errors, which are crucial to understand in scientific and financial applications.

*(Englander, Chapter 4)* goes into detail about how floating-point numbers are stored, which is vital for understanding numerical precision in computing.

### 3.3 Representing Images, Sound, and Other Data

*   **Images:** Digital images are typically composed of tiny dots called **pixels**. Each pixel has a color. To represent an image, we need to specify the color of every pixel.
    *   **Black and White Images:** A simple way is to use 1 bit per pixel (0 for black, 1 for white, or vice versa).
    *   **Grayscale Images:** More bits per pixel are needed to represent shades of gray. For example, 8 bits per pixel can give 256 shades of gray.
    *   **Color Images:** To represent color, we often use combinations of primary colors (Red, Green, Blue – RGB). Each color component (Red, Green, Blue) is assigned a value indicating its intensity.
        *   A common format is 24-bit color, where each pixel uses 8 bits for Red, 8 bits for Green, and 8 bits for Blue. This allows for millions of different colors ($2^{24}$). The binary representation for each pixel would be 24 bits long, specifying the intensity of R, G, and B.

*   **Sound:** Digital audio is created by sampling the analog sound wave at regular intervals.
    *   At each sampling point, the amplitude (loudness) of the sound wave is measured and converted into a binary number.
    *   The **sampling rate** (how often the sound is sampled per second) and the **bit depth** (how many bits are used to represent the amplitude at each sample) determine the quality of the digital audio. Higher sampling rates and bit depths result in more accurate representations but require more storage space.

*(Schneider & Gersting)* likely covers these data types as examples of how binary is applied to different forms of information. *(Duckett's HTML, CSS, and JavaScript)* might not delve into the binary representation of images or sound directly, but it's the underlying mechanism that allows web browsers to display them.

## 4. Bits, Bytes, and Beyond: Units of Data

We've already touched upon this, but let's formalize the terminology.

*   **Bit:** The fundamental unit (0 or 1).
*   **Byte:** A group of 8 bits. This is a very common unit because it's enough to store one character (using ASCII) or a small number.
*   **Kilobyte (KB):** Traditionally $1024$ bytes.
*   **Megabyte (MB):** Traditionally $1024$ Kilobytes ($1024 \times 1024$ bytes).
*   **Gigabyte (GB):** Traditionally $1024$ Megabytes.
*   **Terabyte (TB):** Traditionally $1024$ Gigabytes.

**A Note on Powers of 10 vs. Powers of 2:**
Historically, these prefixes (Kilo, Mega, Giga) were derived from Greek and Latin roots meaning 1000, 1,000,000, 1,000,000,000, respectively. However, in computing, they almost always refer to powers of 2 because of the binary nature of the systems.
*   $1 \text{ KB} = 2^{10} \text{ bytes} = 1024 \text{ bytes}$
*   $1 \text{ MB} = 2^{20} \text{ bytes} = 1,048,576 \text{ bytes}$
*   $1 \text{ GB} = 2^{30} \text{ bytes} = 1,073,741,824 \text{ bytes}$

This is why a hard drive advertised as 1 TB might show up in your operating system as around 931 GB. The manufacturer uses decimal (powers of 10) for marketing, while your OS uses binary (powers of 2) for internal calculations. This is a common point of confusion.

*(Englander)* often uses these units when discussing storage and memory capacity, helping students grasp the scale of data.

## 5. How This Connects to Our Course Outcomes

Let's recap how this module directly supports our course objectives:

*   **CO1: Identify the fundamental components and the working of an IT environment.** Understanding binary is like learning the alphabet and grammar of computing. It's the very foundation upon which all hardware components process information and all software operates. Without binary, there's no digital information.
*   **CO2: Explain the data representations, CPU architectures, and the basic functioning of a computer.** This entire module is dedicated to **data representations**! We've seen how numbers, characters, and even the building blocks of images and sounds are converted into binary. This knowledge is essential for understanding how a CPU performs calculations (all in binary!) and how memory stores information.
*   **CO3: Explain the operating systems, computer network architecture, and necessary protocols used.** While not our primary focus here, the concepts of data representation underpin these areas. Network protocols, for instance, define how binary data is formatted and transmitted reliably. Operating systems manage how binary data is stored, retrieved, and processed.
*   **CO4: Develop simple interactive web pages and validate the inputs.** When you start building web pages, you'll be dealing with user input. This input (text typed into a form, numbers entered) will be converted into binary by the browser, processed by JavaScript, and potentially sent to a server. Understanding that this data is fundamentally binary helps in grasping why input validation is crucial – you need to ensure the binary data, when interpreted as a number or character, conforms to expected patterns.

## Summary: The Essence of Binary

Remember this: **Everything a computer processes is ultimately represented as binary.**

*   **Bits** (0s and 1s) are the atomic units.
*   We group bits into **bytes** and larger units.
*   The **positional value** of bits (powers of 2) allows us to represent any integer.
*   **Character encoding schemes** (like ASCII and Unicode) map characters to binary.
*   **Floating-point standards** (like IEEE 754) represent numbers with decimal points using a sign, exponent, and mantissa.
*   Images, sound, and other complex data are broken down into binary representations of their constituent parts (pixels, samples).

Mastering this module means you've unlocked the fundamental language of computers. It's a journey from simple electrical states to the complex digital world we interact with daily.

---

## Sample Questions and Answers

Here are some questions to test your understanding, similar to what you might encounter in an exam.

**1. Conceptual Question:** Why do computers use the binary system (base-2) instead of the decimal system (base-10)?

    **Answer:** Computers use the binary system primarily because their fundamental electronic components, like transistors, operate in a simple two-state manner: either "on" or "off." This duality maps perfectly to the two digits of the binary system (1 and 0). Building reliable circuits that can accurately distinguish between ten different voltage levels (required for decimal) is significantly more complex and prone to errors than distinguishing between just two. This simplicity makes binary the most practical and efficient system for digital computation. (Relates to CO1, CO2)

**2. Conversion Question:** Convert the binary number `1101` to its decimal equivalent.

    **Answer:**
    To convert `1101` from binary to decimal, we use the positional values (powers of 2) starting from the rightmost digit:
    *   The rightmost `1` is in the $2^0$ (ones) place: $1 \times 2^0 = 1 \times 1 = 1$
    *   The next `0` is in the $2^1$ (twos) place: $0 \times 2^1 = 0 \times 2 = 0$
    *   The next `1` is in the $2^2$ (fours) place: $1 \times 2^2 = 1 \times 4 = 4$
    *   The leftmost `1` is in the $2^3$ (eights) place: $1 \times 2^3 = 1 \times 8 = 8$

    Adding these values together: $8 + 4 + 0 + 1 = 13$.
    Therefore, binary `1101` is equal to decimal `13`. (Relates to CO2)

**3. Application/Understanding Question:** If a character encoding scheme uses 8 bits per character, what is the maximum number of unique characters it can represent?

    **Answer:**
    With 8 bits, each bit can be either a 0 or a 1. The total number of unique combinations is calculated as $2^n$, where $n$ is the number of bits.
    In this case, $n=8$, so the maximum number of unique characters is $2^8$.
    $2^8 = 2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2 = 256$.
    So, an 8-bit encoding scheme can represent a maximum of 256 unique characters. This is why Extended ASCII uses 8 bits. (Relates to CO2)

**4. Conceptual/Pitfall Question:** You are working with web pages and find that a special character (like an accent mark or a symbol from another language) is displaying incorrectly as a question mark or a box. What is a likely cause of this issue?

    **Answer:**
    A very likely cause is a mismatch in the **character encoding** used by the web page. The text content might have been saved or transmitted using one encoding (e.g., UTF-8, which can represent many international characters), but the web browser or the server interpreting it is expecting a different, more limited encoding (like a basic 7-bit ASCII). When the browser encounters a binary sequence that isn't valid or recognized in the assumed encoding, it often displays a placeholder character like '?' or a box (often a diamond with a question mark inside) to indicate an error. This highlights the importance of using a universal encoding like UTF-8 for web content. (Relates to CO2, CO4)
