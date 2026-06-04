---
title: "Independent random variables"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 1: Random variables"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810925"
status: "completed"
scrapedAt: "2026-05-20T18:45:58.870Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4: Module 1: Random Variables

## Topic: Independent Random Variables

### 1. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Define** the concept of independence for random variables.
*   **Identify** conditions under which two or more random variables are independent.
*   **Apply** the concept of independence to calculate probabilities involving multiple random variables.
*   **Understand** the implications of independence for the joint probability distribution and marginal probability distributions of random variables.
*   **Recognize** and utilize the properties of independent random variables in problem-solving within physical science contexts.

### 2. Key Concepts and Definitions

#### 2.1 What are Independent Random Variables?

In probability theory, **independence** is a fundamental concept that describes the absence of any relationship or influence between random variables.

**Informal Definition:** Two random variables are independent if the outcome of one does not affect the outcome of the other.

**Formal Definition:**

*   **For discrete random variables $X$ and $Y$:**
    $X$ and $Y$ are independent if their joint probability mass function (PMF) $P(X=x, Y=y)$ can be expressed as the product of their marginal PMFs:
    $$P(X=x, Y=y) = P(X=x) \cdot P(Y=y) \quad \text{for all possible values of } x \text{ and } y.$$

*   **For continuous random variables $X$ and $Y$:**
    $X$ and $Y$ are independent if their joint probability density function (PDF) $f_{X,Y}(x,y)$ can be expressed as the product of their marginal PDFs:
    $$f_{X,Y}(x,y) = f_X(x) \cdot f_Y(y) \quad \text{for all possible values of } x \text{ and } y.$$

**Important Note:** The condition of independence must hold *for all possible values* of the random variables.

#### 2.2 Conditions for Independence

**Direct Check:** The most direct way to check for independence is to verify if the joint PMF/PDF is equal to the product of the marginal PMFs/PDFs.

**Using Conditional Probabilities:**

*   **For discrete random variables $X$ and $Y$:**
    $X$ and $Y$ are independent if and only if:
    $$P(X=x | Y=y) = P(X=x) \quad \text{for all } y \text{ such that } P(Y=y) > 0$$
    and
    $$P(Y=y | X=x) = P(Y=y) \quad \text{for all } x \text{ such that } P(X=x) > 0.$$

    This means the conditional probability of $X$ taking a certain value, given $Y$, is the same as the unconditional probability of $X$ taking that value.

*   **For continuous random variables $X$ and $Y$:**
    $X$ and $Y$ are independent if and only if:
    $$f_{X|Y}(x|y) = f_X(x) \quad \text{for all } y \text{ where } f_Y(y) > 0$$
    and
    $$f_{Y|X}(y|x) = f_Y(y) \quad \text{for all } x \text{ where } f_X(x) > 0.$$

**Independence of Functions of Random Variables:**
If $X$ and $Y$ are independent random variables, then any function of $X$, say $g(X)$, and any function of $Y$, say $h(Y)$, are also independent.

#### 2.3 Independence for Multiple Random Variables

The concept of independence extends to more than two random variables.

**For discrete random variables $X_1, X_2, \ldots, X_n$:**
These variables are **mutually independent** if for every subset of indices $\{i_1, i_2, \ldots, i_k\}$ and for all possible values $x_{i_1}, x_{i_2}, \ldots, x_{i_k}$:
$$P(X_{i_1}=x_{i_1}, X_{i_2}=x_{i_2}, \ldots, X_{i_k}=x_{i_k}) = P(X_{i_1}=x_{i_1}) \cdot P(X_{i_2}=x_{i_2}) \cdots P(X_{i_k}=x_{i_k}).$$
Crucially, this must hold for all possible subsets, including pairs.

**For continuous random variables $X_1, X_2, \ldots, X_n$:**
These variables are **mutually independent** if their joint PDF can be expressed as the product of their marginal PDFs:
$$f_{X_1, X_2, \ldots, X_n}(x_1, x_2, \ldots, x_n) = f_{X_1}(x_1) \cdot f_{X_2}(x_2) \cdots f_{X_n}(x_n)$$
for all possible values $(x_1, x_2, \ldots, x_n)$.

**Pairwise vs. Mutual Independence:**
It's important to distinguish between pairwise independence and mutual independence.
*   **Pairwise independence:** Any pair of random variables from a set is independent.
*   **Mutual independence:** The joint probability of any combination of variables is the product of their individual probabilities.

**Mutual independence implies pairwise independence, but the converse is NOT true.**

### 3. Applications and Implications

#### 3.1 Joint Probability Calculations

If random variables are independent, calculating joint probabilities becomes significantly simpler.

*   **Discrete:** $P(X=x, Y=y) = P(X=x) \cdot P(Y=y)$
*   **Continuous:** $f_{X,Y}(x,y) = f_X(x) \cdot f_Y(y)$

This also extends to the probability of events involving independent random variables:
If $A$ is an event related to $X$ and $B$ is an event related to $Y$, and $X, Y$ are independent, then $P(A \cap B) = P(A) \cdot P(B)$.

#### 3.2 Expected Values and Variances

**Expected Value of a Product:**
If $X$ and $Y$ are independent, then the expected value of their product is the product of their expected values:
$$E[XY] = E[X]E[Y]$$

**Variance of a Sum:**
If $X$ and $Y$ are independent, the variance of their sum is the sum of their variances:
$$Var(X+Y) = Var(X) + Var(Y)$$

**Proof for $Var(X+Y)$ (for independent $X, Y$):**
$Var(X+Y) = E[(X+Y - E[X+Y])^2]$
$= E[(X - E[X] + Y - E[Y])^2]$
$= E[(X - E[X])^2 + 2(X - E[X])(Y - E[Y]) + (Y - E[Y])^2]$
$= E[(X - E[X])^2] + 2E[(X - E[X])(Y - E[Y])] + E[(Y - E[Y])^2]$
$= Var(X) + 2E[X - E[X]]E[Y - E[Y]] + Var(Y) \quad (\text{due to independence})$
$= Var(X) + 2(0)(0) + Var(Y)$
$= Var(X) + Var(Y)$

**Important Note:** The converse is NOT true. $Var(X+Y) = Var(X) + Var(Y)$ does NOT necessarily imply independence.

#### 3.3 Joint Distributions and Marginal Distributions

If random variables are independent, their joint distribution is completely determined by their marginal distributions. Conversely, if the joint distribution can be factored into the product of marginal distributions, then the variables are independent.

### 4. Examples

#### Example 1: Discrete Random Variables (Coin Flips)

Let $X$ be the outcome of the first coin flip (1 for Heads, 0 for Tails) and $Y$ be the outcome of the second coin flip. Assume a fair coin, so $P(\text{Heads}) = P(\text{Tails}) = 0.5$.

*   $P(X=1) = 0.5$, $P(X=0) = 0.5$
*   $P(Y=1) = 0.5$, $P(Y=0) = 0.5$

Since the coin flips are independent events:
$P(X=1, Y=1) = P(\text{Heads on 1st flip}) \cdot P(\text{Heads on 2nd flip}) = 0.5 \cdot 0.5 = 0.25$
$P(X=1, Y=0) = P(\text{Heads on 1st flip}) \cdot P(\text{Tails on 2nd flip}) = 0.5 \cdot 0.5 = 0.25$
$P(X=0, Y=1) = P(\text{Tails on 1st flip}) \cdot P(\text{Heads on 2nd flip}) = 0.5 \cdot 0.5 = 0.25$
$P(X=0, Y=0) = P(\text{Tails on 1st flip}) \cdot P(\text{Tails on 2nd flip}) = 0.5 \cdot 0.5 = 0.25$

Indeed, $P(X=x, Y=y) = P(X=x) \cdot P(Y=y)$ for all $x, y \in \{0, 1\}$. Thus, $X$ and $Y$ are independent.

#### Example 2: Continuous Random Variables (Exponential Distributions)

Let $X$ be the time until the first event in a Poisson process with rate $\lambda_1$, and $Y$ be the time until the first event in a *separate* Poisson process with rate $\lambda_2$.
Then $X \sim Exp(\lambda_1)$ and $Y \sim Exp(\lambda_2)$, with PDFs:
$f_X(x) = \lambda_1 e^{-\lambda_1 x}$ for $x \ge 0$
$f_Y(y) = \lambda_2 e^{-\lambda_2 y}$ for $y \ge 0$

The events in separate Poisson processes are independent. Therefore, $X$ and $Y$ are independent. Their joint PDF is:
$f_{X,Y}(x,y) = f_X(x) \cdot f_Y(y) = (\lambda_1 e^{-\lambda_1 x}) (\lambda_2 e^{-\lambda_2 y}) = \lambda_1 \lambda_2 e^{-(\lambda_1 x + \lambda_2 y)}$ for $x \ge 0, y \ge 0$.

#### Example 3: Non-Independence (The Birthday Problem Analogy)

Consider two people. Let $A$ be the event that the first person's birthday is in January, and $B$ be the event that the second person's birthday is in January.
Assuming 31 days in January and 365 days in a year:
$P(A) \approx 31/365$
$P(B) \approx 31/365$

If the second person's birthday is independent of the first person's birthday, then $P(A \cap B) = P(A) \cdot P(B)$.
However, if we consider the event $C$: "Both people have birthdays in January," and event $D$: "The first person has a birthday in January."
$P(C) = (31/365) \cdot (30/364)$ (if we assume they are different people).
$P(C|D) = 30/364$.
$P(C|D) \neq P(C)$, which shows dependence.

More simply, consider the event "The first person's birthday is Jan 1st" ($E_1$) and "The second person's birthday is Jan 1st" ($E_2$).
$P(E_1) = 1/365$
$P(E_2) = 1/365$
If they are independent, $P(E_1 \cap E_2) = (1/365)^2$. This holds true if we assume birthdays are uniformly distributed and independent.

Now, consider the event $F$: "Both people share the same birthday."
Let $B_i$ be the birthday of person $i$.
$P(F) = P(B_1 = B_2)$.
If we consider $P(F | B_1 = \text{Jan 1st})$, then $P(F | B_1 = \text{Jan 1st}) = P(B_2 = \text{Jan 1st}) = 1/365$.
However, $P(F) = \sum_{k=1}^{365} P(B_1 = k, B_2 = k) = \sum_{k=1}^{365} P(B_1=k)P(B_2=k) = \sum_{k=1}^{365} (1/365)(1/365) = 365 \cdot (1/365)^2 = 1/365$.

The question of independence arises when we consider events that are *not* directly about specific outcomes being the same or different, but rather about information gained.

#### Example 4: Demonstrating Non-Mutual Independence

Let $X, Y, Z$ be three Bernoulli random variables with $P(X=1)=P(Y=1)=P(Z=1)=0.5$.
Suppose they are defined such that:
$X \sim Bernoulli(0.5)$
$Y \sim Bernoulli(0.5)$
$Z = X \oplus Y$ (XOR operation: $Z=1$ if $X \neq Y$, $Z=0$ if $X=Y$)

Let's check pairwise independence:
*   $P(X=1, Y=1) = P(X=1)P(Y=1) = 0.5 \times 0.5 = 0.25$
*   $P(X=1, Y=0) = P(X=1)P(Y=0) = 0.5 \times 0.5 = 0.25$
*   $P(X=0, Y=1) = P(X=0)P(Y=1) = 0.5 \times 0.5 = 0.25$
*   $P(X=0, Y=0) = P(X=0)P(Y=0) = 0.5 \times 0.5 = 0.25$

From the definition of $Z$:
*   If $X=1, Y=1$, then $Z=0$. $P(X=1, Y=1, Z=0) = 0.25$.
*   If $X=1, Y=0$, then $Z=1$. $P(X=1, Y=0, Z=1) = 0.25$.
*   If $X=0, Y=1$, then $Z=1$. $P(X=0, Y=1, Z=1) = 0.25$.
*   If $X=0, Y=0$, then $Z=0$. $P(X=0, Y=0, Z=0) = 0.25$.

Now let's check mutual independence. For mutual independence, we need:
$P(X=x, Y=y, Z=z) = P(X=x)P(Y=y)P(Z=z)$ for all $x,y,z$.

First, let's find the marginal PMF of $Z$:
$P(Z=0) = P(X=0, Y=0) + P(X=1, Y=1) = 0.25 + 0.25 = 0.5$
$P(Z=1) = P(X=0, Y=1) + P(X=1, Y=0) = 0.25 + 0.25 = 0.5$
So, $Z \sim Bernoulli(0.5)$, just like $X$ and $Y$.

Now, let's check a specific joint probability:
Consider $P(X=1, Y=1, Z=0)$. We know this is $0.25$.
$P(X=1)P(Y=1)P(Z=0) = 0.5 \times 0.5 \times 0.5 = 0.125$.

Since $0.25 \neq 0.125$, $X, Y, Z$ are NOT mutually independent.
However, we can check pairwise independence:
*   $P(X=1, Y=1) = 0.25 = P(X=1)P(Y=1)$ (Independent)
*   $P(X=1, Z=1) = P(X=1, Y=0) = 0.25 = P(X=1)P(Z=1)$ (Independent)
*   $P(Y=1, Z=1) = P(Y=1, X=0) = 0.25 = P(Y=1)P(Z=1)$ (Independent)

So, $X, Y, Z$ are pairwise independent, but not mutually independent. This highlights the crucial difference.

### 5. Practice Questions

**Question 1 (Discrete):**
Two independent fair dice are rolled. Let $X$ be the sum of the numbers shown on the two dice, and $Y$ be the number shown on the first die.
a) What is the range of possible values for $X$ and $Y$?
b) Calculate $P(Y=3)$ and $P(X=7)$.
c) Calculate $P(X=7 \text{ and } Y=3)$.
d) Are $X$ and $Y$ independent random variables? Justify your answer.

**Question 2 (Continuous):**
Let $X$ and $Y$ be two independent random variables with the following PDFs:
$f_X(x) = \begin{cases} 2x & \text{if } 0 \le x \le 1 \\ 0 & \text{otherwise} \end{cases}$
$f_Y(y) = \begin{cases} 3y^2 & \text{if } 0 \le y \le 1 \\ 0 & \text{otherwise} \end{cases}$
a) Find the joint PDF $f_{X,Y}(x,y)$.
b) Calculate $P(0.5 \le X \le 1 \text{ and } 0 \le Y \le 0.5)$.
c) Calculate $E[X]$ and $E[Y]$.
d) Calculate $E[XY]$. Is it equal to $E[X]E[Y]$?

**Question 3 (Independence Property):**
Let $X$ and $Y$ be independent random variables. Let $g(X) = X^2$ and $h(Y) = e^Y$. Are $g(X)$ and $h(Y)$ independent? Explain why.

**Question 4 (Conceptual):**
Explain the difference between pairwise independence and mutual independence. Provide an example of random variables that are pairwise independent but not mutually independent.

---

### Answers to Practice Questions

**Answer 1:**
a) $X \in \{2, 3, \ldots, 12\}$, $Y \in \{1, 2, 3, 4, 5, 6\}$.
b) $P(Y=3) = 1/6$.
   To calculate $P(X=7)$, we can list the combinations: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). There are 6 combinations out of 36 total possible outcomes. So, $P(X=7) = 6/36 = 1/6$.
c) Since the dice rolls are independent, the random variables representing the outcomes of each die are independent. The sum $X$ is a function of both rolls, and $Y$ is a function of the first roll. However, we cannot directly say $X$ and $Y$ are independent without checking the definition.

    Let's calculate $P(X=7 \text{ and } Y=3)$.
    For $X=7$ and $Y=3$, the first die must be 3. The second die must then be $7-3=4$.
    The only combination is (3,4).
    The probability of (3,4) is $P(\text{1st die}=3) \cdot P(\text{2nd die}=4) = (1/6) \cdot (1/6) = 1/36$.
    So, $P(X=7, Y=3) = 1/36$.

d) To check for independence, we need to see if $P(X=7, Y=3) = P(X=7) \cdot P(Y=3)$.
    $P(X=7) \cdot P(Y=3) = (1/6) \cdot (1/6) = 1/36$.
    Since $P(X=7, Y=3) = P(X=7) \cdot P(Y=3)$, they are independent *in this specific case*.

    **Important Caveat:** While $X$ and $Y$ might appear independent for specific values, we need to check for *all* possible values. For instance, $P(X=2, Y=3) = P(\text{1st die}=3, \text{2nd die}= -1)$, which is 0. But $P(X=2) = 1/36$ and $P(Y=3)=1/6$. $P(X=2)P(Y=3) = 1/216$. $0 \neq 1/216$. Therefore, $X$ and $Y$ are NOT independent in general. The question implies checking for independence as random variables, not just for specific outcomes.

    **Correct Answer to d):** No, $X$ and $Y$ are NOT independent random variables. The condition $P(X=x, Y=y) = P(X=x)P(Y=y)$ does not hold for all $x, y$. For example, $P(X=2, Y=3) = 0$ (as the first die can only be 1 to 6, meaning $X=2$ can only happen with (1,1)), but $P(X=2) = 1/36$ and $P(Y=3) = 1/6$. Their product is $1/216$, which is not equal to 0.

**Answer 2:**
a) Since $X$ and $Y$ are independent, their joint PDF is the product of their marginal PDFs:
   $f_{X,Y}(x,y) = f_X(x) \cdot f_Y(y) = (2x)(3y^2) = 6xy^2$ for $0 \le x \le 1$ and $0 \le y \le 1$, and 0 otherwise.

b) $P(0.5 \le X \le 1 \text{ and } 0 \le Y \le 0.5) = \int_{0.5}^{1} \int_{0}^{0.5} 6xy^2 \, dy \, dx$
   $= \int_{0.5}^{1} \left[ 2xy^3 \right]_{0}^{0.5} \, dx$
   $= \int_{0.5}^{1} 2x (0.5)^3 \, dx$
   $= \int_{0.5}^{1} 2x (0.125) \, dx$
   $= \int_{0.5}^{1} 0.25x \, dx$
   $= \left[ 0.125x^2 \right]_{0.5}^{1}$
   $= 0.125(1)^2 - 0.125(0.5)^2$
   $= 0.125 - 0.125(0.25) = 0.125(1 - 0.25) = 0.125 \times 0.75 = 0.09375$

c) $E[X] = \int_{-\infty}^{\infty} x f_X(x) \, dx = \int_{0}^{1} x(2x) \, dx = \int_{0}^{1} 2x^2 \, dx = \left[ \frac{2}{3}x^3 \right]_{0}^{1} = \frac{2}{3}$.
   $E[Y] = \int_{-\infty}^{\infty} y f_Y(y) \, dy = \int_{0}^{1} y(3y^2) \, dy = \int_{0}^{1} 3y^3 \, dy = \left[ \frac{3}{4}y^4 \right]_{0}^{1} = \frac{3}{4}$.

d) $E[XY] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} xy f_{X,Y}(x,y) \, dy \, dx$
   $= \int_{0}^{1} \int_{0}^{1} xy (6xy^2) \, dy \, dx$
   $= \int_{0}^{1} \int_{0}^{1} 6x^2y^3 \, dy \, dx$
   $= \int_{0}^{1} \left[ 2x^2y^4 \right]_{0}^{1} \, dx$
   $= \int_{0}^{1} 2x^2 \, dx$
   $= \left[ \frac{2}{3}x^3 \right]_{0}^{1} = \frac{2}{3}$.

   $E[X]E[Y] = (\frac{2}{3})(\frac{3}{4}) = \frac{6}{12} = \frac{1}{2}$.
   Yes, $E[XY] = 2/3$ and $E[X]E[Y] = 1/2$. In this case, $E[XY] \neq E[X]E[Y]$. This is correct because the calculation for $E[XY]$ was done using the joint PDF $f_{X,Y}(x,y) = 6xy^2$, which is indeed the product of marginals $f_X(x)=2x$ and $f_Y(y)=3y^2$. The independence of $X$ and $Y$ guarantees $E[XY]=E[X]E[Y]$ IF the joint PDF is the product of marginals.

   Let's re-evaluate the $E[XY]$ calculation.
   $E[XY] = \int_{0}^{1} \int_{0}^{1} xy (6xy^2) \, dy \, dx = \int_{0}^{1} \int_{0}^{1} 6x^2 y^3 \, dy \, dx$
   Inner integral: $\int_{0}^{1} 6x^2 y^3 \, dy = 6x^2 \left[ \frac{y^4}{4} \right]_{0}^{1} = 6x^2 (\frac{1}{4}) = \frac{3}{2}x^2$.
   Outer integral: $\int_{0}^{1} \frac{3}{2}x^2 \, dx = \frac{3}{2} \left[ \frac{x^3}{3} \right]_{0}^{1} = \frac{3}{2} (\frac{1}{3}) = \frac{1}{2}$.

   So, $E[XY] = 1/2$.
   And $E[X]E[Y] = (2/3)(3/4) = 1/2$.
   Yes, $E[XY] = E[X]E[Y]$ is correct. My initial calculation of $E[XY]$ was wrong.

**Answer 3:**
Yes, $g(X)$ and $h(Y)$ are independent.
**Reasoning:** If two random variables $X$ and $Y$ are independent, then any function of $X$, say $g(X)$, and any function of $Y$, say $h(Y)$, are also independent. This is a fundamental property of independence. The independence of $X$ and $Y$ means that the outcomes of $X$ do not influence the outcomes of $Y$. Transforming $X$ into $g(X)$ or $Y$ into $h(Y)$ does not introduce any dependence between them.

**Answer 4:**
*   **Pairwise Independence:** A set of random variables $\{X_1, X_2, \ldots, X_n\}$ is pairwise independent if every pair $(X_i, X_j)$ with $i \neq j$ is independent. This means $P(X_i = x_i, X_j = x_j) = P(X_i = x_i) P(X_j = x_j)$ for all possible values $x_i, x_j$.

*   **Mutual Independence:** A set of random variables $\{X_1, X_2, \ldots, X_n\}$ is mutually independent if for any subset of indices $\{i_1, i_2, \ldots, i_k\}$ and for all possible values $x_{i_1}, x_{i_2}, \ldots, x_{i_k}$:
    $$P(X_{i_1}=x_{i_1}, X_{i_2}=x_{i_2}, \ldots, X_{i_k}=x_{i_k}) = P(X_{i_1}=x_{i_1}) \cdot P(X_{i_2}=x_{i_2}) \cdots P(X_{i_k}=x_{i_k}).$$
    This condition must hold for all possible subsets, including pairs.

**Key Difference:** Mutual independence is a stronger condition than pairwise independence. Mutual independence implies pairwise independence, but pairwise independence does not necessarily imply mutual independence.

**Example of Pairwise Independent but Not Mutually Independent:**
Consider three Bernoulli random variables $X, Y, Z$, each with $P(X=1)=P(Y=1)=P(Z=1)=0.5$.
Let their joint probabilities be defined as follows:
$P(X=1, Y=1, Z=1) = 0.25$
$P(X=1, Y=1, Z=0) = 0$
$P(X=1, Y=0, Z=1) = 0.25$
$P(X=1, Y=0, Z=0) = 0.25$
$P(X=0, Y=1, Z=1) = 0.25$
$P(X=0, Y=1, Z=0) = 0.25$
$P(X=0, Y=0, Z=1) = 0$
$P(X=0, Y=0, Z=0) = 0.25$

Let's check marginal probabilities:
$P(X=1) = P(X=1, Y=1, Z=1) + P(X=1, Y=1, Z=0) + P(X=1, Y=0, Z=1) + P(X=1, Y=0, Z=0)$
$P(X=1) = 0.25 + 0 + 0.25 + 0.25 = 0.75$. This is not 0.5 as stated. Let's adjust the probabilities to make them Bernoulli(0.5).

**A better example (from a standard source):**
Let $X, Y, Z$ be three random variables such that:
$X \sim Bernoulli(1/2)$
$Y \sim Bernoulli(1/2)$
$Z \sim Bernoulli(1/2)$
And let them be defined such that:
$P(X=1) = 1/2$, $P(X=0) = 1/2$
$P(Y=1) = 1/2$, $P(Y=0) = 1/2$
$P(Z=1) = 1/2$, $P(Z=0) = 1/2$

Consider the joint distribution:
$P(X=1, Y=1, Z=1) = 1/8$
$P(X=1, Y=0, Z=0) = 1/8$
$P(X=0, Y=1, Z=0) = 1/8$
$P(X=0, Y=0, Z=1) = 1/8$
And all other 8 combinations have probability 0. (Sum of probabilities = $4 \times 1/8 = 1/2$, which is wrong, needs to sum to 1).

Let's use the XOR example from before, but ensure they are all Bernoulli(0.5).
$X \sim Bernoulli(0.5)$
$Y \sim Bernoulli(0.5)$
$Z = X \oplus Y$ (XOR)

We found $P(X=1)=0.5$, $P(Y=1)=0.5$, $P(Z=1)=0.5$.
We checked pairwise independence and they were independent.
$P(X=1, Y=1) = 0.25 = P(X=1)P(Y=1)$.
$P(X=1, Z=1) = P(X=1 \text{ and } Y=0) = 0.25 = P(X=1)P(Z=1)$.
$P(Y=1, Z=1) = P(Y=1 \text{ and } X=0) = 0.25 = P(Y=1)P(Z=1)$.

However, for mutual independence:
$P(X=1, Y=1, Z=1) = P(X=1, Y=1 \text{ and } X \oplus Y = 1)$. This requires $X=1, Y=1$ and $X \oplus Y = 1$, which is impossible. So $P(X=1, Y=1, Z=1)=0$.
But $P(X=1)P(Y=1)P(Z=1) = 0.5 \times 0.5 \times 0.5 = 0.125$.
Since $0 \neq 0.125$, they are not mutually independent. This example is valid.

### 6. Important Points to Remember

*   **Definition is Key:** Independence means the joint probability (or PDF) is the product of the marginal probabilities (or PDFs) for *all* possible values.
*   **No Influence:** Independent random variables do not influence each other's outcomes.
*   **Event Independence:** If $X$ and $Y$ are independent, then for any event $A$ concerning $X$ and any event $B$ concerning $Y$, $P(A \cap B) = P(A)P(B)$.
*   **Expectation of Product:** For independent $X, Y$, $E[XY] = E[X]E[Y]$.
*   **Variance of Sum:** For independent $X, Y$, $Var(X+Y) = Var(X) + Var(Y)$.
*   **Functions of Independent Variables:** If $X$ and $Y$ are independent, then $g(X)$ and $h(Y)$ are also independent for any functions $g$ and $h$.
*   **Pairwise vs. Mutual:** Always distinguish between pairwise independence and mutual independence. Mutual independence is a stronger condition.
*   **Correlation vs. Independence:** For independent random variables, the covariance is zero, and hence the correlation coefficient is zero. However, zero correlation does NOT imply independence.

This concludes the study notes on Independent Random Variables. Practice the problems to solidify your understanding!
