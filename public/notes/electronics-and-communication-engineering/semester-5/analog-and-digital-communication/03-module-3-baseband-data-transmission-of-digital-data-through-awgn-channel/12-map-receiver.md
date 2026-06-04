---
title: "MAP receiver"
subject: "ANALOG AND DIGITAL COMMUNICATION"
module: "Module 3: Baseband data transmission of digital data through AWGN channel"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe915"
status: "completed"
scrapedAt: "2026-05-23T17:53:02.706Z"
---
# ANALOG AND DIGITAL COMMUNICATION - Module 3: Baseband Data Transmission of Digital Data through AWGN Channel

## Topic: MAP Receiver

---

### 1. Introduction to Digital Communication Receivers and the AWGN Channel

*   **Goal of a Digital Communication Receiver:** To reliably recover the transmitted digital data (bits) from a noisy received signal.
*   **AWGN Channel:** A widely used model for a communication channel that introduces additive white Gaussian noise.
    *   **Additive:** The noise is added to the transmitted signal.
    *   **White:** The noise has a constant power spectral density over all frequencies.
    *   **Gaussian:** The noise amplitude follows a Gaussian (normal) probability distribution.
*   **Key Challenge:** Distinguishing between transmitted symbols in the presence of noise. The noise can corrupt the signal such that the received signal is no longer a perfect replica of the transmitted waveform.

---

### 2. Optimal Receiver Design Principles

*   **The Receiver's Task:** Given a received signal $r(t)$, the receiver needs to decide which transmitted symbol (or sequence of symbols) was most likely sent.
*   **Bayes' Criterion:** The optimal decision rule, in a statistical sense, is to choose the symbol that maximizes the *a posteriori* probability (APP) of that symbol given the received signal. This leads to the **Maximum A Posteriori (MAP) Receiver**.
*   **Relationship to other Criteria:**
    *   **Maximum Likelihood (ML) Receiver:** Assumes all transmitted symbols are equally likely. Maximizes the *likelihood* of the received signal given each possible transmitted symbol.
    *   **MAP Receiver is more general:** If prior probabilities of symbols are known and non-uniform, MAP is optimal. If all symbols are equally likely (uniform prior probabilities), MAP becomes identical to ML.

---

### 3. The MAP Receiver - Derivation and Concept

#### 3.1 Likelihood Function and A Posteriori Probability

Let $s_i(t)$ be the transmitted waveform corresponding to symbol $i$, and let $x(t)$ be the received signal.
The received signal $x(t)$ in an AWGN channel can be modeled as:
$x(t) = s_i(t) + n(t)$
where $n(t)$ is the additive white Gaussian noise with a power spectral density of $N_0/2$ W/Hz.

The **likelihood function**, denoted by $p(x|s_i)$, is the probability density function of the received signal $x(t)$ given that symbol $s_i$ was transmitted. For an AWGN channel, the likelihood function for a received signal $x(t)$ is given by:

$p(x|s_i) = \frac{1}{\sqrt{2\pi \sigma^2}} e^{-\frac{1}{2\sigma^2} \int_{0}^{T_s} (x(t) - s_i(t))^2 dt}$

where $T_s$ is the symbol duration and $\sigma^2$ is the variance of the noise, related to the noise power spectral density by $\sigma^2 = N_0 T_s / 2$.

The **a posteriori probability (APP)** of symbol $i$ given the received signal $x$ is $p(s_i|x)$. Using Bayes' theorem:

$p(s_i|x) = \frac{p(x|s_i) p(s_i)}{p(x)}$

where:
*   $p(s_i)$ is the **prior probability** of transmitting symbol $i$.
*   $p(x)$ is the probability of the received signal $x$, which acts as a normalization constant and can be calculated as $p(x) = \sum_j p(x|s_j) p(s_j)$ over all possible transmitted symbols $j$.

#### 3.2 The MAP Decision Rule

The MAP receiver chooses the symbol $i$ that maximizes $p(s_i|x)$. To simplify the maximization, we can equivalently maximize the logarithm of the APP or, since $p(x)$ is common to all terms, maximize $p(x|s_i) p(s_i)$.

Maximizing $p(s_i|x)$ is equivalent to maximizing $\ln(p(s_i|x))$:

$\ln(p(s_i|x)) = \ln(p(x|s_i)) + \ln(p(s_i)) - \ln(p(x))$

Ignoring the constant $\ln(p(x))$, we need to maximize:

$\ln(p(x|s_i)) + \ln(p(s_i))$

Let's expand the log-likelihood term:

$\ln(p(x|s_i)) = \ln\left(\frac{1}{\sqrt{2\pi \sigma^2}} e^{-\frac{1}{2\sigma^2} \int_{0}^{T_s} (x(t) - s_i(t))^2 dt}\right)$
$\ln(p(x|s_i)) = -\ln(\sqrt{2\pi \sigma^2}) - \frac{1}{2\sigma^2} \int_{0}^{T_s} (x(t) - s_i(t))^2 dt$

The term $\int_{0}^{T_s} (x(t) - s_i(t))^2 dt$ is the squared Euclidean distance between the received signal and the transmitted signal $s_i(t)$. Let's expand it:

$\int_{0}^{T_s} (x(t) - s_i(t))^2 dt = \int_{0}^{T_s} x^2(t) dt - 2 \int_{0}^{T_s} x(t)s_i(t) dt + \int_{0}^{T_s} s_i^2(t) dt$

Since the first term $\int_{0}^{T_s} x^2(t) dt$ is independent of the transmitted symbol $s_i$, we can omit it for maximization. The term $\int_{0}^{T_s} s_i^2(t) dt$ is the energy of the waveform $s_i(t)$, let's denote it by $E_i$.

So, we need to maximize:

$-\frac{1}{2\sigma^2} \left( -2 \int_{0}^{T_s} x(t)s_i(t) dt + E_i \right) + \ln(p(s_i))$

Multiplying by $-2\sigma^2$ (and reversing the inequality since we are multiplying by a negative number) or by $2\sigma^2$ and keeping the maximization:

Maximize: $\int_{0}^{T_s} x(t)s_i(t) dt - \frac{1}{2} E_i + \sigma^2 \ln(p(s_i))$

*   **Key Insight:** The term $\int_{0}^{T_s} x(t)s_i(t) dt$ represents the output of a correlation receiver (matched filter output). It measures how well the received signal $x(t)$ correlates with the possible transmitted signal $s_i(t)$.

*   **MAP Decision Metric:** The MAP receiver computes a decision metric $M_i$ for each possible transmitted symbol $i$:

    $M_i = \int_{0}^{T_s} x(t)s_i(t) dt + \frac{N_0 T_s}{2} \ln(p(s_i))$

    The receiver chooses the symbol $i$ for which $M_i$ is maximum.
    *Note: The energy term $E_i$ can be incorporated into the correlation term if $s_i(t)$ are normalized to have unit energy or if we consider the squared distance.*
    A more direct derivation often leads to maximizing:
    $M'_i = \int_{0}^{T_s} x(t)s_i(t) dt + \frac{N_0}{2} \ln(p(s_i))$

    Let's consider the received signal as a vector $\mathbf{r}$ and transmitted signals as vectors $\mathbf{s}_i$. For baseband transmission and passband transmission with matched filters, the received signal after sampling can be represented by a vector of $N$ samples or, equivalently, by its projection onto a set of basis functions. In many cases, especially with pulse amplitude modulation (PAM), this simplifies to considering a single sample per symbol interval.

    If we consider the signal after passing through matched filters matched to the transmitted pulses, the output at the sampling instant $T_s$ for symbol $i$ can be represented as $y_i = \int_{0}^{T_s} x(t)s_i(t) dt$. However, this assumes a specific orthonormal basis. A more general approach considers the received signal vector $\mathbf{r}$ and the signal vectors $\mathbf{s}_i$.

    For digital PAM schemes, the transmitted signal can be represented as $s(t) = \sum_k d_k g(t - k T_s)$, where $d_k$ are the data symbols and $g(t)$ is the pulse shaping function. The received signal is $x(t) = s(t) + n(t)$. After sampling at the symbol interval, we get a set of received values.

    Let's consider a simplified case of a single symbol transmission over a baseband channel. The received signal $x(t)$ is sampled at the optimal sampling instant $t_0$ within the symbol interval. Let the sampled value be $y = s_i + n$, where $s_i$ is the transmitted signal amplitude for symbol $i$, and $n$ is the noise sample.

    The likelihood function for a single sample $y$ is $p(y|s_i) = \frac{1}{\sqrt{2\pi \sigma_n^2}} e^{-\frac{(y-s_i)^2}{2\sigma_n^2}}$.
    The MAP criterion is to maximize $p(y|s_i) p(s_i)$.
    Maximizing $\ln(p(y|s_i) p(s_i)) = \ln(p(y|s_i)) + \ln(p(s_i))$
    $= -\frac{(y-s_i)^2}{2\sigma_n^2} + \ln(p(s_i)) + \text{constants}$

    To maximize, we can minimize $\frac{(y-s_i)^2}{2\sigma_n^2} - \ln(p(s_i))$.
    Or, equivalently, maximize $\frac{y s_i}{ \sigma_n^2} - \frac{s_i^2}{2\sigma_n^2} + \ln(p(s_i))$.
    Multiplying by $2\sigma_n^2$:
    Maximize: $2 y s_i - s_i^2 + 2\sigma_n^2 \ln(p(s_i))$

    This is equivalent to maximizing:
    $M_i = y s_i - \frac{1}{2} s_i^2 + \sigma_n^2 \ln(p(s_i))$
    (assuming $s_i$ are the signal amplitudes and not waveforms, and $\sigma_n^2$ is the variance of the sampled noise).

    If we have multiple samples or a vector representation $\mathbf{y}$ and signal vectors $\mathbf{s}_i$, the metric becomes:
    $M_i = \mathbf{y}^T \mathbf{s}_i - \frac{1}{2} \mathbf{s}_i^T \mathbf{s}_i + \sigma_n^2 \ln(p(s_i))$
    Or, more commonly, using the squared Euclidean distance:
    $M_i = -\frac{1}{2\sigma_n^2} ||\mathbf{y} - \mathbf{s}_i||^2 + \ln(p(s_i))$
    $M_i = -\frac{1}{2\sigma_n^2} (\mathbf{y}^T\mathbf{y} - 2\mathbf{y}^T\mathbf{s}_i + \mathbf{s}_i^T\mathbf{s}_i) + \ln(p(s_i))$
    Ignoring $\mathbf{y}^T\mathbf{y}$ (constant for all $i$), and multiplying by $-2\sigma_n^2$:
    Maximize: $\mathbf{y}^T\mathbf{s}_i - \frac{1}{2}\mathbf{s}_i^T\mathbf{s}_i + \sigma_n^2 \ln(p(s_i))$

*   **Comparison with ML Receiver:** The ML receiver has the same metric but assumes $p(s_i) = 1/M$ for all $M$ symbols, so $\ln(p(s_i))$ is a constant and is ignored. The MAP receiver incorporates the prior probabilities, making it optimal when symbol probabilities are not uniform.

#### 3.3 Implementation of the MAP Receiver

The MAP receiver typically involves:
1.  **Correlators or Matched Filters:** For each possible transmitted symbol waveform $s_i(t)$, a correlator (or matched filter) is used. The output of the $i$-th correlator at the sampling instant is $y_i = \int_{0}^{T_s} x(t)s_i(t) dt$.
2.  **Bias Term Calculation:** For each symbol $i$, a bias term is calculated based on the prior probability: $B_i = \frac{N_0 T_s}{2} \ln(p(s_i))$.
3.  **Decision Metric Computation:** The decision metric for each symbol is computed as $M_i = y_i + B_i$. (Note: This form arises from maximizing the original expression, assuming normalized energy for $s_i$ or a slightly different derivation of the terms).
4.  **Decision:** The symbol $i$ corresponding to the maximum $M_i$ is declared as the transmitted symbol.

**Example (Conceptual):**
Consider a Binary Phase Shift Keying (BPSK) system where symbols are $+A$ and $-A$.
Transmitted waveforms: $s_1(t) = A$ for symbol '1', $s_0(t) = -A$ for symbol '0'.
Let's assume equal prior probabilities: $p(s_1) = p(s_0) = 0.5$. Then $\ln(p(s_1)) = \ln(p(s_0)) = \ln(0.5)$.
The received signal is $x(t) = s_i(t) + n(t)$.
We correlate $x(t)$ with $s_1(t)$ and $s_0(t)$ over $T_s$.
Output of correlator for $s_1$: $y_1 = \int_0^{T_s} x(t) s_1(t) dt$.
Output of correlator for $s_0$: $y_0 = \int_0^{T_s} x(t) s_0(t) dt$.

The decision metrics are:
$M_1 = y_1 + \frac{N_0 T_s}{2} \ln(0.5)$
$M_0 = y_0 + \frac{N_0 T_s}{2} \ln(0.5)$

Since the bias terms are the same for both symbols, the MAP receiver reduces to the ML receiver, which simply compares $y_1$ and $y_0$. If $y_1 > y_0$, choose '1', else choose '0'.

Now, suppose symbol '1' is more likely, e.g., $p(s_1) = 0.8$ and $p(s_0) = 0.2$.
Then $\ln(p(s_1)) = \ln(0.8)$ and $\ln(p(s_0)) = \ln(0.2)$.
$M_1 = y_1 + \frac{N_0 T_s}{2} \ln(0.8)$
$M_0 = y_0 + \frac{N_0 T_s}{2} \ln(0.2)$

Since $\ln(0.8) > \ln(0.2)$, the bias term for '1' will be larger than for '0'. This means the decision threshold will be effectively shifted to favor '1', reflecting the higher prior probability.

---

### 4. MAP Receiver vs. ML Receiver

| Feature               | MAP Receiver                                       | ML Receiver                                           |
| :-------------------- | :------------------------------------------------- | :---------------------------------------------------- |
| **Optimality**        | Optimal in minimizing probability of error when prior probabilities are known. | Optimal when prior probabilities are unknown or uniform. |
| **Decision Rule**     | Maximizes $p(\text{symbol}| \text{received signal})$ | Maximizes $p(\text{received signal}| \text{symbol})$ |
| **Metric**            | Incorporates prior probabilities $p(s_i)$.        | Ignores prior probabilities (assumes uniform).        |
| **Performance (BER)** | Can achieve better Bit Error Rate (BER) if prior probabilities are significantly non-uniform and known correctly. | Best possible BER for uniform symbol probabilities. |
| **Complexity**        | Slightly higher complexity due to calculation of bias terms involving $\ln(p(s_i))$. | Simpler, as it only involves correlation and comparison. |
| **Textbook Reference**| Haykin & Moher (5th Ed., 2020), Sec. 6.3.2 (General Bayesian Receiver) | Lathi & Ding (5th Ed., 2018), Sec. 8.3 (Maximum Likelihood Detection) |

**Important Point:** In many practical digital communication systems, the assumption of uniform symbol probabilities is made. In such cases, the MAP receiver becomes identical to the ML receiver. The MAP framework is more general and provides the foundation for understanding optimal detection in non-uniform probability scenarios.

---

### 5. MAP Receiver for Specific Digital Modulation Schemes (Brief Overview)

The general principles apply to various modulation schemes like PAM, PSK, FSK, etc. The specific forms of $s_i(t)$ and the calculation of correlation outputs will differ.

*   **For PAM (Pulse Amplitude Modulation):**
    *   Symbols are represented by different amplitude levels.
    *   Received signal after sampling is $y = s_i + n$.
    *   MAP metric for discrete symbols: Maximize $y \cdot s_i - \frac{1}{2} s_i^2 + \sigma_n^2 \ln(p(s_i))$.
    *   The receiver compares the sampled value $y$ with decision thresholds that are adjusted by the prior probabilities.

*   **For PSK (Phase Shift Keying):**
    *   Symbols are represented by different phases.
    *   The received signal can be decomposed into in-phase (I) and quadrature (Q) components.
    *   The decision metric will involve correlating the received I and Q components with the transmitted I and Q components for each possible phase.

**Learning Outcome Connection:**
*   **CO1, CO2:** Understanding the need for receivers and the AWGN channel is fundamental to digital communication principles.
*   **CO3:** This topic directly addresses the analysis of baseband transmission through AWGN by defining the optimal receiver strategy.
*   **CO4:** While this topic focuses on detection, the principles inform the design of digital communication systems by defining the target for signal recovery.

---

### 6. Examples and Practice Questions

**Example 1: Binary Signal with Non-Uniform Probabilities**

Consider a binary communication system transmitting symbols '0' and '1'. The transmitted signals are $s_0(t) = -A$ and $s_1(t) = +A$ for $0 \le t \le T_s$. The channel is AWGN with variance $\sigma^2$ for the sampled noise. Suppose the prior probabilities are $p(1) = 0.7$ and $p(0) = 0.3$.

A sample of the received signal is $y$.

**Question:** What is the decision rule for the MAP receiver?

**Solution:**
The MAP receiver maximizes $p(s_i|y) \propto p(y|s_i) p(s_i)$.
For AWGN, $p(y|s_i) = \frac{1}{\sqrt{2\pi \sigma^2}} e^{-\frac{(y-s_i)^2}{2\sigma^2}}$.
We need to maximize $\ln(p(y|s_i)) + \ln(p(s_i)) = -\frac{(y-s_i)^2}{2\sigma^2} + \ln(p(s_i)) + \text{constants}$.

Let's compare the metrics for symbol '1' and '0':
Metric for '1': $M_1 = -\frac{(y-A)^2}{2\sigma^2} + \ln(0.7)$
Metric for '0': $M_0 = -\frac{(y-(-A))^2}{2\sigma^2} + \ln(0.3)$

The receiver chooses '1' if $M_1 > M_0$.
$-\frac{(y-A)^2}{2\sigma^2} + \ln(0.7) > -\frac{(y+A)^2}{2\sigma^2} + \ln(0.3)$
$\frac{(y+A)^2 - (y-A)^2}{2\sigma^2} > \ln(0.3) - \ln(0.7)$
$\frac{(y^2 + 2yA + A^2) - (y^2 - 2yA + A^2)}{2\sigma^2} > \ln(0.3/0.7)$
$\frac{4yA}{2\sigma^2} > \ln(3/7)$
$\frac{2yA}{\sigma^2} > \ln(3/7)$

Since $\ln(3/7)$ is negative, and $A>0$, $2A/\sigma^2 > 0$:
$y > \frac{\sigma^2}{2A} \ln(3/7)$
$y > -\frac{\sigma^2}{2A} \ln(7/3)$

Let the decision threshold be $\eta = -\frac{\sigma^2}{2A} \ln(7/3)$.
The decision rule is:
If $y > \eta$, decide '1'.
If $y < \eta$, decide '0'.

**Comparison to ML:** For ML, $p(1)=p(0)=0.5$, so $\ln(0.5)$ for both. The $\ln(p(s_i))$ terms cancel. The decision rule becomes comparing $-\frac{(y-A)^2}{2\sigma^2}$ and $-\frac{(y+A)^2}{2\sigma^2}$, which simplifies to $y > 0$. The threshold is 0. In this case, because $p(1) > p(0)$, the MAP threshold is shifted towards negative values, favoring '1' more easily.

---

**Practice Question 1:**
A binary system transmits $s_0(t) = -1$ and $s_1(t) = +1$ for $0 \le t \le 1$. The channel is AWGN with noise variance $\sigma^2=0.5$. The prior probabilities are $p(1)=0.6$ and $p(0)=0.4$. If the received sample is $y = 0.3$, what is the decision of the MAP receiver?

**Answer to Practice Question 1:**
Metric for '1': $M_1 = -\frac{(0.3-1)^2}{2 \times 0.5} + \ln(0.6) = -\frac{(-0.7)^2}{1} + \ln(0.6) = -0.49 + (-0.51) = -1.00$
Metric for '0': $M_0 = -\frac{(0.3-(-1))^2}{2 \times 0.5} + \ln(0.4) = -\frac{(1.3)^2}{1} + \ln(0.4) = -1.69 + (-0.91) = -2.60$

Since $M_1 > M_0$, the MAP receiver decides '1'.

---

**Practice Question 2:**
For the same system as in Practice Question 1, what is the decision threshold?

**Answer to Practice Question 2:**
We found the decision rule by setting $M_1 = M_0$:
$y > \frac{\sigma^2}{2A} \ln\left(\frac{p(0)}{p(1)}\right)$
Here $A=1$, $\sigma^2=0.5$, $p(0)=0.4$, $p(1)=0.6$.
Threshold $\eta = \frac{0.5}{2 \times 1} \ln\left(\frac{0.4}{0.6}\right) = \frac{0.25}{1} \ln\left(\frac{2}{3}\right) = 0.25 \times (-0.405) \approx -0.101$

If $y > -0.101$, decide '1'. If $y < -0.101$, decide '0'.
The received sample $y=0.3$ is greater than $-0.101$, confirming the decision of '1'.

---

### 7. Important Points to Remember

*   **MAP is the ultimate optimality:** It minimizes the probability of symbol error when symbol probabilities are known.
*   **Prior probabilities are key:** The difference between MAP and ML lies solely in the consideration of $p(s_i)$.
*   **AWGN Simplification:** The AWGN channel allows for a simplified, mathematically tractable derivation of the optimal receiver structure based on correlation or matched filtering.
*   **Trade-off:** While MAP is optimal, its practical implementation requires knowledge of prior probabilities and can be slightly more complex than ML if these probabilities are not uniform.
*   **Foundation for other topics:** The concepts of likelihood and prior probabilities are fundamental in digital communication and extend to more complex channels and coding schemes.

---

This concludes the study notes for the MAP Receiver topic within Module 3. Ensure to review the textbook sections cited for a deeper understanding and more detailed mathematical rigor.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
