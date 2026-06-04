---
title: "Marginal pmf"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 1: Random variables"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4bc"
status: "completed"
scrapedAt: "2026-05-23T17:50:38.863Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Marginal Probability Mass Function (pmf)

---

### 1. Introduction and Learning Outcomes

This topic introduces the concept of **marginal probability mass function (pmf)**, which is fundamental to understanding the behavior of individual random variables within a joint probability distribution.

**Upon successful completion of this topic, you will be able to:**

*   Understand the relationship between joint and marginal probability distributions for discrete random variables.
*   Calculate the marginal pmf of individual discrete random variables from a given joint pmf.
*   Apply the concept of marginal pmf to solve problems involving multiple discrete random variables, particularly in electrical science contexts.
*   Recognize how marginal pmfs relate to the overall behavior of a system described by multiple random variables.

---

### 2. Key Concepts and Definitions

#### 2.1 Joint Probability Mass Function (pmf)

When dealing with more than one discrete random variable, we are interested in their *joint* behavior. The joint pmf describes the probability that these random variables simultaneously take on specific values.

**Definition:** For two discrete random variables $X$ and $Y$, the joint probability mass function is denoted by $p_{X,Y}(x, y)$ and is defined as:

$p_{X,Y}(x, y) = P(X=x, Y=y)$

This means the probability that the random variable $X$ takes the value $x$ AND the random variable $Y$ takes the value $y$ is $p_{X,Y}(x, y)$.

**Properties of Joint pmf:**

*   $p_{X,Y}(x, y) \ge 0$ for all possible values of $x$ and $y$.
*   $\sum_{x} \sum_{y} p_{X,Y}(x, y) = 1$, where the summation is over all possible values of $X$ and $Y$.

**(Referenced from Devore, J. L., 9th edition, Chapter 3: Discrete Random Variables)**

#### 2.2 Marginal Probability Mass Function (pmf)

The marginal pmf of a single random variable in a joint distribution tells us about the probability of that variable taking on certain values, irrespective of the values of other random variables in the distribution.

**Definition:** For a joint pmf $p_{X,Y}(x, y)$ of two discrete random variables $X$ and $Y$, the marginal pmf of $X$ is denoted by $p_X(x)$ and is obtained by summing the joint pmf over all possible values of $Y$:

$p_X(x) = \sum_{y} p_{X,Y}(x, y)$

Similarly, the marginal pmf of $Y$ is denoted by $p_Y(y)$ and is obtained by summing the joint pmf over all possible values of $X$:

$p_Y(y) = \sum_{x} p_{X,Y}(x, y)$

**Interpretation:** The marginal pmf $p_X(x)$ represents the probability that the random variable $X$ takes on the value $x$, regardless of what value $Y$ takes. It essentially "marginalizes out" the other random variable(s).

**(Referenced from Veerarajan, T., 3rd edition, Chapter 4: Probability Distributions)**

---

### 3. Examples

#### Example 1: Rolling Two Dice

Let $X$ be the outcome of the first die and $Y$ be the outcome of the second die. The possible values for both $X$ and $Y$ are $\{1, 2, 3, 4, 5, 6\}$. Assuming the dice are fair and independent, the joint pmf is:

$p_{X,Y}(x, y) = P(X=x, Y=y) = P(X=x)P(Y=y) = \frac{1}{6} \times \frac{1}{6} = \frac{1}{36}$ for each pair $(x, y)$ where $x, y \in \{1, 2, 3, 4, 5, 6\}$.

To find the marginal pmf of $X$, $p_X(x)$:

$p_X(x) = \sum_{y=1}^{6} p_{X,Y}(x, y) = \sum_{y=1}^{6} \frac{1}{36} = 6 \times \frac{1}{36} = \frac{1}{6}$

This makes sense, as the probability of getting any specific number on a single die is $1/6$. The marginal pmf for $Y$, $p_Y(y)$, would also be $1/6$.

#### Example 2: Number of Defective Components

Suppose a batch contains 5 components. We randomly select 2 components. Let $X$ be the number of defective components in the first selection of 1 component, and $Y$ be the number of defective components in the second selection of 1 component. This scenario is a bit contrived to illustrate the concept, but imagine a process where we select one, check for defect, then select another.

Let's consider a simpler scenario: From a batch of 4 components, 2 are defective (D) and 2 are good (G). We select 2 components without replacement.
Let $X$ be the number of defective components in the first draw, and $Y$ be the number of defective components in the second draw.

Possible outcomes for $(X, Y)$:
*   (D, D): $P(X=1, Y=1) = P(\text{1st is D}) \times P(\text{2nd is D | 1st is D}) = \frac{2}{4} \times \frac{1}{3} = \frac{2}{12} = \frac{1}{6}$
*   (D, G): $P(X=1, Y=0) = P(\text{1st is D}) \times P(\text{2nd is G | 1st is D}) = \frac{2}{4} \times \frac{2}{3} = \frac{4}{12} = \frac{1}{3}$
*   (G, D): $P(X=0, Y=1) = P(\text{1st is G}) \times P(\text{2nd is D | 1st is G}) = \frac{2}{4} \times \frac{2}{3} = \frac{4}{12} = \frac{1}{3}$
*   (G, G): $P(X=0, Y=0) = P(\text{1st is G}) \times P(\text{2nd is G | 1st is G}) = \frac{2}{4} \times \frac{1}{3} = \frac{2}{12} = \frac{1}{6}$

The joint pmf table is:

| $X \setminus Y$ | 0 (G)     | 1 (D)     | $p_X(x)$ |
| :-------------- | :-------- | :-------- | :------- |
| 0 (G)           | 1/6       | 1/3       | 1/2      |
| 1 (D)           | 1/3       | 1/6       | 1/2      |
| $p_Y(y)$        | 1/2       | 1/2       | 1        |

**Marginal pmf of X:**
*   $p_X(0) = P(X=0) = P(X=0, Y=0) + P(X=0, Y=1) = \frac{1}{6} + \frac{1}{3} = \frac{1+2}{6} = \frac{3}{6} = \frac{1}{2}$
*   $p_X(1) = P(X=1) = P(X=1, Y=0) + P(X=1, Y=1) = \frac{1}{3} + \frac{1}{6} = \frac{2+1}{6} = \frac{3}{6} = \frac{1}{2}$

**Marginal pmf of Y:**
*   $p_Y(0) = P(Y=0) = P(X=0, Y=0) + P(X=1, Y=0) = \frac{1}{6} + \frac{1}{3} = \frac{1+2}{6} = \frac{3}{6} = \frac{1}{2}$
*   $p_Y(1) = P(Y=1) = P(X=0, Y=1) + P(X=1, Y=1) = \frac{1}{3} + \frac{1}{6} = \frac{2+1}{6} = \frac{3}{6} = \frac{1}{2}$

This example demonstrates how to derive the marginal probabilities by summing across rows or columns of the joint probability table.

**(Referenced from Ross, S. M., 6th edition, Chapter 4: Discrete Random Variables and Probability Distributions)**

---

### 4. Relation to Course Outcomes

This topic directly contributes to the understanding of random variables and their properties, aligning with:

*   **CO1: Illustrate the concept, properties and important models of discrete random variables and to apply in suitable random phenomena. (Knowledge Level: K3)**
    *   Understanding marginal pmf is crucial for analyzing the behavior of individual discrete random variables within a multi-variable system. It allows us to focus on specific aspects of a system without being concerned about the outcomes of other variables. This supports the application of discrete random variable concepts to real-world phenomena.

---

### 5. Practice Questions and Exercises

**Question 1:**
Let $X$ and $Y$ be two discrete random variables with the following joint probability mass function:

| $X \setminus Y$ | 0   | 1   | 2   |
| :-------------- | :-- | :-- | :-- |
| 0               | 0.1 | 0.2 | 0.1 |
| 1               | 0.3 | 0.1 | 0.2 |

Determine the marginal probability mass functions for $X$ and $Y$, i.e., $p_X(x)$ and $p_Y(y)$.

**Answer 1:**

**Marginal pmf of X ($p_X(x)$):**
*   $p_X(0) = P(X=0) = p_{X,Y}(0,0) + p_{X,Y}(0,1) + p_{X,Y}(0,2) = 0.1 + 0.2 + 0.1 = 0.4$
*   $p_X(1) = P(X=1) = p_{X,Y}(1,0) + p_{X,Y}(1,1) + p_{X,Y}(1,2) = 0.3 + 0.1 + 0.2 = 0.6$

The marginal pmf of $X$ is:
$p_X(0) = 0.4$
$p_X(1) = 0.6$
(Note: $\sum p_X(x) = 0.4 + 0.6 = 1$, as expected)

**Marginal pmf of Y ($p_Y(y)$):**
*   $p_Y(0) = P(Y=0) = p_{X,Y}(0,0) + p_{X,Y}(1,0) = 0.1 + 0.3 = 0.4$
*   $p_Y(1) = P(Y=1) = p_{X,Y}(0,1) + p_{X,Y}(1,1) = 0.2 + 0.1 = 0.3$
*   $p_Y(2) = P(Y=2) = p_{X,Y}(0,2) + p_{X,Y}(1,2) = 0.1 + 0.2 = 0.3$

The marginal pmf of $Y$ is:
$p_Y(0) = 0.4$
$p_Y(1) = 0.3$
$p_Y(2) = 0.3$
(Note: $\sum p_Y(y) = 0.4 + 0.3 + 0.3 = 1$, as expected)

**Question 2:**
Consider a system with two components, $C_1$ and $C_2$. Let $N_1$ be the number of failures of $C_1$ in a day, and $N_2$ be the number of failures of $C_2$ in a day. The joint pmf $p_{N_1, N_2}(n_1, n_2)$ is given by:

$p_{N_1, N_2}(n_1, n_2) = k \cdot \frac{e^{-\lambda_1} \lambda_1^{n_1}}{n_1!} \cdot \frac{e^{-\lambda_2} \lambda_2^{n_2}}{n_2!}$ for $n_1 \ge 0, n_2 \ge 0$, and $p_{N_1, N_2}(n_1, n_2) = 0$ otherwise, where $k$ is a normalization constant. (Hint: This is related to the Poisson distribution).

*   (a) If $C_1$ and $C_2$ operate independently, what is the marginal pmf of $N_1$?
*   (b) If $C_1$ and $C_2$ operate independently, what is the marginal pmf of $N_2$?

**Answer 2:**

If the components operate independently, their joint pmf is the product of their individual pmfs. If $N_1$ and $N_2$ follow Poisson distributions with parameters $\lambda_1$ and $\lambda_2$ respectively, then:
$p_{N_1}(n_1) = \frac{e^{-\lambda_1} \lambda_1^{n_1}}{n_1!}$ for $n_1 \ge 0$
$p_{N_2}(n_2) = \frac{e^{-\lambda_2} \lambda_2^{n_2}}{n_2!}$ for $n_2 \ge 0$

Their joint pmf would be:
$p_{N_1, N_2}(n_1, n_2) = p_{N_1}(n_1) p_{N_2}(n_2) = \frac{e^{-\lambda_1} \lambda_1^{n_1}}{n_1!} \cdot \frac{e^{-\lambda_2} \lambda_2^{n_2}}{n_2!} = e^{-(\lambda_1+\lambda_2)} \frac{\lambda_1^{n_1} \lambda_2^{n_2}}{n_1! n_2!}$

The given joint pmf is $p_{N_1, N_2}(n_1, n_2) = k \cdot \frac{e^{-\lambda_1} \lambda_1^{n_1}}{n_1!} \cdot \frac{e^{-\lambda_2} \lambda_2^{n_2}}{n_2!}$.
For the total probability to be 1, the sum over all $n_1, n_2$ must be 1.
$\sum_{n_1=0}^{\infty} \sum_{n_2=0}^{\infty} p_{N_1, N_2}(n_1, n_2) = \sum_{n_1=0}^{\infty} \sum_{n_2=0}^{\infty} k \cdot \frac{e^{-\lambda_1} \lambda_1^{n_1}}{n_1!} \cdot \frac{e^{-\lambda_2} \lambda_2^{n_2}}{n_2!} = k \left(\sum_{n_1=0}^{\infty} \frac{e^{-\lambda_1} \lambda_1^{n_1}}{n_1!}\right) \left(\sum_{n_2=0}^{\infty} \frac{e^{-\lambda_2} \lambda_2^{n_2}}{n_2!}\right)$
Since $\sum_{n=0}^{\infty} \frac{e^{-\lambda} \lambda^n}{n!} = 1$ (sum of probabilities for a Poisson distribution), this becomes $k \cdot 1 \cdot 1 = k$.
So, for the total probability to be 1, $k$ must be 1.

Therefore, the joint pmf is actually $p_{N_1, N_2}(n_1, n_2) = \frac{e^{-\lambda_1} \lambda_1^{n_1}}{n_1!} \cdot \frac{e^{-\lambda_2} \lambda_2^{n_2}}{n_2!}$.

*   **(a) Marginal pmf of $N_1$:**
    To find $p_{N_1}(n_1)$, we sum $p_{N_1, N_2}(n_1, n_2)$ over all possible values of $n_2$:
    $p_{N_1}(n_1) = \sum_{n_2=0}^{\infty} p_{N_1, N_2}(n_1, n_2) = \sum_{n_2=0}^{\infty} \frac{e^{-\lambda_1} \lambda_1^{n_1}}{n_1!} \cdot \frac{e^{-\lambda_2} \lambda_2^{n_2}}{n_2!}$
    $p_{N_1}(n_1) = \frac{e^{-\lambda_1} \lambda_1^{n_1}}{n_1!} \sum_{n_2=0}^{\infty} \frac{e^{-\lambda_2} \lambda_2^{n_2}}{n_2!} = \frac{e^{-\lambda_1} \lambda_1^{n_1}}{n_1!} \cdot 1$
    $p_{N_1}(n_1) = \frac{e^{-\lambda_1} \lambda_1^{n_1}}{n_1!}$, which is the pmf of a Poisson distribution with parameter $\lambda_1$.

*   **(b) Marginal pmf of $N_2$:**
    Similarly, to find $p_{N_2}(n_2)$, we sum $p_{N_1, N_2}(n_1, n_2)$ over all possible values of $n_1$:
    $p_{N_2}(n_2) = \sum_{n_1=0}^{\infty} p_{N_1, N_2}(n_1, n_2) = \sum_{n_1=0}^{\infty} \frac{e^{-\lambda_1} \lambda_1^{n_1}}{n_1!} \cdot \frac{e^{-\lambda_2} \lambda_2^{n_2}}{n_2!}$
    $p_{N_2}(n_2) = \frac{e^{-\lambda_2} \lambda_2^{n_2}}{n_2!} \sum_{n_1=0}^{\infty} \frac{e^{-\lambda_1} \lambda_1^{n_1}}{n_1!} = \frac{e^{-\lambda_2} \lambda_2^{n_2}}{n_2!} \cdot 1$
    $p_{N_2}(n_2) = \frac{e^{-\lambda_2} \lambda_2^{n_2}}{n_2!}$, which is the pmf of a Poisson distribution with parameter $\lambda_2$.

This shows that for independent random variables, the marginal distributions are indeed their original distributions.

---

### 6. Important Points to Remember

*   **Marginalization:** The process of finding a marginal pmf involves summing the joint pmf over all possible values of the *other* random variable(s).
*   **Summation is Key:** For discrete random variables, marginalization is always performed via summation.
*   **Total Probability:** The sum of all marginal probabilities for a single random variable must equal 1.
*   **Independence:** If random variables $X$ and $Y$ are independent, then $p_{X,Y}(x,y) = p_X(x)p_Y(y)$. In this case, the marginal pmfs are simply the individual pmfs of $X$ and $Y$.
*   **Relationship to Joint pmf:** The marginal pmf is a consequence of the joint pmf. You cannot determine the marginal pmf without knowing the joint pmf (or having enough information to derive it).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### 7. References and Further Reading

*   **Devore, J. L. (2016). *Probability and Statistics for Engineering and the Sciences* (9th ed.). Cengage Learning.** (Chapters on joint probability distributions and properties of random variables).
*   **Veerarajan, T. (2008). *Probability, Statistics and Random Processes* (3rd ed.). The McGraw-Hill.** (Chapters on probability distributions, particularly joint and marginal distributions).
*   **Papoulis, A., & Pillai, S. U. (2002). *Probability, Random Variables and Stochastic Processes* (4th ed.). McGraw Hill.** (Provides a rigorous treatment of joint distributions).
*   **Ross, S. M. (2020). *Introduction to Probability and Statistics for Engineers and Scientists* (6th ed.). Academic Press.** (Covers joint distributions and marginalization).
*   **Palaniammal, S. (2015). *Probability and Random Processes* (3rd ed.). PHI Learning Private Limited.** (Useful for practical applications and examples).
*   **Anderson, D. F., & Benedek, T. (2017). *Introduction to Probability*. Cambridge.** (Offers a foundational understanding of probability concepts, including joint and marginal distributions).

---