---
title: "Maximum Likelihood Estimator (MLE)"
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA 
SCIENCE"
module: "Module 3: Applied Probability and Statistics for AI and Data Science : Basics of probability"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe353"
status: "completed"
scrapedAt: "2026-05-23T17:45:54.167Z"
---
# Module 3: Applied Probability and Statistics for AI and Data Science - Basics of Probability

## Topic: Maximum Likelihood Estimator (MLE)

### Learning Outcomes:
This topic will equip you with the ability to:
*   Understand the fundamental principle of Maximum Likelihood Estimation.
*   Formulate the likelihood function for various probability distributions.
*   Derive the Maximum Likelihood Estimator (MLE) for parameters of common distributions.
*   Evaluate the properties of MLEs, such as consistency and asymptotic normality.
*   Apply MLE to real-world problems in AI and Data Science.

### 1. Introduction to Estimation

In AI and Data Science, we often encounter situations where we need to infer unknown parameters of a model or a probability distribution based on observed data. This process of inferring unknown parameters from data is called **estimation**.

**Key Concept:** **Parameter Estimation** is the process of using observed data to determine the values of unknown parameters of a statistical model.

**Example:**
If we are modeling the height of adults in a population using a Normal distribution, the unknown parameters are the mean ($\mu$) and the variance ($\sigma^2$). We can collect a sample of heights and use them to estimate $\mu$ and $\sigma^2$.

### 2. What is Maximum Likelihood Estimation (MLE)?

Maximum Likelihood Estimation (MLE) is a fundamental and widely used method for estimating the parameters of a statistical model. The core idea behind MLE is to find the parameter values that maximize the probability (or likelihood) of observing the given data.

**Key Concept:** **Maximum Likelihood Estimator (MLE)** is a statistical method that determines the values of the parameters of a model that maximize the likelihood of the observed data.

**Intuition:** Imagine you have a set of observed data points. You are trying to find the "best" parameters for your chosen model that would make these observed data points "most likely" to have occurred.

### 3. The Likelihood Function

The **likelihood function**, denoted by $L(\theta | \mathbf{x})$, represents the probability of observing the given data $\mathbf{x}$ as a function of the model parameters $\theta$.

*   $\mathbf{x} = \{x_1, x_2, ..., x_n\}$ is the set of observed data points.
*   $\theta$ represents the unknown parameter(s) of the model.

**For independent and identically distributed (i.i.d.) data:**
If the data points are independent, the joint probability of observing the entire dataset is the product of the probabilities of observing each individual data point:

$L(\theta | \mathbf{x}) = P(x_1, x_2, ..., x_n | \theta) = \prod_{i=1}^{n} P(x_i | \theta)$

**If the model is for a probability density function (PDF) for continuous data:**
$L(\theta | \mathbf{x}) = \prod_{i=1}^{n} f(x_i | \theta)$

**If the model is for a probability mass function (PMF) for discrete data:**
$L(\theta | \mathbf{x}) = \prod_{i=1}^{n} P(x_i | \theta)$

**Important Note:** The likelihood function is *not* a probability distribution of the parameter $\theta$. It's a function of $\theta$ for fixed observed data.

### 4. Maximizing the Likelihood Function

To find the MLE, we need to find the value of $\theta$ that maximizes $L(\theta | \mathbf{x})$. This is typically done by finding the derivative of the likelihood function with respect to $\theta$, setting it to zero, and solving for $\theta$.

**Challenges:**
*   The product form of the likelihood function can be computationally difficult to work with, especially when dealing with many data points.
*   Derivatives of products can be complex.

**Solution: The Log-Likelihood Function**

To simplify the maximization process, we often work with the **log-likelihood function**, $l(\theta | \mathbf{x}) = \log(L(\theta | \mathbf{x}))$. This is because the logarithm is a monotonically increasing function, meaning that the value of $\theta$ that maximizes $L(\theta | \mathbf{x})$ also maximizes $\log(L(\theta | \mathbf{x}))$.

Using the property of logarithms ($\log(ab) = \log(a) + \log(b)$):

$l(\theta | \mathbf{x}) = \log\left(\prod_{i=1}^{n} P(x_i | \theta)\right) = \sum_{i=1}^{n} \log(P(x_i | \theta))$

Now, we maximize $l(\theta | \mathbf{x})$ by finding its derivative with respect to $\theta$ and setting it to zero:

$\frac{\partial l(\theta | \mathbf{x})}{\partial \theta} = 0$

Solving this equation for $\theta$ gives us the Maximum Likelihood Estimator, denoted as $\hat{\theta}_{MLE}$.

**Reference:** This approach is a cornerstone of statistical inference and is extensively covered in texts like "Fundamentals of Mathematical Statistics" by Gupta & Kapoor and "Probability and Statistics for Data Science" by Carlos Fernandez-Granda.

### 5. MLE for Common Distributions

Let's look at how to derive MLEs for a few common probability distributions.

#### 5.1. Bernoulli Distribution

The Bernoulli distribution models a single trial with two possible outcomes (success or failure). The PMF is:
$P(X=1) = p$
$P(X=0) = 1-p$

Let $\mathbf{x} = \{x_1, x_2, ..., x_n\}$ be a sample of $n$ i.i.d. Bernoulli random variables, where $x_i \in \{0, 1\}$.
The likelihood function is:
$L(p | \mathbf{x}) = \prod_{i=1}^{n} p^{x_i} (1-p)^{1-x_i}$
$L(p | \mathbf{x}) = p^{\sum x_i} (1-p)^{\sum (1-x_i)}$
Let $k = \sum x_i$ (the number of successes). Then $\sum (1-x_i) = n - k$.
$L(p | \mathbf{x}) = p^k (1-p)^{n-k}$

The log-likelihood function is:
$l(p | \mathbf{x}) = \log(p^k (1-p)^{n-k}) = k \log(p) + (n-k) \log(1-p)$

To find the MLE, we differentiate with respect to $p$ and set to zero:
$\frac{\partial l(p | \mathbf{x})}{\partial p} = \frac{k}{p} - \frac{n-k}{1-p} = 0$
$\frac{k}{p} = \frac{n-k}{1-p}$
$k(1-p) = p(n-k)$
$k - kp = np - kp$
$k = np$
$\hat{p}_{MLE} = \frac{k}{n}$

**Result:** The MLE for the probability of success in a Bernoulli distribution is the sample proportion of successes.

**Example:** If we flip a coin 10 times and get 7 heads, the MLE for the probability of getting a head is $\hat{p}_{MLE} = 7/10 = 0.7$.

#### 5.2. Binomial Distribution

The Binomial distribution models the number of successes in a fixed number of independent Bernoulli trials. The PMF is:
$P(X=k | n, p) = \binom{n}{k} p^k (1-p)^{n-k}$

If we have $m$ observations, $x_1, x_2, ..., x_m$, where each $x_i$ is the number of successes in $n$ trials, and the underlying probability of success is $p$.
The likelihood function for one observation $x_i$ (number of successes in $n$ trials) is:
$L(p | x_i) = \binom{n}{x_i} p^{x_i} (1-p)^{n-x_i}$

For $m$ independent observations:
$L(p | \mathbf{x}) = \prod_{i=1}^{m} \binom{n}{x_i} p^{x_i} (1-p)^{n-x_i}$
$L(p | \mathbf{x}) = \left(\prod_{i=1}^{m} \binom{n}{x_i}\right) p^{\sum x_i} (1-p)^{\sum (n-x_i)}$
Let $K = \sum x_i$ (total number of successes across all trials) and $M = m \times n$ (total number of trials across all observations).
$L(p | \mathbf{x}) = C \cdot p^K (1-p)^{M-K}$ (where $C$ is the product of binomial coefficients)

The log-likelihood function is:
$l(p | \mathbf{x}) = \log(C) + K \log(p) + (M-K) \log(1-p)$

Maximizing with respect to $p$:
$\frac{\partial l(p | \mathbf{x})}{\partial p} = \frac{K}{p} - \frac{M-K}{1-p} = 0$
$\frac{K}{p} = \frac{M-K}{1-p}$
$K(1-p) = p(M-K)$
$K - Kp = Mp - Kp$
$K = Mp$
$\hat{p}_{MLE} = \frac{K}{M}$

**Result:** The MLE for the probability of success in a Binomial distribution is the overall sample proportion of successes.

**Example:** Suppose we have two experiments. Experiment 1: 10 trials, 7 successes. Experiment 2: 20 trials, 12 successes.
Total successes $K = 7 + 12 = 19$.
Total trials $M = 10 + 20 = 30$.
$\hat{p}_{MLE} = 19/30$.

#### 5.3. Poisson Distribution

The Poisson distribution models the number of events occurring in a fixed interval of time or space, given a constant average rate. The PMF is:
$P(X=k | \lambda) = \frac{e^{-\lambda} \lambda^k}{k!}$

Let $\mathbf{x} = \{x_1, x_2, ..., x_n\}$ be a sample of $n$ i.i.d. Poisson random variables with parameter $\lambda$.
The likelihood function is:
$L(\lambda | \mathbf{x}) = \prod_{i=1}^{n} \frac{e^{-\lambda} \lambda^{x_i}}{x_i!}$
$L(\lambda | \mathbf{x}) = \frac{e^{-n\lambda} \lambda^{\sum x_i}}{\prod x_i!}$
Let $S = \sum x_i$.
$L(\lambda | \mathbf{x}) = \frac{e^{-n\lambda} \lambda^S}{\prod x_i!}$

The log-likelihood function is:
$l(\lambda | \mathbf{x}) = \log\left(\frac{e^{-n\lambda} \lambda^S}{\prod x_i!}\right) = -n\lambda + S \log(\lambda) - \sum \log(x_i!)$

Maximizing with respect to $\lambda$:
$\frac{\partial l(\lambda | \mathbf{x})}{\partial \lambda} = -n + \frac{S}{\lambda} = 0$
$\frac{S}{\lambda} = n$
$\hat{\lambda}_{MLE} = \frac{S}{n}$

**Result:** The MLE for the rate parameter $\lambda$ of a Poisson distribution is the sample mean.

**Example:** If we observe the number of emails received per hour over 5 hours as {15, 12, 18, 20, 15}, the sample mean is $(15+12+18+20+15)/5 = 80/5 = 16$.
The MLE for the average rate of emails per hour is $\hat{\lambda}_{MLE} = 16$.

#### 5.4. Normal Distribution (Mean and Variance Unknown)

The Normal (Gaussian) distribution is defined by its mean ($\mu$) and variance ($\sigma^2$). The PDF is:
$f(x | \mu, \sigma^2) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$

Let $\mathbf{x} = \{x_1, x_2, ..., x_n\}$ be a sample of $n$ i.i.d. Normal random variables.
The likelihood function is:
$L(\mu, \sigma^2 | \mathbf{x}) = \prod_{i=1}^{n} \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x_i-\mu)^2}{2\sigma^2}}$
$L(\mu, \sigma^2 | \mathbf{x}) = \left(\frac{1}{\sqrt{2\pi\sigma^2}}\right)^n \exp\left(-\sum_{i=1}^{n} \frac{(x_i-\mu)^2}{2\sigma^2}\right)$
$L(\mu, \sigma^2 | \mathbf{x}) = (2\pi\sigma^2)^{-n/2} \exp\left(-\frac{1}{2\sigma^2}\sum_{i=1}^{n} (x_i-\mu)^2\right)$

The log-likelihood function is:
$l(\mu, \sigma^2 | \mathbf{x}) = -\frac{n}{2}\log(2\pi) - \frac{n}{2}\log(\sigma^2) - \frac{1}{2\sigma^2}\sum_{i=1}^{n} (x_i-\mu)^2$

To find the MLE for $\mu$ and $\sigma^2$, we need to take partial derivatives with respect to both parameters and set them to zero.

**Partial derivative with respect to $\mu$:**
$\frac{\partial l}{\partial \mu} = -\frac{1}{2\sigma^2} \sum_{i=1}^{n} 2(x_i-\mu)(-1) = \frac{1}{\sigma^2} \sum_{i=1}^{n} (x_i-\mu) = 0$
$\sum_{i=1}^{n} (x_i-\mu) = 0$
$\sum x_i - \sum \mu = 0$
$\sum x_i - n\mu = 0$
$\hat{\mu}_{MLE} = \frac{\sum x_i}{n}$ (The sample mean)

**Partial derivative with respect to $\sigma^2$:**
Let $S_2 = \sum_{i=1}^{n} (x_i-\mu)^2$.
$\frac{\partial l}{\partial \sigma^2} = -\frac{n}{2} \cdot \frac{1}{\sigma^2} - \frac{1}{2} \sum_{i=1}^{n} (x_i-\mu)^2 \cdot (-\frac{1}{(\sigma^2)^2}) = -\frac{n}{2\sigma^2} + \frac{1}{2(\sigma^2)^2} \sum_{i=1}^{n} (x_i-\mu)^2 = 0$
Multiply by $2(\sigma^2)^2$:
$-n\sigma^2 + \sum_{i=1}^{n} (x_i-\mu)^2 = 0$
$n\sigma^2 = \sum_{i=1}^{n} (x_i-\mu)^2$
$\sigma^2 = \frac{1}{n} \sum_{i=1}^{n} (x_i-\mu)^2$

Substitute the MLE for $\mu$:
$\hat{\sigma}^2_{MLE} = \frac{1}{n} \sum_{i=1}^{n} (x_i - \hat{\mu}_{MLE})^2$

**Result:**
*   MLE for the mean ($\mu$) of a Normal distribution is the sample mean: $\hat{\mu}_{MLE} = \bar{x} = \frac{1}{n}\sum x_i$.
*   MLE for the variance ($\sigma^2$) of a Normal distribution is the sample variance, but with $n$ in the denominator: $\hat{\sigma}^2_{MLE} = \frac{1}{n}\sum (x_i - \bar{x})^2$.

**Important Distinction:** Note that the unbiased estimator for variance uses $n-1$ in the denominator: $s^2 = \frac{1}{n-1}\sum (x_i - \bar{x})^2$. MLE provides the estimate that maximizes the likelihood, not necessarily the unbiased one.

**Reference:** This derivation aligns with the concepts in "Mathematics for Machine Learning" by Deisenroth et al. and "Fundamentals of Mathematical Statistics" by Gupta & Kapoor.

### 6. Properties of MLEs

MLEs are desirable estimators due to several important statistical properties:

1.  **Consistency:** As the sample size $n$ increases, the MLE converges in probability to the true parameter value.
    *   $\hat{\theta}_{MLE} \xrightarrow{p} \theta$ as $n \to \infty$.
    *   This means that with more data, our estimate gets closer to the actual value.

2.  **Asymptotic Normality:** For large sample sizes, the distribution of the MLE is approximately Normal.
    *   $\sqrt{n}(\hat{\theta}_{MLE} - \theta) \xrightarrow{d} N(0, I(\theta)^{-1})$, where $I(\theta)$ is the Fisher Information.
    *   This property allows us to construct confidence intervals and perform hypothesis tests.

3.  **Asymptotic Efficiency:** MLEs are asymptotically efficient, meaning they achieve the Cramér-Rao lower bound for variance among all unbiased estimators as $n \to \infty$.
    *   This implies they have the smallest possible variance among a broad class of estimators for large sample sizes.

4.  **Invariance Property:** If $\hat{\theta}$ is the MLE of $\theta$, then $g(\hat{\theta})$ is the MLE of $g(\theta)$ for any function $g$.
    *   For example, if $\hat{\mu}_{MLE}$ is the MLE for $\mu$, then $\exp(\hat{\mu}_{MLE})$ is the MLE for $e^\mu$.

**Limitations/Considerations:**
*   MLEs are not always unbiased, especially for small sample sizes (e.g., variance of Normal distribution).
*   The maximization of the likelihood function can sometimes be complex and may not have a closed-form solution, requiring numerical optimization methods.

### 7. MLE in AI and Data Science Applications

MLE is fundamental to many algorithms and techniques used in AI and Data Science:

*   **Parameter Estimation in Machine Learning Models:**
    *   **Linear Regression:** Estimating coefficients ($\beta$) often involves minimizing the sum of squared errors, which is equivalent to MLE under the assumption of normally distributed errors (Gaussian noise).
    *   **Logistic Regression:** Estimating model weights is done by maximizing the likelihood of the observed class labels given the input features.
    *   **Naive Bayes:** Estimating the probabilities of features given classes ($P(feature|class)$) and prior probabilities ($P(class)$) are done using MLE.
    *   **Hidden Markov Models (HMMs):** The Baum-Welch algorithm, used for parameter estimation in HMMs, is a form of Expectation-Maximization (EM) algorithm, which iteratively performs MLE-like steps.
    *   **Neural Networks:** While often trained using gradient descent on loss functions like cross-entropy, the underlying probabilistic interpretation of these loss functions often relates back to likelihood maximization.

*   **Probabilistic Graphical Models:** MLE is used to estimate the parameters of conditional probability distributions in models like Bayesian Networks and Markov Random Fields.

*   **Natural Language Processing (NLP):** Estimating word frequencies, language model probabilities (e.g., n-grams), and parameters in topic models like Latent Dirichlet Allocation (LDA) often uses MLE.

*   **Computer Vision:** Estimating parameters for object detection models, image segmentation algorithms, and various feature descriptors can rely on MLE.

**Reference:** "Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow" by Aurélien Géron frequently demonstrates MLE in practice for various ML algorithms. "Introducing Data Science" by Cielen et al. also covers practical applications.

### 8. Example Application: Estimating Parameters for a Spam Filter

Consider building a simple spam filter based on the frequency of certain words in emails. We can model the presence of words using probabilities.

Let's say we want to estimate the probability that the word "viagra" appears in a spam email, denoted by $P(\text{"viagra"}|\text{Spam})$. We collect a dataset of emails labeled as spam.

*   **Data:** 100 emails labeled as Spam.
*   **Observation:** "viagra" appears in 30 of these spam emails.

Using MLE for the Bernoulli distribution (where "appearing" is success and "not appearing" is failure):
$\hat{p}_{MLE} = \frac{\text{Number of spam emails with "viagra"}}{\text{Total number of spam emails}} = \frac{30}{100} = 0.3$

Similarly, we would estimate $P(\text{"viagra"}|\text{Not Spam})$ from emails labeled as "Not Spam".

**CO Alignment:**
*   **CO1 (Apply ML algorithms):** MLE is a core component for estimating parameters in many supervised learning algorithms used for classification like Naive Bayes and Logistic Regression.
*   **CO3 (Analyze and interpret data using statistical methods):** MLE provides a principled way to derive parameter estimates from data, which are then used for interpretation and decision-making.

### 9. Practice Questions and Exercises

**Question 1:**
You observe a sequence of coin flips: H, T, H, H, T. What is the Maximum Likelihood Estimate for the probability of getting a Head ($p$)?

**Answer 1:**
This is a Bernoulli process. We have 3 Heads and 2 Tails.
The MLE for $p$ is the proportion of Heads:
$\hat{p}_{MLE} = \frac{\text{Number of Heads}}{\text{Total number of flips}} = \frac{3}{5} = 0.6$

**Question 2:**
Suppose you are modeling the number of customer complaints per day in a store using a Poisson distribution. Over 7 days, you recorded the number of complaints: {2, 0, 3, 1, 2, 0, 4}. What is the MLE for the average rate of complaints per day ($\lambda$)?

**Answer 2:**
The MLE for the rate parameter $\lambda$ of a Poisson distribution is the sample mean.
Sum of complaints = $2 + 0 + 3 + 1 + 2 + 0 + 4 = 12$.
Number of days = 7.
$\hat{\lambda}_{MLE} = \frac{\sum x_i}{n} = \frac{12}{7} \approx 1.714$

**Question 3:**
Consider a dataset of heights $\{1.75, 1.80, 1.65, 1.90, 1.70\}$ meters, assumed to be from a Normal distribution $N(\mu, \sigma^2)$.
a) What is the MLE for $\mu$?
b) What is the MLE for $\sigma^2$?

**Answer 3:**
a) The MLE for $\mu$ is the sample mean ($\bar{x}$).
$\bar{x} = \frac{1.75 + 1.80 + 1.65 + 1.90 + 1.70}{5} = \frac{8.80}{5} = 1.76$ meters.
$\hat{\mu}_{MLE} = 1.76$ meters.

b) The MLE for $\sigma^2$ is $\frac{1}{n}\sum (x_i - \bar{x})^2$.
Deviations from the mean:
$(1.75 - 1.76) = -0.01$
$(1.80 - 1.76) = 0.04$
$(1.65 - 1.76) = -0.11$
$(1.90 - 1.76) = 0.14$
$(1.70 - 1.76) = -0.06$

Squared deviations:
$(-0.01)^2 = 0.0001$
$(0.04)^2 = 0.0016$
$(-0.11)^2 = 0.0121$
$(0.14)^2 = 0.0196$
$(-0.06)^2 = 0.0036$

Sum of squared deviations = $0.0001 + 0.0016 + 0.0121 + 0.0196 + 0.0036 = 0.0370$.
$\hat{\sigma}^2_{MLE} = \frac{0.0370}{5} = 0.0074$ square meters.

*(Note: The unbiased estimate of variance would be $0.0370 / 4 = 0.00925$)*.

**Question 4 (Conceptual):**
Why is the log-likelihood function often used instead of the likelihood function for parameter estimation?

**Answer 4:**
The log-likelihood function is used because:
1.  **Simplifies Calculation:** It converts a product of probabilities (likelihood function) into a sum of logarithms of probabilities (log-likelihood function). Differentiating sums is mathematically simpler than differentiating products.
2.  **Numerical Stability:** For large datasets, the product of many small probabilities can lead to underflow issues (numbers becoming too small to be represented accurately by a computer). Working with sums of logarithms is more numerically stable.
3.  **Preserves Maximizer:** Since the logarithm is a monotonically increasing function, the parameter value that maximizes the likelihood function also maximizes the log-likelihood function.

### 10. Important Points to Remember

*   **Goal of MLE:** To find parameter values that make the observed data most probable.
*   **Likelihood Function:** $L(\theta | \mathbf{x}) = P(\mathbf{x} | \theta)$. For i.i.d. data, it's the product of individual probabilities/densities.
*   **Log-Likelihood Function:** $l(\theta | \mathbf{x}) = \sum \log(P(x_i | \theta))$. Used for easier maximization.
*   **Maximization:** Done by setting the derivative of the log-likelihood to zero.
*   **Common MLEs:**
    *   Bernoulli: Sample proportion of successes.
    *   Binomial: Overall sample proportion of successes.
    *   Poisson: Sample mean.
    *   Normal (mean): Sample mean.
    *   Normal (variance): Sample variance with $n$ in the denominator.
*   **Properties:** MLEs are typically consistent, asymptotically normal, and asymptotically efficient. They also possess the invariance property.
*   **Distinction:** MLE estimates maximize the likelihood of the data, not necessarily providing unbiased estimators (e.g., variance of Normal distribution).
*   **Applications:** Crucial for parameter estimation in almost all machine learning algorithms and statistical modeling.

This concludes the notes on the Maximum Likelihood Estimator. Understanding MLE is vital for building and interpreting models in AI and Data Science.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
