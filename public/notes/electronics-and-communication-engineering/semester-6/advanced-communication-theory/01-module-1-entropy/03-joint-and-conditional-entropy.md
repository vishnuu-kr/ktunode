---
title: "Joint and Conditional Entropy"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 1: Entropy"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fecee"
status: "completed"
scrapedAt: "2026-05-23T17:58:21.572Z"
---
# Advanced Communication Theory: Module 1 - Entropy

## Topic: Joint and Conditional Entropy

---

### **1. Introduction to Information Theory and Entropy**

*   **Information Theory** is a mathematical framework for quantifying, storing, and communicating information. It provides fundamental limits on data compression, reliable communication, and error correction.
*   **Entropy (H(X))**: A fundamental concept in information theory that measures the average amount of information, uncertainty, or "surprise" contained in a random variable. It quantifies the expected number of bits required to represent an outcome of the random variable.

    *   **Definition:** For a discrete random variable $X$ with probability mass function $p(x)$, the entropy is defined as:
        $H(X) = -\sum_{x \in \mathcal{X}} p(x) \log_2 p(x)$ bits

    *   **Key Properties:**
        *   $H(X) \ge 0$
        *   $H(X) = 0$ if and only if $X$ is a constant (no uncertainty).
        *   $H(X)$ is maximized when $X$ is uniformly distributed (maximum uncertainty).

*   **Reference:** Cover & Thomas, "Elements of Information Theory," Chapter 2. This chapter provides a thorough introduction to entropy, its properties, and its relationship to uncertainty.

---

### **2. Joint Entropy (H(X, Y))**

*   **Definition:** Joint entropy quantifies the average uncertainty associated with a pair of random variables $(X, Y)$. It measures the total amount of information contained in the joint distribution of these two variables.

    *   **Formula:** For discrete random variables $X$ and $Y$ with joint probability mass function $p(x, y)$, the joint entropy is:
        $H(X, Y) = -\sum_{x \in \mathcal{X}} \sum_{y \in \mathcal{Y}} p(x, y) \log_2 p(x, y)$ bits

*   **Interpretation:**
    *   $H(X, Y)$ represents the average number of bits needed to describe an outcome of the pair $(X, Y)$.
    *   It is always greater than or equal to the individual entropies $H(X)$ and $H(Y)$.
        *   $H(X, Y) \ge H(X)$
        *   $H(X, Y) \ge H(Y)$
    *   $H(X, Y) = H(X) + H(Y)$ if and only if $X$ and $Y$ are independent.

*   **Relationship to Individual Entropies and Conditional Entropies:**
    *   **Chain Rule for Entropy:**
        $H(X, Y) = H(X) + H(Y|X)$
        $H(X, Y) = H(Y) + H(X|Y)$

    *   **Explanation of Chain Rule:** The uncertainty in the pair $(X, Y)$ can be viewed as the uncertainty in $X$ plus the remaining uncertainty in $Y$ given that $X$ is known. This reflects the idea that knowing one variable can reduce the uncertainty in the other.

*   **Example:**
    Consider two random variables:
    *   $X$: The outcome of a fair coin toss (H: 0.5, T: 0.5)
    *   $Y$: The outcome of rolling a fair six-sided die (1: 1/6, 2: 1/6, ..., 6: 1/6)

    If $X$ and $Y$ are independent:
    *   $H(X) = -0.5 \log_2(0.5) - 0.5 \log_2(0.5) = 1$ bit
    *   $H(Y) = -\sum_{i=1}^6 \frac{1}{6} \log_2(\frac{1}{6}) = -\log_2(\frac{1}{6}) = \log_2(6) \approx 2.58$ bits
    *   $H(X, Y) = H(X) + H(Y) = 1 + \log_2(6) = \log_2(12) \approx 3.58$ bits

    If $Y$ were dependent on $X$ (e.g., if $X=H$ the die is weighted), $H(X,Y)$ would be less than $H(X)+H(Y)$ because knowing $X$ reduces the uncertainty in $Y$.

*   **Reference:** Goldsmith, "Wireless Communications," Chapter 2. Discusses entropy and joint entropy in the context of communication systems, often illustrating with examples related to source coding. Cover & Thomas also provides an in-depth mathematical treatment.

---

### **3. Conditional Entropy (H(Y|X))**

*   **Definition:** Conditional entropy quantifies the remaining uncertainty in a random variable $Y$ given that another random variable $X$ is known. It measures the average uncertainty of $Y$ *after* $X$ has been observed.

    *   **Formula:** For discrete random variables $X$ and $Y$ with joint probability mass function $p(x, y)$ and marginal probability mass function $p(x)$, the conditional entropy of $Y$ given $X$ is:
        $H(Y|X) = \sum_{x \in \mathcal{X}} p(x) H(Y|X=x)$
        where $H(Y|X=x) = -\sum_{y \in \mathcal{Y}} p(y|x) \log_2 p(y|x)$ is the entropy of $Y$ given $X=x$.

    *   **Alternative Formula using Joint and Marginal Probabilities:**
        $H(Y|X) = -\sum_{x \in \mathcal{X}} \sum_{y \in \mathcal{Y}} p(x, y) \log_2 p(y|x)$
        Using the relationship $p(y|x) = p(x, y) / p(x)$, we get:
        $H(Y|X) = -\sum_{x \in \mathcal{X}} \sum_{y \in \mathcal{Y}} p(x, y) \log_2 \frac{p(x, y)}{p(x)}$
        $H(Y|X) = \sum_{x \in \mathcal{X}} \sum_{y \in \mathcal{Y}} p(x, y) \log_2 \frac{p(x)}{p(x, y)}$

*   **Interpretation:**
    *   $H(Y|X)$ represents the average number of bits needed to describe $Y$ *after* $X$ has been revealed.
    *   If $X$ and $Y$ are independent, then $p(y|x) = p(y)$, and thus $H(Y|X) = H(Y)$. Knowing $X$ provides no information about $Y$, so the uncertainty in $Y$ remains the same.
    *   If $X$ determines $Y$ (e.g., $Y$ is a function of $X$), then $p(y|x)$ is 1 for a single value of $y$ and 0 for all others, making $H(Y|X=x) = 0$ for all $x$. In this case, $H(Y|X) = 0$.
    *   **Non-negativity:** $H(Y|X) \ge 0$.
    *   **Relationship to Joint Entropy:** $H(Y|X) \le H(Y)$. Knowing $X$ can only reduce or keep the uncertainty in $Y the same.

*   **Symmetry (for Conditional Entropy):**
    $H(Y|X)$ and $H(X|Y)$ are generally not equal. The uncertainty in $Y$ given $X$ might be different from the uncertainty in $X$ given $Y$.

*   **Example:**
    Consider a communication channel where $X$ is the transmitted symbol and $Y$ is the received symbol. The channel introduces noise, so $Y$ is not always equal to $X$.

    Let's say we transmit binary symbols $X \in \{0, 1\}$ with $p(0)=0.5, p(1)=0.5$.
    The channel is a Binary Symmetric Channel (BSC) with crossover probability $p = 0.1$.
    *   $P(Y=0|X=0) = 1-p = 0.9$
    *   $P(Y=1|X=0) = p = 0.1$
    *   $P(Y=0|X=1) = p = 0.1$
    *   $P(Y=1|X=1) = 1-p = 0.9$

    Let's calculate $H(Y|X)$:
    *   For $X=0$: $H(Y|X=0) = -P(Y=0|X=0)\log_2 P(Y=0|X=0) - P(Y=1|X=0)\log_2 P(Y=1|X=0)$
        $H(Y|X=0) = -(1-p)\log_2(1-p) - p\log_2(p)$
    *   For $X=1$: $H(Y|X=1) = -P(Y=0|X=1)\log_2 P(Y=0|X=1) - P(Y=1|X=1)\log_2 P(Y=1|X=1)$
        $H(Y|X=1) = -p\log_2(p) - (1-p)\log_2(1-p)$
    So, $H(Y|X=0) = H(Y|X=1)$.

    $H(Y|X) = p(0)H(Y|X=0) + p(1)H(Y|X=1)$
    $H(Y|X) = 0.5 [-(1-p)\log_2(1-p) - p\log_2(p)] + 0.5 [-(1-p)\log_2(1-p) - p\log_2(p)]$
    $H(Y|X) = -(1-p)\log_2(1-p) - p\log_2(p)$

    With $p=0.1$:
    $H(Y|X) = -(0.9)\log_2(0.9) - (0.1)\log_2(0.1) \approx -0.9(-0.152) - 0.1(-3.322) \approx 0.137 + 0.332 = 0.469$ bits.

    This means, on average, after knowing the transmitted symbol $X$, we still need about 0.469 bits to determine the received symbol $Y$ due to channel noise.

*   **Reference:** Rappaport, "Wireless Communication: Principles and Practice," often touches upon uncertainty in received signals. Goldsmith's "Wireless Communications" provides a clear link between conditional entropy and channel capacity.

---

### **4. Key Relationships and Properties**

*   **Chain Rule:** As mentioned earlier, this is fundamental:
    $H(X, Y) = H(X) + H(Y|X)$
    $H(X, Y) = H(Y) + H(X|Y)$

*   **Conditional Entropy Bounds:**
    *   $H(Y|X) \le H(Y)$
    *   $H(X|Y) \le H(X)$

*   **Relationship between Joint and Marginal Entropies:**
    $H(X, Y) \ge H(X)$
    $H(X, Y) \ge H(Y)$

*   **Information Gain (Reduction in Uncertainty):**
    The difference $H(Y) - H(Y|X)$ represents the average reduction in uncertainty about $Y$ when $X$ is known. This quantity is called **Mutual Information**, denoted as $I(X;Y)$.
    $I(X;Y) = H(Y) - H(Y|X)$
    $I(X;Y) = H(X) - H(X|Y)$
    $I(X;Y) = H(X) + H(Y) - H(X, Y)$

    Mutual information quantifies the amount of information that one random variable contains about another. This concept is crucial for understanding channel capacity.

*   **Reference:** Cover & Thomas, Chapter 8 (Mutual Information and Channel Capacity) builds directly upon joint and conditional entropy.

---

### **5. Alignment with Course Outcomes (COs)**

*   **CO1: Explain information theory measures such as entropy, conditional entropy, mutual information (Knowledge Level: K2)**
    *   This entire section is dedicated to defining and explaining entropy, joint entropy, and conditional entropy. The relationships derived (chain rule, bounds) and the introduction to mutual information directly support this CO.

*   **CO2: Apply source coding theorem for data compression. (Knowledge Level: K3)**
    *   While not directly covered in this topic, understanding entropy is foundational to source coding. The theoretical limit of compression for a source $X$ is $H(X)$ bits per symbol. Joint entropy would apply if we were compressing a pair of symbols jointly.

*   **CO3: Apply channel coding for error detection and correction (Knowledge Level: K3)**
    *   Conditional entropy is vital here. The performance of channel coding is related to how much uncertainty the coded signal reduces about the transmitted signal. Mutual information, derived from conditional entropy, directly leads to the concept of channel capacity, which is the maximum rate of reliable communication over a noisy channel.

*   **CO4: Explain the basic Principle of wireless communication techniques (Knowledge Level: K2)**
    *   Understanding uncertainty and information is fundamental to any communication system. Wireless channels are inherently noisy and time-varying, making concepts like conditional entropy (uncertainty in received signal given transmitted signal) essential for analyzing system performance.

*   **CO5: Describe the wireless channel models and analyse the performance of the modulation techniques for flat fading channels (Knowledge Level: K2)**
    *   Wireless channel models (like the BSC used in the example, or more complex fading models) are often characterized by their impact on information. Conditional entropy helps quantify this impact – how much uncertainty remains in the received signal given the transmitted signal.

*   **CO6: Identify the advantages of various diversity and equalization techniques for improving the wireless receiver performance . (Knowledge Level: K3)**
    *   Diversity and equalization techniques aim to reduce the uncertainty caused by channel impairments. Analyzing their effectiveness often involves quantifying the reduction in conditional entropy or the increase in mutual information achieved.

---

### **6. Important Points to Remember**

*   **Entropy ($H(X)$)**: Measures uncertainty of a single random variable.
*   **Joint Entropy ($H(X, Y)$)**: Measures uncertainty of a pair of random variables. Always $\ge$ individual entropies.
*   **Conditional Entropy ($H(Y|X)$)**: Measures remaining uncertainty in $Y$ given $X$. Always $\le$ the entropy of $Y$.
*   **Chain Rule:** $H(X, Y) = H(X) + H(Y|X)$. Essential for breaking down joint uncertainty.
*   **Independence implies no shared information:** If $X$ and $Y$ are independent, $H(X, Y) = H(X) + H(Y)$, and $H(Y|X) = H(Y)$.
*   **Dependence implies shared information:** If $X$ and $Y$ are dependent, $H(X, Y) < H(X) + H(Y)$, and $H(Y|X) < H(Y)$. The difference is mutual information.
*   **Context in Wireless:** Conditional entropy is key to understanding channel noise and the information lost or gained through the wireless medium.

---

### **7. Practice Questions and Exercises**

**Question 1 (K2/K3):**
Let $X$ be a random variable with the following probability distribution:
$P(X=1) = 0.5$
$P(X=2) = 0.25$
$P(X=3) = 0.25$

Let $Y$ be a random variable such that:
$P(Y=a|X=1) = 1$
$P(Y=b|X=2) = 0.5$, $P(Y=c|X=2) = 0.5$
$P(Y=a|X=3) = 0.2$, $P(Y=b|X=3) = 0.8$

Calculate:
a) $H(X)$
b) $H(Y|X=1)$
c) $H(Y|X=2)$
d) $H(Y|X=3)$
e) $H(Y|X)$
f) $H(X, Y)$
g) $H(Y)$ (Hint: You'll need the joint probabilities first, then use the chain rule: $H(X,Y) = H(Y) + H(X|Y)$ or calculate $p(y)$ and then $H(Y)$ directly).

**Solution 1:**

a) $H(X) = -[0.5 \log_2(0.5) + 0.25 \log_2(0.25) + 0.25 \log_2(0.25)]$
$H(X) = -[0.5(-1) + 0.25(-2) + 0.25(-2)]$
$H(X) = -[-0.5 - 0.5 - 0.5] = 1.5$ bits

b) $H(Y|X=1)$: Since $P(Y=a|X=1) = 1$, $Y$ is determined when $X=1$.
$H(Y|X=1) = -1 \log_2(1) = 0$ bits

c) $H(Y|X=2) = -[0.5 \log_2(0.5) + 0.5 \log_2(0.5)]$
$H(Y|X=2) = -[0.5(-1) + 0.5(-1)] = -[-0.5 - 0.5] = 1$ bit

d) $H(Y|X=3) = -[0.2 \log_2(0.2) + 0.8 \log_2(0.8)]$
$H(Y|X=3) \approx -[0.2(-2.32) + 0.8(-0.32)]$
$H(Y|X=3) \approx -[-0.464 - 0.256] = 0.72$ bits

e) $H(Y|X) = \sum_{x} P(X=x) H(Y|X=x)$
$H(Y|X) = P(X=1)H(Y|X=1) + P(X=2)H(Y|X=2) + P(X=3)H(Y|X=3)$
$H(Y|X) = 0.5(0) + 0.25(1) + 0.25(0.72)$
$H(Y|X) = 0 + 0.25 + 0.18 = 0.43$ bits

f) $H(X, Y) = H(X) + H(Y|X)$
$H(X, Y) = 1.5 + 0.43 = 1.93$ bits

g) To find $H(Y)$, we first need the joint probabilities $p(x,y)$:
$p(1,a) = P(Y=a|X=1)P(X=1) = 1 \times 0.5 = 0.5$
$p(2,b) = P(Y=b|X=2)P(X=2) = 0.5 \times 0.25 = 0.125$
$p(2,c) = P(Y=c|X=2)P(X=2) = 0.5 \times 0.25 = 0.125$
$p(3,a) = P(Y=a|X=3)P(X=3) = 0.2 \times 0.25 = 0.05$
$p(3,b) = P(Y=b|X=3)P(X=3) = 0.8 \times 0.25 = 0.2$

Now, calculate the marginal probabilities for $Y$:
$P(Y=a) = p(1,a) + p(3,a) = 0.5 + 0.05 = 0.55$
$P(Y=b) = p(2,b) + p(3,b) = 0.125 + 0.2 = 0.325$
$P(Y=c) = p(2,c) = 0.125$

Sum of $P(Y)$ must be 1: $0.55 + 0.325 + 0.125 = 1$. Correct.

Now, calculate $H(Y)$:
$H(Y) = -[P(Y=a)\log_2 P(Y=a) + P(Y=b)\log_2 P(Y=b) + P(Y=c)\log_2 P(Y=c)]$
$H(Y) = -[0.55 \log_2(0.55) + 0.325 \log_2(0.325) + 0.125 \log_2(0.125)]$
$H(Y) \approx -[0.55(-0.873) + 0.325(-1.625) + 0.125(-3)]$
$H(Y) \approx -[-0.480 - 0.528 - 0.375] = 1.383$ bits.

We can also verify using $H(X, Y) = H(Y) + H(X|Y)$:
Let's calculate $H(X|Y)$:
$p(x|y) = p(x,y) / p(y)$
$p(1|a) = p(1,a) / P(Y=a) = 0.5 / 0.55 = 10/11$
$p(3|a) = p(3,a) / P(Y=a) = 0.05 / 0.55 = 1/11$
$p(2|b) = p(2,b) / P(Y=b) = 0.125 / 0.325 = 5/13$
$p(3|b) = p(3,b) / P(Y=b) = 0.2 / 0.325 = 8/13$
$p(2|c) = p(2,c) / P(Y=c) = 0.125 / 0.125 = 1$

$H(X|Y=a) = -(10/11)\log_2(10/11) - (1/11)\log_2(1/11) \approx -(0.909)(-0.138) - (0.091)(-3.459) \approx 0.125 + 0.315 = 0.44$
$H(X|Y=b) = -(5/13)\log_2(5/13) - (8/13)\log_2(8/13) \approx -(0.385)(-1.375) - (0.615)(-0.704) \approx 0.53 + 0.43 = 0.96$
$H(X|Y=c) = -1 \log_2(1) = 0$

$H(X|Y) = P(Y=a)H(X|Y=a) + P(Y=b)H(X|Y=b) + P(Y=c)H(X|Y=c)$
$H(X|Y) = 0.55(0.44) + 0.325(0.96) + 0.125(0)$
$H(X|Y) \approx 0.242 + 0.312 + 0 = 0.554$ bits.

Check: $H(X, Y) = H(Y) + H(X|Y)$
$1.93 \approx 1.383 + 0.554$
$1.93 \approx 1.937$ (This matches within calculation precision).

**Question 2 (K2):**
True or False: For any two random variables $X$ and $Y$, $H(Y|X) \le H(X|Y)$. Justify your answer.

**Solution 2:**
False.
Justification: Conditional entropy measures the uncertainty of one variable given the other. There is no general rule stating that $H(Y|X)$ must be less than or equal to $H(X|Y)$. The asymmetry arises because the dependency structure can be different in each direction, or the marginal distributions $p(x)$ and $p(y)$ can be different.

For example, consider $X$ as a coin flip (H=0.5, T=0.5) and $Y$ as a message that is either "Correct" (with probability 0.9) or "Incorrect" (with probability 0.1).
If $Y$ is completely determined by $X$ (e.g., if $X=H$, $Y=$"Correct" always; if $X=T$, $Y=$"Incorrect" always), then $H(Y|X) = 0$. However, $H(X|Y)$ would be $H(X)=1$ bit if $Y$ always implies a specific $X$. This shows $H(Y|X) < H(X|Y)$.
Conversely, if $X$ is determined by $Y$, the inequality would reverse.

**Question 3 (K3):**
Consider a digital communication system transmitting bits $X \in \{0, 1\}$ with $P(X=0)=P(X=1)=0.5$. The received bit is $Y$. The channel is noisy, and the probabilities are:
$P(Y=0|X=0) = 0.9$, $P(Y=1|X=0) = 0.1$
$P(Y=0|X=1) = 0.2$, $P(Y=1|X=1) = 0.8$

Calculate $H(X)$ and $H(Y|X)$. What does $H(Y|X)$ tell us about the channel?

**Solution 3:**
$H(X) = -[0.5 \log_2(0.5) + 0.5 \log_2(0.5)] = 1$ bit.
This is the entropy of the transmitted signal, representing the average uncertainty of what bit is sent.

$H(Y|X) = P(X=0)H(Y|X=0) + P(X=1)H(Y|X=1)$
$H(Y|X=0) = -[0.9 \log_2(0.9) + 0.1 \log_2(0.1)] \approx 0.469$ bits
$H(Y|X=1) = -[0.2 \log_2(0.2) + 0.8 \log_2(0.8)] \approx 0.722$ bits

$H(Y|X) = 0.5 \times 0.469 + 0.5 \times 0.722$
$H(Y|X) \approx 0.2345 + 0.361 = 0.5955$ bits.

What $H(Y|X)$ tells us about the channel:
$H(Y|X)$ represents the average uncertainty of the received bit $Y$, given that the transmitted bit $X$ is known. In this case, it's approximately 0.5955 bits. This uncertainty is due to the channel noise that can cause symbol errors (e.g., transmitting a 0 and receiving a 1, or vice versa). A higher $H(Y|X)$ indicates a noisier channel, meaning more uncertainty remains about the received signal even after knowing what was sent.

---

This concludes the notes on Joint and Conditional Entropy. Understanding these concepts is crucial for grasping more advanced topics like mutual information and channel capacity.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
