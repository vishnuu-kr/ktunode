---
title: "Preheat factor in compressors, work and efficiency for compressors and turbines."
subject: "TURBO MACHINERY"
module: "Module 1: Introduction: Definition of turbo machine"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804463008"
status: "completed"
scrapedAt: "2026-05-20T17:57:14.673Z"
---
# TURBO MACHINERY - Module 1: Introduction: Definition of Turbo Machine

## Topic: Preheat Factor in Compressors, Work and Efficiency for Compressors and Turbines

---

### **1. Introduction to Turbo Machines**

*   **Definition:** Turbo machines are mechanical devices that transfer energy between a rotor and a fluid. They involve the flow of fluid through a rotating component (rotor or impeller) which leads to a change in the fluid's energy.
    *   **Power Generating Machines (Turbines):** Extract energy from a fluid and convert it into mechanical work. Examples: Steam turbines, gas turbines, hydraulic turbines.
    *   **Power Consuming Machines (Compressors/Pumps):** Impart energy to a fluid, increasing its pressure and/or velocity, thereby requiring external work input. Examples: Centrifugal compressors, axial compressors, centrifugal pumps.
*   **Key Components:**
    *   **Rotor/Impeller:** The rotating part of the machine that interacts with the fluid.
    *   **Casing/Volute:** The stationary part that guides the fluid flow.
    *   **Blades/Vanes:** Attached to the rotor, they are the primary elements for energy transfer.
*   **Working Principle:** Based on Newton's second and third laws of motion, relating to momentum and forces applied to the fluid. The relative motion between the fluid and the rotating blades causes a change in the fluid's angular momentum, leading to torque and work transfer.

---

### **2. Compressors: Work and Efficiency**

Compressors are devices that increase the pressure of a fluid (typically a gas) by imparting work to it.

#### **2.1 Work Done in a Compressor**

The work done on the fluid during compression is a critical parameter for evaluating compressor performance.

*   **Ideal Compression (Isentropic Compression):** In an ideal compressor, compression occurs without any losses, meaning it's reversible and adiabatic. The process follows an isentropic path ($pv^\gamma = constant$, where $\gamma$ is the ratio of specific heats).
    *   **Work Input (Isentropic):**
        $W_{isen} = \int_{1}^{2} v \, dp = \frac{\gamma}{\gamma-1} p_1 v_1 \left[ \left(\frac{p_2}{p_1}\right)^{\frac{\gamma-1}{\gamma}} - 1 \right]$
        Alternatively, in terms of mass flow rate ($\dot{m}$):
        $W_{isen} = \dot{m} \frac{\gamma}{\gamma-1} R T_1 \left[ \left(\frac{p_2}{p_1}\right)^{\frac{\gamma-1}{\gamma}} - 1 \right]$
        where:
        *   $p_1, T_1$: Inlet pressure and temperature
        *   $p_2$: Outlet pressure
        *   $v_1$: Specific volume at inlet
        *   $R$: Specific gas constant
        *   $\gamma$: Ratio of specific heats

*   **Actual Compression:** In a real compressor, the compression process is not perfectly isentropic due to irreversibilities like friction and heat transfer to the surroundings. The actual work input will be higher than the ideal work.

#### **2.2 Efficiency of Compressors**

Efficiency quantifies how effectively the compressor converts input work into useful work on the fluid.

*   **Isentropic Efficiency ($\eta_{isen}$):** This is the most common measure of compressor efficiency. It compares the ideal (isentropic) work input to the actual work input required to achieve the same pressure rise.

    $\eta_{isen} = \frac{\text{Isentropic Work Input}}{\text{Actual Work Input}}$

    For a single stage compressor (or total for multi-stage):
    $\eta_{isen} = \frac{W_{isen}}{W_{actual}} = \frac{h_{2s} - h_1}{h_2 - h_1}$

    Where:
    *   $h_1$: Enthalpy at inlet
    *   $h_2$: Actual enthalpy at outlet
    *   $h_{2s}$: Enthalpy at outlet if the process were isentropic

*   **Isothermal Efficiency ($\eta_{iso}$):** This compares the work input for isothermal compression (constant temperature) to the actual work input. This is relevant for compressors where cooling is very effective, approaching isothermal conditions.
    *   **Work Input (Isothermal):** $W_{iso} = p_1 v_1 \ln\left(\frac{p_2}{p_1}\right) = \dot{m} R T_1 \ln\left(\frac{p_2}{p_1}\right)$
    *   **Isothermal Efficiency:**
        $\eta_{iso} = \frac{\text{Isothermal Work Input}}{\text{Actual Work Input}} = \frac{W_{iso}}{W_{actual}}$

*   **Mechanical Efficiency ($\eta_{mech}$):** Accounts for mechanical losses in bearings, seals, and other moving parts, which reduce the power delivered to the impeller/rotor.
    *   $\eta_{mech} = \frac{\text{Shaft Work}}{\text{Brake Work}}$ (Brake work is the power supplied to the shaft)

*   **Volumetric Efficiency ($\eta_{vol}$):** This is particularly important for positive displacement compressors and also considered for centrifugal compressors. It is the ratio of the actual volume of gas delivered by the compressor per cycle to the swept volume of the piston or impeller.
    *   $\eta_{vol} = \frac{\text{Actual Volume Delivered}}{\text{Swept Volume}}$

---

### **3. Turbines: Work and Efficiency**

Turbines are devices that extract energy from a moving fluid and convert it into mechanical work, typically to drive a generator.

#### **3.1 Work Done by a Turbine**

The work done by the fluid on the turbine rotor is the primary output.

*   **Ideal Turbine Operation (Isentropic Expansion):** In an ideal turbine, the expansion of the fluid is isentropic (reversible adiabatic). The fluid expands, its pressure and temperature decrease, and its enthalpy is converted into mechanical work.
    *   **Work Output (Isentropic):**
        $W_{isen} = -\int_{1}^{2} v \, dp = \int_{2}^{1} v \, dp$
        For gases (similar to compressor but with expansion):
        $W_{isen} = \frac{\gamma}{\gamma-1} p_1 v_1 \left[ 1 - \left(\frac{p_2}{p_1}\right)^{\frac{\gamma-1}{\gamma}} \right]$
        Alternatively, in terms of mass flow rate ($\dot{m}$):
        $W_{isen} = \dot{m} \frac{\gamma}{\gamma-1} R T_1 \left[ 1 - \left(\frac{p_2}{p_1}\right)^{\frac{\gamma-1}{\gamma}} \right]$
        Or in terms of enthalpy change for any fluid:
        $W_{isen} = h_1 - h_2$

*   **Actual Turbine Operation:** In a real turbine, losses occur due to friction, turbulence, leakage, and incomplete expansion. The actual work output will be less than the ideal work.

#### **3.2 Efficiency of Turbines**

Turbine efficiency measures how well the turbine converts the available fluid energy into useful mechanical work.

*   **Isentropic Efficiency ($\eta_{isen}$):** This is the most common efficiency for turbines. It compares the actual work output to the ideal (isentropic) work output.

    $\eta_{isen} = \frac{\text{Actual Work Output}}{\text{Isentropic Work Output}}$

    For a single stage turbine (or total for multi-stage):
    $\eta_{isen} = \frac{h_1 - h_2}{h_1 - h_{2s}}$

    Where:
    *   $h_1$: Enthalpy at inlet
    *   $h_2$: Actual enthalpy at outlet
    *   $h_{2s}$: Enthalpy at outlet if the process were isentropic

*   **Mechanical Efficiency ($\eta_{mech}$):** Similar to compressors, this accounts for mechanical losses.
    *   $\eta_{mech} = \frac{\text{Shaft Work}}{\text{Work done by fluid}}$

*   **Overall Efficiency ($\eta_{overall}$):** For a complete turbomachine set (e.g., turbine driving a generator), this would be the product of turbine efficiency and generator efficiency.

---

### **4. The Preheat Factor in Compressors**

The "preheat factor" is not a standard or widely used term in turbomachinery literature in the context of compressors. It's possible it's a specific term used in a particular curriculum or textbook, or it might refer to a related concept.

Based on the term "preheat," it might refer to a situation where the incoming air to a compressor is *heated* before entering the compressor. However, this is counter-intuitive for efficiency. Preheating incoming air to a compressor generally *reduces* its density, meaning more volume must be compressed for the same mass flow, and the work done per unit mass *increases* because the specific heat capacity at constant pressure ($C_p$) is higher for warmer air.

Let's consider possible interpretations, referencing the provided textbooks where these concepts are discussed:

*   **Interpretation 1: Reheating in a Multi-stage Compressor:** Some advanced compressor designs might involve intercooling between stages to reduce the work of compression. "Reheating" would typically refer to adding heat *after* a turbine stage in a gas turbine cycle. If "preheat" is being used in a similar context for compressors, it might relate to a specific stage in a complex cycle where heat is added. However, this is unusual for typical compressor operation.
*   **Interpretation 2: Preheating for Starting:** In some very specific applications, a small amount of heating might be applied to the inlet air during starting to ensure stable operation under extreme cold conditions, but this is not a continuous operational feature.
*   **Interpretation 3: Misinterpretation or Local Terminology:** It's highly probable that "preheat factor" is either a misunderstanding of a different term or specific local jargon. Standard texts like Dixon, Venkanna, and Yahya focus on the effects of inlet temperature on compressor performance, but not a "preheat factor" as a defined parameter.

**If "preheat factor" refers to the *impact of increased inlet temperature* on compressor work:**

*   **Effect of Inlet Temperature on Compressor Work:** As the inlet temperature ($T_1$) increases (assuming the pressure ratio remains the same):
    *   The specific volume ($v_1$) at the inlet increases.
    *   The specific heat at constant pressure ($C_p$) increases slightly.
    *   The term $T_1$ in the work equation $W_{isen} = \dot{m} C_p T_1 \left[ \left(\frac{p_2}{p_1}\right)^{\frac{\gamma-1}{\gamma}} - 1 \right]$ increases.
    *   Therefore, the **isentropic work input per unit mass flow rate increases significantly** with increased inlet temperature.
    *   Higher inlet temperatures also lead to lower volumetric efficiency and can limit the achievable pressure ratio due to discharge temperature constraints.

**Recommendation:** Clarify the exact definition and context of "preheat factor" with the instructor or source material. Without a clear definition, it's difficult to provide a precise explanation. Standard compressor analysis focuses on **inlet temperature** and its effects, not a "preheat factor."

---

### **5. Velocity Triangles and their Relation to Work and Efficiency**

While the detailed analysis of velocity triangles falls into later modules, it's important to understand their fundamental role in defining work and efficiency.

*   **Velocity Triangles:** At the inlet and outlet of each blade row (rotor and stator), velocity triangles are constructed by vectorially combining the absolute velocity of the fluid ($V$), the blade speed ($U$), and the relative velocity of the fluid with respect to the blade ($W$).

*   **Work Transfer (Euler's Turbomachine Equation):** The work done per unit mass flow rate by a rotor is directly related to the change in the tangential component of the absolute velocity of the fluid ($V_{u}$) and the blade speed ($U$):

    $W_{rotor} = U_2 V_{u2} - U_1 V_{u1}$

    This equation highlights that the work transfer is dependent on the tangential velocities imparted to or extracted from the fluid by the rotating blades.

*   **Efficiency and Velocity Triangles:**
    *   **Blade Losses:** The shape and incidence of the blades, as reflected in the relative velocity triangles, significantly influence friction and flow separation losses, impacting actual work output and efficiency.
    *   **Circulation:** The tangential velocity components ($V_u$) are directly linked to the circulation around the blades.
    *   **Degree of Reaction:** In axial flow machines, the distribution of work between rotors and stators (which influences velocity triangle profiles) determines the degree of reaction, affecting pressure changes across stages.

---

### **6. Key Concepts and Definitions to Remember**

*   **Turbo Machine:** Device transferring energy between a rotor and a fluid.
*   **Turbine:** Extracts energy from fluid (power generating).
*   **Compressor:** Imparts energy to fluid (power consuming).
*   **Isentropic Process:** Ideal, reversible adiabatic process.
*   **Isentropic Work:** Ideal work for a process.
*   **Actual Work:** Work done in a real process, accounting for losses.
*   **Isentropic Efficiency:** Ratio of ideal work to actual work (for compressors) or actual work to ideal work (for turbines).
*   **Mechanical Efficiency:** Accounts for friction and other mechanical losses.
*   **Volumetric Efficiency:** Ratio of actual volume delivered to swept volume (primarily for positive displacement compressors).
*   **Euler's Turbomachine Equation:** Relates work transfer to velocity triangle components.
*   **Preheat Factor:** *Clarify its definition if encountered. Standardly, inlet temperature affects compressor work.*

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### **7. Textbook and Reference Book Integration**

*   **Dixon, S.I. (1999):** This textbook provides a thorough foundation in the fundamental principles of fluid mechanics and thermodynamics as applied to turbomachinery. It would cover the derivation of work equations for compressors and turbines and detailed explanations of their efficiencies. Chapter 3 (Work and Efficiency) and Chapter 5 (Centrifugal Compressors) are likely relevant.
*   **Venkanna, B.K. (2009):** This book likely covers the basic definitions, classifications, and performance analysis of turbo machines. It will certainly detail the work input/output and efficiency calculations for compressors and turbines, possibly with specific formulas and examples. Chapters on compressors and turbines will be directly applicable.
*   **Yahya, S.H. (1996):** Yahya's book is known for its comprehensive coverage of turbomachinery. It would include detailed treatments of compressor and turbine thermodynamics, performance metrics, and efficiency analysis. Chapters on compressors (e.g., centrifugal, axial) and turbines (e.g., steam, gas) will be highly relevant.
*   **Gambini & Vellini (2021) & Dick (2022):** These more recent references would likely offer advanced perspectives, potentially on modern compressor and turbine designs, more sophisticated efficiency models, and perhaps discussions of factors like variable geometry or advanced flow control that might indirectly relate to concepts like "preheat" in specific advanced applications.

---

### **8. Alignment with Course Outcomes (COs)**

*   **CO1 (Use fundamental principles... find efficiencies):** This topic directly addresses CO1 by providing the theoretical basis (thermodynamics, fluid mechanics) for calculating work and defining various efficiency parameters for both compressors and turbines.
    *   *Knowledge Level K3 (Application):* Students will apply the formulas for isentropic and actual work to calculate compressor and turbine efficiencies.

---

### **9. Practice Questions and Exercises**

**Question 1:**
A compressor takes in air at 1 bar and 27°C. It compresses the air to 5 bar. Assuming the compression process is isentropic, calculate the work done per kg of air.
Given: $\gamma = 1.4$, $R = 287 \, J/(kg \cdot K)$.

**Answer 1:**
The isentropic work input per kg of air is given by:
$W_{isen} = \frac{\gamma}{\gamma-1} R T_1 \left[ \left(\frac{p_2}{p_1}\right)^{\frac{\gamma-1}{\gamma}} - 1 \right]$
$T_1 = 27^\circ C = 27 + 273.15 = 300.15 \, K$
$p_1 = 1 \, bar$
$p_2 = 5 \, bar$
$\frac{p_2}{p_1} = 5$
$\frac{\gamma-1}{\gamma} = \frac{1.4-1}{1.4} = \frac{0.4}{1.4} = \frac{2}{7} \approx 0.2857$

$W_{isen} = \frac{1.4}{1.4-1} \times 287 \times 300.15 \left[ (5)^{\frac{2}{7}} - 1 \right]$
$W_{isen} = \frac{1.4}{0.4} \times 287 \times 300.15 \left[ 1.3086 - 1 \right]$
$W_{isen} = 3.5 \times 287 \times 300.15 \times 0.3086$
$W_{isen} \approx 93037 \, J/kg \approx 93.04 \, kJ/kg$

**Question 2:**
A turbine expands steam isentropically from an initial enthalpy of 3000 kJ/kg to a final enthalpy of 2200 kJ/kg. If the actual work output is 750 kJ/kg, calculate the isentropic efficiency of the turbine.

**Answer 2:**
Isentropic work output: $W_{isen} = h_1 - h_{2s} = 3000 \, kJ/kg - 2200 \, kJ/kg = 800 \, kJ/kg$
Actual work output: $W_{actual} = 750 \, kJ/kg$
Isentropic efficiency:
$\eta_{isen} = \frac{W_{actual}}{W_{isen}} = \frac{750 \, kJ/kg}{800 \, kJ/kg} = 0.9375$
$\eta_{isen} = 93.75\%$

**Question 3:**
A centrifugal compressor has an inlet stagnation temperature of 300 K and an inlet pressure of 1 bar. It compresses air to 4 bar. The actual work input required is 150 kJ/kg.
a) Calculate the isentropic work input required for this compression.
b) Calculate the isentropic efficiency of the compressor.
Given: $\gamma = 1.4$, $R = 287 \, J/(kg \cdot K)$.

**Answer 3:**
a) Isentropic work input:
$W_{isen} = \frac{1.4}{1.4-1} \times 287 \times 300 \left[ (4)^{\frac{1.4-1}{1.4}} - 1 \right]$
$W_{isen} = 3.5 \times 287 \times 300 \left[ (4)^{0.2857} - 1 \right]$
$W_{isen} = 301350 \left[ 1.4859 - 1 \right]$
$W_{isen} = 301350 \times 0.4859 \approx 146420 \, J/kg \approx 146.42 \, kJ/kg$

b) Isentropic efficiency:
$\eta_{isen} = \frac{W_{isen}}{W_{actual}} = \frac{146.42 \, kJ/kg}{150 \, kJ/kg} = 0.9761$
$\eta_{isen} = 97.61\%$

---

### **10. Important Points to Remember**

*   The fundamental difference between compressors (work input) and turbines (work output) lies in the direction of energy transfer.
*   Isentropic processes represent the ideal limit for both compression and expansion in turbomachines, serving as benchmarks for efficiency calculations.
*   Actual processes in turbomachines involve irreversibilities (friction, turbulence), leading to actual work values that deviate from ideal (isentropic) work.
*   Isentropic efficiency is a key performance metric, indicating how closely the actual process approaches the ideal.
*   For compressors, higher inlet temperatures lead to increased work input.
*   For turbines, losses reduce the actual work output compared to the ideal isentropic expansion.
*   Velocity triangles are crucial for understanding the mechanics of work transfer at the blade level, as described by Euler's turbomachine equation.
*   **Always confirm the precise definition of specialized terms like "preheat factor" if they appear in your specific course material.**

---