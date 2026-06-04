---
title: "Response to impulse loading  – half-sine, rectangular and triangular pulses"
subject: "STRUCTURAL DYNAMICS"
module: "Module 2: Response to harmonic loading  – steady state and transient states steady sate amplitude, Dynamic magnification factor, force transmissibility and vibration isolation."
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba81141b"
status: "completed"
scrapedAt: "2026-05-20T19:01:38.219Z"
---
# Structural Dynamics: Module 2 - Response to Harmonic Loading & Impulse Loading

## 2.1 Introduction to Response to Harmonic Loading

This section introduces the fundamental concepts of how structures respond to time-varying loads, specifically focusing on harmonic (sinusoidal) excitation.

### Key Concepts & Definitions

*   **Structural Dynamics:** The study of the behavior of structures under dynamic loads (loads that vary with time).
*   **Dynamic Load:** A load that changes in magnitude, direction, or both over time. Examples include wind, earthquakes, machinery vibrations, and traffic.
*   **Harmonic Loading:** A type of dynamic loading that can be represented by a sinusoidal function, characterized by its amplitude, frequency, and phase.
    *   The general form of a harmonic force is $F(t) = F_0 \sin(\omega t + \phi)$ or $F(t) = F_0 \cos(\omega t + \phi)$, where:
        *   $F_0$: Amplitude of the force.
        *   $\omega$: Excitation frequency (angular velocity).
        *   $t$: Time.
        *   $\phi$: Phase angle.
*   **Degrees of Freedom (DOF):** The independent parameters that define the configuration of a dynamic system. For a single-degree-of-freedom (SDOF) system, this is usually a displacement.
*   **Equation of Motion:** A mathematical equation that describes the dynamic behavior of a system. For an SDOF system subjected to harmonic loading, it takes the form:
    $m\ddot{x}(t) + c\dot{x}(t) + kx(t) = F(t)$
    where:
        *   $m$: Mass.
        *   $c$: Damping coefficient.
        *   $k$: Stiffness.
        *   $\ddot{x}(t)$: Acceleration.
        *   $\dot{x}(t)$: Velocity.
        *   $x(t)$: Displacement.
        *   $F(t)$: External force.

### 2.2 Steady State and Transient States

When a structure is subjected to a dynamic load, its response can be broadly categorized into two parts: the transient response and the steady-state response.

#### Transient Response

*   **Definition:** The initial part of the response that occurs immediately after the load is applied. It depends on the initial conditions of the system (initial displacement and velocity) and the nature of the applied load.
*   **Characteristics:**
    *   Decays over time due to damping.
    *   Can be oscillatory or non-oscillatory.
    *   Influenced by initial system states.
*   **Mathematical Representation:** Often associated with the homogeneous solution of the equation of motion.

#### Steady State Response

*   **Definition:** The part of the response that persists after the transient effects have died out. It is solely dependent on the characteristics of the applied dynamic load and the system's properties (mass, stiffness, damping).
*   **Characteristics:**
    *   It has the same frequency as the applied forcing function.
    *   It oscillates with a constant amplitude.
    *   It is independent of the initial conditions.
*   **Mathematical Representation:** Often associated with the particular solution of the equation of motion.
*   **Total Response:** $x(t) = x_{\text{transient}}(t) + x_{\text{steady-state}}(t)$

**Example:** Imagine pushing a child on a swing.
*   **Transient:** The initial pushes and the back-and-forth motion before it settles into a regular rhythm.
*   **Steady State:** The consistent, rhythmic swinging that continues as long as you keep pushing with a regular force at the swing's natural frequency.

## 2.3 Steady State Amplitude for Undamped Systems

Let's consider an undamped SDOF system ($c=0$) subjected to harmonic loading $F(t) = F_0 \sin(\omega t)$. The equation of motion becomes:

$m\ddot{x}(t) + kx(t) = F_0 \sin(\omega t)$

**Key Concepts & Definitions:**

*   **Natural Frequency ($\omega_n$):** The frequency at which a system will oscillate if disturbed from its equilibrium position and then allowed to vibrate freely without any damping or external force. For an undamped SDOF system, $\omega_n = \sqrt{k/m}$.
*   **Excitation Frequency ($\omega$):** The frequency of the applied external force.
*   **Frequency Ratio ($r$):** The ratio of the excitation frequency to the natural frequency, $r = \omega / \omega_n$.

**Derivation of Steady State Amplitude (Undamped):**

We look for a particular solution of the form $x_p(t) = X \sin(\omega t)$, where $X$ is the steady-state amplitude.
Then $\dot{x}_p(t) = X\omega \cos(\omega t)$ and $\ddot{x}_p(t) = -X\omega^2 \sin(\omega t)$.

Substituting into the equation of motion:
$m(-X\omega^2 \sin(\omega t)) + k(X \sin(\omega t)) = F_0 \sin(\omega t)$
$-mX\omega^2 \sin(\omega t) + kX \sin(\omega t) = F_0 \sin(\omega t)$

Dividing by $\sin(\omega t)$:
$X(k - m\omega^2) = F_0$
$X = \frac{F_0}{k - m\omega^2}$

We can rewrite this in terms of natural frequency and frequency ratio:
$X = \frac{F_0}{k(1 - m\omega^2/k)} = \frac{F_0}{k(1 - \omega^2/\omega_n^2)}$
$X = \frac{F_0}{k(1 - r^2)}$

The static deflection under a force $F_0$ is $x_{st} = F_0/k$. So, we can also write:
$X = x_{st} \frac{1}{1 - r^2}$

**Important Point to Remember:**
For undamped systems, as the frequency ratio $r$ approaches 1 (i.e., $\omega \approx \omega_n$), the steady-state amplitude $X$ approaches infinity. This phenomenon is called **resonance**.

## 2.4 Dynamic Magnification Factor (DMF)

The Dynamic Magnification Factor (DMF), also known as the amplification factor, quantifies how much the dynamic response amplitude is amplified compared to the static deflection.

### Key Concepts & Definitions

*   **Dynamic Magnification Factor (DMF):** The ratio of the dynamic steady-state amplitude to the static deflection.
    *   For an undamped system: $\text{DMF}_{\text{undamped}} = \frac{X}{x_{st}} = \frac{1}{1 - r^2}$
*   **Damped System:** When damping is present ($c > 0$), the equation of motion is $m\ddot{x}(t) + c\dot{x}(t) + kx(t) = F_0 \sin(\omega t)$.
    *   The steady-state solution takes the form $x_p(t) = X \sin(\omega t - \psi)$, where $X$ is the amplitude and $\psi$ is the phase lag.
    *   The steady-state amplitude for a damped system is:
        $X = \frac{F_0}{\sqrt{(k - m\omega^2)^2 + (c\omega)^2}}$
    *   We can rewrite this using $k = m\omega_n^2$:
        $X = \frac{F_0}{\sqrt{(m\omega_n^2 - m\omega^2)^2 + (c\omega)^2}} = \frac{F_0}{m\omega_n^2 \sqrt{(1 - (\omega/\omega_n)^2)^2 + (c\omega/(m\omega_n^2))^2}}$
        $X = \frac{F_0/k}{\sqrt{(1 - r^2)^2 + (c\omega/(m\omega_n^2))^2}}$
    *   We need to express the damping term in a more standard form. Define the **damping ratio ($\zeta$)**: $\zeta = c / (2\sqrt{mk})$.
        Since $\omega_n = \sqrt{k/m}$, we have $m\omega_n = \sqrt{mk}$.
        So, $c = 2\zeta\sqrt{mk} = 2\zeta m\omega_n$.
        Therefore, $c\omega/(m\omega_n^2) = (2\zeta m\omega_n)\omega / (m\omega_n^2) = 2\zeta (\omega/\omega_n) = 2\zeta r$.
    *   Substituting this back into the amplitude equation:
        $X = \frac{F_0/k}{\sqrt{(1 - r^2)^2 + (2\zeta r)^2}}$
    *   The DMF for a damped system is:
        $\text{DMF}_{\text{damped}} = \frac{X}{x_{st}} = \frac{1}{\sqrt{(1 - r^2)^2 + (2\zeta r)^2}}$

**Important Points to Remember:**

*   **Resonance:** Even with damping, the DMF is maximum when $r$ is close to 1. However, damping significantly limits the amplitude at resonance.
*   **Damping Ratio ($\zeta$):** A dimensionless parameter representing the level of damping in the system.
    *   $\zeta = 0$: Undamped system.
    *   $0 < \zeta < 1$: Underdamped system (oscillatory decay).
    *   $\zeta = 1$: Critically damped system (fastest decay without oscillation).
    *   $\zeta > 1$: Overdamped system (slow decay without oscillation).
*   **Peak of DMF:** The DMF reaches its maximum not exactly at $r=1$, but at a slightly lower frequency called the frequency of maximum amplification. This occurs when $r = \sqrt{1 - 2\zeta^2}$ (for $\zeta < 1/\sqrt{2}$).
*   **At resonance ($r=1$):** $\text{DMF}_{\text{damped}} = \frac{1}{2\zeta}$. This shows that as damping increases, the DMF at resonance decreases.

**Example:** A structure with a natural frequency of 10 Hz has a static deflection of 2 mm under a given load. If it's subjected to harmonic loading at 10 Hz with a damping ratio of 0.05, what is the steady-state amplitude?

*   $\omega_n = 2\pi \times 10 \text{ rad/s}$
*   $\omega = 2\pi \times 10 \text{ rad/s}$
*   $r = \omega / \omega_n = 1$
*   $x_{st} = 2 \text{ mm}$
*   $\zeta = 0.05$

$\text{DMF}_{\text{damped}} = \frac{1}{\sqrt{(1 - 1^2)^2 + (2 \times 0.05 \times 1)^2}} = \frac{1}{\sqrt{0 + (0.1)^2}} = \frac{1}{0.1} = 10$

Steady-state amplitude $X = \text{DMF}_{\text{damped}} \times x_{st} = 10 \times 2 \text{ mm} = 20 \text{ mm}$.

## 2.5 Force Transmissibility

Force Transmissibility is a measure of how effectively the vibration from a vibrating system is transmitted to its support or foundation. It's a crucial concept for designing vibration isolation systems.

### Key Concepts & Definitions

*   **Force Transmissibility (FT):** The ratio of the amplitude of the force transmitted to the foundation to the amplitude of the applied external force.
    *   $FT = \frac{|F_T|}{|F_0|}$
    *   Where $|F_T|$ is the amplitude of the transmitted force and $|F_0|$ is the amplitude of the driving force.

**Derivation of Force Transmissibility:**

Consider a system with mass $m$, stiffness $k$, damping $c$, where the mass is supported by a spring and damper. The excitation is applied to the mass, and we want to find the force transmitted to the foundation.

The equation of motion for the mass is:
$m\ddot{x}(t) + c\dot{x}(t) + kx(t) = F_0 \sin(\omega t)$

The force transmitted to the foundation is the force exerted by the spring and the damper on the foundation. Assuming the foundation is fixed:
$F_T(t) = kx(t) + c\dot{x}(t)$

The steady-state solution for displacement is $x(t) = X \sin(\omega t - \psi)$, where $X = \frac{F_0/k}{\sqrt{(1 - r^2)^2 + (2\zeta r)^2}}$ and $\tan(\psi) = \frac{2\zeta r}{1 - r^2}$.

Then, $\dot{x}(t) = X\omega \cos(\omega t - \psi) = X\omega \sin(\omega t - \psi + \pi/2)$.

Substituting $x(t)$ and $\dot{x}(t)$ into the transmitted force equation:
$F_T(t) = k \left( X \sin(\omega t - \psi) \right) + c \left( X\omega \cos(\omega t - \psi) \right)$
$F_T(t) = kX \sin(\omega t - \psi) + c\omega X \sin(\omega t - \psi + \pi/2)$

We can use complex representation for easier manipulation.
Let $x(t) = X e^{i(\omega t - \psi)}$. Then $\dot{x}(t) = i\omega X e^{i(\omega t - \psi)}$.
$F_T(t) = k X e^{i(\omega t - \psi)} + c (i\omega X e^{i(\omega t - \psi)})$
$F_T(t) = (k + i\omega c) X e^{i(\omega t - \psi)}$

Substitute the expression for $X$:
$F_T(t) = (k + i\omega c) \frac{F_0/k}{\sqrt{(1 - r^2)^2 + (2\zeta r)^2}} e^{i(\omega t - \psi)}$
$F_T(t) = \frac{F_0}{k} (k + i\omega c) \frac{1}{\sqrt{(1 - r^2)^2 + (2\zeta r)^2}} e^{i(\omega t - \psi)}$
$F_T(t) = F_0 \frac{k + i\omega c}{k\sqrt{(1 - r^2)^2 + (2\zeta r)^2}} e^{i(\omega t - \psi)}$

The amplitude of the transmitted force $|F_T|$ is the magnitude of the complex term multiplying $F_0$.
$|F_T| = \left| \frac{k + i\omega c}{k\sqrt{(1 - r^2)^2 + (2\zeta r)^2}} \right| |F_0| \times (\text{magnitude of } e^{i(\omega t - \psi)})$
$|F_T| = \frac{|k + i\omega c|}{k\sqrt{(1 - r^2)^2 + (2\zeta r)^2}} |F_0|$
$|F_T| = \frac{\sqrt{k^2 + (\omega c)^2}}{k\sqrt{(1 - r^2)^2 + (2\zeta r)^2}} |F_0|$

Force Transmissibility $FT = \frac{|F_T|}{|F_0|} = \frac{\sqrt{k^2 + (\omega c)^2}}{k\sqrt{(1 - r^2)^2 + (2\zeta r)^2}}$

We can simplify this using $k = m\omega_n^2$ and $c = 2\zeta\sqrt{mk} = 2\zeta m\omega_n$:
$\sqrt{k^2 + (\omega c)^2} = \sqrt{(m\omega_n^2)^2 + (\omega (2\zeta m\omega_n))^2} = m\omega_n^2 \sqrt{1 + (2\zeta (\omega/\omega_n))^2} = k \sqrt{1 + (2\zeta r)^2}$

So, $FT = \frac{k \sqrt{1 + (2\zeta r)^2}}{k\sqrt{(1 - r^2)^2 + (2\zeta r)^2}} = \frac{\sqrt{1 + (2\zeta r)^2}}{\sqrt{(1 - r^2)^2 + (2\zeta r)^2}}$

Alternatively, note that the transmitted force is the force from the spring and damper: $F_T = kx + c\dot{x}$. The amplitude of this is $|kX + ic\omega X| = |X(k+ic\omega)|$.
$|F_T| = |X| \sqrt{k^2 + (c\omega)^2}$.
We know $X = \frac{F_0}{\sqrt{(k - m\omega^2)^2 + (c\omega)^2}}$.
$FT = \frac{|X|\sqrt{k^2 + (c\omega)^2}}{|F_0|} = \frac{F_0/\sqrt{(k - m\omega^2)^2 + (c\omega)^2} \times \sqrt{k^2 + (c\omega)^2}}{|F_0|}$
$FT = \frac{\sqrt{k^2 + (c\omega)^2}}{\sqrt{(k - m\omega^2)^2 + (c\omega)^2}}$

Dividing numerator and denominator by $k$:
$FT = \frac{\sqrt{1 + (c\omega/k)^2}}{\sqrt{(1 - m\omega^2/k)^2 + (c\omega/k)^2}}$

Using $r = \omega/\omega_n$ and $\zeta = c/(2\sqrt{mk})$:
$c\omega/k = (c/\sqrt{mk}) (\omega\sqrt{m/k}) = (c/(2\sqrt{mk}) \times 2) (\omega/\omega_n) = 2\zeta r$.
$m\omega^2/k = (\omega/\omega_n)^2 = r^2$.

$FT = \frac{\sqrt{1 + (2\zeta r)^2}}{\sqrt{(1 - r^2)^2 + (2\zeta r)^2}}$

**Important Points to Remember:**

*   **Relationship to DMF:** Force Transmissibility is related to the Dynamic Magnification Factor.
    $FT = \frac{|F_T|}{|F_0|} = \frac{|kx + c\dot{x}|}{|F_0|} = \frac{|k| |x|}{|F_0|} \left| \frac{k+ic\omega}{k} \right| = \frac{k X}{F_0} \left| 1 + i \frac{c\omega}{k} \right|$
    $FT = \frac{1}{\text{DMF}_{\text{damped}}} \left| 1 + i 2\zeta r \right| = \frac{1}{\text{DMF}_{\text{damped}}} \sqrt{1 + (2\zeta r)^2}$
    Wait, this is not correct. Let's go back to the relation between transmitted force and displacement amplitude.
    $|F_T| = |X| \sqrt{k^2 + (c\omega)^2}$
    $FT = \frac{|X|\sqrt{k^2 + (c\omega)^2}}{|F_0|} = \frac{X}{F_0/k} \frac{k}{|F_0|} \sqrt{1 + (c\omega/k)^2}$
    $FT = \text{DMF}_{\text{damped}} \times \frac{k}{F_0} \times \frac{F_0}{k} \sqrt{1 + (2\zeta r)^2}$ --> Incorrect manipulation

    Let's use:
    $FT = \frac{\sqrt{1 + (2\zeta r)^2}}{\sqrt{(1 - r^2)^2 + (2\zeta r)^2}}$

*   **Vibration Isolation:** For effective vibration isolation, we want $FT < 1$. This occurs when the frequency ratio $r$ is greater than $\sqrt{2}$.
    *   If $r < \sqrt{2}$, the transmitted force is greater than the exciting force ($FT > 1$). The system amplifies the vibration.
    *   If $r > \sqrt{2}$, the transmitted force is less than the exciting force ($FT < 1$). The system attenuates the vibration.
*   **Effect of Damping:**
    *   At low frequencies ($r \ll 1$), damping increases the transmitted force ($FT > 1$).
    *   At high frequencies ($r \gg 1$), damping slightly reduces the transmitted force ($FT < 1$).
    *   At resonance ($r = 1$), damping significantly reduces the transmitted force.

**Example:** An engine mounted on a system has a natural frequency of 15 Hz. The engine operates at 60 Hz. The damping ratio is 0.1. What is the force transmissibility?

*   $\omega_n = 2\pi \times 15 \text{ rad/s}$
*   $\omega = 2\pi \times 60 \text{ rad/s}$
*   $r = \omega / \omega_n = 60 / 15 = 4$
*   $\zeta = 0.1$

$FT = \frac{\sqrt{1 + (2 \times 0.1 \times 4)^2}}{\sqrt{(1 - 4^2)^2 + (2 \times 0.1 \times 4)^2}} = \frac{\sqrt{1 + (0.8)^2}}{\sqrt{(1 - 16)^2 + (0.8)^2}} = \frac{\sqrt{1 + 0.64}}{\sqrt{(-15)^2 + 0.64}}$
$FT = \frac{\sqrt{1.64}}{\sqrt{225 + 0.64}} = \frac{\sqrt{1.64}}{\sqrt{225.64}} = \frac{1.28}{15.02} \approx 0.085$

Since $FT \approx 0.085 < 1$, the engine vibration is well isolated.

## 2.6 Vibration Isolation

Vibration isolation is the process of reducing the transmission of vibration from a source to a receptor (or vice versa) using a flexible mounting system.

### Key Concepts & Definitions

*   **Vibration Isolation System:** Typically consists of a spring (to provide flexibility and tune the natural frequency) and a damper (to control resonance and reduce transmitted force at high frequencies).
*   **Goal of Vibration Isolation:** To ensure that the force transmitted to the foundation or sensitive equipment is minimized.
*   **Design Principle:** To operate the system at a frequency ratio $r = \omega / \omega_n > \sqrt{2}$. This means the natural frequency of the mounting system ($\omega_n$) should be significantly lower than the operating frequency of the equipment ($\omega$).
*   **Mass Ratio:** For an isolated object of mass $m$ on a mounting system with stiffness $k$ and damping $c$, the system's natural frequency is $\omega_n = \sqrt{k/m}$. This implies that to lower $\omega_n$, we need to reduce $k$ or increase $m$.

**How it works:**

*   **Low $r$ ($r < \sqrt{2}$):** The mounting system amplifies vibrations. This is generally undesirable for isolation.
*   **High $r$ ($r > \sqrt{2}$):** The mounting system attenuates vibrations, meaning the transmitted force is less than the exciting force. This is the principle of vibration isolation.

**Factors Affecting Vibration Isolation:**

1.  **Frequency Ratio ($r$):** Higher $r$ leads to better isolation.
2.  **Damping Ratio ($\zeta$):**
    *   Crucial for preventing excessive amplitude at resonance ($r \approx 1$).
    *   For vibration isolation ($r > \sqrt{2}$), minimal damping is preferred to maximize attenuation. However, some damping is always necessary to handle transient conditions and prevent excessive amplification during start-up/shut-down.
3.  **Static Deflection:** For a given mass and stiffness, a lower stiffness (and hence larger static deflection) will result in a lower natural frequency and a higher frequency ratio for a given operating frequency, leading to better isolation.

**Example Scenario:**

A sensitive laboratory instrument is prone to vibrations from nearby machinery. The machinery operates at a dominant frequency of 30 Hz. The instrument itself is sensitive to vibrations above 5 Hz. We want to mount the instrument on a system that will effectively isolate it.

*   Operating frequency of the source of vibration, $\omega = 2\pi \times 30 \text{ rad/s}$.
*   We need the natural frequency of the mounting system, $\omega_n$, to be significantly lower than $\omega$.
*   To ensure isolation, we aim for $r > \sqrt{2}$.
*   So, $\omega / \omega_n > \sqrt{2} \implies \omega_n < \omega / \sqrt{2}$.
*   $\omega_n < (2\pi \times 30) / \sqrt{2} \approx 133.3 \text{ rad/s}$.
*   This translates to a natural frequency $f_n < 30 / \sqrt{2} \approx 21.2 \text{ Hz}$.

We could choose a mounting system with a natural frequency of, say, 5 Hz to provide a good margin of safety and ensure the instrument's sensitivity range is not affected.

*   If we choose $f_n = 5$ Hz, then $r = 30 / 5 = 6$.
*   $FT = \frac{\sqrt{1 + (2\zeta \times 6)^2}}{\sqrt{(1 - 6^2)^2 + (2\zeta \times 6)^2}} = \frac{\sqrt{1 + (12\zeta)^2}}{\sqrt{(-35)^2 + (12\zeta)^2}}$

For small damping ($\zeta = 0.1$):
$FT = \frac{\sqrt{1 + (1.2)^2}}{\sqrt{1225 + (1.2)^2}} = \frac{\sqrt{1 + 1.44}}{\sqrt{1225 + 1.44}} = \frac{\sqrt{2.44}}{\sqrt{1226.44}} = \frac{1.56}{35.02} \approx 0.044$

This shows excellent isolation.

---

## 3. Response to Impulse Loading

This section focuses on the response of a single-degree-of-freedom (SDOF) system to impulsive (short-duration) loads. An impulse is characterized by a rapid application and removal of force, resulting in a change in momentum.

### Key Concepts & Definitions

*   **Impulse ($I$):** The integral of force with respect to time over the duration of application. It represents the total change in momentum.
    *   $I = \int_{t_1}^{t_2} F(t) dt$
    *   For a system with mass $m$, impulse $I = m \Delta v$, where $\Delta v$ is the change in velocity.
*   **Initial Conditions for Impulse Response:** When an impulse is applied, it imparts an initial velocity to the system.
    *   For an impulse applied at $t=0$, if the impulse is $I$, then the initial velocity is $\dot{x}(0^+) = I/m$. The initial displacement is typically $x(0^+) = 0$ (assuming the system starts from rest).
*   **Response of Undamped System to Impulse:** For an undamped system ($c=0$), after the impulse, the system will oscillate at its natural frequency $\omega_n$ with an amplitude determined by the initial velocity.
    $m\ddot{x}(t) + kx(t) = 0$
    The general solution is $x(t) = A \sin(\omega_n t) + B \cos(\omega_n t)$.
    Given initial conditions $x(0^+) = 0$ and $\dot{x}(0^+) = I/m$:
    $x(0^+) = B = 0$.
    $\dot{x}(t) = A\omega_n \cos(\omega_n t)$.
    $\dot{x}(0^+) = A\omega_n = I/m \implies A = I/(m\omega_n)$.
    So, $x(t) = \frac{I}{m\omega_n} \sin(\omega_n t)$.
    The amplitude of this response is $X_{\text{impulse}} = \frac{I}{m\omega_n} = \frac{I}{c_{st}}$, where $c_{st} = m\omega_n = \sqrt{mk}$ is the "natural damping" coefficient. This can also be expressed as $X_{\text{impulse}} = \frac{I}{\sqrt{mk}}$.
*   **Response of Damped System to Impulse:** For a damped system, the response will decay over time according to the damping characteristics. The solution involves the complementary function (transient response) with the initial velocity imparted by the impulse.

**Specific Impulse Shapes:**

We will consider the response to three common impulse shapes: half-sine, rectangular, and triangular. In all cases, the impulse $I$ is the area under the force-time curve.

### 3.1 Half-Sine Pulse

*   **Force Function:**
    $F(t) = F_0 \sin\left(\frac{\pi t}{T_p}\right)$, for $0 \leq t \leq T_p$
    $F(t) = 0$, for $t > T_p$
    where $T_p$ is the pulse duration.
*   **Impulse:**
    $I = \int_{0}^{T_p} F_0 \sin\left(\frac{\pi t}{T_p}\right) dt = F_0 \left[ -\frac{T_p}{\pi} \cos\left(\frac{\pi t}{T_p}\right) \right]_0^{T_p}$
    $I = F_0 \left( -\frac{T_p}{\pi} \cos(\pi) - (-\frac{T_p}{\pi} \cos(0)) \right) = F_0 \left( \frac{T_p}{\pi} - (-\frac{T_p}{\pi}) \right) = \frac{2F_0 T_p}{\pi}$
*   **Response:** The system is subjected to this force from $t=0$ to $t=T_p$. After $T_p$, the force becomes zero, and the system oscillates with its natural frequency and damping, with the initial velocity at $t=T_p$ determined by the applied force up to that point.

**Analysis Approach (for an undamped system):**

1.  **During the pulse ($0 \leq t \leq T_p$):**
    $m\ddot{x}(t) + kx(t) = F_0 \sin\left(\frac{\pi t}{T_p}\right)$
    The particular solution is of the form $x_p(t) = A \sin\left(\frac{\pi t}{T_p}\right)$.
    Substituting: $m(-A\frac{\pi^2}{T_p^2}\sin(\frac{\pi t}{T_p})) + k(A\sin(\frac{\pi t}{T_p})) = F_0 \sin(\frac{\pi t}{T_p})$
    $A(k - m\frac{\pi^2}{T_p^2}) = F_0 \implies A = \frac{F_0}{k - m(\pi/T_p)^2} = \frac{F_0/k}{1 - (\omega/\omega_n)^2 (\frac{1}{r_p^2})}$ -- this is incorrect form.
    Let's rewrite $F(t) = F_0 \sin(\omega_p t)$ where $\omega_p = \pi/T_p$.
    Then $A = \frac{F_0}{k - m\omega_p^2} = \frac{F_0}{k(1 - (\omega_p/\omega_n)^2)} = \frac{F_0}{k(1 - r_p^2)}$, where $r_p = \omega_p/\omega_n$.
    So, $x_p(t) = \frac{F_0}{k(1-r_p^2)} \sin(\omega_p t)$.

    The general solution during the pulse is $x(t) = A_1 \sin(\omega_n t) + B_1 \cos(\omega_n t) + \frac{F_0}{k(1-r_p^2)} \sin(\omega_p t)$.
    Using initial conditions $x(0)=0, \dot{x}(0)=0$:
    $x(0) = B_1 = 0$.
    $\dot{x}(t) = A_1 \omega_n \cos(\omega_n t) + \frac{F_0 \omega_p}{k(1-r_p^2)} \cos(\omega_p t)$.
    $\dot{x}(0) = A_1 \omega_n + \frac{F_0 \omega_p}{k(1-r_p^2)} = 0 \implies A_1 = -\frac{F_0 \omega_p}{k(1-r_p^2)\omega_n} = -\frac{F_0}{k(1-r_p^2)} \frac{\omega_p}{\omega_n} = -\frac{F_0}{k(1-r_p^2)} r_p$.

    So, during the pulse: $x(t) = \frac{F_0}{k(1-r_p^2)} \left( \sin(\omega_p t) - r_p \sin(\omega_n t) \right)$.

2.  **After the pulse ($t > T_p$):**
    The equation of motion is $m\ddot{x}(t) + kx(t) = 0$.
    The solution is $x(t) = A_2 \sin(\omega_n t) + B_2 \cos(\omega_n t)$.
    We need to determine $A_2$ and $B_2$ from the conditions at $t=T_p$.
    *   Continuity of displacement: $x(T_p)$ from the first phase.
    *   Continuity of velocity: $\dot{x}(T_p)$ from the first phase.
        $\dot{x}(T_p) = \frac{F_0}{k(1-r_p^2)} \left( \omega_p \cos(\omega_p T_p) - r_p \omega_n \cos(\omega_n T_p) \right)$.
        Since $\omega_p T_p = \pi$, $\cos(\omega_p T_p) = \cos(\pi) = -1$.
        $\dot{x}(T_p) = \frac{F_0}{k(1-r_p^2)} \left( -\omega_p - r_p \omega_n \cos(\omega_n T_p) \right)$.
        Substitute $r_p = \omega_p/\omega_n$:
        $\dot{x}(T_p) = \frac{F_0}{k(1-r_p^2)} \left( -\omega_p - \omega_p \cos(\omega_n T_p) \right) = -\frac{F_0 \omega_p}{k(1-r_p^2)} (1 + \cos(\omega_n T_p))$.
        Using $1 + \cos(\theta) = 2\cos^2(\theta/2)$:
        $\dot{x}(T_p) = -\frac{F_0 \omega_p}{k(1-r_p^2)} 2\cos^2(\omega_n T_p / 2)$.

    The amplitude of the response after the pulse for an undamped system is $X = \sqrt{A_2^2 + B_2^2}$.
    This analysis can become complex for damped systems.

**Simplified Approach using Impulse and Response Amplitude:**

For an undamped system, the response amplitude to an impulse $I$ applied instantaneously is $X_{\text{impulse}} = I / (m\omega_n)$.

For a half-sine pulse, the impulse is $I = 2F_0 T_p / \pi$.
The response amplitude is $X = \frac{2F_0 T_p}{\pi m \omega_n}$.
This simplified formula works best when the pulse duration $T_p$ is very short compared to the natural period $T_n = 2\pi/\omega_n$ ($T_p \ll T_n$), i.e., $r_p = \omega_p/\omega_n = (\pi/T_p)/\omega_n = (\pi/T_p) (T_n/2\pi) = T_n/(2T_p)$ is large.
In this case, the response is approximately a simple harmonic motion with this amplitude.

**Resonance Condition:** If the pulse duration $T_p$ is such that $\omega_p \approx \omega_n$, the response can be amplified significantly. For a half-sine pulse, $\omega_p = \pi/T_p$. Resonance occurs when $\pi/T_p \approx \omega_n$, or $T_p \approx \pi/\omega_n = T_n/2$.

### 3.2 Rectangular Pulse

*   **Force Function:**
    $F(t) = F_0$, for $0 \leq t \leq T_p$
    $F(t) = 0$, for $t > T_p$
*   **Impulse:**
    $I = \int_{0}^{T_p} F_0 dt = F_0 T_p$
*   **Response (Undamped System):**
    During the pulse ($0 \leq t \leq T_p$): $m\ddot{x}(t) + kx(t) = F_0$.
    Particular solution: $x_p(t) = F_0/k$.
    General solution: $x(t) = A_1 \sin(\omega_n t) + B_1 \cos(\omega_n t) + F_0/k$.
    Using $x(0)=0, \dot{x}(0)=0$:
    $x(0) = B_1 + F_0/k = 0 \implies B_1 = -F_0/k$.
    $\dot{x}(t) = A_1 \omega_n \cos(\omega_n t)$.
    $\dot{x}(0) = A_1 \omega_n = 0 \implies A_1 = 0$.
    So, during the pulse: $x(t) = \frac{F_0}{k} (1 - \cos(\omega_n t))$.

    After the pulse ($t > T_p$):
    The equation of motion is $m\ddot{x}(t) + kx(t) = 0$.
    Solution: $x(t) = A_2 \sin(\omega_n t) + B_2 \cos(\omega_n t)$.
    Conditions at $t=T_p$:
    $x(T_p) = \frac{F_0}{k} (1 - \cos(\omega_n T_p))$.
    $\dot{x}(T_p) = \frac{F_0}{k} (\omega_n \sin(\omega_n T_p))$.

    The maximum response occurs when $\omega_n T_p$ is close to $\pi$ (or odd multiples). If $T_p = T_n/2$, then $\omega_n T_p = \pi$.
    $x(T_p) = \frac{F_0}{k} (1 - \cos(\pi)) = \frac{F_0}{k}(1 - (-1)) = \frac{2F_0}{k}$. This is twice the static deflection.
    $\dot{x}(T_p) = \frac{F_0}{k} (\omega_n \sin(\pi)) = 0$.

    The response after the pulse starts from $x(T_p)$ and $\dot{x}(T_p)$ and oscillates at $\omega_n$.
    The amplitude after the pulse is $X = \sqrt{A_2^2 + B_2^2}$.
    $A_2 = (\dot{x}(T_p)/\omega_n) \sin(\omega_n T_p) + x(T_p) \cos(\omega_n T_p)$ -- No, this is wrong.
    $x(t) = A_2 \sin(\omega_n t) + B_2 \cos(\omega_n t)$.
    $\dot{x}(t) = A_2 \omega_n \cos(\omega_n t) - B_2 \omega_n \sin(\omega_n t)$.
    At $t=T_p$:
    $x(T_p) = A_2 \sin(\omega_n T_p) + B_2 \cos(\omega_n T_p)$.
    $\dot{x}(T_p) = A_1 \omega_n \cos(\omega_n T_p) - B_1 \omega_n \sin(\omega_n T_p)$. -- This is for the previous step.

    Let $t' = t - T_p$ be the time after the pulse.
    $x(t') = A_2 \sin(\omega_n t') + B_2 \cos(\omega_n t')$.
    $x(t'=0) = B_2 = x(T_p) = \frac{F_0}{k} (1 - \cos(\omega_n T_p))$.
    $\dot{x}(t'=0) = A_2 \omega_n = \dot{x}(T_p) = \frac{F_0}{k} \omega_n \sin(\omega_n T_p)$.
    $A_2 = \frac{F_0}{k} \sin(\omega_n T_p)$.

    The response is $x(t') = \frac{F_0}{k} \sin(\omega_n t') \sin(\omega_n T_p) + \frac{F_0}{k} (1 - \cos(\omega_n T_p)) \cos(\omega_n t')$.
    Using trigonometric identities: $\sin(A+B) = \sin A \cos B + \cos A \sin B$.
    $x(t') = \frac{F_0}{k} [\sin(\omega_n t') \sin(\omega_n T_p) + \cos(\omega_n t') - \cos(\omega_n T_p) \cos(\omega_n t')]$
    $x(t') = \frac{F_0}{k} [1 - (\cos(\omega_n T_p) \cos(\omega_n t') - \sin(\omega_n T_p) \sin(\omega_n t'))]$
    $x(t') = \frac{F_0}{k} [1 - \cos(\omega_n t' + \omega_n T_p)] = \frac{F_0}{k} [1 - \cos(\omega_n (t' + T_p))]$
    Substituting back $t' = t - T_p$:
    $x(t) = \frac{F_0}{k} [1 - \cos(\omega_n t)]$, for $t > T_p$.

    This means the response *after* the pulse is exactly the same as the response *during* the pulse, but it continues with that sinusoidal pattern. This is a bit counterintuitive. The initial conditions at $t=T_p$ are what matter.

    Let's re-evaluate $A_2, B_2$:
    $x(t') = A_2 \sin(\omega_n t') + B_2 \cos(\omega_n t')$.
    $B_2 = x(T_p) = \frac{F_0}{k} (1 - \cos(\omega_n T_p))$.
    $A_2 = \frac{\dot{x}(T_p)}{\omega_n} = \frac{F_0}{k} \sin(\omega_n T_p)$.

    The amplitude of the response $x(t')$ is $X = \sqrt{A_2^2 + B_2^2}$.
    $X = \sqrt{\left(\frac{F_0}{k} \sin(\omega_n T_p)\right)^2 + \left(\frac{F_0}{k} (1 - \cos(\omega_n T_p))\right)^2}$
    $X = \frac{F_0}{k} \sqrt{\sin^2(\omega_n T_p) + (1 - 2\cos(\omega_n T_p) + \cos^2(\omega_n T_p))}$
    $X = \frac{F_0}{k} \sqrt{2 - 2\cos(\omega_n T_p)} = \frac{F_0}{k} \sqrt{2(1 - \cos(\omega_n T_p))}$
    Using $1 - \cos(\theta) = 2\sin^2(\theta/2)$:
    $X = \frac{F_0}{k} \sqrt{2(2\sin^2(\omega_n T_p/2))} = \frac{F_0}{k} \sqrt{4\sin^2(\omega_n T_p/2)}$
    $X = \frac{F_0}{k} |2\sin(\omega_n T_p/2)|$.

    The maximum response occurs when $\omega_n T_p/2 = \pi/2$, i.e., $\omega_n T_p = \pi$, or $T_p = T_n/2$.
    At this point, $X = \frac{F_0}{k} |2\sin(\pi/2)| = \frac{2F_0}{k}$, which is twice the static deflection. This is the resonance condition for a rectangular pulse.

### 3.3 Triangular Pulse

*   **Force Function (Symmetrical):**
    $F(t) = \frac{F_0}{T_p/2} t$, for $0 \leq t \leq T_p/2$
    $F(t) = F_0 - \frac{F_0}{T_p/2} (t - T_p/2) = F_0 - \frac{2F_0}{T_p} (t - T_p/2)$, for $T_p/2 < t \leq T_p$
    $F(t) = 0$, for $t > T_p$
*   **Impulse:**
    $I = \text{Area under the curve} = \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times T_p \times F_0$.
*   **Response:** The analysis is similar to the half-sine pulse, involving solving the differential equation during the pulse duration and then determining the subsequent motion.
    The peak load occurs at $t=T_p/2$. If this peak load time is close to the natural period of the system, resonance can occur.

**Resonance Condition for Triangular Pulse:**

The load increases linearly to a peak at $T_p/2$ and then decreases linearly. The most significant part of the pulse's effect on the system's response is related to the time it takes to reach its peak and then return to zero. The "effective" duration for resonance is related to $T_p$. Resonance occurs when the peak load time ($T_p/2$) is approximately half the natural period ($T_n/2$), meaning $T_p/2 \approx T_n/2$, or $T_p \approx T_n$.

**General Observation for Impulse Loading:**

*   The response of a system to an impulse depends on the shape of the impulse and its duration relative to the system's natural period.
*   For short-duration impulses (pulse duration $T_p \ll T_n$), the response amplitude is approximately $I/(m\omega_n)$.
*   For impulses with durations comparable to the natural period, resonance effects become significant, leading to much larger amplitudes.

---

## Practice Questions and Exercises

**Section 2: Response to Harmonic Loading**

1.  **Question:** A single-degree-of-freedom system with mass $m = 1000$ kg and stiffness $k = 50000$ N/m is subjected to harmonic force $F(t) = 500 \sin(5t)$ N.
    a) Calculate the natural frequency ($\omega_n$) of the system.
    b) Determine the excitation frequency ($\omega$).
    c) Calculate the frequency ratio ($r$).
    d) Calculate the steady-state amplitude of vibration ($X$) for the undamped system.

    **Answer:**
    a) $\omega_n = \sqrt{k/m} = \sqrt{50000/1000} = \sqrt{50} \approx 7.07$ rad/s.
    b) $\omega = 5$ rad/s.
    c) $r = \omega / \omega_n = 5 / 7.07 \approx 0.707$.
    d) $x_{st} = F_0/k = 500 / 50000 = 0.01$ m = 10 mm.
       $X = x_{st} / (1 - r^2) = 0.01 / (1 - 0.707^2) = 0.01 / (1 - 0.5) = 0.01 / 0.5 = 0.02$ m = 20 mm.

2.  **Question:** A structure has a natural frequency of 10 Hz and a damping ratio of $\zeta = 0.02$. If it's subjected to harmonic excitation at 9.5 Hz, what is the Dynamic Magnification Factor (DMF)?

    **Answer:**
    $\omega_n = 2\pi \times 10 = 20\pi$ rad/s.
    $\omega = 2\pi \times 9.5 = 19\pi$ rad/s.
    $r = \omega / \omega_n = 19\pi / 20\pi = 0.95$.
    $\text{DMF} = \frac{1}{\sqrt{(1 - r^2)^2 + (2\zeta r)^2}} = \frac{1}{\sqrt{(1 - 0.95^2)^2 + (2 \times 0.02 \times 0.95)^2}}$
    $\text{DMF} = \frac{1}{\sqrt{(1 - 0.9025)^2 + (0.038)^2}} = \frac{1}{\sqrt{(0.0975)^2 + 0.001444}}$
    $\text{DMF} = \frac{1}{\sqrt{0.00950625 + 0.001444}} = \frac{1}{\sqrt{0.01095025}} \approx \frac{1}{0.1046} \approx 9.56$.

3.  **Question:** An engine operating at 3000 RPM is mounted on a flexible support with a natural frequency of 500 RPM. The damping ratio of the support is 0.05. Calculate the Force Transmissibility (FT). Is this system suitable for vibration isolation?

    **Answer:**
    Engine operating frequency, $f = 3000 \text{ RPM}$. $\omega = 2\pi \times 3000/60 = 100\pi$ rad/s.
    Natural frequency, $f_n = 500 \text{ RPM}$. $\omega_n = 2\pi \times 500/60 = 50\pi/3$ rad/s.
    Frequency ratio, $r = \omega / \omega_n = (100\pi) / (50\pi/3) = 100\pi \times 3 / 50\pi = 6$.
    $\zeta = 0.05$.
    $FT = \frac{\sqrt{1 + (2\zeta r)^2}}{\sqrt{(1 - r^2)^2 + (2\zeta r)^2}} = \frac{\sqrt{1 + (2 \times 0.05 \times 6)^2}}{\sqrt{(1 - 6^2)^2 + (2 \times 0.05 \times 6)^2}}$
    $FT = \frac{\sqrt{1 + (0.6)^2}}{\sqrt{(1 - 36)^2 + (0.6)^2}} = \frac{\sqrt{1 + 0.36}}{\sqrt{(-35)^2 + 0.36}} = \frac{\sqrt{1.36}}{\sqrt{1225 + 0.36}}$
    $FT = \frac{1.166}{\sqrt{1225.36}} = \frac{1.166}{34.99} \approx 0.033$.
    Since $FT \approx 0.033 < 1$, the system is suitable for vibration isolation.

**Section 3: Response to Impulse Loading**

4.  **Question:** An undamped SDOF system with $m=2$ kg and $k=18$ N/m is subjected to an impulse of $I = 6$ N-s at $t=0$.
    a) Calculate the natural frequency ($\omega_n$) of the system.
    b) Determine the amplitude of the resulting vibration.
    c) Write the equation of motion for the vibration after the impulse.

    **Answer:**
    a) $\omega_n = \sqrt{k/m} = \sqrt{18/2} = \sqrt{9} = 3$ rad/s.
    b) Amplitude $X = I / (m\omega_n) = 6 / (2 \times 3) = 6 / 6 = 1$ m.
    c) The response is of the form $x(t) = X \sin(\omega_n t)$.
       $x(t) = 1 \sin(3t)$ meters.

5.  **Question:** A mass of 5 kg is subjected to a rectangular impulse force of 100 N acting for 0.1 seconds. The system is undamped with a natural frequency of 2 Hz.
    a) Calculate the impulse $I$.
    b) Calculate the natural frequency in rad/s.
    c) Determine the amplitude of the vibration after the impulse.
    d) What is the peak displacement during the impulse?

    **Answer:**
    a) $I = F_0 \times T_p = 100 \text{ N} \times 0.1 \text{ s} = 10 \text{ N-s}$.
    b) $\omega_n = 2\pi f = 2\pi \times 2 = 4\pi \approx 12.57$ rad/s.
    c) Amplitude after impulse $X = I / (m\omega_n) = 10 / (5 \times 4\pi) = 10 / (20\pi) = 1/(2\pi) \approx 0.159$ m.
    d) Peak displacement during the impulse occurs when $\omega_n T_p / 2 = \pi/2$, i.e., $T_p = \pi/\omega_n = \pi/(4\pi) = 1/4 = 0.25$ s.
       In this problem, $T_p = 0.1$ s.
       The peak displacement is given by $X_{\text{peak}} = \frac{F_0}{k} |2\sin(\omega_n T_p/2)|$.
       $F_0 = 100$ N. $k = m\omega_n^2 = 5 \times (4\pi)^2 = 5 \times 16\pi^2 = 80\pi^2 \approx 789.6$ N/m.
       $F_0/k = 100 / (80\pi^2) = 1/(0.8\pi^2) \approx 0.1267$ m.
       $\omega_n T_p/2 = (4\pi \times 0.1) / 2 = 0.2\pi \approx 0.628$ rad.
       $X_{\text{peak}} = 0.1267 |2\sin(0.2\pi)| = 0.1267 \times 2 \times \sin(0.628) \approx 0.1267 \times 2 \times 0.5878 \approx 0.149$ m.

---

## Important Points to Remember:

*   **Steady-state vs. Transient:** Understand that structural response can be divided into these two components. Transient response decays due to damping, while steady-state response persists.
*   **Resonance:** The phenomenon where a small excitation frequency near the natural frequency leads to very large amplitudes, especially in undamped systems. Damping limits resonance.
*   **Dynamic Magnification Factor (DMF):** Quantifies the amplification of dynamic displacement relative to static deflection. It's highly dependent on the frequency ratio ($r$) and damping ratio ($\zeta$).
*   **Force Transmissibility (FT):** Measures how much force is transmitted to the support. For vibration isolation, $FT < 1$ is desired, which occurs when $r > \sqrt{2}$.
*   **Vibration Isolation Strategy:** To isolate a machine, its operating frequency ($\omega$) must be significantly higher than the natural frequency ($\omega_n$) of the mounting system ($r = \omega/\omega_n > \sqrt{2}$).
*   **Impulse:** An impulse imparts a change in momentum, usually resulting in an initial velocity for the system.
*   **Impulse Response Amplitude (Undamped):** For a short impulse, the amplitude is $I/(m\omega_n)$.
*   **Resonance with Impulses:** The duration of an impulse relative to the system's natural period is critical for determining the magnitude of the response. Pulses with durations close to half the natural period (for rectangular) or the full natural period (for triangular) can cause resonance.

This comprehensive set of notes covers the fundamental concepts of response to harmonic and impulse loading, including key definitions, derivations, practical applications like vibration isolation, and practice questions.
