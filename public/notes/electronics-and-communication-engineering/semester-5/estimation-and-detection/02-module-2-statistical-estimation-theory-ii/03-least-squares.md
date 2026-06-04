---
title: "least squares"
subject: "ESTIMATION AND DETECTION"
module: "Module 2: Statistical Estimation Theory II"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780febcf"
status: "completed"
scrapedAt: "2026-05-23T17:56:45.989Z"
---
# Module 2: Statistical Estimation Theory II - Least Squares

This module delves into the powerful **Least Squares (LS)** estimation technique, a cornerstone of statistical estimation theory. We will explore its fundamental principles, how it's applied to estimate unknown parameters in the presence of noise, and its relationship to other estimation methods.

**Course Outcomes Addressed:**

*   **CO1 (K2):** Summarize the fundamentals of statistical estimation principles used in various engineering problems.
*   **CO2 (K3):** Apply different types of estimation algorithms in engineering applications.

**Learning Outcomes:**

Upon successful completion of this topic, you will be able to:

*   Understand the principle of least squares estimation.
*   Formulate least squares problems for linear models.
*   Derive the least squares estimator for linear models.
*   Analyze the properties of the least squares estimator.
*   Understand the relationship between least squares and maximum likelihood estimation under certain conditions.

---

## 1. Introduction to Least Squares Estimation

The core idea behind **least squares estimation** is to find the parameter values that minimize the sum of the squares of the differences (residuals) between the observed data and the values predicted by a model. It's a widely used technique due to its simplicity and effectiveness, particularly in scenarios where the noise is assumed to be additive and has a specific structure.

**Key Concept:** **Minimizing the sum of squared errors.**

**Definition:** Given a set of observations $y_1, y_2, \ldots, y_N$ and a model that relates these observations to an unknown parameter vector $\boldsymbol{\theta}$, the least squares estimator $\hat{\boldsymbol{\theta}}_{\text{LS}}$ is the value of $\boldsymbol{\theta}$ that minimizes the cost function:

$J(\boldsymbol{\theta}) = \sum_{i=1}^{N} (y_i - f(x_i, \boldsymbol{\theta}))^2$

where:
*   $y_i$ are the observed data points.
*   $x_i$ are the corresponding independent variables or features.
*   $f(x_i, \boldsymbol{\theta})$ is the model function that predicts the observation based on $x_i$ and the parameter vector $\boldsymbol{\theta}$.

**Insight from Textbooks:**

*   **Kay, Vol I, Chapter 3:** Kay introduces least squares as a fundamental method for estimating parameters when the underlying model is known. He emphasizes that it is particularly useful in linear models.

---

## 2. Least Squares for Linear Models

Least squares is most elegantly applied to **linear models**, where the relationship between the observations and the parameters is linear. This simplifies the mathematical derivation and analysis of the estimator.

**Definition: Linear Model**
A linear model is of the form:

$y_i = h_i^T \boldsymbol{\theta} + v_i$

where:
*   $y_i$ is the $i$-th observation.
*   $\boldsymbol{\theta} = [\theta_1, \theta_2, \ldots, \theta_p]^T$ is the vector of $p$ unknown parameters to be estimated.
*   $h_i = [h_{i1}, h_{i2}, \ldots, h_{ip}]^T$ is a vector of known coefficients or features associated with the $i$-th observation.
*   $v_i$ is the additive noise or error term associated with the $i$-th observation.

**Vector Notation:**
In vector form, the linear model can be written as:

$\mathbf{y} = \mathbf{H} \boldsymbol{\theta} + \mathbf{v}$

where:
*   $\mathbf{y} = [y_1, y_2, \ldots, y_N]^T$ is the vector of $N$ observations.
*   $\mathbf{H}$ is an $N \times p$ matrix called the **model matrix** or **design matrix**, where the $i$-th row is $h_i^T$.
*   $\mathbf{v} = [v_1, v_2, \ldots, v_N]^T$ is the vector of additive noise.

**Least Squares Cost Function for Linear Models:**
The cost function to be minimized for a linear model is:

$J(\boldsymbol{\theta}) = \sum_{i=1}^{N} (y_i - h_i^T \boldsymbol{\theta})^2$

In vector form, this becomes:

$J(\boldsymbol{\theta}) = (\mathbf{y} - \mathbf{H} \boldsymbol{\theta})^T (\mathbf{y} - \mathbf{H} \boldsymbol{\theta})$

**Derivation of the Least Squares Estimator (LS):**
To find the value of $\boldsymbol{\theta}$ that minimizes $J(\boldsymbol{\theta})$, we take the gradient with respect to $\boldsymbol{\theta}$ and set it to zero.

1.  Expand the cost function:
    $J(\boldsymbol{\theta}) = \mathbf{y}^T \mathbf{y} - \mathbf{y}^T \mathbf{H} \boldsymbol{\theta} - \boldsymbol{\theta}^T \mathbf{H}^T \mathbf{y} + \boldsymbol{\theta}^T \mathbf{H}^T \mathbf{H} \boldsymbol{\theta}$
    Since $\mathbf{y}^T \mathbf{H} \boldsymbol{\theta}$ is a scalar, its transpose is itself, so $\mathbf{y}^T \mathbf{H} \boldsymbol{\theta} = (\mathbf{y}^T \mathbf{H} \boldsymbol{\theta})^T = \boldsymbol{\theta}^T \mathbf{H}^T \mathbf{y}$.
    $J(\boldsymbol{\theta}) = \mathbf{y}^T \mathbf{y} - 2 \boldsymbol{\theta}^T \mathbf{H}^T \mathbf{y} + \boldsymbol{\theta}^T \mathbf{H}^T \mathbf{H} \boldsymbol{\theta}$

2.  Take the gradient with respect to $\boldsymbol{\theta}$:
    $\nabla_{\boldsymbol{\theta}} J(\boldsymbol{\theta}) = \frac{\partial J(\boldsymbol{\theta})}{\partial \boldsymbol{\theta}} = -2 \mathbf{H}^T \mathbf{y} + 2 \mathbf{H}^T \mathbf{H} \boldsymbol{\theta}$
    (Using standard matrix calculus rules: $\frac{\partial (\mathbf{a}^T \mathbf{x})}{\partial \mathbf{x}} = \mathbf{a}$ and $\frac{\partial (\mathbf{x}^T \mathbf{A} \mathbf{x})}{\partial \mathbf{x}} = (\mathbf{A} + \mathbf{A}^T) \mathbf{x}$, which for a symmetric matrix $\mathbf{A}$ is $2\mathbf{A}\mathbf{x}$)

3.  Set the gradient to zero and solve for $\boldsymbol{\theta}$:
    $-2 \mathbf{H}^T \mathbf{y} + 2 \mathbf{H}^T \mathbf{H} \boldsymbol{\theta} = \mathbf{0}$
    $\mathbf{H}^T \mathbf{H} \boldsymbol{\theta} = \mathbf{H}^T \mathbf{y}$

    This set of $p$ linear equations is known as the **normal equations**.

4.  If the matrix $\mathbf{H}^T \mathbf{H}$ is invertible (which is generally true if the columns of $\mathbf{H}$ are linearly independent, i.e., full column rank), we can solve for $\boldsymbol{\theta}$:

    $\hat{\boldsymbol{\theta}}_{\text{LS}} = (\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T \mathbf{y}$

**Important Point:** The existence and uniqueness of the LS estimator depend on the invertibility of $\mathbf{H}^T \mathbf{H}$. If $\mathbf{H}$ does not have full column rank, $\mathbf{H}^T \mathbf{H}$ is singular, and there might be infinite solutions or no unique solution. In such cases, techniques like regularization (e.g., Ridge Regression) or Singular Value Decomposition (SVD) are used.

**Insight from Textbooks:**

*   **Kay, Vol I, Chapter 3:** Kay provides a detailed derivation of the LS estimator for linear models using matrix calculus. He highlights the importance of the normal equations and the invertibility of $\mathbf{H}^T \mathbf{H}$. He also discusses the case where $\mathbf{H}$ does not have full column rank.
*   **Van Trees, Vol I, Chapter 3:** Van Trees also covers least squares in the context of linear estimation and provides a comprehensive treatment, often linking it to minimum variance unbiased estimation (MVUE) when specific noise assumptions are made.

---

## 3. Example: Simple Linear Regression

Let's consider a simple linear regression problem, a common application of least squares.

**Problem:** We have $N$ data points $(x_i, y_i)$ that are believed to lie on a straight line with some additive noise. The model is:

$y_i = a x_i + b + v_i$

where $a$ and $b$ are the unknown parameters we want to estimate, and $v_i$ is the noise.

**Formulating the LS Problem:**

We can write this in vector form:
$\mathbf{y} = \mathbf{H} \boldsymbol{\theta} + \mathbf{v}$

Here:
*   $\mathbf{y} = [y_1, y_2, \ldots, y_N]^T$
*   $\boldsymbol{\theta} = [a, b]^T$ (the parameter vector we want to estimate)
*   $\mathbf{v} = [v_1, v_2, \ldots, v_N]^T$

The model matrix $\mathbf{H}$ will be:

$\mathbf{H} = \begin{bmatrix} x_1 & 1 \\ x_2 & 1 \\ \vdots & \vdots \\ x_N & 1 \end{bmatrix}$

**Deriving the LS Estimator for this Example:**

Now we apply the formula $\hat{\boldsymbol{\theta}}_{\text{LS}} = (\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T \mathbf{y}$.

1.  **Calculate $\mathbf{H}^T \mathbf{H}$:**
    $\mathbf{H}^T = \begin{bmatrix} x_1 & x_2 & \ldots & x_N \\ 1 & 1 & \ldots & 1 \end{bmatrix}$

    $\mathbf{H}^T \mathbf{H} = \begin{bmatrix} x_1 & x_2 & \ldots & x_N \\ 1 & 1 & \ldots & 1 \end{bmatrix} \begin{bmatrix} x_1 & 1 \\ x_2 & 1 \\ \vdots & \vdots \\ x_N & 1 \end{bmatrix} = \begin{bmatrix} \sum_{i=1}^N x_i^2 & \sum_{i=1}^N x_i \\ \sum_{i=1}^N x_i & \sum_{i=1}^N 1 \end{bmatrix} = \begin{bmatrix} \sum x_i^2 & \sum x_i \\ \sum x_i & N \end{bmatrix}$

2.  **Calculate $\mathbf{H}^T \mathbf{y}$:**
    $\mathbf{H}^T \mathbf{y} = \begin{bmatrix} x_1 & x_2 & \ldots & x_N \\ 1 & 1 & \ldots & 1 \end{bmatrix} \begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_N \end{bmatrix} = \begin{bmatrix} \sum_{i=1}^N x_i y_i \\ \sum_{i=1}^N y_i \end{bmatrix} = \begin{bmatrix} \sum x_i y_i \\ \sum y_i \end{bmatrix}$

3.  **Calculate $(\mathbf{H}^T \mathbf{H})^{-1}$:**
    The determinant of $\mathbf{H}^T \mathbf{H}$ is $D = (\sum x_i^2)(N) - (\sum x_i)^2$.
    Assuming $D \neq 0$ (which is true if not all $x_i$ are the same), the inverse is:
    $(\mathbf{H}^T \mathbf{H})^{-1} = \frac{1}{D} \begin{bmatrix} N & -\sum x_i \\ -\sum x_i & \sum x_i^2 \end{bmatrix}$

4.  **Compute $\hat{\boldsymbol{\theta}}_{\text{LS}}$:**
    $\hat{\boldsymbol{\theta}}_{\text{LS}} = \begin{bmatrix} \hat{a}_{\text{LS}} \\ \hat{b}_{\text{LS}} \end{bmatrix} = (\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T \mathbf{y} = \frac{1}{D} \begin{bmatrix} N & -\sum x_i \\ -\sum x_i & \sum x_i^2 \end{bmatrix} \begin{bmatrix} \sum x_i y_i \\ \sum y_i \end{bmatrix}$

    $\hat{\boldsymbol{\theta}}_{\text{LS}} = \frac{1}{N \sum x_i^2 - (\sum x_i)^2} \begin{bmatrix} N \sum x_i y_i - (\sum x_i)(\sum y_i) \\ -(\sum x_i)(\sum x_i y_i) + (\sum x_i^2)(\sum y_i) \end{bmatrix}$

    This gives the estimates for $a$ and $b$:
    $\hat{a}_{\text{LS}} = \frac{N \sum x_i y_i - (\sum x_i)(\sum y_i)}{N \sum x_i^2 - (\sum x_i)^2}$
    $\hat{b}_{\text{LS}} = \frac{(\sum x_i^2)(\sum y_i) - (\sum x_i)(\sum x_i y_i)}{N \sum x_i^2 - (\sum x_i)^2}$

    These are the familiar formulas for the slope and intercept in simple linear regression.

---

## 4. Properties of the Least Squares Estimator

The properties of the LS estimator are crucial for understanding its performance and limitations. These properties often depend on the assumptions made about the noise term $\mathbf{v}$.

**Assumptions for Standard LS Properties:**

1.  **Linearity:** The model is linear in the parameters: $\mathbf{y} = \mathbf{H} \boldsymbol{\theta} + \mathbf{v}$.
2.  **Full Column Rank:** The model matrix $\mathbf{H}$ has full column rank ($p \le N$, and columns are linearly independent). This ensures $\mathbf{H}^T \mathbf{H}$ is invertible.
3.  **Zero Mean Noise:** The noise vector has zero mean: $E[\mathbf{v}] = \mathbf{0}$. This implies $E[y_i] = h_i^T \boldsymbol{\theta}$.
4.  **Constant Variance and No Autocorrelation:** The noise has a constant variance $\sigma^2$ and no correlation between samples. In vector form, this means the covariance matrix of the noise is $\mathbf{C}_v = E[\mathbf{v} \mathbf{v}^T] = \sigma^2 \mathbf{I}_N$, where $\mathbf{I}_N$ is the $N \times N$ identity matrix. This is the assumption of **spherical (or homoscedastic) uncorrelated noise**.

**Key Properties:**

*   **Unbiasedness:** Under the assumption of zero-mean noise ($E[\mathbf{v}] = \mathbf{0}$), the LS estimator is unbiased.

    Proof:
    $E[\hat{\boldsymbol{\theta}}_{\text{LS}}] = E[(\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T \mathbf{y}]$
    Substitute $\mathbf{y} = \mathbf{H} \boldsymbol{\theta} + \mathbf{v}$:
    $E[\hat{\boldsymbol{\theta}}_{\text{LS}}] = E[(\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T (\mathbf{H} \boldsymbol{\theta} + \mathbf{v})]$
    $E[\hat{\boldsymbol{\theta}}_{\text{LS}}] = E[(\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T \mathbf{H} \boldsymbol{\theta} + (\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T \mathbf{v}]$
    $E[\hat{\boldsymbol{\theta}}_{\text{LS}}] = E[\boldsymbol{\theta} + (\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T \mathbf{v}]$
    Since $\boldsymbol{\theta}$ and $\mathbf{H}$ are known, we can pull them out of the expectation:
    $E[\hat{\boldsymbol{\theta}}_{\text{LS}}] = \boldsymbol{\theta} + (\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T E[\mathbf{v}]$
    Since $E[\mathbf{v}] = \mathbf{0}$:
    $E[\hat{\boldsymbol{\theta}}_{\text{LS}}] = \boldsymbol{\theta} + (\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T \mathbf{0} = \boldsymbol{\theta}$
    Thus, $\hat{\boldsymbol{\theta}}_{\text{LS}}$ is unbiased.

*   **Efficiency (BLUE):** When the noise is spherical ($\mathbf{C}_v = \sigma^2 \mathbf{I}_N$), the LS estimator is the **Best Linear Unbiased Estimator (BLUE)**. This is a fundamental result from the **Gauss-Markov Theorem**. It means that among all linear unbiased estimators, the LS estimator has the minimum variance.

    The covariance matrix of the LS estimator is:
    $\mathbf{C}_{\hat{\boldsymbol{\theta}}_{\text{LS}}} = E[(\hat{\boldsymbol{\theta}}_{\text{LS}} - E[\hat{\boldsymbol{\theta}}_{\text{LS}}]) (\hat{\boldsymbol{\theta}}_{\text{LS}} - E[\hat{\boldsymbol{\theta}}_{\text{LS}}])^T]$
    Since $E[\hat{\boldsymbol{\theta}}_{\text{LS}}] = \boldsymbol{\theta}$:
    $\mathbf{C}_{\hat{\boldsymbol{\theta}}_{\text{LS}}} = E[(\hat{\boldsymbol{\theta}}_{\text{LS}} - \boldsymbol{\theta}) (\hat{\boldsymbol{\theta}}_{\text{LS}} - \boldsymbol{\theta})^T]$
    $\hat{\boldsymbol{\theta}}_{\text{LS}} - \boldsymbol{\theta} = (\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T \mathbf{y} - \boldsymbol{\theta}$
    $\hat{\boldsymbol{\theta}}_{\text{LS}} - \boldsymbol{\theta} = (\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T (\mathbf{H} \boldsymbol{\theta} + \mathbf{v}) - \boldsymbol{\theta}$
    $\hat{\boldsymbol{\theta}}_{\text{LS}} - \boldsymbol{\theta} = \boldsymbol{\theta} + (\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T \mathbf{v} - \boldsymbol{\theta}$
    $\hat{\boldsymbol{\theta}}_{\text{LS}} - \boldsymbol{\theta} = (\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T \mathbf{v}$

    $\mathbf{C}_{\hat{\boldsymbol{\theta}}_{\text{LS}}} = E[ ((\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T \mathbf{v}) ((\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T \mathbf{v})^T ]$
    $\mathbf{C}_{\hat{\boldsymbol{\theta}}_{\text{LS}}} = E[ (\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T \mathbf{v} \mathbf{v}^T \mathbf{H} (\mathbf{H}^T \mathbf{H})^{-1} ]$
    $\mathbf{C}_{\hat{\boldsymbol{\theta}}_{\text{LS}}} = (\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T E[\mathbf{v} \mathbf{v}^T] \mathbf{H} (\mathbf{H}^T \mathbf{H})^{-1}$
    Substitute $E[\mathbf{v} \mathbf{v}^T] = \sigma^2 \mathbf{I}_N$:
    $\mathbf{C}_{\hat{\boldsymbol{\theta}}_{\text{LS}}} = (\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T (\sigma^2 \mathbf{I}_N) \mathbf{H} (\mathbf{H}^T \mathbf{H})^{-1}$
    $\mathbf{C}_{\hat{\boldsymbol{\theta}}_{\text{LS}}} = \sigma^2 (\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T \mathbf{H} (\mathbf{H}^T \mathbf{H})^{-1}$
    $\mathbf{C}_{\hat{\boldsymbol{\theta}}_{\text{LS}}} = \sigma^2 (\mathbf{H}^T \mathbf{H})^{-1}$

    This result shows that the variance of each parameter estimate is proportional to $\sigma^2$ and inversely proportional to $\mathbf{H}^T \mathbf{H}$.

*   **Consistency:** If the number of observations $N$ increases and the matrix $\frac{1}{N}\mathbf{H}^T \mathbf{H}$ converges to a non-singular matrix, the LS estimator is consistent, meaning it converges to the true parameter value as $N \to \infty$.

**Insight from Textbooks:**

*   **Kay, Vol I, Chapter 3:** Kay thoroughly discusses the unbiasedness and efficiency (BLUE) properties of the LS estimator under the Gauss-Markov assumptions. He provides the derivation for the covariance matrix and explains its implications.
*   **Hayes, Chapter 5:** Hayes also covers the Gauss-Markov theorem and the optimality of the LS estimator for linear models with spherical noise.

---

## 5. Least Squares vs. Maximum Likelihood Estimation (MLE)

There's a strong connection between Least Squares and Maximum Likelihood Estimation, particularly when the noise is assumed to be Gaussian.

**Maximum Likelihood Estimation (MLE):**
The MLE principle states that the best estimate of a parameter is the value that maximizes the likelihood function, which is the probability of observing the data given the parameter.

For a linear model $\mathbf{y} = \mathbf{H} \boldsymbol{\theta} + \mathbf{v}$, if we assume that the noise vector $\mathbf{v}$ is **Gaussian with zero mean and covariance $\mathbf{C}_v = \sigma^2 \mathbf{I}_N$**, then the probability density function (PDF) of each observation $y_i$ is:

$f(y_i | \boldsymbol{\theta}) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(y_i - h_i^T \boldsymbol{\theta})^2}{2\sigma^2}\right)$

The likelihood function for the entire vector $\mathbf{y}$ is the product of these PDFs:

$L(\boldsymbol{\theta}) = \prod_{i=1}^N f(y_i | \boldsymbol{\theta}) = \left(\frac{1}{\sqrt{2\pi\sigma^2}}\right)^N \exp\left(-\sum_{i=1}^N \frac{(y_i - h_i^T \boldsymbol{\theta})^2}{2\sigma^2}\right)$

To maximize $L(\boldsymbol{\theta})$, it's equivalent to maximize the log-likelihood function, $\ln L(\boldsymbol{\theta})$:

$\ln L(\boldsymbol{\theta}) = -\frac{N}{2} \ln(2\pi\sigma^2) - \frac{1}{2\sigma^2} \sum_{i=1}^N (y_i - h_i^T \boldsymbol{\theta})^2$

Maximizing $\ln L(\boldsymbol{\theta})$ is equivalent to minimizing the sum of squared errors:

$\sum_{i=1}^N (y_i - h_i^T \boldsymbol{\theta})^2$

This is precisely the cost function for the least squares estimation!

**Conclusion:**
When the additive noise is **independent and identically distributed (i.i.d.) Gaussian with constant variance**, the **Least Squares estimator is identical to the Maximum Likelihood Estimator**.

**What if the noise is not Gaussian but still spherical?**
Even if the noise is not Gaussian, but it is spherical ($\mathbf{C}_v = \sigma^2 \mathbf{I}_N$), the LS estimator is still the BLUE (Best Linear Unbiased Estimator). The MLE would be different depending on the actual noise distribution.

**What if the noise is not spherical?**
If the noise covariance matrix $\mathbf{C}_v$ is not $\sigma^2 \mathbf{I}_N$, the LS estimator is generally **not** the MVUE (Minimum Variance Unbiased Estimator) and might not even be the BLUE. In such cases, a more general approach called **Generalized Least Squares (GLS)** is used, which accounts for the non-spherical noise covariance.

**Insight from Textbooks:**

*   **Kay, Vol I, Chapter 3:** Kay explicitly discusses the relationship between LS and MLE under the assumption of Gaussian noise. This connection is a key reason for the popularity of LS.
*   **Van Trees, Vol I, Chapter 3:** Van Trees also highlights this equivalence and explains why LS is often preferred for its computational simplicity when the Gaussian assumption is reasonable.

---

## 6. Weighted Least Squares (WLS)

When the assumption of constant variance (homoscedasticity) is violated, meaning the noise variance is not the same for all observations, the standard LS estimator may not be optimal. In such cases, **Weighted Least Squares (WLS)** can be used.

**Problem:** The noise vector $\mathbf{v}$ has a covariance matrix $\mathbf{C}_v$ which is not necessarily $\sigma^2 \mathbf{I}_N$. Specifically, the variances of the individual noise components $v_i$ might differ, and there might be correlation. However, if the variances differ but there's no correlation, i.e., $\mathbf{C}_v = \text{diag}(\sigma_1^2, \sigma_2^2, \ldots, \sigma_N^2)$, WLS is particularly useful.

**WLS Approach:**
The idea is to transform the linear model $\mathbf{y} = \mathbf{H} \boldsymbol{\theta} + \mathbf{v}$ into a new form where the noise is spherical. This is achieved by multiplying the entire equation by a matrix $\mathbf{W}$ such that the noise in the transformed equation has a spherical covariance.

If $\mathbf{C}_v$ is known and positive definite, we can find a matrix $\mathbf{S}$ such that $\mathbf{C}_v = \mathbf{S} \mathbf{S}^T$. We can then choose $\mathbf{W} = \mathbf{S}^{-1}$.

Multiply the model by $\mathbf{W}$:
$\mathbf{W} \mathbf{y} = \mathbf{W} \mathbf{H} \boldsymbol{\theta} + \mathbf{W} \mathbf{v}$

Let $\mathbf{y}' = \mathbf{W} \mathbf{y}$, $\mathbf{H}' = \mathbf{W} \mathbf{H}$, and $\mathbf{v}' = \mathbf{W} \mathbf{v}$. The new model is:
$\mathbf{y}' = \mathbf{H}' \boldsymbol{\theta} + \mathbf{v}'$

The covariance of the new noise is:
$\mathbf{C}_{\mathbf{v}'} = E[\mathbf{v}' (\mathbf{v}')^T] = E[(\mathbf{W} \mathbf{v}) (\mathbf{W} \mathbf{v})^T] = E[\mathbf{W} \mathbf{v} \mathbf{v}^T \mathbf{W}^T]$
$\mathbf{C}_{\mathbf{v}'} = \mathbf{W} E[\mathbf{v} \mathbf{v}^T] \mathbf{W}^T = \mathbf{W} \mathbf{C}_v \mathbf{W}^T$

If we choose $\mathbf{W} = \mathbf{C}_v^{-1/2}$ (where $\mathbf{C}_v^{-1/2}$ is the inverse of the matrix square root of $\mathbf{C}_v$), then:
$\mathbf{C}_{\mathbf{v}'} = \mathbf{C}_v^{-1/2} \mathbf{C}_v (\mathbf{C}_v^{-1/2})^T = \mathbf{C}_v^{-1/2} \mathbf{C}_v \mathbf{C}_v^{-1/2} = \mathbf{I}_N$
So, the transformed noise is spherical with unit variance.

The WLS estimator is then the standard LS estimator applied to the transformed model:

$\hat{\boldsymbol{\theta}}_{\text{WLS}} = ((\mathbf{W} \mathbf{H})^T (\mathbf{W} \mathbf{H}))^{-1} (\mathbf{W} \mathbf{H})^T (\mathbf{W} \mathbf{y})$
$\hat{\boldsymbol{\theta}}_{\text{WLS}} = (\mathbf{H}^T \mathbf{W}^T \mathbf{W} \mathbf{H})^{-1} \mathbf{H}^T \mathbf{W}^T \mathbf{W} \mathbf{y}$

If $\mathbf{W} = \mathbf{C}_v^{-1/2}$, then $\mathbf{W}^T \mathbf{W} = (\mathbf{C}_v^{-1/2})^T \mathbf{C}_v^{-1/2} = \mathbf{C}_v^{-1}$.
So, the WLS estimator becomes:

$\hat{\boldsymbol{\theta}}_{\text{WLS}} = (\mathbf{H}^T \mathbf{C}_v^{-1} \mathbf{H})^{-1} \mathbf{H}^T \mathbf{C}_v^{-1} \mathbf{y}$

**Simplified Case: Heteroscedastic Noise (No Correlation)**
If the noise is uncorrelated but has different variances, $\mathbf{C}_v = \text{diag}(\sigma_1^2, \sigma_2^2, \ldots, \sigma_N^2)$.
In this case, we can choose $\mathbf{W} = \text{diag}(1/\sigma_1, 1/\sigma_2, \ldots, 1/\sigma_N)$.
Then $\mathbf{W}^T \mathbf{W} = \text{diag}(1/\sigma_1^2, 1/\sigma_2^2, \ldots, 1/\sigma_N^2) = \mathbf{C}_v^{-1}$.
The WLS cost function to minimize is:

$J(\boldsymbol{\theta}) = \sum_{i=1}^N w_i (y_i - h_i^T \boldsymbol{\theta})^2$, where $w_i = 1/\sigma_i^2$.

In matrix form, this is:
$J(\boldsymbol{\theta}) = (\mathbf{y} - \mathbf{H} \boldsymbol{\theta})^T \mathbf{C}_v^{-1} (\mathbf{y} - \mathbf{H} \boldsymbol{\theta})$

Minimizing this leads to the same WLS estimator as above. WLS gives more weight to observations with smaller noise variances.

**Insight from Textbooks:**

*   **Kay, Vol I, Chapter 3:** Kay discusses WLS and its relationship to GLS when the noise covariance is known but not spherical. He explains how it optimally weights observations.
*   **Van Trees, Vol I, Chapter 3:** Van Trees also covers WLS as a generalization of LS when dealing with heteroscedastic noise.

---

## 7. Practice Questions and Answers

**Question 1:**
Consider a linear model $\mathbf{y} = \mathbf{H} \boldsymbol{\theta} + \mathbf{v}$, where $\mathbf{y}$ is an $N \times 1$ observation vector, $\mathbf{H}$ is an $N \times p$ known matrix with full column rank, $\boldsymbol{\theta}$ is a $p \times 1$ unknown parameter vector, and $\mathbf{v}$ is an $N \times 1$ noise vector with $E[\mathbf{v}] = \mathbf{0}$ and $E[\mathbf{v} \mathbf{v}^T] = \sigma^2 \mathbf{I}_N$.
Derive the least squares estimator for $\boldsymbol{\theta}$ and its covariance matrix.

**Answer 1:**
The least squares estimator is derived by minimizing the cost function $J(\boldsymbol{\theta}) = (\mathbf{y} - \mathbf{H} \boldsymbol{\theta})^T (\mathbf{y} - \mathbf{H} \boldsymbol{\theta})$.
Setting the gradient to zero, we get the normal equations:
$\mathbf{H}^T \mathbf{H} \boldsymbol{\theta} = \mathbf{H}^T \mathbf{y}$

Since $\mathbf{H}$ has full column rank, $\mathbf{H}^T \mathbf{H}$ is invertible. The least squares estimator is:
$\hat{\boldsymbol{\theta}}_{\text{LS}} = (\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T \mathbf{y}$

The covariance matrix of the LS estimator is:
$\mathbf{C}_{\hat{\boldsymbol{\theta}}_{\text{LS}}} = E[(\hat{\boldsymbol{\theta}}_{\text{LS}} - E[\hat{\boldsymbol{\theta}}_{\text{LS}}]) (\hat{\boldsymbol{\theta}}_{\text{LS}} - E[\hat{\boldsymbol{\theta}}_{\text{LS}}])^T]$
We found that $\hat{\boldsymbol{\theta}}_{\text{LS}} - E[\hat{\boldsymbol{\theta}}_{\text{LS}}] = (\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T \mathbf{v}$ (assuming $E[\mathbf{v}] = \mathbf{0}$).
$\mathbf{C}_{\hat{\boldsymbol{\theta}}_{\text{LS}}} = E[ ((\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T \mathbf{v}) ((\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T \mathbf{v})^T ]$
$\mathbf{C}_{\hat{\boldsymbol{\theta}}_{\text{LS}}} = (\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T E[\mathbf{v} \mathbf{v}^T] \mathbf{H} (\mathbf{H}^T \mathbf{H})^{-1}$
Substituting $E[\mathbf{v} \mathbf{v}^T] = \sigma^2 \mathbf{I}_N$:
$\mathbf{C}_{\hat{\boldsymbol{\theta}}_{\text{LS}}} = \sigma^2 (\mathbf{H}^T \mathbf{H})^{-1}$

**Question 2:**
Under what conditions is the Least Squares estimator equivalent to the Maximum Likelihood Estimator?

**Answer 2:**
The Least Squares estimator is equivalent to the Maximum Likelihood Estimator when the additive noise is **independent and identically distributed (i.i.d.) Gaussian with constant variance**. In this case, the likelihood function's maximization objective reduces to minimizing the sum of squared errors.

**Question 3:**
Consider estimating the intercept $\theta_0$ from $N$ observations $y_i = \theta_0 + v_i$.
a) Write this in the form $\mathbf{y} = \mathbf{H} \boldsymbol{\theta} + \mathbf{v}$.
b) Find the LS estimator for $\theta_0$.

**Answer 3:**
a) Here, the parameter vector is $\boldsymbol{\theta} = [\theta_0]$. The model matrix $\mathbf{H}$ would be an $N \times 1$ vector of ones:
$\mathbf{y} = \begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_N \end{bmatrix}$, $\mathbf{H} = \begin{bmatrix} 1 \\ 1 \\ \vdots \\ 1 \end{bmatrix}$, $\boldsymbol{\theta} = [\theta_0]$, $\mathbf{v} = \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_N \end{bmatrix}$

b) Using the LS formula $\hat{\boldsymbol{\theta}}_{\text{LS}} = (\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T \mathbf{y}$:
$\mathbf{H}^T \mathbf{H} = \begin{bmatrix} 1 & 1 & \ldots & 1 \end{bmatrix} \begin{bmatrix} 1 \\ 1 \\ \vdots \\ 1 \end{bmatrix} = [N]$ (a $1 \times 1$ matrix)
$(\mathbf{H}^T \mathbf{H})^{-1} = [1/N]$

$\mathbf{H}^T \mathbf{y} = \begin{bmatrix} 1 & 1 & \ldots & 1 \end{bmatrix} \begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_N \end{bmatrix} = [ \sum_{i=1}^N y_i ]$

$\hat{\boldsymbol{\theta}}_{\text{LS}} = [1/N] [ \sum_{i=1}^N y_i ] = [\frac{1}{N} \sum_{i=1}^N y_i]$
So, $\hat{\theta}_{0, \text{LS}} = \frac{1}{N} \sum_{i=1}^N y_i$. The LS estimator for a constant is simply the sample mean.

---

## 8. Important Points to Remember

*   **Least Squares Principle:** Minimize the sum of squared differences between observed and predicted values.
*   **Linear Models:** LS is most straightforward for models that are linear in the parameters.
*   **Normal Equations:** $\mathbf{H}^T \mathbf{H} \boldsymbol{\theta} = \mathbf{H}^T \mathbf{y}$ for linear models.
*   **LS Estimator:** $\hat{\boldsymbol{\theta}}_{\text{LS}} = (\mathbf{H}^T \mathbf{H})^{-1} \mathbf{H}^T \mathbf{y}$ (requires $\mathbf{H}^T \mathbf{H}$ to be invertible).
*   **Unbiasedness:** LS is unbiased if the noise has zero mean.
*   **BLUE:** LS is the Best Linear Unbiased Estimator if the noise is spherical (zero mean, constant variance, no autocorrelation).
*   **Connection to MLE:** LS is equivalent to MLE when the noise is i.i.d. Gaussian.
*   **Weighted Least Squares (WLS):** Used when noise variance is not constant. It weights observations inversely proportional to their variance.
*   **Covariance Matrix of LS:** $\mathbf{C}_{\hat{\boldsymbol{\theta}}_{\text{LS}}} = \sigma^2 (\mathbf{H}^T \mathbf{H})^{-1}$ (under spherical noise).

---

This module provides a foundational understanding of the Least Squares estimation technique, its derivation, properties, and its relationship with other important estimation methods. These concepts are critical for solving a wide range of parameter estimation problems in signal processing and beyond.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
