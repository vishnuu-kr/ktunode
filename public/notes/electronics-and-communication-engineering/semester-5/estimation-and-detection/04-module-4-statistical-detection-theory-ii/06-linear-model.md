---
title: "linear model"
subject: "ESTIMATION AND DETECTION"
module: "Module 4: Statistical Detection Theory II"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780febe6"
status: "completed"
scrapedAt: "2026-05-23T17:57:00.886Z"
---
# ESTIMATION AND DETECTION

## Module 4: Statistical Detection Theory II

## Topic: Linear Model

---

### **1. Introduction to Linear Models in Detection Theory**

**Key Concept:** A linear model describes a system where the observed data is a linear combination of unknown parameters, corrupted by additive noise. This is a fundamental structure for many detection problems.

**Definition:** A linear model can be represented as:

$y = Hx + v$

where:
*   $y$ is the observed data vector (e.g., measurements).
*   $H$ is a known matrix (often called the observation or system matrix).
*   $x$ is the unknown parameter vector we are interested in detecting or estimating.
*   $v$ is the additive noise vector.

**Relevance to Detection:** In detection problems, we are often trying to determine if a signal (represented by $x$) is present or absent, or which of several possible signals is present, based on the observed data $y$. The linear model provides a framework to mathematically describe this relationship.

**Example (CO3, K2):**
Imagine you are trying to detect the presence of a specific radio signal in a noisy environment. The received signal $y$ could be a linear combination of the transmitted signal (represented by $x$, possibly containing information about the signal's parameters) and the effects of the transmission channel (represented by $H$), plus background noise $v$.

**Textbook Reference:** Kay, Vol II, Chapter 3 discusses linear models in the context of hypothesis testing and detection. Van Trees, Vol I, Chapter 2 provides a detailed treatment of linear models in detection and estimation.

---

### **2. Hypothesis Testing with Linear Models**

**Key Concept:** We formulate the detection problem in terms of hypotheses about the unknown parameter vector $x$.

**Standard Hypotheses:**

*   **Null Hypothesis ($H_0$):** No signal is present, or a specific baseline signal is present.
    $y = v$ (or $y = H_0 x_0 + v$, where $x_0$ is a known baseline)
*   **Alternative Hypothesis ($H_1$):** A signal of interest is present.
    $y = H x + v$

**Assumptions:**
*   The noise vector $v$ is typically assumed to be Gaussian with zero mean and covariance matrix $R_v$: $v \sim \mathcal{N}(0, R_v)$.
*   The matrix $H$ is known.
*   The parameter vector $x$ is unknown.

**Maximum Likelihood (ML) Detection (CO4, K3):**

The goal of ML detection is to choose the hypothesis that maximizes the likelihood function. For the linear model, we often consider the conditional PDF of $y$ given $x$.

If $v \sim \mathcal{N}(0, R_v)$, then $y | x \sim \mathcal{N}(Hx, R_v)$. The likelihood function for a given observation $y$ and a specific $x$ is:

$p(y|x) = \frac{1}{(2\pi)^{M/2}|R_v|^{1/2}} \exp\left(-\frac{1}{2}(y - Hx)^T R_v^{-1}(y - Hx)\right)$

where $M$ is the dimension of $y$.

To find the ML estimate of $x$, we would maximize this likelihood function. However, in detection, we often need to compare the likelihoods under different hypotheses.

**Log-Likelihood Ratio (LLR):**

A common approach is to use the LLR, which is the logarithm of the ratio of the likelihoods under the alternative and null hypotheses.

$LLR = \ln \frac{p(y|H_1)}{p(y|H_0)}$

For the linear model, this often involves comparing the squared error terms:

$LLR = \ln \frac{\exp\left(-\frac{1}{2}(y - Hx_1)^T R_v^{-1}(y - Hx_1)\right)}{\exp\left(-\frac{1}{2}(y - Hx_0)^T R_v^{-1}(y - Hx_0)\right)}$

where $x_1$ is the parameter vector under $H_1$ and $x_0$ is the parameter vector under $H_0$.

**Decision Rule:** Decide $H_1$ if $LLR > \eta$, and $H_0$ if $LLR \le \eta$, where $\eta$ is a threshold determined by the desired trade-off between probability of detection and probability of false alarm.

**Example (CO4, K3):**
Consider detecting a known signal $s$ embedded in Gaussian noise: $y = s + v$, where $v \sim \mathcal{N}(0, \sigma^2)$.
*   $H_0$: $y = v$
*   $H_1$: $y = s + v$

Here, $H=1$ and $x=s$ (a known scalar).
$p(y|H_1) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{1}{2\sigma^2}(y - s)^2\right)$
$p(y|H_0) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{1}{2\sigma^2}(y - 0)^2\right)$

$LLR = \ln \frac{\exp\left(-\frac{1}{2\sigma^2}(y - s)^2\right)}{\exp\left(-\frac{1}{2\sigma^2}y^2\right)} = -\frac{1}{2\sigma^2}(y - s)^2 + \frac{1}{2\sigma^2}y^2$
$LLR = -\frac{1}{2\sigma^2}(y^2 - 2ys + s^2) + \frac{1}{2\sigma^2}y^2$
$LLR = -\frac{1}{2\sigma^2}y^2 + \frac{ys}{\sigma^2} - \frac{s^2}{2\sigma^2} + \frac{1}{2\sigma^2}y^2$
$LLR = \frac{ys}{\sigma^2} - \frac{s^2}{2\sigma^2}$

Decide $H_1$ if $\frac{ys}{\sigma^2} - \frac{s^2}{2\sigma^2} > \eta$.
This is equivalent to deciding $H_1$ if $ys > \sigma^2(\eta + \frac{s^2}{2\sigma^2})$, or $ys > \text{threshold}$.

**Textbook Reference:** Kay, Vol II, Chapter 3.2 discusses the ML detector for linear models.

---

### **3. Bayesian Detection with Linear Models**

**Key Concept:** Incorporating prior probabilities of the hypotheses and parameters into the decision-making process.

**Prior Probabilities:**
*   $P(H_1)$ and $P(H_0)$: Prior probabilities of the signal being present or absent.
*   $p(x|H_1)$ and $p(x|H_0)$: Prior PDFs of the parameter vector $x$ under each hypothesis.

**Bayes' Theorem:** Used to update beliefs based on observed data.

**Bayes Detector:** The Bayes detector minimizes the probability of error by choosing the hypothesis with the higher posterior probability.

$P(H_1|y) = \frac{p(y|H_1)P(H_1)}{p(y)}$
$P(H_0|y) = \frac{p(y|H_0)P(H_0)}{p(y)}$

Decide $H_1$ if $P(H_1|y) > P(H_0|y)$. This is equivalent to:

$p(y|H_1)P(H_1) > p(y|H_0)P(H_0)$

Taking the logarithm, this becomes:

$\ln p(y|H_1) + \ln P(H_1) > \ln p(y|H_0) + \ln P(H_0)$

$LLR > \ln \frac{P(H_0)}{P(H_1)}$

The threshold $\eta$ is now related to the prior probabilities.

**Linear Model with Unknown Parameters (CO3, K2):**

If $x$ is unknown, we need to integrate over its distribution.

$p(y|H_1) = \int p(y|x, H_1) p(x|H_1) dx$
$p(y|H_0) = \int p(y|x, H_0) p(x|H_0) dx$

For the linear model $y = Hx + v$, with $v \sim \mathcal{N}(0, R_v)$:

If $x$ is also Gaussian, $x \sim \mathcal{N}(x_{prior}, R_x)$, then $Hx \sim \mathcal{N}(Hx_{prior}, HR_xH^T)$.
The sum of two Gaussian random variables is Gaussian.
Thus, $y | H_1 \sim \mathcal{N}(Hx_{prior}, R_v + HR_xH^T)$.

The LLR becomes:

$LLR = \ln \frac{P(H_1)}{P(H_0)} + \ln \frac{p(y|H_1)}{p(y|H_0)}$

The second term involves the ratio of Gaussian PDFs, which simplifies to a quadratic form in $y$.

**Example (CO4, K3):**
Consider detecting a signal $y = \theta s + v$, where $s$ is a known vector, $v \sim \mathcal{N}(0, R_v)$, and $\theta$ is an unknown scalar parameter.
*   $H_0$: $\theta = 0$ (no signal)
*   $H_1$: $\theta \ne 0$ (signal present)

If we assume a prior for $\theta$ under $H_1$, say $\theta \sim \mathcal{N}(0, \sigma_\theta^2)$, then $y | H_1 \sim \mathcal{N}(0, \sigma_\theta^2 s s^T + R_v)$.

The Bayes detector will compare $\ln P(H_1) + \ln p(y|H_1)$ with $\ln P(H_0) + \ln p(y|H_0)$.

**Textbook Reference:** Kay, Vol II, Chapter 3.3 covers the Bayes detector for linear models. Van Trees, Vol I, Chapter 2.4 delves into the Bayes detector with linear models and Gaussian parameters.

---

### **4. Neyman-Pearson Detector for Linear Models**

**Key Concept:** Optimizing the detection performance by maximizing the probability of detection ($P_D$) for a fixed probability of false alarm ($P_{FA}$).

**Neyman-Pearson Lemma:** The most powerful test for a fixed $P_{FA}$ is the likelihood ratio test.

**Neyman-Pearson Detector for Linear Models:**

The decision rule is based on the LLR:

$LLR = \ln \frac{p(y|H_1)}{p(y|H_0)} > \eta_{NP}$

The threshold $\eta_{NP}$ is chosen to achieve the desired $P_{FA}$.

**Performance Metrics:**
*   **Probability of Detection ($P_D$):** The probability of correctly deciding $H_1$ when $H_1$ is true.
*   **Probability of False Alarm ($P_{FA}$):** The probability of incorrectly deciding $H_1$ when $H_0$ is true.

**Example (CO4, K3):**
Consider the problem of detecting a known signal $s$ in additive white Gaussian noise (AWGN), $y = s + v$, where $v \sim \mathcal{N}(0, \sigma^2I)$.
*   $H_0$: $y = v$
*   $H_1$: $y = s + v$

We derived the LLR as $LLR = \frac{ys}{\sigma^2} - \frac{s^2}{2\sigma^2}$.
The Neyman-Pearson detector decides $H_1$ if:

$\frac{ys}{\sigma^2} - \frac{s^2}{2\sigma^2} > \eta_{NP}$

This is equivalent to $ys > \sigma^2 \eta_{NP} + \frac{s^2}{2}$.

Assuming $s$ is a positive scalar and $\sigma^2$ is positive, this is equivalent to $y > \frac{\sigma^2 \eta_{NP} + s^2/2}{s} = \frac{\sigma^2}{s} \eta_{NP} + \frac{s}{2}$.
Let the new threshold be $\eta'$. Decide $H_1$ if $y > \eta'$.

To find $P_{FA}$ and $P_D$:
Under $H_0$: $y \sim \mathcal{N}(0, \sigma^2)$.
$P_{FA} = P(y > \eta' | H_0) = 1 - \Phi\left(\frac{\eta'}{\sigma}\right)$, where $\Phi$ is the CDF of the standard normal distribution.
From $P_{FA}$, we can determine $\eta'$.

Under $H_1$: $y \sim \mathcal{N}(s, \sigma^2)$.
$P_D = P(y > \eta' | H_1) = 1 - \Phi\left(\frac{\eta' - s}{\sigma}\right)$.

By adjusting $\eta'$, we can achieve any desired $P_{FA}$ and observe the corresponding $P_D$, thus constructing the Receiver Operating Characteristic (ROC) curve.

**Textbook Reference:** Kay, Vol II, Chapter 3.1 discusses the Neyman-Pearson detector and its application to linear models.

---

### **5. Linear Model with Unknown Parameters: Estimation-then-Detection**

**Key Concept:** When the parameters $x$ under $H_1$ are unknown, a common approach is to first estimate $x$ and then use this estimate in a detection rule.

**Steps:**
1.  **Estimate $x$:** Using techniques like Maximum Likelihood Estimation (MLE) or Minimum Mean Squared Error (MMSE).
2.  **Detect based on estimate:** Use the estimated $\hat{x}$ to form a test statistic.

**Estimation of $x$ in Linear Models (CO1, K2; CO2, K3):**

*   **ML Estimation:**
    Given $y = Hx + v$ and $v \sim \mathcal{N}(0, R_v)$, the ML estimate $\hat{x}_{ML}$ maximizes $p(y|x) = \exp\left(-\frac{1}{2}(y - Hx)^T R_v^{-1}(y - Hx)\right)$. This is equivalent to minimizing the weighted squared error:

    $\hat{x}_{ML} = \arg \min_{x} (y - Hx)^T R_v^{-1}(y - Hx)$

    If $R_v = \sigma^2I$, this becomes $\hat{x}_{ML} = \arg \min_{x} \|y - Hx\|^2$.
    The solution is the linear least-squares estimate:

    $\hat{x}_{LS} = (H^T H)^{-1} H^T y$

    The ML estimate for a general $R_v$ is:

    $\hat{x}_{ML} = (H^T R_v^{-1} H)^{-1} H^T R_v^{-1} y$

    This estimate is the MVUE (Minimum Variance Unbiased Estimator) if $v$ is Gaussian or if $H$ has full column rank and $R_v = \sigma^2I$.

*   **MMSE Estimation:**
    If prior information about $x$ is available as a PDF $p(x)$, the MMSE estimate minimizes the expected squared error $E[\|y - Hx - \hat{x}\|^2]$. If $x$ is Gaussian with $E[x] = x_{prior}$ and $Cov(x) = R_x$, and $v$ is Gaussian with $E[v] = 0$ and $Cov(v) = R_v$, then the MMSE estimate is the same as the ML estimate derived above.

    $\hat{x}_{MMSE} = (H^T R_v^{-1} H + R_x^{-1})^{-1} (H^T R_v^{-1} y + R_x^{-1} x_{prior})$

    If $x$ is considered a "fixed but unknown" quantity and we have no prior on $x$, the MMSE approach effectively reverts to the LS estimate if $R_x \to \infty$.

**Detection based on $\hat{x}$ (CO4, K3):**

Once $\hat{x}$ is obtained, we can form a test statistic. For example, we might test hypotheses about whether the components of $\hat{x}$ are zero or non-zero, or have specific values.

**Example (CO2, K3; CO4, K3):**
Consider detecting a signal whose amplitude $A$ is unknown: $y = A s + v$, where $s$ is a known vector and $v \sim \mathcal{N}(0, \sigma^2I)$.
*   $H_0$: $A = 0$
*   $H_1$: $A \ne 0$

We can first estimate $A$. Using the LS approach:
$\hat{A}_{LS} = \frac{s^T y}{s^T s}$

Now, we can test if $|\hat{A}_{LS}|$ is significantly different from zero. This leads to a decision rule based on the magnitude of the estimated amplitude. A common approach is to use a threshold on a statistic derived from $\hat{A}_{LS}$, like a Signal-to-Noise Ratio (SNR) related quantity.

If we assume $A$ is a known value under $H_1$ (let's call it $A_1$), we can still use the ML detector: $y = A_1 s + v$.
The LLR would involve $\frac{(y - A_1 s)^T (y - A_1 s)}{\sigma^2}$ vs $\frac{y^T y}{\sigma^2}$.

**Textbook Reference:** Kay, Vol I, Chapter 7 (Estimation) covers the ML and MMSE estimators for linear models. Kay, Vol II, Chapter 3.4 discusses detectors based on estimated parameters. Hayes, Chapter 6 covers linear models and estimation.

---

### **6. Generalized Likelihood Ratio Test (GLRT) for Linear Models**

**Key Concept:** A powerful approach when parameters are unknown under both hypotheses or when the parameter space under $H_1$ is a subset of a larger parameter space.

**Scenario:**
*   $H_0$: $y = H_0 x_0 + v$ (where $H_0$ and $x_0$ might be known or partially unknown)
*   $H_1$: $y = H_1 x_1 + v$ (where $x_1$ is unknown, and $H_1$ might be different from $H_0$)

The GLRT involves estimating the unknown parameters under each hypothesis and then comparing the maximized likelihoods.

**GLRT Steps:**
1.  **Under $H_0$**: Estimate unknown parameters $\hat{\theta}_0$ and compute the maximized likelihood $L_0 = p(y | \hat{\theta}_0, H_0)$.
2.  **Under $H_1$**: Estimate unknown parameters $\hat{\theta}_1$ and compute the maximized likelihood $L_1 = p(y | \hat{\theta}_1, H_1)$.
3.  **Decision Rule**: Decide $H_1$ if $\frac{L_1}{L_0} > \eta_{GLRT}$.

**Linear Model Application:**

Consider a more general linear model where the signal structure can change under different hypotheses.

*   $H_0$: $y = s_0 + v$, where $s_0$ is a known signal.
*   $H_1$: $y = \alpha s_1 + v$, where $s_1$ is a known signal and $\alpha$ is an unknown scalar amplitude.

Here, $H_0 = \text{Identity}$ and $x_0 = s_0$ (known). Under $H_1$, the parameter is $\alpha$.
The ML estimate of $\alpha$ is $\hat{\alpha}_{ML} = \frac{s_1^T y}{s_1^T s_1}$ assuming $v \sim \mathcal{N}(0, \sigma^2I)$.

The GLRT statistic involves comparing the likelihood when $\alpha$ is set to its estimate $\hat{\alpha}_{ML}$ versus the likelihood when $\alpha=0$ (implied by $H_0$).

For Gaussian noise $v \sim \mathcal{N}(0, R_v)$:

$L_0 = p(y | H_0) = p(y | s_0, H_0) = \frac{1}{(2\pi)^{M/2}|R_v|^{1/2}} \exp\left(-\frac{1}{2}(y - s_0)^T R_v^{-1}(y - s_0)\right)$

$L_1 = \max_{\alpha} p(y | \alpha, H_1) = \max_{\alpha} p(y | \alpha s_1, H_1)$
$L_1 = p(y | \hat{\alpha}_{ML} s_1, H_1) = \frac{1}{(2\pi)^{M/2}|R_v|^{1/2}} \exp\left(-\frac{1}{2}(y - \hat{\alpha}_{ML} s_1)^T R_v^{-1}(y - \hat{\alpha}_{ML} s_1)\right)$

The GLRT statistic is related to the reduction in the weighted squared error achieved by allowing $\alpha$ to be non-zero.

$\text{GLRT Statistic} \propto (y - s_0)^T R_v^{-1}(y - s_0) - (y - \hat{\alpha}_{ML} s_1)^T R_v^{-1}(y - \hat{\alpha}_{ML} s_1)$

The threshold is set to control $P_{FA}$.

**Example (CO4, K3):**
Consider detecting a constant signal $A$ in AWGN:
*   $H_0$: $y_i = v_i$ for $i=1, \dots, M$ (no signal, $A=0$)
*   $H_1$: $y_i = A + v_i$ for $i=1, \dots, M$, where $A$ is unknown.
    Assume $v_i \sim \mathcal{N}(0, \sigma^2)$.

$p(y|H_0) = \prod_{i=1}^M \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{y_i^2}{2\sigma^2}\right) = \left(\frac{1}{2\pi\sigma^2}\right)^{M/2} \exp\left(-\frac{1}{2\sigma^2} \sum y_i^2\right)$

Under $H_1$, $y = \mathbf{1}A + v$, where $\mathbf{1}$ is a vector of ones.
The ML estimate of $A$ is $\hat{A}_{ML} = \frac{\mathbf{1}^T y}{\mathbf{1}^T \mathbf{1}} = \frac{1}{M} \sum y_i = \bar{y}$.

$p(y|H_1) = \max_{A} p(y|A) = p(y|\hat{A}_{ML}) = \left(\frac{1}{2\pi\sigma^2}\right)^{M/2} \exp\left(-\frac{1}{2\sigma^2} \sum (y_i - \bar{y})^2\right)$

The GLRT statistic is proportional to:
$\ln p(y|\hat{A}_{ML}) - \ln p(y|H_0)$
$= \left(-\frac{1}{2\sigma^2} \sum (y_i - \bar{y})^2\right) - \left(-\frac{1}{2\sigma^2} \sum y_i^2\right)$
$= \frac{1}{2\sigma^2} \left(\sum y_i^2 - \sum (y_i - \bar{y})^2\right)$
$= \frac{1}{2\sigma^2} \left(\sum y_i^2 - \sum (y_i^2 - 2y_i\bar{y} + \bar{y}^2)\right)$
$= \frac{1}{2\sigma^2} \left(\sum y_i^2 - \sum y_i^2 + 2\bar{y}\sum y_i - \sum \bar{y}^2\right)$
$= \frac{1}{2\sigma^2} \left(2\bar{y}(M\bar{y}) - M\bar{y}^2\right)$
$= \frac{1}{2\sigma^2} (2M\bar{y}^2 - M\bar{y}^2) = \frac{M\bar{y}^2}{2\sigma^2}$

The GLRT decides $H_1$ if $\frac{M\bar{y}^2}{2\sigma^2} > \eta_{GLRT}$, which is equivalent to $|\bar{y}| > \text{threshold}$. This is a test on the sample mean.

**Textbook Reference:** Kay, Vol II, Chapter 3.5 provides a thorough treatment of the GLRT for linear models.

---

### **7. Power of Detectors for Linear Models**

**Key Concept:** Quantifying the performance of a detector in terms of its ability to correctly identify the signal (Probability of Detection, $P_D$) as a function of the signal strength and the allowed false alarm rate ($P_{FA}$).

**Key Performance Factors:**
*   **Signal-to-Noise Ratio (SNR):** A measure of signal strength relative to noise power. For linear models, the definition of SNR can vary depending on the context (e.g., $E[x^T H^T H x] / \sigma^2$).
*   **Threshold:** The critical value used in the decision rule.
*   **Prior Probabilities (for Bayes detector):** Influence the optimal threshold.
*   **Number of observations (M):** More data generally leads to better detection performance.

**Calculating $P_D$ and $P_{FA}$:**

For many linear model detection problems with Gaussian noise, the test statistic often follows a non-central chi-squared distribution or a related distribution under $H_1$.

*   **Neyman-Pearson:** We set $P_{FA}$ and find the threshold. Then, we calculate $P_D$ for that threshold. The ROC curve plots $P_D$ versus $P_{FA}$.
*   **Bayes:** The decision is based on the posterior probability or the LLR with a threshold based on priors. $P_D$ and $P_{FA}$ are averaged over the prior distributions of parameters and hypotheses.

**Example (CO3, K2):**
Consider the AWGN case $y = s + v$, $v \sim \mathcal{N}(0, \sigma^2)$.
The test statistic is $T = ys/\sigma^2$.
Under $H_0$: $T \sim \mathcal{N}(0, s^2/\sigma^2)$.
Under $H_1$: $T \sim \mathcal{N}(s^2/\sigma^2, s^2/\sigma^2)$.
The terms $s^2/\sigma^2$ are related to the SNR.

To set $P_{FA}$:
$P_{FA} = P(T > \eta_{NP} | H_0) = 1 - \Phi\left(\frac{\eta_{NP}}{s/\sigma}\right)$
From $P_{FA}$, find $\eta_{NP}$.

Then, calculate $P_D$:
$P_D = P(T > \eta_{NP} | H_1) = 1 - \Phi\left(\frac{\eta_{NP} - s^2/\sigma^2}{s/\sigma}\right)$

This clearly shows how $P_D$ depends on the ratio $s/\sigma$ (SNR) and the chosen threshold.

**Textbook Reference:** Kay, Vol II, Chapter 3.7 discusses the power of detectors and computation of $P_D$ and $P_{FA}$ for linear models.

---

### **8. Summary and Key Takeaways**

**Key Concepts Covered:**
*   **Linear Model Structure:** $y = Hx + v$.
*   **Hypothesis Testing:** Formulating detection problems as testing between $H_0$ and $H_1$.
*   **ML, Bayes, and NP Detectors:** Different decision criteria based on likelihood, priors, and performance trade-offs.
*   **Unknown Parameters:** Handling situations where $x$ is not known.
*   **Estimation-then-Detection:** A practical approach for unknown parameters.
*   **GLRT:** A robust test for more general cases with unknown parameters under hypotheses.
*   **Detector Power:** Quantifying performance using $P_D$ and $P_{FA}$.

**Important Points to Remember:**
*   The linear model is a cornerstone for many signal detection problems.
*   The choice of detector (ML, Bayes, NP, GLRT) depends on prior knowledge and performance requirements.
*   Gaussian noise simplifies many calculations, often leading to quadratic test statistics.
*   SNR is a critical factor influencing detection performance.
*   Understanding the trade-off between $P_D$ and $P_{FA}$ (via ROC curves) is crucial for designing effective detectors.
*   When parameters are unknown, estimation plays a vital role.

---

### **9. Practice Questions and Exercises**

**Question 1 (CO3, K2):**
Describe the linear model $y = Hx + v$ and explain its relevance in statistical detection theory.

**Answer:** The linear model represents an observation $y$ as a linear combination of an unknown parameter vector $x$, governed by a known matrix $H$, with an additive noise vector $v$. In detection, we aim to decide whether a signal (represented by $x$ and its interaction with $H$) is present or absent in the observed data $y$, based on the statistical properties of the model and the noise. It's fundamental because many real-world scenarios, like radar, sonar, and communications, can be approximated by this structure.

**Question 2 (CO4, K3):**
Consider the problem of detecting a known signal $s$ in additive white Gaussian noise, $y = s + v$, where $v \sim \mathcal{N}(0, \sigma^2)$. Formulate the Neyman-Pearson test. What is the test statistic, and how is the threshold determined?

**Answer:**
*   **Hypotheses:**
    *   $H_0$: $y = v$ (no signal)
    *   $H_1$: $y = s + v$ (signal present)
*   **Test Statistic:** The LLR is $T(y) = \frac{ys}{\sigma^2} - \frac{s^2}{2\sigma^2}$. For simplicity, we can use $T'(y) = ys$.
*   **Decision Rule:** Decide $H_1$ if $ys > \eta_{NP}$, where $\eta_{NP}$ is chosen to satisfy the desired $P_{FA}$.
*   **Threshold Determination:** Under $H_0$, $y \sim \mathcal{N}(0, \sigma^2)$. $P_{FA} = P(ys > \eta_{NP} | H_0)$. If $s > 0$, this is $P(y > \eta_{NP}/s | H_0)$. This probability is computed using the CDF of the Gaussian distribution of $y$ under $H_0$. The threshold $\eta_{NP}$ is selected such that this probability equals the desired $P_{FA}$.

**Question 3 (CO1, K2; CO2, K3):**
Given $y = Hx + v$, where $v \sim \mathcal{N}(0, \sigma^2I)$ and $H$ has full column rank, derive the Minimum Mean Squared Error (MMSE) estimate of $x$. What happens to this estimate if we have no prior information about $x$ (i.e., the prior variance is infinite)?

**Answer:**
The MMSE estimate of $x$ in a linear model with $x \sim \mathcal{N}(x_{prior}, R_x)$ and $v \sim \mathcal{N}(0, R_v)$ is:
$\hat{x}_{MMSE} = (H^T R_v^{-1} H + R_x^{-1})^{-1} (H^T R_v^{-1} y + R_x^{-1} x_{prior})$

In our case, $R_v = \sigma^2I$. So,
$\hat{x}_{MMSE} = (H^T (\sigma^2I)^{-1} H + R_x^{-1})^{-1} (H^T (\sigma^2I)^{-1} y + R_x^{-1} x_{prior})$
$\hat{x}_{MMSE} = \left(\frac{1}{\sigma^2}H^T H + R_x^{-1}\right)^{-1} \left(\frac{1}{\sigma^2}H^T y + R_x^{-1} x_{prior}\right)$

If we have no prior information about $x$, we can model this as $R_x \to \infty$. This means $R_x^{-1} \to 0$.
The formula becomes:
$\hat{x}_{MMSE} = \left(\frac{1}{\sigma^2}H^T H + 0\right)^{-1} \left(\frac{1}{\sigma^2}H^T y + 0 \cdot x_{prior}\right)$
$\hat{x}_{MMSE} = \left(\frac{1}{\sigma^2}H^T H\right)^{-1} \left(\frac{1}{\sigma^2}H^T y\right)$
$\hat{x}_{MMSE} = \sigma^2 (H^T H)^{-1} \sigma^{-2} H^T y$
$\hat{x}_{MMSE} = (H^T H)^{-1} H^T y$

This is the **least-squares estimate**, which is also the ML estimate in this case.

**Question 4 (CO4, K3):**
Explain the concept of the Generalized Likelihood Ratio Test (GLRT) and when it is typically applied in the context of linear models.

**Answer:** The GLRT is a hypothesis testing procedure used when parameters are unknown under one or both hypotheses. It involves estimating the unknown parameters under each hypothesis to maximize their respective likelihoods. The test then compares these maximized likelihoods. The GLRT is applied when:
*   The parameters $x$ are unknown under $H_0$ or $H_1$.
*   The form of the signal changes between hypotheses, and we need to estimate parameters related to this change.
For example, detecting a signal of unknown amplitude ($y = \alpha s + v$ vs $y = v$) or detecting a signal with unknown frequency.

---

This comprehensive set of notes covers the core concepts of linear models in statistical detection theory, aligning with the provided learning and course outcomes and referencing the specified textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
