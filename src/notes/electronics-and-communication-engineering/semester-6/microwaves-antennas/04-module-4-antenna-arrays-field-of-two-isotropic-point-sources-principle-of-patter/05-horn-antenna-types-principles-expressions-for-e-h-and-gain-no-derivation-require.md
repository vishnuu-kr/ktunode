---
title: "Horn antenna- Types, principles, expressions for E, H and gain (no derivation required)"
subject: "MICROWAVES & ANTENNAS"
module: "Module 4: Antenna arrays : Field of two isotropic point sources, Principle of pattern multiplication, Array factor, Linear arrays of ‘n’ isotropic point sources with equal amplitude, Grating lobes, Design of Broadside and End fire arrays, Phased array principle, Adaptive antenna array principle."
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fedb6"
status: "completed"
scrapedAt: "2026-05-23T18:01:47.580Z"
---
# MICROWAVES & ANTENNAS: Module 4 - Antenna Arrays (Part 2: Horn Antennas)

## Topic: Horn Antennas

### 1. Introduction to Horn Antennas

Horn antennas are widely used microwave antennas. They act as a transition between a waveguide and free space, efficiently radiating electromagnetic waves. They are essentially flared waveguides.

**Key Concept:** Horn antennas are directive antennas that provide high gain and a well-defined radiation pattern. They are a type of aperture antenna.

**Reference:**
*   **Krauss, Marhefka, Khan - Antennas for all Applications:** Chapter on Horn Antennas.
*   **Sanjay Kumar Saurabh Shukla - Concepts & Applications of Microwave Engineering:** Chapter on Horn Antennas.

**Course Outcome Alignment:**
*   **CO3:** Illustrate the basic concepts of antenna radiation antenna parameters and their measurement techniques. (Understanding the structure and function of horn antennas relates to antenna radiation.)
*   **CO4:** Design important broadband antennas and arrays. (Horn antennas are often used in conjunction with arrays and are considered for broadband applications.)

### 2. Principles of Operation

The fundamental principle of a horn antenna is to *gradually flare out* a waveguide. This gradual change in cross-sectional area allows the electromagnetic waves propagating in the waveguide to expand into free space with minimal reflection. The flare achieves this by:

*   **Impedance Matching:** The waveguide has a certain characteristic impedance, and free space has its own impedance. The flare acts as a continuous impedance transformer, reducing the mismatch and hence reflections at the aperture.
*   **Radiation from the Aperture:** The open end of the flared waveguide (the aperture) acts as a radiating surface. The electric and magnetic fields at the aperture surface radiate into space.
*   **Phase Correction:** For efficient radiation, the phase of the wavefront across the aperture should be as uniform as possible. Horns are designed to approximate a planar wavefront at their aperture, often achieving a nearly planar phase front.

**Reference:**
*   **Annapurna Das and Sisir K Das - Microwave Engineering:** Discusses impedance matching and wave propagation in waveguides, which is foundational to horn antenna operation.
*   **G S N Raju - Antennas and Wave Propagation:** Explains the principles of radiation from apertures.

### 3. Types of Horn Antennas

Horn antennas are classified based on the shape of their waveguide and the flare. The common types are:

#### 3.1. Pyramidal Horns

*   **Description:** The flare extends in both the E-plane (electric field plane) and H-plane (magnetic field plane) in straight lines, forming a pyramidal shape.
*   **Subtypes:**
    *   **Two-Plane Pyramidal Horn:** Flares in both the E and H planes.
    *   **Sectoral Horns:** Flares only in one plane (E-plane or H-plane).
        *   **E-Plane Sectoral Horn:** Flares in the E-plane, maintaining a constant width in the H-plane.
        *   **H-Plane Sectoral Horn:** Flares in the H-plane, maintaining a constant width in the E-plane.
*   **Radiation Pattern:** Generally provides moderate gain and a relatively symmetric beam. E-plane sectoral horns have a wider beam in the E-plane compared to the H-plane. H-plane sectoral horns have a narrower beam in the H-plane compared to the E-plane.

**Example:** Pyramidal horns are commonly used as feeds for parabolic reflectors in satellite communication and radar systems.

#### 3.2. Conical Horns

*   **Description:** The flare extends radially from a circular waveguide, forming a cone.
*   **Subtypes:**
    *   **Standard Conical Horn:** Simple conical flare.
    *   **Corrugated Horn:** Has corrugations along the inner surface of the horn. This significantly improves the radiation pattern by providing a more symmetric beam and reducing sidelobes.
    *   **Scalar Horn:** A more general term for horns designed to have a consistent beamwidth over a wide range of frequencies.
*   **Radiation Pattern:** Similar to pyramidal horns, but generally more symmetric due to the circular symmetry. Corrugated horns offer superior pattern characteristics.

**Example:** Conical horns are often used in applications requiring a circular aperture and a symmetric beam, such as microwave links and measurement antennas.

#### 3.3. Other Types (Brief Mention)

*   **LCM (Log-Conical Microwave) Horn:** Designed for broadband operation.
*   **Hybrid Modes Horns (e.g., Dielectric Loaded Horns):** Employ dielectric materials to modify propagation and achieve specific radiation characteristics.

**Reference:**
*   **John D. Krauss - Antennas for all Applications:** Provides detailed descriptions and diagrams of various horn types.
*   **R L Yadava - Antennas and Wave Propagation:** Covers the classification and characteristics of horn antennas.

### 4. Expressions for Electric (E) and Magnetic (H) Fields at the Aperture (No Derivation)

The exact expressions for the fields at the aperture of a horn antenna are complex and depend on the specific type of horn and the mode of propagation within the waveguide. However, we can provide the general forms and key characteristics.

The fields at the aperture of a horn antenna are typically derived from the waveguide modes. For a standard rectangular waveguide excited in the dominant TE$_{10}$ mode, the aperture fields are approximately the waveguide fields projected onto the aperture plane.

#### 4.1. Pyramidal Horn (Assuming TE$_{10}$ mode in the input waveguide)

Let the aperture be in the $z=0$ plane.

*   **Electric Field (E):** Primarily has a component in the $y$-direction (E-plane direction).
    $$ \mathbf{E}(x, y, 0) \approx E_0 \cos\left(\frac{\pi x}{a}\right) \hat{\mathbf{y}} $$
    where:
    *   $E_0$ is the maximum amplitude of the electric field.
    *   $a$ is the width of the horn aperture in the $x$-direction (H-plane direction).
    *   The field is assumed to be constant in the $y$-direction across the aperture width $b$ (E-plane direction).

*   **Magnetic Field (H):** Primarily has a component in the $x$-direction (H-plane direction).
    $$ \mathbf{H}(x, y, 0) \approx -Y_0 E_0 \cos\left(\frac{\pi x}{a}\right) \hat{\mathbf{x}} $$
    where:
    *   $Y_0$ is the intrinsic admittance of free space.

**Important Note:** These are simplified expressions representing the dominant mode's distribution. Real horns have more complex fields due to the flaring.

#### 4.2. Conical Horn (Assuming TE$_{11}$ mode in a circular waveguide)

For a conical horn, it's often easier to work in cylindrical coordinates $(r, \phi, z)$. The fields at the aperture (z=0) will have radial and azimuthal components.

*   **Electric Field (E):** Typically has both radial and azimuthal components.
    $$ \mathbf{E}(r, \phi, 0) \approx E_{\phi}(r, \phi) \hat{\mathbf{\phi}} + E_r(r, \phi) \hat{\mathbf{r}} $$
    The exact form depends on the mode. For the dominant TE$_{11}$ mode in a circular waveguide transitioning to a cone, the aperture field is often approximated as a combination of Bessel functions.

*   **Magnetic Field (H):** Similarly, will have axial and azimuthal components.
    $$ \mathbf{H}(r, \phi, 0) \approx H_z(r, \phi) \hat{\mathbf{z}} + H_{\phi}(r, \phi) \hat{\mathbf{\phi}} $$

**Reference:**
*   **Annapurna Das and Sisir K Das - Microwave Engineering:** Discusses field distributions in waveguides and their transition to antennas.
*   **Jordan and Balmain - Electromagnetic Waves and Radiating Systems:** Provides a rigorous treatment of fields in waveguides and aperture radiation.

### 5. Gain of a Horn Antenna (No Derivation)

The gain of a horn antenna is a crucial parameter indicating its ability to focus power in a particular direction. It is related to the effective aperture area and the radiation efficiency.

**General Expression for Gain:**

The gain $G$ of an antenna is generally given by:
$$ G = \frac{4\pi A_e}{\lambda^2} \eta_r $$
where:
*   $A_e$ is the **effective aperture area**.
*   $\lambda$ is the wavelength.
*   $\eta_r$ is the **radiation efficiency**.

**For Horn Antennas:**

The gain of a horn antenna can be approximated based on its aperture dimensions and the efficiency of the horn.

*   **Pyramidal Horn:**
    $$ G \approx \frac{4\pi}{\Omega_A} \eta_r $$
    where $\Omega_A$ is the solid angle subtended by the radiation beam at the aperture. A simpler approximation relates gain to aperture area.
    For a pyramidal horn with aperture dimensions $a \times b$, the gain is approximately:
    $$ G \approx \frac{4 \pi ab}{\lambda^2} \times \eta_{aperture} $$
    where $\eta_{aperture}$ is the aperture efficiency, which accounts for field distribution and phase errors across the aperture. Typical values for $\eta_{aperture}$ are around 0.5 to 0.8.

*   **Conical Horn:**
    For a conical horn with aperture diameter $D$, the gain can be approximated as:
    $$ G \approx \frac{\pi D^2}{\lambda^2} \times \eta_{aperture} $$
    Again, $\eta_{aperture}$ accounts for the efficiency of the aperture illumination.

**Typical Gain Values:** Horn antennas can provide gains ranging from 10 dB to 25 dB, depending on their size, type, and frequency of operation.

**Important Factors Affecting Gain:**

*   **Aperture Dimensions:** Larger aperture dimensions relative to the wavelength lead to higher gain.
*   **Flare Angle:** The flare angle influences the beamwidth and the field distribution at the aperture.
*   **Efficiency:** Aperture efficiency ($\eta_{aperture}$) and radiation efficiency ($\eta_{r}$) determine how well the antenna converts input power to radiated power and how effectively the aperture is utilized.
*   **Corrugations/Dielectric Loading:** Can improve aperture efficiency and thus gain.

**Reference:**
*   **G S N Raju - Antennas and Wave Propagation:** Chapter on Antenna Parameters, including Gain and Effective Aperture.
*   **John D. Krauss - Antennas for all Applications:** Discusses gain calculations for various antenna types, including horns.
*   **R S Rao - Microwave Engineering:** Might contain formulas or discussions on horn antenna gain.

### 6. Practice Questions and Answers

**Question 1:** What is the primary function of the flare in a horn antenna?
**(a) To increase the bandwidth of operation.**
**(b) To act as an impedance transformer between the waveguide and free space.**
**(c) To focus the radiation into a very narrow beam.**
**(d) To reduce the physical size of the antenna.**

**Answer 1:** (b) To act as an impedance transformer between the waveguide and free space.

**Question 2:** Which type of horn antenna provides a more symmetric radiation pattern and is often used for high-performance applications?
**(a) E-plane sectoral horn**
**(b) H-plane sectoral horn**
**(c) Pyramidal horn**
**(d) Corrugated conical horn**

**Answer 2:** (d) Corrugated conical horn

**Question 3:** For a pyramidal horn with aperture dimensions $a \times b$, which parameter directly influences the beamwidth in the H-plane (direction of width 'a')?
**(a) Aperture width 'b'**
**(b) Aperture width 'a'**
**(c) Wavelength $\lambda$**
**(d) Flare angle in the E-plane**

**Answer 3:** (b) Aperture width 'a' (The beamwidth is inversely related to the aperture dimension.)

**Question 4:** True or False: The gain of a horn antenna is directly proportional to the square of its aperture area.

**Answer 4:** True. (As seen in the approximate formulas: $G \propto ab$ for pyramidal and $G \propto D^2$ for conical, which are related to aperture area).

**Question 5:** Name two types of horn antennas and briefly describe their characteristic flare shape.

**Answer 5:**
1.  **Pyramidal Horn:** Flares in straight lines in both the E and H planes, forming a pyramidal shape.
2.  **Conical Horn:** Flares radially from a circular waveguide, forming a cone.

### 7. Important Points to Remember

*   **Horn antennas are aperture antennas used as transitions from waveguides to free space.**
*   **The primary purpose of the flare is impedance matching and efficient radiation.**
*   **Key types include pyramidal horns (two-plane, sectoral) and conical horns (standard, corrugated).**
*   **Corrugated horns offer superior radiation patterns (symmetric beam, low sidelobes).**
*   **Gain is influenced by aperture size, flare angle, and efficiency.**
*   **Horn antennas are directional and provide moderate to high gain.**
*   **Commonly used as feeds for reflectors, in radar, and microwave communication systems.**

### 8. Connection to Module 4: Antenna Arrays

While this topic focuses on a single horn antenna, horn antennas are frequently used as **elements in antenna arrays** or as **feeds for array elements (like parabolic dishes)**. Understanding the characteristics of individual horn antennas (gain, radiation pattern, polarization) is crucial for designing and analyzing array performance. For instance, the beamwidth of a horn antenna dictates how it illuminates a parabolic reflector, affecting the overall system's directivity and sidelobe levels.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
