---
title: "Joint pmf of two discrete random variables"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 1: Random variables"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35d98"
status: "completed"
scrapedAt: "2026-05-23T16:16:49.968Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4
## Module 1: Random Variables
### Topic: Joint Probability Mass Function (pmf) of Two Discrete Random Variables

---

### 1. Introduction to Joint Random Variables

**Course Outcomes Alignment:**
*   **CO1:** This topic directly supports CO1 by extending the concepts of discrete random variables to scenarios involving two or more variables. Understanding their joint behavior is crucial for applying these concepts to random phenomena. (Knowledge Level: K3)

**Key Concept:** In many real-world electrical engineering problems, we encounter situations where multiple random phenomena occur simultaneously. Instead of analyzing them in isolation, it's often more informative and practical to study their combined behavior. This is where the concept of joint random variables comes into play.

**Definition:**
A **joint random variable** is a pair of random variables, say $X$ and $Y$, that map the outcomes of an experiment to real numbers. The outcome of the experiment determines the values of both $X$ and $Y$ simultaneously.

**Important Point to Remember:** When we talk about joint behavior, we are interested in how the values of $X$ and $Y$ relate to each other, not just their individual distributions.

---

### 2. Joint Probability Mass Function (pmf)

**Course Outcomes Alignment:**
*   **CO1:** This section delves into the fundamental concept of the joint pmf, which is the core tool for describing the probability distribution of two discrete random variables. (Knowledge Level: K3)

**Key Concept:** The joint pmf provides the probability that two discrete random variables $X$ and $Y$ take on specific values simultaneously.

**Definition:**
Let $X$ and $Y$ be two discrete random variables. The **joint probability mass function (joint pmf)** of $X$ and $Y$, denoted by $p_{X,Y}(x, y)$, is defined as:

$p_{X,Y}(x, y) = P(X = x \text{ and } Y = y)$

for all possible pairs of values $(x, y)$ that $X$ and $Y$ can take.

**Properties of a Joint pmf (Devore, 9th ed., Chapter 3.4):**
1.  **Non-negativity:** $p_{X,Y}(x, y) \ge 0$ for all $x, y$.
2.  **Normalization:** The sum of the joint pmf over all possible pairs of values must equal 1:
    $\sum_{x} \sum_{y} p_{X,Y}(x, y) = 1$
    where the summation is over all possible values of $X$ and $Y$.

**Example (Devore, 9th ed., Example 3.17):**
Consider an experiment where a batch of 10 components is inspected. Let $X$ be the number of defective components in the first 5 inspected, and $Y$ be the number of defective components in the last 5 inspected. Suppose there are 3 defective components in total in the batch of 10. The joint pmf $p_{X,Y}(x, y)$ can be calculated using combinations. For instance, if $X=1$ and $Y=2$, it means 1 defective in the first 5 and 2 in the last 5, which sums up to the total of 3 defectives.

The possible values for $(X, Y)$ are pairs $(x, y)$ such that $x \ge 0$, $y \ge 0$, $x \le 5$, $y \le 5$, and $x+y = 3$.
Possible pairs are: (0, 3), (1, 2), (2, 1), (3, 0).

The probability for $(X=x, Y=y)$ can be calculated as:
$p_{X,Y}(x, y) = \frac{\binom{3}{x} \binom{7}{5-x}}{\binom{10}{5}} \times \frac{\binom{3-x}{y} \binom{7-(5-x)}{5-y}}{\binom{5}{5-y}}$ - this is incorrect, the sampling is done without replacement from the entire batch for defining X and Y.
A more direct way for this specific problem is:
$p_{X,Y}(x, y) = \frac{\binom{3}{x} \binom{7}{5-x} \binom{3-x}{y} \binom{7-(5-x)}{5-y}}{\binom{10}{5}}$ if $X$ is number of defectives in first 5 and $Y$ is number of defectives in last 5.

Let's re-evaluate the example for clarity with a simpler approach. Suppose we select two balls from an urn containing 3 red and 2 blue balls without replacement. Let $X$ be the color of the first ball (1 for red, 0 for blue) and $Y$ be the color of the second ball (1 for red, 0 for blue).

Possible outcomes for $(X, Y)$:
*   (1, 1): Red then Red. $P(X=1, Y=1) = P(\text{1st is R}) \times P(\text{2nd is R} | \text{1st is R}) = \frac{3}{5} \times \frac{2}{4} = \frac{6}{20} = 0.3$
*   (1, 0): Red then Blue. $P(X=1, Y=0) = P(\text{1st is R}) \times P(\text{2nd is B} | \text{1st is R}) = \frac{3}{5} \times \frac{2}{4} = \frac{6}{20} = 0.3$
*   (0, 1): Blue then Red. $P(X=0, Y=1) = P(\text{1st is B}) \times P(\text{2nd is R} | \text{1st is B}) = \frac{2}{5} \times \frac{3}{4} = \frac{6}{20} = 0.3$
*   (0, 0): Blue then Blue. $P(X=0, Y=0) = P(\text{1st is B}) \times P(\text{2nd is B} | \text{1st is B}) = \frac{2}{5} \times \frac{1}{4} = \frac{2}{20} = 0.1$

The joint pmf table:
| $Y$ \ $X$ | 0   | 1   |
| :-------- | :-- | :-- |
| 0         | 0.1 | 0.3 |
| 1         | 0.3 | 0.3 |

Sum of probabilities: $0.1 + 0.3 + 0.3 + 0.3 = 1$.

---

### 3. Marginal Probability Mass Functions

**Course Outcomes Alignment:**
*   **CO1:** This section explains how to derive the individual probability distributions (marginal pmfs) from the joint pmf, which is a direct application of understanding joint behavior. (Knowledge Level: K3)

**Key Concept:** The marginal pmf of a single random variable in a joint distribution gives its probability distribution without considering the values of the other random variable(s).

**Definition:**
Given the joint pmf $p_{X,Y}(x, y)$, the **marginal pmf of X**, denoted by $p_X(x)$, is obtained by summing the joint pmf over all possible values of $Y$:

$p_X(x) = \sum_{y} p_{X,Y}(x, y)$

Similarly, the **marginal pmf of Y**, denoted by $p_Y(y)$, is obtained by summing the joint pmf over all possible values of $X$:

$p_Y(y) = \sum_{x} p_{X,Y}(x, y)$

**Example (Continuing from the urn example):**
From the joint pmf table:
| $Y$ \ $X$ | 0   | 1   | $p_Y(y)$ |
| :-------- | :-- | :-- | :------- |
| 0         | 0.1 | 0.3 | 0.4      |
| 1         | 0.3 | 0.3 | 0.6      |
| $p_X(x)$  | 0.4 | 0.6 |          |

*   Marginal pmf of $X$:
    *   $p_X(0) = p_{X,Y}(0, 0) + p_{X,Y}(0, 1) = 0.1 + 0.3 = 0.4$
    *   $p_X(1) = p_{X,Y}(1, 0) + p_{X,Y}(1, 1) = 0.3 + 0.3 = 0.6$
    *   Check: $p_X(0) + p_X(1) = 0.4 + 0.6 = 1$.

*   Marginal pmf of $Y$:
    *   $p_Y(0) = p_{X,Y}(0, 0) + p_{X,Y}(1, 0) = 0.1 + 0.3 = 0.4$
    *   $p_Y(1) = p_{X,Y}(0, 1) + p_{X,Y}(1, 1) = 0.3 + 0.3 = 0.6$
    *   Check: $p_Y(0) + p_Y(1) = 0.4 + 0.6 = 1$.

**Reference:** This concept is fundamental and covered in detail in the introductory chapters on joint distributions in all listed textbooks, particularly Devore (9th ed., Section 3.4) and Veerarajan (3rd ed., Chapter 4).

---

### 4. Independence of Discrete Random Variables

**Course Outcomes Alignment:**
*   **CO1:** Understanding independence is a key aspect of analyzing the relationship between random variables, directly contributing to CO1. (Knowledge Level: K3)

**Key Concept:** Two discrete random variables $X$ and $Y$ are independent if the occurrence of a specific value for $X$ does not affect the probability of the occurrence of any specific value for $Y$, and vice-versa.

**Definition:**
Two discrete random variables $X$ and $Y$ are **independent** if and only if their joint pmf is the product of their marginal pmfs for all possible values of $x$ and $y$:

$p_{X,Y}(x, y) = p_X(x) \cdot p_Y(y)$  for all $x, y$.

**Important Point to Remember:** If $X$ and $Y$ are independent, then $P(X=x \text{ and } Y=y) = P(X=x) \cdot P(Y=y)$. The converse is also true: if the joint pmf factors into the product of the marginals, then $X$ and $Y$ are independent.

**Example (Continuing from the urn example):**
| $Y$ \ $X$ | 0   | 1   | $p_Y(y)$ |
| :-------- | :-- | :-- | :------- |
| 0         | 0.1 | 0.3 | 0.4      |
| 1         | 0.3 | 0.3 | 0.6      |
| $p_X(x)$  | 0.4 | 0.6 |          |

Let's check for independence:
*   For (0, 0): $p_{X,Y}(0, 0) = 0.1$. $p_X(0) \cdot p_Y(0) = 0.4 \cdot 0.4 = 0.16$.
    Since $0.1 \neq 0.16$, $X$ and $Y$ are **not independent** in this example. This is expected because the selection of the second ball depends on the color of the first ball (sampling without replacement).

**Example of Independent Variables:**
Suppose we flip two fair coins independently. Let $X=1$ if the first coin is heads, $X=0$ if tails. Let $Y=1$ if the second coin is heads, $Y=0$ if tails.
$P(X=1) = 0.5$, $P(X=0) = 0.5$.
$P(Y=1) = 0.5$, $P(Y=0) = 0.5$.

The joint pmf is:
$p_{X,Y}(1, 1) = P(H, H) = 0.5 \times 0.5 = 0.25$
$p_{X,Y}(1, 0) = P(H, T) = 0.5 \times 0.5 = 0.25$
$p_{X,Y}(0, 1) = P(T, H) = 0.5 \times 0.5 = 0.25$
$p_{X,Y}(0, 0) = P(T, T) = 0.5 \times 0.5 = 0.25$

Check for independence:
For (1, 1): $p_{X,Y}(1, 1) = 0.25$. $p_X(1) \cdot p_Y(1) = 0.5 \cdot 0.5 = 0.25$. This holds.
Similarly, it holds for all other pairs, confirming independence.

**Reference:** Devore (9th ed., Section 3.4) and Veerarajan (3rd ed., Chapter 4) discuss independence extensively.

---

### 5. Conditional Probability Mass Functions

**Course Outcomes Alignment:**
*   **CO1:** Understanding conditional probability is essential for analyzing how the occurrence of one event influences the probability of another, crucial for CO1. (Knowledge Level: K3)

**Key Concept:** The conditional pmf describes the probability distribution of one random variable given that another random variable has taken on a specific value.

**Definition:**
The **conditional pmf of Y given X=x**, denoted by $p_{Y|X=x}(y)$, is defined as:

$p_{Y|X=x}(y) = P(Y = y | X = x) = \frac{P(X = x \text{ and } Y = y)}{P(X = x)} = \frac{p_{X,Y}(x, y)}{p_X(x)}$

provided that $p_X(x) > 0$.

Similarly, the **conditional pmf of X given Y=y**, denoted by $p_{X|Y=y}(x)$, is defined as:

$p_{X|Y=y}(x) = P(X = x | Y = y) = \frac{P(X = x \text{ and } Y = y)}{P(Y = y)} = \frac{p_{X,Y}(x, y)}{p_Y(y)}$

provided that $p_Y(y) > 0$.

**Important Point to Remember:** For independent random variables, the conditional pmf of $Y$ given $X=x$ is simply the marginal pmf of $Y$, i.e., $p_{Y|X=x}(y) = p_Y(y)$. This is because knowing the value of $X$ provides no additional information about $Y$.

**Example (Continuing from the urn example):**
Let's calculate $p_{Y|X=1}(y)$:
$p_X(1) = 0.6$.

*   $p_{Y|X=1}(0) = \frac{p_{X,Y}(1, 0)}{p_X(1)} = \frac{0.3}{0.6} = 0.5$
*   $p_{Y|X=1}(1) = \frac{p_{X,Y}(1, 1)}{p_X(1)} = \frac{0.3}{0.6} = 0.5$

Check: $p_{Y|X=1}(0) + p_{Y|X=1}(1) = 0.5 + 0.5 = 1$.
This means if the first ball drawn is red ($X=1$), then the probability of the second ball being blue is 0.5, and the probability of it being red is 0.5. This aligns with drawing the second ball from the remaining 4 balls (2 red, 2 blue).

**Reference:** This is a core concept in probability and is well-covered in Devore (9th ed., Section 3.4) and Veerarajan (3rd ed., Chapter 4).

---

### 6. Expected Value and Variance of Joint Random Variables

**Course Outcomes Alignment:**
*   **CO1:** Calculating expected values and variances from joint distributions allows for a deeper understanding of the central tendency and spread of the combined phenomena, crucial for CO1. (Knowledge Level: K3)

**Key Concepts:**
*   **Joint Expected Value:** The expected value of a function $h(X, Y)$ of two discrete random variables.
*   **Covariance:** A measure of the linear relationship between two random variables.
*   **Correlation Coefficient:** A normalized version of covariance.

**Definitions:**

*   **Expected Value of a function of two random variables:**
    $E[h(X, Y)] = \sum_{x} \sum_{y} h(x, y) \cdot p_{X,Y}(x, y)$

*   **Expected Value of X and Y:**
    $E[X] = \sum_{x} x \cdot p_X(x)$ (using marginal pmf)
    $E[Y] = \sum_{y} y \cdot p_Y(y)$ (using marginal pmf)
    Alternatively, $E[X] = E[X]$ and $E[Y] = E[Y]$ can be calculated directly from the joint pmf:
    $E[X] = \sum_{x} \sum_{y} x \cdot p_{X,Y}(x, y)$
    $E[Y] = \sum_{x} \sum_{y} y \cdot p_{X,Y}(x, y)$

*   **Covariance of X and Y:**
    $Cov(X, Y) = E[(X - E[X])(Y - E[Y])]$
    This can also be calculated as:
    $Cov(X, Y) = E[XY] - E[X]E[Y]$
    where $E[XY] = \sum_{x} \sum_{y} (x \cdot y) \cdot p_{X,Y}(x, y)$.

*   **Correlation Coefficient:**
    $\rho_{X,Y} = \frac{Cov(X, Y)}{\sigma_X \sigma_Y}$
    where $\sigma_X = \sqrt{Var(X)}$ and $\sigma_Y = \sqrt{Var(Y)}$ are the standard deviations of $X$ and $Y$.

*   **Variance of X and Y:**
    $Var(X) = E[X^2] - (E[X])^2$
    $Var(Y) = E[Y^2] - (E[Y])^2$
    where $E[X^2] = \sum_{x} x^2 \cdot p_X(x)$ and $E[Y^2] = \sum_{y} y^2 \cdot p_Y(y)$.

**Important Properties:**
*   If $X$ and $Y$ are independent, then $Cov(X, Y) = 0$ and $\rho_{X,Y} = 0$. **However, the converse is NOT always true!** $Cov(X,Y)=0$ or $\rho_{X,Y}=0$ does not necessarily imply independence (unless $X$ and $Y$ are jointly normally distributed, which is a continuous case).
*   $Var(X+Y) = Var(X) + Var(Y) + 2 Cov(X, Y)$.
*   If $X$ and $Y$ are independent, $Var(X+Y) = Var(X) + Var(Y)$.

**Example (Continuing from the urn example):**
We have the joint pmf table and marginals:
| $Y$ \ $X$ | 0   | 1   | $p_Y(y)$ |
| :-------- | :-- | :-- | :------- |
| 0         | 0.1 | 0.3 | 0.4      |
| 1         | 0.3 | 0.3 | 0.6      |
| $p_X(x)$  | 0.4 | 0.6 |          |

*   $E[X] = (0 \times 0.4) + (1 \times 0.6) = 0.6$
*   $E[Y] = (0 \times 0.4) + (1 \times 0.6) = 0.6$

*   $E[XY] = (0 \times 0 \times 0.1) + (0 \times 1 \times 0.3) + (1 \times 0 \times 0.3) + (1 \times 1 \times 0.3) = 0.3$

*   $Cov(X, Y) = E[XY] - E[X]E[Y] = 0.3 - (0.6 \times 0.6) = 0.3 - 0.36 = -0.06$
    The negative covariance indicates a tendency for $X$ and $Y$ to move in opposite directions (if $X$ is large, $Y$ tends to be small, and vice-versa). This makes sense as if the first ball is red, there are fewer red balls left for the second draw, increasing the chance of drawing a blue ball.

*   To calculate variance, we need $E[X^2]$ and $E[Y^2]$:
    *   $E[X^2] = (0^2 \times 0.4) + (1^2 \times 0.6) = 0.6$
    *   $E[Y^2] = (0^2 \times 0.4) + (1^2 \times 0.6) = 0.6$

*   $Var(X) = E[X^2] - (E[X])^2 = 0.6 - (0.6)^2 = 0.6 - 0.36 = 0.24$
*   $Var(Y) = E[Y^2] - (E[Y])^2 = 0.6 - (0.6)^2 = 0.6 - 0.36 = 0.24$

*   $\sigma_X = \sqrt{0.24} \approx 0.4899$
*   $\sigma_Y = \sqrt{0.24} \approx 0.4899$

*   $\rho_{X,Y} = \frac{-0.06}{0.4899 \times 0.4899} \approx \frac{-0.06}{0.24} = -0.25$

**Reference:** Devore (9th ed., Section 3.4) and Veerarajan (3rd ed., Chapter 4) provide formulas and examples for these calculations. Papoulis & Pillai (4th ed.) also offers a thorough treatment of these concepts in the context of stochastic processes.

---

### 7. Applications in Electrical Science

**Course Outcomes Alignment:**
*   **CO1 & CO4:** This section connects the theoretical concepts of joint pmfs to practical electrical engineering problems, demonstrating their utility in analyzing random phenomena and processes. (Knowledge Level: K3)

**Examples:**

1.  **System Reliability:** Consider a system with two components, $X$ and $Y$, operating in parallel. Let $X$ be the operating status of component 1 (1 if operating, 0 if failed) and $Y$ be the operating status of component 2. The joint pmf $p_{X,Y}(x, y)$ can describe the probability that both are working, only one is working, or neither is working. This is crucial for calculating the overall system reliability.

2.  **Signal Processing:** In communication systems, we might have two sources of noise, $N_1$ and $N_2$, affecting a signal. The joint pmf of $N_1$ and $N_2$ can help in understanding their combined effect on the signal-to-noise ratio (SNR) or in designing better noise cancellation techniques. If the noise sources are correlated, their joint behavior is critical.

3.  **Traffic Flow Analysis:** In a network, $X$ could be the number of packets arriving at node A per second, and $Y$ the number of packets arriving at node B per second. The joint pmf helps understand traffic patterns and potential congestion issues when both nodes are busy.

4.  **Component Matching:** When designing circuits with matched components, the joint distribution of their parameters (e.g., resistance, capacitance) is important. For instance, if $X$ and $Y$ are the resistances of two resistors, their joint pmf describes the probability of specific resistance pairs, impacting circuit performance.

**Reference:** While specific applications might be more detailed in specialized texts on stochastic processes in electrical engineering, the fundamental understanding of joint pmfs from texts like Devore and Veerarajan is the bedrock for these applications. Ross (6th ed.) also provides examples of joint distributions in engineering contexts.

---

### 8. Practice Questions and Answers

**Question 1:**
Two discrete random variables $X$ and $Y$ have the following joint pmf:
$p_{X,Y}(x, y) = k(x+y)$ for $x \in \{1, 2\}$ and $y \in \{1, 2\}$.
Find the value of $k$.

**Answer 1:**
We know that the sum of all probabilities must be 1.
The possible pairs $(x, y)$ are (1,1), (1,2), (2,1), (2,2).
$p_{X,Y}(1,1) = k(1+1) = 2k$
$p_{X,Y}(1,2) = k(1+2) = 3k$
$p_{X,Y}(2,1) = k(2+1) = 3k$
$p_{X,Y}(2,2) = k(2+2) = 4k$

Sum of probabilities: $2k + 3k + 3k + 4k = 12k$.
Setting the sum to 1: $12k = 1 \implies k = \frac{1}{12}$.
So, $p_{X,Y}(x, y) = \frac{x+y}{12}$ for $x, y \in \{1, 2\}$.

---

**Question 2:**
Using the joint pmf from Question 1 ($p_{X,Y}(x, y) = \frac{x+y}{12}$ for $x, y \in \{1, 2\}$), find the marginal pmfs $p_X(x)$ and $p_Y(y)$.

**Answer 2:**
*   Marginal pmf of $X$:
    $p_X(1) = p_{X,Y}(1,1) + p_{X,Y}(1,2) = \frac{1+1}{12} + \frac{1+2}{12} = \frac{2}{12} + \frac{3}{12} = \frac{5}{12}$
    $p_X(2) = p_{X,Y}(2,1) + p_{X,Y}(2,2) = \frac{2+1}{12} + \frac{2+2}{12} = \frac{3}{12} + \frac{4}{12} = \frac{7}{12}$
    Check: $p_X(1) + p_X(2) = \frac{5}{12} + \frac{7}{12} = \frac{12}{12} = 1$.

*   Marginal pmf of $Y$:
    $p_Y(1) = p_{X,Y}(1,1) + p_{X,Y}(2,1) = \frac{1+1}{12} + \frac{2+1}{12} = \frac{2}{12} + \frac{3}{12} = \frac{5}{12}$
    $p_Y(2) = p_{X,Y}(1,2) + p_{X,Y}(2,2) = \frac{1+2}{12} + \frac{2+2}{12} = \frac{3}{12} + \frac{4}{12} = \frac{7}{12}$
    Check: $p_Y(1) + p_Y(2) = \frac{5}{12} + \frac{7}{12} = \frac{12}{12} = 1$.

---

**Question 3:**
Are the random variables $X$ and $Y$ from Question 1 independent? Justify your answer.

**Answer 3:**
For independence, we need $p_{X,Y}(x, y) = p_X(x) \cdot p_Y(y)$ for all $x, y$.
Let's check for $(x,y) = (1,1)$:
$p_{X,Y}(1,1) = \frac{1+1}{12} = \frac{2}{12} = \frac{1}{6}$
$p_X(1) \cdot p_Y(1) = \frac{5}{12} \cdot \frac{5}{12} = \frac{25}{144}$
Since $\frac{1}{6} \neq \frac{25}{144}$, the random variables $X$ and $Y$ are **not independent**.

---

**Question 4:**
Calculate $E[X]$, $E[Y]$, $Var(X)$, $Var(Y)$, and $Cov(X,Y)$ for the joint pmf in Question 1.

**Answer 4:**
We have $p_X(1) = 5/12, p_X(2) = 7/12$ and $p_Y(1) = 5/12, p_Y(2) = 7/12$.

*   $E[X] = 1 \cdot p_X(1) + 2 \cdot p_X(2) = 1 \cdot \frac{5}{12} + 2 \cdot \frac{7}{12} = \frac{5+14}{12} = \frac{19}{12}$
*   $E[Y] = 1 \cdot p_Y(1) + 2 \cdot p_Y(2) = 1 \cdot \frac{5}{12} + 2 \cdot \frac{7}{12} = \frac{5+14}{12} = \frac{19}{12}$

*   $E[X^2] = 1^2 \cdot p_X(1) + 2^2 \cdot p_X(2) = 1 \cdot \frac{5}{12} + 4 \cdot \frac{7}{12} = \frac{5+28}{12} = \frac{33}{12} = \frac{11}{4}$
*   $Var(X) = E[X^2] - (E[X])^2 = \frac{11}{4} - (\frac{19}{12})^2 = \frac{11}{4} - \frac{361}{144} = \frac{11 \times 36 - 361}{144} = \frac{396 - 361}{144} = \frac{35}{144}$
*   $Var(Y) = Var(X) = \frac{35}{144}$ (due to symmetry)

*   $E[XY] = \sum_{x} \sum_{y} xy \cdot p_{X,Y}(x, y)$
    $E[XY] = (1 \cdot 1) \cdot \frac{2}{12} + (1 \cdot 2) \cdot \frac{3}{12} + (2 \cdot 1) \cdot \frac{3}{12} + (2 \cdot 2) \cdot \frac{4}{12}$
    $E[XY] = \frac{2}{12} + \frac{6}{12} + \frac{6}{12} + \frac{16}{12} = \frac{2+6+6+16}{12} = \frac{30}{12} = \frac{5}{2}$

*   $Cov(X, Y) = E[XY] - E[X]E[Y] = \frac{5}{2} - (\frac{19}{12}) \cdot (\frac{19}{12})$
    $Cov(X, Y) = \frac{5}{2} - \frac{361}{144} = \frac{5 \times 72 - 361}{144} = \frac{360 - 361}{144} = -\frac{1}{144}$

---

### 9. Important Points to Remember

*   **Joint pmf $p_{X,Y}(x,y)$** is the fundamental tool for describing the probability distribution of two discrete random variables. It must be non-negative and sum to 1.
*   **Marginal pmfs $p_X(x)$ and $p_Y(y)$** are obtained by summing the joint pmf over the other variable.
*   **Independence** is characterized by $p_{X,Y}(x, y) = p_X(x) \cdot p_Y(y)$ for all $x, y$.
*   **Conditional pmfs $p_{Y|X=x}(y)$ and $p_{X|Y=y}(x)$** describe the distribution of one variable given the value of the other.
*   **Covariance $Cov(X, Y)$** measures the linear relationship. If $X$ and $Y$ are independent, $Cov(X,Y)=0$. However, the converse is not generally true.
*   The concepts of joint pmfs are foundational for understanding more complex random processes and their behavior in electrical systems.

---
