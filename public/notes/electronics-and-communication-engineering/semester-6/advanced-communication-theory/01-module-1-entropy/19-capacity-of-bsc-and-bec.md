---
title: "Capacity of BSC and BEC"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 1: Entropy"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fecfe"
status: "completed"
scrapedAt: "2026-05-23T17:58:32.940Z"
---
# ADVANCED COMMUNICATION THEORY - Module 1: Entropy

## Topic: Capacity of BSC and BEC

**Learning Outcomes:**

*   Understand the concept of channel capacity.
*   Calculate the capacity of Binary Symmetric Channel (BSC).
*   Calculate the capacity of Binary Erasure Channel (BEC).
*   Relate channel capacity to reliable communication.

---

### 1. Introduction to Channel Capacity

**Key Concept:** Channel capacity is the fundamental limit on the rate at which reliable communication can be achieved over a noisy channel. It quantifies the maximum amount of information that can be transmitted through a channel with an arbitrarily low probability of error.

**Definition:** The capacity of a channel, denoted by $C$, is defined as the maximum mutual information between the input and output of the channel, maximized over all possible input probability distributions. Mathematically:

$C = \max_{P(x)} I(X; Y)$

where:
*   $I(X; Y)$ is the mutual information between the input random variable $X$ and the output random variable $Y$.
*   $P(x)$ is the probability distribution of the input $X$.

**Relationship to Information Theory Measures (CO1):**

*   **Entropy (H(X)):** Measures the uncertainty of a random variable.
*   **Conditional Entropy (H(Y|X)):** Measures the uncertainty of the output $Y$ given the input $X$.
*   **Mutual Information (I(X; Y)):** Measures the reduction in uncertainty about $Y$ due to knowing $X$ (or vice versa). It's the amount of information that one random variable contains about another.

$I(X; Y) = H(Y) - H(Y|X)$
$I(X; Y) = H(X) - H(X|Y)$

The channel capacity is the maximum achievable mutual information. Higher capacity implies a greater ability to transmit information reliably.

**Textbook Reference:**
*   **Elements of Information Theory by Cover and Thomas (Chapter 8):** This book provides a rigorous foundation for channel capacity and its properties.

---

### 2. Binary Symmetric Channel (BSC)

**Key Concept:** The BSC is a simple but fundamental memoryless channel model where binary inputs (0 and 1) are transmitted, and errors occur with a certain probability.

**Model:**
*   **Input:** $X \in \{0, 1\}$
*   **Output:** $Y \in \{0, 1\}$
*   **Transition Probabilities:**
    *   $P(Y=0 | X=0) = 1 - p$ (correct transmission)
    *   $P(Y=1 | X=0) = p$ (bit flip error)
    *   $P(Y=0 | X=1) = p$ (bit flip error)
    *   $P(Y=1 | X=1) = 1 - p$ (correct transmission)

Here, $p$ is the **bit flip probability** or **crossover probability**.

**Calculation of Capacity for BSC:**

To find the capacity, we need to maximize $I(X; Y)$ over all possible input distributions $P(X)$.

$I(X; Y) = H(Y) - H(Y|X)$

Let's assume an input distribution where $P(X=0) = q$ and $P(X=1) = 1-q$.

**1. Calculate $H(Y|X)$:**
$H(Y|X) = \sum_{x \in \{0,1\}} P(X=x) H(Y|X=x)$

Since the channel is memoryless and symmetric:
$H(Y|X=0) = H(Y|X=1) = H_2(p)$, where $H_2(p) = -p \log_2(p) - (1-p) \log_2(1-p)$ is the binary entropy function.

So, $H(Y|X) = q \cdot H_2(p) + (1-q) \cdot H_2(p) = H_2(p)$.
This means the conditional entropy of the output given the input is constant, regardless of the input distribution $q$. This is a key characteristic of the BSC.

**2. Calculate $H(Y)$:**
$P(Y=0) = P(Y=0|X=0)P(X=0) + P(Y=0|X=1)P(X=1)$
$P(Y=0) = (1-p)q + p(1-q) = q - pq + p - pq = q(1-p) + p(1-q)$

$P(Y=1) = P(Y=1|X=0)P(X=0) + P(Y=1|X=1)P(X=1)$
$P(Y=1) = p q + (1-p)(1-q) = pq + 1 - p - q + pq = qp + (1-p)(1-q)$

$H(Y) = H_2(P(Y=0))$

**3. Calculate $I(X; Y)$:**
$I(X; Y) = H(Y) - H(Y|X) = H_2(P(Y=0)) - H_2(p)$
$I(X; Y) = H_2(q(1-p) + p(1-q)) - H_2(p)$

**4. Maximize $I(X; Y)$ with respect to $q$:**
The term $H_2(p)$ is constant with respect to $q$. Therefore, to maximize $I(X; Y)$, we need to maximize $H_2(q(1-p) + p(1-q))$.
The binary entropy function $H_2(x)$ is maximized when $x = 1/2$.
So, we set:
$q(1-p) + p(1-q) = 1/2$
$q - qp + p - qp = 1/2$
$q(1 - 2p) = 1/2 - p$

*   **Case 1: $p = 1/2$**
    If $p = 1/2$, the equation becomes $q(0) = 0$, which is true for all $q$. In this case, the channel is completely noisy, and the output is independent of the input ($Y$ is always 1/2).
    $P(Y=0) = q(0) + (1/2)(1-q) = 1/2$
    $H(Y) = H_2(1/2) = 1$ bit.
    $H(Y|X) = H_2(1/2) = 1$ bit.
    $I(X; Y) = 1 - 1 = 0$ bits.
    Capacity $C_{BSC} = 0$ when $p=1/2$.

*   **Case 2: $p \neq 1/2$**
    $q = \frac{1/2 - p}{1 - 2p} = \frac{-(p - 1/2)}{-2(p - 1/2)} = 1/2$

    So, the maximum mutual information occurs when $q = 1/2$. This means the optimal input distribution for the BSC is a uniform distribution ($P(X=0) = P(X=1) = 1/2$).

    Now, substitute $q=1/2$ back into the expression for $I(X; Y)$:
    $P(Y=0) = (1/2)(1-p) + p(1/2) = 1/2 - p/2 + p/2 = 1/2$
    $H(Y) = H_2(1/2) = 1$ bit.

    Therefore, the capacity of the BSC is:
    $C_{BSC} = I(X; Y)_{max} = H(Y) - H(Y|X) = 1 - H_2(p)$
    $C_{BSC} = 1 - [-p \log_2(p) - (1-p) \log_2(1-p)]$

**Textbook Reference:**
*   **Elements of Information Theory by Cover and Thomas (Chapter 8):** Provides the derivation for BSC capacity.
*   **Wireless Communications by Goldsmith (Chapter 2):** Discusses channel models including BSC.

**Important Point to Remember:**
The capacity of the BSC is $1 - H_2(p)$, where $p$ is the crossover probability. This capacity is non-zero for any $p < 1/2$. As $p$ approaches $1/2$, the capacity approaches 0. As $p$ approaches 0, the capacity approaches 1.

**Example:**
Consider a BSC with $p = 0.1$.
$H_2(0.1) = -0.1 \log_2(0.1) - 0.9 \log_2(0.9)$
$H_2(0.1) \approx -0.1 \times (-3.32) - 0.9 \times (-0.152) \approx 0.332 + 0.137 = 0.469$ bits.
$C_{BSC} = 1 - H_2(0.1) \approx 1 - 0.469 = 0.531$ bits/channel use.

---

### 3. Binary Erasure Channel (BEC)

**Key Concept:** In a BEC, the transmitted bit can either be received correctly or it can be erased. Erased bits provide no information about the transmitted bit.

**Model:**
*   **Input:** $X \in \{0, 1\}$
*   **Output:** $Y \in \{0, 1, E\}$, where $E$ denotes an erasure.
*   **Transition Probabilities:**
    *   $P(Y=0 | X=0) = 1 - p$ (correct transmission)
    *   $P(Y=1 | X=0) = 0$ (no bit flip to 1)
    *   $P(Y=E | X=0) = p$ (erasure)

    *   $P(Y=1 | X=1) = 1 - p$ (correct transmission)
    *   $P(Y=0 | X=1) = 0$ (no bit flip to 0)
    *   $P(Y=E | X=1) = p$ (erasure)

Here, $p$ is the **erasure probability**.

**Calculation of Capacity for BEC:**

We want to maximize $I(X; Y)$ over all input distributions $P(X)$. Let $P(X=0) = q$ and $P(X=1) = 1-q$.

**1. Calculate $I(X; Y)$:**
$I(X; Y) = H(X) - H(X|Y)$

Let's analyze the term $H(X|Y)$. The output $Y$ can be 0, 1, or E.
$H(X|Y) = \sum_{y \in \{0,1,E\}} P(Y=y) H(X|Y=y)$

*   **When $Y=0$:**
    $P(X=0|Y=0) = \frac{P(Y=0|X=0)P(X=0)}{P(Y=0)}$
    $P(Y=0) = P(Y=0|X=0)P(X=0) + P(Y=0|X=1)P(X=1)$
    $P(Y=0) = (1-p)q + 0 \cdot (1-q) = q(1-p)$
    $P(X=0|Y=0) = \frac{(1-p)q}{q(1-p)} = 1$ (assuming $q \neq 0$ and $p \neq 1$)
    $P(X=1|Y=0) = 0$
    $H(X|Y=0) = H_2(0) = 0$

*   **When $Y=1$:**
    $P(X=1|Y=1) = \frac{P(Y=1|X=1)P(X=1)}{P(Y=1)}$
    $P(Y=1) = P(Y=1|X=0)P(X=0) + P(Y=1|X=1)P(X=1)$
    $P(Y=1) = 0 \cdot q + (1-p)(1-q) = (1-p)(1-q)$
    $P(X=1|Y=1) = \frac{(1-p)(1-q)}{(1-p)(1-q)} = 1$ (assuming $q \neq 1$ and $p \neq 1$)
    $P(X=0|Y=1) = 0$
    $H(X|Y=1) = H_2(0) = 0$

*   **When $Y=E$:**
    $P(Y=E) = P(Y=E|X=0)P(X=0) + P(Y=E|X=1)P(X=1)$
    $P(Y=E) = p \cdot q + p \cdot (1-q) = pq + p - pq = p$
    Since an erasure provides no information about the input, $H(X|Y=E) = H(X) = H_2(q)$.
    $P(X=0|Y=E) = \frac{P(Y=E|X=0)P(X=0)}{P(Y=E)} = \frac{pq}{p} = q$
    $P(X=1|Y=E) = \frac{P(Y=E|X=1)P(X=1)}{P(Y=E)} = \frac{p(1-q)}{p} = 1-q$
    $H(X|Y=E) = H_2(q)$

Now, let's put it together:
$H(X|Y) = P(Y=0) H(X|Y=0) + P(Y=1) H(X|Y=1) + P(Y=E) H(X|Y=E)$
$H(X|Y) = q(1-p) \cdot 0 + (1-p)(1-q) \cdot 0 + p \cdot H_2(q)$
$H(X|Y) = p H_2(q)$

And $I(X; Y) = H(X) - H(X|Y) = H_2(q) - p H_2(q) = (1-p) H_2(q)$.

**2. Maximize $I(X; Y)$ with respect to $q$:**
$I(X; Y) = (1-p) H_2(q)$.
To maximize this, we need to maximize $H_2(q)$. This occurs when $q = 1/2$.
So, the optimal input distribution is uniform.

The maximum mutual information is:
$C_{BEC} = (1-p) H_2(1/2) = (1-p) \cdot 1 = 1-p$.

**Textbook Reference:**
*   **Elements of Information Theory by Cover and Thomas (Chapter 8):** Derives the capacity of BEC.
*   **Wireless Communications by Goldsmith (Chapter 2):** Mentions BEC as a channel model.

**Important Point to Remember:**
The capacity of the BEC is $1-p$, where $p$ is the erasure probability. This is a simpler result than for BSC. It means that for every bit transmitted, if it's not erased (with probability $1-p$), it's received perfectly. The capacity is directly related to the fraction of non-erased bits.

**Example:**
Consider a BEC with $p = 0.2$.
$C_{BEC} = 1 - 0.2 = 0.8$ bits/channel use.

---

### 4. Capacity and Reliable Communication (CO3, CO4)

**Key Concept:** Shannon's Channel Coding Theorem states that for any channel with capacity $C > 0$, there exists a coding scheme that allows reliable communication at any rate $R < C$. Conversely, if $R > C$, reliable communication is impossible.

**Explanation:**

*   **Reliable Communication:** This means transmitting information with an arbitrarily low probability of error.
*   **Channel Capacity (C):** This is the theoretical upper bound on the rate of reliable communication.
*   **Shannon's Channel Coding Theorem:** This fundamental theorem establishes the existence of error-correcting codes that can achieve rates arbitrarily close to the channel capacity with vanishingly small error probabilities.

**How it applies to BSC and BEC:**

*   **BSC:** If we want to transmit information over a BSC with crossover probability $p < 1/2$ at a rate $R < 1 - H_2(p)$, Shannon's theorem guarantees that we can design codes (e.g., repetition codes for low rates, more sophisticated codes like LDPC or Turbo codes for higher rates) that can achieve this reliably. If we attempt to transmit at a rate $R > 1 - H_2(p)$, we will inevitably face a high probability of error, no matter how sophisticated the coding scheme.

*   **BEC:** Similarly, for a BEC with erasure probability $p < 1$, we can reliably transmit information at any rate $R < 1-p$. This is often achieved by simply discarding the erased bits and retransmitting them, effectively increasing the throughput of successful transmissions. The capacity $1-p$ represents the average fraction of successfully received bits.

**Relationship to Course Outcomes:**
*   **CO1:** Understanding entropy, conditional entropy, and mutual information is crucial for defining and calculating channel capacity.
*   **CO3:** Channel coding is the mechanism that allows us to approach channel capacity. The existence of codes for rates below capacity is the core of Shannon's theorem.
*   **CO4:** The concept of channel capacity is a basic principle of wireless communication, setting the fundamental limits of performance.

**Textbook Reference:**
*   **Elements of Information Theory by Cover and Thomas (Chapter 7):** Covers Shannon's Channel Coding Theorem.
*   **Wireless Communications by Goldsmith (Chapter 2):** Discusses the implications of channel capacity for wireless systems.
*   **Digital Communication Systems by Simon Haykin (Chapter 2):** Explains channel coding and its relation to capacity.

---

### 5. Practice Questions and Exercises

**Question 1:**
A Binary Symmetric Channel has a crossover probability $p = 0.2$.
(a) Calculate the capacity of this BSC.
(b) If the input is transmitted with a uniform probability distribution, calculate the mutual information $I(X;Y)$.
(c) What is the maximum rate at which reliable communication can be achieved over this channel?

**Answer 1:**
(a) $C_{BSC} = 1 - H_2(p)$
$H_2(0.2) = -0.2 \log_2(0.2) - 0.8 \log_2(0.8)$
$H_2(0.2) \approx -0.2 \times (-2.32) - 0.8 \times (-0.32) \approx 0.464 + 0.256 = 0.72$ bits.
$C_{BSC} = 1 - 0.72 = 0.28$ bits/channel use.

(b) For a uniform input distribution ($q=0.5$), $P(Y=0) = 0.5$.
$I(X;Y) = H(Y) - H(Y|X)$
$H(Y|X) = H_2(p) = H_2(0.2) = 0.72$ bits.
$H(Y) = H_2(P(Y=0)) = H_2(0.5) = 1$ bit.
$I(X;Y) = 1 - 0.72 = 0.28$ bits/channel use.

(c) The maximum rate for reliable communication is the channel capacity, which is $0.28$ bits/channel use.

---

**Question 2:**
A Binary Erasure Channel has an erasure probability $p = 0.3$.
(a) Calculate the capacity of this BEC.
(b) If the input is transmitted with $P(X=0) = 0.6$, calculate the mutual information $I(X;Y)$.
(c) Compare the capacity of this BEC with a BSC that has the same probability $p=0.3$.

**Answer 2:**
(a) $C_{BEC} = 1 - p = 1 - 0.3 = 0.7$ bits/channel use.

(b) For BEC, $I(X;Y) = (1-p) H_2(q)$
Here $p=0.3$ and $q=0.6$.
$H_2(0.6) = -0.6 \log_2(0.6) - 0.4 \log_2(0.4)$
$H_2(0.6) \approx -0.6 \times (-0.737) - 0.4 \times (-1.322) \approx 0.442 + 0.529 = 0.971$ bits.
$I(X;Y) = (1 - 0.3) \times 0.971 = 0.7 \times 0.971 = 0.6797$ bits/channel use.

(c) For a BSC with $p = 0.3$:
$H_2(0.3) = -0.3 \log_2(0.3) - 0.7 \log_2(0.7)$
$H_2(0.3) \approx -0.3 \times (-1.737) - 0.7 \times (-0.514) \approx 0.521 + 0.360 = 0.881$ bits.
$C_{BSC} = 1 - H_2(0.3) \approx 1 - 0.881 = 0.119$ bits/channel use.

Comparison: The capacity of the BEC ($0.7$ bits) is significantly higher than the capacity of the BSC ($0.119$ bits) for the same probability $p=0.3$. This highlights that erasures are generally "less harmful" to communication than bit flips when comparing channels with similar error probabilities.

---

### 6. Key Points to Remember

*   **Channel Capacity (C):** The maximum rate of reliable communication over a noisy channel.
*   **Shannon's Channel Coding Theorem:** Guarantees reliable communication at any rate $R < C$.
*   **BSC:**
    *   Characterized by a bit flip probability $p$.
    *   Capacity $C_{BSC} = 1 - H_2(p)$.
    *   Optimal input distribution for BSC is uniform ($q=0.5$).
*   **BEC:**
    *   Characterized by an erasure probability $p$.
    *   Capacity $C_{BEC} = 1 - p$.
    *   Optimal input distribution for BEC is uniform ($q=0.5$).
*   **Comparison:** For the same probability $p$, $C_{BEC} \ge C_{BSC}$ (equality only if $p=0$ or $p=1/2$ for BSC, where $H_2(p)=1/2$). BEC is generally a more "forgiving" channel model.
*   **Reliable Communication:** Achievable when transmission rate $R < C$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 7. References and Further Reading

*   **Elements of Information Theory by Joy A Thomas, Thomas M Cover (Wiley-Interscience, 2/e 2006):** Essential for deep understanding of information theory, including channel capacity derivations. (Chapters 2, 7, 8)
*   **Wireless Communications by Andrea Goldsmith (Cambridge University Press, 1/e, 2005):** Provides context for channel models like BSC and BEC within wireless systems. (Chapter 2)
*   **Communication Systems by Simon Haykin (John Wiley and Sons Inc, 4e, 2020):** Discusses channel models and the concept of channel capacity in a broader communication systems context. (Chapter 2)
*   **Fundamentals of Wireless Communication by David Tse and Pramod Viswanath (Cambridge University Press, 1st Edition 2005):** Offers advanced perspectives on channel capacity and its implications. (Chapter 3)

---