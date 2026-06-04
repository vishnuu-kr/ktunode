---
title: "Punch through"
subject: "LOW POWER VLSI"
module: "Module 1: Physics of Power dissipation in MOSFET devices"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff665"
status: "completed"
scrapedAt: "2026-05-23T18:14:23.658Z"
---
# LOW POWER VLSI - Module 1: Physics of Power Dissipation in MOSFET Devices

## Topic: Punch Through

---

### **1. Introduction & Relevance to Low Power VLSI**

*   **Punch-through** is a short-channel effect that becomes significant as MOSFET channel lengths are reduced. It is a critical phenomenon that directly impacts device behavior, performance, and importantly, power dissipation. Understanding punch-through is essential for designing low-power VLSI circuits, especially as technology scaling continues to shrink transistors.

*   **Relevance to Low Power VLSI:**
    *   **Increased Leakage Current:** Punch-through leads to a substantial increase in off-state leakage current, contributing significantly to static power dissipation. This is a major concern in low-power design where minimizing leakage is paramount.
    *   **Reduced Control:** In punch-through, the drain voltage can influence the channel potential even at the source end. This reduces the gate's control over the channel, leading to degraded device characteristics and potentially unintended current flow.
    *   **Impact on Threshold Voltage ($V_{th}$):** Punch-through can effectively lower the threshold voltage of the MOSFET, making it easier to turn on even at lower gate voltages. This can lead to increased subthreshold leakage.
    *   **Device Breakdown:** Severe punch-through can lead to device breakdown and permanent damage.

*   **Alignment with Course Outcomes:**
    *   **CO1 (K2):** Describes the impact of technology scaling on power dissipation and short channel effects. Punch-through is a key short channel effect directly linked to scaling and its impact on power.
    *   **CO2 (K2):** Discusses different sources of power dissipation. Punch-through contributes to static (leakage) power dissipation.

---

### **2. Physics of Punch Through**

*   **Definition:** Punch-through occurs in short-channel MOSFETs when the depletion regions of the source and drain extend to meet each other in the channel. This effectively creates a continuous conductive path from source to drain, allowing current to flow even when the gate-source voltage ($V_{GS}$) is below the threshold voltage ($V_{th}$).

*   **Mechanism:**
    1.  **Short Channel Length ($L$):** In long-channel devices, the depletion regions from the source and drain are relatively confined. However, as $L$ decreases, these depletion regions spread further relative to the channel length.
    2.  **Depletion Region Expansion:** When a sufficiently high drain-source voltage ($V_{DS}$) is applied, the depletion region under the drain junction expands towards the source. Similarly, the depletion region under the source junction expands towards the drain.
    3.  **Depletion Region Overlap:** In a short channel, these depletion regions can meet or overlap in the middle of the channel. This overlap creates a "bridge" of depletion charge that effectively connects the source and drain.
    4.  **Conductivity Modulation:** Once punch-through occurs, the channel is no longer solely modulated by the gate voltage. The high $V_{DS}$ creates a strong electric field that pulls carriers from the source to the drain, leading to a significant increase in drain current.

*   **Conditions for Punch Through:**
    *   **Short Channel Length ($L$):** This is the primary requirement. As $L$ decreases, the likelihood of punch-through increases.
    *   **High Drain-Source Voltage ($V_{DS}$):** A higher $V_{DS}$ causes the depletion regions to expand further.
    *   **Low or Zero Gate-Source Voltage ($V_{GS} \le V_{th}$):** Punch-through is most problematic when it happens in the off-state ($V_{GS} < V_{th}$), as it bypasses the gate's control.

*   **Mathematical Condition (Simplified):**
    *   Punch-through is typically considered to occur when the sum of the depletion widths from the source ($x_{jS}$) and drain ($x_{jD}$) equals or exceeds the channel length ($L$).
    *   The depletion width under a PN junction is given by $x_j = \sqrt{\frac{2\epsilon_s (V_{bi} - V)}{qN_A}}$ or $\sqrt{\frac{2\epsilon_s (V_{bi} - V)}{qN_D}}$ where $V$ is the applied voltage, $V_{bi}$ is the built-in potential, $\epsilon_s$ is the permittivity of silicon, $q$ is the electron charge, and $N_A/N_D$ is the doping concentration.
    *   In a MOSFET channel, the voltage varies along the length. However, a simplified condition for punch-through is often expressed in terms of the source and drain depletion widths extending into the channel.
    *   A more practical approximation for the punch-through voltage ($V_{PT}$) is related to the channel length and substrate doping.

*   **Reference to Textbooks:**
    *   **Razavi (2/e, 2002), Chapter 11 (Short-Channel MOSFETs):** Discusses punch-through as a phenomenon where the drain depletion region extends to the source, reducing gate control and increasing leakage.
    *   **Baker et al. (4/e, 2015), Chapter 2 (MOSFET Operation) & Chapter 10 (Short Channel Effects):** Explains punch-through in the context of scaling and its impact on device characteristics.
    *   **Sedra & Smith (8/e, 2020), Chapter 4 (MOSFETs) & Chapter 9 (Short-Channel MOSFETs):** Provides a detailed explanation of the physics, including how the depletion regions from source and drain interact.

---

### **3. Punch Through Voltage ($V_{PT}$)**

*   **Definition:** The punch-through voltage ($V_{PT}$) is the minimum drain-source voltage ($V_{DS}$) at which punch-through occurs for a given set of device parameters (channel length $L$, doping concentrations, etc.), typically when $V_{GS}$ is close to zero or below $V_{th}$.

*   **Factors Affecting $V_{PT}$:**
    *   **Channel Length ($L$):** As $L$ decreases, $V_{PT}$ decreases significantly. This is the most dominant factor.
    *   **Substrate Doping Concentration ($N_A/N_D$):** Higher doping concentration leads to narrower depletion regions, requiring a higher $V_{DS}$ to cause them to meet. Therefore, higher doping increases $V_{PT}$.
    *   **Source/Drain Junction Depth and Doping:** Shallower and more heavily doped source/drain regions can contribute to punch-through at lower $V_{DS}$ as their depletion regions are wider for a given voltage.
    *   **Gate Oxide Thickness ($t_{ox}$):** While not directly a cause of punch-through, $t_{ox}$ affects the gate's ability to shield the channel from the drain voltage. A thinner oxide makes the channel more susceptible to drain voltage influence.

*   **Approximation of $V_{PT}$:**
    *   A commonly cited approximation for the punch-through voltage in a short-channel MOSFET is:
        $$V_{PT} \approx \frac{qN_D L^2}{2\epsilon_s}$$
        where $N_D$ is the channel doping concentration. This approximation assumes the channel is uniformly doped and considers the depletion width from the source extending to the drain junction, effectively ignoring the gate's influence in this simplified model.
    *   A more refined approach, considering the depletion regions from both source and drain meeting, might be:
        $$V_{PT} \approx V_{DS} \quad \text{when} \quad x_{jS} + x_{jD} \approx L$$
        where $x_{jS}$ and $x_{jD}$ are the depletion widths at the source and drain, respectively, which themselves depend on the voltages applied.

*   **Example:**
    *   Consider a MOSFET with $L = 1 \mu m$, channel doping $N_D = 10^{17} cm^{-3}$, $\epsilon_s = 11.7 \times 8.85 \times 10^{-14} F/cm$.
    *   $V_{PT} \approx \frac{(1.6 \times 10^{-19} C) \times (10^{17} cm^{-3}) \times (10^{-4} cm)^2}{2 \times (11.7 \times 8.85 \times 10^{-14} F/cm)}$
    *   $V_{PT} \approx \frac{1.6 \times 10^{-19} \times 10^{17} \times 10^{-8}}{2 \times 10.33 \times 10^{-13}} \approx \frac{1.6 \times 10^{-20}}{20.66 \times 10^{-13}} \approx 0.077 \times 10^{-7} \times 10^{19} \approx 7.7 V$. (This approximation is very rough and often needs refinement).
    *   **Important Note:** In modern scaled technologies with $L < 100 nm$, $V_{PT}$ can be as low as a few volts or even less, making it a critical design consideration.

*   **Reference to Textbooks:**
    *   **Sedra & Smith (8/e, 2020), Section 9.3.2 (Punch-through):** Derives an expression for $V_{PT}$ based on the depletion width of the drain junction reaching the source.
    *   **Razavi (2/e, 2002), Section 11.3 (Punch-through):** Provides an approximate expression and discusses its dependence on device dimensions.

---

### **4. Impact of Punch Through on Device Characteristics and Power Dissipation**

*   **Degraded Output Characteristics ($I_D$ vs. $V_{DS}$):**
    *   **Long Channel:** In long-channel devices, the output characteristics are relatively flat in saturation.
    *   **Short Channel (Punch Through):** When punch-through occurs, the drain current ($I_D$) continues to increase with $V_{DS}$ even in the saturation region. This is known as **DIBL (Drain-Induced Barrier Lowering)** and is closely related to punch-through. The gate loses significant control, and the device effectively behaves more like a resistor influenced by $V_{DS}$.

*   **Increased Off-State Leakage Current:**
    *   Punch-through primarily affects the off-state current. Even when $V_{GS} < V_{th}$ and ideally the device should be off, the direct conductive path created by punch-through allows significant current to flow from drain to source.
    *   This leakage current contributes to **static power dissipation**, which is a major concern in low-power designs, especially for battery-operated devices or when circuits are in standby mode.

*   **Reduced Threshold Voltage ($V_{th}$):**
    *   Punch-through is often accompanied by a reduction in the effective threshold voltage of the MOSFET. The strong electric field from the drain can lower the potential barrier at the source, making it easier for carriers to enter the channel. This is the core of DIBL.
    *   A lower $V_{th}$ means the device can conduct current at lower gate voltages, potentially leading to increased subthreshold leakage as well.

*   **Non-Ideal Switching:**
    *   The reduced gate control and increased leakage can lead to slower switching speeds and increased dynamic power consumption during switching events, as more current flows when it shouldn't.

*   **Alignment with Course Outcomes:**
    *   **CO1 (K2):** Punch-through directly explains how scaling (smaller $L$) leads to increased leakage and degraded characteristics, thus impacting power dissipation.
    *   **CO2 (K2):** The increased off-state leakage due to punch-through is a direct source of static power dissipation.

*   **Reference to Textbooks:**
    *   **Baker et al. (4/e, 2015), Chapter 10:** Explicitly discusses the impact of punch-through on device behavior, including increased leakage and DIBL.
    *   **Allen & Holbery (3/e, 2018), Chapter 2 (MOSFET Characteristics):** While focusing on long-channel, it provides the baseline to contrast with short-channel effects like punch-through.

---

### **5. Suppression of Punch Through**

*   Strategies to prevent or mitigate punch-through are crucial for designing reliable and low-power short-channel MOSFETs.

*   **Key Suppression Techniques:**
    1.  **Increasing Channel Doping Concentration:**
        *   **How it works:** A higher doping concentration ($N_D$) creates narrower depletion regions for a given voltage. This requires a higher $V_{DS}$ for the depletion regions to meet, thus increasing $V_{PT}$.
        *   **Trade-off:** Increased doping can also lead to higher body effect (back-gate effect) and lower carrier mobility, potentially affecting performance.
        *   **Reference:** Sedra & Smith (8/e, 2020), Razavi (2/e, 2002).

    2.  **Reducing Source/Drain Junction Depth and Doping:**
        *   **How it works:** Shallower and less heavily doped source/drain junctions result in smaller depletion regions extending into the channel, making it harder for them to meet and thus increasing $V_{PT}$.
        *   **Modern Techniques:** This is achieved using technologies like Lightly Doped Drain (LDD) structures and Halo Implantation.
        *   **Reference:** Baker et al. (4/e, 2015).

    3.  **Short Channel MOSFET Structures:**
        *   **Double Gate (DG) MOSFETs:** The channel is controlled by gates on both sides, providing better control over the channel potential and reducing the impact of drain voltage. This significantly suppresses punch-through.
        *   **FinFETs (Tri-Gate MOSFETs):** The gate wraps around the channel on three sides, offering superior electrostatic control and immunity to short-channel effects like punch-through.
        *   **Fully Depleted SOI (Silicon-On-Insulator):** Using a thin silicon film on an insulator layer restricts the depletion regions to the thin film, reducing the reach of source/drain depletion regions and suppressing punch-through.
        *   **Reference:** All major textbooks (Razavi, Baker, Sedra & Smith) discuss these advanced structures as solutions to short-channel effects.

    4.  **Graded Channel MOSFETs:**
        *   **How it works:** The doping concentration in the channel is not uniform but varies, often being higher near the source and drain and lower in the middle. This profiling can help manage depletion region spread and reduce punch-through.
        *   **Reference:** Sedra & Smith (8/e, 2020).

    5.  **Guard Rings:**
        *   **How it works:** While not a direct suppression of the core punch-through mechanism within the device, guard rings (p-type regions surrounding n-channel devices) can be used to prevent punch-through to adjacent substrate regions, which is important for device isolation and preventing parasitic conduction paths.
        *   **Reference:** Baker et al. (4/e, 2015).

*   **Alignment with Course Outcomes:**
    *   **CO1 (K2):** Understanding suppression techniques is key to explaining how technology scaling can be managed to mitigate negative impacts on power.

---

### **6. Punch Through in the Context of Low Power Design**

*   **Static Power Dissipation:** The primary concern is the increased off-state leakage current due to punch-through. In complex digital systems with millions or billions of transistors, even small leakage per transistor can sum up to significant power consumption when idle or in low-power modes.
    *   **Equation:** $P_{static} = V_{DD} \times I_{leakage}$
    *   Punch-through directly increases $I_{leakage}$.

*   **Dynamic Power Dissipation:** While less direct, punch-through can indirectly affect dynamic power.
    *   The degraded switching characteristics (lower effective $V_{th}$, less sharp switching) can lead to increased short-circuit current during transitions.
    *   The continuous leakage path means that even when transistors are intended to be off, they are drawing current, affecting the overall power budget.

*   **Design Implications:**
    *   **Threshold Voltage ($V_{th}$) Selection:** Designers must carefully select $V_{th}$ for transistors, balancing performance and leakage. Punch-through mandates a minimum $V_{th}$ or requires structural changes to maintain it.
    *   **Process Technology Selection:** Choosing advanced process nodes (e.g., FinFETs) is often necessary to overcome short-channel effects like punch-through and enable further scaling for low power.
    *   **Voltage Scaling:** While reducing $V_{DD}$ is a primary low-power strategy, it can make devices more susceptible to short-channel effects like punch-through if not managed properly. The $V_{PT}$ is less dependent on $V_{DD}$ than on $L$ and doping.
    *   **Body Biasing:** In some technologies, body biasing can be used to adjust the threshold voltage and influence the depletion regions, potentially helping to suppress punch-through.

*   **Alignment with Course Outcomes:**
    *   **CO1 (K2):** Reinforces how scaling necessitates understanding and mitigating short-channel effects like punch-through for low power.
    *   **CO2 (K2):** Identifies punch-through as a significant contributor to static power.
    *   **CO3 (K2):** Understanding punch-through is essential for applying power management techniques, as it limits the benefits of aggressive scaling.

---

### **7. Practice Questions and Answers**

**Question 1:**
Define punch-through in a MOSFET. What is the primary factor that leads to punch-through?

**Answer:**
Punch-through is a short-channel effect where the depletion regions of the source and drain junctions meet or overlap in the channel, creating a continuous conductive path from source to drain even when the gate-source voltage is below the threshold voltage. The primary factor that leads to punch-through is the **short channel length ($L$)**.

**Question 2:**
List three factors that affect the punch-through voltage ($V_{PT}$) and explain how they influence it.

**Answer:**
1.  **Channel Length ($L$):** As $L$ decreases, $V_{PT}$ decreases. Shorter channels are more prone to punch-through at lower voltages.
2.  **Substrate Doping Concentration ($N_D$):** As $N_D$ increases, $V_{PT}$ increases. Higher doping leads to narrower depletion regions, requiring higher voltages to cause overlap.
3.  **Source/Drain Junction Depth:** Shallower junctions tend to increase $V_{PT}$ because their depletion regions extend less into the channel.

**Question 3:**
How does punch-through contribute to power dissipation in VLSI circuits?

**Answer:**
Punch-through contributes to **static power dissipation** by significantly increasing the off-state leakage current. Even when the MOSFET is supposed to be in the 'off' state (low $V_{GS}$), the conductive path created by punch-through allows current to flow from drain to source, leading to continuous power consumption.

**Question 4:**
Describe one advanced MOSFET structure that helps suppress punch-through.

**Answer:**
**FinFETs (Tri-Gate MOSFETs)** suppress punch-through. In a FinFET, the gate wraps around the channel on three sides (top and two vertical sides). This three-dimensional gate structure provides superior electrostatic control over the entire channel, effectively shielding it from the influence of the drain voltage and thus preventing the depletion regions from meeting.

**Question 5:**
Which of the following conditions would **increase** the likelihood of punch-through?
(a) Increasing channel length.
(b) Decreasing substrate doping concentration.
(c) Decreasing drain-source voltage.
(d) Increasing gate-source voltage.

**Answer:**
(b) Decreasing substrate doping concentration.
*   (a) Increasing channel length moves away from punch-through conditions.
*   (c) Decreasing drain-source voltage reduces the spread of depletion regions, making punch-through less likely.
*   (d) Increasing gate-source voltage generally turns the transistor ON, and while it can influence depletion regions, the primary concern for problematic punch-through is its occurrence in the OFF state or at low $V_{GS}$ where gate control is minimal. A lower $V_{GS}$ itself doesn't cause punch-through but is the condition under which punch-through is most problematic.

---

### **8. Important Points to Remember**

*   Punch-through is a **short-channel effect**.
*   It occurs when **source and drain depletion regions meet**.
*   The primary cause is **short channel length ($L$)**.
*   It leads to **increased off-state leakage current**, thus contributing to **static power dissipation**.
*   It degrades output characteristics and reduces the effective threshold voltage ($V_{th}$) (DIBL).
*   **Higher channel doping** and **shallower junctions** help suppress punch-through.
*   Advanced structures like **FinFETs** and **Double-Gate MOSFETs** are designed to mitigate punch-through.
*   In low-power design, understanding and suppressing punch-through is vital to minimize standby leakage power.

---

This concludes the study notes for "Punch Through" in Module 1 of Low Power VLSI. Remember to consult the recommended textbooks for more in-depth derivations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
