---
title: "Gate Induced drain leakage"
subject: "LOW POWER VLSI"
module: "Module 1: Physics of Power dissipation in MOSFET devices"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff66d"
status: "completed"
scrapedAt: "2026-05-23T18:14:29.479Z"
---
# LOW POWER VLSI - Module 1: Physics of Power Dissipation in MOSFET Devices

## Topic: Gate-Induced Drain Leakage (GIDL)

---

### Learning Outcomes:

*   **Understanding the physics behind GIDL:** Explain the physical mechanisms that lead to GIDL in MOSFETs.
*   **Factors influencing GIDL:** Identify and describe the key parameters that affect the magnitude of GIDL current.
*   **Impact of GIDL on power consumption:** Quantify and discuss the contribution of GIDL to the overall power dissipation in VLSI circuits.
*   **Mitigation techniques:** Discuss strategies and design approaches to reduce or eliminate GIDL.

---

### 1. Introduction to Gate-Induced Drain Leakage (GIDL)

Gate-Induced Drain Leakage (GIDL) is a significant leakage current mechanism in modern short-channel MOSFETs, particularly in scaled technologies. It contributes to static power dissipation, which is a growing concern in low-power VLSI design. GIDL arises from the strong electric fields present in the drain depletion region, influenced by the gate voltage, even when the transistor is intended to be OFF.

**Key Concept:** GIDL is a leakage current that occurs when the gate-to-drain voltage ($V_{GD}$) is sufficiently negative (for NMOS) or positive (for PMOS), inducing a strong electric field in the drain region and leading to carrier generation and injection.

---

### 2. Physical Mechanisms of GIDL

GIDL is primarily caused by two mechanisms:

#### 2.1. Band-to-Band Tunneling (BTBT) Enhanced by Gate Field (or Gate-Assisted BTBT)

*   **Mechanism:** In short-channel devices, the drain-to-substrate voltage ($V_{DS}$) creates a high electric field in the depletion region near the drain. When the gate voltage ($V_G$) is sufficiently negative (for NMOS) or positive (for PMOS), it also contributes to the electric field in this region, particularly at the drain edge. This combined strong electric field can lead to band-to-band tunneling (BTBT) of electrons from the valence band to the conduction band in the silicon substrate near the drain. These generated electrons can then be injected into the drain.

*   **Role of Gate Voltage:** A negative $V_{GS}$ (for NMOS) can enhance the electric field near the drain by effectively "pulling" the potential at the drain edge of the depletion region towards the gate, thereby increasing the BTBT rate.

*   **Reference:** Razavi (2002), Chapter 2, discusses the fundamental physics of MOSFETs and the impact of electric fields. While not exclusively on GIDL, the principles of depletion regions and electric fields are crucial. Baker et al. (2015) also covers various leakage mechanisms in scaled CMOS technologies.

#### 2.2. Impact Ionization (II)

*   **Mechanism:** High electric fields at the drain junction can also cause impact ionization. High-energy carriers (electrons or holes) accelerated by the electric field collide with the silicon lattice, generating electron-hole pairs. These generated carriers can contribute to leakage currents. While BTBT is often the dominant mechanism for GIDL, especially with specific gate biasing, impact ionization can also play a role.

*   **GIDL and Impact Ionization:** In some contexts, GIDL is used as a broader term encompassing leakage due to strong fields at the drain, including those enhanced by gate voltage which might lead to BTBT or II. The term GIDL most commonly refers to the BTBT mechanism enhanced by the gate field.

---

### 3. GIDL in NMOS and PMOS Transistors

#### 3.1. GIDL in NMOS Transistors

*   **Condition for GIDL:** GIDL occurs in NMOS transistors when the gate-to-drain voltage ($V_{GD}$) is significantly negative. This typically happens when the transistor is turned OFF ($V_{GS} < V_{th}$) and the drain voltage is high ($V_{DS}$). Specifically, when $V_{GS}$ is pulled to a very low voltage (e.g., $V_{SS}$ or negative for NMOS) and $V_{DS}$ is at its maximum ($V_{DD}$).

*   **Mechanism (NMOS):**
    *   The gate is at a low potential (e.g., $V_{SS}$ or lower).
    *   The drain is at a high potential ($V_{DD}$).
    *   This creates a strong lateral electric field in the depletion region between the gate and the drain.
    *   If $V_{GD} = V_G - V_D$ is sufficiently negative, it enhances the electric field.
    *   BTBT occurs, generating electron-hole pairs.
    *   Electrons are collected by the drain, while holes are collected by the substrate.

*   **Example (NMOS):** Consider an NMOS transistor with $V_{DD} = 1.2V$ and $V_{th} = 0.4V$. If the gate is turned OFF by setting $V_{GS} = 0V$ and the drain is at $V_{DS} = 1.2V$, then $V_{GD} = V_G - V_D = 0V - 1.2V = -1.2V$. This large negative $V_{GD}$ can induce significant GIDL.

#### 3.2. GIDL in PMOS Transistors

*   **Condition for GIDL:** GIDL occurs in PMOS transistors when the gate-to-drain voltage ($V_{GD}$) is significantly positive. This happens when the transistor is turned OFF ($V_{GS} > V_{th\_PMOS}$, where $V_{th\_PMOS}$ is negative) and the drain voltage is low ($V_{SS}$). Specifically, when $V_{GS}$ is at a very high voltage (e.g., $V_{SS}$) and $V_{DS}$ is at its minimum ($V_{SS}$).

*   **Mechanism (PMOS):**
    *   The gate is at a high potential (e.g., $V_{SS}$).
    *   The drain is at a low potential ($V_{SS}$).
    *   However, for GIDL to be significant, we consider the case where the gate is at a low potential (e.g., $V_{SS}$) and the drain is at a low potential (e.g., $V_{SS}$), but the source is at a high potential (e.g., $V_{DD}$). In this OFF state for a PMOS, $V_{GS}$ is high (e.g., $V_{DD} - V_{SS} = V_{DD}$), and $V_{DS}$ is low (e.g., $V_{SS} - V_{SS} = 0$).
    *   To induce GIDL, we consider scenarios where the gate is driven to the opposite extreme of its turn-on state. For a PMOS, this means the gate is driven towards $V_{SS}$ when the drain is also at a low potential.
    *   Let's consider the standard understanding: For PMOS, GIDL is typically associated with a negative $V_{SG}$ and a strong drain field. If we have $V_{GS} = V_{SS}$ and $V_{DS} = V_{SS}$, then $V_{GD} = V_{SS} - V_{SS} = 0$. This doesn't directly cause GIDL.
    *   A more relevant condition for PMOS GIDL is when the gate is biased such that it enhances the electric field at the drain. This happens when the gate voltage is at its lowest (e.g., $V_{SS}$) and the drain voltage is also low, but the source is at $V_{DD}$.
    *   Consider $V_{GS} = V_{SS}$ and $V_{DS} = V_{SS}$. For a PMOS, this usually means it's ON if $V_{th}$ is negative.
    *   The text typically explains GIDL with respect to NMOS. For PMOS, it's the analogous situation: a strong electric field near the drain due to drain voltage, *and* the gate voltage configuration that exacerbates this field. This typically occurs when $V_{GS}$ is strongly negative (e.g., $V_{GS} = V_{SS}$) and $V_{DS}$ is at $V_{SS}$, causing the gate to be far from its ON state potential relative to the drain.
    *   More precisely, GIDL in PMOS occurs when the gate-to-drain voltage ($V_{GD}$) is sufficiently positive. This happens when $V_G$ is low (e.g., $V_{SS}$) and $V_D$ is also low. If $V_{GS}$ is strongly positive (e.g., $V_{GS} = V_{DD}$), the PMOS is OFF. In this OFF state, if $V_D$ is low and $V_G$ is low, the gate-source voltage is $V_{GS} = V_G - V_S = V_{SS} - V_{DD} = -V_{DD}$. The gate-drain voltage is $V_{GD} = V_G - V_D = V_{SS} - V_{SS} = 0$.
    *   Let's re-evaluate based on typical conditions. GIDL is a leakage when the device is OFF. For PMOS, OFF state is $V_{GS} > V_{th}$ (where $V_{th}$ is negative). Common OFF state biasing is $V_{GS} = V_{DD}$ (so $V_{GS} > V_{th}$) and $V_{DS}$ is small or zero. In this case, $V_{GD} = V_G - V_D = V_{DD} - V_{DS}$. If $V_{DS}$ is $V_{SS}$, then $V_{GD} = V_{DD} - V_{SS} = V_{DD}$ (positive). This positive $V_{GD}$ can lead to GIDL.
    *   **Corrected PMOS Condition:** GIDL in PMOS occurs when the gate-to-drain voltage ($V_{GD}$) is sufficiently positive. This typically happens when the transistor is turned OFF ($V_{GS} > V_{th\_PMOS}$) and the drain voltage is low ($V_{SS}$). Specifically, when $V_{GS}$ is driven to a high voltage (e.g., $V_{SS}$) and $V_{DS}$ is near $V_{SS}$. A more practical scenario for significant GIDL is when $V_{GS}$ is biased towards its OFF state, e.g., $V_{GS}=V_{DD}$ and $V_{DS}$ is at $V_{SS}$. In this case, $V_{GD} = V_{DD} - V_{SS} = V_{DD}$, which is a large positive $V_{GD}$.
    *   **Mechanism (PMOS):**
        *   Gate is at $V_{SS}$.
        *   Drain is at $V_{SS}$.
        *   Source is at $V_{DD}$.
        *   $V_{GD}$ is effectively positive.
        *   This creates a strong electric field at the drain edge.
        *   BTBT occurs, generating electron-hole pairs.
        *   Holes are collected by the drain, while electrons are collected by the substrate.

---

### 4. Factors Influencing GIDL

Several factors significantly affect the magnitude of GIDL current:

*   **Gate-to-Drain Voltage ($V_{GD}$):** This is the primary driving force. A larger negative $V_{GD}$ (for NMOS) or positive $V_{GD}$ (for PMOS) leads to a stronger electric field at the drain edge and thus higher GIDL.
    *   *Importance:* Directly relates to how the transistor is biased in the OFF state.

*   **Drain Voltage ($V_{DS}$):** A higher $V_{DS}$ also contributes to the electric field in the drain depletion region, exacerbating GIDL.
    *   *Importance:* Maximum $V_{DS}$ (i.e., $V_{DD}$) usually corresponds to the worst-case GIDL for NMOS in the OFF state.

*   **Gate Oxide Thickness ($t_{ox}$):** A thinner gate oxide leads to a stronger coupling of the gate voltage to the channel and depletion regions. This means a thinner oxide can result in higher GIDL for a given $V_{GD}$.
    *   *Importance:* A consequence of technology scaling, which reduces $t_{ox}$.

*   **Channel Length ($L$):** Shorter channel lengths mean stronger lateral electric fields in the drain region, making devices more susceptible to GIDL.
    *   *Importance:* A major driver for GIDL in modern short-channel devices. This directly relates to **CO1: Describe the impact of technology scaling on power dissipation in digital ICs and various short channel effects.**

*   **Substrate Doping Concentration ($N_{sub}$):** Higher substrate doping can lead to narrower depletion regions, which might concentrate the electric field and increase BTBT. However, the relationship can be complex.
    *   *Importance:* Manufacturing parameter.

*   **Temperature:** GIDL, being a thermally assisted tunneling process (or at least influenced by carrier energies), generally increases with temperature.
    *   *Importance:* Affects performance and power in varying thermal environments.

*   **Gate Electrode Material:** The work function of the gate material can influence the internal electric fields.

**Highlight:** The most critical factors for GIDL are the strong electric fields due to short channel lengths and high drain voltages, often exacerbated by specific gate biasing in the OFF state.

---

### 5. Impact of GIDL on Power Consumption

GIDL is a form of **static power dissipation**. It occurs even when the transistor is not switching, contributing to leakage current that drains the battery or increases energy consumption in battery-powered devices.

*   **Static Power:** $P_{static} = V_{DD} \times I_{leakage}$
    *   GIDL is a component of $I_{leakage}$.

*   **Quantification:** The GIDL current can range from nA to µA per transistor, depending on the technology node and operating conditions. In a complex IC with millions or billions of transistors, the cumulative effect of GIDL can be substantial, significantly impacting overall static power.

*   **Example:** Consider a chip with $10^7$ transistors, each exhibiting an average GIDL current of 10 nA at $V_{DD} = 1V$.
    *   Total GIDL current = $10^7 \times 10 \times 10^{-9} A = 0.1 A$.
    *   Static power due to GIDL = $1V \times 0.1A = 0.1W = 100mW$.
    *   This is a significant portion of the total power budget for many low-power applications.

*   **Alignment with Course Outcomes:**
    *   **CO1 (Technology Scaling & Power):** GIDL is a direct consequence of scaling, where thinner oxides and shorter channels lead to increased electric fields and thus higher GIDL. This increases static power.
    *   **CO2 (Sources of Power Dissipation):** GIDL is identified as a primary source of static power dissipation.

---

### 6. Mitigation Techniques for GIDL

Reducing GIDL is crucial for low-power design. Several strategies are employed:

#### 6.1. Biasing Techniques

*   **Negative Gate Bias (for NMOS):** To reduce GIDL in NMOS transistors, the gate voltage is sometimes biased slightly above the threshold voltage even in the intended OFF state. This reduces the $V_{GD}$ and the electric field at the drain. However, this can increase OFF-state leakage from other mechanisms and might impact switching speed.
*   **Stacking Transistors:** In logic gates, using multiple transistors in series (e.g., in a transmission gate or a series of pull-down/pull-up transistors) can distribute the voltage stress. If one transistor is OFF with a large $V_{GD}$, other transistors in the stack might have smaller $V_{GD}$ or be in a different operating regime, potentially reducing the overall GIDL.

#### 6.2. Device Engineering and Process Modifications

*   **Halo Doping (or Pocket Implantation):** Introducing a highly doped region (halo) around the channel, particularly near the drain, can help shape the electric field profile and reduce the peak field at the drain edge, thereby reducing GIDL. This is a common technique in modern process technologies.
*   **Gate Dielectric Engineering:** Using high-k dielectrics might allow for thicker physical layers while maintaining the same electrical capacitance, potentially mitigating the GIDL associated with ultra-thin oxides. However, high-k materials have their own leakage mechanisms.
*   **Body Biasing:** Applying a reverse bias to the substrate (for NMOS) or well (for PMOS) can increase the threshold voltage and potentially alter the electric field distribution, influencing GIDL.

#### 6.3. Circuit Design Techniques

*   **Sleep Transistors / Power Gating:** For blocks of the circuit that are not actively used, they can be completely powered down by turning OFF a sleep transistor in series with the power supply. This eliminates GIDL in the deactivated blocks.
    *   **Alignment with Course Outcomes:** **CO3: Describe the various approaches for power management in digital ICs.** Power gating is a key technique.
*   **Reduced Supply Voltage ($V_{DD}$):** Lowering the supply voltage directly reduces the maximum $V_{DS}$ and thus the electric fields that drive GIDL. This is a fundamental low-power technique.
*   **Careful Layout:** The physical layout of transistors can influence electric field concentrations. Designers might need to consider layout strategies to minimize GIDL in critical paths.

#### 6.4. Sleep Mode for Transistors

*   Some advanced techniques involve actively controlling the gate bias of transistors in an OFF state to minimize leakage. For instance, a transistor might be actively driven to a voltage that minimizes GIDL, even if it's not the absolute lowest power state.

**Highlight:** For a designer, the most controllable methods are biasing, power gating, and potentially selecting circuit topologies that manage voltage stress. Device engineering is typically handled by the fabrication process.

---

### 7. Practice Questions & Answers

**Question 1:** What is the primary physical mechanism responsible for Gate-Induced Drain Leakage (GIDL)?
    a) Thermal emission
    b) Band-to-Band Tunneling (BTBT)
    c) Schottky barrier leakage
    d) Quantum mechanical tunneling through the gate oxide

**Answer 1:** b) Band-to-Band Tunneling (BTBT) is the primary mechanism, often enhanced by the gate field.

---

**Question 2:** In an NMOS transistor, under what condition is GIDL most likely to occur?
    a) $V_{GS} > V_{th}$ and $V_{DS}$ is low
    b) $V_{GS} < V_{th}$ and $V_{DS}$ is high, with a strongly negative $V_{GD}$
    c) $V_{GS}$ is near $V_{th}$ and $V_{DS}$ is zero
    d) $V_{GS}$ is strongly positive and $V_{DS}$ is low

**Answer 2:** b) $V_{GS} < V_{th}$ (OFF state) and $V_{DS}$ is high, leading to a significantly negative $V_{GD}$ ($V_G < V_D$) that creates a strong electric field.

---

**Question 3:** List three factors that influence the magnitude of GIDL current.

**Answer 3:** Any three from the following:
    *   Gate-to-Drain Voltage ($V_{GD}$)
    *   Drain Voltage ($V_{DS}$)
    *   Gate Oxide Thickness ($t_{ox}$)
    *   Channel Length ($L$)
    *   Temperature
    *   Substrate Doping Concentration

---

**Question 4:** How does technology scaling, specifically reducing channel length and gate oxide thickness, generally affect GIDL? Explain why this is a concern for low-power VLSI.

**Answer 4:** Technology scaling leads to shorter channel lengths and thinner gate oxides. Shorter channels result in higher lateral electric fields in the drain depletion region. Thinner oxides increase the coupling of the gate voltage to this region. Both factors significantly increase the electric field strength near the drain junction. This enhanced field promotes mechanisms like Band-to-Band Tunneling (BTBT), leading to higher GIDL. This is a concern for low-power VLSI because GIDL is a static leakage current that dissipates power continuously, even when transistors are in the OFF state, thus increasing quiescent power consumption and reducing battery life. This relates directly to **CO1**.

---

**Question 5:** Describe one circuit-level technique to mitigate GIDL.

**Answer 5:** One technique is **Power Gating**. By inserting a "sleep" transistor in the power supply path to a block of logic, the entire block can be powered down when not in use. This effectively turns off all transistors in that block, eliminating GIDL (and other leakage) within that deactivated section. This aligns with **CO3**. Another technique is **careful biasing** or **stacking transistors**, as described in section 6.

---

### 8. Important Points to Remember

*   **GIDL = Leakage in OFF state:** It's a static power consumption mechanism.
*   **Key Driver: Strong Electric Field:** Specifically at the drain edge, enhanced by $V_{GD}$ and $V_{DS}$.
*   **Primary Mechanism:** Band-to-Band Tunneling (BTBT).
*   **Scaling Impact:** GIDL becomes more severe with shrinking technology nodes (shorter $L$, thinner $t_{ox}$).
*   **Mitigation is Essential:** Techniques like power gating, specialized biasing, and process modifications are crucial.
*   **Relates to CO1 and CO2:** GIDL is a direct consequence of scaling and a significant source of static power dissipation.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 9. References

*   **Behzad Razavi, "Design of Analog CMOS Integrated Circuits," 2/e, McGraw-Hill, 2002:** Provides foundational knowledge on MOSFET physics, electric fields, and junction behavior.
*   **Baker, Li, Boyce, "CMOS: Circuits Design, Layout and Simulation," 4/e, Prentice Hall India, 2015:** Offers detailed discussions on modern CMOS technologies, including various leakage mechanisms and their impact.
*   **Sedra & Smith, "Microelectronic Circuits," 8/e, Oxford University Press, 2020:** A comprehensive resource for semiconductor device physics and circuit analysis, essential for understanding the underlying principles.
*   **Phillip E. Allen, Douglas R. Holbery, "CMOS Analog Circuit Design," 3/e, Oxford University Press, 2018:** While focusing on analog, it provides deep insights into device behavior and leakage phenomena.
*   **Behzad Razavi, "Fundamentals of Microelectronics," 2/e, Wiley student Edition, 2018:** Another excellent resource for device physics basics.

---

This concludes the study notes for Gate-Induced Drain Leakage (GIDL) in Module 1 of Low Power VLSI.