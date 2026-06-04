---
title: "Hydrostatic law"
subject: "FLUID MECHANICS"
module: "Module 1: Fluid properties"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106e4"
status: "completed"
scrapedAt: "2026-05-20T18:40:23.050Z"
---
# Fluid Mechanics: Module 1 - Fluid Properties

## Topic: Hydrostatic Law

---

### 1. Introduction to Hydrostatics

**Definition:** Hydrostatics is the branch of fluid mechanics that deals with fluids at rest. It focuses on the forces exerted by stationary fluids due to gravity.

**Key Concept:** In a fluid at rest, the pressure at any point is the same in all directions. This is a fundamental principle that underpins hydrostatic law.

---

### 2. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental principles of hydrostatic pressure.
*   Derive and apply the hydrostatic law.
*   Calculate hydrostatic pressure at a given depth in a fluid.
*   Explain the concept of pressure variation with depth.
*   Apply hydrostatic principles to solve practical problems involving fluid statics.
*   Understand and apply Pascal's Principle.
*   Understand and apply Archimedes' Principle.

---

### 3. Hydrostatic Pressure

**Definition:** Hydrostatic pressure is the pressure exerted by a fluid at rest due to the force of gravity.

**Key Concepts:**

*   **Pressure (P):** Force per unit area.
    *   **Formula:** $P = \frac{F}{A}$
    *   **Units:** Pascals (Pa), psi (pounds per square inch), bar, atm (atmosphere).
*   **Force (F):** The weight of the fluid column above a given area.
*   **Area (A):** The surface area over which the force is distributed.

**Pressure Variation with Depth:**

In a fluid at rest, pressure increases with depth. This is because as you go deeper, there is more fluid above you, and thus more weight pressing down.

---

### 4. The Hydrostatic Law (Fundamental Equation of Hydrostatics)

**Derivation:**

Consider a small, infinitesimally thin, horizontal element of fluid of area $dA$ and thickness $dz$ at a depth $h$ from the free surface. Let the fluid have a specific weight $\gamma$ (gamma).

*   **Weight of the fluid element:** $dW = \gamma \cdot dV = \gamma \cdot dA \cdot dz$
*   **Forces acting on the element:**
    *   **Downward force due to pressure at the bottom face:** $P_{bottom} \cdot dA$
    *   **Upward force due to pressure at the top face:** $P_{top} \cdot dA$
    *   **Weight of the fluid element:** $dW$ acting downwards.

Since the fluid is at rest, the net force in the vertical direction must be zero. Assuming $P_{bottom}$ is greater than $P_{top}$ (as depth increases downwards):

$P_{bottom} \cdot dA - P_{top} \cdot dA - dW = 0$

$P_{bottom} \cdot dA - P_{top} \cdot dA = dW$

$dA (P_{bottom} - P_{top}) = \gamma \cdot dA \cdot dz$

Dividing by $dA$:

$P_{bottom} - P_{top} = \gamma \cdot dz$

Rearranging, we get the differential form of the hydrostatic law:

$\frac{dP}{dz} = \gamma$

This equation states that the rate of change of pressure with respect to depth is equal to the specific weight of the fluid.

**Integrated Form of the Hydrostatic Law:**

To find the pressure at a specific depth, we integrate the differential form. Let $P_1$ be the pressure at depth $h_1$ and $P_2$ be the pressure at depth $h_2$, where $h_2 > h_1$.

$\int_{P_1}^{P_2} dP = \int_{h_1}^{h_2} \gamma dz$

Assuming $\gamma$ is constant (for a homogeneous fluid):

$P_2 - P_1 = \gamma (h_2 - h_1)$

Let $h$ be the depth from the free surface, so $P_1 = P_{atm}$ (atmospheric pressure at the free surface, $h_1 = 0$) and $P_2 = P$ (pressure at depth $h$, $h_2 = h$).

$P - P_{atm} = \gamma h$

This is the **absolute pressure** at depth $h$.

**Gauge Pressure:**

**Definition:** Gauge pressure is the difference between the absolute pressure and atmospheric pressure. It's the pressure measured relative to the atmosphere.

**Formula:** $P_{gauge} = P_{absolute} - P_{atm} = \gamma h$

*   If the pressure measured is above atmospheric pressure, it's positive gauge pressure.
*   If the pressure measured is below atmospheric pressure, it's negative gauge pressure (also called vacuum pressure).

**Specific Weight ($\gamma$):**

**Definition:** Specific weight is the weight per unit volume of a fluid.

**Formula:** $\gamma = \rho g$

where:
*   $\rho$ (rho) is the density of the fluid.
*   $g$ is the acceleration due to gravity.

Substituting this into the hydrostatic law:

$P_{gauge} = \rho g h$

**Summary of Hydrostatic Law Formulas:**

*   $\frac{dP}{dz} = \gamma$ (Differential form)
*   $P_2 - P_1 = \gamma (h_2 - h_1)$ (Integrated form for two points)
*   $P_{absolute} = P_{atm} + \gamma h$ (Absolute pressure)
*   $P_{gauge} = \gamma h = \rho g h$ (Gauge pressure)

**Important Note:** The pressure at a specific depth in a homogeneous liquid is independent of the shape of the container and the total weight of the liquid. It only depends on the depth, density, and acceleration due to gravity.

---

### 5. Pressure Variation in Different Fluids

*   **In a homogeneous liquid (constant $\rho$):** Pressure increases linearly with depth. The pressure-depth relationship is a straight line.
*   **In a gas:** Gases are compressible, so their density ($\rho$) changes significantly with pressure. Therefore, the hydrostatic law for gases is more complex and requires integration considering the variation of $\rho$ with pressure. However, for small vertical distances, the density can be assumed constant, and the linear relationship can be approximated.

---

### 6. Pressure Measurement

*   **Manometers:** Devices used to measure pressure, often by balancing a column of liquid against the pressure being measured. They directly utilize the principles of hydrostatic law.
    *   **U-tube Manometer:** Measures gauge pressure or the pressure difference between two points.
    *   **Piezometer:** A simple tube attached to a vessel, measuring gauge pressure of a liquid. The liquid rises in the tube to the same level as the free surface in the vessel (if open to atmosphere).
*   **Barometers:** Used to measure atmospheric pressure.

---

### 7. Pascal's Principle

**Statement:** Pascal's principle states that a change in pressure applied to an enclosed fluid is transmitted undiminished to every portion of the fluid and the walls of the containing vessel.

**Key Concepts:**

*   **Pressure Transmission:** If pressure is applied to a confined fluid, this pressure increase is felt equally everywhere within the fluid.
*   **Hydraulic Systems:** Pascal's principle is the basis for hydraulic systems, such as hydraulic jacks, brakes, and lifts.

**Example: Hydraulic Jack**

*   A small piston of area $A_1$ is connected to a larger piston of area $A_2$.
*   An input force $F_1$ is applied to the small piston, creating a pressure $P = \frac{F_1}{A_1}$.
*   According to Pascal's Principle, this pressure is transmitted undiminished to the larger piston.
*   The force exerted by the larger piston is $F_2 = P \cdot A_2 = \frac{F_1}{A_1} \cdot A_2$.
*   Since $A_2 > A_1$, the output force $F_2$ is greater than the input force $F_1$. This provides a mechanical advantage.

---

### 8. Archimedes' Principle

**Statement:** Archimedes' principle states that any body completely or partially submerged in a fluid is buoyed up by a force equal to the weight of the fluid displaced by the body.

**Key Concepts:**

*   **Buoyant Force ($F_B$):** The upward force exerted by a fluid on a submerged or partially submerged object.
*   **Displaced Fluid:** The volume of fluid that is pushed out of the way by the object.
*   **Magnitude of Buoyant Force:** $F_B = \text{Weight of displaced fluid} = \gamma_{fluid} \cdot V_{submerged}$
    *   $\gamma_{fluid}$ is the specific weight of the fluid.
    *   $V_{submerged}$ is the volume of the object submerged in the fluid.

**Conditions for Floating, Sinking, and Neutral Equilibrium:**

Let $W_{object}$ be the weight of the object.

*   **Floating:** If the buoyant force is equal to the weight of the object ($F_B = W_{object}$). The object floats partially submerged.
*   **Sinking:** If the buoyant force is less than the weight of the object ($F_B < W_{object}$). The object sinks to the bottom.
*   **Neutral Equilibrium:** If the buoyant force is equal to the weight of the object when fully submerged ($F_B = W_{object}$ when $V_{submerged} = V_{object}$). The object remains at any level within the fluid.

**Determining Apparent Weight:**

The apparent weight of an object submerged in a fluid is its actual weight minus the buoyant force.

$W_{apparent} = W_{object} - F_B$

---

### 9. Practice Questions and Exercises

**Question 1:**
A large oil tanker is being unloaded. The oil has a specific gravity of 0.92 and a density of $920 \, \text{kg/m}^3$. Calculate the pressure at the bottom of the tank if the oil depth is 15 meters. (Assume $g = 9.81 \, \text{m/s}^2$)

**Answer 1:**
*   Specific weight of oil ($\gamma$): $\gamma = \rho g = 920 \, \text{kg/m}^3 \times 9.81 \, \text{m/s}^2 = 9025.2 \, \text{N/m}^3$.
*   Pressure at depth $h$: $P_{gauge} = \gamma h$.
*   $P_{gauge} = 9025.2 \, \text{N/m}^3 \times 15 \, \text{m} = 135378 \, \text{Pa}$.
*   To convert to kPa: $135.378 \, \text{kPa}$.

**Question 2:**
In a hydraulic lift system, a force of $200 \, \text{N}$ is applied to a piston with an area of $0.01 \, \text{m}^2$. What is the force exerted by the larger piston if its area is $0.2 \, \text{m}^2$?

**Answer 2:**
*   Pressure applied: $P = \frac{F_1}{A_1} = \frac{200 \, \text{N}}{0.01 \, \text{m}^2} = 20000 \, \text{Pa}$.
*   Force exerted by the larger piston: $F_2 = P \times A_2 = 20000 \, \text{Pa} \times 0.2 \, \text{m}^2 = 4000 \, \text{N}$.

**Question 3:**
A metal cube with a mass of $2 \, \text{kg}$ and a side length of $0.1 \, \text{m}$ is fully submerged in water. What is the buoyant force acting on the cube? (Density of water is $1000 \, \text{kg/m}^3$, $g = 9.81 \, \text{m/s}^2$)

**Answer 3:**
*   Volume of the cube ($V_{object}$): $V_{object} = (0.1 \, \text{m})^3 = 0.001 \, \text{m}^3$.
*   Since the cube is fully submerged, the volume of displaced water ($V_{submerged}$) is equal to the volume of the cube: $V_{submerged} = 0.001 \, \text{m}^3$.
*   Specific weight of water ($\gamma_{water}$): $\gamma_{water} = \rho_{water} g = 1000 \, \text{kg/m}^3 \times 9.81 \, \text{m/s}^2 = 9810 \, \text{N/m}^3$.
*   Buoyant force ($F_B$): $F_B = \gamma_{water} \times V_{submerged} = 9810 \, \text{N/m}^3 \times 0.001 \, \text{m}^3 = 9.81 \, \text{N}$.

**Question 4:**
A tank contains water to a depth of 5 meters. If the atmospheric pressure is $101.3 \, \text{kPa}$, calculate the absolute pressure at the bottom of the tank. (Density of water = $1000 \, \text{kg/m}^3$, $g = 9.81 \, \text{m/s}^2$)

**Answer 4:**
*   Gauge pressure at the bottom: $P_{gauge} = \rho g h = 1000 \, \text{kg/m}^3 \times 9.81 \, \text{m/s}^2 \times 5 \, \text{m} = 49050 \, \text{Pa}$.
*   Absolute pressure: $P_{absolute} = P_{atm} + P_{gauge}$.
*   $P_{absolute} = 101.3 \, \text{kPa} + 49.05 \, \text{kPa} = 150.35 \, \text{kPa}$.

---

### 10. Important Points to Remember

*   **Pressure in a fluid at rest is hydrostatic.**
*   **Pressure increases linearly with depth in a homogeneous fluid.**
*   **Hydrostatic Law:** $\frac{dP}{dz} = \gamma$ or $P_{gauge} = \rho g h$.
*   **Absolute pressure = Atmospheric pressure + Gauge pressure.**
*   **Pressure at a point in a fluid is the same in all directions.**
*   **Pressure at the same horizontal level in a continuous body of the same homogeneous fluid is the same.**
*   **Pascal's Principle:** Pressure applied to a confined fluid is transmitted equally in all directions.
*   **Archimedes' Principle:** Buoyant force equals the weight of the fluid displaced.
*   **The shape of the container or the total weight of the liquid does not affect the pressure at a given depth.**

---
