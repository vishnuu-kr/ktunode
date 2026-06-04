---
title: "Hypothesis testing"
subject: "ESTIMATION AND DETECTION"
module: "Module 3: Statistical Detection Theory I"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780febd7"
status: "completed"
scrapedAt: "2026-05-23T17:56:50.963Z"
---
# Module 3: Statistical Detection Theory I - Hypothesis Testing

## Introduction

This module introduces the fundamental concepts of statistical hypothesis testing, a cornerstone of statistical detection theory. We will explore how to make decisions about the underlying state of a system based on observed data. This forms the basis for many signal processing applications, such as identifying the presence of a signal, classifying objects, or diagnosing faults.

**Course Outcomes Alignment:**

*   **CO3 (K2):** Illustrate the fundamentals of statistical detection principles used in various engineering problems. (This module directly addresses this by explaining the core principles of hypothesis testing.)
*   **CO4 (K3):** Apply various types of statistical decision rules in engineering applications. (While this module focuses on the principles, it lays the groundwork for applying decision rules which will be covered in subsequent modules.)

**Textbook References:**

*   Kay, S.M. (2010). *Fundamentals of Statistical Signal Processing, Vol II: Detection Theory*. Pearson. (Primary reference)
*   Van Trees, H.L. (2001). *Detection, Estimation, and Modulation Theory, Vol. I*. John Wiley & Sons. (Supporting reference)

---

## 1. Fundamentals of Hypothesis Testing

Hypothesis testing is a formal procedure for deciding between two competing statements about a statistical model. These statements are called hypotheses.

### 1.1 Defining Hypotheses

We typically deal with two hypotheses:

*   **Null Hypothesis ($H_0$)**: This is the statement we are trying to find evidence against. It usually represents the "no effect" or "baseline" state.
*   **Alternative Hypothesis ($H_1$)**: This is the statement that we will accept if we find sufficient evidence to reject the null hypothesis. It usually represents the "effect" or "changed" state.

**Definition:** A **hypothesis** is a statement about the probability distribution of a random variable or a set of random variables.

**Key Concept:** The goal of hypothesis testing is to use observed data to decide whether to reject $H_0$ in favor of $H_1$, or to fail to reject $H_0$.

### 1.2 The Observation Model

In statistical detection, we assume that we observe a random variable (or a set of random variables), denoted by $\mathbf{x}$, whose probability distribution depends on which hypothesis is true.

**General Observation Model:**
We observe $\mathbf{x} \in \mathcal{X}$, where $\mathcal{X}$ is the observation space. The probability distribution of $\mathbf{x}$ is given by $p(\mathbf{x} | H_0)$ under $H_0$ and $p(\mathbf{x} | H_1)$ under $H_1$.

**Example:** Consider detecting the presence of a known signal $s(t)$ in additive white Gaussian noise (AWGN).
*   Under $H_0$ (no signal): The observation is just noise, $\mathbf{x}(t) = n(t)$, where $n(t) \sim \mathcal{N}(0, N_0/2)$.
*   Under $H_1$ (signal present): The observation is signal plus noise, $\mathbf{x}(t) = s(t) + n(t)$.

### 1.3 Decision Rule

A **decision rule** is a rule that specifies, for every possible observation $\mathbf{x}$, which hypothesis to choose.

**General Form of a Decision Rule:**
We choose $H_1$ if $\mathbf{x}$ falls into a certain region $\mathcal{R}_1$ in the observation space $\mathcal{X}$, and we choose $H_0$ if $\mathbf{x}$ falls into the complementary region $\mathcal{R}_0 = \mathcal{X} \setminus \mathcal{R}_1$.

**Classification of Errors:**

When making a decision, there are two types of errors we can commit:

*   **Type I Error (False Alarm)**: Rejecting $H_0$ when $H_0$ is actually true.
    *   Probability of Type I error is denoted by $\alpha$ or $P(\text{reject } H_0 | H_0 \text{ true})$.
*   **Type II Error (Missed Detection)**: Failing to reject $H_0$ when $H_1$ is actually true.
    *   Probability of Type II error is denoted by $\beta$ or $P(\text{fail to reject } H_0 | H_1 \text{ true})$.

**Important Point:** The goal in hypothesis testing is to minimize these errors, but there is often a trade-off between them.

### 1.4 Performance Measures

The performance of a hypothesis test is evaluated by the probabilities of these errors.

*   **Probability of Correct Decision**:
    *   $P(\text{choose } H_0 | H_0 \text{ true}) = 1 - \alpha$
    *   $P(\text{choose } H_1 | H_1 \text{ true}) = 1 - \beta$ (This is also called the **Power** of the test).

**Textbook Reference:** Kay (Vol II), Chapter 2.1: Introduction to Hypothesis Testing.

---

## 2. Composite vs. Simple Hypotheses

The nature of the hypotheses significantly impacts the testing procedure.

### 2.1 Simple Hypothesis

A hypothesis is **simple** if it completely specifies the probability distribution of the observations.

**Example:**
*   $H_0$: The data $\mathbf{x}$ is drawn from a Gaussian distribution with mean $\mu_0$ and variance $\sigma_0^2$. ($p(\mathbf{x}|H_0) = \mathcal{N}(\mu_0, \sigma_0^2)$)
*   $H_1$: The data $\mathbf{x}$ is drawn from a Gaussian distribution with mean $\mu_1$ and variance $\sigma_1^2$. ($p(\mathbf{x}|H_1) = \mathcal{N}(\mu_1, \sigma_1^2)$)

### 2.2 Composite Hypothesis

A hypothesis is **composite** if it does not completely specify the probability distribution. This means the distribution depends on one or more unknown parameters.

**Example:**
*   $H_0$: The data $\mathbf{x}$ is drawn from a Gaussian distribution with mean $\mu$, where $\mu$ is unknown, and known variance $\sigma^2$. ($p(\mathbf{x}|H_0) = \mathcal{N}(\mu, \sigma^2)$ for some unknown $\mu$)
*   $H_1$: The data $\mathbf{x}$ is drawn from a Gaussian distribution with mean $\mu$, where $\mu > \mu_0$, and known variance $\sigma^2$. ($p(\mathbf{x}|H_1) = \mathcal{N}(\mu, \sigma^2)$ for some unknown $\mu > \mu_0$)

**Challenge:** Testing composite hypotheses is generally more difficult than testing simple hypotheses because we need to account for the unknown parameters. Techniques like nuisance parameter elimination or generalized likelihood ratio tests are often employed.

**Textbook Reference:** Kay (Vol II), Chapter 2.1.1: Simple vs. Composite Hypotheses.

---

## 3. The Neyman-Pearson Lemma (for Simple Hypotheses)

The Neyman-Pearson lemma provides the optimal solution for testing simple hypotheses, in the sense that it maximizes the probability of detection (power) for a given probability of false alarm.

### 3.1 The Likelihood Ratio

The core of the Neyman-Pearson lemma is the **likelihood ratio**.

**Definition:** The **likelihood ratio**, denoted by $\Lambda(\mathbf{x})$, is the ratio of the probability density functions (or probability mass functions for discrete data) under the two hypotheses:
$$ \Lambda(\mathbf{x}) = \frac{p(\mathbf{x} | H_1)}{p(\mathbf{x} | H_0)} $$

**Decision Rule based on Likelihood Ratio:**
We choose $H_1$ if $\Lambda(\mathbf{x}) > \eta$ and $H_0$ if $\Lambda(\mathbf{x}) < \eta$, where $\eta$ is a threshold.

### 3.2 The Neyman-Pearson Lemma Statement

For the problem of testing a simple null hypothesis $H_0$ against a simple alternative hypothesis $H_1$, the most powerful test for a given significance level $\alpha$ (probability of Type I error) is based on the likelihood ratio.

**Neyman-Pearson Lemma:** Given a significance level $\alpha_0 \in [0, 1]$, there exists a test that maximizes $P(\text{reject } H_0 | H_1 \text{ true})$ (the power, $1-\beta$) subject to the constraint $P(\text{reject } H_0 | H_0 \text{ true}) \leq \alpha_0$. This test is the **likelihood ratio test**:

Choose $H_1$ if $\Lambda(\mathbf{x}) > \eta$
Choose $H_0$ if $\Lambda(\mathbf{x}) < \eta$
(If $\Lambda(\mathbf{x}) = \eta$, flip a coin with probability of heads equal to $\frac{\alpha_0 - P(\Lambda(\mathbf{x}) < \eta | H_0)}{P(\Lambda(\mathbf{x}) = \eta | H_0)}$ to decide.)

The threshold $\eta$ is chosen such that $P(\Lambda(\mathbf{x}) > \eta | H_0) = \alpha_0$.

**Intuition:** The likelihood ratio favors $H_1$ when the observed data $\mathbf{x}$ is more likely to have occurred under $H_1$ than under $H_0$.

### 3.3 Example: Detection of a Known Signal in AWGN

Consider detecting a known signal $s(t)$ in AWGN.
*   $H_0$: $\mathbf{x}(t) = n(t)$
*   $H_1$: $\mathbf{x}(t) = s(t) + n(t)$
where $n(t) \sim \mathcal{N}(0, N_0/2)$. Assume the observation is over a time interval $[0, T]$.

The probability density functions are Gaussian. For discrete time, let $\mathbf{x} = [x_1, x_2, \dots, x_N]$ and $s = [s_1, s_2, \dots, s_N]$.
$p(\mathbf{x} | H_0) = \left(\frac{1}{\sqrt{2\pi\sigma^2}}\right)^N \exp\left(-\frac{1}{2\sigma^2} \sum_{i=1}^N x_i^2\right)$
$p(\mathbf{x} | H_1) = \left(\frac{1}{\sqrt{2\pi\sigma^2}}\right)^N \exp\left(-\frac{1}{2\sigma^2} \sum_{i=1}^N (x_i - s_i)^2\right)$

The likelihood ratio is:
$$ \Lambda(\mathbf{x}) = \frac{p(\mathbf{x} | H_1)}{p(\mathbf{x} | H_0)} = \frac{\exp\left(-\frac{1}{2\sigma^2} \sum_{i=1}^N (x_i - s_i)^2\right)}{\exp\left(-\frac{1}{2\sigma^2} \sum_{i=1}^N x_i^2\right)} $$
$$ \Lambda(\mathbf{x}) = \exp\left(\frac{1}{2\sigma^2} \left[ \sum_{i=1}^N x_i^2 - \sum_{i=1}^N (x_i - s_i)^2 \right]\right) $$
$$ \Lambda(\mathbf{x}) = \exp\left(\frac{1}{2\sigma^2} \left[ \sum_{i=1}^N x_i^2 - \sum_{i=1}^N (x_i^2 - 2x_i s_i + s_i^2) \right]\right) $$
$$ \Lambda(\mathbf{x}) = \exp\left(\frac{1}{2\sigma^2} \left[ \sum_{i=1}^N 2x_i s_i - \sum_{i=1}^N s_i^2 \right]\right) $$
$$ \Lambda(\mathbf{x}) = \exp\left(\frac{1}{\sigma^2} \sum_{i=1}^N x_i s_i - \frac{1}{2\sigma^2} \sum_{i=1}^N s_i^2 \right) $$

Taking the logarithm (which is monotonic, so the decision rule is preserved):
$$ \ln \Lambda(\mathbf{x}) = \frac{1}{\sigma^2} \sum_{i=1}^N x_i s_i - \frac{1}{2\sigma^2} \sum_{i=1}^N s_i^2 $$

The decision rule is to choose $H_1$ if $\ln \Lambda(\mathbf{x}) > \ln \eta$, which is equivalent to:
$$ \sum_{i=1}^N x_i s_i > \sigma^2 \ln \eta + \frac{1}{2} \sum_{i=1}^N s_i^2 $$
Let $T(\mathbf{x}) = \sum_{i=1}^N x_i s_i$. This is the output of a matched filter.
The decision rule becomes: Choose $H_1$ if $T(\mathbf{x}) > \eta'$, where $\eta'$ is a new threshold.

Under $H_0$, $T(\mathbf{x}) = \sum n_i s_i$, which is a Gaussian random variable with mean 0 and variance $\sigma^2 \sum s_i^2$.
Under $H_1$, $T(\mathbf{x}) = \sum (s_i + n_i) s_i = \sum s_i^2 + \sum n_i s_i$. This is a Gaussian random variable with mean $\sum s_i^2$ and variance $\sigma^2 \sum s_i^2$.

The threshold $\eta'$ is chosen such that $P(T(\mathbf{x}) > \eta' | H_0) = \alpha_0$.

**Textbook Reference:** Kay (Vol II), Chapter 2.2: The Neyman-Pearson Lemma.

---

## 4. The Generalized Likelihood Ratio Test (GLRT)

The GLRT is a powerful tool for testing composite hypotheses. It is a generalization of the likelihood ratio test.

### 4.1 Motivation

When dealing with composite hypotheses, the likelihood ratio involves unknown parameters. We need a way to handle these parameters.

### 4.2 The GLRT Procedure

1.  **Define the Hypotheses:**
    *   $H_0$: $\mathbf{x}$ is drawn from $p(\mathbf{x} | \boldsymbol{\theta}_0)$, where $\boldsymbol{\theta}_0$ belongs to a parameter set $\Theta_0$.
    *   $H_1$: $\mathbf{x}$ is drawn from $p(\mathbf{x} | \boldsymbol{\theta}_1)$, where $\boldsymbol{\theta}_1$ belongs to a parameter set $\Theta_1$.

2.  **Maximize Likelihoods:** Estimate the parameters under each hypothesis by maximizing the likelihood function (or log-likelihood function) within their respective parameter spaces.
    *   Find $\hat{\boldsymbol{\theta}}_0 = \arg \max_{\boldsymbol{\theta} \in \Theta_0} p(\mathbf{x} | \boldsymbol{\theta})$
    *   Find $\hat{\boldsymbol{\theta}}_1 = \arg \max_{\boldsymbol{\theta} \in \Theta_1} p(\mathbf{x} | \boldsymbol{\theta})$

3.  **Form the Generalized Likelihood Ratio:** The GLRT uses the ratio of these maximized likelihoods.
    $$ \Lambda_{GLR}(\mathbf{x}) = \frac{\max_{\boldsymbol{\theta}_1 \in \Theta_1} p(\mathbf{x} | \boldsymbol{\theta}_1)}{\max_{\boldsymbol{\theta}_0 \in \Theta_0} p(\mathbf{x} | \boldsymbol{\theta}_0)} $$
    Sometimes, the GLRT is defined using the joint parameter space $\Theta = \Theta_0 \cup \Theta_1$. In this case, if $H_0$ is simple and $H_1$ is composite:
    $$ \Lambda_{GLR}(\mathbf{x}) = \frac{\max_{\boldsymbol{\theta} \in \Theta_1} p(\mathbf{x} | \boldsymbol{\theta})}{p(\mathbf{x} | \boldsymbol{\theta}_0)} $$
    If both are composite:
    $$ \Lambda_{GLR}(\mathbf{x}) = \frac{\max_{\boldsymbol{\theta}_1 \in \Theta_1} p(\mathbf{x} | \boldsymbol{\theta}_1)}{\max_{\boldsymbol{\theta}_0 \in \Theta_0} p(\mathbf{x} | \boldsymbol{\theta}_0)} $$

4.  **Decision Rule:** Choose $H_1$ if $\Lambda_{GLR}(\mathbf{x}) > \eta$ and $H_0$ otherwise, where $\eta$ is a threshold chosen to achieve a desired probability of Type I error.

**Important Note:** Unlike the simple hypothesis case, the threshold $\eta$ for GLRT is often not analytically determined from $P(\Lambda_{GLR}(\mathbf{x}) > \eta | H_0) = \alpha_0$ due to the complexity of the distribution of $\Lambda_{GLR}(\mathbf{x})$ under $H_0$. Asymptotic approximations (e.g., Wilks' theorem) are often used, particularly for large sample sizes.

### 4.3 Example: Detection of a Signal with Unknown Amplitude in AWGN

Consider detecting a known signal shape $s(t)$ with an unknown amplitude $A$ in AWGN.
*   $H_0$: $\mathbf{x}(t) = n(t)$ (Amplitude $A=0$)
*   $H_1$: $\mathbf{x}(t) = A s(t) + n(t)$, where $A$ is unknown but $A \neq 0$.

Let's consider the parameter space for $A$:
*   Under $H_0$: The parameter space for $A$ is $\Theta_0 = \{0\}$.
*   Under $H_1$: The parameter space for $A$ is $\Theta_1 = \mathbb{R}$.

Let's work with discrete-time samples for simplicity:
$p(\mathbf{x} | A) = \left(\frac{1}{\sqrt{2\pi\sigma^2}}\right)^N \exp\left(-\frac{1}{2\sigma^2} \sum_{i=1}^N (x_i - A s_i)^2\right)$

**Maximize Likelihood under $H_0$:**
Since $\Theta_0 = \{0\}$, the ML estimate of $A$ under $H_0$ is fixed at 0.
$\hat{A}_0 = 0$.
$p(\mathbf{x} | \hat{A}_0) = p(\mathbf{x} | A=0) = \left(\frac{1}{\sqrt{2\pi\sigma^2}}\right)^N \exp\left(-\frac{1}{2\sigma^2} \sum_{i=1}^N x_i^2\right)$

**Maximize Likelihood under $H_1$:**
We need to find $\hat{A}_1 = \arg \max_{A \in \mathbb{R}} p(\mathbf{x} | A)$. This is equivalent to maximizing the log-likelihood:
$\ln p(\mathbf{x} | A) = -\frac{N}{2} \ln(2\pi\sigma^2) - \frac{1}{2\sigma^2} \sum_{i=1}^N (x_i - A s_i)^2$
To find the maximum, we differentiate with respect to $A$ and set the derivative to zero:
$\frac{\partial}{\partial A} \left( \sum_{i=1}^N (x_i - A s_i)^2 \right) = \sum_{i=1}^N 2(x_i - A s_i)(-s_i) = 0$
$\sum_{i=1}^N (-2x_i s_i + 2A s_i^2) = 0$
$\sum_{i=1}^N x_i s_i - A \sum_{i=1}^N s_i^2 = 0$
$\hat{A}_1 = \frac{\sum_{i=1}^N x_i s_i}{\sum_{i=1}^N s_i^2} = \frac{\mathbf{x}^T \mathbf{s}}{\mathbf{s}^T \mathbf{s}}$ (assuming $\mathbf{s}^T \mathbf{s} \neq 0$)

Now, substitute $\hat{A}_1$ back into the likelihood function:
$\max_{A \in \mathbb{R}} p(\mathbf{x} | A) = p(\mathbf{x} | \hat{A}_1) = \left(\frac{1}{\sqrt{2\pi\sigma^2}}\right)^N \exp\left(-\frac{1}{2\sigma^2} \sum_{i=1}^N \left(x_i - \hat{A}_1 s_i\right)^2\right)$

**Generalized Likelihood Ratio:**
$$ \Lambda_{GLR}(\mathbf{x}) = \frac{\max_{A \in \mathbb{R}} p(\mathbf{x} | A)}{p(\mathbf{x} | A=0)} = \frac{\exp\left(-\frac{1}{2\sigma^2} \sum_{i=1}^N \left(x_i - \hat{A}_1 s_i\right)^2\right)}{\exp\left(-\frac{1}{2\sigma^2} \sum_{i=1}^N x_i^2\right)} $$
$$ \Lambda_{GLR}(\mathbf{x}) = \exp\left(\frac{1}{2\sigma^2} \left[ \sum_{i=1}^N x_i^2 - \sum_{i=1}^N \left(x_i - \hat{A}_1 s_i\right)^2 \right]\right) $$
Expanding the term in the bracket:
$\sum x_i^2 - \sum (x_i^2 - 2x_i \hat{A}_1 s_i + (\hat{A}_1 s_i)^2)$
$= \sum 2x_i \hat{A}_1 s_i - \sum (\hat{A}_1 s_i)^2$
$= 2 \hat{A}_1 \sum x_i s_i - \hat{A}_1^2 \sum s_i^2$
Substitute $\hat{A}_1 = \frac{\sum x_i s_i}{\sum s_i^2}$:
$= 2 \left(\frac{\sum x_i s_i}{\sum s_i^2}\right) \left(\sum x_i s_i\right) - \left(\frac{\sum x_i s_i}{\sum s_i^2}\right)^2 \sum s_i^2$
$= \frac{2 (\sum x_i s_i)^2}{\sum s_i^2} - \frac{(\sum x_i s_i)^2}{\sum s_i^2}$
$= \frac{(\sum x_i s_i)^2}{\sum s_i^2}$

So, $\Lambda_{GLR}(\mathbf{x}) = \exp\left(\frac{1}{2\sigma^2} \frac{(\sum x_i s_i)^2}{\sum s_i^2}\right)$.

The decision rule is to choose $H_1$ if $\Lambda_{GLR}(\mathbf{x}) > \eta$, which is equivalent to:
$\frac{(\sum x_i s_i)^2}{\sum s_i^2} > 2\sigma^2 \ln \eta = \eta''$.
Taking the square root: $|\sum x_i s_i| > \eta'''$.
This leads to a decision rule based on the magnitude of the matched filter output, similar to the simple hypothesis case, but the threshold depends on the distribution of the GLR.

**Textbook Reference:** Kay (Vol II), Chapter 2.3: The Generalized Likelihood Ratio Test.

---

## 5. Bayes Decision Theory

Bayes decision theory provides a framework for making optimal decisions in the presence of prior knowledge about the hypotheses.

### 5.1 Prior Probabilities

In addition to the likelihoods, we often have **prior probabilities** for each hypothesis, denoted by $P(H_0)$ and $P(H_1)$. These represent our belief in each hypothesis before observing any data.

### 5.2 Posterior Probabilities

Using Bayes' theorem, we can update our beliefs based on the observed data to obtain **posterior probabilities**:
$$ P(H_0 | \mathbf{x}) = \frac{p(\mathbf{x} | H_0) P(H_0)}{p(\mathbf{x})} $$
$$ P(H_1 | \mathbf{x}) = \frac{p(\mathbf{x} | H_1) P(H_1)}{p(\mathbf{x})} $$
where $p(\mathbf{x}) = p(\mathbf{x} | H_0) P(H_0) + p(\mathbf{x} | H_1) P(H_1)$ is the marginal probability of the observation.

### 5.3 Bayes Risk and Decision Rule

We often associate **costs** with making incorrect decisions. Let:
*   $C_{ij}$ be the cost of deciding $H_i$ when $H_j$ is true.

The **risk** of a particular decision rule is the expected cost. The Bayes decision rule minimizes the total Bayes risk.

**Bayes Decision Rule:**
Choose $H_1$ if the expected cost of choosing $H_1$ is less than the expected cost of choosing $H_0$.

*   Expected cost of choosing $H_0$: $E[\text{cost} | \text{choose } H_0] = C_{00} P(H_0 | \mathbf{x}) + C_{10} P(H_1 | \mathbf{x})$
*   Expected cost of choosing $H_1$: $E[\text{cost} | \text{choose } H_1] = C_{01} P(H_0 | \mathbf{x}) + C_{11} P(H_1 | \mathbf{x})$

The rule is:
Choose $H_1$ if $C_{01} P(H_0 | \mathbf{x}) + C_{11} P(H_1 | \mathbf{x}) < C_{00} P(H_0 | \mathbf{x}) + C_{10} P(H_1 | \mathbf{x})$

Rearranging and using the likelihood ratio:
$P(H_1|\mathbf{x}) (C_{11} - C_{01}) < P(H_0|\mathbf{x}) (C_{00} - C_{10})$
$\frac{P(H_1 | \mathbf{x})}{P(H_0 | \mathbf{x})} < \frac{C_{00} - C_{10}}{C_{11} - C_{01}}$
$\frac{p(\mathbf{x} | H_1) P(H_1)}{p(\mathbf{x} | H_0) P(H_0)} < \frac{C_{00} - C_{10}}{C_{11} - C_{01}}$
$\Lambda(\mathbf{x}) < \frac{C_{00} - C_{10}}{C_{11} - C_{01}} \frac{P(H_0)}{P(H_1)}$

Let $\eta_{Bayes} = \frac{C_{00} - C_{10}}{C_{11} - C_{01}} \frac{P(H_0)}{P(H_1)}$.
The Bayes decision rule is:
Choose $H_1$ if $\Lambda(\mathbf{x}) > \eta_{Bayes}$.
Choose $H_0$ if $\Lambda(\mathbf{x}) < \eta_{Bayes}$.

**Special Case: Minimum Probability of Error (Minimax)**
If we want to minimize the probability of making any error, we set the costs as:
*   $C_{00} = C_{11} = 0$ (correct decisions have no cost)
*   $C_{01} = C_{10} = 1$ (incorrect decisions have a unit cost)

Then, $\eta_{Bayes} = \frac{0 - 1}{0 - 1} \frac{P(H_0)}{P(H_1)} = \frac{P(H_0)}{P(H_1)}$.
The rule becomes:
Choose $H_1$ if $\Lambda(\mathbf{x}) > \frac{P(H_0)}{P(H_1)}$
Choose $H_0$ if $\Lambda(\mathbf{x}) < \frac{P(H_0)}{P(H_1)}$

This is equivalent to choosing the hypothesis with the higher posterior probability.

**Textbook Reference:** Kay (Vol II), Chapter 2.4: Bayes Decision Theory.

---

## 6. Minimum Probability of Error (Minimax) and Minimum Bayes Risk

These are specific criteria for designing hypothesis tests.

### 6.1 Minimum Probability of Error (Minimax)

As derived above, this occurs when all errors have equal cost.
The decision rule is:
Choose $H_1$ if $p(\mathbf{x} | H_1) P(H_1) > p(\mathbf{x} | H_0) P(H_0)$
Choose $H_0$ otherwise.

This rule uses the **Bayes Factor** $\frac{P(H_1)}{P(H_0)}$ as the threshold on the likelihood ratio.

### 6.2 Minimum Bayes Risk

This is the general case where costs $C_{ij}$ can be different.
The decision rule is:
Choose $H_1$ if $\Lambda(\mathbf{x}) < \frac{C_{00} - C_{10}}{C_{11} - C_{01}} \frac{P(H_0)}{P(H_1)}$
Choose $H_0$ otherwise.

**Important Point:**
*   If $P(H_0) = P(H_1) = 1/2$, the minimum probability of error test is equivalent to the likelihood ratio test with threshold $\eta=1$ (or $\ln \eta = 0$).
*   If $C_{01} = C_{10}$, the decision depends only on the likelihood ratio and prior probabilities.

**Reference Book Example:** Van Trees (Vol I), Chapter 2.2: Bayes Criterion. This chapter provides a thorough treatment of Bayes risk and decision rules, particularly in the context of waveform detection.

---

## 7. Monotone Likelihood Ratio Property

The Monotone Likelihood Ratio (MLR) property is important for establishing uniformly most powerful (UMP) tests for certain types of composite hypotheses.

### 7.1 Definition

A family of probability density functions $\{f(x|\theta) : \theta \in \Omega\}$ has the **monotone likelihood ratio** in $x$ if, for any $\theta_1 > \theta_2$, the likelihood ratio $\frac{f(x|\theta_1)}{f(x|\theta_2)}$ is a strictly increasing function of $x$.

### 7.2 UMP Tests

If a family of distributions has the MLR property, then for testing $H_0: \theta = \theta_0$ versus $H_1: \theta > \theta_0$, there exists a **uniformly most powerful (UMP)** test. This means the test is the most powerful for *all* alternative hypotheses $\theta > \theta_0$ for a given $\alpha$.

The UMP test for $H_0: \theta = \theta_0$ vs $H_1: \theta > \theta_0$ is of the form:
Choose $H_1$ if $f(x|\theta_0)$ is too small compared to $f(x|\theta)$ for $\theta > \theta_0$.
This translates to choosing $H_1$ if $\frac{f(x|\theta)}{f(x|\theta_0)} > \eta_{\theta}$ for some $\theta > \theta_0$, or more generally, if $\sum x_i \theta_i$ is large enough.

**Example of MLR Property:**
*   Exponential distribution family: $f(x|\theta) = \theta e^{-\theta x}$ for $x \ge 0$.
*   Poisson distribution family: $f(k|\lambda) = \frac{\lambda^k e^{-\lambda}}{k!}$ for $k=0, 1, 2, \dots$.
*   Normal distribution family with unknown mean and known variance.

**Textbook Reference:** Kay (Vol II), Chapter 2.6: Monotone Likelihood Ratio. This section discusses the MLR property and its implications for UMP tests.

---

## 8. Summary of Key Concepts

*   **Hypothesis Testing:** Deciding between two statements ($H_0$, $H_1$) about a system's state based on observed data $\mathbf{x}$.
*   **Simple vs. Composite Hypotheses:** Simple hypotheses fully specify the distribution; composite hypotheses do not.
*   **Errors:** Type I (False Alarm) - rejecting $H_0$ when true ($\alpha$), Type II (Missed Detection) - failing to reject $H_0$ when $H_1$ is true ($\beta$).
*   **Likelihood Ratio:** $\Lambda(\mathbf{x}) = \frac{p(\mathbf{x} | H_1)}{p(\mathbf{x} | H_0)}$. Used for simple hypotheses.
*   **Neyman-Pearson Lemma:** For simple hypotheses, the likelihood ratio test is the most powerful test for a given $\alpha$.
*   **Generalized Likelihood Ratio Test (GLRT):** Handles composite hypotheses by maximizing likelihoods under each hypothesis. $\Lambda_{GLR}(\mathbf{x}) = \frac{\max p(\mathbf{x} | \boldsymbol{\theta}_1)}{\max p(\mathbf{x} | \boldsymbol{\theta}_0)}$.
*   **Bayes Decision Theory:** Incorporates prior probabilities $P(H_i)$ and costs $C_{ij}$ to minimize Bayes risk.
*   **Bayes Decision Rule:** Based on comparing posterior probabilities or using a likelihood ratio threshold adjusted by priors and costs. $\Lambda(\mathbf{x}) < \frac{C_{00} - C_{10}}{C_{11} - C_{01}} \frac{P(H_0)}{P(H_1)}$.
*   **Minimum Probability of Error:** A special case of Bayes decision theory with equal costs. Rule: $\Lambda(\mathbf{x}) > \frac{P(H_0)}{P(H_1)}$.
*   **Monotone Likelihood Ratio (MLR):** Property of distribution families that allows for Uniformly Most Powerful (UMP) tests for certain composite hypotheses.

---

## 9. Practice Questions

**Question 1:**
Consider a signal detector that observes data $\mathbf{x}$. The observation follows a Gaussian distribution with known variance $\sigma^2$.
*   $H_0$: $\mathbf{x} \sim \mathcal{N}(0, \sigma^2)$
*   $H_1$: $\mathbf{x} \sim \mathcal{N}(\mu, \sigma^2)$, where $\mu > 0$ is known.
The test is to decide between $H_0$ and $H_1$.

**(a)** Write down the likelihood ratio $\Lambda(\mathbf{x})$.
**(b)** Based on the Neyman-Pearson lemma, what is the form of the optimal decision rule?
**(c)** If $\alpha = 0.05$, how would you determine the threshold for the test?

**Answer 1:**
**(a)** The probability density functions are:
$p(\mathbf{x} | H_0) = \left(\frac{1}{\sqrt{2\pi\sigma^2}}\right)^N \exp\left(-\frac{1}{2\sigma^2} \sum_{i=1}^N x_i^2\right)$
$p(\mathbf{x} | H_1) = \left(\frac{1}{\sqrt{2\pi\sigma^2}}\right)^N \exp\left(-\frac{1}{2\sigma^2} \sum_{i=1}^N (x_i - \mu)^2\right)$

The likelihood ratio is:
$\Lambda(\mathbf{x}) = \frac{p(\mathbf{x} | H_1)}{p(\mathbf{x} | H_0)} = \frac{\exp\left(-\frac{1}{2\sigma^2} \sum_{i=1}^N (x_i - \mu)^2\right)}{\exp\left(-\frac{1}{2\sigma^2} \sum_{i=1}^N x_i^2\right)}$
$\Lambda(\mathbf{x}) = \exp\left(\frac{1}{2\sigma^2} \left[ \sum_{i=1}^N x_i^2 - \sum_{i=1}^N (x_i - \mu)^2 \right]\right)$
$\Lambda(\mathbf{x}) = \exp\left(\frac{1}{2\sigma^2} \left[ \sum_{i=1}^N x_i^2 - \sum_{i=1}^N (x_i^2 - 2x_i \mu + \mu^2) \right]\right)$
$\Lambda(\mathbf{x}) = \exp\left(\frac{1}{2\sigma^2} \left[ \sum_{i=1}^N 2x_i \mu - \sum_{i=1}^N \mu^2 \right]\right)$
$\Lambda(\mathbf{x}) = \exp\left(\frac{\mu}{\sigma^2} \sum_{i=1}^N x_i - \frac{N\mu^2}{2\sigma^2}\right)$

**(b)** The optimal decision rule is to choose $H_1$ if $\Lambda(\mathbf{x}) > \eta$, where $\eta$ is a threshold. This is equivalent to choosing $H_1$ if:
$\frac{\mu}{\sigma^2} \sum_{i=1}^N x_i - \frac{N\mu^2}{2\sigma^2} > \ln \eta$
$\sum_{i=1}^N x_i > \frac{\sigma^2}{\mu} \ln \eta + \frac{N\mu}{2}$
The decision rule is to choose $H_1$ if the sum of observations is greater than some threshold.

**(c)** To determine the threshold $\eta$ for $\alpha = 0.05$, we need to find $\eta$ such that $P(\Lambda(\mathbf{x}) > \eta | H_0) = 0.05$.
Under $H_0$, $\sum_{i=1}^N x_i \sim \mathcal{N}(0, N\sigma^2)$. Let $T = \sum_{i=1}^N x_i$.
The condition $\Lambda(\mathbf{x}) > \eta$ is equivalent to $T > \eta'$. We need to find $\eta'$ such that $P(T > \eta' | H_0) = 0.05$.
This means $\eta'$ is the $95^{th}$ percentile of the $\mathcal{N}(0, N\sigma^2)$ distribution.
Let $Z = \frac{T}{\sqrt{N}\sigma}$. $Z \sim \mathcal{N}(0, 1)$.
$P\left(\frac{T}{\sqrt{N}\sigma} > \frac{\eta'}{\sqrt{N}\sigma} | H_0\right) = 0.05$
$P\left(Z > \frac{\eta'}{\sqrt{N}\sigma}\right) = 0.05$.
From the standard normal distribution table, the value $z$ such that $P(Z > z) = 0.05$ is approximately $1.645$.
So, $\frac{\eta'}{\sqrt{N}\sigma} \approx 1.645$, which gives $\eta' \approx 1.645\sqrt{N}\sigma$.
The decision rule is: Choose $H_1$ if $\sum_{i=1}^N x_i > 1.645\sqrt{N}\sigma$.

---

**Question 2:**
In the context of Bayes decision theory, if all costs $C_{ij}$ are equal, what is the relationship between the decision rule and the prior probabilities?

**Answer 2:**
If all costs are equal (e.g., $C_{00}=C_{11}=0$ and $C_{01}=C_{10}=1$ for minimum probability of error), the Bayes decision rule becomes:
Choose $H_1$ if $P(H_1|\mathbf{x}) > P(H_0|\mathbf{x})$.
This is equivalent to:
Choose $H_1$ if $\frac{p(\mathbf{x}|H_1)P(H_1)}{p(\mathbf{x})} > \frac{p(\mathbf{x}|H_0)P(H_0)}{p(\mathbf{x})}$
Choose $H_1$ if $p(\mathbf{x}|H_1)P(H_1) > p(\mathbf{x}|H_0)P(H_0)$
Choose $H_1$ if $\Lambda(\mathbf{x}) > \frac{P(H_0)}{P(H_1)}$.
The decision rule is directly influenced by the ratio of prior probabilities. If $P(H_1) > P(H_0)$, the threshold $\frac{P(H_0)}{P(H_1)}$ is less than 1, making it easier to choose $H_1$. Conversely, if $P(H_0) > P(H_1)$, the threshold is greater than 1, making it harder to choose $H_1$.

---

## 10. Important Points to Remember

*   **Trade-off between $\alpha$ and $\beta$**: Decreasing $\alpha$ (Type I error) generally increases $\beta$ (Type II error) for a fixed observation or test.
*   **Neyman-Pearson is optimal for simple hypotheses**: It provides the best trade-off between $\alpha$ and $\beta$.
*   **GLRT is a workhorse for composite hypotheses**: It provides a practical approach when parameters are unknown.
*   **Bayes theory provides optimal decisions when prior information and costs are known**: It offers a principled way to incorporate beliefs and consequences.
*   **MLR property is key for UMP tests**: Look for distributions like exponential, Poisson, and Normal (with one parameter varying) when considering UMP tests.
*   **Matched filter is optimal for detecting known signals in AWGN**: This is a direct application of the Neyman-Pearson lemma.

---
**End of Module 3 Notes**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
