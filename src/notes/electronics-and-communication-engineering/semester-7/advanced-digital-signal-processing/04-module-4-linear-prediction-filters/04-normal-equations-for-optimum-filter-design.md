---
title: "Normal equations for optimum filter design."
subject: "ADVANCED DIGITAL SIGNAL PROCESSING"
module: "Module 4: Linear prediction filters "
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff284"
status: "completed"
scrapedAt: "2026-05-23T18:04:22.344Z"
---
# Advanced Digital Signal Processing - Module 4: Linear Prediction Filters

## Topic: Normal Equations for Optimum Filter Design

---

### 1. Introduction to Optimum Filter Design

In many signal processing applications, we aim to design a filter that performs a specific task, such as removing noise, estimating a signal, or predicting future signal values. Often, the "best" filter is one that minimizes a certain error criterion. The problem of finding these "optimum" filters often leads to a set of linear equations known as **normal equations**. These equations are fundamental to the design of many important filters, including Wiener filters and linear predictive coding (LPC) filters.

**Key Concepts:**

*   **Error Criterion:** A mathematical function that quantifies the performance of a filter. A common criterion is the **Mean Squared Error (MSE)**, which measures the average squared difference between the desired output and the actual filter output.
*   **Optimum Filter:** A filter whose parameters are chosen to minimize a specified error criterion.
*   **Linear Prediction:** The process of estimating a future or past sample of a signal based on a linear combination of past observed samples.

**Relevance to Course Outcomes:**

*   **CO1 (K2):** Understanding the concept of designing filters based on signal properties and operations.
*   **CO3 (K3) & CO4 (K3):** While not directly using transforms for normal equations, the underlying principles of signal correlation and covariance are derived from signal analysis in time and frequency domains.

---

### 2. The Mean Squared Error (MSE)

The most common objective in optimum filter design is to minimize the Mean Squared Error (MSE) between a desired signal and the output of a filter.

Let:
*   $d[n]$ be the desired signal at time $n$.
*   $x[n]$ be the input signal at time $n$.
*   $y[n]$ be the output of the filter at time $n$.
*   $e[n]$ be the error signal at time $n$, where $e[n] = d[n] - y[n]$.

The MSE is defined as:
$$ \xi = E\{e^2[n]\} $$
where $E\{\cdot\}$ denotes the expectation operator.

For a linear filter, the output $y[n]$ is a linear combination of input samples. The specific form of this linear combination depends on the type of filter (e.g., FIR, IIR).

---

### 3. Linear Prediction Filter Structure and FIR Filters

A common scenario is designing an FIR filter for prediction or estimation. Consider an FIR filter of order $M$ with coefficients $w[0], w[1], \ldots, w[M-1]$. The output $y[n]$ is given by:

$$ y[n] = \sum_{k=0}^{M-1} w[k] x[n-k] $$

In vector form, let $\mathbf{w} = [w[0], w[1], \ldots, w[M-1]]^T$ be the vector of filter coefficients, and $\mathbf{x}[n] = [x[n], x[n-1], \ldots, x[n-M+1]]^T$ be the vector of current and past input samples. Then, the filter output can be written as:

$$ y[n] = \mathbf{w}^T \mathbf{x}[n] $$

The error signal is:
$$ e[n] = d[n] - \mathbf{w}^T \mathbf{x}[n] $$

The MSE is:
$$ \xi = E\{e^2[n]\} = E\{(d[n] - \mathbf{w}^T \mathbf{x}[n])^2\} $$
$$ \xi = E\{d^2[n] - 2d[n]\mathbf{w}^T \mathbf{x}[n] + (\mathbf{w}^T \mathbf{x}[n])^2\} $$
$$ \xi = E\{d^2[n]\} - 2\mathbf{w}^T E\{d[n]\mathbf{x}[n]\} + \mathbf{w}^T E\{\mathbf{x}[n]\mathbf{x}^T[n]\} \mathbf{w} $$

**Key Definitions:**

*   **Correlation Vector ($\mathbf{p}$):** The vector of cross-correlations between the desired signal and the input signal.
    $$ \mathbf{p} = E\{d[n]\mathbf{x}[n]\} = \begin{bmatrix} E\{d[n]x[n]\} \\ E\{d[n]x[n-1]\} \\ \vdots \\ E\{d[n]x[n-M+1]\} \end{bmatrix} $$
    If $d[n]$ and $x[n]$ are jointly wide-sense stationary (WSS), then $p_k = E\{d[n]x[n-k]\}$.

*   **Correlation Matrix ($\mathbf{R}$):** The matrix of auto-correlations and cross-correlations of the input signal.
    $$ \mathbf{R} = E\{\mathbf{x}[n]\mathbf{x}^T[n]\} = E \left\{ \begin{bmatrix} x[n] \\ x[n-1] \\ \vdots \\ x[n-M+1] \end{bmatrix} \begin{bmatrix} x[n] & x[n-1] & \cdots & x[n-M+1] \end{bmatrix} \right\} $$
    $$ \mathbf{R} = \begin{bmatrix} E\{x^2[n]\} & E\{x[n]x[n-1]\} & \cdots & E\{x[n]x[n-M+1]\} \\ E\{x[n-1]x[n]\} & E\{x^2[n-1]\} & \cdots & E\{x[n-1]x[n-M+1]\} \\ \vdots & \vdots & \ddots & \vdots \\ E\{x[n-M+1]x[n]\} & E\{x[n-M+1]x[n-1]\} & \cdots & E\{x^2[n-M+1]\} \end{bmatrix} $$
    If $x[n]$ is WSS, then $R_{ij} = E\{x[n-i]x[n-j]\} = r_x[|i-j|]$, where $r_x[\tau]$ is the autocorrelation function of $x[n]$.

The MSE can be rewritten in terms of $\mathbf{R}$ and $\mathbf{p}$:
$$ \xi(\mathbf{w}) = E\{d^2[n]\} - 2\mathbf{w}^T \mathbf{p} + \mathbf{w}^T \mathbf{R} \mathbf{w} $$
Note that $E\{d^2[n]\}$ is the power of the desired signal, and can be denoted as $P_d$.

---

### 4. Deriving the Normal Equations

To find the filter coefficients $\mathbf{w}$ that minimize $\xi(\mathbf{w})$, we set the gradient of $\xi$ with respect to $\mathbf{w}$ to zero.

$$ \nabla_{\mathbf{w}} \xi(\mathbf{w}) = \frac{\partial \xi}{\partial \mathbf{w}} = \mathbf{0} $$

Taking the derivative of $\xi(\mathbf{w})$ with respect to the vector $\mathbf{w}$:
$$ \frac{\partial}{\partial \mathbf{w}} (\mathbf{w}^T \mathbf{R} \mathbf{w}) = 2 \mathbf{R} \mathbf{w} $$ (if $\mathbf{R}$ is symmetric and positive definite)
$$ \frac{\partial}{\partial \mathbf{w}} (2\mathbf{w}^T \mathbf{p}) = 2 \mathbf{p} $$

Therefore, the gradient is:
$$ \nabla_{\mathbf{w}} \xi(\mathbf{w}) = -2\mathbf{p} + 2\mathbf{R}\mathbf{w} $$

Setting the gradient to zero for minimization:
$$ -2\mathbf{p} + 2\mathbf{R}\mathbf{w}^* = \mathbf{0} $$
$$ \mathbf{R}\mathbf{w}^* = \mathbf{p} $$

These are the **normal equations** for the optimum FIR filter design problem. The solution $\mathbf{w}^*$ represents the set of filter coefficients that minimizes the MSE.

**Important Points:**

*   The normal equations are a system of $M$ linear equations for the $M$ unknown filter coefficients $w[0], \ldots, w[M-1]$.
*   If the correlation matrix $\mathbf{R}$ is invertible (which is typically true for stationary signals with sufficient randomness), the unique solution for the optimal weights is:
    $$ \mathbf{w}^* = \mathbf{R}^{-1} \mathbf{p} $$

**Textbook References:**

*   **Oppenheim & Willsky (2/e):** Chapter 10 discusses optimization techniques, and Chapter 11 (in some editions/contexts) might touch upon Wiener filtering which utilizes these concepts. Look for sections on adaptive filters or minimum mean-square error estimation.
*   **Haykin (2/e):** Chapter 12, "Wiener Filtering," directly addresses the derivation of optimal filters based on minimizing MSE, leading to the normal equations. Haykin often provides detailed mathematical derivations.

---

### 5. Properties of the Solution $\mathbf{w}^*$

1.  **Minimum MSE:** The solution $\mathbf{w}^*$ guarantees the minimum possible MSE. The minimum MSE can be calculated as:
    $$ \xi_{min} = \xi(\mathbf{w}^*) = P_d - (\mathbf{w}^*)^T \mathbf{p} = P_d - \mathbf{p}^T \mathbf{R}^{-1} \mathbf{p} $$

2.  **Orthogonality Principle:** The error vector $e[n]$ is orthogonal to the input signal vector $\mathbf{x}[n]$ in the mean-square sense. This means:
    $$ E\{e[n]\mathbf{x}[n]\} = \mathbf{0} $$
    Substituting $e[n] = d[n] - (\mathbf{w}^*)^T \mathbf{x}[n]$:
    $$ E\{(d[n] - (\mathbf{w}^*)^T \mathbf{x}[n])\mathbf{x}[n]\} = \mathbf{0} $$
    $$ E\{d[n]\mathbf{x}[n]\} - E\{(\mathbf{w}^*)^T \mathbf{x}[n]\mathbf{x}[n]\} = \mathbf{0} $$
    $$ \mathbf{p} - (\mathbf{w}^*)^T E\{\mathbf{x}[n]\mathbf{x}^T[n]\} = \mathbf{0} $$
    $$ \mathbf{p} - (\mathbf{w}^*)^T \mathbf{R} = \mathbf{0} $$
    Taking the transpose of both sides:
    $$ \mathbf{p}^T - \mathbf{p}^T \mathbf{R}^T = \mathbf{0} $$
    Since $\mathbf{R}$ is symmetric ($\mathbf{R}^T = \mathbf{R}$), and $\mathbf{p}^T \mathbf{R}^T = \mathbf{p}^T \mathbf{R}$:
    $$ \mathbf{p}^T - \mathbf{p}^T \mathbf{R} = \mathbf{0} $$
    This does not directly give $\mathbf{R}\mathbf{w}^* = \mathbf{p}$. However, the orthogonality principle directly implies:
    $$ E\{e[n]\mathbf{x}[n]\} = E\{(d[n] - y[n])\mathbf{x}[n]\} = E\{d[n]\mathbf{x}[n]\} - E\{y[n]\mathbf{x}[n]\} = \mathbf{0} $$
    $$ \mathbf{p} - E\{(\mathbf{w}^*)^T \mathbf{x}[n] \mathbf{x}[n]\} = \mathbf{0} $$
    $$ \mathbf{p} - (\mathbf{w}^*)^T E\{\mathbf{x}[n]\mathbf{x}^T[n]\} = \mathbf{0} $$
    $$ \mathbf{p} - (\mathbf{w}^*)^T \mathbf{R} = \mathbf{0} $$
    Taking the transpose again:
    $$ \mathbf{p}^T - \mathbf{p}^T \mathbf{R}^T = \mathbf{0} $$
    $$ \mathbf{p}^T - \mathbf{p}^T \mathbf{R} = \mathbf{0} $$
    This is still not the normal equation. Let's re-examine the derivative carefully:
    The derivative of a quadratic form $ \mathbf{w}^T \mathbf{A} \mathbf{w} $ w.r.t. $ \mathbf{w} $ is $ (\mathbf{A} + \mathbf{A}^T) \mathbf{w} $. If $ \mathbf{A} $ is symmetric, it's $ 2\mathbf{A}\mathbf{w} $.
    In our case, $ \xi(\mathbf{w}) = P_d - 2\mathbf{w}^T \mathbf{p} + \mathbf{w}^T \mathbf{R} \mathbf{w} $.
    $ \frac{\partial \xi}{\partial \mathbf{w}} = -2\mathbf{p} + 2\mathbf{R}\mathbf{w} $ (since $\mathbf{R}$ is symmetric).
    Setting to zero: $ -2\mathbf{p} + 2\mathbf{R}\mathbf{w}^* = \mathbf{0} \implies \mathbf{R}\mathbf{w}^* = \mathbf{p} $. This is correct.

    The orthogonality principle states that the error signal $e[n]$ is orthogonal to *each* of the input signal samples $x[n], x[n-1], \ldots, x[n-M+1]$.
    $$ E\{e[n] x[n-k]\} = 0 \quad \text{for } k = 0, 1, \ldots, M-1 $$
    $$ E\{(d[n] - \sum_{j=0}^{M-1} w^*[j] x[n-j]) x[n-k]\} = 0 $$
    $$ E\{d[n] x[n-k]\} - \sum_{j=0}^{M-1} w^*[j] E\{x[n-j] x[n-k]\} = 0 $$
    $$ p_k - \sum_{j=0}^{M-1} w^*[j] R_{ij}[k] = 0 $$
    Where $p_k = E\{d[n]x[n-k]\}$ and $R_{ij}[k] = E\{x[n-j]x[n-k]\}$.
    This expands into the matrix form $\mathbf{p} - \mathbf{R}\mathbf{w}^* = \mathbf{0}$, which is $\mathbf{R}\mathbf{w}^* = \mathbf{p}$.

---

### 6. Examples of Applications

#### 6.1. Wiener Filter

The normal equations are fundamental to the design of the **Wiener filter**. A Wiener filter is an optimal linear filter for estimating a desired signal $d[n]$ from an observed signal $x[n]$ that is corrupted by additive noise.

*   **Case 1: Signal Estimation (Smoothing/Filtering)**
    Given an observed signal $x[n]$ which is a combination of a desired signal $s[n]$ and noise $v[n]$ (i.e., $x[n] = s[n] + v[n]$), the goal is to estimate $s[n]$. The desired signal is $d[n] = s[n]$. The input signal to the filter is $x[n]$. The filter output $y[n]$ is an estimate of $s[n]$. The error is $e[n] = s[n] - y[n]$.

*   **Case 2: Prediction**
    Given past samples of a signal $x[n], x[n-1], \ldots, x[n-M]$, we want to predict a future sample $x[n+L]$ (where $L > 0$). The desired signal is $d[n] = x[n+L]$. The input samples are shifted, so the input vector to the filter is $\mathbf{x}[n] = [x[n], x[n-1], \ldots, x[n-M+1]]^T$. The filter coefficients $w[k]$ will aim to produce $y[n] \approx x[n+L]$.

#### 6.2. Linear Predictive Coding (LPC)

In LPC, used heavily in speech processing, we model a signal as an output of an all-pole filter. To find the coefficients of this filter, we can use linear prediction. Given a segment of speech signal $x[n]$, we want to find coefficients $a_1, \ldots, a_p$ such that:
$$ x[n] = \sum_{k=1}^p a_k x[n-k] + u[n] $$
where $u[n]$ is an innovation signal (often assumed to be white noise). This is equivalent to designing a predictor that minimizes the prediction error. The predictor is $y[n] = \sum_{k=1}^p a_k x[n-k]$. The error is $e[n] = x[n] - y[n] = u[n]$. Minimizing $E\{e^2[n]\}$ leads to the normal equations for the predictor coefficients.

In LPC, the input signal vector would be $\mathbf{x}[n] = [x[n-1], x[n-2], \ldots, x[n-p]]^T$ and the desired signal would be $d[n] = x[n]$. The filter coefficients are $w[k] = a_{k+1}$ for $k=0, \ldots, p-1$.
The MSE is $\xi(\mathbf{a}) = E\{(x[n] - \sum_{k=1}^p a_k x[n-k])^2\}$.
Let $\mathbf{a} = [a_1, \ldots, a_p]^T$.
The input vector for the prediction is $\mathbf{x}_p[n] = [x[n-1], x[n-2], \ldots, x[n-p]]^T$.
The desired signal is $d[n] = x[n]$.
The MSE is $\xi(\mathbf{a}) = E\{(x[n] - \mathbf{a}^T \mathbf{x}_p[n])^2\}$.
$$ \xi(\mathbf{a}) = E\{x^2[n]\} - 2\mathbf{a}^T E\{x[n]\mathbf{x}_p[n]\} + \mathbf{a}^T E\{\mathbf{x}_p[n]\mathbf{x}_p^T[n]\} \mathbf{a} $$
The correlation vector is $\mathbf{p}_p = E\{x[n]\mathbf{x}_p[n]\} = [E\{x[n]x[n-1]\}, \ldots, E\{x[n]x[n-p]\}]^T = [r_x[1], \ldots, r_x[p]]^T$.
The correlation matrix is $\mathbf{R}_p = E\{\mathbf{x}_p[n]\mathbf{x}_p^T[n]\}$, where $(\mathbf{R}_p)_{ij} = E\{x[n-i]x[n-j]\} = r_x[|i-j|]$.
So, the normal equations are $\mathbf{R}_p \mathbf{a} = \mathbf{p}_p$.

---

### 7. Examples and Practice Questions

Let's consider a simple example. We want to design a 1st order FIR filter ($M=2$) to predict $x[n+1]$ from $x[n]$. So, $y[n] = w[0]x[n]$. This is not quite right. For prediction of $x[n+1]$ from $x[n]$, we typically use a predictor of the form $\hat{x}[n+1] = w_1 x[n]$. However, the normal equations formulation is typically for coefficients $w[0], \dots, w[M-1]$ acting on $x[n], \dots, x[n-M+1]$.

Let's reformulate for standard FIR filter design:
Suppose we have a sequence $x[n]$ and a desired response $d[n]$. We want to design a 1st order FIR filter ($M=1$) with coefficient $w[0]$.
$y[n] = w[0] x[n]$.
$\mathbf{w} = [w[0]]$, $\mathbf{x}[n] = [x[n]]$.
$\mathbf{p} = E\{d[n]x[n]\}$.
$\mathbf{R} = E\{x^2[n]\}$.
Normal equation: $\mathbf{R}\mathbf{w}^* = \mathbf{p} \implies E\{x^2[n]\} w^*[0] = E\{d[n]x[n]\}$.
$w^*[0] = \frac{E\{d[n]x[n]\}}{E\{x^2[n]\}} = \frac{r_{dx}[0]}{r_x[0]}$.

**Example 1: Simple Prediction**
Let $x[n]$ be a stationary process with autocorrelation $r_x[\tau] = \delta[\tau]$ (i.e., white noise with unit variance).
Let the desired signal be $d[n] = x[n+1]$.
We want to design a 1st order predictor ($M=1$), so the filter has one coefficient $w[0]$.
$y[n] = w[0]x[n]$.
The input vector is $\mathbf{x}[n] = [x[n]]$.
The desired signal is $d[n] = x[n+1]$.
$\mathbf{w} = [w[0]]$.
$\mathbf{p} = E\{d[n]\mathbf{x}[n]\} = E\{x[n+1]x[n]\} = r_x[1]$.
$\mathbf{R} = E\{\mathbf{x}[n]\mathbf{x}^T[n]\} = E\{x^2[n]\} = r_x[0]$.

Since $x[n]$ is white noise with $\delta[\tau]$ autocorrelation:
$r_x[0] = 1$
$r_x[1] = 0$

The normal equation is $\mathbf{R}\mathbf{w}^* = \mathbf{p}$:
$[1] [w^*[0]] = [0]$
$w^*[0] = 0$.

This makes sense: if $x[n]$ is white noise, knowing $x[n]$ gives no information about $x[n+1]$, so the best prediction is zero.

**Example 2: Prediction with Autocorrelation**
Let $x[n]$ be a stationary process with autocorrelation $r_x[\tau] = (0.9)^{|\tau|}$.
Let's design a 1st order predictor ($M=1$) for $x[n+1]$ based on $x[n]$.
So, $d[n] = x[n+1]$.
The filter structure is $y[n] = w[0]x[n]$.
Input vector: $\mathbf{x}[n] = [x[n]]$.
Desired signal: $d[n] = x[n+1]$.
$\mathbf{w} = [w[0]]$.

$\mathbf{p} = E\{d[n]\mathbf{x}[n]\} = E\{x[n+1]x[n]\} = r_x[1]$.
$\mathbf{R} = E\{\mathbf{x}[n]\mathbf{x}^T[n]\} = E\{x^2[n]\} = r_x[0]$.

Using the autocorrelation function:
$r_x[0] = (0.9)^{|0|} = 1$.
$r_x[1] = (0.9)^{|1|} = 0.9$.

The normal equation is $\mathbf{R}\mathbf{w}^* = \mathbf{p}$:
$[1] [w^*[0]] = [0.9]$
$w^*[0] = 0.9$.

This means the optimal prediction of $x[n+1]$ based on $x[n]$ is $\hat{x}[n+1] = 0.9 x[n]$. This is consistent with the model $x[n] = 0.9 x[n-1] + u[n]$ if $u[n]$ is white noise.

**Practice Question 1:**
Consider a process $x[n]$ with $r_x[0]=2$, $r_x[1]=1$, $r_x[2]=0.5$. Let the desired signal be $d[n] = x[n+1]$. Design a 2nd order FIR filter ($M=2$) to estimate $d[n]$ from $x[n]$ and $x[n-1]$.

**Solution to Practice Question 1:**
We want to design a filter with coefficients $w[0], w[1]$ such that $y[n] = w[0]x[n] + w[1]x[n-1]$.
The input vector is $\mathbf{x}[n] = [x[n], x[n-1]]^T$.
The filter coefficient vector is $\mathbf{w} = [w[0], w[1]]^T$.
The desired signal is $d[n] = x[n+1]$.

The correlation matrix $\mathbf{R}$ is:
$$ \mathbf{R} = E\{\mathbf{x}[n]\mathbf{x}^T[n]\} = E \left\{ \begin{bmatrix} x[n] \\ x[n-1] \end{bmatrix} \begin{bmatrix} x[n] & x[n-1] \end{bmatrix} \right\} = \begin{bmatrix} E\{x^2[n]\} & E\{x[n]x[n-1]\} \\ E\{x[n-1]x[n]\} & E\{x^2[n-1]\} \end{bmatrix} $$
Assuming stationarity, $E\{x^2[n]\} = r_x[0]$ and $E\{x[n]x[n-k]\} = r_x[k]$.
So,
$$ \mathbf{R} = \begin{bmatrix} r_x[0] & r_x[1] \\ r_x[1] & r_x[0] \end{bmatrix} = \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix} $$

The correlation vector $\mathbf{p}$ is:
$$ \mathbf{p} = E\{d[n]\mathbf{x}[n]\} = E\{x[n+1]\mathbf{x}[n]\} = \begin{bmatrix} E\{x[n+1]x[n]\} \\ E\{x[n+1]x[n-1]\} \end{bmatrix} $$
Assuming stationarity, $E\{x[n+1]x[n]\} = r_x[1]$ and $E\{x[n+1]x[n-1]\} = r_x[2]$.
So,
$$ \mathbf{p} = \begin{bmatrix} r_x[1] \\ r_x[2] \end{bmatrix} = \begin{bmatrix} 1 \\ 0.5 \end{bmatrix} $$

The normal equations are $\mathbf{R}\mathbf{w}^* = \mathbf{p}$:
$$ \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix} \begin{bmatrix} w^*[0] \\ w^*[1] \end{bmatrix} = \begin{bmatrix} 1 \\ 0.5 \end{bmatrix} $$

We need to solve this system of linear equations.
1.  $2w^*[0] + w^*[1] = 1$
2.  $w^*[0] + 2w^*[1] = 0.5$

From equation (1), $w^*[1] = 1 - 2w^*[0]$.
Substitute this into equation (2):
$w^*[0] + 2(1 - 2w^*[0]) = 0.5$
$w^*[0] + 2 - 4w^*[0] = 0.5$
$-3w^*[0] = 0.5 - 2$
$-3w^*[0] = -1.5$
$w^*[0] = 0.5$

Now, find $w^*[1]$:
$w^*[1] = 1 - 2(0.5) = 1 - 1 = 0$.

So, the optimal filter coefficients are $w^*[0] = 0.5$ and $w^*[1] = 0$.
The optimal filter is $y[n] = 0.5 x[n]$.

**Practice Question 2:**
For the same process $x[n]$ as in Practice Question 1 ($r_x[0]=2$, $r_x[1]=1$, $r_x[2]=0.5$), calculate the minimum MSE achieved by the filter designed in Practice Question 1.

**Solution to Practice Question 2:**
The minimum MSE is given by $\xi_{min} = P_d - (\mathbf{w}^*)^T \mathbf{p}$.
Here, $d[n] = x[n+1]$, so $P_d = E\{d^2[n]\} = E\{x^2[n+1]\} = r_x[0] = 2$.
The optimal weights are $\mathbf{w}^* = [0.5, 0]^T$.
The correlation vector is $\mathbf{p} = [1, 0.5]^T$.

$$ \xi_{min} = r_x[0] - \begin{bmatrix} 0.5 & 0 \end{bmatrix} \begin{bmatrix} 1 \\ 0.5 \end{bmatrix} $$
$$ \xi_{min} = 2 - (0.5 \times 1 + 0 \times 0.5) $$
$$ \xi_{min} = 2 - 0.5 $$
$$ \xi_{min} = 1.5 $$

Alternatively, we can use $\xi_{min} = P_d - \mathbf{p}^T \mathbf{R}^{-1} \mathbf{p}$.
First, find $\mathbf{R}^{-1}$:
$$ \mathbf{R} = \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix} $$
The determinant of $\mathbf{R}$ is $(2 \times 2) - (1 \times 1) = 4 - 1 = 3$.
$$ \mathbf{R}^{-1} = \frac{1}{3} \begin{bmatrix} 2 & -1 \\ -1 & 2 \end{bmatrix} $$

Now calculate $\mathbf{p}^T \mathbf{R}^{-1} \mathbf{p}$:
$$ \mathbf{p}^T \mathbf{R}^{-1} = \begin{bmatrix} 1 & 0.5 \end{bmatrix} \frac{1}{3} \begin{bmatrix} 2 & -1 \\ -1 & 2 \end{bmatrix} = \frac{1}{3} \begin{bmatrix} (1 \times 2 + 0.5 \times -1) & (1 \times -1 + 0.5 \times 2) \end{bmatrix} $$
$$ \mathbf{p}^T \mathbf{R}^{-1} = \frac{1}{3} \begin{bmatrix} 2 - 0.5 & -1 + 1 \end{bmatrix} = \frac{1}{3} \begin{bmatrix} 1.5 & 0 \end{bmatrix} $$
$$ \mathbf{p}^T \mathbf{R}^{-1} \mathbf{p} = \frac{1}{3} \begin{bmatrix} 1.5 & 0 \end{bmatrix} \begin{bmatrix} 1 \\ 0.5 \end{bmatrix} = \frac{1}{3} (1.5 \times 1 + 0 \times 0.5) = \frac{1}{3} (1.5) = 0.5 $$

So, $\xi_{min} = P_d - 0.5 = 2 - 0.5 = 1.5$.
Both methods yield the same minimum MSE.

---

### 8. Important Points to Remember

*   **Goal:** Minimize the Mean Squared Error (MSE) between a desired signal $d[n]$ and the filter output $y[n]$.
*   **FIR Filter:** The output is a linear combination of past inputs: $y[n] = \sum_{k=0}^{M-1} w[k] x[n-k]$.
*   **Vector Representation:** $\mathbf{w}$ (coefficients), $\mathbf{x}[n]$ (input samples), $\mathbf{p}$ (cross-correlation vector), $\mathbf{R}$ (autocorrelation matrix).
*   **MSE Expression:** $\xi(\mathbf{w}) = P_d - 2\mathbf{w}^T \mathbf{p} + \mathbf{w}^T \mathbf{R} \mathbf{w}$.
*   **Normal Equations:** $\mathbf{R}\mathbf{w}^* = \mathbf{p}$. These are the conditions for minimum MSE.
*   **Solution:** $\mathbf{w}^* = \mathbf{R}^{-1} \mathbf{p}$ (if $\mathbf{R}$ is invertible).
*   **Orthogonality Principle:** The error signal $e[n]$ is orthogonal to the input signal space.
*   **Applications:** Wiener filtering (estimation, smoothing, prediction), Linear Predictive Coding (LPC).
*   **Assumptions:** The derivations often assume the signals are wide-sense stationary (WSS). For non-stationary signals, adaptive algorithms are needed (though the concept of minimizing MSE still applies).

---

### 9. Connection to Course Outcomes

*   **CO1 (K2):** Understanding the concept of designing filters based on signal properties (correlation) and operations (linear combinations) to achieve an objective (minimize error).
*   **CO2 (K3):** While this topic doesn't directly involve stability/causality checks via convolution, the underlying signal processing principles are related. The structure of the FIR filter is a convolution. The stationarity assumption implies properties that simplify analysis.
*   **CO3 (K3) & CO4 (K3):** The calculation of $\mathbf{R}$ and $\mathbf{p}$ relies on the autocorrelation and cross-correlation of signals. These correlation functions are intimately related to the frequency-domain representations (Power Spectral Density) of the signals, through the Wiener-Khinchin theorem for stationary processes. Although the derivation uses time-domain expectation, the resulting correlation matrices are directly linked to the signal's spectral content.

---
This comprehensive study note covers the normal equations for optimum filter design in Advanced Digital Signal Processing, providing definitions, derivations, examples, practice questions, and connections to course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
