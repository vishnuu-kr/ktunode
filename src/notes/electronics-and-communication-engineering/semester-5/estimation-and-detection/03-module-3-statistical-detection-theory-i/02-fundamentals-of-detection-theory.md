---
title: "Fundamentals of detection theory"
subject: "ESTIMATION AND DETECTION"
module: "Module 3: Statistical Detection Theory I"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780febd5"
status: "completed"
scrapedAt: "2026-05-23T17:56:49.539Z"
---
# Module 3: Statistical Detection Theory I - Fundamentals of Detection Theory

## 1. Introduction to Detection Theory

Detection theory deals with the problem of deciding, based on noisy observations, whether a specific signal is present or absent. This is a fundamental problem in many engineering disciplines, including communications, radar, sonar, image processing, and medical diagnostics.

**Key Concept:** The core of detection theory is making an optimal decision under uncertainty.

**Learning Outcome Addressed:**
*   **LO1:** Understand the fundamental problem of signal detection.
*   **CO3:** Illustrate the fundamentals of statistical detection principles used in various engineering problems. (K2)

**Textbook Reference:**
*   **Kay, Vol II, Chapter 1: Introduction**

### 1.1 The Basic Detection Problem

We observe a random variable (or a set of random variables) $Y$ and we want to decide whether a certain hypothesis $H_1$ (signal present) is true or whether another hypothesis $H_0$ (signal absent) is true.

**Hypotheses:**
*   $H_0$: Signal is absent. The observation $Y$ follows a probability distribution $p(y | H_0)$.
*   $H_1$: Signal is present. The observation $Y$ follows a probability distribution $p(y | H_1)$.

**Objective:** To formulate a rule (a detector) that, given the observation $Y$, makes the best possible decision between $H_0$ and $H_1$.

**Examples:**
*   **Radar:** Is there an aircraft (H1) or is it just noise (H0)? The observation is the received signal at the radar receiver.
*   **Communication:** Is the transmitted bit a '1' (H1) or a '0' (H0)? The observation is the received signal after it has passed through a noisy channel.
*   **Medical Diagnosis:** Does the patient have a disease (H1) or not (H0)? The observation could be a medical image or test result.

### 1.2 Components of a Detection System

1.  **Signal Model:** A mathematical description of the signal and its absence.
2.  **Noise Model:** A description of the random disturbances affecting the observation.
3.  **Observation:** The measured data, which is a function of the signal (if present) and noise.
4.  **Decision Rule:** A criterion used to choose between the hypotheses based on the observation.

**Important Point:** The accuracy of our decision is fundamentally limited by the signal-to-noise ratio (SNR) and the characteristics of the noise.

## 2. Hypothesis Testing Framework

Hypothesis testing provides a mathematical framework for making these decisions.

**Learning Outcome Addressed:**
*   **LO1:** Understand the fundamental problem of signal detection.
*   **CO3:** Illustrate the fundamentals of statistical detection principles used in various engineering problems. (K2)

**Textbook Reference:**
*   **Kay, Vol II, Chapter 1: Introduction**
*   **Van Trees, Vol I, Chapter 2: Fundamentals of Hypothesis Testing**

### 2.1 Simple vs. Composite Hypotheses

*   **Simple Hypothesis:** Each hypothesis completely specifies the probability distribution of the observation.
    *   Example: $H_0: Y \sim N(0, \sigma^2)$ and $H_1: Y \sim N(\mu, \sigma^2)$, where $\mu$ and $\sigma^2$ are known.
*   **Composite Hypothesis:** At least one hypothesis does not completely specify the probability distribution. This usually involves unknown parameters.
    *   Example: $H_0: Y \sim N(0, \sigma^2)$ and $H_1: Y \sim N(\mu, \sigma^2)$, where $\sigma^2$ is known but $\mu$ is unknown (or $\mu$ is known, but $\sigma^2$ is unknown, or both are unknown).

**Focus of this module (and much of detection theory) is often on simple hypotheses first, as it lays the groundwork for composite cases.**

### 2.2 Probability Distributions and Likelihood Function

Given the observation $Y$, we need to compare the likelihood of observing $Y$ under each hypothesis.

*   **Probability Density Function (PDF) / Probability Mass Function (PMF):**
    *   $p(y | H_0)$: The probability (density) of observing $y$ if $H_0$ is true.
    *   $p(y | H_1)$: The probability (density) of observing $y$ if $H_1$ is true.
*   **Likelihood Function:** The function of the unknown parameter(s) given the observed data. In hypothesis testing, the data is fixed, so we look at the probability of the *data* given the *hypotheses*.
    *   $L(H_0) = p(y | H_0)$
    *   $L(H_1) = p(y | H_1)$

**Example:**
Suppose we observe a single data point $Y$.
*   $H_0: Y \sim N(0, 1)$ (mean 0, variance 1)
*   $H_1: Y \sim N(2, 1)$ (mean 2, variance 1)

If we observe $Y = 1.5$:
*   $p(1.5 | H_0) = \frac{1}{\sqrt{2\pi}} e^{-\frac{(1.5-0)^2}{2}} = \frac{1}{\sqrt{2\pi}} e^{-1.125}$
*   $p(1.5 | H_1) = \frac{1}{\sqrt{2\pi}} e^{-\frac{(1.5-2)^2}{2}} = \frac{1}{\sqrt{2\pi}} e^{-\frac{(-0.5)^2}{2}} = \frac{1}{\sqrt{2\pi}} e^{-0.125}$

Since $p(1.5 | H_1) > p(1.5 | H_0)$, it is more likely that $H_1$ is true.

## 3. Decision Rules and Performance Measures

To make a decision, we need a rule and a way to measure how good that rule is.

**Learning Outcome Addressed:**
*   **LO1:** Understand the fundamental problem of detection.
*   **LO2:** Apply basic decision rules (implicitly, as part of detection).
*   **CO3:** Illustrate the fundamentals of statistical detection principles. (K2)
*   **CO4:** Apply statistical decision rules (as used in detection). (K3)

**Textbook Reference:**
*   **Kay, Vol II, Chapter 1: Introduction**
*   **Van Trees, Vol I, Chapter 2: Fundamentals of Hypothesis Testing**

### 3.1 Types of Errors

When making a decision under uncertainty, errors are inevitable.

*   **Type I Error (False Alarm):** Deciding $H_1$ is true when $H_0$ is actually true.
    *   Probability of Type I error: $P(\text{Decide } H_1 | H_0) = \alpha$ (often called the significance level or false alarm rate).
*   **Type II Error (Missed Detection):** Deciding $H_0$ is true when $H_1$ is actually true.
    *   Probability of Type II error: $P(\text{Decide } H_0 | H_1) = \beta$ (often called the miss probability).

**Relationship:** There is a trade-off between $\alpha$ and $\beta$. Reducing $\alpha$ typically increases $\beta$, and vice-versa.

### 3.2 Decision Criteria

Various criteria can be used to set the decision rule, balancing the likelihoods and the costs of errors.

#### 3.2.1 Likelihood Ratio Test (LRT)

The most fundamental decision rule for simple hypotheses is based on the likelihood ratio.

*   **Likelihood Ratio (LR):**
    $$ \Lambda(Y) = \frac{p(Y | H_1)}{p(Y | H_0)} $$
*   **Decision Rule:**
    *   Decide $H_1$ if $\Lambda(Y) > \gamma$
    *   Decide $H_0$ if $\Lambda(Y) < \gamma$
    *   If $\Lambda(Y) = \gamma$, the decision can be made randomly or by favoring one hypothesis.

The threshold $\gamma$ is chosen to meet a desired performance criterion (e.g., a specific false alarm rate $\alpha$).

**Example (Continuing from above):**
$H_0: Y \sim N(0, 1)$, $H_1: Y \sim N(2, 1)$
$$ \Lambda(Y) = \frac{\frac{1}{\sqrt{2\pi}} e^{-\frac{(Y-2)^2}{2}}}{\frac{1}{\sqrt{2\pi}} e^{-\frac{Y^2}{2}}} = e^{-\frac{(Y-2)^2}{2} + \frac{Y^2}{2}} = e^{-\frac{Y^2 - 4Y + 4 - Y^2}{2}} = e^{\frac{4Y-4}{2}} = e^{2Y-2} $$
*   Decide $H_1$ if $e^{2Y-2} > \gamma$
*   Take the natural logarithm of both sides: $2Y-2 > \ln(\gamma)$
*   $2Y > \ln(\gamma) + 2$
*   $Y > \frac{\ln(\gamma) + 2}{2}$

This shows that the LRT is equivalent to a threshold on the observation $Y$ itself in this specific case (because the PDFs belong to the same exponential family and differ only in location). The threshold is determined by $\gamma$.

#### 3.2.2 Neyman-Pearson Lemma

The Neyman-Pearson lemma states that for a fixed probability of Type I error ($\alpha$), the most powerful test (i.e., the test with the maximum probability of correct detection, or minimum probability of Type II error, $\beta$) is the Likelihood Ratio Test.

*   **Most Powerful (MP) Test:** The test that maximizes $P(\text{Decide } H_1 | H_1) = 1 - \beta$ for a given $P(\text{Decide } H_1 | H_0) = \alpha$.

**Important Point:** The LRT is the optimal test in the sense of Neyman-Pearson for simple hypotheses.

#### 3.2.3 Bayes' Test (Minimum Probability of Error)

If we consider the costs associated with different types of decisions, we can formulate a cost function and minimize the expected cost.

*   **Prior Probabilities:**
    *   $P(H_0)$: Probability that $H_0$ is true before observing $Y$.
    *   $P(H_1)$: Probability that $H_1$ is true before observing $Y$.
    *   $P(H_0) + P(H_1) = 1$.
*   **Cost Function:**
    *   $C_{ij}$: Cost of deciding $H_i$ when $H_j$ is true.
        *   $C_{00}$: Cost of deciding $H_0$ when $H_0$ is true (usually 0).
        *   $C_{11}$: Cost of deciding $H_1$ when $H_1$ is true (usually 0).
        *   $C_{10}$: Cost of deciding $H_1$ when $H_0$ is true (Type I error).
        *   $C_{01}$: Cost of deciding $H_0$ when $H_1$ is true (Type II error).

*   **Bayes Risk (Total Cost):**
    $$ R_B = P(\text{Decide } H_1 | H_0) P(H_0) C_{10} + P(\text{Decide } H_0 | H_1) P(H_1) C_{01} $$
    To minimize $R_B$, we aim to minimize the expected cost for each possible observation $Y$.

*   **Bayes' Decision Rule:**
    Decide $H_1$ if $P(H_1|Y) (C_{11} - C_{01}) > P(H_0|Y) (C_{00} - C_{10})$.
    Using Bayes' Theorem: $P(H_i|Y) = \frac{p(Y|H_i)P(H_i)}{p(Y)}$, where $p(Y) = p(Y|H_0)P(H_0) + p(Y|H_1)P(H_1)$.

    The rule simplifies to:
    Decide $H_1$ if $\frac{p(Y | H_1)}{p(Y | H_0)} > \frac{P(H_0) C_{10}}{P(H_1) C_{01}}$.

    This is again a Likelihood Ratio Test, but the threshold $\gamma = \frac{P(H_0) C_{10}}{P(H_1) C_{01}}$ is determined by the prior probabilities and the costs.

**Special Case: Minimum Probability of Error ($\alpha=\beta$ is not guaranteed)**
If all costs are equal except $C_{10} > 0$ and $C_{01} > 0$, and we want to minimize the probability of error $P_e = P(\text{Decide } H_1 | H_0) P(H_0) + P(\text{Decide } H_0 | H_1) P(H_1)$, then we can set $C_{10} = C_{01} = 1$ and $C_{00} = C_{11} = 0$.
The Bayes' test becomes:
Decide $H_1$ if $\frac{p(Y | H_1)}{p(Y | H_0)} > \frac{P(H_0)}{P(H_1)}$.
This is called the **Maximum A Posteriori (MAP)** test.

**Example:**
Consider the previous Gaussian case with equal prior probabilities $P(H_0) = P(H_1) = 0.5$.
$H_0: Y \sim N(0, 1)$, $H_1: Y \sim N(2, 1)$
The MAP threshold is $\frac{P(H_0)}{P(H_1)} = \frac{0.5}{0.5} = 1$.
From the LRT, we had $Y > \frac{\ln(\gamma) + 2}{2}$.
For MAP, $\gamma = 1$, so $Y > \frac{\ln(1) + 2}{2} = \frac{0+2}{2} = 1$.
So, if $Y > 1$, decide $H_1$.

**Important Point:** If prior probabilities are equal ($P(H_0) = P(H_1) = 0.5$) and costs are equal for both types of errors, then the MAP test is equivalent to maximizing the posterior probability $P(H_i|Y)$. This is also equivalent to comparing $p(Y|H_1)$ and $p(Y|H_0)$ directly without priors if they are equally likely.

### 3.3 Performance Measures: ROC Curve

For a given detection problem (e.g., simple hypotheses), we can adjust the threshold $\gamma$ of the LRT. This changes the false alarm rate ($\alpha$) and the probability of correct detection ($P_d = 1-\beta$).

*   **Receiver Operating Characteristic (ROC) Curve:** A plot of $P_d$ (Probability of Detection, also called Probability of True Positive) vs. $\alpha$ (Probability of False Alarm, also called Probability of False Positive) as the decision threshold $\gamma$ is varied.

**Key characteristics of an ROC curve:**
*   It starts at (0,0) (when $\gamma \to \infty$, we always decide $H_0$).
*   It ends at (1,1) (when $\gamma \to 0$, we always decide $H_1$).
*   The curve is monotonically increasing.
*   A test is considered "better" if its ROC curve is closer to the upper left corner.
*   The area under the ROC curve (AUC) is a common measure of the overall performance of a classifier/detector. An AUC of 1 is perfect, and 0.5 is random guessing.

**Example (Continuing Gaussian case):**
$H_0: Y \sim N(0, 1)$, $H_1: Y \sim N(2, 1)$. LRT decision: $Y > \frac{\ln(\gamma) + 2}{2}$. Let the threshold be $t = \frac{\ln(\gamma) + 2}{2}$.

*   **False Alarm Rate ($\alpha$):**
    $$ \alpha = P(Y > t | H_0) = P\left(\frac{Y-0}{1} > \frac{t-0}{1} | H_0\right) = P(Z > t) = 1 - \Phi(t) $$
    where $Z \sim N(0,1)$ and $\Phi(\cdot)$ is the CDF of the standard normal distribution.
    From this, we can express $t$ in terms of $\alpha$: $t = \Phi^{-1}(1-\alpha)$.

*   **Probability of Detection ($P_d$):**
    $$ P_d = P(Y > t | H_1) = P\left(\frac{Y-2}{1} > \frac{t-2}{1} | H_1\right) = P(Z > t-2) = 1 - \Phi(t-2) $$
    Substitute $t = \Phi^{-1}(1-\alpha)$:
    $$ P_d = 1 - \Phi(\Phi^{-1}(1-\alpha) - 2) $$
    This equation describes the ROC curve for this specific problem.

**Important Point:** The ROC curve visually represents the trade-off between false alarms and missed detections for a given detector.

## 4. Practice Questions and Answers

**Question 1 (CO3, K2):**
Define the terms "False Alarm" and "Missed Detection" in the context of hypothesis testing.

**Answer 1:**
*   **False Alarm:** A Type I error. It is the event where we decide that the signal is present ($H_1$) when, in reality, the signal is absent ($H_0$).
*   **Missed Detection:** A Type II error. It is the event where we decide that the signal is absent ($H_0$) when, in reality, the signal is present ($H_1$).

**Question 2 (CO4, K3):**
Consider the following simple hypothesis testing problem:
$H_0: Y \sim N(0, 1)$
$H_1: Y \sim N(1, 1)$
where $Y$ is a single observed data point.

a) Derive the Likelihood Ratio $\Lambda(Y)$.
b) Determine the decision rule based on the Likelihood Ratio Test.
c) If the threshold $\gamma$ is set such that $\Lambda(Y) > 2$, what is the decision rule in terms of $Y$?

**Answer 2:**
a) The probability density functions are:
$p(y | H_0) = \frac{1}{\sqrt{2\pi}} e^{-\frac{y^2}{2}}$
$p(y | H_1) = \frac{1}{\sqrt{2\pi}} e^{-\frac{(y-1)^2}{2}}$

The Likelihood Ratio is:
$$ \Lambda(Y) = \frac{p(Y | H_1)}{p(Y | H_0)} = \frac{\frac{1}{\sqrt{2\pi}} e^{-\frac{(Y-1)^2}{2}}}{\frac{1}{\sqrt{2\pi}} e^{-\frac{Y^2}{2}}} = e^{-\frac{(Y-1)^2}{2} + \frac{Y^2}{2}} $$
$$ \Lambda(Y) = e^{-\frac{Y^2 - 2Y + 1 - Y^2}{2}} = e^{\frac{2Y-1}{2}} = e^{Y - 0.5} $$

b) The decision rule is:
Decide $H_1$ if $\Lambda(Y) > \gamma$
Decide $H_0$ if $\Lambda(Y) < \gamma$

c) If $\gamma = 2$:
Decide $H_1$ if $e^{Y - 0.5} > 2$.
Take the natural logarithm of both sides:
$Y - 0.5 > \ln(2)$
$Y > 0.5 + \ln(2)$

So, the decision rule is:
Decide $H_1$ if $Y > 0.5 + \ln(2)$
Decide $H_0$ if $Y < 0.5 + \ln(2)$
(Here, $\ln(2) \approx 0.693$, so the threshold is approximately $1.193$).

**Question 3 (CO3, K2):**
What is the significance of the Neyman-Pearson Lemma in detection theory?

**Answer 3:**
The Neyman-Pearson Lemma is significant because it proves that for a given constraint on the probability of a Type I error (false alarm), the Likelihood Ratio Test (LRT) is the *most powerful* test. This means it maximizes the probability of correctly detecting the signal when it is present (minimizing the probability of a missed detection). It establishes the optimality of the LRT for simple hypotheses under a specified false alarm rate.

**Question 4 (CO4, K3):**
For the problem in Question 2:
$H_0: Y \sim N(0, 1)$
$H_1: Y \sim N(1, 1)$

Assume $P(H_0) = P(H_1) = 0.5$. If we wish to minimize the probability of error, what would be the decision threshold? (This is the MAP test).

**Answer 4:**
For the MAP test, the decision rule is:
Decide $H_1$ if $\frac{p(Y | H_1)}{p(Y | H_0)} > \frac{P(H_0)}{P(H_1)}$

From Question 2, $\Lambda(Y) = e^{Y - 0.5}$.
The prior probabilities are equal, so $\frac{P(H_0)}{P(H_1)} = \frac{0.5}{0.5} = 1$.

The decision rule becomes:
Decide $H_1$ if $e^{Y - 0.5} > 1$.
Take the natural logarithm:
$Y - 0.5 > \ln(1)$
$Y - 0.5 > 0$
$Y > 0.5$

So, the MAP decision rule is:
Decide $H_1$ if $Y > 0.5$
Decide $H_0$ if $Y < 0.5$

**Question 5 (CO3, K2):**
What does an ROC curve represent, and how is it generated?

**Answer 5:**
An ROC (Receiver Operating Characteristic) curve plots the Probability of Detection ($P_d$) against the Probability of False Alarm ($\alpha$) for a given detector as its decision threshold is varied. It visually illustrates the trade-off between these two error probabilities.

It is generated by:
1.  Choosing a range of threshold values for the decision rule (e.g., for an LRT, varying $\gamma$).
2.  For each threshold value, calculating the corresponding $\alpha = P(\text{Decide } H_1 | H_0)$ and $P_d = P(\text{Decide } H_1 | H_1)$.
3.  Plotting $P_d$ on the y-axis against $\alpha$ on the x-axis.

## 5. Important Points to Remember

*   **Detection Problem:** Deciding between signal presence ($H_1$) and absence ($H_0$) based on noisy observations.
*   **Hypotheses:** Simple (fully specified PDFs) vs. Composite (partially specified PDFs).
*   **Errors:** Type I (False Alarm, $\alpha$) and Type II (Missed Detection, $\beta$).
*   **Likelihood Ratio Test (LRT):** $\Lambda(Y) = p(Y|H_1)/p(Y|H_0)$. Decide $H_1$ if $\Lambda(Y) > \gamma$.
*   **Neyman-Pearson Lemma:** LRT is the most powerful test for a given $\alpha$ in simple hypothesis testing.
*   **Bayes' Test:** Minimizes expected cost considering prior probabilities and costs of errors. Leads to an LRT with a threshold determined by priors and costs.
*   **MAP Test:** Special case of Bayes' test for minimum probability of error. Threshold is $P(H_0)/P(H_1)$.
*   **ROC Curve:** Plots $P_d$ vs. $\alpha$ as the threshold varies, illustrating performance trade-offs.
*   **SNR:** Signal-to-Noise Ratio is a key factor determining detection performance. Higher SNR generally leads to better detection.
*   **Textbook Focus:** Kay's Vol II, Chapter 1, provides the foundational concepts for this module.

This concludes the fundamental concepts of detection theory. The subsequent modules will build upon these ideas, exploring more complex scenarios and specific detection techniques.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
