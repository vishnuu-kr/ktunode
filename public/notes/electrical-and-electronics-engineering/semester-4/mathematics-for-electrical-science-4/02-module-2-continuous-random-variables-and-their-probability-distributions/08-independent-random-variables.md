---
title: "Independent random variables"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35da4"
status: "completed"
scrapedAt: "2026-05-23T16:16:57.663Z"
---
# Mathematics for Electrical Science - 4
## Module 2: Continuous Random Variables and their Probability Distributions
### Topic: Independent Random Variables

---

### **1. Introduction to Independence of Random Variables**

**Key Concept:** Independence is a fundamental concept in probability theory that describes whether the occurrence or value of one random variable has any influence on the occurrence or value of another. For continuous random variables, this concept is extended through their probability density functions (PDFs).

**Definition:** Two continuous random variables, $X$ and $Y$, are **independent** if and only if their joint probability density function (PDF), $f_{XY}(x, y)$, can be expressed as the product of their marginal PDFs:

$f_{XY}(x, y) = f_X(x) \cdot f_Y(y)$ for all $x$ and $y$.

**Intuition:** If $X$ and $Y$ are independent, knowing the value of $X$ provides no information about the value of $Y$, and vice-versa.

**Connection to Discrete Random Variables:** This definition is analogous to the independence of discrete random variables, where $P(X=x, Y=y) = P(X=x)P(Y=y)$.

**Textbook Reference:**
*   **Devore J. L. (9th ed., 2016), Chapter 4, Section 4.5 (Independence of Random Variables):** Discusses the definition of independence for continuous random variables and its implications.
*   **Veerarajan T. (3rd ed., 2008), Chapter 6, Section 6.6 (Independent Random Variables):** Provides a similar treatment, focusing on the probabilistic meaning of independence.

---

### **2. Properties of Independent Random Variables**

If $X$ and $Y$ are independent continuous random variables, several important properties hold true.

**2.1. Expectation of the Product:**

**Key Concept:** The expectation of the product of two independent random variables is equal to the product of their individual expectations.

**Property:** If $X$ and $Y$ are independent, then $E[XY] = E[X]E[Y]$.

**Derivation (using the definition):**
$E[XY] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} xy \cdot f_{XY}(x, y) \, dx \, dy$
Since $f_{XY}(x, y) = f_X(x) \cdot f_Y(y)$ for independent variables:
$E[XY] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} xy \cdot f_X(x) \cdot f_Y(y) \, dx \, dy$
$E[XY] = \left( \int_{-\infty}^{\infty} x \cdot f_X(x) \, dx \right) \cdot \left( \int_{-\infty}^{\infty} y \cdot f_Y(y) \, dy \right)$
$E[XY] = E[X] \cdot E[Y]$

**Important Point:** The converse is not always true. If $E[XY] = E[X]E[Y]$, it doesn't necessarily imply independence. However, if $X$ and $Y$ are independent, this property *must* hold.

**Textbook Reference:**
*   **Devore J. L. (9th ed., 2016), Chapter 4, Section 4.5:** Explicitly states and uses this property.
*   **Ross S. M. (6th ed., 2020), Chapter 4, Section 4.3.1 (Expectation of a Product):** Covers this property with illustrative examples.

**2.2. Variance of the Sum:**

**Key Concept:** For independent random variables, the variance of their sum is the sum of their variances.

**Property:** If $X$ and $Y$ are independent, then $Var(X+Y) = Var(X) + Var(Y)$.

**Derivation (using properties of variance and independence):**
$Var(X+Y) = E[(X+Y - E[X+Y])^2]$
$Var(X+Y) = E[((X - E[X]) + (Y - E[Y]))^2]$
$Var(X+Y) = E[(X - E[X])^2 + 2(X - E[X])(Y - E[Y]) + (Y - E[Y])^2]$
$Var(X+Y) = E[(X - E[X])^2] + 2E[(X - E[X])(Y - E[Y])] + E[(Y - E[Y])^2]$
$Var(X+Y) = Var(X) + 2 Cov(X, Y) + Var(Y)$

Since $X$ and $Y$ are independent, their covariance $Cov(X, Y) = E[(X - E[X])(Y - E[Y])] = E[X - E[X]]E[Y - E[Y]] = 0 \cdot 0 = 0$.
Therefore, $Var(X+Y) = Var(X) + Var(Y)$.

**Important Point:** This property is crucial for calculating the variance of sums of independent random variables, which is common in engineering applications (e.g., summing noise signals). The independence is key; if $X$ and $Y$ are dependent, $Var(X+Y) = Var(X) + Var(Y) + 2Cov(X,Y)$.

**Textbook Reference:**
*   **Veerarajan T. (3rd ed., 2008), Chapter 6, Section 6.6:** Demonstrates the application of this property.
*   **Papoulis A., Pillai S.U. (4th ed., 2002), Chapter 4 (Properties of Random Variables):** Explores the variance of sums and its relationship to independence.

**2.3. Probability of Joint Events:**

**Key Concept:** For independent random variables, the probability that $X$ falls within a certain range and $Y$ falls within another range is the product of the individual probabilities.

**Property:** If $X$ and $Y$ are independent, then for any sets $A$ and $B$:
$P(X \in A, Y \in B) = P(X \in A) \cdot P(Y \in B)$

**Derivation (using the definition and integration):**
$P(X \in A, Y \in B) = \int_{A} \int_{B} f_{XY}(x, y) \, dx \, dy$
Since $f_{XY}(x, y) = f_X(x) \cdot f_Y(y)$:
$P(X \in A, Y \in B) = \int_{A} \int_{B} f_X(x) \cdot f_Y(y) \, dx \, dy$
$P(X \in A, Y \in B) = \left( \int_{A} f_X(x) \, dx \right) \cdot \left( \int_{B} f_Y(y) \, dy \right)$
$P(X \in A, Y \in B) = P(X \in A) \cdot P(Y \in B)$

**Example:** If $X$ and $Y$ are independent, then $P(a < X < b, c < Y < d) = P(a < X < b) \cdot P(c < Y < d)$.

**Textbook Reference:**
*   **Devore J. L. (9th ed., 2016), Chapter 4, Section 4.5:** This property is a direct consequence of the definition of independence.
*   **Anderson D. F., Timo B. (1st ed., 2017), Chapter 7 (Joint Distributions):** Discusses joint probabilities and the multiplicative rule for independent variables.

---

### **3. Functions of Independent Random Variables**

**Key Concept:** When dealing with functions of independent random variables, their sums and products often inherit useful properties related to their distributions.

**3.1. Sum of Independent Random Variables:**

**Key Concept:** The distribution of the sum of independent random variables is called the **convolution** of their individual distributions.

**Property:** If $X$ and $Y$ are independent continuous random variables with PDFs $f_X(x)$ and $f_Y(y)$ respectively, then the PDF of $Z = X+Y$, denoted by $f_Z(z)$, is given by the convolution integral:

$f_Z(z) = (f_X * f_Y)(z) = \int_{-\infty}^{\infty} f_X(\tau) f_Y(z-\tau) \, d\tau$

**Explanation:** This formula essentially "slides" one PDF over the other, multiplies the overlapping values at each position, and integrates the result to find the probability density for the sum at that point.

**Example:** If $X \sim N(\mu_1, \sigma_1^2)$ and $Y \sim N(\mu_2, \sigma_2^2)$ are independent normal random variables, then $Z = X+Y \sim N(\mu_1+\mu_2, \sigma_1^2+\sigma_2^2)$. This is a very powerful result in statistics and engineering.

**Textbook Reference:**
*   **Devore J. L. (9th ed., 2016), Chapter 4, Section 4.6 (Functions of Random Variables):** Covers the convolution for sums of independent random variables.
*   **Veerarajan T. (3rd ed., 2008), Chapter 6, Section 6.7 (Functions of Random Variables):** Explains the convolution integral in detail with examples.
*   **Palaniammal S. (3rd ed., 2015), Chapter 5 (Probability Distributions):** Discusses the convolution for common distributions.

**3.2. Product of Independent Random Variables:**

**Key Concept:** Finding the distribution of the product of independent random variables can be more complex than sums. Techniques involving the joint PDF or characteristic functions are often used.

**Property:** If $X$ and $Y$ are independent continuous random variables with PDFs $f_X(x)$ and $f_Y(y)$ respectively, then the PDF of $W = XY$ can be found using:

$f_W(w) = \int_{-\infty}^{\infty} \frac{1}{|x|} f_X(x) f_Y\left(\frac{w}{x}\right) \, dx$, provided $x \neq 0$.

**Example:** Consider two independent exponential random variables $X$ and $Y$. Finding the distribution of $W=XY$ involves this integral, which can be challenging.

**Textbook Reference:**
*   **Devore J. L. (9th ed., 2016), Chapter 4, Section 4.6:** Briefly touches upon products.
*   **Papoulis A., Pillai S.U. (4th ed., 2002), Chapter 7 (Joint Distributions):** Provides methods for deriving distributions of functions of random variables, including products.

---

### **4. Independence of Multiple Random Variables**

**Key Concept:** The concept of independence extends to more than two random variables.

**Definition:** A set of continuous random variables $\{X_1, X_2, \ldots, X_n\}$ are **mutually independent** if their joint PDF can be factored into the product of their marginal PDFs for all possible combinations:

$f_{X_1, X_2, \ldots, X_n}(x_1, x_2, \ldots, x_n) = f_{X_1}(x_1) \cdot f_{X_2}(x_2) \cdot \ldots \cdot f_{X_n}(x_n)$

**Important Note on Pairwise vs. Mutual Independence:**
*   **Pairwise Independence:** If $f_{X_i, X_j}(x_i, x_j) = f_{X_i}(x_i) f_{X_j}(x_j)$ for all pairs $(i, j)$ with $i \neq j$, then the variables are pairwise independent.
*   **Mutual Independence:** This is a stronger condition. Pairwise independence does not necessarily imply mutual independence. For mutual independence, the joint PDF must factor for *all* subsets of variables.

**Example:** Consider three random variables $X, Y, Z$. If they are mutually independent, then:
$f_{XYZ}(x, y, z) = f_X(x) f_Y(y) f_Z(z)$

This implies pairwise independence as well:
$f_{XY}(x, y) = \int_{-\infty}^{\infty} f_{XYZ}(x, y, z) dz = \int_{-\infty}^{\infty} f_X(x) f_Y(y) f_Z(z) dz = f_X(x) f_Y(y) \int_{-\infty}^{\infty} f_Z(z) dz = f_X(x) f_Y(y)$ (since $\int_{-\infty}^{\infty} f_Z(z) dz = 1$)

**Textbook Reference:**
*   **Devore J. L. (9th ed., 2016), Chapter 4, Section 4.5:** Clearly distinguishes between pairwise and mutual independence.
*   **Veerarajan T. (3rd ed., 2008), Chapter 6, Section 6.6:** Emphasizes the importance of mutual independence for certain theorems.

---

### **5. Applications in Electrical Science**

**Key Concept:** The concept of independent random variables is pervasive in electrical engineering, particularly in areas dealing with noise, signal processing, and system reliability.

*   **Signal Processing:** When analyzing signals corrupted by multiple independent noise sources (e.g., thermal noise, shot noise), the independence of these noise sources allows for simplified analysis of the total noise power or signal-to-noise ratio. The variance of the sum of independent noise signals is the sum of their individual variances.
*   **Communication Systems:** In multiplexing or multiple access schemes, the signals from different users are often assumed to be independent. This simplifies the analysis of interference and channel capacity.
*   **Reliability Engineering:** The failure times of components in a system are frequently modeled as independent random variables. This allows for the calculation of system reliability by considering the reliability of individual components and their interdependencies (or lack thereof).
*   **Statistical Inference:** Many statistical tests and confidence interval constructions rely on the assumption of independence between observations or random samples.

**Course Outcome Alignment:**
*   **CO2:** Understanding the properties of continuous random variables, including independence, is crucial for modeling various electrical phenomena.
*   **CO4:** Analyzing random processes often involves understanding the independence of random variables that constitute the process or affect its behavior. The properties of sums and products of independent random variables are directly applicable.

**Textbook Reference:**
*   Many engineering statistics textbooks, including the references, will have specific examples in their application sections that illustrate the use of independent random variables in electrical contexts. For instance, discussions on noise addition in communication channels or reliability of systems will utilize these concepts.

---

### **6. Practice Questions and Exercises**

**Question 1:**
Let $X$ and $Y$ be two independent continuous random variables with the following PDFs:
$f_X(x) = \begin{cases} e^{-x} & x \ge 0 \\ 0 & x < 0 \end{cases}$ (Exponential distribution with $\lambda=1$)
$f_Y(y) = \begin{cases} 2e^{-2y} & y \ge 0 \\ 0 & y < 0 \end{cases}$ (Exponential distribution with $\lambda=2$)

a) Find the joint PDF $f_{XY}(x, y)$.
b) Verify that $E[XY] = E[X]E[Y]$.
c) Find the PDF of $Z = X+Y$.

**Solution 1:**
a) Since $X$ and $Y$ are independent, $f_{XY}(x, y) = f_X(x) f_Y(y)$.
$f_{XY}(x, y) = \begin{cases} (e^{-x})(2e^{-2y}) & x \ge 0, y \ge 0 \\ 0 & \text{otherwise} \end{cases}$
$f_{XY}(x, y) = \begin{cases} 2e^{-(x+2y)} & x \ge 0, y \ge 0 \\ 0 & \text{otherwise} \end{cases}$

b) First, calculate $E[X]$ and $E[Y]$:
$E[X] = \int_{0}^{\infty} x e^{-x} \, dx$. Using integration by parts or the known mean of an exponential distribution with $\lambda=1$, $E[X] = 1$.
$E[Y] = \int_{0}^{\infty} y (2e^{-2y}) \, dy$. Using integration by parts or the known mean of an exponential distribution with $\lambda=2$, $E[Y] = 1/2$.

Now calculate $E[XY]$:
$E[XY] = \int_{0}^{\infty} \int_{0}^{\infty} xy (2e^{-(x+2y)}) \, dx \, dy$
$E[XY] = 2 \left( \int_{0}^{\infty} x e^{-x} \, dx \right) \left( \int_{0}^{\infty} y e^{-2y} \, dy \right)$
$E[XY] = 2 \cdot E[X] \cdot \left( \frac{1}{2} E[Y'] \right)$, where $Y'$ is an exponential random variable with $\lambda=1$ and $E[Y']=1$.
Alternatively, using the calculated means:
$E[XY] = 2 \cdot (1) \cdot \left( \frac{1}{2} \right) = 1$.
And $E[X]E[Y] = (1)(1/2) = 1/2$.
Wait, there's a mistake in the calculation of $E[XY]$ above. Let's re-evaluate:
$E[XY] = 2 \left( \int_{0}^{\infty} x e^{-x} \, dx \right) \left( \int_{0}^{\infty} y e^{-2y} \, dy \right)$
$E[XY] = 2 \cdot (1) \cdot \left( \frac{1}{2} \right) = 1$. This is incorrect. The integration is correct:
$\int_{0}^{\infty} y e^{-2y} \, dy$. Let $u=2y$, $du=2dy$. So $dy=du/2$, $y=u/2$.
$\int_{0}^{\infty} \frac{u}{2} e^{-u} \frac{du}{2} = \frac{1}{4} \int_{0}^{\infty} u e^{-u} \, du = \frac{1}{4} \cdot 1 = \frac{1}{4}$.
So, $E[XY] = 2 \cdot (1) \cdot (1/4) = 1/2$.
Now, $E[X]E[Y] = (1)(1/2) = 1/2$.
Thus, $E[XY] = E[X]E[Y]$ is verified.

c) $Z = X+Y$. Since $X$ and $Y$ are independent exponential random variables, their sum does *not* follow an exponential distribution. We need to use the convolution integral.
$f_Z(z) = \int_{-\infty}^{\infty} f_X(\tau) f_Y(z-\tau) \, d\tau$
Since $f_X(\tau)$ is non-zero for $\tau \ge 0$ and $f_Y(z-\tau)$ is non-zero for $z-\tau \ge 0$ (i.e., $\tau \le z$), the integral limits for $\tau$ are from $0$ to $z$.
$f_Z(z) = \int_{0}^{z} e^{-\tau} \cdot 2e^{-2(z-\tau)} \, d\tau$ for $z \ge 0$.
$f_Z(z) = \int_{0}^{z} 2e^{-\tau - 2z + 2\tau} \, d\tau$
$f_Z(z) = \int_{0}^{z} 2e^{\tau - 2z} \, d\tau$
$f_Z(z) = 2e^{-2z} \int_{0}^{z} e^{\tau} \, d\tau$
$f_Z(z) = 2e^{-2z} [e^{\tau}]_{0}^{z}$
$f_Z(z) = 2e^{-2z} (e^{z} - e^{0})$
$f_Z(z) = 2e^{-2z} (e^{z} - 1)$
$f_Z(z) = 2e^{-z} - 2e^{-2z}$ for $z \ge 0$.

**Question 2:**
Suppose the signal strength $S$ of a wireless transmitter and the noise level $N$ measured at a receiver are independent random variables. The variance of the signal strength is $Var(S) = 10$ and the variance of the noise level is $Var(N) = 2$. What is the variance of the combined signal and noise, $C = S+N$?

**Solution 2:**
Since $S$ and $N$ are independent, the variance of their sum is the sum of their variances:
$Var(C) = Var(S+N) = Var(S) + Var(N)$
$Var(C) = 10 + 2 = 12$.

**Question 3:**
Let $X$ and $Y$ be independent random variables uniformly distributed on $[0, 1]$.
a) Find the joint PDF $f_{XY}(x, y)$.
b) Find the probability $P(X > 0.5 \text{ and } Y < 0.5)$.
c) Find the PDF of $Z = XY$. (Hint: This can be tricky; consider methods for finding CDF first).

**Solution 3:**
a) For $0 \le x \le 1$, $f_X(x) = 1$. For $0 \le y \le 1$, $f_Y(y) = 1$.
Since $X$ and $Y$ are independent:
$f_{XY}(x, y) = \begin{cases} 1 \cdot 1 = 1 & 0 \le x \le 1, 0 \le y \le 1 \\ 0 & \text{otherwise} \end{cases}$

b) Since $X$ and $Y$ are independent:
$P(X > 0.5 \text{ and } Y < 0.5) = P(X > 0.5) \cdot P(Y < 0.5)$
$P(X > 0.5) = \int_{0.5}^{1} 1 \, dx = [x]_{0.5}^{1} = 1 - 0.5 = 0.5$.
$P(Y < 0.5) = \int_{0}^{0.5} 1 \, dy = [y]_{0}^{0.5} = 0.5 - 0 = 0.5$.
So, $P(X > 0.5 \text{ and } Y < 0.5) = 0.5 \cdot 0.5 = 0.25$.

c) To find the PDF of $Z = XY$, let's first find the CDF, $F_Z(z) = P(Z \le z) = P(XY \le z)$.
For $0 \le z \le 1$:
$F_Z(z) = \int_{0}^{1} \int_{0}^{\min(1, z/x)} 1 \, dy \, dx$
If $z/x \le 1$ (i.e., $x \ge z$), the inner integral is $\int_{0}^{z/x} 1 \, dy = z/x$.
If $z/x > 1$ (i.e., $x < z$), the inner integral is $\int_{0}^{1} 1 \, dy = 1$.
So, $F_Z(z) = \int_{0}^{z} 1 \, dx + \int_{z}^{1} \frac{z}{x} \, dx$
$F_Z(z) = [x]_{0}^{z} + z[\ln|x|]_{z}^{1}$
$F_Z(z) = z + z(\ln(1) - \ln(z))$
$F_Z(z) = z + z(0 - \ln(z))$
$F_Z(z) = z - z\ln(z)$.

Now, differentiate the CDF with respect to $z$ to get the PDF:
$f_Z(z) = \frac{d}{dz} (z - z\ln(z))$
$f_Z(z) = 1 - (1 \cdot \ln(z) + z \cdot \frac{1}{z})$
$f_Z(z) = 1 - (\ln(z) + 1)$
$f_Z(z) = -\ln(z)$ for $0 \le z \le 1$.

---

### **7. Important Points to Remember**

*   **Definition of Independence:** $f_{XY}(x, y) = f_X(x) f_Y(y)$ is the cornerstone.
*   **$E[XY] = E[X]E[Y]$:** A consequence of independence, but not a proof of it.
*   **$Var(X+Y) = Var(X) + Var(Y)$:** Crucial for sums of independent variables. Remember the covariance term if they are dependent.
*   **Convolution:** The PDF of the sum of independent continuous random variables is found via the convolution integral.
*   **Mutual vs. Pairwise Independence:** Be aware of the distinction; mutual independence is a stronger condition required for many theorems.
*   **Applications:** Recognize where independence is a reasonable assumption in electrical science (e.g., independent noise sources, independent component failures).

---
