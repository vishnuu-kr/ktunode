---
title: "Joint pmf of two discrete random variables"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 1: Random variables"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810923"
status: "completed"
scrapedAt: "2026-05-20T18:45:57.530Z"
---
# Mathematics for Physical Science – 4: Module 1: Random Variables

## Topic: Joint Probability Mass Function (pmf) of Two Discrete Random Variables

This module introduces the concept of joint probability distributions for discrete random variables, which is crucial for analyzing systems involving multiple random phenomena.

---

### Learning Outcomes:

Upon completion of this topic, you should be able to:

*   **Define and understand the joint probability mass function (pmf) of two discrete random variables.**
*   **Interpret the values of a joint pmf.**
*   **Calculate probabilities of events involving two discrete random variables using the joint pmf.**
*   **Derive and understand marginal probability mass functions from a joint pmf.**
*   **Define and understand conditional probability mass functions.**
*   **Determine if two discrete random variables are independent based on their joint pmf.**

---

### 1. Joint Probability Mass Function (pmf)

#### 1.1 Definition

Let $X$ and $Y$ be two discrete random variables defined on the same sample space $\Omega$. The **joint probability mass function (pmf)** of $X$ and $Y$, denoted by $p_{X,Y}(x, y)$, is defined as:

$$ p_{X,Y}(x, y) = P(X = x, Y = y) $$

This represents the probability that the random variable $X$ takes on the specific value $x$ and, simultaneously, the random variable $Y$ takes on the specific value $y$.

#### 1.2 Properties of a Joint pmf

For $p_{X,Y}(x, y)$ to be a valid joint pmf, it must satisfy the following properties:

1.  **Non-negativity:** $p_{X,Y}(x, y) \ge 0$ for all possible values of $x$ and $y$.
2.  **Normalization:** The sum of the probabilities over all possible pairs of $(x, y)$ must equal 1:
    $$ \sum_{x} \sum_{y} p_{X,Y}(x, y) = 1 $$
    where the summation is over all possible values that $X$ and $Y$ can take.

#### 1.3 Interpretation of Joint pmf Values

The value $p_{X,Y}(x, y)$ directly gives the probability of the specific outcome where $X$ is $x$ and $Y$ is $y$. Larger values of $p_{X,Y}(x, y)$ indicate that the combination of $(X=x, Y=y)$ is more likely to occur.

#### 1.4 Visualizing Joint pmf

A joint pmf can often be represented in a table, where rows correspond to possible values of one variable (e.g., $X$) and columns correspond to possible values of the other variable (e.g., $Y$). The entries in the table are the joint probabilities $p_{X,Y}(x, y)$.

**Example:**

Consider an experiment of flipping two fair coins. Let $X$ be the number of heads in the first flip (0 or 1) and $Y$ be the number of heads in the second flip (0 or 1). The possible outcomes are {HH, HT, TH, TT}.

Let's define $X$ and $Y$ more concretely for the two coin flips:
*   $X = 1$ if the first coin is Heads, $X = 0$ if Tails.
*   $Y = 1$ if the second coin is Heads, $Y = 0$ if Tails.

The possible pairs $(X, Y)$ are:
*   (1, 1) for HH (Probability = 1/4)
*   (1, 0) for HT (Probability = 1/4)
*   (0, 1) for TH (Probability = 1/4)
*   (0, 0) for TT (Probability = 1/4)

The joint pmf $p_{X,Y}(x, y)$ is:

| $y \downarrow / x \rightarrow$ | 0     | 1     |
| :---------------------------- | :---- | :---- |
| 0                             | 1/4   | 1/4   |
| 1                             | 1/4   | 1/4   |

**Check properties:**
*   All values are $\ge 0$. (Property 1 satisfied)
*   Sum of all values = 1/4 + 1/4 + 1/4 + 1/4 = 1. (Property 2 satisfied)

---

### 2. Calculating Probabilities of Events

The joint pmf allows us to calculate the probability of various events involving $X$ and $Y$.

#### 2.1 Probability of a Specific Pair of Values

This is directly given by the joint pmf:
$$ P(X = x, Y = y) = p_{X,Y}(x, y) $$

#### 2.2 Probability of an Event "X = x"

To find the probability that $X$ takes a specific value $x$, regardless of the value of $Y$, we sum the joint probabilities over all possible values of $Y$:
$$ P(X = x) = \sum_{y} p_{X,Y}(x, y) $$
This is called the **marginal probability mass function of X**.

#### 2.3 Probability of an Event "Y = y"

Similarly, to find the probability that $Y$ takes a specific value $y$, regardless of the value of $X$, we sum the joint probabilities over all possible values of $X$:
$$ P(Y = y) = \sum_{x} p_{X,Y}(x, y) $$
This is called the **marginal probability mass function of Y**.

#### 2.4 Probability of an Event "X in A and Y in B"

For any sets $A$ and $B$ of possible values for $X$ and $Y$ respectively:
$$ P(X \in A, Y \in B) = \sum_{x \in A} \sum_{y \in B} p_{X,Y}(x, y) $$

**Example (continued):**

Using the joint pmf from the two coin flips:

| $y \downarrow / x \rightarrow$ | 0     | 1     |
| :---------------------------- | :---- | :---- |
| 0                             | 1/4   | 1/4   |
| 1                             | 1/4   | 1/4   |

*   **Probability of getting exactly one head in total:** This corresponds to the event $(X=1, Y=0)$ or $(X=0, Y=1)$.
    $$ P(\text{one head total}) = P(X=1, Y=0) + P(X=0, Y=1) = 1/4 + 1/4 = 1/2 $$

*   **Probability that the first coin is Heads (X=1):**
    $$ P(X=1) = \sum_{y} p_{X,Y}(1, y) = p_{X,Y}(1, 0) + p_{X,Y}(1, 1) = 1/4 + 1/4 = 1/2 $$
    This is the marginal probability of $X=1$.

*   **Probability that the second coin is Tails (Y=0):**
    $$ P(Y=0) = \sum_{x} p_{X,Y}(x, 0) = p_{X,Y}(0, 0) + p_{X,Y}(1, 0) = 1/4 + 1/4 = 1/2 $$
    This is the marginal probability of $Y=0$.

---

### 3. Marginal Probability Mass Functions

As seen in the previous section, we can derive the individual probability distributions of $X$ and $Y$ from their joint pmf.

#### 3.1 Definition

*   The **marginal pmf of X** is given by $p_X(x) = P(X=x) = \sum_{y} p_{X,Y}(x, y)$.
*   The **marginal pmf of Y** is given by $p_Y(y) = P(Y=y) = \sum_{x} p_{X,Y}(x, y)$.

**Important Note:** The marginal pmf for $X$ must sum to 1 over all possible values of $x$, and similarly for $Y$.
$$ \sum_{x} p_X(x) = 1 \quad \text{and} \quad \sum_{y} p_Y(y) = 1 $$

**Example (continued):**

Marginal pmf of X:
*   $p_X(0) = p_{X,Y}(0, 0) + p_{X,Y}(0, 1) = 1/4 + 1/4 = 1/2$
*   $p_X(1) = p_{X,Y}(1, 0) + p_{X,Y}(1, 1) = 1/4 + 1/4 = 1/2$

Marginal pmf of Y:
*   $p_Y(0) = p_{X,Y}(0, 0) + p_{X,Y}(1, 0) = 1/4 + 1/4 = 1/2$
*   $p_Y(1) = p_{X,Y}(0, 1) + p_{X,Y}(1, 1) = 1/4 + 1/4 = 1/2$

Both $X$ and $Y$ follow a Bernoulli distribution with $p=1/2$.

---

### 4. Conditional Probability Mass Functions

The conditional pmf describes the probability distribution of one random variable given that the other random variable has taken a specific value.

#### 4.1 Definition

*   The **conditional pmf of Y given X = x** is defined as:
    $$ p_{Y|X}(y|x) = P(Y = y | X = x) = \frac{p_{X,Y}(x, y)}{p_X(x)} $$
    This is defined only when $p_X(x) > 0$.

*   The **conditional pmf of X given Y = y** is defined as:
    $$ p_{X|Y}(x|y) = P(X = x | Y = y) = \frac{p_{X,Y}(x, y)}{p_Y(y)} $$
    This is defined only when $p_Y(y) > 0$.

#### 4.2 Properties of Conditional pmf

Similar to regular pmfs, the conditional pmfs must satisfy:

1.  **Non-negativity:** $p_{Y|X}(y|x) \ge 0$ for all $y$ (for a fixed $x$).
2.  **Normalization:** $\sum_{y} p_{Y|X}(y|x) = 1$ for any fixed $x$ where $p_X(x) > 0$.
    And similarly for $p_{X|Y}(x|y)$.

#### 4.3 Using Conditional pmf

The conditional pmf can be used to calculate probabilities. For example:
$$ P(Y = y \text{ and } X = x) = p_{Y|X}(y|x) p_X(x) = p_{X,Y}(x, y) $$
This is simply a rearrangement of the definition. It also means:
$$ P(Y \in B | X = x) = \sum_{y \in B} p_{Y|X}(y|x) $$

**Example (continued):**

Let's find the conditional pmf of $Y$ given $X=1$.
We know $p_{X,Y}(1, 0) = 1/4$, $p_{X,Y}(1, 1) = 1/4$, and $p_X(1) = 1/2$.

*   $p_{Y|X}(0|1) = P(Y=0 | X=1) = \frac{p_{X,Y}(1, 0)}{p_X(1)} = \frac{1/4}{1/2} = 1/2$
*   $p_{Y|X}(1|1) = P(Y=1 | X=1) = \frac{p_{X,Y}(1, 1)}{p_X(1)} = \frac{1/4}{1/2} = 1/2$

So, given that the first coin is Heads ($X=1$), the probability that the second coin is Tails ($Y=0$) is 1/2, and the probability that the second coin is Heads ($Y=1$) is also 1/2. This makes intuitive sense.

---

### 5. Independence of Discrete Random Variables

A crucial concept in probability theory is independence. For discrete random variables, independence has a specific definition related to their joint and marginal pmfs.

#### 5.1 Definition of Independence

Two discrete random variables $X$ and $Y$ are **independent** if and only if their joint pmf is equal to the product of their marginal pmfs for all possible values of $x$ and $y$:

$$ p_{X,Y}(x, y) = p_X(x) p_Y(y) \quad \text{for all } x, y $$

**Equivalently:**

$X$ and $Y$ are independent if and only if for every $x$ such that $p_X(x) > 0$ and every $y$ such that $p_Y(y) > 0$:

$$ p_{Y|X}(y|x) = p_Y(y) \quad \text{and} \quad p_{X|Y}(x|y) = p_X(x) $$

This means that the knowledge of the value of one variable does not change the probability distribution of the other variable.

#### 5.2 Checking for Independence

To check if $X$ and $Y$ are independent, you need to:
1.  Calculate the marginal pmfs $p_X(x)$ and $p_Y(y)$.
2.  Calculate the product $p_X(x) p_Y(y)$ for all pairs $(x, y)$.
3.  Compare this product with the joint pmf $p_{X,Y}(x, y)$. If they are equal for all pairs, then $X$ and $Y$ are independent.

**Example (continued):**

Let's check for independence in the two-coin flip example.
We have:
*   $p_{X,Y}(x, y) = 1/4$ for all $x, y \in \{0, 1\}$.
*   $p_X(0) = 1/2$, $p_X(1) = 1/2$.
*   $p_Y(0) = 1/2$, $p_Y(1) = 1/2$.

Now, let's check the product of marginals:
*   $p_X(0) p_Y(0) = (1/2)(1/2) = 1/4$. This equals $p_{X,Y}(0, 0)$.
*   $p_X(0) p_Y(1) = (1/2)(1/2) = 1/4$. This equals $p_{X,Y}(0, 1)$.
*   $p_X(1) p_Y(0) = (1/2)(1/2) = 1/4$. This equals $p_{X,Y}(1, 0)$.
*   $p_X(1) p_Y(1) = (1/2)(1/2) = 1/4$. This equals $p_{X,Y}(1, 1)$.

Since $p_{X,Y}(x, y) = p_X(x) p_Y(y)$ for all $x, y$, the random variables $X$ and $Y$ (number of heads on the first and second coin flips) are independent. This aligns with our understanding of independent coin flips.

---

### Important Points to Remember:

*   **Joint pmf $p_{X,Y}(x, y)$ gives $P(X=x, Y=y)$.**
*   **Sum of all joint probabilities must be 1.**
*   **Marginal pmf $p_X(x)$ is obtained by summing $p_{X,Y}(x, y)$ over all possible $y$.**
*   **Conditional pmf $p_{Y|X}(y|x)$ is $\frac{p_{X,Y}(x, y)}{p_X(x)}$.**
*   **Independence means $p_{X,Y}(x, y) = p_X(x) p_Y(y)$ for all $x, y$.**
*   **If two random variables are independent, their conditional distribution is the same as their marginal distribution.**

---

### Practice Questions:

**Question 1:**
Let $X$ and $Y$ be two discrete random variables with the following joint pmf:

| $y \downarrow / x \rightarrow$ | 0     | 1     | 2     |
| :---------------------------- | :---- | :---- | :---- |
| 0                             | 0.1   | 0.2   | 0.1   |
| 1                             | 0.3   | 0.1   | 0.2   |

a) Verify that this is a valid joint pmf.
b) Calculate $P(X=1, Y=0)$.
c) Calculate $P(X < 2)$.
d) Calculate the marginal pmf of $X$, $p_X(x)$.
e) Calculate the marginal pmf of $Y$, $p_Y(y)$.
f) Calculate $P(Y=1 | X=0)$.
g) Are $X$ and $Y$ independent? Justify your answer.

**Question 2:**
A factory produces two types of components, A and B. Let $X$ be the number of type A components produced in an hour, and $Y$ be the number of type B components produced in an hour. Assume $X$ can take values {0, 1} and $Y$ can take values {0, 1}. The joint pmf is given by:

$p_{X,Y}(0, 0) = 0.3$
$p_{X,Y}(0, 1) = 0.2$
$p_{X,Y}(1, 0) = 0.1$
$p_{X,Y}(1, 1) = 0.4$

a) Construct a table for the joint pmf.
b) Calculate the probability that exactly one component is produced in an hour.
c) Calculate the marginal pmf of $X$.
d) Calculate the probability that 1 type A component is produced given that at least one component is produced.
e) Are $X$ and $Y$ independent?

---

### Answers to Practice Questions:

**Answer 1:**

a) **Verification of valid joint pmf:**
Sum of all probabilities = $0.1 + 0.2 + 0.1 + 0.3 + 0.1 + 0.2 = 1.0$.
All probabilities are non-negative. Therefore, it is a valid joint pmf.

b) $P(X=1, Y=0) = p_{X,Y}(1, 0) = 0.2$.

c) $P(X < 2) = P(X=0) + P(X=1)$
   First, we need the marginal pmf of X:
   $p_X(0) = p_{X,Y}(0, 0) + p_{X,Y}(0, 1) + p_{X,Y}(0, 2) = 0.1 + 0.2 + 0.1 = 0.4$
   $p_X(1) = p_{X,Y}(1, 0) + p_{X,Y}(1, 1) + p_{X,Y}(1, 2) = 0.3 + 0.1 + 0.2 = 0.6$
   $p_X(2) = p_{X,Y}(2, 0) + p_{X,Y}(2, 1) + p_{X,Y}(2, 2) = 0$ (assuming X can only take values 0 and 1 based on the table structure, or if Y can only take values 0 and 1 and X=2 has 0 probability of occurring with those Y values. Let's assume X can take 0, 1, 2 as presented in columns.)
   The table implicitly defines the possible values of X as {0, 1, 2} and Y as {0, 1}.
   $p_X(0) = 0.1 + 0.2 + 0.1 = 0.4$
   $p_X(1) = 0.3 + 0.1 + 0.2 = 0.6$
   $p_X(2) = 0$ (as there are no entries in the row for Y=0 or Y=1 where X=2). Let's re-interpret the table. Columns are X values.
   $p_X(0) = 0.1 + 0.3 = 0.4$
   $p_X(1) = 0.2 + 0.1 = 0.3$
   $p_X(2) = 0.1 + 0.2 = 0.3$
   Now, $P(X < 2) = P(X=0) + P(X=1) = 0.4 + 0.3 = 0.7$.

d) Marginal pmf of $X$:
   $p_X(0) = 0.1 + 0.3 = 0.4$
   $p_X(1) = 0.2 + 0.1 = 0.3$
   $p_X(2) = 0.1 + 0.2 = 0.3$

e) Marginal pmf of $Y$:
   $p_Y(0) = 0.1 + 0.2 + 0.1 = 0.4$
   $p_Y(1) = 0.3 + 0.1 + 0.2 = 0.6$

f) $P(Y=1 | X=0) = \frac{p_{X,Y}(0, 1)}{p_X(0)} = \frac{0.2}{0.4} = 0.5$.

g) To check for independence, we compare $p_{X,Y}(x, y)$ with $p_X(x) p_Y(y)$.
   Let's check for $(X=0, Y=0)$:
   $p_{X,Y}(0, 0) = 0.1$
   $p_X(0) p_Y(0) = (0.4)(0.4) = 0.16$
   Since $0.1 \neq 0.16$, $X$ and $Y$ are **not independent**.

**Answer 2:**

a) Table for joint pmf:

| $y \downarrow / x \rightarrow$ | 0     | 1     |
| :---------------------------- | :---- | :---- |
| 0                             | 0.3   | 0.1   |
| 1                             | 0.2   | 0.4   |

b) Probability that exactly one component is produced:
   This corresponds to $(X=1, Y=0)$ or $(X=0, Y=1)$.
   $P(\text{exactly one}) = P(X=1, Y=0) + P(X=0, Y=1) = 0.1 + 0.2 = 0.3$.

c) Marginal pmf of $X$:
   $p_X(0) = p_{X,Y}(0, 0) + p_{X,Y}(0, 1) = 0.3 + 0.2 = 0.5$
   $p_X(1) = p_{X,Y}(1, 0) + p_{X,Y}(1, 1) = 0.1 + 0.4 = 0.5$

d) Probability that 1 type A component is produced given that at least one component is produced:
   Event "at least one component produced" is $E = \{(0,1), (1,0), (1,1)\}$.
   $P(E) = P(X=0, Y=1) + P(X=1, Y=0) + P(X=1, Y=1) = 0.2 + 0.1 + 0.4 = 0.7$.
   Alternatively, $P(E) = 1 - P(X=0, Y=0) = 1 - 0.3 = 0.7$.
   The event "1 type A component is produced" is $F = \{(1,0), (1,1)\}$.
   We want $P(F | E) = \frac{P(F \cap E)}{P(E)}$.
   $F \cap E$ is the event that $X=1$ and at least one component is produced. This is simply $X=1$, which are the outcomes $(1,0)$ and $(1,1)$.
   $P(F \cap E) = P(X=1) = p_X(1) = 0.5$.
   So, $P(F | E) = \frac{0.5}{0.7} = \frac{5}{7}$.

e) To check for independence:
   Marginal pmf of $Y$:
   $p_Y(0) = p_{X,Y}(0, 0) + p_{X,Y}(1, 0) = 0.3 + 0.1 = 0.4$
   $p_Y(1) = p_{X,Y}(0, 1) + p_{X,Y}(1, 1) = 0.2 + 0.4 = 0.6$

   Let's check for $(X=0, Y=0)$:
   $p_{X,Y}(0, 0) = 0.3$
   $p_X(0) p_Y(0) = (0.5)(0.4) = 0.2$
   Since $0.3 \neq 0.2$, $X$ and $Y$ are **not independent**.
