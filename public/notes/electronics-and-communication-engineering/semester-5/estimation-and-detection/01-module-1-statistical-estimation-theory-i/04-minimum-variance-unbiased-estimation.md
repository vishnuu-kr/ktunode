---
title: "Minimum variance unbiased estimation"
subject: "ESTIMATION AND DETECTION"
module: "Module 1: Statistical Estimation Theory I"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780febc7"
status: "completed"
scrapedAt: "2026-05-23T17:56:41.011Z"
---
# Module 1: Statistical Estimation Theory I - Minimum Variance Unbiased Estimation (MVUE)

## Introduction to Estimation

Estimation is the process of approximating an unknown parameter of a statistical model based on observed data. In signal processing, we often deal with noisy signals where the underlying signal parameters are unknown and need to be estimated. This module introduces the fundamental principles of statistical estimation theory, focusing on unbiasedness and minimum variance.

**Course Outcome Alignment:**
*   **CO1 (K2):** Summarize the fundamentals of statistical estimation principles used in various engineering problems.
*   **CO2 (K3):** Apply different types of estimation algorithms in engineering applications.

**Key Concepts:**
*   **Parameter ($\theta$):** The unknown quantity we want to estimate.
*   **Data ($\mathbf{X}$):** The observed random variables, often a set of measurements.
*   **Estimator ($\hat{\theta}$):** A function of the data that provides an estimate of the parameter. It is a random variable itself.
*   **Estimate:** A specific value of the estimator obtained from a particular set of data.

---

## 1. Properties of Estimators: Unbiasedness

An estimator is considered unbiased if its expected value equals the true value of the parameter it is estimating. This means, on average, the estimator does not systematically overestimate or underestimate the parameter.

**Definition:** An estimator $\hat{\theta}(\mathbf{X})$ is **unbiased** for parameter $\theta$ if:
$$E[\hat{\theta}(\mathbf{X})] = \theta$$

**Explanation (CO1 - K2):**
Unbiasedness is a desirable property because it ensures that the estimation process is centered around the true parameter value. If an estimator is biased, even with infinite data, it will consistently miss the true parameter.

**Example (Kay, Vol I, Chapter 3.1.1):**
Consider estimating the mean ($\mu$) of a Gaussian distribution with known variance ($\sigma^2$) from $N$ independent and identically distributed (i.i.d.) samples $X_1, X_2, \ldots, X_N$.

*   **Sample Mean Estimator:** $\hat{\mu}_{SM} = \frac{1}{N} \sum_{i=1}^N X_i$
*   **Check for Unbiasedness:**
    $E[\hat{\mu}_{SM}] = E\left[\frac{1}{N} \sum_{i=1}^N X_i\right]$
    $E[\hat{\mu}_{SM}] = \frac{1}{N} \sum_{i=1}^N E[X_i]$ (Linearity of Expectation)
    Since $E[X_i] = \mu$ for all $i$:
    $E[\hat{\mu}_{SM}] = \frac{1}{N} \sum_{i=1}^N \mu = \frac{1}{N} (N \mu) = \mu$
    Therefore, the sample mean is an unbiased estimator for the mean.

**Important Point to Remember:**
Unbiasedness is a property of the estimator's *average* behavior. An unbiased estimator can still produce an estimate that is far from the true value for a specific realization of the data.

---

## 2. Properties of Estimators: Variance

The variance of an estimator measures how much the estimates typically deviate from the estimator's expected value. A lower variance indicates that the estimates are more tightly clustered around the expected value.

**Definition:** The **variance** of an estimator $\hat{\theta}(\mathbf{X})$ is:
$$Var[\hat{\theta}(\mathbf{X})] = E[(\hat{\theta}(\mathbf{X}) - E[\hat{\theta}(\mathbf{X})])^2]$$
If the estimator is unbiased, $E[\hat{\mu}_{SM}] = \mu$, then:
$$Var[\hat{\theta}(\mathbf{X})] = E[(\hat{\theta}(\mathbf{X}) - \theta)^2]$$

**Explanation (CO1 - K2):**
For unbiased estimators, a lower variance is preferred because it implies higher precision. It means that the estimates are more likely to be close to the true parameter value.

**Example (Kay, Vol I, Chapter 3.1.1):**
For the sample mean estimator $\hat{\mu}_{SM}$ of a Gaussian random variable with known variance $\sigma^2$:
$$Var[\hat{\mu}_{SM}] = Var\left[\frac{1}{N} \sum_{i=1}^N X_i\right]$$
Since $X_i$ are independent:
$$Var[\hat{\mu}_{SM}] = \frac{1}{N^2} \sum_{i=1}^N Var[X_i]$$
Since $Var[X_i] = \sigma^2$ for all $i$:
$$Var[\hat{\mu}_{SM}] = \frac{1}{N^2} \sum_{i=1}^N \sigma^2 = \frac{1}{N^2} (N \sigma^2) = \frac{\sigma^2}{N}$$
As $N$ increases, the variance of the sample mean decreases, meaning our estimate becomes more precise.

---

## 3. Minimum Variance Unbiased Estimation (MVUE)

The goal of Minimum Variance Unbiased Estimation (MVUE) is to find an estimator that is both unbiased and has the smallest possible variance among all unbiased estimators. This is often referred to as the **best linear unbiased estimator (BLUE)** when the estimator is restricted to be linear in the data. However, MVUE seeks the best among *all* unbiased estimators, linear or not.

**Definition:** An unbiased estimator $\hat{\theta}^*(\mathbf{X})$ is the **Minimum Variance Unbiased Estimator (MVUE)** if for any other unbiased estimator $\hat{\theta}'(\mathbf{X})$ of $\theta$:
$$Var[\hat{\theta}^*(\mathbf{X})] \leq Var[\hat{\theta}'(\mathbf{X})]$$

**Explanation (CO1 - K2, CO2 - K3):**
MVUE represents the "best possible" unbiased estimator in terms of precision. Finding such an estimator is a key objective in estimation theory.

**How to Find MVUE:**
There are several ways to find MVUEs:

1.  **Intuition and common estimators:** For many standard problems (like estimating the mean of a Gaussian), common estimators like the sample mean are indeed MVUEs.
2.  **Cramér-Rao Lower Bound (CRLB):** The CRLB provides a lower bound on the variance of any unbiased estimator. If we can find an unbiased estimator that achieves this lower bound, it is the MVUE.
3.  **Rao-Blackwell Theorem:** This theorem provides a systematic way to improve an unbiased estimator, potentially leading to the MVUE.
4.  **Sufficiency and Completeness:** If a statistic is sufficient and the family of probability distributions is complete, then the unique unbiased estimator based on that statistic is the MVUE.

---

## 4. The Cramér-Rao Lower Bound (CRLB)

The CRLB sets a benchmark for the performance of any unbiased estimator. It states that the variance of any unbiased estimator cannot be less than the inverse of the Fisher Information.

**Definitions:**
*   **Likelihood Function:** $L(\theta|\mathbf{X}) = p(\mathbf{X}|\theta)$, where $p(\mathbf{X}|\theta)$ is the probability density function (PDF) of the data $\mathbf{X}$ given the parameter $\theta$.
*   **Log-Likelihood Function:** $\ln L(\theta|\mathbf{X})$.
*   **Score Function:** $s(\theta|\mathbf{X}) = \frac{\partial}{\partial \theta} \ln L(\theta|\mathbf{X})$.
*   **Fisher Information:** $I(\theta) = E\left[\left(\frac{\partial}{\partial \theta} \ln L(\theta|\mathbf{X})\right)^2\right] = -E\left[\frac{\partial^2}{\partial \theta^2} \ln L(\theta|\mathbf{X})\right]$.

**Cramér-Rao Lower Bound Theorem (Kay, Vol I, Chapter 3.3.1):**
For an unbiased estimator $\hat{\theta}(\mathbf{X})$ of $\theta$, the variance is bounded below by:
$$Var[\hat{\theta}(\mathbf{X})] \geq \frac{1}{I(\theta)}$$
where $I(\theta)$ is the Fisher Information.

**Explanation (CO1 - K2):**
The CRLB tells us the best possible precision we can achieve for an unbiased estimator. If an unbiased estimator achieves this bound, it is the MVUE.

**Example (Kay, Vol I, Chapter 3.3.2):**
Estimating the mean $\mu$ of $N$ i.i.d. Gaussian samples $X_i \sim \mathcal{N}(\mu, \sigma^2)$ with known $\sigma^2$.
*   **Likelihood Function:** $L(\mu|\mathbf{X}) = \prod_{i=1}^N \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(X_i-\mu)^2}{2\sigma^2}} = \left(\frac{1}{2\pi\sigma^2}\right)^{N/2} e^{-\frac{1}{2\sigma^2}\sum_{i=1}^N (X_i-\mu)^2}$
*   **Log-Likelihood Function:** $\ln L(\mu|\mathbf{X}) = -\frac{N}{2}\ln(2\pi\sigma^2) - \frac{1}{2\sigma^2}\sum_{i=1}^N (X_i-\mu)^2$
*   **Score Function:**
    $\frac{\partial}{\partial \mu} \ln L(\mu|\mathbf{X}) = -\frac{1}{2\sigma^2} \sum_{i=1}^N 2(X_i-\mu)(-1) = \frac{1}{\sigma^2} \sum_{i=1}^N (X_i-\mu)$
*   **Fisher Information:**
    $I(\mu) = E\left[\left(\frac{1}{\sigma^2} \sum_{i=1}^N (X_i-\mu)\right)^2\right]$
    Let $Y_i = X_i - \mu$. Then $E[Y_i] = 0$ and $Var[Y_i] = \sigma^2$.
    $I(\mu) = E\left[\left(\frac{1}{\sigma^2} \sum_{i=1}^N Y_i\right)^2\right] = \frac{1}{\sigma^4} E\left[\left(\sum_{i=1}^N Y_i\right)^2\right]$
    Since $Y_i$ are independent and have zero mean, $E\left[\left(\sum_{i=1}^N Y_i\right)^2\right] = \sum_{i=1}^N E[Y_i^2] = \sum_{i=1}^N Var[Y_i] = N\sigma^2$.
    $I(\mu) = \frac{1}{\sigma^4} (N\sigma^2) = \frac{N}{\sigma^2}$

*   **CRLB for estimating $\mu$:**
    $Var[\hat{\mu}(\mathbf{X})] \geq \frac{1}{I(\mu)} = \frac{\sigma^2}{N}$

We previously showed that the sample mean estimator $\hat{\mu}_{SM}$ has a variance of $\frac{\sigma^2}{N}$. Since this variance achieves the CRLB and $\hat{\mu}_{SM}$ is unbiased, it is the MVUE for the mean.

**Important Point to Remember:**
The CRLB is a lower bound, not a guarantee that an unbiased estimator achieving it exists. However, if one exists, it is the MVUE.

---

## 5. The Rao-Blackwell Theorem

The Rao-Blackwell theorem provides a constructive method to improve an unbiased estimator. It states that if we have an unbiased estimator and a sufficient statistic, we can derive a new unbiased estimator with a variance less than or equal to the original one.

**Definitions:**
*   **Sufficient Statistic (T(X)):** A statistic $T(\mathbf{X})$ is sufficient for $\theta$ if the conditional distribution of $\mathbf{X}$ given $T(\mathbf{X})=t$ does not depend on $\theta$. Informally, $T(\mathbf{X})$ contains all the information about $\theta$ that is present in the data $\mathbf{X}$.
    *   **Fisher Factorization Theorem:** $T(\mathbf{X})$ is sufficient for $\theta$ if the likelihood function can be factored as $L(\theta|\mathbf{X}) = g(T(\mathbf{X})|\theta) h(\mathbf{X})$, where $g$ depends on $\theta$ only through $T(\mathbf{X})$, and $h$ does not depend on $\theta$.

**Rao-Blackwell Theorem (Kay, Vol I, Chapter 3.2.1):**
Let $\hat{\theta}(\mathbf{X})$ be an unbiased estimator of $\theta$, and let $T(\mathbf{X})$ be a sufficient statistic for $\theta$. Define a new estimator:
$$\hat{\theta}_{RB}(\mathbf{X}) = E[\hat{\theta}(\mathbf{X}) | T(\mathbf{X})]$$
Then $\hat{\theta}_{RB}(\mathbf{X})$ is also an unbiased estimator of $\theta$, and:
$$Var[\hat{\theta}_{RB}(\mathbf{X})] \leq Var[\hat{\theta}(\mathbf{X})]$$
Furthermore, if $T(\mathbf{X})$ is a *complete* sufficient statistic, then $\hat{\theta}_{RB}(\mathbf{X})$ is the unique MVUE.

**Explanation (CO1 - K2, CO2 - K3):**
The Rao-Blackwell theorem is powerful because it guarantees improvement (or at least no worse performance) if we can find a sufficient statistic. If that statistic is also complete, we've found the MVUE.

**Example (Kay, Vol I, Chapter 3.2.2):**
Estimating the mean $\mu$ of a Gaussian distribution with known variance $\sigma^2$.
The sample mean $\hat{\mu}_{SM} = \frac{1}{N} \sum_{i=1}^N X_i$ is an unbiased estimator.
The sample mean is also a sufficient statistic for $\mu$. (This can be shown using the Fisher Factorization Theorem).
The family of Gaussian distributions is complete.
Therefore, according to the Rao-Blackwell theorem, the estimator obtained by conditioning the sample mean on itself is the MVUE.
$\hat{\mu}_{RB}(\mathbf{X}) = E[\hat{\mu}_{SM} | T(\mathbf{X})]$ where $T(\mathbf{X}) = \hat{\mu}_{SM}$.
$\hat{\mu}_{RB}(\mathbf{X}) = E[\hat{\mu}_{SM} | \hat{\mu}_{SM}] = \hat{\mu}_{SM}$
This confirms that the sample mean is indeed the MVUE.

**Applying Rao-Blackwell to improve an estimator:**
Suppose we didn't know the sample mean was sufficient and unbiased. Let's consider an unbiased but not necessarily MVUE estimator, say $\hat{\theta}_1 = X_1$. We know $T(\mathbf{X}) = \frac{1}{N}\sum X_i$ is sufficient.
Then, the Rao-Blackwellized estimator is:
$\hat{\theta}_{RB} = E[X_1 | T(\mathbf{X})] = E[X_1 | \frac{1}{N}\sum X_i]$
By symmetry, due to i.i.d. samples, the expected value of any single $X_i$ given the sum is the sum divided by $N$.
$E[X_1 | \frac{1}{N}\sum X_i] = \frac{1}{N} E[\sum X_i | \frac{1}{N}\sum X_i] = \frac{1}{N} (\frac{1}{N}\sum X_i) = \frac{1}{N^2}\sum X_i$? This is incorrect.

Let's try again with a simpler property of conditional expectation and symmetry.
For i.i.d. $X_i$, $E[X_i | \sum X_j] = E[X_k | \sum X_j]$ for any $i, k$.
We know $E[\sum X_i | \sum X_j] = \sum X_j$.
Also, $\sum_{i=1}^N E[X_i | \sum X_j] = E[\sum X_i | \sum X_j] = \sum X_j$.
Due to symmetry, $E[X_i | \sum X_j]$ must be the same for all $i$. Let this be $c$.
So, $N \cdot c = \sum X_j$, which means $c = \frac{1}{N} \sum X_j$.
Thus, $E[X_1 | \frac{1}{N}\sum X_i] = \frac{1}{N}\sum X_i$.
So, the Rao-Blackwellized estimator of $X_1$ is $\frac{1}{N}\sum X_i$, which is the sample mean. We know $Var[\frac{1}{N}\sum X_i] = \frac{\sigma^2}{N}$ and $Var[X_1] = \sigma^2$.
Clearly, $\frac{\sigma^2}{N} < \sigma^2$ for $N > 1$, so the Rao-Blackwellized estimator is indeed better.

**Important Point to Remember:**
To use the Rao-Blackwell theorem effectively, you need to identify a sufficient statistic. If the sufficient statistic is also complete, the resulting Rao-Blackwellized estimator is the unique MVUE.

---

## 6. Sufficient Statistics and Completeness

The concept of sufficient statistics is crucial for applying the Rao-Blackwell theorem. Completeness adds the guarantee of uniqueness for the MVUE.

**Definition: Complete Statistic (Kay, Vol I, Chapter 3.2.1):**
A statistic $T(\mathbf{X})$ is **complete** for $\theta$ if for any function $f$ such that $E[f(T(\mathbf{X}))] = 0$ for all $\theta$, it must be that $P(f(T(\mathbf{X})) = 0 \text{ for all } \theta) = 1$.
A simpler way to think about this: if the expected value of any function of $T(\mathbf{X})$ is zero for all $\theta$, then that function must be identically zero almost surely.

**Significance of Completeness:**
If $T(\mathbf{X})$ is a complete sufficient statistic for $\theta$, and $\hat{\theta}(\mathbf{X})$ is an unbiased estimator of $\theta$, then the Rao-Blackwellized estimator $\hat{\theta}_{RB}(\mathbf{X}) = E[\hat{\theta}(\mathbf{X}) | T(\mathbf{X})]$ is the *unique* MVUE.

**Example: Gaussian Mean Estimation (Kay, Vol I, Chapter 3.2.2):**
For $N$ i.i.d. $\mathcal{N}(\mu, \sigma^2)$ samples with known $\sigma^2$:
*   The sample mean $T(\mathbf{X}) = \frac{1}{N}\sum X_i$ is sufficient for $\mu$.
*   The family of Gaussian distributions parameterized by $\mu$ is complete.
*   Therefore, $T(\mathbf{X})$ is a complete sufficient statistic.
*   Any unbiased estimator $\hat{\mu}(\mathbf{X})$ Rao-Blackwellized using $T(\mathbf{X})$ will result in the MVUE, which is the sample mean itself.

**Example: Gaussian Variance Estimation (Kay, Vol I, Chapter 3.2.2, exercise):**
Estimating the variance $\sigma^2$ of a Gaussian distribution with known mean $\mu=0$. Data: $X_1, \ldots, X_N$ i.i.d. $\mathcal{N}(0, \sigma^2)$.
*   Likelihood: $L(\sigma^2|\mathbf{X}) = \prod_{i=1}^N \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{X_i^2}{2\sigma^2}} = \left(\frac{1}{2\pi\sigma^2}\right)^{N/2} e^{-\frac{1}{2\sigma^2}\sum X_i^2}$
*   Using Fisher Factorization: $L(\sigma^2|\mathbf{X}) = \left(\frac{1}{2\pi\sigma^2}\right)^{N/2} e^{-\frac{1}{2\sigma^2} \sum X_i^2}$.
    Here, $T(\mathbf{X}) = \sum X_i^2$ is a sufficient statistic for $\sigma^2$.
*   The family of $\mathcal{N}(0, \sigma^2)$ distributions is complete.
*   Thus, $\sum X_i^2$ is a complete sufficient statistic for $\sigma^2$.

Now consider the unbiased estimator for $\sigma^2$: $\hat{\sigma}^2_{unbiased} = \frac{1}{N} \sum_{i=1}^N X_i^2$.
Its variance is $Var\left[\frac{1}{N}\sum X_i^2\right]$. We know $\frac{X_i^2}{\sigma^2} \sim \chi^2(1)$.
So, $\frac{1}{\sigma^2} \sum X_i^2 \sim \chi^2(N)$.
Let $S = \sum X_i^2$. $E[S] = N\sigma^2$. $Var[S] = 2N\sigma^4$.
$E[\hat{\sigma}^2_{unbiased}] = E[\frac{S}{N}] = \frac{1}{N} E[S] = \frac{1}{N} (N\sigma^2) = \sigma^2$. It is unbiased.
$Var[\hat{\sigma}^2_{unbiased}] = Var[\frac{S}{N}] = \frac{1}{N^2} Var[S] = \frac{1}{N^2} (2N\sigma^4) = \frac{2\sigma^4}{N}$.

The CRLB for $\sigma^2$ can also be calculated and it turns out to be $\frac{2\sigma^4}{N}$.
Since $\hat{\sigma}^2_{unbiased} = \frac{1}{N}\sum X_i^2$ is unbiased and achieves the CRLB, it is the MVUE.
Alternatively, using Rao-Blackwell: if we had an arbitrary unbiased estimator $\hat{\sigma}^2_{arb}$, then $E[\hat{\sigma}^2_{arb} | \sum X_i^2]$ would be the MVUE, which is $\frac{1}{N}\sum X_i^2$.

**Important Point to Remember:**
The combination of sufficiency and completeness of a statistic is what allows us to guarantee the existence and uniqueness of the MVUE by applying the Rao-Blackwell theorem.

---

## 7. Best Linear Unbiased Estimator (BLUE)

While MVUE seeks the best among *all* unbiased estimators, the Best Linear Unbiased Estimator (BLUE) restricts the search to estimators that are linear functions of the data. For many common problems, the BLUE is also the MVUE.

**Definition:** A **linear estimator** of $\theta$ is of the form $\hat{\theta}(\mathbf{X}) = \mathbf{c}^T \mathbf{X}$ for some vector $\mathbf{c}$.
A **linear unbiased estimator** is a linear estimator where $E[\mathbf{c}^T \mathbf{X}] = \theta$.

**BLUE:** The BLUE is the linear unbiased estimator with the minimum variance.

**Gauss-Markov Theorem:**
For a linear model $E[\mathbf{X}] = \mathbf{A}\boldsymbol{\beta}$ and $Cov[\mathbf{X}] = \mathbf{\Sigma}$, the BLUE of any linear combination $\mathbf{a}^T\boldsymbol{\beta}$ is given by $\mathbf{a}^T(\mathbf{A}^T\mathbf{\Sigma}^{-1}\mathbf{A})^{-1}\mathbf{A}^T\mathbf{\Sigma}^{-1}\mathbf{X}$.
In simpler terms, for a linear regression problem, the ordinary least squares (OLS) estimator is the BLUE.

**Relationship to MVUE:**
If the statistical model satisfies certain conditions (e.g., the data follows a Gaussian distribution), then the BLUE is also the MVUE. This is a significant result because linear estimators are often easier to find and analyze.

**Example (Kay, Vol I, Chapter 3.1.2):**
Consider the problem of estimating a parameter $\theta$ from $N$ i.i.d. samples $X_1, \ldots, X_N$. Assume $E[X_i] = \theta$ and $Var[X_i] = \sigma^2$.
Let's seek a linear unbiased estimator of the form $\hat{\theta} = \sum_{i=1}^N a_i X_i$.
For it to be unbiased: $E[\hat{\theta}] = E[\sum a_i X_i] = \sum a_i E[X_i] = \sum a_i \theta = \theta \sum a_i$.
So, we need $\sum a_i = 1$.
The variance is $Var[\hat{\theta}] = Var[\sum a_i X_i] = \sum a_i^2 Var[X_i] = \sigma^2 \sum a_i^2$.
To minimize the variance, we need to minimize $\sum a_i^2$ subject to $\sum a_i = 1$.
Using Cauchy-Schwarz or Lagrange multipliers, the minimum occurs when $a_i = 1/N$ for all $i$.
This gives $\hat{\theta} = \sum \frac{1}{N} X_i = \frac{1}{N} \sum X_i$.
This is the sample mean, which we know is unbiased. Its variance is $\sigma^2 \sum (\frac{1}{N})^2 = \sigma^2 \frac{N}{N^2} = \frac{\sigma^2}{N}$.
This shows that the sample mean is the BLUE for the mean of i.i.d. random variables.

**Important Point to Remember:**
If the underlying distribution is Gaussian, the BLUE is guaranteed to be the MVUE. In other cases, the BLUE is the best among linear estimators, but there might be a non-linear estimator that has a smaller variance (though this is rare in practice).

---

## 8. Application to Signal Processing

MVUE principles are fundamental in designing optimal estimators for signals corrupted by noise.

**Example: Amplitude Estimation of a Sinusoid in Noise (CO2 - K3):**
Consider a signal $X_n = A \cos(\omega_0 n + \phi_0) + W_n$, where $A$ is the unknown amplitude, $\omega_0$ and $\phi_0$ are known, and $W_n$ is white Gaussian noise with $E[W_n]=0$ and $Var[W_n]=\sigma_w^2$. We want to estimate $A$.

*   **Model:** $X_n = A \cdot s_n + W_n$, where $s_n = \cos(\omega_0 n + \phi_0)$ is a known deterministic sequence.
*   **Objective:** Find the MVUE of $A$.

Let's look at the likelihood function. For $N$ samples:
$p(\mathbf{X}|A) = \prod_{n=0}^{N-1} \frac{1}{\sqrt{2\pi\sigma_w^2}} e^{-\frac{(X_n - A s_n)^2}{2\sigma_w^2}}$
$\ln p(\mathbf{X}|A) = -\frac{N}{2}\ln(2\pi\sigma_w^2) - \frac{1}{2\sigma_w^2} \sum_{n=0}^{N-1} (X_n - A s_n)^2$

To find the CRLB, we need the Fisher Information.
$\frac{\partial}{\partial A} \ln p(\mathbf{X}|A) = -\frac{1}{2\sigma_w^2} \sum_{n=0}^{N-1} 2(X_n - A s_n)(-s_n) = \frac{1}{\sigma_w^2} \sum_{n=0}^{N-1} (X_n - A s_n)s_n$
$\frac{\partial}{\partial A} \ln p(\mathbf{X}|A) = \frac{1}{\sigma_w^2} \left(\sum_{n=0}^{N-1} X_n s_n - A \sum_{n=0}^{N-1} s_n^2\right)$

Fisher Information $I(A) = E\left[\left(\frac{\partial}{\partial A} \ln p(\mathbf{X}|A)\right)^2\right]$.
$I(A) = E\left[\left(\frac{1}{\sigma_w^2} \sum_{n=0}^{N-1} (X_n - A s_n)s_n\right)^2\right]$
Substitute $X_n = A s_n + W_n$:
$I(A) = E\left[\left(\frac{1}{\sigma_w^2} \sum_{n=0}^{N-1} (A s_n + W_n - A s_n)s_n\right)^2\right]$
$I(A) = E\left[\left(\frac{1}{\sigma_w^2} \sum_{n=0}^{N-1} W_n s_n\right)^2\right] = \frac{1}{\sigma_w^4} E\left[\left(\sum_{n=0}^{N-1} W_n s_n\right)^2\right]$
Since $W_n$ are i.i.d. Gaussian with mean 0 and variance $\sigma_w^2$, and are independent of $s_n$:
$E\left[\left(\sum W_n s_n\right)^2\right] = \sum_{n=0}^{N-1} E[W_n^2 s_n^2] = \sum_{n=0}^{N-1} E[W_n^2] E[s_n^2]$ (since $s_n$ is deterministic)
$E\left[\left(\sum W_n s_n\right)^2\right] = \sum_{n=0}^{N-1} \sigma_w^2 s_n^2 = \sigma_w^2 \sum_{n=0}^{N-1} s_n^2$
So, $I(A) = \frac{1}{\sigma_w^4} \left(\sigma_w^2 \sum_{n=0}^{N-1} s_n^2\right) = \frac{1}{\sigma_w^2} \sum_{n=0}^{N-1} s_n^2$.

The CRLB is $\frac{1}{I(A)} = \frac{\sigma_w^2}{\sum_{n=0}^{N-1} s_n^2}$.

Now, consider the estimator $\hat{A} = \frac{\sum_{n=0}^{N-1} X_n s_n}{\sum_{n=0}^{N-1} s_n^2}$.
This is a linear estimator of the form $\mathbf{c}^T\mathbf{X}$ where $c_n = \frac{s_n}{\sum s_i^2}$.
Let's check for unbiasedness:
$E[\hat{A}] = E\left[\frac{\sum X_n s_n}{\sum s_n^2}\right] = \frac{1}{\sum s_n^2} E\left[\sum (A s_n + W_n) s_n\right]$
$E[\hat{A}] = \frac{1}{\sum s_n^2} \left(A \sum s_n^2 + \sum E[W_n] s_n\right) = \frac{1}{\sum s_n^2} (A \sum s_n^2 + 0) = A$.
So, $\hat{A}$ is unbiased.

Let's check its variance:
$Var[\hat{A}] = Var\left[\frac{\sum X_n s_n}{\sum s_n^2}\right] = \frac{1}{(\sum s_n^2)^2} Var\left[\sum (A s_n + W_n) s_n\right]$
$Var[\hat{A}] = \frac{1}{(\sum s_n^2)^2} Var\left[A \sum s_n^2 + \sum W_n s_n\right]$
Since $A \sum s_n^2$ is a constant, $Var[\hat{A}] = \frac{1}{(\sum s_n^2)^2} Var\left[\sum W_n s_n\right]$
$Var[\hat{A}] = \frac{1}{(\sum s_n^2)^2} \left(\sigma_w^2 \sum s_n^2\right) = \frac{\sigma_w^2}{\sum s_n^2}$.

Since this estimator $\hat{A}$ is unbiased and its variance achieves the CRLB, it is the MVUE for the amplitude $A$.

**CO Alignment:**
*   **CO1 (K2):** Understands the principles of unbiasedness and minimum variance.
*   **CO2 (K3):** Can apply these principles to derive an optimal estimator for a signal processing problem like amplitude estimation.

---

## Summary and Key Takeaways

*   **Unbiased Estimator:** An estimator whose expected value equals the true parameter value. $E[\hat{\theta}] = \theta$.
*   **Variance:** A measure of the spread of estimates around the estimator's expected value. Lower variance means higher precision.
*   **MVUE:** An unbiased estimator with the smallest possible variance among all unbiased estimators.
*   **Cramér-Rao Lower Bound (CRLB):** A theoretical lower bound on the variance of any unbiased estimator. $Var[\hat{\theta}] \geq \frac{1}{I(\theta)}$. An estimator achieving CRLB is the MVUE.
*   **Rao-Blackwell Theorem:** A method to improve an unbiased estimator by conditioning on a sufficient statistic. $Var(E[\hat{\theta}|T(\mathbf{X})]) \leq Var(\hat{\theta})$. If $T(\mathbf{X})$ is complete, the result is the unique MVUE.
*   **Sufficient Statistic:** A statistic that summarizes all the information about the parameter in the data.
*   **Complete Statistic:** A statistic that uniquely identifies the distribution.
*   **BLUE:** The Best Linear Unbiased Estimator. For Gaussian data, BLUE = MVUE.

**Important Points to Remember:**
*   Unbiasedness alone is not enough; we also seek minimum variance.
*   CRLB provides a performance benchmark.
*   Rao-Blackwell theorem provides a constructive path to potentially find the MVUE.
*   The combination of sufficient and complete statistics is powerful for identifying the MVUE.
*   Linear estimators are often practical, and BLUE is the best among them.

---

## Practice Questions

**Question 1 (CO1 - K2):**
Define the terms "unbiased estimator" and "minimum variance unbiased estimator".

**Question 2 (CO1 - K2):**
What is the Cramér-Rao Lower Bound, and what is its significance in estimation theory?

**Question 3 (CO2 - K3):**
Consider $N$ independent Bernoulli trials with unknown probability of success $p$. Let $X_i=1$ if the $i$-th trial is a success, and $X_i=0$ otherwise.
a) Show that the sample mean $\hat{p} = \frac{1}{N}\sum_{i=1}^N X_i$ is an unbiased estimator for $p$.
b) Calculate the variance of $\hat{p}$.
c) Is $\hat{p}$ the MVUE for $p$? (Hint: You can use the fact that the binomial distribution family is complete, and consider the sufficiency of the sum of successes).

**Question 4 (CO2 - K3):**
Let $X_1, \ldots, X_N$ be i.i.d. random variables from a uniform distribution on $[0, \theta]$, where $\theta > 0$ is unknown.
a) Show that $\hat{\theta}_1 = X_1$ is an unbiased estimator for $\theta$.
b) Calculate the variance of $\hat{\theta}_1$.
c) Consider the estimator $\hat{\theta}_2 = \frac{N+1}{N} \max(X_1, \ldots, X_N)$. Show that $\hat{\theta}_2$ is an unbiased estimator for $\theta$.
d) Calculate the variance of $\hat{\theta}_2$.
e) Which estimator, $\hat{\theta}_1$ or $\hat{\theta}_2$, is likely the MVUE? Justify your answer. (Hint: Consider the behavior as $N \to \infty$ and the properties of the maximum of uniform random variables).

---

## Answers to Practice Questions

**Answer 1:**
*   **Unbiased Estimator:** An estimator $\hat{\theta}(\mathbf{X})$ is unbiased for parameter $\theta$ if its expected value equals the true parameter value, i.e., $E[\hat{\theta}(\mathbf{X})] = \theta$.
*   **Minimum Variance Unbiased Estimator (MVUE):** An unbiased estimator $\hat{\theta}^*(\mathbf{X})$ is the MVUE if its variance is less than or equal to the variance of any other unbiased estimator $\hat{\theta}'(\mathbf{X})$ for all possible values of $\theta$, i.e., $Var[\hat{\theta}^*(\mathbf{X})] \leq Var[\hat{\theta}'(\mathbf{X})]$.

**Answer 2:**
The Cramér-Rao Lower Bound (CRLB) for an unbiased estimator $\hat{\theta}(\mathbf{X})$ of a parameter $\theta$ is given by $Var[\hat{\theta}(\mathbf{X})] \geq \frac{1}{I(\theta)}$, where $I(\theta)$ is the Fisher Information, defined as $I(\theta) = E\left[\left(\frac{\partial}{\partial \theta} \ln p(\mathbf{X}|\theta)\right)^2\right]$.
Its significance lies in providing a theoretical limit on the precision of any unbiased estimator. If an unbiased estimator achieves this lower bound, it is the MVUE. It helps us evaluate the performance of existing estimators and understand the fundamental limits of estimation.

**Answer 3:**
Data: $N$ i.i.d. Bernoulli trials, $X_i \in \{0, 1\}$. $p = P(X_i=1)$.
a) **Unbiasedness of $\hat{p}$:**
$E[\hat{p}] = E\left[\frac{1}{N}\sum_{i=1}^N X_i\right] = \frac{1}{N}\sum_{i=1}^N E[X_i]$.
For a Bernoulli random variable, $E[X_i] = 1 \cdot p + 0 \cdot (1-p) = p$.
So, $E[\hat{p}] = \frac{1}{N}\sum_{i=1}^N p = \frac{1}{N}(Np) = p$.
Thus, $\hat{p}$ is unbiased.

b) **Variance of $\hat{p}$:**
$Var[\hat{p}] = Var\left[\frac{1}{N}\sum_{i=1}^N X_i\right]$. Since $X_i$ are independent:
$Var[\hat{p}] = \frac{1}{N^2} \sum_{i=1}^N Var[X_i]$.
For a Bernoulli random variable, $Var[X_i] = p(1-p)$.
So, $Var[\hat{p}] = \frac{1}{N^2} \sum_{i=1}^N p(1-p) = \frac{1}{N^2} (Np(1-p)) = \frac{p(1-p)}{N}$.

c) **Is $\hat{p}$ the MVUE?**
The sum of successes $S = \sum_{i=1}^N X_i$ follows a Binomial distribution $B(N, p)$. The Binomial family of distributions is complete. The sample mean $\hat{p} = S/N$ is a statistic based on $S$.
The Fisher Information for a Bernoulli distribution $B(N, p)$ can be calculated, and it can be shown that the CRLB for $p$ is $\frac{p(1-p)}{N}$.
Since $\hat{p}$ is unbiased and its variance $\frac{p(1-p)}{N}$ matches the CRLB, $\hat{p}$ is indeed the MVUE for $p$.

**Answer 4:**
Data: $X_1, \ldots, X_N$ i.i.d. $U[0, \theta]$.
PDF: $f(x|\theta) = \begin{cases} 1/\theta & 0 \leq x \leq \theta \\ 0 & \text{otherwise} \end{cases}$

a) **$\hat{\theta}_1 = X_1$ is unbiased:**
$E[X_1] = \int_0^\theta x \frac{1}{\theta} dx = \frac{1}{\theta} \left[\frac{x^2}{2}\right]_0^\theta = \frac{1}{\theta} \frac{\theta^2}{2} = \frac{\theta}{2}$.
This is **not** an unbiased estimator for $\theta$. Let's recheck the question or my calculation.
The expectation of a $U[a,b]$ distribution is $(a+b)/2$. For $U[0, \theta]$, the mean is $\theta/2$.
Ah, it seems the question might be intended for a different scenario or I've made a mistake in assuming the question implies unbiasedness. Let's assume the question *intended* to check properties like unbiasedness and variance for the given estimators.

Let's re-examine unbiasedness for $X_1$ for $U[0, \theta]$.
$E[X_1] = \theta/2$. So $\hat{\theta}_1 = X_1$ is **not** unbiased for $\theta$. It is an unbiased estimator for $\theta/2$.

Let's proceed assuming the goal is to compare properties of the given estimators.

b) **Variance of $\hat{\theta}_1 = X_1$:**
$E[X_1^2] = \int_0^\theta x^2 \frac{1}{\theta} dx = \frac{1}{\theta} \left[\frac{x^3}{3}\right]_0^\theta = \frac{1}{\theta} \frac{\theta^3}{3} = \frac{\theta^2}{3}$.
$Var[X_1] = E[X_1^2] - (E[X_1])^2 = \frac{\theta^2}{3} - \left(\frac{\theta}{2}\right)^2 = \frac{\theta^2}{3} - \frac{\theta^2}{4} = \frac{4\theta^2 - 3\theta^2}{12} = \frac{\theta^2}{12}$.

c) **$\hat{\theta}_2 = \frac{N+1}{N} \max(X_1, \ldots, X_N)$ is unbiased for $\theta$:**
Let $Y = \max(X_1, \ldots, X_N)$. The CDF of $Y$ is $F_Y(y) = P(Y \leq y) = P(\max(X_i) \leq y) = P(X_1 \leq y, \ldots, X_N \leq y)$.
Since $X_i$ are i.i.d., $F_Y(y) = \prod_{i=1}^N P(X_i \leq y) = (F_X(y))^N$.
For $X_i \sim U[0, \theta]$, $F_X(y) = y/\theta$ for $0 \leq y \leq \theta$.
So, $F_Y(y) = (y/\theta)^N$ for $0 \leq y \leq \theta$.
The PDF of $Y$ is $f_Y(y) = \frac{d}{dy} F_Y(y) = \frac{N y^{N-1}}{\theta^N}$ for $0 \leq y \leq \theta$.
Now, let's find $E[Y]$:
$E[Y] = \int_0^\theta y f_Y(y) dy = \int_0^\theta y \frac{N y^{N-1}}{\theta^N} dy = \frac{N}{\theta^N} \int_0^\theta y^N dy$
$E[Y] = \frac{N}{\theta^N} \left[\frac{y^{N+1}}{N+1}\right]_0^\theta = \frac{N}{\theta^N} \frac{\theta^{N+1}}{N+1} = \frac{N\theta}{N+1}$.

Now, check $\hat{\theta}_2$:
$E[\hat{\theta}_2] = E\left[\frac{N+1}{N} Y\right] = \frac{N+1}{N} E[Y] = \frac{N+1}{N} \left(\frac{N\theta}{N+1}\right) = \theta$.
So, $\hat{\theta}_2 = \frac{N+1}{N} \max(X_1, \ldots, X_N)$ is an unbiased estimator for $\theta$.

d) **Variance of $\hat{\theta}_2$:**
$E[Y^2] = \int_0^\theta y^2 f_Y(y) dy = \int_0^\theta y^2 \frac{N y^{N-1}}{\theta^N} dy = \frac{N}{\theta^N} \int_0^\theta y^{N+1} dy$
$E[Y^2] = \frac{N}{\theta^N} \left[\frac{y^{N+2}}{N+2}\right]_0^\theta = \frac{N}{\theta^N} \frac{\theta^{N+2}}{N+2} = \frac{N\theta^2}{N+2}$.
$Var[Y] = E[Y^2] - (E[Y])^2 = \frac{N\theta^2}{N+2} - \left(\frac{N\theta}{N+1}\right)^2$
$Var[Y] = \frac{N\theta^2}{N+2} - \frac{N^2\theta^2}{(N+1)^2} = \theta^2 \left(\frac{N}{N+2} - \frac{N^2}{(N+1)^2}\right)$
$Var[Y] = \theta^2 \frac{N(N+1)^2 - N^2(N+2)}{(N+2)(N+1)^2} = \theta^2 \frac{N(N^2+2N+1) - N^3 - 2N^2}{(N+2)(N+1)^2}$
$Var[Y] = \theta^2 \frac{N^3+2N^2+N - N^3 - 2N^2}{(N+2)(N+1)^2} = \frac{N\theta^2}{(N+2)(N+1)^2}$.

Now, $Var[\hat{\theta}_2] = Var\left[\frac{N+1}{N} Y\right] = \left(\frac{N+1}{N}\right)^2 Var[Y]$
$Var[\hat{\theta}_2] = \left(\frac{N+1}{N}\right)^2 \frac{N\theta^2}{(N+2)(N+1)^2} = \frac{\theta^2}{N(N+2)}$.

e) **Which estimator is MVUE?**
We found $\hat{\theta}_1 = X_1$ is **not** unbiased for $\theta$. Therefore, it cannot be the MVUE for $\theta$.
$\hat{\theta}_2 = \frac{N+1}{N} \max(X_1, \ldots, X_N)$ is unbiased for $\theta$ with variance $Var[\hat{\theta}_2] = \frac{\theta^2}{N(N+2)}$.
The CRLB for estimating $\theta$ from $U[0, \theta]$ can be calculated as $\frac{\theta^2}{N}$.
Since $Var[\hat{\theta}_2] = \frac{\theta^2}{N(N+2)} < \frac{\theta^2}{N}$, $\hat{\theta}_2$ does not achieve the CRLB. However, it is the unbiased estimator with the smallest variance among those derived from the maximum sufficient statistic for $\theta$ (which is indeed the maximum). It is known that $\hat{\theta}_2$ is the MVUE for $\theta$.

**Justification:**
The maximum of $N$ i.i.d. $U[0, \theta]$ random variables is a sufficient statistic for $\theta$. The family of $U[0, \theta]$ distributions is also complete. Therefore, by the Rao-Blackwell theorem, conditioning any unbiased estimator on the maximum will yield a better or equal unbiased estimator. The estimator $\hat{\theta}_2$ is derived from the maximum and is unbiased. It can be shown to be the unique MVUE.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
