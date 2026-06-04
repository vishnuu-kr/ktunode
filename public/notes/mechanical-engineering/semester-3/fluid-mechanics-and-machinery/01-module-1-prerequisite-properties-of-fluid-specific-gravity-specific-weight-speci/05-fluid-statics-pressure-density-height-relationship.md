---
title: "Fluid statics: Pressure, density, height relationship."
subject: "FLUID MECHANICS AND MACHINERY"
module: "Module 1: Prerequisite: Properties of fluid: Specific gravity, Specific Weight, Specific Volume, Dynamic and Kinematic Viscosity."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462d17"
status: "completed"
scrapedAt: "2026-05-20T17:49:20.739Z"
---
# Fluid Mechanics and Machinery - Module 1: Prerequisite: Properties of Fluid & Fluid Statics

## Module Overview

This module serves as the foundation for understanding fluid mechanics. We will revisit fundamental fluid properties and introduce the principles of fluid statics, focusing on the relationship between pressure, density, and height. This knowledge is crucial for understanding the behavior of fluids at rest and forms the basis for subsequent modules dealing with fluid dynamics and machinery.

**Course Outcomes Addressed in this Module:**

*   **CO1: Identify the fundamental fluid properties, their relationships and apply them to estimate the fluid pressure and hydrostatic forces on bodies (Knowledge Level: K3)** - This module directly addresses the identification of fluid properties and their relationship to pressure. While hydrostatic forces are not explicitly covered in this topic, the understanding of pressure is a prerequisite for it.

## Topic 1: Fluid Statics: Pressure, Density, Height Relationship

### 1.1 Introduction to Fluid Statics

Fluid statics is the branch of fluid mechanics that deals with fluids at rest. In this state, the fluid is not in motion relative to the reference frame. This means that there are no shear stresses within the fluid, and the only forces acting are pressure forces and body forces (like gravity).

**Key Concept:** In a fluid at rest, the pressure at any point is the same in all directions.

### 1.2 Pressure (P)

**Definition:** Pressure is defined as the force acting per unit area. In fluid statics, it is the force exerted by the fluid per unit area of a surface.

*   **Units:**
    *   SI: Pascals (Pa) or Newtons per square meter ($N/m^2$)
    *   Commonly used: kiloPascals (kPa), megaPascals (MPa), bar, atmosphere (atm)
    *   Imperial: Pounds per square inch (psi)

*   **Mathematical Representation:**
    $P = \frac{F}{A}$
    Where:
    *   $P$ = Pressure
    *   $F$ = Force perpendicular to the surface
    *   $A$ = Area

**Important Note:** Pressure is a scalar quantity.

### 1.3 Density ($\rho$)

**Definition:** Density is defined as mass per unit volume. It is a fundamental property that quantifies how much "stuff" is packed into a given space.

*   **Units:**
    *   SI: Kilograms per cubic meter ($kg/m^3$)
    *   Imperial: Pounds per cubic foot ($lb/ft^3$)

*   **Mathematical Representation:**
    $\rho = \frac{m}{V}$
    Where:
    *   $\rho$ = Density
    *   $m$ = Mass
    *   $V$ = Volume

**Relationship with Specific Gravity, Specific Weight, and Specific Volume:**

*   **Specific Gravity (SG):** The ratio of the density of a fluid to the density of a reference substance, usually water at 4°C. It is a dimensionless quantity.
    $SG = \frac{\rho_{fluid}}{\rho_{water}}$
    *   **Reference:** Cengel & Cimbala (2013) highlights SG as a convenient way to express fluid density relative to water.
    *   **Example:** SG of mercury is approximately 13.6, meaning mercury is 13.6 times denser than water.

*   **Specific Weight ($\gamma$)** The weight of a unit volume of a substance. It is the product of density, acceleration due to gravity, and the specific gravity of the fluid.
    $\gamma = \rho g$
    Where:
    *   $\gamma$ = Specific weight
    *   $\rho$ = Density
    *   $g$ = Acceleration due to gravity (approximately $9.81 m/s^2$ at sea level)
    *   **Units:**
        *   SI: Newtons per cubic meter ($N/m^3$)
        *   Imperial: Pounds per cubic foot ($lb/ft^3$)
    *   **Relationship with Specific Gravity:** $\gamma = SG \cdot \gamma_{water}$
    *   **Reference:** Som & Som (2011) emphasizes that specific weight is often used in engineering calculations because it directly relates to weight.

*   **Specific Volume (v)** The volume occupied by a unit mass of a substance. It is the reciprocal of density.
    $v = \frac{1}{\rho}$
    *   **Units:**
        *   SI: Cubic meters per kilogram ($m^3/kg$)
        *   Imperial: Cubic feet per pound ($ft^3/lb$)
    *   **Reference:** Bansal (2005) covers specific volume as a fundamental property, particularly useful in thermodynamic analyses of fluids.

### 1.4 Pressure Variation with Depth (Hydrostatic Pressure)

In a fluid at rest, the pressure increases with depth. This is due to the weight of the fluid above that point.

**Derivation of the Fundamental Hydrostatic Equation:**

Consider a small cylindrical element of fluid of height $dh$ and cross-sectional area $dA$, at a depth $h$ from the free surface.

*   **Forces acting on the element:**
    1.  **Pressure force from above:** $P \cdot dA$ acting downwards.
    2.  **Pressure force from below:** $(P + dP) \cdot dA$ acting upwards.
    3.  **Weight of the fluid element:** $dW = (\rho \cdot dV) \cdot g = (\rho \cdot dA \cdot dh) \cdot g$ acting downwards.

*   **Applying Newton's First Law (Equilibrium):**
    Sum of forces in the vertical direction = 0
    $(P + dP) dA - P dA - dW = 0$
    $dP dA - (\rho dA dh) g = 0$
    $dP dA = \rho g dA dh$
    Dividing by $dA$:
    $dP = \rho g dh$

*   **Integrating to find pressure at a specific depth:**
    We can integrate this equation from a reference point (e.g., the free surface where pressure is $P_0$ and height is $h_0$) to a depth $h$ where the pressure is $P$.

    $\int_{P_0}^{P} dP = \int_{h_0}^{h} \rho g dh$

    Assuming $\rho$ and $g$ are constant over the height:
    $P - P_0 = \rho g (h - h_0)$

    Let $h$ be the depth measured from the free surface, and let the free surface be at $h=0$. Then $h_0=0$ and $P_0$ is the atmospheric pressure or some other reference pressure at the surface.
    If we consider pressure increase from the surface, then let $h$ be the depth below the surface. The pressure at depth $h$ is:

    $P = P_{surface} + \rho g h$

    If $P_{surface}$ is atmospheric pressure ($P_{atm}$), then:
    $P = P_{atm} + \rho g h$

    This equation is the **fundamental hydrostatic equation**.

**Key Points:**

*   **Pressure Increase with Depth:** The pressure in a fluid increases linearly with depth.
*   **Dependence on Fluid Density:** Denser fluids exert higher pressure at the same depth.
*   **Independence of Surface Area and Shape:** The pressure at a given depth is independent of the shape or size of the container.
*   **Pressure at a Point:** In a static fluid, pressure at a point is the same in all directions (Pascal's Law).

**References:**

*   **Cengel & Cimbala (2013):** Dedicates significant coverage to the hydrostatic equation, illustrating it with diagrams and practical examples like manometers.
*   **Som & Som (2011):** Also presents the hydrostatic equation and its derivation, emphasizing its application in pressure measurement devices.
*   **Bansal (2005):** Covers the pressure variation with depth and introduces the concept of piezometer tubes as a direct application of this principle.
*   **White (2003):** Provides a thorough mathematical treatment of pressure variation in fluids, including cases where density is not constant.

### 1.5 Types of Pressure

*   **Absolute Pressure ($P_{abs}$):** The actual pressure at a point. It is measured relative to absolute vacuum (zero pressure).
*   **Gage Pressure ($P_{gage}$):** The pressure measured relative to the local atmospheric pressure. It is positive when the absolute pressure is greater than atmospheric pressure and negative when it is less.
    $P_{abs} = P_{gage} + P_{atm}$
*   **Vacuum Pressure ($P_{vacuum}$):** The pressure below atmospheric pressure. It is essentially negative gage pressure.
    $P_{vacuum} = P_{atm} - P_{abs}$ (where $P_{abs} < P_{atm}$)

**Example:** If a tire has a gage pressure of 32 psi, and the atmospheric pressure is 14.7 psi, then the absolute pressure in the tire is $32 + 14.7 = 46.7$ psi.

### 1.6 Manometers

Manometers are devices used to measure pressure based on the principle of hydrostatic pressure. They utilize a column of liquid (usually mercury or water) whose height difference relates to the pressure difference.

**Types of Manometers:**

*   **Piezometer:** A simple tube attached to a tank or pipe, open at the top. The liquid rises in the tube to indicate the absolute pressure (if the top is in vacuum) or gage pressure (if the top is exposed to atmosphere). It's only suitable for pressures above atmospheric.
*   **U-tube Manometer:** Consists of a U-shaped tube containing a liquid. One end is connected to the pressure source, and the other is open to the atmosphere or connected to another pressure point.
*   **Inclined Manometer:** Used to measure small pressure differences by increasing the sensitivity. The tube is inclined, so a small vertical rise in the liquid column corresponds to a larger displacement along the inclined tube.

**Working Principle:** Balance of pressures at the same horizontal level in a continuous fluid.

**Reference:**
*   **Cengel & Cimbala (2013) and Som & Som (2011):** Provide detailed explanations and worked examples of how to use manometers to solve pressure-related problems.

### 1.7 Important Points to Remember

*   **Pressure in a static fluid increases with depth.**
*   **Pressure at a given depth is independent of the shape or size of the container.**
*   **Pressure is transmitted equally in all directions in a static fluid (Pascal's Law).**
*   **Manometers are practical applications of hydrostatic pressure.**
*   **Distinguish between absolute, gage, and vacuum pressures.**
*   **Density, specific weight, specific gravity, and specific volume are crucial fluid properties that influence pressure.**

## Practice Questions and Exercises

**Question 1:**
A 10-meter tall tank is filled with water. What is the pressure at the bottom of the tank? Assume the tank is open to the atmosphere at the top. (Given: Density of water = $1000 \, kg/m^3$, $g = 9.81 \, m/s^2$, $P_{atm} = 101.3 \, kPa$)

**Answer 1:**
The pressure at the bottom of the tank can be calculated using the hydrostatic equation:
$P = P_{atm} + \rho g h$
$P = 101.3 \, kPa + (1000 \, kg/m^3) \times (9.81 \, m/s^2) \times (10 \, m)$
$P = 101.3 \, kPa + 98100 \, Pa$
$P = 101.3 \, kPa + 98.1 \, kPa$
$P = 199.4 \, kPa$

**Question 2:**
A U-tube manometer is used to measure the pressure of oil with a specific gravity of 0.8. The oil is in contact with mercury ($P_{oil}$) in one arm of the U-tube. The other arm is open to the atmosphere. The difference in mercury levels between the two arms is 15 cm. If the oil column is 10 cm higher than the mercury column on the side connected to the pressure, calculate the pressure of the oil in kPa. (Given: Density of mercury = $13600 \, kg/m^3$, $g = 9.81 \, m/s^2$, $P_{atm} = 101.3 \, kPa$)

**Answer 2:**
Let $P_{oil}$ be the pressure of the oil.
The height of the oil column above the interface in the left arm is $h_{oil} = 10 \, cm = 0.1 \, m$.
The difference in mercury levels is $h_{merc} = 15 \, cm = 0.15 \, m$.

The specific weight of oil is $\gamma_{oil} = SG_{oil} \cdot \rho_{water} \cdot g = 0.8 \cdot 1000 \, kg/m^3 \cdot 9.81 \, m/s^2 = 7848 \, N/m^3$.
The specific weight of mercury is $\gamma_{merc} = \rho_{merc} \cdot g = 13600 \, kg/m^3 \cdot 9.81 \, m/s^2 = 133416 \, N/m^3$.

Equating pressures at the same horizontal level in the mercury:
$P_{oil} + \gamma_{oil} \cdot h_{oil} = P_{atm} + \gamma_{merc} \cdot h_{merc}$
$P_{oil} + (7848 \, N/m^3) \cdot (0.1 \, m) = 101300 \, Pa + (133416 \, N/m^3) \cdot (0.15 \, m)$
$P_{oil} + 784.8 \, Pa = 101300 \, Pa + 20012.4 \, Pa$
$P_{oil} + 784.8 \, Pa = 121312.4 \, Pa$
$P_{oil} = 121312.4 \, Pa - 784.8 \, Pa$
$P_{oil} = 120527.6 \, Pa$
$P_{oil} \approx 120.53 \, kPa$

**Question 3:**
Define Specific Gravity, Specific Weight, and Specific Volume. Explain their relationships with each other and with density.

**Answer 3:**
*   **Density ($\rho$):** Mass per unit volume ($m/V$). Units: $kg/m^3$.
*   **Specific Gravity (SG):** Ratio of the density of a substance to the density of a reference substance (usually water). Dimensionless. $SG = \rho_{fluid} / \rho_{water}$.
*   **Specific Weight ($\gamma$):** Weight per unit volume. $\gamma = \rho g$. Units: $N/m^3$. It can also be expressed as $\gamma = SG \cdot \gamma_{water}$.
*   **Specific Volume (v):** Volume per unit mass. $v = 1/\rho$. Units: $m^3/kg$.

Their relationships are:
*   $\gamma = \rho g$
*   $SG = \rho_{fluid} / \rho_{water}$
*   $v = 1/\rho$
*   $\gamma = SG \cdot \rho_{water} \cdot g = SG \cdot \gamma_{water}$

**Question 4:**
If the absolute pressure in a pipe is 500 kPa and the local atmospheric pressure is 98 kPa, what is the gage pressure and the vacuum pressure (if applicable)?

**Answer 4:**
*   **Gage Pressure ($P_{gage}$):**
    $P_{gage} = P_{abs} - P_{atm}$
    $P_{gage} = 500 \, kPa - 98 \, kPa$
    $P_{gage} = 402 \, kPa$

*   **Vacuum Pressure:**
    Since the absolute pressure (500 kPa) is greater than the atmospheric pressure (98 kPa), there is no vacuum pressure. Vacuum pressure is the pressure below atmospheric pressure.

**Question 5:**
Water in a tank is 5 meters deep. If the tank is open to the atmosphere, what is the pressure at a depth of 3 meters from the surface? (Assume density of water = $1000 \, kg/m^3$, $g = 9.81 \, m/s^2$, $P_{atm} = 101.3 \, kPa$).

**Answer 5:**
Pressure at a depth of 3 meters:
$P = P_{atm} + \rho g h$
$P = 101.3 \, kPa + (1000 \, kg/m^3) \times (9.81 \, m/s^2) \times (3 \, m)$
$P = 101.3 \, kPa + 29430 \, Pa$
$P = 101.3 \, kPa + 29.43 \, kPa$
$P = 130.73 \, kPa$

---
This concludes the notes for Topic 1: Fluid Statics - Pressure, Density, Height Relationship. This module provides the fundamental understanding of how pressure behaves in static fluids, which is essential for all subsequent topics in Fluid Mechanics and Machinery.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
