---
title: "Summary Statistics and Independence – Gaussian Distribution - Conjugacy and the Exponential Family - Change of Variables/Inverse Transform."
subject: "MATHEMATICS FOR MACHINE LEARNING"
module: "Module 4: Probability and Distributions: Construction of a Probability Space "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35ef5"
status: "completed"
scrapedAt: "2026-05-23T16:17:23.331Z"
---
# Mathematics for Machine Learning: Module 4 - Probability and Distributions: Construction of a Probability Space

## Topic: Summary Statistics and Independence – Gaussian Distribution - Conjugacy and the Exponential Family - Change of Variables/Inverse Transform

This module delves into fundamental concepts in probability theory essential for machine learning. We'll explore how to summarize data using statistics, understand the crucial concept of independence, dive deep into the ubiquitous Gaussian distribution, and introduce the powerful ideas of conjugacy and the exponential family. Finally, we'll learn how to transform random variables.

---

### 1. Summary Statistics and Independence

Understanding the characteristics of data is paramount in machine learning. Summary statistics provide concise descriptions, while the concept of independence simplifies complex probabilistic relationships.

#### 1.1. Summary Statistics

Summary statistics help us understand the central tendency, spread, and shape of a dataset.

**Key Concepts & Definitions:**

*   **Mean ($\mu$ or $\bar{x}$):** The average value of a set of numbers.
    *   For a population: $\mu = \frac{1}{N} \sum_{i=1}^{N} x_i$
    *   For a sample: $\bar{x} = \frac{1}{n} \sum_{i=1}^{n} x_i$
    *   *Relevance:* Central tendency. Useful for understanding the expected value of a random variable. (Relates to CO3)
*   **Median:** The middle value in a sorted dataset. If the number of data points is even, it's the average of the two middle values.
    *   *Relevance:* Robust to outliers, provides another measure of central tendency.
*   **Variance ($\sigma^2$ or $s^2$):** A measure of how spread out the data is from its mean.
    *   For a population: $\sigma^2 = \frac{1}{N} \sum_{i=1}^{N} (x_i - \mu)^2$
    *   For a sample: $s^2 = \frac{1}{n-1} \sum_{i=1}^{n} (x_i - \bar{x})^2$ (using $n-1$ for unbiased estimation)
    *   *Relevance:* Quantifies the dispersion of data. Essential for understanding model uncertainty. (Relates to CO3)
*   **Standard Deviation ($\sigma$ or $s$):** The square root of the variance.
    *   *Relevance:* Same units as the data, easier to interpret than variance.
*   **Covariance (Cov(X, Y)):** A measure of how two random variables change together.
    *   $\text{Cov}(X, Y) = E[(X - E[X])(Y - E[Y])]$
    *   *Relevance:* Indicates the direction of the linear relationship between two variables. (Relates to CO3)
*   **Correlation ($\rho$):** The standardized version of covariance, ranging from -1 to 1.
    *   $\rho(X, Y) = \frac{\text{Cov}(X, Y)}{\sigma_X \sigma_Y}$
    *   *Relevance:* Measures the strength and direction of the linear relationship.

**Example:**
Consider the dataset: {2, 3, 3, 4, 5, 5, 6, 7}.
*   Mean: (2+3+3+4+5+5+6+7)/8 = 35/8 = 4.375
*   Median: (4+5)/2 = 4.5
*   Variance (sample):
    *   Deviations from mean: {-2.375, -1.375, -1.375, -0.375, 0.625, 0.625, 1.625, 2.625}
    *   Squared deviations: {5.64, 1.89, 1.89, 0.14, 0.39, 0.39, 2.64, 6.89}
    *   Sum of squared deviations: 19.97
    *   Variance: 19.97 / (8-1) = 19.97 / 7 ≈ 2.85

#### 1.2. Independence

Two events or random variables are independent if the occurrence of one does not affect the probability of the other.

**Key Concepts & Definitions:**

*   **Independence of Events (A, B):**
    *   $P(A \cap B) = P(A)P(B)$
*   **Independence of Random Variables (X, Y):**
    *   $P(X \le x, Y \le y) = P(X \le x)P(Y \le y)$ for all $x, y$.
    *   Equivalently, $f_{X,Y}(x,y) = f_X(x)f_Y(y)$ for probability density functions.
    *   If X and Y are independent, then $E[XY] = E[X]E[Y]$. This implies $\text{Cov}(X, Y) = 0$.
    *   *Important Note:* $\text{Cov}(X, Y) = 0$ does *not* imply independence. It only means there's no *linear* relationship.
*   **Mutual Independence:** For a set of random variables $X_1, X_2, ..., X_n$, they are mutually independent if the joint probability of any subset of them is the product of their marginal probabilities.
    *   $P(X_{i_1} \le x_{i_1}, ..., X_{i_k} \le x_{i_k}) = P(X_{i_1} \le x_{i_1}) \cdots P(X_{i_k} \le x_{i_k})$ for any subset $\{i_1, ..., i_k\}$.

**Example:**
Tossing a fair coin twice. Let $X_1$ be the outcome of the first toss (H=1, T=0) and $X_2$ be the outcome of the second toss.
*   $P(X_1=1) = 0.5$, $P(X_1=0) = 0.5$
*   $P(X_2=1) = 0.5$, $P(X_2=0) = 0.5$
*   $P(X_1=1, X_2=1) = P(\text{HH}) = 0.25$
*   $P(X_1=1)P(X_2=1) = 0.5 \times 0.5 = 0.25$. Since $P(X_1=1, X_2=1) = P(X_1=1)P(X_2=1)$, the events are independent.

**Practice Question 1:**
Given two random variables $X$ and $Y$, if $P(X=1) = 0.4$, $P(Y=1) = 0.7$, and $P(X=1, Y=1) = 0.3$, are $X$ and $Y$ independent?
**Answer:**
$P(X=1)P(Y=1) = 0.4 \times 0.7 = 0.28$.
Since $P(X=1, Y=1) = 0.3 \neq 0.28$, $X$ and $Y$ are not independent.

**Highlight:** Independence is a strong assumption that simplifies model building. Always verify it. Correlation of zero does not imply independence.

---

### 2. Gaussian Distribution (Normal Distribution)

The Gaussian distribution is perhaps the most important probability distribution in machine learning and statistics due to its mathematical properties and the Central Limit Theorem.

**Key Concepts & Definitions:**

*   **Probability Density Function (PDF):** For a univariate Gaussian distribution with mean $\mu$ and variance $\sigma^2$:
    $$ p(x | \mu, \sigma^2) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(x - \mu)^2}{2\sigma^2}\right) $$
    *   The term $\frac{1}{\sqrt{2\pi\sigma^2}}$ is the normalization constant, ensuring that the integral of the PDF over all possible values of $x$ is 1.
*   **Parameters:**
    *   Mean ($\mu$): Determines the location of the peak.
    *   Variance ($\sigma^2$): Determines the spread or width of the distribution.
*   **Standard Normal Distribution:** A Gaussian distribution with $\mu=0$ and $\sigma^2=1$. Denoted as $\mathcal{N}(0, 1)$.
*   **Multivariate Gaussian Distribution:** For a $D$-dimensional vector $\mathbf{x}$, with mean vector $\boldsymbol{\mu}$ and covariance matrix $\boldsymbol{\Sigma}$:
    $$ p(\mathbf{x} | \boldsymbol{\mu}, \boldsymbol{\Sigma}) = \frac{1}{\sqrt{(2\pi)^D |\boldsymbol{\Sigma}|}} \exp\left(-\frac{1}{2}(\mathbf{x} - \boldsymbol{\mu})^T \boldsymbol{\Sigma}^{-1} (\mathbf{x} - \boldsymbol{\mu})\right) $$
    *   $|\boldsymbol{\Sigma}|$ is the determinant of the covariance matrix.
    *   $\boldsymbol{\Sigma}^{-1}$ is the inverse of the covariance matrix (also known as the precision matrix).
    *   *Relevance:* Crucial for modeling data with multiple correlated features. (Relates to CO3)
*   **Properties:**
    *   **Symmetry:** The PDF is symmetric around the mean.
    *   **Bell Shape:** The characteristic bell shape.
    *   **Central Limit Theorem (CLT):** The sum (or average) of a large number of independent and identically distributed (i.i.d.) random variables will be approximately normally distributed, regardless of the original distribution. This is why Gaussian distributions are so prevalent.
    *   **Maximum Entropy:** Among all distributions with a fixed mean and variance, the Gaussian distribution has the maximum entropy. This means it's the "least informative" distribution given these constraints, making it a good default choice.
    *   **Linear Combinations:** A linear combination of independent Gaussian random variables is also Gaussian. If $X \sim \mathcal{N}(\mu_X, \sigma_X^2)$ and $Y \sim \mathcal{N}(\mu_Y, \sigma_Y^2)$ are independent, then $aX + bY \sim \mathcal{N}(a\mu_X + b\mu_Y, a^2\sigma_X^2 + b^2\sigma_Y^2)$.

**Example:**
*   **Univariate:** Heights of adult humans are often approximated by a Gaussian distribution.
*   **Multivariate:** Consider modeling the relationship between a person's height and weight. A bivariate Gaussian distribution could be used, with a mean vector $(\mu_{\text{height}}, \mu_{\text{weight}})$ and a covariance matrix $\boldsymbol{\Sigma} = \begin{pmatrix} \sigma^2_{\text{height}} & \text{Cov}(\text{height, weight}) \\ \text{Cov}(\text{height, weight}) & \sigma^2_{\text{weight}} \end{pmatrix}$. The covariance term captures how height and weight tend to vary together. (Relates to CO3)

**Practice Question 2:**
If $X \sim \mathcal{N}(2, 4)$ and $Y \sim \mathcal{N}(3, 9)$ are independent, what is the distribution of $Z = X - 2Y$?
**Answer:**
$Z = 1 \cdot X + (-2) \cdot Y$.
Mean of $Z$: $E[Z] = E[X] - 2E[Y] = 2 - 2(3) = 2 - 6 = -4$.
Variance of $Z$: $\text{Var}(Z) = \text{Var}(X) + (-2)^2\text{Var}(Y) = 4 + 4(9) = 4 + 36 = 40$.
Therefore, $Z \sim \mathcal{N}(-4, 40)$.

**Highlight:** The Gaussian distribution is characterized by its mean and covariance matrix. Its prevalence is due to the CLT and its mathematical tractability.

---

### 3. Conjugacy and the Exponential Family

These concepts are crucial for Bayesian inference, where they simplify posterior distribution calculations.

#### 3.1. The Exponential Family

Many common probability distributions can be expressed in a unified form known as the exponential family.

**Key Concepts & Definitions:**

*   **General Form:** A probability distribution $p(x | \boldsymbol{\theta})$ belongs to the exponential family if its PDF or PMF can be written as:
    $$ p(x | \boldsymbol{\theta}) = h(x) \exp(\boldsymbol{\eta}(\boldsymbol{\theta})^T \mathbf{T}(x) - A(\boldsymbol{\eta}(\boldsymbol{\theta}))) $$
    where:
    *   $x$: the random variable (or vector $\mathbf{x}$)
    *   $\boldsymbol{\theta}$: the parameters of the distribution (e.g., mean, variance)
    *   $h(x)$: a function of $x$ (the base measure)
    *   $\boldsymbol{\eta}(\boldsymbol{\theta})$: the natural parameters (or sufficient statistics in their functional form)
    *   $\mathbf{T}(x)$: the sufficient statistics (functions of $x$)
    *   $A(\boldsymbol{\eta}(\boldsymbol{\theta}))$: the log-partition function (or cumulant generating function)
*   **Sufficient Statistics:** A statistic $T(x)$ is sufficient for a parameter $\theta$ if the conditional distribution of the data $x$ given $T(x)$ does not depend on $\theta$. In the exponential family form, $\mathbf{T}(x)$ are the sufficient statistics.
*   **Examples:**
    *   **Bernoulli:** $p(x|\pi) = \pi^x (1-\pi)^{1-x} = (1-\pi) \exp(x \log(\frac{\pi}{1-\pi}))$.
        *   Here, $h(x)=1$, $\boldsymbol{\eta}(\pi) = \log(\frac{\pi}{1-\pi})$, $\mathbf{T}(x) = x$, $A(\boldsymbol{\eta}) = -\log(1-\pi)$.
    *   **Gaussian (univariate):** $p(x|\mu, \sigma^2) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{1}{2\sigma^2}x^2 + \frac{\mu}{\sigma^2}x - \frac{\mu^2}{2\sigma^2}\right)$.
        *   $h(x) = \frac{1}{\sqrt{2\pi}}$, $\boldsymbol{\eta} = (\frac{\mu}{\sigma^2}, -\frac{1}{2\sigma^2})$, $\mathbf{T}(x) = (x, x^2)$, $A(\boldsymbol{\eta}) = \frac{\mu^2}{2\sigma^2} - \log(\sigma) = \frac{\eta_1^2}{2\eta_2} + \log(-\frac{1}{2\eta_2})$. (Note: Can be written in various ways, this is one common form).
    *   **Poisson:** $p(x|\lambda) = \frac{\lambda^x e^{-\lambda}}{x!} = \frac{1}{x!} \exp(x \log(\lambda) - \lambda)$.
        *   $h(x) = \frac{1}{x!}$, $\boldsymbol{\eta}(\lambda) = \log(\lambda)$, $\mathbf{T}(x) = x$, $A(\boldsymbol{\eta}) = \lambda = e^{\boldsymbol{\eta}}$.
*   **Why it's important:**
    *   **Parameter Estimation:** Maximum Likelihood Estimation (MLE) for parameters of exponential family distributions often has closed-form solutions related to the sufficient statistics.
    *   **Bayesian Inference:** If the likelihood is from the exponential family, choosing a prior from a "conjugate" family results in a posterior distribution that is also in the exponential family, making calculations tractable.

**Practice Question 3:**
Show that the Bernoulli distribution belongs to the exponential family and identify its sufficient statistic.
**Answer:**
The Bernoulli PMF is $p(x|\pi) = \pi^x (1-\pi)^{1-x}$.
We can rewrite this as:
$p(x|\pi) = (1-\pi) \left(\frac{\pi}{1-\pi}\right)^x = (1-\pi) \exp\left(x \log\left(\frac{\pi}{1-\pi}\right)\right)$.
This matches the form $h(x) \exp(\boldsymbol{\eta}(\boldsymbol{\theta})^T \mathbf{T}(x) - A(\boldsymbol{\eta}(\boldsymbol{\theta})))$ with:
*   $h(x) = 1$
*   $\boldsymbol{\eta}(\pi) = \log\left(\frac{\pi}{1-\pi}\right)$
*   $\mathbf{T}(x) = x$
*   $A(\boldsymbol{\eta}(\pi)) = -\log(1-\pi)$
The sufficient statistic is $T(x) = x$.

**Highlight:** The exponential family provides a unifying structure for many common distributions and is key to understanding conjugate priors.

#### 3.2. Conjugacy

Conjugacy is a relationship between a likelihood function and a prior distribution for a parameter.

**Key Concepts & Definitions:**

*   **Conjugate Prior:** A prior distribution $p(\boldsymbol{\theta})$ is said to be conjugate to a likelihood function $p(D | \boldsymbol{\theta})$ if the posterior distribution $p(\boldsymbol{\theta} | D)$ is in the same distributional family as the prior $p(\boldsymbol{\theta})$.
*   **Bayes' Theorem:** $p(\boldsymbol{\theta} | D) = \frac{p(D | \boldsymbol{\theta}) p(\boldsymbol{\theta})}{p(D)}$
    *   Posterior $\propto$ Likelihood $\times$ Prior
*   **Why Conjugacy is Useful:**
    *   **Computational Tractability:** Posterior calculations are simplified. Instead of complex integration, updating the prior to the posterior often involves updating hyperparameters.
    *   **Interpretability:** The updated posterior is easy to understand as it belongs to a familiar family.
*   **Common Conjugate Pairs:**
    *   **Likelihood: Bernoulli/Binomial, Prior: Beta, Posterior: Beta.**
        *   If $p(\theta) \sim \text{Beta}(\alpha, \beta)$ and $p(x|\theta) \sim \text{Bernoulli}(\theta)$, then $p(\theta|x) \sim \text{Beta}(\alpha+x, \beta+1-x)$.
        *   If we observe $n$ trials with $k$ successes, $p(\theta|\text{data}) \sim \text{Beta}(\alpha+k, \beta+n-k)$.
    *   **Likelihood: Gaussian (known variance $\sigma^2$), Prior: Gaussian, Posterior: Gaussian.**
        *   If $p(\mu) \sim \mathcal{N}(\mu_0, \sigma_0^2)$ and $p(x|\mu) \sim \mathcal{N}(x|\mu, \sigma^2)$ (i.i.d. data), then $p(\mu|x) \sim \mathcal{N}(\mu_n, \sigma_n^2)$, where $\mu_n$ and $\sigma_n^2$ are updated values.
    *   **Likelihood: Poisson, Prior: Gamma, Posterior: Gamma.**
    *   **Likelihood: Dirichlet, Prior: Dirichlet, Posterior: Dirichlet.** (Multivariate generalization of Beta)

**Example:**
Suppose we want to estimate the probability of heads $\theta$ for a biased coin.
*   **Prior:** We believe $\theta$ is likely around 0.5, but we're not very certain. We can choose a Beta prior: $p(\theta) \sim \text{Beta}(2, 2)$. This prior has a mean of $2/(2+2) = 0.5$ and is bell-shaped.
*   **Likelihood:** The coin flips are Bernoulli trials, so $p(\text{data}|\theta) \sim \text{Bernoulli}(\theta)$.
*   **Data:** We flip the coin 10 times and get 7 heads (H) and 3 tails (T).
*   **Posterior:** Using conjugacy, the posterior distribution for $\theta$ is also a Beta distribution:
    $p(\theta|\text{data}) \sim \text{Beta}(\alpha_{\text{prior}} + \text{num_heads}, \beta_{\text{prior}} + \text{num_tails})$
    $p(\theta|\text{data}) \sim \text{Beta}(2 + 7, 2 + 3) = \text{Beta}(9, 5)$.
    The posterior mean is $9/(9+5) = 9/14 \approx 0.64$. Our estimate of $\theta$ has shifted towards the observed data.

**Practice Question 4:**
If the prior for the parameter $\lambda$ of a Poisson distribution is $\text{Gamma}(k, \theta)$ and we observe $n$ data points $x_1, \ldots, x_n$, what is the family of the posterior distribution?
**Answer:**
The Gamma distribution is conjugate to the Poisson likelihood. Therefore, the posterior distribution $p(\lambda | x_1, \ldots, x_n)$ will also be a Gamma distribution.

**Highlight:** Conjugacy is a powerful tool for Bayesian inference, allowing for analytical updates of posterior distributions. Many common machine learning models are built using distributions from the exponential family with conjugate priors.

---

### 4. Change of Variables / Inverse Transform Sampling

This technique allows us to derive the distribution of a transformed random variable and is also used for generating random numbers from arbitrary distributions.

#### 4.1. Change of Variables

If we have a random variable $X$ with a known distribution and a function $Y = g(X)$, we can find the distribution of $Y$.

**Key Concepts & Definitions:**

*   **Monotonically Increasing Function:** If $Y = g(X)$ is strictly monotonically increasing, then $X = g^{-1}(Y)$.
    *   The CDF of $Y$ is $F_Y(y) = P(Y \le y) = P(g(X) \le y) = P(X \le g^{-1}(y)) = F_X(g^{-1}(y))$.
    *   The PDF of $Y$ is $f_Y(y) = \frac{d}{dy} F_Y(y) = \frac{d}{dy} F_X(g^{-1}(y))$.
    *   Using the chain rule: $f_Y(y) = f_X(g^{-1}(y)) \cdot \frac{d}{dy} g^{-1}(y)$.
    *   Since $\frac{d}{dy} g^{-1}(y) = \frac{1}{g'(g^{-1}(y))}$, we have $f_Y(y) = f_X(x) \left|\frac{dx}{dy}\right|$.

*   **General Case (Monotonic Function):**
    $$ f_Y(y) = f_X(x) \left|\frac{dx}{dy}\right| $$
    where $x = g^{-1}(y)$.

*   **Multivariate Case:** For a transformation $\mathbf{y} = \mathbf{g}(\mathbf{x})$, where $\mathbf{x}$ and $\mathbf{y}$ are $D$-dimensional vectors:
    $$ f_{\mathbf{Y}}(\mathbf{y}) = f_{\mathbf{X}}(\mathbf{x}) \left|\det\left(\frac{\partial \mathbf{x}}{\partial \mathbf{y}^T}\right)\right| $$
    where $\frac{\partial \mathbf{x}}{\partial \mathbf{y}^T}$ is the Jacobian matrix of the inverse transformation $\mathbf{x} = \mathbf{g}^{-1}(\mathbf{y})$, and $|\det(\cdot)|$ denotes the absolute value of the determinant.

**Example:**
Let $X \sim \text{Uniform}(0, 1)$, so $f_X(x) = 1$ for $0 < x < 1$ and 0 otherwise.
Let $Y = -\log(X)$.
*   The function $g(x) = -\log(x)$ is strictly monotonically decreasing for $x \in (0, 1)$.
*   The inverse function is $x = g^{-1}(y) = e^{-y}$.
*   The derivative of the inverse function is $\frac{dx}{dy} = -e^{-y}$.
*   The absolute value is $\left|\frac{dx}{dy}\right| = |-e^{-y}| = e^{-y}$.
*   The range of $y$: As $x \to 0^+$, $y \to \infty$. As $x \to 1^-$, $y \to 0^-$. So $y \in (0, \infty)$.
*   The PDF of $Y$ is:
    $f_Y(y) = f_X(e^{-y}) \cdot e^{-y}$
    Since $0 < e^{-y} < 1$ for $y > 0$, $f_X(e^{-y}) = 1$.
    $f_Y(y) = 1 \cdot e^{-y} = e^{-y}$ for $y > 0$.
*   This is the PDF of an Exponential distribution with rate parameter $\lambda=1$.

#### 4.2. Inverse Transform Sampling

This is a method for generating random numbers from any probability distribution using a sequence of uniform random numbers.

**Algorithm:**
1.  Given a desired probability distribution with CDF $F_X(x)$.
2.  Generate a random number $u$ from a standard Uniform distribution, $u \sim \text{Uniform}(0, 1)$.
3.  Compute $x = F_X^{-1}(u)$. The resulting $x$ will be a random sample from the distribution with CDF $F_X$.

**Why it works:**
We want to show that $X = F_X^{-1}(U)$ has the CDF $F_X$. Let $F_X(x)$ be the CDF of the target distribution. Let $U \sim \text{Uniform}(0,1)$.
We want to find the CDF of $X = F_X^{-1}(U)$.
$P(X \le x) = P(F_X^{-1}(U) \le x)$
Since $F_X$ is non-decreasing, $F_X^{-1}$ is also non-decreasing (assuming it's well-defined). Applying $F_X$ to both sides:
$P(U \le F_X(x))$
Since $U \sim \text{Uniform}(0, 1)$, its CDF is $F_U(u) = u$ for $u \in [0, 1]$.
So, $P(U \le F_X(x)) = F_U(F_X(x)) = F_X(x)$.
This shows that $X$ has the desired CDF $F_X$.

**Example (using the previous example):**
Generate random samples from an Exponential distribution with rate $\lambda=1$ using a uniform generator.
*   The CDF of the Exponential distribution is $F_X(x) = 1 - e^{-\lambda x}$. For $\lambda=1$, $F_X(x) = 1 - e^{-x}$.
*   To find the inverse CDF, set $u = 1 - e^{-x}$ and solve for $x$:
    $1 - u = e^{-x}$
    $\log(1 - u) = -x$
    $x = -\log(1 - u)$
*   Since $u \sim \text{Uniform}(0, 1)$, then $1-u$ is also $\sim \text{Uniform}(0, 1)$. So we can also use $x = -\log(u)$.
*   **Algorithm:**
    1.  Generate $u \sim \text{Uniform}(0, 1)$.
    2.  Compute $x = -\log(u)$. This $x$ is an Exponential(1) random variable.

**Practice Question 5:**
Let $X \sim \text{Exponential}(\lambda)$. Using inverse transform sampling, derive a method to generate random samples from $X$ using a uniform random number generator.
**Answer:**
The CDF of the Exponential distribution is $F_X(x) = 1 - e^{-\lambda x}$ for $x \ge 0$.
To find the inverse CDF, set $u = F_X(x)$:
$u = 1 - e^{-\lambda x}$
$1 - u = e^{-\lambda x}$
$\log(1 - u) = -\lambda x$
$x = -\frac{1}{\lambda} \log(1 - u)$
Since $u \sim \text{Uniform}(0, 1)$, $1-u$ is also uniformly distributed between 0 and 1. Thus, we can use $x = -\frac{1}{\lambda} \log(u)$ as the sampling method.

**Highlight:** Change of variables allows us to derive the distribution of transformed random variables. Inverse transform sampling is a fundamental technique for generating random variables from complex distributions using only a standard uniform generator.

---

### 5. Alignment with Course Outcomes

*   **CO1 (Linear Algebra):** While not directly covered in this module's core topics, understanding matrix operations (like the inverse and determinant of the covariance matrix in multivariate Gaussian) is implicitly assumed. Textbooks like Strang's "Linear Algebra and Its Applications" and Boyd & Vandenberghe's "Introduction to Applied Linear Algebra" provide foundational knowledge.
*   **CO2 (Calculus):** Derivatives are used extensively in deriving PDFs from CDFs (Change of Variables) and in understanding the gradient of distributions. Partial derivatives are fundamental for the multivariate Gaussian. Boyd & Vandenberghe's "Convex Optimization" and Deisenroth et al.'s book cover these.
*   **CO3 (Probability):** This module is entirely dedicated to probability concepts: summary statistics, independence, Gaussian distributions, exponential family, conjugacy, and change of variables. Deisenroth et al.'s "Mathematics for Machine Learning" and Bishop's "Pattern Recognition and Machine Learning" are excellent references.
*   **CO4 (Optimization):** While this module focuses on constructing probability spaces, the distributions learned (especially Gaussian) are often used as components in optimization problems within machine learning models (e.g., in regularization terms or likelihood functions).

---

### 6. Summary and Key Takeaways

*   **Summary Statistics:** Mean, median, variance, standard deviation, covariance, and correlation are essential for describing data.
*   **Independence:** Crucial for simplifying probabilistic models. Remember that zero correlation does not imply independence.
*   **Gaussian Distribution:** A cornerstone of ML due to the CLT, characterized by its mean and covariance matrix.
*   **Exponential Family:** A unifying structure for many distributions, important for understanding sufficient statistics and conjugacy.
*   **Conjugacy:** Simplifies Bayesian inference by ensuring posterior distributions belong to the same family as the prior.
*   **Change of Variables:** A technique to derive the distribution of transformed random variables using the Jacobian determinant.
*   **Inverse Transform Sampling:** A powerful method to generate random samples from any distribution using uniform random numbers and the inverse CDF.

---

### 7. Practice Questions (Comprehensive)

**Question 1:**
Consider a random variable $X$ with PDF $f_X(x) = 2x$ for $0 \le x \le 1$ and 0 otherwise. Let $Y = X^2$.
a) Find the CDF of $X$, $F_X(x)$.
b) Using inverse transform sampling, derive a method to generate samples from this distribution.
c) Find the PDF of $Y$ using the change of variables method.
d) Are $X$ and $Y$ independent? (Hint: Consider $E[XY]$ vs $E[X]E[Y]$).

**Answer:**
a) $F_X(x) = \int_0^x 2t dt = [t^2]_0^x = x^2$ for $0 \le x \le 1$.
b) We need to find $F_X^{-1}(u)$. Set $u = x^2$, so $x = \sqrt{u}$. Thus, $x = \sqrt{u}$ is the method.
c) $Y = X^2$. The function $g(x) = x^2$ is monotonically increasing for $x \in [0, 1]$.
The inverse function is $x = g^{-1}(y) = \sqrt{y}$.
The derivative of the inverse function is $\frac{dx}{dy} = \frac{1}{2\sqrt{y}}$.
The range of $y$: For $x \in [0, 1]$, $y = x^2 \in [0, 1]$.
The PDF of $Y$ is $f_Y(y) = f_X(\sqrt{y}) \cdot \left|\frac{dx}{dy}\right|$.
$f_Y(y) = 2\sqrt{y} \cdot \frac{1}{2\sqrt{y}} = 1$ for $0 \le y \le 1$.
So, $Y \sim \text{Uniform}(0, 1)$.
d) $E[X] = \int_0^1 x (2x) dx = \int_0^1 2x^2 dx = [\frac{2x^3}{3}]_0^1 = \frac{2}{3}$.
$E[Y] = E[X^2] = \int_0^1 x^2 (2x) dx = \int_0^1 2x^3 dx = [\frac{2x^4}{4}]_0^1 = \frac{1}{2}$.
$E[XY] = E[X \cdot X^2] = E[X^3] = \int_0^1 x^3 (2x) dx = \int_0^1 2x^4 dx = [\frac{2x^5}{5}]_0^1 = \frac{2}{5}$.
$E[X]E[Y] = \frac{2}{3} \cdot \frac{1}{2} = \frac{1}{3}$.
Since $E[XY] = \frac{2}{5} \neq \frac{1}{3} = E[X]E[Y]$, $X$ and $Y$ are not independent.

**Question 2:**
Suppose we are modeling the rate of arrivals at a service desk, and we assume the number of arrivals in a given hour follows a Poisson distribution with rate $\lambda$. We have a prior belief about $\lambda$ that is expressed by a Gamma distribution with parameters $k=2$ and $\theta=1$. After observing 5 arrivals in the first hour, what is the posterior distribution of $\lambda$?

**Answer:**
The likelihood is Poisson: $p(n|\lambda) = \frac{\lambda^n e^{-\lambda}}{n!}$.
The prior is Gamma: $p(\lambda) \propto \lambda^{k-1} e^{-\lambda/\theta}$. For $k=2, \theta=1$, $p(\lambda) \propto \lambda^{1} e^{-\lambda}$.
The posterior distribution is the product of the likelihood and the prior. The Gamma distribution is conjugate to the Poisson distribution.
The updated parameters for the posterior Gamma distribution are:
New shape parameter: $k' = k + \sum x_i = 2 + 5 = 7$.
New scale parameter: $\theta' = \frac{\theta}{1 + n\theta} = \frac{1}{1 + 1 \cdot 1} = \frac{1}{2}$.
Alternatively, using the rate parameterization for Gamma: $\text{Gamma}(\alpha, \beta)$, where PDF is $\frac{\beta^\alpha}{\Gamma(\alpha)} x^{\alpha-1} e^{-\beta x}$.
Original Gamma prior: $\text{Gamma}(k=2, \text{rate}=1/\theta=1)$.
Posterior is Gamma with:
New shape parameter: $\alpha' = \alpha + \sum x_i = 2 + 5 = 7$.
New rate parameter: $\beta' = \beta + n = 1 + 1 = 2$.
So, the posterior distribution of $\lambda$ is $\text{Gamma}(7, 2)$ (shape=7, rate=2).

---

This module lays essential groundwork for understanding statistical models in machine learning. The concepts of Gaussian distributions, exponential families, and conjugacy are fundamental to many algorithms, from linear regression to Bayesian neural networks. Mastering these will greatly enhance your ability to grasp more advanced topics.
