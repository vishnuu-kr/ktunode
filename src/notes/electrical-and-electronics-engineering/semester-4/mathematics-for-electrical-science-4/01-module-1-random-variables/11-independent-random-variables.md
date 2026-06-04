---
title: "Independent random variables"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 1: Random variables"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35d9a"
status: "completed"
scrapedAt: "2026-05-23T16:16:51.399Z"
---
# Mathematics for Electrical Science – 4: Module 1: Random Variables

## Topic: Independent Random Variables

This topic delves into the crucial concept of independence between random variables, a fundamental building block for analyzing complex systems in electrical science. Understanding independence allows us to simplify probability calculations and model systems where the outcomes of different components or events do not influence each other.

---

### **1. Introduction to Independence**

#### **1.1 Intuitive Understanding of Independence**

*   **Definition:** Two random variables, X and Y, are **independent** if the outcome of one variable provides no information about the outcome of the other. In simpler terms, knowing the value of X does not change the probability of any particular value or range of values for Y, and vice versa.
*   **Analogy:** Imagine flipping two fair coins. The outcome of the first coin flip (Heads or Tails) has absolutely no bearing on the outcome of the second coin flip. They are independent events.

#### **1.2 Formal Definition of Independence**

This is a critical concept that forms the basis of all subsequent calculations.

*   **For Discrete Random Variables:**
    *   X and Y are independent if and only if their joint probability mass function (PMF) is the product of their marginal PMFs for all possible values of X and Y:
        $P(X=x, Y=y) = P(X=x) P(Y=y)$ for all $x$ and $y$.

*   **For Continuous Random Variables:**
    *   X and Y are independent if and only if their joint probability density function (PDF) is the product of their marginal PDFs for all possible values of X and Y:
        $f_{XY}(x, y) = f_X(x) f_Y(y)$ for all $x$ and $y$.

*   **Important Note:** The converse is not always true. If the joint PMF/PDF is the product of marginal PMFs/PDFs, then they are independent. However, if they are independent, the joint PMF/PDF *must* be the product of their marginals.

---

### **2. Properties of Independent Random Variables**

The concept of independence simplifies many probability calculations and allows us to derive important properties.

#### **2.1 Independence of Functions of Random Variables**

If X and Y are independent, then any function of X (say, $g(X)$) and any function of Y (say, $h(Y)$) are also independent.

*   **Proof Idea (Discrete):** $P(g(X)=u, h(Y)=v) = \sum_{x: g(x)=u} \sum_{y: h(y)=v} P(X=x, Y=y)$. Since X and Y are independent, this becomes $\sum_{x: g(x)=u} \sum_{y: h(y)=v} P(X=x)P(Y=y)$. This can be factored as $(\sum_{x: g(x)=u} P(X=x)) (\sum_{y: h(y)=v} P(Y=y))$, which are $P(g(X)=u)$ and $P(h(Y)=v)$ respectively.

#### **2.2 Expectation of the Product of Independent Random Variables**

This is a cornerstone property.

*   **Theorem:** If X and Y are independent, then $E[XY] = E[X]E[Y]$.

*   **Proof (Discrete):**
    $E[XY] = \sum_{x} \sum_{y} xy P(X=x, Y=y)$
    Since X and Y are independent, $P(X=x, Y=y) = P(X=x) P(Y=y)$.
    $E[XY] = \sum_{x} \sum_{y} xy P(X=x) P(Y=y)$
    $E[XY] = \sum_{x} x P(X=x) \sum_{y} y P(Y=y)$
    $E[XY] = E[X] E[Y]$

*   **Proof (Continuous):**
    $E[XY] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} xy f_{XY}(x, y) dx dy$
    Since X and Y are independent, $f_{XY}(x, y) = f_X(x) f_Y(y)$.
    $E[XY] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} xy f_X(x) f_Y(y) dx dy$
    $E[XY] = \int_{-\infty}^{\infty} x f_X(x) dx \int_{-\infty}^{\infty} y f_Y(y) dy$
    $E[XY] = E[X] E[Y]$

*   **Important Note:** The converse is not always true. If $E[XY] = E[X]E[Y]$, it does not necessarily imply independence. This is particularly relevant for skewed or non-symmetric distributions.

#### **2.3 Variance of the Sum of Independent Random Variables**

This is a very useful property for analyzing the total variability in a system.

*   **Theorem:** If X and Y are independent, then $Var(X+Y) = Var(X) + Var(Y)$.

*   **Proof:**
    $Var(X+Y) = E[(X+Y - E[X+Y])^2]$
    $E[X+Y] = E[X] + E[Y]$
    $Var(X+Y) = E[((X - E[X]) + (Y - E[Y]))^2]$
    $Var(X+Y) = E[(X - E[X])^2 + 2(X - E[X])(Y - E[Y]) + (Y - E[Y])^2]$
    $Var(X+Y) = E[(X - E[X])^2] + 2E[(X - E[X])(Y - E[Y])] + E[(Y - E[Y])^2]$
    The first term is $Var(X)$.
    The third term is $Var(Y)$.
    For the middle term: $E[(X - E[X])(Y - E[Y])] = E[X - E[X]] E[Y - E[Y]]$ (due to independence of X and Y, and thus $(X-E[X])$ and $(Y-E[Y])$).
    Since $E[X - E[X]] = E[X] - E[E[X]] = E[X] - E[X] = 0$, the middle term becomes $2 * 0 * 0 = 0$.
    Therefore, $Var(X+Y) = Var(X) + Var(Y)$.

*   **Generalization:** If $X_1, X_2, ..., X_n$ are mutually independent random variables, then $Var(\sum_{i=1}^n X_i) = \sum_{i=1}^n Var(X_i)$.

#### **2.4 Covariance of Independent Random Variables**

*   **Theorem:** If X and Y are independent, then $Cov(X, Y) = 0$.

*   **Proof:**
    $Cov(X, Y) = E[(X - E[X])(Y - E[Y])]$
    As shown in the variance proof, due to independence, this equals $E[X - E[X]] E[Y - E[Y]] = 0 * 0 = 0$.

*   **Important Note:** $Cov(X, Y) = 0$ does not imply independence. This occurs when X and Y are uncorrelated, which is a weaker condition than independence. For example, a symmetric distribution like $f(x,y) = 1/2$ for $|x|+|y| \le 1$ would have zero covariance but would not be independent.

#### **2.5 Probability of the Intersection of Independent Events**

When dealing with events defined by random variables, independence of events follows from independence of random variables.

*   **Theorem:** If X and Y are independent random variables, and A is an event related to X (e.g., $A = \{X \in S_X\}$) and B is an event related to Y (e.g., $B = \{Y \in S_Y\}$), then events A and B are independent.
    $P(A \cap B) = P(A) P(B)$.

*   **Example:** Let X be the outcome of a coin toss (H=1, T=0) and Y be the outcome of a dice roll. If the coin toss and dice roll are independent, then the probability of getting Heads AND rolling a 6 is $P(\text{Heads}) * P(\text{rolling a 6}) = 0.5 * (1/6) = 1/12$.

---

### **3. Checking for Independence**

How do we determine if two random variables are independent?

#### **3.1 Using the Definition (PMF/PDF)**

*   **Discrete:** Calculate the joint PMF and the marginal PMFs. Check if $P(X=x, Y=y) = P(X=x)P(Y=y)$ for all possible values of x and y.
*   **Continuous:** Calculate the joint PDF and the marginal PDFs. Check if $f_{XY}(x, y) = f_X(x)f_Y(y)$ for all possible values of x and y.

*   **Tip:** Often, independence can be inferred from the problem description (e.g., "two independent trials"). If not explicitly stated, you must prove it using the PMF/PDF.

#### **3.2 Using Expectation (E[XY] = E[X]E[Y] and Cov(X,Y) = 0)**

*   While these are consequences of independence, they are not sufficient conditions for independence. Use these as checks if you suspect independence, but remember they don't prove it on their own.

---

### **4. Examples and Applications in Electrical Science**

Independence is fundamental in modeling many electrical systems.

#### **4.1 Example 1: Noise in Communication Systems**

*   **Scenario:** Consider two communication channels, each experiencing independent random noise. Let $N_1$ be the noise in channel 1 and $N_2$ be the noise in channel 2. If $N_1$ and $N_2$ are independent random variables (e.g., Gaussian noise with different sources), then:
    *   The total noise in a system combining signals from both channels, $N_{total} = N_1 + N_2$, will have a variance of $Var(N_1) + Var(N_2)$. This is crucial for designing systems that can tolerate combined noise levels.
    *   The expectation of the product of noise values, $E[N_1 N_2]$, would be $E[N_1]E[N_2]$. If the average noise is zero for both channels, then $E[N_1 N_2] = 0$.

#### **4.2 Example 2: Component Failures in a Circuit**

*   **Scenario:** A circuit has two independent components. Let X be an indicator variable for the failure of component 1 (X=1 if failed, X=0 if working) and Y be an indicator variable for the failure of component 2. If their failures are independent, then:
    *   The probability that both components fail is $P(X=1, Y=1) = P(X=1)P(Y=1)$.
    *   The probability that at least one component works is $1 - P(\text{both fail}) = 1 - P(X=1)P(Y=1)$.

#### **4.3 Example 3: Signal Amplitude and Phase**

*   **Scenario:** In some modulation schemes, the amplitude of a signal and its phase might be designed to be independent random variables. This independence simplifies the analysis of signal detection and error probabilities. For instance, if the signal-to-noise ratio (SNR) is independent of the channel characteristics, it simplifies system performance analysis.

#### **4.4 Example 4: Sum of Independent Random Variables (Central Limit Theorem Context)**

*   **Scenario:** Consider a system where the total error is the sum of many small, independent error sources. Even if the individual error distributions are not Gaussian, their sum tends towards a Gaussian distribution (Central Limit Theorem). The independence of these error sources is a prerequisite for applying the CLT, which is foundational in many statistical analyses of electrical systems.

---

### **5. Practice Questions and Exercises**

**Question 1 (Discrete):**
Let X be the number of heads in two coin flips, and Y be the number of tails in the same two coin flips. Are X and Y independent?

**Solution 1:**
The possible outcomes for two coin flips are {HH, HT, TH, TT}.
Possible values for X: {0, 1, 2}
Possible values for Y: {0, 1, 2}

*   If X=0 (TT), then Y=2. $P(X=0) = 1/4$. $P(Y=2) = 1/4$. $P(X=0, Y=2) = P(TT) = 1/4$.
    $P(X=0)P(Y=2) = (1/4)*(1/4) = 1/16$.
    Since $P(X=0, Y=2) \neq P(X=0)P(Y=2)$, X and Y are NOT independent.
    (In fact, Y = 2 - X, so they are perfectly dependent).

**Question 2 (Continuous):**
Let X be a random variable with PDF $f_X(x) = e^{-x}$ for $x \ge 0$, and 0 otherwise.
Let Y be a random variable with PDF $f_Y(y) = e^{-y}$ for $y \ge 0$, and 0 otherwise.
Assume X and Y are independent.
(a) Find the joint PDF $f_{XY}(x, y)$.
(b) Find $E[X+Y]$.
(c) Find $Var(X+Y)$.

**Solution 2:**
Given X and Y are independent.
(a) $f_{XY}(x, y) = f_X(x) f_Y(y)$ for $x \ge 0, y \ge 0$.
    $f_{XY}(x, y) = e^{-x} e^{-y} = e^{-(x+y)}$ for $x \ge 0, y \ge 0$, and 0 otherwise.

(b) $E[X+Y] = E[X] + E[Y]$.
    $E[X] = \int_0^\infty x e^{-x} dx$. Using integration by parts: $u=x, dv=e^{-x}dx \implies du=dx, v=-e^{-x}$.
    $E[X] = [-xe^{-x}]_0^\infty - \int_0^\infty (-e^{-x}) dx = (0 - 0) + \int_0^\infty e^{-x} dx = [-e^{-x}]_0^\infty = 0 - (-1) = 1$.
    Since $f_Y(y)$ has the same form as $f_X(x)$, $E[Y] = 1$.
    Therefore, $E[X+Y] = 1 + 1 = 2$.

(c) $Var(X+Y) = Var(X) + Var(Y)$ due to independence.
    $Var(X) = E[X^2] - (E[X])^2$.
    $E[X^2] = \int_0^\infty x^2 e^{-x} dx$. Using integration by parts twice or the Gamma function definition: $E[X^2] = \Gamma(3) = 2! = 2$.
    $Var(X) = 2 - (1)^2 = 1$.
    Since $f_Y(y)$ has the same form as $f_X(x)$, $Var(Y) = 1$.
    Therefore, $Var(X+Y) = 1 + 1 = 2$.

**Question 3 (Check for Independence):**
Consider two random variables X and Y with the following joint PMF:
$P(X=0, Y=0) = 1/4$
$P(X=0, Y=1) = 1/4$
$P(X=1, Y=0) = 1/4$
$P(X=1, Y=1) = 1/4$
All other probabilities are zero.
Are X and Y independent?

**Solution 3:**
Calculate marginal PMFs:
$P(X=0) = P(X=0, Y=0) + P(X=0, Y=1) = 1/4 + 1/4 = 1/2$.
$P(X=1) = P(X=1, Y=0) + P(X=1, Y=1) = 1/4 + 1/4 = 1/2$.
$P(Y=0) = P(X=0, Y=0) + P(X=1, Y=0) = 1/4 + 1/4 = 1/2$.
$P(Y=1) = P(X=0, Y=1) + P(X=1, Y=1) = 1/4 + 1/4 = 1/2$.

Check the independence condition: $P(X=x, Y=y) = P(X=x)P(Y=y)$.
For (X=0, Y=0): $P(X=0, Y=0) = 1/4$. $P(X=0)P(Y=0) = (1/2)(1/2) = 1/4$. (Matches)
For (X=0, Y=1): $P(X=0, Y=1) = 1/4$. $P(X=0)P(Y=1) = (1/2)(1/2) = 1/4$. (Matches)
For (X=1, Y=0): $P(X=1, Y=0) = 1/4$. $P(X=1)P(Y=0) = (1/2)(1/2) = 1/4$. (Matches)
For (X=1, Y=1): $P(X=1, Y=1) = 1/4$. $P(X=1)P(Y=1) = (1/2)(1/2) = 1/4$. (Matches)

Since the condition holds for all possible pairs of values, X and Y are independent. This is a classic example of independent Bernoulli random variables.

---

### **6. Important Points to Remember**

*   **Independence is a property of the joint distribution**, not just the marginal distributions.
*   **Independence implies $E[XY] = E[X]E[Y]$ and $Cov(X, Y) = 0$**, but the converse is NOT true.
*   **Independence of X and Y implies independence of any functions $g(X)$ and $h(Y)$**.
*   **The variance of a sum of independent random variables is the sum of their variances**: $Var(X+Y) = Var(X) + Var(Y)$. This is a crucial simplification.
*   **Independence simplifies probability calculations significantly**, especially for joint events and sums of random variables.
*   **The problem statement is key.** If independence is stated, you can use its properties. If not, you must verify it from the distributions.

---
