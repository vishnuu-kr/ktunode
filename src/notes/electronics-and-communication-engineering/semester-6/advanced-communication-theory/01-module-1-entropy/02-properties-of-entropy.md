---
title: "Properties of Entropy"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 1: Entropy"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780feced"
status: "completed"
scrapedAt: "2026-05-23T17:58:20.861Z"
---
# ADVANCED COMMUNICATION THEORY
## Module 1: Entropy
### Topic: Properties of Entropy

---

### **1. Introduction to Entropy in Information Theory**

Entropy, a fundamental concept in information theory, quantifies the average amount of information or uncertainty associated with a random variable. It was introduced by Claude Shannon in his seminal work, "A Mathematical Theory of Communication." In essence, entropy measures the "surprise" or randomness of an event.

*   **Key Concept:** Entropy is a measure of uncertainty or randomness in a probability distribution.
*   **Relation to Information:** Higher entropy implies more uncertainty, and thus, more information is gained when the outcome is revealed.
*   **Origin:** Claude Shannon's Information Theory.

**Reference:**
*   **Elements of Information Theory by Joy A Thomas, Thomas M Cover (Chapter 2):** Provides a rigorous mathematical definition and foundational properties of entropy.
*   **Wireless Communications by Andrea Goldsmith (Chapter 1):** Introduces information theory concepts as a basis for understanding communication systems.

---

### **2. Definition of Entropy**

For a discrete random variable $X$ with probability mass function $p(x) = P(X=x)$, the entropy $H(X)$ is defined as:

$H(X) = - \sum_{x \in \mathcal{X}} p(x) \log_b p(x)$

where:
*   $\mathcal{X}$ is the set of all possible outcomes for $X$.
*   $p(x)$ is the probability of the outcome $x$.
*   $b$ is the base of the logarithm, typically:
    *   $b=2$: Entropy is measured in **bits**.
    *   $b=e$: Entropy is measured in **nats**.
    *   $b=10$: Entropy is measured in **dits** or **hartleys**.

We will predominantly use base 2 for entropy measurements in bits.

**Formal Definition:**
$H(X) = E[-\log_b p(X)]$

**Key Concepts:**
*   **Probability Mass Function (PMF):** Describes the probability of each possible outcome.
*   **Logarithm Base:** Determines the unit of entropy. Base 2 is standard for communication theory.
*   **Expectation:** Entropy is the expected value of the negative logarithm of the probability of an outcome.

**Example:**
Consider a fair coin flip:
*   $X$: Outcome of a coin flip
*   Possible outcomes: {Heads (H), Tails (T)}
*   $p(H) = 0.5$, $p(T) = 0.5$

$H(X) = - [0.5 \log_2(0.5) + 0.5 \log_2(0.5)]$
$H(X) = - [0.5 (-1) + 0.5 (-1)]$
$H(X) = - [-0.5 - 0.5] = 1$ bit.
This means, on average, one bit of information is needed to describe the outcome of a fair coin flip.

**Reference:**
*   **Elements of Information Theory by Joy A Thomas, Thomas M Cover (Chapter 2):** Provides detailed mathematical derivations and examples for calculating entropy.
*   **Communication Systems by Simon Haykin (Chapter 1):** Introduces entropy as a measure of information in the context of communication systems.

---

### **3. Properties of Entropy**

Understanding the properties of entropy is crucial for its application in communication theory.

#### **3.1 Non-negativity**

*   **Property:** $H(X) \ge 0$ for any random variable $X$.
*   **Explanation:** Since $p(x) \le 1$ for all $x$, $\log_b p(x) \le 0$ (for $b>1$). Therefore, $-p(x) \log_b p(x) \ge 0$. The sum of non-negative terms is non-negative.
*   **Intuition:** Uncertainty cannot be negative.

**Example:**
If $p(x)=1$ for one outcome and $0$ for all others (a deterministic event), entropy is $0$.
$H(X) = - (1 \log_2 1 + 0 \log_2 0 + \dots) = - (1 \cdot 0 + \dots) = 0$. (Note: $0 \log 0$ is defined as 0 in this context).
This represents zero uncertainty.

---

#### **3.2 Maximum Entropy**

*   **Property:** For a random variable $X$ taking values in a set of size $n$, $H(X) \le \log_b n$. Equality holds if and only if $X$ is uniformly distributed, i.e., $p(x) = 1/n$ for all $x$.
*   **Explanation:** The uniform distribution maximizes the uncertainty. If all outcomes are equally likely, we have the most "surprise" on average. This is a direct consequence of Jensen's inequality applied to the concave function $-\log_b x$.
*   **Intuition:** Maximum uncertainty occurs when all possibilities are equally likely.

**Example:**
Consider a fair six-sided die:
*   $X$: Outcome of a die roll
*   Possible outcomes: {1, 2, 3, 4, 5, 6}
*   $n = 6$
*   Uniform distribution: $p(x) = 1/6$ for $x \in \{1, \dots, 6\}$

$H(X) = - \sum_{i=1}^6 \frac{1}{6} \log_2 \frac{1}{6} = - 6 \cdot \frac{1}{6} \log_2 \frac{1}{6} = - \log_2 \frac{1}{6} = \log_2 6 \approx 2.58$ bits.

If the die was biased, e.g., $p(1)=0.5$, $p(2)=0.1$, ..., the entropy would be less than $\log_2 6$.

**Important Point:** The maximum possible entropy for $n$ outcomes is $\log_2 n$ bits. This occurs when the distribution is uniform.

**Reference:**
*   **Elements of Information Theory by Joy A Thomas, Thomas M Cover (Chapter 2):** Rigorously proves the maximum entropy property.
*   **Wireless Communications by Andrea Goldsmith (Chapter 1):** Uses this property to illustrate fundamental limits in information transmission.

---

#### **3.3 Entropy of a Deterministic Variable**

*   **Property:** If $X$ is a deterministic random variable (i.e., it takes only one value with probability 1), then $H(X) = 0$.
*   **Explanation:** As shown in the non-negativity section, if $p(x_0) = 1$ for some $x_0$ and $p(x) = 0$ for $x \neq x_0$, then $H(X) = 0$.
*   **Intuition:** There is no uncertainty if the outcome is known with certainty.

---

#### **3.4 Entropy and Independence**

*   **Property:** For independent random variables $X$ and $Y$, $H(X, Y) = H(X) + H(Y)$, where $H(X, Y)$ is the joint entropy.
*   **Explanation:** The joint entropy of independent variables is the sum of their individual entropies. This means the uncertainty in the pair $(X, Y)$ is the sum of uncertainties in $X$ and $Y$ individually.
*   **Intuition:** If two events are independent, knowing one doesn't reduce the uncertainty of the other.

**Example:**
Two independent fair coin flips ($X_1, X_2$):
*   $H(X_1) = 1$ bit
*   $H(X_2) = 1$ bit
*   $H(X_1, X_2) = H(X_1) + H(X_2) = 1 + 1 = 2$ bits.
The possible outcomes are (H,H), (H,T), (T,H), (T,T), each with probability 0.25.
$H(X_1, X_2) = -4 \times (0.25 \log_2 0.25) = -4 \times (0.25 \times -2) = -4 \times (-0.5) = 2$ bits.

**Important Point:** This property *only* holds for independent random variables. For dependent variables, $H(X, Y) \le H(X) + H(Y)$.

**Reference:**
*   **Elements of Information Theory by Joy A Thomas, Thomas M Cover (Chapter 2):** Discusses properties related to joint entropy and independence.

---

#### **3.5 Conditional Entropy**

*   **Definition:** Conditional entropy $H(Y|X)$ measures the remaining uncertainty in $Y$ given that $X$ is known.
*   **Formula:**
    $H(Y|X) = \sum_{x \in \mathcal{X}} p(x) H(Y|X=x)$
    $H(Y|X) = - \sum_{x \in \mathcal{X}} p(x) \sum_{y \in \mathcal{Y}} p(y|x) \log_2 p(y|x)$
    $H(Y|X) = H(X, Y) - H(X)$

*   **Properties of Conditional Entropy:**
    *   **Non-negativity:** $H(Y|X) \ge 0$.
    *   **Maximum Entropy:** $H(Y|X) \le H(Y)$. Knowledge of $X$ can only reduce or keep the uncertainty of $Y$ the same.
    *   **Equality holds when X and Y are independent:** If $X$ and $Y$ are independent, $H(Y|X) = H(Y)$.
    *   **Equality holds when X determines Y:** If $Y$ is a function of $X$ (e.g., $Y = f(X)$), then $H(Y|X) = 0$. This means knowing $X$ completely resolves the uncertainty in $Y$.

**Example:**
Consider a noisy communication channel. Let $X$ be the transmitted symbol and $Y$ be the received symbol.
If the channel is perfect (no noise), then receiving $Y$ perfectly tells us what $X$ was. In this case, $H(Y|X) = 0$.

**Important Point:** $H(Y|X)$ is the average uncertainty remaining in $Y$ after $X$ is known.

**Reference:**
*   **Elements of Information Theory by Joy A Thomas, Thomas M Cover (Chapter 2):** In-depth coverage of conditional entropy.
*   **Wireless Communications by Andrea Goldsmith (Chapter 1):** Discusses conditional entropy in the context of channel capacity.

---

#### **3.6 Relationship between Joint Entropy and Conditional Entropy**

*   **Chain Rule for Entropy:** $H(X, Y) = H(X) + H(Y|X) = H(Y) + H(X|Y)$.
*   **Explanation:** The joint uncertainty of two random variables is the uncertainty of one plus the uncertainty of the other given the first.
*   **Intuition:** To know both $X$ and $Y$, you first need to know $X$, and then you need to know $Y$ given $X$.

**Example:**
Using the previous coin flip example:
$H(X_1) = 1$, $H(X_2) = 1$.
Since $X_1$ and $X_2$ are independent, $H(X_2|X_1) = H(X_2) = 1$.
$H(X_1, X_2) = H(X_1) + H(X_2|X_1) = 1 + 1 = 2$.

---

#### **3.7 Entropy Rate of a Source (for sequences)**

For a stationary and ergodic source producing a sequence of random variables $X_1, X_2, X_3, \dots$, the entropy rate $h$ is defined as:

$h = \lim_{n \to \infty} \frac{1}{n} H(X_1, X_2, \dots, X_n)$

If the source is a Markov chain, the entropy rate simplifies. For a first-order Markov chain:

$h = H(X_n | X_{n-1}, X_{n-2}, \dots, X_1) = H(X_n | X_{n-1})$

*   **Explanation:** The entropy rate is the average number of bits per symbol required to represent the source output in the limit of long sequences.
*   **Intuition:** It represents the intrinsic information content of the source per symbol.

**Example:**
If we have a source producing English text, the entropy rate will be lower than the entropy of each letter independently because letters are not independent (e.g., 'q' is almost always followed by 'u').

**Reference:**
*   **Elements of Information Theory by Joy A Thomas, Thomas M Cover (Chapter 13):** Covers entropy rate and its applications to source coding.

---

### **4. Properties Summarized**

| Property                  | Formula/Description                                   | Intuition                                        | Importance in Communication                               |
| :------------------------ | :---------------------------------------------------- | :----------------------------------------------- | :-------------------------------------------------------- |
| **Non-negativity**        | $H(X) \ge 0$                                          | Uncertainty is never negative.                   | Foundation for information measures.                      |
| **Maximum Entropy**       | $H(X) \le \log_b n$ (for $n$ outcomes)                 | Most surprise when all outcomes are equally likely. | Defines limits for data compression and transmission.     |
| **Zero Entropy**          | $H(X) = 0$ if $X$ is deterministic.                   | No uncertainty when outcome is certain.          | Represents lossless compression of predictable data.    |
| **Additivity for Indep.** | $H(X, Y) = H(X) + H(Y)$ if $X, Y$ are independent.    | Knowing one doesn't affect the other.            | Useful for analyzing independent channels or sources.     |
| **Conditional Entropy**   | $H(Y|X) \le H(Y)$                                     | Knowledge reduces uncertainty.                   | Crucial for understanding channel capacity.               |
| **Chain Rule**            | $H(X, Y) = H(X) + H(Y|X)$                              | Joint uncertainty = first + conditional second.  | Fundamental for analyzing sequential data.                |
| **Entropy Rate**          | Average info per symbol for a source sequence.        | Intrinsic information content of a source.       | Key for source coding and data compression limits.      |

---

### **5. Practical Implications and Connections to Course Outcomes**

*   **CO1: Explain information theory measures such as entropy, conditional entropy, mutual information (Knowledge Level: K2)**
    *   This entire topic directly addresses CO1. You've learned the definitions and fundamental properties of entropy and conditional entropy. Mutual information builds upon these concepts.

*   **CO2: Apply source coding theorem for data compression. (Knowledge Level: K3)**
    *   The concept of entropy rate is the lower bound for data compression. The source coding theorem states that a source can be compressed arbitrarily close to its entropy rate without losing information. Understanding entropy is essential for designing efficient compression algorithms.
    *   **Example:** Huffman coding and Lempel-Ziv algorithms aim to approach the entropy rate.

*   **CO4: Explain the basic Principle of wireless communication techniques (Knowledge Level: K2)**
    *   Entropy helps understand the "information content" of a message that needs to be transmitted wirelessly. This informs the design of efficient modulation and coding schemes.

*   **CO5: Describe the wireless channel models and analyse the performance of the modulation techniques for flat fading channels (Knowledge Level: K2)**
    *   **Channel Capacity:** The maximum rate at which information can be transmitted reliably over a noisy channel is given by the channel capacity, which is fundamentally defined using mutual information, which in turn relies on entropy and conditional entropy. $C = \max_{p(x)} I(X;Y) = \max_{p(x)} (H(Y) - H(Y|X))$.
    *   Understanding $H(Y|X)$ (the uncertainty remaining in the received signal given the transmitted signal) is crucial for calculating channel capacity in the presence of noise and fading.

**Reference:**
*   **Wireless Communications by Andrea Goldsmith (Chapter 2 & 3):** Explains channel capacity and its relation to entropy and mutual information.
*   **Elements of Information Theory by Joy A Thomas, Thomas M Cover (Chapter 7):** Detailed treatment of channel capacity.

---

### **6. Practice Questions**

**Question 1 (CO1):**
A random variable $X$ can take values {A, B, C} with probabilities $p(A) = 0.5$, $p(B) = 0.25$, $p(C) = 0.25$. Calculate the entropy $H(X)$ in bits.

**Answer 1:**
$H(X) = - [0.5 \log_2(0.5) + 0.25 \log_2(0.25) + 0.25 \log_2(0.25)]$
$H(X) = - [0.5(-1) + 0.25(-2) + 0.25(-2)]$
$H(X) = - [-0.5 - 0.5 - 0.5]$
$H(X) = - [-1.5] = 1.5$ bits.

**Question 2 (Properties - Maximum Entropy):**
Which of the following distributions for a random variable with 4 possible outcomes {1, 2, 3, 4} will have the maximum entropy?
(a) $p(1)=1, p(2)=0, p(3)=0, p(4)=0$
(b) $p(1)=0.5, p(2)=0.5, p(3)=0, p(4)=0$
(c) $p(1)=0.25, p(2)=0.25, p(3)=0.25, p(4)=0.25$
(d) $p(1)=0.4, p(2)=0.3, p(3)=0.2, p(4)=0.1$

**Answer 2:**
(c) The uniform distribution maximizes entropy. The maximum entropy for 4 outcomes is $\log_2 4 = 2$ bits.
(a) $H(X) = 0$ (deterministic).
(b) $H(X) = -[0.5 \log_2 0.5 + 0.5 \log_2 0.5] = 1$ bit.
(c) $H(X) = -[4 \times 0.25 \log_2 0.25] = -[1 \times (-2)] = 2$ bits.
(d) $H(X) = -[0.4(-1.32) + 0.3(-1.74) + 0.2(-2.32) + 0.1(-3.32)] \approx 1.84$ bits.

**Question 3 (CO1, CO4 - Conditional Entropy):**
Consider two random variables $X$ and $Y$. If $X$ completely determines $Y$ (i.e., $Y$ is a deterministic function of $X$), what is the value of $H(Y|X)$?

**Answer 3:**
$H(Y|X) = 0$. This signifies that once $X$ is known, there is no remaining uncertainty about $Y$. This is fundamental in understanding how knowledge of one variable (e.g., transmitted symbol) affects the uncertainty of another (e.g., received symbol) in a communication system.

**Question 4 (CO2 - Source Coding Connection):**
A binary source produces independent bits with $p(0)=0.9$ and $p(1)=0.1$. What is the minimum average number of bits per symbol required to represent this source without loss of information?

**Answer 4:**
This minimum average number of bits is the entropy rate of the source. Since the bits are independent, the entropy rate is the entropy of a single bit:
$H(X) = -[0.9 \log_2(0.9) + 0.1 \log_2(0.1)]$
$H(X) \approx -[0.9 \times (-0.152) + 0.1 \times (-3.322)]$
$H(X) \approx -[-0.137 + (-0.332)]$
$H(X) \approx -[-0.469] \approx 0.469$ bits/symbol.

---

### **7. Important Points to Remember**

*   **Entropy ($H(X)$):** Measures the average uncertainty of a random variable $X$.
*   **Base of Logarithm:** Base 2 gives entropy in bits, which is standard for communication.
*   **Maximum Entropy:** Uniform distribution ($p(x) = 1/n$) yields maximum entropy of $\log_2 n$.
*   **Zero Entropy:** Deterministic variables ($p(x_0) = 1$) have zero entropy, indicating no uncertainty.
*   **Conditional Entropy ($H(Y|X)$):** Measures the remaining uncertainty in $Y$ after $X$ is known. It's always less than or equal to $H(Y)$.
*   **Additivity of Entropy:** Holds only for independent variables ($H(X,Y) = H(X) + H(Y)$).
*   **Chain Rule:** A general relation for joint and conditional entropy ($H(X, Y) = H(X) + H(Y|X)$).
*   **Entropy Rate:** The average information per symbol for a data source, crucial for source coding limits.
*   **Connection to Channel Capacity:** Channel capacity is built upon mutual information, which is derived from entropy and conditional entropy.

---

This concludes the study notes on the Properties of Entropy for Advanced Communication Theory. Ensure you understand the definitions, properties, and their implications for communication system design, especially concerning data compression and channel capacity.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
