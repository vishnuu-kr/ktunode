---
title: "Properties of Mutual Information"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 1: Entropy"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fecf0"
status: "completed"
scrapedAt: "2026-05-23T17:58:22.990Z"
---
# Advanced Communication Theory: Module 1 - Entropy

## Topic: Properties of Mutual Information

This module delves into the fundamental concepts of Information Theory, focusing on entropy and its related measures. We will explore the properties of Mutual Information, a crucial concept for understanding information transfer in communication systems.

---

### Learning Outcomes

Upon completion of this topic, you will be able to:

*   Understand and explain the definition of Mutual Information. (K2)
*   Differentiate Mutual Information from conditional entropy and joint entropy. (K2)
*   Enumerate and explain the key properties of Mutual Information. (K2)
*   Analyze how Mutual Information behaves under various scenarios, such as independent random variables and deterministic relationships. (K3)
*   Appreciate the significance of Mutual Information in the context of communication channels. (K2)

---

### 1. Introduction to Mutual Information

Mutual Information (MI), denoted by $I(X; Y)$, quantifies the amount of information that one random variable contains about another random variable. It measures the reduction in uncertainty about one variable due to knowing the other. In essence, it tells us how much knowing $X$ reduces our uncertainty about $Y$, or vice versa.

**Key Concept:** Uncertainty reduction.

**Definition:** Mutual information $I(X; Y)$ between two random variables $X$ and $Y$ is defined as:

$$I(X; Y) = H(Y) - H(Y|X)$$

where:
*   $H(Y)$ is the entropy of $Y$.
*   $H(Y|X)$ is the conditional entropy of $Y$ given $X$.

**Alternative Definitions:**

Mutual Information can also be expressed in several equivalent forms:

*   **Symmetric form:**
    $$I(X; Y) = H(X) - H(X|Y)$$
    This highlights the symmetry of MI – the information $X$ provides about $Y$ is the same as the information $Y$ provides about $X$.

*   **Using Joint Entropy:**
    $$I(X; Y) = H(X) + H(Y) - H(X, Y)$$
    where $H(X, Y)$ is the joint entropy of $X$ and $Y$.

*   **In terms of Kullback-Leibler (KL) Divergence:**
    $$I(X; Y) = D_{KL}(P_{XY} || P_X P_Y)$$
    where:
    *   $P_{XY}$ is the joint probability distribution of $(X, Y)$.
    *   $P_X$ and $P_Y$ are the marginal probability distributions of $X$ and $Y$, respectively.
    *   $D_{KL}(P || Q)$ is the KL divergence between distributions $P$ and $Q$.

**Calculation for Discrete Random Variables:**

If $X$ and $Y$ are discrete random variables with joint probability mass function $p(x, y)$, marginals $p(x) = \sum_y p(x, y)$ and $p(y) = \sum_x p(x, y)$, and conditional distributions $p(y|x) = p(x, y) / p(x)$ and $p(x|y) = p(x, y) / p(y)$:

$$I(X; Y) = \sum_{x \in \mathcal{X}} \sum_{y \in \mathcal{Y}} p(x, y) \log \frac{p(x, y)}{p(x) p(y)}$$

**Calculation for Continuous Random Variables:**

If $X$ and $Y$ are continuous random variables with joint probability density function $f(x, y)$, marginals $f(x)$ and $f(y)$, and conditional densities $f(y|x) = f(x, y) / f(x)$ and $f(x|y) = f(x, y) / f(y)$:

$$I(X; Y) = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f(x, y) \log \frac{f(x, y)}{f(x) f(y)} dx dy$$

**Relationship to Entropy Measures (as per CO1):**

*   **$H(Y) \ge I(X; Y)$:** The total uncertainty in $Y$ is always greater than or equal to the information $X$ provides about $Y$.
*   **$H(Y|X) \le H(Y)$:** Knowing $X$ can only reduce or keep the uncertainty in $Y the same; it never increases it.
*   **$I(X; Y) \ge 0$:** Mutual information is always non-negative.

---

### 2. Properties of Mutual Information

These properties are fundamental to understanding how information is transmitted and processed in communication systems.

#### 2.1 Non-negativity

**Property:** $I(X; Y) \ge 0$

**Explanation:** The information one random variable provides about another cannot be negative. This is intuitively clear, as knowing something about another variable should at worst provide no new information, not less information. This property stems directly from the definition of KL divergence, which is always non-negative ($D_{KL}(P || Q) \ge 0$), and the fact that $I(X; Y) = D_{KL}(P_{XY} || P_X P_Y)$.

**Proof Sketch:** Using the KL divergence definition. The joint distribution $P_{XY}$ is compared to the product of marginals $P_X P_Y$. If $X$ and $Y$ are independent, $P_{XY} = P_X P_Y$, and $I(X;Y) = 0$. If they are dependent, the joint distribution is "more concentrated" than the product of marginals, leading to a positive KL divergence.

**Relevance:** Guarantees that mutual information is a valid measure of shared information.

#### 2.2 Symmetry

**Property:** $I(X; Y) = I(Y; X)$

**Explanation:** The amount of information that $X$ provides about $Y$ is exactly the same as the amount of information that $Y$ provides about $X$. This is evident from the symmetric definitions:
*   $I(X; Y) = H(Y) - H(Y|X)$ and $I(Y; X) = H(X) - H(X|Y)$.
*   Also, $I(X; Y) = H(X) + H(Y) - H(X, Y)$ and $I(Y; X) = H(Y) + H(X) - H(Y, X)$. The joint entropy $H(X, Y)$ is equal to $H(Y, X)$.

**Proof Sketch:** From the KL divergence definition, $D_{KL}(P_{XY} || P_X P_Y) = D_{KL}(P_{YX} || P_Y P_X)$. Since $P_{XY} = P_{YX}$ and $P_X P_Y = P_Y P_X$, the symmetry is immediate.

**Relevance:** Simplifies analysis as we don't need to distinguish between $I(X; Y)$ and $I(Y; X)$.

#### 2.3 Relationship with Entropy and Conditional Entropy

**Property:**
*   $I(X; Y) \le H(X)$ and $I(X; Y) \le H(Y)$
*   $I(X; Y) = H(X) - H(X|Y)$
*   $I(X; Y) = H(Y) - H(Y|X)$

**Explanation:**
*   The first part ($I(X; Y) \le H(X)$ and $I(X; Y) \le H(Y)$) means the information $X$ gains about $Y$ cannot exceed the total information content (entropy) of $X$ or $Y$ themselves. You can't learn more about $Y$ from $X$ than the inherent variability (uncertainty) present in $X$ or $Y$.
*   The latter two equations are the definitions we've already discussed, reinforcing that MI is the reduction in uncertainty.

**Relevance:** Connects MI to fundamental entropy measures, allowing for quantitative analysis of information transfer.

#### 2.4 Information is Never Increased by Conditioning

**Property:** $I(X; Y) \ge I(X; Y')$ if $Y'$ is obtained from $Y$ and $Z$ by a Markov chain $X \rightarrow Y \rightarrow Y'$.

**Explanation:** If $Y$ and $Z$ are conditionally independent given $X$, then $Y'$ (which depends on $Y$ and $Z$) cannot contain more information about $X$ than $Y$ alone. In simpler terms, if $Y'$ is "derived" from $Y$ in a way that doesn't introduce new information about $X$, the shared information cannot increase. This is related to the data processing inequality.

**Formal Statement (Data Processing Inequality):** If $X \rightarrow Y \rightarrow Z$ forms a Markov chain, then $I(X; Y) \ge I(X; Z)$. This means that processing data cannot increase the information about the original source.

**Relevance:** Crucial for understanding how information is preserved or degraded through processing stages in a communication system. For instance, decoding a received signal is a processing step; the information about the transmitted symbol after decoding cannot be more than what was in the received signal.

#### 2.5 Independence

**Property:** $I(X; Y) = 0$ if and only if $X$ and $Y$ are independent.

**Explanation:** If $X$ and $Y$ are independent, then $p(x, y) = p(x) p(y)$. In this case, $\frac{p(x, y)}{p(x) p(y)} = 1$, and $\log(1) = 0$. So, the summation/integral for $I(X; Y)$ becomes zero. Conversely, if $I(X; Y) = 0$, it implies that the joint distribution $P_{XY}$ is identical to the product of marginals $P_X P_Y$, which is the definition of independence for probability distributions.

**Relevance:** This is a fundamental indicator of how well two variables are related. Zero MI means no shared information, implying independence.

**Example (Discrete):**
Let $X$ be a fair coin toss {Heads (H), Tails (T)}, $P(X=H) = P(X=T) = 0.5$.
Let $Y$ be another fair coin toss, independent of $X$. $P(Y=H) = P(Y=T) = 0.5$.
$P(X=x, Y=y) = P(X=x)P(Y=y)$ for all $x, y$.
$I(X; Y) = \sum_{x,y} p(x,y) \log \frac{p(x,y)}{p(x)p(y)} = \sum_{x,y} p(x)p(y) \log \frac{p(x)p(y)}{p(x)p(y)} = \sum_{x,y} p(x)p(y) \log 1 = 0$.

#### 2.6 Deterministic Relationship

**Property:** If $Y = f(X)$ where $f$ is a deterministic function, then $I(X; Y) = H(Y)$.

**Explanation:** If $Y$ is completely determined by $X$, then knowing $X$ completely determines $Y$. In this case, $H(Y|X) = 0$ (no uncertainty about $Y$ if $X$ is known). Therefore, $I(X; Y) = H(Y) - H(Y|X) = H(Y) - 0 = H(Y)$.

**Also, if $X = g(Y)$ is deterministic, then $I(X; Y) = H(X)$.**

**Example:**
Let $X$ be a random variable representing the number of hours a student studies, and $Y$ be a random variable representing their exam score, where $Y = 10X$.
If $X$ can take values $\{1, 2, 3\}$ with equal probability ($p(x) = 1/3$ for $x \in \{1, 2, 3\}$), then $Y$ can take values $\{10, 20, 30\}$.
$H(X) = -\sum (1/3) \log_2 (1/3) = \log_2 3$.
Since $Y$ is deterministically related to $X$, knowing $X$ tells us everything about $Y$. The uncertainty in $Y$ (if $X$ is known) is $H(Y|X) = 0$.
Therefore, $I(X; Y) = H(Y) - H(Y|X) = H(Y)$.
Also, $H(Y) = H(\{10, 20, 30\}) = -\sum (1/3) \log_2 (1/3) = \log_2 3$.
So, $I(X; Y) = H(Y) = H(X) = \log_2 3$.

**Note:** This assumes $f$ is one-to-one. If $f$ is not one-to-one, then $I(X; Y) = H(Y)$ still holds, but $I(X; Y) < H(X)$. The information $X$ contains about $Y$ is limited by the information $Y$ contains about $X$.

#### 2.7 Relationship to Channel Capacity (as per CO1, CO4)

Mutual Information is the cornerstone for understanding channel capacity.
**Definition:** Channel capacity $C$ is the maximum possible mutual information between the input $X$ and output $Y$ of a communication channel, maximized over all possible input distributions $P_X$.

$$C = \max_{P_X} I(X; Y)$$

**Explanation:** This represents the maximum rate at which information can be reliably transmitted over a noisy channel without error. The properties of MI are crucial for proving theorems related to channel capacity, such as the Shannon-Hartley theorem.

**Example:** Consider a Binary Symmetric Channel (BSC) with crossover probability $p$. The input $X$ and output $Y$ are binary (0 or 1). The channel capacity is $C = 1 - H(p)$, where $H(p) = -p \log_2 p - (1-p) \log_2 (1-p)$ is the binary entropy function. This capacity is achieved when the input is uniformly distributed ($P(X=0) = P(X=1) = 0.5$).

---

### 3. Visualizing Mutual Information (Information Theoretic Relationships)

Mutual Information can be visualized using Venn diagrams representing entropies.

*   **$H(X)$:** Total uncertainty in $X$.
*   **$H(Y)$:** Total uncertainty in $Y$.
*   **$H(X, Y)$:** Joint uncertainty in $(X, Y)$.
*   **$H(X|Y)$:** Uncertainty remaining in $X$ after knowing $Y$.
*   **$H(Y|X)$:** Uncertainty remaining in $Y$ after knowing $X$.

Consider a Venn diagram where $H(X)$ and $H(Y)$ are represented as circles. The intersection of these circles represents the mutual information $I(X; Y)$.

*   $H(X) = I(X; Y) + H(X|Y)$ (The total uncertainty in X is the shared information plus the uncertainty about X given Y)
*   $H(Y) = I(X; Y) + H(Y|X)$ (The total uncertainty in Y is the shared information plus the uncertainty about Y given X)
*   $H(X, Y) = H(X) + H(Y|X) = H(Y) + H(X|Y) = H(X) + H(Y) - I(X; Y)$

```
      +-----------------+
      |       H(X)      |
      |   +---------+   |
      |   | I(X; Y) |   |
      |   +---------+   |
      |       H(X|Y)    |
      +-----------------+

      +-----------------+
      |       H(Y)      |
      |   +---------+   |
      |   | I(X; Y) |   |
      |   +---------+   |
      |       H(Y|X)    |
      +-----------------+
```

**From Goldsmith (2005, Chapter 2):** Goldsmith often uses these relationships to explain concepts, illustrating how conditional entropy ($H(Y|X)$) is the "unshared" part of $H(Y)$, and $I(X; Y)$ is the "shared" part.

**From Cover & Thomas (2006, Chapter 2):** Cover and Thomas are foundational here, rigorously defining entropy and mutual information and deriving these properties. They emphasize the probabilistic interpretation and the relationship to KL divergence.

---

### 4. Significance in Advanced Communication Theory (CO1, CO2, CO3, CO4, CO5, CO6)

Mutual Information is a unifying concept throughout advanced communication theory:

*   **Data Compression (CO2):** For source coding, $I(X; \hat{X})$ where $\hat{X}$ is the reconstructed source, relates to the minimum number of bits required to represent the source without losing too much information. The entropy of the source ($H(X)$) sets the theoretical limit.
*   **Channel Coding (CO3):** For channel coding, $I(X; Y)$ represents the rate of information successfully transmitted through a noisy channel. Channel capacity, derived from maximizing MI, dictates the ultimate reliable transmission rate. Properties of MI are used in proving coding theorems.
*   **Wireless Communication Principles (CO4):** Understanding how information is transmitted over wireless channels (which are inherently noisy and time-varying) relies heavily on MI. For example, the Shannon capacity of a fading channel is the average mutual information over all possible channel realizations.
*   **Channel Models and Modulation (CO5):** The mutual information between the transmitted symbol and the received signal is key to evaluating the performance of different modulation schemes. For example, in a fading channel, MI calculation helps determine the achievable rates for various SNR and fading conditions.
*   **Diversity and Equalization (CO6):** Techniques like diversity and equalization aim to improve the signal-to-noise ratio and reduce the impact of channel impairments. These improvements can be quantified by their effect on increasing the mutual information between the transmitted and received signals.

---

### 5. Practice Questions and Exercises

**Question 1:**
Two random variables $X$ and $Y$ have the following joint probability mass function:
$P(X=0, Y=0) = 0.4$
$P(X=0, Y=1) = 0.1$
$P(X=1, Y=0) = 0.2$
$P(X=1, Y=1) = 0.3$

Calculate $I(X; Y)$.

**Answer 1:**
First, calculate marginal probabilities:
$P(X=0) = P(X=0, Y=0) + P(X=0, Y=1) = 0.4 + 0.1 = 0.5$
$P(X=1) = P(X=1, Y=0) + P(X=1, Y=1) = 0.2 + 0.3 = 0.5$
$P(Y=0) = P(X=0, Y=0) + P(X=1, Y=0) = 0.4 + 0.2 = 0.6$
$P(Y=1) = P(X=0, Y=1) + P(X=1, Y=1) = 0.1 + 0.3 = 0.4$

Now, calculate terms $p(x, y) \log \frac{p(x, y)}{p(x) p(y)}$:
*   For (0,0): $0.4 \log \frac{0.4}{(0.5)(0.6)} = 0.4 \log \frac{0.4}{0.3} = 0.4 \log (4/3) \approx 0.4 \times 0.204 = 0.0816$
*   For (0,1): $0.1 \log \frac{0.1}{(0.5)(0.4)} = 0.1 \log \frac{0.1}{0.2} = 0.1 \log (0.5) = 0.1 \times (-1) = -0.1$
*   For (1,0): $0.2 \log \frac{0.2}{(0.5)(0.6)} = 0.2 \log \frac{0.2}{0.3} = 0.2 \log (2/3) \approx 0.2 \times (-0.176) = -0.0352$
*   For (1,1): $0.3 \log \frac{0.3}{(0.5)(0.4)} = 0.3 \log \frac{0.3}{0.2} = 0.3 \log (1.5) \approx 0.3 \times 0.204 = 0.0612$

$I(X; Y) \approx 0.0816 - 0.1 - 0.0352 + 0.0612 = 0.0076$ (using base 2 logarithm)
The exact value is $0.4 \log_2(4/3) + 0.1 \log_2(1/2) + 0.2 \log_2(2/3) + 0.3 \log_2(3/2)$.
$I(X;Y) = 0.4 \log_2(4/3) - 0.1 + 0.2 \log_2(2/3) + 0.3 \log_2(3/2)$
$I(X;Y) = 0.4 \log_2(4/3) - 0.1 + 0.2 (\log_2 2 - \log_2 3) + 0.3 (\log_2 3 - \log_2 2)$
$I(X;Y) = 0.4 \log_2(4/3) - 0.1 + 0.2(1 - \log_2 3) + 0.3(\log_2 3 - 1)$
$I(X;Y) = 0.4 \log_2(4/3) - 0.1 + 0.2 - 0.2 \log_2 3 + 0.3 \log_2 3 - 0.3$
$I(X;Y) = 0.4 (\log_2 4 - \log_2 3) + 0.1 + 0.1 \log_2 3$
$I(X;Y) = 0.4 (2 - \log_2 3) + 0.1 + 0.1 \log_2 3$
$I(X;Y) = 0.8 - 0.4 \log_2 3 + 0.1 + 0.1 \log_2 3$
$I(X;Y) = 0.9 - 0.3 \log_2 3$
Using $\log_2 3 \approx 1.585$:
$I(X;Y) \approx 0.9 - 0.3 \times 1.585 = 0.9 - 0.4755 = 0.4245$ bits.

**Question 2:**
State and briefly explain the symmetry property of Mutual Information.

**Answer 2:**
The symmetry property states that $I(X; Y) = I(Y; X)$. This means that the amount of information that random variable $X$ provides about random variable $Y$ is exactly the same as the amount of information that $Y$ provides about $X$. This arises because both $I(X; Y)$ and $I(Y; X)$ are measures of the statistical dependence between $X$ and $Y$, and this dependence is inherently symmetric. Mathematically, it can be shown using the definition of Mutual Information in terms of joint and marginal entropies ($I(X; Y) = H(X) + H(Y) - H(X, Y)$) or Kullback-Leibler divergence.

**Question 3:**
Under what condition is $I(X; Y) = 0$?

**Answer 3:**
$I(X; Y) = 0$ if and only if $X$ and $Y$ are statistically independent. This means that knowing the value of one variable provides no information whatsoever about the value of the other.

**Question 4:**
Let $X$ be a random variable and $Y = X + N$, where $N$ is a Gaussian random variable independent of $X$ with mean 0 and variance $\sigma_N^2$. If $X$ is also a Gaussian random variable with mean 0 and variance $\sigma_X^2$, what is the relationship between $I(X; Y)$ and the signal-to-noise ratio (SNR)? (Hint: Consider the formula for MI of Gaussian random variables and the definition of SNR).

**Answer 4:**
For jointly Gaussian random variables $X$ and $Y = X+N$, where $N$ is independent of $X$ and $N \sim \mathcal{N}(0, \sigma_N^2)$ and $X \sim \mathcal{N}(0, \sigma_X^2)$, the mutual information is given by:
$I(X; Y) = \frac{1}{2} \log_2 (1 + \text{SNR})$
The signal-to-noise ratio (SNR) is typically defined as the ratio of the power of the signal ($X$) to the power of the noise ($N$), which in this case is $\text{SNR} = \frac{\sigma_X^2}{\sigma_N^2}$.
Thus, $I(X; Y) = \frac{1}{2} \log_2 (1 + \frac{\sigma_X^2}{\sigma_N^2})$.
This shows that the mutual information increases logarithmically with the SNR, a fundamental result in communication theory.

---

### 6. Important Points to Remember

*   **Mutual Information:** Quantifies shared information or reduction in uncertainty.
*   **Symmetry:** $I(X; Y) = I(Y; X)$.
*   **Non-negativity:** $I(X; Y) \ge 0$.
*   **Independence:** $I(X; Y) = 0$ iff $X, Y$ are independent.
*   **Deterministic Relation:** If $Y=f(X)$ (deterministic), $I(X; Y) = H(Y)$.
*   **Data Processing Inequality:** Processing data can only decrease or maintain mutual information.
*   **Channel Capacity:** Defined as the maximum mutual information achievable over a channel.
*   **Foundation:** MI is fundamental to understanding compression, error correction, and wireless communication performance limits.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### References

*   **Elements of Information Theory by Cover & Thomas (2006):** Chapters 2 provides a rigorous and comprehensive treatment of mutual information, its properties, and its relationship to entropy. This is the primary reference for the theoretical underpinnings.
*   **Wireless Communications by Goldsmith (2005):** Chapter 2 introduces information theory basics, including mutual information and its role in defining channel capacity. It connects these concepts to communication system design.
*   **Communication Systems by Haykin (2020):** Haykin's text often uses information theoretic concepts to analyze the performance of various communication systems, including the impact of noise and channel impairments on information transfer.

---