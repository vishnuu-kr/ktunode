---
title: "Independent random variables"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 1: Random variables"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4bd"
status: "completed"
scrapedAt: "2026-05-23T17:50:39.561Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Independent Random Variables

---

### **1. Introduction to Independence**

This topic builds upon the understanding of single random variables and their probability distributions. We will now explore the concept of **independence** when dealing with **multiple random variables**. In electrical engineering, situations involving multiple random phenomena occurring simultaneously are common, such as the voltage and current in different components of a circuit, or the noise levels in two separate communication channels. Understanding how these phenomena relate to each other through independence (or lack thereof) is crucial for accurate analysis and prediction.

**Key Concept:** Independence signifies that the outcome of one random variable does not influence the outcome of another random variable.

---

### **2. Definitions of Independence**

#### **2.1 Independent Discrete Random Variables**

Let $X$ and $Y$ be two discrete random variables. They are **independent** if and only if for every possible pair of values $(x, y)$:

$$ P(X=x, Y=y) = P(X=x)P(Y=y) $$

This fundamental definition states that the joint probability of $X$ taking a specific value $x$ and $Y$ taking a specific value $y$ is equal to the product of their individual probabilities.

**In simpler terms:** Knowing the value of $X$ provides no information about the probability of $Y$ taking any particular value, and vice-versa.

---

#### **2.2 Independent Continuous Random Variables**

Let $X$ and $Y$ be two continuous random variables with joint probability density function (PDF) $f_{XY}(x, y)$ and marginal PDFs $f_X(x)$ and $f_Y(y)$ respectively. They are **independent** if and only if:

$$ f_{XY}(x, y) = f_X(x)f_Y(y) $$

for all values of $x$ and $y$.

**In simpler terms:** The joint behavior of two independent continuous random variables can be completely described by the product of their individual behaviors.

---

### **3. Properties of Independent Random Variables**

The concept of independence leads to several important properties that simplify calculations and analysis.

#### **3.1 Expected Value of the Product**

If $X$ and $Y$ are independent random variables, then the expected value of their product is the product of their expected values:

$$ E[XY] = E[X]E[Y] $$

**Proof (for discrete variables):**
$$ E[XY] = \sum_{x} \sum_{y} xy P(X=x, Y=y) $$
Since $X$ and $Y$ are independent, $P(X=x, Y=y) = P(X=x)P(Y=y)$:
$$ E[XY] = \sum_{x} \sum_{y} xy P(X=x)P(Y=y) $$
We can rearrange the summation:
$$ E[XY] = \left(\sum_{x} x P(X=x)\right) \left(\sum_{y} y P(Y=y)\right) $$
Recognizing the definitions of expected values:
$$ E[XY] = E[X]E[Y] $$

**Implication:** This property is very useful for calculating the mean of products of random variables, which often arise in signal processing and power calculations in electrical systems.

---

#### **3.2 Variance of the Sum**

If $X$ and $Y$ are independent random variables, then the variance of their sum is the sum of their variances:

$$ Var(X+Y) = Var(X) + Var(Y) $$

**Proof:**
Recall the definition of variance: $Var(Z) = E[(Z - E[Z])^2]$.
$$ Var(X+Y) = E[((X+Y) - (E[X]+E[Y]))^2] $$
$$ Var(X+Y) = E[((X-E[X]) + (Y-E[Y]))^2] $$
Expanding the square:
$$ Var(X+Y) = E[(X-E[X])^2 + 2(X-E[X])(Y-E[Y]) + (Y-E[Y])^2] $$
Using linearity of expectation:
$$ Var(X+Y) = E[(X-E[X])^2] + 2E[(X-E[X])(Y-E[Y])] + E[(Y-E[Y])^2] $$
The first and third terms are $Var(X)$ and $Var(Y)$ respectively. For the middle term:
$$ E[(X-E[X])(Y-E[Y])] = E[X-E[X]]E[Y-E[Y]] $$
This is because $X-E[X]$ and $Y-E[Y]$ are also independent (a property of independent random variables). Since $E[X-E[X]] = E[X] - E[X] = 0$ and $E[Y-E[Y]] = E[Y] - E[Y] = 0$:
$$ E[(X-E[X])(Y-E[Y])] = 0 \times 0 = 0 $$
Therefore,
$$ Var(X+Y) = Var(X) + 0 + Var(Y) = Var(X) + Var(Y) $$

**Important Note:** This property *only* holds if $X$ and $Y$ are independent. If they are not independent, then $Var(X+Y) = Var(X) + Var(Y) + 2Cov(X,Y)$, where $Cov(X,Y)$ is the covariance.

---

#### **3.3 Variance of the Difference**

If $X$ and $Y$ are independent random variables, then the variance of their difference is also the sum of their variances:

$$ Var(X-Y) = Var(X) + Var(Y) $$

**Proof:**
$$ Var(X-Y) = E[((X-Y) - (E[X]-E[Y]))^2] $$
$$ Var(X-Y) = E[((X-E[X]) - (Y-E[Y]))^2] $$
$$ Var(X-Y) = E[(X-E[X])^2 - 2(X-E[X])(Y-E[Y]) + (Y-E[Y])^2] $$
$$ Var(X-Y) = E[(X-E[X])^2] - 2E[(X-E[X])(Y-E[Y])] + E[(Y-E[Y])^2] $$
As shown in the previous proof, $E[(X-E[X])(Y-E[Y])] = 0$ for independent variables.
$$ Var(X-Y) = Var(X) - 0 + Var(Y) = Var(X) + Var(Y) $$

**Implication:** This is significant for analyzing the difference between two independent random processes or measurements, such as the error signal in a control system.

---

#### **3.4 Independence of Functions of Random Variables**

If $X$ and $Y$ are independent random variables, then any function $g(X)$ and any function $h(Y)$ are also independent random variables.

**Example:** If $X$ and $Y$ are independent, then $X^2$ and $Y^3$ are also independent. Similarly, $e^X$ and $\sin(Y)$ are independent.

**Implication:** This extends the usefulness of independence to more complex signal processing operations.

---

#### **3.5 Independence and Probability Calculations**

For independent discrete random variables $X_1, X_2, \ldots, X_n$:

$$ P(X_1=x_1, X_2=x_2, \ldots, X_n=x_n) = P(X_1=x_1)P(X_2=x_2)\cdots P(X_n=x_n) $$

For independent continuous random variables $X_1, X_2, \ldots, X_n$ with PDFs $f_{X_i}(x_i)$:

$$ f_{X_1, X_2, \ldots, X_n}(x_1, x_2, \ldots, x_n) = f_{X_1}(x_1)f_{X_2}(x_2)\cdots f_{X_n}(x_n) $$

**Implication:** This is the cornerstone of analyzing systems with multiple independent random inputs. The joint probability distribution is simply the product of the individual distributions.

---

### **4. Examples of Independent Random Variables**

#### **Example 4.1: Coin Flips**

Consider flipping two fair coins. Let $X$ be the outcome of the first coin flip (0 for tails, 1 for heads) and $Y$ be the outcome of the second coin flip.
*   $P(X=0) = 0.5$, $P(X=1) = 0.5$
*   $P(Y=0) = 0.5$, $P(Y=1) = 0.5$

The probability of getting heads on both coins is $P(X=1, Y=1)$. Since the coin flips are independent events:
$P(X=1, Y=1) = P(X=1)P(Y=1) = 0.5 \times 0.5 = 0.25$.
This aligns with the definition of independent discrete random variables.

---

#### **Example 4.2: Circuit Component Voltages**

Suppose the voltage across two independent resistors in a circuit, $V_1$ and $V_2$, are random variables. Let $V_1$ follow a normal distribution with mean $\mu_1$ and variance $\sigma_1^2$, and $V_2$ follow a normal distribution with mean $\mu_2$ and variance $\sigma_2^2$.
Since $V_1$ and $V_2$ are independent, their joint PDF is:
$f_{V_1, V_2}(v_1, v_2) = f_{V_1}(v_1)f_{V_2}(v_2) = \frac{1}{\sqrt{2\pi}\sigma_1}e^{-\frac{(v_1-\mu_1)^2}{2\sigma_1^2}} \times \frac{1}{\sqrt{2\pi}\sigma_2}e^{-\frac{(v_2-\mu_2)^2}{2\sigma_2^2}}$.

**Properties:**
*   $E[V_1V_2] = E[V_1]E[V_2] = \mu_1\mu_2$.
*   $Var(V_1+V_2) = Var(V_1) + Var(V_2) = \sigma_1^2 + \sigma_2^2$.
*   $Var(V_1-V_2) = Var(V_1) + Var(V_2) = \sigma_1^2 + \sigma_2^2$.

This is consistent with the properties derived earlier.

---

#### **Example 4.3: Poisson Processes**

Consider two independent Poisson processes, $N_1(t)$ and $N_2(t)$, representing the number of events in two separate systems over time $t$.
If $N_1(t)$ is a Poisson process with rate $\lambda_1$, then $P(N_1(t)=k) = \frac{e^{-\lambda_1 t}(\lambda_1 t)^k}{k!}$.
If $N_2(t)$ is a Poisson process with rate $\lambda_2$, then $P(N_2(t)=k) = \frac{e^{-\lambda_2 t}(\lambda_2 t)^k}{k!}$.

If they are independent, then the probability of observing $k_1$ events in system 1 and $k_2$ events in system 2 is:
$P(N_1(t)=k_1, N_2(t)=k_2) = P(N_1(t)=k_1)P(N_2(t)=k_2) = \frac{e^{-\lambda_1 t}(\lambda_1 t)^{k_1}}{k_1!} \frac{e^{-\lambda_2 t}(\lambda_2 t)^{k_2}}{k_2!}$.

This demonstrates independence for count-based random variables.

---

### **5. Checking for Independence**

**How do we know if two random variables are independent?**

1.  **Problem Statement:** Often, the problem statement will explicitly state that the random variables are independent (e.g., "two independent coin flips," "independent noise sources"). This is the most common way to establish independence.

2.  **Derivation from Underlying Processes:** If we can model the random variables based on physical processes that are known to be independent (e.g., separate physical components with no shared influences), we can assume independence.

3.  **Checking the Definition:** If independence is not explicitly stated, we must check if the definition holds:
    *   For discrete variables: $P(X=x, Y=y) = P(X=x)P(Y=y)$ for all $(x, y)$.
    *   For continuous variables: $f_{XY}(x, y) = f_X(x)f_Y(y)$ for all $(x, y)$.

**Important Note:** It is possible for $E[XY] = E[X]E[Y]$ to hold without $X$ and $Y$ being independent. This condition is *necessary* but *not sufficient* for independence. A simple counterexample is when $X$ is a standard normal variable and $Y=X^2$. $E[XY] = E[X^3] = 0$ and $E[X]E[Y] = E[X]E[X^2] = 0 \times 1 = 0$. However, $X$ and $X^2$ are clearly not independent.

---

### **6. Generalization to Multiple Random Variables**

The concept of independence can be extended to more than two random variables. A set of random variables $X_1, X_2, \ldots, X_n$ are **mutually independent** if:

$$ P(X_1=x_1, X_2=x_2, \ldots, X_n=x_n) = P(X_1=x_1)P(X_2=x_2)\cdots P(X_n=x_n) $$

for all possible values $x_1, x_2, \ldots, x_n$.

For continuous variables, this translates to the joint PDF being the product of the marginal PDFs.

**Properties extend:**
*   $E[X_1X_2\cdots X_n] = E[X_1]E[X_2]\cdots E[X_n]$
*   $Var(X_1+X_2+\cdots+X_n) = Var(X_1)+Var(X_2)+\cdots+Var(X_n)$ (for independent variables)

---

### **7. Relevance to Course Outcomes**

*   **CO1 (Discrete Random Variables):** Understanding independence is crucial for calculating joint probabilities and expected values for systems involving multiple discrete random variables, such as counting events in independent systems or analyzing the outcomes of independent experiments.
*   **CO2 (Continuous Random Variables):** Independence simplifies the analysis of systems with multiple continuous random variables, common in signal processing and electrical measurements. The product of PDFs and its implications for expected values and variances are directly applicable.
*   **CO4 (Random Processes):** Many practical random processes in electrical science are modeled as independent. For instance, noise in different parts of a circuit or signals from different antennas can often be treated as independent. Properties like the variance of sums of independent processes are vital for analyzing system behavior.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### **8. Textbook and Reference Material Insights**

*   **Devore J. L. (9th edition):** Chapter 5 often covers bivariate distributions and independence, emphasizing the definition $P(X=x, Y=y) = P(X=x)P(Y=y)$ and the corresponding property for PDFs. He likely provides examples like multiple dice rolls or sampling with replacement to illustrate independence. The properties of expected values and variances of sums/products of independent random variables are usually well-covered.
*   **Veerarajan T. (3rd edition):** Similar to Devore, Veerarajan would cover independence in his chapters on joint probability distributions. He often uses examples from engineering contexts, potentially including queuing systems or reliability analysis where independent failure events are considered. The proofs for $E[XY]$ and $Var(X+Y)$ are standard in such texts.
*   **Papoulis & Pillai (4th edition):** As a classic text on random processes, Papoulis would delve into independence in the context of multiple random variables and processes. The implications for autocorrelation functions and spectral densities when dealing with sums of independent processes would be a key focus, relevant to CO4.
*   **Ross S. M. (6th edition):** Ross is known for his clear examples. Expect to see demonstrations of independence in scenarios like machine reliability or communication system outputs. The distinction between pairwise independence and mutual independence might also be discussed.
*   **Palaniammal S. (3rd edition) & Anderson, Timo, Benedek (1st edition):** These texts would provide foundational coverage similar to Devore and Veerarajan, reinforcing the definitions and properties with practical examples relevant to engineering students.

---

### **9. Key Points to Remember**

*   **Definition is Key:** Independence for discrete RVs means $P(X=x, Y=y) = P(X=x)P(Y=y)$. For continuous RVs, it's $f_{XY}(x, y) = f_X(x)f_Y(y)$.
*   **Product of Expectations:** If $X, Y$ are independent, $E[XY] = E[X]E[Y]$.
*   **Sum of Variances:** If $X, Y$ are independent, $Var(X+Y) = Var(X) + Var(Y)$ and $Var(X-Y) = Var(X) + Var(Y)$.
*   **Functions of Independent RVs:** If $X, Y$ are independent, then $g(X)$ and $h(Y)$ are also independent.
*   **Mutual Independence:** For more than two variables, all combinations must satisfy the product rule for full mutual independence.
*   **Not all Zero Covariance implies Independence:** $E[XY] = E[X]E[Y]$ (or $Cov(X,Y)=0$) is a necessary but not sufficient condition for independence.

---

### **10. Practice Questions and Exercises**

**Question 1:**
Let $X$ be a discrete random variable with $P(X=0) = 0.3$, $P(X=1) = 0.7$.
Let $Y$ be a discrete random variable with $P(Y=0) = 0.4$, $P(Y=1) = 0.6$.
If $X$ and $Y$ are independent, what is $P(X=1, Y=0)$?

**Answer 1:**
Since $X$ and $Y$ are independent, $P(X=1, Y=0) = P(X=1)P(Y=0) = 0.7 \times 0.4 = 0.28$.

---

**Question 2:**
Two independent components in an electrical system have voltages $V_1$ and $V_2$ which are normally distributed with means $\mu_1 = 5V$, $\mu_2 = 10V$ and variances $\sigma_1^2 = 1V^2$, $\sigma_2^2 = 4V^2$.
What is the variance of the difference in voltages, $Var(V_1 - V_2)$?

**Answer 2:**
Since $V_1$ and $V_2$ are independent, $Var(V_1 - V_2) = Var(V_1) + Var(V_2) = \sigma_1^2 + \sigma_2^2 = 1V^2 + 4V^2 = 5V^2$.

---

**Question 3:**
Consider two independent random variables $X$ and $Y$.
$X$ follows a Bernoulli distribution with parameter $p=0.5$ (probability of success is 0.5).
$Y$ follows a Binomial distribution with parameters $n=3$ and $p=0.5$.
Calculate $E[XY]$.

**Answer 3:**
For independent random variables, $E[XY] = E[X]E[Y]$.
$E[X]$ for a Bernoulli(p) is $p$. So, $E[X] = 0.5$.
$E[Y]$ for a Binomial(n,p) is $np$. So, $E[Y] = 3 \times 0.5 = 1.5$.
Therefore, $E[XY] = 0.5 \times 1.5 = 0.75$.

---

**Question 4:**
Let $X$ and $Y$ be two continuous random variables with joint PDF $f_{XY}(x, y)$.
Suppose $f_X(x) = 2e^{-2x}$ for $x \ge 0$ and $f_Y(y) = 3e^{-3y}$ for $y \ge 0$.
If $X$ and $Y$ are independent, what is their joint PDF $f_{XY}(x, y)$?

**Answer 4:**
If $X$ and $Y$ are independent, then $f_{XY}(x, y) = f_X(x)f_Y(y)$.
For $x \ge 0$ and $y \ge 0$:
$f_{XY}(x, y) = (2e^{-2x})(3e^{-3y}) = 6e^{-2x-3y}$.
For other values of $x$ or $y$, $f_{XY}(x, y) = 0$.

---

**Question 5:**
Let $X$ be a random variable uniformly distributed on $[0, 1]$, and $Y$ be a random variable uniformly distributed on $[0, 1]$. Assume $X$ and $Y$ are independent.
Are the random variables $X^2$ and $Y^3$ independent? Justify your answer.

**Answer 5:**
Yes, $X^2$ and $Y^3$ are independent. This is a property of independent random variables: if $X$ and $Y$ are independent, then any function of $X$, $g(X)$, and any function of $Y$, $h(Y)$, are also independent.

---

This concludes the notes on Independent Random Variables. Understanding this concept is foundational for analyzing systems with multiple interacting random components in electrical science.