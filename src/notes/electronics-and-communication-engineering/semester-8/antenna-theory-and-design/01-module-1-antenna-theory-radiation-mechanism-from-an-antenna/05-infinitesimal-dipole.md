---
title: "Infinitesimal dipole"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 1: Antenna theory: Radiation mechanism from an antenna"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7c7"
status: "completed"
scrapedAt: "2026-05-23T18:11:34.533Z"
---
# ANTENNA THEORY AND DESIGN

## Module 1: Antenna Theory: Radiation Mechanism from an Antenna

### Topic: The Infinitesimal Dipole (or Hertzian Dipole)

This topic introduces the fundamental concept of radiation from an antenna by considering the simplest theoretical model: the infinitesimal dipole. Understanding the infinitesimal dipole is crucial for comprehending the radiation characteristics of more complex antennas.

---

### 1. Introduction to Radiation and the Infinitesimal Dipole

**Key Concept:** Antennas are transducers that convert electrical signals into electromagnetic waves and vice versa. Radiation is the process by which antennas radiate energy into free space as electromagnetic waves.

**The Infinitesimal Dipole:**
*   Also known as the Hertzian dipole, it represents a short, straight conductor of length '$dl$' carrying a uniform current '$I$'.
*   The length '$dl$' is assumed to be much smaller than the wavelength ($\lambda$) of the radiated signal ($dl \ll \lambda$). This assumption simplifies the analysis significantly.
*   The current '$I$' is assumed to be constant along the entire length '$dl$'. In reality, current on a conductor varies. This is a key simplification.

**Why study the infinitesimal dipole?**
*   It serves as a building block for analyzing more complex antennas.
*   Many radiation mechanisms of more complex antennas can be approximated as the sum of contributions from many infinitesimal dipoles.
*   It provides insights into fundamental concepts like radiation intensity, fields, and power.

---

### 2. Mathematical Formulation of the Infinitesimal Dipole

To understand the radiation, we need to determine the electric and magnetic fields produced by the infinitesimal dipole. We'll use Maxwell's equations and concepts from electromagnetics.

**Assumptions:**
1.  The dipole is located at the origin of a spherical coordinate system ($r, \theta, \phi$).
2.  The dipole is oriented along the z-axis, with length '$dl$'.
3.  The current along the dipole is '$I_0 e^{j\omega t}$', where '$I_0$' is the amplitude and '$\omega$' is the angular frequency. For simplicity, the time dependence '$e^{j\omega t}$' is often omitted and assumed implicitly.
4.  The displacement current is considered in Maxwell's equations.
5.  The medium is free space (permittivity $\epsilon_0$, permeability $\mu_0$, conductivity $\sigma=0$).

**Derivation of Fields (Conceptual Outline):**

The analysis typically starts by considering the current density $\mathbf{J}$ associated with the infinitesimal dipole. For a dipole along the z-axis of length $dl$, with uniform current $I_0$, the current density can be approximated as:

$\mathbf{J} = I_0 \delta(x) \delta(y) \hat{z}$ for $0 \leq z \leq dl$, where $\delta(\cdot)$ is the Dirac delta function.

From $\mathbf{J}$, we can derive the vector potential $\mathbf{A}$:

$\mathbf{A}(\mathbf{r}) = \frac{\mu_0}{4\pi} \int_{V'} \frac{\mathbf{J}(\mathbf{r'})}{R} e^{-jkR} dV'$

where:
*   $\mathbf{r}$ is the observation point.
*   $\mathbf{r'}$ is the source point.
*   $R = |\mathbf{r} - \mathbf{r'}|$ is the distance between source and observation points.
*   $k = \omega \sqrt{\mu_0 \epsilon_0} = \frac{2\pi}{\lambda}$ is the wave number.

For an infinitesimal dipole at the origin along the z-axis with current $I_0$:

$\mathbf{A} = \hat{z} \frac{\mu_0 I_0 dl}{4\pi r} e^{-jkr}$

The magnetic field $\mathbf{H}$ is then derived from the curl of the vector potential:

$\mathbf{H} = \frac{1}{\mu_0} \nabla \times \mathbf{A}$

And the electric field $\mathbf{E}$ is derived from Faraday's Law:

$\mathbf{E} = \frac{1}{j\omega\epsilon_0} \nabla \times \mathbf{H}$

**The Far-Field Approximation:**

In the far-field region ($r \gg \lambda$ and $r \gg dl$), the fields simplify considerably. The assumption $dl \ll \lambda$ also leads to this simplification.

*   **Far-field fields for an infinitesimal dipole oriented along the z-axis:**

    $\mathbf{E} \approx j \frac{k I_0 dl}{4\pi r} \sin\theta e^{-jkr} \hat{\boldsymbol{\theta}}$

    $\mathbf{H} \approx j \frac{k I_0 dl}{4\pi r} \sin\theta e^{-jkr} \hat{\boldsymbol{\phi}}$

**Key Observations from Far-Field Expressions:**

*   **Radiation Pattern:** The fields vary as $\sin\theta$. This means radiation is maximum in the $\theta = 90^\circ$ direction (perpendicular to the dipole) and zero along the dipole axis ($\theta = 0^\circ, 180^\circ$). This is a donut-shaped pattern.
*   **Polarization:** The electric field is in the $\hat{\boldsymbol{\theta}}$ direction, indicating linear polarization.
*   **Dependence on Parameters:** The field strength is proportional to the current ($I_0$), dipole length ($dl$), and inversely proportional to the distance ($r$). It also depends on the wavelength ($\lambda$) through the wave number ($k$).

**[Reference: Balanis, Chapter 2 - Fundamental Parameters of Radiating Systems]**

---

### 3. Radiation Characteristics

The infinitesimal dipole exhibits several important radiation characteristics that are fundamental to antenna theory.

**3.1 Radiation Intensity ($U$)**

**Key Concept:** Radiation intensity is the power radiated per unit solid angle. It describes how the radiated power is distributed in different directions.

**Formula:**
$U(\theta, \phi) = \frac{1}{2} \text{Re}(\mathbf{E} \times \mathbf{H}^*)$ (in spherical coordinates)

For the infinitesimal dipole, using the far-field expressions:
$\mathbf{E} = E_\theta \hat{\boldsymbol{\theta}}$ and $\mathbf{H} = H_\phi \hat{\boldsymbol{\phi}}$
$U(\theta, \phi) = \frac{1}{2} E_\theta H_\phi^* \sin\theta$

Substituting the far-field values:
$U(\theta, \phi) = \frac{1}{2} \left(j \frac{k I_0 dl}{4\pi r} \sin\theta \right) \left(-j \frac{k I_0 dl}{4\pi r} \sin\theta \right)^* \quad$ (Magnitude of E and H are real in definition of U)
$U(\theta, \phi) = \frac{1}{2} \left| \frac{k I_0 dl}{4\pi r} \right|^2 \sin^2\theta$

Since $r$ is in the denominator, this is not the radiation intensity we define as power per solid angle. The $1/r^2$ term cancels out when defining power density.

The **directional radiation intensity** is often considered as the power radiated per unit solid angle, excluding the $1/r^2$ dependence on distance:
$U(\theta, \phi) = \frac{1}{2} r^2 \text{Re}(\mathbf{E} \times \mathbf{H}^*)$

For the infinitesimal dipole:
$U(\theta, \phi) = \frac{1}{2} \left| \frac{k I_0 dl}{4\pi} \right|^2 \sin^2\theta$

**Observations:**
*   $U(\theta, \phi) \propto \sin^2\theta$.
*   Maximum radiation intensity occurs at $\theta = 90^\circ$ (broadside) and is zero at $\theta = 0^\circ, 180^\circ$ (endfire).

**3.2 Power Radiated ($P_{rad}$)**

**Key Concept:** The total power radiated by the antenna is the integral of the radiation intensity over all solid angles.

**Formula:**
$P_{rad} = \int_0^{2\pi} \int_0^{\pi} U(\theta, \phi) \sin\theta \, d\theta \, d\phi$

For the infinitesimal dipole:
$P_{rad} = \int_0^{2\pi} \int_0^{\pi} \left( \frac{1}{2} \left| \frac{k I_0 dl}{4\pi} \right|^2 \sin^2\theta \right) \sin\theta \, d\theta \, d\phi$
$P_{rad} = \frac{1}{2} \left| \frac{k I_0 dl}{4\pi} \right|^2 \int_0^{2\pi} d\phi \int_0^{\pi} \sin^3\theta \, d\theta$

The integral of $\sin^3\theta$ from 0 to $\pi$ is $4/3$.
$P_{rad} = \frac{1}{2} \left( \frac{k I_0 dl}{4\pi} \right)^2 \cdot 2\pi \cdot \frac{4}{3}$
$P_{rad} = \frac{1}{2} \frac{k^2 I_0^2 (dl)^2}{16\pi^2} \cdot 2\pi \cdot \frac{4}{3} = \frac{k^2 I_0^2 (dl)^2}{3 \cdot 8\pi} \cdot 2\pi = \frac{k^2 I_0^2 (dl)^2}{12\pi}$

Substituting $k = \frac{2\pi}{\lambda}$:
$P_{rad} = \frac{(2\pi/\lambda)^2 I_0^2 (dl)^2}{12\pi} = \frac{4\pi^2 I_0^2 (dl)^2}{12\pi \lambda^2} = \frac{\pi I_0^2 (dl)^2}{3 \lambda^2}$

**[Reference: Balanis, Chapter 2 - Radiation Density and Power Radiated]**

**3.3 Radiation Resistance ($R_{rad}$)**

**Key Concept:** Radiation resistance is the equivalent resistance that would dissipate the same amount of power as radiated by the antenna when the same current flows through it.

**Formula:**
$P_{rad} = \frac{1}{2} I_{rms}^2 R_{rad}$
Since $I_0$ is peak current, $I_{rms} = I_0 / \sqrt{2}$, so $I_{rms}^2 = I_0^2 / 2$.
$P_{rad} = \frac{1}{2} \frac{I_0^2}{2} R_{rad} = \frac{I_0^2}{4} R_{rad}$

Equating this with the derived $P_{rad}$:
$\frac{I_0^2}{4} R_{rad} = \frac{\pi I_0^2 (dl)^2}{3 \lambda^2}$
$R_{rad} = \frac{4\pi (dl)^2}{3 \lambda^2}$

**Observations:**
*   Radiation resistance is proportional to $(dl)^2$ and inversely proportional to $\lambda^2$.
*   For an infinitesimal dipole ($dl \ll \lambda$), the radiation resistance is very small. For example, for $dl = \lambda/100$, $R_{rad} \approx 4\pi (1/100)^2 / 3 \approx 0.00418 \Omega$.
*   This low radiation resistance means that most of the power supplied to such a short dipole will be lost as heat due to the conductor's finite conductivity (ohmic losses), rather than being radiated.

**[Reference: Balanis, Chapter 2 - Radiation Resistance]**

**3.4 Directivity ($D$) and Gain ($G$)**

**Key Concept:**
*   **Directivity:** The ratio of the radiation intensity in a given direction to the average radiation intensity over all directions. It's a measure of how concentrated the radiated power is in a particular direction.
*   **Gain:** Directivity adjusted for the efficiency of the antenna. For an infinitesimal dipole, efficiency is often assumed to be 1 in theoretical analysis, making gain equal to directivity.

**Formulas:**
*   Average Radiation Intensity ($U_{avg}$): $U_{avg} = \frac{P_{rad}}{4\pi}$
*   Directivity ($D$): $D(\theta, \phi) = \frac{U(\theta, \phi)}{U_{avg}}$

For the infinitesimal dipole:
$U(\theta, \phi) = \frac{1}{2} \left| \frac{k I_0 dl}{4\pi} \right|^2 \sin^2\theta$
$P_{rad} = \frac{\pi I_0^2 (dl)^2}{3 \lambda^2}$
$U_{avg} = \frac{P_{rad}}{4\pi} = \frac{\pi I_0^2 (dl)^2}{3 \lambda^2 \cdot 4\pi} = \frac{I_0^2 (dl)^2}{12 \lambda^2}$

$D(\theta, \phi) = \frac{\frac{1}{2} \left| \frac{k I_0 dl}{4\pi} \right|^2 \sin^2\theta}{\frac{I_0^2 (dl)^2}{12 \lambda^2}}$
$D(\theta, \phi) = \frac{\frac{1}{2} \frac{k^2 (I_0 dl)^2}{16\pi^2} \sin^2\theta}{\frac{(I_0 dl)^2}{12 \lambda^2}}$
Since $k = 2\pi/\lambda$, $k^2 = 4\pi^2/\lambda^2$:
$D(\theta, \phi) = \frac{\frac{1}{2} \frac{4\pi^2 (I_0 dl)^2}{16\pi^2 \lambda^2} \sin^2\theta}{\frac{(I_0 dl)^2}{12 \lambda^2}}$
$D(\theta, \phi) = \frac{\frac{(I_0 dl)^2}{8 \lambda^2} \sin^2\theta}{\frac{(I_0 dl)^2}{12 \lambda^2}} = \frac{12}{8} \sin^2\theta = 1.5 \sin^2\theta$

**Maximum Directivity ($D_{max}$):**
The maximum directivity occurs in the direction of maximum radiation intensity, which is at $\theta = 90^\circ$.
$D_{max} = 1.5 \sin^2(90^\circ) = 1.5$

**Gain ($G$)**:
Gain is defined as $G = \eta D$, where $\eta$ is the antenna efficiency.
$\eta = \frac{R_{rad}}{R_{rad} + R_{loss}}$, where $R_{loss}$ is the loss resistance.
For an ideal infinitesimal dipole in free space, $R_{loss} = 0$, so $\eta = 1$, and $G = D$.

**Observations:**
*   The maximum directivity of an infinitesimal dipole is 1.5, which is approximately 1.76 dBi.
*   This is a relatively low directivity, indicating that the infinitesimal dipole is an omnidirectional antenna in the plane perpendicular to the dipole axis.

**[Reference: Balanis, Chapter 2 - Directivity]**

---

### 4. Relation to Real Antennas

**Key Concept:** Real antennas, such as dipoles of finite length, loops, monopoles, etc., can often be analyzed by considering them as a collection of infinitesimal dipoles.

**Example:**
*   **Finite Length Dipole:** A dipole of length '$l$' can be approximated as a sum of many infinitesimal dipoles, each carrying a current that varies sinusoidally along the length of the dipole. The current distribution is crucial here.
*   **Loop Antennas:** Small loop antennas can be analyzed as a collection of infinitesimal dipoles oriented tangentially around the loop.

**[Reference: Balanis, Chapter 5 - Dipole Arrays]**

---

### 5. Practice Questions and Answers

**Question 1:**
An infinitesimal dipole of length $dl = 0.01\lambda$ is oriented along the z-axis and carries a current $I_0 = 1$ A. Calculate its radiation resistance.

**Answer 1:**
The radiation resistance of an infinitesimal dipole is given by $R_{rad} = \frac{4\pi (dl)^2}{3 \lambda^2}$.
Given $dl = 0.01\lambda$.
$R_{rad} = \frac{4\pi (0.01\lambda)^2}{3 \lambda^2} = \frac{4\pi (0.0001 \lambda^2)}{3 \lambda^2} = \frac{0.0004\pi}{3} \approx 0.0004188 \, \Omega$.

**Question 2:**
What is the direction of maximum radiation for an infinitesimal dipole oriented along the z-axis?

**Answer 2:**
The radiation intensity is proportional to $\sin^2\theta$. The maximum occurs when $\sin\theta = 1$, which corresponds to $\theta = 90^\circ$. This is the direction perpendicular to the dipole axis, in the xy-plane.

**Question 3:**
What is the maximum directivity of an infinitesimal dipole? Express it in linear and dBi units.

**Answer 3:**
The directivity of an infinitesimal dipole is $D(\theta, \phi) = 1.5 \sin^2\theta$.
The maximum directivity occurs at $\theta = 90^\circ$:
$D_{max} = 1.5 \sin^2(90^\circ) = 1.5$.
In dBi (decibels relative to isotropic), $D_{max}(dBi) = 10 \log_{10}(1.5) \approx 1.76 \, dBi$.

**Question 4:**
An infinitesimal dipole has a radiation resistance of $R_{rad} = 0.005 \Omega$. If the total power radiated is $P_{rad} = 0.05 \, W$, what is the RMS current flowing through the dipole?

**Answer 4:**
The relationship between radiated power, RMS current, and radiation resistance is $P_{rad} = \frac{1}{2} I_{rms}^2 R_{rad}$.
Given $P_{rad} = 0.05 \, W$ and $R_{rad} = 0.005 \, \Omega$.
$0.05 = \frac{1}{2} I_{rms}^2 (0.005)$
$0.1 = I_{rms}^2 (0.005)$
$I_{rms}^2 = \frac{0.1}{0.005} = 20$
$I_{rms} = \sqrt{20} \approx 4.47 \, A$.

---

### 6. Important Points to Remember

*   The infinitesimal dipole (Hertzian dipole) is a theoretical model of a short conductor with uniform current.
*   Its length $dl$ is much smaller than the wavelength $\lambda$ ($dl \ll \lambda$).
*   The far-field electric and magnetic fields vary as $\sin\theta/r$.
*   The radiation pattern is omnidirectional in the plane perpendicular to the dipole axis and nulls along the axis.
*   Radiation resistance is very small for infinitesimal dipoles, leading to significant losses in practical short antennas.
*   It is a fundamental building block for analyzing more complex antennas.
*   Its directivity is $1.5$ (or $1.76 \, dBi$), indicating a low level of directionality.

---

### 7. Alignment with Course Outcomes (COs)

*   **CO1: Analyze the radiation mechanism of antennas (Knowledge Level: K3)**
    *   This topic directly addresses CO1 by explaining how an infinitesimal dipole radiates electromagnetic waves, detailing the far-field patterns, intensity, and power. The derivation of fields and their dependency on parameters like current, length, and distance contributes to this analysis.
*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4)**
    *   While this topic doesn't directly cover microstrip antennas, the fundamental understanding of radiation intensity, radiation resistance, and directivity derived here are essential parameters that will be applied to microstrip antennas later in the course.
*   **CO3: Analyze and design advanced antennas (Knowledge Level: K4)**
    *   The infinitesimal dipole is the foundational element for analyzing more advanced antennas like finite dipoles, dipole arrays, and other wire antennas. Understanding its radiation mechanism is a prerequisite for analyzing and designing these more complex structures.
*   **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2)**
    *   This topic touches upon the generation of electromagnetic waves (radiation) which is the first step in radio wave propagation. Understanding the directional radiation pattern and polarization of the infinitesimal dipole contributes to the understanding of how waves are launched into space.

---
This comprehensive study note covers the infinitesimal dipole, its theoretical underpinnings, radiation characteristics, and its importance as a fundamental antenna element. It is structured to be informative for students of Antenna Theory and Design, aligning with the specified course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
