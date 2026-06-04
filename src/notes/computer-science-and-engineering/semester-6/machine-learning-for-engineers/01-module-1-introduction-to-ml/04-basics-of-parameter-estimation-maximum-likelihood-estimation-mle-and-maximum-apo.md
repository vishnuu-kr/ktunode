---
title: "Basics of parameter estimation  - maximum likelihood estimation (MLE) and maximum aposteriori estimation (MAP), Bayesian formulation."
subject: "MACHINE LEARNING FOR ENGINEERS"
module: "Module 1: Introduction to ML"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf45"
status: "completed"
scrapedAt: "2026-05-20T16:54:56.180Z"
---
# Machine Learning for Engineers - Module 1: Introduction to ML

## Topic: Basics of Parameter Estimation

### Learning Outcomes:

*   Understand the fundamental problem of parameter estimation in machine learning.
*   Explain the principles and methodology of Maximum Likelihood Estimation (MLE).
*   Apply MLE to simple probability distributions.
*   Explain the principles and methodology of Maximum A Posteriori (MAP) estimation.
*   Compare and contrast MLE and MAP estimation.
*   Understand the Bayesian formulation of parameter estimation.
*   Appreciate the role of prior and posterior distributions in Bayesian inference.

---

### 1. The Fundamental Problem of Parameter Estimation

In many machine learning tasks, we aim to build models that can learn from data. These models often have **parameters** that need to be adjusted to best fit the observed data. Parameter estimation is the process of finding the optimal values for these parameters.

**Key Concepts:**

*   **Model:** A mathematical representation of a system or process.
*   **Parameters ($\theta$):** The adjustable variables within a model that define its behavior. These are what we want to estimate.
*   **Data ($D$):** The observations or measurements available for learning.
*   **Likelihood:** The probability of observing the data given a specific set of parameters.

**Analogy:** Imagine you're trying to guess the bias of a coin. The coin has a parameter, *p*, which is the probability of getting heads. You flip the coin several times (your data) and observe the outcomes. Parameter estimation is about using these observations to guess the most likely value of *p*.

---

### 2. Maximum Likelihood Estimation (MLE)

**Principle:** MLE finds the parameter values that maximize the probability of observing the given data. In other words, it finds the parameters under which the observed data is "most likely" to have occurred.

**Methodology:**

1.  **Define a Probabilistic Model:** Choose a probability distribution that describes how the data is generated, with parameters $\theta$.
2.  **Write the Likelihood Function ($L(\theta | D)$):** This is the probability of observing the data $D$ given the parameters $\theta$. If the data points $d_1, d_2, ..., d_n$ are independent and identically distributed (i.i.d.), the likelihood is the product of the individual probabilities:
    $L(\theta | D) = P(D | \theta) = P(d_1 | \theta) \times P(d_2 | \theta) \times ... \times P(d_n | \theta) = \prod_{i=1}^{n} P(d_i | \theta)$
3.  **Maximize the Likelihood Function:** Find the value of $\theta$ that maximizes $L(\theta | D)$.

**Simplification using Log-Likelihood:** Maximizing the likelihood function is often computationally easier by maximizing its logarithm, called the **log-likelihood function** ($\log L(\theta | D)$). This is because the logarithm is a monotonically increasing function, so the maximum of $L(\theta | D)$ occurs at the same $\theta$ as the maximum of $\log L(\theta | D)$. Also, products become sums, which are easier to differentiate.

$\log L(\theta | D) = \log \left( \prod_{i=1}^{n} P(d_i | \theta) \right) = \sum_{i=1}^{n} \log P(d_i | \theta)$

**Finding the Maximum:** Typically, we take the derivative of the log-likelihood with respect to $\theta$, set it to zero, and solve for $\theta$. This gives us the **Maximum Likelihood Estimator (MLE)**, denoted as $\hat{\theta}_{MLE}$.

$\hat{\theta}_{MLE} = \arg \max_{\theta} \log L(\theta | D)$

**Example: Estimating the Probability of Heads for a Coin (Bernoulli Distribution)**

*   **Model:** The outcome of each coin flip is a Bernoulli random variable. Let $X$ be the outcome (1 for heads, 0 for tails). The probability of heads is $p$, so $P(X=1) = p$ and $P(X=0) = 1-p$.
*   **Parameters:** $\theta = \{p\}$
*   **Data:** We observe $n$ coin flips. Let $x_1, x_2, ..., x_n$ be the outcomes (1s and 0s). Let $k$ be the number of heads (number of 1s) in the data.
*   **Likelihood Function:**
    $L(p | D) = \prod_{i=1}^{n} P(x_i | p) = p^k (1-p)^{n-k}$
*   **Log-Likelihood Function:**
    $\log L(p | D) = \log (p^k (1-p)^{n-k}) = k \log p + (n-k) \log (1-p)$
*   **Maximizing the Log-Likelihood:**
    Take the derivative with respect to $p$:
    $\frac{d}{dp} \log L(p | D) = \frac{k}{p} - \frac{n-k}{1-p}$
    Set the derivative to zero and solve for $p$:
    $\frac{k}{p} - \frac{n-k}{1-p} = 0$
    $\frac{k}{p} = \frac{n-k}{1-p}$
    $k(1-p) = p(n-k)$
    $k - kp = np - kp$
    $k = np$
    $p = \frac{k}{n}$
*   **MLE Estimate:** $\hat{p}_{MLE} = \frac{k}{n}$. This means the MLE for the probability of heads is simply the observed proportion of heads in the data.

**Example: Estimating the Mean of a Gaussian Distribution (with known variance)**

*   **Model:** Data $x_1, ..., x_n$ are drawn from a Gaussian distribution with mean $\mu$ and known variance $\sigma^2$.
    $P(x_i | \mu, \sigma^2) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x_i - \mu)^2}{2\sigma^2}\right)$
*   **Parameters:** $\theta = \{\mu\}$ (assuming $\sigma^2$ is known)
*   **Likelihood Function:**
    $L(\mu | D) = \prod_{i=1}^{n} \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x_i - \mu)^2}{2\sigma^2}\right) = \left(\frac{1}{\sqrt{2\pi\sigma^2}}\right)^n \exp\left(-\sum_{i=1}^{n}\frac{(x_i - \mu)^2}{2\sigma^2}\right)$
*   **Log-Likelihood Function:**
    $\log L(\mu | D) = n \log\left(\frac{1}{\sqrt{2\pi\sigma^2}}\right) - \sum_{i=1}^{n}\frac{(x_i - \mu)^2}{2\sigma^2}$
    $\log L(\mu | D) = -\frac{n}{2}\log(2\pi\sigma^2) - \frac{1}{2\sigma^2} \sum_{i=1}^{n}(x_i - \mu)^2$
*   **Maximizing the Log-Likelihood:**
    Take the derivative with respect to $\mu$:
    $\frac{d}{d\mu} \log L(\mu | D) = - \frac{1}{2\sigma^2} \sum_{i=1}^{n} 2(x_i - \mu)(-1)$
    $\frac{d}{d\mu} \log L(\mu | D) = \frac{1}{\sigma^2} \sum_{i=1}^{n}(x_i - \mu)$
    Set the derivative to zero:
    $\frac{1}{\sigma^2} \sum_{i=1}^{n}(x_i - \mu) = 0$
    $\sum_{i=1}^{n}(x_i - \mu) = 0$
    $\sum_{i=1}^{n} x_i - \sum_{i=1}^{n} \mu = 0$
    $\sum_{i=1}^{n} x_i - n\mu = 0$
    $n\mu = \sum_{i=1}^{n} x_i$
    $\mu = \frac{\sum_{i=1}^{n} x_i}{n}$
*   **MLE Estimate:** $\hat{\mu}_{MLE} = \bar{x}$. The MLE for the mean is the sample mean.

**Properties of MLE:**

*   **Consistency:** As the amount of data increases, the MLE estimate converges to the true parameter value.
*   **Asymptotic Normality:** For large datasets, the distribution of the MLE estimate is approximately normal.
*   **Efficiency:** The MLE has the smallest asymptotic variance among all asymptotically unbiased estimators.

**Limitations of MLE:**

*   **Requires a full probabilistic model:** You need to assume a specific distribution.
*   **Can be sensitive to outliers:** Outliers can disproportionately influence the estimate.
*   **Doesn't incorporate prior knowledge:** It solely relies on the observed data.
*   **May not exist or be unique:** For some distributions or data patterns, the maximum might not be well-defined.

---

### 3. Maximum A Posteriori (MAP) Estimation

**Principle:** MAP estimation incorporates prior knowledge about the parameters in addition to the observed data. It finds the parameter values that maximize the **posterior probability** of the parameters given the data.

**Bayesian Formulation:**

MAP estimation is rooted in Bayes' Theorem, which relates conditional probabilities:

$P(A | B) = \frac{P(B | A) P(A)}{P(B)}$

In the context of parameter estimation:

*   $A$: Parameters $\theta$
*   $B$: Data $D$

So, Bayes' Theorem becomes:

$P(\theta | D) = \frac{P(D | \theta) P(\theta)}{P(D)}$

Where:

*   $P(\theta | D)$: **Posterior Probability** - The probability of the parameters $\theta$ given the observed data $D$. This is what we want to maximize.
*   $P(D | \theta)$: **Likelihood** - The probability of observing the data $D$ given the parameters $\theta$ (same as in MLE).
*   $P(\theta)$: **Prior Probability** - Our belief about the parameters $\theta$ *before* observing any data. This represents our prior knowledge or assumptions.
*   $P(D)$: **Marginal Likelihood (or Evidence)** - The probability of the data, averaged over all possible parameter values. $P(D) = \int P(D | \theta) P(\theta) d\theta$ (for continuous $\theta$) or $\sum_{\theta} P(D | \theta) P(\theta)$ (for discrete $\theta$). This term acts as a normalizing constant.

**Methodology:**

1.  **Define a Probabilistic Model:** Same as MLE.
2.  **Define a Prior Distribution ($P(\theta)$):** Specify a probability distribution that reflects our belief about the parameters before seeing the data.
3.  **Write the Posterior Probability ($P(\theta | D)$):** Using Bayes' Theorem, the posterior is proportional to the likelihood times the prior:
    $P(\theta | D) \propto P(D | \theta) P(\theta)$
    (Since $P(D)$ is constant with respect to $\theta$, we can ignore it for maximization).
4.  **Maximize the Posterior Probability:** Find the value of $\theta$ that maximizes $P(\theta | D)$. Similar to MLE, we often maximize the logarithm of the posterior:
    $\log P(\theta | D) = \log P(D | \theta) + \log P(\theta) + \text{constant}$

**MAP Estimator:**

$\hat{\theta}_{MAP} = \arg \max_{\theta} P(\theta | D) = \arg \max_{\theta} [P(D | \theta) P(\theta)]$
$\hat{\theta}_{MAP} = \arg \max_{\theta} [\log P(D | \theta) + \log P(\theta)]$

**Example: Estimating the Probability of Heads for a Coin (Bernoulli Distribution) with a Beta Prior**

*   **Model & Data:** Same as MLE example (Bernoulli, $n$ flips, $k$ heads).
*   **Parameters:** $\theta = \{p\}$
*   **Prior Distribution:** Let's choose a Beta distribution for $p$, denoted as $Beta(\alpha, \beta)$. The probability density function (PDF) of the Beta distribution is:
    $P(p) = \frac{p^{\alpha-1} (1-p)^{\beta-1}}{B(\alpha, \beta)}$, where $B(\alpha, \beta)$ is the Beta function.
    *   A common choice is the Beta(1, 1) prior, which is a Uniform(0, 1) distribution, meaning no prior preference for any value of $p$.
    *   A Beta(2, 2) prior is peaked around 0.5.
    *   A Beta(5, 2) prior is peaked around $5/(5+2) = 5/7 \approx 0.71$.
*   **Likelihood:** $P(D | p) = p^k (1-p)^{n-k}$
*   **Posterior Probability (proportional to):**
    $P(p | D) \propto P(D | p) P(p)$
    $P(p | D) \propto [p^k (1-p)^{n-k}] \times \left[ \frac{p^{\alpha-1} (1-p)^{\beta-1}}{B(\alpha, \beta)} \right]$
    $P(p | D) \propto p^{k + \alpha - 1} (1-p)^{n - k + \beta - 1}$
*   **Observation:** The posterior distribution is also a Beta distribution, $Beta(k+\alpha, n-k+\beta)$. This is a conjugate prior property.
*   **Maximizing the Posterior:** To find the MAP estimate for $p$, we need to find the mode of the $Beta(k+\alpha, n-k+\beta)$ distribution. The mode of $Beta(a, b)$ is $\frac{a-1}{a+b-2}$ (for $a, b > 1$).
    $\hat{p}_{MAP} = \frac{(k+\alpha) - 1}{(k+\alpha) + (n-k+\beta) - 2}$
    $\hat{p}_{MAP} = \frac{k+\alpha-1}{n+\alpha+\beta-2}$

**Comparison with MLE:**

*   If we use a uniform prior $Beta(1, 1)$ (i.e., $\alpha=1, \beta=1$), then:
    $\hat{p}_{MAP} = \frac{k+1-1}{n+1+1-2} = \frac{k}{n}$
    In this case, MAP estimation with a uniform prior is equivalent to MLE.

*   If we use a prior $Beta(\alpha, \beta)$ where $\alpha > 1$ and $\beta > 1$, the MAP estimate will be "pulled" towards the mean of the prior distribution.

    *   If $k/n$ is very different from the prior mean ($\alpha/(\alpha+\beta)$), the prior has a stronger influence.
    *   As $n$ increases, the likelihood term dominates the prior, and the MAP estimate approaches the MLE estimate.

**Example: Estimating the Mean of a Gaussian Distribution (with known variance) and a Gaussian Prior on $\mu$**

*   **Model & Data:** Gaussian data $x_i$, known $\sigma^2$.
*   **Parameters:** $\theta = \{\mu\}$
*   **Prior Distribution:** Assume $\mu$ follows a Gaussian distribution with mean $\mu_0$ and variance $\sigma_0^2$:
    $P(\mu) = \frac{1}{\sqrt{2\pi\sigma_0^2}} \exp\left(-\frac{(\mu - \mu_0)^2}{2\sigma_0^2}\right)$
*   **Likelihood:** $P(D | \mu) \propto \exp\left(-\sum_{i=1}^{n}\frac{(x_i - \mu)^2}{2\sigma^2}\right)$
*   **Posterior (proportional to):**
    $P(\mu | D) \propto \exp\left(-\sum_{i=1}^{n}\frac{(x_i - \mu)^2}{2\sigma^2}\right) \times \exp\left(-\frac{(\mu - \mu_0)^2}{2\sigma_0^2}\right)$
    $P(\mu | D) \propto \exp\left(-\frac{1}{2} \left[ \sum_{i=1}^{n}\frac{(x_i - \mu)^2}{\sigma^2} + \frac{(\mu - \mu_0)^2}{\sigma_0^2} \right]\right)$
*   **Maximizing the Posterior (minimizing the exponent):**
    We need to minimize the term inside the exponent:
    $E(\mu) = \sum_{i=1}^{n}\frac{(x_i - \mu)^2}{\sigma^2} + \frac{(\mu - \mu_0)^2}{\sigma_0^2}$
    Take the derivative with respect to $\mu$ and set it to zero:
    $\frac{dE}{d\mu} = \sum_{i=1}^{n}\frac{2(x_i - \mu)(-1)}{\sigma^2} + \frac{2(\mu - \mu_0)}{\sigma_0^2} = 0$
    $-\frac{2}{\sigma^2} \sum_{i=1}^{n}(x_i - \mu) + \frac{2(\mu - \mu_0)}{\sigma_0^2} = 0$
    $-\frac{1}{\sigma^2} (\sum x_i - n\mu) + \frac{\mu - \mu_0}{\sigma_0^2} = 0$
    $-\frac{n\bar{x}}{\sigma^2} + \frac{n\mu}{\sigma^2} + \frac{\mu}{\sigma_0^2} - \frac{\mu_0}{\sigma_0^2} = 0$
    $\mu \left(\frac{n}{\sigma^2} + \frac{1}{\sigma_0^2}\right) = \frac{n\bar{x}}{\sigma^2} + \frac{\mu_0}{\sigma_0^2}$
    $\hat{\mu}_{MAP} = \frac{\frac{n\bar{x}}{\sigma^2} + \frac{\mu_0}{\sigma_0^2}}{\frac{n}{\sigma^2} + \frac{1}{\sigma_0^2}}$
    $\hat{\mu}_{MAP} = \frac{n\sigma_0^2 \bar{x} + \sigma^2 \mu_0}{n\sigma_0^2 + \sigma^2}$

**Comparison with MLE:**

*   MLE estimate was $\hat{\mu}_{MLE} = \bar{x}$.
*   The MAP estimate is a weighted average of the sample mean ($\bar{x}$) and the prior mean ($\mu_0$). The weights depend on the precisions (inverse variances) of the data and the prior.
    *   If $\sigma_0^2 \to \infty$ (very weak prior), $\hat{\mu}_{MAP} \to \bar{x}$ (MLE).
    *   If $\sigma_0^2 \to 0$ (very strong prior on $\mu_0$), $\hat{\mu}_{MAP} \to \mu_0$.
    *   As $n \to \infty$, the weight of the data term ($n\sigma_0^2$) increases, and $\hat{\mu}_{MAP} \to \bar{x}$ (MLE).

**Advantages of MAP:**

*   **Incorporates prior knowledge:** Can lead to more robust estimates, especially with limited data.
*   **Can regularize models:** By choosing appropriate priors (e.g., Gaussian priors on weights in linear models), MAP can prevent overfitting. This is analogous to L2 regularization.
*   **Often has better properties with limited data:** Can be less sensitive to noise and outliers compared to MLE.

**Disadvantages of MAP:**

*   **Requires choosing a prior:** The choice of prior can significantly influence the estimate. A poor prior can lead to worse results than MLE.
*   **Computationally more complex:** Requires defining and working with prior distributions.

---

### 4. Bayesian Formulation of Parameter Estimation

The Bayesian approach to parameter estimation is more holistic than just finding the most likely parameter values (MLE/MAP). Instead of estimating a single point value for the parameters, the Bayesian approach aims to characterize the *entire probability distribution* of the parameters given the data (the posterior distribution).

**Key Concepts:**

*   **Parameters are random variables:** In the Bayesian view, parameters ($\theta$) are not fixed but are treated as random variables with their own probability distributions.
*   **Updating beliefs:** Learning from data is viewed as updating our prior beliefs about the parameters into posterior beliefs.
*   **Posterior Distribution ($P(\theta | D)$):** This is the central output of Bayesian inference. It encapsulates all the information we have about the parameters after observing the data, combining prior knowledge and the likelihood of the data.

**The Process:**

1.  **Define a Prior Distribution ($P(\theta)$):** Specify your beliefs about the parameters before seeing any data.
2.  **Define a Likelihood Function ($P(D | \theta)$):** Specify the probability of observing the data given the parameters.
3.  **Compute the Posterior Distribution ($P(\theta | D)$) using Bayes' Theorem:**
    $P(\theta | D) = \frac{P(D | \theta) P(\theta)}{P(D)}$

**What can we do with the Posterior Distribution?**

*   **Point Estimates:**
    *   **MAP Estimate:** The mode of the posterior distribution.
    *   **Posterior Mean:** The mean of the posterior distribution. This is often preferred over the mode as it's less sensitive to the shape of the distribution. For the coin flip example with Beta($k+\alpha, n-k+\beta$) posterior, the mean is $\frac{k+\alpha}{n+\alpha+\beta}$.
    *   **Posterior Median:** The median of the posterior distribution.
*   **Credible Intervals:** Just like confidence intervals in frequentist statistics, credible intervals provide a range of values for the parameters with a certain probability. For example, a 95% credible interval $[a, b]$ means there is a 95% probability that the true parameter value lies within this range.
*   **Predictions:** Bayesian models can make predictions about new, unseen data. The predictive distribution for a new data point $d_{new}$ is obtained by averaging the likelihood of $d_{new}$ over the posterior distribution of the parameters:
    $P(d_{new} | D) = \int P(d_{new} | \theta) P(\theta | D) d\theta$

**Relationship between MLE, MAP, and Bayesian Formulation:**

*   **MLE:** Finds $\theta$ that maximizes $P(D | \theta)$. Ignores prior knowledge.
*   **MAP:** Finds $\theta$ that maximizes $P(\theta | D) \propto P(D | \theta) P(\theta)$. Uses prior knowledge but still provides a single point estimate.
*   **Bayesian Formulation:** Aims to find the full $P(\theta | D)$. MAP and posterior mean are just summaries of this distribution.

**Example: Bayesian Prediction for Coin Flips**

Using the coin flip example with a Beta($\alpha, \beta$) prior and observing $k$ heads in $n$ flips, the posterior is $Beta(k+\alpha, n-k+\beta)$.

The predictive distribution for the next flip ($d_{new} = 1$ for heads, $0$ for tails) is:

$P(d_{new}=1 | D) = \int_{0}^{1} P(d_{new}=1 | p) P(p | D) dp$
$P(d_{new}=1 | D) = \int_{0}^{1} p \times \frac{p^{k+\alpha-1} (1-p)^{n-k+\beta-1}}{B(k+\alpha, n-k+\beta)} dp$
$P(d_{new}=1 | D) = \frac{1}{B(k+\alpha, n-k+\beta)} \int_{0}^{1} p^{k+\alpha} (1-p)^{n-k+\beta-1} dp$

The integral is the definition of the Beta function $B(k+\alpha+1, n-k+\beta)$.
So, $P(d_{new}=1 | D) = \frac{B(k+\alpha+1, n-k+\beta)}{B(k+\alpha, n-k+\beta)}$.

Using the property $B(a, b) = \frac{\Gamma(a)\Gamma(b)}{\Gamma(a+b)}$ and $\Gamma(x+1) = x\Gamma(x)$:

$P(d_{new}=1 | D) = \frac{\Gamma(k+\alpha+1)\Gamma(n-k+\beta)}{\Gamma(n+\alpha+\beta+1)} \times \frac{\Gamma(k+\alpha+n-k+\beta)}{\Gamma(k+\alpha)\Gamma(n-k+\beta)}$
$P(d_{new}=1 | D) = \frac{(k+\alpha)\Gamma(k+\alpha)\Gamma(n-k+\beta)}{\Gamma(n+\alpha+\beta+1)} \times \frac{\Gamma(k+\alpha+n-k+\beta)}{(k+\alpha)\Gamma(k+\alpha)}$
$P(d_{new}=1 | D) = \frac{\Gamma(n+\alpha+\beta)}{\Gamma(n+\alpha+\beta+1)}$
$P(d_{new}=1 | D) = \frac{\Gamma(n+\alpha+\beta)}{(n+\alpha+\beta)\Gamma(n+\alpha+\beta)}$
$P(d_{new}=1 | D) = \frac{1}{n+\alpha+\beta}$ (Mistake here, let's re-evaluate)

Let's re-evaluate using the mean of the Beta distribution. The mean of $Beta(a, b)$ is $a/(a+b)$.
The posterior distribution is $Beta(k+\alpha, n-k+\beta)$.
The posterior mean is $E[p | D] = \frac{k+\alpha}{(k+\alpha) + (n-k+\beta)} = \frac{k+\alpha}{n+\alpha+\beta}$.
Since the predictive probability of heads is the expected value of $p$ under the posterior,
$P(d_{new}=1 | D) = E[p | D] = \frac{k+\alpha}{n+\alpha+\beta}$.

**This is the Bayesian estimate for the probability of heads.**

*   If $\alpha=1, \beta=1$ (uniform prior), the predictive probability is $\frac{k}{n+2}$. This is a smoothed estimate, always closer to 0.5 than the MLE $\frac{k}{n}$.
*   If $\alpha=0.5, \beta=0.5$ (Jeffreys prior), predictive probability is $\frac{k+0.5}{n+1}$.

**Advantages of Bayesian Formulation:**

*   **Provides a full distribution:** Captures uncertainty about parameters.
*   **Principled way to incorporate prior knowledge.**
*   **Naturally handles small datasets:** Prior information can prevent overfitting.
*   **Leads to calibrated uncertainty estimates (credible intervals).**
*   **Enables principled model comparison (Bayes factors).**

**Disadvantages of Bayesian Formulation:**

*   **Computationally intensive:** Often requires MCMC (Markov Chain Monte Carlo) methods for complex models, which can be slow.
*   **Requires choosing a prior:** Subjectivity in prior choice.

---

### 5. Practice Questions and Exercises

**Question 1: MLE**
Suppose you have a dataset of measurements $\{x_1, x_2, ..., x_{10}\}$ from a Poisson distribution with parameter $\lambda$. The sum of these measurements is $\sum_{i=1}^{10} x_i = 25$. What is the Maximum Likelihood Estimate for $\lambda$?

*   **Recall:** The PDF of Poisson($\lambda$) is $P(x | \lambda) = \frac{\lambda^x e^{-\lambda}}{x!}$.

**Answer 1:**
The likelihood function is $L(\lambda | D) = \prod_{i=1}^{10} \frac{\lambda^{x_i} e^{-\lambda}}{x_i!} = \frac{\lambda^{\sum x_i} e^{-10\lambda}}{\prod x_i!}$.
The log-likelihood is $\log L(\lambda | D) = (\sum x_i) \log \lambda - 10\lambda - \sum \log(x_i!)$.
Taking the derivative with respect to $\lambda$: $\frac{d}{d\lambda} \log L(\lambda | D) = \frac{\sum x_i}{\lambda} - 10$.
Setting to zero: $\frac{25}{\lambda} - 10 = 0 \implies \lambda = \frac{25}{10} = 2.5$.
So, $\hat{\lambda}_{MLE} = 2.5$.

---

**Question 2: MAP**
Consider the same Poisson data as Question 1 ($\sum x_i = 25$, $n=10$). Suppose you use a Gamma prior for $\lambda$, $P(\lambda) \propto \lambda^{k-1} e^{-\theta\lambda}$. Let $k=3$ and $\theta=1$. What is the MAP estimate for $\lambda$?

*   **Recall:** $P(\lambda) \propto \lambda^{k-1} e^{-\theta\lambda}$. The Gamma distribution has mean $k/\theta$.

**Answer 2:**
The log-likelihood is $\log L(\lambda | D) = (\sum x_i) \log \lambda - 10\lambda + C_1$, where $C_1$ is a constant term depending on the data, not $\lambda$.
The log-prior is $\log P(\lambda) = (k-1) \log \lambda - \theta\lambda + C_2$, where $C_2$ is a constant.
With $k=3, \theta=1$: $\log P(\lambda) = 2 \log \lambda - \lambda + C_2$.
The log-posterior is $\log P(\lambda | D) \propto \log L(\lambda | D) + \log P(\lambda)$
$\log P(\lambda | D) \propto (25 \log \lambda - 10\lambda) + (2 \log \lambda - \lambda)$
$\log P(\lambda | D) \propto 27 \log \lambda - 11\lambda$.
Taking the derivative with respect to $\lambda$: $\frac{d}{d\lambda} \log P(\lambda | D) = \frac{27}{\lambda} - 11$.
Setting to zero: $\frac{27}{\lambda} - 11 = 0 \implies \lambda = \frac{27}{11} \approx 2.45$.
So, $\hat{\lambda}_{MAP} = \frac{27}{11}$.

Notice how the MAP estimate is slightly pulled towards the mean of the prior, which is $k/\theta = 3/1 = 3$. The MLE was 2.5. The MAP estimate is between 2.5 and 3.

---

**Question 3: Bayesian Formulation (Conceptual)**
Explain the main difference between MLE and the full Bayesian approach to parameter estimation. What does the output of each approach represent?

**Answer 3:**
*   **MLE:** Estimates a single point value for the parameter that maximizes the likelihood of the observed data. It represents the parameter value that best explains the observed data under the assumed model, ignoring any prior beliefs.
*   **Full Bayesian Approach:** Aims to characterize the entire probability distribution of the parameter given the data (the posterior distribution $P(\theta | D)$). This distribution represents our updated beliefs about the parameter after observing the data, combining prior beliefs and the likelihood. Point estimates like the MAP or posterior mean can be derived from this distribution, but the full distribution also allows for quantifying uncertainty (e.g., credible intervals) and making probabilistic predictions.

---

**Question 4: Prior Choice**
If you have strong prior knowledge that the probability of success for a binary event is around 0.8, and you collect 5 trials resulting in 3 successes, how would you choose your prior to reflect this knowledge? What prior distribution would be suitable, and what parameters might you choose?

**Answer 4:**
A suitable prior distribution for a probability parameter (between 0 and 1) is the **Beta distribution**.
The Beta distribution has two parameters, $\alpha$ and $\beta$. Its mean is $\frac{\alpha}{\alpha+\beta}$ and its mode (for $\alpha, \beta > 1$) is $\frac{\alpha-1}{\alpha+\beta-2}$.
To reflect prior knowledge that the probability is around 0.8:
*   We want the mean or mode to be close to 0.8.
*   If we want to express strong prior belief, we would choose larger values for $\alpha$ and $\beta$.

Let's aim for the mean to be 0.8:
$\frac{\alpha}{\alpha+\beta} = 0.8$
$\alpha = 0.8 (\alpha+\beta)$
$\alpha = 0.8\alpha + 0.8\beta$
$0.2\alpha = 0.8\beta$
$\alpha = 4\beta$

We can choose values for $\alpha$ and $\beta$ that satisfy this relationship. For instance:
*   If $\beta = 1$, then $\alpha = 4$. Prior: $Beta(4, 1)$. Mean = 4/5 = 0.8. Mode = (4-1)/(4+1-2) = 3/3 = 1.0 (peak at 1).
*   If $\beta = 2$, then $\alpha = 8$. Prior: $Beta(8, 2)$. Mean = 8/10 = 0.8. Mode = (8-1)/(8+2-2) = 7/8 = 0.875.
*   If $\beta = 5$, then $\alpha = 20$. Prior: $Beta(20, 5)$. Mean = 20/25 = 0.8. Mode = (20-1)/(20+5-2) = 19/23 $\approx 0.826$. This prior is more concentrated around 0.8.

A common strategy is to choose $\alpha$ and $\beta$ such that their sum $\alpha + \beta$ represents the "strength" of the prior (akin to an equivalent number of prior observations). For example, if we think of this prior as equivalent to 10 prior observations with 8 successes and 2 failures, we might choose $\alpha=8, \beta=2$.

---

### 6. Important Points to Remember

*   **Parameter estimation is about finding the values of model parameters that best fit the data.**
*   **MLE** finds parameters that **maximize the likelihood** of the data. It is data-driven and assumes a probabilistic model.
*   **MAP** finds parameters that **maximize the posterior probability**, incorporating both **likelihood** and a **prior belief**.
*   **Bayesian formulation** aims to determine the **full posterior distribution** $P(\theta|D)$, which encapsulates all knowledge about the parameters.
*   MLE and MAP provide **point estimates**, while the Bayesian approach provides a **distribution** and allows for **uncertainty quantification**.
*   When the prior is uniform, **MAP is equivalent to MLE**.
*   As the amount of data increases, **MAP estimates tend to converge to MLE estimates**, as the likelihood term dominates the prior.
*   The choice of **prior** is crucial in MAP and Bayesian methods; it encodes prior knowledge and can significantly influence the results, especially with limited data.
*   Bayesian methods can be more **robust** with small datasets due to the influence of the prior.
*   **Log-likelihood** and **log-posterior** are often used for easier computation and optimization.
