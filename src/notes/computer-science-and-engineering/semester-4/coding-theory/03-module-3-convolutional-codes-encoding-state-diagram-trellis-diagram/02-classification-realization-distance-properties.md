---
title: "Classification, realization, distance properties."
subject: "CODING THEORY"
module: "Module 3: Convolutional codes: Encoding, state diagram, trellis diagram"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b10c"
status: "completed"
scrapedAt: "2026-05-20T16:10:29.900Z"
---
# CODING THEORY - Module 3: Convolutional Codes - Classification, Realization, Distance Properties

## Introduction

This module delves into the specifics of convolutional codes, focusing on their classification, realization, and distance properties.  Convolutional codes are a powerful class of error-correcting codes that operate on a continuous stream of input data, unlike block codes which operate on fixed-size blocks. They are widely used in digital communication systems for their relatively simple encoding and decoding algorithms, especially with Viterbi decoding.

## Learning Outcomes

By the end of this section, you should be able to:

*   Classify convolutional codes based on their parameters (rate, constraint length, memory order).
*   Understand and construct different realizations of convolutional encoders (canonical forms, controller canonical forms).
*   Determine the distance properties of convolutional codes, particularly the free distance.
*   Understand how the free distance impacts the error-correcting capability of the code.

## 1. Classification of Convolutional Codes

### 1.1 Key Concepts and Definitions

*   **Convolutional Code:** A type of error-correcting code where the encoded output depends not only on the current input bits but also on a certain number of previous input bits.

*   **Code Rate (R):**  The ratio of the number of input bits (k) to the number of output bits (n) per time unit.  R = k/n.  Commonly, k=1, meaning one input bit produces n output bits.  Therefore, rates are often expressed as 1/n.

*   **Constraint Length (K):**  The number of bits in the encoder memory that affect the generation of the current output. It's the "length" of the convolutional process.  It can also be seen as the maximum number of stages a single input bit can influence the output sequence. K is often referred to as the memory order plus 1 (m+1).

*   **Memory Order (m):**  The number of previous input bits that influence the current output.  It dictates the number of memory elements in the encoder.  K = m + 1.

*   **State:** The content of the memory elements in the encoder at a given time.  For an encoder with *m* memory elements, there are 2<sup>*m*</sup> possible states.

### 1.2 Classification Parameters

Convolutional codes are typically described by the following parameters: (n, k, K), where:

*   n: Number of output bits per input symbol
*   k: Number of input bits per input symbol
*   K: Constraint length

Alternatively, you may see convolutional codes described by (n, k, m) where:

*   n: Number of output bits per input symbol
*   k: Number of input bits per input symbol
*   m: Memory order

Therefore, a (2, 1, 3) convolutional code has a rate of 1/2, a constraint length of 3, and a memory order of 2.

### 1.3 Examples

*   **(2, 1, 3) Convolutional Code:**  This is a widely used code. For every 1 input bit, the encoder produces 2 output bits.  The constraint length is 3, meaning the output is influenced by the current input and the two previous input bits.

*   **(3, 2, 2) Convolutional Code:** For every 2 input bits, the encoder produces 3 output bits. The constraint length is 2 (memory order of 1).

### 1.4 Important Points to Remember

*   The code rate *R* is always less than 1 (usually a fraction).
*   Higher constraint length (K) generally provides better error-correcting capability, but it also increases the complexity of the encoder and decoder.
*   The memory order determines the number of states in the encoder's state diagram and trellis diagram.

## 2. Realization of Convolutional Encoders

### 2.1 Key Concepts and Definitions

*   **Realization:** A specific implementation of the convolutional encoder using shift registers and modulo-2 adders (XOR gates).  Different realizations of the same convolutional code can exist.

*   **Generator Polynomials:**  Polynomials that describe how the input bits are combined to generate the output bits.  For a rate *R = 1/n* code, there are *n* generator polynomials.

*   **Canonical Form:** A standard form for representing the encoder where the input bit is directly fed into the first memory element of each shift register.  A systematic convolutional code usually has at least one of its generator polynomials in recursive form, making the code resistant to catastrophic error propagation.

*   **Controller Canonical Form:** Another standard form for realization. The input bit is fed into a common shift register chain.

### 2.2 Representing Convolutional Codes with Generator Polynomials

Generator polynomials, denoted as g<sub>1</sub>(D), g<sub>2</sub>(D), ..., g<sub>n</sub>(D), describe the connections in the encoder. 'D' represents a delay operator (i.e., a shift register).  The coefficients of the polynomial represent the connections from the input to the modulo-2 adders.

**Example:**

Consider a (2, 1, 3) convolutional code.  Let's say the generator polynomials are:

*   g<sub>1</sub>(D) = 1 + D + D<sup>2</sup>
*   g<sub>2</sub>(D) = 1 + D<sup>2</sup>

This means:

*   Output bit 1 is the XOR of the current input bit, the previous input bit, and the input bit from two time units ago.
*   Output bit 2 is the XOR of the current input bit and the input bit from two time units ago.

### 2.3 Canonical Form Realization

To realize a convolutional encoder in canonical form:

1.  Represent the code using generator polynomials.
2.  For each output bit, draw a shift register structure.
3.  Connect the input to the shift registers as specified by the coefficients of the generator polynomial.
4.  Use modulo-2 adders (XOR gates) to combine the shift register outputs to generate each output bit.

### 2.4 Controller Canonical Form Realization

1. Represent the code using generator polynomials.
2. Use a single shift register chain where the input feeds the first register.
3. Use modulo-2 adders (XOR gates) to combine the shift register outputs to generate each output bit.

### 2.5 Example: (2, 1, 3) Convolutional Code Realization

**Given:** A (2, 1, 3) convolutional code with generator polynomials:

*   g<sub>1</sub>(D) = 1 + D + D<sup>2</sup>
*   g<sub>2</sub>(D) = 1 + D<sup>2</sup>

**Canonical Form Realization:**

1.  **Output 1:** The input is fed into a 2-stage shift register. The output is the XOR of the current input, the first register, and the second register.
2.  **Output 2:** The input is fed into a 2-stage shift register. The output is the XOR of the current input and the second register.

**Controller Canonical Form Realization:**

1.  The input is fed into a 2-stage shift register.
2.  **Output 1:** The output is the XOR of the current input, the first register, and the second register.
3.  **Output 2:** The output is the XOR of the current input and the second register.

*Note: For brevity, the diagrams for these realizations cannot be drawn directly in markdown. Refer to standard coding theory textbooks or online resources for the visual representations.*

### 2.6 Important Points to Remember

*   Different realizations of the same code have the same performance in terms of error-correcting capability, but may differ in implementation complexity.
*   Generator polynomials provide a concise mathematical representation of the encoder structure.
*   Understanding the relationship between generator polynomials and the encoder structure is crucial for designing and analyzing convolutional codes.

## 3. Distance Properties of Convolutional Codes

### 3.1 Key Concepts and Definitions

*   **Hamming Weight:** The number of non-zero elements in a codeword.

*   **Hamming Distance:** The number of positions in which two codewords differ.

*   **Free Distance (d<sub>free</sub>):**  The minimum Hamming distance between any two distinct codewords generated by the convolutional encoder. It's a critical parameter for determining the error-correcting capability of the code.

*   **Minimum Weight Codeword:**  The non-zero codeword with the smallest Hamming weight. The free distance is the Hamming weight of the minimum weight codeword (starting from the all-zero state and returning to the all-zero state).

*   **Error-Correcting Capability (t):** The number of errors that a code can guarantee to correct. Approximately,  `t = floor((d_free - 1) / 2)`.

### 3.2 Determining the Free Distance

The free distance (d<sub>free</sub>) is a key performance metric for convolutional codes. A larger d<sub>free</sub> implies better error-correcting performance.  Here are common methods to determine it:

1.  **Exhaustive Search:**  Simulate the encoder for all possible input sequences of reasonable length (starting from the all-zero state). Calculate the Hamming weight of each resulting codeword. The minimum non-zero weight is the free distance. This method is computationally expensive for codes with large constraint lengths.

2.  **Using the State Diagram/Trellis Diagram:**

    *   **Find the shortest path:** Starting from the all-zero state (the initial state), find the path that diverges from the all-zero path (the path generated by all-zero input) and eventually returns to the all-zero state.
    *   **Calculate the weight:** Calculate the Hamming weight of the output symbols along this path. The path with the minimum Hamming weight (excluding the all-zero path) determines the free distance.

### 3.3 Example: Finding d<sub>free</sub> using Trellis Diagram

Consider a (2, 1, 3) convolutional code with g<sub>1</sub>(D) = 1 + D + D<sup>2</sup> and g<sub>2</sub>(D) = 1 + D<sup>2</sup>.

1.  **Draw the Trellis Diagram:**  Construct the trellis diagram for a few stages. (Refer to coding theory textbooks or online resources for how to construct a trellis diagram).

2.  **Identify Paths:** Starting from the all-zero state (00), search for paths that diverge from the all-zero path (the path corresponding to an all-zero input) and eventually merge back into the all-zero state.

3.  **Calculate Weights:** For each such path, calculate the Hamming weight of the corresponding output symbols.

4.  **Find Minimum Weight:** Identify the path with the smallest Hamming weight. This weight is the free distance (d<sub>free</sub>).

**Illustrative Example (simplified):**

*   Input sequence: `1 0 0`
*   Outputs based on g1 and g2: `11  10  01`
*   Hamming Weight = 5.
    This corresponds to a path that diverges and converges back to the all-zero state. We need to evaluate different path and choose the path with minimum Hamming Weight, that corresponds to the free distance.

In this particular example (2,1,3), through more thorough trellis analysis, we find that d<sub>free</sub> = 5.

### 3.4 Error-Correcting Capability

Once you know the free distance (d<sub>free</sub>), you can estimate the error-correcting capability (t) of the code using the formula:

t = floor((d<sub>free</sub> - 1) / 2)

For our example (d<sub>free</sub> = 5):

t = floor((5 - 1) / 2) = floor(2) = 2

Therefore, this code can correct up to 2 errors.

### 3.5 Important Points to Remember

*   The free distance is the most important parameter for determining the error-correcting capability of a convolutional code.
*   A larger free distance implies better error-correcting performance.
*   The trellis diagram is a valuable tool for visualizing the encoder's behavior and finding the free distance.
*   The error-correcting capability (t) is directly related to the free distance (d<sub>free</sub>).
*   Exhaustive search becomes computationally infeasible for codes with long constraint lengths.

## 4. Practice Questions and Exercises

**Question 1:**

A convolutional code is described as a (3, 1, 4) code. What are the code rate, constraint length, and memory order of this code?

**Answer:**

*   Code Rate (R): 1/3
*   Constraint Length (K): 4
*   Memory Order (m): 3 (since K = m + 1)

**Question 2:**

Draw the state diagram for a (2, 1, 2) convolutional code with generator polynomials g<sub>1</sub>(D) = 1 + D and g<sub>2</sub>(D) = D. *Note: This requires creating the state diagram, which is difficult to represent in markdown. Refer to coding theory textbooks for examples.*

**Question 3:**

Explain the difference between the canonical and controller canonical forms for realizing a convolutional encoder.

**Answer:**

In the canonical form, the input is directly fed into the first memory element of separate shift registers (one for each output polynomial). In the controller canonical form, the input is fed into a single common shift register chain, and the output bits are generated by tapping into this chain.

**Question 4:**

What is the significance of the free distance (d<sub>free</sub>) of a convolutional code?

**Answer:**

The free distance (d<sub>free</sub>) is the minimum Hamming distance between any two distinct codewords.  It determines the error-correcting capability of the code. A larger d<sub>free</sub> indicates better error-correcting performance. Specifically, the error correcting capability (t) is approximately equal to floor((d<sub>free</sub> - 1) / 2).

**Question 5:**

A convolutional code has a free distance of 7. What is its approximate error-correcting capability?

**Answer:**

t = floor((7 - 1) / 2) = floor(3) = 3. The code can correct up to 3 errors.

**Question 6:**

Explain how you would use the Trellis diagram to determine the free distance of a convolutional code.

**Answer:**

1.  Draw the Trellis diagram for a few stages.
2.  Starting from the all-zero state, search for paths that diverge from the all-zero path (corresponding to all-zero input) and eventually merge back into the all-zero state.
3.  Calculate the Hamming weight of the output symbols along each such path.
4.  The path with the smallest Hamming weight (excluding the all-zero path) represents the free distance (d<sub>free</sub>).

## Conclusion

This module has covered the essential aspects of convolutional codes, including their classification, realization, and distance properties. Understanding these concepts is fundamental for designing and analyzing effective error-correcting coding systems. By understanding these concepts and practicing with examples, you will gain the ability to apply these principles in real-world communication systems. Remember that continuous practice with trellis diagrams and different code examples is crucial for mastering these concepts.
