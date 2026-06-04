---
title: "Statistical Detection Theory I"
subject: "ESTIMATION AND DETECTION"
module: "Module 3: Statistical Detection Theory I"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780febd4"
status: "completed"
scrapedAt: "2026-05-23T17:56:48.832Z"
---
# Module 3: Statistical Detection Theory I

## Introduction to Statistical Detection Theory

This module introduces the fundamental principles of statistical detection theory, focusing on making optimal decisions in the presence of uncertainty. We will explore how to distinguish between different hypotheses about the underlying data based on observed measurements. This is crucial in various engineering applications such as radar, sonar, communications, medical imaging, and pattern recognition.

**Learning Outcomes Covered:**
*   **CO3: Illustrate the fundamentals of statistical detection principles used in various engineering problems.** (K2)

**Key Concepts:**
*   **Hypothesis Testing:** The core of detection theory is deciding which of several possible "hypotheses" about the data is true.
*   **Signal Detection:** Identifying the presence or absence of a signal, or distinguishing between different types of signals.
*   **Observation:** The data we collect to make our decision.
*   **Decision Rule:** A rule that maps the observation to a decision about the hypothesis.
*   **Probabilistic Model:** A mathematical description of how the observations are generated under each hypothesis.

**Textbook References:**
*   Kay, S.M. (2010). *Fundamentals of Statistical Signal Processing, Vol II: Detection Theory.* Chapter 1.

---

## 3.1 The Basic Detection Problem

The fundamental goal of detection is to determine which of a set of possible states of nature (hypotheses) is true, given a set of noisy observations.

### 3.1.1 Hypotheses

We typically consider two hypotheses for simplicity:

*   **Null Hypothesis ($H_0$):** Represents the absence of something we are looking for (e.g., no signal, background noise only).
*   **Alternative Hypothesis ($H_1$):** Represents the presence of what we are looking for (e.g., a signal is present).

More generally, we can have multiple hypotheses ($H_0, H_1, \dots, H_M$) to distinguish between various states.

### 3.1.2 Observations

The observations are typically represented as a vector of measurements, denoted by $\mathbf{y}$. These observations are assumed to be generated according to a probabilistic model that depends on the true hypothesis.

**Example:**
In a radar system, the received signal $\mathbf{y}$ might be a vector of digitized samples.
*   Under $H_0$, $\mathbf{y}$ might consist of only thermal noise.
*   Under $H_1$, $\mathbf{y}$ might consist of thermal noise plus a reflected radar pulse.

### 3.1.3 Probabilistic Models

We describe the relationship between the observations and the hypotheses using probability distributions.

*   **Likelihood Function:** The probability density function (pdf) of the observations given a specific hypothesis.
    *   $p(\mathbf{y} | H_0)$: Likelihood of observing $\mathbf{y}$ given $H_0$ is true.
    *   $p(\mathbf{y} | H_1)$: Likelihood of observing $\mathbf{y}$ given $H_1$ is true.

**Key Concept:** The likelihood function quantifies how likely the observed data is under each hypothesis.

### 3.1.4 Decision Rule

A decision rule maps the observed data $\mathbf{y}$ to a decision about which hypothesis is true. The goal is to design a rule that makes the "best" decision, which is defined based on certain performance criteria.

**Example:**
A simple decision rule could be:
*   If $\mathbf{y} > \tau$ (threshold), decide $H_1$.
*   If $\mathbf{y} \le \tau$, decide $H_0$.

---

## 3.2 Binary Hypothesis Testing

This is the simplest form of detection, where we must choose between two hypotheses, $H_0$ and $H_1$.

**Learning Outcomes Covered:**
*   **CO3: Illustrate the fundamentals of statistical detection principles used in various engineering problems.** (K2)
*   **CO4: Apply various types of statistical decision rules in engineering applications.** (K3)

**Key Concepts:**
*   **Likelihood Ratio Test (LRT):** A fundamental principle for optimal decision making.
*   **Bayes Decision Rule:** Minimizes the average probability of error by considering prior probabilities.
*   **Neyman-Pearson (NP) Test:** Maximizes the probability of detection for a fixed probability of false alarm.

**Textbook References:**
*   Kay, S.M. (2010). *Fundamentals of Statistical Signal Processing, Vol II: Detection Theory.* Chapter 2.
*   Van Trees, H.L. (2001). *Detection, Estimation, and Modulation Theory, Vol. I.* Chapter 2.

### 3.2.1 The Likelihood Ratio Test (LRT)

The LRT is a powerful tool for binary hypothesis testing. It compares the likelihood of the data under $H_1$ to the likelihood under $H_0$.

**Likelihood Ratio:**
$$ \Lambda(\mathbf{y}) = \frac{p(\mathbf{y} | H_1)}{p(\mathbf{y} | H_0)} $$

**Decision Rule:**
*   If $\Lambda(\mathbf{y}) > \eta$, decide $H_1$.
*   If $\Lambda(\mathbf{y}) < \eta$, decide $H_0$.
*   If $\Lambda(\mathbf{y}) = \eta$, the decision can be arbitrary or made based on a random mechanism.

The threshold $\eta$ is determined by the desired performance trade-off.

**Log-Likelihood Ratio Test:**
Taking the logarithm often simplifies calculations and improves numerical stability:
$$ \ln \Lambda(\mathbf{y}) = \ln p(\mathbf{y} | H_1) - \ln p(\mathbf{y} | H_0) $$
The decision rule becomes:
*   If $\ln \Lambda(\mathbf{y}) > \ln \eta$, decide $H_1$.
*   If $\ln \Lambda(\mathbf{y}) < \ln \eta$, decide $H_0$.

### 3.2.2 Performance Measures

When making decisions, errors are inevitable. We need metrics to quantify the performance of a detector.

*   **True Positive (TP) / Detection:** Correctly deciding $H_1$ when $H_1$ is true.
    *   Probability of Detection (PD) or Probability of True Positive (PTP): $P(\text{Decide } H_1 | H_1)$
*   **False Positive (FP) / False Alarm:** Incorrectly deciding $H_1$ when $H_0$ is true.
    *   Probability of False Alarm (PFA): $P(\text{Decide } H_1 | H_0)$
*   **True Negative (TN) / Correct Rejection:** Correctly deciding $H_0$ when $H_0$ is true.
    *   Probability of True Negative (PTN): $P(\text{Decide } H_0 | H_0)$
*   **False Negative (FN) / Miss Detection:** Incorrectly deciding $H_0$ when $H_1$ is true.
    *   Probability of Miss Detection (PM): $P(\text{Decide } H_0 | H_1)$

**Important Relationships:**
*   $PD + PM = 1$
*   $PFA + PTN = 1$

### 3.2.3 Bayes Decision Rule

This rule minimizes the overall probability of error, considering the prior probabilities of the hypotheses.

**Prior Probabilities:**
*   $P(H_0)$: Probability that $H_0$ is true before observing data.
*   $P(H_1)$: Probability that $H_1$ is true before observing data.
    *   $P(H_0) + P(H_1) = 1$

**Average Probability of Error ($P_e$):**
$$ P_e = P(\text{Decide } H_1 | H_0) P(H_0) + P(\text{Decide } H_0 | H_1) P(H_1) $$
$$ P_e = PFA \cdot P(H_0) + PM \cdot P(H_1) $$

**Bayes Decision Rule using LRT:**
The optimal decision rule that minimizes $P_e$ is given by:
*   If $\frac{p(\mathbf{y} | H_1)}{p(\mathbf{y} | H_0)} > \frac{P(H_0)}{P(H_1)}$, decide $H_1$.
*   If $\frac{p(\mathbf{y} | H_1)}{p(\mathbf{y} | H_0)} < \frac{P(H_0)}{P(H_1)}$, decide $H_0$.

Thus, the threshold is $\eta_{Bayes} = \frac{P(H_0)}{P(H_1)}$.

**Using Log-Likelihood Ratio:**
*   If $\ln \Lambda(\mathbf{y}) > \ln \left( \frac{P(H_0)}{P(H_1)} \right)$, decide $H_1$.
*   If $\ln \Lambda(\mathbf{y}) < \ln \left( \frac{P(H_0)}{P(H_1)} \right)$, decide $H_0$.

**Alternative formulation with Cost Functions:**
The Bayes rule can also be formulated by minimizing the expected cost, where costs are assigned to each type of error.

### 3.2.4 Minimum Probability of Error (MPE) Detector

The Bayes decision rule that minimizes the probability of error is also known as the Minimum Probability of Error (MPE) detector.

### 3.2.5 Neyman-Pearson (NP) Test

This test is used when we want to maximize the Probability of Detection (PD) for a *fixed* Probability of False Alarm (PFA). This is common in applications where a false alarm is undesirable but missing a detection is even worse (e.g., detecting a dangerous object).

**The NP Lemma:** The most powerful test for a given PFA $\alpha$ is the LRT with the threshold chosen such that $P(\text{Decide } H_1 | H_0) = \alpha$.

**NP Decision Rule:**
*   If $\Lambda(\mathbf{y}) > \eta_{NP}$, decide $H_1$.
*   If $\Lambda(\mathbf{y}) < \eta_{NP}$, decide $H_0$.
*   If $\Lambda(\mathbf{y}) = \eta_{NP}$, decide $H_1$ with probability $\frac{\alpha - P(\Lambda(\mathbf{y}) > \eta_{NP} | H_0)}{P(\Lambda(\mathbf{y}) = \eta_{NP} | H_0)}$ and $H_0$ otherwise. (This is for discrete cases or when the threshold lands on a probability mass).

The threshold $\eta_{NP}$ is determined by solving the equation:
$$ P(\Lambda(\mathbf{y}) > \eta_{NP} | H_0) = \alpha $$

**Receiver Operating Characteristic (ROC) Curve:**
The NP test is fundamental to understanding the trade-off between PD and PFA. An ROC curve plots PD (y-axis) versus PFA (x-axis) for different threshold values $\eta$. The NP test finds the most favorable PD for each PFA.

**Important Point:** The NP test is independent of prior probabilities.

---

## 3.3 Examples of Binary Hypothesis Testing

Let's apply the LRT to common scenarios.

**Scenario 1: Gaussian Noise, Known Signal Amplitude**

Consider detecting a known signal $s(t)$ in additive white Gaussian noise (AWGN).

*   **Observations:** $\mathbf{y} = \mathbf{s} + \mathbf{w}$
    *   $\mathbf{s}$: Vector representing the signal.
    *   $\mathbf{w}$: Vector of Gaussian noise samples, $w_i \sim N(0, \sigma^2)$.
    *   $p(\mathbf{w}) = \mathcal{N}(\mathbf{0}, \sigma^2 \mathbf{I})$

*   **Hypotheses:**
    *   $H_0$: $\mathbf{y} = \mathbf{w}$ (only noise)
    *   $H_1$: $\mathbf{y} = \mathbf{s} + \mathbf{w}$ (signal + noise)

*   **Likelihood Functions:**
    *   $p(\mathbf{y} | H_0) = \frac{1}{(2\pi\sigma^2)^{N/2}} \exp\left(-\frac{1}{2\sigma^2} \sum_{i=1}^N y_i^2 \right) = \frac{1}{(2\pi\sigma^2)^{N/2}} \exp\left(-\frac{1}{2\sigma^2} ||\mathbf{y}||^2 \right)$
    *   $p(\mathbf{y} | H_1) = \frac{1}{(2\pi\sigma^2)^{N/2}} \exp\left(-\frac{1}{2\sigma^2} \sum_{i=1}^N (y_i - s_i)^2 \right) = \frac{1}{(2\pi\sigma^2)^{N/2}} \exp\left(-\frac{1}{2\sigma^2} ||\mathbf{y} - \mathbf{s}||^2 \right)$

*   **Likelihood Ratio:**
    $$ \Lambda(\mathbf{y}) = \frac{\exp\left(-\frac{1}{2\sigma^2} ||\mathbf{y} - \mathbf{s}||^2 \right)}{\exp\left(-\frac{1}{2\sigma^2} ||\mathbf{y}||^2 \right)} = \exp\left(\frac{1}{2\sigma^2} \left( ||\mathbf{y}||^2 - ||\mathbf{y} - \mathbf{s}||^2 \right) \right) $$
    $$ ||\mathbf{y}||^2 - ||\mathbf{y} - \mathbf{s}||^2 = ||\mathbf{y}||^2 - (\mathbf{y} - \mathbf{s})^T(\mathbf{y} - \mathbf{s}) $$
    $$ = ||\mathbf{y}||^2 - (\mathbf{y}^T\mathbf{y} - \mathbf{y}^T\mathbf{s} - \mathbf{s}^T\mathbf{y} + \mathbf{s}^T\mathbf{s}) $$
    $$ = ||\mathbf{y}||^2 - ||\mathbf{y}||^2 + 2\mathbf{y}^T\mathbf{s} - ||\mathbf{s}||^2 $$
    $$ = 2\mathbf{y}^T\mathbf{s} - ||\mathbf{s}||^2 $$
    So,
    $$ \Lambda(\mathbf{y}) = \exp\left(\frac{1}{2\sigma^2} (2\mathbf{y}^T\mathbf{s} - ||\mathbf{s}||^2) \right) $$

*   **Log-Likelihood Ratio:**
    $$ \ln \Lambda(\mathbf{y}) = \frac{1}{2\sigma^2} (2\mathbf{y}^T\mathbf{s} - ||\mathbf{s}||^2) $$

*   **LRT Decision Rule:**
    Decide $H_1$ if $\ln \Lambda(\mathbf{y}) > \ln \eta$.
    $$ \frac{1}{2\sigma^2} (2\mathbf{y}^T\mathbf{s} - ||\mathbf{s}||^2) > \ln \eta $$
    $$ 2\mathbf{y}^T\mathbf{s} - ||\mathbf{s}||^2 > 2\sigma^2 \ln \eta $$
    $$ \mathbf{y}^T\mathbf{s} > \frac{1}{2} ||\mathbf{s}||^2 + \sigma^2 \ln \eta $$
    Let $\eta' = \frac{1}{2} ||\mathbf{s}||^2 + \sigma^2 \ln \eta$. This is a new threshold.
    The term $\mathbf{y}^T\mathbf{s}$ is the output of a correlator or matched filter.

    **Decision Rule:** Decide $H_1$ if $\mathbf{y}^T\mathbf{s} > \eta'$.

**Example for Gaussian Noise:**
Suppose $\mathbf{y} = [y_1, y_2]^T$ and $\mathbf{s} = [s_1, s_2]^T$. The noise variance is $\sigma^2$.
Under $H_0$: $\mathbf{y} \sim N(\mathbf{0}, \sigma^2 \mathbf{I})$
Under $H_1$: $\mathbf{y} \sim N(\mathbf{s}, \sigma^2 \mathbf{I})$

The decision statistic is $z = \mathbf{y}^T\mathbf{s} = y_1 s_1 + y_2 s_2$.
*   Under $H_0$: $z = \mathbf{w}^T\mathbf{s}$. Since $\mathbf{w} \sim N(\mathbf{0}, \sigma^2 \mathbf{I})$, $z$ is a linear combination of Gaussian random variables, so it's Gaussian.
    $E[z | H_0] = E[\mathbf{w}^T\mathbf{s} | H_0] = E[\mathbf{w}^T\mathbf{s}] = E[\sum w_i s_i] = \sum E[w_i] s_i = 0$.
    $Var[z | H_0] = Var[\mathbf{w}^T\mathbf{s}] = Var[\sum w_i s_i] = \sum s_i^2 Var[w_i]$ (since $w_i$ are independent) $= \sum s_i^2 \sigma^2 = \sigma^2 \sum s_i^2 = \sigma^2 ||\mathbf{s}||^2$.
    So, $z | H_0 \sim N(0, \sigma^2 ||\mathbf{s}||^2)$.

*   Under $H_1$: $z = (\mathbf{s} + \mathbf{w})^T\mathbf{s} = \mathbf{s}^T\mathbf{s} + \mathbf{w}^T\mathbf{s} = ||\mathbf{s}||^2 + \mathbf{w}^T\mathbf{s}$.
    $E[z | H_1] = ||\mathbf{s}||^2 + E[\mathbf{w}^T\mathbf{s}] = ||\mathbf{s}||^2$.
    $Var[z | H_1] = Var[\mathbf{w}^T\mathbf{s}] = \sigma^2 ||\mathbf{s}||^2$.
    So, $z | H_1 \sim N(||\mathbf{s}||^2, \sigma^2 ||\mathbf{s}||^2)$.

The decision statistic $z = \mathbf{y}^T\mathbf{s}$ is a single value. The threshold $\eta'$ is chosen to achieve the desired PFA.

**Bayes Detector:** If $P(H_0)$ and $P(H_1)$ are known, the threshold is $\eta'_{Bayes} = \frac{1}{2} ||\mathbf{s}||^2 + \sigma^2 \ln \left( \frac{P(H_0)}{P(H_1)} \right)$.
**NP Detector:** If a PFA of $\alpha$ is desired, $\eta'_{NP}$ is chosen such that $P(z > \eta'_{NP} | H_0) = \alpha$.
For a Gaussian distribution $X \sim N(\mu, \sigma^2)$, $P(X > x) = Q\left(\frac{x - \mu}{\sigma}\right)$, where $Q(u) = \frac{1}{\sqrt{2\pi}} \int_u^\infty e^{-t^2/2} dt$.
So, $P(z > \eta'_{NP} | H_0) = Q\left(\frac{\eta'_{NP} - 0}{\sqrt{\sigma^2 ||\mathbf{s}||^2}}\right) = Q\left(\frac{\eta'_{NP}}{\sigma ||\mathbf{s}||}\right) = \alpha$.
This allows us to find $\eta'_{NP}$.

---

**Scenario 2: Simple Binary Signal in AWGN (1-bit observation)**

Suppose we transmit a single bit.
$H_0$: transmit 0 (or absence of signal)
$H_1$: transmit 1 (or presence of signal, normalized to amplitude 1)

We observe a single sample $y$.
Noise $w \sim N(0, \sigma^2)$.

*   $H_0$: $y = w$. So $y | H_0 \sim N(0, \sigma^2)$.
*   $H_1$: $y = 1 + w$. So $y | H_1 \sim N(1, \sigma^2)$.

*   **Likelihood Ratio:**
    $$ \Lambda(y) = \frac{p(y | H_1)}{p(y | H_0)} = \frac{\frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(y-1)^2}{2\sigma^2}\right)}{\frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{y^2}{2\sigma^2}\right)} = \exp\left(\frac{1}{2\sigma^2} (y^2 - (y-1)^2)\right) $$
    $$ y^2 - (y-1)^2 = y^2 - (y^2 - 2y + 1) = 2y - 1 $$
    $$ \Lambda(y) = \exp\left(\frac{2y-1}{2\sigma^2}\right) $$

*   **LRT Decision Rule:** Decide $H_1$ if $\Lambda(y) > \eta$.
    $$ \exp\left(\frac{2y-1}{2\sigma^2}\right) > \eta $$
    $$ \frac{2y-1}{2\sigma^2} > \ln \eta $$
    $$ 2y - 1 > 2\sigma^2 \ln \eta $$
    $$ 2y > 1 + 2\sigma^2 \ln \eta $$
    $$ y > \frac{1}{2} + \sigma^2 \ln \eta $$
    Let $\eta' = \frac{1}{2} + \sigma^2 \ln \eta$.
    **Decision Rule:** Decide $H_1$ if $y > \eta'$.

**Bayes Detector:** $\eta'_{Bayes} = \frac{1}{2} + \sigma^2 \ln \left(\frac{P(H_0)}{P(H_1)}\right)$.
**NP Detector:** Choose $\eta'_{NP}$ such that $P(y > \eta'_{NP} | H_0) = \alpha$.
$y | H_0 \sim N(0, \sigma^2)$.
$P(y > \eta'_{NP} | H_0) = Q\left(\frac{\eta'_{NP} - 0}{\sigma}\right) = Q\left(\frac{\eta'_{NP}}{\sigma}\right) = \alpha$.
So, $\frac{\eta'_{NP}}{\sigma} = Q^{-1}(\alpha)$, which gives $\eta'_{NP} = \sigma Q^{-1}(\alpha)$.

The threshold is $\eta'_{NP}$. The decision is:
Decide $H_1$ if $y > \sigma Q^{-1}(\alpha)$.

---

## 3.4 The General Multiple Hypothesis Testing Problem

This section extends the concepts to situations where there are more than two hypotheses.

**Learning Outcomes Covered:**
*   **CO3: Illustrate the fundamentals of statistical detection principles used in various engineering problems.** (K2)
*   **CO4: Apply various types of statistical decision rules in engineering applications.** (K3)

**Key Concepts:**
*   **Generalized Likelihood Ratio Test (GLRT):** A generalization of the LRT for multiple hypotheses.
*   **Bayes Decision Rule for Multiple Hypotheses:** Minimizes the overall probability of error by considering pairwise comparisons.
*   **Minimum Probability of Error (MPE) Detector:** Similar to the binary case, minimizes the total error.

**Textbook References:**
*   Kay, S.M. (2010). *Fundamentals of Statistical Signal Processing, Vol II: Detection Theory.* Chapter 2.

### 3.4.1 Multiple Hypotheses

We have $M+1$ hypotheses: $H_0, H_1, \dots, H_M$.
The observations are $\mathbf{y}$.
The probability distributions are $p(\mathbf{y} | H_k)$ for $k = 0, 1, \dots, M$.
Prior probabilities $P(H_k)$ for $k = 0, 1, \dots, M$, such that $\sum_{k=0}^M P(H_k) = 1$.

### 3.4.2 Bayes Decision Rule for Multiple Hypotheses

The goal is to minimize the average probability of error:
$$ P_e = \sum_{k=0}^M P(\text{Decide } H_j | H_k) P(H_k) \quad \text{where } j \neq k $$

**Pairwise Bayes Decision Rule:**
For a given observation $\mathbf{y}$, decide $H_j$ if it is more likely than any other hypothesis $H_k$, considering prior probabilities and costs.
A common approach is to compare each hypothesis $H_k$ against $H_0$.

**Hypothesis $H_k$ vs. $H_0$ (for $k=1, \dots, M$):**
We can form $M$ binary hypothesis tests: $H_k$ vs. $H_0$.
The likelihood ratio is $\Lambda_k(\mathbf{y}) = \frac{p(\mathbf{y} | H_k)}{p(\mathbf{y} | H_0)}$.

The Bayes decision rule for $H_k$ versus $H_0$ is:
*   Decide $H_k$ if $\Lambda_k(\mathbf{y}) > \frac{P(H_0)}{P(H_k)}$.
*   Decide $H_0$ if $\Lambda_k(\mathbf{y}) < \frac{P(H_0)}{P(H_k)}$.

**General Bayes Decision Rule:**
To minimize the overall probability of error, we assign $\mathbf{y}$ to the hypothesis $H_k$ that minimizes the "risk" or expected cost. If all costs are equal (i.e., minimizing probability of error), we choose the hypothesis $H_k$ that maximizes the posterior probability $p(H_k | \mathbf{y})$.

Using Bayes' theorem:
$$ p(H_k | \mathbf{y}) = \frac{p(\mathbf{y} | H_k) P(H_k)}{p(\mathbf{y})} $$
where $p(\mathbf{y}) = \sum_{i=0}^M p(\mathbf{y} | H_i) P(H_i)$ is the marginal probability of $\mathbf{y}$.

**Decision Rule:** Decide $H_k$ if $p(\mathbf{y} | H_k) P(H_k) \ge p(\mathbf{y} | H_j) P(H_j)$ for all $j \neq k$.
This is equivalent to: Decide $H_k$ if $\ln p(\mathbf{y} | H_k) + \ln P(H_k) \ge \ln p(\mathbf{y} | H_j) + \ln P(H_j)$ for all $j \neq k$.

This rule is known as the **Maximum A Posteriori (MAP)** decision rule. When prior probabilities are equal ($P(H_k) = \frac{1}{M+1}$ for all $k$), the MAP rule becomes the **Maximum Likelihood (ML)** decision rule:
Decide $H_k$ if $p(\mathbf{y} | H_k) \ge p(\mathbf{y} | H_j)$ for all $j \neq k$.

### 3.4.3 Generalized Likelihood Ratio Test (GLRT)

The GLRT is used when parameters are unknown under the hypotheses. However, in the context of simply choosing between hypotheses with known probability distributions, the MAP/ML rules are the primary ones. The term GLRT is more commonly associated with composite hypothesis testing where parameters are unknown.

### 3.4.4 Performance Measures for Multiple Hypotheses

*   **Probability of Detection for Hypothesis $k$ ($P_k$):** $P(\text{Decide } H_k | H_k)$
*   **Probability of False Alarm for Hypothesis $k$ ($PFA_k$):** $P(\text{Decide } H_k | H_j)$ for $j \neq k$.
    *   This is often broken down into "confusion probabilities": $P(\text{Decide } H_k | H_j)$.
*   **Probability of Error:** $P_e = 1 - \sum_{k=0}^M P(\text{Decide } H_k | H_k)$ if the decisions are mutually exclusive (i.e., we choose exactly one hypothesis).

---

## 3.5 Applications of Statistical Detection Theory

The principles discussed are fundamental to numerous engineering fields.

**Learning Outcomes Covered:**
*   **CO3: Illustrate the fundamentals of statistical detection principles used in various engineering problems.** (K2)

**Key Areas of Application:**
*   **Radar:** Detecting the presence of a target by analyzing reflected electromagnetic waves.
    *   $H_0$: No target, only background clutter and noise.
    *   $H_1$: Target present, contributing to the received signal.
    *   The NP test is often used to maximize detection probability for a given false alarm rate.
*   **Sonar:** Detecting submarines or other underwater objects using sound waves.
    *   Similar principles to radar, but with different propagation characteristics and noise sources.
*   **Communication Systems:**
    *   **Digital Communications:** Detecting transmitted bits (e.g., 0 or 1) at the receiver in the presence of noise. This is directly related to the binary hypothesis testing examples.
    *   **Channel Estimation:** Detecting the characteristics of a communication channel.
*   **Medical Imaging:**
    *   **MRI, CT Scans:** Detecting anomalies or specific tissues based on imaging data.
    *   Distinguishing between healthy and diseased tissue.
*   **Pattern Recognition and Machine Learning:**
    *   **Image Classification:** Deciding which class an image belongs to.
    *   **Speech Recognition:** Identifying spoken words.
    *   **Fault Detection:** Identifying faulty components in a system based on sensor data.
*   **Biometrics:** Recognizing individuals based on fingerprints, facial features, etc.
*   **Seismic Signal Processing:** Detecting earthquakes or specific geological formations.

**Example: Radar Target Detection**
A radar system emits a pulse and listens for echoes.
*   **Observation:** The received signal over a specific time interval.
*   **Hypothesis $H_0$:** Only background noise and clutter are present.
*   **Hypothesis $H_1$:** A target is present, and its echo is superimposed on the noise and clutter.
The radar operator (or computer system) must decide whether an echo is from a target or just random noise. The decision rule will be based on the amplitude of the received signal, comparing it to a threshold determined by the desired trade-off between detecting targets (PD) and falsely identifying noise as a target (PFA).

**Example: Medical Diagnosis**
Consider a diagnostic test for a disease.
*   **Observation:** The result of the medical test (e.g., blood test value).
*   **Hypothesis $H_0$:** The patient is healthy.
*   **Hypothesis $H_1$:** The patient has the disease.
The test's sensitivity (PD) and specificity (PTN, related to PFA) are critical. A doctor needs to decide whether the test result indicates the presence of the disease. The choice of threshold for the test result will depend on the relative costs of a false positive (unnecessary treatment or anxiety) versus a false negative (missed diagnosis).

---

## Practice Questions and Answers

**Question 1:**
A communication system transmits a binary signal. Under $H_0$, the received signal is $y = w$, where $w \sim N(0, 1)$. Under $H_1$, the received signal is $y = 2 + w$.
(a) Derive the LRT for this problem.
(b) What is the decision rule for the Minimum Probability of Error (MPE) detector if $P(H_0) = 0.6$ and $P(H_1) = 0.4$?
(c) What is the decision rule for the Neyman-Pearson (NP) detector if we require a Probability of False Alarm (PFA) of $0.01$?

**Answer 1:**
The observation is a single sample $y$.
$H_0: y \sim N(0, 1)$
$H_1: y \sim N(2, 1)$

**Likelihood Ratio:**
$$ \Lambda(y) = \frac{p(y | H_1)}{p(y | H_0)} = \frac{\frac{1}{\sqrt{2\pi}} \exp\left(-\frac{(y-2)^2}{2}\right)}{\frac{1}{\sqrt{2\pi}} \exp\left(-\frac{y^2}{2}\right)} = \exp\left(\frac{1}{2} (y^2 - (y-2)^2)\right) $$
$$ y^2 - (y-2)^2 = y^2 - (y^2 - 4y + 4) = 4y - 4 $$
$$ \Lambda(y) = \exp\left(\frac{4y - 4}{2}\right) = \exp(2y - 2) $$

**Log-Likelihood Ratio:**
$$ \ln \Lambda(y) = 2y - 2 $$

**(a) LRT Decision Rule:**
Decide $H_1$ if $\Lambda(y) > \eta$, or equivalently, $2y - 2 > \ln \eta$.
$2y > 2 + \ln \eta$
$y > 1 + \frac{1}{2} \ln \eta$. Let $\eta' = 1 + \frac{1}{2} \ln \eta$.
**Decision Rule:** Decide $H_1$ if $y > \eta'$.

**(b) MPE Detector:**
The threshold is $\eta'_{Bayes} = \frac{1}{2} \ln \left(\frac{P(H_0)}{P(H_1)}\right) + E[\text{statistic} | H_1] - E[\text{statistic} | H_0]$. This form is not directly applicable here. Let's use the ratio of likelihoods.
We decided $H_1$ if $\Lambda(y) > \frac{P(H_0)}{P(H_1)}$.
$\frac{P(H_0)}{P(H_1)} = \frac{0.6}{0.4} = 1.5$.
Decide $H_1$ if $\exp(2y - 2) > 1.5$.
$2y - 2 > \ln(1.5)$
$2y > 2 + \ln(1.5)$
$y > 1 + \frac{1}{2} \ln(1.5)$
$y > 1 + \frac{1}{2} (0.405) = 1 + 0.2025 = 1.2025$.
**MPE Decision Rule:** Decide $H_1$ if $y > 1.2025$.

**(c) NP Detector:**
We need to find $\eta'_{NP}$ such that $P(y > \eta'_{NP} | H_0) = \alpha = 0.01$.
$y | H_0 \sim N(0, 1)$.
$P(y > \eta'_{NP} | H_0) = Q\left(\frac{\eta'_{NP} - 0}{1}\right) = Q(\eta'_{NP})$.
We need $Q(\eta'_{NP}) = 0.01$.
From Q-tables or calculator, $Q^{-1}(0.01) \approx 2.326$.
So, $\eta'_{NP} = 2.326$.
**NP Decision Rule:** Decide $H_1$ if $y > 2.326$.

---

**Question 2:**
Consider a system with three hypotheses $H_0$, $H_1$, and $H_2$. The observations are independent samples $y_1, y_2$. Assume the following probability densities:
*   $p(\mathbf{y}|H_0) = \frac{1}{4}$ for $0 \le y_1 \le 2, 0 \le y_2 \le 2$ (uniform distribution over a square)
*   $p(\mathbf{y}|H_1) = \frac{1}{2}$ for $0 \le y_1 \le 1, 0 \le y_2 \le 2$ (uniform distribution over a rectangle)
*   $p(\mathbf{y}|H_2) = \frac{1}{2}$ for $0 \le y_1 \le 2, 0 \le y_2 \le 1$ (uniform distribution over another rectangle)

Assume equal prior probabilities: $P(H_0) = P(H_1) = P(H_2) = 1/3$.
Describe the decision rule for the Maximum Likelihood (ML) detector.

**Answer 2:**
The ML detector chooses the hypothesis that maximizes the likelihood function, $p(\mathbf{y}|H_k)$.
Since the prior probabilities are equal, the MAP detector is the same as the ML detector.

We need to compare $p(\mathbf{y}|H_0)$, $p(\mathbf{y}|H_1)$, and $p(\mathbf{y}|H_2)$ for a given observation $\mathbf{y} = [y_1, y_2]^T$.

*   **Region 1 ($H_0$ domain):** $0 \le y_1 \le 2$ and $0 \le y_2 \le 2$.
    *   If $\mathbf{y}$ is in this region:
        *   $p(\mathbf{y}|H_0) = 1/4$
        *   $p(\mathbf{y}|H_1)$:
            *   If $0 \le y_1 \le 1$ and $0 \le y_2 \le 2$, then $p(\mathbf{y}|H_1) = 1/2$.
            *   Otherwise (if $1 < y_1 \le 2$), $p(\mathbf{y}|H_1) = 0$.
        *   $p(\mathbf{y}|H_2)$:
            *   If $0 \le y_1 \le 2$ and $0 \le y_2 \le 1$, then $p(\mathbf{y}|H_2) = 1/2$.
            *   Otherwise (if $1 < y_2 \le 2$), $p(\mathbf{y}|H_2) = 0$.

*   **Decision Rule based on Region:**
    1.  **If $1 < y_1 \le 2$ AND $1 < y_2 \le 2$:**
        *   $\mathbf{y}$ is not in the domain of $H_1$ or $H_2$.
        *   $p(\mathbf{y}|H_0) = 1/4$, $p(\mathbf{y}|H_1) = 0$, $p(\mathbf{y}|H_2) = 0$.
        *   **Decision:** $H_0$ (since $1/4 > 0$).

    2.  **If $0 \le y_1 \le 1$ AND $1 < y_2 \le 2$:**
        *   $\mathbf{y}$ is in $H_0$ domain, but not $H_1$ or $H_2$ domains.
        *   $p(\mathbf{y}|H_0) = 1/4$, $p(\mathbf{y}|H_1) = 1/2$, $p(\mathbf{y}|H_2) = 0$.
        *   **Decision:** $H_1$ (since $1/2 > 1/4 > 0$).

    3.  **If $1 < y_1 \le 2$ AND $0 \le y_2 \le 1$:**
        *   $\mathbf{y}$ is in $H_0$ domain, but not $H_1$ or $H_2$ domains.
        *   $p(\mathbf{y}|H_0) = 1/4$, $p(\mathbf{y}|H_1) = 0$, $p(\mathbf{y}|H_2) = 1/2$.
        *   **Decision:** $H_2$ (since $1/2 > 1/4 > 0$).

    4.  **If $0 \le y_1 \le 1$ AND $0 \le y_2 \le 1$:**
        *   $\mathbf{y}$ is in all three domains.
        *   $p(\mathbf{y}|H_0) = 1/4$, $p(\mathbf{y}|H_1) = 1/2$, $p(\mathbf{y}|H_2) = 1/2$.
        *   **Decision:** $H_1$ or $H_2$ (tie between the two highest likelihoods). The rule here would be to pick one, e.g., $H_1$.

**Summary of ML Decision Rule:**
*   If $1 < y_1 \le 2$ and $1 < y_2 \le 2$, decide $H_0$.
*   If $0 \le y_1 \le 1$ and $1 < y_2 \le 2$, decide $H_1$.
*   If $1 < y_1 \le 2$ and $0 \le y_2 \le 1$, decide $H_2$.
*   If $0 \le y_1 \le 1$ and $0 \le y_2 \le 1$, decide $H_1$ (or $H_2$, tie-breaking).

---

## Important Points to Remember

*   **Detection vs. Estimation:** Detection is about deciding which hypothesis is true; Estimation is about determining the value of an unknown parameter.
*   **LRT is Key:** The Likelihood Ratio Test is the foundation for optimal detection in many scenarios.
*   **Performance Metrics:** Understand PD, PFA, and PM, and how they relate.
*   **Bayes vs. NP:** Bayes minimizes overall error (needs priors); NP maximizes PD for a given PFA (independent of priors).
*   **ROC Curve:** Visualizes the trade-off between PD and PFA.
*   **Multiple Hypotheses:** Extend binary concepts using MAP or ML rules, often by comparing likelihoods or posterior probabilities.
*   **Applications:** Detection is ubiquitous in signal processing and engineering.

---
This concludes Module 3: Statistical Detection Theory I. We have covered the basic binary and multiple hypothesis testing problems, the key decision rules (LRT, Bayes, NP, MAP, ML), and important performance metrics, as well as common applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
