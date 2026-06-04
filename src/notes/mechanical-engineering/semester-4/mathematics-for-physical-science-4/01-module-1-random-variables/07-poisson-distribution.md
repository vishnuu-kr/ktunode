---
title: "Poisson distribution"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 1: Random variables"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462eb7"
status: "completed"
scrapedAt: "2026-05-20T17:54:34.876Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Poisson Distribution

---

**Course Outcomes Addressed:**

*   **CO1:** Understand the concept, properties and important models of discrete random variables and to apply in suitable random phenomena. (Knowledge Level: K3)

---

### 1. Introduction to the Poisson Distribution

The Poisson distribution is a discrete probability distribution that expresses the probability of a given number of events occurring in a fixed interval of time or space if these events occur with a known constant mean rate and independently of the time since the last event. It is particularly useful for modeling rare events.

**Key Concept:** The Poisson distribution describes the probability of observing a certain number of events in a fixed interval when events occur randomly and independently at a constant average rate.

**Relevance to Physical Sciences:**
In physical sciences, the Poisson distribution is used to model phenomena such as:
*   The number of radioactive decays in a given time interval.
*   The number of photons detected by a sensor per unit time.
*   The number of cosmic ray showers hitting a detector.
*   The number of defects in a material sample.
*   The number of ionizations produced by a charged particle in a gas.

**Textbook Reference:**
*   **Devore, J. L. (2016).** *Probability and Statistics for Engineering and the Sciences* (9th ed.). Cengage Learning. (Chapter 4: Discrete Random Variables and Probability Distributions - Section on Poisson Distribution)
*   **Papoulis, A., & Pillai, S. U. (2002).** *Probability, Random Variables and Stochastic Processes* (4th ed.). McGraw Hill. (Chapter 4: Transform Methods - discusses characteristic functions and moments, which can be related to Poisson distribution properties).

---

### 2. The Poisson Probability Mass Function (PMF)

A random variable $X$ is said to follow a Poisson distribution with parameter $\lambda$ (lambda), denoted as $X \sim \text{Poisson}(\lambda)$, if its probability mass function (PMF) is given by:

$$ P(X=x) = \frac{e^{-\lambda} \lambda^x}{x!} $$

where:
*   $x$ is the number of events (a non-negative integer: $x = 0, 1, 2, 3, \dots$)
*   $\lambda$ (lambda) is the average number of events in the given interval (a positive real number, $\lambda > 0$)
*   $e$ is the base of the natural logarithm (approximately 2.71828)
*   $x!$ is the factorial of $x$ ($x! = x \times (x-1) \times \dots \times 2 \times 1$, and $0! = 1$).

**Derivation (Briefly from Binomial):**
The Poisson distribution can be derived as a limiting case of the binomial distribution when the number of trials ($n$) becomes very large and the probability of success ($p$) becomes very small, such that the mean ($np$) remains constant. Let $\lambda = np$.

$$ \lim_{n \to \infty, p \to 0, np = \lambda} \binom{n}{x} p^x (1-p)^{n-x} = \frac{e^{-\lambda} \lambda^x}{x!} $$

**Example:**
If the average number of radioactive decays detected by a counter in one minute is 3 ($\lambda = 3$), then the probability of detecting exactly 2 decays in one minute is:

$$ P(X=2) = \frac{e^{-3} 3^2}{2!} = \frac{e^{-3} \times 9}{2} = 4.5 \times e^{-3} \approx 4.5 \times 0.0498 \approx 0.224 $$

**Important Point:**
The parameter $\lambda$ represents the average rate of events per interval. It's crucial to ensure the interval for which $\lambda$ is defined is consistent with the interval for which we are calculating probabilities.

---

### 3. Properties of the Poisson Distribution

**A. Mean (Expected Value)**

The mean of a Poisson distribution is equal to its parameter $\lambda$.

$$ E[X] = \lambda $$

**Proof (using the PMF):**
$$ E[X] = \sum_{x=0}^{\infty} x P(X=x) = \sum_{x=0}^{\infty} x \frac{e^{-\lambda} \lambda^x}{x!} $$
Since the term for $x=0$ is zero, we can start the summation from $x=1$:
$$ E[X] = \sum_{x=1}^{\infty} x \frac{e^{-\lambda} \lambda^x}{x!} = \sum_{x=1}^{\infty} \frac{e^{-\lambda} \lambda^x}{(x-1)!} $$
Let $k = x-1$. When $x=1$, $k=0$.
$$ E[X] = e^{-\lambda} \lambda \sum_{k=0}^{\infty} \frac{\lambda^k}{k!} $$
The summation is the Taylor series expansion of $e^{\lambda}$: $\sum_{k=0}^{\infty} \frac{\lambda^k}{k!} = e^{\lambda}$.
$$ E[X] = e^{-\lambda} \lambda (e^{\lambda}) = \lambda $$

**B. Variance**

The variance of a Poisson distribution is also equal to its parameter $\lambda$.

$$ \text{Var}(X) = \lambda $$

**Proof (using the PMF):**
We can use the property $\text{Var}(X) = E[X^2] - (E[X])^2$.
First, let's find $E[X(X-1)]$:
$$ E[X(X-1)] = \sum_{x=0}^{\infty} x(x-1) P(X=x) = \sum_{x=0}^{\infty} x(x-1) \frac{e^{-\lambda} \lambda^x}{x!} $$
The terms for $x=0$ and $x=1$ are zero, so we can start from $x=2$:
$$ E[X(X-1)] = \sum_{x=2}^{\infty} x(x-1) \frac{e^{-\lambda} \lambda^x}{x!} = \sum_{x=2}^{\infty} \frac{e^{-\lambda} \lambda^x}{(x-2)!} $$
Let $k = x-2$. When $x=2$, $k=0$.
$$ E[X(X-1)] = e^{-\lambda} \lambda^2 \sum_{k=0}^{\infty} \frac{\lambda^k}{k!} = e^{-\lambda} \lambda^2 (e^{\lambda}) = \lambda^2 $$
Now, we know that $E[X(X-1)] = E[X^2 - X] = E[X^2] - E[X]$.
So, $\lambda^2 = E[X^2] - \lambda$.
This implies $E[X^2] = \lambda^2 + \lambda$.
Finally, the variance:
$$ \text{Var}(X) = E[X^2] - (E[X])^2 = (\lambda^2 + \lambda) - (\lambda)^2 = \lambda $$

**C. Standard Deviation**

The standard deviation is the square root of the variance.

$$ \sigma_X = \sqrt{\text{Var}(X)} = \sqrt{\lambda} $$

**D. Moment Generating Function (MGF)**

The MGF of a Poisson random variable $X$ is given by:

$$ M_X(t) = E[e^{tX}] = e^{\lambda(e^t - 1)} $$

**Proof (using the PMF):**
$$ M_X(t) = \sum_{x=0}^{\infty} e^{tx} P(X=x) = \sum_{x=0}^{\infty} e^{tx} \frac{e^{-\lambda} \lambda^x}{x!} = e^{-\lambda} \sum_{x=0}^{\infty} \frac{(e^t \lambda)^x}{x!} $$
The summation is the Taylor series expansion of $e^{(e^t \lambda)}$.
$$ M_X(t) = e^{-\lambda} e^{\lambda e^t} = e^{\lambda e^t - \lambda} = e^{\lambda(e^t - 1)} $$

**Important Point:**
The fact that the mean and variance are equal ($\text{mean} = \text{variance} = \lambda$) is a distinctive characteristic of the Poisson distribution. This implies that as the average rate of events ($\lambda$) increases, the variability of the number of events also increases proportionally to the mean.

---

### 4. Applications and Examples in Physical Science

**Example 1: Radioactive Decay**

A Geiger counter is used to detect radioactive decays. On average, 5 decays are detected per minute. What is the probability that in a given minute, the counter detects exactly 3 decays?

*   This is a Poisson process because decays are assumed to occur randomly and independently at a constant average rate.
*   Average rate, $\lambda = 5$ decays per minute.
*   We want to find the probability of $x = 3$ decays.

Using the Poisson PMF:
$$ P(X=3) = \frac{e^{-5} 5^3}{3!} = \frac{e^{-5} \times 125}{6} \approx \frac{0.006738 \times 125}{6} \approx \frac{0.84225}{6} \approx 0.14037 $$

**Example 2: Photon Detection**

A photomultiplier tube detects photons from a weak light source. The average detection rate is 10 photons per second. What is the probability that in a 2-second interval, exactly 15 photons are detected?

*   The average rate needs to be adjusted for the new interval.
*   Average rate per second = 10 photons/sec.
*   For a 2-second interval, the average number of events is $\lambda = 10 \times 2 = 20$ photons.
*   We want to find the probability of $x = 15$ photons.

Using the Poisson PMF:
$$ P(X=15) = \frac{e^{-20} 20^{15}}{15!} $$
Calculating this value requires a calculator or software.
$e^{-20} \approx 2.061 \times 10^{-9}$
$20^{15} = 3.277 \times 10^{19}$
$15! = 1.3077 \times 10^{12}$
$$ P(X=15) \approx \frac{(2.061 \times 10^{-9}) \times (3.277 \times 10^{19})}{1.3077 \times 10^{12}} \approx \frac{6.753 \times 10^{10}}{1.3077 \times 10^{12}} \approx 0.0516 $$

**Example 3: Defects in a Material**

A manufacturing process produces semiconductor wafers. The average number of microscopic defects per wafer is 0.8. What is the probability that a randomly selected wafer has no defects?

*   Average rate, $\lambda = 0.8$ defects per wafer.
*   We want to find the probability of $x = 0$ defects.

Using the Poisson PMF:
$$ P(X=0) = \frac{e^{-0.8} 0.8^0}{0!} = \frac{e^{-0.8} \times 1}{1} = e^{-0.8} \approx 0.4493 $$

**Textbook Reference:**
*   **Devore, J. L. (2016).** *Probability and Statistics for Engineering and the Sciences* (9th ed.). Cengage Learning. (Chapter 4 provides examples of Poisson distribution in various contexts).
*   **Ross, S. M. (2020).** *Introduction to Probability and Statistics for Engineers and Scientists* (6th ed.). Academic Press. (Chapter 3 discusses discrete random variables and their applications, including the Poisson distribution).

---

### 5. Relationships with Other Distributions

**A. Poisson as a Limit of Binomial**

As mentioned earlier, the Poisson distribution can be viewed as a limiting case of the binomial distribution. If $X \sim \text{Binomial}(n, p)$ where $n$ is large and $p$ is small, and $\lambda = np$, then $X$ can be approximated by a Poisson distribution with parameter $\lambda$.

**When to use the approximation:**
*   $n \ge 20$ and $p \le 0.05$
*   $np \le 5$
*   $n$ is large, $p$ is small, and $np$ is moderate.

**Example:**
Suppose a batch of 1000 resistors has a defect rate of 0.1% ($p=0.001$). What is the probability that a batch contains exactly 2 defective resistors?
Using Binomial: $P(X=2) = \binom{1000}{2} (0.001)^2 (0.999)^{998}$. This is computationally intensive.
Using Poisson approximation: $\lambda = np = 1000 \times 0.001 = 1$.
$P(X=2) \approx \frac{e^{-1} 1^2}{2!} = \frac{e^{-1}}{2} \approx \frac{0.36788}{2} \approx 0.18394$.

**Textbook Reference:**
*   **Devore, J. L. (2016).** *Probability and Statistics for Engineering and the Sciences* (9th ed.). Cengage Learning. (Chapter 4, Section 4.4: The Poisson Distribution).

**B. Poisson Process**

The Poisson distribution is closely related to the concept of a Poisson process, which describes the occurrence of events over time or space. If events occur according to a Poisson process with rate $\lambda$, then the number of events in any fixed interval of length $t$ follows a Poisson distribution with parameter $\lambda t$.

*   If the rate is $\lambda$ events per unit time, then in an interval of length $t$, the average number of events is $\lambda t$.

**Example:**
If the average number of calls arriving at a call center is 10 calls per hour, then in a 3-hour period, the average number of calls is $\lambda \times t = 10 \times 3 = 30$. The number of calls in that 3-hour period would follow a Poisson distribution with parameter 30.

---

### 6. Practice Questions and Exercises

**Question 1:**
The number of accidents at a particular intersection follows a Poisson distribution with an average of 2.5 accidents per week. What is the probability that in a given week, there are exactly 3 accidents?

**Question 2:**
In a large batch of manufactured optical fibers, the average number of flaws per kilometer is 0.5. What is the probability that a 3-kilometer length of fiber has exactly 2 flaws?

**Question 3:**
A quantum optical experiment measures the arrival of photons. The detector is known to register, on average, 2 photons per millisecond. What is the probability that in a 0.5-millisecond interval, the detector registers:
    a) Exactly 1 photon?
    b) No photons?
    c) At least 2 photons?

**Question 4:**
The number of cosmic ray particles detected by a sensor per hour follows a Poisson distribution with a mean of 15. If the sensor is run for 4 hours, what is the probability of detecting exactly 50 particles?

---

### 7. Answers to Practice Questions

**Answer 1:**
*   $\lambda = 2.5$ accidents per week.
*   $x = 3$ accidents.
$$ P(X=3) = \frac{e^{-2.5} (2.5)^3}{3!} = \frac{e^{-2.5} \times 15.625}{6} \approx \frac{0.082085 \times 15.625}{6} \approx \frac{1.282578}{6} \approx 0.2138 $$

**Answer 2:**
*   Average flaws per kilometer = 0.5.
*   For a 3-kilometer length, $\lambda = 0.5 \times 3 = 1.5$ flaws.
*   $x = 2$ flaws.
$$ P(X=2) = \frac{e^{-1.5} (1.5)^2}{2!} = \frac{e^{-1.5} \times 2.25}{2} \approx \frac{0.22313 \times 2.25}{2} \approx \frac{0.50204}{2} \approx 0.2510 $$

**Answer 3:**
*   Average photons per millisecond = 2.
*   For a 0.5-millisecond interval, $\lambda = 2 \times 0.5 = 1$ photon.
    a) Probability of exactly 1 photon ($x=1$):
    $$ P(X=1) = \frac{e^{-1} (1)^1}{1!} = \frac{e^{-1}}{1} = e^{-1} \approx 0.3679 $$
    b) Probability of no photons ($x=0$):
    $$ P(X=0) = \frac{e^{-1} (1)^0}{0!} = \frac{e^{-1} \times 1}{1} = e^{-1} \approx 0.3679 $$
    c) Probability of at least 2 photons ($P(X \ge 2)$):
    This is $1 - P(X < 2) = 1 - (P(X=0) + P(X=1))$.
    $$ P(X \ge 2) = 1 - (0.3679 + 0.3679) = 1 - 0.7358 = 0.2642 $$

**Answer 4:**
*   Average particles per hour = 15.
*   For a 4-hour period, $\lambda = 15 \times 4 = 60$ particles.
*   $x = 50$ particles.
$$ P(X=50) = \frac{e^{-60} (60)^{50}}{50!} $$
This calculation requires statistical software or a calculator with advanced functions. The approximate value is around 0.0246.

---

### 8. Important Points to Remember

*   The Poisson distribution models the **number of events** in a fixed interval of time or space.
*   Events must occur **randomly and independently**.
*   The **average rate of events ($\lambda$) must be constant** over the interval.
*   The parameter $\lambda$ is both the **mean** and the **variance** of the distribution.
*   The Poisson PMF is $P(X=x) = \frac{e^{-\lambda} \lambda^x}{x!}$ for $x = 0, 1, 2, \dots$.
*   The Poisson distribution can approximate the binomial distribution when $n$ is large and $p$ is small, with $\lambda = np$.
*   When dealing with different interval lengths, always adjust $\lambda$ proportionally. If the rate is $\lambda'$ per unit interval, for an interval of length $t$, the new parameter is $\lambda = \lambda't$.

---

This study note covers the fundamental aspects of the Poisson distribution, its properties, and its applications in physical sciences, aligning with the learning outcomes and course objectives for Module 1. The references provided can be consulted for deeper understanding and additional examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=7UJ4CFR1894) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=IYdiKeQ9xME) |
