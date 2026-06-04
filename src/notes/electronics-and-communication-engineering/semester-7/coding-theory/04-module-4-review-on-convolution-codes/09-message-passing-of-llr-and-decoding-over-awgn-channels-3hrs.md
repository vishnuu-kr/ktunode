---
title: "Message passing of LLR and decoding over AWGN channels. (3hrs)"
subject: "CODING THEORY"
module: "Module 4: Review on Convolution Codes"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff238"
status: "completed"
scrapedAt: "2026-05-23T18:05:27.908Z"
---
# CODING THEORY: Module 4 - Review on Convolution Codes

## Topic: Message Passing of LLR and Decoding Over AWGN Channels

This module provides a review of convolutional codes, focusing on how their principles extend to modern coding techniques. We will delve into the message-passing decoding algorithms, specifically in the context of Log-Likelihood Ratio (LLR) and their application over Additive White Gaussian Noise (AWGN) channels.

---

### 1. Review of Convolutional Codes

**1.1 What are Convolutional Codes?**

*   **Definition:** Convolutional codes are a type of error-correcting code where the output bits are a function of the current and a finite number of previous input bits. Unlike block codes, they don't operate on fixed-size blocks of data independently.
*   **Key Components:**
    *   **Generator Polynomials:** These polynomials define the structure of the convolutional encoder. For a rate $k/n$ code, there are $n$ generator polynomials, each of length typically related to the constraint length $K$.
    *   **Constraint Length ($K$):** The number of bits that influence the current output. It's often described by the maximum shift register length.
    *   **Code Rate ($k/n$):** The ratio of information bits ($k$) to coded bits ($n$) per block of input.
    *   **State:** The contents of the shift register at any given time, representing the memory of the encoder.
*   **Encoder Structure:**
    *   A shift register stores the last $K-1$ input bits.
    *   Adders (XOR gates) combine bits from different stages of the shift register, weighted by the generator polynomials.
    *   The output of these adders forms the coded bits.

**1.2 State Diagram, Trellis Diagram, and State Transition Diagram**

*   **State Diagram:** A graphical representation showing the possible states of the encoder and the transitions between them based on the input bits.
*   **Trellis Diagram:** Unrolls the state diagram over time, illustrating the sequence of states and transitions for a given sequence of input bits. This is crucial for decoding.
    *   Each node represents a state.
    *   Branches represent transitions between states due to input bits (0 or 1).
    *   Each branch is labeled with the corresponding output coded bits.
*   **State Transition Diagram:** Similar to a state diagram, but often explicitly shows the input and output for each transition.

**(CO5: Apply convolutional code for error detection correction)**

---

### 2. Decoding Convolutional Codes

**2.1 The Challenge of Decoding**

*   **Search Problem:** Decoding involves finding the most likely transmitted sequence of bits given the received noisy sequence. For convolutional codes, this means searching the trellis.
*   **Exponential Complexity:** A brute-force search over all possible paths in the trellis becomes computationally infeasible as the constraint length increases.

**2.2 The Viterbi Algorithm**

*   **Overview:** The Viterbi algorithm is a maximum likelihood sequence estimation (MLSE) algorithm that efficiently decodes convolutional codes by finding the most probable path through the trellis.
*   **Key Principle:** At each stage (time step), it keeps track of the most likely path to reach each state. This is done by comparing the accumulated path metrics.
*   **Path Metric:** A measure of how well a particular path through the trellis matches the received sequence. For AWGN channels, this is often the squared Euclidean distance or, more commonly, related to the log-likelihood.
*   **Steps:**
    1.  **Initialization:** Set path metrics to zero for the initial state at time 0.
    2.  **Recursion:** For each state at time $t$, calculate the path metrics for reaching it from the previous states at time $t-1$. Choose the path with the minimum (or maximum, depending on the metric) metric.
    3.  **Traceback:** Once the end of the received sequence is reached, the path with the overall minimum metric is identified, and the corresponding input bits are extracted.
*   **Metric Calculation in AWGN:**
    *   Received signal for bit $i$ is $y_i = x_i + n_i$, where $x_i$ is the transmitted bit (0 or 1, mapped to $\pm 1$) and $n_i$ is Gaussian noise.
    *   The likelihood of receiving $y_i$ given $x_i$ is proportional to $exp(-\frac{(y_i - x_i)^2}{2\sigma^2})$.
    *   Maximizing the likelihood of a path is equivalent to minimizing the sum of squared Euclidean distances: $\sum (y_i - x_i)^2$.
    *   Alternatively, using Log-Likelihood Ratios (LLRs) simplifies calculations.

**(CO5: Apply convolutional code for error detection correction)**
**(CO3: Apply linear block codes to detect and correct errors - principles extend)**

---

### 3. Log-Likelihood Ratio (LLR)

**3.1 Definition and Importance**

*   **LLR:** The natural logarithm of the ratio of probabilities of two events. In coding, it quantifies the "faith" in a received bit being a '1' versus a '0'.
*   **Formula:** $LLR = \log \frac{P(\text{received } y | \text{transmitted } 1)}{P(\text{received } y | \text{transmitted } 0)}$
*   **In AWGN:** For binary antipodal signaling (bits 0 and 1 mapped to $-1$ and $+1$), the received signal is $y$.
    *   $P(y | x=1) \propto \exp\left(-\frac{(y-1)^2}{2\sigma^2}\right)$
    *   $P(y | x=0) \propto \exp\left(-\frac{(y-(-1))^2}{2\sigma^2}\right) = \exp\left(-\frac{(y+1)^2}{2\sigma^2}\right)$
    *   $LLR = \log \frac{\exp\left(-\frac{(y-1)^2}{2\sigma^2}\right)}{\exp\left(-\frac{(y+1)^2}{2\sigma^2}\right)} = -\frac{1}{2\sigma^2} [(y-1)^2 - (y+1)^2]$
    *   $LLR = -\frac{1}{2\sigma^2} [y^2 - 2y + 1 - (y^2 + 2y + 1)] = -\frac{1}{2\sigma^2} [-4y] = \frac{2y}{\sigma^2}$
*   **Key Takeaway:** For AWGN, the LLR is directly proportional to the received signal $y$. A positive LLR indicates a higher probability of '1', and a negative LLR indicates a higher probability of '0'.

**3.2 LLR in Viterbi Decoding**

*   **Metric Update:** Instead of squared Euclidean distance, the Viterbi algorithm can use the sum of LLRs as path metrics.
    *   A positive LLR contributes positively to the path metric for a branch corresponding to a transmitted '1'.
    *   A negative LLR contributes negatively to the path metric for a branch corresponding to a transmitted '0'.
*   **Benefit:** Using LLRs directly incorporates the channel's noise characteristics and provides a more robust decoding process. It simplifies the calculations as we sum LLRs rather than dealing with squared distances and probabilities.

**(Reference: Lin & Costello, Chapter 6: Maximum Likelihood Sequence Estimation)**

---

### 4. Message Passing Decoding

**4.1 General Concept**

*   **Message Passing:** A class of iterative decoding algorithms where "messages" are passed between nodes in a graphical representation of the code (e.g., Tanner graph for LDPC codes or trellis for convolutional codes).
*   **Iterative Nature:** The process involves multiple rounds of message passing, refining the estimates of the transmitted bits with each iteration.
*   **Belief Propagation (BP):** A common message-passing algorithm, which, under certain conditions, computes the exact marginal probabilities (or LLRs) of the transmitted symbols.
*   **Variable Nodes and Check Nodes:** In a graphical model, variable nodes represent the transmitted bits, and check nodes represent the constraints imposed by the code. Messages are passed from variable to check nodes and vice-versa.

**4.2 Message Passing for Convolutional Codes (Viterbi as a specialized form)**

While the Viterbi algorithm is deterministic and finds the ML path in one pass, the concept of "message passing" is more generally associated with iterative decoders like those for Turbo codes or LDPC codes. However, we can view the Viterbi algorithm as a single-pass message-passing process on the trellis:

*   **Messages:** The "messages" passed in Viterbi are the path metrics to each state.
*   **Variable Nodes:** The states of the encoder.
*   **Check Nodes:** The transitions between states.
*   **Process:** At each time step, each state node receives "messages" (path metrics) from the previous states that can transition into it. It updates its own best path metric and passes it forward.

**4.3 Extending to Modern Codes (Turbo, LDPC)**

The principles of message passing are fundamental to decoding modern powerful codes like Turbo codes and LDPC codes.

*   **Turbo Codes:**
    *   Employ two or more recursive systematic convolutional (RSC) encoders, interspersed with an interleaver.
    *   Decoding involves two decoders (e.g., Viterbi or MAP decoders) that exchange extrinsic information (a form of LLR) iteratively.
    *   The output LLR from one decoder is de-interleaved and fed as *a priori* information to the other decoder, and vice-versa.
*   **LDPC Codes:**
    *   Represented by sparse bipartite graphs (Tanner graphs).
    *   Decoding algorithms like the Sum-Product algorithm (a form of Belief Propagation) pass messages along the edges of the Tanner graph.
    *   Messages from variable nodes to check nodes represent the probability that a bit is 1 (or 0).
    *   Messages from check nodes to variable nodes represent the constraint satisfaction information.

**(CO6: Illustrate modern error correcting codes like Turbo codes, LDPC code and polar codes)**
**(CO1: Explain various algebraic structures used in coding theory - graphs are a form of structure)**

---

### 5. Decoding Over AWGN Channels

*   **Channel Model:** In an AWGN channel, the received signal $y$ for a transmitted symbol $x$ (typically $\pm 1$) is $y = x + n$, where $n$ is a Gaussian random variable with mean 0 and variance $\sigma^2$.
*   **LLR Calculation for AWGN:** As derived earlier, the LLR for a received sample $y$ is proportional to $y / \sigma^2$.
*   **Decoding Process with LLRs:**
    1.  **Channel Output:** The AWGN channel directly outputs LLR values (or values proportional to them).
    2.  **Decoder Input:** These LLRs are fed into the decoding algorithm (e.g., Viterbi, MAP, Sum-Product).
    3.  **Metric Calculation:** The decoding algorithm uses these LLRs to update path metrics or pass messages, effectively measuring the likelihood of different transmitted sequences.
    4.  **Soft Decision Decoding:** Using LLRs allows for soft-decision decoding, which is generally more powerful than hard-decision decoding. Soft decision takes into account the confidence of the received bit (indicated by the magnitude of the LLR).

**Example: Viterbi Decoder with LLRs**

Consider a simple rate 1/2 convolutional code with generator polynomials $g_1 = 1+D$ and $g_2 = 1+D+D^2$. The trellis has 2 states (0 and 1, corresponding to the contents of a 1-bit shift register).

Let's say we transmit the sequence `010`.

*   **Encoder Operation:**
    *   Input `0`: Output `00` (state 0)
    *   Input `1`: Output `11` (state 1)
    *   Input `0`: Output `00` (state 0)
    *   Transmitted codeword: `001100`

*   **AWGN Channel:** The codeword `001100` is transmitted over an AWGN channel. Let's assume the transmitted bits are mapped to $\pm 1$. So, `0` $\rightarrow$ `-1`, `1` $\rightarrow$ `+1`.
    *   Transmitted sequence: `-1, -1, +1, +1, -1, -1`
    *   Received sequence (example): `y = [-0.8, -1.2, 1.1, 1.3, -0.9, -1.1]`
    *   Noise variance $\sigma^2 = 0.5$.

*   **LLR Calculation:** For each received $y_i$, the LLR is approximately $2y_i/\sigma^2$.
    *   LLRs: `[-3.2, -4.8, 4.4, 5.2, -3.6, -4.4]`

*   **Viterbi Decoding:** The Viterbi decoder would use these LLRs. For a transition corresponding to a transmitted `+1`, the LLR value is added to the path metric. For a transition corresponding to a transmitted `-1`, the negative of the LLR value is added. The decoder seeks to minimize the accumulated metric.

**(CO5: Apply convolutional code for error detection correction)**
**(CO3: Apply linear block codes to detect and correct errors - LLRs are fundamental to soft-decision decoding)**

---

### 6. Practice Questions and Exercises

**Question 1:**
For an AWGN channel with noise variance $\sigma^2$, what is the Log-Likelihood Ratio (LLR) for a received signal $y$ corresponding to a transmitted bit that was mapped to $+1$ or $-1$? Show your derivation.

**Answer 1:**
The LLR is defined as:
$LLR = \log \frac{P(y | x=1)}{P(y | x=-1)}$

In an AWGN channel, $y = x + n$, where $n \sim \mathcal{N}(0, \sigma^2)$.
The probability density function (PDF) of the received signal $y$ given $x$ is:
$P(y | x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(y-x)^2}{2\sigma^2}\right)$

So,
$P(y | x=1) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(y-1)^2}{2\sigma^2}\right)$
$P(y | x=-1) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(y-(-1))^2}{2\sigma^2}\right) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(y+1)^2}{2\sigma^2}\right)$

Now, taking the ratio:
$\frac{P(y | x=1)}{P(y | x=-1)} = \frac{\frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(y-1)^2}{2\sigma^2}\right)}{\frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(y+1)^2}{2\sigma^2}\right)} = \exp\left(-\frac{(y-1)^2}{2\sigma^2} + \frac{(y+1)^2}{2\sigma^2}\right)$

Taking the logarithm:
$LLR = \log \left[ \exp\left(\frac{1}{2\sigma^2} [-(y-1)^2 + (y+1)^2]\right) \right]$
$LLR = \frac{1}{2\sigma^2} [-(y^2 - 2y + 1) + (y^2 + 2y + 1)]$
$LLR = \frac{1}{2\sigma^2} [-y^2 + 2

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
