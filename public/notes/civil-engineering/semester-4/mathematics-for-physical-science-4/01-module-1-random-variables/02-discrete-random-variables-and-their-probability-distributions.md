---
title: "Discrete random variables and their probability distributions"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 1: Random variables"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba81091c"
status: "completed"
scrapedAt: "2026-05-20T18:45:52.949Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Discrete Random Variables and Their Probability Distributions

---

### 1. Introduction to Random Variables

**Definition:** A **random variable** is a variable whose value is a numerical outcome of a random phenomenon. It's a function that assigns a real number to each outcome in the sample space of a random experiment.

**Key Concepts:**

*   **Random Experiment:** An experiment whose outcome cannot be predicted with certainty.
    *   *Example:* Flipping a coin, rolling a die, measuring the time until a device fails.
*   **Sample Space (S):** The set of all possible outcomes of a random experiment.
    *   *Example:* For flipping a coin twice, S = {HH, HT, TH, TT}.
*   **Outcome:** A single result of a random experiment.
*   **Random Variable (X):** A function mapping outcomes in the sample space to real numbers.

**Notation:** Random variables are typically denoted by uppercase letters (e.g., X, Y, Z). The values they can take are denoted by lowercase letters (e.g., x, y, z).

---

### 2. Discrete Random Variables

**Definition:** A **discrete random variable** is a random variable that can only take a finite number of values or a countably infinite number of values. These values are typically integers and are often obtained by counting.

**Key Characteristics:**

*   The possible values of a discrete random variable are separated by gaps.
*   The set of possible values is either finite or countably infinite.

**Examples:**

1.  **Number of heads when flipping a coin 3 times:**
    *   Possible values for X: {0, 1, 2, 3} (Finite)
2.  **Number of defective items in a sample of 10:**
    *   Possible values for X: {0, 1, 2, ..., 10} (Finite)
3.  **Number of phone calls received in an hour:**
    *   Possible values for X: {0, 1, 2, 3, ...} (Countably Infinite)
4.  **The number of atoms that decay in a radioactive sample in a given time interval.**
    *   Possible values for X: {0, 1, 2, 3, ...} (Countably Infinite)

**When is a variable discrete?**
If you can list all the possible values the variable can take, even if the list is infinite (like 0, 1, 2, ...), then it's discrete.

---

### 3. Probability Distributions of Discrete Random Variables

**Definition:** The **probability distribution** of a discrete random variable X is a function that gives the probability that X takes on each of its possible values. It's often represented by a probability mass function (PMF).

**Probability Mass Function (PMF):**

**Definition:** For a discrete random variable X, the probability mass function (PMF), denoted by $P(X=x)$ or $p_X(x)$, is a function that gives the probability that X is exactly equal to some value $x$.

**Properties of a PMF:**

1.  **Non-negativity:** $P(X=x) \ge 0$ for all possible values $x$. (Probabilities cannot be negative).
2.  **Normalization:** The sum of probabilities over all possible values of X must equal 1.
    $$ \sum_{x} P(X=x) = 1 $$

**Representations of a PMF:**

*   **Table:** Listing each possible value and its corresponding probability.
*   **Formula:** A mathematical expression for $P(X=x)$.
*   **Graph:** A bar chart where the height of each bar represents the probability of a specific value.

---

### 4. Calculating Probabilities from a PMF

Once a PMF is defined, we can calculate probabilities of various events.

**Events involving discrete random variables:**

*   $P(X=x)$: Probability that X takes a specific value $x$.
*   $P(X \le x)$: Probability that X takes a value less than or equal to $x$. This is the **cumulative distribution function (CDF)** evaluated at $x$.
*   $P(X < x)$: Probability that X takes a value strictly less than $x$.
*   $P(a \le X \le b)$: Probability that X takes a value between $a$ and $b$ (inclusive).

**Calculating $P(a \le X \le b)$:**
$$ P(a \le X \le b) = \sum_{x=a}^{b} P(X=x) $$

---

### 5. Expected Value (Mean) of a Discrete Random Variable

**Definition:** The **expected value** (or mean) of a discrete random variable X, denoted by $E(X)$ or $\mu_X$, is the weighted average of its possible values, where the weights are the probabilities.

**Formula:**
$$ E(X) = \sum_{x} x \cdot P(X=x) $$

**Interpretation:** The expected value represents the average value of the random variable over many repetitions of the random experiment. It's not necessarily a value that X can actually take.

**Example:**
Consider the random variable X representing the outcome of rolling a fair six-sided die.
*   Possible values of X: {1, 2, 3, 4, 5, 6}
*   PMF: $P(X=x) = 1/6$ for $x \in \{1, 2, 3, 4, 5, 6\}$.

$$ E(X) = (1 \cdot \frac{1}{6}) + (2 \cdot \frac{1}{6}) + (3 \cdot \frac{1}{6}) + (4 \cdot \frac{1}{6}) + (5 \cdot \frac{1}{6}) + (6 \cdot \frac{1}{6}) $$
$$ E(X) = \frac{1+2+3+4+5+6}{6} = \frac{21}{6} = 3.5 $$

The expected number of heads when flipping a fair coin 10 times is $10 \times 0.5 = 5$.

---

### 6. Variance and Standard Deviation of a Discrete Random Variable

**Definition:** The **variance** of a discrete random variable X, denoted by $Var(X)$ or $\sigma_X^2$, measures the spread or dispersion of the values of X around its mean.

**Formula 1 (using expected value of $X^2$):**
$$ Var(X) = E[(X - \mu_X)^2] = \sum_{x} (x - \mu_X)^2 \cdot P(X=x) $$

**Formula 2 (computational formula):**
$$ Var(X) = E(X^2) - [E(X)]^2 $$
where $E(X^2) = \sum_{x} x^2 \cdot P(X=x)$.

**Definition:** The **standard deviation** of a discrete random variable X, denoted by $\sigma_X$, is the square root of the variance.

**Formula:**
$$ \sigma_X = \sqrt{Var(X)} $$

**Interpretation:**
*   **Variance:** A measure of how spread out the data is. A higher variance means the data points are further from the mean and from each other. It's expressed in squared units.
*   **Standard Deviation:** The typical or average deviation of values from the mean. It's in the same units as the random variable, making it easier to interpret.

**Example (Continuing the die roll):**
*   $E(X) = 3.5$
*   $E(X^2) = (1^2 \cdot \frac{1}{6}) + (2^2 \cdot \frac{1}{6}) + (3^2 \cdot \frac{1}{6}) + (4^2 \cdot \frac{1}{6}) + (5^2 \cdot \frac{1}{6}) + (6^2 \cdot \frac{1}{6})$
    $$ E(X^2) = \frac{1 + 4 + 9 + 16 + 25 + 36}{6} = \frac{91}{6} \approx 15.167 $$
*   $Var(X) = E(X^2) - [E(X)]^2 = \frac{91}{6} - (3.5)^2 = \frac{91}{6} - 12.25 = \frac{91}{6} - \frac{49}{4} = \frac{182 - 147}{12} = \frac{35}{12} \approx 2.917$
*   $\sigma_X = \sqrt{\frac{35}{12}} \approx 1.708$

---

### 7. Common Discrete Probability Distributions (Examples for Physical Science)

While the topic focuses on the general concepts, it's crucial to recognize common distributions used in physical sciences.

**a) Bernoulli Distribution**

*   **Description:** Represents a single trial with two possible outcomes: "success" (with probability $p$) and "failure" (with probability $1-p$).
*   **Random Variable X:** Takes value 1 for success, 0 for failure.
*   **PMF:**
    $$ P(X=x) = \begin{cases} p & \text{if } x=1 \\ 1-p & \text{if } x=0 \end{cases} $$
    Can be written as $P(X=x) = p^x (1-p)^{1-x}$ for $x \in \{0, 1\}$.
*   **Mean:** $E(X) = p$
*   **Variance:** $Var(X) = p(1-p)$
*   **Physical Science Example:**
    *   A single quantum measurement yielding "spin up" (success, $p$) or "spin down" (failure, $1-p$).
    *   A particle decaying in a specific time interval (success) or not decaying (failure).

**b) Binomial Distribution**

*   **Description:** Represents the number of successes in a fixed number ($n$) of independent Bernoulli trials, each with the same probability of success ($p$).
*   **Random Variable X:** Number of successes in $n$ trials.
*   **PMF:**
    $$ P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}, \quad k = 0, 1, 2, \dots, n $$
    where $\binom{n}{k} = \frac{n!}{k!(n-k)!}$ is the binomial coefficient.
*   **Mean:** $E(X) = np$
*   **Variance:** $Var(X) = np(1-p)$
*   **Physical Science Examples:**
    *   The number of radioactive nuclei that decay in a sample of $n$ nuclei over a fixed time interval, assuming each nucleus has an independent probability $p$ of decaying.
    *   The number of photons detected by a sensor in a fixed observation time, if photon arrivals are approximately independent and have a constant average rate.
    *   The number of particles that pass through a detector from a beam of $n$ particles, with probability $p$ of interaction.

**c) Poisson Distribution**

*   **Description:** Represents the number of events occurring in a fixed interval of time or space, given that these events occur with a known constant average rate and independently of the time since the last event. It's often used as an approximation to the binomial distribution when $n$ is large and $p$ is small.
*   **Random Variable X:** Number of events in the interval.
*   **PMF:**
    $$ P(X=k) = \frac{\lambda^k e^{-\lambda}}{k!}, \quad k = 0, 1, 2, \dots $$
    where $\lambda$ (lambda) is the average number of events in the interval ($\lambda > 0$).
*   **Mean:** $E(X) = \lambda$
*   **Variance:** $Var(X) = \lambda$
*   **Physical Science Examples:**
    *   The number of photons arriving at a detector per second.
    *   The number of radioactive decays per minute.
    *   The number of cosmic rays detected per hour.
    *   The number of errors in a transmitted data stream over a certain duration.
    *   The number of molecular collisions in a gas sample per unit time.

---

### 8. Cumulative Distribution Function (CDF)

**Definition:** The **cumulative distribution function (CDF)** of a random variable X, denoted by $F_X(x)$, gives the probability that X takes on a value less than or equal to $x$.

**Formula for Discrete Random Variables:**
$$ F_X(x) = P(X \le x) = \sum_{t \le x} P(X=t) $$

**Properties of a CDF:**

1.  **Non-decreasing:** If $x_1 < x_2$, then $F_X(x_1) \le F_X(x_2)$.
2.  **Limits:**
    *   $\lim_{x \to -\infty} F_X(x) = 0$
    *   $\lim_{x \to +\infty} F_X(x) = 1$
3.  **Monotonicity:** For any $x$, $0 \le F_X(x) \le 1$.
4.  **Right-continuity:** For discrete variables, CDFs are step functions, so they are right-continuous.

**Calculating Probabilities using CDF:**

*   $P(X \le x) = F_X(x)$
*   $P(X < x) = \lim_{t \to x^-} F_X(t)$ (which is $F_X(x)$ minus the probability mass at $x$ if it exists)
*   $P(X = x) = F_X(x) - F_X(x^-)$, where $F_X(x^-) = \lim_{t \to x^-} F_X(t)$. For discrete variables, $P(X=x) = F_X(x) - F_X(x-1)$ if $x$ is an integer and values are integers. More generally, $P(X=x) = F_X(x) - F_X(\text{previous value})$.
*   $P(a < X \le b) = F_X(b) - F_X(a)$

**Example:**
Let X be the number of heads in 2 coin flips.
*   S = {HH, HT, TH, TT}
*   X: {2, 1, 1, 0}
*   Possible values of X: {0, 1, 2}
*   PMF:
    *   $P(X=0) = P(\text{TT}) = 1/4$
    *   $P(X=1) = P(\text{HT, TH}) = 2/4 = 1/2$
    *   $P(X=2) = P(\text{HH}) = 1/4$

*   CDF:
    *   $F_X(x) = 0$ for $x < 0$
    *   $F_X(0) = P(X \le 0) = P(X=0) = 1/4$
    *   $F_X(1) = P(X \le 1) = P(X=0) + P(X=1) = 1/4 + 1/2 = 3/4$
    *   $F_X(2) = P(X \le 2) = P(X=0) + P(X=1) + P(X=2) = 1/4 + 1/2 + 1/4 = 1$
    *   $F_X(x) = 1$ for $x \ge 2$

**Important Point:** The CDF of a discrete random variable is a step function that increases at each possible value of the random variable. The size of the jump at a value $x$ is equal to $P(X=x)$.

---

### 9. Practice Questions and Exercises

**Question 1:**
A physicist is studying the number of particles emitted by a sample in a fixed time interval. Let X be the number of particles emitted. The probability mass function is given by:
$P(X=0) = 0.1$, $P(X=1) = 0.2$, $P(X=2) = 0.3$, $P(X=3) = 0.2$, $P(X=4) = 0.1$, $P(X=5) = 0.1$.

a) Verify that this is a valid probability distribution.
b) Calculate the probability that at least 3 particles are emitted ($P(X \ge 3)$).
c) Calculate the probability that the number of emitted particles is between 1 and 3, inclusive ($P(1 \le X \le 3)$).
d) Calculate the expected number of emitted particles, $E(X)$.
e) Calculate the variance of the number of emitted particles, $Var(X)$.

**Question 2:**
A component in an experimental setup has a probability of $p = 0.05$ of failing during a specific test. If 10 such components are tested independently:

a) Define the random variable X and identify its probability distribution.
b) Calculate the probability that exactly 2 components fail.
c) Calculate the probability that at most 1 component fails.
d) Calculate the expected number of failed components.
e) Calculate the standard deviation of the number of failed components.

**Question 3:**
The number of minor defects found in a silicon wafer follows a Poisson distribution with an average of 2 defects per wafer ($\lambda = 2$).

a) What is the probability of finding exactly 0 defects in a wafer?
b) What is the probability of finding exactly 3 defects in a wafer?
c) What is the probability of finding more than 4 defects in a wafer?
d) What is the expected number of defects per wafer?
e) What is the variance of the number of defects per wafer?

---

### 10. Answers to Practice Questions

**Answer 1:**
a) To verify, we check if $P(X=x) \ge 0$ for all $x$ and if $\sum P(X=x) = 1$.
$0.1 + 0.2 + 0.3 + 0.2 + 0.1 + 0.1 = 1.0$. All probabilities are non-negative. So, it's a valid PMF.

b) $P(X \ge 3) = P(X=3) + P(X=4) + P(X=5) = 0.2 + 0.1 + 0.1 = 0.4$.

c) $P(1 \le X \le 3) = P(X=1) + P(X=2) + P(X=3) = 0.2 + 0.3 + 0.2 = 0.7$.

d) $E(X) = (0 \cdot 0.1) + (1 \cdot 0.2) + (2 \cdot 0.3) + (3 \cdot 0.2) + (4 \cdot 0.1) + (5 \cdot 0.1)$
$E(X) = 0 + 0.2 + 0.6 + 0.6 + 0.4 + 0.5 = 2.3$.

e) First, calculate $E(X^2)$:
$E(X^2) = (0^2 \cdot 0.1) + (1^2 \cdot 0.2) + (2^2 \cdot 0.3) + (3^2 \cdot 0.2) + (4^2 \cdot 0.1) + (5^2 \cdot 0.1)$
$E(X^2) = (0 \cdot 0.1) + (1 \cdot 0.2) + (4 \cdot 0.3) + (9 \cdot 0.2) + (16 \cdot 0.1) + (25 \cdot 0.1)$
$E(X^2) = 0 + 0.2 + 1.2 + 1.8 + 1.6 + 2.5 = 7.3$.

$Var(X) = E(X^2) - [E(X)]^2 = 7.3 - (2.3)^2 = 7.3 - 5.29 = 2.01$.

**Answer 2:**
a) X is the number of failing components out of 10. This is a binomial distribution with $n=10$ trials and probability of success (failure) $p=0.05$.
$X \sim Binomial(n=10, p=0.05)$.
PMF: $P(X=k) = \binom{10}{k} (0.05)^k (0.95)^{10-k}$ for $k = 0, 1, \dots, 10$.

b) $P(X=2) = \binom{10}{2} (0.05)^2 (0.95)^{10-2} = \frac{10 \times 9}{2 \times 1} (0.0025) (0.95)^8 \approx 45 \times 0.0025 \times 0.6634 \approx 0.0746$.

c) $P(X \le 1) = P(X=0) + P(X=1)$.
$P(X=0) = \binom{10}{0} (0.05)^0 (0.95)^{10} = 1 \times 1 \times (0.95)^{10} \approx 0.5987$.
$P(X=1) = \binom{10}{1} (0.05)^1 (0.95)^9 = 10 \times 0.05 \times (0.95)^9 \approx 0.50 \times 0.6302 \approx 0.3151$.
$P(X \le 1) \approx 0.5987 + 0.3151 = 0.9138$.

d) $E(X) = np = 10 \times 0.05 = 0.5$.

e) $Var(X) = np(1-p) = 10 \times 0.05 \times (1-0.05) = 10 \times 0.05 \times 0.95 = 0.475$.
$\sigma_X = \sqrt{Var(X)} = \sqrt{0.475} \approx 0.689$.

**Answer 3:**
X is the number of defects per wafer, $X \sim Poisson(\lambda = 2)$.
PMF: $P(X=k) = \frac{2^k e^{-2}}{k!}$ for $k = 0, 1, 2, \dots$.

a) $P(X=0) = \frac{2^0 e^{-2}}{0!} = \frac{1 \cdot e^{-2}}{1} = e^{-2} \approx 0.1353$.

b) $P(X=3) = \frac{2^3 e^{-2}}{3!} = \frac{8 \cdot e^{-2}}{6} = \frac{4}{3} e^{-2} \approx 1.3333 \times 0.1353 \approx 0.1804$.

c) $P(X > 4) = 1 - P(X \le 4) = 1 - [P(X=0) + P(X=1) + P(X=2) + P(X=3) + P(X=4)]$.
$P(X=1) = \frac{2^1 e^{-2}}{1!} = 2e^{-2} \approx 0.2707$.
$P(X=2) = \frac{2^2 e^{-2}}{2!} = \frac{4e^{-2}}{2} = 2e^{-2} \approx 0.2707$.
$P(X=3) \approx 0.1804$ (from part b).
$P(X=4) = \frac{2^4 e^{-2}}{4!} = \frac{16e^{-2}}{24} = \frac{2}{3} e^{-2} \approx 0.0902$.
$P(X \le 4) \approx 0.1353 + 0.2707 + 0.2707 + 0.1804 + 0.0902 = 0.9473$.
$P(X > 4) \approx 1 - 0.9473 = 0.0527$.

d) $E(X) = \lambda = 2$.

e) $Var(X) = \lambda = 2$.

---

### 11. Important Points to Remember

*   **Discrete variables** take specific, separate values (usually integers) due to counting.
*   The **PMF ($P(X=x)$)** describes the probability of a discrete variable taking an *exact* value.
*   The sum of all probabilities in a PMF must equal **1**.
*   The **Expected Value ($E(X)$)** is the weighted average of possible values.
*   The **Variance ($Var(X)$)** measures the spread around the mean, and the **Standard Deviation ($\sigma_X$)** is its square root.
*   **Bernoulli, Binomial, and Poisson** are key discrete distributions with wide applications in physical sciences.
*   The **CDF ($F_X(x)$)** gives the probability $P(X \le x)$ and is a non-decreasing step function.

---
This concludes the study notes for Discrete Random Variables and Their Probability Distributions. Remember to practice these concepts to solidify your understanding!
