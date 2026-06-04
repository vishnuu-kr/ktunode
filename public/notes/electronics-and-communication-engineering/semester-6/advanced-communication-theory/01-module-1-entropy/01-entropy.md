---
title: "Entropy"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 1: Entropy"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fecec"
status: "completed"
scrapedAt: "2026-05-23T17:58:20.149Z"
---
# ADVANCED COMMUNICATION THEORY - Module 1: Entropy

## Topic: Entropy

**Module Description:** This module introduces the fundamental concepts of information theory, with a focus on entropy, which quantifies the uncertainty or randomness inherent in a random variable. This forms the bedrock for understanding data compression and communication system design.

**Learning Outcomes:**

*   **Understand the concept of entropy as a measure of uncertainty.**
*   **Calculate entropy for discrete and continuous random variables.**
*   **Explore the properties of entropy.**
*   **Introduce joint entropy and conditional entropy.**
*   **Define and understand mutual information.**

---

### 1. Introduction to Information Theory and Entropy

Information theory, pioneered by Claude Shannon, provides a mathematical framework for quantifying, storing, and communicating information. At its core lies the concept of **entropy**, which measures the average amount of "surprise" or uncertainty associated with the outcome of a random variable.

**Key Concepts:**

*   **Information:** The reduction of uncertainty.
*   **Uncertainty:** The lack of knowledge about the outcome of a random event.
*   **Entropy (H):** A measure of the average uncertainty of a random variable.

**Insights from Textbooks:**

*   **Goldsmith (2005):** "Entropy is a measure of the average information content of a random variable. It represents the average number of bits required to represent the outcome of a random variable." (Chapter 2)
*   **Cover & Thomas (2006):** "Entropy is the expected value of the information content of an outcome." (Chapter 2)
*   **Rappaport (2022):** While not a primary focus in his wireless communication text, Rappaport's earlier editions and the general principles of communication systems would imply the importance of quantifying information for efficient transmission.

---

### 2. Entropy of a Discrete Random Variable

For a discrete random variable $X$ with possible outcomes $x_1, x_2, \dots, x_n$ and probability mass function (PMF) $P(X=x_i) = p_i$, the entropy $H(X)$ is defined as:

$$H(X) = -\sum_{i=1}^{n} p_i \log_b(p_i)$$

where:
*   $p_i$ is the probability of the $i$-th outcome.
*   $\log_b$ is the logarithm to base $b$.
    *   If $b=2$, entropy is measured in **bits**.
    *   If $b=e$, entropy is measured in **nats**.
    *   If $b=10$, entropy is measured in **hartleys**.

**Important Points:**

*   **Convention:** $0 \log_b(0) = 0$. This accounts for outcomes with zero probability, which contribute no uncertainty.
*   **Intuition:** Higher entropy means more uncertainty, and thus more information is conveyed when the outcome is revealed.

**Example:**

Consider a fair coin flip where $X$ is the outcome (Heads or Tails).
$P(X=\text{Heads}) = 0.5$
$P(X=\text{Tails}) = 0.5$

Using base 2 logarithm:
$H(X) = -(0.5 \log_2(0.5) + 0.5 \log_2(0.5))$
$H(X) = -(0.5 \times -1 + 0.5 \times -1)$
$H(X) = -(-0.5 - 0.5) = -(-1) = 1 \text{ bit}$

This means, on average, 1 bit is needed to represent the outcome of a fair coin flip.

**Consider a biased coin:**
$P(X=\text{Heads}) = 0.9$
$P(X=\text{Tails}) = 0.1$

$H(X) = -(0.9 \log_2(0.9) + 0.1 \log_2(0.1))$
$H(X) \approx -(0.9 \times -0.152 + 0.1 \times -3.322)$
$H(X) \approx -(-0.1368 - 0.3322) = -(-0.469) = 0.469 \text{ bits}$

The entropy is lower for the biased coin, reflecting less uncertainty.

**Insights from Textbooks:**

*   **Cover & Thomas (2006):** Provides a rigorous mathematical definition and numerous examples for discrete random variables. (Chapter 2)
*   **Goldsmith (2005):** Uses entropy to motivate the concept of channel capacity, emphasizing its role in defining the fundamental limits of communication. (Chapter 2)

---

### 3. Properties of Entropy

Let $X$ be a discrete random variable with PMF $p(x)$.

*   **Non-negativity:** $H(X) \ge 0$.
    *   **Proof:** For any $p_i \in [0, 1]$, $\log_b(p_i) \le 0$ (for $b>1$). Therefore, $-p_i \log_b(p_i) \ge 0$. The sum of non-negative terms is non-negative.
*   **Maximum Entropy:** For a random variable with $n$ possible outcomes, entropy is maximized when the distribution is uniform.
    *   $H(X) \le \log_b(n)$.
    *   **Proof:** Using Jensen's inequality for concave functions (like $-\log_b(x)$). The maximum is achieved when $p_i = 1/n$ for all $i$, resulting in $H(X) = -\sum (1/n) \log_b(1/n) = -\log_b(1/n) = \log_b(n)$.
*   **Zero Entropy:** $H(X) = 0$ if and only if $X$ is a deterministic variable (i.e., one outcome has probability 1, all others have probability 0).
    *   **Proof:** If $p_k = 1$ and $p_i = 0$ for $i \neq k$, then $H(X) = -1 \log_b(1) - \sum_{i \neq k} 0 \log_b(0) = 0$.
*   **Additivity for Independent Variables:** For independent random variables $X$ and $Y$, $H(X, Y) = H(X) + H(Y)$. (This will be explored further in joint entropy).
*   **Entropy of a Function of a Random Variable:** If $Y = g(X)$, then $H(Y) \le H(X)$. The equality holds if $g$ is a one-to-one function.
    *   **Example:** If $X$ is a random variable representing temperature in Celsius and $Y$ is the same temperature in Fahrenheit, $Y = \frac{9}{5}X + 32$. Since this is a linear transformation, the uncertainty in $Y$ is the same as in $X$ (after scaling). However, if $Y = X^2$, the uncertainty in $Y$ might be less than $X$ if multiple $X$ values map to the same $Y$ value.

**Insights from Textbooks:**

*   **Cover & Thomas (2006):** Dedicates a significant portion to proving and illustrating these properties. (Chapter 2)
*   **Goldsmith (2005):** Highlights the maximum entropy principle as a fundamental concept in statistical inference and its application in modeling wireless channels. (Chapter 2)

---

### 4. Entropy of a Continuous Random Variable

For a continuous random variable $X$ with probability density function (PDF) $f(x)$, the **differential entropy** $h(X)$ is defined as:

$$h(X) = -\int_{-\infty}^{\infty} f(x) \log_b(f(x)) dx$$

**Important Considerations for Differential Entropy:**

*   **Not always non-negative:** $h(X)$ can be negative.
*   **Not invariant to scaling:** $h(aX) = h(X) + \log_b|a|$.
*   **Not invariant to translation:** $h(X+b) = h(X)$.
*   **Maximum Entropy for Continuous Variables:** For a given variance $\sigma^2$, the Gaussian distribution maximizes differential entropy.
    *   For a Gaussian random variable $X \sim \mathcal{N}(\mu, \sigma^2)$, $h(X) = \frac{1}{2} \log_b(2\pi e \sigma^2)$.

**Example:**

Uniform distribution over $[0, a]$:
$f(x) = 1/a$ for $0 \le x \le a$, and $0$ otherwise.

$h(X) = -\int_{0}^{a} \frac{1}{a} \log_b(\frac{1}{a}) dx$
$h(X) = -\frac{1}{a} \log_b(\frac{1}{a}) \int_{0}^{a} dx$
$h(X) = -\frac{1}{a} (-\log_b(a)) [x]_0^a$
$h(X) = \frac{1}{a} \log_b(a) \cdot a = \log_b(a)$

This shows that for a uniform distribution over an interval of length $a$, the entropy is $\log_b(a)$, similar to the discrete case where outcomes are equally likely.

**Insights from Textbooks:**

*   **Cover & Thomas (2006):** Explains the concept of differential entropy and its properties, including its limitations compared to discrete entropy. (Chapter 8)
*   **Goldsmith (2005):** Discusses the importance of Gaussian assumption in wireless communication due to the Central Limit Theorem and its implications for maximum entropy. (Chapter 3)

---

### 5. Joint Entropy and Conditional Entropy

These concepts extend entropy to multiple random variables and the uncertainty remaining after one variable is known.

#### 5.1 Joint Entropy

The joint entropy of two discrete random variables $X$ and $Y$, denoted as $H(X, Y)$, measures the uncertainty in the pair $(X, Y)$.

$$H(X, Y) = -\sum_{i} \sum_{j} p(x_i, y_j) \log_b(p(x_i, y_j))$$

where $p(x_i, y_j)$ is the joint probability mass function.

**Key Property (Chain Rule for Entropy):**

$$H(X, Y) = H(X) + H(Y|X)$$
$$H(X, Y) = H(Y) + H(X|Y)$$

This is analogous to the chain rule for probabilities: $p(x, y) = p(x) p(y|x)$.

**Insights from Textbooks:**

*   **Cover & Thomas (2006):** Clearly presents the chain rule and its implications for understanding the relationship between random variables. (Chapter 2)
*   **Goldsmith (2005):** Uses joint entropy in the context of capacity, showing how the capacity of a channel is related to the joint distribution of the input and output. (Chapter 2)

#### 5.2 Conditional Entropy

The conditional entropy of $Y$ given $X$, denoted as $H(Y|X)$, measures the remaining uncertainty in $Y$ after $X$ is known.

$$H(Y|X) = \sum_{i} p(x_i) H(Y|X=x_i)$$
$$H(Y|X) = -\sum_{i} p(x_i) \sum_{j} p(y_j|x_i) \log_b(p(y_j|x_i))$$
$$H(Y|X) = -\sum_{i} \sum_{j} p(x_i, y_j) \log_b(p(y_j|x_i))$$

**Key Properties:**

*   **Non-negativity:** $H(Y|X) \ge 0$.
*   **Relationship with Joint Entropy:** $H(X, Y) = H(X) + H(Y|X)$.
*   **Minimizing Conditional Entropy:** $H(Y|X) \le H(Y)$. This means knowing $X$ cannot increase the uncertainty in $Y$. Equality holds if and only if $X$ and $Y$ are independent.
    *   **Proof:** $H(Y) - H(Y|X) = H(Y) - (H(X,Y) - H(X)) = H(X) + H(Y) - H(X,Y)$. This term is always $\ge 0$ (related to mutual information).

**Example:**

Consider a scenario where you are trying to predict the weather (Sunny, Cloudy, Rainy). Let $X$ be the day of the week and $Y$ be the weather.
Suppose:
*   $P(\text{Monday}) = P(\text{Tuesday}) = \dots = P(\text{Sunday}) = 1/7$. So $H(X) = \log_2(7) \approx 2.81$ bits.
*   On weekdays, weather is more likely to be Sunny (0.7), Cloudy (0.2), Rainy (0.1).
*   On weekends, weather is more likely to be Sunny (0.4), Cloudy (0.3), Rainy (0.3).

Calculating $H(Y|X)$:
For a weekday $x_i$ (with $p(x_i)=1/7$):
$H(Y|X=x_i) \approx -(0.7 \log_2(0.7) + 0.2 \log_2(0.2) + 0.1 \log_2(0.1))$
$H(Y|X=x_i) \approx -(-0.360 + -0.464 + -0.332) = 1.156$ bits.

For a weekend day $x_k$ (with $p(x_k)=1/7$):
$H(Y|X=x_k) \approx -(0.4 \log_2(0.4) + 0.3 \log_2(0.3) + 0.3 \log_2(0.3))$
$H(Y|X=x_k) \approx -(-0.528 + -0.519 + -0.519) = 1.566$ bits.

Since weekdays and weekends have different probabilities, we need to consider the average. If we assume 5 weekdays and 2 weekend days, and the probability of picking a weekday is 5/7, and a weekend day is 2/7:
$H(Y|X) = P(\text{Weekday}) \times H(Y|\text{Weekday}) + P(\text{Weekend}) \times H(Y|\text{Weekend})$
$H(Y|X) \approx (5/7) \times 1.156 + (2/7) \times 1.566 \approx 0.826 + 0.447 \approx 1.273$ bits.

This is less than the unconditional entropy of weather $H(Y)$ (which we haven't calculated fully, but would be higher if weather patterns were more uniform across all days), indicating that knowing the day of the week reduces the uncertainty about the weather.

**Insights from Textbooks:**

*   **Goldsmith (2005):** Conditional entropy is crucial for understanding the capacity of a noisy channel, as it represents the output uncertainty given the input. (Chapter 2)
*   **Rappaport (2022):** While not explicitly using the term "conditional entropy," the analysis of signal-to-noise ratio (SNR) and its impact on achievable data rates implicitly deals with reducing uncertainty (noise) to improve information transmission.

---

### 6. Mutual Information

Mutual information, denoted as $I(X; Y)$, quantifies the amount of information that one random variable contains about another. It measures the reduction in uncertainty of one variable due to knowing the other.

**Definitions:**

1.  **Using Entropy:**
    $$I(X; Y) = H(X) - H(X|Y)$$
    $$I(X; Y) = H(Y) - H(Y|X)$$

2.  **Using Joint and Marginal Entropies:**
    $$I(X; Y) = H(X) + H(Y) - H(X, Y)$$

3.  **In terms of probability distributions:**
    $$I(X; Y) = \sum_{i} \sum_{j} p(x_i, y_j) \log_b\left(\frac{p(x_i, y_j)}{p(x_i) p(y_j)}\right)$$

**Key Properties:**

*   **Non-negativity:** $I(X; Y) \ge 0$.
*   **Symmetry:** $I(X; Y) = I(Y; X)$.
*   **Zero Mutual Information:** $I(X; Y) = 0$ if and only if $X$ and $Y$ are independent.
*   **Maximum Mutual Information:** $I(X; Y) \le \min(H(X), H(Y))$.
*   **Relation to Divergence:** $I(X; Y) = D_{KL}(p(x,y) || p(x)p(y))$, where $D_{KL}$ is the Kullback-Leibler divergence.

**Important Points:**

*   Mutual information is the key quantity in Shannon's Channel Coding Theorem, as it directly relates to the capacity of a channel.
*   It represents the "overlap" in information between two random variables.

**Example:**

Using the weather and day of the week example:
We calculated $H(X) = 2.81$ bits (for day of week) and $H(Y|X) \approx 1.273$ bits.
Assume we can calculate $H(Y)$ (the overall entropy of weather). Let's say, for simplicity of illustration, $H(Y) \approx 1.5$ bits (if weather patterns were less predictable overall).

Then, $I(X; Y) = H(Y) - H(Y|X) \approx 1.5 - 1.273 = 0.227$ bits.
This means that knowing the day of the week reduces the uncertainty about the weather by about 0.227 bits, on average.

If we assume $H(X|Y)$ is some value, say 2.6 bits, then $I(X; Y) = H(X) - H(X|Y) \approx 2.81 - 2.6 = 0.21$ bits. The values should ideally be close, depending on the accuracy of the estimations.

**Insights from Textbooks:**

*   **Goldsmith (2005):** Defines channel capacity as the maximum mutual information between the channel input and output over all possible input distributions: $C = \max_{p(x)} I(X; Y)$. This is a cornerstone of communication theory. (Chapter 2)
*   **Cover & Thomas (2006):** Provides a comprehensive treatment of mutual information and its various interpretations and applications. (Chapter 3)
*   **Haykin (2020):** In the context of digital communication, mutual information relates to the performance of modulation schemes and the ability to distinguish between transmitted symbols, influenced by noise.

---

### 7. Relevance to Course Outcomes

*   **CO1: Explain information theory measures such as entropy, conditional entropy, mutual information (Knowledge Level: K2)**
    *   This entire module directly addresses CO1 by defining and explaining these core measures.
*   **CO2: Apply source coding theorem for data compression. (Knowledge Level: K3)**
    *   Entropy sets the lower bound for lossless data compression. Understanding entropy is prerequisite for applying source coding theorems (like Shannon's Source Coding Theorem) which state that an average of $H(X)$ bits per symbol is necessary and sufficient for lossless compression.
*   **CO3: Apply channel coding for error detection and correction (Knowledge Level: K3)**
    *   Mutual information and conditional entropy are fundamental to understanding channel capacity, which is the upper bound on reliable communication rates achievable over a channel. Channel coding aims to get as close as possible to this capacity.
*   **CO4: Explain the basic Principle of wireless communication techniques (Knowledge Level: K2)**
    *   Information theory provides the fundamental limits and metrics for evaluating the efficiency of any communication technique, including wireless ones. Concepts like signal-to-noise ratio (SNR) directly impact mutual information.
*   **CO5: Describe the wireless channel models and analyse the performance of the modulation techniques for flat fading channels (Knowledge Level: K2)**
    *   Wireless channels are characterized by their impact on information, often modeled as noisy channels. Entropy and mutual information help quantify the information loss due to fading and noise.
*   **CO6: Identify the advantages of various diversity and equalization techniques for improving the wireless receiver performance . (Knowledge Level: K3)**
    *   Diversity and equalization techniques aim to combat channel impairments like fading. Their effectiveness can be analyzed by how much they increase the mutual information between the transmitted and received signals.

---

### 8. Practice Questions and Exercises

**Question 1 (Discrete Entropy):**
A random variable $X$ can take values {0, 1, 2} with probabilities $P(X=0) = 0.5$, $P(X=1) = 0.25$, $P(X=2) = 0.25$. Calculate the entropy $H(X)$ in bits.

**Question 2 (Maximum Entropy):**
A random variable $X$ can take $n$ values. What is the maximum possible entropy $H(X)$ and under what conditions is it achieved?

**Question 3 (Joint and Conditional Entropy):**
Two fair dice are rolled. Let $X$ be the outcome of the first die and $Y$ be the outcome of the second die.
a) Calculate $H(X)$ and $H(Y)$.
b) Calculate $H(X, Y)$.
c) Calculate $H(Y|X)$.
d) Calculate $I(X; Y)$.

**Question 4 (Continuous Entropy):**
A random variable $X$ is uniformly distributed over the interval $[0, 10]$. Calculate its differential entropy $h(X)$ in nats (natural logarithm).

**Question 5 (Mutual Information):**
Consider a binary symmetric channel (BSC) with crossover probability $p$. The input $X$ is uniformly distributed over {0, 1}. Let $Y$ be the output.
a) Find $H(X)$.
b) Find $H(Y|X)$.
c) Find $I(X; Y)$ in terms of $p$.

---

### 9. Answers to Practice Questions

**Answer 1:**
$H(X) = -(0.5 \log_2(0.5) + 0.25 \log_2(0.25) + 0.25 \log_2(0.25))$
$H(X) = -(0.5 \times -1 + 0.25 \times -2 + 0.25 \times -2)$
$H(X) = -(-0.5 - 0.5 - 0.5) = -(-1.5) = 1.5 \text{ bits}$

**Answer 2:**
The maximum possible entropy $H(X)$ for a random variable with $n$ outcomes is $\log_b(n)$ bits (if base 2 is used). This is achieved when the probability distribution is uniform, i.e., $p_i = 1/n$ for all $i=1, \dots, n$.

**Answer 3:**
a) For a fair die, there are 6 equally likely outcomes.
$H(X) = H(Y) = \log_2(6) = \log_2(2 \times 3) = 1 + \log_2(3) \approx 1 + 1.585 = 2.585 \text{ bits}$

b) Since the two dice rolls are independent, $H(X, Y) = H(X) + H(Y)$.
$H(X, Y) = 2.585 + 2.585 = 5.17 \text{ bits}$.
Alternatively, there are $6 \times 6 = 36$ equally likely outcomes for $(X, Y)$.
$H(X, Y) = \log_2(36) = \log_2(6^2) = 2 \log_2(6) = 2 \times 2.585 = 5.17 \text{ bits}$.

c) Since $X$ and $Y$ are independent, knowing $X$ provides no information about $Y$. Therefore, the conditional entropy $H(Y|X)$ is equal to the unconditional entropy $H(Y)$.
$H(Y|X) = H(Y) = 2.585 \text{ bits}$.

d) Using the formula $I(X; Y) = H(Y) - H(Y|X)$:
$I(X; Y) = 2.585 - 2.585 = 0 \text{ bits}$.
This confirms that the two rolls are independent, as expected.

**Answer 4:**
For a uniform distribution over $[0, a]$, the differential entropy is $\log_b(a)$. Here, $a=10$ and we want the answer in nats (base $e$).
$h(X) = \ln(10) \text{ nats}$.
$\ln(10) \approx 2.3026$ nats.

**Answer 5:**
a) $X$ is uniformly distributed over {0, 1}, so $P(X=0) = 0.5$ and $P(X=1) = 0.5$.
$H(X) = -(0.5 \log_2(0.5) + 0.5 \log_2(0.5)) = 1 \text{ bit}$.

b) In a BSC, $P(Y|X=0) = P(Y=0|X=0) = 1-p$ and $P(Y=1|X=0) = P(Y=1|X=0) = p$.
Similarly, $P(Y=0|X=1) = P(Y=0|X=1) = p$ and $P(Y=1|X=1) = P(Y=1|X=1) = 1-p$.
The conditional probability distribution $P(Y|X=x)$ is the same for $x=0$ and $x=1$.
$H(Y|X=0) = -( (1-p) \log_2(1-p) + p \log_2(p) )$
$H(Y|X=1) = -( p \log_2(p) + (1-p) \log_2(1-p) )$
So, $H(Y|X) = P(X=0) H(Y|X=0) + P(X=1) H(Y|X=1)$
$H(Y|X) = 0.5 \left( -( (1-p) \log_2(1-p) + p \log_2(p) ) \right) + 0.5 \left( -( p \log_2(p) + (1-p) \log_2(1-p) ) \right)$
$H(Y|X) = -( (1-p) \log_2(1-p) + p \log_2(p) )$ bits. This is the entropy of a Bernoulli distribution with parameter $p$.

c) $I(X; Y) = H(X) - H(X|Y)$. We need $H(X|Y)$.
Alternatively, $I(X; Y) = H(Y) - H(Y|X)$.
We need $H(Y)$. For $Y=0$, $P(Y=0) = P(Y=0|X=0)P(X=0) + P(Y=0|X=1)P(X=1)$
$P(Y=0) = (1-p)(0.5) + p(0.5) = 0.5(1-p+p) = 0.5$.
Similarly, $P(Y=1) = P(Y=1|X=0)P(X=0) + P(Y=1|X=1)P(X=1) = p(0.5) + (1-p)(0.5) = 0.5$.
So $Y$ is also uniformly distributed, and $H(Y) = 1$ bit.
$I(X; Y) = H(Y) - H(Y|X) = 1 - (-( (1-p) \log_2(1-p) + p \log_2(p) ))$
$I(X; Y) = 1 + (1-p) \log_2(1-p) + p \log_2(p)$ bits.
This is $1 - H_b(p)$, where $H_b(p)$ is the binary entropy function.

---

### 10. Important Points to Remember

*   **Entropy quantifies uncertainty.** Higher entropy means more uncertainty and more information.
*   **For discrete variables, entropy is always non-negative.** $0 \le H(X) \le \log_b(n)$.
*   **Maximum entropy occurs for uniform distributions.**
*   **Differential entropy for continuous variables** can be negative and is not invariant to scaling.
*   **Joint entropy** measures uncertainty in a pair of variables.
*   **Conditional entropy** measures remaining uncertainty after knowing another variable, and $H(Y|X) \le H(Y)$.
*   **Mutual information** measures the reduction in uncertainty and is the key to channel capacity. $I(X; Y) \ge 0$.
*   **Independence implies zero mutual information.**
*   **Shannon's theorems** link entropy and mutual information to fundamental limits of compression and communication.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 11. References and Further Reading

*   **Goldsmith, A. (2005). *Wireless Communications*. Cambridge University Press.** (Chapter 2 for information theory basics and channel capacity)
*   **Cover, T. M., & Thomas, J. A. (2006). *Elements of Information Theory* (2nd ed.). Wiley-Interscience.** (Chapters 2, 3, and 8 for in-depth coverage of entropy, joint/conditional entropy, mutual information, and continuous entropy).
*   **Rappaport, T. S. (2022). *Wireless Communication: Principles and Practice* (2nd ed.). Pearson Education.** (While less theoretical, the principles of SNR and capacity relate to information theory concepts).
*   **Haykin, S. (2020). *Communication Systems* (4th ed.). John Wiley and Sons Inc.** (Provides context on how information is processed and transmitted).

---