---
title: "Solution to wave equation"
subject: "ELECTROMAGNETICS"
module: "Module 2: Maxwell’s equation from fundamental laws."
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe8d2"
status: "completed"
scrapedAt: "2026-05-23T17:56:30.429Z"
---
# Electromagnetic Waves and Maxwell's Equations

## Module 2: Maxwell's Equations from Fundamental Laws

### Topic: Solution to the Wave Equation

This module delves into how Maxwell's equations, derived from fundamental laws, lead to the concept of electromagnetic waves and how we solve the resulting wave equations. Understanding these solutions is crucial for analyzing wave propagation in various media.

---

### Learning Outcomes:

*   **Understand the derivation of the wave equation from Maxwell's equations.** (Relates to CO1, CO2)
*   **Solve the scalar and vector wave equations for various scenarios.** (Relates to CO2, CO3, CO4)
*   **Interpret the physical meaning of wave equation solutions, including phase velocity, wavelength, and wave impedance.** (Relates to CO3, CO4)
*   **Analyze the behavior of electromagnetic waves in different media (lossless, lossy, dispersive).** (Relates to CO3, CO4)

---

### Key Concepts and Definitions:

#### 1. Derivation of the Wave Equation

*   **Starting Point: Maxwell's Equations in Differential Form (in vacuum, no sources):**
    *   $\nabla \times \mathbf{E} = -\mu_0 \frac{\partial \mathbf{H}}{\partial t}$ (Faraday's Law of Induction)
    *   $\nabla \times \mathbf{H} = \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}$ (Ampere-Maxwell Law)
    *   $\nabla \cdot \mathbf{E} = 0$ (Gauss's Law for Electricity)
    *   $\nabla \cdot \mathbf{H} = 0$ (Gauss's Law for Magnetism)

*   **Derivation of the Electric Field Wave Equation:**
    1.  Take the curl of Faraday's Law: $\nabla \times (\nabla \times \mathbf{E}) = -\mu_0 \frac{\partial}{\partial t} (\nabla \times \mathbf{H})$
    2.  Use the vector identity: $\nabla \times (\nabla \times \mathbf{E}) = \nabla (\nabla \cdot \mathbf{E}) - \nabla^2 \mathbf{E}$
    3.  Substitute $\nabla \cdot \mathbf{E} = 0$ from Gauss's Law.
    4.  Substitute $\nabla \times \mathbf{H} = \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}$ from Ampere-Maxwell Law.
    5.  This yields: $-\nabla^2 \mathbf{E} = -\mu_0 \epsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2}$
    6.  Rearranging: $\nabla^2 \mathbf{E} - \mu_0 \epsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2} = 0$
    7.  This is the **vector wave equation for the electric field**.

*   **Derivation of the Magnetic Field Wave Equation:**
    1.  Similarly, take the curl of Ampere-Maxwell Law: $\nabla \times (\nabla \times \mathbf{H}) = \epsilon_0 \frac{\partial}{\partial t} (\nabla \times \mathbf{E})$
    2.  Use the vector identity: $\nabla \times (\nabla \times \mathbf{H}) = \nabla (\nabla \cdot \mathbf{H}) - \nabla^2 \mathbf{H}$
    3.  Substitute $\nabla \cdot \mathbf{H} = 0$ from Gauss's Law.
    4.  Substitute $\nabla \times \mathbf{E} = -\mu_0 \frac{\partial \mathbf{H}}{\partial t}$ from Faraday's Law.
    5.  This yields: $-\nabla^2 \mathbf{H} = -\mu_0 \epsilon_0 \frac{\partial^2 \mathbf{H}}{\partial t^2}$
    6.  Rearranging: $\nabla^2 \mathbf{H} - \mu_0 \epsilon_0 \frac{\partial^2 \mathbf{H}}{\partial t^2} = 0$
    7.  This is the **vector wave equation for the magnetic field**.

*   **The Wave Equation:**
    *   The general form of the wave equation is: $\nabla^2 \psi - v^2 \frac{\partial^2 \psi}{\partial t^2} = 0$
    *   Where:
        *   $\psi$ is a scalar or vector quantity propagating as a wave.
        *   $v$ is the **phase velocity** (or speed of propagation).

*   **Speed of Light in Vacuum:**
    *   Comparing the derived equations with the general wave equation, we find:
        $v^2 = \frac{1}{\mu_0 \epsilon_0}$
    *   This speed is the speed of light in vacuum, denoted by $c$:
        $c = \frac{1}{\sqrt{\mu_0 \epsilon_0}} \approx 3 \times 10^8 \, \text{m/s}$
    *   So, the wave equations in vacuum are:
        $\nabla^2 \mathbf{E} - \frac{1}{c^2} \frac{\partial^2 \mathbf{E}}{\partial t^2} = 0$
        $\nabla^2 \mathbf{H} - \frac{1}{c^2} \frac{\partial^2 \mathbf{H}}{\partial t^2} = 0$

*   **Wave Equation in Matter (Lossless, Isotropic, Homogeneous Medium):**
    *   Maxwell's equations in matter are:
        $\nabla \times \mathbf{E} = -\mu \frac{\partial \mathbf{H}}{\partial t}$
        $\nabla \times \mathbf{H} = \epsilon \frac{\partial \mathbf{E}}{\partial t}$
        $\nabla \cdot \mathbf{E} = 0$
        $\nabla \cdot \mathbf{H} = 0$
    *   Following the same derivation steps, we get:
        $\nabla^2 \mathbf{E} - \mu \epsilon \frac{\partial^2 \mathbf{E}}{\partial t^2} = 0$
        $\nabla^2 \mathbf{H} - \mu \epsilon \frac{\partial^2 \mathbf{H}}{\partial t^2} = 0$
    *   The phase velocity in this medium is:
        $v = \frac{1}{\sqrt{\mu \epsilon}} = \frac{1}{\sqrt{\mu_0 \mu_r \epsilon_0 \epsilon_r}} = \frac{c}{\sqrt{\mu_r \epsilon_r}}$
    *   This is also written as $v = \frac{c}{\sqrt{\mu_s \epsilon_s}}$ where $\mu_s$ and $\epsilon_s$ are relative permeability and permittivity, respectively.

#### 2. Plane Waves

*   A plane wave is a wave whose wavefronts are infinite parallel planes. The electric and magnetic fields are uniform over these planes.
*   In Cartesian coordinates, a plane wave propagating in the $+z$ direction can be represented as:
    *   $\mathbf{E}(z, t) = E_0 e^{j(\omega t - kz)} \hat{\mathbf{a}}_x$
    *   $\mathbf{H}(z, t) = H_0 e^{j(\omega t - kz)} \hat{\mathbf{a}}_y$
    *   Where:
        *   $E_0$ and $H_0$ are the amplitudes.
        *   $\omega = 2\pi f$ is the angular frequency ($f$ is the frequency).
        *   $k = \frac{\omega}{v}$ is the **propagation constant** or **wave number**.
        *   $kz$ is the phase term at position $z$.
        *   $\omega t$ is the phase term at time $t$.
        *   $(\omega t - kz)$ represents the phase of the wave.
        *   $\hat{\mathbf{a}}_x$ and $\hat{\mathbf{a}}_y$ are unit vectors in the direction of polarization of E and H, respectively. $\hat{\mathbf{a}}_z$ is the direction of propagation.

*   **Phasor Representation:** For sinusoidal steady-state analysis, we use phasor notation:
    *   $\mathbf{E}(z) = E_0 e^{-jkz} \hat{\mathbf{a}}_x$
    *   $\mathbf{H}(z) = H_0 e^{-jkz} \hat{\mathbf{a}}_y$
    *   The time dependence $e^{j\omega t}$ is implicit.

#### 3. Solution of the Scalar Wave Equation

*   Consider the one-dimensional scalar wave equation: $\frac{\partial^2 \psi}{\partial z^2} - v^2 \frac{\partial^2 \psi}{\partial t^2} = 0$
*   **D'Alembert's Solution:** This is a general solution of the form:
    $\psi(z, t) = f_1(z - vt) + f_2(z + vt)$
    *   $f_1(z - vt)$: Represents a wave traveling in the $+z$ direction with speed $v$.
    *   $f_2(z + vt)$: Represents a wave traveling in the $-z$ direction with speed $v$.

*   **Sinusoidal Solution (Phasor Domain):** For waves of the form $e^{j(\omega t - kz)}$:
    *   Substitute into the wave equation in phasor form: $\frac{d^2}{dz^2} E_0 e^{-jkz} - (\omega)^2 E_0 e^{-jkz} = 0$
    *   $\frac{d^2}{dz^2} (e^{-jkz}) = \frac{d}{dz} (-jk e^{-jkz}) = (-jk)^2 e^{-jkz} = -k^2 e^{-jkz}$
    *   So, $-k^2 E_0 e^{-jkz} + k^2 E_0 e^{-jkz} = 0$. This confirms that $e^{-jkz}$ is a solution if $k = \omega/v$.

*   **General Sinusoidal Solution (Phasor Domain):**
    *   $E(z) = (A e^{-jkz} + B e^{jkz}) \hat{\mathbf{a}}_x$
    *   $A$: Amplitude of the wave traveling in the $+z$ direction.
    *   $B$: Amplitude of the wave traveling in the $-z$ direction.

#### 4. Wave Parameters

*   **Angular Frequency ($\omega$):** $\omega = 2\pi f$ (radians per second)
*   **Frequency ($f$):** Number of cycles per second (Hertz).
*   **Period ($T$):** $T = 1/f$ (seconds per cycle).
*   **Wavelength ($\lambda$):** The spatial period of the wave. It's the distance over which the wave's phase changes by $2\pi$ radians.
    *   $\lambda = \frac{v}{f} = \frac{\omega}{k}$
*   **Phase Velocity ($v$):** The speed at which a point of constant phase (e.g., a crest) propagates.
    *   $v = \frac{\omega}{k}$
*   **Wave Impedance ($\eta$):** The ratio of the electric field amplitude to the magnetic field amplitude for a plane wave.
    *   For a lossless medium: $\eta = \sqrt{\frac{\mu}{\epsilon}}$
    *   In vacuum: $\eta_0 = \sqrt{\frac{\mu_0}{\epsilon_0}} \approx 377 \, \Omega$
    *   From Maxwell's equations, $\nabla \times \mathbf{E} = -\mu \frac{\partial \mathbf{H}}{\partial t}$. For a plane wave $E_x = E_0 e^{-jkz}$ and $H_y = H_0 e^{-jkz}$, $\nabla \times \mathbf{E} = \frac{\partial E_x}{\partial z} \hat{\mathbf{a}}_y = -jk E_0 e^{-jkz} \hat{\mathbf{a}}_y$.
    *   $-\mu \frac{\partial \mathbf{H}}{\partial t} = -\mu (j\omega) H_0 e^{-jkz} \hat{\mathbf{a}}_y$.
    *   Equating the two: $-jk E_0 = -j\omega \mu H_0 \implies \frac{E_0}{H_0} = \frac{\omega \mu}{k} = \frac{\omega \mu}{(\omega/v)} = \mu v = \mu \frac{1}{\sqrt{\mu \epsilon}} = \sqrt{\frac{\mu}{\epsilon}} = \eta$.

#### 5. Wave Propagation in Different Media

*   **Lossless Medium ( $\sigma = 0$ ):**
    *   $\mu = \mu_0 \mu_r$, $\epsilon = \epsilon_0 \epsilon_r$
    *   $\nabla^2 \mathbf{E} - \mu \epsilon \frac{\partial^2 \mathbf{E}}{\partial t^2} = 0$
    *   $k = \omega \sqrt{\mu \epsilon} = \omega \sqrt{\mu_0 \epsilon_0} \sqrt{\mu_r \epsilon_r} = \frac{\omega}{c} \sqrt{\mu_r \epsilon_r}$
    *   $v = \frac{1}{\sqrt{\mu \epsilon}} = \frac{c}{\sqrt{\mu_r \epsilon_r}}$
    *   $\eta = \sqrt{\frac{\mu}{\epsilon}}$
    *   Fields: $\mathbf{E}(z) = E_0 e^{-j k z} \hat{\mathbf{a}}_x$, $\mathbf{H}(z) = \frac{E_0}{\eta} e^{-j k z} \hat{\mathbf{a}}_y$

*   **Lossy Medium ( $\sigma \neq 0$ ):**
    *   Maxwell's equations (in phasor form, sinusoidal steady-state):
        $\nabla \times \mathbf{E} = -j\omega\mu \mathbf{H}$
        $\nabla \times \mathbf{H} = j\omega\epsilon \mathbf{E} + \sigma \mathbf{E} = (j\omega\epsilon + \sigma) \mathbf{E}$
    *   Deriving the wave equation: $\nabla^2 \mathbf{E} - (\sigma + j\omega\epsilon) (j\omega\mu) \mathbf{E} = 0$
    *   $\nabla^2 \mathbf{E} - (j\omega\mu\sigma - \omega^2\mu\epsilon) \mathbf{E} = 0$
    *   The propagation constant $k$ is now complex: $k^2 = \omega^2\mu\epsilon - j\omega\mu\sigma = j\omega\mu(\sigma + j\omega\epsilon)$
    *   $k = \sqrt{j\omega\mu(\sigma + j\omega\epsilon)}$
    *   Let $k = \alpha + j\beta$, where $\alpha$ is the **attenuation constant** and $\beta$ is the **phase constant**.
    *   $\alpha$: Measures the exponential decay of the wave amplitude per unit distance.
    *   $\beta$: Measures the phase shift per unit distance (similar to $k$ in lossless media).
    *   **Phase Velocity in Lossy Medium:** $v = \frac{\omega}{\beta}$
    *   **Wave Impedance in Lossy Medium:** $\eta = \sqrt{\frac{j\omega\mu}{\sigma + j\omega\epsilon}}$
    *   **Fields in Lossy Medium:**
        $\mathbf{E}(z) = E_0 e^{-\alpha z} e^{-j\beta z} \hat{\mathbf{a}}_x = E_0 e^{-(\alpha + j\beta)z} \hat{\mathbf{a}}_x$
        $\mathbf{H}(z) = \frac{E_0}{\eta} e^{-(\alpha + j\beta)z} \hat{\mathbf{a}}_y$
    *   **Skin Depth ($\delta$):** The depth at which the wave's amplitude reduces to $1/e$ of its initial value.
        *   $\delta = \frac{1}{\alpha}$
    *   **Good Conductor Approximation:** If $\sigma \gg \omega\epsilon$, then:
        *   $k \approx \sqrt{j\omega\mu\sigma} = \sqrt{\omega\mu\sigma} e^{j\pi/4}$
        *   $\alpha = \beta = \sqrt{\frac{\omega\mu\sigma}{2}}$
        *   $\delta = \frac{1}{\alpha} = \sqrt{\frac{2}{\omega\mu\sigma}}$
        *   $\eta \approx \sqrt{\frac{j\omega\mu}{\sigma}} = \sqrt{\frac{\omega\mu}{\sigma}} e^{j\pi/4}$

*   **Dispersive Medium:** A medium where the phase velocity $v$ (or propagation constant $k$) depends on frequency. This means different frequency components of a complex wave travel at different speeds, leading to distortion.

#### 6. Helmholtz Equation

*   For sinusoidal steady-state, Maxwell's equations lead to the Helmholtz equation for a source-free region:
    *   $\nabla^2 \mathbf{E} + \omega^2\mu\epsilon \mathbf{E} = 0$
    *   $\nabla^2 \mathbf{H} + \omega^2\mu\epsilon \mathbf{H} = 0$
*   This is often written as $\nabla^2 \mathbf{E} + k^2 \mathbf{E} = 0$, where $k = \omega\sqrt{\mu\epsilon}$.

---

### Examples:

**Example 1: Plane wave in free space**
A plane wave propagates in the $+z$ direction in free space. The electric field is given by $\mathbf{E}(z, t) = 10 \cos(10^9 \pi t - 0.5z) \hat{\mathbf{a}}_x \, \text{V/m}$. Find:
(a) The frequency and wavelength.
(b) The phase velocity.
(c) The magnetic field $\mathbf{H}(z, t)$.
(d) The wave impedance.

*   **Solution:**
    The electric field is in the form $\mathbf{E}(z, t) = E_0 \cos(\omega t - kz) \hat{\mathbf{a}}_x$.
    Comparing, we get $E_0 = 10 \, \text{V/m}$, $\omega = 10^9 \pi \, \text{rad/s}$, and $k = 0.5 \, \text{rad/m}$.

    (a) Frequency ($f$):
    $f = \frac{\omega}{2\pi} = \frac{10^9 \pi}{2\pi} = 0.5 \times 10^9 \, \text{Hz} = 500 \, \text{MHz}$.
    Wavelength ($\lambda$):
    $\lambda = \frac{2\pi}{k} = \frac{2\pi}{0.5} = 4\pi \, \text{m}$.

    (b) Phase velocity ($v$):
    $v = \frac{\omega}{k} = \frac{10^9 \pi}{0.5} = 2 \times 10^9 \, \text{m/s}$.
    *(Note: This is not $c$. Let's recheck the input. If it were free space, $k = \omega/c$. Let's assume free space: $c \approx 3 \times 10^8 \, \text{m/s}$. Then $k = \omega/c = (10^9 \pi) / (3 \times 10^8) = 10\pi/3 \approx 10.47 \, \text{rad/m}$. The problem statement has $k=0.5$. This suggests the medium is NOT free space, or the given parameters are for a specific medium. Let's proceed with the given $k=0.5$ and calculate the properties of the medium.)*
    Assuming the medium parameters are consistent with the given $k$:
    $v = \frac{\omega}{k} = \frac{10^9 \pi}{0.5} = 2\pi \times 10^9 \, \text{m/s}$.

    (c) Magnetic field $\mathbf{H}(z, t)$:
    The magnetic field is perpendicular to $\mathbf{E}$ and the direction of propagation, and lags $\mathbf{E}$ by 90 degrees if we use the cosine form directly, or leads if we use sine.
    Using the phasor form: $\mathbf{E}(z) = 10 e^{-j0.5z} \hat{\mathbf{a}}_x$.
    The wave impedance in free space is $\eta_0 \approx 377 \, \Omega$.
    $\mathbf{H}(z) = \frac{\mathbf{E}(z)}{\eta_0} \times (-\hat{\mathbf{a}}_z)$ is incorrect for propagation in $+z$.
    Correct relation for plane wave in $+z$: $\mathbf{H}(z) = \frac{1}{\eta} (\hat{\mathbf{k}} \times \mathbf{E}(z))$.
    Here $\hat{\mathbf{k}} = \hat{\mathbf{a}}_z$.
    $\mathbf{H}(z) = \frac{1}{\eta_0} (\hat{\mathbf{a}}_z \times 10 e^{-j0.5z} \hat{\mathbf{a}}_x) = \frac{10}{\eta_0} e^{-j0.5z} (\hat{\mathbf{a}}_z \times \hat{\mathbf{a}}_x) = \frac{10}{\eta_0} e^{-j0.5z} \hat{\mathbf{a}}_y$.
    In time domain: $\mathbf{H}(z, t) = \frac{10}{\eta_0} \cos(10^9 \pi t - 0.5z) \hat{\mathbf{a}}_y \, \text{A/m}$.
    $H_0 = \frac{10}{377} \approx 0.0265 \, \text{A/m}$.

    (d) Wave impedance ($\eta$):
    From (c), $\eta_0 = \frac{E_0}{H_0} = \frac{10}{0.0265} \approx 377 \, \Omega$.

    **Let's re-evaluate if the question meant free space, with $k$ calculated correctly for free space:**
    If in free space, $v=c \approx 3 \times 10^8$ m/s.
    $\omega = 10^9 \pi$ rad/s.
    $k = \omega/c = (10^9 \pi) / (3 \times 10^8) = 10\pi/3 \approx 10.47$ rad/m.
    $\lambda = 2\pi/k = 2\pi / (10\pi/3) = 6/10 = 0.6$ m.
    $\mathbf{E}(z, t) = 10 \cos(10^9 \pi t - 10.47z) \hat{\mathbf{a}}_x \, \text{V/m}$.
    $\mathbf{H}(z, t) = \frac{10}{377} \cos(10^9 \pi t - 10.47z) \hat{\mathbf{a}}_y \, \text{A/m}$.

**Example 2: Plane wave in a lossy medium**
A plane wave in a conducting medium has $\mu_r = 1$, $\epsilon_r = 4$, $\sigma = 10 \, \text{S/m}$, and frequency $f = 10 \, \text{MHz}$. Find:
(a) The propagation constant $k$.
(b) The attenuation constant $\alpha$ and phase constant $\beta$.
(c) The skin depth $\delta$.
(d) The phase velocity $v$.
(e) The wave impedance $\eta$.
(f) The electric and magnetic fields assuming $\mathbf{E}(z,t) = E_0 e^{-\alpha z} \cos(\omega t - \beta z) \hat{\mathbf{a}}_x$.

*   **Solution:**
    $\omega = 2\pi f = 2\pi (10 \times 10^6) = 20\pi \times 10^6 \, \text{rad/s}$.
    $\mu = \mu_0 \mu_r = 4\pi \times 10^{-7} \times 1 = 4\pi \times 10^{-7} \, \text{H/m}$.
    $\epsilon = \epsilon_0 \epsilon_r = (8.854 \times 10^{-12}) \times 4 \approx 35.4 \times 10^{-12} \, \text{F/m}$.
    $\sigma = 10 \, \text{S/m}$.

    Check the condition for lossless vs. lossy: $\sigma / (\omega\epsilon) = 10 / (20\pi \times 10^6 \times 35.4 \times 10^{-12}) = 10 / (0.708\pi \times 10^{-5}) \approx 10 / (2.22 \times 10^{-5}) \approx 4.5 \times 10^5$. Since $\sigma \gg \omega\epsilon$, it's a good conductor.

    (a) Propagation constant $k$:
    $k^2 = j\omega\mu(\sigma + j\omega\epsilon)$
    $j\omega\mu = j(20\pi \times 10^6)(4\pi \times 10^{-7}) = j 8\pi^2 \times 10^{-1} \approx j 7.896$.
    $\sigma + j\omega\epsilon = 10 + j(20\pi \times 10^6)(35.4 \times 10^{-12}) = 10 + j 0.708\pi \times 10^{-5} \approx 10 + j 2.224 \times 10^{-5}$.
    Since $\sigma \gg j\omega\epsilon$, we can approximate $\sigma + j\omega\epsilon \approx \sigma$.
    $k^2 \approx j\omega\mu\sigma = j (7.896) (10) = j 78.96$.
    $k = \sqrt{j 78.96} = \sqrt{78.96} e^{j\pi/4} = 8.886 (\cos(\pi/4) + j\sin(\pi/4)) = 8.886 (0.707 + j0.707) = 6.281 + j6.281$.
    So, $k \approx 6.28 (1+j)$ rad/m.

    (b) Attenuation constant ($\alpha$) and phase constant ($\beta$):
    From $k = \alpha + j\beta$, we have $\alpha \approx 6.28 \, \text{Np/m}$ and $\beta \approx 6.28 \, \text{rad/m}$.

    (c) Skin depth ($\delta$):
    $\delta = \frac{1}{\alpha} = \frac{1}{6.28} \approx 0.159 \, \text{m}$.

    (d) Phase velocity ($v$):
    $v = \frac{\omega}{\beta} = \frac{20\pi \times 10^6}{6.28} \approx \frac{62.83 \times 10^6}{6.28} \approx 10 \times 10^6 \, \text{m/s}$.

    (e) Wave impedance ($\eta$):
    $\eta \approx \sqrt{\frac{\omega\mu}{\sigma}} e^{j\pi/4}$ (for good conductors)
    $\eta \approx \sqrt{\frac{7.896}{10}} e^{j\pi/4} = \sqrt{0.7896} e^{j\pi/4} = 0.8886 (\cos(\pi/4) + j\sin(\pi/4)) = 0.8886 (0.707 + j0.707) = 0.628 + j0.628 \, \Omega$.

    (f) Electric and magnetic fields:
    Let $E_0 = 1 \, \text{V/m}$ for simplicity.
    $\mathbf{E}(z, t) = 1 \, e^{-6.28 z} \cos(20\pi \times 10^6 t - 6.28 z) \hat{\mathbf{a}}_x \, \text{V/m}$.
    $\mathbf{H}(z, t) = \frac{E_0}{\eta} e^{-\alpha z} \cos(\omega t - \beta z - \angle\eta) \hat{\mathbf{a}}_y \, \text{A/m}$.
    $\frac{E_0}{\eta} = \frac{1}{0.628 + j0.628} = \frac{1}{0.8886 \angle 45^\circ} = 1.125 \angle -45^\circ$.
    So, $H_0 = 1.125 \, \text{A/m}$, and the phase of H leads E by $45^\circ$.
    $\mathbf{H}(z, t) = 1.125 \, e^{-6.28 z} \cos(20\pi \times 10^6 t - 6.28 z - \pi/4) \hat{\mathbf{a}}_y \, \text{A/m}$.

---

### Practice Questions/Exercises:

1.  **Derive the wave equation for the magnetic field $\mathbf{H}$ from Maxwell's equations in a source-free, linear, isotropic, homogeneous, non-magnetic medium.** (K1, K2)
    *   **Answer:** Similar to the derivation for $\mathbf{E}$, starting with $\nabla \times \mathbf{E} = -\mu \frac{\partial \mathbf{H}}{\partial t}$ and $\nabla \times \mathbf{H} = \epsilon \frac{\partial \mathbf{E}}{\partial t}$.

2.  **A uniform plane wave in air at 100 MHz has its electric field polarized along the x-axis and propagates in the z-direction. If the electric field amplitude is 5 V/m, find:**
    (a) The angular frequency $\omega$.
    (b) The wave number $k$.
    (c) The wavelength $\lambda$.
    (d) The phase velocity $v$.
    (e) The magnetic field $\mathbf{H}(z,t)$.
    (f) The total average power crossing a surface of area $1 \, \text{m}^2$ in the x-y plane at $z=0$.
    (K2, K3)
    *   **Answer:**
        (a) $\omega = 2\pi f = 2\pi (100 \times 10^6) = 200\pi \times 10^6 \, \text{rad/s}$.
        (b) In air (free space), $v=c \approx 3 \times 10^8 \, \text{m/s}$. $k = \omega/c = (200\pi \times 10^6) / (3 \times 10^8) = 2\pi/3 \, \text{rad/m} \approx 2.09 \, \text{rad/m}$.
        (c) $\lambda = 2\pi/k = 2\pi / (2\pi/3) = 3 \, \text{m}$.
        (d) $v = c = 3 \times 10^8 \, \text{m/s}$.
        (e) $\mathbf{E}(z,t) = 5 \cos(\omega t - kz) \hat{\mathbf{a}}_x$. $\eta_0 \approx 377 \, \Omega$.
            $\mathbf{H}(z,t) = \frac{5}{377} \cos(\omega t - kz) \hat{\mathbf{a}}_y \, \text{A/m}$. Amplitude $H_0 \approx 0.0133 \, \text{A/m}$.
        (f) Average power density (Poynting vector magnitude): $S_{avg} = \frac{1}{2} |\text{Re}(\mathbf{E} \times \mathbf{H}^*)|$.
            $\mathbf{E}(z) = 5 e^{-jkz} \hat{\mathbf{a}}_x$. $\mathbf{H}(z) = \frac{5}{377} e^{-jkz} \hat{\mathbf{a}}_y$.
            $\mathbf{E} \times \mathbf{H}^* = (5 \hat{\mathbf{a}}_x) \times (\frac{5}{377} e^{-jkz} \hat{\mathbf{a}}_y)^* = (5 \hat{\mathbf{a}}_x) \times (\frac{5}{377} e^{+jkz} \hat{\mathbf{a}}_y) = \frac{25}{377} e^{jkz} (\hat{\mathbf{a}}_x \times \hat{\mathbf{a}}_y) = \frac{25}{377} e^{jkz} \hat{\mathbf{a}}_z$.
            $S_{avg} = \frac{1}{2} \text{Re}(\frac{25}{377} e^{jkz}) = \frac{1}{2} \frac{25}{377} \cos(kz) = \frac{12.5}{377} \cos(kz) \, \text{W/m}^2$.
            At $z=0$, $S_{avg} = \frac{12.5}{377} \approx 0.0332 \, \text{W/m}^2$.
            Total power = $S_{avg} \times Area = 0.0332 \times 1 = 0.0332 \, \text{W}$.

3.  **For a conducting medium with $\sigma = 1 \, \text{S/m}$, $\mu_r = 1$, $\epsilon_r = 1$, at a frequency of 1 GHz, determine if it is a good conductor or a low-loss dielectric.** (K3)
    *   **Answer:**
        $\omega = 2\pi f = 2\pi (1 \times 10^9) = 2\pi \times 10^9 \, \text{rad/s}$.
        $\epsilon = \epsilon_0 \epsilon_r = 8.854 \times 10^{-12} \times 1 = 8.854 \times 10^{-12} \, \text{F/m}$.
        $\sigma = 1 \, \text{S/m}$.
        Ratio: $\frac{\sigma}{\omega\epsilon} = \frac{1}{(2\pi \times 10^9)(8.854 \times 10^{-12})} = \frac{1}{2\pi \times 8.854 \times 10^{-3}} = \frac{1}{0.0556} \approx 18$.
        Since $\frac{\sigma}{\omega\epsilon} > 10$ (or $\gg 1$), it is considered a **good conductor**.

---

### Important Points to Remember:

*   **Wave equation:** $\nabla^2 \psi - v^2 \frac{\partial^2 \psi}{\partial t^2} = 0$.
*   **Speed of light in vacuum:** $c = 1/\sqrt{\mu_0 \epsilon_0}$.
*   **Wave parameters:** $\omega, f, T, \lambda, v, k = \omega/v, \eta = \sqrt{\mu/\epsilon}$.
*   **Plane waves:** Fields are uniform over planes perpendicular to the direction of propagation. $\mathbf{E}$ and $\mathbf{H}$ are mutually perpendicular and also perpendicular to the direction of propagation ($\hat{\mathbf{k}}$).
*   **Lossless medium:** $\sigma = 0$. $k = \omega\sqrt{\mu\epsilon}$, $v = 1/\sqrt{\mu\epsilon}$, $\eta = \sqrt{\mu/\epsilon}$. Fields do not decay with distance.
*   **Lossy medium:** $\sigma \neq 0$. $k = \alpha + j\beta$ (complex). Fields decay with distance $e^{-\alpha z}$.
    *   $\alpha$: Attenuation constant (Np/m).
    *   $\beta$: Phase constant (rad/m).
    *   Skin depth: $\delta = 1/\alpha$.
    *   Wave impedance: $\eta = \sqrt{\frac{j\omega\mu}{\sigma + j\omega\epsilon}}$.
*   **Good conductor approximation:** $\sigma \gg \omega\epsilon$. $\alpha \approx \beta \approx \sqrt{\frac{\omega\mu\sigma}{2}}$, $\delta \approx \sqrt{\frac{2}{\omega\mu\sigma}}$, $\eta \approx \sqrt{\frac{\omega\mu}{\sigma}} e^{j\pi/4}$.
*   **Dispersive medium:** Wave velocity/propagation constant depends on frequency.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### References:

*   **Elements of Electromagnetics by Matthew N. O. Sadiku:** Chapters dealing with time-varying fields, Maxwell's equations, and electromagnetic waves. Typically covers the derivation of the wave equation and its solutions in various media.
*   **Engineering Electromagnetics by William Hayt and John Buck:** Comprehensive coverage of time-varying fields, Maxwell's equations, and wave propagation. Explains plane wave solutions and behavior in different materials.
*   **Electromagnetic Waves and Transmission Lines by Y Mallikarjuna Reddy:** Focuses on wave propagation, including detailed solutions to the wave equation and analysis in lossless and lossy media.
*   **Schaum’s Outline of Elctromagnetics by Mahmood Nahvi; Joseph Edminister:** Provides worked examples and clear explanations of wave equation solutions and parameters.
*   **Engineering Electromagnetics Essentials by B N Basu:** Offers concise coverage of fundamental concepts, including the wave equation and its solutions.

---

This detailed study note provides a comprehensive overview of the "Solution to the Wave Equation" topic within Module 2. It covers the derivation, various types of solutions, parameters, and behaviors in different media, aligning with the specified learning and course outcomes. The examples and practice questions are designed to reinforce understanding at the K2 and K3 knowledge levels.