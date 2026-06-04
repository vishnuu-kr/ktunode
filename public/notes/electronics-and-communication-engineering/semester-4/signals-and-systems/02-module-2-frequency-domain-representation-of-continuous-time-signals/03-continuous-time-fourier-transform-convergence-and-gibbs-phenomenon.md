---
title: "Continuous time Fourier transform - Convergence and Gibbs 
phenomenon"
subject: "SIGNALS AND SYSTEMS"
module: "Module 2: Frequency domain representation of continuous time signals:"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe51a"
status: "completed"
scrapedAt: "2026-05-23T17:52:23.468Z"
---
# Signals and Systems: Module 2 - Frequency Domain Representation of Continuous-Time Signals

## Topic: Continuous-Time Fourier Transform (CTFT) - Convergence and Gibbs Phenomenon

This module delves into the frequency domain representation of continuous-time signals, focusing on the Continuous-Time Fourier Transform (CTFT). We will explore the conditions under which the CTFT exists (convergence) and a peculiar behavior observed when approximating signals with truncated Fourier series or transforms, known as the Gibbs phenomenon.

---

### **1. Introduction to the Continuous-Time Fourier Transform (CTFT)**

The CTFT provides a way to decompose a continuous-time signal into its constituent sinusoidal frequencies. It allows us to analyze the frequency content of a signal, which is crucial for understanding its behavior and designing signal processing systems.

*   **Concept:** The CTFT represents a signal $x(t)$ as a weighted sum of complex exponentials $e^{j\omega t}$ across all frequencies $\omega$.
*   **Mathematical Definition:**
    The CTFT of a signal $x(t)$ is denoted by $X(j\omega)$ and is defined as:
    $$X(j\omega) = \mathcal{F}\{x(t)\} = \int_{-\infty}^{\infty} x(t) e^{-j\omega t} dt$$
    The inverse CTFT (ICTFT) allows us to reconstruct the original signal from its frequency-domain representation:
    $$x(t) = \mathcal{F}^{-1}\{X(j\omega)\} = \frac{1}{2\pi} \int_{-\infty}^{\infty} X(j\omega) e^{j\omega t} d\omega$$

*   **Reference:** Oppenheim & Willsky (2/e, 2015), Chapter 7.1: Fourier Transform Representation of Aperiodic Continuous-Time Signals.
*   **Relevance to Course Outcomes:**
    *   **CO3:** Analyze signals in frequency domain using various transforms and examine their properties. (Knowledge Level: K3) - The CTFT is a primary tool for frequency domain analysis.
    *   **CO4:** Interpret the use of various transforms to analyze continuous and discrete time LTI systems. (Knowledge Level: K3) - Understanding the CTFT is foundational for analyzing LTI systems in the frequency domain.

---

### **2. Convergence of the CTFT**

For the CTFT integral to yield a finite value, certain conditions must be met by the signal $x(t)$. These are known as the convergence conditions.

*   **Key Concept:** The CTFT $X(j\omega)$ exists if and only if the signal $x(t)$ is "absolutely integrable."
*   **Dirichlet Conditions for CTFT Convergence:** For the Fourier Transform of $x(t)$ to exist, $x(t)$ must satisfy the following conditions:
    1.  **Finite Energy/Absolute Integrability:**
        $$\int_{-\infty}^{\infty} |x(t)| dt < \infty$$
        This means the total area under the absolute value of the signal must be finite.
    2.  **Finite Number of Maxima and Minima:** In any finite interval, $x(t)$ must have a finite number of discontinuities and a finite number of maxima and minima.
    3.  **Finite Number of Discontinuities:** In any finite interval, $x(t)$ must have a finite number of discontinuities, and these discontinuities must be finite.

*   **Examples of Signals that Converge:**
    *   **Rectangular Pulse:** $x(t) = \text{rect}(t/T)$
        $$\int_{-\infty}^{\infty} |\text{rect}(t/T)| dt = \int_{-T/2}^{T/2} 1 dt = T < \infty$$
    *   **Exponential Decay:** $x(t) = e^{-at} u(t)$, where $a > 0$.
        $$\int_{-\infty}^{\infty} |e^{-at} u(t)| dt = \int_{0}^{\infty} e^{-at} dt = \left[-\frac{1}{a}e^{-at}\right]_0^\infty = 0 - (-\frac{1}{a}) = \frac{1}{a} < \infty$$

*   **Examples of Signals that Do Not Converge (in the strict sense):**
    *   **Unit Step Function:** $u(t)$.
        $$\int_{-\infty}^{\infty} |u(t)| dt = \int_{0}^{\infty} 1 dt = \infty$$
    *   **Sinusoidal Signal:** $x(t) = \cos(\omega_0 t)$.
        $$\int_{-\infty}^{\infty} |\cos(\omega_0 t)| dt = \infty$$
    *   **Ramp Signal:** $x(t) = t u(t)$.
        $$\int_{-\infty}^{\infty} |t u(t)| dt = \int_{0}^{\infty} t dt = \infty$$

*   **Dealing with Non-Convergent Signals:** For signals that don't meet the absolute integrability condition (like the unit step or sinusoids), we often consider their Fourier Transforms in a generalized sense or by introducing convergence factors.
    *   **Generalized Fourier Transforms (using Dirac Delta):** The Fourier Transform of signals like the unit step function or sinusoids can be found using techniques that involve generalized functions (like the Dirac delta function). For example, the Fourier Transform of the unit step function is $\pi \delta(\omega) + \frac{1}{j\omega}$.
    *   **Convergence Factor:** Multiplying a signal by a decaying exponential, like $e^{-\epsilon t}$ with $\epsilon > 0$, can make it absolutely integrable. We then take the limit as $\epsilon \to 0^+$.
        For $x(t) = u(t)$, consider $x_\epsilon(t) = e^{-\epsilon t} u(t)$.
        Its Fourier Transform is $X_\epsilon(j\omega) = \frac{1}{\epsilon + j\omega}$.
        As $\epsilon \to 0^+$, $X_\epsilon(j\omega) \to \frac{1}{j\omega}$. This is part of the generalized transform.

*   **Reference:**
    *   Oppenheim & Willsky (2/e, 2015), Chapter 7.2: Fourier Transforms of Some Basic Signals, and Section 7.10: Fourier Transform Representation of Periodic Signals.
    *   Haykin (2/e, 2021), Chapter 6: Fourier Series and Transform.
    *   Lathi (2/e, 2009), Chapter 10: Fourier Transform.

*   **Relevance to Course Outcomes:**
    *   **CO3:** Analyze signals in frequency domain using various transforms and examine their properties. (Knowledge Level: K3) - Understanding convergence dictates when and how we can apply the CTFT.

---

### **3. Gibbs Phenomenon**

The Gibbs phenomenon is an artifact that occurs when approximating a function with a finite number of terms in a Fourier series or by truncating a Fourier Transform. It manifests as oscillations near discontinuities.

*   **Concept:** When we approximate a signal with a finite number of frequency components (e.g., truncating the Fourier Transform or using a finite Fourier series), especially near discontinuities, the approximation overshoots and undershoots the true signal. This overshoot does not diminish as we add more terms; it just gets narrower and narrower.

*   **Mathematical Explanation (using Fourier Series as an analogy):**
    Consider a periodic signal $f(t)$ with a jump discontinuity at $t=t_0$. The Fourier series approximation $f_N(t) = \sum_{k=-N}^{N} c_k e^{jk\omega_0 t}$ will exhibit oscillations around $t_0$.
    Let's analyze the behavior of the truncated Fourier series of a square wave around its discontinuity. The partial sum of the Fourier series for a square wave with amplitude 1 and period $T$ (from $-T/2$ to $T/2$) is:
    $$f_N(t) \approx \frac{4}{\pi} \sum_{k \text{ odd, } 1}^{N} \frac{\sin(k \omega_0 t)}{k}$$
    At the discontinuity (e.g., $t=T/2^-$), the partial sum approaches a value that is not the function's value at the discontinuity. The overshoot at the discontinuity is approximately 9% of the jump in the function.

*   **CTFT Context:** The Gibbs phenomenon can also be observed when considering the inverse CTFT of a **truncated** Fourier Transform. If we obtain $X(j\omega)$ for a signal $x(t)$ and then truncate it to $X_M(j\omega)$ for $|\omega| \leq M$, the inverse transform $x_M(t) = \frac{1}{2\pi} \int_{-M}^{M} X(j\omega) e^{j\omega t} d\omega$ will exhibit oscillations near discontinuities of $x(t)$.

*   **Example:** Consider approximating a rectangular pulse with a Fourier Series. As you add more terms, the approximation gets better in regions where the function is smooth, but near the sharp edges of the pulse, there will always be an overshoot.

*   **Key Observation:** The overshoot is approximately 9% of the magnitude of the jump discontinuity. This percentage remains constant regardless of the number of terms included in the approximation.

*   **Minimizing Gibbs Phenomenon:**
    *   **Windowing:** Applying window functions (like Hamming, Hanning, Blackman) to the signal in the time domain before computing the Fourier Transform can smooth out the spectral content and reduce the Gibbs phenomenon in the time-domain reconstruction. This is equivalent to smoothing the Fourier Transform in the frequency domain.
    *   **Using Generalized Transforms:** For specific non-convergent signals, using their generalized Fourier Transforms (which might include delta functions) correctly represents the signal without needing truncation.

*   **Reference:**
    *   Oppenheim & Willsky (2/e, 2015), Section 7.10: Fourier Transform Representation of Periodic Signals (discusses Gibbs phenomenon in the context of Fourier Series).
    *   Haykin (2/e, 2021), Chapter 6.7: Gibbs Phenomenon (discusses it in the context of Fourier Series and its implications).
    *   Kumar (3/e, 2013), Chapter 13: Fourier Transform and its Applications (may discuss the phenomenon in related contexts).

*   **Relevance to Course Outcomes:**
    *   **CO3:** Analyze signals in frequency domain using various transforms and examine their properties. (Knowledge Level: K3) - Understanding the Gibbs phenomenon is a property of Fourier-based approximations.
    *   **CO1:** Classify continuous and discrete time signals and systems based on their properties and perform basic operations on signals. (Knowledge Level: K2) - Recognizing the characteristics of signals that lead to Gibbs phenomenon is part of signal classification.

---

### **4. Important Points to Remember**

*   **Absolute Integrability is Key:** The most fundamental condition for the existence of the CTFT is that the signal must be absolutely integrable.
*   **Generalized Transforms are Powerful:** For signals like the unit step or sinusoids, which are not absolutely integrable, generalized Fourier Transforms (involving Dirac delta functions) are used to represent their frequency content.
*   **Gibbs Phenomenon is an Approximation Issue:** The Gibbs phenomenon is not a flaw in the Fourier Transform itself, but rather an artifact of approximating a signal with a limited number of frequency components, especially around discontinuities.
*   **9% Overshoot:** The characteristic overshoot near a jump discontinuity in Gibbs phenomenon is approximately 9% of the jump height.
*   **Windowing as a Solution:** Time-domain windowing or frequency-domain smoothing can mitigate the Gibbs phenomenon.

---

### **5. Practice Questions and Exercises**

**Question 1:**
Determine whether the Continuous-Time Fourier Transform exists for the following signals. Justify your answers by checking the absolute integrability condition.
(a) $x(t) = e^{-2t} u(t)$
(b) $x(t) = \sin(3t) u(t)$
(c) $x(t) = t e^{-t} u(t)$

**Answer 1:**
(a) **Exists.** $\int_{-\infty}^{\infty} |e^{-2t} u(t)| dt = \int_{0}^{\infty} e^{-2t} dt = [-\frac{1}{2}e^{-2t}]_0^\infty = 0 - (-\frac{1}{2}) = \frac{1}{2} < \infty$.
(b) **Does not exist (strictly).** $\int_{-\infty}^{\infty} |\sin(3t) u(t)| dt = \int_{0}^{\infty} |\sin(3t)| dt = \infty$. However, a generalized Fourier Transform exists.
(c) **Exists.** $\int_{-\infty}^{\infty} |t e^{-t} u(t)| dt = \int_{0}^{\infty} t e^{-t} dt$. Using integration by parts, let $u=t$, $dv=e^{-t}dt$. Then $du=dt$, $v=-e^{-t}$. So, $[-t e^{-t}]_0^\infty - \int_{0}^{\infty} (-e^{-t}) dt = (0-0) + \int_{0}^{\infty} e^{-t} dt = [-e^{-t}]_0^\infty = 0 - (-1) = 1 < \infty$.

**Question 2:**
Consider a signal $x(t)$ that has a jump discontinuity at $t=0$. If the Fourier series approximation of $x(t)$ with $N$ terms is $x_N(t)$, describe the behavior of $x_N(t)$ as $t$ approaches $0$ and $N \to \infty$. What is this phenomenon called, and what is its approximate magnitude at the discontinuity?

**Answer 2:**
As $t$ approaches $0$, the approximation $x_N(t)$ will exhibit oscillations around the true value of $x(t)$ at the discontinuity. As $N \to \infty$, these oscillations do not disappear but become narrower and narrower, with a constant overshoot of approximately 9% of the jump magnitude. This phenomenon is called the Gibbs phenomenon.

**Question 3:**
Explain why the Fourier Transform of a unit step function $u(t)$ requires a generalized approach, and briefly mention how it's represented.

**Answer 3:**
The unit step function $u(t)$ is not absolutely integrable, as $\int_{-\infty}^{\infty} |u(t)| dt = \int_{0}^{\infty} 1 dt = \infty$. Therefore, its Fourier Transform cannot be found using the standard integral definition. A generalized Fourier Transform is used, which, for $u(t)$, is given by $\pi \delta(\omega) + \frac{1}{j\omega}$. This representation includes a DC component (represented by $\delta(\omega)$) and the frequency content of a ramp function that appears after $t=0$.

**Question 4:**
A system's frequency response is given by $H(j\omega) = \frac{1}{a+j\omega}$ with $a>0$. If we want to analyze the response of this system to a signal that is not absolutely integrable, what technique can we use to make the signal's Fourier Transform converge?

**Answer 4:**
We can use a convergence factor. For example, we can multiply the signal $x(t)$ by $e^{-\epsilon t}$ (where $\epsilon > 0$) to make it absolutely integrable, obtain its Fourier Transform, and then analyze the system's response. Alternatively, we can consider the system's response to $x(t)e^{-\epsilon t}$ and then take the limit as $\epsilon \to 0^+$.

---

This module has laid the groundwork for understanding the frequency domain representation of continuous-time signals through the CTFT. We've covered its existence criteria and a common issue encountered during approximations, preparing you for further analysis of signals and systems in the frequency domain.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
