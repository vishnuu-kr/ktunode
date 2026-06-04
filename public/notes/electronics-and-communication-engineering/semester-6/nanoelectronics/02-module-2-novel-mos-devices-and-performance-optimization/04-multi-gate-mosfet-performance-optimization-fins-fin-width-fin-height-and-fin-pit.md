---
title: "Multi Gate MOSFET performance optimization : Fins, Fin Width, Fin Height and Fin Pitch, Fin Surface Crystal Orientation, Fins on Bulk Silicon, Nano-wires. Gate Stack, Gate Patterning, Threshold Voltage and Gate Work function requirements, Poly silicon Gate, Metal Gate, Tunable Work function metal gate, Mobility and Strain Engineering, Nitride Stress Liners, Embedded SiGe and SiC Source and Drain, Local Strain from Gate Electrode, Substrate Strain, Strained Silicon on Insulator."
subject: "NANOELECTRONICS"
module: "Module 2: Novel MOS Devices and Performance Optimization"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780feed5"
status: "completed"
scrapedAt: "2026-05-23T18:01:57.450Z"
---
# Module 2: Novel MOS Devices and Performance Optimization

## Topic: Multi-Gate MOSFET Performance Optimization

This module delves into the critical aspects of optimizing the performance of Multi-Gate MOSFETs, which are essential for continuing Moore's Law and enabling advanced nanoelectronic devices. We will explore various physical and electrical parameters, fabrication techniques, and material choices that contribute to enhanced device characteristics.

---

### 1. Multi-Gate MOSFET Structures: Fins, Fin Width, Fin Height, and Fin Pitch

#### 1.1 Introduction to Multi-Gate MOSFETs

*   **Motivation:** As conventional planar MOSFETs scale down, short-channel effects (SCEs) become dominant, leading to poor performance and increased leakage. Multi-gate MOSFETs (MuGFETs) offer superior electrostatic control over the channel, mitigating SCEs.
*   **Types of MuGFETs:**
    *   **Double-Gate (DG) MOSFET:** Channel is controlled by two gates on opposite sides.
    *   **Tri-Gate (TG) / FinFET:** Channel is a fin-like structure, controlled by three gates (top and two vertical sides).
    *   **Quad-Gate (QG) MOSFET:** Channel is controlled by gates on all four sides (less common in mainstream CMOS).
*   **Key Advantage:** Enhanced gate control reduces drain-induced barrier lowering (DIBL) and subthreshold swing (SS), leading to lower leakage and better power efficiency.

#### 1.2 FinFET Structure and its Parameters

*   **FinFET:** A prominent MuGFET structure where the channel is a vertical silicon fin. The gate wraps around the fin, providing excellent electrostatic coupling.
*   **Fin Width ($W_{fin}$):**
    *   **Definition:** The physical width of the silicon fin.
    *   **Impact:** Crucial for channel conductivity and drive current. Smaller $W_{fin}$ improves SCE control but can reduce current drive. It also influences the effective channel width.
    *   **Optimization:** Narrower fins are essential for continued scaling, but fabrication challenges arise.
    *   *Reference:* Taur & Ning, Chapter 7 (Multigate MOSFETs).
*   **Fin Height ($H_{fin}$):**
    *   **Definition:** The vertical dimension of the silicon fin.
    *   **Impact:** Determines the volume of the conductive channel and affects the degree of gate coupling. A taller fin can increase current drive but also increases the gate-to-source/drain capacitance.
    *   **Optimization:** The fin height is often designed in conjunction with the fin width to achieve optimal gate control and drive current.
    *   *Reference:* Colinge, Chapter 3 (FinFETs).
*   **Fin Pitch ($P_{fin}$):**
    *   **Definition:** The spacing between adjacent fins.
    *   **Impact:** Directly relates to the device density and the performance per unit area. Smaller pitch allows for higher integration.
    *   **Optimization:** Advanced lithography techniques are crucial for achieving smaller fin pitches.
    *   *Reference:* Colinge, Chapter 3 (FinFETs).

#### 1.3 Fins on Bulk Silicon vs. Silicon-on-Insulator (SOI)

*   **Fins on Bulk Silicon:**
    *   **Structure:** Fins are etched into a bulk silicon wafer.
    *   **Advantages:** Potentially lower cost, simpler integration with existing bulk CMOS processes.
    *   **Disadvantages:** Susceptible to parasitic leakage paths through the bulk substrate, requiring careful isolation techniques (e.g., shallow trench isolation - STI).
*   **Fins on Silicon-on-Insulator (SOI):**
    *   **Structure:** Fins are formed on a thin silicon layer above a buried oxide (BOX) layer.
    *   **Advantages:** The BOX layer provides excellent isolation, significantly reducing junction leakage and substrate coupling. This leads to improved speed and reduced parasitic capacitances.
    *   **Disadvantages:** SOI wafers are generally more expensive. Potential issues with self-heating due to the insulating BOX.
    *   *Reference:* Taur & Ning, Chapter 7 (SOI MOSFETs and Multigate MOSFETs).

#### 1.4 Nano-wires

*   **Definition:** Ultra-thin, one-dimensional (1D) structures with diameters in the nanometer range. In nano-wire FETs (NWFETs), the channel is a cylindrical or nanowire-like semiconductor.
*   **Structure:** Gate can wrap around the nanowire (Gate-All-Around - GAA) or be positioned laterally.
*   **Advantages:** Offer near-ideal electrostatic control due to the high surface-to-volume ratio. Can provide very high drive currents for a given footprint.
*   **Challenges:** Fabrication of uniform nanowires, precise gate alignment, and managing quantum mechanical effects.
*   **Types:** Silicon nanowires, InAs nanowires, etc.
*   *Reference:* Goser et al., Chapter 3 (MOSFETs and their scaling) and Chapter 5 (Nanomaterials).

---

### 2. Gate Stack and Gate Patterning for Performance Optimization

#### 2.1 Gate Stack Engineering

*   **Purpose:** The gate stack (gate dielectric and gate electrode) plays a crucial role in controlling the channel and determining the device's electrical characteristics.
*   **High-k Dielectrics:**
    *   **Need:** As gate oxide thickness scales down, direct tunneling current through SiO2 becomes significant, leading to leakage. High-k dielectrics (e.g., HfO2, ZrO2) allow for a physically thicker gate dielectric while maintaining the same electrical capacitance, thus reducing leakage.
    *   **Equivalent Oxide Thickness (EOT):** A key metric for gate dielectric scaling. EOT = (k_SiO2 / k_high-k) * t_high-k.
    *   *Reference:* Huff & Gilmer (High Dielectric Constant materials VLSI MOSFET Applications).
*   **Gate Electrode:**
    *   **Poly-silicon Gate:** Traditional gate material. Can suffer from polysilicon depletion effect and Fermi-level pinning with high-k dielectrics.
    *   **Metal Gate:**
        *   **Advantages:** Eliminates polysilicon depletion effect, offers better compatibility with high-k dielectrics, and allows for work function engineering.
        *   **Challenges:** Process integration, gate resistance, and controlling work function for NMOS and PMOS.
        *   *Reference:* Taur & Ning, Chapter 7 (Metal Gates).
*   **Tunable Work Function Metal Gate:**
    *   **Concept:** Using metals or metal alloys whose work function can be adjusted to achieve desired threshold voltages for both NMOS and PMOS transistors within the same fabrication process. This is crucial for modern complementary logic.
    *   **Methods:** Alloying with different metals, controlling the interface between metal and high-k dielectric, using different metal caps.
    *   *Reference:* Taur & Ning, Chapter 7 (Work Function Engineering).

#### 2.2 Gate Patterning

*   **Definition:** The process of defining the gate electrode shape and dimensions using lithography and etching.
*   **Importance for MuGFETs:**
    *   **FinFETs:** The gate must precisely align with the fin to achieve optimal control. The "wrap-around" nature of the gate in FinFETs requires advanced patterning techniques.
    *   **Nano-wires:** Precise alignment of the gate along the nanowire is critical.
*   **Techniques:**
    *   **Deep Ultraviolet (DUV) Lithography:** Standard for current nodes.
    *   **Extreme Ultraviolet (EUV) Lithography:** Enables smaller feature sizes and tighter pitches for advanced nodes.
    *   **Directed Self-Assembly (DSA):** A promising technique for creating highly ordered patterns at the nanoscale.
*   **Challenges:** Achieving critical dimension (CD) control, sidewall roughness reduction, and multi-patterning complexity.

---

### 3. Threshold Voltage ($V_{th}$) and Gate Work Function Requirements

#### 3.1 Threshold Voltage ($V_{th}$)

*   **Definition:** The minimum gate-to-source voltage ($V_{GS}$) required to turn on the transistor and create a conductive channel between the source and drain.
*   **Importance:** $V_{th}$ is a fundamental parameter that dictates the switching speed, leakage current, and power consumption of a MOSFET.
*   **Factors Affecting $V_{th}$:**
    *   **Gate Work Function ($\Phi_M$):** The work function difference between the gate electrode and the semiconductor.
    *   **Gate Dielectric Material and Thickness:** The dielectric constant (k) and physical thickness.
    *   **Channel Doping:** Higher doping leads to a higher $V_{th}$.
    *   **Body Effect:** Voltage applied to the substrate.
    *   **SCEs:** Short channel effects tend to lower $V_{th}$ and increase DIBL.
    *   **Quantum Mechanical Effects:** Confinement in ultra-thin channels can shift $V_{th}$.
*   **$V_{th}$ Roll-off:** In short-channel devices, $V_{th}$ decreases as the channel length decreases due to the influence of the source and drain doping. MuGFETs significantly suppress $V_{th}$ roll-off.
*   **$V_{th}$ for NMOS and PMOS:** For complementary logic, NMOS and PMOS transistors need appropriate $V_{th}$ values to balance drive current and leakage.

#### 3.2 Gate Work Function Requirements

*   **Work Function of Gate Electrode ($\Phi_M$):**
    *   **Relationship with $V_{th}$:** In a simplified model, $V_{th} \approx \Phi_{MS} - \frac{Q_{sub}}{C_{ox}}$, where $\Phi_{MS}$ is the metal-semiconductor work function difference.
    *   **NMOS:** To achieve a low positive $V_{th}$ for NMOS, the gate work function should be close to the electron affinity of silicon (e.g., aluminum, titanium nitride).
    *   **PMOS:** To achieve a low negative $V_{th}$ for PMOS, the gate work function should be close to the work function of silicon relative to holes (e.g., Tungsten, Molybdenum).
*   **Polysilicon Gate:**
    *   **Fermi Level Pinning:** When polysilicon gates are used with high-k dielectrics, the Fermi level of the polysilicon tends to get "pinned" at defect states at the high-k/polysilicon interface, making it difficult to tune the work function effectively. This leads to a parasitic barrier for electrons and a less negative threshold voltage for PMOS.
*   **Metal Gate:**
    *   **Advantages:** Offers greater flexibility in selecting materials with desired work functions for both NMOS and PMOS. Allows for "work function engineering" by choosing specific metals or alloys.
    *   **Example Materials:**
        *   **NMOS:** TiN, Al, TaN.
        *   **PMOS:** W, Mo, TaC.
*   **Tunable Work Function Metal Gate:**
    *   **Goal:** To achieve precisely controlled $V_{th}$ for both NMOS and PMOS using a single metal gate process, often by using metal silicides or alloys.
    *   **Example:** Using a combination of metals that, when deposited or annealed, create a tunable work function interface.

---

### 4. Mobility and Strain Engineering

#### 4.1 Mobility ($\mu$)

*   **Definition:** A measure of how easily charge carriers (electrons or holes) can move through a semiconductor material under the influence of an electric field. Higher mobility leads to higher drive current and faster switching speeds.
*   **Factors Affecting Mobility:**
    *   **Lattice Scattering:** Thermal vibrations of the crystal lattice scatter carriers. Increases with temperature.
    *   **Impurity Scattering:** Scattering by ionized dopant atoms. Dominant at low temperatures and high doping concentrations.
    *   **Surface Scattering:** In thin films and near interfaces (like in MOSFET channels), carriers are scattered by surface roughness and imperfections. This is a major limitation in scaled MOSFETs.
*   **Mobility in Multi-Gate Devices:**
    *   **Reduced Surface Scattering:** In FinFETs and NWFETs, the channel is often composed of silicon with specific crystal orientations or can be made intrinsically purer than bulk silicon, leading to reduced surface scattering.
    *   **Bulk vs. FinFET Mobility:** FinFETs, especially those with (110) surface orientation for holes, can achieve significantly higher mobility than planar devices due to reduced scattering.

#### 4.2 Strain Engineering

*   **Concept:** Applying mechanical strain to the silicon channel to modify its band structure and increase carrier mobility.
*   **Types of Strain:**
    *   **Tensile Strain:** Stretches the silicon lattice. Increases electron mobility by reducing intervalley scattering and effectively increasing the distance between the conduction band minima. Beneficial for NMOS.
    *   **Compressive Strain:** Compresses the silicon lattice. Increases hole mobility by splitting the valence band degeneracy and reducing scattering. Beneficial for PMOS.
*   **Methods for Inducing Strain:**
    *   **Nitride Stress Liners:**
        *   **Definition:** Depositing silicon nitride (SiNx) layers with built-in stress (either tensile or compressive) over the source and drain regions.
        *   **Mechanism:** When these stressed liners are patterned to cover the source/drain, they transfer the stress to the underlying silicon channel through the gate electrode.
        *   **Tensile Nitride:** Compresses the SiN, and when it expands, it stretches the underlying silicon.
        *   **Compressive Nitride:** Expands the SiN, and when it contracts, it compresses the underlying silicon.
        *   *Reference:* Taur & Ning, Chapter 7 (Strain Engineering).
    *   **Embedded SiGe and SiC Source and Drain:**
        *   **Silicon-Germanium (SiGe):** Germanium has a larger lattice constant than silicon. Embedding SiGe in the source and drain regions of a silicon channel induces tensile strain in the channel. This is highly effective for boosting NMOS performance.
        *   **Silicon-Carbide (SiC):** Silicon Carbide has a smaller lattice constant than silicon. Embedding SiC in the source and drain can induce compressive strain, which is beneficial for PMOS performance.
        *   *Reference:* Colinge, Chapter 3 (Strain Engineering).
    *   **Local Strain from Gate Electrode:**
        *   **Concept:** The gate electrode material and its processing can induce localized strain in the channel. For example, a metal gate with a different thermal expansion coefficient than silicon can create stress during thermal cycling.
    *   **Substrate Strain:**
        *   **Concept:** Applying strain to the entire substrate on which the transistor is built. This is less common for individual device optimization but can be used in certain applications.
    *   **Strained Silicon-on-Insulator (sSOI):**
        *   **Definition:** Using SOI wafers where the silicon layer itself is already strained. This can be achieved through epitaxial growth techniques.
        *   **Advantage:** Provides a uniformly strained channel without relying on local stress liners or embedded S/D. Can be combined with other strain techniques for further enhancement.
        *   *Reference:* Fossum & Trivedi (Fundamentals of Ultra-Thin-Body MOSFETs and FinFETs).

#### 4.3 Fin Surface Crystal Orientation

*   **Impact of Crystal Orientation:** The crystal orientation of the silicon fin surface significantly affects carrier mobility due to differences in atomic bonding and band structure.
*   **(100) Surface:** Standard for planar MOSFETs. Offers good balance but can have mobility limitations.
*   **In FinFETs:**
    *   **Holes on (110) Surface:** Hole mobility is significantly higher on the (110) surface compared to the (100) surface. This is due to the reduced mixing of heavy-hole and light-hole bands, leading to less effective mass. Therefore, for PMOS FinFETs, orienting the fins along the <110> direction (resulting in a (110) surface) is highly beneficial.
    *   **Electrons on (100) Surface:** Electron mobility is generally optimal on the (100) surface. For NMOS FinFETs, orienting the fins along a direction that exposes a (100) surface (e.g., along <100> direction, leading to a (100) surface on the vertical fin faces) is advantageous.
*   **Design Consideration:** Careful selection of lithography orientation and etch processes is needed to achieve the desired crystal orientation for NMOS and PMOS transistors in a FinFET process.
*   *Reference:* Colinge, Chapter 3 (FinFETs).

---

### 5. Nano-wire Fabrication and Operation (Brief Overview)

*   **Fabrication Methods:**
    *   **Top-Down:** Etching from a bulk wafer (e.g., using electron-beam lithography or focused ion beam).
    *   **Bottom-Up:** Growth of nanowires from precursors (e.g., vapor-liquid-solid - VLS growth, self-assembly).
*   **Device Operation:**
    *   **Gate Control:** Gate wraps around the nanowire (GAA) for maximum control.
    *   **Quantum Confinement:** In ultra-thin nanowires, quantum mechanical effects can become significant, affecting the density of states and carrier distribution.
    *   **Ballistic Transport:** In very short, defect-free nanowires, carriers might travel without scattering, leading to ballistic transport and extremely high current drive.
*   *Reference:* Goser et al., Chapter 5 (Nanomaterials and Devices).

---

### Important Points to Remember:

*   **SCE Mitigation:** Multi-gate structures are crucial for overcoming short-channel effects in scaled devices.
*   **Electrostatic Control:** The key to MuGFET performance is superior electrostatic coupling between the gate and the channel.
*   **FinFETs and NWFETs:** These are leading candidates for future transistor technologies.
*   **High-k/Metal Gate:** Essential for reducing leakage and enabling further scaling of gate dielectrics and electrodes.
*   **Work Function Engineering:** Critical for setting accurate threshold voltages in complementary logic.
*   **Strain Engineering:** A powerful tool to boost carrier mobility and drive current for both NMOS and PMOS.
*   **Crystal Orientation:** Significant impact on mobility, especially for holes in FinFETs.

---

### Practice Questions and Exercises

**Question 1:** Explain why short-channel effects become problematic in planar MOSFETs as they scale down, and how multi-gate MOSFETs address these issues. (CO1, K2)

**Answer:** As planar MOSFETs scale down, the gate's control over the channel weakens. The electric fields from the source and drain become comparable to the gate field, leading to:
1.  **Drain-Induced Barrier Lowering (DIBL):** The drain voltage lowers the potential barrier at the source, causing increased drain current even at low gate voltages.
2.  **Subthreshold Swing (SS) Degradation:** The SS, which represents how sharply the transistor switches from off to on, increases, leading to higher leakage in the off-state.
3.  **Threshold Voltage ($V_{th}$) Roll-off:** $V_{th}$ decreases as the channel length shrinks.

Multi-gate MOSFETs, such as FinFETs, surround the channel on multiple sides with the gate. This significantly improves the electrostatic control of the gate over the entire channel, effectively shielding it from the drain and source fields. This leads to:
1.  **Reduced DIBL:** The gate's strong control minimizes the impact of drain voltage on the channel barrier.
2.  **Steeper SS:** Closer to the ideal subthreshold swing (60 mV/decade at room temperature).
3.  **Suppressed $V_{th}$ Roll-off:** $V_{th}$ remains more constant with scaling.

**Question 2:** Discuss the advantages and disadvantages of using a metal gate compared to a polysilicon gate in modern MOSFETs, particularly in conjunction with high-k dielectrics. (CO2, K3)

**Answer:**
**Polysilicon Gate:**
*   **Advantages:** Well-established fabrication technology, low resistance.
*   **Disadvantages:**
    *   **Polysilicon Depletion Effect:** A depletion region forms at the polysilicon-dielectric interface, effectively increasing the EOT and reducing gate control.
    *   **Fermi Level Pinning:** With high-k dielectrics, defect states at the interface can pin the Fermi level of the polysilicon, making it difficult to achieve desired work functions for NMOS and PMOS, especially for PMOS where it leads to a less negative $V_{th}$.

**Metal Gate:**
*   **Advantages:**
    *   **Eliminates Polysilicon Depletion:** No depletion region forms at the metal-dielectric interface, allowing for lower EOT and better gate control.
    *   **Work Function Tunability:** A wide range of metal materials with different work functions are available, allowing for precise setting of $V_{th}$ for both NMOS and PMOS transistors through work function engineering. This is crucial for complementary logic.
    *   **Improved Compatibility with High-k:** Generally better integration and fewer Fermi level pinning issues with high-k dielectrics.
*   **Disadvantages:**
    *   **Process Complexity:** Can be more challenging to integrate into existing CMOS processes.
    *   **Gate Resistance:** Some metal gates can have higher resistance than polysilicon, potentially impacting performance.
    *   **Integration Challenges:** Achieving a stable and tunable work function interface requires careful material selection and process control.

**Question 3:** How does embedding SiGe in the source and drain regions of a silicon channel transistor enhance performance, and for which type of transistor (NMOS or PMOS) is this primarily beneficial? (CO2, K3)

**Answer:** Embedding Silicon-Germanium (SiGe) in the source and drain regions of a silicon channel transistor enhances performance through **strain engineering**.

*   **Mechanism:** Germanium atoms have a larger atomic radius and lattice constant than silicon atoms. When SiGe is epitaxially grown in the source and drain regions of a silicon channel, it exerts a **tensile strain** on the silicon channel due to the lattice mismatch.
*   **Benefit for NMOS:** Tensile strain in silicon splits the conduction band minima. It effectively lowers the energy of the valleys that are aligned with the strain, reducing intervalley scattering and increasing electron mobility. Higher electron mobility leads to higher drive current and faster switching speeds for NMOS transistors.
*   **Primary Benefit:** Therefore, embedding SiGe in the source and drain is primarily beneficial for enhancing the performance of **NMOS transistors**.
*   **For PMOS:** Compressive strain is beneficial for PMOS performance. This can be achieved by embedding materials with smaller lattice constants than silicon, such as Silicon Carbide (SiC), in the source and drain regions.

**Question 4:** Briefly explain the concept of "tunable work function metal gates" and why they are important for modern CMOS technology. (CO2, K2)

**Answer:** Tunable work function metal gates refer to the use of specific metal gate electrode materials or combinations of materials that allow their work function to be adjusted. This adjustment is crucial for setting the desired threshold voltage ($V_{th}$) for both NMOS and PMOS transistors within the same fabrication flow.

**Importance for Modern CMOS:**
1.  **Complementary Logic:** CMOS technology relies on both NMOS and PMOS transistors working together. To achieve balanced performance (equal drive current, low leakage), precise control over the $V_{th}$ of both types is essential.
2.  **Process Simplification:** Instead of using different gate materials for NMOS and PMOS (e.g., Al for NMOS, W for PMOS), a single tunable gate process simplifies fabrication and reduces manufacturing costs.
3.  **Overcoming Fermi Level Pinning:** As mentioned earlier, polysilicon gates with high-k dielectrics suffer from Fermi level pinning, limiting $V_{th}$ control. Metal gates, especially those designed for tunability, help overcome this.
4.  **Optimized $V_{th}$ for Scaled Devices:** With aggressive scaling, achieving low and consistent $V_{th}$ values is challenging. Tunable gates provide the flexibility to meet these stringent requirements.

**Question 5:** Consider a FinFET with a fin width of 10 nm and a fin height of 40 nm. If the fin is oriented such that the vertical fin faces have a (100) crystal plane, and it is used as an NMOS transistor, what is the expected impact on electron mobility compared to a planar MOSFET with a (100) channel surface? (CO2, K3)

**Answer:**
For an NMOS transistor with a (100) crystal plane on the vertical fin faces of a FinFET:

*   **FinFET Advantage:** The (100) surface orientation itself is generally good for electron mobility. However, the primary advantage of the FinFET structure for NMOS will come from **reduced surface scattering**. The gate wraps around the fin, and the channel is effectively formed in a volume that can be more "ideal" than the inversion layer in a planar MOSFET. The reduced gate-to-source/drain overlap and improved electrostatic control also contribute to better short-channel behavior, indirectly supporting higher effective mobility at lower gate overdrive voltages.
*   **Comparison to Planar MOSFET:** Compared to a planar MOSFET with a (100) channel surface, the FinFET NMOS is expected to have **higher electron mobility**. This is due to:
    *   **Reduced Surface Scattering:** The overall interface area to volume ratio is different, and the confinement can lead to less pronounced surface scattering mechanisms compared to the inversion layer in a planar device.
    *   **Potential for Lower Effective Mass:** The specific band structure modifications due to confinement and crystal orientation in the fin can lead to a lower effective mass for electrons in certain directions, further boosting mobility.
    *   **Suppression of SCEs:** Better short-channel control in FinFETs ensures that the device operates more ideally, allowing the intrinsic mobility benefits to be realized.

Therefore, the electron mobility in this NMOS FinFET is expected to be higher than in a comparable planar MOSFET, contributing to improved drive current and switching speed.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
