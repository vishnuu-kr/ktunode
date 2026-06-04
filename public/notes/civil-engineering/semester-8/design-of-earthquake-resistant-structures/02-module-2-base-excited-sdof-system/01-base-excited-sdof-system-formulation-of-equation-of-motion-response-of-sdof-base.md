---
title: "Base excited SDOF system  - formulation of equation of motion – Response of SDOF base excited systems;"
subject: "DESIGN OF EARTHQUAKE RESISTANT STRUCTURES"
module: "Module 2: Base excited SDOF system  "
branch: "Civil Engineering"
semester: 8
topicId: "689f15d056b5e963ba8119b1"
status: "completed"
scrapedAt: "2026-05-20T19:02:48.869Z"
---
# DESIGN OF EARTHQUAKE RESISTANT STRUCTURES

## Module 2: Base Excited SDOF System

---

### Topic: Base Excited SDOF System - Formulation of Equation of Motion and Response

---

### Learning Outcomes:

*   Understand the concept of a base-excited Single Degree of Freedom (SDOF) system.
*   Formulate the equation of motion for a base-excited SDOF system.
*   Analyze the dynamic response of base-excited SDOF systems to different types of base excitations.
*   Understand the concept of relative displacement and its significance.
*   Relate the response of base-excited systems to the response of force-excited systems.
*   Apply the concept of frequency response function for base-excited systems.

---

### 1. Introduction to Base-Excited SDOF Systems

*   **Definition:** A Base-Excited SDOF system is a simplified model representing a structure where the entire base of the structure is subjected to motion, typically caused by ground acceleration during an earthquake. The system's motion is characterized by a single degree of freedom, usually the displacement of a mass relative to its base.

*   **Why SDOF for Earthquake Analysis?**
    *   **Simplification:** Real structures are complex, multi-degree of freedom (MDOF) systems. SDOF systems provide a fundamental building block for understanding dynamic behavior and are often used for initial estimations or as equivalent systems for more complex structures.
    *   **Dominant Modes:** For many structures, the response is dominated by the fundamental mode of vibration. An SDOF system can often capture the essential characteristics of this fundamental mode.

*   **Components of a Base-Excited SDOF System:**
    *   **Mass (m):** Represents the inertial properties of the structure.
    *   **Stiffness (k):** Represents the elastic restoring forces provided by the structural elements.
    *   **Damping (c):** Represents energy dissipation mechanisms within the structure (e.g., material damping, aerodynamic damping).
    *   **Base Displacement ($u_g(t)$):** The motion of the ground or support.
    *   **Absolute Displacement ($u(t)$):** The displacement of the mass from a fixed inertial reference point.
    *   **Relative Displacement ($\tilde{u}(t)$):** The displacement of the mass relative to the base. $\tilde{u}(t) = u(t) - u_g(t)$.

---

### 2. Formulation of the Equation of Motion

Consider a mass 'm' attached to a spring of stiffness 'k' and a dashpot of damping coefficient 'c'. The system is subjected to a base acceleration $\ddot{u}_g(t)$.

**Free Body Diagram (FBD) of the Mass:**

Let $u(t)$ be the absolute displacement of the mass from its equilibrium position (fixed reference).
Let $u_g(t)$ be the displacement of the base from its equilibrium position.
The relative displacement is $\tilde{u}(t) = u(t) - u_g(t)$.

The forces acting on the mass are:
1.  **Inertial Force:** $-m\ddot{u}(t)$ (opposite to the direction of acceleration)
2.  **Damping Force:** $-c(\dot{u}(t) - \dot{u}_g(t)) = -c\dot{\tilde{u}}(t)$ (opposite to the relative velocity)
3.  **Stiffness Force (Spring Force):** $-k(u(t) - u_g(t)) = -k\tilde{u}(t)$ (opposite to the relative displacement)

**Applying Newton's Second Law ($\sum F = ma$):**

The acceleration of the mass is $\ddot{u}(t)$.
Summing the forces in the vertical direction (assuming horizontal motion):

$-m\ddot{u}(t) - c\dot{\tilde{u}}(t) - k\tilde{u}(t) = 0$

Substitute $\tilde{u}(t) = u(t) - u_g(t)$ and its derivatives:
$\dot{\tilde{u}}(t) = \dot{u}(t) - \dot{u}_g(t)$
$\ddot{\tilde{u}}(t) = \ddot{u}(t) - \ddot{u}_g(t)$

Rearranging the equation:
$m\ddot{u}(t) + c\dot{u}(t) + ku(t) = 0$

Now, substitute $u(t) = \tilde{u}(t) + u_g(t)$ and its derivatives:
$m(\ddot{\tilde{u}}(t) + \ddot{u}_g(t)) + c(\dot{\tilde{u}}(t) + \dot{u}_g(t)) + k(\tilde{u}(t) + u_g(t)) = 0$

$m\ddot{\tilde{u}}(t) + c\dot{\tilde{u}}(t) + k\tilde{u}(t) + m\ddot{u}_g(t) + c\dot{u}_g(t) + ku_g(t) = 0$

Since the base is assumed to be initially at rest and its motion is defined by $u_g(t)$, the terms related to the base displacement alone ($m\ddot{u}_g(t) + c\dot{u}_g(t) + ku_g(t)$) are not necessarily zero. However, the forces that cause the *motion of the mass relative to the base* are the inertial force due to relative acceleration and the restoring forces.

Let's re-examine the forces from the perspective of the mass oscillating *relative to the moving base*.

The displacement of the mass is $u(t)$.
The displacement of the base is $u_g(t)$.
The relative displacement is $\tilde{u}(t) = u(t) - u_g(t)$.

The velocity of the mass is $\dot{u}(t) = \dot{\tilde{u}}(t) + \dot{u}_g(t)$.
The acceleration of the mass is $\ddot{u}(t) = \ddot{\tilde{u}}(t) + \ddot{u}_g(t)$.

Forces acting on the mass *in an inertial frame*:
*   Spring force: $-k \tilde{u}(t)$ (restoring force acting towards equilibrium)
*   Damping force: $-c \dot{\tilde{u}}(t)$ (resisting relative velocity)
*   Inertial force: $-m \ddot{u}(t) = -m (\ddot{\tilde{u}}(t) + \ddot{u}_g(t))$

Applying Newton's Second Law:
$m\ddot{u}(t) = -k \tilde{u}(t) - c \dot{\tilde{u}}(t)$
$m(\ddot{\tilde{u}}(t) + \ddot{u}_g(t)) = -k \tilde{u}(t) - c \dot{\tilde{u}}(t)$

Rearranging to get the equation of motion for the relative displacement $\tilde{u}(t)$:

$m\ddot{\tilde{u}}(t) + c\dot{\tilde{u}}(t) + k\tilde{u}(t) = -m\ddot{u}_g(t)$

This is the standard equation of motion for a base-excited SDOF system. The term $-m\ddot{u}_g(t)$ acts as an equivalent external force applied to a system with the mass, damping, and stiffness defined relative to the base.

*   **Key Concept:** The base acceleration $\ddot{u}_g(t)$ directly influences the response of the system.
*   **Effective Force:** The term $-m\ddot{u}_g(t)$ is often called the "effective inertia force." It's the inertial force that arises due to the base's acceleration, applied to the mass in the frame of reference of the base.

---

### 3. Response of Base-Excited SDOF Systems

The equation of motion is: $m\ddot{\tilde{u}}(t) + c\dot{\tilde{u}}(t) + k\tilde{u}(t) = -m\ddot{u}_g(t)$.

To analyze the response, we often normalize the equation by dividing by the mass 'm':

$\ddot{\tilde{u}}(t) + \frac{c}{m}\dot{\tilde{u}}(t) + \frac{k}{m}\tilde{u}(t) = -\ddot{u}_g(t)$

We define:
*   **Natural Circular Frequency:** $\omega_n = \sqrt{\frac{k}{m}}$
*   **Damping Ratio:** $\zeta = \frac{c}{2\sqrt{mk}} = \frac{c}{2m\omega_n}$

Substituting these into the equation:

$\ddot{\tilde{u}}(t) + 2\zeta\omega_n\dot{\tilde{u}}(t) + \omega_n^2\tilde{u}(t) = -\ddot{u}_g(t)$

This is the most common form of the equation of motion for a base-excited SDOF system. The response $\tilde{u}(t)$ (relative displacement) depends on the ground acceleration $\ddot{u}_g(t)$, the system's natural frequency $\omega_n$, and its damping ratio $\zeta$.

#### 3.1 Relation to Force-Excited Systems

The equation for a force-excited SDOF system is:
$m\ddot{x}(t) + c\dot{x}(t) + kx(t) = F(t)$

If we define $F(t) = F_0 \sin(\omega t)$, the response is $x(t)$.

Comparing the base-excited equation:
$\ddot{\tilde{u}}(t) + 2\zeta\omega_n\dot{\tilde{u}}(t) + \omega_n^2\tilde{u}(t) = -\ddot{u}_g(t)$

with the force-excited equation:
$\ddot{x}(t) + 2\zeta\omega_n\dot{x}(t) + \omega_n^2 x(t) = \frac{F(t)}{m}$

We can see that the response of the base-excited system is equivalent to a force-excited system where the exciting force is an effective force $P_{eff}(t) = -m\ddot{u}_g(t)$ and the stiffness and damping are the same.

However, a more direct comparison is often made using the **frequency response function (FRF)**.

---

### 4. Frequency Response Function (FRF) for Base-Excited Systems

The Frequency Response Function relates the steady-state amplitude and phase of the response to the amplitude and frequency of the excitation.

Let's consider a sinusoidal base acceleration: $\ddot{u}_g(t) = \Gamma \sin(\omega t)$, where $\Gamma$ is the amplitude and $\omega$ is the excitation frequency.

The equation becomes:
$\ddot{\tilde{u}}(t) + 2\zeta\omega_n\dot{\tilde{u}}(t) + \omega_n^2\tilde{u}(t) = -\Gamma \sin(\omega t)$

Assume a steady-state solution of the form:
$\tilde{u}(t) = U \sin(\omega t - \phi)$

Where $U$ is the amplitude of the relative displacement and $\phi$ is the phase lag.

Substituting into the equation of motion:
$-\omega^2 U \sin(\omega t - \phi) + 2\zeta\omega_n \omega U \cos(\omega t - \phi) + \omega_n^2 U \sin(\omega t - \phi) = -\Gamma \sin(\omega t)$

Using trigonometric identities:
$\sin(\omega t - \phi) = \sin(\omega t)\cos(\phi) - \cos(\omega t)\sin(\phi)$
$\cos(\omega t - \phi) = \cos(\omega t)\cos(\phi) + \sin(\omega t)\sin(\phi)$

Substituting these into the equation and equating coefficients of $\sin(\omega t)$ and $\cos(\omega t)$:

Coefficient of $\sin(\omega t)$:
$-\omega^2 U (\cos\phi) + 2\zeta\omega_n \omega U (\sin\phi) + \omega_n^2 U (\cos\phi) = -\Gamma$

Coefficient of $\cos(\omega t)$:
$-\omega^2 U (-\sin\phi) + 2\zeta\omega_n \omega U (\cos\phi) + \omega_n^2 U (-\sin\phi) = 0$

From the $\cos(\omega t)$ equation:
$U(\omega_n^2 - \omega^2)\sin\phi + U(2\zeta\omega_n\omega)\cos\phi = 0$
If $U \neq 0$ and $\omega \neq \omega_n$:
$(\omega_n^2 - \omega^2)\sin\phi = -(2\zeta\omega_n\omega)\cos\phi$
$\tan\phi = \frac{2\zeta\omega_n\omega}{\omega^2 - \omega_n^2}$

Now, from the $\sin(\omega t)$ equation:
$U [(\omega_n^2 - \omega^2)\cos\phi + (2\zeta\omega_n\omega)\sin\phi] = -\Gamma$

We can express the term in the bracket using $\tan\phi$.
Let $\sin\phi = \frac{2\zeta\omega_n\omega}{\sqrt{(\omega^2-\omega_n^2)^2 + (2\zeta\omega_n\omega)^2}}$ and $\cos\phi = \frac{\omega_n^2 - \omega^2}{\sqrt{(\omega^2-\omega_n^2)^2 + (2\zeta\omega_n\omega)^2}}$ (assuming $\omega > \omega_n$ for positive cosine if $\omega_n^2 - \omega^2$ is negative). The signs depend on the quadrant of $\phi$.

Alternatively, we can rewrite the equation as:
$U [(\omega_n^2 - \omega^2)\cos\phi + (2\zeta\omega_n\omega)\sin\phi] = -\Gamma$
Divide by $\cos\phi$:
$U [(\omega_n^2 - \omega^2) + (2\zeta\omega_n\omega)\tan\phi] = -\Gamma / \cos\phi$

Substitute $\tan\phi$:
$U \left[(\omega_n^2 - \omega^2) + (2\zeta\omega_n\omega)\frac{2\zeta\omega_n\omega}{\omega^2 - \omega_n^2}\right] = -\Gamma \frac{\sqrt{(\omega^2-\omega_n^2)^2 + (2\zeta\omega_n\omega)^2}}{\omega^2 - \omega_n^2}$ (assuming $\cos\phi$ has the sign of $\omega_n^2 - \omega^2$)

$U \left[\frac{(\omega_n^2 - \omega^2)^2 + (2\zeta\omega_n\omega)^2}{\omega^2 - \omega_n^2}\right] = -\Gamma \frac{\sqrt{(\omega^2-\omega_n^2)^2 + (2\zeta\omega_n\omega)^2}}{\omega^2 - \omega_n^2}$

$U = \frac{-\Gamma (\omega^2 - \omega_n^2)}{\sqrt{(\omega^2-\omega_n^2)^2 + (2\zeta\omega_n\omega)^2}}$

We can define the amplitude of relative displacement $U$ normalized by the base acceleration amplitude $\Gamma$ as:

The **Amplitude Ratio** or **Transmissibility (TR)** can be expressed in two ways depending on what we are comparing.

For a base-excited system, the **relative displacement amplitude ratio** $U/\Gamma$ is given by:

$\frac{U}{\Gamma} = \frac{\omega_n^2 - \omega^2}{(\omega_n^2 - \omega^2)^2 + (2\zeta\omega_n\omega)^2}$ - This appears incorrect due to sign. Let's re-evaluate.

The equation is $\ddot{\tilde{u}}(t) + 2\zeta\omega_n\dot{\tilde{u}}(t) + \omega_n^2\tilde{u}(t) = -\ddot{u}_g(t)$.
If $\ddot{u}_g(t) = \Gamma \sin(\omega t)$, then the effective force is $P_{eff}(t) = -m\Gamma \sin(\omega t)$.
The force-excited equation is $\ddot{x}(t) + 2\zeta\omega_n\dot{x}(t) + \omega_n^2 x(t) = \frac{F(t)}{m}$.
So, $x(t) = \tilde{u}(t)$, $F(t) = -m\Gamma \sin(\omega t)$.
The steady-state response of a force-excited system is $x_{ss}(t) = \frac{F_0/k}{1 - (\omega/\omega_n)^2 + 2i\zeta(\omega/\omega_n)}$.
The amplitude is $|x_{ss}| = \frac{F_0}{k \sqrt{(1 - (\omega/\omega_n)^2)^2 + (2\zeta\omega/\omega_n)^2}}$.

Here, $F_0 = m\Gamma$. So,
$|\tilde{u}_{ss}| = \frac{m\Gamma}{k \sqrt{(1 - (\omega/\omega_n)^2)^2 + (2\zeta\omega/\omega_n)^2}} = \frac{\Gamma/\omega_n^2}{\sqrt{(1 - (\omega/\omega_n)^2)^2 + (2\zeta\omega/\omega_n)^2}}$
$|\tilde{u}_{ss}| = \frac{\Gamma}{\omega_n^2 \sqrt{(1 - \omega^2/\omega_n^2)^2 + (2\zeta\omega/\omega_n)^2}} = \frac{\Gamma}{\sqrt{(\omega_n^2 - \omega^2)^2 + (2\zeta\omega_n\omega)^2}}$

So, the amplitude of relative displacement $U$ is:
$U = \frac{\Gamma}{\sqrt{(\omega_n^2 - \omega^2)^2 + (2\zeta\omega_n\omega)^2}}$

The **Amplitude Ratio of Relative Displacement** is:
$|H_{RSD}(\omega)| = \frac{U}{\Gamma} = \frac{1}{\sqrt{(\omega_n^2 - \omega^2)^2 + (2\zeta\omega_n\omega)^2}}$

We can also express this in terms of frequency ratio $r = \omega/\omega_n$:
$|H_{RSD}(\omega)| = \frac{1}{\sqrt{(\omega_n^2(1 - r^2))^2 + (2\zeta\omega_n^2 r)^2}}} = \frac{1}{\omega_n^2\sqrt{(1 - r^2)^2 + (2\zeta r)^2}}}$
This is the **relative displacement amplitude ratio** normalized by $\Gamma/\omega_n^2$, where $\Gamma$ is base acceleration amplitude. This is a common way to express it.

Let's consider the **absolute displacement amplitude ratio**, which is the ratio of the amplitude of absolute displacement $U_{abs}$ to the base displacement amplitude $u_{g0} = \Gamma/\omega_n^2$.
$u(t) = u_g(t) + \tilde{u}(t)$
$u(t) = u_{g0} \sin(\omega t) + U \sin(\omega t - \phi)$
The amplitude of the absolute displacement is related to $U$ and $u_{g0}$.

A more relevant FRF for base excitation is often related to the **Transmissibility (TR)**, which is the ratio of the amplitude of the force transmitted to the base to the amplitude of the exciting force.

For base excitation, the force transmitted to the base is the spring force plus the damping force acting on the mass:
$F_{trans} = k\tilde{u}(t) + c\dot{\tilde{u}}(t)$
The amplitude of this transmitted force is $F_{trans, 0} = |k U \cos\phi + c\omega U \sin\phi|$.
We know $F_{trans} = -m\ddot{u}(t)$.
The amplitude of the transmitted force $F_{trans, 0}$ is equal to the amplitude of the inertial force $-m\ddot{u}(t)$.
The absolute acceleration of the mass is $\ddot{u}(t) = \ddot{u}_g(t) + \ddot{\tilde{u}}(t)$.
When $\ddot{u}_g(t) = \Gamma \sin(\omega t)$, the absolute acceleration is $\ddot{u}(t) = \Gamma \sin(\omega t) - \omega^2 U \sin(\omega t - \phi)$.

The **Force Transmissibility (TR)** is defined as the ratio of the amplitude of the force transmitted to the foundation to the amplitude of the force that would be exerted by the mass if it were subjected to the base acceleration statically:
Base static force = $m \times$ maximum base acceleration amplitude $= m\Gamma$.

The force transmitted to the foundation is equal to the inertial force of the mass, $-m\ddot{u}(t)$.
The amplitude of transmitted force is $F_{trans, 0} = m |\ddot{u}(t)|_{max}$.
From $m\ddot{u}(t) + c\dot{u}(t) + ku(t) = 0$, this is not correct.

Let's go back to the definition of transmitted force from the FBD of the mass in an inertial frame:
The force exerted *by* the mass on the support is equal and opposite to the forces exerted *by* the support on the mass.
Forces exerted by the support on the mass:
Spring force = $-k(u(t) - u_g(t)) = -k\tilde{u}(t)$
Damping force = $-c(\dot{u}(t) - \dot{u}_g(t)) = -c\dot{\tilde{u}}(t)$
These are the forces that the spring and dashpot exert on the mass.

The equation of motion is $m\ddot{u}(t) = -k\tilde{u}(t) - c\dot{\tilde{u}}(t)$.
So the resultant force on the mass is $m\ddot{u}(t)$.
The force transmitted to the base is the sum of the spring and damping forces:
$F_{trans} = k\tilde{u}(t) + c\dot{\tilde{u}}(t)$.
The amplitude of the transmitted force is $F_{trans, 0} = kU|\cos\phi| + c\omega U|\sin\phi|$.

Using the relationships for $U$ and $\tan\phi$:
$F_{trans, 0} = k U + c\omega U \tan\phi'$ where $\phi'$ is the phase of $k\tilde{u}$ relative to the excitation.
Let's use the expression for transmitted force directly from the equation:
$F_{trans} = -m\ddot{u}(t) = -m(\ddot{\tilde{u}}(t) + \ddot{u}_g(t))$
The amplitude of the transmitted force is $F_{trans, 0} = m |-\ddot{\tilde{u}}(t) - \ddot{u}_g(t)|_{max}$.

This is getting complicated. Let's simplify the interpretation of FRF for base excitation.

The **relative displacement amplitude ratio** is the most direct interpretation:
$\frac{U}{u_{g0}} = \frac{U}{\Gamma/\omega_n^2} = \frac{1}{\sqrt{(1 - r^2)^2 + (2\zeta r)^2}}$ where $r = \omega/\omega_n$.
This quantity indicates how much the relative displacement is amplified (or deamplified) compared to the base displacement.

The **absolute acceleration amplitude ratio** is also very important in earthquake engineering.
$\frac{|\ddot{u}(t)|_{max}}{|\ddot{u}_g(t)|_{max}} = \frac{|\ddot{u}|_{max}}{\Gamma}$
$|\ddot{u}|_{max} = |-\omega^2 U \sin(\omega t - \phi) - \Gamma \sin(\omega t)|_{max}$

It can be shown that:
$|\ddot{u}(t)|_{max} = \omega_n^2 U \sqrt{\frac{(1-r^2)^2 + (2\zeta r)^2}{(1-r^2)^2}} = \omega_n^2 \frac{\Gamma}{\omega_n^2\sqrt{(1-r^2)^2+(2\zeta r)^2}} \sqrt{\frac{(1-r^2)^2 + (2\zeta r)^2}{(1-r^2)^2}}$
$|\ddot{u}|_{max} = \Gamma \sqrt{\frac{1 + (2\zeta r)^2}{(1-r^2)^2 + (2\zeta r)^2}}$

So, the **Absolute Acceleration Amplification Factor (AAF)** is:
$AAF = \frac{|\ddot{u}|_{max}}{\Gamma} = \sqrt{\frac{1 + (2\zeta r)^2}{(1-r^2)^2 + (2\zeta r)^2}}}$

**Interpretation of FRFs:**

*   **Relative Displacement Ratio ($U/u_{g0}$):**
    *   At low frequencies ($r \ll 1$), $U/u_{g0} \approx 1$. The mass follows the base motion with little relative displacement.
    *   As $r \to 1$ (resonance), $U/u_{g0}$ increases significantly, especially for low damping.
    *   At high frequencies ($r \gg 1$), $U/u_{g0} \to 0$. The mass tends to remain stationary, and the base moves underneath it.

*   **Absolute Acceleration Amplification Factor (AAF):**
    *   At low frequencies ($r \ll 1$), $AAF \approx 1$. The absolute acceleration of the mass is similar to the base acceleration.
    *   As $r \to 1$ (resonance), $AAF$ increases significantly, proportional to $1/(2\zeta)$. For very low damping, this can be very large.
    *   At high frequencies ($r \gg 1$), $AAF \to r^2$. The absolute acceleration of the mass is amplified by the square of the frequency ratio, as it tends to stay put while the base accelerates.

---

### 5. Response to Different Types of Base Excitations

#### 5.1 Sinusoidal Base Excitation

As analyzed above, the response is characterized by the steady-state solution determined by the FRFs. The peak response occurs near resonance.

#### 5.2 Impulsive Base Excitation (e.g., a step change in velocity)

If $\ddot{u}_g(t)$ is an impulse (e.g., $\ddot{u}_g(t) = V_0 \delta(t)$), the equation is:
$\ddot{\tilde{u}}(t) + 2\zeta\omega_n\dot{\tilde{u}}(t) + \omega_n^2\tilde{u}(t) = -V_0 \delta(t)$

The solution depends on the initial conditions after the impulse. For example, if the system starts from rest, the response is governed by the homogeneous equation with initial conditions set by the impulse.
The solution for an undamped system ($\zeta=0$) from rest to an impulse of acceleration:
$\ddot{\tilde{u}}(t) + \omega_n^2\tilde{u}(t) = -\delta(t)$
The solution is $\tilde{u}(t) = -\frac{1}{\omega_n}\sin(\omega_n t)$ for $t>0$.

#### 5.3 Earthquake Ground Motion (Stochastic or Recorded)

Earthquake ground motions are generally **non-periodic, irregular, and random** in nature. They are characterized by transient vibrations with varying frequencies and amplitudes.

*   **Time History Analysis:** For realistic earthquake records, we cannot use simple analytical solutions like those for sinusoidal excitation. The response is calculated numerically by solving the equation of motion step-by-step using methods like the **Newmark-beta method** or **Wilson-theta method**.
*   **Response Spectrum Analysis:** This is a common method in seismic design. It uses the **maximum response** of a set of SDOF systems with different natural frequencies and damping ratios to a specific ground motion. The response spectrum plots these maximum responses (e.g., spectral acceleration, spectral velocity, spectral displacement) against the natural period (or frequency) of the SDOF system.

    *   **Key Concept:** The **Design Spectrum** is often used, which is a smoothed version of the response spectrum from a real earthquake record or a theoretical spectrum representing expected ground motions.
    *   **Response of SDOF to Earthquake:**
        *   **Spectral Acceleration ($S_a$):** Represents the maximum absolute acceleration of an SDOF system with a given natural period and damping, divided by the acceleration due to gravity. In our notation, $S_a = |\ddot{u}|_{max} / g$.
        *   **Spectral Displacement ($S_d$):** Represents the maximum relative displacement of an SDOF system. $S_d = U_{max}$.
        *   **Spectral Velocity ($S_v$):** Represents the maximum relative velocity. $S_v = \omega_n U_{max}$.

    *   The equation of motion can be used to derive relationships between these spectral quantities. For example, the force exerted on the structure during an earthquake is often approximated as $F = m S_a$, and the corresponding displacement is $S_d$.

---

### 6. Important Points to Remember

*   **Equation of Motion:** $m\ddot{\tilde{u}}(t) + c\dot{\tilde{u}}(t) + k\tilde{u}(t) = -m\ddot{u}_g(t)$
*   **Normalized Equation:** $\ddot{\tilde{u}}(t) + 2\zeta\omega_n\dot{\tilde{u}}(t) + \omega_n^2\tilde{u}(t) = -\ddot{u}_g(t)$
*   **Relative vs. Absolute Motion:** The formulation is typically in terms of relative displacement $\tilde{u}(t) = u(t) - u_g(t)$.
*   **Effective Force:** The base acceleration creates an "effective force" of $-m\ddot{u}_g(t)$.
*   **Frequency Response Functions (FRFs):** Characterize the system's response to sinusoidal excitation. Key FRFs include the relative displacement ratio and the absolute acceleration amplification factor.
*   **Resonance:** The system is most sensitive to excitation frequencies close to its natural frequency $\omega_n$. Damping is crucial for mitigating resonant amplification.
*   **Earthquake Response:** Real earthquake ground motions are complex. Time history analysis and response spectrum analysis are essential tools.
*   **Spectral Quantities:** $S_a$, $S_v$, $S_d$ represent peak responses and are fundamental to seismic design.

---

### 7. Practice Questions and Exercises

**Question 1:**
A single-degree-of-freedom system has mass $m = 1000$ kg, stiffness $k = 10,000$ N/m, and damping coefficient $c = 200$ Ns/m. The base of the system is subjected to a harmonic acceleration $\ddot{u}_g(t) = 0.1 \sin(5t) \, \text{m/s}^2$.
Calculate:
a) The natural frequency ($\omega_n$) and damping ratio ($\zeta$).
b) The frequency of the base excitation ($\omega$).
c) The steady-state amplitude of the relative displacement ($\tilde{u}_{max}$).
d) The steady-state amplitude of the absolute acceleration ($|\ddot{u}|_{max}$).

**Solution 1:**
a)
$\omega_n = \sqrt{k/m} = \sqrt{10000 / 1000} = \sqrt{10} \approx 3.16 \, \text{rad/s}$
$\zeta = \frac{c}{2\sqrt{mk}} = \frac{200}{2\sqrt{1000 \times 10000}} = \frac{200}{2 \times 1000 \times \sqrt{10}} = \frac{200}{2000\sqrt{10}} \approx \frac{1}{10\sqrt{10}} \approx 0.0316$

b)
The base acceleration is $\ddot{u}_g(t) = 0.1 \sin(5t)$.
So, $\omega = 5 \, \text{rad/s}$.

c)
The amplitude of relative displacement is $U = \frac{\Gamma}{\sqrt{(\omega_n^2 - \omega^2)^2 + (2\zeta\omega_n\omega)^2}}$, where $\Gamma = 0.1 \, \text{m/s}^2$.
$\omega_n^2 = 10 \, (\text{rad/s})^2$
$\omega^2 = 25 \, (\text{rad/s})^2$
$2\zeta\omega_n\omega = 2 \times 0.0316 \times 3.16 \times 5 \approx 0.999 \approx 1.0$

Denominator: $\sqrt{(10 - 25)^2 + (1.0)^2} = \sqrt{(-15)^2 + 1} = \sqrt{225 + 1} = \sqrt{226} \approx 15.03$

$U = \frac{0.1}{15.03} \approx 0.00665 \, \text{m}$ or $6.65 \, \text{mm}$.

d)
The Absolute Acceleration Amplification Factor (AAF) is $AAF = \sqrt{\frac{1 + (2\zeta r)^2}{(1-r^2)^2 + (2\zeta r)^2}}}$, where $r = \omega/\omega_n$.
$r = 5 / 3.16 \approx 1.58$
$2\zeta r \approx 2 \times 0.0316 \times 1.58 \approx 0.0999 \approx 0.1$
$1-r^2 \approx 1 - (1.58)^2 \approx 1 - 2.4964 \approx -1.4964$

$AAF = \sqrt{\frac{1 + (0.1)^2}{(-1.4964)^2 + (0.1)^2}} = \sqrt{\frac{1 + 0.01}{2.239 + 0.01}} = \sqrt{\frac{1.01}{2.249}} \approx \sqrt{0.449} \approx 0.67$

The absolute acceleration amplitude is $|\ddot{u}|_{max} = AAF \times \Gamma = 0.67 \times 0.1 \, \text{m/s}^2 = 0.067 \, \text{m/s}^2$.

---

**Question 2:**
Explain the concept of a response spectrum and how it is used in seismic design for a base-excited SDOF system.

**Solution 2:**
A response spectrum is a graphical representation of the maximum response (e.g., displacement, velocity, or acceleration) of a set of idealized single-degree-of-freedom systems with varying natural periods and damping ratios when subjected to a specific earthquake ground motion.

*   **How it's used:**
    1.  **Characterizing Ground Motion:** A response spectrum summarizes the damaging potential of an earthquake for structures of different natural periods.
    2.  **Seismic Design:** For a structure idealized as an SDOF system with a known natural period ($T_n = 2\pi/\omega_n$) and damping ratio ($\zeta$), the response spectrum directly provides the maximum expected displacement ($S_d$), velocity ($S_v$), or acceleration ($S_a$) it would experience.
    3.  **Calculating Design Forces:** The seismic force used for design can be approximated as $F = m S_a$, where $m$ is the mass of the SDOF system and $S_a$ is the spectral acceleration read from the design spectrum for the system's natural period and damping.
    4.  **Simplification:** Instead of performing a full time history analysis for every possible earthquake, engineers can use a design response spectrum (which is often a smoothed, conservative representation of actual earthquake spectra) to estimate seismic demands.

---
