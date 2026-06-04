---
title: "Lightly Doped Drain–Source"
subject: "LOW POWER VLSI"
module: "Module 1: Physics of Power dissipation in MOSFET devices"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff672"
status: "completed"
scrapedAt: "2026-05-23T18:14:33.160Z"
---
# Low Power VLSI - Module 1: Physics of Power Dissipation in MOSFET Devices

## Topic: Lightly Doped Drain–Source (LDD)

---

### 1. Introduction to LDD Structure

The Lightly Doped Drain (LDD) structure is a crucial advancement in MOSFET fabrication designed to mitigate the adverse effects of short-channel scaling, particularly **Hot Carrier Injection (HCI)** and **Drain-Induced Barrier Lowering (DIBL)**. These effects, which become more pronounced as transistor dimensions shrink, can lead to device degradation, reduced performance, and increased power consumption. Understanding LDD is essential for addressing **CO1: Describe the impact of technology scaling on power dissipation in digital ICs and various short channel effects.**

**Key Concept:** LDD introduces a lightly doped region between the highly doped drain (or source) and the channel. This lightly doped region acts as a "resistor" that spreads out the electric field gradient at the drain junction.

**Origin:** As MOSFETs scale down (smaller channel lengths), the electric field in the depletion region near the drain becomes very high. This high field can accelerate carriers (electrons in NMOS, holes in PMOS) to high energies, leading to Hot Carriers. These hot carriers can then impact the gate oxide, causing interface traps and fixed charges, which degrade device characteristics over time.

---

### 2. Physics of Power Dissipation in MOSFETs and the Role of LDD

While LDD primarily addresses device reliability and performance degradation, its impact on power dissipation is indirect but significant:

*   **Reduced Short Channel Effects (SCEs):** By mitigating HCI and DIBL, LDD helps maintain the intended switching behavior of the transistor. Uncontrolled SCEs can lead to:
    *   **Increased Subthreshold Leakage:** DIBL causes the threshold voltage ($V_{th}$) to decrease with increasing drain voltage ($V_{DS}$), leading to more leakage current even when the transistor is supposed to be off.
    *   **Increased Dynamic Power:** Devices with significant SCEs might have lower effective $V_{th}$, leading to slightly higher drive current but also potentially faster switching that exacerbates power consumption if not managed.
*   **Improved Drive Current and Switching Speed:** A well-designed LDD structure can help maintain a steeper subthreshold slope, leading to better switching characteristics and potentially enabling lower operating voltages for a given performance, which is a direct power saving strategy (**CO3: Describe the various approaches for power management in digital ICs.**).
*   **Reduced Hot Carrier Degradation:** While not a direct power dissipation mechanism, degradation due to HCI can lead to increased resistance and thus higher dynamic power consumption during operation. LDD's role in preventing this degradation is vital for long-term power efficiency.

**Example:** Consider a deep submicron NMOS transistor without LDD. As $V_{DS}$ increases, the depletion region at the drain extends further into the channel. This can effectively shorten the channel and reduce the threshold voltage (DIBL). The high electric field at the drain junction can also accelerate electrons, leading to HCI. These effects can result in the transistor conducting current even when it should be off (leakage) or exhibiting degraded performance.

---

### 3. LDD Structure and its Benefits

The LDD structure is implemented by introducing an additional, lightly doped implant into the source/drain regions before the final high-dose implant.

**Structure:**

*   **Source/Drain:** Highly doped regions (e.g., $n^+$ for NMOS, $p^+$ for PMOS).
*   **LDD Region:** A lightly doped region (e.g., $n^-$ for NMOS, $p^-$ for PMOS) located adjacent to the channel and between the channel and the highly doped source/drain contact regions.

**Implementation:**

1.  **Gate formation:** The gate dielectric and gate electrode are formed.
2.  **Sidewall spacer formation:** Sidewall spacers are created on the sides of the gate. These spacers are crucial for defining the LDD region.
3.  **Lightly doped implant:** A low-dose, lower-energy implant is performed. The sidewall spacers block this implant from reaching the region directly under the gate, thus defining the lightly doped region adjacent to the channel.
4.  **Heavily doped implant:** A high-dose, higher-energy implant is performed. This implant is blocked by the gate and the sidewall spacers from reaching the channel and the LDD region, ensuring the source and drain are heavily doped.

**Benefits:**

*   **Reduced Electric Field at the Drain:** The lightly doped drain region acts as a resistor, effectively spreading out the high electric field that would otherwise be concentrated at the metallurgical drain junction. This reduces the peak electric field, minimizing carrier acceleration.
*   **Suppression of Hot Carrier Injection (HCI):** By lowering the peak electric field, the LDD structure significantly reduces the generation of hot carriers, thus improving device reliability and preventing degradation. This is a primary motivation for LDD.
*   **Mitigation of Drain-Induced Barrier Lowering (DIBL):** The LDD structure also helps to reduce the impact of the drain voltage on the channel potential, thereby suppressing DIBL. This leads to a more stable threshold voltage, especially in short-channel devices.
*   **Improved Subthreshold Slope:** By reducing the short-channel effects, LDD can help maintain a steeper subthreshold slope, leading to better off-state characteristics and reduced leakage power.
*   **Reduced Gate-Induced Drain Leakage (GIDL):** GIDL occurs due to band-to-band tunneling at high $V_{GD}$ and low $V_{DS}$ conditions. The LDD structure can also help in reducing this leakage.

**Reference:** Behzad Razavi's "Design of Analog CMOS Integrated Circuits" and Baker, Li, Boyce's "CMOS: Circuits Design, Layout and Simulation" often discuss the fabrication and benefits of LDD structures in the context of scaling and reliability.

---

### 4. Impact of LDD on Power Dissipation

**Directly, LDD does not create new power dissipation paths.** Instead, it helps to **reduce unwanted power dissipation** by improving device characteristics and mitigating the negative effects of scaling.

*   **Reduced Subthreshold Leakage Power:** By suppressing DIBL and maintaining a more stable $V_{th}$, LDD helps ensure that transistors turn off more effectively. This reduces the leakage current that flows when the transistor is in the off-state, contributing to static power reduction.
    *   **CO2: Discuss the different sources of power dissipation in digital ICs.** LDD helps in reducing the **Static Power Dissipation** component arising from leakage current.
*   **Improved Dynamic Power Efficiency:** While not its primary goal, improved switching characteristics (steeper subthreshold slope) can allow for operation at lower voltages for a given performance, directly impacting dynamic power ($P_{dynamic} = C_{L}V_{DD}^2 f$).
*   **Reliability and Long-Term Power:** By preventing degradation from HCI, LDD ensures that devices maintain their performance over time. Degraded transistors often exhibit lower drive current and increased resistance, which can lead to higher power consumption for the same workload.

**Example of Power Benefit:**
Imagine two identical digital circuits operating at a supply voltage of $V_{DD}$.
*   Circuit A uses transistors without LDD and suffers from significant DIBL, leading to a $V_{th}$ that drops by 0.5V at a certain $V_{DS}$. This means more leakage current when the transistor is supposed to be off.
*   Circuit B uses transistors with LDD, effectively suppressing DIBL, and maintaining a stable $V_{th}$. This results in a lower leakage current.

Over millions of transistors in an IC, the cumulative reduction in leakage current due to LDD can lead to substantial savings in static power, especially in deep submicron technologies where leakage is a major concern.

---

### 5. LDD and Short Channel Effects (Revisiting CO1)

LDD is a direct countermeasure to several short-channel effects:

*   **Hot Carrier Injection (HCI):** As discussed, this is the primary target of LDD. High electric fields near the drain inject energetic carriers into the gate oxide. LDD lowers this field by introducing a resistive region.
*   **Drain-Induced Barrier Lowering (DIBL):** The drain voltage directly influences the channel potential. In short channels, the drain depletion region can extend significantly, lowering the potential barrier that controls carrier flow, effectively reducing $V_{th}$. LDD, by partially isolating the channel from the highly doped drain, reduces this influence.
*   **Velocity Saturation:** At high electric fields, carrier velocity no longer increases linearly with the field but saturates. While LDD doesn't directly prevent velocity saturation, it helps manage the high fields that cause it and its associated impact on device performance.
*   **Short Channel Subthreshold Slope Degradation:** The non-ideality in switching behavior is exacerbated by SCEs. LDD helps in improving the subthreshold slope, making the transistor switch more abruptly between on and off states.

**Relationship to Power Dissipation:** All these SCEs contribute to increased power consumption. DIBL and degraded subthreshold slope increase leakage power. Velocity saturation can affect switching speed and dynamic power. HCI can lead to performance degradation, indirectly increasing power.

---

### 6. Design Considerations and Trade-offs

While beneficial, LDD implementation involves trade-offs:

*   **Increased Parasitic Resistance:** The lightly doped region introduces additional series resistance, which can slightly degrade the ON-state current and thus the switching speed. This is often referred to as the **LDD resistance**.
*   **Process Complexity and Cost:** Implementing the LDD structure requires additional fabrication steps (spacers, multiple implants), increasing manufacturing complexity and cost.
*   **Design Choices:** The doping concentration and width of the LDD region are critical design parameters that need to be optimized to balance the reduction in SCEs against the increase in parasitic resistance.
    *   A thicker or more highly doped LDD region provides better protection against HCI and DIBL but increases resistance.
    *   A thinner or lightly doped LDD region minimizes resistance but offers less protection.

**Example:** In analog circuit design, where precise control of current and voltage is critical, the increased resistance from LDD can impact the performance of circuits like current mirrors or amplifiers. Designers must carefully consider these trade-offs.

---

### 7. Connection to Course Outcomes

*   **CO1 (Technology Scaling and SCEs):** LDD is a direct consequence of dealing with SCEs that arise from technology scaling. Understanding LDD is fundamental to understanding how modern ICs combat these issues.
*   **CO2 (Sources of Power Dissipation):** LDD primarily impacts **static power dissipation** by reducing subthreshold leakage. It also indirectly affects dynamic power by improving switching efficiency.
*   **CO3 (Power Management Approaches):** LDD is an **inherent design feature** that contributes to power management by reducing leakage. It's a fundamental technique employed at the device level to achieve lower power.
*   **CO4 (Clocked/Non-Clocked Styles):** While LDD is a device-level technology, its effectiveness in reducing leakage is crucial for the efficient operation of all logic styles, including those employing clocked or non-clocked designs. Lower leakage means less power wasted when transistors are in the off-state.
*   **CO5 (Adiabatic Switching):** Adiabatic switching is a circuit-level technique. The power savings from adiabatic switching are maximized when the underlying devices have low leakage. LDD contributes to this by reducing static power, making the overall system more power-efficient.

---

### 8. Practice Questions and Answers

**Question 1:** What is the primary motivation for introducing the Lightly Doped Drain (LDD) structure in MOSFETs?
**Answer:** The primary motivation is to mitigate Hot Carrier Injection (HCI) and Drain-Induced Barrier Lowering (DIBL), which are detrimental short-channel effects that degrade device performance and reliability.

**Question 2:** How does the LDD structure help in reducing power dissipation?
**Answer:** LDD primarily reduces static power dissipation by suppressing subthreshold leakage. This is achieved by mitigating DIBL, which helps maintain a stable threshold voltage, ensuring transistors switch off more effectively. It can also indirectly improve dynamic power efficiency by enabling operation at lower voltages for a given performance.

**Question 3:** What is a key trade-off associated with the LDD structure?
**Answer:** A key trade-off is the increase in parasitic resistance in the source/drain regions due to the lightly doped region. This can slightly degrade ON-state current and switching speed.

**Question 4:** Which source of power dissipation, discussed in CO2, is most directly impacted by the LDD structure?
**Answer:** Static power dissipation due to subthreshold leakage.

**Question 5:** Explain how LDD contributes to suppressing DIBL.
**Answer:** LDD introduces a lightly doped region between the channel and the highly doped drain. This region acts to "spread out" the electric field from the drain, reducing its influence on the channel potential. Consequently, the drain voltage has less impact on the threshold voltage, thereby suppressing DIBL.

---

### 9. Important Points to Remember

*   **LDD is a device-level optimization.**
*   **Primary goal: Combat Hot Carrier Injection (HCI) and DIBL.**
*   **Mechanism: Introduce a lightly doped region adjacent to the channel at the drain.**
*   **Benefit for Power: Primarily reduces static power by minimizing subthreshold leakage.**
*   **Trade-off: Increased parasitic resistance, potentially impacting speed.**
*   **Crucial for deep submicron technologies.**

---
This comprehensive set of notes covers the Lightly Doped Drain–Source structure in the context of low power VLSI, aligning with the provided learning outcomes and course outcomes. The content is drawn from the principles discussed in the referenced textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
