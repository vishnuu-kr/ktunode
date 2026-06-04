---
title: "Continuous random variables and their probability distributions"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462ebe"
status: "completed"
scrapedAt: "2026-05-20T17:54:38.965Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 2: Continuous Random Variables and Their Probability Distributions

---

### **Introduction to Continuous Random Variables**

**Definition:** A random variable $X$ is said to be continuous if its possible values can be any real number within a given range or an interval. Unlike discrete random variables, we cannot list all possible values.

**Key Concept:** For continuous random variables, the probability of the variable taking on any *specific* value is zero, i.e., $P(X=c) = 0$ for any constant $c$. This is because there are infinitely many possible values. Instead, we talk about the probability that the random variable falls within a certain interval.

**Relation to Course Outcomes:** This section directly supports **CO2**, which aims to understand the concept and properties of continuous random variables.

---

### **Probability Density Function (PDF)**

**Definition:** The Probability Density Function (PDF), denoted by $f(x)$, for a continuous random variable $X$ is a function that describes the relative likelihood for this random variable to take on a given value.

**Properties of a PDF:**

1.  $f(x) \ge 0$ for all $x$. (The density function must be non-negative).
2.  $\int_{-\infty}^{\infty} f(x) dx = 1$. (The total area under the PDF curve must be equal to 1, representing the total probability).
3.  For any interval $[a, b]$, the probability that $X$ falls within this interval is given by $P(a \le X \le b) = \int_{a}^{b} f(x) dx$.

**Important Point to Remember:** The value of $f(x)$ at a specific point $x$ is *not* the probability of $X$ being equal to $x$. It represents the *density* of probability around $x$.

**Textbook Reference:** Devore J. L. (9th ed., 2016), Chapter 3, Section 3.1.

**Example:**
Let $X$ be a continuous random variable with PDF:
$f(x) = \begin{cases} kx^2 & 0 \le x \le 1 \\ 0 & \text{otherwise} \end{cases}$
To find the value of $k$ and then calculate probabilities.

*   **Finding k:**
    Using property 2: $\int_{-\infty}^{\infty} f(x) dx = 1$
    $\int_{0}^{1} kx^2 dx = 1$
    $k \left[\frac{x^3}{3}\right]_{0}^{1} = 1$
    $k \left(\frac{1^3}{3} - \frac{0^3}{3}\right) = 1$
    $k \left(\frac{1}{3}\right) = 1 \implies k = 3$
    So, $f(x) = 3x^2$ for $0 \le x \le 1$.

*   **Calculating Probability:**
    Find $P(0.2 \le X \le 0.5)$.
    $P(0.2 \le X \le 0.5) = \int_{0.2}^{0.5} 3x^2 dx$
    $= \left[x^3\right]_{0.2}^{0.5} = (0.5)^3 - (0.2)^3$
    $= 0.125 - 0.008 = 0.117$

**Practice Question 1:**
A continuous random variable $Y$ has a PDF given by $f(y) = cy$ for $0 \le y \le 2$, and $f(y) = 0$ otherwise. Find the value of $c$ and then calculate $P(1 \le Y \le 1.5)$.

**Answer to Practice Question 1:**
*   **Finding c:**
    $\int_{0}^{2} cy dy = 1$
    $c \left[\frac{y^2}{2}\right]_{0}^{2} = 1$
    $c \left(\frac{2^2}{2} - \frac{0^2}{2}\right) = 1$
    $c \left(\frac{4}{2}\right) = 1 \implies 2c = 1 \implies c = \frac{1}{2}$
    So, $f(y) = \frac{1}{2}y$ for $0 \le y \le 2$.

*   **Calculating Probability:**
    $P(1 \le Y \le 1.5) = \int_{1}^{1.5} \frac{1}{2}y dy$
    $= \frac{1}{2} \left[\frac{y^2}{2}\right]_{1}^{1.5} = \frac{1}{4} [y^2]_{1}^{1.5}$
    $= \frac{1}{4} ((1.5)^2 - (1)^2) = \frac{1}{4} (2.25 - 1) = \frac{1}{4} (1.25) = 0.3125$

---

### **Cumulative Distribution Function (CDF)**

**Definition:** The Cumulative Distribution Function (CDF), denoted by $F(x)$, for a continuous random variable $X$ is defined as the probability that $X$ takes on a value less than or equal to $x$.
$F(x) = P(X \le x) = \int_{-\infty}^{x} f(t) dt$.

**Properties of a CDF:**

1.  $0 \le F(x) \le 1$ for all $x$.
2.  $F(x)$ is non-decreasing: If $a < b$, then $F(a) \le F(b)$.
3.  $\lim_{x \to -\infty} F(x) = 0$.
4.  $\lim_{x \to \infty} F(x) = 1$.
5.  $P(a \le X \le b) = F(b) - F(a)$.

**Important Point to Remember:** The CDF is always a continuous and non-decreasing function, ranging from 0 to 1.

**Textbook Reference:** Devore J. L. (9th ed., 2016), Chapter 3, Section 3.1.
Papoulis, A. & Pillai, S.U. (4th ed., 2002), Chapter 4.

**Relation to Course Outcomes:** This section reinforces **CO2** by providing another fundamental property of continuous random variables and their distributions.

**Example:**
Using the PDF from the previous example, $f(x) = 3x^2$ for $0 \le x \le 1$. Let's find the CDF.

*   **Finding F(x):**
    For $x < 0$: $F(x) = \int_{-\infty}^{x} 0 dt = 0$.
    For $0 \le x \le 1$:
    $F(x) = \int_{-\infty}^{x} f(t) dt = \int_{-\infty}^{0} 0 dt + \int_{0}^{x} 3t^2 dt$
    $= 0 + \left[t^3\right]_{0}^{x} = x^3$.
    For $x > 1$: $F(x) = \int_{-\infty}^{x} f(t) dt = \int_{-\infty}^{0} 0 dt + \int_{0}^{1} 3t^2 dt + \int_{1}^{x} 0 dt$
    $= 0 + \left[t^3\right]_{0}^{1} + 0 = 1^3 - 0^3 = 1$.

    So, the CDF is:
    $F(x) = \begin{cases} 0 & x < 0 \\ x^3 & 0 \le x \le 1 \\ 1 & x > 1 \end{cases}$

*   **Calculating Probability using CDF:**
    Find $P(0.2 \le X \le 0.5)$.
    $P(0.2 \le X \le 0.5) = F(0.5) - F(0.2)$
    $= (0.5)^3 - (0.2)^3 = 0.125 - 0.008 = 0.117$.
    This matches the result obtained using the PDF.

**Practice Question 2:**
For the random variable $Y$ with PDF $f(y) = \frac{1}{2}y$ for $0 \le y \le 2$, find the CDF, $F(y)$. Then, use the CDF to calculate $P(0.5 \le Y \le 1.5)$.

**Answer to Practice Question 2:**
*   **Finding F(y):**
    For $y < 0$: $F(y) = 0$.
    For $0 \le y \le 2$:
    $F(y) = \int_{0}^{y} \frac{1}{2}t dt = \frac{1}{2} \left[\frac{t^2}{2}\right]_{0}^{y} = \frac{1}{4} y^2$.
    For $y > 2$: $F(y) = \int_{0}^{2} \frac{1}{2}t dt = \frac{1}{4} [t^2]_{0}^{2} = \frac{1}{4}(2^2 - 0^2) = \frac{1}{4}(4) = 1$.

    So, the CDF is:
    $F(y) = \begin{cases} 0 & y < 0 \\ \frac{1}{4}y^2 & 0 \le y \le 2 \\ 1 & y > 2 \end{cases}$

*   **Calculating Probability using CDF:**
    $P(0.5 \le Y \le 1.5) = F(1.5) - F(0.5)$
    $= \frac{1}{4}(1.5)^2 - \frac{1}{4}(0.5)^2 = \frac{1}{4}(2.25) - \frac{1}{4}(0.25)$
    $= \frac{1}{4}(2.25 - 0.25) = \frac{1}{4}(2.00) = 0.5$.

---

### **Expected Value and Variance of Continuous Random Variables**

**Expected Value (Mean):**
The expected value (or mean) of a continuous random variable $X$ with PDF $f(x)$ is given by:
$E[X] = \mu = \int_{-\infty}^{\infty} x f(x) dx$.

**Properties of Expected Value:**
*   $E[c] = c$ for any constant $c$.
*   $E[cX] = cE[X]$ for any constant $c$.
*   $E[X+Y] = E[X] + E[Y]$ for any random variables $X$ and $Y$.
*   $E[g(X)] = \int_{-\infty}^{\infty} g(x) f(x) dx$.

**Variance:**
The variance of a continuous random variable $X$ is a measure of the spread of its distribution. It is defined as:
$Var(X) = \sigma^2 = E[(X - \mu)^2] = \int_{-\infty}^{\infty} (x - \mu)^2 f(x) dx$.

An alternative formula for variance is:
$Var(X) = \sigma^2 = E[X^2] - (E[X])^2$.
Where $E[X^2] = \int_{-\infty}^{\infty} x^2 f(x) dx$.

**Standard Deviation:**
The standard deviation is the square root of the variance:
$\sigma = \sqrt{Var(X)}$.

**Textbook Reference:** Devore J. L. (9th ed., 2016), Chapter 3, Section 3.2.
Ross, S. M. (6th ed., 2020), Chapter 5.

**Relation to Course Outcomes:** This directly contributes to **CO2** by covering the fundamental statistical measures for continuous random variables.

**Example:**
For $f(x) = 3x^2$ for $0 \le x \le 1$.

*   **Expected Value:**
    $E[X] = \int_{0}^{1} x (3x^2) dx = \int_{0}^{1} 3x^3 dx$
    $= 3 \left[\frac{x^4}{4}\right]_{0}^{1} = 3 \left(\frac{1^4}{4} - \frac{0^4}{4}\right) = \frac{3}{4}$.

*   **Variance:**
    First, calculate $E[X^2]$:
    $E[X^2] = \int_{0}^{1} x^2 (3x^2) dx = \int_{0}^{1} 3x^4 dx$
    $= 3 \left[\frac{x^5}{5}\right]_{0}^{1} = 3 \left(\frac{1^5}{5} - \frac{0^5}{5}\right) = \frac{3}{5}$.

    Now, calculate the variance:
    $Var(X) = E[X^2] - (E[X])^2 = \frac{3}{5} - \left(\frac{3}{4}\right)^2$
    $= \frac{3}{5} - \frac{9}{16} = \frac{48 - 45}{80} = \frac{3}{80}$.

    The standard deviation is $\sigma = \sqrt{\frac{3}{80}} \approx 0.1936$.

**Practice Question 3:**
For the random variable $Y$ with PDF $f(y) = \frac{1}{2}y$ for $0 \le y \le 2$:
a) Calculate the expected value $E[Y]$.
b) Calculate the variance $Var(Y)$.

**Answer to Practice Question 3:**
a) **Expected Value:**
   $E[Y] = \int_{0}^{2} y \left(\frac{1}{2}y\right) dy = \int_{0}^{2} \frac{1}{2}y^2 dy$
   $= \frac{1}{2} \left[\frac{y^3}{3}\right]_{0}^{2} = \frac{1}{2} \left(\frac{2^3}{3} - \frac{0^3}{3}\right) = \frac{1}{2} \left(\frac{8}{3}\right) = \frac{4}{3}$.

b) **Variance:**
   First, calculate $E[Y^2]$:
   $E[Y^2] = \int_{0}^{2} y^2 \left(\frac{1}{2}y\right) dy = \int_{0}^{2} \frac{1}{2}y^3 dy$
   $= \frac{1}{2} \left[\frac{y^4}{4}\right]_{0}^{2} = \frac{1}{2} \left(\frac{2^4}{4} - \frac{0^4}{4}\right) = \frac{1}{2} \left(\frac{16}{4}\right) = \frac{1}{2}(4) = 2$.

   Now, calculate the variance:
   $Var(Y) = E[Y^2] - (E[Y])^2 = 2 - \left(\frac{4}{3}\right)^2$
   $= 2 - \frac{16}{9} = \frac{18 - 16}{9} = \frac{2}{9}$.
   The standard deviation is $\sigma = \sqrt{\frac{2}{9}} = \frac{\sqrt{2}}{3} \approx 0.4714$.

---

### **Common Continuous Probability Distributions**

This section will briefly introduce some of the most important continuous distributions frequently encountered in physical sciences.

#### **1. Uniform Distribution**

**Description:** A continuous random variable $X$ is said to have a uniform distribution over the interval $[a, b]$ if its PDF is constant for all values between $a$ and $b$, and zero otherwise.

**PDF:**
$f(x) = \begin{cases} \frac{1}{b-a} & a \le x \le b \\ 0 & \text{otherwise} \end{cases}$

**Expected Value:** $E[X] = \frac{a+b}{2}$
**Variance:** $Var(X) = \frac{(b-a)^2}{12}$

**Textbook Reference:** Devore J. L. (9th ed., 2016), Chapter 3, Section 3.2.
Ross, S. M. (6th ed., 2020), Chapter 5.

**Example:**
Suppose the time $T$ (in minutes) it takes to complete a particular task is uniformly distributed between 10 and 30 minutes.
$a = 10$, $b = 30$.
$f(t) = \frac{1}{30-10} = \frac{1}{20}$ for $10 \le t \le 30$.
$E[T] = \frac{10+30}{2} = 20$ minutes.
$Var(T) = \frac{(30-10)^2}{12} = \frac{20^2}{12} = \frac{400}{12} = \frac{100}{3} \approx 33.33$ minutes$^2$.

**Practice Question 4:**
A signal strength is uniformly distributed between 5 and 15 volts. What is the probability that the signal strength is between 7 and 12 volts?

**Answer to Practice Question 4:**
Here, $a = 5$ and $b = 15$. The PDF is $f(x) = \frac{1}{15-5} = \frac{1}{10}$ for $5 \le x \le 15$.
$P(7 \le X \le 12) = \int_{7}^{12} \frac{1}{10} dx = \frac{1}{10} [x]_{7}^{12} = \frac{1}{10} (12 - 7) = \frac{5}{10} = 0.5$.

#### **2. Exponential Distribution**

**Description:** The exponential distribution is often used to model the time between events in a Poisson process (i.e., a process in which events occur continuously and independently at a constant average rate). It is a continuous probability distribution characterized by a single parameter, $\lambda$ (the rate parameter).

**PDF:**
$f(x; \lambda) = \begin{cases} \lambda e^{-\lambda x} & x \ge 0 \\ 0 & x < 0 \end{cases}$
Here, $x$ typically represents time or distance. $\lambda > 0$.

**Expected Value:** $E[X] = \frac{1}{\lambda}$
**Variance:** $Var(X) = \frac{1}{\lambda^2}$

**Important Property (Memoryless Property):** For $t_1, t_2 > 0$, $P(X > t_1 + t_2 | X > t_1) = P(X > t_2)$. This means the past has no bearing on the future. If you have to wait $t_1$ units of time and the event hasn't happened yet, the probability of waiting an additional $t_2$ units is the same as the probability of waiting $t_2$ from the beginning.

**Textbook Reference:** Devore J. L. (9th ed., 2016), Chapter 3, Section 3.3.
Ross, S. M. (6th ed., 2020), Chapter 5.

**Example:**
Suppose the lifetime $T$ (in years) of a certain electronic component follows an exponential distribution with a rate parameter $\lambda = 0.01$ per year.
$f(t) = 0.01 e^{-0.01 t}$ for $t \ge 0$.
$E[T] = \frac{1}{0.01} = 100$ years.
$Var(T) = \frac{1}{(0.01)^2} = \frac{1}{0.0001} = 10000$ years$^2$.

To find the probability that the component lasts more than 50 years:
$P(T > 50) = \int_{50}^{\infty} 0.01 e^{-0.01 t} dt$
$= [-e^{-0.01 t}]_{50}^{\infty} = 0 - (-e^{-0.01 \times 50})$
$= e^{-0.5} \approx 0.6065$.

**Practice Question 5:**
The time between successive arrivals at a service counter follows an exponential distribution with an average rate of 2 arrivals per minute.
a) What is the PDF of the inter-arrival time?
b) What is the probability that the time between successive arrivals is less than 0.5 minutes?

**Answer to Practice Question 5:**
The average rate of arrivals is $\lambda = 2$ per minute.
a) The PDF of the inter-arrival time $X$ is $f(x) = \lambda e^{-\lambda x} = 2e^{-2x}$ for $x \ge 0$.
b) $P(X < 0.5) = \int_{0}^{0.5} 2e^{-2x} dx$
   $= [-e^{-2x}]_{0}^{0.5} = (-e^{-2 \times 0.5}) - (-e^{-2 \times 0}) = -e^{-1} - (-e^{0})$
   $= -e^{-1} + 1 = 1 - e^{-1} \approx 1 - 0.3679 = 0.6321$.

#### **3. Normal Distribution (Gaussian Distribution)**

**Description:** The normal distribution is arguably the most important continuous distribution. It is bell-shaped and symmetrical, characterized by two parameters: the mean ($\mu$) and the standard deviation ($\sigma$). Many natural phenomena, such as heights, weights, and measurement errors, are approximately normally distributed.

**PDF:**
$f(x; \mu, \sigma) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}$, for $-\infty < x < \infty$.

**Expected Value:** $E[X] = \mu$
**Variance:** $Var(X) = \sigma^2$

**Standardization:** To work with the normal distribution, we often standardize it by converting to a standard normal distribution with mean 0 and standard deviation 1. This is done using the z-score:
$Z = \frac{X - \mu}{\sigma}$.
The PDF of the standard normal distribution is:
$\phi(z) = \frac{1}{\sqrt{2\pi}} e^{-\frac{1}{2}z^2}$.
The CDF of the standard normal distribution is denoted by $\Phi(z)$. Values of $\Phi(z)$ are found in standard normal tables.

**Textbook Reference:** Devore J. L. (9th ed., 2016), Chapter 4.
Ross, S. M. (6th ed., 2020), Chapter 5.

**Relation to Course Outcomes:** This distribution is fundamental for many statistical applications, particularly hypothesis testing and confidence intervals, which are covered in **CO3**. Understanding its properties is crucial.

**Example:**
Suppose the diameter of a manufactured ball bearing is normally distributed with a mean $\mu = 10$ mm and a standard deviation $\sigma = 0.1$ mm.
$f(x) = \frac{1}{0.1 \sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-10}{0.1}\right)^2}$.

To find the probability that a ball bearing has a diameter between 9.8 mm and 10.2 mm:
We need to calculate $P(9.8 \le X \le 10.2)$.
First, convert to z-scores:
$z_1 = \frac{9.8 - 10}{0.1} = \frac{-0.2}{0.1} = -2$.
$z_2 = \frac{10.2 - 10}{0.1} = \frac{0.2}{0.1} = 2$.

So, $P(9.8 \le X \le 10.2) = P(-2 \le Z \le 2)$.
Using the standard normal CDF ($\Phi$):
$P(-2 \le Z \le 2) = \Phi(2) - \Phi(-2)$.
From standard normal tables, $\Phi(2) \approx 0.9772$ and $\Phi(-2) = 1 - \Phi(2) \approx 1 - 0.9772 = 0.0228$.
Therefore, $P(-2 \le Z \le 2) \approx 0.9772 - 0.0228 = 0.9544$.

This means approximately 95.44% of the ball bearings have a diameter within 2 standard deviations of the mean.

**Practice Question 6:**
The scores on a standardized test are normally distributed with a mean of 500 and a standard deviation of 100. What is the probability that a randomly selected student scored between 400 and 650?

**Answer to Practice Question 6:**
Here, $\mu = 500$ and $\sigma = 100$. We want to find $P(400 \le X \le 650)$.
Convert to z-scores:
$z_1 = \frac{400 - 500}{100} = \frac{-100}{100} = -1$.
$z_2 = \frac{650 - 500}{100} = \frac{150}{100} = 1.5$.

So, $P(400 \le X \le 650) = P(-1 \le Z \le 1.5)$.
$P(-1 \le Z \le 1.5) = \Phi(1.5) - \Phi(-1)$.
From standard normal tables:
$\Phi(1.5) \approx 0.9332$.
$\Phi(-1) = 1 - \Phi(1) \approx 1 - 0.8413 = 0.1587$.

Therefore, $P(-1 \le Z \le 1.5) \approx 0.9332 - 0.1587 = 0.7745$.

---

### **Numerical Integration for Continuous Random Variables**

**Relevance:** While calculus provides the theoretical framework for PDFs and CDFs, many real-world PDFs might not have simple analytical antiderivatives. In such cases, or when dealing with complex functions, numerical methods are essential to approximate integrals. This directly links to **CO4**.

**Key Concepts:**
*   **Approximating Integrals:** Numerical methods approximate the definite integral of a function over an interval.
*   **Common Methods:**
    *   **Trapezoidal Rule:** Approximates the area under the curve by dividing it into trapezoids.
    *   **Simpson's Rule:** Approximates the area using parabolic segments, generally providing a more accurate result for the same number of intervals.

**Textbook Reference:** Sastry, S S (5th ed., 2012), Chapter 6 (Trapezoidal Rule) and Chapter 7 (Simpson's Rule).
Chapra, S. C., & Canale, R. P. (8th ed., 2021), Chapters 19 & 20.

**Example (using Trapezoidal Rule):**
Let's approximate $P(0.2 \le X \le 0.5)$ for the PDF $f(x) = 3x^2$ using the Trapezoidal Rule with $n=3$ intervals.
The interval is $[0.2, 0.5]$, so $b=0.5$, $a=0.2$.
The width of each interval is $h = \frac{b-a}{n} = \frac{0.5 - 0.2}{3} = \frac{0.3}{3} = 0.1$.
The points are $x_0 = 0.2, x_1 = 0.3, x_2 = 0.4, x_3 = 0.5$.

The Trapezoidal Rule formula is:
$\int_{a}^{b} f(x) dx \approx \frac{h}{2} [f(x_0) + 2f(x_1) + 2f(x_2) + ... + 2f(x_{n-1}) + f(x_n)]$

$f(x) = 3x^2$.
$f(0.2) = 3(0.2)^2 = 3(0.04) = 0.12$.
$f(0.3) = 3(0.3)^2 = 3(0.09) = 0.27$.
$f(0.4) = 3(0.4)^2 = 3(0.16) = 0.48$.
$f(0.5) = 3(0.5)^2 = 3(0.25) = 0.75$.

Approximation:
$P(0.2 \le X \le 0.5) \approx \frac{0.1}{2} [f(0.2) + 2f(0.3) + 2f(0.4) + f(0.5)]$
$\approx 0.05 [0.12 + 2(0.27) + 2(0.48) + 0.75]$
$\approx 0.05 [0.12 + 0.54 + 0.96 + 0.75]$
$\approx 0.05 [2.37] = 0.1185$.

The exact value was 0.117. The numerical method gives a close approximation.

**Practice Question 7:**
Use the Trapezoidal Rule with $n=4$ to approximate the probability $P(1 \le Y \le 1.5)$ for the PDF $f(y) = \frac{1}{2}y$. (You calculated the exact value as 0.5 in Practice Question 2).

**Answer to Practice Question 7:**
Interval is $[1, 1.5]$. $a=1, b=1.5$. $n=4$.
$h = \frac{1.5 - 1}{4} = \frac{0.5}{4} = 0.125$.
Points: $x_0=1, x_1=1.125, x_2=1.25, x_3=1.375, x_4=1.5$.
$f(y) = \frac{1}{2}y$.
$f(1) = 0.5$.
$f(1.125) = \frac{1}{2}(1.125) = 0.5625$.
$f(1.25) = \frac{1}{2}(1.25) = 0.625$.
$f(1.375) = \frac{1}{2}(1.375) = 0.6875$.
$f(1.5) = \frac{1}{2}(1.5) = 0.75$.

Approximation:
$P(1 \le Y \le 1.5) \approx \frac{0.125}{2} [f(1) + 2f(1.125) + 2f(1.25) + 2f(1.375) + f(1.5)]$
$\approx 0.0625 [0.5 + 2(0.5625) + 2(0.625) + 2(0.6875) + 0.75]$
$\approx 0.0625 [0.5 + 1.125 + 1.25 + 1.375 + 0.75]$
$\approx 0.0625 [5.000]$
$\approx 0.3125$.

*Correction*: The interval for Practice Question 2 was $0.5 \le Y \le 1.5$. Let's use that interval for this practice question to check our numerical method on that part.
Using interval $[0.5, 1.5]$ with $n=4$.
$a=0.5, b=1.5$. $h = \frac{1.5-0.5}{4} = \frac{1}{4} = 0.25$.
Points: $x_0=0.5, x_1=0.75, x_2=1.0, x_3=1.25, x_4=1.5$.
$f(y) = \frac{1}{2}y$.
$f(0.5) = 0.25$.
$f(0.75) = 0.375$.
$f(1.0) = 0.5$.
$f(1.25) = 0.625$.
$f(1.5) = 0.75$.

Approximation:
$P(0.5 \le Y \le 1.5) \approx \frac{0.25}{2} [f(0.5) + 2f(0.75) + 2f(1.0) + 2f(1.25) + f(1.5)]$
$\approx 0.125 [0.25 + 2(0.375) + 2(0.5) + 2(0.625) + 0.75]$
$\approx 0.125 [0.25 + 0.75 + 1.0 + 1.25 + 0.75]$
$\approx 0.125 [4.00]$
$\approx 0.5$.
This matches the exact answer.

---

### **Summary and Key Takeaways**

*   **Continuous Random Variables:** Take any value within an interval. $P(X=c)=0$.
*   **PDF $f(x)$:** Describes the relative likelihood. $\int_{-\infty}^{\infty} f(x) dx = 1$ and $f(x) \ge 0$. Probability is the area under the curve.
*   **CDF $F(x)$:** $P(X \le x)$. Always continuous and non-decreasing from 0 to 1. $P(a \le X \le b) = F(b) - F(a)$.
*   **Expected Value ($E[X]$) and Variance ($Var(X)$):** Measure central tendency and spread, respectively. Calculated via integration: $E[g(X)] = \int g(x) f(x) dx$.
*   **Common Distributions:** Uniform, Exponential, Normal are foundational.
*   **Numerical Integration:** Essential for approximating probabilities when analytical integration is not feasible (Trapezoidal, Simpson's rules).

**Relation to Course Outcomes:**
*   **CO1:** While focused on discrete variables, the foundational concepts of random variables, expectation, and variance are transferable.
*   **CO2:** This module is entirely dedicated to CO2, covering the concepts, properties, and models of continuous random variables.
*   **CO3:** Understanding continuous distributions like the Normal distribution is a prerequisite for confidence intervals and hypothesis testing.
*   **CO4:** The necessity of numerical integration for continuous variables directly addresses CO4.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=XZo4xyJXC2k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### **Further Reading and Practice**

*   Work through more problems from Devore J. L. (9th ed.) and Ross, S. M. (6th ed.) related to continuous random variables and their distributions.
*   Practice problems from Sastry, S S (5th ed.) and Chapra, S. C., & Canale, R. P. (8th ed.) that involve numerical integration, especially those that could be applied to probability density functions.
*   Explore the properties of other continuous distributions like the Gamma distribution and Beta distribution if time permits, as these are common in advanced physical sciences.

---