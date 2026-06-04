---
title: "Ramjet"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 4: Jet propulsion – Cycles and analysis – Gas turbine engines"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463cc3"
status: "completed"
scrapedAt: "2026-05-20T18:14:12.223Z"
---
# GAS TURBINE AND JET PROPULSION

## Module 4: Jet Propulsion – Cycles and Analysis – Gas Turbine Engines

## Topic: Ramjet

---

### **1. Introduction to Ramjets**

**1.1 Definition:**
A ramjet is a type of air-breathing jet engine that uses the engine's forward motion to compress incoming air without a rotating compressor. It is the simplest form of jet engine.

**1.2 Principle of Operation:**
The fundamental principle of a ramjet is to convert the kinetic energy of the incoming air into thermal energy and then back into kinetic energy, which produces thrust. This is achieved through a series of thermodynamic processes within the engine.

**1.3 Key Advantages:**
*   **Simplicity:** No moving parts (compressor or turbine), leading to lower manufacturing costs and weight.
*   **High Speed Capability:** Particularly efficient at supersonic and hypersonic speeds.
*   **High Thrust-to-Weight Ratio:** Due to its simple and lightweight design.

**1.4 Key Disadvantages:**
*   **Requires High Forward Speed to Start:** Cannot produce thrust from a standstill. Needs to be accelerated to a minimum speed (typically Mach 0.4-0.5) by an external means (e.g., rocket booster, catapult).
*   **Low Efficiency at Low Speeds:** Inefficient at subsonic speeds due to poor compression.
*   **Limited Operational Envelope:** Primarily suited for high-speed flight.

**1.5 Applications:**
*   Supersonic and hypersonic missiles.
*   High-speed research aircraft.
*   Target drones.

**Important Point to Remember:** The ramjet is a "dynamic" compressor, meaning it relies on the forward speed of the vehicle to achieve compression.

---

### **2. Ramjet Cycle Analysis**

The ramjet cycle can be approximated by the **Brayton cycle**, but with modifications to account for the external compression from ram effect. The cycle consists of the following processes:

**2.1 Ingestion and Compression (Isentropic Diffuser):**
*   Incoming air enters the inlet at a high velocity ($V_1$).
*   The inlet acts as a diffuser, slowing down the air and increasing its static pressure and temperature.
*   Ideally, this process is considered **isentropic** (constant entropy).
*   The incoming air is compressed due to the ram effect, which is essentially a ram pressure rise.

    *   **Governing Equations:**
        *   From isentropic flow relations: $\frac{P_2}{P_1} = \left(1 + \frac{\gamma-1}{2}M_1^2\right)^{\frac{\gamma}{\gamma-1}}$
        *   $\frac{T_2}{T_1} = 1 + \frac{\gamma-1}{2}M_1^2$
        *   Where:
            *   $P_1, T_1$: Inlet static pressure and temperature.
            *   $P_2, T_2$: Stagnation pressure and temperature at the diffuser exit (before combustion).
            *   $M_1$: Flight Mach number.
            *   $\gamma$: Ratio of specific heats (approximately 1.4 for air).

**2.2 Combustion (Constant Pressure Heat Addition):**
*   Fuel is injected and burned in the combustion chamber.
*   Heat is added to the air at ideally **constant pressure**.
*   This significantly increases the temperature of the gas.
*   The process is **adiabatic** (no heat loss to the surroundings).

    *   **Governing Equations:**
        *   $T_3 = T_2 + \Delta T_{heat}$ (where $\Delta T_{heat}$ is the temperature rise due to heat addition)
        *   $P_3 = P_2$ (ideally)

**2.3 Expansion and Thrust Generation (Isentropic Nozzle):**
*   The hot, high-pressure gas from the combustion chamber expands through a nozzle.
*   The nozzle accelerates the gas to a very high velocity, generating thrust.
*   This process is ideally **isentropic**.

    *   **Governing Equations:**
        *   The exit velocity ($V_4$) is determined by the energy balance across the nozzle:
            $h_3 - h_4 = \frac{V_4^2 - V_3^2}{2}$
        *   For a nozzle with $V_3 \approx 0$, $V_4 = \sqrt{2(h_3 - h_4)}$
        *   In terms of temperature: $V_4 = \sqrt{2 c_p (T_3 - T_4)}$
        *   $T_4$ is determined by the isentropic expansion from $P_3$ to $P_4$ (ambient pressure):
            $\frac{T_4}{T_3} = \left(\frac{P_4}{P_3}\right)^{\frac{\gamma-1}{\gamma}}$

**2.4 Thrust Calculation:**
The net thrust ($F_{net}$) is the difference between the momentum of the exiting exhaust gases and the momentum of the incoming air, corrected for pressure differences.

*   **Thrust Equation:** $F_{net} = \dot{m}_a (V_4 - V_1) + (P_4 - P_a)A_4$
    *   $\dot{m}_a$: Mass flow rate of air entering the engine.
    *   $V_4$: Exit velocity of the exhaust gases.
    *   $V_1$: Inlet velocity of the air (flight speed).
    *   $P_4$: Exit static pressure of the exhaust gases.
    *   $P_a$: Ambient static pressure.
    *   $A_4$: Exit area of the nozzle.

*   **For a perfectly expanded nozzle ($P_4 = P_a$), the thrust equation simplifies to:**
    $F_{net} = \dot{m}_a (V_4 - V_1)$

**Important Note on Mass Flow:** In a ramjet, the mass flow rate of air into the engine ($\dot{m}_a$) is assumed to be constant through the combustion and expansion processes, as no additional mass (like from a turbine) is involved.

---

### **3. Ramjet Performance Parameters**

**3.1 Specific Thrust:**
Thrust produced per unit mass flow rate of air.
$F_{s} = V_4 - V_1$ (for perfectly expanded nozzle)

**3.2 Propulsive Efficiency ($\eta_p$):**
The ratio of kinetic energy imparted to the working fluid (air) to the kinetic energy of the exhaust gases relative to the aircraft.
$\eta_p = \frac{\text{Useful thrust power}}{\text{Rate of kinetic energy imparted to fluid}}$
$\eta_p = \frac{F_{net} V_1}{\frac{1}{2} \dot{m}_a (V_4^2 - V_1^2)}$
For a perfectly expanded nozzle, this simplifies to:
$\eta_p = \frac{V_4 - V_1}{V_4 + V_1}$

**3.3 Thermal Efficiency ($\eta_{th}$):**
The ratio of the useful work done by the fluid to the heat energy supplied. For the Brayton cycle approximation:
$\eta_{th} = 1 - \frac{T_2}{T_3}$
Or in terms of pressure ratio: $\eta_{th} = 1 - \frac{1}{\left(\frac{P_{max}}{P_{min}}\right)^{\frac{\gamma-1}{\gamma}}}$, where $\frac{P_{max}}{P_{min}}$ is the overall pressure ratio.
In a ramjet, the "pressure ratio" is effectively determined by the ram compression due to the flight Mach number.

**3.4 Overall Efficiency ($\eta_o$):**
The product of propulsive efficiency and thermal efficiency.
$\eta_o = \eta_p \times \eta_{th}$

**3.5 Specific Impulse ($I_{sp}$):**
A measure of how efficiently a rocket or jet engine uses propellant. It is the thrust produced per unit weight flow rate of propellant.
$I_{sp} = \frac{F_{net}}{\dot{W}_p}$
Where $\dot{W}_p$ is the weight flow rate of propellant. For air-breathing engines like ramjets, the "propellant" is the air.
$I_{sp} = \frac{F_{net}}{\dot{m}_a g}$
$I_{sp} = \frac{V_4 - V_1}{g}$ (for perfectly expanded nozzle)
The units of specific impulse are typically seconds.

**3.6 Fuel-Air Ratio ($f$):**
The ratio of the mass flow rate of fuel to the mass flow rate of air.
$f = \frac{\dot{m}_f}{\dot{m}_a}$

**Important Point to Remember:** Propulsive efficiency is generally higher at higher flight speeds, and thermal efficiency is dependent on the compression ratio achieved.

---

### **4. Components of a Ramjet**

**4.1 Inlet (Diffuser):**
*   **Function:** To slow down the incoming high-velocity air to a subsonic speed, increasing its static pressure and temperature.
*   **Types:**
    *   **Subsonic Inlet:** Simple, convergent duct.
    *   **Supersonic Inlet:** Convergent-divergent duct. This is essential for ramjets operating at supersonic speeds to achieve efficient compression.
        *   **External Compression:** Uses oblique shocks generated by external ramps or cones.
        *   **Internal Compression:** Uses normal shocks or a series of oblique shocks within the duct.
*   **Design Considerations:** Minimizing shock losses, achieving efficient diffusion without flow separation.

**4.2 Combustion Chamber:**
*   **Function:** To burn the fuel with the compressed air, adding heat energy.
*   **Design Considerations:**
    *   **Fuel Injectors:** To atomize and mix fuel with air.
    *   **Flameholders:** To stabilize the flame and prevent it from being blown out by the high-speed airflow.
    *   **Sufficient Residence Time:** To ensure complete combustion.
    *   **Minimizing Pressure Drop:** Ideally, combustion occurs at constant pressure.

**4.3 Nozzle (Exhaust):**
*   **Function:** To accelerate the hot combustion products to a high exit velocity, generating thrust.
*   **Types:**
    *   **Convergent Nozzle:** For subsonic exit flow.
    *   **Convergent-Divergent (C-D) Nozzle:** Essential for ramjets operating at supersonic speeds, as it allows the flow to accelerate beyond sonic velocity.
*   **Design Considerations:**
    *   **Area Ratio:** Critical for achieving maximum thrust at a specific design Mach number.
    *   **Perfect Expansion:** The nozzle is designed to expand the gas to ambient pressure at the exit for maximum efficiency. However, in practice, this is often achieved only at one specific flight Mach number.

---

### **5. Ramjet Performance vs. Flight Mach Number**

**5.1 At Low Speeds (M < 0.4):**
*   Ramjet cannot start. External acceleration is required.
*   Inlet performance is poor; limited pressure rise.
*   Low thermal efficiency.

**5.2 At Transonic Speeds (M ≈ 0.8 - 1.2):**
*   Ramjet can achieve self-sustaining operation.
*   Inlet performance starts to improve with shock waves.
*   However, shock wave formation can lead to significant pressure losses.

**5.3 At Supersonic Speeds (M > 1.2):**
*   Ramjet becomes highly efficient.
*   Supersonic inlets with oblique shocks provide significant and efficient pressure rise.
*   High thermal efficiency due to higher initial compression ratio (dynamic pressure).
*   Propulsive efficiency also increases with speed.

**5.4 At Hypersonic Speeds (M > 5):**
*   Ramjets are still viable, but specialized inlet designs are needed to manage extreme shock formations and temperatures.
*   **Scramjets (Scrambling Ramjets):** A variant where combustion occurs in a supersonic flow within the engine, offering higher efficiency at very high Mach numbers.

**Example from Textbooks:**
Ganesan's "Gas Turbines" might discuss the pressure recovery in supersonic inlets using oblique shock waves, illustrating how the Mach number decreases across the shocks, leading to a pressure increase. Yahya's "Turbines, Compressors and Fans" might detail the design principles of diffusers for efficient subsonic and supersonic flow. Mathur's "Gas Turbine & Jet Rocket Propulsion" would likely cover the thrust equation and efficiency calculations specific to ramjets.

**Important Point to Remember:** The operating regime of a ramjet is heavily dependent on the flight Mach number.

---

### **6. Comparison with Other Jet Engines**

| Feature           | Ramjet                                 | Turbojet                                 | Turbofan                                  |
| :---------------- | :------------------------------------- | :--------------------------------------- | :---------------------------------------- |
| **Compressor**    | None (uses ram effect)                 | Axial/Centrifugal (driven by turbine)    | Axial (driven by turbine), Fan            |
| **Turbine**       | None                                   | Present (drives compressor)              | Present (drives compressor and fan)       |
| **Starting Speed**| High (Mach 0.4-0.5)                    | Low (near zero)                          | Low (near zero)                           |
| **Operating Speed**| Supersonic/Hypersonic                  | Subsonic to supersonic                   | Subsonic to moderate supersonic           |
| **Complexity**    | Very Simple                            | Complex                                  | More Complex                              |
| **Thrust Specific**| High                                   | Moderate                                 | Low (high bypass) to Moderate (low bypass)|
| **Efficiency**    | Good at high speeds, poor at low speeds | Good at moderate speeds                  | Excellent at subsonic speeds              |
| **Applications**  | Missiles, high-speed drones            | Military aircraft, early jet transports  | Commercial airliners, military aircraft   |

---

### **7. Practice Questions and Answers**

**Question 1:** A ramjet is flying at Mach 2 at an altitude where the ambient temperature is 216.7 K and ambient pressure is 0.22 bar. The flight Mach number is $M_1 = 2$. The ratio of specific heats $\gamma = 1.4$ and the specific heat at constant pressure $c_p = 1.005$ kJ/kg.K. Assume the inlet diffuser is isentropic and the nozzle is perfectly expanded. The combustion process raises the gas temperature by 800 K. Calculate:
(a) The stagnation temperature and pressure at the diffuser exit.
(b) The temperature and pressure at the nozzle exit (assuming ambient conditions).
(c) The exit velocity of the gas.
(d) The specific thrust.
(e) The propulsive efficiency.

**Solution:**

Given:
$M_1 = 2$
$T_1 = 216.7$ K
$P_1 = 0.22$ bar
$\gamma = 1.4$
$c_p = 1.005$ kJ/kg.K = 1005 J/kg.K
Temperature rise in combustion, $\Delta T_{heat} = 800$ K

**(a) Stagnation temperature and pressure at diffuser exit ($T_2, P_2$):**

Isentropic relations:
$T_2 = T_1 \left(1 + \frac{\gamma-1}{2}M_1^2\right)$
$T_2 = 216.7 \left(1 + \frac{1.4-1}{2}(2)^2\right) = 216.7 \left(1 + 0.2 \times 4\right) = 216.7 \times 1.8 = 390.06$ K

$P_2 = P_1 \left(1 + \frac{\gamma-1}{2}M_1^2\right)^{\frac{\gamma}{\gamma-1}}$
$P_2 = 0.22 \left(1 + \frac{1.4-1}{2}(2)^2\right)^{\frac{1.4}{1.4-1}} = 0.22 (1.8)^{3.5} = 0.22 \times 7.495 = 1.649$ bar

**(b) Temperature and pressure at nozzle exit ($T_4, P_4$):**

The temperature after combustion ($T_3$) is $T_2 + \Delta T_{heat}$:
$T_3 = 390.06 + 800 = 1190.06$ K
Ideally, $P_3 = P_2 = 1.649$ bar.

For a perfectly expanded nozzle, $P_4 = P_1 = 0.22$ bar.
Using isentropic expansion from state 3 to state 4:
$\frac{T_4}{T_3} = \left(\frac{P_4}{P_3}\right)^{\frac{\gamma-1}{\gamma}}$
$T_4 = T_3 \left(\frac{P_4}{P_3}\right)^{\frac{\gamma-1}{\gamma}} = 1190.06 \left(\frac{0.22}{1.649}\right)^{\frac{1.4-1}{1.4}} = 1190.06 (0.1334)^{0.2857}$
$T_4 = 1190.06 \times 0.543 = 646.20$ K

**(c) Exit velocity of the gas ($V_4$):**
Assuming the velocity before the nozzle ($V_3$) is negligible compared to $V_4$ (common in ramjet analysis).
$V_4 = \sqrt{2 c_p (T_3 - T_4)}$
$V_4 = \sqrt{2 \times 1005 \times (1190.06 - 646.20)} = \sqrt{2 \times 1005 \times 543.86} = \sqrt{1093449.3} \approx 1045.7$ m/s

**(d) Specific thrust ($F_s$):**
$F_s = V_4 - V_1$
First, calculate $V_1$ (flight speed):
$V_1 = M_1 \sqrt{\gamma R T_1}$ where $R = c_p/\gamma = 1005/1.4 = 717.85$ J/kg.K
$V_1 = 2 \sqrt{1.4 \times 717.85 \times 216.7} = 2 \sqrt{217128.7} = 2 \times 465.97 \approx 931.94$ m/s
$F_s = 1045.7 - 931.94 = 113.76$ m/s

**(e) Propulsive efficiency ($\eta_p$):**
$\eta_p = \frac{V_4 - V_1}{V_4 + V_1} = \frac{113.76}{1045.7 + 931.94} = \frac{113.76}{1977.64} \approx 0.0575$ or 5.75%

**Answer Summary:**
(a) $T_2 = 390.06$ K, $P_2 = 1.649$ bar
(b) $T_4 = 646.20$ K, $P_4 = 0.22$ bar
(c) $V_4 = 1045.7$ m/s
(d) $F_s = 113.76$ m/s
(e) $\eta_p = 5.75\%$

---

**Question 2:** Briefly explain why a ramjet cannot operate at zero forward speed.

**Answer:** A ramjet relies on the ram effect, which is the compression of incoming air due to its kinetic energy. At zero forward speed, there is no kinetic energy of incoming air to compress, and therefore no pressure rise. Without any pre-compression before combustion, the engine cannot generate significant thrust. It requires an external force to accelerate it to a minimum speed where the ram effect becomes sufficient to sustain operation.

---

### **8. Important Points to Remember**

*   **Ramjets are dynamic compressors:** They rely on flight speed for compression.
*   **Simplicity:** Absence of rotating compressor and turbine.
*   **Operational Limit:** Requires external acceleration to a minimum flight speed.
*   **Performance Window:** Most efficient at supersonic and hypersonic speeds.
*   **Key Components:** Inlet (Diffuser), Combustion Chamber, Nozzle.
*   **Cycle Approximation:** Modified Brayton cycle.
*   **Thrust Generation:** Primarily through the exhaust velocity difference.
*   **Propulsive Efficiency:** Highly dependent on flight Mach number and exhaust velocity.

---

### **9. Alignment with Course Outcomes (CO)**

*   **CO1 (Apply principles of thermodynamics and fluid dynamics to understand performance and efficiency):** This topic directly addresses the thermodynamic cycle (modified Brayton) and fluid dynamics principles (isentropic flow, shock waves in inlet, expansion in nozzle) governing ramjet performance and efficiency calculations. (Knowledge Level: K3)
*   **CO2 (Analyze performance characteristics and efficiencies of compressors and turbines):** While ramjets lack mechanical compressors and turbines, understanding their absence and how ram effect replaces compressor function (albeit less efficiently at low speeds) aligns with the spirit of this CO. The analysis of diffuser pressure recovery is akin to compressor performance. (Knowledge Level: K4)
*   **CO3 (Analyze performance of gas turbine systems by understanding component characteristics):** The detailed breakdown of ramjet components (inlet, combustor, nozzle) and their functions directly contributes to analyzing the overall system performance. (Knowledge Level: K4)
*   **CO4 (Understand principles and characteristics of jet and rocket propulsion systems):** This topic is a core component of jet propulsion systems, explaining the fundamental principles of how a ramjet works and its specific characteristics compared to other jet engines. (Knowledge Level: K2)

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### **10. References**

*   **Gas Turbines by V Ganesan (McGraw Hill Education, Third, 2017):** Likely covers basic cycle analysis, component descriptions, and performance parameters.
*   **Turbines, Compressors and Fans by S M Yahya (McGraw Hill, Fourth, 2011):** May offer insights into diffuser design and fluid mechanics principles relevant to the inlet section.
*   **Gas Turbine & Jet Rocket Propulsion by Mathur M L (Standard Publishers Distributors, First, 2010):** Expected to have detailed analysis of thrust, efficiency, and specific applications of ramjets.
*   **The Jet Engine by Rolls Royce (Wiley, First, 2015):** Provides a comprehensive, industry-perspective view of jet propulsion, which might include ramjet principles as a foundational concept.
*   **Gas Turbine Theory by H. Cohen (Pearson Education, Seventh, 2019):** Offers advanced theoretical treatment of gas turbine cycles and components, which can be applied to understanding ramjet operation.

---