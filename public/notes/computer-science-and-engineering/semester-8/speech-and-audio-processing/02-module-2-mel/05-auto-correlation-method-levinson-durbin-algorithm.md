---
title: "Auto correlation method - Levinson Durbin Algorithm"
subject: "SPEECH AND AUDIO PROCESSING"
module: "Module 2: Mel"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca59"
status: "completed"
scrapedAt: "2026-05-20T17:26:56.363Z"
---
# SPEECH AND AUDIO PROCESSING - Module 2: Mel

## Topic: Autocorrelation Method & Levinson-Durbin Algorithm

This module delves into the fundamental concepts of modeling speech signals using the Autocorrelation Method and efficiently solving the resulting linear system with the Levinson-Durbin Algorithm.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

1.  **Explain the concept of autocorrelation and its application in speech signal analysis.**
2.  **Derive the autocorrelation-based linear prediction equations.**
3.  **Understand the principles of the Levinson-Durbin algorithm for solving the LPC equations.**
4.  **Apply the Levinson-Durbin algorithm to compute LPC coefficients.**
5.  **Analyze the properties and advantages of the Levinson-Durbin algorithm.**

---

### 1. Autocorrelation Method

#### 1.1 Concept of Autocorrelation

**Definition:** Autocorrelation is a measure of the similarity between a signal and a delayed version of itself as a function of the delay (lag). It essentially quantifies how well a signal correlates with itself at different time shifts.

**Formula:** For a discrete-time signal $s[n]$, the autocorrelation function $r_s(k)$ at lag $k$ is defined as:

$r_s(k) = \sum_{n=-\infty}^{\infty} s[n] s[n-k]$

For a finite-length signal $s[0], s[1], \ldots, s[N-1]$, the autocorrelation can be approximated as:

$r_s(k) = \sum_{n=k}^{N-1} s[n] s[n-k]$ for $0 \le k \le N-1$

And typically $r_s(k) = r_s(-k)$ and $r_s(k) = 0$ for $|k| \ge N$.

**Key Properties of Autocorrelation:**

*   **Symmetry:** $r_s(k) = r_s(-k)$
*   **Maximum at Zero Lag:** $r_s(0) = \sum_{n} s^2[n] \ge 0$. This represents the total energy of the signal.
*   **Decay:** For stationary signals, the autocorrelation tends to decay as the lag increases.
*   **Periodicity:** For periodic signals, the autocorrelation will also be periodic.

#### 1.2 Application in Speech Signal Analysis

Speech signals are often assumed to be **quasi-stationary**, meaning their statistical properties (like autocorrelation) remain relatively constant over short periods (e.g., 10-30 ms). This stationarity allows us to analyze speech using techniques that rely on statistical properties.

The autocorrelation function captures the **periodicities** and **dependencies** within the speech signal. These are crucial for modeling:

*   **Vowel sounds:** Exhibit strong periodicities due to vocal fold vibration.
*   **Consonant sounds:** Have more complex patterns, but autocorrelation can still reveal their underlying structure.

The autocorrelation function is the foundation for **Linear Predictive Coding (LPC)**, a widely used technique in speech processing for modeling the vocal tract.

---

### 2. Autocorrelation-Based Linear Prediction

Linear Prediction (LP) assumes that a speech sample $s[n]$ can be predicted as a linear combination of past samples.

**LP Model:**

$s[n] = \sum_{i=1}^{P} a_i s[n-i] + e[n]$

where:
*   $s[n]$ is the current speech sample.
*   $a_i$ are the **predictor coefficients** (or LPC coefficients).
*   $P$ is the **order of prediction**.
*   $e[n]$ is the **prediction error** or **residual signal**.

The goal of LPC is to find the predictor coefficients $a_i$ that minimize the mean squared error (MSE) between the actual speech sample and the predicted sample.

**Minimizing the Mean Squared Error:**

We want to minimize $E = E\{e^2[n]\} = E\{(s[n] - \sum_{i=1}^{P} a_i s[n-i])^2\}$.

Taking the expected value (or summing over a finite window), we get:

$MSE = \frac{1}{N} \sum_{n=P+1}^{N} (s[n] - \sum_{i=1}^{P} a_i s[n-i])^2$

To find the optimal $a_i$, we take the partial derivative of the MSE with respect to each $a_k$ and set it to zero.

$\frac{\partial MSE}{\partial a_k} = \frac{1}{N} \sum_{n=P+1}^{N} 2 (s[n] - \sum_{i=1}^{P} a_i s[n-i]) (-s[n-k]) = 0$

Simplifying and rearranging, we get:

$\sum_{n=P+1}^{N} s[n] s[n-k] = \sum_{i=1}^{P} a_i \sum_{n=P+1}^{N} s[n-i] s[n-k]$

**The Normal Equations:**

Using the autocorrelation function $r_s(k) = \sum_{n} s[n] s[n-k]$, and assuming a stationary signal where the summation is over a sufficiently large window, we can rewrite the above equation as:

$r_s(k) = \sum_{i=1}^{P} a_i r_s(k-i)$ for $k = 1, 2, \ldots, P$

These are known as the **normal equations** for LPC.

**Matrix Form:**

The normal equations can be written in matrix form:

$$
\begin{bmatrix}
r_s(0) & r_s(1) & r_s(2) & \cdots & r_s(P-1) \\
r_s(1) & r_s(0) & r_s(1) & \cdots & r_s(P-2) \\
r_s(2) & r_s(1) & r_s(0) & \cdots & r_s(P-3) \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
r_s(P-1) & r_s(P-2) & r_s(P-3) & \cdots & r_s(0)
\end{bmatrix}
\begin{bmatrix}
a_1 \\
a_2 \\
a_3 \\
\vdots \\
a_P
\end{bmatrix}
=
\begin{bmatrix}
r_s(1) \\
r_s(2) \\
r_s(3) \\
\vdots \\
r_s(P)
\end{bmatrix}
$$

This can be compactly written as: $\mathbf{R} \mathbf{a} = \mathbf{r}$

where:
*   $\mathbf{R}$ is the autocorrelation matrix (a symmetric Toeplitz matrix).
*   $\mathbf{a}$ is the vector of LPC coefficients $[a_1, a_2, \ldots, a_P]^T$.
*   $\mathbf{r}$ is the vector of autocorrelations $[r_s(1), r_s(2), \ldots, r_s(P)]^T$.

Solving this system of linear equations ($\mathbf{R} \mathbf{a} = \mathbf{r}$) yields the LPC coefficients.

---

### 3. The Levinson-Durbin Algorithm

Solving the system of equations $\mathbf{R} \mathbf{a} = \mathbf{r}$ directly using methods like Gaussian elimination has a computational complexity of $O(P^3)$. For speech processing, where $P$ can be around 10-12, this is manageable. However, as $P$ increases, or for real-time applications requiring efficiency, a more optimized approach is needed.

The Levinson-Durbin algorithm is a recursive algorithm that efficiently solves the autocorrelation normal equations in $O(P^2)$ time. It leverages the special Toeplitz structure of the autocorrelation matrix $\mathbf{R}$.

#### 3.1 Key Idea: Recursive Computation

The algorithm computes the LPC coefficients for increasing orders of prediction, starting from order 1 up to the desired order $P$. At each step $m$, it uses the optimal coefficients and prediction error for order $m-1$ to compute the optimal coefficients and prediction error for order $m$.

**Definitions for Order $m$:**

*   $a^{(m)}_i$: LPC coefficients for order $m$, where $i=1, \ldots, m$.
*   $k_m$: The $m$-th **reflection coefficient** (also called the partial autocorrelation coefficient or PARCOR coefficient).
*   $\epsilon_m$: The minimum mean squared prediction error for order $m$.

#### 3.2 The Algorithm Steps

We start with $m=1$ and recursively compute up to $P$.

**Initialization (m=0):**

*   Assume a prediction error of zero order, which is just the signal itself: $\epsilon_0 = r_s(0) = \sum_{n} s^2[n]$.
*   No prediction coefficients for order 0.

**Recursion for m = 1 to P:**

1.  **Compute the $m$-th Reflection Coefficient ($k_m$):**
    This coefficient is calculated using the autocorrelation values:

    $k_m = \frac{r_s(m) - \sum_{i=1}^{m-1} a^{(m-1)}_i r_s(m-i)}{ \epsilon_{m-1} }$

    *   **Important Note:** The summation term in the numerator is essentially the $m$-th predicted value of $s[n]$ using the $m-1$ order coefficients.

2.  **Update the LPC Coefficients ($a^{(m)}_i$):**
    The new coefficients for order $m$ are computed using the previous coefficients ($a^{(m-1)}_i$) and the reflection coefficient ($k_m$):

    $a^{(m)}_i = a^{(m-1)}_i - k_m a^{(m-1)}_{m-i}$ for $i = 1, \ldots, m-1$.

    And the $m$-th coefficient is simply the reflection coefficient:

    $a^{(m)}_m = k_m$

    *(Note: Some formulations might use a slightly different indexing for $a_i$, but the core idea is the recursive update. We'll stick to the convention where $a^{(m)}_m = k_m$.)*

3.  **Update the Minimum Mean Squared Prediction Error ($\epsilon_m$):**
    The error is reduced by the reflection coefficient:

    $\epsilon_m = \epsilon_{m-1} (1 - k_m^2)$

**Why is $k_m$ called the reflection coefficient?**

The reflection coefficients are related to the input reflection coefficients of a lossless acoustic tube, which models the vocal tract. $k_m$ represents the reflection of acoustic energy back from the $m$-th boundary in the tube.

#### 3.3 Properties and Advantages of Levinson-Durbin

*   **Computational Efficiency:** Reduces complexity from $O(P^3)$ to $O(P^2)$. This is crucial for real-time speech processing.
*   **Recursive Nature:** Allows for incremental computation. If we need coefficients for order $P$, we can obtain them by computing all intermediate orders.
*   **Stability:** Guarantees that the resulting LPC filter is stable if $|k_m| < 1$ for all $m$. The prediction error $\epsilon_m$ decreases monotonically with $m$.
*   **Toeplitz Matrix Exploitation:** The algorithm exploits the symmetric Toeplitz structure of the autocorrelation matrix.

---

### 4. Applying the Levinson-Durbin Algorithm: An Example

Let's compute LPC coefficients for $P=2$ using the following autocorrelation values:
$r_s(0) = 10$
$r_s(1) = 8$
$r_s(2) = 6$

**Initialization (m=0):**
$\epsilon_0 = r_s(0) = 10$

**Step 1: Compute for m=1**

1.  **Compute $k_1$:**
    Using the formula: $k_m = \frac{r_s(m) - \sum_{i=1}^{m-1} a^{(m-1)}_i r_s(m-i)}{ \epsilon_{m-1} }$
    For $m=1$, the summation term is empty (sum from $i=1$ to $0$).
    $k_1 = \frac{r_s(1)}{\epsilon_0} = \frac{8}{10} = 0.8$

2.  **Update $a^{(1)}_i$:**
    $a^{(1)}_1 = k_1 = 0.8$
    So, $a^{(1)} = [0.8]$

3.  **Update $\epsilon_1$:**
    $\epsilon_1 = \epsilon_0 (1 - k_1^2) = 10 (1 - 0.8^2) = 10 (1 - 0.64) = 10 \times 0.36 = 3.6$

**Step 2: Compute for m=2**

1.  **Compute $k_2$:**
    Using the formula: $k_m = \frac{r_s(m) - \sum_{i=1}^{m-1} a^{(m-1)}_i r_s(m-i)}{ \epsilon_{m-1} }$
    For $m=2$:
    $k_2 = \frac{r_s(2) - a^{(1)}_1 r_s(2-1)}{\epsilon_1} = \frac{r_s(2) - a^{(1)}_1 r_s(1)}{\epsilon_1}$
    $k_2 = \frac{6 - (0.8)(8)}{3.6} = \frac{6 - 6.4}{3.6} = \frac{-0.4}{3.6} \approx -0.111$

2.  **Update $a^{(2)}_i$:**
    $a^{(2)}_i = a^{(m-1)}_i - k_m a^{(m-1)}_{m-i}$
    For $i=1$:
    $a^{(2)}_1 = a^{(1)}_1 - k_2 a^{(1)}_{2-1} = a^{(1)}_1 - k_2 a^{(1)}_1 = 0.8 - (-0.111)(0.8) \approx 0.8 + 0.0888 = 0.8888$
    $a^{(2)}_2 = k_2 = -0.111$

    So, $a^{(2)} = [0.8888, -0.111]$ (approximately)

3.  **Update $\epsilon_2$:**
    $\epsilon_2 = \epsilon_1 (1 - k_2^2) = 3.6 (1 - (-0.111)^2) \approx 3.6 (1 - 0.0123) \approx 3.6 \times 0.9877 \approx 3.555$

**Result:** For prediction order $P=2$, the LPC coefficients are approximately $a_1 = 0.8888$ and $a_2 = -0.111$. The minimum mean squared prediction error is $\epsilon_2 \approx 3.555$.

---

### 5. Practice Questions

**Question 1:**
Given a signal $s[n] = \{1, 2, 1, -1, -2, -1\}$ for $n=0, \ldots, 5$.
Calculate the autocorrelation values $r_s(0)$, $r_s(1)$, and $r_s(2)$.

**Question 2:**
Consider the autocorrelation values from Question 1: $r_s(0)=11$, $r_s(1)=6$, $r_s(2)=1$.
Use the Levinson-Durbin algorithm to compute the LPC coefficients for order $P=1$.

**Question 3:**
Using the same autocorrelation values ($r_s(0)=11$, $r_s(1)=6$, $r_s(2)=1$), compute the LPC coefficients for order $P=2$ using the Levinson-Durbin algorithm. What are the reflection coefficients $k_1$ and $k_2$?

---

### Answers to Practice Questions

**Answer 1:**
$r_s(k) = \sum_{n=k}^{N-1} s[n] s[n-k]$ (with $N=6$)

*   $r_s(0) = s[0]^2 + s[1]^2 + s[2]^2 + s[3]^2 + s[4]^2 + s[5]^2$
    $r_s(0) = 1^2 + 2^2 + 1^2 + (-1)^2 + (-2)^2 + (-1)^2$
    $r_s(0) = 1 + 4 + 1 + 1 + 4 + 1 = 12$

*   $r_s(1) = s[1]s[0] + s[2]s[1] + s[3]s[2] + s[4]s[3] + s[5]s[4]$
    $r_s(1) = (2)(1) + (1)(2) + (-1)(1) + (-2)(-1) + (-1)(-2)$
    $r_s(1) = 2 + 2 - 1 + 2 + 2 = 7$

*   $r_s(2) = s[2]s[0] + s[3]s[1] + s[4]s[2] + s[5]s[3]$
    $r_s(2) = (1)(1) + (-1)(2) + (-2)(1) + (-1)(-1)$
    $r_s(2) = 1 - 2 - 2 + 1 = -2$

**Answer 2:**
Given: $r_s(0)=11$, $r_s(1)=6$. We need $P=1$.

**Initialization (m=0):**
$\epsilon_0 = r_s(0) = 11$

**Step 1: Compute for m=1**

1.  **Compute $k_1$:**
    $k_1 = \frac{r_s(1)}{\epsilon_0} = \frac{6}{11} \approx 0.545$

2.  **Update $a^{(1)}_1$:**
    $a^{(1)}_1 = k_1 = 0.545$

3.  **Update $\epsilon_1$:**
    $\epsilon_1 = \epsilon_0 (1 - k_1^2) = 11 (1 - (0.545)^2) \approx 11 (1 - 0.297) \approx 11 \times 0.703 \approx 7.733$

**Result for P=1:** $a_1 \approx 0.545$

**Answer 3:**
Given: $r_s(0)=11$, $r_s(1)=6$, $r_s(2)=1$. We need $P=2$.

From Answer 2, we have the results for $m=1$:
$k_1 = 0.545$, $a^{(1)}_1 = 0.545$, $\epsilon_1 = 7.733$

**Step 2: Compute for m=2**

1.  **Compute $k_2$:**
    $k_2 = \frac{r_s(2) - a^{(1)}_1 r_s(1)}{\epsilon_1}$
    $k_2 = \frac{1 - (0.545)(6)}{7.733} = \frac{1 - 3.27}{7.733} = \frac{-2.27}{7.733} \approx -0.2935$

2.  **Update $a^{(2)}_i$:**
    $a^{(2)}_1 = a^{(1)}_1 - k_2 a^{(1)}_{1} = 0.545 - (-0.2935)(0.545) \approx 0.545 + 0.1599 \approx 0.7049$
    $a^{(2)}_2 = k_2 = -0.2935$

3.  **Update $\epsilon_2$:**
    $\epsilon_2 = \epsilon_1 (1 - k_2^2) = 7.733 (1 - (-0.2935)^2) \approx 7.733 (1 - 0.0861) \approx 7.733 \times 0.9139 \approx 7.067$

**Result for P=2:** $a_1 \approx 0.7049$, $a_2 \approx -0.2935$.
**Reflection Coefficients:** $k_1 \approx 0.545$, $k_2 \approx -0.2935$.

---

### Important Points to Remember

*   **Autocorrelation captures the periodic nature of speech.**
*   **LPC models speech as an all-pole filter excited by a residual.**
*   **The normal equations for LPC are a system of linear equations involving autocorrelation values.**
*   **The Levinson-Durbin algorithm efficiently solves the normal equations in $O(P^2)$ time.**
*   **It's a recursive algorithm that builds up LPC coefficients and prediction errors from lower to higher orders.**
*   **Reflection coefficients ($k_m$) play a crucial role in the Levinson-Durbin algorithm and are indicators of filter stability.**
*   **The matrix of autocorrelations in the normal equations is a symmetric Toeplitz matrix, which is key to the efficiency of Levinson-Durbin.**
*   **For stable LPC filters, all reflection coefficients must have magnitudes less than 1 ($|k_m| < 1$).**
