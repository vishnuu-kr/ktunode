---
title: "detection of random signals"
subject: "ESTIMATION AND DETECTION"
module: "Module 4: Statistical Detection Theory II"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780febe4"
status: "completed"
scrapedAt: "2026-05-23T17:56:59.440Z"
---
# ESTIMATION AND DETECTION: Module 4 - Statistical Detection Theory II

## Topic: Detection of Random Signals

---

### **Module Overview**

This module extends the foundational concepts of statistical detection theory to address the more complex scenario of detecting signals that are not deterministic but exhibit random behavior. We will explore how to design optimal detectors when the signal itself is a random process, and how to evaluate their performance. This builds upon the understanding of hypothesis testing for deterministic signals and lays the groundwork for analyzing more realistic signal detection problems.

---

### **1. Introduction to Random Signals and Detection**

**Key Concept:** Unlike deterministic signals where the signal waveform is known up to a few unknown parameters, random signals are characterized by their statistical properties (e.g., mean, autocorrelation). Detecting such signals requires accounting for this inherent randomness.

*   **Definition: Random Signal:** A signal whose value at any given time is a random variable. These signals can be described by probability density functions, statistical moments, and stochastic processes.
    *   **Example:** Thermal noise, speech signals, seismic waves.
*   **Hypothesis Testing with Random Signals:**
    *   **Null Hypothesis ($H_0$):** The observed data consists only of noise (or a known deterministic component).
    *   **Alternative Hypothesis ($H_1$):** The observed data consists of noise *plus* a random signal.
*   **Challenges:**
    *   The signal waveform is unknown, only its statistical description is available.
    *   The likelihood function must be computed based on the statistical properties of the random signal.

---

### **2. Likelihood Ratio Test (LRT) for Random Signals**

**Key Concept:** The Generalized Likelihood Ratio Test (GLRT) is fundamental for detecting random signals. It involves comparing the likelihood of the data under $H_1$ (signal + noise) versus $H_0$ (noise only), where the signal parameters are unknown and must be estimated.

*   **Model:**
    *   $H_0: \mathbf{y} = \mathbf{n}$ (where $\mathbf{y}$ is the observation vector, $\mathbf{n}$ is noise)
    *   $H_1: \mathbf{y} = \mathbf{s} + \mathbf{n}$ (where $\mathbf{s}$ is the random signal vector)
*   **Assumptions (Commonly):**
    *   Noise $\mathbf{n}$ is zero-mean Gaussian with covariance matrix $\mathbf{R}_n$. $p(\mathbf{n} | H_0) = \mathcal{N}(\mathbf{0}, \mathbf{R}_n)$.
    *   Signal $\mathbf{s}$ is a zero-mean Gaussian random vector with covariance matrix $\mathbf{R}_s$. The signal and noise are uncorrelated: $E[\mathbf{s}\mathbf{n}^T] = \mathbf{0}$.
*   **Likelihood Functions:**
    *   Under $H_0$: $p(\mathbf{y} | H_0) = \mathcal{N}(\mathbf{0}, \mathbf{R}_n) = \frac{1}{(2\pi)^{N/2} |\mathbf{R}_n|^{1/2}} \exp\left(-\frac{1}{2}\mathbf{y}^T \mathbf{R}_n^{-1} \mathbf{y}\right)$
    *   Under $H_1$: The total observation $\mathbf{y}$ is Gaussian with mean $\mathbf{0}$ and covariance $\mathbf{R}_y = \mathbf{R}_s + \mathbf{R}_n$.
        $p(\mathbf{y} | H_1) = \mathcal{N}(\mathbf{0}, \mathbf{R}_s + \mathbf{R}_n) = \frac{1}{(2\pi)^{N/2} |\mathbf{R}_s + \mathbf{R}_n|^{1/2}} \exp\left(-\frac{1}{2}\mathbf{y}^T (\mathbf{R}_s + \mathbf{R}_n)^{-1} \mathbf{y}\right)$
*   **Generalized Likelihood Ratio Test (GLRT):**
    The test involves comparing the ratio of the maximum likelihoods of the data under each hypothesis, considering all possible values of the unknown signal parameters. When the signal itself is random, we are essentially comparing the probability density of observing $\mathbf{y}$ under $H_1$ (which involves averaging over all possible random signals $\mathbf{s}$) versus $H_0$.

    For the case where the signal is a zero-mean Gaussian with known covariance $\mathbf{R}_s$ and the noise is zero-mean Gaussian with known covariance $\mathbf{R}_n$, the GLRT is equivalent to the LRT when the signal is known. The test statistic is:

    $\Lambda(\mathbf{y}) = \frac{p(\mathbf{y} | H_1)}{p(\mathbf{y} | H_0)} = \frac{|\mathbf{R}_n|^{1/2}}{|\mathbf{R}_s + \mathbf{R}_n|^{1/2}} \exp\left(-\frac{1}{2}\mathbf{y}^T (\mathbf{R}_s + \mathbf{R}_n)^{-1} \mathbf{y} + \frac{1}{2}\mathbf{y}^T \mathbf{R}_n^{-1} \mathbf{y}\right)$

    The decision rule is $\Lambda(\mathbf{y}) > \eta$ (for a specific threshold $\eta$).

*   **Simplification for Known Covariances:** When $\mathbf{R}_n$ is known and invertible, and $\mathbf{R}_s$ is known and invertible, the test statistic can be simplified by focusing on the exponent:

    $-\frac{1}{2}\mathbf{y}^T (\mathbf{R}_s + \mathbf{R}_n)^{-1} \mathbf{y} + \frac{1}{2}\mathbf{y}^T \mathbf{R}_n^{-1} \mathbf{y} > \text{threshold}$

    Using the matrix inversion lemma: $(\mathbf{R}_s + \mathbf{R}_n)^{-1} = \mathbf{R}_n^{-1} - \mathbf{R}_n^{-1}\mathbf{S}(\mathbf{I} + \mathbf{R}_s\mathbf{R}_n^{-1})^{-1}\mathbf{R}_n^{-1}$, where $\mathbf{S} = \mathbf{R}_s$.

    This leads to a test statistic that often involves a quadratic form.

---

### **3. Optimal Detector for Known Covariances: The Whitening Filter Detector**

**Key Concept:** When both signal and noise covariances are known, the optimal detector can be implemented using a whitening filter and a correlation operation.

*   **Transformation:** The first step is often to whiten the observation to make the noise white. If $\mathbf{R}_n$ is known, we can transform $\mathbf{y}$ to $\mathbf{y}' = \mathbf{R}_n^{-1/2} \mathbf{y}$.
    *   Under $H_0$: $\mathbf{y}' = \mathbf{R}_n^{-1/2} \mathbf{n}$. This $\mathbf{y}'$ has identity covariance $\mathbf{I}$ and zero mean.
    *   Under $H_1$: $\mathbf{y}' = \mathbf{R}_n^{-1/2}(\mathbf{s} + \mathbf{n}) = \mathbf{R}_n^{-1/2}\mathbf{s} + \mathbf{R}_n^{-1/2}\mathbf{n} = \mathbf{s}' + \mathbf{n}'$.
        The new signal $\mathbf{s}'$ has covariance $\mathbf{R}_s' = \mathbf{R}_n^{-1/2}\mathbf{R}_s\mathbf{R}_n^{-1/2}$, and the new noise $\mathbf{n}'$ has covariance $\mathbf{I}$.
*   **Detection in White Noise:** Detecting a signal with covariance $\mathbf{R}_s'$ in additive white Gaussian noise with identity covariance is a standard problem.
*   **Test Statistic (after whitening):** The likelihood ratio test in the transformed domain becomes:
    $\Lambda(\mathbf{y}') = \frac{p(\mathbf{y}' | H_1)}{p(\mathbf{y}' | H_0)} = \frac{\exp\left(-\frac{1}{2}(\mathbf{y}')^T (\mathbf{I} + \mathbf{R}_s')^{-1} \mathbf{y}'\right)}{\exp\left(-\frac{1}{2}(\mathbf{y}')^T \mathbf{y}'\right)}$
    This simplifies to:
    $\Lambda(\mathbf{y}') \propto \exp\left(\frac{1}{2}(\mathbf{y}')^T \left[\mathbf{I} - (\mathbf{I} + \mathbf{R}_s')^{-1}\right] \mathbf{y}'\right)$
*   **Optimal Detector Structure:**
    The term $\mathbf{I} - (\mathbf{I} + \mathbf{R}_s')^{-1}$ corresponds to the inverse of the sum of covariances, but in the whitened domain.
    A more direct approach relates to the structure of the Karhunen-Loeve expansion or principal component analysis.
    The optimal test statistic for detecting a Gaussian signal $\mathbf{s}$ (with covariance $\mathbf{R}_s$) in Gaussian noise $\mathbf{n}$ (with covariance $\mathbf{R}_n$) can be shown to be related to the signal-to-noise ratio in a specific subspace.

    **Kay, Vol II, Chapter 3 (Detection of Random Signals):** Kay derives the optimal detector for this scenario. The test statistic is often expressed as:
    $T(\mathbf{y}) = \mathbf{y}^T (\mathbf{R}_s + \mathbf{R}_n)^{-1} \mathbf{y}$
    or a variation thereof.

    A common form of the test statistic involves projecting the observation onto the eigenvectors of $\mathbf{R}_s \mathbf{R}_n^{-1}$.
    Let $\mathbf{K} = \mathbf{R}_n^{-1/2} \mathbf{R}_s \mathbf{R}_n^{-1/2}$. Let $\mathbf{V}$ be the matrix of eigenvectors of $\mathbf{K}$ and $\mathbf{\Lambda}$ be the diagonal matrix of eigenvalues $\lambda_i$.
    The test statistic can be written as:
    $T(\mathbf{y}) = \sum_{i=1}^{N} \frac{\lambda_i}{1+\lambda_i} \left(\mathbf{y}^T \mathbf{R}_n^{-1/2} \mathbf{v}_i\right)^2$
    where $\mathbf{v}_i$ are the eigenvectors of $\mathbf{R}_s \mathbf{R}_n^{-1}$.

*   **Detector Structure:**
    1.  **Whitening:** Apply a whitening filter $\mathbf{R}_n^{-1/2}$ to the observation $\mathbf{y}$.
    2.  **Eigen-decomposition:** Compute the eigenvalues and eigenvectors of $\mathbf{R}_s \mathbf{R}_n^{-1}$.
    3.  **Projection and Summation:** Project the whitened observation onto each eigenvector, square the result, weight it by $\frac{\lambda_i}{1+\lambda_i}$, and sum these weighted projections.
    4.  **Comparison:** Compare the sum to a threshold.

*   **Example:** Detecting a known autocorrelation signal $\mathbf{R}_s$ in white noise $\mathbf{R}_n = \sigma_n^2 \mathbf{I}$.
    In this case, $\mathbf{R}_s \mathbf{R}_n^{-1} = \frac{1}{\sigma_n^2} \mathbf{R}_s$.
    The eigenvalues $\lambda_i$ of $\frac{1}{\sigma_n^2} \mathbf{R}_s$ are $\frac{\mu_i}{\sigma_n^2}$, where $\mu_i$ are the eigenvalues of $\mathbf{R}_s$.
    The test statistic becomes:
    $T(\mathbf{y}) = \sum_{i=1}^{N} \frac{\mu_i/\sigma_n^2}{1+\mu_i/\sigma_n^2} \left(\mathbf{y}^T \mathbf{R}_n^{-1/2} \mathbf{v}_i\right)^2 = \sum_{i=1}^{N} \frac{\mu_i}{\sigma_n^2+\mu_i} \left(\frac{1}{\sigma_n}\mathbf{y}^T \mathbf{v}_i\right)^2$
    where $\mathbf{v}_i$ are the eigenvectors of $\mathbf{R}_s$.
    This form highlights the concept of matching the observation to the principal components of the signal.

**Important Point:** The structure of the optimal detector often resembles a matched filter if the signal is known, or a whitening filter followed by a projection onto signal subspace if the signal is random with known statistics.

---

### **4. Performance Evaluation: Deficiencies and Signal-to-Noise Ratio (SNR)**

**Key Concept:** The performance of random signal detectors is evaluated using metrics like the probability of detection ($P_d$) and probability of false alarm ($P_{fa}$), which depend on the signal-to-noise ratio.

*   **Deficiency:** For random signals, the concept of deficiency is introduced. It measures how much the signal-to-noise ratio (SNR) needs to be increased for a detector operating on a random signal to achieve the same performance as a detector for a deterministic signal with a specific SNR.
*   **Signal-to-Noise Ratio (SNR) for Random Signals:**
    For random signals, the SNR is not a single value but is characterized by the eigenvalues of $\mathbf{R}_s \mathbf{R}_n^{-1}$.
    The "total SNR" can be defined as the sum of these eigenvalues: $\sum_{i=1}^{N} \lambda_i = \text{Tr}(\mathbf{R}_s \mathbf{R}_n^{-1})$.

*   **Performance Analysis:**
    *   The distribution of the test statistic under $H_0$ and $H_1$ is typically Gaussian (or a scaled chi-squared distribution) for large observation lengths.
    *   $P_d$ and $P_{fa}$ curves (ROC curves) are generated by varying the threshold.
    *   The performance is directly related to the trace of $\mathbf{R}_s \mathbf{R}_n^{-1}$. A larger trace implies better detectability.

*   **Van Trees, Vol I, Chapter 2 (General Detection Problem):** Van Trees provides a comprehensive treatment of the Bayesian and Neyman-Pearson approaches to detection, which are applicable here. He emphasizes the role of the "signal-plus-noise-to-noise ratio" which, in the random signal case, is related to the eigenvalues.

---

### **5. Specific Cases and Applications**

*   **Detection of a Random Signal in White Noise:**
    If $\mathbf{R}_n = \sigma_n^2 \mathbf{I}$, then $\mathbf{R}_s \mathbf{R}_n^{-1} = \frac{1}{\sigma_n^2} \mathbf{R}_s$.
    The test statistic involves correlating the observation with the eigenvectors of $\mathbf{R}_s$.

*   **Detection of a Signal with Unknown Parameters (GLRT for Random Signals):**
    If the signal is random but its covariance matrix $\mathbf{R}_s$ has unknown parameters (e.g., scaling factor, frequency content), the GLRT is used. This involves estimating these parameters from the data and then forming the likelihood ratio. This leads to detectors that are less optimal than the LRT but are practical when signal statistics are not perfectly known.

*   **Applications:**
    *   **Radar:** Detecting targets whose scattering properties are random.
    *   **Sonar:** Detecting echoes from targets with fluctuating characteristics.
    *   **Biomedical Signal Processing:** Detecting patterns in physiological signals (e.g., EEG, ECG) that have inherent random variations.
    *   **Communications:** Detecting data symbols in the presence of fading channels where the channel itself is a random process.

---

### **6. Learning Outcome Alignment**

*   **CO1 (Summarize fundamentals of statistical estimation principles):** While this module focuses on detection, understanding the statistical properties of random signals (mean, covariance) is crucial. These properties are often estimated from data, connecting to estimation theory.
*   **CO2 (Apply different types of estimation algorithms):** Estimation of signal covariance matrices ($\mathbf{R}_s$) or noise covariance matrices ($\mathbf{R}_n$) from observed data is a prerequisite for designing these detectors, requiring estimation algorithms.
*   **CO3 (Illustrate fundamentals of statistical detection principles):** This module directly illustrates the application of hypothesis testing and the LRT to the complex scenario of random signals.
*   **CO4 (Apply various types of statistical decision rules):** The module derives and explains the decision rules based on the LRT for random signals, which are then applied in practice.

---

### **7. Important Points to Remember**

*   **Random Signal:** Characterized by statistical properties (covariance, autocorrelation), not a fixed waveform.
*   **GLRT:** The primary tool for detecting random signals, especially when signal parameters are unknown.
*   **Gaussian Assumption:** Often used for both signal and noise due to its mathematical tractability and prevalence in natural phenomena.
*   **Covariance Matrices:** Key to defining the problem and designing the detector.
*   **Whitening:** A common preprocessing step to simplify detection in colored noise.
*   **Eigen-decomposition:** Plays a crucial role in optimally detecting random signals, identifying signal subspaces.
*   **Performance:** Related to the "total SNR" which is the sum of eigenvalues of $\mathbf{R}_s \mathbf{R}_n^{-1}$.

---

### **8. Practice Questions and Exercises**

**Question 1:**
Consider the problem of detecting a random signal $\mathbf{s}$ in additive white Gaussian noise $\mathbf{n}$ with known variance $\sigma_n^2$. The signal $\mathbf{s}$ is a zero-mean Gaussian random vector with known covariance matrix $\mathbf{R}_s$.
The observation is $\mathbf{y} = \mathbf{s} + \mathbf{n}$.
Derive the LRT and describe the structure of the optimal detector.

**Answer:**
Under $H_0$: $\mathbf{y} = \mathbf{n}$, $p(\mathbf{y} | H_0) = \mathcal{N}(\mathbf{0}, \sigma_n^2 \mathbf{I})$.
Under $H_1$: $\mathbf{y} = \mathbf{s} + \mathbf{n}$, $p(\mathbf{y} | H_1) = \mathcal{N}(\mathbf{0}, \mathbf{R}_s + \sigma_n^2 \mathbf{I})$.

The LRT is $\Lambda(\mathbf{y}) = \frac{p(\mathbf{y} | H_1)}{p(\mathbf{y} | H_0)} > \eta$.
$\Lambda(\mathbf{y}) = \frac{|\sigma_n^2 \mathbf{I}|^{1/2}}{|\mathbf{R}_s + \sigma_n^2 \mathbf{I}|^{1/2}} \exp\left(-\frac{1}{2}\mathbf{y}^T (\mathbf{R}_s + \sigma_n^2 \mathbf{I})^{-1} \mathbf{y} + \frac{1}{2}\mathbf{y}^T (\sigma_n^2 \mathbf{I})^{-1} \mathbf{y}\right)$
$\Lambda(\mathbf{y}) \propto \exp\left(-\frac{1}{2}\mathbf{y}^T [(\mathbf{R}_s + \sigma_n^2 \mathbf{I})^{-1} - \frac{1}{\sigma_n^2} \mathbf{I}] \mathbf{y}\right)$

The test statistic is proportional to $\mathbf{y}^T [(\mathbf{R}_s + \sigma_n^2 \mathbf{I})^{-1} - \frac{1}{\sigma_n^2} \mathbf{I}] \mathbf{y}$.
Using matrix identities, this can be shown to be related to projecting $\mathbf{y}$ onto the eigenvectors of $\mathbf{R}_s$.
Let $\mathbf{R}_s = \mathbf{V} \mathbf{\Lambda}_s \mathbf{V}^T$ be the eigenvalue decomposition of $\mathbf{R}_s$.
The test statistic is proportional to $\sum_{i=1}^{N} \frac{\lambda_i}{\sigma_n^2 + \lambda_i} (\mathbf{y}^T \mathbf{v}_i)^2$, where $\lambda_i$ are eigenvalues of $\mathbf{R}_s$ and $\mathbf{v}_i$ are corresponding eigenvectors.

**Detector Structure:**
1.  Compute the eigenvectors ($\mathbf{v}_i$) and eigenvalues ($\lambda_i$) of $\mathbf{R}_s$.
2.  For each $i$, project the observation $\mathbf{y}$ onto $\mathbf{v}_i$: $y_i = \mathbf{y}^T \mathbf{v}_i$.
3.  Compute the weighted sum of squared projections: $T(\mathbf{y}) = \sum_{i=1}^{N} \frac{\lambda_i}{\sigma_n^2 + \lambda_i} y_i^2$.
4.  Compare $T(\mathbf{y})$ with a threshold $\eta$.

**Question 2:**
Explain the concept of "deficiency" in the context of detecting random signals.

**Answer:**
Deficiency refers to the difference in the signal-to-noise ratio (SNR) required for a detector operating on a random signal to achieve the same probability of detection ($P_d$) for a given probability of false alarm ($P_{fa}$) as a detector for a deterministic signal. It quantifies how much "worse" the detection performance is due to the signal's randomness, assuming optimal processing for both cases. If a random signal detector needs an extra $X$ dB of SNR to match the performance of a deterministic signal detector, its deficiency is $X$ dB.

**Question 3:**
What does the trace of $\mathbf{R}_s \mathbf{R}_n^{-1}$ represent in the context of random signal detection?

**Answer:**
The trace of $\mathbf{R}_s \mathbf{R}_n^{-1}$ is the sum of the eigenvalues of $\mathbf{R}_s \mathbf{R}_n^{-1}$. These eigenvalues represent the signal-to-noise ratios in different directions (corresponding to the eigenvectors). Therefore, the trace, $\text{Tr}(\mathbf{R}_s \mathbf{R}_n^{-1})$, represents the total signal energy-to-noise power ratio across all important signal components and is a measure of the overall detectability of the random signal. A larger trace generally leads to better detection performance.

---

This module has provided a solid foundation for understanding how to detect signals that are not perfectly known but exhibit statistical randomness. The key lies in characterizing their statistical properties and applying generalized likelihood ratio tests, often leading to detectors that correlate the observation with the principal components of the signal subspace.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
