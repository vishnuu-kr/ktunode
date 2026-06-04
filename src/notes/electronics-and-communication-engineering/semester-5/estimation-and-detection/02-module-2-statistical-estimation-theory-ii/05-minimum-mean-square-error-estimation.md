---
title: "minimum mean square error estimation"
subject: "ESTIMATION AND DETECTION"
module: "Module 2: Statistical Estimation Theory II"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780febd1"
status: "completed"
scrapedAt: "2026-05-23T17:56:47.411Z"
---
# ESTIMATION AND DETECTION: Module 2 - Statistical Estimation Theory II

## Topic: Minimum Mean Square Error (MMSE) Estimation

---

### **1. Introduction to MMSE Estimation**

**Objective:** To estimate an unknown parameter $\theta$ from observed data $\mathbf{x}$ in a way that minimizes the average squared error between the true parameter and its estimate. This is a fundamental criterion in estimation theory.

**(Relevant to CO1: Summarize the fundamentals of statistical estimation principles)**

**Key Concepts:**

*   **Estimation Problem:** Given observations $\mathbf{x}$ that depend on an unknown parameter $\theta$, we want to find an estimate $\hat{\theta}(\mathbf{x})$ of $\theta$.
*   **Mean Squared Error (MSE):** The average of the squared difference between the true parameter and its estimate. For a scalar parameter $\theta$ and an estimator $\hat{\theta}(\mathbf{x})$, the MSE is defined as:
    $MSE(\hat{\theta}) = E[(\theta - \hat{\theta}(\mathbf{x}))^2]$
*   **Estimator:** A function of the observed data $\mathbf{x}$ that provides an estimate of the unknown parameter $\theta$.
*   **Bias:** An estimator $\hat{\theta}(\mathbf{x})$ is unbiased if its expected value is equal to the true parameter: $E[\hat{\theta}(\mathbf{x})] = \theta$. Bias is defined as $b(\hat{\theta}) = E[\hat{\theta}(\mathbf{x})] - \theta$.
*   **Variance:** The spread of the estimator's values around its mean: $Var(\hat{\theta}) = E[(\hat{\theta}(\mathbf{x}) - E[\hat{\theta}(\mathbf{x})])^2]$.

**Relationship between MSE, Bias, and Variance:**
The MSE can be decomposed into the sum of the squared bias and the variance:
$MSE(\hat{\theta}) = Var(\hat{\theta}) + (b(\hat{\theta}))^2$
$MSE(\hat{\theta}) = E[(\theta - \hat{\theta}(\mathbf{x}))^2]$
$MSE(\hat{\theta}) = E[(\theta - E[\hat{\theta}]) + (E[\hat{\theta}] - \hat{\theta})]^2$
$MSE(\hat{\theta}) = E[(\theta - E[\hat{\theta}])^2] + E[(E[\hat{\theta}] - \hat{\theta})^2] + 2 E[(\theta - E[\hat{\theta}])(E[\hat{\theta}] - \hat{\theta})]$
Since $E[\theta - E[\hat{\theta}]] = \theta - E[\hat{\theta}]$ and $E[E[\hat{\theta}] - \hat{\theta}] = 0$:
$MSE(\hat{\theta}) = E[(\theta - E[\hat{\theta}])^2] + E[(\hat{\theta} - E[\hat{\theta}])^2]$
$MSE(\hat{\theta}) = (E[\theta] - E[\hat{\theta}])^2 + Var(\hat{\theta})$
$MSE(\hat{\theta}) = (b(\hat{\theta}))^2 + Var(\hat{\theta})$

**The MMSE Estimator:**
The MMSE estimator, denoted as $\hat{\theta}_{MMSE}(\mathbf{x})$, is the estimator that minimizes this MSE.
$\hat{\theta}_{MMSE}(\mathbf{x}) = \arg \min_{\hat{\theta}(\mathbf{x})} E[(\theta - \hat{\theta}(\mathbf{x}))^2]$

**(Kay, Vol I, Chapter 3: Maximum Likelihood Estimation and Related Topics, Section 3.4: Minimum Mean Squared Error Estimation)**

---

### **2. Derivation of the MMSE Estimator**

The derivation of the MMSE estimator depends on whether the parameter $\theta$ is treated as deterministic or random.

#### **2.1. MMSE Estimation for a Deterministic Parameter**

If $\theta$ is a deterministic, unknown parameter, then $E[\theta] = \theta$. The MSE expression becomes:
$MSE(\hat{\theta}) = E[(\theta - \hat{\theta}(\mathbf{x}))^2] = \int (\theta - \hat{\theta}(\mathbf{x}))^2 p(\mathbf{x}|\theta) d\mathbf{x}$

This problem is more complex than it appears because we don't know $\theta$ to optimize over. If we consider $\theta$ as fixed, the problem becomes finding a function $\hat{\theta}(\mathbf{x})$ that minimizes the MSE. Without any prior information about $\theta$, this is generally difficult. However, if we assume a parametric form for the data distribution, we can proceed.

**Key Insight:** When $\theta$ is deterministic, the MMSE estimator is generally *not* analytically derivable without further assumptions or reformulations. Often, the goal is to find an estimator that performs well over a range of possible $\theta$ values.

**(Kay, Vol I, Section 3.4 often discusses the Bayesian approach which is more suited for MMSE)**

#### **2.2. MMSE Estimation for a Random Parameter (Bayesian Approach)**

This is the more common scenario where MMSE estimation is applied. Here, $\theta$ is treated as a random variable with a prior probability distribution $p(\theta)$. The observed data $\mathbf{x}$ is assumed to be generated according to a conditional probability distribution $p(\mathbf{x}|\theta)$.

The goal is to find an estimator $\hat{\theta}(\mathbf{x})$ that minimizes the MSE, averaged over both the distribution of $\theta$ and the distribution of $\mathbf{x}$ given $\theta$. The joint distribution is $p(\mathbf{x}, \theta) = p(\mathbf{x}|\theta)p(\theta)$.

The MSE is given by:
$MSE(\hat{\theta}) = E[(\theta - \hat{\theta}(\mathbf{x}))^2] = \iint (\theta - \hat{\theta}(\mathbf{x}))^2 p(\mathbf{x}, \theta) d\theta d\mathbf{x}$

We can rewrite this by conditioning on $\mathbf{x}$:
$MSE(\hat{\theta}) = \int \left[ \int (\theta - \hat{\theta}(\mathbf{x}))^2 p(\theta|\mathbf{x}) d\theta \right] p(\mathbf{x}) d\mathbf{x}$

To minimize the MSE, we need to minimize the inner integral for each possible value of $\mathbf{x}$. The inner integral is the MSE *given* $\mathbf{x}$:
$MSE(\hat{\theta}|\mathbf{x}) = \int (\theta - \hat{\theta}(\mathbf{x}))^2 p(\theta|\mathbf{x}) d\theta$

This inner integral is minimized when $\hat{\theta}(\mathbf{x})$ is the conditional mean of $\theta$ given $\mathbf{x}$.
$\hat{\theta}_{MMSE}(\mathbf{x}) = E[\theta | \mathbf{x}] = \int \theta p(\theta|\mathbf{x}) d\theta$

This is a crucial result: **The MMSE estimator is the conditional expectation of the parameter given the data.**

**How to calculate $p(\theta|\mathbf{x})$?**
We use Bayes' Theorem:
$p(\theta|\mathbf{x}) = \frac{p(\mathbf{x}|\theta)p(\theta)}{p(\mathbf{x})}$
where $p(\mathbf{x}) = \int p(\mathbf{x}|\theta)p(\theta) d\theta$ (the marginal distribution of $\mathbf{x}$).

**Summary of the MMSE Estimator Calculation:**
1.  **Define the Prior:** Specify the prior distribution $p(\theta)$ for the unknown parameter $\theta$.
2.  **Define the Likelihood:** Specify the likelihood function $p(\mathbf{x}|\theta)$ that describes how the data is generated.
3.  **Compute the Posterior:** Use Bayes' theorem to compute the posterior distribution $p(\theta|\mathbf{x})$.
4.  **Calculate the Conditional Expectation:** Compute the mean of the posterior distribution, which is the MMSE estimate:
    *   For a continuous parameter $\theta$: $\hat{\theta}_{MMSE}(\mathbf{x}) = \int \theta p(\theta|\mathbf{x}) d\theta$
    *   For a discrete parameter $\theta$: $\hat{\theta}_{MMSE}(\mathbf{x}) = \sum_{i} \theta_i p(\theta_i|\mathbf{x})$

**(Kay, Vol I, Section 3.4.1: The Bayesian Approach, Derivation of MMSE Estimator)**
**(Van Trees, Vol I, Chapter 3: Optimum Estimation: A General Approach, Section 3.2.1: The Bayesian Mean-Square Estimator)**

---

### **3. Relationship with other Estimators**

#### **3.1. MMSE vs. Maximum A Posteriori (MAP) Estimation**

*   **MMSE Estimator:** Minimizes the Mean Squared Error. It is the conditional expectation $E[\theta|\mathbf{x}]$.
*   **MAP Estimator:** Maximizes the posterior probability $p(\theta|\mathbf{x})$. It is the mode of the posterior distribution.
    $\hat{\theta}_{MAP}(\mathbf{x}) = \arg \max_{\theta} p(\theta|\mathbf{x})$

**When are they the same?**
The MMSE and MAP estimators are the same if and only if the posterior distribution $p(\theta|\mathbf{x})$ is symmetric about its mean. This happens when:
*   The prior distribution $p(\theta)$ and the likelihood $p(\mathbf{x}|\theta)$ belong to the same exponential family and lead to a symmetric posterior (e.g., Gaussian distributions).
*   The posterior distribution is unimodal and symmetric.

**Why choose one over the other?**
*   **MMSE:** Generally provides a better statistical performance in terms of MSE. It is often preferred when the cost of large errors is high.
*   **MAP:** Can be computationally simpler to find the mode than the mean, especially for discrete parameters or when analytical integration for the mean is difficult. It's often used when the parameter is discrete (e.g., classifying a signal).

**(Kay, Vol I, Section 3.4.1: Comparison with MAP Estimator)**
**(Hayes, Chapter 5: Bayesian Estimation, Section 5.3: MAP Estimation)**

#### **3.2. MMSE vs. Maximum Likelihood (ML) Estimation**

*   **MMSE Estimator:** Requires a prior distribution on $\theta$ (Bayesian approach).
*   **ML Estimator:** Does not require a prior. It maximizes the likelihood function $p(\mathbf{x}|\theta)$.
    $\hat{\theta}_{ML}(\mathbf{x}) = \arg \max_{\theta} p(\mathbf{x}|\theta)$

**When are they related?**
If the prior distribution $p(\theta)$ is uniform (non-informative), then maximizing $p(\theta|\mathbf{x}) \propto p(\mathbf{x}|\theta)p(\theta)$ is equivalent to maximizing $p(\mathbf{x}|\theta)$, making the MAP estimator equal to the ML estimator. In this specific case (uniform prior), the MMSE estimator can be related to ML.

However, in general, ML and MMSE are different. ML estimation assumes $\theta$ is fixed and unknown, while MMSE treats $\theta$ as random.

**(Kay, Vol I, Section 3.4.1: Comparison with ML Estimator)**

---

### **4. Examples of MMSE Estimation**

Let's illustrate with examples.

#### **Example 4.1: Estimating a DC Offset with Gaussian Noise**

**Problem:** We observe $x = A + w$, where $A$ is an unknown deterministic parameter (DC offset) and $w$ is Gaussian noise with $w \sim N(0, \sigma_w^2)$. We want to estimate $A$.

*   **If we treat $A$ as deterministic:** This is problematic for standard MMSE derivation without a prior.
*   **If we treat $A$ as random:** Assume $A$ is a random variable with a prior distribution $p(A) = N(m_A, \sigma_A^2)$. The likelihood is $p(x|A) = \frac{1}{\sqrt{2\pi\sigma_w^2}} \exp\left(-\frac{(x-A)^2}{2\sigma_w^2}\right)$.

**Steps:**

1.  **Prior:** $p(A) \sim N(m_A, \sigma_A^2)$
2.  **Likelihood:** $p(x|A) \sim N(A, \sigma_w^2)$
3.  **Posterior:** The product of a Gaussian prior and a Gaussian likelihood results in a Gaussian posterior. The form is $p(A|x) \propto p(x|A)p(A)$.
    $p(A|x) \propto \exp\left(-\frac{(x-A)^2}{2\sigma_w^2}\right) \exp\left(-\frac{(A-m_A)^2}{2\sigma_A^2}\right)$
    Completing the square in the exponent for $A$:
    $\frac{(A-x)^2}{\sigma_w^2} + \frac{(A-m_A)^2}{\sigma_A^2} = A^2 \left(\frac{1}{\sigma_w^2} + \frac{1}{\sigma_A^2}\right) - 2A \left(\frac{x}{\sigma_w^2} + \frac{m_A}{\sigma_A^2}\right) + \text{terms independent of A}$
    This is of the form $A^2 \frac{1}{\sigma_{new}^2} - 2A \frac{\mu_{new}}{\sigma_{new}^2}$, which corresponds to a Gaussian distribution $N(\mu_{new}, \sigma_{new}^2)$ with:
    $\frac{1}{\sigma_{new}^2} = \frac{1}{\sigma_w^2} + \frac{1}{\sigma_A^2} \implies \sigma_{new}^2 = \frac{\sigma_w^2 \sigma_A^2}{\sigma_w^2 + \sigma_A^2}$
    $\frac{\mu_{new}}{\sigma_{new}^2} = \frac{x}{\sigma_w^2} + \frac{m_A}{\sigma_A^2} \implies \mu_{new} = \sigma_{new}^2 \left(\frac{x}{\sigma_w^2} + \frac{m_A}{\sigma_A^2}\right)$
    $\mu_{new} = \frac{\sigma_w^2 \sigma_A^2}{\sigma_w^2 + \sigma_A^2} \left(\frac{x}{\sigma_w^2} + \frac{m_A}{\sigma_A^2}\right) = \frac{x \sigma_A^2 + m_A \sigma_w^2}{\sigma_w^2 + \sigma_A^2}$

4.  **MMSE Estimate:** The MMSE estimate is the mean of the posterior distribution:
    $\hat{A}_{MMSE}(x) = E[A|x] = \mu_{new} = \frac{\sigma_A^2}{\sigma_w^2 + \sigma_A^2} x + \frac{\sigma_w^2}{\sigma_w^2 + \sigma_A^2} m_A$

**Interpretation:**
The estimate is a weighted average of the observed data $x$ and the prior mean $m_A$. The weights depend on the variances.
*   If $\sigma_w^2 \ll \sigma_A^2$ (low noise), the estimate is close to $x$.
*   If $\sigma_w^2 \gg \sigma_A^2$ (high noise), the estimate is close to the prior mean $m_A$.

**Special Case: Uniform Prior**
If $p(A)$ is uniform over a large range, $\sigma_A^2 \to \infty$. Then:
$\hat{A}_{MMSE}(x) = \lim_{\sigma_A^2 \to \infty} \frac{\sigma_A^2}{\sigma_w^2 + \sigma_A^2} x + \frac{\sigma_w^2}{\sigma_w^2 + \sigma_A^2} m_A = 1 \cdot x + 0 \cdot m_A = x$.
In this case, the MMSE estimate becomes the observation itself, which is intuitively correct when we have no prior information about $A$ and the noise is the only source of uncertainty. This also aligns with the ML estimator for this problem.

**(Kay, Vol I, Example 3.10: Estimation of a DC Level)**

#### **Example 4.2: Estimating a Parameter in a Linear Model**

**Problem:** Observe $\mathbf{x} = \mathbf{h}s + \mathbf{w}$, where $s$ is a scalar parameter, $\mathbf{h}$ is a known vector, and $\mathbf{w}$ is additive noise with $E[\mathbf{w}] = \mathbf{0}$ and covariance $E[\mathbf{w}\mathbf{w}^T] = R_w$. Assume $s$ is a random variable with prior mean $m_s$ and variance $\sigma_s^2$.

**Steps:**

1.  **Prior:** $s \sim N(m_s, \sigma_s^2)$ (for simplicity, assuming Gaussian for analytical tractability).
2.  **Likelihood:** $p(\mathbf{x}|s) \sim N(\mathbf{h}s, R_w)$.
3.  **Posterior:** The posterior distribution $p(s|\mathbf{x})$ will also be Gaussian.
    $p(s|\mathbf{x}) \propto p(\mathbf{x}|s)p(s)$
    $p(s|\mathbf{x}) \propto \exp\left(-\frac{1}{2}(\mathbf{x}-\mathbf{h}s)^T R_w^{-1} (\mathbf{x}-\mathbf{h}s)\right) \exp\left(-\frac{(s-m_s)^2}{2\sigma_s^2}\right)$
    The exponent of $s$:
    $s^2 \left(\mathbf{h}^T R_w^{-1} \mathbf{h} + \frac{1}{\sigma_s^2}\right) - 2s \left(\mathbf{h}^T R_w^{-1} \mathbf{x} + \frac{m_s}{\sigma_s^2}\right) + \text{terms independent of } s$
    This corresponds to a Gaussian posterior $N(m_{s|x}, \sigma_{s|x}^2)$ with:
    $\frac{1}{\sigma_{s|x}^2} = \mathbf{h}^T R_w^{-1} \mathbf{h} + \frac{1}{\sigma_s^2}$
    $\frac{m_{s|x}}{\sigma_{s|x}^2} = \mathbf{h}^T R_w^{-1} \mathbf{x} + \frac{m_s}{\sigma_s^2}$

4.  **MMSE Estimate:** The MMSE estimate is the mean of the posterior:
    $\hat{s}_{MMSE}(\mathbf{x}) = m_{s|x} = \sigma_{s|x}^2 \left(\mathbf{h}^T R_w^{-1} \mathbf{x} + \frac{m_s}{\sigma_s^2}\right)$
    Substitute $\sigma_{s|x}^2$:
    $\hat{s}_{MMSE}(\mathbf{x}) = \frac{1}{\mathbf{h}^T R_w^{-1} \mathbf{h} + \frac{1}{\sigma_s^2}} \left(\mathbf{h}^T R_w^{-1} \mathbf{x} + \frac{m_s}{\sigma_s^2}\right)$
    $\hat{s}_{MMSE}(\mathbf{x}) = \frac{\sigma_s^2}{\sigma_s^2 (\mathbf{h}^T R_w^{-1} \mathbf{h}) + 1} \left(\mathbf{h}^T R_w^{-1} \mathbf{x} + \frac{m_s}{\sigma_s^2}\right)$
    $\hat{s}_{MMSE}(\mathbf{x}) = \frac{\sigma_s^2 \mathbf{h}^T R_w^{-1}}{\sigma_s^2 \mathbf{h}^T R_w^{-1} \mathbf{h} + 1} \mathbf{x} + \frac{m_s}{\sigma_s^2 \mathbf{h}^T R_w^{-1} \mathbf{h} + 1}$

**Connection to Wiener Filter:**
This result is closely related to the Wiener filter for estimating a signal from noisy observations. The Wiener filter is the MMSE linear estimator. If we restrict ourselves to linear estimators of the form $\hat{s} = K^T \mathbf{x}$, then $K_{opt} = (\mathbf{h}\mathbf{h}^T R_w^{-1} + \sigma_s^{-2} I)^{-1} \mathbf{h} R_w^{-1}$ for the linear MMSE estimator. Our Bayesian MMSE estimator is indeed linear in $\mathbf{x}$ if the prior is Gaussian.

**(Kay, Vol I, Chapter 4: Bayesian Estimation, Section 4.3: Bayes Estimation of a Scalar Parameter, Example 4.2: Estimation of a parameter in a linear model)**
**(Van Trees, Vol I, Chapter 3: Optimum Estimation: A General Approach, Section 3.2.2: Application to Linear Model)**

---

### **5. Properties of the MMSE Estimator**

*   **Optimal Performance:** Achieves the minimum possible MSE among all unbiased and biased estimators.
*   **Bayesian:** Inherently a Bayesian estimator, requiring a prior distribution on the parameter.
*   **Generally Biased:** While it minimizes MSE, it is not necessarily unbiased. The bias is often traded off for a lower variance.
*   **Non-linear:** The MMSE estimator is generally non-linear in the data, unless specific assumptions (like Gaussianity) are made.
*   **Uniqueness:** The MMSE estimator is unique.

**(Kay, Vol I, Section 3.4)**

---

### **6. Course Outcome Alignment**

*   **CO1: Summarize the fundamentals of statistical estimation principles used in various engineering problems.**
    *   MMSE estimation is a core principle. Understanding MSE, bias, variance, and the Bayesian approach to estimation directly supports this outcome. The examples illustrate how MMSE is applied in practical scenarios like signal estimation in noise.
*   **CO2: Apply different types of estimation algorithms in engineering applications.**
    *   This topic provides the theoretical foundation for applying MMSE estimation. Students can learn to derive and implement MMSE estimators for problems involving prior knowledge and uncertainty in parameters.
*   **CO3: Illustrate the fundamentals of statistical detection principles used in various engineering problems.**
    *   While this topic is about estimation, understanding the underlying probabilistic models ($p(\mathbf{x}|\theta)$) and the concept of posterior probabilities is foundational for detection, which deals with deciding between hypotheses based on observed data.

---

### **7. Important Points to Remember**

*   **MMSE minimizes $E[(\theta - \hat{\theta})^2]$.**
*   **The MMSE estimator is the conditional expectation $E[\theta|\mathbf{x}]$.**
*   **Requires a prior distribution $p(\theta)$ for the parameter.**
*   **Calculated by: $\hat{\theta}_{MMSE}(\mathbf{x}) = \int \theta p(\theta|\mathbf{x}) d\theta$.**
*   **Related to MAP when the posterior is symmetric about its mean.**
*   **Can be non-linear in the data.**
*   **Trades off bias for lower MSE.**

---

### **8. Practice Questions and Exercises**

**Question 1 (Conceptual):**
Explain the difference between the Mean Squared Error (MSE) and the bias of an estimator. How are they related? When would you prefer an estimator with a small bias but potentially larger variance, or vice-versa, in the context of minimizing MSE?

**Answer:**
*   **MSE** is the average squared difference between the true parameter and its estimate, representing the overall error.
*   **Bias** is the difference between the expected value of the estimator and the true parameter, representing a systematic error.
*   They are related by $MSE = Variance + Bias^2$.
*   You would prefer an estimator with smaller bias and larger variance if the bias is very large and its square dominates the MSE. Conversely, if variance is very large and bias is small, reducing bias might increase variance significantly, leading to higher MSE. The choice depends on the specific MSE performance.

**Question 2 (Mathematical - Gaussian Model):**
Suppose we observe $x = s + w$, where $s$ is an unknown parameter with a prior distribution $s \sim N(0, \sigma_s^2)$ and $w$ is Gaussian noise with $w \sim N(0, \sigma_w^2)$. Find the MMSE estimate of $s$.

**Answer:**
This is similar to Example 4.1 with $A=s$, $\mathbf{h}=1$, $m_A=0$.
The posterior distribution $p(s|x)$ will be Gaussian $N(m_{s|x}, \sigma_{s|x}^2)$ where:
$\frac{1}{\sigma_{s|x}^2} = \frac{1}{\sigma_w^2} + \frac{1}{\sigma_s^2} \implies \sigma_{s|x}^2 = \frac{\sigma_w^2 \sigma_s^2}{\sigma_w^2 + \sigma_s^2}$
$\frac{m_{s|x}}{\sigma_{s|x}^2} = \frac{x}{\sigma_w^2} + \frac{0}{\sigma_s^2} = \frac{x}{\sigma_w^2}$
$m_{s|x} = \sigma_{s|x}^2 \frac{x}{\sigma_w^2} = \frac{\sigma_w^2 \sigma_s^2}{\sigma_w^2 + \sigma_s^2} \frac{x}{\sigma_w^2} = \frac{\sigma_s^2}{\sigma_w^2 + \sigma_s^2} x$

So, $\hat{s}_{MMSE}(x) = \frac{\sigma_s^2}{\sigma_w^2 + \sigma_s^2} x$.

**Question 3 (Conceptual & Mathematical - Non-Gaussian):**
Consider a signal $s$ that can take one of two values, $s=0$ or $s=1$, each with prior probability $P(s=0) = P(s=1) = 0.5$. We observe $x$. The likelihood functions are $p(x|s=0) = 0.6$ for $0 \le x \le 1$ and $p(x|s=1) = 0.3$ for $0 \le x \le 1$. Assume $p(x|s) = 0$ outside this range.
a) Calculate the posterior probabilities $P(s=0|x)$ and $P(s=1|x)$.
b) Find the MMSE estimate of $s$ for a given observation $x$.
c) Find the MAP estimate of $s$ for a given observation $x$.
d) For what range of $x$ are the MMSE and MAP estimates the same?

**Answer:**
a) Using Bayes' Theorem:
$P(s=0|x) = \frac{p(x|s=0)P(s=0)}{p(x)}$
$P(s=1|x) = \frac{p(x|s=1)P(s=1)}{p(x)}$
$p(x) = p(x|s=0)P(s=0) + p(x|s=1)P(s=1) = (0.6)(0.5) + (0.3)(0.5) = 0.3 + 0.15 = 0.45$.
$P(s=0|x) = \frac{(0.6)(0.5)}{0.45} = \frac{0.3}{0.45} = \frac{30}{45} = \frac{2}{3}$
$P(s=1|x) = \frac{(0.3)(0.5)}{0.45} = \frac{0.15}{0.45} = \frac{15}{45} = \frac{1}{3}$

b) The MMSE estimate is the conditional expectation:
$\hat{s}_{MMSE}(x) = E[s|x] = 0 \cdot P(s=0|x) + 1 \cdot P(s=1|x) = 0 \cdot \frac{2}{3} + 1 \cdot \frac{1}{3} = \frac{1}{3}$.
The MMSE estimate is $\frac{1}{3}$ for any $x$ in the range $[0,1]$.

c) The MAP estimate is the mode of the posterior:
$\hat{s}_{MAP}(x) = \arg \max_s P(s|x)$.
Since $P(s=0|x) = \frac{2}{3}$ and $P(s=1|x) = \frac{1}{3}$, the maximum posterior probability is for $s=0$.
$\hat{s}_{MAP}(x) = 0$ for any $x$ in the range $[0,1]$.

d) The MMSE and MAP estimates are the same when the posterior probability is concentrated on a single value, or when the mean and mode coincide. In this case, the posterior is a discrete probability distribution, and the mean ($1/3$) is not equal to the mode ($0$). Therefore, the MMSE and MAP estimates are never the same for this problem.
*(Self-correction: The question implies we are comparing the calculated estimates. The estimates are $\hat{s}_{MMSE} = 1/3$ and $\hat{s}_{MAP} = 0$. These are fixed values for any valid $x$. They are never equal.)*

---
This comprehensive study note covers the Minimum Mean Square Error (MMSE) estimation, aligning with the learning outcomes and course objectives. It emphasizes the Bayesian approach, the derivation of the MMSE estimator as the conditional expectation, its comparison with other estimators, and provides practical examples and exercises.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
