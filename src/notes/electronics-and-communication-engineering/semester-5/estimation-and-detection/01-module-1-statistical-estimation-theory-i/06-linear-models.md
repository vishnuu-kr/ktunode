---
title: "linear models"
subject: "ESTIMATION AND DETECTION"
module: "Module 1: Statistical Estimation Theory I"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780febc9"
status: "completed"
scrapedAt: "2026-05-23T17:56:42.436Z"
---
# Module 1: Statistical Estimation Theory I - Linear Models

## Introduction

This module introduces the foundational concepts of statistical estimation theory, with a particular focus on **linear models**. We will explore how to estimate unknown parameters when the relationship between observed data and these parameters can be represented by a linear equation. This is a cornerstone of many signal processing and engineering applications.

**Course Outcomes Addressed:**
*   **CO1 (K2):** Summarize the fundamentals of statistical estimation principles used in various engineering problems.
*   **CO2 (K3):** Apply different types of estimation algorithms in engineering applications.

**Key Textbooks:**
*   Kay, S. M. (2010). *Fundamentals of Statistical Signal Processing, Vol I: Estimation Theory* (3rd ed.). Pearson. (Primary Reference)
*   Van Trees, H. L. (2001). *Detection, Estimation, and Modulation Theory, Vol. I* (2nd ed.). John Wiley & Sons. (Secondary Reference)

---

## 1. The Linear Model

### 1.1 Definition of a Linear Model

A linear model describes the relationship between an observed vector and an unknown parameter vector through a linear transformation.

**Definition:**
An observed vector $\mathbf{y}$ is related to an unknown parameter vector $\boldsymbol{\theta}$ and a noise vector $\mathbf{v}$ by the linear equation:

$\mathbf{y} = \mathbf{H}\boldsymbol{\theta} + \mathbf{v}$

where:
*   $\mathbf{y} \in \mathbb{R}^N$ is the observed data vector.
*   $\boldsymbol{\theta} \in \mathbb{R}^p$ is the unknown parameter vector we want to estimate.
*   $\mathbf{H}$ is a known $N \times p$ matrix (the "model matrix" or "design matrix").
*   $\mathbf{v} \in \mathbb{R}^N$ is the noise vector.

**(Kay, Chapter 2.1.1)**

### 1.2 Assumptions about the Noise

The statistical properties of the noise vector $\mathbf{v}$ are crucial for estimation. Common assumptions include:

*   **Zero Mean:** $E[\mathbf{v}] = \mathbf{0}$. This implies $E[\mathbf{y}] = \mathbf{H}\boldsymbol{\theta}$.
*   **Known Covariance:** $E[\mathbf{v}\mathbf{v}^T] = \mathbf{R}_{\mathbf{v}}$. This is often assumed to be a diagonal matrix $\sigma^2\mathbf{I}$ for white noise, meaning $v_i$ are uncorrelated and have the same variance.
    *   **White Noise:** $E[v_i v_j] = \sigma^2 \delta_{ij}$, where $\delta_{ij}$ is the Kronecker delta. This implies $\mathbf{R}_{\mathbf{v}} = \sigma^2\mathbf{I}$.
*   **Gaussian Noise:** $\mathbf{v} \sim \mathcal{N}(\mathbf{0}, \mathbf{R}_{\mathbf{v}})$. This is a very common and powerful assumption.

**(Kay, Chapter 2.1.1)**

### 1.3 Example: Simple Linear Regression

Consider observing a variable $y$ at different values of $x$, and assuming a linear relationship with additive noise:

$y_i = \theta_0 + \theta_1 x_i + v_i$, for $i = 1, \dots, N$

In vector form:

$\begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_N \end{bmatrix} = \begin{bmatrix} 1 & x_1 \\ 1 & x_2 \\ \vdots & \vdots \\ 1 & x_N \end{bmatrix} \begin{bmatrix} \theta_0 \\ \theta_1 \end{bmatrix} + \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_N \end{bmatrix}$

Here, $\mathbf{y} = [y_1, \dots, y_N]^T$, $\boldsymbol{\theta} = [\theta_0, \theta_1]^T$, $\mathbf{H} = \begin{bmatrix} 1 & x_1 \\ \vdots & \vdots \\ 1 & x_N \end{bmatrix}$, and $\mathbf{v} = [v_1, \dots, v_N]^T$. We aim to estimate the intercept $\theta_0$ and the slope $\theta_1$.

**(Kay, Chapter 2.1.1, Example 2.1)**

---

## 2. Least Squares Estimation (LSE)

The Least Squares Estimator (LSE) aims to find the parameter vector $\boldsymbol{\theta}$ that minimizes the sum of the squared errors between the observed data and the model's prediction.

### 2.1 The Principle of Least Squares

We want to find $\hat{\boldsymbol{\theta}}$ that minimizes the squared error:

$\sum_{i=1}^N (y_i - (\mathbf{H}\boldsymbol{\theta})_i)^2 = \|\mathbf{y} - \mathbf{H}\boldsymbol{\theta}\|^2$

This is a standard optimization problem.

**(Kay, Chapter 2.2.1)**

### 2.2 Derivation of the LSE

To minimize the objective function $J(\boldsymbol{\theta}) = \|\mathbf{y} - \mathbf{H}\boldsymbol{\theta}\|^2$, we take its gradient with respect to $\boldsymbol{\theta}$ and set it to zero.

$J(\boldsymbol{\theta}) = (\mathbf{y} - \mathbf{H}\boldsymbol{\theta})^T (\mathbf{y} - \mathbf{H}\boldsymbol{\theta})$
$\frac{\partial J(\boldsymbol{\theta})}{\partial \boldsymbol{\theta}} = -2\mathbf{H}^T(\mathbf{y} - \mathbf{H}\boldsymbol{\theta})$

Setting the gradient to zero:
$-2\mathbf{H}^T(\mathbf{y} - \mathbf{H}\hat{\boldsymbol{\theta}}) = \mathbf{0}$
$\mathbf{H}^T\mathbf{y} - \mathbf{H}^T\mathbf{H}\hat{\boldsymbol{\theta}} = \mathbf{0}$
$\mathbf{H}^T\mathbf{H}\hat{\boldsymbol{\theta}} = \mathbf{H}^T\mathbf{y}$

This leads to the **normal equations**.

**(Kay, Chapter 2.2.2)**

### 2.3 The LSE Formula

If the matrix $\mathbf{H}^T\mathbf{H}$ is invertible (i.e., the columns of $\mathbf{H}$ are linearly independent), the LSE is given by:

$\hat{\boldsymbol{\theta}}_{LS} = (\mathbf{H}^T\mathbf{H})^{-1}\mathbf{H}^T\mathbf{y}$

The term $(\mathbf{H}^T\mathbf{H})^{-1}\mathbf{H}^T$ is known as the **Moore-Penrose pseudoinverse** of $\mathbf{H}$, often denoted by $\mathbf{H}^+$.

$\hat{\boldsymbol{\theta}}_{LS} = \mathbf{H}^+\mathbf{y}$

**Important Note:** This formula requires $\mathbf{H}^T\mathbf{H}$ to be invertible. If $\mathbf{H}$ has linearly dependent columns (e.g., in cases of multicollinearity in regression), $\mathbf{H}^T\mathbf{H}$ will be singular, and the LSE is not unique. In such cases, regularization techniques or choosing one of the many solutions is necessary.

**(Kay, Chapter 2.2.2)**

### 2.4 Example: LSE for Simple Linear Regression

For the simple linear regression model $y_i = \theta_0 + \theta_1 x_i + v_i$:

$\mathbf{H} = \begin{bmatrix} 1 & x_1 \\ 1 & x_2 \\ \vdots & \vdots \\ 1 & x_N \end{bmatrix}$, $\mathbf{y} = \begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_N \end{bmatrix}$

$\mathbf{H}^T\mathbf{H} = \begin{bmatrix} 1 & 1 & \dots & 1 \\ x_1 & x_2 & \dots & x_N \end{bmatrix} \begin{bmatrix} 1 & x_1 \\ 1 & x_2 \\ \vdots & \vdots \\ 1 & x_N \end{bmatrix} = \begin{bmatrix} N & \sum x_i \\ \sum x_i & \sum x_i^2 \end{bmatrix}$

$\mathbf{H}^T\mathbf{y} = \begin{bmatrix} 1 & 1 & \dots & 1 \\ x_1 & x_2 & \dots & x_N \end{bmatrix} \begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_N \end{bmatrix} = \begin{bmatrix} \sum y_i \\ \sum x_i y_i \end{bmatrix}$

So, the normal equations are:
$\begin{bmatrix} N & \sum x_i \\ \sum x_i & \sum x_i^2 \end{bmatrix} \begin{bmatrix} \hat{\theta}_0 \\ \hat{\theta}_1 \end{bmatrix} = \begin{bmatrix} \sum y_i \\ \sum x_i y_i \end{bmatrix}$

The solution for $\hat{\theta}_1$ is the familiar slope from statistics:
$\hat{\theta}_1 = \frac{N(\sum x_i y_i) - (\sum x_i)(\sum y_i)}{N(\sum x_i^2) - (\sum x_i)^2} = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sum (x_i - \bar{x})^2}$

And for $\hat{\theta}_0$:
$\hat{\theta}_0 = \frac{(\sum y_i)(\sum x_i^2) - (\sum x_i)(\sum x_i y_i)}{N(\sum x_i^2) - (\sum x_i)^2} = \bar{y} - \hat{\theta}_1 \bar{x}$

**(Kay, Chapter 2.2.2, Example 2.2)**

---

## 3. Properties of the Least Squares Estimator

The properties of the LSE are crucial for understanding its performance and comparing it to other estimators.

### 3.1 Linearity of the LSE

The LSE is a linear function of the observed data $\mathbf{y}$:

$\hat{\boldsymbol{\theta}}_{LS} = (\mathbf{H}^T\mathbf{H})^{-1}\mathbf{H}^T\mathbf{y} = \mathbf{A}\mathbf{y}$

where $\mathbf{A} = (\mathbf{H}^T\mathbf{H})^{-1}\mathbf{H}^T$ is a deterministic matrix. This means the LSE is a linear estimator.

**(Kay, Chapter 2.3.1)**

### 3.2 Bias of the LSE

The bias of an estimator $\hat{\boldsymbol{\theta}}$ is defined as $E[\hat{\boldsymbol{\theta}}] - \boldsymbol{\theta}$.

$E[\hat{\boldsymbol{\theta}}_{LS}] = E[(\mathbf{H}^T\mathbf{H})^{-1}\mathbf{H}^T\mathbf{y}]$
$E[\hat{\boldsymbol{\theta}}_{LS}] = (\mathbf{H}^T\mathbf{H})^{-1}\mathbf{H}^T E[\mathbf{y}]$
Since $E[\mathbf{y}] = \mathbf{H}\boldsymbol{\theta}$:
$E[\hat{\boldsymbol{\theta}}_{LS}] = (\mathbf{H}^T\mathbf{H})^{-1}\mathbf{H}^T (\mathbf{H}\boldsymbol{\theta})$
$E[\hat{\boldsymbol{\theta}}_{LS}] = (\mathbf{H}^T\mathbf{H})^{-1}(\mathbf{H}^T\mathbf{H})\boldsymbol{\theta}$
$E[\hat{\boldsymbol{\theta}}_{LS}] = \boldsymbol{\theta}$

Therefore, the LSE is **unbiased** (assuming $E[\mathbf{y}] = \mathbf{H}\boldsymbol{\theta}$).

**(Kay, Chapter 2.3.2)**

### 3.3 Covariance of the LSE

The covariance of the LSE is given by:

$Cov(\hat{\boldsymbol{\theta}}_{LS}) = E[(\hat{\boldsymbol{\theta}}_{LS} - E[\hat{\boldsymbol{\theta}}_{LS}])(\hat{\boldsymbol{\theta}}_{LS} - E[\hat{\boldsymbol{\theta}}_{LS}])^T]$
Since it's unbiased, $E[\hat{\boldsymbol{\theta}}_{LS}] = \boldsymbol{\theta}$:
$Cov(\hat{\boldsymbol{\theta}}_{LS}) = E[(\hat{\boldsymbol{\theta}}_{LS} - \boldsymbol{\theta})(\hat{\boldsymbol{\theta}}_{LS} - \boldsymbol{\theta})^T]$
$Cov(\hat{\boldsymbol{\theta}}_{LS}) = E[(\mathbf{H}^+\mathbf{y} - \mathbf{H}\boldsymbol{\theta})(\mathbf{H}^+\mathbf{y} - \mathbf{H}\boldsymbol{\theta})^T]$
$Cov(\hat{\boldsymbol{\theta}}_{LS}) = E[(\mathbf{H}^+(\mathbf{y} - \mathbf{H}\boldsymbol{\theta}))(\mathbf{H}^+(\mathbf{y} - \mathbf{H}\boldsymbol{\theta}))^T]$
Let $\mathbf{v} = \mathbf{y} - \mathbf{H}\boldsymbol{\theta}$, so $\mathbf{y} - \mathbf{H}\boldsymbol{\theta} = \mathbf{v}$.
$Cov(\hat{\boldsymbol{\theta}}_{LS}) = E[\mathbf{H}^+\mathbf{v} (\mathbf{H}^+\mathbf{v})^T]$
$Cov(\hat{\boldsymbol{\theta}}_{LS}) = E[\mathbf{H}^+\mathbf{v}\mathbf{v}^T (\mathbf{H}^+)^T]$
$Cov(\hat{\boldsymbol{\theta}}_{LS}) = \mathbf{H}^+ E[\mathbf{v}\mathbf{v}^T] (\mathbf{H}^+)^T$
$Cov(\hat{\boldsymbol{\theta}}_{LS}) = \mathbf{H}^+ \mathbf{R}_{\mathbf{v}} (\mathbf{H}^+)^T$

If the noise is white Gaussian with variance $\sigma^2$, so $\mathbf{R}_{\mathbf{v}} = \sigma^2\mathbf{I}$:
$Cov(\hat{\boldsymbol{\theta}}_{LS}) = \mathbf{H}^+ (\sigma^2\mathbf{I}) (\mathbf{H}^+)^T$
$Cov(\hat{\boldsymbol{\theta}}_{LS}) = \sigma^2 \mathbf{H}^+ (\mathbf{H}^+)^T$
Substituting $\mathbf{H}^+ = (\mathbf{H}^T\mathbf{H})^{-1}\mathbf{H}^T$:
$Cov(\hat{\boldsymbol{\theta}}_{LS}) = \sigma^2 (\mathbf{H}^T\mathbf{H})^{-1}\mathbf{H}^T (\mathbf{H}^T(\mathbf{H}^T\mathbf{H})^{-1})^T$
$Cov(\hat{\boldsymbol{\theta}}_{LS}) = \sigma^2 (\mathbf{H}^T\mathbf{H})^{-1}\mathbf{H}^T (\mathbf{H}^T((\mathbf{H}^T\mathbf{H})^{-1})^T)$
Since $\mathbf{H}^T\mathbf{H}$ is symmetric, $(\mathbf{H}^T\mathbf{H})^{-1}$ is also symmetric, so $((\mathbf{H}^T\mathbf{H})^{-1})^T = (\mathbf{H}^T\mathbf{H})^{-1}$.
$Cov(\hat{\boldsymbol{\theta}}_{LS}) = \sigma^2 (\mathbf{H}^T\mathbf{H})^{-1}\mathbf{H}^T \mathbf{H} (\mathbf{H}^T\mathbf{H})^{-1}$
$Cov(\hat{\boldsymbol{\theta}}_{LS}) = \sigma^2 (\mathbf{H}^T\mathbf{H})^{-1}$

**Key Result:** For white noise, $Cov(\hat{\boldsymbol{\theta}}_{LS}) = \sigma^2 (\mathbf{H}^T\mathbf{H})^{-1}$.

**(Kay, Chapter 2.3.3)**

### 3.4 Mean Squared Error (MSE) of the LSE

The MSE of an estimator is $MSE(\hat{\boldsymbol{\theta}}) = E[\|\hat{\boldsymbol{\theta}} - \boldsymbol{\theta}\|^2]$. For an unbiased estimator, $MSE(\hat{\boldsymbol{\theta}}) = trace(Cov(\hat{\boldsymbol{\theta}}))$.

For the LSE (which is unbiased), the MSE is:
$MSE(\hat{\boldsymbol{\theta}}_{LS}) = trace(Cov(\hat{\boldsymbol{\theta}}_{LS}))$
If noise is white:
$MSE(\hat{\boldsymbol{\theta}}_{LS}) = trace(\sigma^2 (\mathbf{H}^T\mathbf{H})^{-1}) = \sigma^2 \cdot trace((\mathbf{H}^T\mathbf{H})^{-1})$

**(Kay, Chapter 2.3.4)**

---

## 4. Weighted Least Squares (WLS)

When the noise is not white, meaning $E[\mathbf{v}\mathbf{v}^T] = \mathbf{R}_{\mathbf{v}} \neq \sigma^2\mathbf{I}$, the standard LSE is no longer optimal in terms of minimizing variance. Weighted Least Squares (WLS) is used in such cases.

### 4.1 The Principle of WLS

The idea is to transform the original linear model into one with white noise, or to minimize a weighted sum of squared errors.

Consider the transformation $\mathbf{y}' = \mathbf{L}\mathbf{y}$ and $\mathbf{H}' = \mathbf{L}\mathbf{H}$, where $\mathbf{L}$ is a matrix such that $\mathbf{L}\mathbf{R}_{\mathbf{v}}\mathbf{L}^T = \mathbf{I}$. This can be achieved by choosing $\mathbf{L}$ as the inverse of the Cholesky decomposition of $\mathbf{R}_{\mathbf{v}}$, or $\mathbf{L} = \mathbf{R}_{\mathbf{v}}^{-1/2}$.

The transformed model becomes:
$\mathbf{y}' = \mathbf{H}'\boldsymbol{\theta} + \mathbf{v}'$
where $\mathbf{v}' = \mathbf{L}\mathbf{v}$ and $E[\mathbf{v}'(\mathbf{v}')^T] = \mathbf{L}E[\mathbf{v}\mathbf{v}^T]\mathbf{L}^T = \mathbf{L}\mathbf{R}_{\mathbf{v}}\mathbf{L}^T = \mathbf{I}$.

Now, we can apply the standard LSE to this transformed model.

**(Kay, Chapter 2.4.1)**

### 4.2 The WLS Estimator Formula

Applying LSE to $\mathbf{y}' = \mathbf{H}'\boldsymbol{\theta} + \mathbf{v}'$:

$\hat{\boldsymbol{\theta}}_{WLS} = ((\mathbf{H}')^T\mathbf{H}')^{-1}(\mathbf{H}')^T\mathbf{y}'$
Substitute $\mathbf{H}' = \mathbf{L}\mathbf{H}$ and $\mathbf{y}' = \mathbf{L}\mathbf{y}$:
$\hat{\boldsymbol{\theta}}_{WLS} = ((\mathbf{L}\mathbf{H})^T (\mathbf{L}\mathbf{H}))^{-1}(\mathbf{L}\mathbf{H})^T (\mathbf{L}\mathbf{y})$
$\hat{\boldsymbol{\theta}}_{WLS} = (\mathbf{H}^T\mathbf{L}^T \mathbf{L}\mathbf{H})^{-1}\mathbf{H}^T\mathbf{L}^T \mathbf{L}\mathbf{y}$

Since $\mathbf{L}^T\mathbf{L} = \mathbf{R}_{\mathbf{v}}^{-1}$:
$\hat{\boldsymbol{\theta}}_{WLS} = (\mathbf{H}^T\mathbf{R}_{\mathbf{v}}^{-1}\mathbf{H})^{-1}\mathbf{H}^T\mathbf{R}_{\mathbf{v}}^{-1}\mathbf{y}$

This can also be viewed as minimizing the weighted squared error:
$J_w(\boldsymbol{\theta}) = (\mathbf{y} - \mathbf{H}\boldsymbol{\theta})^T \mathbf{R}_{\mathbf{v}}^{-1} (\mathbf{y} - \mathbf{H}\boldsymbol{\theta})$

**(Kay, Chapter 2.4.2)**

### 4.3 Properties of the WLS Estimator

*   **Unbiasedness:** Similar to LSE, WLS is unbiased: $E[\hat{\boldsymbol{\theta}}_{WLS}] = \boldsymbol{\theta}$.
*   **Covariance:** The covariance of the WLS estimator is:
    $Cov(\hat{\boldsymbol{\theta}}_{WLS}) = (\mathbf{H}^T\mathbf{R}_{\mathbf{v}}^{-1}\mathbf{H})^{-1}$

**(Kay, Chapter 2.4.3)**

### 4.4 Relationship to LSE

When $\mathbf{R}_{\mathbf{v}} = \sigma^2\mathbf{I}$, then $\mathbf{R}_{\mathbf{v}}^{-1} = \frac{1}{\sigma^2}\mathbf{I}$.
Substituting this into the WLS formula:
$\hat{\boldsymbol{\theta}}_{WLS} = (\mathbf{H}^T(\frac{1}{\sigma^2}\mathbf{I})\mathbf{H})^{-1}\mathbf{H}^T(\frac{1}{\sigma^2}\mathbf{I})\mathbf{y}$
$\hat{\boldsymbol{\theta}}_{WLS} = (\frac{1}{\sigma^2}\mathbf{H}^T\mathbf{H})^{-1}\frac{1}{\sigma^2}\mathbf{H}^T\mathbf{y}$
$\hat{\boldsymbol{\theta}}_{WLS} = \sigma^2(\mathbf{H}^T\mathbf{H})^{-1}\frac{1}{\sigma^2}\mathbf{H}^T\mathbf{y}$
$\hat{\boldsymbol{\theta}}_{WLS} = (\mathbf{H}^T\mathbf{H})^{-1}\mathbf{H}^T\mathbf{y} = \hat{\boldsymbol{\theta}}_{LS}$

Thus, LSE is a special case of WLS when the noise is white.

---

## 5. Generalized Least Squares (GLS)

GLS is a more general framework that encompasses both LSE and WLS. It's used when the noise vector $\mathbf{v}$ has a known, non-zero mean $E[\mathbf{v}] = \boldsymbol{\mu}_{\mathbf{v}}$ and a known covariance $\mathbf{R}_{\mathbf{v}}$.

### 5.1 The GLS Problem Formulation

The linear model can be written as:
$\mathbf{y} = \mathbf{H}\boldsymbol{\theta} + \mathbf{v}$
with $E[\mathbf{v}] = \boldsymbol{\mu}_{\mathbf{v}}$ and $E[\mathbf{v}\mathbf{v}^T] = \mathbf{R}_{\mathbf{v}}$.

We want to estimate $\boldsymbol{\theta}$ by minimizing a quadratic form of the residual.

**(Van Trees, Chapter 2.2.1)**

### 5.2 The GLS Estimator Formula

Similar to WLS, we can transform the model to have zero-mean, identity-covariance noise.
Let $\mathbf{y}^* = \mathbf{y} - \boldsymbol{\mu}_{\mathbf{v}}$ and $\mathbf{v}^* = \mathbf{v} - \boldsymbol{\mu}_{\mathbf{v}}$. Then $E[\mathbf{v}^*] = \mathbf{0}$ and $E[\mathbf{v}^*(\mathbf{v}^*)^T] = \mathbf{R}_{\mathbf{v}}$.

The model is $\mathbf{y}^* + \boldsymbol{\mu}_{\mathbf{v}} = \mathbf{H}\boldsymbol{\theta} + \mathbf{v}^* + \boldsymbol{\mu}_{\mathbf{v}}$, which simplifies to $\mathbf{y}^* = \mathbf{H}\boldsymbol{\theta} + \mathbf{v}^*$.

We apply WLS to this model:
$\hat{\boldsymbol{\theta}}_{GLS} = (\mathbf{H}^T\mathbf{R}_{\mathbf{v}}^{-1}\mathbf{H})^{-1}\mathbf{H}^T\mathbf{R}_{\mathbf{v}}^{-1}(\mathbf{y} - \boldsymbol{\mu}_{\mathbf{v}})$

**(Kay, Chapter 2.4.2 - Generalized Least Squares section, though not explicitly named GLS, the framework is the same when mean is non-zero)**
**(Van Trees, Chapter 2.2.1)**

### 5.3 Special Cases

*   **If $\boldsymbol{\mu}_{\mathbf{v}} = \mathbf{0}$:** GLS reduces to WLS.
*   **If $\boldsymbol{\mu}_{\mathbf{v}} = \mathbf{0}$ and $\mathbf{R}_{\mathbf{v}} = \sigma^2\mathbf{I}$:** GLS reduces to LSE.

---

## 6. Maximum Likelihood Estimation (MLE) for Linear Models

When the noise is assumed to be Gaussian, the Maximum Likelihood Estimator (MLE) for the linear model often coincides with the Least Squares Estimator.

### 6.1 Likelihood Function for Gaussian Noise

Assuming $\mathbf{y} = \mathbf{H}\boldsymbol{\theta} + \mathbf{v}$ and $\mathbf{v} \sim \mathcal{N}(\mathbf{0}, \mathbf{R}_{\mathbf{v}})$, the probability density function (PDF) of $\mathbf{y}$ is:

$p(\mathbf{y} | \boldsymbol{\theta}, \mathbf{H}, \mathbf{R}_{\mathbf{v}}) = \frac{1}{(2\pi)^{N/2}|\mathbf{R}_{\mathbf{v}}|^{1/2}} \exp\left(-\frac{1}{2}(\mathbf{y} - \mathbf{H}\boldsymbol{\theta})^T \mathbf{R}_{\mathbf{v}}^{-1} (\mathbf{y} - \mathbf{H}\boldsymbol{\theta})\right)$

The likelihood function $L(\boldsymbol{\theta})$ is this PDF viewed as a function of $\boldsymbol{\theta}$.

**(Kay, Chapter 2.5.1)**

### 6.2 Maximizing the Likelihood Function

To find the MLE, we maximize $L(\boldsymbol{\theta})$, which is equivalent to maximizing the log-likelihood function $\ln L(\boldsymbol{\theta})$.

$\ln L(\boldsymbol{\theta}) = -\frac{N}{2}\ln(2\pi) - \frac{1}{2}\ln|\mathbf{R}_{\mathbf{v}}| - \frac{1}{2}(\mathbf{y} - \mathbf{H}\boldsymbol{\theta})^T \mathbf{R}_{\mathbf{v}}^{-1} (\mathbf{y} - \mathbf{H}\boldsymbol{\theta})$

Maximizing $\ln L(\boldsymbol{\theta})$ is equivalent to minimizing the term:
$(\mathbf{y} - \mathbf{H}\boldsymbol{\theta})^T \mathbf{R}_{\mathbf{v}}^{-1} (\mathbf{y} - \mathbf{H}\boldsymbol{\theta})$

This is precisely the objective function for the **Weighted Least Squares (WLS)** estimator.

**(Kay, Chapter 2.5.2)**

### 6.3 The MLE Formula

Therefore, when the noise is Gaussian:

$\hat{\boldsymbol{\theta}}_{MLE} = \hat{\boldsymbol{\theta}}_{WLS} = (\mathbf{H}^T\mathbf{R}_{\mathbf{v}}^{-1}\mathbf{H})^{-1}\mathbf{H}^T\mathbf{R}_{\mathbf{v}}^{-1}\mathbf{y}$

**Special Case:** If the noise is white Gaussian ($\mathbf{R}_{\mathbf{v}} = \sigma^2\mathbf{I}$), then:
$\hat{\boldsymbol{\theta}}_{MLE} = \hat{\boldsymbol{\theta}}_{LS} = (\mathbf{H}^T\mathbf{H})^{-1}\mathbf{H}^T\mathbf{y}$

This shows that for Gaussian noise, the MLE for linear models is identical to the LS or WLS estimator.

**(Kay, Chapter 2.5.2)**

---

## 7. Properties of MLE (for Gaussian Noise)

Since MLE for Gaussian linear models is the same as WLS, it inherits its properties.

### 7.1 Unbiasedness

$\hat{\boldsymbol{\theta}}_{MLE}$ is unbiased.

### 7.2 Covariance

$Cov(\hat{\boldsymbol{\theta}}_{MLE}) = (\mathbf{H}^T\mathbf{R}_{\mathbf{v}}^{-1}\mathbf{H})^{-1}$

### 7.3 Efficiency (CRLB)

Under the assumption of Gaussian noise, the MLE is asymptotically efficient. This means that as the number of samples $N \to \infty$, its covariance approaches the **Cramér-Rao Lower Bound (CRLB)**. The CRLB provides a lower bound on the variance of any unbiased estimator.

The CRLB for $\boldsymbol{\theta}$ in the linear model $\mathbf{y} = \mathbf{H}\boldsymbol{\theta} + \mathbf{v}$ with $\mathbf{v} \sim \mathcal{N}(\mathbf{0}, \mathbf{R}_{\mathbf{v}})$ is:

$CRLB(\boldsymbol{\theta}) = (\mathbf{H}^T\mathbf{R}_{\mathbf{v}}^{-1}\mathbf{H})^{-1}$

Thus, $Cov(\hat{\boldsymbol{\theta}}_{MLE}) = CRLB(\boldsymbol{\theta})$ (asymptotically for MLE, exactly for WLS under Gaussian noise).

**(Kay, Chapter 2.5.3)**

---

## 8. Introduction to the Best Linear Unbiased Estimator (BLUE)

BLUE is an estimator that is linear in $\mathbf{y}$, is unbiased, and has the minimum covariance among all such estimators.

### 8.1 The Gauss-Markov Theorem

The Gauss-Markov theorem states that under the assumptions of the linear model (linearity, unbiasedness of noise, and finite variance of noise), the **Least Squares Estimator (LSE)** is the **Best Linear Unbiased Estimator (BLUE)**. "Best" in this context means it has the minimum variance among all linear unbiased estimators.

This theorem holds even if the noise is not Gaussian, as long as it has zero mean and finite, non-zero variance.

**(Kay, Chapter 2.3.5)**
**(Van Trees, Chapter 2.1.3)**

### 8.2 What BLUE means

*   **Linear:** $\hat{\boldsymbol{\theta}}_{BLUE} = \mathbf{A}\mathbf{y}$ for some matrix $\mathbf{A}$.
*   **Unbiased:** $E[\hat{\boldsymbol{\theta}}_{BLUE}] = \boldsymbol{\theta}$.
*   **Best:** $Cov(\hat{\boldsymbol{\theta}}_{BLUE}) \leq Cov(\hat{\boldsymbol{\theta}})$ for any other linear unbiased estimator $\hat{\boldsymbol{\theta}}$. The inequality is in the sense of positive semi-definiteness.

The LSE meets these criteria.

---

## 9. Practical Considerations and Extensions

### 9.1 Rank Deficiency in H

If the columns of $\mathbf{H}$ are linearly dependent (i.e., $\mathbf{H}^T\mathbf{H}$ is singular), the LSE is not uniquely defined. This is called **rank deficiency**.
*   **Solutions:**
    *   Use regularization techniques like Ridge Regression ($\mathbf{H}^T\mathbf{H} + \lambda\mathbf{I}$).
    *   Use Singular Value Decomposition (SVD) to find a minimum norm solution.
    *   Identify and remove redundant columns from $\mathbf{H}$.

**(Kay, Chapter 2.2.4)**

### 9.2 Unknown Noise Variance $\sigma^2$

In practice, the noise variance $\sigma^2$ (for white noise) or the entire covariance matrix $\mathbf{R}_{\mathbf{v}}$ might be unknown.
*   **Solutions:**
    *   **Estimate $\sigma^2$**: This can be done from the residuals of an initial LSE fit or from separate noise-only measurements. The estimated $\sigma^2$ is then used in the LSE formula.
    *   **Shorthand notation:** Often, the LSE formula is presented as $\hat{\boldsymbol{\theta}}_{LS} = (\mathbf{H}^T\mathbf{H})^{-1}\mathbf{H}^T\mathbf{y}$, implicitly assuming white noise with an unknown but common variance. The covariance is then $\sigma^2(\mathbf{H}^T\mathbf{H})^{-1}$.

**(Kay, Chapter 2.3.6)**

### 9.3 Non-Linear Models

This module focused on linear models. For non-linear models $\mathbf{y} = f(\boldsymbol{\theta}) + \mathbf{v}$, more complex estimation techniques like iterative methods (e.g., Gauss-Newton, Levenberg-Marquardt) are required, often involving linearization around an estimate.

**(Kay, Chapter 2.7)**

---

## Summary of Key Concepts

*   **Linear Model:** $\mathbf{y} = \mathbf{H}\boldsymbol{\theta} + \mathbf{v}$
*   **Least Squares Estimator (LSE):** Minimizes $\|\mathbf{y} - \mathbf{H}\boldsymbol{\theta}\|^2$. Formula: $\hat{\boldsymbol{\theta}}_{LS} = (\mathbf{H}^T\mathbf{H})^{-1}\mathbf{H}^T\mathbf{y}$.
*   **Properties of LSE (for white noise):** Unbiased, $Cov(\hat{\boldsymbol{\theta}}_{LS}) = \sigma^2 (\mathbf{H}^T\mathbf{H})^{-1}$.
*   **Weighted Least Squares (WLS):** Minimizes $(\mathbf{y} - \mathbf{H}\boldsymbol{\theta})^T \mathbf{R}_{\mathbf{v}}^{-1} (\mathbf{y} - \mathbf{H}\boldsymbol{\theta})$. Formula: $\hat{\boldsymbol{\theta}}_{WLS} = (\mathbf{H}^T\mathbf{R}_{\mathbf{v}}^{-1}\mathbf{H})^{-1}\mathbf{H}^T\mathbf{R}_{\mathbf{v}}^{-1}\mathbf{y}$.
*   **Properties of WLS:** Unbiased, $Cov(\hat{\boldsymbol{\theta}}_{WLS}) = (\mathbf{H}^T\mathbf{R}_{\mathbf{v}}^{-1}\mathbf{H})^{-1}$.
*   **Maximum Likelihood Estimator (MLE):** For Gaussian noise, MLE for linear models equals WLS.
*   **CRLB:** Lower bound on variance for unbiased estimators. For Gaussian linear models, $Cov(\hat{\boldsymbol{\theta}}_{MLE}) = CRLB(\boldsymbol{\theta})$.
*   **BLUE:** Best Linear Unbiased Estimator. LSE is the BLUE for linear models with unbiased noise (Gauss-Markov Theorem).

---

## Important Points to Remember

*   The invertibility of $\mathbf{H}^T\mathbf{H}$ is critical for the standard LSE formula.
*   The nature of the noise ($\mathbf{R}_{\mathbf{v}}$) dictates whether LSE or WLS is the optimal unbiased estimator in terms of minimum variance.
*   For Gaussian noise, MLE and WLS are identical, and they are asymptotically efficient.
*   The Gauss-Markov theorem guarantees that LSE is the best (minimum variance) among *linear unbiased* estimators, regardless of the noise distribution, as long as the noise is zero-mean with finite variance.

---

## Practice Questions

**Question 1 (CO1, K2):**
What are the essential components of a linear model in statistical estimation theory?

**Question 2 (CO2, K3):**
Given the linear model $\mathbf{y} = \mathbf{H}\boldsymbol{\theta} + \mathbf{v}$, where $\mathbf{H} = \begin{bmatrix} 1 & 2 \\ 1 & 3 \end{bmatrix}$, $\mathbf{y} = \begin{bmatrix} 5 \\ 7 \end{bmatrix}$, and the noise $\mathbf{v}$ is white with variance $\sigma^2$. Calculate the Least Squares Estimate $\hat{\boldsymbol{\theta}}_{LS}$.

**Question 3 (CO2, K3):**
Consider the data points $(x_1, y_1) = (1, 3)$ and $(x_2, y_2) = (2, 5)$. We assume a linear model $y_i = \theta_1 x_i + \theta_0 + v_i$.
(a) Write this in the vector form $\mathbf{y} = \mathbf{H}\boldsymbol{\theta} + \mathbf{v}$.
(b) Calculate the LSE for $\boldsymbol{\theta} = \begin{bmatrix} \theta_0 \\ \theta_1 \end{bmatrix}$.

**Question 4 (CO1, K2):**
Under what conditions does the Maximum Likelihood Estimator (MLE) for a linear model coincide with the Least Squares Estimator (LSE)?

**Question 5 (CO2, K3):**
Suppose we have the model $\mathbf{y} = \mathbf{h}\theta + \mathbf{v}$ where $\mathbf{h} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$ and $\mathbf{v}$ has a known covariance $\mathbf{R}_{\mathbf{v}} = \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}$. If $\mathbf{y} = \begin{bmatrix} 3 \\ 5 \end{bmatrix}$, calculate the Weighted Least Squares (WLS) estimate $\hat{\theta}_{WLS}$.

---

## Answers to Practice Questions

**Answer 1:**
The essential components of a linear model are:
*   An observed data vector $\mathbf{y}$.
*   An unknown parameter vector $\boldsymbol{\theta}$ to be estimated.
*   A known model matrix $\mathbf{H}$ relating $\mathbf{y}$ and $\boldsymbol{\theta}$.
*   A noise vector $\mathbf{v}$ representing uncertainties, often assumed to have zero mean and a known covariance.
The model is expressed as $\mathbf{y} = \mathbf{H}\boldsymbol{\theta} + \mathbf{v}$.

**Answer 2:**
$\mathbf{H} = \begin{bmatrix} 1 & 2 \\ 1 & 3 \end{bmatrix}$, $\mathbf{y} = \begin{bmatrix} 5 \\ 7 \end{bmatrix}$.
$\mathbf{H}^T\mathbf{H} = \begin{bmatrix} 1 & 1 \\ 2 & 3 \end{bmatrix} \begin{bmatrix} 1 & 2 \\ 1 & 3 \end{bmatrix} = \begin{bmatrix} 1+1 & 2+3 \\ 2+3 & 4+9 \end{bmatrix} = \begin{bmatrix} 2 & 5 \\ 5 & 13 \end{bmatrix}$.
$(\mathbf{H}^T\mathbf{H})^{-1} = \frac{1}{(2 \cdot 13 - 5 \cdot 5)} \begin{bmatrix} 13 & -5 \\ -5 & 2 \end{bmatrix} = \frac{1}{1} \begin{bmatrix} 13 & -5 \\ -5 & 2 \end{bmatrix} = \begin{bmatrix} 13 & -5 \\ -5 & 2 \end{bmatrix}$.
$\mathbf{H}^T\mathbf{y} = \begin{bmatrix} 1 & 1 \\ 2 & 3 \end{bmatrix} \begin{bmatrix} 5 \\ 7 \end{bmatrix} = \begin{bmatrix} 5+7 \\ 10+21 \end{bmatrix} = \begin{bmatrix} 12 \\ 31 \end{bmatrix}$.
$\hat{\boldsymbol{\theta}}_{LS} = (\mathbf{H}^T\mathbf{H})^{-1}\mathbf{H}^T\mathbf{y} = \begin{bmatrix} 13 & -5 \\ -5 & 2 \end{bmatrix} \begin{bmatrix} 12 \\ 31 \end{bmatrix} = \begin{bmatrix} 13 \cdot 12 - 5 \cdot 31 \\ -5 \cdot 12 + 2 \cdot 31 \end{bmatrix} = \begin{bmatrix} 156 - 155 \\ -60 + 62 \end{bmatrix} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$.
So, $\hat{\boldsymbol{\theta}}_{LS} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$.

**Answer 3:**
(a) $\mathbf{y} = \begin{bmatrix} 3 \\ 5 \end{bmatrix}$, $\boldsymbol{\theta} = \begin{bmatrix} \theta_0 \\ \theta_1 \end{bmatrix}$.
The model for $i=1$ is $y_1 = \theta_1 x_1 + \theta_0 + v_1 = \theta_0 + \theta_1 (1) + v_1$.
The model for $i=2$ is $y_2 = \theta_1 x_2 + \theta_0 + v_2 = \theta_0 + \theta_1 (2) + v_2$.
In vector form: $\begin{bmatrix} 3 \\ 5 \end{bmatrix} = \begin{bmatrix} 1 & 1 \\ 1 & 2 \end{bmatrix} \begin{bmatrix} \theta_0 \\ \theta_1 \end{bmatrix} + \begin{bmatrix} v_1 \\ v_2 \end{bmatrix}$.
So, $\mathbf{y} = \begin{bmatrix} 3 \\ 5 \end{bmatrix}$, $\mathbf{H} = \begin{bmatrix} 1 & 1 \\ 1 & 2 \end{bmatrix}$, $\boldsymbol{\theta} = \begin{bmatrix} \theta_0 \\ \theta_1 \end{bmatrix}$.

(b) $\mathbf{H}^T\mathbf{H} = \begin{bmatrix} 1 & 1 \\ 1 & 2 \end{bmatrix} \begin{bmatrix} 1 & 1 \\ 1 & 2 \end{bmatrix} = \begin{bmatrix} 1+1 & 1+2 \\ 1+2 & 1+4 \end{bmatrix} = \begin{bmatrix} 2 & 3 \\ 3 & 5 \end{bmatrix}$.
$(\mathbf{H}^T\mathbf{H})^{-1} = \frac{1}{2 \cdot 5 - 3 \cdot 3} \begin{bmatrix} 5 & -3 \\ -3 & 2 \end{bmatrix} = \frac{1}{1} \begin{bmatrix} 5 & -3 \\ -3 & 2 \end{bmatrix} = \begin{bmatrix} 5 & -3 \\ -3 & 2 \end{bmatrix}$.
$\mathbf{H}^T\mathbf{y} = \begin{bmatrix} 1 & 1 \\ 1 & 2 \end{bmatrix} \begin{bmatrix} 3 \\ 5 \end{bmatrix} = \begin{bmatrix} 3+5 \\ 3+10 \end{bmatrix} = \begin{bmatrix} 8 \\ 13 \end{bmatrix}$.
$\hat{\boldsymbol{\theta}}_{LS} = (\mathbf{H}^T\mathbf{H})^{-1}\mathbf{H}^T\mathbf{y} = \begin{bmatrix} 5 & -3 \\ -3 & 2 \end{bmatrix} \begin{bmatrix} 8 \\ 13 \end{bmatrix} = \begin{bmatrix} 5 \cdot 8 - 3 \cdot 13 \\ -3 \cdot 8 + 2 \cdot 13 \end{bmatrix} = \begin{bmatrix} 40 - 39 \\ -24 + 26 \end{bmatrix} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$.
So, $\hat{\theta}_0 = 1$ and $\hat{\theta}_1 = 2$.

**Answer 4:**
The MLE for a linear model coincides with the LSE (or WLS) when the noise vector $\mathbf{v}$ is assumed to have a **Gaussian distribution**.

**Answer 5:**
$\mathbf{y} = \begin{bmatrix} 3 \\ 5 \end{bmatrix}$, $\mathbf{h} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$, $\mathbf{R}_{\mathbf{v}} = \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}$.
We need $\mathbf{R}_{\mathbf{v}}^{-1}$. The determinant is $2 \cdot 2 - 1 \cdot 1 = 3$.
$\mathbf{R}_{\mathbf{v}}^{-1} = \frac{1}{3} \begin{bmatrix} 2 & -1 \\ -1 & 2 \end{bmatrix}$.
$\hat{\theta}_{WLS} = (\mathbf{h}^T\mathbf{R}_{\mathbf{v}}^{-1}\mathbf{h})^{-1}\mathbf{h}^T\mathbf{R}_{\mathbf{v}}^{-1}\mathbf{y}$.
$\mathbf{h}^T\mathbf{R}_{\mathbf{v}}^{-1}\mathbf{h} = \begin{bmatrix} 1 & 2 \end{bmatrix} \frac{1}{3} \begin{bmatrix} 2 & -1 \\ -1 & 2 \end{bmatrix} \begin{bmatrix} 1 \\ 2 \end{bmatrix} = \frac{1}{3} \begin{bmatrix} 1 & 2 \end{bmatrix} \begin{bmatrix} 2 - 2 \\ -1 + 4 \end{bmatrix} = \frac{1}{3} \begin{bmatrix} 1 & 2 \end{bmatrix} \begin{bmatrix} 0 \\ 3 \end{bmatrix} = \frac{1}{3} (0 + 6) = 2$.
So, $(\mathbf{h}^T\mathbf{R}_{\mathbf{v}}^{-1}\mathbf{h})^{-1} = (2)^{-1} = \frac{1}{2}$.
$\mathbf{h}^T\mathbf{R}_{\mathbf{v}}^{-1}\mathbf{y} = \begin{bmatrix} 1 & 2 \end{bmatrix} \frac{1}{3} \begin{bmatrix} 2 & -1 \\ -1 & 2 \end{bmatrix} \begin{bmatrix} 3 \\ 5 \end{bmatrix} = \frac{1}{3} \begin{bmatrix} 1 & 2 \end{bmatrix} \begin{bmatrix} 2 \cdot 3 - 1 \cdot 5 \\ -1 \cdot 3 + 2 \cdot 5 \end{bmatrix} = \frac{1}{3} \begin{bmatrix} 1 & 2 \end{bmatrix} \begin{bmatrix} 6 - 5 \\ -3 + 10 \end{bmatrix} = \frac{1}{3} \begin{bmatrix} 1 & 2 \end{bmatrix} \begin{bmatrix} 1 \\ 7 \end{bmatrix} = \frac{1}{3} (1 + 14) = \frac{15}{3} = 5$.
$\hat{\theta}_{WLS} = (\frac{1}{2}) \cdot 5 = \frac{5}{2} = 2.5$.

---

This concludes Module 1 on Linear Models in Statistical Estimation Theory. The next module will build upon these concepts to explore the performance of estimators.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
