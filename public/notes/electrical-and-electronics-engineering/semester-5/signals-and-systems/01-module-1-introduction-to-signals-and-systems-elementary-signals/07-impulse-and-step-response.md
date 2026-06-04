---
title: "Impulse and step response."
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: Introduction to Signals and Systems: Elementary Signals"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361d0"
status: "completed"
scrapedAt: "2026-05-23T16:23:42.754Z"
---
# Signals and Systems: Module 1 - Introduction to Signals and Systems: Elementary Signals

## Topic: Impulse and Step Response

This module introduces fundamental concepts of signals and systems, focusing on elementary signals and the crucial responses of systems to these signals. Understanding impulse and step responses is essential for characterizing system behavior and is a cornerstone for analyzing more complex signals and systems.

---

### Learning Outcomes Covered in this Topic:

*   **Understanding of elementary signals:** Specifically, the unit impulse and unit step functions, their properties, and their relationship.
*   **System Response to Basic Inputs:** How a system reacts when subjected to these fundamental signals.
*   **Characterization of Systems:** Recognizing that the impulse response is a complete characterization of a Linear Time-Invariant (LTI) system.
*   **Relationship between Step and Impulse Response:** Understanding how to derive one from the other.

---

### Course Outcomes Alignment:

*   **CO1: To represent continuous and discrete time signals in time domain and perform various mathematical operations (Knowledge Level: K2)**
    *   This topic directly addresses the representation and manipulation of the unit impulse and unit step signals in the time domain.
*   **CO2: To represent continuous time signals and systems in frequency domain (Knowledge Level: K3)**
    *   While this topic primarily focuses on the time domain, understanding the impulse response (h(t) or h[n]) is the prerequisite for frequency domain analysis (using Fourier Transform or Z-Transform). The impulse response's transform directly gives the system's frequency response.
*   **CO3: To represent discrete time signals and systems in Z-domain. (Knowledge Level: K3)**
    *   Similar to CO2, the discrete-time impulse response (h[n]) is the key to understanding the system's behavior in the Z-domain. The Z-transform of h[n] is the system's transfer function H(z).
*   **CO4: To analyse the stability of continuous time dynamical systems (Knowledge Level: K3)**
    *   The impulse response is fundamental to determining system stability. For LTI systems, stability can be directly assessed from the properties of its impulse response.

---

### 1. The Unit Step Function

The unit step function is a fundamental signal that represents the sudden "switching on" of a signal or event.

**1.1 Definition:**

*   **Continuous-Time Unit Step Function, $u(t)$:**
    $$ u(t) = \begin{cases} 1 & \text{for } t \ge 0 \\ 0 & \text{for } t < 0 \end{cases} $$
    *   **Graphical Representation:** A horizontal line at 0 for $t<0$, a jump of 1 at $t=0$, and a horizontal line at 1 for $t \ge 0$.

*   **Discrete-Time Unit Step Function, $u[n]$:**
    $$ u[n] = \begin{cases} 1 & \text{for } n \ge 0 \\ 0 & \text{for } n < 0 \end{cases} $$
    *   **Graphical Representation:** A sequence of zeros for $n<0$, a value of 1 at $n=0$, and continuing with values of 1 for $n \ge 1$.

**1.2 Properties and Relationships:**

*   **Relationship with the Unit Ramp Function:** The unit step function is the derivative of the unit ramp function.
*   **Relationship with the Unit Impulse Function:** This is a crucial relationship we will explore in detail.

**1.3 Textual References:**

*   **Haykin & Van Veen:** Introduces the unit step function as a fundamental building block and discusses its role in switching phenomena. (Chapter 1, Section 1.2.1)
*   **Oppenheim, Willsky & Nawab:** Provides a rigorous definition and graphical representation of both continuous and discrete-time unit step functions. (Chapter 1, Section 1.2)

---

### 2. The Unit Impulse Function (Dirac Delta Function)

The unit impulse function is an idealized signal that is zero everywhere except at $t=0$ (or $n=0$), where it has infinite amplitude. Its significance lies in its integral property.

**2.1 Definition:**

*   **Continuous-Time Unit Impulse Function, $\delta(t)$ (Dirac Delta Function):**
    *   **Strict Definition:** $\delta(t) = 0$ for $t \neq 0$.
    *   **Defining Property (Sifting Property):**
        $$ \int_{-\infty}^{\infty} \delta(t) g(t) dt = g(0) $$
        where $g(t)$ is any continuous function at $t=0$.
    *   **Graphical Representation:** Typically depicted as an arrow at $t=0$ with an implied infinite height and a unit area.

*   **Discrete-Time Unit Impulse Function, $\delta[n]$:**
    $$ \delta[n] = \begin{cases} 1 & \text{for } n = 0 \\ 0 & \text{for } n \neq 0 \end{cases} $$
    *   **Graphical Representation:** A single spike of value 1 at $n=0$ and zero everywhere else.
    *   **Defining Property (Sifting Property):**
        $$ \sum_{n=-\infty}^{\infty} \delta[n] g[n] = g[0] $$
        where $g[n]$ is any sequence.

**2.2 Properties and Relationships:**

*   **Relationship with the Unit Step Function:** This is a fundamental link.
    *   **Continuous-Time:** The unit impulse is the derivative of the unit step function:
        $$ \delta(t) = \frac{du(t)}{dt} $$
        Conversely, the unit step is the integral of the unit impulse:
        $$ u(t) = \int_{-\infty}^{t} \delta(\tau) d\tau $$
    *   **Discrete-Time:** The discrete-time unit impulse is the difference of the unit step function:
        $$ \delta[n] = u[n] - u[n-1] $$
        Conversely, the discrete-time unit step is the summation of the unit impulse:
        $$ u[n] = \sum_{k=-\infty}^{n} \delta[k] $$

*   **Scaling Property:**
    *   $\delta(at) = \frac{1}{|a|} \delta(t)$
    *   $\delta[an] = \delta[n]$ for integer $a$.

*   **Sifting Property with Impulse:**
    *   $\delta(t-t_0) = \frac{du(t-t_0)}{dt}$
    *   $\int_{-\infty}^{\infty} \delta(t-t_0) g(t) dt = g(t_0)$
    *   $\delta[n-n_0] = u[n-n_0] - u[n-n_0-1]$
    *   $\sum_{n=-\infty}^{\infty} \delta[n-n_0] g[n] = g[n_0]$

*   **Convolution Property:** The unit impulse function is the identity element for convolution:
    *   $x(t) * \delta(t) = x(t)$
    *   $x[n] * \delta[n] = x[n]$

**2.3 Textual References:**

*   **Haykin & Van Veen:** Provides a thorough treatment of the Dirac delta function, its properties, and its importance as a generalized function. (Chapter 1, Section 1.2.2)
*   **Oppenheim, Willsky & Nawab:** Explains the unit impulse as a limit of narrower and taller rectangular pulses and details its sifting property. (Chapter 1, Section 1.2)
*   **Ogata (Discrete Time Control Systems):** Focuses on the discrete-time unit impulse sequence and its role in system analysis. (Chapter 2, Section 2-1)

---

### 3. System Response to Elementary Signals

A system's response to an input signal describes how the system's output changes over time. Examining the response to simple, well-defined inputs like the unit step and unit impulse reveals fundamental characteristics of the system.

**3.1 System Response to the Unit Step (Step Response)**

The step response of a system is its output when the input is the unit step function. It tells us how the system behaves when a constant input is applied.

*   **Definition:** The step response, often denoted by $s(t)$ or $y_s(t)$, is the output of a system when the input is $u(t)$.
    $$ s(t) = y(t) \quad \text{when} \quad x(t) = u(t) $$

*   **Significance:**
    *   Indicates how quickly a system settles to a steady-state value.
    *   Reveals transient behavior (overshoot, oscillations).
    *   Useful for understanding system stability and performance metrics (e.g., rise time, settling time).

*   **Relationship with Impulse Response (for LTI Systems):**
    *   **Continuous-Time:** If $h(t)$ is the impulse response, the step response $s(t)$ is the integral of the impulse response:
        $$ s(t) = h(t) * u(t) = \int_{-\infty}^{t} h(\tau) d\tau $$
        This is because $u(t) = \int_{-\infty}^{t} \delta(\tau) d\tau$, and for LTI systems, convolution is associative and distributive.
    *   **Discrete-Time:** If $h[n]$ is the impulse response, the step response $s[n]$ is the summation of the impulse response:
        $$ s[n] = h[n] * u[n] = \sum_{k=-\infty}^{n} h[k] $$

*   **Textual References:**
    *   **Nise (Control Systems Engineering):** Explains the step response in the context of control system performance and introduces key time-domain specifications derived from it. (Chapter 4, Section 4.1)
    *   **Haykin & Van Veen:** Discusses the step response as a common test input for characterizing system behavior. (Chapter 5, Section 5.2)

**3.2 System Response to the Unit Impulse (Impulse Response)**

The impulse response is arguably the most important characteristic of a Linear Time-Invariant (LTI) system. It completely defines the system's behavior.

*   **Definition:** The impulse response, denoted by $h(t)$ for continuous-time systems and $h[n]$ for discrete-time systems, is the output of the system when the input is the unit impulse function.
    $$ h(t) = y(t) \quad \text{when} \quad x(t) = \delta(t) $$
    $$ h[n] = y[n] \quad \text{when} \quad x[n] = \delta[n] $$

*   **Significance (for LTI Systems):**
    *   **Complete Characterization:** The impulse response $h(t)$ (or $h[n]$) fully characterizes an LTI system. Knowing $h(t)$ allows you to determine the output for *any* input signal using convolution.
    *   **System Memory:** The impulse response tells us how the system's past inputs affect the current output. If $h(t)$ is non-zero only for a finite duration, the system is said to have "finite memory."
    *   **Stability:** The stability of an LTI system can be directly assessed from its impulse response.

*   **The Convolution Integral (for Continuous-Time LTI Systems):**
    The output $y(t)$ of an LTI system with impulse response $h(t)$ to an arbitrary input $x(t)$ is given by the convolution integral:
    $$ y(t) = x(t) * h(t) = \int_{-\infty}^{\infty} x(\tau) h(t - \tau) d\tau $$
    This formula arises from representing the input signal as a sum of scaled and shifted impulses.

*   **The Convolution Sum (for Discrete-Time LTI Systems):**
    The output $y[n]$ of an LTI system with impulse response $h[n]$ to an arbitrary input $x[n]$ is given by the convolution sum:
    $$ y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n - k] $$

*   **Textual References:**
    *   **Haykin & Van Veen:** Dedicates a significant portion to the impulse response as the defining characteristic of LTI systems and its relationship to convolution. (Chapter 3, Section 3.1)
    *   **Oppenheim, Willsky & Nawab:** Provides a detailed derivation of the convolution integral/sum and its importance for LTI system analysis. (Chapter 2, Section 2.3)
    *   **Ogata (Discrete Time Control Systems):** Explains the discrete-time impulse response as a fundamental system property and its use in describing system behavior. (Chapter 2, Section 2-1)
    *   **Proakis & Manolakis (Digital Signal Processing):** Emphasizes the impulse response's role in defining the input-output relationship of discrete-time LTI systems. (Chapter 2, Section 2.3)

---

### 4. Practice Questions and Exercises

**Question 1 (Conceptual - CO1, K2):**
Sketch the continuous-time unit step function $u(t)$ and the discrete-time unit step function $u[n]$.

**Question 2 (Conceptual - CO1, K2):**
Define the continuous-time unit impulse function $\delta(t)$ and state its most important property (the sifting property).

**Question 3 (Relationship - CO1, K2):**
Write down the mathematical relationship between the continuous-time unit step function $u(t)$ and the continuous-time unit impulse function $\delta(t)$.

**Question 4 (Relationship - CO1, K2):**
Write down the mathematical relationship between the discrete-time unit step function $u[n]$ and the discrete-time unit impulse function $\delta[n]$.

**Question 5 (System Response - CO1, K2):**
If a system is LTI and its impulse response is $h(t) = e^{-at}u(t)$ for $a > 0$, what is its step response $s(t)$? (Hint: Use the integral relationship).

**Question 6 (System Response - CO1, K2):**
If a system is LTI and its impulse response is $h[n] = a^n u[n]$ for $|a| < 1$, what is its step response $s[n]$? (Hint: Use the summation relationship).

**Question 7 (Convolution - CO1, K2):**
Consider an LTI system with impulse response $h(t) = \delta(t-2)$. What is the output $y(t)$ if the input is $x(t) = u(t)$?

**Question 8 (Convolution - CO1, K2):**
Consider an LTI system with impulse response $h[n] = \delta[n+1]$. What is the output $y[n]$ if the input is $x[n] = u[n-1]$?

---

### 5. Answers to Practice Questions

**Answer 1:**
*   **Continuous-time $u(t)$:** A horizontal line at 0 for $t < 0$, a jump of height 1 at $t=0$, and a horizontal line at 1 for $t \ge 0$.
*   **Discrete-time $u[n]$:** A sequence of 0s for $n < 0$, a value of 1 at $n=0$, and values of 1 for all $n \ge 1$.

**Answer 2:**
The continuous-time unit impulse function $\delta(t)$ is zero for all $t \neq 0$. Its defining property, the sifting property, is:
$$ \int_{-\infty}^{\infty} \delta(t) g(t) dt = g(0) $$

**Answer 3:**
$$ \delta(t) = \frac{du(t)}{dt} \quad \text{and} \quad u(t) = \int_{-\infty}^{t} \delta(\tau) d\tau $$

**Answer 4:**
$$ \delta[n] = u[n] - u[n-1] \quad \text{and} \quad u[n] = \sum_{k=-\infty}^{n} \delta[k] $$

**Answer 5:**
The step response $s(t)$ is the integral of the impulse response:
$$ s(t) = \int_{-\infty}^{t} h(\tau) d\tau = \int_{-\infty}^{t} e^{-a\tau}u(\tau) d\tau $$
Since $u(\tau)$ is zero for $\tau < 0$, the integral becomes:
$$ s(t) = \int_{0}^{t} e^{-a\tau} d\tau \quad \text{for } t \ge 0 $$
$$ s(t) = \left[ \frac{e^{-a\tau}}{-a} \right]_{0}^{t} = \frac{e^{-at}}{-a} - \frac{e^{0}}{-a} = \frac{1 - e^{-at}}{a} $$
So, the step response is:
$$ s(t) = \frac{1 - e^{-at}}{a} u(t) $$

**Answer 6:**
The step response $s[n]$ is the summation of the impulse response:
$$ s[n] = \sum_{k=-\infty}^{n} h[k] = \sum_{k=-\infty}^{n} a^k u[k] $$
Since $u[k]$ is zero for $k < 0$, the summation becomes:
$$ s[n] = \sum_{k=0}^{n} a^k $$
This is a geometric series. For $n \ge 0$:
$$ s[n] = \frac{1 - a^{n+1}}{1 - a} $$
So, the step response is:
$$ s[n] = \frac{1 - a^{n+1}}{1 - a} u[n] $$

**Answer 7:**
Using the convolution integral: $y(t) = x(t) * h(t)$
$$ y(t) = u(t) * \delta(t-2) = \int_{-\infty}^{\infty} u(\tau) \delta(t-\tau-2) d\tau $$
Using the sifting property, we need $t - \tau - 2 = 0$, which means $\tau = t-2$.
The integral becomes:
$$ y(t) = u(t-2) \times 1 = u(t-2) $$
The output is a unit step that is delayed by 2 seconds.

**Answer 8:**
Using the convolution sum: $y[n] = x[n] * h[n]$
$$ y[n] = u[n-1] * \delta[n+1] = \sum_{k=-\infty}^{\infty} u[k-1] \delta[n-k+1] $$
Using the sifting property, we need $n-k+1 = 0$, which means $k = n+1$.
The sum becomes:
$$ y[n] = u((n+1)-1) \times 1 = u[n] $$
The output is a unit step starting at $n=0$.

---

### 6. Important Points to Remember

*   **Unit Impulse as a Derivative of Unit Step:** $\delta(t) = \frac{du(t)}{dt}$ (continuous-time) and $\delta[n] = u[n] - u[n-1]$ (discrete-time).
*   **Unit Step as Integral of Unit Impulse:** $u(t) = \int_{-\infty}^{t} \delta(\tau) d\tau$ (continuous-time) and $u[n] = \sum_{k=-\infty}^{n} \delta[k]$ (discrete-time).
*   **Sifting Property:** The impulse function "sifts out" the value of a continuous function (or sequence) at a specific point.
*   **Impulse Response $h(t)$ or $h[n]$:** Is the output of an LTI system when the input is a unit impulse.
*   **Complete Characterization:** For LTI systems, the impulse response completely defines the system.
*   **Convolution:** The relationship between input, output, and impulse response for LTI systems is defined by convolution ($y(t) = x(t) * h(t)$ or $y[n] = x[n] * h[n]$).
*   **Step Response:** Is the output of a system when the input is a unit step. For LTI systems, it is the integral (continuous-time) or summation (discrete-time) of the impulse response.

---

This concludes the study notes for the Impulse and Step Response topic in Module 1. Mastering these concepts is crucial for understanding system behavior and for subsequent topics in Signals and Systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
