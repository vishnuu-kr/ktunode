---
title: "Effect of friction"
subject: "THERMAL ENGINEERING"
module: "Module 1: Steam Power Cycle : Simple Rankine cycle"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463987"
status: "completed"
scrapedAt: "2026-05-20T18:08:36.327Z"
---
# Thermal Engineering: Module 1 - Steam Power Cycle: Simple Rankine Cycle - Effect of Friction

## 1. Introduction to the Simple Rankine Cycle

The Simple Rankine cycle is the fundamental thermodynamic cycle that forms the basis of steam power plants. It describes the process of converting heat energy into mechanical work. The cycle consists of four main processes:

*   **1-2: Isentropic Compression:** Feedwater is compressed by a pump from condenser pressure to boiler pressure. (Ideal Process)
*   **2-3: Isobaric Heat Addition:** Water is heated and vaporized at constant pressure in the boiler to produce dry saturated steam. (Ideal Process)
*   **3-4: Isentropic Expansion:** High-pressure steam expands through a turbine, producing work and decreasing in pressure and temperature. (Ideal Process)
*   **4-1: Isobaric Heat Rejection:** Steam is condensed at constant pressure in the condenser, rejecting heat to a cooling medium. (Ideal Process)

**Key Concepts:**

*   **Working Fluid:** Water and steam.
*   **Heat Input:** Supplied in the boiler.
*   **Heat Output:** Rejected in the condenser.
*   **Work Output:** Produced by the turbine.
*   **Work Input:** Required by the pump.
*   **Thermal Efficiency ($\eta_{th}$):** The ratio of net work output to heat input.

**Reference:** *Thermal Engineering* by Rudra Moorthy (McGraw Hill Education India, 2003), Chapter 3: Steam Power Cycles.

---

## 2. The Impact of Friction on the Simple Rankine Cycle

In reality, the ideal Rankine cycle processes are not perfectly isentropic due to the presence of friction. Friction introduces irreversibilities, leading to a reduction in the work output and thermal efficiency of the cycle.

### 2.1 Friction in the Pump (Process 1-2)

*   **Ideal Process:** Isentropic compression of feedwater.
*   **Real Process:** Friction in the pump requires more work input to achieve the same pressure rise. The pump work input will be higher than the ideal isentropic pump work.
*   **Effect:** Increased pump work input ($W_{p, actual} > W_{p, ideal}$). This reduces the net work output of the cycle.

**Diagrammatic Representation (on a T-s diagram):**

The real compression process will be slightly off the isentropic line, moving to a higher specific entropy (state 2').

**Calculation:**

The actual pump work is related to the isentropic pump work by a pump efficiency ($\eta_p$):

$W_{p, actual} = \frac{W_{p, ideal}}{\eta_p}$

where $\eta_p < 1$.

**Reference:** *Thermal Engineering* by R.K Rajput (Laxmi publications, 2010), Chapter 10: Steam Turbines and Pumps.

### 2.2 Friction in the Turbine (Process 3-4)

*   **Ideal Process:** Isentropic expansion of steam through the turbine.
*   **Real Process:** Friction within the turbine (between steam and blades, and internal fluid friction) causes a loss of energy. This results in a lower work output from the turbine compared to the ideal case. The steam leaving the turbine will have higher enthalpy (lower specific work) and higher specific entropy.
*   **Effect:** Decreased turbine work output ($W_{t, actual} < W_{t, ideal}$). This significantly reduces the net work output and thermal efficiency.

**Diagrammatic Representation (on a T-s diagram):**

The real expansion process will deviate from the isentropic line, moving to a higher specific entropy (state 4'). The final enthalpy at the turbine outlet will be higher than in the ideal case.

**Calculation:**

The actual turbine work is related to the isentropic turbine work by a turbine efficiency ($\eta_t$):

$W_{t, actual} = \eta_t \times W_{t, ideal}$

where $\eta_t < 1$.

**Reference:** *Thermal Engineering* by Rudra Moorthy (McGraw Hill Education India, 2003), Chapter 3: Steam Power Cycles.

---

## 3. Effect of Friction on Overall Cycle Performance

Friction in both the pump and the turbine negatively impacts the overall performance of the Rankine cycle.

### 3.1 Net Work Output

The net work output of the cycle is the difference between the turbine work output and the pump work input:

*   **Ideal Net Work:** $W_{net, ideal} = W_{t, ideal} - W_{p, ideal}$
*   **Actual Net Work:** $W_{net, actual} = W_{t, actual} - W_{p, actual}$

Since both $W_{t, actual}$ and $W_{p, actual}$ deviate from their ideal values due to friction, the net work output will be lower in the actual cycle.

### 3.2 Thermal Efficiency

The thermal efficiency is defined as:

$\eta_{th} = \frac{W_{net}}{\text{Heat Input}}$

*   **Ideal Thermal Efficiency:** $\eta_{th, ideal} = \frac{W_{net, ideal}}{Q_{in, ideal}}$
*   **Actual Thermal Efficiency:** $\eta_{th, actual} = \frac{W_{net, actual}}{Q_{in, actual}}$

The heat input ($Q_{in}$) is generally considered to be the same in both ideal and actual cycles for a given boiler pressure and temperature. Therefore, the reduction in net work output due to friction directly leads to a lower actual thermal efficiency.

$\eta_{th, actual} = \frac{W_{t, actual} - W_{p, actual}}{Q_{in}}$

**Important Point:** Turbine inefficiencies generally have a more significant impact on the overall efficiency than pump inefficiencies because the magnitude of turbine work is much larger than pump work.

**Reference:** *Thermal Engineering* by Mahesh Rathore (McGraw Hill Education India, 2010), Chapter 4: Rankine Cycle.

---

## 4. Quantifying the Impact of Friction: Efficiencies

To analyze the effect of friction, we use:

*   **Pump Efficiency ($\eta_p$):** The ratio of ideal pump work to actual pump work.
    $\eta_p = \frac{W_{p, ideal}}{W_{p, actual}}$
*   **Turbine Efficiency ($\eta_t$):** The ratio of actual turbine work to ideal turbine work.
    $\eta_t = \frac{W_{t, actual}}{W_{t, ideal}}$

These efficiencies are typically less than 1 and are determined experimentally or through design considerations.

---

## 5. Practice Questions and Exercises

**Question 1:**

In a simple Rankine cycle, the turbine inlet pressure and temperature are 30 bar and 300°C, respectively. The condenser pressure is 0.1 bar. Assuming ideal processes, calculate the thermal efficiency of the cycle.

**(Answer will be provided after the next question for practice context)**

---

**Question 2:**

For the same Rankine cycle as in Question 1, if the pump efficiency is 80% and the turbine efficiency is 85%, calculate:
a) The actual pump work input.
b) The actual turbine work output.
c) The actual net work output.
d) The actual thermal efficiency of the cycle.

**Solution Approach:**

1.  **Identify States:** Use steam tables or thermodynamic property software to find the enthalpy and entropy values at each state for the ideal cycle.
    *   State 1: Saturated liquid at 0.1 bar.
    *   State 2 (ideal): Enthalpy corresponding to isentropic compression from 0.1 bar to 30 bar.
    *   State 3: Superheated steam at 30 bar and 300°C.
    *   State 4 (ideal): Enthalpy corresponding to isentropic expansion from State 3 to 0.1 bar.

2.  **Calculate Ideal Work:**
    *   $W_{p, ideal} = v_1 (P_2 - P_1)$
    *   $W_{t, ideal} = h_3 - h_{4, ideal}$

3.  **Calculate Actual Work:**
    *   $W_{p, actual} = \frac{W_{p, ideal}}{\eta_p}$
    *   $W_{t, actual} = \eta_t \times W_{t, ideal}$

4.  **Calculate Actual Net Work:**
    *   $W_{net, actual} = W_{t, actual} - W_{p, actual}$

5.  **Calculate Heat Input:**
    *   $Q_{in} = h_3 - h_{2, actual}$ (Note: $h_{2, actual}$ will be slightly higher than $h_{2, ideal}$ due to increased pump work). Alternatively, you can approximate $Q_{in} \approx h_3 - h_1$ for simplicity if $v_1(P_2-P_1)$ is small compared to $h_3 - h_1$.

6.  **Calculate Actual Thermal Efficiency:**
    *   $\eta_{th, actual} = \frac{W_{net, actual}}{Q_{in}}$

**Let's get the steam table values for this example (approximate values):**

*   State 1 (saturated liquid at 0.1 bar): $h_1 \approx 191.8 \text{ kJ/kg}$, $v_1 \approx 0.001043 \text{ m}^3/\text{kg}$
*   State 2 (ideal, isentropic compression to 30 bar): $h_{2, ideal} \approx 195.5 \text{ kJ/kg}$ (Pump work is very small)
*   State 3 (superheated at 30 bar, 300°C): $h_3 \approx 3052.2 \text{ kJ/kg}$, $s_3 \approx 6.743 \text{ kJ/kg K}$
*   State 4 (ideal, isentropic expansion to 0.1 bar): From steam tables, at 0.1 bar and $s_4 = s_3 = 6.743 \text{ kJ/kg K}$, we find it's a wet mixture. $h_{4, ideal} \approx 2350 \text{ kJ/kg}$.

**Now, let's solve:**

**Question 1 Answer (Ideal Cycle):**

*   $W_{p, ideal} = v_1 (P_2 - P_1) = 0.001043 \text{ m}^3/\text{kg} \times (30 \times 10^5 \text{ Pa} - 10000 \text{ Pa}) \approx 3.12 \text{ kJ/kg}$
*   $W_{t, ideal} = h_3 - h_{4, ideal} = 3052.2 - 2350 = 702.2 \text{ kJ/kg}$
*   $W_{net, ideal} = W_{t, ideal} - W_{p, ideal} = 702.2 - 3.12 = 699.08 \text{ kJ/kg}$
*   $Q_{in} = h_3 - h_1 = 3052.2 - 191.8 = 2860.4 \text{ kJ/kg}$
*   $\eta_{th, ideal} = \frac{699.08}{2860.4} \approx 0.2444 \text{ or } 24.44\%$

**Question 2 Answer (Actual Cycle):**

a) Actual pump work input:
$W_{p, actual} = \frac{W_{p, ideal}}{\eta_p} = \frac{3.12 \text{ kJ/kg}}{0.80} = 3.9 \text{ kJ/kg}$

b) Actual turbine work output:
$W_{t, actual} = \eta_t \times W_{t, ideal} = 0.85 \times 702.2 \text{ kJ/kg} = 596.87 \text{ kJ/kg}$

c) Actual net work output:
$W_{net, actual} = W_{t, actual} - W_{p, actual} = 596.87 - 3.9 = 592.97 \text{ kJ/kg}$

d) Actual thermal efficiency:
$Q_{in} \approx h_3 - h_1 = 2860.4 \text{ kJ/kg}$ (Approximation, actual $h_{2, actual} = h_1 + W_{p, actual} = 191.8 + 3.9 = 195.7 \text{ kJ/kg}$)
$\eta_{th, actual} = \frac{W_{net, actual}}{Q_{in}} = \frac{592.97}{2860.4} \approx 0.2073 \text{ or } 20.73\%$

---

## 6. Important Points to Remember

*   **Friction is an Irreversibility:** It always leads to a reduction in the performance of thermodynamic cycles.
*   **Turbine Efficiency:** Turbine efficiency ($\eta_t$) is crucial for the overall efficiency of the Rankine cycle. Losses due to friction in the turbine reduce the work output significantly.
*   **Pump Efficiency:** Pump efficiency ($\eta_p$) also affects the cycle efficiency, but its impact is generally smaller than turbine efficiency due to the lower magnitude of pump work.
*   **Actual vs. Ideal:** Always distinguish between ideal (isentropic) processes and actual processes when friction is considered.
*   **T-s Diagram:** The deviation of actual processes from isentropic lines on a T-s diagram visually represents the entropy generation due to friction. The actual expansion line moves to the right (higher entropy), and the actual compression line also moves to the right.

---

## 7. Alignment with Course Outcomes

*   **CO1 (K4): Apply the basic thermodynamic principles and analyse the operation of steam power cycles.** This topic directly involves applying the First and Second Laws of Thermodynamics to analyze the Rankine cycle and understand how real-world effects like friction alter its performance. Calculations of work and efficiency reinforce this.
*   **CO2 (K3): Analyse the performance of steam turbines and identify methods to improve their efficiency.** Understanding turbine efficiency due to friction is a core part of analyzing turbine performance. While direct methods to improve turbine efficiency (like blade design, reheating, regeneration) are not the focus of *this* specific topic, recognizing the *impact* of friction is the first step towards appreciating these methods.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


## 8. Further Reading/References

For a deeper understanding of friction and irreversibilities in thermodynamic cycles, you can refer to:

*   *Thermal Engineering* by Rudra Moorthy (McGraw Hill Education India, 2003), Chapters 3 and 4.
*   *Thermal Engineering* by R.K Rajput (Laxmi publications, 2010), Chapters 8 (Rankine Cycle) and 10 (Steam Turbines and Pumps).
*   *Thermal Engineering* by Mahesh Rathore (McGraw Hill Education India, 2010), Chapter 4: Rankine Cycle.

**Note:** While the provided textbooks include IC engines, the content relevant to the *effect of friction on the Rankine cycle* is primarily found in the sections dealing with steam power cycles and steam turbines. The IC engine books are not directly applicable to this specific topic.