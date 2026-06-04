---
title: "Digital Electronics: -Binary number system, Boolean algebra and Logic Gates, Universal gates"
subject: "BASIC ELECTRICAL & ELECTRONICS ENGINEERING"
module: "Module 3: Introduction to Semiconductor devices:"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edefeb4799d95e83691"
status: "completed"
scrapedAt: "2026-05-20T17:41:28.389Z"
---
# Module 3: Introduction to Semiconductor Devices - Digital Electronics

Welcome, everyone, to our dive into the fascinating world of Digital Electronics! Today, we’re going to lay the foundation for understanding how computers and modern electronic devices work at their core. We’ll be exploring the language they speak – the binary system – and the fundamental building blocks of digital circuits: Boolean algebra and Logic Gates.

This topic directly ties into our broader learning outcomes, particularly **CO4: Describe the fundamental concepts of electronic components and devices**. Understanding digital electronics is crucial for grasping how many of the electronic components and devices we use daily function. It’s all about information processing, and the concepts we cover today are the bedrock for that.

Let's get started!

## 1. The Binary Number System: The Language of Computers

Think about how we communicate. We use letters, words, and numbers based on the decimal system (0-9). Computers, however, operate on a much simpler principle. They deal with electricity, and at any given moment, an electrical signal can be in one of two states: either it's ON (representing a high voltage) or it's OFF (representing a low voltage).

This two-state nature is perfectly represented by the **Binary Number System**. Unlike our familiar decimal system which uses ten digits (0 through 9), the binary system uses only two digits: **0** and **1**.

*   **0** typically represents the "OFF" state or a low voltage.
*   **1** typically represents the "ON" state or a high voltage.

These individual 0s and 1s are called **bits** (short for binary digits).

### Why Binary?

Why would engineers choose such a limited system? It boils down to reliability and simplicity in electronic circuits. It's much easier and less prone to errors to design circuits that can reliably distinguish between two distinct voltage levels (like ON and OFF) than to try and represent ten different levels accurately. Imagine trying to design a light switch that had ten different brightness levels and could reliably be set to *exactly* one of them every time – it would be much more complex and error-prone than a simple ON/OFF switch!

### Converting Between Decimal and Binary

To work with computers, we need to be able to translate between our familiar decimal numbers and the binary numbers they understand.

**Decimal to Binary:**

The key idea is to represent a decimal number as a sum of powers of 2. Let’s take an example. Consider the decimal number **13**.

In our decimal system, 13 means $1 \times 10^1 + 3 \times 10^0$.

In binary, we use powers of 2. We find the largest power of 2 that is less than or equal to our number, subtract it, and repeat.

For 13:
*   The largest power of 2 less than or equal to 13 is $2^3 = 8$. So we have a '1' in the $2^3$ place.
    $13 - 8 = 5$
*   The largest power of 2 less than or equal to 5 is $2^2 = 4$. So we have a '1' in the $2^2$ place.
    $5 - 4 = 1$
*   The largest power of 2 less than or equal to 1 is $2^0 = 1$. So we have a '1' in the $2^0$ place.
    $1 - 1 = 0$
*   We don't have a $2^1$ component. So it's a '0' in the $2^1$ place.

So, 13 in decimal is represented as:
$1 \times 2^3 + 0 \times 2^2 + 1 \times 2^1 + 1 \times 2^0$ is incorrect. Let's correct this.

Let's use the remainder method, which is often easier:
To convert 13 (decimal) to binary, we repeatedly divide by 2 and record the remainders:

*   $13 \div 2 = 6$ remainder **1**
*   $6 \div 2 = 3$ remainder **0**
*   $3 \div 2 = 1$ remainder **1**
*   $1 \div 2 = 0$ remainder **1**

Reading the remainders from bottom to top, we get **1101**.
So, $13_{10} = 1101_2$.

Let's verify: $1 \times 2^3 + 1 \times 2^2 + 0 \times 2^1 + 1 \times 2^0 = 1 \times 8 + 1 \times 4 + 0 \times 2 + 1 \times 1 = 8 + 4 + 0 + 1 = 13$. Perfect!

**Binary to Decimal:**

This is straightforward. You just multiply each bit by its corresponding power of 2 and sum them up.

Let's take $10110_2$:
$1 \times 2^4 + 0 \times 2^3 + 1 \times 2^2 + 1 \times 2^1 + 0 \times 2^0$
$= 1 \times 16 + 0 \times 8 + 1 \times 4 + 1 \times 2 + 0 \times 1$
$= 16 + 0 + 4 + 2 + 0$
$= 22_{10}$

So, $10110_2 = 22_{10}$.

**Why this is important for your exams (and understanding):** You’ll often be asked to convert numbers between decimal and binary. Make sure you’re comfortable with both methods. The remainder method for decimal to binary and the positional value method for binary to decimal are your go-to techniques. This directly relates to **CO4** as it's a fundamental concept of how information is represented digitally.

## 2. Boolean Algebra: The Math Behind the Circuits

Now that we have the language (binary), we need the grammar and operations. This is where **Boolean Algebra** comes in. Developed by George Boole, it's a branch of algebra that deals with variables that can have only two possible values, typically represented as TRUE/FALSE or, in our case, **1/0**.

Boolean algebra provides the mathematical framework for designing and analyzing digital circuits. It's like the set of rules that govern how these 0s and 1s interact.

The fundamental operations in Boolean algebra are:

### a) AND Operation

The AND operation is true (1) only if *both* inputs are true (1). Think of it like this: you need both your ticket AND your ID to enter the event. If you have one but not the other, you're out!

We represent the AND operation with a dot ($\cdot$) or simply by placing variables next to each other.

**Truth Table for AND:**

A truth table is a fundamental tool in digital electronics. It systematically lists all possible input combinations and their corresponding outputs.

| Input A | Input B | Output (A $\cdot$ B) |
| :------ | :------ | :------------------- |
| 0       | 0       | 0                    |
| 0       | 1       | 0                    |
| 1       | 0       | 0                    |
| 1       | 1       | 1                    |

In circuit terms, an AND gate performs this function. If you have two switches in series, the light turns on only if both switches are closed (ON).

### b) OR Operation

The OR operation is true (1) if *at least one* of the inputs is true (1). Think of it like this: you can enter the event if you have your ticket OR your student ID. If you have either, you're good to go!

We represent the OR operation with a plus sign (+).

**Truth Table for OR:**

| Input A | Input B | Output (A + B) |
| :------ | :------ | :------------- |
| 0       | 0       | 0              |
| 0       | 1       | 1              |
| 1       | 0       | 1              |
| 1       | 1       | 1              |

In circuit terms, an OR gate performs this function. If you have two switches in parallel, the light turns on if either switch is closed (ON).

### c) NOT Operation (Inverter)

The NOT operation is the simplest. It simply inverts the input. If the input is 0, the output is 1, and if the input is 1, the output is 0. It’s like saying, "Not A".

We represent the NOT operation with a bar over the variable (e.g., $\bar{A}$) or sometimes with an apostrophe (e.g., A').

**Truth Table for NOT:**

| Input A | Output ($\bar{A}$) |
| :------ | :----------------- |
| 0       | 1                  |
| 1       | 0                  |

In circuit terms, a NOT gate (or inverter) performs this function.

### Important Boolean Algebra Laws and Theorems

Just like in regular algebra, Boolean algebra has its own set of laws that allow us to simplify expressions and design more efficient circuits. These are crucial for understanding circuit behavior and are frequently tested.

*   **Commutative Laws:**
    *   $A + B = B + A$ (Order doesn't matter for OR)
    *   $A \cdot B = B \cdot A$ (Order doesn't matter for AND)

*   **Associative Laws:**
    *   $A + (B + C) = (A + B) + C$ (Grouping doesn't matter for multiple ORs)
    *   $A \cdot (B \cdot C) = (A \cdot B) \cdot C$ (Grouping doesn't matter for multiple ANDs)

*   **Distributive Laws:**
    *   $A \cdot (B + C) = (A \cdot B) + (A \cdot C)$ (Like regular algebra distribution)
    *   $A + (B \cdot C) = (A + B) \cdot (A + C)$ (This one is unique to Boolean algebra!)

*   **Identity Laws:**
    *   $A + 0 = A$ (ORing with 0 doesn't change the variable)
    *   $A \cdot 1 = A$ (ANDing with 1 doesn't change the variable)

*   **Null Laws (or Domination Laws):**
    *   $A + 1 = 1$ (ORing with 1 always results in 1)
    *   $A \cdot 0 = 0$ (ANDing with 0 always results in 0)

*   **Idempotent Laws:**
    *   $A + A = A$ (ORing a variable with itself doesn't change it)
    *   $A \cdot A = A$ (ANDing a variable with itself doesn't change it)

*   **Complement Laws:**
    *   $A + \bar{A} = 1$ (A variable ORed with its inverse is always 1)
    *   $A \cdot \bar{A} = 0$ (A variable ANDed with its inverse is always 0)

*   **Double Negation Law:**
    *   $\overline{\bar{A}} = A$ (Inverting twice brings you back to the original)

*   **De Morgan's Theorems:** These are incredibly important and often cause confusion, so pay close attention! They provide a way to convert AND operations to OR operations and vice versa, along with inversions.
    *   $\overline{A + B} = \bar{A} \cdot \bar{B}$ (The inverse of an OR is the AND of the inverses)
    *   $\overline{A \cdot B} = \bar{A} + \bar{B}$ (The inverse of an AND is the OR of the inverses)

**Example of simplification:**
Let's simplify the expression $Y = A \cdot \bar{B} + A \cdot B$.
Using the distributive law $X \cdot (Y+Z) = X \cdot Y + X \cdot Z$, we can factor out A:
$Y = A \cdot (\bar{B} + B)$
Now, using the complement law $\bar{B} + B = 1$:
$Y = A \cdot 1$
And finally, using the identity law $A \cdot 1 = A$:
$Y = A$

So, the complex expression $A \cdot \bar{B} + A \cdot B$ is equivalent to just $A$. This means a circuit designed with gates performing $A \cdot \bar{B}$ and $A \cdot B$ and then ORing their outputs can be replaced by a simple wire carrying signal $A$. This is the essence of circuit simplification! This directly contributes to **CO4** by showing how basic Boolean operations are applied to electronic components.

## 3. Logic Gates: The Physical Realization

Boolean algebra gives us the rules, but **Logic Gates** are the actual electronic circuits that implement these rules using semiconductor devices (like transistors). Each gate takes one or more binary inputs and produces a single binary output according to a specific Boolean function.

We've already seen the basic functions: AND, OR, and NOT. Let's look at their standard symbols.

### a) AND Gate

*   **Symbol:** A D-shaped symbol with two or more inputs and one output.
*   **Function:** $Output = A \cdot B$

(Imagine a blackboard drawing of an AND gate symbol here)

### b) OR Gate

*   **Symbol:** A curved input side leading to a pointed output.
*   **Function:** $Output = A + B$

(Imagine a blackboard drawing of an OR gate symbol here)

### c) NOT Gate (Inverter)

*   **Symbol:** A triangle with a small circle (bubble) at the output. The bubble signifies inversion.
*   **Function:** $Output = \bar{A}$

(Imagine a blackboard drawing of a NOT gate symbol here)

### d) Other Basic Gates

While AND, OR, and NOT are the fundamental building blocks, there are other common gates derived from them or having unique functions:

#### i) NAND Gate

NAND stands for "NOT AND". It's an AND gate followed by a NOT gate.
*   **Function:** $Output = \overline{A \cdot B}$
*   **Symbol:** An AND gate symbol with a bubble at the output.
*   **Truth Table:**

| Input A | Input B | Output ($\overline{A \cdot B}$) |
| :------ | :------ | :----------------------------- |
| 0       | 0       | 1                              |
| 0       | 1       | 1                              |
| 1       | 0       | 1                              |
| 1       | 1       | 0                              |

The NAND gate is special because it's a **universal gate**. We'll discuss that shortly!

#### ii) NOR Gate

NOR stands for "NOT OR". It's an OR gate followed by a NOT gate.
*   **Function:** $Output = \overline{A + B}$
*   **Symbol:** An OR gate symbol with a bubble at the output.
*   **Truth Table:**

| Input A | Input B | Output ($\overline{A + B}$) |
| :------ | :------ | :----------------------------- |
| 0       | 0       | 1                              |
| 0       | 1       | 0                              |
| 1       | 0       | 0                              |
| 1       | 1       | 0                              |

The NOR gate is also a **universal gate**.

#### iii) Exclusive OR (XOR) Gate

The XOR gate outputs 1 only if the inputs are *different*. If the inputs are the same (both 0 or both 1), the output is 0. Think of it as a "difference detector".

*   **Function:** $Output = A \oplus B$ (The $\oplus$ symbol denotes XOR)
*   **Symbol:** Similar to an OR gate, but with an additional curved line at the input side.
*   **Truth Table:**

| Input A | Input B | Output ($A \oplus B$) |
| :------ | :------ | :------------------- |
| 0       | 0       | 0                    |
| 0       | 1       | 1                    |
| 1       | 0       | 1                    |
| 1       | 1       | 0                    |

XOR gates are very useful in arithmetic circuits (like adders) and error detection/correction.

#### iv) Exclusive NOR (XNOR) Gate

The XNOR gate is the opposite of the XOR gate. It outputs 1 only if the inputs are the *same*.
*   **Function:** $Output = \overline{A \oplus B}$
*   **Symbol:** An XOR gate symbol with a bubble at the output.
*   **Truth Table:**

| Input A | Input B | Output ($\overline{A \oplus B}$) |
| :------ | :------ | :----------------------------- |
| 0       | 0       | 1                              |
| 0       | 1       | 0                              |
| 1       | 0       | 0                              |
| 1       | 1       | 1                              |

XNOR gates are used for equality checking.

Understanding these gates and their truth tables is fundamental. They are the building blocks of all digital systems, from simple calculators to complex microprocessors. This directly supports **CO4** and lays the groundwork for more advanced concepts.

## 4. Universal Gates: Building Everything from Two!

This is a really neat concept. A **universal gate** is a logic gate that can be used to construct any other logic gate (AND, OR, NOT, NAND, XOR, XNOR). This is incredibly important for integrated circuit (IC) design because it simplifies manufacturing. If you can build all logic functions using just one type of gate, you can optimize the manufacturing process significantly.

The NAND gate and the NOR gate are our universal gates.

### a) How NAND is Universal

You can create NOT, AND, and OR gates using only NAND gates:

1.  **NOT Gate using NAND:**
    To get $\bar{A}$ from NAND, you simply connect both inputs of the NAND gate to A.
    $NAND(A, A) = \overline{A \cdot A}$. Since $A \cdot A = A$, this becomes $\bar{A}$.
    So, a single NAND gate with its inputs tied together acts as a NOT gate.

2.  **AND Gate using NAND:**
    To get $A \cdot B$, we know that $\overline{\overline{A \cdot B}} = A \cdot B$ (double negation).
    We can achieve this by first getting $\overline{A \cdot B}$ using a NAND gate, and then inverting that output with another NAND gate used as a NOT gate.
    So, $NAND(\overline{A \cdot B}, \overline{A \cdot B}) = \overline{(\overline{A \cdot B}) \cdot (\overline{A \cdot B})} = \overline{\overline{A \cdot B}} = A \cdot B$.
    This requires two NAND gates: one for $NAND(A, B)$ and another to invert its output.

3.  **OR Gate using NAND:**
    We can use De Morgan's theorem here. We know that $A + B = \overline{\bar{A} \cdot \bar{B}}$.
    If we take the inverse of A ($\bar{A}$) and the inverse of B ($\bar{B}$), and then NAND them together, we get $\overline{\bar{A} \cdot \bar{B}}$.
    We can get $\bar{A}$ by $NAND(A, A)$ and $\bar{B}$ by $NAND(B, B)$. Then we NAND these results: $NAND(NAND(A, A), NAND(B, B))$. This gives us $A+B$.
    This requires three NAND gates: one to get $\bar{A}$, one to get $\bar{B}$, and a third to NAND them.

Since we can construct NOT, AND, and OR gates from NAND gates, and any complex logic function can be built using combinations of these basic gates, NAND gates are universal.

### b) How NOR is Universal

Similarly, NOR gates are also universal.

1.  **NOT Gate using NOR:**
    Connect both inputs of a NOR gate to A.
    $NOR(A, A) = \overline{A + A}$. Since $A + A = A$, this becomes $\bar{A}$.

2.  **OR Gate using NOR:**
    A NOR gate already performs $\overline{A + B}$. To get $A+B$, we invert the output of the NOR gate using another NOR gate as a NOT gate: $NOR(\overline{A + B}, \overline{A + B}) = \overline{(\overline{A + B}) + (\overline{A + B})} = \overline{\overline{A + B}} = A + B$. This requires two NOR gates.

3.  **AND Gate using NOR:**
    Using De Morgan's theorem, $A \cdot B = \overline{\bar{A} + \bar{B}}$.
    We can get $\bar{A}$ by $NOR(A, A)$ and $\bar{B}$ by $NOR(B, B)$. Then we NOR these results: $NOR(NOR(A, A), NOR(B, B))$. This gives us $A \cdot B$.
    This requires three NOR gates.

Again, since we can build NOT, OR, and AND gates using only NOR gates, NOR gates are universal.

The concept of universal gates is a key takeaway for understanding practical digital circuit design and manufacturing efficiency. It highlights how a simple building block can achieve complex functionality. This reinforces **CO4** by showcasing the adaptability and fundamental nature of certain logic gates.

## Summary and Connection to Course Outcomes

Let's briefly recap and connect this to our broader course objectives.

*   **Binary Number System:** This is the absolute foundation of digital electronics, representing information as 0s and 1s. It’s the language our digital devices use. This directly supports **CO4**.
*   **Boolean Algebra:** This provides the mathematical rules and logic for manipulating binary values. It’s how we define the behavior of digital circuits. Again, this is core to **CO4**.
*   **Logic Gates:** These are the physical electronic components (built with transistors) that implement Boolean functions. We learned about AND, OR, NOT, NAND, NOR, XOR, and XNOR gates. Understanding these is essential for **CO4**.
*   **Universal Gates (NAND and NOR):** This concept shows us how complex digital systems can be built using a minimal set of components, a vital aspect of practical electronics design. This is also directly related to **CO4**.

While this module might seem focused on just these digital concepts, remember that these principles are applied across many areas of electrical and electronics engineering. For example, understanding how data is processed digitally is crucial for modern communication systems (**CO6**) and even for controlling complex systems in power generation or distribution (**CO2**), though at a more abstract level.

For your exams, focus on:
*   **Binary conversions:** Be fluent in converting between decimal and binary.
*   **Truth tables:** Know how to construct and interpret them for all basic gates.
*   **Boolean algebra laws:** Especially De Morgan's theorems and how to simplify expressions.
*   **Gate symbols:** Recognize and draw the symbols for the common gates.
*   **Universal gates:** Understand *why* NAND and NOR are universal and how to build basic gates from them.

This is a solid start to your journey into digital electronics. Keep practicing these concepts, and you'll find they unlock a whole new way of understanding how the technology around us works!

---

## Sample Questions with Answers

Here are a few questions to test your understanding:

**Q1: Convert the decimal number 27 to its binary equivalent.**

**Answer:**
We use the division by 2 method:
*   $27 \div 2 = 13$ remainder **1**
*   $13 \div 2 = 6$ remainder **1**
*   $6 \div 2 = 3$ remainder **0**
*   $3 \div 2 = 1$ remainder **1**
*   $1 \div 2 = 0$ remainder **1**

Reading the remainders from bottom to top, $27_{10} = 11011_2$.
*(Conceptual connection: Binary number system. Exam focus: Conversion techniques.)*

**Q2: What is the output of a NOR gate if the inputs are A=1 and B=0?**

**Answer:**
The NOR gate performs the function $\overline{A + B}$.
Given A=1 and B=0:
$A + B = 1 + 0 = 1$
$\overline{A + B} = \overline{1} = 0$
So, the output of the NOR gate is 0.
*(Conceptual connection: NOR gate function, truth tables. Exam focus: Applying gate logic.)*

**Q3: Using Boolean algebra, simplify the expression: $Y = (A + B) \cdot (\bar{A} + B)$**

**Answer:**
We can use the distributive law $X \cdot (Y+Z) = X \cdot Y + X \cdot Z$. Let's distribute $(A+B)$ over $(\bar{A}+B)$:
$Y = (A+B) \cdot \bar{A} + (A+B) \cdot B$

Now, apply the distributive law again for the first term $ (A+B) \cdot \bar{A} = A \cdot \bar{A} + B \cdot \bar{A} $.
And for the second term $ (A+B) \cdot B = A \cdot B + B \cdot B $.

So, $Y = (A \cdot \bar{A} + B \cdot \bar{A}) + (A \cdot B + B \cdot B)$

Now, apply Boolean laws:
*   $A \cdot \bar{A} = 0$ (Complement Law)
*   $B \cdot B = B$ (Idempotent Law)

Substitute these back:
$Y = (0 + B \cdot \bar{A}) + (A \cdot B + B)$
$Y = B \cdot \bar{A} + A \cdot B + B$

Now, use the absorption law $X + X \cdot Y = X$. Or, we can factor out B:
$Y = B \cdot (\bar{A} + A \cdot 1) + B$ -- this is not simplifying directly. Let's use another property: $X + \bar{X} \cdot Y = X + Y$.
Alternatively, using the distributive law in reverse for the last two terms: $A \cdot B + B = B \cdot (A + 1)$.
Since $A+1 = 1$, $B \cdot (A+1) = B \cdot 1 = B$.

So, $Y = B \cdot \bar{A} + B$
Now, we can factor out B:
$Y = B \cdot (\bar{A} + 1)$
Since $\bar{A} + 1 = 1$ (Null Law):
$Y = B \cdot 1$
$Y = B$ (Identity Law)

The simplified expression is $Y = B$.

*(Conceptual connection: Boolean algebra laws and simplification. Exam focus: Applying multiple laws to simplify expressions.)*

**Q4: Explain why NAND gates are considered universal gates, and illustrate how to construct a NOT gate using only NAND gates.**

**Answer:**
NAND gates are universal because any other logic gate (AND, OR, NOT, XOR, XNOR) can be constructed using only NAND gates. This is due to the properties of Boolean algebra and De Morgan's theorems.

To construct a NOT gate using only NAND gates:
A NOT gate performs the function $\bar{A}$.
The NAND gate performs the function $\overline{A \cdot B}$.
If we connect both inputs of a NAND gate to the same input signal A, we get:
$Output = NAND(A, A) = \overline{A \cdot A}$
According to the idempotent law of Boolean algebra, $A \cdot A = A$.
Therefore, $Output = \bar{A}$.
This means a single NAND gate with its two inputs shorted together functions as a NOT gate.

*(Conceptual connection: Universal gates, Boolean algebra, De Morgan's theorems. Exam focus: Understanding the concept of universality and demonstrating gate construction.)*

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
