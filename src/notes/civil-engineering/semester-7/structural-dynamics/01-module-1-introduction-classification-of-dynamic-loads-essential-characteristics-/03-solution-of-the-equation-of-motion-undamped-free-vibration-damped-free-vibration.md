---
title: "Solution of the equation of motion – undamped free vibration – damped free vibration- critically damped under damped and over damped SDOF systems, Logarithmic decrement."
subject: "STRUCTURAL DYNAMICS"
module: "Module 1: Introduction  – Classification of dynamic loads – essential characteristics of a dynamic problem – methods of discretization– single degree of freedom systems – basic components of a dynamic system."
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba811417"
status: "completed"
scrapedAt: "2026-05-20T19:01:35.972Z"
---
# Structural Dynamics: Module 1 - Introduction & SDOF Systems - Solution of the Equation of Motion

This module introduces the fundamental concepts of structural dynamics, focusing on the behavior of Single Degree of Freedom (SDOF) systems subjected to dynamic loads. We will explore how to formulate and solve the equations of motion for these systems.

---

## 1. Introduction to Structural Dynamics

Structural dynamics is the study of the response of structures to time-varying loads. Unlike static analysis where loads are applied slowly and their effects are constant, dynamic analysis considers the inertia and damping effects of the structure.

### 1.1 Classification of Dynamic Loads

Dynamic loads can be classified based on their characteristics:

*   **Transient Loads:** Loads that are applied for a short duration and then disappear.
    *   **Impact Loads:** Sudden application of force (e.g., dropping a weight, car crash).
    *   **Blast Loads:** Rapid pressure wave (e.g., explosions).
    *   **Earthquake Loads:** Ground motion causing inertial forces in the structure.
*   **Periodic Loads:** Loads that repeat themselves over time.
    *   **Harmonic Loads:** Loads that vary sinusoidally with time (e.g., machinery vibrations, wind gusts).
    *   **Non-Harmonic Periodic Loads:** Loads with repeating patterns but not necessarily sinusoidal (e.g., square waves, triangular waves).
*   **Random Loads:** Loads whose future behavior cannot be predicted precisely, but their statistical properties can be described (e.g., turbulent wind, ocean waves).

### 1.2 Essential Characteristics of a Dynamic Problem

A dynamic problem in structural analysis involves several key characteristics:

*   **Time-Varying Loads:** The applied loads change with time.
*   **Inertia Forces:** Due to the mass of the structure and its acceleration, inertial forces arise ($F_{inertia} = ma$). These forces resist changes in motion.
*   **Damping Forces:** Forces that dissipate energy from the system, usually due to friction or internal material properties. These forces oppose motion.
*   **Stiffness:** The inherent resistance of the structure to deformation.
*   **Vibration:** The oscillatory motion of the structure about its equilibrium position.

### 1.3 Methods of Discretization

In reality, structures have infinite degrees of freedom. However, for practical analysis, we often simplify them into systems with a finite number of degrees of freedom. This process is called **discretization**.

*   **Single Degree of Freedom (SDOF) System:** A system that can be completely described by a single coordinate. This is the simplest model, often representing a concentrated mass at the end of a massless beam or a single story building.
*   **Multi-Degree of Freedom (MDOF) System:** A system that requires multiple coordinates to describe its motion. This is a more realistic representation of complex structures.
*   **Finite Element Method (FEM):** A powerful numerical technique where the continuous structure is divided into smaller, interconnected elements. The behavior of each element is approximated, and these are assembled to represent the entire structure. This allows for the analysis of MDOF systems.

### 1.4 Single Degree of Freedom (SDOF) Systems

An SDOF system is the foundational concept in structural dynamics. It's a simplified model where the displacement of the structure can be described by a single variable.

**Example:**
Imagine a simple mass ($m$) attached to a spring with stiffness ($k$) and a dashpot with damping coefficient ($c$). The displacement of the mass ($u$) from its equilibrium position is the single degree of freedom.

### 1.5 Basic Components of a Dynamic System

A basic dynamic system, especially in the context of SDOF, consists of three fundamental components:

*   **Mass ($m$):** Represents the inertia of the system. It resists acceleration.
*   **Stiffness ($k$):** Represents the elastic resistance of the system to deformation. It's the force required to produce a unit displacement.
*   **Damping ($c$):** Represents the energy dissipation mechanisms within the system. It opposes the velocity of motion.

---

## 2. Solution of the Equation of Motion

The behavior of a dynamic system is governed by its equation of motion, which relates the forces acting on the system to its motion. For an SDOF system, this equation is derived from Newton's second law of motion:

**Sum of forces = mass × acceleration**

Considering the forces of inertia, damping, and stiffness, the general equation of motion for an SDOF system is:

$$m\ddot{u}(t) + c\dot{u}(t) + ku(t) = P(t)$$

Where:
*   $m$ = mass
*   $c$ = damping coefficient
*   $k$ = stiffness
*   $u(t)$ = displacement at time $t$
*   $\dot{u}(t)$ = velocity at time $t$
*   $\ddot{u}(t)$ = acceleration at time $t$
*   $P(t)$ = external forcing function

### 2.1 Undamped Free Vibration

This occurs when there is no damping ($c=0$) and no external force ($P(t)=0$). The system oscillates due to initial displacement or velocity.

The equation of motion simplifies to:

$$m\ddot{u}(t) + ku(t) = 0$$

Rearranging:

$$\ddot{u}(t) + \frac{k}{m}u(t) = 0$$

We define the **natural circular frequency** ($\omega_n$) as:

$$\omega_n = \sqrt{\frac{k}{m}}$$

The equation becomes:

$$\ddot{u}(t) + \omega_n^2 u(t) = 0$$

This is a standard second-order linear homogeneous differential equation. The general solution is:

$$u(t) = A \cos(\omega_n t) + B \sin(\omega_n t)$$

Alternatively, it can be expressed as:

$$u(t) = C \cos(\omega_n t - \phi)$$

Where:
*   $A$, $B$, $C$ are constants determined by initial conditions.
*   $\phi$ is the phase angle.

The **natural frequency** ($f_n$) is the frequency of oscillation in Hz:

$$f_n = \frac{\omega_n}{2\pi} = \frac{1}{2\pi}\sqrt{\frac{k}{m}}$$

**Initial Conditions:**
*   If the system is released from an initial displacement $u_0$ with zero initial velocity ($\dot{u}(0) = 0$), then:
    $u(t) = u_0 \cos(\omega_n t)$
*   If the system is given an initial velocity $\dot{u}_0$ with zero initial displacement ($u(0) = 0$), then:
    $u(t) = \frac{\dot{u}_0}{\omega_n} \sin(\omega_n t)$

**Key Concept: Natural Frequency**
The natural frequency ($\omega_n$) is an inherent property of the SDOF system, determined solely by its mass ($m$) and stiffness ($k$). It's the frequency at which the system will oscillate if disturbed from equilibrium and allowed to vibrate freely without damping.

---

### 2.2 Damped Free Vibration

This occurs when there is damping ($c>0$) and no external force ($P(t)=0$). The damping forces dissipate energy, causing the oscillations to decay over time.

The equation of motion is:

$$m\ddot{u}(t) + c\dot{u}(t) + ku(t) = 0$$

To solve this, we assume a solution of the form $u(t) = e^{rt}$, where $r$ is a constant. Substituting this into the equation, we get the characteristic equation:

$$mr^2 + cr + k = 0$$

Solving for $r$ using the quadratic formula:

$$r = \frac{-c \pm \sqrt{c^2 - 4mk}}{2m}$$

$$r = -\frac{c}{2m} \pm \sqrt{\left(\frac{c}{2m}\right)^2 - \frac{k}{m}}$$

We define the following terms:

*   **Damping Ratio ($\xi$):** A dimensionless parameter representing the level of damping relative to critical damping.
    $$\xi = \frac{c}{c_c} = \frac{c}{2\sqrt{mk}} = \frac{c}{2m\omega_n}$$
    Therefore, $\frac{c}{2m} = \xi \omega_n$.

*   **Critical Damping Coefficient ($c_c$):** The minimum damping required to prevent oscillation.
    $$c_c = 2\sqrt{mk} = 2m\omega_n$$

The roots can now be written as:

$$r = -\xi \omega_n \pm \sqrt{(\xi \omega_n)^2 - \omega_n^2}$$

$$r = -\xi \omega_n \pm \omega_n \sqrt{\xi^2 - 1}$$

The nature of the solution depends on the value of the damping ratio $\xi$:

#### 2.2.1 Critically Damped ($\xi = 1$)

*   **Condition:** $\xi = 1 \implies c = c_c = 2\sqrt{mk}$
*   **Roots:** $r = -\xi \omega_n = -\omega_n$ (repeated real root)
*   **Solution:** The system returns to equilibrium as quickly as possible without oscillating.
    $$u(t) = (A + Bt)e^{-\omega_n t}$$
    Where $A$ and $B$ are determined by initial conditions.

#### 2.2.2 Underdamped ($\xi < 1$)

*   **Condition:** $\xi < 1 \implies c < c_c$
*   **Roots:** The term under the square root is negative.
    $$r = -\xi \omega_n \pm i \omega_n \sqrt{1 - \xi^2}$$
*   **Solution:** The system oscillates with a decaying amplitude.
    $$u(t) = e^{-\xi \omega_n t} (A \cos(\omega_d t) + B \sin(\omega_d t))$$
    This can also be written as:
    $$u(t) = C e^{-\xi \omega_n t} \cos(\omega_d t - \phi)$$
    Where:
    *   $\omega_d = \omega_n \sqrt{1 - \xi^2}$ is the **damped natural frequency**.

**Key Concept: Damped Natural Frequency**
The damped natural frequency ($\omega_d$) is the frequency at which an underdamped system oscillates. It is always less than the undamped natural frequency ($\omega_n$).

#### 2.2.3 Overdamped ($\xi > 1$)

*   **Condition:** $\xi > 1 \implies c > c_c$
*   **Roots:** The term under the square root is positive, leading to two distinct real negative roots.
    $$r_1 = -\xi \omega_n + \omega_n \sqrt{\xi^2 - 1}$$
    $$r_2 = -\xi \omega_n - \omega_n \sqrt{\xi^2 - 1}$$
*   **Solution:** The system returns to equilibrium slowly without oscillating.
    $$u(t) = Ae^{r_1 t} + Be^{r_2 t}$$
    Where $A$ and $B$ are determined by initial conditions.

---

### 2.3 Logarithmic Decrement ($\delta$)

Logarithmic decrement is a measure of the rate of decay of oscillations in an underdamped system. It is defined as the natural logarithm of the ratio of two successive amplitudes separated by one period of oscillation.

For an underdamped system, the displacement is given by:
$u(t) = C e^{-\xi \omega_n t} \cos(\omega_d t - \phi)$

Let $u_1$ be the amplitude at time $t_1$, and $u_2$ be the amplitude at time $t_1 + T_d$, where $T_d$ is the period of damped oscillation ($T_d = \frac{2\pi}{\omega_d}$).

$u_1 = C e^{-\xi \omega_n t_1}$
$u_2 = C e^{-\xi \omega_n (t_1 + T_d)}$

The logarithmic decrement ($\delta$) is:

$$\delta = \ln\left(\frac{u_1}{u_2}\right) = \ln\left(\frac{C e^{-\xi \omega_n t_1}}{C e^{-\xi \omega_n (t_1 + T_d)}}\right)$$

$$\delta = \ln\left(e^{\xi \omega_n T_d}\right) = \xi \omega_n T_d$$

Substitute $T_d = \frac{2\pi}{\omega_d}$:

$$\delta = \xi \omega_n \frac{2\pi}{\omega_n \sqrt{1 - \xi^2}} = \frac{2\pi \xi}{\sqrt{1 - \xi^2}}$$

**Key Relationship:**
If we know the logarithmic decrement ($\delta$), we can determine the damping ratio ($\xi$):

$$\delta^2 = (2\pi)^2 \frac{\xi^2}{1 - \xi^2}$$
$$\delta^2 (1 - \xi^2) = 4\pi^2 \xi^2$$
$$\delta^2 = \xi^2 (\delta^2 + 4\pi^2)$$
$$\xi^2 = \frac{\delta^2}{4\pi^2 + \delta^2}$$
$$\xi = \frac{\delta}{\sqrt{4\pi^2 + \delta^2}}$$

For small damping ratios ($\xi \ll 1$), $\delta \approx 2\pi \xi$. This simplified relationship is often used.

**Practical Application:**
Logarithmic decrement can be measured experimentally by observing the decay of free vibrations. This allows engineers to estimate the damping ratio of a structure.

---

## 3. Practice Questions and Answers

**Question 1:**
A SDOF system has a mass of 1000 kg and a stiffness of $2 \times 10^6$ N/m. Calculate its natural circular frequency and natural frequency.

**Answer 1:**
*   Natural circular frequency ($\omega_n$):
    $\omega_n = \sqrt{\frac{k}{m}} = \sqrt{\frac{2 \times 10^6 \text{ N/m}}{1000 \text{ kg}}} = \sqrt{2000} \text{ rad/s} \approx 44.72 \text{ rad/s}$
*   Natural frequency ($f_n$):
    $f_n = \frac{\omega_n}{2\pi} = \frac{44.72}{2\pi} \approx 7.12 \text{ Hz}$

**Question 2:**
An underdamped SDOF system is observed to have successive amplitudes of displacement as 5 cm and 2 cm. Calculate the logarithmic decrement and the damping ratio.

**Answer 2:**
*   Logarithmic decrement ($\delta$):
    $\delta = \ln\left(\frac{5 \text{ cm}}{2 \text{ cm}}\right) = \ln(2.5) \approx 0.916$
*   Damping ratio ($\xi$):
    Using the simplified formula for small damping:
    $\xi \approx \frac{\delta}{2\pi} = \frac{0.916}{2\pi} \approx 0.146$

    Using the exact formula:
    $\xi = \frac{\delta}{\sqrt{4\pi^2 + \delta^2}} = \frac{0.916}{\sqrt{4\pi^2 + (0.916)^2}} = \frac{0.916}{\sqrt{39.48 + 0.839}} = \frac{0.916}{\sqrt{40.32}} = \frac{0.916}{6.35} \approx 0.144$
    (The exact formula is preferred for accuracy)

**Question 3:**
Describe the motion of an SDOF system when its damping ratio is (a) $\xi = 0.05$, (b) $\xi = 1.0$, and (c) $\xi = 2.0$.

**Answer 3:**
*   **(a) $\xi = 0.05$ (Underdamped):** The system will oscillate with a decaying amplitude. The oscillations will persist for a noticeable duration before the amplitude reduces to negligible levels. The frequency of oscillation will be slightly less than the natural frequency.
*   **(b) $\xi = 1.0$ (Critically Damped):** The system will return to its equilibrium position as quickly as possible without any oscillation. There will be no overshoot or undershoot.
*   **(c) $\xi = 2.0$ (Overdamped):** The system will return to its equilibrium position without oscillating, but it will do so more slowly than a critically damped system. The motion is sluggish.

---

## 4. Important Points to Remember

*   **Dynamic loads** cause time-dependent responses, involving inertia and damping.
*   An **SDOF system** simplifies a structure to a single coordinate, typically representing mass, stiffness, and damping.
*   The **natural frequency ($\omega_n$)** is an intrinsic property of an SDOF system, determined by its mass and stiffness.
*   The **equation of motion** for an SDOF system is $m\ddot{u} + c\dot{u} + ku = P(t)$.
*   **Undamped free vibration** results in simple harmonic motion at the natural frequency.
*   **Damped free vibration** is characterized by the damping ratio ($\xi$).
    *   **Underdamped ($\xi < 1$):** Oscillatory decay. Damped natural frequency $\omega_d = \omega_n \sqrt{1 - \xi^2}$.
    *   **Critically Damped ($\xi = 1$):** Fastest return to equilibrium without oscillation.
    *   **Overdamped ($\xi > 1$):** Slow, non-oscillatory return to equilibrium.
*   **Logarithmic decrement ($\delta$)** quantifies the decay rate of oscillations in underdamped systems and can be used to estimate the damping ratio.

---
