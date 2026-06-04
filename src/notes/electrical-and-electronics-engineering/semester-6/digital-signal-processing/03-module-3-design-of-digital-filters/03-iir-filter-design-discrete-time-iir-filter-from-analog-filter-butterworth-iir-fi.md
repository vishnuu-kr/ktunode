---
title: "IIR filter design: Discrete time IIR filter from analog filter (Butterworth), IIR filter (LPF, HPF, BPF, BRF) design by Impulse Invariance, Bilinear transformation."
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 3: Design of Digital Filters:"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36666"
status: "completed"
scrapedAt: "2026-05-23T16:26:46.300Z"
---
## DIGITAL SIGNAL PROCESSING: Module 3: Design of Digital Filters

### Topic: IIR Filter Design: Discrete-Time IIR Filter from Analog Filter (Butterworth), IIR Filter (LPF, HPF, BPF, BRF) Design by Impulse Invariance, Bilinear Transformation

---

### **Learning Outcomes Covered:**

*   **Design of IIR filters from analog prototypes:** This section will focus on transforming continuous-time analog filter characteristics to discrete-time digital filter specifications.
*   **Butterworth filter design:** We will explore the characteristics and design methodology of Butterworth analog filters, which serve as a basis for IIR digital filter design.
*   **Impulse Invariance method:** Understanding how to preserve the impulse response of an analog filter in its discrete-time counterpart.
*   **Bilinear Transformation method:** A powerful technique for mapping analog filter transfer functions to digital filter transfer functions, preserving stability and incorporating frequency warping.
*   **Design of various IIR filter types:** This includes designing Low-Pass Filters (LPF), High-Pass Filters (HPF), Band-Pass Filters (BPF), and Band-Stop/Band-Reject Filters (BRF).

---

### **Course Outcomes Alignment:**

*   **CO1: Analyse discrete-time systems using DFT (Knowledge Level: K2):** While this module primarily focuses on filter design, understanding filter characteristics often involves frequency domain analysis, which can be facilitated by DFT. We will touch upon frequency response.
*   **CO2: Realise IIR and FIR filters (Knowledge Level: K3):** The design methods discussed directly lead to the transfer functions of IIR filters, which are the foundation for their realization in hardware or software.
*   **CO3: Design of IIR and FIR filters (Knowledge Level: K3):** This module is entirely dedicated to the design of IIR filters, covering different methods and filter types.
*   **CO4: Analyse effect of word length in digital filters (Knowledge Level: K3):** Although not directly covered in design, understanding filter transfer functions is a prerequisite for analyzing quantization effects during coefficient representation and filter implementation.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### **Textbook References:**

*   **Proakis & Manolakis (4th Ed.):** Chapter 7 (Digital Filter Design), specifically sections on IIR filter design from analog prototypes, impulse invariance, and bilinear transformation.
*   **Oppenheim & Schafer (2nd Ed.):** Chapter 6 (Digital Filter Design), focusing on the transformation of analog filter specifications to digital filter specifications, impulse invariance, and bilinear transformation.

---

### **Introduction to IIR Filter Design**

Infinite Impulse Response (IIR) filters are a class of digital filters characterized by feedback in their structure, leading to an impulse response that theoretically continues indefinitely. Their primary advantage lies in their efficiency, requiring fewer coefficients and computational operations to achieve a desired frequency response compared to Finite Impulse Response (FIR) filters. This makes them ideal for applications where computational resources are limited.

IIR filter design typically involves two main approaches:

1.  **Design by Analog Filter Transformation:** This is the most common approach, where well-established analog filter design techniques (like Butterworth, Chebyshev, Elliptic) are used to create an analog filter prototype. This analog filter's characteristics are then transformed into a digital filter using specific mapping techniques.
2.  **Direct Design Methods:** These methods directly design the digital filter coefficients from the desired digital frequency response specifications without recourse to an analog prototype. While powerful, they are often more complex than the analog transformation methods.

This module focuses on the **design by analog filter transformation**, specifically using the **Butterworth** analog filter as a prototype, and the two prominent transformation techniques: **Impulse Invariance** and **Bilinear Transformation**.

---

### **1. Discrete-Time IIR Filter from Analog Filter (Butterworth)**

#### **1.1 Analog Filter Prototypes**

Analog filters are designed in the s-plane, characterized by their transfer function $H(s)$. Common analog filter types offer specific amplitude-frequency responses:

*   **Butterworth Filters:**
    *   **Characteristics:** Maximally flat passband response. The magnitude response decreases monotonically with increasing frequency. They are known for their smooth, rounded frequency response, avoiding ripples in the passband or stopband.
    *   **Magnitude Squared Response:** $|H_a(j\omega)|^2 = \frac{1}{1 + (\frac{\omega}{\omega_c})^{2n}}$, where $\omega_c$ is the cutoff frequency and $n$ is the order of the filter.
    *   **Advantages:** Simple design, good passband flatness.
    *   **Disadvantages:** Slower transition band compared to Chebyshev or Elliptic filters for the same order.
    *   **Proakis & Manolakis:** Section 7.1.1 discusses Butterworth approximations.
    *   **Oppenheim & Schafer:** Chapter 6, Section 6.1.1 describes approximation properties of analog filters, including Butterworth.

*   **Chebyshev Filters:**
    *   **Type I:** Equiripple behavior in the passband, monotonic in the stopband.
    *   **Type II:** Monotonic in the passband, equiripple in the stopband.
*   **Elliptic Filters:**
    *   Equiripple behavior in both the passband and stopband. Offers the sharpest transition band for a given order but with ripples.

For IIR digital filter design, we often start with a specification in the digital domain (sampling frequency $f_s$, cutoff frequencies $\omega_{p}$, $\omega_{s}$, passband ripple $A_{p}$, stopband attenuation $A_{s}$). These specifications are then converted to analog domain specifications ($\Omega_{p}$, $\Omega_{s}$) using a frequency transformation, and an analog filter prototype (e.g., Butterworth) is designed. Finally, this analog prototype is transformed into a digital filter.

#### **1.2 Designing a Butterworth Digital Filter**

The general procedure to design a digital Butterworth filter from analog prototype specifications is as follows:

1.  **Specify Digital Filter Requirements:**
    *   Sampling frequency: $f_s$ (or sampling period $T = 1/f_s$).
    *   Cutoff frequencies: $\omega_{p}$ (passband edge), $\omega_{s}$ (stopband edge) in rad/sample.
    *   Passband ripple: $A_{p}$ (in dB).
    *   Stopband attenuation: $A_{s}$ (in dB).

2.  **Convert to Analog Domain Frequencies:** Using a frequency transformation to map the digital specifications to the analog frequency domain ($\Omega$).
    *   **For Low-Pass Filter:**
        *   Digital cutoff frequency $\omega_c$ maps to analog cutoff frequency $\Omega_c$.
        *   The relationship depends on the transformation method. For Bilinear Transformation, $\Omega_c = \frac{2}{T} \tan(\frac{\omega_c T}{2})$.
    *   **For other filter types (HPF, BPF, BRF):** Similar mappings exist for their respective characteristic frequencies.

3.  **Determine the Order and Cutoff Frequency of the Analog Filter:**
    *   For Butterworth filters, the order $n$ is determined based on the passband and stopband requirements.
    *   **Proakis & Manolakis:** Section 7.1.2 provides formulas for determining the order $n$ for Butterworth LPF. For example, for a LPF with digital specifications $\omega_p$, $\omega_s$, $A_p$, $A_s$:
        *   The analog cutoff frequencies are $\Omega_{p} = \frac{2}{T} \tan(\frac{\omega_p T}{2})$ and $\Omega_{s} = \frac{2}{T} \tan(\frac{\omega_s T}{2})$.
        *   The required order $n$ is given by: $n \geq \frac{\log\left(\frac{10^{0.1A_s} - 1}{10^{0.1A_p} - 1}\right)}{\log\left(\frac{\Omega_s}{\Omega_p}\right)}$.
    *   The cutoff frequency $\omega_c$ (or $\Omega_c$) is then chosen, typically as $\Omega_p$.

4.  **Obtain the Analog Transfer Function $H_a(s)$:**
    *   The Butterworth analog transfer function of order $n$ and cutoff frequency $\Omega_c$ is:
        $H_a(s) = \frac{K}{(s/\Omega_c)^n + 1}$
        where $K$ is a gain constant, usually chosen so that $|H_a(j\Omega_c)| = 1/\sqrt{2}$ for a normalized LPF.
    *   The poles of the Butterworth filter lie on a circle of radius $\Omega_c$ in the s-plane at angles $(2k-1)\pi/n$ for $k=1, 2, ..., n$.
    *   **Proakis & Manolakis:** Section 7.1.1 details the pole locations and the general form of $H_a(s)$.
    *   **Oppenheim & Schafer:** Section 6.1.1 explains the derivation of $H_a(s)$ from poles.

5.  **Transform $H_a(s)$ to $H(z)$:** Use a suitable transformation technique (Impulse Invariance or Bilinear Transformation) to convert the analog transfer function to a digital filter transfer function.

---

### **2. IIR Filter Design by Impulse Invariance**

#### **2.1 Concept and Method**

The **Impulse Invariance** method aims to create a digital filter whose impulse response $h[n]$ is a sampled version of the impulse response $h_a(t)$ of a desired analog filter.

$h[n] = h_a(nT)$

where $T$ is the sampling period.

If $H_a(s)$ is the analog transfer function and $H(z)$ is the digital filter transfer function, then the impulse invariance method establishes a relationship between them such that:

$H(z) = \sum_{n=-\infty}^{\infty} h_a(nT) z^{-n}$

This summation is the definition of the Z-transform of the sampled impulse response. Using partial fraction expansion of $H_a(s)$, we can derive the corresponding $H(z)$.

If $H_a(s)$ has simple poles at $s = p_k$, with residues $A_k$:

$H_a(s) = \sum_{k=1}^{N} \frac{A_k}{s - p_k}$

Then, the impulse response is $h_a(t) = \sum_{k=1}^{N} A_k e^{p_k t} u(t)$.

The sampled impulse response is $h[n] = h_a(nT) = \sum_{k=1}^{N} A_k e^{p_k nT} u(n)$.

The Z-transform of this sampled impulse response is:

$H(z) = \sum_{n=0}^{\infty} \left( \sum_{k=1}^{N} A_k e^{p_k nT} \right) z^{-n} = \sum_{k=1}^{N} A_k \sum_{n=0}^{\infty} (e^{p_k T} z^{-1})^n$

This is a geometric series, so:

$H(z) = \sum_{k=1}^{N} A_k \frac{1}{1 - e^{p_k T} z^{-1}}$

This gives the relationship between analog poles $p_k$ and digital poles $z_k$:

$z_k = e^{p_k T}$

**Key Feature:** The impulse invariance method preserves the impulse response values at the sampling instants.

**Proakis & Manolakis:** Section 7.3.1 details the impulse invariance method and its relationship with partial fraction expansion.
**Oppenheim & Schafer:** Section 6.3.1 explains the impulse invariance transformation.

#### **2.2 Advantages and Disadvantages**

*   **Advantages:**
    *   Preserves the impulse response of the analog filter at the sampling instants, which is beneficial for certain applications.
    *   The mapping of poles $z_k = e^{p_k T}$ is straightforward.

*   **Disadvantages:**
    *   **Aliasing:** This is the primary drawback. If the analog filter's impulse response $h_a(t)$ is not bandlimited, sampling it can introduce aliasing in the frequency domain. This means the frequency response of the digital filter will not be a direct replica of the analog filter's frequency response, especially near the Nyquist frequency ($F_s/2$).
    *   To minimize aliasing, the analog filter must have a sufficiently sharp cutoff in the stopband *before* the sampling frequency ($F_s$) and its harmonics ($2F_s, 3F_s$, etc.). This often requires an analog filter with a very steep rolloff, which can be difficult and expensive to design.
    *   Not suitable for designing digital filters with a bandpass or band-stop frequency response directly from analog prototypes because the aliasing would distort the desired frequency response.

#### **2.3 Design Example (Butterworth LPF using Impulse Invariance)**

**Problem:** Design a digital Butterworth low-pass filter with:
*   Sampling frequency $f_s = 10$ kHz ($T = 0.1$ ms).
*   Passband edge $\omega_p = 0.2\pi$ rad/sample.
*   Stopband edge $\omega_s = 0.5\pi$ rad/sample.
*   Passband ripple $A_p = 1$ dB.
*   Stopband attenuation $A_s = 20$ dB.

**Solution Steps:**

1.  **Convert to Analog Frequencies:**
    *   $\Omega_p = \frac{2}{T} \tan\left(\frac{\omega_p T}{2}\right) = \frac{2}{0.1 \times 10^{-3}} \tan\left(\frac{0.2\pi \times 0.1 \times 10^{-3}}{2}\right) \approx 20 \times 10^3 \tan(0.01\pi)$
    *   Using $\tan(x) \approx x$ for small $x$: $\Omega_p \approx 20 \times 10^3 \times 0.01\pi \approx 628.3$ rad/s.
    *   $\Omega_s = \frac{2}{T} \tan\left(\frac{\omega_s T}{2}\right) = \frac{2}{0.1 \times 10^{-3}} \tan\left(\frac{0.5\pi \times 0.1 \times 10^{-3}}{2}\right) \approx 20 \times 10^3 \tan(0.025\pi)$
    *   $\Omega_s \approx 20 \times 10^3 \times 0.0785 \approx 1570.8$ rad/s.

2.  **Determine Analog Filter Order (n):**
    *   $n \geq \frac{\log\left(\frac{10^{0.1A_s} - 1}{10^{0.1A_p} - 1}\right)}{\log\left(\frac{\Omega_s}{\Omega_p}\right)}$
    *   $n \geq \frac{\log\left(\frac{10^{0.1 \times 20} - 1}{10^{0.1 \times 1} - 1}\right)}{\log\left(\frac{1570.8}{628.3}\right)} = \frac{\log\left(\frac{100 - 1}{1.2589 - 1}\right)}{\log(2.5)} = \frac{\log\left(\frac{99}{0.2589}\right)}{\log(2.5)} = \frac{\log(382.4)}{\log(2.5)} \approx \frac{2.582}{0.398} \approx 6.48$
    *   Therefore, the minimum order is $n=7$.

3.  **Design Analog Butterworth Filter:**
    *   Let's assume for simplicity we are designing a 2nd-order Butterworth LPF with cutoff $\Omega_c = 1000$ rad/s.
    *   The analog transfer function is $H_a(s) = \frac{\Omega_c^2}{s^2 + \sqrt{2}\Omega_c s + \Omega_c^2}$.
    *   $H_a(s) = \frac{1000^2}{s^2 + 1000\sqrt{2}s + 1000^2} = \frac{10^6}{s^2 + 1414s + 10^6}$.
    *   Partial fraction expansion: $H_a(s) = \frac{A_1}{s-p_1} + \frac{A_2}{s-p_2}$.
    *   Poles are $p_{1,2} = -\frac{\Omega_c}{\sqrt{2}} \pm j \Omega_c \sqrt{1 - \frac{1}{2}} = -\frac{\Omega_c}{\sqrt{2}} \pm j \frac{\Omega_c}{\sqrt{2}}$.
    *   $p_{1,2} = -\frac{1000}{\sqrt{2}} \pm j \frac{1000}{\sqrt{2}} \approx -707.1 \pm j 707.1$.
    *   Calculate residues $A_1, A_2$.
    *   $H_a(s) = \frac{A_1}{s - (-707.1 + j707.1)} + \frac{A_2}{s - (-707.1 - j707.1)}$.
    *   Since the denominator is real, the poles are complex conjugates, and the residues will also be complex conjugates. Let $p_1 = -707.1 + j707.1$.
    *   $A_1 = \frac{10^6}{(p_1 - p_2)} = \frac{10^6}{2j707.1} \approx \frac{10^6}{j1414.2} \approx -j707.1$.
    *   $A_2 = A_1^* = j707.1$.

4.  **Transform to Digital Filter using Impulse Invariance:**
    *   $z_1 = e^{p_1 T} = e^{(-707.1 + j707.1) \times 0.1 \times 10^{-3}} = e^{-70.71 + j70.71}$.
    *   $z_2 = e^{p_2 T} = e^{(-707.1 - j707.1) \times 0.1 \times 10^{-3}} = e^{-70.71 - j70.71}$.
    *   Calculate magnitudes: $|z_1| = |z_2| = e^{-70.71} \approx 0.000000003$. This is very close to zero.
    *   Calculate phases: $\angle z_1 = 70.71$ radians, $\angle z_2 = -70.71$ radians.
    *   The digital transfer function is:
        $H(z) = \frac{A_1}{1 - e^{p_1 T} z^{-1}} + \frac{A_2}{1 - e^{p_2 T} z^{-1}}$
        $H(z) = \frac{A_1(1 - e^{p_2 T} z^{-1}) + A_2(1 - e^{p_1 T} z^{-1})}{(1 - e^{p_1 T} z^{-1})(1 - e^{p_2 T} z^{-1})}$
        $H(z) = \frac{(A_1+A_2) - (A_1 e^{p_2 T} + A_2 e^{p_1 T}) z^{-1}}{1 - (e^{p_1 T} + e^{p_2 T}) z^{-1} + e^{(p_1+p_2)T} z^{-2}}$
    *   $p_1 + p_2 = -1414.2$, $p_1 p_2 = \Omega_c^2 = 10^6$.
    *   $e^{p_1 T} + e^{p_2 T} = e^{-70.71}(e^{j70.71} + e^{-j70.71}) = e^{-70.71}(2 \cos(70.71))$. Since $e^{-70.71}$ is extremely small, this term is practically zero.
    *   $e^{(p_1+p_2)T} = e^{-1414.2 \times 0.1 \times 10^{-3}} = e^{-0.14142} \approx 0.868$. This is the product of the digital poles.
    *   The numerator terms involving residues will also be very small due to the small magnitude of $e^{p_k T}$.

    **Note:** The large negative real parts of the analog poles ($-\Omega_c/\sqrt{2}$ for Butterworth) lead to very small magnitudes of the digital poles ($e^{p_k T}$), making the direct implementation of the $H(z)$ derived from impulse invariance difficult in practice due to numerical precision issues.

---

### **3. IIR Filter Design by Bilinear Transformation**

#### **3.1 Concept and Method**

The **Bilinear Transformation** is a mapping from the s-plane (analog domain) to the z-plane (digital domain) that is widely used for converting analog filter designs to digital filters. It offers a more accurate frequency response mapping compared to impulse invariance, particularly for filters with non-minimal phase characteristics.

The transformation is given by:

$s = \frac{2}{T} \frac{1 - z^{-1}}{1 + z^{-1}} = \frac{2(z-1)}{T(z+1)}$

where $T$ is the sampling period.

The inverse transformation is:

$z = e^{sT} = \frac{1 + sT/2}{1 - sT/2}$

**Key Feature:** The bilinear transformation maps the entire j$\omega$ axis of the s-plane to the unit circle of the z-plane *without aliasing*. However, it introduces a non-linear relationship between the analog frequency $\Omega$ and the digital frequency $\omega$, known as **frequency warping**.

**Frequency Warping:**
If we substitute $s = j\Omega$ into the mapping $z = e^{sT}$:

$z = e^{j\Omega T} = \frac{1 + j\Omega T/2}{1 - j\Omega T/2}$

Let $z = e^{j\omega}$. Then:

$e^{j\omega} = \frac{1 + j\Omega T/2}{1 - j\Omega T/2}$

To find the relationship between $\omega$ and $\Omega$, we can express the right-hand side in polar form. The magnitude is $|1 + j\Omega T/2| / |1 - j\Omega T/2| = \sqrt{1 + (\Omega T/2)^2} / \sqrt{1 + (\Omega T/2)^2} = 1$. This confirms that the j$\Omega$ axis maps to the unit circle.

The phase is $\angle e^{j\omega} = \omega$.
The phase of the right-hand side is $\arctan(\frac{\Omega T/2}{1}) - \arctan(\frac{-\Omega T/2}{1}) = \arctan(\frac{\Omega T}{2}) - (-\arctan(\frac{\Omega T}{2})) = 2 \arctan(\frac{\Omega T}{2})$.

Therefore, the frequency warping relationship is:

$\omega = 2 \arctan\left(\frac{\Omega T}{2}\right)$

Or, solving for $\Omega$:

$\Omega = \frac{2}{T} \tan\left(\frac{\omega T}{2}\right)$

This is the same frequency transformation used in step 2 of the design process when converting digital frequency specifications to analog frequencies.

**Proakis & Manolakis:** Section 7.3.2 covers the bilinear transformation in detail.
**Oppenheim & Schafer:** Section 6.3.2 discusses the bilinear transformation and frequency warping.

#### **3.2 Advantages and Disadvantages**

*   **Advantages:**
    *   **No Aliasing:** The entire frequency spectrum of the analog filter is mapped to the digital filter's frequency spectrum without aliasing. The unit circle in the z-plane is a direct representation of the entire real axis in the s-plane.
    *   **Preserves Stability:** If the analog filter is stable (all poles in the left-half of the s-plane), the resulting digital filter will also be stable (all poles inside the unit circle in the z-plane). This is because the bilinear transformation maps the left-half s-plane to the interior of the unit circle in the z-plane.
    *   **Suitable for all filter types:** Can be used to design LPF, HPF, BPF, and BRF from their analog counterparts.

*   **Disadvantages:**
    *   **Frequency Warping:** The non-linear relationship between analog and digital frequencies means that analog cutoff frequencies must be pre-warped to obtain the desired digital cutoff frequencies. This is usually handled by the initial frequency transformation.
    *   **Passband Distortion:** For high sampling rates (large $T$), the warping can significantly distort the frequency response, especially in the passband, if not accounted for.

#### **3.3 Design Example (Butterworth LPF using Bilinear Transformation)**

**Problem:** Design a digital Butterworth low-pass filter with:
*   Sampling frequency $f_s = 10$ kHz ($T = 0.1$ ms).
*   Passband edge $\omega_p = 0.2\pi$ rad/sample.
*   Stopband edge $\omega_s = 0.5\pi$ rad/sample.
*   Passband ripple $A_p = 1$ dB.
*   Stopband attenuation $A_s = 20$ dB.

**Solution Steps (using the same specifications as the impulse invariance example):**

1.  **Convert Digital Specifications to Analog Frequencies (Pre-warping):**
    *   This is done using $\Omega = \frac{2}{T} \tan\left(\frac{\omega T}{2}\right)$.
    *   $\Omega_p = \frac{2}{0.1 \times 10^{-3}} \tan\left(\frac{0.2\pi \times 0.1 \times 10^{-3}}{2}\right) \approx 1570.8$ rad/s. (Note: The earlier example calculation had a typo for $\Omega_p$. Correcting it here: $\Omega_p \approx 20000 \times \tan(0.01\pi) \approx 20000 \times 0.0314 \approx 628.3$ rad/s is correct. My apologies for the confusion in the previous example's calculation.)
    *   Let's re-calculate for clarity:
        *   $\omega_p = 0.2\pi$ rad/sample.
        *   $\Omega_p = \frac{2}{T} \tan\left(\frac{\omega_p T}{2}\right) = \frac{2}{0.1 \times 10^{-3}} \tan\left(\frac{0.2\pi \times 0.1 \times 10^{-3}}{2}\right) = 20000 \tan(0.01\pi) \approx 20000 \times 0.0314159 \approx 628.3$ rad/s.
        *   $\omega_s = 0.5\pi$ rad/sample.
        *   $\Omega_s = \frac{2}{T} \tan\left(\frac{\omega_s T}{2}\right) = \frac{2}{0.1 \times 10^{-3}} \tan\left(\frac{0.5\pi \times 0.1 \times 10^{-3}}{2}\right) = 20000 \tan(0.025\pi) \approx 20000 \times 0.0785398 \approx 1570.8$ rad/s.

2.  **Determine Analog Filter Order (n):**
    *   Using $\Omega_p = 628.3$ rad/s and $\Omega_s = 1570.8$ rad/s, and $A_p = 1$ dB, $A_s = 20$ dB.
    *   $n \geq \frac{\log\left(\frac{10^{0.1A_s} - 1}{10^{0.1A_p} - 1}\right)}{\log\left(\frac{\Omega_s}{\Omega_p}\right)} = \frac{\log\left(\frac{10^{2} - 1}{10^{0.1} - 1}\right)}{\log\left(\frac{1570.8}{628.3}\right)} = \frac{\log\left(\frac{99}{0.2589}\right)}{\log(2.5)} \approx 6.48$.
    *   So, $n=7$. (The order calculation is the same as before because the frequency pre-warping ensures the analog filter meets the translated specifications).

3.  **Design Analog Butterworth Filter:**
    *   We need a 7th-order Butterworth LPF with cutoff frequency $\Omega_c = \Omega_p = 628.3$ rad/s.
    *   The analog transfer function $H_a(s)$ is obtained by considering the poles of a 7th-order Butterworth filter on a circle of radius $\Omega_c$.
    *   For $n=7$, the poles are at $s_k = \Omega_c e^{j \phi_k}$ where $\phi_k = \frac{(2k-1)\pi}{7}$ for $k=1, 2, 3, 4$. Note that the poles are symmetric in the s-plane.
    *   $s_1 = \Omega_c e^{j\pi/7}$, $s_2 = \Omega_c e^{j3\pi/7}$, $s_3 = \Omega_c e^{j5\pi/7}$, $s_4 = \Omega_c e^{j7\pi/7} = -\Omega_c$.
    *   The transfer function is $H_a(s) = \frac{\Omega_c^7}{\prod_{k=1}^{7}(s-s_k)}$. The poles come in conjugate pairs, except for any real poles.
    *   The general form of Butterworth transfer functions can be found in textbooks. For example, a 2nd-order section is $H_{a2}(s) = \frac{\Omega_c^2}{s^2 + \sqrt{2}\Omega_c s + \Omega_c^2}$ and a 1st-order section for odd $n$ is $H_{a1}(s) = \frac{\Omega_c}{s+\Omega_c}$.
    *   The overall $H_a(s)$ is a product of these terms corresponding to the pole locations.
    *   **Proakis & Manolakis:** Appendix A.2 provides normalized Butterworth polynomial coefficients.

4.  **Transform $H_a(s)$ to $H(z)$ using Bilinear Transformation:**
    *   Substitute $s = \frac{2(1-z^{-1})}{T(1+z^{-1})}$ into the analog transfer function $H_a(s)$.
    *   This substitution can be algebraically intensive for higher-order filters.
    *   For each analog pole $p_k$, the corresponding digital pole $z_k$ is found by:
        $z_k = \frac{1 + p_k T/2}{1 - p_k T/2}$.
    *   For each analog zero $z_{a_k}$ (if any), the corresponding digital zero $z_{d_k}$ is found by:
        $z_{d_k} = \frac{1 - z_{a_k} T/2}{1 + z_{a_k} T/2}$.
    *   The gain factor also needs to be adjusted.

    **Example with a 2nd-order section:**
    Let $H_a(s) = \frac{\Omega_c^2}{s^2 + \sqrt{2}\Omega_c s + \Omega_c^2}$.
    Substitute $s = \frac{2}{T} \frac{1-z^{-1}}{1+z^{-1}}$:
    $H(z) = \frac{\Omega_c^2}{\left(\frac{2}{T}\frac{1-z^{-1}}{1+z^{-1}}\right)^2 + \sqrt{2}\Omega_c \left(\frac{2}{T}\frac{1-z^{-1}}{1+z^{-1}}\right) + \Omega_c^2}$
    Multiply numerator and denominator by $T^2(1+z^{-1})^2$:
    $H(z) = \frac{\Omega_c^2 T^2 (1+z^{-1})^2}{4(1-z^{-1})^2 + 2\sqrt{2}\Omega_c T (1-z^{-1})(1+z^{-1}) + \Omega_c^2 T^2 (1+z^{-1})^2}$
    $H(z) = \frac{\Omega_c^2 T^2 (1+2z^{-1}+z^{-2})}{4(1-2z^{-1}+z^{-2}) + 2\sqrt{2}\Omega_c T (1-z^{-2}) + \Omega_c^2 T^2 (1+2z^{-1}+z^{-2})}$
    This expression can be simplified by grouping terms in powers of $z^{-1}$ to get $H(z) = \frac{b_0 + b_1 z^{-1} + b_2 z^{-2}}{a_0 + a_1 z^{-1} + a_2 z^{-2}}$.

    **Crucial Point:** For design purposes, it's more practical to find the poles and zeros of $H_a(s)$ and then transform them individually using $z_k = \frac{1 + p_k T/2}{1 - p_k T/2}$ and $z_{d_k} = \frac{1 - z_{a_k} T/2}{1 + z_{a_k} T/2}$. The gain is then adjusted to meet a specific requirement (e.g., DC gain = 1 for LPF).

---

### **4. IIR Filter Design for LPF, HPF, BPF, BRF**

The general approach of designing an analog prototype and then transforming it using the bilinear transformation can be extended to different types of filters.

#### **4.1 Low-Pass Filter (LPF)**

*   **Analog Prototype:** Butterworth, Chebyshev, or Elliptic LPF with cutoff frequency $\Omega_c$.
*   **Transformation:** Bilinear transformation with $\Omega_c = \frac{2}{T} \tan(\frac{\omega_c T}{2})$.

#### **4.2 High-Pass Filter (HPF)**

*   **Analog Prototype:** Analog HPF with cutoff frequency $\Omega_c$.
*   **Digital Specification:** Digital HPF with cutoff frequency $\omega_c$.
*   **Frequency Transformation:** $\Omega = \frac{2}{T} \cot\left(\frac{\omega T}{2}\right)$.
*   **Analog Design:** Design an analog HPF with cutoff $\Omega_c = \frac{2}{T} \cot\left(\frac{\omega_c T}{2}\right)$. The analog HPF transfer function $H_{a,HPF}(s)$ can be obtained from a standard analog LPF transfer function $H_{a,LPF}(s')$ by the transformation $s' = \frac{\Omega_c}{s}$.
*   **Transformation:** Apply bilinear transformation $s = \frac{2}{T} \frac{1 - z^{-1}}{1 + z^{-1}}$ to $H_{a,HPF}(s)$.

**Example: Designing a Digital HPF from an Analog HPF:**
If $H_{a,LPF}(s') = \frac{1}{s'+1}$, and we want an analog HPF with cutoff $\Omega_c$, we use $s' = \Omega_c/s$.
$H_{a,HPF}(s) = \frac{1}{\Omega_c/s + 1} = \frac{s}{s + \Omega_c}$.
Now, apply the bilinear transformation $s = \frac{2}{T} \frac{1-z^{-1}}{1+z^{-1}}$ to $H_{a,HPF}(s)$:
$H(z) = \frac{\frac{2}{T} \frac{1-z^{-1}}{1+z^{-1}}}{\frac{2}{T} \frac{1-z^{-1}}{1+z^{-1}} + \Omega_c} = \frac{2(1-z^{-1})}{2(1-z^{-1}) + \Omega_c T(1+z^{-1})} = \frac{2 - 2z^{-1}}{(2 + \Omega_c T) + (2 - \Omega_c T)z^{-1}}$.

#### **4.3 Band-Pass Filter (BPF)**

*   **Analog Prototype:** Analog BPF with lower cutoff $\Omega_{p1}$ and upper cutoff $\Omega_{p2}$.
*   **Digital Specification:** Digital BPF with lower cutoff $\omega_{p1}$ and upper cutoff $\omega_{p2}$.
*   **Frequency Transformation:** Low-pass to Band-pass transformation in the analog domain is $s' = \frac{s^2 + \omega_0^2}{Bs}$, where $\omega_0$ is the geometric mean of the passband edges and $B$ is the bandwidth.
*   **Digital to Analog Frequency Mapping:** The digital cutoff frequencies $\omega_{p1}$ and $\omega_{p2}$ are mapped to analog frequencies $\Omega_{p1}$ and $\Omega_{p2}$ using the standard bilinear transformation mapping:
    $\Omega_{p1} = \frac{2}{T} \tan\left(\frac{\omega_{p1} T}{2}\right)$
    $\Omega_{p2} = \frac{2}{T} \tan\left(\frac{\omega_{p2} T}{2}\right)$
*   **Analog BPF Design:** Design an analog LPF prototype $H_{a,LPF}(s')$ with a specific cutoff frequency (e.g., related to the bandwidth). Then, apply the low-pass to band-pass analog transformation $s' = \frac{s^2 + \omega_0^2}{Bs}$ to obtain $H_{a,BPF}(s)$.
    *   Here, $B = \Omega_{p2} - \Omega_{p1}$ and $\omega_0 = \sqrt{\Omega_{p1}\Omega_{p2}}$.
*   **Transformation:** Apply the bilinear transformation $s = \frac{2}{T} \frac{1 - z^{-1}}{1 + z^{-1}}$ to $H_{a,BPF}(s)$.

**Proakis & Manolakis:** Section 7.3.4 describes LP to BP and LP to BRF transformations.
**Oppenheim & Schafer:** Section 6.3.3 covers frequency transformations for BPF and BRF.

#### **4.4 Band-Stop/Band-Reject Filter (BRF)**

*   **Analog Prototype:** Analog BRF with upper cutoff $\Omega_{p1}$ and lower cutoff $\Omega_{p2}$.
*   **Digital Specification:** Digital BRF with upper cutoff $\omega_{p1}$ and lower cutoff $\omega_{p2}$.
*   **Frequency Transformation:** Analog low-pass to band-stop transformation is $s' = \frac{B}{s^2 + \omega_0^2}$.
*   **Digital to Analog Frequency Mapping:** Similar to BPF, map digital cutoff frequencies $\omega_{p1}$ and $\omega_{p2}$ to analog frequencies $\Omega_{p1}$ and $\Omega_{p2}$ using the bilinear transformation mapping.
    $\Omega_{p1} = \frac{2}{T} \tan\left(\frac{\omega_{p1} T}{2}\right)$
    $\Omega_{p2} = \frac{2}{T} \tan\left(\frac{\omega_{p2} T}{2}\right)$
*   **Analog BRF Design:** Design an analog LPF prototype $H_{a,LPF}(s')$. Then, apply the low-pass to band-stop analog transformation $s' = \frac{B}{s^2 + \omega_0^2}$ to obtain $H_{a,BRF}(s)$.
    *   Here, $B = \Omega_{p2} - \Omega_{p1}$ and $\omega_0 = \sqrt{\Omega_{p1}\Omega_{p2}}$.
*   **Transformation:** Apply the bilinear transformation $s = \frac{2}{T} \frac{1 - z^{-1}}{1 + z^{-1}}$ to $H_{a,BRF}(s)$.

---

### **Important Points to Remember:**

*   **Butterworth filters** offer maximally flat passbands and are a common starting point for IIR filter design.
*   **Impulse Invariance** preserves the impulse response samples but suffers from aliasing, making it less suitable for filters with sharp transition bands or non-minimal phase characteristics.
*   **Bilinear Transformation** avoids aliasing and preserves stability but introduces frequency warping, which must be accounted for by pre-warping analog frequencies.
*   The **frequency warping formula** $\Omega = \frac{2}{T} \tan\left(\frac{\omega T}{2}\right)$ is crucial for the bilinear transformation.
*   The design of **HPF, BPF, and BRF** involves additional analog frequency transformations to convert a low-pass prototype into the desired filter type before applying the bilinear transformation.
*   For practical implementation, understanding the **pole-zero mapping** of the bilinear transformation ($z_k = \frac{1 + p_k T/2}{1 - p_k T/2}$) is essential.
*   **Textbooks (Proakis & Manolakis, Oppenheim & Schafer)** provide detailed derivations, formulas, and tables for Butterworth polynomials and transformations.

---

### **Practice Questions:**

**Question 1:**
A desired digital Butterworth LPF has a cutoff frequency $\omega_c = 0.3\pi$ rad/sample and a sampling frequency $f_s = 8$ kHz. Using the bilinear transformation, what is the corresponding analog cutoff frequency $\Omega_c$?

**Answer 1:**
$T = 1/f_s = 1/8000 = 0.125 \times 10^{-3}$ s.
$\omega_c = 0.3\pi$ rad/sample.
$\Omega_c = \frac{2}{T} \tan\left(\frac{\omega_c T}{2}\right) = \frac{2}{0.125 \times 10^{-3}} \tan\left(\frac{0.3\pi \times 0.125 \times 10^{-3}}{2}\right)$
$\Omega_c = 16000 \tan(0.01875\pi) \approx 16000 \times 0.0589 \approx 942.5$ rad/s.

---

**Question 2:**
Explain the primary disadvantage of the impulse invariance method for designing digital filters from analog prototypes.

**Answer 2:**
The primary disadvantage of the impulse invariance method is **aliasing**. When the analog filter's impulse response $h_a(t)$ is sampled, if $h_a(t)$ is not sufficiently bandlimited such that its frequency content above $F_s/2$ is zero, aliasing will occur. This means the frequency response of the resulting digital filter will not accurately replicate the frequency response of the analog filter, especially near the Nyquist frequency.

---

**Question 3:**
A first-order analog low-pass filter has the transfer function $H_a(s) = \frac{1}{s+a}$. Using the bilinear transformation with sampling period $T$, derive the corresponding digital filter transfer function $H(z)$.

**Answer 3:**
Given $H_a(s) = \frac{1}{s+a}$.
The bilinear transformation is $s = \frac{2}{T} \frac{1-z^{-1}}{1+z^{-1}}$.
Substitute $s$ into $H_a(s)$:
$H(z) = \frac{1}{\frac{2}{T} \frac{1-z^{-1}}{1+z^{-1}} + a}$
Multiply numerator and denominator by $T(1+z^{-1})$:
$H(z) = \frac{T}{2(1-z^{-1}) + aT(1+z^{-1})}$
$H(z) = \frac{T}{2 - 2z^{-1} + aT + aTz^{-1}}$
$H(z) = \frac{T}{(2+aT) + (aT-2)z^{-1}}$
$H(z) = \frac{T/(2+aT)}{1 + \frac{aT-2}{2+aT}z^{-1}}$

The digital filter's pole is at $z = -\frac{aT-2}{2+aT}$. The coefficient $a$ of the analog filter is related to its cutoff frequency $\Omega_c$ by $a = \Omega_c$. The coefficient $a$ in the digital filter will be influenced by the pre-warping of the cutoff frequency.

---

**Question 4:**
Consider designing an IIR digital filter from an analog Butterworth filter. For the bilinear transformation, how is the digital cutoff frequency $\omega_c$ related to the analog cutoff frequency $\Omega_c$?

**Answer 4:**
The relationship is given by the frequency warping formula:
$\Omega_c = \frac{2}{T} \tan\left(\frac{\omega_c T}{2}\right)$
where $T$ is the sampling period. This means that to achieve a specific digital cutoff frequency $\omega_c$, the analog filter must be designed with a corresponding analog cutoff frequency $\Omega_c$ that is pre-warped according to this formula.

---

This comprehensive set of notes covers the fundamental concepts of IIR filter design from analog prototypes using Butterworth filters, impulse invariance, and the bilinear transformation, along with the design of various filter types, aligning with the specified learning and course outcomes.