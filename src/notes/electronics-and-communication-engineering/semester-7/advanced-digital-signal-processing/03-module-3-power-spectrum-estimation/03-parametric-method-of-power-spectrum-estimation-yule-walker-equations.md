---
title: "Parametric method of power spectrum estimation-Yule Walker equations"
subject: "ADVANCED DIGITAL SIGNAL PROCESSING"
module: "Module 3: Power spectrum estimation "
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff27d"
status: "completed"
scrapedAt: "2026-05-23T18:04:17.262Z"
---
# ADVANCED DIGITAL SIGNAL PROCESSING

## Module 3: Power Spectrum Estimation

### Topic: Parametric Method of Power Spectrum Estimation - Yule-Walker Equations

---

### 1. Introduction to Power Spectrum Estimation

Power Spectrum Estimation (PSE) is the process of estimating the power spectral density (PSD) of a random signal. The PSD represents how the power of a signal is distributed over frequency. In digital signal processing, we often deal with discrete-time random signals, and estimating their PSD is crucial for various applications like communication systems, radar, sonar, and biomedical signal analysis.

**Key Concepts:**

*   **Random Signal:** A signal whose future values cannot be predicted with certainty.
*   **Stationary Random Process:** A random process whose statistical properties (like mean and autocorrelation) do not change over time.
    *   **Wide-Sense Stationary (WSS):** A process $x[n]$ is WSS if:
        *   $E\{x[n]\} = \mu_x$ (constant mean)
        *   $E\{|x[n]|^2\} < \infty$ (finite power)
        *   $r_x[n, m] = E\{x[n]x^*[m]\} = r_x[n-m]$ (autocorrelation depends only on the time difference)
*   **Power Spectral Density (PSD):** For a stationary random process, the PSD $P_x(\omega)$ is the Fourier Transform of its autocorrelation sequence $r_x[k]$.
    $$P_x(\omega) = \mathcal{F}\{r_x[k]\} = \sum_{k=-\infty}^{\infty} r_x[k] e^{-j\omega k}$$
    This represents the distribution of signal power as a function of frequency.

**Relation to Course Outcomes:**

*   **CO1 (K2):** Understanding stationary random signals and their properties is fundamental to power spectrum estimation.
*   **CO3 (K3):** The definition of PSD directly involves the Fourier Transform of the autocorrelation function.

**Textbook References:**

*   **Oppenheim & Willsky (2/e, 2015):** Chapter 10 (Random Signals and Noise) and Chapter 9 (Fourier Series and Transform Properties) provide foundational knowledge of random processes and spectral analysis.
*   **Haykin (2/e, 2021):** Chapters 5 (Correlation Functions) and 6 (Spectral Analysis) are highly relevant.

---

### 2. Non-Parametric vs. Parametric Methods of Power Spectrum Estimation

There are two main approaches to estimating the PSD of a random signal:

*   **Non-Parametric Methods:** These methods estimate the PSD directly from the observed data without assuming any underlying model for the signal. Examples include the Periodogram and its modified versions (e.g., Bartlett, Welch methods). They are generally simpler to implement but can suffer from variance issues, especially with short data records.

*   **Parametric Methods:** These methods assume that the random signal can be represented by a parametric model (e.g., an autoregressive (AR) or moving average (MA) model). The parameters of this model are estimated from the data, and then the PSD is calculated using the estimated model. Parametric methods can provide smoother spectra and often have better resolution than non-parametric methods, especially when the assumed model is appropriate for the signal.

**Textbook References:**

*   **Oppenheim & Willsky (2/e, 2015):** Section 10.4 (Power Spectral Density) discusses the relationship between autocorrelation and PSD.
*   **Haykin (2/e, 2021):** Chapter 6 extensively covers both non-parametric and parametric spectral estimation techniques.

---

### 3. Parametric Modeling of Random Signals

A common approach in parametric PSE is to model the random signal $x[n]$ as the output of a Linear Time-Invariant (LTI) system driven by a white noise process.

**Key Model: Autoregressive (AR) Process**

An AR(p) process is characterized by the following linear difference equation:
$$x[n] = a_1 x[n-1] + a_2 x[n-2] + \dots + a_p x[n-p] + u[n]$$
where:
*   $x[n]$ is the output signal.
*   $a_1, a_2, \dots, a_p$ are the AR coefficients (parameters).
*   $u[n]$ is a white noise process with zero mean and variance $\sigma_u^2$.
*   $p$ is the order of the AR model.

This equation can be rewritten in terms of the system's impulse response $h[n]$ as:
$$x[n] = \sum_{k=1}^{p} a_k x[n-k] + u[n]$$
Or, in terms of the Z-transform:
$$X(z) = \frac{U(z)}{1 - \sum_{k=1}^{p} a_k z^{-k}}$$
The transfer function of the associated LTI system is $H(z) = \frac{1}{1 - \sum_{k=1}^{p} a_k z^{-k}}$.

**Relationship to PSD:**

If $x[n]$ is an AR(p) process driven by white noise $u[n]$ with power $\sigma_u^2$, and the associated LTI system $H(z)$ is stable, then the PSD of $x[n]$ is given by:
$$P_x(\omega) = |H(e^{j\omega})|^2 \sigma_u^2$$
$$P_x(\omega) = \frac{\sigma_u^2}{|1 - \sum_{k=1}^{p} a_k e^{-j\omega k}|^2}$$

**Goal of Parametric PSE:**

The goal is to estimate the parameters $a_1, \dots, a_p$ and $\sigma_u^2$ from the observed data $x[n]$. Once these parameters are estimated, the PSD can be computed using the formula above.

**Reference Books:**

*   **Lathi (2/e, 2009):** Chapter 12 (Random Signals and Spectral Analysis) provides a good introduction to random signals and their representations.
*   **Ziemer (4/e, 2013):** Chapter 11 (Random Signals) covers relevant concepts for signal modeling.

---

### 4. The Yule-Walker Equations

The Yule-Walker equations provide a method for finding the AR coefficients ($a_1, \dots, a_p$) of an AR(p) process by relating them to the autocorrelation sequence $r_x[k]$. They are derived from the property that if $x[n]$ is an AR(p) process, then its autocorrelation sequence also satisfies a similar linear recurrence relation.

**Derivation:**

Start with the AR(p) equation:
$$x[n] = -\sum_{k=1}^{p} a_k x[n-k] + u[n]$$

Multiply both sides by $x^*[n-m]$ (where $m \ge 0$) and take the expectation:
$$E\{x[n]x^*[n-m]\} = -\sum_{k=1}^{p} a_k E\{x[n-k]x^*[n-m]\} + E\{u[n]x^*[n-m]\}$$

Using the definition of autocorrelation $r_x[k] = E\{x[n]x^*[n-k]\}$, and the fact that $u[n]$ is uncorrelated with past values of $x$, we get:
$$r_x[m] = -\sum_{k=1}^{p} a_k r_x[m-k] + E\{u[n]x^*[n-m]\}$$

For $m > 0$, $E\{u[n]x^*[n-m]\} = 0$ because $u[n]$ is only correlated with $x[n]$ itself (at $m=0$).
Thus, for $m > 0$:
$$r_x[m] = -\sum_{k=1}^{p} a_k r_x[m-k]$$

Rearranging terms, we get the Yule-Walker equations for $m = 1, 2, \dots, p$:
$$r_x[m] + \sum_{k=1}^{p} a_k r_x[m-k] = 0$$

Now, consider the case when $m = 0$:
$$r_x[0] = -\sum_{k=1}^{p} a_k r_x[-k] + E\{u[n]x^*[n]\}$$
Since $r_x[k]$ is conjugate symmetric ($r_x[-k] = r_x^*[k]$), and $E\{u[n]x^*[n]\} = E\{u[n](-\sum_{i=1}^p a_i x[n-i] + u[n])^*\} = E\{u[n](-\sum a_i^* x^*[n-i] + u^*[n])\} = E\{u[n]u^*[n]\} = \sigma_u^2$ (assuming $u[n]$ is real for simplicity, or $\sigma_u^2$ is the variance of $u[n]$).
$$r_x[0] = -\sum_{k=1}^{p} a_k r_x^*[k] + \sigma_u^2$$

Rearranging for $\sigma_u^2$:
$$\sigma_u^2 = r_x[0] + \sum_{k=1}^{p} a_k r_x^*[k]$$

**Matrix Form of Yule-Walker Equations:**

The equations for $m = 1, 2, \dots, p$ can be written in matrix form. Let $\mathbf{r}_x = [r_x[1], r_x[2], \dots, r_x[p]]^T$ and $\mathbf{a} = [a_1, a_2, \dots, a_p]^T$.
Let $\mathbf{R}_p$ be the $p \times p$ autocorrelation matrix:
$$
\mathbf{R}_p =
\begin{bmatrix}
r_x[0] & r_x[1] & r_x[2] & \dots & r_x[p-1] \\
r_x^*[1] & r_x[0] & r_x[1] & \dots & r_x[p-2] \\
r_x^*[2] & r_x^*[1] & r_x[0] & \dots & r_x[p-3] \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
r_x^*[p-1] & r_x^*[p-2] & r_x^*[p-3] & \dots & r_x[0]
\end{bmatrix}
$$

The Yule-Walker equations for $m=1, \dots, p$ can be written as:
$$
\begin{bmatrix}
r_x[0] & r_x[1] & \dots & r_x[p-1] \\
r_x^*[1] & r_x[0] & \dots & r_x[p-2] \\
\vdots & \vdots & \ddots & \vdots \\
r_x^*[p-1] & r_x^*[p-2] & \dots & r_x[0]
\end{bmatrix}
\begin{bmatrix}
a_1 \\
a_2 \\
\vdots \\
a_p
\end{bmatrix}
=
\begin{bmatrix}
-r_x[1] \\
-r_x[2] \\
\vdots \\
-r_x[p]
\end{bmatrix}
$$
This can be compactly written as:
$$\mathbf{R}_p \mathbf{a} = -\mathbf{r}_x$$

Once $\mathbf{a}$ is found, $\sigma_u^2$ is calculated as:
$$\sigma_u^2 = r_x[0] + \sum_{k=1}^{p} a_k r_x^*[k]$$

**Procedure for Yule-Walker Estimation:**

1.  **Estimate the Autocorrelation Sequence:** From the observed data $x[0], x[1], \dots, x[N-1]$, estimate the autocorrelation sequence $r_x[k]$ for $k=0, 1, \dots, p$. A common estimator is the biased autocorrelation estimator:
    $$\hat{r}_x[k] = \frac{1}{N} \sum_{n=0}^{N-1-k} x[n]x^*[n+k]$$
    For real signals, this is $\hat{r}_x[k] = \frac{1}{N} \sum_{n=0}^{N-1-k} x[n]x[n+k]$.
    The unbiased estimator is also sometimes used.

2.  **Solve the Yule-Walker Equations:** Using the estimated autocorrelations $\{\hat{r}_x[0], \hat{r}_x[1], \dots, \hat{r}_x[p]\}$, form the matrix equation $\hat{\mathbf{R}}_p \mathbf{\hat{a}} = -\mathbf{\hat{r}}_x$, where $\mathbf{\hat{r}}_x = [\hat{r}_x[1], \dots, \hat{r}_x[p]]^T$. Solve this system of linear equations to find the estimated AR coefficients $\mathbf{\hat{a}} = [\hat{a}_1, \dots, \hat{a}_p]^T$.

3.  **Estimate the White Noise Variance:** Calculate the estimated variance of the driving white noise:
    $$\hat{\sigma}_u^2 = \hat{r}_x[0] + \sum_{k=1}^{p} \hat{a}_k \hat{r}_x^*[k]$$

4.  **Compute the PSD Estimate:** Use the estimated parameters to compute the PSD estimate:
    $$\hat{P}_x(\omega) = \frac{\hat{\sigma}_u^2}{|1 - \sum_{k=1}^{p} \hat{a}_k e^{-j\omega k}|^2}$$

**Important Points:**

*   The Yule-Walker equations require the autocorrelation sequence up to lag $p$.
*   The autocorrelation matrix $\mathbf{R}_p$ must be positive definite (or semi-definite) for a unique solution to exist. For stationary processes, this is generally true.
*   The choice of the model order $p$ is critical. Too low an order may not capture the signal's dynamics, while too high an order can lead to overfitting and spurious peaks.
*   The Yule-Walker method tends to produce smoother spectra compared to non-parametric methods.
*   It is closely related to the Maximum Likelihood (ML) estimation of AR parameters.

**Textbook References:**

*   **Oppenheim & Willsky (2/e, 2015):** Section 10.4.3 (Autoregressive processes) explains AR processes and their spectral properties.
*   **Haykin (2/e, 2021):** Chapter 6.4 (Yule-Walker method) is a dedicated section.

**Alignment with Course Outcomes:**

*   **CO1 (K2):** Understanding stationary signals is key to calculating autocorrelations.
*   **CO3 (K3):** The derivation and application of Yule-Walker equations heavily rely on Fourier Transform concepts for the PSD definition and the relationship between signal and its autocorrelation.
*   **CO4 (K3):** This topic directly addresses the analysis of discrete-time LTI systems (modeled as AR processes) using spectral analysis techniques.

---

### 5. Example: Yule-Walker Estimation for an AR(1) Process

Consider a real AR(1) process: $x[n] = a_1 x[n-1] + u[n]$, where $u[n]$ is zero-mean white noise with variance $\sigma_u^2$.

**Theoretical Autocorrelation:**
For a stable AR(1) process ($|a_1| < 1$), the autocorrelation is $r_x[k] = \frac{\sigma_u^2}{1-a_1^2} a_1^{|k|}$.
So, $r_x[0] = \frac{\sigma_u^2}{1-a_1^2}$ and $r_x[1] = \frac{\sigma_u^2}{1-a_1^2} a_1$.

**Yule-Walker Equations for p=1:**
From the general form $r_x[m] + \sum_{k=1}^{p} a_k r_x[m-k] = 0$, for $p=1$:
For $m=1$: $r_x[1] + a_1 r_x[0] = 0$.
This gives $a_1 = -\frac{r_x[1]}{r_x[0]}$.

And $\sigma_u^2 = r_x[0] + a_1 r_x^*[1]$. For real signals, $\sigma_u^2 = r_x[0] + a_1 r_x[1]$.

**Example Data:**
Let's assume we have observed a sequence of length $N=100$ samples of a real AR(1) process, and we have estimated the autocorrelations as:
$\hat{r}_x[0] = 10.5$
$\hat{r}_x[1] = 7.8$

**Estimation Steps:**

1.  **Estimate AR(1) coefficient:**
    Using the Yule-Walker equation for $p=1$:
    $\hat{a}_1 = -\frac{\hat{r}_x[1]}{\hat{r}_x[0]} = -\frac{7.8}{10.5} \approx -0.743$

2.  **Estimate white noise variance:**
    $\hat{\sigma}_u^2 = \hat{r}_x[0] + \hat{a}_1 \hat{r}_x[1] = 10.5 + (-0.743)(7.8) \approx 10.5 - 5.7954 \approx 4.7046$

3.  **Compute PSD Estimate:**
    The PSD estimate for an AR(1) process is $\hat{P}_x(\omega) = \frac{\hat{\sigma}_u^2}{|1 - \hat{a}_1 e^{-j\omega}|^2}$.
    $$\hat{P}_x(\omega) = \frac{4.7046}{|1 - (-0.743) e^{-j\omega}|^2} = \frac{4.7046}{|1 + 0.743(\cos\omega - j\sin\omega)|^2}$$
    $$\hat{P}_x(\omega) = \frac{4.7046}{(1 + 0.743\cos\omega)^2 + (0.743\sin\omega)^2}$$

This PSD will typically have a peak around the frequency where $1 - \hat{a}_1 e^{-j\omega}$ is minimized in magnitude. For a causal AR(1) process, this corresponds to a peak at $\omega=0$ if $a_1>0$ and $\omega=\pi$ if $a_1<0$. In this case, since $a_1$ is negative, we expect a peak at $\omega = \pi$.

---

### 6. Practice Questions and Exercises

**Question 1:**
An AR(2) process is described by $x[n] = a_1 x[n-1] + a_2 x[n-2] + u[n]$. Write down the Yule-Walker equations for determining $a_1$ and $a_2$ in terms of the autocorrelation sequence $r_x[k]$.

**Answer 1:**
The Yule-Walker equations for an AR(2) process are:
For $m=1$: $r_x[1] + a_1 r_x[0] + a_2 r_x[-1] = 0 \implies r_x[1] + a_1 r_x[0] + a_2 r_x^*[1] = 0$
For $m=2$: $r_x[2] + a_1 r_x[1] + a_2 r_x[0] = 0$

In matrix form:
$$
\begin{bmatrix}
r_x[0] & r_x[1] \\
r_x^*[1] & r_x[0]
\end{bmatrix}
\begin{bmatrix}
a_1 \\
a_2
\end{bmatrix}
=
\begin{bmatrix}
-r_x[1] \\
-r_x[2]
\end{bmatrix}
$$

**Question 2:**
A real random process is modeled as an AR(p) process. Its estimated autocorrelation sequence is given by $\hat{r}_x[0] = 5$, $\hat{r}_x[1] = 3$, and $\hat{r}_x[2] = 1.5$. Assuming an AR(2) model, find the estimated AR coefficients $\hat{a}_1, \hat{a}_2$ using the Yule-Walker equations.

**Answer 2:**
Using the Yule-Walker equations from Question 1 (for real signals, $r_x^*[k] = r_x[k]$):
1.  $r_x[1] + a_1 r_x[0] + a_2 r_x[1] = 0 \implies 3 + a_1(5) + a_2(3) = 0$
    $5a_1 + 3a_2 = -3$ (Equation A)
2.  $r_x[2] + a_1 r_x[1] + a_2 r_x[0] = 0 \implies 1.5 + a_1(3) + a_2(5) = 0$
    $3a_1 + 5a_2 = -1.5$ (Equation B)

We have a system of two linear equations:
A: $5a_1 + 3a_2 = -3$
B: $3a_1 + 5a_2 = -1.5$

Multiply Equation A by 5 and Equation B by 3:
$25a_1 + 15a_2 = -15$
$9a_1 + 15a_2 = -4.5$

Subtract the second new equation from the first:
$(25-9)a_1 + (15-15)a_2 = -15 - (-4.5)$
$16a_1 = -10.5$
$\hat{a}_1 = -\frac{10.5}{16} = -0.65625$

Substitute $\hat{a}_1$ into Equation A:
$5(-0.65625) + 3a_2 = -3$
$-3.28125 + 3a_2 = -3$
$3a_2 = -3 + 3.28125$
$3a_2 = 0.28125$
$\hat{a}_2 = \frac{0.28125}{3} = 0.09375$

So, $\hat{a}_1 = -0.65625$ and $\hat{a}_2 = 0.09375$.

**Question 3:**
The PSD of an AR(p) process is given by $P_x(\omega) = \frac{\sigma_u^2}{|1 - \sum_{k=1}^{p} a_k e^{-j\omega k}|^2}$. For an AR(1) process, $x[n] = 0.9 x[n-1] + u[n]$, with $\sigma_u^2 = 1$. Calculate the theoretical PSD and identify the frequency band where most of the power is concentrated.

**Answer 3:**
Given AR(1) process: $x[n] = 0.9 x[n-1] + u[n]$, so $a_1 = 0.9$ and $\sigma_u^2 = 1$.
The PSD is $P_x(\omega) = \frac{\sigma_u^2}{|1 - a_1 e^{-j\omega}|^2}$.
$$P_x(\omega) = \frac{1}{|1 - 0.9 e^{-j\omega}|^2} = \frac{1}{|1 - 0.9(\cos\omega - j\sin\omega)|^2}$$
$$P_x(\omega) = \frac{1}{(1 - 0.9\cos\omega)^2 + (0.9\sin\omega)^2}$$
$$P_x(\omega) = \frac{1}{1 - 1.8\cos\omega + 0.81\cos^2\omega + 0.81\sin^2\omega}$$
$$P_x(\omega) = \frac{1}{1 - 1.8\cos\omega + 0.81(\cos^2\omega + \sin^2\omega)}$$
$$P_x(\omega) = \frac{1}{1 - 1.8\cos\omega + 0.81} = \frac{1}{1.81 - 1.8\cos\omega}$$

To find where most power is concentrated, we need to find the frequency where $P_x(\omega)$ is maximum. This occurs when the denominator is minimum. The term $\cos\omega$ is minimum when $\omega=0$, where $\cos(0)=1$.
As $\omega$ increases towards $\pi$, $\cos\omega$ decreases. The minimum value of $1.81 - 1.8\cos\omega$ occurs at $\omega=0$ (where $\cos\omega=1$) or $\omega=\pi$ (where $\cos\omega=-1$).
Since $a_1 = 0.9$ is positive, the peak should be at $\omega=0$. Let's evaluate:
At $\omega=0$: $P_x(0) = \frac{1}{1.81 - 1.8(1)} = \frac{1}{0.01} = 100$.
At $\omega=\pi$: $P_x(\pi) = \frac{1}{1.81 - 1.8(-1)} = \frac{1}{1.81 + 1.8} = \frac{1}{3.61} \approx 0.277$.

The maximum power is concentrated at $\omega=0$. This is expected for an AR(1) process with a positive coefficient, as it implies a strong correlation with past values, leading to a low-frequency phenomenon. The bandwidth of the peak is related to the value of $a_1$. A larger $|a_1|$ leads to a narrower peak.

---

### 7. Summary and Important Points to Remember

*   **Parametric PSE** models a signal as an LTI system driven by white noise. The **AR(p) model** is a common choice.
*   The **Yule-Walker equations** relate the AR coefficients ($a_1, \dots, a_p$) to the autocorrelation sequence ($r_x[0], \dots, r_x[p]$) of the AR process.
*   The core Yule-Walker equations for $m=1, \dots, p$ are: $r_x[m] + \sum_{k=1}^{p} a_k r_x[m-k] = 0$.
*   These equations can be solved using matrix inversion: $\mathbf{a} = -\mathbf{R}_p^{-1} \mathbf{r}_x$, where $\mathbf{R}_p$ is the autocorrelation matrix and $\mathbf{r}_x = [r_x[1], \dots, r_x[p]]^T$.
*   The variance of the driving white noise $\sigma_u^2$ is estimated as $\sigma_u^2 = r_x[0] + \sum_{k=1}^{p} a_k r_x^*[k]$.
*   The PSD estimate is then calculated as $\hat{P}_x(\omega) = \frac{\hat{\sigma}_u^2}{|1 - \sum_{k=1}^{p} \hat{a}_k e^{-j\omega k}|^2}$.
*   Accurate estimation of the autocorrelation sequence from data is crucial.
*   The choice of model order $p$ significantly impacts the performance of the Yule-Walker method.

---
This concludes the study notes for the Yule-Walker equations in parametric power spectrum estimation. Remember to practice the calculations and understand the underlying principles of random signal modeling and spectral analysis.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
