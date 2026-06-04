---
title: "Joint pmf of two discrete random variables"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 1: Random variables"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462eb9"
status: "completed"
scrapedAt: "2026-05-20T17:54:36.233Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Joint Probability Mass Function (pmf) of Two Discrete Random Variables

---

### 1. Introduction to Joint Distributions

When we study phenomena involving multiple random outcomes, it's often necessary to consider the behavior of several random variables simultaneously. This leads to the concept of **joint probability distributions**. For discrete random variables, we use the joint probability mass function (pmf).

**Key Concept:** The joint pmf describes the probability that two or more discrete random variables take on specific values simultaneously.

**Relevance to Physical Science:** Many physical phenomena are inherently multivariate. For example:
*   The position ($X$) and momentum ($P$) of a particle in quantum mechanics.
*   The temperature ($T$) and pressure ($P$) of a gas in thermodynamics.
*   The current ($I$) and voltage ($V$) across a circuit component.
*   The intensity and wavelength of light emitted by a source.

Understanding the joint behavior of these variables is crucial for making predictions, analyzing system behavior, and developing models.

---

### 2. Joint Probability Mass Function (pmf) for Two Discrete Random Variables

Let $X$ and $Y$ be two discrete random variables. The **joint probability mass function** of $X$ and $Y$, denoted by $p_{X,Y}(x, y)$, is defined as:

$p_{X,Y}(x, y) = P(X = x, Y = y)$

This is the probability that $X$ takes on the specific value $x$ AND $Y$ takes on the specific value $y$.

**Important Points to Remember:**

*   The domain of $p_{X,Y}(x, y)$ is the set of all possible pairs of values $(x, y)$ that $X$ and $Y$ can jointly assume.
*   The sum of the joint pmf over all possible pairs of values must equal 1:
    $\sum_{x} \sum_{y} p_{X,Y}(x, y) = 1$
*   The joint pmf must be non-negative for all possible values of $x$ and $y$:
    $p_{X,Y}(x, y) \geq 0$ for all $x, y$.

**Textbook Reference:** Devore (2016), Chapter 4, introduces the concept of joint distributions for discrete random variables.

---

### 3. Marginal Probability Mass Functions

From the joint pmf of $X$ and $Y$, we can derive the probability mass functions of $X$ and $Y$ individually. These are called **marginal probability mass functions**.

The marginal pmf of $X$, denoted by $p_X(x)$, is obtained by summing the joint pmf over all possible values of $Y$:

$p_X(x) = \sum_{y} p_{X,Y}(x, y)$

The marginal pmf of $Y$, denoted by $p_Y(y)$, is obtained by summing the joint pmf over all possible values of $X$:

$p_Y(y) = \sum_{x} p_{X,Y}(x, y)$

**Intuition:** To find the probability that $X$ takes a specific value $x$, we consider all the cases where $X=x$ occurs, regardless of what value $Y$ takes.

**Textbook Reference:** Devore (2016), Chapter 4, discusses marginal distributions.

---

### 4. Examples

**Example 1: Rolling Dice**

Let $X$ be the number shown on the first die and $Y$ be the number shown on the second die when two fair dice are rolled. The possible values for $X$ and $Y$ are $\{1, 2, 3, 4, 5, 6\}$.

The joint pmf $p_{X,Y}(x, y)$ is given by:
$p_{X,Y}(x, y) = \frac{1}{36}$ for each pair $(x, y)$ where $x, y \in \{1, 2, 3, 4, 5, 6\}$.

Let's find the marginal pmf of $X$:
$p_X(x) = \sum_{y=1}^{6} p_{X,Y}(x, y) = \sum_{y=1}^{6} \frac{1}{36} = 6 \times \frac{1}{36} = \frac{1}{6}$ for $x \in \{1, 2, 3, 4, 5, 6\}$.
This makes sense, as each face of a single die has a $\frac{1}{6}$ probability of appearing. The same applies to $p_Y(y)$.

**Example 2: Defective Components**

Suppose a batch of items contains $N$ items, of which $K$ are defective. We randomly select $n$ items without replacement.
Let $X$ be the number of defective items in the sample of $n$.

This scenario can be modeled using the **hypergeometric distribution**. If we are considering two characteristics, say the number of defective items ($X$) and the number of items from a specific manufacturer ($Y$) in the sample, we would have a joint pmf.

Let's consider a simpler scenario for illustration:
Suppose we have a batch of 10 items, 4 of which are defective (D) and 6 are non-defective (N). We randomly select 3 items.
Let $X$ be the number of defective items in the sample. $X$ can take values $\{0, 1, 2, 3\}$.
The joint pmf would describe the probability of getting a specific number of defectives AND a specific number of non-defectives. However, since the total sample size is fixed, the number of non-defectives is determined by the number of defectives.

Let's consider a slightly different problem to illustrate joint pmf more directly:
Suppose we have a box with 3 red balls (R) and 2 blue balls (B). We draw two balls without replacement.
Let $X$ be the color of the first ball drawn (R or B) and $Y$ be the color of the second ball drawn (R or B).

The possible outcomes for $(X, Y)$ are (R, R), (R, B), (B, R), (B, B).

*   $P(X=R, Y=R)$: Probability of drawing R first, then R second.
    $P(X=R) = \frac{3}{5}$
    $P(Y=R | X=R) = \frac{2}{4} = \frac{1}{2}$
    $p_{X,Y}(R, R) = P(X=R) \times P(Y=R | X=R) = \frac{3}{5} \times \frac{1}{2} = \frac{3}{10}$

*   $P(X=R, Y=B)$: Probability of drawing R first, then B second.
    $P(X=R) = \frac{3}{5}$
    $P(Y=B | X=R) = \frac{2}{4} = \frac{1}{2}$
    $p_{X,Y}(R, B) = P(X=R) \times P(Y=B | X=R) = \frac{3}{5} \times \frac{1}{2} = \frac{3}{10}$

*   $P(X=B, Y=R)$: Probability of drawing B first, then R second.
    $P(X=B) = \frac{2}{5}$
    $P(Y=R | X=B) = \frac{3}{4}$
    $p_{X,Y}(B, R) = P(X=B) \times P(Y=R | X=B) = \frac{2}{5} \times \frac{3}{4} = \frac{6}{20} = \frac{3}{10}$

*   $P(X=B, Y=B)$: Probability of drawing B first, then B second.
    $P(X=B) = \frac{2}{5}$
    $P(Y=B | X=B) = \frac{1}{4}$
    $p_{X,Y}(B, B) = P(X=B) \times P(Y=B | X=B) = \frac{2}{5} \times \frac{1}{4} = \frac{2}{20} = \frac{1}{10}$

**Joint pmf Table:**

|       | Y=R (3/5) | Y=B (2/5) | Marginal $p_X(x)$ |
| :---- | :-------- | :-------- | :---------------- |
| X=R (3/5) | 3/10      | 3/10      | 6/10 = 3/5        |
| X=B (2/5) | 3/10      | 1/10      | 4/10 = 2/5        |
| Margin $p_Y(y)$ | 6/10 = 3/5 | 4/10 = 2/5 | Sum = 1           |

Check sum of joint pmf: $\frac{3}{10} + \frac{3}{10} + \frac{3}{10} + \frac{1}{10} = \frac{10}{10} = 1$.
Check marginals:
$p_X(R) = \frac{3}{10} + \frac{3}{10} = \frac{6}{10} = \frac{3}{5}$
$p_X(B) = \frac{3}{10} + \frac{1}{10} = \frac{4}{10} = \frac{2}{5}$
$p_Y(R) = \frac{3}{10} + \frac{3}{10} = \frac{6}{10} = \frac{3}{5}$
$p_Y(B) = \frac{3}{10} + \frac{1}{10} = \frac{4}{10} = \frac{2}{5}$

This example demonstrates how to construct a joint pmf and calculate marginal pmfs.

---

### 5. Independence of Random Variables

Two discrete random variables $X$ and $Y$ are **independent** if and only if their joint pmf is the product of their marginal pmfs for all possible values $x$ and $y$:

$p_{X,Y}(x, y) = p_X(x) \cdot p_Y(y)$ for all $x, y$.

**Intuition:** If $X$ and $Y$ are independent, knowing the value of $X$ does not provide any information about the probability distribution of $Y$, and vice-versa.

**Example (from previous dice roll):**
$p_{X,Y}(x, y) = \frac{1}{36}$
$p_X(x) = \frac{1}{6}$ for $x \in \{1, ..., 6\}$
$p_Y(y) = \frac{1}{6}$ for $y \in \{1, ..., 6\}$
$p_X(x) \cdot p_Y(y) = \frac{1}{6} \cdot \frac{1}{6} = \frac{1}{36}$.
Since $p_{X,Y}(x, y) = p_X(x) \cdot p_Y(y)$, the outcomes of rolling two dice are independent.

**Example (from drawing balls without replacement):**
In the ball-drawing example, we found:
$p_{X,Y}(R, R) = \frac{3}{10}$
$p_X(R) = \frac{3}{5}$
$p_Y(R) = \frac{3}{5}$
$p_X(R) \cdot p_Y(R) = \frac{3}{5} \cdot \frac{3}{5} = \frac{9}{25}$.
Since $\frac{3}{10} \neq \frac{9}{25}$, the random variables $X$ and $Y$ (color of first draw and color of second draw) are **not independent** in this case. This is expected because the draws are without replacement, so the outcome of the first draw affects the probabilities for the second draw.

**Textbook Reference:** Devore (2016), Chapter 4, covers the definition and properties of independent random variables.

---

### 6. Conditional Probability Mass Functions

Given the joint pmf, we can also define conditional probability mass functions.

The conditional pmf of $Y$ given $X=x$, denoted by $p_{Y|X}(y|x)$, is:

$p_{Y|X}(y|x) = P(Y = y | X = x) = \frac{P(X=x, Y=y)}{P(X=x)} = \frac{p_{X,Y}(x, y)}{p_X(x)}$

provided that $p_X(x) > 0$.

Similarly, the conditional pmf of $X$ given $Y=y$, denoted by $p_{X|Y}(x|y)$, is:

$p_{X|Y}(x|y) = P(X = x | Y = y) = \frac{P(X=x, Y=y)}{P(Y=y)} = \frac{p_{X,Y}(x, y)}{p_Y(y)}$

provided that $p_Y(y) > 0$.

**Relationship to Independence:** If $X$ and $Y$ are independent, then:
$p_{Y|X}(y|x) = \frac{p_X(x) p_Y(y)}{p_X(x)} = p_Y(y)$
This shows that the conditional distribution of $Y$ given $X=x$ is the same as the marginal distribution of $Y$, reinforcing the concept of independence.

**Example (from drawing balls):**
Let's find the conditional pmf of $Y$ given $X=R$.
$p_Y(R|X=R) = \frac{p_{X,Y}(R, R)}{p_X(R)} = \frac{3/10}{3/5} = \frac{3}{10} \times \frac{5}{3} = \frac{15}{30} = \frac{1}{2}$
$p_Y(B|X=R) = \frac{p_{X,Y}(R, B)}{p_X(R)} = \frac{3/10}{3/5} = \frac{3}{10} \times \frac{5}{3} = \frac{15}{30} = \frac{1}{2}$
So, if the first ball drawn is red, the probability that the second is red is $\frac{1}{2}$, and the probability that the second is blue is $\frac{1}{2}$. This matches our earlier calculation of $P(Y=R | X=R)$ and $P(Y=B | X=R)$.

**Textbook Reference:** Devore (2016), Chapter 4, defines and uses conditional probability distributions.

---

### 7. Expected Values and Variances of Jointly Distributed Random Variables

We can also compute expected values of functions of $X$ and $Y$, as well as their variances.

**Expected Value of a Function:**
Let $g(X, Y)$ be a function of two discrete random variables $X$ and $Y$. The expected value of $g(X, Y)$ is:

$E[g(X, Y)] = \sum_{x} \sum_{y} g(x, y) p_{X,Y}(x, y)$

**Special Cases:**
*   $E[X] = \sum_{x} x \cdot p_X(x)$ (This is just the expected value of the marginal distribution of X)
*   $E[Y] = \sum_{y} y \cdot p_Y(y)$ (This is just the expected value of the marginal distribution of Y)
*   $E[XY] = \sum_{x} \sum_{y} xy \cdot p_{X,Y}(x, y)$

**Covariance:**
The covariance between $X$ and $Y$ measures the linear relationship between them:

$Cov(X, Y) = E[(X - E[X])(Y - E[Y])]$
$Cov(X, Y) = E[XY] - E[X]E[Y]$

**Important Property:** If $X$ and $Y$ are independent, then $Cov(X, Y) = 0$.
The converse is not always true; zero covariance does not imply independence.

**Correlation Coefficient:**
$\rho_{X,Y} = \frac{Cov(X, Y)}{\sigma_X \sigma_Y}$
where $\sigma_X$ and $\sigma_Y$ are the standard deviations of $X$ and $Y$, respectively.

**Variance of a Sum:**
For any two random variables $X$ and $Y$:
$Var(X + Y) = Var(X) + Var(Y) + 2 Cov(X, Y)$

**If $X$ and $Y$ are independent**, then $Cov(X, Y) = 0$, so:
$Var(X + Y) = Var(X) + Var(Y)$

**Textbook Reference:** Devore (2016), Chapter 4, covers expected values, covariance, and correlation for joint distributions. Papoulis & Pillai (2002) also provides a deep dive into these concepts in the context of stochastic processes.

---

### 8. Applications in Physical Science (Linking to Course Outcomes)

*   **CO1: Understand the concept, properties and important models of discrete random variables and to apply in suitable random phenomena.**
    *   The joint pmf is a direct extension of understanding single discrete random variables. Examples like dice rolls or component selection illustrate applying these concepts to physical phenomena.
    *   **Example:** In a quality control process for manufactured items, we might have two random variables: $X$ = number of flaws detected by inspection method 1, and $Y$ = number of flaws detected by inspection method 2. The joint pmf would help us understand the combined likelihood of certain flaw counts from both methods.

*   **CO2: Understand the concept, properties and important models of continuous random variables and to apply in suitable random phenomena.**
    *   While this topic focuses on discrete variables, the fundamental concepts of joint distributions, marginal distributions, independence, and conditional distributions extend directly to continuous random variables using joint probability density functions (pdfs). This module builds the foundation.
    *   **Example:** In statistical mechanics, the joint distribution of the positions and momenta of particles in a gas is described by a joint pdf. Understanding these joint distributions is crucial for deriving macroscopic properties like pressure and temperature.

*   **CO3: Estimate population parameters, assess their certainty with confidence intervals, and test hypotheses about population means and proportions using z-tests and the one-sample t-test.**
    *   The concepts of marginal and joint distributions are fundamental to understanding sampling distributions, which are essential for statistical inference. For instance, if we are interested in the relationship between two parameters, we might use regression techniques that implicitly or explicitly rely on joint distributions.
    *   **Example:** If we are studying the relationship between the applied voltage ($V$) and the current ($I$) in a semiconductor device, we might collect pairs of $(V, I)$ measurements. The joint distribution of these measurements informs us about the device's behavior and allows for statistical inference about its properties.

*   **CO4: Apply numerical methods to find solutions of linear system of equations, ordinary differential equations and Laplace equations.**
    *   While this topic does not directly involve numerical methods, understanding the properties of probability distributions (like expected value, variance) often relies on integrals and summations. In more complex scenarios, especially with continuous joint distributions or high-dimensional problems, numerical integration techniques (like Monte Carlo methods) might be used to approximate these expected values and other statistical quantities, linking to the need for numerical methods.

---

### 9. Practice Questions

**Question 1:**
Two discrete random variables $X$ and $Y$ have the following joint probability mass function:

|       | $y=0$ | $y=1$ | $y=2$ |
| :---- | :---- | :---- | :---- |
| $x=1$ | 0.1   | 0.2   | 0.1   |
| $x=2$ | 0.2   | 0.3   | 0.1   |

a) Compute the marginal probability mass functions of $X$ and $Y$.
b) Are $X$ and $Y$ independent? Justify your answer.
c) Compute $P(X \le 1, Y \ge 1)$.
d) Compute $E[X]$ and $E[Y]$.

**Answer 1:**

a)
Marginal $p_X(x)$:
$p_X(1) = p_{1,0} + p_{1,1} + p_{1,2} = 0.1 + 0.2 + 0.1 = 0.4$
$p_X(2) = p_{2,0} + p_{2,1} + p_{2,2} = 0.2 + 0.3 + 0.1 = 0.6$
Check: $0.4 + 0.6 = 1.0$

Marginal $p_Y(y)$:
$p_Y(0) = p_{1,0} + p_{2,0} = 0.1 + 0.2 = 0.3$
$p_Y(1) = p_{1,1} + p_{2,1} = 0.2 + 0.3 = 0.5$
$p_Y(2) = p_{1,2} + p_{2,2} = 0.1 + 0.1 = 0.2$
Check: $0.3 + 0.5 + 0.2 = 1.0$

b) To check for independence, we compare $p_{X,Y}(x, y)$ with $p_X(x) \cdot p_Y(y)$.
Let's check for $(x=1, y=1)$:
$p_{X,Y}(1, 1) = 0.2$
$p_X(1) \cdot p_Y(1) = 0.4 \cdot 0.5 = 0.2$
This pair is consistent with independence.

Let's check for $(x=1, y=0)$:
$p_{X,Y}(1, 0) = 0.1$
$p_X(1) \cdot p_Y(0) = 0.4 \cdot 0.3 = 0.12$
Since $0.1 \neq 0.12$, $X$ and $Y$ are **not independent**.

c) $P(X \le 1, Y \ge 1) = P(X=1, Y=1) + P(X=1, Y=2)$
$P(X \le 1, Y \ge 1) = p_{1,1} + p_{1,2} = 0.2 + 0.1 = 0.3$

d)
$E[X] = \sum x \cdot p_X(x) = (1 \cdot 0.4) + (2 \cdot 0.6) = 0.4 + 1.2 = 1.6$
$E[Y] = \sum y \cdot p_Y(y) = (0 \cdot 0.3) + (1 \cdot 0.5) + (2 \cdot 0.2) = 0 + 0.5 + 0.4 = 0.9$

---

**Question 2:**
Consider the experiment of drawing two cards without replacement from a standard deck of 52 cards. Let $X$ be the number of Aces drawn and $Y$ be the number of Kings drawn. The possible values for $X$ are {0, 1, 2} and for $Y$ are {0, 1, 2}. Note that $X+Y$ cannot exceed 2.

a) What is the probability $P(X=1, Y=1)$? (i.e., drawing one Ace and one King)
b) What is the probability $P(X=2, Y=0)$? (i.e., drawing two Aces)
c) Are $X$ and $Y$ independent? Justify your answer.

**Answer 2:**

Total number of ways to draw 2 cards from 52 is $\binom{52}{2} = \frac{52 \times 51}{2} = 1326$.

a) $P(X=1, Y=1)$: This means drawing one Ace and one King.
Number of ways to choose 1 Ace from 4 Aces = $\binom{4}{1} = 4$.
Number of ways to choose 1 King from 4 Kings = $\binom{4}{1} = 4$.
So, the number of ways to draw one Ace and one King is $\binom{4}{1} \times \binom{4}{1} = 4 \times 4 = 16$.
$P(X=1, Y=1) = \frac{16}{1326} = \frac{8}{663}$.

b) $P(X=2, Y=0)$: This means drawing two Aces and zero Kings.
Number of ways to choose 2 Aces from 4 Aces = $\binom{4}{2} = \frac{4 \times 3}{2} = 6$.
Number of ways to choose 0 Kings from 4 Kings = $\binom{4}{0} = 1$.
The remaining $2-2=0$ cards are chosen from the $52-4-4=44$ non-Ace, non-King cards. This is $\binom{44}{0}=1$.
So, the number of ways to draw two Aces and zero Kings is $\binom{4}{2} \times \binom{4}{0} \times \binom{44}{0} = 6 \times 1 \times 1 = 6$.
$P(X=2, Y=0) = \frac{6}{1326} = \frac{1}{221}$.

c) To check for independence, we would need the marginal probabilities $p_X(x)$ and $p_Y(y)$.
Let's consider $p_X(1)$:
$p_X(1) = P(X=1)$. This can happen in three ways for the two cards: (Ace, King), (Ace, Not-Ace/King), (King, Ace), (Not-Ace/King, Ace).
The joint probabilities are for the unordered set of two cards.
$p_X(1) = P(1 \text{ Ace}, 1 \text{ Non-Ace}) = P(1 \text{ Ace}, 0 \text{ King}) + P(1 \text{ Ace}, 1 \text{ King})$
This requires calculating all possible joint probabilities, which is a bit extensive for a quick check here. However, we can infer non-independence.

Consider the probability of drawing a second Ace given the first was an Ace:
$P(Y=0 | X=2) = \frac{P(X=2, Y=0)}{P(X=2)}$
$P(X=2) = \frac{\binom{4}{2}\binom{48}{0}}{\binom{52}{2}} = \frac{6}{1326} = \frac{1}{221}$
$P(Y=0 | X=2) = \frac{1/221}{1/221} = 1$. This means if you draw two Aces, you draw zero Kings. This is expected.

However, let's consider a simpler property of independence. If $X$ and $Y$ are independent, then $P(X=1, Y=1) = P(X=1)P(Y=1)$.
We know $P(X=1, Y=1) = 16/1326$.
To calculate $P(X=1)$, we need to consider the cases where we get one Ace:
1 Ace and 1 King: $P(1A, 1K) = \frac{\binom{4}{1}\binom{4}{1}}{\binom{52}{2}} = \frac{16}{1326}$
1 Ace and 1 other (not K or A): $P(1A, 1 \text{other}) = \frac{\binom{4}{1}\binom{44}{1}}{\binom{52}{2}} = \frac{4 \times 44}{1326} = \frac{176}{1326}$
$P(X=1) = P(1A, 1K) + P(1A, 1 \text{other}) = \frac{16}{1326} + \frac{176}{1326} = \frac{192}{1326} = \frac{32}{221}$.
Similarly, $P(Y=1) = \frac{192}{1326} = \frac{32}{221}$.
$P(X=1) \cdot P(Y=1) = \frac{32}{221} \cdot \frac{32}{221} = \frac{1024}{48841}$.
Since $\frac{16}{1326} \neq \frac{1024}{48841}$, $X$ and $Y$ are **not independent**. The reason is the drawing is without replacement, so the occurrence of one type of card affects the probability of drawing another type of card.

---

### 10. Summary and Key Takeaways

*   The **joint pmf** $p_{X,Y}(x, y)$ gives the probability $P(X=x, Y=y)$.
*   The sum of the joint pmf over all possible outcomes is 1.
*   **Marginal pmfs** $p_X(x)$ and $p_Y(y)$ are obtained by summing the joint pmf over the other variable.
*   $X$ and $Y$ are **independent** if $p_{X,Y}(x, y) = p_X(x) p_Y(y)$ for all $x, y$.
*   **Conditional pmfs** $p_{Y|X}(y|x)$ and $p_{X|Y}(x|y)$ describe the probability of one variable taking a value given the other variable's value.
*   Expected values of functions of jointly distributed variables can be computed using the joint pmf.
*   Covariance and correlation measure the linear relationship between $X$ and $Y$. Independence implies zero covariance, but not necessarily vice versa.
*   Understanding joint distributions is fundamental for analyzing multivariate phenomena in physical sciences and for building towards statistical inference.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |


### Further Reading and References:

*   **Devore, J. L. (2016). *Probability and Statistics for Engineering and the Sciences* (9th ed.). Cengage Learning.** (Primary reference for core concepts)
*   **Papoulis, A., & Pillai, S. U. (2002). *Probability, Random Variables and Stochastic Processes* (4th ed.). McGraw Hill.** (For a more advanced and theoretical treatment of random variables and their joint behavior, relevant for deeper understanding.)
*   **Ross, S. M. (2020). *Introduction to Probability and Statistics for Engineers and Scientists* (6th ed.). Academic Press.** (Provides alternative explanations and examples.)

---