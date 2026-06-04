---
title: "Gain and Directivity"
subject: "ANTENNA THEORY AND WAVE PROPAGATION"
module: "Module 2: Microstrip antennas : Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff777"
status: "completed"
scrapedAt: "2026-05-23T18:12:35.608Z"
---
# Module 2: Microstrip Antennas - Radiation Mechanism

## Topic: Gain and Directivity

### Learning Outcomes:

*   Understand the concepts of directivity and gain for antennas.
*   Relate directivity and gain to the radiation pattern of an antenna.
*   Differentiate between directivity and gain, considering antenna efficiency.
*   Calculate directivity and gain for simple antenna structures, including microstrip antennas.
*   Analyze how the physical dimensions and feeding mechanisms of microstrip antennas affect their gain and directivity.

### 1. Introduction to Radiation Mechanism of Microstrip Antennas

While this module focuses on the radiation mechanism, it's crucial to understand how these mechanisms influence fundamental antenna parameters like gain and directivity. Microstrip antennas, due to their planar structure and reliance on fringing fields, exhibit unique radiation characteristics that impact these parameters.

**Key Concepts:**

*   **Radiation:** The process by which an antenna converts guided electromagnetic energy into free-space electromagnetic waves.
*   **Fringing Fields:** The electric and magnetic fields that extend beyond the physical boundaries of the radiating elements in a microstrip antenna (e.g., the edges of the patch). These fringing fields are the primary contributors to radiation.
*   **Surface Waves:** Undesirable waves that propagate along the dielectric substrate, which can reduce radiation efficiency and affect the antenna's performance.

### 2. Radiation Pattern

The **radiation pattern** of an antenna describes how the power radiated by the antenna is distributed in space. It's a graphical representation of the field intensity as a function of direction.

**Key Concepts:**

*   **Isotropic Antenna:** A hypothetical antenna that radiates and receives energy uniformly in all directions. It has a spherical radiation pattern.
*   **Omnidirectional Antenna:** An antenna that radiates and receives energy uniformly in a particular plane (typically the horizontal plane) but can have variations in other planes.
*   **Directional Antenna:** An antenna that radiates and receives energy preferentially in one or more specific directions.
*   **Main Lobe:** The region of the radiation pattern where the radiated power is maximum.
*   **Sidelobes:** Regions of the radiation pattern where the radiated power is less than the main lobe.
*   **Nulls:** Directions in the radiation pattern where the radiated power is zero or near zero.
*   **Beamwidth:** The angular width of the main lobe, usually measured at the half-power points (3 dB beamwidth).

**Representation of Radiation Pattern:**

*   **Cartesian Coordinates:** Field strength vs. angle in a 2D plane.
*   **Polar Coordinates:** Field strength as a function of angle.
*   **Spherical Coordinates:** Representing the 3D distribution of radiated power.

**Example:** A simple dipole antenna has a donut-shaped radiation pattern with maximum radiation perpendicular to its axis and nulls along its axis.

### 3. Directivity (D)

**Definition:** Directivity is a dimensionless quantity that describes the ability of an antenna to concentrate radiated power in a particular direction. It is defined as the ratio of the radiation intensity in a given direction to the average radiation intensity in all directions.

**Formula:**

$D = \frac{U}{U_{avg}}$

Where:
*   $U$ is the radiation intensity in a specific direction (usually the direction of maximum radiation). Radiation intensity is the power radiated per unit solid angle. $U = \frac{1}{2} \text{Re}(E \times H^*) \cdot \hat{r} \cdot r^2$ (where $\hat{r}$ is the unit vector in the direction of observation).
*   $U_{avg}$ is the average radiation intensity over all directions.

**Relation to Total Radiated Power ($P_{rad}$):**

The average radiation intensity is related to the total radiated power by:

$U_{avg} = \frac{P_{rad}}{4\pi}$

Where $P_{rad}$ is the total power radiated by the antenna.

Therefore, directivity can also be expressed as:

$D = \frac{U_{max}}{\frac{P_{rad}}{4\pi}} = \frac{4\pi U_{max}}{P_{rad}}$

**Key Characteristics of Directivity:**

*   **Directional Property:** Directivity is inherently directional. It quantifies how "focused" the antenna's radiation is.
*   **Dimensionless:** It's a ratio and has no units.
*   **Maximum Value:** The maximum directivity occurs in the direction of the main lobe.
*   **Ideal Case:** For an isotropic antenna, $U = U_{avg}$, so $D_{iso} = 1$.
*   **Calculation:** Directivity is calculated by integrating the normalized radiation intensity over all solid angles.

**Calculation for Microstrip Antennas:**

Calculating directivity for microstrip antennas often involves evaluating the integral of the radiation intensity derived from the fringing fields. This can be complex and often relies on numerical methods or approximations.

**Example:** For a half-wave dipole in free space, the maximum directivity is $D_{max} = 1.5$ (or 1.76 dB).

### 4. Gain (G)

**Definition:** Gain is a measure of how effectively an antenna converts input power into radiated power in a specific direction, compared to a reference antenna (usually an isotropic antenna). Gain accounts for both the directional properties (directivity) and the losses within the antenna.

**Formula:**

$G = \eta_r \times D$

Where:
*   $\eta_r$ is the **radiation efficiency** of the antenna.
*   $D$ is the directivity of the antenna.

**Radiation Efficiency ($\eta_r$):**

Radiation efficiency is the ratio of the power radiated by the antenna ($P_{rad}$) to the net power accepted by the antenna at its terminals ($P_{in}$).

$\eta_r = \frac{P_{rad}}{P_{in}}$

The input power $P_{in}$ can be split into radiated power and dissipated power ($P_{loss}$):

$P_{in} = P_{rad} + P_{loss}$

So, $\eta_r = \frac{P_{rad}}{P_{rad} + P_{loss}}$.

**Losses in Microstrip Antennas:**

Microstrip antennas are susceptible to various losses that reduce their radiation efficiency:

*   **Conductor Losses:** Due to the finite conductivity of the radiating patch and ground plane.
*   **Dielectric Losses:** Due to the finite conductivity of the dielectric substrate.
*   **Surface Wave Losses:** Energy coupled into surface waves that propagate along the dielectric interface and do not radiate into space.
*   **Mismatch Losses:** Due to impedance mismatches at the feed point, leading to reflected power. (Often handled separately in gain calculations).

**Gain in dB:**

Gain is often expressed in decibels (dB):

$G_{dB} = 10 \log_{10}(G) = 10 \log_{10}(\eta_r \times D)$

Similarly, directivity in dB is:

$D_{dB} = 10 \log_{10}(D)$

**Relation to Antenna Efficiency:**

*   If $\eta_r = 1$ (no losses), then $G = D$.
*   If $\eta_r < 1$ (losses present), then $G < D$.

**Gain Relative to a Reference Antenna:**

Gain is often defined relative to an isotropic radiator:

$G_{iso} = \frac{\text{Power density in a given direction}}{\text{Power density from an isotropic antenna with the same input power}}$

**Example:** An antenna with $D=2$ and $\eta_r=0.5$ has a gain $G = 2 \times 0.5 = 1$.

### 5. Gain vs. Directivity for Microstrip Antennas

For microstrip antennas, especially those with thicker substrates or lower-quality dielectrics, radiation efficiency ($\eta_r$) can be significantly less than 1. This means that the **gain will be less than the directivity**.

**Key Points for Microstrip Antennas:**

*   **Surface Wave Excitation:** The microstrip configuration can readily excite surface waves, especially with thicker substrates and higher dielectric constants. These surface waves propagate along the dielectric and do not contribute to the far-field radiation, thus reducing radiation efficiency and gain.
*   **Bandwidth and Gain Trade-off:** Many techniques used to increase the bandwidth of microstrip antennas (e.g., using thicker substrates, lower dielectric constants) can also affect their gain.
*   **Feed Network Losses:** If a corporate feed network is used to create an array of microstrip patches, losses in the feed lines can further reduce the overall array gain.
*   **Substrate Thickness and Dielectric Constant:** Thicker substrates and lower dielectric constants generally lead to higher radiation efficiency and thus higher gain, but they also increase the physical size of the antenna for a given frequency.

### 6. Calculating Gain and Directivity for Microstrip Antennas

**Methods:**

*   **Analytical Solutions:** For simple configurations (e.g., a single rectangular patch with specific feed points), analytical methods can be used to derive the radiation intensity and then calculate directivity and gain by integration. These often involve:
    *   **Equivalence Principle:** Applying Huygens' principle or physical optics to the equivalent magnetic and electric currents on the radiating surface.
    *   **Modal Expansion:** Considering the dominant modes of radiation.
*   **Numerical Methods:** For more complex structures, microstrip arrays, or when accounting for substrate effects precisely, numerical methods are essential. These include:
    *   **Method of Moments (MoM):** Widely used for analyzing microstrip antennas, it directly solves integral equations for currents on the antenna structure.
    *   **Finite Element Method (FEM):** Useful for analyzing antennas embedded in complex environments.
    *   **Finite Difference Time Domain (FDTD):** A time-domain method that can simulate electromagnetic wave propagation and radiation.
*   **Approximations:** Various approximations are used to simplify calculations, such as:
    *   **Two-Radiation-Modes Theory:** For rectangular patches, the radiation is often modeled as originating from two slots formed by the fringing fields at the edges.
    *   **Slotted Line Model:** Treating the radiating edges as radiating slots.

**Common Factors Affecting Gain/Directivity:**

*   **Patch Dimensions (Length and Width):** Determine the resonant frequency and the beamwidth.
*   **Substrate Thickness (h):** Affects fringing field extent, radiation efficiency, and bandwidth. Thicker substrates generally lead to wider beamwidths and potentially higher directivity (for a given aperture size) but also increase surface wave losses.
*   **Substrate Dielectric Constant ($\epsilon_r$):** Affects the effective permittivity, resonant frequency, and surface wave propagation. Lower $\epsilon_r$ generally leads to lower surface wave losses and higher radiation efficiency.
*   **Feed Point Location:** Influences the excitation of different modes and the polarization.
*   **Ground Plane Size:** A finite ground plane can affect the radiation pattern, side lobes, and efficiency.
*   **Slit/Notches/Parasitic Elements:** Used to enhance bandwidth or achieve dual-band/multi-band operation, these can also influence the gain and directivity.

**Example Calculation (Conceptual - Two-Radiation-Modes Theory for Rectangular Patch):**

For a rectangular microstrip patch radiating primarily from the edges of length 'L' and width 'W', the radiation can be approximated as two slots of length 'L' and width 'W' separated by a distance 'W' (or 'L'). The total radiated power and the radiation intensity in different directions can be calculated based on the field distribution across these slots. Integrating these intensities allows for the calculation of directivity and gain.

*Balanis (4th Ed.)* provides detailed derivations using aperture integration and equivalence principle for various antenna structures, including patch antennas.

*Garg (Microstrip Antenna Design Handbook)* offers extensive analysis and design methodologies specifically for microstrip antennas, including discussions on efficiency and gain calculation.

### 7. Important Points to Remember

*   **Directivity is an intrinsic property** related to the shape of the radiation pattern, while **Gain includes the effect of antenna losses**.
*   For practical antennas, **Gain is always less than or equal to Directivity**.
*   Microstrip antennas are prone to **surface wave excitation and dielectric/conductor losses**, which reduce their radiation efficiency and thus their gain compared to their directivity.
*   **Substrate thickness and dielectric constant are critical parameters** affecting the gain and directivity of microstrip antennas.
*   **Trade-offs often exist** between bandwidth, gain, and efficiency in microstrip antenna design.
*   **Numerical simulation tools** are often necessary for accurate gain and directivity calculations of complex microstrip antenna configurations.

### 8. Practice Questions and Exercises

**Question 1:**
What is the fundamental difference between antenna directivity and antenna gain? (CO1, K2)

**Answer:**
Directivity is a measure of how well an antenna concentrates its radiated power in a specific direction relative to an isotropic radiator, considering only the directional properties of the radiation pattern. Gain, on the other hand, accounts for both the directivity and the antenna's efficiency (i.e., losses within the antenna). Therefore, gain is always less than or equal to directivity.

**Question 2:**
An antenna has a maximum directivity of 10 (or 10 dB). If its radiation efficiency is 80%, what is its gain in dB? (CO1, K3)

**Answer:**
Directivity $D = 10$
Radiation Efficiency $\eta_r = 0.80$
Gain $G = \eta_r \times D = 0.80 \times 10 = 8$
Gain in dB $G_{dB} = 10 \log_{10}(8) \approx 9.03 \text{ dB}$

**Question 3:**
List three types of losses that can reduce the gain of a microstrip antenna compared to its directivity. (CO1, K2)

**Answer:**
Three types of losses are:
1.  Conductor Losses
2.  Dielectric Losses
3.  Surface Wave Losses
4.  Mismatch Losses (though often accounted for separately)

**Question 4:**
How would increasing the substrate thickness affect the directivity and gain of a microstrip patch antenna, assuming surface wave losses do not dominate? (CO1, K3)

**Answer:**
Increasing the substrate thickness generally increases the aperture size over which the fringing fields are significant. This can lead to a narrower beamwidth in the plane perpendicular to the radiating edges, potentially increasing the directivity. However, it also increases the propensity for surface wave excitation and dielectric losses, which would decrease the radiation efficiency and thus the gain. If surface wave losses are not dominant, the directivity might increase, but the gain could either increase or decrease depending on the relative impact of efficiency reduction.

**Question 5:**
An antenna has a total radiated power of 10 W and an input power of 15 W. If its maximum radiation intensity is $0.5 \text{ W/steradian}$, calculate its directivity and gain. (CO1, K3)

**Answer:**
Total radiated power ($P_{rad}$) = 10 W
Input power ($P_{in}$) = 15 W
Maximum radiation intensity ($U_{max}$) = $0.5 \text{ W/steradian}$

Radiation Efficiency ($\eta_r$):
$\eta_r = \frac{P_{rad}}{P_{in}} = \frac{10}{15} = \frac{2}{3} \approx 0.667$

Average radiation intensity ($U_{avg}$):
$U_{avg} = \frac{P_{rad}}{4\pi} = \frac{10}{4\pi} \text{ W/steradian}$

Directivity ($D$):
$D = \frac{U_{max}}{U_{avg}} = \frac{0.5}{\frac{10}{4\pi}} = \frac{0.5 \times 4\pi}{10} = \frac{2\pi}{10} = \frac{\pi}{5} \approx 0.628$

Gain ($G$):
$G = \eta_r \times D = \frac{2}{3} \times \frac{\pi}{5} = \frac{2\pi}{15} \approx 0.419$

*Note: This example shows a scenario where directivity and gain are less than 1, indicating a very inefficient and poorly directive antenna.*

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 9. References

*   **Antenna Theory: Analysis and Design, by Constantine A. Balanis (Wiley, 4th Edition, 2016):** Chapters 2 (Parameters of Directional Antennas), 12 (Microstrip Antennas).
*   **Microstrip Antenna Design Handbook by Ramesh Garg (Artech, 1/e, 2001):** Chapters 3 (Basic Theory of Microstrip Antennas), 4 (Parameters of Microstrip Antennas).
*   **Antennas and radio Wave propagation by R.E.Collin (McGraw Hill, 2/e, 2001):** Chapters 1 (Basic Concepts), 7 (Planar Antennas).
*   **Microwave Engineering by David M. Pozar (Wiley India, 4/e, 2012):** Chapter 13 (Antennas).

This module's focus on gain and directivity is fundamental for evaluating the performance of microstrip antennas (CO1) and is a critical step towards designing and measuring their parameters (CO2) and analyzing advanced antenna designs (CO3).