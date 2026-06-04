---
title: "Static and transient analysis of CMOS inverter"
subject: "VLSI CIRCUIT DESIGN"
module: "Module 3: Static CMOS Logic Design : MOSFET Logic Design "
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fefcc"
status: "completed"
scrapedAt: "2026-05-23T18:03:43.031Z"
---
# VLSI CIRCUIT DESIGN - Module 3: Static CMOS Logic Design - MOSFET Logic Design

## Topic: Static and Transient Analysis of CMOS Inverter

---

### **1. Introduction to CMOS Inverter**

The CMOS inverter is the fundamental building block of all digital CMOS circuits. It's a simple yet crucial circuit that performs the NOT logic function. It consists of a P-type Metal-Oxide-Semiconductor Field-Effect Transistor (PMOS) and an N-type Metal-Oxide-Semiconductor Field-Effect Transistor (NMOS) connected in series between the power supply ($V_{DD}$) and ground ($V_{SS}$ or 0V). The gates of both transistors are connected together to form the input terminal, and the drains are connected together to form the output terminal.

*   **Key Concept:** The complementary nature of PMOS and NMOS transistors allows for a rail-to-rail voltage swing at the output, leading to low static power dissipation.

*   **Reference:** Kang, Leblebici, Kim, "CMOS Digital Integrated Circuits," Chapter 3.1.1, "The CMOS Inverter."
    *   This section introduces the basic structure and operation of the CMOS inverter, emphasizing its role as the basic inverter gate.

---

### **2. Ideal CMOS Inverter Characteristics**

An ideal CMOS inverter exhibits perfect switching behavior.

*   **Key Concepts:**
    *   **Rail-to-Rail Output Swing:** When the input is at $V_{SS}$ (logic 0), the output is at $V_{DD}$ (logic 1). When the input is at $V_{DD}$ (logic 1), the output is at $V_{SS}$ (logic 0).
    *   **Zero Static Power Dissipation:** In either steady state (input HIGH or LOW), one of the transistors is in the cutoff region, preventing current flow from $V_{DD}$ to $V_{SS}$.
    *   **Symmetry:** The switching threshold ($V_M$, also known as $V_{inverter}$) is exactly at $V_{DD}/2$. This means the inverter switches cleanly when the input voltage is halfway between logic HIGH and logic LOW.

*   **Illustration:**
    *   Input $V_{in} = V_{SS}$ (0V): NMOS is OFF, PMOS is ON. Output $V_{out} = V_{DD}$ (1).
    *   Input $V_{in} = V_{DD}$: PMOS is OFF, NMOS is ON. Output $V_{out} = V_{SS}$ (0V).

---

### **3. Static Analysis of CMOS Inverter**

Static analysis focuses on the behavior of the inverter in its steady states (input is either HIGH or LOW). It primarily deals with determining the output voltage for given input voltages and understanding the power consumption.

#### **3.1. Input at Logic '0' ($V_{in} = V_{SS}$)**

*   **Scenario:** When the input is connected to $V_{SS}$ (ground).
*   **MOSFET Operation:**
    *   **NMOS:** $V_{GS,n} = V_{in} - V_{SS} = V_{SS} - V_{SS} = 0$. Since $V_{GS,n} < V_{tn}$ (NMOS threshold voltage), the NMOS transistor is in the **cutoff region**.
    *   **PMOS:** $V_{GS,p} = V_{in} - V_{DD} = V_{SS} - V_{DD} = -V_{DD}$. Since $|V_{GS,p}| > |V_{tp}|$ (PMOS threshold voltage, which is negative), the PMOS transistor is in the **triode (or linear) region** (or saturation if $V_{DS,p} < V_{GS,p} - V_{tp}$). In the steady state of an ideal inverter, the PMOS is fully ON and acts like a closed switch to $V_{DD}$.
*   **Output Voltage:** Due to the PMOS being ON and NMOS being OFF, the output node is pulled up to $V_{DD}$. So, $V_{out} = V_{DD}$.
*   **Current Flow:** No significant current flows from $V_{DD}$ to $V_{SS}$ because the NMOS is OFF. The only current is leakage current, which is negligible.
*   **Power Dissipation:** Static power dissipation is virtually zero.

#### **3.2. Input at Logic '1' ($V_{in} = V_{DD}$)**

*   **Scenario:** When the input is connected to $V_{DD}$.
*   **MOSFET Operation:**
    *   **NMOS:** $V_{GS,n} = V_{in} - V_{SS} = V_{DD} - V_{SS} = V_{DD}$. Since $V_{GS,n} > V_{tn}$, the NMOS transistor is in the **saturation region** (or triode if $V_{DS,n} < V_{GS,n} - V_{tn}$). In the steady state of an ideal inverter, the NMOS is fully ON and acts like a closed switch to $V_{SS}$.
    *   **PMOS:** $V_{GS,p} = V_{in} - V_{DD} = V_{DD} - V_{DD} = 0$. Since $V_{GS,p} = 0$, the PMOS transistor is in the **cutoff region**.
*   **Output Voltage:** Due to the NMOS being ON and PMOS being OFF, the output node is pulled down to $V_{SS}$. So, $V_{out} = V_{SS}$.
*   **Current Flow:** No significant current flows from $V_{DD}$ to $V_{SS}$ because the PMOS is OFF.
*   **Power Dissipation:** Static power dissipation is virtually zero.

#### **3.3. The "Forbidden" Region (Transition Region)**

*   **Scenario:** When $V_{in}$ is between $V_{SS}$ and $V_{DD}$.
*   **MOSFET Operation:** Both NMOS and PMOS transistors are in the **saturation region** or **triode region** (depending on the exact $V_{in}$ value and transistor characteristics). As $V_{in}$ sweeps from $V_{SS}$ to $V_{DD}$:
    *   The NMOS transistor turns ON and its current ($I_{DS,n}$) increases.
    *   The PMOS transistor turns OFF and its current ($I_{DS,p}$) decreases.
*   **Current Flow:** In this region, both transistors conduct simultaneously, forming a direct path from $V_{DD}$ to $V_{SS}$. This results in a significant **short-circuit current** ($I_{SC}$) flowing through the inverter.
    *   $I_{SC} = I_{DS,n} = -I_{DS,p}$ (assuming ideal current matching).
*   **Power Dissipation:** Dynamic power dissipation occurs here due to this short-circuit current. The peak power dissipation happens at the switching threshold ($V_M$).
*   **Switching Threshold ($V_M$)**: The point where the output voltage is equal to the input voltage ($V_{out} = V_{in}$). At this point, the current through the NMOS and PMOS is equal and opposite, satisfying $I_{DS,n} = -I_{DS,p}$.
    *   For symmetric devices (where $|V_{tp}| = V_{tn}$ and $\mu_p W_p / \mu_n W_n = 1$), $V_M = V_{DD}/2$.

*   **Reference:**
    *   Wolf, "Modern VLSI Design," Chapter 4.2, "CMOS Inverter Static Behavior."
        *   This chapter details the voltage transfer characteristics (VTC) and the behavior in different regions.
    *   Rabaey, "Digital Integrated Circuits," Chapter 3.3.1, "The CMOS Inverter."
        *   Rabaey provides a thorough analysis of the VTC, including the role of $V_{tn}$, $V_{tp}$, and $\beta$ ratios.

---

### **4. Transient Analysis of CMOS Inverter**

Transient analysis deals with the dynamic behavior of the inverter, specifically how quickly it can switch from one state to another. This is crucial for determining the performance (speed) of the circuit. The primary factors affecting transient response are the switching speed and power dissipation during switching.

#### **4.1. Key Parameters for Transient Analysis**

*   **Rise Time ($t_r$):** The time taken for the output voltage to rise from 10% to 90% of $V_{DD}$.
*   **Fall Time ($t_f$):** The time taken for the output voltage to fall from 90% to 10% of $V_{DD}$.
*   **Propagation Delay ($t_p$):** The average time for the output to change in response to a change at the input. It's usually defined as the time from the input crossing the switching threshold ($V_M$) to the output crossing the switching threshold.
    *   $t_{pHL}$: Propagation delay for High-to-Low transition (input HIGH, output LOW).
    *   $t_{pLH}$: Propagation delay for Low-to-High transition (input LOW, output HIGH).
    *   $t_p = (t_{pHL} + t_{pLH}) / 2$.
*   **Power Delay Product (PDP):** A figure of merit that quantifies the trade-off between power consumption and speed. $PDP = P_{avg} \times t_p$.
*   **Energy per transition:** The energy consumed during a single switching event. $E_{transition} = P_{avg} \times T_{period}$, where $T_{period}$ is the period of the clock signal.

#### **4.2. Charging and Discharging the Load Capacitance ($C_L$)**

The output of the inverter drives a load capacitance ($C_L$), which represents the input capacitance of subsequent gates and the parasitic capacitance of the interconnects.

*   **Discharging the Load Capacitance (Output going from HIGH to LOW):**
    *   **Scenario:** Input switches from $V_{DD}$ to $V_{SS}$. PMOS turns OFF, NMOS turns ON.
    *   **Mechanism:** The NMOS transistor pulls the output node down to $V_{SS}$ by discharging the load capacitor $C_L$ through its channel.
    *   **Current:** The discharge current is primarily provided by the NMOS transistor. Assuming the NMOS operates in saturation during a significant portion of the discharge, the current can be approximated by $I_{DS,n} \approx \frac{1}{2} \mu_n C_{ox} \frac{W_n}{L_n} (V_{GS,n} - V_{tn})^2$.
    *   **Charging Equation:** The time to discharge a capacitor $C_L$ through a current $I$ is approximately $\Delta t \approx \frac{C_L \Delta V}{I}$.
    *   **Approximation for $t_{pHL}$:** For a simplified analysis, assuming a constant discharge current $I_{discharge}$, $t_{pHL} \approx \frac{C_L (V_{DD} - V_{SS})}{I_{discharge}}$. The effective discharge current is related to the overdrive voltage $(V_{DD}-V_{tn})$ and the transistor's characteristics.
    *   **Reference:** Kang, Leblebici, Kim, "CMOS Digital Integrated Circuits," Section 3.2.1, "Transient Response."
        *   This section provides the fundamental equations for rise and fall times by considering the discharging and charging processes.

*   **Charging the Load Capacitance (Output going from LOW to HIGH):**
    *   **Scenario:** Input switches from $V_{SS}$ to $V_{DD}$. NMOS turns OFF, PMOS turns ON.
    *   **Mechanism:** The PMOS transistor pulls the output node up to $V_{DD}$ by charging the load capacitor $C_L$ through its channel.
    *   **Current:** The charge current is primarily provided by the PMOS transistor. Assuming the PMOS operates in saturation, the current can be approximated by $I_{DS,p} \approx -\frac{1}{2} \mu_p C_{ox} \frac{W_p}{L_p} (V_{GS,p} - V_{tp})^2$. Note that $V_{GS,p}$ is negative and $V_{tp}$ is negative.
    *   **Approximation for $t_{pLH}$:** Similarly, for a simplified analysis, $t_{pLH} \approx \frac{C_L (V_{DD} - V_{SS})}{|I_{charge}|}$. The effective charge current is related to the overdrive voltage $|V_{DD}+V_{tp}|$ and the PMOS characteristics.

#### **4.3. Factors Affecting Transient Response**

*   **Load Capacitance ($C_L$):** Larger $C_L$ leads to longer rise and fall times, hence larger propagation delays. This is the most dominant factor affecting speed.
    *   $t_p \propto C_L$
*   **Transistor Size (W/L ratio):** Larger W/L ratios for both NMOS and PMOS result in higher currents, faster charging/discharging, and lower propagation delays.
    *   $t_p \propto \frac{1}{W/L}$
*   **Supply Voltage ($V_{DD}$):** Higher $V_{DD}$ leads to larger overdrive voltages for both transistors, resulting in higher currents and faster switching, hence lower propagation delays.
    *   $t_p \propto \frac{1}{V_{DD}-V_th}$ (approximately)
*   **Threshold Voltages ($V_{tn}$, $V_{tp}$):** Higher threshold voltages reduce the overdrive voltage, leading to lower currents and slower switching.
*   **Mobility ($\mu_n$, $\mu_p$):** Higher carrier mobility leads to higher currents and faster switching. (Electron mobility $\mu_n$ is generally higher than hole mobility $\mu_p$).
*   **Aspect Ratio Matching ($W_p/L_p$ vs $W_n/L_n$):** To achieve symmetric switching delay ($t_{pHL} \approx t_{pLH}$), the current driving capabilities of PMOS and NMOS must be matched. Since $\mu_n > \mu_p$, the PMOS transistor typically needs a larger width-to-length ratio ($W_p/L_p$) than the NMOS transistor ($W_n/L_n$) to achieve equal drive strength.
    *   For equal drive strength: $\mu_n C_{ox} \frac{W_n}{L_n} (V_{DD} - V_{tn})^2 \approx \mu_p C_{ox} \frac{W_p}{L_p} (V_{DD} - V_{tp})^2$.
    *   This implies $\frac{W_p/L_p}{W_n/L_n} \approx \frac{\mu_n}{\mu_p} \left(\frac{V_{DD} - V_{tn}}{V_{DD} - V_{tp}}\right)^2$.

#### **4.4. Dynamic Power Dissipation**

When the inverter switches, current flows from $V_{DD}$ to $V_{SS}$ through both transistors for a short period, charging and discharging the load capacitance.

*   **Short-Circuit Power ($P_{SC}$):** Power dissipated due to the direct path between $V_{DD}$ and $V_{SS}$ when both transistors are partially ON. This occurs during the switching transition.
    *   $P_{SC} \approx \frac{1}{2} I_{peak} V_{DD} t_{transition}$
*   **Dynamic Power ($P_{dyn}$):** Power consumed in charging and discharging the load capacitance.
    *   The energy required to charge $C_L$ to $V_{DD}$ is $E_{charge} = \frac{1}{2} C_L V_{DD}^2$.
    *   This energy is supplied by $V_{DD}$ and dissipated in the pull-up network (PMOS).
    *   The energy delivered to the load when discharging is stored in the capacitor.
    *   The average dynamic power is given by: $P_{dyn} = \alpha C_L V_{DD}^2 f$, where $\alpha$ is the activity factor (fraction of clock cycles the output switches) and $f$ is the clock frequency.
*   **Total Average Power ($P_{avg}$):** $P_{avg} = P_{static} + P_{dyn} + P_{SC}$.
    *   Since $P_{static} \approx 0$ for CMOS, $P_{avg} \approx P_{dyn} + P_{SC}$.
    *   $P_{dyn}$ is the dominant component for high frequencies.

*   **Reference:**
    *   Smith, "Application Specific Integrated Circuits," Chapter 3.2.3, "Power Consumption."
        *   This section covers the different components of power dissipation in CMOS circuits, including dynamic and short-circuit power.
    *   Weste, Eshraghian, "Principles of CMOS VLSI Design," Chapter 7.4, "Power Dissipation."
        *   Provides detailed explanations of dynamic, static, and short-circuit power.

---

### **5. Voltage Transfer Characteristics (VTC)**

The Voltage Transfer Characteristic (VTC) of a CMOS inverter plots the output voltage ($V_{out}$) as a function of the input voltage ($V_{in}$). It's a crucial tool for understanding the inverter's behavior and its noise margins.

*   **Regions of the VTC:**
    *   **Region I (High Noise Margin):** $V_{in}$ low ($V_{SS}$ to $V_{tn}$). NMOS OFF, PMOS ON. $V_{out} \approx V_{DD}$.
    *   **Region II (Transition Region):** $V_{in}$ increases. Both PMOS and NMOS conduct. $V_{out}$ drops rapidly.
    *   **Region III (Low Noise Margin):** $V_{in}$ high ($V_{DD} - |V_{tp}|$ to $V_{DD}$). PMOS OFF, NMOS ON. $V_{out} \approx V_{SS}$.

*   **Key Points on the VTC:**
    *   **$V_{OL}$ (Output Low Voltage):** $V_{SS}$
    *   **$V_{OH}$ (Output High Voltage):** $V_{DD}$
    *   **$V_{M}$ (Switching Threshold):** $V_{in} = V_{out}$. For ideal, symmetric devices, $V_M = V_{DD}/2$.
    *   **Noise Margins ($NM_H, NM_L$):**
        *   **$NM_H$ (High Noise Margin):** The maximum voltage that can be added to a logic '1' input without causing a logic malfunction. $NM_H = V_{IL} - V_{OH}$ (where $V_{IL}$ is the input voltage below which output is considered HIGH). In practice, $NM_H = V_M - V_{OL}$.
        *   **$NM_L$ (Low Noise Margin):** The maximum voltage that can be subtracted from a logic '0' input without causing a logic malfunction. $NM_L = V_{OL} - V_{IH}$ (where $V_{IH}$ is the input voltage above which output is considered LOW). In practice, $NM_L = V_{OH} - V_M$.
        *   For symmetric devices, $NM_H = NM_L = (V_{DD} - V_{M}) = (V_{M} - V_{SS})$.

*   **Reference:**
    *   Razavi, "Design of Analog CMOS Integrated Circuits," Chapter 2.4, "The CMOS Inverter."
        *   Razavi's text, though focused on analog, provides excellent insight into the VTC and noise margins, as these concepts are fundamental to both analog and digital design.

---

### **6. Design Considerations for CMOS Inverter**

*   **Sizing:** The W/L ratios of the PMOS and NMOS transistors are critical for achieving desired speed and power characteristics.
    *   **Speed:** To minimize propagation delay, both PMOS and NMOS should be sized to provide strong drive current. Generally, increase W/L.
    *   **Power:** Increasing W/L increases capacitance, which leads to higher dynamic power consumption.
    *   **Symmetry:** To ensure symmetric delays ($t_{pHL} \approx t_{pLH}$), the PMOS width is typically made larger than the NMOS width by a factor related to the mobility ratio ($\mu_n/\mu_p$).
*   **Layout:** The physical layout of the inverter affects its parasitic capacitance and resistance, which in turn influence performance.
*   **Technology Node:** The minimum feature size (e.g., 180nm, 90nm, 7nm) of the fabrication process dictates transistor characteristics like threshold voltage, mobility, and parasitic capacitances.
*   **Supply Voltage:** $V_{DD}$ affects speed and power. Lowering $V_{DD}$ reduces power but also reduces speed.

---

### **7. Practical CMOS Inverter (Non-Ideal)**

In reality, the CMOS inverter is not ideal due to several factors:

*   **Non-zero threshold voltages ($V_{tn}$ and $V_{tp}$):** These cause asymmetry in switching.
*   **Mobility differences ($\mu_n$ vs $\mu_p$):** $\mu_n > \mu_p$, meaning NMOS has higher drive strength for the same W/L.
*   **Process variations:** Variations in doping concentrations, oxide thickness, and lithography can affect transistor parameters.
*   **Channel Length Modulation:** Affects the saturation current.
*   **Parasitic capacitances and resistances:** Exist at the transistor terminals and in interconnects.

These non-idealities lead to:

*   **Asymmetric switching threshold:** $V_M$ might not be exactly $V_{DD}/2$.
*   **Asymmetric delays:** $t_{pHL}$ might differ from $t_{pLH}$.
*   **Non-zero static power dissipation:** Leakage currents can contribute to static power.

*   **Reference:** Weste, Eshraghian, "Principles of CMOS VLSI Design," Chapter 7.2, "Basic CMOS Inverter."
    *   This section delves into the non-ideal behavior and how it affects the VTC and performance.

---

### **8. Connection to Course Outcomes**

*   **CO1 (VLSI Design Methodologies):** Understanding the CMOS inverter is foundational. It's the simplest logic gate and the basis for complex combinational and sequential circuits, which are part of VLSI design. The analysis of speed and power directly relates to design trade-offs.
*   **CO2 (VLSI Fabrication Techniques):** The analysis relies on understanding MOSFET characteristics ($\mu$, $V_{th}$, $C_{ox}$), which are directly determined by fabrication processes.
*   **CO3 (Design, analyse and create layout of static CMOS logic circuits):** This topic directly addresses the design and analysis of a static CMOS circuit. Sizing transistors for specific performance goals and understanding the impact of layout (though not detailed here) are crucial for CO3.
*   **CO4 (Design and analysis of dynamic logic circuits and storage cells):** While this topic focuses on static logic, understanding the inverter's transient behavior is essential for analyzing dynamic logic and storage cells, as they involve charge/discharge mechanisms and speed considerations.

---

### **9. Summary of Key Points to Remember**

*   **CMOS Inverter:** Fundamental building block, PMOS + NMOS.
*   **Static Operation:** Zero static power dissipation when input is HIGH or LOW.
*   **Transient Operation:** Power is consumed during switching due to charging/discharging $C_L$ and short-circuit current.
*   **Key Performance Metrics:** Rise time, Fall time, Propagation Delay ($t_p$).
*   **Factors Affecting $t_p$:** $C_L$, W/L ratio, $V_{DD}$, mobility, threshold voltages.
*   **VTC:** Plots $V_{out}$ vs $V_{in}$, shows noise margins.
*   **Sizing for Symmetry:** $\frac{W_p/L_p}{W_n/L_n} \approx \frac{\mu_n}{\mu_p} \left(\frac{V_{DD} - V_{tn}}{V_{DD} - V_{tp}}\right)^2$ for equal delays.
*   **Power:** Dominated by dynamic power ($P_{dyn} = \alpha C_L V_{DD}^2 f$) and short-circuit power.

---

### **10. Practice Questions and Answers**

**Q1:** What is the primary advantage of CMOS logic over other logic families like NMOS or TTL in terms of static power consumption?
**A1:** The primary advantage is extremely low static power consumption. In steady states, one of the complementary transistors (PMOS or NMOS) is always in cutoff, preventing a direct path for current flow from $V_{DD}$ to $V_{SS}$.

**Q2:** For a standard CMOS inverter with symmetric characteristics ($V_{tn} = |V_{tp}|$, $\mu_n (W/L)_n = \mu_p (W/L)_p$), what is the ideal switching threshold voltage ($V_M$)?
**A2:** The ideal switching threshold voltage ($V_M$) is $V_{DD}/2$.

**Q3:** If the load capacitance ($C_L$) of a CMOS inverter is doubled, how does the propagation delay ($t_p$) change, assuming other parameters remain constant?
**A3:** The propagation delay ($t_p$) is directly proportional to the load capacitance ($C_L$). Therefore, doubling $C_L$ will approximately double the propagation delay. ($t_p \propto C_L$)

**Q4:** Explain why the PMOS transistor in a CMOS inverter often needs a larger width-to-length ratio (W/L) than the NMOS transistor.
**A4:** This is due to the lower mobility of holes compared to electrons ($\mu_p < \mu_n$). To achieve comparable current-driving capability (and thus symmetric switching delays), the PMOS transistor needs a larger cross-sectional area, achieved by increasing its W/L ratio.

**Q5:** Define Rise Time ($t_r$) and Fall Time ($t_f$) for a CMOS inverter.
**A5:**
*   **Rise Time ($t_r$):** The time taken for the output voltage to transition from 10% of $V_{DD}$ to 90% of $V_{DD}$ (during a low-to-high transition).
*   **Fall Time ($t_f$):** The time taken for the output voltage to transition from 90% of $V_{DD}$ to 10% of $V_{DD}$ (during a high-to-low transition).

**Q6:** What are the two main components of dynamic power dissipation in a CMOS inverter?
**A6:** The two main components are:
1.  **Charging/Discharging Power:** Power consumed in charging and discharging the load capacitance ($C_L$). This is the dominant component and is proportional to $C_L V_{DD}^2 f$.
2.  **Short-Circuit Power:** Power dissipated due to the direct path between $V_{DD}$ and $V_{SS}$ that exists when both PMOS and NMOS transistors conduct simultaneously during the switching transition.

---
This concludes the study notes for the Static and Transient Analysis of the CMOS Inverter. Remember to refer to the textbooks for more in-depth derivations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
