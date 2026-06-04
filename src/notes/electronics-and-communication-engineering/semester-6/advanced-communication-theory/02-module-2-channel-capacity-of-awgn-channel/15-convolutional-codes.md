---
title: "Convolutional Codes."
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 2: Channel Capacity of AWGN Channel"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed0f"
status: "completed"
scrapedAt: "2026-05-23T17:58:44.390Z"
---
# Advanced Communication Theory: Module 2 - Channel Capacity of AWGN Channel
## Topic: Convolutional Codes

This module delves into the practical aspects of error control coding, specifically focusing on convolutional codes. We will explore their structure, encoding process, decoding techniques, and their role in achieving reliable communication over noisy channels, particularly the Additive White Gaussian Noise (AWGN) channel.

---

### 1. Introduction to Convolutional Codes

Convolutional codes are a type of forward error correction (FEC) code that operate on blocks of data by generating parity bits that are a function of a contiguous block of input bits. Unlike block codes, which operate on fixed-size blocks independently, convolutional codes have memory, meaning the output at any given time depends not only on the current input bits but also on a finite number of previous input bits. This "memory" allows them to achieve better error correction capabilities for a given code rate.

**Key Concepts:**

*   **Encoder with Memory:** The encoder is realized using a linear finite state shift register.
*   **State:** The state of the encoder is determined by the contents of the shift register.
*   **Input Data Stream:** The information bits are fed into the encoder sequentially.
*   **Generator Polynomials:** These polynomials define the relationship between the input bits and the output parity bits.
*   **Code Rate (k/n):** The ratio of the number of information bits (k) to the total number of transmitted bits (n). For convolutional codes, k is often 1.
*   **Constraint Length (K):** The number of bits that influence the current output. It's related to the length of the shift register. Specifically, if the shift register has 'm' memory elements, the constraint length is K = m + 1.

**Importance in Communication Systems (CO4, CO5):**

Convolutional codes are widely used in various communication systems, including satellite communication, wireless communication (e.g., Wi-Fi, cellular), and deep-space communication, due to their ability to correct errors introduced by channel impairments like AWGN, fading, and interference. They provide a good trade-off between coding gain and decoding complexity.

**Textbook References:**

*   **Goldsmith (Chapter 6):** Discusses error control coding and introduces convolutional codes as a powerful technique.
*   **Rappaport (Chapter 7):** Explains error control coding schemes, including convolutional codes, and their impact on system performance.
*   **Haykin (Chapter 5):** Covers digital communication systems and the role of channel coding, with a focus on convolutional codes.
*   **Lin & Costello:** Provides a comprehensive treatment of convolutional codes, including their algebraic structure and decoding algorithms.

---

### 2. Convolutional Encoder Structure

A convolutional encoder can be characterized by:

*   **Number of input bits (k):** Typically k=1 for simple codes.
*   **Number of output bits (n):** The number of parity bits generated for each input bit.
*   **Number of memory elements (m):** Determines the state of the encoder.

**Structure:**

*   **Shift Register:** Consists of 'm' memory elements (flip-flops).
*   **Input:** A single information bit is shifted into the first flip-flop at each time step.
*   **Output Generators:** 'n' output taps, each connected to a subset of the shift register stages through modulo-2 adders (XOR gates). The connections are defined by generator polynomials.

**Generator Polynomials:**

For a rate $k/n$ convolutional encoder, there are 'n' generator polynomials, typically denoted as $g_1(X), g_2(X), \dots, g_n(X)$. Each polynomial is a function of the input bits shifted over time. The output of each parity generator is the convolution of the input sequence with its corresponding generator polynomial.

**Example: A Simple $(n=2, k=1, m=3)$ Convolutional Encoder**

*   **k=1:** One information bit per input.
*   **n=2:** Two parity bits per output.
*   **m=3:** Three memory elements (shift register length K = m+1 = 4).

**Generator Polynomials:**
*   $g_1(X) = 1 + X + X^3$
*   $g_2(X) = 1 + X^2 + X^3$

**Encoder Diagram:**

```
      Input (d)
        |
        V
[D]--[D]--[D]-- (Output taps connected to generators)
 |    |    |
 |    |    +---- XOR ----> Output $c_1$ (g1)
 |    +--------- XOR ----> Output $c_2$ (g2)
 +----------------------> (This tap is part of g1 and g2)
```

*(Note: The diagram above is a simplified representation. The connections for $g_1$ and $g_2$ are determined by the specific polynomials. For $g_1 = 1 + X + X^3$, output $c_1$ is the XOR of input $d$, $d$ shifted by 1, and $d$ shifted by 3. For $g_2 = 1 + X^2 + X^3$, output $c_2$ is the XOR of input $d$, $d$ shifted by 2, and $d$ shifted by 3.)*

**State Representation:**

The state of the encoder at time 't' can be represented by the contents of the 'm' memory elements. For the $(n=2, k=1, m=3)$ encoder, the state can be represented by a 3-bit binary vector $(s_1, s_2, s_3)$, where $s_i$ is the content of the i-th flip-flop. The state changes as new bits are shifted in.

**Important Point to Remember:** The constraint length K is a crucial parameter for convolutional codes, as it directly influences the minimum free distance ($d_{free}$) and thus the error correction capability. A larger K generally leads to better performance but increased decoding complexity.

---

### 3. Convolutional Encoding Process

The encoding process involves shifting input bits through the shift register and computing the output parity bits using the generator polynomials.

**Mathematical Representation:**

Let the input data sequence be $d = (d_0, d_1, d_2, \dots)$.
The output sequences $c_1$ and $c_2$ for the example encoder are:

$c_{1,t} = d_t \oplus d_{t-1} \oplus d_{t-3}$
$c_{2,t} = d_t \oplus d_{t-2} \oplus d_{t-3}$

Where $\oplus$ denotes modulo-2 addition (XOR).

**State Transitions:**

When a new bit $d_t$ enters the shift register:
*   The bit in the first flip-flop moves to the second.
*   The bit in the second flip-flop moves to the third.
*   The bit in the third flip-flop is shifted out (or used in the calculation).
*   The new bit $d_t$ is placed in the first flip-flop.

The state transition table (or state diagram) explicitly shows how the encoder moves from one state to another based on the current state and the input bit.

**State Diagram:**

A state diagram is a graphical representation of the encoder's operation.
*   **Nodes:** Represent the encoder states.
*   **Branches:** Represent transitions between states. Each branch is labeled with the input bit that causes the transition and the corresponding output bits.

**Example State Diagram (for the $(n=2, k=1, m=3)$ encoder):**

Let the state be represented by $(s_1, s_2, s_3)$ where $s_1$ is the most recent input bit.
Initial state: (0, 0, 0)

| Current State | Input (d) | Next State | Output ($c_1 c_2$) |
| :------------ | :-------- | :--------- | :----------------- |
| 000           | 0         | 000        | 00                 |
| 000           | 1         | 100        | 11                 |
| 100           | 0         | 010        | 10                 |
| 100           | 1         | 110        | 01                 |
| 010           | 0         | 001        | 01                 |
| 010           | 1         | 101        | 10                 |
| 110           | 0         | 011        | 00                 |
| 110           | 1         | 111        | 11                 |
| 001           | 0         | 000        | 10                 |
| 001           | 1         | 100        | 01                 |
| 101           | 0         | 010        | 01                 |
| 101           | 1         | 110        | 10                 |
| 011           | 0         | 001        | 11                 |
| 011           | 1         | 101        | 00                 |
| 111           | 0         | 011        | 10                 |
| 111           | 1         | 111        | 01                 |

*(Note: The state representation (s1, s2, s3) here refers to the bits in the shift register from left to right. The most recent input bit is 'd'. When d is input, it goes into the first stage. The bit that was in the first stage moves to the second, and so on. The output is generated based on the polynomial connections to the register stages.)*

**Important Point to Remember:** To ensure the encoder returns to a known state (usually the all-zero state) after the entire message is transmitted, a tail sequence of 'm' zero bits is typically appended to the information sequence. This process is called "tailbiting" if the initial state is also used to start the transmission, or "zero-padding" if the encoder is reset to the zero state.

---

### 4. Convolutional Decoding

Decoding convolutional codes is more complex than encoding because we need to find the most likely transmitted sequence given the received noisy sequence.

**Key Concepts:**

*   **Received Sequence:** The transmitted coded sequence corrupted by channel noise (e.g., AWGN).
*   **Decoding Metric:** A measure of how well a hypothesized transmitted sequence matches the received sequence. Common metrics include Euclidean distance and the number of correctly received bits (Hamming distance for hard decisions).
*   **Decoding Algorithms:** Algorithms that systematically search for the most likely transmitted sequence.

**Decoding Algorithms:**

Several algorithms are used for decoding convolutional codes, each with its own trade-off between performance and complexity.

**a) Hard-Decision Decoding:**

*   **Process:** The received bits are quantized to binary values (0 or 1) before decoding.
*   **Metric:** Hamming distance (number of differing bits).

**b) Soft-Decision Decoding:**

*   **Process:** The received analog values (or quantized analog values, e.g., 3-bit quantization) are used directly without hard quantization.
*   **Metric:** Euclidean distance (related to the squared error). Soft decisions are generally more robust and provide better performance.

**Popular Decoding Algorithms:**

1.  **Viterbi Algorithm:**
    *   **Type:** Maximum Likelihood (ML) decoding.
    *   **Principle:** Finds the single most likely path through the trellis diagram that matches the received sequence. It achieves the minimum probability of error.
    *   **How it works:**
        *   It operates on a trellis diagram, which is an unfolded representation of the state transitions over time.
        *   At each time step and for each state, it calculates the path metric (e.g., accumulated Hamming distance for hard decisions, or squared Euclidean distance for soft decisions) from the initial state to that state.
        *   It keeps track of the "survivor path" for each state – the path that has the best metric up to that point.
        *   It discards all other paths that lead to the same state.
        *   After processing the entire received sequence, the survivor path in the final state is traced back to determine the decoded information sequence.
    *   **Complexity:** Exponential in the constraint length (K), but polynomial in the number of time steps. The complexity is roughly proportional to $n \cdot 2^{K-1}$ operations per time step.

2.  **Sequential Decoding:**
    *   **Type:** Near-maximum likelihood decoding.
    *   **Principle:** Attempts to follow a likely path through the trellis. If it encounters a path that seems unlikely, it "backtracks" and tries another path.
    *   **Algorithms:** Fano algorithm, Stack algorithm.
    *   **Complexity:** On average, polynomial in the constraint length, but has a non-negligible probability of "error propagation" or "catastrophic failure" where the decoder might get stuck on a wrong path for a long time.
    *   **Advantages:** Can be simpler than Viterbi for very large constraint lengths.

**Viterbi Algorithm Walkthrough (Conceptual):**

Let's consider the example $(n=2, k=1, m=3)$ encoder with received symbols $r_1, r_2, \dots$. We'll use Hamming distance for simplicity.

*   **Initialization:** All path metrics are initialized to infinity, except for the state 000, which has a metric of 0.
*   **Time t=0:**
    *   Consider input $d_0=0$. Transition from 000 to 000. Output is 00. Metric for 000 remains 0.
    *   Consider input $d_0=1$. Transition from 000 to 100. Output is 11. Metric for 100 becomes 2 (Hamming distance between 11 and received $r_{1,0}r_{1,1}$).
*   **Time t=1:**
    *   For state 000 (previous state 000, input 0): Transition to 000. Output 00. New metric for 000 = metric(000) + dist(00, received)
    *   For state 000 (previous state 000, input 1): Transition to 100. Output 11. New metric for 100 = metric(000) + dist(11, received)
    *   For state 100 (previous state 100, input 0): Transition to 010. Output 10. New metric for 010 = metric(100) + dist(10, received)
    *   For state 100 (previous state 100, input 1): Transition to 110. Output 01. New metric for 110 = metric(100) + dist(01, received)
    *   At each state, choose the path with the minimum metric (survivor path).

This process continues for all time steps. The "survivor path" is the sequence of states and input bits that yields the minimum accumulated metric.

**Textbook References:**

*   **Goldsmith (Chapter 6.4):** Detailed explanation of the Viterbi algorithm and its performance.
*   **Rappaport (Chapter 7.3):** Discusses decoding algorithms like Viterbi.
*   **Haykin (Chapter 5.5):** Covers Viterbi decoding.
*   **Lin & Costello (Chapter 6):** In-depth analysis of Viterbi decoding.

---

### 5. Performance of Convolutional Codes

The performance of a convolutional code is typically measured by its **Bit Error Rate (BER)** as a function of the received signal-to-noise ratio (SNR). The coding gain achieved by a convolutional code over uncoded transmission is a key performance metric.

**Key Factors Affecting Performance:**

*   **Constraint Length (K):** Larger K generally leads to better performance, as it allows for more complex codes with larger minimum free distances.
*   **Generator Polynomials:** The choice of generator polynomials significantly impacts the code's minimum free distance ($d_{free}$).
*   **Decoding Algorithm:** Soft-decision decoding (especially Viterbi) provides better performance than hard-decision decoding.
*   **Code Rate (R):** Lower code rates (more parity bits) generally provide higher coding gains but reduce the data throughput.

**Minimum Free Distance ($d_{free}$):**

The minimum free distance is the minimum Hamming distance between any two distinct codewords that can be generated by the encoder. It's the most important parameter determining the error-correcting capability of a convolutional code. A larger $d_{free}$ means the code can correct more errors.

**Performance Metrics:**

*   **Coding Gain:** The improvement in SNR required to achieve a certain BER compared to an uncoded system.
*   **BER vs. Eb/N0 Curve:** The plot of Bit Error Rate against the ratio of energy per bit to noise power spectral density.

**Relationship to Channel Capacity (CO1, CO3):**

Convolutional codes are a practical implementation of channel coding, which aims to approach the theoretical limits set by Shannon's Channel Capacity Theorem. The AWGN channel capacity is given by:

$C = \frac{1}{2} \log_2(1 + \frac{S}{N})$ bits/sec/Hz

Where S is the signal power and N is the noise power.
Convolutional codes, especially those with larger constraint lengths and decoded with the Viterbi algorithm, can achieve significant coding gains, allowing communication at lower SNRs for a given BER. This brings the system closer to the Shannon limit.

**Example Performance Comparison:**

A well-designed convolutional code with K=7 can achieve a coding gain of several dB compared to uncoded BPSK modulation over an AWGN channel. For instance, to achieve a BER of $10^{-5}$, an uncoded system might require an Eb/N0 of around 10 dB, while a good convolutional code might achieve the same BER with an Eb/N0 of around 5-6 dB, demonstrating a coding gain of 4-5 dB.

**Textbook References:**

*   **Goldsmith (Chapter 6.5):** Analysis of convolutional code performance.
*   **Rappaport (Chapter 7.3.4):** Performance analysis.
*   **Haykin (Chapter 5.6):** Performance of Viterbi decoding.
*   **Lin & Costello (Chapter 7):** Performance bounds and analysis.

---

### 6. Example Application: Satellite Communications

Convolutional codes are extensively used in satellite communication systems to combat the low SNR and potential for noise and interference.

**Scenario:**
A satellite link transmits digital data. The channel is subject to AWGN. To ensure reliable data reception, convolutional codes are employed at the transmitter, and Viterbi decoders are used at the receiver.

**Parameters:**
*   **Code Rate:** Often chosen to be $1/2$ or $1/4$ to provide significant coding gain.
*   **Constraint Length:** K=7 or K=9 are common choices, offering a good balance between performance and decoder complexity.
*   **Modulation:** Typically BPSK or QPSK.

**Process:**
1.  **Information Bits:** Original data bits are fed to the convolutional encoder.
2.  **Encoding:** The encoder generates parity bits based on the information bits and its internal state. The output is a stream of coded bits.
3.  **Modulation:** The coded bits are modulated onto a carrier signal.
4.  **Transmission:** The modulated signal is transmitted over the satellite channel.
5.  **Reception:** The receiver receives the noisy signal.
6.  **Demodulation:** The received signal is demodulated to obtain a sequence of noisy bits (or soft-decision values).
7.  **Decoding:** The Viterbi decoder processes the received sequence to reconstruct the most likely transmitted information bits.
8.  **Error Correction:** The decoded bits are closer to the original information bits than if no coding were used, improving the overall reliability of the communication.

**CO3 Alignment:** This application directly demonstrates the application of channel coding for error detection and correction, a core objective of CO3. The use of convolutional codes to improve BER in a noisy channel exemplifies this.

---

### 7. Practice Questions and Exercises

**Question 1:**
Consider a convolutional encoder with $k=1$, $n=2$, and constraint length $K=3$. The generator polynomials are $g_1(X) = 1 + X$ and $g_2(X) = 1 + X + X^2$.
a) Draw the encoder circuit.
b) Determine the state transition diagram.
c) If the input sequence is 1011, and the encoder starts in the all-zero state, what is the output coded sequence?

**Answer 1:**
a) **Encoder Circuit:**
   The generator polynomials correspond to the connections to the shift register. For $g_1(X) = 1 + X$, the output $c_1$ is XOR of the input and the first stage of the shift register (if shift register has 'm' elements, this corresponds to $d_t$ and $d_{t-1}$). For $g_2(X) = 1 + X + X^2$, the output $c_2$ is XOR of the input, the first stage, and the second stage ($d_t$, $d_{t-1}$, $d_{t-2}$).
   The shift register has $m = K-1 = 3-1 = 2$ memory elements.

   ```
         Input (d)
           |
           V
   [D]---[D]--- (Outputs from stages)
    |    |
    |    +---- XOR ----> Output $c_1$ (from $g_1=1+X$)
    +--------- XOR ----> Output $c_2$ (from $g_2=1+X+X^2$)
   ```
   *(Note: The input 'd' is connected to the first stage for both generators. The first stage output is connected to $c_1$. The second stage output is XORed with the first stage output and input for $c_2$.)*

b) **State Transition Diagram:**
   The state is defined by the contents of the 2 memory elements. Let the state be $(s_1, s_2)$, where $s_1$ is the bit in the first flip-flop (most recent input), and $s_2$ is in the second.
   Initial State: 00

   | Current State | Input (d) | Next State | Output ($c_1 c_2$) |
   | :------------ | :-------- | :--------- | :----------------- |
   | 00            | 0         | 00         | 00 ($d \oplus 0$, $d \oplus 0 \oplus 0$) |
   | 00            | 1         | 10         | 11 ($d \oplus 0$, $d \oplus 0 \oplus 0$) |
   | 10            | 0         | 01         | 10 ($d \oplus 1$, $d \oplus 1 \oplus 0$) |
   | 10            | 1         | 11         | 01 ($d \oplus 1$, $d \oplus 1 \oplus 0$) |
   | 01            | 0         | 00         | 10 ($d \oplus 0$, $d \oplus 0 \oplus 1$) |
   | 01            | 1         | 10         | 01 ($d \oplus 0$, $d \oplus 0 \oplus 1$) |
   | 11            | 0         | 01         | 01 ($d \oplus 1$, $d \oplus 1 \oplus 1$) |
   | 11            | 1         | 11         | 10 ($d \oplus 1$, $d \oplus 1 \oplus 1$) |

c) **Encoded Sequence for 1011:**
   Assuming the encoder starts in state 00.
   *   **Input = 1:** State = 00 -> Next State = 10. Output = 11. (Received 1, then 0. So first flip-flop has 1, second has 0).
   *   **Input = 0:** State = 10 -> Next State = 01. Output = 10. (Received 0, then 1. So first flip-flop has 0, second has 1).
   *   **Input = 1:** State = 01 -> Next State = 10. Output = 01. (Received 1, then 0. So first flip-flop has 1, second has 0).
   *   **Input = 1:** State = 10 -> Next State = 11. Output = 01. (Received 1, then 1. So first flip-flop has 1, second has 1).

   **Output Sequence:** 11 10 01 01.

**Question 2:**
Explain why soft-decision decoding generally provides better performance than hard-decision decoding for convolutional codes in an AWGN channel. (CO3, CO5)

**Answer 2:**
Soft-decision decoding utilizes the full analog information of the received signal, or a quantized version of it, rather than simply deciding on a binary '0' or '1'. In an AWGN channel, the received signal is a noisy version of the transmitted signal.
*   **Hard-Decision:** Discards information about the signal's strength or certainty. A received value very close to the decision boundary is treated the same as a value far from it, as long as it crosses the boundary. This can lead to incorrect decisions.
*   **Soft-Decision:** Preserves the information about how likely each bit is to be a '0' or '1'. For example, a received value that is slightly above the threshold for '1' is more likely to be a '1' than a value just above the threshold. The Viterbi algorithm, when used with soft-decision metrics (like Euclidean distance), can better distinguish between similar transmitted sequences that are corrupted by noise. It can correctly infer the most likely path even when individual bit decisions might be wrong with hard-decision decoding. This leads to a lower probability of error and therefore better performance, typically resulting in a coding gain of 2-3 dB.

**Question 3:**
What is the primary role of the constraint length (K) in a convolutional code? How does it affect the code's performance and complexity?

**Answer 3:**
The constraint length (K) of a convolutional code is a measure of the number of bits that influence the current output. It is directly related to the length of the encoder's shift register ($K = m+1$, where 'm' is the number of memory elements).

*   **Effect on Performance:** A larger constraint length generally leads to better error correction capability. This is because codes with larger K can be designed to have a larger minimum free distance ($d_{free}$). A larger $d_{free}$ means that any two distinct codewords differ by at least a certain number of bits, allowing the decoder to distinguish between them even in the presence of errors. Codes with larger K can achieve higher coding gains.
*   **Effect on Complexity:** The complexity of the Viterbi decoding algorithm is exponential in the constraint length (roughly proportional to $n \cdot 2^{K-1}$ operations per time step). Therefore, as K increases, the computational complexity of the decoder grows significantly. This requires more processing power and memory.

**Important Point to Remember:** There is a trade-off between performance and complexity with respect to constraint length. Choosing an appropriate K involves balancing the desired error correction capability with the available computational resources and desired data rate.

---

### 8. Important Points to Remember

*   **Convolutional codes are memory-based codes** that operate on data streams, unlike block codes which process fixed-size blocks independently.
*   The **constraint length (K)** is a critical parameter that determines the number of past input bits affecting the current output and significantly impacts both performance (coding gain) and decoding complexity.
*   The **state of the encoder** is determined by the contents of its shift register.
*   **Generator polynomials** define the structure of the encoder and the relationship between input and output bits.
*   The **Viterbi algorithm** is the most common and effective decoding algorithm for convolutional codes, achieving maximum likelihood performance with manageable complexity for practical K values.
*   **Soft-decision decoding** (using analog or quantized analog values) generally provides superior performance compared to hard-decision decoding due to its ability to retain more information about the received signal.
*   Convolutional codes are crucial for **forward error correction** in communication systems operating over noisy channels like AWGN, helping to achieve reliable communication closer to the Shannon limit.
*   **Tailbiting or zero-padding** is necessary to ensure the encoder returns to a known state, allowing for proper decoding.

---

This concludes the notes on Convolutional Codes. Remember to review the relevant sections in your textbooks for a deeper understanding and to practice applying these concepts.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
