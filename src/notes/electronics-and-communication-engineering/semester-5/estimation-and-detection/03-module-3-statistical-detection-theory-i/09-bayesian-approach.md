---
title: "Bayesian approach"
subject: "ESTIMATION AND DETECTION"
module: "Module 3: Statistical Detection Theory I"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780febdc"
status: "completed"
scrapedAt: "2026-05-23T17:56:54.451Z"
---
# ESTIMATION AND DETECTION

## Module 3: Statistical Detection Theory I

## Topic: Bayesian Approach

---

### Introduction

This module introduces the fundamental principles of statistical detection theory, focusing on the Bayesian approach. This approach provides a powerful framework for making optimal decisions in the presence of uncertainty, by incorporating prior knowledge about the parameters involved. We will explore how to formulate detection problems in a Bayesian context and derive optimal decision rules.

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **LO1:** Understand the basic components of a statistical detection problem in a Bayesian framework. (CO3 - K2)
*   **LO2:** Define and explain prior probabilities, likelihood functions, and posterior probabilities in the context of Bayesian detection. (CO3 - K2)
*   **LO3:** Formulate the Bayesian hypothesis testing problem. (CO3 - K2)
*   **LO4:** Derive the Bayesian decision rule for hypothesis testing based on minimizing the expected risk. (CO4 - K3)
*   **LO5:** Understand the role of cost functions in Bayesian decision making. (CO4 - K3)

---

### Key Concepts and Definitions

#### 3.1 The General Detection Problem

The core of a detection problem is to decide which of several hypotheses, $H_0$ or $H_1$, is true, given some observed data. In a general setting, we have a set of observations $\mathbf{z}$ and we want to decide between two hypotheses:

*   $H_0$: A specific phenomenon (e.g., signal absent) is occurring.
*   $H_1$: An alternative phenomenon (e.g., signal present) is occurring.

The observations $\mathbf{z}$ are typically modeled as random variables whose probability distributions depend on which hypothesis is true.

**Example (Kay, Vol II, Chapter 2):** Radar detection.
*   $H_0$: Noise only is present.
*   $H_1$: Signal plus noise is present.
*   Observations $\mathbf{z}$: Measurements from the radar receiver.

#### 3.2 The Bayesian Approach

The Bayesian approach to detection (and estimation) is characterized by the use of **prior probabilities** and **posterior probabilities**.

*   **Prior Probabilities:** These represent our beliefs about the hypotheses *before* observing any data. They are denoted as $P(H_0)$ and $P(H_1)$.
    *   $\sum_{i} P(H_i) = 1$ for a set of $N$ hypotheses.
    *   In the case of two hypotheses: $P(H_0) + P(H_1) = 1$.

*   **Likelihood Function:** This is the probability distribution of the observed data given each hypothesis. It's denoted as $p(\mathbf{z}|H_i)$.
    *   For $H_0$: $p(\mathbf{z}|H_0)$
    *   For $H_1$: $p(\mathbf{z}|H_1)$

*   **Posterior Probabilities:** These represent our updated beliefs about the hypotheses *after* observing the data $\mathbf{z}$. They are calculated using Bayes' Theorem.
    *   Bayes' Theorem: $P(H_i|\mathbf{z}) = \frac{p(\mathbf{z}|H_i) P(H_i)}{p(\mathbf{z})}$
    *   The term $p(\mathbf{z})$ is the marginal probability of the data, also known as the evidence:
        $p(\mathbf{z}) = \sum_{j} p(\mathbf{z}|H_j) P(H_j)$
    *   For two hypotheses: $p(\mathbf{z}) = p(\mathbf{z}|H_0) P(H_0) + p(\mathbf{z}|H_1) P(H_1)$.

The goal of Bayesian detection is to use the posterior probabilities to make an optimal decision.

**Key Point:** The Bayesian approach explicitly incorporates prior knowledge through prior probabilities, which can significantly influence the decision, especially when data is scarce or ambiguous.

#### 3.3 Bayesian Hypothesis Testing

In Bayesian hypothesis testing, we aim to choose the hypothesis that is most likely given the observed data and our prior beliefs. This is done by comparing the posterior probabilities $P(H_0|\mathbf{z})$ and $P(H_1|\mathbf{z})$.

**Decision Rule:**
*   If $P(H_1|\mathbf{z}) > P(H_0|\mathbf{z})$, decide $H_1$.
*   If $P(H_0|\mathbf{z}) > P(H_1|\mathbf{z})$, decide $H_0$.
*   If $P(H_0|\mathbf{z}) = P(H_1|\mathbf{z})$, the decision can be arbitrary (e.g., based on a tie-breaking rule).

This decision rule can be rewritten by substituting Bayes' Theorem:

$\frac{p(\mathbf{z}|H_1) P(H_1)}{p(\mathbf{z})} > \frac{p(\mathbf{z}|H_0) P(H_0)}{p(\mathbf{z})}$

Since $p(\mathbf{z})$ is positive, we can multiply both sides by it:

$p(\mathbf{z}|H_1) P(H_1) > p(\mathbf{z}|H_0) P(H_0)$

This inequality is often expressed in terms of the **Likelihood Ratio Test (LRT)**. The **Bayes Factor** is defined as $\frac{P(H_1)}{P(H_0)}$. The **Likelihood Ratio** is $\Lambda(\mathbf{z}) = \frac{p(\mathbf{z}|H_1)}{p(\mathbf{z}|H_0)}$.

The decision rule becomes:

*   Decide $H_1$ if $\Lambda(\mathbf{z}) > \frac{P(H_0)}{P(H_1)}$
*   Decide $H_0$ if $\Lambda(\mathbf{z}) < \frac{P(H_0)}{P(H_1)}$
*   Indeterminate if $\Lambda(\mathbf{z}) = \frac{P(H_0)}{P(H_1)}$

The quantity $\frac{P(H_0)}{P(H_1)}$ is called the **threshold** or **prior odds threshold**.

**(Reference: Kay, Vol II, Chapter 2, Section 2.2)**

#### 3.4 Minimizing the Bayes Risk

A more general and powerful way to derive Bayesian decision rules is by minimizing the **Bayes Risk**. The Bayes Risk is the expected value of the **cost** incurred by a particular decision rule.

*   **Cost Function (Loss Function):** Assigns a cost to each possible outcome (decision made vs. true hypothesis).
    *   $C(H_i, \text{decision } j)$: Cost incurred if hypothesis $H_i$ is true and decision $j$ is made.
    *   Common costs for two hypotheses:
        *   $C(H_0, \text{dec } H_0)$: Cost of deciding $H_0$ when $H_0$ is true (correct decision). Usually 0.
        *   $C(H_1, \text{dec } H_0)$: Cost of deciding $H_0$ when $H_1$ is true (Type I error or false alarm).
        *   $C(H_0, \text{dec } H_1)$: Cost of deciding $H_1$ when $H_0$ is true (Type II error or miss).
        *   $C(H_1, \text{dec } H_1)$: Cost of deciding $H_1$ when $H_1$ is true (correct decision). Usually 0.

*   **Decision Rule $\delta(\mathbf{z})$:** A function that maps observed data $\mathbf{z}$ to a decision (e.g., $H_0$ or $H_1$).

*   **Bayes Risk ($R$):** The expected cost over all possible observations, averaged with respect to the prior probabilities of the hypotheses.

    $R(\delta) = \sum_{i} \int_{\mathcal{Z}} C(H_i, \delta(\mathbf{z})) p(\mathbf{z}|H_i) P(H_i) d\mathbf{z}$

    For a two-hypothesis problem with a decision rule that maps $\mathbf{z}$ to either $H_0$ or $H_1$:
    Let $\mathcal{R}_0 = \{\mathbf{z} | \delta(\mathbf{z}) = H_0\}$ (region where we decide $H_0$)
    Let $\mathcal{R}_1 = \{\mathbf{z} | \delta(\mathbf{z}) = H_1\}$ (region where we decide $H_1$)

    $R(\delta) = \int_{\mathcal{R}_0} C(H_0, H_0) p(\mathbf{z}|H_0) P(H_0) d\mathbf{z} + \int_{\mathcal{R}_1} C(H_1, H_0) p(\mathbf{z}|H_0) P(H_0) d\mathbf{z}$
    $+ \int_{\mathcal{R}_0} C(H_0, H_1) p(\mathbf{z}|H_1) P(H_1) d\mathbf{z} + \int_{\mathcal{R}_1} C(H_1, H_1) p(\mathbf{z}|H_1) P(H_1) d\mathbf{z}$

    To minimize the risk, for each observation $\mathbf{z}$, we should choose the decision that incurs the minimum *conditional risk*.

    The conditional risk of deciding $H_0$ given $\mathbf{z}$ is:
    $R(H_0|\mathbf{z}) = C(H_0, H_0) P(H_0|\mathbf{z}) + C(H_1, H_0) P(H_1|\mathbf{z})$

    The conditional risk of deciding $H_1$ given $\mathbf{z}$ is:
    $R(H_1|\mathbf{z}) = C(H_0, H_1) P(H_0|\mathbf{z}) + C(H_1, H_1) P(H_1|\mathbf{z})$

    **Bayesian Decision Rule:** Decide $H_1$ if $R(H_1|\mathbf{z}) < R(H_0|\mathbf{z})$, otherwise decide $H_0$.

    Substituting the expressions for conditional risk:
    $C(H_0, H_1) P(H_0|\mathbf{z}) + C(H_1, H_1) P(H_1|\mathbf{z}) < C(H_0, H_0) P(H_0|\mathbf{z}) + C(H_1, H_0) P(H_1|\mathbf{z})$

    Rearranging terms:
    $(C(H_1, H_1) - C(H_1, H_0)) P(H_1|\mathbf{z}) < (C(H_0, H_0) - C(H_0, H_1)) P(H_0|\mathbf{z})$

    Using $P(H_i|\mathbf{z}) = \frac{p(\mathbf{z}|H_i) P(H_i)}{p(\mathbf{z})}$:

    $(C(H_1, H_1) - C(H_1, H_0)) \frac{p(\mathbf{z}|H_1) P(H_1)}{p(\mathbf{z})} < (C(H_0, H_0) - C(H_0, H_1)) \frac{p(\mathbf{z}|H_0) P(H_0)}{p(\mathbf{z})}$

    Multiply by $p(\mathbf{z})$ (which is positive):

    $(C(H_1, H_1) - C(H_1, H_0)) p(\mathbf{z}|H_1) P(H_1) < (C(H_0, H_0) - C(H_0, H_1)) p(\mathbf{z}|H_0) P(H_0)$

    Let's define the costs more conventionally:
    *   $C_{00} = C(H_0, H_0)$ (Cost of correct $H_0$ decision)
    *   $C_{10} = C(H_1, H_0)$ (Cost of deciding $H_0$ when $H_1$ is true - miss)
    *   $C_{01} = C(H_0, H_1)$ (Cost of deciding $H_1$ when $H_0$ is true - false alarm)
    *   $C_{11} = C(H_1, H_1)$ (Cost of correct $H_1$ decision)

    The inequality becomes:
    $(C_{11} - C_{10}) p(\mathbf{z}|H_1) P(H_1) < (C_{00} - C_{01}) p(\mathbf{z}|H_0) P(H_0)$

    Rearranging to get the likelihood ratio:
    $\frac{p(\mathbf{z}|H_1)}{p(\mathbf{z}|H_0)} > \frac{(C_{00} - C_{01}) P(H_0)}{(C_{11} - C_{10}) P(H_1)}$

    This is the generalized likelihood ratio test threshold.

    **(Reference: Kay, Vol II, Chapter 2, Section 2.3; Van Trees, Vol I, Chapter 2)**

#### 3.5 Special Case: Minimum Probability of Error (Bayes Detector)

A very common cost function is to minimize the probability of error. In this case:

*   $C_{00} = 0$ (No cost for a correct $H_0$ decision)
*   $C_{11} = 0$ (No cost for a correct $H_1$ decision)
*   $C_{10} = 1$ (Cost of a miss)
*   $C_{01} = 1$ (Cost of a false alarm)

With these costs, the total risk becomes the probability of error:
$R(\delta) = P(\text{error}) = P(\text{decide } H_1 \text{ and } H_0 \text{ is true}) + P(\text{decide } H_0 \text{ and } H_1 \text{ is true})$
$R(\delta) = \int_{\mathcal{R}_1} p(\mathbf{z}|H_0) P(H_0) d\mathbf{z} + \int_{\mathcal{R}_0} p(\mathbf{z}|H_1) P(H_1) d\mathbf{z}$

The decision rule based on minimizing conditional risk simplifies considerably:
$R(H_0|\mathbf{z}) = 0 \cdot P(H_0|\mathbf{z}) + 1 \cdot P(H_1|\mathbf{z}) = P(H_1|\mathbf{z})$
$R(H_1|\mathbf{z}) = 1 \cdot P(H_0|\mathbf{z}) + 0 \cdot P(H_1|\mathbf{z}) = P(H_0|\mathbf{z})$

So, the rule becomes:
*   Decide $H_1$ if $P(H_1|\mathbf{z}) < P(H_0|\mathbf{z})$
*   Decide $H_0$ if $P(H_0|\mathbf{z}) < P(H_1|\mathbf{z})$

This is equivalent to saying:
*   Decide $H_1$ if $P(H_1|\mathbf{z}) > P(H_0|\mathbf{z})$ to minimize the probability of error.

This leads back to the maximum a posteriori (MAP) decision rule:
*   Decide $H_1$ if $P(H_1|\mathbf{z}) > P(H_0|\mathbf{z})$
*   Decide $H_0$ if $P(H_0|\mathbf{z}) > P(H_1|\mathbf{z})$

Using the likelihood ratio:
Decide $H_1$ if $\frac{p(\mathbf{z}|H_1)}{p(\mathbf{z}|H_0)} > \frac{P(H_0)}{P(H_1)}$

This is the **Bayes detector for minimum probability of error**. It is also referred to as the **MAP detector**.

**(Reference: Kay, Vol II, Chapter 2, Section 2.3.1)**

#### 3.6 Example: Simple Detection Problem

**Problem:**
We have a single observation $z$.
*   $H_0$: $z \sim \mathcal{N}(0, 1)$ (Gaussian with mean 0, variance 1)
*   $H_1$: $z \sim \mathcal{N}(m, 1)$ (Gaussian with mean $m>0$, variance 1)
*   Prior probabilities: $P(H_0) = P_0$, $P(H_1) = P_1 = 1 - P_0$.

We want to find the Bayesian decision rule that minimizes the probability of error.

**Solution:**
1.  **Likelihood Functions:**
    *   $p(z|H_0) = \frac{1}{\sqrt{2\pi}} e^{-z^2/2}$
    *   $p(z|H_1) = \frac{1}{\sqrt{2\pi}} e^{-(z-m)^2/2}$

2.  **Likelihood Ratio:**
    $\Lambda(z) = \frac{p(z|H_1)}{p(z|H_0)} = \frac{\frac{1}{\sqrt{2\pi}} e^{-(z-m)^2/2}}{\frac{1}{\sqrt{2\pi}} e^{-z^2/2}} = e^{-(z-m)^2/2 + z^2/2}$
    $\Lambda(z) = e^{- (z^2 - 2zm + m^2)/2 + z^2/2} = e^{(2zm - m^2)/2} = e^{zm - m^2/2}$

3.  **Bayes Decision Rule (Min Probability of Error):**
    Decide $H_1$ if $\Lambda(z) > \frac{P(H_0)}{P(H_1)} = \frac{P_0}{P_1}$.

    $e^{zm - m^2/2} > \frac{P_0}{P_1}$

    Take the natural logarithm of both sides:
    $zm - \frac{m^2}{2} > \ln\left(\frac{P_0}{P_1}\right)$

    Since $m > 0$, we can divide by $m$:
    $z - \frac{m}{2} > \frac{1}{m} \ln\left(\frac{P_0}{P_1}\right)$

    $z > \frac{m}{2} + \frac{1}{m} \ln\left(\frac{P_0}{P_1}\right)$

    Let the threshold be $\eta = \frac{m}{2} + \frac{1}{m} \ln\left(\frac{P_0}{P_1}\right)$.

    **Decision Rule:**
    *   Decide $H_1$ if $z > \eta$.
    *   Decide $H_0$ if $z \le \eta$.

    This rule essentially splits the observation space based on a threshold. The threshold depends on the signal strength ($m$) and the prior probabilities ($P_0, P_1$).

**(Reference: Kay, Vol II, Chapter 2, Example 2.1)**

#### 3.7 Relationship to Other Decision Rules

*   **Maximum Likelihood (ML) Detector:** The ML detector chooses the hypothesis that maximizes the likelihood function $p(\mathbf{z}|H_i)$, ignoring prior probabilities. It's equivalent to the Bayes detector when $P(H_0) = P(H_1) = 0.5$ and all costs are equal (e.g., 0 for correct, 1 for error).
    *   ML decision rule: Decide $H_1$ if $p(\mathbf{z}|H_1) > p(\mathbf{z}|H_0)$, which is $\Lambda(\mathbf{z}) > 1$.
    *   This corresponds to the Bayes detector threshold $\frac{P_0}{P_1} = 1$ when $P_0 = P_1$.

*   **Maximum A Posteriori (MAP) Detector:** This is precisely the Bayes detector for minimum probability of error, as derived above. It maximizes the posterior probability $P(H_i|\mathbf{z})$.

**(Reference: Kay, Vol II, Chapter 2, Section 2.3.1)**

#### 3.8 Choosing Cost Functions

The choice of cost functions is crucial in Bayesian decision theory. It reflects the relative importance of different types of errors.

*   If a miss ($C_{10}$) is much more costly than a false alarm ($C_{01}$), the cost function will reflect this. For example, $C_{10} \gg C_{01}$.
*   If $C_{00} = C_{11} = 0$, the threshold $\frac{(C_{00} - C_{01}) P(H_0)}{(C_{11} - C_{10}) P(H_1)} = \frac{-C_{01} P(H_0)}{-C_{10} P(H_1)} = \frac{C_{01}}{C_{10}} \frac{P(H_0)}{P(H_1)}$.
    *   If $C_{01} = C_{10}$, we get the MAP detector.
    *   If $C_{10} > C_{01}$ (miss is more costly), then $\frac{C_{01}}{C_{10}} < 1$, making the threshold lower. A lower threshold for $H_1$ makes it easier to decide $H_1$, which is consistent with avoiding the more costly miss.

**(Reference: Van Trees, Vol I, Chapter 2)**

---

### Summary of Key Points

*   The Bayesian approach incorporates **prior probabilities** into the decision-making process.
*   **Bayes' Theorem** is used to update prior probabilities to **posterior probabilities** after observing data.
*   The **Bayes Risk** is the expected cost of a decision rule, averaged over all possible observations and hypotheses.
*   The optimal Bayesian decision rule minimizes the Bayes Risk by comparing the **conditional risks** of each decision given the observed data.
*   For two hypotheses, the Bayesian decision rule can be expressed in terms of the **likelihood ratio** and a threshold that depends on prior probabilities and costs.
*   The **MAP detector** is a special case of the Bayes detector that minimizes the probability of error (equal costs for false alarms and misses).

---

### Practice Questions and Exercises

**Question 1 (Conceptual):**
Explain the difference between prior probabilities and posterior probabilities in the context of Bayesian detection. How does observing data change our beliefs about the hypotheses?

**Answer:**
Prior probabilities represent our initial beliefs about the likelihood of each hypothesis being true *before* any data is observed. Posterior probabilities are our updated beliefs *after* observing the data. Bayes' Theorem uses the likelihood function (how probable the data is under each hypothesis) and the prior probabilities to compute these posterior probabilities. Observing data helps to refine our beliefs, making the posterior probabilities more informed.

---

**Question 2 (Derivation):**
Given the following:
*   $H_0$: $z \sim \mathcal{N}(0, 4)$
*   $H_1$: $z \sim \mathcal{N}(2, 4)$
*   $P(H_0) = 0.7$, $P(H_1) = 0.3$
*   Cost function: $C_{00}=0$, $C_{11}=0$, $C_{10}=2$ (miss), $C_{01}=1$ (false alarm).

Derive the Bayesian decision rule for detecting $H_1$ vs $H_0$ that minimizes the Bayes risk. Express your answer in terms of a threshold on the observation $z$.

**Answer:**
1.  **Likelihoods:**
    *   $p(z|H_0) = \frac{1}{\sqrt{2\pi \cdot 4}} e^{-(z-0)^2/(2 \cdot 4)} = \frac{1}{2\sqrt{2\pi}} e^{-z^2/8}$
    *   $p(z|H_1) = \frac{1}{\sqrt{2\pi \cdot 4}} e^{-(z-2)^2/(2 \cdot 4)} = \frac{1}{2\sqrt{2\pi}} e^{-(z-2)^2/8}$

2.  **Likelihood Ratio:**
    $\Lambda(z) = \frac{p(z|H_1)}{p(z|H_0)} = \frac{\frac{1}{2\sqrt{2\pi}} e^{-(z-2)^2/8}}{\frac{1}{2\sqrt{2\pi}} e^{-z^2/8}} = e^{-(z^2 - 4z + 4)/8 + z^2/8}$
    $\Lambda(z) = e^{(-z^2 + 4z - 4 + z^2)/8} = e^{(4z - 4)/8} = e^{(z-1)/2}$

3.  **Bayesian Decision Rule Threshold:**
    The general threshold is $\frac{(C_{00} - C_{01}) P(H_0)}{(C_{11} - C_{10}) P(H_1)}$.
    Substituting the costs and priors:
    Threshold $= \frac{(0 - 1) \cdot 0.7}{(0 - 2) \cdot 0.3} = \frac{-0.7}{-0.6} = \frac{7}{6}$.

4.  **Decision Rule:**
    Decide $H_1$ if $\Lambda(z) > \text{Threshold}$.
    $e^{(z-1)/2} > \frac{7}{6}$

    Take the natural logarithm:
    $\frac{z-1}{2} > \ln\left(\frac{7}{6}\right)$
    $z-1 > 2 \ln\left(\frac{7}{6}\right)$
    $z > 1 + 2 \ln\left(\frac{7}{6}\right)$

    Calculate the threshold value:
    $\ln(7/6) \approx 0.15415$
    Threshold $\approx 1 + 2 \cdot 0.15415 = 1 + 0.3083 = 1.3083$.

    **Decision Rule:** Decide $H_1$ if $z > 1.3083$. Otherwise, decide $H_0$.

---

**Question 3 (Application):**
In a communication system, a binary signal is transmitted.
*   $H_0$: Symbol '0' is transmitted.
*   $H_1$: Symbol '1' is transmitted.
The received signal is $z$.
Assume $z$ can be modeled as:
*   $H_0$: $z = n$, where $n \sim \mathcal{N}(0, \sigma^2)$
*   $H_1$: $z = A + n$, where $A$ is the signal amplitude and $n \sim \mathcal{N}(0, \sigma^2)$.

Assume $P(H_0) = P(H_1) = 0.5$. If we want to minimize the probability of error, what is the decision rule? What if a miss (deciding $H_0$ when $H_1$ is true) is twice as costly as a false alarm (deciding $H_1$ when $H_0$ is true)?

**Answer:**
Case 1: Minimize Probability of Error (MAP Detector)
*   $p(z|H_0) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-z^2/(2\sigma^2)}$
*   $p(z|H_1) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-(z-A)^2/(2\sigma^2)}$
*   $\Lambda(z) = \frac{p(z|H_1)}{p(z|H_0)} = e^{-(z-A)^2/(2\sigma^2) + z^2/(2\sigma^2)} = e^{(-z^2 + 2Az - A^2 + z^2)/(2\sigma^2)} = e^{(2Az - A^2)/(2\sigma^2)}$
*   Threshold for MAP: $\frac{P(H_0)}{P(H_1)} = \frac{0.5}{0.5} = 1$.
*   Decision: Decide $H_1$ if $\Lambda(z) > 1$.
    $e^{(2Az - A^2)/(2\sigma^2)} > 1$
    $\frac{2Az - A^2}{2\sigma^2} > 0$
    $2Az - A^2 > 0$ (assuming $\sigma^2 > 0$)
    $2Az > A^2$
    Since $A$ is the signal amplitude, assume $A > 0$.
    $z > \frac{A}{2}$.
    **Decision Rule (Min Error):** Decide $H_1$ if $z > A/2$, otherwise decide $H_0$.

Case 2: Miss is twice as costly as a false alarm.
*   $C_{00}=0, C_{11}=0$. Let $C_{01} = 1$ (false alarm cost), then $C_{10} = 2$ (miss cost).
*   Threshold $= \frac{C_{01}}{C_{10}} \frac{P(H_0)}{P(H_1)} = \frac{1}{2} \frac{0.5}{0.5} = \frac{1}{2}$.
*   Decision: Decide $H_1$ if $\Lambda(z) > 1/2$.
    $e^{(2Az - A^2)/(2\sigma^2)} > \frac{1}{2}$
    $\frac{2Az - A^2}{2\sigma^2} > \ln(1/2) = -\ln(2)$
    $2Az - A^2 > -2\sigma^2 \ln(2)$
    $2Az > A^2 - 2\sigma^2 \ln(2)$
    $z > \frac{A^2 - 2\sigma^2 \ln(2)}{2A} = \frac{A}{2} - \frac{\sigma^2 \ln(2)}{A}$.

    **Decision Rule (Weighted Costs):** Decide $H_1$ if $z > \frac{A}{2} - \frac{\sigma^2 \ln(2)}{A}$, otherwise decide $H_0$.
    Since $\frac{\sigma^2 \ln(2)}{A} > 0$, the threshold is lower compared to the minimum error case. This makes it easier to decide $H_1$, reflecting the higher cost of a miss.

---

### Important Points to Remember

*   **Prior Knowledge is Key:** The Bayesian approach explicitly utilizes prior information about the hypotheses.
*   **Risk Minimization:** The foundation of Bayesian decision making is minimizing the expected cost (risk).
*   **Likelihood Ratio Test:** The general form of Bayesian decision rules for two hypotheses involves comparing the likelihood ratio to a threshold.
*   **Cost Function Impact:** The choice of cost function determines the trade-off between different types of errors and directly influences the decision threshold.
*   **MAP vs. ML:** The MAP detector is optimal for minimizing probability of error, while the ML detector is a special case under equal priors and costs.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### Further Reading

*   **Kay, S. M. (2010).** *Fundamentals of Statistical Signal Processing, Vol II: Detection Theory*. Pearson. (Chapter 2 is particularly relevant).
*   **Van Trees, H. L. (2001).** *Detection, Estimation, and Modulation Theory, Vol. I*. John Wiley & Sons. (Chapter 2 provides a comprehensive treatment of Bayesian detection).
*   **Hayes, M. H. (2018).** *Statistical Digital Signal Processing and Modelling*. John Wiley & Sons. (Provides foundational concepts).

---
**End of Topic Notes**