---
title: "Binary symmetric channels (BSC)"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 1: Entropy"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fecfc"
status: "completed"
scrapedAt: "2026-05-23T17:58:31.523Z"
---
# ADVANCED COMMUNICATION THEORY

## Module 1: Entropy

### Topic: Binary Symmetric Channels (BSC)

---

### 1. Introduction to Channels and Channel Models

In advanced communication theory, a **channel** is the physical medium through which information is transmitted from a sender to a receiver. Real-world channels are imperfect and introduce distortions, errors, or loss of information. To analyze and design communication systems, we use **channel models** to represent the behavior of these channels mathematically.

*   **Key Concept:** A channel model describes the probabilistic relationship between the transmitted input and the received output.
*   **Reference:** This concept is fundamental in all listed textbooks, particularly in introductory chapters on information theory and digital communication (e.g., Cover & Thomas, Haykin).

### 2. The Binary Symmetric Channel (BSC)

The Binary Symmetric Channel (BSC) is one of the simplest and most fundamental discrete memoryless channel (DMC) models. It is used to represent a communication system where binary data (0s and 1s) are transmitted over a noisy channel.

**Definition:** A Binary Symmetric Channel is a binary channel where:
1.  The input alphabet is $\{0, 1\}$.
2.  The output alphabet is $\{0, 1\}$.
3.  The probability of a bit flipping (error) is the same for both 0s and 1s transmitted.
4.  The probability of a bit being transmitted correctly is the same regardless of whether the input is 0 or 1.

**Mathematical Representation:**

The BSC is characterized by a single parameter, $p$, which is the probability of a bit error (a "flip"). The probability of a bit being transmitted correctly is $1-p$.

The transition probabilities are given by:

*   $P(Y=0 | X=0) = 1-p$  (Transmitted 0, received 0)
*   $P(Y=1 | X=0) = p$   (Transmitted 0, received 1)
*   $P(Y=0 | X=1) = p$   (Transmitted 1, received 0)
*   $P(Y=1 | X=1) = 1-p$ (Transmitted 1, received 1)

Here:
*   $X$ is the random variable representing the transmitted bit.
*   $Y$ is the random variable representing the received bit.
*   $p$ is the crossover probability or bit error probability.

**Important Note:** The "symmetric" in BSC refers to the fact that the probability of flipping from 0 to 1 is the same as flipping from 1 to 0 ($p$).

*   **Reference:** Cover & Thomas (Chapter 2), Goldsmith (Chapter 2), Rappaport (Chapter 7).

#### 2.1 Visualizing the BSC

The BSC can be visualized using a state diagram or a probability transition matrix:

**State Diagram:**

```
       (1-p)
   +---------+
   |         |
X=0 --> Y=0 |
   |    ^    | p
   +----|----+
        |
        | p
   +----|----+
   |    v    |
X=1 --> Y=1 |
   |         |
   +---------+
       (1-p)
```

**Transition Matrix:**

The transition matrix $P$ has rows representing the transmitted symbols (X) and columns representing the received symbols (Y).

$$
P = \begin{pmatrix}
P(Y=0|X=0) & P(Y=1|X=0) \\
P(Y=0|X=1) & P(Y=1|X=1)
\end{pmatrix}
= \begin{pmatrix}
1-p & p \\
p & 1-p
\end{pmatrix}
$$

*   **Reference:** Cover & Thomas, Haykin.

#### 2.2 Examples of BSC

*   **Simple Binary Data Transmission:** Imagine sending binary data over a noisy wire. If the wire is prone to occasional short circuits or noise spikes, a transmitted '0' might be received as a '1', and vice-versa. If the noise is equally likely to affect a '0' or a '1', the BSC is a good model.
*   **Wireless Fading (Simplified):** In some simplified wireless scenarios, particularly for very short packets or specific types of fading, a bit might flip due to signal degradation. While real wireless channels are more complex, a BSC can serve as a basic model for understanding error probability.
*   **Optical Communication:** Some basic models for optical communication systems with photon noise can be approximated by a BSC.

### 3. Information Measures in the Context of BSC

This section connects the BSC model to the information measures introduced in the early parts of Module 1, specifically entropy and mutual information. This directly addresses **Course Outcome CO1: Explain information theory measures such as entropy, conditional entropy, mutual information (Knowledge Level: K2)**.

#### 3.1 Entropy of the Input Source ($H(X)$)

The entropy of the input source measures the uncertainty of the transmitted bits.

*   **Definition:** $H(X) = -\sum_{x} P(X=x) \log_2 P(X=x)$.
*   **For BSC:** If the input bits are equally likely (i.e., $P(X=0) = P(X=1) = 1/2$), then the entropy is maximum:
    $H(X) = -\frac{1}{2}\log_2\frac{1}{2} - \frac{1}{2}\log_2\frac{1}{2} = -\frac{1}{2}(-1) - \frac{1}{2}(-1) = 1$ bit.
    This is the maximum possible entropy for a binary random variable.
*   **Reference:** Cover & Thomas (Chapter 2), Haykin.

#### 3.2 Conditional Entropy ($H(Y|X)$)

The conditional entropy $H(Y|X)$ measures the uncertainty remaining in the output $Y$ given that the input $X$ is known. For a BSC, this is directly related to the error probability $p$.

*   **Definition:** $H(Y|X) = \sum_{x} P(X=x) H(Y|X=x)$.
*   **For BSC:**
    *   Given $X=0$: $H(Y|X=0) = -P(Y=0|X=0)\log_2 P(Y=0|X=0) - P(Y=1|X=0)\log_2 P(Y=1|X=0)$
        $H(Y|X=0) = -(1-p)\log_2(1-p) - p\log_2 p$. This is the entropy of a Bernoulli trial with parameter $p$.
    *   Given $X=1$: $H(Y|X=1) = -P(Y=0|X=1)\log_2 P(Y=0|X=1) - P(Y=1|X=1)\log_2 P(Y=1|X=1)$
        $H(Y|X=1) = -p\log_2 p - (1-p)\log_2(1-p)$. This is also the entropy of a Bernoulli trial with parameter $p$.
    *   Since $H(Y|X=0) = H(Y|X=1)$, we have:
        $H(Y|X) = P(X=0)H(Y|X=0) + P(X=1)H(Y|X=1)$
        $H(Y|X) = P(X=0)[-(1-p)\log_2(1-p) - p\log_2 p] + P(X=1)[-p\log_2 p - (1-p)\log_2(1-p)]$
    *   If $P(X=0) = P(X=1) = 1/2$, then:
        $H(Y|X) = \frac{1}{2}[-(1-p)\log_2(1-p) - p\log_2 p] + \frac{1}{2}[-p\log_2 p - (1-p)\log_2(1-p)]$
        $H(Y|X) = -(1-p)\log_2(1-p) - p\log_2 p$. This is often denoted as $H_b(p)$, the binary entropy function.
*   **Interpretation:** $H(Y|X)$ represents the average amount of uncertainty about the output *after* the input is known. For a BSC, this is exactly the average error per transmitted bit. If $p=0$, $H(Y|X)=0$ (no error). If $p=0.5$, $H(Y|X)=1$ bit (maximum uncertainty, output is independent of input).
*   **Reference:** Cover & Thomas (Chapter 2), Goldsmith (Chapter 2).

#### 3.3 Mutual Information ($I(X;Y)$)

Mutual information quantifies the amount of information that one random variable contains about another. For a channel, it measures how much information the receiver gains about the transmitted signal from the received signal.

*   **Definition:** $I(X;Y) = H(Y) - H(Y|X) = H(X) - H(X|Y)$.
*   **For BSC:**
    *   We need $H(Y)$. We can find this using the law of total probability:
        $P(Y=0) = P(Y=0|X=0)P(X=0) + P(Y=0|X=1)P(X=1)$
        If $P(X=0) = P(X=1) = 1/2$:
        $P(Y=0) = (1-p)(1/2) + p(1/2) = 1/2 - p/2 + p/2 = 1/2$.
        Similarly, $P(Y=1) = P(Y=1|X=0)P(X=0) + P(Y=1|X=1)P(X=1) = p(1/2) + (1-p)(1/2) = 1/2$.
        So, $H(Y) = 1$ bit for a symmetric binary source.
    *   Therefore, $I(X;Y) = H(Y) - H(Y|X) = 1 - [-(1-p)\log_2(1-p) - p\log_2 p]$
        $I(X;Y) = 1 - H_b(p)$.
    *   Alternatively, using $I(X;Y) = H(X) - H(X|Y)$:
        If $P(X=0) = P(X=1) = 1/2$, then $H(X) = 1$ bit.
        We need $H(X|Y)$. By symmetry of the BSC, $H(X|Y) = H(Y|X)$.
        So, $I(X;Y) = 1 - H_b(p)$.
*   **Interpretation:** $I(X;Y)$ represents the average number of bits transmitted correctly per symbol.
    *   If $p=0$ (perfect channel), $H_b(0) = 0$, so $I(X;Y) = 1 - 0 = 1$ bit. All transmitted information is received.
    *   If $p=0.5$ (worst case), $H_b(0.5) = 1$, so $I(X;Y) = 1 - 1 = 0$ bits. The received signal provides no information about the transmitted signal.
    *   If $p=1$ (always flipped), $H_b(1) = 0$, so $I(X;Y) = 1 - 0 = 1$ bit. This is interesting: if the channel always flips bits, and we know the transmitted bit, we can perfectly deduce the received bit, and vice versa (if we know the received bit, we know the transmitted bit). However, the BSC model assumes $p$ is fixed. If $p=1$, knowing $X$ gives us $Y$ with certainty, $I(X;Y)=H(X)=1$. The calculation above is correct. $I(X;Y) = H(X) - H(X|Y)$. If $p=1$, $P(Y=1|X=0)=1$ and $P(Y=0|X=1)=1$. If $X=0$, $Y=1$. If $X=1$, $Y=0$. Thus $X$ and $Y$ are perfectly anti-correlated. $H(X|Y)=0$. So $I(X;Y)=H(X)=1$. The formula $1-H_b(p)$ works for $p=1$ as $H_b(1)=0$, so $I(X;Y)=1$.
*   **Reference:** Cover & Thomas (Chapter 2), Goldsmith (Chapter 2), Haykin.

#### 3.4 Channel Capacity ($C$)

The **channel capacity** is the maximum rate at which information can be transmitted reliably over a channel. For a DMCs, it's the maximum of the mutual information over all possible input distributions.

*   **Definition:** $C = \max_{P(X)} I(X;Y)$.
*   **For BSC:** It can be shown that the maximum mutual information for a BSC is achieved when the input distribution is uniform ($P(X=0) = P(X=1) = 1/2$).
    Therefore, the capacity of the BSC is:
    $C = I(X;Y)|_{P(X=0)=P(X=1)=1/2} = 1 - H_b(p) = 1 - [-(1-p)\log_2(1-p) - p\log_2 p]$.
*   **Interpretation:** The capacity of the BSC represents the theoretical upper limit on the rate of reliable communication through that channel.
*   **Reference:** Cover & Thomas (Chapter 2), Goldsmith (Chapter 2).

### 4. Channel Coding and the BSC

The BSC provides a framework for understanding the performance of error control coding techniques. This aligns with **Course Outcome CO3: Apply channel coding for error detection and correction (Knowledge Level: K3)**.

*   **Goal of Channel Coding:** To add redundancy to the transmitted data in a structured way to enable the receiver to detect and/or correct errors introduced by the channel.
*   **BSC and Coding:**
    *   **Without Coding:** The rate of reliable communication is limited by the channel capacity $C$.
    *   **With Coding:** By using coding schemes (like block codes or convolutional codes), we can reduce the effective probability of error at the output of the decoder, allowing for communication at rates closer to the channel capacity.
*   **Example Scenario:** Suppose we transmit bits over a BSC with $p = 0.01$. The capacity is $C = 1 - H_b(0.01) \approx 1 - (-(0.99)\log_2(0.99) - 0.01\log_2(0.01)) \approx 1 - 0.0808 \approx 0.9192$ bits per symbol. If we want to transmit at a rate of $R = 0.8$ bits per symbol, we can use a good channel code to achieve a very low probability of error, approaching the theoretical limit defined by the capacity.
*   **Reference:** Cover & Thomas (Chapter 7), Lin & Costello, Goldsmith (Chapter 5).

### 5. Performance Analysis with BSC

Understanding how the BSC affects the transmitted information allows us to analyze the performance of communication systems. This ties into **Course Outcome CO5: Describe the wireless channel models and analyse the performance of the modulation techniques for flat fading channels (Knowledge Level: K2)**, where BSC can be a simplified model.

*   **Bit Error Rate (BER):** In a system without coding, the BER at the output of the receiver is directly related to the crossover probability $p$ of the BSC.
    *   If the input bits are equally likely, the probability of receiving a 0 when a 1 was sent is $p$, and the probability of receiving a 1 when a 0 was sent is $p$.
    *   The overall probability of error (BER) is:
        $P(\text{error}) = P(Y \neq X) = P(Y=1|X=0)P(X=0) + P(Y=0|X=1)P(X=1)$
        If $P(X=0) = P(X=1) = 1/2$:
        $P(\text{error}) = p(1/2) + p(1/2) = p$.
        So, for an equally likely binary input, the BER is simply $p$.
*   **Impact of $p$:**
    *   **Low $p$ (e.g., $p < 0.01$):** Channel is relatively good. High mutual information, high capacity.
    *   **Moderate $p$ (e.g., $p \approx 0.1$):** Channel is moderately noisy.
    *   **High $p$ (e.g., $p \approx 0.5$):** Channel is very noisy. Mutual information is low, capacity is low. If $p=0.5$, $I(X;Y)=0$.
*   **Reference:** Rappaport (Chapter 7), Goldsmith (Chapter 2).

### 6. Key Concepts and Definitions Summary

*   **Binary Symmetric Channel (BSC):** A binary channel with equal crossover probabilities ($p$) for 0s and 1s.
*   **Crossover Probability ($p$):** The probability that a transmitted bit is flipped.
*   **Binary Entropy Function ($H_b(p)$):** $-(1-p)\log_2(1-p) - p\log_2 p$, representing the entropy of a Bernoulli trial.
*   **Mutual Information ($I(X;Y)$):** Measures information shared between transmitted and received bits. For BSC with uniform input, $I(X;Y) = 1 - H_b(p)$.
*   **Channel Capacity ($C$):** Maximum rate of reliable communication. For BSC, $C = 1 - H_b(p)$.
*   **Bit Error Rate (BER):** Probability of a transmitted bit being received incorrectly. For BSC with uniform input, BER = $p$.

### 7. Important Points to Remember

*   The BSC is a fundamental model for binary communication over noisy channels.
*   The symmetry in the BSC means the error probability is the same for both bit types.
*   The performance of a BSC is entirely characterized by the crossover probability $p$.
*   Mutual information and channel capacity are directly related to $p$.
*   A higher $p$ means a noisier channel, lower capacity, and higher BER without coding.
*   Channel coding techniques are crucial for mitigating the effects of noise in BSCs and achieving reliable communication.

### 8. Practice Questions and Exercises

**Question 1:**
A Binary Symmetric Channel has a crossover probability $p = 0.2$. If the input is equally likely to be 0 or 1, what is the mutual information $I(X;Y)$?

**Answer 1:**
For a BSC with uniform input, $I(X;Y) = 1 - H_b(p)$.
$H_b(p) = -(1-p)\log_2(1-p) - p\log_2 p$
$H_b(0.2) = -(0.8)\log_2(0.8) - (0.2)\log_2(0.2)$
$H_b(0.2) = -(0.8) \times (-0.3219) - (0.2) \times (-2.3219)$
$H_b(0.2) \approx 0.2575 + 0.4644 \approx 0.7219$ bits.
$I(X;Y) = 1 - H_b(0.2) \approx 1 - 0.7219 \approx 0.2781$ bits.
The mutual information is approximately 0.2781 bits per transmitted symbol.

**Question 2:**
What is the channel capacity of a BSC with $p = 0.1$?

**Answer 2:**
The channel capacity of a BSC is $C = 1 - H_b(p)$.
$H_b(0.1) = -(0.9)\log_2(0.9) - (0.1)\log_2(0.1)$
$H_b(0.1) = -(0.9) \times (-0.1520) - (0.1) \times (-3.3219)$
$H_b(0.1) \approx 0.1368 + 0.3322 \approx 0.4690$ bits.
$C = 1 - H_b(0.1) \approx 1 - 0.4690 \approx 0.5310$ bits per symbol.
The capacity is approximately 0.5310 bits per symbol.

**Question 3:**
Consider a BSC with $p=0.5$. If the source transmits '0' with probability 0.7 and '1' with probability 0.3, what is $I(X;Y)$? What is $H(Y|X)$?

**Answer 3:**
For $p=0.5$, the BSC is completely useless; the output is independent of the input.
$P(Y=0|X=0) = 0.5$, $P(Y=1|X=0) = 0.5$
$P(Y=0|X=1) = 0.5$, $P(Y=1|X=1) = 0.5$

$H(Y|X) = \sum_{x} P(X=x) H(Y|X=x)$
$H(Y|X=0) = -(0.5)\log_2(0.5) - (0.5)\log_2(0.5) = 1$ bit.
$H(Y|X=1) = -(0.5)\log_2(0.5) - (0.5)\log_2(0.5) = 1$ bit.
$H(Y|X) = 0.7 \times 1 + 0.3 \times 1 = 1$ bit.

$H(X) = -(0.7)\log_2(0.7) - (0.3)\log_2(0.3)$
$H(X) \approx -(0.7) \times (-0.5146) - (0.3) \times (-1.7370)$
$H(X) \approx 0.3602 + 0.5211 \approx 0.8813$ bits.

Now, calculate $P(Y=0)$ and $P(Y=1)$:
$P(Y=0) = P(Y=0|X=0)P(X=0) + P(Y=0|X=1)P(X=1)$
$P(Y=0) = (0.5)(0.7) + (0.5)(0.3) = 0.35 + 0.15 = 0.5$.
$P(Y=1) = 1 - P(Y=0) = 0.5$.
So, $H(Y) = -(0.5)\log_2(0.5) - (0.5)\log_2(0.5) = 1$ bit.

$I(X;Y) = H(Y) - H(Y|X) = 1 - 1 = 0$ bits.
Or, $I(X;Y) = H(X) - H(X|Y)$.
We need $H(X|Y)$.
$P(X=0|Y=0) = \frac{P(Y=0|X=0)P(X=0)}{P(Y=0)} = \frac{(0.5)(0.7)}{0.5} = 0.7$.
$P(X=1|Y=0) = \frac{P(Y=0|X=1)P(X=1)}{P(Y=0)} = \frac{(0.5)(0.3)}{0.5} = 0.3$.
$H(X|Y=0) = -(0.7)\log_2(0.7) - (0.3)\log_2(0.3) \approx 0.8813$ bits.

$P(X=0|Y=1) = \frac{P(Y=1|X=0)P(X=0)}{P(Y=1)} = \frac{(0.5)(0.7)}{0.5} = 0.7$.
$P(X=1|Y=1) = \frac{P(Y=1|X=1)P(X=1)}{P(Y=1)} = \frac{(0.5)(0.3)}{0.5} = 0.3$.
$H(X|Y=1) = -(0.7)\log_2(0.7) - (0.3)\log_2(0.3) \approx 0.8813$ bits.

$H(X|Y) = P(Y=0)H(X|Y=0) + P(Y=1)H(X|Y=1)$
$H(X|Y) = (0.5)(0.8813) + (0.5)(0.8813) = 0.8813$ bits.

$I(X;Y) = H(X) - H(X|Y) \approx 0.8813 - 0.8813 = 0$ bits.
This confirms that when $p=0.5$, the BSC conveys no information regardless of the source distribution.

### 9. Relevance to Course Outcomes

*   **CO1 (Information Theory Measures):** All concepts of entropy, conditional entropy, and mutual information have been directly applied to the BSC, showing how these measures quantify channel behavior.
*   **CO3 (Channel Coding):** The BSC serves as a benchmark against which the effectiveness of channel coding schemes is measured. Understanding the BSC is the first step to designing codes to combat its noise.
*   **CO5 (Wireless Channel Models):** While simplified, the BSC can be seen as a basic model for binary transmission over some wireless channels, especially in the context of understanding fundamental error probabilities. More complex models build upon these basic principles.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
