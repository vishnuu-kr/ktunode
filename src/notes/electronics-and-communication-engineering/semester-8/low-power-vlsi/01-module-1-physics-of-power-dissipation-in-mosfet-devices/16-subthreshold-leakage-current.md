---
title: "Subthreshold Leakage Current"
subject: "LOW POWER VLSI"
module: "Module 1: Physics of Power dissipation in MOSFET devices"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff66f"
status: "completed"
scrapedAt: "2026-05-23T18:14:30.939Z"
---
# Low Power VLSI: Module 1 - Physics of Power Dissipation in MOSFET Devices

## Topic: Subthreshold Leakage Current

---

### 1. Introduction to MOSFET Operation and Power Dissipation

Understanding power dissipation in MOSFETs is crucial for low-power VLSI design. While dynamic power consumption (due to switching) is dominant in older technologies, **static power consumption, primarily due to leakage currents, is becoming increasingly significant as devices scale down.** This module focuses on the physics behind these leakage mechanisms.

*   **Dynamic Power:** $P_{dyn} = \alpha \cdot C_{load} \cdot V_{dd}^2 \cdot f$
    *   $\alpha$: Activity factor
    *   $C_{load}$: Load capacitance
    *   $V_{dd}$: Supply voltage
    *   $f$: Switching frequency
*   **Static Power:** Primarily due to leakage currents when the transistor is OFF.

**Key Concept:** As device dimensions shrink (scaling down $V_{dd}$ and gate oxide thickness), subthreshold leakage becomes a dominant factor in static power dissipation. This aligns with **CO1: Describe the impact of technology scaling on power dissipation in digital ICs and various short channel effects.**

---

### 2. MOSFET Regions of Operation and Leakage

MOSFETs have distinct regions of operation:

*   **Cutoff (OFF) Region:** Ideally, no current flows. However, in reality, small leakage currents exist.
*   **Triode (Linear) Region:** $V_{ds} < V_{gs} - V_{th}$
*   **Saturation Region:** $V_{ds} \ge V_{gs} - V_{th}$

**Subthreshold leakage occurs when the transistor is intended to be in the cutoff region ($V_{gs} < V_{th}$), but a small current still flows.** This is because the gate voltage is not sufficient to create a strong inversion layer, but there's still some weak inversion that allows charge carriers to diffuse across the channel.

---

### 3. The Physics of Subthreshold Leakage Current

Subthreshold leakage is also known as **weak inversion current**.

**Definition:** Subthreshold leakage current is the current that flows between the drain and source of a MOSFET when the gate-to-source voltage ($V_{gs}$) is below the threshold voltage ($V_{th}$).

**Mechanism:**

1.  **Below Threshold:** When $V_{gs} < V_{th}$, the electric field from the gate is not strong enough to create a fully inverted channel with a high concentration of mobile carriers (electrons for NMOS, holes for PMOS).
2.  **Weak Inversion:** However, there is still a small concentration of minority carriers in the channel due to thermal generation and diffusion. This creates a "weak inversion" layer.
3.  **Drift and Diffusion:** The small $V_{ds}$ applied between the drain and source causes these minority carriers to drift towards the drain. Additionally, a concentration gradient of carriers exists from the source to the drain, leading to diffusion current.
4.  **Exponential Dependence:** The magnitude of this current is exponentially dependent on the gate-to-source voltage ($V_{gs}$) and the temperature.

**Mathematical Formulation (Referencing Razavi, Sedra & Smith):**

The subthreshold current in an NMOS transistor can be approximated by:

$I_{ds} \approx I_0 \cdot e^{\frac{q(V_{gs} - V_{th})}{nkT}} \cdot (1 - e^{-\frac{qV_{ds}}{kT}})$

Where:

*   $I_0$: A pre-exponential factor, dependent on device parameters (e.g., mobility, oxide capacitance, channel dimensions, thermal voltage).
*   $q$: Elementary charge ($1.602 \times 10^{-19}$ C).
*   $V_{gs}$: Gate-to-source voltage.
*   $V_{th}$: Threshold voltage.
*   $n$: Subthreshold slope factor or ideality factor (typically 1 to 2). It accounts for non-ideal behavior and is influenced by the doping concentration in the channel and the gate oxide properties. For an ideal MOS, $n=1$.
*   $k$: Boltzmann constant ($1.381 \times 10^{-23}$ J/K).
*   $T$: Temperature in Kelvin.
*   $V_{ds}$: Drain-to-source voltage.

**Important Points:**

*   **Exponential Dependence on $V_{gs}$:** A small change in $V_{gs}$ (below $V_{th}$) causes a significant change in subthreshold current. This is why turning off a transistor completely becomes challenging.
*   **Subthreshold Swing (S):** This parameter quantifies how sharply the drain current changes with gate voltage in the subthreshold region.
    $S = \frac{dV_{gs}}{d(\log_{10} I_{ds})} = \frac{nkT}{q} \ln(10)$
    *   A lower subthreshold swing is desirable for reducing leakage and enabling lower threshold voltages.
    *   At room temperature ($300K$), $S \approx 59.6 \cdot n$ mV/decade. For an ideal transistor ($n=1$), $S \approx 60$ mV/decade.
*   **Temperature Dependence:** The subthreshold current increases significantly with temperature due to increased thermal carrier generation and a reduction in the effective threshold voltage. This is a critical consideration for power management.
*   **$V_{ds}$ Dependence:** The term $(1 - e^{-\frac{qV_{ds}}{kT}})$ approximates the channel potential variation due to $V_{ds}$. For $V_{ds} \gg kT/q$ (which is usually the case in normal operation), this term approaches 1, and the current becomes primarily dependent on $V_{gs}$ and temperature.

This understanding directly contributes to **CO2: Discuss the different sources of power dissipation in digital ICs**, as subthreshold leakage is a major static power source.

---

### 4. Factors Influencing Subthreshold Leakage

Several factors, often related to technology scaling and short-channel effects, significantly impact subthreshold leakage. This relates to **CO1**.

*   **Threshold Voltage ($V_{th}$):**
    *   **Lower $V_{th}$:** Leads to a significant increase in subthreshold leakage because the gate needs less voltage to turn on the transistor, and the turn-off point is also lower. Modern low-power designs often use techniques to dynamically adjust $V_{th}$ to reduce leakage when not actively switching.
*   **Temperature:**
    *   As discussed, higher temperatures increase leakage. This is a fundamental physical phenomenon.
*   **Channel Length ($L$):**
    *   **Shorter $L$:** In short-channel devices, the drain electric field becomes more significant, and it can influence the channel potential more strongly, even when the gate is biased below $V_{th}$. This leads to **Drain-Induced Barrier Lowering (DIBL)**, which effectively reduces $V_{th}$ and increases subthreshold leakage.
*   **Gate Oxide Thickness ($t_{ox}$):**
    *   While not directly affecting the subthreshold slope, thinner oxides (required for scaling) can lead to higher gate leakage (tunneling), which is a different leakage mechanism. However, the influence of oxide capacitance on the subthreshold slope (via the factor $n$) is indirect.
*   **Doping Concentration:**
    *   Higher channel doping concentration leads to a steeper subthreshold slope (lower $n$) and can reduce subthreshold leakage. However, it also increases the junction capacitance and can raise the threshold voltage.
*   **Body Effect:**
    *   The source-to-body voltage ($V_{sb}$) affects the threshold voltage ($V_{th}$). An increase in $V_{sb}$ (e.g., substrate bias) increases $V_{th}$ and reduces subthreshold leakage.

**Short Channel Effects (Relevant to CO1):**

*   **Drain-Induced Barrier Lowering (DIBL):** The drain voltage can lower the potential barrier at the source-channel junction, effectively reducing $V_{th}$ and increasing subthreshold leakage. This is particularly pronounced in short-channel devices.
*   **Channel Length Modulation:** While primarily affecting the ON-current in saturation, it can also have a subtle effect on the subthreshold region.

---

### 5. Impact of Subthreshold Leakage in Digital ICs

Subthreshold leakage contributes to the **static power dissipation** of a digital circuit.

*   **Always-ON Nature:** Leakage currents flow even when transistors are supposed to be OFF, meaning power is being consumed continuously, regardless of switching activity.
*   **Standby Power:** In battery-powered devices or systems that spend a significant amount of time in low-power modes, subthreshold leakage is a major contributor to battery drain.
*   **Scaling Challenges:** As devices continue to shrink, $V_{th}$ must be reduced to maintain performance, but this drastically increases subthreshold leakage. This trade-off is a fundamental challenge in low-power design.
*   **Increased Temperature:** Leakage increases with temperature, which can create a positive feedback loop, further increasing temperature and leakage, potentially leading to thermal runaway in extreme cases.

This is directly related to **CO2** and also impacts the need for strategies discussed in **CO3**.

---

### 6. Techniques to Mitigate Subthreshold Leakage

Several techniques are employed in low-power VLSI to reduce subthreshold leakage. These strategies aim to either increase the effective $V_{th}$ when the device is OFF or reduce the driving force for leakage.

*   **High Threshold Voltage ($V_{th}$) Transistors:**
    *   Using transistors with a higher $V_{th}$ significantly reduces subthreshold leakage. However, this also slows down the transistors when they are ON, leading to reduced performance.
    *   **Dual Threshold Voltage (Dual $V_{th}$) Design:** This is a common technique where critical path circuits use low $V_{th}$ transistors for high speed, while non-critical paths use high $V_{th}$ transistors to save power.
*   **Multi-threshold CMOS (MTCMOS):**
    *   This technique uses high $V_{th}$ "sleep transistors" (often series-connected) controlled by a sleep signal. When the sleep signal is low, these transistors are OFF, effectively cutting off the power supply ($V_{dd}$) to large blocks of the circuit, thus eliminating most leakage. When the sleep signal is high, the sleep transistors are ON, and the circuit operates normally.
    *   This is a core technique for power gating, aligning with **CO3: Describe the various approaches for power management in digital ICs.**
*   **Dynamic Voltage and Frequency Scaling (DVFS):**
    *   While primarily targeting dynamic power by reducing $V_{dd}$ and frequency, reducing $V_{dd}$ can also indirectly affect leakage by altering the voltage gradients. However, reducing $V_{dd}$ too much can increase leakage if it requires lowering $V_{th}$ to maintain functionality.
*   **Adaptive Body Biasing (ABB):**
    *   By applying a reverse bias to the source-substrate junction (positive bias for NMOS, negative for PMOS), the threshold voltage can be effectively increased ($V_{th}$ increases with increasing $|V_{sb}|$). This reduces subthreshold leakage when the transistor is OFF. Forward biasing the substrate can be used to lower $V_{th}$ and boost performance when needed. This is another key technique for **CO3**.
*   **Power Gating:**
    *   Similar to MTCMOS, power gating involves shutting off the power supply to blocks of the circuit that are not in use. This is a more coarse-grained approach than MTCMOS but very effective in eliminating leakage in idle blocks.
*   **Forward Body Biasing:**
    *   This technique reduces $V_{th}$, which increases leakage, but it significantly improves the ON-current and performance. It is used when performance is critical and leakage is a secondary concern, or in conjunction with other leakage reduction techniques.
*   **Stack Effect:**
    *   When multiple transistors are connected in series in the OFF state (e.g., in a NAND gate with both inputs LOW), the intermediate node is often biased at a voltage that reduces the electric field across the gate-source junction of the lower transistor. This "stack effect" can significantly reduce the leakage of the lower transistor. This is a circuit-level design consideration, partially aligning with **CO4**.

---

### 7. Examples and Applications

*   **Mobile Devices:** Minimizing battery drain is paramount. Subthreshold leakage must be aggressively managed through techniques like power gating and dual $V_{th}$ designs.
*   **Internet of Things (IoT) Devices:** These devices often operate on batteries for extended periods, making static power consumption (dominated by leakage) a critical design parameter.
*   **High-Performance Computing:** While dynamic power is a major concern, even small leakage currents across billions of transistors can contribute to overall power consumption and heat generation.

---

### 8. Practice Questions

**Question 1:** Define subthreshold leakage current and explain its physical origin in a MOSFET.
**Answer:** Subthreshold leakage current is the current that flows between the drain and source of a MOSFET when the gate-to-source voltage ($V_{gs}$) is below the threshold voltage ($V_{th}$). It arises from the presence of a weak inversion layer of minority carriers in the channel due to thermal generation and diffusion, which are influenced by the small $V_{ds}$.

**Question 2:** What is the subthreshold swing (S)? How does it relate to the performance and leakage of a MOSFET?
**Answer:** The subthreshold swing (S) is the change in gate-to-source voltage required to change the drain current by one decade in the subthreshold region. $S = \frac{nkT}{q} \ln(10)$. A smaller S (closer to $60$ mV/decade at room temp) indicates a sharper transition from OFF to ON, which is desirable for reducing leakage while allowing for lower $V_{th}$ for faster switching.

**Question 3:** List three factors that significantly increase subthreshold leakage current.
**Answer:**
1.  Decreasing threshold voltage ($V_{th}$).
2.  Increasing temperature.
3.  Short-channel effects like DIBL.

**Question 4:** Describe one technique used in low-power VLSI to reduce subthreshold leakage.
**Answer:** **MTCMOS (Multi-threshold CMOS):** This involves using high threshold voltage transistors as "sleep transistors" to gate the power supply to idle circuit blocks. When the sleep signal is low, these transistors turn OFF, effectively cutting off $V_{dd}$ and eliminating leakage in that block.

**Question 5:** How does the stack effect help in reducing leakage?
**Answer:** The stack effect occurs when multiple OFF transistors are in series. The intermediate node(s) between these transistors get biased at a voltage that reduces the electric field across the gate-source junction of the lower transistor, thus reducing its subthreshold leakage.

---

### 9. Important Points to Remember

*   **Subthreshold leakage is a static power consumption mechanism.**
*   It is **exponentially dependent on $V_{gs}$** and temperature.
*   **Lowering $V_{th}$ drastically increases subthreshold leakage.** This is a fundamental trade-off in scaling.
*   **Short-channel effects like DIBL exacerbate subthreshold leakage.**
*   **Techniques like MTCMOS, power gating, and adaptive body biasing are essential for managing subthreshold leakage.**
*   Subthreshold leakage is a dominant factor in standby power for modern integrated circuits.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 10. Textbooks/References Incorporated

*   **Razavi (Design of Analog CMOS Integrated Circuits):** Provides a strong foundation in MOSFET device physics and its behavior in different operating regions, which is directly applicable to understanding subthreshold currents.
*   **Sedra & Smith (Microelectronic Circuits):** Offers detailed explanations of semiconductor device physics, including the operation of MOSFETs below threshold and the factors influencing their characteristics.
*   **Baker, Li, Boyce (CMOS: Circuits Design, Layout and Simulation):** Covers practical aspects of CMOS design, including leakage mechanisms and low-power design techniques.
*   **Allen & Holberg (CMOS Analog Circuit Design):** While focused on analog, the device physics discussions are relevant to understanding leakage.

This topic directly addresses **CO1** by detailing the impact of scaling and short channel effects on leakage, **CO2** by discussing leakage as a source of power dissipation, and provides the foundation for **CO3** by explaining the need for power management techniques that target leakage.