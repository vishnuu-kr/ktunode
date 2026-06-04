---
title: "Statistical Estimation Theory I"
subject: "ESTIMATION AND DETECTION"
module: "Module 1: Statistical Estimation Theory I"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780febc4"
status: "completed"
scrapedAt: "2026-05-23T17:56:38.886Z"
---
# Module 1: Statistical Estimation Theory I - Statistical Estimation Theory I

## Introduction to Statistical Estimation Theory

Statistical estimation theory is a fundamental branch of statistics concerned with inferring unknown parameters of a statistical model from observed data. In signal processing and various engineering disciplines, we often deal with noisy measurements that are modeled as a function of underlying physical parameters corrupted by random noise. The goal of estimation theory is to develop methods to estimate these unknown parameters as accurately as possible.

**Key Concepts and Definitions:**

*   **Parameter:** An unknown quantity that characterizes a statistical model. This could be the mean, variance, amplitude, frequency, or any other property of a signal or system.
    *   **Example:** In a simple additive white Gaussian noise (AWGN) model, $y[n] = s[n] + v[n]$, where $s[n]$ is the signal and $v[n]$ is the noise, if the signal is a constant $A$, then $A$ is the parameter we want to estimate.
*   **Data/Observation:** The set of measurements or signals that are available to us for estimation. This is typically a realization of a random process.
    *   **Example:** In the AWGN model, $y[n]$ are the observed data points.
*   **Estimator:** A function of the observed data that provides a guess for the unknown parameter. An estimator is often denoted by a "hat" over the parameter symbol (e.g., $\hat{\theta}$).
    *   **Example:** The sample mean of the observed data $y[n]$ is an estimator for the true mean.
*   **Estimate:** The specific value of an estimator for a given set of data.
*   **Model:** A mathematical description of how the observed data is generated from the underlying parameters and random noise.

**Kay, S.M., "Fundamentals of Statistical Signal Processing" Vol I: Estimation Theory (3/e), Chapter 1:** This chapter provides a foundational understanding of statistical models, random variables, and probability distributions, which are essential prerequisites for understanding estimation theory.

---

## Core Principles of Estimation (CO1: Summarize the fundamentals of statistical estimation principles)

The core of statistical estimation involves finding an "optimal" estimator. Optimality is usually defined in terms of desirable properties of the estimator.

**1. Point Estimation vs. Interval Estimation:**

*   **Point Estimation:** Providing a single value as the best guess for the unknown parameter.
*   **Interval Estimation:** Providing a range of values (an interval) within which the true parameter is likely to lie, along with a confidence level.

**2. Properties of Estimators:**

Several properties are used to evaluate the quality of an estimator.

*   **Unbiasedness:** An estimator is unbiased if its expected value equals the true parameter value.
    *   **Definition:** $\mathbb{E}[\hat{\theta}] = \theta$
    *   **Significance:** An unbiased estimator does not systematically overestimate or underestimate the true parameter.
    *   **Example:** For $y[n] = A + v[n]$ where $v[n] \sim \mathcal{N}(0, \sigma^2)$, the sample mean $\hat{A} = \frac{1}{N} \sum_{n=1}^N y[n]$ is an unbiased estimator for $A$.
        $\mathbb{E}[\hat{A}] = \mathbb{E}[\frac{1}{N} \sum_{n=1}^N (A + v[n])] = \frac{1}{N} \sum_{n=1}^N (A + \mathbb{E}[v[n]]) = \frac{1}{N} \sum_{n=1}^N (A + 0) = A$.

*   **Efficiency:** An estimator is efficient if it achieves the minimum possible variance among all unbiased estimators.
    *   **Significance:** A more efficient estimator has less variability in its estimates, meaning it's more likely to be close to the true parameter.

*   **Consistency:** An estimator is consistent if it converges to the true parameter value as the number of observations increases.
    *   **Definition:** $\hat{\theta} \xrightarrow{p} \theta$ as $N \to \infty$ (convergence in probability)
    *   **Significance:** With more data, a consistent estimator becomes increasingly accurate.

*   **Minimum Mean Squared Error (MMSE):** An estimator is an MMSE estimator if it minimizes the mean squared error (MSE).
    *   **Definition:** $\text{MSE}(\hat{\theta}) = \mathbb{E}[(\hat{\theta} - \theta)^2]$
    *   **Relationship to Unbiasedness and Variance:** $\text{MSE}(\hat{\theta}) = \mathbb{E}[(\hat{\theta} - \mathbb{E}[\hat{\theta}])^2] + (\mathbb{E}[\hat{\theta}] - \theta)^2 = \text{Var}(\hat{\theta}) + (\text{Bias}(\hat{\theta}))^2$.
    *   **Significance:** MMSE balances bias and variance. An unbiased estimator with minimum variance is also an MMSE estimator.

**Kay, S.M., Vol I, Chapter 2:** This chapter delves into the properties of estimators, including unbiasedness, efficiency, and consistency, and introduces the Cramer-Rao lower bound as a benchmark for unbiased estimators.

---

## Bayesian vs. Frequentist Estimation (CO1)

The two primary philosophical approaches to statistical inference are Frequentist and Bayesian.

**1. Frequentist Estimation:**

*   **Core Idea:** Parameters are fixed but unknown constants. Probability is interpreted as the long-run frequency of events.
*   **Goal:** To find estimators that have good long-run properties (e.g., unbiased, low variance).
*   **Methods:** Maximum Likelihood Estimation (MLE), Method of Moments.

**2. Bayesian Estimation:**

*   **Core Idea:** Parameters are random variables with a prior probability distribution that reflects our beliefs about their values before observing the data. Probability is a measure of belief.
*   **Goal:** To update our beliefs about the parameter after observing the data, resulting in a posterior probability distribution for the parameter.
*   **Methods:** Maximum A Posteriori (MAP) estimation, Minimum Mean Squared Error (MMSE) estimation (in a Bayesian context).

**Key Bayesian Concepts:**

*   **Prior Distribution:** $p(\theta)$: The probability distribution of the parameter before observing data.
*   **Likelihood Function:** $p(\mathbf{y}|\theta)$: The probability of observing the data $\mathbf{y}$ given a specific parameter value $\theta$.
*   **Posterior Distribution:** $p(\theta|\mathbf{y}) \propto p(\mathbf{y}|\theta) p(\theta)$: The updated probability distribution of the parameter after observing data, obtained via Bayes' Theorem.
*   **Bayes' Theorem:** $p(\theta|\mathbf{y}) = \frac{p(\mathbf{y}|\theta) p(\theta)}{p(\mathbf{y})} = \frac{p(\mathbf{y}|\theta) p(\theta)}{\int p(\mathbf{y}|\theta') p(\theta') d\theta'}$

**Kay, S.M., Vol I, Chapter 12:** This chapter provides a detailed treatment of Bayesian estimation, including prior distributions, likelihood, posterior distributions, and various Bayesian estimators (MAP, MMSE).

---

## Maximum Likelihood Estimation (MLE) (CO2: Apply different types of estimation algorithms)

MLE is a widely used and powerful frequentist method for estimating unknown parameters.

**Principle:** Find the parameter value that maximizes the likelihood function (i.e., the parameter value that makes the observed data most probable).

**Steps:**

1.  **Define the Likelihood Function:** For independent and identically distributed (i.i.d.) data $y_1, y_2, \ldots, y_N$ with probability density function (PDF) $f(y|\theta)$, the likelihood function is:
    $L(\theta|\mathbf{y}) = p(\mathbf{y}|\theta) = \prod_{i=1}^N f(y_i|\theta)$
    For non-i.i.d. data, $L(\theta|\mathbf{y}) = p(\mathbf{y}|\theta) = p(y_1, y_2, \ldots, y_N|\theta)$.
2.  **Maximize the Likelihood Function (or Log-Likelihood Function):** It is often easier to maximize the logarithm of the likelihood function, as the logarithm is a monotonically increasing function.
    $\ell(\theta|\mathbf{y}) = \log L(\theta|\mathbf{y}) = \sum_{i=1}^N \log f(y_i|\theta)$
    The MLE, denoted $\hat{\theta}_{MLE}$, is found by taking the derivative with respect to $\theta$ and setting it to zero:
    $\frac{\partial \ell(\theta|\mathbf{y})}{\partial \theta} = 0$
    Then solve for $\theta$.
3.  **Second-Order Condition:** Verify that this critical point is indeed a maximum by checking the second derivative.

**Example: Estimating the Mean of a Gaussian Distribution**

Let the data be $y_1, \ldots, y_N$, where $y_i \sim \mathcal{N}(\mu, \sigma^2)$. We want to estimate $\mu$, assuming $\sigma^2$ is known.
The PDF of a Gaussian is $f(y|\mu) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(y-\mu)^2}{2\sigma^2}\right)$.

1.  **Likelihood Function:**
    $L(\mu|\mathbf{y}) = \prod_{i=1}^N \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(y_i-\mu)^2}{2\sigma^2}\right)$
    $L(\mu|\mathbf{y}) = \left(\frac{1}{2\pi\sigma^2}\right)^{N/2} \exp\left(-\sum_{i=1}^N \frac{(y_i-\mu)^2}{2\sigma^2}\right)$
2.  **Log-Likelihood Function:**
    $\ell(\mu|\mathbf{y}) = \log L(\mu|\mathbf{y}) = -\frac{N}{2}\log(2\pi\sigma^2) - \frac{1}{2\sigma^2}\sum_{i=1}^N (y_i-\mu)^2$
3.  **Maximize:** Take the derivative with respect to $\mu$ and set to zero:
    $\frac{\partial \ell(\mu|\mathbf{y})}{\partial \mu} = -\frac{1}{2\sigma^2} \sum_{i=1}^N 2(y_i-\mu)(-1) = \frac{1}{\sigma^2} \sum_{i=1}^N (y_i-\mu)$
    $\frac{1}{\sigma^2} \sum_{i=1}^N (y_i-\mu) = 0$
    $\sum_{i=1}^N y_i - \sum_{i=1}^N \mu = 0$
    $\sum_{i=1}^N y_i - N\mu = 0$
    $N\mu = \sum_{i=1}^N y_i$
    $\hat{\mu}_{MLE} = \frac{1}{N}\sum_{i=1}^N y_i$

    The MLE for the mean of a Gaussian distribution is the sample mean, which we already know is unbiased.

**Kay, S.M., Vol I, Chapter 3:** This chapter is dedicated to Maximum Likelihood Estimation, covering its derivation, properties (asymptotic unbiasedness, efficiency, consistency), and application to various signal processing problems.

---

## Method of Moments (MOM) (CO2)

The Method of Moments is another frequentist approach that relies on equating sample moments to population moments.

**Principle:** Equate the first $k$ sample moments to the first $k$ population moments and solve for the $k$ unknown parameters.

**Steps:**

1.  **Define Population Moments:** The $m$-th population moment is $\mathbb{E}[Y^m]$.
2.  **Define Sample Moments:** The $m$-th sample moment is $\frac{1}{N}\sum_{i=1}^N y_i^m$.
3.  **Equate and Solve:** For $k$ parameters $\theta_1, \ldots, \theta_k$, set up $k$ equations:
    $\mathbb{E}[Y] = \frac{1}{N}\sum_{i=1}^N y_i$
    $\mathbb{E}[Y^2] = \frac{1}{N}\sum_{i=1}^N y_i^2$
    ...
    $\mathbb{E}[Y^k] = \frac{1}{N}\sum_{i=1}^N y_i^k$
    Solve these equations for $\theta_1, \ldots, \theta_k$.

**Example: Estimating Mean and Variance of a Gaussian Distribution**

Let $y_1, \ldots, y_N$ be i.i.d. from $\mathcal{N}(\mu, \sigma^2)$. We want to estimate $\mu$ and $\sigma^2$.

1.  **Population Moments:**
    *   First moment: $\mathbb{E}[Y] = \mu$
    *   Second moment: $\mathbb{E}[Y^2] = \text{Var}(Y) + (\mathbb{E}[Y])^2 = \sigma^2 + \mu^2$
2.  **Sample Moments:**
    *   First sample moment: $\bar{y} = \frac{1}{N}\sum_{i=1}^N y_i$
    *   Second sample moment: $\frac{1}{N}\sum_{i=1}^N y_i^2$
3.  **Equate and Solve:**
    *   $\mu = \bar{y}$  => $\hat{\mu}_{MOM} = \bar{y}$
    *   $\sigma^2 + \mu^2 = \frac{1}{N}\sum_{i=1}^N y_i^2$
        Substitute $\hat{\mu}_{MOM}$ into the second equation:
        $\sigma^2 + (\bar{y})^2 = \frac{1}{N}\sum_{i=1}^N y_i^2$
        $\hat{\sigma}^2_{MOM} = \frac{1}{N}\sum_{i=1}^N y_i^2 - (\bar{y})^2 = \frac{1}{N}\sum_{i=1}^N (y_i - \bar{y})^2$

    Note that $\hat{\sigma}^2_{MOM}$ is a biased estimator of $\sigma^2$. The unbiased sample variance uses $N-1$ in the denominator.

**Kay, S.M., Vol I, Chapter 4:** This chapter discusses the Method of Moments, its relationship to MLE, and its properties.

---

## Bayesian Estimation: MAP and MMSE (CO2)

**1. Maximum A Posteriori (MAP) Estimation (CO2):**

*   **Principle:** Find the parameter value that maximizes the posterior distribution $p(\theta|\mathbf{y})$.
*   **Goal:** To find the most probable value of the parameter given the data and the prior beliefs.
*   **Derivation:**
    $p(\theta|\mathbf{y}) = \frac{p(\mathbf{y}|\theta) p(\theta)}{p(\mathbf{y})}$
    Since $p(\mathbf{y})$ is constant with respect to $\theta$, maximizing $p(\theta|\mathbf{y})$ is equivalent to maximizing $p(\mathbf{y}|\theta) p(\theta)$.
    $\hat{\theta}_{MAP} = \arg \max_{\theta} p(\mathbf{y}|\theta) p(\theta)$
    Equivalently, maximize the log-posterior:
    $\hat{\theta}_{MAP} = \arg \max_{\theta} [\log p(\mathbf{y}|\theta) + \log p(\theta)]$

**Example: Estimating the Mean of a Gaussian with a Gaussian Prior**

Let $y_i \sim \mathcal{N}(\mu, \sigma_v^2)$ and assume a prior on $\mu$: $\mu \sim \mathcal{N}(\mu_0, \sigma_p^2)$.

*   Likelihood: $p(\mathbf{y}|\mu) \propto \exp\left(-\frac{1}{2\sigma_v^2}\sum(y_i-\mu)^2\right)$
*   Prior: $p(\mu) \propto \exp\left(-\frac{1}{2\sigma_p^2}(\mu-\mu_0)^2\right)$
*   Posterior (ignoring constants):
    $\log p(\mathbf{y}|\mu) + \log p(\mu) = -\frac{1}{2\sigma_v^2}\sum(y_i-\mu)^2 - \frac{1}{2\sigma_p^2}(\mu-\mu_0)^2 + C$
    $= -\frac{1}{2\sigma_v^2}\sum(y_i^2 - 2y_i\mu + \mu^2) - \frac{1}{2\sigma_p^2}(\mu^2 - 2\mu\mu_0 + \mu_0^2) + C$
    Focus on terms involving $\mu$:
    $\frac{1}{\sigma_v^2}\sum y_i \mu - \frac{N}{2\sigma_v^2}\mu^2 - \frac{1}{2\sigma_p^2}\mu^2 + \frac{\mu_0}{\sigma_p^2}\mu$
    Combine $\mu^2$ terms: $-\mu^2 \left(\frac{N}{2\sigma_v^2} + \frac{1}{2\sigma_p^2}\right)$
    Combine $\mu$ terms: $\mu \left(\frac{1}{\sigma_v^2}\sum y_i + \frac{\mu_0}{\sigma_p^2}\right)$
    This is a quadratic in $\mu$, of the form $-a\mu^2 + b\mu$, which is maximized when $\mu = b/(2a)$.
    $2a = \frac{N}{\sigma_v^2} + \frac{1}{\sigma_p^2}$
    $b = \frac{1}{\sigma_v^2}\sum y_i + \frac{\mu_0}{\sigma_p^2}$
    $\hat{\mu}_{MAP} = \frac{\frac{1}{\sigma_v^2}\sum y_i + \frac{\mu_0}{\sigma_p^2}}{\frac{N}{\sigma_v^2} + \frac{1}{\sigma_p^2}}$
    This can be rewritten as a weighted average:
    $\hat{\mu}_{MAP} = \frac{\sigma_p^2 \sum y_i + N\sigma_v^2 \mu_0}{N\sigma_p^2 + \sigma_v^2} = \frac{\sigma_p^2 N \bar{y} + \sigma_v^2 \mu_0}{N\sigma_p^2 + \sigma_v^2} = \frac{\sigma_p^2 \bar{y} + \frac{\sigma_v^2}{N} \mu_0}{\sigma_p^2 + \frac{\sigma_v^2}{N}}$
    This shows that the MAP estimate is a compromise between the sample mean $\bar{y}$ and the prior mean $\mu_0$, weighted by their respective precisions (inverse variances).

**2. Minimum Mean Squared Error (MMSE) Estimation (Bayesian) (CO2):**

*   **Principle:** Find the estimator that minimizes the mean squared error $\mathbb{E}[(\hat{\theta} - \theta)^2]$, where the expectation is taken with respect to the posterior distribution $p(\theta|\mathbf{y})$.
*   **Result:** The MMSE estimator is the conditional expectation of the parameter given the data:
    $\hat{\theta}_{MMSE} = \mathbb{E}[\theta|\mathbf{y}] = \int \theta p(\theta|\mathbf{y}) d\theta$

**Example: Estimating the Mean of a Gaussian with a Gaussian Prior (MMSE)**

Using the same setup as the MAP example (Gaussian data with Gaussian prior on the mean):
The posterior distribution $p(\theta|\mathbf{y})$ is also Gaussian. The mean of this posterior Gaussian is the MMSE estimator.
The posterior distribution is found to be $\mathcal{N}(\mu_{post}, \sigma_{post}^2)$, where:
$\mu_{post} = \frac{\sigma_p^2 \sum y_i + \sigma_v^2 \mu_0}{\sigma_p^2 N + \sigma_v^2} = \frac{\sigma_p^2 N \bar{y} + \sigma_v^2 \mu_0}{N\sigma_p^2 + \sigma_v^2} = \frac{\sigma_p^2 \bar{y} + \frac{\sigma_v^2}{N} \mu_0}{\sigma_p^2 + \frac{\sigma_v^2}{N}}$
and
$\sigma_{post}^2 = \frac{\sigma_p^2 \sigma_v^2}{\sigma_p^2 N + \sigma_v^2} = \frac{\sigma_p^2 \frac{\sigma_v^2}{N}}{\sigma_p^2 + \frac{\sigma_v^2}{N}}$

Thus, $\hat{\mu}_{MMSE} = \mu_{post} = \frac{\sigma_p^2 N \bar{y} + \sigma_v^2 \mu_0}{N\sigma_p^2 + \sigma_v^2}$.
For this specific case (Gaussian likelihood and Gaussian prior), the MAP and MMSE estimators are the same. This is not generally true for other distributions or priors.

**Important Point:** For a given parameter and data model, the MMSE estimator minimizes the MSE for *any* posterior distribution. If the posterior distribution is symmetric about its mean (like a Gaussian), then MAP and MMSE estimators coincide.

**Kay, S.M., Vol I, Chapter 12:** Expands on these Bayesian estimators.

---

## The Cramer-Rao Lower Bound (CRLB) (CO1)

The CRLB provides a fundamental limit on the variance of any unbiased estimator.

**Principle:** For any unbiased estimator $\hat{\theta}$ of a parameter $\theta$, its variance is lower-bounded by the reciprocal of the Fisher Information.

**Fisher Information ($I(\theta)$):** A measure of the amount of information that an observable random variable $Y$ carries about an unknown parameter $\theta$.

*   **Definition (for a scalar parameter $\theta$ and i.i.d. data):**
    $I(\theta) = - \mathbb{E}\left[\frac{\partial^2 \log p(\mathbf{y}|\theta)}{\partial \theta^2}\right]$
    Alternatively, $I(\theta) = \mathbb{E}\left[\left(\frac{\partial \log p(\mathbf{y}|\theta)}{\partial \theta}\right)^2\right]$
    The second form is often easier to compute if the first derivative is taken with respect to $\theta$ and then squared.

**Cramer-Rao Lower Bound (CRLB):**
$\text{Var}(\hat{\theta}) \ge \frac{1}{I(\theta)}$ for any unbiased estimator $\hat{\theta}$.

**Significance:**

*   It sets a benchmark for how well we can estimate a parameter.
*   An estimator that achieves the CRLB is called an **efficient estimator**.
*   If the Fisher Information is infinite, then the variance can be zero, meaning a perfect estimate is possible.

**Example: CRLB for the Mean of a Gaussian**

We found $\hat{\mu}_{MLE} = \bar{y}$ for $y_i \sim \mathcal{N}(\mu, \sigma^2)$. We know $\text{Var}(\bar{y}) = \frac{\sigma^2}{N}$. Let's verify if this matches the CRLB.

1.  **Log-Likelihood:** $\ell(\mu|\mathbf{y}) = -\frac{N}{2}\log(2\pi\sigma^2) - \frac{1}{2\sigma^2}\sum_{i=1}^N (y_i-\mu)^2$
2.  **First Derivative:** $\frac{\partial \ell(\mu|\mathbf{y})}{\partial \mu} = \frac{1}{\sigma^2}\sum_{i=1}^N (y_i-\mu)$
3.  **Second Derivative:** $\frac{\partial^2 \ell(\mu|\mathbf{y})}{\partial \mu^2} = \frac{1}{\sigma^2}\sum_{i=1}^N (-1) = -\frac{N}{\sigma^2}$
4.  **Fisher Information:**
    $I(\mu) = - \mathbb{E}\left[\frac{\partial^2 \ell(\mu|\mathbf{y})}{\partial \mu^2}\right] = - \mathbb{E}\left[-\frac{N}{\sigma^2}\right] = \frac{N}{\sigma^2}$
5.  **CRLB:**
    $\text{Var}(\hat{\mu}) \ge \frac{1}{I(\mu)} = \frac{\sigma^2}{N}$

Since the variance of the MLE ($\text{Var}(\bar{y}) = \frac{\sigma^2}{N}$) achieves the CRLB, the sample mean is an **efficient estimator** for the mean of a Gaussian distribution.

**Kay, S.M., Vol I, Chapter 2:** Provides a thorough explanation of the CRLB and its properties.

---

## Vector Parameter Estimation

The principles extend to estimating a vector of parameters $\boldsymbol{\theta} = [\theta_1, \ldots, \theta_p]^T$.

*   **Likelihood Function:** $L(\boldsymbol{\theta}|\mathbf{y}) = p(\mathbf{y}|\boldsymbol{\theta})$
*   **Log-Likelihood Gradient:** $\nabla_{\boldsymbol{\theta}} \log p(\mathbf{y}|\boldsymbol{\theta})$ (a column vector of partial derivatives)
*   **Fisher Information Matrix ($I(\boldsymbol{\theta})$):** A $p \times p$ matrix.
    $[I(\boldsymbol{\theta})]_{ij} = - \mathbb{E}\left[\frac{\partial^2 \log p(\mathbf{y}|\boldsymbol{\theta})}{\partial \theta_i \partial \theta_j}\right]$
    The CRLB for an unbiased estimator $\hat{\boldsymbol{\theta}}$ is:
    $\text{Cov}(\hat{\boldsymbol{\theta}}) \ge [I(\boldsymbol{\theta})]^{-1}$
    where $\text{Cov}(\hat{\boldsymbol{\theta}})$ is the covariance matrix of the estimator, and $\ge$ denotes that the difference is a positive semidefinite matrix.

**MLE for Vector Parameters:**
$\hat{\boldsymbol{\theta}}_{MLE} = \arg \max_{\boldsymbol{\theta}} \log p(\mathbf{y}|\boldsymbol{\theta})$
This is found by setting the gradient of the log-likelihood to the zero vector:
$\nabla_{\boldsymbol{\theta}} \log p(\mathbf{y}|\boldsymbol{\theta}) = \mathbf{0}$

**Kay, S.M., Vol I, Chapter 3 and 12:** Discuss vector parameter estimation in the context of MLE and Bayesian methods, respectively.

---

## Important Points to Remember:

*   **Bias vs. Variance:** An estimator can be unbiased but have high variance, or biased with low variance. The goal is often to minimize the Mean Squared Error (MSE), which considers both.
*   **MLE:** A powerful frequentist technique that often yields efficient estimators, especially asymptotically.
*   **Bayesian Estimation:** Incorporates prior knowledge, leading to estimators like MAP and MMSE. MMSE minimizes MSE by definition.
*   **CRLB:** A fundamental lower bound on the variance of unbiased estimators. Estimators achieving CRLB are efficient.
*   **Model Assumption:** The performance of any estimator is heavily dependent on the correctness of the assumed statistical model.
*   **Data Size:** The number of observations ($N$) plays a crucial role. As $N \to \infty$, many estimators (like MLE) become consistent and asymptotically efficient.

---

## Practice Questions and Exercises

**Question 1:**
Consider a noisy measurement $y = \theta + v$, where $v$ is zero-mean Gaussian noise with variance $\sigma^2$. We have $N$ independent observations $y_1, \ldots, y_N$.
(a) What is the MLE for $\theta$?
(b) Is this MLE estimator unbiased? What is its variance?
(c) Calculate the CRLB for estimating $\theta$. Is the MLE efficient?

**Answer 1:**
(a) The MLE for $\theta$ is the sample mean: $\hat{\theta}_{MLE} = \frac{1}{N}\sum_{i=1}^N y_i$.
(b) Yes, the MLE is unbiased: $\mathbb{E}[\hat{\theta}_{MLE}] = \mathbb{E}[\frac{1}{N}\sum( \theta + v_i)] = \frac{1}{N} (N\theta + \sum \mathbb{E}[v_i]) = \frac{1}{N} (N\theta + 0) = \theta$.
    The variance is $\text{Var}(\hat{\theta}_{MLE}) = \text{Var}(\frac{1}{N}\sum(\theta + v_i)) = \text{Var}(\frac{1}{N}\sum v_i) = \frac{1}{N^2} \sum \text{Var}(v_i) = \frac{1}{N^2} (N\sigma^2) = \frac{\sigma^2}{N}$.
(c) The log-likelihood is $\ell(\theta|\mathbf{y}) = -\frac{N}{2}\log(2\pi\sigma^2) - \frac{1}{2\sigma^2}\sum(y_i-\theta)^2$.
    $\frac{\partial \ell}{\partial \theta} = \frac{1}{\sigma^2}\sum(y_i-\theta)$.
    $\frac{\partial^2 \ell}{\partial \theta^2} = -\frac{N}{\sigma^2}$.
    Fisher Information: $I(\theta) = - \mathbb{E}[-\frac{N}{\sigma^2}] = \frac{N}{\sigma^2}$.
    CRLB: $\text{Var}(\hat{\theta}) \ge \frac{1}{I(\theta)} = \frac{\sigma^2}{N}$.
    Since the variance of the MLE equals the CRLB, the MLE is efficient.

**Question 2:**
Consider estimating the amplitude $A$ of a sinusoid in noise: $y[n] = A \cos(2\pi f_0 n) + v[n]$, for $n=1, \ldots, N$, where $v[n] \sim \mathcal{N}(0, \sigma^2)$ and $f_0$ is known.
(a) Write down the likelihood function for $A$.
(b) Find the MLE for $A$.
(c) What is the variance of the MLE? (Hint: You might need to approximate for large $N$).

**Answer 2:**
(a) The likelihood function is:
    $L(A|\mathbf{y}) = \prod_{n=1}^N \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(y[n]-A\cos(2\pi f_0 n))^2}{2\sigma^2}\right)$
    $L(A|\mathbf{y}) = \left(\frac{1}{2\pi\sigma^2}\right)^{N/2} \exp\left(-\frac{1}{2\sigma^2}\sum_{n=1}^N (y[n]-A\cos(2\pi f_0 n))^2\right)$
(b) To find the MLE, we maximize the log-likelihood:
    $\ell(A|\mathbf{y}) = -\frac{N}{2}\log(2\pi\sigma^2) - \frac{1}{2\sigma^2}\sum_{n=1}^N (y[n]-A\cos(2\pi f_0 n))^2$
    Take the derivative with respect to $A$ and set to zero:
    $\frac{\partial \ell}{\partial A} = -\frac{1}{2\sigma^2}\sum_{n=1}^N 2(y[n]-A\cos(2\pi f_0 n))(-\cos(2\pi f_0 n)) = 0$
    $\sum_{n=1}^N (y[n]-A\cos(2\pi f_0 n))\cos(2\pi f_0 n) = 0$
    $\sum_{n=1}^N y[n]\cos(2\pi f_0 n) - A\sum_{n=1}^N \cos^2(2\pi f_0 n) = 0$
    $A \sum_{n=1}^N \cos^2(2\pi f_0 n) = \sum_{n=1}^N y[n]\cos(2\pi f_0 n)$
    $\hat{A}_{MLE} = \frac{\sum_{n=1}^N y[n]\cos(2\pi f_0 n)}{\sum_{n=1}^N \cos^2(2\pi f_0 n)}$
(c) The variance of the MLE for large $N$ can be approximated using the Fisher Information. The second derivative of the log-likelihood is:
    $\frac{\partial^2 \ell}{\partial A^2} = -\frac{1}{\sigma^2}\sum_{n=1}^N \cos^2(2\pi f_0 n)$
    So, $I(A) = - \mathbb{E}[\frac{\partial^2 \ell}{\partial A^2}] = \frac{1}{\sigma^2}\sum_{n=1}^N \mathbb{E}[\cos^2(2\pi f_0 n)]$.
    For a sufficiently large $N$ and appropriate $f_0$, $\frac{1}{N}\sum_{n=1}^N \cos^2(2\pi f_0 n) \approx \frac{1}{2}$.
    Thus, $\sum_{n=1}^N \cos^2(2\pi f_0 n) \approx \frac{N}{2}$.
    $I(A) \approx \frac{1}{\sigma^2} \frac{N}{2} = \frac{N}{2\sigma^2}$.
    The CRLB is $\text{Var}(\hat{A}) \ge \frac{1}{I(A)} \approx \frac{2\sigma^2}{N}$.
    The MLE is approximately efficient for large $N$.

---

## Alignment with Course Outcomes:

*   **CO1: Summarize the fundamentals of statistical estimation principles used in various engineering problems. (Knowledge Level: K2)**
    *   This module covers the core principles (bias, variance, efficiency, consistency, MSE), frequentist vs. Bayesian approaches, and the fundamental limit (CRLB). These are the building blocks for understanding estimation in engineering.

*   **CO2: Apply different types of estimation algorithms in engineering applications. (Knowledge Level: K3)**
    *   The module details the application of MLE, Method of Moments, MAP, and MMSE estimators with concrete examples, enabling students to apply these algorithms.

---

This comprehensive set of notes covers the fundamentals of statistical estimation theory as introduced in Module 1. It lays the groundwork for understanding more advanced estimation techniques and their applications in various engineering fields. Remember to consult Kay's textbooks for more in-depth derivations and proofs.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
