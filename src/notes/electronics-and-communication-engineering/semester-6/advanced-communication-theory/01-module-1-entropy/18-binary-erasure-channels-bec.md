---
title: "Binary Erasure channels (BEC)."
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 1: Entropy"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fecfd"
status: "completed"
scrapedAt: "2026-05-23T17:58:32.230Z"
---
# Advanced Communication Theory: Module 1 - Entropy

## Topic: Binary Erasure Channels (BEC)

This module introduces fundamental concepts in information theory, focusing on the quantification of information and the behavior of communication channels. Specifically, this topic delves into the Binary Erasure Channel (BEC), a foundational model for understanding information loss and its implications in communication systems.

---

### Learning Outcomes Covered:

*   **LO1: Explain information theory measures such as entropy, conditional entropy, mutual information.** (Knowledge Level: K2)
*   **LO2: Apply source coding theorem for data compression.** (This topic lays the groundwork by understanding channel capacity, which is crucial for source coding and data compression strategies). (Knowledge Level: K3)
*   **LO3: Apply channel coding for error detection and correction.** (Understanding channel models like BEC is essential for designing effective channel coding schemes). (Knowledge Level: K3)
*   **LO4: Explain the basic Principle of wireless communication techniques.** (BEC serves as a fundamental model for understanding lossy channels in wireless communication). (Knowledge Level: K2)
*   **LO5: Describe the wireless channel models and analyse the performance of the modulation techniques for flat fading channels.** (BEC is a simple yet powerful model for illustrating channel impairments, including erasures which can be related to signal fading). (Knowledge Level: K2)
*   **LO6: Identify the advantages of various diversity and equalization techniques for improving the wireless receiver performance.** (Understanding channel models is a prerequisite for appreciating the benefits of diversity and equalization). (Knowledge Level: K3)

---

### 1. Introduction to Information Theory and Entropy

Before diving into the BEC, it's essential to revisit core information theory concepts.

*   **Information:** A measure of the reduction in uncertainty about an event.
*   **Entropy (H(X)):** The average amount of information contained in a random variable. It quantifies the uncertainty associated with the variable.
    *   For a discrete random variable $X$ with probability mass function $p(x)$, entropy is defined as:
        $$H(X) = -\sum_{x \in \mathcal{X}} p(x) \log_b p(x)$$
        where $\mathcal{X}$ is the set of possible outcomes for $X$, and $b$ is the base of the logarithm (typically 2 for bits, $e$ for nats, or 10 for dits).
    *   **Interpretation:** Higher entropy means more uncertainty and more information on average per symbol. A uniform distribution maximizes entropy.
    *   **Textbook Reference:** Cover & Thomas, Chapter 2. Goldsmith, Chapter 2.

*   **Conditional Entropy (H(Y|X)):** The average uncertainty remaining about $Y$ given that $X$ is known.
    *   For discrete random variables $X$ and $Y$:
        $$H(Y|X) = \sum_{x \in \mathcal{X}} p(x) H(Y|X=x) = -\sum_{x \in \mathcal{X}} \sum_{y \in \mathcal{Y}} p(x,y) \log_b p(y|x)$$
    *   **Interpretation:** Measures the uncertainty in $Y$ that is *not* explained by $X$. If $Y$ is a deterministic function of $X$, then $H(Y|X) = 0$.

*   **Mutual Information (I(X;Y)):** The amount of information that one random variable contains about another. It measures the reduction in uncertainty about $Y$ due to knowing $X$.
    *   $$I(X;Y) = H(Y) - H(Y|X) = H(X) - H(X|Y)$$
    *   **Interpretation:** It's the "overlap" in the information carried by $X$ and $Y$. If $X$ and $Y$ are independent, $I(X;Y) = 0$.
    *   **Textbook Reference:** Cover & Thomas, Chapter 2. Goldsmith, Chapter 2.

---

### 2. Communication Channels and Their Models

A communication channel is a medium through which information is transmitted from a sender to a receiver. Communication channels are often characterized by noise and other impairments that can alter the transmitted information.

*   **Channel Model:** A probabilistic description of how the input to a channel is transformed into the output. This is typically represented by the conditional probability distribution of the output given the input, $p(y|x)$.
*   **Types of Channels:**
    *   **Noiseless Channel:** No information is lost or altered. $p(y|x)$ is 1 for $y=x$ and 0 otherwise.
    *   **Noisy Channel:** Some information is lost or corrupted.
        *   **Additive Noise Channels:** Noise is added to the signal.
        *   **Erasure Channels:** Some symbols are completely lost (erased) and cannot be decoded, but the receiver knows *which* symbols were erased.

---

### 3. The Binary Erasure Channel (BEC)

The BEC is a simple but important channel model that captures the concept of information loss.

#### 3.1. Definition and Properties

*   **Input Alphabet:** $\{0, 1\}$ (binary symbols).
*   **Output Alphabet:** $\{0, 1, E\}$ where 'E' represents an erased symbol.
*   **Channel Probabilities:**
    *   When a '0' is transmitted:
        *   It is received correctly as '0' with probability $1-p$.
        *   It is erased with probability $p$.
    *   When a '1' is transmitted:
        *   It is received correctly as '1' with probability $1-p$.
        *   It is erased with probability $p$.
    *   Crucially, no symbol is ever flipped (e.g., a '0' is never received as a '1' or vice versa). This is a key distinction from other channel models like the Binary Symmetric Channel (BSC).

*   **Channel Matrix (Transition Matrix):**
    $$
    P = \begin{pmatrix}
    P(Y=0|X=0) & P(Y=1|X=0) & P(Y=E|X=0) \\
    P(Y=0|X=1) & P(Y=1|X=1) & P(Y=E|X=1)
    \end{pmatrix}
    = \begin{pmatrix}
    1-p & 0 & p \\
    0 & 1-p & p
    \end{pmatrix}
    $$
    where $p$ is the probability of erasure.

#### 3.2. Key Information-Theoretic Measures for BEC

Let's analyze the entropy-related measures for the BEC. Assume the input $X$ is a Bernoulli random variable with $P(X=0) = \pi$ and $P(X=1) = 1-\pi$.

*   **Entropy of the Input (H(X)):**
    *   $$H(X) = -(\pi \log_2 \pi + (1-\pi) \log_2 (1-\pi))$$
    *   This is maximized when $\pi = 0.5$, in which case $H(X) = 1$ bit.

*   **Entropy of the Output (H(Y)):**
    *   The possible outputs are 0, 1, and E.
    *   $P(Y=0) = P(Y=0|X=0)P(X=0) + P(Y=0|X=1)P(X=1)$
        $P(Y=0) = (1-p)\pi + 0 \cdot (1-\pi) = (1-p)\pi$
    *   $P(Y=1) = P(Y=1|X=0)P(X=0) + P(Y=1|X=1)P(X=1)$
        $P(Y=1) = 0 \cdot \pi + (1-p)(1-\pi) = (1-p)(1-\pi)$
    *   $P(Y=E) = P(Y=E|X=0)P(X=0) + P(Y=E|X=1)P(X=1)$
        $P(Y=E) = p\pi + p(1-\pi) = p(\pi + 1-\pi) = p$
    *   $$H(Y) = -\left( (1-p)\pi \log_2((1-p)\pi) + (1-p)(1-\pi) \log_2((1-p)(1-\pi)) + p \log_2 p \right)$$
    *   **Important Observation:** If the input is chosen such that $P(X=0) = P(X=1) = 0.5$, then $P(Y=0) = (1-p)/2$, $P(Y=1) = (1-p)/2$, and $P(Y=E) = p$.
        In this symmetric case:
        $$H(Y) = -\left( 2 \cdot \frac{1-p}{2} \log_2\left(\frac{1-p}{2}\right) + p \log_2 p \right)$$
        $$H(Y) = -(1-p) \log_2\left(\frac{1-p}{2}\right) - p \log_2 p$$
        $$H(Y) = -(1-p)(\log_2(1-p) - 1) - p \log_2 p$$
        $$H(Y) = -(1-p)\log_2(1-p) + (1-p) - p \log_2 p$$
        $$H(Y) = H(X_{sym}) + 1 - p \quad \text{(where } H(X_{sym})=1 \text{ bit)}$$
        $$H(Y) = 1 + 1 - p = 2 - p$$
        **Note:** This simplification $H(Y)=2-p$ is only valid when $P(X=0)=P(X=1)=0.5$ and $\pi=0.5$. In general, it is $H(Y) = H(X_{sym}) + H(\text{erasure})$.

*   **Mutual Information I(X;Y):**
    *   $$I(X;Y) = H(X) - H(X|Y)$$
    *   To calculate $H(X|Y)$, we need $p(x|y)$.
    *   Using Bayes' Theorem:
        *   $P(X=0|Y=0) = \frac{P(Y=0|X=0)P(X=0)}{P(Y=0)} = \frac{(1-p)\pi}{(1-p)\pi} = 1$ (if $1-p \neq 0$ and $\pi \neq 0$)
        *   $P(X=1|Y=0) = 0$
        *   Therefore, if $Y=0$, $X$ is perfectly known ($X=0$). $H(X|Y=0) = 0$.
        *   $P(X=1|Y=1) = \frac{P(Y=1|X=1)P(X=1)}{P(Y=1)} = \frac{(1-p)(1-\pi)}{(1-p)(1-\pi)} = 1$ (if $1-p \neq 0$ and $1-\pi \neq 0$)
        *   $P(X=0|Y=1) = 0$
        *   Therefore, if $Y=1$, $X$ is perfectly known ($X=1$). $H(X|Y=1) = 0$.
        *   If $Y=E$, we have no information about $X$. $P(X=0|Y=E) = \frac{P(Y=E|X=0)P(X=0)}{P(Y=E)} = \frac{p\pi}{p} = \pi$ (if $p \neq 0$)
        *   $P(X=1|Y=E) = \frac{P(Y=E|X=1)P(X=1)}{P(Y=E)} = \frac{p(1-\pi)}{p} = 1-\pi$ (if $p \neq 0$)
        *   So, $H(X|Y=E) = -(\pi \log_2 \pi + (1-\pi) \log_2 (1-\pi)) = H(X)$.

    *   Now, let's compute $H(X|Y)$:
        $$H(X|Y) = \sum_{y \in \{0,1,E\}} P(Y=y) H(X|Y=y)$$
        $$H(X|Y) = P(Y=0)H(X|Y=0) + P(Y=1)H(X|Y=1) + P(Y=E)H(X|Y=E)$$
        $$H(X|Y) = (1-p)\pi \cdot 0 + (1-p)(1-\pi) \cdot 0 + p \cdot H(X)$$
        $$H(X|Y) = p H(X)$$

    *   Finally, the mutual information is:
        $$I(X;Y) = H(X) - p H(X) = (1-p) H(X)$$

    *   **Key Result:** The mutual information between the input and output of a BEC is $(1-p)$ times the entropy of the input. This means that for every bit of information transmitted, on average, $(1-p)$ bits are reliably received, and $p$ bits are effectively lost (erased).

    *   **Channel Capacity (C):** The maximum mutual information achievable over all possible input distributions $p(x)$.
        $$C = \max_{p(x)} I(X;Y)$$
        Since $I(X;Y) = (1-p)H(X)$, and $H(X)$ is maximized when $X$ is uniformly distributed (e.g., $P(X=0) = P(X=1) = 0.5$), the maximum $H(X)$ is 1 bit.
        Therefore, the channel capacity of the BEC is:
        $$C = (1-p) \cdot 1 = 1-p \text{ bits per channel use}$$

    *   **Textbook Reference:** Cover & Thomas, Chapter 8 (Channel Capacity). Goldsmith, Chapter 2.

#### 3.3. Significance of BEC for Wireless Communication

*   **Model for Fading:** While not a perfect model, the BEC can be seen as a simplification of some wireless channel conditions. For instance, in deep fades, a signal might be so weak that it's unrecoverable, effectively leading to an erasure.
*   **Understanding Information Loss:** The BEC explicitly models the loss of information. This is fundamental for understanding the need for error correction codes.
*   **Foundation for Channel Coding:** The capacity result $(1-p)$ for the BEC is a direct implication of the Channel Coding Theorem (Shannon's theorem). It states that reliable communication at rates up to $C$ is possible. For the BEC, this means reliable communication is possible at rates up to $1-p$.
    *   **CO3 Alignment:** Understanding that information can be transmitted reliably up to capacity $(1-p)$ motivates the use of channel coding to achieve this. If we transmit at a rate $R < 1-p$, we can find codes that make the error probability arbitrarily small. If $R > 1-p$, reliable communication is impossible.
    *   **CO2 Alignment:** While source coding deals with redundancy removal, it's often done with the constraint of transmitting over a channel with a certain capacity. The BEC's capacity informs the maximum compression ratio achievable for reliable transmission.

---

### 4. Example: Transmitting Data over a BEC

Let's consider a scenario where we want to transmit a binary message over a BEC with an erasure probability $p = 0.2$.

*   **Channel Capacity:** $C = 1 - p = 1 - 0.2 = 0.8$ bits per channel use.
*   **Implication:** We can reliably transmit data at a rate of up to 0.8 bits per symbol.

**Scenario 1: No Channel Coding**

If we simply send bits without any coding, and the input is uniformly distributed ($P(X=0)=P(X=1)=0.5$), then $H(X)=1$ bit.
The mutual information is $I(X;Y) = (1-p)H(X) = (1-0.2) \times 1 = 0.8$ bits.
This means on average, for every bit sent, 0.2 bits are lost. If we try to recover the original message from the received sequence (which includes 'E's), we will have errors if we try to guess the erased bits.

**Scenario 2: Using Channel Coding**

Suppose we want to transmit at a rate $R = 0.5$ bits per symbol (e.g., by sending 1 actual data bit and repeating it 2 times, which is a very basic form of repetition code, or using a more sophisticated code).
Since $R = 0.5 < C = 0.8$, Shannon's theorem guarantees that we can find a channel code that allows for reliable communication.

*   **Example with a simple repetition code:** If we repeat each bit $k$ times, the transmission rate is $1/k$. If we repeat each bit 2 times (rate $1/2 = 0.5$), for each original bit, we send two identical bits.
    *   If the first bit is received correctly (prob $1-p$), we get the correct symbol.
    *   If the first bit is erased (prob $p$), we have the second bit.
    *   If both bits are erased (prob $p^2$), we still don't know the symbol.
    *   The probability of successfully decoding is $1 - p^2$. For $p=0.2$, this is $1 - (0.2)^2 = 1 - 0.04 = 0.96$.
    *   This is much better than simply sending one bit (where if it's erased, we have no information).

*   **More sophisticated codes (e.g., LDPC codes, Turbo codes):** These codes are designed to operate close to the channel capacity and can achieve very low error probabilities at rates below $C$. For the BEC, codes like Reed-Solomon codes or even simple block codes can be very effective.

---

### 5. Practice Questions and Exercises

**Q1. (CO1, K2) Definitions:**
Define the following terms:
a) Entropy
b) Conditional Entropy
c) Mutual Information
d) Channel Capacity

**Q2. (CO1, K2) BEC Properties:**
For a BEC with erasure probability $p$, what is the probability of receiving a '0' correctly if the input is '0'? What is the probability of receiving a '1' correctly if the input is '1'?

**Q3. (CO1, K2) BEC Mutual Information:**
If the input to a BEC is uniformly distributed ($P(X=0)=P(X=1)=0.5$) and the erasure probability is $p=0.3$, what is the mutual information $I(X;Y)$?

**Q4. (CO1, K2) BEC Channel Capacity:**
What is the channel capacity of a BEC with an erasure probability of $p=0.1$?

**Q5. (CO1, CO4, K2) BEC vs. Wireless Channels:**
Explain how the BEC can be considered a simplified model for certain phenomena observed in wireless communication, such as deep fades.

**Q6. (CO3, K3) Channel Coding for BEC:**
Suppose you are transmitting data at a rate of $R=0.6$ bits per symbol over a BEC with $p=0.5$.
a) Is it possible to achieve reliable communication? Justify your answer using the channel capacity.
b) If you were to use a simple repetition code, what is the minimum number of times you would need to repeat each bit to have a chance of achieving reliable communication (even if the error probability is not arbitrarily small)?

---

### 6. Answers to Practice Questions

**A1. Definitions:**
a) **Entropy (H(X)):** The average amount of information contained in a random variable $X$, quantifying its uncertainty. Calculated as $H(X) = -\sum p(x) \log_b p(x)$.
b) **Conditional Entropy (H(Y|X)):** The average uncertainty remaining about $Y$ given that $X$ is known. Calculated as $H(Y|X) = -\sum p(x,y) \log_b p(y|x)$.
c) **Mutual Information (I(X;Y)):** The reduction in uncertainty about $Y$ due to knowing $X$. $I(X;Y) = H(Y) - H(Y|X) = H(X) - H(X|Y)$.
d) **Channel Capacity (C):** The maximum possible mutual information between the input and output of a channel, representing the highest rate of reliable communication. $C = \max_{p(x)} I(X;Y)$.

**A2. BEC Properties:**
For a BEC with erasure probability $p$:
*   Probability of receiving '0' correctly if input is '0' = $1-p$.
*   Probability of receiving '1' correctly if input is '1' = $1-p$.
*(No symbol flips occur in a BEC).*

**A3. BEC Mutual Information:**
Given $P(X=0)=P(X=1)=0.5$, the entropy of the input is $H(X)=1$ bit.
The mutual information for a BEC is $I(X;Y) = (1-p)H(X)$.
With $p=0.3$ and $H(X)=1$ bit:
$I(X;Y) = (1-0.3) \times 1 = 0.7$ bits.

**A4. BEC Channel Capacity:**
The channel capacity of a BEC is $C = 1-p$.
With $p=0.1$:
$C = 1 - 0.1 = 0.9$ bits per channel use.

**A5. BEC vs. Wireless Channels:**
The BEC models situations where data symbols are completely lost (erased) but the receiver knows that an erasure has occurred. This can be a simplification of:
*   **Deep Fades:** In wireless communication, a signal can experience a deep fade due to destructive interference or shadowing. During a deep fade, the signal-to-noise ratio (SNR) can become so low that the receiver cannot reliably detect the transmitted symbol. If the receiver can detect that the signal is too weak to make a decision, it might classify this as an "erasure."
*   **Packet Loss:** In some digital communication systems, data is sent in packets. If a packet is lost due to network congestion or errors during transmission, it is effectively an erasure of all the data within that packet.

**A6. Channel Coding for BEC:**
Given $p=0.5$ and transmission rate $R=0.6$.
a) **Reliable Communication:** The channel capacity of this BEC is $C = 1-p = 1-0.5 = 0.5$ bits per symbol. Since the desired transmission rate $R=0.6$ bits/symbol is greater than the channel capacity $C=0.5$ bits/symbol ($R > C$), it is **not possible** to achieve reliable communication. Shannon's theorem guarantees that reliable communication is only possible for rates $R \le C$.

b) **Simple Repetition Code:** For a simple repetition code, where each bit is repeated $k$ times, the transmission rate is $1/k$. To have a chance of achieving reliable communication, the rate must be at least potentially less than or equal to the capacity.
We need $1/k \le C = 0.5$.
This implies $k \ge 1/0.5 = 2$.
So, you would need to repeat each bit at least **2 times** (i.e., $k=2$) to achieve a transmission rate of $0.5$ bits per symbol, which is equal to the channel capacity.
However, simply repeating a bit does not guarantee arbitrarily low error. The probability of failure for a repeated bit is $p^k$. For $p=0.5$ and $k=2$, the probability of both bits being erased is $(0.5)^2 = 0.25$. If you repeat it 3 times ($k=3$), the failure probability is $(0.5)^3 = 0.125$. As $k$ increases, the rate decreases, and the probability of successful decoding increases, but it never reaches zero for $p > 0$. To get arbitrarily low error, more sophisticated codes are needed.

---

### 7. Important Points to Remember

*   The BEC is characterized by erasures only, not symbol flips.
*   The channel capacity of a BEC with erasure probability $p$ is $1-p$ bits per channel use.
*   The mutual information $I(X;Y)$ for a BEC is $(1-p)H(X)$.
*   For reliable communication over a BEC, the transmission rate must be less than or equal to its capacity $(1-p)$.
*   The BEC provides a foundational model for understanding information loss and the need for channel coding in communication systems.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 8. Textual References Used:

*   **Elements of Information Theory by Joy A Thomas, Thomas M Cover (Wiley-Interscience, 2/e 2006):** Primary reference for definitions of entropy, conditional entropy, mutual information, and channel capacity. Chapter 2 for basic measures, Chapter 8 for channel capacity.
*   **Wireless Communications by Andrea Goldsmith (Cambridge University Press, 1/e, 2005):** Provides context for channel modeling in wireless systems and introduces information theory concepts. Chapter 2 for information theory basics.
*   **Communication Systems by Simon Haykin (John Wiley and Sons Inc, 4e, 2020):** Offers a broad perspective on communication systems, including channel models and the principles of error control coding, which are indirectly related to understanding BEC performance.

---