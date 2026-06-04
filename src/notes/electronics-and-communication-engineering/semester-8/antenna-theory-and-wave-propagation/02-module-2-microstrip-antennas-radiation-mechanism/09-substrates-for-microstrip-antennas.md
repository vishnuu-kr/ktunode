---
title: "Substrates for microstrip antennas"
subject: "ANTENNA THEORY AND WAVE PROPAGATION"
module: "Module 2: Microstrip antennas : Radiation mechanism"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff773"
status: "completed"
scrapedAt: "2026-05-23T18:12:32.318Z"
---
# ANTENNA THEORY AND WAVE PROPAGATION

## Module 2: Microstrip Antennas: Radiation Mechanism

### Topic: Substrates for Microstrip Antennas

---

### **1. Introduction to Substrates in Microstrip Antennas**

Substrates form the foundational dielectric material upon which microstrip antenna elements are fabricated. They play a crucial role in the antenna's performance, influencing its electrical characteristics, bandwidth, efficiency, and mechanical stability. The choice of substrate is critical for achieving desired antenna parameters.

**Key Concepts:**

*   **Dielectric Constant ($\epsilon_r$):** A measure of how well a dielectric material can store electrical energy in an electric field. A higher $\epsilon_r$ leads to smaller antenna dimensions but can also result in lower radiation efficiency and narrower bandwidth.
*   **Loss Tangent ($\tan \delta$):** A measure of dielectric losses in the material. A lower loss tangent is desirable for high-efficiency antennas.
*   **Thickness ($h$):** The physical thickness of the dielectric substrate. It influences the antenna's impedance, bandwidth, and radiation efficiency.

**Reference:**
*   Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.). Wiley. (Chapter 12 discusses transmission lines and their characteristics, which are relevant to understanding microstrip line properties influenced by substrates).
*   Garg, R. (2001). *Microstrip Antenna Design Handbook*. Artech. (Chapter 2 provides a comprehensive overview of microstrip line parameters and substrate materials).

---

### **2. Desired Properties of Microstrip Antenna Substrates**

The ideal substrate for a microstrip antenna should possess a combination of electrical, mechanical, and thermal properties.

**Key Properties and their Importance:**

*   **Low Dielectric Loss ($\tan \delta \approx 0$):** Minimizes conductor and dielectric losses, leading to higher radiation efficiency.
*   **Controlled Dielectric Constant ($\epsilon_r$):**
    *   **Low $\epsilon_r$ (e.g., 2-6):** Generally preferred for wider bandwidth and higher radiation efficiency. Leads to larger antenna dimensions.
    *   **High $\epsilon_r$ (e.g., > 10):** Allows for miniaturization of antenna dimensions, crucial for compact applications. However, it can lead to lower radiation efficiency, surface waves, and narrower bandwidth.
*   **Uniform Thickness ($h$):** Ensures consistent electromagnetic wave propagation and predictable antenna performance.
*   **Good Mechanical Strength:** Allows for robust fabrication and handling, especially in harsh environments.
*   **Thermal Stability:** Maintains consistent electrical properties over a range of operating temperatures.
*   **Low Thermal Expansion Coefficient:** Prevents mechanical stress and performance degradation due to temperature variations.
*   **Ease of Machining/Fabrication:** Facilitates the precise etching and manufacturing of antenna elements.
*   **Low Cost:** Important for mass-produced antennas.

**Reference:**
*   Garg, R. (2001). *Microstrip Antenna Design Handbook*. Artech. (Chapter 2 details the impact of substrate properties on antenna performance).
*   Pozar, D. M. (2012). *Microwave Engineering* (4th ed.). Wiley India. (Chapter 6 discusses the properties of microwave substrates and their impact on transmission lines).

---

### **3. Common Substrate Materials for Microstrip Antennas**

A variety of dielectric materials are used as substrates, each with its own advantages and disadvantages.

**Categories and Examples:**

*   **Low-Loss Dielectrics (Commonly Used):**
    *   **PTFE (Polytetrafluoroethylene) - Teflon:**
        *   **Characteristics:** Very low loss tangent ($\tan \delta < 0.001$), good dielectric strength, high thermal stability.
        *   **$\epsilon_r$ Range:** Typically 2.1 to 10.
        *   **Examples:** RT/duroid series (e.g., RT/duroid 5870, 5880), Teflon-fiberglass composite.
        *   **Applications:** High-performance antennas, radar systems, applications requiring wide bandwidth and high efficiency.
    *   **Duroid:**
        *   **Characteristics:** A family of thermosetting plastic laminates, often glass-reinforced PTFE. Offers a balance of electrical and mechanical properties.
        *   **$\epsilon_r$ Range:** Varies from 2.2 to 10.
        *   **Examples:** RT/duroid 5870 ($\epsilon_r = 2.32$), RT/duroid 5880 ($\epsilon_r = 2.20$), RT/duroid 6002 ($\epsilon_r = 2.94$).
        *   **Applications:** Wide range of microwave and RF applications.
    *   **Ceramic Materials (e.g., Alumina, Zirconia):**
        *   **Characteristics:** High dielectric constant, good thermal stability, mechanically robust, can be expensive.
        *   **$\epsilon_r$ Range:** 9 to 100+.
        *   **Examples:** Alumina ($\epsilon_r \approx 9-10$), Zirconia ($\epsilon_r \approx 20-25$).
        *   **Applications:** Miniaturized antennas, high-frequency applications where size is critical. Higher dielectric loss compared to PTFE.

*   **Moderate-Loss Dielectrics:**
    *   **Fiberglass Reinforced Epoxy (e.g., FR-4):**
        *   **Characteristics:** Low cost, good mechanical properties, readily available. Higher loss tangent compared to PTFE.
        *   **$\epsilon_r$ Range:** Typically 4.4 to 4.8.
        *   **Applications:** Low-cost commercial applications, prototyping, educational purposes where performance requirements are less stringent.
    *   **Polyimide:**
        *   **Characteristics:** Flexible, good thermal properties, moderate loss.
        *   **$\epsilon_r$ Range:** Typically 3.4 to 3.5.
        *   **Applications:** Flexible antennas, conformal antennas.

*   **High-Loss Dielectrics (Less Common for Radiating Elements):**
    *   **Polyurethane, PVC, etc.:** Generally have higher loss tangents and are less suitable for the radiating elements themselves but might be used as substrates for dielectric loading or beamforming networks.

**Reference:**
*   Garg, R. (2001). *Microstrip Antenna Design Handbook*. Artech. (Chapter 2 is dedicated to substrate materials).
*   Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.). Wiley. (Section 12.2.1 discusses dielectric substrates and their properties).
*   Singh, A. K., Abegaonkar, M. P., & Koul, S. K. (2021). *Metamaterials for Antenna Applications* (2nd ed.). CRC Press. (While focusing on metamaterials, this book might discuss substrates used in conjunction with metamaterial structures).

---

### **4. Impact of Substrate Properties on Antenna Performance**

The choice of substrate directly affects various antenna parameters.

**Key Performance Impacts:**

*   **Antenna Size:**
    *   **High $\epsilon_r$:** Leads to smaller antenna dimensions (miniaturization).
    *   **Low $\epsilon_r$:** Leads to larger antenna dimensions.
    *   *Formula Relation (approximate for a patch):* Wavelength in dielectric $\lambda_g = \lambda_0 / \sqrt{\epsilon_{eff}}$, where $\epsilon_{eff}$ is the effective dielectric constant, which is dependent on $\epsilon_r$ and geometry. Larger $\epsilon_r$ generally leads to smaller $\lambda_g$ and thus smaller antenna dimensions.

*   **Bandwidth:**
    *   **Low $\epsilon_r$ and High $h$:** Generally results in wider bandwidth.
    *   **High $\epsilon_r$ and Low $h$:** Generally results in narrower bandwidth.
    *   *Reasoning:* Higher dielectric constant confines fields more tightly, reducing radiation. Increased thickness provides more space for fields to radiate, improving bandwidth.

*   **Radiation Efficiency:**
    *   **Low $\tan \delta$:** Results in higher radiation efficiency by minimizing dielectric losses.
    *   **Low $\epsilon_r$:** Generally leads to higher radiation efficiency as less energy is lost in the dielectric.
    *   **Surface Waves:** High $\epsilon_r$ and thicker substrates can support surface waves, which propagate along the dielectric-conductor interface, carrying energy away from the antenna and reducing radiation efficiency.

*   **Polarization Purity:**
    *   Substrate properties can influence the excitation of spurious modes, potentially affecting polarization purity. Non-uniform substrates or fabrication imperfections can also cause issues.

*   **Conductor and Dielectric Losses:**
    *   **Conductor Losses:** Depend on the conductivity of the metal patch and the fields present.
    *   **Dielectric Losses:** Directly proportional to $\tan \delta$ and the energy stored in the dielectric. Higher $\tan \delta$ means higher dielectric losses.

**Examples:**

*   A patch antenna designed for a mobile phone (requiring miniaturization) might use a substrate with a high $\epsilon_r$ like a ceramic material, accepting a narrower bandwidth and potentially lower efficiency.
*   A high-performance radar antenna requiring wide bandwidth and efficiency would likely use a low-loss PTFE-based substrate with a moderate $\epsilon_r$ and thicker dimensions.

**Reference:**
*   Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.). Wiley. (Chapter 12 discusses the effect of substrate thickness and dielectric constant on transmission line characteristics and radiating elements).
*   Garg, R. (2001). *Microstrip Antenna Design Handbook*. Artech. (Chapter 3 analyzes the effects of substrate thickness and dielectric constant on various antenna parameters).
*   Choudhury, S. (2023). *Reconfigurable Antennas* (2nd ed.). IoP Publishing. (Discussion of reconfigurable antennas often touches upon substrate choices that allow for tuning and compact designs).

---

### **5. Surface Waves in Microstrip Antennas**

Surface waves are electromagnetic waves that propagate along the interface between dielectric and conductor. They are a significant loss mechanism in microstrip antennas, especially when using substrates with high dielectric constants or larger thicknesses.

**Key Concepts:**

*   **Definition:** Electromagnetic energy guided along the interface of a dielectric medium and a conductor.
*   **Generation:** Excited by the fields of the radiating element when the substrate thickness and dielectric constant are sufficiently large.
*   **Impact:**
    *   **Reduced Radiation Efficiency:** Energy is lost as surface waves propagate away from the antenna.
    *   **Degraded Impedance Matching:** Can distort the input impedance and radiation pattern.
    *   **Cross-polarization:** Can lead to increased cross-polarized radiation.
*   **Suppression Techniques:**
    *   **Using Low Dielectric Constant Materials:** Reduces the tendency to support surface waves.
    *   **Using Thin Substrates:** Limits the propagation of surface waves.
    *   **Using Cavity or Ground Plane Backing:** Can influence surface wave modes.
    *   **Using Dielectric Layers or Slots:** Techniques to break or absorb surface waves.
    *   **Using Radiating Elements with Enhanced Radiation Efficiency:** Careful design of the radiating element itself.

**Reference:**
*   Garg, R. (2001). *Microstrip Antenna Design Handbook*. Artech. (Chapter 3 elaborates on surface waves and their impact).
*   Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.). Wiley. (Section 12.2.3 discusses surface waves and their effects).
*   Collin, R. E. (2001). *Antennas and Radio Wave Propagation* (2nd ed.). McGraw Hill. (Chapter 10 discusses wave propagation in dielectric media, relevant to understanding surface waves).

---

### **6. Advanced Substrate Materials and Concepts**

Beyond traditional dielectrics, advancements in materials science have led to new substrate options for specialized antenna applications.

**Emerging Trends:**

*   **Metamaterial Substrates:**
    *   **Characteristics:** Engineered materials with subwavelength structures that exhibit electromagnetic properties not found in nature. Can be used to manipulate wave propagation, achieve miniaturization, and enhance bandwidth.
    *   **Applications:** Miniaturized antennas, enhanced directivity, beam steering.
    *   **Reference:** Singh, A. K., Abegaonkar, M. P., & Koul, S. K. (2021). *Metamaterials for Antenna Applications* (2nd ed.). CRC Press.

*   **Flexible and Stretchable Substrates:**
    *   **Characteristics:** Polyimide, fabric-based substrates, conductive elastomers. Allow for conformal and wearable antenna designs.
    *   **Applications:** Wearable electronics, IoT devices, medical implants.
    *   **Reference:** Choudhury, S. (2023). *Reconfigurable Antennas* (2nd ed.). IoP Publishing. (Flexible substrates are often used in reconfigurable antenna designs).

*   **Low-Temperature Co-Fired Ceramic (LTCC):**
    *   **Characteristics:** Allows for multi-layer integration of antennas, passive components, and active circuits on a single substrate.
    *   **Applications:** Integrated RF modules, compact communication systems.

*   **Liquid Crystal Polymers (LCP):**
    *   **Characteristics:** Low dielectric loss, good thermal stability, excellent dimensional stability, suitable for high-frequency applications.
    *   **Applications:** High-speed digital circuits, millimeter-wave antennas.

**Reference:**
*   Pozar, D. M. (2012). *Microwave Engineering* (4th ed.). Wiley India. (While not directly on advanced substrates, the principles of microwave engineering are foundational for understanding their application).
*   Milligan, T. A. (2005). *Modern Antenna Design* (2nd ed.). IEEE PRESS, Wiley Inter science. (Discusses various antenna design considerations where substrate choice is paramount).

---

### **7. Learning Outcome Alignment**

This topic directly contributes to understanding the fundamental building blocks of microstrip antennas, which is essential for analyzing their radiation mechanism.

*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3):** Understanding substrate properties ($\epsilon_r$, $h$, $\tan \delta$) is crucial for analyzing how the electromagnetic fields are guided, confined, and radiated by the antenna structure. Dielectric losses and surface wave excitation directly impact the efficiency of the radiation process.
*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4):** The selection of an appropriate substrate is a primary step in designing a microstrip antenna. Antenna parameters like bandwidth, efficiency, resonant frequency, and size are heavily dependent on the substrate choice. Practical measurement of these parameters will be influenced by the substrate's inherent properties.
*   **CO3: Analyse and design advanced antennas (Knowledge Level: K4):** Advanced antenna designs often rely on specialized substrates, such as metamaterials or flexible materials, to achieve specific performance goals. Understanding the impact of these substrates is key to their analysis and design.
*   **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2):** While this topic focuses on the antenna itself, the substrate's role in potentially supporting or suppressing surface waves indirectly relates to wave propagation phenomena. Surface waves are a mode of propagation guided by the dielectric-conductor interface.

---

### **8. Important Points to Remember**

*   **Substrates are the dielectric backbone of microstrip antennas.**
*   **Dielectric Constant ($\epsilon_r$) affects antenna size (higher $\epsilon_r$ = smaller size) and bandwidth (higher $\epsilon_r$ = narrower bandwidth).**
*   **Loss Tangent ($\tan \delta$) dictates dielectric losses and thus radiation efficiency (lower $\tan \delta$ = higher efficiency).**
*   **Substrate Thickness ($h$) influences bandwidth and surface wave excitation (thicker = wider bandwidth but more surface waves).**
*   **PTFE-based substrates (like Duroid) are preferred for high-performance applications due to low loss.**
*   **FR-4 is a cost-effective option for less demanding applications.**
*   **Surface waves are a major loss mechanism to be mitigated through careful substrate selection and design.**
*   **Advanced materials are enabling new functionalities and miniaturization in microstrip antennas.**

---

### **9. Practice Questions and Answers**

**Question 1:** A microstrip patch antenna is to be designed for a portable communication device requiring a compact size. Which of the following substrate properties would be most beneficial for miniaturization?
    a) Low dielectric constant ($\epsilon_r$) and thin substrate ($h$).
    b) High dielectric constant ($\epsilon_r$) and thick substrate ($h$).
    c) High dielectric constant ($\epsilon_r$) and thin substrate ($h$).
    d) Low dielectric constant ($\epsilon_r$) and thick substrate ($h$).

**Answer 1:** c) High dielectric constant ($\epsilon_r$) and thin substrate ($h$). A high $\epsilon_r$ confines the electromagnetic fields more tightly, reducing the effective wavelength and hence the antenna dimensions. A thin substrate, while potentially reducing bandwidth, is often a trade-off for miniaturization.

**Question 2:** What is the primary disadvantage of using a substrate with a very high dielectric constant ($\epsilon_r$) for microstrip antennas?
    a) Increased antenna size.
    b) Reduced radiation efficiency and narrower bandwidth.
    c) Lower dielectric losses.
    d) Improved surface wave propagation.

**Answer 2:** b) Reduced radiation efficiency and narrower bandwidth. High $\epsilon_r$ materials tend to confine fields more, leading to less radiation. They also increase the propensity for surface waves, which carry energy away, reducing efficiency and bandwidth.

**Question 3:** List two commonly used low-loss substrate materials for high-performance microstrip antennas and state their key advantage.

**Answer 3:**
1.  **PTFE (Polytetrafluoroethylene) - Teflon:** Key advantage is its very low loss tangent ($\tan \delta < 0.001$), leading to high radiation efficiency.
2.  **Duroid (e.g., RT/duroid series):** Key advantage is a good balance of low dielectric loss and mechanical robustness, often used in conjunction with PTFE.

**Question 4:** Explain why minimizing the loss tangent ($\tan \delta$) of a substrate is crucial for antenna efficiency.

**Answer 4:** The loss tangent quantifies the dielectric losses within the substrate material. When an alternating electric field is applied (as is the case within an antenna), the dielectric material absorbs some of this energy and dissipates it as heat. A high loss tangent means more energy is lost in the dielectric, which reduces the amount of power that can be radiated by the antenna, thereby lowering its overall radiation efficiency.

**Question 5:** What are surface waves in the context of microstrip antennas, and how can their negative impact be mitigated?

**Answer 5:** Surface waves are electromagnetic waves that propagate along the interface between the dielectric substrate and the ground plane. They represent a significant loss mechanism, reducing radiation efficiency and potentially distorting the radiation pattern.
Mitigation techniques include:
*   Using substrates with low dielectric constants.
*   Using thinner substrates.
*   Designing the radiating element to minimize excitation of surface waves.
*   Employing techniques like slots or parasitic elements to absorb or scatter surface waves.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
