---
title: "likelihood ratio test"
subject: "ESTIMATION AND DETECTION"
module: "Module 3: Statistical Detection Theory I"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780febda"
status: "completed"
scrapedAt: "2026-05-23T17:56:53.092Z"
---
# Module 3: Statistical Detection Theory I - The Likelihood Ratio Test

## Introduction to Statistical Detection Theory

This module introduces the fundamental principles of statistical detection theory, which deals with deciding whether a signal is present in the presence of noise or uncertainty. The Likelihood Ratio Test (LRT) is a cornerstone of this field, providing a systematic and optimal approach to making such decisions.

**Course Outcomes Covered:**
*   **CO3:** Illustrate the fundamentals of statistical detection principles used in various engineering problems. (Knowledge Level: K2)
*   **CO4:** Apply various types of statistical decision rules in engineering applications. (Knowledge Level: K3)

**Learning Outcomes:**
*   Understanding of the basic problem formulation in statistical detection.
*   Definition and derivation of the Likelihood Ratio Test (LRT).
*   Relationship between LRT and other decision rules (e.g., Bayes, Neyman-Pearson).
*   Properties and optimality of the LRT.
*   Application of LRT to specific signal detection scenarios.

**Key Concepts:**
*   **Hypothesis Testing:** The process of choosing between two or more competing statements about a phenomenon based on observed data.
*   **Null Hypothesis ($H_0$):** The statement that there is no signal or a specific condition is true.
*   **Alternative Hypothesis ($H_1$):** The statement that a signal is present or a different condition is true.
*   **Observation or Data:** The measurements or data used to make the decision.
*   **Noise:** Random disturbances that corrupt the signal or observation.
*   **Decision Rule:** A criterion for deciding which hypothesis is more likely given the observed data.
*   **Performance Measures:** Metrics used to evaluate the effectiveness of a decision rule (e.g., probability of detection, probability of false alarm, error probability).

**Reference Textbooks:**
*   Kay, S.M. (2010). *Fundamentals of Statistical Signal Processing, Vol II: Detection Theory.* Pearson. (Primary Reference)
*   Van Trees, H.L. (2001). *Detection, Estimation, and Modulation Theory, Vol. I.* John Wiley & Sons.

---

## 3.1 The Basic Detection Problem Formulation

The core of statistical detection theory involves making a decision between two competing hypotheses.

### 3.1.1 Hypotheses

We are interested in deciding between two mutually exclusive and exhaustive hypotheses:

*   **$H_0$ (Null Hypothesis):** Represents the "absence" of a signal or a baseline condition. The data observed, denoted as $\mathbf{y}$, arises only from noise.
*   **$H_1$ (Alternative Hypothesis):** Represents the "presence" of a signal, possibly with some unknown parameters, embedded in noise. The data observed, $\mathbf{y}$, arises from the signal plus noise.

### 3.1.2 The Observation Vector

The data we collect is typically represented as an $N \times 1$ observation vector:
$\mathbf{y} = \begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_N \end{bmatrix}$

The statistical properties of $\mathbf{y}$ depend on which hypothesis is true.

### 3.1.3 Probability Distributions

Under each hypothesis, the observation vector $\mathbf{y}$ has a probability distribution.

*   **Under $H_0$:** $\mathbf{y}$ follows a probability density function (PDF) $p(\mathbf{y} | H_0)$.
*   **Under $H_1$:** $\mathbf{y}$ follows a probability density function (PDF) $p(\mathbf{y} | H_1)$.

**Important Note:** These PDFs are crucial for formulating detection rules. The specific form of these PDFs depends on the nature of the signal and the noise. Often, the noise is assumed to be Gaussian, which simplifies many analyses.

**Example:**
Consider detecting a DC signal in additive white Gaussian noise (AWGN).
*   **$H_0$:** $y_i = n_i$, where $n_i \sim \mathcal{N}(0, \sigma^2)$. So, $\mathbf{y} \sim \mathcal{N}(\mathbf{0}, \sigma^2 \mathbf{I})$.
*   **$H_1$:** $y_i = s + n_i$, where $s$ is the unknown signal amplitude and $n_i \sim \mathcal{N}(0, \sigma^2)$. So, $\mathbf{y} \sim \mathcal{N}(s \mathbf{1}, \sigma^2 \mathbf{I})$, where $\mathbf{1}$ is a vector of all ones.

**Reference:** Kay, Vol II, Chapter 2.1 (The Basic Detection Problem).

---

## 3.2 The Likelihood Ratio Test (LRT)

The Likelihood Ratio Test is a fundamental and often optimal decision rule for hypothesis testing. It compares the likelihood of observing the data under the alternative hypothesis to the likelihood of observing the data under the null hypothesis.

### 3.2.1 Definition of Likelihood

The likelihood of the observation vector $\mathbf{y}$ given a particular hypothesis is given by the corresponding PDF:

*   **Likelihood under $H_0$:** $L(\mathbf{y} | H_0) = p(\mathbf{y} | H_0)$
*   **Likelihood under $H_1$:** $L(\mathbf{y} | H_1) = p(\mathbf{y} | H_1)$

### 3.2.2 The Likelihood Ratio

The likelihood ratio (LR) is the ratio of these two likelihoods:

$\Lambda(\mathbf{y}) = \frac{p(\mathbf{y} | H_1)}{p(\mathbf{y} | H_0)}$

### 3.2.3 The LRT Decision Rule

The LRT makes a decision based on comparing the likelihood ratio to a threshold, $\eta$.

*   **If $\Lambda(\mathbf{y}) > \eta$, decide $H_1$ (signal present).**
*   **If $\Lambda(\mathbf{y}) < \eta$, decide $H_0$ (signal absent).**
*   **If $\Lambda(\mathbf{y}) = \eta$, the decision can be arbitrary or based on specific tie-breaking rules.**

The threshold $\eta$ is chosen to satisfy desired performance criteria (e.g., a specific probability of false alarm).

### 3.2.4 Connection to Bayes' Rule and Minimum Probability of Error

The LRT can be derived from a Bayesian perspective. If we consider prior probabilities of the hypotheses ($P(H_0)$ and $P(H_1)$) and costs associated with each decision (cost of correct detection, miss, false alarm, etc.), we can formulate a cost function. The decision rule that minimizes the expected cost is the Bayes decision rule.

For the problem of minimizing the probability of error, the Bayes decision rule is given by:

*   **If $\frac{p(\mathbf{y} | H_1)}{p(\mathbf{y} | H_0)} > \frac{P(H_0)}{P(H_1)}$, decide $H_1$.**
*   **If $\frac{p(\mathbf{y} | H_1)}{p(\mathbf{y} | H_0)} < \frac{P(H_0)}{P(H_1)}$, decide $H_0$.**

This shows that the LRT with $\eta = \frac{P(H_0)}{P(H_1)}$ is the Bayes detector that minimizes the probability of error when the prior probabilities are known.

**Example (Continuing DC signal in AWGN):**
*   $p(\mathbf{y} | H_0) = \left(\frac{1}{2\pi\sigma^2}\right)^{N/2} \exp\left(-\frac{1}{2\sigma^2} \sum_{i=1}^N y_i^2\right) = \left(\frac{1}{2\pi\sigma^2}\right)^{N/2} \exp\left(-\frac{1}{2\sigma^2} \mathbf{y}^T \mathbf{y}\right)$
*   $p(\mathbf{y} | H_1) = \left(\frac{1}{2\pi\sigma^2}\right)^{N/2} \exp\left(-\frac{1}{2\sigma^2} \sum_{i=1}^N (y_i - s)^2\right) = \left(\frac{1}{2\pi\sigma^2}\right)^{N/2} \exp\left(-\frac{1}{2\sigma^2} (\mathbf{y} - s\mathbf{1})^T (\mathbf{y} - s\mathbf{1})\right)$

The likelihood ratio is:
$\Lambda(\mathbf{y}) = \frac{\exp\left(-\frac{1}{2\sigma^2} (\mathbf{y} - s\mathbf{1})^T (\mathbf{y} - s\mathbf{1})\right)}{\exp\left(-\frac{1}{2\sigma^2} \mathbf{y}^T \mathbf{y}\right)}$
$\Lambda(\mathbf{y}) = \exp\left(\frac{1}{2\sigma^2} [\mathbf{y}^T \mathbf{y} - (\mathbf{y} - s\mathbf{1})^T (\mathbf{y} - s\mathbf{1})]\right)$
$\Lambda(\mathbf{y}) = \exp\left(\frac{1}{2\sigma^2} [\mathbf{y}^T \mathbf{y} - (\mathbf{y}^T\mathbf{y} - 2s\mathbf{y}^T\mathbf{1} + s^2\mathbf{1}^T\mathbf{1})]\right)$
$\Lambda(\mathbf{y}) = \exp\left(\frac{1}{2\sigma^2} [2s\mathbf{y}^T\mathbf{1} - s^2 N]\right)$
$\Lambda(\mathbf{y}) = \exp\left(\frac{s}{\sigma^2} \sum_{i=1}^N y_i - \frac{s^2 N}{2\sigma^2}\right)$

The LRT decision rule is $\Lambda(\mathbf{y}) > \eta$. Taking the logarithm (which is a monotonic transformation, so it preserves the inequality):
$\ln \Lambda(\mathbf{y}) > \ln \eta$
$\frac{s}{\sigma^2} \sum_{i=1}^N y_i - \frac{s^2 N}{2\sigma^2} > \ln \eta$

Let $T(\mathbf{y}) = \sum_{i=1}^N y_i$. The decision rule becomes:
$\frac{s}{\sigma^2} T(\mathbf{y}) > \ln \eta + \frac{s^2 N}{2\sigma^2}$

This is equivalent to deciding based on the sum of the observations. The threshold depends on $s$ and $\sigma^2$.

**Reference:** Kay, Vol II, Chapter 2.2 (The Likelihood Ratio Test).

---

## 3.3 Log-Likelihood Ratio Test (LLRT)

Working with the likelihood ratio can sometimes involve very small or very large numbers, leading to numerical issues. Taking the logarithm of the likelihood ratio simplifies calculations and often results in a linear test statistic.

### 3.3.1 Definition

The log-likelihood ratio (LLR) is given by:

$\lambda(\mathbf{y}) = \ln \Lambda(\mathbf{y}) = \ln \left(\frac{p(\mathbf{y} | H_1)}{p(\mathbf{y} | H_0)}\right) = \ln p(\mathbf{y} | H_1) - \ln p(\mathbf{y} | H_0)$

### 3.3.2 LLRT Decision Rule

The LLRT decision rule is equivalent to the LRT:

*   **If $\lambda(\mathbf{y}) > \ln \eta$, decide $H_1$.**
*   **If $\lambda(\mathbf{y}) < \ln \eta$, decide $H_0$.**

The threshold is now $\eta' = \ln \eta$.

### 3.3.3 Advantages

*   **Numerical Stability:** Avoids underflow/overflow issues with very small/large likelihoods.
*   **Simpler Computations:** Often leads to simpler analytical expressions for the test statistic.
*   **Linearity:** For many common PDFs (like Gaussians), the LLR is a linear function of the observations, making it easier to analyze and implement.

**Example (Continuing DC signal in AWGN):**
From the previous example, the LLR was:
$\lambda(\mathbf{y}) = \frac{s}{\sigma^2} \sum_{i=1}^N y_i - \frac{s^2 N}{2\sigma^2}$

The LLRT decision rule is:
$\frac{s}{\sigma^2} \sum_{i=1}^N y_i - \frac{s^2 N}{2\sigma^2} > \ln \eta$
$\sum_{i=1}^N y_i > \frac{\sigma^2}{s} \left(\ln \eta + \frac{s^2 N}{2\sigma^2}\right)$

This shows that the decision is based on the sum of observations, which is a simple linear combination.

**Reference:** Kay, Vol II, Section 2.2.1 (The Log-Likelihood Ratio).

---

## 3.4 Relationship to Other Decision Rules

The LRT is a unifying framework that encompasses other important detection rules.

### 3.4.1 Bayes Detector

As discussed, the LRT with $\eta = P(H_0)/P(H_1)$ is the Bayes detector that minimizes the probability of error when prior probabilities are known.

### 3.4.2 Neyman-Pearson (NP) Detector

The Neyman-Pearson criterion is used when we want to maximize the probability of detection ($P_D$) for a *fixed* probability of false alarm ($P_{FA}$).

*   **Probability of Detection ($P_D$):** The probability of deciding $H_1$ when $H_1$ is true: $P_D = P(\Lambda(\mathbf{y}) > \eta | H_1)$.
*   **Probability of False Alarm ($P_{FA}$):** The probability of deciding $H_1$ when $H_0$ is true: $P_{FA} = P(\Lambda(\mathbf{y}) > \eta | H_0)$.

The NP test seeks to maximize $P_D$ subject to $P_{FA} \le \alpha$, where $\alpha$ is the desired maximum false alarm rate.

**The NP detector uses the likelihood ratio $\Lambda(\mathbf{y})$ and chooses the threshold $\eta$ such that $P_{FA}(\eta) = \alpha$.**

This means the LRT is the NP detector when the threshold is chosen based on a specific $P_{FA}$. If the prior probabilities are equal ($P(H_0) = P(H_1) = 0.5$), then the Bayes detector for minimum probability of error becomes the NP detector with $\eta = 1$.

**Example:** For a fixed $P_{FA}$, we find the $\eta$ such that $P(\Lambda(\mathbf{y}) > \eta | H_0) = \alpha$. Then we use this $\eta$ to decide.

**Reference:** Kay, Vol II, Section 2.3 (The Neyman-Pearson Detector).

### 3.4.3 Maximum Likelihood (ML) Detector

While not a direct decision rule between hypotheses in the same sense as LRT or NP, ML estimation can inform detection. If we are interested in estimating a parameter $\theta$ associated with $H_1$, the ML estimate $\hat{\theta}_{ML}$ is found by maximizing $p(\mathbf{y} | H_1, \theta)$ with respect to $\theta$. However, this is an estimation problem, not a detection problem.

The LRT is more fundamental for detection as it directly compares the evidence for the presence versus absence of a signal.

---

## 3.5 Optimality of the LRT

The LRT possesses several optimality properties, making it a cornerstone of detection theory.

### 3.5.1 Minimum Probability of Error Detector (Bayes Detector)

As established, the LRT is the optimal detector for minimizing the probability of error when prior probabilities are known.

### 3.5.2 Neyman-Pearson Detector

The LRT provides the framework for the NP detector, which is optimal in the sense of maximizing $P_D$ for a given $P_{FA}$.

### 3.5.3 Monotonic Likelihood Ratio Property (MLRP)

A class of problems exists where the likelihood ratio $\Lambda(\mathbf{y})$ has a specific monotonic property. If the PDFs $p(\mathbf{y}|H_0)$ and $p(\mathbf{y}|H_1)$ satisfy the Monotonic Likelihood Ratio Property (MLRP), then the LRT is also the Uniformly Most Powerful (UMP) test.

**Definition of MLRP:**
A family of probability distributions $p(x; \theta)$ has the MLRP in $x$ if the likelihood ratio $\frac{p(x; \theta_1)}{p(x; \theta_0)}$ is a non-decreasing function of $x$ for $\theta_1 > \theta_0$.

For hypothesis testing between $H_0: \theta = \theta_0$ and $H_1: \theta = \theta_1$, if the distributions satisfy MLRP, then the LRT is UMP. This means it's the most powerful test for all possible thresholds $\eta$.

**Example:** The Poisson distribution and the normal distribution (with known variance and unknown mean) exhibit MLRP.

**Reference:** Kay, Vol II, Section 2.3.3 (The Uniformly Most Powerful Test).

---

## 3.6 Applications of LRT

The LRT is widely applicable in various fields.

### 3.6.1 Signal Detection in Noise

*   **Radar/Sonar:** Detecting the presence of a target from reflected signals. $H_1$ might be a target echo plus noise, $H_0$ is just noise.
*   **Communication Systems:** Detecting transmitted symbols (e.g., presence of a '1' or '0').
*   **Biomedical Signal Processing:** Detecting abnormal patterns in ECG, EEG, etc.

### 3.6.2 Pattern Recognition

Classifying patterns based on observed features. For example, deciding if an image contains a specific object ($H_1$) or not ($H_0$).

### 3.6.3 Quality Control

Detecting defects in manufactured products based on sensor readings.

**Example: Binary Phase Shift Keying (BPSK) Detection**
In BPSK, a signal can be either $+A$ or $-A$ in a symbol period.
*   **$H_0$:** Signal is $-A$ (e.g., representing a '0').
*   **$H_1$:** Signal is $+A$ (e.g., representing a '1').
In both cases, AWGN $n_i \sim \mathcal{N}(0, \sigma^2)$ is present.

The observation over $N$ samples:
*   Under $H_0$: $y_i = -A + n_i$
*   Under $H_1$: $y_i = +A + n_i$

The PDFs are Gaussian. The LRT involves comparing the sum of observations. If the sum is above a threshold, we decide $H_1$.

**Reference:** Van Trees, Vol I, Chapter 2 (Hypothesis Testing).

---

## Practice Questions

**Question 1:**
Consider a scalar observation $y$ with the following probability distributions:
*   $H_0: y \sim \mathcal{N}(\mu_0, \sigma^2)$
*   $H_1: y \sim \mathcal{N}(\mu_1, \sigma^2)$
Assume $\mu_1 > \mu_0$ and $\sigma^2$ is known. Derive the likelihood ratio $\Lambda(y)$ and show that the LLRT decision rule is to decide $H_1$ if $y > \eta'$ for some threshold $\eta'$.

**Answer 1:**
The PDFs are:
$p(y|H_0) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(y-\mu_0)^2}{2\sigma^2}\right)$
$p(y|H_1) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(y-\mu_1)^2}{2\sigma^2}\right)$

The likelihood ratio is:
$\Lambda(y) = \frac{p(y|H_1)}{p(y|H_0)} = \frac{\exp\left(-\frac{(y-\mu_1)^2}{2\sigma^2}\right)}{\exp\left(-\frac{(y-\mu_0)^2}{2\sigma^2}\right)} = \exp\left(\frac{(y-\mu_0)^2 - (y-\mu_1)^2}{2\sigma^2}\right)$

Let's expand the exponent:
$(y-\mu_0)^2 - (y-\mu_1)^2 = (y^2 - 2y\mu_0 + \mu_0^2) - (y^2 - 2y\mu_1 + \mu_1^2)$
$= -2y\mu_0 + \mu_0^2 + 2y\mu_1 - \mu_1^2$
$= 2y(\mu_1 - \mu_0) + (\mu_0^2 - \mu_1^2)$

So, $\Lambda(y) = \exp\left(\frac{2y(\mu_1 - \mu_0) + (\mu_0^2 - \mu_1^2)}{2\sigma^2}\right)$.

The LLRT decision rule is $\Lambda(y) > \eta$. Taking the logarithm:
$\ln \Lambda(y) > \ln \eta$
$\frac{2y(\mu_1 - \mu_0) + (\mu_0^2 - \mu_1^2)}{2\sigma^2} > \ln \eta$
$2y(\mu_1 - \mu_0) > 2\sigma^2 \ln \eta - (\mu_0^2 - \mu_1^2)$
$y(\mu_1 - \mu_0) > \sigma^2 \ln \eta - \frac{1}{2}(\mu_0^2 - \mu_1^2)$

Since $\mu_1 > \mu_0$, $(\mu_1 - \mu_0) > 0$. We can divide by it:
$y > \frac{\sigma^2 \ln \eta - \frac{1}{2}(\mu_0^2 - \mu_1^2)}{\mu_1 - \mu_0}$

This shows the decision rule is $y > \eta'$, where $\eta' = \frac{\sigma^2 \ln \eta - \frac{1}{2}(\mu_0^2 - \mu_1^2)}{\mu_1 - \mu_0}$. The threshold $\eta'$ depends on the original threshold $\eta$ and the parameters $\mu_0, \mu_1, \sigma^2$.

**Question 2:**
Explain the trade-off between the Probability of Detection ($P_D$) and the Probability of False Alarm ($P_{FA}$) in the context of the Neyman-Pearson detector.

**Answer 2:**
The Neyman-Pearson detector aims to maximize the Probability of Detection ($P_D$, the probability of correctly identifying the signal when it is present) for a given maximum allowable Probability of False Alarm ($P_{FA}$, the probability of incorrectly identifying a signal when it is absent).

There is an inherent trade-off:
*   **Increasing $P_D$ generally requires increasing $P_{FA}$.** To make it easier to detect the signal, we often lower the detection threshold. This makes it more likely to declare a signal present when one is there ($P_D$ increases), but also more likely to declare a signal present when one is not there ($P_{FA}$ increases).
*   **Decreasing $P_{FA}$ generally requires decreasing $P_D$.** To reduce false alarms, we raise the detection threshold. This makes it less likely to declare a signal present when one is absent ($P_{FA}$ decreases), but also less likely to declare a signal present when one is actually there ($P_D$ decreases).

The Neyman-Pearson criterion uses the likelihood ratio and adjusts the decision threshold ($\eta$) to achieve a specific $P_{FA}$ value, thereby achieving the maximum possible $P_D$ for that $P_{FA}$. This relationship is often visualized using the **Receiver Operating Characteristic (ROC) curve**, which plots $P_D$ against $P_{FA}$ for all possible thresholds of a given detector.

---

## Key Points to Remember

*   The LRT provides a framework for deciding between two hypotheses ($H_0$ and $H_1$) based on observed data $\mathbf{y}$.
*   The test statistic is the likelihood ratio $\Lambda(\mathbf{y}) = p(\mathbf{y}|H_1) / p(\mathbf{y}|H_0)$.
*   The decision rule is to compare $\Lambda(\mathbf{y})$ to a threshold $\eta$.
*   The LLRT uses $\ln \Lambda(\mathbf{y})$ for numerical stability and often simpler calculations.
*   The LRT is optimal in several senses: it minimizes probability of error (Bayes detector) when priors are known, and it forms the basis of the Neyman-Pearson detector (maximizing $P_D$ for a given $P_{FA}$).
*   Understanding the PDFs $p(\mathbf{y}|H_0)$ and $p(\mathbf{y}|H_1)$ is crucial for applying the LRT.
*   The choice of threshold $\eta$ determines the operating point (the trade-off between $P_D$ and $P_{FA}$).

---

This concludes the notes for "The Likelihood Ratio Test" from Module 3 of Statistical Detection Theory I. The next steps in the course will likely explore specific scenarios and extensions of these fundamental concepts.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
