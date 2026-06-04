---
title: "Helical antenna: Design equations, modes"
subject: "MICROWAVES & ANTENNAS"
module: "Module 4: Antenna arrays : Field of two isotropic point sources, Principle of pattern multiplication, Array factor, Linear arrays of ‘n’ isotropic point sources with equal amplitude, Grating lobes, Design of Broadside and End fire arrays, Phased array principle, Adaptive antenna array principle."
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fedb4"
status: "completed"
scrapedAt: "2026-05-23T18:01:46.002Z"
---
# MICROWAVES & ANTENNAS

## Module 4: Antenna Arrays

### Topic: Helical Antenna: Design Equations and Modes

---

**Course Outcomes Addressed:**

*   **CO3:** Illustrate the basic concepts of antenna radiation antenna parameters and their measurement techniques (Knowledge Level: K2).
    *   This topic contributes by explaining the radiation characteristics and design parameters of a helical antenna.
*   **CO4:** Design important broadband antennas and arrays (Knowledge Level: K3).
    *   This topic directly addresses the design aspects and operational modes of a helical antenna, which is known for its broadband capabilities.

**Learning Outcomes Covered:**

*   Understand the structure and working principle of a helical antenna.
*   Derive and understand the key design equations for helical antennas.
*   Identify and differentiate between the various operational modes of a helical antenna.

---

### 1. Introduction to Helical Antennas

A helical antenna is a type of antenna that consists of a helical or spiral conductor. It is a versatile antenna that can operate in different modes, exhibiting characteristics such as circular polarization and broadband performance.

**Key Features:**

*   **Structure:** Typically consists of a single wire wound in the shape of a helix, supported by a dielectric rod or structure, and often operating in conjunction with a ground plane or a reflecting cavity.
*   **Polarization:** Naturally produces circularly polarized waves, which is advantageous in reducing polarization mismatch losses, especially in satellite communication and radar systems.
*   **Bandwidth:** Can be designed to operate as a broadband antenna, with axial mode operation offering relatively wide bandwidth.

**Reference:**

*   **Antennas for all Applications, by John D. Krauss, Marhefka, Khan:** Chapter 14 "Helical Antennas" provides a comprehensive overview of their history, structure, and operational principles.
*   **Antennas and Wave Propagation by G S N Raju:** Chapter 8 "Helix Antenna" details its construction and theoretical aspects.

---

### 2. Helical Antenna: Structure and Parameters

A typical axial-mode helical antenna consists of:

*   **Helical Conductor:** A wire of length $L$ wound into a helix with $n$ turns.
*   **Ground Plane/Reflector:** A circular conductive disk at the base of the helix to reflect radiation forward.
*   **Feed Point:** Located at the base of the helix, usually connected to a coaxial cable.

**Key Geometrical Parameters:**

*   **Circumference of the Helix ($C$):**
    $C = \pi D$
    where $D$ is the diameter of the helix.

*   **Pitch Angle ($\alpha$):** The angle between the axis of the helix and the tangent to the helix.
    $\tan \alpha = \frac{S}{\pi D}$
    where $S$ is the axial spacing between adjacent turns.

*   **Axial Spacing ($S$):** The distance between the centers of adjacent turns along the axis of the helix.

*   **Number of Turns ($n$):** The total number of full turns in the helix.

*   **Length of the Helix ($L$):**
    $L = n \times \text{length of one turn}$
    The length of one turn is approximately $\sqrt{(\pi D)^2 + S^2}$.
    Thus, $L \approx n \sqrt{(\pi D)^2 + S^2}$.

---

### 3. Modes of Operation

Helical antennas can operate in different modes, characterized by their radiation patterns and frequencies. The primary modes of interest are the **normal mode** and the **axial mode**.

#### 3.1. Normal Mode Operation

*   **Frequency Range:** Operates at frequencies where the circumference of the helix is much smaller than a wavelength ($\pi D \ll \lambda$).
*   **Radiation Pattern:** Similar to a small dipole or loop antenna. The radiation is omnidirectional in the plane perpendicular to the helix axis.
*   **Polarization:** Primarily linearly polarized, with some degree of circular polarization depending on the helix parameters.
*   **Antenna Type:** Often used as a circularly polarized omnidirectional antenna.
*   **Design:** The helix impedance is close to that of a short dipole.

**Design Considerations for Normal Mode:**

*   The helix circumference should be significantly less than a wavelength.
*   The helix length can be varied to achieve desired radiation characteristics.

#### 3.2. Axial Mode Operation

*   **Frequency Range:** Operates when the circumference of the helix is approximately equal to one wavelength ($\pi D \approx \lambda$).
*   **Radiation Pattern:** Highly directional, with the main lobe directed along the axis of the helix (broadside).
*   **Polarization:** Produces circularly polarized waves.
*   **Antenna Type:** Primarily used as a broadband, circularly polarized directional antenna.
*   **Design:** The helix parameters (diameter, spacing, number of turns) are critical for achieving the desired axial mode radiation.

**Conditions for Axial Mode Operation:**

For broadside radiation (maximum radiation along the axis), the following conditions are generally met:

1.  **Circumference:** $\pi D \approx \lambda$
2.  **Pitch Angle:** $\alpha \approx 12^\circ - 15^\circ$ (often $12^\circ$ to $14^\circ$ for optimal axial mode operation). This means $S \approx \frac{\pi D}{10}$ to $\frac{\pi D}{7}$.

**Explanation of Axial Mode:**

In axial mode, the radiation from each turn adds constructively along the helix axis. The phase difference between adjacent turns, when viewed along the axis, is such that the fields reinforce each other.

---

### 4. Design Equations for Axial Mode Helical Antennas

The design of an axial mode helical antenna for broadside radiation relies on specific relationships between its geometric parameters and the desired operating wavelength.

**1. Wavelength for Maximum Radiation:**

The wavelength ($\lambda_{max}$) at which maximum radiation occurs along the axis is approximately given by:

$\lambda_{max} \approx C (1 \pm \frac{S}{\pi D})$

where the sign depends on the direction of propagation along the helix. For axial mode broadside radiation (forward direction):

$\lambda_{max} \approx \frac{C}{n_{eff}}$

where $n_{eff}$ is an effective number of turns, which is usually slightly less than the actual number of turns due to end effects. A commonly used approximation for the design wavelength is:

$\lambda_0 \approx \sqrt{C^2 + S^2}$

This implies that the radiation along the axis is in phase with the radiation from the feed point. A more precise relationship for the axial mode, considering the pitch angle, is:

$\lambda_0 = \frac{C}{\cos \alpha}$

Since for axial mode, $C \approx \lambda$, this means $\lambda_0 \approx \lambda$. If we use the condition $\pi D \approx \lambda$ and $\tan \alpha = S/(\pi D)$, then:

$\lambda_0 = \frac{\pi D}{\cos \alpha}$

Substituting $\tan \alpha = S/(\pi D)$:
$\cos \alpha = \frac{1}{\sqrt{1 + \tan^2 \alpha}} = \frac{1}{\sqrt{1 + (S/\pi D)^2}} = \frac{\pi D}{\sqrt{(\pi D)^2 + S^2}}$

So, $\lambda_0 = \frac{\pi D}{\frac{\pi D}{\sqrt{(\pi D)^2 + S^2}}} = \sqrt{(\pi D)^2 + S^2}$

This confirms the relationship $\lambda_0 \approx \sqrt{C^2 + S^2}$.

**Important Design Rule of Thumb:**

*   **Circumference:** $\pi D \approx \lambda_0$ (This provides the directional broadside radiation).
*   **Pitch Angle:** $\alpha \approx 12^\circ - 14^\circ$ (This ensures constructive interference along the axis).
    *   This translates to $S \approx (\frac{1}{10} \text{ to } \frac{1}{7}) \pi D$. A common choice is $S \approx \frac{\pi D}{10}$ or $S \approx \frac{\lambda_0}{10}$.

**2. Gain and Beamwidth:**

*   **Gain:** The gain of an axial mode helix is approximately proportional to the number of turns ($n$) and the circumference.
    $G_{dB} \approx 10 \log_{10} (n) + 20 \log_{10} (\frac{\pi D}{\lambda_0}) + 3$
    A simpler approximation for broadside helix is:
    $G_{dB} \approx 5 + 10 \log_{10} (n)$
    where $n$ is the number of turns. The gain is roughly $10 \log_{10} n$ dB.

*   **Beamwidth:** The half-power beamwidth (HPBW) of an axial mode helix is approximately:
    $HPBW \approx \frac{52}{\frac{C}{\lambda_0} \sqrt{n}}$ degrees.
    For the axial mode where $\frac{C}{\lambda_0} \approx 1$,
    $HPBW \approx \frac{52}{\sqrt{n}}$ degrees.

**3. Bandwidth:**

The axial mode helix exhibits a relatively wide bandwidth. The bandwidth is generally defined as the range of frequencies over which the axial ratio (a measure of circular polarization purity) is below a certain value (e.g., 3 dB or 1.5:1).

*   **Criteria:** The bandwidth is often limited by the axial ratio and the impedance matching.
*   **General Bandwidth:** The bandwidth can be in the order of 1.5:1 or more, depending on the number of turns and the design parameters. For a helix with many turns, the bandwidth tends to increase.

**4. Impedance:**

*   The characteristic impedance of an axial mode helix is approximately **100-150 Ohms**.
*   To match this to standard 50 Ohm or 75 Ohm coaxial cables, a matching section (e.g., a quarter-wave transformer or a tapered section) is often required.

**5. Axial Ratio:**

The axial ratio is a measure of how closely the polarization approaches perfect circular polarization. For an ideal axial mode helix, the axial ratio is ideally 1 (or 0 dB).

*   **Dependence:** The axial ratio is sensitive to the pitch angle ($\alpha$) and the ratio $C/\lambda$.
*   **Optimum Axial Ratio:** Achieved when $\pi D \approx \lambda$ and $\alpha \approx 12.5^\circ$.

**Reference:**

*   **Antennas by Kraus:** Section 9.4 details the design equations for axial mode helix.
*   **Antennas and Wave Propagation by G S N Raju:** Section 8.4 provides design equations and considerations.

---

### 5. Practice Questions and Answers

**Question 1:** A helical antenna is designed for axial mode operation at a frequency of 1 GHz. If the helix diameter is 10 cm, what is the approximate axial spacing required for broadside radiation?

**Answer:**
For axial mode, we need $\pi D \approx \lambda$.
First, calculate the wavelength:
$\lambda = \frac{c}{f} = \frac{3 \times 10^8 \text{ m/s}}{1 \times 10^9 \text{ Hz}} = 0.3 \text{ m} = 30 \text{ cm}$.

The required circumference for broadside radiation is approximately equal to the wavelength:
$C \approx \lambda = 30 \text{ cm}$.

We are given $D = 10 \text{ cm}$, so $C = \pi D = \pi \times 10 \text{ cm} \approx 31.4 \text{ cm}$. This is close to the required $\lambda$, so the diameter choice is appropriate.

For optimal axial mode operation, the pitch angle $\alpha$ is around $12^\circ - 14^\circ$. The relationship between spacing ($S$) and diameter ($D$) is given by $\tan \alpha = S / (\pi D)$.
Using $\alpha = 12.5^\circ$ (mid-point of the range):
$\tan(12.5^\circ) \approx 0.2217$.

$S \approx \tan(12.5^\circ) \times (\pi D)$
$S \approx 0.2217 \times 31.4 \text{ cm}$
$S \approx 6.96 \text{ cm}$.

Alternatively, using the rule of thumb $S \approx \frac{\lambda}{10}$:
$S \approx \frac{30 \text{ cm}}{10} = 3 \text{ cm}$.

Let's check the relationship $\lambda_0 \approx \sqrt{(\pi D)^2 + S^2}$.
If $S = 3 \text{ cm}$ and $\pi D = 31.4 \text{ cm}$:
$\sqrt{(31.4)^2 + 3^2} = \sqrt{985.96 + 9} = \sqrt{994.96} \approx 31.54 \text{ cm}$. This is close to 30 cm.

If $S = 6.96 \text{ cm}$ and $\pi D = 31.4 \text{ cm}$:
$\sqrt{(31.4)^2 + (6.96)^2} = \sqrt{985.96 + 48.44} = \sqrt{1034.4} \approx 32.16 \text{ cm}$. This is also reasonable.

The condition $S \approx \frac{\pi D}{10}$ to $\frac{\pi D}{7}$ for $\alpha \approx 12^\circ - 15^\circ$:
If $\pi D = 31.4 \text{ cm}$, then $\frac{\pi D}{10} \approx 3.14 \text{ cm}$ and $\frac{\pi D}{7} \approx 4.48 \text{ cm}$.

The commonly accepted range for optimal axial mode is $S \approx \frac{\lambda_0}{10}$. So $S \approx 3 \text{ cm}$ is a good estimate.

**Answer:** The approximate axial spacing required is around **3 cm**.

---

**Question 2:** A helical antenna with 10 turns and a circumference of 30 cm operating at its axial mode frequency. What is the approximate gain in dB?

**Answer:**
For an axial mode helix, the gain is approximately given by $G_{dB} \approx 5 + 10 \log_{10} (n)$.
Here, $n = 10$ turns.

$G_{dB} \approx 5 + 10 \log_{10} (10)$
$G_{dB} \approx 5 + 10 \times 1$
$G_{dB} \approx 15 \text{ dB}$.

**Answer:** The approximate gain is **15 dB**.

---

**Question 3:** What is the primary characteristic that makes a helical antenna suitable for applications requiring circular polarization?

**Answer:**
The inherent structure of the helix and the phase progression of the radiated wave naturally produce **circularly polarized (CP) electromagnetic waves**. This reduces polarization mismatch losses when communicating with another circularly polarized antenna (e.g., in satellite communications).

**Answer:** The primary characteristic is its ability to produce **circularly polarized (CP) waves**.

---

### 6. Important Points to Remember

*   **Modes:** Helical antennas operate in two main modes: **Normal Mode** (circumference $C \ll \lambda$) and **Axial Mode** (circumference $C \approx \lambda$).
*   **Axial Mode Characteristics:**
    *   Directional radiation along the helix axis.
    *   Circular polarization.
    *   Achieved when $\pi D \approx \lambda$ and pitch angle $\alpha \approx 12^\circ - 15^\circ$.
*   **Design Rule of Thumb for Axial Mode:**
    *   $\pi D \approx \lambda$
    *   $S \approx \frac{\pi D}{10}$ (or $S \approx \frac{\lambda}{10}$)
*   **Gain:** The gain in axial mode is roughly proportional to the number of turns ($n$), $G_{dB} \approx 5 + 10 \log_{10} (n)$.
*   **Impedance:** The characteristic impedance of an axial mode helix is typically around 100-150 Ohms.
*   **Bandwidth:** Axial mode helical antennas offer good broadband performance.
*   **Applications:** Satellite communications, radio astronomy, radar, and telemetry systems where circular polarization is beneficial.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 7. Further Reading and Reference Materials

*   **Antennas for all Applications, by John D. Krauss, Marhefka, Khan (4th Edition):** Chapter 14 provides an in-depth discussion on helical antennas, their modes, and design considerations. This is a foundational text for helical antenna design.
*   **Antennas and Wave Propagation by G S N Raju (3rd Edition):** Chapter 8 covers the helical antenna, including its design equations, modes of operation, and radiation characteristics.
*   **Microwave Engineering, by Annapurna Das and Sisir K Das (4th Edition):** While focusing on microwave circuits, it may touch upon antenna fundamentals including helical antennas as part of a broader microwave system.
*   **Microwave Devices & Circuits, by Samuel Y Liao (3rd Edition):** Similar to Das & Das, this book provides a comprehensive microwave engineering perspective, which might include antenna applications.
*   **Electromagnetic Waves and Radiating Systems by Jordan and Balmain:** Offers theoretical background on radiation phenomena that underlies antenna principles, including helical antennas.

---
This concludes the study notes on Helical Antennas. The information provided covers the core concepts, design equations, and modes of operation as per the module's learning objectives and course outcomes.