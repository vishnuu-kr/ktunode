---
title: "Inverse Transform."
subject: "SIGNALS AND SYSTEMS"
module: "Module 2: Frequency domain representation of continuous time signals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe51d"
status: "completed"
scrapedAt: "2026-05-23T17:52:25.605Z"
---
# Signals and Systems: Module 2 - Frequency Domain Representation of Continuous-Time Signals

## Topic: Inverse Transform

### 1. Introduction to the Inverse Transform

The inverse transform is the process of converting a representation of a signal in one domain back to its original domain (usually the time domain). In the context of Module 2, which focuses on the frequency domain representation of continuous-time signals, we are primarily concerned with the **Inverse Fourier Transform**. This allows us to recover the time-domain signal from its frequency-domain representation.

### 2. Learning Outcome Coverage

This topic directly addresses the ability to **analyze signals in the frequency domain using various transforms and examine their properties** (CO3) and to **interpret the use of various transforms to analyze continuous and discrete time LTI systems** (CO4). While CO1 and CO2 are foundational, the inverse transform is a crucial tool for understanding the relationship between time and frequency domain representations, which aids in system analysis.

### 3. Key Concepts and Definitions

#### 3.1. Fourier Transform (FT) - A Quick Recap

Before diving into the inverse transform, let's briefly recall the forward Fourier Transform for a continuous-time signal $x(t)$:

$$X(\omega) = \mathcal{F}\{x(t)\} = \int_{-\infty}^{\infty} x(t) e^{-j\omega t} dt$$

This transform decomposes a signal $x(t)$ into its constituent sinusoidal frequencies, yielding its frequency spectrum $X(\omega)$.

#### 3.2. Inverse Fourier Transform (IFT)

The Inverse Fourier Transform reconstructs the time-domain signal $x(t)$ from its frequency-domain representation $X(\omega)$. The formula for the IFT is:

$$x(t) = \mathcal{F}^{-1}\{X(\omega)\} = \frac{1}{2\pi} \int_{-\infty}^{\infty} X(\omega) e^{j\omega t} d\omega$$

**Key Idea:** The IFT integrates the scaled and phase-shifted complex exponentials (which represent frequencies) over all frequencies. The scaling factor $\frac{1}{2\pi}$ is a convention that ensures consistency between the forward and inverse transforms.

#### 3.3. The "Frequency Domain"

The frequency domain represents a signal as a sum or integral of sinusoidal components of different frequencies. The Fourier Transform allows us to move from the time domain (signal's amplitude as a function of time) to the frequency domain (signal's amplitude and phase as a function of frequency). The inverse transform does the reverse.

### 4. Examples and Applications

#### 4.1. Example 1: Rectangular Pulse

Let's consider a rectangular pulse in the time domain:

$$x(t) = \begin{cases} 1, & -\frac{T}{2} \le t \le \frac{T}{2} \\ 0, & \text{otherwise} \end{cases}$$

Its Fourier Transform is known to be:

$$X(\omega) = T \frac{\sin(\frac{\omega T}{2})}{\frac{\omega T}{2}} = T \text{sinc}(\frac{\omega T}{2})$$

Now, let's apply the Inverse Fourier Transform to verify that we get the original rectangular pulse:

$$x(t) = \mathcal{F}^{-1}\left\{T \frac{\sin(\frac{\omega T}{2})}{\frac{\omega T}{2}}\right\} = \frac{1}{2\pi} \int_{-\infty}^{\infty} T \frac{\sin(\frac{\omega T}{2})}{\frac{\omega T}{2}} e^{j\omega t} d\omega$$

This integral is a standard result and indeed evaluates to the original rectangular pulse.

**Reference:** This example is a classic illustration found in most Signals and Systems textbooks, including **Oppenheim and Willsky (Chapter 7)** and **Haykin (Chapter 4)**.

#### 4.2. Example 2: A Single Sinusoidal Tone

Consider a signal $x(t) = A \cos(\omega_0 t)$.
Using Euler's formula, $x(t) = A \frac{e^{j\omega_0 t} + e^{-j\omega_0 t}}{2}$.
The Fourier Transform is:
$X(\omega) = \frac{A}{2} [2\pi \delta(\omega - \omega_0) + 2\pi \delta(\omega + \omega_0)] = A\pi [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)]$

Now, let's use the IFT:
$x(t) = \mathcal{F}^{-1}\left\{A\pi [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)]\right\}$
$x(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} A\pi [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)] e^{j\omega t} d\omega$

Using the property of the Dirac delta function $\int_{-\infty}^{\infty} f(\omega) \delta(\omega - \omega_0) d\omega = f(\omega_0)$:
$x(t) = \frac{A\pi}{2\pi} \left[ \int_{-\infty}^{\infty} \delta(\omega - \omega_0) e^{j\omega t} d\omega + \int_{-\infty}^{\infty} \delta(\omega + \omega_0) e^{j\omega t} d\omega \right]$
$x(t) = \frac{A}{2} [e^{j\omega_0 t} + e^{-j\omega_0 t}]$
$x(t) = A \cos(\omega_0 t)$

This demonstrates how the IFT reconstructs a pure sinusoidal signal from its frequency-domain representation, which consists of impulses at $\omega_0$ and $-\omega_0$.

#### 4.3. System Analysis via Inverse Transform

In the frequency domain, the output of an LTI system $y(t)$ is related to the input $x(t)$ by:

$$Y(\omega) = X(\omega)H(\omega)$$

where $H(\omega)$ is the frequency response of the system. To find the time-domain output $y(t)$, we use the Inverse Fourier Transform:

$$y(t) = \mathcal{F}^{-1}\{Y(\omega)\} = \mathcal{F}^{-1}\{X(\omega)H(\omega)\}$$

This highlights the importance of the IFT in system analysis. We can analyze the system's behavior in the frequency domain (by examining $H(\omega)$) and then use the IFT to determine the corresponding time-domain output.

**Reference:** This is a core concept in LTI system analysis, discussed in detail in **Oppenheim and Willsky (Chapter 6)** and **Haykin (Chapter 5)**.

### 5. Properties of the Inverse Fourier Transform

The properties of the IFT are dual to the properties of the FT. If:

$$x(t) \xrightarrow{\mathcal{F}} X(\omega)$$

Then:

*   **Linearity:** $ax_1(t) + bx_2(t) \xrightarrow{\mathcal{F}} aX_1(\omega) + bX_2(\omega)$
    *   This means the inverse transform of a linear combination of frequency-domain signals is the same linear combination of the corresponding time-domain signals.

*   **Time Shifting:** $x(t-t_0) \xrightarrow{\mathcal{F}} X(\omega)e^{-j\omega t_0}$
    *   **Dual Property for IFT:** If $X(\omega)e^{-j\omega t_0} \xrightarrow{\mathcal{F}^{-1}} y(t)$, then $X(\omega) \xrightarrow{\mathcal{F}^{-1}} y(t+t_0)$. This means if you shift the phase of the frequency-domain signal, you are effectively time-shifting the reconstructed time-domain signal.

*   **Frequency Shifting:** $x(t)e^{j\omega_0 t} \xrightarrow{\mathcal{F}} X(\omega - \omega_0)$
    *   **Dual Property for IFT:** If $X(\omega - \omega_0) \xrightarrow{\mathcal{F}^{-1}} y(t)$, then $X(\omega) \xrightarrow{\mathcal{F}^{-1}} y(t)e^{-j\omega_0 t}$. This means multiplying the time-domain signal by a complex exponential is equivalent to shifting its spectrum in the frequency domain.

*   **Time Reversal:** $x(-t) \xrightarrow{\mathcal{F}} X(-\omega)$
    *   **Dual Property for IFT:** If $X(-\omega) \xrightarrow{\mathcal{F}^{-1}} y(t)$, then $X(\omega) \xrightarrow{\mathcal{F}^{-1}} y(-t)$.

*   **Frequency Reversal (and Conjugation):** $x^*(t) \xrightarrow{\mathcal{F}} X^*(-\omega)$
    *   **Dual Property for IFT:** If $X^*(-\omega) \xrightarrow{\mathcal{F}^{-1}} y(t)$, then $X^*(\omega) \xrightarrow{\mathcal{F}^{-1}} y^*(-t)$.

*   **Integration:** $\int_{-\infty}^{t} x(\tau) d\tau \xrightarrow{\mathcal{F}} \pi X(0)\delta(\omega) + \frac{1}{j\omega} X(\omega)$
    *   **Dual Property for IFT:** If $\pi Y(0)\delta(\omega) + \frac{1}{j\omega} Y(\omega) \xrightarrow{\mathcal{F}^{-1}} y(t)$, then $Y(\omega) \xrightarrow{\mathcal{F}^{-1}} \int_{-\infty}^{t} y(\tau) d\tau$. This property is useful for converting integral relationships in the time domain to algebraic relationships in the frequency domain, and vice-versa.

*   **Convolution in Time Domain:** $x_1(t) * x_2(t) \xrightarrow{\mathcal{F}} X_1(\omega)X_2(\omega)$
    *   **Dual Property for IFT:** If $X_1(\omega)X_2(\omega) \xrightarrow{\mathcal{F}^{-1}} y(t)$, then $X_1(\omega) * X_2(\omega) \xrightarrow{\mathcal{F}^{-1}} y(t)$. This means the inverse transform of the product of two frequency-domain signals is the convolution of their corresponding time-domain signals.

**Reference:** These properties are fundamental and are covered in detail in all major textbooks, e.g., **Oppenheim and Willsky (Chapter 7)**, **Haykin (Chapter 4)**, and **Lathi (Chapter 5)**.

### 6. Important Points to Remember

*   **The IFT is the inverse operation of the FT:** It allows us to recover the time-domain signal from its frequency-domain representation.
*   **The formula involves integration in the frequency domain:** The integration is performed over all frequencies, with complex exponentials at each frequency.
*   **The $\frac{1}{2\pi}$ factor is crucial:** It's a convention for the scale factor in the IFT.
*   **Understanding the IFT is key for system analysis:** It allows us to translate frequency-domain system descriptions (like the frequency response $H(\omega)$) back into the time domain to find the system's output.
*   **Properties of the IFT are dual to FT properties:** This duality simplifies understanding and application.
*   **The IFT of Dirac delta functions in the frequency domain corresponds to sinusoids in the time domain.**
*   **The IFT of a product of frequency-domain functions corresponds to the convolution of their time-domain counterparts.**

### 7. Practice Questions and Exercises

**Exercise 1:**
Given the frequency-domain representation of a signal as $X(\omega) = \delta(\omega - \omega_0) + \delta(\omega + \omega_0)$, find the corresponding time-domain signal $x(t)$ using the Inverse Fourier Transform.

**Exercise 2:**
If the frequency response of an LTI system is $H(\omega) = 1$ for $-\omega_M \le \omega \le \omega_M$ and $0$ otherwise (a rectangular low-pass filter), and the input signal has a Fourier Transform $X(\omega) = e^{-j\omega t_d}$, find the time-domain output $y(t)$ using the IFT.

**Exercise 3:**
Consider a signal whose Fourier Transform is $X(\omega) = \frac{1}{a+j\omega}$ for a constant $a > 0$. Find the time-domain signal $x(t)$ using the Inverse Fourier Transform. (Hint: You might need to recall or look up the FT of the decaying exponential).

### 8. Answers to Practice Questions

**Answer 1:**
$X(\omega) = \delta(\omega - \omega_0) + \delta(\omega + \omega_0)$
Using the IFT formula:
$x(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} [\delta(\omega - \omega_0) + \delta(\omega + \omega_0)] e^{j\omega t} d\omega$
$x(t) = \frac{1}{2\pi} \left( \int_{-\infty}^{\infty} \delta(\omega - \omega_0) e^{j\omega t} d\omega + \int_{-\infty}^{\infty} \delta(\omega + \omega_0) e^{j\omega t} d\omega \right)$
$x(t) = \frac{1}{2\pi} (e^{j\omega_0 t} + e^{-j\omega_0 t})$
$x(t) = \frac{1}{2\pi} (2 \cos(\omega_0 t))$
$x(t) = \frac{1}{\pi} \cos(\omega_0 t)$

**Answer 2:**
The input signal has a Fourier Transform $X(\omega) = e^{-j\omega t_d}$. This represents a time-delayed version of an impulse in the frequency domain, shifted by $t_d$. The inverse transform of $X(\omega)$ is $x(t) = \delta(t-t_d)$.
The system's frequency response is $H(\omega) = \begin{cases} 1, & -\omega_M \le \omega \le \omega_M \\ 0, & \text{otherwise} \end{cases}$.
The output in the frequency domain is $Y(\omega) = X(\omega)H(\omega) = e^{-j\omega t_d} \times H(\omega)$.
$Y(\omega) = \begin{cases} e^{-j\omega t_d}, & -\omega_M \le \omega \le \omega_M \\ 0, & \text{otherwise} \end{cases}$
Now, we apply the IFT to $Y(\omega)$:
$y(t) = \mathcal{F}^{-1}\{Y(\omega)\} = \frac{1}{2\pi} \int_{-\infty}^{\infty} Y(\omega) e^{j\omega t} d\omega$
$y(t) = \frac{1}{2\pi} \int_{-\omega_M}^{\omega_M} e^{-j\omega t_d} e^{j\omega t} d\omega$
$y(t) = \frac{1}{2\pi} \int_{-\omega_M}^{\omega_M} e^{j\omega (t - t_d)} d\omega$
If $t \neq t_d$:
$y(t) = \frac{1}{2\pi} \left[ \frac{e^{j\omega (t - t_d)}}{j(t - t_d)} \right]_{-\omega_M}^{\omega_M}$
$y(t) = \frac{1}{2\pi j(t - t_d)} [e^{j\omega_M (t - t_d)} - e^{-j\omega_M (t - t_d)}]$
$y(t) = \frac{1}{2\pi j(t - t_d)} [2j \sin(\omega_M (t - t_d))]$
$y(t) = \frac{\sin(\omega_M (t - t_d))}{\pi (t - t_d)}$

If $t = t_d$:
$y(t) = \frac{1}{2\pi} \int_{-\omega_M}^{\omega_M} e^{j\omega (t_d - t_d)} d\omega = \frac{1}{2\pi} \int_{-\omega_M}^{\omega_M} 1 d\omega = \frac{1}{2\pi} [\omega]_{-\omega_M}^{\omega_M} = \frac{1}{2\pi} (\omega_M - (-\omega_M)) = \frac{2\omega_M}{2\pi} = \frac{\omega_M}{\pi}$

Combining these, we can also express the result in terms of the sinc function:
$y(t) = \frac{\omega_M}{\pi} \text{sinc}(\frac{\omega_M (t - t_d)}{\pi})$

**Answer 3:**
We are given $X(\omega) = \frac{1}{a+j\omega}$. This is the Fourier Transform of $e^{-at}u(t)$, where $u(t)$ is the unit step function. Therefore, using the IFT:
$x(t) = \mathcal{F}^{-1}\left\{\frac{1}{a+j\omega}\right\} = e^{-at}u(t)$

**Reference:** These types of problems are standard in transform analysis and are found in all textbooks. For example, the FT of $e^{-at}u(t)$ is in **Oppenheim and Willsky (Table 4.1)** and **Haykin (Table 4.1)**.

### 9. Alignment with Course Outcomes

*   **CO3 (Analyze signals in frequency domain using various transforms and examine their properties):** The IFT is the tool that allows us to transition *from* the frequency domain *back* to the time domain, completing the analysis cycle. Understanding the IFT means understanding how frequency components combine to form the original signal.
*   **CO4 (Interpret the use of various transforms to analyze continuous and discrete time LTI systems):** The IFT is indispensable for system analysis. It allows us to find the time-domain output $y(t)$ from the frequency-domain relationship $Y(\omega) = X(\omega)H(\omega)$. This directly helps in interpreting how systems affect signals.

This concludes the study notes for the Inverse Transform in Module 2. Mastering the IFT is crucial for a complete understanding of signal and system analysis in both time and frequency domains.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
