---
title: "Effect of threshold voltage on Leakage Power"
subject: "LOW POWER VLSI"
module: "Module 3: Low"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff689"
status: "completed"
scrapedAt: "2026-05-23T18:14:48.551Z"
---
# LOW POWER VLSI - Module 3: Low Power Design Techniques

## Topic: Effect of Threshold Voltage on Leakage Power

### 1. Introduction to Leakage Power

Leakage power is a significant contributor to the total power consumption in modern VLSI circuits, especially at advanced technology nodes. It is the power consumed when transistors are in the off-state. Understanding and mitigating leakage power is crucial for low-power design.

**Key Concepts:**

*   **Leakage Current:** The current that flows through a transistor even when it is supposed to be turned off.
*   **Off-State:** The condition where the gate-source voltage ($V_{GS}$) is below the threshold voltage ($V_{th}$).
*   **Sources of Leakage Current:**
    *   **Subthreshold Leakage (or Weak Inversion Leakage):** The primary component of leakage, caused by the diffusion of charge carriers across the channel when $V_{GS} < V_{th}$.
    *   **Gate-Induced Drain Leakage (GIDL):** Leakage through the gate oxide, particularly significant in scaled technologies with thin gate oxides.
    *   **Gate Oxide Tunneling:** Quantum mechanical tunneling of carriers through the gate dielectric.
    *   **Junction Leakage (Band-to-Band Tunneling - BTBT):** Leakage across reverse-biased PN junctions (source/drain to substrate).

**Course Outcome Alignment:**

*   **CO2: Discuss the different sources of power dissipation in digital ICs.** (This topic directly addresses one of the primary sources of power dissipation).

### 2. Subthreshold Leakage: The Dominant Component

Subthreshold leakage is the most significant leakage current component. Its behavior is strongly dependent on the threshold voltage ($V_{th}$).

**Key Concepts:**

*   **Subthreshold Current Equation (Simplified MOSFET Model):**
    $$I_{DS, sub} \approx I_0 e^{\frac{q(V_{GS} - V_{th})}{nkT}} (1 - e^{\frac{-qV_{DS}}{kT}})$$
    Where:
    *   $I_0$ is a technology-dependent current.
    *   $q$ is the elementary charge.
    *   $n$ is the subthreshold slope factor (ideally 1, practically 1.2-1.7).
    *   $k$ is Boltzmann's constant.
    *   $T$ is the absolute temperature.
    *   $V_{GS}$ is the gate-source voltage.
    *   $V_{th}$ is the threshold voltage.
    *   $V_{DS}$ is the drain-source voltage.

*   **Off-State Condition:** In the off-state, $V_{GS} < V_{th}$. The exponential term dictates the leakage.

**Impact of Threshold Voltage ($V_{th}$) on Subthreshold Leakage:**

The subthreshold current is **exponentially dependent** on the threshold voltage. A higher $V_{th}$ leads to significantly lower subthreshold leakage.

*   **Relationship:** $I_{DS, sub} \propto e^{-V_{th}}$
*   **Effect of decreasing $V_{th}$:** Reducing $V_{th}$ (e.g., from a high $V_{th}$ device to a low $V_{th}$ device) drastically increases subthreshold leakage.

**Example:**

Consider two NMOS transistors with the same dimensions and operating conditions, but different $V_{th}$:

*   Transistor A: $V_{th} = 0.4V$
*   Transistor B: $V_{th} = 0.2V$

If other factors are constant, the subthreshold leakage current of Transistor B will be significantly higher than that of Transistor A. For every 60mV decrease in $V_{th}$ (at room temperature), the subthreshold leakage current increases by approximately a factor of 10.

**Textbook References:**

*   **Razavi (2/e):** Discusses MOSFET device physics, including subthreshold conduction in Chapter 2.
*   **Baker et al. (4/e):** Covers leakage mechanisms and their dependence on device parameters in Chapters related to CMOS device physics and low-power design.
*   **Sedra & Smith (8/e):** Explains the behavior of MOSFETs in different operating regions, including subthreshold conduction in Chapter 7.

### 3. Gate-Induced Drain Leakage (GIDL)

GIDL is another important leakage mechanism, particularly relevant in short-channel devices. It occurs when the drain-substrate junction is reverse-biased and a strong electric field exists near the drain depletion region, leading to band-to-band tunneling (BTBT) and the generation of electron-hole pairs.

**Key Concepts:**

*   **Mechanism:** Strong electric field at the drain-source junction due to reverse bias.
*   **Conditions:** Typically occurs when $V_{DS}$ is large and $V_{GS}$ is low (off-state).
*   **Dependence on $V_{th}$:** While not directly as exponential as subthreshold leakage, the "off-state" condition (low $V_{GS}$) is crucial. Furthermore, shallower junctions and reduced channel lengths, often associated with lower $V_{th}$ technologies, can exacerbate GIDL.

**Textbook References:**

*   **Razavi (2/e):** May touch upon junction leakage and short-channel effects in later chapters.
*   **Baker et al. (4/e):** Provides detailed coverage of GIDL and its physical origins in Chapters on advanced MOS device physics.
*   **Sedra & Smith (8/e):** Discusses junction breakdown mechanisms and electric fields in semiconductor junctions.

### 4. Gate Oxide Tunneling

With the continuous scaling of gate dielectrics to improve electrostatic control, the gate oxide thickness has become very small (a few angstroms). This leads to significant quantum mechanical tunneling of carriers (electrons or holes) from the channel to the gate or from the gate to the channel.

**Key Concepts:**

*   **Mechanism:** Quantum mechanical tunneling through a thin dielectric layer.
*   **Dependence on $V_{th}$:** The $V_{th}$ itself is determined by gate oxide thickness and doping profiles. However, the tunneling current is primarily dependent on the oxide thickness and the voltage across the oxide ($V_{GS}$ or $V_{DS}$). Technologies that push for lower $V_{th}$ often involve thinner gate oxides to maintain good drive current, inadvertently increasing tunneling leakage.

**Textbook References:**

*   **Razavi (2/e):** Might refer to gate insulation integrity in advanced CMOS.
*   **Baker et al. (4/e):** Offers detailed explanations of tunneling currents (Fowler-Nordheim, direct tunneling) in Chapters on advanced device physics.
*   **Sedra & Smith (8/e):** Discusses dielectric breakdown phenomena, which are related to tunneling.

### 5. Junction Leakage (Band-to-Band Tunneling - BTBT)

This leakage mechanism occurs across reverse-biased PN junctions (source/drain to substrate) due to the strong electric field at the junction.

**Key Concepts:**

*   **Mechanism:** Tunneling of electrons from the valence band to the conduction band under a strong electric field.
*   **Conditions:** Occurs in reverse-biased junctions, particularly at the drain-substrate junction when the transistor is off and the drain voltage is high.
*   **Dependence on $V_{th}$:** Shorter channel lengths and shallower junctions, often employed in low $V_{th}$ technologies to achieve higher performance, tend to have higher electric fields at the junctions, increasing BTBT.

**Textbook References:**

*   **Razavi (2/e):** May discuss junction leakage as a general semiconductor phenomenon.
*   **Baker et al. (4/e):** Covers junction leakage mechanisms and their impact on leakage power.
*   **Sedra & Smith (8/e):** Details PN junction characteristics, including breakdown mechanisms.

### 6. Strategies to Reduce Leakage Power by Manipulating $V_{th}$

The strong exponential dependence of subthreshold leakage on $V_{th}$ makes $V_{th}$ a primary parameter for leakage control.

**Key Concepts:**

*   **High $V_{th}$ Transistors:** Using transistors with higher threshold voltages is a direct way to reduce subthreshold leakage.
*   **Low $V_{th}$ Transistors:** Conversely, transistors with lower threshold voltages offer better performance (higher drive current, faster switching) but significantly increase leakage.

**Trade-off:**

*   **Performance vs. Leakage:** There is a fundamental trade-off between speed/performance and leakage power. Low $V_{th}$ devices are faster but leak more, while high $V_{th}$ devices are slower but leak less.

**Strategies:**

1.  **Multi-Threshold CMOS (MTCMOS):**
    *   **Description:** A technique that uses a mix of high $V_{th}$ and low $V_{th}$ transistors. High $V_{th}$ transistors are used for critical paths where speed is essential, while low $V_{th}$ transistors are used for non-critical paths or for circuits where leakage is a concern.
    *   **Power Gating:** Often implemented with a high $V_{th}$ sleep transistor to completely cut off power to idle circuit blocks, effectively reducing leakage to almost zero when the block is inactive.
    *   **Example:** In a complex SoC, frequently accessed, high-speed functional units might use low $V_{th}$ transistors, while less critical or infrequently used blocks could use high $V_{th}$ transistors.

2.  **Variable Threshold CMOS (VTCMOS):**
    *   **Description:** The threshold voltage of transistors is varied dynamically based on the operating mode. For example, $V_{th}$ can be increased in standby mode to minimize leakage and decreased in active mode to maximize performance.
    *   **Mechanism:** This is typically achieved by controlling the substrate bias. A forward substrate bias reduces $V_{th}$, while a reverse substrate bias increases $V_{th}$.
    *   **Example:** A processor might operate with a low $V_{th}$ during active computations but switch to a higher $V_{th}$ (or a state with increased substrate bias) when it enters a low-power idle state.

3.  **Body Biasing:**
    *   **Description:** Applying a voltage to the body (substrate) terminal of the MOSFET.
    *   **Forward Body Bias (FBB):** Reduces $V_{th}$, increasing drive current and speed but also increasing leakage.
    *   **Reverse Body Bias (RBB):** Increases $V_{th}$, reducing leakage but also reducing drive current and speed.
    *   **Application:** Can be used dynamically like VTCMOS.

**Course Outcome Alignment:**

*   **CO3: Describe the various approaches for power management in digital ICs.** (MTCMOS and VTCMOS are key power management techniques discussed here).
*   **CO1: Describe the impact of technology scaling on power dissipation in digital ICs and various short channel effects.** (Low $V_{th}$ technologies are a result of scaling, which inherently increases leakage; this section connects the two).

### 7. Practice Questions and Answers

**Question 1:**
The subthreshold leakage current in a MOSFET is primarily dependent on which of the following parameters?
(a) Gate-source voltage ($V_{GS}$) and drain-source voltage ($V_{DS}$)
(b) Threshold voltage ($V_{th}$) and temperature ($T$)
(c) Oxide thickness and doping concentration
(d) Channel length and width

**Answer:**
(b) Threshold voltage ($V_{th}$) and temperature ($T$). While $V_{GS}$ and $V_{DS}$ affect the off-state current, the exponential dependence on $V_{th}$ and the thermal voltage term ($kT$) are the dominant factors determining the magnitude of subthreshold leakage.

**Question 2:**
Explain the trade-off between threshold voltage ($V_{th}$) and leakage power.
**Answer:**
There is an inverse, exponential relationship between threshold voltage and subthreshold leakage current. Lowering the threshold voltage ($V_{th}$) significantly increases the subthreshold leakage current. Conversely, increasing $V_{th}$ substantially reduces leakage current. This creates a fundamental trade-off: low $V_{th}$ devices offer higher performance (faster switching speeds) but consume more leakage power, while high $V_{th}$ devices are slower but consume less leakage power.

**Question 3:**
Describe how Multi-Threshold CMOS (MTCMOS) can be used to reduce leakage power in digital circuits.
**Answer:**
MTCMOS utilizes a mix of high $V_{th}$ and low $V_{th}$ transistors. High $V_{th}$ transistors are used for performance-critical paths or areas where leakage is a major concern. Low $V_{th}$ transistors are used for non-critical paths to achieve higher speed. Furthermore, MTCMOS is often implemented with a high $V_{th}$ "sleep transistor" that can completely shut off power to idle blocks, drastically reducing the leakage power of those blocks to near zero.

**Question 4:**
Which leakage mechanism is most significantly impacted by reducing the threshold voltage ($V_{th}$)?
(a) Gate Oxide Tunneling
(b) Junction Leakage (BTBT)
(c) Subthreshold Leakage
(d) GIDL

**Answer:**
(c) Subthreshold Leakage. The subthreshold current equation shows an exponential dependence on $-V_{th}$, meaning even a small reduction in $V_{th}$ leads to a significant increase in subthreshold leakage.

### 8. Important Points to Remember

*   **Leakage Power is Exponentially Dependent on $V_{th}$:** Reducing $V_{th}$ is a double-edged sword: it improves speed but drastically increases leakage.
*   **Subthreshold Leakage Dominates:** In most modern CMOS circuits, subthreshold leakage is the primary contributor to total leakage power.
*   **Technology Scaling:** The drive for higher performance through technology scaling often leads to lower $V_{th}$ and thinner gate oxides, exacerbating both subthreshold leakage and gate oxide tunneling.
*   **$V_{th}$ Engineering is Crucial:** Techniques like MTCMOS and VTCMOS are essential for managing leakage by strategically employing different $V_{th}$ values or dynamically adjusting them.
*   **Performance vs. Leakage Trade-off:** Always consider the balance between desired performance and acceptable leakage power when choosing or manipulating $V_{th}$.

### 9. Conclusion

The threshold voltage ($V_{th}$) is a critical design parameter that profoundly impacts leakage power, especially subthreshold leakage. While low $V_{th}$ devices are essential for achieving high performance, they come at the cost of increased leakage. Designers must employ intelligent $V_{th}$ management strategies, such as MTCMOS and VTCMOS, to balance the need for speed with the imperative of low power consumption. Understanding the various leakage mechanisms and their dependencies on $V_{th}$ is fundamental for effective low-power VLSI design.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
