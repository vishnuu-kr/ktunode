---
title: "Introduction to signals and systems:"
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: Introduction to signals and systems:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe510"
status: "completed"
scrapedAt: "2026-05-23T17:52:16.992Z"
---
# Module 1: Introduction to Signals and Systems

## Topic: Introduction to Signals and Systems

This module provides a foundational understanding of signals and systems, essential for analyzing and manipulating various phenomena in engineering and science. We will explore the nature of signals, their classification, and the fundamental properties of systems that process these signals.

---

### Learning Outcomes Covered in this Topic:

*   **Understanding the basic definitions and classifications of signals.** (Supports CO1)
*   **Understanding the basic definitions and classifications of systems.** (Supports CO1)
*   **Recognizing the interplay between signals and systems in real-world applications.**

---

### 1. What are Signals?

A signal is a function that conveys information about the behavior or attributes of some phenomenon. In essence, it's a representation of data that can vary over time, space, or some other independent variable.

**Key Concepts & Definitions:**

*   **Independent Variable:** The variable with respect to which the signal is defined. Common independent variables include time ($t$), spatial coordinates ($x, y, z$), or other physical quantities.
*   **Dependent Variable (Amplitude):** The value of the signal at a particular point in the independent variable. This can represent physical quantities like voltage, current, temperature, pressure, light intensity, etc.

**Textbook References:**

*   **Oppenheim & Willsky (2/e):** Introduces signals as functions representing physical quantities.
*   **Haykin (2/e):** Defines signals as carriers of information, often as functions of time or space.

**Examples of Signals:**

*   **Audio Signal:** A signal representing sound waves, typically a function of time. The dependent variable is the air pressure variation.
*   **Image Signal:** A signal representing visual information, typically a function of spatial coordinates (x, y). The dependent variable is the light intensity.
*   **ECG Signal:** Electrocardiogram signal, a function of time, representing the electrical activity of the heart.
*   **Temperature Signal:** A signal representing temperature variation over time or space.

---

### 2. Classification of Signals

Signals can be classified based on various characteristics, which helps in choosing appropriate methods for their analysis and processing.

**Key Concepts & Definitions:**

*   **Continuous-Time (CT) vs. Discrete-Time (DT) Signals:**
    *   **Continuous-Time Signal:** Defined for all values of the independent variable (usually time). Represented as $x(t)$.
        *   **Example:** The voltage from a microphone, which varies continuously with time.
    *   **Discrete-Time Signal:** Defined only at discrete instants of the independent variable. Represented as $x[n]$, where $n$ is an integer representing the sample number.
        *   **Example:** The digital audio signal stored on a CD, which is a sequence of sampled amplitude values.
        *   **Relation:** A CT signal $x(t)$ can be converted to a DT signal $x[n]$ by sampling at regular intervals, $x[n] = x(nT_s)$, where $T_s$ is the sampling period.

*   **Analog vs. Digital Signals:**
    *   **Analog Signal:** The amplitude is a continuous-valued function of time.
        *   **Example:** The output of a thermostat that continuously measures temperature.
    *   **Digital Signal:** The amplitude is a discrete-valued function of time. This is a result of quantization after sampling.
        *   **Example:** The numerical representation of a digitized audio sample.

*   **Periodic vs. Aperiodic Signals:**
    *   **Periodic Signal:** A signal $x(t)$ (or $x[n]$) is periodic if there exists a positive number $T$ (or $N$) such that $x(t) = x(t+T)$ (or $x[n] = x[n+N]$) for all $t$ (or $n$).
        *   **Fundamental Period:** The smallest positive value of $T$ (or $N$) for which the periodicity holds.
        *   **Example (CT Periodic):** $x(t) = \sin(2\pi t)$ has a fundamental period $T=1$.
        *   **Example (DT Periodic):** $x[n] = \cos(\frac{\pi}{2} n)$ has a fundamental period $N=4$.
    *   **Aperiodic Signal:** A signal that is not periodic.
        *   **Example:** $x(t) = e^{-t}u(t)$, where $u(t)$ is the unit step function.

*   **Even vs. Odd Signals:**
    *   **Even Signal:** $x(t) = x(-t)$ (or $x[n] = x[-n]$). Symmetric about the vertical axis.
        *   **Example (CT Even):** $x(t) = \cos(t)$.
        *   **Example (DT Even):** $x[n] = n^2$.
    *   **Odd Signal:** $x(t) = -x(-t)$ (or $x[n] = -x[-n]$). Symmetric about the origin.
        *   **Example (CT Odd):** $x(t) = \sin(t)$.
        *   **Example (DT Odd):** $x[n] = n^3$.
    *   **Decomposition:** Any signal can be represented as the sum of an even and an odd component:
        $x(t) = x_e(t) + x_o(t)$, where $x_e(t) = \frac{x(t) + x(-t)}{2}$ and $x_o(t) = \frac{x(t) - x(-t)}{2}$.

*   **Energy vs. Power Signals:**
    *   **Energy Signal:** A signal with finite energy. The energy $E$ is defined as:
        *   **CT:** $E = \int_{-\infty}^{\infty} |x(t)|^2 dt$
        *   **DT:** $E = \sum_{n=-\infty}^{\infty} |x[n]|^2$
        *   **Example:** Decaying exponential signals like $x(t) = e^{-at}u(t)$ for $a>0$.
    *   **Power Signal:** A signal with finite average power. The average power $P$ is defined as:
        *   **CT:** $P = \lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} |x(t)|^2 dt$
        *   **DT:** $P = \lim_{N \to \infty} \frac{1}{2N+1} \sum_{n=-N}^{N} |x[n]|^2$
        *   **Example:** Periodic signals and DC signals have finite average power.
    *   **Note:** A signal can be an energy signal or a power signal, but not both (unless it is the zero signal).

*   **Other Classifications:**
    *   **Deterministic vs. Random Signals:** Deterministic signals can be predicted precisely, while random signals cannot. (Haykin emphasizes this distinction).
    *   **Causal vs. Non-Causal Signals:**
        *   **Causal Signal:** $x(t) = 0$ for $t < 0$ (or $x[n] = 0$ for $n < 0$). The signal exists only for non-negative time.
        *   **Non-Causal Signal:** The signal exists for negative time.
    *   **Re\(al vs. Complex Signals:** Signals whose amplitudes are real or complex numbers.

**Textbook References:**

*   **Oppenheim & Willsky (2/e):** Detailed coverage of CT vs. DT, periodic/aperiodic, even/odd, and energy/power signals.
*   **Haykin (2/e):** Introduces classification including deterministic vs. random signals and their statistical properties.
*   **Lathi (2/e):** Discusses signal classifications with numerous examples.
*   **Kumar (3/e):** Provides a structured approach to signal classification.
*   **Ziemer (4/e):** Covers both continuous and discrete signal classifications thoroughly.
*   **Ambardar (2/e):** Explains the different signal types with practical implications.
*   **Apte (1/e):** Presents signal classifications with clear definitions and examples.

**Practice Questions (Classification):**

1.  Determine if the following signals are continuous-time or discrete-time:
    a) The voltage output of a thermometer measuring room temperature every minute.
    b) The sound wave produced by a singer.
    c) A sequence of stock prices recorded daily.
    d) The image captured by a digital camera.
2.  Which of the following signals are periodic? If periodic, find the fundamental period:
    a) $x(t) = 5\cos(3t + \pi/4)$
    b) $x[n] = \sin(\frac{\pi}{3} n)$
    c) $x(t) = \cos(t) + \sin(\sqrt{2} t)$
3.  Express the signal $x(t) = e^{-2t}u(t)$ as a sum of its even and odd components.
4.  Determine if the signal $x(t) = 3$ (a constant DC signal) is an energy signal or a power signal. Justify your answer.

**Answers:**

1.  a) Discrete-time, b) Continuous-time, c) Discrete-time, d) Discrete-time (spatial).
2.  a) Periodic, $T = 2\pi/3$. b) Periodic, $N = 6$. c) Aperiodic.
3.  $x_e(t) = \frac{1}{2}e^{-2t}u(t) + \frac{1}{2}e^{2t}u(-t)$. $x_o(t) = \frac{1}{2}e^{-2t}u(t) - \frac{1}{2}e^{2t}u(-t)$.
4.  $x(t) = 3$ is a power signal. The energy $E = \int_{-\infty}^{\infty} |3|^2 dt = \infty$. The average power $P = \lim_{T \to \infty} \frac{1}{2T} \int_{-T}^{T} |3|^2 dt = \lim_{T \to \infty} \frac{1}{2T} (9 \times 2T) = 9$. Since the average power is finite and non-zero, it's a power signal.

---

### 3. What are Systems?

A system can be viewed as any process or device that takes one or more input signals and produces one or more output signals. Systems transform or manipulate input signals to generate desired output signals.

**Key Concepts & Definitions:**

*   **Input Signal(s):** The signal(s) fed into the system.
*   **Output Signal(s):** The signal(s) produced by the system.
*   **System Transformation:** The operation or set of operations performed by the system on the input signal(s) to produce the output signal(s). This can be represented by an operator $\mathcal{T}\{\cdot\}$ such that $y(t) = \mathcal{T}\{x(t)\}$ or $y[n] = \mathcal{T}\{x[n]\}$.

**Textbook References:**

*   **Oppenheim & Willsky (2/e):** Defines systems as entities that process signals.
*   **Haykin (2/e):** Describes systems as mechanisms that modify signals to extract information.

**Examples of Systems:**

*   **Audio Amplifier:** Takes a small audio signal as input and produces a larger, amplified audio signal as output.
*   **Image Filter:** Takes an image signal as input and produces a processed image (e.g., blurred, sharpened) as output.
*   **Communication Channel:** Transmits a signal from one point to another, potentially modifying it (e.g., adding noise).
*   **Control System:** Uses sensor readings (signals) to adjust actuators (systems) to achieve a desired outcome.

---

### 4. Classification of Systems

Similar to signals, systems can be classified based on their properties. These properties are crucial for understanding system behavior and for choosing appropriate design and analysis techniques.

**Key Concepts & Definitions:**

*   **Linear vs. Non-linear Systems:**
    *   **Linear System:** A system that satisfies the principle of superposition:
        1.  **Additivity:** $\mathcal{T}\{x_1(t) + x_2(t)\} = \mathcal{T}\{x_1(t)\} + \mathcal{T}\{x_2(t)\}$ (or $y_1(t) + y_2(t)$)
        2.  **Homogeneity (Scaling):** $\mathcal{T}\{ax(t)\} = a\mathcal{T}\{x(t)\}$ (or $ay(t)$), where $a$ is a scalar.
        *   **Combined Property:** $\mathcal{T}\{ax_1(t) + bx_2(t)\} = a\mathcal{T}\{x_1(t)\} + b\mathcal{T}\{x_2(t)\}$
        *   **Example (Linear):** A system described by $y(t) = 2x(t) + 5$. (Note: This appears non-linear due to the '+5' term if we only check for homogeneity. However, if $x(t)=0$, $y(t)=5 \ne 0$, so it's not homogeneous in the strict sense unless we consider the zero-input response. For strict linearity, zero input must produce zero output. A system like $y(t) = 2x(t)$ is strictly linear). A system described by $y(t) = \int_{-\infty}^{t} x(\tau) d\tau$ is linear.
        *   **Example (Non-linear):** A system described by $y(t) = x^2(t)$ or $y(t) = |x(t)|$.

*   **Time-Invariant vs. Time-Variant (or Time-Shifting) Systems:**
    *   **Time-Invariant System:** If the input signal is delayed by $t_0$ (or $n_0$), the output signal is also delayed by the same amount.
        *   $\mathcal{T}\{x(t-t_0)\} = y(t-t_0)$ (or $\mathcal{T}\{x[n-n_0]\} = y[n-n_0]$)
        *   **Example (Time-Invariant):** $y(t) = 2x(t)$ or $y[n] = x[n-3]$.
        *   **Example (Time-Variant):** $y(t) = tx(t)$ or $y[n] = n x[n]$. (If $x(t)$ is shifted to $x(t-t_0)$, the output becomes $t x(t-t_0)$, which is not equal to $y(t-t_0) = (t-t_0)x(t-t_0)$).

*   **Causal vs. Non-Causal Systems:**
    *   **Causal System:** The output of the system at any time depends only on present and past values of the input. It does not depend on future values of the input.
        *   **Condition:** For CT, $y(t)$ depends only on $x(\tau)$ for $\tau \le t$. For DT, $y[n]$ depends only on $x[k]$ for $k \le n$.
        *   **Example (Causal):** $y(t) = x(t) + x(t-1)$ or $y[n] = x[n] + x[n-1]$.
        *   **Example (Non-Causal):** $y(t) = x(t+1)$ (output depends on future input). A system that uses future samples is non-causal.

*   **Stable vs. Unstable Systems:**
    *   **Bounded-Input, Bounded-Output (BIBO) Stability:** A system is BIBO stable if every bounded input produces a bounded output.
        *   **Condition:** If $|x(t)| \le M_x$ for all $t$ (or $|x[n]| \le M_x$ for all $n$), then $|y(t)| \le M_y$ for all $t$ (or $|y[n]| \le M_y$ for all $n$).
        *   **Example (Stable):** $y(t) = e^{-t}x(t)$.
        *   **Example (Unstable):** $y(t) = e^{t}x(t)$ (for $t>0$) or $y[n] = 2^n x[n]$.

*   **Memoryless vs. Systems with Memory:**
    *   **Memoryless System:** The output at any time depends only on the input at the *same* time.
        *   **Condition:** $y(t) = f(x(t))$ or $y[n] = f(x[n])$.
        *   **Example:** $y(t) = x^2(t)$, $y[n] = 3x[n] + 1$.
    *   **System with Memory:** The output depends on past or future values of the input.
        *   **Example:** $y(t) = \int_{-\infty}^{t} x(\tau) d\tau$ (depends on past inputs).

*   **Invertible vs. Non-invertible Systems:**
    *   **Invertible System:** A system is invertible if its input can be uniquely recovered from its output. This requires that distinct inputs produce distinct outputs. An inverse system exists.
        *   **Example (Invertible):** $y(t) = 2x(t)$ is invertible, with $x(t) = y(t)/2$.
        *   **Example (Non-invertible):** $y(t) = x^2(t)$ is not invertible, as $x(t)$ and $-x(t)$ produce the same output.

*   **Linear Time-Invariant (LTI) Systems:**
    *   Systems that are both linear and time-invariant. These are particularly important and widely studied due to their predictable behavior and ease of analysis using tools like convolution and transforms.
    *   **Importance:** Many real-world systems can be approximated as LTI systems, making them fundamental to signal processing.

**Textbook References:**

*   **Oppenheim & Willsky (2/e):** Focuses heavily on LTI systems, detailing linearity, time-invariance, causality, and stability.
*   **Haykin (2/e):** Explains system properties with emphasis on their impact on signal transmission and information extraction.
*   **Lathi (2/e):** Comprehensive coverage of system properties with many illustrative examples for both CT and DT systems.
*   **Kumar (3/e):** Provides a clear framework for classifying systems.
*   **Ziemer (4/e):** Covers all system classifications with a dual focus on continuous and discrete domains.
*   **Ambardar (2/e):** Links system properties to practical applications in signal processing.
*   **Apte (1/e):** Offers a structured approach to understanding system properties.

**Practice Questions (System Classification):**

1.  Determine if the following systems are linear or non-linear:
    a) $y(t) = x(t-2)$
    b) $y(t) = x^2(t) + x(t)$
    c) $y[n] = 3x[n] + 5$
    d) $y[n] = \sum_{k=-\infty}^{n} x[k]$
2.  Determine if the following systems are time-invariant or time-variant:
    a) $y(t) = x(t) \cos(t)$
    b) $y[n] = x[n] - x[n-1]$
    c) $y(t) = x(2t)$
3.  Determine if the following systems are causal or non-causal:
    a) $y(t) = x(t) + \frac{1}{x(t-1)}$
    b) $y[n] = x[n+2]$
    c) $y(t) = \int_{0}^{t} x(\tau) d\tau$
4.  Which of the following systems are BIBO stable?
    a) $y(t) = \sin(t) x(t)$
    b) $y[n] = 2 x[n+1]$
    c) $y(t) = x(t) + x(t-1) + x(t-2)$

**Answers:**

1.  a) Linear, b) Non-linear, c) Non-linear (due to '+5'), d) Linear.
2.  a) Time-variant, b) Time-invariant, c) Time-variant.
3.  a) Causal, b) Non-causal, c) Causal.
4.  a) Stable (output magnitude is at most $|x(t)|$), b) Unstable (if $x[n]$ is a non-zero constant, $y[n]$ grows unboundedly), c) Stable.

---

### 5. Interplay between Signals and Systems

Signals and systems are intrinsically linked. Signals are the information carriers, and systems are the tools used to process, analyze, and modify these signals. The goal of signal processing is to extract meaningful information from signals, often by passing them through appropriate systems.

**Key Concepts & Applications:**

*   **Signal Filtering:** Systems are designed to remove unwanted components (noise) from signals or to emphasize specific frequency ranges. Examples include low-pass filters, high-pass filters, band-pass filters.
*   **Signal Analysis:** Systems like Fourier Transforms (discussed in later modules) are used to analyze the frequency content of signals.
*   **Signal Synthesis:** Systems can generate signals with specific characteristics.
*   **Communication Systems:** Signals are transmitted through channels (systems) that can distort or degrade them. Equalization systems are used to counteract these effects.
*   **Control Systems:** Sensors measure system outputs (signals), and controllers (systems) adjust inputs to maintain desired performance.

**Important Point to Remember:** The classification of both signals and systems allows for a systematic approach to understanding their behavior and interaction. For instance, understanding if a signal is periodic or not helps in choosing appropriate analysis techniques, while understanding if a system is LTI or not dictates the mathematical tools available for its analysis.

---

### Summary of Module 1 - Key Takeaways:

*   **Signals:** Functions conveying information, varying with an independent variable (time, space, etc.).
*   **Signal Classifications:** Continuous-time/Discrete-time, Analog/Digital, Periodic/Aperiodic, Even/Odd, Energy/Power, Causal/Non-causal, Deterministic/Random.
*   **Systems:** Processes that transform input signals into output signals.
*   **System Classifications:** Linear/Non-linear, Time-Invariant/Time-Variant, Causal/Non-causal, Stable/Unstable, Memoryless/With Memory, Invertible/Non-invertible.
*   **LTI Systems:** A crucial class of systems that are both linear and time-invariant, enabling powerful analysis techniques.
*   **Interplay:** Signals are the data, and systems are the tools that manipulate this data to achieve specific goals.

---

### Practice Questions (Mixed):

1.  Consider a system described by $y(t) = \frac{d}{dt}x(t)$. Is this system linear? Is it time-invariant? Is it causal?
2.  Let $x[n]$ be a discrete-time signal. Is the system $y[n] = nx[n]$ linear? Is it time-invariant? Is it causal?
3.  If $x(t)$ is an energy signal, is the system $y(t) = x(t) - x(t-1)$ necessarily an energy signal? Explain.
4.  Consider the signal $x(t) = e^{-|t|}$. Is it an energy or power signal? Is it even or odd?

**Answers:**

1.  Linear: Yes. $\mathcal{T}\{ax_1(t) + bx_2(t)\} = \frac{d}{dt}(ax_1(t) + bx_2(t)) = a\frac{d}{dt}x_1(t) + b\frac{d}{dt}x_2(t) = ay_1(t) + by_2(t)$. Time-invariant: Yes. $\mathcal{T}\{x(t-t_0)\} = \frac{d}{dt}x(t-t_0) = y(t-t_0)$. Causal: Yes, the derivative at time $t$ only depends on the value of $x(t)$.
2.  Linear: Yes. $y[n] = nx[n]$. $\mathcal{T}\{ax_1[n] + bx_2[n]\} = n(ax_1[n] + bx_2[n]) = a(nx_1[n]) + b(nx_2[n]) = ay_1[n] + by_2[n]$. Time-invariant: No. $\mathcal{T}\{x[n-n_0]\} = n x[n-n_0]$. $y[n-n_0] = (n-n_0)x[n-n_0]$. These are not equal. Causal: Yes, $y[n]$ depends only on $x[n]$.
3.  No, not necessarily. If $x(t)$ is an energy signal, it decays to zero as $|t| \to \infty$. The system $y(t) = x(t) - x(t-1)$ introduces a difference. If $x(t)$ is a rapidly decaying signal, its difference might not decay fast enough to guarantee finite energy for $y(t)$. For example, if $x(t) = a^t u(t)$ with $0 < a < 1$, it's an energy signal. $y[n] = a^n u[n] - a^{n-1} u[n-1]$. The energy of $y[n]$ would be $\sum |a^n - a^{n-1}|^2$, which is finite for $0 < a < 1$. However, for signals that decay very slowly but still have finite energy, the difference operation could potentially lead to infinite energy. (More rigorous proof would involve specific conditions on the decay rate of $x(t)$).
4.  Energy signal: Yes. $E = \int_{-\infty}^{\infty} |e^{-|t|}|^2 dt = \int_{-\infty}^{\infty} e^{-2|t|} dt = 2 \int_{0}^{\infty} e^{-2t} dt = 2 [-\frac{1}{2}e^{-2t}]_{0}^{\infty} = 2(0 - (-\frac{1}{2})) = 1$. Finite energy. Even: Yes. $x(-t) = e^{-|-t|} = e^{-|t|} = x(t)$.

---

This concludes Module 1: Introduction to Signals and Systems. The concepts learned here are fundamental for understanding subsequent topics in Signals and Systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
