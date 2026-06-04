---
title: "Antenna theory: Radiation mechanism from an antenna"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 1: Antenna theory: Radiation mechanism from an antenna"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7c3"
status: "completed"
scrapedAt: "2026-05-23T18:11:31.159Z"
---
# ANTENNA THEORY AND DESIGN: Module 1: Antenna Theory: Radiation Mechanism from an Antenna

This module introduces the fundamental principles behind how antennas radiate electromagnetic energy. We will explore the underlying physics of radiation from oscillating charges and currents, laying the groundwork for understanding various antenna types and their performance.

---

## Learning Outcomes:

*   **LO1:** Understand the basic physical principles of electromagnetic radiation.
*   **LO2:** Explain the concept of retarded potentials and their role in antenna theory.
*   **LO3:** Define and derive the fields from simple radiating elements (e.g., electric dipole).
*   **LO4:** Differentiate between near-field and far-field radiation.
*   **LO5:** Introduce the concept of radiation intensity and directivity.

---

## Course Outcomes Alignment:

This module directly addresses **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3)** by providing the foundational understanding of how antennas radiate.

---

## Key Concepts and Definitions:

### 1. Electromagnetic Radiation: The Source of Waves

Electromagnetic radiation is the process by which energy is transmitted through space in the form of electromagnetic waves. At the heart of antenna operation lies the principle that **accelerating charges produce electromagnetic radiation.**

*   **Static Charges:** Produce electric fields but no radiation.
*   **Charges in Uniform Motion (Constant Velocity):** Produce magnetic fields but no radiation.
*   **Accelerating Charges (Oscillating Currents):** Produce both time-varying electric and magnetic fields that propagate away from the source as electromagnetic waves. This is the fundamental mechanism for antenna radiation.

**Reference:** Balanis (4th Ed.), Chapter 2: Fundamental of Radiation.

### 2. Maxwell's Equations and Radiation

Maxwell's equations, the fundamental laws of electromagnetism, govern the behavior of electric and magnetic fields. They predict the existence of electromagnetic waves that can propagate through space. Antennas are engineered structures designed to efficiently convert guided electromagnetic waves (e.g., in transmission lines) into free-space electromagnetic waves and vice-versa.

**Key Insight:** The time-varying nature of electric and magnetic fields is crucial for radiation.
$\nabla \times \mathbf{E} = -\mu \frac{\partial \mathbf{H}}{\partial t}$
$\nabla \times \mathbf{H} = \sigma \mathbf{E} + \epsilon \frac{\partial \mathbf{E}}{\partial t}$
$\nabla \cdot \mathbf{D} = \rho$
$\nabla \cdot \mathbf{B} = 0$

For radiation in free space ( $\rho=0$, $\sigma=0$):
$\nabla \times \mathbf{E} = -\mu_0 \frac{\partial \mathbf{H}}{\partial t}$
$\nabla \times \mathbf{H} = \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}$

**Reference:** Collin (2/e), Chapter 1: Electromagnetic Theory. Pozar (4/e), Chapter 1: Electromagnetics.

### 3. Retarded Potentials: Describing Radiation from Sources

To analyze the fields radiated by an antenna, we often use the concept of **retarded potentials**. These potentials account for the finite speed of light, meaning that the fields observed at a point in space are due to the source's condition at an earlier time (the "retarded time").

*   **Vector Potential ($\mathbf{A}$):** Related to the magnetic field.
*   **Scalar Potential ($\Phi$):** Related to the electric field.

The fields $\mathbf{E}$ and $\mathbf{H}$ can be expressed in terms of these potentials:
$\mathbf{H} = \frac{1}{\mu} \nabla \times \mathbf{A}$
$\mathbf{E} = -\frac{\partial \mathbf{A}}{\partial t} - \nabla \Phi$

For sources with time-harmonic variations ($e^{j\omega t}$), the wave equations for the potentials are:
$\nabla^2 \mathbf{A} - \gamma^2 \mathbf{A} = -\mu \mathbf{J}$ (where $\mathbf{J}$ is the current density)
$\nabla^2 \Phi - \gamma^2 \Phi = -\frac{\rho}{\epsilon}$ (where $\rho$ is the charge density)

The solutions to these equations involve integrals over the source distribution, incorporating the retardation effect:

$\mathbf{A}(\mathbf{r}) = \frac{\mu}{4\pi} \iiint_V \mathbf{J}(\mathbf{r}') \frac{e^{-j\beta R}}{R} dV'$
$\Phi(\mathbf{r}) = \frac{1}{4\pi\epsilon} \iiint_V \rho(\mathbf{r}') \frac{e^{-j\beta R}}{R} dV'$

where:
*   $\mathbf{r}$ is the observation point.
*   $\mathbf{r}'$ is the source point.
*   $R = |\mathbf{r} - \mathbf{r}'|$ is the distance between the observation and source points.
*   $\beta = \omega \sqrt{\mu\epsilon}$ is the phase constant (wave number).
*   $e^{-j\beta R}$ represents the retardation factor.

**Reference:** Balanis (4th Ed.), Chapter 2. Garg (2001), Chapter 2. Collin (2/e), Chapter 1.

### 4. Simple Radiating Elements: The Elementary Electric Dipole (Hertzian Dipole)

A fundamental building block for understanding antenna radiation is the **elementary electric dipole**, often referred to as a Hertzian dipole. It's an idealized, infinitesimally short conductor with a uniform oscillating current.

*   **Physical Description:** A very short segment of wire ($dl$) carrying a current $I = I_0 e^{j\omega t}$.
*   **Radiation Mechanism:** The oscillating current represents accelerating charges, which radiate electromagnetic waves.

#### Fields of an Elementary Electric Dipole:

Using the retarded potentials, the electric and magnetic fields in spherical coordinates $(r, \theta, \phi)$ for a dipole of length $dl$ oriented along the z-axis, located at the origin, carrying current $I = I_0 e^{j\omega t}$ can be derived.

**Near Field (Induction Region):** Dominated by static field-like terms, energy is stored locally.
**Far Field (Radiation Region):** Spherical wave fronts, energy propagates outwards.

**Key Fields (Far Field):**

*   **Electric Field ($\mathbf{E}$):**
    $E_{\theta} = j \frac{\eta I_0 dl}{2\pi R} \sin\theta \frac{e^{-j\beta R}}{R}$
    $E_r = 0$
    $E_{\phi} = 0$
    (Where $\eta = \sqrt{\mu/\epsilon}$ is the intrinsic impedance of the medium, $R$ is the distance from the dipole, $\theta$ is the elevation angle from the dipole axis)

*   **Magnetic Field ($\mathbf{H}$):**
    $H_{\phi} = j \frac{I_0 dl}{2\pi R} \sin\theta \frac{e^{-j\beta R}}{R}$
    $H_r = 0$
    $H_{\theta} = 0$

**Important Observations:**
*   The fields are proportional to $\sin\theta$. This means the radiation is maximum in the plane perpendicular to the dipole ($\theta = 90^\circ$) and zero along the axis of the dipole ($\theta = 0^\circ, 180^\circ$).
*   The electric and magnetic fields are perpendicular to each other and to the direction of propagation (which is radially outwards).
*   The ratio $|E_{\theta}| / |H_{\phi}| = \eta$, the intrinsic impedance.

**Reference:** Balanis (4th Ed.), Chapter 4: Radiation from Elementary Radiators. Kraus (3/e), Chapter 2: Fundamentals of Radiating Antennas.

### 5. Near-Field and Far-Field Regions

The region surrounding an antenna can be broadly classified into two regions based on the nature of the radiated fields:

*   **Reactive Near-Field Region:** Closest to the antenna. Characterized by reactive fields (capacitive and inductive). Energy is stored here and exchanged with the antenna. Fields are complex and vary rapidly with distance.
    *   **Range:** $R < 0.1 \lambda$ (approximately)
*   **Radiating Near-Field (Fresnel) Region:** Intermediate region. Radiation fields begin to dominate, but the wave fronts are still significantly curved.
    *   **Range:** $0.1 \lambda < R < 2 D^2/\lambda$ (approximately, where $D$ is the largest dimension of the antenna)
*   **Far-Field (Fraunhofer) Region:** Farthest region. Characterized by purely radiating fields. The wave fronts are essentially planar, and the angular distribution of the radiated power is constant. This is where antenna directivity and gain are typically defined.
    *   **Range:** $R > 2 D^2/\lambda$ (approximately)

**Important Point:** The boundary between near-field and far-field is not sharp and depends on the antenna's size and the wavelength. A common rule of thumb for the far-field boundary is $R > 2 D^2/\lambda$. For many practical purposes, $R \ge \lambda$ or $R \ge 2\lambda$ can be considered far-field if the antenna is small compared to the wavelength.

**Reference:** Balanis (4th Ed.), Chapter 2. Milligan (2/e), Chapter 3: Antenna Parameters. Raju GSN (1/e), Chapter 3: Parameters of Antennas.

### 6. Radiation Intensity and Directivity

*   **Power Density ($\mathbf{S}$):** The rate of energy flow per unit area. In the far-field, it's given by $\mathbf{S} = E \times H^*$.
*   **Radiation Intensity ($U$):** The power radiated per unit solid angle.
    $U(\theta, \phi) = R^2 |\mathbf{S}| = R^2 \frac{1}{2} \text{Re}(E \times H^*)$
    For the Hertzian dipole, $U(\theta) = \frac{\eta I_0^2 dl^2}{8\pi^2 R^2} \sin^2\theta$. (Note: Often the $R^2$ is dropped, and $U$ is defined as power per unit solid angle, which is independent of $R$ in the far-field).
    $U(\theta, \phi) = \frac{1}{2} r^2 \text{Re}(E_\theta H_\phi^*)$ (in spherical coordinates, for fields with radial propagation)

*   **Total Radiated Power ($P_{rad}$):** The integral of the radiation intensity over all solid angles.
    $P_{rad} = \iint_{4\pi} U(\theta, \phi) d\Omega = \int_0^{2\pi} \int_0^{\pi} U(\theta, \phi) \sin\theta d\theta d\phi$

*   **Directivity ($D$):** A measure of how focused the radiation pattern is in a particular direction. It's the ratio of the radiation intensity in the direction of maximum radiation ($U_{max}$) to the average radiation intensity over all directions.
    $D = \frac{U_{max}}{U_{avg}} = \frac{U_{max}}{P_{rad}/(4\pi)}$

    The directivity is a dimensionless quantity and is often expressed in decibels ($D_{dB} = 10 \log_{10} D$).

**For the Hertzian Dipole:**
*   Maximum Radiation Intensity ($U_{max}$): Occurs at $\theta = 90^\circ$, $U_{max} = \frac{\eta I_0^2 dl^2}{8\pi^2 R^2}$.
*   Total Radiated Power ($P_{rad}$): For a dipole of length $dl$ and resistance $R_r$, $P_{rad} = \frac{1}{2} I_0^2 R_r$, where $R_r = \frac{\eta \pi}{3} (\frac{dl}{\lambda})^2$.
*   Directivity ($D$): For a Hertzian dipole, $D = 1.5$ (or 1.76 dB).

**Reference:** Balanis (4th Ed.), Chapter 2. Raju GSN (1/e), Chapter 3. Milligan (2/e), Chapter 3.

---

## Important Points to Remember:

*   **Radiation is caused by accelerating charges.**
*   **Maxwell's equations predict electromagnetic waves.**
*   **Retarded potentials are essential for analyzing radiated fields.**
*   **The Hertzian dipole is a fundamental radiating element.**
*   **Near-field and far-field regions describe the behavior of fields at different distances.**
*   **Radiation intensity describes power per solid angle, and directivity measures the focus of radiation.**
*   **The $\sin\theta$ dependence in the Hertzian dipole's fields indicates maximum radiation broadside and nulls along the axis.**

---

## Practice Questions and Exercises:

**Question 1:**
Explain the fundamental physical principle that causes an antenna to radiate electromagnetic waves. Contrast this with static charges and charges moving at a constant velocity.

**Answer 1:**
An antenna radiates electromagnetic waves due to the presence of **accelerating charges**. When charges oscillate back and forth along a conductor (like in an antenna), they are continuously accelerating. According to electromagnetic theory, accelerating charges generate time-varying electric and magnetic fields that detach from the source and propagate outwards as electromagnetic waves.
*   **Static charges** only produce static electric fields.
*   **Charges in uniform motion (constant velocity)** produce steady electric and magnetic fields, but these fields do not propagate away from the source as waves.

**Question 2:**
What are retarded potentials, and why are they important in antenna theory?

**Answer 2:**
Retarded potentials (vector potential $\mathbf{A}$ and scalar potential $\Phi$) are mathematical constructs used to solve for the electric ($\mathbf{E}$) and magnetic ($\mathbf{H}$) fields produced by a distribution of charges and currents. They are important because they inherently account for the **finite speed of light**. This means the potentials, and consequently the fields, at a given observation point depend on the state of the source at an earlier time – the "retarded time" – when the fields were emitted. This accounts for the wave nature of the radiation.

**Question 3:**
Describe the characteristics of the electric and magnetic fields radiated by an elementary electric dipole in the far-field region. What is the relationship between the field strength and the angle relative to the dipole axis?

**Answer 3:**
In the far-field region, the elementary electric dipole radiates fields that are essentially transverse electromagnetic (TEM) waves.
*   **Electric Field ($\mathbf{E}$):** Exists only in the $\theta$ direction ($E_{\theta}$). Its magnitude is proportional to $\sin\theta$.
*   **Magnetic Field ($\mathbf{H}$):** Exists only in the $\phi$ direction ($H_{\phi}$). Its magnitude is also proportional to $\sin\theta$.
*   **Relationship to Angle:** The field strength is maximum in the plane perpendicular to the dipole axis ($\theta = 90^\circ$) and is zero along the dipole axis ($\theta = 0^\circ, 180^\circ$).
*   **Relationship between Fields:** The ratio of the magnitudes of the electric and magnetic fields is equal to the intrinsic impedance of the medium ($\eta$). $\mathbf{E}$ and $\mathbf{H}$ are perpendicular to each other and to the direction of propagation (radial direction).

**Question 4:**
Define the radiation intensity and directivity of an antenna. Calculate the directivity of a Hertzian dipole.

**Answer 4:**
*   **Radiation Intensity ($U(\theta, \phi)$):** It is defined as the power radiated per unit solid angle. It is a measure of how power is distributed in different directions from the antenna.
*   **Directivity ($D$):** It is the ratio of the radiation intensity in the direction of maximum radiation ($U_{max}$) to the average radiation intensity over all directions ($U_{avg}$).
    $D = \frac{U_{max}}{U_{avg}} = \frac{U_{max}}{P_{rad}/(4\pi)}$

    **Directivity of a Hertzian dipole:** The radiation intensity is $U(\theta) \propto \sin^2\theta$. The maximum radiation intensity occurs at $\theta = 90^\circ$. The average radiation intensity is found by integrating $U(\theta)$ over all solid angles and dividing by $4\pi$. For a Hertzian dipole, the directivity is a constant value of **1.5**.

**Question 5 (Conceptual):**
Consider a small loop antenna. Would you expect its radiation pattern to be similar to a Hertzian dipole? Briefly explain why or why not, based on the radiation mechanism.

**Answer 5:**
Yes, a small loop antenna will have a radiation pattern similar to a Hertzian dipole. A Hertzian dipole is essentially an oscillating electric current. A small loop antenna, when driven by a radio frequency current, also possesses an oscillating current circulating around it. This circulating current creates a time-varying magnetic dipole moment, which is the source of its radiation. Both are considered fundamental radiating elements producing similar spatial distribution of radiated power (maximum perpendicular to the element, nulls along its axis).

---

This module provides the foundational understanding of how antennas radiate. The concepts learned here are critical for analyzing and designing all other types of antennas.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
