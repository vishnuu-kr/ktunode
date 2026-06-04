---
title: "Random variables"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 1: Random variables"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba81091b"
status: "completed"
scrapedAt: "2026-05-20T18:45:52.262Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Random Variables

This module introduces the fundamental concept of random variables, which are essential for modeling uncertainty and randomness in physical phenomena.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **LO1: Understand the concept of a random variable and distinguish between discrete and continuous random variables.**
*   **LO2: Define and calculate the probability mass function (PMF) for a discrete random variable.**
*   **LO3: Define and calculate the probability density function (PDF) for a continuous random variable.**
*   **LO4: Understand and compute the cumulative distribution function (CDF) for both discrete and continuous random variables.**
*   **LO5: Calculate and interpret the expected value (mean) of a random variable.**
*   **LO6: Calculate and interpret the variance and standard deviation of a random variable.**

---

### 1. Introduction to Random Variables

#### 1.1 What is a Random Variable?

A **random variable** is a variable whose value is a numerical outcome of a random phenomenon. It's a function that assigns a real number to each outcome in the sample space of a random experiment.

**Key Idea:** We use random variables to quantify outcomes that are uncertain or random.

**Example:**
*   **Random Experiment:** Flipping a coin twice.
*   **Sample Space (S):** {HH, HT, TH, TT}
*   **Random Variable X:** Number of heads in the outcome.
    *   X(HH) = 2
    *   X(HT) = 1
    *   X(TH) = 1
    *   X(TT) = 0

#### 1.2 Types of Random Variables

Random variables are broadly classified into two types based on the nature of their possible values:

**1.2.1 Discrete Random Variables**

A discrete random variable is a variable that can only take a finite number of values or a countably infinite number of values. The possible values are typically integers and can be listed.

*   **Characteristics:**
    *   Values are often counts.
    *   There are "gaps" between possible values.

*   **Examples:**
    *   The number of radioactive decays in a given time interval.
    *   The number of defective items in a sample from a production line.
    *   The result of rolling a die (1, 2, 3, 4, 5, 6).
    *   The number of successes in a fixed number of Bernoulli trials.

**1.2.2 Continuous Random Variables**

A continuous random variable is a variable that can take any value within a given range or interval. The possible values are uncountably infinite.

*   **Characteristics:**
    *   Values are typically measurements.
    *   There are no "gaps" between possible values; any value in an interval is possible.

*   **Examples:**
    *   The height of a randomly selected person.
    *   The temperature of a room.
    *   The time it takes for a light bulb to burn out.
    *   The velocity of a particle.

---

### 2. Probability Distributions for Random Variables

The probability distribution of a random variable describes the likelihood of each of its possible values.

#### 2.1 Probability Mass Function (PMF) for Discrete Random Variables (LO2)

The **Probability Mass Function (PMF)**, denoted by $P(X=x)$ or $f_X(x)$, gives the probability that a discrete random variable $X$ takes on a specific value $x$.

*   **Properties of a PMF:**
    1.  $0 \le P(X=x) \le 1$ for all possible values $x$.
    2.  $\sum_{x} P(X=x) = 1$, where the sum is over all possible values of $X$.

**Example:** Consider the random variable $X$ representing the number of heads in two coin flips.
*   Possible values of $X$: {0, 1, 2}
*   Outcomes:
    *   TT (0 heads): $P(X=0) = 1/4$
    *   HT, TH (1 head): $P(X=1) = 2/4 = 1/2$
    *   HH (2 heads): $P(X=2) = 1/4$

*   **PMF:**
    *   $P(X=0) = 1/4$
    *   $P(X=1) = 1/2$
    *   $P(X=2) = 1/4$
    *   $P(X=x) = 0$ for any other value of $x$.

*   **Check Properties:**
    1.  All probabilities are between 0 and 1.
    2.  $1/4 + 1/2 + 1/4 = 1$.

#### 2.2 Probability Density Function (PDF) for Continuous Random Variables (LO3)

For a continuous random variable $X$, it's not meaningful to talk about the probability of $X$ taking a *specific* value, i.e., $P(X=x) = 0$ for any specific $x$. Instead, we use a **Probability Density Function (PDF)**, denoted by $f_X(x)$.

The PDF $f_X(x)$ describes the relative likelihood for a continuous random variable to take on a given value. The probability of $X$ falling within an interval $[a, b]$ is given by the integral of the PDF over that interval.

*   **Properties of a PDF:**
    1.  $f_X(x) \ge 0$ for all $x$.
    2.  $\int_{-\infty}^{\infty} f_X(x) dx = 1$, where the integral is over all possible values of $X$.
    3.  The probability of $X$ being in an interval $[a, b]$ is $P(a \le X \le b) = \int_{a}^{b} f_X(x) dx$.

**Important Note:** The value of $f_X(x)$ itself is not a probability. It's a density. Probability is obtained by integrating the PDF.

**Example:** Consider a continuous random variable $X$ representing the time (in hours) until a light bulb burns out, with a PDF given by:
$f_X(x) = \begin{cases} \frac{1}{1000} e^{-x/1000} & \text{for } x \ge 0 \\ 0 & \text{for } x < 0 \end{cases}$

*   **Check Properties:**
    1.  $f_X(x) \ge 0$ for $x \ge 0$.
    2.  $\int_{-\infty}^{\infty} f_X(x) dx = \int_{0}^{\infty} \frac{1}{1000} e^{-x/1000} dx$. Let $u = -x/1000$, then $du = -1/1000 dx$.
        $\int_{0}^{-\infty} -e^u du = \int_{-\infty}^{0} e^u du = [e^u]_{-\infty}^{0} = e^0 - \lim_{u \to -\infty} e^u = 1 - 0 = 1$.
        The PDF is valid.

*   **Probability for an interval:**
    What is the probability that the light bulb burns out between 500 and 1000 hours?
    $P(500 \le X \le 1000) = \int_{500}^{1000} \frac{1}{1000} e^{-x/1000} dx$
    $= [-e^{-x/1000}]_{500}^{1000}$
    $= -e^{-1000/1000} - (-e^{-500/1000})$
    $= -e^{-1} + e^{-0.5}$
    $\approx -0.3679 + 0.6065 \approx 0.2386$

---

### 3. Cumulative Distribution Function (CDF) (LO4)

The **Cumulative Distribution Function (CDF)**, denoted by $F_X(x)$, gives the probability that a random variable $X$ takes on a value less than or equal to $x$. It's defined for both discrete and continuous random variables.

*   **Definition:** $F_X(x) = P(X \le x)$

*   **Properties of a CDF:**
    1.  $0 \le F_X(x) \le 1$ for all $x$.
    2.  $F_X(x)$ is a non-decreasing function.
    3.  $\lim_{x \to -\infty} F_X(x) = 0$.
    4.  $\lim_{x \to \infty} F_X(x) = 1$.
    5.  For any $a < b$, $P(a < X \le b) = F_X(b) - F_X(a)$. (For continuous RVs, this is also $P(a \le X \le b)$ and $P(a < X < b)$).

#### 3.1 CDF for Discrete Random Variables

For a discrete random variable $X$ with PMF $P(X=k)$, the CDF is the sum of probabilities for all values less than or equal to $x$:

$F_X(x) = P(X \le x) = \sum_{k \le x} P(X=k)$

**Example (Two Coin Flips):**
*   PMF: $P(X=0) = 1/4$, $P(X=1) = 1/2$, $P(X=2) = 1/4$.

*   **CDF:**
    *   $F_X(x) = 0$ for $x < 0$
    *   $F_X(x) = P(X \le 0) = P(X=0) = 1/4$ for $0 \le x < 1$
    *   $F_X(x) = P(X \le 1) = P(X=0) + P(X=1) = 1/4 + 1/2 = 3/4$ for $1 \le x < 2$
    *   $F_X(x) = P(X \le 2) = P(X=0) + P(X=1) + P(X=2) = 1/4 + 1/2 + 1/4 = 1$ for $x \ge 2$

The CDF for a discrete variable is a step function.

#### 3.2 CDF for Continuous Random Variables

For a continuous random variable $X$ with PDF $f_X(x)$, the CDF is the integral of the PDF from $-\infty$ up to $x$:

$F_X(x) = P(X \le x) = \int_{-\infty}^{x} f_X(t) dt$

**Example (Light Bulb Example):**
$f_X(x) = \begin{cases} \frac{1}{1000} e^{-x/1000} & \text{for } x \ge 0 \\ 0 & \text{for } x < 0 \end{cases}$

*   **CDF:**
    *   For $x < 0$: $F_X(x) = \int_{-\infty}^{x} 0 dt = 0$.
    *   For $x \ge 0$: $F_X(x) = \int_{-\infty}^{x} f_X(t) dt = \int_{0}^{x} \frac{1}{1000} e^{-t/1000} dt$
        $= [-e^{-t/1000}]_{0}^{x}$
        $= -e^{-x/1000} - (-e^{-0/1000})$
        $= -e^{-x/1000} + 1$
        $= 1 - e^{-x/1000}$

*   **CDF:**
    $F_X(x) = \begin{cases} 0 & \text{for } x < 0 \\ 1 - e^{-x/1000} & \text{for } x \ge 0 \end{cases}$

*   **Using CDF to find probability:**
    $P(500 \le X \le 1000) = F_X(1000) - F_X(500)$
    $= (1 - e^{-1000/1000}) - (1 - e^{-500/1000})$
    $= (1 - e^{-1}) - (1 - e^{-0.5})$
    $= e^{-0.5} - e^{-1} \approx 0.6065 - 0.3679 \approx 0.2386$. (Matches the PDF calculation).

---

### 4. Expected Value (Mean) (LO5)

The **Expected Value** of a random variable is its average value over many repetitions of the random experiment. It's often denoted by $E[X]$ or $\mu$.

#### 4.1 Expected Value for Discrete Random Variables

For a discrete random variable $X$ with PMF $P(X=x)$:

$E[X] = \sum_{x} x \cdot P(X=x)$

*   **Interpretation:** The weighted average of the possible values of $X$, where the weights are the probabilities of those values.

**Example (Two Coin Flips):**
*   PMF: $P(X=0) = 1/4$, $P(X=1) = 1/2$, $P(X=2) = 1/4$.
*   $E[X] = (0 \cdot 1/4) + (1 \cdot 1/2) + (2 \cdot 1/4)$
    $= 0 + 1/2 + 1/2 = 1$.
    On average, we expect to get 1 head in two coin flips.

#### 4.2 Expected Value for Continuous Random Variables

For a continuous random variable $X$ with PDF $f_X(x)$:

$E[X] = \int_{-\infty}^{\infty} x \cdot f_X(x) dx$

*   **Interpretation:** The integral of $x$ weighted by its probability density.

**Example (Light Bulb Example):**
$f_X(x) = \begin{cases} \frac{1}{1000} e^{-x/1000} & \text{for } x \ge 0 \\ 0 & \text{for } x < 0 \end{cases}$
*   $E[X] = \int_{0}^{\infty} x \cdot \frac{1}{1000} e^{-x/1000} dx$
    This integral requires integration by parts: $\int u dv = uv - \int v du$.
    Let $u = x$ and $dv = \frac{1}{1000} e^{-x/1000} dx$.
    Then $du = dx$ and $v = \int \frac{1}{1000} e^{-x/1000} dx = -e^{-x/1000}$.

    $E[X] = [-x e^{-x/1000}]_{0}^{\infty} - \int_{0}^{\infty} (-e^{-x/1000}) dx$
    The first term $[-x e^{-x/1000}]_{0}^{\infty}$:
    As $x \to \infty$, $x e^{-x/1000} \to 0$ (exponential decay dominates polynomial growth).
    At $x=0$, $-0 \cdot e^0 = 0$. So the term is $0 - 0 = 0$.

    $E[X] = 0 + \int_{0}^{\infty} e^{-x/1000} dx$
    $= [-1000 e^{-x/1000}]_{0}^{\infty}$
    $= (0) - (-1000 e^0) = 1000$.
    On average, the light bulb burns out after 1000 hours.

**Expected Value of a Function of a Random Variable:**
If $Y = g(X)$, then $E[Y] = E[g(X)]$ can be calculated as:
*   Discrete: $E[g(X)] = \sum_{x} g(x) P(X=x)$
*   Continuous: $E[g(X)] = \int_{-\infty}^{\infty} g(x) f_X(x) dx$

---

### 5. Variance and Standard Deviation (LO6)

The **Variance** measures the spread or dispersion of a random variable around its mean. The **Standard Deviation** is the square root of the variance and is in the same units as the random variable.

#### 5.1 Variance

*   **Definition:** The expected value of the squared difference between the random variable and its mean.
    $Var(X) = E[(X - \mu)^2]$, where $\mu = E[X]$.

*   **Computational Formula (often easier):**
    $Var(X) = E[X^2] - (E[X])^2$

    To use this, we need to calculate $E[X^2]$:
    *   Discrete: $E[X^2] = \sum_{x} x^2 \cdot P(X=x)$
    *   Continuous: $E[X^2] = \int_{-\infty}^{\infty} x^2 \cdot f_X(x) dx$

*   **Properties of Variance:**
    1.  $Var(X) \ge 0$.
    2.  $Var(c) = 0$ if $c$ is a constant.
    3.  $Var(aX) = a^2 Var(X)$ if $a$ is a constant.

**Example (Two Coin Flips):**
*   $E[X] = 1$.
*   $E[X^2] = (0^2 \cdot 1/4) + (1^2 \cdot 1/2) + (2^2 \cdot 1/4)$
    $= (0 \cdot 1/4) + (1 \cdot 1/2) + (4 \cdot 1/4)$
    $= 0 + 1/2 + 1 = 3/2 = 1.5$.
*   $Var(X) = E[X^2] - (E[X])^2 = 1.5 - (1)^2 = 1.5 - 1 = 0.5$.
    The variance is 0.5.

**Example (Light Bulb Example):**
*   $E[X] = 1000$.
*   $E[X^2] = \int_{0}^{\infty} x^2 \cdot \frac{1}{1000} e^{-x/1000} dx$.
    Using integration by parts twice (or knowing the gamma function integral):
    $E[X^2] = 2 \cdot (1000)^2 = 2,000,000$.
*   $Var(X) = E[X^2] - (E[X])^2 = 2,000,000 - (1000)^2$
    $= 2,000,000 - 1,000,000 = 1,000,000$.
    The variance is 1,000,000 (hours squared).

#### 5.2 Standard Deviation

*   **Definition:** The square root of the variance.
    $\sigma_X = \sqrt{Var(X)}$

*   **Interpretation:** A measure of the typical deviation of the random variable's values from the mean. It's in the same units as the random variable.

**Example (Two Coin Flips):**
*   $\sigma_X = \sqrt{Var(X)} = \sqrt{0.5} \approx 0.707$.
    The standard deviation of the number of heads is about 0.707.

**Example (Light Bulb Example):**
*   $\sigma_X = \sqrt{Var(X)} = \sqrt{1,000,000} = 1000$.
    The standard deviation of the burnout time is 1000 hours.

---

### Important Points to Remember:

*   **Random Variable:** A numerical outcome of a random experiment.
*   **Discrete vs. Continuous:** Based on whether the possible values are countable or form an interval.
*   **PMF (Discrete):** $P(X=x)$ sums to 1.
*   **PDF (Continuous):** $f_X(x)$ integrates to 1. Probability is the integral of the PDF.
*   **CDF:** $F_X(x) = P(X \le x)$, always non-decreasing from 0 to 1.
*   **Expected Value (Mean):** The average outcome ($E[X]$).
*   **Variance:** Measures spread around the mean ($Var(X) = E[(X-\mu)^2]$).
*   **Standard Deviation:** Square root of variance ($\sigma_X$), same units as $X$.
*   The distinction between PMF/PDF and CDF is crucial.
*   The interpretation of expected value and standard deviation in the context of a physical phenomenon is key.

---

### Practice Questions/Exercises:

**Question 1 (Discrete RV):**
A Geiger counter detects radioactive particles. In a 1-minute interval, the number of particles detected, $X$, can be modeled by the following PMF:
$P(X=0) = 0.1$
$P(X=1) = 0.3$
$P(X=2) = 0.4$
$P(X=3) = 0.2$

(a) Verify that this is a valid PMF.
(b) Calculate the CDF, $F_X(x)$, for this random variable.
(c) Calculate the expected number of particles detected in 1 minute, $E[X]$.
(d) Calculate the variance of the number of particles detected, $Var(X)$.
(e) Calculate the standard deviation, $\sigma_X$.

**Question 2 (Continuous RV):**
The velocity $V$ (in m/s) of a randomly chosen molecule in a gas at a certain temperature can be modeled by a Rayleigh distribution with PDF:
$f_V(v) = \begin{cases} \frac{v}{\sigma^2} e^{-v^2/(2\sigma^2)} & \text{for } v \ge 0 \\ 0 & \text{for } v < 0 \end{cases}$
where $\sigma$ is a parameter of the distribution. For a specific gas, $\sigma = 100$ m/s.

(a) Verify that $f_V(v)$ is a valid PDF for $\sigma=100$.
(b) Calculate the CDF, $F_V(v)$, for this random variable.
(c) Calculate the probability that a molecule's velocity is between 50 m/s and 150 m/s, i.e., $P(50 \le V \le 150)$.
(d) Calculate the expected velocity of a molecule, $E[V]$. (Hint: $E[V] = \sigma \sqrt{\frac{\pi}{2}}$).
(e) Calculate the variance of the velocity, $Var(V)$. (Hint: $Var(V) = \frac{4-\pi}{2} \sigma^2$).

---

### Answers to Practice Questions:

**Question 1 Answers:**

(a) **Verification of PMF:**
    *   All probabilities are between 0 and 1.
    *   Sum of probabilities: $0.1 + 0.3 + 0.4 + 0.2 = 1.0$.
    *   Thus, it is a valid PMF.

(b) **CDF, $F_X(x)$:**
    *   $F_X(x) = 0$ for $x < 0$
    *   $F_X(x) = P(X \le 0) = 0.1$ for $0 \le x < 1$
    *   $F_X(x) = P(X \le 1) = 0.1 + 0.3 = 0.4$ for $1 \le x < 2$
    *   $F_X(x) = P(X \le 2) = 0.1 + 0.3 + 0.4 = 0.8$ for $2 \le x < 3$
    *   $F_X(x) = P(X \le 3) = 0.1 + 0.3 + 0.4 + 0.2 = 1.0$ for $x \ge 3$

(c) **Expected Value, $E[X]$:**
    $E[X] = (0 \cdot 0.1) + (1 \cdot 0.3) + (2 \cdot 0.4) + (3 \cdot 0.2)$
    $E[X] = 0 + 0.3 + 0.8 + 0.6 = 1.7$ particles.

(d) **Variance, $Var(X)$:**
    First, calculate $E[X^2]$:
    $E[X^2] = (0^2 \cdot 0.1) + (1^2 \cdot 0.3) + (2^2 \cdot 0.4) + (3^2 \cdot 0.2)$
    $E[X^2] = (0 \cdot 0.1) + (1 \cdot 0.3) + (4 \cdot 0.4) + (9 \cdot 0.2)$
    $E[X^2] = 0 + 0.3 + 1.6 + 1.8 = 3.7$

    $Var(X) = E[X^2] - (E[X])^2 = 3.7 - (1.7)^2$
    $Var(X) = 3.7 - 2.89 = 0.81$.

(e) **Standard Deviation, $\sigma_X$:**
    $\sigma_X = \sqrt{Var(X)} = \sqrt{0.81} = 0.9$ particles.

---

**Question 2 Answers:**

(a) **Verification of PDF ($f_V(v)$ with $\sigma=100$):**
    $f_V(v) = \begin{cases} \frac{v}{10000} e^{-v^2/20000} & \text{for } v \ge 0 \\ 0 & \text{for } v < 0 \end{cases}$
    *   $f_V(v) \ge 0$ for $v \ge 0$.
    *   Integral: $\int_{0}^{\infty} \frac{v}{\sigma^2} e^{-v^2/(2\sigma^2)} dv$. Let $u = v^2/(2\sigma^2)$, then $du = \frac{2v}{2\sigma^2} dv = \frac{v}{\sigma^2} dv$.
        $\int_{0}^{\infty} e^{-u} du = [-e^{-u}]_{0}^{\infty} = 0 - (-e^0) = 1$.
    *   Thus, it is a valid PDF.

(b) **CDF, $F_V(v)$:**
    For $v \ge 0$:
    $F_V(v) = \int_{0}^{v} \frac{t}{\sigma^2} e^{-t^2/(2\sigma^2)} dt$.
    Using the substitution from (a) where $u = t^2/(2\sigma^2)$, $du = \frac{t}{\sigma^2} dt$:
    $F_V(v) = \int_{0}^{v^2/(2\sigma^2)} e^{-u} du = [-e^{-u}]_{0}^{v^2/(2\sigma^2)}$
    $F_V(v) = -e^{-v^2/(2\sigma^2)} - (-e^0) = 1 - e^{-v^2/(2\sigma^2)}$.
    So, $F_V(v) = \begin{cases} 0 & \text{for } v < 0 \\ 1 - e^{-v^2/(2\sigma^2)} & \text{for } v \ge 0 \end{cases}$
    With $\sigma=100$: $F_V(v) = 1 - e^{-v^2/20000}$.

(c) **Probability $P(50 \le V \le 150)$:**
    $P(50 \le V \le 150) = F_V(150) - F_V(50)$
    $= (1 - e^{-150^2/20000}) - (1 - e^{-50^2/20000})$
    $= (1 - e^{-22500/20000}) - (1 - e^{-2500/20000})$
    $= (1 - e^{-1.125}) - (1 - e^{-0.125})$
    $\approx (1 - 0.3247) - (1 - 0.8825)$
    $\approx 0.6753 - 0.1175 = 0.5578$.

(d) **Expected Velocity, $E[V]$:**
    Given formula: $E[V] = \sigma \sqrt{\frac{\pi}{2}}$
    With $\sigma=100$: $E[V] = 100 \sqrt{\frac{\pi}{2}} \approx 100 \sqrt{1.5708} \approx 100 \times 1.2533 = 125.33$ m/s.

(e) **Variance, $Var(V)$:**
    Given formula: $Var(V) = \frac{4-\pi}{2} \sigma^2$
    With $\sigma=100$: $Var(V) = \frac{4-\pi}{2} (100)^2$
    $Var(V) = \frac{4 - 3.1416}{2} \times 10000$
    $Var(V) = \frac{0.8584}{2} \times 10000 = 0.4292 \times 10000 = 4292$ (m/s)$^2$.
