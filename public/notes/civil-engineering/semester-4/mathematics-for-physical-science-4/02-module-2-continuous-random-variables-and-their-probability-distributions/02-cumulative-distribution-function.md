---
title: "Cumulative distribution function"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba810929"
status: "completed"
scrapedAt: "2026-05-20T18:46:00.983Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 2: Continuous Random Variables and Their Probability Distributions

### Topic: Cumulative Distribution Function (CDF)

---

### 1. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Define** the Cumulative Distribution Function (CDF) for a continuous random variable.
*   **Understand** the properties of a CDF.
*   **Calculate** the CDF for various continuous probability distributions.
*   **Use** the CDF to determine probabilities for intervals of a continuous random variable.
*   **Relate** the CDF to the Probability Density Function (PDF).
*   **Understand** the concept of the inverse CDF (quantile function) and its applications.

---

### 2. Introduction to Cumulative Distribution Function (CDF)

For a continuous random variable $X$, the CDF, denoted by $F_X(x)$, provides the probability that the random variable $X$ takes on a value less than or equal to a specific value $x$.

**Key Concept:** Unlike discrete random variables where probabilities are assigned to specific values, for continuous random variables, the probability of $X$ taking any *exact* value is zero. Instead, we are interested in probabilities over intervals.

---

### 3. Definition of the Cumulative Distribution Function (CDF)

For a continuous random variable $X$, the cumulative distribution function $F_X(x)$ is defined as:

$$F_X(x) = P(X \le x)$$

where:
*   $X$ is the continuous random variable.
*   $x$ is a real number representing the upper bound of the interval.
*   $P(X \le x)$ denotes the probability that the random variable $X$ takes a value less than or equal to $x$.

**How to calculate $F_X(x)$ using the Probability Density Function (PDF), $f_X(t)$:**

The CDF is the integral of the PDF from negative infinity up to the value $x$:

$$F_X(x) = \int_{-\infty}^{x} f_X(t) \, dt$$

---

### 4. Properties of a Cumulative Distribution Function (CDF)

A function $F(x)$ is a valid CDF for a continuous random variable if and only if it satisfies the following properties:

*   **Non-decreasing:** For any two values $x_1$ and $x_2$ such that $x_1 \le x_2$, we have $F_X(x_1) \le F_X(x_2)$. This means the probability never decreases as the value of $x$ increases.
    $$x_1 \le x_2 \implies F_X(x_1) \le F_X(x_2)$$

*   **Limits:**
    *   As $x$ approaches negative infinity, the CDF approaches 0.
        $$\lim_{x \to -\infty} F_X(x) = 0$$
        This signifies that the probability of $X$ being less than or equal to any value tending towards negative infinity is zero.
    *   As $x$ approaches positive infinity, the CDF approaches 1.
        $$\lim_{x \to \infty} F_X(x) = 1$$
        This signifies that the probability of $X$ being less than or equal to any value tending towards positive infinity (i.e., any possible value $X$ can take) is one.

*   **Right-continuous:** The CDF is right-continuous. For any $x$, $F_X(x) = \lim_{h \to 0^+} F_X(x+h)$. (This is a technical property, often implied by the integral definition).

*   **Probability of an Interval:** The CDF can be used to calculate the probability that $X$ falls within an interval $[a, b]$.
    $$P(a < X \le b) = F_X(b) - F_X(a)$$
    **Important Note:** For *continuous* random variables, $P(X=c) = 0$ for any specific value $c$. Therefore, $P(a < X \le b) = P(a \le X \le b) = P(a < X < b) = P(a \le X < b)$. This means the CDF formula $F_X(b) - F_X(a)$ works for all these interval types.

---

### 5. Calculating the CDF for Common Continuous Distributions

**Example 1: Uniform Distribution**

Let $X$ be a continuous random variable uniformly distributed on the interval $[a, b]$.
The PDF is given by:
$$f_X(x) = \begin{cases} \frac{1}{b-a} & \text{if } a \le x \le b \\ 0 & \text{otherwise} \end{cases}$$

To find the CDF, $F_X(x)$:

*   **Case 1: $x < a$**
    $$F_X(x) = \int_{-\infty}^{x} 0 \, dt = 0$$

*   **Case 2: $a \le x \le b$**
    $$F_X(x) = \int_{-\infty}^{a} 0 \, dt + \int_{a}^{x} \frac{1}{b-a} \, dt = 0 + \left[ \frac{t}{b-a} \right]_a^x = \frac{x}{b-a} - \frac{a}{b-a} = \frac{x-a}{b-a}$$

*   **Case 3: $x > b$**
    $$F_X(x) = \int_{-\infty}^{a} 0 \, dt + \int_{a}^{b} \frac{1}{b-a} \, dt + \int_{b}^{x} 0 \, dt = 0 + \left[ \frac{t}{b-a} \right]_a^b + 0 = \frac{b}{b-a} - \frac{a}{b-a} = \frac{b-a}{b-a} = 1$$

Therefore, the CDF for a Uniform(a, b) distribution is:
$$F_X(x) = \begin{cases} 0 & \text{if } x < a \\ \frac{x-a}{b-a} & \text{if } a \le x \le b \\ 1 & \text{if } x > b \end{cases}$$

---

**Example 2: Exponential Distribution**

Let $X$ be a continuous random variable exponentially distributed with rate parameter $\lambda > 0$.
The PDF is given by:
$$f_X(x) = \begin{cases} \lambda e^{-\lambda x} & \text{if } x \ge 0 \\ 0 & \text{if } x < 0 \end{cases}$$

To find the CDF, $F_X(x)$:

*   **Case 1: $x < 0$**
    $$F_X(x) = \int_{-\infty}^{x} 0 \, dt = 0$$

*   **Case 2: $x \ge 0$**
    $$F_X(x) = \int_{-\infty}^{0} 0 \, dt + \int_{0}^{x} \lambda e^{-\lambda t} \, dt = 0 + \left[ -e^{-\lambda t} \right]_0^x = (-e^{-\lambda x}) - (-e^{-\lambda \cdot 0}) = -e^{-\lambda x} + e^0 = 1 - e^{-\lambda x}$$

Therefore, the CDF for an Exponential($\lambda$) distribution is:
$$F_X(x) = \begin{cases} 0 & \text{if } x < 0 \\ 1 - e^{-\lambda x} & \text{if } x \ge 0 \end{cases}$$

---

**Example 3: Standard Normal Distribution (Z-distribution)**

Let $Z$ be a standard normal random variable with mean $\mu=0$ and standard deviation $\sigma=1$.
The PDF is given by:
$$f_Z(z) = \frac{1}{\sqrt{2\pi}} e^{-z^2/2}$$

The CDF, denoted by $\Phi(z)$, is:
$$\Phi(z) = P(Z \le z) = \int_{-\infty}^{z} \frac{1}{\sqrt{2\pi}} e^{-t^2/2} \, dt$$

**Important Point:** The integral for the standard normal CDF does not have a simple closed-form analytical solution. It is usually computed using:
*   **Statistical tables:** Standard normal (Z-tables) are widely available.
*   **Software and calculators:** Statistical software (like R, Python) and advanced calculators can compute these values.

---

### 6. Using the CDF to Calculate Probabilities

**Relationship between CDF and PDF:**

*   **CDF from PDF:** $F_X(x) = \int_{-\infty}^{x} f_X(t) \, dt$
*   **PDF from CDF:** If $F_X(x)$ is differentiable, then $f_X(x) = \frac{d}{dx} F_X(x)$. This means the PDF is the derivative of the CDF.

**Calculating Interval Probabilities:**

As mentioned in the properties, the probability of $X$ falling in an interval $[a, b]$ is:
$$P(a \le X \le b) = F_X(b) - F_X(a)$$

**Example: Using the Exponential CDF**

Suppose the time until a certain event occurs follows an exponential distribution with a rate parameter $\lambda = 0.5$ (per hour). The CDF is $F_X(x) = 1 - e^{-0.5x}$ for $x \ge 0$.

*   **What is the probability that the event occurs within the first 2 hours?**
    We need to find $P(X \le 2)$.
    $$P(X \le 2) = F_X(2) = 1 - e^{-0.5 \times 2} = 1 - e^{-1} \approx 1 - 0.3679 = 0.6321$$

*   **What is the probability that the event occurs between 1 and 3 hours?**
    We need to find $P(1 \le X \le 3)$.
    $$P(1 \le X \le 3) = F_X(3) - F_X(1)$$
    $$F_X(3) = 1 - e^{-0.5 \times 3} = 1 - e^{-1.5} \approx 1 - 0.2231 = 0.7769$$
    $$F_X(1) = 1 - e^{-0.5 \times 1} = 1 - e^{-0.5} \approx 1 - 0.6065 = 0.3935$$
    $$P(1 \le X \le 3) = 0.7769 - 0.3935 = 0.3834$$

---

### 7. Inverse CDF (Quantile Function)

The inverse CDF, also known as the **quantile function** or **percent-point function (PPF)**, denoted by $F_X^{-1}(p)$, gives the value $x$ such that $F_X(x) = p$, where $p$ is a probability between 0 and 1.

$$F_X^{-1}(p) = x \quad \text{if and only if} \quad F_X(x) = p$$

**Purpose of the Inverse CDF:**

*   **Finding percentiles:** If we want to find the value below which a certain percentage of the data falls, we use the inverse CDF. For example, the 90th percentile is $F_X^{-1}(0.90)$.
*   **Generating random numbers:** The inverse CDF is crucial for generating random numbers from a specific distribution using a uniform random number generator. This technique is called the inverse transform sampling method.

**Example: Using the Inverse CDF of the Exponential Distribution**

For the exponential distribution with CDF $F_X(x) = 1 - e^{-\lambda x}$ ($x \ge 0$), let's find the inverse CDF.
Set $F_X(x) = p$:
$$p = 1 - e^{-\lambda x}$$
Rearrange to solve for $x$:
$$e^{-\lambda x} = 1 - p$$
Take the natural logarithm of both sides:
$$-\lambda x = \ln(1 - p)$$
$$x = -\frac{1}{\lambda} \ln(1 - p)$$

So, the inverse CDF for the Exponential($\lambda$) distribution is $F_X^{-1}(p) = -\frac{1}{\lambda} \ln(1 - p)$.

*   **Find the median of the exponential distribution:** The median is the value $x$ such that $P(X \le x) = 0.5$. This is $F_X^{-1}(0.5)$.
    If $\lambda = 0.5$:
    $$F_X^{-1}(0.5) = -\frac{1}{0.5} \ln(1 - 0.5) = -2 \ln(0.5) = -2 \ln(\frac{1}{2}) = -2 (-\ln 2) = 2 \ln 2 \approx 2 \times 0.6931 = 1.3862$$

*   **Find the value $x$ such that $P(X \le x) = 0.9$:**
    If $\lambda = 0.5$:
    $$F_X^{-1}(0.9) = -\frac{1}{0.5} \ln(1 - 0.9) = -2 \ln(0.1) = -2 \ln(\frac{1}{10}) = -2 (-\ln 10) = 2 \ln 10 \approx 2 \times 2.3026 = 4.6052$$

---

### 8. Important Points to Remember

*   The CDF $F_X(x) = P(X \le x)$.
*   For continuous random variables, the CDF is always a continuous and non-decreasing function.
*   $\lim_{x \to -\infty} F_X(x) = 0$ and $\lim_{x \to \infty} F_X(x) = 1$.
*   The probability of $X$ falling in an interval $[a, b]$ is $P(a \le X \le b) = F_X(b) - F_X(a)$.
*   The PDF $f_X(x)$ is the derivative of the CDF $F_X(x)$.
*   The CDF is the integral of the PDF $f_X(x)$.
*   The inverse CDF (quantile function) $F_X^{-1}(p)$ gives the value $x$ such that $F_X(x) = p$. It's used for percentiles and random number generation.
*   For standard normal distribution, the CDF values are typically found using tables or software.

---

### 9. Practice Questions

1.  **Uniform Distribution:** A continuous random variable $X$ is uniformly distributed on the interval $[2, 5]$.
    a.  Write down the PDF of $X$.
    b.  Calculate the CDF of $X$.
    c.  Find the probability $P(3 \le X \le 4.5)$.
    d.  Find the median of $X$.

2.  **Exponential Distribution:** The lifetime of a component (in hours) follows an exponential distribution with $\lambda = 0.1$ per hour.
    a.  Write down the CDF of the lifetime $T$.
    b.  Calculate the probability that a component lasts less than 10 hours.
    c.  Calculate the probability that a component lasts more than 20 hours.
    d.  Find the value of $t$ such that $P(T \le t) = 0.75$.

3.  **Relationship between PDF and CDF:** Given the CDF of a continuous random variable $Y$ as $F_Y(y) = \frac{1}{1 + e^{-y}}$ for all real $y$.
    a.  Verify that $F_Y(y)$ is a valid CDF.
    b.  Find the PDF of $Y$.
    c.  Calculate $P(Y \le 0)$.
    d.  Calculate $P(Y > 1)$.

4.  **Inverse CDF:** The CDF of a continuous random variable $V$ is $F_V(v) = v^2$ for $0 \le v \le 1$.
    a.  Find the inverse CDF, $F_V^{-1}(p)$.
    b.  Use the inverse CDF to find the value $v$ such that $P(V \le v) = 0.64$.

---

### 10. Answers to Practice Questions

1.  **Uniform Distribution on [2, 5]:**
    a.  $f_X(x) = \begin{cases} \frac{1}{5-2} = \frac{1}{3} & \text{if } 2 \le x \le 5 \\ 0 & \text{otherwise} \end{cases}$
    b.  $F_X(x) = \begin{cases} 0 & \text{if } x < 2 \\ \frac{x-2}{3} & \text{if } 2 \le x \le 5 \\ 1 & \text{if } x > 5 \end{cases}$
    c.  $P(3 \le X \le 4.5) = F_X(4.5) - F_X(3) = \frac{4.5-2}{3} - \frac{3-2}{3} = \frac{2.5}{3} - \frac{1}{3} = \frac{1.5}{3} = 0.5$
    d.  The median is the value $x$ where $F_X(x) = 0.5$. $\frac{x-2}{3} = 0.5 \implies x-2 = 1.5 \implies x = 3.5$. The median is 3.5.

2.  **Exponential Distribution with $\lambda = 0.1$:**
    a.  $F_T(t) = \begin{cases} 0 & \text{if } t < 0 \\ 1 - e^{-0.1t} & \text{if } t \ge 0 \end{cases}$
    b.  $P(T \le 10) = F_T(10) = 1 - e^{-0.1 \times 10} = 1 - e^{-1} \approx 1 - 0.3679 = 0.6321$
    c.  $P(T > 20) = 1 - P(T \le 20) = 1 - F_T(20) = 1 - (1 - e^{-0.1 \times 20}) = e^{-2} \approx 0.1353$
    d.  $F_T^{-1}(0.75) = -\frac{1}{0.1} \ln(1 - 0.75) = -10 \ln(0.25) = -10 \ln(\frac{1}{4}) = -10 (-\ln 4) = 10 \ln 4 \approx 10 \times 1.3863 = 13.863$ hours.

3.  **Relationship between PDF and CDF:**
    a.  Properties check:
        *   $F_Y(y) = \frac{1}{1 + e^{-y}}$ is the logistic function.
        *   $\lim_{y \to -\infty} F_Y(y) = \frac{1}{1 + \infty} = 0$.
        *   $\lim_{y \to \infty} F_Y(y) = \frac{1}{1 + 0} = 1$.
        *   The derivative $F_Y'(y) = \frac{e^{-y}}{(1+e^{-y})^2}$, which is always non-negative, so the function is non-decreasing. Thus, it's a valid CDF.
    b.  The PDF is the derivative of the CDF:
        $f_Y(y) = \frac{d}{dy} \left( \frac{1}{1 + e^{-y}} \right) = \frac{-(1+e^{-y})'(1+e^{-y})^{-2}}{(1+e^{-y})^2} = \frac{-(-e^{-y})}{(1+e^{-y})^2} = \frac{e^{-y}}{(1+e^{-y})^2}$.
        This is the PDF of the standard logistic distribution.
    c.  $P(Y \le 0) = F_Y(0) = \frac{1}{1 + e^{-0}} = \frac{1}{1 + 1} = \frac{1}{2} = 0.5$.
    d.  $P(Y > 1) = 1 - P(Y \le 1) = 1 - F_Y(1) = 1 - \frac{1}{1 + e^{-1}} = 1 - \frac{1}{1 + 1/e} = 1 - \frac{e}{e+1} = \frac{e+1-e}{e+1} = \frac{1}{e+1} \approx \frac{1}{2.7183 + 1} = \frac{1}{3.7183} \approx 0.2689$.

4.  **Inverse CDF:**
    a.  To find the inverse CDF, set $F_V(v) = p$: $v^2 = p$. For $0 \le v \le 1$, we take the positive square root: $v = \sqrt{p}$. So, $F_V^{-1}(p) = \sqrt{p}$ for $0 \le p \le 1$.
    b.  We need $v$ such that $P(V \le v) = 0.64$. This means $F_V(v) = 0.64$. Using the inverse CDF: $v = F_V^{-1}(0.64) = \sqrt{0.64} = 0.8$.

---
