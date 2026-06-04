---
title: "Tunneling Through Gate Oxide"
subject: "LOW POWER VLSI"
module: "Module 1: Physics of Power dissipation in MOSFET devices"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff66e"
status: "completed"
scrapedAt: "2026-05-23T18:14:30.170Z"
---
# LOW POWER VLSI - Module 1: Physics of Power Dissipation in MOSFET Devices

## Topic: Tunneling Through Gate Oxide

---

### **Introduction**

As MOSFET technology scales down to smaller dimensions, the gate oxide thickness ($t_{ox}$) also decreases significantly. This reduction in $t_{ox}$ leads to several physical phenomena, including gate leakage current. One of the primary mechanisms contributing to gate leakage is **quantum mechanical tunneling** through the dielectric material. Understanding tunneling is crucial for low-power VLSI design as it represents a static power dissipation component that becomes increasingly dominant in advanced technologies.

---

### **Learning Outcomes Covered**

This topic directly contributes to the understanding of:

*   **CO1: Describe the impact of technology scaling on power dissipation in digital ICs and various short channel effects.**
    *   Tunneling through gate oxide is a direct consequence of technology scaling, specifically the reduction in $t_{ox}$, leading to increased static power dissipation.
*   **CO2: Discuss the different sources of power dissipation in digital ICs.**
    *   Tunneling current is identified as a significant source of **static power dissipation**.

---

### **Key Concepts and Definitions**

*   **Gate Oxide:** The insulating layer between the gate electrode and the semiconductor channel in a MOSFET. Typically made of silicon dioxide ($SiO_2$) or high-dielectric constant (high-k) materials.
*   **Quantum Mechanical Tunneling:** A quantum mechanical phenomenon where a particle can pass through a potential barrier even if its kinetic energy is less than the barrier's height. This is analogous to a ball rolling up a hill and, without sufficient energy, still managing to appear on the other side.
*   **Potential Barrier:** In the context of tunneling through gate oxide, the potential barrier is formed by the difference in energy levels between the gate material, the dielectric (oxide), and the semiconductor channel.
*   **Gate Leakage Current ($I_{gate}$):** The current that flows from the gate terminal to the channel or substrate due to various mechanisms, including tunneling.
*   **Static Power Dissipation:** Power consumed by a circuit even when it is not switching. Gate leakage current contributes to static power dissipation.
*   **Band Diagram:** A graphical representation of the energy levels of electrons in different materials, used to visualize the potential barrier.

---

### **Physics of Tunneling Through Gate Oxide**

Tunneling occurs when the gate oxide becomes thin enough that electrons or holes can quantum mechanically tunnel across the insulator. The probability of tunneling depends on the thickness of the barrier, the height of the barrier, and the mass of the tunneling particle.

Two primary tunneling mechanisms are relevant for gate dielectrics:

1.  **Direct Tunneling:**
    *   **Mechanism:** Electrons tunnel directly from the gate to the channel (or vice-versa) across the oxide barrier. This occurs when the oxide thickness is very small (typically $< 1.5$ nm).
    *   **Band Diagram:** An electron in the gate material can tunnel across the thin oxide to the conduction band of the silicon channel if the energy difference and barrier width allow.
    *   **Dependence:** The current density for direct tunneling ($J_{direct}$) is exponentially dependent on the oxide thickness ($t_{ox}$) and the barrier height ($\phi_B$).
        *   $J_{direct} \propto \exp(-C \cdot t_{ox} \sqrt{\phi_B})$
        *   Where $C$ is a constant.

2.  **Fowler-Nordheim (FN) Tunneling:**
    *   **Mechanism:** Occurs in slightly thicker oxides (typically $1.5$ nm to $3$ nm) or at higher electric fields across the oxide. In FN tunneling, the electric field in the oxide deforms the potential barrier into a triangular shape. Electrons then tunnel through this triangular barrier.
    *   **Band Diagram:** The strong electric field "tilts" the conduction band of the oxide, creating a triangular potential barrier at the interface. Electrons from the gate "tunnel" through this lowered and thinned barrier.
    *   **Dependence:** The current density for FN tunneling ($J_{FN}$) is strongly dependent on the electric field ($E_{ox}$) and the barrier height ($\phi_B$).
        *   $J_{FN} \propto E_{ox}^2 \exp(-B / E_{ox})$
        *   Where $B$ is a constant related to the barrier height and effective mass.

    *   **Note:** In reality, the gate leakage current is often a combination of direct tunneling and FN tunneling, with one mechanism dominating depending on the oxide thickness and applied gate voltage.

---

### **Impact of Technology Scaling on Tunneling**

*   **Reduced $t_{ox}$:** As per Moore's Law and continued scaling, $t_{ox}$ has been progressively reduced. For technologies below 90nm node, $t_{ox}$ has fallen below 2 nm, making direct tunneling a significant issue.
*   **Increased Gate Leakage Current:** The reduction in $t_{ox}$ directly leads to an exponential increase in tunneling current.
*   **Static Power Dissipation:** This increased gate leakage current results in a continuous power consumption even when the transistor is in the off-state (or in standby), contributing to static power dissipation.
*   **Reliability Concerns:** High tunneling currents can lead to the degradation of the gate dielectric over time, potentially causing device failure.

---

### **Modeling Gate Leakage Current**

Several models exist to predict gate leakage current, often based on empirical data and theoretical tunneling equations. These models are crucial for circuit simulators to accurately predict power consumption.

*   **Reference:** Behzad Razavi's "Design of Analog CMOS Integrated Circuits" and the works by Baker, Li, Boyce ("CMOS: Circuits Design, Layout and Simulation") provide insights into the physical basis and modeling of leakage currents, though specific detailed tunneling models might be found in more specialized device physics books or research papers. Sedra & Smith's "Microelectronic Circuits" also discusses fundamental device physics that underpins these leakage mechanisms.

*   **Key Parameters:**
    *   Oxide thickness ($t_{ox}$)
    *   Gate voltage ($V_g$)
    *   Oxide material properties (barrier height, effective mass)
    *   Area of the gate ($A_{gate}$)

*   **Total Gate Current:** The total gate leakage current is the sum of currents due to various mechanisms, with tunneling being dominant in scaled technologies. Other mechanisms include:
    *   **Thermionic Emission:** Dominant at higher temperatures and thicker oxides.
    *   **Ohmic Conduction:** Through defects in the oxide.
    *   **Poole-Frenkel Emission:** Emission from trap states within the oxide.

---

### **Power Dissipation Due to Tunneling**

The power dissipated due to gate leakage current ($P_{leakage}$) is a static power component and is given by:

$P_{leakage} = V_{DD} \times I_{gate}$

where:
*   $V_{DD}$ is the supply voltage.
*   $I_{gate}$ is the total gate leakage current flowing through all the transistors in the circuit.

**Example:**

Consider a digital circuit with 1 million transistors. If each transistor has a gate leakage current of 1 nA (a typical value for some scaled technologies) and the supply voltage is 1V, the total static power dissipation due to gate leakage would be:

$I_{gate\_total} = 10^6 \text{ transistors} \times 1 \text{ nA/transistor} = 1 \text{ mA}$
$P_{leakage} = 1 \text{V} \times 1 \text{ mA} = 1 \text{ mW}$

While 1mW might seem small, in complex System-on-Chips (SoCs) with billions of transistors, this static power can become a significant portion of the total power budget, impacting battery life and thermal management.

---

### **Implications for Low Power VLSI Design**

*   **Material Selection:** The choice of gate dielectric material is critical. High-k dielectrics (e.g., $HfO_2$, $ZrO_2$) are used to replace $SiO_2$ in advanced technologies. This allows for a physically thicker dielectric layer while maintaining the same electrical capacitance, thereby reducing tunneling currents.
    *   **Trade-off:** High-k materials can introduce other issues like lower mobility and higher interface trap densities.
*   **Process Optimization:** Careful control of the oxide thickness and quality during fabrication is essential to minimize leakage.
*   **Circuit Design Strategies:**
    *   **Power Gating:** Disabling or shutting off parts of the circuit when not in use can significantly reduce static power, including leakage.
    *   **Multi-Vth Design:** Using transistors with different threshold voltages (high-Vth for leakage-critical paths, low-Vth for speed) can help manage leakage.
    *   **Body Biasing:** Applying appropriate body bias can alter the threshold voltage and influence leakage.
*   **Design for Reliability:** Designing circuits that can withstand the stress caused by leakage currents is also important.

---

### **Important Points to Remember**

*   Tunneling through gate oxide is a **quantum mechanical effect** driven by **thin gate dielectrics**.
*   It leads to **static power dissipation**.
*   **Direct tunneling** dominates in very thin oxides ($< 1.5$ nm), while **Fowler-Nordheim tunneling** is relevant for slightly thicker oxides or high electric fields.
*   Technology scaling **exacerbates** gate leakage due to decreasing $t_{ox}$.
*   **High-k dielectrics** are employed to mitigate tunneling by allowing for physically thicker insulators.
*   Gate leakage current can become a **significant contributor to the total power budget** in advanced technologies.

---

### **Practice Questions**

1.  **Identify and explain the two primary quantum mechanical tunneling mechanisms through gate oxide in MOSFETs.** (CO1, CO2)
    *   **Answer:** The two primary mechanisms are Direct Tunneling and Fowler-Nordheim (FN) Tunneling.
        *   **Direct Tunneling:** Occurs in very thin oxides ($<1.5$ nm) where electrons tunnel directly across the barrier. Its current density is exponentially dependent on oxide thickness.
        *   **Fowler-Nordheim Tunneling:** Occurs in slightly thicker oxides or at high electric fields, where the electric field distorts the barrier into a triangle, allowing tunneling. Its current density is dependent on the electric field in the oxide.

2.  **How does technology scaling directly impact the gate leakage current in MOSFETs?** (CO1)
    *   **Answer:** Technology scaling leads to a reduction in the gate oxide thickness ($t_{ox}$). As $t_{ox}$ decreases, the probability of quantum mechanical tunneling through the oxide increases exponentially, leading to a significant rise in gate leakage current.

3.  **Why is gate leakage current considered a source of static power dissipation?** (CO2)
    *   **Answer:** Gate leakage current flows continuously from the gate to the channel or substrate, even when the transistor is not actively switching (e.g., in the off-state or idle state). This continuous current draw, when multiplied by the supply voltage, results in a constant power consumption, which is defined as static power dissipation.

4.  **What is the primary method used in modern CMOS technologies to reduce tunneling current through the gate oxide? Explain why it is effective.** (CO1, CO3)
    *   **Answer:** The primary method is the use of high-dielectric constant (high-k) gate dielectrics (e.g., $HfO_2$). These materials allow for a physically thicker insulating layer compared to traditional silicon dioxide ($SiO_2$) while achieving the same equivalent oxide thickness (EOT) required for capacitive coupling. A physically thicker barrier significantly reduces the tunneling probability, thereby reducing gate leakage current.

5.  **Calculate the static power dissipated by the gate leakage in a chip with 10 billion transistors, each exhibiting an average gate leakage current of 0.5 nA at $V_{DD}$ = 0.9V.** (CO2)
    *   **Answer:**
        *   Total Gate Leakage Current ($I_{gate\_total}$) = Number of transistors × Leakage current per transistor
        *   $I_{gate\_total} = 10 \times 10^9 \text{ transistors} \times 0.5 \text{ nA/transistor}$
        *   $I_{gate\_total} = 10^{10} \times 0.5 \times 10^{-9} \text{ A}$
        *   $I_{gate\_total} = 5 \text{ A}$
        *   Static Power Dissipation ($P_{leakage}$) = $V_{DD} \times I_{gate\_total}$
        *   $P_{leakage} = 0.9 \text{ V} \times 5 \text{ A}$
        *   $P_{leakage} = 4.5 \text{ W}$

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### **Further Reading and References**

*   **Razavi, B. (2002). *Design of Analog CMOS Integrated Circuits*. McGraw-Hill.** - Provides foundational understanding of MOS device physics and scaling effects.
*   **Baker, C. H., Li, Z., & Boyce, D. E. (2015). *CMOS: Circuit Design, Layout, and Simulation*. Prentice Hall India.** - Offers practical insights into device behavior and its impact on circuit design, including leakage considerations.
*   **Sedra, A. S., & Smith, K. C. (2020). *Microelectronic Circuits*. Oxford University Press.** - Covers the fundamental principles of semiconductor devices, essential for understanding leakage mechanisms.
*   **Allen, P. E., & Holberg, D. R. (2018). *CMOS Analog Circuit Design*. Oxford University Press.** - While focused on analog, it delves into device physics that are relevant to leakage.

---