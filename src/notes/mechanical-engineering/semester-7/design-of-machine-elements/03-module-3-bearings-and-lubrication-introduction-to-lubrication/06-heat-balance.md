---
title: "heat balance"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 3: Bearings and Lubrication: Introduction to lubrication"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d73"
status: "completed"
scrapedAt: "2026-05-20T18:11:02.656Z"
---
# DESIGN OF MACHINE ELEMENTS: Module 3: Bearings and Lubrication - Introduction to Lubrication: Heat Balance

## 1. Introduction to Heat Balance in Lubrication

When a bearing operates, friction between the moving surfaces generates heat. This heat must be dissipated to prevent the lubricant and bearing materials from overheating, which can lead to premature failure. The concept of **heat balance** in lubrication deals with the equilibrium between the heat generated due to friction and the heat dissipated to the surroundings.

### 1.1 Why is Heat Balance Important?

*   **Prevents Overheating:** Excessive heat can degrade the lubricant, reduce its viscosity, and lead to boundary lubrication conditions, increasing wear.
*   **Maintains Bearing Performance:** Temperature significantly affects the properties of both the lubricant and the bearing materials. Maintaining an optimal operating temperature is crucial for bearing longevity and efficiency.
*   **Ensures Reliability:** A properly understood heat balance contributes to the overall reliability of the machine element.

### 1.2 Key Concepts

*   **Heat Generated (Heat of Friction):** This is the heat produced as a direct result of friction between the moving surfaces.
*   **Heat Dissipated:** This is the heat that is transferred from the bearing assembly to the surrounding environment.
*   **Operating Temperature:** The steady-state temperature reached when the rate of heat generation equals the rate of heat dissipation.

## 2. Heat Generation (Heat of Friction)

The primary source of heat in a lubricated bearing is friction. This friction can be categorized into two main types:

### 2.1 Viscous Friction

*   **Definition:** Friction arising from the shear of the lubricant film itself. This is the dominant friction component in full-film (hydrodynamic and hydrostatic) lubrication.
*   **Factors Affecting Viscous Friction:**
    *   **Viscosity of the lubricant:** Higher viscosity leads to greater viscous friction.
    *   **Speed of relative motion:** Higher speeds increase viscous friction.
    *   **Bearing geometry:** The film thickness and the area of shear influence the friction.
    *   **Temperature:** Viscosity decreases with increasing temperature, which can have a complex effect on friction.
*   **Formula (Simplified):**
    For a journal bearing operating in hydrodynamic lubrication, the frictional torque ($\tau_f$) can be approximated as:
    $\tau_f \approx f \cdot W \cdot (D/2)$
    where:
    *   $f$ is the coefficient of friction
    *   $W$ is the applied load
    *   $D$ is the bearing diameter

    The frictional power loss ($P_f$) is then:
    $P_f = \tau_f \cdot \omega = f \cdot W \cdot (D/2) \cdot \omega$
    where $\omega$ is the angular velocity in rad/s.
    Alternatively, $P_f = \mu \cdot P \cdot v$, where $\mu$ is the dynamic viscosity, $P$ is the wetted surface area, and $v$ is the relative velocity.

    **Reference:** Bhandari, V. B. (2020), Chapter 9: Lubrication and Lubricants, specifically discussing friction in bearings. Norton, R. L. (2018), Chapter 13: Bearings, also covers friction mechanisms.

### 2.2 Surface Friction (Adhesion and Deformation)

*   **Definition:** Friction occurring at the microscopic points of contact between the asperities of the bearing surfaces, especially during boundary or mixed lubrication regimes.
*   **Factors Affecting Surface Friction:**
    *   **Surface roughness:** Rougher surfaces lead to more asperity interactions and higher friction.
    *   **Load:** Higher loads increase the contact pressure between asperities.
    *   **Lubricant properties:** Lubricants with good film strength and anti-wear additives can reduce surface friction.
    *   **Material properties:** The hardness and surface characteristics of the bearing and shaft materials play a role.
*   **Heat Generation:** This friction directly converts mechanical energy into heat at the contact points.

### 2.3 Total Heat Generated ($Q_g$)

The total heat generated is the sum of heat from viscous friction and surface friction. In many practical scenarios, especially under hydrodynamic lubrication, viscous friction is the dominant component.

$Q_g = P_f$ (primarily viscous friction power loss)

The unit of heat generated is typically Watts (W) or Joules per second (J/s), which is equivalent to power.

## 3. Heat Dissipation ($Q_d$)

Heat dissipation is the process by which the generated heat is transferred away from the bearing to the surroundings. This occurs through various heat transfer mechanisms:

### 3.1 Conduction

*   **Mechanism:** Heat transfer through direct contact between the bearing material and its supporting structure, housing, or shaft.
*   **Factors:**
    *   Thermal conductivity of the materials.
    *   Temperature difference between the bearing and the surrounding material.
    *   Contact area and path for heat flow.

### 3.2 Convection

*   **Mechanism:** Heat transfer through the movement of a fluid (usually air or the lubricant itself) over the bearing surfaces.
    *   **Natural Convection:** Occurs when fluid motion is driven by density differences due to temperature variations (e.g., hot air rising).
    *   **Forced Convection:** Occurs when fluid motion is driven by an external force (e.g., a fan or pump circulating oil).
*   **Factors:**
    *   Temperature difference between the bearing surface and the fluid.
    *   Convective heat transfer coefficient ($h$), which depends on fluid properties, flow velocity, and geometry.
    *   Surface area exposed to the fluid.

### 3.3 Radiation

*   **Mechanism:** Heat transfer through electromagnetic waves. This is generally less significant than conduction and convection in most bearing applications, especially at lower temperatures.
*   **Factors:**
    *   Surface emissivity of the bearing.
    *   Temperature of the bearing and surrounding surfaces.
    *   Surface area.

### 3.4 Lubricant Cooling (Special Case of Convection)

*   **Mechanism:** If the bearing is lubricated by a circulating oil system, the oil can carry away a significant amount of heat. The oil enters at a lower temperature, absorbs heat from the bearing surfaces, and exits at a higher temperature to a heat exchanger or reservoir.
*   **Factors:**
    *   Flow rate of the lubricant.
    *   Specific heat of the lubricant.
    *   Temperature rise of the lubricant.
    *   Efficiency of any external cooling system.

### 3.5 Overall Heat Dissipation

The total heat dissipated is the sum of heat lost through conduction, convection, and radiation.

$Q_d = Q_{conduction} + Q_{convection} + Q_{radiation}$

The rate of heat dissipation is often expressed as:
$Q_d = U \cdot A \cdot \Delta T$
where:
*   $U$ is the overall heat transfer coefficient.
*   $A$ is the surface area for heat transfer.
*   $\Delta T$ is the temperature difference between the bearing and the surroundings.

**Reference:** Bhandari, V. B. (2020), Chapter 9: Lubrication and Lubricants, discusses heat transfer in bearings. Sharma, P. C., & Agarwal, D. K. (2017), Chapter 11: Bearings, also covers heat dissipation methods.

## 4. Heat Balance Equation and Operating Temperature

The heat balance is achieved when the rate of heat generated equals the rate of heat dissipated.

$Q_g = Q_d$

Substituting the expressions:
$P_f = U \cdot A \cdot (T_{bearing} - T_{ambient})$

Rearranging to find the bearing temperature ($T_{bearing}$):

$T_{bearing} - T_{ambient} = \frac{P_f}{U \cdot A}$

$T_{bearing} = T_{ambient} + \frac{P_f}{U \cdot A}$

Where:
*   $T_{bearing}$ is the operating temperature of the bearing.
*   $T_{ambient}$ is the ambient temperature of the surroundings.
*   $P_f$ is the heat generated due to friction (power loss).
*   $U$ is the overall heat transfer coefficient.
*   $A$ is the surface area available for heat dissipation.

**Important Note:** In many real-world scenarios, determining $U$ and $A$ precisely can be complex. Design data handbooks and empirical correlations are often used to estimate these values.

**Reference:** Bhandari, V. B. (2020), Machine Design Data Book, may contain data for heat transfer coefficients and surface areas for different bearing types.

### 4.1 Factors Affecting Operating Temperature

*   **Load ($W$):** Higher load increases friction, thus increasing heat generation.
*   **Speed ($\omega$):** Higher speed generally increases viscous friction, leading to more heat.
*   **Lubricant Viscosity ($\mu$):** Higher viscosity increases viscous friction.
*   **Bearing Clearance:** Affects the film thickness and hence friction.
*   **Bearing Geometry (Diameter, Length):** Influences frictional torque and surface area for dissipation.
*   **Cooling System Efficiency:** The effectiveness of heat dissipation mechanisms (e.g., oil flow rate, fan speed).
*   **Ambient Temperature ($T_{ambient}$):** Directly influences the equilibrium temperature.

## 5. Design Implications of Heat Balance

Understanding heat balance is crucial for bearing design:

*   **Lubricant Selection:** The operating temperature influences the required viscosity and thermal stability of the lubricant.
*   **Bearing Size and Type:** Larger bearings or those with better cooling can dissipate more heat, allowing for higher loads or speeds.
*   **Cooling System Design:** If natural dissipation is insufficient, active cooling systems (oil circulation, fans) might be necessary.
*   **Material Selection:** Bearing materials must withstand the operating temperature without significant loss of strength or deformation.
*   **Oil Flow Rate Calculation (for forced lubrication):** The required oil flow rate can be calculated to carry away the generated heat.

### 5.1 Calculating Required Oil Flow Rate

If the operating temperature ($T_{bearing}$) needs to be kept below a certain limit, the required oil flow rate ($Q_{oil}$) can be calculated using the heat balance equation, assuming the oil absorbs most of the heat:

$Q_g = m_{oil} \cdot c_{oil} \cdot \Delta T_{oil}$

Where:
*   $Q_g$ is the heat generated (Watts).
*   $m_{oil}$ is the mass flow rate of oil (kg/s).
*   $c_{oil}$ is the specific heat of the oil (J/kg·K).
*   $\Delta T_{oil}$ is the allowable temperature rise of the oil ($T_{bearing} - T_{oil,in}$).

Since mass flow rate is volume flow rate ($\dot{V}_{oil}$) times density ($\rho_{oil}$):
$m_{oil} = \rho_{oil} \cdot \dot{V}_{oil}$

So, $Q_g = \rho_{oil} \cdot \dot{V}_{oil} \cdot c_{oil} \cdot \Delta T_{oil}$

Rearranging for volume flow rate:
$\dot{V}_{oil} = \frac{Q_g}{\rho_{oil} \cdot c_{oil} \cdot \Delta T_{oil}}$

**Reference:** Norton, R. L. (2018), Chapter 13: Bearings, often provides methods for calculating oil flow rates for cooling.

## 6. Examples and Applications

*   **Automotive Engine Bearings (Crankshaft, Connecting Rod):** These bearings operate under high loads and speeds. Lubrication is critical for both load support and heat dissipation. The oil flow is essential to keep temperatures within limits.
*   **High-Speed Machine Tool Spindles:** These often use hydrostatic or hydrodynamic bearings. Heat generation due to viscous friction can be substantial, requiring efficient cooling, sometimes with chilled oil.
*   **Industrial Gearboxes:** Bearings in gearboxes also generate heat due to friction and the churning of lubricant. Heat balance is considered to prevent overheating of gears and bearings.

## 7. Practice Questions and Answers

**Question 1:** A journal bearing has a frictional power loss of 500 Watts. If the heat is dissipated by convection to the surroundings at a rate of $20 W/m^2 \cdot K$ through an effective area of $0.1 m^2$, what is the approximate temperature rise of the bearing above ambient temperature?

**Answer 1:**
Given:
Heat Generated ($Q_g$) = 500 W
Overall Heat Transfer Coefficient ($U$) = $20 W/m^2 \cdot K$
Effective Area ($A$) = $0.1 m^2$

From the heat balance equation: $Q_g = U \cdot A \cdot \Delta T$
$500 W = (20 W/m^2 \cdot K) \cdot (0.1 m^2) \cdot \Delta T$
$500 W = 2 W/K \cdot \Delta T$
$\Delta T = \frac{500 W}{2 W/K} = 250 K$

The temperature rise of the bearing above ambient temperature is approximately **250 K** (or 250 °C).

**Question 2:** A bearing generates 300 Watts of heat. The lubricant used has a density of $850 kg/m^3$ and a specific heat of $2000 J/kg \cdot K$. If the oil enters the bearing at $40^\circ C$ and is allowed to leave at a maximum of $60^\circ C$, what is the required minimum oil flow rate in liters per minute (LPM)?

**Answer 2:**
Given:
Heat Generated ($Q_g$) = 300 W
Density of oil ($\rho_{oil}$) = $850 kg/m^3$
Specific heat of oil ($c_{oil}$) = $2000 J/kg \cdot K$
Allowable temperature rise of oil ($\Delta T_{oil}$) = $60^\circ C - 40^\circ C = 20^\circ C$ (or 20 K)

From the heat balance equation for oil cooling: $Q_g = \rho_{oil} \cdot \dot{V}_{oil} \cdot c_{oil} \cdot \Delta T_{oil}$

We need to find $\dot{V}_{oil}$ in $m^3/s$ first.
$300 W = (850 kg/m^3) \cdot \dot{V}_{oil} \cdot (2000 J/kg \cdot K) \cdot (20 K)$
$300 = 34,000,000 \cdot \dot{V}_{oil}$
$\dot{V}_{oil} = \frac{300}{34,000,000} m^3/s \approx 8.82 \times 10^{-6} m^3/s$

Now, convert to Liters per Minute (LPM):
$1 m^3 = 1000$ Liters
$1$ minute $= 60$ seconds

$\dot{V}_{oil} = (8.82 \times 10^{-6} m^3/s) \times (\frac{1000 L}{1 m^3}) \times (\frac{60 s}{1 min})$
$\dot{V}_{oil} \approx 0.529$ LPM

The required minimum oil flow rate is approximately **0.53 LPM**.

## 8. Important Points to Remember

*   **Heat Balance is Equilibrium:** Heat generated must equal heat dissipated for a stable operating temperature.
*   **Friction is the Primary Heat Source:** Viscous friction in the lubricant film is often the dominant factor.
*   **Heat Dissipation Mechanisms:** Conduction, convection, and radiation all contribute to cooling.
*   **Operating Temperature is Critical:** It impacts lubricant life, material properties, and overall bearing performance.
*   **Design Tools:** Heat balance calculations are essential for selecting appropriate lubricants, bearing sizes, and cooling systems.
*   **Empirical Data is Useful:** Design data handbooks provide crucial coefficients and correlations for practical calculations.

## 9. Alignment with Course Outcomes

This topic directly supports the development of **CO3: Develop of Sliding contact bearing for industrial applications.** Understanding heat balance is fundamental to designing bearings that can operate reliably under specific load and speed conditions, ensuring they don't overheat and fail prematurely. It also indirectly contributes to **CO1** and **CO2** by understanding the thermal aspects within a larger transmission or engine system.

This section provides a comprehensive overview of the heat balance concept in bearing lubrication, covering its fundamental principles, influencing factors, and practical design implications, as per the learning outcomes and specified textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
