---
title: "Encoding circuit"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 2: Channel Capacity of AWGN Channel"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed0a"
status: "completed"
scrapedAt: "2026-05-23T17:58:40.829Z"
---
# ADVANCED COMMUNICATION THEORY

## Module 2: Channel Capacity of AWGN Channel

### Topic: Encoding Circuit

---

### Introduction to Encoding Circuits in AWGN Channel

Encoding, in the context of communication theory, is the process of converting information into a form suitable for transmission over a specific channel. For the Additive White Gaussian Noise (AWGN) channel, which is a fundamental model for many wireless communication systems, the design of effective encoding circuits is crucial for achieving reliable communication close to the theoretical limits of channel capacity. This topic delves into the principles and practical aspects of encoding circuits in the context of the AWGN channel, directly supporting our understanding of how to approach and potentially achieve channel capacity.

---

### Learning Outcomes

This section aims to equip you with the knowledge to:

*   Understand the role of encoding in combating noise in the AWGN channel.
*   Differentiate between source encoding and channel encoding, and their specific applications.
*   Appreciate how encoding schemes contribute to approaching the Shannon capacity of the AWGN channel.
*   Relate encoding techniques to specific modulation schemes used over AWGN channels.
*   Identify the basic building blocks of an encoding circuit.

---

### Key Concepts and Definitions

*   **AWGN Channel:** A communication channel characterized by the addition of independent, identically distributed (i.i.d.) Gaussian noise, with zero mean and constant power spectral density, to the transmitted signal.
*   **Channel Capacity (C):** The maximum rate at which information can be transmitted reliably over a communication channel. For the AWGN channel, given by Shannon's formula: $C = B \log_2(1 + \frac{S}{N})$, where B is bandwidth and S/N is the signal-to-noise ratio.
*   **Encoding:** The process of converting source data into a coded sequence for transmission. This can be broadly categorized into:
    *   **Source Encoding:** Aims to reduce redundancy in the source data to achieve data compression. (Relates to CO2).
    *   **Channel Encoding:** Introduces controlled redundancy into the data to detect and correct errors introduced by the channel. (Relates to CO3).
*   **Modulation:** The process of varying one or more properties of a periodic waveform, called the carrier signal, with a modulating signal that typically contains information to be transmitted. For AWGN channels, common modulation schemes include BPSK, QPSK, QAM, etc. (Relates to CO4).
*   **Encoding Circuit:** The physical or logical implementation of an encoding scheme. This typically involves digital logic gates, shift registers, and lookup tables.

---

### Types of Encoding and Their Relevance to AWGN Channel

#### 1. Source Encoding (Data Compression)

While not directly aimed at combating AWGN noise, efficient source encoding is a prerequisite for maximizing the effective data rate over the channel. By removing redundancy, source encoding allows more "useful" information to be packed into the available bandwidth, thus indirectly aiding in achieving higher throughput in the presence of noise.

*   **Purpose:** To represent source data using fewer bits.
*   **Techniques:** Huffman Coding, Lempel-Ziv (LZ) algorithms.
*   **Relevance:** Reduces the number of bits that need to be transmitted, allowing for a higher proportion of the channel's capacity to be utilized for actual information, rather than redundant symbols.
*   **Textbook Reference:** Goldsmith, Chapter 2 (Source Coding). Cover & Thomas, Chapter 5 (Source Coding).

#### 2. Channel Encoding (Error Control Coding)

This is the primary focus for dealing with the AWGN. Channel encoding adds carefully designed redundancy to the data bits to enable the receiver to detect and correct errors caused by noise.

*   **Purpose:** To protect the transmitted information from errors introduced by the channel.
*   **Techniques:**
    *   **Block Codes:** Operate on blocks of data. Examples include Hamming codes, Reed-Solomon codes.
    *   **Convolutional Codes:** Operate on a continuous stream of data, where the encoded output depends on the current and previous input bits.
*   **Relevance:** By adding redundancy in a structured way, channel coding allows for reliable communication at rates below the channel capacity. The closer the coding and modulation scheme can get to the channel capacity, the more efficient the communication system.
*   **Textbook Reference:** Goldsmith, Chapter 7 (Error Control Coding). Cover & Thomas, Chapter 13 (Channel Capacity). Lin & Costello, "Error Control Coding: Fundamentals and Applications". Haykin, Chapter 7 (Error Detection and Correction).

---

### Encoding Circuits for AWGN Channel

The design of encoding circuits is dictated by the chosen channel coding scheme and the modulation technique employed.

#### Common Encoding Circuit Components

*   **Shift Registers:** Used in both block and convolutional encoders to store and manipulate data bits.
*   **XOR Gates:** Fundamental for generating parity bits and performing other logical operations in coding schemes.
*   **Multiplexers (MUX) and Demultiplexers (DEMUX):** Used for selecting and arranging data streams.
*   **Lookup Tables (ROMs):** Can be used to store pre-computed parity check matrices or generator polynomials for specific codes.

#### Encoding Circuit for Block Codes (Example: Hamming Code)

Hamming codes are simple yet effective block codes that can correct single-bit errors.

*   **Principle:** For a block of $k$ data bits, $r$ parity bits are generated such that certain parity checks are satisfied when no errors occur. The total block length is $n = k + r$. The parity bits are calculated as linear combinations (XOR) of the data bits.
*   **Encoding Circuit Structure:**
    1.  **Input:** $k$ data bits.
    2.  **Parity Bit Generation:** Multiple XOR gates are used to compute the $r$ parity bits. The specific connections depend on the Hamming code being used (e.g., Hamming (7,4) code).
    3.  **Output:** The $n$-bit codeword, which interleaves the data bits and parity bits.
*   **Example: Hamming (7,4) Code**
    *   $k=4$ data bits ($d_1, d_2, d_3, d_4$).
    *   $r=3$ parity bits ($p_1, p_2, p_3$).
    *   Codeword length $n=7$.
    *   Parity bit calculations:
        *   $p_1 = d_1 \oplus d_2 \oplus d_4$
        *   $p_2 = d_1 \oplus d_3 \oplus d_4$
        *   $p_3 = d_2 \oplus d_3 \oplus d_4$
    *   **Circuit:** The encoding circuit would consist of three XOR gates, with inputs appropriately connected to the data bits as per the equations. The output would be a 7-bit codeword, e.g., $p_1 p_2 d_1 p_3 d_2 d_3 d_4$.

#### Encoding Circuit for Convolutional Codes

Convolutional encoders are characterized by their **generator polynomials** and **constraint length**.

*   **Principle:** The encoder is typically implemented using a shift register and XOR gates. The output bits are linear combinations of the current and a limited number of previous input bits, determined by the generator polynomials.
*   **Encoding Circuit Structure:**
    1.  **Shift Register:** A series of flip-flops that store the most recent input bits. The length of the shift register is related to the constraint length.
    2.  **Generator Polynomials:** Each output stream (if there are multiple) is generated by XORing specific bits from the shift register, as defined by the generator polynomials.
    3.  **Output:** A stream of coded bits, often interleaved.
*   **Example: A simple convolutional encoder with constraint length $K=3$ and two generator polynomials $g^{(1)} = (110)_2$ and $g^{(2)} = (101)_2$.**
    *   The generator polynomials define which taps of the shift register are XORed to produce each output bit. The polynomials are usually represented in octal or binary. $(110)_2$ means XORing the current input (tap 1) and the previous input (tap 2). $(101)_2$ means XORing the current input (tap 1) and the input from two steps ago (tap 3).
    *   **Circuit:** A 3-bit shift register.
        *   Output 1: XOR of the first and second flip-flop outputs (bits from taps 1 and 2).
        *   Output 2: XOR of the first and third flip-flop outputs (bits from taps 1 and 3).
    *   For each input bit, two output bits are generated. The overall rate is $1/2$.

#### Interleaving

Interleaving is often used in conjunction with channel encoding, especially for AWGN channels, to spread out bursts of errors.

*   **Purpose:** To decorrelate errors. If errors occur in a burst, they can overwhelm the error correction capability of the code. Interleaving spreads these errors across different coded symbols.
*   **Encoding Circuit Component:** A block of memory or a series of registers used to reorder the coded bits before transmission. The demultiplexer at the receiver reconstructs the original sequence.

---

### Relation to Channel Capacity (CO1, CO3)

The ultimate goal in designing encoding circuits for the AWGN channel is to approach the Shannon capacity.

*   **Shannon's Theorem for AWGN:** States that reliable communication is possible at any rate $R < C$.
*   **Achieving Capacity:**
    *   **High Rate:** As the data rate $R$ approaches $C$, the required Signal-to-Noise Ratio (SNR) for reliable communication tends towards a minimum value.
    *   **Coding Gain:** Advanced channel coding schemes (like Turbo codes and LDPC codes, though more complex than basic Hamming or convolutional codes) can provide significant "coding gain," meaning they achieve a certain error rate at a lower SNR than uncoded systems. This allows us to operate closer to the theoretical capacity.
    *   **Encoding Circuit Complexity:** Achieving near-capacity performance often requires highly complex encoding circuits, such as those implementing iterative decoding algorithms (e.g., for Turbo codes). The complexity of the encoding circuit is a trade-off with the achievable performance.

---

### Integration with Modulation Schemes (CO4)

The choice of modulation scheme directly impacts the SNR required for a given error rate and thus interacts with the effectiveness of the encoding.

*   **M-ary Modulation:** Schemes like M-PSK and M-QAM use multiple symbols to represent more than one bit per symbol. This increases the data rate but typically requires a higher SNR for the same error probability compared to binary modulation.
*   **Interleaving Modulation and Coding:** The encoder's output bits are mapped to constellation points of the modulation scheme. The design of this mapping (e.g., Gray coding for QAM) can influence the performance in AWGN.
*   **Encoding Circuit Output:** The output of the encoding circuit is typically a stream of binary digits, which are then fed to the modulator. The modulator's input is the direct result of the encoder's operation.

---

### Importance of Parameters

*   **Code Rate ($R_c$):** The ratio of information bits to total codeword bits ($k/n$). A lower code rate generally offers better error correction but reduces the data rate.
*   **Constraint Length (K) for Convolutional Codes:** A larger constraint length generally improves coding performance but increases the complexity of the encoder and decoder.
*   **SNR ($E_b/N_0$):** The ratio of energy per bit to the noise power spectral density. This is the fundamental parameter that determines the performance over an AWGN channel. Encoding schemes are designed to achieve a target Bit Error Rate (BER) at a specific $E_b/N_0$.

---

### Important Points to Remember

*   Encoding is critical for reliable communication over noisy channels like AWGN.
*   **Source encoding** compresses data, while **channel encoding** adds redundancy to combat noise.
*   Encoding circuits are built using basic digital logic components like shift registers and XOR gates.
*   The complexity of the encoding circuit directly relates to the sophistication of the coding scheme.
*   Advanced codes (Turbo, LDPC) are necessary to approach the Shannon capacity of the AWGN channel.
*   Modulation schemes and channel codes are designed and implemented together for optimal system performance.

---

### Practice Questions

1.  **CO3, K3:** For a Hamming (7,4) code with data bits $d_1, d_2, d_3, d_4$, and parity bits $p_1, p_2, p_3$ calculated as:
    *   $p_1 = d_1 \oplus d_2 \oplus d_4$
    *   $p_2 = d_1 \oplus d_3 \oplus d_4$
    *   $p_3 = d_2 \oplus d_3 \oplus d_4$
    Draw a schematic of the encoding circuit. If the data bits are `1011` (d1=1, d2=0, d3=1, d4=1), what is the transmitted codeword?

2.  **CO4, K2:** Explain how the choice of modulation scheme (e.g., BPSK vs. QPSK) affects the design considerations for the preceding encoding circuit in an AWGN channel.

3.  **CO3, K3:** What is the purpose of interleaving in an AWGN communication system, and how would it affect the design of the encoding and decoding circuits?

4.  **CO1, K2:** Briefly describe how advanced coding schemes help in approaching the Shannon capacity of an AWGN channel.

---

### Answers to Practice Questions

1.  **Schematic of Hamming (7,4) Encoder:**
    ```
    Data Input:
    d1 --+-----+-----+
         | XOR | XOR |
    d2 --+--+--+--+--+
            |  |  |
    d3 ------+--+--+
               |  |
    d4 --------+--+------
                  |
    p1 ------------
    p2 -----------------
    p3 --------------------
    ```
    A more detailed circuit diagram would explicitly show flip-flops if data arrives sequentially, but for a conceptual block, XOR gates suffice.

    **Codeword Calculation:**
    Given data bits: $d_1=1, d_2=0, d_3=1, d_4=1$.
    *   $p_1 = d_1 \oplus d_2 \oplus d_4 = 1 \oplus 0 \oplus 1 = 0$
    *   $p_2 = d_1 \oplus d_3 \oplus d_4 = 1 \oplus 1 \oplus 1 = 1$
    *   $p_3 = d_2 \oplus d_3 \oplus d_4 = 0 \oplus 1 \oplus 1 = 0$

    The codeword is typically formed by interleaving parity bits and data bits. A common structure is $p_1 p_2 d_1 p_3 d_2 d_3 d_4$.
    Therefore, the codeword is `0110011`.

2.  **Impact of Modulation Scheme:**
    *   **BPSK:** Each symbol represents 1 bit. It requires a lower SNR for a given BER compared to higher-order modulation schemes. The encoding circuit's output is directly mapped to these two levels.
    *   **QPSK:** Each symbol represents 2 bits. It requires a higher SNR for the same BER as BPSK. The encoding circuit's output is now grouped into pairs of bits to form QPSK symbols.
    *   **Higher-order M-ary Modulation:** Requires even higher SNRs.
    The encoding circuit needs to generate the appropriate number of bits per symbol for the chosen modulator. A more complex modulation scheme, requiring higher SNR, might necessitate a more powerful (and thus potentially more complex) error correction code from the encoder to maintain reliability at that higher SNR. The bit mapping from the encoder to the modulator's constellation also plays a role in error performance.

3.  **Purpose of Interleaving:**
    Interleaving is used to spread out burst errors into a sequence of single-bit errors. In an AWGN channel, while noise is random, certain channel impairments can cause temporary degradation leading to bursts of errors. If errors occur in a burst, they can corrupt multiple consecutive bits within a coded block, potentially exceeding the error-correction capability of the code.
    *   **Encoding Circuit Impact:** The encoding circuit generates the coded bits. Before transmission, an interleaver (which can be a memory buffer or a specific circuit) reorders these coded bits. This means the bits output by the encoder are not transmitted in their original coded sequence.
    *   **Decoding Circuit Impact:** The decoder receives the interleaved bits. A corresponding de-interleaver circuit at the receiver reorders the bits back into their original coded sequence before they are processed by the error-correction decoder. This process effectively decorrelates the errors, making them appear as independent errors to the decoder, which it can handle more effectively.

4.  **Approaching Shannon Capacity:**
    Shannon's channel coding theorem states that for any rate $R$ below the channel capacity $C$, there exist coding and decoding schemes that can achieve an arbitrarily low probability of error.
    *   **Advanced Codes:** Schemes like Turbo codes and Low-Density Parity-Check (LDPC) codes are designed to operate very close to the Shannon limit. They use complex structures and iterative decoding algorithms.
    *   **Encoding Circuit Complexity:** The encoding circuits for these advanced codes are significantly more complex than those for simple codes. They might involve large state machines or specific algorithms for constructing the coded bits.
    *   **SNR Requirement:** By using these advanced codes, communication systems can achieve a target Bit Error Rate (BER) at a lower Signal-to-Noise Ratio (SNR) compared to systems using simpler codes or no codes at all. This "coding gain" allows the system to operate more efficiently and closer to the theoretical maximum rate of reliable transmission defined by the channel capacity.

---

This detailed set of notes covers the fundamental aspects of encoding circuits within the context of the AWGN channel, directly aligning with the stated learning and course outcomes. The references provided throughout indicate where deeper exploration can be found within the recommended textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
