---
title: "Polar transform and frozen bits. LDPC and Polar codes in 5G. (3hrs)"
subject: "CODING THEORY"
module: "Module 4: Review on Convolution Codes"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff23b"
status: "completed"
scrapedAt: "2026-05-23T18:05:30.738Z"
---
# CODING THEORY - Module 4: Review on Convolution Codes

## Topic: Polar Transform and Frozen Bits, LDPC and Polar Codes in 5G (3 Hours)

---

### Introduction

This module revisits convolutional codes and then delves into modern error-correcting codes, specifically LDPC (Low-Density Parity-Check) codes and Polar codes, highlighting their significance in the 5G wireless communication standard. Understanding these codes is crucial for achieving high-performance and reliable communication in modern systems.

---

### 1. Polar Transform and Frozen Bits

#### 1.1 Introduction to Polar Codes

Polar codes, introduced by Erdal Arıkan in 2009, are the first provably capacity-achieving codes for Binary Input Discrete Memoryless Channels (BIMC). This means that under certain conditions, they can achieve the theoretical maximum data rate (channel capacity) with arbitrarily low error probability. This was a significant breakthrough in coding theory.

**Key Concept:** Polar codes work by exploiting a phenomenon called **channel polarization**. When a channel is repeatedly transformed through a specific process, the resulting "virtual" channels either become very good (close to a noiseless binary erasure channel) or very bad (close to a completely noisy channel).

#### 1.2 The Polar Transform (Bit-Flipping Transformation)

The core of polar coding lies in the **polar transform**, also known as the bit-flipping transformation or the Arikan transform. It's a process that combines $N$ independent uses of a binary-input channel $W$ to create $N$ new, correlated binary channels. These new channels exhibit the property of polarization.

**Definition:** For a given binary-input channel $W: \mathcal{X} \rightarrow \mathcal{Y}$, where $\mathcal{X} = \{0, 1\}$ and $\mathcal{Y}$ is the output alphabet, the polar transform operates on $N$ independent uses of $W$. Let $U_1, U_2, \dots, U_N$ be $N$ independent random variables uniformly distributed over $\{0, 1\}$, representing the information bits. These bits are then processed using a specific linear transformation, effectively forming a $(N, K)$ block code.

The transformation is typically represented by a $N \times N$ generator matrix $G_N$, which is constructed recursively. The base case is $G_2 = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}$. The recursive construction for $G_{2N}$ from $G_N$ is:

$G_{2N} = \begin{pmatrix} G_N & 0 \\ G_N & G_N \end{pmatrix}$

If we represent the input vector as $u = (u_1, u_2, \dots, u_N)$, the transmitted vector $x = (x_1, x_2, \dots, x_N)$ is obtained by $x = u G_N$.

**Channel Polarization:**
When the input bits $U_i$ are transmitted through $N$ independent uses of the channel $W$, resulting in noisy observations $Y_1, Y_2, \dots, Y_N$, the polar transform effectively creates $N$ *new* channels, denoted as $W_i^{(2)}$ for $i = 1, \dots, N$. These channels operate on the "transformed" bits.

The key insight is that as $N$ increases (and $N$ is a power of 2), the properties of these $N$ channels converge to two extremes:
*   **Good Channels:** These channels become very close to a noiseless binary erasure channel ($p_e=0$), meaning they can reliably transmit information.
*   **Bad Channels:** These channels become very close to a completely noisy channel ($p_e \approx 0.5$), meaning they are unreliable and transmit little useful information.

This phenomenon is known as **channel polarization**.

#### 1.3 Frozen Bits and Information Bits

The core idea of polar coding for reliable communication is to utilize this polarization.

*   **Information Bits:** Bits intended to carry the actual message are transmitted over the "good" channels.
*   **Frozen Bits:** Bits transmitted over the "bad" channels are set to fixed, known values (usually 0). These bits are "frozen" and do not carry information. Their purpose is to facilitate the decoding process.

**Determining Frozen Bits:**
To construct a polar code of length $N$ that can transmit $K$ information bits, we need to:
1.  **Simulate the Polar Transform:** For a given channel $W$ and a chosen code length $N$ (typically a power of 2), simulate the polar transform $N$ times.
2.  **Calculate Bhattacharyya Parameters:** For each of the $N$ resulting channels $W_i^{(2)}$, calculate a metric that quantifies its reliability. The **Bhattacharyya parameter** ($B(W)$) is commonly used. For a channel $W$, the Bhattacharyya parameter is defined as $B(W) = \sum_{y \in \mathcal{Y}} \sqrt{W(y|0)W(y|1)}$. A lower Bhattacharyya parameter indicates a more reliable channel.
3.  **Sort Channels:** Sort the $N$ channels based on their Bhattacharyya parameters in ascending order.
4.  **Select Information and Frozen Bits:** The $K$ channels with the smallest Bhattacharyya parameters (i.e., the most reliable channels) are designated for transmitting information bits. The remaining $N-K$ channels with the largest Bhattacharyya parameters are designated for frozen bits. These frozen bits are set to a predefined value (e.g., 0).

**Encoding:**
The information bits are placed in the positions corresponding to the $K$ most reliable channels, and the frozen bits are placed in the positions corresponding to the $N-K$ least reliable channels. This combined vector is then passed through the polar encoder (multiplied by $G_N$).

**Decoding:**
Polar codes are typically decoded using **successive cancellation (SC) decoding**. The decoder processes the received vector sequentially, making decisions on each bit. For each bit, it estimates its value based on the received noisy symbols and the decisions made on previous bits. If a bit is assigned to a frozen position, its value is known. If it's assigned to an information position, the decoder uses the channel properties and previous decisions to estimate its value.

**Example (Conceptual):**
Suppose we have a channel $W$ and want to construct a polar code of length $N=8$. We simulate the polar transform 8 times, resulting in 8 virtual channels $W_1^{(2)}, \dots, W_8^{(2)}$. We calculate their Bhattacharyya parameters $B(W_i^{(2)})$.
Let's say after sorting, the parameters are:
$B_1 < B_2 < B_3 < B_4 < B_5 < B_6 < B_7 < B_8$.

If we want to send $K=4$ information bits, we would assign the information bits to channels 1, 2, 3, and 4. The remaining channels (5, 6, 7, 8) would be used for frozen bits, which we would set to 0. The encoded codeword would be the result of $u \cdot G_8$, where $u = (u_{inf,1}, u_{inf,2}, u_{inf,3}, u_{inf,4}, 0, 0, 0, 0)$ (assuming information bits are placed in the first $K$ positions after sorting based on reliability).

#### 1.4 Important Points to Remember (Polar Codes)

*   **Capacity Achieving:** Polar codes are theoretically capacity-achieving for BIMCs.
*   **Channel Polarization:** The core principle is transforming one channel into many that are either very good or very bad.
*   **Frozen Bits:** Fixed bits that exploit the "bad" channels to aid decoding.
*   **Bhattacharyya Parameter:** Key metric for identifying reliable channels.
*   **Successive Cancellation (SC) Decoding:** The standard decoding algorithm.
*   **Recursive Construction:** The generator matrix is built recursively.
*   **Code Length:** Typically powers of 2 for efficient recursive construction.

---

### 2. LDPC Codes

#### 2.1 Introduction to LDPC Codes

LDPC codes, introduced by Robert Gallager in 1962, were initially overlooked but have gained prominence due to their excellent performance, approaching the Shannon limit, and their efficient decoding algorithms. They are **linear block codes** defined by sparse parity-check matrices.

**Key Concept:** Sparsity is the defining characteristic of LDPC codes. A sparse parity-check matrix means that most of its entries are zero. This sparsity leads to efficient encoding and decoding.

#### 2.2 Definition and Representation

**Definition:** An LDPC code of length $N$ is a linear block code defined by an $M \times N$ parity-check matrix $H$, where $M < N$. The code vectors $c$ satisfy the equation $c H^T = 0$.

**Parity-Check Matrix (H):**
The structure of $H$ is crucial. For an LDPC code, $H$ is sparse, meaning it contains very few '1's.

**Tanner Graph:**
LDPC codes are conveniently represented using a bipartite graph called a **Tanner graph**.
*   **Variable Nodes:** Represent the bits of the codeword ($x_1, x_2, \dots, x_N$).
*   **Check Nodes:** Represent the parity-check equations (rows of $H$).
*   **Edges:** An edge connects a variable node $x_j$ to a check node $c_i$ if the entry $H_{ij}$ in the parity-check matrix is 1.

A code is an LDPC code if its parity-check matrix $H$ is sparse. Typically, the number of '1's in each row and column is small (e.g., constant or bounded).

#### 2.3 Encoding and Decoding LDPC Codes

**Encoding:**
Encoding for LDPC codes can be complex if the parity-check matrix $H$ is not in a specific structured form (e.g., systematic form). If $H$ can be put into the form $H = [P | I_M]$, where $P$ is an $M \times (N-M)$ matrix and $I_M$ is the $M \times M$ identity matrix, then the parity-check equations are:
$c_{n-M+1} \oplus c_{n-M+2} \oplus \dots \oplus c_N = 0$ (for the identity part)
$c_1 p_{11} \oplus \dots \oplus c_{N-M} p_{1,N-M} \oplus c_{N-M+1} = 0$ (for the $P$ part and first row)

In systematic form, the codeword $c$ can be written as $c = [d | p]$, where $d$ is the $K$-bit message and $p$ is the $M$-bit parity vector. The parity bits can be computed by $p = d P$. However, obtaining the systematic form for a general LDPC code can be computationally expensive. In practice, due to the sparsity, efficient encoding algorithms are used.

**Decoding:**
LDPC codes are decoded using iterative message-passing algorithms on the Tanner graph. The most common is the **belief propagation (BP) algorithm** and its variations, like **sum-product algorithm** (for real-valued messages) and **min-sum algorithm** (an approximation).

**Decoding Process (Simplified BP):**
1.  **Initialization:** Assign initial probabilities or likelihood ratios for each transmitted bit to the variable nodes.
2.  **Message Passing:** Messages are passed iteratively between variable nodes and check nodes along the edges of the Tanner graph.
    *   **Variable-to-Check (V2C) Messages:** A variable node sends a message to a check node about the probability of its bit being 0 or 1, taking into account messages received from other connected check nodes.
    *   **Check-to-Variable (C2V) Messages:** A check node sends a message to a variable node about the probability of its parity-check equation being satisfied, based on the messages received from connected variable nodes.
3.  **Convergence/Decision:** After a fixed number of iterations or when the messages stabilize, decisions are made on the transmitted bits based on the final messages at the variable nodes.

The iterative nature of BP decoding allows LDPC codes to achieve near-capacity performance.

#### 2.4 Types of LDPC Codes

*   **Regular LDPC Codes:** All variable nodes have the same degree (number of incident edges), and all check nodes have the same degree. This simplifies analysis and construction.
*   **Irregular LDPC Codes:** The degrees of variable and check nodes vary. By carefully choosing the degree distribution, irregular LDPC codes can achieve even better performance than regular codes.

#### 2.5 Important Points to Remember (LDPC Codes)

*   **Sparse Parity-Check Matrix:** The defining characteristic.
*   **Tanner Graph:** Graphical representation for analysis and decoding.
*   **Iterative Decoding (BP):** Key to achieving near-capacity performance.
*   **Near-Capacity Performance:** Excellent error correction capabilities.
*   **Regular vs. Irregular:** Irregular codes offer performance advantages.
*   **Constructibility:** Efficient construction algorithms exist (e.g., using pseudo-random methods or combinatorial designs).

---

### 3. LDPC and Polar Codes in 5G

Both LDPC and Polar codes have been adopted in the 5G New Radio (NR) standard for different purposes, leveraging their respective strengths.

#### 3.1 LDPC Codes in 5G

**Purpose:** LDPC codes are used for **data channels** in 5G NR, specifically for:
*   **Transport Channels (e.g., PDSCH - Physical Downlink Shared Channel, PUSCH - Physical Uplink Shared Channel):** These carry user data.
*   **Control Channels (e.g., PDCCH - Physical Downlink Control Channel, PUCCH - Physical Uplink Control Channel):** These carry control information.

**Why LDPC for Data?**
*   **High Throughput:** LDPC codes offer excellent performance at high data rates.
*   **Efficient Decoding:** Their iterative decoding algorithms are well-suited for hardware implementation, enabling high-speed processing.
*   **Scalability:** LDPC codes can be constructed to support a wide range of code rates and block lengths, making them scalable for diverse 5G use cases.
*   **Good performance at high SNR:** They perform very well when the signal-to-noise ratio (SNR) is high, which is common in many 5G scenarios.
*   **Flexibility:** The standard defines LDPC codes with various configurations and rate matching capabilities to adapt to different channel conditions and user requirements.

The 5G LDPC codes are specified with structured parity-check matrices, often based on finite geometries or quasi-cyclic structures, to facilitate efficient hardware implementation.

#### 3.2 Polar Codes in 5G

**Purpose:** Polar codes are used for **control channels** in 5G NR, specifically for:
*   **Control Channel Information (CCI):** Such as the Downlink Control Information (DCI) and Uplink Control Information (UCI).
*   **Broadcast Channel (BCH):** Carrying essential system information.

**Why Polar for Control?**
*   **Low Error Probability at Low SNR:** Polar codes excel at achieving very low error rates, particularly at the low Signal-to-Noise Ratios (SNRs) often encountered when transmitting control information over potentially challenging links or from a distance.
*   **Capacity Achieving:** Their theoretical capacity-achieving property ensures maximum reliability for critical control signaling.
*   **Shorter Block Lengths:** While polar codes are often associated with long block lengths for capacity achievement, they also show good performance for shorter block lengths, which are typical for control information that needs to be transmitted quickly.
*   **Efficient Decoding (with improvements):** While SC decoding can be slow, advancements like **successive cancellation list (SCL) decoding** significantly improve performance and are practical for control channels.

The 5G implementation of polar codes uses an extension of the SC decoding algorithm (SCL decoding) and specific construction methods for the polar codes to optimize their performance for the targeted control applications.

#### 3.3 Comparison and Synergistic Use

| Feature             | LDPC Codes                               | Polar Codes                                    |
| :------------------ | :--------------------------------------- | :--------------------------------------------- |
| **Primary Use in 5G** | Data Channels (PDSCH, PUSCH)             | Control Channels (DCI, UCI, BCH)               |
| **Strengths**       | High throughput, efficient decoding, scalable | Low error rate at low SNR, capacity achieving  |
| **Decoding**        | Belief Propagation (BP)                  | Successive Cancellation (SC), SCL              |
| **Block Lengths**   | Generally longer, highly variable        | Can be effective at shorter lengths for control |
| **Complexity**      | Moderate (iterative decoding)            | Moderate to High (SC/SCL), but predictable      |
| **Code Construction** | Sparse matrices, various constructions   | Arikan transform, recursive construction       |

The choice of LDPC for data and Polar for control in 5G is a strategic decision based on the different performance requirements and operating conditions of these functionalities. LDPC's high throughput capabilities are ideal for bulk data, while Polar's ability to guarantee very low error rates even in challenging conditions makes it perfect for mission-critical control signaling.

---

### Course Outcomes Alignment

*   **CO1: Explain various algebraic structures used in coding theory (Knowledge Level: K2)**
    *   While not explicitly algebraic in the same sense as BCH or Reed-Solomon, the linear nature of LDPC codes and the structured (matrix-based) nature of polar codes can be linked to algebraic concepts. The systematic form of $H$ for LDPC codes has algebraic implications. The recursive matrix construction for polar codes is also a structured, albeit not strictly algebraic, approach.
*   **CO2: Explain the error detection and correction capabilities of linear codes (Knowledge Level: K2)**
    *   Both LDPC and Polar codes are linear codes. This module explains how their structures (sparsity for LDPC, polarization for Polar) contribute to their powerful error detection and correction capabilities, often outperforming older codes.
*   **CO3: Apply linear block codes to detect and correct errors. (Knowledge Level: K3)**
    *   While this module focuses on the *concepts* of LDPC and Polar codes, understanding their Tanner graph representation (LDPC) and iterative decoding principles (LDPC & Polar) provides the foundation for understanding *how* they detect and correct errors. The selection of information and frozen bits in polar codes is an application of channel reliability to error correction.
*   **CO4: Use algebraic techniques to construct efficient codes with reduced structural complexity (Knowledge Level: K3)**
    *   The recursive construction of polar matrices and structured LDPC code constructions (like those based on finite geometries) are examples of techniques that lead to efficient codes. While the focus isn't on traditional algebraic constructions, the systematic design principles are related.
*   **CO5: Apply convolutional code for error detection correction (Knowledge Level: K3)**
    *   This module *reviews* convolutional codes and then moves to LDPC and Polar. The review aspect connects to CO5, providing context for the evolution of coding techniques.
*   **CO6: Illustrate modern error correcting codes like Turbo codes, LDPC codes and polar codes (Knowledge Level: K2)**
    *   This module directly addresses LDPC and Polar codes, illustrating their principles, construction, decoding, and applications in 5G. This directly fulfills CO6.

---

### Practice Questions

1.  **Conceptual:** Explain the phenomenon of channel polarization in the context of polar codes. What are the implications of this phenomenon for coding?
    *   **Answer:** Channel polarization refers to the process where repeated application of the polar transform on a channel leads to a set of derived channels that become either very reliable (close to noiseless) or very unreliable (close to completely noisy). This allows for the creation of codes where information bits are sent over the reliable channels and "frozen" bits are used on the unreliable channels, enabling near-capacity performance.

2.  **Definition:** What is the defining characteristic of an LDPC code's parity-check matrix?
    *   **Answer:** The defining characteristic of an LDPC code's parity-check matrix is its sparsity, meaning it contains a very low density of '1's.

3.  **Comparison:** For what types of channels or scenarios are polar codes generally preferred over LDPC codes, and why?
    *   **Answer:** Polar codes are generally preferred for control channels or situations requiring very low error probabilities at low SNRs, as they can achieve capacity and are highly reliable. LDPC codes are preferred for data channels where high throughput and efficient decoding at moderate to high SNRs are critical.

4.  **Application:** Briefly explain why LDPC codes are used for data transmission and polar codes for control signaling in the 5G standard.
    *   **Answer:** LDPC codes are chosen for 5G data channels due to their high throughput and efficient hardware implementation for iterative decoding, making them suitable for transmitting large amounts of data. Polar codes are chosen for 5G control channels because of their proven ability to achieve extremely low error rates, even under poor channel conditions, ensuring the reliability of critical control information.

5.  **Tanner Graph:** Describe the components of a Tanner graph used to represent LDPC codes.
    *   **Answer:** A Tanner graph consists of two sets of nodes: variable nodes representing the bits of the codeword, and check nodes representing the parity-check equations. Edges connect variable nodes to check nodes if the corresponding entry in the parity-check matrix is '1'.

6.  **Polar Codes:** If you are designing a polar code of length $N=16$ and need to transmit $K=10$ information bits, how many frozen bits would you need, and what would be their typical value?
    *   **Answer:** You would need $N-K = 16-10 = 6$ frozen bits. Their typical value is 0.

---

### Important Points to Remember

*   **Polar Codes:** Capacity-achieving for BIMCs, rely on **channel polarization**, use **frozen bits** on unreliable channels, decoded via **Successive Cancellation (SC)**.
*   **LDPC Codes:** Defined by **sparse parity-check matrices**, represented by **Tanner graphs**, decoded iteratively using **Belief Propagation (BP)**, exhibit **near-capacity performance**.
*   **5G Standard:** **LDPC codes for data channels** (high throughput), **Polar codes for control channels** (low error rate, high reliability). This choice reflects the distinct requirements of these communication functions.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### References (as per provided list)

*   **Error Control Coding: Fundamentals and Applications by Shu Lin & Daniel J. Costello. Jr.:** Provides fundamental concepts of coding theory that underpin LDPC and polar codes.
*   **Communication Systems by Simon Haykin:** Offers a broader perspective on communication systems where coding plays a vital role.
*   **Modern Coding Theory by T. Richardson, R. Urbanke:** A core text for advanced understanding of modern codes like LDPC.
*   **Principles of digital communication by RG Gallager:** Gallager's foundational work is crucial for understanding iterative decoding principles that are key to LDPC codes.
*   **Introduction to Coding Theory by Ron M Roth:** A good resource for the algebraic underpinnings of coding and understanding block codes.
*   **A Brief Introduction to Polar Codes by H. Pfister:** A dedicated resource for understanding the core concepts of polar codes.
*   **Polar Codes: A Non-Trivial Approach to Channel Coding by O. Gazi:** Another valuable resource for in-depth study of polar codes.
*   **LDPC and Polar Codes in 5G Standard, NPTEL Course by A. Thangaraj:** Directly relevant for understanding their specific implementation and importance in the 5G standard.

---