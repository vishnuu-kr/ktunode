---
title: "Pascal’s Law"
subject: "FLUID MECHANICS"
module: "Module 1: Fluid properties"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106e3"
status: "completed"
scrapedAt: "2026-05-20T18:40:22.412Z"
---
# Fluid Mechanics: Module 1 - Fluid Properties

## Topic: Pascal's Law

---

### 1. Introduction to Pascal's Law

Pascal's Law is a fundamental principle in fluid mechanics that describes how pressure is transmitted within a fluid at rest. It's the basis for many hydraulic systems.

---

### 2. Statement of Pascal's Law

**Key Concept:** Pressure applied to an enclosed fluid is transmitted undiminished to every portion of the fluid and the walls of the containing vessel.

**Formal Statement:** In a fluid at rest, the pressure at any point is the same in all directions. If an external pressure is applied to a confined fluid, this pressure is transmitted equally in all directions throughout the fluid.

---

### 3. Underlying Principles and Assumptions

Pascal's Law is derived from the principles of hydrostatics and relies on several key assumptions:

*   **Fluid at Rest (Static Fluid):** The fluid is not in motion. If the fluid is moving, viscous effects can lead to pressure variations.
*   **Incompressible Fluid:** The density of the fluid is assumed to be constant, meaning its volume does not change significantly with pressure. While most liquids are nearly incompressible, gases are highly compressible. Pascal's Law is most accurately applied to liquids.
*   **Enclosed or Confined Fluid:** The fluid must be contained within a vessel or system.
*   **No Viscosity:** Ideal fluids are assumed to have no viscosity (internal friction). In real fluids, viscosity can cause some pressure drop, especially in flowing fluids.
*   **Negligible Body Forces (often):** While gravity is a body force that causes hydrostatic pressure, Pascal's Law primarily deals with the transmission of *applied* pressure. When considering pressure at different depths, gravity is accounted for, but the transmission of an *additional* pressure is still undiminished.

---

### 4. Mathematical Formulation of Pascal's Law

Consider a confined, incompressible fluid in a container with a movable piston.

Let:
*   $A_1$ be the area of the first piston.
*   $F_1$ be the force applied to the first piston.
*   $P_1$ be the pressure exerted by the first piston on the fluid ($P_1 = F_1 / A_1$).

According to Pascal's Law, this pressure $P_1$ is transmitted undiminished to all parts of the fluid.

Now, consider a second piston with area $A_2$ connected to the same fluid. The pressure $P_2$ acting on the second piston will be equal to $P_1$.

$$P_1 = P_2$$

Substituting the definition of pressure:

$$\frac{F_1}{A_1} = \frac{F_2}{A_2}$$

This equation highlights the core of Pascal's Law: **the ratio of forces is equal to the ratio of areas.**

**Rearranging to find the force on the second piston:**

$$F_2 = F_1 \times \frac{A_2}{A_1}$$

This equation demonstrates the **force multiplication** effect that is the basis of hydraulic systems. If $A_2$ is larger than $A_1$, then $F_2$ will be larger than $F_1$, even though the pressure is the same.

---

### 5. Applications of Pascal's Law

Pascal's Law is the foundation for numerous hydraulic systems that are used to multiply force and perform work.

*   **Hydraulic Jacks:** Used to lift heavy loads (e.g., cars). A small force applied to a small piston creates high pressure, which acts on a larger piston to lift a much heavier object.

    *   **Example:** A hydraulic jack has a small piston with an area of 0.01 m² and a large piston with an area of 0.1 m². If a force of 100 N is applied to the small piston, what is the force exerted by the large piston?
        *   $F_1 = 100 \, \text{N}$
        *   $A_1 = 0.01 \, \text{m}^2$
        *   $A_2 = 0.1 \, \text{m}^2$
        *   $F_2 = F_1 \times \frac{A_2}{A_1} = 100 \, \text{N} \times \frac{0.1 \, \text{m}^2}{0.01 \, \text{m}^2} = 100 \, \text{N} \times 10 = 1000 \, \text{N}$
        *   The large piston can lift a force of 1000 N.

*   **Hydraulic Brakes (Automobiles):** Force applied to the brake pedal is transmitted through brake fluid to the brake calipers, which then press the brake pads against the rotors.

*   **Hydraulic Presses:** Used for stamping, forging, and compressing materials.

*   **Hydraulic Lifts (Garages):** Used to raise vehicles for maintenance.

*   **Aircraft Control Surfaces:** Hydraulic actuators use Pascal's Law to move control surfaces like ailerons, elevators, and rudders.

---

### 6. Pressure Variation with Depth (Hydrostatic Pressure)

While Pascal's Law states that applied pressure is transmitted undiminished, it's crucial to remember that **static pressure within a fluid also increases with depth** due to the weight of the fluid above. This is described by the hydrostatic pressure formula:

$$P = P_0 + \rho g h$$

Where:
*   $P$ is the absolute pressure at depth $h$.
*   $P_0$ is the pressure at the surface (often atmospheric pressure).
*   $\rho$ (rho) is the density of the fluid.
*   $g$ is the acceleration due to gravity.
*   $h$ is the depth from the surface.

**How this relates to Pascal's Law:**

Pascal's Law applies to the *transmission of an added pressure*. If you apply a pressure $P_{applied}$ to a fluid at depth $h_1$, this $P_{applied}$ will be transmitted to depth $h_2$. However, the total pressure at depth $h_2$ will be the initial hydrostatic pressure at $h_2$ plus the transmitted $P_{applied}$.

Consider two points in a connected static fluid at different depths. The pressure difference between these two points is solely due to the hydrostatic pressure. However, if you apply an *external* pressure to one point, that *additional* pressure is transmitted equally to the other point.

**Example:** Imagine a U-tube filled with water. The water levels in both arms are the same. If you push down on the water surface in one arm with a piston (applying an additional pressure $P_{add}$), the pressure at the same horizontal level in the other arm will also increase by $P_{add}$.

---

### 7. Practice Questions and Exercises

**Question 1:**
A hydraulic lift has two pistons. The small piston has an area of 5 cm² and the large piston has an area of 100 cm². If a force of 200 N is applied to the small piston, what is the maximum force that can be lifted by the large piston?

**Question 2:**
In a hydraulic braking system, the master cylinder piston has a diameter of 2 cm, and the slave cylinder piston (at the wheel) has a diameter of 4 cm. If a force of 50 N is applied to the master cylinder piston, what is the force exerted on the brake pads?

**Question 3:**
Explain why Pascal's Law is most accurately applied to liquids and less so to gases.

**Question 4:**
A hydraulic press has a ram of area 0.2 m². If the pressure in the hydraulic fluid is 5 MPa, what is the force exerted by the ram?

---

### 8. Answers to Practice Questions

**Answer 1:**
*   Convert areas to square meters:
    *   $A_1 = 5 \, \text{cm}^2 = 5 \times (10^{-2} \, \text{m})^2 = 5 \times 10^{-4} \, \text{m}^2$
    *   $A_2 = 100 \, \text{cm}^2 = 100 \times (10^{-2} \, \text{m})^2 = 100 \times 10^{-4} \, \text{m}^2 = 1 \times 10^{-2} \, \text{m}^2$
*   Apply Pascal's Law: $\frac{F_1}{A_1} = \frac{F_2}{A_2}$
*   $F_2 = F_1 \times \frac{A_2}{A_1} = 200 \, \text{N} \times \frac{1 \times 10^{-2} \, \text{m}^2}{5 \times 10^{-4} \, \text{m}^2} = 200 \, \text{N} \times 20 = 4000 \, \text{N}$
*   **Answer: 4000 N**

**Answer 2:**
*   Calculate piston areas:
    *   $A_1 = \pi r_1^2 = \pi (1 \, \text{cm})^2 = \pi \, \text{cm}^2$
    *   $A_2 = \pi r_2^2 = \pi (2 \, \text{cm})^2 = 4\pi \, \text{cm}^2$
*   Apply Pascal's Law: $\frac{F_1}{A_1} = \frac{F_2}{A_2}$
*   $F_2 = F_1 \times \frac{A_2}{A_1} = 50 \, \text{N} \times \frac{4\pi \, \text{cm}^2}{\pi \, \text{cm}^2} = 50 \, \text{N} \times 4 = 200 \, \text{N}$
*   **Answer: 200 N**

**Answer 3:**
Pascal's Law assumes the fluid is incompressible. Gases are highly compressible, meaning their density and volume change significantly with pressure. If pressure is applied to a gas in a container, the expansion or compression of the gas itself will affect how the pressure is transmitted, unlike the relatively constant volume of a liquid under typical pressures. While the principle of pressure transmission holds, the "undiminished" aspect is more strictly adhered to by liquids due to their low compressibility.

**Answer 4:**
*   Pressure is given in MPa (MegaPascals). 1 MPa = 10⁶ Pa.
*   $P = 5 \, \text{MPa} = 5 \times 10^6 \, \text{Pa}$
*   $A = 0.2 \, \text{m}^2$
*   Pressure is force per unit area: $P = F/A$
*   $F = P \times A = (5 \times 10^6 \, \text{Pa}) \times (0.2 \, \text{m}^2) = 1 \times 10^6 \, \text{N}$
*   **Answer: 1,000,000 N or 1 MN**

---

### 9. Important Points to Remember

*   **Pressure is Scalar:** Pressure is a scalar quantity, meaning it has magnitude but no direction. However, it acts perpendicular to any surface it contacts.
*   **Force Multiplication:** Pascal's Law is the basis for hydraulic systems that multiply force by using different piston areas.
*   **No Net Force in Static Fluid:** In a static fluid, there is no net force acting on any fluid element in any direction (otherwise, it would move).
*   **Hydrostatic Pressure vs. Applied Pressure:** Remember that static pressure increases with depth ($\rho g h$), but the *applied* pressure is transmitted undiminished.
*   **Ideal vs. Real Fluids:** Pascal's Law is an idealization. In real fluids, viscosity and compressibility can introduce minor deviations, especially at high pressures or flow rates.

---
