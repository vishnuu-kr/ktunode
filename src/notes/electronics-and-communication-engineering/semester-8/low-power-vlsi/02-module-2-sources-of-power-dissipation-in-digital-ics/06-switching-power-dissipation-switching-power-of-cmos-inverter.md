---
title: "Switching power dissipation: Switching Power of CMOS Inverter"
subject: "LOW POWER VLSI"
module: "Module 2: Sources of power dissipation in digital  ICs"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff67a"
status: "completed"
scrapedAt: "2026-05-23T18:14:38.312Z"
---
# LOW POWER VLSI: Module 2 - Sources of Power Dissipation in Digital ICs

## Topic: Switching Power Dissipation: Switching Power of CMOS Inverter

---

### 1. Introduction to Switching Power Dissipation (Relates to CO2)

Switching power dissipation is a major contributor to the total power consumption in digital integrated circuits (ICs). It arises from the charging and discharging of parasitic capacitances present in the circuit whenever a logic transition occurs.

**Key Concept:** Every node in a digital circuit has associated parasitic capacitance. When a signal transitions from one logic level to another, this capacitance needs to be charged or discharged, which consumes energy.

**Definition:** **Switching Power Dissipation ($P_{sw}$)** is the power consumed due to the charging and discharging of load capacitances in a CMOS circuit during logic transitions.

**Importance:** In modern high-frequency digital circuits, switching power often dominates the total power consumption.

---

### 2. The CMOS Inverter: A Fundamental Building Block

The CMOS inverter is the most basic logic gate and a fundamental building block in digital ICs. Understanding its power dissipation characteristics provides a foundation for analyzing more complex circuits.

**Structure of a CMOS Inverter:**
*   Consists of a PMOS (P-channel Metal-Oxide-Semiconductor) transistor and an NMOS (N-channel Metal-Oxide-Semiconductor) transistor connected in series between the power supply ($V_{DD}$) and ground (GND).
*   The gates of both transistors are connected together, forming the input terminal.
*   The drains of both transistors are connected together, forming the output terminal.
*   The output is typically connected to a load capacitance ($C_L$), which represents the input capacitance of the next stage or interconnect capacitance.

**Operation of a CMOS Inverter:**
*   **Input HIGH ($V_{in} = V_{DD}$):** The PMOS is turned OFF, and the NMOS is turned ON. The output is pulled down to GND.
*   **Input LOW ($V_{in} = 0$):** The PMOS is turned ON, and the NMOS is turned OFF. The output is pulled up to $V_{DD}$.

---

### 3. Switching Power Dissipation in a CMOS Inverter

Let's analyze the power consumed by a CMOS inverter during a transition.

**Scenario: Transition from Input LOW to Input HIGH**

1.  **Initial State (Input LOW):**
    *   The output is HIGH ($V_{out} = V_{DD}$).
    *   The load capacitor ($C_L$) is charged to $V_{DD}$.
    *   The PMOS is ON, and the NMOS is OFF.
    *   Ideally, no direct current flows from $V_{DD}$ to GND through the transistors.

2.  **Transition (Input moving from LOW to HIGH):**
    *   As the input voltage rises, the NMOS starts to turn ON, and the PMOS starts to turn OFF.
    *   During a short period when both transistors are partially ON (known as the **short-circuit region** or **transition region**), a direct path exists from $V_{DD}$ to GND. This leads to **short-circuit power dissipation**, which is usually less significant than dynamic switching power in well-designed circuits.
    *   The PMOS is still conducting, and current flows from $V_{DD}$ to the load capacitor $C_L$, charging it.

3.  **Final State (Input HIGH):**
    *   The output is LOW ($V_{out} = 0$).
    *   The load capacitor ($C_L$) is discharged to 0.
    *   The PMOS is OFF, and the NMOS is ON.

**Focus on Charging the Load Capacitor ($C_L$):**

Consider the case when the input switches from LOW to HIGH, causing the output to transition from HIGH to LOW. The load capacitor $C_L$ needs to be discharged.

*   When the input is HIGH, the NMOS is ON, and it acts as a path to discharge $C_L$ to GND.
*   When the input is LOW, the PMOS is ON, and it acts as a path to charge $C_L$ to $V_{DD}$.

Let's analyze the power consumed during **charging** of the load capacitor $C_L$ from 0V to $V_{DD}$.

*   **Energy stored in the capacitor:** When the capacitor is charged to $V_{DD}$, the energy stored is $E = \frac{1}{2} C_L V_{DD}^2$.
*   **Where does this energy come from?** It comes from the power supply $V_{DD}$.
*   **What happens to this energy?** When the capacitor is subsequently discharged (e.g., by the NMOS pulling the output low), this energy is dissipated as heat in the channel resistance of the NMOS.

**The AC/Dynamic Power Dissipation:**

For every complete switching cycle (e.g., LOW to HIGH and back to LOW), the load capacitor $C_L$ is charged to $V_{DD}$ and then discharged to 0.

*   **Energy per charge cycle:** $\frac{1}{2} C_L V_{DD}^2$
*   **Energy per discharge cycle:** $\frac{1}{2} C_L V_{DD}^2$

The total energy consumed by charging and discharging the capacitor over one full cycle is $C_L V_{DD}^2$.

If the switching frequency is $f$, then the rate at which this energy is consumed is the **switching power**.

**Switching Power ($P_{sw}$):**

$P_{sw} = f \times (\text{Energy consumed per switching cycle})$
$P_{sw} = f \times C_L V_{DD}^2$

**This is the fundamental equation for switching power dissipation in a CMOS inverter (ignoring short-circuit power).**

**Important Considerations and Refinements:**

*   **Activity Factor ($\alpha$):** In a real digital circuit, not all nodes switch at every clock cycle. The activity factor $\alpha$ represents the probability that a node transitions during a clock cycle. For a single gate switching, it can be considered as the probability of the input changing.
    *   $P_{sw} = \alpha f C_L V_{DD}^2$
    *   **Note:** Often, $\alpha$ is implicitly assumed to be 1 for basic analysis of a single gate's switching power. When analyzing an entire circuit, $\alpha$ becomes crucial and is typically less than 1.

*   **Voltage Dependence:** Switching power is proportional to the square of the supply voltage ($V_{DD}^2$). This is a critical factor for power reduction.

*   **Frequency Dependence:** Switching power is directly proportional to the switching frequency ($f$). Higher clock frequencies lead to higher switching power.

*   **Capacitance Dependence:** Switching power is directly proportional to the load capacitance ($C_L$). Reducing capacitance is key to lower power.

*   **Reference Textbooks Content:**
    *   **Baker et al. (4/e):** Discusses dynamic power dissipation extensively, emphasizing the $f C V^2$ formula and the factors influencing it. They often break down $C_L$ into intrinsic gate capacitance and interconnect capacitance.
    *   **Razavi (Analog CMOS, 2/e):** While focused on analog, the fundamental behavior of MOSFETs and parasitic capacitances at switching nodes is explained, which is relevant. The concept of charge and discharge is fundamental to transient analysis.
    *   **Sedra & Smith (8/e):** Covers MOSFET operation and basic circuits. The transient analysis of simple circuits like inverters would inherently involve charging and discharging of capacitances.

---

### 4. Factors Affecting Switching Power Dissipation in a CMOS Inverter

Based on the formula $P_{sw} = \alpha f C_L V_{DD}^2$, we can identify the key factors:

*   **Switching Frequency ($f$):**
    *   **Description:** The rate at which the input signal changes.
    *   **Impact:** Higher frequency means more transitions per unit time, thus more power consumption.
    *   **Example:** A processor running at 1 GHz will consume significantly more switching power than the same processor running at 100 MHz, assuming other factors remain constant. (Relates to CO1 - technology scaling often implies higher frequencies).

*   **Load Capacitance ($C_L$):**
    *   **Description:** The total capacitance at the output node of the inverter. This includes the intrinsic capacitance of the driven gate (input capacitance of the next stage) and the capacitance of the interconnecting wires.
    *   **Impact:** Larger capacitance requires more charge to be moved for each transition, leading to higher power dissipation.
    *   **Example:** Driving a larger fan-out (more gates connected to the output) or longer wires will increase $C_L$ and thus switching power.

*   **Supply Voltage ($V_{DD}$):**
    *   **Description:** The voltage level of the power supply.
    *   **Impact:** Switching power is proportional to the square of $V_{DD}$. Reducing $V_{DD}$ offers a significant power saving opportunity.
    *   **Example:** Reducing $V_{DD}$ from 1.2V to 1.0V can reduce switching power by approximately $(1.0/1.2)^2 \approx 0.69$, or a 31% reduction. (Crucial for CO3 - power management).

*   **Activity Factor ($\alpha$):**
    *   **Description:** The probability of a switching event occurring at a node per clock cycle.
    *   **Impact:** If a node doesn't switch, it doesn't contribute to switching power. Unused or static logic gates do not consume switching power.
    *   **Example:** In a complex circuit, some parts might be disabled or performing constant operations, leading to a lower average activity factor for the entire chip compared to the clock frequency. (Relates to CO3 - clock gating is a technique to reduce activity).

---

### 5. Short-Circuit Power Dissipation (Brief Mention)

While the focus is on switching power, it's important to acknowledge short-circuit power.

*   **Cause:** During the transition of the input signal, there's a brief period when both the PMOS and NMOS transistors are simultaneously conducting. This creates a direct path from $V_{DD}$ to GND, leading to current flow.
*   **Formula (Approximate):** $P_{sc} \approx \frac{1}{12} \beta (V_{DD}-V_{tn})^2 (V_{DD} + V_{tp}) \frac{W}{L} \tau f$
    *   $\beta$: Transconductance parameter
    *   $V_{tn}, V_{tp}$: Threshold voltages for NMOS and PMOS
    *   $W/L$: Transistor aspect ratio
    *   $\tau$: Transition time
*   **Magnitude:** Typically much smaller than switching power in well-designed CMOS circuits where transition times are short relative to the clock period. However, it becomes more significant at very low supply voltages or with very slow transitions.
*   **Reference:** Baker et al. provides detailed analysis of short-circuit power.

---

### 6. Example: Calculating Switching Power

**Problem:**
Consider a CMOS inverter driving a load capacitance of 10 pF. The inverter operates at a supply voltage of 1.8V and a clock frequency of 100 MHz. Assume the activity factor is 0.5. Calculate the switching power dissipation.

**Solution:**

1.  **Identify given values:**
    *   $C_L = 10$ pF $= 10 \times 10^{-12}$ F
    *   $V_{DD} = 1.8$ V
    *   $f = 100$ MHz $= 100 \times 10^6$ Hz
    *   $\alpha = 0.5$

2.  **Use the switching power formula:**
    $P_{sw} = \alpha f C_L V_{DD}^2$

3.  **Substitute the values:**
    $P_{sw} = (0.5) \times (100 \times 10^6 \text{ Hz}) \times (10 \times 10^{-12} \text{ F}) \times (1.8 \text{ V})^2$

4.  **Calculate:**
    $P_{sw} = (0.5) \times (10^8) \times (10 \times 10^{-12}) \times (3.24)$
    $P_{sw} = 0.5 \times 10^{-3} \times 3.24$
    $P_{sw} = 0.5 \times 3.24$ mW
    $P_{sw} = 1.62$ mW

**Answer:** The switching power dissipation of the CMOS inverter is 1.62 mW.

---

### 7. Impact of Technology Scaling on Switching Power (Relates to CO1)

Technology scaling, as described by Moore's Law, involves shrinking transistors. This has a direct impact on switching power:

*   **Reduced Capacitance ($C_L$):** As transistors and interconnects shrink, the associated parasitic capacitances decrease. This leads to lower switching power per gate.
*   **Increased Density and Frequency ($f$):** Scaling allows more transistors on a chip, enabling higher clock frequencies and more complex functionality. While individual gates consume less switching power due to reduced capacitance, the **total** switching power of the chip can increase significantly if the number of switching gates and the overall frequency increase substantially.
*   **Reduced Threshold Voltage ($V_{th}$):** To maintain switching speed in scaled-down transistors, threshold voltages are often reduced. This can lead to increased leakage currents (a different power dissipation mechanism) and potentially impact short-circuit power.
*   **Short Channel Effects:** As transistors become smaller, short-channel effects (like velocity saturation, DIBL, etc.) become more pronounced. These effects can alter transistor characteristics and indirectly influence switching behavior and power consumption.

**Summary for CO1:** While scaling reduces capacitance per gate (beneficial for switching power), the ability to increase frequency and density often leads to higher overall switching power consumption in modern high-performance chips.

---

### 8. Relation to Course Outcomes

*   **CO1: Describe the impact of technology scaling on power dissipation in digital ICs and various short channel effects.**
    *   This section explicitly discusses how scaling affects switching power through capacitance, frequency, and voltage. Short-channel effects are mentioned as influences.
*   **CO2: Discuss the different sources of power dissipation in digital ICs.**
    *   This topic focuses on **switching power dissipation**, which is a primary source. The notes introduce the formula and its components, laying the groundwork for understanding other sources (like leakage) later.
*   **CO3: Describe the various approaches for power management in digital ICs.**
    *   The understanding of the $P_{sw} = \alpha f C_L V_{DD}^2$ formula directly highlights strategies for power management: reducing $V_{DD}$ (Dynamic Voltage and Frequency Scaling - DVFS), reducing frequency ($f$), reducing capacitance ($C_L$) through circuit design and layout, and reducing activity factor ($\alpha$) through techniques like clock gating.
*   **CO4: Apply various clocked and non-clocked design styles for logic implementation.**
    *   While not directly covered in *this specific* sub-topic, understanding switching power is fundamental to evaluating the power efficiency of different clocked (synchronous) and non-clocked (asynchronous) design styles. For example, asynchronous logic often aims to reduce power by only switching when necessary, thus naturally reducing the $\alpha$ factor.
*   **CO5: Describe the use of Adiabatic switching for power management in digital ICs.**
    *   Adiabatic switching is an advanced technique that aims to reduce switching energy loss by charging/discharging capacitors gradually rather than abruptly. The fundamental energy loss in a CMOS inverter ($ \frac{1}{2} C_L V_{DD}^2$ per transition) is directly related to this abrupt charging/discharging. Understanding the source of this loss is a prerequisite for understanding how adiabatic techniques mitigate it.

---

### 9. Key Points to Remember

*   **Switching Power ($P_{sw}$):** Caused by charging/discharging parasitic capacitances.
*   **CMOS Inverter:** The basic building block to understand switching power.
*   **Formula:** $P_{sw} = \alpha f C_L V_{DD}^2$.
*   **Dominant factors:** $V_{DD}^2$, $f$, and $C_L$.
*   **Power Reduction Strategies:** Reduce $V_{DD}$, reduce $f$, reduce $C_L$, reduce activity ($\alpha$).
*   **Short-circuit power:** Occurs during transitions when both transistors conduct, typically less significant than switching power in normal operation.
*   **Technology Scaling:** Reduces $C_L$ but often increases $f$ and density, leading to complex trade-offs in total power.

---

### 10. Practice Questions

**Question 1:**
A CMOS inverter is designed to drive a load capacitance of 5 pF. If the operating frequency is 200 MHz, the supply voltage is 1.2V, and the activity factor is 0.8, what is the switching power dissipation?

**Question 2:**
Which of the following factors has the *most significant* impact on switching power dissipation in a CMOS circuit?
    a) Supply Voltage ($V_{DD}$)
    b) Switching Frequency ($f$)
    c) Load Capacitance ($C_L$)
    d) Activity Factor ($\alpha$)
    *Justify your answer based on the formula.*

**Question 3:**
Explain how reducing the supply voltage ($V_{DD}$) affects the switching power of a CMOS inverter. If $V_{DD}$ is reduced by 20%, by what approximate percentage does the switching power decrease?

---

### 11. Answers to Practice Questions

**Answer 1:**
Given:
$C_L = 5$ pF $= 5 \times 10^{-12}$ F
$f = 200$ MHz $= 200 \times 10^6$ Hz
$V_{DD} = 1.2$ V
$\alpha = 0.8$

$P_{sw} = \alpha f C_L V_{DD}^2$
$P_{sw} = (0.8) \times (200 \times 10^6 \text{ Hz}) \times (5 \times 10^{-12} \text{ F}) \times (1.2 \text{ V})^2$
$P_{sw} = (0.8) \times (2 \times 10^8) \times (5 \times 10^{-12}) \times (1.44)$
$P_{sw} = (0.8 \times 2 \times 5 \times 1.44) \times 10^{(8-12)}$
$P_{sw} = (8 \times 1.44) \times 10^{-4}$
$P_{sw} = 11.52 \times 10^{-4}$ W
$P_{sw} = 1.152$ mW

**Answer 2:**
The formula for switching power is $P_{sw} = \alpha f C_L V_{DD}^2$.
The impact of each factor is:
*   $V_{DD}$: Power is proportional to $V_{DD}^2$.
*   $f$: Power is proportional to $f$.
*   $C_L$: Power is proportional to $C_L$.
*   $\alpha$: Power is proportional to $\alpha$.

The factor with the *most significant* impact, generally, is the **Supply Voltage ($V_{DD}$)** due to the squaring effect ($V_{DD}^2$). A small reduction in $V_{DD}$ can lead to a much larger reduction in power compared to equivalent percentage reductions in $f$, $C_L$, or $\alpha$.

**Answer 3:**
The switching power is proportional to $V_{DD}^2$.
If $V_{DD}$ is reduced by 20%, the new voltage ($V_{DD_{new}}$) is $0.8 \times V_{DD_{old}}$.
The new power ($P_{sw_{new}}$) will be proportional to $(0.8 \times V_{DD_{old}})^2 = 0.64 \times V_{DD_{old}}^2$.
So, the new power is 0.64 times the original power.
The decrease in power is $P_{sw_{old}} - P_{sw_{new}} = P_{sw_{old}} - 0.64 \times P_{sw_{old}} = 0.36 \times P_{sw_{old}}$.
Therefore, the switching power decreases by approximately **36%**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
