---
title: "Bandwidth"
subject: "ANTENNA THEORY AND WAVE PROPAGATION"
module: "Module 2: Microstrip antennas : Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff76e"
status: "completed"
scrapedAt: "2026-05-23T18:12:28.218Z"
---
# ANTENNA THEORY AND WAVE PROPAGATION

## Module 2: Microstrip Antennas: Radiation Mechanism

### Topic: Bandwidth

---

### 1. Introduction to Bandwidth in Microstrip Antennas

**Definition:** Bandwidth of an antenna is defined as the range of frequencies over which the antenna performs acceptably according to specified criteria. For microstrip antennas, common criteria include Voltage Standing Wave Ratio (VSWR) or Return Loss (S11) below a certain threshold (e.g., VSWR < 2 or S11 < -10 dB), and acceptable gain or radiation efficiency.

**Why Bandwidth is Crucial for Microstrip Antennas:**
*   Microstrip antennas are inherently narrowband due to their low profile and the nature of their radiating structure.
*   Many applications require broadband operation (e.g., wireless communication systems, radar).
*   Understanding and improving bandwidth is a primary challenge in microstrip antenna design.

**Types of Bandwidth:**
*   **Impedance Bandwidth:** The frequency range over which the input impedance of the antenna is matched to the transmission line (typically 50 Ohms). This is directly related to VSWR/Return Loss.
*   **Radiation Bandwidth:** The frequency range over which the antenna maintains acceptable radiation characteristics such as gain, radiation pattern, and efficiency.
*   **Total Bandwidth:** The frequency range over which both impedance and radiation characteristics meet specified requirements.

---

### 2. Factors Affecting the Bandwidth of Microstrip Antennas

The bandwidth of a microstrip antenna is primarily determined by the Q factor (Quality Factor) of the antenna structure.

**Q Factor:**
*   **Definition:** The Q factor is a dimensionless parameter that describes how underdamped an oscillator or resonator is in terms of its spectral linewidth. For an antenna, it relates to the ratio of stored energy to dissipated energy per cycle.
*   **Relationship with Bandwidth:** Bandwidth ($BW$) is inversely proportional to the Q factor:
    $$ BW \approx \frac{1}{Q} $$
    More precisely, for a VSWR of 2, the bandwidth is approximately $BW = \frac{1}{Q} (\sqrt{SWR} - 1)$. For VSWR = 2, $BW \approx \frac{1}{Q}$.

**Key factors influencing the Q factor and thus the bandwidth:**

*   **Substrate Properties:**
    *   **Permittivity ($\epsilon_r$):** Higher dielectric constants tend to confine fields more, leading to lower radiation efficiency and generally narrower bandwidth. Low permittivity substrates are preferred for broadband operation. (Balanis, 4th Ed., Chapter 13)
    *   **Loss Tangent ($\tan \delta$):** Higher loss tangent leads to increased ohmic and dielectric losses, which increases the dissipated energy, lowering the Q factor and potentially *increasing* the bandwidth but at the cost of efficiency. (Garg, Chapter 3)
    *   **Substrate Thickness ($h$):** Thicker substrates can accommodate more stored energy and less stored magnetic energy relative to electric energy, leading to lower Q and wider bandwidth. This is a primary method for increasing bandwidth. (Balanis, 4th Ed., Chapter 13; Pozar, 4th Ed., Chapter 9)

*   **Radiating Patch Geometry:**
    *   **Length and Width:** The resonant frequency is primarily determined by the length of the patch. Changes in dimensions affect the resonant frequency and impedance.
    *   **Aspect Ratio:** The shape of the patch can influence bandwidth.
    *   **Slots/Gratings on the Patch:** Introducing slots or gratings on the radiating patch can increase the surface area for radiation and modify the current distribution, often leading to enhanced bandwidth. (Garg, Chapter 7)

*   **Feedline Design:**
    *   **Type of Feed:**
        *   **Microstrip Line Feed:** Typically results in the narrowest bandwidth.
        *   **Coaxial Probe Feed:** Offers slightly better bandwidth than line feed.
        *   **Coupled Line Feed (e.g., proximity coupled):** Generally provides the widest bandwidth among the simple feed techniques. (Balanis, 4th Ed., Chapter 13)
    *   **Feed Coupling:** The degree of coupling between the feed and the patch affects impedance matching and bandwidth.

*   **Parasitic Elements:**
    *   **Parasitic Patches:** Incorporating adjacent parasitic patches can broaden the bandwidth by creating multiple resonant frequencies. This forms the basis of the stacked and array configurations for bandwidth enhancement. (Garg, Chapter 7)

---

### 3. Bandwidth Enhancement Techniques

Since microstrip antennas are typically narrowband, significant research has focused on techniques to improve their bandwidth.

**3.1. Thick and Low Permittivity Substrates:**
*   **Principle:** As discussed, increasing substrate thickness ($h$) and decreasing dielectric constant ($\epsilon_r$) are fundamental ways to reduce the Q factor and increase impedance bandwidth.
*   **Trade-offs:**
    *   **Thick Substrates:** Can lead to surface wave excitation, which reduces radiation efficiency and can distort radiation patterns. Increased spurious radiation from the feed line can also occur. (Pozar, 4th Ed., Chapter 9)
    *   **Low Permittivity Substrates:** May require larger antenna dimensions for a given resonant frequency, which can be a disadvantage in compact designs.
*   **Example:** A standard single-layer microstrip patch on a thin, high-$\epsilon_r$ substrate might have a bandwidth of 1-2%. Using a thicker, low-$\epsilon_r$ substrate (e.g., foam) can increase bandwidth to 5-10%.

**3.2. Stacked Microstrip Antennas (Two-Layer and Multi-Layer):**
*   **Principle:** Two or more radiating patches are stacked vertically, separated by a dielectric substrate. The resonant frequencies of the individual patches can be designed to be close to each other, creating a wider overall bandwidth. The coupling between the patches plays a critical role.
*   **Types:**
    *   **Parasitic Stacked:** The driven element is one patch, and adjacent patches are not directly fed but are excited by the electromagnetic field of the driven patch.
    *   **Directly Fed Stacked:** Multiple patches are fed in a specific manner to achieve broadband operation.
*   **Mechanism:** The closely spaced resonant frequencies of the individual patches combine to form a broader passband. The mutual coupling between the patches can be exploited to achieve a desired impedance match over a wider frequency range. (Garg, Chapter 7; Balanis, 4th Ed., Chapter 13)
*   **Example:** A dual-layer stacked patch antenna can achieve bandwidths of 10-20% or even more, depending on the configuration and spacing.

**3.3. Proximity-Coupled Feed:**
*   **Principle:** The radiating patch is electromagnetically coupled to a microstrip feed line running on a separate substrate layer below it. There is no direct electrical connection.
*   **Mechanism:** The coupling strength can be controlled by the gap between the two substrates and the offset of the feed line relative to the patch. This allows for independent control of impedance matching and resonant frequency, leading to wider bandwidth compared to direct feeds. (Balanis, 4th Ed., Chapter 13; Pozar, 4th Ed., Chapter 9)
*   **Advantages:** Higher bandwidth, reduced spurious radiation from the feed line, improved efficiency.
*   **Disadvantages:** More complex fabrication (requiring alignment of two substrates).

**3.4. Aperture-Coupled Feed:**
*   **Principle:** The radiating patch is on one substrate, and the feed line is on a separate substrate below it. They are coupled through a slot (aperture) in a ground plane separating the two substrates.
*   **Mechanism:** The size and shape of the aperture, as well as the substrate properties, control the coupling. This configuration offers good isolation between the feed and the radiating element, leading to reduced spurious radiation and potentially wider bandwidth.
*   **Advantages:** Good isolation, less spurious radiation, flexible design for impedance matching.
*   **Disadvantages:** Fabrication complexity (etching the slot in the ground plane). (Garg, Chapter 7)

**3.5. Slotted Microstrip Antennas:**
*   **Principle:** Introducing slots in the radiating patch or the ground plane can alter the current distribution and electromagnetic fields, effectively increasing the electrical length or creating multiple resonant modes.
*   **Types:** H-shaped slots, U-shaped slots, E-shaped slots, etc., in the patch; parasitic slots in the ground plane.
*   **Mechanism:** The slots increase the effective surface area for radiation and modify the impedance characteristics, often leading to bandwidth enhancement. Some slot configurations can also enable dual or multi-band operation. (Garg, Chapter 7)

**3.6. Using Complementary Structures/Metamaterials:**
*   **Principle:** Incorporating metamaterial structures (e.g., split-ring resonators, complementary split-ring resonators) near the microstrip patch can manipulate the electromagnetic fields and improve bandwidth.
*   **Mechanism:** Metamaterials can provide negative permeability or permittivity, allowing for novel ways to control wave propagation and interaction with the antenna. For bandwidth enhancement, they can effectively increase the electrical size or introduce additional resonances. (Singh, Abegaonkar, Koul, 2nd Ed., Chapter 5 on metamaterial antennas)
*   **Example:** A microstrip patch with a complementary split-ring resonator (CSRR) etched in the ground plane beneath it can exhibit enhanced bandwidth.

**3.7. Sierpinski Gasket and Fractal Antennas:**
*   **Principle:** Utilizing fractal geometries (e.g., Sierpinski gasket, space-filling curves) for the radiating patch.
*   **Mechanism:** Fractal antennas are known for their multiband and wideband characteristics. The self-similar structure excites multiple resonant modes at different frequencies. The complex geometry can increase the effective electrical length and current path, leading to wider bandwidth. (Choudhury, 2nd Ed., Chapter 5 on Fractal Antennas)

**3.8. Notch Antennas:**
*   **Principle:** A notch cut into a radiating structure (e.g., a microstrip patch or a printed dipole) can affect the resonant frequencies and bandwidth.
*   **Mechanism:** The notch can introduce additional resonances or alter the impedance matching, leading to wider bandwidth.

**3.9. Dielectric Resonator Antennas (DRAs) with Microstrip Feed:**
*   While not strictly microstrip antennas, DRAs can be fed using microstrip lines. DRAs themselves inherently offer wider bandwidths compared to microstrip patches. When integrated with microstrip feed structures, they provide a broadband solution. (Balanis, 4th Ed., Chapter 14)

---

### 4. Characterizing Bandwidth

*   **VSWR Plot:** A graph of VSWR versus frequency. The bandwidth is determined by identifying the frequency range where VSWR is below a specified threshold (e.g., 2).
*   **Return Loss (S11) Plot:** A graph of S11 (in dB) versus frequency. The bandwidth is the frequency range where S11 is below a specified threshold (e.g., -10 dB).
*   **Gain Plot:** A graph of antenna gain versus frequency. Radiation bandwidth is the range where gain is within acceptable limits.
*   **Radiation Pattern:** The shape of the radiation pattern (e.g., beamwidth, sidelobe levels) should remain acceptable over the desired bandwidth.

**Important Note on Bandwidth Definition:** The definition of "acceptable performance" is application-dependent. A typical VSWR < 2 (or S11 < -10 dB) is common for many communication systems, but some critical applications might require VSWR < 1.5.

---

### 5. Practice Questions and Answers

**Question 1:**
What is the fundamental reason for the inherently narrowband nature of traditional microstrip patch antennas?
**Answer:** The Q factor of a microstrip antenna is generally high due to the stored energy in the fringing fields and the losses associated with the substrate and conductor. This high Q factor leads to a narrow bandwidth.

**Question 2:**
List three common techniques used to enhance the bandwidth of microstrip antennas.
**Answer:**
1.  Using thick substrates with low dielectric constants.
2.  Employing stacked patch configurations.
3.  Using proximity-coupled or aperture-coupled feeding mechanisms.
4.  Introducing slots in the radiating patch.

**Question 3:**
How does increasing the substrate thickness affect the bandwidth of a microstrip patch antenna?
**Answer:** Increasing the substrate thickness generally *increases* the bandwidth. This is because a thicker substrate allows for more stored energy and less stored magnetic energy relative to electric energy, thereby reducing the Q factor of the antenna.

**Question 4:**
Explain the principle behind the stacked microstrip antenna for bandwidth enhancement.
**Answer:** In a stacked microstrip antenna, two or more radiating patches are placed in close proximity, usually one above the other, separated by a dielectric layer. The resonant frequencies of these individual patches are designed to be close, and the mutual coupling between them broadens the overall impedance bandwidth by creating a wider passband.

**Question 5:**
What are the main advantages of a proximity-coupled feed for microstrip antennas compared to a microstrip line feed?
**Answer:** Proximity-coupled feeds offer wider bandwidth and reduced spurious radiation from the feed line, as the feed line and the radiating patch are on separate substrate layers and are coupled electromagnetically through a slot in the ground plane (if applicable) or by proximity. This allows for better isolation and independent control over impedance matching and resonant frequency.

---

### 6. Important Points to Remember

*   **Bandwidth is inversely proportional to the Q factor.** Lower Q = Wider Bandwidth.
*   **Thicker substrates and lower permittivity substrates enhance bandwidth.** Be mindful of surface wave excitation and increased dimensions.
*   **Stacked and coupled configurations are effective for broadband operation.**
*   **Feed mechanism significantly impacts bandwidth.** Proximity coupling and aperture coupling generally offer better bandwidth than direct microstrip line feeds.
*   **Slotting and fractal geometries can also improve bandwidth.**
*   **Bandwidth enhancement often comes with trade-offs**, such as increased complexity, potential reduction in efficiency, or changes in radiation pattern.
*   **The definition of "acceptable performance" for bandwidth is application-specific.**

---

### 7. Alignment with Course Outcomes

*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3)**
    *   Understanding how factors like substrate thickness, coupling, and geometry affect the stored energy and radiated power helps in analyzing the radiation mechanism over a frequency range. The discussion on Q factor and its relation to energy storage is key here.
*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4)**
    *   This topic directly supports the design aspect. Knowledge of bandwidth enhancement techniques is crucial for designing microstrip antennas that meet specific frequency range requirements. Understanding VSWR/S11 plots is essential for measurement interpretation.
*   **CO3: Analyse and design advanced antennas (Knowledge Level: K4)**
    *   Techniques like stacked antennas, aperture-coupled feeds, and fractal geometries are considered advanced antenna designs aimed at achieving improved performance, including wider bandwidth. This topic provides the foundation for analyzing and designing such antennas.
*   **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2)**
    *   While this topic primarily focuses on the antenna itself, the bandwidth of the antenna directly impacts its ability to effectively radiate and receive signals across a desired frequency spectrum. This is a fundamental parameter for successful radio wave propagation.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 8. References from Specified Textbooks and Reference Books

*   **Balanis, A. Antenna Theory: Analysis and Design (4th Ed.):** Chapter 13 covers "Broadband Antennas," including a detailed discussion on microstrip antennas and techniques for bandwidth enhancement like thick substrates and stacked elements.
*   **Garg, R. Microstrip Antenna Design Handbook:** Chapter 3 discusses "Design of Microstrip Patch Antennas" and parameters like bandwidth. Chapter 7 covers "Broadband Microstrip Antennas," detailing various techniques such as stacked patches, aperture coupling, and slotted patches.
*   **Pozar, D. M. Microwave Engineering (4th Ed.):** Chapter 9, "Antennas," includes a section on microstrip antennas, discussing their limitations in bandwidth and the effect of substrate properties and feed structures.
*   **Singh, A. K., Abegaonkar, M. P., Koul, S. K. Metamaterials for Antenna Applications (2nd Ed.):** Relevant chapters on metamaterial structures (e.g., CSRRs) and their integration with antennas for performance enhancement, including bandwidth.
*   **Choudhury, S. Reconfigurable antennas (2nd Ed.):** Chapter 5 on Fractal Antennas would discuss how fractal geometries contribute to multiband and wideband operation, which is pertinent to bandwidth enhancement.

---