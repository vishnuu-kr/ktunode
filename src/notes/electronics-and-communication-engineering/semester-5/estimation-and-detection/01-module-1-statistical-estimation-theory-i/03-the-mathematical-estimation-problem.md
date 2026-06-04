---
title: "the mathematical estimation problem"
subject: "ESTIMATION AND DETECTION"
module: "Module 1: Statistical Estimation Theory I"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780febc6"
status: "completed"
scrapedAt: "2026-05-23T17:56:40.300Z"
---
# ESTIMATION AND DETECTION: Module 1: Statistical Estimation Theory I

## Topic: The Mathematical Estimation Problem

This module introduces the fundamental concepts of statistical estimation theory, focusing on how we use observed data to infer unknown parameters of a system.

---

### 1. Introduction to Statistical Estimation (CO1 - K2)

**What is Statistical Estimation?**

Statistical estimation is the process of using observed data, often corrupted by noise or uncertainty, to infer the value of unknown parameters that characterize a system or signal. The core idea is to build a mathematical model that relates the observed data to the underlying parameters we want to estimate.

**Key Components of the Estimation Problem:**

*   **Observations ($y$):** The data we collect. This is typically a vector of measurements.
    *   *Example:* Measuring the voltage across a resistor over time.
*   **Unknown Parameter ($\theta$):** The quantity we want to estimate. This can be a scalar or a vector.
    *   *Example:* The true resistance of the resistor.
*   **Model:** A mathematical relationship that describes how the observations are generated based on the unknown parameter and possibly other factors like noise.
    *   *Example:* $y = \theta x + v$, where $x$ is a known input (e.g., current) and $v$ is noise.
*   **Noise/Disturbance ($v$):** Random errors or uncertainties that affect the observations.
    *   *Example:* Thermal noise in electronic components.

**Types of Estimation Problems:**

*   **Parameter Estimation:** Estimating specific numerical values of unknown parameters.
    *   *Example:* Estimating the mean of a signal, the amplitude of a pulse, or the frequency of a sinusoid.
*   **System Identification:** Estimating the parameters of a mathematical model that describes the behavior of a system.
    *   *Example:* Estimating the coefficients of a linear filter.
*   **Signal Estimation (Restoration):** Estimating the original signal when it has been corrupted by noise or distortion.
    *   *Example:* Removing noise from an audio recording.

---

### 2. Mathematical Formulation of the Estimation Problem (CO1 - K2)

The core of statistical estimation lies in defining a probabilistic model that links the observations to the unknown parameter.

**The Observation Model:**

We generally express the relationship between the observations $\mathbf{y}$ and the unknown parameter $\boldsymbol{\theta}$ as follows:

$$
\mathbf{y} = f(\boldsymbol{\theta}, \mathbf{s}) + \mathbf{v}
$$

where:
*   $\mathbf{y} \in \mathbb{R}^N$ is the vector of $N$ observations.
*   $\boldsymbol{\theta} \in \mathbb{R}^M$ is the vector of $M$ unknown parameters to be estimated.
*   $f(\cdot)$ is a function that describes how the parameter influences the "noiseless" signal. This function can be linear or non-linear.
*   $\mathbf{s}$ is a vector of known quantities (e.g., input signals, time instants).
*   $\mathbf{v} \in \mathbb{R}^N$ is the vector of additive noise.

**Probability Distributions:**

To perform estimation, we need to define the probability distributions involved.

*   **Likelihood Function ($p(\mathbf{y} | \boldsymbol{\theta})$):** This is the probability distribution of the observations $\mathbf{y}$ given a specific value of the parameter $\boldsymbol{\theta}$. This is a crucial function for many estimation methods.
    *   *Kay, Vol I, Chapter 2:* Emphasizes the importance of the likelihood function.
*   **Prior Distribution ($p(\boldsymbol{\theta})$):** This represents our beliefs about the parameter $\boldsymbol{\theta}$ before observing any data. This is used in Bayesian estimation.
*   **Posterior Distribution ($p(\boldsymbol{\theta} | \mathbf{y})$):** This represents our updated beliefs about $\boldsymbol{\theta}$ after observing the data $\mathbf{y}$. It is derived using Bayes' Theorem: $p(\boldsymbol{\theta} | \mathbf{y}) = \frac{p(\mathbf{y} | \boldsymbol{\theta}) p(\boldsymbol{\theta})}{p(\mathbf{y})}$, where $p(\mathbf{y}) = \int p(\mathbf{y} | \boldsymbol{\theta}) p(\boldsymbol{\theta}) d\boldsymbol{\theta}$ (or sum for discrete parameters).

**Example: Estimating the Mean of a Gaussian Distribution**

Suppose we have $N$ independent and identically distributed (i.i.d.) observations $y_1, y_2, \ldots, y_N$. We assume these observations are drawn from a Gaussian distribution with an unknown mean $\theta$ and known variance $\sigma^2$.

*   **Observations:** $\mathbf{y} = [y_1, y_2, \ldots, y_N]^T$.
*   **Unknown Parameter:** $\boldsymbol{\theta} = [\theta]$.
*   **Model:** $y_i = \theta + v_i$, where $v_i \sim \mathcal{N}(0, \sigma^2)$.
*   **Likelihood Function:** Since the observations are i.i.d., the likelihood is the product of individual probabilities:
    $$
    p(\mathbf{y} | \theta) = \prod_{i=1}^N p(y_i | \theta) = \prod_{i=1}^N \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(y_i - \theta)^2}{2\sigma^2}\right)
    $$
    $$
    p(\mathbf{y} | \theta) = \left(\frac{1}{2\pi\sigma^2}\right)^{N/2} \exp\left(-\frac{1}{2\sigma^2} \sum_{i=1}^N (y_i - \theta)^2\right)
    $$

This likelihood function is fundamental for deriving estimators like the Maximum Likelihood Estimator (MLE).

---

### 3. Properties of Estimators (CO1 - K2)

Once we have a method to produce an estimate $\hat{\boldsymbol{\theta}}$ from the observed data, we need ways to evaluate how good that estimate is. We typically do this by examining the properties of the estimator as a function of the true parameter $\boldsymbol{\theta}$.

Let $\hat{\boldsymbol{\theta}}(\mathbf{y})$ be an estimator for $\boldsymbol{\theta}$.

**1. Bias:**

The bias of an estimator measures the difference between the expected value of the estimator and the true parameter.

*   **Definition:** Bias($\hat{\boldsymbol{\theta}}$) = $E[\hat{\boldsymbol{\theta}}(\mathbf{y}) | \boldsymbol{\theta}] - \boldsymbol{\theta}$.
*   **Unbiased Estimator:** An estimator is unbiased if its bias is zero for all possible values of $\boldsymbol{\theta}$. $E[\hat{\boldsymbol{\theta}}(\mathbf{y}) | \boldsymbol{\theta}] = \boldsymbol{\theta}$.
    *   *Kay, Vol I, Section 2.2.1:* Discusses the concept of unbiasedness.
    *   *Example (Mean Estimation):* If $\hat{\theta} = \frac{1}{N}\sum_{i=1}^N y_i$ where $y_i = \theta + v_i$ and $E[v_i]=0$, then $E[\hat{\theta}] = E[\frac{1}{N}\sum (\theta + v_i)] = \frac{1}{N}\sum (\theta + E[v_i]) = \frac{1}{N}\sum \theta = \frac{1}{N} (N\theta) = \theta$. So, the sample mean is an unbiased estimator of the true mean.

**2. Mean Squared Error (MSE):**

The MSE measures the average squared difference between the estimator and the true parameter. It is a common metric for evaluating the overall performance of an estimator.

*   **Definition:** MSE($\hat{\boldsymbol{\theta}}$) = $E[(\hat{\boldsymbol{\theta}}(\mathbf{y}) - \boldsymbol{\theta})^2 | \boldsymbol{\theta}]$.
*   **Relationship to Bias and Variance:** The MSE can be decomposed as:
    $$
    \text{MSE}(\hat{\boldsymbol{\theta}}) = \text{Bias}(\hat{\boldsymbol{\theta}})^2 + \text{Var}(\hat{\boldsymbol{\theta}})
    $$
    where $\text{Var}(\hat{\boldsymbol{\theta}}) = E[(\hat{\boldsymbol{\theta}}(\mathbf{y}) - E[\hat{\boldsymbol{\theta}}(\mathbf{y})])^2 | \boldsymbol{\theta}]$.
    *   This means MSE = (Bias)$^2$ + Variance.
    *   An estimator can be unbiased but have a large variance, or it can be biased but have a small variance. The MSE captures both aspects.

**3. Consistency:**

An estimator is consistent if it converges in probability to the true parameter as the number of observations $N$ goes to infinity.

*   **Definition:** $\hat{\boldsymbol{\theta}}(\mathbf{y}) \xrightarrow{p} \boldsymbol{\theta}$ as $N \to \infty$. This means for any $\epsilon > 0$, $P(|\hat{\boldsymbol{\theta}}(\mathbf{y}) - \boldsymbol{\theta}| > \epsilon) \to 0$ as $N \to \infty$.
*   **Intuition:** With more data, the estimate gets arbitrarily close to the true value.
*   **Condition for Consistency:** If an estimator is asymptotically unbiased (bias goes to zero as $N \to \infty$) and its variance also goes to zero as $N \to \infty$, then it is consistent.
    *   *Example:* The sample mean is a consistent estimator for the population mean. As $N \to \infty$, its bias is 0 and its variance $ \text{Var}(\hat{\theta}) = \text{Var}(\frac{1}{N}\sum y_i) = \frac{1}{N^2} \sum \text{Var}(y_i) = \frac{1}{N^2} N\sigma^2 = \frac{\sigma^2}{N} \to 0$.

**4. Efficiency:**

An estimator is efficient if it achieves the minimum possible variance among a certain class of estimators.

*   **Cramér-Rao Lower Bound (CRLB):** This is a fundamental lower bound on the variance of any unbiased estimator.
    *   **Definition (for scalar parameter):** For an unbiased estimator $\hat{\theta}$, $\text{Var}(\hat{\theta}) \ge \frac{1}{I(\theta)}$, where $I(\theta)$ is the Fisher Information.
    *   **Fisher Information ($I(\theta)$):**
        $$
        I(\theta) = E\left[\left(\frac{\partial \ln p(\mathbf{y} | \theta)}{\partial \theta}\right)^2 | \theta\right] = -E\left[\frac{\partial^2 \ln p(\mathbf{y} | \theta)}{\partial \theta^2} | \theta\right]
        $$
    *   **Efficient Estimator:** An unbiased estimator whose variance achieves the CRLB is called an efficient estimator.
    *   *Kay, Vol I, Chapter 2.3:* Provides a detailed explanation of the CRLB and efficient estimators.
    *   *Relevance:* If we find an estimator that achieves the CRLB, we know it's the "best" possible unbiased estimator in terms of variance.

**5. Sufficiency:**

A statistic $T(\mathbf{y})$ is sufficient for $\boldsymbol{\theta}$ if it contains all the information in the data $\mathbf{y}$ about $\boldsymbol{\theta}$. Any function of the data that is an estimator for $\boldsymbol{\theta}$ can be expressed as a function of the sufficient statistic.

*   **Factorization Theorem:** $T(\mathbf{y})$ is sufficient for $\boldsymbol{\theta}$ if and only if the likelihood function can be factored as $p(\mathbf{y} | \boldsymbol{\theta}) = g(T(\mathbf{y}) | \boldsymbol{\theta}) h(\mathbf{y})$, where $g$ depends on $\boldsymbol{\theta}$ and $h$ does not depend on $\boldsymbol{\theta}$.
*   *Significance:* Using a sufficient statistic simplifies the estimation problem, as we only need to process this reduced set of information.

---

### 4. Practice Questions and Exercises

**Question 1 (CO1 - K2):**

Define the terms "bias" and "variance" of an estimator. How are these two properties related to the Mean Squared Error (MSE)?

**Answer 1:**

*   **Bias:** The bias of an estimator $\hat{\boldsymbol{\theta}}$ for a parameter $\boldsymbol{\theta}$ is the difference between the expected value of the estimator and the true parameter: $\text{Bias}(\hat{\boldsymbol{\theta}}) = E[\hat{\boldsymbol{\theta}}] - \boldsymbol{\theta}$. An unbiased estimator has zero bias.
*   **Variance:** The variance of an estimator $\hat{\boldsymbol{\theta}}$ measures the spread or dispersion of the estimator's values around its expected value: $\text{Var}(\hat{\boldsymbol{\theta}}) = E[(\hat{\boldsymbol{\theta}} - E[\hat{\boldsymbol{\theta}}])^2]$.
*   **MSE:** The Mean Squared Error (MSE) is defined as $\text{MSE}(\hat{\boldsymbol{\theta}}) = E[(\hat{\boldsymbol{\theta}} - \boldsymbol{\theta})^2]$. It can be decomposed as $\text{MSE}(\hat{\boldsymbol{\theta}}) = \text{Bias}(\hat{\boldsymbol{\theta}})^2 + \text{Var}(\hat{\boldsymbol{\theta}})$. This means MSE accounts for both the systematic error (bias) and the random error (variance) of an estimator.

**Question 2 (CO1 - K2):**

Consider $N$ independent observations $y_1, \dots, y_N$ drawn from a Bernoulli distribution with an unknown parameter $p$. The probability mass function is $p(y_i | p) = p^{y_i} (1-p)^{1-y_i}$, where $y_i \in \{0, 1\}$.

(a) Write down the likelihood function $p(\mathbf{y} | p)$.
(b) Is the sample mean $\hat{p} = \frac{1}{N}\sum_{i=1}^N y_i$ an unbiased estimator for $p$? Justify your answer.

**Answer 2:**

(a) The likelihood function is:
$$
p(\mathbf{y} | p) = \prod_{i=1}^N p(y_i | p) = \prod_{i=1}^N p^{y_i} (1-p)^{1-y_i}
$$
$$
p(\mathbf{y} | p) = p^{\sum y_i} (1-p)^{N - \sum y_i}
$$

(b) The expected value of a Bernoulli random variable is $E[y_i] = p$.
The expected value of the sample mean is:
$$
E[\hat{p}] = E\left[\frac{1}{N}\sum_{i=1}^N y_i\right] = \frac{1}{N}\sum_{i=1}^N E[y_i] = \frac{1}{N}\sum_{i=1}^N p = \frac{1}{N}(Np) = p
$$
Since $E[\hat{p}] = p$, the sample mean $\hat{p}$ is an **unbiased** estimator for $p$.

**Question 3 (CO1 - K2):**

What is the Cramér-Rao Lower Bound (CRLB)? Explain its significance in the context of estimation.

**Answer 3:**

The Cramér-Rao Lower Bound (CRLB) provides a theoretical lower limit on the variance of any unbiased estimator for a given parameter. For a scalar parameter $\theta$, the CRLB states that the variance of any unbiased estimator $\hat{\theta}$ must satisfy $\text{Var}(\hat{\theta}) \ge \frac{1}{I(\theta)}$, where $I(\theta)$ is the Fisher Information.

**Significance:**

*   **Benchmarking:** The CRLB serves as a benchmark for evaluating the performance of estimators. If an estimator achieves the CRLB, it is considered the most efficient unbiased estimator possible.
*   **Optimal Estimator Identification:** It guides the search for optimal estimators. If a particular estimation technique (like Maximum Likelihood) produces an estimator that meets the CRLB, it is often considered optimal in terms of variance.
*   **Understanding Fundamental Limits:** It helps understand the fundamental limits imposed by the statistical model and the data on how accurately we can estimate a parameter.

---

### 5. Important Points to Remember

*   **The Goal:** To infer unknown parameters from noisy observations using a probabilistic model.
*   **Key Components:** Observations, unknown parameter(s), model, and noise.
*   **Likelihood Function:** Central to many estimation techniques; describes $p(\mathbf{y} | \boldsymbol{\theta})$.
*   **Estimator Properties:** Bias, variance, MSE, consistency, and efficiency are crucial for evaluating estimators.
*   **MSE = Bias$^2$ + Variance:** This fundamental identity links bias and variance.
*   **CRLB:** A lower bound on the variance of unbiased estimators, crucial for identifying efficient estimators.
*   **Unbiasedness vs. Minimum MSE:** An unbiased estimator is not always the best; an estimator with a small bias but very small variance might have a lower MSE.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=fNk_zzaMoEs) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Kb3K1Ui4454) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### 6. References and Further Reading

*   **Kay, S.M., *Fundamentals of Statistical Signal Processing, Vol I: Estimation Theory*, 3rd ed. (2010), Pearson.**
    *   Chapter 1: Introduction to Estimation
    *   Chapter 2: Properties of Estimators
*   **Van Trees, H.L., *Detection, Estimation, and Modulation Theory, Vol. I*, 2nd ed. (2001), John Wiley & Sons.**
    *   Chapter 2: Basic Concepts and Definitions
*   **Hayes, M.H., *Statistical Digital Signal Processing and Modelling*, 2nd ed. (2018), John Wiley & Sons.**
    *   Chapter 5: Parameter Estimation

---

This concludes the notes for "The Mathematical Estimation Problem" in Module 1. The next topics will delve into specific methods for finding estimators, such as the Method of Moments and Maximum Likelihood Estimation.