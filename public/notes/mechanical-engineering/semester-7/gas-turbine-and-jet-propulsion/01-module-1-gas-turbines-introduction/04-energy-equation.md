---
title: "energy equation"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 1: Gas Turbines – Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463c8e"
status: "completed"
scrapedAt: "2026-05-20T18:13:36.333Z"
---
# GAS TURBINE AND JET PROPULSION - Module 1: Gas Turbines – Introduction

## Topic: Energy Equation

This module introduces the fundamental principles of gas turbines, and understanding the energy equation is crucial for analyzing the behavior of working fluids within these machines. This topic will equip you with the ability to track energy transformations and apply thermodynamic principles to gas turbine components.

---

### 1. Introduction to Energy in Fluid Flow

*   **What is Energy?** Energy is the capacity to do work. In the context of fluid flow, we consider several forms of energy possessed by the fluid.
*   **Forms of Energy in a Fluid:**
    *   **Internal Energy ($U$):** Energy associated with the molecular motion and configuration within the fluid. It's a state function dependent on temperature and phase. (Referenced in Ganesan, Yahya, Mathur, Cohen)
    *   **Kinetic Energy (KE):** Energy due to the motion of the fluid. For a fluid element of mass $m$ moving with velocity $V$, $KE = \frac{1}{2}mV^2$. (Referenced in Ganesan, Yahya, Mathur, Cohen)
    *   **Potential Energy (PE):** Energy due to the position of the fluid in a gravitational field. For a fluid element of mass $m$ at height $z$, $PE = mgz$. (Referenced in Ganesan, Yahya, Mathur, Cohen)
    *   **Flow Energy or Pressure Energy ($PV$):** Energy required to move a fluid element into or out of a control volume against a pressure difference. It's the product of pressure and specific volume ($P \times v$) per unit mass, or $Pv$ for specific volume. (Referenced in Ganesan, Yahya, Mathur, Cohen)
*   **Total Energy per Unit Mass ($e$):** The sum of these energies per unit mass of the fluid.
    $e = u + \frac{1}{2}V^2 + gz + Pv$
    where:
    *   $u$ is specific internal energy (J/kg)
    *   $V$ is velocity (m/s)
    *   $g$ is acceleration due to gravity (m/s²)
    *   $z$ is elevation (m)
    *   $P$ is pressure (Pa)
    *   $v$ is specific volume (m³/kg)

### 2. The First Law of Thermodynamics for Open Systems (Control Volumes)

Gas turbines operate as open systems, meaning mass flows through them. The First Law of Thermodynamics for a steady-flow system (where properties at any point do not change with time) is the basis for the energy equation.

*   **Steady Flow Energy Equation (SFEE):** For a single inlet and single outlet system, the rate of energy entering the system must equal the rate of energy leaving the system, considering heat and work transfer.
    *   **Rate of Energy In = Rate of Energy Out**

    The SFEE can be expressed per unit mass flow rate as:

    $\dot{E}_{in} = \dot{E}_{out}$

    $\dot{Q} + \dot{m}(h_1 + \frac{V_1^2}{2} + gz_1) = \dot{W} + \dot{m}(h_2 + \frac{V_2^2}{2} + gz_2)$

    Where:
    *   $\dot{Q}$ is the net rate of heat transfer into the system (W)
    *   $\dot{W}$ is the net rate of work done by the system (W)
    *   $\dot{m}$ is the mass flow rate (kg/s)
    *   $h$ is specific enthalpy (J/kg) = $u + Pv$ (This is a key definition often used interchangeably with the internal energy and flow energy combination, simplifying the equation)
    *   Subscripts 1 and 2 refer to the inlet and outlet conditions, respectively.

    **Important Note:** Enthalpy ($h$) is a convenient property that combines internal energy ($u$) and flow energy ($Pv$). So, the total energy per unit mass can also be written as:
    $e = h + \frac{1}{2}V^2 + gz$

    Therefore, the SFEE per unit mass becomes:
    $q + (h_1 + \frac{V_1^2}{2} + gz_1) = w + (h_2 + \frac{V_2^2}{2} + gz_2)$

    Where:
    *   $q$ is heat transfer per unit mass (J/kg)
    *   $w$ is work transfer per unit mass (J/kg)

*   **Simplifications of SFEE:**
    *   **Adiabatic Processes ($q=0$):** Common in turbines and compressors where heat transfer is negligible.
        $h_1 + \frac{V_1^2}{2} + gz_1 = w_{turbine} + h_2 + \frac{V_2^2}{2} + gz_2$ (Work done *by* the turbine)
        $h_1 + \frac{V_1^2}{2} + gz_1 = w_{compressor} + h_2 + \frac{V_2^2}{2} + gz_2$ (Work done *on* the compressor)
        (Referenced in Ganesan, Yahya, Mathur, Cohen)

    *   **Negligible Velocity and Potential Energy Changes:** In many analyses of components like heat exchangers or throttling devices, the changes in kinetic and potential energy are very small compared to the enthalpy changes.
        $q + h_1 = w + h_2$

    *   **Throttling Process:** If a process is adiabatic ($q=0$) and no work is done ($w=0$), then $h_1 = h_2$. This is known as a throttling process (e.g., expansion through a valve).
        $h_1 + \frac{V_1^2}{2} + gz_1 = h_2 + \frac{V_2^2}{2} + gz_2$
        If velocity and potential energy changes are also negligible: $h_1 = h_2$. (Referenced in Ganesan, Yahya)

*   **Work Transfer in Turbines and Compressors:**
    *   **Turbine Work ($w_{turbine}$):** Work done *by* the fluid. The SFEE for a turbine would be:
        $w_{turbine} = (h_1 - h_2) + \frac{V_1^2 - V_2^2}{2} + g(z_1 - z_2)$
        The term $(h_1 - h_2)$ is the **enthalpy drop**, which is the primary source of work in a gas turbine.
        (Referenced in Ganesan, Yahya, Mathur, Cohen)

    *   **Compressor Work ($w_{compressor}$):** Work done *on* the fluid (negative work output from the system's perspective, or positive work input). The SFEE for a compressor would be:
        $w_{compressor} = (h_2 - h_1) + \frac{V_2^2 - V_1^2}{2} + g(z_2 - z_1)$
        The term $(h_2 - h_1)$ is the **enthalpy rise**, which requires work input.
        (Referenced in Ganesan, Yahya, Mathur, Cohen)

### 3. Applying the Energy Equation to Gas Turbine Components

The energy equation is applied to each component of a gas turbine to understand its function and performance.

*   **Compressor:**
    *   **Purpose:** To increase the pressure and enthalpy of the working fluid (air).
    *   **SFEE Application:** As derived above, work is input to increase enthalpy and velocity.
        $w_{compressor} = (h_2 - h_1) + \frac{V_2^2 - V_1^2}{2} + g(z_2 - z_1)$
    *   **Assumption:** For typical compressors, velocity changes are significant, and potential energy changes are negligible.
        $w_{compressor} \approx (h_2 - h_1) + \frac{V_2^2 - V_1^2}{2}$
    *   **Ideal vs. Real Compressor:** Ideal compressors operate isentropically ($s_1 = s_2$), resulting in a minimum enthalpy rise for a given pressure ratio. Real compressors have inefficiencies, leading to a higher enthalpy rise (and lower specific volume) for the same pressure ratio. (Connects to CO1, CO2, CO3)

*   **Combustor:**
    *   **Purpose:** To add heat to the compressed air by burning fuel.
    *   **SFEE Application:** Heat is added ($\dot{Q}$ is positive), and work done by the fluid is usually zero ($\dot{W}=0$). Velocity and potential energy changes are often small compared to enthalpy change.
        $q_{in} \approx h_2 - h_1$
        (Referenced in Ganesan, Yahya, Mathur, Cohen)
    *   **Note:** This is a simplified view; combustion is a complex process involving chemical reactions. The heat addition is typically modeled as a steady-state process.

*   **Turbine:**
    *   **Purpose:** To extract work from the high-temperature, high-pressure gas exiting the combustor.
    *   **SFEE Application:** Work is done *by* the fluid, and heat transfer is usually negligible ($q \approx 0$) for adiabatic expansion.
        $w_{turbine} = (h_1 - h_2) + \frac{V_1^2 - V_2^2}{2} + g(z_1 - z_2)$
    *   **Assumption:** For typical turbines, enthalpy drop is the dominant term. Velocity changes can be significant as gas expands, and potential energy changes are usually negligible.
        $w_{turbine} \approx (h_1 - h_2) + \frac{V_1^2 - V_2^2}{2}$
    *   **Ideal vs. Real Turbine:** Ideal turbines operate isentropically ($s_1 = s_2$), resulting in the maximum enthalpy drop for a given pressure drop. Real turbines have inefficiencies, leading to a lower enthalpy drop (and thus less work output) for the same pressure drop. (Connects to CO1, CO2, CO3)

*   **Nozzle (for Jet Propulsion):**
    *   **Purpose:** To accelerate the gas to produce thrust.
    *   **SFEE Application:** No work is done ($w=0$), and heat transfer is usually negligible ($q=0$) in an adiabatic nozzle. The primary energy conversion is from enthalpy and kinetic energy to kinetic energy.
        $h_1 + \frac{V_1^2}{2} + gz_1 = h_2 + \frac{V_2^2}{2} + gz_2$
    *   **Assumption:** Potential energy change is negligible.
        $h_1 + \frac{V_1^2}{2} = h_2 + \frac{V_2^2}{2}$
    *   **Ideal Nozzle:** Ideal expansion continues to the lowest possible pressure (ambient pressure for an open jet). This maximizes the exit velocity, leading to higher thrust. (Connects to CO4)

### 4. Key Concepts and Definitions Recap

*   **Enthalpy ($h = u + Pv$):** A thermodynamic property representing the total heat content of a system per unit mass.
*   **Specific Enthalpy Drop ($\Delta h = h_1 - h_2$):** The reduction in enthalpy, which is directly related to the work output of a turbine.
*   **Specific Enthalpy Rise ($\Delta h = h_2 - h_1$):** The increase in enthalpy, which is directly related to the work input to a compressor.
*   **Steady Flow Energy Equation (SFEE):** The application of the First Law of Thermodynamics to open systems operating at steady state, accounting for heat, work, and energy transfer with mass flow.
*   **Adiabatic Process:** A process where there is no heat transfer ($q=0$).

### 5. Practice Questions and Exercises

**Question 1:**
Air enters a gas turbine compressor at a rate of 10 kg/s with a velocity of 50 m/s, specific enthalpy of 300 kJ/kg, and negligible potential energy. The air leaves the compressor at a velocity of 150 m/s with a specific enthalpy of 450 kJ/kg. If the compressor operates adiabatically, calculate the work input per unit mass and the total power required by the compressor.

**Answer 1:**
Using the SFEE for a compressor with negligible potential energy:
$w_{compressor} = (h_2 - h_1) + \frac{V_2^2 - V_1^2}{2}$

Given:
$h_1 = 300 \text{ kJ/kg} = 300 \times 10^3 \text{ J/kg}$
$h_2 = 450 \text{ kJ/kg} = 450 \times 10^3 \text{ J/kg}$
$V_1 = 50 \text{ m/s}$
$V_2 = 150 \text{ m/s}$

Work input per unit mass ($w_{compressor}$):
$w_{compressor} = (450 \times 10^3 - 300 \times 10^3) + \frac{(150)^2 - (50)^2}{2}$
$w_{compressor} = 150 \times 10^3 + \frac{22500 - 2500}{2}$
$w_{compressor} = 150 \times 10^3 + \frac{20000}{2}$
$w_{compressor} = 150 \times 10^3 + 10 \times 10^3$
$w_{compressor} = 160 \times 10^3 \text{ J/kg} = 160 \text{ kJ/kg}$

Total power required by the compressor ($P$):
$P = \dot{m} \times w_{compressor}$
$P = 10 \text{ kg/s} \times 160 \times 10^3 \text{ J/kg}$
$P = 1600 \times 10^3 \text{ W} = 1.6 \text{ MW}$

**Question 2:**
Gas enters a turbine at a pressure of 10 bar, temperature of 1500 K, and velocity of 100 m/s. It leaves at a pressure of 1 bar, temperature of 900 K, and velocity of 300 m/s. The mass flow rate is 5 kg/s. Assume specific heat at constant pressure ($c_p$) for the gas is 1.15 kJ/kg·K. If the potential energy changes are negligible and heat loss to the surroundings is 10 kJ/kg, calculate the work output per unit mass of the turbine and the total power developed.

**Answer 2:**
First, calculate the change in specific enthalpy using the given $c_p$ and temperature difference:
$\Delta h = h_1 - h_2 = c_p (T_1 - T_2)$
$\Delta h = 1.15 \text{ kJ/kg·K} \times (1500 \text{ K} - 900 \text{ K})$
$\Delta h = 1.15 \times 600 \text{ kJ/kg} = 690 \text{ kJ/kg}$

Now, use the SFEE for a turbine:
$q + (h_1 + \frac{V_1^2}{2}) = w_{turbine} + (h_2 + \frac{V_2^2}{2})$
Rearranging to find $w_{turbine}$ per unit mass:
$w_{turbine} = (h_1 - h_2) + \frac{V_1^2 - V_2^2}{2} + q$

Given:
$h_1 - h_2 = 690 \text{ kJ/kg} = 690 \times 10^3 \text{ J/kg}$
$V_1 = 100 \text{ m/s}$
$V_2 = 300 \text{ m/s}$
$q = -10 \text{ kJ/kg}$ (Heat loss, so negative) $= -10 \times 10^3 \text{ J/kg}$

Work output per unit mass ($w_{turbine}$):
$w_{turbine} = (690 \times 10^3) + \frac{(100)^2 - (300)^2}{2} + (-10 \times 10^3)$
$w_{turbine} = 690 \times 10^3 + \frac{10000 - 90000}{2} - 10 \times 10^3$
$w_{turbine} = 690 \times 10^3 + \frac{-80000}{2} - 10 \times 10^3$
$w_{turbine} = 690 \times 10^3 - 40 \times 10^3 - 10 \times 10^3$
$w_{turbine} = 640 \times 10^3 \text{ J/kg} = 640 \text{ kJ/kg}$

Total power developed ($P_{turbine}$):
$P_{turbine} = \dot{m} \times w_{turbine}$
$P_{turbine} = 5 \text{ kg/s} \times 640 \times 10^3 \text{ J/kg}$
$P_{turbine} = 3200 \times 10^3 \text{ W} = 3.2 \text{ MW}$

### 6. Important Points to Remember

*   **Enthalpy ($h$) is key:** It simplifies the energy equation by combining internal energy and flow energy.
*   **SFEE is for open systems:** Gas turbines are open systems.
*   **Adiabatic assumption ($q=0$):** Commonly used for compressors and turbines, simplifying the SFEE.
*   **Velocity and potential energy changes:** Can be significant in turbines and nozzles but are often neglected for heat exchangers or throttling devices.
*   **Work done *by* turbine vs. work done *on* compressor:** Pay attention to the sign convention. Work done by the system (turbine) is positive output, while work done on the system (compressor) is positive input.
*   **The primary energy conversion in turbines is from enthalpy drop to mechanical work.**
*   **The primary energy conversion in nozzles is from enthalpy and kinetic energy to kinetic energy.**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 7. Textbook and Reference Integration

This topic draws heavily from fundamental thermodynamic principles as presented in the core textbooks:
*   **Ganesan (2017):** Provides a strong foundation in the First Law of Thermodynamics and its application to various thermodynamic cycles and machinery, including gas turbines.
*   **Yahya (2011):** Offers detailed explanations of the Steady Flow Energy Equation and its use in analyzing components like compressors and turbines.
*   **Mathur & Mathur (2010):** Covers the basic principles of energy transfer and their relevance to propulsion systems, setting the stage for jet propulsion.
*   **Cohen & Rogers (2019):** Offers a more advanced and in-depth theoretical treatment of gas turbine theory, including detailed derivations and applications of the energy equation in various contexts.

### 8. Alignment with Course Outcomes

*   **CO1: To apply the principles of thermodynamics and fluid dynamics to understand the performance and efficiency of various gas turbine cycles.** (Knowledge Level: K3)
    *   This topic directly addresses this CO by providing the foundational energy equation, which is the basis for analyzing energy flows and transformations within gas turbine cycles. Understanding how energy is conserved and converted in each component (compressor, combustor, turbine) allows for the calculation of work output and efficiency.

*   **CO2: To analyze the performance characteristics and efficiencies of axial flow compressors and reaction turbines** (Knowledge Level: K4)
    *   While this topic focuses on the energy equation, it lays the groundwork for CO2. The energy equation is used to determine the ideal and actual work input to compressors and work output from turbines. Subsequent analysis of efficiencies will build upon the work calculated using this equation. Understanding the enthalpy changes is crucial for calculating isentropic efficiencies.

*   **CO3: To analyse the performance of gas turbine systems by understanding the characteristics of various components.** (Knowledge Level: K4)
    *   This is a direct application of the energy equation. By applying it to the compressor, combustor, and turbine, we understand how energy is added or extracted, how enthalpy and kinetic energy change, and how these changes affect the overall performance of the gas turbine.

*   **CO4: To understand the principles and characteristics of jet and rocket propulsion systems.** (Knowledge Level: K2)
    *   The energy equation is fundamental to understanding jet propulsion, particularly its application to nozzles. The conversion of thermal energy into kinetic energy within a nozzle, as described by the energy equation, directly leads to the generation of thrust.

---
This concludes Module 1, Topic: Energy Equation. This is a critical building block for understanding all subsequent topics in Gas Turbine and Jet Propulsion. Ensure you are comfortable applying the SFEE to different components and scenarios.