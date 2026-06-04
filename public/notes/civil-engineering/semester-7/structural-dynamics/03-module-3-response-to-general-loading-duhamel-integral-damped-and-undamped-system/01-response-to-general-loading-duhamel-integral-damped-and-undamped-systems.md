---
title: "Response to general loading  – Duhamel Integral, damped and undamped systems."
subject: "STRUCTURAL DYNAMICS"
module: "Module 3: Response to general loading  – Duhamel Integral, damped and undamped systems."
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba81141d"
status: "completed"
scrapedAt: "2026-05-20T19:01:38.956Z"
---
# Structural Dynamics: Module 3 - Response to General Loading

## Introduction to General Loading

In Structural Dynamics, we often deal with dynamic loads that are not simple sinusoidal or step functions. These can be complex time-varying forces, such as wind gusts, earthquake ground motions, or impact loads. Analyzing the response of a structure to such general loading requires a more sophisticated approach.

This module introduces the **Duhamel Integral**, a fundamental tool for determining the response of a single-degree-of-freedom (SDOF) system to arbitrary time-dependent forcing functions. We will also explore the behavior of both **damped** and **undamped** systems under these general loads.

---

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   **Understand and apply the Duhamel Integral** for determining the response of SDOF systems to general dynamic loading.
*   **Analyze the response of undamped SDOF systems** to arbitrary forcing functions.
*   **Analyze the response of damped SDOF systems** to arbitrary forcing functions.
*   **Differentiate between the responses of damped and undamped systems** to the same general loading.
*   **Interpret and evaluate the results** obtained from the Duhamel Integral.

---

## Key Concepts and Definitions

### 1. Single-Degree-of-Freedom (SDOF) System

*   **Definition:** A simplified model of a structure where all mass is assumed to be concentrated at a single point, and motion is restricted to one degree of freedom (typically vertical displacement or lateral sway).
*   **Equation of Motion (Undamped):**
    $m\ddot{u} + ku = p(t)$
    where:
    *   $m$: mass
    *   $\ddot{u}$: acceleration
    *   $k$: stiffness
    *   $u$: displacement
    *   $p(t)$: external forcing function
*   **Equation of Motion (Damped):**
    $m\ddot{u} + c\dot{u} + ku = p(t)$
    where:
    *   $c$: damping coefficient
    *   $\dot{u}$: velocity

### 2. Natural Frequency ($\omega_n$) and Damping Ratio ($\zeta$)

*   **Natural Frequency ($\omega_n$):** The frequency at which an undamped system oscillates when disturbed from its equilibrium position.
    $\omega_n = \sqrt{\frac{k}{m}}$
*   **Damping Ratio ($\zeta$):** A dimensionless parameter that describes the level of damping in a system relative to critical damping.
    $\zeta = \frac{c}{c_{critical}} = \frac{c}{2\sqrt{mk}}$

### 3. Response to a Unit Impulse

The response of an SDOF system to a unit impulse function is crucial for deriving the Duhamel Integral. A unit impulse is an infinitely large force applied for an infinitesimally short duration, with an integral of unity.

*   **Unit Impulse Function ($\delta(t)$):**
    $\delta(t) = \begin{cases} \infty & \text{if } t = 0 \\ 0 & \text{if } t \neq 0 \end{cases}$
    and $\int_{-\infty}^{\infty} \delta(t) dt = 1$

*   **Response to Unit Impulse (Undamped System):**
    Consider the equation of motion: $m\ddot{u} + ku = \delta(t)$.
    The solution for the displacement $u(t)$ is the **impulse response function**, often denoted by $h(t)$.
    $h(t) = \frac{1}{m\omega_n}\sin(\omega_n t) = \frac{1}{k}\sin(\omega_n t)$ for $t \ge 0$.
    *   **Interpretation:** This represents the displacement of the system after being subjected to a unit impulse, assuming it starts from rest.

*   **Response to Unit Impulse (Damped System):**
    Consider the equation of motion: $m\ddot{u} + c\dot{u} + ku = \delta(t)$.
    The solution for $u(t)$ (the damped impulse response function, $h_d(t)$) depends on the damping ratio:
    *   **Underdamped ($\zeta < 1$):**
        $h_d(t) = \frac{1}{m\omega_d}e^{-\zeta\omega_n t}\sin(\omega_d t)$ for $t \ge 0$
        where $\omega_d = \omega_n\sqrt{1-\zeta^2}$ is the damped natural frequency.
    *   **Critically damped ($\zeta = 1$):**
        $h_d(t) = \frac{1}{m\omega_n}e^{-\omega_n t}t$ for $t \ge 0$
    *   **Overdamped ($\zeta > 1$):**
        $h_d(t) = \frac{1}{m\omega_n}\left(\frac{e^{-(\zeta - \sqrt{\zeta^2-1})\omega_n t} - e^{-(\zeta + \sqrt{\zeta^2-1})\omega_n t}}{2\sqrt{\zeta^2-1}}\right)$ for $t \ge 0$

### 4. The Duhamel Integral (Superposition Integral)

The Duhamel Integral is derived by considering the applied force $p(\tau)$ at any time $\tau$ as a series of impulses. The response at time $t$ is the sum (integral) of the responses to each impulse, each scaled by the magnitude of the impulse and shifted in time.

*   **Derivation Concept:**
    Imagine the forcing function $p(\tau)$ is approximated by a series of small impulses. At time $\tau$, an impulse of magnitude $p(\tau)d\tau$ is applied. The response at a later time $t$ due to this impulse is $p(\tau)d\tau \times h(t-\tau)$, where $h(t-\tau)$ is the impulse response function evaluated at time $t-\tau$. Summing these contributions from $\tau = 0$ to $t$ gives the total response.

*   **Duhamel Integral for Undamped Systems:**
    The displacement $u(t)$ of an undamped SDOF system subjected to a forcing function $p(\tau)$ (starting from rest, $u(0)=0, \dot{u}(0)=0$) is given by:

    $u(t) = \int_0^t p(\tau) h(t-\tau) d\tau$
    Substituting $h(t-\tau) = \frac{1}{m\omega_n}\sin(\omega_n (t-\tau))$:

    $u(t) = \frac{1}{m\omega_n} \int_0^t p(\tau) \sin(\omega_n (t-\tau)) d\tau$

    This can also be written as:
    $u(t) = \frac{1}{k} \int_0^t p(\tau) \sin(\omega_n (t-\tau)) d\tau$

*   **Duhamel Integral for Damped Systems:**
    The displacement $u(t)$ of a damped SDOF system (starting from rest, $u(0)=0, \dot{u}(0)=0$) subjected to a forcing function $p(\tau)$ is given by:

    $u(t) = \int_0^t p(\tau) h_d(t-\tau) d\tau$

    Substituting the underdamped impulse response function:

    $u(t) = \frac{1}{m\omega_d} \int_0^t p(\tau) e^{-\zeta\omega_n (t-\tau)} \sin(\omega_d (t-\tau)) d\tau$

---

## Response to General Loading: Damped vs. Undamped Systems

The Duhamel Integral provides a unified framework to analyze both damped and undamped systems. The key difference lies in the impulse response function used.

### Response of Undamped Systems to General Loading

*   **Characteristics:**
    *   The response can exhibit oscillations at the natural frequency $\omega_n$.
    *   If the forcing frequency is close to the natural frequency, resonance can occur, leading to large displacements.
    *   The oscillations continue indefinitely even after the load is removed, albeit with a phase lag dependent on the forcing function.
    *   The Duhamel integral directly uses $\sin(\omega_n (t-\tau))$.

*   **Example:** Consider a simple spring-mass system (undamped) subjected to a triangular load. The Duhamel Integral would be used to calculate the displacement history.

### Response of Damped Systems to General Loading

*   **Characteristics:**
    *   Damping causes the amplitude of oscillations to decay over time.
    *   The system will return to its equilibrium position after the load is removed, eventually.
    *   The presence of damping reduces the peak response, especially near resonance.
    *   The Duhamel integral uses the damped impulse response function, which includes an exponential decay term ($e^{-\zeta\omega_n (t-\tau)}$) and the sine of the damped natural frequency ($\sin(\omega_d (t-\tau))$).

*   **Example:** The same spring-mass system with damping subjected to the same triangular load. The displacement history would show a decaying amplitude of oscillations compared to the undamped case.

---

## Evaluating the Duhamel Integral

Evaluating the Duhamel Integral can be challenging for complex forcing functions $p(\tau)$. Often, numerical methods or specific integral formulas for common forcing functions are employed.

### Useful Trigonometric Identity

The product-to-sum trigonometric identity is frequently used:
$\sin A \cos B = \frac{1}{2}[\sin(A+B) + \sin(A-B)]$
$\cos A \sin B = \frac{1}{2}[\sin(A+B) - \sin(A-B)]$

Using these, the Duhamel Integral for an undamped system can sometimes be simplified:
$u(t) = \frac{1}{m\omega_n} \int_0^t p(\tau) [\sin(\omega_n t)\cos(\omega_n \tau) - \cos(\omega_n t)\sin(\omega_n \tau)] d\tau$
$u(t) = \frac{\sin(\omega_n t)}{m\omega_n} \int_0^t p(\tau) \cos(\omega_n \tau) d\tau - \frac{\cos(\omega_n t)}{m\omega_n} \int_0^t p(\tau) \sin(\omega_n \tau) d\tau$

This form separates the response into two parts, one dependent on $\sin(\omega_n t)$ and the other on $\cos(\omega_n t)$, which can be easier to integrate if $p(\tau)$ is of a known form.

---

## Practice Questions and Exercises

**Question 1:**
An undamped single-degree-of-freedom system with mass $m = 1000$ kg and stiffness $k = 100,000$ N/m is subjected to a force $p(t) = 1000 \sin(2t)$ N. Calculate the displacement of the system at $t = \pi/2$ seconds using the Duhamel Integral.

**Solution 1:**
*   Natural frequency: $\omega_n = \sqrt{k/m} = \sqrt{100000/1000} = \sqrt{100} = 10$ rad/s.
*   Force function: $p(\tau) = 1000 \sin(2\tau)$.
*   Impulse response function (undamped): $h(t-\tau) = \frac{1}{m\omega_n} \sin(\omega_n (t-\tau)) = \frac{1}{1000 \times 10} \sin(10(t-\tau)) = \frac{1}{10000} \sin(10(t-\tau))$.

The Duhamel Integral:
$u(t) = \int_0^t p(\tau) h(t-\tau) d\tau = \int_0^t (1000 \sin(2\tau)) \left(\frac{1}{10000} \sin(10(t-\tau))\right) d\tau$
$u(t) = \frac{1}{10} \int_0^t \sin(2\tau) \sin(10(t-\tau)) d\tau$

Using $\sin A \sin B = \frac{1}{2}[\cos(A-B) - \cos(A+B)]$:
Let $A = 2\tau$ and $B = 10(t-\tau) = 10t - 10\tau$.
$A-B = 2\tau - (10t - 10\tau) = 12\tau - 10t$
$A+B = 2\tau + (10t - 10\tau) = 10t - 8\tau$

$u(t) = \frac{1}{10} \int_0^t \frac{1}{2}[\cos(12\tau - 10t) - \cos(10t - 8\tau)] d\tau$
$u(t) = \frac{1}{20} \int_0^t [\cos(12\tau - 10t) - \cos(10t - 8\tau)] d\tau$

Now, evaluate at $t = \pi/2$:
$u(\pi/2) = \frac{1}{20} \int_0^{\pi/2} [\cos(12\tau - 5\pi) - \cos(5\pi - 8\tau)] d\tau$

Note: $\cos(x - 5\pi) = \cos(x - \pi) = -\cos(x)$.
$\cos(5\pi - x) = \cos(\pi - x) = -\cos(x)$.

$u(\pi/2) = \frac{1}{20} \int_0^{\pi/2} [-\cos(12\tau) - (-\cos(8\tau))] d\tau$
$u(\pi/2) = \frac{1}{20} \int_0^{\pi/2} [\cos(8\tau) - \cos(12\tau)] d\tau$

$\int_0^{\pi/2} \cos(8\tau) d\tau = \left[\frac{\sin(8\tau)}{8}\right]_0^{\pi/2} = \frac{\sin(4\pi)}{8} - \frac{\sin(0)}{8} = 0 - 0 = 0$
$\int_0^{\pi/2} \cos(12\tau) d\tau = \left[\frac{\sin(12\tau)}{12}\right]_0^{\pi/2} = \frac{\sin(6\pi)}{12} - \frac{\sin(0)}{12} = 0 - 0 = 0$

So, $u(\pi/2) = \frac{1}{20} [0 - 0] = 0$ m.

*(Self-Correction/Alternative Check: This might seem counterintuitive. Let's reconsider the application of the Duhamel Integral. A more direct way to solve this without breaking it down with trig identities might be preferable, or checking if the specific time point happens to result in zero for this particular forcing function and system parameters. The problem asks for the Duhamel Integral, so the steps above are correct for that method. However, it's good to be aware of how specific inputs can lead to zero or unexpected results).*

Let's try the alternative form derived earlier:
$u(t) = \frac{\sin(\omega_n t)}{k} \int_0^t p(\tau) \cos(\omega_n \tau) d\tau - \frac{\cos(\omega_n t)}{k} \int_0^t p(\tau) \sin(\omega_n \tau) d\tau$
$k = m\omega_n = 1000 \times 10 = 10000$ N/m.
$\omega_n = 10$ rad/s.
$p(\tau) = 1000 \sin(2\tau)$.

$\int_0^t p(\tau) \cos(\omega_n \tau) d\tau = \int_0^t 1000 \sin(2\tau) \cos(10\tau) d\tau$
Using $\sin A \cos B = \frac{1}{2}[\sin(A+B) + \sin(A-B)]$:
$A=2\tau, B=10\tau$. $A+B = 12\tau, A-B = -8\tau$.
$\int_0^t 1000 \times \frac{1}{2}[\sin(12\tau) + \sin(-8\tau)] d\tau = 500 \int_0^t [\sin(12\tau) - \sin(8\tau)] d\tau$
$= 500 \left[-\frac{\cos(12\tau)}{12} + \frac{\cos(8\tau)}{8}\right]_0^t$
$= 500 \left(-\frac{\cos(12t)}{12} + \frac{\cos(8t)}{8} - (-\frac{1}{12} + \frac{1}{8})\right)$
$= 500 \left(-\frac{\cos(12t)}{12} + \frac{\cos(8t)}{8} + \frac{1}{24}\right)$

$\int_0^t p(\tau) \sin(\omega_n \tau) d\tau = \int_0^t 1000 \sin(2\tau) \sin(10\tau) d\tau$
Using $\sin A \sin B = \frac{1}{2}[\cos(A-B) - \cos(A+B)]$:
$A=2\tau, B=10\tau$. $A-B = -8\tau, A+B = 12\tau$.
$\int_0^t 1000 \times \frac{1}{2}[\cos(-8\tau) - \cos(12\tau)] d\tau = 500 \int_0^t [\cos(8\tau) - \cos(12\tau)] d\tau$
$= 500 \left[\frac{\sin(8\tau)}{8} - \frac{\sin(12\tau)}{12}\right]_0^t$
$= 500 \left(\frac{\sin(8t)}{8} - \frac{\sin(12t)}{12}\right)$

Now, substitute into the Duhamel Integral form at $t = \pi/2$:
$\omega_n t = 10 \times \pi/2 = 5\pi$.
$\sin(5\pi) = 0$, $\cos(5\pi) = -1$.

$u(\pi/2) = \frac{\sin(5\pi)}{10000} \times (\text{Integral 1}) - \frac{\cos(5\pi)}{10000} \times (\text{Integral 2})$
$u(\pi/2) = \frac{0}{10000} \times (\text{Integral 1}) - \frac{-1}{10000} \times \left[500 \left(\frac{\sin(8(\pi/2))}{8} - \frac{\sin(12(\pi/2))}{12}\right)\right]$
$u(\pi/2) = \frac{1}{10000} \times \left[500 \left(\frac{\sin(4\pi)}{8} - \frac{\sin(6\pi)}{12}\right)\right]$
$u(\pi/2) = \frac{1}{10000} \times \left[500 \left(\frac{0}{8} - \frac{0}{12}\right)\right] = 0$ m.

The result remains 0. This implies that at $t=\pi/2$, the displacement happens to be zero due to the specific forcing function and system parameters.

**Question 2:**
A damped SDOF system with $m=2000$ kg, $c=2000$ Ns/m, and $k=40000$ N/m is subjected to a step load $p(t) = 5000$ N for $t \ge 0$. Determine the displacement at $t=0.5$ s using the Duhamel Integral.

**Solution 2:**
*   Mass $m = 2000$ kg
*   Damping coefficient $c = 2000$ Ns/m
*   Stiffness $k = 40000$ N/m
*   Force $p(t) = 5000$ N

Calculate natural frequency and damping ratio:
*   $\omega_n = \sqrt{k/m} = \sqrt{40000/2000} = \sqrt{20} \approx 4.472$ rad/s.
*   Critical damping: $c_{critical} = 2\sqrt{mk} = 2\sqrt{2000 \times 40000} = 2\sqrt{80 \times 10^6} = 2 \times 8944.27 \approx 17888.5$ Ns/m.
*   Damping ratio: $\zeta = c/c_{critical} = 2000 / 17888.5 \approx 0.112$ (Underdamped).

Damped natural frequency:
*   $\omega_d = \omega_n \sqrt{1-\zeta^2} = 4.472 \sqrt{1 - (0.112)^2} = 4.472 \sqrt{1 - 0.0125} = 4.472 \sqrt{0.9875} \approx 4.435$ rad/s.

Impulse response function (underdamped):
$h_d(t-\tau) = \frac{1}{m\omega_d}e^{-\zeta\omega_n (t-\tau)}\sin(\omega_d (t-\tau))$
$h_d(t-\tau) = \frac{1}{2000 \times 4.435} e^{-0.112 \times 4.472 (t-\tau)} \sin(4.435 (t-\tau))$
$h_d(t-\tau) = \frac{1}{8870} e^{-0.4999 (t-\tau)} \sin(4.435 (t-\tau))$

Duhamel Integral:
$u(t) = \int_0^t p(\tau) h_d(t-\tau) d\tau = \int_0^t 5000 \times \frac{1}{8870} e^{-0.4999 (t-\tau)} \sin(4.435 (t-\tau)) d\tau$
$u(t) = \frac{5000}{8870} \int_0^t e^{-0.4999 (t-\tau)} \sin(4.435 (t-\tau)) d\tau$
$u(t) = 0.5637 \int_0^t e^{-0.4999 (t-\tau)} \sin(4.435 (t-\tau)) d\tau$

Let $\lambda = t-\tau$. Then $d\lambda = -d\tau$. When $\tau=0, \lambda=t$. When $\tau=t, \lambda=0$.
$u(t) = 0.5637 \int_t^0 e^{-0.4999 \lambda} \sin(4.435 \lambda) (-d\lambda)$
$u(t) = 0.5637 \int_0^t e^{-0.4999 \lambda} \sin(4.435 \lambda) d\lambda$

The integral $\int e^{ax}\sin(bx)dx = \frac{e^{ax}}{a^2+b^2}(a\sin(bx) - b\cos(bx))$.
Here, $a = -0.4999$ and $b = 4.435$.
$a^2+b^2 = (-0.4999)^2 + (4.435)^2 \approx 0.2499 + 19.669 \approx 19.919$.

$\int_0^t e^{-0.4999 \lambda} \sin(4.435 \lambda) d\lambda = \left[\frac{e^{-0.4999 \lambda}}{19.919}(-0.4999\sin(4.435 \lambda) - 4.435\cos(4.435 \lambda))\right]_0^t$
$= \frac{e^{-0.4999 t}}{19.919}(-0.4999\sin(4.435 t) - 4.435\cos(4.435 t)) - \frac{e^0}{19.919}(0 - 4.435)$
$= \frac{e^{-0.4999 t}}{19.919}(-0.4999\sin(4.435 t) - 4.435\cos(4.435 t)) + \frac{4.435}{19.919}$

Now, substitute $t=0.5$ s:
$\lambda = 0.4999$
$\omega_d t = 4.435 \times 0.5 = 2.2175$ radians.
$\sin(2.2175) \approx 0.8066$
$\cos(2.2175) \approx -0.5914$

Integral value at $t=0.5$:
$\frac{e^{-0.4999 \times 0.5}}{19.919}(-0.4999\sin(2.2175) - 4.435\cos(2.2175)) + \frac{4.435}{19.919}$
$\approx \frac{e^{-0.24995}}{19.919}(-0.4999 \times 0.8066 - 4.435 \times -0.5914) + 0.2226$
$\approx \frac{0.7788}{19.919}(-0.4033 + 2.625) + 0.2226$
$\approx \frac{0.7788}{19.919}(2.2217) + 0.2226$
$\approx 0.0391 \times 2.2217 + 0.2226$
$\approx 0.0869 + 0.2226 = 0.3095$

$u(0.5) = 0.5637 \times 0.3095 \approx 0.1745$ m.

*(Self-Correction: It's common to get lost in the integral evaluation. The approach is sound. Double-checking the integral formula and calculations is key. In a test scenario, you'd typically use pre-derived results or simpler forcing functions if analytical solutions are expected.)*

**A known result for the response of a damped system to a step load $P_0$ is:**
$u(t) = \frac{P_0}{k}\left(1 - e^{-\zeta\omega_n t} \left(\cos(\omega_d t) + \frac{\zeta}{\sqrt{1-\zeta^2}}\sin(\omega_d t)\right)\right)$

Let's verify our result using this formula.
$P_0 = 5000$ N.
$k = 40000$ N/m.
$P_0/k = 5000/40000 = 0.125$ m.
$\zeta = 0.112$, $\omega_n = 4.472$, $\omega_d = 4.435$.
$\zeta\omega_n t = 0.112 \times 4.472 \times 0.5 \approx 0.2499$.
$\omega_d t = 4.435 \times 0.5 = 2.2175$.
$\frac{\zeta}{\sqrt{1-\zeta^2}} = \frac{0.112}{\sqrt{1 - 0.112^2}} = \frac{0.112}{\sqrt{0.9875}} \approx \frac{0.112}{0.9937} \approx 0.1127$.

$u(0.5) = 0.125 \left(1 - e^{-0.2499} \left(\cos(2.2175) + 0.1127\sin(2.2175)\right)\right)$
$u(0.5) = 0.125 \left(1 - 0.7788 \left(-0.5914 + 0.1127 \times 0.8066\right)\right)$
$u(0.5) = 0.125 \left(1 - 0.7788 \left(-0.5914 + 0.0909\right)\right)$
$u(0.5) = 0.125 \left(1 - 0.7788 \left(-0.5005\right)\right)$
$u(0.5) = 0.125 \left(1 + 0.3900\right)$
$u(0.5) = 0.125 \times 1.3900 = 0.1738$ m.

The Duhamel integral calculation is a bit off due to numerical precision or potential errors in intermediate steps. The known solution is more reliable for verification. The goal of the Duhamel integral is to get to the final form that can be evaluated.

**Question 3:**
Explain the physical meaning of the Duhamel Integral.

**Solution 3:**
The Duhamel Integral represents the total response of a linear system at time $t$ by summing up the contributions of all the infinitesimal impulses applied to the system from time $\tau=0$ up to time $t$. Each infinitesimal impulse $p(\tau)d\tau$ at time $\tau$ generates a response at time $t$ that is proportional to the system's impulse response function evaluated at the time elapsed since the impulse was applied, i.e., $h(t-\tau)$. The integral essentially "convolves" the forcing function with the impulse response function of the system.

---

## Important Points to Remember

*   **Duhamel Integral:** A powerful tool for analyzing the response of linear systems to arbitrary dynamic loads. It's essentially a convolution integral.
*   **Impulse Response Function:** The foundation of the Duhamel Integral. It describes how a system reacts to a very short, intense force (an impulse).
*   **Damped vs. Undamped:** The key difference in the Duhamel Integral formulation is the impulse response function used: $\sin(\omega_n(t-\tau))$ for undamped systems and $h_d(t-\tau)$ (which includes an exponential decay) for damped systems.
*   **Starting from Rest:** The standard Duhamel Integral formulas assume the system starts with zero initial displacement and velocity. For systems with non-zero initial conditions, additional terms must be added to the solution.
*   **Evaluation Complexity:** Directly evaluating the Duhamel Integral can be mathematically intensive. Numerical methods or known analytical solutions for specific forcing functions are often employed.
*   **Resonance:** In undamped systems, if the forcing frequency is close to the natural frequency, resonance can lead to very large displacements. Damping significantly mitigates this effect.
*   **System Linearity:** The Duhamel Integral is applicable to linear systems. For non-linear systems, more advanced techniques are required.

---
