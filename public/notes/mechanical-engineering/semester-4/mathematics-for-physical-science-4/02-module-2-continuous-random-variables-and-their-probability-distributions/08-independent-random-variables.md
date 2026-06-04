---
title: "Independent random variables"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462ec5"
status: "completed"
scrapedAt: "2026-05-20T17:54:43.928Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 2: Continuous Random Variables and Their Probability Distributions

### Topic: Independent Random Variables

**Course Outcomes Addressed:**

*   **CO2:** Understand the concept, properties and important models of continuous random variables and to apply in suitable random phenomena. (Knowledge Level: K3) - This topic directly builds upon understanding continuous random variables and extends their application to scenarios involving multiple such variables.

**Learning Outcomes Covered:**

*   Understanding the definition of independent random variables.
*   Understanding the properties of independent random variables, particularly concerning their joint probability distributions.
*   Applying the concept of independence to calculate probabilities involving multiple random variables.

---

### 1. Introduction to Independent Random Variables

In physical science, we often encounter phenomena that can be modeled by multiple random variables. Understanding how these variables relate to each other is crucial for analyzing complex systems. Independence is a fundamental concept that simplifies this analysis.

**Key Concept:** Two random variables, $X$ and $Y$, are **statistically independent** if the occurrence of a particular outcome for one variable does not affect the probability of any outcome for the other variable.

---

### 2. Defining Independence for Continuous Random Variables

For continuous random variables, independence is formally defined based on their probability density functions (PDFs).

**Definition:** Let $X$ and $Y$ be two continuous random variables with joint probability density function (joint PDF) $f_{X,Y}(x,y)$. $X$ and $Y$ are said to be **independent** if and only if their joint PDF can be expressed as the product of their marginal PDFs:

$f_{X,Y}(x,y) = f_X(x) \cdot f_Y(y)$

for all possible values of $x$ and $y$, where $f_X(x)$ is the marginal PDF of $X$ and $f_Y(y)$ is the marginal PDF of $Y$.

**Alternatively, using cumulative distribution functions (CDFs):**

$X$ and $Y$ are independent if and only if their joint CDF, $F_{X,Y}(x,y)$, can be expressed as the product of their marginal CDFs:

$F_{X,Y}(x,y) = F_X(x) \cdot F_Y(y)$

for all possible values of $x$ and $y$.

**Explanation:** This definition implies that knowing the value of $X$ provides no information about the value of $Y$, and vice versa.

**Reference:** This definition is a standard concept in probability theory. Devore (9th ed.) covers this in Chapter 4, "Joint Distributions." Papoulis & Pillai (4th ed.) also extensively discusses independence in Chapter 3, "Random Variables."

---

### 3. Properties of Independent Random Variables

The property of independence leads to several important results when dealing with sums, products, and expectations of random variables.

**Property 1: Independence and Expectations**

If $X$ and $Y$ are independent continuous random variables, then the expectation of their product is the product of their expectations:

$E[XY] = E[X] \cdot E[Y]$

**Proof Sketch (using integration):**

$E[XY] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} xy f_{X,Y}(x,y) \, dx \, dy$

If $X$ and $Y$ are independent, $f_{X,Y}(x,y) = f_X(x)f_Y(y)$:

$E[XY] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} xy f_X(x)f_Y(y) \, dx \, dy$

$E[XY] = \left( \int_{-\infty}^{\infty} x f_X(x) \, dx \right) \left( \int_{-\infty}^{\infty} y f_Y(y) \, dy \right)$

$E[XY] = E[X] \cdot E[Y]$

**Reference:** Devore (9th ed., Chapter 4) and Papoulis & Pillai (4th ed., Chapter 3) both detail this property.

**Property 2: Independence and Variances (for sums)**

If $X$ and $Y$ are independent continuous random variables, then the variance of their sum is the sum of their variances:

$Var(X+Y) = Var(X) + Var(Y)$

**Proof Sketch:**

$Var(X+Y) = E[(X+Y - E[X+Y])^2]$

$Var(X+Y) = E[(X+Y - (E[X]+E[Y]))^2]$

$Var(X+Y) = E[((X-E[X]) + (Y-E[Y]))^2]$

$Var(X+Y) = E[(X-E[X])^2 + 2(X-E[X])(Y-E[Y]) + (Y-E[Y])^2]$

$Var(X+Y) = E[(X-E[X])^2] + 2E[(X-E[X])(Y-E[Y])] + E[(Y-E[Y])^2]$

$Var(X+Y) = Var(X) + 2Cov(X,Y) + Var(Y)$

Since $X$ and $Y$ are independent, their covariance is zero ($Cov(X,Y) = E[XY] - E[X]E[Y] = 0$ from Property 1).
Therefore, $Var(X+Y) = Var(X) + Var(Y)$.

**Important Note:** This property is extremely useful for analyzing the variability of the sum of independent random processes, common in physical sciences (e.g., noise summation).

**Reference:** Devore (9th ed., Chapter 4) and Ross (6th ed., Chapter 3) discuss this property.

**Property 3: Independence and Probability Calculations**

If $X$ and $Y$ are independent, the probability of $X$ falling in a certain range and $Y$ falling in another range is the product of their individual probabilities:

$P(a < X \le b \text{ and } c < Y \le d) = P(a < X \le b) \cdot P(c < Y \le d)$

This can be directly derived from the definition $f_{X,Y}(x,y) = f_X(x)f_Y(y)$:

$P(a < X \le b, c < Y \le d) = \int_{a}^{b} \int_{c}^{d} f_{X,Y}(x,y) \, dy \, dx$
$= \int_{a}^{b} \int_{c}^{d} f_X(x)f_Y(y) \, dy \, dx$
$= \left( \int_{a}^{b} f_X(x) \, dx \right) \left( \int_{c}^{d} f_Y(y) \, dy \right)$
$= P(a < X \le b) \cdot P(c < Y \le d)$

**Reference:** This is a fundamental application of the independence definition, found in all introductory probability texts.

---

### 4. Examples of Independent Random Variables

**Example 1: Exponentially Distributed Lifetimes**

Let $X$ be the lifetime of component A and $Y$ be the lifetime of component B. If the failure of component A does not affect the failure of component B, then $X$ and $Y$ are independent. If both $X$ and $Y$ follow exponential distributions with parameters $\lambda_A$ and $\lambda_B$ respectively, their PDFs are:

$f_X(x) = \lambda_A e^{-\lambda_A x}$ for $x \ge 0$
$f_Y(y) = \lambda_B e^{-\lambda_B y}$ for $y \ge 0$

Their joint PDF is:

$f_{X,Y}(x,y) = \lambda_A e^{-\lambda_A x} \cdot \lambda_B e^{-\lambda_B y} = (\lambda_A \lambda_B) e^{-(\lambda_A x + \lambda_B y)}$ for $x \ge 0, y \ge 0$.

Since $f_{X,Y}(x,y) = f_X(x)f_Y(y)$, $X$ and $Y$ are independent.

**Application:** In reliability engineering, we often assume the lifetimes of independent components are independent random variables. This allows us to calculate the probability of both components failing or surviving for a certain period.

**Example 2: Uniformly Distributed Measurements**

Let $X$ be a measurement of temperature at point A and $Y$ be a measurement of pressure at point B. If the physical processes at A and B are unrelated, we can assume $X$ and $Y$ are independent. Suppose $X \sim U(10, 20)$ and $Y \sim U(100, 150)$.

$f_X(x) = \frac{1}{20-10} = \frac{1}{10}$ for $10 \le x \le 20$, and 0 otherwise.
$f_Y(y) = \frac{1}{150-100} = \frac{1}{50}$ for $100 \le y \le 150$, and 0 otherwise.

The joint PDF is $f_{X,Y}(x,y) = f_X(x)f_Y(y) = \frac{1}{10} \cdot \frac{1}{50} = \frac{1}{500}$ for $10 \le x \le 20$ and $100 \le y \le 150$.

**Application:** In experimental physics, if measurements are taken from independent sources or under conditions that do not influence each other, independence can be assumed.

**Example 3: Normal Random Variables**

If $X \sim N(\mu_X, \sigma_X^2)$ and $Y \sim N(\mu_Y, \sigma_Y^2)$, and they are independent, then their joint PDF is:

$f_{X,Y}(x,y) = \frac{1}{\sqrt{2\pi}\sigma_X} e^{-\frac{(x-\mu_X)^2}{2\sigma_X^2}} \cdot \frac{1}{\sqrt{2\pi}\sigma_Y} e^{-\frac{(y-\mu_Y)^2}{2\sigma_Y^2}}$
$f_{X,Y}(x,y) = \frac{1}{2\pi\sigma_X\sigma_Y} e^{-\frac{1}{2}\left[\frac{(x-\mu_X)^2}{\sigma_X^2} + \frac{(y-\mu_Y)^2}{\sigma_Y^2}\right]}$

This is the joint PDF of a bivariate normal distribution with covariance $\text{Cov}(X,Y) = 0$.

**Application:** Many natural phenomena are modeled by normal distributions. If two such phenomena are physically unrelated, their corresponding random variables are often assumed to be independent. This simplifies calculations for the sum or difference of such variables.

**Reference:** Devore (9th ed., Chapter 4) and Ross (6th ed., Chapter 3) provide examples of common distributions and their independence.

---

### 5. Testing for Independence

In practice, we often need to determine if random variables are independent based on observed data. While formal statistical tests exist (e.g., chi-squared test for independence with categorical data, or tests based on correlation for continuous data), a common theoretical check is to see if the observed joint PDF (or estimated from data) factors into the product of marginal PDFs.

**Important Note:** Correlation does not imply causation, and even if $X$ and $Y$ are independent, their correlation coefficient will be zero. However, the converse is not always true; if the correlation coefficient is zero, it does not necessarily mean they are independent (unless they are jointly normally distributed).

---

### 6. Practice Questions and Exercises

**Question 1:**
Let $X$ and $Y$ be two independent continuous random variables with PDFs:
$f_X(x) = 2e^{-2x}$ for $x \ge 0$, and $f_Y(y) = e^{-y}$ for $y \ge 0$.
Calculate $P(X \le 1 \text{ and } Y \le 2)$.

**Answer 1:**
Since $X$ and $Y$ are independent:
$P(X \le 1 \text{ and } Y \le 2) = P(X \le 1) \cdot P(Y \le 2)$

$P(X \le 1) = \int_{0}^{1} 2e^{-2x} \, dx = [-e^{-2x}]_{0}^{1} = -e^{-2} - (-e^{0}) = 1 - e^{-2}$
$P(Y \le 2) = \int_{0}^{2} e^{-y} \, dy = [-e^{-y}]_{0}^{2} = -e^{-2} - (-e^{0}) = 1 - e^{-2}$

So, $P(X \le 1 \text{ and } Y \le 2) = (1 - e^{-2}) \cdot (1 - e^{-2}) = (1 - e^{-2})^2$.
Using $e^{-2} \approx 0.1353$, this is approximately $(1 - 0.1353)^2 \approx (0.8647)^2 \approx 0.7477$.

**Question 2:**
Let $X \sim U(0,1)$ and $Y \sim U(0,1)$ be independent random variables.
a) Find the joint PDF of $X$ and $Y$.
b) Calculate $E[XY]$.
c) Calculate $Var(X+Y)$.

**Answer 2:**
a) Since $X$ and $Y$ are independent and uniformly distributed on $(0,1)$:
$f_X(x) = 1$ for $0 \le x \le 1$, and 0 otherwise.
$f_Y(y) = 1$ for $0 \le y \le 1$, and 0 otherwise.
The joint PDF is $f_{X,Y}(x,y) = f_X(x)f_Y(y) = 1 \cdot 1 = 1$ for $0 \le x \le 1$ and $0 \le y \le 1$. This defines a unit square in the $xy$-plane.

b) For independent variables, $E[XY] = E[X] \cdot E[Y]$.
$E[X] = \int_{0}^{1} x \cdot 1 \, dx = [\frac{x^2}{2}]_{0}^{1} = \frac{1}{2}$.
$E[Y] = \int_{0}^{1} y \cdot 1 \, dy = [\frac{y^2}{2}]_{0}^{1} = \frac{1}{2}$.
So, $E[XY] = \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{4}$.

c) For independent variables, $Var(X+Y) = Var(X) + Var(Y)$.
$Var(X) = E[X^2] - (E[X])^2$.
$E[X^2] = \int_{0}^{1} x^2 \cdot 1 \, dx = [\frac{x^3}{3}]_{0}^{1} = \frac{1}{3}$.
$Var(X) = \frac{1}{3} - (\frac{1}{2})^2 = \frac{1}{3} - \frac{1}{4} = \frac{4-3}{12} = \frac{1}{12}$.
Since $Y$ has the same distribution as $X$, $Var(Y) = \frac{1}{12}$.
Therefore, $Var(X+Y) = \frac{1}{12} + \frac{1}{12} = \frac{2}{12} = \frac{1}{6}$.

**Question 3:**
Two independent random variables, $X$ and $Y$, have PDFs $f_X(x) = \frac{1}{2}$ for $0 < x < 2$ and $f_Y(y) = \frac{1}{4}$ for $0 < y < 4$. What is the probability that $X+Y > 3$?

**Answer 3:**
The joint PDF is $f_{X,Y}(x,y) = f_X(x)f_Y(y) = \frac{1}{2} \cdot \frac{1}{4} = \frac{1}{8}$ for $0 < x < 2$ and $0 < y < 4$. This defines a rectangle in the $xy$-plane.

We want to calculate $P(X+Y > 3)$. This is the integral of the joint PDF over the region where $x+y > 3$ within the support rectangle ($0 < x < 2, 0 < y < 4$).

The region of integration is defined by:
$0 < x < 2$
$0 < y < 4$
$x + y > 3$

We can visualize this. The rectangle has corners at (0,0), (2,0), (2,4), (0,4). The line $x+y=3$ cuts through this rectangle.
The area where $x+y \le 3$ within the rectangle is easier to calculate.
The line $x+y=3$ intersects $x=2$ at $y=1$, and $y=4$ at $x=-1$ (outside our domain). It intersects $y=0$ at $x=3$ (outside our domain) and $x=0$ at $y=3$.

The region $x+y \le 3$ within the rectangle is a polygon.
Points to consider: (0,0), (2,0), (2,1), (0,3). This is a trapezoid.
Alternatively, consider the complementary region $x+y \le 3$.
The integral $\int_0^2 \int_0^4 I(x+y \le 3) \frac{1}{8} \, dy \, dx$, where $I$ is the indicator function.

Let's consider the region where $x+y \le 3$:
If $0 < x \le 2$, then $y$ goes from $0$ up to $\min(4, 3-x)$.
If $x=0.1$, $y$ goes from 0 to 2.9.
If $x=1$, $y$ goes from 0 to 2.
If $x=1.9$, $y$ goes from 0 to 1.1.
If $x=2$, $y$ goes from 0 to 1.

So, we integrate $\frac{1}{8}$ over this region.
$P(X+Y \le 3) = \int_{0}^{2} \int_{0}^{\min(4, 3-x)} \frac{1}{8} \, dy \, dx$

The term $\min(4, 3-x)$ needs careful handling.
Since $0 < x < 2$, $3-x$ will range from $3-0=3$ (not included) down to $3-2=1$.
So, $3-x$ is always less than 4 for $x \in (0, 2)$.
Thus, $\min(4, 3-x) = 3-x$.

$P(X+Y \le 3) = \int_{0}^{2} \int_{0}^{3-x} \frac{1}{8} \, dy \, dx$
$= \int_{0}^{2} \left[ \frac{y}{8} \right]_{0}^{3-x} \, dx$
$= \int_{0}^{2} \frac{3-x}{8} \, dx$
$= \frac{1}{8} \left[ 3x - \frac{x^2}{2} \right]_{0}^{2}$
$= \frac{1}{8} \left( (3(2) - \frac{2^2}{2}) - (0) \right)$
$= \frac{1}{8} \left( 6 - \frac{4}{2} \right)$
$= \frac{1}{8} (6 - 2) = \frac{4}{8} = \frac{1}{2}$.

The probability that $X+Y > 3$ is the complement:
$P(X+Y > 3) = 1 - P(X+Y \le 3) = 1 - \frac{1}{2} = \frac{1}{2}$.

---

### 7. Important Points to Remember

*   **Definition of Independence:** $f_{X,Y}(x,y) = f_X(x)f_Y(y)$ for continuous random variables.
*   **Implications of Independence:**
    *   $E[XY] = E[X]E[Y]$
    *   $Var(X+Y) = Var(X) + Var(Y)$
    *   Probabilities factorize: $P(A \text{ and } B) = P(A)P(B)$ where $A$ is an event concerning $X$ and $B$ is an event concerning $Y$.
*   **Distinguishing Correlation and Independence:** Zero correlation does not imply independence, unless the variables are jointly normally distributed.
*   **Physical Intuition:** Independence often arises when the underlying physical processes generating the random variables do not influence each other.

---

### 8. Connection to Course Outcomes

*   **CO2:** This topic directly supports CO2 by extending the understanding of continuous random variables to situations involving multiple variables. The properties of independent random variables are crucial for applying these concepts to physical phenomena where multiple independent factors contribute to an outcome. For example, understanding the total energy from independent sources or the total error from independent measurement inaccuracies relies on the properties of independent random variables.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=WUvTyaaNkzM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### Further Reading:

*   **Devore J. L. (2016).** *Probability and Statistics for Engineering and the Sciences* (9th ed.). Cengage Learning. (Chapters on Joint Distributions, Independence)
*   **Papoulis, A., & Pillai, S. U. (2002).** *Probability, Random Variables and Stochastic Processes* (4th ed.). McGraw Hill. (Sections on Independence of Random Variables)
*   **Ross, S. M. (2020).** *Introduction to Probability and Statistics for Engineers and Scientists* (6th ed.). Academic Press. (Chapters on Joint Distributions, Independence)

*(Note: Sastry and Chapra & Canale are referenced in the course but are more focused on numerical analysis. Their direct relevance to the theoretical definition of independent random variables is limited, but they are crucial for applying these concepts in practical computational scenarios where numerical methods might be used to evaluate integrals involving PDFs of independent random variables.)*