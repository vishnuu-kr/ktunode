---
title: "Cumulative distribution function"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35d9e"
status: "completed"
scrapedAt: "2026-05-23T16:16:53.530Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 2: Continuous Random Variables and Their Probability Distributions

### Topic: Cumulative Distribution Function (CDF)

This module introduces the concept of continuous random variables, which are variables that can take any value within a given range. We will explore their probability distributions, focusing on the Cumulative Distribution Function (CDF), a fundamental tool for understanding the behavior of these variables.

---

### 1. Understanding Continuous Random Variables (Relates to CO2)

**Definition:** A **continuous random variable (CRV)** is a random variable that can take any value within a specified interval or set of intervals. Unlike discrete random variables, which have a countable number of possible outcomes, CRVs have an uncountable number of possible outcomes.

**Examples in Electrical Science:**

*   **Voltage or Current in a Circuit:** The voltage across a resistor or the current flowing through a wire can take any value within a range, not just specific discrete values.
*   **Time to Failure of a Component:** The lifespan of an electronic component (e.g., a resistor, capacitor) can be any positive real number.
*   **Signal Amplitude:** The amplitude of an analog signal can vary continuously.
*   **Noise Level:** Random noise in a communication system can be modeled as a continuous random variable.

---

### 2. Key Concepts and Definitions

#### 2.1 Probability Density Function (PDF)

While we are focusing on the CDF, it's crucial to understand its relationship with the Probability Density Function (PDF) for continuous random variables.

**Definition:** For a continuous random variable $X$, the **Probability Density Function (PDF)**, denoted by $f(x)$, describes the relative likelihood for the random variable to take on a given value. For a continuous random variable, the probability of it taking on any single specific value is zero. Instead, we talk about the probability of it falling within an interval.

**Properties of a PDF:**

1.  $f(x) \ge 0$ for all $x$. (The density is always non-negative).
2.  $\int_{-\infty}^{\infty} f(x) dx = 1$. (The total area under the PDF curve must be 1, representing the total probability).

**Relationship to CDF:** The PDF is the derivative of the CDF, and the CDF is the integral of the PDF.

**Reference (Devore J. L., 9th ed., Chapter 3):** Devore extensively covers the PDF as the foundational concept for continuous random variables before introducing the CDF. He emphasizes that $f(x)$ is not a probability but a density, and probabilities are obtained by integrating $f(x)$ over intervals.

---

#### 2.2 Cumulative Distribution Function (CDF)

The Cumulative Distribution Function (CDF) is a more direct way to calculate probabilities for continuous random variables.

**Definition:** The **Cumulative Distribution Function (CDF)** of a random variable $X$, denoted by $F(x)$, gives the probability that $X$ will take a value less than or equal to $x$. Mathematically, for a continuous random variable $X$:

$F(x) = P(X \le x)$

**Relationship to PDF:** If $F(x)$ is the CDF of a continuous random variable $X$ with PDF $f(x)$, then:

*   $F(x) = \int_{-\infty}^{x} f(t) dt$  (This is how we calculate the CDF from the PDF)
*   $f(x) = \frac{d}{dx} F(x)$ (This is how we obtain the PDF from the CDF by differentiation)

**Example (using a hypothetical PDF):**
Suppose the PDF of a CRV $X$ is $f(x) = 2x$ for $0 \le x \le 1$, and $f(x) = 0$ otherwise.
To find $F(x)$:
*   For $x < 0$: $F(x) = \int_{-\infty}^{x} 0 dt = 0$.
*   For $0 \le x \le 1$: $F(x) = \int_{-\infty}^{x} f(t) dt = \int_{-\infty}^{0} 0 dt + \int_{0}^{x} 2t dt = 0 + [t^2]_0^x = x^2$.
*   For $x > 1$: $F(x) = \int_{-\infty}^{x} f(t) dt = \int_{-\infty}^{0} 0 dt + \int_{0}^{1} 2t dt + \int_{1}^{x} 0 dt = 0 + [t^2]_0^1 + 0 = 1^2 = 1$.

So, the CDF is:
$F(x) = \begin{cases} 0 & \text{if } x < 0 \\ x^2 & \text{if } 0 \le x \le 1 \\ 1 & \text{if } x > 1 \end{cases}$

**Reference (Veerarajan T., 3rd ed., Chapter 6):** Veerarajan provides a thorough explanation of the CDF for both discrete and continuous random variables, emphasizing its role in calculating cumulative probabilities and its direct relation to the PDF through integration and differentiation.

---

#### 2.3 Properties of the CDF

The CDF, $F(x)$, for any random variable (discrete or continuous) has several important properties:

1.  **Non-decreasing:** $F(x_1) \le F(x_2)$ whenever $x_1 \le x_2$.
    *   *Explanation:* As $x$ increases, the probability of $X$ being less than or equal to $x$ can only increase or stay the same.
2.  **Limits:**
    *   $\lim_{x \to -\infty} F(x) = 0$.
        *   *Explanation:* The probability of $X$ being less than or equal to a very small (negative infinity) value is zero.
    *   $\lim_{x \to \infty} F(x) = 1$.
        *   *Explanation:* The probability of $X$ being less than or equal to a very large (positive infinity) value is one.
3.  **Range:** $0 \le F(x) \le 1$ for all $x$.
    *   *Explanation:* Since $F(x)$ represents a probability, it must be between 0 and 1, inclusive.
4.  **Continuity for CRVs:** For a continuous random variable, the CDF $F(x)$ is a continuous function. This is a direct consequence of the fact that $P(X=x) = 0$ for any specific $x$ for a CRV.

**Reference (Papoulis & Pillai, 4th ed., Chapter 4):** Papoulis and Pillai discuss the CDF as a fundamental characteristic of a random variable, detailing its properties that are essential for manipulating and understanding probability distributions.

---

### 3. Calculating Probabilities Using the CDF

The primary utility of the CDF is its ability to calculate probabilities for intervals of $X$.

**Probability of an Interval:** For a continuous random variable $X$ with CDF $F(x)$:

$P(a < X \le b) = F(b) - F(a)$

*   *Explanation:* This property arises directly from the definition of the CDF. $F(b) = P(X \le b)$ and $F(a) = P(X \le a)$. Subtracting the latter from the former gives us the probability that $X$ is greater than $a$ and less than or equal to $b$.

**Important Note for Continuous Random Variables:** For a continuous random variable, $P(X = x) = 0$. Therefore:

$P(a \le X \le b) = P(a < X \le b) = P(a \le X < b) = P(a < X < b) = F(b) - F(a)$

This is a key distinction from discrete random variables where the inclusion or exclusion of endpoints matters.

**Examples:**

Let's use the CDF from the previous example:
$F(x) = \begin{cases} 0 & \text{if } x < 0 \\ x^2 & \text{if } 0 \le x \le 1 \\ 1 & \text{if } x > 1 \end{cases}$

*   **Find $P(0.2 \le X \le 0.7)$:**
    $P(0.2 \le X \le 0.7) = F(0.7) - F(0.2)$
    Since $0.2$ and $0.7$ are within $[0, 1]$:
    $P(0.2 \le X \le 0.7) = (0.7)^2 - (0.2)^2 = 0.49 - 0.04 = 0.45$.

*   **Find $P(X \le 0.5)$:**
    $P(X \le 0.5) = F(0.5)$
    Since $0.5$ is within $[0, 1]$:
    $P(X \le 0.5) = (0.5)^2 = 0.25$.

*   **Find $P(X > 0.8)$:**
    $P(X > 0.8) = 1 - P(X \le 0.8) = 1 - F(0.8)$
    Since $0.8$ is within $[0, 1]$:
    $P(X > 0.8) = 1 - (0.8)^2 = 1 - 0.64 = 0.36$.

**Reference (Ross S. M., 6th ed., Chapter 4):** Ross focuses on how the CDF simplifies probability calculations for intervals, making it a more user-friendly tool for practical applications compared to directly integrating the PDF.

---

### 4. Cumulative Distribution Functions in Electrical Science Applications

The CDF is fundamental in analyzing and modeling various phenomena in electrical science.

*   **Reliability Engineering:** The CDF of the time to failure of a component represents the probability that the component will fail by a certain time. This is crucial for predicting system lifespan and maintenance schedules.
    *   *Example:* If $T$ is the time to failure of a transistor and its CDF is $F_T(t) = 1 - e^{-\lambda t}$ (for exponential distribution), then $F_T(1000) = 1 - e^{-1000\lambda}$ gives the probability that the transistor will fail within 1000 hours of operation.
*   **Signal Processing:** Understanding the distribution of signal amplitudes or noise levels often involves the CDF. For instance, in determining the probability of a signal exceeding a certain threshold.
*   **Communication Systems:** The CDF can be used to determine the probability of a received signal being below a required minimum level, which impacts data transmission quality.
*   **Quality Control:** In manufacturing electronic components, the CDF can describe the distribution of measured parameters (e.g., resistance, capacitance) and help set acceptable quality limits.

**Reference (Palaniammal S., 3rd ed., Chapter 5):** Palaniammal discusses applications of probability distributions, including the CDF, in various engineering fields, highlighting its role in reliability and quality assessment.

---

### 5. Important Points to Remember

*   **CDF vs. PDF:** The PDF, $f(x)$, describes the *density* of probability, while the CDF, $F(x)$, describes the *cumulative* probability up to a certain value. $P(X=x)=0$ for continuous random variables.
*   **Integral vs. Derivative:** $F(x) = \int_{-\infty}^{x} f(t) dt$ and $f(x) = \frac{d}{dx} F(x)$.
*   **Probability of Intervals:** $P(a < X \le b) = F(b) - F(a)$. For CRVs, endpoint inclusion/exclusion doesn't change the probability.
*   **Properties of CDF:** Non-decreasing, limits at $-\infty$ and $\infty$ are 0 and 1 respectively, and $0 \le F(x) \le 1$. For CRVs, $F(x)$ is continuous.
*   **"Less than or equal to" is Key:** The CDF directly answers "What is the probability that the random variable is less than or equal to $x$?"

---

### 6. Practice Questions and Exercises

**Question 1:**
Let $X$ be a continuous random variable with the CDF given by:
$F(x) = \begin{cases} 0 & \text{if } x < 0 \\ \frac{x}{4} & \text{if } 0 \le x \le 4 \\ 1 & \text{if } x > 4 \end{cases}$

**(a)** Verify that $F(x)$ is a valid CDF.
**(b)** Find the probability density function (PDF), $f(x)$, for $X$.
**(c)** Calculate $P(1 \le X \le 3)$.
**(d)** Calculate $P(X > 2)$.

**Solution 1:**
**(a)**
1.  **Non-decreasing:** For $x_1 \le x_2$:
    *   If $x_1, x_2 < 0$, $F(x_1)=F(x_2)=0$.
    *   If $x_1, x_2 \ge 0$ and $x_1, x_2 \le 4$, then $F(x_1) = x_1/4 \le x_2/4 = F(x_2)$.
    *   If $x_1 < 0$ and $0 \le x_2 \le 4$, $F(x_1)=0 \le x_2/4 = F(x_2)$.
    *   If $0 \le x_1 \le 4$ and $x_2 > 4$, $F(x_1)=x_1/4 \le 1 = F(x_2)$.
    *   If $x_1, x_2 > 4$, $F(x_1)=F(x_2)=1$.
    So, $F(x)$ is non-decreasing.
2.  **Limits:**
    *   $\lim_{x \to -\infty} F(x) = \lim_{x \to -\infty} 0 = 0$.
    *   $\lim_{x \to \infty} F(x) = \lim_{x \to \infty} 1 = 1$.
3.  **Range:** For $0 \le x \le 4$, $0 \le x/4 \le 1$. For other ranges, $F(x)$ is 0 or 1. So, $0 \le F(x) \le 1$.
Therefore, $F(x)$ is a valid CDF.

**(b)**
The PDF is the derivative of the CDF:
$f(x) = \frac{d}{dx} F(x)$
*   For $x < 0$, $f(x) = \frac{d}{dx}(0) = 0$.
*   For $0 < x < 4$, $f(x) = \frac{d}{dx}(\frac{x}{4}) = \frac{1}{4}$.
*   For $x > 4$, $f(x) = \frac{d}{dx}(1) = 0$.
So, $f(x) = \begin{cases} \frac{1}{4} & \text{if } 0 < x < 4 \\ 0 & \text{otherwise} \end{cases}$. (This is a Uniform distribution on $[0, 4]$).

**(c)**
$P(1 \le X \le 3) = F(3) - F(1)$
Since $1$ and $3$ are between $0$ and $4$:
$P(1 \le X \le 3) = \frac{3}{4} - \frac{1}{4} = \frac{2}{4} = \frac{1}{2}$.

**(d)**
$P(X > 2) = 1 - P(X \le 2) = 1 - F(2)$
Since $2$ is between $0$ and $4$:
$P(X > 2) = 1 - \frac{2}{4} = 1 - \frac{1}{2} = \frac{1}{2}$.

---

**Question 2:**
The time $T$ (in hours) until a certain electronic component fails is a continuous random variable with CDF $F_T(t) = 1 - e^{-0.005t}$ for $t \ge 0$.

**(a)** What is the probability that the component fails within the first 100 hours?
**(b)** What is the probability that the component survives beyond 250 hours?
**(c)** What is the PDF of the failure time $T$?

**Solution 2:**
**(a)**
The probability that the component fails within the first 100 hours is $P(T \le 100) = F_T(100)$.
$F_T(100) = 1 - e^{-0.005 \times 100} = 1 - e^{-0.5} \approx 1 - 0.6065 = 0.3935$.

**(b)**
The probability that the component survives beyond 250 hours is $P(T > 250)$.
$P(T > 250) = 1 - P(T \le 250) = 1 - F_T(250)$.
$P(T > 250) = 1 - (1 - e^{-0.005 \times 250}) = e^{-0.005 \times 250} = e^{-1.25} \approx 0.2865$.

**(c)**
The PDF is the derivative of the CDF: $f_T(t) = \frac{d}{dt} F_T(t)$.
$f_T(t) = \frac{d}{dt} (1 - e^{-0.005t}) = 0 - (-0.005)e^{-0.005t} = 0.005e^{-0.005t}$ for $t \ge 0$.
This is the PDF of an exponential distribution with rate parameter $\lambda = 0.005$.

---

### 7. Alignment with Course Outcomes

*   **CO2:** This entire topic directly addresses the understanding of continuous random variables and their properties. The CDF is a core concept for describing these variables and applying them to random phenomena. The ability to calculate probabilities using the CDF (as demonstrated in practice questions) directly supports applying these concepts.

---
