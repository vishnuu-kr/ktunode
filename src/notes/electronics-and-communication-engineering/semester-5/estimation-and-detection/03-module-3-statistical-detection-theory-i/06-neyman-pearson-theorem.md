---
title: "Neyman-Pearson theorem"
subject: "ESTIMATION AND DETECTION"
module: "Module 3: Statistical Detection Theory I"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780febd9"
status: "completed"
scrapedAt: "2026-05-23T17:56:52.382Z"
---
# Module 3: Statistical Detection Theory I - Neyman-Pearson Theorem

## 1. Introduction to Hypothesis Testing

Hypothesis testing is a fundamental concept in statistical detection theory. It involves deciding between two competing hypotheses about a system or data.

**Key Concepts:**

*   **Hypotheses:** Two mutually exclusive and exhaustive statements about the underlying process generating the data.
    *   **Null Hypothesis ($H_0$):** The default or baseline assumption.
    *   **Alternative Hypothesis ($H_1$):** The hypothesis that contradicts the null hypothesis.
*   **Observation/Measurement:** The data we collect to make a decision.
*   **Decision Rule:** A procedure to decide whether to reject $H_0$ or fail to reject $H_0$ based on the observation.

**Example:**

Consider a radar system.
*   $H_0$: No target is present.
*   $H_1$: A target is present.
The radar measures the received signal strength, which is our observation. Based on this measurement, the radar decides whether a target is present or not.

**Connection to Course Outcomes:**

*   **CO1 (K2):** Understanding the basic framework of statistical decision-making aligns with summarizing estimation principles, as both involve making inferences from data.
*   **CO3 (K2):** This section directly addresses the fundamentals of statistical detection principles.

**Reference:**
*   Kay, S. M. (2010). *Fundamentals of Statistical Signal Processing, Vol II: Detection Theory*. Pearson. (Chapter 2: Introduction to Hypothesis Testing)

## 2. Errors in Hypothesis Testing

When making a decision between hypotheses, there are two types of errors that can occur.

**Key Concepts:**

*   **Type I Error ($\alpha$):** Rejecting $H_0$ when $H_0$ is actually true. Also known as the **false alarm probability**.
*   **Type II Error ($\beta$):** Failing to reject $H_0$ when $H_1$ is actually true.
*   **Power of the Test (1-$\beta$):** The probability of correctly rejecting $H_0$ when $H_1$ is true.

**Relationship between Errors:**
Typically, there's a trade-off between $\alpha$ and $\beta$. Decreasing one often leads to an increase in the other.

**Example:**
In the radar example:
*   **Type I Error:** The radar indicates a target is present when there is no target (false alarm).
*   **Type II Error:** The radar fails to detect a target when a target is actually present.

**Connection to Course Outcomes:**

*   **CO3 (K2):** Understanding the types of errors is crucial for comprehending the performance of detection systems.

**Reference:**
*   Kay, S. M. (2010). *Fundamentals of Statistical Signal Processing, Vol II: Detection Theory*. Pearson. (Chapter 2: Introduction to Hypothesis Testing)

## 3. The Neyman-Pearson Theorem: Statement and Objective

The Neyman-Pearson theorem provides a fundamental result for designing optimal detectors in simple hypothesis testing problems. It establishes the most powerful test for a given significance level.

**Key Concepts:**

*   **Simple Hypothesis Testing:** Both $H_0$ and $H_1$ specify a single, known probability distribution for the observation.
    *   $H_0: X \sim p_0(x)$
    *   $H_1: X \sim p_1(x)$
    where $X$ is the observation vector, and $p_0(x)$ and $p_1(x)$ are the probability density functions (PDFs) or probability mass functions (PMFs).
*   **Likelihood Ratio Test (LRT):** A test that makes a decision based on the ratio of the likelihood of the observation under $H_1$ to the likelihood under $H_0$.
    *   Likelihood Ratio: $\Lambda(x) = \frac{p_1(x)}{p_0(x)}$
*   **Neyman-Pearson Theorem Statement:** For a fixed probability of Type I error ($\alpha$), the most powerful test (i.e., the test with the highest probability of Type II error, $1-\beta$, or highest power) is the Likelihood Ratio Test. Specifically, we reject $H_0$ if $\Lambda(x) > \eta$ for some threshold $\eta$.

**Objective of the Theorem:**
To find a decision rule that maximizes the power ($1-\beta$) for a given false alarm probability ($\alpha$).

**Example:**
Consider a binary signal transmission over a noisy channel.
*   $H_0$: No signal transmitted (only noise).
*   $H_1$: Signal transmitted (signal + noise).
The received signal $X$ will have a different distribution under $H_0$ and $H_1$. The Neyman-Pearson theorem tells us that the optimal receiver will use the likelihood ratio of the received signal to decide between these two hypotheses.

**Connection to Course Outcomes:**

*   **CO3 (K2):** This is the core topic of the module and directly relates to illustrating detection principles.
*   **CO4 (K3):** The theorem provides a specific decision rule (LRT), which is a type of statistical decision rule that can be applied in engineering.

**Reference:**
*   Kay, S. M. (2010). *Fundamentals of Statistical Signal Processing, Vol II: Detection Theory*. Pearson. (Chapter 2: Neyman-Pearson Theorem)
*   Van Trees, H. L. (2001). *Detection, Estimation, and Modulation Theory, Vol. I*. John Wiley & Sons. (Chapter 2: Hypothesis Testing)

## 4. The Likelihood Ratio Test (LRT)

The Likelihood Ratio Test is the practical implementation of the Neyman-Pearson theorem for simple hypothesis testing.

**Key Concepts:**

*   **Likelihood Function:** The probability of observing the data given a specific hypothesis.
    *   $L_0(x) = p_0(x)$
    *   $L_1(x) = p_1(x)$
*   **Likelihood Ratio:** $\Lambda(x) = \frac{L_1(x)}{L_0(x)} = \frac{p_1(x)}{p_0(x)}$
*   **Decision Rule:**
    *   Reject $H_0$ if $\Lambda(x) > \eta$
    *   Accept $H_0$ if $\Lambda(x) < \eta$
    *   Indeterminate if $\Lambda(x) = \eta$ (usually assigned to one of the regions)

**Determining the Threshold ($\eta$):**

The threshold $\eta$ is chosen to satisfy the desired Type I error probability ($\alpha$).
*   $\alpha = P(\Lambda(X) > \eta | H_0 \text{ is true}) = \int_{\{x: \Lambda(x) > \eta\}} p_0(x) dx$

**Log-Likelihood Ratio:**

In practice, it's often easier to work with the logarithm of the likelihood ratio, as it turns ratios into differences and can simplify computations, especially with products of probabilities becoming sums of log-probabilities.
*   $\log \Lambda(x) = \log p_1(x) - \log p_0(x)$
*   The decision rule becomes: Accept $H_0$ if $\log \Lambda(x) < \log \eta$.

**Example:**

Let observations $x$ be drawn from Gaussian distributions:
*   $H_0: x \sim N(0, \sigma^2)$  => $p_0(x) = \frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{x^2}{2\sigma^2}}$
*   $H_1: x \sim N(\mu, \sigma^2)$  => $p_1(x) = \frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$

The likelihood ratio is:
$\Lambda(x) = \frac{\frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{(x-\mu)^2}{2\sigma^2}}}{\frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{x^2}{2\sigma^2}}} = e^{-\frac{(x-\mu)^2}{2\sigma^2} + \frac{x^2}{2\sigma^2}} = e^{\frac{2x\mu - \mu^2}{2\sigma^2}}$

The log-likelihood ratio is:
$\log \Lambda(x) = \frac{2x\mu - \mu^2}{2\sigma^2}$

The decision rule is to reject $H_0$ if $\frac{2x\mu - \mu^2}{2\sigma^2} > \log \eta$.
This can be rewritten as $2x\mu > 2\sigma^2 \log \eta + \mu^2$.
Or $x > \frac{2\sigma^2 \log \eta + \mu^2}{2\mu} = \eta'$ (assuming $\mu > 0$).
This shows that for Gaussian observations with different means but same variance, the LRT is a threshold on the observation itself.

**Connection to Course Outcomes:**

*   **CO3 (K2):** Understanding the LRT is fundamental to detection.
*   **CO4 (K3):** The LRT is a direct application of a statistical decision rule. Calculating and applying it demonstrates the ability to use these rules.

**Reference:**
*   Kay, S. M. (2010). *Fundamentals of Statistical Signal Processing, Vol II: Detection Theory*. Pearson. (Chapter 2: Likelihood Ratio Test)
*   Hayes, M. H. (2018). *Statistical Digital Signal Processing and Modelling*. John Wiley & Sons. (Chapter 8: Hypothesis Testing - relates LRT to signal detection).

## 5. Operating Characteristic (OC) Curve

The OC curve graphically represents the performance of a hypothesis test by plotting the power of the test ($1-\beta$) against the false alarm probability ($\alpha$) for different threshold settings.

**Key Concepts:**

*   **OC Curve:** A plot of $1-\beta$ vs. $\alpha$.
*   **Relationship to Threshold:** Each point on the OC curve corresponds to a specific value of the threshold $\eta$.
*   **Ideal Detector:** A detector with an OC curve that hugs the top-left corner (high power for low $\alpha$).

**Neyman-Pearson Criterion:**
The Neyman-Pearson theorem states that the LRT is the most powerful test. This means for any given $\alpha$, the LRT will achieve the highest possible $1-\beta$. The OC curve for the LRT will lie above (or on) the OC curves of any other test for all $\alpha$.

**Example:**
Consider the Gaussian example from Section 4.
*   $H_0: x \sim N(0, \sigma^2)$
*   $H_1: x \sim N(\mu, \sigma^2)$

The decision rule is $x > \eta'$.
*   $\alpha = P(x > \eta' | H_0) = Q(\frac{\eta'}{\sigma})$ where $Q(u) = \int_{u}^{\infty} \frac{1}{\sqrt{2\pi}} e^{-t^2/2} dt$ is the Gaussian Q-function.
*   $1-\beta = P(x > \eta' | H_1) = Q(\frac{\eta' - \mu}{\sigma})$

By varying $\eta'$, we can trace out the OC curve:
*   As $\eta'$ increases, $\alpha$ decreases and $1-\beta$ decreases.
*   As $\eta'$ decreases, $\alpha$ increases and $1-\beta$ increases.

**Connection to Course Outcomes:**

*   **CO3 (K2):** Understanding the OC curve is essential for evaluating and comparing detection strategies.

**Reference:**
*   Kay, S. M. (2010). *Fundamentals of Statistical Signal Processing, Vol II: Detection Theory*. Pearson. (Chapter 2: Operating Characteristic)

## 6. Generalized Likelihood Ratio Test (GLRT)

The GLRT is an extension of the LRT used when the hypotheses are composite, meaning they involve unknown parameters.

**Key Concepts:**

*   **Composite Hypothesis Testing:** At least one of the hypotheses involves unknown parameters.
    *   $H_0: X \sim p(x; \theta_0)$
    *   $H_1: X \sim p(x; \theta_1)$
    where $\theta_0$ and $\theta_1$ can be vectors of parameters, and these parameters might not be fully specified under each hypothesis.
*   **Maximum Likelihood Estimation (MLE):** Used to estimate the unknown parameters under each hypothesis.
    *   $\hat{\theta}_0 = \arg \max_{\theta \in \Theta_0} p(x; \theta)$
    *   $\hat{\theta}_1 = \arg \max_{\theta \in \Theta_1} p(x; \theta)$
    where $\Theta_0$ and $\Theta_1$ are the parameter spaces under $H_0$ and $H_1$, respectively.
*   **Generalized Likelihood Ratio:**
    $\Lambda_{GLRT}(x) = \frac{\max_{\theta \in \Theta_1} p(x; \theta)}{\max_{\theta \in \Theta_0} p(x; \theta)} = \frac{p(x; \hat{\theta}_1)}{p(x; \hat{\theta}_0)}$
*   **GLRT Decision Rule:** Reject $H_0$ if $\Lambda_{GLRT}(x) > \eta$.

**When is GLRT Used?**
When we don't know the exact distributions because some parameters are unknown. For example, we might know the signal is a sine wave, but not its frequency or amplitude.

**Example:**

Detecting a known signal $s(t)$ with unknown amplitude $A$ in additive white Gaussian noise (AWGN).
*   Observation: $r(t) = A s(t) + w(t)$, where $w(t) \sim N(0, N_0/2)$ per dimension.
*   $H_0$: $r(t) = w(t)$ (no signal)
*   $H_1$: $r(t) = A s(t) + w(t)$ (signal with unknown amplitude $A$)

Let's discretize for simplicity: $r = As + w$, where $r, s$ are vectors, and $w \sim N(\mathbf{0}, \sigma^2 \mathbf{I})$.
*   $p(r | A, H_1) = \frac{1}{(2\pi\sigma^2)^{N/2}} e^{-\frac{1}{2\sigma^2} \|r - As\|^2}$
*   $p(r | H_0) = \frac{1}{(2\pi\sigma^2)^{N/2}} e^{-\frac{1}{2\sigma^2} \|r\|^2}$

Under $H_0$, the parameter space is just the noise, so $\max_{\theta \in \Theta_0} p(r; \theta) = p(r; \mathbf{0}) = p(r)$.
Under $H_1$, we need to find $\hat{A} = \arg \max_A \|r - As\|^2$.
Minimizing $\|r - As\|^2$ gives $\hat{A} = \frac{r^T s}{s^T s}$.
Then, $\max_{A} p(r; A, H_1) = p(r; \hat{A}, H_1) = \frac{1}{(2\pi\sigma^2)^{N/2}} e^{-\frac{1}{2\sigma^2} \|r - \hat{A}s\|^2}$.

The GLRT is $\frac{e^{-\frac{1}{2\sigma^2} \|r - \hat{A}s\|^2}}{e^{-\frac{1}{2\sigma^2} \|r\|^2}} > \eta$.
This simplifies to $\|r - \hat{A}s\|^2 < \|r\|^2 - \frac{2\sigma^2}{\eta}$.
Using the geometric interpretation: $\|r\|^2 = \|r - \hat{A}s\|^2 + \|\hat{A}s\|^2$.
So, $\|r - \hat{A}s\|^2 = \|r\|^2 - \|\hat{A}s\|^2$.
The inequality becomes $\|r\|^2 - \|\hat{A}s\|^2 < \|r\|^2 - \text{constant}$, which means $\|\hat{A}s\|^2 > \text{constant}$.
Substituting $\hat{A}$: $(\frac{r^T s}{s^T s})^2 \|s\|^2 = \frac{(r^T s)^2}{s^T s} > \text{constant}$.
This is a threshold on the correlation between the received signal and the known signal shape, scaled by signal energy.

**Asymptotic Properties of GLRT:**
Under certain regularity conditions and for large sample sizes, the GLRT often behaves like the LRT. The distribution of $-2 \log \Lambda_{GLRT}(x)$ often approaches a Chi-squared distribution under $H_0$.

**Connection to Course Outcomes:**

*   **CO3 (K2):** The GLRT is a crucial tool for more realistic detection problems where parameters are unknown.
*   **CO4 (K3):** Applying the GLRT demonstrates the ability to develop and use decision rules in composite hypothesis testing scenarios.

**Reference:**
*   Kay, S. M. (2010). *Fundamentals of Statistical Signal Processing, Vol II: Detection Theory*. Pearson. (Chapter 3: Composite Hypotheses - Introduces GLRT)
*   Van Trees, H. L. (2001). *Detection, Estimation, and Modulation Theory, Vol. I*. John Wiley & Sons. (Chapter 2: Composite Hypothesis Testing)

## 7. Relationship to Estimation

Detection and estimation are closely related. The process of estimating parameters under different hypotheses is a key component of the GLRT.

**Key Concepts:**

*   **Estimator:** A function that maps observations to an estimate of a parameter.
*   **Maximum Likelihood Estimator (MLE):** The parameter value that maximizes the likelihood function.
*   **Neyman-Pearson vs. MLE:**
    *   The Neyman-Pearson theorem (for simple hypotheses) focuses on finding a threshold for the likelihood ratio, which directly compares the likelihoods of the observed data under two known distributions.
    *   The GLRT (for composite hypotheses) uses MLEs to estimate unknown parameters under each hypothesis, then forms a likelihood ratio using these estimates.

**Example:**
In the unknown amplitude detection example, we used MLE to find the unknown amplitude $A$ under $H_1$. The detected signal's strength was then related to this estimate.

**Connection to Course Outcomes:**

*   **CO1 (K2):** Understanding estimation principles (like MLE) is a prerequisite for understanding composite hypothesis testing and GLRT.
*   **CO2 (K3):** Applying estimation algorithms (like MLE) is integral to implementing GLRT-based detectors.
*   **CO3 (K2):** Highlights the interplay between estimation and detection.

**Reference:**
*   Kay, S. M. (2010). *Fundamentals of Statistical Signal Processing, Vol I: Estimation Theory*. Pearson. (Chapter 3: Maximum Likelihood Estimation)
*   Kay, S. M. (2010). *Fundamentals of Statistical Signal Processing, Vol II: Detection Theory*. Pearson. (Chapter 3: Discusses the connection between GLRT and estimation)

## 8. Applications in Signal Processing

The Neyman-Pearson theorem and its extensions form the basis for many practical detection systems in various engineering fields.

**Examples:**

*   **Radar Systems:** Detecting targets in noisy environments.
*   **Sonar Systems:** Detecting submarines or objects in water.
*   **Communication Systems:** Detecting the presence or absence of a transmitted signal (e.g., in wireless communication, optical communications).
*   **Medical Imaging:** Detecting abnormalities in scans.
*   **Speech Recognition:** Detecting specific phonemes or words.
*   **Machine Fault Detection:** Identifying deviations from normal operating behavior.

**How it applies:**
In all these applications, we observe data that is corrupted by noise or interference. We need to decide whether a specific phenomenon (target, signal, abnormality) is present or not. The Neyman-Pearson framework allows us to design optimal receivers/detectors that minimize errors for a given acceptable false alarm rate.

**Connection to Course Outcomes:**

*   **CO1 (K2), CO2 (K3), CO3 (K2), CO4 (K3):** These outcomes are about applying and illustrating principles. This section ties the theoretical concepts learned to real-world engineering problems.

**Reference:**
*   All textbooks listed provide examples and discussions of applications.

---

## Practice Questions and Answers

**Question 1:**
State the Neyman-Pearson theorem. What is the objective of the theorem, and what type of hypothesis testing problem does it address?

**Answer 1:**
The Neyman-Pearson theorem states that for a simple hypothesis testing problem ($H_0: X \sim p_0(x)$ vs. $H_1: X \sim p_1(x)$), the most powerful test for a given probability of Type I error ($\alpha$) is the Likelihood Ratio Test (LRT). The objective of the theorem is to find a decision rule that maximizes the probability of correctly detecting the alternative hypothesis ($H_1$) when it is true (i.e., maximizes the power, $1-\beta$), subject to the constraint that the probability of falsely rejecting the null hypothesis ($H_0$) when it is true (i.e., Type I error, $\alpha$) does not exceed a specified level.

---

**Question 2:**
Consider the following simple hypothesis testing problem:
$H_0: x \sim N(0, 1)$
$H_1: x \sim N(2, 1)$

The observed data is $x = 1.5$.
Calculate the likelihood ratio $\Lambda(x)$ and the log-likelihood ratio $\log \Lambda(x)$ for this observation. Would you reject $H_0$ in favor of $H_1$ if the threshold $\eta$ for $\Lambda(x)$ was set to 5?

**Answer 2:**
The PDFs are:
$p_0(x) = \frac{1}{\sqrt{2\pi}} e^{-\frac{x^2}{2}}$
$p_1(x) = \frac{1}{\sqrt{2\pi}} e^{-\frac{(x-2)^2}{2}}$

For $x = 1.5$:
$p_0(1.5) = \frac{1}{\sqrt{2\pi}} e^{-\frac{(1.5)^2}{2}} = \frac{1}{\sqrt{2\pi}} e^{-1.125}$
$p_1(1.5) = \frac{1}{\sqrt{2\pi}} e^{-\frac{(1.5-2)^2}{2}} = \frac{1}{\sqrt{2\pi}} e^{-\frac{(-0.5)^2}{2}} = \frac{1}{\sqrt{2\pi}} e^{-0.125}$

Likelihood Ratio:
$\Lambda(1.5) = \frac{p_1(1.5)}{p_0(1.5)} = \frac{\frac{1}{\sqrt{2\pi}} e^{-0.125}}{\frac{1}{\sqrt{2\pi}} e^{-1.125}} = e^{-0.125 - (-1.125)} = e^{1} \approx 2.718$

Log-Likelihood Ratio:
$\log \Lambda(1.5) = \log(e^{1}) = 1$

Decision Rule: Reject $H_0$ if $\Lambda(x) > \eta$.
Given $\eta = 5$.
Since $\Lambda(1.5) \approx 2.718$, which is not greater than 5, we **fail to reject $H_0$**.

---

**Question 3:**
Explain the difference between the Neyman-Pearson Likelihood Ratio Test and the Generalized Likelihood Ratio Test (GLRT). When is the GLRT typically used?

**Answer 3:**
The **Neyman-Pearson Likelihood Ratio Test (LRT)** is designed for **simple hypothesis testing** problems, where both $H_0$ and $H_1$ specify a single, known probability distribution for the observations. The test is based on the direct ratio of the PDFs: $\Lambda(x) = p_1(x) / p_0(x)$.

The **Generalized Likelihood Ratio Test (GLRT)** is used for **composite hypothesis testing** problems, where at least one of the hypotheses involves unknown parameters. Instead of using the true PDFs (which are unknown), the GLRT uses Maximum Likelihood Estimates (MLEs) of the unknown parameters to form the likelihood ratio: $\Lambda_{GLRT}(x) = \frac{\max_{\theta \in \Theta_1} p(x; \theta)}{\max_{\theta \in \Theta_0} p(x; \theta)}$.

The GLRT is typically used when the exact distributions under the hypotheses are not fully known due to the presence of nuisance parameters or unknown signal characteristics (like amplitude, frequency, etc.).

---

**Question 4:**
In radar detection, a common task is to determine if a target is present.
*   $H_0$: No target present (only noise).
*   $H_1$: Target present (signal + noise).

The noise is typically modeled as Gaussian. If the signal is known except for an unknown amplitude, what type of test would you likely employ, and what would be the core of its decision statistic?

**Answer 4:**
Since the signal's amplitude is unknown under $H_1$, this is a composite hypothesis testing problem. Therefore, the **Generalized Likelihood Ratio Test (GLRT)** would be employed. The core of its decision statistic would involve estimating the unknown amplitude ($A$) using Maximum Likelihood Estimation (MLE) under $H_1$. The decision would then be based on a threshold applied to the likelihood ratio formed using this estimated amplitude and the PDF of the noise under $H_0$. The decision statistic often reduces to something related to the correlation of the received signal with the known signal waveform, scaled by the estimated signal energy.

---

## Important Points to Remember

*   **Neyman-Pearson Theorem:** Guarantees the existence of a most powerful test for simple hypotheses.
*   **Likelihood Ratio:** The fundamental statistic for the Neyman-Pearson test.
*   **Threshold ($\eta$):** Critically chosen to control the Type I error rate ($\alpha$).
*   **Trade-off:** There's an inherent trade-off between Type I error ($\alpha$) and Type II error ($\beta$). Maximizing power ($1-\beta$) for a fixed $\alpha$ is the goal.
*   **GLRT:** Essential for composite hypothesis testing where parameters are unknown.
*   **MLE:** The cornerstone for constructing GLRTs.
*   **Applications:** The principles are widely applicable in sensing, communication, and decision-making systems.

This module lays the groundwork for optimal decision-making in the presence of uncertainty, a core concept in many engineering disciplines.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
