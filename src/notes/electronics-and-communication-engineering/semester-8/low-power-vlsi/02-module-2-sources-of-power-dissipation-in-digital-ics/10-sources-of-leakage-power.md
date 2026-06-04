---
title: "Sources of Leakage Power"
subject: "LOW POWER VLSI"
module: "Module 2: Sources of power dissipation in digital  ICs"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff67e"
status: "completed"
scrapedAt: "2026-05-23T18:14:41.235Z"
---
# LOW POWER VLSI - Module 2: Sources of Power Dissipation in Digital ICs

## Topic: Sources of Leakage Power

**Course Outcomes Covered:**

*   **CO2: Discuss the different sources of power dissipation in digital ICs.** (Knowledge Level: K2) - This topic directly addresses one of the primary sources of power dissipation.

**Learning Outcomes:**

Upon completion of this topic, you should be able to:

*   Identify and describe the various components of leakage current in CMOS transistors.
*   Explain the impact of technology scaling on leakage power.
*   Analyze the factors that contribute to increased leakage power in modern ICs.
*   Discuss the trade-offs between leakage power and other performance metrics.

---

### 1. Introduction to Leakage Power

While dynamic power (switching power) is dominant in high-frequency operation, **leakage power** has become a significant concern, especially with aggressive technology scaling. It represents the power consumed by transistors even when they are not switching. This is due to unintentional current flow through the off-state transistors.

**Definition:** **Leakage power** is the power dissipated by the quiescent current flowing through transistors when they are ideally supposed to be in the off-state.

**Importance:** As feature sizes shrink and supply voltages decrease, the ratio of leakage power to dynamic power increases, making leakage power management crucial for low-power design.

---

### 2. Components of Leakage Current

Leakage current in CMOS circuits primarily arises from the off-state current of both NMOS and PMOS transistors. These currents can be broadly categorized into several mechanisms:

#### 2.1. Subthreshold Leakage (or Weak Inversion Current)

*   **Concept:** Even when the gate-source voltage ($V_{GS}$) is below the threshold voltage ($V_{th}$), a small current can still flow between the drain and source. This occurs because there's still a small population of carriers in the channel, and diffusion currents can transport them.
*   **Mechanism:** In weak inversion, the transistor acts somewhat like a bipolar transistor. The current is exponentially dependent on $V_{GS}$ and inversely dependent on temperature.
*   **Equation (approximated):**
    $I_{sub} \approx I_0 e^{q(V_{GS} - V_{th}) / n k T} (1 - e^{-qV_{DS} / k T})$
    Where:
    *   $I_0$ is a technology-dependent constant.
    *   $V_{GS}$ is the gate-source voltage.
    *   $V_{th}$ is the threshold voltage.
    *   $n$ is the subthreshold swing parameter (ideally 1, but often > 1 due to short-channel effects).
    *   $k$ is the Boltzmann constant.
    *   $T$ is the absolute temperature.
    *   $V_{DS}$ is the drain-source voltage.
*   **Impact of Scaling:**
    *   As $V_{th}$ is reduced to enable faster switching at lower voltages, the subthreshold leakage current increases significantly because the exponential dependence on $(V_{GS} - V_{th})$ becomes more pronounced.
    *   Shorter channel lengths can lead to a decrease in $V_{th}$ and increased leakage.
    *   Higher temperatures increase subthreshold leakage exponentially.
*   **Reference:** Baker, Li, Boyce (4/e) extensively discusses subthreshold leakage as a major contributor in their chapters on MOSFET characteristics and scaling. Sedra & Smith (8/e) also cover the fundamental physics of MOSFET operation, including weak inversion.

#### 2.2. Gate Oxide Leakage (or Gate Direct Tunneling)

*   **Concept:** As the gate oxide thickness ($T_{ox}$) is reduced to improve gate control and reduce short-channel effects, quantum mechanical tunneling of charge carriers (electrons or holes) through the thin gate oxide becomes significant.
*   **Mechanism:** Electrons tunnel from the channel to the gate (or vice-versa) when there is a sufficient electric field across the oxide.
*   **Factors Influencing:**
    *   **Gate Oxide Thickness ($T_{ox}$):** This is the most critical factor. As $T_{ox}$ decreases (e.g., below 2 nm), tunneling current increases exponentially.
    *   **Gate Voltage ($V_{GS}$):** Higher voltages across the oxide increase the tunneling probability.
    *   **Material Properties:** The dielectric constant and band gap of the gate insulator material influence tunneling.
*   **Impact of Scaling:** This leakage mechanism becomes dominant as $T_{ox}$ is scaled aggressively. It is a direct consequence of the need for physically thin gate dielectrics.
*   **Reference:** Razavi (2/e) in his sections on MOSFETs and scaling discusses the limitations of scaling such as gate oxide integrity.

#### 2.3. Junction Leakage (Reverse Bias Leakage)

*   **Concept:** The PN junctions formed between the source/drain diffusions and the substrate are reverse-biased in an off-state transistor. A small leakage current flows across these reverse-biased junctions.
*   **Mechanisms:**
    *   **Diffusion Current:** Caused by minority carriers thermally generated within or near the depletion region.
    *   **Generation-Current:** Caused by carrier generation in the depletion region itself, often assisted by defects or traps (Shockley-Read-Hall mechanism).
*   **Equation (approximated for diffusion):**
    $I_{diff} \propto A \cdot n_i^2$
    Where:
    *   $A$ is the junction area.
    *   $n_i$ is the intrinsic carrier concentration, which is strongly temperature-dependent.
*   **Impact of Scaling:**
    *   **Increased Doping Concentration:** High doping in source/drain regions leads to higher built-in potentials and wider depletion regions, potentially increasing generation current for a given doping profile.
    *   **Smaller Feature Sizes:** While junction area might decrease, the increased doping concentration and the proximity of junctions to the surface can lead to higher specific junction leakage.
    *   **Temperature:** Junction leakage increases significantly with temperature.
*   **Reference:** Sedra & Smith (8/e) provide a thorough explanation of PN junction physics, including reverse bias leakage.

#### 2.4. Gate-Induced Drain Leakage (GIDL)

*   **Concept:** This leakage occurs when the gate-to-drain voltage ($V_{GD}$) is sufficiently negative (for NMOS) or positive (for PMOS), causing a strong electric field at the drain-substrate junction. This field can lead to band-to-band tunneling (BTBT) or impact ionization, creating carriers that contribute to leakage.
*   **Mechanism:** A strong electric field in the depletion region near the drain can directly tunnel electrons from the valence band to the conduction band (BTBT) or generate electron-hole pairs through impact ionization, with the generated electrons flowing to the drain and holes to the substrate.
*   **Conditions:** Typically occurs when the gate is strongly biased to an 'off' state relative to the drain (e.g., $V_{GS} = 0$ and the drain voltage is high, making $V_{GD}$ negative for NMOS).
*   **Impact of Scaling:** Shorter channel lengths and higher drain voltages can exacerbate GIDL due to increased electric field strengths at the drain.
*   **Reference:** Baker, Li, Boyce (4/e) and Razavi (2/e) discuss short-channel effects, which often include GIDL.

#### 2.5. Band-to-Band Tunneling (BTBT)

*   **Concept:** This is a quantum mechanical tunneling mechanism where carriers tunnel directly across the band gap of the semiconductor. It is primarily relevant in regions of high electric field, such as the drain-substrate junction under strong reverse bias.
*   **Mechanism:** When the electric field is very strong, the band gap effectively narrows, allowing electrons to tunnel from the valence band to the conduction band.
*   **Related to:** GIDL is often a manifestation of BTBT.
*   **Impact of Scaling:** Shorter channel lengths and higher drain voltages concentrate the electric field, increasing BTBT.

---

### 3. Impact of Technology Scaling on Leakage Power

Technology scaling (e.g., moving from 130nm to 7nm nodes and beyond) has a complex and often contradictory impact on leakage power.

*   **Reducing Threshold Voltage ($V_{th}$):**
    *   **Goal:** To allow transistors to switch faster at lower supply voltages ($V_{DD}$).
    *   **Consequence:** Significantly increases subthreshold leakage current due to the exponential relationship between current and $(V_{GS} - V_{th})$.
*   **Reducing Gate Oxide Thickness ($T_{ox}$):**
    *   **Goal:** To improve gate control over the channel and reduce short-channel effects.
    *   **Consequence:** Leads to significantly increased gate oxide leakage (direct tunneling).
*   **Increasing Doping Concentrations:**
    *   **Goal:** To reduce channel resistance and achieve higher currents.
    *   **Consequence:** Can increase junction leakage current.
*   **Reducing Channel Length ($L$):**
    *   **Goal:** To increase transistor density and performance.
    *   **Consequence:** Enhances short-channel effects like drain-induced barrier lowering (DIBL), which reduces the effective $V_{th}$ and increases subthreshold leakage. It also concentrates electric fields, potentially increasing GIDL and BTBT.
*   **Lowering Supply Voltage ($V_{DD}$):**
    *   **Benefit:** Primarily reduces dynamic power ($P_{dyn} \propto C V_{DD}^2 f$).
    *   **Effect on Leakage:** While it reduces the voltage difference ($V_{GS} - V_{th}$ for subthreshold) somewhat, the impact is often less pronounced than the increase in leakage due to reduced $V_{th}$ and other scaling effects.

**Key Takeaway:** Aggressive scaling, while improving performance and reducing dynamic power, fundamentally increases leakage power by reducing $V_{th}$ and $T_{ox}$, and by enhancing short-channel effects. This makes leakage power a dominant factor in standby power consumption for modern deep-submicron technologies.

---

### 4. Factors Influencing Leakage Power

*   **Temperature:** Leakage currents (especially subthreshold and junction leakage) are highly sensitive to temperature. Higher temperatures lead to increased leakage.
*   **Supply Voltage ($V_{DD}$):** While reducing $V_{DD}$ primarily targets dynamic power, it can slightly mitigate leakage by reducing the available voltage for current flow. However, the impact is less significant than the effects of scaling $V_{th}$ or $T_{ox}$.
*   **Threshold Voltage ($V_{th}$):** Lower $V_{th}$ directly leads to higher leakage currents.
*   **Gate Oxide Thickness ($T_{ox}$):** Thinner oxides exponentially increase gate leakage.
*   **Device Geometry:** Shorter channel lengths increase leakage due to short-channel effects. Larger junction areas increase junction leakage.
*   **Process Variations:** Variations in doping concentrations, oxide thickness, and lithography can lead to significant variations in leakage current across a chip.

---

### 5. Trade-offs in Leakage Power Management

*   **$V_{th}$ vs. Leakage:** Increasing $V_{th}$ reduces leakage but also slows down switching speed (increases delay). This is a fundamental trade-off.
*   **$T_{ox}$ vs. Gate Leakage:** Thicker oxides reduce gate leakage but degrade gate control and can increase short-channel effects.
*   **Performance vs. Leakage:** Techniques to reduce leakage often come with a performance penalty (e.g., sleep modes that require wake-up time).

---

### 6. Illustrative Examples

*   **Example 1: Subthreshold Leakage in a NAND Gate**
    Consider a simple NAND gate with transistors operating in subthreshold region. If the $V_{th}$ is reduced significantly, even when the transistors are intended to be off (e.g., both inputs are high for an NMOS transistor in a pull-down path), a small but continuous current will flow from the output to ground, contributing to leakage power. This current is amplified across all transistors in the circuit that are in an off-state.

*   **Example 2: Gate Leakage in a Memory Cell**
    In SRAM or DRAM cells, transistors are often in an off-state for extended periods. If the gate oxide is very thin (e.g., in modern FinFETs or advanced planar technologies), direct tunneling current through the gate of these transistors can lead to significant standby power consumption, even when the cell is not being accessed.

---

### 7. Practice Questions

1.  **Define leakage power and explain why it has become a critical issue in modern VLSI.** (CO2)
2.  **List and briefly describe the four primary components of leakage current in a CMOS transistor.** (CO2)
3.  **How does reducing the gate oxide thickness ($T_{ox}$) affect leakage power? Which specific leakage mechanism is most impacted?** (CO2)
4.  **Explain the relationship between threshold voltage ($V_{th}$) and subthreshold leakage current. What are the implications of this relationship for technology scaling?** (CO2)
5.  **Which leakage mechanism is most influenced by temperature? Briefly explain why.** (CO2)

---

### 8. Answers to Practice Questions

1.  **Leakage power** is the power consumed by the quiescent current flowing through transistors when they are ideally in the off-state. It has become critical due to aggressive technology scaling, which reduces threshold voltages ($V_{th}$) and gate oxide thicknesses ($T_{ox}$), thereby increasing leakage currents like subthreshold and gate leakage, making them a dominant factor in overall power consumption, especially in standby modes.
2.  The four primary components of leakage current are:
    *   **Subthreshold Leakage:** Current flowing when $V_{GS} < V_{th}$.
    *   **Gate Oxide Leakage:** Current due to tunneling through the gate dielectric.
    *   **Junction Leakage:** Reverse bias current across PN junctions.
    *   **Gate-Induced Drain Leakage (GIDL):** Leakage due to strong electric fields at the drain-substrate junction.
3.  Reducing $T_{ox}$ significantly **increases gate oxide leakage** (direct tunneling). This is because the probability of charge carriers tunneling through the thin dielectric increases exponentially as its thickness decreases.
4.  **Subthreshold leakage current increases exponentially** as the threshold voltage ($V_{th}$) decreases. This implies that as technology scaling reduces $V_{th}$ to enable lower operating voltages and faster switching, the subthreshold leakage power dramatically increases.
5.  **Subthreshold leakage and junction leakage** are most influenced by temperature. Higher temperatures increase the thermal energy of carriers, leading to more carriers in the channel even when $V_{GS} < V_{th}$ (subthreshold leakage) and increasing the rate of minority carrier generation across PN junctions (junction leakage).

---

### 9. Important Points to Remember

*   Leakage power is **static power** consumption (occurs even when not switching).
*   **Subthreshold leakage** is exponentially dependent on $V_{GS}$ and $V_{th}$. Lower $V_{th}$ leads to higher leakage.
*   **Gate oxide leakage** is exponentially dependent on the gate oxide thickness. Thinner oxides lead to higher leakage.
*   Technology scaling **reduces $V_{DD}$ and $T_{ox}$ and channel length**, but often requires **lowering $V_{th}$**, which is a major driver of increased leakage.
*   **Temperature** is a significant factor exacerbating leakage, especially subthreshold and junction leakage.
*   Leakage power is becoming increasingly dominant in the total power budget, especially for circuits with significant idle time.
*   Understanding these leakage mechanisms is crucial for designing effective **power management strategies** (covered in later modules).

---

This concludes the notes on Sources of Leakage Power. Understanding these mechanisms is foundational for the subsequent topics on low-power design techniques.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
