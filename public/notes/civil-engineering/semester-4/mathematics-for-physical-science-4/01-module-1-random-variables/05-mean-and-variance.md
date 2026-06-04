---
title: "Mean and variance"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE –  4"
module: "Module 1: Random variables"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba81091f"
status: "completed"
scrapedAt: "2026-05-20T18:45:54.917Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 1: Random Variables

### Topic: Mean and Variance

---

This module introduces the fundamental concepts of random variables and their associated statistical measures. Understanding the mean (expected value) and variance (measure of spread) is crucial for analyzing and interpreting data in physical science.

---

### Learning Outcomes

By the end of this topic, you should be able to:

*   **Define and calculate the mean (expected value) of a discrete random variable.**
*   **Define and calculate the variance of a discrete random variable.**
*   **Understand the relationship between variance and standard deviation.**
*   **Apply the concepts of mean and variance to real-world problems in physical science.**

---

### 1. Mean (Expected Value) of a Discrete Random Variable

#### 1.1 Definition

The **mean**, often denoted as $\mu$ or $E[X]$ (Expected Value of X), of a discrete random variable $X$ is a weighted average of all possible values that the random variable can take. The weights are the probabilities of each value occurring.

**Key Concept:** The mean represents the central tendency or the average outcome of a random experiment if it were repeated many times.

#### 1.2 Formula for Discrete Random Variables

If $X$ is a discrete random variable with possible values $x_1, x_2, \ldots, x_n$ and corresponding probabilities $P(X=x_1), P(X=x_2), \ldots, P(X=x_n)$, then the mean is calculated as:

$$
E[X] = \mu = \sum_{i=1}^{n} x_i P(X=x_i)
$$

**Important Note:** The sum of all probabilities must equal 1: $\sum_{i=1}^{n} P(X=x_i) = 1$.

#### 1.3 Examples

**Example 1: Rolling a Fair Die**

Let $X$ be the random variable representing the outcome of rolling a fair six-sided die. The possible values are $\{1, 2, 3, 4, 5, 6\}$, and each value has a probability of $\frac{1}{6}$.

$$
E[X] = (1 \times \frac{1}{6}) + (2 \times \frac{1}{6}) + (3 \times \frac{1}{6}) + (4 \times \frac{1}{6}) + (5 \times \frac{1}{6}) + (6 \times \frac{1}{6})
$$

$$
E[X] = \frac{1+2+3+4+5+6}{6} = \frac{21}{6} = 3.5
$$

The mean outcome of rolling a fair die is 3.5.

**Example 2: Number of Defective Items**

A quality control inspector examines a sample of 3 items from a production line. The probability of finding a defective item is 0.1. Let $X$ be the number of defective items in the sample. The probability distribution is given as:

*   $P(X=0) = 0.729$ (0 defective items)
*   $P(X=1) = 0.243$ (1 defective item)
*   $P(X=2) = 0.027$ (2 defective items)
*   $P(X=3) = 0.001$ (3 defective items)

Calculate the mean number of defective items.

$$
E[X] = (0 \times 0.729) + (1 \times 0.243) + (2 \times 0.027) + (3 \times 0.001)
$$

$$
E[X] = 0 + 0.243 + 0.054 + 0.003 = 0.3
$$

The average number of defective items in a sample of 3 is 0.3.

---

### 2. Variance of a Discrete Random Variable

#### 2.1 Definition

The **variance**, denoted as $\sigma^2$ or $Var(X)$ or $E[(X-\mu)^2]$, measures the spread or dispersion of the values of a random variable around its mean. A higher variance indicates that the values are more spread out, while a lower variance suggests that the values are clustered closer to the mean.

**Key Concept:** Variance quantifies how much the values of a random variable deviate from its average value.

#### 2.2 Formula for Discrete Random Variables

There are two common formulas for calculating the variance of a discrete random variable:

**Formula 1: Based on the definition of expected squared deviation**

$$
Var(X) = \sigma^2 = \sum_{i=1}^{n} (x_i - \mu)^2 P(X=x_i)
$$

This formula directly calculates the expected value of the squared difference between each value and the mean.

**Formula 2: Computational formula (often easier to calculate)**

$$
Var(X) = \sigma^2 = E[X^2] - (E[X])^2
$$

Where $E[X^2]$ is the expected value of $X^2$, calculated as:

$$
E[X^2] = \sum_{i=1}^{n} x_i^2 P(X=x_i)
$$

**Important Note:** Variance is always non-negative ($\sigma^2 \ge 0$).

#### 2.3 Examples

**Example 1: Rolling a Fair Die (Continued)**

Using the same fair die example ($E[X] = 3.5$):

Using Formula 1:
$$
Var(X) = (1-3.5)^2 \times \frac{1}{6} + (2-3.5)^2 \times \frac{1}{6} + (3-3.5)^2 \times \frac{1}{6} + (4-3.5)^2 \times \frac{1}{6} + (5-3.5)^2 \times \frac{1}{6} + (6-3.5)^2 \times \frac{1}{6}
$$
$$
Var(X) = \frac{1}{6} [(-2.5)^2 + (-1.5)^2 + (-0.5)^2 + (0.5)^2 + (1.5)^2 + (2.5)^2]
$$
$$
Var(X) = \frac{1}{6} [6.25 + 2.25 + 0.25 + 0.25 + 2.25 + 6.25] = \frac{1}{6} [17.5] = \frac{35}{12} \approx 2.917
$$

Using Formula 2:
First, calculate $E[X^2]$:
$$
E[X^2] = (1^2 \times \frac{1}{6}) + (2^2 \times \frac{1}{6}) + (3^2 \times \frac{1}{6}) + (4^2 \times \frac{1}{6}) + (5^2 \times \frac{1}{6}) + (6^2 \times \frac{1}{6})
$$
$$
E[X^2] = \frac{1}{6} (1 + 4 + 9 + 16 + 25 + 36) = \frac{91}{6}
$$

Now, calculate the variance:
$$
Var(X) = E[X^2] - (E[X])^2 = \frac{91}{6} - (3.5)^2
$$
$$
Var(X) = \frac{91}{6} - (12.25) = \frac{91}{6} - \frac{49}{4} = \frac{182 - 147}{12} = \frac{35}{12} \approx 2.917
$$

**Example 2: Number of Defective Items (Continued)**

Using the defective items example ($E[X] = 0.3$):

Using Formula 2 (computational formula):
First, calculate $E[X^2]$:
$$
E[X^2] = (0^2 \times 0.729) + (1^2 \times 0.243) + (2^2 \times 0.027) + (3^2 \times 0.001)
$$
$$
E[X^2] = (0 \times 0.729) + (1 \times 0.243) + (4 \times 0.027) + (9 \times 0.001)
$$
$$
E[X^2] = 0 + 0.243 + 0.108 + 0.009 = 0.36
$$

Now, calculate the variance:
$$
Var(X) = E[X^2] - (E[X])^2 = 0.36 - (0.3)^2
$$
$$
Var(X) = 0.36 - 0.09 = 0.27
$$

The variance in the number of defective items is 0.27.

---

### 3. Standard Deviation

#### 3.1 Definition

The **standard deviation**, denoted as $\sigma$ or $SD(X)$, is the square root of the variance.

**Key Concept:** The standard deviation is a more interpretable measure of spread than variance because it is in the same units as the original random variable. It represents the typical deviation of a value from the mean.

#### 3.2 Formula

$$
\sigma = \sqrt{Var(X)} = \sqrt{\sigma^2}
$$

#### 3.3 Examples

**Example 1: Rolling a Fair Die (Continued)**

For the fair die, $Var(X) = \frac{35}{12}$.
$$
\sigma = \sqrt{\frac{35}{12}} \approx \sqrt{2.917} \approx 1.708
$$
The standard deviation of the outcome of rolling a fair die is approximately 1.708.

**Example 2: Number of Defective Items (Continued)**

For the defective items, $Var(X) = 0.27$.
$$
\sigma = \sqrt{0.27} \approx 0.520
$$
The standard deviation of the number of defective items is approximately 0.520.

---

### 4. Application in Physical Science

The concepts of mean and variance are fundamental in many areas of physical science:

*   **Experimental Measurements:** The mean of repeated measurements gives an estimate of the true value, while the variance (or standard deviation) quantifies the uncertainty or error in the measurements.
*   **Statistical Mechanics:** The distribution of energies of particles in a system can be characterized by its mean and variance, providing insights into the system's thermodynamic properties.
*   **Signal Processing:** The mean of a signal can represent its DC component, while the variance can indicate the power or noise level.
*   **Probability Models:** Many physical phenomena are modeled using probability distributions (e.g., Poisson, Gaussian). The mean and variance are key parameters of these distributions.

**Example: Radioactive Decay**

Suppose a radioactive source emits particles at an average rate of 5 particles per second. This can be modeled by a Poisson distribution.
*   If $X$ is the number of particles emitted in one second, then $E[X] = 5$.
*   For a Poisson distribution, the variance is equal to the mean: $Var(X) = E[X] = 5$.
*   The standard deviation is $\sigma = \sqrt{5} \approx 2.236$.

This tells us that, on average, 5 particles are emitted per second, and the typical deviation from this average is about 2.236 particles.

---

### Practice Questions

1.  A spinner is divided into four equal sectors labeled 1, 2, 3, and 4. The spinner is spun twice. Let $X$ be the sum of the outcomes of the two spins. Construct the probability distribution for $X$ and calculate its mean and variance.

2.  A company manufactures light bulbs. The probability that a randomly selected light bulb is defective is 0.05. If a sample of 10 light bulbs is taken, let $X$ be the number of defective light bulbs in the sample. Assume the number of defectives follows a Binomial distribution.
    a.  Calculate the mean number of defective light bulbs.
    b.  Calculate the variance of the number of defective light bulbs.
    c.  Calculate the standard deviation.

3.  Consider the following probability distribution for a discrete random variable $Y$:

    | $y$   | $P(Y=y)$ |
    | :---- | :------- |
    | 0     | 0.1      |
    | 1     | 0.3      |
    | 2     | 0.4      |
    | 3     | 0.2      |

    Calculate the mean, variance, and standard deviation of $Y$.

---

### Answers to Practice Questions

**1. Spinner Problem**

The possible outcomes for a single spin are {1, 2, 3, 4}, each with probability $\frac{1}{4}$.
When spinning twice, the possible sums $X$ range from $1+1=2$ to $4+4=8$.

To construct the probability distribution, we can list all 16 possible pairs of outcomes and their sums:
(1,1)=2, (1,2)=3, (1,3)=4, (1,4)=5
(2,1)=3, (2,2)=4, (2,3)=5, (2,4)=6
(3,1)=4, (3,2)=5, (3,3)=6, (3,4)=7
(4,1)=5, (4,2)=6, (4,3)=7, (4,4)=8

Now, count the frequency of each sum and divide by 16 to get the probabilities:

| $x$ | Frequency | $P(X=x)$ |
| :-- | :-------- | :------- |
| 2   | 1         | $1/16$   |
| 3   | 2         | $2/16$   |
| 4   | 3         | $3/16$   |
| 5   | 4         | $4/16$   |
| 6   | 3         | $3/16$   |
| 7   | 2         | $2/16$   |
| 8   | 1         | $1/16$   |

**Mean ($E[X]$):**
$E[X] = (2 \times \frac{1}{16}) + (3 \times \frac{2}{16}) + (4 \times \frac{3}{16}) + (5 \times \frac{4}{16}) + (6 \times \frac{3}{16}) + (7 \times \frac{2}{16}) + (8 \times \frac{1}{16})$
$E[X] = \frac{1}{16} (2 + 6 + 12 + 20 + 18 + 14 + 8) = \frac{80}{16} = 5$

**Variance ($Var(X)$):**
Using the computational formula $Var(X) = E[X^2] - (E[X])^2$.
First, calculate $E[X^2]$:
$E[X^2] = (2^2 \times \frac{1}{16}) + (3^2 \times \frac{2}{16}) + (4^2 \times \frac{3}{16}) + (5^2 \times \frac{4}{16}) + (6^2 \times \frac{3}{16}) + (7^2 \times \frac{2}{16}) + (8^2 \times \frac{1}{16})$
$E[X^2] = \frac{1}{16} (4 \times 1 + 9 \times 2 + 16 \times 3 + 25 \times 4 + 36 \times 3 + 49 \times 2 + 64 \times 1)$
$E[X^2] = \frac{1}{16} (4 + 18 + 48 + 100 + 108 + 98 + 64) = \frac{440}{16} = 27.5$

$Var(X) = 27.5 - (5)^2 = 27.5 - 25 = 2.5$

**2. Light Bulb Problem**

This is a Binomial distribution with $n=10$ (number of trials) and $p=0.05$ (probability of success/defective). Let $X \sim Binomial(n=10, p=0.05)$.

a.  **Mean:** For a Binomial distribution, $E[X] = np$.
    $E[X] = 10 \times 0.05 = 0.5$

b.  **Variance:** For a Binomial distribution, $Var(X) = np(1-p)$.
    $Var(X) = 10 \times 0.05 \times (1-0.05) = 10 \times 0.05 \times 0.95 = 0.5 \times 0.95 = 0.475$

c.  **Standard Deviation:** $\sigma = \sqrt{Var(X)}$.
    $\sigma = \sqrt{0.475} \approx 0.689$

**3. Probability Distribution Problem**

| $y$   | $P(Y=y)$ | $y \times P(Y=y)$ | $y^2 \times P(Y=y)$ |
| :---- | :------- | :---------------- | :------------------ |
| 0     | 0.1      | $0 \times 0.1 = 0$    | $0^2 \times 0.1 = 0$    |
| 1     | 0.3      | $1 \times 0.3 = 0.3$  | $1^2 \times 0.3 = 0.3$  |
| 2     | 0.4      | $2 \times 0.4 = 0.8$  | $2^2 \times 0.4 = 1.6$  |
| 3     | 0.2      | $3 \times 0.2 = 0.6$  | $3^2 \times 0.2 = 1.8$  |
| **Sum** | **1.0**  | **1.7**           | **3.7**             |

**Mean ($E[Y]$):**
Sum of the column "$y \times P(Y=y)$" = 1.7

**$E[Y^2]$:**
Sum of the column "$y^2 \times P(Y=y)$" = 3.7

**Variance ($Var(Y)$):**
$Var(Y) = E[Y^2] - (E[Y])^2 = 3.7 - (1.7)^2$
$Var(Y) = 3.7 - 2.89 = 0.81$

**Standard Deviation ($\sigma$):**
$\sigma = \sqrt{Var(Y)} = \sqrt{0.81} = 0.9$

---

### Important Points to Remember

*   **Mean ($\mu$ or $E[X]$):** The average value of a random variable, calculated as the sum of each value multiplied by its probability. It represents the central tendency.
*   **Variance ($\sigma^2$ or $Var(X)$):** A measure of the spread or dispersion of a random variable's values around the mean. It's the expected value of the squared deviation from the mean.
*   **Computational Formula for Variance:** $Var(X) = E[X^2] - (E[X])^2$ is often more practical for calculations.
*   **Standard Deviation ($\sigma$):** The square root of the variance. It's in the same units as the random variable and provides a more intuitive measure of spread.
*   **Interpretation:** A higher variance/standard deviation means the data is more spread out; a lower variance/standard deviation means the data is clustered closer to the mean.
*   **Applications:** Mean and variance are crucial for understanding experimental errors, system behavior, and making predictions in physical sciences.

---
