---
title: "multiple hypothesis testing."
subject: "ESTIMATION AND DETECTION"
module: "Module 3: Statistical Detection Theory I"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780febdf"
status: "completed"
scrapedAt: "2026-05-23T17:56:56.582Z"
---
# Module 3: Statistical Detection Theory I - Multiple Hypothesis Testing

## Introduction

This module delves into **Multiple Hypothesis Testing**, a fundamental concept in statistical detection theory. Unlike binary hypothesis testing where we decide between two possible states, multiple hypothesis testing involves choosing among **more than two** possible hypotheses. This is crucial in numerous engineering applications where we need to identify one out of several possibilities based on observed data.

**Connection to Course Outcomes:**

*   **CO3 (Illustrate the fundamentals of statistical detection principles):** This topic directly addresses the fundamentals of how we make decisions in the presence of uncertainty when there are multiple possibilities. (K2)
*   **CO4 (Apply various types of statistical decision rules):** We will explore the decision rules used to select the most likely hypothesis among many. (K3)

**Textbook References:**

*   **Kay, S.M., "Fundamentals of Statistical Signal Processing, Vol II: Detection Theory"**: Chapters on hypothesis testing, especially sections extending to multiple hypotheses.
*   **Van Trees, H.L., "Detection, Estimation, and Modulation Theory, Vol. I"**: Provides a foundational understanding of decision theory and hypothesis testing.

## 3.1 Problem Formulation

### 3.1.1 Defining the Hypotheses

In multiple hypothesis testing, we are presented with a set of $M$ possible hypotheses, denoted as $H_1, H_2, \ldots, H_M$. Our goal is to determine which of these hypotheses is most likely given the observed data.

*   **Hypothesis:** A statement about the underlying probability distribution of the observed data.
*   **Observed Data:** A set of measurements or a signal, often denoted as a vector $\mathbf{x}$.

**Example:**

Consider a radar system trying to detect different types of targets.

*   $H_1$: No target present.
*   $H_2$: Target of type A is present.
*   $H_3$: Target of type B is present.

The observed data $\mathbf{x}$ would be the radar returns.

### 3.1.2 Likelihood Function

The **likelihood function**, $p(\mathbf{x} | H_i)$, describes the probability of observing the data $\mathbf{x}$ given that hypothesis $H_i$ is true. This is a generalization of the likelihood function from binary hypothesis testing.

*   **Likelihood Function $p(\mathbf{x} | H_i)$:** The probability density function (PDF) of the observed data $\mathbf{x}$ assuming hypothesis $H_i$ is true.

### 3.1.3 Prior Probabilities

Similar to binary hypothesis testing, we can also incorporate prior knowledge about the likelihood of each hypothesis being true. These are denoted as $P(H_i)$.

*   **Prior Probability $P(H_i)$:** The probability that hypothesis $H_i$ is true before observing any data.
*   **Constraint:** $\sum_{i=1}^{M} P(H_i) = 1$.

**Example (continued):**

In the radar scenario, the prior probabilities might reflect the expected frequency of each target type or the probability of no target being present.

### 3.1.4 The Goal

The objective is to design a **decision rule** that assigns the observed data $\mathbf{x}$ to one of the $M$ hypotheses, choosing the hypothesis that is most likely to be true.

## 3.2 The Bayes Decision Rule

The Bayes decision rule is optimal in the sense that it minimizes the average probability of error. It is based on comparing the **posterior probabilities** of each hypothesis.

### 3.2.1 Posterior Probabilities

Using Bayes' theorem, we can calculate the posterior probability of each hypothesis given the observed data:

$$P(H_i | \mathbf{x}) = \frac{p(\mathbf{x} | H_i) P(H_i)}{p(\mathbf{x})}$$

where $p(\mathbf{x}) = \sum_{j=1}^{M} p(\mathbf{x} | H_j) P(H_j)$ is the marginal probability of the data.

### 3.2.2 The Decision Rule

The Bayes decision rule states that we should choose the hypothesis $H_k$ that maximizes the posterior probability:

$$\text{Decide } H_k \text{ if } P(H_k | \mathbf{x}) > P(H_i | \mathbf{x}) \text{ for all } i \neq k$$

This is equivalent to choosing the hypothesis that maximizes the product of the likelihood and the prior probability:

$$\text{Decide } H_k \text{ if } p(\mathbf{x} | H_k) P(H_k) > p(\mathbf{x} | H_i) P(H_i) \text{ for all } i \neq k$$

**Kay, Vol II, Chapter 1 (Introduction to Hypothesis Testing):** While Kay's Vol II starts with binary testing, the principles extend. The core idea is selecting the hypothesis that is "most probable" given the data and prior knowledge.

### 3.2.3 Simplifying with Likelihood Ratios

We can rewrite the Bayes decision rule in terms of **likelihood ratios**. Comparing $P(H_k | \mathbf{x})$ and $P(H_i | \mathbf{x})$:

$$\frac{P(H_k | \mathbf{x})}{P(H_i | \mathbf{x})} = \frac{p(\mathbf{x} | H_k) P(H_k) / p(\mathbf{x})}{p(\mathbf{x} | H_i) P(H_i) / p(\mathbf{x})} = \frac{p(\mathbf{x} | H_k) P(H_k)}{p(\mathbf{x} | H_i) P(H_i)}$$

So, the rule becomes:

$$\text{Decide } H_k \text{ if } \frac{p(\mathbf{x} | H_k) P(H_k)}{p(\mathbf{x} | H_i) P(H_i)} > 1 \text{ for all } i \neq k$$

This can be further simplified by taking logarithms:

$$\text{Decide } H_k \text{ if } \ln[p(\mathbf{x} | H_k)] + \ln[P(H_k)] > \ln[p(\mathbf{x} | H_i)] + \ln[P(H_i)] \text{ for all } i \neq k$$

Let $l_i(\mathbf{x}) = \ln[p(\mathbf{x} | H_i)]$. Then the rule is:

$$\text{Decide } H_k \text{ if } l_k(\mathbf{x}) + \ln[P(H_k)] > l_i(\mathbf{x}) + \ln[P(H_i)] \text{ for all } i \neq k$$

This means we choose the hypothesis $H_k$ that maximizes the quantity $l_k(\mathbf{x}) + \ln[P(H_k)]$. This is often referred to as the **log-posterior ratio test** or simply maximizing the log-posterior.

**Example:**

Suppose we have three hypotheses ($M=3$) with prior probabilities $P(H_1)=0.3$, $P(H_2)=0.5$, $P(H_3)=0.2$. Given data $\mathbf{x}$, we compute:

*   $\ln[p(\mathbf{x} | H_1)] = 5.2$, $\ln[P(H_1)] = \ln(0.3) \approx -1.2$
*   $\ln[p(\mathbf{x} | H_2)] = 6.5$, $\ln[P(H_2)] = \ln(0.5) \approx -0.7$
*   $\ln[p(\mathbf{x} | H_3)] = 4.8$, $\ln[P(H_3)] = \ln(0.2) \approx -1.6$

Calculate the log-posterior values:

*   $H_1$: $5.2 + (-1.2) = 4.0$
*   $H_2$: $6.5 + (-0.7) = 5.8$
*   $H_3$: $4.8 + (-1.6) = 3.2$

Since $5.8$ is the maximum value, we decide $H_2$.

**Van Trees, Vol I, Chapter 2 (Bayes' Rule and Decision Theory):** Van Trees provides a comprehensive treatment of Bayes' decision theory, including how to minimize average cost functions, which is directly related to minimizing probability of error when costs are uniform.

### 3.2.4 Minimizing Probability of Error

When costs are uniform (i.e., the cost of mistaking any hypothesis for another is the same, and the cost of a correct decision is zero), minimizing the average probability of error is equivalent to the Bayes decision rule of maximizing the posterior probability.

*   **Average Probability of Error ($P_e$):** The expected value of the probability of making a wrong decision.
*   **Bayes Risk:** The minimum possible average cost.

## 3.3 Maximum Likelihood (ML) Decision Rule

The Maximum Likelihood (ML) decision rule is a simplification that ignores prior probabilities. It chooses the hypothesis that maximizes the likelihood function.

### 3.3.1 The Decision Rule

$$\text{Decide } H_k \text{ if } p(\mathbf{x} | H_k) > p(\mathbf{x} | H_i) \text{ for all } i \neq k$$

Equivalently, in the log domain:

$$\text{Decide } H_k \text{ if } l_k(\mathbf{x}) > l_i(\mathbf{x}) \text{ for all } i \neq k$$

### 3.3.2 When is ML Optimal?

The ML decision rule is optimal (in the sense of minimizing probability of error) under the following conditions:

1.  **Uniform Prior Probabilities:** If $P(H_i) = 1/M$ for all $i$, then the $\ln[P(H_i)]$ terms are equal, and maximizing $p(\mathbf{x} | H_i)$ is equivalent to maximizing $p(\mathbf{x} | H_i) P(H_i)$.
2.  **Sufficient Statistics:** If there exist sufficient statistics for the problem, the ML rule based on these statistics is optimal. (While sufficient statistics are a deeper topic, the intuition is that they capture all relevant information from the data for the decision).

**Kay, Vol II, Chapter 1:** Kay discusses the ML rule as a simplified approach, particularly useful when priors are unknown or assumed uniform.

### 3.3.3 Example

Using the same data from the Bayes example:

*   $\ln[p(\mathbf{x} | H_1)] = 5.2$
*   $\ln[p(\mathbf{x} | H_2)] = 6.5$
*   $\ln[p(\mathbf{x} | H_3)] = 4.8$

The ML rule would decide $H_2$ because it has the highest log-likelihood value (6.5). In this specific example, since $H_2$ also had the highest log-posterior, ML and Bayes agree. However, this is not always the case.

**Comparison:**

*   **Bayes Rule:** Always optimal if prior probabilities and costs are known.
*   **ML Rule:** Optimal only under specific conditions (uniform priors, sufficient statistics). Simpler to implement when priors are unknown.

## 3.4 Neyman-Pearson Approach for Multiple Hypotheses

The Neyman-Pearson (NP) criterion for binary hypothesis testing is extended to multiple hypotheses to control the probability of Type I error (false alarm) while maximizing the probability of detection (or minimizing Type II error).

### 3.4.1 Generalizing the NP Criterion

In the binary case, we select a threshold $\eta$ to decide:

*   $H_1$ if $p(\mathbf{x} | H_1) > \eta p(\mathbf{x} | H_0)$
*   $H_0$ if $p(\mathbf{x} | H_1) < \eta p(\mathbf{x} | H_0)$

For multiple hypotheses, we want to control the probability of declaring any hypothesis $H_i$ when the true hypothesis is $H_0$ (or another null hypothesis). This is complex because there are multiple "false alarm" scenarios.

### 3.4.2 A Common NP-like Approach: Generalized Likelihood Ratio Test (GLRT)

A common approach that extends the spirit of the NP test is the **Generalized Likelihood Ratio Test (GLRT)**. While not directly controlling individual error probabilities as strictly as the NP lemma for binary case, it's widely used for composite hypotheses and can be adapted.

For simple hypotheses (where distributions are fully known), the GLRT often reduces to comparing likelihood ratios.

A more direct extension of controlling false alarms is to fix the probability of rejecting any true hypothesis $H_i$ when it is actually the case. This is often handled using concepts like the **union-union bound** or by setting thresholds on pairwise likelihood ratios.

**Key Idea:** Select a hypothesis $H_k$ if it is "sufficiently better" than all other hypotheses. This "sufficiently better" aspect is often defined by a threshold related to error control.

**Simultaneous Hypothesis Testing:**

One way to extend the NP idea is to consider pairwise likelihood ratios. We might decide $H_k$ if it is significantly more likely than all other $H_i$:

$$\text{Decide } H_k \text{ if } \frac{p(\mathbf{x} | H_k)}{p(\mathbf{x} | H_i)} > \eta_{ki} \quad \text{for all } i \neq k$$

The thresholds $\eta_{ki}$ would be chosen to control specific error probabilities.

**Bayes vs. NP:**

*   **Bayes:** Focuses on minimizing average error probability, requires priors.
*   **NP:** Focuses on controlling false alarm probability at a given level, often used for simple hypotheses or as a basis for more complex tests.

**Hayes, "Statistical Digital Signal Processing and Modelling", Chapter 10 (Hypothesis Testing):** Hayes might cover extensions of NP concepts or related decision criteria.

## 3.5 Performance Measures

Evaluating the performance of a multiple hypothesis test involves metrics similar to binary testing but applied across all hypotheses.

### 3.5.1 Confusion Matrix

A **confusion matrix** (or error matrix) is essential for visualizing performance. For $M$ hypotheses, it's an $M \times M$ matrix where:

*   Entry $(i, j)$ represents the probability of deciding $H_i$ when the true hypothesis is $H_j$.
*   The diagonal elements $(i, i)$ represent the probabilities of correct decisions (detection probabilities).
*   The off-diagonal elements $(i, j)$ where $i \neq j$ represent the probabilities of misdecision (error probabilities).

**Notation:** $P(\text{Decide } H_i | \text{True } H_j) = P_{ij}$.

**Example (3 hypotheses):**

| True/Decided | $H_1$     | $H_2$     | $H_3$     |
| :----------- | :-------- | :-------- | :-------- |
| $H_1$        | $P_{11}$  | $P_{21}$  | $P_{31}$  |
| $H_2$        | $P_{12}$  | $P_{22}$  | $P_{32}$  |
| $H_3$        | $P_{13}$  | $P_{23}$  | $P_{33}$  |

The sum of probabilities in each column should be 1: $\sum_{i=1}^{M} P_{ij} = 1$ for each $j$.

### 3.5.2 Probability of Error

*   **Overall Probability of Error ($P_e$):** The average probability of making any incorrect decision.
    $$P_e = \sum_{j=1}^{M} P(\text{Decide } H_j \text{ is false}) P(H_j)$$
    Alternatively, and more commonly in terms of the confusion matrix:
    $$P_e = \sum_{j=1}^{M} P(H_j) P(\text{Decide } H_j \text{ is false } | H_j)$$
    $$P_e = \sum_{j=1}^{M} P(H_j) \left( 1 - P(\text{Decide } H_j | H_j) \right)$$
    $$P_e = 1 - \sum_{j=1}^{M} P(H_j) P_{jj}$$

### 3.5.3 Average Detection Probability

This is the weighted average of the probabilities of correctly detecting each hypothesis.

$$P_{\text{detect, avg}} = \sum_{i=1}^{M} P(H_i) P_{ii}$$

This is the complement of the overall probability of error when priors are considered.

### 3.5.4 Type I and Type II Errors (Generalized)

*   **Type I Error (False Alarm):** Deciding $H_i$ when the true hypothesis is $H_0$ (or a specific null hypothesis).
*   **Type II Error (Miss):** Deciding $H_0$ (or a specific null hypothesis) when the true hypothesis is $H_i$.

In a general $M$-ary setting, it's more common to speak of:

*   **Probability of choosing $H_i$ given $H_j$ is true ($i \neq j$):** $P_{ij}$
*   **Probability of correctly choosing $H_j$:** $P_{jj}$

### 3.5.5 Receiver Operating Characteristic (ROC) Curves

While standard ROC curves are for binary detection (True Positive Rate vs. False Positive Rate), similar concepts can be extended for multiple hypotheses. One common approach is to plot:

*   **Probability of correctly detecting a specific hypothesis $H_i$ ($P_{ii}$) **
*   **against the probability of incorrectly declaring $H_i$ when some other hypothesis $H_j$ is true.**

This can lead to multi-dimensional ROC surfaces or pairwise ROC curves. For practical purposes, controlling an overall false alarm rate is often the goal.

## 3.6 Practice Questions and Exercises

Here are some questions to test your understanding.

**Question 1 (Conceptual):**

When would you choose the Bayes decision rule over the Maximum Likelihood (ML) decision rule for multiple hypothesis testing, and why?

**Answer:**
You would choose the Bayes decision rule when you have prior knowledge about the likelihood of each hypothesis occurring, and you want to minimize the overall average probability of error. The ML rule is optimal only when prior probabilities are uniform or when sufficient statistics exist such that ML estimation coincides with the Bayes solution. In situations with unequal prior probabilities or unequal costs for different types of errors, the Bayes rule provides a more robust and optimal solution.

**Question 2 (Application):**

Consider a system with three possible states of nature, $H_1$, $H_2$, and $H_3$. You collect data $\mathbf{x}$ and obtain the following log-likelihood values and prior probabilities:

*   $P(H_1) = 0.4$, $\ln(p(\mathbf{x} | H_1)) = -2.5$
*   $P(H_2) = 0.3$, $\ln(p(\mathbf{x} | H_2)) = -1.8$
*   $P(H_3) = 0.3$, $\ln(p(\mathbf{x} | H_3)) = -2.1$

Determine which hypothesis the Bayes decision rule would select.

**Answer:**
We need to calculate the log-posterior for each hypothesis: $\ln[p(\mathbf{x} | H_i)] + \ln[P(H_i)]$.

*   **For $H_1$:**
    $\ln[P(H_1)] = \ln(0.4) \approx -0.916$
    Log-posterior for $H_1 = -2.5 + (-0.916) = -3.416$

*   **For $H_2$:**
    $\ln[P(H_2)] = \ln(0.3) \approx -1.204$
    Log-posterior for $H_2 = -1.8 + (-1.204) = -3.004$

*   **For $H_3$:**
    $\ln[P(H_3)] = \ln(0.3) \approx -1.204$
    Log-posterior for $H_3 = -2.1 + (-1.204) = -3.304$

Comparing the log-posterior values: $-3.004$ (for $H_2$) is the highest.
Therefore, the Bayes decision rule would select **$H_2$**.

**Question 3 (Comparison):**

If the prior probabilities in Question 2 were all equal ($P(H_1) = P(H_2) = P(H_3) = 1/3$), which hypothesis would the ML rule select, and would it be the same as the Bayes rule?

**Answer:**
If the prior probabilities are equal, $P(H_1) = P(H_2) = P(H_3) = 1/3$, then $\ln[P(H_1)] = \ln[P(H_2)] = \ln[P(H_3)] = \ln(1/3) \approx -1.0986$.

The ML rule selects the hypothesis with the maximum log-likelihood:
*   $\ln(p(\mathbf{x} | H_1)) = -2.5$
*   $\ln(p(\mathbf{x} | H_2)) = -1.8$
*   $\ln(p(\mathbf{x} | H_3)) = -2.1$

The maximum log-likelihood is $-1.8$, corresponding to **$H_2$**.

Since the log-posterior values for the Bayes rule were:
*   $H_1$: $-3.416$
*   $H_2$: $-3.004$
*   $H_3$: $-3.304$

The Bayes rule also selected $H_2$.

In this case, with equal prior probabilities, the ML rule yields the same decision as the Bayes rule. This confirms the principle that ML is optimal when priors are uniform.

## 3.7 Key Points to Remember

*   **Multiple Hypothesis Testing:** Extending detection from two to more than two possibilities.
*   **Bayes Decision Rule:** Optimal rule that minimizes average probability of error. It maximizes the log-posterior probability: $\ln[p(\mathbf{x} | H_i)] + \ln[P(H_i)]$.
*   **Maximum Likelihood (ML) Rule:** Simpler rule that ignores priors, selecting the hypothesis with the maximum likelihood: $\ln[p(\mathbf{x} | H_i)]$.
*   **ML Optimality:** ML is optimal for minimum probability of error only when prior probabilities are uniform or when dealing with sufficient statistics.
*   **Confusion Matrix:** A vital tool for performance evaluation, showing $P(\text{Decide } H_i | \text{True } H_j)$.
*   **Probability of Error ($P_e$):** The overall probability of making an incorrect decision.
*   **Prior Probabilities:** Crucial for the Bayes rule, representing beliefs about hypothesis likelihoods before observing data.

This concludes Module 3. The next module will likely build upon these concepts, possibly exploring composite hypothesis testing or more advanced detection schemes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
