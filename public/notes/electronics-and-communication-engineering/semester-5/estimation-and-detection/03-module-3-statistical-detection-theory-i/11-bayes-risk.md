---
title: "Bayes risk"
subject: "ESTIMATION AND DETECTION"
module: "Module 3: Statistical Detection Theory I"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780febde"
status: "completed"
scrapedAt: "2026-05-23T17:56:55.870Z"
---
# ESTIMATION AND DETECTION

## Module 3: Statistical Detection Theory I

### Topic: Bayes Risk

**Learning Outcomes:**

*   Understand the concept of Bayes risk in statistical detection problems.
*   Formulate the Bayes risk for a given detection problem.
*   Relate Bayes risk to the cost of misclassification.
*   Understand the optimal decision rule that minimizes Bayes risk.
*   Differentiate between Bayes risk and other performance metrics.

---

### 1. Introduction to Statistical Detection and Bayes Risk

Statistical detection theory deals with making a decision between two or more hypotheses based on observed data. In many real-world scenarios, these decisions are not free of error, and different types of errors have different consequences. **Bayes risk** provides a framework to quantify these consequences and find the optimal decision rule that minimizes the expected total cost of errors.

**Key Concept:** The goal of detection is to decide which hypothesis, among a set of possible hypotheses, is most likely given the observed data.

**Course Outcome Alignment:**

*   **CO3 (K2):** Illustrate the fundamentals of statistical detection principles used in various engineering problems. (Bayes risk is a fundamental principle for optimal detection).
*   **CO4 (K3):** Apply various types of statistical decision rules in engineering applications. (Minimizing Bayes risk leads to a specific type of decision rule).

---

### 2. Hypotheses and Observations

In a typical detection problem, we have:

*   **Hypotheses ($H_i$):** A set of possible states of the world or signal presence. For a simple binary detection problem, we usually have two hypotheses:
    *   $H_0$: Null hypothesis (e.g., no signal present)
    *   $H_1$: Alternative hypothesis (e.g., signal present)
*   **Observations ($X$):** The data or measurements available to make the decision. This data is often a realization of a random variable or vector.

**Example:**
*   **Radar:**
    *   $H_0$: No target present.
    *   $H_1$: Target present.
    *   $X$: Received signal (e.g., a sequence of digitized samples).
*   **Communication:**
    *   $H_0$: Bit '0' was transmitted.
    *   $H_1$: Bit '1' was transmitted.
    *   $X$: Received signal samples.

**Kay, Vol II, Chapter 1, Section 1.1 "Introduction"**: Discusses the general framework of statistical detection where we observe data $X$ and wish to decide between hypotheses $H_0$ and $H_1$.

---

### 3. Decision Rule and Costs

A **decision rule** is a procedure that maps the observed data $X$ to a decision about which hypothesis is true. In a binary detection problem, the decision rule is essentially a partition of the observation space into two regions:

*   **Region for $H_0$ ($\mathcal{R}_0$):** If $X \in \mathcal{R}_0$, we decide $H_0$ is true.
*   **Region for $H_1$ ($\mathcal{R}_1$):** If $X \in \mathcal{R}_1$, we decide $H_1$ is true.

Crucially, these decisions can be wrong. We define **costs** associated with each possible decision and the true hypothesis:

*   $C_{10}$: Cost of deciding $H_1$ when $H_0$ is true (False Alarm or Type I Error).
*   $C_{01}$: Cost of deciding $H_0$ when $H_1$ is true (Miss Detection or Type II Error).
*   $C_{00}$: Cost of deciding $H_0$ when $H_0$ is true (Correct Decision).
*   $C_{11}$: Cost of deciding $H_1$ when $H_1$ is true (Correct Decision).

**Important Note:** Often, the costs of correct decisions ($C_{00}$ and $C_{11}$) are set to 0 to focus on minimizing the cost of errors.

**Kay, Vol II, Chapter 1, Section 1.2 "Bayes Criterion"**: Introduces the concept of costs and their association with decisions.

---

### 4. Bayes Risk (Total Expected Cost)

The **Bayes risk** ($R$) is the expected total cost of making a decision, averaged over all possible observations and the prior probabilities of the hypotheses. It is the metric we aim to minimize.

Let:
*   $P(H_0)$: Prior probability of hypothesis $H_0$.
*   $P(H_1)$: Prior probability of hypothesis $H_1$.
*   $p(x|H_0)$: Probability density function (PDF) of the observation $X$ given $H_0$.
*   $p(x|H_1)$: PDF of the observation $X$ given $H_1$.

The Bayes risk for a given decision rule (defined by $\mathcal{R}_0$ and $\mathcal{R}_1$) is:

$R(\text{decision rule}) = \underbrace{\int_{\mathcal{R}_0} C_{00} p(x|H_0) dx}_{\text{Expected cost of deciding } H_0 \text{ when } H_0 \text{ is true}} + \underbrace{\int_{\mathcal{R}_1} C_{01} p(x|H_1) dx}_{\text{Expected cost of deciding } H_0 \text{ when } H_1 \text{ is true}} + \underbrace{\int_{\mathcal{R}_1} C_{11} p(x|H_1) dx}_{\text{Expected cost of deciding } H_1 \text{ when } H_1 \text{ is true}} + \underbrace{\int_{\mathcal{R}_0} C_{10} p(x|H_0) dx}_{\text{Expected cost of deciding } H_1 \text{ when } H_0 \text{ is true}}$

This can be rewritten by grouping terms by hypothesis:

$R = P(H_0) \left( \int_{\mathcal{R}_0} C_{00} p(x|H_0) dx + \int_{\mathcal{R}_1} C_{10} p(x|H_0) dx \right) + P(H_1) \left( \int_{\mathcal{R}_0} C_{01} p(x|H_1) dx + \int_{\mathcal{R}_1} C_{11} p(x|H_1) dx \right)$

Let's simplify by considering the contribution of each decision for each hypothesis:

*   **If $H_0$ is true:**
    *   If we decide $H_0$ (i.e., $X \in \mathcal{R}_0$), cost is $C_{00}$.
    *   If we decide $H_1$ (i.e., $X \in \mathcal{R}_1$), cost is $C_{10}$.
*   **If $H_1$ is true:**
    *   If we decide $H_0$ (i.e., $X \in \mathcal{R}_0$), cost is $C_{01}$.
    *   If we decide $H_1$ (i.e., $X \in \mathcal{R}_1$), cost is $C_{11}$.

The total Bayes risk is the sum of the expected costs for each outcome:

$R = \underbrace{P(H_0) \int_{\mathcal{R}_0} C_{00} p(x|H_0) dx}_{\text{Expected cost of correctly deciding } H_0} + \underbrace{P(H_0) \int_{\mathcal{R}_1} C_{10} p(x|H_0) dx}_{\text{Expected cost of Type I Error (False Alarm)}} + \underbrace{P(H_1) \int_{\mathcal{R}_0} C_{01} p(x|H_1) dx}_{\text{Expected cost of Type II Error (Miss Detection)}} + \underbrace{P(H_1) \int_{\mathcal{R}_1} C_{11} p(x|H_1) dx}_{\text{Expected cost of correctly deciding } H_1}$

Alternatively, and more usefully for deriving the optimal rule:

$R = \int_{-\infty}^{\infty} [\underbrace{C_{00} P(H_0) p(x|H_0)}_{\text{Cost of deciding } H_0 \text{ at } x} + \underbrace{C_{01} P(H_1) p(x|H_1)}_{\text{Cost of deciding } H_0 \text{ at } x}] \mathbb{I}(\mathcal{R}_0) dx + \int_{-\infty}^{\infty} [\underbrace{C_{10} P(H_0) p(x|H_0)}_{\text{Cost of deciding } H_1 \text{ at } x} + \underbrace{C_{11} P(H_1) p(x|H_1)}_{\text{Cost of deciding } H_1 \text{ at } x}] \mathbb{I}(\mathcal{R}_1) dx$

where $\mathbb{I}(\mathcal{R})$ is the indicator function (1 if $x \in \mathcal{R}$, 0 otherwise).

For a specific observation $x$, the minimum cost is achieved by choosing the decision that incurs the lower immediate cost. The immediate cost of deciding $H_0$ given $x$ is $C_{00} P(H_0) p(x|H_0) + C_{01} P(H_1) p(x|H_1)$. The immediate cost of deciding $H_1$ given $x$ is $C_{10} P(H_0) p(x|H_0) + C_{11} P(H_1) p(x|H_1)$.

**Kay, Vol II, Chapter 1, Section 1.2 "Bayes Criterion"**: This section provides the formal definition and derivation of the Bayes risk formula.

**Van Trees, Vol I, Chapter 2, Section 2.1 "General Background"**: Discusses the fundamental concepts of hypothesis testing and the role of costs.

---

### 5. The Optimal Bayes Decision Rule

To minimize the Bayes risk, we need to choose the decision rule (i.e., the regions $\mathcal{R}_0$ and $\mathcal{R}_1$) that achieves the lowest possible value of $R$. This is achieved by making the locally optimal decision for each observation $x$.

For a given observation $x$, we should choose:

*   **Decide $H_0$ if the cost of deciding $H_0$ is less than the cost of deciding $H_1$.**
*   **Decide $H_1$ if the cost of deciding $H_1$ is less than the cost of deciding $H_0$.**

Let $J_0(x)$ be the cost incurred when we decide $H_0$ given observation $x$, and $J_1(x)$ be the cost incurred when we decide $H_1$ given observation $x$.

$J_0(x) = \text{Cost of deciding } H_0 \text{ given } x$
$J_1(x) = \text{Cost of deciding } H_1 \text{ given } x$

The Bayes risk can be expressed as:

$R = \int_{-\infty}^{\infty} \min(J_0(x), J_1(x)) dx$

The optimal decision rule is:

*   **Decide $H_0$ if $J_0(x) < J_1(x)$.**
*   **Decide $H_1$ if $J_1(x) < J_0(x)$.**
*   If $J_0(x) = J_1(x)$, the decision can be arbitrary without affecting the total Bayes risk (this forms the boundary of the regions).

Substituting the costs:

*   **Decide $H_0$ if:**
    $C_{00} P(H_0) p(x|H_0) + C_{01} P(H_1) p(x|H_1) < C_{10} P(H_0) p(x|H_0) + C_{11} P(H_1) p(x|H_1)$
*   **Decide $H_1$ if:**
    $C_{10} P(H_0) p(x|H_0) + C_{11} P(H_1) p(x|H_1) < C_{00} P(H_0) p(x|H_0) + C_{01} P(H_1) p(x|H_1)$

Rearranging these inequalities, we get the **Bayes Likelihood Ratio Test (BLRT)**.

Let's define the **Bayes decision function** for observation $x$:

$d(x) = \begin{cases} 0 & \text{if } J_0(x) \le J_1(x) \quad (\text{Decide } H_0) \\ 1 & \text{if } J_1(x) < J_0(x) \quad (\text{Decide } H_1) \end{cases}$

This is equivalent to:

$d(x) = \begin{cases} 0 & \text{if } (C_{10} - C_{00}) P(H_0) p(x|H_0) \le (C_{01} - C_{11}) P(H_1) p(x|H_1) \\ 1 & \text{if } (C_{10} - C_{00}) P(H_0) p(x|H_0) > (C_{01} - C_{11}) P(H_1) p(x|H_1) \end{cases}$

**Kay, Vol II, Chapter 1, Section 1.2.1 "Optimal Bayes Decision Rule"**: This section details the derivation of the optimal Bayes decision rule based on minimizing local costs.

**Hayes, Chapter 7, Section 7.2 "Bayes Decision Theory"**: Explains Bayes decision theory and the optimal decision rule based on costs.

---

### 6. The Bayes Likelihood Ratio Test (BLRT)

The Bayes decision rule can be expressed in terms of the likelihood ratio $\Lambda(x) = \frac{p(x|H_1)}{p(x|H_0)}$.

Let's rewrite the inequality from Section 5:

$(C_{10} - C_{00}) P(H_0) p(x|H_0) \le (C_{01} - C_{11}) P(H_1) p(x|H_1)$

Assume for now that costs are non-negative and that $C_{01} - C_{11} > 0$ and $C_{10} - C_{00} > 0$. This is common when correct decisions have zero cost.

Divide both sides by $P(H_0) p(x|H_0)$:

$C_{10} - C_{00} \le \frac{P(H_1)}{P(H_0)} \frac{p(x|H_1)}{p(x|H_0)} (C_{01} - C_{11})$

Rearrange to isolate the likelihood ratio:

$\frac{p(x|H_1)}{p(x|H_0)} \ge \frac{C_{10} - C_{00}}{C_{01} - C_{11}} \frac{P(H_0)}{P(H_1)}$

Let $\eta = \frac{C_{10} - C_{00}}{C_{01} - C_{11}} \frac{P(H_0)}{P(H_1)}$. This $\eta$ is the **Bayes threshold**.

The **Bayes Likelihood Ratio Test (BLRT)** states:

*   **Decide $H_1$ if $\Lambda(x) \ge \eta$.**
*   **Decide $H_0$ if $\Lambda(x) < \eta$.**

This rule is optimal in the sense that it minimizes the Bayes risk.

**Special Case: Zero Costs for Correct Decisions**
If $C_{00} = 0$ and $C_{11} = 0$:
*   $C_{10}$: Cost of False Alarm (Type I Error)
*   $C_{01}$: Cost of Miss Detection (Type II Error)

The BLRT becomes:
$\frac{p(x|H_1)}{p(x|H_0)} \ge \frac{C_{10}}{C_{01}} \frac{P(H_0)}{P(H_1)}$

The threshold $\eta$ is now the ratio of the cost of a false alarm to the cost of a miss detection, scaled by the inverse of the prior odds.

**Example: Binary Phase-Shift Keying (BPSK)**
Consider detecting a signal $s_1(t)$ or $s_0(t) = 0$ in additive white Gaussian noise (AWGN).
$H_0: X = N$
$H_1: X = s_1 + N$
where $N \sim \mathcal{N}(0, \sigma^2)$ and $s_1$ is a known constant signal amplitude.
The likelihood ratio (for a single sample $x$) is:
$\Lambda(x) = \frac{\frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-s_1)^2}{2\sigma^2}}}{\frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{x^2}{2\sigma^2}}} = e^{\frac{1}{2\sigma^2}(2xs_1 - s_1^2)}$

Taking the logarithm (which preserves the order):
$\ln \Lambda(x) = \frac{s_1}{\sigma^2} x - \frac{s_1^2}{2\sigma^2}$

The BLRT becomes:
$\frac{s_1}{\sigma^2} x - \frac{s_1^2}{2\sigma^2} \ge \ln \eta$
$\frac{s_1}{\sigma^2} x \ge \ln \eta + \frac{s_1^2}{2\sigma^2}$

If $s_1 > 0$, we can divide by $s_1/\sigma^2$:
$x \ge \frac{\sigma^2}{s_1} \left( \ln \eta + \frac{s_1^2}{2\sigma^2} \right)$

This is a simple threshold on the observation $x$. The threshold value depends on the prior probabilities and costs.

**Kay, Vol II, Chapter 1, Section 1.2.1 "Optimal Bayes Decision Rule"**: Explicitly derives the BLRT.
**Van Trees, Vol I, Chapter 2, Section 2.3 "Bayes Likelihood Ratio Test"**: Provides a thorough treatment of the BLRT and its relation to cost functions.

---

### 7. Minimum Bayes Risk

The minimum Bayes risk is the Bayes risk achieved by the optimal Bayes decision rule. It is the lowest possible average cost for a given detection problem.

$R_{min} = \int_{-\infty}^{\infty} \min(J_0(x), J_1(x)) dx$

where $J_0(x) = C_{00} P(H_0) p(x|H_0) + C_{01} P(H_1) p(x|H_1)$ and $J_1(x) = C_{10} P(H_0) p(x|H_0) + C_{11} P(H_1) p(x|H_1)$.

This integral can be computed once the optimal decision regions $\mathcal{R}_0$ and $\mathcal{R}_1$ (or equivalently, the threshold $\eta$) are determined.

**Example Calculation:**
Consider a binary detection problem with:
*   $H_0: X \sim \mathcal{N}(0, 1)$ (PDF $p(x|H_0) = \frac{1}{\sqrt{2\pi}} e^{-x^2/2}$)
*   $H_1: X \sim \mathcal{N}(2, 1)$ (PDF $p(x|H_1) = \frac{1}{\sqrt{2\pi}} e^{-(x-2)^2/2}$)
*   $P(H_0) = 0.5$, $P(H_1) = 0.5$
*   $C_{00} = 0$, $C_{11} = 0$
*   $C_{10} = 10$ (Cost of False Alarm)
*   $C_{01} = 1$ (Cost of Miss Detection)

The BLRT threshold is:
$\eta = \frac{C_{10}}{C_{01}} \frac{P(H_0)}{P(H_1)} = \frac{10}{1} \frac{0.5}{0.5} = 10$

The likelihood ratio is:
$\Lambda(x) = \frac{p(x|H_1)}{p(x|H_0)} = \frac{e^{-(x-2)^2/2}}{e^{-x^2/2}} = e^{\frac{1}{2}(-x^2 + 4x - 4 + x^2)} = e^{2x - 2}$

The decision rule is to decide $H_1$ if $\Lambda(x) \ge \eta$:
$e^{2x - 2} \ge 10$
$2x - 2 \ge \ln 10$
$2x \ge 2 + \ln 10$
$x \ge 1 + \frac{1}{2}\ln 10 \approx 1 + 1.15 = 2.15$

So, $\mathcal{R}_1 = [2.15, \infty)$ and $\mathcal{R}_0 = (-\infty, 2.15)$.

Now, calculate the minimum Bayes risk:
$J_0(x) = C_{00} P(H_0) p(x|H_0) + C_{01} P(H_1) p(x|H_1) = 0 \cdot 0.5 \cdot p(x|H_0) + 1 \cdot 0.5 \cdot p(x|H_1) = 0.5 p(x|H_1)$
$J_1(x) = C_{10} P(H_0) p(x|H_0) + C_{11} P(H_1) p(x|H_1) = 10 \cdot 0.5 \cdot p(x|H_0) + 0 \cdot 0.5 \cdot p(x|H_1) = 5 p(x|H_0)$

$R_{min} = \int_{-\infty}^{\infty} \min(0.5 p(x|H_1), 5 p(x|H_0)) dx$
We know that $0.5 p(x|H_1) < 5 p(x|H_0)$ when $p(x|H_1)/p(x|H_0) < 10$, which is when $x < 2.15$.
And $5 p(x|H_0) < 0.5 p(x|H_1)$ when $p(x|H_1)/p(x|H_0) > 10$, which is when $x > 2.15$.

$R_{min} = \int_{-\infty}^{2.15} 0.5 p(x|H_1) dx + \int_{2.15}^{\infty} 5 p(x|H_0) dx$
$R_{min} = 0.5 \int_{-\infty}^{2.15} p(x|H_1) dx + 5 \int_{2.15}^{\infty} p(x|H_0) dx$

Let $\Phi(y)$ be the CDF of the standard normal distribution.
$\int_{-\infty}^{2.15} p(x|H_1) dx = \int_{-\infty}^{2.15} \frac{1}{\sqrt{2\pi}} e^{-(x-2)^2/2} dx$
Let $u = x - 2$, $du = dx$. When $x=2.15$, $u = 0.15$.
This integral is $\Phi(0.15)$.

$\int_{2.15}^{\infty} p(x|H_0) dx = \int_{2.15}^{\infty} \frac{1}{\sqrt{2\pi}} e^{-x^2/2} dx = 1 - \Phi(2.15)$.

$R_{min} = 0.5 \Phi(0.15) + 5 (1 - \Phi(2.15))$

Using standard normal tables or a calculator:
$\Phi(0.15) \approx 0.5596$
$\Phi(2.15) \approx 0.9842$
$1 - \Phi(2.15) \approx 1 - 0.9842 = 0.0158$

$R_{min} \approx 0.5 \times 0.5596 + 5 \times 0.0158$
$R_{min} \approx 0.2798 + 0.079 = 0.3588$

**Kay, Vol II, Chapter 1, Section 1.2.2 "Minimum Bayes Risk"**: Provides the formula and discussion for calculating the minimum Bayes risk.

---

### 8. Relationship with Other Performance Metrics

Bayes risk is a fundamental metric, but it is not always directly computed or used. It is closely related to other important performance measures in detection:

*   **Probability of Error ($P_e$):** When all costs are equal ($C_{ij} = C$ for all $i, j$, or more commonly $C_{00}=C_{11}=0$ and $C_{01}=C_{10}=1$), minimizing Bayes risk is equivalent to minimizing the probability of error.
    *   $R = P(H_0) P(\text{error}|H_0) C_{10} + P(H_1) P(\text{error}|H_1) C_{01}$
    *   If $C_{10}=C_{01}=1$, then $R = P(H_0) P(\text{Type I Error}) + P(H_1) P(\text{Type II Error})$, which is the total probability of error.
*   **Minimum Probability of Error (Bayes Probability of Error):** This is the Bayes risk when costs are equal.
*   ** Neyman-Pearson Criterion:** A different criterion that aims to maximize the probability of detection for a fixed probability of false alarm, without considering prior probabilities or costs. It is a frequentist approach.
*   **MAP (Maximum A Posteriori) Criterion:** Equivalent to the Bayes criterion when all costs are equal and prior probabilities are considered.

**Kay, Vol II, Chapter 1, Section 1.3 "Other Criteria"**: Discusses the relationship between Bayes criterion and other common criteria like MAP.

**Important Point:** Bayes risk provides a unified framework that can incorporate prior knowledge (prior probabilities) and the relative importance of different errors (costs).

---

### 9. Applications and Examples

Bayes risk is fundamental in various fields:

*   **Signal Detection in Communications:** Deciding whether a symbol was transmitted correctly, considering the cost of bit errors.
*   **Radar and Sonar Systems:** Detecting targets while minimizing false alarms and missed detections, with different costs associated with each.
*   **Medical Diagnosis:** Deciding if a patient has a disease, where the cost of missing a disease (false negative) can be much higher than a false alarm.
*   **Machine Learning:** In classification problems, Bayes risk underlies the selection of optimal classifiers when class priors and misclassification costs are known.

**Example: Medical Diagnosis**
*   $H_0$: Patient is healthy.
*   $H_1$: Patient has the disease.
*   $X$: Test results (e.g., blood markers, imaging).
*   $C_{10}$ (False Alarm): Cost of treating a healthy person (unnecessary treatment, anxiety).
*   $C_{01}$ (Miss Detection): Cost of not treating a sick person (disease progression, death).

Clearly, $C_{01} \gg C_{10}$. The Bayes approach would lead to a decision rule that prioritizes minimizing miss detections, even if it means more false alarms, if the cost of a miss detection is sufficiently high.

**CO4 (K3) Alignment:** Understanding Bayes risk allows for the application of the BLRT, which is a fundamental statistical decision rule.

---

### 10. Practice Questions and Exercises

**Question 1:**
Consider a binary hypothesis testing problem where:
$H_0: X \sim \mathcal{N}(0, 1)$
$H_1: X \sim \mathcal{N}(1, 1)$
$P(H_0) = 0.7$, $P(H_1) = 0.3$
Costs: $C_{00} = 0$, $C_{11} = 0$, $C_{10} = 5$, $C_{01} = 2$.

a) Calculate the Bayes threshold $\eta$.
b) Determine the Bayes Likelihood Ratio Test (BLRT) decision rule.
c) Calculate the minimum Bayes risk. (Hint: You will need to use the Q-function or the standard normal CDF).

**Answer 1:**
a) The Bayes threshold is $\eta = \frac{C_{10}}{C_{01}} \frac{P(H_0)}{P(H_1)} = \frac{5}{2} \frac{0.7}{0.3} = \frac{5}{2} \frac{7}{3} = \frac{35}{6} \approx 5.833$.

b) The likelihood ratio is $\Lambda(x) = \frac{p(x|H_1)}{p(x|H_0)} = \frac{\frac{1}{\sqrt{2\pi}} e^{-(x-1)^2/2}}{\frac{1}{\sqrt{2\pi}} e^{-x^2/2}} = e^{\frac{1}{2}(-x^2 + 2x - 1 + x^2)} = e^{x - 0.5}$.
The BLRT is: Decide $H_1$ if $\Lambda(x) \ge \eta$.
$e^{x - 0.5} \ge \frac{35}{6}$
$x - 0.5 \ge \ln(\frac{35}{6})$
$x \ge 0.5 + \ln(\frac{35}{6})$
$x \ge 0.5 + 1.763 = 2.263$.
So, the decision rule is:
Decide $H_0$ if $x < 2.263$.
Decide $H_1$ if $x \ge 2.263$.

c) The minimum Bayes risk is $R_{min} = \int_{-\infty}^{2.263} 0.5 p(x|H_1) dx + \int_{2.263}^{\infty} 5 p(x|H_0) dx$.
$R_{min} = 0.5 \int_{-\infty}^{2.263} p(x|H_1) dx + 5 \int_{2.263}^{\infty} p(x|H_0) dx$.
$R_{min} = 0.5 P(X \le 2.263 | H_1) + 5 P(X \ge 2.263 | H_0)$.
$P(X \le 2.263 | H_1) = P(Z \le 2.263 - 1) = P(Z \le 1.263) = \Phi(1.263)$.
$P(X \ge 2.263 | H_0) = P(Z \ge 2.263) = 1 - \Phi(2.263)$.
$\Phi(1.263) \approx 0.8969$
$\Phi(2.263) \approx 0.9881$
$1 - \Phi(2.263) \approx 1 - 0.9881 = 0.0119$.
$R_{min} \approx 0.5 \times 0.8969 + 5 \times 0.0119$
$R_{min} \approx 0.44845 + 0.0595 = 0.50795$.

**Question 2:**
Explain the significance of the Bayes threshold $\eta$ in the context of balancing costs and prior probabilities.

**Answer 2:**
The Bayes threshold $\eta$ quantifies the trade-off between the cost of a false alarm ($C_{10}$) and the cost of a miss detection ($C_{01}$), adjusted by the prior odds of the hypotheses ($P(H_0)/P(H_1)$).
*   A **higher threshold** (larger $\eta$) is required to decide $H_1$ if:
    *   The cost of a false alarm ($C_{10}$) is high relative to the cost of a miss detection ($C_{01}$).
    *   Hypothesis $H_0$ is much more likely to be true (high $P(H_0)$ relative to $P(H_1)$).
    This means the system will be more conservative in deciding $H_1$, requiring stronger evidence.
*   A **lower threshold** (smaller $\eta$) is required to decide $H_1$ if:
    *   The cost of a miss detection ($C_{01}$) is high relative to the cost of a false alarm ($C_{10}$).
    *   Hypothesis $H_1$ is much more likely to be true (high $P(H_1)$ relative to $P(H_0)$).
    This means the system will be more aggressive in deciding $H_1$, requiring weaker evidence.

In essence, $\eta$ determines the sensitivity of the decision rule to the likelihood ratio, ensuring that the overall expected cost (Bayes risk) is minimized.

---

### 11. Important Points to Remember

*   **Bayes Risk:** The expected total cost of making a decision in a hypothesis testing problem, considering prior probabilities and costs of different error types.
*   **Costs:** $C_{10}$ (False Alarm), $C_{01}$ (Miss Detection), $C_{00}$ (Correct $H_0$), $C_{11}$ (Correct $H_1$). Often $C_{00}=C_{11}=0$.
*   **Optimal Decision:** For each observation $x$, choose the decision that incurs the minimum immediate cost.
*   **Bayes Likelihood Ratio Test (BLRT):** The optimal decision rule is often expressed as a threshold test on the likelihood ratio $\Lambda(x) = p(x|H_1)/p(x|H_0)$.
*   **Bayes Threshold ($\eta$):** $\eta = \frac{C_{10} P(H_0)}{C_{01} P(H_1)}$ (for $C_{00}=C_{11}=0$). Decide $H_1$ if $\Lambda(x) \ge \eta$.
*   **Minimizing Bayes Risk:** The BLRT minimizes the total expected cost, providing the optimal performance criterion from a Bayesian perspective.
*   **Unified Framework:** Bayes risk allows the integration of prior knowledge and the relative importance of errors, making it a powerful tool for designing decision systems.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 12. Further Reading and References

*   **Kay, S. M. (2010). *Fundamentals of Statistical Signal Processing, Volume II: Detection Theory* (3rd ed.). Pearson.** (Core textbook)
*   **Van Trees, H. L. (2001). *Detection, Estimation, and Modulation Theory, Volume I* (2nd ed.). John Wiley & Sons.** (Excellent reference for theoretical depth)
*   **Hayes, M. H. (2018). *Statistical Digital Signal Processing and Modelling* (2nd ed.). John Wiley & Sons.** (Provides practical insights and examples)

This concludes the study notes on Bayes Risk. Understanding this concept is crucial for designing optimal decision systems that account for the real-world consequences of errors.