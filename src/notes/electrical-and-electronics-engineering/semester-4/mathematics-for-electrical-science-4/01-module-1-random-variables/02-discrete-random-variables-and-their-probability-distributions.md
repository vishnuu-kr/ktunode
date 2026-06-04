---
title: "Discrete random variables and their probability distributions"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE– 4"
module: "Module 1: Random variables"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35d91"
status: "completed"
scrapedAt: "2026-05-23T16:16:45.240Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Discrete Random Variables and Their Probability Distributions

This module introduces the fundamental concept of random variables, which are essential for modeling uncertainty in electrical engineering. We will focus on discrete random variables, which take on a finite or countably infinite number of values, and explore how their behavior is described by probability distributions.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Define a discrete random variable:** Understand what constitutes a discrete random variable and its relationship to random experiments.
*   **Define and interpret the probability mass function (PMF):** Understand the properties of a PMF and how it assigns probabilities to each possible value of a discrete random variable.
*   **Calculate the cumulative distribution function (CDF) for a discrete random variable:** Understand the meaning of the CDF and how to compute it from the PMF.
*   **Calculate the expected value (mean) and variance of a discrete random variable:** Understand these key measures of central tendency and spread, and their significance.
*   **Identify and understand common discrete probability distributions:** Become familiar with important distributions like the Bernoulli, Binomial, Poisson, and Geometric distributions, and their applications in electrical science.
*   **Apply discrete probability distributions to solve problems in electrical science:** Use these distributions to model and analyze real-world phenomena.

---

### 1. Introduction to Random Variables

A **random variable** is a function that assigns a numerical value to each outcome in the sample space of a random experiment. In electrical science, random variables are used to model quantities that vary randomly, such as:

*   The number of errors in a data transmission.
*   The lifetime of a component.
*   The number of arrivals at a service station.
*   The outcome of a coin toss (e.g., 0 for tails, 1 for heads).

#### Definition: Random Variable
Let $\Omega$ be the sample space of a random experiment. A real-valued function $X: \Omega \rightarrow \mathbb{R}$ is called a **random variable**.

---

### 2. Discrete Random Variables

A **discrete random variable** is a random variable whose possible values can be listed, either as a finite set or as a countably infinite set.

**Examples:**

*   The number of defective components in a sample of 10. (Finite set: {0, 1, 2, ..., 10})
*   The number of times a specific signal occurs in an hour. (Countably infinite set: {0, 1, 2, ...})
*   The outcome of rolling a die. (Finite set: {1, 2, 3, 4, 5, 6})

---

### 3. Probability Mass Function (PMF)

For a discrete random variable $X$, the **probability mass function (PMF)**, denoted by $P_X(x)$ or $p_X(x)$, assigns a probability to each distinct value that $X$ can take.

#### Definition: Probability Mass Function (PMF)
A function $p_X(x)$ is a PMF of a discrete random variable $X$ if:
1.  $p_X(x) \ge 0$ for all possible values $x$ of $X$.
2.  $\sum_{x} p_X(x) = 1$, where the sum is over all possible values of $X$.

The PMF describes the probability of the random variable taking on a specific value.

**Example (Devore, J. L., 2016, Chapter 3):**
Consider a random experiment where we toss a fair coin three times. Let $X$ be the number of heads obtained. The sample space is $\Omega = \{HHH, HHT, HTH, THH, HTT, THT, TTH, TTT\}$.
The possible values of $X$ are {0, 1, 2, 3}.
The PMF is calculated as follows:
*   $P(X=0) = P(\{TTT\}) = \frac{1}{8}$
*   $P(X=1) = P(\{HTT, THT, TTH\}) = \frac{3}{8}$
*   $P(X=2) = P(\{HHT, HTH, THH\}) = \frac{3}{8}$
*   $P(X=3) = P(\{HHH\}) = \frac{1}{8}$

So, the PMF is:
$p_X(0) = \frac{1}{8}$, $p_X(1) = \frac{3}{8}$, $p_X(2) = \frac{3}{8}$, $p_X(3) = \frac{1}{8}$.
We can verify that $\frac{1}{8} + \frac{3}{8} + \frac{3}{8} + \frac{1}{8} = \frac{8}{8} = 1$.

---

### 4. Cumulative Distribution Function (CDF)

The **cumulative distribution function (CDF)** of a random variable $X$, denoted by $F_X(x)$ or $F(x)$, gives the probability that $X$ takes on a value less than or equal to $x$.

#### Definition: Cumulative Distribution Function (CDF)
For a random variable $X$, the CDF is defined as:
$F_X(x) = P(X \le x)$ for all $x \in \mathbb{R}$.

For a discrete random variable, the CDF can be computed by summing the PMF values for all values less than or equal to $x$.

$F_X(x) = \sum_{t \le x} p_X(t)$

**Properties of CDF:**

*   $0 \le F_X(x) \le 1$ for all $x$.
*   $F_X(x)$ is a non-decreasing function.
*   $\lim_{x \to -\infty} F_X(x) = 0$.
*   $\lim_{x \to \infty} F_X(x) = 1$.
*   $P(a < X \le b) = F_X(b) - F_X(a)$.

**Example (Continuing from above):**
For $X$ (number of heads in 3 coin tosses):
*   $F_X(x) = 0$ for $x < 0$.
*   $F_X(0) = P(X \le 0) = p_X(0) = \frac{1}{8}$ for $0 \le x < 1$.
*   $F_X(1) = P(X \le 1) = p_X(0) + p_X(1) = \frac{1}{8} + \frac{3}{8} = \frac{4}{8} = \frac{1}{2}$ for $1 \le x < 2$.
*   $F_X(2) = P(X \le 2) = p_X(0) + p_X(1) + p_X(2) = \frac{1}{8} + \frac{3}{8} + \frac{3}{8} = \frac{7}{8}$ for $2 \le x < 3$.
*   $F_X(3) = P(X \le 3) = p_X(0) + p_X(1) + p_X(2) + p_X(3) = \frac{1}{8} + \frac{3}{8} + \frac{3}{8} + \frac{1}{8} = 1$ for $x \ge 3$.

---

### 5. Expected Value (Mean) and Variance

#### 5.1 Expected Value (Mean)

The **expected value** (or mean) of a discrete random variable $X$, denoted by $E[X]$ or $\mu_X$, represents the average value of $X$ over many repetitions of the random experiment.

#### Definition: Expected Value
The expected value of a discrete random variable $X$ with PMF $p_X(x)$ is given by:
$E[X] = \mu_X = \sum_{x} x \cdot p_X(x)$, where the sum is over all possible values of $X$.

**Example (Continuing from above):**
$E[X] = 0 \cdot \frac{1}{8} + 1 \cdot \frac{3}{8} + 2 \cdot \frac{3}{8} + 3 \cdot \frac{1}{8} = 0 + \frac{3}{8} + \frac{6}{8} + \frac{3}{8} = \frac{12}{8} = 1.5$.
This means that, on average, we expect to get 1.5 heads when tossing a fair coin three times.

#### 5.2 Variance

The **variance** of a discrete random variable $X$, denoted by $Var(X)$ or $\sigma_X^2$, measures the spread or dispersion of the random variable's values around its mean.

#### Definition: Variance
The variance of a discrete random variable $X$ with PMF $p_X(x)$ and mean $\mu_X$ is given by:
$Var(X) = \sigma_X^2 = E[(X - \mu_X)^2] = \sum_{x} (x - \mu_X)^2 \cdot p_X(x)$.

An alternative and often more convenient formula for variance is:
$Var(X) = E[X^2] - (E[X])^2$.

Where $E[X^2] = \sum_{x} x^2 \cdot p_X(x)$.

The **standard deviation** is the square root of the variance, $\sigma_X = \sqrt{Var(X)}$.

**Example (Continuing from above):**
First, calculate $E[X^2]$:
$E[X^2] = 0^2 \cdot \frac{1}{8} + 1^2 \cdot \frac{3}{8} + 2^2 \cdot \frac{3}{8} + 3^2 \cdot \frac{1}{8} = 0 \cdot \frac{1}{8} + 1 \cdot \frac{3}{8} + 4 \cdot \frac{3}{8} + 9 \cdot \frac{1}{8} = 0 + \frac{3}{8} + \frac{12}{8} + \frac{9}{8} = \frac{24}{8} = 3$.

Now, calculate the variance:
$Var(X) = E[X^2] - (E[X])^2 = 3 - (1.5)^2 = 3 - 2.25 = 0.75$.
The standard deviation is $\sigma_X = \sqrt{0.75} \approx 0.866$.

**Key Concept from Veerarajan, T. (2008), Chapter 4:**
The expected value and variance are crucial summary statistics that capture the central tendency and spread of a probability distribution. They are fundamental for understanding the behavior of random phenomena.

---

### 6. Common Discrete Probability Distributions

#### 6.1 Bernoulli Distribution

A **Bernoulli random variable** represents the outcome of a single trial of an experiment that has only two possible outcomes, typically labeled "success" and "failure."

*   **Probability Mass Function (PMF):**
    $p_X(x) = \begin{cases} p & \text{if } x = 1 \text{ (success)} \\ 1-p & \text{if } x = 0 \text{ (failure)} \end{cases}$
    where $p$ is the probability of success ($0 \le p \le 1$).
*   **Expected Value:** $E[X] = p$
*   **Variance:** $Var(X) = p(1-p)$

**Application in Electrical Science:** Modeling the success or failure of a single attempt to transmit a bit correctly.

#### 6.2 Binomial Distribution

A **Binomial random variable** counts the number of successes in a fixed number of independent Bernoulli trials.

*   **Conditions for Binomial Distribution:**
    1.  A fixed number of trials, $n$.
    2.  Each trial has only two possible outcomes: success or failure.
    3.  The trials are independent.
    4.  The probability of success, $p$, is the same for each trial.
*   **Notation:** $X \sim Bin(n, p)$
*   **Probability Mass Function (PMF):**
    $p_X(k) = P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$, for $k = 0, 1, 2, \dots, n$.
    where $\binom{n}{k} = \frac{n!}{k!(n-k)!}$ is the binomial coefficient.
*   **Expected Value:** $E[X] = np$
*   **Variance:** $Var(X) = np(1-p)$

**Example (Devore, J. L., 2016, Chapter 3):**
Suppose a communication system has a probability of transmitting a data packet without error of $p = 0.95$. If we transmit $n=10$ packets independently, let $X$ be the number of packets transmitted without error. Then $X \sim Bin(10, 0.95)$.
The probability of exactly 8 packets being transmitted without error is:
$P(X=8) = \binom{10}{8} (0.95)^8 (1-0.95)^{10-8} = \binom{10}{8} (0.95)^8 (0.05)^2$.
$\binom{10}{8} = \frac{10!}{8!2!} = \frac{10 \times 9}{2 \times 1} = 45$.
$P(X=8) = 45 \times (0.95)^8 \times (0.05)^2 \approx 45 \times 0.6634 \times 0.0025 \approx 0.0746$.

**Application in Electrical Science:** Modeling the number of successful transmissions, number of faulty components in a batch, or the number of arrivals within a certain time interval in certain scenarios.

#### 6.3 Poisson Distribution

The **Poisson distribution** is often used to model the number of events occurring in a fixed interval of time or space, given that these events occur with a known average rate and independently of the time since the last event.

*   **Conditions for Poisson Distribution:**
    1.  Events occur one at a time.
    2.  The occurrence of an event in one interval is independent of the occurrence of an event in any other disjoint interval.
    3.  The average rate of events is constant.
*   **Notation:** $X \sim Poisson(\lambda)$
    where $\lambda$ (lambda) is the average number of events in the given interval.
*   **Probability Mass Function (PMF):**
    $p_X(k) = P(X=k) = \frac{e^{-\lambda} \lambda^k}{k!}$, for $k = 0, 1, 2, \dots$.
*   **Expected Value:** $E[X] = \lambda$
*   **Variance:** $Var(X) = \lambda$

**Example (Veerarajan, T., 2008, Chapter 4):**
The average number of phone calls received by a switchboard in a minute is 3. Let $X$ be the number of calls received in 5 minutes. The average rate per minute is $\lambda_{min} = 3$. So, the average rate in 5 minutes is $\lambda = 3 \times 5 = 15$.
If $X$ follows a Poisson distribution with $\lambda=15$, the probability of receiving exactly 10 calls in 5 minutes is:
$P(X=10) = \frac{e^{-15} 15^{10}}{10!} \approx \frac{1.5 \times 10^{-6} \times 5.766 \times 10^{11}}{3.6288 \times 10^6} \approx 0.0347$.

**Application in Electrical Science:** Modeling the number of customer calls to technical support, the number of defects on a printed circuit board, or the number of electron emissions from a surface per unit time. The Poisson distribution can be seen as an approximation to the Binomial distribution when $n$ is large and $p$ is small, with $\lambda \approx np$.

#### 6.4 Geometric Distribution

The **Geometric distribution** models the number of trials needed to achieve the first success in a series of independent Bernoulli trials.

*   **Conditions for Geometric Distribution:**
    1.  A sequence of independent trials.
    2.  Each trial has two outcomes: success or failure.
    3.  The probability of success, $p$, is constant for each trial.
    4.  The experiment continues until the first success occurs.
*   **Two common definitions:**
    1.  Number of trials *until* the first success (values $1, 2, 3, \dots$)
    2.  Number of failures *before* the first success (values $0, 1, 2, \dots$)

    We will use the first definition (number of trials).
*   **Notation:** $X \sim Geom(p)$
*   **Probability Mass Function (PMF):**
    $p_X(k) = P(X=k) = (1-p)^{k-1} p$, for $k = 1, 2, 3, \dots$.
*   **Expected Value:** $E[X] = \frac{1}{p}$
*   **Variance:** $Var(X) = \frac{1-p}{p^2}$

**Example (Ross, S. M., 2020, Chapter 4):**
Consider testing electronic components until a defective one is found. Assume the probability of a component being defective is $p = 0.1$. Let $X$ be the number of components tested until the first defective one is found. Then $X \sim Geom(0.1)$.
The probability that the first defective component is the 5th one tested is:
$P(X=5) = (1-0.1)^{5-1} (0.1) = (0.9)^4 (0.1) = 0.6561 \times 0.1 = 0.06561$.

**Application in Electrical Science:** Modeling the number of attempts needed to establish a connection, the number of tests required to find a fault in a circuit, or the number of messages sent until a successful acknowledgment is received.

---

### 7. Applying Discrete Distributions in Electrical Science

Understanding these discrete distributions allows engineers to quantify and predict the likelihood of various events in electrical systems.

*   **Reliability Engineering:** The geometric distribution can model the lifetime of a system that needs multiple attempts to function.
*   **Communication Systems:** Binomial and Poisson distributions are useful for analyzing error rates, packet loss, and arrival rates of data.
*   **Quality Control:** Binomial distribution helps in assessing the quality of batches of electronic components based on the number of defects.
*   **Queueing Theory:** Poisson processes are fundamental to modeling queues in communication networks or service systems.

---

### 8. Practice Questions

1.  **Question:** A technician is responsible for debugging a new software module. The probability of finding a bug in any given hour of work is 0.3. If the technician works for 4 hours, and each hour is independent, what is the probability that they find exactly 2 bugs?
    *   **Hint:** This scenario fits the Binomial distribution.

2.  **Question:** In a manufacturing process for integrated circuits, the average number of defects per wafer is 5. Assuming the number of defects follows a Poisson distribution, what is the probability that a randomly selected wafer has no defects?
    *   **Hint:** Use the Poisson PMF with $\lambda = 5$.

3.  **Question:** A fair six-sided die is rolled repeatedly. Let $Y$ be the number of rolls required to obtain the first '6'.
    *   a) What is the probability distribution of $Y$?
    *   b) What is the probability that the first '6' appears on the 4th roll?
    *   c) What is the expected number of rolls to get the first '6'?
    *   **Hint:** This scenario fits the Geometric distribution.

---

### 9. Answers to Practice Questions

1.  **Answer:**
    This is a Binomial distribution problem with $n=4$ (number of hours) and $p=0.3$ (probability of finding a bug per hour). We want to find $P(X=2)$.
    $P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$
    $P(X=2) = \binom{4}{2} (0.3)^2 (1-0.3)^{4-2}$
    $P(X=2) = \binom{4}{2} (0.3)^2 (0.7)^2$
    $\binom{4}{2} = \frac{4!}{2!2!} = \frac{4 \times 3}{2 \times 1} = 6$.
    $P(X=2) = 6 \times (0.09) \times (0.49) = 6 \times 0.0441 = 0.2646$.
    The probability of finding exactly 2 bugs in 4 hours is 0.2646.

2.  **Answer:**
    The number of defects follows a Poisson distribution with $\lambda = 5$. We want to find $P(X=0)$.
    $P(X=k) = \frac{e^{-\lambda} \lambda^k}{k!}$
    $P(X=0) = \frac{e^{-5} 5^0}{0!}$
    Since $5^0 = 1$ and $0! = 1$:
    $P(X=0) = e^{-5} \approx 0.006738$.
    The probability that a randomly selected wafer has no defects is approximately 0.0067.

3.  **Answer:**
    *   a) This is a Geometric distribution problem where the probability of success (rolling a '6') is $p = \frac{1}{6}$. So, $Y \sim Geom(\frac{1}{6})$.
    *   b) We want to find $P(Y=4)$.
        $P(Y=k) = (1-p)^{k-1} p$
        $P(Y=4) = (1-\frac{1}{6})^{4-1} (\frac{1}{6})$
        $P(Y=4) = (\frac{5}{6})^3 (\frac{1}{6}) = \frac{125}{216} \times \frac{1}{6} = \frac{125}{1296} \approx 0.09645$.
        The probability that the first '6' appears on the 4th roll is approximately 0.09645.
    *   c) The expected number of rolls is $E[Y] = \frac{1}{p}$.
        $E[Y] = \frac{1}{1/6} = 6$.
        The expected number of rolls to get the first '6' is 6.

---

### Important Points to Remember:

*   **Discrete vs. Continuous:** Recognize the difference between discrete random variables (countable values) and continuous random variables (uncountable values, to be covered later).
*   **PMF Properties:** Always check if the sum of probabilities in a PMF equals 1.
*   **CDF Properties:** $F_X(x)$ is non-decreasing and ranges from 0 to 1.
*   **Mean vs. Median:** The mean is the expected value, while the median is the value $m$ where $F_X(m) = 0.5$. They are not always the same for discrete distributions.
*   **Binomial Approximation to Poisson:** When $n$ is large and $p$ is small, the Binomial distribution can be approximated by a Poisson distribution with $\lambda = np$. This simplifies calculations significantly.
*   **Memoryless Property of Geometric Distribution:** The Geometric distribution has a memoryless property, meaning the probability of success on the next trial is independent of the number of trials already performed. $P(X=k+j | X>k) = P(X=j)$.

---
