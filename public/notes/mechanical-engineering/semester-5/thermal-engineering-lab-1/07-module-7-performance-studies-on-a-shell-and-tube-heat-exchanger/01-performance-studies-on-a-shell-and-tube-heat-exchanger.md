---
title: "Performance studies on a shell and tube heat exchanger"
subject: "THERMAL ENGINEERING LAB-1"
module: "Module 7: Performance studies on a shell and tube heat exchanger"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf48044636b9"
status: "completed"
scrapedAt: "2026-05-20T18:02:13.795Z"
---
# THERMAL ENGINEERING LAB-1: Module 7 - Performance Studies on a Shell and Tube Heat Exchanger

## Introduction to Shell and Tube Heat Exchangers

Shell and tube heat exchangers (STHEs) are one of the most common types of industrial heat exchangers. They are used to transfer heat between two fluids, one flowing inside the tubes and the other flowing over the tubes within a shell. This module focuses on understanding and evaluating the performance of these crucial devices.

**Relationship to Course Outcomes:**
This module directly contributes to **CO3: Analyze the performance of heat exchangers and heat pipes (Knowledge Level: K4)** by providing hands-on experience and theoretical understanding of heat exchanger operation and evaluation.

**Reference Books:**
*   **Cengel, Yunus A.** *Heat Transfer: A Practical Approach*. 4th ed., Tata McGraw-Hill Education, 2012. (Chapters on Heat Exchangers)
*   **Sachdeva, R. C.** *Fundamentals of Engineering Heat and Mass Transfer*. 3rd ed., New Age Publications, 2012. (Chapters on Heat Exchangers)
*   **Holman, J. P.** *Heat Transfer*. 10th ed., McGraw-Hill, 2009. (Chapters on Heat Exchangers)
*   **Incropera, Frank P., and David P. DeWitt.** *Fundamentals of Heat and Mass Transfer*. 2011. (Chapters on Heat Exchangers)
*   **Kothandaraman, C. P.** *Fundamentals of Heat and Mass Transfer*. New Age International, 2006. (Chapters on Heat Exchangers)

---

## 7.1 Basic Principles of Heat Exchangers

### 7.1.1 Definition and Purpose

*   **Heat Exchanger:** A device designed to efficiently transfer thermal energy from one fluid (liquid or gas) to another, without the two fluids coming into direct contact.
*   **Purpose:** To heat a cold fluid using a hot fluid, or to cool a hot fluid using a cold fluid. This is essential in numerous industrial processes, including power generation, chemical processing, refrigeration, and air conditioning.

### 7.1.2 Classification of Heat Exchangers

Heat exchangers can be classified based on several criteria:

*   **Flow Arrangement:**
    *   **Parallel Flow:** Both fluids flow in the same direction. This leads to a rapidly decreasing temperature difference along the length, resulting in lower thermal effectiveness.
    *   **Counter Flow:** Fluids flow in opposite directions. This arrangement allows for the highest thermal effectiveness as a larger temperature difference is maintained throughout the exchanger.
    *   **Cross Flow:** Fluids flow perpendicular to each other. This can be mixed or unmixed, affecting the temperature distribution.

*   **Construction:**
    *   **Shell and Tube:** The most common type in industrial applications, featuring a bundle of tubes enclosed within a shell.
    *   **Plate:** Consists of a series of thin plates with channels for fluid flow.
    *   **Finned Tube:** Tubes with fins attached to enhance the heat transfer surface area.

### 7.1.3 Modes of Heat Transfer in Heat Exchangers

Heat transfer in STHEs involves all three modes:

1.  **Convection:** Heat transfer from the hot fluid to the inner surface of the tubes, and from the outer surface of the tubes to the cold fluid. This is the dominant mode of heat transfer within the fluids.
2.  **Conduction:** Heat transfer through the wall of the tubes from the hot side to the cold side.
3.  **Convection (again):** Heat transfer from the tube surfaces to the respective fluids.

**Key Concept: Overall Heat Transfer Coefficient (U)**
The combined effect of these modes is represented by the overall heat transfer coefficient, *U*. It quantifies the rate of heat transfer per unit area and per unit temperature difference.

$Q = U \cdot A \cdot \Delta T_{lm}$

Where:
*   $Q$ = Rate of heat transfer (W)
*   $U$ = Overall heat transfer coefficient (W/m²·K)
*   $A$ = Heat transfer surface area (m²)
*   $\Delta T_{lm}$ = Log Mean Temperature Difference (K)

---

## 7.2 Shell and Tube Heat Exchanger (STHE) - Specifics

### 7.2.1 Components of a Shell and Tube Heat Exchanger

*   **Shell:** The outer casing that encloses the tube bundle.
*   **Tubes:** The primary conduits through which one fluid flows.
*   **Tube Sheet:** Plates that hold the tubes in place at each end of the shell.
*   **Baffles:** Plates placed within the shell to direct the shell-side fluid flow across the tube bundle, increasing turbulence and heat transfer. They also provide support to the tubes.
*   **Heads:** End covers of the shell that distribute the fluid into and out of the tubes.
*   **Nozzles:** Inlets and outlets for the fluids.

### 7.2.2 Working Principle

The hot fluid flows through the shell, while the cold fluid flows through the tubes (or vice versa). Baffles in the shell create a cross-flow pattern, forcing the shell-side fluid to flow back and forth across the tube bundle. This enhances mixing and increases the convective heat transfer coefficient on the shell side.

---

## 7.3 Performance Parameters and Evaluation

The performance of a heat exchanger is assessed by determining its thermal effectiveness and efficiency.

### 7.3.1 Heat Transfer Rate (Q)

The rate of heat transfer can be calculated based on the enthalpy change of either fluid:

**For the hot fluid:**
$Q_h = \dot{m}_h \cdot c_{p,h} \cdot (T_{h,in} - T_{h,out})$

**For the cold fluid:**
$Q_c = \dot{m}_c \cdot c_{p,c} \cdot (T_{c,out} - T_{c,in})$

**Important Note:** In an ideal heat exchanger (no heat loss to the surroundings), $Q_h = Q_c$. In practice, there might be slight discrepancies due to experimental errors or minor heat losses.

Where:
*   $\dot{m}_h, \dot{m}_c$ = Mass flow rates of hot and cold fluids (kg/s)
*   $c_{p,h}, c_{p,c}$ = Specific heat capacities of hot and cold fluids at constant pressure (J/kg·K)
*   $T_{h,in}, T_{h,out}$ = Inlet and outlet temperatures of hot fluid (°C or K)
*   $T_{c,in}, T_{c,out}$ = Inlet and outlet temperatures of cold fluid (°C or K)

### 7.3.2 Log Mean Temperature Difference (LMTD)

The temperature difference between the two fluids varies along the length of the heat exchanger. The LMTD is used to represent the average temperature difference driving the heat transfer.

**For Parallel Flow:**
$\Delta T_{lm, parallel} = \frac{(T_{h,in} - T_{c,out}) - (T_{h,out} - T_{c,in})}{\ln \left( \frac{T_{h,in} - T_{c,out}}{T_{h,out} - T_{c,in}} \right)}$

**For Counter Flow:**
$\Delta T_{lm, counter} = \frac{(T_{h,in} - T_{c,out}) - (T_{h,out} - T_{c,in})}{\ln \left( \frac{T_{h,in} - T_{c,out}}{T_{h,out} - T_{c,in}} \right)}$

**Important Note:** The LMTD is simpler to use for calculations when inlet and outlet temperatures are known, and it assumes constant fluid properties and a constant overall heat transfer coefficient.

### 7.3.3 Overall Heat Transfer Coefficient (U)

Once the heat transfer rate ($Q$) and LMTD ($\Delta T_{lm}$) are known, the overall heat transfer coefficient can be calculated using the fundamental heat exchanger equation:

$U = \frac{Q}{A \cdot \Delta T_{lm}}$

Where $A$ is the heat transfer surface area of the tubes. For a shell and tube heat exchanger, $A$ is typically calculated based on the outer surface area of the tubes:

$A = N \cdot \pi \cdot D_o \cdot L$

Where:
*   $N$ = Number of tubes
*   $D_o$ = Outer diameter of the tubes (m)
*   $L$ = Length of the tubes (m)

### 7.3.4 Effectiveness ($\epsilon$)

Effectiveness is a dimensionless parameter that compares the actual heat transfer rate to the maximum possible heat transfer rate.

**Maximum Possible Heat Transfer Rate ($Q_{max}$):** This occurs in an ideal counter-flow heat exchanger where one of the fluids experiences the maximum possible temperature change.
$Q_{max} = C_{min} \cdot (T_{h,in} - T_{c,in})$

Where $C_{min}$ is the minimum heat capacity rate, defined as:
$C_{min} = \min (\dot{m}_h \cdot c_{p,h}, \dot{m}_c \cdot c_{p,c})$

**Effectiveness ($\epsilon$):**
$\epsilon = \frac{Q}{Q_{max}} = \frac{C_{min} \cdot (T_{actual})}{T_{h,in} - T_{c,in}}$

Where $T_{actual}$ is the actual temperature change of the fluid with the minimum heat capacity rate.

$\epsilon = \frac{C_{min} \cdot (T_{c,out} - T_{c,in})}{C_{min} \cdot (T_{h,in} - T_{c,in})}$  if $C_{min} = C_c$
$\epsilon = \frac{C_{min} \cdot (T_{h,in} - T_{h,out})}{C_{min} \cdot (T_{h,in} - T_{c,in})}$  if $C_{min} = C_h$

**Relationship to NTU Method:**
Effectiveness is directly related to the Number of Transfer Units (NTU) and the capacity ratio ($C_r = C_{min} / C_{max}$). The NTU method is often used to predict the performance of heat exchangers without knowing the outlet temperatures directly.

**Key Concept: Number of Transfer Units (NTU)**
$NTU = \frac{U \cdot A}{C_{min}}$

The relationship between $\epsilon$, NTU, and $C_r$ is complex and depends on the flow arrangement. (Refer to Cengel or Incropera for detailed correlations).

---

## 7.4 Experimental Procedure for Performance Study

The following outlines a typical experimental procedure for studying the performance of an STHE in a lab setting.

### 7.4.1 Apparatus

*   Shell and Tube Heat Exchanger unit
*   Centrifugal pumps for hot and cold fluids
*   Flow meters (e.g., rotameters) for measuring flow rates
*   Thermocouples or RTDs for measuring fluid inlet and outlet temperatures
*   Control valves for regulating flow rates
*   Power supply for pumps
*   Data acquisition system (optional)

### 7.4.2 Steps

1.  **Familiarization:** Understand the setup, identify all components (inlet/outlet nozzles, pumps, flow meters, thermometers).
2.  **Fluid Preparation:** Fill the hot fluid reservoir (e.g., water, oil) and cold fluid reservoir (e.g., water) if necessary. Ensure the heating element for the hot fluid is functional.
3.  **Initial Setup:**
    *   Set the desired flow rate for the cold fluid using its control valve and monitor with the flow meter.
    *   Turn on the cold fluid pump.
    *   Turn on the heating element for the hot fluid.
    *   Set the desired flow rate for the hot fluid using its control valve and monitor with the flow meter.
    *   Turn on the hot fluid pump.
4.  **Stabilization:** Allow the system to reach steady-state conditions. This means that the measured temperatures and flow rates should remain constant over a period.
5.  **Data Collection:** Once steady-state is achieved, record the following:
    *   Inlet temperature of the hot fluid ($T_{h,in}$)
    *   Outlet temperature of the hot fluid ($T_{h,out}$)
    *   Inlet temperature of the cold fluid ($T_{c,in}$)
    *   Outlet temperature of the cold fluid ($T_{c,out}$)
    *   Flow rate of the hot fluid ($\dot{m}_h$ or reading from rotameter)
    *   Flow rate of the cold fluid ($\dot{m}_c$ or reading from rotameter)
6.  **Varying Parameters:** Repeat steps 3-5 for different combinations of flow rates for both hot and cold fluids. This allows for analysis of how flow rates affect performance. Common variations include:
    *   Constant hot fluid flow, varying cold fluid flow.
    *   Constant cold fluid flow, varying hot fluid flow.
    *   Varying both flow rates simultaneously.
7.  **Record Specific Heat Capacities:** Obtain or calculate the specific heat capacities ($c_{p,h}$, $c_{p,c}$) of the fluids used at the average operating temperatures. These can be found in property tables (e.g., Cengel's Appendix).
8.  **Record Heat Transfer Area:** Obtain the dimensions of the heat exchanger (number of tubes, outer diameter, length) to calculate the heat transfer surface area ($A$).

---

## 7.5 Calculations and Analysis

For each set of experimental data collected at steady-state:

1.  **Convert Flow Rate:** If using rotameters, ensure you convert the readings to mass flow rates ($\dot{m}$) using density values at the operating temperature.
    $\dot{m} = \rho \cdot V$ (where $V$ is volumetric flow rate)

2.  **Calculate Heat Transfer Rate (Q):**
    *   Calculate $Q_h = \dot{m}_h \cdot c_{p,h} \cdot (T_{h,in} - T_{h,out})$
    *   Calculate $Q_c = \dot{m}_c \cdot c_{p,c} \cdot (T_{c,out} - T_{c,in})$
    *   **Check for consistency:** $Q_h$ and $Q_c$ should be close. You can take an average or use one based on which fluid's properties are more accurately known or measured.

3.  **Determine Flow Arrangement:** Identify if the experimental setup simulates parallel or counter flow.

4.  **Calculate LMTD ($\Delta T_{lm}$):** Use the appropriate formula for the identified flow arrangement.

5.  **Calculate Overall Heat Transfer Coefficient (U):**
    *   Calculate the heat transfer area $A = N \cdot \pi \cdot D_o \cdot L$.
    *   $U = \frac{Q}{A \cdot \Delta T_{lm}}$

6.  **Calculate Heat Capacity Rates:**
    *   $C_h = \dot{m}_h \cdot c_{p,h}$
    *   $C_c = \dot{m}_c \cdot c_{p,c}$

7.  **Determine $C_{min}$ and $C_{max}$:**
    *   $C_{min} = \min(C_h, C_c)$
    *   $C_{max} = \max(C_h, C_c)$

8.  **Calculate Capacity Ratio ($C_r$):**
    *   $C_r = \frac{C_{min}}{C_{max}}$

9.  **Calculate Maximum Possible Heat Transfer Rate ($Q_{max}$):**
    *   $Q_{max} = C_{min} \cdot (T_{h,in} - T_{c,in})$

10. **Calculate Effectiveness ($\epsilon$):**
    *   $\epsilon = \frac{Q}{Q_{max}}$

11. **Calculate NTU:**
    *   $NTU = \frac{U \cdot A}{C_{min}}$

### 7.5.1 Data Presentation

*   Tabulate all experimental data and calculated values.
*   Plot graphs to visualize the performance trends:
    *   $Q$ vs. flow rates
    *   $U$ vs. flow rates (e.g., Reynolds number)
    *   $\epsilon$ vs. NTU (often compared with theoretical curves for the specific flow arrangement).

---

## 7.6 Factors Affecting Performance

*   **Flow Rates:** Higher flow rates generally lead to higher heat transfer coefficients but can also reduce the residence time, potentially lowering effectiveness.
*   **Fluid Properties:** Specific heat, viscosity, and thermal conductivity of the fluids significantly influence heat transfer.
*   **Temperature Difference:** A larger temperature difference drives more heat transfer, but effectiveness is a better measure of how efficiently the exchanger utilizes this difference.
*   **Fouling:** Accumulation of deposits on heat transfer surfaces acts as an insulating layer, reducing the overall heat transfer coefficient and hence performance. This is a critical aspect in industrial applications.
*   **Baffle Spacing and Type:** Baffles are crucial for enhancing shell-side heat transfer. Their design affects turbulence, pressure drop, and flow patterns.
*   **Tube Arrangement and Pitch:** Affects fluid flow distribution and heat transfer surface area density.

---

## 7.7 Important Points to Remember

*   **Steady-State:** Ensure all readings are taken only after the system has reached a stable operating condition.
*   **Temperature Measurement Accuracy:** Use calibrated thermometers/thermocouples and ensure they are properly immersed in the fluid stream.
*   **Flow Rate Measurement:** Accurately measure flow rates, as they directly impact heat transfer calculations.
*   **Fluid Properties:** Use accurate specific heat values for the fluids at the operating temperature range.
*   **LMTD vs. Effectiveness:** Understand when to use LMTD (for direct calculation) and effectiveness (for comparison and prediction).
*   **Counter-flow Advantage:** Counter-flow arrangements are generally more effective than parallel-flow for the same heat transfer area and flow rates.
*   **Fouling Impact:** Be aware that real-world performance is often degraded by fouling, which is not typically accounted for in basic lab experiments unless simulated.

---

## 7.8 Practice Questions and Exercises

**Question 1:**
A shell and tube heat exchanger is used to cool oil with water. The oil enters at 150°C and leaves at 80°C. The water enters at 20°C and leaves at 50°C.
If the mass flow rate of oil is 2 kg/s and its specific heat capacity is 2100 J/kg·K, calculate:
(a) The rate of heat transfer ($Q$).
(b) The mass flow rate of water if its specific heat capacity is 4180 J/kg·K.
(c) The effectiveness of the heat exchanger.
(d) If the heat transfer area is 15 m² and the flow arrangement is counter-flow, calculate the LMTD and the overall heat transfer coefficient (U). Assume $C_h = \dot{m}_h c_{p,h}$ and $C_c = \dot{m}_c c_{p,c}$.

**Answer 1:**
Given:
$T_{h,in} = 150^\circ C$, $T_{h,out} = 80^\circ C$
$T_{c,in} = 20^\circ C$, $T_{c,out} = 50^\circ C$
$\dot{m}_h = 2 \, kg/s$
$c_{p,h} = 2100 \, J/kg \cdot K$
$c_{p,c} = 4180 \, J/kg \cdot K$
$A = 15 \, m^2$

(a) **Rate of Heat Transfer (Q):**
$Q = Q_h = \dot{m}_h \cdot c_{p,h} \cdot (T_{h,in} - T_{h,out})$
$Q = 2 \, kg/s \cdot 2100 \, J/kg \cdot K \cdot (150^\circ C - 80^\circ C)$
$Q = 2 \cdot 2100 \cdot 70 = 294,000 \, W = 294 \, kW$

(b) **Mass flow rate of water ($\dot{m}_c$):**
Assuming no heat loss to surroundings, $Q_c = Q_h = Q$.
$Q_c = \dot{m}_c \cdot c_{p,c} \cdot (T_{c,out} - T_{c,in})$
$294,000 \, W = \dot{m}_c \cdot 4180 \, J/kg \cdot K \cdot (50^\circ C - 20^\circ C)$
$294,000 = \dot{m}_c \cdot 4180 \cdot 30$
$\dot{m}_c = \frac{294,000}{4180 \cdot 30} \approx 2.34 \, kg/s$

(c) **Effectiveness ($\epsilon$):**
$C_h = \dot{m}_h \cdot c_{p,h} = 2 \, kg/s \cdot 2100 \, J/kg \cdot K = 4200 \, W/K$
$C_c = \dot{m}_c \cdot c_{p,c} = 2.34 \, kg/s \cdot 4180 \, J/kg \cdot K \approx 9790 \, W/K$
$C_{min} = C_h = 4200 \, W/K$
$C_{max} = C_c = 9790 \, W/K$
$Q_{max} = C_{min} \cdot (T_{h,in} - T_{c,in})$
$Q_{max} = 4200 \, W/K \cdot (150^\circ C - 20^\circ C)$
$Q_{max} = 4200 \cdot 130 = 546,000 \, W = 546 \, kW$
$\epsilon = \frac{Q}{Q_{max}} = \frac{294,000 \, W}{546,000 \, W} \approx 0.5385$ or 53.85%

(d) **LMTD and Overall Heat Transfer Coefficient (U):**
Assuming counter-flow:
$\Delta T_1 = T_{h,in} - T_{c,out} = 150^\circ C - 50^\circ C = 100^\circ C$
$\Delta T_2 = T_{h,out} - T_{c,in} = 80^\circ C - 20^\circ C = 60^\circ C$
$\Delta T_{lm, counter} = \frac{\Delta T_1 - \Delta T_2}{\ln \left( \frac{\Delta T_1}{\Delta T_2} \right)} = \frac{100 - 60}{\ln \left( \frac{100}{60} \right)} = \frac{40}{\ln(1.6667)} = \frac{40}{0.5108} \approx 78.31^\circ C$
$U = \frac{Q}{A \cdot \Delta T_{lm}} = \frac{294,000 \, W}{15 \, m^2 \cdot 78.31 \, K} \approx 250.6 \, W/m^2 \cdot K$

---

**Question 2:**
Describe the advantages of using a counter-flow arrangement over a parallel-flow arrangement in a heat exchanger, referring to the concept of LMTD and effectiveness.

**Answer 2:**
In a counter-flow arrangement, the hot and cold fluids flow in opposite directions. This maintains a larger average temperature difference between the fluids along the entire length of the heat exchanger compared to a parallel-flow arrangement where the fluids flow in the same direction.

*   **LMTD:** The LMTD for a counter-flow heat exchanger is generally higher than that for a parallel-flow heat exchanger for the same inlet and outlet temperatures. Since $Q = U \cdot A \cdot \Delta T_{lm}$, a higher $\Delta T_{lm}$ means that for a given overall heat transfer coefficient ($U$) and heat transfer area ($A$), a higher heat transfer rate ($Q$) can be achieved. Alternatively, for the same heat transfer rate, a smaller heat transfer area ($A$) or a lower overall heat transfer coefficient ($U$) is required.

*   **Effectiveness:** Effectiveness ($\epsilon$) is the ratio of the actual heat transfer to the maximum possible heat transfer. In counter-flow, the temperature difference between the fluids is maintained more uniformly, allowing the cold fluid to be heated closer to the hot fluid's inlet temperature and the hot fluid to be cooled closer to the cold fluid's inlet temperature. This leads to a higher possible heat transfer, and thus a higher effectiveness for a given set of conditions and a given $C_{min}$. This also means that a counter-flow heat exchanger can achieve a higher approach temperature (difference between hot fluid outlet and cold fluid inlet, or cold fluid outlet and hot fluid inlet) than a parallel-flow exchanger for the same heat duty.

In summary, counter-flow offers superior thermal performance, leading to higher efficiency and potentially smaller, more cost-effective heat exchanger designs for a given task.

---

This comprehensive set of notes provides a strong foundation for understanding and performing performance studies on shell and tube heat exchangers in your Thermal Engineering Lab-1. Remember to consult your specific lab manual for any variations in procedure or apparatus.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
