---
title: "Steam nozzles"
subject: "POWER PLANT ENGINEERING"
module: "Module 2: Steam generator classifications"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463783"
status: "completed"
scrapedAt: "2026-05-20T18:06:26.511Z"
---
# Power Plant Engineering: Module 2 - Steam Generator Classifications
## Topic: Steam Nozzles

---

### **Introduction to Steam Nozzles**

Steam nozzles are essential components in steam power plants, particularly in steam turbines. Their primary function is to convert the thermal energy of high-pressure, high-temperature steam into kinetic energy, producing a high-velocity steam jet. This high-velocity jet is then directed onto the turbine blades, causing them to rotate and generate mechanical power.

**Key Concept:** The operation of steam nozzles relies on the principles of thermodynamics and fluid mechanics, specifically the expansion of a fluid through a converging or diverging passage.

---

### **1. Purpose and Function of Steam Nozzles**

*   **Energy Conversion:** To convert the internal thermal energy of steam into kinetic energy.
*   **Velocity Generation:** To accelerate steam to high velocities required for turbine operation.
*   **Direction Control:** To direct the high-velocity steam jet precisely onto the turbine blades.

**Relevant to CO3:** Understanding the function of nozzles is crucial for calculating their performance parameters, which is a direct requirement of CO3.

---

### **2. Types of Steam Nozzles**

Steam nozzles are primarily classified based on their shape and the flow regime of the steam:

#### **2.1. Convergent Nozzles**

*   **Shape:** Gradually decreasing cross-sectional area in the direction of flow.
*   **Function:** Used for subsonic flow or for achieving maximum velocity at the exit when the pressure ratio across the nozzle is below a critical value.
*   **Flow Behavior:**
    *   As steam expands, its velocity increases, and its pressure and temperature decrease.
    *   The maximum velocity achieved in a convergent nozzle is sonic velocity (Mach number = 1) at the throat (minimum area).
*   **Application:** Primarily used in low-pressure stages of turbines or when the back pressure is relatively high.

#### **2.2. Convergent-Divergent (C-D) Nozzles (De Laval Nozzles)**

*   **Shape:** Consists of a convergent section followed by a divergent section.
*   **Function:** Designed to accelerate steam to supersonic velocities. This is achieved by expanding the steam beyond the sonic velocity.
*   **Flow Behavior:**
    *   **Convergent Section:** Accelerates subsonic flow to sonic velocity (Mach 1) at the throat.
    *   **Divergent Section:** Further expands the now supersonic flow, causing a significant increase in velocity and a drop in pressure and temperature.
*   **Critical Pressure Ratio:** For supersonic flow to occur in a C-D nozzle, the pressure ratio (inlet pressure to outlet pressure) must exceed a critical value, known as the critical pressure ratio ($P_c/P_0$).
    *   **$P_0$**: Stagnation pressure (inlet pressure before expansion).
    *   **$P_c$**: Critical pressure at the throat.
    *   For steam, the critical pressure ratio is approximately 0.528 (for a perfect gas with $\gamma = 1.3$).
*   **Application:** Essential for most high-pressure and intermediate-pressure stages of steam turbines to achieve maximum efficiency.

**Important Point to Remember:** The throat of a C-D nozzle is the point of minimum area and sonic velocity (Mach 1). The divergent section is only effective for expansion beyond sonic velocity.

---

### **3. Flow of Steam Through Nozzles**

The expansion of steam through a nozzle is an adiabatic process (assuming no heat transfer) and can be considered reversible (isentropic) for ideal flow.

#### **3.1. Isentropic Expansion**

*   **Definition:** An adiabatic process where entropy remains constant.
*   **Process:** In an ideal nozzle, steam expands isentropically, converting internal energy into kinetic energy.
*   **Relationship:** For a perfect gas, the expansion follows $Pv^{\gamma} = constant$. For steam, the expansion is more complex and often approximated by $Pv^n = constant$, where 'n' is the isentropic exponent for steam (typically around 1.3).

#### **3.2. Velocity of Steam in Nozzles**

The velocity of steam at any point in the nozzle can be calculated using the energy equation:

**$C^2/2 + h = h_0$**

Where:
*   $C$ is the velocity of steam.
*   $h$ is the specific enthalpy of steam at the point of interest.
*   $h_0$ is the stagnation enthalpy of steam at the inlet (where velocity is negligible).

Rearranging for velocity:

**$C = \sqrt{2(h_0 - h)}$**

This equation highlights that the increase in kinetic energy ($C^2/2$) is equal to the decrease in specific enthalpy ($h_0 - h$).

#### **3.3. Mach Number**

*   **Definition:** The ratio of the local velocity of the fluid to the local velocity of sound.
*   **Formula:** $M = C/a$
    *   $C$: Local velocity of steam.
    *   $a$: Local velocity of sound in the steam.
*   **Velocity of Sound in Steam:** $a = \sqrt{\gamma RT}$
    *   $\gamma$: Isentropic exponent for steam.
    *   $R$: Specific gas constant for steam.
    *   $T$: Absolute temperature of steam.

**Relevant to CO3:** This section directly deals with calculating performance parameters (velocity) of steam nozzles.

---

### **4. Condensation in Nozzles**

As steam expands and its temperature drops, it can reach its saturation temperature. Further expansion can lead to condensation.

*   **Supersaturated Steam:** Upon expansion below the saturation temperature without condensation, steam becomes supersaturated. This is a metastable state.
*   **Wilson Line:** The locus of points where condensation begins as supersaturated steam expands.
*   **Effect of Condensation:**
    *   **Loss of Kinetic Energy:** The process of condensation releases latent heat, which can reduce the overall kinetic energy gained by the steam.
    *   **Erosion:** The formation of small water droplets can lead to erosion of nozzle and turbine blade surfaces.
    *   **Efficiency Loss:** Incomplete expansion due to condensation before reaching the turbine blades reduces the efficiency of the turbine.

**Important Point to Remember:** For optimal nozzle performance and turbine efficiency, it is desirable to have the steam slightly superheated at the exit or to ensure that condensation begins as late as possible in the expansion process.

---

### **5. Critical Pressure Ratio and Throat Velocity**

For a convergent-divergent nozzle, the maximum flow rate occurs when the velocity at the throat reaches sonic velocity (Mach 1).

*   **Throat Velocity ($C_c$):** The velocity of steam at the throat.
    *   $C_c = \sqrt{2 \frac{\gamma}{\gamma+1} h_0 (1 - (\frac{P_c}{P_0})^{\frac{\gamma-1}{\gamma}})}$
    *   At the throat, $M=1$, so $C_c = a_c = \sqrt{\gamma R T_c}$.
*   **Critical Pressure Ratio ($P_c/P_0$):** The ratio of pressure at the throat to the inlet stagnation pressure at which sonic velocity is achieved.
    *   For isentropic expansion, the critical pressure ratio can be derived from the isentropic relations:
        $\frac{P_c}{P_0} = \left(\frac{2}{\gamma+1}\right)^{\frac{\gamma}{\gamma-1}}$
    *   For steam, using an approximate value of $\gamma \approx 1.3$:
        $\frac{P_c}{P_0} \approx \left(\frac{2}{1.3+1}\right)^{\frac{1.3}{1.3-1}} = \left(\frac{2}{2.3}\right)^{\frac{1.3}{0.3}} \approx (0.8696)^{4.33} \approx 0.528$

**Important Point to Remember:** If the back pressure ($P_b$) is greater than the critical pressure ($P_c$), the nozzle will be "choked," and the flow at the throat will be sonic. The flow rate will be maximum and independent of further reductions in back pressure. If $P_b \le P_c$, the nozzle will be "unchoked," and the flow in the divergent section will continue to accelerate to supersonic velocities if $P_b < P_c$.

---

### **6. Mass Flow Rate Through Nozzles**

The mass flow rate ($\dot{m}$) through a nozzle is a critical parameter for sizing and performance evaluation.

*   **Formula:** $\dot{m} = \rho \cdot A \cdot C$
    *   $\rho$: Density of steam.
    *   $A$: Cross-sectional area of the nozzle.
    *   $C$: Velocity of steam.
*   **For Choked Flow (Throat):**
    $\dot{m}_{max} = \rho_c \cdot A_c \cdot C_c$
    This can also be expressed in terms of inlet conditions and throat area:
    $\dot{m}_{max} = A_c \sqrt{\frac{\gamma \rho_0 P_0}{2} \left(\frac{2}{\gamma+1}\right)^{\frac{\gamma+1}{\gamma-1}}}$

**Derivation Outline (for reference, often found in textbooks like El Wakil):**
The derivation involves combining the continuity equation ($\dot{m} = \rho AC$) with the isentropic relations ($P \rho^{-\gamma} = constant$, $T P^{-(\gamma-1)/\gamma} = constant$) and the energy equation to arrive at the mass flow rate expression as a function of the throat area and inlet stagnation conditions.

**Relevant to CO3:** Calculating mass flow rate is directly related to nozzle performance.

---

### **7. Performance Parameters of Steam Nozzles**

*   **Velocity Coefficient ($v_c$):** Accounts for the reduction in exit velocity due to friction and other irreversible losses.
    $C_{actual} = v_c \cdot C_{isentropic}$
    Typically, $v_c < 1$ (e.g., 0.95-0.98).
*   **Coefficient of Discharge ($C_d$):** Accounts for flow rate reduction due to friction and flow separation.
    $\dot{m}_{actual} = C_d \cdot \dot{m}_{isentropic}$
    Typically, $C_d < 1$.
*   **Isentropic Efficiency ($\eta_{nozzle}$):** Represents the ratio of actual kinetic energy gained to the ideal kinetic energy that could be gained if the expansion were isentropic.
    $\eta_{nozzle} = \frac{C_{actual}^2 / 2}{h_0 - h_{exit, isentropic}} = \frac{(v_c C_{isentropic})^2 / 2}{h_0 - h_{exit, isentropic}} = v_c^2$

**Important Point to Remember:** Real nozzles have losses, so actual velocity and mass flow rate are less than their isentropic counterparts. Velocity coefficient and coefficient of discharge are used to account for these losses.

---

### **8. Design Considerations for Steam Nozzles**

*   **Throat Area:** Determines the maximum mass flow rate.
*   **Angle of Divergence:** Affects the efficiency of expansion in the supersonic section. An optimal angle minimizes shock losses and friction.
*   **Surface Finish:** Smooth surfaces reduce friction.
*   **Material:** Must withstand high temperatures, pressures, and erosive effects of steam.
*   **Back Pressure:** The nozzle design must be matched to the expected back pressure for efficient operation.

**Relevant to CO1:** Understanding nozzle design is part of understanding the components of a steam turbine, which is a key component of a steam power plant.

---

### **9. Practice Questions and Exercises**

**Question 1:** A steam nozzle expands steam from 40 bar, 400°C to 1 bar. Assuming isentropic expansion, determine the exit velocity of the steam. (Use steam tables or Mollier chart for enthalpy values).

**Solution Approach:**
1.  Find the stagnation enthalpy ($h_0$) at the inlet conditions (40 bar, 400°C) from steam tables.
2.  Find the enthalpy ($h_f$) at the exit condition (1 bar) assuming isentropic expansion (constant entropy).
3.  Calculate the exit velocity using $C = \sqrt{2(h_0 - h_f)}$.

**Answer:** (Requires consulting steam tables. Let's assume for illustration: $h_0 = 3214 \, kJ/kg$ and $h_f = 2675 \, kJ/kg$ at 1 bar after isentropic expansion).
$C = \sqrt{2 \times (3214 - 2675) \times 1000} \, m/s$
$C = \sqrt{2 \times 539 \times 1000} \, m/s = \sqrt{1078000} \, m/s \approx 1038 \, m/s$.

**Question 2:** Calculate the critical pressure ratio for steam assuming it behaves as a perfect gas with $\gamma = 1.3$.

**Solution:**
Using the formula: $\frac{P_c}{P_0} = \left(\frac{2}{\gamma+1}\right)^{\frac{\gamma}{\gamma-1}}$
$\frac{P_c}{P_0} = \left(\frac{2}{1.3+1}\right)^{\frac{1.3}{1.3-1}} = \left(\frac{2}{2.3}\right)^{\frac{1.3}{0.3}} = (0.8696)^{4.333} \approx 0.528$

**Answer:** The critical pressure ratio is approximately 0.528.

**Question 3:** If the actual exit velocity from the nozzle in Question 1 is 980 m/s, calculate the velocity coefficient and the isentropic efficiency of the nozzle.

**Solution Approach:**
1.  **Velocity Coefficient ($v_c$):** $v_c = C_{actual} / C_{isentropic}$
2.  **Isentropic Efficiency ($\eta_{nozzle}$):** $\eta_{nozzle} = v_c^2$

**Answer:**
$v_c = 980 \, m/s / 1038 \, m/s \approx 0.944$
$\eta_{nozzle} = (0.944)^2 \approx 0.891$ or 89.1%

---

### **10. Important Points to Remember**

*   **Nozzles convert thermal energy to kinetic energy.**
*   **Convergent nozzles:** For subsonic flow or critical pressure ratio not met.
*   **Convergent-Divergent (C-D) nozzles:** For supersonic flow.
*   **Throat:** Minimum area, sonic velocity (Mach 1).
*   **Critical Pressure Ratio ($P_c/P_0 \approx 0.528$ for steam):** Determines if flow is choked and supersonic expansion occurs.
*   **Energy Equation:** $C = \sqrt{2(h_0 - h)}$ is fundamental.
*   **Isentropic Efficiency ($\eta_{nozzle} = v_c^2$):** Accounts for losses.
*   **Supersaturated steam and condensation:** Affect nozzle efficiency and can cause erosion.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### **11. References and Further Reading**

*   **Power Plant Technology by M. M. El Wakil:** Chapter on steam turbines will cover nozzle theory in detail, including derivations and advanced concepts. (Refer to sections on steam turbine components and nozzle design).
*   **Power Plant Engineering by P. K. Nag:** Provides a good overview of nozzle types, calculations, and their role in steam turbines. (Refer to chapters related to steam turbines and thermodynamic cycles).
*   **Power Plant Engineering by G. R. Nagpal, S. C. Sharma:** Offers practical insights and examples related to nozzle design and performance in power plants.
*   **Power Plant Engineering by Manoj Kumar Gupta:** Likely includes relevant formulas and design considerations for steam nozzles.

---

### **Alignment with Course Outcomes:**

*   **CO1 (Explain layout, components, working):** This topic covers the working principle and components (nozzle types) of a critical part of a steam power plant.
*   **CO2 (Calculate Rankine cycle parameters):** While not directly calculating Rankine cycle parameters, nozzle performance is intrinsically linked to the expansion process within the Rankine cycle.
*   **CO3 (Calculate steam turbine and nozzle parameters):** This entire topic is dedicated to understanding and calculating the performance parameters (velocity, mass flow rate, efficiency) of steam nozzles.
*   **CO4 (Energy storage systems):** Not directly covered by this topic.
*   **CO5 (Economics and pollution):** Efficient nozzle design contributes to overall plant efficiency, impacting economics. However, pollution is not a primary focus of this specific topic.

---