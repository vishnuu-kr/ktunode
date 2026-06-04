---
title: "Electromagnetic Waves : Time varying potentials, Waves in general, Electromagnetic waves, Wave propagation in lossy dielectrics, Plane waves in free space, conductors, skin effect, Power, Poynting theorem, Reflection of plane wave at normal incidence."
subject: "ELECTROMAGNETIC THEORY"
module: "Module 4: Electromagnetic Waves : Time varying potentials, Waves in general, Electromagnetic waves, Wave propagation in lossy dielectrics, Plane waves in free space, conductors, skin effect, Power, Poynting theorem, Reflection of plane wave at normal incidence."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361b9"
status: "completed"
scrapedAt: "2026-05-23T16:21:54.247Z"
---
# Electromagnetic Theory: Module 4 - Electromagnetic Waves

This module delves into the fascinating world of electromagnetic waves, building upon the foundational concepts of electrostatics and magnetostatics. We will explore how time-varying fields lead to the propagation of these waves, their behavior in various media, and the associated energy transfer.

**Learning Outcomes:** Upon successful completion of this module, you will be able to:

*   Understand the relationship between time-varying potentials and electromagnetic waves.
*   Describe the general characteristics of waves.
*   Explain the nature and propagation of electromagnetic waves in free space and conductors.
*   Analyze wave propagation in lossy dielectric materials.
*   Define and explain the skin effect.
*   Understand and apply the concept of power flow using the Poynting theorem.
*   Analyze the reflection of plane electromagnetic waves at normal incidence.

**Course Outcomes Alignment:**

*   **CO1 (K3):** Understanding the vector calculus used in deriving wave equations and Poynting theorem.
*   **CO2 (K3):** Computing fields in different media, especially in the context of wave propagation.
*   **CO3 (K3):** Implicitly using Maxwell's Equations as the foundation for wave phenomena.
*   **CO4 (K4):** Predicting the production and propagation of electromagnetic waves.
*   **CO5 (K4):** Understanding how electromagnetic excitations (waves) propagate.

---

## 1. Time-Varying Potentials and Electromagnetic Waves

**Key Concepts:**

*   **Faraday's Law of Induction:** A time-varying magnetic flux through a surface induces an electromotive force (voltage) around the boundary of the surface. Mathematically:
    $$ \oint \mathbf{E} \cdot d\mathbf{l} = -\frac{\partial}{\partial t} \iint_S \mathbf{B} \cdot d\mathbf{S} $$
    (Hayt & Buck, Chapter 7)

*   **Ampere-Maxwell Law:** A time-varying electric flux density (or displacement current) contributes to the magnetic field, in addition to conduction current. This "displacement current" is the crucial component that allows for the generation of electromagnetic waves. Mathematically:
    $$ \oint \mathbf{H} \cdot d\mathbf{l} = \iint_S (\mathbf{J} + \frac{\partial \mathbf{D}}{\partial t}) \cdot d\mathbf{S} $$
    (Hayt & Buck, Chapter 7)

*   **Time-Varying Potentials (Scalar and Vector):**
    *   In electrostatics, the electric field can be derived from a scalar potential ($V$): $\mathbf{E} = -\nabla V$.
    *   In magnetostatics, the magnetic field can be derived from a vector potential ($\mathbf{A}$): $\mathbf{B} = \nabla \times \mathbf{A}$.
    *   When fields are time-varying, these relations are no longer sufficient. We need to introduce potentials that account for these changes.
    *   **Retarded Potentials:** Due to the finite speed of light, the potential at a point $(r)$ at time $(t)$ depends on the charge and current distribution at an earlier time $(t_r = t - r/c)$ at a source point $(r')$.
        *   Scalar potential:
            $$ V(\mathbf{r}, t) = \frac{1}{4\pi\epsilon_0} \int \frac{\rho(\mathbf{r}', t_r)}{|\mathbf{r} - \mathbf{r}'|} dV' $$
        *   Vector potential:
            $$ \mathbf{A}(\mathbf{r}, t) = \frac{\mu_0}{4\pi} \int \frac{\mathbf{J}(\mathbf{r}', t_r)}{|\mathbf{r} - \mathbf{r}'|} dV' $$
        (Sadiku, Chapter 13; Griffiths, Chapter 10)

*   **Electromagnetic Waves as Solutions to Maxwell's Equations:** By combining Faraday's Law and the Ampere-Maxwell Law (and the other two Maxwell's equations: Gauss's Law for Electricity and Gauss's Law for Magnetism), we can derive wave equations for the electric and magnetic fields. These equations describe the propagation of disturbances in the electromagnetic field through space.

---

## 2. Waves in General

**Key Concepts:**

*   **Wave Motion:** A wave is a disturbance that propagates through a medium or space, transferring energy without the net transfer of matter.
*   **Wave Characteristics:**
    *   **Amplitude:** The maximum displacement or intensity of the wave.
    *   **Wavelength ($\lambda$):** The spatial period of the wave, the distance over which the wave's shape repeats.
    *   **Frequency ($f$ or $\nu$):** The number of oscillations or cycles per unit time. Measured in Hertz (Hz).
    *   **Period ($T$):** The time it takes for one complete cycle. $T = 1/f$.
    *   **Wave Speed ($v$):** The speed at which a point of constant phase (e.g., a crest) propagates. $v = \lambda f$.
    *   **Wave Number ($k$):** Related to wavelength: $k = 2\pi/\lambda$.
    *   **Angular Frequency ($\omega$):** Related to frequency: $\omega = 2\pi f$.
*   **Types of Waves:**
    *   **Transverse Waves:** The oscillations are perpendicular to the direction of propagation (e.g., electromagnetic waves, waves on a string).
    *   **Longitudinal Waves:** The oscillations are parallel to the direction of propagation (e.g., sound waves).
*   **Superposition Principle:** When two or more waves overlap, the resultant wave at any point is the sum of the individual waves at that point.

**Example:** Consider a simple one-dimensional wave propagating along the x-axis. A wave function of the form $f(x, t) = A \sin(kx - \omega t + \phi)$ describes such a wave.
*   $A$: Amplitude
*   $k$: Wave number
*   $\omega$: Angular frequency
*   $\phi$: Phase constant
*   Wave speed: $v = \omega/k$
*   (Sadiku, Chapter 9, introduces wave concepts generally)

---

## 3. Electromagnetic Waves

**Key Concepts:**

*   **Maxwell's Equations in Differential Form (Integral and Differential Forms):**
    1.  $\nabla \cdot \mathbf{D} = \rho_v$  (Gauss's Law for Electricity)
    2.  $\nabla \cdot \mathbf{B} = 0$  (Gauss's Law for Magnetism)
    3.  $\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$  (Faraday's Law)
    4.  $\nabla \times \mathbf{H} = \mathbf{J} + \frac{\partial \mathbf{D}}{\partial t}$  (Ampere-Maxwell Law)
    (Sadiku, Chapter 12; Hayt & Buck, Chapter 7)

*   **Derivation of Wave Equations:**
    *   Consider a region with no charges ($\rho_v = 0$) and no currents ($\mathbf{J} = 0$).
    *   In a linear, isotropic, homogeneous medium: $\mathbf{D} = \epsilon \mathbf{E}$ and $\mathbf{B} = \mu \mathbf{H}$.
    *   From Faraday's Law: $\nabla \times \mathbf{E} = -\mu \frac{\partial \mathbf{H}}{\partial t}$
    *   Take the curl of this equation: $\nabla \times (\nabla \times \mathbf{E}) = -\mu \frac{\partial}{\partial t} (\nabla \times \mathbf{H})$
    *   Using the vector identity $\nabla \times (\nabla \times \mathbf{E}) = \nabla(\nabla \cdot \mathbf{E}) - \nabla^2 \mathbf{E}$ and $\nabla \cdot \mathbf{E} = \rho_v/\epsilon = 0$ (in source-free region), we get:
        $$ \nabla^2 \mathbf{E} = -\mu \frac{\partial}{\partial t} (\nabla \times \mathbf{H}) $$
    *   Substitute $\nabla \times \mathbf{H} = \epsilon \frac{\partial \mathbf{E}}{\partial t}$ (from Ampere-Maxwell Law with $\mathbf{J}=0$):
        $$ \nabla^2 \mathbf{E} = -\mu \epsilon \frac{\partial^2 \mathbf{E}}{\partial t^2} $$
    *   This is the **vector wave equation for the electric field**. A similar equation can be derived for the magnetic field:
        $$ \nabla^2 \mathbf{H} = \mu \epsilon \frac{\partial^2 \mathbf{H}}{\partial t^2} $$
    *   (Sadiku, Section 12.1; Hayt & Buck, Section 7.1)

*   **Speed of Electromagnetic Waves:**
    *   The wave equation is of the form $\nabla^2 \psi = \frac{1}{v^2} \frac{\partial^2 \psi}{\partial t^2}$.
    *   Comparing this with the derived equations, the speed of electromagnetic waves is:
        $$ v = \frac{1}{\sqrt{\mu \epsilon}} $$
    *   In free space ($\mu = \mu_0, \epsilon = \epsilon_0$):
        $$ c = \frac{1}{\sqrt{\mu_0 \epsilon_0}} \approx 3 \times 10^8 \text{ m/s} $$
        (This is the speed of light, $c$)
    *   (Sadiku, Section 12.2; Hayt & Buck, Section 7.1)

*   **Nature of Electromagnetic Waves:**
    *   **Transverse:** Both electric ($\mathbf{E}$) and magnetic ($\mathbf{H}$) fields are perpendicular to the direction of propagation.
    *   **Self-Sustaining:** A time-varying $\mathbf{E}$ field produces a time-varying $\mathbf{H}$ field, which in turn produces a time-varying $\mathbf{E}$ field, allowing propagation.
    *   **Orthogonal:** $\mathbf{E}$, $\mathbf{H}$, and the direction of propagation are mutually perpendicular.
    *   (Sadiku, Section 12.2; Hayt & Buck, Section 7.1)

---

## 4. Plane Waves in Free Space

**Key Concepts:**

*   **Plane Wave:** A wave where the electric and magnetic field vectors are constant on planes that are perpendicular to the direction of propagation.
*   **Uniform Plane Wave:** A plane wave where the fields are uniform in planes parallel to a given plane.
*   **Solution to Wave Equation:**
    *   Consider a wave propagating in the +z direction in free space. The fields will depend only on $z$ and $t$.
    *   A possible solution for the electric field is a sinusoidal wave:
        $$ \mathbf{E}(z, t) = E_0 \cos(\omega t - kz) \hat{\mathbf{a}}_x $$
        where $E_0$ is the amplitude, $\omega$ is the angular frequency, $k = \omega/c$ is the wave number, and $\hat{\mathbf{a}}_x$ indicates the field is polarized along the x-axis.
    *   Using Faraday's Law ($\nabla \times \mathbf{E} = -\mu_0 \frac{\partial \mathbf{H}}{\partial t}$), we can find the corresponding magnetic field:
        $$ \mathbf{H}(z, t) = H_0 \cos(\omega t - kz) \hat{\mathbf{a}}_y $$
    *   The magnetic field is in phase with the electric field and polarized along the y-axis.
    *   The direction of propagation is given by $\hat{\mathbf{k}} = \hat{\mathbf{a}}_z$.
    *   (Sadiku, Section 12.3; Hayt & Buck, Section 7.2)

*   **Intrinsic Impedance of Free Space ($\eta_0$):** The ratio of the electric field magnitude to the magnetic field magnitude for a plane wave.
    $$ \eta_0 = \frac{|\mathbf{E}|}{|\mathbf{H}|} = \sqrt{\frac{\mu_0}{\epsilon_0}} \approx 120\pi \approx 377 \, \Omega $$
    *   (Sadiku, Section 12.3; Hayt & Buck, Section 7.2)

*   **Polarization:** The orientation of the electric field vector as the wave propagates.
    *   **Linear Polarization:** The electric field oscillates along a straight line.
    *   **Circular Polarization:** The electric field vector rotates at the wave frequency.
    *   **Elliptical Polarization:** The electric field vector traces an ellipse.

**Important Point to Remember:** For plane waves in free space, $\mathbf{E}$, $\mathbf{H}$, and the direction of propagation are mutually orthogonal. $\mathbf{E}$, $\mathbf{H}$, and the direction of propagation follow the right-hand rule: $(\hat{\mathbf{E}} \times \hat{\mathbf{H}}) = \hat{\mathbf{k}}$, where $\hat{\mathbf{k}}$ is the unit vector in the direction of propagation.

**Practice Question:**
A uniform plane wave in free space has an electric field $E_y(z, t) = 10 \cos(10^9 \pi t - 3\pi z)$ V/m.
(a) What is the frequency of the wave?
(b) What is the direction of propagation?
(c) What is the magnetic field $H_x(z, t)$?
(d) What is the intrinsic impedance of free space?

**Answer:**
(a) $\omega = 10^9 \pi \implies f = \omega / (2\pi) = 10^9 \pi / (2\pi) = 0.5 \times 10^9 = 500 \text{ MHz}$.
(b) The phase is $(\omega t - kz)$. Since $k = 3\pi$, the wave propagates in the +z direction.
(c) From $\eta_0 = E_y/H_x$, $H_x = E_y / \eta_0 = (10 \cos(10^9 \pi t - 3\pi z)) / (120\pi) = \frac{1}{12\pi} \cos(10^9 \pi t - 3\pi z)$ A/m. The field is polarized along the x-axis.
(d) $\eta_0 \approx 120\pi \approx 377 \Omega$.

---

## 5. Plane Waves in Conductors

**Key Concepts:**

*   **Conductors:** Materials with free charges that can move, leading to a conduction current density $\mathbf{J} = \sigma \mathbf{E}$.
*   **Modified Maxwell's Equations:** In a conductor with conductivity $\sigma$, $\mathbf{J} = \sigma \mathbf{E}$. The Ampere-Maxwell Law becomes:
    $$ \nabla \times \mathbf{H} = \sigma \mathbf{E} + \frac{\partial \mathbf{D}}{\partial t} $$
*   **Wave Equation in Conductors:** Similar to free space, we can derive a wave equation for fields in conductors. Assuming a good conductor where displacement current is negligible compared to conduction current ($\sigma \gg \omega \epsilon$), or considering general conductors:
    $$ \nabla^2 \mathbf{E} = \mu \sigma \frac{\partial \mathbf{E}}{\partial t} + \mu \epsilon \frac{\partial^2 \mathbf{E}}{\partial t^2} $$
    (Sadiku, Section 12.6; Hayt & Buck, Section 7.7)

*   **Phase Velocity and Wave Number in Conductors:**
    *   In good conductors, the wave equation is often approximated as $\nabla^2 \mathbf{E} \approx \mu \sigma \frac{\partial \mathbf{E}}{\partial t}$. This is a diffusion equation, not a wave equation in the pure sense, indicating damping.
    *   For a general case, the propagation constant $\gamma$ (complex) accounts for both attenuation and phase shift:
        $$ \gamma = \alpha + j\beta = j\omega\sqrt{\mu(\epsilon - j\sigma/\omega)} $$
        *   $\alpha$: Attenuation constant (determines how quickly the wave's amplitude decays).
        *   $\beta$: Phase constant (determines the phase velocity).
    *   The speed of propagation in a conductor is generally slower than in free space and is frequency-dependent.

*   **Intrinsic Impedance of a Conductor ($\eta$):**
    $$ \eta = \sqrt{\frac{\mu}{\epsilon - j\sigma/\omega}} $$
    *   (Sadiku, Section 12.6; Hayt & Buck, Section 7.7)

**Important Point to Remember:** Electromagnetic waves are attenuated (lose amplitude) as they propagate through conductors due to resistive losses.

---

## 6. Skin Effect

**Key Concepts:**

*   **Skin Depth ($\delta$):** The depth into a conductor at which the amplitude of an electromagnetic wave has decayed to $1/e$ (approximately 37%) of its value at the surface.
    $$ \delta = \frac{1}{\alpha} $$
*   **Derivation for Good Conductors:** For good conductors where $\sigma/\omega \epsilon \gg 1$, the attenuation constant is:
    $$ \alpha \approx \sqrt{\frac{\omega \mu \sigma}{2}} $$
    Therefore, the skin depth is:
    $$ \delta \approx \sqrt{\frac{2}{\omega \mu \sigma}} $$
    (Sadiku, Section 12.7; Hayt & Buck, Section 7.7)

*   **Frequency Dependence:** The skin depth is inversely proportional to the square root of the frequency. This means that at higher frequencies, the waves penetrate less deeply into the conductor.
*   **Consequences of Skin Effect:**
    *   **Current Crowding:** At high frequencies, current tends to flow near the surface of a conductor.
    *   **Effective Resistance:** The effective resistance of a conductor increases with frequency due to the reduced cross-sectional area for current flow.
    *   **Shielding:** Conductors can act as shields against electromagnetic radiation at sufficiently high frequencies.

**Example:**
Calculate the skin depth for copper ($\sigma = 5.8 \times 10^7$ S/m, $\mu \approx \mu_0$) at 1 MHz.
$$ \delta = \sqrt{\frac{2}{(2\pi \times 10^6) \times (4\pi \times 10^{-7}) \times (5.8 \times 10^7)}} = \sqrt{\frac{2}{2\pi \times 10^6 \times 4\pi \times 10^{-7} \times 5.8 \times 10^7}} $$
$$ \delta = \sqrt{\frac{2}{2 \times 10^6 \times 4\pi \times 10^{-7} \times 5.8 \times 10^7 / 2\pi}} = \sqrt{\frac{2}{4 \times 10^{-1} \times 5.8 \times 10^7}} = \sqrt{\frac{2}{0.4 \times 5.8 \times 10^7}} $$
Let's recalculate carefully:
$$ \omega = 2\pi f = 2\pi \times 10^6 $$
$$ \delta = \sqrt{\frac{2}{(2\pi \times 10^6) \times (4\pi \times 10^{-7}) \times (5.8 \times 10^7)}} $$
$$ \delta = \sqrt{\frac{2}{2\pi \times 10^6 \times 23.2\pi \times 10^{-7}}} = \sqrt{\frac{2}{46.4\pi^2 \times 10^{-1}}} = \sqrt{\frac{20}{46.4 \times (3.14159)^2}} \approx \sqrt{\frac{20}{46.4 \times 9.87}} \approx \sqrt{\frac{20}{458}} \approx \sqrt{0.0436} \approx 0.209 \text{ mm} $$
(Sadiku provides examples of skin depth calculations)

**Important Point to Remember:** Skin effect is more pronounced at higher frequencies, meaning currents are confined to a thinner layer near the surface.

---

## 7. Wave Propagation in Lossy Dielectrics

**Key Concepts:**

*   **Lossy Dielectric:** A dielectric material that has some conductivity ($\sigma > 0$) in addition to permittivity ($\epsilon$) and permeability ($\mu$). This conductivity leads to energy dissipation (losses) as the wave propagates.
*   **Attenuation:** As waves propagate through a lossy dielectric, their amplitude decreases.
*   **Propagation Constant ($\gamma$):** The complex propagation constant governs the behavior of waves in lossy media.
    $$ \gamma = \alpha + j\beta = j\omega\sqrt{\mu \epsilon \left(1 - j\frac{\sigma}{\omega \epsilon}\right)} $$
    (Sadiku, Section 12.5; Hayt & Buck, Section 7.6)
*   **Attenuation Constant ($\alpha$):**
    $$ \alpha = \omega \sqrt{\frac{\mu \epsilon}{2}} \left[ \sqrt{1 + \left(\frac{\sigma}{\omega \epsilon}\right)^2} - 1 \right]^{1/2} $$
*   **Phase Constant ($\beta$):**
    $$ \beta = \omega \sqrt{\frac{\mu \epsilon}{2}} \left[ \sqrt{1 + \left(\frac{\sigma}{\omega \epsilon}\right)^2} + 1 \right]^{1/2} $$

*   **Loss Tangent ($\tan \delta_L$):** A measure of the lossiness of a dielectric material.
    $$ \tan \delta_L = \frac{\sigma}{\omega \epsilon} $$
    *   **Low-Loss Dielectric:** $\tan \delta_L \ll 1$ (or $\sigma \ll \omega \epsilon$). In this case, approximations can be made:
        $$ \alpha \approx \frac{\sigma}{2} \sqrt{\frac{\mu}{\epsilon}} $$
        $$ \beta \approx \omega \sqrt{\mu \epsilon} \left(1 + \frac{1}{8} \left(\frac{\sigma}{\omega \epsilon}\right)^2\right) \approx \omega \sqrt{\mu \epsilon} $$
    *   **High-Loss Dielectric:** $\tan \delta_L \gg 1$ (or $\sigma \gg \omega \epsilon$). This case is similar to conductors.
        $$ \alpha \approx \sqrt{\frac{\omega \mu \sigma}{2}} $$
        $$ \beta \approx \sqrt{\frac{\omega \mu \sigma}{2}} $$
*   **Wave Speed in Lossy Dielectric:**
    $$ v = \frac{\omega}{\beta} $$

**Important Point to Remember:** The loss tangent ($\sigma/\omega\epsilon$) is a critical parameter that determines the nature of wave propagation in a dielectric. A low loss tangent signifies a good dielectric, where attenuation is minimal and propagation is closer to that in free space. A high loss tangent indicates significant attenuation.

**Practice Question:**
Consider a plane wave propagating in a lossy dielectric with $\epsilon_r = 4$, $\mu_r = 1$, and $\sigma = 10^{-4}$ S/m. The frequency is 1 GHz. Determine if it's a good dielectric or a lossy dielectric. Calculate the attenuation constant and phase constant.

**Answer:**
$\omega = 2\pi f = 2\pi \times 10^9$ rad/s
$\epsilon = \epsilon_r \epsilon_0 = 4 \times 8.854 \times 10^{-12} = 35.416 \times 10^{-12}$ F/m
$\tan \delta_L = \frac{\sigma}{\omega \epsilon} = \frac{10^{-4}}{(2\pi \times 10^9) \times (35.416 \times 10^{-12})} = \frac{10^{-4}}{2\pi \times 3.5416 \times 10^{-2}} = \frac{10^{-4}}{0.2225} \approx 4.5 \times 10^{-4}$
Since $\tan \delta_L \ll 1$, it's a good (low-loss) dielectric.

Using approximations for low-loss dielectrics:
$\alpha \approx \frac{\sigma}{2} \sqrt{\frac{\mu}{\epsilon}} = \frac{10^{-4}}{2} \sqrt{\frac{\mu_0}{\epsilon_r \epsilon_0}} = \frac{10^{-4}}{2} \frac{\sqrt{\mu_0/\epsilon_0}}{\sqrt{\epsilon_r}} = \frac{10^{-4}}{2} \frac{377}{2} = 10^{-4} \times 94.25 \approx 9.425 \times 10^{-3}$ Np/m

$\beta \approx \omega \sqrt{\mu \epsilon} = (2\pi \times 10^9) \sqrt{4\pi \times 10^{-7} \times 4 \times 8.854 \times 10^{-12}} = (2\pi \times 10^9) \sqrt{1.40 \times 10^{-17}} \approx (2\pi \times 10^9) \times (1.18 \times 10^{-8.5})$
Let's use the formula for beta:
$\beta \approx \omega \sqrt{\mu \epsilon} = (2\pi \times 10^9) \sqrt{(4\pi \times 10^{-7}) \times (4 \times 8.854 \times 10^{-12})} = (2\pi \times 10^9) \sqrt{1.40 \times 10^{-17}}$
$\beta \approx (6.283 \times 10^9) \times (1.183 \times 10^{-8.5})$ - error in calculation above.

Let's use the approximation:
$\beta \approx \omega \sqrt{\mu \epsilon} = (2\pi \times 10^9) \sqrt{(4\pi \times 10^{-7}) \times (4 \times 8.854 \times 10^{-12})} = (2\pi \times 10^9) \times \sqrt{1.40 \times 10^{-17}}$
$\beta \approx (2\pi \times 10^9) \times (1.183 \times 10^{-9}) \approx 7.43$ rad/m.

The wave speed $v = \omega/\beta \approx (2\pi \times 10^9) / 7.43 \approx 0.846 \times 10^9$ m/s.

---

## 8. Power and Poynting Theorem

**Key Concepts:**

*   **Instantaneous Poynting Vector ($\mathbf{S}$):** Represents the instantaneous power density (power per unit area) and direction of energy flow of an electromagnetic field.
    $$ \mathbf{S} = \mathbf{E} \times \mathbf{H} $$
    (Sadiku, Section 12.8; Hayt & Buck, Section 7.8)

*   **Average Poynting Vector ($\mathbf{S}_{avg}$):** For time-harmonic fields, the average power flow is more relevant.
    *   If $\mathbf{E} = \mathbf{E}_0 \cos(\omega t - \beta z)$ and $\mathbf{H} = \mathbf{H}_0 \cos(\omega t - \beta z)$:
        $$ \mathbf{S}_{avg} = \frac{1}{2} \text{Re}(\mathbf{E} \times \mathbf{H}^*) $$
        where $\mathbf{H}^*$ is the complex conjugate of $\mathbf{H}$.
    *   For a plane wave $\mathbf{E} = E_0 e^{j(\omega t - \beta z)} \hat{\mathbf{a}}_x$ and $\mathbf{H} = H_0 e^{j(\omega t - \beta z)} \hat{\mathbf{a}}_y$ (with $H_0 = E_0/\eta$):
        $$ \mathbf{S}_{avg} = \frac{1}{2} \text{Re} \left( (E_0 \hat{\mathbf{a}}_x) \times (H_0^* \hat{\mathbf{a}}_y) \right) = \frac{1}{2} E_0 H_0^* \text{Re}(\hat{\mathbf{a}}_x \times \hat{\mathbf{a}}_y) = \frac{1}{2} E_0 H_0 \hat{\mathbf{a}}_z $$
        If $E_0$ and $H_0$ are real amplitudes, $H_0 = E_0/\eta$, so:
        $$ \mathbf{S}_{avg} = \frac{1}{2} \frac{E_0^2}{\eta} \hat{\mathbf{a}}_z $$
        (Sadiku, Section 12.8; Hayt & Buck, Section 7.8)

*   **Poynting Theorem (Integral and Differential Forms):** Relates the net power flowing out of a volume to the decrease in energy stored within the volume and the work done on charges within the volume.
    *   **Differential Form:**
        $$ \nabla \cdot \mathbf{S} + \frac{\partial u}{\partial t} + \mathbf{J} \cdot \mathbf{E} = 0 $$
        where $u = \frac{1}{2}(\mathbf{E} \cdot \mathbf{D} + \mathbf{B} \cdot \mathbf{H})$ is the instantaneous energy density and $\mathbf{J} \cdot \mathbf{E}$ is the power dissipated as heat (Joule heating).
    *   **Integral Form:**
        $$ \oint_S \mathbf{S} \cdot d\mathbf{S} + \frac{\partial}{\partial t} \int_V u \, dV + \int_V \mathbf{J} \cdot \mathbf{E} \, dV = 0 $$
        This states that the total power flowing out of a closed surface is equal to the rate of decrease of energy stored within the volume plus the power dissipated in the volume.
    *   (Sadiku, Section 12.8; Hayt & Buck, Section 7.8; Griffiths, Chapter 8)

*   **Power Flow in Different Media:**
    *   **Free Space:** $\mathbf{S}_{avg} = \frac{1}{2} \frac{E_0^2}{\eta_0} \hat{\mathbf{k}}$
    *   **Lossy Dielectric:** $\mathbf{S}_{avg} = \frac{1}{2} \frac{|E|^2}{\eta} \hat{\mathbf{k}}$, where $|\mathbf{E}|$ decays with distance and $\eta$ is complex. The average power flow will decay as $e^{-2\alpha z}$.

**Important Point to Remember:** The Poynting vector describes the flow of electromagnetic energy. In a source-free region, it represents the power carried by the wave. The Poynting theorem is a statement of energy conservation for electromagnetic fields.

**Practice Question:**
A uniform plane wave with electric field $E_z = 10 \cos(\omega t - \beta x)$ V/m propagates in free space. Find the average power per unit area crossing the plane $x=0$ towards positive $x$.

**Answer:**
The electric field is polarized along the z-axis. For a plane wave, $\mathbf{E}$ and $\mathbf{H}$ are perpendicular, and the direction of propagation is $\hat{\mathbf{k}} = \hat{\mathbf{a}}_x$. Therefore, $\mathbf{H}$ must be along the y-axis.
$E_z = 10 \cos(\omega t - \beta x)$.
The intrinsic impedance is $\eta_0 = E_z/H_y$.
$H_y = \frac{E_z}{\eta_0} = \frac{10 \cos(\omega t - \beta x)}{377}$ A/m.
The average Poynting vector is:
$$ \mathbf{S}_{avg} = \frac{1}{2} \text{Re}(\mathbf{E} \times \mathbf{H}^*) $$
In phasor form: $\mathbf{E} = 10 e^{-j\beta x} \hat{\mathbf{a}}_z$ and $\mathbf{H} = \frac{10}{377} e^{-j\beta x} \hat{\mathbf{a}}_y$.
$$ \mathbf{S}_{avg} = \frac{1}{2} \text{Re}\left( \left( 10 e^{-j\beta x} \hat{\mathbf{a}}_z \right) \times \left( \frac{10}{377} e^{-j\beta x} \hat{\mathbf{a}}_y \right)^* \right) $$
$$ \mathbf{S}_{avg} = \frac{1}{2} \text{Re}\left( 10 e^{-j\beta x} \hat{\mathbf{a}}_z \times \frac{10}{377} e^{+j\beta x} (-\hat{\mathbf{a}}_y) \right) $$
$$ \mathbf{S}_{avg} = \frac{1}{2} \text{Re}\left( -\frac{100}{377} (\hat{\mathbf{a}}_z \times \hat{\mathbf{a}}_y) \right) = \frac{1}{2} \text{Re}\left( -\frac{100}{377} (-\hat{\mathbf{a}}_x) \right) = \frac{1}{2} \frac{100}{377} \hat{\mathbf{a}}_x $$
$$ \mathbf{S}_{avg} = \frac{50}{377} \hat{\mathbf{a}}_x \approx 0.1326 \hat{\mathbf{a}}_x \text{ W/m}^2 $$
The average power per unit area crossing the plane $x=0$ towards positive $x$ is the magnitude of $\mathbf{S}_{avg}$, which is approximately $0.1326$ W/m$^2$.

---

## 9. Reflection of Plane Waves at Normal Incidence

**Key Concepts:**

*   **Boundary Conditions:** When an electromagnetic wave encounters a boundary between two different media, its behavior changes according to the boundary conditions imposed by Maxwell's equations.
*   **Normal Incidence:** The direction of wave propagation is perpendicular to the boundary surface.
*   **Incident, Reflected, and Transmitted Waves:**
    *   **Incident Wave:** The wave approaching the boundary.
    *   **Reflected Wave:** The wave that bounces back into the first medium.
    *   **Transmitted Wave:** The wave that enters and propagates into the second medium.
*   **Boundary Conditions at an Interface:**
    *   The tangential component of $\mathbf{E}$ is continuous across the boundary.
    *   The tangential component of $\mathbf{H}$ is continuous across the boundary.
*   **Reflection Coefficient ($ \Gamma $):** The ratio of the phasor of the reflected electric field to the phasor of the incident electric field.
    $$ \Gamma = \frac{E_{r0}}{E_{i0}} = \frac{\eta_2 - \eta_1}{\eta_2 + \eta_1} $$
    where $\eta_1$ and $\eta_2$ are the intrinsic impedances of medium 1 and medium 2, respectively.
    (Sadiku, Section 12.9; Hayt & Buck, Section 7.9)

*   **Transmission Coefficient ($ \tau $):** The ratio of the phasor of the transmitted electric field to the phasor of the incident electric field.
    $$ \tau = \frac{E_{t0}}{E_{i0}} = 1 + \Gamma = \frac{2\eta_2}{\eta_2 + \eta_1} $$

*   **Reflection and Transmission of Magnetic Fields:**
    *   Reflected Magnetic Field: $H_{r0} = -E_{r0}/\eta_1 = -\Gamma E_{i0}/\eta_1$
    *   Transmitted Magnetic Field: $H_{t0} = E_{t0}/\eta_2 = \tau E_{i0}/\eta_2$

*   **Reflection and Transmission of Power:**
    *   **Reflectance ($ \mathcal{R} $):** The ratio of reflected power to incident power.
        $$ \mathcal{R} = \frac{|\mathbf{S}_{r,avg}|}{|\mathbf{S}_{i,avg}|} = \frac{E_{r0}^2 / (2\eta_1)}{E_{i0}^2 / (2\eta_1)} = \left(\frac{E_{r0}}{E_{i0}}\right)^2 = |\Gamma|^2 $$
    *   **Transmittance ($ \mathcal{T} $):** The ratio of transmitted power to incident power.
        $$ \mathcal{T} = \frac{|\mathbf{S}_{t,avg}|}{|\mathbf{S}_{i,avg}|} = \frac{(E_{t0}^2 / (2\eta_2)) \text{ (real part of impedance)}}{\text{Re}(E_{i0}^2 / (2\eta_1))} $$
        In general, for normal incidence, power transmission is given by:
        $$ \mathcal{T} = \frac{\text{Re}(\eta_1)}{\text{Re}(\eta_2)} (1 - |\Gamma|^2) $$
        For lossless media, $\mathcal{R} + \mathcal{T} = 1$. For lossy media, this equality may not hold due to power dissipation.

**Special Cases:**

1.  **Reflection from a Perfect Conductor ($\eta_2 = 0$):**
    *   $\Gamma = \frac{0 - \eta_1}{0 + \eta_1} = -1$
    *   $E_{r0} = -E_{i0}$ (The reflected electric field is equal in magnitude but opposite in direction and phase to the incident electric field).
    *   $H_{r0} = -H_{i0}$ (Tangential magnetic field is zero at the conductor surface: $H_{i} + H_{r} = 0$).
    *   $\mathcal{R} = |\Gamma|^2 = (-1)^2 = 1$. All incident power is reflected.

2.  **Reflection from a Dielectric with Same Impedance ($\eta_2 = \eta_1$):**
    *   $\Gamma = \frac{\eta_1 - \eta_1}{\eta_1 + \eta_1} = 0$
    *   $E_{r0} = 0$. No reflection occurs.
    *   $\tau = 1$. The wave is fully transmitted.
    *   $\mathcal{R} = 0$, $\mathcal{T} = 1$.

**Example:**
An electromagnetic wave is incident normally from free space onto a lossless dielectric medium with $\epsilon_r = 4$ and $\mu_r = 1$.
(a) Calculate the reflection coefficient.
(b) Calculate the transmission coefficient.
(c) Calculate the fraction of incident power that is reflected.

**Answer:**
Medium 1 (Free Space): $\eta_1 = \eta_0 \approx 377 \, \Omega$.
Medium 2 (Lossless Dielectric): $\eta_2 = \eta_0 \sqrt{\mu_r/\epsilon_r} = 377 \sqrt{1/4} = 377 \times (1/2) = 188.5 \, \Omega$.

(a) Reflection Coefficient:
$$ \Gamma = \frac{\eta_2 - \eta_1}{\eta_2 + \eta_1} = \frac{188.5 - 377}{188.5 + 377} = \frac{-188.5}{565.5} \approx -0.333 $$

(b) Transmission Coefficient:
$$ \tau = 1 + \Gamma = 1 + (-0.333) = 0.667 $$

(c) Fraction of incident power reflected:
$$ \mathcal{R} = |\Gamma|^2 = (-0.333)^2 \approx 0.111 $$
So, about 11.1% of the incident power is reflected. The remaining 88.9% is transmitted.

**Important Point to Remember:** The reflection coefficient depends on the intrinsic impedances of the two media. A perfect conductor causes total reflection with a phase reversal. If the impedances match, there is no reflection.

---

This concludes Module 4. Mastering these concepts will provide a strong foundation for understanding the behavior and applications of electromagnetic waves. Review the key definitions and formulas, and work through the practice problems to solidify your understanding.
