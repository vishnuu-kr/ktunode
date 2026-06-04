---
title: "Detection of deterministic signals"
subject: "ESTIMATION AND DETECTION"
module: "Module 4: Statistical Detection Theory II"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780febe2"
status: "completed"
scrapedAt: "2026-05-23T17:56:58.012Z"
---
# ESTIMATION AND DETECTION

## Module 4: Statistical Detection Theory II

### Topic: Detection of Deterministic Signals

**Description:** This topic focuses on the statistical framework for detecting a known, deterministic signal in the presence of noise. We will explore the fundamental principles, optimal decision rules, and performance measures associated with this problem.

**Learning Outcomes:**

*   **LO1:** Understand the problem formulation for detecting deterministic signals in noise.
*   **LO2:** Derive the optimal detector for deterministic signals in additive white Gaussian noise (AWGN).
*   **LO3:** Explain the concept of the likelihood ratio test (LRT) and its application to deterministic signal detection.
*   **LO4:** Analyze the performance of the optimal detector using metrics such as the probability of detection and probability of false alarm.
*   **LO5:** Discuss the Neyman-Pearson criterion for detector design.
*   **LO6:** Introduce the concept of matched filtering for deterministic signal detection.

**Relevant Course Outcomes:**

*   **CO3:** Illustrate the fundamentals of statistical detection principles used in various engineering problems. (Knowledge Level: K2) - This topic directly addresses the fundamentals of detecting signals.
*   **CO4:** Apply various types of statistical decision rules in engineering applications. (Knowledge Level: K3) - The derivation and application of the LRT and Neyman-Pearson are key decision rules covered here.

---

### 1. Problem Formulation for Deterministic Signal Detection

**(LO1, CO3)**

The core problem is to decide between two hypotheses based on noisy observations.

*   **Hypothesis $H_0$ (Null Hypothesis):** Only noise is present.
*   **Hypothesis $H_1$ (Alternative Hypothesis):** A known deterministic signal *plus* noise is present.

**Model:**

We observe a data vector $\mathbf{y}$ of length $N$.

*   Under $H_0$: $\mathbf{y} = \mathbf{n}$
*   Under $H_1$: $\mathbf{y} = \mathbf{s} + \mathbf{n}$

Where:
*   $\mathbf{y}$ is the $N \times 1$ observation vector.
*   $\mathbf{s}$ is the known $N \times 1$ deterministic signal vector.
*   $\mathbf{n}$ is the $N \times 1$ noise vector.

**Assumptions on Noise:**

For most of this topic, we will assume the noise vector $\mathbf{n}$ is:
*   **Additively White Gaussian Noise (AWGN):** This means that the elements of $\mathbf{n}$ are independent and identically distributed (i.i.d.) Gaussian random variables with zero mean and variance $\sigma^2$.
    *   The probability density function (PDF) of the noise vector is:
        $$p(\mathbf{n}|H_0) = p(\mathbf{n}|H_1) = \prod_{i=1}^N \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{n_i^2}{2\sigma^2}} = \left(\frac{1}{2\pi\sigma^2}\right)^{N/2} e^{-\frac{1}{2\sigma^2} \sum_{i=1}^N n_i^2}$$
    *   In matrix notation, if $\mathbf{n}$ is Gaussian with mean $\mathbf{0}$ and covariance matrix $\mathbf{C}_{\mathbf{n}}$, its PDF is:
        $$p(\mathbf{n}) = \frac{1}{(2\pi)^{N/2} |\mathbf{C}_{\mathbf{n}}|^{1/2}} e^{-\frac{1}{2}(\mathbf{n}-\mathbf{0})^T \mathbf{C}_{\mathbf{n}}^{-1} (\mathbf{n}-\mathbf{0})}$$
    *   For AWGN, $\mathbf{C}_{\mathbf{n}} = \sigma^2 \mathbf{I}_N$, where $\mathbf{I}_N$ is the $N \times N$ identity matrix.
        $$p(\mathbf{n}) = \left(\frac{1}{2\pi\sigma^2}\right)^{N/2} e^{-\frac{1}{2\sigma^2} \mathbf{n}^T \mathbf{n}}$$

**Objective:**

The goal is to design a decision rule that tells us whether $\mathbf{y}$ is more likely to have come from $H_0$ or $H_1$.

---

### 2. The Likelihood Ratio Test (LRT)

**(LO3, CO3, CO4)**

The LRT is a fundamental tool in hypothesis testing. It compares the likelihood of observing the data under each hypothesis.

**Likelihood Ratio:**

The likelihood ratio, $\Lambda(\mathbf{y})$, is defined as the ratio of the probability density functions (or probability mass functions for discrete data) of the observation vector $\mathbf{y}$ under the two hypotheses:

$$\Lambda(\mathbf{y}) = \frac{p(\mathbf{y}|H_1)}{p(\mathbf{y}|H_0)}$$

**Decision Rule:**

The LRT states that we decide $H_1$ is true if $\Lambda(\mathbf{y}) > \eta$, and $H_0$ is true if $\Lambda(\mathbf{y}) < \eta$, where $\eta$ is a threshold. The choice of $\eta$ depends on the desired trade-off between different types of errors.

**Derivation for Deterministic Signal in AWGN:**

*   **Under $H_0$:** $\mathbf{y} = \mathbf{n}$. The PDF is:
    $$p(\mathbf{y}|H_0) = \left(\frac{1}{2\pi\sigma^2}\right)^{N/2} e^{-\frac{1}{2\sigma^2} \mathbf{y}^T \mathbf{y}}$$
*   **Under $H_1$:** $\mathbf{y} = \mathbf{s} + \mathbf{n}$. Therefore, $\mathbf{n} = \mathbf{y} - \mathbf{s}$. The PDF is:
    $$p(\mathbf{y}|H_1) = \left(\frac{1}{2\pi\sigma^2}\right)^{N/2} e^{-\frac{1}{2\sigma^2} (\mathbf{y}-\mathbf{s})^T (\mathbf{y}-\mathbf{s})}$$

Now, let's compute the likelihood ratio:

$$\Lambda(\mathbf{y}) = \frac{\left(\frac{1}{2\pi\sigma^2}\right)^{N/2} e^{-\frac{1}{2\sigma^2} (\mathbf{y}-\mathbf{s})^T (\mathbf{y}-\mathbf{s})}}{\left(\frac{1}{2\pi\sigma^2}\right)^{N/2} e^{-\frac{1}{2\sigma^2} \mathbf{y}^T \mathbf{y}}}$$

$$\Lambda(\mathbf{y}) = e^{-\frac{1}{2\sigma^2} (\mathbf{y}-\mathbf{s})^T (\mathbf{y}-\mathbf{s}) + \frac{1}{2\sigma^2} \mathbf{y}^T \mathbf{y}}$$

Expand the term $(\mathbf{y}-\mathbf{s})^T (\mathbf{y}-\mathbf{s})$:
$(\mathbf{y}-\mathbf{s})^T (\mathbf{y}-\mathbf{s}) = (\mathbf{y}^T - \mathbf{s}^T)(\mathbf{y}-\mathbf{s}) = \mathbf{y}^T\mathbf{y} - \mathbf{y}^T\mathbf{s} - \mathbf{s}^T\mathbf{y} + \mathbf{s}^T\mathbf{s}$

Since $\mathbf{s}$ and $\mathbf{y}$ are vectors, $\mathbf{y}^T\mathbf{s}$ is a scalar, and $(\mathbf{y}^T\mathbf{s})^T = \mathbf{s}^T\mathbf{y}$. So, $\mathbf{y}^T\mathbf{s} = \mathbf{s}^T\mathbf{y}$.

$(\mathbf{y}-\mathbf{s})^T (\mathbf{y}-\mathbf{s}) = \mathbf{y}^T\mathbf{y} - 2\mathbf{y}^T\mathbf{s} + \mathbf{s}^T\mathbf{s}$

Substitute this back into the exponent of $\Lambda(\mathbf{y})$:

$$-\frac{1}{2\sigma^2} (\mathbf{y}^T\mathbf{y} - 2\mathbf{y}^T\mathbf{s} + \mathbf{s}^T\mathbf{s}) + \frac{1}{2\sigma^2} \mathbf{y}^T\mathbf{y}$$

$$= -\frac{1}{2\sigma^2} \mathbf{y}^T\mathbf{y} + \frac{1}{\sigma^2} \mathbf{y}^T\mathbf{s} - \frac{1}{2\sigma^2} \mathbf{s}^T\mathbf{s} + \frac{1}{2\sigma^2} \mathbf{y}^T\mathbf{y}$$

$$= \frac{1}{\sigma^2} \mathbf{y}^T\mathbf{s} - \frac{1}{2\sigma^2} \mathbf{s}^T\mathbf{s}$$

So, the likelihood ratio is:

$$\Lambda(\mathbf{y}) = e^{\frac{1}{\sigma^2} (\mathbf{y}^T\mathbf{s} - \frac{1}{2} \mathbf{s}^T\mathbf{s})}$$

**The Decision Statistic:**

The decision rule $\Lambda(\mathbf{y}) > \eta$ is equivalent to comparing the exponent to $\ln(\eta)$:

$$\frac{1}{\sigma^2} (\mathbf{y}^T\mathbf{s} - \frac{1}{2} \mathbf{s}^T\mathbf{s}) > \ln(\eta)$$

Multiplying by $\sigma^2$:

$$\mathbf{y}^T\mathbf{s} - \frac{1}{2} \mathbf{s}^T\mathbf{s} > \sigma^2 \ln(\eta)$$

Since $\frac{1}{2} \mathbf{s}^T\mathbf{s}$ is a constant for a given signal $\mathbf{s}$, and $\sigma^2 \ln(\eta)$ is a constant threshold, we can combine these into a single threshold $T$:

$$\mathbf{y}^T\mathbf{s} > T$$

This is the **optimal decision statistic** for detecting a deterministic signal $\mathbf{s}$ in AWGN. The term $\mathbf{y}^T\mathbf{s}$ is the correlation or projection of the observation vector onto the signal vector.

**(Kay, Vol II, Chapter 2.2.1)**

---

### 3. The Neyman-Pearson Criterion

**(LO5, CO3, CO4)**

The Neyman-Pearson criterion is a widely used approach for designing optimal detectors when we want to minimize the probability of one type of error (usually the probability of false alarm) while maintaining the other type of error below a certain level.

*   **Probability of False Alarm ($P_{FA}$):** The probability of deciding $H_1$ when $H_0$ is actually true.
    $$P_{FA} = P(\Lambda(\mathbf{y}) > \eta | H_0)$$
*   **Probability of Detection ($P_D$):** The probability of deciding $H_1$ when $H_1$ is actually true.
    $$P_D = P(\Lambda(\mathbf{y}) > \eta | H_1)$$

**Neyman-Pearson Goal:**

For a fixed $P_{FA} = \alpha$, maximize $P_D$.

**Neyman-Pearson Theorem:**

The LRT detector that maximizes $P_D$ for a given $P_{FA}$ is the one derived using the likelihood ratio. The threshold $\eta$ is chosen such that the $P_{FA}$ constraint is met.

**Decision Statistic and Threshold:**

The decision statistic is $\mathbf{y}^T\mathbf{s}$. The decision rule is:

Decide $H_1$ if $\mathbf{y}^T\mathbf{s} > T$
Decide $H_0$ if $\mathbf{y}^T\mathbf{s} < T$

The threshold $T$ is determined by the desired $P_{FA}$.

**(Kay, Vol II, Chapter 2.2.2)**

---

### 4. Performance Analysis of the Optimal Detector

**(LO4, CO3, CO4)**

The performance of the detector is characterized by $P_D$ and $P_{FA}$.

**Under $H_0$:** $\mathbf{y} = \mathbf{n}$. The decision statistic is $d(\mathbf{y}) = \mathbf{y}^T\mathbf{s} = \mathbf{n}^T\mathbf{s}$.
Since $\mathbf{n}$ is AWGN, the components $n_i$ are independent Gaussian with mean 0 and variance $\sigma^2$.
The statistic $\mathbf{n}^T\mathbf{s}$ is a linear combination of Gaussian random variables, and thus is also Gaussian.
Mean of $\mathbf{n}^T\mathbf{s}$ under $H_0$: $E[\mathbf{n}^T\mathbf{s}|H_0] = E[\mathbf{n}^T\mathbf{s}] = E[\sum n_i s_i] = \sum E[n_i] s_i = \sum 0 \cdot s_i = 0$.
Variance of $\mathbf{n}^T\mathbf{s}$ under $H_0$:
$Var(\mathbf{n}^T\mathbf{s}|H_0) = E[(\mathbf{n}^T\mathbf{s})^2 | H_0] - (E[\mathbf{n}^T\mathbf{s}|H_0])^2$
$Var(\mathbf{n}^T\mathbf{s}|H_0) = E[(\mathbf{n}^T\mathbf{s})^2] = E[\mathbf{n}^T\mathbf{s}\mathbf{s}^T\mathbf{n}]$
Since $\mathbf{n}$ has covariance $\sigma^2 \mathbf{I}_N$, $E[\mathbf{n}\mathbf{n}^T] = \sigma^2 \mathbf{I}_N$.
$E[\mathbf{n}^T\mathbf{s}\mathbf{s}^T\mathbf{n}] = E[\text{trace}(\mathbf{n}^T\mathbf{s}\mathbf{s}^T\mathbf{n})] = E[\text{trace}(\mathbf{s}\mathbf{n}^T\mathbf{n}\mathbf{s}^T)]$ (trace is cyclic)
$= E[\mathbf{s}^T(\mathbf{n}\mathbf{n}^T)\mathbf{s}] = \mathbf{s}^T E[\mathbf{n}\mathbf{n}^T] \mathbf{s}$
$= \mathbf{s}^T (\sigma^2 \mathbf{I}_N) \mathbf{s} = \sigma^2 \mathbf{s}^T\mathbf{s}$
Let $E_s = \mathbf{s}^T\mathbf{s}$ be the energy of the signal.
So, $Var(\mathbf{n}^T\mathbf{s}|H_0) = \sigma^2 E_s$.

Therefore, under $H_0$, $\mathbf{y}^T\mathbf{s}$ is a Gaussian random variable with mean 0 and variance $\sigma^2 E_s$. We denote this as $\mathbf{y}^T\mathbf{s} \sim \mathcal{N}(0, \sigma^2 E_s)$.

**Calculating $P_{FA}$:**
$P_{FA} = P(\mathbf{y}^T\mathbf{s} > T | H_0)$
$P_{FA} = P\left(\frac{\mathbf{y}^T\mathbf{s}}{\sigma\sqrt{E_s}} > \frac{T}{\sigma\sqrt{E_s}} | H_0\right)$
Let $Z = \frac{\mathbf{y}^T\mathbf{s}}{\sigma\sqrt{E_s}}$. Under $H_0$, $Z \sim \mathcal{N}(0, 1)$ (standard normal).
$P_{FA} = P\left(Z > \frac{T}{\sigma\sqrt{E_s}}\right) = 1 - \Phi\left(\frac{T}{\sigma\sqrt{E_s}}\right)$, where $\Phi(\cdot)$ is the CDF of the standard normal distribution.
From this, we can find the threshold $T$ for a given $P_{FA} = \alpha$:
$\frac{T}{\sigma\sqrt{E_s}} = \Phi^{-1}(1-\alpha)$
$T = \sigma\sqrt{E_s} \Phi^{-1}(1-\alpha)$

**Under $H_1$:** $\mathbf{y} = \mathbf{s} + \mathbf{n}$. The decision statistic is $d(\mathbf{y}) = \mathbf{y}^T\mathbf{s} = (\mathbf{s}+\mathbf{n})^T\mathbf{s} = \mathbf{s}^T\mathbf{s} + \mathbf{n}^T\mathbf{s} = E_s + \mathbf{n}^T\mathbf{s}$.
Mean of $\mathbf{y}^T\mathbf{s}$ under $H_1$: $E[\mathbf{y}^T\mathbf{s}|H_1] = E[E_s + \mathbf{n}^T\mathbf{s}|H_1] = E_s + E[\mathbf{n}^T\mathbf{s}] = E_s + 0 = E_s$.
Variance of $\mathbf{y}^T\mathbf{s}$ under $H_1$: $Var(\mathbf{y}^T\mathbf{s}|H_1) = Var(E_s + \mathbf{n}^T\mathbf{s}|H_1) = Var(\mathbf{n}^T\mathbf{s}) = \sigma^2 E_s$.

Therefore, under $H_1$, $\mathbf{y}^T\mathbf{s}$ is a Gaussian random variable with mean $E_s$ and variance $\sigma^2 E_s$. We denote this as $\mathbf{y}^T\mathbf{s} \sim \mathcal{N}(E_s, \sigma^2 E_s)$.

**Calculating $P_D$:**
$P_D = P(\mathbf{y}^T\mathbf{s} > T | H_1)$
$P_D = P\left(\frac{\mathbf{y}^T\mathbf{s} - E_s}{\sigma\sqrt{E_s}} > \frac{T - E_s}{\sigma\sqrt{E_s}} | H_1\right)$
Let $Z = \frac{\mathbf{y}^T\mathbf{s} - E_s}{\sigma\sqrt{E_s}}$. Under $H_1$, $Z \sim \mathcal{N}(0, 1)$.
$P_D = P\left(Z > \frac{T - E_s}{\sigma\sqrt{E_s}}\right) = 1 - \Phi\left(\frac{T - E_s}{\sigma\sqrt{E_s}}\right)$

Substituting the expression for $T$:
$P_D = 1 - \Phi\left(\frac{\sigma\sqrt{E_s} \Phi^{-1}(1-\alpha) - E_s}{\sigma\sqrt{E_s}}\right)$
$P_D = 1 - \Phi\left(\Phi^{-1}(1-\alpha) - \frac{E_s}{\sigma\sqrt{E_s}}\right)$
$P_D = 1 - \Phi\left(\Phi^{-1}(1-\alpha) - \sqrt{\frac{E_s}{\sigma^2}}\right)$

Let $SNR = \frac{E_s}{\sigma^2}$ be the signal-to-noise ratio (in terms of energy per variance).
$P_D = 1 - \Phi\left(\Phi^{-1}(1-\alpha) - \sqrt{SNR}\right)$

This formula shows that $P_D$ increases with $\sqrt{SNR}$, which is expected.
For small $P_{FA}$ (e.g., $10^{-6}$), $\Phi^{-1}(1-\alpha)$ is a large positive number (e.g., $\approx 4.75$).
Let $d = \Phi^{-1}(1-\alpha)$ be the normalized threshold.
$P_D = 1 - \Phi(d - \sqrt{SNR})$

**(Kay, Vol II, Chapter 2.3)**

**Important Point:** The performance is determined by the signal energy $E_s = \mathbf{s}^T\mathbf{s}$ and the noise variance $\sigma^2$.

---

### 5. Matched Filtering

**(LO6, CO3, CO4)**

Matched filtering is the optimal linear filtering technique for detecting a known deterministic signal in AWGN. It is directly derived from the LRT.

**The Optimal Detector as a Filter:**

The decision statistic $\mathbf{y}^T\mathbf{s}$ can be interpreted as the output of a filter when the received signal is $\mathbf{y}$.
Consider a discrete-time filter with impulse response $h[n]$. Its output $z[n]$ when the input is $y[n]$ is given by the convolution:
$z[n] = \sum_{k=-\infty}^{\infty} y[k] h[n-k]$

In vector notation, if we consider the output at a specific time $N$ and use the signal $\mathbf{s}$ as the filter's impulse response (reversed and shifted):
The term $\mathbf{y}^T\mathbf{s}$ is equivalent to correlating the received signal $\mathbf{y}$ with the known signal $\mathbf{s}$.
$\mathbf{y}^T\mathbf{s} = s_1 y_1 + s_2 y_2 + \dots + s_N y_N$

This is precisely the output of a filter whose impulse response $h[n]$ is a time-reversed and shifted version of the signal $s[n]$.
Let $s[n]$ be the signal for $n = 0, 1, \dots, N-1$.
The matched filter impulse response is $h[n] = s[N-1-n]$ for $n = 0, 1, \dots, N-1$.
The output of the matched filter at time $N-1$ is:
$z[N-1] = \sum_{k=0}^{N-1} y[k] h[N-1-k] = \sum_{k=0}^{N-1} y[k] s[N-1-(N-1-k)] = \sum_{k=0}^{N-1} y[k] s[k] = \mathbf{y}^T\mathbf{s}$

**Properties of the Matched Filter:**

*   **Maximizes Signal-to-Noise Ratio (SNR) at the output:** For a given input signal and noise, the matched filter maximizes the instantaneous SNR at the sampling instant corresponding to the end of the signal.
*   **Structure:** The impulse response of the matched filter is a time-reversed and scaled replica of the transmitted signal.
*   **Implementation:** Often implemented using a correlator or a Finite Impulse Response (FIR) filter.

**Continuous-Time Case:**

For a continuous-time signal $s(t)$ and noise $n(t)$, the observation is $y(t) = s(t) + n(t)$ for $0 \le t \le T$.
The optimal detector compares the integrated output of a filter matched to $s(t)$ with a threshold.
The matched filter impulse response is $h(\tau) = s(T-\tau)$ for $0 \le \tau \le T$.
The output of the matched filter at time $T$ is:
$z(T) = \int_0^T y(t) h(T-t) dt = \int_0^T y(t) s(t) dt$

The decision statistic is $\int_0^T y(t) s(t) dt$.

**Relationship to LRT:**

The matched filter output is the decision statistic derived from the LRT. The threshold $T$ is adjusted to meet the desired $P_{FA}$.

**(Kay, Vol II, Chapter 2.4)**
**(Van Trees, Vol I, Chapter 3)**

---

### 6. Example: Detection of a Constant Signal

**(LO1, LO2, LO4, CO3)**

Let's consider a simple case: detecting a constant DC signal.

**Problem Setup:**
We observe $N$ samples.
*   $H_0$: $y[n] = n[n]$ for $n=0, \dots, N-1$.
*   $H_1$: $y[n] = A + n[n]$ for $n=0, \dots, N-1$, where $A$ is a known constant.
The noise $n[n]$ is AWGN with mean 0 and variance $\sigma^2$.

**Signal Vector:**
$\mathbf{s} = [A, A, \dots, A]^T$.

**Signal Energy:**
$E_s = \mathbf{s}^T\mathbf{s} = \sum_{n=0}^{N-1} A^2 = N A^2$.

**Decision Statistic:**
The optimal decision statistic is $\mathbf{y}^T\mathbf{s} = \sum_{n=0}^{N-1} y[n] s[n] = \sum_{n=0}^{N-1} y[n] A = A \sum_{n=0}^{N-1} y[n]$.

**Decision Rule:**
Decide $H_1$ if $A \sum_{n=0}^{N-1} y[n] > T$.

**Analysis under Hypotheses:**
*   **Under $H_0$:** $y[n] = n[n]$.
    $\mathbf{y}^T\mathbf{s} = A \sum_{n=0}^{N-1} n[n]$.
    $E[\mathbf{y}^T\mathbf{s}|H_0] = A \sum E[n[n]] = A \sum 0 = 0$.
    $Var(\mathbf{y}^T\mathbf{s}|H_0) = A^2 Var(\sum n[n]) = A^2 \sum Var(n[n])$ (due to independence)
    $Var(\mathbf{y}^T\mathbf{s}|H_0) = A^2 \sum \sigma^2 = A^2 N \sigma^2 = \sigma^2 (NA^2) = \sigma^2 E_s$.
    So, under $H_0$, $\mathbf{y}^T\mathbf{s} \sim \mathcal{N}(0, \sigma^2 E_s)$.

*   **Under $H_1$:** $y[n] = A + n[n]$.
    $\mathbf{y}^T\mathbf{s} = A \sum_{n=0}^{N-1} (A + n[n]) = A \sum A + A \sum n[n] = N A^2 + A \sum n[n] = E_s + A \sum n[n]$.
    $E[\mathbf{y}^T\mathbf{s}|H_1] = E[E_s + A \sum n[n]] = E_s + A \sum E[n[n]] = E_s + 0 = E_s$.
    $Var(\mathbf{y}^T\mathbf{s}|H_1) = Var(E_s + A \sum n[n]) = Var(A \sum n[n]) = \sigma^2 E_s$.
    So, under $H_1$, $\mathbf{y}^T\mathbf{s} \sim \mathcal{N}(E_s, \sigma^2 E_s)$.

**Performance:**
The SNR is $SNR = \frac{E_s}{\sigma^2} = \frac{NA^2}{\sigma^2}$.

The threshold $T$ for a given $P_{FA} = \alpha$ is:
$T = \sigma\sqrt{E_s} \Phi^{-1}(1-\alpha) = \sigma \sqrt{NA^2} \Phi^{-1}(1-\alpha) = \sigma |A| \sqrt{N} \Phi^{-1}(1-\alpha)$.

The probability of detection is:
$P_D = 1 - \Phi\left(\Phi^{-1}(1-\alpha) - \sqrt{SNR}\right) = 1 - \Phi\left(\Phi^{-1}(1-\alpha) - \frac{|A|\sqrt{N}}{\sigma}\right)$.

**Example Calculation:**
Let $N=10$, $A=5$, $\sigma=2$.
$E_s = 10 \times 5^2 = 250$.
$SNR = \frac{250}{2^2} = \frac{250}{4} = 62.5$.
$\sqrt{SNR} = \sqrt{62.5} \approx 7.9$.

Let $P_{FA} = 10^{-3}$. Then $\Phi^{-1}(1-10^{-3}) = \Phi^{-1}(0.999) \approx 3.09$.
$T = 2 \sqrt{250} \times 3.09 = 2 \times 15.8 \times 3.09 \approx 97.6$.
Decision rule: Decide $H_1$ if $5 \sum y[n] > 97.6$, or $\sum y[n] > 19.52$.

$P_D = 1 - \Phi(3.09 - 7.9) = 1 - \Phi(-4.81) = \Phi(4.81)$.
Since $\Phi(4.81)$ is very close to 1, the detector is highly likely to detect the signal.

---

### Key Points to Remember

*   **Deterministic Signal Detection:** The goal is to distinguish between the absence and presence of a *known* signal waveform $\mathbf{s}$.
*   **AWGN Assumption:** This simplifies the problem significantly, leading to the LRT.
*   **Likelihood Ratio Test (LRT):** Compares the ratio of probabilities $p(\mathbf{y}|H_1) / p(\mathbf{y}|H_0)$ to a threshold.
*   **Optimal Decision Statistic:** For deterministic signals in AWGN, the optimal decision statistic is the correlation of the observation vector with the signal vector: $\mathbf{y}^T\mathbf{s}$.
*   **Neyman-Pearson Criterion:** Provides a framework to set the threshold for a desired probability of false alarm ($P_{FA}$) while maximizing the probability of detection ($P_D$).
*   **Performance Metrics:** $P_D$ and $P_{FA}$ are key performance measures. The ROC (Receiver Operating Characteristic) curve plots $P_D$ vs. $P_{FA}$.
*   **Signal Energy and SNR:** Performance is directly related to the signal energy ($E_s$) and inversely related to the noise variance ($\sigma^2$). A higher SNR leads to better detection performance ($P_D$ closer to 1).
*   **Matched Filter:** The optimal linear filter for this problem, with an impulse response that is a time-reversed replica of the signal. It maximizes the SNR at its output.

---

### Practice Questions and Exercises

**Question 1:**
Consider the problem of detecting a known signal vector $\mathbf{s}$ in AWGN $\mathbf{n}$ with mean $\mathbf{0}$ and covariance $\sigma^2 \mathbf{I}_N$. State the two hypotheses and the general form of the observation vector $\mathbf{y}$ under each hypothesis.

**Answer 1:**
*   **$H_0$ (Null Hypothesis):** Only noise is present. $\mathbf{y} = \mathbf{n}$.
*   **$H_1$ (Alternative Hypothesis):** Signal plus noise is present. $\mathbf{y} = \mathbf{s} + \mathbf{n}$.

**Question 2:**
For the problem described in Question 1, derive the decision statistic for the Likelihood Ratio Test (LRT). Show the steps involved.

**Answer 2:**
The decision statistic is $\mathbf{y}^T\mathbf{s}$.
The LRT compares $\Lambda(\mathbf{y}) = \frac{p(\mathbf{y}|H_1)}{p(\mathbf{y}|H_0)} > \eta$.
Using the PDFs for AWGN:
$p(\mathbf{y}|H_0) = \left(\frac{1}{2\pi\sigma^2}\right)^{N/2} e^{-\frac{1}{2\sigma^2} \mathbf{y}^T \mathbf{y}}$
$p(\mathbf{y}|H_1) = \left(\frac{1}{2\pi\sigma^2}\right)^{N/2} e^{-\frac{1}{2\sigma^2} (\mathbf{y}-\mathbf{s})^T (\mathbf{y}-\mathbf{s})}$
Taking the logarithm of the ratio (or working directly with the exponent):
$\ln \Lambda(\mathbf{y}) = -\frac{1}{2\sigma^2} (\mathbf{y}-\mathbf{s})^T (\mathbf{y}-\mathbf{s}) + \frac{1}{2\sigma^2} \mathbf{y}^T \mathbf{y}$
$\ln \Lambda(\mathbf{y}) = \frac{1}{2\sigma^2} [\mathbf{y}^T\mathbf{y} - (\mathbf{y}^T\mathbf{y} - 2\mathbf{y}^T\mathbf{s} + \mathbf{s}^T\mathbf{s})] = \frac{1}{2\sigma^2} [2\mathbf{y}^T\mathbf{s} - \mathbf{s}^T\mathbf{s}]$
The decision rule $\ln \Lambda(\mathbf{y}) > \ln \eta$ becomes:
$\frac{1}{2\sigma^2} [2\mathbf{y}^T\mathbf{s} - \mathbf{s}^T\mathbf{s}] > \ln \eta$
$2\mathbf{y}^T\mathbf{s} - \mathbf{s}^T\mathbf{s} > 2\sigma^2 \ln \eta$
$\mathbf{y}^T\mathbf{s} > \frac{1}{2}\mathbf{s}^T\mathbf{s} + \sigma^2 \ln \eta$
Let $T = \frac{1}{2}\mathbf{s}^T\mathbf{s} + \sigma^2 \ln \eta$. The decision statistic is $\mathbf{y}^T\mathbf{s}$.

**Question 3:**
A known signal $\mathbf{s}$ of energy $E_s = 100$ is transmitted in AWGN with variance $\sigma^2 = 5$. If the probability of false alarm is set to $P_{FA} = 10^{-5}$, what is the approximate probability of detection $P_D$ for a deterministic signal detector? (Use $\Phi^{-1}(0.99999) \approx 4.41$).

**Answer 3:**
The SNR is $\frac{E_s}{\sigma^2} = \frac{100}{5} = 20$.
$\sqrt{SNR} = \sqrt{20} \approx 4.47$.
Let $d = \Phi^{-1}(1-P_{FA}) = \Phi^{-1}(1-10^{-5}) \approx 4.41$.
$P_D = 1 - \Phi(d - \sqrt{SNR})$
$P_D \approx 1 - \Phi(4.41 - 4.47) = 1 - \Phi(-0.06)$
Using $\Phi(-x) = 1 - \Phi(x)$, $P_D \approx 1 - (1 - \Phi(0.06)) = \Phi(0.06)$.
From standard normal tables or calculators, $\Phi(0.06) \approx 0.5239$.
So, $P_D \approx 0.5239$.

**Question 4:**
Describe the role of the matched filter in the detection of deterministic signals. What is its impulse response in terms of the signal $s(t)$?

**Answer 4:**
The matched filter is the optimal linear filter for detecting a known deterministic signal in AWGN. It maximizes the output Signal-to-Noise Ratio (SNR) at a specific sampling time, which corresponds to the peak SNR output for the signal. Its impulse response $h(\tau)$ is a time-reversed and scaled replica of the signal waveform $s(t)$. For a signal $s(t)$ transmitted over the interval $[0, T]$, the matched filter impulse response is $h(\tau) = s(T-\tau)$ for $0 \le \tau \le T$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### References

*   **Kay, S. M. (2010).** *Fundamentals of Statistical Signal Processing, Vol II: Detection Theory*. Pearson Education. (Chapters 2)
*   **Van Trees, H. L. (2001).** *Detection, Estimation, and Modulation Theory, Vol. I*. John Wiley & Sons. (Chapters 2 and 3 for introductory concepts and matched filtering)
*   **Hayes, M. H. (2018).** *Statistical Digital Signal Processing and Modelling*. John Wiley & Sons. (Covers similar topics on hypothesis testing and optimal receivers).

---