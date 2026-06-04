---
title: "Discrete random variables and their probability distributions"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 1: Random variables"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4b4"
status: "completed"
scrapedAt: "2026-05-23T17:50:33.148Z"
---
# Mathematics for Electrical Science – 4: Module 1: Random Variables

## Topic: Discrete Random Variables and Their Probability Distributions

This module introduces the fundamental concepts of random variables, focusing on discrete random variables and their associated probability distributions. Understanding these concepts is crucial for analyzing and modeling random phenomena encountered in electrical engineering, such as signal noise, component failures, and network traffic.

### Learning Outcomes Addressed in this Topic:

*   **LO1: Define a discrete random variable and illustrate its probability distribution.**
*   **LO2: Calculate and interpret the expected value (mean) and variance of a discrete random variable.**
*   **LO3: Identify and apply common discrete probability distributions (e.g., Binomial, Poisson, Geometric) to model real-world electrical engineering problems.**
*   **LO4: Understand the properties of discrete probability distributions and their applications.**

### Course Outcomes Alignment:

*   **CO1: Illustrate the concept, properties and important models of discrete random variables and to apply in suitable random phenomena.** (This topic directly addresses CO1 by defining discrete random variables, exploring their properties, and introducing key models like Binomial and Poisson distributions.)

---

### 1. Introduction to Random Variables

A **random variable** is a variable whose value is a numerical outcome of a random phenomenon. It essentially assigns a number to each possible outcome in a sample space.

*   **Sample Space (S):** The set of all possible outcomes of a random experiment.
*   **Random Variable (X):** A function that maps each outcome in the sample space to a real number.

**Example:**
Consider a coin toss experiment. The sample space is $S = \{H, T\}$, where H is heads and T is tails.
We can define a random variable $X$ as follows:
*   $X(H) = 1$ (if heads)
*   $X(T) = 0$ (if tails)
Here, $X$ can take on the values 0 and 1.

#### Key Types of Random Variables:

1.  **Discrete Random Variable:** A random variable that can only take on a finite or countably infinite number of distinct values. These values are typically integers or counts.
2.  **Continuous Random Variable:** A random variable that can take on any value within a given range or interval. (This will be covered in a subsequent topic).

---

### 2. Discrete Random Variables

A random variable $X$ is **discrete** if the set of all possible values that $X$ can assume is finite or countably infinite.

**Examples:**
*   The number of defective components in a batch of 10. (Values: 0, 1, 2, ..., 10)
*   The number of calls received by a customer service center in an hour. (Values: 0, 1, 2, ...)
*   The number of attempts needed to establish a communication link. (Values: 1, 2, 3, ...)
*   The voltage level of a digital signal (can be 0 or 5V). (Values: 0, 5)

**Devore J. L. (9th ed., 2016):** Chapter 3 introduces random variables and focuses on discrete random variables in Section 3.1.
**Veerarajan, T. (3rd ed., 2008):** Chapter 4, Section 4.1, defines random variables, differentiating between discrete and continuous types.

---

### 3. Probability Distribution of a Discrete Random Variable

The **probability distribution** of a discrete random variable $X$ is a function that specifies the probability that $X$ takes on each of its possible values. This is often represented by a probability mass function (PMF).

**Probability Mass Function (PMF):**
For a discrete random variable $X$, the probability mass function $p(x)$ is defined as:
$p(x) = P(X = x)$
for all possible values $x$ that $X$ can take.

**Properties of a PMF:**
1.  $p(x) \ge 0$ for all possible values of $x$. (Probabilities are non-negative).
2.  $\sum_{x} p(x) = 1$, where the sum is over all possible values of $x$. (The sum of all probabilities must equal 1).

**Cumulative Distribution Function (CDF):**
The cumulative distribution function $F(x)$ of a discrete random variable $X$ is defined as:
$F(x) = P(X \le x) = \sum_{t \le x} p(t)$
for all real numbers $x$.

**Properties of a CDF:**
1.  $0 \le F(x) \le 1$.
2.  $F(x)$ is a non-decreasing function.
3.  $\lim_{x \to -\infty} F(x) = 0$ and $\lim_{x \to \infty} F(x) = 1$.
4.  $P(a < X \le b) = F(b) - F(a)$.

**Example:**
Consider a random experiment of rolling a fair six-sided die. Let $X$ be the random variable representing the outcome of the roll. The possible values for $X$ are {1, 2, 3, 4, 5, 6}.
The PMF is:
$p(1) = P(X=1) = 1/6$
$p(2) = P(X=2) = 1/6$
...
$p(6) = P(X=6) = 1/6$

The CDF would be:
$F(x) = P(X \le x)$
$F(0) = 0$
$F(1) = 1/6$
$F(1.5) = 1/6$
$F(2) = 2/6$
...
$F(6) = 6/6 = 1$
$F(7) = 1$

---

### 4. Expected Value (Mean) of a Discrete Random Variable

The **expected value** or **mean** of a discrete random variable $X$, denoted by $E(X)$ or $\mu$, is the weighted average of all possible values of $X$, where the weights are their respective probabilities.

**Formula:**
$E(X) = \mu = \sum_{x} x \cdot p(x)$
The sum is over all possible values $x$ that $X$ can take.

**Interpretation:**
The expected value represents the average value of the random variable over a large number of trials. It's the long-run average outcome.

**Example:**
For the fair die roll example:
$E(X) = 1 \cdot (1/6) + 2 \cdot (1/6) + 3 \cdot (1/6) + 4 \cdot (1/6) + 5 \cdot (1/6) + 6 \cdot (1/6)$
$E(X) = (1+2+3+4+5+6)/6 = 21/6 = 3.5$

**Devore J. L. (9th ed., 2016):** Section 3.2 defines expected value and its properties.
**Veerarajan, T. (3rd ed., 2008):** Section 4.2 covers expected values of discrete random variables.

---

### 5. Variance and Standard Deviation of a Discrete Random Variable

The **variance** of a discrete random variable $X$, denoted by $Var(X)$ or $\sigma^2$, measures the spread or dispersion of the probability distribution around its mean.

**Formula:**
$Var(X) = \sigma^2 = E[(X - \mu)^2] = \sum_{x} (x - \mu)^2 \cdot p(x)$

**Alternative Formula for Variance (often easier to compute):**
$Var(X) = E(X^2) - [E(X)]^2$
where $E(X^2) = \sum_{x} x^2 \cdot p(x)$.

The **standard deviation** of $X$, denoted by $\sigma$, is the square root of the variance. It provides a measure of spread in the same units as the random variable.

**Formula:**
$\sigma = \sqrt{Var(X)}$

**Interpretation:**
A higher variance or standard deviation indicates that the values of the random variable are more spread out from the mean. A lower value indicates that the values are clustered closer to the mean.

**Example:**
For the fair die roll example, $\mu = 3.5$.
$E(X^2) = 1^2 \cdot (1/6) + 2^2 \cdot (1/6) + 3^2 \cdot (1/6) + 4^2 \cdot (1/6) + 5^2 \cdot (1/6) + 6^2 \cdot (1/6)$
$E(X^2) = (1 + 4 + 9 + 16 + 25 + 36) / 6 = 91/6$
$Var(X) = E(X^2) - [E(X)]^2 = 91/6 - (3.5)^2 = 91/6 - 12.25 = 15.1667 - 12.25 = 2.9167$
$\sigma = \sqrt{2.9167} \approx 1.708$

**Devore J. L. (9th ed., 2016):** Section 3.2 also covers variance and standard deviation.
**Veerarajan, T. (3rd ed., 2008):** Section 4.2 discusses variance and standard deviation.

---

### 6. Properties of Expected Value and Variance

These properties are essential for simplifying calculations and analyzing more complex scenarios.

**Properties of Expected Value:**
Let $X$ and $Y$ be discrete random variables, and $a$ and $b$ be constants.
1.  $E(c) = c$ (The expected value of a constant is the constant itself).
2.  $E(aX) = aE(X)$ (The expected value of a constant times a random variable is the constant times the expected value).
3.  $E(X+b) = E(X) + b$ (Adding a constant shifts the expected value by that constant).
4.  $E(aX + b) = aE(X) + b$ (Linearity of expectation).
5.  $E(X+Y) = E(X) + E(Y)$ (The expected value of a sum of random variables is the sum of their expected values, regardless of independence).
6.  $E(X+Y) = E(X) + E(Y)$ (Linearity of Expectation)

**Properties of Variance:**
Let $X$ be a discrete random variable, and $a$ and $b$ be constants.
1.  $Var(c) = 0$ (The variance of a constant is zero, as there is no spread).
2.  $Var(aX) = a^2 Var(X)$ (Scaling a random variable by a factor $a$ scales its variance by $a^2$).
3.  $Var(X+b) = Var(X)$ (Adding a constant to a random variable does not change its variance, as it only shifts the distribution).
4.  $Var(aX + b) = a^2 Var(X)$
5.  If $X$ and $Y$ are independent, then $Var(X+Y) = Var(X) + Var(Y)$.
6.  If $X$ and $Y$ are independent, then $Var(X-Y) = Var(X) + Var(Y)$.

**Papoulis, A. & Pillai, S.U. (4th ed., 2002):** Chapter 5 provides a detailed treatment of expectation and variance, including their properties.
**Ross, S. M. (6th ed., 2020):** Chapter 4 covers expectation and variance, with numerous examples.

---

### 7. Common Discrete Probability Distributions

These are standard probability models used to describe the behavior of discrete random variables in various scenarios.

#### 7.1. Bernoulli Distribution

A Bernoulli trial is an experiment with only two possible outcomes: "success" and "failure".
A **Bernoulli random variable** $X$ is a random variable that takes the value 1 for success and 0 for failure.

*   **Parameter:** $p$, the probability of success ($0 \le p \le 1$).
*   **PMF:**
    $p(1) = P(X=1) = p$
    $p(0) = P(X=0) = 1-p$
*   **Expected Value:** $E(X) = p$
*   **Variance:** $Var(X) = p(1-p)$

**Example:**
*   Testing a single electronic component for functionality (Success = works, Failure = doesn't work).
*   A single bit transmission (Success = 1, Failure = 0).

#### 7.2. Binomial Distribution

The **Binomial distribution** describes the number of successes in a fixed number of independent Bernoulli trials, where the probability of success is constant for each trial.

*   **Parameters:**
    *   $n$: The number of trials (a positive integer).
    *   $p$: The probability of success in a single trial ($0 \le p \le 1$).
*   **Random Variable:** $X =$ the number of successes in $n$ trials.
*   **Possible Values:** $X \in \{0, 1, 2, ..., n\}$
*   **PMF:**
    $p(x) = P(X=x) = \binom{n}{x} p^x (1-p)^{n-x}$, for $x = 0, 1, ..., n$
    where $\binom{n}{x} = \frac{n!}{x!(n-x)!}$ is the binomial coefficient.
*   **Expected Value:** $E(X) = np$
*   **Variance:** $Var(X) = np(1-p)$

**Example:**
*   The number of out-of-spec resistors in a sample of 20 from a production line, where each resistor has a 5% chance of being out-of-spec.
*   The number of successful data packets transmitted out of 10 attempts, if the probability of success for each packet is 0.9.

**Devore J. L. (9th ed., 2016):** Section 3.3 covers the Binomial distribution.
**Veerarajan, T. (3rd ed., 2008):** Section 4.3.1 discusses the Binomial distribution.

#### 7.3. Poisson Distribution

The **Poisson distribution** is used to model the number of events occurring in a fixed interval of time or space, given a known average rate of occurrence and assuming events occur independently. It's often used for rare events.

*   **Parameter:** $\lambda$ (lambda), the average number of events in the interval ($\lambda > 0$).
*   **Random Variable:** $X =$ the number of events occurring in the interval.
*   **Possible Values:** $X \in \{0, 1, 2, 3, ...\}$ (countably infinite).
*   **PMF:**
    $p(x) = P(X=x) = \frac{e^{-\lambda} \lambda^x}{x!}$, for $x = 0, 1, 2, ...$
*   **Expected Value:** $E(X) = \lambda$
*   **Variance:** $Var(X) = \lambda$

**Key Characteristics for Poisson Distribution:**
*   Events occur independently.
*   The rate of occurrence is constant over the interval.
*   The probability of two or more events occurring in a very small interval is negligible.

**Example:**
*   The number of telephone calls received by an exchange in an hour.
*   The number of defects per square meter of fabric.
*   The number of computer network requests arriving at a server per minute.
*   The number of electrical faults in a cable of a certain length.

**Approximation:**
The Binomial distribution can be approximated by the Poisson distribution when $n$ is large and $p$ is small, such that $\lambda = np$ is moderate. This is useful because calculating binomial probabilities for large $n$ can be computationally intensive.

**Devore J. L. (9th ed., 2016):** Section 3.4 covers the Poisson distribution.
**Veerarajan, T. (3rd ed., 2008):** Section 4.3.2 deals with the Poisson distribution.

#### 7.4. Geometric Distribution

The **Geometric distribution** describes the number of independent Bernoulli trials needed to get the first success.

*   **Parameters:**
    *   $p$: The probability of success in a single trial ($0 < p \le 1$).
*   **Random Variable:** $X =$ the number of trials until the first success.
*   **Possible Values:** $X \in \{1, 2, 3, ...\}$
*   **PMF:**
    $p(x) = P(X=x) = (1-p)^{x-1} p$, for $x = 1, 2, 3, ...$
*   **Expected Value:** $E(X) = \frac{1}{p}$
*   **Variance:** $Var(X) = \frac{1-p}{p^2}$

**Memoryless Property:** A key characteristic of the geometric distribution is its "memoryless" property: the probability of success on any given trial is independent of the outcomes of previous trials.

**Example:**
*   The number of times a circuit breaker needs to be reset before it stays in the "on" position.
*   The number of attempts to connect to a Wi-Fi network.

**Devore J. L. (9th ed., 2016):** Section 3.3 discusses the Geometric distribution as a variant.
**Veerarajan, T. (3rd ed., 2008):** Section 4.3.3 covers the Geometric distribution.

---

### 8. Applications in Electrical Science

Discrete random variables and their distributions are fundamental in modeling various electrical engineering phenomena:

*   **Reliability Engineering:** Modeling the number of failures of electronic components, systems, or the time until the first failure (often modeled by geometric or related distributions).
*   **Telecommunications:** Analyzing the number of data packets lost or arriving at a network node per unit time (often Poisson distributed). The number of successful transmissions can be modeled by Binomial.
*   **Quality Control:** Assessing the number of defective items in a production batch (Binomial).
*   **Signal Processing:** Modeling random noise or errors in digital signals.
*   **Queueing Theory:** Analyzing the number of customers or requests in a system at a given time (often involves Poisson arrivals).

**Palaniammal, S. (3rd ed., 2015):** Chapters on discrete distributions likely include electrical engineering-related examples.
**Anderson, D. F., Timo, B. (1st ed., 2017):** May provide introductory examples applicable to engineering.

---

### Practice Questions and Exercises

**Question 1:**
A digital communication system transmits a sequence of bits. The probability of a bit being transmitted incorrectly is $0.001$. If 1000 bits are transmitted, what is the probability that exactly 2 bits are transmitted incorrectly?

**Question 2:**
The number of electrical faults in a certain type of cable per kilometer follows a Poisson distribution with an average rate of 0.5 faults per kilometer.
a) What is the probability of finding exactly 1 fault in a 2 km length of cable?
b) What is the probability of finding no faults in a 3 km length of cable?
c) What is the probability of finding more than 2 faults in a 4 km length of cable?

**Question 3:**
A quality control inspector checks electronic devices. The probability that a device is defective is $0.02$. The inspector keeps checking devices until the first defective device is found.
a) What is the probability that the first defective device is found on the 5th check?
b) What is the expected number of checks required to find the first defective device?

**Question 4:**
Let $X$ be a discrete random variable with the following probability distribution:
$p(0) = 0.1$, $p(1) = 0.3$, $p(2) = 0.4$, $p(3) = 0.2$.
Calculate:
a) $E(X)$
b) $Var(X)$

---

### Answers to Practice Questions

**Answer 1:**
This scenario can be modeled using the Binomial distribution.
$n = 1000$ (number of trials)
$p = 0.001$ (probability of error in a single bit)
We want to find $P(X=2)$.
$P(X=2) = \binom{1000}{2} (0.001)^2 (1-0.001)^{1000-2}$
$P(X=2) = \frac{1000 \times 999}{2} (0.000001) (0.999)^{998}$
$P(X=2) \approx 499500 \times 0.000001 \times 0.3677 \approx 0.1838$

Alternatively, since $n$ is large and $p$ is small, we can use the Poisson approximation with $\lambda = np = 1000 \times 0.001 = 1$.
$P(X=x) = \frac{e^{-\lambda} \lambda^x}{x!}$
$P(X=2) = \frac{e^{-1} (1)^2}{2!} = \frac{0.367879 \times 1}{2} \approx 0.1839$

**Answer 2:**
The number of faults follows a Poisson distribution.
a) For 2 km, the average rate is $\lambda = 0.5 \text{ faults/km} \times 2 \text{ km} = 1$ fault.
$P(X=1) = \frac{e^{-1} (1)^1}{1!} = \frac{e^{-1}}{1} \approx 0.3679$

b) For 3 km, the average rate is $\lambda = 0.5 \text{ faults/km} \times 3 \text{ km} = 1.5$ faults.
$P(X=0) = \frac{e^{-1.5} (1.5)^0}{0!} = \frac{e^{-1.5} \times 1}{1} \approx 0.2231$

c) For 4 km, the average rate is $\lambda = 0.5 \text{ faults/km} \times 4 \text{ km} = 2$ faults.
We want $P(X > 2) = 1 - P(X \le 2) = 1 - [P(X=0) + P(X=1) + P(X=2)]$.
$P(X=0) = \frac{e^{-2} (2)^0}{0!} = e^{-2} \approx 0.1353$
$P(X=1) = \frac{e^{-2} (2)^1}{1!} = 2e^{-2} \approx 0.2707$
$P(X=2) = \frac{e^{-2} (2)^2}{2!} = \frac{4e^{-2}}{2} = 2e^{-2} \approx 0.2707$
$P(X \le 2) \approx 0.1353 + 0.2707 + 0.2707 = 0.6767$
$P(X > 2) = 1 - 0.6767 = 0.3233$

**Answer 3:**
This follows a Geometric distribution.
$p = 0.02$ (probability of defective device)
a) $P(X=5) = (1-p)^{5-1} p = (0.98)^4 (0.02) \approx 0.9224 \times 0.02 \approx 0.0184$
b) $E(X) = \frac{1}{p} = \frac{1}{0.02} = 50$. The expected number of checks is 50.

**Answer 4:**
$p(0) = 0.1$, $p(1) = 0.3$, $p(2) = 0.4$, $p(3) = 0.2$.
a) $E(X) = \sum x \cdot p(x) = (0 \times 0.1) + (1 \times 0.3) + (2 \times 0.4) + (3 \times 0.2)$
$E(X) = 0 + 0.3 + 0.8 + 0.6 = 1.7$

b) First, calculate $E(X^2)$:
$E(X^2) = \sum x^2 \cdot p(x) = (0^2 \times 0.1) + (1^2 \times 0.3) + (2^2 \times 0.4) + (3^2 \times 0.2)$
$E(X^2) = (0 \times 0.1) + (1 \times 0.3) + (4 \times 0.4) + (9 \times 0.2)$
$E(X^2) = 0 + 0.3 + 1.6 + 1.8 = 3.7$

$Var(X) = E(X^2) - [E(X)]^2 = 3.7 - (1.7)^2 = 3.7 - 2.89 = 0.81$

---

### Important Points to Remember

*   **Discrete RVs:** Values are countable (finite or infinite).
*   **PMF:** $p(x) = P(X=x)$. Key properties: $p(x) \ge 0$ and $\sum p(x) = 1$.
*   **CDF:** $F(x) = P(X \le x)$. Key properties: non-decreasing, bounds of 0 and 1.
*   **Expected Value ($E(X)$):** The average outcome over many trials.
*   **Variance ($Var(X)$):** A measure of the spread of the distribution around the mean. Standard deviation ($\sigma$) is the square root of variance.
*   **Bernoulli:** Single trial, two outcomes (success/failure).
*   **Binomial:** Number of successes in $n$ independent Bernoulli trials.
*   **Poisson:** Number of events in an interval at a constant average rate. Good approximation for Binomial when $n$ is large and $p$ is small.
*   **Geometric:** Number of trials until the first success. Has the memoryless property.

---

This concludes the notes for Discrete Random Variables and Their Probability Distributions. The next topic will likely delve into Continuous Random Variables.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=jZ5z11sK0Mg) |
