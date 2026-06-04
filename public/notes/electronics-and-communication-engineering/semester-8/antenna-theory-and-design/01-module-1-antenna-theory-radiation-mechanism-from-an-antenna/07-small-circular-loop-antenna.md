---
title: "Small circular loop antenna"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 1: Antenna theory: Radiation mechanism from an antenna"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7c9"
status: "completed"
scrapedAt: "2026-05-23T18:11:36.228Z"
---
# ANTENNA THEORY AND DESIGN

## Module 1: Antenna Theory: Radiation Mechanism from an Antenna

## Topic: Small Circular Loop Antenna

---

### 1. Introduction to Small Circular Loop Antennas

A circular loop antenna is a fundamental antenna configuration consisting of a closed loop of conductive material, typically forming a circle. When driven with an alternating current, this loop radiates electromagnetic waves. A "small" circular loop antenna refers to a loop where the circumference is significantly smaller than the wavelength of the operating frequency ($C \ll \lambda$). This small size simplifies the analysis and reveals key radiation characteristics.

**Key Concepts:**

*   **Loop Antenna:** A closed conductive path designed to radiate or receive electromagnetic waves.
*   **Small Loop:** A loop antenna whose physical dimensions (e.g., circumference, diameter) are much smaller than the operating wavelength. Typically, the circumference is less than $\lambda/3$ or the diameter is less than $\lambda/\pi$.
*   **Radiation Mechanism:** The process by which an antenna converts electrical energy into electromagnetic waves.

**Reference:** Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.). Wiley. (Chapter on Loop Antennas)

---

### 2. Radiation Mechanism of a Small Circular Loop Antenna

The radiation from a small circular loop antenna can be understood by considering the oscillating current flowing around the loop.

**Key Concepts & Definitions:**

*   **Current Distribution:** In a small loop, the current is assumed to be uniformly distributed around the loop, although a more rigorous analysis considers the spatial variation. For a small loop, the current can be approximated as being in phase around the entire loop or having a small phase difference.
*   **Electric Dipole Analogy:** A small loop antenna's radiation characteristics can be closely approximated by those of a magnetic dipole.
*   **Magnetic Dipole:** A current loop, essentially creating a magnetic dipole moment proportional to the area enclosed by the loop and the current flowing through it.

**Radiation Process:**

1.  **Current Flow:** When an alternating voltage is applied, current flows around the loop.
2.  **Magnetic Field Generation:** This circulating current generates a magnetic field that oscillates in time. The magnetic field lines are concentrated inside the loop and spread out in the surrounding space.
3.  **Electric Field Generation:** According to Maxwell's equations, a time-varying magnetic field induces a time-varying electric field. This induced electric field is what propagates as an electromagnetic wave.
4.  **Radiation Pattern:** The oscillating magnetic dipole moment of the loop results in a characteristic radiation pattern.

**Derivation (Conceptual):**

For a small loop of radius $a$, carrying a current $I$, the magnetic dipole moment is given by $\mathbf{m} = I A \hat{\mathbf{n}} = I (\pi a^2) \hat{\mathbf{n}}$, where $\hat{\mathbf{n}}$ is the unit vector normal to the loop. The radiated fields can be derived from this magnetic dipole moment.

**Reference:** Collin, R. E. (2001). *Antennas and Radio Wave Propagation* (2nd ed.). McGraw Hill. (Chapter on Loop Antennas)
**Reference:** Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.). Wiley. (Chapter on Loop Antennas)

---

### 3. Antenna Parameters of a Small Circular Loop Antenna

This section details the fundamental parameters used to characterize the performance of a small circular loop antenna.

**Key Concepts & Definitions:**

*   **Radiation Resistance ($R_r$):** The equivalent resistance that would dissipate the same amount of power as radiated by the antenna, when the same current flows through it. For a small circular loop of radius $a$ and circumference $C = 2\pi a$, carrying a current $I$:
    $$R_r \approx \frac{\eta_0}{2\pi} \left(\frac{C}{\lambda}\right)^4 \approx 20 \pi^2 \left(\frac{A}{\lambda^2}\right)^2 = 20 \pi^2 \left(\frac{\pi a^2}{\lambda^2}\right)^2 = 20 \pi^6 \left(\frac{a}{\lambda}\right)^6 \text{ Ohms}$$
    Where:
    *   $\eta_0 \approx 377 \Omega$ (intrinsic impedance of free space)
    *   $C$ is the circumference of the loop
    *   $\lambda$ is the wavelength
    *   $a$ is the radius of the loop
    *   $A = \pi a^2$ is the area of the loop

*   **Radiation Efficiency ($\eta_0$):** The ratio of power radiated to the total power accepted by the antenna. It is affected by losses in the antenna conductor and the surrounding medium.
    $$\eta_0 = \frac{R_r}{R_r + R_L}$$
    Where $R_L$ is the loss resistance due to conductor and dielectric losses.

*   **Directivity (D):** A measure of how well an antenna concentrates power in a particular direction compared to an isotropic radiator. For a small circular loop, the maximum directivity is 1.5 (or 1.76 dB).
    $$D = \frac{4\pi}{\Omega_A}$$
    Where $\Omega_A$ is the solid angle over which the power is radiated.

*   **Gain (G):** The product of directivity and radiation efficiency.
    $$G = \eta_0 D$$

*   **Bandwidth:** The range of frequencies over which the antenna's performance characteristics (e.g., VSWR, radiation pattern, efficiency) are acceptable. Small loop antennas generally have narrow bandwidths due to their resonant nature.

*   **Polarization:** The orientation of the electric field vector of the radiated wave. A small circular loop typically radiates linearly polarized waves, with the polarization direction depending on the orientation of the loop and the feed point.

**Important Point:** The radiation resistance of a small loop is proportional to the sixth power of the ratio of its circumference to the wavelength $(C/\lambda)^6$. This implies that for very small loops, the radiation resistance is extremely low, making them inefficient radiators unless they are close to resonance.

**Reference:** Balanis, C. C. (2016). *Antenna Theory: Analysis and Design* (4th ed.). Wiley. (Chapter on Loop Antennas)
**Reference:** Milligan, T. A. (2005). *Modern Antenna Design* (2nd ed.). IEEE PRESS, Wiley Interscience. (Chapter on Loop Antennas)

---

### 4. Radiation Pattern of a Small Circular Loop Antenna

The radiation pattern describes the spatial distribution of radiated power from an antenna.

**Key Concepts:**

*   **Far-Field Approximation:** The region far from the antenna where the electromagnetic fields can be approximated as plane waves.
*   **Isotropic Radiator:** A hypothetical antenna that radiates power uniformly in all directions.
*   **Magnetic Dipole Radiation Pattern:** The pattern generated by a magnetic dipole.

**Radiation Pattern Characteristics:**

*   **Zenith Nulls:** The radiation intensity is zero along the axis perpendicular to the plane of the loop (along the magnetic dipole axis).
*   **Equatorial Maxima:** The radiation intensity is maximum in the plane of the loop (the equatorial plane).
*   **Shape:** The pattern is toroidal (doughnut-shaped), with the nulls along the axis of the torus.

**Mathematical Description (Far-Field Components):**

For a small loop of radius $a$ lying in the $xy$-plane, centered at the origin, and carrying a uniform current $I_0 \cos(\omega t)$:

*   **Electric Field ($E_\theta$):**
    $$E_\theta \approx j \frac{I_0 \eta_0 k}{4\pi r} (\pi a^2) \sin\theta e^{-jkr} \quad \text{for } \theta \neq 0, \pi$$
    $$E_\theta \approx j \frac{I_0 \eta_0 C}{4\pi r} \sin\theta e^{-jkr}$$
    Where:
    *   $k = 2\pi/\lambda$ is the wavenumber
    *   $r$ is the distance from the antenna
    *   $\theta$ is the elevation angle (from the z-axis)
    *   $\eta_0$ is the intrinsic impedance of free space
    *   $C = 2\pi a$ is the circumference

*   **Magnetic Field ($H_\phi$):**
    $$H_\phi \approx j \frac{I_0 k}{4\pi r} (\pi a^2) \sin\theta e^{-jkr} \quad \text{for } \theta \neq 0, \pi$$
    $$H_\phi \approx j \frac{I_0 C}{4\pi r} \sin\theta e^{-jkr}$$

**Pattern Shape:** The $\sin\theta$ term dictates the radiation pattern.
*   When $\theta = 0$ or $\theta = \pi$ (along the z-axis), $\sin\theta = 0$, resulting in nulls.
*   When $\theta = \pi/2$ (in the xy-plane), $\sin\theta = 1$, resulting in maximum radiation.

**Reference:** Raju, G. S. N. (2009). *Antenna and Wave Propagation* (1st ed.). Pearson. (Chapter on Loop Antennas)
**Reference:** Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.). Wiley. (Chapter on Loop Antennas)

---

### 5. Input Impedance of a Small Circular Loop Antenna

The input impedance of an antenna determines how easily power can be transferred from the transmission line to the antenna.

**Key Concepts & Definitions:**

*   **Input Impedance ($Z_{in}$):** The ratio of the voltage to the current at the antenna's terminals. It consists of a resistive part (radiation resistance and loss resistance) and a reactive part (inductance or capacitance).
*   **Series Approximation:** For a small loop, the impedance is often analyzed using a series equivalent circuit.

**Analysis:**

For a small loop of radius $a$ in the $xy$-plane, fed at a point, the input impedance can be approximated. The loop exhibits inductive reactance due to the circulating current.

*   **Reactance (X):** For a loop with circumference $C \ll \lambda$, the reactance is primarily inductive.
    $$X_L = \omega L = 2\pi f L$$
    The inductance ($L$) of a small circular loop of radius $a$ is approximately:
    $$L \approx \mu_0 a \left( \ln\left(\frac{8a}{b}\right) - 2 \right) \quad \text{Henries}$$
    Where:
    *   $\mu_0$ is the permeability of free space
    *   $a$ is the radius of the loop
    *   $b$ is the radius of the wire (conductor radius)

*   **Input Impedance ($Z_{in}$):**
    $$Z_{in} = R_{in} + j X_{in}$$
    Where $R_{in} = R_r + R_L$.

**Resonance:** A loop antenna is resonant when its inductive reactance is canceled by a capacitive reactance. For a small loop, this is typically achieved by adding external capacitance across the loop, or by considering the self-capacitance of the loop itself, especially for larger loops or higher frequencies. However, for a *small* loop, it primarily acts as an inductor.

**Near Resonance:** To achieve efficient radiation, small loops are often made slightly larger, or tuned to be close to resonance.

**Reference:** Garg, R. (2001). *Microstrip Antenna Design Handbook*. Artech. (While this book focuses on microstrip antennas, the fundamental principles of impedance matching and antenna parameters discussed are applicable.)
**Reference:** Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.). Wiley. (Chapter on Loop Antennas)

---

### 6. Applications of Small Circular Loop Antennas

Small circular loop antennas, despite their low radiation resistance and narrow bandwidth, have several specialized applications.

**Key Applications:**

*   **Radio Direction Finding (RDF):** Loop antennas are used to determine the direction of arrival of radio waves. By rotating a loop antenna and observing the signal strength, the nulls in the radiation pattern can be used to pinpoint the direction of the transmitter.
*   **Inductive Coupling and Wireless Power Transfer:** Small loops are excellent for near-field communication and inductive coupling due to their strong magnetic field component in the near field. This is utilized in wireless charging, RFID systems, and some medical implants.
*   **RFID Tags:** Simple loop antennas are commonly used in passive RFID tags.
*   **Reception of LF/VLF Signals:** Used for receiving very low frequency (VLF) signals due to their good reception characteristics for these frequencies.
*   **Magnetic Field Sensing:** Can be used as sensors for detecting magnetic fields.

**Reference:** Kraus, J. D. (2002). *Antennas for All Applications* (3rd ed.). Tata McGraw Hill. (Chapter on Loop Antennas)
**Reference:** Singh, A. K., Abegaonkar, M. P., & Koul, S. K. (2021). *Metamaterials for Antenna Applications* (2nd ed.). CRC Press. (While this book focuses on metamaterials, the underlying antenna principles are relevant for understanding the limitations and enhancements of basic antennas like loops.)

---

### 7. Comparison with Other Antennas (Briefly)

*   **Vs. Small Electric Dipole:**
    *   **Radiation Pattern:** Similar toroidal pattern for both (magnetic dipole vs. electric dipole).
    *   **Polarization:** Small loop radiates linearly polarized waves, with polarization perpendicular to the loop plane. A small electric dipole radiates linearly polarized waves along its axis.
    *   **Radiation Resistance:** The radiation resistance of a small loop is significantly lower than that of a small electric dipole for the same operating frequency and physical size.
    *   **Input Impedance:** A small loop is inductive, while a small dipole is capacitive near resonance.

**Reference:** Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.). Wiley. (Chapter comparing different antenna types)

---

### 8. Design Considerations for Small Circular Loop Antennas

Practical design involves balancing performance, size, and cost.

**Key Design Points:**

*   **Frequency of Operation:** Determines the required size of the loop relative to the wavelength.
*   **Conductor Size:** The thickness of the wire affects the inductance and loss resistance. Thicker wires reduce resistance but can slightly alter the inductance.
*   **Matching Network:** To achieve efficient power transfer to the antenna, especially due to its low radiation resistance, impedance matching networks (e.g., using capacitors or transformers) are often required.
*   **Loop Shape and Feed Point:** While circular loops are analyzed here, square or other loop shapes can be used, exhibiting similar characteristics. The feed point location affects the impedance but not the far-field pattern significantly for small loops.

**Reference:** Milligan, T. A. (2005). *Modern Antenna Design* (2nd ed.). IEEE PRESS, Wiley Interscience. (Chapters on matching networks and general antenna design principles)

---

### 9. Summary of Key Properties of Small Circular Loop Antennas

*   **Radiation Pattern:** Toroidal, nulls along the axis perpendicular to the loop plane, maximum radiation in the plane of the loop.
*   **Polarization:** Linear.
*   **Radiation Resistance:** Very low, proportional to $(a/\lambda)^6$.
*   **Bandwidth:** Narrow.
*   **Input Impedance:** Primarily inductive.
*   **Directivity:** 1.5.
*   **Applications:** Direction finding, inductive coupling, RFID.

---

### Practice Questions and Exercises

**Question 1 (CO1, K3):** Describe the radiation mechanism of a small circular loop antenna. What is the dominant electromagnetic field component radiated and how does it vary with direction?

**Answer:** The radiation mechanism of a small circular loop antenna is analogous to that of a magnetic dipole. The oscillating current circulating in the loop generates a time-varying magnetic field. This changing magnetic field, in turn, induces a time-varying electric field, which propagates as an electromagnetic wave. The dominant radiated field components in the far-field are the transverse electric ($E_\theta$) and transverse magnetic ($H_\phi$) fields. The radiation intensity varies with the sine of the elevation angle ($\theta$) from the loop's axis, peaking in the plane of the loop ($\theta = 90^\circ$) and reaching nulls along the axis perpendicular to the loop ($\theta = 0^\circ, 180^\circ$).

**Question 2 (CO1, K3):** For a small circular loop antenna with radius $a$ operating at a wavelength $\lambda$, derive or state the expression for its radiation resistance. What is the key implication of this expression for the efficiency of very small loops?

**Answer:** The radiation resistance ($R_r$) of a small circular loop antenna is given by:
$R_r \approx 20 \pi^2 \left(\frac{A}{\lambda^2}\right)^2 = 20 \pi^6 \left(\frac{a}{\lambda}\right)^6$ Ohms, where $A = \pi a^2$.
The key implication is that $R_r$ is proportional to the sixth power of the ratio of its radius to the wavelength ($a/\lambda$). For very small loops (where $a \ll \lambda$), this ratio is very small, resulting in an extremely low radiation resistance. This low radiation resistance makes the antenna inefficient unless it is properly matched or brought close to resonance, as most of the input power will be dissipated as heat due to conductor losses ($R_L$) if $R_L > R_r$.

**Question 3 (CO1, K3):** Sketch the radiation pattern of a small circular loop antenna in both the H-plane (azimuthal plane containing the loop) and the E-plane (plane containing the loop's axis of symmetry).

**Answer:**
*   **H-plane (or Equatorial Plane):** This is the plane containing the loop (e.g., $xy$-plane for a loop in the $xy$-plane). The radiation intensity is maximum in this plane. The pattern is a circle with its maximum at $\theta = 90^\circ$.
*   **E-plane (or Meridional Plane):** This is a plane passing through the axis of the loop (e.g., $xz$-plane or $yz$-plane). The radiation intensity is zero along the axis ($\theta = 0^\circ, 180^\circ$) and maximum at $\theta = 90^\circ$. The pattern is a figure-eight shape, with nulls along the axis.

**(Self-sketch required here, showing a torus for 3D pattern, and figure-eight and circle for E/H plane cuts.)**

**Question 4 (CO1, K3):** What is the approximate maximum directivity of a small circular loop antenna?

**Answer:** The approximate maximum directivity of a small circular loop antenna is 1.5.

**Question 5 (CO1, K3):** List two practical applications of small circular loop antennas.

**Answer:**
1.  Radio Direction Finding (RDF)
2.  Inductive coupling for wireless power transfer or near-field communication (e.g., RFID).

---

### Important Points to Remember

*   **Small Loop = Magnetic Dipole:** The radiation characteristics are closely approximated by a magnetic dipole.
*   **Radiation Resistance:** Extremely low for very small loops, scaling as $(a/\lambda)^6$. This is the primary limitation for efficiency.
*   **Pattern:** Toroidal shape, with nulls along the axis perpendicular to the loop.
*   **Bandwidth:** Narrow, making them suitable for fixed-frequency applications or when driven by resonant circuits.
*   **Input Impedance:** Predominantly inductive.
*   **Applications:** Leveraged for direction finding and near-field coupling due to their magnetic field properties.

---
This concludes the study notes for the Small Circular Loop Antenna. These notes cover the radiation mechanism, key parameters, pattern, impedance, applications, and design considerations, aligning with the learning outcomes and course outcomes specified.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
