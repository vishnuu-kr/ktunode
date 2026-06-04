---
title: "Response to harmonic loading  – steady state and transient states steady sate amplitude, Dynamic magnification factor. (Numerical examples expected, but not derivations)"
subject: "DESIGN OF EARTHQUAKE RESISTANT STRUCTURES"
module: "Module 1: Introduction  – Classification of dynamic loads – essential characteristics of a dynamic problem – methods of discretization– single degree of freedom systems – basic components of a dynamic system."
branch: "Civil Engineering"
semester: 8
topicId: "689f15d056b5e963ba8119af"
status: "completed"
scrapedAt: "2026-05-20T19:02:48.123Z"
---
# DESIGN OF EARTHQUAKE RESISTANT STRUCTURES

## Module 1: Introduction

### Topic: Response to Harmonic Loading

This topic introduces how structures behave when subjected to time-varying forces, specifically harmonic (sinusoidal) loads. Understanding this is crucial for earthquake engineering as ground motion can be approximated as a series of harmonic components.

---

### 1. Classification of Dynamic Loads

Dynamic loads are forces that vary with time. They are contrasted with static loads, which remain constant or change very slowly.

*   **Periodic Loads:** Repeat themselves at regular intervals.
    *   **Harmonic Loads (Sinusoidal):** A specific type of periodic load where the variation follows a sine or cosine function. Examples include:
        *   Rotating machinery (unbalanced weights)
        *   Wave loads on offshore structures
        *   Wind gusts (can be approximated as harmonic)
        *   Seismic ground motion (can be decomposed into harmonic components)
    *   **Non-Harmonic Periodic Loads:** Periodic but not sinusoidal (e.g., square waves, triangular waves).
*   **Aperiodic Loads:** Do not repeat themselves.
    *   **Impulse Loads:** Short-duration, high-magnitude forces (e.g., impact, blast).
    *   **Sudden Loads:** Applied instantaneously but can have a longer duration than impulses.
    *   **Gradually Applied Loads:** Applied over a finite period.

---

### 2. Essential Characteristics of a Dynamic Problem

Dynamic problems involve forces that change with time, leading to motion and inertia effects.

*   **Inertia:** The resistance of an object to acceleration. This is a key characteristic distinguishing dynamic from static problems. Inertia forces are proportional to mass and acceleration ($\mathbf{F} = m\mathbf{a}$).
*   **Stiffness:** The resistance of a structure to deformation. It relates force to displacement ($\mathbf{F} = k\mathbf{x}$).
*   **Damping:** The dissipation of energy from a vibrating system. This can be due to friction, air resistance, material properties, etc. It tends to reduce the amplitude of vibrations over time.

**Key Concept:** The interplay of Inertia, Stiffness, and Damping determines the dynamic response of a structure.

---

### 3. Methods of Discretization

Real-world structures have infinite degrees of freedom (DOF). For practical analysis, we often simplify them into systems with a finite number of DOFs.

*   **Discretization:** The process of simplifying a continuous system into a discrete one.
*   **Goal:** To represent the complex behavior of a structure with a manageable number of parameters.
*   **Common Methods:**
    *   **Lumped Mass Method:** Concentrating the mass of the structure at discrete points (e.g., floors). Stiffness and damping are also lumped at these points.
        *   *Example:* Representing a multi-story building as a series of masses connected by springs and dashpots.
    *   **Finite Element Method (FEM):** A more advanced method where the structure is divided into smaller, interconnected elements. This method can capture more complex deformation patterns and is widely used in structural analysis software.

---

### 4. Single Degree of Freedom (SDOF) Systems

An SDOF system is the simplest model for representing dynamic behavior. It is characterized by a single parameter that defines its configuration.

*   **Definition:** A system whose configuration can be completely described by a single coordinate (degree of freedom).
*   **Components of an SDOF System:**
    *   **Mass (m):** Represents the inertial properties of the system.
    *   **Stiffness (k):** Represents the elastic restoring force.
    *   **Damping (c):** Represents the energy dissipation mechanisms.

    These components are typically arranged in a mass-spring-damper configuration.

*   **Equation of Motion for an SDOF System (under external force P(t)):**

    $m\ddot{x} + c\dot{x} + kx = P(t)$

    where:
    *   $m$ = mass
    *   $c$ = damping coefficient
    *   $k$ = stiffness
    *   $x$ = displacement (the single DOF)
    *   $\dot{x}$ = velocity
    *   $\ddot{x}$ = acceleration
    *   $P(t)$ = time-varying external force

---

### 5. Basic Components of a Dynamic System (SDOF Focus)

*   **Mass ($m$):**
    *   **Role:** Provides inertia. Resistance to acceleration.
    *   **Units:** kg, lb-s²/in.
    *   **In structural dynamics:** Often lumped at floor levels in buildings, representing the dead load and a portion of live load.

*   **Stiffness ($k$):**
    *   **Role:** Provides restoring force. Resistance to deformation.
    *   **Units:** N/m, lb/in.
    *   **In structural dynamics:** Derived from material properties and geometric configuration of structural elements (beams, columns, walls). For a simple spring, $F = kx$.

*   **Damping ($c$):**
    *   **Role:** Dissipates energy, reducing vibration amplitude.
    *   **Units:** N-s/m, lb-s/in.
    *   **In structural dynamics:** Can be due to various sources:
        *   **Viscous Damping:** Force proportional to velocity ($F_d = c\dot{x}$). Most common model.
        *   **Coulomb (Dry Friction) Damping:** Force proportional to static friction.
        *   **Hysteretic Damping:** Energy dissipation due to material deformation cycles (often modeled as equivalent viscous damping).
    *   **Damping Ratio ($\zeta$):** A dimensionless parameter representing the level of damping relative to critical damping.
        *   $\zeta = c / c_c$, where $c_c$ is the critical damping coefficient ($c_c = 2\sqrt{mk}$).
        *   $\zeta = 0$: Undamped system.
        *   $0 < \zeta < 1$: Underdamped system (oscillatory decay).
        *   $\zeta = 1$: Critically damped system (fastest decay without oscillation).
        *   $\zeta > 1$: Overdamped system (slow decay without oscillation).

**Important Point:** Structures are generally underdamped ($\zeta$ is typically small, around 2-5% for many buildings).

---

### Response to Harmonic Loading

When a structure is subjected to a harmonic force, its response can be analyzed in terms of steady-state and transient states.

*   **Harmonic Force:** $P(t) = P_0 \sin(\omega t)$ or $P_0 \cos(\omega t)$, where:
    *   $P_0$ = amplitude of the force
    *   $\omega$ = circular frequency of the applied force (rad/s)

*   **Natural Frequency ($\omega_n$):** The frequency at which an undamped system will oscillate if displaced and released.
    *   $\omega_n = \sqrt{k/m}$ (rad/s)
    *   $f_n = \omega_n / (2\pi)$ (Hz)

*   **Forced Vibration:** When a system is subjected to an external periodic force.

---

#### Steady State and Transient States

When a harmonic force is applied, the response of a damped system can be divided into two parts:

*   **Transient State:**
    *   **Description:** This is the initial part of the response, occurring immediately after the load is applied. During this phase, the system's motion is a combination of its natural response and the forced response. The amplitude and frequency of motion decay over time due to damping.
    *   **Characteristics:**
        *   Depends on initial conditions (initial displacement and velocity).
        *   Decays over time.
        *   Complex behavior involving both natural and forcing frequencies.
    *   **Duration:** Typically short, especially for damped systems.

*   **Steady State:**
    *   **Description:** After the transient effects have died out, the system's motion settles into a stable, continuous oscillation at the *frequency of the applied force*.
    *   **Characteristics:**
        *   Independent of initial conditions.
        *   Amplitude is constant (for a constant amplitude forcing function).
        *   Frequency is equal to the forcing frequency ($\omega$).
        *   The response is primarily determined by the stiffness, mass, damping, and the characteristics of the forcing function.

**Equation of Motion for SDOF under Harmonic Force $P(t) = P_0 \cos(\omega t)$:**

$m\ddot{x} + c\dot{x} + kx = P_0 \cos(\omega t)$

The general solution is $x(t) = x_{transient}(t) + x_{steady-state}(t)$.

---

#### Steady-State Amplitude ($X$)

This is the constant amplitude of oscillation during the steady-state response. For a damped SDOF system under harmonic loading, the steady-state displacement response can be expressed as:

$x_{ss}(t) = X \cos(\omega t - \phi)$

where:
*   $X$ is the steady-state amplitude.
*   $\phi$ is the phase angle between the applied force and the displacement.

The steady-state amplitude ($X$) is given by:

$X = \frac{P_0/k}{\sqrt{(1 - (\omega/\omega_n)^2)^2 + (2\zeta \omega/\omega_n)^2}}$

Alternatively, this can be written as:

$X = \frac{P_0/k}{\sqrt{(1 - r^2)^2 + (2\zeta r)^2}}$

where:
*   $P_0/k$ is the static deflection ($X_{st}$).
*   $r = \omega/\omega_n$ is the frequency ratio (dimensionless).

---

#### Dynamic Magnification Factor (DMF) or Amplitude Ratio (AR)

The Dynamic Magnification Factor (DMF) is a crucial parameter that quantifies how much the dynamic amplitude ($X$) exceeds the static deflection ($X_{st}$) under harmonic loading.

*   **Definition:** The ratio of the steady-state amplitude ($X$) to the static deflection ($X_{st}$) caused by the maximum force amplitude ($P_0$).

    $DMF = \frac{X}{X_{st}} = \frac{X}{P_0/k}$

*   **Formula:**
    $DMF = \frac{1}{\sqrt{(1 - r^2)^2 + (2\zeta r)^2}}$

    where $r = \omega/\omega_n$ is the frequency ratio and $\zeta$ is the damping ratio.

**Key Observations about DMF:**

1.  **Resonance:** When the forcing frequency ($\omega$) is close to the natural frequency ($\omega_n$), the frequency ratio $r \approx 1$.
    *   If damping ($\zeta$) is small, the denominator approaches zero, and the DMF becomes very large. This phenomenon is called **resonance**.
    *   At exact resonance ($r=1$) for an undamped system ($\zeta=0$), the DMF is theoretically infinite, leading to unbounded oscillations.
    *   For damped systems, at $r=1$, the DMF is $1/(2\zeta)$. The smaller $\zeta$, the larger the DMF.

2.  **Low Forcing Frequency ($r \ll 1$):** When $\omega$ is much smaller than $\omega_n$, $r$ is small.
    *   $DMF \approx \frac{1}{\sqrt{(1-0)^2 + (0)^2}} = 1$.
    *   The dynamic response is very close to the static deflection.

3.  **High Forcing Frequency ($r \gg 1$):** When $\omega$ is much larger than $\omega_n$, $r^2$ is large.
    *   $DMF \approx \frac{1}{\sqrt{(-r^2)^2}} = \frac{1}{r^2}$.
    *   The dynamic response becomes very small. The structure tends to "ignore" the rapid force changes.

4.  **Effect of Damping:**
    *   Higher damping ($\zeta$) generally reduces the DMF, especially near resonance.
    *   Damping is critical for preventing excessive amplification of vibrations.

---

### Numerical Examples

**Example 1: SDOF System Response**

A single-story building can be modeled as an SDOF system with:
*   Mass ($m$) = 10,000 kg
*   Stiffness ($k$) = 5,000,000 N/m
*   Damping ratio ($\zeta$) = 0.05 (5%)

A harmonic force with amplitude ($P_0$) = 20,000 N and frequency ($\omega$) = 10 rad/s is applied.

**Calculate:**
a) Natural frequency ($\omega_n$)
b) Static deflection ($X_{st}$)
c) Frequency ratio ($r$)
d) Steady-state amplitude ($X$)
e) Dynamic Magnification Factor (DMF)

**Solution:**

a) **Natural Frequency ($\omega_n$):**
   $\omega_n = \sqrt{k/m} = \sqrt{5,000,000 \, \text{N/m} / 10,000 \, \text{kg}}$
   $\omega_n = \sqrt{500} \, \text{rad/s} \approx 22.36 \, \text{rad/s}$

b) **Static Deflection ($X_{st}$):**
   $X_{st} = P_0 / k = 20,000 \, \text{N} / 5,000,000 \, \text{N/m}$
   $X_{st} = 0.004 \, \text{m} = 4 \, \text{mm}$

c) **Frequency Ratio ($r$):**
   $r = \omega / \omega_n = 10 \, \text{rad/s} / 22.36 \, \text{rad/s}$
   $r \approx 0.447$

d) **Steady-State Amplitude ($X$):**
   First, calculate the denominator of the DMF formula:
   $\text{Denominator} = \sqrt{(1 - r^2)^2 + (2\zeta r)^2}$
   $r^2 \approx (0.447)^2 \approx 0.200$
   $2\zeta r = 2 \times 0.05 \times 0.447 = 0.0447$

   $\text{Denominator} = \sqrt{(1 - 0.200)^2 + (0.0447)^2}$
   $\text{Denominator} = \sqrt{(0.800)^2 + (0.001998)}$
   $\text{Denominator} = \sqrt{0.640 + 0.001998} = \sqrt{0.641998} \approx 0.801$

   $X = X_{st} \times \frac{1}{\text{Denominator}}$
   $X = 0.004 \, \text{m} \times \frac{1}{0.801}$
   $X \approx 0.00499 \, \text{m} = 4.99 \, \text{mm}$

e) **Dynamic Magnification Factor (DMF):**
   $DMF = X / X_{st} = 4.99 \, \text{mm} / 4 \, \text{mm}$
   $DMF \approx 1.25$

   Alternatively, using the DMF formula directly:
   $DMF = \frac{1}{0.801} \approx 1.25$

**Interpretation:** The dynamic amplitude (4.99 mm) is about 1.25 times larger than the static deflection (4 mm) due to the applied harmonic load. This is because the forcing frequency is significantly lower than the natural frequency ($r < 1$), and damping is present.

---

**Example 2: Resonance Condition**

Consider the same SDOF system as Example 1 ($m=10,000$ kg, $k=5,000,000$ N/m, $\zeta=0.05$).
Now, a harmonic force with amplitude ($P_0$) = 20,000 N is applied at the natural frequency of the system.

**Calculate:**
a) The forcing frequency ($\omega$)
b) Steady-state amplitude ($X$)
c) Dynamic Magnification Factor (DMF)

**Solution:**

a) **Forcing Frequency ($\omega$):**
   The forcing frequency is equal to the natural frequency:
   $\omega = \omega_n \approx 22.36 \, \text{rad/s}$

b) **Frequency Ratio ($r$):**
   $r = \omega / \omega_n = 22.36 / 22.36 = 1$

c) **Dynamic Magnification Factor (DMF):**
   Using the DMF formula with $r=1$ and $\zeta=0.05$:
   $DMF = \frac{1}{\sqrt{(1 - 1^2)^2 + (2 \times 0.05 \times 1)^2}}$
   $DMF = \frac{1}{\sqrt{(0)^2 + (0.1)^2}}$
   $DMF = \frac{1}{\sqrt{0.01}}$
   $DMF = \frac{1}{0.1} = 10$

d) **Steady-State Amplitude ($X$):**
   $X = X_{st} \times DMF$
   $X_{st} = P_0 / k = 20,000 \, \text{N} / 5,000,000 \, \text{N/m} = 0.004 \, \text{m}$
   $X = 0.004 \, \text{m} \times 10 = 0.04 \, \text{m} = 40 \, \text{mm}$

**Interpretation:** At resonance ($r=1$) with 5% damping, the dynamic amplitude (40 mm) is 10 times the static deflection (4 mm). This illustrates the significant amplification of response that occurs when the forcing frequency matches the natural frequency, even with a small amount of damping.

---

### Practice Questions

1.  **Define** the terms "natural frequency" and "forcing frequency" in the context of dynamic analysis.
2.  What is the main difference between the **transient state** and the **steady-state** response of a damped system to harmonic loading?
3.  A structure can be modeled as an SDOF system with $m = 5000 \, \text{kg}$, $k = 10^7 \, \text{N/m}$, and $\zeta = 0.02$. If it is subjected to a harmonic force $P(t) = 5000 \cos(50t) \, \text{N}$:
    a) Calculate the natural frequency in Hz.
    b) Calculate the forcing frequency in Hz.
    c) Determine if resonance is likely.
    d) Calculate the static deflection.
    e) Calculate the Dynamic Magnification Factor.
    f) Calculate the steady-state amplitude.
4.  If a structure has a low damping ratio ($\zeta=0.01$) and is subjected to harmonic loading where the frequency ratio ($r$) is 0.99 (very close to resonance), what can you expect for the Dynamic Magnification Factor? Explain why.
5.  How does an increase in damping affect the steady-state amplitude of a structure subjected to harmonic loading, particularly near resonance?

---

### Answers to Practice Questions

1.  *   **Natural Frequency ($\omega_n$):** The frequency at which an undamped system will oscillate freely if disturbed from its equilibrium position. It depends on the system's mass and stiffness ($\omega_n = \sqrt{k/m}$).
    *   **Forcing Frequency ($\omega$):** The frequency of the external periodic load applied to the system.
2.  *   **Transient State:** The initial phase of the response, influenced by initial conditions and characterized by motion that decays over time due to damping, often involving both natural and forcing frequencies.
    *   **Steady-State:** The long-term response after transient effects have vanished, characterized by a constant amplitude of oscillation at the frequency of the applied force.
3.  Given: $m = 5000 \, \text{kg}$, $k = 10^7 \, \text{N/m}$, $\zeta = 0.02$, $P_0 = 5000 \, \text{N}$, $\omega = 50 \, \text{rad/s}$.
    a)  $\omega_n = \sqrt{k/m} = \sqrt{10^7 / 5000} = \sqrt{2000} \approx 44.72 \, \text{rad/s}$.
        $f_n = \omega_n / (2\pi) \approx 44.72 / (2\pi) \approx 7.12 \, \text{Hz}$.
    b)  $f = \omega / (2\pi) = 50 / (2\pi) \approx 7.96 \, \text{Hz}$.
    c)  Resonance is likely because the forcing frequency (7.96 Hz) is close to the natural frequency (7.12 Hz).
    d)  $X_{st} = P_0 / k = 5000 \, \text{N} / 10^7 \, \text{N/m} = 0.0005 \, \text{m} = 0.5 \, \text{mm}$.
    e)  $r = \omega / \omega_n = 50 / 44.72 \approx 1.118$.
        $DMF = \frac{1}{\sqrt{(1 - r^2)^2 + (2\zeta r)^2}} = \frac{1}{\sqrt{(1 - 1.118^2)^2 + (2 \times 0.02 \times 1.118)^2}}$
        $DMF = \frac{1}{\sqrt{(1 - 1.250)^2 + (0.0447)^2}} = \frac{1}{\sqrt{(-0.250)^2 + 0.001998}}$
        $DMF = \frac{1}{\sqrt{0.0625 + 0.001998}} = \frac{1}{\sqrt{0.064498}} \approx \frac{1}{0.254} \approx 3.94$.
    f)  $X = X_{st} \times DMF = 0.5 \, \text{mm} \times 3.94 \approx 1.97 \, \text{mm}$.
4.  If $\zeta=0.01$ and $r \approx 0.99$, the DMF will be very high. The denominator of the DMF formula is $\sqrt{(1-r^2)^2 + (2\zeta r)^2}$. When $r \approx 1$, $(1-r^2)^2$ is very small. The dominant term becomes $(2\zeta r)^2$. With $\zeta = 0.01$, $2\zeta r \approx 0.02$. So the denominator is approximately $\sqrt{0 + (0.02)^2} = 0.02$. This results in a DMF of $1/0.02 = 50$, indicating a massive amplification of the static deflection.
5.  An increase in damping generally **reduces** the steady-state amplitude. This effect is most pronounced when the system is near resonance ($r \approx 1$). Higher damping dissipates more energy, preventing the amplitude from building up to the high levels seen in lightly damped systems at resonance.

---

### Important Points to Remember

*   **Dynamic Loads** involve time variation and inertia.
*   **Inertia ($m$), Stiffness ($k$), and Damping ($c$)** are the fundamental properties governing dynamic response.
*   **SDOF systems** are the simplest dynamic models, useful for understanding basic principles.
*   **Harmonic loading** is a fundamental type of dynamic load, often used for analysis.
*   **Resonance** occurs when the forcing frequency is close to the natural frequency, leading to potentially large amplification of motion, especially with low damping.
*   The **Dynamic Magnification Factor (DMF)** quantifies this amplification and is highly dependent on the frequency ratio ($r = \omega/\omega_n$) and the damping ratio ($\zeta$).
*   **Damping** is essential for controlling vibrations and preventing structural failure during dynamic events like earthquakes.
