---
title: "Maximum likelihood receiver."
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 3: Baseband data transmission of digital data through AWGN channel"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe916"
status: "completed"
scrapedAt: "2026-05-23T17:53:03.420Z"
---
## ANALOG AND DIGITAL COMMUNICATION

### Module 3: Baseband Data Transmission of Digital Data through AWGN Channel

### Topic: Maximum Likelihood Receiver

---

### 1. Introduction and Motivation

In digital communication systems, the goal is to reliably transmit digital data from a sender to a receiver. When this transmission occurs over a channel that is corrupted by noise, such as the Additive White Gaussian Noise (AWGN) channel, the received signal is an altered version of the transmitted signal. The receiver's task is to decide, based on the noisy received signal, which of the possible transmitted symbols was most likely sent.

The **Maximum Likelihood (ML) receiver** is a fundamental concept in digital communication theory that provides the optimal strategy for making this decision. It aims to minimize the probability of error by choosing the transmitted symbol that makes the observed received signal "most likely."

**Learning Outcome Alignment:**

*   **CO3 (Analyze the baseband transmission of digital data through AWGN channel):** Understanding the ML receiver is crucial for analyzing the performance of digital communication systems in the presence of noise.
*   **CO2 (Explain the basic concepts of digital communication):** The ML receiver is a core component in understanding how digital information is recovered.

---

### 2. The AWGN Channel Model

Before delving into the ML receiver, it's important to understand the channel model we are working with.

*   **Baseband Data Transmission:** In baseband transmission, the digital data is directly converted into a sequence of pulses. For example, in Pulse Amplitude Modulation (PAM), a binary '1' might be represented by a positive pulse, and a binary '0' by a negative pulse (or zero).
*   **Additive White Gaussian Noise (AWGN):** This is a common model for communication channels.
    *   **Additive:** The noise is added to the transmitted signal.
    *   **White:** The noise has a constant power spectral density across all frequencies. This means it doesn't favor any particular frequency range.
    *   **Gaussian:** The amplitude distribution of the noise is Gaussian (normal). The probability density function (PDF) of the noise is given by:
        $f_n(n) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{n^2}{2\sigma^2}}$
        where $\sigma^2$ is the variance of the noise, which is directly related to the noise power.

**Mathematical Model:**
If the transmitted signal is denoted by $s(t)$ and the received signal is $r(t)$, then over the AWGN channel:

$r(t) = s(t) + n(t)$

where $n(t)$ is the AWGN.

**Key Concept:** The AWGN channel is characterized by its **two-sided power spectral density** $N_0/2$. The variance of the noise is $\sigma^2 = N_0 B$, where $B$ is the bandwidth of the channel. For a baseband system, the signal energy per bit is typically denoted by $E_b$.

**Textbook Reference:**
*   **Haykin & Moher (5th Ed.):** Chapter 3 discusses channel modeling and the AWGN channel in detail.
*   **Lathi & Ding (5th Ed.):** Chapter 6 covers the AWGN channel and its properties.

---

### 3. The Problem of Signal Detection

At the receiver, we have the noisy signal $r(t)$. The receiver needs to decide which of the possible transmitted symbols was sent. Let's consider a simple binary case where two symbols, $s_0(t)$ and $s_1(t)$, are transmitted during a symbol duration $T$.

*   If symbol 0 was sent, the transmitted signal is $s_0(t)$ for $0 \le t \le T$. The received signal is $r(t) = s_0(t) + n(t)$.
*   If symbol 1 was sent, the transmitted signal is $s_1(t)$ for $0 \le t \le T$. The received signal is $r(t) = s_1(t) + n(t)$.

The receiver typically uses a **matched filter** (or correlator) to process the received signal $r(t)$. The matched filter is designed to maximize the signal-to-noise ratio (SNR) at the sampling instant. For a transmitted pulse $s_i(t)$, the matched filter output at time $T$ is given by:

$y_i = \int_0^T r(t) s_i(t) dt$

Substituting $r(t) = s_j(t) + n(t)$:

$y_i = \int_0^T (s_j(t) + n(t)) s_i(t) dt$
$y_i = \int_0^T s_j(t) s_i(t) dt + \int_0^T n(t) s_i(t) dt$

Let:
*   $s_i$ be the vector representation of the signal $s_i(t)$.
*   $y_i$ be the sampled output of the matched filter at time $T$ when matched to $s_i(t)$.
*   $y_i = s_i \cdot s_j + n'$

where:
*   $s_i \cdot s_j = \int_0^T s_i(t) s_j(t) dt$ is the cross-correlation between $s_i(t)$ and $s_j(t)$.
*   $n' = \int_0^T n(t) s_i(t) dt$ is the noise component at the output of the matched filter.

For antipodal signaling (e.g., binary NRZ), $s_0(t) = -s_1(t)$. In this case, $s_0 \cdot s_0 = s_1 \cdot s_1 = E_b$ (energy per bit), and $s_0 \cdot s_1 = -E_b$.

The term $n'$ is a Gaussian random variable with zero mean and variance $\sigma_n'^2 = \frac{N_0}{2} E_b$. The expected value of $n'$ given $s_i(t)$ was sent is 0.

**Key Concept:** The output of the matched filter can be viewed as a sampled version of the received signal, processed to maximize the signal component and integrate the noise.

---

### 4. The Maximum Likelihood (ML) Receiver Strategy

The ML receiver aims to choose the transmitted symbol that maximizes the *likelihood function* of the observed data. In the context of the AWGN channel and matched filtering, this translates to choosing the symbol whose corresponding matched filter output is closest to the observed output.

Let $y$ be the observed output of the matched filter at the sampling instant. We need to decide whether symbol $i$ (represented by $s_i(t)$) or symbol $j$ (represented by $s_j(t)$) was transmitted.

The ML decision rule is to choose symbol $i$ if $P(y | \text{symbol } i \text{ sent}) > P(y | \text{symbol } j \text{ sent})$ for all $j \neq i$.

Since the noise is Gaussian, the conditional probability density functions (PDFs) are Gaussian.
If symbol $i$ was sent, the matched filter output $y$ has a conditional PDF:

$f(y | \text{symbol } i) = \frac{1}{\sqrt{2\pi\sigma_n'^2}} e^{-\frac{(y - \mu_i)^2}{2\sigma_n'^2}}$

where $\mu_i$ is the expected value of the matched filter output when symbol $i$ is sent.
$\mu_i = \int_0^T s_i(t) s_i(t) dt = E_i$, where $E_i$ is the energy of symbol $i$.

For binary antipodal signaling, let $s_0(t)$ correspond to amplitude $-A$ and $s_1(t)$ to amplitude $+A$. Then $E_0 = E_1 = E_b$.
If $s_0(t)$ is sent, $y = -E_b + n'$. The conditional mean is $\mu_0 = -E_b$.
If $s_1(t)$ is sent, $y = +E_b + n'$. The conditional mean is $\mu_1 = +E_b$.

The ML decision rule is to choose symbol $i$ if $f(y | \text{symbol } i)$ is maximal.
This is equivalent to minimizing the exponent in the Gaussian PDF, which means finding the symbol $i$ that minimizes $(y - \mu_i)^2$.

**Decision Rule:**
Choose symbol $i$ if $(y - \mu_i)^2 < (y - \mu_j)^2$ for all $j \neq i$.

**For Binary Antipodal Signaling:**
We want to choose between $s_0$ (with $\mu_0 = -E_b$) and $s_1$ (with $\mu_1 = +E_b$).
Choose $s_1$ if $(y - E_b)^2 < (y - (-E_b))^2$.
$y^2 - 2yE_b + E_b^2 < y^2 + 2yE_b + E_b^2$
$-2yE_b < 2yE_b$
$0 < 4yE_b$
Since $E_b > 0$, this simplifies to:
$y > 0$

So, for binary antipodal signaling, the ML receiver decides that symbol 1 was sent if the matched filter output $y > 0$, and symbol 0 was sent if $y < 0$.

**Generalization to M-ary Signaling:**
For $M$ possible symbols $s_1(t), s_2(t), \ldots, s_M(t)$, the receiver observes $y$.
The ML receiver chooses symbol $i$ if:
$f(y | \text{symbol } i) > f(y | \text{symbol } j)$ for all $j \neq i$.

Since the conditional means $\mu_i$ can be different, this is equivalent to:
Choose symbol $i$ if $|y - \mu_i| < |y - \mu_j|$ for all $j \neq i$.

This means we choose the symbol whose expected matched filter output $\mu_i$ is closest to the observed output $y$.

**Key Concept: Likelihood Ratio Test (LRT)**
A more formal approach is the Likelihood Ratio Test.
For two hypotheses $H_0$ (symbol 0 sent) and $H_1$ (symbol 1 sent):
The likelihood ratio is $\Lambda(y) = \frac{f(y | H_1)}{f(y | H_0)}$.
The ML decision rule is:
If $\Lambda(y) > \eta$, decide $H_1$.
If $\Lambda(y) < \eta$, decide $H_0$.
For equal prior probabilities and equal costs, $\eta = 1$.

For Gaussian PDFs:
$\Lambda(y) = \frac{\frac{1}{\sqrt{2\pi\sigma_n'^2}} e^{-\frac{(y - \mu_1)^2}{2\sigma_n'^2}}}{\frac{1}{\sqrt{2\pi\sigma_n'^2}} e^{-\frac{(y - \mu_0)^2}{2\sigma_n'^2}}} = e^{\frac{(y - \mu_0)^2 - (y - \mu_1)^2}{2\sigma_n'^2}}$

Taking the natural logarithm (log-likelihood ratio):
$\ln \Lambda(y) = \frac{(y - \mu_0)^2 - (y - \mu_1)^2}{2\sigma_n'^2}$

Setting $\ln \Lambda(y) > 0$:
$(y - \mu_0)^2 - (y - \mu_1)^2 > 0$
$y^2 - 2y\mu_0 + \mu_0^2 - (y^2 - 2y\mu_1 + \mu_1^2) > 0$
$-2y\mu_0 + \mu_0^2 + 2y\mu_1 - \mu_1^2 > 0$
$2y(\mu_1 - \mu_0) + (\mu_0^2 - \mu_1^2) > 0$

For binary antipodal signaling, $\mu_1 = E_b$ and $\mu_0 = -E_b$.
$2y(E_b - (-E_b)) + ((-E_b)^2 - E_b^2) > 0$
$2y(2E_b) + (E_b^2 - E_b^2) > 0$
$4yE_b > 0$
$y > 0$ (since $E_b > 0$)

This confirms the previous result.

**Textbook Reference:**
*   **Haykin & Moher (5th Ed.):** Chapter 4 discusses optimum receivers and the ML criterion.
*   **Lathi & Ding (5th Ed.):** Chapter 6 covers optimum receivers and decision theory.
*   **Proakis & Salehi (Digital Communications, 6th Ed.):** Chapter 3 details signal design and detection, including the ML receiver.

---

### 5. Maximum A Posteriori (MAP) Receiver

While ML is common, sometimes we have prior knowledge about the probabilities of transmitting each symbol. The Maximum A Posteriori (MAP) receiver maximizes the a posteriori probability $P(\text{symbol } i \text{ sent} | y)$.

Using Bayes' theorem:
$P(\text{symbol } i \text{ sent} | y) = \frac{f(y | \text{symbol } i \text{ sent}) P(\text{symbol } i \text{ sent})}{f(y)}$

To decide which symbol $i$ has the highest a posteriori probability, we compare:
$P(\text{symbol } i \text{ sent} | y)$ vs $P(\text{symbol } j \text{ sent} | y)$

$\frac{f(y | \text{symbol } i) P(\text{symbol } i)}{f(y)} > \frac{f(y | \text{symbol } j) P(\text{symbol } j)}{f(y)}$

Since $f(y)$ is the same for both, we compare:
$f(y | \text{symbol } i) P(\text{symbol } i) > f(y | \text{symbol } j) P(\text{symbol } j)$

This is equivalent to comparing the terms $f(y | \text{symbol } i) P(\text{symbol } i)$.

**Relationship between ML and MAP:**
If the prior probabilities $P(\text{symbol } i \text{ sent})$ are equal for all symbols, then the MAP criterion becomes identical to the ML criterion:
$f(y | \text{symbol } i) > f(y | \text{symbol } j)$

In many digital communication systems, symbols are transmitted with equal probability, making the ML and MAP receivers equivalent.

**Key Concept:** MAP receiver incorporates prior knowledge of symbol probabilities.

---

### 6. Implementation of the ML Receiver (Correlation Receiver)

The ML receiver, based on the matched filter output, can be implemented using correlators.

For binary antipodal signaling, the decision is made based on the sign of $y = \int_0^T r(t) s(t) dt$, where $s(t)$ is typically $s_1(t)$ (e.g., positive pulse).

The receiver structure often involves:
1.  **Matched Filters:** Two matched filters, one matched to $s_0(t)$ and one to $s_1(t)$.
2.  **Integrators:** The outputs of the matched filters are integrated over the symbol duration $T$.
3.  **Samplers:** The integrated outputs are sampled at $t=T$. Let these samples be $y_0$ and $y_1$.
4.  **Decision Device:** Compares $y_0$ and $y_1$.

If we use antipodal signaling $s_0(t) = -s_1(t)$, then the matched filter for $s_0(t)$ is simply $-s_1(t)$ matched filter. Let's use $s_1(t)$ for matched filtering.
The sampled outputs are:
$y_1 = \int_0^T r(t) s_1(t) dt$
$y_0 = \int_0^T r(t) s_0(t) dt = \int_0^T r(t) (-s_1(t)) dt = - \int_0^T r(t) s_1(t) dt = -y_1$

The decision rule $y_1 > y_0$ becomes $y_1 > -y_1$, which is $2y_1 > 0$, or $y_1 > 0$.
This confirms that for antipodal signaling, a single matched filter and comparison with zero is sufficient.

**Block Diagram (Binary Antipodal):**

```
     r(t) --> [Matched Filter for s1(t)] --> [Integrator over T] --> [Sampler at T] --> y1 --> [Comparator] --> Decision
                                                                                        ^
                                                                                        |
                                                                                        | (threshold is 0)
```

Alternatively, using the decision rule $y > 0$:

```
     r(t) --> [Matched Filter for s1(t)] --> [Integrator over T] --> [Sampler at T] --> y --> [Compare with 0] --> Decision
```

**Key Concept:** The matched filter is optimal for detecting a known signal in AWGN.

---

### 7. Performance of the ML Receiver

The performance of the ML receiver is characterized by its probability of error, $P_e$.

For binary antipodal signaling, the decision statistic $y$ is a Gaussian random variable with mean $\mu = \pm E_b$ and variance $\sigma_n'^2 = N_0 E_b / 2$.

The probability of error occurs when $y$ crosses the decision threshold (0 in this case).
*   If $s_1$ is sent ($\mu = E_b$), error occurs if $y < 0$.
*   If $s_0$ is sent ($\mu = -E_b$), error occurs if $y > 0$.

Let's calculate $P(\text{error} | s_1 \text{ sent})$:
$P(y < 0 | \mu = E_b) = \int_{-\infty}^{0} \frac{1}{\sqrt{2\pi(N_0 E_b/2)}} e^{-\frac{(x - E_b)^2}{2(N_0 E_b/2)}} dx$

Let $z = \frac{x - E_b}{\sqrt{N_0 E_b/2}}$. Then $dx = \sqrt{N_0 E_b/2} dz$.
When $x=0$, $z = \frac{-E_b}{\sqrt{N_0 E_b/2}} = -\sqrt{\frac{2E_b}{N_0}}$.
$P(\text{error} | s_1 \text{ sent}) = \int_{-\infty}^{-\sqrt{2E_b/N_0}} \frac{1}{\sqrt{2\pi}} e^{-z^2/2} dz = Q\left(\sqrt{\frac{2E_b}{N_0}}\right)$

where $Q(x)$ is the Q-function, defined as $Q(x) = \frac{1}{\sqrt{2\pi}} \int_x^\infty e^{-t^2/2} dt$.

For binary antipodal signaling, $P(\text{error} | s_0 \text{ sent})$ is also $Q\left(\sqrt{\frac{2E_b}{N_0}}\right)$.
If prior probabilities are equal, the total probability of error is:
$P_e = P_e(s_1) P(s_1) + P_e(s_0) P(s_0)$
$P_e = Q\left(\sqrt{\frac{2E_b}{N_0}}\right) \cdot \frac{1}{2} + Q\left(\sqrt{\frac{2E_b}{N_0}}\right) \cdot \frac{1}{2} = Q\left(\sqrt{\frac{2E_b}{N_0}}\right)$

**Signal-to-Noise Ratio (SNR):**
The quantity $\sqrt{\frac{2E_b}{N_0}}$ is often related to the SNR. For a bandwidth $B$ and symbol duration $T$, $E_b = P_{avg} T$. The noise power is $N_0 B$.
The ratio of energy per bit to noise power spectral density is $E_b/N_0$.
A common SNR metric is the ratio of signal power to noise power in the bandwidth, which is related to $E_b/N_0$.
For example, if the signal has amplitude $A$ and is pulsed over $T$, the average power $P_{avg} \approx A^2/2$. The noise power in bandwidth $B$ is $N_0 B$.
The SNR $\rho = \frac{A^2/2}{N_0 B}$ if signal is $A \cos(2\pi f_c t)$.
In baseband, for NRZ signaling, $E_b = A^2 T$.
The ratio $E_b/N_0 = \frac{A^2 T}{N_0}$.

Often, the performance is plotted as $P_e$ versus $E_b/N_0$ (in dB).

**Key Concept:** The performance of the ML receiver in AWGN is quantified by the probability of error, which is a monotonic decreasing function of $E_b/N_0$.

**Reference Book:**
*   **Taub & Schilling (4th Ed.):** Chapter 5 discusses performance analysis of digital communication systems.
*   **Kennedy (6th Ed.):** Chapter 11 covers noise considerations and error probability.

---

### 8. Examples and Applications

**Example 1: Binary Phase Shift Keying (BPSK)**
BPSK is a form of binary antipodal signaling.
*   Symbol 0: represented by waveform $s_0(t) = -\sqrt{\frac{2E_b}{T}} \cos(2\pi f_c t)$ for $0 \le t \le T$.
*   Symbol 1: represented by waveform $s_1(t) = +\sqrt{\frac{2E_b}{T}} \cos(2\pi f_c t)$ for $0 \le t \le T$.

At baseband, this can be thought of as bipolar pulses. For ML detection in AWGN:
The transmitted signal over the channel is $s(t) + n(t)$.
The receiver uses a matched filter, which effectively correlates the received signal with the possible transmitted signals.
For BPSK, the decision variable $y_1$ after matched filtering and sampling is proportional to $\sqrt{E_b/T} \int_0^T (s(t)+n(t)) \cos(2\pi f_c t) dt$.
This simplifies to $y_1 \propto \sqrt{E_b} + n'$, where $n'$ is a Gaussian noise term with variance $N_0 E_b / 2$.
The decision is:
*   If $y_1 > 0$, decide symbol 1 was sent.
*   If $y_1 < 0$, decide symbol 0 was sent.

The probability of error is $P_e = Q\left(\sqrt{\frac{2E_b}{N_0}}\right)$.

**Example 2: Quadrature Phase Shift Keying (QPSK)**
QPSK uses four symbols, typically represented by phases $0, \pi/2, \pi, 3\pi/2$. It can be viewed as two independent binary PSK signals (one in-phase, one quadrature).
For ML detection in QPSK, the receiver makes independent decisions for the in-phase and quadrature components based on their respective matched filter outputs.
If the signal components are $s_I(t)$ and $s_Q(t)$, the received signals are $r_I(t) = s_I(t) + n_I(t)$ and $r_Q(t) = s_Q(t) + n_Q(t)$.
The receiver calculates two decision variables, $y_I$ and $y_Q$, similar to the binary case.
The decision for each bit is made independently using the ML criterion.

**Example 3: Non-coherent Detection vs. Coherent Detection**
The ML receiver discussed here is a **coherent receiver**. It requires knowledge of the carrier phase and frequency at the receiver.
**Non-coherent receivers** do not require carrier phase synchronization but are generally less efficient (have higher error probability) for a given SNR compared to coherent receivers. The ML principle applies to non-coherent detection as well, but the statistics and decision rules differ.

**Learning Outcome Alignment:**
*   **CO4 (Apply various digital modulation techniques):** Understanding the ML receiver is essential for analyzing the performance of modulation schemes like BPSK and QPSK.

---

### 9. Key Points to Remember

*   **Goal of Receiver:** To reliably decide which symbol was transmitted based on the noisy received signal.
*   **ML Criterion:** Choose the symbol that maximizes the likelihood function, or equivalently, minimizes the squared error between the observed output and the expected output of the matched filter.
*   **AWGN Channel:** Characterized by additive, white, Gaussian noise with power spectral density $N_0/2$.
*   **Matched Filter:** Optimal linear filter for detecting a known signal in AWGN, maximizing SNR at the sampling instant.
*   **Decision Statistic:** The output of the matched filter at the sampling instant.
*   **Binary Antipodal Signaling:** For $s_1(t)$ and $s_0(t) = -s_1(t)$, the ML rule is to decide $s_1$ if $y > 0$ and $s_0$ if $y < 0$.
*   **Performance Metric:** Probability of error ($P_e$). For binary antipodal signaling, $P_e = Q(\sqrt{2E_b/N_0})$.
*   **MAP Receiver:** Incorporates prior symbol probabilities; reduces to ML when priors are equal.
*   **Coherent vs. Non-coherent:** ML detection is typically performed with coherent receivers.

---

### 10. Practice Questions and Exercises

**Question 1:**
Consider a binary communication system transmitting pulses $s_0(t)$ and $s_1(t)$ over an AWGN channel. The receiver uses a matched filter. If $s_0(t) = -s_1(t)$ and both have energy $E_b$, and the matched filter output, conditioned on $s_1(t)$ being sent, is $y = E_b + n$, where $n$ is Gaussian noise with variance $\sigma^2 = N_0 E_b / 2$. What is the decision rule for the ML receiver?

**Answer 1:**
The ML receiver chooses the symbol that makes the observed output $y$ closest to its expected value.
If $s_1(t)$ is sent, the expected output is $E_b$.
If $s_0(t)$ is sent, the expected output is $-E_b$.
The decision rule is to choose $s_1$ if $|y - E_b| < |y - (-E_b)|$, and $s_0$ otherwise.
Expanding this:
$(y - E_b)^2 < (y + E_b)^2$
$y^2 - 2yE_b + E_b^2 < y^2 + 2yE_b + E_b^2$
$-2yE_b < 2yE_b$
$0 < 4yE_b$
Since $E_b > 0$, this implies $y > 0$.
So, the ML decision rule is:
*   If $y > 0$, decide $s_1$ was sent.
*   If $y < 0$, decide $s_0$ was sent.

**Question 2:**
For a binary antipodal signaling system operating over an AWGN channel, the energy per bit is $E_b = 10^{-12}$ J, and the noise power spectral density is $N_0 = 10^{-10}$ W/Hz. Calculate the probability of error for the ML receiver.

**Answer 2:**
The probability of error for binary antipodal signaling is given by $P_e = Q\left(\sqrt{\frac{2E_b}{N_0}}\right)$.
First, calculate the ratio $E_b/N_0$:
$E_b/N_0 = \frac{10^{-12} \text{ J}}{10^{-10} \text{ W/Hz}} = 10^{-2} \text{ J/(W/Hz)} = 10^{-2} \text{ (V}^2\text{s)/(V}^2\text{s/Hz)} = 10^{-2} \text{ s} \cdot \text{Hz} = 10^{-2}$
Note: The units of $E_b/N_0$ are dimensionless. $J = W \cdot s$. $W/Hz = W \cdot s$. So $J / (W/Hz) = (W \cdot s) / (W \cdot s) = 1$. So $E_b/N_0 = 10^{-2}$.
Now, calculate $\sqrt{\frac{2E_b}{N_0}}$:
$\sqrt{\frac{2E_b}{N_0}} = \sqrt{2 \times 10^{-2}} = \sqrt{0.02} \approx 0.1414$

The probability of error is $P_e = Q(0.1414)$.
Using a Q-function table or calculator: $Q(0.1414) \approx 0.4438$.

Therefore, the probability of error is approximately $0.4438$.

**Question 3:**
Explain why the matched filter is optimal for detecting a signal in AWGN.

**Answer 3:**
The matched filter is optimal in the sense that it maximizes the output signal-to-noise ratio (SNR) at the sampling instant. For a known signal $s(t)$ in the presence of additive white Gaussian noise, the output of a linear filter with impulse response $h(t)$ when the input is $r(t) = s(t) + n(t)$ is $y(t) = s_o(t) + n_o(t)$. The output SNR is defined as $\frac{s_o^2(T)}{E[n_o^2(T)]}$, where $T$ is the sampling instant. The Schwarz inequality shows that the impulse response $h(t)$ that maximizes this ratio is $h(t) = s(T-t)$ (scaled by a constant), which is the impulse response of the matched filter. By maximizing the SNR, the matched filter ensures that the signal component is as large as possible relative to the noise, thereby minimizing the probability of error in detection.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 11. Further Reading and Resources

*   **Haykin, S., & Moher, M. (2020). *Communication Systems* (5th ed.). Wiley.** (Chapter 4: Optimum receivers)
*   **Lathi, B. P., & Ding, Z. (2018). *Modern Digital and Analog Communication Systems* (5th ed.). Oxford University Press.** (Chapter 6: Optimum receivers)
*   **Proakis, J. G., & Salehi, M. (2020). *Digital Communications* (6th ed.). McGraw-Hill Education.** (Chapter 3: Signal Design and Detection)

---

This concludes the study notes for the Maximum Likelihood Receiver in Module 3. Ensure to review the textbook chapters for a deeper understanding and to explore more advanced concepts and examples.