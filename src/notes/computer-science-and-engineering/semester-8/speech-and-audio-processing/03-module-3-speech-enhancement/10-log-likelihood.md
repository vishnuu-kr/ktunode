---
title: "log-likelihood"
subject: "SPEECH AND AUDIO PROCESSING"
module: "Module 3: Speech Enhancement :"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca64"
status: "completed"
scrapedAt: "2026-05-20T17:27:03.993Z"
---
# SPEECH AND AUDIO PROCESSING

## Module 3: Speech Enhancement

### Topic: Log-Likelihood

---

### 1. Introduction to Log-Likelihood

The concept of log-likelihood is fundamental in statistical inference and plays a crucial role in various speech processing tasks, including speech enhancement, recognition, and synthesis. It provides a principled way to quantify how well a statistical model explains observed data.

**Key Concepts:**

*   **Likelihood:** The likelihood of a set of parameters given observed data is the probability of observing that data given those parameters. Mathematically, for a parameter set $\theta$ and observed data $X$, the likelihood is denoted as $L(\theta|X) = P(X|\theta)$. It's important to note that likelihood is a function of the parameters, *not* a probability distribution over the parameters.
*   **Log-Likelihood:** The log-likelihood is simply the natural logarithm of the likelihood function. $LL(\theta|X) = \log L(\theta|X) = \log P(X|\theta)$.

**Why use Log-Likelihood?**

There are several reasons why we often work with the log-likelihood instead of the likelihood:

*   **Numerical Stability:** Likelihood values, especially for large datasets or complex models, can become extremely small, leading to underflow issues in computations. Taking the logarithm converts these small numbers into more manageable negative numbers.
*   **Mathematical Convenience:** The logarithm turns products into sums. This is highly beneficial when dealing with independent data points. If $X = \{x_1, x_2, ..., x_N\}$ are independent observations, then:
    $L(\theta|X) = P(x_1|\theta) \times P(x_2|\theta) \times ... \times P(x_N|\theta)$
    $LL(\theta|X) = \log P(x_1|\theta) + \log P(x_2|\theta) + ... + \log P(x_N|\theta)$
    This simplification makes optimization and derivative calculations much easier.
*   **Maximizing Likelihood vs. Maximizing Log-Likelihood:** The logarithm is a monotonically increasing function. This means that the parameters that maximize the likelihood also maximize the log-likelihood, and vice-versa. Therefore, we can achieve the same goal of finding the best model parameters by maximizing either function.

---

### 2. Log-Likelihood in Speech Enhancement

In speech enhancement, we aim to recover a clean speech signal $s$ from a noisy observation $y$. We often model this relationship probabilistically.

**Typical Model Assumptions:**

A common assumption is that the noisy speech signal is the sum of the clean speech signal and additive noise:
$y(n) = s(n) + v(n)$

where:
*   $y(n)$ is the noisy speech signal at time frame $n$.
*   $s(n)$ is the clean speech signal at time frame $n$.
*   $v(n)$ is the additive noise at time frame $n$.

We often assume that the noise $v(n)$ is a random process, and we make assumptions about its probability distribution. A common assumption is that the noise is **Gaussian** with zero mean and variance $\sigma_v^2$.

**Probability Distribution of Noise:**

If $v(n)$ is Gaussian with mean 0 and variance $\sigma_v^2$, its probability density function (PDF) is:
$P(v(n)) = \frac{1}{\sqrt{2\pi\sigma_v^2}} \exp\left(-\frac{v(n)^2}{2\sigma_v^2}\right)$

**Probability Distribution of Noisy Speech:**

Given a clean speech signal $s(n)$ and the noise model, the noisy speech signal $y(n)$ can be viewed as a random variable:
$y(n) = s(n) + v(n)$
If $v(n)$ is Gaussian, then $y(n)$ will also be Gaussian, with a mean of $s(n)$ and a variance of $\sigma_v^2$.
$P(y(n) | s(n), \sigma_v^2) = \frac{1}{\sqrt{2\pi\sigma_v^2}} \exp\left(-\frac{(y(n) - s(n))^2}{2\sigma_v^2}\right)$

**Likelihood of Observed Noisy Speech:**

Assuming the noise samples at different time frames are independent, the likelihood of observing the entire noisy speech signal $Y = \{y(1), y(2), ..., y(N)\}$ given the clean speech signal $S = \{s(1), s(2), ..., s(N)\}$ and the noise variance $\sigma_v^2$ is the product of the individual probabilities:

$L(S, \sigma_v^2 | Y) = \prod_{n=1}^{N} P(y(n) | s(n), \sigma_v^2)$
$L(S, \sigma_v^2 | Y) = \prod_{n=1}^{N} \frac{1}{\sqrt{2\pi\sigma_v^2}} \exp\left(-\frac{(y(n) - s(n))^2}{2\sigma_v^2}\right)$

**Log-Likelihood of Observed Noisy Speech:**

Taking the natural logarithm of the likelihood:

$LL(S, \sigma_v^2 | Y) = \log \left( \prod_{n=1}^{N} \frac{1}{\sqrt{2\pi\sigma_v^2}} \exp\left(-\frac{(y(n) - s(n))^2}{2\sigma_v^2}\right) \right)$

$LL(S, \sigma_v^2 | Y) = \sum_{n=1}^{N} \log \left( \frac{1}{\sqrt{2\pi\sigma_v^2}} \exp\left(-\frac{(y(n) - s(n))^2}{2\sigma_v^2}\right) \right)$

$LL(S, \sigma_v^2 | Y) = \sum_{n=1}^{N} \left[ \log\left(\frac{1}{\sqrt{2\pi\sigma_v^2}}\right) + \log\left(\exp\left(-\frac{(y(n) - s(n))^2}{2\sigma_v^2}\right)\right) \right]$

$LL(S, \sigma_v^2 | Y) = \sum_{n=1}^{N} \left[ -\frac{1}{2}\log(2\pi\sigma_v^2) - \frac{(y(n) - s(n))^2}{2\sigma_v^2} \right]$

$LL(S, \sigma_v^2 | Y) = -\frac{N}{2}\log(2\pi\sigma_v^2) - \frac{1}{2\sigma_v^2} \sum_{n=1}^{N} (y(n) - s(n))^2$

**Interpretation in Speech Enhancement:**

The log-likelihood expression reveals an important connection:

*   The first term ($-\frac{N}{2}\log(2\pi\sigma_v^2)$) depends on the noise variance and the number of samples.
*   The second term ($-\frac{1}{2\sigma_v^2} \sum_{n=1}^{N} (y(n) - s(n))^2$) is directly related to the **sum of squared errors** between the noisy signal and the estimated clean signal. Minimizing this error term is equivalent to maximizing the log-likelihood, assuming $\sigma_v^2$ is known.

**Maximum Likelihood Estimation (MLE):**

In Maximum Likelihood Estimation (MLE), we aim to find the parameters that maximize the likelihood (or log-likelihood) of the observed data.

*   **Estimating Clean Speech:** If the noise variance $\sigma_v^2$ is known, we want to find the clean speech signal $S$ that maximizes $LL(S, \sigma_v^2 | Y)$. From the log-likelihood formula, maximizing this is equivalent to **minimizing the sum of squared errors** $\sum_{n=1}^{N} (y(n) - s(n))^2$. This is the basis of the **Least Squares** estimation approach.
*   **Estimating Noise Variance:** If the clean speech signal $S$ is known (e.g., during training or in specific scenarios), we can estimate the noise variance $\sigma_v^2$ by maximizing the log-likelihood with respect to $\sigma_v^2$.

---

### 3. Log-Likelihood in Parameter Estimation

Log-likelihood is extensively used for estimating parameters of statistical models.

**Example: Estimating Noise Variance ($\sigma_v^2$)**

Assume we have a segment of the audio signal that is known to contain only noise ($y_{noise}(n)$), and we assume this noise is zero-mean Gaussian with unknown variance $\sigma_v^2$. We want to estimate $\sigma_v^2$.

The likelihood of the noisy segment $Y_{noise}$ given the variance $\sigma_v^2$ is:
$L(\sigma_v^2 | Y_{noise}) = \prod_{n=1}^{N_{noise}} \frac{1}{\sqrt{2\pi\sigma_v^2}} \exp\left(-\frac{y_{noise}(n)^2}{2\sigma_v^2}\right)$

The log-likelihood is:
$LL(\sigma_v^2 | Y_{noise}) = -\frac{N_{noise}}{2}\log(2\pi\sigma_v^2) - \frac{1}{2\sigma_v^2} \sum_{n=1}^{N_{noise}} y_{noise}(n)^2$

To find the MLE of $\sigma_v^2$, we take the derivative with respect to $\sigma_v^2$ and set it to zero:

$\frac{\partial LL}{\partial \sigma_v^2} = -\frac{N_{noise}}{2} \frac{1}{\sigma_v^2} - \frac{1}{2} \left( -\frac{1}{(\sigma_v^2)^2} \sum_{n=1}^{N_{noise}} y_{noise}(n)^2 \right) = 0$

$-\frac{N_{noise}}{2\sigma_v^2} + \frac{1}{2(\sigma_v^2)^2} \sum_{n=1}^{N_{noise}} y_{noise}(n)^2 = 0$

Multiply by $2(\sigma_v^2)^2$:
$-N_{noise} \sigma_v^2 + \sum_{n=1}^{N_{noise}} y_{noise}(n)^2 = 0$

$N_{noise} \sigma_v^2 = \sum_{n=1}^{N_{noise}} y_{noise}(n)^2$

$\hat{\sigma}_v^2 = \frac{1}{N_{noise}} \sum_{n=1}^{N_{noise}} y_{noise}(n)^2$

This shows that the MLE of the noise variance is the sample variance (or average power) of the noise segment. This is a well-known result.

---

### 4. Applications in Speech Enhancement

The log-likelihood concept underpins many speech enhancement algorithms:

*   **Minimum Mean Square Error (MMSE) Estimators:** Many MMSE estimators for the clean speech signal rely on probabilistic models and aim to minimize the expected squared error. The likelihood function is central to defining these models.
*   **Maximum A Posteriori (MAP) Estimation:** In MAP estimation, we aim to find the most probable clean speech signal given the noisy observation. This involves combining the likelihood of the data with a prior probability distribution of the clean speech signal, often using Bayes' theorem. The log-likelihood is used in this process.
*   **Deep Learning-based Speech Enhancement:** Modern deep learning models for speech enhancement often learn to predict the clean speech or a gain mask. The training objective for these models is typically based on minimizing a loss function that is derived from the log-likelihood of the data or a surrogate like mean squared error. For example, predicting the clean speech $s$ from noisy $y$ might involve maximizing $P(Y|S)$ or minimizing the negative log-likelihood.

---

### 5. Learning Outcomes Checklist

*   **Understand the definition of likelihood and log-likelihood:** Covered in Section 1.
*   **Explain why log-likelihood is preferred over likelihood in computations:** Covered in Section 1.
*   **Derive the log-likelihood function for a simple additive noise model (e.g., Gaussian noise):** Covered in Section 2.
*   **Relate the log-likelihood to common speech enhancement cost functions like Mean Squared Error (MSE):** Covered in Section 2.
*   **Apply log-likelihood for parameter estimation (e.g., noise variance):** Covered in Section 3.
*   **Recognize the role of log-likelihood in advanced speech enhancement techniques:** Covered in Section 4.

---

### 6. Practice Questions and Exercises

**Question 1:**

Given a single observation $x$ and a model where $x$ is assumed to be drawn from a Gaussian distribution with mean $\mu$ and variance $\sigma^2$, $P(x|\mu, \sigma^2) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)$.
Derive the log-likelihood function for this observation.

**Answer 1:**

The likelihood is $L(\mu, \sigma^2 | x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)$.
Taking the natural logarithm:
$LL(\mu, \sigma^2 | x) = \log \left( \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right) \right)$
$LL(\mu, \sigma^2 | x) = \log\left(\frac{1}{\sqrt{2\pi\sigma^2}}\right) + \log\left(\exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)\right)$
$LL(\mu, \sigma^2 | x) = -\frac{1}{2}\log(2\pi\sigma^2) - \frac{(x-\mu)^2}{2\sigma^2}$

**Question 2:**

Suppose you have $N$ independent observations $\{x_1, x_2, ..., x_N\}$ drawn from the same Gaussian distribution with unknown mean $\mu$ and known variance $\sigma^2$. What is the log-likelihood of these observations with respect to $\mu$?

**Answer 2:**

The likelihood for $N$ independent observations is:
$L(\mu | X) = \prod_{i=1}^{N} P(x_i|\mu, \sigma^2) = \prod_{i=1}^{N} \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x_i-\mu)^2}{2\sigma^2}\right)$
The log-likelihood is:
$LL(\mu | X) = \sum_{i=1}^{N} \log \left( \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x_i-\mu)^2}{2\sigma^2}\right) \right)$
$LL(\mu | X) = \sum_{i=1}^{N} \left( -\frac{1}{2}\log(2\pi\sigma^2) - \frac{(x_i-\mu)^2}{2\sigma^2} \right)$
$LL(\mu | X) = -\frac{N}{2}\log(2\pi\sigma^2) - \frac{1}{2\sigma^2} \sum_{i=1}^{N} (x_i-\mu)^2$

Notice that maximizing this log-likelihood with respect to $\mu$ requires minimizing the term $\sum_{i=1}^{N} (x_i-\mu)^2$, which is the sum of squared errors.

**Question 3:**

Consider the additive noise model $y(n) = s(n) + v(n)$, where $v(n) \sim \mathcal{N}(0, \sigma_v^2)$. The log-likelihood of observing $y(n)$ given $s(n)$ and $\sigma_v^2$ is $LL(s(n), \sigma_v^2 | y(n)) = -\frac{1}{2}\log(2\pi\sigma_v^2) - \frac{(y(n) - s(n))^2}{2\sigma_v^2}$.
If we assume $\sigma_v^2 = 0.1$ is known, and we observe $y(n) = 0.5$. What value of $s(n)$ maximizes the log-likelihood?

**Answer 3:**

To maximize $LL(s(n), \sigma_v^2 | y(n))$, we need to maximize the term $-\frac{(y(n) - s(n))^2}{2\sigma_v^2}$.
Since $\sigma_v^2$ is positive, maximizing this term is equivalent to minimizing $(y(n) - s(n))^2$.
The expression $(y(n) - s(n))^2$ is minimized when $y(n) - s(n) = 0$, which means $s(n) = y(n)$.
Therefore, $s(n) = 0.5$ maximizes the log-likelihood. This is the same result as a least-squares estimate.

---

### 7. Important Points to Remember

*   **Logarithm Properties:** Remember $\log(ab) = \log a + \log b$ and $\log(a/b) = \log a - \log b$, and $\log(a^b) = b \log a$. These are crucial for simplifying likelihood expressions.
*   **Monotonicity:** Maximizing likelihood is equivalent to maximizing log-likelihood.
*   **Numerical Stability:** Logarithms convert products to sums, preventing underflow and improving numerical stability.
*   **Gaussian Noise:** The Gaussian noise assumption leads to log-likelihood functions that penalize deviations quadratically, directly relating to MSE.
*   **MLE Connection:** Log-likelihood maximization is the core principle behind Maximum Likelihood Estimation, a powerful tool for parameter estimation.

---
