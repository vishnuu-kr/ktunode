---
title: "small dipole"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 1: Antenna theory: Radiation mechanism from an antenna"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7c8"
status: "completed"
scrapedAt: "2026-05-23T18:11:35.400Z"
---
# ANTENNA THEORY AND DESIGN - Module 1: Antenna Theory: Radiation Mechanism from an Antenna

## Topic: Small Dipole

**Course Outcomes Addressed:** CO1 (Analyze the radiation mechanism of antennas - K3)

### 1. Introduction to Antennas and Radiation

*   **Antenna:** A device designed to transmit or receive electromagnetic waves. It acts as a transducer between guided electromagnetic waves and free-space electromagnetic waves.
*   **Radiation Mechanism:** The process by which electrical energy is converted into electromagnetic waves that propagate through space. This typically involves time-varying electric and magnetic fields.
*   **Electromagnetic Waves:** Propagating disturbances consisting of mutually perpendicular electric and magnetic fields that oscillate in phase and travel at the speed of light.

### 2. The Hertzian Dipole (Infinitesimal Dipole)

The small dipole, often referred to as the Hertzian dipole or infinitesimal dipole, is a fundamental building block for understanding antenna radiation. It's an idealized concept representing a very short segment of a conductor carrying a uniform oscillating current.

*   **Definition:** A Hertzian dipole is an idealized antenna of infinitesimal length ($dl$) carrying a uniform oscillating current ($I$). In reality, the current in a finite conductor varies along its length.
*   **Assumptions:**
    *   Infinitesimal length ($dl \ll \lambda$, where $\lambda$ is the wavelength).
    *   Uniform current distribution along its length (this is an approximation, but useful for small lengths).
    *   Current is oscillating harmonically, $I(t) = I_0 e^{j\omega t}$.
*   **Physical Realization:** A very short wire segment with current flowing back and forth.

### 3. Radiation from a Hertzian Dipole

The radiation from a Hertzian dipole can be understood by considering the oscillating current creating time-varying electric and magnetic fields.

#### 3.1. Maxwell's Equations and Vector Potential

Maxwell's equations are the fundamental laws governing electromagnetic fields. For radiating systems, it's convenient to use the concept of a **retarded vector potential**.

*   **Magnetic Vector Potential (A):** Defined as $\mathbf{B} = \nabla \times \mathbf{A}$. For a current distribution $\mathbf{J}$, the retarded magnetic vector potential is given by:
    $$ \mathbf{A}(\mathbf{r}, t) = \frac{\mu}{4\pi} \int_V \frac{\mathbf{J}(\mathbf{r}', t - R/c)}{R} dV' $$
    where:
    *   $\mu$ is the permeability of the medium.
    *   $\mathbf{J}(\mathbf{r}', t)$ is the current density at source point $\mathbf{r}'$.
    *   $R = |\mathbf{r} - \mathbf{r}'|$ is the distance between the observation point $\mathbf{r}$ and the source point $\mathbf{r}'$.
    *   $t - R/c$ indicates the "retarded time" – the time at which the source must have emitted the field observed at time $t$.

*   **For a Hertzian Dipole:** The current density is localized over a small volume $dV'$. If the current is along the z-axis, $\mathbf{J} dV' = I d\mathbf{l}'$. The magnetic vector potential at an observation point $\mathbf{r}$ is:
    $$ \mathbf{A}(\mathbf{r}) = \frac{\mu I d\mathbf{l}}{4\pi R} e^{-j\beta R} $$
    where $I$ is the current amplitude and $d\mathbf{l}$ is the vector representing the infinitesimal dipole's length and orientation. $\beta = 2\pi/\lambda$ is the wave number.

#### 3.2. Derivation of Fields (Spherical Coordinates)

To analyze the radiation pattern, we use spherical coordinates ($r, \theta, \phi$) with the dipole aligned along the z-axis.

*   **A in Spherical Coordinates:**
    $$ \mathbf{A} = A_\theta \hat{\boldsymbol{\theta}} = \frac{\mu I dl}{4\pi R} \sin\theta e^{-j\beta R} \hat{\boldsymbol{\theta}} $$
    The $\sin\theta$ dependence arises from the projection of the dipole onto the radial direction and the geometry.

*   **Deriving Electric and Magnetic Fields:** Using the relationships $\mathbf{E} = -\nabla V - j\omega\mathbf{A}$ and $\mathbf{H} = \frac{1}{\mu} \nabla \times \mathbf{A}$, where $V$ is the scalar potential, we can derive the electric ($\mathbf{E}$) and magnetic ($\mathbf{H}$) fields in spherical coordinates.

    **Important Note:** For practical radiation analysis, we are primarily interested in the fields in the **far-field region** ($r \gg \lambda$, $r \gg dl$). In this region, terms that decay faster with $r$ (like $1/r^2$ and $1/r^3$) are neglected compared to terms that decay as $1/r$.

*   **Far-Field Fields of a Hertzian Dipole:**
    *   **Magnetic Field ($H_\phi$):**
        $$ H_\phi = \frac{j \beta I dl}{4\pi r} \sin\theta e^{-j\beta r} $$
    *   **Electric Field ($E_\theta$):**
        $$ E_\theta = \frac{j \beta I dl}{4\pi r} \sin\theta e^{-j\beta r} $$
        Note that $|E_\theta| = \eta |H_\phi|$, where $\eta = \sqrt{\mu/\epsilon}$ is the intrinsic impedance of the medium ($\approx 377 \Omega$ for free space).

*   **Key Observations from Far-Field Expressions:**
    *   The fields are purely transverse to the direction of propagation (radial direction $\hat{r}$). This indicates that the wave is a **plane wave** in the far-field.
    *   The fields are proportional to $\sin\theta$. This means the radiation intensity is maximum broadside ($\theta = 90^\circ$) and zero along the axis of the dipole ($\theta = 0^\circ, 180^\circ$).
    *   The fields are inversely proportional to the distance $r$, signifying that the wave propagates and its amplitude decreases with distance.

#### 3.3. Radiation Pattern

The radiation pattern describes how the radiated power or intensity is distributed in space.

*   **Angular Distribution:** The $\sin\theta$ term dictates the angular distribution.
    *   **Maximum Radiation:** Occurs at $\theta = 90^\circ$ (broadside to the dipole).
    *   **Nulls:** Occur at $\theta = 0^\circ$ and $\theta = 180^\circ$ (along the axis of the dipole).
    *   **Azimuthal Symmetry:** The pattern is independent of $\phi$, meaning it's symmetrical around the dipole axis.
*   **Types of Patterns:**
    *   **Isotropic:** Radiates equally in all directions (theoretical).
    *   **Dumbbell/Toroidal:** The characteristic pattern of a dipole, with two lobes perpendicular to the dipole axis and nulls along the axis.
*   **Power Density:** The instantaneous power density radiated by the Hertzian dipole is given by the Poynting vector:
    $$ \mathbf{S} = \mathbf{E} \times \mathbf{H}^* $$
    In the far-field, the time-averaged power density is:
    $$ \langle S_r \rangle = \frac{1}{2} |E_\theta| |H_\phi| = \frac{\beta^2 |I|^2 |dl|^2}{32\pi^2 r^2} \sin^2\theta $$

#### 3.4. Radiation Resistance

The radiation resistance ($R_{rad}$) is a hypothetical resistance that would dissipate the same amount of power as is radiated by the antenna, if the same current were flowing through it.

*   **Definition:** $P_{rad} = \frac{1}{2} I_{rms}^2 R_{rad}$, where $P_{rad}$ is the total radiated power.
*   **Total Radiated Power:** Integrated power density over a sphere.
    $$ P_{rad} = \int_0^{2\pi} \int_0^\pi \langle S_r \rangle r^2 \sin\theta d\theta d\phi $$
    Substituting the expression for $\langle S_r \rangle$:
    $$ P_{rad} = \int_0^{2\pi} \int_0^\pi \frac{\beta^2 |I|^2 |dl|^2}{32\pi^2 r^2} \sin^2\theta r^2 \sin\theta d\theta d\phi $$
    $$ P_{rad} = \frac{\beta^2 |I|^2 |dl|^2}{32\pi^2} \int_0^{2\pi} d\phi \int_0^\pi \sin^3\theta d\theta $$
    The integrals evaluate to: $\int_0^{2\pi} d\phi = 2\pi$ and $\int_0^\pi \sin^3\theta d\theta = \frac{4}{3}$.
    $$ P_{rad} = \frac{\beta^2 |I|^2 |dl|^2}{32\pi^2} (2\pi) \left(\frac{4}{3}\right) = \frac{\beta^2 |I|^2 |dl|^2}{12\pi} $$
*   **Calculating Radiation Resistance:**
    $$ R_{rad} = \frac{2 P_{rad}}{|I|^2} = \frac{2}{|I|^2} \frac{\beta^2 |I|^2 |dl|^2}{12\pi} = \frac{\beta^2 |dl|^2}{6\pi} $$
    Since $\beta = 2\pi/\lambda$:
    $$ R_{rad} = \frac{(2\pi/\lambda)^2 |dl|^2}{6\pi} = \frac{4\pi^2 |dl|^2}{6\pi \lambda^2} = \frac{2\pi}{3} \left(\frac{dl}{\lambda}\right)^2 $$

*   **Key Takeaway for Radiation Resistance:**
    *   The radiation resistance is proportional to the square of the dipole length and inversely proportional to the square of the wavelength.
    *   For a truly infinitesimal dipole ($dl \ll \lambda$), the radiation resistance is very small. This implies that a short dipole is a very inefficient radiator.

#### 3.5. Directivity and Gain

*   **Directivity (D):** The ratio of the radiation intensity in a given direction to the average radiation intensity over all directions.
    $$ D(\theta, \phi) = \frac{U(\theta, \phi)}{U_{avg}} $$
    where $U(\theta, \phi)$ is the radiation intensity ($r^2 \langle S_r \rangle$) and $U_{avg} = \frac{P_{rad}}{4\pi}$.
    For the Hertzian dipole, $U(\theta, \phi) \propto \sin^2\theta$.
    $$ U_{avg} = \frac{1}{4\pi} \frac{\beta^2 |I|^2 |dl|^2}{12\pi} = \frac{\beta^2 |I|^2 |dl|^2}{48\pi^2} $$
    $$ D(\theta, \phi) = \frac{\frac{\beta^2 |I|^2 |dl|^2}{32\pi^2} \sin^2\theta}{\frac{\beta^2 |I|^2 |dl|^2}{48\pi^2}} = \frac{48\pi^2}{32\pi^2} \sin^2\theta = \frac{3}{2} \sin^2\theta $$
*   **Maximum Directivity ($D_{max}$):** Occurs at $\theta = 90^\circ$.
    $$ D_{max} = \frac{3}{2} $$
    This means the radiation intensity in the broadside direction is 1.5 times the average intensity.

*   **Gain (G):** Directivity multiplied by the radiation efficiency.
    $$ G = \eta_r D $$
    where $\eta_r = \frac{R_{rad}}{R_{in}}$ and $R_{in}$ is the input resistance of the antenna. For a short dipole, losses are usually small, so efficiency is close to 1, and Gain $\approx$ Directivity.

#### 3.6. Input Impedance

The input impedance of an antenna is crucial for matching it to the transmission line. For a Hertzian dipole, the impedance analysis is more complex and involves near-field components.

*   **Radiation Resistance ($R_{rad}$):** As derived above, $R_{rad} = \frac{2\pi}{3} \left(\frac{dl}{\lambda}\right)^2$.
*   **Reactance ($X_c$):** The short dipole exhibits capacitive reactance due to its short length, which opposes the current.
    $$ X_c \approx \frac{1}{\omega C} \approx \frac{1}{2\pi f C} $$
    For a short dipole of length $dl$ and radius $a$, the capacitance is approximately:
    $$ C \approx \frac{2\pi \epsilon dl}{\ln(dl/a)} $$
    The reactive component of the impedance is dominated by the antenna's end effects. A detailed analysis by Storer shows that for a short dipole ($dl \ll \lambda$), the input reactance is approximately:
    $$ X_c \approx \frac{1}{\omega C_{eff}} $$
    where $C_{eff}$ is an effective capacitance. A simpler approximation often used is:
    $$ X_c \approx -\frac{1}{\omega C} = -\frac{1}{2\pi f C} $$
    However, a more accurate result from theory (e.g., Balanis, Chapter 2) for the reactance is:
    $$ X_c = -\frac{1}{2\pi} \frac{c}{f dl} \left( \ln\left(\frac{2c}{dl}\right) - 1 \right) = -\frac{1}{2\pi} \frac{\lambda}{dl} \left( \ln\left(\frac{2\lambda}{dl}\right) - 1 \right) $$
    This shows the reactance is large and negative (capacitive) for short dipoles.
*   **Input Impedance ($Z_{in}$):**
    $$ Z_{in} = R_{rad} + jX_c $$
    For a very short dipole ($dl \ll \lambda$), $R_{rad}$ is very small, and $X_c$ is large and negative. This means the antenna is highly reactive and difficult to match for efficient radiation.

#### 3.7. Limitations of the Hertzian Dipole Model

*   **Uniform Current:** The assumption of uniform current is not realistic for any finite length conductor. In a real dipole, the current is a sinusoidal function of position.
*   **Infinitesimal Length:** The formulas derived are valid for $dl \ll \lambda$. As $dl$ approaches $\lambda$, the approximations break down, and the radiation pattern and impedance become more complex.

### 4. The Short Dipole (Approximation of a Finite Dipole)

The "small dipole" in practice often refers to a dipole whose length is significantly shorter than a wavelength, but not necessarily infinitesimal. For example, a dipole with length $l < \lambda/10$.

*   **Current Distribution:** For a dipole of length $l$, the current distribution is more accurately represented by a sinusoidal function:
    $$ I(z) = I_0 \sin\left(\beta\left(\frac{l}{2} - |z|\right)\right) $$
    where $z$ is the position along the dipole, and the dipole is centered at the origin ($z=0$) and extends from $-l/2$ to $l/2$. $I_0$ is the maximum current at the feed point ($z = \pm l/2$).
*   **Radiation Characteristics:** The radiation pattern remains similar to the Hertzian dipole (maxima broadside, nulls along the axis), but the nulls are slightly wider and the main lobes are more pronounced as the length increases towards resonance.
*   **Radiation Resistance:** The radiation resistance of a short dipole (length $l$) is given by:
    $$ R_{rad} \approx 20 \pi^2 \left(\frac{l}{\lambda}\right)^2 $$
    This is slightly different from the Hertzian dipole result due to the current variation. Balanis (Chapter 2) provides a more precise formula for a short dipole of length $l$:
    $$ R_{rad} \approx 20 \pi^2 \left(\frac{l}{\lambda}\right)^2 \left(1 - \frac{1}{12}\left(\frac{2\pi l}{\lambda}\right)^2\right) $$
    For $l \ll \lambda$, the second term is negligible, and we get the approximate result.
*   **Input Impedance:** The capacitive reactance still dominates, but its magnitude is less than that of the Hertzian dipole for the same short length.

### 5. Key Concepts and Definitions Recap

*   **Hertzian Dipole:** Infinitesimal length, uniform current. Basis for radiation analysis.
*   **Far-Field Region:** Region where $r \gg \lambda$ and $r \gg dl$. Plane wave characteristics, fields decay as $1/r$.
*   **Radiation Pattern:** Spatial distribution of radiated power. For a dipole, $\sin\theta$ dependence.
*   **Radiation Resistance ($R_{rad}$):** Equivalent resistance dissipating radiated power. Proportional to $(dl/\lambda)^2$.
*   **Directivity:** Ratio of maximum to average radiation intensity. For dipole, $1.5$.
*   **Gain:** Directivity multiplied by efficiency.
*   **Input Impedance:** $R_{rad} + jX_c$. For short dipoles, capacitive reactance ($X_c$) is significant.

### 6. Important Points to Remember

*   The **$\sin\theta$ dependence** of the fields is the hallmark of dipole radiation, leading to broadside radiation and axial nulls.
*   Short dipoles are **inefficient radiators** because their radiation resistance is very small.
*   The **capacitive reactance** of short dipoles is large and negative, requiring significant tuning (e.g., with inductors) for impedance matching to transmission lines.
*   The Hertzian dipole is an **idealization**. Real dipoles have sinusoidal current distributions and their behavior is approximated by Hertzian dipole formulas when $l \ll \lambda$.
*   The **wavelength** is a critical parameter. The "smallness" of a dipole is relative to the wavelength.

### 7. Examples

*   **Example 1: Short Dipole Radiation Resistance**
    A short dipole of length $l=0.01\lambda$ is placed in free space. Calculate its radiation resistance.
    Using the approximate formula: $R_{rad} \approx 20 \pi^2 \left(\frac{l}{\lambda}\right)^2$
    $R_{rad} \approx 20 \pi^2 (0.01)^2 \approx 20 \times 9.87 \times 0.0001 \approx 0.01974 \, \Omega$
    This is a very small resistance, indicating poor radiation efficiency.

*   **Example 2: Radiation Pattern of a Short Dipole**
    Sketch the radiation pattern of a short dipole in the E-plane ($\phi = 90^\circ$) and H-plane ($\theta = 90^\circ$).
    *   **E-plane (plane containing the dipole axis, e.g., yz-plane with dipole on z):** $\theta$ varies from $0^\circ$ to $180^\circ$, $\phi$ is fixed. The pattern is proportional to $\sin\theta$, which is a circle in this plane.
    *   **H-plane (plane perpendicular to the dipole axis):** $\theta = 90^\circ$, $\phi$ varies from $0^\circ$ to $360^\circ$. The pattern is constant ($\sin 90^\circ = 1$), so it's a circle of constant radius.
    The combined 3D pattern is toroidal (doughnut-shaped).

### 8. Practice Questions and Answers

**Q1:** What is the main characteristic of the radiation pattern of a short dipole?
**A1:** The radiation pattern is maximum broadside to the dipole axis ($\theta = 90^\circ$) and has nulls along the dipole axis ($\theta = 0^\circ, 180^\circ$).

**Q2:** Why are short dipoles generally inefficient radiators?
**A2:** Because their radiation resistance is very small, meaning most of the power delivered to the antenna is lost in conductor resistance (ohmic losses) or not radiated effectively due to the large reactive component.

**Q3:** For a Hertzian dipole, what is the dependence of the far-field electric and magnetic fields on the distance $r$?
**A3:** The fields are inversely proportional to $r$ (i.e., proportional to $1/r$).

**Q4:** Calculate the radiation resistance of a Hertzian dipole of length $dl = \lambda/50$ in free space.
**A4:** Using $R_{rad} = \frac{2\pi}{3} \left(\frac{dl}{\lambda}\right)^2$:
$R_{rad} = \frac{2\pi}{3} \left(\frac{\lambda/50}{\lambda}\right)^2 = \frac{2\pi}{3} \left(\frac{1}{50}\right)^2 = \frac{2\pi}{3} \frac{1}{2500} = \frac{2\pi}{7500} \approx 0.0008377 \, \Omega$

**Q5:** What is the directivity of a Hertzian dipole?
**A5:** The maximum directivity of a Hertzian dipole is $1.5$ (or $1.76$ dBi).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 9. References and Further Reading

*   **Antenna Theory: Analysis and Design, by Constantine A. Balanis (Wiley, 4th Edition, 2016):** Chapter 2 covers fundamental antennas including the dipole, providing detailed derivations for fields, patterns, and impedance. This is the primary reference for this topic.
*   **Antennas and radio Wave propagation by R.E. Collin (McGraw Hill, 2/e, 2001):** Offers a rigorous treatment of electromagnetic theory applied to antennas, including dipole analysis.
*   **Microwave Engineering by David M. Pozar (Wiley India, 4/e, 2012):** While focused on microwave circuits, Pozar provides excellent foundational material on electromagnetic waves and antenna basics, often with practical insights.
*   **Antennas for all applications by J D Kraus (Tata McGraw hill, 3/e, 2002):** Kraus provides extensive practical coverage and historical context for antennas, including early work on dipoles.

This module provides the foundational understanding of how an antenna radiates electromagnetic waves, using the simplified but crucial model of the small dipole. This understanding is essential for analyzing more complex antenna structures.