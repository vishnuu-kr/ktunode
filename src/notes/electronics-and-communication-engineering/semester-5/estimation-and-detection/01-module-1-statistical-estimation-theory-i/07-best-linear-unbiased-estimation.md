---
title: "best linear unbiased estimation"
subject: "ESTIMATION AND DETECTION"
module: "Module 1: Statistical Estimation Theory I"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780febca"
status: "completed"
scrapedAt: "2026-05-23T17:56:43.145Z"
---
# ESTIMATION AND DETECTION: Module 1 - Statistical Estimation Theory I

## Topic: Best Linear Unbiased Estimation (BLUE)

---

### 1. Introduction to Estimation Theory

Estimation theory is a branch of statistical inference that deals with estimating unknown parameters of a statistical model from observed data. In many engineering applications, we encounter situations where we need to determine the true value of a quantity based on noisy measurements.

**Key Concepts:**

*   **Parameter ($\theta$):** An unknown, fixed value that we wish to estimate. It can be a single value or a vector of values.
*   **Observation ($Y$):** The data collected, which is a function of the parameter and noise. Often represented as a random variable or a set of random variables.
*   **Estimator ($\hat{\theta}$):** A function of the observed data that provides an estimate of the true parameter.
*   **Estimation Error:** The difference between the estimated parameter and the true parameter ($\hat{\theta} - \theta$).

**Learning Outcome Alignment:**

*   **CO1 (K2):** Summarize the fundamentals of statistical estimation principles used in various engineering problems. (This section introduces the core problem of estimation.)

**Textbook References:**

*   Kay, S.M. (2010). *Fundamentals of Statistical Signal Processing, Vol I: Estimation Theory*. Pearson. (Chapter 1)

---

### 2. Properties of Estimators

When evaluating estimators, we look for desirable properties that make them "good." These properties help us choose the most suitable estimator for a given problem.

**Key Concepts:**

*   **Unbiasedness:** An estimator $\hat{\theta}$ is unbiased if its expected value is equal to the true parameter.
    *   **Definition:** $E[\hat{\theta}] = \theta$
    *   **Bias:** $b(\hat{\theta}) = E[\hat{\theta}] - \theta$
    *   An unbiased estimator has zero bias.

*   **Efficiency:** An estimator is efficient if it has the minimum variance among all estimators of a certain class (e.g., unbiased estimators).
    *   **Minimum Variance Unbiased (MVU) Estimator:** The unbiased estimator with the smallest variance.

*   **Consistency:** An estimator is consistent if it converges in probability to the true parameter as the amount of data increases.
    *   **Definition:** $\lim_{N \to \infty} P(|\hat{\theta}_N - \theta| < \epsilon) = 1$ for any $\epsilon > 0$, where $N$ is the number of observations.

**Learning Outcome Alignment:**

*   **CO1 (K2):** Summarize the fundamentals of statistical estimation principles used in various engineering problems. (This section describes key criteria for evaluating estimators.)

**Textbook References:**

*   Kay, S.M. (2010). *Fundamentals of Statistical Signal Processing, Vol I: Estimation Theory*. Pearson. (Chapter 2)

---

### 3. Best Linear Unbiased Estimation (BLUE)

BLUE is a specific type of estimator that focuses on estimators that are linear functions of the observations and are unbiased. It's particularly useful when we cannot assume a specific probability distribution for the observations (non-parametric).

**3.1 Definition of a Linear Estimator**

A linear estimator is an estimator that is a linear combination of the observed data. If our observations are a vector $Y = [y_1, y_2, \dots, y_N]^T$, a linear estimator for a scalar parameter $\theta$ can be expressed as:

$\hat{\theta} = w^T Y = w_1 y_1 + w_2 y_2 + \dots + w_N y_N$

where $w = [w_1, w_2, \dots, w_N]^T$ is a vector of weighting coefficients.

**3.2 Requirement for Unbiasedness in Linear Estimators**

For a linear estimator $\hat{\theta} = w^T Y$ to be unbiased, its expected value must equal the true parameter $\theta$. Let's assume the observations $Y$ can be modeled as:

$Y = \mu + V$

where $\mu$ is the expected value of $Y$ (which may depend on $\theta$) and $V$ is a zero-mean random vector representing the noise.

If the expectation of $Y$ is linearly related to $\theta$, i.e., $E[Y] = a \theta$, where $a$ is a known vector, then for $\hat{\theta}$ to be unbiased:

$E[\hat{\theta}] = E[w^T Y] = w^T E[Y] = w^T (a \theta) = (w^T a) \theta$

For this to equal $\theta$, we must have:

$w^T a = 1$

This is the unbiasedness constraint for a linear estimator of a parameter $\theta$ when $E[Y] = a \theta$.

**Example:**
Suppose we want to estimate the mean signal strength $\theta$ from $N$ noisy measurements:
$y_i = \theta + v_i$, for $i = 1, \dots, N$.
In vector form, $Y = \mathbf{1}\theta + V$, where $\mathbf{1} = [1, 1, \dots, 1]^T$.
A linear estimator is $\hat{\theta} = w^T Y = \sum w_i y_i$.
For unbiasedness: $E[\hat{\theta}] = w^T E[Y] = w^T (\mathbf{1}\theta) = (w^T \mathbf{1})\theta$.
So, we need $w^T \mathbf{1} = 1$, which means $\sum w_i = 1$.

**3.3 Minimizing the Variance of a Linear Unbiased Estimator**

Among all linear unbiased estimators, the BLUE is the one that minimizes the variance. The variance of a linear estimator $\hat{\theta} = w^T Y$ is given by:

$Var(\hat{\theta}) = Var(w^T Y) = w^T C_Y w$

where $C_Y = E[(Y - E[Y])(Y - E[Y])^T]$ is the covariance matrix of $Y$.

Our problem is to minimize $w^T C_Y w$ subject to the linear constraint $w^T a = 1$.

**Using Lagrange Multipliers:**
We want to minimize $f(w) = w^T C_Y w$ subject to $g(w) = w^T a - 1 = 0$.
The Lagrangian is $L(w, \lambda) = w^T C_Y w - \lambda (w^T a - 1)$.
Taking the gradient with respect to $w$ and setting it to zero:
$\frac{\partial L}{\partial w} = 2 C_Y w - \lambda a = 0 \implies C_Y w = \frac{\lambda}{2} a$

If $C_Y$ is invertible, we can write:
$w = \frac{\lambda}{2} C_Y^{-1} a$

Now, we use the constraint $w^T a = 1$ to find $\lambda$:
$(\frac{\lambda}{2} C_Y^{-1} a)^T a = 1$
$\frac{\lambda}{2} a^T (C_Y^{-1})^T a = 1$
Since $C_Y$ is symmetric, $C_Y^{-1}$ is also symmetric, so $(C_Y^{-1})^T = C_Y^{-1}$:
$\frac{\lambda}{2} a^T C_Y^{-1} a = 1$
$\frac{\lambda}{2} = \frac{1}{a^T C_Y^{-1} a}$

Substituting this back into the expression for $w$:
$w_{BLUE} = \frac{1}{a^T C_Y^{-1} a} C_Y^{-1} a$

The BLUE estimator is then:
$\hat{\theta}_{BLUE} = w_{BLUE}^T Y = \left(\frac{1}{a^T C_Y^{-1} a} C_Y^{-1} a\right)^T Y = \frac{a^T (C_Y^{-1})^T}{a^T C_Y^{-1} a} Y = \frac{a^T C_Y^{-1}}{a^T C_Y^{-1} a} Y$
$\hat{\theta}_{BLUE} = \frac{a^T C_Y^{-1} Y}{a^T C_Y^{-1} a}$

**Minimum Variance of the BLUE:**
The minimum variance is $Var(\hat{\theta}_{BLUE}) = w_{BLUE}^T C_Y w_{BLUE}$:
$Var(\hat{\theta}_{BLUE}) = \left(\frac{1}{a^T C_Y^{-1} a} C_Y^{-1} a\right)^T C_Y \left(\frac{1}{a^T C_Y^{-1} a} C_Y^{-1} a\right)$
$Var(\hat{\theta}_{BLUE}) = \frac{1}{(a^T C_Y^{-1} a)^2} a^T (C_Y^{-1})^T C_Y C_Y^{-1} a$
$Var(\hat{\theta}_{BLUE}) = \frac{1}{(a^T C_Y^{-1} a)^2} a^T C_Y^{-1} C_Y C_Y^{-1} a$
$Var(\hat{\theta}_{BLUE}) = \frac{1}{(a^T C_Y^{-1} a)^2} a^T C_Y^{-1} a = \frac{1}{a^T C_Y^{-1} a}$

**Important Property: Gauss-Markov Theorem**
The Gauss-Markov theorem states that the BLUE is the minimum variance *unbiased* estimator within the class of *linear* estimators. It does *not* claim that the BLUE is the MVU estimator among *all* unbiased estimators (which might be non-linear). The BLUE does not require assumptions about the distribution of the noise (e.g., Gaussian), only that the noise has zero mean and a known covariance matrix.

**Learning Outcome Alignment:**

*   **CO1 (K2):** Summarize the fundamentals of statistical estimation principles used in various engineering problems. (Introduces BLUE as a method to find optimal estimators under specific constraints.)
*   **CO2 (K3):** Apply different types of estimation algorithms in engineering applications. (The derivation and formula for BLUE can be applied.)

**Textbook References:**

*   Kay, S.M. (2010). *Fundamentals of Statistical Signal Processing, Vol I: Estimation Theory*. Pearson. (Chapter 3, Section 3.3)
*   Van Trees, H.L. (2001). *Detection, Estimation, and Modulation Theory, Vol. I*. John Wiley & Sons. (Chapter 1, Section 1.3.2)
*   Hayes, M.H. (2018). *Statistical Digital Signal Processing and Modelling*. John Wiley & Sons. (Chapter 3, Section 3.2)

---

### 4. Example: Estimating the Mean of Noisy Data

Consider $N$ independent noisy measurements of a constant signal $\theta$:

$y_i = \theta + v_i$, for $i = 1, \dots, N$

where $v_i$ are zero-mean, uncorrelated noise samples with variance $\sigma^2$.

**Objective:** Find the BLUE of $\theta$.

**1. Model Formulation:**
Vector of observations: $Y = [y_1, y_2, \dots, y_N]^T$.
Expected value of $Y$: $E[Y] = [\theta, \theta, \dots, \theta]^T = \mathbf{1}\theta$, where $\mathbf{1} = [1, 1, \dots, 1]^T$.
Here, $a = \mathbf{1}$.

**2. Covariance Matrix of Y:**
Since $v_i$ are uncorrelated with variance $\sigma^2$, the covariance matrix $C_V$ of the noise vector $V = [v_1, \dots, v_N]^T$ is:
$C_V = \begin{bmatrix} \sigma^2 & 0 & \dots & 0 \\ 0 & \sigma^2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \sigma^2 \end{bmatrix} = \sigma^2 I_N$
where $I_N$ is the $N \times N$ identity matrix.

The covariance matrix of $Y$ is $C_Y = E[(Y - E[Y])(Y - E[Y])^T] = E[V V^T] = C_V = \sigma^2 I_N$.

**3. Applying the BLUE Formula:**
We need to compute $w_{BLUE}$ and $\hat{\theta}_{BLUE}$.
The constraint vector is $a = \mathbf{1}$.
The inverse of the covariance matrix is $C_Y^{-1} = (\sigma^2 I_N)^{-1} = \frac{1}{\sigma^2} I_N$.

First, calculate $a^T C_Y^{-1} a$:
$a^T C_Y^{-1} a = \mathbf{1}^T \left(\frac{1}{\sigma^2} I_N\right) \mathbf{1} = \frac{1}{\sigma^2} \mathbf{1}^T \mathbf{1} = \frac{1}{\sigma^2} (1 \cdot 1 + \dots + 1 \cdot 1) = \frac{N}{\sigma^2}$.

Now, calculate $C_Y^{-1} a$:
$C_Y^{-1} a = \frac{1}{\sigma^2} I_N \mathbf{1} = \frac{1}{\sigma^2} \mathbf{1}$.

The BLUE weight vector is:
$w_{BLUE} = \frac{1}{a^T C_Y^{-1} a} C_Y^{-1} a = \frac{1}{N/\sigma^2} \left(\frac{1}{\sigma^2} \mathbf{1}\right) = \frac{\sigma^2}{N} \frac{1}{\sigma^2} \mathbf{1} = \frac{1}{N} \mathbf{1}$.
So, $w_{BLUE} = [\frac{1}{N}, \frac{1}{N}, \dots, \frac{1}{N}]^T$.

The BLUE estimator is:
$\hat{\theta}_{BLUE} = w_{BLUE}^T Y = \left[\frac{1}{N}, \dots, \frac{1}{N}\right] \begin{bmatrix} y_1 \\ \vdots \\ y_N \end{bmatrix} = \frac{1}{N} \sum_{i=1}^N y_i$.

This is simply the sample mean.

**Verification of Properties:**
*   **Unbiasedness:** $E[\hat{\theta}_{BLUE}] = E[\frac{1}{N} \sum y_i] = \frac{1}{N} \sum E[y_i] = \frac{1}{N} \sum \theta = \frac{1}{N} (N\theta) = \theta$. The estimator is unbiased.
*   **Variance:** $Var(\hat{\theta}_{BLUE}) = Var(\frac{1}{N} \sum y_i) = \frac{1}{N^2} Var(\sum y_i)$. Since $y_i$ are uncorrelated, $Var(\sum y_i) = \sum Var(y_i) = \sum \sigma^2 = N \sigma^2$.
    $Var(\hat{\theta}_{BLUE}) = \frac{1}{N^2} (N \sigma^2) = \frac{\sigma^2}{N}$.
    Using the variance formula derived earlier: $Var(\hat{\theta}_{BLUE}) = \frac{1}{a^T C_Y^{-1} a} = \frac{1}{N/\sigma^2} = \frac{\sigma^2}{N}$. The variance matches.

**Learning Outcome Alignment:**

*   **CO2 (K3):** Apply different types of estimation algorithms in engineering applications. (This example demonstrates applying the BLUE to a common problem.)

---

### 5. Example: Weighted Least Squares (Related to BLUE)

Consider measurements with *unequal* variances and correlation. Suppose we have $N$ observations:

$y_i = \theta + v_i$, for $i = 1, \dots, N$

where $E[v_i] = 0$ and $Var(v_i) = \sigma_i^2$. The noise samples are uncorrelated.
The covariance matrix $C_Y$ is a diagonal matrix:
$C_Y = \begin{bmatrix} \sigma_1^2 & 0 & \dots & 0 \\ 0 & \sigma_2^2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \sigma_N^2 \end{bmatrix}$

We want to find the BLUE of $\theta$.
Again, $a = \mathbf{1}$.
$C_Y^{-1} = \begin{bmatrix} 1/\sigma_1^2 & 0 & \dots & 0 \\ 0 & 1/\sigma_2^2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & 1/\sigma_N^2 \end{bmatrix}$.

Calculate $a^T C_Y^{-1} a$:
$a^T C_Y^{-1} a = \mathbf{1}^T C_Y^{-1} \mathbf{1} = \sum_{i=1}^N \frac{1}{\sigma_i^2}$.

Calculate $C_Y^{-1} a$:
$C_Y^{-1} a = C_Y^{-1} \mathbf{1} = \left[\frac{1}{\sigma_1^2}, \frac{1}{\sigma_2^2}, \dots, \frac{1}{\sigma_N^2}\right]^T$.

The BLUE weight vector is:
$w_{BLUE} = \frac{1}{\sum_{i=1}^N (1/\sigma_i^2)} \left[\frac{1}{\sigma_1^2}, \frac{1}{\sigma_2^2}, \dots, \frac{1}{\sigma_N^2}\right]^T$.

The BLUE estimator is:
$\hat{\theta}_{BLUE} = w_{BLUE}^T Y = \frac{\sum_{i=1}^N (y_i/\sigma_i^2)}{\sum_{i=1}^N (1/\sigma_i^2)}$.

This is a weighted average of the observations, where observations with smaller variances (higher precision) get larger weights. This is conceptually similar to weighted least squares.

**Learning Outcome Alignment:**

*   **CO2 (K3):** Apply different types of estimation algorithms in engineering applications. (Shows how BLUE handles varying noise levels.)

---

### 6. Vector Parameter Estimation

The BLUE framework can be extended to estimate a vector parameter $\theta = [\theta_1, \dots, \theta_p]^T$.
The model becomes $Y = A \theta + V$, where $A$ is an $N \times p$ matrix.
The unbiasedness constraint is $E[w^T Y] = \theta$.
$E[w^T Y] = w^T E[Y] = w^T A \theta$.
For this to equal $\theta$, we need $w^T A = I_p$ (the $p \times p$ identity matrix).
Here, $w$ is an $N \times p$ matrix.

The problem is to minimize $Var(\hat{\theta})$, which for a vector parameter is often characterized by the determinant or trace of its covariance matrix $C_{\hat{\theta}}$. If we want to minimize the trace of the covariance matrix, $tr(C_{\hat{\theta}})$, where $C_{\hat{\theta}} = w^T C_Y w$:

The solution for $w$ that minimizes $tr(w^T C_Y w)$ subject to $w^T A = I_p$ leads to the BLUE estimator for the vector parameter:

$\hat{\theta}_{BLUE} = (A^T C_Y^{-1} A)^{-1} A^T C_Y^{-1} Y$

The covariance matrix of the BLUE is:
$C_{\hat{\theta}_{BLUE}} = (A^T C_Y^{-1} A)^{-1}$

**Key Concepts:**

*   **Matrix Parameter:** Estimating multiple parameters simultaneously.
*   **Linear Model:** Observations are a linear function of the parameters plus noise.

**Learning Outcome Alignment:**

*   **CO1 (K2):** Summarize the fundamentals of statistical estimation principles used in various engineering problems. (Extends estimation to vector parameters.)
*   **CO2 (K3):** Apply different types of estimation algorithms in engineering applications. (The formula for vector BLUE is applicable.)

**Textbook References:**

*   Kay, S.M. (2010). *Fundamentals of Statistical Signal Processing, Vol I: Estimation Theory*. Pearson. (Chapter 3, Section 3.3.2)
*   Van Trees, H.L. (2001). *Detection, Estimation, and Modulation Theory, Vol. I*. John Wiley & Sons. (Chapter 1, Section 1.3.2)

---

### 7. Relationship to Other Estimators

*   **Maximum Likelihood Estimator (MLE):** If the noise is Gaussian and the model is linear, the MLE of the parameters is often the same as the BLUE. However, BLUE does not require Gaussian noise.
*   **Least Squares Estimator:** If $C_Y = \sigma^2 I_N$, then the BLUE reduces to the Ordinary Least Squares (OLS) estimator. If $C_Y$ is known but not $\sigma^2 I_N$, then BLUE is equivalent to Generalized Least Squares (GLS).

**Important Points to Remember:**

*   BLUE provides the best (minimum variance) *linear* *unbiased* estimator.
*   It does not require knowledge of the probability distribution of the observations, only the mean (which depends on $\theta$) and the covariance matrix.
*   The Gauss-Markov theorem guarantees optimality within the linear unbiased class.
*   If the noise is white and has equal variance, BLUE simplifies to the sample mean for estimating a scalar mean.
*   If noise has unequal variances or is correlated, BLUE incorporates this information through the covariance matrix.

---

### 8. Practice Questions

**Question 1:**
Suppose you have $N$ measurements $y_i = \theta + v_i$, where $v_i$ are zero-mean noise with variance $\sigma_i^2$, and $v_i$ are uncorrelated. Derive the BLUE for $\theta$.

**Answer 1:**
As shown in Section 5, the observations are $y_i = \theta + v_i$.
The model is $Y = \mathbf{1}\theta + V$.
$a = \mathbf{1}$.
$C_Y = diag(\sigma_1^2, \dots, \sigma_N^2)$.
$C_Y^{-1} = diag(1/\sigma_1^2, \dots, 1/\sigma_N^2)$.

$a^T C_Y^{-1} a = \sum_{i=1}^N \frac{1}{\sigma_i^2}$.
$C_Y^{-1} a = \left[\frac{1}{\sigma_1^2}, \dots, \frac{1}{\sigma_N^2}\right]^T$.

$\hat{\theta}_{BLUE} = \frac{a^T C_Y^{-1} Y}{a^T C_Y^{-1} a} = \frac{\sum_{i=1}^N (y_i/\sigma_i^2)}{\sum_{i=1}^N (1/\sigma_i^2)}$.

**Question 2:**
Consider the following measurements:
$y_1 = \theta_1 + \theta_2 + v_1$
$y_2 = \theta_1 - \theta_2 + v_2$
where $E[v_1] = E[v_2] = 0$ and $Cov(V) = \begin{bmatrix} 2 & 1 \\ 1 & 3 \end{bmatrix}$.
Find the BLUE for the vector parameter $\theta = [\theta_1, \theta_2]^T$.

**Answer 2:**
The model is $Y = A \theta + V$.
$Y = \begin{bmatrix} y_1 \\ y_2 \end{bmatrix}$, $\theta = \begin{bmatrix} \theta_1 \\ \theta_2 \end{bmatrix}$.
The matrix $A$ relates $Y$ to $\theta$:
$A = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$.

The covariance matrix of $Y$ is $C_Y = \begin{bmatrix} 2 & 1 \\ 1 & 3 \end{bmatrix}$.
We need to find $C_Y^{-1}$:
$det(C_Y) = (2)(3) - (1)(1) = 6 - 1 = 5$.
$C_Y^{-1} = \frac{1}{5} \begin{bmatrix} 3 & -1 \\ -1 & 2 \end{bmatrix}$.

Now, calculate $A^T C_Y^{-1} A$:
$A^T = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$.
$A^T C_Y^{-1} = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix} \frac{1}{5} \begin{bmatrix} 3 & -1 \\ -1 & 2 \end{bmatrix} = \frac{1}{5} \begin{bmatrix} (3-1) & (-1+2) \\ (3+1) & (-1-2) \end{bmatrix} = \frac{1}{5} \begin{bmatrix} 2 & 1 \\ 4 & -3 \end{bmatrix}$.

$A^T C_Y^{-1} A = \frac{1}{5} \begin{bmatrix} 2 & 1 \\ 4 & -3 \end{bmatrix} \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix} = \frac{1}{5} \begin{bmatrix} (2+1) & (2-1) \\ (4-3) & (4+3) \end{bmatrix} = \frac{1}{5} \begin{bmatrix} 3 & 1 \\ 1 & 7 \end{bmatrix}$.

Next, find $(A^T C_Y^{-1} A)^{-1}$:
$det(A^T C_Y^{-1} A) = \frac{1}{25} ((3)(7) - (1)(1)) = \frac{1}{25} (21 - 1) = \frac{20}{25} = \frac{4}{5}$.
$(A^T C_Y^{-1} A)^{-1} = \frac{5}{4} \frac{1}{5} \begin{bmatrix} 7 & -1 \\ -1 & 3 \end{bmatrix} = \frac{1}{4} \begin{bmatrix} 7 & -1 \\ -1 & 3 \end{bmatrix}$.

Now, calculate $A^T C_Y^{-1} Y$:
$A^T C_Y^{-1} Y = \frac{1}{5} \begin{bmatrix} 2 & 1 \\ 4 & -3 \end{bmatrix} \begin{bmatrix} y_1 \\ y_2 \end{bmatrix} = \frac{1}{5} \begin{bmatrix} 2y_1 + y_2 \\ 4y_1 - 3y_2 \end{bmatrix}$.

Finally, compute the BLUE:
$\hat{\theta}_{BLUE} = (A^T C_Y^{-1} A)^{-1} A^T C_Y^{-1} Y$
$\hat{\theta}_{BLUE} = \frac{1}{4} \begin{bmatrix} 7 & -1 \\ -1 & 3 \end{bmatrix} \frac{1}{5} \begin{bmatrix} 2y_1 + y_2 \\ 4y_1 - 3y_2 \end{bmatrix}$
$\hat{\theta}_{BLUE} = \frac{1}{20} \begin{bmatrix} 7(2y_1 + y_2) - (4y_1 - 3y_2) \\ -(2y_1 + y_2) + 3(4y_1 - 3y_2) \end{bmatrix}$
$\hat{\theta}_{BLUE} = \frac{1}{20} \begin{bmatrix} (14y_1 + 7y_2) - (4y_1 - 3y_2) \\ (-2y_1 - y_2) + (12y_1 - 9y_2) \end{bmatrix}$
$\hat{\theta}_{BLUE} = \frac{1}{20} \begin{bmatrix} 10y_1 + 10y_2 \\ 10y_1 - 10y_2 \end{bmatrix} = \begin{bmatrix} \frac{1}{2}y_1 + \frac{1}{2}y_2 \\ \frac{1}{2}y_1 - \frac{1}{2}y_2 \end{bmatrix}$.

So, $\hat{\theta}_{1, BLUE} = \frac{y_1 + y_2}{2}$ and $\hat{\theta}_{2, BLUE} = \frac{y_1 - y_2}{2}$.

**Question 3:**
What is the main advantage of BLUE over Maximum Likelihood Estimation (MLE) in terms of assumptions?

**Answer 3:**
The main advantage of BLUE is that it does *not* require the observations to follow a specific probability distribution (like Gaussian). It only requires that the expected value of the observations is a linear function of the parameter and that the covariance matrix of the observations is known. MLE, on the other hand, relies heavily on the likelihood function, which is derived from the probability distribution of the data.

---

### 9. Course Outcome Alignment Summary

*   **CO1 (K2):** This module covers the fundamental principles of estimation, including the definition of unbiasedness and the concept of optimality. BLUE is presented as a key estimation principle.
*   **CO2 (K3):** The derivation and application of the BLUE formula to various scenarios (scalar mean estimation with equal/unequal variances, vector parameter estimation) directly address the application of estimation algorithms.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
