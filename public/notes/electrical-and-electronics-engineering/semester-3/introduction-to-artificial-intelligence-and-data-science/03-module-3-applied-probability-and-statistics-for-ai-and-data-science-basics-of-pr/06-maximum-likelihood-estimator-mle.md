---
title: "Maximum Likelihood Estimator (MLE)"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 3: Applied Probability and Statistics for AI and Data Science : Basics of probability"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35b9f"
status: "completed"
scrapedAt: "2026-05-23T16:14:11.507Z"
---
# Module 3: Applied Probability and Statistics for AI and Data Science - Basics of Probability

## Topic: Maximum Likelihood Estimator (MLE)

---

### 1. Learning Outcomes Covered:

This module, specifically the topic of Maximum Likelihood Estimation, will help you:

*   **Understand the fundamental principle of parameter estimation:** How to infer unknown parameters of a probability distribution from observed data.
*   **Grasp the intuition behind MLE:** Why maximizing the likelihood of observing the data is a sensible approach to parameter estimation.
*   **Learn how to derive MLEs for common distributions:** This skill is crucial for building many AI and data science models.
*   **Appreciate the properties of MLEs:** Understanding concepts like consistency and efficiency (though a deep dive might be in later modules).
*   **Apply MLE to practical scenarios:** Estimating parameters for models like linear regression, logistic regression, and Gaussian Mixture Models.

---

### 2. Key Concepts and Definitions:

#### 2.1. Introduction to Parameter Estimation

In many AI and data science tasks, we assume that our data is generated from a specific probability distribution. However, the parameters of this distribution are usually unknown. Parameter estimation is the process of using observed data to estimate these unknown parameters.

**Example:** If we assume our data points are drawn from a Normal (Gaussian) distribution, we need to estimate its mean ($\mu$) and variance ($\sigma^2$).

#### 2.2. Likelihood Function

The **likelihood function**, denoted as $L(\theta | x_1, x_2, ..., x_n)$, quantifies the probability of observing a specific dataset $D = \{x_1, x_2, ..., x_n\}$ given a set of parameters $\theta$.

*   **Key Idea:** For independent and identically distributed (i.i.d.) data, the likelihood function is the product of the probability density functions (PDFs) or probability mass functions (PMFs) of each data point, evaluated at the given parameters.

    $L(\theta | D) = P(D | \theta) = \prod_{i=1}^{n} P(x_i | \theta)$

*   **Important Note:** The likelihood function is a function of the parameters ($\theta$), not the data. It tells us how "likely" different parameter values are, given the observed data.

#### 2.3. Maximum Likelihood Estimation (MLE)

**Maximum Likelihood Estimation (MLE)** is a method for estimating the parameters of a statistical model. It works by finding the parameter values that maximize the likelihood function for the observed data.

*   **The Principle:** The core idea is to choose the parameters that make the observed data "most probable."

    $\hat{\theta}_{MLE} = \arg \max_{\theta} L(\theta | D)$

*   **Why Maximize?** If a set of parameters makes the observed data highly probable, it suggests that these parameters are a good fit for the underlying data-generating process.

#### 2.4. Log-Likelihood Function

Working with products of probabilities can lead to numerical underflow, especially with large datasets. To simplify calculations and avoid this, we often work with the **log-likelihood function**.

*   **Definition:** The log-likelihood function is the natural logarithm of the likelihood function.

    $LL(\theta | D) = \log(L(\theta | D)) = \log \left( \prod_{i=1}^{n} P(x_i | \theta) \right)$

*   **Property:** Since the logarithm is a monotonically increasing function, maximizing the log-likelihood is equivalent to maximizing the likelihood.

    $\hat{\theta}_{MLE} = \arg \max_{\theta} LL(\theta | D)$

*   **Advantage:** The product becomes a sum:

    $LL(\theta | D) = \sum_{i=1}^{n} \log(P(x_i | \theta))$

#### 2.5. Finding the MLE using Calculus

For continuous probability distributions, we can often find the MLE by taking the partial derivative of the log-likelihood function with respect to each parameter and setting it to zero.

$\frac{\partial LL(\theta | D)}{\partial \theta_j} = 0$, for each parameter $\theta_j$ in $\theta$.

Solving these equations for $\theta_j$ gives us the MLE estimates, denoted as $\hat{\theta}_j$.

#### 2.6. Examples of MLE

Let's illustrate MLE with a few common scenarios.

**Example 1: Estimating the Mean of a Bernoulli Distribution**

*   **Scenario:** We flip a biased coin $n$ times, and observe $k$ heads (successes) and $n-k$ tails (failures). We want to estimate the probability of success, $p$.
*   **Distribution:** Bernoulli distribution, $P(X=1|p) = p$, $P(X=0|p) = 1-p$.
*   **Likelihood Function:** Let $x_i$ be the outcome of the $i$-th flip ($x_i=1$ for heads, $x_i=0$ for tails).
    $L(p | D) = \prod_{i=1}^{n} P(x_i | p) = \prod_{i=1}^{n} p^{x_i} (1-p)^{1-x_i}$
    This product simplifies to $p^k (1-p)^{n-k}$, where $k$ is the total number of heads.
*   **Log-Likelihood Function:**
    $LL(p | D) = \log(p^k (1-p)^{n-k}) = k \log(p) + (n-k) \log(1-p)$
*   **Maximization:** Take the derivative with respect to $p$ and set it to zero.
    $\frac{\partial LL(p | D)}{\partial p} = \frac{k}{p} - \frac{n-k}{1-p}$
    Setting to zero: $\frac{k}{p} - \frac{n-k}{1-p} = 0$
    $\frac{k}{p} = \frac{n-k}{1-p}$
    $k(1-p) = p(n-k)$
    $k - kp = np - kp$
    $k = np$
    $\hat{p}_{MLE} = \frac{k}{n}$
*   **Interpretation:** The MLE for the probability of success in a Bernoulli trial is simply the proportion of successes in the observed data. This aligns with our intuition.

**Example 2: Estimating the Mean and Variance of a Normal Distribution**

*   **Scenario:** We have a dataset $D = \{x_1, x_2, ..., x_n\}$ assumed to be drawn from a Normal distribution with unknown mean $\mu$ and variance $\sigma^2$.
*   **Distribution:** $P(x | \mu, \sigma^2) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)$
*   **Likelihood Function:**
    $L(\mu, \sigma^2 | D) = \prod_{i=1}^{n} \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x_i-\mu)^2}{2\sigma^2}\right)$
    $L(\mu, \sigma^2 | D) = (2\pi\sigma^2)^{-n/2} \exp\left(-\sum_{i=1}^{n} \frac{(x_i-\mu)^2}{2\sigma^2}\right)$
*   **Log-Likelihood Function:**
    $LL(\mu, \sigma^2 | D) = -\frac{n}{2}\log(2\pi) - \frac{n}{2}\log(\sigma^2) - \sum_{i=1}^{n} \frac{(x_i-\mu)^2}{2\sigma^2}$
*   **Maximization:** We need to take partial derivatives with respect to $\mu$ and $\sigma^2$ and set them to zero.

    *   **With respect to $\mu$:**
        $\frac{\partial LL}{\partial \mu} = -\sum_{i=1}^{n} \frac{2(x_i-\mu)(-1)}{2\sigma^2} = \sum_{i=1}^{n} \frac{x_i-\mu}{\sigma^2}$
        Setting to zero: $\sum_{i=1}^{n} \frac{x_i-\mu}{\sigma^2} = 0$
        $\sum_{i=1}^{n} (x_i-\mu) = 0$
        $\sum x_i - n\mu = 0$
        $n\mu = \sum x_i$
        $\hat{\mu}_{MLE} = \frac{1}{n}\sum_{i=1}^{n} x_i = \bar{x}$ (the sample mean)

    *   **With respect to $\sigma^2$:** (Let $\nu = \sigma^2$)
        $LL(\mu, \nu | D) = -\frac{n}{2}\log(2\pi) - \frac{n}{2}\log(\nu) - \sum_{i=1}^{n} \frac{(x_i-\mu)^2}{2\nu}$
        $\frac{\partial LL}{\partial \nu} = -\frac{n}{2\nu} - \sum_{i=1}^{n} \frac{(x_i-\mu)^2}{(-2\nu^2)}$
        $\frac{\partial LL}{\partial \nu} = -\frac{n}{2\nu} + \frac{1}{2\nu^2} \sum_{i=1}^{n} (x_i-\mu)^2$
        Setting to zero: $-\frac{n}{2\nu} + \frac{1}{2\nu^2} \sum_{i=1}^{n} (x_i-\mu)^2 = 0$
        $\frac{n}{2\nu} = \frac{1}{2\nu^2} \sum_{i=1}^{n} (x_i-\mu)^2$
        $n\nu = \sum_{i=1}^{n} (x_i-\mu)^2$
        $\hat{\nu}_{MLE} = \hat{\sigma}^2_{MLE} = \frac{1}{n}\sum_{i=1}^{n} (x_i-\hat{\mu}_{MLE})^2$
        **Note:** This is the *biased* sample variance. The unbiased sample variance uses $n-1$ in the denominator.

#### 2.7. Properties of MLEs (Brief Mention)

MLEs have several desirable properties, particularly for large sample sizes:

*   **Consistency:** As the sample size $n$ increases, the MLEs converge in probability to the true parameter values.
*   **Asymptotic Normality:** For large $n$, the distribution of the MLEs is approximately Normal.
*   **Efficiency:** For large $n$, the MLEs achieve the Cramér-Rao lower bound, meaning they have the smallest possible variance among all unbiased estimators.

These properties make MLE a very popular and powerful estimation technique in statistics and machine learning. (Refer to Gupta & Kapoor for more formal proofs of these properties).

---

### 3. Examples and Applications in AI/Data Science

MLE is a cornerstone for estimating parameters in many machine learning models:

*   **Linear Regression:** Estimating the coefficients ($\beta$) of the linear model often involves maximizing the likelihood assuming Gaussian noise. (Refer to Géron's "Hands-On Machine Learning" for practical implementations).
*   **Logistic Regression:** Estimating the weights ($w$) for classification tasks uses MLE on the Bernoulli distribution for binary classification outcomes.
*   **Gaussian Mixture Models (GMMs):** Estimating the means, variances, and mixing coefficients of GMMs is typically done using the Expectation-Maximization (EM) algorithm, which iteratively uses MLE principles. (Refer to Deisenroth, Faisal, & Ong for theoretical background).
*   **Naive Bayes:** The parameters (probabilities) for Naive Bayes classifiers are often estimated using MLE from the training data.
*   **Parameter estimation in Hidden Markov Models (HMMs):** The Baum-Welch algorithm (a form of EM) is used to estimate HMM parameters using MLE.

---

### 4. Practice Questions/Exercises:

**Question 1:**
Suppose you have observed data points $\{x_1, x_2, ..., x_n\}$ that you believe are drawn from an Exponential distribution with rate parameter $\lambda$. The PDF of the Exponential distribution is $f(x|\lambda) = \lambda e^{-\lambda x}$ for $x \geq 0$. Find the Maximum Likelihood Estimator (MLE) for $\lambda$.

**Question 2:**
Consider a dataset of $n$ independent coin flips, where each flip results in Heads (H) with probability $p$ and Tails (T) with probability $1-p$. If you observe $k$ Heads and $n-k$ Tails, what is the MLE for $p$?

**Question 3:**
Let $X_1, X_2, \dots, X_n$ be i.i.d. random variables from a Poisson distribution with parameter $\lambda$. The PMF is $P(X=k|\lambda) = \frac{\lambda^k e^{-\lambda}}{k!}$. Find the MLE for $\lambda$.

---

### 5. Answers to Practice Questions:

**Answer 1:**
The likelihood function is $L(\lambda | D) = \prod_{i=1}^{n} \lambda e^{-\lambda x_i} = \lambda^n e^{-\lambda \sum x_i}$.
The log-likelihood function is $LL(\lambda | D) = n \log(\lambda) - \lambda \sum x_i$.
Taking the derivative with respect to $\lambda$:
$\frac{\partial LL}{\partial \lambda} = \frac{n}{\lambda} - \sum x_i$.
Setting to zero: $\frac{n}{\lambda} - \sum x_i = 0 \Rightarrow \frac{n}{\lambda} = \sum x_i \Rightarrow \lambda = \frac{n}{\sum x_i}$.
So, $\hat{\lambda}_{MLE} = \frac{n}{\sum_{i=1}^{n} x_i} = \frac{1}{\bar{x}}$ (the reciprocal of the sample mean).

**Answer 2:**
This is the same as Example 1 in the notes. The MLE for $p$ is $\hat{p}_{MLE} = \frac{k}{n}$.

**Answer 3:**
The likelihood function is $L(\lambda | D) = \prod_{i=1}^{n} \frac{\lambda^{x_i} e^{-\lambda}}{x_i!} = \frac{\lambda^{\sum x_i} e^{-n\lambda}}{\prod x_i!}$.
The log-likelihood function is $LL(\lambda | D) = (\sum x_i) \log(\lambda) - n\lambda - \sum \log(x_i!)$.
Taking the derivative with respect to $\lambda$:
$\frac{\partial LL}{\partial \lambda} = \frac{\sum x_i}{\lambda} - n$.
Setting to zero: $\frac{\sum x_i}{\lambda} - n = 0 \Rightarrow \frac{\sum x_i}{\lambda} = n \Rightarrow \lambda = \frac{\sum x_i}{n}$.
So, $\hat{\lambda}_{MLE} = \frac{1}{n}\sum_{i=1}^{n} x_i = \bar{x}$ (the sample mean).

---

### 6. Important Points to Remember:

*   **MLEs are parameter estimates:** They are *guesses* for the true underlying parameters based on the observed data.
*   **Assumes a specific distribution:** MLE requires you to assume that your data follows a particular probability distribution. The choice of distribution is crucial.
*   **Maximizing likelihood:** The core principle is to find parameters that make the observed data most probable.
*   **Log-likelihood simplifies calculations:** Use the log-likelihood to avoid numerical issues and for easier differentiation.
*   **Calculus is key:** For continuous distributions, differentiation is the standard method to find MLEs.
*   **MLE for variance is biased:** The MLE for the variance of a Normal distribution is slightly biased (underestimates the true variance) for finite samples. The unbiased estimator uses $n-1$ in the denominator.
*   **Foundation for many algorithms:** Understanding MLE is fundamental to many machine learning and statistical modeling techniques.
*   **Refer to relevant texts:** For deeper theoretical understanding and proofs, consult textbooks like Gupta & Kapoor, Deisenroth, Faisal, & Ong, and Fernandez-Granda.

---
