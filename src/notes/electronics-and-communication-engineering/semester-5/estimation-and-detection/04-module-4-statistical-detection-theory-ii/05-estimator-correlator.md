---
title: "estimator-correlator"
subject: "ESTIMATION AND DETECTION"
module: "Module 4: Statistical Detection Theory II"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780febe5"
status: "completed"
scrapedAt: "2026-05-23T17:57:00.178Z"
---
# ESTIMATION AND DETECTION

## Module 4: Statistical Detection Theory II

### Topic: Estimator-Correlator

**Learning Outcomes:**

*   Understand the relationship between estimation and detection problems.
*   Derive the structure and operation of the estimator-correlator.
*   Analyze the performance of the estimator-correlator in various scenarios.
*   Apply the estimator-correlator for parameter estimation and signal detection.

**Course Outcomes Alignment:**

*   **CO1 (K2):** Understanding the foundational link between estimation and detection principles.
*   **CO2 (K3):** Applying the estimator-correlator for parameter estimation.
*   **CO3 (K2):** Illustrating the detection aspect of the estimator-correlator.
*   **CO4 (K3):** Applying the decision rule derived from the estimator-correlator.

---

### 1. Introduction: The Interplay Between Estimation and Detection

The estimator-correlator is a fundamental concept that bridges the gap between statistical estimation and detection theory. Often, a problem can be framed as either estimating a parameter or detecting the presence of a signal. The estimator-correlator demonstrates how these two seemingly different tasks are intimately related, and how optimal solutions for one can inform the solution for the other.

**Key Concept:** Many signal processing problems involve determining the presence or absence of a signal and simultaneously estimating its unknown parameters.

**Example:** In radar systems, we want to detect if an object is present (detection) and, if so, estimate its range and velocity (estimation).

**Kay, Vol II, Chapter 3: Detection of Known Signals in White Gaussian Noise:** Introduces the concept of the Generalized Likelihood Ratio Test (GLRT) which forms the basis for many detection problems. The estimator-correlator can be seen as a manifestation of the GLRT when parameters are unknown.

**Van Trees, Vol I, Chapter 3: The General Detection Problem:** Discusses the framework of hypothesis testing, where one hypothesis is the absence of a signal and the other is the presence of a signal with unknown parameters.

---

### 2. The Estimator-Correlator Framework

The estimator-correlator operates by first performing a form of estimation on the received signal to determine the most likely value of an unknown parameter. This estimated parameter is then used to construct a test statistic for hypothesis testing (detection).

#### 2.1 The Problem Setup

Consider the general problem of detecting a signal $s(t; \theta)$ in additive white Gaussian noise (AWGN). The received signal $y(t)$ is given by:

$y(t) = s(t; \theta) + n(t)$

where:
*   $y(t)$ is the received signal for $0 \le t \le T$.
*   $s(t; \theta)$ is the signal component, which depends on an unknown parameter $\theta$.
*   $\theta$ is the parameter to be estimated and/or detected.
*   $n(t)$ is AWGN with zero mean and a power spectral density of $N_0/2$.

We are interested in deciding between two hypotheses:

*   **$H_0$ (Null Hypothesis):** The signal is absent. In its simplest form, this means $y(t) = n(t)$.
*   **$H_1$ (Alternative Hypothesis):** The signal is present with parameter $\theta$. $y(t) = s(t; \theta) + n(t)$.

**Crucial Point:** The parameter $\theta$ is unknown under $H_1$. This makes it a composite hypothesis testing problem.

#### 2.2 The Likelihood Function

The likelihood function for the received signal $y(t)$ given $\theta$ is:

$L(y | \theta) = p(y | \theta) = \frac{1}{\sqrt{(2\pi \sigma^2)^n}} \exp\left(-\frac{1}{2\sigma^2} \sum_{i=1}^n (y_i - s_i(\theta))^2 \right)$

For continuous-time signals, using the Karhunen-Loeve expansion or simply considering a discrete-time equivalent, the exponent in the likelihood function is related to the squared error between the received signal and the signal with a specific $\theta$.

#### 2.3 The Estimator-Correlator Structure

The estimator-correlator typically follows these steps:

1.  **Estimation of $\theta$:** Find the Maximum Likelihood (ML) estimate of $\theta$, denoted as $\hat{\theta}_{ML}$. This is done by maximizing the likelihood function (or equivalently, minimizing the negative log-likelihood).

    $\hat{\theta}_{ML} = \arg \max_{\theta} L(y | \theta)$

    In the case of AWGN, maximizing $L(y|\theta)$ is equivalent to minimizing the mean squared error (MSE) between the received signal and the hypothesized signal:

    $\hat{\theta}_{ML} = \arg \min_{\theta} \int_0^T [y(t) - s(t; \theta)]^2 dt$

    Expanding this, we get:

    $\hat{\theta}_{ML} = \arg \min_{\theta} \left( \int_0^T y^2(t) dt - 2 \int_0^T y(t) s(t; \theta) dt + \int_0^T s^2(t; \theta) dt \right)$

    Since $\int_0^T y^2(t) dt$ is constant with respect to $\theta$, and for some signals $\int_0^T s^2(t; \theta) dt$ is also constant, finding the minimum is equivalent to maximizing the correlation term:

    $\hat{\theta}_{ML} = \arg \max_{\theta} \left( 2 \int_0^T y(t) s(t; \theta) dt - \int_0^T s^2(t; \theta) dt \right)$

    If $\int_0^T s^2(t; \theta) dt$ is constant, then:

    $\hat{\theta}_{ML} = \arg \max_{\theta} \int_0^T y(t) s(t; \theta) dt$

    This integral term is a **correlation** between the received signal $y(t)$ and the known signal template $s(t; \theta)$.

2.  **Detection using the Estimated $\theta$:** Once $\hat{\theta}_{ML}$ is obtained, it is used to construct a test statistic for decision making. A common approach is to use the maximized value of the correlation term or a function of it.

    Let the correlation be $R_y(\theta) = \int_0^T y(t) s(t; \theta) dt$.

    The decision rule is often based on comparing $R_y(\hat{\theta}_{ML})$ (or a related quantity) to a threshold.

**Kay, Vol I, Chapter 5: Maximum Likelihood Estimation:** Provides the derivation for ML estimation, showing how it leads to minimizing the MSE and thus correlating the received signal with the signal model.

**Hayes, Chapter 6: Linear Estimation:** While not directly on estimator-correlator, it discusses the Wiener filter which involves correlation and is related to optimal estimation in linear systems.

---

### 3. Derivation for a Specific Case: Signal with Unknown Amplitude

Let's consider a specific scenario to illustrate the estimator-correlator.

**Problem:** Detect the presence of a known signal $s(t)$ with an unknown amplitude $A$ in AWGN.

$y(t) = A s(t) + n(t)$, $0 \le t \le T$

Hypotheses:
*   $H_0$: $y(t) = n(t)$ (Signal absent, $A=0$)
*   $H_1$: $y(t) = A s(t) + n(t)$, where $A \neq 0$ is unknown.

**1. Maximum Likelihood Estimation of $A$:**

The likelihood function for a discrete-time observation vector $\mathbf{y}$ of length $N$:

$\mathbf{y} = A \mathbf{s} + \mathbf{n}$

$p(\mathbf{y} | A) = \frac{1}{(2\pi \sigma^2)^{N/2}} \exp\left(-\frac{1}{2\sigma^2} \|\mathbf{y} - A \mathbf{s}\|^2 \right)$

To find $\hat{A}_{ML}$, we minimize $\|\mathbf{y} - A \mathbf{s}\|^2$:

$\frac{d}{dA} \|\mathbf{y} - A \mathbf{s}\|^2 = \frac{d}{dA} (\mathbf{y}^T \mathbf{y} - 2A \mathbf{s}^T \mathbf{y} + A^2 \mathbf{s}^T \mathbf{s}) = 0$

$-2 \mathbf{s}^T \mathbf{y} + 2A \mathbf{s}^T \mathbf{s} = 0$

$A \mathbf{s}^T \mathbf{s} = \mathbf{s}^T \mathbf{y}$

$\hat{A}_{ML} = \frac{\mathbf{s}^T \mathbf{y}}{\mathbf{s}^T \mathbf{s}} = \frac{\sum_{i=1}^N s_i y_i}{\sum_{i=1}^N s_i^2}$

In continuous-time, this is:

$\hat{A}_{ML} = \frac{\int_0^T y(t) s(t) dt}{\int_0^T s^2(t) dt}$

This is the correlator output divided by the energy of the signal $s(t)$.

**2. Detection using $\hat{A}_{ML}$:**

Now we use $\hat{A}_{ML}$ to make a decision. Under $H_1$, the received signal is $y(t) = A s(t) + n(t)$. The optimal detector (e.g., using GLRT or matched filter) will involve the term $\int_0^T y(t) s(t) dt$.

Let's consider the GLRT for this problem. The null hypothesis is $A=0$. The alternative hypothesis is $A \neq 0$.

$L(y) = \frac{\max_{A} p(y | A, H_1)}{p(y | H_0)} = \frac{p(y | \hat{A}_{ML}, H_1)}{p(y | A=0, H_0)}$

The numerator is maximized when $A = \hat{A}_{ML}$.
$p(y | \hat{A}_{ML}, H_1) \propto \exp\left(-\frac{1}{2\sigma^2} \|\mathbf{y} - \hat{A}_{ML} \mathbf{s}\|^2 \right)$

The denominator is $p(y | H_0) = p(y | A=0, H_0) \propto \exp\left(-\frac{1}{2\sigma^2} \|\mathbf{y}\|^2 \right)$

$\log L(y) = \log p(y | \hat{A}_{ML}, H_1) - \log p(y | H_0)$
$\log L(y) \propto -\frac{1}{2\sigma^2} \|\mathbf{y} - \hat{A}_{ML} \mathbf{s}\|^2 - \left(-\frac{1}{2\sigma^2} \|\mathbf{y}\|^2 \right)$
$\log L(y) \propto -\frac{1}{2\sigma^2} \left( \|\mathbf{y}\|^2 - 2\hat{A}_{ML} \mathbf{s}^T \mathbf{y} + \hat{A}_{ML}^2 \|\mathbf{s}\|^2 - \|\mathbf{y}\|^2 \right)$
$\log L(y) \propto \frac{1}{2\sigma^2} \left( 2\hat{A}_{ML} \mathbf{s}^T \mathbf{y} - \hat{A}_{ML}^2 \|\mathbf{s}\|^2 \right)$

Substitute $\hat{A}_{ML} = \frac{\mathbf{s}^T \mathbf{y}}{\|\mathbf{s}\|^2}$:

$\log L(y) \propto \frac{1}{2\sigma^2} \left( 2 \frac{\mathbf{s}^T \mathbf{y}}{\|\mathbf{s}\|^2} \mathbf{s}^T \mathbf{y} - \left(\frac{\mathbf{s}^T \mathbf{y}}{\|\mathbf{s}\|^2}\right)^2 \|\mathbf{s}\|^2 \right)$
$\log L(y) \propto \frac{1}{2\sigma^2} \left( \frac{2(\mathbf{s}^T \mathbf{y})^2}{\|\mathbf{s}\|^2} - \frac{(\mathbf{s}^T \mathbf{y})^2}{\|\mathbf{s}\|^2} \right)$
$\log L(y) \propto \frac{1}{2\sigma^2} \frac{(\mathbf{s}^T \mathbf{y})^2}{\|\mathbf{s}\|^2}$

The test statistic is proportional to $(\mathbf{s}^T \mathbf{y})^2$. This is the square of the output of a correlator matched to $s(t)$.

Decision Rule: Decide $H_1$ if $(\mathbf{s}^T \mathbf{y})^2 > \eta$, otherwise decide $H_0$.
Or, equivalently, decide $H_1$ if $|\mathbf{s}^T \mathbf{y}| > \sqrt{\eta}$.

The quantity $\mathbf{s}^T \mathbf{y} = \int_0^T s(t) y(t) dt$ is the output of the correlator.

**Summary for this case:**
*   The estimator for $A$ is derived by maximizing the likelihood function, which leads to correlating the received signal with the known signal $s(t)$.
*   The detection rule is based on the magnitude of this correlation, indicating the strength of the match between the received signal and the signal template.

**Important Point:** The structure of the detector is essentially a correlator followed by a decision device. The correlator's output is used to estimate the parameter (e.g., amplitude), and then a threshold comparison on this (or a related quantity) determines the detection outcome.

---

### 4. Generalized Estimator-Correlator

The concept extends to signals with unknown parameters that are not just amplitude but also frequency, phase, time delay, etc.

**Problem:** $y(t) = s(t - \tau; \theta) + n(t)$, where $\tau$ and $\theta$ are unknown.

The estimator-correlator involves:

1.  **Parameter Estimation:** Estimating $\theta$ and $\tau$ by maximizing the likelihood function over these parameters. This often involves cross-correlating the received signal $y(t)$ with shifted and modified versions of the signal template $s(t)$.

    $\hat{\tau}_{ML}, \hat{\theta}_{ML} = \arg \max_{\tau, \theta} \int_0^T y(t) s(t - \tau; \theta) dt$ (assuming energy is constant)

2.  **Detection:** Using the estimated parameters to form a test statistic. This statistic is often related to the maximized value of the correlation integral.

    The test statistic might be:
    $T = \max_{\tau, \theta} \int_0^T y(t) s(t - \tau; \theta) dt$

    Or, for specific cases like unknown frequency, it might be the output of a bank of filters (correlators) at different frequencies.

**Kay, Vol II, Chapter 5: Detection of Signals in Noise with Unknown Parameters:** This chapter delves into the GLRT for composite hypothesis testing, where the estimator-correlator structure emerges naturally from maximizing the likelihood ratio.

**Example: Unknown Frequency:**
If we are looking for a sinusoidal signal $s(t) = A \sin(\omega t + \phi) + n(t)$, and $\omega$ is unknown, we would typically use a bank of matched filters (correlators) tuned to different frequencies. The output of each filter is correlated with the expected signal at that frequency. The maximum of these correlator outputs is then used for detection, and the frequency corresponding to the maximum output is the estimated frequency.

---

### 5. Performance Analysis

The performance of the estimator-correlator depends on the signal-to-noise ratio (SNR) and the structure of the signal and the parameters being estimated/detected.

#### 5.1 Probability of Error (for Detection)

The probability of error in detecting the signal depends on the threshold chosen for the decision rule. For a given threshold, the probability of false alarm (deciding $H_1$ when $H_0$ is true) and probability of detection (deciding $H_1$ when $H_1$ is true) are calculated.

**Key Metric:** Receiver Operating Characteristic (ROC) curve, which plots the probability of detection versus the probability of false alarm for varying thresholds.

#### 5.2 Estimation Accuracy (for Estimation)

The accuracy of the estimated parameter $\hat{\theta}$ can be characterized by its variance. The Cramer-Rao Lower Bound (CRLB) provides a lower bound on the variance of any unbiased estimator. The ML estimator often achieves the CRLB at high SNRs.

**Kay, Vol I, Chapter 3: Cramer-Rao Lower Bound:** Explains how to calculate the CRLB, providing a benchmark for the performance of estimators.

**Kay, Vol II, Chapter 3: Performance of the Matched Filter:** Discusses the SNR at the output of a matched filter, which is directly related to the correlator's output and impacts detection performance.

#### 5.3 The Trade-off

There's often a trade-off:

*   **High SNR:** The estimation of $\theta$ is accurate, and the detection performance is good. The estimator-correlator performs close to optimal.
*   **Low SNR:** The estimation of $\theta$ is poor, which in turn degrades the detection performance. The structure of the estimator-correlator is still optimal in the sense of maximizing the likelihood ratio under the assumed model.

---

### 6. Applications

The estimator-correlator principle is widely used in various fields:

*   **Radar and Sonar:** Detecting targets and estimating range, velocity, and angle.
*   **Communications:** Detecting transmitted symbols and estimating carrier frequency, phase, and timing.
*   **Image Processing:** Edge detection, feature matching, and object recognition.
*   **Biomedical Engineering:** Analyzing physiological signals (e.g., ECG, EEG) for detecting anomalies and estimating parameters.

**Example: Communication Receiver**
In a digital communication system, a receiver needs to detect which symbol was transmitted. If the carrier frequency or timing is not perfectly known, the receiver can use estimator-correlator techniques. It might correlate the received signal with templates of all possible symbols, potentially shifted in time or frequency, to jointly estimate the timing and detect the symbol.

---

### 7. Practice Questions and Exercises

**Question 1:**
Consider the problem of detecting a signal $y(t) = s(t) + n(t)$ in AWGN, where $s(t)$ is a known deterministic signal with energy $E_s = \int_0^T s^2(t) dt$, and $n(t)$ is AWGN with power spectral density $N_0/2$. Formulate the likelihood ratio test and show that the optimal detector is a correlator followed by a threshold device. What is the test statistic?

**Answer 1:**
The hypotheses are:
$H_0$: $y(t) = n(t)$
$H_1$: $y(t) = s(t) + n(t)$

The likelihood ratio is:
$L(y) = \frac{p(y | H_1)}{p(y | H_0)}$

For AWGN, the probability density functions are Gaussian.
$p(y | H_0) \propto \exp\left(-\frac{1}{N_0} \int_0^T y^2(t) dt\right)$
$p(y | H_1) \propto \exp\left(-\frac{1}{N_0} \int_0^T (y(t) - s(t))^2 dt\right)$

The log-likelihood ratio is:
$\ln L(y) = \ln p(y | H_1) - \ln p(y | H_0)$
$\ln L(y) \propto -\frac{1}{N_0} \int_0^T (y(t) - s(t))^2 dt - \left(-\frac{1}{N_0} \int_0^T y^2(t) dt\right)$
$\ln L(y) \propto -\frac{1}{N_0} \int_0^T (y^2(t) - 2y(t)s(t) + s^2(t)) dt + \frac{1}{N_0} \int_0^T y^2(t) dt$
$\ln L(y) \propto \frac{1}{N_0} \int_0^T (2y(t)s(t) - s^2(t)) dt$
$\ln L(y) \propto \int_0^T y(t)s(t) dt - \frac{1}{2} \int_0^T s^2(t) dt$

The decision rule is to compare $\ln L(y)$ to a threshold $\eta'$.
$\int_0^T y(t)s(t) dt - \frac{1}{2} E_s > \eta'$
$\int_0^T y(t)s(t) dt > \eta''$

The test statistic is the output of the correlator: $R_y = \int_0^T y(t)s(t) dt$.
The optimal detector is a correlator matched to $s(t)$, followed by a threshold device.

**Question 2:**
Consider the problem of estimating the amplitude $A$ of a known signal $s(t)$ in AWGN, $y(t) = A s(t) + n(t)$.
a) Derive the Maximum Likelihood estimate of $A$, $\hat{A}_{ML}$.
b) If the threshold for detecting the signal is set such that $P_{FA}$ is low, what quantity would you compare the correlator output to? Relate this to $\hat{A}_{ML}$.

**Answer 2:**
a) As derived in Section 3, the ML estimate of $A$ is:
$\hat{A}_{ML} = \frac{\int_0^T y(t) s(t) dt}{\int_0^T s^2(t) dt}$
This is the correlator output divided by the signal energy.

b) The test statistic for detection (from Question 1) is the correlator output $R_y = \int_0^T y(t)s(t) dt$.
To set a low $P_{FA}$, we choose a high threshold. The detection decision is $H_1$ if $R_y > \eta''$.
From part (a), we can express the correlator output in terms of the estimated amplitude:
$R_y = \hat{A}_{ML} E_s$ (ignoring noise for a moment in the relation).
So, comparing $R_y$ to a threshold is equivalent to comparing $\hat{A}_{ML} E_s$ to a threshold, or more directly, comparing $\hat{A}_{ML}$ to a threshold:
$\hat{A}_{ML} > \frac{\eta''}{E_s} = \eta_{A}$

Thus, a high threshold on the correlator output corresponds to a high estimated amplitude, which makes sense because a stronger signal implies higher amplitude.

---

### 8. Key Points to Remember

*   **The Estimator-Correlator Principle:** Merges parameter estimation and signal detection. The same correlation operation is fundamental to both.
*   **ML Estimation:** For Gaussian noise, ML estimation of signal parameters often involves maximizing a correlation integral.
*   **Optimal Detector Structure:** For detecting a signal with unknown parameters in AWGN, the optimal detector is typically a correlator (or a bank of correlators) followed by a threshold device.
*   **Test Statistic:** The test statistic for detection is often derived from the maximized value of the likelihood function, which is related to the output of the correlator.
*   **Parameter Estimation for Detection:** The estimated parameter (e.g., amplitude, delay) from the estimation step can be used to refine the detection decision or provide additional information.
*   **Applications:** Ubiquitous in radar, communications, and other signal processing domains where signals with unknown characteristics need to be detected.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 9. Further Reading and References

*   **Kay, S. M. (2010).** *Fundamentals of Statistical Signal Processing, Vol II: Detection Theory* (3rd ed.). Pearson. (Crucial for GLRT, matched filtering, and performance analysis).
*   **Van Trees, H. L. (2001).** *Detection, Estimation, and Modulation Theory, Vol. I* (2nd ed.). John Wiley & Sons. (Provides a comprehensive theoretical foundation for detection and estimation).
*   **Hayes, M. H. (2018).** *Statistical Digital Signal Processing and Modelling* (2nd ed.). John Wiley & Sons. (Offers insights into practical signal processing techniques, including estimation in digital contexts).

---