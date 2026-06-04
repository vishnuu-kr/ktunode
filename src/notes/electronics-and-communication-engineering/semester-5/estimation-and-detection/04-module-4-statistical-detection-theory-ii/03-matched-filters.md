---
title: "matched filters"
subject: "ESTIMATION AND DETECTION"
module: "Module 4: Statistical Detection Theory II"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780febe3"
status: "completed"
scrapedAt: "2026-05-23T17:56:58.726Z"
---
# Module 4: Statistical Detection Theory II - Matched Filters

## 1. Introduction to Matched Filters

**Learning Outcome:**
*   Summarize the fundamentals of statistical estimation principles used in various engineering problems. (CO1, K2)
*   Illustrate the fundamentals of statistical detection principles used in various engineering problems. (CO3, K2)

**Key Concepts & Definitions:**

*   **Signal Detection:** The process of determining whether a known signal is present in a noisy observation. This is a fundamental problem in many engineering disciplines, including communication systems, radar, sonar, and medical imaging.
*   **Hypothesis Testing:** The underlying framework for signal detection. We consider two hypotheses:
    *   $H_0$: Only noise is present.
    *   $H_1$: Signal plus noise is present.
*   **Observation:** The data we receive, typically denoted as $r(t)$ or $r[n]$. This is a function of time or discrete samples.
*   **Noise:** Random disturbances that corrupt the signal. In many detection problems, we assume the noise is Additive White Gaussian Noise (AWGN).
    *   **AWGN:** Noise with a constant power spectral density (white) and a Gaussian probability distribution.
*   **Signal-to-Noise Ratio (SNR):** A measure of the strength of the desired signal relative to the background noise. Higher SNR generally leads to better detection performance.
*   **Optimal Detector:** A detector that maximizes a certain performance metric, such as the probability of correct detection ($P_{DC}$), or minimizes the probability of error ($P_e$).

**Why Matched Filters?**

The core problem in signal detection is to extract the signal from the noise as effectively as possible. A matched filter is designed to do just this. It is an optimal linear filter that maximizes the SNR at its output at a specific sampling instant, given a known signal waveform and AWGN.

**Textbook References:**

*   **Kay, Vol II, Chapter 3 (Detection of Known Signals in Noise):** This chapter extensively covers the principles of optimal detection and introduces the matched filter.
*   **Van Trees, Vol I, Chapter 2 (The General Detection Problem):** Van Trees provides a rigorous mathematical treatment of the detection problem and the derivation of the optimal detector.

## 2. Derivation of the Matched Filter

**Learning Outcome:**
*   Illustrate the fundamentals of statistical detection principles used in various engineering problems. (CO3, K2)
*   Apply different types of estimation algorithms in engineering applications. (CO2, K3) - *While not directly estimation, the principle of maximizing a quantity relates to optimization seen in estimation.*

**Key Concepts & Definitions:**

*   **Linear Filter:** A filter whose output is a linear combination of its input. Mathematically, its output $y(t)$ for an input $x(t)$ is given by $y(t) = x(t) * h(t)$, where $h(t)$ is the impulse response of the filter and '*' denotes convolution.
*   **Signal Model:** We assume a signal $s(t)$ is transmitted over an interval $[0, T]$. The received signal is $r(t) = s(t) + w(t)$, where $w(t)$ is AWGN with zero mean and power spectral density $N_0/2$.
*   **Output of a Linear Filter:** If the input to a linear filter with impulse response $h(t)$ is $r(t)$, its output $y(t)$ is:
    $y(t) = r(t) * h(t) = (s(t) + w(t)) * h(t) = s(t) * h(t) + w(t) * h(t)$.
    Let $s_o(t) = s(t) * h(t)$ (the filtered signal) and $w_o(t) = w(t) * h(t)$ (the filtered noise).
    Then, $y(t) = s_o(t) + w_o(t)$.
*   **Output SNR:** We are interested in the SNR at a specific sampling instant, say $t=T$.
    $SNR = \frac{E[\text{signal component}]^2}{Var[\text{noise component}]} = \frac{(s_o(T))^2}{E[w_o(t)^2]}$
    For AWGN, the variance of the filtered noise is given by $E[w_o(t)^2] = \int_{-\infty}^{\infty} |h(f)|^2 \frac{N_0}{2} df$.
    The signal component at time $T$ is $s_o(T) = \int_{0}^{T} s(\tau) h(T-\tau) d\tau$.

**Cauchy-Schwarz Inequality:**
For functions $f(t)$ and $g(t)$, the Cauchy-Schwarz inequality states:
$(\int a(t) b(t) dt)^2 \le (\int a(t)^2 dt) (\int b(t)^2 dt)$

**Derivation Steps:**

1.  **Objective:** Maximize the SNR at the output of a linear filter, $y(t)$, at a specific time $T$.
    $SNR = \frac{y(T)^2}{E[w_o(t)^2]} = \frac{(\int_{0}^{T} s(\tau) h(T-\tau) d\tau)^2}{\int_{-\infty}^{\infty} |h(f)|^2 \frac{N_0}{2} df}$

2.  **Apply Cauchy-Schwarz:** Let $a(\tau) = s(\tau)$ and $b(\tau) = h(T-\tau)$. Then,
    $(\int_{0}^{T} s(\tau) h(T-\tau) d\tau)^2 \le (\int_{0}^{T} s(\tau)^2 d\tau) (\int_{0}^{T} h(T-\tau)^2 d\tau)$

3.  **Frequency Domain Representation:** It's often easier to work in the frequency domain. Let $S(f)$ be the Fourier Transform of $s(t)$ and $H(f)$ be the Fourier Transform of $h(t)$.
    The output of the filter is $y(t) = s(t) * h(t) + w(t) * h(t)$.
    In the frequency domain: $Y(f) = S(f)H(f) + W(f)H(f)$.
    The signal component at time $T$ can be written as:
    $s_o(T) = \mathcal{F}^{-1}[S(f)H(f)]_{t=T}$

4.  **Maximizing SNR using Cauchy-Schwarz in Frequency Domain:**
    The SNR can be expressed as:
    $SNR = \frac{1}{\frac{N_0}{2}} \frac{|\int_{-\infty}^{\infty} S(f) H(f) e^{j2\pi f T} df|^2}{\int_{-\infty}^{\infty} |H(f)|^2 df}$

    Using Cauchy-Schwarz on the numerator integral:
    $|\int_{-\infty}^{\infty} S(f) [H(f) e^{j2\pi f T}] df|^2 \le (\int_{-\infty}^{\infty} |S(f)|^2 df) (\int_{-\infty}^{\infty} |H(f) e^{j2\pi f T}|^2 df)$
    $|\int_{-\infty}^{\infty} S(f) [H(f) e^{j2\pi f T}] df|^2 \le (\int_{-\infty}^{\infty} |S(f)|^2 df) (\int_{-\infty}^{\infty} |H(f)|^2 df)$

    For equality in Cauchy-Schwarz, we need $H(f) e^{j2\pi f T}$ to be proportional to $S(f)$.
    $H(f) e^{j2\pi f T} = k S(f)$
    $H(f) = k S(f) e^{-j2\pi f T}$

5.  **The Matched Filter Impulse Response:**
    The impulse response of the matched filter is thus:
    $h_m(t) = \mathcal{F}^{-1}[k S(f) e^{-j2\pi f T}]$
    $h_m(t) = k \mathcal{F}^{-1}[S(f) e^{-j2\pi f T}]$
    Recall that $\mathcal{F}^{-1}[e^{-j2\pi f T}] = \delta(t+T)$.
    So, $h_m(t) = k \int_{-\infty}^{\infty} S(f) e^{j2\pi f (T-t)} df$
    $h_m(t) = k s(T-t)$

    **Important Point:** The impulse response of the matched filter is a time-reversed and time-shifted version of the known signal $s(t)$. The constant $k$ can be chosen to normalize the filter, often to yield a specific output energy or variance. A common choice is $k=1$.

**Output at Time T:**
When the input is $s(t) + w(t)$ and the filter is matched to $s(t)$, the output at time $T$ is:
$y(T) = (s(t) + w(t)) * h_m(t) |_{t=T}$
$y(T) = s(T) * h_m(T) + w(T) * h_m(T)$
where $h_m(t) = s(T-t)$ (assuming $k=1$).
$y(T) = \int_{0}^{T} s(\tau) s(T - (T-\tau)) d\tau + \int_{0}^{T} w(\tau) s(T-\tau) d\tau$
$y(T) = \int_{0}^{T} s(\tau)^2 d\tau + \int_{0}^{T} w(\tau) s(T-\tau) d\tau$
$y(T) = E_s + n_o$
where $E_s = \int_{0}^{T} s(\tau)^2 d\tau$ is the energy of the signal $s(t)$, and $n_o = \int_{0}^{T} w(\tau) s(T-\tau) d\tau$ is the noise component at the output.

**The Output SNR:**
The SNR at time $T$ is:
$SNR = \frac{E[y(T)]^2}{Var[y(T)]} = \frac{(E_s)^2}{Var[n_o]}$
$Var[n_o] = Var[\int_{0}^{T} w(\tau) s(T-\tau) d\tau]$
Since $w(t)$ is AWGN with PSD $N_0/2$, the variance of the filtered noise is:
$Var[n_o] = \int_{0}^{T} E[w(\tau)w(\alpha)] s(T-\tau) s(T-\alpha) d\tau d\alpha$
$Var[n_o] = \int_{0}^{T} \int_{0}^{T} \frac{N_0}{2} \delta(\tau-\alpha) s(T-\tau) s(T-\alpha) d\tau d\alpha$
$Var[n_o] = \frac{N_0}{2} \int_{0}^{T} s(T-\tau)^2 d\tau = \frac{N_0}{2} \int_{0}^{T} s(\tau)^2 d\tau = \frac{N_0}{2} E_s$

So, the output SNR is:
$SNR = \frac{E_s^2}{\frac{N_0}{2} E_s} = \frac{2 E_s}{N_0}$

**Key Takeaway:** The matched filter maximizes the output SNR by a factor of $2E_s/N_0$. This is the maximum possible SNR at the output of any linear filter.

**Example:**
Consider a signal $s(t) = A$ for $0 \le t \le T$, and $s(t) = 0$ otherwise. This is a rectangular pulse.
The matched filter impulse response is $h_m(t) = s(T-t)$.
For $0 \le T-t \le T$, which means $0 \le t \le T$, $h_m(t) = A$.
So, the matched filter for a constant signal is another constant filter.

If $h_m(t) = A$, then $E_s = \int_{0}^{T} A^2 dt = A^2 T$.
The output SNR is $\frac{2 E_s}{N_0} = \frac{2 A^2 T}{N_0}$.

Let's look at the output at time $T$:
$y(T) = \int_{0}^{T} r(\tau) h_m(T-\tau) d\tau = \int_{0}^{T} r(\tau) A d\tau = A \int_{0}^{T} r(\tau) d\tau$.
If $r(t) = A + w(t)$, then
$y(T) = A \int_{0}^{T} (A + w(\tau)) d\tau = A(AT + \int_{0}^{T} w(\tau) d\tau) = A^2 T + A \int_{0}^{T} w(\tau) d\tau$.
The signal component is $A^2 T = E_s$.
The noise component is $A \int_{0}^{T} w(\tau) d\tau$.
$Var[A \int_{0}^{T} w(\tau) d\tau] = A^2 Var[\int_{0}^{T} w(\tau) d\tau] = A^2 \int_{0}^{T} \int_{0}^{T} E[w(\tau)w(\alpha)] d\tau d\alpha$
$= A^2 \int_{0}^{T} \int_{0}^{T} \frac{N_0}{2} \delta(\tau-\alpha) d\tau d\alpha = A^2 \frac{N_0}{2} \int_{0}^{T} d\tau = A^2 \frac{N_0}{2} T = \frac{N_0}{2} (A^2 T) = \frac{N_0}{2} E_s$.
This confirms the SNR calculation.

## 3. Matched Filter as a Correlator

**Learning Outcome:**
*   Illustrate the fundamentals of statistical detection principles used in various engineering problems. (CO3, K2)
*   Apply various types of statistical decision rules in engineering applications. (CO4, K3) - *The correlator output is used in decision making.*

**Key Concepts & Definitions:**

*   **Correlation:** A measure of similarity between two signals as a function of the displacement of one relative to the other.
*   **Cross-correlation:** For two signals $x(t)$ and $y(t)$, their cross-correlation is defined as $R_{xy}(\tau) = \int_{-\infty}^{\infty} x(t) y(t+\tau) dt$.
*   **Output of the Matched Filter at time T:**
    $y(T) = \int_{0}^{T} r(\tau) s(T-\tau) d\tau$
    Let $u = T-\tau$, then $du = -d\tau$. When $\tau=0, u=T$. When $\tau=T, u=0$.
    $y(T) = \int_{T}^{0} r(T-u) s(u) (-du) = \int_{0}^{T} r(T-u) s(u) du$
    This is precisely the cross-correlation of the received signal $r(t)$ with the known signal $s(t)$, evaluated at a time lag of $T$.

**Matched Filter as a Correlator:**

The matched filter can be implemented as a correlator. The process involves:
1.  Multiplying the received signal $r(t)$ with a time-reversed and time-shifted version of the expected signal $s(t)$. This time-reversed and time-shifted version is $s(T-t)$, which is the impulse response of the matched filter.
2.  Integrating the product over the duration of the signal $[0, T]$.

**Decision Rule:**

The output of the matched filter (or correlator) at time $T$, denoted as $y(T)$, is then compared to a threshold $\gamma$.
*   If $y(T) > \gamma$, decide $H_1$ (signal present).
*   If $y(T) \le \gamma$, decide $H_0$ (signal absent).

The threshold $\gamma$ is chosen to optimize the detector's performance, typically based on the desired trade-off between the probability of false alarm ($P_{FA}$) and the probability of detection ($P_D$). For a Bayesian detector, $\gamma$ is related to the likelihood ratio and costs. For a uniformly most powerful (UMP) detector, $\gamma$ is chosen to achieve a specific $P_{FA}$.

**Textbook References:**

*   **Kay, Vol II, Chapter 3.3.2 (Matched Filter):** Discusses the correlation aspect of the matched filter.
*   **Hayes, Chapter 7 (Correlation and Convolution):** Provides a good overview of correlation concepts in digital signal processing.

**Example:**
Consider binary phase-shift keying (BPSK) modulation.
The signal for bit '1' is $s_1(t) = A \cos(\omega_c t)$ for $0 \le t \le T$.
The signal for bit '0' is $s_0(t) = -A \cos(\omega_c t)$ for $0 \le t \le T$.
If we expect $s_1(t)$, the matched filter impulse response would be $h_1(t) = s_1(T-t)$ and the output at time $T$ would be $y_1(T) = \int_0^T r(\tau) s_1(T-\tau) d\tau$.
If we expect $s_0(t)$, the matched filter impulse response would be $h_0(t) = s_0(T-t)$ and the output at time $T$ would be $y_0(T) = \int_0^T r(\tau) s_0(T-\tau) d\tau$.

In a practical BPSK receiver, a single correlator (or matched filter) is often used, matched to the positive pulse shape. The output is then scaled and compared to zero.
Let $s(t) = A \cos(\omega_c t)$ for $0 \le t \le T$. The matched filter is $h(t) = s(T-t) = A \cos(\omega_c (T-t))$.
The output at time $T$ is $y(T) = \int_0^T r(\tau) A \cos(\omega_c (T-\tau)) d\tau$.
If the transmitted bit was '1', $r(t) = s(t) + w(t) = A \cos(\omega_c t) + w(t)$.
$y(T) \approx \int_0^T A \cos(\omega_c \tau) A \cos(\omega_c (T-\tau)) d\tau$ (ignoring noise for signal term).
For synchronized signals where $\omega_c T = 2\pi n$ for integer $n$, the integral of the product of two cosines separated by $T$ over $T$ is zero. However, the impulse response is $s(T-t)$, and if we synchronize, the signal is $s(t)$ and we are evaluating at $T$.
The output should be $y(T) = \int_0^T s(\tau) s(T-\tau) d\tau + \text{noise term}$.
Let's consider a simpler case where the signal is just the pulse $s(t)=A$ for $0 \le t \le T$.
$h(t) = A$ for $0 \le t \le T$.
Output at $T$: $y(T) = \int_0^T r(\tau) A d\tau = A \int_0^T r(\tau) d\tau$.
If the bit was '1' ($s(t) = A$), $y(T) = A \int_0^T (A + w(\tau)) d\tau = A^2 T + A \int_0^T w(\tau) d\tau$.
If the bit was '0' ($s(t) = -A$), $y(T) = A \int_0^T (-A + w(\tau)) d\tau = -A^2 T + A \int_0^T w(\tau) d\tau$.
The decision is: if $y(T) > 0$, decide '1'; if $y(T) < 0$, decide '0'. The threshold is 0.

## 4. Performance of the Matched Filter Detector

**Learning Outcome:**
*   Illustrate the fundamentals of statistical detection principles used in various engineering problems. (CO3, K2)
*   Apply different types of estimation algorithms in engineering applications. (CO2, K3) - *Relating to performance metrics like BER.*

**Key Concepts & Definitions:**

*   **Probability of Detection ($P_D$):** The probability of correctly deciding $H_1$ when $H_1$ is true. $P_D = P(y(T) > \gamma | H_1)$.
*   **Probability of False Alarm ($P_{FA}$):** The probability of deciding $H_1$ when $H_0$ is true. $P_{FA} = P(y(T) > \gamma | H_0)$.
*   **Probability of Miss Detection ($P_M$):** The probability of deciding $H_0$ when $H_1$ is true. $P_M = P(y(T) \le \gamma | H_1) = 1 - P_D$.
*   **Probability of Error ($P_e$):** For a two-hypothesis problem with equal prior probabilities, $P_e = \frac{1}{2} (P_{FA} + P_M)$.
*   **$Q$-function:** For a zero-mean Gaussian random variable $X$ with variance $\sigma^2$, $P(X > x) = Q(\frac{x}{\sigma})$, where $Q(x) = \frac{1}{\sqrt{2\pi}} \int_{x}^{\infty} e^{-u^2/2} du$.

**Performance Analysis for a Binary Signal:**

Consider the case where we transmit either $s_1(t)$ or $s_0(t)$ in AWGN.
Let $s_1(t)$ and $s_0(t)$ be the two possible signals over $[0, T]$.
The received signal is $r(t) = s_i(t) + w(t)$, where $i \in \{0, 1\}$.
The output of the matched filter at time $T$ (matched to $s_1(t)$) is $y(T) = \int_0^T r(\tau) s_1(T-\tau) d\tau$.

*   **Under $H_1$ (signal $s_1(t)$ was sent):**
    $y(T) = \int_0^T (s_1(\tau) + w(\tau)) s_1(T-\tau) d\tau$
    $y(T) = \int_0^T s_1(\tau) s_1(T-\tau) d\tau + \int_0^T w(\tau) s_1(T-\tau) d\tau$
    $y(T) = E_{s_1} + n_1$, where $E_{s_1} = \int_0^T s_1(\tau)^2 d\tau$ (energy of $s_1(t)$) and $n_1$ is a Gaussian random variable with mean 0 and variance $\frac{N_0}{2} E_{s_1}$.

*   **Under $H_0$ (signal $s_0(t)$ was sent):**
    $y(T) = \int_0^T (s_0(\tau) + w(\tau)) s_1(T-\tau) d\tau$
    $y(T) = \int_0^T s_0(\tau) s_1(T-\tau) d\tau + \int_0^T w(\tau) s_1(T-\tau) d\tau$
    $y(T) = \rho_{01} + n_0$, where $\rho_{01} = \int_0^T s_0(\tau) s_1(T-\tau) d\tau$ is the cross-correlation of $s_0(t)$ and $s_1(t)$ (evaluated at lag $T$), and $n_0$ is a Gaussian random variable with mean 0 and variance $\frac{N_0}{2} E_{s_1}$.

**Decision Rule:**
If $y(T) > \gamma$, decide $H_1$.

**Probabilities:**

*   **$P_D = P(y(T) > \gamma | H_1) = P(E_{s_1} + n_1 > \gamma | H_1)$**
    $P_D = P(n_1 > \gamma - E_{s_1})$
    Since $n_1$ has mean 0 and variance $\sigma^2 = \frac{N_0}{2} E_{s_1}$,
    $P_D = Q(\frac{\gamma - E_{s_1}}{\sqrt{\frac{N_0}{2} E_{s_1}}})$

*   **$P_{FA} = P(y(T) > \gamma | H_0) = P(\rho_{01} + n_0 > \gamma | H_0)$**
    $P_{FA} = P(n_0 > \gamma - \rho_{01})$
    Since $n_0$ has mean 0 and variance $\sigma^2 = \frac{N_0}{2} E_{s_1}$,
    $P_{FA} = Q(\frac{\gamma - \rho_{01}}{\sqrt{\frac{N_0}{2} E_{s_1}}})$

**Optimum Threshold for Equal Error Probabilities (Minimizing $P_e$):**
For binary detection with equal prior probabilities, the minimum error rate is achieved when $P_D = P_{FA}$ in terms of the argument to the $Q$ function. This means:
$\frac{\gamma - E_{s_1}}{\sqrt{\frac{N_0}{2} E_{s_1}}} = \frac{\gamma - \rho_{01}}{\sqrt{\frac{N_0}{2} E_{s_1}}}$
$\gamma - E_{s_1} = \gamma - \rho_{01}$
$\gamma = \frac{1}{2} (E_{s_1} + \rho_{01})$

This threshold means we decide $H_1$ if $y(T) > \frac{1}{2} (E_{s_1} + \rho_{01})$.
Equivalently, $y(T) - \frac{1}{2} E_{s_1} > \frac{1}{2} \rho_{01} - \frac{1}{2} E_{s_1}$
$y(T) - \frac{1}{2} (E_{s_1} + \rho_{01}) > 0$.
Alternatively, we can see that we decide $H_1$ if $y(T) > \gamma$.
The midpoint between $E_{s_1}$ and $\rho_{01}$ is $\frac{E_{s_1} + \rho_{01}}{2}$.
If $y(T)$ is closer to $E_{s_1}$ than to $\rho_{01}$, we choose $H_1$.

With $\gamma = \frac{1}{2} (E_{s_1} + \rho_{01})$, the error probability can be calculated.
$P_D = Q(\frac{\frac{1}{2}(E_{s_1} + \rho_{01}) - E_{s_1}}{\sqrt{\frac{N_0}{2} E_{s_1}}}) = Q(\frac{\frac{1}{2}(\rho_{01} - E_{s_1})}{\sqrt{\frac{N_0}{2} E_{s_1}}})$
$P_{FA} = Q(\frac{\frac{1}{2}(E_{s_1} + \rho_{01}) - \rho_{01}}{\sqrt{\frac{N_0}{2} E_{s_1}}}) = Q(\frac{\frac{1}{2}(E_{s_1} - \rho_{01})}{\sqrt{\frac{N_0}{2} E_{s_1}}})$

Notice that $P_D = Q(\frac{E_{s_1} - \rho_{01}}{2\sqrt{\frac{N_0}{2} E_{s_1}}})$ and $P_{FA} = Q(\frac{E_{s_1} - \rho_{01}}{2\sqrt{\frac{N_0}{2} E_{s_1}}})$.
This implies $P_D = P_{FA}$ if the arguments to $Q$ are equal in magnitude.
The minimum probability of error is then:
$P_e = P_{FA} = Q(\frac{E_{s_1} - \rho_{01}}{2\sqrt{\frac{N_0}{2} E_{s_1}}})$.

**Special Case: Orthogonal Signals**
If $s_0(t)$ and $s_1(t)$ are orthogonal, then $\rho_{01} = \int_0^T s_0(\tau) s_1(T-\tau) d\tau = 0$.
In this case, $\gamma = \frac{1}{2} E_{s_1}$.
$P_D = Q(\frac{E_{s_1} - E_{s_1}/2}{\sqrt{\frac{N_0}{2} E_{s_1}}}) = Q(\frac{E_{s_1}/2}{\sqrt{\frac{N_0}{2} E_{s_1}}}) = Q(\frac{\sqrt{E_{s_1}}}{2\sqrt{N_0/2}})$
$P_{FA} = Q(\frac{E_{s_1} - 0}{2\sqrt{\frac{N_0}{2} E_{s_1}}}) = Q(\frac{E_{s_1}}{2\sqrt{\frac{N_0}{2} E_{s_1}}}) = Q(\frac{\sqrt{E_{s_1}}}{\sqrt{N_0/2}})$

This looks incorrect. Let's re-evaluate the arguments.
The decision statistic is $y(T)$.
Under $H_1$: $y(T) = E_{s_1} + n_1$, where $n_1 \sim N(0, \frac{N_0}{2} E_{s_1})$.
Under $H_0$: $y(T) = \rho_{01} + n_0$, where $n_0 \sim N(0, \frac{N_0}{2} E_{s_1})$.

For orthogonal signals, $\rho_{01} = 0$.
$H_1: y(T) = E_{s_1} + n_1$
$H_0: y(T) = n_0$

The decision is $y(T) > \gamma$.
$P_D = P(E_{s_1} + n_1 > \gamma) = P(n_1 > \gamma - E_{s_1}) = Q(\frac{\gamma - E_{s_1}}{\sqrt{\frac{N_0}{2} E_{s_1}}})$
$P_{FA} = P(n_0 > \gamma) = Q(\frac{\gamma}{\sqrt{\frac{N_0}{2} E_{s_1}}})$

For minimum error probability (equal error rates), we set the arguments of $Q$ equal:
$\frac{\gamma - E_{s_1}}{\sqrt{\frac{N_0}{2} E_{s_1}}} = \frac{\gamma}{\sqrt{\frac{N_0}{2} E_{s_1}}}$
$\gamma - E_{s_1} = \gamma \implies E_{s_1} = 0$, which is not possible.

The equal error probability condition is that $P_D = P_{FA}$. This means the arguments to $Q$ should be equal.
However, for the minimum error rate, the threshold is chosen such that $P(y(T) > \gamma | H_1) = P(y(T) \le \gamma | H_0)$.
This implies $P_D = 1 - P_{FA}$.
The threshold that minimizes $P_e = \frac{1}{2}(P_{FA} + P_M)$ for equal priors is when the decision boundary is halfway between the means of the two distributions.
Mean under $H_1$ is $E_{s_1}$. Mean under $H_0$ is $\rho_{01}$.
Threshold $\gamma = \frac{E_{s_1} + \rho_{01}}{2}$.

For orthogonal signals ($\rho_{01} = 0$):
$\gamma = \frac{E_{s_1}}{2}$
$P_D = Q(\frac{E_{s_1}/2 - E_{s_1}}{\sqrt{\frac{N_0}{2} E_{s_1}}}) = Q(\frac{-E_{s_1}/2}{\sqrt{\frac{N_0}{2} E_{s_1}}}) = Q(-\frac{\sqrt{E_{s_1}}}{2\sqrt{N_0/2}}) = 1 - Q(\frac{\sqrt{E_{s_1}}}{2\sqrt{N_0/2}})$ (since $Q(-x) = 1 - Q(x)$).
$P_{FA} = Q(\frac{E_{s_1}/2}{\sqrt{\frac{N_0}{2} E_{s_1}}}) = Q(\frac{\sqrt{E_{s_1}}}{2\sqrt{N_0/2}})$

The probability of error is $P_e = P_{FA}$ for orthogonal signals when $\gamma = E_{s_1}/2$.
$P_e = Q(\frac{\sqrt{E_{s_1}}}{2\sqrt{N_0/2}}) = Q(\sqrt{\frac{E_{s_1}}{2 N_0}})$

**Normalized Energy-to-Noise Ratio ($E_s/N_0$):**
Often, the performance is expressed in terms of $E_s/N_0$, where $E_s$ is the energy of one of the signals (assuming equal energy for simplicity) and $N_0$ is the two-sided power spectral density of the noise.
$P_e = Q(\sqrt{\frac{E_s}{2N_0}})$ for orthogonal signals.

**Textbook References:**

*   **Kay, Vol II, Chapter 3.3.3 (Performance of the Matched Filter):** Provides detailed derivations of $P_D$ and $P_{FA}$.
*   **Van Trees, Vol I, Chapter 2.3 ( Optimum Detectors for the Problem of Signal Detection in Gaussian Noise):** Discusses the error probabilities and their relationship to SNR.

**Important Point:** The performance of the matched filter detector is directly related to the SNR, specifically $E_s/N_0$. Higher SNR leads to lower error probabilities.

## 5. Practical Implementation and Limitations

**Learning Outcome:**
*   Summarize the fundamentals of statistical estimation principles used in various engineering problems. (CO1, K2) - *Estimation of signal parameters is needed to build a matched filter.*
*   Illustrate the fundamentals of statistical detection principles used in various engineering problems. (CO3, K2)
*   Apply different types of estimation algorithms in engineering applications. (CO2, K3) - *Matched filtering is a key component in many estimation problems, e.g., estimating the arrival time of a signal.*

**Key Concepts & Definitions:**

*   **Non-ideal Conditions:** The derivation of the matched filter assumes:
    *   The signal $s(t)$ is perfectly known.
    *   The noise is strictly AWGN.
    *   The transmission channel is ideal (no distortion, fading, etc.).
    *   Synchronization is perfect (timing and frequency).
*   **Channel Effects:** Real-world channels can introduce distortions, such as:
    *   **Bandlimiting:** The channel may limit the bandwidth of the signal.
    *   **Fading:** Signal amplitude and phase can vary over time.
    *   **Intersymbol Interference (ISI):** Pulses spread and overlap, corrupting data from adjacent symbols.
*   **Non-Gaussian Noise:** If the noise is not Gaussian, the matched filter may not be optimal. Other filters might be more appropriate (e.g., Wiener filter for colored noise).
*   **Unknown Signal Parameters:** If the signal waveform is not precisely known (e.g., unknown amplitude, phase, or time of arrival), a true matched filter cannot be directly implemented.

**Approaches in Practice:**

1.  **Ideal Matched Filter Implementation:**
    *   **Analog Implementation:** Using passive components (resistors, capacitors, inductors) or active components (op-amps) to approximate the desired frequency response $H(f) = S(f) e^{-j2\pi f T}$.
    *   **Digital Implementation:** In discrete-time, the impulse response is $h[n] = s[N-1-n]$ (for a finite-length signal $s[n]$ of length $N$). This can be implemented using a Finite Impulse Response (FIR) filter. The received signal $r[n]$ is convolved with $h[n]$.

2.  **Dealing with Unknown Parameters:**
    *   **Cognitive Radio/Adaptive Filtering:** When signal parameters are unknown or vary, adaptive filters can be used. These filters adjust their coefficients to match the incoming signal or optimize a performance criterion. This bridges the gap between detection and estimation.
    *   **Estimation of Parameters:** Before applying a matched filter, one might first estimate parameters like the signal's time of arrival, frequency, or amplitude. This estimation step itself often uses correlation or matched filtering principles. For instance, to estimate the time of arrival of a known signal, one can correlate the received signal with the known signal template and find the peak of the correlation function.
    *   **Generalized Likelihood Ratio Test (GLRT):** When signal parameters are unknown, the GLRT is often used. This involves estimating the unknown parameters under both hypotheses and then forming a test statistic. This can lead to "generalized matched filters" or "search procedures."

**Example: Synchronization and Parameter Estimation**

In many communication systems, the receiver needs to synchronize with the incoming signal. This involves estimating the carrier phase, symbol timing, and carrier frequency.
*   **Timing Synchronization:** A known sequence of symbols (a preamble) is often transmitted. The receiver correlates the received signal with the preamble template. The time at which the correlation is maximized indicates the correct symbol timing. This is essentially using a matched filter (or correlator) for estimation.
*   **Carrier Frequency/Phase Estimation:** Techniques like phase-locked loops (PLLs) or direct estimation methods are used, often relying on the signal's known structure.

**Reference Books:**

*   **Hayes, Chapter 7 (Correlation and Convolution):** Practical aspects of implementing correlation and matched filtering in DSP.
*   **Van Trees, Vol I, Chapter 3 (Parameter Estimation):** Discusses estimation of signal parameters, which is often a prerequisite for optimal detection using matched filters.

**Important Point:** While the matched filter is optimal under ideal conditions, practical implementations must account for real-world channel impairments and potential uncertainties in the signal's characteristics.

## 6. Practice Questions and Answers

**Question 1:**
What is the impulse response of a matched filter designed to detect a signal $s(t)$ in AWGN?
**(K2, CO3)**

**Answer:**
The impulse response of the matched filter is $h_m(t) = k s(T-t)$, where $s(t)$ is the known signal to be detected over the interval $[0, T]$, $T$ is the observation interval, and $k$ is a constant. Typically, $k=1$ is chosen for simplicity, making $h_m(t) = s(T-t)$.

**Question 2:**
A linear filter is used to detect a known signal $s(t)$ in AWGN with power spectral density $N_0/2$. If the impulse response of the filter is $h(t)$, what is the SNR at the output of the filter at time $t=T$?
**(K2, CO3)**

**Answer:**
The SNR at the output of the filter at time $T$ is given by:
$SNR = \frac{(\int_{0}^{T} s(\tau) h(T-\tau) d\tau)^2}{\int_{-\infty}^{\infty} |h(f)|^2 \frac{N_0}{2} df}$
Alternatively, using time-domain integrals:
$SNR = \frac{(\int_{0}^{T} s(\tau) h(T-\tau) d\tau)^2}{\frac{N_0}{2} \int_{0}^{T} h(\tau)^2 d\tau}$ (assuming $h(t)$ is non-zero only for $t \in [0, T]$ and $s(t)$ is defined for $t \in [0, T]$).
For the matched filter $h_m(t) = s(T-t)$, the SNR is maximized and equals $\frac{2E_s}{N_0}$, where $E_s = \int_0^T s(\tau)^2 d\tau$ is the energy of the signal.

**Question 3:**
Consider a binary signaling scheme where the signals are $s_1(t) = \sqrt{E}$ for $0 \le t \le T$ and $s_0(t) = -\sqrt{E}$ for $0 \le t \le T$. The signals are transmitted in AWGN with power spectral density $N_0/2$. If a matched filter is used for $s_1(t)$, what is the probability of error for this system?
**(K3, CO4)**

**Answer:**
The signal energy for both $s_1(t)$ and $s_0(t)$ is $E = \int_0^T (\sqrt{E})^2 dt = E T$. So $E_{signal} = ET$.
The signals are orthogonal since $\rho_{01} = \int_0^T s_0(\tau) s_1(T-\tau) d\tau = \int_0^T (-\sqrt{E}) (\sqrt{E}) d\tau = -E T$. Wait, my calculation for orthogonal signals earlier had $\rho_{01} = 0$. Let's re-check the definition.
The signals $s_1(t)$ and $s_0(t)$ themselves are not orthogonal in the usual sense of $\int s_1(t) s_0(t) dt = 0$. However, the problem is usually set up such that the *decision statistics* derived from them are based on orthogonal bases.
In this specific case, the signals are $s_1(t) = A$ and $s_0(t) = -A$ for $0 \le t \le T$, where $A = \sqrt{E/T}$.
The energy of $s_1(t)$ is $E_{s_1} = \int_0^T A^2 dt = A^2 T = E/T \cdot T = E$.
The cross-correlation is $\rho_{01} = \int_0^T s_0(\tau) s_1(T-\tau) d\tau = \int_0^T (-A)(A) d\tau = -A^2 T = -E$.

Using the derived formula for $P_e$ with equal error rates:
$P_e = Q(\frac{E_{s_1} - \rho_{01}}{2\sqrt{\frac{N_0}{2} E_{s_1}}})$
$P_e = Q(\frac{E - (-E)}{2\sqrt{\frac{N_0}{2} E}}) = Q(\frac{2E}{2\sqrt{\frac{N_0}{2} E}}) = Q(\frac{E}{\sqrt{\frac{N_0}{2} E}})$
$P_e = Q(\frac{\sqrt{E}}{\sqrt{N_0/2}}) = Q(\sqrt{\frac{2E}{N_0}})$

This is the standard result for binary antipodal signaling. The term $2E/N_0$ is the energy-to-noise ratio.

**Question 4:**
Describe a limitation of the matched filter in practical communication systems.
**(K2, CO3)**

**Answer:**
A key limitation is its sensitivity to deviations from the assumed signal waveform and channel conditions. If the signal is not perfectly known (e.g., unknown amplitude, phase, timing) or if the channel introduces distortion (e.g., fading, ISI), the performance of a fixed matched filter will degrade. In such cases, adaptive filtering or parameter estimation techniques are often required.

## 7. Summary and Key Takeaways

*   **Matched Filter Purpose:** To maximize the Signal-to-Noise Ratio (SNR) at the output for detecting a known signal in AWGN.
*   **Impulse Response:** $h_m(t) = s(T-t)$ (or proportional to it). It's a time-reversed and time-shifted version of the signal.
*   **Implementation:** Can be realized as a correlator by multiplying the received signal with the time-reversed signal and integrating.
*   **Optimal Detector:** For a known signal in AWGN, the matched filter followed by a threshold detector is the optimal linear detector.
*   **Maximum Output SNR:** The matched filter achieves a maximum output SNR of $2E_s/N_0$, where $E_s$ is the signal energy and $N_0$ is the noise power spectral density.
*   **Performance:** The probability of error (e.g., bit error rate) is directly related to the SNR, specifically $E_s/N_0$. Higher SNR leads to better performance.
*   **Limitations:** Performance degrades significantly if the signal is not perfectly known, the noise is not AWGN, or the channel introduces distortions.
*   **Practical Considerations:** In real systems, matched filtering principles are often used for parameter estimation (like timing) and as a basis for adaptive filters to cope with unknown signal parameters or channel conditions.

This concludes the study notes on Matched Filters. Remember to consult the provided textbooks for a deeper understanding and more detailed derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
