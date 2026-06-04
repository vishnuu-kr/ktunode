---
title: "Random variables"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE – 4"
module: "Module 1: Random variables"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45db09ce205780fe4b3"
status: "completed"
scrapedAt: "2026-05-23T17:50:32.437Z"
---
# MATHEMATICS FOR ELECTRICAL SCIENCE – 4: Module 1: Random Variables

## Topic: Random Variables

This module introduces the fundamental concept of random variables, which are essential tools for modeling and analyzing uncertainty in electrical science and engineering. We will explore how random variables quantify the outcomes of random experiments and learn about their various types, properties, and applications.

---

### 1. Introduction to Random Variables

**Key Concept:** A random variable is a function that assigns a real number to each outcome in the sample space of a random experiment. It provides a numerical representation of the outcome of a random phenomenon.

**Definition:**
Let $\Omega$ be the sample space of a random experiment. A function $X: \Omega \rightarrow \mathbb{R}$ is called a **random variable** if for every real number $x$, the event $\{ \omega \in \Omega : X(\omega) \leq x \}$ is an event in the sample space. This condition ensures that we can assign probabilities to intervals of values for the random variable.

**Notation:**
*   The sample space is denoted by $\Omega$.
*   An outcome in the sample space is denoted by $\omega$.
*   A random variable is typically denoted by a capital letter, e.g., $X$, $Y$, $Z$.
*   The value that the random variable $X$ takes for an outcome $\omega$ is denoted by $X(\omega)$ or simply $x$.

**Why use Random Variables in Electrical Science?**
Random variables are crucial for modeling:
*   Signal amplitudes, noise levels, and power in communication systems.
*   Component lifetimes and failure rates in reliability engineering.
*   Arrival times of calls or data packets in queuing theory.
*   Measurement errors in instrumentation.
*   The output of stochastic processes in control systems.

**Reference:**
*   **Devore (9th ed.):** Chapter 3 introduces the concept of random variables as a way to quantify the outcomes of random experiments.
*   **Veerarajan (3rd ed.):** Chapter 4 defines random variables and their classification.

---

### 2. Types of Random Variables

Random variables are broadly classified into two types based on the nature of the values they can take.

#### 2.1 Discrete Random Variables

**Key Concept:** A discrete random variable is a random variable that can only take a finite number of values or a countably infinite number of values.

**Definition:**
A random variable $X$ is **discrete** if its set of possible values is either finite or countably infinite.

**Examples:**
*   The number of calls received by a base station in an hour. (Finite)
*   The number of defective items in a sample of 10 manufactured items. (Finite)
*   The number of coin flips until the first head appears. (Countably infinite: 1, 2, 3, ...)
*   The number of times a specific error code appears in a transmitted data packet. (Countably infinite)

**Important Point:** The possible values of a discrete random variable can be listed, even if the list is infinite.

**Reference:**
*   **Devore (9th ed.):** Section 3.1 discusses discrete random variables and their probability mass functions.
*   **Veerarajan (3rd ed.):** Section 4.2 deals with discrete random variables and their probability mass functions.

#### 2.2 Continuous Random Variables

**Key Concept:** A continuous random variable is a random variable that can take any value within a given range or interval.

**Definition:**
A random variable $X$ is **continuous** if its set of possible values is an interval or a union of intervals of real numbers.

**Examples:**
*   The voltage level of a signal at a specific time.
*   The temperature of a component.
*   The time until a device fails.
*   The amplitude of random noise in a communication channel.
*   The distance between two consecutive data packets.

**Important Point:** For a continuous random variable, the probability of it taking any *specific* value is zero. Instead, we talk about the probability of it falling within a range or interval.

**Reference:**
*   **Devore (9th ed.):** Section 3.4 introduces continuous random variables and their probability density functions.
*   **Veerarajan (3rd ed.):** Section 4.3 covers continuous random variables and their probability density functions.

---

### 3. Probability Distributions

The way in which probability is distributed over the possible values of a random variable is described by its probability distribution.

#### 3.1 Probability Mass Function (PMF) for Discrete Random Variables

**Key Concept:** The PMF of a discrete random variable $X$ gives the probability that $X$ takes on a specific value $x$.

**Definition:**
The **probability mass function (PMF)** of a discrete random variable $X$, denoted by $p_X(x)$, is defined as:
$p_X(x) = P(X = x)$ for each possible value $x$ of $X$.

**Properties of a PMF:**
1.  $p_X(x) \geq 0$ for all $x$. (Probabilities cannot be negative.)
2.  $\sum_{x} p_X(x) = 1$, where the sum is over all possible values of $X$. (The total probability must be 1.)
3.  $P(X \in A) = \sum_{x \in A} p_X(x)$ for any subset $A$ of the possible values of $X$.

**Example:**
Consider a random variable $X$ representing the number of heads when flipping two fair coins. The possible values of $X$ are 0, 1, 2.
*   $X=0$ (TT): $p_X(0) = P(X=0) = 1/4$
*   $X=1$ (HT, TH): $p_X(1) = P(X=1) = 2/4 = 1/2$
*   $X=2$ (HH): $p_X(2) = P(X=2) = 1/4$

Check properties:
1.  $1/4, 1/2, 1/4 \geq 0$.
2.  $1/4 + 1/2 + 1/4 = 1$.

**Reference:**
*   **Devore (9th ed.):** Section 3.1 elaborates on PMFs and provides examples.
*   **Veerarajan (3rd ed.):** Section 4.2 discusses PMFs and their calculation.
*   **Papoulis & Pillai (4th ed.):** Chapter 3 introduces probability distributions for discrete variables.

#### 3.2 Probability Density Function (PDF) for Continuous Random Variables

**Key Concept:** The PDF of a continuous random variable $X$ describes the relative likelihood for $X$ to take on a given value. The area under the PDF curve over an interval gives the probability of $X$ falling within that interval.

**Definition:**
A non-negative function $f_X(x)$ is the **probability density function (PDF)** of a continuous random variable $X$ if, for any $a < b$:
$P(a \leq X \leq b) = \int_{a}^{b} f_X(x) \, dx$

**Properties of a PDF:**
1.  $f_X(x) \geq 0$ for all $x$. (The density cannot be negative.)
2.  $\int_{-\infty}^{\infty} f_X(x) \, dx = 1$. (The total area under the curve must be 1.)
3.  $P(X = x) = 0$ for any specific value $x$. (The probability of taking a single point is zero.)
4.  $P(a \leq X \leq b) = P(a < X \leq b) = P(a \leq X < b) = P(a < X < b)$ because $P(X=a) = P(X=b) = 0$.

**Example:**
Consider a continuous random variable $X$ representing the arrival time (in minutes) of a bus, uniformly distributed between 0 and 10 minutes. The PDF is:
$f_X(x) = \begin{cases} \frac{1}{10} & 0 \leq x \leq 10 \\ 0 & \text{otherwise} \end{cases}$

Check properties:
1.  $f_X(x) \geq 0$.
2.  $\int_{-\infty}^{\infty} f_X(x) \, dx = \int_{0}^{10} \frac{1}{10} \, dx = \left[ \frac{x}{10} \right]_{0}^{10} = \frac{10}{10} - \frac{0}{10} = 1$.

To find the probability that the bus arrives between 3 and 7 minutes:
$P(3 \leq X \leq 7) = \int_{3}^{7} \frac{1}{10} \, dx = \left[ \frac{x}{10} \right]_{3}^{7} = \frac{7}{10} - \frac{3}{10} = \frac{4}{10} = 0.4$

**Reference:**
*   **Devore (9th ed.):** Section 3.4 explains PDFs and their integration for probability calculations.
*   **Veerarajan (3rd ed.):** Section 4.3 discusses PDFs and their properties.
*   **Ross (6th ed.):** Chapter 4 introduces continuous random variables and their PDFs.

#### 3.3 Cumulative Distribution Function (CDF)

**Key Concept:** The CDF of any random variable (discrete or continuous) gives the probability that the random variable takes a value less than or equal to a specific value.

**Definition:**
The **cumulative distribution function (CDF)** of any random variable $X$, denoted by $F_X(x)$, is defined as:
$F_X(x) = P(X \leq x)$ for all $x \in \mathbb{R}$.

**Properties of a CDF:**
1.  $0 \leq F_X(x) \leq 1$ for all $x$.
2.  $F_X(x)$ is non-decreasing: If $x_1 < x_2$, then $F_X(x_1) \leq F_X(x_2)$.
3.  $\lim_{x \to -\infty} F_X(x) = 0$.
4.  $\lim_{x \to \infty} F_X(x) = 1$.

**Relationship between CDF and PMF (Discrete):**
$F_X(x) = \sum_{t \leq x} p_X(t)$

**Relationship between CDF and PDF (Continuous):**
$F_X(x) = \int_{-\infty}^{x} f_X(t) \, dt$
And conversely, $f_X(x) = \frac{d}{dx} F_X(x)$ (where the derivative exists).

**Using CDF to find probabilities:**
*   $P(X \leq x) = F_X(x)$
*   $P(X > x) = 1 - F_X(x)$
*   $P(a < X \leq b) = F_X(b) - F_X(a)$

**Example (Discrete):**
For the coin flip example ($X \in \{0, 1, 2\}$):
$p_X(0)=1/4, p_X(1)=1/2, p_X(2)=1/4$
$F_X(x) = \begin{cases} 0 & x < 0 \\ 1/4 & 0 \leq x < 1 \\ 1/4 + 1/2 = 3/4 & 1 \leq x < 2 \\ 1/4 + 1/2 + 1/4 = 1 & x \geq 2 \end{cases}$

**Example (Continuous):**
For the uniform distribution $f_X(x) = \frac{1}{10}$ for $0 \leq x \leq 10$:
$F_X(x) = \int_{0}^{x} \frac{1}{10} \, dt = \frac{x}{10}$ for $0 \leq x \leq 10$.
So, $F_X(x) = \begin{cases} 0 & x < 0 \\ x/10 & 0 \leq x \leq 10 \\ 1 & x > 10 \end{cases}$

$P(3 \leq X \leq 7) = F_X(7) - F_X(3) = \frac{7}{10} - \frac{3}{10} = \frac{4}{10} = 0.4$.

**Reference:**
*   **Devore (9th ed.):** Section 3.2 discusses CDFs for discrete variables and Section 3.5 for continuous variables.
*   **Veerarajan (3rd ed.):** Section 4.1 defines CDF for any RV and its properties, linking it to PMF and PDF in subsequent sections.
*   **Anderson et al. (1st ed.):** Chapter 5 provides a thorough treatment of CDFs.

---

### 4. Important Models of Discrete Random Variables

Several probability distributions are frequently used to model discrete random phenomena.

#### 4.1 Bernoulli Distribution

**Key Concept:** Models a single trial with two possible outcomes (success or failure).

**Definition:**
A random variable $X$ follows a **Bernoulli distribution** with parameter $p$ (where $0 \leq p \leq 1$), denoted by $X \sim \text{Bernoulli}(p)$, if its PMF is:
$p_X(x) = \begin{cases} p & \text{if } x = 1 \text{ (success)} \\ 1-p & \text{if } x = 0 \text{ (failure)} \end{cases}$

**Expected Value:** $E[X] = p$
**Variance:** $\text{Var}(X) = p(1-p)$

**Example in Electrical Science:**
*   Whether a communication link is established (success) or not (failure) in a single attempt.
*   Whether a transistor conducts (success) or not (failure) under a specific condition.

**Reference:**
*   **Devore (9th ed.):** Section 3.2 introduces the Bernoulli distribution.
*   **Veerarajan (3rd ed.):** Section 4.2 includes the Bernoulli distribution.

#### 4.2 Binomial Distribution

**Key Concept:** Models the number of successes in a fixed number of independent Bernoulli trials.

**Definition:**
A random variable $X$ follows a **Binomial distribution** with parameters $n$ (number of trials) and $p$ (probability of success in each trial), denoted by $X \sim \text{Binomial}(n, p)$, if its PMF is:
$p_X(k) = \binom{n}{k} p^k (1-p)^{n-k}$ for $k = 0, 1, 2, \dots, n$.
where $\binom{n}{k} = \frac{n!}{k!(n-k)!}$.

**Conditions for Binomial Distribution:**
1.  Fixed number of trials ($n$).
2.  Each trial has only two outcomes (success/failure).
3.  Trials are independent.
4.  The probability of success ($p$) is constant for each trial.

**Expected Value:** $E[X] = np$
**Variance:** $\text{Var}(X) = np(1-p)$

**Example in Electrical Science:**
*   The number of successful data transmissions in a block of 100 transmitted packets, where the probability of success for each packet is 0.95.
*   The number of faulty components found in a batch of 50 produced by a machine with a defect rate of 2%.

**Reference:**
*   **Devore (9th ed.):** Section 3.2 provides a detailed explanation of the Binomial distribution.
*   **Veerarajan (3rd ed.):** Section 4.2 covers the Binomial distribution with examples.
*   **Palaniammal (3rd ed.):** Chapter 2 discusses Binomial distributions.

#### 4.3 Poisson Distribution

**Key Concept:** Models the number of events occurring in a fixed interval of time or space, given a constant average rate of occurrence.

**Definition:**
A random variable $X$ follows a **Poisson distribution** with parameter $\lambda$ (average rate of events), denoted by $X \sim \text{Poisson}(\lambda)$, if its PMF is:
$p_X(k) = \frac{e^{-\lambda} \lambda^k}{k!}$ for $k = 0, 1, 2, \dots$
where $\lambda > 0$.

**Conditions for Poisson Distribution:**
1.  Events occur independently of the time since the last event.
2.  The average rate of occurrence ($\lambda$) is constant.
3.  The probability of an event occurring is proportional to the length of the interval.
4.  Two events cannot occur at exactly the same instant.

**Expected Value:** $E[X] = \lambda$
**Variance:** $\text{Var}(X) = \lambda$

**Example in Electrical Science:**
*   The number of network requests arriving at a server per second.
*   The number of errors in a transmitted digital signal over a specific time interval.
*   The number of customer arrivals at a help desk per hour.

**Reference:**
*   **Devore (9th ed.):** Section 3.3 introduces the Poisson distribution as a limit of the Binomial distribution.
*   **Veerarajan (3rd ed.):** Section 4.2 discusses the Poisson distribution and its applications.
*   **Ross (6th ed.):** Chapter 4 covers the Poisson distribution.

#### 4.4 Geometric Distribution

**Key Concept:** Models the number of independent Bernoulli trials needed to achieve the first success.

**Definition:**
A random variable $X$ follows a **Geometric distribution** with parameter $p$ (probability of success in a single trial), denoted by $X \sim \text{Geometric}(p)$, if its PMF is:
$p_X(k) = (1-p)^{k-1} p$ for $k = 1, 2, 3, \dots$
This represents the probability of getting the first success on the $k$-th trial.

**Expected Value:** $E[X] = \frac{1}{p}$
**Variance:** $\text{Var}(X) = \frac{1-p}{p^2}$

**Example in Electrical Science:**
*   The number of attempts required to establish a wireless connection.
*   The number of times a system needs to be reset until it operates correctly.

**Reference:**
*   **Devore (9th ed.):** Section 3.2 discusses the Geometric distribution.
*   **Veerarajan (3rd ed.):** Section 4.2 includes the Geometric distribution.

#### 4.5 Hypergeometric Distribution

**Key Concept:** Models the number of successes in a fixed number of draws without replacement from a finite population containing a known number of successes.

**Definition:**
A random variable $X$ follows a **Hypergeometric distribution** if it represents the number of successes in $n$ draws without replacement from a population of size $N$ containing $K$ successes. Its PMF is:
$p_X(k) = \frac{\binom{K}{k} \binom{N-K}{n-k}}{\binom{N}{n}}$ for $\max(0, n-(N-K)) \leq k \leq \min(n, K)$.

**Example in Electrical Science:**
*   If a batch of 20 integrated circuits contains 5 defective ones, and we randomly select 8 circuits, the number of defective circuits in the sample follows a Hypergeometric distribution.

**Reference:**
*   **Devore (9th ed.):** Section 3.2 introduces the Hypergeometric distribution.
*   **Veerarajan (3rd ed.):** Section 4.2 covers the Hypergeometric distribution.

---

### 5. Important Models of Continuous Random Variables

Several probability distributions are frequently used to model continuous random phenomena.

#### 5.1 Uniform Distribution

**Key Concept:** Models a random variable that is equally likely to take any value within a specified interval.

**Definition:**
A random variable $X$ follows a **Uniform distribution** on the interval $[a, b]$, denoted by $X \sim \text{Uniform}(a, b)$, if its PDF is:
$f_X(x) = \begin{cases} \frac{1}{b-a} & a \leq x \leq b \\ 0 & \text{otherwise} \end{cases}$

**Expected Value:** $E[X] = \frac{a+b}{2}$
**Variance:** $\text{Var}(X) = \frac{(b-a)^2}{12}$

**Example in Electrical Science:**
*   The arrival time of an event within a given time window when the arrival is random and unpredictable.
*   The phase of a sinusoidal signal when it's randomly sampled.
*   Quantization error in an Analog-to-Digital Converter (ADC) under certain conditions.

**Reference:**
*   **Devore (9th ed.):** Section 3.4 discusses the Uniform distribution.
*   **Veerarajan (3rd ed.):** Section 4.3 includes the Uniform distribution.

#### 5.2 Exponential Distribution

**Key Concept:** Models the time between events in a Poisson process (i.e., the time until the next event occurs).

**Definition:**
A random variable $X$ follows an **Exponential distribution** with parameter $\lambda$ (rate parameter), denoted by $X \sim \text{Exponential}(\lambda)$, if its PDF is:
$f_X(x) = \begin{cases} \lambda e^{-\lambda x} & x \geq 0 \\ 0 & x < 0 \end{cases}$
Here, $\lambda$ is the rate of events (e.g., events per unit time). The expected value of the time between events is $1/\lambda$.

**Expected Value:** $E[X] = \frac{1}{\lambda}$
**Variance:** $\text{Var}(X) = \frac{1}{\lambda^2}$

**Memoryless Property:** The Exponential distribution is "memoryless," meaning $P(X > s+t | X > s) = P(X > t)$ for all $s, t \geq 0$. This means the past history doesn't affect the future probability of an event.

**Example in Electrical Science:**
*   The time to failure of electronic components (often used as a simplified model).
*   The time between arrivals of packets in a network under certain assumptions.
*   The time between calls to a customer service center.

**Reference:**
*   **Devore (9th ed.):** Section 3.4 discusses the Exponential distribution and its memoryless property.
*   **Veerarajan (3rd ed.):** Section 4.3 covers the Exponential distribution.
*   **Ross (6th ed.):** Chapter 4 extensively covers the Exponential distribution.

#### 5.3 Normal (Gaussian) Distribution

**Key Concept:** A very important and widely used distribution that describes many natural phenomena and is often the limit of sums/averages of random variables (Central Limit Theorem).

**Definition:**
A random variable $X$ follows a **Normal distribution** with mean $\mu$ and variance $\sigma^2$, denoted by $X \sim \text{N}(\mu, \sigma^2)$, if its PDF is:
$f_X(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}$ for $-\infty < x < \infty$.

**Standard Normal Distribution:** A special case where $\mu = 0$ and $\sigma^2 = 1$ (standard deviation $\sigma = 1$), denoted by $Z \sim \text{N}(0, 1)$. Its PDF is $\phi(z) = \frac{1}{\sqrt{2\pi}} e^{-\frac{z^2}{2}}$.

**Key Properties:**
*   Symmetric about its mean $\mu$.
*   The mean, median, and mode are all equal to $\mu$.
*   The area under the curve represents probability.
*   The **Empirical Rule (68-95-99.7 Rule):**
    *   Approx. 68% of the data falls within one standard deviation of the mean ($[\mu - \sigma, \mu + \sigma]$).
    *   Approx. 95% of the data falls within two standard deviations of the mean ($[\mu - 2\sigma, \mu + 2\sigma]$).
    *   Approx. 99.7% of the data falls within three standard deviations of the mean ($[\mu - 3\sigma, \mu + 3\sigma]$).

**Relationship to other distributions:**
*   The sum of independent normal random variables is also a normal random variable.
*   The Central Limit Theorem (CLT) states that the distribution of the sum (or average) of a large number of independent, identically distributed random variables will be approximately normal, regardless of the original distribution. This is fundamental in statistics and signal processing.

**Example in Electrical Science:**
*   Measurement errors in electrical instruments.
*   Noise in communication channels (often modeled as Gaussian noise).
*   The distribution of voltage or current in a system with random fluctuations.
*   The distribution of the sum of many small, independent random voltage sources.

**Reference:**
*   **Devore (9th ed.):** Section 3.4 extensively covers the Normal distribution, including the use of standard normal tables.
*   **Veerarajan (3rd ed.):** Section 4.3 discusses the Normal distribution, its PDF, and properties.
*   **Ross (6th ed.):** Chapter 4 provides a thorough treatment of the Normal distribution.
*   **Papoulis & Pillai (4th ed.):** Chapter 4 discusses the Normal distribution as a fundamental continuous distribution.

#### 5.4 Gamma Distribution

**Key Concept:** A flexible distribution often used to model waiting times until a certain number of events occur, or sums of independent exponential random variables.

**Definition:**
A random variable $X$ follows a **Gamma distribution** with shape parameter $k$ (or $\alpha$) and scale parameter $\theta$ (or rate parameter $\beta = 1/\theta$), denoted by $X \sim \text{Gamma}(k, \theta)$, if its PDF is:
$f_X(x) = \begin{cases} \frac{1}{\theta^k \Gamma(k)} x^{k-1} e^{-x/\theta} & x > 0 \\ 0 & x \leq 0 \end{cases}$
where $\Gamma(k)$ is the Gamma function: $\Gamma(k) = \int_{0}^{\infty} t^{k-1} e^{-t} dt$. For integer $k$, $\Gamma(k) = (k-1)!$.

**Relationship to Exponential Distribution:**
If $X_1, X_2, \dots, X_k$ are $k$ independent exponential random variables with rate $\lambda$, then their sum $Y = X_1 + \dots + X_k$ follows a Gamma distribution with shape $k$ and scale $1/\lambda$.

**Expected Value:** $E[X] = k\theta$
**Variance:** $\text{Var}(X) = k\theta^2$

**Example in Electrical Science:**
*   Modeling the time until the $k$-th failure of a system composed of components with exponential lifetimes.
*   Reliability analysis and modeling the time to repair a system.

**Reference:**
*   **Devore (9th ed.):** Section 3.4 discusses the Gamma distribution and its relation to the Exponential distribution.
*   **Veerarajan (3rd ed.):** Section 4.3 covers the Gamma distribution.

---

### 6. Functions of Random Variables

Often, we are interested in the distribution of a new random variable that is a function of one or more existing random variables.

**Key Concept:** If $X$ is a random variable and $Y = g(X)$ is a function of $X$, we want to find the probability distribution of $Y$.

**Methods to find the distribution of $Y = g(X)$:**
1.  **Direct Method (using CDF):** Calculate $F_Y(y) = P(Y \leq y) = P(g(X) \leq y)$. Then, if $Y$ is continuous, find its PDF by differentiating $F_Y(y)$.
2.  **Transformation Method (for continuous $X$):** If $Y = g(X)$ is a strictly monotonic function, and $X$ is continuous with PDF $f_X(x)$, then the PDF of $Y$ is:
    $f_Y(y) = f_X(g^{-1}(y)) \left| \frac{d}{dy} g^{-1}(y) \right|$
    where $g^{-1}(y)$ is the inverse function of $g(x)$.

**Example:**
Let $X \sim \text{Uniform}(0, 1)$ with PDF $f_X(x) = 1$ for $0 \leq x \leq 1$. Let $Y = X^2$. We want to find the PDF of $Y$.
*   **Direct Method:**
    $F_Y(y) = P(Y \leq y) = P(X^2 \leq y)$. Since $X \geq 0$, this is $P(X \leq \sqrt{y})$.
    For $0 \leq y \leq 1$, $F_Y(y) = F_X(\sqrt{y})$. Since $X \sim \text{Uniform}(0,1)$, $F_X(x) = x$ for $0 \leq x \leq 1$.
    So, $F_Y(y) = \sqrt{y}$ for $0 \leq y \leq 1$.
    $f_Y(y) = \frac{d}{dy} F_Y(y) = \frac{d}{dy} (\sqrt{y}) = \frac{1}{2\sqrt{y}}$ for $0 < y < 1$.
*   **Transformation Method:**
    $Y = g(X) = X^2$. The inverse function is $X = g^{-1}(Y) = \sqrt{Y}$ (since $X \geq 0$).
    $\frac{d}{dy} g^{-1}(y) = \frac{d}{dy} \sqrt{y} = \frac{1}{2\sqrt{y}}$.
    $f_Y(y) = f_X(g^{-1}(y)) \left| \frac{d}{dy} g^{-1}(y) \right| = f_X(\sqrt{y}) \left| \frac{1}{2\sqrt{y}} \right|$.
    Since $0 \leq x \leq 1$, $0 \leq \sqrt{y} \leq 1$, so $f_X(\sqrt{y}) = 1$.
    $f_Y(y) = 1 \cdot \frac{1}{2\sqrt{y}} = \frac{1}{2\sqrt{y}}$ for $0 < y < 1$.

**Reference:**
*   **Devore (9th ed.):** Section 3.6 discusses functions of random variables.
*   **Veerarajan (3rd ed.):** Section 4.4 covers functions of random variables.
*   **Ross (6th ed.):** Chapter 4 deals with functions of random variables.

---

### 7. Expected Value and Variance

These are fundamental summary statistics that characterize the behavior of a random variable.

#### 7.1 Expected Value (Mean)

**Key Concept:** The expected value represents the average value of a random variable over many repetitions of the experiment.

**Definition:**
*   For a discrete random variable $X$ with PMF $p_X(x)$:
    $E[X] = \mu_X = \sum_{x} x \cdot p_X(x)$
*   For a continuous random variable $X$ with PDF $f_X(x)$:
    $E[X] = \mu_X = \int_{-\infty}^{\infty} x \cdot f_X(x) \, dx$

**Properties of Expected Value:**
*   $E[c] = c$ (where $c$ is a constant)
*   $E[cX] = cE[X]$
*   $E[X+Y] = E[X] + E[Y]$ (Linearity of Expectation)
*   If $X$ and $Y$ are independent, $E[XY] = E[X]E[Y]$.

**Law of the Unconscious Statistician (LOTUS):**
If $Y = g(X)$, then $E[Y] = E[g(X)] = \sum_{x} g(x) p_X(x)$ for discrete $X$, and $E[Y] = E[g(X)] = \int_{-\infty}^{\infty} g(x) f_X(x) \, dx$ for continuous $X$.

**Example:**
For the Binomial distribution $X \sim \text{Binomial}(n, p)$: $E[X] = np$.

**Reference:**
*   **Devore (9th ed.):** Section 3.1 (Discrete) and 3.4 (Continuous) cover expected values.
*   **Veerarajan (3rd ed.):** Section 4.2 (Discrete) and 4.3 (Continuous) discuss expected values and LOTUS.
*   **Papoulis & Pillai (4th ed.):** Chapter 3 (Discrete) and Chapter 4 (Continuous) define expected values.

#### 7.2 Variance and Standard Deviation

**Key Concept:** Variance measures the spread or dispersion of the values of a random variable around its mean. Standard deviation is the square root of the variance.

**Definition:**
*   **Variance:** $\text{Var}(X) = \sigma_X^2 = E[(X - \mu_X)^2] = E[X^2] - (E[X])^2$
*   **Standard Deviation:** $\sigma_X = \sqrt{\text{Var}(X)}$

**Properties of Variance:**
*   $\text{Var}(c) = 0$ (where $c$ is a constant)
*   $\text{Var}(cX) = c^2 \text{Var}(X)$
*   If $X$ and $Y$ are independent, $\text{Var}(X+Y) = \text{Var}(X) + \text{Var}(Y)$.

**Example:**
For the Binomial distribution $X \sim \text{Binomial}(n, p)$: $\text{Var}(X) = np(1-p)$.

**Reference:**
*   **Devore (9th ed.):** Section 3.1 (Discrete) and 3.4 (Continuous) cover variance.
*   **Veerarajan (3rd ed.):** Section 4.2 (Discrete) and 4.3 (Continuous) discuss variance.

---

### 8. Practice Questions and Exercises

**Q1 (Discrete RV):** A communication system transmits data packets. The probability of a packet being corrupted is 0.05. Let $X$ be the number of corrupted packets in a transmission of 10 packets.
a) Identify the type of random variable $X$.
b) What is the probability distribution of $X$? State its parameters.
c) Calculate the probability that exactly 2 packets are corrupted.
d) Calculate the expected number of corrupted packets.
e) Calculate the variance in the number of corrupted packets.

**Answer 1:**
a) $X$ is a discrete random variable.
b) $X$ follows a Binomial distribution with parameters $n=10$ and $p=0.05$. $X \sim \text{Binomial}(10, 0.05)$.
c) $P(X=2) = \binom{10}{2} (0.05)^2 (1-0.05)^{10-2} = \frac{10 \times 9}{2} (0.0025) (0.95)^8 \approx 45 \times 0.0025 \times 0.6634 \approx 0.0746$.
d) $E[X] = np = 10 \times 0.05 = 0.5$.
e) $\text{Var}(X) = np(1-p) = 10 \times 0.05 \times (1-0.05) = 0.5 \times 0.95 = 0.475$.

**Q2 (Continuous RV):** The time $T$ (in hours) between successive arrivals of jobs at a server follows an exponential distribution with a rate parameter $\lambda = 0.2$ jobs per hour.
a) Identify the type of random variable $T$.
b) Write down the probability density function (PDF) of $T$.
c) Calculate the probability that the time between arrivals is less than 3 hours.
d) Calculate the probability that the time between arrivals is more than 5 hours.
e) Calculate the expected time between arrivals.
f) Calculate the variance of the time between arrivals.

**Answer 2:**
a) $T$ is a continuous random variable.
b) $f_T(t) = \begin{cases} 0.2 e^{-0.2 t} & t \geq 0 \\ 0 & t < 0 \end{cases}$
c) $P(T < 3) = \int_{0}^{3} 0.2 e^{-0.2 t} \, dt = [-e^{-0.2 t}]_{0}^{3} = -e^{-0.6} - (-e^0) = 1 - e^{-0.6} \approx 1 - 0.5488 = 0.4512$.
d) $P(T > 5) = \int_{5}^{\infty} 0.2 e^{-0.2 t} \, dt = [-e^{-0.2 t}]_{5}^{\infty} = 0 - (-e^{-0.2 \times 5}) = e^{-1} \approx 0.3679$.
   Alternatively, using the memoryless property or $P(T > t) = 1 - F_T(t) = e^{-\lambda t}$, $P(T > 5) = e^{-0.2 \times 5} = e^{-1}$.
e) $E[T] = \frac{1}{\lambda} = \frac{1}{0.2} = 5$ hours.
f) $\text{Var}(T) = \frac{1}{\lambda^2} = \frac{1}{(0.2)^2} = \frac{1}{0.04} = 25$ hours$^2$.

**Q3 (Function of RV):** Let $X$ be a random variable with PDF $f_X(x) = 2x$ for $0 \leq x \leq 1$, and 0 otherwise. Let $Y = e^X$. Find the PDF of $Y$.

**Answer 3:**
This is a transformation of a continuous random variable.
$Y = g(X) = e^X$. The inverse function is $X = g^{-1}(Y) = \ln(Y)$.
The derivative of the inverse function is $\frac{d}{dy} g^{-1}(y) = \frac{d}{dy} \ln(y) = \frac{1}{y}$.
Since $0 \leq x \leq 1$, the range of $Y$ is $e^0 \leq Y \leq e^1$, i.e., $1 \leq Y \leq e$.
The PDF of $Y$ is $f_Y(y) = f_X(g^{-1}(y)) \left| \frac{d}{dy} g^{-1}(y) \right|$ for $1 \leq y \leq e$.
$f_Y(y) = f_X(\ln y) \left| \frac{1}{y} \right| = (2 \ln y) \left( \frac{1}{y} \right) = \frac{2 \ln y}{y}$ for $1 \leq y \leq e$.
So, $f_Y(y) = \begin{cases} \frac{2 \ln y}{y} & 1 \leq y \leq e \\ 0 & \text{otherwise} \end{cases}$

---

### 9. Important Points to Remember

*   **Random Variable:** A numerical function of the outcome of a random experiment.
*   **Discrete RV:** Takes countable values (e.g., number of successes, number of events). Characterized by PMF and CDF.
*   **Continuous RV:** Takes values in intervals (e.g., time, voltage, distance). Characterized by PDF and CDF.
*   **PMF:** $p_X(x) = P(X=x)$, sum of PMF values over all $x$ is 1.
*   **PDF:** $f_X(x) \geq 0$, integral of PDF over all $x$ is 1. $P(a \leq X \leq b) = \int_a^b f_X(x) dx$.
*   **CDF:** $F_X(x) = P(X \leq x)$, always between 0 and 1, non-decreasing.
*   **Common Discrete Models:** Bernoulli, Binomial, Poisson, Geometric, Hypergeometric.
*   **Common Continuous Models:** Uniform, Exponential, Normal, Gamma.
*   **Expected Value ($E[X]$):** The average outcome.
*   **Variance ($\text{Var}(X)$):** The spread of outcomes around the mean.
*   **Functions of Random Variables:** Use direct method (CDF) or transformation method to find their distributions.
*   **Normal Distribution:** Crucial due to the Central Limit Theorem; appears frequently in natural phenomena and noise models.

---

This comprehensive set of notes covers the foundational concepts of random variables as outlined in Module 1. Understanding these concepts is vital for tackling more advanced topics in probability and statistics relevant to electrical science.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |
