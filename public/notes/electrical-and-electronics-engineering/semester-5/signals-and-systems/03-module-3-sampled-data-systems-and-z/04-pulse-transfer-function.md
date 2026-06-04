---
title: "Pulse transfer function."
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Sampled Data Systems and Z"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361de"
status: "completed"
scrapedAt: "2026-05-23T16:23:51.197Z"
---
Sure, here are comprehensive study notes for the topic "Pulse Transfer Function" within Module 3: Sampled Data Systems and Z of the Signals and Systems course.

---

# Module 3: Sampled Data Systems and Z - Pulse Transfer Function

## 1. Introduction to Sampled Data Systems

Sampled data systems are systems where the input signals are sampled at discrete instants of time. These systems are prevalent in digital control and digital signal processing applications. The core component that enables the analysis of these systems in the Z-domain is the **pulse transfer function**.

**Key Concepts:**

*   **Sampling:** The process of converting a continuous-time signal into a sequence of discrete-time values by taking samples at regular intervals.
*   **Discrete-time signal:** A signal that is defined only at discrete points in time.
*   **Z-transform:** A mathematical tool used to analyze discrete-time signals and systems, analogous to the Laplace transform for continuous-time systems. It transforms a discrete-time sequence $x[n]$ into a function $X(z)$ in the complex z-plane.

**Reference:**
*   **Ogata, K. (2006). *Discrete Time Control Systems*. Pearson.** Chapter 2 provides a thorough introduction to sampling and the Z-transform.
*   **Haykin, S., & Van Veen, B. (2007). *Signals and Systems*. Wiley.** Chapter 9 covers the Z-transform and its applications to discrete-time systems.

## 2. The Z-Transform and Its Properties

The Z-transform is fundamental to understanding pulse transfer functions.

**Definition of Z-Transform:**
For a discrete-time signal $x[n]$, its Z-transform is defined as:
$$X(z) = Z\{x[n]\} = \sum_{n=-\infty}^{\infty} x[n] z^{-n}$$
where $z$ is a complex variable.

**Region of Convergence (ROC):**
The set of values of $z$ for which the Z-transform converges. The ROC is crucial for determining the uniqueness of the inverse Z-transform and for system analysis.

**Key Properties of the Z-Transform:**

*   **Linearity:** $Z\{ax[n] + by[n]\} = aX(z) + bY(z)$
*   **Time Shifting:** $Z\{x[n-k]\} = z^{-k} X(z)$ (for causal sequences)
*   **Multiplication by $n$:** $Z\{nx[n]\} = -z \frac{dX(z)}{dz}$
*   **Convolution:** $Z\{x[n] * y[n]\} = X(z) Y(z)$

**Reference:**
*   **Oppenheim, A. V., Willsky, A. S., & Nawab, S. H. (2015). *Signals and Systems*. Prentice Hall.** Chapter 10 provides an in-depth treatment of the Z-transform and its properties.
*   **Haykin, S., & Van Veen, B. (2007). *Signals and Systems*. Wiley.** Chapter 9 details the properties of the Z-transform, including time shifting and convolution.

## 3. Representing Discrete-Time Systems: The Pulse Transfer Function

The pulse transfer function is the Z-domain representation of a discrete-time linear time-invariant (LTI) system. It describes the relationship between the Z-transform of the output sequence and the Z-transform of the input sequence.

**Definition:**
For a discrete-time LTI system, the pulse transfer function $H(z)$ is defined as the ratio of the Z-transform of the output sequence $Y(z)$ to the Z-transform of the input sequence $X(z)$, assuming zero initial conditions:
$$H(z) = \frac{Y(z)}{X(z)}$$

**Derivation (Focus on causal systems with impulse response $h[n]$):**
If a discrete-time LTI system is described by its impulse response $h[n]$, its output $y[n]$ to an input $x[n]$ is given by the convolution:
$$y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k]$$
Taking the Z-transform of both sides:
$$Y(z) = Z\{y[n]\} = Z\{x[n] * h[n]\}$$
Using the convolution property of the Z-transform:
$$Y(z) = X(z) H(z)$$
where $H(z) = Z\{h[n]\} = \sum_{n=0}^{\infty} h[n] z^{-n}$ (assuming a causal impulse response starting at $n=0$).

**Relationship to Difference Equations:**
Discrete-time LTI systems are often described by linear constant-coefficient difference equations. The pulse transfer function can be directly derived from these equations.

Consider a difference equation:
$$y[n] + a_1 y[n-1] + \dots + a_N y[n-N] = b_0 x[n] + b_1 x[n-1] + \dots + b_M x[n-M]$$
Taking the Z-transform of both sides (assuming zero initial conditions for $y[n-k]$ and $x[n-k]$):
$$Y(z) + a_1 z^{-1} Y(z) + \dots + a_N z^{-N} Y(z) = b_0 X(z) + b_1 z^{-1} X(z) + \dots + b_M z^{-M} X(z)$$
Factoring out $Y(z)$ and $X(z)$:
$$Y(z) (1 + a_1 z^{-1} + \dots + a_N z^{-N}) = X(z) (b_0 + b_1 z^{-1} + \dots + b_M z^{-M})$$
The pulse transfer function is then:
$$H(z) = \frac{Y(z)}{X(z)} = \frac{b_0 + b_1 z^{-1} + \dots + b_M z^{-M}}{1 + a_1 z^{-1} + \dots + a_N z^{-N}}$$

**Course Outcome Alignment:**
*   **CO3 (K3):** This topic directly addresses the representation of discrete-time signals and systems in the Z-domain, a core aspect of this outcome.

**Textbook References:**
*   **Nise, N. S. (2009). *Control Systems Engineering*. Wiley.** Chapter 9 discusses the Z-transform and transfer functions for discrete-time systems.
*   **Ogata, K. (2006). *Discrete Time Control Systems*. Pearson.** Chapter 4 is dedicated to the pulse transfer function and its derivation from difference equations.

**Example 3.1: First-Order System**
Consider a system described by the difference equation:
$y[n] - 0.5 y[n-1] = x[n]$

Taking the Z-transform:
$Y(z) - 0.5 z^{-1} Y(z) = X(z)$
$Y(z)(1 - 0.5 z^{-1}) = X(z)$
The pulse transfer function is:
$H(z) = \frac{Y(z)}{X(z)} = \frac{1}{1 - 0.5 z^{-1}}$

**Example 3.2: Second-Order System**
Consider the difference equation:
$y[n] + 2y[n-1] + y[n-2] = x[n] - x[n-1]$

Taking the Z-transform:
$Y(z) + 2z^{-1} Y(z) + z^{-2} Y(z) = X(z) - z^{-1} X(z)$
$Y(z)(1 + 2z^{-1} + z^{-2}) = X(z)(1 - z^{-1})$
The pulse transfer function is:
$H(z) = \frac{Y(z)}{X(z)} = \frac{1 - z^{-1}}{1 + 2z^{-1} + z^{-2}}$

## 4. Stability of Sampled Data Systems

The stability of a discrete-time LTI system is determined by the location of the poles of its pulse transfer function in the Z-plane.

**Definition of Stability (for discrete-time LTI systems):**
A discrete-time LTI system is **bistable** if its output is bounded for all bounded inputs. For causal systems, stability is often defined in terms of BIBO (Bounded-Input Bounded-Output) stability.

**Stability Criterion:**
A discrete-time LTI system is BIBO stable if and only if all the poles of its pulse transfer function $H(z)$ lie strictly *inside* the unit circle in the Z-plane. That is, for every pole $p_i$, $|p_i| < 1$.

**Course Outcome Alignment:**
*   **CO4 (K3):** This outcome focuses on the stability of continuous-time systems. While this module is on discrete-time systems, understanding stability criteria is a transferable concept. The stability of sampled data systems is a direct application of analyzing the poles of the pulse transfer function.

**Textbook References:**
*   **Ogata, K. (2006). *Discrete Time Control Systems*. Pearson.** Chapter 4 extensively covers system stability analysis using the Z-transform and the unit circle criterion.
*   **Nise, N. S. (2009). *Control Systems Engineering*. Wiley.** Chapter 9 discusses root locus and frequency response methods for stability analysis, which have discrete-time counterparts.

**Important Point to Remember:**
The unit circle in the Z-plane ($|z|=1$) is the boundary for stability. Poles *inside* the unit circle mean stability.

**Example 4.1: Stability Analysis**
Consider the pulse transfer function:
$H(z) = \frac{1}{1 - 0.5 z^{-1}}$
To find the poles, we can rewrite this as:
$H(z) = \frac{z}{z - 0.5}$
The pole is at $z = 0.5$. Since $|0.5| < 1$, the system is stable.

Consider the pulse transfer function:
$H(z) = \frac{1 - z^{-1}}{1 + 2z^{-1} + z^{-2}} = \frac{z(z-1)}{(z+1)^2}$
The poles are at $z = -1$ (with multiplicity 2). Since $|-1| = 1$, the poles lie on the unit circle. For simple poles on the unit circle, the system is marginally stable. However, for repeated poles on the unit circle, the system is unstable. In this case, the system is **unstable**.

**Example 4.2: Pole-Zero Plot**
For $H(z) = \frac{z - 0.5}{(z - 0.2)(z - 0.8)}$
The poles are at $z = 0.2$ and $z = 0.8$. Both poles are inside the unit circle ($|0.2| < 1$ and $|0.8| < 1$). Therefore, the system is stable.

For $H(z) = \frac{z - 0.5}{(z - 1.2)(z - 0.3)}$
The poles are at $z = 1.2$ and $z = 0.3$. The pole at $z = 1.2$ is outside the unit circle ($|1.2| > 1$). Therefore, the system is unstable.

## 5. Block Diagram Representation of Sampled Data Systems

Pulse transfer functions are used to represent the individual components of a sampled data system within a block diagram. This allows for system analysis and design using block diagram reduction techniques.

**Key Elements:**

*   **Sampling Switch:** Represents the process of sampling a continuous-time signal.
*   **Zero-Order Hold (ZOH):** A device that holds the sampled value of a signal constant between sampling instants. This is often implicitly assumed when converting continuous-time transfer functions to discrete-time.
*   **Discrete-time blocks:** Represented by their pulse transfer functions $H(z)$.
*   **Summing junctions, pick-off points:** Similar to continuous-time systems.

**Converting Continuous-Time Systems to Discrete-Time:**
A common scenario is a sampled data system with a continuous-time controller or plant described by a Laplace transfer function $G(s)$. When the output of such a system is sampled, we need to find its discrete-time equivalent, which is represented by a pulse transfer function.

If a continuous-time system has a transfer function $G(s)$, and its output is sampled by an ideal sampler and held by a Zero-Order Hold (ZOH), the equivalent discrete-time system represented by a pulse transfer function $G(z)$ can be obtained using the formula:
$$G(z) = Z\left\{\frac{1-e^{-sT}}{s} G(s)\right\}$$
where $T$ is the sampling period.

**Course Outcome Alignment:**
*   **CO3 (K3):** Understanding how to construct block diagrams with pulse transfer functions is crucial for representing and analyzing discrete-time systems, directly supporting this outcome.

**Reference:**
*   **Ogata, K. (2006). *Discrete Time Control Systems*. Pearson.** Chapter 4 discusses the conversion of continuous-time systems to discrete-time representations and their block diagram formulation.

**Example 5.1: Open-Loop Sampled Data System**
Consider a system with a continuous-time plant $G(s) = \frac{1}{s+a}$. If this plant is preceded by a ZOH and followed by a sampler, we can find its pulse transfer function $G(z)$.

$$G(z) = Z\left\{\frac{1-e^{-sT}}{s} \cdot \frac{1}{s+a}\right\}$$
Using partial fraction expansion:
$$\frac{1}{s(s+a)} = \frac{A}{s} + \frac{B}{s+a}$$
$1 = A(s+a) + Bs$
For $s=0$, $1 = Aa \implies A = 1/a$.
For $s=-a$, $1 = -Ba \implies B = -1/a$.
So, $\frac{1}{s(s+a)} = \frac{1}{a} \left(\frac{1}{s} - \frac{1}{s+a}\right)$.

$$G(z) = Z\left\{\frac{1-e^{-sT}}{a} \left(\frac{1}{s} - \frac{1}{s+a}\right)\right\}$$
$$G(z) = \frac{1-e^{-aT}}{a} Z\left\{\frac{1}{s} - \frac{1}{s+a}\right\}$$
Using Z-transform pairs: $Z\{1\} = \frac{z}{z-1}$ and $Z\{e^{-at}\} = \frac{z}{z-e^{-aT}}$.
$$G(z) = \frac{1-e^{-aT}}{a} \left(\frac{z}{z-1} - \frac{z}{z-e^{-aT}}\right)$$
$$G(z) = \frac{1-e^{-aT}}{a} z \left(\frac{1}{z-1} - \frac{1}{z-e^{-aT}}\right)$$
$$G(z) = \frac{1-e^{-aT}}{a} z \left(\frac{(z-e^{-aT}) - (z-1)}{(z-1)(z-e^{-aT})}\right)$$
$$G(z) = \frac{1-e^{-aT}}{a} z \left(\frac{1-e^{-aT}}{(z-1)(z-e^{-aT})}\right)$$
$$G(z) = \frac{(1-e^{-aT})^2}{a} \frac{z}{(z-1)(z-e^{-aT})}$$

This is the pulse transfer function of the system when the continuous-time plant is preceded by a ZOH and followed by a sampler.

## 6. Practice Questions and Exercises

**Question 1 (CO3):**
A discrete-time LTI system is described by the difference equation:
$y[n] + 0.8 y[n-1] = 0.5 x[n] + 0.2 x[n-1]$
Find the pulse transfer function $H(z)$ of this system.

**Answer 1:**
Taking the Z-transform of the difference equation:
$Y(z) + 0.8 z^{-1} Y(z) = 0.5 X(z) + 0.2 z^{-1} X(z)$
$Y(z)(1 + 0.8 z^{-1}) = X(z)(0.5 + 0.2 z^{-1})$
$H(z) = \frac{Y(z)}{X(z)} = \frac{0.5 + 0.2 z^{-1}}{1 + 0.8 z^{-1}}$

**Question 2 (CO3, CO4):**
Determine the pulse transfer function $H(z)$ and assess the stability of the system described by the impulse response $h[n] = (0.5)^n u[n]$, where $u[n]$ is the unit step function.

**Answer 2:**
The Z-transform of $h[n] = (0.5)^n u[n]$ is:
$H(z) = Z\{(0.5)^n u[n]\} = \sum_{n=0}^{\infty} (0.5)^n z^{-n}$
This is a geometric series with first term 1 and common ratio $0.5z^{-1}$. The sum converges if $|0.5z^{-1}| < 1$, which means $|z| > 0.5$.
$H(z) = \frac{1}{1 - 0.5 z^{-1}}$
To find the poles, rewrite $H(z)$ as:
$H(z) = \frac{z}{z - 0.5}$
The pole is at $z = 0.5$. Since $|0.5| < 1$, the pole lies inside the unit circle.
**Stability:** The system is **stable**.

**Question 3 (CO3, CO4):**
Consider a discrete-time system with the pulse transfer function:
$H(z) = \frac{z+1}{(z-0.7)(z-1.1)}$
Is this system stable or unstable? Explain your reasoning.

**Answer 3:**
The pulse transfer function is $H(z) = \frac{z+1}{(z-0.7)(z-1.1)}$.
The poles of the system are the roots of the denominator polynomial, which are $z = 0.7$ and $z = 1.1$.
We need to check the magnitude of each pole:
For $z = 0.7$: $|0.7| = 0.7$. Since $0.7 < 1$, this pole is inside the unit circle.
For $z = 1.1$: $|1.1| = 1.1$. Since $1.1 > 1$, this pole is outside the unit circle.

**Stability:** Since there is at least one pole outside the unit circle, the system is **unstable**.

## 7. Important Points to Remember

*   The **pulse transfer function** $H(z)$ represents the input-output relationship of a discrete-time LTI system in the Z-domain.
*   $H(z) = \frac{Y(z)}{X(z)}$ is derived from the system's difference equation or its impulse response $h[n]$.
*   The **stability** of a discrete-time LTI system is determined by the location of the poles of its pulse transfer function.
*   A system is **stable** if and only if all poles of its pulse transfer function lie strictly *inside* the unit circle in the Z-plane ($|p_i| < 1$).
*   Poles on the unit circle ($|p_i| = 1$) result in marginal stability (for simple poles) or instability (for repeated poles).
*   Poles outside the unit circle ($|p_i| > 1$) lead to instability.
*   When dealing with sampled data systems containing continuous-time components, the **Zero-Order Hold (ZOH)** is often used, and its effect must be accounted for when converting continuous-time transfer functions to discrete-time pulse transfer functions.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
