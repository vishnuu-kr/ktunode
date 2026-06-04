---
title: "Pressure Measurement: Fluid pressure, Pressure head, types of pressures."
subject: "FLUID MECHANICS AND MACHINERY"
module: "Module 1: Prerequisite: Properties of fluid: Specific gravity, Specific Weight, Specific Volume, Dynamic and Kinematic Viscosity."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462d15"
status: "completed"
scrapedAt: "2026-05-20T17:49:19.320Z"
---
# Fluid Mechanics and Machinery: Module 1 - Prerequisite: Properties of Fluid & Pressure Measurement

**Module Focus:** Understanding the fundamental properties of fluids and how pressure is measured and characterized. This module lays the groundwork for more advanced topics in fluid mechanics.

**Course Outcomes Addressed in this Module:**

*   **CO1: Identify the fundamental fluid properties, their relationships and apply them to estimate the fluid pressure and hydrostatic forces on bodies (Knowledge Level: K3)** - This module directly addresses the identification and application of fluid properties to understand pressure.

---

## Topic: Pressure Measurement

### 1. Fluid Pressure

**Definition:** Pressure ($P$) in a fluid is defined as the force ($F$) exerted perpendicular to a unit area ($A$) of the fluid. It's a scalar quantity.

**Mathematical Representation:**
$P = \frac{F}{A}$

**Units:**
*   **SI:** Pascals (Pa) where 1 Pa = 1 N/m²
*   **Commonly Used:** Kilopascals (kPa), Megapascals (MPa), atmospheres (atm), pounds per square inch (psi).
    *   1 atm = 101325 Pa = 0.101325 MPa ≈ 1.013 bar
    *   1 bar = 100,000 Pa = 100 kPa
    *   1 psi = 6894.76 Pa

**Key Concept from Textbooks:**
*   **Cengel & Cimbala:** Emphasizes that pressure is a normal force per unit area. They introduce the concept of hydrostatic pressure, which increases with depth in a fluid.
*   **Som & Chakrabarti:** Define pressure as a state variable and discuss its importance in fluid statics and dynamics.

**Important Point to Remember:** Pressure acts perpendicular to any surface it contacts. In a static fluid, pressure at a point is the same in all directions.

---

### 2. Pressure Head

**Definition:** Pressure head is the height of a column of fluid that would exert a given pressure at its base. It's a convenient way to express pressure in terms of a fluid column's height.

**Relationship between Pressure and Pressure Head:**
Consider a column of fluid of height $h$ and density $\rho$. The pressure at the base ($P$) due to this column is given by:
$P = \rho g h$
where $g$ is the acceleration due to gravity.

From this, we can express the pressure head ($h$) as:
$h = \frac{P}{\rho g}$

**Units:**
*   **SI:** Meters (m), millimeters (mm) of the fluid (e.g., meters of water, millimeters of mercury).

**Types of Pressure Head:**

*   **Piezometric Head:** This is the sum of the static head (elevation head) and the pressure head.
*   **Velocity Head:** This relates to the kinetic energy of the fluid.
*   **Total Head:** The sum of elevation head, pressure head, and velocity head. (More relevant in later modules but understanding pressure head's role is crucial here).

**Example:**
If the pressure at a point in water (density $\rho = 1000$ kg/m³) is 50,000 Pa, the pressure head is:
$h = \frac{50000 \text{ Pa}}{1000 \text{ kg/m}^3 \times 9.81 \text{ m/s}^2} \approx 5.097 \text{ m of water}$

This means a column of water approximately 5.1 meters high would exert the same pressure.

**Key Concept from Textbooks:**
*   **Bansal R.K.:** Clearly explains pressure head and its relationship with pressure using hydrostatic principles. He also discusses the use of pressure head in manometer calculations.
*   **White F.M.:** Introduces pressure as a fundamental concept and its relation to elevation changes within a fluid, implicitly leading to the idea of pressure head.

---

### 3. Types of Pressures

Pressures in fluid mechanics are often expressed relative to a reference pressure.

#### 3.1 Absolute Pressure

**Definition:** Absolute pressure ($P_{abs}$) is the pressure measured relative to a perfect vacuum (absolute zero pressure).

**Key Concept:** This is the "true" pressure.

#### 3.2 Gauge Pressure

**Definition:** Gauge pressure ($P_{gauge}$) is the pressure measured relative to the local atmospheric pressure.

**Key Concept:**
*   If $P_{gauge} > 0$, the pressure is above atmospheric pressure (positive gauge pressure).
*   If $P_{gauge} < 0$, the pressure is below atmospheric pressure (negative gauge pressure), which is also called **vacuum pressure**.

**Relationship:**
$P_{abs} = P_{atm} + P_{gauge}$

where $P_{atm}$ is the local atmospheric pressure.

**Example:**
A tire pressure gauge reads 32 psi. This is the gauge pressure. If the atmospheric pressure is 14.7 psi, the absolute pressure in the tire is:
$P_{abs} = 14.7 \text{ psi} + 32 \text{ psi} = 46.7 \text{ psi}$

#### 3.3 Vacuum Pressure

**Definition:** Vacuum pressure ($P_{vacuum}$) is the pressure below atmospheric pressure. It's essentially negative gauge pressure.

**Relationship:**
$P_{vacuum} = -P_{gauge}$ (when $P_{gauge}$ is negative)
$P_{abs} = P_{atm} - P_{vacuum}$

**Example:**
If a vacuum pump creates a pressure of -0.5 atm gauge pressure (meaning 0.5 atm below atmospheric pressure), and atmospheric pressure is 1 atm, then the absolute pressure is:
$P_{abs} = 1 \text{ atm} - 0.5 \text{ atm} = 0.5 \text{ atm}$

**Key Concept from Textbooks:**
*   **Cengel & Cimbala:** Provides detailed explanations and diagrams of absolute, gauge, and vacuum pressures, including how they are measured by different types of pressure gauges.
*   **Som & Chakrabarti:** Discusses the practical implications of different pressure types in engineering applications, such as in pipelines and engines.
*   **Bansal R.K.:** Uses examples of manometers to illustrate the conversion between gauge and absolute pressures.

**Important Point to Remember:** Always check whether a pressure value is absolute or gauge. The context of the problem or the measuring instrument usually provides this information.

---

### 4. Fluid Pressure Variation with Depth (Hydrostatic Pressure)

**Definition:** In a static fluid, pressure increases linearly with depth due to the weight of the fluid above.

**Derivation (Conceptual):**
Consider a small vertical fluid element of area $dA$ and height $dh$.
Weight of the fluid element = (volume) × (density) × $g$ = $(dA \cdot dh) \times \rho \times g$.
For equilibrium, the pressure difference between the bottom and top of the element balances this weight:
$(P_{bottom} - P_{top}) \times dA = (dA \cdot dh) \times \rho \times g$
$P_{bottom} - P_{top} = \rho g dh$
$dP = \rho g dh$

Integrating this for a column of height $h$:
$\int_{P_1}^{P_2} dP = \int_{0}^{h} \rho g dh$
$P_2 - P_1 = \rho g h$ (assuming $\rho$ and $g$ are constant)

This is the fundamental equation for hydrostatic pressure.

**Key Concepts:**

*   **Pressure Gradient:** $\frac{dP}{dz} = -\rho g$ (where $z$ is the upward vertical direction). This means pressure decreases as height increases.
*   **Isopiezometric Surface:** A surface where the pressure is constant. In a static fluid, these are horizontal planes.

**Application to CO1:** This directly relates to identifying fluid properties (density) and applying them to estimate fluid pressure.

**Example:**
What is the pressure at a depth of 10 meters in a tank of oil with a specific gravity of 0.9 and dynamic viscosity of 0.01 Pa.s? (Note: viscosity is not used for pressure calculation in static fluids but is a given property).

1.  **Find density ($\rho$):**
    Specific gravity ($SG$) = $\frac{\rho_{fluid}}{\rho_{water}}$
    $\rho_{oil} = SG_{oil} \times \rho_{water}$
    $\rho_{oil} = 0.9 \times 1000 \text{ kg/m}^3 = 900 \text{ kg/m}^3$

2.  **Calculate Pressure (assuming atmospheric pressure at the surface is 0 gauge):**
    $P = \rho g h$
    $P = 900 \text{ kg/m}^3 \times 9.81 \text{ m/s}^2 \times 10 \text{ m}$
    $P = 88290 \text{ Pa}$
    $P \approx 88.3 \text{ kPa}$ (gauge pressure)

**Key Concept from Textbooks:**
*   **White F.M.:** Dedicates a significant portion to hydrostatics, explaining the pressure variation with depth and introducing the concept of the free surface.
*   **Fisher & Henly:** Discusses hydrostatic pressure in the context of buoyancy and forces on submerged surfaces, which builds upon the pressure variation with depth.

---

### 5. Measurement of Pressure

While this module focuses on the *concept* of pressure, it's worth noting how it's measured, which often utilizes pressure head.

*   **Manometers:** Devices that use columns of liquid to measure pressure. The height difference in the liquid columns directly relates to the pressure difference (via pressure head).
    *   **U-tube manometer:** Measures gauge pressure.
    *   **Inclined manometer:** Increases sensitivity for measuring small pressure differences.
*   **Bourdon Gauge:** A mechanical gauge that uses the deformation of a curved tube to indicate pressure.
*   **Pressure Transducers/Sensors:** Convert pressure into an electrical signal.

---

## Summary of Key Concepts and Definitions

*   **Pressure ($P$):** Force per unit area acting perpendicular to the surface. $P = F/A$.
*   **Pressure Head ($h$):** The height of a fluid column equivalent to a given pressure. $h = P / (\rho g)$.
*   **Absolute Pressure ($P_{abs}$):** Pressure relative to a perfect vacuum.
*   **Gauge Pressure ($P_{gauge}$):** Pressure relative to local atmospheric pressure. $P_{abs} = P_{atm} + P_{gauge}$.
*   **Vacuum Pressure ($P_{vacuum}$):** Pressure below atmospheric pressure. $P_{vacuum} = -P_{gauge}$.
*   **Hydrostatic Pressure:** Pressure in a static fluid due to the weight of the fluid above. $P = \rho g h$.

---

## Practice Questions and Exercises

**Instructions:** Attempt these questions to test your understanding of Module 1's pressure concepts.

**Question 1:**
A pressure gauge on a pipeline reads 500 kPa. The local atmospheric pressure is 98 kPa.
a) What is the absolute pressure in the pipeline?
b) If the fluid in the pipeline is water ($\rho = 1000$ kg/m³), what is the pressure head in meters of water?

**Question 2:**
Calculate the pressure at a depth of 15 meters in a tank of mercury. The density of mercury is 13600 kg/m³ and the acceleration due to gravity is 9.81 m/s². Express your answer in Pascals and in atmospheres (1 atm ≈ 101325 Pa).

**Question 3:**
A vacuum pump reduces the pressure in a chamber to 0.2 atm. If the atmospheric pressure is 1.013 bar, what is the absolute pressure in the chamber in Pascals? (Hint: Be careful with units and gauge vs. absolute pressure).

**Question 4:**
A closed container is filled with oil of specific gravity 0.85. The pressure at the free surface of the oil is 1.2 atm (absolute). What is the absolute pressure at a point 5 meters below the free surface? (Assume $g = 9.81$ m/s² and $\rho_{water} = 1000$ kg/m³).

---

## Answers to Practice Questions

**Answer 1:**
a) **Absolute Pressure:**
$P_{abs} = P_{atm} + P_{gauge}$
$P_{abs} = 98 \text{ kPa} + 500 \text{ kPa} = 598 \text{ kPa}$

b) **Pressure Head:**
First, ensure pressure is in Pascals: $500 \text{ kPa} = 500,000 \text{ Pa}$.
Density of water $\rho = 1000$ kg/m³. $g = 9.81$ m/s².
$h = \frac{P}{\rho g} = \frac{500000 \text{ Pa}}{1000 \text{ kg/m}^3 \times 9.81 \text{ m/s}^2}$
$h \approx 50.97 \text{ meters of water}$

**Answer 2:**
Pressure $P = \rho g h$
$P = 13600 \text{ kg/m}^3 \times 9.81 \text{ m/s}^2 \times 15 \text{ m}$
$P = 1,999,680 \text{ Pa}$
$P \approx 2,000,000 \text{ Pa} = 2 \text{ MPa}$

In atmospheres:
$P_{atm} = \frac{1999680 \text{ Pa}}{101325 \text{ Pa/atm}} \approx 19.74 \text{ atm}$

**Answer 3:**
Given pressure is vacuum, so it's below atmospheric.
Atmospheric pressure $P_{atm} = 1.013 \text{ bar} = 1.013 \times 100,000 \text{ Pa} = 101,300 \text{ Pa}$.
The vacuum pressure is 0.2 atm below atmospheric.
$P_{vacuum} = 0.2 \text{ atm} = 0.2 \times 101325 \text{ Pa} = 20265 \text{ Pa}$.
Absolute pressure $P_{abs} = P_{atm} - P_{vacuum}$
$P_{abs} = 101300 \text{ Pa} - 20265 \text{ Pa} = 81035 \text{ Pa}$

**Answer 4:**
1.  **Density of oil:**
    $\rho_{oil} = SG_{oil} \times \rho_{water} = 0.85 \times 1000 \text{ kg/m}^3 = 850 \text{ kg/m}^3$.

2.  **Convert atmospheric pressure to Pascals:**
    $P_{atm} = 1.2 \text{ atm} = 1.2 \times 101325 \text{ Pa} = 121590 \text{ Pa}$.

3.  **Calculate hydrostatic pressure at 5m depth:**
    $P_{hydrostatic} = \rho_{oil} g h = 850 \text{ kg/m}^3 \times 9.81 \text{ m/s}^2 \times 5 \text{ m}$
    $P_{hydrostatic} = 41707.5 \text{ Pa}$.

4.  **Calculate absolute pressure at 5m depth:**
    $P_{abs\_at\_5m} = P_{abs\_surface} + P_{hydrostatic}$
    $P_{abs\_at\_5m} = 121590 \text{ Pa} + 41707.5 \text{ Pa}$
    $P_{abs\_at\_5m} = 163297.5 \text{ Pa}$

---

## Important Points to Remember

*   **Pressure is Scalar:** It acts in all directions at a point in a static fluid.
*   **Pressure Increases with Depth:** In a static fluid, pressure rises linearly with depth.
*   **Absolute vs. Gauge:** Always distinguish between absolute and gauge pressure. Gauge pressure is zero at absolute vacuum and equal to atmospheric pressure at atmospheric conditions.
*   **Density is Key for Hydrostatic Pressure:** The pressure exerted by a fluid column depends directly on its density, gravity, and height.
*   **Units Matter:** Pay close attention to units (Pa, kPa, atm, psi, bar) and ensure consistency in calculations.
*   **Viscosity Does Not Affect Static Pressure:** While viscosity is a fluid property, it doesn't influence the pressure in a stationary fluid. It becomes critical in fluid motion.

---

This concludes Module 1's section on Pressure Measurement. The understanding of fluid properties and pressure concepts is fundamental for subsequent topics in fluid mechanics and machinery.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
