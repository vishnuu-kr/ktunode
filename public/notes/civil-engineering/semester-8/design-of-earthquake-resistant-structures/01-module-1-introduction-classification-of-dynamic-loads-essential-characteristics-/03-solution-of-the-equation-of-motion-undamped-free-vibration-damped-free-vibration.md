---
title: "Solution of the equation of motion  – undamped free vibration – damped free vibration- critically damped under damped and over damped SDOF systems, Logarithmic decrement. (Numerical examples expected, but not derivations)"
subject: "DESIGN OF EARTHQUAKE RESISTANT STRUCTURES"
module: "Module 1: Introduction  – Classification of dynamic loads – essential characteristics of a dynamic problem – methods of discretization– single degree of freedom systems – basic components of a dynamic system."
branch: "Civil Engineering"
semester: 8
topicId: "689f15d056b5e963ba8119ae"
status: "completed"
scrapedAt: "2026-05-20T19:02:47.390Z"
---
# DESIGN OF EARTHQUAKE RESISTANT STRUCTURES

## Module 1: Introduction to Dynamic Loads and SDOF Systems

### Topic: Solution of the Equation of Motion - Free Vibrations

This section focuses on understanding how Single Degree of Freedom (SDOF) systems respond to free vibrations, both with and without damping. We will explore the different types of damping and a method to quantify it.

---

### 1. The Equation of Motion for an SDOF System

**Key Concept:** The behavior of a vibrating system can be described by a mathematical equation that relates mass, stiffness, damping, and displacement over time.

*   **General Form of the Equation of Motion:**
    $m\ddot{x}(t) + c\dot{x}(t) + kx(t) = P(t)$

    Where:
    *   $m$: Mass of the system
    *   $c$: Damping coefficient
    *   $\dot{x}(t)$: Velocity of the mass
    *   $k$: Stiffness of the system
    *   $x(t)$: Displacement of the mass
    *   $\ddot{x}(t)$: Acceleration of the mass
    *   $P(t)$: External force acting on the system

---

### 2. Free Vibration

**Key Concept:** Free vibration occurs when a system is displaced from its equilibrium position and then released without any external force acting on it.

*   **Equation of Motion for Free Vibration:**
    For free vibration, $P(t) = 0$.
    $m\ddot{x}(t) + c\dot{x}(t) + kx(t) = 0$

---

### 3. Undamped Free Vibration

**Key Concept:** In undamped free vibration, there are no energy dissipation mechanisms (like friction or air resistance). The system will oscillate indefinitely with a constant amplitude.

*   **Equation of Motion:**
    $m\ddot{x}(t) + kx(t) = 0$

*   **Solution:**
    The solution to this equation is a sinusoidal function:
    $x(t) = X \sin(\omega_n t + \phi)$

    Where:
    *   $X$: Amplitude of vibration (determined by initial displacement)
    *   $\omega_n$: Natural circular frequency (in radians per second)
    *   $t$: Time
    *   $\phi$: Phase angle (determined by initial displacement and velocity)

*   **Natural Circular Frequency ($\omega_n$):**
    $\omega_n = \sqrt{\frac{k}{m}}$

*   **Natural Frequency ($f_n$):**
    The number of cycles per second (Hertz, Hz).
    $f_n = \frac{\omega_n}{2\pi} = \frac{1}{2\pi}\sqrt{\frac{k}{m}}$

*   **Natural Period ($T_n$):**
    The time it takes for one complete cycle of vibration.
    $T_n = \frac{1}{f_n} = \frac{2\pi}{\omega_n} = 2\pi\sqrt{\frac{m}{k}}$

**Numerical Example 1: Undamped Free Vibration**

Consider a simple mass-spring system with:
*   Mass ($m$) = 10 kg
*   Stiffness ($k$) = 4000 N/m

**Calculate:**
a) The natural circular frequency ($\omega_n$).
b) The natural frequency ($f_n$).
c) The natural period ($T_n$).

**Solution:**
a) $\omega_n = \sqrt{\frac{k}{m}} = \sqrt{\frac{4000 \text{ N/m}}{10 \text{ kg}}} = \sqrt{400 \text{ s}^{-2}} = 20 \text{ rad/s}$

b) $f_n = \frac{\omega_n}{2\pi} = \frac{20 \text{ rad/s}}{2\pi} \approx 3.18 \text{ Hz}$

c) $T_n = \frac{1}{f_n} = \frac{1}{3.18 \text{ Hz}} \approx 0.314 \text{ s}$

---

### 4. Damped Free Vibration

**Key Concept:** Damped free vibration occurs when energy is dissipated from the system, causing the amplitude of oscillation to decrease over time.

*   **Equation of Motion:**
    $m\ddot{x}(t) + c\dot{x}(t) + kx(t) = 0$

*   **Types of Damping:** The behavior of the damped system depends on the relationship between the damping coefficient ($c$) and the critical damping coefficient ($c_c$).

    *   **Critical Damping ($c_c$):** The minimum amount of damping required to prevent oscillation.
        $c_c = 2m\omega_n = 2\sqrt{mk}$

    *   **Damping Ratio ($\zeta$ or zeta):** A dimensionless parameter that expresses the damping of a system relative to critical damping.
        $\zeta = \frac{c}{c_c} = \frac{c}{2m\omega_n} = \frac{c}{2\sqrt{mk}}$

    The behavior of the system is determined by the value of $\zeta$:

    *   **Underdamped System ($\zeta < 1$):** The system oscillates with decreasing amplitude. This is the most common type of damping in structural engineering.

    *   **Critically Damped System ($\zeta = 1$):** The system returns to equilibrium as quickly as possible without oscillating.

    *   **Overdamped System ($\zeta > 1$):** The system returns to equilibrium slowly without oscillating.

---

### 5. Solutions for Damped Free Vibration

The solutions to the damped free vibration equation depend on the damping ratio ($\zeta$).

#### a) Critically Damped System ($\zeta = 1$)

*   **Condition:** $c = c_c$ or $\zeta = 1$
*   **Solution:** The system returns to its equilibrium position as quickly as possible without oscillating. The displacement can be expressed as:
    $x(t) = (A + Bt)e^{-\omega_n t}$

    Where $A$ and $B$ are constants determined by initial conditions.

**Numerical Example 2: Critically Damped System**

Consider a system with:
*   Mass ($m$) = 5 kg
*   Stiffness ($k$) = 2000 N/m
*   Damping coefficient ($c$) = $c_c$ (critically damped)

**Calculate:**
a) The natural circular frequency ($\omega_n$).
b) The critical damping coefficient ($c_c$).

**Solution:**
a) $\omega_n = \sqrt{\frac{k}{m}} = \sqrt{\frac{2000 \text{ N/m}}{5 \text{ kg}}} = \sqrt{400 \text{ s}^{-2}} = 20 \text{ rad/s}$

b) $c_c = 2m\omega_n = 2 \times 5 \text{ kg} \times 20 \text{ rad/s} = 200 \text{ Ns/m}$

If this system is displaced by 0.1m and released with zero initial velocity, its displacement at time $t=0.1$ s would be calculated using $x(t) = (A + Bt)e^{-\omega_n t}$.
Given $x(0)=0.1$ and $\dot{x}(0)=0$:
$x(0) = (A + B(0))e^0 = A = 0.1$
$\dot{x}(t) = B e^{-\omega_n t} - \omega_n (A+Bt)e^{-\omega_n t}$
$\dot{x}(0) = B e^0 - \omega_n (A+0)e^0 = B - \omega_n A = 0 \implies B = \omega_n A = 20 \times 0.1 = 2$
So, $x(t) = (0.1 + 2t)e^{-20t}$
$x(0.1) = (0.1 + 2 \times 0.1)e^{-20 \times 0.1} = (0.1 + 0.2)e^{-2} = 0.3 e^{-2} \approx 0.0406 \text{ m}$

#### b) Underdamped System ($\zeta < 1$)

*   **Condition:** $c < c_c$ or $\zeta < 1$
*   **Solution:** The system oscillates with decreasing amplitude. The displacement is given by:
    $x(t) = Xe^{-\zeta\omega_n t} \sin(\omega_d t + \phi)$

    Where:
    *   $X$: Amplitude of vibration (determined by initial conditions)
    *   $\zeta$: Damping ratio
    *   $\omega_n$: Natural circular frequency
    *   $\omega_d$: Damped circular frequency (in radians per second)
    *   $\phi$: Phase angle (determined by initial conditions)

*   **Damped Circular Frequency ($\omega_d$):**
    $\omega_d = \omega_n \sqrt{1 - \zeta^2}$

*   **Damped Frequency ($f_d$):**
    $f_d = \frac{\omega_d}{2\pi} = f_n \sqrt{1 - \zeta^2}$

*   **Damped Period ($T_d$):**
    $T_d = \frac{1}{f_d} = \frac{2\pi}{\omega_d} = \frac{T_n}{\sqrt{1 - \zeta^2}}$

**Numerical Example 3: Underdamped System**

Consider a structure with:
*   Mass ($m$) = 5000 kg
*   Stiffness ($k$) = 100,000 N/m
*   Damping coefficient ($c$) = 1000 Ns/m

**Calculate:**
a) The natural circular frequency ($\omega_n$).
b) The critical damping coefficient ($c_c$).
c) The damping ratio ($\zeta$).
d) The damped circular frequency ($\omega_d$).
e) The damped frequency ($f_d$).
f) The damped period ($T_d$).

**Solution:**
a) $\omega_n = \sqrt{\frac{k}{m}} = \sqrt{\frac{100000 \text{ N/m}}{5000 \text{ kg}}} = \sqrt{20 \text{ s}^{-2}} \approx 4.47 \text{ rad/s}$

b) $c_c = 2m\omega_n = 2 \times 5000 \text{ kg} \times 4.47 \text{ rad/s} \approx 44700 \text{ Ns/m}$

c) $\zeta = \frac{c}{c_c} = \frac{1000 \text{ Ns/m}}{44700 \text{ Ns/m}} \approx 0.0224$ (Since $\zeta < 1$, it's underdamped)

d) $\omega_d = \omega_n \sqrt{1 - \zeta^2} \approx 4.47 \text{ rad/s} \sqrt{1 - (0.0224)^2} \approx 4.47 \text{ rad/s} \sqrt{1 - 0.0005} \approx 4.47 \text{ rad/s}$ (The change is negligible for small $\zeta$)

e) $f_d = \frac{\omega_d}{2\pi} \approx \frac{4.47 \text{ rad/s}}{2\pi} \approx 0.712 \text{ Hz}$

f) $T_d = \frac{1}{f_d} \approx \frac{1}{0.712 \text{ Hz}} \approx 1.40 \text{ s}$

#### c) Overdamped System ($\zeta > 1$)

*   **Condition:** $c > c_c$ or $\zeta > 1$
*   **Solution:** The system returns to equilibrium slowly without oscillating. The displacement can be expressed as the sum of two decaying exponential terms:
    $x(t) = e^{-\zeta\omega_n t} (Ae^{\omega_n\sqrt{\zeta^2-1}t} + Be^{-\omega_n\sqrt{\zeta^2-1}t})$

    Where $A$ and $B$ are constants determined by initial conditions.

**Numerical Example 4: Overdamped System**

Consider a system with:
*   Mass ($m$) = 2 kg
*   Stiffness ($k$) = 800 N/m
*   Damping coefficient ($c$) = 100 Ns/m

**Calculate:**
a) The natural circular frequency ($\omega_n$).
b) The critical damping coefficient ($c_c$).
c) The damping ratio ($\zeta$).

**Solution:**
a) $\omega_n = \sqrt{\frac{k}{m}} = \sqrt{\frac{800 \text{ N/m}}{2 \text{ kg}}} = \sqrt{400 \text{ s}^{-2}} = 20 \text{ rad/s}$

b) $c_c = 2m\omega_n = 2 \times 2 \text{ kg} \times 20 \text{ rad/s} = 80 \text{ Ns/m}$

c) $\zeta = \frac{c}{c_c} = \frac{100 \text{ Ns/m}}{80 \text{ Ns/m}} = 1.25$ (Since $\zeta > 1$, it's overdamped)

If this system is displaced by 0.05m and released with zero initial velocity, its displacement at time $t=0.2$ s would be calculated using the overdamped solution.
Here $\zeta\omega_n = 1.25 \times 20 = 25$ and $\omega_n\sqrt{\zeta^2-1} = 20\sqrt{1.25^2-1} = 20\sqrt{1.5625-1} = 20\sqrt{0.5625} = 20 \times 0.75 = 15$.
So, $x(t) = e^{-25t}(Ae^{15t} + Be^{-15t})$
$x(0) = e^0(A+B) = A+B = 0.05$
$\dot{x}(t) = -25e^{-25t}(Ae^{15t} + Be^{-15t}) + e^{-25t}(15Ae^{15t} - 15Be^{-15t})$
$\dot{x}(0) = -25(A+B) + (15A-15B) = -25(0.05) + 15(A-B) = -1.25 + 15(A-B) = 0$
$15(A-B) = 1.25 \implies A-B = \frac{1.25}{15} \approx 0.0833$
Solving $A+B=0.05$ and $A-B=0.0833$:
$2A = 0.1333 \implies A \approx 0.06665$
$B = 0.05 - A \approx 0.05 - 0.06665 \approx -0.01665$
$x(t) = e^{-25t}(0.06665e^{15t} - 0.01665e^{-15t})$
$x(0.2) = e^{-25 \times 0.2}(0.06665e^{15 \times 0.2} - 0.01665e^{-15 \times 0.2})$
$x(0.2) = e^{-5}(0.06665e^{3} - 0.01665e^{-3})$
$x(0.2) \approx 0.006738 (0.06665 \times 20.0855 - 0.01665 \times 0.0498)$
$x(0.2) \approx 0.006738 (1.3391 - 0.00083) \approx 0.006738 \times 1.3383 \approx 0.00902 \text{ m}$

---

### 6. Logarithmic Decrement ($\delta$)

**Key Concept:** Logarithmic decrement is a measure of the rate at which the amplitude of free vibration decreases due to damping. It is defined as the natural logarithm of the ratio of two successive amplitudes.

*   **Definition:** For an underdamped system, the ratio of successive amplitudes is constant.
    $\delta = \ln\left(\frac{x_1}{x_2}\right)$

    Where:
    *   $x_1$: Amplitude at time $t$
    *   $x_2$: Amplitude at time $t + T_d$ (one damped period later)

*   **Relationship with Damping Ratio ($\zeta$):**
    $\delta = \frac{2\pi\zeta}{\sqrt{1-\zeta^2}}$

    For small damping ($\zeta < 0.1$ or $\zeta < 0.2$), the approximation is very good:
    $\delta \approx 2\pi\zeta$

**Numerical Example 5: Logarithmic Decrement**

A structure is observed to vibrate freely after being disturbed. The amplitude of vibration is measured at different times:
*   Amplitude at $t=0$: $x_0 = 50 \text{ mm}$
*   Amplitude at $t=2$ s (after one period): $x_1 = 40 \text{ mm}$

**Calculate:**
a) The logarithmic decrement ($\delta$).
b) The damping ratio ($\zeta$).

**Solution:**
a) $\delta = \ln\left(\frac{x_0}{x_1}\right) = \ln\left(\frac{50 \text{ mm}}{40 \text{ mm}}\right) = \ln(1.25) \approx 0.223$

b) Using the exact formula:
    $0.223 = \frac{2\pi\zeta}{\sqrt{1-\zeta^2}}$
    Squaring both sides:
    $0.223^2 = \frac{4\pi^2\zeta^2}{1-\zeta^2}$
    $0.0497 = \frac{39.48\zeta^2}{1-\zeta^2}$
    $0.0497(1-\zeta^2) = 39.48\zeta^2$
    $0.0497 - 0.0497\zeta^2 = 39.48\zeta^2$
    $0.0497 = 39.53\zeta^2$
    $\zeta^2 = \frac{0.0497}{39.53} \approx 0.001257$
    $\zeta = \sqrt{0.001257} \approx 0.0355$

    Using the approximation ($\delta \approx 2\pi\zeta$):
    $0.223 \approx 2\pi\zeta$
    $\zeta \approx \frac{0.223}{2\pi} \approx 0.0355$
    (The approximation is very good here because $\zeta$ is small).

---

### Important Points to Remember:

*   The **natural frequency** ($f_n$ or $\omega_n$) is an inherent property of the system, determined solely by its mass and stiffness.
*   **Damping** reduces the amplitude of vibration.
*   The **damping ratio** ($\zeta$) characterizes the level of damping.
    *   $\zeta < 1$: Underdamped (oscillatory decay)
    *   $\zeta = 1$: Critically damped (fastest decay without oscillation)
    *   $\zeta > 1$: Overdamped (slow decay without oscillation)
*   The **damped frequency** ($\omega_d$ or $f_d$) is always less than the natural frequency.
*   **Logarithmic decrement** is a practical way to measure damping by observing the decay of free vibrations.

---

### Practice Questions:

1.  A building has a mass of 50,000 kg and a stiffness of 500,000 N/m.
    a) Calculate its natural frequency in Hz.
    b) If the damping coefficient is 150,000 Ns/m, calculate the critical damping coefficient.
    c) Determine the damping ratio and state whether the system is underdamped, critically damped, or overdamped.

2.  An underdamped system has a natural frequency of 5 Hz and a damping ratio of 0.05.
    a) Calculate its damped frequency.
    b) If the initial displacement is 0.02 m and the initial velocity is zero, write the general form of the equation of motion for displacement $x(t)$. (You don't need to solve for the constants A and B).

3.  A structure is tested, and its free vibration response shows that the amplitude reduces from 20 mm to 10 mm in 5 cycles.
    a) Calculate the logarithmic decrement.
    b) Estimate the damping ratio of the structure.

---

### Answers to Practice Questions:

1.  a) $\omega_n = \sqrt{\frac{k}{m}} = \sqrt{\frac{500000}{50000}} = \sqrt{10} \approx 3.16 \text{ rad/s}$
    $f_n = \frac{\omega_n}{2\pi} \approx \frac{3.16}{2\pi} \approx 0.503 \text{ Hz}$

    b) $c_c = 2m\omega_n = 2 \times 50000 \times 3.16 \approx 316000 \text{ Ns/m}$

    c) $\zeta = \frac{c}{c_c} = \frac{150000}{316000} \approx 0.475$. Since $\zeta < 1$, the system is **underdamped**.

2.  a) $\omega_n = 2\pi f_n = 2\pi \times 5 \approx 31.42 \text{ rad/s}$
    $\omega_d = \omega_n \sqrt{1 - \zeta^2} = 31.42 \sqrt{1 - 0.05^2} = 31.42 \sqrt{1 - 0.0025} = 31.42 \sqrt{0.9975} \approx 31.42 \times 0.99875 \approx 31.38 \text{ rad/s}$

    b) $x(t) = Xe^{-\zeta\omega_n t} \sin(\omega_d t + \phi)$

3.  a) The ratio of amplitudes over 5 cycles is $20 \text{ mm} / 10 \text{ mm} = 2$.
    The ratio of two successive amplitudes ($x_1/x_2$) is the 5th root of this ratio, i.e., $(x_1/x_2)^5 = 2$.
    $x_1/x_2 = 2^{1/5} \approx 1.1487$
    $\delta = \ln(x_1/x_2) = \ln(1.1487) \approx 0.1386$

    b) Using the approximation $\delta \approx 2\pi\zeta$:
    $0.1386 \approx 2\pi\zeta$
    $\zeta \approx \frac{0.1386}{2\pi} \approx 0.0221$

---
