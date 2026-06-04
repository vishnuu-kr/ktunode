---
title: "Circular Polarisation"
subject: "ANTENNA THEORY AND WAVE PROPAGATION"
module: "Module 2: Microstrip antennas : Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff772"
status: "completed"
scrapedAt: "2026-05-23T18:12:31.527Z"
---
# ANTENNA THEORY AND WAVE PROPAGATION

## Module 2: Microstrip Antennas - Radiation Mechanism

### Topic: Circular Polarisation

---

### 1. Learning Outcomes

Upon completion of this topic, you will be able to:

*   Understand the fundamental principles of circular polarization (CP).
*   Explain how circular polarization is generated in microstrip antennas.
*   Analyze the axial ratio (AR) and its significance for CP antennas.
*   Identify and discuss various techniques for achieving circular polarization in microstrip antennas.
*   Evaluate the advantages and disadvantages of circularly polarized microstrip antennas.
*   Relate the concept of circular polarization to the radiation mechanism of microstrip antennas.

---

### 2. Key Concepts and Definitions

#### 2.1. Polarization of Electromagnetic Waves

*   **Definition:** Polarization refers to the orientation of the electric field vector of an electromagnetic wave as it propagates through space.
*   **Linear Polarization (LP):** The electric field vector oscillates along a straight line.
*   **Circular Polarization (CP):** The electric field vector rotates in a circle at a constant rate, maintaining a constant magnitude. The vector traces out a helix as the wave propagates.
    *   **Right-Hand Circularly Polarized (RHCP):** The electric field vector rotates clockwise when viewed in the direction of propagation.
    *   **Left-Hand Circularly Polarized (LHCP):** The electric field vector rotates counter-clockwise when viewed in the direction of propagation.
*   **Elliptical Polarization (EP):** A general case where the electric field vector traces out an ellipse. Linear and circular polarization are special cases of elliptical polarization.

#### 2.2. Circular Polarization Generation

*   **Requirement:** To generate CP, two orthogonal field components (typically the electric field components along the x and y directions) with equal amplitude and a 90-degree phase difference are required.

    $E_x(t) = E_0 \cos(\omega t)$
    $E_y(t) = E_0 \cos(\omega t - 90^\circ) = E_0 \sin(\omega t)$

    The resultant electric field vector $E = E_x \hat{a}_x + E_y \hat{a}_y$ will trace a circle.

*   **Axial Ratio (AR):**
    *   **Definition:** The axial ratio is the ratio of the major axis to the minor axis of the ellipse traced by the electric field vector. For perfect CP, the major and minor axes are equal, resulting in an AR of 1 (or 0 dB).
    *   **Significance:** A low AR (close to 1 or 0 dB) indicates good circular polarization. As the AR increases, the polarization becomes more elliptical.

#### 2.3. Radiation Mechanism in Microstrip Antennas for CP

Microstrip antennas, due to their planar structure and excitation methods, can be designed to radiate circularly polarized waves. The key is to excite orthogonal modes with the correct amplitude and phase relationship.

---

### 3. Techniques for Achieving Circular Polarization in Microstrip Antennas

The following techniques are commonly employed to achieve CP in microstrip antennas:

#### 3.1. Truncated Corners (Challenging for perfect CP)

*   **Concept:** A square patch with diagonally truncated corners can support CP.
*   **Mechanism:** Truncating the corners creates asymmetries that excite orthogonal modes. However, achieving a precise 90-degree phase difference and equal amplitudes over a wide bandwidth is difficult with this method.
*   **Reference:** Balanis (4th Ed.) discusses various patch geometries, including modifications for CP.

#### 3.2. Notched Ground Plane or Patch Edges

*   **Concept:** Introducing slots or notches on the ground plane or along the edges of the radiating patch can break the symmetry and generate CP.
*   **Mechanism:** The notches act as parasitic elements or introduce discontinuities that modify the current distribution on the patch, leading to orthogonal components with a phase difference.
*   **Example:** A simple way is to notch the ground plane beneath the feed point.

#### 3.3. Perturbation Techniques

*   **Concept:** Introducing small perturbations in the patch geometry or substrate properties can be used to achieve CP.
*   **Examples:**
    *   **Protrusions:** Adding small metallic protrusions on the radiating edges of the patch.
    *   **Slotting:** Cutting slots in the patch.
*   **Mechanism:** These perturbations alter the resonant frequencies of orthogonal modes, allowing for a 90-degree phase shift between them.

#### 3.4. Different Feed Locations and Excitation

*   **Concept:** Exciting the patch at points that naturally excite orthogonal modes with a phase difference is a common approach.
*   **Techniques:**
    *   **Offset or Dual Feeding:** Using two feed points, typically offset from the center, and feeding them with signals that are 90 degrees out of phase. This is a widely used and effective method.
        *   **Mechanism:** By strategically placing the feeds, one can excite two orthogonal modes with approximately equal amplitudes and a 90-degree phase difference. The phase difference is achieved by feeding one line with a quarter-wavelength transmission line or a phase shifter.
        *   **Reference:** Pozar (4th Ed.) covers various feeding techniques for microstrip antennas, including dual feeds for CP.
    *   **Single Feed with Coupling Slot:** Exciting the patch with a single feed through a coupling slot on the ground plane, where the slot's geometry and placement are designed to induce CP.
    *   **Single Feed with Probe Placement:** Placing the feed probe off-center, but not on the radiating edges, can also excite orthogonal modes.

#### 3.5. Employing Degenerate Modes (e.g., Circularly Polarized Patch)

*   **Concept:** Designing a patch that intrinsically supports degenerate orthogonal modes at its resonant frequency.
*   **Examples:**
    *   **Circularly Shaped Patch:** A circular patch naturally supports degenerate orthogonal modes, but it requires specific excitation to achieve CP.
    *   **Square Patch with Quarter-Wave Resonator:** Feeding a square patch at a location that excites the TM11 mode, and using a perturbation (like a slit) to introduce the 90-degree phase shift.

#### 3.6. Using Defected Ground Structures (DGS)

*   **Concept:** Incorporating specific patterns (slots, holes, etc.) in the ground plane beneath the microstrip patch.
*   **Mechanism:** DGSs can modify the effective permittivity and permeability experienced by the fields, leading to phase shifts and amplitude adjustments that facilitate CP.
*   **Reference:** Singh, Abegaonkar, Koul (2nd Ed.) on Metamaterials for Antenna Applications might discuss how engineered ground structures can influence polarization.

#### 3.7. Using Metamaterials

*   **Concept:** Employing metamaterials in the antenna structure to control electromagnetic wave polarization.
*   **Mechanism:** Metamaterials can offer unusual electromagnetic properties, such as negative permittivity or permeability, which can be engineered to create the required phase shifts and amplitude matching for CP.
*   **Reference:** Singh, Abegaonkar, Koul (2nd Ed.) is highly relevant here, discussing metamaterial applications in antennas. Choudhury (2nd Ed.) on Reconfigurable antennas might also touch upon how dynamic control over polarization can be achieved using metamaterial-inspired structures.

---

### 4. Advantages of Circularly Polarized Microstrip Antennas

*   **Polarization Matching:** Reduces polarization mismatch losses when communicating with another circularly polarized antenna (e.g., satellite communication). This is a significant advantage as it eliminates the 3 dB polarization loss that occurs when two linearly polarized antennas are misaligned by 90 degrees.
*   **Reduced Multipath Interference:** CP waves tend to be less affected by Faraday rotation (in ionosphere) and can mitigate multipath effects in certain environments.
*   **Immunity to Orientation:** For applications where the orientation of the transmitting and receiving antennas is not fixed, CP offers an advantage as it is not sensitive to relative rotation between antennas.
*   **Less Susceptible to Rain Depolarization:** While rain can still affect CP, the degradation is often less severe compared to LP in certain frequency bands.

---

### 5. Disadvantages of Circularly Polarized Microstrip Antennas

*   **Design Complexity:** Achieving good CP (low AR) over a desired bandwidth can be more complex than designing for linear polarization, often requiring careful feed network design or intricate patch geometries.
*   **Bandwidth Limitations:** Many techniques for achieving CP, especially those based on resonant structures, can lead to narrower operational bandwidths.
*   **Increased Fabrication Tolerances:** Small variations in manufacturing can significantly impact the AR, requiring tighter tolerances.
*   **Feed Network Complexity:** Dual-feed techniques require more complex feed networks (e.g., power dividers with phase control), which can introduce insertion losses.

---

### 6. Radiation Mechanism for CP in Microstrip Antennas (Detailed)

The radiation from a microstrip patch antenna arises from the surface currents flowing on the patch and the discontinuity in the surface current at the edges of the patch. For CP, we need to excite two orthogonal modes of the patch such that their electric field components at the radiating aperture have equal amplitudes and a 90-degree phase difference.

Consider a square microstrip patch. It can support two orthogonal dominant modes, typically referred to as $TM_{10}$ and $TM_{01}$ (or $TM_{10y}$ and $TM_{10x}$ in some notations), which are degenerate at the fundamental resonance frequency in an ideal scenario.

**Ideal Square Patch:**
In an ideal square patch, these two modes are degenerate, meaning they resonate at the same frequency. However, due to the symmetry, if you feed it along the x-axis (e.g., with a probe at $(x_f, 0)$), you primarily excite the mode that has electric field components along the x-axis, and similarly for feeding along the y-axis. This leads to linear polarization.

**Achieving CP through Mode Excitation:**

To achieve CP, we need to excite both orthogonal modes with the correct phase and amplitude relationship.

*   **Dual Feed Method:**
    *   Two feed points are placed at locations that excite both orthogonal modes. For a square patch, feeding at $(x_f, y_f)$ and $(x_f, -y_f)$ or $(x_f, y_f)$ and $(-x_f, y_f)$ can excite orthogonal modes.
    *   The feeds are driven by RF signals that are 90 degrees out of phase (e.g., feeding one port directly and the other through a $\lambda/4$ transmission line or a quadrature hybrid coupler).
    *   **Amplitude:** The feed positions are chosen such that the excitation amplitudes of the two modes are approximately equal. This typically involves placing the feeds at points that are equidistant from the center along axes that are 45 degrees from the patch's symmetry axes, or using specific feed points on the radiating edges.
    *   **Phase:** A 90-degree phase shift is deliberately introduced between the two feed signals.

*   **Single Feed Method (with Perturbations):**
    *   **Truncated Corners:** The diagonal truncation of a square patch introduces asymmetry, which couples energy into the orthogonal mode. The degree of truncation needs to be optimized to achieve near-equal amplitudes and a 90-degree phase difference.
    *   **Slits/Notches:** Introducing a slit along one of the axes (e.g., from the center to the edge) or on the radiating edges can create asymmetry and modify the current distribution. A slit positioned at a 45-degree angle to the feed line can achieve CP. For instance, a square patch with a slit running from the center to the middle of one edge, fed by a probe close to the center, can generate CP. The slit effectively breaks the symmetry and introduces the necessary phase difference.

**Mathematical Representation (Simplified):**

Consider the radiating electric field as a superposition of two orthogonal components:
$E_{total}(t) = E_x(t) \hat{a}_x + E_y(t) \hat{a}_y$

For perfect CP:
$E_x(t) = E_0 \cos(\omega t)$
$E_y(t) = E_0 \sin(\omega t)$

This results in a field vector with constant magnitude $E_0$ rotating at frequency $\omega$.

The Axial Ratio (AR) is given by:
$AR = \frac{|E_{max}|}{|E_{min}|} = \frac{E_0 (1 + \sqrt{1 - \sin(2\delta)})}{E_0 (1 - \sqrt{1 - \sin(2\delta)})}$  (for unequal amplitudes $E_x = E_{0x}\cos(\omega t)$, $E_y = E_{0y}\sin(\omega t-\delta)$)

For CP, $E_{0x} = E_{0y} = E_0$ and $\delta = 90^\circ$.
$E_x(t) = E_0 \cos(\omega t)$
$E_y(t) = E_0 \sin(\omega t)$
The magnitude of the electric field is $E(t) = \sqrt{E_x^2(t) + E_y^2(t)} = \sqrt{E_0^2 \cos^2(\omega t) + E_0^2 \sin^2(\omega t)} = E_0$.
The direction of the electric field vector can be represented by an angle $\phi = \arctan(E_y/E_x) = \arctan(\sin(\omega t)/\cos(\omega t)) = \omega t$. This angle changes linearly with time, indicating rotation.

The axial ratio is defined as the ratio of the semi-major axis to the semi-minor axis of the polarization ellipse. For perfect CP, this ratio is 1 (0 dB).

---

### 7. Course Outcomes Alignment

*   **CO1: Analyze the radiation mechanism of antennas (Knowledge Level: K3)**
    *   This topic directly addresses how circular polarization is achieved by understanding the generation of orthogonal field components with specific amplitude and phase relationships, which is a core part of antenna radiation mechanisms.

*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4)**
    *   Understanding CP is crucial for designing microstrip antennas for applications requiring it. Knowledge of techniques like dual feeding and perturbation methods is necessary for design. Measuring AR and understanding its significance are key to verifying the performance of a CP microstrip antenna.

*   **CO3: Analyze and design advanced antennas (Knowledge Level: K4)**
    *   Circularly polarized antennas are a class of advanced antennas. Techniques like using metamaterials or complex feeding schemes fall under advanced antenna design.

*   **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2)**
    *   While this topic primarily focuses on the antenna, understanding polarization is fundamental to wave propagation. CP antennas are designed with specific propagation characteristics in mind (e.g., reduced Faraday rotation effects, polarization diversity).

---

### 8. Important Points to Remember

*   **CP requires equal amplitude and 90-degree phase difference between orthogonal field components.**
*   **Axial Ratio (AR) is the key metric for CP quality.** An AR of 1 (0 dB) signifies perfect CP.
*   **Common techniques for CP in microstrip antennas include:**
    *   Dual feeding with a 90-degree phase shift.
    *   Perturbing the patch geometry (e.g., corner truncation, slits).
    *   Using specific feed probe locations.
    *   Employing defected ground structures or metamaterials.
*   **CP antennas reduce polarization mismatch losses** when communicating with other CP antennas.
*   **Design complexity and bandwidth are common challenges** when achieving CP.
*   **RHCP vs. LHCP depends on the direction of rotation of the electric field vector.**

---

### 9. Practice Questions and Exercises

**Question 1:**
What are the two fundamental conditions required for an electromagnetic wave to be circularly polarized?
**(CO1)**

**Answer 1:**
The two fundamental conditions are:
1.  The two orthogonal electric field components must have equal amplitudes.
2.  The two orthogonal electric field components must have a 90-degree phase difference.

**Question 2:**
Define the Axial Ratio (AR) and explain its significance for a circularly polarized antenna. What value of AR indicates perfect circular polarization?
**(CO1, CO2)**

**Answer 2:**
The Axial Ratio (AR) is defined as the ratio of the major axis to the minor axis of the ellipse traced by the electric field vector of an electromagnetic wave. For a circularly polarized antenna, a low AR indicates good circular polarization. Perfect circular polarization is achieved when the AR is 1 (or 0 dB).

**Question 3:**
Describe one common technique used to achieve circular polarization in a square microstrip patch antenna using a single feed. Explain the principle behind this technique.
**(CO2, CO3)**

**Answer 3:**
One common technique is to introduce a perturbation, such as a slit, on the patch. For example, a square patch can have a slit cut from the center towards the middle of one of its radiating edges. This slit breaks the symmetry of the patch. When fed by a probe located near the center, this perturbation can excite two orthogonal modes with unequal resonant frequencies. By carefully choosing the slit's dimensions and position, one can achieve equal excitation amplitudes and a 90-degree phase difference between the field components radiated by these modes at a specific frequency, thus generating circular polarization.

**Question 4:**
A microstrip antenna is designed to radiate circularly polarized waves. What is the advantage of using such an antenna for satellite communication compared to a linearly polarized antenna, assuming the satellite antenna is also circularly polarized?
**(CO1, CO4)**

**Answer 4:**
The primary advantage is the reduction of polarization mismatch losses. If both the ground station antenna and the satellite antenna are circularly polarized in the same sense (e.g., both RHCP), there will be minimal polarization loss regardless of their relative orientation. In contrast, if linearly polarized antennas are used and their orientation is not perfectly aligned, significant polarization losses (up to 3 dB for 90-degree misalignment) can occur. CP antennas are also less affected by Faraday rotation in the ionosphere.

**Question 5:**
Explain how dual feeding with a quadrature hybrid coupler can be used to generate circularly polarized waves from a microstrip patch antenna.
**(CO2, CO3)**

**Answer 5:**
To generate circular polarization using dual feeding, the microstrip patch antenna is fed at two points. These feed points are strategically located on the patch (e.g., offset from the center along axes that are 45 degrees to the patch's symmetry axes) to excite two orthogonal modes with approximately equal amplitudes. A quadrature hybrid coupler (e.g., a branch-line coupler or a rat-race coupler) is used to split the input signal into two outputs that are 90 degrees out of phase. These two out-of-phase signals are then fed to the two feed points on the patch. The combination of equal amplitude excitation and the 90-degree phase difference between the feed signals results in the radiation of circularly polarized waves from the antenna.

---
This concludes the study notes for Circular Polarization in Microstrip Antennas. Remember to consult the provided textbooks for further details and derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
