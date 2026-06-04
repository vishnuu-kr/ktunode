---
title: "Current Polarization"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 2: Microstrip antennas: Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7e7"
status: "completed"
scrapedAt: "2026-05-23T18:12:00.716Z"
---
# ANTENNA THEORY AND DESIGN
## Module 2: Microstrip Antennas: Radiation Mechanism
### Topic: Current Polarization

---

### 1. Introduction to Polarization in Microstrip Antennas

Polarization refers to the orientation of the electric field vector of the radiated electromagnetic wave as it propagates through space. For microstrip antennas, the polarization is directly determined by the distribution and nature of the surface currents flowing on the radiating patch. Understanding current polarization is crucial for matching the antenna's polarization to that of the transmitting or receiving antenna, thereby maximizing signal transfer and minimizing polarization loss.

**Key Concepts:**

*   **Electric Field Vector:** The direction in which the electric field oscillates.
*   **Polarization Loss:** Reduction in signal strength due to a mismatch between the polarization of the transmitting and receiving antennas.
*   **Surface Currents:** Electric currents flowing on the conductive surfaces of the microstrip antenna.

**References:**

*   **Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.).** Chapter 10 discusses polarization and its measurement.
*   **Garg, R. (2001). *Microstrip Antenna Design Handbook*.** Chapter 4 delves into the radiation mechanism and polarization of microstrip antennas.
*   **Pozar, D. M. (2012). *Microwave Engineering* (4th ed.).** Chapter 6 provides insights into the fundamental principles of radiating structures, including polarization.

---

### 2. Types of Polarization

The polarization of a radiated wave can be classified based on the behavior of the electric field vector in the plane perpendicular to the direction of propagation.

**Key Concepts:**

*   **Linear Polarization (LP):** The electric field vector oscillates along a straight line.
    *   **Horizontal Polarization (HP):** The electric field is parallel to the Earth's surface.
    *   **Vertical Polarization (VP):** The electric field is perpendicular to the Earth's surface.
*   **Circular Polarization (CP):** The electric field vector rotates with constant magnitude, tracing out a circle.
    *   **Right-Hand Circular Polarization (RHCP):** The electric field vector rotates in a clockwise direction when viewed by the observer in the direction of propagation.
    *   **Left-Hand Circular Polarization (LHCP):** The electric field vector rotates in a counter-clockwise direction when viewed by the observer in the direction of propagation.
*   **Elliptical Polarization (EP):** The electric field vector rotates and its magnitude varies, tracing out an ellipse. This is the most general case, with linear and circular polarization being special cases.

**References:**

*   **Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.).** Chapter 10 provides detailed descriptions and mathematical formulations for different polarization types.
*   **Kraus, J. D. (2002). *Antennas for all applications* (3rd ed.).** Chapter 2 introduces fundamental antenna concepts, including polarization.

---

### 3. Polarization of Microstrip Antennas

The polarization of a microstrip antenna is fundamentally determined by the distribution of surface currents on the radiating patch. The modes excited in the patch dictate the orientation and rotation of these currents.

**Key Concepts:**

*   **Dominant Modes:** The TM$_{10}$ and TM$_{01}$ modes are typically responsible for the primary radiation from a rectangular microstrip patch.
*   **Current Distribution:** The direction and magnitude of currents on the patch surface.
*   **Feeding Technique:** The method used to excite the microstrip patch significantly influences the current distribution and hence the polarization.

**3.1. Linear Polarization (LP) from Rectangular Patches**

Rectangular microstrip patches typically exhibit linear polarization. The orientation of this linear polarization depends on the specific mode excited and the location of the feed.

*   **TM$_{mn}$ Modes:** The resonant modes of a microstrip patch are typically described as TM$_{mn}$ modes, where 'm' and 'n' refer to the number of half-wavelength variations of the electric field along the length and width of the patch, respectively.
*   **TM$_{10}$ Mode:** In a rectangular patch, the TM$_{10}$ mode (with the electric field varying along the length and constant along the width) results in surface currents that primarily flow along the length of the patch. This leads to **linearly polarized radiation along the width of the patch**.
*   **TM$_{01}$ Mode:** Similarly, the TM$_{01}$ mode (with the electric field varying along the width and constant along the length) results in surface currents that primarily flow along the width of the patch. This leads to **linearly polarized radiation along the length of the patch**.

**Example:**

Consider a rectangular patch fed at the center of its edge.

*   If the feed excites the TM$_{10}$ mode, the dominant currents will be along the length of the patch, resulting in radiation polarized perpendicular to the length (i.e., along the width).
*   If the feed excites the TM$_{01}$ mode, the dominant currents will be along the width of the patch, resulting in radiation polarized perpendicular to the width (i.e., along the length).

**Reference:**

*   **Garg, R. (2001). *Microstrip Antenna Design Handbook*.** Chapter 4 elaborates on the modal analysis of microstrip patches and their resulting polarization.

**3.2. Circular Polarization (CP) from Microstrip Patches**

Achieving circular polarization from a microstrip patch requires a more sophisticated design approach, typically involving breaking the symmetry of the patch or employing specific feeding techniques.

*   **Degenerate Modes:** CP radiation is achieved by exciting two orthogonal modes with equal amplitude and a 90-degree phase difference. This can be accomplished by:
    *   **Using a Square Patch:** A square patch is symmetric, allowing for the excitation of two degenerate TM$_{10}$ and TM$_{01}$ modes (or similar orthogonal modes).
    *   **Perturbing the Square Patch:** Introducing asymmetry, such as:
        *   **Truncated Corners:** Cutting off the corners of a square patch.
        *   **Notched Edges:** Indenting specific edges of the patch.
        *   **Slots:** Cutting slots in the patch.
*   **Excitation of Orthogonal Modes:**
    *   **Two Orthogonal Feeds:** Two feeds, placed 90 electrical degrees apart in phase and spatially separated appropriately, can excite orthogonal modes with the required phase difference. This is often achieved using a 3-dB hybrid coupler.
    *   **Single Feed with Perturbations:** Specific single-feed locations on a perturbed square patch can inherently excite the required orthogonal modes with a 90-degree phase difference. For example, feeding at a point that couples to both TM$_{10}$ and TM$_{01}$ modes can achieve CP if the patch dimensions and the feed point are appropriately chosen.

**Example:**

A square microstrip patch with its corners truncated by cutting off small isosceles right-angled triangles can exhibit CP. By feeding the patch at a suitable location (e.g., off-center from the patch center, but on the plane of symmetry of the excited modes), one can excite two nearly degenerate orthogonal modes with an approximately 90-degree phase difference, leading to CP radiation.

**Reference:**

*   **Garg, R. (2001). *Microstrip Antenna Design Handbook*.** Chapter 4 specifically discusses techniques for achieving circular polarization in microstrip antennas.
*   **Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.).** Chapter 10 covers CP antennas and techniques for their realization.
*   **Choudhury, S. (2023). *Reconfigurable antennas*.** While focused on reconfigurability, this book likely touches upon the fundamental generation of CP, which is a prerequisite for many reconfigurable CP antennas.

**3.3. Elliptical Polarization (EP)**

Elliptical polarization is the most general case and occurs when the amplitudes of the orthogonal electric field components are unequal or their phase difference is not exactly 90 degrees.

*   **Unequal Mode Excitation:** If the two orthogonal modes (needed for CP) are excited with unequal amplitudes, the polarization will be elliptical.
*   **Phase Difference Deviation:** If the phase difference between the orthogonal modes deviates from 90 degrees, the polarization will be elliptical.

**Reference:**

*   **Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.).** Discusses the axial ratio, which quantifies the degree of ellipticity.

---

### 4. Polarization Purity and Axial Ratio (AR)

For CP and EP antennas, the purity of the polarization is quantified by the axial ratio (AR).

**Key Concepts:**

*   **Axial Ratio (AR):** The ratio of the major axis to the minor axis of the ellipse traced by the electric field vector.
    *   AR = 1 for perfect circular polarization.
    *   AR > 1 for elliptical polarization.
    *   AR approaches infinity for linear polarization.
*   **Polarization Purity:** A measure of how close the antenna's polarization is to the desired circular or linear polarization. High polarization purity is achieved when the AR is close to 1 (for CP) or very large (for LP).

**Mathematical Definition of AR:**

For two orthogonal electric field components $E_x$ and $E_y$ with a phase difference $\delta$:

$AR = \frac{|E_x|}{|E_y|}$ (when $\delta = 90^\circ$ or $270^\circ$, and the ratio of amplitudes is adjusted appropriately to define major/minor axes)
More generally, for an ellipse:
$AR = \frac{1 + \sqrt{1 - \sin^2(2\theta)}}{1 - \sqrt{1 - \sin^2(2\theta)}} = \frac{1 + |\cos(2\theta)|}{1 - |\cos(2\theta)|}$ where $\theta$ is related to the phase difference.

A more practical definition involves the amplitudes and phase difference:
Let $E_x = A_x e^{j\phi_x}$ and $E_y = A_y e^{j\phi_y}$. The axial ratio is given by:
$AR = \frac{A_x^2 + A_y^2 + 2A_xA_y \cos(\phi_x - \phi_y)}{2A_xA_y \sin(\phi_x - \phi_y)}$ (This formula is not the most common definition of AR, but illustrates dependence on amplitude and phase)

A more standard definition of AR in terms of the major and minor axes of the ellipse is:
$AR = \frac{a}{b}$ where 'a' is the semi-major axis and 'b' is the semi-minor axis.

The axial ratio in terms of the amplitudes $E_x$ and $E_y$ and their phase difference $\delta = \phi_y - \phi_x$ is:
$AR = \frac{1 \pm \sqrt{1-\sin^2(2\alpha)}}{1 \mp \sqrt{1-\sin^2(2\alpha)}}$, where $\tan(2\alpha) = \frac{2 A_x A_y \sin \delta}{A_x^2 - A_y^2}$.
For CP, $A_x = A_y$ and $\delta = \pm 90^\circ$, which results in AR = 1.

**Important Point:** For CP antennas, a lower axial ratio (closer to 1) indicates better polarization purity.

**Reference:**

*   **Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.).** Chapter 10 provides the definition and significance of the axial ratio.
*   **Raju, G. S. N. (2009). *Antenna and Wave Propagation*.** Discusses polarization parameters including the axial ratio.

---

### 5. Polarization Control and Reconfigurability

The ability to control or reconfigure the polarization of microstrip antennas is highly desirable for applications requiring adaptive polarization matching.

**Key Concepts:**

*   **Polarization Agility:** The ability to change the polarization state of an antenna.
*   **Reconfigurable Polarization:** Designing antennas that can switch between different polarization states (e.g., LP to CP, RHCP to LHCP).
*   **Techniques for Polarization Reconfigurability:**
    *   **Switched Feeding Networks:** Using PIN diodes or other active switches to select different feed points or modes.
    *   **Varactor Diodes:** Integrating varactor diodes to dynamically change the electrical length of different segments of the antenna, thereby altering the phase and amplitude relationship between orthogonal modes.
    *   **Liquid Crystals or MEMS:** Employing tunable materials or micro-electro-mechanical systems to alter the antenna's geometry or electromagnetic properties.
    *   **Perturbed Patch Designs:** Using patches with tunable perturbations or slots.

**Examples:**

A square patch fed by a 3-dB hybrid coupler can produce CP. By adding switches to bypass or alter the phase shifting elements in the coupler's output arms, one can switch between RHCP and LHCP.

A single-feed CP patch with a pair of varactor diodes mounted on notches at opposite corners can allow for switching between RHCP and LHCP by changing the bias voltage applied to the diodes, thereby altering the effective length of the patch arms and the phase difference between orthogonal modes.

**References:**

*   **Choudhury, S. (2023). *Reconfigurable antennas*.** This is a primary source for understanding polarization reconfigurability.
*   **Singh, A. K., Abegaonkar, M. P., & Koul, S. K. (2021). *Metamaterials for Antenna Applications*.** Metamaterials can be used to create novel polarization control mechanisms.

---

### 6. Polarization Matching and Polarization Loss Factor (PLF)

Maximizing the received power between two antennas requires their polarizations to be matched.

**Key Concepts:**

*   **Polarization Matching:** When the polarization of the transmitting antenna is the same as the polarization of the receiving antenna.
*   **Polarization Loss Factor (PLF):** A dimensionless quantity that quantifies the loss in power transfer due to polarization mismatch.
    *   PLF = 1 for perfect polarization matching (e.g., LP to LP in the same orientation, or RHCP to RHCP).
    *   PLF = 0 for perfect polarization mismatch (e.g., LP to CP at any orientation, or RHCP to LHCP).

**Mathematical Formulation of PLF:**

Let the polarization vector of the transmitting antenna be $\vec{P}_t$ and that of the receiving antenna be $\vec{P}_r$. The PLF is given by:

$PLF = |\hat{a}_t \cdot \hat{a}_r|^2$

Where:
*   $\hat{a}_t$ is the polarization unit vector of the transmitting antenna.
*   $\hat{a}_r$ is the polarization unit vector of the receiving antenna.
*   The dot product signifies the projection of one vector onto the other.

**Examples of PLF:**

*   **LP to LP:** If both antennas are linearly polarized with an angle $\psi$ between their polarization planes, then $PLF = \cos^2(\psi)$. Maximum gain is achieved when $\psi = 0^\circ$ (PLF=1).
*   **LP to CP:** If a linearly polarized antenna transmits to a circularly polarized antenna (or vice versa), the maximum PLF is 0.5. This occurs when the linear polarization is oriented such that it can be decomposed into two equal circular components that match the receiving antenna's CP.

**Important Point:** Polarization mismatch is a significant factor in signal degradation, especially in wireless communication systems.

**References:**

*   **Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.).** Chapter 10 provides a thorough discussion of polarization matching and PLF.
*   **Collin, R. E. (2001). *Antennas and radio Wave propagation* (2nd ed.).** Discusses the coupling between antennas, which is influenced by polarization.

---

### 7. Practical Considerations and Design Implications

Designing microstrip antennas for specific polarization characteristics requires careful consideration of several factors.

*   **Substrate Properties:** The dielectric constant and thickness of the substrate affect the mode behavior and the achievable bandwidth of CP antennas.
*   **Patch Geometry:** The shape and dimensions of the patch are critical for defining the modes and achieving desired polarization.
*   **Feed Location and Type:** The feed point's position and the feeding mechanism (e.g., probe feed, microstrip line feed, aperture coupling) have a profound impact on the excited modes and the resulting polarization.
*   **Bandwidth:** Achieving broad axial ratio bandwidth for CP antennas is a significant design challenge. Techniques like using thicker substrates with lower dielectric constants or employing parasitic elements are often used.
*   **Mutual Coupling:** For arrays of microstrip antennas, mutual coupling between elements can affect the polarization performance.

**References:**

*   **Garg, R. (2001). *Microstrip Antenna Design Handbook*.** Provides practical design guidelines and trade-offs.
*   **Milligan, T. A. (2005). *Modern Antenna Design* (2nd ed.).** Offers insights into the practical design aspects of various antenna types, including microstrip antennas.

---

### 8. Course Outcomes Alignment

This topic directly addresses the following course outcomes:

*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3)**
    *   Understanding how surface currents on microstrip patches generate electromagnetic waves and how the distribution of these currents dictates polarization. Analyzing the roles of different modes (TM$_{10}$, TM$_{01}$) and their contribution to LP and CP radiation.
*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4)**
    *   The knowledge of current polarization is fundamental to designing microstrip antennas for specific polarization requirements (LP, CP, EP). This includes selecting patch shapes, feed techniques, and perturbation methods to achieve the desired polarization. Measurements of axial ratio and polarization patterns are direct consequences of this topic.
*   **CO3: Analyse and design advanced antennas (Knowledge Level: K4)**
    *   This topic is a stepping stone to designing advanced antennas like reconfigurable polarization antennas, dual-polarized antennas, and arrays with controlled polarization. Understanding fundamental polarization mechanisms is essential for these advanced designs.

---

### Practice Questions and Exercises

**1. Short Answer Questions:**

a.  Define polarization in the context of electromagnetic waves.
b.  What are the three main types of polarization?
c.  What mode(s) of a rectangular microstrip patch typically lead to linear polarization?
d.  What conditions are necessary to achieve circular polarization from a microstrip patch?
e.  Define the axial ratio (AR) and state its value for perfect circular polarization.
f.  What is polarization loss factor (PLF)? What is its maximum and minimum possible value?

**2. Conceptual Questions:**

a.  Explain how the feed location on a square microstrip patch can influence its polarization characteristics.
b.  Describe two common methods used to achieve circular polarization in microstrip antennas.
c.  Discuss the challenges in achieving broad axial ratio bandwidth for circularly polarized microstrip antennas.
d.  Why is polarization matching important in wireless communication systems?

**3. Problem-Solving Questions:**

a.  A linearly polarized antenna transmits a signal to another linearly polarized antenna. If the polarization planes of the two antennas are at an angle of 30 degrees, calculate the polarization loss factor (PLF). What is the percentage of power loss due to polarization mismatch?

    **Answer:**
    $PLF = \cos^2(\psi)$
    Given $\psi = 30^\circ$
    $PLF = \cos^2(30^\circ) = (\frac{\sqrt{3}}{2})^2 = \frac{3}{4} = 0.75$
    Percentage of power loss = $(1 - PLF) \times 100 = (1 - 0.75) \times 100 = 25\%$

b.  A linearly polarized antenna transmits to a circularly polarized antenna. What is the maximum possible PLF? Explain why perfect polarization match (PLF=1) is not possible in this case.

    **Answer:**
    The maximum possible PLF for a linear-to-circular polarization interface is 0.5. This is because a linearly polarized wave can be decomposed into two equal-amplitude circularly polarized waves with opposite senses of rotation (RHCP and LHCP). Only one of these components can match the polarization of the receiving circularly polarized antenna.

c.  Consider a square microstrip patch designed for circular polarization. If the electric field components in the x and y directions are $E_x = 1 \angle 0^\circ$ V/m and $E_y = 1 \angle -80^\circ$ V/m, calculate the axial ratio. Is the polarization circular, linear, or elliptical? What is the sense of rotation (RHCP or LHCP)?

    **Answer:**
    The amplitudes are equal ($A_x = A_y = 1$). The phase difference is $\delta = -80^\circ$.
    The general formula for axial ratio is:
    $AR = \frac{A_x^2 + A_y^2 + 2A_xA_y \cos \delta}{2A_xA_y \sin \delta}$ (for $\delta$ between 0 and 180)
    However, a more common form of AR calculation relates to the ratio of the semi-major axis to the semi-minor axis. Using the angle $\alpha$ where $\tan(2\alpha) = \frac{2 A_x A_y \sin \delta}{A_x^2 - A_y^2}$:
    Since $A_x = A_y$, the denominator $A_x^2 - A_y^2 = 0$.
    This implies $\tan(2\alpha)$ is undefined (or infinite), meaning $2\alpha = 90^\circ$, so $\alpha = 45^\circ$.
    Then $AR = \frac{1 + \sin(2\alpha)}{1 - \sin(2\alpha)} = \frac{1 + \sin(90^\circ)}{1 - \sin(90^\circ)} = \frac{1+1}{1-1}$, which is infinite. This indicates an issue with applying the formula directly in this form when $A_x=A_y$.

    A better approach using amplitudes and phase difference:
    Let $\delta = -80^\circ$. The axial ratio is given by:
    $AR = \frac{1 + \sqrt{1 - \sin^2(\theta)}}{1 - \sqrt{1 - \sin^2(\theta)}}$ where $\tan \theta = \frac{2A_x A_y \sin \delta}{A_x^2 - A_y^2}$. This approach is problematic when $A_x=A_y$.

    A more direct calculation for AR when amplitudes are equal ($A_x=A_y=A$) and phase difference is $\delta$:
    $AR = \left|\frac{1 + e^{j\delta}}{1 - e^{j\delta}}\right| = \left|\frac{1 + \cos\delta + j\sin\delta}{1 - \cos\delta - j\sin\delta}\right|$
    $AR = \left|\frac{2\cos^2(\delta/2) + j 2\sin(\delta/2)\cos(\delta/2)}{2\sin^2(\delta/2) - j 2\sin(\delta/2)\cos(\delta/2)}\right|$
    $AR = \left|\frac{\cos(\delta/2)(\cos(\delta/2) + j\sin(\delta/2))}{\sin(\delta/2)(\sin(\delta/2) - j\cos(\delta/2))}\right|$
    $AR = \left|\frac{\cot(\delta/2)(\cos(\delta/2) + j\sin(\delta/2))}{-\sin(\delta/2)(\cos(\delta/2) - j\sin(\delta/2))}\right|$

    Let's use the direct definition of AR related to the ratio of components:
    When $A_x = A_y$, $AR = |\frac{1}{tan(\phi)}|$ where $\phi$ is the angle of the complex ratio $\frac{E_x}{E_y}$.
    $\frac{E_x}{E_y} = \frac{1 \angle 0^\circ}{1 \angle -80^\circ} = 1 \angle 80^\circ$.
    The angle of this ratio is $80^\circ$.
    $AR = \frac{1+\sqrt{1-\sin^2(2\alpha)}}{1-\sqrt{1-\sin^2(2\alpha)}}$ where $\tan(2\alpha) = \frac{2A_x A_y \sin \delta}{A_x^2 - A_y^2}$. This formula is problematic.

    A common formula for AR when $A_x$ and $A_y$ are amplitudes and $\delta$ is the phase difference is:
    $AR = \frac{1 + \sqrt{1 - (\frac{2A_x A_y \sin\delta}{A_x^2 + A_y^2})^2}}{1 - \sqrt{1 - (\frac{2A_x A_y \sin\delta}{A_x^2 + A_y^2})^2}}$  (This formula is also complex. Let's use a simpler form when $A_x=A_y$).

    For equal amplitudes $A_x=A_y=A$, and phase difference $\delta$:
    $AR = \frac{1}{|\sin \delta|}$
    Here, $\delta = -80^\circ$.
    $AR = \frac{1}{|\sin(-80^\circ)|} = \frac{1}{|-\sin(80^\circ)|} = \frac{1}{\sin(80^\circ)} \approx \frac{1}{0.9848} \approx 1.015$

    **Conclusion:**
    The AR is approximately 1.015. Since it's very close to 1, the polarization is nearly circular.
    The phase difference is $-80^\circ$. A negative phase difference (when $E_y$ lags $E_x$) for a positive direction of propagation means the rotation is **Left-Hand Circular Polarization (LHCP)**.

---

### 9. Important Points to Remember

*   **Polarization** is defined by the orientation of the electric field vector.
*   For microstrip antennas, **surface currents** dictate the polarization.
*   **Rectangular patches** fed appropriately primarily produce **linear polarization**.
*   **Circular polarization** requires exciting two orthogonal modes with equal amplitude and a 90-degree phase difference.
*   **Perturbing the symmetry** of a square patch or using **dual feeds with a hybrid coupler** are common methods for achieving CP.
*   The **axial ratio (AR)** quantifies the purity of circular or elliptical polarization (AR=1 for perfect CP).
*   **Polarization loss factor (PLF)** accounts for power loss due to polarization mismatch between antennas.
*   **Polarization reconfigurability** is achieved using active components like PIN diodes or varactors to switch polarization states.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
