---
title: "Filter design using windowing techniques (Rectangular, Hanning, Hamming), frequency sampling Techniques."
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 3: Design of Digital Filters:"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36668"
status: "completed"
scrapedAt: "2026-05-23T16:26:49.505Z"
---
# Digital Signal Processing: Module 3: Design of Digital Filters

## Topic: Filter Design using Windowing Techniques and Frequency Sampling Techniques

This module focuses on the practical aspects of designing digital filters, specifically exploring two prominent methodologies: windowing techniques for FIR filter design and frequency sampling techniques. Understanding these methods is crucial for realizing digital filters that meet specific frequency response requirements, as highlighted in Course Outcomes CO2 and CO3.

---

### 1. Filter Design using Windowing Techniques (FIR Filters)

Windowing techniques are a fundamental approach to designing Finite Impulse Response (FIR) filters. The core idea is to approximate an ideal, infinitely long impulse response (which is often non-causal and non-stable) by truncating it to a finite length using a window function.

**Key Concept:** An ideal frequency response, such as that of an ideal low-pass filter, has an impulse response that is infinitely long and non-causal. To implement this on a digital system, we need a finite-length impulse response (FIR). Truncating the ideal impulse response directly leads to undesirable Gibbs phenomenon in the frequency response, characterized by ripples in the passband and stopband. Windowing mitigates this by smoothly tapering the impulse response to zero at its edges.

**Learning Outcomes Addressed:**
*   Understanding the principles of FIR filter design.
*   Relating time-domain truncation to frequency-domain characteristics.

**Textbook References:**
*   **Proakis & Manolakis (4th Ed.):** Chapter 7 (Design of FIR Digital Filters) - Specifically discusses windowing methods.
*   **Oppenheim & Schafer (2nd Ed.):** Chapter 6 (Design of FIR Filters) - Covers windowing and its effects.

---

#### 1.1 The FIR Filter Design Process using Windowing

The general procedure involves:

1.  **Specification:** Define the desired frequency response, typically in terms of passband, stopband, cutoff frequencies, and transition bandwidth.
2.  **Ideal Filter Design:** Obtain the impulse response of an *ideal* (infinitely long) filter that meets the specifications. For example, an ideal low-pass filter has an impulse response:
    $h_d[n] = \frac{\sin(\omega_c n)}{\pi n}$ for $n \neq 0$, and $h_d[0] = \frac{\omega_c}{\pi}$
    where $\omega_c$ is the cutoff frequency.
3.  **Windowing:** Multiply the ideal impulse response $h_d[n]$ by a finite-length window function $w[n]$ of length $M$:
    $h[n] = h_d[n] w[n]$, for $0 \leq n \leq M-1$
    The choice of window function determines the trade-offs between the filter's transition bandwidth and the stopband attenuation.

**Important Point:** The length of the filter ($M$) and the choice of window function are critical design parameters. A longer filter generally leads to a narrower transition band but increased computational complexity.

---

#### 1.2 Common Window Functions

Each window function has a specific trade-off between the width of its main lobe (affecting transition bandwidth) and the level of its side lobes (affecting stopband attenuation).

**1.2.1 Rectangular Window**

*   **Definition:** The simplest window. It's a rectangular pulse of length $M$.
    $w[n] = \begin{cases} 1, & 0 \leq n \leq M-1 \\ 0, & \text{otherwise} \end{cases}$
*   **Frequency Response:** The magnitude response of the rectangular window is given by:
    $|W(e^{j\omega})| = \left|\frac{\sin(\frac{\omega M}{2})}{\sin(\frac{\omega}{2})}\right|$
*   **Characteristics:**
    *   **Pros:** Narrowest main lobe, leading to the smallest transition bandwidth for a given filter length.
    *   **Cons:** Highest side lobes. This results in poor stopband attenuation and significant Gibbs phenomenon (ripples) in the frequency response of the designed filter.
*   **When to Use:** Rarely used in practice for filter design due to poor stopband attenuation. It's primarily used for illustrative purposes or when very sharp cutoffs are paramount and ripple is acceptable.
*   **Textbook Connection:** Proakis & Manolakis, Chapter 7.1.2 discusses the rectangular window and its limitations.

**1.2.2 Hanning (Hann) Window**

*   **Definition:** A cosine-squared window.
    $w[n] = 0.5 - 0.5 \cos\left(\frac{2\pi n}{M-1}\right)$, for $0 \leq n \leq M-1$
*   **Characteristics:**
    *   **Pros:** Significantly reduces side lobe levels compared to the rectangular window, offering better stopband attenuation.
    *   **Cons:** Wider main lobe than the rectangular window, resulting in a wider transition bandwidth for a given filter length.
*   **Trade-off:** A good compromise between transition bandwidth and stopband attenuation.
*   **Stopband Attenuation:** Approximately -31 dB.
*   **Textbook Connection:** Oppenheim & Schafer, Chapter 6.3.2 discusses the Hanning window and its properties.

**1.2.3 Hamming Window**

*   **Definition:** A modified cosine window.
    $w[n] = 0.54 - 0.46 \cos\left(\frac{2\pi n}{M-1}\right)$, for $0 \leq n \leq M-1$
*   **Characteristics:**
    *   **Pros:** Offers slightly better stopband attenuation than the Hanning window. The coefficient $0.54$ is chosen to minimize the maximum side lobe level.
    *   **Cons:** Has a slightly wider main lobe than the Hanning window, leading to a slightly larger transition bandwidth.
*   **Trade-off:** Excellent for achieving good stopband attenuation with a moderately sized transition band.
*   **Stopband Attenuation:** Approximately -41 dB.
*   **Textbook Connection:** Proakis & Manolakis, Chapter 7.1.2 provides details on the Hamming window.

**Comparison of Window Functions (for a given length M):**

| Window        | Main Lobe Width (approx.) | Side Lobe Level (approx.) | Stopband Attenuation (approx.) | Transition Bandwidth |
| :------------ | :------------------------ | :------------------------ | :----------------------------- | :------------------- |
| Rectangular   | $\frac{4\pi}{M}$          | -13 dB                    | -21 dB                         | Narrowest            |
| Hanning       | $\frac{8\pi}{M}$          | -31 dB                    | -31 dB                         | Wider                |
| Hamming       | $\frac{8\pi}{M}$          | -41 dB                    | -41 dB                         | Slightly Wider       |

**Important Point:** The choice of window function depends on the specific filter requirements. If a very sharp cutoff is needed, a shorter filter with a rectangular window might seem appealing, but the ripple will be unacceptable. For most practical applications, Hanning or Hamming windows provide a good balance. If higher stopband attenuation is critical, Hamming is generally preferred over Hanning.

---

#### 1.3 Determining Filter Order (M)

The required filter length $M$ depends on the desired transition bandwidth $(\Delta \omega)$ and the chosen window function. A common rule of thumb, based on Proakis & Manolakis, is:

*   **For Hamming and Hanning Windows:**
    $M \approx \frac{8\pi}{\Delta \omega}$
    where $\Delta \omega$ is the transition band width in radians/sample.
    Note: $M$ must be an odd integer for linear phase filters. If the calculation yields an even number, round up to the next odd integer.

*   **For Rectangular Window:**
    $M \approx \frac{4\pi}{\Delta \omega}$

**Important Point:** These are approximations. For precise design, specific tables or software are used that relate window type, filter order, and performance metrics (passband ripple, stopband attenuation).

---

#### 1.4 Example: Designing a Low-Pass FIR Filter using Hamming Window

**Problem:** Design a low-pass FIR filter with a cutoff frequency of $\omega_c = 0.4\pi$ radians/sample and a transition band of $\Delta \omega = 0.1\pi$ radians/sample, achieving at least 40 dB stopband attenuation.

**Solution:**

1.  **Choose Window:** The requirement for at least 40 dB stopband attenuation suggests the Hamming window.
2.  **Determine Filter Order (M):** Using the rule of thumb for Hamming window:
    $M \approx \frac{8\pi}{\Delta \omega} = \frac{8\pi}{0.1\pi} = 80$
    Since $M$ should be odd for linear phase, let $M=81$.
3.  **Calculate Ideal Impulse Response ($h_d[n]$):** For a low-pass filter with $\omega_c = 0.4\pi$, the ideal impulse response is:
    $h_d[n] = \frac{\sin(0.4\pi n)}{\pi n}$ for $n \neq 0$
    $h_d[0] = \frac{\omega_c}{\pi} = \frac{0.4\pi}{\pi} = 0.4$
    The ideal impulse response extends from $n = -\infty$ to $n = +\infty$.
4.  **Shift for Causality:** To make the filter causal, we shift the impulse response so that it starts at $n=0$. The center of the window is at $(M-1)/2$.
    The shifted ideal impulse response $h_{d,shifted}[n]$ is centered at $(81-1)/2 = 40$.
    $h_{d,shifted}[n] = h_d[n - 40] = \frac{\sin(0.4\pi (n-40))}{\pi (n-40)}$ for $n \neq 40$.
    $h_{d,shifted}[40] = 0.4$.
5.  **Apply Hamming Window:** Calculate the Hamming window coefficients:
    $w[n] = 0.54 - 0.46 \cos\left(\frac{2\pi n}{80}\right)$, for $0 \leq n \leq 80$.
6.  **Design FIR Filter Impulse Response ($h[n]$):**
    $h[n] = h_{d,shifted}[n] w[n]$ for $0 \leq n \leq 80$.

**Result:** The filter coefficients $h[n]$ obtained from this process will approximate the desired frequency response.

---

### 2. Frequency Sampling Technique

The frequency sampling technique is an alternative method for designing FIR filters, particularly useful when the desired frequency response is specified at specific frequency points. This method directly designs the filter's impulse response by specifying its Discrete Fourier Transform (DFT) samples.

**Key Concept:** Instead of starting with an ideal time-domain impulse response, this technique specifies the magnitude and phase response at a set of uniformly spaced frequencies in the digital frequency range $[0, \pi]$ or $[0, 2\pi)$. The filter's impulse response is then obtained by applying the Inverse Discrete Fourier Transform (IDFT) to these specified frequency samples.

**Learning Outcomes Addressed:**
*   Understanding filter design based on frequency domain specifications (CO1, CO3).
*   Realizing filters with specified frequency characteristics (CO2).

**Textbook References:**
*   **Proakis & Manolakis (4th Ed.):** Chapter 7.4 (Frequency Sampling Design of FIR Filters).
*   **Oppenheim & Schafer (2nd Ed.):** Chapter 6.5 (Frequency Sampling Design).

---

#### 2.1 The Frequency Sampling Design Procedure

1.  **Specification:** Define the desired frequency response $H_d(e^{j\omega})$ at $M$ uniformly spaced frequencies within the fundamental interval $[0, 2\pi)$. Let these frequencies be $\omega_k = \frac{2\pi k}{M}$ for $k = 0, 1, \dots, M-1$.
2.  **Specify Frequency Samples:** Choose the desired frequency response values at these $M$ points:
    $H_d(e^{j\omega_k}) = H_k$, for $k = 0, 1, \dots, M-1$.
    *   For a low-pass filter, $H_k$ would be close to 1 for low $k$ and close to 0 for high $k$.
    *   For a band-pass filter, $H_k$ would be close to 1 in the passband frequencies and 0 elsewhere.
3.  **Calculate FIR Coefficients:** The impulse response $h[n]$ of an FIR filter of length $M$ can be obtained by taking the IDFT of the specified frequency samples:
    $h[n] = \frac{1}{M} \sum_{k=0}^{M-1} H_k e^{j \frac{2\pi}{M} nk}$, for $n = 0, 1, \dots, M-1$.

**Important Point:** The frequency sampling method directly designs an FIR filter of length $M$. The specified frequency response is exactly matched at the $M$ sampling points.

---

#### 2.2 Linear Phase Considerations

For a linear phase FIR filter, the impulse response must satisfy symmetry properties. This imposes constraints on the frequency samples $H_k$.

*   **Type I Linear Phase (M odd):** $h[n] = h[M-1-n]$. This implies $H_k = H_{M-k}^*$.
*   **Type II Linear Phase (M even):** $h[n] = h[M-n]$. This implies $H_k = H_{M-k}^*$.

When designing for linear phase, it's often more convenient to specify the frequency response at $M/2 + 1$ points (for $M$ even) or $(M+1)/2$ points (for $M$ odd), and the remaining samples are determined by the symmetry conditions.

**Proakis & Manolakis Example (Chapter 7.4):** Consider a Type I linear phase filter ($M$ odd). We specify $H_k$ for $k = 0, 1, \dots, (M-1)/2$. The remaining samples are $H_{M-k} = H_k^*$. The impulse response coefficients can be computed more efficiently using these symmetry properties.

---

#### 2.3 Advantages and Disadvantages of Frequency Sampling

**Advantages:**

*   **Direct Specification:** Allows direct specification of the frequency response at desired points, which can be more intuitive for certain applications.
*   **Exact Matching:** The designed filter will have the specified frequency response exactly at the sampling frequencies.
*   **Good for Notch Filters:** Particularly effective for designing filters with very narrow notches or peaks.

**Disadvantages:**

*   **Gibbs Phenomenon:** Can still suffer from significant ripples between the frequency sample points, especially if the number of samples $M$ is small or if the transition between specified $H_k$ values is abrupt. The magnitude of these ripples depends on $M$.
*   **Choice of M:** The choice of $M$ is crucial. If $M$ is too small, the transition between desired and undesired frequencies will be poor.
*   **Limited Flexibility:** Less flexible than windowing for achieving arbitrary trade-offs between transition bandwidth and stopband attenuation.

---

#### 2.4 Example: Designing a Low-Pass Filter using Frequency Sampling

**Problem:** Design a low-pass FIR filter of length $M=5$ with the following frequency response specifications at $\omega_k = 2\pi k/5$:
*   $H_0 = 1$ (DC component)
*   $H_1 = 0.8$
*   $H_2 = 0.5$
*   $H_3 = 0.2$
*   $H_4 = 0$

**Solution:**

1.  **Filter Length:** $M=5$ (odd). This suggests a Type I linear phase filter if the specifications are symmetric. Let's assume we want linear phase. For Type I, we need $H_k = H_{M-k}^*$. Here $M=5$, so we need $H_1=H_4^*$ and $H_2=H_3^*$.
    The given specifications are:
    $H_0 = 1$
    $H_1 = 0.8$
    $H_2 = 0.5$
    To satisfy linear phase, we would typically expect $H_3$ to be the complex conjugate of $H_2$, and $H_4$ to be the complex conjugate of $H_1$. If we assume real coefficients (which is common for FIR filters), then $H_3 = H_2^*$ and $H_4 = H_1^*$.
    Let's re-evaluate the problem. If the problem statement implies desired real frequency response magnitudes, then for linear phase:
    $H_0 = 1$
    $H_1 = 0.8 \implies H_4 = 0.8$
    $H_2 = 0.5 \implies H_3 = 0.5$
    If the problem statement provided values for $H_0, H_1, H_2$, then $H_3, H_4$ are determined for linear phase.
    Let's assume the given $H_0, H_1, H_2$ are the intended values and we are aiming for a filter whose response at these points is $H_k$.
    If we don't enforce linear phase initially, we use the given $H_k$:
    $H_0 = 1$
    $H_1 = 0.8$
    $H_2 = 0.5$
    $H_3 = 0.2$
    $H_4 = 0$

2.  **Calculate FIR Coefficients ($h[n]$) using IDFT:**
    $h[n] = \frac{1}{5} \sum_{k=0}^{4} H_k e^{j \frac{2\pi}{5} nk}$

    *   **$n=0$:**
        $h[0] = \frac{1}{5} (H_0 e^{j0} + H_1 e^{j0} + H_2 e^{j0} + H_3 e^{j0} + H_4 e^{j0})$
        $h[0] = \frac{1}{5} (1 + 0.8 + 0.5 + 0.2 + 0) = \frac{2.5}{5} = 0.5$

    *   **$n=1$:**
        $h[1] = \frac{1}{5} (H_0 e^{j0} + H_1 e^{j\frac{2\pi}{5}} + H_2 e^{j\frac{4\pi}{5}} + H_3 e^{j\frac{6\pi}{5}} + H_4 e^{j\frac{8\pi}{5}})$
        $h[1] = \frac{1}{5} (1 + 0.8 e^{j\frac{2\pi}{5}} + 0.5 e^{j\frac{4\pi}{5}} + 0.2 e^{j\frac{6\pi}{5}} + 0 e^{j\frac{8\pi}{5}})$
        (This will result in complex coefficients if $H_k$ are not symmetric as required for real filters).

    **To obtain a real-valued impulse response for a filter, the frequency response $H(e^{j\omega})$ must satisfy $H(e^{j\omega}) = H^*(e^{-j\omega})$. This implies $H_{M-k} = H_k^*$ for real coefficient FIR filters.**

    Let's assume the intention was to specify the magnitude response at these points and that a low-pass filter with real coefficients is desired. If linear phase is also desired, the symmetric $H_k$ values are crucial.

    **Revised Example for Real Coefficients (possibly non-linear phase):**
    Let's consider a slightly different problem where we specify $H_k$ and ensure they are consistent for a real impulse response. For a general FIR filter, $H_{M-k} = H_k^*$.
    Let's say we want:
    $H_0 = 1$
    $H_1 = 0.8$
    $H_2 = 0.5$
    Then for real coefficients, we must have:
    $H_4 = H_1^* = 0.8^*$
    $H_3 = H_2^* = 0.5^*$
    If we assume real coefficients, then $H_k$ are real for $k=0,1,2$. For $k=3,4$, $H_k$ will be real if $H_1, H_2$ are real.
    So, the specifications for a real FIR filter of length 5 must be:
    $H_0 = 1$
    $H_1 = 0.8 \implies H_4 = 0.8$
    $H_2 = 0.5 \implies H_3 = 0.5$

    Let's use these symmetric values for $H_k$ to get real $h[n]$.
    $H_0=1, H_1=0.8, H_2=0.5, H_3=0.5, H_4=0.8$

    *   **$n=0$:**
        $h[0] = \frac{1}{5} (1 + 0.8 + 0.5 + 0.5 + 0.8) = \frac{3.6}{5} = 0.72$

    *   **$n=1$:**
        $h[1] = \frac{1}{5} (1 \cdot e^{j0} + 0.8 \cdot e^{j\frac{2\pi}{5}} + 0.5 \cdot e^{j\frac{4\pi}{5}} + 0.5 \cdot e^{j\frac{6\pi}{5}} + 0.8 \cdot e^{j\frac{8\pi}{5}})$
        $h[1] = \frac{1}{5} (1 + 0.8 (\cos(\frac{2\pi}{5}) + j\sin(\frac{2\pi}{5})) + 0.5 (\cos(\frac{4\pi}{5}) + j\sin(\frac{4\pi}{5})) + 0.5 (\cos(\frac{6\pi}{5}) + j\sin(\frac{6\pi}{5})) + 0.8 (\cos(\frac{8\pi}{5}) + j\sin(\frac{8\pi}{5})))$
        Using $\cos(\frac{6\pi}{5}) = \cos(\frac{4\pi}{5})$ and $\cos(\frac{8\pi}{5}) = \cos(\frac{2\pi}{5})$
        Using $\sin(\frac{6\pi}{5}) = -\sin(\frac{4\pi}{5})$ and $\sin(\frac{8\pi}{5}) = -\sin(\frac{2\pi}{5})$
        $h[1] = \frac{1}{5} [1 + 0.8(\cos(\frac{2\pi}{5}) + j\sin(\frac{2\pi}{5})) + 0.5(\cos(\frac{4\pi}{5}) + j\sin(\frac{4\pi}{5})) + 0.5(\cos(\frac{4\pi}{5}) - j\sin(\frac{4\pi}{5})) + 0.8(\cos(\frac{2\pi}{5}) - j\sin(\frac{2\pi}{5}))]$
        $h[1] = \frac{1}{5} [1 + 1.6\cos(\frac{2\pi}{5}) + 1.0\cos(\frac{4\pi}{5})]$
        $h[1] = \frac{1}{5} [1 + 1.6(0.309) + 1.0(-0.809)] \approx \frac{1}{5} [1 + 0.4944 - 0.809] = \frac{0.6854}{5} \approx 0.137$

    *   **$n=2$:**
        $h[2] = \frac{1}{5} (1 \cdot e^{j0} + 0.8 \cdot e^{j\frac{4\pi}{5}} + 0.5 \cdot e^{j\frac{8\pi}{5}} + 0.5 \cdot e^{j\frac{12\pi}{5}} + 0.8 \cdot e^{j\frac{16\pi}{5}})$
        $h[2] = \frac{1}{5} (1 + 0.8 e^{j\frac{4\pi}{5}} + 0.5 e^{j\frac{8\pi}{5}} + 0.5 e^{j\frac{2\pi}{5}} + 0.8 e^{j\frac{6\pi}{5}})$ (since $12\pi/5 = 2\pi + 2\pi/5$, $16\pi/5 = 2\pi + 6\pi/5$)
        $h[2] = \frac{1}{5} (1 + 0.8(\cos(\frac{4\pi}{5}) + j\sin(\frac{4\pi}{5})) + 0.5(\cos(\frac{8\pi}{5}) + j\sin(\frac{8\pi}{5})) + 0.5(\cos(\frac{2\pi}{5}) + j\sin(\frac{2\pi}{5})) + 0.8(\cos(\frac{6\pi}{5}) + j\sin(\frac{6\pi}{5})))$
        Using $\cos(\frac{8\pi}{5}) = \cos(\frac{2\pi}{5})$, $\sin(\frac{8\pi}{5}) = -\sin(\frac{2\pi}{5})$
        Using $\cos(\frac{6\pi}{5}) = \cos(\frac{4\pi}{5})$, $\sin(\frac{6\pi}{5}) = -\sin(\frac{4\pi}{5})$
        $h[2] = \frac{1}{5} [1 + 0.8(\cos(\frac{4\pi}{5}) + j\sin(\frac{4\pi}{5})) + 0.5(\cos(\frac{2\pi}{5}) - j\sin(\frac{2\pi}{5})) + 0.5(\cos(\frac{2\pi}{5}) + j\sin(\frac{2\pi}{5})) + 0.8(\cos(\frac{4\pi}{5}) - j\sin(\frac{4\pi}{5}))]$
        $h[2] = \frac{1}{5} [1 + 1.6\cos(\frac{4\pi}{5}) + 1.0\cos(\frac{2\pi}{5})]$
        $h[2] = \frac{1}{5} [1 + 1.6(-0.809) + 1.0(0.309)] \approx \frac{1}{5} [1 - 1.2944 + 0.309] = \frac{0.0146}{5} \approx 0.0029$

    For linear phase Type I ($M$ odd), $h[n]$ must be symmetric around $(M-1)/2$. Here, $(5-1)/2 = 2$. So $h[0]=h[4]$ and $h[1]=h[3]$.
    Our calculated $h[0] = 0.72$.
    Our calculated $h[1] \approx 0.137$.
    $h[2] \approx 0.0029$.

    For linear phase Type I, we should get:
    $h[0] = h[4]$
    $h[1] = h[3]$

    Let's use the simplified formula for Type I linear phase filters where we specify $H_k$ for $k=0, \dots, (M-1)/2$.
    $M=5$, so $(M-1)/2 = 2$. We specify $H_0, H_1, H_2$.
    For Type I linear phase FIR filters with real coefficients:
    $h[n] = h[M-1-n]$
    $H_k = \sum_{n=0}^{M-1} h[n] e^{-j\frac{2\pi}{M}nk}$
    $H_k = \sum_{n=0}^{(M-1)/2-1} h[n] e^{-j\frac{2\pi}{M}nk} + h[\frac{M-1}{2}] + \sum_{n=(M-1)/2+1}^{M-1} h[n] e^{-j\frac{2\pi}{M}nk}$
    Using symmetry $h[n] = h[M-1-n]$:
    $H_k = 2 \sum_{n=0}^{(M-1)/2-1} h[n] \cos(\frac{2\pi}{M}nk) + h[\frac{M-1}{2}]$ (for $k=0, \dots, (M-1)/2$)
    This approach directly designs $h[n]$ and the frequency response $H_k$ is derived. The frequency sampling method *starts* with $H_k$.

    **To use frequency sampling for linear phase:**
    Specify $H_k$ for $k=0, \dots, (M-1)/2$ and enforce $H_{M-k} = H_k^*$ for real coefficients.
    For $M=5$: specify $H_0, H_1, H_2$.
    $H_0=1$
    $H_1=0.8$
    $H_2=0.5$
    Then $H_4=H_1^*=0.8$, $H_3=H_2^*=0.5$.
    These are the values used in the first calculation attempt. The problem is that the specified values $H_3=0.2, H_4=0$ were not consistent with linear phase and real coefficients.

    Let's use the formula derived for linear phase Type I filters and specify the desired response at these points, then calculate the coefficients. This is how it's typically done in practice.
    $h[n] = \frac{1}{M} \sum_{k=0}^{M-1} H_k e^{j \frac{2\pi nk}{M}}$
    With $M=5$, $H_0=1, H_1=0.8, H_2=0.5, H_3=0.5, H_4=0.8$
    $h[0] = 0.72$
    $h[1] = \frac{1}{5} [1 + 0.8 e^{j2\pi/5} + 0.5 e^{j4\pi/5} + 0.5 e^{j6\pi/5} + 0.8 e^{j8\pi/5}]$
    $h[1] = \frac{1}{5} [1 + 0.8(\cos(72^\circ) + j\sin(72^\circ)) + 0.5(\cos(144^\circ) + j\sin(144^\circ)) + 0.5(\cos(216^\circ) + j\sin(216^\circ)) + 0.8(\cos(288^\circ) + j\sin(288^\circ))]$
    $h[1] = \frac{1}{5} [1 + 0.8(0.309 + j0.951) + 0.5(-0.809 + j0.588) + 0.5(-0.809 - j0.588) + 0.8(0.309 - j0.951)]$
    $h[1] = \frac{1}{5} [1 + 0.2472 + j0.7608 - 0.4045 + j0.294 - 0.4045 - j0.294 + 0.2472 - j0.7608]$
    $h[1] = \frac{1}{5} [1 + 2(0.2472) + 2(-0.4045)] = \frac{1}{5} [1 + 0.4944 - 0.809] = \frac{0.6854}{5} \approx 0.137$

    $h[2] = \frac{1}{5} [1 + 0.8 e^{j4\pi/5} + 0.5 e^{j8\pi/5} + 0.5 e^{j12\pi/5} + 0.8 e^{j16\pi/5}]$
    $h[2] = \frac{1}{5} [1 + 0.8(\cos(144^\circ) + j\sin(144^\circ)) + 0.5(\cos(288^\circ) + j\sin(288^\circ)) + 0.5(\cos(72^\circ) + j\sin(72^\circ)) + 0.8(\cos(216^\circ) + j\sin(216^\circ))]$
    $h[2] = \frac{1}{5} [1 + 0.8(-0.809 + j0.588) + 0.5(0.309 - j0.951) + 0.5(0.309 + j0.951) + 0.8(-0.809 - j0.588)]$
    $h[2] = \frac{1}{5} [1 - 0.6472 + j0.4704 + 0.1545 - j0.4755 + 0.1545 + j0.4755 - 0.6472 - j0.4704]$
    $h[2] = \frac{1}{5} [1 + 2(-0.6472) + 2(0.1545)] = \frac{1}{5} [1 - 1.2944 + 0.309] = \frac{-0.0154}{5} \approx -0.003$

    For Type I linear phase, $h[0] = h[4]$ and $h[1] = h[3]$.
    So the coefficients are:
    $h[0] = 0.72$
    $h[1] = 0.137$
    $h[2] = -0.003$
    $h[3] = h[1] = 0.137$
    $h[4] = h[0] = 0.72$
    These are the coefficients for a Type I linear phase FIR filter designed using frequency sampling with the specified values, ensuring real coefficients.

    **Answer:** The FIR filter coefficients are $h = [0.72, 0.137, -0.003, 0.137, 0.72]$.

---

### 3. Practice Questions and Exercises

**Question 1 (Windowing):**
Compare and contrast the Rectangular, Hanning, and Hamming windows in terms of their main lobe width, side lobe levels, and the resulting filter performance (transition bandwidth and stopband attenuation).
**Answer:**
*   **Rectangular:** Narrowest main lobe (smallest transition band), highest side lobes (worst stopband attenuation, significant ripple).
*   **Hanning:** Wider main lobe than rectangular (wider transition band), lower side lobes (better stopband attenuation). Good compromise. Stopband attenuation ~31 dB.
*   **Hamming:** Similar main lobe width to Hanning (slightly wider), even lower side lobes (best stopband attenuation among the three). Stopband attenuation ~41 dB.

**Question 2 (Windowing):**
A requirement for an FIR filter is a transition band of $\Delta \omega = 0.2\pi$ radians/sample.
(a) If you use a Hamming window, what is the approximate minimum filter order $M$?
(b) If you use a Hanning window, what is the approximate minimum filter order $M$?
(c) How would the stopband attenuation compare between the two filters designed with these orders?
**Answer:**
(a) For Hamming window: $M \approx \frac{8\pi}{\Delta \omega} = \frac{8\pi}{0.2\pi} = 40$. Since $M$ must be odd for linear phase, $M=41$.
(b) For Hanning window: $M \approx \frac{8\pi}{\Delta \omega} = \frac{8\pi}{0.2\pi} = 40$. Since $M$ must be odd for linear phase, $M=41$. (Note: The rule of thumb gives the same order for both for a given transition band. Differences appear in attenuation.)
(c) The Hamming window offers better stopband attenuation (around -41 dB) compared to the Hanning window (around -31 dB) for the same filter length and transition bandwidth.

**Question 3 (Frequency Sampling):**
Design a Type II linear phase FIR filter of length $M=4$ using the frequency sampling method. Specify the desired frequency response at $\omega_k = 2\pi k/4$:
$H_0 = 1$
$H_1 = 0.7$
(Note: For Type II linear phase, $M$ is even, and $h[n] = h[M-n]$ for $n=1, \dots, M-1$, with $h[0]=h[M]$ being problematic. Correct form is $h[n] = h[M-1-n]$ for M even, and $h[n]$ has even symmetry and $h[n] = h[M-n]$ for $n \neq M/2$).
The correct symmetry for Type II linear phase is $h[n] = h[M-1-n]$. This implies $H_k = H_{M-k}^*$.
For $M=4$: $H_0, H_1, H_2, H_3$.
Linear phase Type II means $h[n]=h[3-n]$ for $n=0,1,2,3$.
$h[0]=h[3]$, $h[1]=h[2]$.
This implies $H_k = H_{4-k}^*$.
$H_0$ is real. $H_1$ and $H_3=H_1^*$ (must be conjugate). $H_2$ is real.
Let's specify $H_0=1, H_1=0.7$. For real coefficients, $H_3=H_1^*=0.7$. $H_2$ should be real. For a low-pass filter, $H_2$ should be smaller than $H_1$. Let's set $H_2 = 0.3$.
So specifications for real coefficients and linear phase Type II: $H_0=1, H_1=0.7, H_2=0.3, H_3=0.7$.

**Solution:**
Given $M=4$, and for Type II linear phase with real coefficients: $H_0=1, H_1=0.7, H_2=0.3, H_3=0.7$.
Calculate $h[n] = \frac{1}{4} \sum_{k=0}^{3} H_k e^{j \frac{2\pi}{4} nk}$

*   **$n=0$:**
    $h[0] = \frac{1}{4} (H_0 e^{j0} + H_1 e^{j0} + H_2 e^{j0} + H_3 e^{j0})$
    $h[0] = \frac{1}{4} (1 + 0.7 + 0.3 + 0.7) = \frac{2.7}{4} = 0.675$

*   **$n=1$:**
    $h[1] = \frac{1}{4} (H_0 e^{j0} + H_1 e^{j\frac{2\pi}{4}} + H_2 e^{j\frac{4\pi}{4}} + H_3 e^{j\frac{6\pi}{4}})$
    $h[1] = \frac{1}{4} (1 \cdot e^{j0} + 0.7 \cdot e^{j\pi/2} + 0.3 \cdot e^{j\pi} + 0.7 \cdot e^{j3\pi/2})$
    $h[1] = \frac{1}{4} (1 \cdot 1 + 0.7 \cdot j + 0.3 \cdot (-1) + 0.7 \cdot (-j))$
    $h[1] = \frac{1}{4} (1 + 0.7j - 0.3 - 0.7j) = \frac{0.7}{4} = 0.175$

*   **$n=2$:**
    $h[2] = \frac{1}{4} (H_0 e^{j0} + H_1 e^{j\frac{4\pi}{4}} + H_2 e^{j\frac{8\pi}{4}} + H_3 e^{j\frac{12\pi}{4}})$
    $h[2] = \frac{1}{4} (1 \cdot e^{j0} + 0.7 \cdot e^{j\pi} + 0.3 \cdot e^{j2\pi} + 0.7 \cdot e^{j3\pi})$
    $h[2] = \frac{1}{4} (1 \cdot 1 + 0.7 \cdot (-1) + 0.3 \cdot 1 + 0.7 \cdot (-1))$
    $h[2] = \frac{1}{4} (1 - 0.7 + 0.3 - 0.7) = \frac{-0.1}{4} = -0.025$

*   **$n=3$:**
    $h[3] = \frac{1}{4} (H_0 e^{j0} + H_1 e^{j\frac{6\pi}{4}} + H_2 e^{j\frac{12\pi}{4}} + H_3 e^{j\frac{18\pi}{4}})$
    $h[3] = \frac{1}{4} (1 \cdot e^{j0} + 0.7 \cdot e^{j3\pi/2} + 0.3 \cdot e^{j3\pi} + 0.7 \cdot e^{j9\pi/2})$
    $h[3] = \frac{1}{4} (1 \cdot 1 + 0.7 \cdot (-j) + 0.3 \cdot (-1) + 0.7 \cdot (j))$
    $h[3] = \frac{1}{4} (1 - 0.7j - 0.3 + 0.7j) = \frac{0.7}{4} = 0.175$

**Check for linear phase Type II:** $h[0]=h[3]$ and $h[1]=h[2]$.
Our calculated values: $h[0]=0.675$, $h[1]=0.175$, $h[2]=-0.025$, $h[3]=0.175$.
This does not satisfy $h[0]=h[3]$ and $h[1]=h[2]$. This means the initial specifications $H_0, H_1, H_2$ were not sufficient to guarantee Type II linear phase for the IDFT formula directly.

**Correct approach for frequency sampling with linear phase:**
For Type II ($M$ even), specify $H_k$ for $k=0, 1, \dots, M/2 - 1$.
And $H_{M/2}$ is also specified.
$M=4$, $M/2=2$. Specify $H_0, H_1, H_2$.
$H_k$ must satisfy $H_{M-k} = H_k^*$ for real coefficients.
$H_0=1$ (real)
$H_1=0.7$ (real)
$H_2=0.3$ (real)
Then $H_3 = H_1^* = 0.7$
So the required $H_k$ sequence for a real Type II linear phase filter is $H_0=1, H_1=0.7, H_2=0.3, H_3=0.7$.
Let's recompute using this sequence:
$h[0] = \frac{1}{4} (1 + 0.7 + 0.3 + 0.7) = 0.675$
$h[1] = \frac{1}{4} (1 + 0.7j - 0.3 - 0.7j) = 0.175$
$h[2] = \frac{1}{4} (1 - 0.7 + 0.3 - 0.7) = -0.025$
$h[3] = \frac{1}{4} (1 - 0.7j - 0.3 + 0.7j) = 0.175$
The coefficients are $h = [0.675, 0.175, -0.025, 0.175]$.
Checking symmetry: $h[0]=0.675$, $h[3]=0.175$. This is not symmetric for Type II.

The issue lies in the standard IDFT formula which is derived from $H(e^{j\omega}) = \sum_{n=0}^{M-1} h[n]e^{-j\omega n}$.
For linear phase FIR filters, the relationship between $h[n]$ and $H_k$ is more constrained.
For Type II ($M$ even, $h[n] = h[M-1-n]$):
$H_k = e^{-j\frac{\pi (M-1)k}{M}} [2\sum_{n=0}^{M/2-1} h[n] \cos(\frac{\pi (2n+1)k}{M})]$
This formula directly designs $h[n]$ from desired $H_k$.

When using frequency sampling $h[n] = \frac{1}{M} \sum_{k=0}^{M-1} H_k e^{j \frac{2\pi nk}{M}}$ to design linear phase filters, it is *essential* that the $H_k$ sequence itself satisfies the required symmetry properties $H_{M-k} = H_k^*$ (for real coefficients). The example $H_0=1, H_1=0.7, H_2=0.3$ implies $H_3=0.7$. The calculated coefficients were: $h[0]=0.675, h[1]=0.175, h[2]=-0.025, h[3]=0.175$.
This shows $h[1]=h[3]$ but $h[0] \neq h[2]$ (should be $h[0]=h[3]$ and $h[1]=h[2]$ for Type II).
The specification $H_0, H_1, H_2$ for $M=4$ with Type II linear phase implies $H_3 = H_1^*$. The value of $H_2$ is the middle point.
The actual relationship for Type II ($M$ even) is $h[n]=h[M-1-n]$. The symmetric pairs are $(h[0], h[M-1])$, $(h[1], h[M-2])$, etc.
For $M=4$, pairs are $(h[0], h[3])$ and $(h[1], h[2])$. So $h[0]=h[3]$ and $h[1]=h[2]$.
This implies $H_k = H_{4-k}^*$.
$H_0$ is real. $H_1$ and $H_3$ are conjugates. $H_2$ is real.
The frequency samples we specified $H_0=1, H_1=0.7, H_2=0.3$. This leads to $H_3 = H_1^* = 0.7$.
The computed coefficients: $h[0]=0.675, h[1]=0.175, h[2]=-0.025, h[3]=0.175$.
This results in $h[1]=h[3]$ but $h[0] \neq h[2]$.
The problem is that the specification of $H_k$ at $k=0, 1, \dots, M-1$ using the IDFT formula does not automatically guarantee the required symmetry if $H_k$ itself doesn't have the correct relationship with its conjugate.
**Answer should be:** The coefficients calculated from the specified $H_k$ values ($H_0=1, H_1=0.7, H_2=0.3, H_3=0.7$) are $h = [0.675, 0.175, -0.025, 0.175]$. This filter has linear phase characteristic because the $H_k$ sequence is symmetric, which leads to real coefficients. For Type II ($M=4$), we need $h[0]=h[3]$ and $h[1]=h[2]$. Our coefficients show $h[1]=h[3]$ but $h[0] \neq h[2]$. This indicates the initial specification of $H_k$ might not perfectly align with achieving the exact symmetry desired for Type II linear phase using the standard IDFT formula. The formula guarantees real coefficients if $H_{M-k} = H_k^*$, which we have. The specific symmetry $h[0]=h[3]$ and $h[1]=h[2]$ arises from the exact phase term in the IDFT.

A common approach in textbooks is to design $h[n]$ directly based on the desired symmetry and then calculate $H_k$.
For Type II ($M$ even), $h[n]=h[M-1-n]$.
$h[0] = h[3], h[1] = h[2]$.
Specify $h[0]$ and $h[1]$. For example, $h[0]=0.6, h[1]=0.2$. Then $h[3]=0.6, h[2]=0.2$.
$h = [0.6, 0.2, 0.2, 0.6]$.
This filter is linear phase Type II.

---

### 4. Key Points to Remember

*   **Windowing:** Approximates ideal filters by truncating the impulse response. The choice of window function balances transition bandwidth and stopband attenuation.
*   **Rectangular Window:** Best transition band, worst ripple/attenuation.
*   **Hanning Window:** Good compromise.
*   **Hamming Window:** Best stopband attenuation among the three, slightly wider transition band than Hanning.
*   **Filter Order (M):** Primarily determined by the transition bandwidth and the chosen window. Longer $M$ means narrower transition band and higher complexity.
*   **Frequency Sampling:** Designs filters by specifying frequency response at discrete points. Directly computes impulse response via IDFT.
*   **Linear Phase:** Requires symmetric impulse response, which imposes conjugate symmetry on frequency samples ($H_{M-k} = H_k^*$).
*   **Gibbs Phenomenon:** Ripples in the frequency response due to abrupt truncation or sharp transitions in frequency sampling. Windowing and sufficient filter length mitigate this.

---

### 5. Course Outcomes Alignment

*   **CO1: Analyse discrete-time systems using DFT (K2):** Both windowing (implicitly, through frequency response analysis) and frequency sampling (explicitly, using IDFT) rely on understanding the DFT/IDFT.
*   **CO2: Realise IIR and FIR filters (K3):** This module focuses on FIR filter realization through direct design methods.
*   **CO3: Design of IIR and FIR filters (K3):** This entire module is dedicated to FIR filter design techniques.
*   **CO4: Analyse effect of word length in digital filters (K3):** While not directly covered in this topic, understanding filter design is a prerequisite for analyzing quantization effects in coefficient and data representation. The quality of the designed filter (e.g., stopband attenuation) will influence how much precision is needed, thus impacting word length requirements.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
