---
title: "Statistical Detection Theory II"
subject: "ESTIMATION AND DETECTION"
module: "Module 4: Statistical Detection Theory II"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780febe1"
status: "completed"
scrapedAt: "2026-05-23T17:56:57.294Z"
---
# Module 4: Statistical Detection Theory II

## Introduction to Statistical Detection Theory II

This module builds upon the foundational concepts of statistical detection theory introduced in Module 3. We will delve deeper into the mathematical frameworks and practical considerations for making optimal decisions in the presence of uncertainty. The focus will be on understanding how to design and analyze detectors when the underlying signal characteristics or noise distributions are not perfectly known or when dealing with more complex scenarios.

**Key Textbooks:**

*   **Kay, S.M. (2010). *Fundamentals of Statistical Signal Processing, Vol II: Detection Theory* (3rd ed.). Pearson.** (Primary reference for this module)
*   Van Trees, H.L. (2001). *Detection, Estimation, and Modulation Theory, Vol. I* (2nd ed.). John Wiley & Sons. (Provides broader context and alternative perspectives)

**Reference Books:**

*   Kay, S.M. (2010). *Fundamentals of Statistical Signal Processing, Vol I: Estimation Theory* (3rd ed.). Pearson. (Relevant for understanding parameter estimation that might precede detection)
*   Hayes, M.H. (2018). *Statistical Digital Signal Processing and Modelling* (2nd ed.). John Wiley & Sons. (Offers practical implementation aspects)

---

## Learning Outcomes (LO) and Alignment with Course Outcomes (CO)

This module aims to achieve the following learning outcomes, directly contributing to the stated course outcomes:

*   **LO1: Understand the Neyman-Pearson Lemma and its implications for optimal detection.**
    *   **CO3 (Illustrate fundamentals):** This LO directly supports CO3 by explaining the theoretical basis for optimal detection.
    *   **CO4 (Apply decision rules):** Understanding the Neyman-Pearson framework is crucial for applying specific decision rules in practice.
*   **LO2: Analyze the performance of detectors using the Probability of Detection (Pd) and Probability of False Alarm (Pfa).**
    *   **CO3 (Illustrate fundamentals):** This LO focuses on core performance metrics of detection systems.
    *   **CO4 (Apply decision rules):** Analyzing Pd and Pfa is essential for evaluating and selecting appropriate decision rules.
*   **LO3: Explore the concept of the Likelihood Ratio Test (LRT) and its variations.**
    *   **CO3 (Illustrate fundamentals):** The LRT is a fundamental tool in statistical detection.
    *   **CO4 (Apply decision rules):** This LO is directly about applying a powerful decision rule.
*   **LO4: Investigate the performance of detectors in the presence of unknown parameters (e.g., Unknown Signal Amplitude, Unknown Noise Variance).**
    *   **CO3 (Illustrate fundamentals):** This LO extends detection theory to more realistic, less idealized scenarios.
    *   **CO4 (Apply decision rules):** Understanding how to handle unknown parameters is key to applying robust decision rules.
*   **LO5: Understand the concept of the Generalized Likelihood Ratio Test (GLRT) for composite hypothesis testing.**
    *   **CO3 (Illustrate fundamentals):** GLRT is a generalization of the LRT for more complex hypotheses.
    *   **CO4 (Apply decision rules):** GLRT is a practical decision rule for composite hypothesis testing.
*   **LO6: Introduce Bayesian detection and the concept of the Bayes risk.**
    *   **CO3 (Illustrate fundamentals):** This LO introduces a probabilistic approach to decision making.
    *   **CO4 (Apply decision rules):** The Bayes decision rule is a fundamental type of decision rule.

---

## 1. The Neyman-Pearson Lemma and Optimal Detection

The Neyman-Pearson Lemma provides a fundamental result for finding the most powerful test for a simple hypothesis.

**Hypotheses:**

Consider the two simple hypotheses:

*   $H_0$: The observed data $y$ arises from a noise-only process.
*   $H_1$: The observed data $y$ arises from a signal-plus-noise process.

Mathematically, we can represent this as:

*   $H_0: y = n$
*   $H_1: y = s + n$

where $y$ is the observed data vector, $s$ is the known signal vector, and $n$ is the noise vector. We assume the noise $n$ is a random vector with a probability density function (PDF) $f_n(n)$.

**Likelihood Functions:**

*   Under $H_0$, the PDF of $y$ is $f_y(y | H_0) = f_n(y)$.
*   Under $H_1$, the PDF of $y$ is $f_y(y | H_1) = f_n(y - s)$.

**The Likelihood Ratio Test (LRT):**

The LRT is based on comparing the likelihood of the data under the two hypotheses. The likelihood ratio is defined as:

$$ \Lambda(y) = \frac{f_y(y | H_1)}{f_y(y | H_0)} = \frac{f_n(y - s)}{f_n(y)} $$

The LRT states that for a given significance level (Probability of False Alarm, $P_f$), the most powerful test is to reject $H_0$ in favor of $H_1$ if $\Lambda(y) > \eta$, where $\eta$ is a threshold chosen to satisfy the desired $P_f$.

**The Neyman-Pearson Lemma:**

The Neyman-Pearson Lemma states that for a fixed probability of false alarm, $P_f$, the likelihood ratio test is the most powerful test. This means it maximizes the probability of detection ($P_d$) among all tests with a $P_f$ less than or equal to the specified level.

**Key Concepts:**

*   **Simple Hypothesis:** A hypothesis that completely specifies the PDF of the observed data.
*   **Composite Hypothesis:** A hypothesis that does not completely specify the PDF of the observed data (e.g., it may depend on unknown parameters).
*   **Power of a Test:** $P_d = P(\text{reject } H_0 | H_1 \text{ is true})$.
*   **Significance Level (Probability of False Alarm):** $P_f = P(\text{reject } H_0 | H_0 \text{ is true})$.
*   **Most Powerful Test:** A test that maximizes $P_d$ for a given $P_f$.

**Example:**

Consider detecting a known DC signal $s$ in additive white Gaussian noise (AWGN) with zero mean and variance $\sigma^2$.

*   $H_0: y = n$
*   $H_1: y = s + n$
    where $n \sim \mathcal{N}(0, \sigma^2)$.

The PDFs are:
*   $f_n(x) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{x^2}{2\sigma^2}}$
*   $f_y(y | H_0) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{y^2}{2\sigma^2}}$
*   $f_y(y | H_1) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(y-s)^2}{2\sigma^2}}$

The likelihood ratio is:
$$ \Lambda(y) = \frac{\frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(y-s)^2}{2\sigma^2}}}{\frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{y^2}{2\sigma^2}}} = e^{-\frac{(y-s)^2}{2\sigma^2} + \frac{y^2}{2\sigma^2}} = e^{\frac{2ys - s^2}{2\sigma^2}} $$

The LRT is $\Lambda(y) > \eta$, which simplifies to:
$$ e^{\frac{2ys - s^2}{2\sigma^2}} > \eta $$
Taking the natural logarithm (which is a monotonic function, preserving the inequality):
$$ \frac{2ys - s^2}{2\sigma^2} > \ln(\eta) $$
$$ 2ys - s^2 > 2\sigma^2 \ln(\eta) $$
$$ 2ys > s^2 + 2\sigma^2 \ln(\eta) $$
$$ y > \frac{s^2}{2s} + \frac{\sigma^2}{s} \ln(\eta) $$
$$ y > \frac{s}{2} + \frac{\sigma^2}{s} \ln(\eta) $$
Letting $\eta'$ be a new threshold, the decision rule is $y > \eta'$. This is a threshold detector on the observed data.

**Important Point to Remember:** The Neyman-Pearson Lemma provides a powerful theoretical foundation for designing optimal detectors by identifying the Likelihood Ratio Test as the most powerful test for simple hypotheses.

---

## 2. Performance Analysis: Probability of Detection ($P_d$) and Probability of False Alarm ($P_f$)

The performance of a detector is quantified by its ability to correctly detect the signal when present and to avoid incorrectly declaring a signal when absent.

**Definitions:**

*   **Probability of False Alarm ($P_f$):** The probability that the detector declares $H_1$ when $H_0$ is true.
    $$ P_f = P(\text{reject } H_0 | H_0) $$
*   **Probability of Detection ($P_d$):** The probability that the detector declares $H_1$ when $H_1$ is true. This is also known as the **Power** of the test.
    $$ P_d = P(\text{reject } H_0 | H_1) $$
*   **Probability of Miss ($P_m$):** The probability that the detector declares $H_0$ when $H_1$ is true.
    $$ P_m = P(\text{accept } H_0 | H_1) = 1 - P_d $$
*   **Probability of Correct Rejection ($P_{cr}$):** The probability that the detector declares $H_0$ when $H_0$ is true.
    $$ P_{cr} = P(\text{accept } H_0 | H_0) = 1 - P_f $$

**The Receiver Operating Characteristic (ROC) Curve:**

The ROC curve plots the $P_d$ against the $P_f$ for varying thresholds. It provides a comprehensive view of the detector's performance across all possible operating points.

*   **Trade-off:** There is an inherent trade-off between $P_d$ and $P_f$. Increasing the threshold generally decreases $P_f$ but also decreases $P_d$. Conversely, decreasing the threshold increases $P_d$ but also increases $P_f$.
*   **Ideal Detector:** An ideal detector would have $P_d = 1$ and $P_f = 0$, represented by a point at the top-left corner of the ROC plot.
*   **Random Guessing:** A detector that randomly guesses would lie on the diagonal line $P_d = P_f$.

**Calculating $P_d$ and $P_f$ for the LRT:**

For the LRT, the decision rule is $\Lambda(y) > \eta$.

$$ P_f = P(\Lambda(y) > \eta | H_0) $$
$$ P_d = P(\Lambda(y) > \eta | H_1) $$

The exact calculation of $P_f$ and $P_d$ depends on the distribution of the likelihood ratio under both hypotheses. This often involves transforming the distribution of $y$ to the distribution of $\Lambda(y)$.

**Example (AWGN DC Signal Detection):**

For the AWGN DC signal detection example ($y = s + n$, $n \sim \mathcal{N}(0, \sigma^2)$), the likelihood ratio is $\Lambda(y) = e^{\frac{2ys - s^2}{2\sigma^2}}$. The decision rule is $y > \eta'$.

Let's calculate $P_f$ and $P_d$ in terms of the threshold $\eta'$.

*   **Under $H_0$ ($y=n$):** $y \sim \mathcal{N}(0, \sigma^2)$.
    $$ P_f = P(y > \eta' | H_0) = P\left(\frac{y}{\sigma} > \frac{\eta'}{\sigma} | H_0\right) $$
    Let $Z = y/\sigma$. Then $Z \sim \mathcal{N}(0, 1)$.
    $$ P_f = P\left(Z > \frac{\eta'}{\sigma}\right) = 1 - \Phi\left(\frac{\eta'}{\sigma}\right) $$
    where $\Phi(\cdot)$ is the cumulative distribution function (CDF) of the standard normal distribution.

*   **Under $H_1$ ($y=s+n$):** $y \sim \mathcal{N}(s, \sigma^2)$.
    $$ P_d = P(y > \eta' | H_1) = P\left(\frac{y-s}{\sigma} > \frac{\eta' - s}{\sigma} | H_1\right) $$
    Let $Z' = (y-s)/\sigma$. Then $Z' \sim \mathcal{N}(0, 1)$.
    $$ P_d = P\left(Z' > \frac{\eta' - s}{\sigma}\right) = 1 - \Phi\left(\frac{\eta' - s}{\sigma}\right) $$

By choosing different values for $\eta'$, we can trace out the ROC curve.

**Important Point to Remember:** The ROC curve is a crucial tool for visualizing and evaluating detector performance. $P_d$ and $P_f$ are directly related to the choice of the decision threshold.

---

## 3. The Likelihood Ratio Test (LRT) and its Variations

The LRT is a cornerstone of statistical detection theory. We will explore its general form and some important variations.

**General Form of the LRT:**

For hypothesis testing between two simple hypotheses $H_0$ and $H_1$:

*   $H_0: y \sim f_y(y | H_0)$
*   $H_1: y \sim f_y(y | H_1)$

The LRT decision rule is:
$$ \Lambda(y) = \frac{f_y(y | H_1)}{f_y(y | H_0)} \underset{H_0}{\stackrel{H_1}{>}} \eta $$

where $\eta$ is the threshold.

**Variations and Related Tests:**

*   **Monotonic Transformations:** If $g(\cdot)$ is a strictly monotonic function, then $\Lambda(y) > \eta$ is equivalent to $g(\Lambda(y)) > g(\eta)$. This is often used to simplify the test by working with the log-likelihood ratio or other transformed quantities.
    *   **Log-Likelihood Ratio (LLR):**
        $$ L(y) = \ln(\Lambda(y)) = \ln(f_y(y | H_1)) - \ln(f_y(y | H_0)) $$
        The decision rule becomes $L(y) > \ln(\eta)$.

*   **Sufficient Statistics:** If a statistic $T(y)$ is sufficient for the problem, the LRT can often be expressed in terms of $T(y)$:
    $$ \Lambda(T(y)) \underset{H_0}{\stackrel{H_1}{>}} \eta $$
    This can simplify calculations and implementation.

*   **Matched Filter (for AWGN):**
    When detecting a known signal $s(t)$ in AWGN with noise power spectral density $N_0/2$, the optimal detector is the matched filter. The output of the matched filter at time $T$ is:
    $$ z(T) = \int_0^T y(t) s^*(t) dt $$
    This output is proportional to the likelihood ratio. The decision rule is to compare $z(T)$ to a threshold.
    $$ z(T) = \int_0^T (s(t) + n(t)) s^*(t) dt = \int_0^T s(t)s^*(t) dt + \int_0^T n(t)s^*(t) dt $$
    $$ z(T) = E_s + w $$
    where $E_s$ is the signal energy and $w$ is a Gaussian random variable with mean 0 and variance $\sigma_w^2 = E_s \frac{N_0}{2}$.
    The LRT leads to comparing $z(T)$ to a threshold.

**Example: Simple Detector in AWGN**

Consider a single observation $y$ in AWGN with known variance $\sigma^2$ and signal amplitude $s$ (either $s=0$ for $H_0$ or $s=A$ for $H_1$).

*   $H_0: y \sim \mathcal{N}(0, \sigma^2)$
*   $H_1: y \sim \mathcal{N}(A, \sigma^2)$

The log-likelihood ratio is:
$$ L(y) = \ln\left(\frac{\frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(y-A)^2}{2\sigma^2}}}{\frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{y^2}{2\sigma^2}}}\right) = -\frac{(y-A)^2}{2\sigma^2} + \frac{y^2}{2\sigma^2} $$
$$ L(y) = \frac{1}{2\sigma^2} [-(y^2 - 2Ay + A^2) + y^2] = \frac{1}{2\sigma^2} [2Ay - A^2] $$
The decision rule is $\frac{2Ay - A^2}{2\sigma^2} > \ln(\eta)$, which simplifies to $y > \frac{A}{2} + \frac{\sigma^2}{A} \ln(\eta)$. This is a threshold on $y$.

**Important Point to Remember:** The LRT is a fundamental framework for constructing optimal detectors. Working with the log-likelihood ratio often simplifies the mathematical derivations and the resulting detector structures.

---

## 4. Detector Performance with Unknown Parameters

In many practical scenarios, not all parameters of the signal or noise are known. This leads to composite hypothesis testing problems.

**Types of Unknown Parameters:**

*   **Unknown Signal Amplitude:** $H_1: y = As + n$, where $A$ is unknown.
*   **Unknown Noise Variance:** $H_0: y = n$, $n \sim \mathcal{N}(0, \sigma^2)$ and $H_1: y = s + n$, where $\sigma^2$ is unknown.
*   **Unknown Signal Parameters:** If the signal itself depends on unknown parameters (e.g., unknown frequency, phase).

**General Approach for Unknown Parameters:**

When parameters are unknown, the simple LRT is not directly applicable. The primary approach is to use the **Generalized Likelihood Ratio Test (GLRT)**.

**Example: Unknown Signal Amplitude in AWGN**

Consider the problem of detecting a known signal waveform $s(t)$ in AWGN with known variance $\sigma^2$, but the signal amplitude $A$ is unknown.

*   $H_0: y(t) = n(t)$
*   $H_1: y(t) = As(t) + n(t)$, where $A$ is unknown.

The likelihood function for $n$ samples would be:
$$ f_y(y | H_0, \sigma^2) = \prod_{i=1}^n \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{y_i^2}{2\sigma^2}} $$
$$ f_y(y | H_1, A, \sigma^2) = \prod_{i=1}^n \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(y_i - As_i)^2}{2\sigma^2}} $$

The likelihood ratio for a given $A$ is:
$$ \Lambda(y, A) = \frac{f_y(y | H_1, A, \sigma^2)}{f_y(y | H_0, \sigma^2)} = \exp\left(\frac{1}{2\sigma^2} \sum_{i=1}^n [2y_i(As_i) - (As_i)^2]\right) $$
$$ \Lambda(y, A) = \exp\left(\frac{A}{\sigma^2} \sum_{i=1}^n y_i s_i - \frac{A^2}{2\sigma^2} \sum_{i=1}^n s_i^2\right) $$

Let $S = \sum s_i^2$ (energy of the signal) and $Y = \sum y_i s_i$ (output of a matched filter).
$$ \Lambda(y, A) = \exp\left(\frac{AY}{\sigma^2} - \frac{A^2 S}{2\sigma^2}\right) $$

**Problem:** Since $A$ is unknown, we cannot directly compare $\Lambda(y, A)$ to a threshold.

**Solutions for Unknown Parameters:**

1.  **Maximum Likelihood Estimation (MLE) followed by LRT:**
    *   Estimate the unknown parameters under both hypotheses.
    *   Substitute the estimates into the likelihood ratio.
    *   Use the modified ratio for detection.

2.  **Generalized Likelihood Ratio Test (GLRT):**
    This is the most common approach. It involves maximizing the likelihood function with respect to the unknown parameters under each hypothesis and then forming the ratio of these maximized likelihoods.

**The GLRT:**

Let $\theta_0$ be the parameters under $H_0$ and $\theta_1$ be the parameters under $H_1$. Some parameters in $\theta_0$ or $\theta_1$ might be unknown.

*   $H_0: y \sim f_y(y | \theta_0)$
*   $H_1: y \sim f_y(y | \theta_1)$

The GLRT is based on the ratio:
$$ \Lambda_{GLRT}(y) = \frac{\max_{\theta_1} f_y(y | \theta_1)}{\max_{\theta_0} f_y(y | \theta_0)} $$

The decision rule is $\Lambda_{GLRT}(y) > \eta$.

**Applying GLRT to Unknown Amplitude Example:**

*   **Under $H_0$:** The only parameter is $\sigma^2$. If $\sigma^2$ is known, then $f_y(y | H_0, \sigma^2)$ is fully specified. If $\sigma^2$ is unknown, we would need to estimate it. For simplicity, let's assume $\sigma^2$ is known. The term $\max_{\theta_0} f_y(y | \theta_0)$ is simply $f_y(y | H_0, \sigma^2)$.

*   **Under $H_1$:** The parameters are $A$ and $\sigma^2$. Let's assume $\sigma^2$ is known. We need to maximize $f_y(y | H_1, A, \sigma^2)$ with respect to $A$.
    Maximizing $f_y(y | H_1, A, \sigma^2)$ with respect to $A$ is equivalent to maximizing the log-likelihood.
    $$ \frac{\partial}{\partial A} \ln f_y(y | H_1, A, \sigma^2) = \frac{\partial}{\partial A} \left(\frac{AY}{\sigma^2} - \frac{A^2 S}{2\sigma^2} + C\right) = \frac{Y}{\sigma^2} - \frac{AS}{\sigma^2} $$
    Setting the derivative to zero: $\frac{Y}{\sigma^2} - \frac{\hat{A} S}{\sigma^2} = 0 \implies \hat{A} = \frac{Y}{S}$.
    The maximized likelihood under $H_1$ is:
    $$ \max_A f_y(y | H_1, A, \sigma^2) = f_y\left(y | \hat{A}=\frac{Y}{S}, \sigma^2\right) $$
    $$ = \frac{1}{(\sqrt{2\pi\sigma^2})^n} \exp\left(\frac{1}{2\sigma^2} \left(2\left(\frac{Y}{S}\right)Y - \left(\frac{Y}{S}\right)^2 S\right)\right) $$
    $$ = \frac{1}{(\sqrt{2\pi\sigma^2})^n} \exp\left(\frac{1}{2\sigma^2} \left(\frac{2Y^2}{S} - \frac{Y^2}{S}\right)\right) = \frac{1}{(\sqrt{2\pi\sigma^2})^n} \exp\left(\frac{Y^2}{2\sigma^2 S}\right) $$

The GLRT statistic is the ratio of the maximized likelihoods:
$$ \Lambda_{GLRT}(y) = \frac{\max_A f_y(y | H_1, A, \sigma^2)}{f_y(y | H_0, \sigma^2)} = \frac{\frac{1}{(\sqrt{2\pi\sigma^2})^n} \exp\left(\frac{Y^2}{2\sigma^2 S}\right)}{\frac{1}{(\sqrt{2\pi\sigma^2})^n} \exp\left(-\frac{\sum y_i^2}{2\sigma^2}\right)} $$
$$ \Lambda_{GLRT}(y) = \exp\left(\frac{Y^2}{2\sigma^2 S} + \frac{\sum y_i^2}{2\sigma^2}\right) $$
Taking the log:
$$ \ln \Lambda_{GLRT}(y) = \frac{Y^2}{2\sigma^2 S} + \frac{\sum y_i^2}{2\sigma^2} $$
The decision rule is $\frac{Y^2}{S} > \eta'$, where $\eta'$ is a threshold.
Note that $Y = \sum y_i s_i$. The term $Y^2/S$ is related to the signal energy estimation. This is essentially comparing the signal energy estimate to a threshold.

**Example: Unknown Noise Variance in AWGN**

*   $H_0: y = n$, $n \sim \mathcal{N}(0, \sigma_0^2)$ (known variance)
*   $H_1: y = s + n$, $n \sim \mathcal{N}(0, \sigma_1^2)$ (unknown variance, but let's consider the case where $\sigma_1^2$ is unknown and needs to be estimated, or we are testing against a specific alternative variance).

A more common scenario is:
*   $H_0: y = n$, $n \sim \mathcal{N}(0, \sigma^2)$ (unknown $\sigma^2$)
*   $H_1: y = s + n$, $n \sim \mathcal{N}(0, \sigma^2)$ (unknown $\sigma^2$)

In this case, both hypotheses depend on the unknown $\sigma^2$. We need to maximize the likelihoods with respect to $\sigma^2$.

**Important Point to Remember:** The GLRT is a generalization of the LRT designed for composite hypothesis testing problems where parameters are unknown. It involves maximizing the likelihoods under each hypothesis with respect to the unknown parameters.

---

## 5. The Generalized Likelihood Ratio Test (GLRT) for Composite Hypothesis Testing

The GLRT is a fundamental tool when dealing with composite hypotheses, where one or more parameters are not fully specified.

**Composite Hypothesis Testing:**

A hypothesis is composite if it specifies a set of possible probability distributions for the data, rather than a single distribution.

*   **Example:**
    *   $H_0$: The signal is absent. $y = n$, where $n \sim \mathcal{N}(0, \sigma^2)$. If $\sigma^2$ is unknown, this is composite.
    *   $H_1$: The signal is present. $y = s + n$, where $n \sim \mathcal{N}(0, \sigma^2)$. If $\sigma^2$ is unknown, this is composite.

**The GLRT Procedure:**

Let the observed data be $y$, and let $\theta$ be a vector of parameters that characterize the probability distribution $f_y(y | \theta)$. We are testing between two composite hypotheses:

*   $H_0: \theta \in \Theta_0$
*   $H_1: \theta \in \Theta_1$

where $\Theta_0$ and $\Theta_1$ are parameter spaces.

The GLRT statistic is defined as:
$$ \Lambda_{GLRT}(y) = \frac{\sup_{\theta \in \Theta_1} f_y(y | \theta)}{\sup_{\theta \in \Theta_0} f_y(y | \theta)} $$

The decision rule is to choose $H_1$ if $\Lambda_{GLRT}(y) > \eta$, where $\eta$ is a threshold.

**Key Steps in Applying GLRT:**

1.  **Define Hypotheses:** Clearly state the parameter spaces $\Theta_0$ and $\Theta_1$.
2.  **Write Likelihood Function:** Formulate the likelihood function $f_y(y | \theta)$.
3.  **Maximize Likelihoods:**
    *   Find $\hat{\theta}_1 = \arg\sup_{\theta \in \Theta_1} f_y(y | \theta)$ and compute $L_1 = f_y(y | \hat{\theta}_1)$.
    *   Find $\hat{\theta}_0 = \arg\sup_{\theta \in \Theta_0} f_y(y | \theta)$ and compute $L_0 = f_y(y | \hat{\theta}_0)$.
4.  **Form the GLRT Statistic:** $\Lambda_{GLRT}(y) = L_1 / L_0$.
5.  **Determine the Threshold:** The threshold $\eta$ is determined by the desired $P_f$. This often requires analyzing the distribution of $\Lambda_{GLRT}(y)$ under $H_0$, which can be complex. Asymptotically (for large data), the distribution of $-2\ln(\Lambda_{GLRT}(y))$ under $H_0$ is often a chi-squared distribution.

**Example: Detection of a Sine Wave with Unknown Frequency and Phase in AWGN**

*   $H_0: y_i = n_i$, $i=1,\dots,N$
*   $H_1: y_i = A \cos(2\pi f_0 \frac{i}{f_s} + \phi) + n_i$, $i=1,\dots,N$

Here, $A$, $f_0$, and $\phi$ are unknown parameters under $H_1$. $f_s$ is the sampling frequency.

*   **Hypothesis $H_0$:** The data is just AWGN. If the noise variance $\sigma^2$ is unknown, then $\Theta_0 = \{ \sigma^2 > 0 \}$.
    The likelihood is $f_y(y | \sigma^2) = (\frac{1}{\sqrt{2\pi\sigma^2}})^N \exp(-\frac{1}{2\sigma^2} \sum y_i^2)$.
    To maximize this with respect to $\sigma^2$, we find $\hat{\sigma}^2_0 = \frac{1}{N} \sum y_i^2$.
    The maximized likelihood under $H_0$ is $L_0 = (\frac{1}{\sqrt{2\pi (\frac{1}{N}\sum y_i^2)}})^N \exp(-\frac{N}{2})$.

*   **Hypothesis $H_1$:** The data is a sine wave plus AWGN with unknown parameters $A, f_0, \phi$ and unknown variance $\sigma^2$.
    $\Theta_1 = \{ A, f_0, \phi, \sigma^2 | A>0, 0 < f_0 < f_s/2, 0 \le \phi < 2\pi, \sigma^2 > 0 \}$.
    The likelihood is $f_y(y | A, f_0, \phi, \sigma^2) = (\frac{1}{\sqrt{2\pi\sigma^2}})^N \exp(-\frac{1}{2\sigma^2} \sum (y_i - A \cos(2\pi f_0 \frac{i}{f_s} + \phi))^2)$.
    Maximizing this with respect to $A, f_0, \phi, \sigma^2$ is a complex optimization problem. Typically, one would use numerical methods to find $\hat{\theta}_1$.

The GLRT is often applied in signal processing for problems like detecting signals in clutter or when signal parameters are unknown.

**Important Point to Remember:** The GLRT is the standard approach for composite hypothesis testing, extending the LRT by incorporating parameter estimation into the likelihood ratio.

---

## 6. Bayesian Detection

Bayesian detection incorporates prior probabilities of the hypotheses and costs associated with different decision outcomes.

**Bayesian Framework:**

*   **Hypotheses:** $H_0, H_1, \dots, H_M$.
*   **Prior Probabilities:** $P(H_0), P(H_1), \dots, P(H_M)$, where $\sum P(H_i) = 1$.
*   **Observation:** $y$.
*   **Likelihoods:** $f_y(y | H_i)$ for each hypothesis.
*   **Costs:** A cost matrix $C(H_i, \text{decision}_j)$, where $C(H_i, \text{decision}_j)$ is the cost incurred if hypothesis $H_i$ is true but we decide $H_j$.

**Bayes Risk:**

The total risk (or Bayes risk) is the expected cost of a decision rule. For a given decision rule that maps observations $y$ to decisions $d(y)$, the Bayes risk is:
$$ R_B = \sum_{i=0}^M P(H_i) \int_{\mathcal{Y}} C(H_i, d(y)) f_y(y | H_i) dy $$
Alternatively, if the decision rule is to choose hypothesis $j$ when $y \in \mathcal{W}_j$, where $\mathcal{W}_j$ are disjoint regions covering the observation space $\mathcal{Y}$:
$$ R_B = \sum_{j=0}^M \int_{\mathcal{W}_j} \sum_{i=0}^M P(H_i) C(H_i, j) f_y(y | H_i) dy $$

**Bayes Decision Rule:**

The Bayes decision rule aims to minimize the Bayes risk. For each observation $y$, we should choose the hypothesis $j$ that minimizes the *local posterior risk*:
$$ R_j(y) = \sum_{i=0}^M P(H_i | y) C(H_i, j) $$
where $P(H_i | y)$ is the posterior probability of $H_i$ given $y$.

Using Bayes' theorem: $P(H_i | y) = \frac{f_y(y | H_i) P(H_i)}{f_y(y)}$, where $f_y(y) = \sum_{k=0}^M f_y(y | H_k) P(H_k)$.
$$ R_j(y) = \sum_{i=0}^M \frac{f_y(y | H_i) P(H_i)}{f_y(y)} C(H_i, j) $$

We choose $j$ such that $R_j(y)$ is minimized.

**Binary Hypothesis Case (M=1):**

Consider $H_0$ and $H_1$. Let the cost matrix be:
$$ \mathbf{C} = \begin{pmatrix} C(H_0, 0) & C(H_0, 1) \\ C(H_1, 0) & C(H_1, 1) \end{pmatrix} $$
where the columns represent the decision (0 or 1) and the rows represent the true hypothesis.

We choose to decide $H_1$ if $R_1(y) < R_0(y)$.
$$ \sum_{i=0}^1 P(H_i | y) C(H_i, 1) < \sum_{i=0}^1 P(H_i | y) C(H_i, 0) $$
$$ P(H_0 | y) C(H_0, 1) + P(H_1 | y) C(H_1, 1) < P(H_0 | y) C(H_0, 0) + P(H_1 | y) C(H_1, 0) $$
Rearranging terms:
$$ P(H_0 | y) [C(H_0, 1) - C(H_0, 0)] < P(H_1 | y) [C(H_1, 0) - C(H_1, 1)] $$
Substitute $P(H_i | y) = \frac{f_y(y | H_i) P(H_i)}{f_y(y)}$:
$$ \frac{f_y(y | H_0) P(H_0)}{f_y(y)} [C(H_0, 1) - C(H_0, 0)] < \frac{f_y(y | H_1) P(H_1)}{f_y(y)} [C(H_1, 0) - C(H_1, 1)] $$
Since $f_y(y) > 0$, we can cancel it:
$$ f_y(y | H_0) P(H_0) [C(H_0, 1) - C(H_0, 0)] < f_y(y | H_1) P(H_1) [C(H_1, 0) - C(H_1, 1)] $$
Rearranging to get a likelihood ratio:
$$ \frac{f_y(y | H_1)}{f_y(y | H_0)} > \frac{P(H_0) [C(H_0, 1) - C(H_0, 0)]}{P(H_1) [C(H_1, 0) - C(H_1, 1)]} $$

The Bayes test is an LRT with a threshold:
$$ \Lambda(y) > \eta_{Bayes} $$
where $\eta_{Bayes} = \frac{P(H_0) [C(H_0, 1) - C(H_0, 0)]}{P(H_1) [C(H_1, 0) - C(H_1, 1)]}$.

**Special Case: Minimum Probability of Error (MPE)**

If we want to minimize the probability of error, the cost matrix is:
$$ \mathbf{C} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} $$
Here, $C(H_0, 0) = 0$, $C(H_0, 1) = 1$, $C(H_1, 0) = 1$, $C(H_1, 1) = 0$.
The threshold becomes:
$$ \eta_{Bayes} = \frac{P(H_0) [1 - 0]}{P(H_1) [1 - 0]} = \frac{P(H_0)}{P(H_1)} $$
The Bayes test for minimum probability of error is:
$$ \frac{f_y(y | H_1)}{f_y(y | H_0)} > \frac{P(H_0)}{P(H_1)} $$
This is also known as the **Maximum A Posteriori (MAP)** detector, as it effectively compares the posterior probabilities $P(H_1|y)$ and $P(H_0|y)$:
$$ P(H_1|y) > P(H_0|y) \iff \frac{f_y(y|H_1)P(H_1)}{f_y(y)} > \frac{f_y(y|H_0)P(H_0)}{f_y(y)} \iff \frac{f_y(y|H_1)}{f_y(y|H_0)} > \frac{P(H_0)}{P(H_1)} $$

**Example: MPE Detection of DC Signal in AWGN**

*   $H_0: y = n$, $n \sim \mathcal{N}(0, \sigma^2)$
*   $H_1: y = s + n$, $n \sim \mathcal{N}(0, \sigma^2)$

Prior probabilities: $P(H_0)$ and $P(H_1)$.

The LRT statistic is $\Lambda(y) = e^{\frac{2ys - s^2}{2\sigma^2}}$.
The Bayes threshold for MPE is $\eta_{Bayes} = P(H_0)/P(H_1)$.
The decision rule is:
$$ e^{\frac{2ys - s^2}{2\sigma^2}} > \frac{P(H_0)}{P(H_1)} $$
Taking the log:
$$ \frac{2ys - s^2}{2\sigma^2} > \ln\left(\frac{P(H_0)}{P(H_1)}\right) $$
$$ 2ys > s^2 + 2\sigma^2 \ln\left(\frac{P(H_0)}{P(H_1)}\right) $$
$$ y > \frac{s}{2} + \frac{\sigma^2}{s} \ln\left(\frac{P(H_0)}{P(H_1)}\right) $$
This shows how prior probabilities shift the detection threshold.

**Important Point to Remember:** Bayesian detection provides a framework for making optimal decisions by incorporating prior knowledge about hypotheses and the costs associated with errors. The Minimum Probability of Error detector (MAP detector) is a special case of the Bayes detector.

---

## Practice Questions and Answers

**Question 1 (CO3, CO4):**
State the Neyman-Pearson Lemma and explain its significance in the context of statistical detection.

**Answer 1:**
The Neyman-Pearson Lemma states that for a fixed probability of false alarm ($P_f$), the likelihood ratio test is the most powerful test. This means it maximizes the probability of detection ($P_d$) among all possible tests that have a $P_f$ less than or equal to the specified level. Its significance lies in providing a theoretical basis for constructing optimal detectors in situations involving simple hypotheses, guaranteeing the best possible performance trade-off between detecting a signal when present and avoiding false alarms when absent.

**Question 2 (LO2, CO3, CO4):**
Describe the ROC curve and explain the trade-off it represents.

**Answer 2:**
The Receiver Operating Characteristic (ROC) curve plots the Probability of Detection ($P_d$) on the y-axis against the Probability of False Alarm ($P_f$) on the x-axis for a range of possible decision thresholds. The ROC curve visually represents the performance of a detector. The trade-off it represents is between the ability to correctly detect the signal when it is present ($P_d$) and the tendency to incorrectly declare a signal when it is absent ($P_f$). As the detector's sensitivity increases (leading to a higher $P_d$), its false alarm rate generally also increases, and vice-versa.

**Question 3 (LO3, CO3, CO4):**
For the detection of a known DC signal $s$ in AWGN with known variance $\sigma^2$, write down the log-likelihood ratio test statistic.

**Answer 3:**
The observation is $y$. The hypotheses are:
$H_0: y = n$
$H_1: y = s + n$, where $n \sim \mathcal{N}(0, \sigma^2)$.

The likelihood ratio is $\Lambda(y) = \frac{f_y(y | H_1)}{f_y(y | H_0)} = \frac{\frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(y-s)^2}{2\sigma^2}}}{\frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{y^2}{2\sigma^2}}} = e^{\frac{2ys - s^2}{2\sigma^2}}$.

The log-likelihood ratio (LLR) is:
$L(y) = \ln(\Lambda(y)) = \frac{2ys - s^2}{2\sigma^2}$.
The decision rule is $L(y) > \eta$, or $y > \frac{s}{2} + \frac{\sigma^2}{s} \eta$.

**Question 4 (LO4, CO3, CO4):**
What is the primary challenge when dealing with unknown parameters in detection problems, and what is the typical approach to address it?

**Answer 4:**
The primary challenge when dealing with unknown parameters is that the simple Likelihood Ratio Test (LRT), which relies on fully specified probability distributions, cannot be directly applied. The typical approach to address this is the **Generalized Likelihood Ratio Test (GLRT)**. The GLRT involves maximizing the likelihood functions under each hypothesis with respect to the unknown parameters and then forming the ratio of these maximized likelihoods.

**Question 5 (LO6, CO3, CO4):**
Under what conditions does the Bayes detector for minimizing probability of error reduce to the Maximum A Posteriori (MAP) detector?

**Answer 5:**
The Bayes detector minimizes the expected cost. When the goal is to minimize the probability of error, the cost matrix is defined such that the cost of a correct decision is 0 and the cost of an incorrect decision is 1. Under these specific cost conditions, the Bayes detector's decision rule becomes equivalent to comparing the posterior probabilities of the hypotheses. Specifically, it decides in favor of the hypothesis with the highest posterior probability, which is the definition of the Maximum A Posteriori (MAP) detector. This occurs when $C(H_i, i) = 0$ and $C(H_i, j) = 1$ for $i \neq j$.

---

## Important Points to Remember (Summary for Module 4)

*   **Neyman-Pearson Lemma:** Guarantees the Likelihood Ratio Test (LRT) is the *most powerful* test for a fixed $P_f$ when dealing with simple hypotheses.
*   **LRT:** Compares the ratio of likelihoods $\Lambda(y) = \frac{f_y(y | H_1)}{f_y(y | H_0)}$ to a threshold $\eta$. Often easier to work with the log-likelihood ratio $L(y) = \ln(\Lambda(y))$.
*   **ROC Curve:** Plots $P_d$ vs. $P_f$ and is essential for evaluating detector performance and understanding the trade-off between false alarms and missed detections.
*   **Composite Hypothesis Testing:** Occurs when parameters in the hypotheses are unknown.
*   **GLRT:** The standard approach for composite hypothesis testing. It maximizes likelihoods under each hypothesis with respect to unknown parameters before forming the ratio.
*   **Bayesian Detection:** Incorporates prior probabilities of hypotheses and costs of errors. The Bayes detector minimizes the Bayes risk.
*   **MAP Detector:** A special case of the Bayes detector that minimizes the probability of error. It decides in favor of the hypothesis with the highest posterior probability.
*   **Threshold Adjustment:** The detection threshold is crucial. In LRT, it controls the $P_f$. In Bayesian detection, the threshold is derived from prior probabilities and costs.

---
This concludes Module 4. The concepts learned here are fundamental for understanding how to design and analyze systems that make decisions in uncertain environments, a core aspect of estimation and detection theory.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
