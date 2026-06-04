---
title: "Fundamentals of estimation theory"
subject: "ESTIMATION AND DETECTION"
module: "Module 1: Statistical Estimation Theory I"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780febc5"
status: "completed"
scrapedAt: "2026-05-23T17:56:39.595Z"
---
# ESTIMATION AND DETECTION

## Module 1: Statistical Estimation Theory I

### Topic: Fundamentals of Estimation Theory

**Learning Outcomes:**

*   Understand the basic concepts and goals of estimation theory.
*   Define and differentiate between point estimation and interval estimation.
*   Identify and explain the properties of good estimators (unbiasedness, efficiency, consistency, sufficiency).
*   Understand the role of probability distributions in estimation.
*   Introduce the concept of likelihood functions and maximum likelihood estimation (MLE).

**Course Outcomes Addressed:**

*   **CO1 (K2):** Summarize the fundamentals of statistical estimation principles used in various engineering problems.
*   **CO2 (K3):** Apply different types of estimation algorithms in engineering applications. (Foundation for applying algorithms will be laid here)

---

### 1. Introduction to Estimation Theory

**Goal of Estimation:**
The fundamental goal of estimation theory is to determine the unknown parameters of a statistical model based on observed data. This is crucial in many engineering applications where we need to infer characteristics of a system or environment from measurements.

**Key Concepts:**

*   **Statistical Model:** A mathematical description of a system or phenomenon that includes unknown parameters.
*   **Observed Data (Sample):** Measurements or observations obtained from the system.
*   **Unknown Parameters:** The quantities we aim to estimate. These are typically represented by Greek letters (e.g., $\theta$, $\mu$, $\sigma^2$).
*   **Estimator:** A function of the observed data that provides an estimate of the unknown parameter. It is a random variable because it depends on the random sample.
*   **Estimate:** A specific numerical value of the estimator obtained from a particular set of observed data.

**Types of Estimation:**

*   **Point Estimation:** Aiming to find a single, best numerical value for the unknown parameter.
    *   *Example:* Estimating the average height of a population based on a sample of heights. The estimate might be 1.75 meters.
*   **Interval Estimation:** Aiming to find a range of values (an interval) within which the unknown parameter is likely to lie with a certain degree of confidence.
    *   *Example:* Estimating the average height of a population. The interval estimate might be [1.72 meters, 1.78 meters] with 95% confidence.

**Kay's Perspective (Vol I, Chapter 1):**
Kay emphasizes that estimation is about "finding the value of a parameter from observations." He introduces the concept of a **statistical model** as a probability distribution that depends on an unknown parameter $\theta$. The observed data, a vector $X = [x_1, x_2, \dots, x_N]$, is assumed to be drawn from this distribution. The goal is to find an estimator $\hat{\theta}(X)$ that approximates $\theta$.

---

### 2. Properties of Estimators

A good estimator should possess certain desirable properties. These properties help us evaluate and compare different estimation methods.

**Key Properties:**

*   **Unbiasedness:**
    *   **Definition:** An estimator $\hat{\theta}(X)$ is said to be unbiased for $\theta$ if its expected value (averaged over all possible samples) is equal to the true value of the parameter.
    *   **Mathematical Expression:** $E[\hat{\theta}(X)] = \theta$
    *   **Intuition:** On average, the estimator does not systematically overestimate or underestimate the true parameter.
    *   **Bias:** The difference between the expected value of the estimator and the true parameter: $Bias(\hat{\theta}) = E[\hat{\theta}(X)] - \theta$. An unbiased estimator has zero bias.
    *   *Example (Sample Mean):* For estimating the population mean $\mu$ from a sample $X = [x_1, \dots, x_N]$, the sample mean $\bar{x} = \frac{1}{N}\sum_{i=1}^N x_i$ is an unbiased estimator.
        *   $E[\bar{x}] = E[\frac{1}{N}\sum_{i=1}^N x_i] = \frac{1}{N}\sum_{i=1}^N E[x_i]$. If $E[x_i] = \mu$ for all $i$, then $E[\bar{x}] = \frac{1}{N}\sum_{i=1}^N \mu = \frac{1}{N}(N\mu) = \mu$.

*   **Efficiency:**
    *   **Definition:** An estimator is efficient if it has the minimum possible variance among all unbiased estimators.
    *   **Intuition:** An efficient estimator provides estimates that are as close as possible to the true parameter value on average, without systematic error. Lower variance means less spread in the estimates across different samples.
    *   **Relationship to Cramer-Rao Lower Bound (CRLB):** The CRLB provides a lower bound on the variance of any unbiased estimator. An unbiased estimator that achieves this lower bound is called an **efficient estimator**. (This will be covered in more detail in later topics).
    *   *Example:* The sample mean is often an efficient estimator for the mean of a normal distribution.

*   **Consistency:**
    *   **Definition:** An estimator is consistent if it converges in probability to the true parameter value as the sample size $N$ increases.
    *   **Mathematical Expression:** $\lim_{N \to \infty} P(|\hat{\theta}(X) - \theta| < \epsilon) = 1$ for any $\epsilon > 0$.
    *   **Intuition:** As we gather more data, the estimate becomes more and more accurate.
    *   *Example:* The sample mean is a consistent estimator for the population mean. As $N \to \infty$, the sample mean will almost surely equal the population mean.

*   **Sufficiency:**
    *   **Definition:** An estimator (or a statistic) is sufficient if it captures all the information about the parameter $\theta$ contained in the entire sample $X$. No other statistic derived from $X$ can provide additional information about $\theta$.
    *   **Intuition:** If an estimator is sufficient, we don't need to look at the individual data points; the sufficient statistic is all we need.
    *   **Fisher-Neyman Factorization Theorem:** A key tool for identifying sufficient statistics. A statistic $T(X)$ is sufficient for $\theta$ if the joint probability density function $f(X|\theta)$ can be factored into $f(X|\theta) = g(T(X)|\theta) h(X)$, where $g$ depends on $\theta$ only through $T(X)$ and $h$ does not depend on $\theta$.
    *   *Example:* For estimating the mean $\mu$ of a normal distribution, the sample mean $\bar{x}$ is a sufficient statistic.

**Important Points to Remember:**

*   Unbiasedness is desirable, but not always achievable or the most important property.
*   Efficiency is crucial for minimizing estimation error.
*   Consistency ensures that more data leads to better estimates.
*   Sufficiency is a theoretical property that simplifies the estimation problem by reducing the data to a single statistic.

---

### 3. Role of Probability Distributions

The choice of probability distribution for the data is fundamental to estimation. The distribution describes how the data is generated and influences the properties of estimators and the likelihood of obtaining certain observed values.

**Key Concepts:**

*   **Probability Density Function (PDF) / Probability Mass Function (PMF):** $f(x|\theta)$ or $p(x|\theta)$, which describes the probability of observing a specific value (or range of values) of the data $x$ given the parameter $\theta$.
*   **Likelihood Function:** A function of the parameter $\theta$ for a given set of observed data $X$. It is denoted as $L(\theta|X)$ and is numerically equal to the PDF (or PMF) of the data, but viewed as a function of $\theta$.
    *   **Mathematical Expression (for i.i.d. data):** $L(\theta|X) = f(x_1|\theta) f(x_2|\theta) \dots f(x_N|\theta) = \prod_{i=1}^N f(x_i|\theta)$

**Kay's Perspective (Vol I, Chapter 2):**
Kay dedicates a significant portion of his early chapters to probability distributions commonly encountered in signal processing, such as Gaussian, Exponential, Uniform, Binomial, and Poisson. Understanding these distributions is essential for constructing likelihood functions and applying estimation techniques.

**Example:**
Suppose we observe $N$ independent samples $X = [x_1, \dots, x_N]$ from a Gaussian distribution with unknown mean $\mu$ and known variance $\sigma^2$.
*   **PDF:** $f(x|\mu, \sigma^2) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$
*   **Likelihood Function for $\mu$:** $L(\mu|X, \sigma^2) = \prod_{i=1}^N \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x_i-\mu)^2}{2\sigma^2}} = (\frac{1}{2\pi\sigma^2})^{N/2} e^{-\frac{1}{2\sigma^2}\sum_{i=1}^N (x_i-\mu)^2}$

---

### 4. Maximum Likelihood Estimation (MLE)

**Goal:**
To find the parameter value $\hat{\theta}_{MLE}$ that maximizes the likelihood function $L(\theta|X)$. In essence, we are choosing the parameter value that makes the observed data most probable.

**Steps:**

1.  **Define the statistical model and its PDF/PMF.**
2.  **Write down the likelihood function $L(\theta|X)$ for the observed data.** For independent and identically distributed (i.i.d.) data, $L(\theta|X) = \prod_{i=1}^N f(x_i|\theta)$.
3.  **Consider the log-likelihood function:** It is often easier to maximize the logarithm of the likelihood function, $\ln L(\theta|X)$, because products become sums, and derivatives are simpler. Maximizing $\ln L(\theta|X)$ is equivalent to maximizing $L(\theta|X)$ since the logarithm is a monotonically increasing function.
    *   $\ln L(\theta|X) = \sum_{i=1}^N \ln f(x_i|\theta)$
4.  **Find the value of $\theta$ that maximizes $\ln L(\theta|X)$ by taking the derivative with respect to $\theta$ and setting it to zero.**
    *   $\frac{\partial}{\partial \theta} \ln L(\theta|X) = 0$
5.  **Solve the resulting equation for $\theta$ to obtain $\hat{\theta}_{MLE}$.**

**Kay's Perspective (Vol I, Chapter 2):**
Kay dedicates a significant portion to MLE, highlighting its widespread applicability and desirable properties (consistency, asymptotic efficiency, asymptotic normality) under certain conditions.

**Example: MLE for the Mean of a Gaussian Distribution**

Let $X = [x_1, \dots, x_N]$ be i.i.d. samples from a Gaussian distribution with unknown mean $\mu$ and known variance $\sigma^2$.

1.  **PDF:** $f(x|\mu) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$
2.  **Likelihood Function:** $L(\mu|X) = \prod_{i=1}^N \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x_i-\mu)^2}{2\sigma^2}} = (\frac{1}{2\pi\sigma^2})^{N/2} e^{-\frac{1}{2\sigma^2}\sum_{i=1}^N (x_i-\mu)^2}$
3.  **Log-Likelihood Function:**
    $\ln L(\mu|X) = \ln \left( (\frac{1}{2\pi\sigma^2})^{N/2} \right) + \ln \left( e^{-\frac{1}{2\sigma^2}\sum_{i=1}^N (x_i-\mu)^2} \right)$
    $\ln L(\mu|X) = -\frac{N}{2} \ln(2\pi\sigma^2) - \frac{1}{2\sigma^2}\sum_{i=1}^N (x_i-\mu)^2$
4.  **Derivative with respect to $\mu$:**
    $\frac{\partial}{\partial \mu} \ln L(\mu|X) = -\frac{1}{2\sigma^2} \sum_{i=1}^N \frac{\partial}{\partial \mu} (x_i-\mu)^2$
    $\frac{\partial}{\partial \mu} \ln L(\mu|X) = -\frac{1}{2\sigma^2} \sum_{i=1}^N 2(x_i-\mu)(-1)$
    $\frac{\partial}{\partial \mu} \ln L(\mu|X) = \frac{1}{\sigma^2} \sum_{i=1}^N (x_i-\mu)$
5.  **Set derivative to zero and solve for $\mu$:**
    $\frac{1}{\sigma^2} \sum_{i=1}^N (x_i-\mu) = 0$
    $\sum_{i=1}^N (x_i-\mu) = 0$
    $\sum_{i=1}^N x_i - \sum_{i=1}^N \mu = 0$
    $\sum_{i=1}^N x_i - N\mu = 0$
    $N\mu = \sum_{i=1}^N x_i$
    $\mu = \frac{1}{N}\sum_{i=1}^N x_i$

    Therefore, the **MLE for the mean of a Gaussian distribution is the sample mean**: $\hat{\mu}_{MLE} = \bar{x}$.

**Van Trees' Perspective (Vol I, Chapter 2):**
Van Trees also discusses the principle of maximum likelihood as a fundamental approach to estimation, emphasizing its intuitive appeal and strong theoretical justification. He often frames estimation problems in a Bayesian context as well, which we will see later in the course.

---

### 5. Practice Questions and Exercises

**Question 1:**
Let $X = [x_1, x_2, x_3]$ be a sample of size 3 from a Bernoulli distribution with parameter $p$, where $p$ is the probability of success (outcome 1). The PMF is $p(x|p) = p^x (1-p)^{1-x}$ for $x \in \{0, 1\}$.
a) Write down the likelihood function $L(p|X)$.
b) Find the MLE for $p$.

**Question 2:**
Consider estimating the parameter $\lambda$ of a Poisson distribution, whose PMF is $p(x|\lambda) = \frac{\lambda^x e^{-\lambda}}{x!}$ for $x \in \{0, 1, 2, \dots\}$. If you observe the data $X = [2, 3, 1, 2]$, what is the MLE for $\lambda$?

**Question 3:**
Is the sample mean an unbiased estimator for the variance of a Gaussian distribution with unknown mean $\mu$? Explain why or why not.

---

### 6. Answers to Practice Questions

**Answer 1:**
a) The likelihood function is:
$L(p|X) = p(x_1|p) p(x_2|p) p(x_3|p) = [p^{x_1}(1-p)^{1-x_1}] [p^{x_2}(1-p)^{1-x_2}] [p^{x_3}(1-p)^{1-x_3}]$
$L(p|X) = p^{x_1+x_2+x_3} (1-p)^{(1-x_1)+(1-x_2)+(1-x_3)}$
Let $S = x_1+x_2+x_3$ (the number of successes).
$L(p|X) = p^S (1-p)^{3-S}$

b) The log-likelihood function is:
$\ln L(p|X) = S \ln p + (3-S) \ln (1-p)$
To find the MLE, we differentiate with respect to $p$ and set it to zero:
$\frac{\partial}{\partial p} \ln L(p|X) = \frac{S}{p} - \frac{3-S}{1-p}$
Setting the derivative to zero:
$\frac{S}{p} - \frac{3-S}{1-p} = 0$
$\frac{S}{p} = \frac{3-S}{1-p}$
$S(1-p) = p(3-S)$
$S - Sp = 3p - Sp$
$S = 3p$
$p = \frac{S}{3}$
So, the MLE for $p$ is $\hat{p}_{MLE} = \frac{1}{3}\sum_{i=1}^3 x_i$, which is the sample mean of the observed successes.

**Answer 2:**
The data is $X = [2, 3, 1, 2]$. The PMF is $p(x|\lambda) = \frac{\lambda^x e^{-\lambda}}{x!}$.
The likelihood function is:
$L(\lambda|X) = p(2|\lambda) p(3|\lambda) p(1|\lambda) p(2|\lambda)$
$L(\lambda|X) = \frac{\lambda^2 e^{-\lambda}}{2!} \cdot \frac{\lambda^3 e^{-\lambda}}{3!} \cdot \frac{\lambda^1 e^{-\lambda}}{1!} \cdot \frac{\lambda^2 e^{-\lambda}}{2!}$
$L(\lambda|X) = \frac{\lambda^{2+3+1+2} e^{-\lambda-\lambda-\lambda-\lambda}}{2! 3! 1! 2!} = \frac{\lambda^8 e^{-4\lambda}}{24}$

The log-likelihood function is:
$\ln L(\lambda|X) = \ln (\frac{1}{24}) + 8 \ln \lambda - 4\lambda$
Differentiate with respect to $\lambda$:
$\frac{\partial}{\partial \lambda} \ln L(\lambda|X) = \frac{8}{\lambda} - 4$
Set to zero:
$\frac{8}{\lambda} - 4 = 0$
$\frac{8}{\lambda} = 4$
$4\lambda = 8$
$\lambda = 2$
The MLE for $\lambda$ is $\hat{\lambda}_{MLE} = 2$.
This is also the sample mean: $\frac{2+3+1+2}{4} = \frac{8}{4} = 2$.

**Answer 3:**
No, the sample mean is NOT an unbiased estimator for the variance of a Gaussian distribution.
Let the observed data be $X = [x_1, \dots, x_N]$ from $N(\mu, \sigma^2)$. The sample variance is typically defined as $s^2 = \frac{1}{N-1}\sum_{i=1}^N (x_i - \bar{x})^2$.
Let's consider the estimator $\hat{\sigma}^2_{biased} = \frac{1}{N}\sum_{i=1}^N (x_i - \bar{x})^2$.
We know that $\sum_{i=1}^N (x_i - \bar{x})^2 = \sum_{i=1}^N (x_i^2 - 2x_i\bar{x} + \bar{x}^2) = \sum x_i^2 - 2\bar{x}\sum x_i + N\bar{x}^2$.
Since $\sum x_i = N\bar{x}$, this becomes $\sum x_i^2 - 2\bar{x}(N\bar{x}) + N\bar{x}^2 = \sum x_i^2 - 2N\bar{x}^2 + N\bar{x}^2 = \sum x_i^2 - N\bar{x}^2$.
So, $\hat{\sigma}^2_{biased} = \frac{1}{N}(\sum_{i=1}^N x_i^2 - N\bar{x}^2) = \frac{1}{N}\sum x_i^2 - \bar{x}^2$.

Now, let's find the expected value of this biased estimator:
$E[\hat{\sigma}^2_{biased}] = E[\frac{1}{N}\sum x_i^2 - \bar{x}^2]$
$E[\hat{\sigma}^2_{biased}] = \frac{1}{N}\sum E[x_i^2] - E[\bar{x}^2]$
For a Gaussian distribution, $E[x_i^2] = Var(x_i) + (E[x_i])^2 = \sigma^2 + \mu^2$.
Also, $Var(\bar{x}) = E[\bar{x}^2] - (E[\bar{x}])^2$. Since $E[\bar{x}] = \mu$, we have $E[\bar{x}^2] = Var(\bar{x}) + \mu^2$.
For a sample mean, $Var(\bar{x}) = \frac{\sigma^2}{N}$.
So, $E[\bar{x}^2] = \frac{\sigma^2}{N} + \mu^2$.

Substituting these back:
$E[\hat{\sigma}^2_{biased}] = \frac{1}{N} \sum_{i=1}^N (\sigma^2 + \mu^2) - (\frac{\sigma^2}{N} + \mu^2)$
$E[\hat{\sigma}^2_{biased}] = \frac{1}{N} (N\sigma^2 + N\mu^2) - \frac{\sigma^2}{N} - \mu^2$
$E[\hat{\sigma}^2_{biased}] = \sigma^2 + \mu^2 - \frac{\sigma^2}{N} - \mu^2$
$E[\hat{\sigma}^2_{biased}] = \sigma^2 - \frac{\sigma^2}{N} = \sigma^2 (1 - \frac{1}{N}) = \sigma^2 \frac{N-1}{N}$

This shows that the estimator $\frac{1}{N}\sum_{i=1}^N (x_i - \bar{x})^2$ is biased. The unbiased sample variance estimator uses $N-1$ in the denominator:
$E[\frac{1}{N-1}\sum_{i=1}^N (x_i - \bar{x})^2] = E[\frac{N}{N-1} \hat{\sigma}^2_{biased}] = \frac{N}{N-1} E[\hat{\sigma}^2_{biased}] = \frac{N}{N-1} \sigma^2 \frac{N-1}{N} = \sigma^2$.
So, the sample variance with $N-1$ in the denominator is unbiased.

---

### 7. Important Points to Remember (Summary)

*   **Estimation:** Inferring unknown parameters from observed data.
*   **Point vs. Interval Estimation:** Single value vs. a range of values.
*   **Estimator Properties:** Unbiasedness, efficiency, consistency, sufficiency.
*   **Likelihood Function:** $L(\theta|X) = \prod f(x_i|\theta)$ (for i.i.d.).
*   **MLE:** Parameter value that maximizes the likelihood function, often found by maximizing the log-likelihood.
*   **Sample Mean:** An unbiased and often efficient/consistent estimator for the mean of many distributions (e.g., Gaussian).
*   **Unbiased Sample Variance:** $\frac{1}{N-1}\sum (x_i - \bar{x})^2$.

---

This concludes the fundamentals of estimation theory for Module 1. The subsequent modules will build upon these concepts by exploring more advanced estimation techniques and their theoretical underpinnings.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
