---
title: "Linear prediction filters - Forward and backward predictors"
subject: "ADVANCED DIGITAL SIGNAL PROCESSING"
module: "Module 4: Linear prediction filters "
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff281"
status: "completed"
scrapedAt: "2026-05-23T18:04:19.732Z"
---
# Advanced Digital Signal Processing - Module 4: Linear Prediction Filters

## Topic: Linear Prediction Filters - Forward and Backward Predictors

---

### **Introduction**

Linear prediction is a fundamental technique in digital signal processing used for estimating future values of a signal based on its past values. It finds wide applications in speech processing, image compression, time series analysis, control systems, and more. This topic focuses on the two primary forms of linear prediction: forward linear prediction (FLP) and backward linear prediction (BLP).

---

### **Key Concepts and Definitions**

*   **Signal:** A sequence of values representing a physical phenomenon.
*   **Linear Prediction:** The process of estimating a signal value at a particular time based on a linear combination of previous (or future) signal values.
*   **Predictor:** The filter that performs the linear prediction.
*   **Prediction Error (or Residual):** The difference between the actual signal value and the predicted signal value.
*   **Order of Prediction:** The number of past (or future) signal values used in the prediction.

---

### **1. Forward Linear Prediction (FLP)**

#### **1.1 Concept**

In forward linear prediction, we aim to predict a future sample of a signal based on a linear combination of its past samples. Given a discrete-time signal $x[n]$, we want to predict $x[n]$ using $p$ past samples: $x[n-1], x[n-2], \ldots, x[n-p]$.

The predicted value $\hat{x}[n]$ is given by:

$$ \hat{x}[n] = \sum_{k=1}^{p} a_k x[n-k] $$

The prediction error (or residual) $e_f[n]$ is defined as:

$$ e_f[n] = x[n] - \hat{x}[n] = x[n] - \sum_{k=1}^{p} a_k x[n-k] $$

The goal of FLP is to find the predictor coefficients $a_1, a_2, \ldots, a_p$ that minimize some criterion on the prediction error, typically the mean squared error (MSE).

#### **1.2 Minimizing Mean Squared Error (MSE)**

The MSE is defined as:

$$ J = E\{e_f^2[n]\} = E\left\{\left(x[n] - \sum_{k=1}^{p} a_k x[n-k]\right)^2\right\} $$

To minimize $J$, we take the partial derivative with respect to each coefficient $a_i$ and set it to zero:

$$ \frac{\partial J}{\partial a_i} = E\left\{2 \left(x[n] - \sum_{k=1}^{p} a_k x[n-k]\right) (-x[n-i])\right\} = 0 $$

$$ -2 E\left\{x[n-i] \left(x[n] - \sum_{k=1}^{p} a_k x[n-k]\right)\right\} = 0 $$

$$ E\{x[n-i] x[n]\} - \sum_{k=1}^{p} a_k E\{x[n-i] x[n-k]\} = 0 $$

Let $r_x[m] = E\{x[n] x[n-m]\}$ be the autocorrelation function of the signal $x[n]$. Then the equations become:

$$ r_x[i] - \sum_{k=1}^{p} a_k r_x[i-k] = 0, \quad \text{for } i = 1, 2, \ldots, p $$

These equations are known as the **Yule-Walker equations**. They form a system of linear equations that can be solved for the predictor coefficients $a_k$.

The Yule-Walker equations can be written in matrix form:

$$ \mathbf{r} = \mathbf{R} \mathbf{a} $$

where:
*   $\mathbf{r} = [r_x[1], r_x[2], \ldots, r_x[p]]^T$ (vector of autocorrelations)
*   $\mathbf{R}$ is a $p \times p$ Toeplitz matrix:
    $$ \mathbf{R} = \begin{bmatrix}
    r_x[0] & r_x[1] & \cdots & r_x[p-1] \\
    r_x[1] & r_x[0] & \cdots & r_x[p-2] \\
    \vdots & \vdots & \ddots & \vdots \\
    r_x[p-1] & r_x[p-2] & \cdots & r_x[0]
    \end{bmatrix} $$
*   $\mathbf{a} = [a_1, a_2, \ldots, a_p]^T$ (vector of predictor coefficients)

Solving for $\mathbf{a}$:

$$ \mathbf{a} = \mathbf{R}^{-1} \mathbf{r} $$

**Important Note:** The Yule-Walker equations require the autocorrelation sequence $r_x[m]$. For stationary processes, this can be estimated from the signal samples. For non-stationary signals, time-varying predictors or methods like adaptive filtering are needed.

#### **1.3 Filter Realization**

The FLP predictor can be implemented as an FIR filter with impulse response $h[n] = [1, -a_1, -a_2, \ldots, -a_p]$ in a specific configuration.

The prediction error filter $A(z)$ is given by:

$$ A(z) = 1 - \sum_{k=1}^{p} a_k z^{-k} $$

The FLP predictor computes $\hat{x}[n]$ as the output of a filter with impulse response $P(z) = \sum_{k=1}^{p} a_k z^{-k}$.

The prediction error $e_f[n]$ can be seen as the output of the causal filter $A(z)$ when the input is $x[n]$.

$$ E_f(z) = X(z) - \hat{X}(z) = X(z) - A(z) X(z) = (1 - A(z)) X(z) $$
Wait, this is incorrect. Let's re-evaluate the relationship between prediction error and the filter.

The prediction error is:
$$ e_f[n] = x[n] - \sum_{k=1}^{p} a_k x[n-k] $$
If we consider the Z-transform, we get:
$$ E_f(z) = X(z) - \sum_{k=1}^{p} a_k z^{-k} X(z) $$
$$ E_f(z) = X(z) \left(1 - \sum_{k=1}^{p} a_k z^{-k}\right) $$
So, the prediction error $e_f[n]$ is the output of the filter with transfer function $A(z) = 1 - \sum_{k=1}^{p} a_k z^{-k}$ when the input is $x[n]$.

The predictor itself is a filter with transfer function $P(z) = \sum_{k=1}^{p} a_k z^{-k}$.

**Block Diagram of FLP:**

```
      x[n] ---+-------------> [ Filter A(z) ] ---> e_f[n]
              |                 1 - a1z^-1 - ... - apz^-p
              |
              +-----> [ Filter P(z) ] ---> \hat{x}[n]
                      a1z^-1 + ... + apz^-p
```

#### **1.4 Applications of FLP**

*   **Speech Analysis:** Used in Linear Predictive Coding (LPC) to model the vocal tract.
*   **Time Series Forecasting:** Predicting future values of economic or weather data.
*   **AR Model Estimation:** The predictor coefficients are the coefficients of an Autoregressive (AR) model if the prediction error is white noise.
*   **Signal Synthesis:** If the prediction error is a known excitation signal (like white noise), the original signal can be synthesized by passing the excitation through the inverse of the prediction error filter.

---

### **2. Backward Linear Prediction (BLP)**

#### **2.1 Concept**

In backward linear prediction, we aim to predict a past sample of a signal based on a linear combination of its future samples. Given a discrete-time signal $x[n]$, we want to predict $x[n]$ using $p$ future samples: $x[n+1], x[n+2], \ldots, x[n+p]$.

The predicted value $\tilde{x}[n]$ is given by:

$$ \tilde{x}[n] = \sum_{k=1}^{p} b_k x[n+k] $$

The prediction error (or residual) $e_b[n]$ is defined as:

$$ e_b[n] = x[n] - \tilde{x}[n] = x[n] - \sum_{k=1}^{p} b_k x[n+k] $$

The goal of BLP is to find the predictor coefficients $b_1, b_2, \ldots, b_p$ that minimize the MSE.

#### **2.2 Minimizing Mean Squared Error (MSE)**

The MSE is defined as:

$$ J' = E\{e_b^2[n]\} = E\left\{\left(x[n] - \sum_{k=1}^{p} b_k x[n+k]\right)^2\right\} $$

To minimize $J'$, we take the partial derivative with respect to each coefficient $b_i$ and set it to zero:

$$ \frac{\partial J'}{\partial b_i} = E\left\{2 \left(x[n] - \sum_{k=1}^{p} b_k x[n+k]\right) (-x[n+i])\right\} = 0 $$

$$ -2 E\left\{x[n+i] \left(x[n] - \sum_{k=1}^{p} b_k x[n+k]\right)\right\} = 0 $$

$$ E\{x[n+i] x[n]\} - \sum_{k=1}^{p} b_k E\{x[n+i] x[n+k]\} = 0 $$

Using the autocorrelation function $r_x[m] = E\{x[n] x[n-m]\}$, we have $E\{x[n+i] x[n+k]\} = r_x[k-i]$. Also, $E\{x[n+i] x[n]\} = r_x[-i]$. Since the autocorrelation function is even, $r_x[-i] = r_x[i]$.

Thus, the equations become:

$$ r_x[i] - \sum_{k=1}^{p} b_k r_x[k-i] = 0, \quad \text{for } i = 1, 2, \ldots, p $$

Let's re-index the summation to make it clearer. Let $j = k-i$. As $k$ goes from $1$ to $p$, $j$ goes from $1-i$ to $p-i$. This doesn't directly yield a Toeplitz matrix in the same way as FLP.

However, if we consider the symmetry of the autocorrelation function, $r_x[m] = r_x[-m]$, and rewrite the sum as:

$$ r_x[i] - \sum_{k=1}^{p} b_k r_x[i-k] = 0 $$

This is the same form as the Yule-Walker equations for FLP! Let's verify this by considering a transformation or the structure of the problem.

Alternatively, let's define the prediction error as:
$$ e_b[n] = x[n] - \sum_{k=1}^{p} b_k x[n+k] $$
Consider the reverse-time signal $x_r[n] = x[-n]$. Its autocorrelation is $r_{x_r}[m] = E\{x_r[n] x_r[n-m]\} = E\{x[-n] x[-(n-m)]\} = E\{x[-n] x[-n+m]\} = r_x[m]$. So the autocorrelation function is the same.

Now, consider the prediction of $x[n]$ using $x[n+1], \ldots, x[n+p]$. This is equivalent to predicting $x_r[n]$ using $x_r[n-1], \ldots, x_r[n-p]$ in the time-reversed domain.

The BLP predictor coefficients $b_k$ are related to the FLP predictor coefficients $a_k$ of the time-reversed signal. For a stationary process, the time-reversed signal has the same statistical properties. Therefore, the Yule-Walker equations for the BLP coefficients $b_k$ are:

$$ r_x[i] - \sum_{k=1}^{p} b_k r_x[i-k] = 0 $$
This is identical to the Yule-Walker equations for FLP. However, the interpretation of the coefficients might differ or there is a subtle difference in how the problem is set up.

Let's re-examine the equations for BLP:
$$ r_x[i] - \sum_{k=1}^{p} b_k r_x[i-k] = 0 $$
This can be written in matrix form as:

$$ \mathbf{r} = \mathbf{R} \mathbf{b} $$

where:
*   $\mathbf{r} = [r_x[1], r_x[2], \ldots, r_x[p]]^T$
*   $\mathbf{R} = \begin{bmatrix}
    r_x[0] & r_x[1] & \cdots & r_x[p-1] \\
    r_x[1] & r_x[0] & \cdots & r_x[p-2] \\
    \vdots & \vdots & \ddots & \vdots \\
    r_x[p-1] & r_x[p-2] & \cdots & r_x[0]
    \end{bmatrix}$

So, $\mathbf{b} = \mathbf{R}^{-1} \mathbf{r}$, which means $\mathbf{b} = \mathbf{a}$.

**This implies that for a stationary process, the predictor coefficients for optimal FLP and BLP are the same.**

**However, the filters and their interpretation are different.**

#### **2.3 Filter Realization**

The BLP predictor computes $\tilde{x}[n]$ as the output of a filter with transfer function $Q(z) = \sum_{k=1}^{p} b_k z^{k}$. (Note the positive powers of $z$, indicating a non-causal or future-dependent filter).

The backward prediction error $e_b[n]$ can be seen as the output of the filter $B(z) = 1 - \sum_{k=1}^{p} b_k z^{k}$ when the input is $x[n]$:

$$ E_b(z) = X(z) - \tilde{X}(z) = X(z) - \sum_{k=1}^{p} b_k z^{k} X(z) $$
$$ E_b(z) = X(z) \left(1 - \sum_{k=1}^{p} b_k z^{k}\right) $$
So, the backward prediction error $e_b[n]$ is the output of the filter with transfer function $B(z) = 1 - \sum_{k=1}^{p} b_k z^{k}$ when the input is $x[n]$.

**Block Diagram of BLP:**

```
      x[n] ---+-------------> [ Filter B(z) ] ---> e_b[n]
              |                 1 - b1z^1 - ... - bpz^p
              |
              +-----> [ Filter Q(z) ] ---> \tilde{x}[n]
                      b1z^1 + ... + bpz^p
```

**Note:** The filter $B(z)$ is non-causal due to the positive powers of $z$.

#### **2.4 Relationship between FLP and BLP**

For a stationary random process, the optimal predictor coefficients for FLP and BLP are the same. However, the filters are different due to the prediction direction.

*   **FLP:** Predicts the future based on the past. The prediction error filter is causal.
*   **BLP:** Predicts the past based on the future. The prediction error filter is non-causal.

**Connection to Reflection Coefficients (Parcor Coefficients):**
Both FLP and BLP are closely related to the Levinson-Durbin algorithm, which efficiently computes the predictor coefficients and the associated reflection coefficients. The reflection coefficients play a crucial role in the theory of lattice filters, which can implement both FLP and BLP.

**Why use BLP?**
While FLP is more intuitive for predicting future signal behavior, BLP can be useful in certain contexts. For instance, in signal modeling, if we want to characterize a signal's properties by its past and future relationship. In some spectral estimation techniques, like Pisarenko Harmonic Decomposition or MUSIC, the backward prediction error is used.

---

### **3. Comparison and Applications**

| Feature          | Forward Linear Prediction (FLP)                    | Backward Linear Prediction (BLP)                   |
| :--------------- | :------------------------------------------------- | :------------------------------------------------- |
| **Prediction Goal** | Predict $x[n]$ from $x[n-1], \dots, x[n-p]$       | Predict $x[n]$ from $x[n+1], \dots, x[n+p]$       |
| **Error Formula** | $e_f[n] = x[n] - \sum_{k=1}^{p} a_k x[n-k]$         | $e_b[n] = x[n] - \sum_{k=1}^{p} b_k x[n+k]$         |
| **Yule-Walker Eq.** | $r_x[i] = \sum_{k=1}^{p} a_k r_x[i-k]$            | $r_x[i] = \sum_{k=1}^{p} b_k r_x[i-k]$ (for stationary) |
| **Coefficients** | $a_k$                                              | $b_k$ (same as $a_k$ for stationary)               |
| **Predictor TF** | $P(z) = \sum_{k=1}^{p} a_k z^{-k}$ (causal)      | $Q(z) = \sum_{k=1}^{p} b_k z^{k}$ (non-causal)      |
| **Error Filter TF**| $A(z) = 1 - \sum_{k=1}^{p} a_k z^{-k}$ (causal)  | $B(z) = 1 - \sum_{k=1}^{p} b_k z^{k}$ (non-causal) |
| **Primary Use**  | Prediction of future, AR modeling, LPC           | Spectral estimation, analyzing symmetric properties |

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### **4. Textbooks and References**

*   **Oppenheim & Willsky, "Signals and Systems":** Chapter 12 discusses the modeling of signals and time series, which includes autoregressive (AR) models that are directly related to linear prediction. It emphasizes the prediction error filter and its connection to the autocorrelation function. (Relevant for understanding the foundation of signal modeling and prediction error).
*   **Haykin, "Signals and Systems":** Chapter 14 (Adaptive Filters) and Chapter 15 (Kalman Filtering) may touch upon concepts related to prediction in a broader sense. While not directly on FLP/BLP as separate topics, the underlying principles of minimizing error and using past data are present. (Provides a context for advanced signal processing applications).
*   **Anand Kumar, "Signals and Systems":** Similar to Oppenheim & Willsky, discussions on system modeling and time series analysis would cover the concepts.
*   **Lathi, "Principles of Signal Processing & Linear systems":** Chapter 13 (Digital Filters) might have sections on FIR filters and their design, which can be related to the structure of predictors. The concept of causality and stability of filters is also key here.
*   **Ziemer, "Signals & Systems - Continuous and Discrete":** Likely covers time-domain analysis and discrete-time systems, including FIR filters and their properties, which are foundational for understanding predictors.
*   **Ambardar, "Analog and Digital Signal Processing":** May provide a comprehensive treatment of digital filter design and signal modeling, including linear prediction techniques.
*   **Apte, "Signals and systems - Principles and Applications":** Would offer practical applications and principles behind signal analysis, which linear prediction contributes to.

---

### **5. Alignment with Course Outcomes**

*   **CO1: Classify continuous and discrete time signals and systems based on their properties and perform basic operations on signals. (K2)**
    *   Understanding FLP/BLP requires knowledge of discrete-time signals ($x[n]$) and their properties (stationarity, autocorrelation). The operations involved are linear combinations and signal shifts.
*   **CO2: Determine the stability and causality of LTI systems using convolution operations. (K3)**
    *   The predictor filters $A(z)$ and $B(z)$ are LTI systems. Their stability and causality (or lack thereof for $B(z)$) are important considerations. The concept of convolution is implicitly used in the definition of prediction error.
*   **CO3: Analyze signals in frequency domain using Laplace, Fourier and z-transforms and examine the properties of transforms. (K3)**
    *   The Z-transform is extensively used to represent the predictor and error filters ($A(z), B(z), P(z), Q(z)$). Understanding properties like causality and stability in the Z-domain is crucial.
*   **CO4: Interpret the use of various transforms to analyze continuous and discrete time LTI systems. (K3)**
    *   The z-transform is the primary tool for analyzing the performance and structure of linear prediction filters. It allows us to view the prediction process in the frequency domain.

---

### **6. Important Points to Remember**

*   **Stationarity:** The derivation of identical Yule-Walker equations for FLP and BLP relies on the assumption of signal stationarity.
*   **Toeplitz Matrix:** The autocorrelation matrix $\mathbf{R}$ is a Toeplitz matrix, which allows for efficient algorithms like the Levinson-Durbin algorithm for solving the Yule-Walker equations.
*   **Causality vs. Non-Causality:** FLP uses causal predictors, while BLP uses non-causal predictors. This is a key difference in their implementation and interpretation.
*   **Prediction Error:** Minimizing the MSE of the prediction error is the fundamental optimization criterion.
*   **Applications:** FLP is widely used in speech (LPC) and time series forecasting. BLP has applications in spectral estimation and characterizing signal symmetry.

---

### **7. Practice Questions and Exercises**

**Question 1:**
For a stationary random process $x[n]$ with autocorrelation sequence $r_x[m]$, write down the Yule-Walker equations for a forward linear predictor of order $p=2$.

**Answer 1:**
The Yule-Walker equations for $p=2$ are:
For $i=1$: $r_x[1] - a_1 r_x[0] - a_2 r_x[1] = 0$
For $i=2$: $r_x[2] - a_1 r_x[1] - a_2 r_x[0] = 0$

**Question 2:**
Consider a signal $x[n]$ with the autocorrelation function $r_x[m] = \delta[m]$ (white noise). Design a forward linear predictor of order $p=1$.

**Answer 2:**
The Yule-Walker equation for $p=1$ is:
$r_x[1] = a_1 r_x[0]$
Given $r_x[m] = \delta[m]$, we have $r_x[0] = 1$ and $r_x[1] = 0$.
So, $0 = a_1 \times 1$, which gives $a_1 = 0$.
The predictor is $\hat{x}[n] = 0 \times x[n-1] = 0$.
The prediction error is $e_f[n] = x[n] - 0 = x[n]$.
This makes sense, as predicting white noise using past values cannot improve the prediction if it's truly uncorrelated.

**Question 3:**
Suppose the autocorrelation of a stationary signal is $r_x[m] = 0.5^{|m|}$. Find the coefficients for a forward linear predictor of order $p=1$.

**Answer 3:**
The Yule-Walker equation for $p=1$:
$r_x[1] = a_1 r_x[0]$
$r_x[0] = 0.5^{|0|} = 0.5^0 = 1$
$r_x[1] = 0.5^{|1|} = 0.5^1 = 0.5$
So, $0.5 = a_1 \times 1$, which means $a_1 = 0.5$.
The predictor is $\hat{x}[n] = 0.5 x[n-1]$.

**Question 4:**
What is the transfer function of the forward prediction error filter for $p=1$ if $a_1 = 0.5$?

**Answer 4:**
The transfer function of the forward prediction error filter is $A(z) = 1 - \sum_{k=1}^{p} a_k z^{-k}$.
For $p=1$ and $a_1 = 0.5$, $A(z) = 1 - 0.5 z^{-1}$.

**Question 5:**
What is the transfer function of the backward prediction error filter for $p=1$ if $b_1 = 0.5$?

**Answer 5:**
The transfer function of the backward prediction error filter is $B(z) = 1 - \sum_{k=1}^{p} b_k z^{k}$.
For $p=1$ and $b_1 = 0.5$, $B(z) = 1 - 0.5 z^{1}$.

**Exercise:**
Given a segment of a signal: $x = [1, 2, 3, 4, 5]$. Estimate the autocorrelation function for lags 0 and 1. Then, calculate the coefficients for a forward linear predictor of order $p=1$.

**Answer:**
This requires estimating the autocorrelation from a finite segment, which is an approximation.
We can use the biased estimator:
$r_x[m] \approx \frac{1}{N} \sum_{n=0}^{N-1} x[n] x[n-m]$

For $m=0$:
$r_x[0] \approx \frac{1}{5} \sum_{n=0}^{4} x[n] x[n] = \frac{1}{5} (1^2 + 2^2 + 3^2 + 4^2 + 5^2) = \frac{1}{5} (1 + 4 + 9 + 16 + 25) = \frac{55}{5} = 11$

For $m=1$:
$r_x[1] \approx \frac{1}{5} \sum_{n=1}^{4} x[n] x[n-1]$ (We start from $n=1$ to ensure $x[n-1]$ is within the segment)
$r_x[1] \approx \frac{1}{5} (x[1]x[0] + x[2]x[1] + x[3]x[2] + x[4]x[3])$
$r_x[1] \approx \frac{1}{5} ((2)(1) + (3)(2) + (4)(3) + (5)(4))$
$r_x[1] \approx \frac{1}{5} (2 + 6 + 12 + 20) = \frac{40}{5} = 8$

Using the Yule-Walker equation for $p=1$:
$r_x[1] = a_1 r_x[0]$
$8 = a_1 \times 11$
$a_1 = \frac{8}{11}$

The forward linear predictor of order 1 is $\hat{x}[n] = \frac{8}{11} x[n-1]$.

---
This concludes the study notes for Linear Prediction Filters - Forward and Backward Predictors. Remember to consult the specified textbooks for more in-depth derivations and examples.