---
title: "Design of IIR Digital Filters from Analog Filters 
(Butterworth)"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 2: Design of FIR Filters "
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe990"
status: "completed"
scrapedAt: "2026-05-23T17:55:31.558Z"
---
# DIGITAL SIGNAL PROCESSING - Module 2: Design of FIR Filters

## Topic: Design of IIR Digital Filters from Analog Filters (Butterworth)

**Introduction:**

This topic delves into a crucial method for designing Infinite Impulse Response (IIR) digital filters: by transforming analog filter designs into their digital counterparts. We will specifically focus on the Butterworth approximation, known for its maximally flat passband response. This approach leverages the well-established theory of analog filter design to create efficient digital filters.

**Learning Outcomes:**

*   Understand the process of transforming analog filter transfer functions to digital filter transfer functions.
*   Analyze the characteristics of Butterworth analog filters and their suitability for digital filter design.
*   Apply the Bilinear Transform method to convert analog filter specifications to digital filter specifications.
*   Design Butterworth IIR digital filters using the Bilinear Transform.
*   Analyze the frequency response of the designed IIR digital filters.
*   Relate the design of IIR digital filters to the concept of analog filter approximations (Butterworth).

**Course Outcome Alignment:**

*   **CO2: Design linear phase FIR filters and IIR filters of different specifications. (Knowledge Level: K3)** - This topic directly addresses the design of IIR filters for specific frequency specifications.
*   **CO3: Realise the various FIR and IIR filter structures for a given system function. (Knowledge Level: K3)** - While not the primary focus of *design*, understanding the system function derived from analog design is a precursor to realizing filter structures.

**Key Concepts and Definitions:**

### 1. Analog vs. Digital Filters: A Fundamental Distinction

*   **Analog Filters:** Operate on continuous-time signals, characterized by transfer functions $H(s)$, where $s = \sigma + j\omega$. Their behavior is described by differential equations.
*   **Digital Filters:** Operate on discrete-time signals, characterized by system functions $H(z)$, where $z = e^{j\Omega}$ (or $z = e^{j\omega T}$, where $T$ is the sampling period). Their behavior is described by difference equations.

### 2. Why Design Digital Filters from Analog Filters?

*   **Leveraging Established Theory:** The field of analog filter design has a rich history with well-understood approximation techniques (Butterworth, Chebyshev, Elliptic) and design methodologies.
*   **Systematic Design Process:** Analog filter design provides a structured approach to meet desired frequency response specifications (e.g., passband ripple, stopband attenuation, cutoff frequencies).
*   **Efficiency:** IIR digital filters can often achieve sharper transitions and better stopband attenuation with fewer coefficients than FIR filters, making them computationally more efficient for certain applications.

### 3. Butterworth Approximation

*   **Characteristics:**
    *   **Maximally Flat Passband:** The Butterworth filter exhibits a monotonic behavior in both the passband and stopband. Its magnitude response in the passband is as flat as possible.
    *   **Roll-off:** The magnitude response of an Nth-order Butterworth filter is given by:
        $|H(j\omega)|^2 = \frac{1}{1 + (\frac{\omega}{\omega_c})^{2N}}$
        where $\omega_c$ is the cutoff frequency (usually defined as the frequency where the magnitude is $-3$ dB or $1/\sqrt{2}$ of the passband gain).
    *   **Order Dependence:** As the order $N$ increases, the transition band becomes narrower, and the stopband attenuation increases.
*   **Trade-offs:** While excellent in the passband, Butterworth filters have a slower roll-off compared to Chebyshev or Elliptic filters for a given order.
*   **Textbook Reference:** Proakis & Ingle (3rd Ed.) Chapter 7.3.1 discusses the Butterworth approximation in detail.

### 4. Pole-Zero Placement of Butterworth Filters

*   **Analog Transfer Function:** The analog transfer function $H(s)$ is derived from the pole locations in the $s$-plane.
*   **Pole Locations:** The poles of an Nth-order Butterworth filter lie on a circle of radius $\omega_c$ in the $s$-plane, equally spaced by an angle of $\pi/N$. They are located in the left half of the $s$-plane for stability.
    *   $s_k = \omega_c \exp\left(j \frac{(2k+1)\pi}{2N} + j \frac{\pi}{2}\right)$ for $k = 0, 1, \dots, N-1$
*   **Textbook Reference:** Oppenheim & Schafer (3rd Ed.) Chapter 4.3.1 on Analog Filter Approximations provides insights into pole placement.

### 5. Mapping Analog to Digital Filters: The Bilinear Transform

The Bilinear Transform is the most common and effective method for transforming an analog filter transfer function $H(s)$ into a digital filter transfer function $H(z)$ while preserving stability and approximating the desired frequency response.

*   **The Transformation:** The Bilinear Transform is defined by the substitution:
    $s = \frac{2}{T} \frac{1 - z^{-1}}{1 + z^{-1}}$
    or equivalently,
    $s = \frac{2}{T} \frac{z-1}{z+1}$
    where $T$ is the sampling period.
*   **Frequency Warping:** A crucial aspect of the Bilinear Transform is that it maps the $j\omega$ axis of the $s$-plane to the unit circle of the $z$-plane. However, this mapping is non-linear, causing "frequency warping."
    *   The analog frequency $\omega$ is related to the digital frequency $\Omega$ by:
        $\omega = \frac{2}{T} \tan\left(\frac{\Omega T}{2}\right)$
*   **Pre-warping:** To compensate for frequency warping and ensure that the digital filter's cutoff frequency matches the desired analog cutoff frequency, we need to pre-warp the analog cutoff frequency. If the desired digital cutoff frequency is $\Omega_c$, the corresponding analog cutoff frequency $\omega_c$ should be:
    $\omega_c = \frac{2}{T} \tan\left(\frac{\Omega_c T}{2}\right)$
*   **Textbook Reference:** Ingle & Proakis (3rd Ed.) Chapter 7.3.3 and Oppenheim & Schafer (3rd Ed.) Chapter 4.3.2 extensively cover the Bilinear Transform. Downey (2nd Ed.) might offer intuitive explanations of the transformation.

### 6. Design Steps for Butterworth IIR Digital Filters using Bilinear Transform

**Scenario:** Design a digital low-pass filter with a passband edge frequency $\Omega_p$, stopband edge frequency $\Omega_s$, passband ripple $\alpha_p$, and stopband attenuation $\alpha_s$.

1.  **Determine the Analog Filter Specifications:**
    *   **Cutoff Frequencies:** Based on the desired digital cutoff frequencies $\Omega_p$ and $\Omega_s$, pre-warp them to obtain the analog cutoff frequencies $\omega_p$ and $\omega_s$:
        $\omega_p = \frac{2}{T} \tan\left(\frac{\Omega_p T}{2}\right)$
        $\omega_s = \frac{2}{T} \tan\left(\frac{\Omega_s T}{2}\right)$
        (If the specifications are given in terms of analog frequencies $\omega_p$ and $\omega_s$, no pre-warping is needed for these specific values.)
    *   **Order (N):** Determine the minimum required order $N$ for a Butterworth filter to satisfy the given specifications. This involves analyzing the magnitude response formula. For a low-pass filter:
        $(\frac{\omega_s}{\omega_c})^{2N} \ge \frac{10^{\alpha_s/10} - 1}{10^{\alpha_p/10} - 1}$
        From this, we can solve for $N$:
        $N \ge \frac{\log\left(\frac{10^{\alpha_s/10} - 1}{10^{\alpha_p/10} - 1}\right)}{2 \log\left(\frac{\omega_s}{\omega_p}\right)}$
        *Important:* $N$ must be an integer, so take the ceiling of the calculated value.
    *   **Cutoff Frequency ($\omega_c$):** Choose the analog cutoff frequency $\omega_c$. A common choice is to set $\omega_c$ such that the passband requirement is met, often using the passband edge frequency $\omega_p$.
        $\omega_c = \omega_p$

2.  **Design the Analog Butterworth Filter:**
    *   **Find the Analog Transfer Function $H(s)$:** For a normalized Butterworth filter of order $N$ with cutoff frequency $\omega_c = 1$ rad/s, the transfer function is:
        $H_n(s) = \frac{1}{\prod_{k=0}^{N-1} (s - s_k)}$
        where $s_k$ are the poles. The actual analog transfer function is obtained by scaling:
        $H(s) = H_n\left(\frac{s}{\omega_c}\right)$
    *   **Pole Calculation:** Calculate the poles $s_k$ using the formula mentioned earlier.
    *   **Factorization:** Group conjugate poles to form quadratic factors representing second-order sections for easier implementation.
    *   **Form $H(s)$:** Express $H(s)$ as a ratio of polynomials in $s$: $H(s) = \frac{B(s)}{A(s)}$.

3.  **Apply the Bilinear Transform:**
    *   **Substitute $s$:** Replace every $s$ in $H(s)$ with $\frac{2}{T} \frac{1 - z^{-1}}{1 + z^{-1}}$.
    *   **Obtain $H(z)$:** Simplify the resulting expression to obtain the digital filter transfer function $H(z)$ as a ratio of polynomials in $z^{-1}$:
        $H(z) = \frac{B(z)}{A(z)}$

4.  **Analyze the Digital Filter:**
    *   **Frequency Response:** Compute the frequency response $H(e^{j\Omega})$ by substituting $z = e^{j\Omega}$ into $H(z)$.
    *   **Magnitude Response:** Calculate $|H(e^{j\Omega})|$.
    *   **Phase Response:** Calculate $\angle H(e^{j\Omega})$.
    *   **Verify Specifications:** Check if the designed digital filter meets the original digital frequency specifications.

**Example:** Design a digital low-pass Butterworth filter with the following specifications:
*   Passband edge frequency: $f_p = 1$ kHz
*   Stopband edge frequency: $f_s = 2$ kHz
*   Sampling frequency: $f_{sampling} = 10$ kHz
*   Maximum passband ripple: $0.5$ dB ($\alpha_p = 0.5$)
*   Minimum stopband attenuation: $40$ dB ($\alpha_s = 40$)

**Solution:**

1.  **Determine Analog Specifications:**
    *   Sampling period: $T = 1/f_{sampling} = 1/10000 = 0.0001$ s
    *   Digital passband edge: $\Omega_p = 2\pi f_p T = 2\pi (1000)(0.0001) = 0.2\pi$ rad/sample
    *   Digital stopband edge: $\Omega_s = 2\pi f_s T = 2\pi (2000)(0.0001) = 0.4\pi$ rad/sample

    *   **Pre-warping:**
        $\omega_p = \frac{2}{T} \tan\left(\frac{\Omega_p T}{2}\right) = \frac{2}{0.0001} \tan\left(\frac{0.2\pi \times 0.0001}{2}\right) = 20000 \tan(0.00001\pi) \approx 628.3$ rad/s
        $\omega_s = \frac{2}{T} \tan\left(\frac{\Omega_s T}{2}\right) = \frac{2}{0.0001} \tan\left(\frac{0.4\pi \times 0.0001}{2}\right) = 20000 \tan(0.00002\pi) \approx 1256.6$ rad/s

    *   **Calculate Order N:**
        $N \ge \frac{\log\left(\frac{10^{40/10} - 1}{10^{0.5/10} - 1}\right)}{2 \log\left(\frac{\omega_s}{\omega_p}\right)} = \frac{\log\left(\frac{10^4 - 1}{10^{0.05} - 1}\right)}{2 \log\left(\frac{1256.6}{628.3}\right)} = \frac{\log\left(\frac{9999}{0.1148}\right)}{2 \log(2)} = \frac{\log(87099)}{2 \times 0.301} \approx \frac{4.94}{0.602} \approx 8.2$
        So, $N = 9$.

    *   **Choose Cutoff Frequency:** Let's set the analog cutoff $\omega_c = \omega_p = 628.3$ rad/s.

2.  **Design Analog Butterworth Filter (Order N=9):**
    *   The general form of a normalized $N$-th order Butterworth polynomial is $D_N(s)$. For $N=9$, the polynomial is:
        $D_9(s) = s^9 + 5.7702s^8 + 20.3435s^7 + 46.1286s^6 + 77.0493s^5 + 100.8590s^4 + 100.8590s^3 + 77.0493s^2 + 46.1286s + 20.3435 + 5.7702 + 1$
        (The exact coefficients can be found in tables or derived from pole locations).
    *   To get $H(s)$, we scale the normalized polynomial by $\omega_c^N$.
        $H(s) = \frac{\omega_c^N}{D_N(s/\omega_c)}$
        $H(s) = \frac{(628.3)^9}{(s/628.3)^9 + 5.7702(s/628.3)^8 + \dots + 1}$
        After simplification, $H(s) = \frac{K}{a_9 s^9 + a_8 s^8 + \dots + a_1 s + a_0}$, where $a_i$ are derived from $D_9$ and $K$ is a scaling constant. For a low-pass filter, the numerator is a constant. The denominator polynomial will have coefficients derived from the Butterworth polynomial evaluated at $s/\omega_c$.
    *   Alternatively, we can find the poles, group them into conjugate pairs, form quadratic factors $(s^2 + b_k s + c_k)$, and multiply them to get the denominator. The numerator is a constant.

3.  **Apply Bilinear Transform:**
    *   Substitute $s = \frac{2}{T} \frac{1 - z^{-1}}{1 + z^{-1}} = \frac{2}{0.0001} \frac{1 - z^{-1}}{1 + z^{-1}} = 20000 \frac{1 - z^{-1}}{1 + z^{-1}}$ into $H(s)$.
    *   This will result in a rational function $H(z)$ with terms in $z^{-1}$.

4.  **Analyze:**
    *   Evaluate $H(e^{j\Omega})$ and check the magnitude response at $\Omega_p = 0.2\pi$ and $\Omega_s = 0.4\pi$. The magnitude at $\Omega_p$ should be close to $-0.5$ dB, and at $\Omega_s$ it should be less than $-40$ dB.

**Important Points to Remember:**

*   **Stability:** The Bilinear Transform maps the stable left-half of the $s$-plane to the interior of the unit circle in the $z$-plane, thus preserving stability.
*   **Frequency Warping:** Always pre-warp the digital cutoff frequencies to their analog equivalents before designing the analog filter to ensure the digital filter meets the specifications accurately.
*   **Order Calculation:** The formula for determining the order $N$ is crucial for meeting the attenuation requirements.
*   **Butterworth Characteristics:** Remember the maximally flat passband and the monotonic response.
*   **Approximation:** The Bilinear Transform provides an approximation of the desired frequency response. The accuracy depends on the sampling rate and the frequencies of interest. Higher sampling rates or lower digital frequencies lead to better approximations.
*   **Textbook Cross-references:**
    *   **Ingle & Proakis:** Chapter 7 is dedicated to IIR filter design, with Section 7.3 specifically on analog-to-digital conversion using transformations.
    *   **Oppenheim & Schafer:** Chapter 4 covers digital filter design, with Sections 4.3 on IIR filter design methods, including transformations.
    *   **Downey:** Think DSP provides a practical, Python-centric approach and might offer more intuitive code examples for implementing these transformations.

**Practice Questions/Exercises:**

1.  **Question:** A digital low-pass filter is required with a cutoff frequency of $f_c = 2$ kHz and a sampling frequency of $f_s = 8$ kHz. Using the Bilinear Transform, what should be the cutoff frequency of the equivalent analog Butterworth filter?
    **Answer:**
    $T = 1/8000$ s
    $\Omega_c = 2\pi f_c T = 2\pi (2000) (1/8000) = \pi/2$ rad/sample
    $\omega_c = \frac{2}{T} \tan\left(\frac{\Omega_c T}{2}\right) = \frac{2}{1/8000} \tan\left(\frac{(\pi/2) (1/8000)}{2}\right)$
    $\omega_c = 16000 \tan(\pi/32000) \approx 16000 \times (\pi/32000) \approx \pi/2$ rad/s.
    (Using a calculator for more precision: $\omega_c \approx 16000 \times \tan(\pi/32000) \approx 16000 \times 0.00009817 \approx 1570.7$ rad/s).

2.  **Question:** Explain why pre-warping is necessary when using the Bilinear Transform to design digital filters from analog specifications.
    **Answer:** Pre-warping is necessary because the Bilinear Transform introduces a non-linear mapping between analog frequencies ($\omega$) and digital frequencies ($\Omega$). This non-linearity, known as frequency warping, distorts the frequency response. By pre-warping the desired digital cutoff frequencies to their analog equivalents, we compensate for this distortion, ensuring that the designed digital filter's cutoff frequency accurately matches the original specification.

3.  **Question:** Consider a second-order analog Butterworth low-pass filter with a cutoff frequency $\omega_c = 1$ rad/s. Its transfer function is $H(s) = \frac{1}{s^2 + \sqrt{2}s + 1}$. If this filter is to be converted to a digital filter using the Bilinear Transform with $T=1$ s, find the transfer function $H(z)$.
    **Answer:**
    Substitute $s = \frac{2(1-z^{-1})}{1+z^{-1}}$ into $H(s)$:
    $H(z) = \frac{1}{\left(\frac{2(1-z^{-1})}{1+z^{-1}}\right)^2 + \sqrt{2}\left(\frac{2(1-z^{-1})}{1+z^{-1}}\right) + 1}$
    $H(z) = \frac{(1+z^{-1})^2}{4(1-z^{-1})^2 + 2\sqrt{2}(1-z^{-1})(1+z^{-1}) + (1+z^{-1})^2}$
    Expand and simplify:
    Numerator: $(1+z^{-1})^2 = 1 + 2z^{-1} + z^{-2}$
    Denominator:
    $4(1 - 2z^{-1} + z^{-2}) + 2\sqrt{2}(1 - z^{-2}) + (1 + 2z^{-1} + z^{-2})$
    $= 4 - 8z^{-1} + 4z^{-2} + 2\sqrt{2} - 2\sqrt{2}z^{-2} + 1 + 2z^{-1} + z^{-2}$
    $= (4 + 2\sqrt{2} + 1) + (-8 + 2)z^{-1} + (4 - 2\sqrt{2} + 1)z^{-2}$
    $= (5 + 2\sqrt{2}) - 6z^{-1} + (5 - 2\sqrt{2})z^{-2}$
    $H(z) = \frac{1 + 2z^{-1} + z^{-2}}{(5 + 2\sqrt{2}) - 6z^{-1} + (5 - 2\sqrt{2})z^{-2}}$
    $\approx \frac{1 + 2z^{-1} + z^{-2}}{7.828 - 6z^{-1} + 2.172z^{-2}}$

This comprehensive set of notes covers the core concepts of designing IIR digital filters from analog Butterworth filters using the Bilinear Transform, aligning with the specified learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
