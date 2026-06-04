---
title: "Digital filters – Fundamentals of Infinite Impulse Response Filters"
subject: "DIGITAL PROTECTION OF POWER SYSTEMS"
module: "Module 4: Signal processing techniques:  Sinusoidal wave based algorithms"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3659c"
status: "completed"
scrapedAt: "2026-05-23T16:26:14.220Z"
---
# Digital Protection of Power Systems - Module 4: Signal Processing Techniques (Sinusoidal Wave Based Algorithms)

## Topic: Digital Filters - Fundamentals of Infinite Impulse Response (IIR) Filters

This module delves into the essential signal processing techniques used in digital power system protection. Specifically, this topic focuses on the fundamental concepts and applications of Infinite Impulse Response (IIR) filters, which are crucial for extracting meaningful information from the sampled power system waveforms.

---

### Learning Outcomes Covered:

*   **Understanding IIR Filter Fundamentals:** This topic directly addresses the core principles of IIR filters.
*   **Signal Processing for Protection:** The understanding of IIR filters contributes to CO4 by explaining signal processing methods for digital protection.
*   **Filter Design and Application:** While not explicitly designing filters, the understanding of their characteristics is foundational for selecting and applying them in relaying, which supports CO1, CO2, and CO3.

---

### 1. Introduction to Digital Filters in Power System Protection

Digital filters are fundamental building blocks in numerical relays. They are used to:

*   **Remove unwanted noise:** Power system signals are often corrupted by noise from various sources (e.g., switching transients, electromagnetic interference).
*   **Extract fundamental frequency components:** Protection algorithms typically operate on the fundamental frequency (50/60 Hz) component of voltage and current.
*   **Isolate specific frequency bands:** For certain protection schemes, filtering out harmonics or other frequency components is necessary.
*   **Improve signal-to-noise ratio (SNR):** By attenuating noise, filters enhance the clarity of the desired signal.

*   **Reference:** *Digital Protection of Power System* by Johns and Salman extensively discusses the role of digital filters in numerical relays. *Power System Protection and Switchgear* by Badri Ram and Viswakarma also provides a good overview of filtering in protective relaying.

---

### 2. What are Digital Filters?

Digital filters are systems that operate on discrete-time signals (sampled sequences of numbers) to modify their frequency content. They can be broadly classified into:

*   **Finite Impulse Response (FIR) Filters:** Their output is a finite sum of past and present input samples. They have linear phase characteristics, which is desirable in some applications, but often require a higher order for sharp frequency cutoffs.
*   **Infinite Impulse Response (IIR) Filters:** Their output depends on past and present input samples *and* past output samples. This feedback mechanism allows them to achieve sharper frequency responses with fewer coefficients (lower order) compared to FIR filters, making them computationally more efficient.

---

### 3. Fundamentals of Infinite Impulse Response (IIR) Filters

IIR filters are characterized by their **recursive** nature. This means that the current output sample is calculated based on a weighted sum of current and past input samples, as well as past output samples.

#### 3.1. The Difference Equation

The most general form of an IIR filter can be represented by a linear constant-coefficient difference equation:

$y[n] = b_0 x[n] + b_1 x[n-1] + \dots + b_M x[n-M] - a_1 y[n-1] - a_2 y[n-2] - \dots - a_N y[n-N]$

Where:
*   $y[n]$: the current output sample at time $n$.
*   $x[n]$: the current input sample at time $n$.
*   $x[n-k]$: past input samples.
*   $y[n-k]$: past output samples.
*   $b_0, b_1, \dots, b_M$: feedforward coefficients (coefficients of input samples).
*   $a_1, a_2, \dots, a_N$: feedback coefficients (coefficients of output samples).
*   $M$: the order of the feedforward part.
*   $N$: the order of the feedback part.
*   The overall order of the filter is typically considered the maximum of $M$ and $N$.

*   **Important Point:** The presence of the $-a_k y[n-k]$ terms (feedback) is what makes the filter "infinite impulse response." If the filter is excited by an impulse (a single non-zero sample followed by zeros), the feedback loop will continue to produce output indefinitely, although it may decay to zero.

#### 3.2. Transfer Function

The difference equation can be transformed into the z-domain using the z-transform. The z-transform of $x[n-k]$ is $z^{-k} X(z)$, and the z-transform of $y[n-k]$ is $z^{-k} Y(z)$.

Taking the z-transform of the difference equation:

$Y(z) = b_0 X(z) + b_1 z^{-1} X(z) + \dots + b_M z^{-M} X(z) - a_1 z^{-1} Y(z) - a_2 z^{-2} Y(z) - \dots - a_N z^{-N} Y(z)$

Rearranging to find the transfer function $H(z) = Y(z) / X(z)$:

$Y(z) (1 + a_1 z^{-1} + a_2 z^{-2} + \dots + a_N z^{-N}) = X(z) (b_0 + b_1 z^{-1} + \dots + b_M z^{-M})$

$H(z) = \frac{Y(z)}{X(z)} = \frac{b_0 + b_1 z^{-1} + \dots + b_M z^{-M}}{1 + a_1 z^{-1} + a_2 z^{-2} + \dots + a_N z^{-N}}$

*   **Important Point:** This rational form (a ratio of two polynomials in $z^{-1}$) is characteristic of IIR filters. The denominator polynomial directly relates to the feedback coefficients and determines the filter's stability and frequency response.

#### 3.3. Structure of IIR Filters

IIR filters are typically implemented using direct-form structures, with **Direct Form I** and **Direct Form II** being the most common.

##### 3.3.1. Direct Form I

Direct Form I separates the numerator and denominator parts into two distinct structures.

*   **Structure:** It consists of a feedforward path (implementing the numerator polynomial) and a feedback path (implementing the denominator polynomial).
*   **Delay Elements:** Requires $M + N$ delay elements.
*   **Computational Efficiency:** Can be less computationally efficient than Direct Form II as it uses more delay elements.

![Direct Form I Structure](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/IIR_Filter_Direct_Form_I.svg/500px-IIR_Filter_Direct_Form_I.svg.png)
*(Conceptual diagram; actual implementation involves delays and multipliers)*

##### 3.3.2. Direct Form II (Canonic Form)

Direct Form II combines the delay elements of the feedforward and feedback paths, requiring fewer delay elements.

*   **Structure:** It first implements the feedback section (all-pole filter) and then the feedforward section (all-zero filter) to the output of the feedback section.
*   **Delay Elements:** Requires $\text{max}(M, N)$ delay elements.
*   **Computational Efficiency:** Generally more efficient than Direct Form I due to fewer delay elements.

![Direct Form II Structure](https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/IIR_Filter_Direct_Form_II.svg/500px-IIR_Filter_Direct_Form_II.svg.png)
*(Conceptual diagram; actual implementation involves delays and multipliers)*

*   **Reference:** *Digital Signal Processing in Power System Protection and Control* by Waldemar Rebizant provides detailed explanations and diagrams of IIR filter structures.

#### 3.4. Poles and Zeros

The behavior of an IIR filter is critically determined by the locations of its **poles** and **zeros** in the z-plane.

*   **Zeros:** The roots of the numerator polynomial. At the frequencies corresponding to the zeros, the filter's gain is zero.
*   **Poles:** The roots of the denominator polynomial. At the frequencies corresponding to the poles, the filter's gain approaches infinity (if the pole is on the unit circle or inside, it affects the frequency response; if outside, it leads to instability).

$H(z) = G \frac{(1 - z_1 z^{-1})(1 - z_2 z^{-1})\dots(1 - z_M z^{-M})}{(1 - p_1 z^{-1})(1 - p_2 z^{-1})\dots(1 - p_N z^{-N})}$

Where:
*   $z_i$ are the zeros.
*   $p_i$ are the poles.
*   $G$ is a gain factor.

*   **Important Point:** For an IIR filter to be **stable**, all its poles must lie strictly inside the unit circle in the z-plane. This means $|p_i| < 1$ for all $i$.

#### 3.5. Frequency Response

The frequency response of an IIR filter is obtained by evaluating its transfer function $H(z)$ on the unit circle, where $z = e^{j\omega T}$ (or $z = e^{j\omega}$ if sampling period $T=1$).

$H(e^{j\omega}) = \frac{\sum_{k=0}^{M} b_k e^{-j\omega k}}{\sum_{k=0}^{N} a_k e^{-j\omega k}}$  (where $a_0=1$)

The magnitude and phase of $H(e^{j\omega})$ describe how the filter affects the amplitude and phase of different frequency components present in the input signal.

*   **Example:** A low-pass IIR filter would have a flat magnitude response for low frequencies and a rapidly decaying magnitude response for frequencies above its cutoff frequency.

#### 3.6. Design of IIR Filters

Designing IIR filters involves choosing the coefficients ($a_k$ and $b_k$) to meet specific frequency response requirements (e.g., passband, stopband, cutoff frequencies, transition band). Common design methods include:

*   **Bilinear Transformation:** A method to transform analog filter designs (like Butterworth, Chebyshev, Elliptic) into digital filter designs. This is a widely used technique as it leverages well-established analog filter design theories.
*   **Impulse Invariance:** Aims to make the impulse response of the digital filter identical to the impulse response of a corresponding analog filter at the sampling instants. This method can suffer from aliasing.

*   **Reference:** *Digital Signal Processing in Power System Protection and Control* by Waldemar Rebizant is an excellent source for detailed IIR filter design methodologies. *Computer Relaying for Power Systems* by Phadke and Thorpe also touches upon filter design considerations in the context of relaying.

#### 3.7. Advantages of IIR Filters

*   **Computational Efficiency:** Achieve sharper frequency responses with significantly fewer coefficients (lower order) compared to FIR filters. This translates to lower computational burden and memory requirements, which are crucial in real-time relaying applications.
*   **Steeper Roll-off:** Can achieve sharper transitions between passbands and stopbands.

#### 3.8. Disadvantages of IIR Filters

*   **Non-linear Phase Response:** Generally exhibit non-linear phase responses, meaning different frequency components are delayed by different amounts. This can be problematic for applications where phase distortion is critical. However, for many protection applications where the fundamental frequency component is of primary interest, this can be managed.
*   **Potential for Instability:** Due to the feedback loop, IIR filters can become unstable if the poles are not properly placed within the unit circle. Careful design is essential.
*   **Sensitivity to Coefficient Quantization:** The performance of IIR filters can be more sensitive to rounding or truncation of coefficients due to finite precision arithmetic.

---

### 4. Applications of IIR Filters in Power System Protection

IIR filters are widely used in numerical relays for various purposes:

*   **Fundamental Frequency Extraction:** Low-pass or band-pass IIR filters are commonly used to isolate the fundamental frequency (50/60 Hz) component of voltage and current signals, removing harmonics and noise. This is essential for calculating RMS values, phasors, and for algorithms like the Fourier transform-based methods.
*   **Harmonic Restraint/Blocking:** Band-stop or notch filters (which can be implemented using IIR techniques) can be used to block or restrain the relay operation based on specific harmonic frequencies (e.g., in differential protection of transformers to prevent maloperation during inrush current).
*   **Noise Reduction:** General filtering to improve the SNR of the measured signals.

*   **Example:** In a distance relay, an IIR low-pass filter might be used to extract the fundamental frequency component of voltage and current to calculate impedance. The sharp cutoff characteristic of an IIR filter can be advantageous here.

*   **Reference:** Johns and Salman's *Digital Protection of Power System* provides numerous examples of how IIR filters are applied in different protection schemes like overcurrent, differential, and distance protection. Phadke and Thorpe's *Computer Relaying for Power Systems* also discusses the filtering requirements for accurate signal processing in relays.

---

### 5. Key Concepts and Definitions

*   **Digital Filter:** A system that processes discrete-time signals to modify their frequency content.
*   **IIR Filter:** A digital filter characterized by its recursive implementation, where the output depends on past inputs and outputs.
*   **Difference Equation:** A mathematical representation of a digital filter relating current output to past inputs and outputs.
*   **Transfer Function:** The z-domain representation of a digital filter, a ratio of polynomials in $z^{-1}$.
*   **Poles:** Roots of the denominator polynomial, critical for filter stability and frequency response.
*   **Zeros:** Roots of the numerator polynomial, where the filter gain is zero.
*   **Unit Circle:** In the z-plane, the locus of points with magnitude 1 ($|z|=1$). Evaluating the transfer function on the unit circle gives the frequency response.
*   **Stability:** An IIR filter is stable if all its poles lie strictly inside the unit circle.
*   **Direct Form I/II:** Common structural implementations of IIR filters.
*   **Bilinear Transformation:** A method for designing digital filters from analog prototypes.

---

### 6. Important Points to Remember

*   **IIR filters are recursive:** This is their defining characteristic and leads to their efficiency but also potential instability and non-linear phase.
*   **Poles determine stability:** Keep poles inside the unit circle!
*   **Fewer coefficients for IIR:** More computationally efficient for achieving sharp frequency responses.
*   **Phase distortion is a trade-off:** Be mindful of non-linear phase response when designing or selecting IIR filters for critical applications.
*   **Foundation for many algorithms:** Understanding IIR filters is crucial for comprehending how numerical relays process signals.

---

### 7. Practice Questions/Exercises

**Question 1:**
What is the primary characteristic that distinguishes an Infinite Impulse Response (IIR) filter from a Finite Impulse Response (FIR) filter?
(a) The number of coefficients used.
(b) The use of feedback in its implementation.
(c) Its ability to have a linear phase response.
(d) Its computational efficiency.

**Question 2:**
Consider an IIR filter described by the difference equation:
$y[n] = 0.5 x[n] + 0.25 x[n-1] - 0.3 y[n-1]$
What are the feedforward and feedback coefficients for this filter?
(a) Feedforward: {$b_0 = 0.5, b_1 = 0.25$}, Feedback: {$a_1 = -0.3$}
(b) Feedforward: {$b_0 = 0.5, b_1 = 0.25$}, Feedback: {$a_1 = 0.3$}
(c) Feedforward: {$b_0 = 0.5$}, Feedback: {$a_1 = 0.25, a_2 = -0.3$}
(d) Feedforward: {$b_0 = 0.5, b_1 = 0.25$}, Feedback: {$a_1 = 0.3, a_2 = 0$}

**Question 3:**
For an IIR filter to be considered stable, where must all of its poles be located in the z-plane?
(a) On the unit circle.
(b) Outside the unit circle.
(c) Strictly inside the unit circle.
(d) On the real axis.

**Question 4:**
Which of the following is a significant advantage of IIR filters over FIR filters, particularly relevant in real-time digital protection systems?
(a) Guaranteed linear phase response.
(b) Lower sensitivity to coefficient quantization.
(c) Higher computational efficiency for achieving sharp frequency cutoffs.
(d) Easier filter design process.

**Question 5:**
Explain why IIR filters are particularly useful for extracting the fundamental frequency component of power system signals.

---

### 8. Answers to Practice Questions

**Answer 1:**
(b) The use of feedback in its implementation. (The recursive nature involving past outputs is the defining characteristic).

**Answer 2:**
(b) Feedforward: {$b_0 = 0.5, b_1 = 0.25$}, Feedback: {$a_1 = 0.3$}.
*(Note: The standard form has a negative sign for feedback terms, so $y[n] = \dots - a_1 y[n-1] \dots$. Thus, if the equation is given as $y[n] = \dots + 0.3 y[n-1] \dots$, then $a_1 = -0.3$. However, the question implies the form $y[n] = b_0 x[n] + b_1 x[n-1] - a_1 y[n-1]$. In our case, $y[n] = 0.5 x[n] + 0.25 x[n-1] - (-0.3) y[n-1]$. Thus $a_1 = 0.3$ when written in the form $y[n] = b_0 x[n] + b_1 x[n-1] - a_1 y[n-1]$. For clarity, let's consider the structure $y[n] = \sum b_i x[n-i] + \sum a_j y[n-j]$. In this form, the coefficients are $b_0=0.5$, $b_1=0.25$ and $a_1 = -0.3$. The option (b) has $a_1 = 0.3$, which means it assumes the equation form $y[n] = b_0 x[n] + b_1 x[n-1] + a_1 y[n-1]$. Let's assume the standard form as given in the section above: $y[n] = b_0 x[n] + b_1 x[n-1] - a_1 y[n-1] - a_2 y[n-2] \dots$. Then the given equation $y[n] = 0.5 x[n] + 0.25 x[n-1] - 0.3 y[n-1]$ implies $b_0 = 0.5$, $b_1 = 0.25$, and $-a_1 = -0.3$, so $a_1 = 0.3$. Therefore, option (b) is correct under this interpretation.)*

**Answer 3:**
(c) Strictly inside the unit circle.

**Answer 4:**
(c) Higher computational efficiency for achieving sharp frequency cutoffs.

**Answer 5:**
IIR filters are useful for extracting the fundamental frequency component because they can achieve sharp frequency selectivity (i.e., very narrow passbands and steep rolloffs) with a low filter order. This means they can effectively isolate the 50/60 Hz signal from other frequencies (like harmonics, noise, or DC offsets) with fewer computations compared to FIR filters, which would require a much higher order to achieve similar selectivity. This efficiency is critical for real-time processing in numerical relays, allowing for quick and accurate measurement of voltage and current phasors.

---

### 9. Alignment with Course Outcomes

*   **CO1 (Identify relay protection schemes):** Understanding filter characteristics is a prerequisite for understanding how protection schemes like distance protection (which rely on filtered signals) work.
*   **CO2 (Develop protection schemes):** Knowing the filtering techniques enables the selection of appropriate filters for specific protection scenarios (e.g., filtering for transformer differential protection to handle inrush).
*   **CO3 (Illustrate numerical relay operation):** Digital filters are core components of signal processing in numerical relays, so understanding IIR filters helps illustrate their internal workings.
*   **CO4 (Explain signal processing methods):** This topic directly addresses signal processing methods by detailing the principles of IIR filtering, a fundamental technique.
*   **CO5 (Infer emerging protection schemes):** While this topic focuses on fundamentals, advanced filtering techniques are continuously developed and applied in emerging protection schemes. A strong grasp of basic IIR filters is the foundation for understanding these advancements.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
