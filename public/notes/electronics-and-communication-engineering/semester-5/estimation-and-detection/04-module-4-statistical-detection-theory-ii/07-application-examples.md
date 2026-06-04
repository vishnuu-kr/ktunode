---
title: "application examples."
subject: "ESTIMATION AND DETECTION"
module: "Module 4: Statistical Detection Theory II"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780febe7"
status: "completed"
scrapedAt: "2026-05-23T17:57:01.816Z"
---
# ESTIMATION AND DETECTION

## Module 4: Statistical Detection Theory II - Application Examples

This module delves into practical applications of the statistical detection theory principles covered in Module 3. We will explore how the theoretical frameworks are applied to solve real-world problems in various engineering domains.

---

### Learning Outcomes:

*   **LO1:** Apply statistical detection principles to analyze and solve problems in areas such as radar, sonar, and communication systems.
*   **LO2:** Understand the role of the Neyman-Pearson criterion in designing optimal detectors for specific performance requirements.
*   **LO3:** Evaluate the performance of detectors using metrics like the Receiver Operating Characteristic (ROC) curve.
*   **LO4:** Explore the application of Bayesian detection rules in scenarios with prior knowledge of signal presence or absence.

---

### Course Outcomes Addressed:

*   **CO2:** Apply different types of estimation algorithms in engineering applications. (While this module focuses on detection, understanding estimation often precedes detection, and some problems involve both.)
*   **CO3:** Illustrate the fundamentals of statistical detection principles used in various engineering problems. (This is the core of this module.)
*   **CO4:** Apply various types of statistical decision rules in engineering applications. (We'll see how different rules are applied in practice.)

---

### Key Concepts and Definitions:

**Recap from Module 3:**

*   **Hypothesis Testing:** The process of deciding between two competing hypotheses, $H_0$ (null hypothesis) and $H_1$ (alternative hypothesis), based on observed data.
*   **Likelihood Ratio Test (LRT):** A fundamental statistical test that compares the likelihood of the observed data under $H_1$ versus $H_0$.
*   **Neyman-Pearson Criterion:** A principle for designing hypothesis tests that maximizes the probability of detection (power) for a fixed probability of false alarm.
*   **Bayes' Criterion:** A principle for designing hypothesis tests that minimizes the average probability of error, taking into account prior probabilities and costs associated with different decision errors.

**New Concepts for Application Examples:**

*   **Probability of Detection ($P_D$) / True Positive Rate (TPR):** The probability of correctly deciding $H_1$ when $H_1$ is true.
*   **Probability of False Alarm ($P_{FA}$) / False Positive Rate (FPR):** The probability of incorrectly deciding $H_1$ when $H_0$ is true.
*   **Receiver Operating Characteristic (ROC) Curve:** A plot of $P_D$ versus $P_{FA}$ for a given detector, as the decision threshold is varied. It provides a comprehensive view of a detector's performance.
*   **Receiver Operating Curve (ROC) Area Under the Curve (AUC):** A single scalar value representing the overall performance of a classifier across all thresholds. A higher AUC indicates better performance.
*   **Signal-to-Noise Ratio (SNR):** A measure of the strength of the desired signal relative to the background noise. It is a crucial parameter in the performance of many detection systems.
*   **General Gaussian Problem:** A common scenario in detection theory where observations are assumed to be Gaussian distributed under both hypotheses.

---

### Application Examples:

This section illustrates how the principles of statistical detection theory are applied in various engineering disciplines.

#### 1. Radar Systems

**Problem:** Detecting the presence of a target in the presence of noise.

**Scenario:** A radar system transmits a pulse and listens for the reflected echo. The received signal is a noisy version of the transmitted pulse, potentially with a delayed and attenuated target echo.

**Hypotheses:**
*   $H_0$: Only noise is present.
*   $H_1$: Target echo plus noise is present.

**Observations:** The received signal samples over a specific time interval.

**Detection Strategy:** The Likelihood Ratio Test (LRT) is commonly used. The decision rule is to decide $H_1$ if the likelihood ratio $\Lambda(y)$ exceeds a threshold $\eta$.

$\Lambda(y) = \frac{p(y | H_1)}{p(y | H_0)}$

**Performance Metrics:**
*   $P_D$: Probability of detecting the target when it's present.
*   $P_{FA}$: Probability of mistakenly declaring a target when none is present (e.g., a false alarm due to noise fluctuations).

**Neyman-Pearson in Radar:**
The Neyman-Pearson criterion is often used to set the threshold. For a desired $P_{FA}$, the radar system is designed to maximize $P_D$. This is crucial in radar as too many false alarms can overwhelm operators, while too low a $P_D$ means missing targets.

**Example: Detecting a weak signal in Gaussian noise.**
If the received signal $y$ is a scalar observation, and we are detecting a constant signal $s$ in additive white Gaussian noise (AWGN), the hypotheses can be formulated as:
*   $H_0: y = n$
*   $H_1: y = s + n$

where $n \sim \mathcal{N}(0, \sigma^2)$.

The LRT leads to a decision based on the magnitude of the received signal $y$. If $y$ is above a certain threshold, we declare a target. The threshold is set to achieve a specific $P_{FA}$.

**Kay, Vol. II, Chapter 7: "Detection of Waveforms in Noise"** discusses these principles extensively with detailed derivations for various signal models. The concept of **matched filtering** is introduced as an optimal linear filter for detecting a known signal in AWGN. The output of the matched filter is then compared to a threshold, forming the basis of the LRT detector.

#### 2. Sonar Systems

**Problem:** Detecting submarines or other objects underwater.

**Scenario:** Sonar systems transmit acoustic pulses and analyze the echoes. The underwater environment is characterized by significant noise sources (e.g., biological, ship traffic) and reverberation.

**Hypotheses:**
*   $H_0$: Only ambient noise and reverberation are present.
*   $H_1$: Target echo plus noise and reverberation are present.

**Detection Strategy:** Similar to radar, LRT is employed. However, the signal processing can be more complex due to the characteristics of sound propagation in water.

**Performance Metrics:** $P_D$ and $P_{FA}$ are critical.

**Bayesian Detection in Sonar:**
In some sonar applications, the prior probability of a target being present might be known (e.g., in a known operating area). Bayesian detection can be advantageous here, minimizing the overall risk of error, considering the costs associated with missing a target (e.g., during military operations) versus a false alarm.

**Van Trees, Vol. I, Chapter 3: "Hypothesis Testing"** provides a comprehensive treatment of Bayesian detection, which is highly relevant to sonar applications where prior knowledge might exist. The chapter covers the derivation of the Bayes decision rule for various signal models, including those with Gaussian noise.

#### 3. Communication Systems

**Problem:** Deciding whether a transmitted bit (e.g., 0 or 1) was received correctly at the receiver.

**Scenario:** In digital communication, information is encoded into symbols or bits, transmitted over a noisy channel, and then detected at the receiver.

**Hypotheses:**
*   $H_0$: A '0' bit was transmitted.
*   $H_1$: A '1' bit was transmitted.

**Observations:** The received signal samples at the sampling instant.

**Detection Strategy:** For binary signaling in AWGN, the optimal detector is a **correlator** or a **matched filter** followed by a threshold comparison. The decision is based on whether the received signal energy is closer to the expected energy for a '0' or a '1'.

**Example: Binary Phase Shift Keying (BPSK).**
In BPSK, a '0' might be represented by a signal $A \cos(\omega_c t)$ and a '1' by $-A \cos(\omega_c t)$. The received signal $y(t)$ is the transmitted signal corrupted by noise. The detector correlates the received signal with the expected waveforms for '0' and '1' and chooses the one that yields a higher correlation value.

**Performance Metrics:**
*   **Probability of Bit Error ($P_b$):** The probability of incorrectly deciding the transmitted bit. This is directly related to $P_{FA}$ and $P_D$ in a binary detection scenario.
*   **Bit Error Rate (BER):** The ratio of the number of erroneous bits to the total number of transmitted bits.

**Relationship to ROC:** While ROC curves are not typically plotted directly for binary communication (as there's usually a single optimal threshold for a given SNR), the underlying principles of varying the threshold to trade off $P_D$ and $P_{FA}$ are still relevant. The performance is often characterized by the probability of error as a function of SNR.

**Hayes, Chapter 11: "Detection Theory"** likely covers aspects of detecting digital signals in noise, including the performance of various modulation schemes in terms of error rates.

#### 4. Medical Imaging (e.g., detecting abnormalities in X-rays)

**Problem:** Identifying the presence or absence of a disease or anomaly in medical images.

**Scenario:** Medical images are processed to detect subtle features that might indicate an abnormality. These images are inherently noisy due to the imaging process.

**Hypotheses:**
*   $H_0$: The image region is normal.
*   $H_1$: The image region contains an abnormality.

**Observations:** Pixel values or extracted features from the image.

**Detection Strategy:**
Feature extraction techniques are often employed to convert image regions into numerical features. Then, statistical tests (e.g., based on the LRT or Bayes' rule) are applied to these features.

**Performance Metrics:**
*   $P_D$ (Sensitivity or Recall): Ability to correctly identify abnormal cases.
*   $P_{FA}$ (False Positive Rate): Likelihood of misclassifying a normal case as abnormal.
*   Specificity: Ability to correctly identify normal cases.

**ROC Curve in Medical Diagnosis:**
The ROC curve is a standard tool for evaluating the performance of diagnostic tests. It helps clinicians and researchers understand the trade-off between correctly identifying diseased individuals ($P_D$) and wrongly diagnosing healthy individuals ($P_{FA}$). Different thresholds for a diagnostic marker can result in different points on the ROC curve.

**Kay, Vol. II, Chapter 9: "Nonparametric Detection"** might touch upon detection strategies when the exact probability distributions are unknown, which can be relevant in some medical imaging applications where prior knowledge of signal distributions is limited.

---

### Performance Evaluation: ROC Curves

The Receiver Operating Characteristic (ROC) curve is a crucial tool for visualizing and comparing the performance of statistical detectors, especially when the decision threshold can be varied.

**Construction of an ROC Curve:**

1.  **Hypotheses:** Consider a detector that uses a decision statistic $T(y)$ and a threshold $\eta$. The decision rule is:
    *   Decide $H_1$ if $T(y) > \eta$
    *   Decide $H_0$ if $T(y) \le \eta$

2.  **Varying the Threshold:** As the threshold $\eta$ is varied from $-\infty$ to $+\infty$:
    *   When $\eta$ is very low, $T(y) > \eta$ for almost all observations, leading to $P_D \approx 1$ and $P_{FA} \approx 1$. This is the top-right corner of the ROC plane.
    *   When $\eta$ is very high, $T(y) \le \eta$ for almost all observations, leading to $P_D \approx 0$ and $P_{FA} \approx 0$. This is the bottom-left corner of the ROC plane.

3.  **Plotting:** For each value of $\eta$, calculate $P_D(\eta)$ and $P_{FA}(\eta)$ and plot them on a graph with $P_{FA}$ on the x-axis and $P_D$ on the y-axis.

**Interpreting the ROC Curve:**

*   **Ideal Detector:** An ideal detector would have $P_D = 1$ and $P_{FA} = 0$ simultaneously, represented by a point at the top-left corner of the ROC plane.
*   **Random Guessing:** A detector that performs no better than random guessing would have $P_D = P_{FA}$, represented by a diagonal line from (0,0) to (1,1).
*   **Better Performance:** A detector whose ROC curve is closer to the top-left corner performs better.
*   **Area Under the Curve (AUC):** The AUC provides a single measure of overall performance.
    *   AUC = 1: Perfect detector.
    *   AUC = 0.5: Performance equivalent to random guessing.
    *   AUC < 0.5: Worse than random guessing.

**Kay, Vol. II, Chapter 6: "Performance Bounds and Approximations"** discusses ROC curves and their utility in evaluating detector performance. It also covers methods for approximating $P_D$ and $P_{FA}$ for various signal models, which are essential for constructing ROC curves without exhaustive simulation.

---

### Practice Questions and Exercises:

**Question 1 (LO1, LO3, CO3, CO4):**
Consider a radar system that needs to detect a target. The received signal $y$ is a scalar observation. Under $H_0$ (no target), $y \sim \mathcal{N}(0, 1)$. Under $H_1$ (target present), $y \sim \mathcal{N}(\mu, 1)$, where $\mu > 0$ is the signal amplitude. The decision rule is to declare a target if $y > \eta$.

a) Derive the expression for $P_{FA}$ and $P_D$ as a function of the threshold $\eta$.
b) Sketch the ROC curve for this system.
c) How would the ROC curve change if the signal amplitude $\mu$ were increased? Explain your reasoning.

**Answer 1:**

a)
*   $P_{FA} = P(y > \eta | H_0) = 1 - \Phi(\eta)$, where $\Phi(\cdot)$ is the cumulative distribution function (CDF) of the standard normal distribution.
*   $P_D = P(y > \eta | H_1) = 1 - \Phi\left(\frac{\eta - \mu}{1}\right) = 1 - \Phi(\eta - \mu)$.

b) To sketch the ROC curve, we can express $P_D$ as a function of $P_{FA}$.
From $P_{FA} = 1 - \Phi(\eta)$, we have $\Phi(\eta) = 1 - P_{FA}$.
Using the property of the standard normal distribution that $\Phi(-x) = 1 - \Phi(x)$, we get $\Phi(\eta) = \Phi(-\eta)$. Thus, $\eta = -\Phi^{-1}(1 - P_{FA})$.
Let $z = \Phi^{-1}(P_{FA})$. Then $\eta = -z$.
Substituting this into the expression for $P_D$:
$P_D = 1 - \Phi(-z - \mu)$.
Since $\Phi(-x) = 1 - \Phi(x)$, we have $P_D = 1 - (1 - \Phi(z + \mu)) = \Phi(z + \mu)$.
Since $z = \Phi^{-1}(P_{FA})$, we can write $P_D = \Phi(\Phi^{-1}(P_{FA}) + \mu)$.
This is the equation of the ROC curve. As $\eta$ varies, $P_{FA}$ ranges from 0 to 1, and $P_D$ correspondingly ranges from 0 to 1.

c) If the signal amplitude $\mu$ were increased, the mean of the distribution under $H_1$ would shift further to the right. For any given threshold $\eta$, the probability of $y$ exceeding $\eta$ would be higher. Therefore, $P_D$ would increase for all values of $P_{FA}$. This means the ROC curve would shift upwards and to the left, closer to the ideal corner.

---

**Question 2 (LO2, LO4, CO3, CO4):**
In a digital communication system, a binary signal is transmitted. Let the received signal be $y$. Under $H_0$ (0 transmitted), $y \sim \mathcal{N}(1, 1)$. Under $H_1$ (1 transmitted), $y \sim \mathcal{N}(-1, 1)$. The prior probabilities are $P(H_0) = 0.5$ and $P(H_1) = 0.5$.

a) What is the optimal decision rule using the Neyman-Pearson criterion to achieve a specific $P_{FA}$?
b) What is the optimal decision rule using the Bayes' criterion?
c) Compare the decision rules from (a) and (b) and discuss the role of prior probabilities.

**Answer 2:**

a) The Neyman-Pearson criterion aims to maximize $P_D$ for a fixed $P_{FA}$. The decision statistic is the likelihood ratio:
$\Lambda(y) = \frac{p(y | H_1)}{p(y | H_0)} = \frac{\frac{1}{\sqrt{2\pi}} e^{-\frac{(y - (-1))^2}{2}}}{\frac{1}{\sqrt{2\pi}} e^{-\frac{(y - 1)^2}{2}}} = e^{-\frac{(y+1)^2}{2} + \frac{(y-1)^2}{2}}$
$\Lambda(y) = e^{-\frac{1}{2}(y^2 + 2y + 1 - (y^2 - 2y + 1))} = e^{-\frac{1}{2}(4y)} = e^{-2y}$

The Neyman-Pearson decision rule is to decide $H_1$ if $\Lambda(y) > \eta$ for some threshold $\eta$.
$e^{-2y} > \eta \implies -2y > \ln(\eta) \implies y < -\frac{1}{2}\ln(\eta)$.
Let the threshold be $\eta'$. The decision rule is: Decide $H_1$ if $y < \eta'$.
To achieve a specific $P_{FA}$, we set the threshold $\eta'$. The choice of $\eta'$ is to ensure $P(y < \eta' | H_0) = P_{FA}$.
$P_{FA} = \Phi\left(\frac{\eta' - 1}{1}\right) = P_{FA}$.
So, $\frac{\eta' - 1}{1} = \Phi^{-1}(P_{FA})$.
$\eta' = 1 + \Phi^{-1}(P_{FA})$.
The decision rule is: Decide $H_1$ if $y < 1 + \Phi^{-1}(P_{FA})$.

b) The Bayes' criterion minimizes the average probability of error. The decision rule is to decide $H_1$ if:
$P(H_1) p(y | H_1) > P(H_0) p(y | H_0)$
Since the prior probabilities are equal ($P(H_0) = P(H_1) = 0.5$), the rule simplifies to deciding $H_1$ if $p(y | H_1) > p(y | H_0)$, which is equivalent to deciding $H_1$ if $\Lambda(y) > 1$.
$e^{-2y} > 1 \implies -2y > 0 \implies y < 0$.
The Bayes' decision rule is: Decide $H_1$ if $y < 0$, and $H_0$ if $y \ge 0$.

c)
*   The Neyman-Pearson decision rule is parameterized by the desired $P_{FA}$. It focuses on optimizing one type of error control (false alarm rate) while maximizing detection probability.
*   The Bayes' decision rule, when priors are equal, becomes a simple comparison of likelihoods. In this specific case, the Bayes' rule (decide $H_1$ if $y < 0$) is equivalent to the Neyman-Pearson rule if the threshold $\eta'$ is chosen such that $1 + \Phi^{-1}(P_{FA}) = 0$. This implies $\Phi^{-1}(P_{FA}) = -1$, so $P_{FA} = \Phi(-1) \approx 0.1587$.
*   When prior probabilities are unequal, the Bayes' rule incorporates these probabilities, shifting the decision boundary. For example, if $P(H_0)$ were much higher, the rule would tend to favor deciding $H_0$ to minimize the overall error. The Neyman-Pearson rule, on the other hand, typically does not directly use prior probabilities but rather a specified false alarm rate.

---

### Important Points to Remember:

*   **Context is Key:** The choice of detection strategy (Neyman-Pearson, Bayes') depends heavily on the application's requirements and available information (e.g., prior probabilities, cost of errors).
*   **ROC Curves are Informative:** They provide a complete picture of a detector's performance across all possible thresholds, enabling fair comparison between different detectors.
*   **SNR is Fundamental:** The Signal-to-Noise Ratio is a primary determinant of detector performance. Higher SNR generally leads to better detection probabilities and lower error rates.
*   **Matched Filtering:** For detecting known signals in AWGN, matched filtering is the optimal linear processing technique.
*   **Trade-offs Exist:** There is always a trade-off between minimizing false alarms and maximizing detections. ROC curves help quantify this trade-off.
*   **Real-world Complexity:** Real-world scenarios often involve non-Gaussian noise, unknown signal parameters, and complex environments, requiring more advanced detection techniques than simple LRT for AWGN.

---

This module has provided a glimpse into the practical implementation and application of statistical detection theory. Understanding these examples helps solidify the theoretical concepts and demonstrates their power in solving critical engineering problems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
