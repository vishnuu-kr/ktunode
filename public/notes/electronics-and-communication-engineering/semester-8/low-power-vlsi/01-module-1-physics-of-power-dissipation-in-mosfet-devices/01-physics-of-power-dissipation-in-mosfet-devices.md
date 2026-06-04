---
title: "Physics of Power dissipation in MOSFET devices"
subject: "LOW POWER VLSI"
module: "Module 1: Physics of Power dissipation in MOSFET devices"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff660"
status: "completed"
scrapedAt: "2026-05-23T18:14:20.023Z"
---
# LOW POWER VLSI: Module 1 - Physics of Power Dissipation in MOSFET Devices

## Introduction

In modern integrated circuits (ICs), power consumption has become a critical design parameter, especially in battery-operated portable devices and high-performance computing. Understanding the fundamental physics of power dissipation in MOSFETs is crucial for designing efficient low-power circuits. This module delves into the various mechanisms contributing to power dissipation in MOSFET devices, laying the groundwork for subsequent modules on power optimization techniques.

## 1. MOSFET Operation and Basic Structure

Before diving into power dissipation, let's briefly review the MOSFET operation and structure.

*   **MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor):** A voltage-controlled semiconductor device used as a switch or amplifier.
*   **Structure:** Consists of a source, drain, gate, and body (substrate). The gate is insulated from the channel by a thin oxide layer.
*   **Operation:** Applying a voltage to the gate creates an electric field that induces or depletes charge carriers in the channel region between the source and drain, controlling the current flow.
*   **Regions of Operation:**
    *   **Cutoff:** No channel, very little current flows ($I_{DS} \approx 0$).
    *   **Triode/Linear:** Channel is formed, current is proportional to the voltage difference between drain and source ($V_{DS}$).
    *   **Saturation:** Channel is "pinched off" near the drain, current is largely independent of $V_{DS}$ and primarily controlled by the gate-source voltage ($V_{GS}$).

**Textbook Reference:**
*   **Sedra & Smith, 8/e:** Chapters 4 and 5 provide a thorough explanation of MOSFET fundamentals.
*   **Razavi (Design of Analog CMOS), 2/e:** Chapter 2 covers MOSFET device physics and characteristics.

## 2. Sources of Power Dissipation in MOSFETs

Power dissipation in MOSFETs can be broadly categorized into two main types: **Dynamic Power Dissipation** and **Static Power Dissipation**.

### 2.1. Dynamic Power Dissipation

Dynamic power is consumed when the circuit is actively switching states. It is proportional to the switching frequency and the capacitance being switched.

#### 2.1.1. Switching Power (Capacitive Load Power)

This is the dominant component of dynamic power. When a MOSFET switches, it charges and discharges various parasitic capacitances present in the circuit.

*   **Mechanism:**
    *   When a transistor switches ON, it needs to charge the gate capacitance of the next stage, the parasitic capacitances of interconnects, and the diffusion capacitances of the source/drain regions.
    *   When it switches OFF, these capacitances are discharged.
    *   Energy is dissipated during charging and discharging these capacitances. For a capacitive load $C_L$ being switched by a voltage swing $V_{DD}$, the energy consumed per switching cycle is approximately $C_L V_{DD}^2$.
*   **Formula:**
    $P_{switching} = \alpha C_L V_{DD}^2 f_{clk}$
    Where:
    *   $\alpha$: Activity factor (average fraction of transistors switching at each clock cycle).
    *   $C_L$: Total load capacitance (includes gate capacitance of the next stage, interconnect capacitance, diffusion capacitance).
    *   $V_{DD}$: Supply voltage.
    *   $f_{clk}$: Clock frequency.

*   **Key Takeaway:** Reducing $V_{DD}$ and $f_{clk}$ are primary methods for reducing switching power. $V_{DD}^2$ dependence means reducing voltage has a significant impact.

**Textbook Reference:**
*   **Baker et al., 4/e:** Chapter 1 discusses the basic power dissipation mechanisms, including switching power.
*   **Razavi (Design of Analog CMOS), 2/e:** Chapter 14 touches upon system-level considerations, including power.

#### 2.1.2. Short-Circuit Power Dissipation

This occurs during the brief period when both the PMOS and NMOS transistors in a CMOS logic gate are simultaneously in the saturation or linear region, creating a direct path for current from $V_{DD}$ to ground.

*   **Mechanism:** When the input to a CMOS gate is transitioning (e.g., from 0 to 1 for an inverter), there is a finite time during which the output voltage is not yet fully transitioned. During this transition, both NMOS and PMOS transistors are partially ON, allowing a direct current to flow from $V_{DD}$ to ground through the series combination of PMOS and NMOS.
*   **Factors Affecting Short-Circuit Power:**
    *   **Transition Speed:** Faster input transitions lead to longer overlap periods where both transistors are conducting.
    *   **Load Capacitance:** A larger load capacitance increases the transition time, thus increasing short-circuit power.
    *   **Supply Voltage ($V_{DD}$):** Higher $V_{DD}$ increases the current.
    *   **Transistor Sizes:** Wider transistors generally have lower resistance and can conduct more current during the overlap.
*   **Formula (Simplified):**
    $P_{short-circuit} \approx \frac{1}{12} \beta (V_{GS} - V_{th})^2 \tau_{sc} f_{clk}$
    Where:
    *   $\beta$: Transconductance parameter.
    *   $V_{GS}$: Gate-source voltage.
    *   $V_{th}$: Threshold voltage.
    *   $\tau_{sc}$: Duration of the short-circuit current.
    *   $f_{clk}$: Clock frequency.
*   **Key Takeaway:** While often less dominant than switching power, it becomes significant at higher frequencies and with faster input transitions. Slower transitions can mitigate this.

**Textbook Reference:**
*   **Sedra & Smith, 8/e:** Section 4.4.3 discusses short-circuit current in CMOS inverters.
*   **Baker et al., 4/e:** Chapter 1 also covers short-circuit power.

### 2.2. Static Power Dissipation

Static power is consumed even when the circuit is not actively switching. It is primarily due to leakage currents.

#### 2.2.1. Subthreshold Leakage Current ($I_{sub}$)

This is the most significant static power dissipation component in modern scaled technologies. It flows when the gate-source voltage ($V_{GS}$) is below the threshold voltage ($V_{th}$).

*   **Mechanism:** Even when $V_{GS} < V_{th}$, there isn't a complete cutoff of the channel. A small number of minority carriers are still present and can drift from source to drain due to the built-in potential difference and the electric field across the device. This current follows an exponential relationship with $V_{GS}$.
*   **Factors Affecting Subthreshold Leakage:**
    *   **Threshold Voltage ($V_{th}$):** Lower $V_{th}$ significantly increases subthreshold leakage (exponentially). Technology scaling often leads to reduced $V_{th}$.
    *   **Temperature:** Leakage current increases exponentially with temperature.
    *   **Device Dimensions:** Shorter channel lengths can increase leakage due to short-channel effects.
    *   **Supply Voltage ($V_{DD}$):** While it doesn't directly affect $I_{sub}$ when $V_{GS} < V_{th}$, operating at lower $V_{DD}$ can exacerbate leakage issues relative to the reduced dynamic power.
*   **Formula (Approximate for NMOS):**
    $I_{sub} \approx I_0 \exp\left(\frac{V_{GS} - V_{th}}{n V_T}\right) \left(1 - \exp\left(-\frac{V_{DS}}{V_T}\right)\right)$
    Where:
    *   $I_0$: A technology-dependent current.
    *   $V_T = kT/q$: Thermal voltage.
    *   $n$: Subthreshold swing factor (ideally 1, practically > 1).
    *   $V_{GS}$: Gate-source voltage.
    *   $V_{th}$: Threshold voltage.
    *   $V_{DS}$: Drain-source voltage.
*   **Key Takeaway:** This is a major challenge in low-power design, especially with aggressive scaling. Techniques to increase $V_{th}$ or reduce temperature are crucial.

**Textbook Reference:**
*   **Sedra & Smith, 8/e:** Section 4.4.2 discusses leakage current.
*   **Razavi (Fundamentals of Microelectronics), 2/e:** Chapter 13 details leakage mechanisms in MOSFETs.

#### 2.2.2. Gate Leakage Current ($I_{gate}$)

This current flows through the gate oxide insulator from the gate to the channel or substrate.

*   **Mechanism:** Due to quantum mechanical tunneling, carriers can pass through the thin gate oxide layer, especially as oxide thicknesses are scaled down to improve transistor performance.
*   **Types:**
    *   **Direct Tunneling:** Occurs when the oxide is very thin (e.g., < 1.5 nm). Electrons tunnel directly through the oxide barrier.
    *   **Fowler-Nordheim Tunneling:** Occurs at higher electric fields across the oxide, allowing carriers to tunnel through a triangular barrier.
*   **Factors Affecting Gate Leakage:**
    *   **Gate Oxide Thickness:** Thinner oxides lead to higher gate leakage.
    *   **Gate Material:** Metal gates can have different leakage characteristics than polysilicon gates.
    *   **Gate Voltage and $V_{DD}$:** Higher voltages increase the electric field across the oxide, leading to increased tunneling.
    *   **Temperature:** Can have a secondary effect on tunneling.
*   **Key Takeaway:** As gate oxides become thinner, gate leakage becomes a significant concern, particularly in advanced technologies. Using thicker high-k dielectric materials is a common solution.

**Textbook Reference:**
*   **Baker et al., 4/e:** Chapter 1 might mention gate leakage as a technology scaling issue.
*   **Razavi (Fundamentals of Microelectronics), 2/e:** Chapter 13 likely covers gate leakage mechanisms.

#### 2.2.3. Junction Leakage Current ($I_{junction}$)

This current flows through the reverse-biased PN junctions of the source/drain regions to the substrate.

*   **Mechanism:** Primarily due to two mechanisms:
    *   **Reverse Saturation Current:** Thermionic emission of minority carriers across the depletion region.
    *   **Avalanche Breakdown:** At high reverse bias voltages, impact ionization can occur, leading to a sharp increase in current.
*   **Factors Affecting Junction Leakage:**
    *   **Temperature:** Increases significantly with temperature (exponentially).
    *   **Reverse Bias Voltage:** Increases with reverse bias voltage.
    *   **Junction Area and Perimeter:** Larger junction areas and perimeters lead to higher leakage.
    *   **Doping Concentration:** Higher doping can lead to increased leakage.
*   **Key Takeaway:** While generally smaller than subthreshold leakage in scaled technologies, it becomes more important at higher temperatures and with larger junction areas.

**Textbook Reference:**
*   **Sedra & Smith, 8/e:** Section 4.4.1 discusses PN junction characteristics, including leakage.
*   **Razavi (Fundamentals of Microelectronics), 2/e:** Chapter 6 covers PN junction diodes and their leakage.

#### 2.2.4. Body Bias Leakage

Leakage current from the source/drain to the substrate due to the body bias condition. This is often part of the junction leakage.

## 3. Impact of Technology Scaling on Power Dissipation

Technology scaling (e.g., Moore's Law) has led to smaller transistors, higher integration density, and increased speed. However, it also brings challenges for power dissipation.

**Addressing Course Outcome CO1: Describe the impact of technology scaling on power dissipation in digital ICs and various short channel effects.**

*   **Scaling Benefits:**
    *   **Reduced Switching Power:**
        *   Smaller transistors have smaller gate capacitances ($C_L$).
        *   $V_{DD}$ scaling has been a primary method to reduce power ($P_{switching} \propto V_{DD}^2$).
*   **Scaling Challenges (Leading to Increased Power Dissipation):**
    *   **Threshold Voltage ($V_{th}$) Scaling:** To maintain switching speed, $V_{th}$ must also be scaled down. This leads to a significant increase in **subthreshold leakage current** ($I_{sub}$), which is exponentially dependent on $V_{th}$.
    *   **Gate Oxide Thickness Scaling:** To maintain sufficient gate control and drive current, the gate oxide thickness is aggressively reduced. This leads to increased **gate leakage current** through tunneling.
    *   **Channel Length Scaling:** Shorter channel lengths lead to **short-channel effects (SCEs)**. These effects can:
        *   **Lower effective $V_{th}$:** Exacerbating subthreshold leakage.
        *   **Increase Drain-Induced Barrier Lowering (DIBL):** Makes the threshold voltage more dependent on $V_{DS}$, increasing leakage.
        *   **Velocity Saturation:** Affects drive current but can also influence leakage.
        *   **Hot Carrier Effects:** Can degrade device performance over time.
    *   **Increased Density:** More transistors on a chip mean a higher total leakage current and higher overall power dissipation if not managed.
    *   **Higher Frequency Operation:** While scaling allows for higher frequencies, this directly increases dynamic power.

**Short Channel Effects (SCEs) Summary relevant to power:**

*   **DIBL (Drain-Induced Barrier Lowering):** The drain voltage effectively lowers the barrier potential at the source, allowing current to flow even when $V_{GS} < V_{th}$. This increases subthreshold leakage.
*   **$V_{th}$ Roll-off:** The threshold voltage decreases as the channel length shrinks, making devices more prone to leakage.
*   **Punch-through:** At very short channel lengths, the depletion regions of the source and drain can merge, creating a conductive path that bypasses the gate control, leading to high leakage.

**Overall Impact:** While scaling reduces dynamic power (due to smaller capacitance and $V_{DD}$ reduction), the increase in static leakage power (subthreshold and gate leakage) due to reduced $V_{th}$ and thinner oxides has become a major bottleneck in achieving ultra-low power designs at advanced technology nodes.

**Textbook Reference:**
*   **Razavi (Design of Analog CMOS), 2/e:** Chapter 1 discusses the benefits and challenges of scaling.
*   **Baker et al., 4/e:** Chapter 1 likely covers the impact of scaling and SCEs.

## 4. Sources of Power Dissipation in Digital ICs (Review and Context)

This section consolidates the physics of power dissipation into the context of digital ICs.

**Addressing Course Outcome CO2: Discuss the different sources of power dissipation in digital ICs.**

Digital ICs, built using MOSFETs, exhibit power dissipation from the same fundamental mechanisms discussed earlier:

1.  **Dynamic Power Dissipation:**
    *   **Switching Power:** This is the dominant component in most actively switching digital circuits. It arises from charging and discharging parasitic capacitances associated with transistors, interconnects, and internal nodes during logic transitions.
        *   *Example:* In a ripple carry adder, each full adder stage charges and discharges the input capacitance of the next stage.
    *   **Short-Circuit Power:** Occurs during the brief transition intervals when both PMOS and NMOS transistors in a logic gate are partially conducting, creating a direct path from $V_{DD}$ to ground.
        *   *Example:* An inverter's output transitioning from high to low will have a period where its NMOS is ON and its PMOS is also partially ON.

2.  **Static Power Dissipation (Leakage Power):** This is consumed even when no switching activity is occurring.
    *   **Subthreshold Leakage ($I_{sub}$):** The current flowing through transistors that are supposed to be OFF ($V_{GS} < V_{th}$). This is critical in modern scaled technologies due to low $V_{th}$ and SCEs.
        *   *Example:* In a large combinational logic block that is not actively switching, all transistors that are supposed to be OFF will contribute to subthreshold leakage.
    *   **Gate Leakage ($I_{gate}$):** Current tunneling through the thin gate oxide. Becomes significant with very thin oxides.
    *   **Junction Leakage ($I_{junction}$):** Reverse leakage across PN junctions of source/drain regions.
    *   **Others:** Band-to-band tunneling (BTBT), gate-induced drain leakage (GIDL) can also contribute in advanced nodes.

**Important Point:** In older technologies, dynamic power dominated. In modern technologies (e.g., below 65nm), static leakage power has become a very significant, often comparable or even dominant, portion of the total power budget, especially for chips with high transistor density and complex state storage.

**Textbook Reference:**
*   **Baker et al., 4/e:** Chapter 1 provides an excellent overview of power dissipation sources in digital circuits.
*   **Razavi (Design of Analog CMOS), 2/e:** Chapter 14 discusses power in ICs.

## 5. Practice Questions and Answers

**Question 1:**
Which component of power dissipation is proportional to $V_{DD}^2$ and $f_{clk}$?
(a) Static Power
(b) Short-Circuit Power
(c) Switching Power
(d) Gate Leakage

**Answer:** (c) Switching Power. The formula is $P_{switching} = \alpha C_L V_{DD}^2 f_{clk}$.

**Question 2:**
In scaled technologies, which type of leakage current becomes a major concern due to reduced threshold voltages?
(a) Gate Leakage
(b) Junction Leakage
(c) Subthreshold Leakage
(d) Band-to-Band Tunneling

**Answer:** (c) Subthreshold Leakage. Subthreshold leakage current exhibits an exponential dependence on $V_{th}$, so reducing $V_{th}$ significantly increases it.

**Question 3:**
True or False: Short-circuit power dissipation occurs only when transistors are fully OFF.

**Answer:** False. Short-circuit power occurs during the transition phase when both NMOS and PMOS transistors in a CMOS gate are simultaneously partially ON.

**Question 4:**
Explain the relationship between gate oxide thickness and gate leakage current.

**Answer:** Gate leakage current increases exponentially with decreasing gate oxide thickness due to quantum mechanical tunneling. As transistors are scaled down, gate oxides are made thinner to maintain gate control, leading to higher gate leakage.

**Question 5:**
List three short-channel effects that contribute to increased leakage in scaled MOSFETs.

**Answer:**
1.  Drain-Induced Barrier Lowering (DIBL)
2.  $V_{th}$ Roll-off
3.  Punch-through

## 6. Important Points to Remember

*   **Two Main Categories:** Power dissipation in MOSFETs is divided into Dynamic (switching, short-circuit) and Static (leakage) power.
*   **Dynamic Power Dominance:** Historically, dynamic power (especially switching power) dominated.
*   **Scaling Impact:** Technology scaling has reduced dynamic power (smaller capacitance, $V_{DD}$ scaling) but increased static leakage power (lower $V_{th}$, thinner oxides, SCEs).
*   **$V_{DD}^2$ Dependence:** Switching power is highly sensitive to the supply voltage. Reducing $V_{DD}$ is a very effective power-saving technique, but it must be balanced against performance.
*   **Subthreshold Leakage:** The exponential dependence on $V_{th}$ makes subthreshold leakage a critical issue in scaled technologies.
*   **Gate Leakage:** Becomes significant as gate oxides shrink below ~1.5 nm.
*   **Trade-offs:** Low power design involves balancing performance, power, and area. Reducing leakage often comes at the cost of performance (e.g., by increasing $V_{th}$).

---

This concludes Module 1, providing the foundational understanding of power dissipation mechanisms in MOSFETs. Subsequent modules will build upon this knowledge to explore various power reduction techniques.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
