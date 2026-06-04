---
title: "Maximum likelihood estimation"
subject: "ESTIMATION AND DETECTION"
module: "Module 2: Statistical Estimation Theory II"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780febce"
status: "completed"
scrapedAt: "2026-05-23T17:56:45.277Z"
---
## Module 2: Statistical Estimation Theory II - Maximum Likelihood Estimation (MLE)

This module delves into the powerful technique of Maximum Likelihood Estimation (MLE), a cornerstone of statistical estimation theory. We will explore its principles, derivation, properties, and applications, building upon the foundational knowledge of estimation.

---

### 1. Introduction to Maximum Likelihood Estimation (MLE)

**Key Concept:** MLE is a method of estimating the parameters of a statistical model. It is based on finding the parameter values that maximize the likelihood function, which quantifies the probability of observing the given data for different parameter values.

**Definition:** The **likelihood function**, denoted by $L(\theta | \mathbf{x})$, is the joint probability density function (PDF) of the observed data $\mathbf{x}$ viewed as a function of the parameter $\theta$.

*   **Relationship to PDF:** For independent and identically distributed (i.i.d.) data, if $f(x|\theta)$ is the PDF of a single observation, then the likelihood function for a sample $\mathbf{x} = [x_1, x_2, \dots, x_n]$ is:
    $L(\theta | \mathbf{x}) = f(x_1 | \theta) f(x_2 | \theta) \dots f(x_n | \theta) = \prod_{i=1}^{n} f(x_i | \theta)$

**Intuition:** Imagine you have a coin, and you're trying to estimate the probability of getting heads, $p$. You flip the coin 10 times and get 7 heads. MLE asks: "What value of $p$ makes observing 7 heads in 10 flips *most likely*?"

**Learning Outcome Alignment:**
*   CO1: Summarize the fundamentals of statistical estimation principles used in various engineering problems. (K2) - MLE is a fundamental estimation principle.
*   CO2: Apply different types of estimation algorithms in engineering applications. (K3) - We will learn to apply MLE.

**Reference:**
*   Kay, S. M. (2010). *Fundamentals of Statistical Signal Processing, Vol I: Estimation Theory* (3rd ed.). Pearson. (Chapter 3)

---

### 2. The Principle of Maximum Likelihood Estimation

**Core Idea:** The MLE seeks to find the parameter value(s) $\hat{\theta}_{MLE}$ that maximize the likelihood function $L(\theta | \mathbf{x})$ with respect to $\theta$, given the observed data $\mathbf{x}$.

**Mathematical Formulation:**
$\hat{\theta}_{MLE} = \arg \max_{\theta} L(\theta | \mathbf{x})$

**Why Maximization?** The likelihood function tells us how "likely" the observed data is for each possible value of the parameter. By maximizing this function, we are essentially choosing the parameter value that best explains the observed data.

**Log-Likelihood Function:** Often, it is computationally easier to maximize the natural logarithm of the likelihood function, known as the **log-likelihood function**, $l(\theta | \mathbf{x}) = \ln(L(\theta | \mathbf{x}))$. This is because the logarithm is a monotonically increasing function, so the parameter value that maximizes $L(\theta | \mathbf{x})$ also maximizes $\ln(L(\theta | \mathbf{x}))$.

*   For i.i.d. data:
    $l(\theta | \mathbf{x}) = \sum_{i=1}^{n} \ln(f(x_i | \theta))$

**Finding the Maximum:** For continuous parameters, the maximum is typically found by taking the derivative of the log-likelihood function with respect to $\theta$, setting it to zero, and solving for $\theta$.

*   $\frac{\partial l(\theta | \mathbf{x})}{\partial \theta} = 0$

**Important Point to Remember:**
*   **Monotonicity:** Maximizing $L(\theta)$ is equivalent to maximizing $\ln(L(\theta))$. This simplifies calculations considerably, especially when dealing with products of probabilities.

**Example (Coin Flip):**
Suppose we observe $\mathbf{x} = [H, T, H, H, T, H, H, T, H, H]$ (7 Heads, 3 Tails) from 10 coin flips.
The probability of getting heads is $p$, and tails is $1-p$. The PDF for a single flip is:
$f(x_i | p) = p^{\mathbb{I}(x_i=H)} (1-p)^{\mathbb{I}(x_i=T)}$, where $\mathbb{I}(\cdot)$ is the indicator function.
The likelihood function is:
$L(p | \mathbf{x}) = p^7 (1-p)^3$
The log-likelihood function is:
$l(p | \mathbf{x}) = \ln(p^7 (1-p)^3) = 7 \ln(p) + 3 \ln(1-p)$
To find the MLE, we differentiate with respect to $p$ and set it to zero:
$\frac{\partial l(p | \mathbf{x})}{\partial p} = \frac{7}{p} - \frac{3}{1-p} = 0$
Solving for $p$:
$7(1-p) - 3p = 0$
$7 - 7p - 3p = 0$
$7 - 10p = 0$
$p = \frac{7}{10}$
So, $\hat{p}_{MLE} = 0.7$, which is the observed frequency of heads.

**Learning Outcome Alignment:**
*   CO1: Summarize the fundamentals of statistical estimation principles used in various engineering problems. (K2) - Understanding the maximization principle.
*   CO2: Apply different types of estimation algorithms in engineering applications. (K3) - This is the core procedure of applying MLE.

---

### 3. Steps to Compute MLE

**General Procedure:**

1.  **Identify the Probability Model:** Determine the underlying probability distribution that generates the observed data. This usually involves identifying the unknown parameter(s) of the distribution.
2.  **Write Down the Likelihood Function:** Based on the probability model and the observed data, write the joint PDF or PMF of the data as a function of the unknown parameter(s). For i.i.d. data, this is the product of the individual PDFs/PMFs.
3.  **Write Down the Log-Likelihood Function:** Take the natural logarithm of the likelihood function. This simplifies the product into a sum.
4.  **Differentiate the Log-Likelihood:** Compute the partial derivatives of the log-likelihood function with respect to each unknown parameter.
5.  **Set Derivatives to Zero:** Equate these partial derivatives to zero to obtain a system of equations.
6.  **Solve for the Parameters:** Solve the system of equations to find the parameter values that maximize the log-likelihood. These are the Maximum Likelihood Estimates ($\hat{\theta}_{MLE}$).
7.  **Check the Second Derivative (Optional but Recommended):** To confirm that the solution is indeed a maximum, one can check the second derivative (or Hessian matrix for multiple parameters). A negative second derivative indicates a maximum.

**Important Point to Remember:**
*   The process assumes that the true parameter value lies within the domain of the parameter space.

**Learning Outcome Alignment:**
*   CO1: Summarize the fundamentals of statistical estimation principles used in various engineering problems. (K2) - Understanding the step-by-step process.
*   CO2: Apply different types of estimation algorithms in engineering applications. (K3) - This provides a roadmap for applying MLE.

---

### 4. Examples of MLE in Signal Processing

**Example 1: Estimating the Mean of a Gaussian Distribution**

*   **Problem:** We have $n$ observations $x_1, x_2, \dots, x_n$ drawn from a Gaussian distribution with unknown mean $\mu$ and known variance $\sigma^2$.
*   **PDF:** $f(x_i | \mu, \sigma^2) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x_i - \mu)^2}{2\sigma^2}\right)$
*   **Likelihood Function (i.i.d.):**
    $L(\mu | \mathbf{x}) = \prod_{i=1}^{n} \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x_i - \mu)^2}{2\sigma^2}\right)$
    $L(\mu | \mathbf{x}) = \left(\frac{1}{2\pi\sigma^2}\right)^{n/2} \exp\left(-\sum_{i=1}^{n}\frac{(x_i - \mu)^2}{2\sigma^2}\right)$
*   **Log-Likelihood Function:**
    $l(\mu | \mathbf{x}) = \ln\left(\left(\frac{1}{2\pi\sigma^2}\right)^{n/2}\right) - \sum_{i=1}^{n}\frac{(x_i - \mu)^2}{2\sigma^2}$
    $l(\mu | \mathbf{x}) = -\frac{n}{2}\ln(2\pi\sigma^2) - \frac{1}{2\sigma^2}\sum_{i=1}^{n}(x_i - \mu)^2$
*   **Differentiate w.r.t. $\mu$ and set to 0:**
    $\frac{\partial l(\mu | \mathbf{x})}{\partial \mu} = -\frac{1}{2\sigma^2} \sum_{i=1}^{n} 2(x_i - \mu)(-1) = \frac{1}{\sigma^2} \sum_{i=1}^{n}(x_i - \mu) = 0$
    $\sum_{i=1}^{n} x_i - \sum_{i=1}^{n} \mu = 0$
    $\sum_{i=1}^{n} x_i - n\mu = 0$
*   **Solve for $\mu$:**
    $n\mu = \sum_{i=1}^{n} x_i$
    $\hat{\mu}_{MLE} = \frac{1}{n} \sum_{i=1}^{n} x_i$
*   **Result:** The MLE for the mean of a Gaussian distribution is the sample mean.

**Example 2: Estimating the Variance of a Gaussian Distribution (Mean Known)**

*   **Problem:** We have $n$ observations $x_1, x_2, \dots, x_n$ drawn from a Gaussian distribution with known mean $\mu$ and unknown variance $\sigma^2$.
*   **Log-Likelihood Function (from above):**
    $l(\sigma^2 | \mathbf{x}) = -\frac{n}{2}\ln(2\pi\sigma^2) - \frac{1}{2\sigma^2}\sum_{i=1}^{n}(x_i - \mu)^2$
    Let $\sigma^2 = V$ for simplicity.
    $l(V | \mathbf{x}) = -\frac{n}{2}\ln(2\pi) - \frac{n}{2}\ln(V) - \frac{1}{2V}\sum_{i=1}^{n}(x_i - \mu)^2$
*   **Differentiate w.r.t. $V$ and set to 0:**
    $\frac{\partial l(V | \mathbf{x})}{\partial V} = -\frac{n}{2V} - \frac{1}{2}\sum_{i=1}^{n}(x_i - \mu)^2 \left(-\frac{1}{V^2}\right) = 0$
    $-\frac{n}{2V} + \frac{1}{2V^2}\sum_{i=1}^{n}(x_i - \mu)^2 = 0$
*   **Solve for $V$:**
    Multiply by $2V^2$:
    $-nV + \sum_{i=1}^{n}(x_i - \mu)^2 = 0$
    $nV = \sum_{i=1}^{n}(x_i - \mu)^2$
    $\hat{V}_{MLE} = \frac{1}{n}\sum_{i=1}^{n}(x_i - \mu)^2$
*   **Result:** The MLE for the variance of a Gaussian distribution (when the mean is known) is the average of the squared deviations from the known mean.

**Example 3: Estimating the Parameter of an Exponential Distribution**

*   **Problem:** We have $n$ observations $x_1, x_2, \dots, x_n$ drawn from an exponential distribution with rate parameter $\lambda > 0$.
*   **PDF:** $f(x_i | \lambda) = \lambda e^{-\lambda x_i}$ for $x_i \ge 0$.
*   **Likelihood Function (i.i.d.):**
    $L(\lambda | \mathbf{x}) = \prod_{i=1}^{n} \lambda e^{-\lambda x_i} = \lambda^n e^{-\lambda \sum_{i=1}^{n} x_i}$
*   **Log-Likelihood Function:**
    $l(\lambda | \mathbf{x}) = \ln(\lambda^n) - \lambda \sum_{i=1}^{n} x_i = n \ln(\lambda) - \lambda \sum_{i=1}^{n} x_i$
*   **Differentiate w.r.t. $\lambda$ and set to 0:**
    $\frac{\partial l(\lambda | \mathbf{x})}{\partial \lambda} = \frac{n}{\lambda} - \sum_{i=1}^{n} x_i = 0$
*   **Solve for $\lambda$:**
    $\frac{n}{\lambda} = \sum_{i=1}^{n} x_i$
    $\hat{\lambda}_{MLE} = \frac{n}{\sum_{i=1}^{n} x_i}$
*   **Result:** The MLE for the rate parameter of an exponential distribution is the reciprocal of the sample mean. This is often interpreted as $1/\text{average duration}$.

**Learning Outcome Alignment:**
*   CO2: Apply different types of estimation algorithms in engineering applications. (K3) - Demonstrates practical application of MLE.

**Reference:**
*   Kay, S. M. (2010). *Fundamentals of Statistical Signal Processing, Vol I: Estimation Theory* (3rd ed.). Pearson. (Chapter 3, Examples)
*   Van Trees, H. L. (2001). *Detection, Estimation, and Modulation Theory, Vol. I* (2nd ed.). John Wiley & Sons. (Chapter 2)

---

### 5. Properties of Maximum Likelihood Estimators

MLEs are desirable because they possess several important asymptotic properties:

1.  **Consistency:** As the sample size $n$ approaches infinity, the MLE converges to the true parameter value.
    *   $\lim_{n \to \infty} \hat{\theta}_{MLE} = \theta_{true}$ (in probability)
    *   **Intuition:** With more data, the estimate gets closer and closer to the true value.

2.  **Asymptotic Normality:** For large sample sizes, the distribution of the MLE is approximately Gaussian with a mean equal to the true parameter value.
    *   $\hat{\theta}_{MLE} \approx \mathcal{N}\left(\theta_{true}, \frac{1}{I(\theta_{true})}\right)$, where $I(\theta_{true})$ is the Fisher Information.
    *   **Fisher Information:** $I(\theta) = -E\left[\frac{\partial^2 \ln f(X|\theta)}{\partial \theta^2}\right]$. It measures the amount of information that the observations carry about the parameter.
    *   **Intuition:** The MLE's uncertainty decreases as the sample size increases, and its distribution becomes predictable (Gaussian).

3.  **Asymptotic Efficiency:** Among all unbiased estimators, the MLE has the smallest asymptotic variance, achieving the Cramér-Rao Lower Bound (CRLB) asymptotically.
    *   **Cramér-Rao Lower Bound (CRLB):** For any unbiased estimator $\hat{\theta}$, the variance is bounded by $\text{Var}(\hat{\theta}) \ge \frac{1}{I(\theta_{true})}$.
    *   **Intuition:** MLE is the "best" possible estimator in the long run in terms of minimizing variance.

4.  **Invariance Property:** If $\hat{\theta}_{MLE}$ is the MLE for $\theta$, then for any function $g(\theta)$, the MLE for $g(\theta)$ is $g(\hat{\theta}_{MLE})$.
    *   **Example:** If $\hat{\mu}_{MLE}$ is the MLE for $\mu$, then the MLE for $\sigma^2 = \mu^2$ is $(\hat{\mu}_{MLE})^2$. (Note: This is only true if $g(\theta)$ is a one-to-one function).

**Important Points to Remember:**
*   These are **asymptotic** properties, meaning they hold for large sample sizes. For small sample sizes, MLEs might not be unbiased or achieve the CRLB.
*   The **Fisher Information** is crucial for understanding the uncertainty and efficiency of MLE.

**Learning Outcome Alignment:**
*   CO1: Summarize the fundamentals of statistical estimation principles used in various engineering problems. (K2) - Understanding the desirable properties of an estimator.
*   CO2: Apply different types of estimation algorithms in engineering applications. (K3) - Knowing these properties helps in choosing and evaluating estimators.

**Reference:**
*   Kay, S. M. (2010). *Fundamentals of Statistical Signal Processing, Vol I: Estimation Theory* (3rd ed.). Pearson. (Chapter 3.4)
*   Hayes, M. H. (2018). *Statistical Digital Signal Processing and Modelling* (2nd ed.). John Wiley & Sons. (Chapter 4)

---

### 6. Likelihood Ratio Test (LRT) and MLE Connection (Brief Mention)

While this module focuses on estimation, it's worth noting the connection to detection. The Likelihood Ratio Test (LRT) is a fundamental tool in hypothesis testing (detection).

*   **Hypothesis Testing:** We often want to decide between two hypotheses, $H_0$ and $H_1$, about the underlying parameter(s).
*   **Likelihood Ratio:** $\Lambda(\mathbf{x}) = \frac{L(\mathbf{x} | H_1)}{L(\mathbf{x} | H_0)}$
*   **MLE for Hypothesis Testing:** When we have parameters that are not involved in the hypotheses (nuisance parameters), we can use MLE to estimate them under each hypothesis and then form the generalized likelihood ratio.

This connection highlights how MLE is a foundational concept that bridges estimation and detection.

**Learning Outcome Alignment:**
*   CO1: Summarize the fundamentals of statistical estimation principles used in various engineering problems. (K2) - Understanding the broader context and connections.
*   CO3: Illustrate the fundamentals of statistical detection principles used in various engineering problems. (K2) - Recognizing the link to detection.

---

### 7. Practice Questions and Answers

**Question 1:**
Consider a series of Bernoulli trials with an unknown probability of success $p$. If you observe $k$ successes in $n$ trials, what is the Maximum Likelihood Estimate for $p$?

**Question 2:**
Let $x_1, x_2, \dots, x_n$ be i.i.d. samples from a Poisson distribution with parameter $\lambda > 0$. The PDF is $P(X=x|\lambda) = \frac{\lambda^x e^{-\lambda}}{x!}$. Find the MLE for $\lambda$.

**Question 3:**
Explain the concept of consistency of an estimator. Why is it an important property?

**Question 4:**
What is the invariance property of Maximum Likelihood Estimators? Give an example.

---

### Answers to Practice Questions

**Answer 1:**
The likelihood function for $k$ successes in $n$ Bernoulli trials is $L(p | k) = \binom{n}{k} p^k (1-p)^{n-k}$.
The log-likelihood function is $l(p | k) = \ln\binom{n}{k} + k \ln(p) + (n-k) \ln(1-p)$.
Differentiating with respect to $p$ and setting to zero:
$\frac{\partial l(p | k)}{\partial p} = \frac{k}{p} - \frac{n-k}{1-p} = 0$
$\frac{k}{p} = \frac{n-k}{1-p}$
$k(1-p) = p(n-k)$
$k - kp = np - kp$
$k = np$
$\hat{p}_{MLE} = \frac{k}{n}$
The MLE for the probability of success is the observed proportion of successes.

**Answer 2:**
The likelihood function for $n$ i.i.d. samples from a Poisson distribution is:
$L(\lambda | x_1, \dots, x_n) = \prod_{i=1}^{n} \frac{\lambda^{x_i} e^{-\lambda}}{x_i!} = \frac{\lambda^{\sum x_i} e^{-n\lambda}}{\prod x_i!}$
The log-likelihood function is:
$l(\lambda | \mathbf{x}) = \sum_{i=1}^{n} (x_i \ln(\lambda) - \ln(x_i!) - \lambda)$
$l(\lambda | \mathbf{x}) = (\ln \lambda) \sum x_i - n\lambda - \sum \ln(x_i!)$
Differentiating with respect to $\lambda$ and setting to zero:
$\frac{\partial l(\lambda | \mathbf{x})}{\partial \lambda} = \frac{1}{\lambda} \sum x_i - n = 0$
$\frac{\sum x_i}{\lambda} = n$
$\hat{\lambda}_{MLE} = \frac{\sum x_i}{n}$
The MLE for the Poisson parameter $\lambda$ is the sample mean.

**Answer 3:**
Consistency of an estimator means that as the sample size $n$ increases, the estimator converges in probability to the true value of the parameter it is estimating.
Formally, an estimator $\hat{\theta}_n$ is consistent for $\theta$ if for every $\epsilon > 0$:
$\lim_{n \to \infty} P(|\hat{\theta}_n - \theta| < \epsilon) = 1$
Consistency is a crucial property because it assures us that with enough data, our estimate will be arbitrarily close to the true value, making the estimation process reliable in the long run.

**Answer 4:**
The invariance property states that if $\hat{\theta}_{MLE}$ is the Maximum Likelihood Estimate for a parameter $\theta$, then the MLE for a function of $\theta$, say $g(\theta)$, is simply $g(\hat{\theta}_{MLE})$.
**Example:** Suppose we have estimated the MLE for the mean of a Gaussian distribution as $\hat{\mu}_{MLE}$. If we are interested in estimating the variance of the distribution which is $\sigma^2 = \mu^2$, then the MLE for $\sigma^2$ is $(\hat{\mu}_{MLE})^2$. Similarly, if we were estimating the standard deviation $\sigma = \sqrt{\mu^2}$ (assuming $\mu > 0$), the MLE would be $\sqrt{(\hat{\mu}_{MLE})^2} = |\hat{\mu}_{MLE}|$. This property simplifies finding MLEs for transformed parameters.

---

### 8. Summary and Key Takeaways

*   **MLE Principle:** Find parameters that maximize the likelihood of observing the data.
*   **Log-Likelihood:** Use the logarithm for easier maximization.
*   **Derivation:** Differentiate the log-likelihood and set to zero.
*   **Common Estimates:** Sample mean for Gaussian mean, sample proportion for Bernoulli, reciprocal of sample mean for exponential rate.
*   **Desirable Properties (Asymptotic):** Consistency, Asymptotic Normality, Asymptotic Efficiency.
*   **Invariance:** MLE of $g(\theta)$ is $g(\hat{\theta}_{MLE})$.

**Important Points to Remember:**
*   MLE is a widely used and powerful estimation technique.
*   Its asymptotic properties make it a statistically sound choice for large datasets.
*   Always verify that the solution corresponds to a maximum (e.g., by checking the second derivative).

---

This concludes Module 2, Topic: Maximum Likelihood Estimation. You are now equipped to understand and apply this fundamental estimation technique.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
