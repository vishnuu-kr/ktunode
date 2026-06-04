---
title: "minimum probability of error"
subject: "ESTIMATION AND DETECTION"
module: "Module 3: Statistical Detection Theory I"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780febdd"
status: "completed"
scrapedAt: "2026-05-23T17:56:55.159Z"
---
# Module 3: Statistical Detection Theory I - Minimum Probability of Error

## 1. Introduction to Statistical Detection Theory

Statistical detection theory is concerned with the problem of deciding which of several hypotheses is true, given a set of observations. In essence, we are trying to detect the presence or absence of a signal, or to distinguish between different signals. This module focuses on the fundamental principles of statistical detection, laying the groundwork for more advanced topics.

**Key Concepts:**

*   **Hypotheses:** The possible statements about the underlying process generating the observations. Typically, we deal with a null hypothesis ($H_0$) and an alternative hypothesis ($H_1$).
*   **Observations (Data):** The measurements or data we have available to make a decision.
*   **Decision Rule:** A procedure for mapping the observations to a decision about which hypothesis is true.

**Relevance to Course Outcomes:**

*   **CO1 (K2):** Summarize the fundamentals of statistical estimation principles... (While this module is about detection, understanding how signals are modeled and observed is crucial, drawing parallels to estimation.)
*   **CO3 (K2):** Illustrate the fundamentals of statistical detection principles... This module directly addresses this outcome by introducing the core concepts of detection.

**Textbook Reference:**

*   Kay, S.M. (2010). *Fundamentals of Statistical Signal Processing, Vol II: Detection Theory*. Pearson. (Chapters 1 & 2 provide foundational concepts for hypothesis testing).

## 2. The Fundamental Problem of Hypothesis Testing

The core of statistical detection is hypothesis testing. We are given observations, say $x$, and we want to decide between $H_0$ and $H_1$.

**Setup:**

*   **Data:** $x$ (can be a scalar, vector, or sequence of samples)
*   **Hypotheses:**
    *   $H_0$: The data $x$ is generated under a certain condition (e.g., no signal present).
    *   $H_1$: The data $x$ is generated under another condition (e.g., signal present).

**Probability Distributions:**

Crucially, each hypothesis is associated with a probability distribution of the observations.

*   Under $H_0$, the probability density function (PDF) of $x$ is $p(x | H_0)$.
*   Under $H_1$, the probability density function (PDF) of $x$ is $p(x | H_1)$.

**Bayes' Rule and Posterior Probabilities:**

We often have prior probabilities for each hypothesis:

*   $P(H_0)$: Prior probability of $H_0$ being true.
*   $P(H_1)$: Prior probability of $H_1$ being true.
    *   Note: $P(H_0) + P(H_1) = 1$.

Using Bayes' rule, we can calculate the posterior probabilities:

*   $P(H_0 | x) = \frac{p(x | H_0) P(H_0)}{p(x)}$
*   $P(H_1 | x) = \frac{p(x | H_1) P(H_1)}{p(x)}$

where $p(x) = p(x | H_0) P(H_0) + p(x | H_1) P(H_1)$ is the marginal PDF of $x$.

**Decision:**

The fundamental principle is to choose the hypothesis that is more likely given the observations.

*   If $P(H_1 | x) > P(H_0 | x)$, decide $H_1$.
*   If $P(H_0 | x) > P(H_1 | x)$, decide $H_0$.

This is equivalent to comparing the posterior probabilities.

**Alternative Decision Criterion (using Likelihoods):**

We can rewrite the posterior probability comparison:

$\frac{p(x | H_1) P(H_1)}{p(x)} > \frac{p(x | H_0) P(H_0)}{p(x)}$

This simplifies to comparing the **likelihood ratio** $\Lambda(x)$ with a threshold:

$\Lambda(x) = \frac{p(x | H_1)}{p(x | H_0)}$

The decision rule becomes:

*   If $\Lambda(x) > \frac{P(H_0)}{P(H_1)}$, decide $H_1$.
*   If $\Lambda(x) < \frac{P(H_0)}{P(H_1)}$, decide $H_0$.

The threshold is $T = \frac{P(H_0)}{P(H_1)}$. This is a fundamental result known as the **Bayes Test**.

**Key Point:** The optimal decision rule, under the Bayesian framework, is based on comparing the likelihood ratio to a threshold derived from the prior probabilities.

**Example:**

Suppose we are trying to detect the presence of a weak signal in additive white Gaussian noise.
*   $H_0$: $x = n$, where $n \sim \mathcal{N}(0, \sigma^2)$. So $p(x | H_0) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{x^2}{2\sigma^2}}$.
*   $H_1$: $x = s + n$, where $s$ is a known signal amplitude and $n \sim \mathcal{N}(0, \sigma^2)$. So $p(x | H_1) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-s)^2}{2\sigma^2}}$.

The likelihood ratio is:
$\Lambda(x) = \frac{\frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-s)^2}{2\sigma^2}}}{\frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{x^2}{2\sigma^2}}} = e^{\frac{1}{2\sigma^2}(x^2 - (x-s)^2)} = e^{\frac{1}{2\sigma^2}(2sx - s^2)} = e^{\frac{s}{\sigma^2}(x - s/2)}$

The decision rule is:
If $e^{\frac{s}{\sigma^2}(x - s/2)} > \frac{P(H_0)}{P(H_1)}$, decide $H_1$.
Taking the natural logarithm:
$\frac{s}{\sigma^2}(x - s/2) > \ln\left(\frac{P(H_0)}{P(H_1)}\right)$
$x > \frac{\sigma^2}{s} \ln\left(\frac{P(H_0)}{P(H_1)}\right) + s/2$
This is a simple thresholding rule on the observation $x$.

**Textbook Reference:**

*   Kay, S.M. (2010). *Vol II*. Chapter 2: Introduction to Hypothesis Testing.

## 3. The Minimum Probability of Error (Min-Error) Detector

The goal of a detector is to minimize the probability of making an incorrect decision. Different criteria can be used to define "incorrect." The **minimum probability of error** criterion seeks to minimize the overall probability of misclassification.

**Types of Errors:**

When deciding between two hypotheses, there are two types of errors:

1.  **False Alarm (Type I Error):** Deciding $H_1$ when $H_0$ is true. The probability of this error is denoted by $P(\text{FA})$.
2.  **Missed Detection (Type II Error):** Deciding $H_0$ when $H_1$ is true. The probability of this error is denoted by $P(\text{MD})$.

**Overall Probability of Error ($P_e$):**

The total probability of error is a weighted sum of the probabilities of these two errors, considering the prior probabilities of the hypotheses:

$P_e = P(\text{Error} | H_0) P(H_0) + P(\text{Error} | H_1) P(H_1)$

*   $P(\text{Error} | H_0)$ is the probability of deciding $H_1$ when $H_0$ is true. This is the False Alarm probability.
*   $P(\text{Error} | H_1)$ is the probability of deciding $H_0$ when $H_1$ is true. This is the Missed Detection probability.

So, $P_e = P(\text{Decide } H_1 | H_0) P(H_0) + P(\text{Decide } H_0 | H_1) P(H_1)$.

**Minimizing $P_e$:**

The Bayes Test, derived from maximizing the posterior probabilities, is precisely the detector that minimizes the overall probability of error.

Let's re-examine the Bayes Test decision rule:
Decide $H_1$ if $\Lambda(x) > \frac{P(H_0)}{P(H_1)}$.
Decide $H_0$ if $\Lambda(x) < \frac{P(H_0)}{P(H_1)}$.

Now, let's express the probability of error in terms of the likelihood ratio.

*   $P(\text{Decide } H_1 | H_0) = \int_{\{\text{region where } \Lambda(x) > T\}} p(x | H_0) dx$
*   $P(\text{Decide } H_0 | H_1) = \int_{\{\text{region where } \Lambda(x) < T\}} p(x | H_1) dx$

The Bayes Test sets the threshold $T = \frac{P(H_0)}{P(H_1)}$. With this threshold, the total probability of error $P_e$ is minimized.

**Key Insight:** The Bayesian detector that uses the ratio of posterior probabilities (or equivalently, the likelihood ratio compared to the ratio of priors) is the **minimum probability of error detector**.

**Connection to Course Outcomes:**

*   **CO3 (K2):** Illustrate the fundamentals of statistical detection principles... This section explains the objective of detection (minimizing error) and the fundamental Bayes test.
*   **CO4 (K3):** Apply various types of statistical decision rules... The Bayes test is a fundamental decision rule.

**Textbook Reference:**

*   Kay, S.M. (2010). *Vol II*. Chapter 2: Introduction to Hypothesis Testing (specifically the section on the Bayes test and its optimality for minimizing $P_e$).
*   Van Trees, H.L. (2001). *Detection, Estimation, and Modulation Theory, Vol. I*. Chapter 2.2: Bayes Procedures.

### 3.1 Minimizing Error in the General Case (Multiple Hypotheses)

While this module focuses on two hypotheses ($H_0$ vs $H_1$), the concept extends to multiple hypotheses. For $M$ hypotheses ($H_0, H_1, \dots, H_{M-1}$), the detector decides $H_i$ if the posterior probability $P(H_i | x)$ is greater than the posterior probability of all other hypotheses. This translates to comparing the likelihood ratios $\frac{p(x | H_i)}{p(x | H_j)}$ with thresholds derived from prior probabilities. The overall probability of error is the sum of probabilities of choosing any incorrect hypothesis.

### 3.2 Uniformly Most Powerful (UMP) Tests

In some specific cases, particularly when testing a simple hypothesis against a composite alternative, or when dealing with certain statistical models (like exponential families), there exist **Uniformly Most Powerful (UMP)** tests. A UMP test is a test that is most powerful for all possible values of the parameter in the alternative hypothesis, among all tests of the same significance level.

However, UMP tests do not always exist for all hypothesis testing problems. For the general case of two simple hypotheses ($H_0: \theta = \theta_0$ vs $H_1: \theta = \theta_1$), the **Neyman-Pearson Lemma** states that the most powerful test is based on the likelihood ratio.

**Neyman-Pearson Lemma (for simple hypotheses):**

For testing $H_0: x \sim p_0(x)$ against $H_1: x \sim p_1(x)$, the test that maximizes the probability of detection (power) for a fixed probability of false alarm is the likelihood ratio test:

Decide $H_1$ if $\Lambda(x) = \frac{p_1(x)}{p_0(x)} > \eta$
Decide $H_0$ if $\Lambda(x) < \eta$

where $\eta$ is a threshold chosen to meet the desired false alarm probability.

**Important Distinction:**

*   The **Bayes Test** minimizes the *overall probability of error*, considering both false alarms and missed detections, weighted by their prior probabilities.
*   The **Neyman-Pearson Test** maximizes the *probability of detection* (power) for a *fixed probability of false alarm*. This is often used when prior probabilities are unknown or difficult to specify.

**Textbook Reference:**

*   Kay, S.M. (2010). *Vol II*. Chapter 2.3: Neyman-Pearson Lemma.

## 4. Likelihood Ratio Test (LRT)

The Likelihood Ratio Test (LRT) is a cornerstone of hypothesis testing. As we've seen, it's optimal for minimizing probability of error (Bayes Test) and for maximizing power for a given false alarm rate (Neyman-Pearson Test).

**General Form of the LRT:**

The decision rule is always of the form:

$\Lambda(x) \gtreqless T$

where $\Lambda(x)$ is the likelihood ratio and $T$ is the threshold.

**Log-Likelihood Ratio (LLR):**

Often, working with the logarithm of the likelihood ratio is more convenient, especially in signal processing, as it converts products into sums and often leads to simpler calculations.

$LLR(x) = \ln(\Lambda(x)) = \ln(p(x | H_1)) - \ln(p(x | H_0))$

The decision rule becomes:

$LLR(x) \gtreqless \ln(T)$

The threshold is now $\ln(T)$.

**Types of LRTs based on Hypotheses:**

1.  **Simple Hypothesis vs. Simple Hypothesis ($H_0: \theta = \theta_0$ vs. $H_1: \theta = \theta_1$):**
    *   $\Lambda(x) = \frac{p(x | \theta = \theta_1)}{p(x | \theta = \theta_0)}$
    *   Bayes Test threshold: $T = \frac{P(H_0)}{P(H_1)}$
    *   Neyman-Pearson Test threshold: $\eta$ is chosen to set $P(\text{FA}) = \alpha$.

2.  **Simple Hypothesis vs. Composite Hypothesis ($H_0: \theta = \theta_0$ vs. $H_1: \theta > \theta_0$ or $H_1: \theta \neq \theta_0$):**
    *   Here, the likelihood ratio is $\Lambda(x) = \frac{p(x | \theta)}{p(x | \theta = \theta_0)}$. This ratio depends on the unknown $\theta$ in the alternative.
    *   In this case, a UMP test does not always exist. When it does, it's still based on the LRT, but the threshold might be derived differently.

3.  **Composite Hypothesis vs. Composite Hypothesis ($H_0: \theta \in \Theta_0$ vs. $H_1: \theta \in \Theta_1$):**
    *   This is a more general case. The likelihood ratio is often formulated as:
        $\Lambda(x) = \frac{\sup_{\theta \in \Theta_1} p(x | \theta)}{\sup_{\theta \in \Theta_0} p(x | \theta)}$
    *   This is known as the **Generalized Likelihood Ratio Test (GLRT)**. This form is particularly useful when dealing with unknown parameters.

**Example (GLRT): Detecting a known signal in AWGN with unknown amplitude.**

*   $H_0$: $x[n] = w[n]$, where $w[n] \sim \mathcal{N}(0, \sigma^2)$ (i.i.d.)
*   $H_1$: $x[n] = A s[n] + w[n]$, where $A$ is an unknown scalar amplitude and $s[n]$ is a known signal waveform. $\sigma^2$ is also unknown.

The PDFs are:
*   $p(x | H_0, \sigma^2) = \left(\frac{1}{2\pi\sigma^2}\right)^{N/2} \exp\left(-\frac{1}{2\sigma^2} \sum_{n=0}^{N-1} x^2[n]\right)$
*   $p(x | H_1, A, \sigma^2) = \left(\frac{1}{2\pi\sigma^2}\right)^{N/2} \exp\left(-\frac{1}{2\sigma^2} \sum_{n=0}^{N-1} (x[n] - A s[n])^2\right)$

To form the GLRT, we need to find the maximum likelihood estimates (MLEs) of the unknown parameters under each hypothesis.

*   Under $H_0$: The parameter is $\sigma^2$. The MLE of $\sigma^2$ is $\hat{\sigma}_0^2 = \frac{1}{N} \sum_{n=0}^{N-1} x^2[n] = \frac{1}{N} ||x||^2$.
    So, $\sup_{\sigma^2} p(x | H_0, \sigma^2) = \left(\frac{Ne}{||x||^2}\right)^{N/2}$.

*   Under $H_1$: The parameters are $A$ and $\sigma^2$.
    The MLE of $A$ for fixed $\sigma^2$ is $\hat{A} = \frac{\sum x[n]s[n]}{\sum s^2[n]} = \frac{x^T s}{s^T s}$.
    The MLE of $\sigma^2$ under $H_1$ is $\hat{\sigma}_1^2 = \frac{1}{N} \sum_{n=0}^{N-1} (x[n] - \hat{A} s[n])^2 = \frac{1}{N} ||x - \hat{A}s||^2$.
    So, $\sup_{A, \sigma^2} p(x | H_1, A, \sigma^2) = \left(\frac{Ne}{||x - \hat{A}s||^2}\right)^{N/2}$.

The GLRT statistic is:
$\Lambda(x) = \frac{\sup_{A, \sigma^2} p(x | H_1, A, \sigma^2)}{\sup_{\sigma^2} p(x | H_0, \sigma^2)} = \frac{\left(\frac{Ne}{||x - \hat{A}s||^2}\right)^{N/2}}{\left(\frac{Ne}{||x||^2}\right)^{N/2}} = \left(\frac{||x||^2}{||x - \hat{A}s||^2}\right)^{N/2}$

The decision rule is $\Lambda(x) > T_{GLRT}$.
Taking the $\frac{2}{N}$-th power and simplifying:
$\frac{||x||^2}{||x - \hat{A}s||^2} > T_{GLRT}^{2/N}$
$||x||^2 > T_{GLRT}^{2/N} ||x - \hat{A}s||^2$

Substituting $\hat{A} = \frac{x^T s}{s^T s}$:
$||x||^2 > T' \left(||x||^2 - \frac{(x^T s)^2}{s^T s}\right)$

This can be rearranged into a test on a statistic proportional to the signal-to-noise ratio. The threshold $T'$ would be set to achieve a desired false alarm rate.

**Textbook Reference:**

*   Kay, S.M. (2010). *Vol II*. Chapter 2.4: Generalized Likelihood Ratio Tests.
*   Hayes, M.H. (2018). *Statistical Digital Signal Processing and Modelling*. Chapter 9: Hypothesis Testing.

## 5. Performance Measures: Probability of Error Breakdown

As introduced earlier, the overall probability of error $P_e$ is a crucial metric. For the Bayes test, $P_e$ is minimized. We can break down $P_e$ into the probabilities of the two types of errors:

$P_e = P(\text{Decide } H_1 | H_0) P(H_0) + P(\text{Decide } H_0 | H_1) P(H_1)$

Let's define these terms more formally:

*   $P_{FA} = P(\text{Decide } H_1 | H_0)$: Probability of False Alarm.
*   $P_{MD} = P(\text{Decide } H_0 | H_1)$: Probability of Missed Detection.

So, $P_e = P_{FA} P(H_0) + P_{MD} P(H_1)$.

**The ROC Curve:**

The **Receiver Operating Characteristic (ROC)** curve plots $P_{detection} = 1 - P_{MD}$ (probability of correctly deciding $H_1$ when $H_1$ is true) against $P_{FA}$ as the decision threshold varies.

*   $P_{detection} = P(\text{Decide } H_1 | H_1) = \int_{\{\text{region where } \Lambda(x) > T\}} p(x | H_1) dx$
*   $P_{FA} = P(\text{Decide } H_1 | H_0) = \int_{\{\text{region where } \Lambda(x) > T\}} p(x | H_0) dx$

The LRT provides a family of tests, each corresponding to a different threshold $T$. By varying $T$, we trace out the ROC curve.

**Area Under the Curve (AUC):**

The area under the ROC curve (AUC) is a measure of the overall performance of the detector. An AUC of 1 indicates a perfect detector, while an AUC of 0.5 indicates a detector no better than random guessing.

**Minimizing $P_e$ vs. ROC:**

*   Minimizing $P_e$ requires knowledge of prior probabilities $P(H_0)$ and $P(H_1)$. The Bayes test chooses a specific point on the ROC curve.
*   ROC analysis is useful when priors are unknown or when we want to understand the trade-off between $P_{FA}$ and $P_{detection}$ independent of priors.

**Example: Signal Detection in AWGN (Simple Case)**

Consider the example from Section 2:
$H_0: x \sim \mathcal{N}(0, \sigma^2)$
$H_1: x \sim \mathcal{N}(s, \sigma^2)$

The LRT is $x > T$.
*   $P_{FA} = P(x > T | H_0) = \int_{T}^{\infty} \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{x^2}{2\sigma^2}} dx = Q\left(\frac{T}{\sigma}\right)$.
*   $P_{detection} = P(x > T | H_1) = \int_{T}^{\infty} \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-s)^2}{2\sigma^2}} dx$.
    Let $y = x-s$, then $dy=dx$. When $x=T$, $y=T-s$.
    $P_{detection} = \int_{T-s}^{\infty} \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{y^2}{2\sigma^2}} dy = Q\left(\frac{T-s}{\sigma}\right)$.

The ROC curve is generated by plotting $Q\left(\frac{T-s}{\sigma}\right)$ against $Q\left(\frac{T}{\sigma}\right)$ by varying $T$. We can express $P_{detection}$ as a function of $P_{FA}$.
Let $u = T/\sigma$, so $T = u\sigma$.
$P_{FA} = Q(u)$.
$P_{detection} = Q(u - s/\sigma)$.
If $Q(u) = \alpha$, then $u = Q^{-1}(\alpha)$.
$P_{detection} = Q(Q^{-1}(\alpha) - s/\sigma)$.
This equation defines the ROC curve.

The Bayes test threshold $T = \frac{\sigma^2}{s} \ln\left(\frac{P(H_0)}{P(H_1)}\right) + s/2$.
This threshold determines a specific point on the ROC curve that minimizes $P_e = P_{FA} P(H_0) + (1 - P_{detection}) P(H_1)$.

**Textbook Reference:**

*   Kay, S.M. (2010). *Vol II*. Chapter 2.2: Performance Analysis (introduces $P_{FA}$, $P_{MD}$ and relates them to decision rules).

## 6. Relation to Maximum Likelihood Estimation (MLE)

There is a close relationship between hypothesis testing and maximum likelihood estimation, especially in the context of the GLRT.

*   **MLE:** Given a set of observations $x$ and a model with parameter $\theta$, the MLE $\hat{\theta}_{MLE}$ is the value of $\theta$ that maximizes the likelihood function $p(x | \theta)$.
*   **GLRT:** In composite hypothesis testing, the GLRT statistic is often formed by the ratio of the maximized likelihoods under the alternative and null hypotheses, using the MLEs of parameters within those hypothesis sets.

$\Lambda(x) = \frac{\max_{\theta \in \Theta_1} p(x | \theta)}{\max_{\theta \in \Theta_0} p(x | \theta)}$

This means that to implement a GLRT, you first need to be able to find the maximum likelihood estimates of the parameters under each hypothesis. This connects the concepts of estimation and detection.

**Example Revisited (Signal in AWGN with Unknown Amplitude):**

The GLRT we derived involved finding the MLE of the amplitude $A$ under $H_1$ and the MLE of $\sigma^2$ under $H_0$. The resulting test statistic was directly related to these ML estimates.

**Textbook Reference:**

*   Kay, S.M. (2010). *Vol II*. Chapter 2.4: Generalized Likelihood Ratio Tests (explicitly shows how MLEs are used to construct the GLRT).
*   Hayes, M.H. (2018). *Statistical Digital Signal Processing and Modelling*. Chapter 9.3: Generalized Likelihood Ratio Tests.

## 7. Practice Questions and Answers

**Question 1:**
Consider the problem of detecting a known signal $s$ in additive white Gaussian noise $w \sim \mathcal{N}(0, \sigma^2)$.
$H_0: x = w$
$H_1: x = s + w$
Assume $s$ is a known positive constant, and $\sigma^2$ is known. Let the prior probabilities be $P(H_0) = P(H_1) = 0.5$.

(a) Derive the likelihood ratio $\Lambda(x)$.
(b) Determine the Bayes test decision rule for minimizing the probability of error. Express it in terms of a threshold.
(c) If $s = 2$ and $\sigma^2 = 1$, what is the threshold for the Bayes test?

**Answer 1:**
(a) PDF under $H_0$: $p(x | H_0) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{x^2}{2\sigma^2}}$
    PDF under $H_1$: $p(x | H_1) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-s)^2}{2\sigma^2}}$

    Likelihood Ratio:
    $\Lambda(x) = \frac{p(x | H_1)}{p(x | H_0)} = \frac{\frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-s)^2}{2\sigma^2}}}{\frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{x^2}{2\sigma^2}}} = e^{\frac{1}{2\sigma^2}(x^2 - (x-s)^2)} = e^{\frac{1}{2\sigma^2}(2sx - s^2)} = e^{\frac{s}{\sigma^2}(x - s/2)}$

(b) The Bayes test decision rule is:
    Decide $H_1$ if $\Lambda(x) > \frac{P(H_0)}{P(H_1)}$
    Decide $H_0$ if $\Lambda(x) < \frac{P(H_0)}{P(H_1)}$

    With $P(H_0) = P(H_1) = 0.5$, the threshold is $\frac{0.5}{0.5} = 1$.
    So, decide $H_1$ if $\Lambda(x) > 1$.
    $e^{\frac{s}{\sigma^2}(x - s/2)} > 1$
    Taking the natural logarithm:
    $\frac{s}{\sigma^2}(x - s/2) > 0$
    Since $s > 0$ and $\sigma^2 > 0$, we have:
    $x - s/2 > 0$
    $x > s/2$

    The decision rule is: Decide $H_1$ if $x > s/2$, else decide $H_0$.

(c) For $s = 2$ and $\sigma^2 = 1$:
    The threshold is $s/2 = 2/2 = 1$.
    So, decide $H_1$ if $x > 1$, else decide $H_0$.

---

**Question 2:**
For the problem in Question 1, calculate the probability of false alarm ($P_{FA}$) and the probability of missed detection ($P_{MD}$) when $s=2$ and $\sigma^2=1$.

**Answer 2:**
From Question 1, the decision rule is to decide $H_1$ if $x > 1$.

*   **Probability of False Alarm ($P_{FA}$):** This is the probability of deciding $H_1$ when $H_0$ is true.
    $P_{FA} = P(\text{Decide } H_1 | H_0) = P(x > 1 | H_0)$
    Under $H_0$, $x \sim \mathcal{N}(0, \sigma^2 = 1)$.
    $P_{FA} = \int_{1}^{\infty} \frac{1}{\sqrt{2\pi(1)}} e^{-\frac{x^2}{2(1)}} dx = Q\left(\frac{1-0}{1}\right) = Q(1)$.
    $Q(1) \approx 0.1587$

*   **Probability of Missed Detection ($P_{MD}$):** This is the probability of deciding $H_0$ when $H_1$ is true.
    $P_{MD} = P(\text{Decide } H_0 | H_1) = P(x \le 1 | H_1)$
    Under $H_1$, $x \sim \mathcal{N}(s=2, \sigma^2=1)$.
    $P_{MD} = \int_{-\infty}^{1} \frac{1}{\sqrt{2\pi(1)}} e^{-\frac{(x-2)^2}{2(1)}} dx$.
    Let $y = x-2$, so $dy=dx$. When $x=1$, $y = 1-2 = -1$.
    $P_{MD} = \int_{-\infty}^{-1} \frac{1}{\sqrt{2\pi}} e^{-\frac{y^2}{2}} dy = \Phi(-1)$.
    Since $\Phi(-z) = 1 - \Phi(z)$ and $Q(z) = 1 - \Phi(z)$, we have $\Phi(-1) = 1 - \Phi(1)$.
    Also, $Q(z) = \Phi(-z)$. So, $P_{MD} = \Phi(-1) = Q(1)$.
    $P_{MD} \approx 0.1587$

Notice that for equal prior probabilities and symmetric noise distribution around 0, $P_{FA} = P_{MD}$ when the threshold is at the mean difference.

---

**Question 3:**
What is the fundamental difference in objective between the Bayes test and the Neyman-Pearson test?

**Answer 3:**
*   **Bayes Test:** The primary objective is to minimize the *overall probability of error* ($P_e$), which is a weighted sum of the probabilities of false alarm and missed detection, taking into account the prior probabilities of the hypotheses.
*   **Neyman-Pearson Test:** The primary objective is to maximize the *probability of detection* (also known as power, $1 - P_{MD}$) for a *fixed probability of false alarm* ($\alpha$). It focuses on optimizing the trade-off between these two error types without necessarily considering prior probabilities.

## 8. Important Points to Remember

*   **Hypothesis Testing:** The core problem in detection theory is deciding between competing hypotheses based on observed data.
*   **Bayes Test:** The optimal detector for minimizing the overall probability of error. It is based on comparing the likelihood ratio to the ratio of prior probabilities: $\Lambda(x) > \frac{P(H_0)}{P(H_1)}$.
*   **Likelihood Ratio:** $\Lambda(x) = \frac{p(x | H_1)}{p(x | H_0)}$. This ratio quantifies how much more likely the data is under $H_1$ compared to $H_0$.
*   **Log-Likelihood Ratio (LLR):** Often used for computational convenience: $LLR(x) = \ln(\Lambda(x))$. The decision rule becomes $LLR(x) > \ln\left(\frac{P(H_0)}{P(H_1)}\right)$.
*   **Types of Errors:** False Alarm ($H_1$ decided when $H_0$ true) and Missed Detection ($H_0$ decided when $H_1$ true).
*   **Probability of Error ($P_e$):** $P_e = P_{FA} P(H_0) + P_{MD} P(H_1)$. The Bayes test minimizes this quantity.
*   **Neyman-Pearson Lemma:** Guarantees that the LRT is the most powerful test for simple hypotheses for a given false alarm rate.
*   **Generalized Likelihood Ratio Test (GLRT):** Used for composite hypotheses (where parameters are unknown). It involves maximizing the likelihoods under each hypothesis.
*   **Maximum Likelihood Estimation (MLE):** Closely related to GLRT, as MLEs are often used to form the GLRT statistic.
*   **ROC Curve:** Plots $P_{detection}$ vs. $P_{FA}$ by varying the decision threshold. Useful for evaluating detector performance independently of prior probabilities.

## 9. Alignment with Course Outcomes

*   **CO1 (K2):** This module builds on foundational statistical principles, touching upon probability distributions and Bayesian inference, which are essential for estimation as well. Understanding these principles is key to appreciating how detection problems are formulated.
*   **CO3 (K2):** This module directly illustrates the fundamentals of statistical detection principles by introducing hypothesis testing, likelihood ratios, error types, and the Bayes/Neyman-Pearson tests.
*   **CO4 (K3):** The Bayes test and Likelihood Ratio Test (including the GLRT) are presented as fundamental statistical decision rules. The practice questions demonstrate how to apply these rules to specific signal detection scenarios. The concepts of performance measures like $P_{FA}$ and $P_{MD}$ are also applied in these examples.

This concludes the study notes for the minimum probability of error topic within Statistical Detection Theory I.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
