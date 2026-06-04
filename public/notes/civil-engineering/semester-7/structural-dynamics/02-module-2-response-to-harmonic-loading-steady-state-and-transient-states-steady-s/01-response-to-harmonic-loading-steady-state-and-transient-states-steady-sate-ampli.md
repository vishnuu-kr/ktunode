---
title: "Response to harmonic loading  – steady state and transient states steady sate amplitude, Dynamic magnification factor, force transmissibility and vibration isolation."
subject: "STRUCTURAL DYNAMICS"
module: "Module 2: Response to harmonic loading  – steady state and transient states steady sate amplitude, Dynamic magnification factor, force transmissibility and vibration isolation."
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba811419"
status: "completed"
scrapedAt: "2026-05-20T19:01:36.705Z"
---
# Structural Dynamics: Module 2 - Response to Harmonic Loading

## 1. Introduction to Harmonic Loading

Harmonic loading is a type of excitation that varies sinusoidally with time. It is a fundamental concept in structural dynamics as many real-world dynamic loads can be approximated as harmonic or composed of multiple harmonic components (Fourier series). Understanding the response of a structure to harmonic loading is crucial for predicting its behavior under various operating conditions.

### Key Concepts:

*   **Harmonic Excitation:** A force or motion that varies with time according to a sinusoidal function.
*   **Frequency:** The rate at which the excitation repeats itself, typically measured in Hertz (Hz) or radians per second (rad/s).
*   **Amplitude:** The maximum value of the excitation.
*   **Phase Angle:** The initial position of the excitation in its cycle.

### Mathematical Representation:

A harmonic force can be represented as:

$F(t) = F_0 \sin(\omega t + \phi)$

or

$F(t) = F_0 \cos(\omega t + \phi)$

Where:
*   $F(t)$ is the force at time $t$.
*   $F_0$ is the amplitude of the force.
*   $\omega$ is the excitation frequency in rad/s.
*   $\phi$ is the phase angle.

**Note:** In structural dynamics, it's often convenient to use complex exponentials for harmonic analysis, where $F(t) = F_0 e^{i(\omega t + \phi)}$.

## 2. Single Degree of Freedom (SDOF) System under Harmonic Loading

The simplest model of a structure is a Single Degree of Freedom (SDOF) system, consisting of a mass ($m$), stiffness ($k$), and damping ($\text{c}$). The equation of motion for an SDOF system subjected to harmonic forcing is:

$m\ddot{x}(t) + c\dot{x}(t) + kx(t) = F(t)$

Where:
*   $m$ is the mass.
*   $c$ is the damping coefficient.
*   $k$ is the stiffness.
*   $x(t)$ is the displacement.
*   $\dot{x}(t)$ is the velocity.
*   $\ddot{x}(t)$ is the acceleration.
*   $F(t)$ is the external harmonic force.

### Types of Response:

The total response of an SDOF system to harmonic loading consists of two parts:

1.  **Transient Response:** This part of the response occurs immediately after the load is applied and gradually decays over time due to damping. It depends on the initial conditions (initial displacement and velocity) of the system.
2.  **Steady-State Response:** This part of the response occurs after the transient response has died out. It persists as long as the harmonic load is applied and has the same frequency as the forcing function.

### Equation of Motion for Steady-State Response:

For harmonic forcing $F(t) = F_0 \cos(\omega t)$, we assume a steady-state solution of the form:

$x(t) = X \cos(\omega t - \theta)$

Where:
*   $X$ is the steady-state amplitude of displacement.
*   $\theta$ is the phase lag between the force and the displacement.

Substituting this into the equation of motion and equating coefficients of $\cos(\omega t)$ and $\sin(\omega t)$ leads to expressions for $X$ and $\theta$.

**Key Equations for Steady-State Response:**

The steady-state displacement amplitude $X$ is given by:

$X = \frac{F_0}{k} \frac{1}{\sqrt{\left(1 - \left(\frac{\omega}{\omega_n}\right)^2\right)^2 + \left(2\zeta \frac{\omega}{\omega_n}\right)^2}}$

And the phase lag $\theta$ is given by:

$\tan(\theta) = \frac{2\zeta \frac{\omega}{\omega_n}}{1 - \left(\frac{\omega}{\omega_n}\right)^2}$

Where:
*   $\omega_n = \sqrt{\frac{k}{m}}$ is the natural frequency of the undamped system.
*   $\zeta = \frac{c}{2\sqrt{km}} = \frac{c}{2m\omega_n}$ is the damping ratio.
*   $r = \frac{\omega}{\omega_n}$ is the frequency ratio.

The amplitude $X$ can be rewritten in terms of the static deflection $X_{st} = \frac{F_0}{k}$:

$X = X_{st} \frac{1}{\sqrt{\left(1 - r^2\right)^2 + \left(2\zeta r\right)^2}}$

## 3. Dynamic Magnification Factor (DMF)

The Dynamic Magnification Factor (DMF), often denoted by $M$, is a crucial parameter that quantifies how much the dynamic amplitude of vibration exceeds the static deflection under harmonic loading. It is the ratio of the dynamic amplitude ($X$) to the static deflection ($X_{st}$):

$M = \frac{X}{X_{st}} = \frac{1}{\sqrt{\left(1 - r^2\right)^2 + \left(2\zeta r\right)^2}}$

### Importance of DMF:

*   **Resonance:** The DMF is maximized when the excitation frequency $\omega$ is close to the natural frequency $\omega_n$ (i.e., $r \approx 1$). This phenomenon is called resonance.
*   **Damping's Role:** Damping significantly reduces the DMF, especially near resonance. Without damping ($\zeta = 0$), the DMF becomes infinite at resonance, leading to unbounded displacements.

### Behavior of DMF with Frequency Ratio (r):

*   **r << 1 (Low excitation frequency):** $M \approx 1$. The dynamic response is almost equal to the static deflection.
*   **r = 1 (Resonance):**
    *   If $\zeta = 0$, $M \to \infty$.
    *   If $\zeta > 0$, $M = \frac{1}{2\zeta}$. The higher the damping, the lower the DMF.
*   **r > 1 (High excitation frequency):** As $r$ increases, $M$ decreases, approaching zero for very large $r$.

### Maximum DMF and Frequency of Maximum Response:

The maximum value of the DMF does not occur exactly at $r=1$ when damping is present. It occurs at a slightly lower frequency. The frequency of maximum response, $\omega_{max}$, is given by:

$\omega_{max} = \omega_n \sqrt{1 - 2\zeta^2}$

The maximum DMF, $M_{max}$, is:

$M_{max} = \frac{1}{2\zeta\sqrt{1 - \zeta^2}}$

**Important Point:** This maximum occurs only if $2\zeta^2 < 1$, or $\zeta < \frac{1}{\sqrt{2}}$. If $\zeta \ge \frac{1}{\sqrt{2}}$, the DMF is maximum at $r=1$.

## 4. Steady-State Amplitude of Velocity and Acceleration

While displacement is often the primary concern, the steady-state amplitudes of velocity and acceleration are also important.

### Steady-State Velocity Amplitude ($\dot{X}$):

The steady-state velocity is $\dot{x}(t) = -\omega X \sin(\omega t - \theta)$.
The velocity amplitude is:

$\dot{X} = \omega X = \frac{\omega F_0}{k} \frac{1}{\sqrt{\left(1 - r^2\right)^2 + \left(2\zeta r\right)^2}}$

$\dot{X} = r \omega_n X_{st} \frac{1}{\sqrt{\left(1 - r^2\right)^2 + \left(2\zeta r\right)^2}}$

$\dot{X} = r \omega_n X \frac{1}{M}$

### Steady-State Acceleration Amplitude ($\ddot{X}$):

The steady-state acceleration is $\ddot{x}(t) = -\omega^2 X \cos(\omega t - \theta)$.
The acceleration amplitude is:

$\ddot{X} = \omega^2 X = \frac{\omega^2 F_0}{k} \frac{1}{\sqrt{\left(1 - r^2\right)^2 + \left(2\zeta r\right)^2}}$

$\ddot{X} = r^2 \omega_n^2 X_{st} \frac{1}{\sqrt{\left(1 - r^2\right)^2 + \left(2\zeta r\right)^2}}$

$\ddot{X} = r^2 \omega_n^2 X \frac{1}{M}$

**Key Observation:** As the excitation frequency ratio ($r$) increases, the acceleration amplitude grows significantly (proportional to $r^2$), even for relatively small $r$. This is why vibration control is crucial in preventing excessive acceleration in structures.

## 5. Force Transmissibility

Force transmissibility refers to the ratio of the force transmitted to the foundation or support to the applied force. In an SDOF system, this force is the force exerted by the spring and the damper on the support.

### Force Transmitted ($F_T$):

The force transmitted to the foundation is the sum of the spring force and the damper force:

$F_T(t) = kx(t) + c\dot{x}(t)$

Substituting the steady-state expressions for $x(t)$ and $\dot{x}(t)$:

$F_T(t) = k (X \cos(\omega t - \theta)) + c (\omega X \sin(\omega t - \theta))$

This can be expressed in a single sinusoidal form. The amplitude of the transmitted force ($F_T$) is:

$F_T = \sqrt{(kX)^2 + (c\omega X)^2} = X \sqrt{k^2 + (c\omega)^2}$

### Force Transmissibility Ratio ($TR$):

The force transmissibility ratio ($TR$) is the ratio of the amplitude of the transmitted force to the amplitude of the applied force:

$TR = \frac{F_T}{F_0} = \frac{X \sqrt{k^2 + (c\omega)^2}}{F_0}$

Substitute $X = \frac{F_0}{k} M$:

$TR = \frac{F_0}{k} M \frac{\sqrt{k^2 + (c\omega)^2}}{F_0} = M \frac{\sqrt{k^2 + (c\omega)^2}}{k}$

$TR = M \sqrt{1 + \left(\frac{c\omega}{k}\right)^2}$

Using $c = 2\zeta m \omega_n$, $k = m \omega_n^2$, and $r = \frac{\omega}{\omega_n}$:

$TR = M \sqrt{1 + \left(\frac{2\zeta m \omega_n \omega}{m \omega_n^2}\right)^2} = M \sqrt{1 + (2\zeta r)^2}$

Substituting the expression for $M$:

$TR = \frac{\sqrt{1 + (2\zeta r)^2}}{\sqrt{\left(1 - r^2\right)^2 + \left(2\zeta r\right)^2}}$

### Behavior of Force Transmissibility:

*   **r << 1 (Low excitation frequency):** $TR \approx 1$. The transmitted force is approximately equal to the applied force.
*   **r = 1 (Resonance):** $TR \approx \frac{\sqrt{1+(2\zeta)^2}}{2\zeta}$. For small damping, $TR$ is large.
*   **r > $\sqrt{2}$:** $TR < 1$. When the excitation frequency is significantly higher than the natural frequency ($r > \sqrt{2}$), the force transmitted is less than the applied force. This is the principle behind vibration isolation.

## 6. Vibration Isolation

Vibration isolation is the process of reducing the transmission of dynamic forces from a vibrating object to its surroundings, or vice-versa. This is achieved by placing a flexible element (like a spring or rubber mount) between the vibrating source and the structure or foundation.

### Principles of Vibration Isolation:

The goal of vibration isolation is to have a force transmissibility ratio ($TR$) significantly less than 1. From the analysis of $TR$, we know that this occurs when the excitation frequency ($\omega$) is much higher than the natural frequency ($\omega_n$) of the isolation system.

$TR < 1$ when $r > \sqrt{2}$

This means that the stiffness ($k$) of the isolation system should be low, resulting in a low natural frequency ($\omega_n = \sqrt{k/m}$), relative to the excitation frequency.

### Design Considerations for Vibration Isolation:

1.  **Isolation System Stiffness (k):** Should be as low as possible to ensure $r > \sqrt{2}$.
2.  **Damping ($\zeta$):**
    *   **At Resonance (r $\approx$ 1):** Damping is beneficial to reduce excessive amplitudes and transmitted forces.
    *   **For Isolation (r > $\sqrt{2}$):** Damping can actually *increase* the transmitted force if it's too high, because it raises the $TR$ curve in the isolation region. Therefore, often less damping is preferred for effective isolation.
3.  **Mass of the Isolated Object (m):** A larger mass allows for a lower stiffness ($k$) to achieve the same low natural frequency.

### Examples of Vibration Isolation:

*   **Engine Mounts:** Isolating the vibration of an engine from the vehicle chassis.
*   **Building Foundations:** Isolating buildings from ground vibrations (e.g., from earthquakes or heavy machinery).
*   **Sensitive Equipment:** Isolating precision instruments from floor vibrations.
*   **Machinery Mounts:** Preventing vibrations from a machine from affecting its surroundings.

## 7. Practice Questions and Answers

**Question 1:**
A mass-spring system with $m = 10$ kg, $k = 4000$ N/m, and negligible damping ($c \approx 0$) is subjected to a harmonic force $F(t) = 50 \cos(20t)$ N.
a) Calculate the natural frequency ($\omega_n$) of the system.
b) Calculate the excitation frequency ($\omega$).
c) Calculate the frequency ratio ($r$).
d) Determine the steady-state amplitude of displacement ($X$).
e) What is the dynamic magnification factor (DMF)?
f) If damping with a coefficient $c = 20$ Ns/m is added, what is the new steady-state amplitude of displacement?

**Answer 1:**
a) $\omega_n = \sqrt{\frac{k}{m}} = \sqrt{\frac{4000 \text{ N/m}}{10 \text{ kg}}} = \sqrt{400} \text{ rad/s} = 20 \text{ rad/s}$
b) From $F(t) = 50 \cos(20t)$, $\omega = 20 \text{ rad/s}$.
c) $r = \frac{\omega}{\omega_n} = \frac{20 \text{ rad/s}}{20 \text{ rad/s}} = 1$
d) Static deflection $X_{st} = \frac{F_0}{k} = \frac{50 \text{ N}}{4000 \text{ N/m}} = 0.0125$ m.
   For $c \approx 0$ and $r=1$, the system is at resonance.
   $X = X_{st} \frac{1}{\sqrt{\left(1 - r^2\right)^2 + \left(2\zeta r\right)^2}}$. Since $\zeta \approx 0$, the denominator is 0, leading to infinite amplitude theoretically.
   **More accurately:** For lightly damped systems at resonance, $X \approx \frac{F_0}{c\omega}$. If we assume a very small damping ratio, the amplitude will be very large. Let's re-evaluate using the formula for amplitude with damping.

Let's assume the question implies the *potential* for infinite amplitude if damping is truly zero. However, in practical scenarios, there's always some damping. If we consider the formula for amplitude:
$X = \frac{F_0}{k} \frac{1}{\sqrt{\left(1 - r^2\right)^2 + \left(2\zeta r\right)^2}}$
If $\zeta=0$ and $r=1$, the denominator is zero, so $X \to \infty$.

e) Dynamic Magnification Factor ($M$): For $\zeta=0$ and $r=1$, $M \to \infty$.

f) If $c = 20$ Ns/m:
   Calculate damping ratio $\zeta$:
   $m = 10$ kg, $\omega_n = 20$ rad/s.
   Critical damping coefficient $c_{cr} = 2m\omega_n = 2(10 \text{ kg})(20 \text{ rad/s}) = 400$ Ns/m.
   $\zeta = \frac{c}{c_{cr}} = \frac{20 \text{ Ns/m}}{400 \text{ Ns/m}} = 0.05$.
   $r = 1$.
   $X = X_{st} \frac{1}{\sqrt{\left(1 - r^2\right)^2 + \left(2\zeta r\right)^2}}$
   $X = 0.0125 \text{ m} \times \frac{1}{\sqrt{\left(1 - 1^2\right)^2 + \left(2 \times 0.05 \times 1\right)^2}}$
   $X = 0.0125 \text{ m} \times \frac{1}{\sqrt{0^2 + (0.1)^2}} = 0.0125 \text{ m} \times \frac{1}{0.1} = 0.125$ m.

**Question 2:**
A machine of mass 500 kg vibrates with a dominant frequency of 600 rpm. It needs to be isolated from the supporting structure, which is subjected to ground vibrations of 10 Hz. The desired force transmissibility is less than 0.2.
a) Calculate the natural frequency of the machine if it were mounted on a simple spring.
b) Determine the required stiffness ($k$) of the isolation system to achieve the desired transmissibility.
c) What is the frequency ratio ($r$) for this isolation system?

**Answer 2:**
Machine mass $m = 500$ kg.
Machine vibration frequency $= 600$ rpm. Convert to Hz: $600 \text{ rpm} / 60 \text{ s/min} = 10$ Hz. This is the frequency of vibration *of* the machine, not the frequency of the support excitation.

Ground vibration frequency $\omega_{ground} = 10$ Hz.
Let's assume the isolation system is designed to isolate the machine from the ground vibrations. So, $\omega = 10 \text{ Hz} \times 2\pi \text{ rad/Hz} = 20\pi \text{ rad/s} \approx 62.83 \text{ rad/s}$.

Desired Force Transmissibility ($TR$) < 0.2.
We need to design the isolation system such that the natural frequency of the machine on its mount ($\omega_n$) is significantly lower than the excitation frequency $\omega$.

We know $TR = \frac{\sqrt{1 + (2\zeta r)^2}}{\sqrt{\left(1 - r^2\right)^2 + \left(2\zeta r\right)^2}}$.
For good isolation, we typically assume damping is small, so $\zeta \approx 0$.
In this case, $TR \approx \frac{1}{\sqrt{(1-r^2)^2}} = \frac{1}{|1-r^2|}$.
Since we want isolation, $r > 1$, so $TR \approx \frac{1}{r^2 - 1}$.

We want $TR < 0.2$:
$\frac{1}{r^2 - 1} < 0.2$
$1 < 0.2 (r^2 - 1)$
$5 < r^2 - 1$
$6 < r^2$
$r > \sqrt{6} \approx 2.45$

a) The question asks for the natural frequency *of the machine if it were mounted on a simple spring*. This implies the natural frequency of the isolation system.
We have $r = \frac{\omega}{\omega_n}$. We need $r > \sqrt{6}$.
Using the excitation frequency $\omega = 62.83$ rad/s.
We require $\frac{62.83}{\omega_n} > \sqrt{6}$.
$\omega_n < \frac{62.83}{\sqrt{6}} \approx \frac{62.83}{2.449} \approx 25.65$ rad/s.

b) To find the required stiffness ($k$), we use $\omega_n = \sqrt{\frac{k}{m}}$.
$k = m \omega_n^2$.
We need to choose $\omega_n$ to satisfy the condition. Let's pick a value for $\omega_n$ that gives $r$ slightly larger than $\sqrt{6}$, say $r=3$.
If $r=3$, then $\omega_n = \frac{\omega}{r} = \frac{62.83 \text{ rad/s}}{3} \approx 20.94$ rad/s.
Now calculate the stiffness:
$k = m \omega_n^2 = 500 \text{ kg} \times (20.94 \text{ rad/s})^2 \approx 500 \times 438.48 \approx 219240 \text{ N/m}$.
Let's verify the $TR$ with $r=3$ and $\zeta=0$ (assuming very little damping for isolation):
$TR = \frac{1}{3^2 - 1} = \frac{1}{9-1} = \frac{1}{8} = 0.125$. This is less than 0.2, so it's acceptable.

c) The frequency ratio ($r$) for this isolation system is determined by the choice of $\omega_n$. If we choose $\omega_n \approx 20.94$ rad/s for $\omega = 62.83$ rad/s, then $r = \frac{62.83}{20.94} \approx 3$.

**Important Note on Question 2:** The "machine vibration frequency" of 600 rpm (10 Hz) is the internal operating frequency of the machine. The "ground vibrations" of 10 Hz are the external disturbances that we are trying to isolate *from*. Therefore, the $\omega$ we use for calculating $r$ and $TR$ in the context of isolation from ground vibrations is the ground vibration frequency.

## 8. Important Points to Remember

*   **Steady-State vs. Transient Response:** Understand that the total response is the sum of transient (decays with time) and steady-state (persists with excitation frequency).
*   **Resonance:** Occurs when excitation frequency $\omega$ equals natural frequency $\omega_n$. Leads to large amplitudes and forces, especially with low damping.
*   **Dynamic Magnification Factor (DMF):** Quantifies the amplification of displacement due to dynamics. Crucial for understanding resonance.
*   **Damping:** Reduces DMF at resonance and influences the phase lag.
*   **Frequency Ratio ($r$):** The key parameter dictating the system's response characteristics ($\omega/\omega_n$).
*   **Force Transmissibility (TR):** Measures how much of the applied force is transmitted to the support.
*   **Vibration Isolation:** Achieved when excitation frequency is significantly higher than the natural frequency ($r > \sqrt{2}$), making $TR < 1$.
*   **Acceleration Amplitude:** Grows rapidly with the square of the frequency ratio ($r^2$), making it a critical factor in structural integrity.
*   **Phase Lag ($\theta$):** Indicates the time difference between the force and displacement. At resonance ($r=1$), $\theta = 90^\circ$ for $\zeta=0$ and slightly less than $90^\circ$ for $\zeta > 0$. For $r > \sqrt{2}$, $\theta$ approaches $180^\circ$.

This concludes Module 2. Understanding these concepts is fundamental to analyzing and designing structures that can withstand dynamic loads effectively.
