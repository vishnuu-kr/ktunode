---
title: "Cumulative distribution function"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 1: Random variables"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35d92"
status: "completed"
scrapedAt: "2026-05-23T16:16:45.884Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Cumulative Distribution Function (CDF)

This topic will introduce you to the Cumulative Distribution Function (CDF), a fundamental concept in probability and statistics used to describe the probability distribution of a random variable.

---

### 1. Introduction to Cumulative Distribution Function (CDF)

The CDF provides a comprehensive way to understand the probability that a random variable takes on a value less than or equal to a specific point. It is a unifying concept applicable to both discrete and continuous random variables.

**Key Concept:** The CDF essentially "accumulates" probability as the value of the random variable increases.

**Reference:** Devore, J. L. (2016). *Probability and Statistics for Engineering and the Sciences* (9th ed.). (Chapter 3: Random Variables and Probability Distributions)

**Course Outcome Alignment:** This topic directly supports **CO1** and **CO2** by providing a foundational tool for understanding both discrete and continuous random variables.

---

### 2. Definition of Cumulative Distribution Function (CDF)

Let $X$ be a random variable. The cumulative distribution function of $X$, denoted by $F_X(x)$, is defined as:

$$F_X(x) = P(X \le x)$$

for any real number $x$.

**In simpler terms:** $F_X(x)$ represents the probability that the random variable $X$ will take on a value less than or equal to $x$.

**Veerarajan, T. (2008). *Probability, Statistics and Random Processes* (3rd ed.) states:** "The cumulative distribution function (CDF) of a random variable $X$ is defined as $F(x) = P(X \le x)$ for all $x \in (-\infty, \infty)$."

**Example:** If $X$ is the outcome of a fair die roll, then $F_X(3) = P(X \le 3) = P(X=1) + P(X=2) + P(X=3) = 1/6 + 1/6 + 1/6 = 3/6 = 0.5$.

---

### 3. Properties of the Cumulative Distribution Function (CDF)

The CDF has several important properties that are true for any random variable (discrete or continuous):

*   **Non-decreasing:** If $x_1 < x_2$, then $F_X(x_1) \le F_X(x_2)$.
    *   **Explanation:** As $x$ increases, the probability of $X$ being less than or equal to $x$ can only stay the same or increase.
    *   **Papoulis & Pillai (2002):** "The function $F_X(x)$ is non-decreasing, i.e., $F_X(x_1) \le F_X(x_2)$ whenever $x_1 \le x_2$."

*   **Limits:**
    *   $\lim_{x \to -\infty} F_X(x) = 0$
        *   **Explanation:** As $x$ approaches negative infinity, the probability of $X$ being less than or equal to $x$ approaches zero, as it's highly unlikely for $X$ to take extremely small negative values (or any value below the smallest possible value of $X$).
    *   $\lim_{x \to \infty} F_X(x) = 1$
        *   **Explanation:** As $x$ approaches positive infinity, the probability of $X$ being less than or equal to $x$ approaches one, as it's almost certain that $X$ will take some value less than or equal to a very large positive number.

*   **Right-continuity:** The CDF is right-continuous, meaning $F_X(x) = \lim_{h \to 0^+} F_X(x+h)$.
    *   **Explanation:** This property is particularly relevant for discrete random variables. It means the probability at a specific point $x$ is included in the interval $[x, \infty)$.

*   **Probability of an Interval:** For any $a < b$, the probability $P(a < X \le b)$ can be calculated using the CDF:
    $$P(a < X \le b) = F_X(b) - F_X(a)$$
    *   **Explanation:** This is derived from the definition: $P(a < X \le b) = P(X \le b) - P(X \le a)$.
    *   **Devore (2016):** Highlights this property as crucial for calculating probabilities over intervals.

*   **Continuity at a Point:** For a continuous random variable, $F_X(x)$ is continuous. For a discrete random variable, $F_X(x)$ has jumps at the values that $X$ can take. The size of the jump at $x$ is equal to $P(X=x)$.
    *   **Explanation:** This distinction is key when differentiating between discrete and continuous random variables.

**Important Point to Remember:** The CDF is always between 0 and 1, inclusive.

---

### 4. CDF for Discrete Random Variables

For a discrete random variable $X$ that can take values $x_1, x_2, x_3, \dots$ with probabilities $p(x_i) = P(X = x_i)$, the CDF is a step function.

$$F_X(x) = \sum_{x_i \le x} P(X = x_i)$$

**Example (Fair Die Roll):**
Let $X$ be the outcome of a fair die roll. The possible values are $\{1, 2, 3, 4, 5, 6\}$, each with probability $1/6$.

The CDF, $F_X(x)$, is:

*   $F_X(x) = 0$ for $x < 1$
*   $F_X(x) = 1/6$ for $1 \le x < 2$
*   $F_X(x) = 2/6$ for $2 \le x < 3$
*   $F_X(x) = 3/6$ for $3 \le x < 4$
*   $F_X(x) = 4/6$ for $4 \le x < 5$
*   $F_X(x) = 5/6$ for $5 \le x < 6$
*   $F_X(x) = 6/6 = 1$ for $x \ge 6$

**Veerarajan (2008) provides examples of CDFs for common discrete distributions like Binomial and Poisson.**

**Course Outcome Alignment:** **CO1** is directly addressed here by detailing the CDF for discrete random variables.

---

### 5. CDF for Continuous Random Variables

For a continuous random variable $X$ with probability density function (PDF) $f_X(x)$, the CDF is given by the integral of the PDF:

$$F_X(x) = \int_{-\infty}^{x} f_X(t) dt$$

**Explanation:** The CDF is the cumulative area under the PDF curve from negative infinity up to $x$.

**Devore (2016) emphasizes:** "The CDF is the integral of the PDF."

**Example (Exponential Distribution):**
Consider a continuous random variable $X$ representing the time until failure of a component, with the PDF:
$f_X(x) = \lambda e^{-\lambda x}$ for $x \ge 0$, and $f_X(x) = 0$ for $x < 0$.

The CDF is:
$$F_X(x) = \int_{-\infty}^{x} f_X(t) dt$$

*   For $x < 0$: $F_X(x) = \int_{-\infty}^{x} 0 \, dt = 0$
*   For $x \ge 0$:
    $$F_X(x) = \int_{-\infty}^{x} f_X(t) dt = \int_{-\infty}^{0} 0 \, dt + \int_{0}^{x} \lambda e^{-\lambda t} dt$$
    $$F_X(x) = 0 + \left[ -e^{-\lambda t} \right]_0^x$$
    $$F_X(x) = -e^{-\lambda x} - (-e^{-\lambda \cdot 0})$$
    $$F_X(x) = -e^{-\lambda x} + e^0$$
    $$F_X(x) = 1 - e^{-\lambda x}$$

So, the CDF for an exponential distribution is $F_X(x) = 1 - e^{-\lambda x}$ for $x \ge 0$, and $0$ for $x < 0$.

**Ross (2020) and Palaniammal (2015) extensively cover CDFs for continuous distributions like Uniform, Normal, and Exponential.**

**Course Outcome Alignment:** **CO2** is directly addressed here by detailing the CDF for continuous random variables.

---

### 6. Using CDF to Find Probabilities

The CDF is a powerful tool for calculating various probabilities:

*   **$P(X \le x)$:** This is directly given by $F_X(x)$.
*   **$P(X > x)$:** This can be found using the complement rule:
    $$P(X > x) = 1 - P(X \le x) = 1 - F_X(x)$$
*   **$P(a < X \le b)$:** As mentioned earlier:
    $$P(a < X \le b) = F_X(b) - F_X(a)$$
*   **$P(X = x)$ (for discrete RVs):**
    $$P(X = x) = F_X(x) - F_X(x^-)$$
    where $F_X(x^-) = \lim_{h \to 0^+} F_X(x-h)$ is the limit from the left (the value just before the jump at $x$). This is essentially the value of the CDF just below the point $x$.

**Example:** Using the fair die roll example, $P(2 < X \le 5) = F_X(5) - F_X(2) = 5/6 - 1/6 = 4/6 = 2/3$.

**Anderson & Benedek (2017) discuss applications of CDFs in reliability and queueing theory.**

---

### 7. Examples and Applications in Electrical Science

The CDF is widely used in electrical engineering for:

*   **Reliability Engineering:** Calculating the probability that a component or system will fail by a certain time. For instance, if $X$ is the lifetime of a device, $F_X(t)$ gives the probability of failure by time $t$.
*   **Signal Processing:** Describing the distribution of noise levels or signal amplitudes.
*   **Communication Systems:** Analyzing the probability of error in data transmission based on signal strength or interference.
*   **Quality Control:** Determining the probability of a manufactured product meeting certain specifications.

**Example:** In a communication system, if $S$ is the signal strength, and we want to know the probability that the signal strength is at least $s_0$, we would use the CDF of $S$:
$P(S \ge s_0) = 1 - F_S(s_0)$.

**Course Outcome Alignment:** Understanding CDFs directly contributes to the application of probability concepts in **CO1** and **CO2**, which are foundational for many areas in electrical science. While not directly addressing CO3 or CO4, the principles of understanding probability distributions are essential for those outcomes.

---

### 8. Practice Questions

**Question 1 (Discrete CDF):**
A random variable $Y$ has the following probability mass function:
$P(Y=0) = 0.2$, $P(Y=1) = 0.5$, $P(Y=2) = 0.3$.
Construct the cumulative distribution function $F_Y(y)$ for $Y$.

**Question 2 (Continuous CDF):**
Let $X$ be a continuous random variable with the PDF:
$f_X(x) = \begin{cases} 2x & \text{if } 0 \le x \le 1 \\ 0 & \text{otherwise} \end{cases}$
Find the CDF $F_X(x)$ for $X$.

**Question 3 (Using CDF):**
Using the CDF from Question 2, calculate:
a) $P(X \le 0.5)$
b) $P(X > 0.7)$
c) $P(0.2 < X \le 0.8)$

**Question 4 (Properties):**
Which of the following is NOT a property of a cumulative distribution function $F_X(x)$?
a) $F_X(x)$ is non-decreasing.
b) $\lim_{x \to -\infty} F_X(x) = 1$
c) $\lim_{x \to \infty} F_X(x) = 1$
d) $F_X(x)$ is right-continuous.

---

### 9. Answers to Practice Questions

**Answer 1:**
The CDF $F_Y(y)$ is:
*   $F_Y(y) = 0$ for $y < 0$
*   $F_Y(y) = 0.2$ for $0 \le y < 1$
*   $F_Y(y) = 0.2 + 0.5 = 0.7$ for $1 \le y < 2$
*   $F_Y(y) = 0.2 + 0.5 + 0.3 = 1.0$ for $y \ge 2$

**Answer 2:**
For $x < 0$: $F_X(x) = \int_{-\infty}^{x} 0 \, dt = 0$.
For $0 \le x \le 1$:
$F_X(x) = \int_{-\infty}^{x} f_X(t) dt = \int_{-\infty}^{0} 0 \, dt + \int_{0}^{x} 2t \, dt$
$F_X(x) = 0 + [t^2]_0^x = x^2 - 0^2 = x^2$.
For $x > 1$: $F_X(x) = \int_{-\infty}^{x} f_X(t) dt = \int_{0}^{1} 2t \, dt + \int_{1}^{x} 0 \, dt$
$F_X(x) = [t^2]_0^1 + 0 = 1^2 - 0^2 = 1$.

So, the CDF is:
$F_X(x) = \begin{cases} 0 & \text{if } x < 0 \\ x^2 & \text{if } 0 \le x \le 1 \\ 1 & \text{if } x > 1 \end{cases}$

**Answer 3:**
a) $P(X \le 0.5) = F_X(0.5) = (0.5)^2 = 0.25$.
b) $P(X > 0.7) = 1 - F_X(0.7) = 1 - (0.7)^2 = 1 - 0.49 = 0.51$.
c) $P(0.2 < X \le 0.8) = F_X(0.8) - F_X(0.2) = (0.8)^2 - (0.2)^2 = 0.64 - 0.04 = 0.60$.

**Answer 4:**
The correct answer is **b)**. For a CDF, $\lim_{x \to -\infty} F_X(x) = 0$, not 1.

---

### 10. Important Points to Remember

*   The CDF $F_X(x)$ gives $P(X \le x)$.
*   It's a non-decreasing function.
*   Its values are always between 0 and 1.
*   It is 0 at $-\infty$ and 1 at $\infty$.
*   For discrete variables, it's a step function.
*   For continuous variables, it's a continuous function and the integral of the PDF.
*   Probabilities of intervals can be calculated as $F_X(b) - F_X(a)$.

---

This concludes the study notes on the Cumulative Distribution Function. Understanding the CDF is crucial for all subsequent topics in random variables and their applications in electrical science.
