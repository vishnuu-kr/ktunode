---
title: "Circular Polarisation"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 2: Microstrip antennas: Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7da"
status: "completed"
scrapedAt: "2026-05-23T18:11:49.929Z"
---
# ANTENNA THEORY AND DESIGN: Module 2: Microstrip Antennas: Radiation Mechanism

## Topic: Circular Polarisation

### 1. Learning Outcomes

*   Understand the concept and generation of circularly polarized (CP) waves from microstrip antennas.
*   Identify methods for achieving circular polarization in microstrip antennas.
*   Analyze the conditions required for generating CP.
*   Evaluate the performance parameters of circularly polarized microstrip antennas.

### 2. Introduction to Circular Polarisation

Circular polarization (CP) is a type of electromagnetic wave polarization where the electric field vector at a point in space traces out a helix as the wave propagates. This means the electric field vector rotates at a constant rate and maintains a constant amplitude.

**Key Concepts:**

*   **Polarization:** The orientation of the electric field vector of an electromagnetic wave as it propagates.
*   **Linear Polarization (LP):** The electric field vector oscillates along a straight line.
*   **Elliptical Polarization (EP):** The electric field vector traces out an ellipse. CP is a special case of EP where the ellipse's major and minor axes are equal.
*   **Axial Ratio (AR):** The ratio of the major axis to the minor axis of the ellipse traced by the electric field vector. For CP, AR = 1.
*   **Phase Difference:** For CP, the two orthogonal components of the electric field must have a 90-degree phase difference.
*   **Amplitude:** For CP, the amplitudes of the two orthogonal components must be equal.

**Comparison with Linear Polarization:**

| Feature            | Linear Polarization                                    | Circular Polarization                                      |
| :----------------- | :----------------------------------------------------- | :--------------------------------------------------------- |
| Electric Field     | Oscillates along a straight line                       | Rotates with constant amplitude and phase                  |
| Electric Field Path| Line                                                   | Helix                                                      |
| Axial Ratio        | Infinite (ideally)                                     | 1 (ideally)                                                |
| Orthogonal Components| In-phase or 180-degree phase difference                  | 90-degree phase difference                                 |
| Applications       | Satellite communication (simple), Radar, RFID          | Satellite communication (GPS, satellite TV), Radar, Tracking |

### 3. Radiation Mechanism of Circularly Polarized Microstrip Antennas

Microstrip antennas are inherently linearly polarized due to the dominant TM modes. To achieve CP, we need to excite two orthogonal degenerate modes (or nearly degenerate modes) with equal amplitudes and a 90-degree phase difference.

**Methods to Achieve Circular Polarization:**

Several techniques can be employed to generate CP from microstrip antennas. These primarily involve modifying the radiating element to create the necessary conditions for CP:

**3.1. Perturbations of a Circular Microstrip Patch:**

*   **Notch Perturbation:** Introducing a notch at the edge of a circular patch. The position and width of the notch influence the mode splitting and phase difference between orthogonal modes.
*   **Slot Perturbation:** Cutting a slot within the patch.
*   **Edge Trimming:** Trimming specific portions of the circular patch edge.

**(Refer to Balanis, 4th Ed., Chapter 11: Circularly Polarized Antennas for a detailed discussion on various perturbation techniques for circular patches.)**

**3.2. Feeding Techniques:**

*   **Two-Feed Method:** Exciting two orthogonal degenerate modes with 90-degree phase difference using two feeds.
    *   **Quadrature Hybrid Coupler:** A common method to provide the 90-degree phase shift.
    *   **Orthogonal Feed Points:** The feed points are positioned to excite orthogonal modes (e.g., at $90^\circ$ or $270^\circ$ from the center along a diameter).
*   **Single-Feed Method:**
    *   **Coupled-Line Coupler:** Using a coupled section within the feed network to introduce the phase shift.
    *   **Proximity Coupled Feed with L-Slot or C-Slot:** Introducing asymmetrical slots in the radiating patch itself to achieve mode splitting and phase difference.
    *   **Via Hole Technique:** Using via holes to create resonant structures that induce mode splitting.
    *   **Shorting Pins:** Placing shorting pins at specific locations on the patch.

**(Refer to Garg, "Microstrip Antenna Design Handbook", Chapter 3: Circularly Polarized Microstrip Antennas for in-depth coverage of various feeding techniques.)**

**3.3. Shaping the Radiating Element:**

*   **Square Patch with Corner Trimming:** Cutting the corners of a square patch to introduce asymmetry and mode splitting.
*   **Rectangular Patch with Length/Width Perturbation:** Modifying the dimensions of a rectangular patch to excite orthogonal modes with different resonant frequencies, and then using a feed to combine them with the correct phase.
*   **Circularly Polarized Microstrip Patch with Slits:** Introducing specific slits on the patch.
*   **Ring and Annular Patch Antennas:** These shapes can naturally exhibit CP under certain conditions.

**(Refer to Milligan, "Modern Antenna Design", Chapter 5: Microstrip Antennas for discussion on shaped patches.)**

### 4. Conditions for Generating Circular Polarization

To achieve perfect circular polarization, the following conditions must be met:

*   **Equal Amplitudes:** The amplitudes of the two orthogonal electric field components must be equal.
*   **90-degree Phase Difference:** The phase difference between the two orthogonal electric field components must be exactly $90^\circ$.

**Mathematical Representation:**

Let the electric field components be $E_x$ and $E_y$. For CP, we can write:

$E_x(t) = E_0 \cos(\omega t)$
$E_y(t) = E_0 \sin(\omega t - \phi)$

For **Right-Hand Circular Polarization (RHCP)**: $\phi = 0^\circ$ or $360^\circ$. The electric field rotates clockwise when viewed from the source.
$E_y(t) = E_0 \sin(\omega t)$

For **Left-Hand Circular Polarization (LHCP)**: $\phi = 0^\circ$ or $360^\circ$. The electric field rotates counter-clockwise when viewed from the source.
$E_y(t) = -E_0 \sin(\omega t)$

If we have a phase difference of $-90^\circ$ instead of $+90^\circ$, we get the opposite sense of circular polarization.

**Effect of Imperfect Conditions:**

*   **Unequal Amplitudes:** Leads to elliptical polarization with an axial ratio greater than 1.
*   **Phase Difference $\neq 90^\circ$:** Also leads to elliptical polarization with an axial ratio greater than 1.

### 5. Analysis of Circularly Polarized Microstrip Antennas

**5.1. Axial Ratio (AR):**

The axial ratio is a key parameter for characterizing CP antennas.

$AR = \frac{|E_{max}|}{|E_{min}|}$

Where $E_{max}$ and $E_{min}$ are the maximum and minimum electric field amplitudes.
For CP, $AR = 1$. For EP, $1 < AR < \infty$. For LP, $AR = \infty$.

**Calculation of AR:**

If the two orthogonal components are $E_x = E_x^0 e^{j\phi_x}$ and $E_y = E_y^0 e^{j\phi_y}$, then the AR can be calculated as:

$AR = \frac{1 + \sqrt{1 - (\frac{2(E_x^0 E_y^0 \sin(\phi_x - \phi_y))}{(E_x^0)^2 + (E_y^0)^2})^2}}{1 - \sqrt{1 - (\frac{2(E_x^0 E_y^0 \sin(\phi_x - \phi_y))}{(E_x^0)^2 + (E_y^0)^2})^2}}$

For CP, we need $E_x^0 = E_y^0$ and $|\phi_x - \phi_y| = 90^\circ$.

**(Refer to Balanis, 4th Ed., Chapter 11 for detailed mathematical derivations of AR.)**

**5.2. Bandwidth of CP:**

CP antennas generally have narrower bandwidths compared to their linearly polarized counterparts. This is because both the impedance matching and the axial ratio condition need to be satisfied over the operating frequency range.

**Factors Affecting Bandwidth:**

*   **Substrate Thickness:** Thicker substrates generally improve bandwidth.
*   **Dielectric Constant:** Lower dielectric constants can also lead to wider bandwidth.
*   **Ground Plane Size:** A larger ground plane can influence bandwidth.
*   **Perturbation Method:** The specific method used to achieve CP affects bandwidth.

**(Refer to Garg, "Microstrip Antenna Design Handbook", Chapter 3 for discussions on CP bandwidth.)**

**5.3. Radiation Pattern:**

CP antennas can produce a broadside radiation pattern, similar to LP patches, but the polarization of the radiated wave is circular. The radiation pattern's shape is influenced by the patch geometry, feeding mechanism, and substrate properties.

### 6. Examples and Applications

*   **GPS Receivers:** Microstrip antennas are widely used as GPS patch antennas, and they often employ circular polarization to mitigate the effects of Faraday rotation in the ionosphere and multipath propagation.
*   **Satellite Communication:** For satellite TV and communication, CP is advantageous because it reduces polarization mismatch losses, especially when the satellite antenna or the ground antenna is misaligned.
*   **Radar Systems:** CP can be used in radar to reduce clutter from rain or snow, as precipitation is often linearly polarized.
*   **Mobile Communication:** While less common than LP, CP can be beneficial in certain mobile scenarios where orientation is unpredictable.
*   **RFID Systems:** CP can improve read rates in RFID systems by ensuring proper polarization coupling regardless of the tag's orientation.

**Example: Square Patch with Corner Trimming for CP**

A common method to achieve CP from a square patch is to truncate its corners. By truncating the corners symmetrically, we introduce asymmetry that splits the degenerate modes of the square patch.

*   **Geometry:** A square patch with side length $L$ and substrate height $h$. The corners are trimmed by cutting small right-angled triangles from each corner.
*   **Mode Excitation:** The fundamental TM10 and TM01 modes, which are degenerate in a perfect square, become slightly different in resonant frequency due to the corner truncation.
*   **Feeding:** A single probe feed is placed at a specific location to excite both modes with nearly equal amplitudes. The offset of the feed from the center of symmetry determines the amplitude ratio.
*   **Phase Condition:** The difference in resonant frequencies of the split modes, along with the feed position, helps to achieve the desired 90-degree phase difference.

**(Refer to Balanis, 4th Ed., Chapter 11 for detailed analysis of corner-trimmed square patches.)**

### 7. Important Points to Remember

*   **CP requires equal amplitudes and a 90-degree phase difference between orthogonal field components.**
*   **Microstrip antennas are naturally linearly polarized; CP requires specific design modifications.**
*   **Common methods for CP include patch shaping, perturbation techniques, and specialized feeding mechanisms.**
*   **The Axial Ratio (AR) is the key parameter to quantify the degree of circular polarization (AR=1 for perfect CP).**
*   **CP antennas generally have narrower bandwidths than LP antennas.**
*   **CP is beneficial in applications where antenna orientation is variable or for mitigating signal fading due to propagation effects.**

### 8. Practice Questions and Exercises

**Question 1:** What are the two fundamental conditions required to achieve circular polarization from an antenna?

**Answer 1:**
1.  Equal amplitudes of the orthogonal electric field components.
2.  A 90-degree phase difference between the orthogonal electric field components.

**Question 2:** Briefly explain one method for generating circular polarization from a microstrip patch antenna.

**Answer 2:**
One method is to feed a square microstrip patch with its corners truncated. The truncation introduces asymmetry, splitting the degenerate TM10 and TM01 modes. By carefully choosing the feed point, both modes can be excited with nearly equal amplitudes and a phase difference close to 90 degrees, thus producing circular polarization.

**Question 3:** Define the Axial Ratio (AR) and state its value for a perfectly circularly polarized wave.

**Answer 3:**
The Axial Ratio (AR) is the ratio of the major axis to the minor axis of the ellipse traced by the electric field vector. For a perfectly circularly polarized wave, the AR is 1.

**Question 4:** List three applications where circularly polarized microstrip antennas are commonly used and briefly explain why CP is advantageous in one of them.

**Answer 4:**
Three common applications are:
1.  GPS receivers
2.  Satellite communication (e.g., satellite TV)
3.  Radar systems

**Why CP is advantageous in Satellite Communication:**
In satellite communication, the orientation of the receiving antenna relative to the transmitting antenna can change due to various factors. Circular polarization reduces polarization mismatch losses that can occur if the polarization planes are not aligned. This leads to a more stable and robust link.

**Question 5 (Design/Analysis - Conceptual):** Consider a rectangular microstrip patch antenna. How could you modify its dimensions and feeding to attempt to achieve circular polarization?

**Answer 5 (Conceptual):**
To achieve CP from a rectangular patch, you would typically need to:
1.  **Introduce Asymmetry:** This could involve making the length and width of the patch nearly equal (making it close to a square) and then introducing asymmetry through other means, or by designing it with specific length-to-width ratios that allow for mode manipulation.
2.  **Excite Orthogonal Modes:** You would need to excite two orthogonal modes (e.g., TM10 and TM01) with nearly equal amplitudes. This might involve carefully placing a single feed at an offset from the center.
3.  **Achieve 90-degree Phase Difference:** This is the most challenging aspect. It could be achieved by:
    *   Designing the patch dimensions such that the resonant frequencies of the two desired orthogonal modes are very close (nearly degenerate).
    *   Using a feed mechanism that inherently introduces a 90-degree phase shift between the excitation of these two modes, or by strategically positioning the feed.
    *   Techniques like using a proximity-coupled feed with a parasitic element containing a specific slot (e.g., L-slot) can help in achieving CP.

### 9. Alignment with Course Outcomes

*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3)**
    *   This topic directly addresses the radiation mechanism of microstrip antennas, specifically how to modify them to achieve circular polarization by exciting orthogonal modes with specific amplitude and phase relationships.
*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4)**
    *   Understanding the conditions for CP (equal amplitude, 90-degree phase difference) and parameters like the Axial Ratio are crucial for the design and measurement phases. The study of various techniques to achieve CP provides a basis for design.
*   **CO3: Analyse and design advanced antennas (Knowledge Level: K4)**
    *   Circularly polarized microstrip antennas are considered advanced configurations of basic microstrip antennas. The methods discussed for achieving CP fall under advanced antenna design principles.
*   **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2)**
    *   While this topic focuses on the antenna itself, understanding CP is directly linked to its interaction with the propagation environment. For instance, CP's advantage in mitigating Faraday rotation (a propagation effect) connects to this CO.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 10. References

*   **Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.). Wiley.** (Crucial for fundamental principles of polarization and specific CP techniques.)
*   **Garg, R. (2001). *Microstrip Antenna Design Handbook*. Artech.** (Provides in-depth coverage of various methods for CP microstrip antennas.)
*   **Milligan, T. A. (2005). *Modern Antenna Design* (2nd ed.). IEEE PRESS, Wiley Interscience.** (Offers insights into shaped patches and design considerations.)
*   **Pozar, D. M. (2012). *Microwave Engineering* (4th ed.). Wiley India.** (Provides context on microwave circuits and feed networks, often used in CP antenna designs.)