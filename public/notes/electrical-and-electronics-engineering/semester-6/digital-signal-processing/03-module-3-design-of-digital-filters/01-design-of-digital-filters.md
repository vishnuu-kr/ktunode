---
title: "Design of Digital Filters:"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 3: Design of Digital Filters:"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36664"
status: "completed"
scrapedAt: "2026-05-23T16:26:44.343Z"
---
# DIGITAL SIGNAL PROCESSING - Module 3: Design of Digital Filters

This module focuses on the design of digital filters, a fundamental aspect of Digital Signal Processing (DSP). We will explore the principles behind both Infinite Impulse Response (IIR) and Finite Impulse Response (FIR) filters, the methods for their design, and the trade-offs involved.

---

## 1. Introduction to Digital Filters

### 1.1 What is a Digital Filter?

A digital filter is a system that modifies a discrete-time signal by performing mathematical operations on its samples. The output is a modified discrete-time signal.

**Key Concepts:**

*   **Discrete-Time Signal:** A signal that exists only at discrete points in time. Represented as $x[n]$, where $n$ is an integer.
*   **Digital Filter Operation:** Involves manipulating the current and past input samples, as well as past output samples, to produce the current output sample.
*   **Difference Equation:** The mathematical representation of a digital filter's operation. For a linear time-invariant (LTI) system, it's of the form:
    $y[n] = \sum_{k=0}^{M} b_k x[n-k] - \sum_{k=1}^{N} a_k y[n-k]$

### 1.2 Filter Classification

Digital filters are broadly classified based on their impulse response:

*   **Finite Impulse Response (FIR) Filters:** The impulse response $h[n]$ is of finite duration. This means that after a finite number of samples, the impulse response becomes zero.
    *   **Difference Equation:** $y[n] = \sum_{k=0}^{M} b_k x[n-k]$ (no feedback term, i.e., $a_k = 0$ for $k \ge 1$).
    *   **Transfer Function:** $H(z) = \sum_{k=0}^{M} b_k z^{-k}$
    *   **Key Property:** FIR filters can achieve *linear phase response*, which is crucial in many applications to avoid signal distortion.
    *   **Stability:** Always stable because their impulse response is finite and the poles of $H(z)$ are at $z=0$.

*   **Infinite Impulse Response (IIR) Filters:** The impulse response $h[n]$ is of infinite duration. This is due to the presence of feedback in their implementation.
    *   **Difference Equation:** $y[n] = \sum_{k=0}^{M} b_k x[n-k] - \sum_{k=1}^{N} a_k y[n-k]$ (includes feedback terms).
    *   **Transfer Function:** $H(z) = \frac{\sum_{k=0}^{M} b_k z^{-k}}{1 + \sum_{k=1}^{N} a_k z^{-k}}$
    *   **Key Property:** Can achieve sharper frequency responses with fewer coefficients (lower order) compared to FIR filters, making them more computationally efficient in some cases.
    *   **Stability:** Stability depends on the location of the poles of $H(z)$. For stability, all poles must lie inside the unit circle in the z-plane.

**(Proakis & Manolakis, Chapter 6; Oppenheim & Schafer, Chapter 7)**

---

## 2. Design of FIR Filters

FIR filters are designed to meet specific frequency response specifications. The core of FIR filter design is to determine the coefficients $b_k$ of the difference equation.

### 2.1 FIR Filter Specifications

Typical specifications for FIR filters include:

*   **Passband:** The range of frequencies that should be allowed to pass through with minimal attenuation.
*   **Stopband:** The range of frequencies that should be significantly attenuated.
*   **Transition Band:** The region between the passband and stopband where the filter's response changes.
*   **Ripple:** The allowable variation in the magnitude response within the passband ($\delta_p$) and stopband ($\delta_s$).
*   **Cutoff Frequency:** The frequency that separates the passband from the stopband.

**(Proakis & Manolakis, Chapter 6.2; Ifeachor & Jervis, Chapter 5.1)**

### 2.2 Design Methods for FIR Filters

Several methods exist to design FIR filters, each with its own advantages and disadvantages.

#### 2.2.1 The Window Method

This is the most common and intuitive method. It involves truncating an ideal filter's impulse response using a finite-duration window function.

**Concept:**
Ideal filters (e.g., ideal low-pass, high-pass, band-pass) have infinitely long impulse responses. To obtain an FIR filter, we must truncate this infinite response. Multiplying an infinite-duration signal by a finite-duration window function effectively truncates it.

**Procedure:**

1.  **Start with an ideal filter's impulse response:** For example, an ideal low-pass filter with cutoff frequency $\omega_c$:
    $h_d[n] = \frac{\omega_c}{\pi} \text{sinc}\left(\frac{\omega_c(n-0.5)}{\pi}\right)$ for $n=0, 1, 2, \dots$
    (Note: The shift by $0.5$ is for causality and a symmetric impulse response centered around $n=0.5$.)

2.  **Choose a window function:** The choice of window function affects the trade-off between the transition band width and the stopband attenuation. Common window functions include:
    *   **Rectangular Window:** Simplest, but has poor stopband attenuation and a wide transition band.
    *   **Bartlett (Triangular) Window:** Better stopband attenuation than rectangular, but wider transition band.
    *   **Hanning Window:** Good compromise.
    *   **Hamming Window:** Similar to Hanning, slightly better stopband attenuation.
    *   **Blackman Window:** Best stopband attenuation among the common windows, but widest transition band.
    *   **Kaiser Window:** A more flexible window where the stopband attenuation can be directly controlled by a parameter $\beta$.

    **General Form of Window Functions (often symmetric around $N/2$ for linear phase):**
    $w[n]$ for $0 \le n \le M$

3.  **Truncate the ideal impulse response:** Obtain the FIR filter coefficients $b_k$ by multiplying the ideal impulse response $h_d[n]$ with the window function $w[n]$:
    $b_k = h_d[k]$ for $0 \le k \le M$
    $b_k = h_d[k] \cdot w[k]$ for $0 \le k \le M$ (where $M$ is the filter order, and the impulse response is of length $M+1$)

**Advantages:**

*   Simple to understand and implement.
*   Can easily design FIR filters with linear phase.

**Disadvantages:**

*   Suboptimal in terms of filter performance (trade-off between transition width and stopband attenuation).
*   Cannot achieve arbitrary selectivity.

**(Proakis & Manolakis, Chapter 6.3; Oppenheim & Schafer, Chapter 7.2; Ifeachor & Jervis, Chapter 5.2)**

**Example:** Design a Type I linear phase low-pass FIR filter of order $M=4$ (length 5) with a cutoff frequency $\omega_c = \pi/2$ using the Hanning window.

*   **Ideal impulse response (centered around $n=0$ for simplicity):**
    $h_d[n] = \frac{\omega_c}{\pi} \text{sinc}\left(\frac{\omega_c n}{\pi}\right)$
    $h_d[n] = \frac{\pi/2}{\pi} \text{sinc}\left(\frac{(\pi/2) n}{\pi}\right) = 0.5 \text{sinc}(n/2)$
    $h_d[0] = 0.5 \cdot 1 = 0.5$
    $h_d[1] = 0.5 \cdot \frac{\sin(\pi/2)}{\pi/2} = 0.5 \cdot \frac{1}{\pi/2} = \frac{1}{\pi}$
    $h_d[2] = 0.5 \cdot \frac{\sin(\pi)}{\pi} = 0$
    $h_d[-1] = 0.5 \cdot \frac{\sin(-\pi/2)}{-\pi/2} = 0.5 \cdot \frac{-1}{-\pi/2} = \frac{1}{\pi}$
    $h_d[-2] = 0$

*   **Hanning Window (for length $M+1=5$, i.e., $n=0, 1, 2, 3, 4$):**
    $w[n] = 0.5 - 0.5 \cos\left(\frac{2\pi n}{M}\right)$ for $0 \le n \le M$.
    Here, $M=4$. We need to be careful with the definition of window length and order. If we want a Type I linear phase filter of length $L=5$ ($M=4$), the impulse response is symmetric around $n=(L-1)/2 = 2$. So we'll consider $n = 0, 1, 2, 3, 4$.
    The ideal impulse response needs to be causal and symmetric. For a Type I linear phase filter of length $L=5$, the impulse response is $h[n]$ for $n = 0, 1, 2, 3, 4$. The center of symmetry is $n=2$.
    The ideal impulse response (causal, centered at $0.5$):
    $h_d[n] = 0.5 \text{sinc}\left(\frac{\omega_c(n-0.5)}{\pi}\right)$
    $h_d[0] = 0.5 \text{sinc}((\pi/2)(-0.5)/\pi) = 0.5 \text{sinc}(-0.25) = 0.5 \frac{\sin(-\pi/4)}{-\pi/4} = 0.5 \frac{-\sin(\pi/4)}{\pi/4} = 0.5 \frac{-1/\sqrt{2}}{\pi/4} = \frac{-2}{\pi\sqrt{2}} \approx -0.45$ (This is not right for a low pass filter).

    Let's use the standard formula for a causal filter with impulse response of length $L=M+1$:
    $h_d[n] = \frac{\omega_c}{\pi} \text{sinc}\left(\frac{\omega_c(n - (M/2))}{\pi}\right)$
    For $\omega_c = \pi/2$ and $M=4$ (length $L=5$):
    $h_d[n] = \frac{\pi/2}{\pi} \text{sinc}\left(\frac{(\pi/2)(n - 2)}{\pi}\right) = 0.5 \text{sinc}\left(\frac{n-2}{2}\right)$
    $h_d[0] = 0.5 \text{sinc}(-1) = 0.5 \frac{\sin(-\pi)}{-\pi} = 0.5 \cdot 1 = 0.5$
    $h_d[1] = 0.5 \text{sinc}(-0.5) = 0.5 \frac{\sin(-\pi/2)}{-\pi/2} = 0.5 \frac{-1}{-\pi/2} = \frac{1}{\pi} \approx 0.318$
    $h_d[2] = 0.5 \text{sinc}(0) = 0.5 \cdot 1 = 0.5$
    $h_d[3] = 0.5 \text{sinc}(0.5) = 0.5 \frac{\sin(\pi/2)}{\pi/2} = 0.5 \frac{1}{\pi/2} = \frac{1}{\pi} \approx 0.318$
    $h_d[4] = 0.5 \text{sinc}(1) = 0.5 \frac{\sin(\pi)}{\pi} = 0.5 \cdot 0 = 0$

    *   **Hanning Window for length 5 (centered at $n=2$):**
        Let's redefine the window for symmetry around $n=0$:
        $w[n] = 0.5 - 0.5 \cos\left(\frac{2\pi n}{M}\right)$ for $-M/2 \le n \le M/2$.
        For $M=4$, this means $-2 \le n \le 2$.
        $w[0] = 0.5 - 0.5 \cos(0) = 0$ - this is not right.

        Let's use the definition for $0 \le n \le M$:
        $w[n] = 0.5 - 0.5 \cos\left(\frac{2\pi n}{M}\right)$ for $0 \le n \le M$.
        For $M=4$:
        $w[0] = 0.5 - 0.5 \cos(0) = 0$
        $w[1] = 0.5 - 0.5 \cos(\pi/2) = 0.5$
        $w[2] = 0.5 - 0.5 \cos(\pi) = 1$
        $w[3] = 0.5 - 0.5 \cos(3\pi/2) = 0.5$
        $w[4] = 0.5 - 0.5 \cos(2\pi) = 0$

        Now, let's apply this to the *causal* impulse response centered at $M/2 = 2$:
        $h_d[n]$ values are: $0.5, 1/\pi, 0.5, 1/\pi, 0$ for $n=0,1,2,3,4$.
        The filter coefficients $b_k$ are obtained by applying the window to the causal impulse response. However, the window function needs to be applied such that the overall impulse response is symmetric.
        The standard way is to compute the ideal impulse response for $n=0, 1, \ldots, M$ and then apply the window.
        For Type I FIR filter of order $M$ (length $L=M+1$), the ideal impulse response is centered at $M/2$.
        $h_d[n] = \frac{\omega_c}{\pi} \text{sinc}\left(\frac{\omega_c(n - M/2)}{\pi}\right)$ for $n=0, 1, \ldots, M$.
        $h_d[0] = 0.5$
        $h_d[1] = 1/\pi \approx 0.318$
        $h_d[2] = 0.5$
        $h_d[3] = 1/\pi \approx 0.318$
        $h_d[4] = 0$

        Hanning window coefficients for length 5 ($M=4$):
        $w[0] = 0$
        $w[1] = 0.5$
        $w[2] = 1$
        $w[3] = 0.5$
        $w[4] = 0$

        The FIR filter coefficients $b_k$:
        $b_0 = h_d[0] \cdot w[0] = 0.5 \cdot 0 = 0$
        $b_1 = h_d[1] \cdot w[1] = (1/\pi) \cdot 0.5 = 1/(2\pi) \approx 0.159$
        $b_2 = h_d[2] \cdot w[2] = 0.5 \cdot 1 = 0.5$
        $b_3 = h_d[3] \cdot w[3] = (1/\pi) \cdot 0.5 = 1/(2\pi) \approx 0.159$
        $b_4 = h_d[4] \cdot w[4] = 0 \cdot 0 = 0$

        The resulting FIR filter is:
        $y[n] = 0 \cdot x[n] + 0.159 x[n-1] + 0.5 x[n-2] + 0.159 x[n-3] + 0 \cdot x[n-4]$
        $y[n] = 0.159 x[n-1] + 0.5 x[n-2] + 0.159 x[n-3]$

        *Correction*: For a Type I linear phase filter of length $L$, the impulse response is symmetric around $n=(L-1)/2$. The ideal impulse response calculation should be based on this symmetry. The sinc function is already symmetric around 0.
        For a causal filter of length $L=5$, the center is at index $n=2$.
        Ideal impulse response $h_d[n]$ for $n=0,1,2,3,4$.
        $h_d[n] = \frac{\omega_c}{\pi} \text{sinc}\left(\frac{\omega_c(n - (L-1)/2)}{\pi}\right)$
        $h_d[n] = \frac{\omega_c}{\pi} \text{sinc}\left(\frac{\omega_c(n - 2)}{\pi}\right)$
        For $\omega_c = \pi/2$:
        $h_d[0] = 0.5 \text{sinc}(-1) = 0.5$
        $h_d[1] = 0.5 \text{sinc}(-0.5) = 1/\pi \approx 0.318$
        $h_d[2] = 0.5 \text{sinc}(0) = 0.5$
        $h_d[3] = 0.5 \text{sinc}(0.5) = 1/\pi \approx 0.318$
        $h_d[4] = 0.5 \text{sinc}(1) = 0$

        Now, apply the Hanning window coefficients:
        $w[0]=0, w[1]=0.5, w[2]=1, w[3]=0.5, w[4]=0$.
        $b_k = h_d[k] \cdot w[k]$
        $b_0 = 0.5 \cdot 0 = 0$
        $b_1 = (1/\pi) \cdot 0.5 = 1/(2\pi) \approx 0.159$
        $b_2 = 0.5 \cdot 1 = 0.5$
        $b_3 = (1/\pi) \cdot 0.5 = 1/(2\pi) \approx 0.159$
        $b_4 = 0 \cdot 0 = 0$

        This result is correct. The earlier calculation of sinc was slightly off.

#### 2.2.2 The Frequency Sampling Method

This method designs an FIR filter by specifying the desired frequency response at a number of points in the frequency domain.

**Concept:**
The Discrete Fourier Transform (DFT) relates the time-domain impulse response $h[n]$ to the frequency-domain response $H(e^{j\omega})$. If we specify $H(e^{j\omega})$ at $L$ distinct frequencies, we can compute the first $L$ samples of the impulse response using the inverse DFT.

**Procedure:**

1.  **Specify the desired frequency response at $L$ points:** $H(e^{j\omega_k})$ for $k = 0, 1, \dots, L-1$, where $\omega_k = 2\pi k / L$.
2.  **Compute the impulse response samples using the inverse DFT:**
    $h[n] = \frac{1}{L} \sum_{k=0}^{L-1} H(e^{j\omega_k}) e^{j\omega_k n}$ for $n = 0, 1, \dots, L-1$.
    These $h[n]$ values are the coefficients of the FIR filter.

**Advantages:**

*   Directly designs the filter based on frequency domain specifications.
*   Can design filters with arbitrary magnitude and phase responses.

**Disadvantages:**

*   The resulting filter's time-domain behavior (impulse response) is not directly controlled.
*   Stability is guaranteed, but linear phase is not guaranteed unless specific symmetry conditions are met in the frequency specifications.
*   Can be sensitive to small errors in the frequency response specifications.

**(Proakis & Manolakis, Chapter 6.4; Oppenheim & Schafer, Chapter 7.4)**

#### 2.2.3 Optimal FIR Filter Design (Equiripple Method - Parks-McClellan Algorithm)

This method designs FIR filters that minimize the maximum error (equiripple) in the passband and stopband. It is an optimal design method in the minimax sense.

**Concept:**
The Parks-McClellan algorithm (also known as the Remez exchange algorithm) iteratively adjusts the filter coefficients to minimize the maximum weighted ripple in different frequency bands. It is based on the Chebyshev approximation theory.

**Procedure:**
The algorithm is iterative and involves:

1.  **Initial Guess:** Start with an initial set of frequency points.
2.  **Alternation Theorem:** The algorithm relies on the alternation theorem, which states that an optimal $(N+1)$-coefficient FIR filter has an error function that alternates in sign between its maximum and minimum values at $N+2$ points in the frequency band.
3.  **Iteration:**
    *   Calculate the error function at the current extremal frequency points.
    *   Find the new extremal frequency points where the error function alternates and attains its maximum ripple.
    *   Re-evaluate the filter coefficients based on these new extremal frequencies using a system of linear equations.
    *   Repeat until the desired accuracy is achieved.

**Advantages:**

*   Provides optimal filter design in the minimax sense, achieving the lowest possible ripple for a given filter order and transition width.
*   Can design filters with linear phase.

**Disadvantages:**

*   Computationally intensive and complex to implement.
*   Requires a good initial guess of extremal frequencies.

**(Proakis & Manolakis, Chapter 6.5; Oppenheim & Schafer, Chapter 7.4; Ifeachor & Jervis, Chapter 5.3)**

**CO3 Alignment:** This method directly addresses the design of FIR filters to meet stringent specifications.

---

## 3. Design of IIR Filters

IIR filters are characterized by their feedback structure, leading to an infinite impulse response. Their design often involves transforming analog filter designs into digital filters.

### 3.1 IIR Filter Specifications

Similar to FIR filters, IIR filters are designed based on specifications such as:

*   **Passband Edge Frequency:** $\omega_p$
*   **Stopband Edge Frequency:** $\omega_s$
*   **Passband Ripple:** $A_p$ (in dB)
*   **Stopband Ripple:** $A_s$ (in dB)

**(Proakis & Manolakis, Chapter 7.1; Ifeachor & Jervis, Chapter 6.1)**

### 3.2 Design Methods for IIR Filters

The most common approach to IIR filter design is to start with well-established analog filter prototypes (Butterworth, Chebyshev, Elliptic) and then transform them into the digital domain.

#### 3.2.1 Analog Filter Prototypes

These are filters designed in the continuous-time domain.

*   **Butterworth Filters:**
    *   **Magnitude Response:** Monotonic in both passband and stopband.
    *   **Roll-off:** Smooth and gradual.
    *   **Maximally Flat:** In the passband.
    *   **Characteristics:** Less sharp transition band compared to Chebyshev or Elliptic filters for the same order.

*   **Chebyshev Filters:**
    *   **Type I:** Equiripple in the passband, monotonic in the stopband. Offers a sharper transition band than Butterworth for the same order, at the cost of passband ripple.
    *   **Type II (Inverse Chebyshev):** Monotonic in the passband, equiripple in the stopband. Offers a sharper transition band than Butterworth but with a non-equiripple passband.

*   **Elliptic Filters (Cauer Filters):**
    *   **Magnitude Response:** Equiripple in both the passband and the stopband.
    *   **Characteristics:** Provide the steepest transition band for a given order and ripple specifications. However, they are more complex and can exhibit non-linear phase.

**(Proakis & Manolakis, Chapter 7.2; Oppenheim & Schafer, Chapter 5.4; Ifeachor & Jervis, Chapter 6.2)**

#### 3.2.2 Transformation from Analog to Digital Filters

The key to IIR filter design is the **Bilinear Transformation**.

**Concept:**
The bilinear transformation is a conformal mapping that transforms the $s$-plane (continuous-time) to the $z$-plane (discrete-time) in a way that maps the imaginary axis of the $s$-plane to the unit circle of the $z$-plane. This preserves the stability properties of the analog filter in the digital filter.

**The Bilinear Transformation:**
The transformation is given by:
$s = \frac{2}{T} \frac{1 - z^{-1}}{1 + z^{-1}}$
where $T$ is the sampling period.

**Procedure:**

1.  **Specify the digital filter requirements:** Determine the desired digital cutoff frequencies ($\omega_{pd}, \omega_{sd}$) and ripple specifications.

2.  **Pre-warp the digital frequencies:** Due to the non-linear nature of the bilinear transformation, digital frequencies must be pre-warped to match the analog frequencies after transformation. The relationship is:
    $\omega_d = \frac{2}{T} \tan\left(\frac{\omega_a T}{2}\right)$
    Therefore, the analog cutoff frequencies $\omega_{ca}, \omega_{sa}$ are found from the digital cutoff frequencies $\omega_{cd}, \omega_{sd}$:
    $\omega_{ca} = \frac{2}{T} \tan\left(\frac{\omega_{cd} T}{2}\right)$
    $\omega_{sa} = \frac{2}{T} \tan\left(\frac{\omega_{sd} T}{2}\right)$
    (Often, $T=1$ or $T=2$ is used for simplicity, which implies $\omega_{ca} = 2 \tan(\omega_{cd}/2)$ and $\omega_{sa} = 2 \tan(\omega_{sd}/2)$ if the digital frequency is normalized by the Nyquist frequency).

3.  **Design an analog prototype filter:** Choose a suitable analog filter type (Butterworth, Chebyshev, Elliptic) and order to meet the pre-warped analog frequency specifications. Obtain its transfer function $H(s)$.

4.  **Apply the bilinear transformation:** Replace every $s$ in $H(s)$ with the bilinear transformation expression $\frac{2}{T} \frac{1 - z^{-1}}{1 + z^{-1}}$. This yields the digital filter's transfer function $H(z)$.

**Advantages:**

*   Preserves stability from analog to digital domain.
*   Can achieve sharp frequency responses with lower filter orders than FIR filters.
*   Leverages well-established analog filter design techniques.

**Disadvantages:**

*   Generally does not have linear phase (except for specific cases like all-pass filters).
*   Frequency warping can make precise specification of cutoff frequencies challenging.

**(Proakis & Manolakis, Chapter 7.3; Oppenheim & Schafer, Chapter 5.5; Ifeachor & Jervis, Chapter 6.3)**

**Example:** Design a digital low-pass filter with a cutoff frequency of $\omega_{cd} = \pi/4$ using the bilinear transformation and a first-order Butterworth analog filter.

1.  **Digital Specification:** $\omega_{cd} = \pi/4$. Let $T=2$ (so normalized $\omega_{cd} = \pi/2$).
2.  **Pre-warp:** $\omega_{ca} = 2 \tan(\frac{\pi/4}{2}) = 2 \tan(\pi/8) \approx 2 \times 0.414 = 0.828$.
3.  **Analog Butterworth Filter (1st order):**
    The general form of a first-order analog low-pass filter is $H(s) = \frac{\Omega_c}{s + \Omega_c}$, where $\Omega_c$ is the cutoff frequency.
    For Butterworth, $\Omega_c = \omega_{ca} = 0.828$.
    So, $H(s) = \frac{0.828}{s + 0.828}$.

4.  **Apply Bilinear Transformation:** Replace $s$ with $\frac{2(1-z^{-1})}{1+z^{-1}}$.
    $H(z) = \frac{0.828}{\frac{2(1-z^{-1})}{1+z^{-1}} + 0.828}$
    $H(z) = \frac{0.828 (1+z^{-1})}{2(1-z^{-1}) + 0.828(1+z^{-1})}$
    $H(z) = \frac{0.828 + 0.828z^{-1}}{2 - 2z^{-1} + 0.828 + 0.828z^{-1}}$
    $H(z) = \frac{0.828 + 0.828z^{-1}}{2.828 - 1.172z^{-1}}$

    The difference equation is:
    $y[n] = 0.828x[n] + 0.828x[n-1] - (-1.172)y[n-1]$
    $y[n] = 0.828x[n] + 0.828x[n-1] + 1.172y[n-1]$

    *Note on normalization*: If the digital cutoff is given as a normalized frequency $\omega_{cd}'$ (e.g., $\pi/4$ radians/sample), and we use $T=2$, then the actual digital cutoff $\omega_{cd}$ is $\pi/4$. The pre-warping formula with $T=2$ maps the digital frequency $\omega_{cd}'$ to the analog frequency $\omega_{ca}' = 2 \tan(\omega_{cd}'/2)$.
    So, $\omega_{ca}' = 2 \tan(\pi/8) \approx 0.828$.
    The analog filter is $H(s) = \frac{\omega_{ca}'}{s+\omega_{ca}'} = \frac{0.828}{s+0.828}$.
    When applying the bilinear transform $s = \frac{2}{T}\frac{1-z^{-1}}{1+z^{-1}}$, if we use $T=2$, then $s = \frac{1-z^{-1}}{1+z^{-1}}$.
    $H(z) = \frac{0.828}{\frac{1-z^{-1}}{1+z^{-1}} + 0.828} = \frac{0.828(1+z^{-1})}{1-z^{-1} + 0.828(1+z^{-1})}$
    $H(z) = \frac{0.828 + 0.828z^{-1}}{1 - z^{-1} + 0.828 + 0.828z^{-1}} = \frac{0.828 + 0.828z^{-1}}{1.828 - 0.172z^{-1}}$
    This example highlights the importance of consistent normalization and mapping.

    Let's assume standard convention where digital frequencies are normalized by $\pi$ (Nyquist frequency).
    Digital cutoff $\omega_{cd} = \pi/4$.
    Analog cutoff $\omega_{ca} = 2 \tan(\frac{\omega_{cd}}{2}) = 2 \tan(\frac{\pi/4}{2}) = 2 \tan(\pi/8) \approx 0.828$.
    Analog filter: $H(s) = \frac{\omega_{ca}}{s+\omega_{ca}} = \frac{0.828}{s+0.828}$.
    Bilinear transform: $s = \frac{1-z^{-1}}{1+z^{-1}}$ (for $T=2$, mapping $\pi$ rad/sec to $\pi$ rad/sample).
    $H(z) = \frac{0.828}{\frac{1-z^{-1}}{1+z^{-1}} + 0.828} = \frac{0.828(1+z^{-1})}{1-z^{-1} + 0.828(1+z^{-1})} = \frac{0.828 + 0.828z^{-1}}{1.828 - 0.172z^{-1}}$.
    This yields $y[n] = 0.828x[n] + 0.828x[n-1] + 0.172y[n-1]$.

    The key is the mapping: $\omega_{digital} = \frac{2}{T} \arctan(\frac{\omega_{analog} T}{2})$.
    If we normalize digital frequency by $\pi$ (i.e., $\omega_{cd}' = \omega_{cd}/\pi$) and analog frequency by $\Omega_{Nyquist} = \pi/T$, then $\omega_{cd}' = \frac{2}{T} \arctan(\frac{\omega_{analog} T}{2})$.
    For $T=2$, $\omega_{cd}' = \arctan(\omega_{analog}'/2)$. So $\omega_{analog}' = \tan(\omega_{cd}'/2)$.
    If $\omega_{cd}' = (\pi/4)/\pi = 1/4$, then $\omega_{analog}' = \tan(\pi/8) \approx 0.414$.
    So analog cutoff $\Omega_c = 0.414$.
    $H(s) = \frac{0.414}{s+0.414}$.
    $s = \frac{1-z^{-1}}{1+z^{-1}}$.
    $H(z) = \frac{0.414}{\frac{1-z^{-1}}{1+z^{-1}} + 0.414} = \frac{0.414(1+z^{-1})}{1-z^{-1} + 0.414(1+z^{-1})} = \frac{0.414 + 0.414z^{-1}}{1.414 - 0.586z^{-1}}$.
    $y[n] = 0.414x[n] + 0.414x[n-1] + 0.586y[n-1]$.

    This normalization and pre-warping are critical. The textbooks use various conventions. For this exercise, let's assume the digital cutoff frequency is given in radians/sample, and we want to match an analog filter whose cutoff is at $\Omega_c$. The relation is $\Omega_{analog} = \frac{2}{T} \tan(\frac{\omega_{digital} T}{2})$. If we use $T=1$ (or simply consider normalized digital frequencies where the sampling rate is 2), then $\Omega_{analog} = 2 \tan(\omega_{digital}/2)$.

    Let's re-run the example with $\omega_{cd} = \pi/4$ and $T=1$.
    $\Omega_{ca} = 2 \tan(\frac{\pi/4}{2}) = 2 \tan(\pi/8) \approx 0.828$.
    Analog filter $H(s) = \frac{0.828}{s+0.828}$.
    Bilinear Transform $s = \frac{2}{1} \frac{1-z^{-1}}{1+z^{-1}} = 2 \frac{1-z^{-1}}{1+z^{-1}}$.
    $H(z) = \frac{0.828}{2 \frac{1-z^{-1}}{1+z^{-1}} + 0.828} = \frac{0.828(1+z^{-1})}{2(1-z^{-1}) + 0.828(1+z^{-1})}$
    $H(z) = \frac{0.828 + 0.828z^{-1}}{2 - 2z^{-1} + 0.828 + 0.828z^{-1}} = \frac{0.828 + 0.828z^{-1}}{2.828 - 1.172z^{-1}}$.
    The difference equation is $y[n] = 0.292x[n] + 0.292x[n-1] + 0.414y[n-1]$. (After dividing numerator and denominator by 2.828).

#### 3.2.3 Other Transformation Methods (Brief Mention)

*   **Impulse Invariant Method:** Attempts to preserve the impulse response of the analog filter.
    *   $h[n] = h_a(nT)$
    *   **Issue:** Aliasing in the frequency response if analog cutoff is too high relative to sampling rate. Generally less preferred than bilinear transform.
*   **Step Invariant Method:** Attempts to preserve the step response.
*   **Finite Difference Method:** Approximates derivatives.

**(Proakis & Manolakis, Chapter 7.3; Oppenheim & Schafer, Chapter 5.5)**

**CO2 Alignment:** Understanding the structure and implementation of IIR filters and FIR filters is directly addressed.
**CO3 Alignment:** This section details the design process for IIR filters.

---

## 4. Linear Phase FIR Filters

Linear phase filters are highly desirable in many applications because they introduce a constant time delay for all frequencies, preventing phase distortion.

### 4.1 Properties of Linear Phase Filters

A filter has linear phase if its phase response is a linear function of frequency:
$\angle H(e^{j\omega}) = -\omega \tau$ for some constant $\tau$ (group delay).

For a causal FIR filter, this implies symmetry in the impulse response:
$h[n] = h[M-n]$ for $0 \le n \le M$, where $M$ is the filter order. This is **Type I** linear phase.

**Types of Linear Phase FIR Filters:**

| Type    | Impulse Response Symmetry | Length $L = M+1$ | Phase Response            | Causal and Stable? |
| :------ | :------------------------ | :--------------- | :------------------------ | :----------------- |
| Type I  | $h[n] = h[M-n]$           | Odd ($M$ is even) | $\angle H(e^{j\omega}) = -\omega (M/2)$ | Yes                |
| Type II | $h[n] = -h[M-n]$          | Even ($M$ is odd) | $\angle H(e^{j\omega}) = -\omega (M/2)$ | Yes                |
| Type III| $h[n] = h[M-n]$           | Odd ($M$ is even) | $\angle H(e^{j\omega}) = -\omega (M/2) + \pi/2$ | Odd symmetry, phase offset |
| Type IV | $h[n] = -h[M-n]$          | Even ($M$ is odd) | $\angle H(e^{j\omega}) = -\omega (M/2) + \pi/2$ | Odd symmetry, phase offset |

**(Proakis & Manolakis, Chapter 6.6; Oppenheim & Schafer, Chapter 7.2)**

**Key Points for Linear Phase FIR Design:**

*   The window method naturally produces linear phase if the window function is symmetric and the ideal impulse response is designed correctly.
*   The Parks-McClellan algorithm can be constrained to produce linear phase filters.

---

## 5. Coefficient Quantization Effects

When filter coefficients are stored with finite precision (quantization), it can lead to deviations from the ideal filter characteristics. This is particularly important in real-time DSP systems.

### 5.1 Quantization Errors

*   **Coefficient Quantization:** Finite precision representation of filter coefficients ($b_k, a_k$). This can cause the actual frequency response to differ from the designed response.
*   **Product Quantization:** Intermediate products in the filter computation are quantized.
*   **Summation Quantization:** The accumulation of quantized products can lead to overflow or quantization noise.

### 5.2 Impact on Filter Performance

*   **Magnitude Response Distortion:** The frequency response can deviate from the desired shape.
*   **Phase Response Distortion:** Especially problematic for linear phase filters, as slight coefficient errors can destroy linearity.
*   **Stability Issues:** Quantization can move poles of IIR filters outside the unit circle, leading to instability.
*   **Increased Noise:** Rounding or truncation errors introduce noise into the output signal.

### 5.3 Mitigation Strategies

*   **Higher Precision Coefficients:** Using more bits for coefficients.
*   **Coefficient Sensitivity Analysis:** Choosing filter structures that are less sensitive to coefficient quantization.
*   **Filter Reordering/Restructuring:** For IIR filters, cascading or parallel forms can be less sensitive than direct forms.
*   **Noise Shaping Techniques:** Employing techniques to push quantization noise to less critical frequency bands.

**(Proakis & Manolakis, Chapter 9; Oppenheim & Schafer, Chapter 11; Ifeachor & Jervis, Chapter 11)**

**CO4 Alignment:** This section directly addresses the effect of word length (quantization) in digital filters.

---

## 6. Filter Realizations (CO2 Alignment)

Once a digital filter is designed (i.e., its transfer function $H(z)$ is known), it needs to be implemented or "realized" in hardware or software.

### 6.1 FIR Filter Realizations

*   **Direct Form:**
    $y[n] = b_0x[n] + b_1x[n-1] + \dots + b_Mx[n-M]$
    Requires $M$ delays, $M+1$ multipliers, and $M$ adders.

*   **Transposed Direct Form:**
    The structure is obtained by transposing the signal flow graph. It has the same number of components but a different signal flow.

*   **Cascade Form:**
    A higher-order FIR filter can be decomposed into a product of second-order (or lower) FIR sections, which can be more efficient and less sensitive to quantization.

*   **Lattice Structure:**
    Offers good numerical properties and is modular.

### 6.2 IIR Filter Realizations

*   **Direct Form I:**
    $y[n] = \sum_{k=0}^{M} b_k x[n-k] - \sum_{k=1}^{N} a_k y[n-k]$
    Requires $M$ delays for the feedforward part and $N$ delays for the feedback part. Total $M+N$ delays.

*   **Direct Form II:**
    Can be obtained by transposing the signal flow graph of Direct Form I and rearranging to share delay elements.
    Requires $\max(M, N)$ delays. Numerically less stable than Direct Form I.

*   **Transposed Direct Form II:**
    This is the transpose of Direct Form II and offers better numerical properties and often fewer zero-state output samples for transient response.

*   **Cascade Form:**
    The transfer function $H(z)$ is factored into a product of second-order (biquad) sections and possibly first-order sections.
    $H(z) = \prod_{i=1}^{K} H_i(z)$
    This form is generally preferred due to reduced coefficient sensitivity and better numerical stability.

*   **Parallel Form:**
    The transfer function $H(z)$ is decomposed using partial fraction expansion into first- and second-order sections.
    $H(z) = \sum_{i=1}^{K} H_i(z)$
    This form is also good for numerical stability and sensitivity.

*   **Lattice Structure:**
    Similar to FIR lattice structures, these offer good numerical properties.

**(Proakis & Manolakis, Chapter 6.7, Chapter 8; Oppenheim & Schafer, Chapter 5.6, Chapter 6; Ifeachor & Jervis, Chapter 5.4, Chapter 7)**

---

## 7. Practice Questions and Answers

**Question 1:**
For a linear phase FIR filter, which of the following is a crucial property of its impulse response?
(a) Causality
(b) Symmetry
(c) Stability
(d) Uniqueness

**Answer 1:**
(b) Symmetry

**Question 2:**
The window method for FIR filter design is characterized by:
(a) Optimality in the minimax sense.
(b) Direct specification of frequency response points.
(c) Truncation of an ideal filter's impulse response using a window function.
(d) Transformation of an analog filter using the bilinear transform.

**Answer 2:**
(c) Truncation of an ideal filter's impulse response using a window function.

**Question 3:**
The bilinear transformation is used in IIR filter design to:
(a) Increase the filter order.
(b) Introduce linear phase.
(c) Map the $s$-plane to the $z$-plane while preserving stability.
(d) Reduce coefficient sensitivity.

**Answer 3:**
(c) Map the $s$-plane to the $z$-plane while preserving stability.

**Question 4:**
Which type of IIR filter provides the steepest transition band for a given order?
(a) Butterworth
(b) Chebyshev Type I
(c) Chebyshev Type II
(d) Elliptic

**Answer 4:**
(d) Elliptic

**Question 5:**
Coefficient quantization in digital filters can lead to:
(a) Improved filter performance.
(b) Introduction of quantization noise.
(c) Guaranteed stability.
(d) Perfect linear phase response.

**Answer 5:**
(b) Introduction of quantization noise.

**Question 6:**
Design a FIR filter of order $M=2$ (length $L=3$) with an impulse response that has Type I linear phase. The ideal impulse response is $h_d[n] = \{1, 2, 1\}$. Use a rectangular window. What are the coefficients of the FIR filter?

**Answer 6:**
For Type I linear phase, the ideal impulse response is symmetric. Given $h_d[n] = \{1, 2, 1\}$ for $n=0, 1, 2$.
The filter order is $M=2$. The length of the impulse response is $L=M+1=3$.
The center of symmetry is $(L-1)/2 = 1$. The impulse response is indeed symmetric: $h_d[0] = h_d[2] = 1$.
A rectangular window of length $L=3$ has coefficients $w[n] = \{1, 1, 1\}$ for $n=0, 1, 2$.
The FIR filter coefficients $b_k = h_d[k] \cdot w[k]$:
$b_0 = h_d[0] \cdot w[0] = 1 \cdot 1 = 1$
$b_1 = h_d[1] \cdot w[1] = 2 \cdot 1 = 2$
$b_2 = h_d[2] \cdot w[2] = 1 \cdot 1 = 1$
So, the FIR filter coefficients are $b_k = \{1, 2, 1\}$.

**Question 7:**
Consider an analog low-pass filter with transfer function $H(s) = \frac{1}{s+1}$. Design a digital filter using the bilinear transformation with $T=2$ and a digital cutoff frequency $\omega_{cd} = \pi/2$. First, determine the analog cutoff frequency $\Omega_{ca}$ required to match the digital cutoff. Then, find the digital filter's transfer function $H(z)$.

**Answer 7:**
1.  **Pre-warping:**
    The relationship between digital cutoff $\omega_{cd}$ and analog cutoff $\Omega_{ca}$ for $T=2$ is:
    $\omega_{cd} = 2 \arctan\left(\frac{\Omega_{ca} T}{2}\right) = 2 \arctan\left(\frac{\Omega_{ca}}{2}\right)$
    Given $\omega_{cd} = \pi/2$:
    $\frac{\pi}{2} = 2 \arctan\left(\frac{\Omega_{ca}}{2}\right)$
    $\frac{\pi}{4} = \arctan\left(\frac{\Omega_{ca}}{2}\right)$
    $\tan(\frac{\pi}{4}) = \frac{\Omega_{ca}}{2}$
    $1 = \frac{\Omega_{ca}}{2} \implies \Omega_{ca} = 2$.

2.  **Analog Filter Design:**
    The analog filter is $H(s) = \frac{\Omega_{ca}}{s+\Omega_{ca}} = \frac{2}{s+2}$ to match the digital requirement.

3.  **Bilinear Transformation:**
    With $T=2$, the bilinear transformation is $s = \frac{2}{2} \frac{1-z^{-1}}{1+z^{-1}} = \frac{1-z^{-1}}{1+z^{-1}}$.
    Substitute this into $H(s)$:
    $H(z) = \frac{2}{\frac{1-z^{-1}}{1+z^{-1}} + 2}$
    $H(z) = \frac{2(1+z^{-1})}{1-z^{-1} + 2(1+z^{-1})}$
    $H(z) = \frac{2 + 2z^{-1}}{1 - z^{-1} + 2 + 2z^{-1}}$
    $H(z) = \frac{2 + 2z^{-1}}{3 + z^{-1}}$

    The digital filter's transfer function is $H(z) = \frac{2 + 2z^{-1}}{3 + z^{-1}}$.

---

## 8. Important Points to Remember

*   **FIR vs. IIR:** FIR filters are always stable and can achieve linear phase, but require higher orders for sharp transitions. IIR filters offer sharper transitions with lower orders but generally lack linear phase and stability must be ensured.
*   **Window Method:** Simple FIR design, trade-off between transition width and stopband attenuation based on window choice.
*   **Parks-McClellan:** Optimal FIR design (minimax), computationally intensive.
*   **Bilinear Transformation:** Key for IIR design, maps analog to digital, preserves stability, but causes frequency warping.
*   **Linear Phase:** Crucial for avoiding phase distortion. Type I and Type II FIR filters are common for this.
*   **Quantization:** Finite precision of coefficients and operations degrades filter performance and can affect stability.

---

## 9. Alignment with Course Outcomes

*   **CO1: Analyse discrete-time systems using DFT (Knowledge Level: K2)**
    *   DFT is implicitly used in understanding frequency response and can be used to analyze the performance of designed filters. The frequency sampling method directly uses DFT.
*   **CO2: Realise IIR and FIR filters (Knowledge Level: K3)**
    *   Section 6 (Filter Realizations) covers various direct, cascade, and parallel forms for both FIR and IIR filters.
*   **CO3: Design of IIR and FIR filters (Knowledge Level: K3)**
    *   Sections 2 (Design of FIR Filters) and 3 (Design of IIR Filters) comprehensively cover the design methodologies.
*   **CO4: Analyse effect of word length in digital filters (Knowledge Level: K3)**
    *   Section 5 (Coefficient Quantization Effects) directly addresses this outcome.

This concludes the study notes for Module 3 on the Design of Digital Filters. It covers the fundamental concepts, design techniques, and practical considerations for both FIR and IIR filters.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
