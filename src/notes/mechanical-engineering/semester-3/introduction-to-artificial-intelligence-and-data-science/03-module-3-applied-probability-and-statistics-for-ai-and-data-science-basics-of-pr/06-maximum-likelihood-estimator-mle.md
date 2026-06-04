---
title: "Maximum Likelihood Estimator (MLE) "
subject: "INTRODUCTION TO ARTIFICIAL INTELLIGENCE AND DATA SCIENCE"
module: "Module 3: Applied Probability and Statistics for AI and Data Science : Basics of probability"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462d97"
status: "completed"
scrapedAt: "2026-05-20T17:49:54.198Z"
---
# Module 3: Applied Probability and Statistics for AI and Data Science - Basics of Probability

## Topic: Maximum Likelihood Estimator (MLE)

### 1. Learning Outcomes

*   **Understand the core principle of Maximum Likelihood Estimation.**
*   **Be able to formulate the likelihood function for various probability distributions.**
*   **Derive the Maximum Likelihood Estimator for common parameters.**
*   **Recognize the properties of MLEs, such as consistency and asymptotic normality.**
*   **Apply MLE to real-world scenarios in AI and Data Science.**

### 2. Key Concepts and Definitions

#### 2.1 What is Estimation?

In data science and AI, we often deal with data that is assumed to be generated from an underlying probability distribution. This distribution typically has unknown parameters that we want to estimate from the observed data. **Estimation** is the process of using sample data to infer the value of population parameters.

#### 2.2 Point Estimation vs. Interval Estimation

*   **Point Estimation:** Provides a single value as the best guess for the unknown parameter.
*   **Interval Estimation:** Provides a range of values within which the true parameter is likely to lie, with a certain level of confidence.

MLE is a method for **point estimation**.

#### 2.3 Likelihood Function

The **likelihood function**, denoted by $L(\theta | x)$, is a function of the unknown parameters $\theta$, given the observed data $x$. It represents the probability of observing the data $x$ given a specific set of parameter values $\theta$.

**Crucially, the likelihood function is NOT a probability distribution of the parameters.** It's the probability of the data *given* the parameters.

Mathematically, for a set of $n$ independent and identically distributed (i.i.d.) observations $x_1, x_2, \ldots, x_n$:

$L(\theta | x_1, x_2, \ldots, x_n) = P(x_1, x_2, \ldots, x_n | \theta)$

If the observations are independent, this becomes the product of the individual probabilities:

$L(\theta | x_1, x_2, \ldots, x_n) = \prod_{i=1}^{n} P(x_i | \theta)$

#### 2.4 The Principle of Maximum Likelihood Estimation

The principle of **Maximum Likelihood Estimation (MLE)** states that we should choose the parameter values $\theta$ that maximize the likelihood of observing the given data. In other words, we want to find the $\theta$ that makes the observed data "most likely."

**Goal:** Find $\hat{\theta}_{MLE}$ such that $L(\hat{\theta}_{MLE} | x_1, \ldots, x_n) \ge L(\theta | x_1, \ldots, x_n)$ for all possible values of $\theta$.

#### 2.5 Log-Likelihood Function

Maximizing the likelihood function $L(\theta)$ is often mathematically challenging, especially when dealing with products of many probabilities. Since the logarithm is a monotonically increasing function, maximizing $L(\theta)$ is equivalent to maximizing its logarithm, $\log L(\theta)$. This is called the **log-likelihood function**, denoted by $l(\theta)$.

$l(\theta) = \log L(\theta) = \log \left( \prod_{i=1}^{n} P(x_i | \theta) \right) = \sum_{i=1}^{n} \log P(x_i | \theta)$

Using the log-likelihood simplifies calculations, especially for distributions like the Normal or Poisson, where probabilities involve exponentials.

#### 2.6 Finding the MLE

To find the $\hat{\theta}_{MLE}$, we typically use calculus:

1.  **Write down the likelihood function** $L(\theta)$ for the observed data and assumed distribution.
2.  **Compute the log-likelihood function** $l(\theta) = \log L(\theta)$.
3.  **Take the derivative of the log-likelihood with respect to $\theta$** and set it to zero:
    $\frac{\partial l(\theta)}{\partial \theta} = 0$
4.  **Solve the resulting equation for $\theta$**. The solution is the MLE, denoted as $\hat{\theta}_{MLE}$.
5.  **Verify that this value is a maximum** by checking the second derivative (though often this is implicitly understood for standard distributions).

### 3. Examples of MLE

Let's illustrate with common distributions. We assume we have $n$ i.i.d. observations $x_1, x_2, \ldots, x_n$.

#### 3.1 MLE for the Mean of a Normal Distribution (Variance Known)

Assume data $x_1, \ldots, x_n$ are drawn from a Normal distribution $N(\mu, \sigma^2)$ where $\sigma^2$ is known, and we want to estimate $\mu$.

The Probability Density Function (PDF) of a Normal distribution is:
$P(x | \mu, \sigma^2) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x - \mu)^2}{2\sigma^2}\right)$

1.  **Likelihood Function:**
    $L(\mu | x_1, \ldots, x_n) = \prod_{i=1}^{n} \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x_i - \mu)^2}{2\sigma^2}\right)$
    $L(\mu) = \left(\frac{1}{2\pi\sigma^2}\right)^{n/2} \exp\left(-\sum_{i=1}^{n} \frac{(x_i - \mu)^2}{2\sigma^2}\right)$

2.  **Log-Likelihood Function:**
    $l(\mu) = \log L(\mu) = \frac{n}{2} \log\left(\frac{1}{2\pi\sigma^2}\right) - \sum_{i=1}^{n} \frac{(x_i - \mu)^2}{2\sigma^2}$
    $l(\mu) = -\frac{n}{2} \log(2\pi\sigma^2) - \frac{1}{2\sigma^2} \sum_{i=1}^{n} (x_i - \mu)^2$

3.  **Derivative w.r.t. $\mu$:**
    $\frac{\partial l(\mu)}{\partial \mu} = -\frac{1}{2\sigma^2} \sum_{i=1}^{n} 2(x_i - \mu)(-1)$
    $\frac{\partial l(\mu)}{\partial \mu} = \frac{1}{\sigma^2} \sum_{i=1}^{n} (x_i - \mu)$

4.  **Set derivative to zero and solve for $\mu$:**
    $\frac{1}{\sigma^2} \sum_{i=1}^{n} (x_i - \mu) = 0$
    $\sum_{i=1}^{n} (x_i - \mu) = 0$
    $\sum_{i=1}^{n} x_i - \sum_{i=1}^{n} \mu = 0$
    $\sum_{i=1}^{n} x_i - n\mu = 0$
    $n\mu = \sum_{i=1}^{n} x_i$
    $\mu = \frac{1}{n} \sum_{i=1}^{n} x_i$

5.  **Result:** The MLE for the mean $\mu$ of a Normal distribution (with known variance) is the sample mean:
    $\hat{\mu}_{MLE} = \bar{x} = \frac{1}{n} \sum_{i=1}^{n} x_i$

    *(Referenced from: Fundamentals of mathematical statistics by Gupta & Kapoor, and Probability and Statistics for Data Science by Fernandez-Granda)*

#### 3.2 MLE for the Parameter $p$ of a Bernoulli Distribution

Assume data $x_1, \ldots, x_n$ are drawn from a Bernoulli distribution, where $x_i \in \{0, 1\}$. The parameter $p$ is the probability of success (i.e., $P(x_i=1) = p$). We want to estimate $p$.

The PDF of a Bernoulli distribution can be written as:
$P(x | p) = p^x (1-p)^{1-x}$ for $x \in \{0, 1\}$

1.  **Likelihood Function:**
    $L(p | x_1, \ldots, x_n) = \prod_{i=1}^{n} p^{x_i} (1-p)^{1-x_i}$
    $L(p) = p^{\sum x_i} (1-p)^{\sum (1-x_i)}$
    Let $S = \sum_{i=1}^{n} x_i$ (the number of successes). Then $\sum (1-x_i) = n - S$ (the number of failures).
    $L(p) = p^S (1-p)^{n-S}$

2.  **Log-Likelihood Function:**
    $l(p) = \log L(p) = S \log p + (n-S) \log(1-p)$

3.  **Derivative w.r.t. $p$:**
    $\frac{\partial l(p)}{\partial p} = \frac{S}{p} - \frac{n-S}{1-p}$

4.  **Set derivative to zero and solve for $p$:**
    $\frac{S}{p} - \frac{n-S}{1-p} = 0$
    $\frac{S}{p} = \frac{n-S}{1-p}$
    $S(1-p) = p(n-S)$
    $S - Sp = np - Sp$
    $S = np$
    $p = \frac{S}{n}$

5.  **Result:** The MLE for the probability of success $p$ in a Bernoulli trial is the proportion of successes in the sample:
    $\hat{p}_{MLE} = \frac{\sum_{i=1}^{n} x_i}{n}$
    This is simply the sample mean.

    *(Referenced from: Probability and Statistics for Data Science by Fernandez-Granda, and Mathematics for machine learning by Deisenroth et al.)*

#### 3.3 MLE for the Parameter $\lambda$ of a Poisson Distribution

Assume data $x_1, \ldots, x_n$ are drawn from a Poisson distribution with rate parameter $\lambda > 0$. We want to estimate $\lambda$.

The PDF of a Poisson distribution is:
$P(x | \lambda) = \frac{\lambda^x e^{-\lambda}}{x!}$ for $x = 0, 1, 2, \ldots$

1.  **Likelihood Function:**
    $L(\lambda | x_1, \ldots, x_n) = \prod_{i=1}^{n} \frac{\lambda^{x_i} e^{-\lambda}}{x_i!}$
    $L(\lambda) = \frac{\lambda^{\sum x_i} e^{-n\lambda}}{\prod_{i=1}^{n} x_i!}$
    Let $S = \sum_{i=1}^{n} x_i$.
    $L(\lambda) = \frac{\lambda^S e^{-n\lambda}}{\prod_{i=1}^{n} x_i!}$

2.  **Log-Likelihood Function:**
    $l(\lambda) = \log L(\lambda) = S \log \lambda - n\lambda - \sum_{i=1}^{n} \log(x_i!)$

3.  **Derivative w.r.t. $\lambda$:**
    $\frac{\partial l(\lambda)}{\partial \lambda} = \frac{S}{\lambda} - n$

4.  **Set derivative to zero and solve for $\lambda$:**
    $\frac{S}{\lambda} - n = 0$
    $\frac{S}{\lambda} = n$
    $\lambda = \frac{S}{n}$

5.  **Result:** The MLE for the rate parameter $\lambda$ of a Poisson distribution is the sample mean:
    $\hat{\lambda}_{MLE} = \frac{\sum_{i=1}^{n} x_i}{n} = \bar{x}$

    *(Referenced from: Fundamentals of mathematical statistics by Gupta & Kapoor)*

#### 3.4 MLE for Parameters of a 2D Normal Distribution (Mean Vector and Covariance Matrix)

For a bivariate Normal distribution with mean vector $\boldsymbol{\mu} = [\mu_1, \mu_2]^T$ and covariance matrix $\Sigma = \begin{pmatrix} \sigma_1^2 & \rho\sigma_1\sigma_2 \\ \rho\sigma_1\sigma_2 & \sigma_2^2 \end{pmatrix}$, the MLEs for $\boldsymbol{\mu}$ and $\Sigma$ are the sample mean vector and sample covariance matrix, respectively.

*   **MLE for Mean Vector:** $\hat{\boldsymbol{\mu}}_{MLE} = \overline{\mathbf{x}} = \frac{1}{n}\sum_{i=1}^n \mathbf{x}_i$
*   **MLE for Covariance Matrix:** $\hat{\Sigma}_{MLE} = \frac{1}{n}\sum_{i=1}^n (\mathbf{x}_i - \overline{\mathbf{x}})(\mathbf{x}_i - \overline{\mathbf{x}})^T$

This extends to multivariate Normal distributions. Estimating the covariance matrix from data often involves these calculations.

    *(Referenced from: Mathematics for machine learning by Deisenroth et al., and Probability and Statistics - The Science of Uncertainty by Evans & Rosenthal)*

### 4. Properties of MLEs

MLEs are widely used because they possess desirable statistical properties, especially for large sample sizes ($n$).

#### 4.1 Consistency

An estimator $\hat{\theta}_n$ is said to be **consistent** if it converges in probability to the true parameter $\theta$ as the sample size $n$ goes to infinity.
$plim_{n \to \infty} \hat{\theta}_n = \theta$

**MLEs are generally consistent.** This means that with more data, our estimate gets closer to the true underlying parameter value.

*(Referenced from: Fundamentals of mathematical statistics by Gupta & Kapoor, and Probability and Statistics for Data Science by Fernandez-Granda)*

#### 4.2 Asymptotic Normality

For large sample sizes, the distribution of the MLE $\hat{\theta}_{MLE}$ is approximately Normal, centered around the true parameter $\theta$, with a variance that is inversely proportional to $n$.

$\sqrt{n}(\hat{\theta}_{MLE} - \theta) \xrightarrow{d} N(0, I(\theta)^{-1})$

where $I(\theta)$ is the Fisher Information of the parameter $\theta$. This property is crucial for constructing confidence intervals and performing hypothesis tests.

*(Referenced from: Fundamentals of mathematical statistics by Gupta & Kapoor, and Mathematics for machine learning by Deisenroth et al.)*

#### 4.3 Efficiency

Under certain regularity conditions, MLEs are **asymptotically efficient**. This means that among all asymptotically unbiased estimators, the MLE has the smallest asymptotic variance. In simpler terms, for large samples, the MLE is the "best" estimator in terms of precision.

*(Referenced from: Fundamentals of mathematical statistics by Gupta & Kapoor)*

#### 4.4 Invariance Property

If $\hat{\theta}$ is the MLE of $\theta$, and $g(\cdot)$ is a function, then $g(\hat{\theta})$ is the MLE of $g(\theta)$. This means that if we estimate a parameter and then transform it, the result is the MLE of the transformed parameter.

**Example:** If $\hat{\mu}_{MLE} = \bar{x}$ is the MLE for $\mu$ in a Normal distribution, then $\exp(\hat{\mu}_{MLE}) = \exp(\bar{x})$ is the MLE for $\exp(\mu)$.

*(Referenced from: Probability and Statistics for Data Science by Fernandez-Granda)*

### 5. Applications in AI and Data Science

MLE is a fundamental tool used extensively in building and training machine learning models.

*   **Parameter Estimation in Probabilistic Models:** Many AI models are based on probabilistic frameworks (e.g., Naive Bayes, Hidden Markov Models, Bayesian Networks). MLE is used to estimate the parameters of these underlying distributions from data.
*   **Model Fitting:** When fitting distributions to data, MLE is a common method for finding the best-fitting parameters.
*   **Deep Learning:** While deep learning often uses gradient descent, the underlying loss functions (like cross-entropy) are often derived from likelihood principles. For instance, the cross-entropy loss for classification is related to the negative log-likelihood of the predicted probabilities given the true labels.
*   **Feature Engineering:** Understanding distributions of features and estimating their parameters can inform feature engineering and selection.
*   **Statistical Inference:** MLEs form the basis for many statistical inference procedures used in data analysis and model evaluation.

*(Referenced from: Hands-on machine learning with Scikit-Learn, Keras, and TensorFlow by Géron, and Introducing data science: big data, machine learning, and more, using Python tools by Cielen et al.)*

### 6. Important Points to Remember

*   **MLEs find parameters that maximize the probability of observing the given data.**
*   **The likelihood function is $P(\text{data} | \text{parameters})$.** It is not a probability distribution of the parameters.
*   **Working with the log-likelihood simplifies calculations** (turns products into sums).
*   **Key step to finding MLEs is to take the derivative of the log-likelihood and set it to zero.**
*   **MLEs are often the sample mean or sample proportions** for common distributions.
*   **MLEs are typically consistent, asymptotically normal, and efficient** for large sample sizes.
*   **The invariance property is very useful.**

### 7. Practice Questions

1.  **Question:** Suppose we have $n$ independent observations $x_1, \ldots, x_n$ from a geometric distribution with parameter $p$ (probability of success on a single trial). The PMF is $P(X=k) = (1-p)^{k-1}p$ for $k=1, 2, 3, \ldots$. Find the MLE for $p$.

    **Answer:**
    The likelihood function is:
    $L(p) = \prod_{i=1}^{n} (1-p)^{x_i-1}p = p^n (1-p)^{\sum(x_i-1)}$
    Let $S = \sum_{i=1}^{n} x_i$. Then $\sum(x_i-1) = (\sum x_i) - n = S - n$.
    $L(p) = p^n (1-p)^{S-n}$

    The log-likelihood function is:
    $l(p) = n \log p + (S-n) \log(1-p)$

    Take the derivative with respect to $p$:
    $\frac{\partial l(p)}{\partial p} = \frac{n}{p} - \frac{S-n}{1-p}$

    Set to zero and solve for $p$:
    $\frac{n}{p} = \frac{S-n}{1-p}$
    $n(1-p) = p(S-n)$
    $n - np = pS - pn$
    $n = pS$
    $p = \frac{n}{S}$

    So, $\hat{p}_{MLE} = \frac{n}{\sum_{i=1}^{n} x_i}$. This means the MLE for the probability of success is the reciprocal of the sample mean of the number of trials until the first success.

2.  **Question:** If we have data $x_1, \ldots, x_n$ assumed to be from an exponential distribution with rate parameter $\lambda$, where $P(x|\lambda) = \lambda e^{-\lambda x}$ for $x \ge 0$. Find the MLE for $\lambda$.

    **Answer:**
    The likelihood function is:
    $L(\lambda) = \prod_{i=1}^{n} \lambda e^{-\lambda x_i} = \lambda^n e^{-\lambda \sum x_i}$

    The log-likelihood function is:
    $l(\lambda) = n \log \lambda - \lambda \sum x_i$

    Take the derivative with respect to $\lambda$:
    $\frac{\partial l(\lambda)}{\partial \lambda} = \frac{n}{\lambda} - \sum x_i$

    Set to zero and solve for $\lambda$:
    $\frac{n}{\lambda} - \sum x_i = 0$
    $\frac{n}{\lambda} = \sum x_i$
    $\lambda = \frac{n}{\sum x_i}$

    So, $\hat{\lambda}_{MLE} = \frac{n}{\sum_{i=1}^{n} x_i} = \frac{1}{\bar{x}}$. The MLE for the rate parameter of an exponential distribution is the reciprocal of the sample mean.

3.  **Question:** What is the main difference between a likelihood function and a probability mass/density function?

    **Answer:**
    A probability mass function (PMF) or probability density function (PDF) describes the probability of observing different values of a random variable, given fixed parameters. The parameters are considered fixed.
    A likelihood function, on the other hand, is a function of the parameters, given the observed data. It describes how likely the observed data are for different values of the parameters. The data are considered fixed, and the parameters are treated as variables.

### 8. Alignment with Course Outcomes

*   **CO1 (Apply ML algorithms):** Understanding how parameters in probabilistic models (like Naive Bayes, which can be seen as a simplified probabilistic model) are estimated is a foundational step towards applying ML algorithms. MLE provides the mechanism for learning these parameters from data.
*   **CO2 (Apply advanced math):** The process of finding MLEs involves calculus (differentiation) and understanding the properties of functions, directly applying mathematical concepts.
*   **CO3 (Analyze and interpret data):** MLE is a statistical method used to analyze data by estimating parameters of underlying distributions, allowing for interpretation of the data-generating process.
*   **CO4 (Integrate statistical and ML):** MLE bridges statistics and machine learning by providing a principled way to estimate model parameters, enabling the integration of statistical inference with machine learning model building.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 9. Further Reading/References

*   **Fundamentals of mathematical statistics** by Gupta, S. C., and V. K. Kapoor (Chapter on Estimation)
*   **Probability and Statistics for Data Science** by Carlos Fernandez-Granda (Chapter on Maximum Likelihood Estimation)
*   **Mathematics for machine learning** by Deisenroth, Marc Peter, et al. (Section on Maximum Likelihood Estimation)
*   **Hands-on machine learning with Scikit-Learn, Keras, and TensorFlow** by Aurélien Géron (While not a deep dive into MLE derivations, it shows its application in model building and loss functions.)

This concludes the notes on Maximum Likelihood Estimator (MLE). Remember to practice deriving MLEs for different distributions to solidify your understanding.