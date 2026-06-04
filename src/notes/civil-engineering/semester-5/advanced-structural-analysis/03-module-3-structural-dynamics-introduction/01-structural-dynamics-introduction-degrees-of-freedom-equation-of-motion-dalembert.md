---
title: "Structural dynamics:  Introduction - degrees of freedom - equation of motion, D’Alembert’s principle-damping- free response of damped and undamped systems- logarithmic decrement-- single degree of freedom systems subjected to harmonic load - transient and steady state responses, simple portal frame problems."
subject: "ADVANCED STRUCTURAL ANALYSIS"
module: "Module 3: Structural dynamics:  Introduction "
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810e70"
status: "completed"
scrapedAt: "2026-05-20T18:47:18.179Z"
---
# ADVANCED STRUCTURAL ANALYSIS - Module 3: Structural Dynamics: Introduction

This module introduces the fundamental concepts of structural dynamics, focusing on the behavior of structures under time-varying loads. We will explore how structures vibrate and the factors influencing these vibrations.

## 1. Introduction to Structural Dynamics

Structural dynamics is the study of the behavior of structures subjected to time-dependent loads. These loads can include earthquakes, wind gusts, machinery vibrations, traffic loads, and impact loads. Unlike static analysis, where loads are applied gradually, dynamic analysis considers the inertia and damping effects of the structure.

### Key Concepts:

*   **Time-Dependent Loads:** Loads that vary with time.
*   **Inertia Forces:** Forces arising from the mass of the structure resisting acceleration.
*   **Damping Forces:** Forces that dissipate energy from the vibrating system, typically due to friction or material properties.
*   **Vibration:** The oscillatory motion of a structure about its equilibrium position.
*   **Natural Frequency:** The frequency at which a system will oscillate if disturbed from its equilibrium position and allowed to vibrate freely without any damping or external forcing.
*   **Mode Shapes:** The characteristic deformed shape of a structure during free vibration at a specific natural frequency.

### Why is Structural Dynamics Important?

*   **Resonance:** Structures can experience dangerously large displacements and stresses if the frequency of the applied load matches the structure's natural frequency.
*   **Performance under Dynamic Loads:** Designing structures to withstand dynamic forces like earthquakes and wind requires understanding their dynamic response.
*   **Vibration Control:** Identifying and mitigating unwanted vibrations in buildings, bridges, and machinery.

---

## 2. Degrees of Freedom (DOF)

**Definition:** A degree of freedom (DOF) is the minimum number of independent coordinates required to completely describe the position and configuration of a system at any instant in time.

### Types of DOF:

*   **Translational DOF:** Movement along a specific axis (e.g., x, y, z directions).
*   **Rotational DOF:** Rotation about a specific axis (e.g., rotation about x, y, z axes).

### Single Degree of Freedom (SDOF) Systems:

A system is considered SDOF if its motion can be described by a single coordinate.

**Examples:**

*   **Mass on a Spring:** The displacement of the mass ($x$) is the single DOF.
*   **Cantilever Beam with a Concentrated Mass at the Tip:** The lateral deflection of the tip mass ($y$) is the primary DOF.
*   **Simple Portal Frame:** For preliminary analysis, we often idealize a portal frame as an SDOF system by considering the lateral displacement of the top beam as the primary DOF.

**Example of a Simple Portal Frame as SDOF:**

Consider a portal frame with fixed bases. When subjected to a lateral load at the top, the primary motion is the horizontal displacement of the top beam. We can represent this displacement by a single coordinate, $u$.

```
     ______
    |      |
    |      |
   /        \
  /          \
 /            \
------------------
```

In this simplified model, all points on the top beam are assumed to move horizontally by the same amount $u$. The bending deformation of the columns and the beam is implicitly captured within this single DOF.

### Multi-Degree of Freedom (MDOF) Systems:

A system requiring more than one coordinate to describe its motion.

**Example:**

*   A multi-story building where each floor can have independent horizontal displacement.

---

## 3. Equation of Motion (EOM)

The Equation of Motion (EOM) mathematically describes the dynamic behavior of a system. It's based on Newton's Second Law of Motion ($F = ma$). For a vibrating system, the forces acting are typically:

1.  **Inertial Force ($F_i$):**  Related to mass and acceleration.
2.  **Damping Force ($F_d$):** Related to velocity and damping coefficient.
3.  **Stiffness Force ($F_k$):** Related to displacement and stiffness.
4.  **External Applied Force ($F(t)$):** The time-varying load acting on the system.

For an SDOF system, the general form of the EOM is:

$m\ddot{u}(t) + c\dot{u}(t) + ku(t) = F(t)$

Where:

*   $m$: Mass of the system (or effective mass)
*   $\ddot{u}(t)$: Acceleration of the system (second derivative of displacement with respect to time)
*   $c$: Damping coefficient (measures the resistance to motion proportional to velocity)
*   $\dot{u}(t)$: Velocity of the system (first derivative of displacement with respect to time)
*   $k$: Stiffness of the system (force required to produce unit displacement)
*   $u(t)$: Displacement of the system (the DOF)
*   $F(t)$: External applied force as a function of time

### Deriving the EOM for an SDOF System (e.g., Mass-Spring-Damper):

Consider a mass ($m$) attached to a spring ($k$) and a dashpot ($c$). Let $u(t)$ be the displacement from the equilibrium position.

*   **Inertial Force:** $F_i = m \times \text{acceleration} = m\ddot{u}(t)$ (acting opposite to acceleration)
*   **Damping Force:** $F_d = c \times \text{velocity} = c\dot{u}(t)$ (acting opposite to velocity)
*   **Stiffness Force (Spring Force):** $F_k = k \times \text{displacement} = ku(t)$ (acting opposite to displacement, restoring force)

Applying Newton's Second Law (sum of forces = mass x acceleration), and considering forces acting on the mass:

$\sum F = m \times \text{acceleration}$

If we consider the acceleration direction as positive:

$F(t) - ku(t) - c\dot{u}(t) = m\ddot{u}(t)$

Rearranging the terms to match the standard form:

$m\ddot{u}(t) + c\dot{u}(t) + ku(t) = F(t)$

---

## 4. D’Alembert’s Principle

**Definition:** D’Alembert’s Principle is a method for converting dynamic equilibrium problems into static equilibrium problems. It states that the resultant of the applied forces, the resultant of the inertia forces, and the resultant of the constraint forces are in equilibrium.

In essence, it involves treating the inertia force ($m\ddot{u}$) as an "inertial force" acting in the opposite direction of the acceleration. This transforms the dynamic equation of motion into a static-like equation.

**Application to the EOM:**

From the EOM: $m\ddot{u}(t) + c\dot{u}(t) + ku(t) = F(t)$

We can rewrite it as:

$F(t) - m\ddot{u}(t) - c\dot{u}(t) - ku(t) = 0$

Here, $-m\ddot{u}(t)$ is the "effective inertia force" acting in the direction opposite to the acceleration. This allows us to consider the system in a state of "dynamic equilibrium."

**Benefits:**

*   Simplifies the visualization and analysis of dynamic problems by relating them to static concepts.
*   Useful for analyzing forces within a system at a specific instant.

---

## 5. Damping

**Definition:** Damping is the dissipation of energy from a vibrating system. It causes the amplitude of vibrations to decrease over time. Damping is crucial in structural dynamics as it limits excessive vibrations and prevents resonance.

### Types of Damping:

*   **Viscous Damping:** The damping force is proportional to the velocity of the system. This is the most common type considered in structural dynamics and is represented by the term $c\dot{u}(t)$ in the EOM.
    *   $F_d = c\dot{u}(t)$
*   **Coulomb Damping (Dry Friction Damping):** The damping force is constant in magnitude and opposite to the direction of motion. It arises from friction between dry surfaces.
*   **Hysteretic Damping (Material Damping):** Energy loss within the material itself during cyclic deformation. This is often modeled as a force proportional to displacement but with a phase lag, or by modifying the stiffness to be complex.
*   **Structural Damping:** A combination of various damping mechanisms present in a structure.

### Damping Ratio ($\zeta$) and Critical Damping Coefficient ($c_c$):

For viscous damping, we often use the damping ratio ($\zeta$) to normalize the damping coefficient.

**Critical Damping Coefficient ($c_c$):** The minimum damping coefficient that will prevent oscillation. For an SDOF system, $c_c = 2\sqrt{mk}$.

**Damping Ratio ($\zeta$):** The ratio of the actual damping coefficient ($c$) to the critical damping coefficient ($c_c$).

$\zeta = \frac{c}{c_c} = \frac{c}{2\sqrt{mk}}$

The damping ratio is a dimensionless quantity.

---

## 6. Free Response of Damped and Undamped Systems

The free response describes how a system vibrates after being disturbed from its equilibrium position and then left to vibrate on its own without any external forcing ($F(t) = 0$).

The governing equation is: $m\ddot{u}(t) + c\dot{u}(t) + ku(t) = 0$

### 6.1. Undamped Free Response ($c=0$)

The equation becomes: $m\ddot{u}(t) + ku(t) = 0$

This is a second-order linear homogeneous differential equation. We can rewrite it in terms of natural frequency.

**Natural Circular Frequency ($\omega_n$):**
$\omega_n = \sqrt{\frac{k}{m}}$

The equation becomes: $\ddot{u}(t) + \omega_n^2 u(t) = 0$

The solution to this equation is of the form:
$u(t) = A \cos(\omega_n t) + B \sin(\omega_n t)$
or
$u(t) = C \cos(\omega_n t - \phi)$

Where:
*   $A, B, C, \phi$ are constants determined by initial conditions (initial displacement and velocity).
*   $\omega_n$ is the natural circular frequency (radians per second).
*   $f_n = \frac{\omega_n}{2\pi}$ is the natural frequency (Hertz or cycles per second).

**Characteristics of Undamped Free Response:**
*   The vibration continues indefinitely with constant amplitude.
*   The motion is purely harmonic.

**Example:** Imagine pulling a pendulum and releasing it in a vacuum; it would swing forever.

### 6.2. Damped Free Response ($c > 0$)

The equation is: $m\ddot{u}(t) + c\dot{u}(t) + ku(t) = 0$

We can rewrite this in terms of $\omega_n$ and $\zeta$:
$\ddot{u}(t) + \frac{c}{m}\dot{u}(t) + \frac{k}{m}u(t) = 0$
$\ddot{u}(t) + 2\frac{c}{2\sqrt{mk}}\sqrt{\frac{k}{m}}\dot{u}(t) + \omega_n^2 u(t) = 0$
$\ddot{u}(t) + 2\zeta\omega_n\dot{u}(t) + \omega_n^2 u(t) = 0$

The nature of the solution depends on the value of the damping ratio $\zeta$:

#### 6.2.1. Underdamped System ($\zeta < 1$)

*   **Condition:** $c < c_c$ (actual damping is less than critical damping).
*   **Behavior:** The system oscillates, but the amplitude of oscillation decays exponentially with time.
*   **Solution:**
    $u(t) = e^{-\zeta \omega_n t} (A \cos(\omega_d t) + B \sin(\omega_d t))$
    or
    $u(t) = C e^{-\zeta \omega_n t} \cos(\omega_d t - \phi)$
    Where:
    *   $\omega_d = \omega_n \sqrt{1 - \zeta^2}$ is the damped natural frequency.
    *   The term $e^{-\zeta \omega_n t}$ represents the decaying amplitude envelope.

**Example:** A typical building structure during moderate wind or a small earthquake.

#### 6.2.2. Critically Damped System ($\zeta = 1$)

*   **Condition:** $c = c_c$ (actual damping equals critical damping).
*   **Behavior:** The system returns to its equilibrium position as quickly as possible without oscillating.
*   **Solution:**
    $u(t) = (A + Bt)e^{-\omega_n t}$

**Example:** The shock absorber in a car returning the chassis to equilibrium smoothly without bouncing.

#### 6.2.3. Overdamped System ($\zeta > 1$)

*   **Condition:** $c > c_c$ (actual damping is greater than critical damping).
*   **Behavior:** The system returns to its equilibrium position slowly without oscillating. It takes longer to reach equilibrium compared to the critically damped case.
*   **Solution:**
    $u(t) = e^{-\zeta \omega_n t} (A e^{(\sqrt{\zeta^2-1})\omega_n t} + B e^{-(\sqrt{\zeta^2-1})\omega_n t})$
    or
    $u(t) = e^{-\zeta \omega_n t} (C_1 e^{\lambda_1 t} + C_2 e^{\lambda_2 t})$
    Where $\lambda_1$ and $\lambda_2$ are real, negative roots.

**Example:** A heavy door with strong hinges that closes slowly without swinging.

---

## 7. Logarithmic Decrement ($\delta$)

**Definition:** Logarithmic decrement is a measure of the rate at which the amplitude of free vibrations decays in an underdamped system. It is defined as the natural logarithm of the ratio of two successive amplitudes of oscillation.

**Formula:**
$\delta = \ln \left( \frac{u_1}{u_2} \right)$

Where:
*   $u_1$: Amplitude of oscillation at time $t_1$.
*   $u_2$: Amplitude of oscillation at time $t_1 + T_d$, where $T_d$ is the period of damped oscillation.

For an underdamped system, the amplitude decays exponentially: $u(t) = u_0 e^{-\zeta \omega_n t}$.
The ratio of successive amplitudes separated by one period $T_d = \frac{2\pi}{\omega_d}$ is:

$\frac{u(t)}{u(t+T_d)} = \frac{u_0 e^{-\zeta \omega_n t}}{u_0 e^{-\zeta \omega_n (t+T_d)}} = e^{\zeta \omega_n T_d}$

So, $\delta = \ln \left( e^{\zeta \omega_n T_d} \right) = \zeta \omega_n T_d$

Substituting $T_d = \frac{2\pi}{\omega_d}$ and $\omega_d = \omega_n \sqrt{1 - \zeta^2}$:
$\delta = \zeta \omega_n \frac{2\pi}{\omega_n \sqrt{1 - \zeta^2}} = \frac{2\pi \zeta}{\sqrt{1 - \zeta^2}}$

Alternatively, if $\zeta$ is small (which is common in many structural systems), $\sqrt{1 - \zeta^2} \approx 1$, so:
$\delta \approx 2\pi \zeta$

**Significance:**
*   Allows estimation of the damping ratio ($\zeta$) from experimental measurements of vibration decay.
*   Provides a quantitative measure of damping.

**Practice Question 1:**
An SDOF system with mass $m=1000$ kg and stiffness $k=50000$ N/m is observed to have successive amplitudes of free vibration decrease from $u_1 = 0.02$ m to $u_2 = 0.015$ m.
a) Calculate the logarithmic decrement.
b) Estimate the damping ratio $\zeta$.
c) Calculate the critical damping coefficient $c_c$.

**Answers:**
a) $\delta = \ln\left(\frac{0.015}{0.02}\right) = \ln(0.75) \approx -0.2877$
Wait, the amplitude is decreasing, so $u_1/u_2$ should be greater than 1. Let's assume $u_1 = 0.02$ and $u_2 = 0.015$ represent amplitude values, not necessarily the first and second peak.
Let's rephrase: The amplitude of free vibration reduces from 0.02m to 0.015m over one period.
$\delta = \ln\left(\frac{0.02}{0.015}\right) = \ln\left(\frac{4}{3}\right) \approx 0.2877$

b) Using the approximation $\delta \approx 2\pi \zeta$:
$0.2877 \approx 2\pi \zeta \implies \zeta \approx \frac{0.2877}{2\pi} \approx 0.0458$

Let's check using the exact formula:
$\delta = \frac{2\pi \zeta}{\sqrt{1 - \zeta^2}}$
$0.2877 = \frac{2\pi \zeta}{\sqrt{1 - \zeta^2}}$
Squaring both sides and rearranging can be complex. A better approach is to solve for $\zeta$ iteratively or by plotting. However, for small $\zeta$, the approximation is good.

c) $\omega_n = \sqrt{\frac{k}{m}} = \sqrt{\frac{50000}{1000}} = \sqrt{50} \approx 7.071$ rad/s
$c_c = 2\sqrt{mk} = 2\sqrt{1000 \times 50000} = 2\sqrt{5 \times 10^7} = 2 \times 7071.06 \approx 14142$ Ns/m

---

## 8. Single Degree of Freedom Systems Subjected to Harmonic Load

A harmonic load is a sinusoidal load that varies with time.
$F(t) = F_0 \sin(\omega t)$ or $F(t) = F_0 \cos(\omega t)$

Where:
*   $F_0$: Amplitude of the forcing function.
*   $\omega$: Circular frequency of the forcing function.

The equation of motion is:
$m\ddot{u}(t) + c\dot{u}(t) + ku(t) = F_0 \sin(\omega t)$

The response of the system to this harmonic load consists of two parts:
1.  **Transient Response:** This part depends on the initial conditions and decays over time due to damping.
2.  **Steady-State Response:** This part persists as long as the forcing function is applied and has the same frequency as the forcing function.

### 8.1. Transient and Steady State Responses

**General Solution:**
$u(t) = u_{transient}(t) + u_{steady-state}(t)$

**Transient Response:**
This part of the solution is essentially the free vibration response (obtained when $F(t)=0$) but with coefficients determined by initial conditions and the parameters of the system ($\zeta$, $\omega_n$). For an underdamped system, it will be of the form $e^{-\zeta \omega_n t} (\dots)$.

**Steady-State Response:**
This is the response that remains after the transient effects have died out. For a harmonic forcing function $F(t) = F_0 \sin(\omega t)$, the steady-state response is also harmonic and can be expressed as:
$u_{ss}(t) = X \sin(\omega t - \phi)$

Where:
*   $X$: Amplitude of the steady-state response.
*   $\phi$: Phase lag between the forcing function and the response.

The amplitude $X$ and phase lag $\phi$ can be derived by substituting the assumed steady-state solution into the EOM. The results are:

**Amplitude of Steady-State Response ($X$):**
$X = \frac{F_0/k}{\sqrt{\left(1 - (\omega/\omega_n)^2\right)^2 + (2\zeta \omega/\omega_n)^2}}$

Or in terms of static deflection $u_{st} = F_0/k$:
$X = u_{st} \frac{1}{\sqrt{\left(1 - r^2\right)^2 + (2\zeta r)^2}}$

Where:
*   $r = \frac{\omega}{\omega_n}$ is the frequency ratio.

**Phase Lag ($\phi$):**
$\tan(\phi) = \frac{2\zeta r}{1 - r^2}$

### 8.2. Resonance

Resonance occurs when the frequency of the applied load ($\omega$) is close to the natural frequency of the system ($\omega_n$), i.e., when $r = \omega/\omega_n \approx 1$.

*   **Undamped System ($\zeta = 0$):** If $\omega = \omega_n$, the denominator for $X$ becomes zero, leading to an infinite amplitude. This is pure resonance.
*   **Damped System ($\zeta > 0$):** For damped systems, resonance still occurs when $\omega \approx \omega_n$, but the amplitude is limited by damping. The amplitude is maximum when $\omega = \omega_n \sqrt{1 - 2\zeta^2}$. For small damping, this peak is close to $\omega_n$.

**Impact of Damping on Amplitude:**
*   As damping ($\zeta$) increases, the amplitude of the steady-state response decreases, especially near resonance.
*   The peak amplitude occurs at a frequency slightly lower than the natural frequency for damped systems.

**Practice Question 2:**
A SDOF system has mass $m = 2000$ kg, stiffness $k = 200000$ N/m, and damping ratio $\zeta = 0.05$. It is subjected to a harmonic force $F(t) = 5000 \sin(10t)$ N.
a) Calculate the natural frequency $\omega_n$.
b) Calculate the frequency ratio $r$.
c) Calculate the amplitude of the steady-state response ($X$).
d) Calculate the phase lag ($\phi$).

**Answers:**
a) $\omega_n = \sqrt{\frac{k}{m}} = \sqrt{\frac{200000}{2000}} = \sqrt{100} = 10$ rad/s
b) $r = \frac{\omega}{\omega_n} = \frac{10 \text{ rad/s}}{10 \text{ rad/s}} = 1$
c) $u_{st} = \frac{F_0}{k} = \frac{5000}{200000} = 0.025$ m
$X = u_{st} \frac{1}{\sqrt{(1 - r^2)^2 + (2\zeta r)^2}} = 0.025 \frac{1}{\sqrt{(1 - 1^2)^2 + (2 \times 0.05 \times 1)^2}}$
$X = 0.025 \frac{1}{\sqrt{0 + (0.1)^2}} = 0.025 \frac{1}{0.1} = 0.25$ m
d) $\tan(\phi) = \frac{2\zeta r}{1 - r^2} = \frac{2 \times 0.05 \times 1}{1 - 1^2} = \frac{0.1}{0} \rightarrow \infty$
Therefore, $\phi = 90^\circ$ or $\frac{\pi}{2}$ radians.

**Important Point to Remember:** When $r=1$ and $\zeta>0$, the denominator is $(2\zeta)^2$. The amplitude is $X = u_{st} / (2\zeta)$. In this case, $X = 0.025 / (2 \times 0.05) = 0.025 / 0.1 = 0.25$ m.

---

## 9. Simple Portal Frame Problems

Simple portal frames, often with fixed or pinned bases, can be analyzed using simplified SDOF models for preliminary dynamic analysis. The key is to determine the effective mass and effective stiffness for the chosen DOF.

### 9.1. Determining Effective Stiffness ($k_{eff}$) for a Portal Frame

Let's consider a simple single-bay, single-story portal frame with fixed bases. The DOF is the lateral displacement of the top beam, $u$.

```
     ______ U
    |      |
    |      | h
   /        \
  /          \
 /            \
--------------
      b
```

Assume the columns have length $h$ and the beam has length $b$.
For a cantilever column with a lateral force at the top, the deflection is $u = \frac{Ph^3}{3EI}$.
So, the stiffness of a single column is $k_{col} = \frac{3EI}{h^3}$.

In a portal frame, both columns resist the lateral load. However, due to bending in the beam and the interaction between columns, a direct summation is an approximation.

A common approach to find the effective stiffness for a portal frame is to apply a unit lateral force at the top and calculate the resulting lateral displacement ($u_{unit}$). The effective stiffness is then $k_{eff} = \frac{1}{u_{unit}}$.

**Example Calculation (Simplified):**

Consider a frame with uniform cross-section $EI$ for both columns and beam.
Let's assume:
*   Columns are pinned at the base (simplest case for illustration of calculation, though fixed bases are more common).
*   The beam is rigid or its contribution to stiffness against lateral sway is neglected for a very simplified model.

If we consider only the bending of the columns, and assume the top beam moves horizontally by $u$:

*   Each column acts like a cantilever with its top end moving by $u$.
*   The lateral force resisted by each column is $P_{col}$.
*   $u = \frac{P_{col}h^3}{3EI} \implies P_{col} = \frac{3EI}{h^3} u$.
*   The total lateral force $F$ at the top is $2 P_{col}$ (assuming symmetric loading and response).
*   $F = 2 \times \frac{3EI}{h^3} u = \frac{6EI}{h^3} u$.
*   So, $k_{eff} = \frac{F}{u} = \frac{6EI}{h^3}$.

**For fixed bases:** The analysis is more complex, involving shear and moment distribution. A common simplified stiffness for a portal frame with fixed bases (and ignoring beam bending) can be found using virtual work or other methods. A typical value might be around $k_{eff} = \frac{12EI}{h^3}$ for sway.

The actual stiffness calculation can involve:
*   **Considering column bending only:** If the beam is very flexible.
*   **Considering beam bending and column bending:** For a more accurate analysis.
*   **Shear deformation:** Important for short, deep columns.

### 9.2. Determining Effective Mass ($m_{eff}$) for a Portal Frame

The effective mass represents the portion of the total mass of the structure that participates in the vibration mode corresponding to the chosen DOF.

For lateral vibration of a portal frame, the mass distributed along the columns and the mass of the beam contribute. If the mass is uniformly distributed, we often consider a portion of this mass at the location of the DOF.

**Example:**
If we consider the lateral displacement $u$ of the top beam as the DOF for the portal frame:
*   The mass of the top beam ($m_{beam}$) is often lumped at the top and contributes fully to $m_{eff}$.
*   The mass of the columns ($m_{col}$) is distributed. For a uniformly distributed mass along the columns, the effective mass participating in the first mode of lateral vibration is approximately $m_{col, eff} = 0.5 \times m_{col}$ (lumped at the top).

So, $m_{eff} = m_{beam} + 0.5 \times m_{col}$.

**Practice Question 3:**
Consider a single-story portal frame with fixed bases.
*   Height of columns $h = 3$ m.
*   Width of beam $b = 4$ m.
*   Flexural rigidity $EI = 200 \times 10^6$ N-m$^2$ for columns and beam.
*   Mass of beam $m_{beam} = 1000$ kg.
*   Mass of each column $m_{col\_each} = 600$ kg.

Assume the frame can be modeled as an SDOF system with the DOF being the lateral displacement of the top beam.
a) Calculate the effective stiffness ($k_{eff}$) of the portal frame, assuming the columns are the primary contributors to sway stiffness and using the simplified formula for fixed bases.
b) Calculate the effective mass ($m_{eff}$) of the portal frame.
c) Calculate the natural frequency ($\omega_n$) of the portal frame.

**Answers:**
a) Using the simplified formula for fixed bases (assuming column bending dominates and neglecting beam flexural stiffness contribution to sway): $k_{eff} = \frac{12EI}{h^3}$
$k_{eff} = \frac{12 \times (200 \times 10^6 \text{ N-m}^2)}{(3 \text{ m})^3} = \frac{2400 \times 10^6}{27} \approx 88.89 \times 10^6$ N/m

b) $m_{eff} = m_{beam} + 0.5 \times (2 \times m_{col\_each})$ (assuming effective mass of columns lumped at top)
$m_{eff} = 1000 \text{ kg} + 0.5 \times (2 \times 600 \text{ kg})$
$m_{eff} = 1000 \text{ kg} + 600 \text{ kg} = 1600$ kg

c) $\omega_n = \sqrt{\frac{k_{eff}}{m_{eff}}} = \sqrt{\frac{88.89 \times 10^6 \text{ N/m}}{1600 \text{ kg}}}$
$\omega_n = \sqrt{55556.25} \approx 235.7$ rad/s

**Important Point to Remember:** The accuracy of SDOF modeling for frames depends heavily on the chosen DOF and how effective stiffness and mass are determined. For more complex frames or higher modes of vibration, MDOF analysis is necessary.

---

## Summary of Key Concepts:

*   **DOF:** Coordinates defining system configuration.
*   **EOM:** $m\ddot{u} + c\dot{u} + ku = F(t)$.
*   **D’Alembert’s Principle:** Treats inertia force as an equivalent static force.
*   **Damping:** Energy dissipation, quantified by $\zeta$.
    *   $\zeta < 1$: Underdamped (oscillatory decay).
    *   $\zeta = 1$: Critically damped (fastest non-oscillatory return).
    *   $\zeta > 1$: Overdamped (slow non-oscillatory return).
*   **Natural Frequency ($\omega_n$):** Intrinsic frequency of oscillation.
*   **Logarithmic Decrement ($\delta$):** Measures decay rate of free vibrations. $\delta \approx 2\pi\zeta$ for small $\zeta$.
*   **Harmonic Load:** $F(t) = F_0 \sin(\omega t)$.
*   **Steady-State Response:** Harmonic response with frequency $\omega$, amplitude $X$, and phase lag $\phi$.
*   **Resonance:** Occurs when $\omega \approx \omega_n$, leading to large amplitudes.
*   **Portal Frames as SDOF:** Simplify by lumping effective mass and calculating effective stiffness for a chosen DOF (typically lateral sway).

---

This concludes the introduction to structural dynamics. The subsequent modules will build upon these foundational concepts for more complex dynamic analyses.
