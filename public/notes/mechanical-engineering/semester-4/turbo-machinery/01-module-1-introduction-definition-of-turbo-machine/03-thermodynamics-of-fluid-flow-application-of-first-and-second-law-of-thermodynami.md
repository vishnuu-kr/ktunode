---
title: "Thermodynamics of fluid flow: Application of first and second law of thermodynamics to turbo machines."
subject: "TURBO MACHINERY"
module: "Module 1: Introduction: Definition of turbo machine"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804463007"
status: "completed"
scrapedAt: "2026-05-20T17:57:13.964Z"
---
# TURBO MACHINERY: Module 1 - Introduction: Definition of Turbo Machine

## Topic: Thermodynamics of Fluid Flow: Application of First and Second Law of Thermodynamics to Turbo Machines

This module introduces the fundamental thermodynamic principles governing the operation of turbomachines. We will explore how the First and Second Laws of Thermodynamics are applied to understand energy transfer and efficiency in these devices.

---

### **1. Introduction to Turbomachines**

**Definition of a Turbomachine:**

A turbomachine is a type of machine that transfers energy between a rotor and a fluid. This energy transfer is achieved by moving the fluid through a rotor that has vanes attached to it.

*   **Key Characteristics:**
    *   Involve a rotating element (rotor) in contact with a fluid.
    *   Energy is transferred to or from the fluid through the rotor.
    *   Fluid flows continuously through the machine.
    *   Examples: Turbines (extract energy), Compressors/Pumps/Fans (add energy).

---

### **2. Thermodynamics of Fluid Flow in Turbomachines**

The operation of turbomachines is fundamentally governed by the laws of thermodynamics, particularly concerning energy conservation and the direction of energy transfer.

#### **2.1. The First Law of Thermodynamics (Energy Conservation)**

The First Law of Thermodynamics states that energy cannot be created or destroyed, only transferred or changed from one form to another. For a steady-flow process in a turbomachine, this can be expressed as the **Steady Flow Energy Equation (SFEE)**.

**SFEE for a Control Volume:**

The SFEE applied to a control volume (representing a section of the turbomachine) states that the net rate of energy transfer into the control volume by heat, work, and mass flow is equal to the net rate of change of energy within the control volume.

For steady flow, the rate of change of energy within the control volume is zero. The SFEE can be written as:

$$ \dot{Q} + \dot{m} \left( h_1 + \frac{V_1^2}{2} + gz_1 \right) = \dot{W} + \dot{m} \left( h_2 + \frac{V_2^2}{2} + gz_2 \right) $$

Where:
*   $\dot{Q}$ = Rate of heat transfer into the control volume (W)
*   $\dot{W}$ = Rate of work done by the control volume (W)
*   $\dot{m}$ = Mass flow rate of the fluid (kg/s)
*   $h$ = Specific enthalpy of the fluid (J/kg)
*   $V$ = Absolute velocity of the fluid (m/s)
*   $g$ = Acceleration due to gravity (m/s²)
*   $z$ = Elevation above a reference point (m)
*   Subscripts 1 and 2 refer to the inlet and outlet of the control volume, respectively.

**Simplifications for Turbomachines:**

*   **Adiabatic Processes:** In many turbomachines, heat transfer is often negligible ($\dot{Q} \approx 0$). This is particularly true for high-speed machines or when considering the primary energy transfer.
*   **Negligible Potential Energy Changes:** For most turbomachines, the change in elevation ($\Delta z$) between the inlet and outlet is small compared to enthalpy and kinetic energy changes, so $gz_1 \approx gz_2$ and can be neglected.
*   **Work Transfer:** The work term ($\dot{W}$) is the shaft work delivered by or to the rotor.

**SFEE for Adiabatic, Negligible Potential Energy Changes:**

$$ \dot{m} \left( h_1 + \frac{V_1^2}{2} \right) = \dot{W}_{\text{shaft}} + \dot{m} \left( h_2 + \frac{V_2^2}{2} \right) $$

Rearranging to find the shaft work:

$$ \dot{W}_{\text{shaft}} = \dot{m} \left[ \left( h_1 + \frac{V_1^2}{2} \right) - \left( h_2 + \frac{V_2^2}{2} \right) \right] $$

Or, on a per unit mass basis (specific work, $w_{\text{shaft}}$):

$$ w_{\text{shaft}} = \left( h_1 + \frac{V_1^2}{2} \right) - \left( h_2 + \frac{V_2^2}{2} \right) $$

This equation shows that the specific work done by the fluid (in a turbine) or on the fluid (in a compressor/pump) is equal to the change in the specific stagnation enthalpy of the fluid.

*   **For Turbines (Power Generating):** Work is done *by* the fluid, so $\dot{W}_{\text{shaft}}$ is positive, and $h_1 > h_2$ (enthalpy decreases).
*   **For Compressors/Pumps (Power Consuming):** Work is done *on* the fluid, so $\dot{W}_{\text{shaft}}$ is negative, and $h_2 > h_1$ (enthalpy increases).

**Enthalpy and Internal Energy:**
For ideal gases, $h = u + Pv$, and assuming the ideal gas law ($Pv = RT$), $h = c_pT$.
For liquids and incompressible fluids, enthalpy changes are often approximated by pressure and velocity changes, $h \approx P/\rho + V^2/2$, where $\rho$ is density.

**Reference:** Dixon, S.I., *Fluid Mechanics and Thermodynamics of Turbomachinery*, Chapter 2.

#### **2.2. The Second Law of Thermodynamics (Entropy and Efficiency)**

The Second Law of Thermodynamics introduces the concept of entropy and places limitations on the efficiency of energy conversion processes. It states that in any real thermodynamic process, the total entropy of an isolated system can only increase or remain constant; it can never decrease.

**Key Concepts:**

*   **Entropy (s):** A measure of the disorder or randomness of a system.
*   **Reversible Process:** A process that can be reversed without leaving any trace on the surroundings. These processes represent the ideal limit of efficiency, and the entropy change of the universe is zero.
*   **Irreversible Process:** A process that cannot be reversed without leaving some effect on the surroundings. Real processes are always irreversible, leading to an increase in total entropy.
*   **Isentropic Process:** A reversible adiabatic process. For such a process, the entropy remains constant ($\Delta s = 0$).

**Applying the Second Law to Turbomachines:**

*   **Isentropic Efficiency:** This is a crucial concept for evaluating the performance of turbomachines. It compares the actual work transfer to the ideal (isentropic) work transfer for the same change in flow properties.

    **Isentropic Efficiency of a Turbine ($\eta_t$):**
    The turbine efficiency is the ratio of the actual work output to the ideal work output if the expansion were isentropic.

    $$ \eta_t = \frac{\text{Actual work output}}{\text{Isentropic work output}} = \frac{w_{a}}{\left(h_1 - h_{2s}\right)} $$

    Where:
    *   $w_a$ is the actual specific work output from the turbine.
    *   $h_1$ is the specific enthalpy at the inlet.
    *   $h_{2s}$ is the specific enthalpy at the outlet if the expansion from state 1 to the outlet pressure were isentropic.

    Using the SFEE for actual and isentropic processes (assuming adiabatic):
    $$ w_a = h_1 - h_2 $$
    $$ w_{s} = h_1 - h_{2s} $$
    So, $$ \eta_t = \frac{h_1 - h_2}{h_1 - h_{2s}} $$
    Since real processes are irreversible, $h_2 > h_{2s}$ for a turbine (more energy is needed to achieve the outlet pressure due to irreversibilities), thus $\eta_t < 1$.

    **Isentropic Efficiency of a Compressor/Pump ($\eta_c$):**
    The compressor/pump efficiency is the ratio of the ideal work input (isentropic) to the actual work input required to achieve the same pressure rise.

    $$ \eta_c = \frac{\text{Isentropic work input}}{\text{Actual work input}} = \frac{w_{s}}{w_{a}} $$

    Where:
    *   $w_a$ is the actual specific work input to the compressor/pump.
    *   $w_s$ is the ideal specific work input if the compression were isentropic.

    Using the SFEE for actual and isentropic processes (assuming adiabatic):
    $$ w_a = h_2 - h_1 $$
    $$ w_s = h_{2s} - h_1 $$
    So, $$ \eta_c = \frac{h_{2s} - h_1}{h_2 - h_1} $$
    Since real processes are irreversible, $h_2 > h_{2s}$ for a compressor/pump (more work is needed to achieve the outlet pressure due to irreversibilities), thus $\eta_c < 1$.

*   **Sources of Irreversibility:**
    *   **Friction:** Viscous dissipation within the fluid and at the boundaries.
    *   **Shock Waves:** In high-speed flows, shock waves cause significant entropy increase.
    *   **Flow Separation:** Areas where the flow detaches from the surface, leading to turbulence and energy loss.
    *   **Mixing:** Uncontrolled mixing of fluid streams with different properties.
    *   **Heat Transfer:** Heat transfer to a colder environment increases entropy.

**Reference:**
*   Dixon, S.I., *Fluid Mechanics and Thermodynamics of Turbomachinery*, Chapter 3.
*   Venkanna, B.K., *Fundamentals of Turbo Machinery*, Chapter 3.
*   Yahya, S.H., *Turbines, Compressor and Fans*, Chapter 2.

---

### **3. Applications of First and Second Laws in Different Turbomachines**

#### **3.1. Turbines (Power Generating)**

*   **Example:** Steam Turbine, Gas Turbine, Hydraulic Turbine, Wind Turbine.
*   **Purpose:** Extract energy from a high-enthalpy/high-pressure fluid stream and convert it into mechanical shaft work.
*   **First Law Application:** The SFEE is used to calculate the theoretical power output based on the enthalpy drop (and velocity changes).
    *   For a steam turbine, the enthalpy drop across stages determines the work.
    *   For a gas turbine, the temperature rise of the combustion gases across the turbine is related to enthalpy.
    *   For a hydraulic turbine, the potential energy drop of water is converted to kinetic energy and then to work. $w_{\text{shaft}} \approx g(H_1 - H_2) + \frac{V_1^2 - V_2^2}{2}$ (where H is head).
*   **Second Law Application:** Isentropic efficiency ($\eta_t$) quantifies how much of the available energy is actually converted into useful work. Losses due to friction, turbulence, and leakage reduce the actual work output compared to the isentropic ideal.

**CO1 Alignment:** Use the fundamental principles of fluid mechanics and thermodynamics to find the efficiencies of power generating turbomachines. (Knowledge Level: K3)

#### **3.2. Compressors/Pumps/Fans (Power Consuming)**

*   **Example:** Centrifugal Compressor, Axial Compressor, Centrifugal Pump, Axial Fan.
*   **Purpose:** Add energy to a fluid stream, increasing its pressure and/or velocity.
*   **First Law Application:** The SFEE is used to calculate the theoretical work input required to achieve a desired pressure rise.
    *   For a pump, the work input is related to the pressure rise and velocity changes.
    *   For a compressor, the work input is related to the enthalpy increase (temperature rise) and pressure rise.
*   **Second Law Application:** Isentropic efficiency ($\eta_c$) quantifies the work input required. Real compressors/pumps require more work than the ideal isentropic process due to inefficiencies.
    *   For a centrifugal pump, $\eta_c$ relates the ideal head rise to the actual head rise.
    *   For a compressor, $\eta_c$ relates the ideal temperature rise (isentropic) to the actual temperature rise for a given pressure ratio.

**CO1 Alignment:** Use the fundamental principles of fluid mechanics and thermodynamics to find the efficiencies of power consuming turbomachines. (Knowledge Level: K3)

---

### **4. Key Concepts and Definitions Summary**

*   **Turbomachine:** Machine that transfers energy between rotor and fluid via continuous flow.
*   **Steady Flow Energy Equation (SFEE):** Energy conservation equation for steady flow processes.
*   **Specific Enthalpy (h):** A thermodynamic property representing the total energy per unit mass, including internal energy and flow work ($h = u + Pv$).
*   **Stagnation Enthalpy:** $h_0 = h + \frac{V^2}{2}$. The SFEE can be written as a balance of stagnation enthalpies and work.
*   **Adiabatic Process:** A process where no heat transfer occurs ($\dot{Q} = 0$).
*   **Isentropic Process:** A reversible adiabatic process ($\Delta s = 0$).
*   **Isentropic Efficiency:** Ratio of ideal (isentropic) performance to actual performance.
    *   Turbine: $\eta_t = \frac{\text{Actual Work}}{\text{Isentropic Work}}$
    *   Compressor/Pump: $\eta_c = \frac{\text{Isentropic Work}}{\text{Actual Work}}$
*   **Irreversibility:** Processes that increase entropy and reduce efficiency (friction, shocks, etc.).

---

### **5. Practice Questions and Exercises**

**Question 1:**
A turbine operates with a steady flow of steam. At the inlet, the specific enthalpy is $h_1 = 3000 \, \text{kJ/kg}$ and the velocity is $V_1 = 50 \, \text{m/s}$. At the outlet, the specific enthalpy is $h_2 = 2500 \, \text{kJ/kg}$ and the velocity is $V_2 = 100 \, \text{m/s}$. Assuming the process is adiabatic, calculate the specific work output of the turbine.

**Answer:**
Using the SFEE for a turbine (adiabatic, neglecting potential energy):
$w_{\text{shaft}} = (h_1 + \frac{V_1^2}{2}) - (h_2 + \frac{V_2^2}{2})$

Convert enthalpies to J/kg: $h_1 = 3000 \times 10^3 \, \text{J/kg}$, $h_2 = 2500 \times 10^3 \, \text{J/kg}$.

$w_{\text{shaft}} = (3000 \times 10^3 \, \text{J/kg} + \frac{(50 \, \text{m/s})^2}{2}) - (2500 \times 10^3 \, \text{J/kg} + \frac{(100 \, \text{m/s})^2}{2})$
$w_{\text{shaft}} = (3000000 + 1250) - (2500000 + 5000)$
$w_{\text{shaft}} = 3001250 - 2505000$
$w_{\text{shaft}} = 496250 \, \text{J/kg} = 496.25 \, \text{kJ/kg}$

**Question 2:**
A compressor takes in air at a pressure of 1 atm and $20^\circ\text{C}$. It discharges air at 5 atm. If the inlet specific enthalpy is $h_1 = 293.2 \, \text{kJ/kg}$ and the outlet specific enthalpy is $h_2 = 377.1 \, \text{kJ/kg}$, and the specific work input to the compressor is $w_a = 95 \, \text{kJ/kg}$. If the isentropic specific work input required for this compression is $w_s = 80 \, \text{kJ/kg}$, calculate the isentropic efficiency of the compressor.

**Answer:**
The isentropic efficiency of a compressor is given by:
$\eta_c = \frac{w_{s}}{w_{a}}$

Given:
$w_s = 80 \, \text{kJ/kg}$
$w_a = 95 \, \text{kJ/kg}$

$\eta_c = \frac{80 \, \text{kJ/kg}}{95 \, \text{kJ/kg}} \approx 0.842$

The isentropic efficiency of the compressor is approximately 84.2%.

**Question 3:**
For an ideal gas with constant specific heat $c_p$, the SFEE can be written in terms of temperature as:
$w_{\text{shaft}} = c_p(T_1 - T_2) + \frac{V_1^2 - V_2^2}{2}$ (for a turbine)
and
$w_{\text{shaft}} = c_p(T_2 - T_1) + \frac{V_2^2 - V_1^2}{2}$ (for a compressor/pump, work input is positive).

Consider a gas turbine stage where air enters at $T_1 = 1200 \, \text{K}$, $V_1 = 150 \, \text{m/s}$. The ideal isentropic expansion to the outlet pressure results in $T_{2s} = 800 \, \text{K}$. The actual turbine outlet temperature is $T_2 = 850 \, \text{K}$, and the outlet velocity is $V_2 = 200 \, \text{m/s}$. Assume $c_p = 1.005 \, \text{kJ/kg}\cdot\text{K}$. Calculate the isentropic efficiency of this turbine stage.

**Answer:**
For a turbine, $\eta_t = \frac{h_1 - h_2}{h_1 - h_{2s}}$.
For an ideal gas with constant $c_p$, $h = c_pT$.
So, $\eta_t = \frac{c_p(T_1 - T_2)}{c_p(T_1 - T_{2s})} = \frac{T_1 - T_2}{T_1 - T_{2s}}$

Given:
$T_1 = 1200 \, \text{K}$
$T_2 = 850 \, \text{K}$
$T_{2s} = 800 \, \text{K}$

$\eta_t = \frac{1200 \, \text{K} - 850 \, \text{K}}{1200 \, \text{K} - 800 \, \text{K}} = \frac{350 \, \text{K}}{400 \, \text{K}} = 0.875$

The isentropic efficiency of the turbine stage is 87.5%.

---

### **6. Important Points to Remember**

*   The **First Law of Thermodynamics** provides the framework for calculating the *ideal* energy transfer (work) in turbomachines, based on changes in enthalpy and kinetic energy.
*   The **Second Law of Thermodynamics** introduces the concept of **entropy** and the inevitability of **irreversibilities** in real processes.
*   **Isentropic efficiency** is the key metric for evaluating how close a real turbomachine is to its ideal performance.
*   For **turbines**, actual work output is *less* than isentropic work output ($\eta_t < 1$).
*   For **compressors/pumps**, actual work input is *greater* than isentropic work input ($\eta_c < 1$).
*   Understanding the sources of irreversibility (friction, shocks, etc.) is crucial for improving turbomachine design and performance.
*   The SFEE can be simplified by neglecting potential energy changes in most practical turbomachine applications.

---

### **7. Alignment with Course Outcomes**

*   **CO1: Use the fundamental principles of fluid mechanics and thermodynamics and find the efficiencies of power generating and power consuming turbomachines. (Knowledge Level: K3)**
    *   This entire topic directly addresses CO1 by applying the First and Second Laws of Thermodynamics to define and calculate isentropic efficiencies for both turbines and compressors/pumps. The practice questions reinforce this application.

---
This concludes Module 1's topic on the Thermodynamics of Fluid Flow in Turbo Machines. Understanding these fundamental principles is essential for analyzing the performance of all types of turbomachines.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
