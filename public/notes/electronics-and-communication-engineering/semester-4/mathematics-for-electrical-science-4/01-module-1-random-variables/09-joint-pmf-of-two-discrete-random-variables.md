---
title: "Joint pmf of two discrete random variables"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 1: Random variables"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4bb"
status: "completed"
scrapedAt: "2026-05-23T17:50:38.075Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Joint Probability Mass Function (pmf) of Two Discrete Random Variables

---

### 1. Introduction and Motivation

In many electrical engineering scenarios, we encounter situations where the outcome of an experiment depends on the values of multiple random phenomena. For instance, in a communication system, we might be interested in the joint behavior of the transmitted signal strength and the received signal noise. In a circuit, we might consider the voltage across two different components. To analyze such situations, we need to understand the concept of **joint probability distributions**.

This topic introduces the **joint probability mass function (pmf)** for two discrete random variables, allowing us to model and analyze the probabilistic relationships between them. This directly supports **CO1: Illustrate the concept, properties and important models of discrete random variables and to apply in suitable random phenomena.** by extending the understanding of single discrete random variables to multiple variables.

---

### 2. Key Concepts and Definitions

#### 2.1. Joint Random Variables

When the outcome of an experiment is characterized by two or more numerical values, these values can be represented by **random variables**. If we have two random variables, say $X$ and $Y$, defined on the same sample space, they are called **joint random variables**.

*   **Example:** Consider flipping two fair coins. Let $X$ be the number of heads in the first coin flip (0 or 1) and $Y$ be the number of heads in the second coin flip (0 or 1). $X$ and $Y$ are joint random variables.

#### 2.2. Joint Probability Mass Function (pmf)

For two discrete random variables $X$ and $Y$, the **joint probability mass function** (pmf), denoted by $p_{XY}(x, y)$ or $P(X=x, Y=y)$, gives the probability that $X$ takes on the specific value $x$ AND $Y$ takes on the specific value $y$ simultaneously.

*   **Definition:**
    $p_{XY}(x, y) = P(X = x, Y = y)$ for all possible values of $x$ and $y$.

*   **Properties of a Joint pmf:**
    1.  **Non-negativity:** $p_{XY}(x, y) \ge 0$ for all $x, y$.
    2.  **Sum to 1:** The sum of probabilities over all possible pairs of values $(x, y)$ must equal 1.
        $$ \sum_{x} \sum_{y} p_{XY}(x, y) = 1 $$
        where the sums are over all possible values that $X$ and $Y$ can take.

*   **Domain of the Joint pmf:** The set of all pairs $(x, y)$ for which $p_{XY}(x, y) > 0$ is called the support or the domain of the joint pmf.

#### 2.3. Marginal Probability Mass Functions (pmfs)

Given the joint pmf $p_{XY}(x, y)$, we can find the individual (marginal) pmfs of $X$ and $Y$.

*   **Marginal pmf of X:** The probability mass function of $X$ alone is obtained by summing the joint pmf over all possible values of $Y$.
    $$ p_X(x) = P(X = x) = \sum_{y} p_{XY}(x, y) $$
    The sum is taken over all possible values of $y$.

*   **Marginal pmf of Y:** The probability mass function of $Y$ alone is obtained by summing the joint pmf over all possible values of $X$.
    $$ p_Y(y) = P(Y = y) = \sum_{x} p_{XY}(x, y) $$
    The sum is taken over all possible values of $x$.

#### 2.4. Independence of Discrete Random Variables

Two discrete random variables $X$ and $Y$ are **independent** if and only if their joint pmf is equal to the product of their marginal pmfs for all possible values of $x$ and $y$.

*   **Definition:** $X$ and $Y$ are independent if
    $$ p_{XY}(x, y) = p_X(x) p_Y(y) \quad \text{for all } x, y $$

*   **Implication:** If $X$ and $Y$ are independent, then the probability of $X$ taking a value in a set $A$ and $Y$ taking a value in a set $B$ is the product of the individual probabilities:
    $$ P(X \in A, Y \in B) = P(X \in A) P(Y \in B) $$

#### 2.5. Conditional Probability Mass Function (pmf)

The **conditional probability mass function** of $Y$ given $X=x$, denoted by $p_{Y|X}(y|x)$, is the probability that $Y$ takes the value $y$ given that $X$ has taken the value $x$.

*   **Definition:** For values $x$ where $p_X(x) > 0$,
    $$ p_{Y|X}(y|x) = P(Y = y | X = x) = \frac{p_{XY}(x, y)}{p_X(x)} $$

*   **Similarly**, the conditional probability mass function of $X$ given $Y=y$ is:
    $$ p_{X|Y}(x|y) = P(X = x | Y = y) = \frac{p_{XY}(x, y)}{p_Y(y)} \quad \text{for values } y \text{ where } p_Y(y) > 0 $$

*   **Relationship to Independence:** If $X$ and $Y$ are independent, then the conditional pmf is equal to the marginal pmf:
    $$ p_{Y|X}(y|x) = p_Y(y) \quad \text{and} \quad p_{X|Y}(x|y) = p_X(x) $$

---

### 3. Examples

#### Example 1: Two Coin Flips

Consider flipping two fair coins. Let $X$ be the number of heads in the first flip and $Y$ be the number of heads in the second flip.
Possible outcomes for $(X, Y)$: (0,0), (0,1), (1,0), (1,1).
Each outcome has a probability of $1/4$.

The joint pmf is:
$p_{XY}(0, 0) = P(X=0, Y=0) = 1/4$ (Tail, Tail)
$p_{XY}(0, 1) = P(X=0, Y=1) = 1/4$ (Tail, Head)
$p_{XY}(1, 0) = P(X=1, Y=0) = 1/4$ (Head, Tail)
$p_{XY}(1, 1) = P(X=1, Y=1) = 1/4$ (Head, Head)
For all other pairs $(x, y)$, $p_{XY}(x, y) = 0$.

Let's verify the properties:
1.  All $p_{XY}(x, y) \ge 0$.
2.  Sum = $1/4 + 1/4 + 1/4 + 1/4 = 1$.

**Marginal pmfs:**
$p_X(0) = p_{XY}(0, 0) + p_{XY}(0, 1) = 1/4 + 1/4 = 1/2$
$p_X(1) = p_{XY}(1, 0) + p_{XY}(1, 1) = 1/4 + 1/4 = 1/2$
So, $X$ is a Bernoulli(1/2) random variable.

$p_Y(0) = p_{XY}(0, 0) + p_{XY}(1, 0) = 1/4 + 1/4 = 1/2$
$p_Y(1) = p_{XY}(0, 1) + p_{XY}(1, 1) = 1/4 + 1/4 = 1/2$
So, $Y$ is a Bernoulli(1/2) random variable.

**Independence:**
Check if $p_{XY}(x, y) = p_X(x) p_Y(y)$:
For (0,0): $p_{XY}(0,0) = 1/4$. $p_X(0)p_Y(0) = (1/2)(1/2) = 1/4$. (Matches)
For (0,1): $p_{XY}(0,1) = 1/4$. $p_X(0)p_Y(1) = (1/2)(1/2) = 1/4$. (Matches)
For (1,0): $p_{XY}(1,0) = 1/4$. $p_X(1)p_Y(0) = (1/2)(1/2) = 1/4$. (Matches)
For (1,1): $p_{XY}(1,1) = 1/4$. $p_X(1)p_Y(1) = (1/2)(1/2) = 1/4$. (Matches)
Since $p_{XY}(x, y) = p_X(x) p_Y(y)$ for all $x, y$, $X$ and $Y$ are independent. This is expected as the coin flips are independent events.

**Conditional pmf:**
$p_{Y|X}(y|0) = \frac{p_{XY}(0, y)}{p_X(0)} = \frac{p_{XY}(0, y)}{1/2}$
$p_{Y|X}(0|0) = \frac{1/4}{1/2} = 1/2$
$p_{Y|X}(1|0) = \frac{1/4}{1/2} = 1/2$
This shows $P(Y=0|X=0) = 1/2$ and $P(Y=1|X=0) = 1/2$, which is the same as $p_Y(0)$ and $p_Y(1)$, confirming independence.

---

#### Example 2: Drawing Balls from an Urn

Consider an urn with 3 red balls (R) and 2 blue balls (B). We draw two balls **without replacement**.
Let $X$ be the number of red balls drawn in the first draw (0 or 1).
Let $Y$ be the number of red balls drawn in the second draw (0 or 1).

Possible pairs of draws (R,R), (R,B), (B,R), (B,B).
Let's analyze the possibilities for $(X, Y)$:
*   **(X=1, Y=1) - RR:** Probability of drawing a red ball first is $3/5$. Given the first was red, there are 2 red and 2 blue left. Probability of drawing red second is $2/4 = 1/2$. So, $P(X=1, Y=1) = (3/5) \times (1/2) = 3/10$.
*   **(X=1, Y=0) - RB:** Probability of drawing a red ball first is $3/5$. Given the first was red, there are 2 red and 2 blue left. Probability of drawing blue second is $2/4 = 1/2$. So, $P(X=1, Y=0) = (3/5) \times (1/2) = 3/10$.
*   **(X=0, Y=1) - BR:** Probability of drawing a blue ball first is $2/5$. Given the first was blue, there are 3 red and 1 blue left. Probability of drawing red second is $3/4$. So, $P(X=0, Y=1) = (2/5) \times (3/4) = 6/20 = 3/10$.
*   **(X=0, Y=0) - BB:** Probability of drawing a blue ball first is $2/5$. Given the first was blue, there are 3 red and 1 blue left. Probability of drawing blue second is $1/4$. So, $P(X=0, Y=0) = (2/5) \times (1/4) = 2/20 = 1/10$.

The joint pmf is:
$p_{XY}(1, 1) = 3/10$
$p_{XY}(1, 0) = 3/10$
$p_{XY}(0, 1) = 3/10$
$p_{XY}(0, 0) = 1/10$
For all other pairs $(x, y)$, $p_{XY}(x, y) = 0$.

Check properties:
1.  All probabilities are non-negative.
2.  Sum = $3/10 + 3/10 + 3/10 + 1/10 = 10/10 = 1$.

**Marginal pmfs:**
$p_X(1) = p_{XY}(1, 0) + p_{XY}(1, 1) = 3/10 + 3/10 = 6/10 = 3/5$. (Probability of first ball being red is $3/5$, which makes sense)
$p_X(0) = p_{XY}(0, 0) + p_{XY}(0, 1) = 1/10 + 3/10 = 4/10 = 2/5$. (Probability of first ball being blue is $2/5$, which makes sense)

$p_Y(1) = p_{XY}(0, 1) + p_{XY}(1, 1) = 3/10 + 3/10 = 6/10 = 3/5$. (Probability of second ball being red is also $3/5$. This is a property of sampling without replacement - the probability of any specific draw being a certain color is the same).
$p_Y(0) = p_{XY}(0, 0) + p_{XY}(1, 0) = 1/10 + 3/10 = 4/10 = 2/5$.

**Independence:**
Check if $p_{XY}(x, y) = p_X(x) p_Y(y)$:
For (1,1): $p_{XY}(1,1) = 3/10$. $p_X(1)p_Y(1) = (3/5)(3/5) = 9/25 = 3.6/10$. (Not equal)
Since they are not equal for at least one pair, $X$ and $Y$ are **not independent**. This is expected because drawing without replacement creates a dependency between the outcomes.

**Conditional pmf:**
$p_{Y|X}(y|1) = \frac{p_{XY}(1, y)}{p_X(1)} = \frac{p_{XY}(1, y)}{3/5}$
$p_{Y|X}(0|1) = \frac{p_{XY}(1, 0)}{3/5} = \frac{3/10}{3/5} = \frac{3}{10} \times \frac{5}{3} = 5/10 = 1/2$. (Probability of second ball being blue given first was red)
$p_{Y|X}(1|1) = \frac{p_{XY}(1, 1)}{3/5} = \frac{3/10}{3/5} = \frac{3}{10} \times \frac{5}{3} = 5/10 = 1/2$. (Probability of second ball being red given first was red)
This matches our earlier calculation: after drawing one red ball, there are 2 red and 2 blue balls left, so the probability of drawing red or blue is $2/4 = 1/2$.

---

### 4. Relationship to Course Outcomes

*   **CO1: Illustrate the concept, properties and important models of discrete random variables and to apply in suitable random phenomena.**
    *   This topic directly extends the understanding of single discrete random variables to pairs of discrete random variables.
    *   The joint pmf is the fundamental tool for describing the probabilistic relationship between two discrete random variables.
    *   The concepts of marginal pmfs and independence are crucial properties that help in analyzing the behavior of these joint random variables in various electrical science phenomena (e.g., signal processing, system reliability).
    *   The examples demonstrate how to apply these concepts to practical scenarios.

---

### 5. Practice Questions

**Question 1:**
Two discrete random variables $X$ and $Y$ have the following joint probability mass function:

| $y \downarrow / x \rightarrow$ | 0    | 1    | 2    |
| :--------------------------- | :--- | :--- | :--- |
| 0                            | 0.1  | 0.2  | 0.1  |
| 1                            | 0.15 | 0.25 | 0.2  |

a)  Compute the marginal pmf of $X$, $p_X(x)$.
b)  Compute the marginal pmf of $Y$, $p_Y(y)$.
c)  Are $X$ and $Y$ independent? Justify your answer.
d)  Compute $P(X=1 | Y=0)$.

**Answer 1:**
a)
$p_X(0) = p_{XY}(0, 0) + p_{XY}(0, 1) = 0.1 + 0.15 = 0.25$
$p_X(1) = p_{XY}(1, 0) + p_{XY}(1, 1) = 0.2 + 0.25 = 0.45$
$p_X(2) = p_{XY}(2, 0) + p_{XY}(2, 1) = 0.1 + 0.2 = 0.3$
Check sum: $0.25 + 0.45 + 0.3 = 1$.

b)
$p_Y(0) = p_{XY}(0, 0) + p_{XY}(1, 0) + p_{XY}(2, 0) = 0.1 + 0.2 + 0.1 = 0.4$
$p_Y(1) = p_{XY}(0, 1) + p_{XY}(1, 1) + p_{XY}(2, 1) = 0.15 + 0.25 + 0.2 = 0.6$
Check sum: $0.4 + 0.6 = 1$.

c)
To check for independence, we need to see if $p_{XY}(x, y) = p_X(x) p_Y(y)$ for all $(x, y)$.
Let's check (0,0):
$p_{XY}(0, 0) = 0.1$
$p_X(0) p_Y(0) = (0.25)(0.4) = 0.1$ (Matches)

Let's check (1,0):
$p_{XY}(1, 0) = 0.2$
$p_X(1) p_Y(0) = (0.45)(0.4) = 0.18$ (Does NOT match)

Since $p_{XY}(1, 0) \neq p_X(1) p_Y(0)$, $X$ and $Y$ are **not independent**.

d)
$P(X=1 | Y=0) = \frac{p_{XY}(1, 0)}{p_Y(0)} = \frac{0.2}{0.4} = \frac{1}{2} = 0.5$

---

**Question 2:**
A system has two components that fail independently. Component A fails with probability $P(A_{fail}) = 0.1$, and component B fails with probability $P(B_{fail}) = 0.2$.
Let $X$ be an indicator variable for the failure of component A ($X=1$ if A fails, $X=0$ otherwise).
Let $Y$ be an indicator variable for the failure of component B ($Y=1$ if B fails, $Y=0$ otherwise).

a)  Define the joint pmf $p_{XY}(x, y)$.
b)  Calculate the marginal pmfs $p_X(x)$ and $p_Y(y)$.
c)  Verify that $X$ and $Y$ are independent.

**Answer 2:**
a)
Since the components fail independently, the joint pmf is the product of their individual pmfs.
$P(X=1) = 0.1$, $P(X=0) = 1 - 0.1 = 0.9$.
$P(Y=1) = 0.2$, $P(Y=0) = 1 - 0.2 = 0.8$.

The possible values for $(X, Y)$ are (0,0), (0,1), (1,0), (1,1).
$p_{XY}(1, 1) = P(X=1, Y=1) = P(X=1)P(Y=1) = (0.1)(0.2) = 0.02$ (Both fail)
$p_{XY}(1, 0) = P(X=1, Y=0) = P(X=1)P(Y=0) = (0.1)(0.8) = 0.08$ (A fails, B works)
$p_{XY}(0, 1) = P(X=0, Y=1) = P(X=0)P(Y=1) = (0.9)(0.2) = 0.18$ (A works, B fails)
$p_{XY}(0, 0) = P(X=0, Y=0) = P(X=0)P(Y=0) = (0.9)(0.8) = 0.72$ (Both work)

b)
Marginal pmf of $X$:
$p_X(0) = p_{XY}(0,0) + p_{XY}(0,1) = 0.72 + 0.18 = 0.90$
$p_X(1) = p_{XY}(1,0) + p_{XY}(1,1) = 0.08 + 0.02 = 0.10$
These match the given probabilities for component A.

Marginal pmf of $Y$:
$p_Y(0) = p_{XY}(0,0) + p_{XY}(1,0) = 0.72 + 0.08 = 0.80$
$p_Y(1) = p_{XY}(0,1) + p_{XY}(1,1) = 0.18 + 0.02 = 0.20$
These match the given probabilities for component B.

c)
We need to verify if $p_{XY}(x, y) = p_X(x) p_Y(y)$ for all $(x, y)$.
We already defined the joint probabilities as the product of marginal probabilities in part (a), so this condition holds by definition of independent components.
$p_{XY}(1,1) = 0.02 = (0.1)(0.2) = p_X(1)p_Y(1)$
$p_{XY}(1,0) = 0.08 = (0.1)(0.8) = p_X(1)p_Y(0)$
$p_{XY}(0,1) = 0.18 = (0.9)(0.2) = p_X(0)p_Y(1)$
$p_{XY}(0,0) = 0.72 = (0.9)(0.8) = p_X(0)p_Y(0)$
Thus, $X$ and $Y$ are independent.

---

### 6. Important Points to Remember

*   **Joint pmf $p_{XY}(x, y)$** defines the probability of two discrete random variables $X$ and $Y$ taking specific values $x$ and $y$ simultaneously.
*   The sum of all values of the joint pmf must be 1: $\sum_{x} \sum_{y} p_{XY}(x, y) = 1$.
*   **Marginal pmfs** $p_X(x)$ and $p_Y(y)$ are obtained by summing the joint pmf over the other variable.
*   **Independence** is a crucial property where $p_{XY}(x, y) = p_X(x) p_Y(y)$ for all $x, y$.
*   **Conditional pmfs** $p_{Y|X}(y|x)$ and $p_{X|Y}(x|y)$ describe the probability distribution of one variable given the value of the other.
*   In electrical science, understanding joint distributions is vital for analyzing systems with multiple random inputs or components. For example, signal and noise levels, or the performance of interconnected subsystems.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |


### 7. Textbook References

*   **Devore J. L. (9th ed., 2016), Chapter 3: Probability Distributions and Random Variables, Section 3.4: Jointly Distributed Random Variables.**
    *   This section covers joint probability mass functions, marginal probability mass functions, and the concept of independence for discrete random variables. It provides foundational definitions and properties.

*   **Veerarajan T. (3rd ed., 2008), Chapter 3: Random Variables and Probability Distributions, Section 3.5: Joint Distribution of Two Discrete Random Variables.**
    *   This section is directly relevant, detailing the definition of joint pmf, marginal pmfs, conditional pmfs, and conditions for independence.

---

### 8. Alignment with Course Outcomes

*   **CO1: Illustrate the concept, properties and important models of discrete random variables and to apply in suitable random phenomena.**
    *   This entire topic is dedicated to extending the concepts of discrete random variables to the joint behavior of two variables. The joint pmf, marginal pmfs, and independence are key properties discussed and exemplified, directly addressing the learning outcome.

---