---
title: "Hetero junctions  -Modulation-doped hetero junctions- SiGe strained hetero structures- MODFET- Resonant tunnelling-Resonant tunnelling transistor"
subject: "NANOELECTRONICS"
module: "Module 4: Applications of Quantum mechanics and Quantum devices"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780feee0"
status: "completed"
scrapedAt: "2026-05-23T18:02:05.526Z"
---
# NANOELECTRONICS: Module 4 - Applications of Quantum Mechanics and Quantum Devices

## Topic: Heterojunctions and Quantum Devices

### 1. Introduction to Heterojunctions

**Definition:** A heterojunction is an interface between two different semiconductor materials. The properties of this interface are significantly different from those of a homojunction (interface between two regions of the same semiconductor with different doping).

**Key Concepts:**

*   **Band Gap Engineering:** By choosing different semiconductor materials, we can engineer the band gaps of the materials at the junction, leading to unique electronic and optical properties.
*   **Band Offset:** When two semiconductors are brought together, their energy bands align in a specific way, resulting in discontinuities in the conduction band ($E_c$) and valence band ($E_v$). This discontinuity is known as the band offset ($\Delta E_c$ and $\Delta E_v$).
    *   $\Delta E_c = E_{c1} - E_{c2}$ (Conduction Band Offset)
    *   $\Delta E_v = E_{v1} - E_{v2}$ (Valence Band Offset)
    *   The total band gap difference is $\Delta E_g = E_{g1} - E_{g2} = (\Delta E_c + \Delta E_v)$.
*   **Conduction Band Offset (CBO) and Valence Band Offset (VBO):** These offsets determine how charge carriers will move and be confined at the interface.
*   **Charge Transfer and Built-in Potential:** Similar to homojunctions, charge transfer occurs across the heterojunction due to differences in Fermi levels, creating a built-in electric field and potential.

**Importance:** Heterojunctions are crucial for creating novel electronic and optoelectronic devices because they allow for:
    *   **Carrier Confinement:** Creating potential wells for electrons or holes.
    *   **Enhanced Mobility:** Achieving higher carrier mobilities.
    *   **Tunable Properties:** Tailoring device characteristics by selecting appropriate materials.

**References:**
*   Taur & Ning, "Fundamentals of Modern VLSI Devices," Chapter 6 (Heterojunctions).
*   Goser, GlÖsekötter, & Dienstuhl, "Nanoelectronics and Nanosystems," Chapter 5 (Quantum Mechanical Effects in Nanoscale Devices).
*   Hanson, "Fundamentals of Nanoelectronics," Chapter 5 (Quantum Phenomena in Heterostructures).

---

### 2. Modulation-Doped Heterojunctions (MDHs)

**Definition:** A modulation-doped heterojunction is a heterojunction where the dopant atoms are intentionally placed in one material (the donor layer) but are spatially separated from the interface with the other material (the channel layer).

**Key Concepts:**

*   **Spatial Separation of Carriers and Dopants:** The donors are in a wider bandgap material, and the acceptors (if any) are in a narrower bandgap material. Carriers (e.g., electrons) are donated from the donor atoms but are physically located in the narrower bandgap material, away from the ionized donor cores.
*   **Two-Dimensional Electron Gas (2DEG):** This spatial separation leads to a very high mobility electron gas confined to a narrow region at the heterojunction interface. The 2DEG is "modulated" by the doping in the adjacent layer.
*   **Formation of 2DEG:**
    1.  Dopants in the wider bandgap material donate carriers.
    2.  These carriers move across the heterojunction into the narrower bandgap material due to the potential difference.
    3.  The carriers accumulate at the interface, forming a potential well.
    4.  The band bending in the narrower bandgap material creates a quantum well where the carriers are confined to a 2D space.
*   **Benefits:** The primary benefit is the significant increase in carrier mobility because the carriers are "modulated" away from the scattering centers (ionized dopants) in the donor layer.

**Example:** The AlGaAs/GaAs heterojunction is a classic example. AlGaAs (wider bandgap) is doped n-type, and GaAs (narrower bandgap) is undoped. Electrons transfer from AlGaAs to GaAs, forming a 2DEG in the GaAs.

**References:**
*   Taur & Ning, "Fundamentals of Modern VLSI Devices," Chapter 6.
*   Goser, GlÖsekötter, & Dienstuhl, "Nanoelectronics and Nanosystems," Chapter 5.
*   Hanson, "Fundamentals of Nanoelectronics," Chapter 5.
*   Lundstrom, "Fundamentals of Carrier Transport," Chapter 8 (High-Field Transport and Heterostructures).

---

### 3. SiGe Strained Heterostructures

**Definition:** These are heterostructures where silicon (Si) and silicon-germanium (SiGe) alloys are grown epitaxially on a substrate, often leading to strain in one or both materials due to lattice mismatch.

**Key Concepts:**

*   **Lattice Mismatch:** Si and Ge have different lattice constants. Growing SiGe on Si (or vice-versa) can induce strain.
*   **Strain Engineering:**
    *   **Tensile Strain:** Stretching the lattice (e.g., growing Si on SiGe with a higher Ge content). This can lower the conduction band edges and reduce effective mass, increasing electron mobility.
    *   **Compressive Strain:** Compressing the lattice (e.g., growing SiGe on Si). This can affect the band structure and hole mobility.
*   **Impact on Band Structure:** Strain modifies the energy band structure, particularly the position of the conduction band valleys and valence band maxima.
    *   **Conduction Band:** In Si, the conduction band minima are along the $\Delta$ lines. Tensile strain can split these valleys and lower their energy, reducing the effective mass in certain directions, leading to enhanced electron mobility.
    *   **Valence Band:** Compressive strain can split the heavy hole (HH) and light hole (LH) bands, raising the LH band and lowering the HH band. This can lead to higher hole mobility.
*   **Application in MOSFETs:** Strained Si and SiGe are used in modern MOSFETs (especially FinFETs) to boost drive current by improving electron and hole mobilities.

**Example:** Strained Si MOSFETs where a thin layer of relaxed SiGe is grown on the Si substrate, followed by a thin layer of Si. The Si layer is under tensile strain, enhancing electron mobility.

**References:**
*   Taur & Ning, "Fundamentals of Modern VLSI Devices," Chapter 6.
*   Colinge, "FinFETs and Other multigate Transistors," Chapter 4 (Strain Engineering).
*   Huff & Gilmer, "High Dielectric Constant materials VLSI MOSFET Applications," Chapter 14 (Strain Engineering for CMOS).

---

### 4. MODFET (Modulation-Doped Field-Effect Transistor)

**Definition:** A MODFET (also known as HEMT - High Electron Mobility Transistor) is a field-effect transistor that utilizes a modulation-doped heterojunction to create a high-mobility 2DEG channel.

**Structure:**

*   **Gate:** Controls the conductivity of the 2DEG channel.
*   **Source & Drain:** Contacts to the 2DEG channel.
*   **Heterojunction:** Typically formed by a wide bandgap donor layer (e.g., AlGaAs) and a narrow bandgap channel layer (e.g., GaAs or SiGe).
*   **Doping:** The donor layer is doped, and the channel layer is undoped (or lightly doped).

**Operation:**

1.  Applying a gate voltage modulates the charge density in the 2DEG channel.
2.  A positive gate voltage attracts electrons from the donor layer into the 2DEG, increasing conductivity.
3.  A negative gate voltage depletes electrons from the 2DEG, reducing conductivity.
4.  The high mobility of the 2DEG allows for very high switching speeds and low noise operation.

**Advantages:**

*   **High Electron Mobility:** Due to the 2DEG in the undoped channel.
*   **High Speed:** Faster switching speeds compared to conventional MOSFETs.
*   **Low Noise:** Reduced scattering from ionized dopants.

**Applications:**
*   High-frequency amplifiers (e.g., in mobile phones, satellite communications).
*   Low-noise amplifiers.
*   High-speed digital circuits.

**References:**
*   Taur & Ning, "Fundamentals of Modern VLSI Devices," Chapter 6.
*   Goser, GlÖsekötter, & Dienstuhl, "Nanoelectronics and Nanosystems," Chapter 5.
*   Hanson, "Fundamentals of Nanoelectronics," Chapter 5.
*   Lundstrom & Guo, "Nanoscale Transistors," Chapter 4 (Heterostructure FETs).

---

### 5. Resonant Tunneling

**Definition:** Resonant tunneling is a quantum mechanical phenomenon where electrons can tunnel through a potential barrier much more efficiently when their energy matches a quasi-bound state (or resonance) within the barrier region.

**Key Concepts:**

*   **Potential Barrier:** A region with a higher potential energy.
*   **Quantum Well:** A region of lower potential energy surrounded by barriers.
*   **Quantized Energy Levels:** In a quantum well, electrons can only exist at discrete energy levels.
*   **Resonance Condition:** Tunneling probability is significantly enhanced when the incident electron's energy ($E$) is equal to one of the quantized energy levels ($E_n$) within the quantum well.
    *   $E = E_n$
*   **Transmission Coefficient ($T(E)$):** This describes the probability of an electron tunneling through a barrier. For resonant tunneling, $T(E)$ exhibits sharp peaks at the resonance energies.
*   **Scattering and Decay:** The quasi-bound states are not truly bound due to the finite nature of the well and the presence of incoming and outgoing waves. They have a finite lifetime, leading to broadening of the energy levels.

**Analogy:** Imagine trying to throw a ball through a narrow opening. It's much easier if you throw it with a speed that excites a resonant vibration of the opening's frame.

**References:**
*   Datta, "Quantum Transport Atom to Transistor," Chapter 3 (Quantum Mechanics of Tunneling).
*   Goser, GlÖsekötter, & Dienstuhl, "Nanoelectronics and Nanosystems," Chapter 5.
*   Hanson, "Fundamentals of Nanoelectronics," Chapter 4 (Quantum Tunneling).
*   Griffiths & Schroetter, "Introduction to Quantum Mechanics," Chapter on Quantum Tunneling.

---

### 6. Resonant Tunneling Transistor (RTT)

**Definition:** A transistor that exploits the phenomenon of resonant tunneling to control current flow. The key element is a quantum mechanical structure (often a Double Barrier Quantum Well - DBQW) that exhibits negative differential resistance (NDR).

**Structure (Double Barrier Quantum Well - DBQW):**

*   Consists of two thin potential barriers (e.g., AlGaAs) separated by a thin quantum well layer (e.g., GaAs).
*   The entire structure is embedded within a semiconductor material.
*   Contacts are made to the regions on either side of the DBQW.

**Operation:**

1.  **Low Bias:** No current flows as there are no available states for tunneling.
2.  **Resonant Tunneling:** As the bias voltage increases, the Fermi level in the source region aligns with a quantized energy level ($E_1$) in the quantum well. Electrons tunnel through the first barrier into the well, occupy the quantized state, and then tunnel through the second barrier into the drain region. This leads to a sharp increase in current.
3.  **Current Peak:** The current reaches a peak when the incident electron energy matches the resonance condition.
4.  **Negative Differential Resistance (NDR):** As the bias is further increased, the energy levels in the well shift relative to the Fermi level of the source. Tunneling through the well becomes less efficient, and the current starts to decrease. This region of decreasing current with increasing voltage is called NDR.
5.  **Off State:** At even higher bias, the energy levels in the well are completely misaligned with the source Fermi level, and tunneling ceases, resulting in a very low current.

**Current-Voltage (I-V) Characteristics:** The I-V curve exhibits a peak followed by a valley, characteristic of NDR.

**Types of RTTs:**

*   **RTDL (Resonant Tunneling Diode Logic):** Utilizes the NDR of RTDs for logic functions.
*   **MQW (Multiple Quantum Well) RTTs:** Employ multiple quantum wells.
*   **HEMT-based RTTs:** Integrate resonant tunneling structures with MODFET structures.

**Advantages:**

*   **High Speed Operation:** Due to quantum tunneling.
*   **Low Power Consumption:** Can achieve high performance with low power.
*   **Potential for Novel Logic:** NDR enables new logic paradigms.

**Challenges:**

*   **Fabrication Complexity:** Requires precise control over layer thicknesses and material interfaces.
*   **NDR Amplitude:** The magnitude of NDR can be limited.
*   **Integration with CMOS:** Integrating RTTs with conventional silicon technology is challenging.

**Applications:**
*   High-frequency oscillators.
*   High-speed logic circuits.
*   Terahertz devices.
*   Multi-valued logic circuits.

**References:**
*   Datta, "Quantum Transport Atom to Transistor," Chapter 6 (Resonant Tunneling Devices).
*   Goser, GlÖsekötter, & Dienstuhl, "Nanoelectronics and Nanosystems," Chapter 5.
*   Hanson, "Fundamentals of Nanoelectronics," Chapter 6 (Quantum Tunneling Devices).
*   Martinez Duart, Martin Palma, & Rueda, "Nanotechnology for microelectronics and optoelectronics," Chapter 10 (Quantum Devices).

---

## Learning Outcome Coverage & Course Outcome Alignment

*   **LO: Hetero junctions:** Covered in Section 1. Aligns with CO1 (challenges of scaling), CO3 (quantum transport), CO4 (quantum mechanics in materials/devices).
*   **LO: Modulation-doped hetero junctions:** Covered in Section 2. Aligns with CO1, CO3, CO4.
*   **LO: SiGe strained hetero structures:** Covered in Section 3. Aligns with CO1, CO2 (design novel devices), CO4.
*   **LO: MODFET:** Covered in Section 4. Aligns with CO1, CO2, CO3, CO4.
*   **LO: Resonant tunnelling:** Covered in Section 5. Aligns with CO1, CO3, CO4.
*   **LO: Resonant tunnelling transistor:** Covered in Section 6. Aligns with CO1, CO2, CO3, CO4.

---

## Practice Questions & Answers

**Question 1:** What is the primary advantage of using a modulation-doped heterojunction for carrier transport?
    a) Increased scattering
    b) Spatial separation of carriers from dopants leading to higher mobility
    c) Creation of a bulk electron gas
    d) Reduced band offset

**Answer:** b) Spatial separation of carriers from dopants leading to higher mobility

**Question 2:** How does tensile strain in Si affect its electron mobility?
    a) Decreases it by increasing effective mass
    b) Decreases it by raising the conduction band valleys
    c) Increases it by lowering specific conduction band valleys and reducing effective mass
    d) Has no significant effect

**Answer:** c) Increases it by lowering specific conduction band valleys and reducing effective mass

**Question 3:** In a Resonant Tunneling Transistor (RTT), what condition leads to the peak current?
    a) The Fermi level in the source is far below the quantized energy level in the well.
    b) The electron energy matches a quantized energy level in the quantum well, allowing for efficient tunneling through both barriers.
    c) The quantum well is completely empty.
    d) The bias voltage is zero.

**Answer:** b) The electron energy matches a quantized energy level in the quantum well, allowing for efficient tunneling through both barriers.

**Question 4:** Briefly explain why MODFETs achieve higher operating speeds than conventional MOSFETs.
    **Answer:** MODFETs utilize modulation doping at a heterojunction to create a Two-Dimensional Electron Gas (2DEG) in an undoped channel. This spatial separation of electrons from ionized dopants significantly reduces impurity scattering, leading to much higher electron mobility and thus faster electron transport and higher operating speeds.

**Question 5:** What is Negative Differential Resistance (NDR) and where is it observed in the context of resonant tunneling devices?
    **Answer:** Negative Differential Resistance (NDR) is a characteristic where the current through a device *decreases* as the voltage across it *increases* over a certain range. In resonant tunneling devices like the Resonant Tunneling Transistor (RTT), NDR is observed after the peak current point, as the alignment between the incoming electron energy and the quantized energy levels in the quantum well is lost with increasing bias, reducing tunneling probability.

---

## Important Points to Remember

*   **Heterojunctions:** Key to band gap engineering and creating unique device functionalities due to band offsets.
*   **Modulation Doping:** Crucial for creating 2DEGs with very high carrier mobility by separating carriers from ionized dopants.
*   **Strain Engineering (SiGe):** A powerful technique to boost transistor performance (especially mobility) by modifying the semiconductor band structure.
*   **MODFETs (HEMTs):** Directly leverage modulation-doped heterojunctions for high-speed, low-noise applications.
*   **Resonant Tunneling:** A quantum phenomenon where tunneling probability is greatly enhanced when incident electron energy matches quantized levels in a quantum well. This leads to sharp transmission peaks.
*   **Resonant Tunneling Transistors (RTTs):** Utilize resonant tunneling to achieve Negative Differential Resistance (NDR), enabling novel high-speed and low-power circuit designs.
*   **Scaling Challenges (CO1):** Heterojunctions and quantum effects become dominant as devices scale down, necessitating the use of advanced materials and structures like MODFETs and RTTs to overcome limitations.
*   **Device Design (CO2):** Techniques like strain engineering and heterojunction design are essential for creating high-performance transistors that mitigate short-channel effects and boost mobility.
*   **Quantum Transport (CO3):** The operation of MODFETs (2DEG formation) and RTTs (tunneling through quantized states) are direct manifestations of quantum transport principles.
*   **Quantum Mechanics in Devices (CO4):** Resonant tunneling, band offsets, and carrier confinement in quantum wells are all direct applications of quantum mechanical concepts in device physics.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
