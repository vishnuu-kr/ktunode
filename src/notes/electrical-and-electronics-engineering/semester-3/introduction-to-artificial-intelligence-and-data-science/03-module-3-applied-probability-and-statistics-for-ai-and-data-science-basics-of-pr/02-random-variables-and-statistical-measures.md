---
title: "random variables and statistical measures"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 3: Applied Probability and Statistics for AI and Data Science : Basics of probability"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35b9b"
status: "completed"
scrapedAt: "2026-05-23T16:14:08.574Z"
---
## Module 3: Applied Probability and Statistics for AI and Data Science - Basics of Probability

### Topic: Random Variables and Statistical Measures

This module focuses on understanding the fundamental building blocks of probability and statistics, which are crucial for AI and Data Science. We will delve into the concepts of random variables and the various statistical measures used to describe and analyze data.

---

### 1. Random Variables

**Definition:** A **random variable** is a variable whose value is a numerical outcome of a random phenomenon. It essentially maps the outcomes of a random experiment to real numbers.

**Key Concepts:**

*   **Random Experiment:** An experiment whose outcome cannot be predicted with certainty, but the set of possible outcomes is known.
    *   **Example:** Tossing a coin, rolling a die, measuring the height of a person.
*   **Sample Space ($\Omega$):** The set of all possible outcomes of a random experiment.
    *   **Example:** For a coin toss, $\Omega = \{ \text{Heads, Tails} \}$. For rolling a die, $\Omega = \{1, 2, 3, 4, 5, 6\}$.
*   **Event:** A subset of the sample space. An event is a collection of outcomes that can occur.
    *   **Example:** For a die roll, the event of getting an even number is $\{2, 4, 6\}$.
*   **Mapping Outcomes to Numbers:** Random variables assign numerical values to these outcomes.

**Types of Random Variables:**

*   **Discrete Random Variable:** A random variable that can only take on a finite number of values or a countably infinite number of values. The values are typically integers.
    *   **Examples:**
        *   The number of heads in 3 coin tosses (can be 0, 1, 2, 3).
        *   The number of customers arriving at a store in an hour (can be 0, 1, 2, ...).
*   **Continuous Random Variable:** A random variable that can take on any value within a given range or interval. There are infinitely many possible values between any two given values.
    *   **Examples:**
        *   The height of a randomly selected person (can be any value within a reasonable range, e.g., 1.5m to 2.0m).
        *   The temperature of a room.
        *   The time it takes for a machine to fail.

**Representing Probability Distributions:**

*   **For Discrete Random Variables:**
    *   **Probability Mass Function (PMF):** For a discrete random variable $X$, the PMF, denoted by $P(X=x)$, gives the probability that $X$ takes on a specific value $x$.
        *   **Properties:**
            *   $0 \le P(X=x) \le 1$ for all $x$.
            *   $\sum_{x} P(X=x) = 1$, where the sum is over all possible values of $x$.
        *   **Example (Die Roll):** Let $X$ be the outcome of a fair die roll.
            *   $P(X=1) = 1/6$
            *   $P(X=2) = 1/6$
            *   ...
            *   $P(X=6) = 1/6$
            *   $\sum_{i=1}^{6} P(X=i) = 6 \times (1/6) = 1$.
*   **For Continuous Random Variables:**
    *   **Probability Density Function (PDF):** For a continuous random variable $X$, the PDF, denoted by $f(x)$, describes the relative likelihood that $X$ will be close to a specific value $x$. The probability of $X$ falling within an interval $[a, b]$ is given by the integral of the PDF over that interval.
        *   **Properties:**
            *   $f(x) \ge 0$ for all $x$.
            *   $\int_{-\infty}^{\infty} f(x) dx = 1$.
        *   **Important Note:** For continuous random variables, the probability of $X$ taking any *specific* value is zero, i.e., $P(X=x) = 0$. Probabilities are defined over intervals.
        *   **Example (Height):** While we won't define a specific PDF here, imagine a bell-shaped curve representing the distribution of human heights, with the area under the curve between two heights representing the probability of a person's height falling within that range.

**Cumulative Distribution Function (CDF):**

*   **Definition:** The CDF of a random variable $X$, denoted by $F(x)$, gives the probability that $X$ takes on a value less than or equal to $x$. $F(x) = P(X \le x)$.
*   **Properties:**
    *   $0 \le F(x) \le 1$ for all $x$.
    *   $F(x)$ is non-decreasing.
    *   $\lim_{x \to -\infty} F(x) = 0$ and $\lim_{x \to \infty} F(x) = 1$.
*   **For Discrete Random Variables:** $F(x) = \sum_{t \le x} P(X=t)$.
*   **For Continuous Random Variables:** $F(x) = \int_{-\infty}^{x} f(t) dt$.
*   **Relationship between PDF and CDF (Continuous):** $f(x) = \frac{d}{dx} F(x)$.
*   **Calculating Interval Probabilities (Continuous):** $P(a < X \le b) = F(b) - F(a)$.

---

### 2. Statistical Measures

Statistical measures help us summarize and understand the key characteristics of a random variable or a dataset.

**A. Measures of Central Tendency:** These measures indicate the typical or central value of a dataset.

*   **Expected Value (Mean):** The average value of a random variable over many repetitions of the experiment. It's a weighted average of the possible values, where the weights are the probabilities.
    *   **For Discrete Random Variable $X$:** $E[X] = \mu = \sum_{x} x P(X=x)$
    *   **For Continuous Random Variable $X$:** $E[X] = \mu = \int_{-\infty}^{\infty} x f(x) dx$
    *   **Interpretation:** The expected value represents the long-run average.
    *   **Example (Die Roll):** $E[X] = 1(1/6) + 2(1/6) + 3(1/6) + 4(1/6) + 5(1/6) + 6(1/6) = (1+2+3+4+5+6)/6 = 21/6 = 3.5$.
    *   **Reference (Gupta & Kapoor):** This is a fundamental concept in descriptive statistics, often referred to as the mean of the probability distribution.
*   **Median:** The value that divides the probability distribution into two equal halves. 50% of the values are below the median, and 50% are above.
    *   **For Discrete Random Variable $X$:** The median $m$ is a value such that $P(X \le m) \ge 0.5$ and $P(X \ge m) \ge 0.5$.
    *   **For Continuous Random Variable $X$:** The median $m$ is a value such that $F(m) = 0.5$.
    *   **Example (Die Roll):** For a die roll, the median is also 3.5. $P(X \le 3) = 3/6 = 0.5$, and $P(X \ge 4) = 3/6 = 0.5$.
    *   **Robustness:** The median is less sensitive to outliers than the mean.
*   **Mode:** The value that occurs most frequently in a dataset or has the highest probability/density.
    *   **For Discrete Random Variable $X$:** The mode is the value $x$ that maximizes $P(X=x)$.
    *   **For Continuous Random Variable $X$:** The mode is the value $x$ that maximizes $f(x)$.
    *   **Example (Die Roll):** For a fair die roll, every outcome has the same probability, so there is no unique mode. For a biased die that lands on '6' more often, '6' would be the mode.
    *   **Multimodal Distributions:** Distributions can have more than one mode.

**B. Measures of Dispersion (Variability):** These measures indicate the spread or variability of the data around the central tendency.

*   **Variance:** A measure of how spread out the data is from the mean. It's the average of the squared differences from the mean.
    *   **Formula:** $Var(X) = \sigma^2 = E[(X - \mu)^2]$
    *   **Alternative Formula:** $Var(X) = E[X^2] - (E[X])^2$
    *   **Interpretation:** A higher variance means the data is more spread out.
    *   **Example (Die Roll):**
        *   $E[X^2] = 1^2(1/6) + 2^2(1/6) + 3^2(1/6) + 4^2(1/6) + 5^2(1/6) + 6^2(1/6)$
        *   $E[X^2] = (1 + 4 + 9 + 16 + 25 + 36)/6 = 91/6$
        *   $Var(X) = 91/6 - (3.5)^2 = 91/6 - 12.25 = 15.1667 - 12.25 = 2.9167$.
    *   **Units:** The units of variance are the square of the units of the random variable.
    *   **Reference (Gupta & Kapoor):** Variance is a crucial measure of dispersion, quantifying the average squared deviation from the mean.
*   **Standard Deviation:** The square root of the variance. It is often preferred because it has the same units as the random variable, making it more interpretable.
    *   **Formula:** $\sigma = \sqrt{Var(X)} = \sqrt{E[(X - \mu)^2]}$
    *   **Interpretation:** The standard deviation gives a typical deviation from the mean. A value of $\pm 1$ standard deviation from the mean often encompasses a significant portion of the data, especially in normal distributions.
    *   **Example (Die Roll):** $\sigma = \sqrt{2.9167} \approx 1.708$.
    *   **Reference (Gupta & Kapoor):** Standard deviation provides a more direct measure of spread in the original units of measurement.
*   **Interquartile Range (IQR):** The difference between the third quartile ($Q_3$) and the first quartile ($Q_1$).
    *   **Definition:**
        *   $Q_1$ (First Quartile): The value below which 25% of the data falls ($F(Q_1) = 0.25$).
        *   $Q_3$ (Third Quartile): The value below which 75% of the data falls ($F(Q_3) = 0.75$).
    *   **Formula:** $IQR = Q_3 - Q_1$.
    *   **Interpretation:** The IQR represents the range of the middle 50% of the data. It's a robust measure of spread, unaffected by extreme outliers.
    *   **Reference (Miller):** The IQR is a key statistic for understanding the spread of the central mass of data.

**C. Measures of Shape:** These measures describe the shape of the probability distribution.

*   **Skewness:** A measure of the asymmetry of the probability distribution of a real-valued random variable about its mean.
    *   **Interpretation:**
        *   **Zero Skewness:** The distribution is perfectly symmetric (e.g., normal distribution).
        *   **Positive Skewness (Right Skewed):** The tail on the right side of the distribution is longer or fatter than the left side. The mean is typically greater than the median.
        *   **Negative Skewness (Left Skewed):** The tail on the left side of the distribution is longer or fatter than the right side. The mean is typically less than the median.
    *   **Formula (for a sample):** Often calculated using the third standardized moment.
    *   **Reference (Evans & Rosenthal):** Skewness is a vital descriptor of the symmetry of a distribution, indicating the presence of long tails.
*   **Kurtosis:** A measure of whether the data are heavy-tailed or light-tailed relative to a normal distribution. It quantices the "peakedness" of the distribution.
    *   **Interpretation:**
        *   **Mesokurtic (Kurtosis = 3):** Similar peak and tails to a normal distribution.
        *   **Leptokurtic (Kurtosis > 3):** Heavier tails and a sharper peak than a normal distribution. More extreme values are likely.
        *   **Platykurtic (Kurtosis < 3):** Lighter tails and a flatter peak than a normal distribution. Extreme values are less likely.
    *   **Excess Kurtosis:** Often reported as Kurtosis - 3, where 0 indicates a normal distribution's kurtosis.
    *   **Reference (Miller):** Kurtosis quantifies the propensity of a distribution to produce outliers.

**D. Moments:** A set of statistical quantities that capture information about the shape of a probability distribution.

*   **Raw Moments:** $E[X^k]$ for $k = 1, 2, 3, ...$.
    *   $E[X^1]$ is the mean.
    *   $E[X^2]$ is related to variance.
*   **Central Moments:** $E[(X - \mu)^k]$ for $k = 1, 2, 3, ...$.
    *   The first central moment ($k=1$) is always 0.
    *   The second central moment ($k=2$) is the variance.
    *   The third central moment is related to skewness.
    *   The fourth central moment is related to kurtosis.
*   **Reference (Gupta & Kapoor):** Moments are fundamental in characterizing probability distributions.

**E. Covariance and Correlation (for multiple random variables):** While this module focuses on basics, these are important extensions.

*   **Covariance:** Measures the joint variability of two random variables.
    *   $Cov(X, Y) = E[(X - \mu_X)(Y - \mu_Y)]$
    *   **Interpretation:** Positive covariance means they tend to increase together, negative means one increases as the other decreases.
*   **Correlation Coefficient:** A standardized version of covariance, ranging from -1 to +1.
    *   $\rho(X, Y) = \frac{Cov(X, Y)}{\sigma_X \sigma_Y}$
    *   **Interpretation:** +1 means perfect positive linear correlation, -1 means perfect negative linear correlation, 0 means no linear correlation.
    *   **Reference (Miller):** Correlation is crucial for understanding relationships between variables in data science.

---

### 3. Key Probability Distributions (Examples)

Understanding common probability distributions is essential for modeling real-world phenomena.

*   **Bernoulli Distribution:** For a single trial with two possible outcomes (success/failure).
    *   PMF: $P(X=1) = p$, $P(X=0) = 1-p$.
    *   $E[X] = p$
    *   $Var(X) = p(1-p)$
    *   **Example:** A single coin flip (Heads = 1, Tails = 0).
*   **Binomial Distribution:** The number of successes in a fixed number of independent Bernoulli trials.
    *   PMF: $P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$, for $k=0, 1, ..., n$.
    *   $E[X] = np$
    *   $Var(X) = np(1-p)$
    *   **Example:** The number of heads in 10 coin flips.
*   **Poisson Distribution:** The probability of a given number of events occurring in a fixed interval of time or space if these events occur with a known constant mean rate and independently of the time since the last event.
    *   PMF: $P(X=k) = \frac{\lambda^k e^{-\lambda}}{k!}$, for $k=0, 1, 2, ...$
    *   $E[X] = \lambda$
    *   $Var(X) = \lambda$
    *   **Example:** The number of customer arrivals per hour at a store.
*   **Uniform Distribution:** All values in a given interval are equally likely.
    *   **Discrete Uniform:** Each outcome has an equal probability. (e.g., fair die roll).
    *   **Continuous Uniform:** PDF $f(x) = \frac{1}{b-a}$ for $a \le x \le b$, and 0 otherwise.
        *   $E[X] = \frac{a+b}{2}$
        *   $Var(X) = \frac{(b-a)^2}{12}$
    *   **Example:** Randomly picking a number between 0 and 1.
*   **Normal Distribution (Gaussian Distribution):** Bell-shaped, symmetric distribution, fundamental in statistics.
    *   PDF: $f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}(\frac{x-\mu}{\sigma})^2}$
    *   $E[X] = \mu$
    *   $Var(X) = \sigma^2$
    *   **Example:** Heights of people, measurement errors.
    *   **Central Limit Theorem (Mention):** A key theorem stating that the distribution of the sample mean will approach a normal distribution as the sample size increases, regardless of the population distribution. This is vital for inference.
    *   **Reference (Deisenroth, Faisal, Ong):** The normal distribution and its properties are foundational for many machine learning algorithms and statistical analyses.

---

### 4. Practice Questions and Exercises

**Question 1 (Discrete Random Variable):**
Consider a random variable $X$ representing the number of defective items in a sample of 5 items from a production line. The probability of an item being defective is 0.1. Assuming the defects are independent, this follows a Binomial distribution $B(n=5, p=0.1)$.

a. What is the probability that exactly 2 items are defective?
b. What is the expected number of defective items?
c. What is the variance of the number of defective items?

**Answer 1:**
This is a Binomial distribution with $n=5$ and $p=0.1$.
a. $P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$
   $P(X=2) = \binom{5}{2} (0.1)^2 (0.9)^{5-2} = 10 \times 0.01 \times (0.9)^3 = 10 \times 0.01 \times 0.729 = 0.0729$
b. $E[X] = np = 5 \times 0.1 = 0.5$
c. $Var(X) = np(1-p) = 5 \times 0.1 \times (1-0.1) = 5 \times 0.1 \times 0.9 = 0.45$

**Question 2 (Continuous Random Variable):**
Let $Y$ be a continuous random variable uniformly distributed between 0 and 10. Its PDF is $f(y) = 1/10$ for $0 \le y \le 10$, and 0 otherwise.

a. Calculate the expected value of $Y$.
b. Calculate the variance of $Y$.
c. What is the probability that $Y$ is between 3 and 7 (inclusive of 3, exclusive of 7)?

**Answer 2:**
This is a continuous Uniform distribution with $a=0$ and $b=10$.
a. $E[Y] = \frac{a+b}{2} = \frac{0+10}{2} = 5$
b. $Var(Y) = \frac{(b-a)^2}{12} = \frac{(10-0)^2}{12} = \frac{100}{12} = \frac{25}{3} \approx 8.33$
c. $P(3 \le Y < 7) = \int_{3}^{7} f(y) dy = \int_{3}^{7} \frac{1}{10} dy = \frac{1}{10} [y]_{3}^{7} = \frac{1}{10} (7 - 3) = \frac{4}{10} = 0.4$
   Alternatively, $P(3 \le Y < 7) = F(7) - F(3)$. The CDF is $F(y) = y/10$ for $0 \le y \le 10$.
   $F(7) - F(3) = 7/10 - 3/10 = 4/10 = 0.4$.

**Question 3 (Statistical Measures - Interpretation):**
Suppose we have two datasets:
Dataset A: [10, 12, 11, 13, 14]
Dataset B: [5, 20, 10, 15, 25]

a. Calculate the mean and standard deviation for both datasets.
b. Based on your calculations, which dataset has more variability? Explain why.

**Answer 3:**
a.
Dataset A:
Mean ($\bar{x}_A$): (10+12+11+13+14)/5 = 60/5 = 12
To calculate sample standard deviation (s), we first find variance:
$s_A^2 = \frac{\sum(x_i - \bar{x}_A)^2}{n-1}$
$s_A^2 = \frac{(10-12)^2 + (12-12)^2 + (11-12)^2 + (13-12)^2 + (14-12)^2}{5-1}$
$s_A^2 = \frac{(-2)^2 + 0^2 + (-1)^2 + 1^2 + 2^2}{4} = \frac{4 + 0 + 1 + 1 + 4}{4} = \frac{10}{4} = 2.5$
$s_A = \sqrt{2.5} \approx 1.58$

Dataset B:
Mean ($\bar{x}_B$): (5+20+10+15+25)/5 = 75/5 = 15
$s_B^2 = \frac{(5-15)^2 + (20-15)^2 + (10-15)^2 + (15-15)^2 + (25-15)^2}{5-1}$
$s_B^2 = \frac{(-10)^2 + 5^2 + (-5)^2 + 0^2 + 10^2}{4} = \frac{100 + 25 + 25 + 0 + 100}{4} = \frac{250}{4} = 62.5$
$s_B = \sqrt{62.5} \approx 7.91$

b. Dataset B has more variability. The standard deviation for Dataset B ($s_B \approx 7.91$) is significantly larger than for Dataset A ($s_A \approx 1.58$). This indicates that the values in Dataset B are, on average, further away from their mean compared to the values in Dataset A. Dataset A is more clustered around its mean.

---

### 5. Important Points to Remember

*   **Random variables are the bridge** between random phenomena and mathematical analysis in AI and Data Science.
*   **Discrete vs. Continuous:** Understanding the difference is crucial for selecting the correct probability distribution and statistical measures.
*   **PMF vs. PDF:** PMF is for discrete variables (probabilities at specific points), PDF is for continuous variables (probability density over intervals).
*   **CDF:** Provides the cumulative probability up to a certain value and is useful for both discrete and continuous variables.
*   **Expected Value ($\mu$):** Represents the long-run average.
*   **Variance ($\sigma^2$) and Standard Deviation ($\sigma$):** Quantify the spread or dispersion of data. A larger $\sigma$ means more variability.
*   **Median vs. Mean:** The median is robust to outliers, while the mean is affected by them.
*   **Skewness and Kurtosis:** Describe the shape of a distribution and indicate potential biases or the presence of extreme values.
*   **Common Distributions:** Familiarity with Bernoulli, Binomial, Poisson, Uniform, and Normal distributions is vital for modeling various real-world scenarios.
*   **The Central Limit Theorem** is a cornerstone of statistical inference and plays a crucial role in many machine learning applications.

---

### 6. Alignment with Course Outcomes

*   **CO1 (Apply ML algorithms):** Understanding probability distributions and statistical measures is foundational for many ML algorithms, such as Naive Bayes (based on probability), and for evaluating model performance.
*   **CO2 (Apply advanced mathematical concepts):** Concepts like expected value and variance are directly derived from probability theory and are essential for understanding linear algebra applications in ML (e.g., principal component analysis, which deals with variance).
*   **CO3 (Analyze and interpret data using statistical methods):** This module directly addresses descriptive statistics (mean, variance, median, IQR), correlation (though covered later, it builds on basic statistical measures), and prepares for regression analysis.
*   **CO4 (Integrate statistical approaches and ML techniques):** This module provides the statistical bedrock upon which ML techniques are built. For example, understanding probability distributions helps in choosing appropriate models and evaluating their uncertainty.

---
