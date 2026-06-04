---
title: "Marginal pmf"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 1: Random variables"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462eba"
status: "completed"
scrapedAt: "2026-05-20T17:54:36.889Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4
## Module 1: Random Variables
### Topic: Marginal Probability Mass Function (pmf)

---

### **1. Introduction: The Need for Marginal Distributions**

In many physical science applications, we are interested in phenomena that can be described by multiple random variables. For instance, we might measure both the temperature and pressure of a gas, or the position and momentum of a particle. When we have two or more random variables, we often want to understand the behavior of each individual variable, ignoring the information provided by the others. This is where the concept of marginal distributions, specifically the marginal probability mass function (pmf) for discrete random variables, becomes crucial.

**Key Concept:** When dealing with **joint probability distributions** of multiple discrete random variables, the **marginal probability mass function (pmf)** of a single random variable is obtained by "summing out" the probabilities of the other random variables.

This topic directly relates to **CO1: Understand the concept, properties and important models of discrete random variables and to apply in suitable random phenomena.** By understanding marginal pmfs, we are gaining a deeper insight into the behavior of individual discrete random variables within a multivariate context.

---

### **2. Joint Probability Mass Function (pmf)**

Before defining marginal pmf, we must first understand the joint pmf.

**Definition:** For two discrete random variables $X$ and $Y$, the **joint probability mass function**, denoted by $p_{XY}(x, y)$, gives the probability that $X$ takes the value $x$ and $Y$ takes the value $y$ simultaneously.

$$p_{XY}(x, y) = P(X=x, Y=y)$$

**Properties of Joint pmf:**
*   $p_{XY}(x, y) \ge 0$ for all possible values of $x$ and $y$.
*   $\sum_{x} \sum_{y} p_{XY}(x, y) = 1$, where the sums are over all possible values of $X$ and $Y$.

**Reference:** This concept is fundamental and is discussed in **Devore (9th ed.)**, Chapter 4, and **Ross (6th ed.)**, Chapter 3.

**Example (Devore, 9th ed., Chapter 4 Example 4.1):**
Consider a scenario where a manufacturer produces integrated circuits (ICs). Let $X$ be the number of defective ICs found in a sample of size 2, and let $Y$ be the number of defective ICs found in a second sample of size 2. The joint pmf $p_{XY}(x, y)$ can be represented in a table:

| $x \downarrow, y \rightarrow$ | 0     | 1     | 2     |
| :--------------------------- | :---- | :---- | :---- |
| 0                            | 0.49  | 0.24  | 0.04  |
| 1                            | 0.16  | 0.05  | 0.01  |
| 2                            | 0.01  | 0.00  | 0.00  |

Here, $p_{XY}(0, 1) = 0.24$ means the probability of finding 0 defective ICs in the first sample AND 1 defective IC in the second sample is 0.24.

---

### **3. Marginal Probability Mass Function (pmf)**

Now, we can define the marginal pmf for individual random variables from a joint distribution.

**Definition:** For a joint probability mass function $p_{XY}(x, y)$ of two discrete random variables $X$ and $Y$, the **marginal probability mass function of X**, denoted by $p_X(x)$, is given by summing the joint pmf over all possible values of $Y$:

$$p_X(x) = P(X=x) = \sum_{y} p_{XY}(x, y)$$

Similarly, the **marginal probability mass function of Y**, denoted by $p_Y(y)$, is given by summing the joint pmf over all possible values of $X$:

$$p_Y(y) = P(Y=y) = \sum_{x} p_{XY}(x, y)$$

**Interpretation:** The marginal pmf $p_X(x)$ represents the probability distribution of $X$ alone, irrespective of the value of $Y$. It tells us the likelihood of $X$ taking a specific value $x$ considering all possible outcomes for $Y$.

**Reference:** This is a core concept in **Devore (9th ed.)** Chapter 4, **Ross (6th ed.)** Chapter 3, and **Papoulis & Pillai (4th ed.)** Chapter 3.

**Example (Continuing from Devore Example 4.1):**
Let's find the marginal pmfs for $X$ and $Y$ using the table above.

**Marginal pmf of X ($p_X(x)$):**
To find $p_X(0)$, we sum the row corresponding to $x=0$:
$p_X(0) = p_{XY}(0, 0) + p_{XY}(0, 1) + p_{XY}(0, 2) = 0.49 + 0.24 + 0.04 = 0.77$

To find $p_X(1)$, we sum the row corresponding to $x=1$:
$p_X(1) = p_{XY}(1, 0) + p_{XY}(1, 1) + p_{XY}(1, 2) = 0.16 + 0.05 + 0.01 = 0.22$

To find $p_X(2)$, we sum the row corresponding to $x=2$:
$p_X(2) = p_{XY}(2, 0) + p_{XY}(2, 1) + p_{XY}(2, 2) = 0.01 + 0.00 + 0.00 = 0.01$

So, the marginal pmf of $X$ is:
$p_X(0) = 0.77$
$p_X(1) = 0.22$
$p_X(2) = 0.01$

*(Check: $0.77 + 0.22 + 0.01 = 1.00$. The sum of the marginal pmf of $X$ is 1, as expected.)*

**Marginal pmf of Y ($p_Y(y)$):**
To find $p_Y(0)$, we sum the column corresponding to $y=0$:
$p_Y(0) = p_{XY}(0, 0) + p_{XY}(1, 0) + p_{XY}(2, 0) = 0.49 + 0.16 + 0.01 = 0.66$

To find $p_Y(1)$, we sum the column corresponding to $y=1$:
$p_Y(1) = p_{XY}(0, 1) + p_{XY}(1, 1) + p_{XY}(2, 1) = 0.24 + 0.05 + 0.00 = 0.29$

To find $p_Y(2)$, we sum the column corresponding to $y=2$:
$p_Y(2) = p_{XY}(0, 2) + p_{XY}(1, 2) + p_{XY}(2, 2) = 0.04 + 0.01 + 0.00 = 0.05$

So, the marginal pmf of $Y$ is:
$p_Y(0) = 0.66$
$p_Y(1) = 0.29$
$p_Y(2) = 0.05$

*(Check: $0.66 + 0.29 + 0.05 = 1.00$. The sum of the marginal pmf of $Y$ is 1, as expected.)*

---

### **4. Properties of Marginal pmf**

The marginal pmf of a single discrete random variable, derived from a joint distribution, possesses the same properties as any other valid pmf.

**Properties of Marginal pmf $p_X(x)$:**
*   $p_X(x) \ge 0$ for all possible values of $x$.
*   $\sum_{x} p_X(x) = 1$, where the sum is over all possible values of $X$.

These properties are essential for verifying the correctness of our calculations.

**Reference:** Again, **Devore (9th ed.)** and **Ross (6th ed.)** cover these foundational properties.

---

### **5. Extension to More Than Two Random Variables**

The concept of marginal pmf extends to scenarios involving three or more discrete random variables.

**For three discrete random variables $X, Y, Z$ with joint pmf $p_{XYZ}(x, y, z)$:**
*   The marginal pmf of $X$ is:
    $$p_X(x) = \sum_{y} \sum_{z} p_{XYZ}(x, y, z)$$
*   The marginal pmf of $Y$ is:
    $$p_Y(y) = \sum_{x} \sum_{z} p_{XYZ}(x, y, z)$$
*   The marginal pmf of $Z$ is:
    $$p_Z(z) = \sum_{x} \sum_{y} p_{XYZ}(x, y, z)$$

**Reference:** **Papoulis & Pillai (4th ed.)** Chapter 3 provides a comprehensive treatment of multivariate distributions.

**Example:**
Suppose we have a joint pmf $p_{XYZ}(x, y, z)$ for three random variables. To find the marginal pmf of $X$, we would sum the joint pmf over all possible pairs of $(y, z)$ values for each specific $x$.

---

### **6. Relationship with Independence**

The concept of marginal pmf is closely linked to the notion of independence between random variables.

**Definition:** Two discrete random variables $X$ and $Y$ are **independent** if and only if their joint pmf can be factored into the product of their marginal pmfs for all possible values of $x$ and $y$:

$$p_{XY}(x, y) = p_X(x) \cdot p_Y(y) \quad \text{for all } x, y$$

**Implication:** If $X$ and $Y$ are independent, then knowing the value of $Y$ does not change the probability distribution of $X$, and vice-versa. This means the marginal pmfs are sufficient to describe the individual behaviors.

**Reference:** This is a critical concept covered extensively in **Devore (9th ed.)** Chapter 4, and **Ross (6th ed.)** Chapter 3.

**Example (Devore, 9th ed., Chapter 4 Example 4.2):**
Consider two dice rolls, $X$ being the outcome of the first die and $Y$ being the outcome of the second die. Each die is fair, so $P(X=x) = 1/6$ for $x \in \{1, 2, 3, 4, 5, 6\}$ and $P(Y=y) = 1/6$ for $y \in \{1, 2, 3, 4, 5, 6\}$.
The joint pmf is $p_{XY}(x, y) = P(X=x, Y=y) = 1/36$ for each pair $(x, y)$.
Let's check for independence:
$p_X(x) \cdot p_Y(y) = (1/6) \cdot (1/6) = 1/36$.
Since $p_{XY}(x, y) = p_X(x) \cdot p_Y(y)$, the outcomes of the two dice rolls are independent.

**Counter-example:** In the ICs example above, let's check if $X$ and $Y$ are independent.
$p_X(0) = 0.77$, $p_Y(0) = 0.66$.
$p_X(0) \cdot p_Y(0) = 0.77 \cdot 0.66 = 0.5082$.
However, $p_{XY}(0, 0) = 0.49$.
Since $p_{XY}(0, 0) \ne p_X(0) \cdot p_Y(0)$, the number of defective ICs in the first sample and the second sample are NOT independent.

---

### **7. Importance and Applications in Physical Science**

Understanding marginal pmfs is vital in physical science for several reasons:

*   **Simplification of Complex Systems:** When dealing with multivariate phenomena, marginal distributions allow us to focus on the behavior of individual components or variables without needing to consider the full joint distribution, which can be computationally intensive.
*   **Parameter Estimation:** In statistical inference, marginal distributions are used to estimate parameters of individual variables. For example, if we have a joint model for position and velocity, we might be interested in the marginal distribution of position to estimate the mean position.
*   **Model Building:** Developing and verifying models for physical systems often involves checking the consistency of marginal distributions with empirical data or theoretical expectations.
*   **Error Analysis:** In experiments involving multiple sources of error, understanding the marginal distribution of each error component can help in quantifying the overall uncertainty.

**Connection to CO1:** This section directly supports CO1 by highlighting how discrete random variable concepts (marginal pmfs) are applied to real-world scientific phenomena.

---

### **8. Practice Questions and Exercises**

**Question 1:**
Let $X$ and $Y$ be two discrete random variables with the following joint probability mass function:

| $x \downarrow, y \rightarrow$ | 0     | 1     | 2     |
| :--------------------------- | :---- | :---- | :---- |
| 1                            | 0.1   | 0.2   | 0.1   |
| 2                            | 0.15  | 0.25  | 0.2   |

(a) Calculate the marginal probability mass function of $X$, $p_X(x)$.
(b) Calculate the marginal probability mass function of $Y$, $p_Y(y)$.
(c) Are $X$ and $Y$ independent? Justify your answer.

**Answer 1:**
(a) Marginal pmf of $X$:
$p_X(1) = p_{XY}(1, 0) + p_{XY}(1, 1) + p_{XY}(1, 2) = 0.1 + 0.2 + 0.1 = 0.4$
$p_X(2) = p_{XY}(2, 0) + p_{XY}(2, 1) + p_{XY}(2, 2) = 0.15 + 0.25 + 0.2 = 0.6$
So, $p_X(1) = 0.4$ and $p_X(2) = 0.6$.

(b) Marginal pmf of $Y$:
$p_Y(0) = p_{XY}(1, 0) + p_{XY}(2, 0) = 0.1 + 0.15 = 0.25$
$p_Y(1) = p_{XY}(1, 1) + p_{XY}(2, 1) = 0.2 + 0.25 = 0.45$
$p_Y(2) = p_{XY}(1, 2) + p_{XY}(2, 2) = 0.1 + 0.2 = 0.3$
So, $p_Y(0) = 0.25$, $p_Y(1) = 0.45$, and $p_Y(2) = 0.3$.

(c) To check for independence, we test if $p_{XY}(x, y) = p_X(x) \cdot p_Y(y)$ for all pairs $(x, y)$.
Let's check for $(x=1, y=1)$:
$p_{XY}(1, 1) = 0.2$
$p_X(1) \cdot p_Y(1) = 0.4 \cdot 0.45 = 0.18$
Since $0.2 \ne 0.18$, $X$ and $Y$ are **not independent**.

---

**Question 2 (Conceptual):**
In a study of radioactive decay, a scientist measures the number of decay events ($N$) from a sample in a given second and the energy released ($E$) during those events. If the scientist is primarily interested in the average number of decay events per second, which type of probability distribution would they focus on, and why?

**Answer 2:**
The scientist would focus on the **marginal probability mass function of $N$**. This is because they are interested in the behavior of the number of decay events ($N$) individually, irrespective of the energy released ($E$) in those events. The marginal pmf of $N$ will provide the probabilities $P(N=n)$ for each possible number of decay events, allowing the scientist to calculate the average number of events (the expected value of $N$). This directly aligns with applying the concept of marginal pmf to a physical phenomenon as outlined in CO1.

---

### **9. Important Points to Remember**

*   **Marginal pmf is obtained by summing out the other variables from the joint pmf.**
*   For two variables $X$ and $Y$, $p_X(x) = \sum_y p_{XY}(x, y)$ and $p_Y(y) = \sum_x p_{XY}(x, y)$.
*   The marginal pmf of a variable must also sum to 1 over all its possible values.
*   **Independence** is confirmed if the joint pmf equals the product of the marginal pmfs: $p_{XY}(x, y) = p_X(x)p_Y(y)$.
*   Understanding marginal distributions is crucial for simplifying complex multivariate problems in physical sciences and for focusing on the behavior of individual variables.

---

This concludes the study notes on Marginal Probability Mass Function for your course. Remember to practice deriving marginal pmfs from given joint pmfs and to check for independence. These skills are fundamental for understanding more advanced concepts in probability and statistics in physical science applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
