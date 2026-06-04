---
title: "Static and dynamic power dissipation (detailed analysis not required)"
subject: "VLSI CIRCUIT DESIGN"
module: "Module 3: Static CMOS Logic Design : MOSFET Logic Design "
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fefcd"
status: "completed"
scrapedAt: "2026-05-23T18:03:43.841Z"
---
# VLSI CIRCUIT DESIGN - Module 3: Static CMOS Logic Design : MOSFET Logic Design

## Topic: Static and Dynamic Power Dissipation

### 1. Introduction

In the realm of VLSI circuit design, power consumption is a critical parameter, directly impacting battery life in portable devices, thermal management in high-performance systems, and the overall cost of fabrication. Understanding the sources of power dissipation in CMOS circuits is fundamental to designing efficient and reliable chips. This module focuses on static and dynamic power dissipation in the context of MOSFET logic design.

### 2. Learning Outcomes Covered

This section of the notes aims to address the following learning outcomes (implicitly within the context of power dissipation in MOSFET logic):

*   **CO1: Explain VLSI design methodologies including ASIC types, SoC and FPGA devices, design flows, methodologies.** (While not directly about methodologies, understanding power dissipation is crucial for selecting appropriate design methodologies and architectures.)
*   **CO2: Describe VLSI fabrication techniques.** (The physical properties and characteristics of MOSFETs, shaped by fabrication, influence power dissipation.)
*   **CO3: Design, analyse and create the layout of static CMOS logic circuits adhering to design rules and specifications.** (Power dissipation is a key specification to consider during design and layout.)
*   **CO4: Design and analysis of dynamic logic circuits and the implementation of basic storage cells.** (This module sets the foundation for understanding power dissipation in dynamic circuits as well.)

### 3. Key Concepts and Definitions

#### 3.1. Power Dissipation in CMOS Circuits

Power dissipation in CMOS circuits arises from two primary sources:

*   **Static Power Dissipation:** Power consumed when the circuit is not switching.
*   **Dynamic Power Dissipation:** Power consumed when the circuit is actively switching states.

#### 3.2. Static Power Dissipation

Static power dissipation occurs even when no logic operations are being performed. This is primarily due to leakage currents.

*   **Leakage Current:**
    *   **Subthreshold Leakage ($I_{off}$):** Current that flows between the drain and source of a MOSFET even when the gate-source voltage ($V_{GS}$) is below the threshold voltage ($V_{th}$). This is an exponential function of $V_{GS}$ and $V_{DS}$.
        *   *Importance:* Dominant component of static power dissipation in modern scaled-down technologies.
    *   **Gate Oxide Leakage ($I_{ox}$):** Current that flows through the gate dielectric (e.g., $\text{SiO}_2$) due to quantum mechanical tunneling. This becomes significant as gate oxide thickness is reduced in advanced technologies.
    *   **Junction Leakage:** Reverse-bias current across the source/drain to substrate PN junctions. This is typically much smaller than subthreshold leakage but can contribute to static power.

*   **Short-Circuit Current (Quasi-Static Power):** A small amount of current that flows from VDD to ground during the switching transition of a gate. This happens when both the PMOS and NMOS transistors in a CMOS inverter are momentarily conducting. While technically dynamic, it's often discussed alongside static power as it's a continuous, albeit small, loss during transitions.

#### 3.3. Dynamic Power Dissipation

Dynamic power dissipation is associated with the switching activity of the circuit.

*   **Switching Power ($P_{switch}$):** The power consumed due to charging and discharging of load capacitances during switching.
    *   **Formula:** $P_{switch} \approx \alpha \cdot C_L \cdot V_{DD}^2 \cdot f$
        *   $\alpha$: Activity factor (average number of transitions per clock cycle per gate).
        *   $C_L$: Total load capacitance (including gate input capacitance of subsequent gates, interconnect capacitance, and parasitic capacitances).
        *   $V_{DD}$: Supply voltage.
        *   $f$: Clock frequency.

*   **Short-Circuit Power ($P_{short}$):** As mentioned earlier, this is the power dissipated due to the direct path from VDD to ground when both PMOS and NMOS are conducting during switching.
    *   **Formula (simplified):** $P_{short} \approx \frac{1}{12} \beta_{eff} (V_{DD} - V_{th})^3 \cdot \tau \cdot f$
        *   $\beta_{eff}$: Effective transconductance parameter.
        *   $V_{th}$: Threshold voltage.
        *   $\tau$: Transition time.

### 4. Static Power Dissipation - Detailed Look

#### 4.1. Subthreshold Leakage ($I_{off}$)

*   **Origin:** Even when $V_{GS} < V_{th}$, a small number of charge carriers can still gain enough thermal energy to overcome the gate's potential barrier and flow from source to drain.
*   **Dependence:**
    *   Exponentially dependent on $V_{GS} - V_{th}$.
    *   Exponentially dependent on $V_{DS}$.
    *   Linearly dependent on $W/L$ ratio of the MOSFET.
    *   Strongly dependent on temperature.
*   **Impact:** In highly scaled technologies with reduced $V_{th}$ and smaller gate lengths, subthreshold leakage becomes a significant contributor to static power.

#### 4.2. Gate Oxide Leakage ($I_{ox}$)

*   **Origin:** As gate dielectric thickness ($t_{ox}$) is reduced (to improve gate control and reduce short-channel effects), the probability of electrons tunneling through the thin oxide increases.
*   **Dependence:**
    *   Exponentially dependent on $t_{ox}$.
    *   Dependent on the electric field across the gate oxide ($V_{GS}/t_{ox}$).
*   **Impact:** While traditionally smaller than subthreshold leakage, advancements in transistor technology have made gate oxide leakage a non-negligible factor.

#### 4.3. Junction Leakage

*   **Origin:** Reverse-biased PN junctions (between source/drain diffusions and the substrate) have a small leakage current due to minority carrier generation in the depletion region.
*   **Dependence:**
    *   Dependent on the doping concentration of the junctions.
    *   Dependent on the area of the junction.
    *   Temperature dependent.
*   **Impact:** Generally less significant than subthreshold leakage in most modern designs, but can be important for large diffusion areas or at high temperatures.

**Important Point to Remember:** For scaled CMOS technologies with low threshold voltages, **subthreshold leakage is typically the dominant component of static power dissipation.**

#### 4.4. Static Power Calculation (for a single CMOS inverter)

The static power consumed by a CMOS inverter when it is in a steady state (either logic '0' or logic '1') is the sum of the leakage currents flowing from VDD to ground through the PMOS and NMOS transistors.

*   **When output is HIGH (input is LOW):** NMOS is OFF, PMOS is ON. Leakage flows through PMOS.
*   **When output is LOW (input is HIGH):** PMOS is OFF, NMOS is ON. Leakage flows through NMOS.

The total static power for an inverter will be approximately $P_{static} = I_{leak} \times V_{DD}$, where $I_{leak}$ is the total leakage current from VDD to ground.

### 5. Dynamic Power Dissipation - Detailed Look

#### 5.1. Switching Power ($P_{switch}$)

*   **Mechanism:** When a logic gate switches, its output capacitance ($C_L$) needs to be charged to $V_{DD}$ (when the output goes from '0' to '1') and discharged to ground (when the output goes from '1' to '0').
    *   **Charging:** Energy drawn from the power supply is $V_{DD} \times C_L$. Half of this energy is dissipated in the charging transistor, and the other half is stored in the capacitor.
    *   **Discharging:** The energy stored in the capacitor ($1/2 C_L V_{DD}^2$) is dissipated as heat in the discharging transistor.
    *   **Total energy per transition:** $C_L V_{DD}^2$.
*   **Dominant Factor:** This is the most significant component of power dissipation in most digital CMOS circuits, especially at higher frequencies.
*   **Dependence:**
    *   **Load Capacitance ($C_L$):** Directly proportional to $C_L$. Minimizing capacitance by optimizing layout, reducing interconnect length, and using smaller transistors is crucial.
    *   **Supply Voltage ($V_{DD}$):** Quadratically proportional to $V_{DD}$. Lowering $V_{DD}$ is a very effective way to reduce switching power, but it also slows down the circuit.
    *   **Clock Frequency ($f$):** Linearly proportional to $f$. Higher frequencies mean more switching events per unit time.
    *   **Activity Factor ($\alpha$):** Directly proportional to activity. Gates that switch frequently consume more power.

#### 5.2. Short-Circuit Power ($P_{short}$)

*   **Mechanism:** During the transition of a CMOS gate (e.g., inverter), there is a brief period where both the PMOS and NMOS transistors are in the saturation region and form a direct path between $V_{DD}$ and ground.
*   **Dependence:**
    *   **Transition Time ($\tau$):** Proportional to the transition time. Slower transitions lead to longer conduction periods and higher short-circuit power.
    *   **Threshold Voltages ($V_{th}$):** Strongly dependent on the difference between $V_{DD}$ and $V_{th}$.
    *   **Transconductance ($\beta_{eff}$):** Proportional to the effective transconductance of the transistors.
    *   **Frequency ($f$):** Linearly proportional to the frequency of switching.
*   **Impact:** Typically much smaller than switching power in well-designed circuits with fast transitions, but can become significant for slower rise/fall times or very high frequencies.

**Important Point to Remember:** **Switching power is the dominant component of dynamic power dissipation.**

### 6. Power Dissipation in Static CMOS Logic Circuits

*   **Static CMOS Structure:** Static CMOS logic gates (like inverters, NAND, NOR) are characterized by a complementary structure where a pull-up network (made of PMOS transistors) and a pull-down network (made of NMOS transistors) are connected between $V_{DD}$ and ground, respectively.
*   **Zero Static Power (Ideal):** In an *ideal* static CMOS gate, when the input is stable (either '0' or '1'), one of the networks (pull-up or pull-down) is completely cut off. This means there is no direct path from $V_{DD}$ to ground, and therefore, no static power is consumed, except for the negligible leakage currents.
*   **Practical Static Power:** In reality, due to leakage currents (subthreshold, gate, junction), a small but non-zero static power is consumed even when the circuit is idle. This is why low-power design techniques often focus on minimizing these leakage currents.
*   **Dynamic Power in Static CMOS:** The switching power component is significant and depends on the load capacitance, switching frequency, and $V_{DD}$.

### 7. Power Dissipation in Dynamic CMOS Logic Circuits (Brief Mention for Contrast)

*   **Dynamic CMOS Structure:** Dynamic logic circuits (e.g., domino logic, N-P logic) rely on clock signals to control their operation and often precharge a node to a certain value.
*   **Higher Dynamic Power:** These circuits typically exhibit higher dynamic power consumption due to:
    *   **Charge Sharing:** During the evaluation phase, charge stored on internal nodes can be shared with the output node, leading to power loss.
    *   **Clock Power:** The clock signal itself needs to drive large capacitances, leading to significant clock distribution power.
    *   **Output Transitions:** More complex transition behaviors can sometimes lead to higher switching losses.
*   **Lower Static Power (Often):** While dynamic power is higher, some dynamic logic families are designed to have very low static power dissipation (ideally zero) because they generally avoid a direct pull-up/pull-down path during the evaluation phase when the clock is active.

### 8. Power Reduction Techniques (Brief Overview)

Understanding power dissipation naturally leads to considering techniques for its reduction:

*   **Voltage Scaling:** Reducing $V_{DD}$ (though it impacts performance).
*   **Clock Gating:** Disabling the clock to blocks of the circuit that are not actively used.
*   **Transistor Sizing:** Optimizing the W/L ratios of transistors to minimize capacitance and leakage.
*   **Low-Power Logic Styles:** Choosing logic styles that inherently consume less power.
*   **Power-Gating:** Shutting off the power supply to idle blocks entirely.
*   **Body Biasing:** Modifying the threshold voltage to control leakage.

### 9. Examples

**Example 1: Static Power in a CMOS Inverter**

Consider a single CMOS inverter with a $V_{DD}$ of 1.0V. Assume that the total leakage current flowing from VDD to ground through the PMOS and NMOS transistors when they are "off" is $I_{leak} = 10 \text{ nA}$.

*   **Static Power:** $P_{static} = I_{leak} \times V_{DD} = 10 \text{ nA} \times 1.0 \text{ V} = 10 \text{ nW}$.
    *   *Note:* This is a very small value, but for millions of transistors in a complex IC, this can add up significantly.

**Example 2: Switching Power of a CMOS Inverter**

Consider a CMOS inverter driving a load capacitance of $C_L = 10 \text{ fF}$. The supply voltage is $V_{DD} = 1.0 \text{ V}$, and the circuit operates at a clock frequency of $f = 100 \text{ MHz}$. Assume the activity factor $\alpha = 0.5$ (meaning the gate switches on average once for every two clock cycles).

*   **Switching Power:** $P_{switch} \approx \alpha \cdot C_L \cdot V_{DD}^2 \cdot f$
    *   $P_{switch} \approx 0.5 \times 10 \text{ fF} \times (1.0 \text{ V})^2 \times 100 \text{ MHz}$
    *   $P_{switch} \approx 0.5 \times (10 \times 10^{-15} \text{ F}) \times 1.0 \text{ V}^2 \times (100 \times 10^6 \text{ Hz})$
    *   $P_{switch} \approx 5 \times 10^{-9} \text{ W} = 5 \text{ nW}$

    *   *Observation:* In this specific example, switching power appears low. This is because the capacitance and voltage are small. However, in complex chips with large load capacitances and higher voltages/frequencies, switching power can reach Watts or even tens of Watts.

### 10. Practice Questions and Exercises

**Question 1:** What are the two primary sources of power dissipation in CMOS circuits?
**Answer:** Static power dissipation and dynamic power dissipation.

**Question 2:** Which type of leakage current is typically the dominant contributor to static power dissipation in modern scaled-down CMOS technologies?
**Answer:** Subthreshold leakage ($I_{off}$).

**Question 3:** If the supply voltage ($V_{DD}$) of a CMOS circuit is reduced by half, how does the switching power consumption change (assuming other factors remain constant)?
**Answer:** Switching power is quadratically dependent on $V_{DD}$. Therefore, reducing $V_{DD}$ by half will reduce switching power by a factor of $ (1/2)^2 = 1/4 $.

**Question 4:** Briefly explain the cause of short-circuit power dissipation in CMOS gates.
**Answer:** Short-circuit power occurs during the switching transition when both the PMOS and NMOS transistors in a CMOS gate are momentarily conducting, creating a direct path from $V_{DD}$ to ground.

**Question 5:** Calculate the total power dissipation of a chip that has a static power consumption of $200 \text{ } \mu\text{W}$ and a dynamic power consumption of $5 \text{ mW}$ during operation.
**Answer:** Total Power = Static Power + Dynamic Power = $200 \text{ } \mu\text{W} + 5 \text{ mW} = 0.2 \text{ mW} + 5 \text{ mW} = 5.2 \text{ mW}$.

### 11. Important Points to Remember

*   **Static Power:** Dominated by leakage currents (subthreshold, gate, junction). It's consumed even when the circuit is idle.
*   **Dynamic Power:** Dominated by switching power ($P_{switch} \approx \alpha C_L V_{DD}^2 f$). It's consumed during switching activity.
*   **Scaling:** Advances in technology (lower $V_{DD}$, thinner oxides, shorter channels) often increase leakage but reduce switching power.
*   **Trade-offs:** Power consumption is a key trade-off with performance (speed) and area. Lowering $V_{DD}$ reduces power but also speed.
*   **Design for Power:** Low-power design is an integral part of VLSI design, requiring careful consideration of logic styles, circuit implementation, and clocking strategies.
*   **Static CMOS Advantage:** Ideally, static CMOS logic has zero static power dissipation in steady states, making it energy-efficient. However, leakage currents are the practical reality.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 12. References and Further Reading

*   **CMOS Digital Integrated Circuits - Analysis & Design by Kang, Leblebici, Kim:** Provides detailed analysis of leakage mechanisms and power dissipation in CMOS circuits. (Chapter on Power Dissipation)
*   **Modern VLSI Design by Wayne Wolf:** Covers power estimation and reduction techniques in the context of system design. (Chapter on Power Consumption)
*   **Digital Integrated Circuits by Jan M. Rabaey:** Offers a good foundation in CMOS circuit behavior, including power aspects. (Chapter on CMOS Inverter and Power Dissipation)
*   **Principles of CMOS VLSI Design - A Systems Perspective by Weste, Eshraghian:** Discusses the impact of technology scaling on power.

This concludes the notes on static and dynamic power dissipation for Module 3. Understanding these concepts is crucial for designing efficient and robust VLSI circuits.