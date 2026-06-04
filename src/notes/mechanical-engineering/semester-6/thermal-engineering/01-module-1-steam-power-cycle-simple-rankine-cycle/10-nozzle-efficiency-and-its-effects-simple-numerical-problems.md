---
title: "nozzle
efficiency and its effects - Simple numerical problems"
subject: "THERMAL ENGINEERING"
module: "Module 1: Steam Power Cycle : Simple Rankine cycle"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463988"
status: "completed"
scrapedAt: "2026-05-20T18:08:37.039Z"
---
## Thermal Engineering: Module 1 - Steam Power Cycle: Simple Rankine Cycle

### Topic: Nozzle Efficiency and its Effects - Simple Numerical Problems

This topic focuses on the crucial role of nozzles in steam power cycles, particularly in converting the thermal energy of steam into kinetic energy. We will explore the concept of nozzle efficiency and how it impacts the overall performance of the cycle, illustrated with simple numerical problems.

**Alignment with Course Outcomes:**

*   **CO1 (K4):** Understanding the energy conversion process in nozzles directly relates to applying thermodynamic principles to analyze steam power cycles.
*   **CO2 (K3):** Nozzles are integral components of steam turbines, and their efficiency directly affects turbine performance and methods to improve it.

---

### 1. Introduction to Nozzles in Steam Power Cycles

**1.1 Purpose of a Nozzle:**

*   A nozzle is a **thermodynamic device** that converts the **pressure and thermal energy** of a fluid into **kinetic energy** by accelerating the fluid.
*   In a steam power cycle, nozzles are used in **steam turbines** to increase the velocity of steam before it impinges on the turbine blades. This high-velocity steam then performs work on the rotating blades.

**1.2 Working Principle:**

*   The process within a nozzle is primarily an **isentropic expansion**, meaning it's assumed to be adiabatic (no heat transfer) and reversible.
*   As the steam expands from a higher pressure to a lower pressure, its enthalpy decreases, and this enthalpy drop is converted into an increase in kinetic energy.
*   The cross-sectional area of the nozzle changes to maintain a continuous flow of the expanding steam.

**1.3 Types of Nozzles:**

*   **Convergent Nozzle:** The area of flow decreases in the direction of flow. Primarily used for subsonic flow.
*   **Divergent Nozzle:** The area of flow increases in the direction of flow. Primarily used for supersonic flow.
*   **Convergent-Divergent (C-D) Nozzle:** Consists of a convergent section followed by a divergent section. This type is crucial for achieving supersonic velocities, which are common in steam turbine applications. The **throat**, the point of minimum area, marks the transition from subsonic to sonic velocity, and then supersonic flow occurs in the divergent section.

---

### 2. Ideal vs. Actual Nozzle Performance

**2.1 Ideal Nozzle:**

*   In an **ideal nozzle**, the expansion process is assumed to be **isentropic** (reversible adiabatic).
*   The entire enthalpy drop of the steam during expansion is converted into kinetic energy.
*   The exit velocity ($V_{exit}$) can be calculated using the following relation:

    $V_{exit} = \sqrt{2(h_{in} - h_{out, ideal})}$

    Where:
    *   $h_{in}$ is the specific enthalpy of steam at the inlet.
    *   $h_{out, ideal}$ is the specific enthalpy of steam at the outlet if the expansion were isentropic.

**2.2 Actual Nozzle:**

*   In reality, nozzle expansion processes are **irreversible** due to friction and turbulence.
*   These irreversibilities cause a loss of useful energy, meaning the actual exit velocity is lower than the ideal exit velocity.
*   The actual expansion is not perfectly isentropic; it follows a **polytropic process** with an exponent 'n' (typically > 1.3 for steam).

---

### 3. Nozzle Efficiency

**3.1 Definition:**

*   Nozzle efficiency ($\eta_{nozzle}$) is defined as the ratio of the actual kinetic energy gained by the steam to the ideal kinetic energy that could be gained if the expansion were isentropic.

    $\eta_{nozzle} = \frac{\text{Actual Kinetic Energy Gain}}{\text{Ideal Kinetic Energy Gain}}$

    $\eta_{nozzle} = \frac{\frac{1}{2} V_{actual}^2}{\frac{1}{2} V_{ideal}^2} = \frac{V_{actual}^2}{V_{ideal}^2}$

*   This can also be expressed in terms of enthalpy drop:

    $\eta_{nozzle} = \frac{h_{in} - h_{out, actual}}{h_{in} - h_{out, ideal}}$

    Where:
    *   $h_{in}$ is the specific enthalpy of steam at the inlet.
    *   $h_{out, actual}$ is the actual specific enthalpy of steam at the outlet after irreversible expansion.
    *   $h_{out, ideal}$ is the specific enthalpy of steam at the outlet if the expansion were isentropic.

**3.2 Effect of Nozzle Efficiency:**

*   **Reduced Exit Velocity:** Lower nozzle efficiency means lower actual exit velocity of steam.
*   **Lower Work Output:** A lower exit velocity leads to less impulse on the turbine blades, resulting in reduced work output from the turbine.
*   **Increased Steam Velocity at Exit:** Due to irreversibilities, the actual final enthalpy ($h_{out, actual}$) will be higher than the ideal final enthalpy ($h_{out, ideal}$). This means less thermal energy is converted into kinetic energy.
*   **Impact on Overall Cycle Efficiency:** While nozzle efficiency is a component of turbine efficiency, lower nozzle efficiency directly reduces the efficiency of the steam turbine, thereby impacting the overall thermal efficiency of the Rankine cycle.

---

### 4. Calculating Actual Exit Velocity and Enthalpy

**4.1 Calculating Actual Exit Velocity:**

*   From the definition of nozzle efficiency: $V_{actual}^2 = \eta_{nozzle} \times V_{ideal}^2$
*   Therefore, $V_{actual} = \sqrt{\eta_{nozzle}} \times V_{ideal}$
*   Substituting the expression for $V_{ideal}$:

    $V_{actual} = \sqrt{\eta_{nozzle} \times 2(h_{in} - h_{out, ideal})}$

**4.2 Calculating Actual Exit Enthalpy ($h_{out, actual}$):**

*   We know that the actual kinetic energy gain is $\eta_{nozzle}$ times the ideal kinetic energy gain:
    $\frac{1}{2} V_{actual}^2 = \eta_{nozzle} (h_{in} - h_{out, ideal})$
*   We also know that the actual kinetic energy gain is $h_{in} - h_{out, actual}$:
    $h_{in} - h_{out, actual} = \eta_{nozzle} (h_{in} - h_{out, ideal})$
*   Rearranging to find $h_{out, actual}$:

    $h_{out, actual} = h_{in} - \eta_{nozzle} (h_{in} - h_{out, ideal})$

**4.3 Important Note on Steam Tables:**

*   When calculating $h_{out, ideal}$, you determine the pressure at the nozzle exit and then use steam tables to find the enthalpy corresponding to that pressure assuming isentropic expansion (i.e., $s_{out, ideal} = s_{in}$).
*   When calculating $h_{out, actual}$, you use the nozzle efficiency to find the actual enthalpy drop, which then allows you to determine $h_{out, actual}$. Note that $h_{out, actual}$ will be greater than $h_{out, ideal}$.

---

### 5. Simple Numerical Problems

**Example 1: Calculating Ideal and Actual Velocities**

**Problem:** Steam at a pressure of 10 bar and a temperature of 300°C enters a nozzle. The steam expands isentropically to a pressure of 2 bar. Calculate the ideal velocity of the steam at the nozzle exit. If the actual exit velocity is 80% of the ideal velocity, calculate the nozzle efficiency and the actual exit velocity.

**Solution:**

1.  **Determine Inlet Conditions:**
    *   From steam tables at 10 bar and 300°C:
        *   $h_{in} = 3051.6 \, \text{kJ/kg}$
        *   $s_{in} = 7.1229 \, \text{kJ/kg.K}$

2.  **Determine Ideal Exit Enthalpy ($h_{out, ideal}$):**
    *   At the exit pressure of 2 bar, assume isentropic expansion, so $s_{out, ideal} = s_{in} = 7.1229 \, \text{kJ/kg.K}$.
    *   From steam tables at 2 bar, find the enthalpy corresponding to this entropy.
        *   At 2 bar, $s_f = 1.5303 \, \text{kJ/kg.K}$ and $s_g = 7.1271 \, \text{kJ/kg.K}$.
        *   Since $s_{in} = 7.1229 \, \text{kJ/kg.K}$ is very close to $s_g$ at 2 bar, the steam at the exit is *almost dry saturated*.
        *   We can approximate $h_{out, ideal} \approx h_g$ at 2 bar.
        *   From steam tables at 2 bar: $h_g = 2706.7 \, \text{kJ/kg}$.
        *   Therefore, $h_{out, ideal} \approx 2706.7 \, \text{kJ/kg}$.

3.  **Calculate Ideal Exit Velocity ($V_{ideal}$):**
    *   $V_{ideal} = \sqrt{2(h_{in} - h_{out, ideal})}$
    *   $V_{ideal} = \sqrt{2 \times (3051.6 - 2706.7) \times 1000 \, \text{J/kg}}$  (Multiply by 1000 to convert kJ to J)
    *   $V_{ideal} = \sqrt{2 \times 344.9 \times 1000} = \sqrt{689800} \approx 830.5 \, \text{m/s}$

4.  **Calculate Actual Exit Velocity ($V_{actual}$):**
    *   Given $V_{actual} = 0.80 \times V_{ideal}$
    *   $V_{actual} = 0.80 \times 830.5 \approx 664.4 \, \text{m/s}$

5.  **Calculate Nozzle Efficiency ($\eta_{nozzle}$):**
    *   $\eta_{nozzle} = \frac{V_{actual}^2}{V_{ideal}^2} = \left(\frac{V_{actual}}{V_{ideal}}\right)^2 = (0.80)^2 = 0.64$
    *   Therefore, $\eta_{nozzle} = 64\%$

**Answer:**
*   Ideal exit velocity = 830.5 m/s
*   Nozzle efficiency = 64%
*   Actual exit velocity = 664.4 m/s

---

**Example 2: Calculating Actual Enthalpy and Nozzle Efficiency**

**Problem:** Superheated steam at 15 bar, 250°C enters a nozzle. The enthalpy at the nozzle exit is 2740 kJ/kg, and the exit pressure is 3 bar. The isentropic expansion to 3 bar would result in an enthalpy of 2600 kJ/kg. Calculate the nozzle efficiency.

**Solution:**

1.  **Determine Inlet Enthalpy:**
    *   From steam tables at 15 bar and 250°C:
        *   $h_{in} = 2942.7 \, \text{kJ/kg}$

2.  **Given Actual Exit Enthalpy:**
    *   $h_{out, actual} = 2740 \, \text{kJ/kg}$

3.  **Given Ideal Exit Enthalpy:**
    *   $h_{out, ideal} = 2600 \, \text{kJ/kg}$

4.  **Calculate Nozzle Efficiency ($\eta_{nozzle}$):**
    *   $\eta_{nozzle} = \frac{h_{in} - h_{out, actual}}{h_{in} - h_{out, ideal}}$
    *   $\eta_{nozzle} = \frac{2942.7 - 2740}{2942.7 - 2600}$
    *   $\eta_{nozzle} = \frac{202.7}{342.7} \approx 0.5915$
    *   Therefore, $\eta_{nozzle} = 59.15\%$

**Answer:**
*   Nozzle efficiency = 59.15%

---

**Example 3: Determining Exit Pressure for a C-D Nozzle (More Advanced concept, but good for understanding the interplay)**

**Problem:** Steam at 40 bar and 400°C enters a nozzle with an initial velocity of 50 m/s. The steam expands to 10 bar. If the nozzle efficiency is 80%, determine the actual exit velocity. (Assume isentropic expansion to 10 bar results in an enthalpy drop that leads to a specific ideal exit velocity).

*   **Note:** This problem requires using steam tables and interpolation for isentropic expansion. The calculation for ideal exit velocity is similar to Example 1. The key is to correctly find $h_{in}$ and $h_{out, ideal}$ using steam tables.

**Steps:**

1.  Find $h_{in}$ and $s_{in}$ at 40 bar and 400°C from steam tables.
2.  Find $h_{out, ideal}$ at 10 bar where $s_{out, ideal} = s_{in}$. This will likely involve interpolation.
3.  Calculate $V_{ideal}$ using $V_{ideal} = \sqrt{2(h_{in} - h_{out, ideal}) \times 1000 + V_{in}^2}$. (In many simple problems, $V_{in}$ is assumed negligible).
4.  Calculate $V_{actual} = \sqrt{\eta_{nozzle} \times (2(h_{in} - h_{out, ideal}) \times 1000 + V_{in}^2)}$.
    *   Or, using the enthalpy-based efficiency: Calculate $h_{out, actual} = h_{in} - \eta_{nozzle} (h_{in} - h_{out, ideal})$. Then calculate $V_{actual} = \sqrt{2(h_{in} - h_{out, actual}) \times 1000 + V_{in}^2}$.

---

### 6. Key Concepts and Definitions to Remember

*   **Nozzle:** Device for converting thermal energy into kinetic energy.
*   **Isentropic Expansion:** Ideal expansion process (adiabatic and reversible).
*   **Actual Expansion:** Real expansion process, irreversible due to friction.
*   **Enthalpy Drop:** The decrease in specific enthalpy of the fluid during expansion.
*   **Kinetic Energy Gain:** The increase in kinetic energy of the fluid due to acceleration.
*   **Nozzle Efficiency ($\eta_{nozzle}$):** Ratio of actual KE gain to ideal KE gain, or ratio of actual enthalpy drop to ideal enthalpy drop.
*   **Convergent-Divergent (C-D) Nozzle:** Essential for supersonic flow, used in turbines.
*   **Effect of Efficiency:** Lower efficiency means lower exit velocity, reduced work output, and higher exit enthalpy.

---

### 7. Practice Questions

1.  Steam at 10 bar, 250°C enters a nozzle with negligible velocity. It expands to 1 bar. The nozzle efficiency is 85%. If the isentropic enthalpy drop is 300 kJ/kg, calculate:
    *   The ideal exit velocity.
    *   The actual exit velocity.
    *   The nozzle efficiency (verify with the given value).
    *   The actual enthalpy at the exit.

    **Answer:**
    *   Ideal Exit Velocity: $\sqrt{2 \times 300 \times 1000} = 774.6 \, \text{m/s}$
    *   Nozzle Efficiency: Given as 85% or 0.85
    *   Actual Exit Velocity: $\sqrt{0.85} \times 774.6 = 716.7 \, \text{m/s}$
    *   Actual Enthalpy at Exit: $h_{in} - 0.85 \times 300 = h_{in} - 255 \, \text{kJ/kg}$ (Need $h_{in}$ from steam tables at 10 bar, 250°C, which is $2942.7 \, \text{kJ/kg}$). So, $2942.7 - 255 = 2687.7 \, \text{kJ/kg}$.

2.  In a steam nozzle, the inlet conditions are 40 bar and 400°C. The exit pressure is 5 bar. The isentropic expansion to 5 bar results in an enthalpy of 2900 kJ/kg. The actual exit enthalpy is 2950 kJ/kg. Calculate the nozzle efficiency.

    **Answer:**
    *   From steam tables at 40 bar, 400°C: $h_{in} = 3213.6 \, \text{kJ/kg}$
    *   $h_{out, ideal} = 2900 \, \text{kJ/kg}$
    *   $h_{out, actual} = 2950 \, \text{kJ/kg}$
    *   $\eta_{nozzle} = \frac{3213.6 - 2950}{3213.6 - 2900} = \frac{263.6}{313.6} \approx 0.8405$ or 84.05%

---

### 8. Important Points to Remember

*   **Friction is the main cause of irreversibility in nozzles.**
*   **Nozzle efficiency is always less than 1 (or 100%).**
*   **The actual exit enthalpy is always greater than the ideal exit enthalpy.**
*   **The actual exit velocity is always less than the ideal exit velocity.**
*   **Accurate use of steam tables is crucial for solving these problems.** Pay attention to whether the steam is superheated, saturated, or wet.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 9. References

*   **Thermal Engineering by Rudra Moorthy (McGraw Hill Education India, 2003):** Provides detailed explanations of steam turbines and nozzles, including their working principles and efficiency calculations.
*   **Thermal Engineering by R.K Rajput (Laxmi Publications, 2010):** Offers a comprehensive treatment of thermodynamic cycles and machinery, with ample solved examples on nozzles and turbines.

These notes aim to provide a foundational understanding of nozzle efficiency within the context of the simple Rankine cycle, aligning with the specified course outcomes. Remember to practice with steam tables to solidify your understanding.