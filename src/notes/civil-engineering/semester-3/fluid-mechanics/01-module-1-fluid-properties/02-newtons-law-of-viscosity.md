---
title: "Newton’s law of viscosity"
subject: "FLUID MECHANICS"
module: "Module 1: Fluid properties"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106e0"
status: "completed"
scrapedAt: "2026-05-20T18:40:20.439Z"
---
# Fluid Mechanics: Module 1 - Fluid Properties
## Topic: Newton's Law of Viscosity

---

### 1. Introduction to Viscosity

Viscosity is a fundamental property of fluids that describes their resistance to deformation or flow. It's essentially the "thickness" or "stickiness" of a fluid.

*   **Definition:** Viscosity is a measure of a fluid's internal resistance to shear stress or flow.
*   **Analogy:** Think of honey vs. water. Honey is more viscous because it flows more slowly and resists deformation more than water.
*   **Origin:** Viscosity arises from the cohesive forces between fluid molecules and the momentum exchange between fluid layers.

---

### 2. Newtonian Fluids

Newton's Law of Viscosity applies to a specific category of fluids known as Newtonian fluids.

*   **Definition:** Newtonian fluids are those in which the shear stress is directly proportional to the rate of shear strain.
*   **Key Characteristic:** The viscosity of Newtonian fluids remains constant regardless of the applied shear rate.
*   **Examples:**
    *   Water
    *   Air
    *   Most common gases and low-viscosity liquids (e.g., gasoline, ethanol)
    *   Simple solutions like saline

---

### 3. Newton's Law of Viscosity Explained

Newton's Law of Viscosity mathematically relates shear stress, viscosity, and the rate of shear strain.

*   **Shear Stress ($\tau$)**: The force per unit area acting parallel to a fluid surface. Imagine trying to slide one layer of fluid over another.
    *   **Units:** Pascals (Pa) or N/m² in SI units.
*   **Rate of Shear Strain (or Velocity Gradient)**: This describes how the fluid's velocity changes across its depth. For a fluid flowing between two parallel plates, where one plate is moving, this is the change in velocity with respect to the distance perpendicular to the flow.
    *   **Symbol:** $\frac{du}{dy}$ (where $u$ is the velocity in the direction of flow and $y$ is the distance perpendicular to the flow).
    *   **Units:** 1/s (per second).
*   **Dynamic Viscosity ($\mu$)**: This is the constant of proportionality in Newton's Law of Viscosity. It represents the fluid's intrinsic resistance to shear.
    *   **Units:** Pascal-seconds (Pa·s) or N·s/m² in SI units.
    *   **Commonly used unit:** Poise (P), where 1 P = 0.1 Pa·s. Centipoise (cP) is also common, where 1 cP = 0.001 Pa·s. (Water at 20°C has a viscosity of approximately 1 cP).

**The Law:**

For a simple shear flow, Newton's Law of Viscosity can be expressed as:

$$ \tau = \mu \frac{du}{dy} $$

**Explanation of the formula:**

*   The shear stress ($\tau$) is directly proportional to the dynamic viscosity ($\mu$). A higher viscosity means a higher shear stress is required to achieve the same rate of shear.
*   The shear stress ($\tau$) is also directly proportional to the rate of shear strain ($\frac{du}{dy}$). A faster change in velocity across layers (steeper velocity gradient) results in higher shear stress.

---

### 4. Types of Viscosity

While dynamic viscosity is the primary focus, another related concept is kinematic viscosity.

*   **Dynamic Viscosity ($\mu$)**:
    *   Measures the fluid's resistance to shear forces.
    *   Dependent on the fluid itself and temperature.
*   **Kinematic Viscosity ($\nu$)**:
    *   **Definition:** The ratio of dynamic viscosity to the fluid's density ($\rho$).
    *   **Formula:** $\nu = \frac{\mu}{\rho}$
    *   **Significance:** Represents how easily a fluid flows under gravity when its motion is due to gravitational forces. It's a measure of momentum diffusivity.
    *   **Units:** m²/s (square meters per second) in SI units.
    *   **Commonly used unit:** Stokes (St), where 1 St = 10⁻⁴ m²/s. Centistokes (cSt) is also common, where 1 cSt = 10⁻⁶ m²/s.

---

### 5. Factors Affecting Viscosity

The viscosity of a fluid is not always constant and can be influenced by external factors, primarily temperature.

*   **Temperature:**
    *   **Liquids:** Viscosity *decreases* with increasing temperature. As temperature rises, molecular kinetic energy increases, weakening intermolecular cohesive forces, allowing layers to slide more easily.
        *   *Example:* Honey flows much more easily when heated.
    *   **Gases:** Viscosity *increases* with increasing temperature. In gases, viscosity is primarily due to the transfer of momentum between molecules as they move randomly. Higher temperatures mean faster molecular motion and more frequent momentum exchange, leading to higher viscosity.
        *   *Example:* Though less intuitive, hot air is slightly more viscous than cold air.

*   **Pressure:** For most liquids and gases under normal conditions, the effect of pressure on viscosity is relatively small and often negligible. However, at very high pressures, viscosity can increase slightly.

---

### 6. Non-Newtonian Fluids

Fluids that do not follow Newton's Law of Viscosity are called non-Newtonian fluids. Their viscosity changes with the applied shear rate.

*   **Definition:** Non-Newtonian fluids are fluids for which the shear stress is *not* linearly proportional to the rate of shear strain.
*   **Classification:**
    *   **Shear-Thinning (Pseudoplastic):** Viscosity decreases with increasing shear rate.
        *   *Examples:* Ketchup, paint, blood, yogurt, shampoo.
        *   *Behavior:* They become less viscous (easier to stir or pour) when agitated.
    *   **Shear-Thickening (Dilatant):** Viscosity increases with increasing shear rate.
        *   *Examples:* Cornstarch and water mixture (oobleck), wet sand.
        *   *Behavior:* They become more viscous (thicker) when subjected to sudden force or rapid stirring.
    *   **Bingham Plastics:** Exhibit a yield stress; they behave like a solid until a certain shear stress is exceeded, after which they flow like a viscous fluid.
        *   *Examples:* Toothpaste, mayonnaise, mud.
        *   *Behavior:* They won't flow unless you apply enough force (e.g., squeeze the toothpaste tube).
    *   **Thixotropic:** Time-dependent shear-thinning. Viscosity decreases over time under constant shear.
        *   *Examples:* Some paints, drilling fluids.
    *   **Rheopectic:** Time-dependent shear-thickening. Viscosity increases over time under constant shear. (Less common).

---

### 7. Importance of Viscosity in Fluid Mechanics

Viscosity is a critical property that influences many fluid phenomena.

*   **Friction:** Viscous forces are the cause of internal friction within a fluid and friction between a fluid and a solid boundary.
*   **Drag Force:** Viscosity contributes significantly to the drag experienced by objects moving through a fluid.
*   **Boundary Layers:** The region near a solid surface where viscous effects are dominant is called the boundary layer.
*   **Flow Regimes:** Viscosity plays a role in determining whether flow is laminar (smooth, ordered) or turbulent (chaotic, disordered). This is often characterized by the Reynolds number, which includes viscosity.
*   **Lubrication:** Viscosity is crucial in lubrication systems, where a viscous fluid film prevents direct contact between moving surfaces.
*   **Pumping and Piping:** Understanding fluid viscosity is essential for designing pumps and pipelines, as it affects the energy required to move the fluid and the pressure drops along pipes.

---

### 8. Practice Questions & Exercises

**Question 1:**
Define viscosity and explain its origin in fluids.

**Question 2:**
What is the mathematical expression for Newton's Law of Viscosity? Define each term and state its SI units.

**Question 3:**
Differentiate between dynamic viscosity and kinematic viscosity. Provide their respective SI units.

**Question 4:**
How does temperature affect the viscosity of (a) liquids and (b) gases? Provide a brief explanation for each.

**Question 5:**
Provide two examples of Newtonian fluids and two examples of non-Newtonian fluids, briefly describing the behavior of the non-Newtonian fluids.

**Question 6:**
A Newtonian fluid has a dynamic viscosity of 0.01 Pa·s and a density of 900 kg/m³. Calculate its kinematic viscosity.

**Question 7:**
Consider two parallel plates separated by a distance of 5 mm. The bottom plate is stationary, and the top plate moves at a constant speed of 1 m/s. The space between the plates is filled with a Newtonian fluid with a dynamic viscosity of 0.05 Pa·s. Assuming a linear velocity profile, calculate the shear stress in the fluid.

---

### 9. Answers to Practice Questions

**Answer 1:**
Viscosity is a measure of a fluid's resistance to deformation or flow. It originates from the cohesive forces between fluid molecules in liquids and the momentum exchange between molecules in gases.

**Answer 2:**
Newton's Law of Viscosity is expressed as $\tau = \mu \frac{du}{dy}$.
*   $\tau$ is the shear stress (Pa or N/m²).
*   $\mu$ is the dynamic viscosity (Pa·s or N·s/m²).
*   $\frac{du}{dy}$ is the rate of shear strain or velocity gradient (1/s).

**Answer 3:**
*   **Dynamic Viscosity ($\mu$):** Measures resistance to shear forces. SI unit: Pa·s or N·s/m².
*   **Kinematic Viscosity ($\nu$):** Ratio of dynamic viscosity to density ($\nu = \frac{\mu}{\rho}$). Measures how easily a fluid flows under gravity. SI unit: m²/s.

**Answer 4:**
*   **(a) Liquids:** Viscosity *decreases* with increasing temperature. Higher temperatures weaken intermolecular forces, allowing layers to slide more easily.
*   **(b) Gases:** Viscosity *increases* with increasing temperature. Higher temperatures lead to faster molecular motion and more frequent momentum exchange between layers.

**Answer 5:**
*   **Newtonian Fluids:** Water, air.
*   **Non-Newtonian Fluids:**
    *   **Ketchup:** Shear-thinning (pseudoplastic) – becomes less viscous when shaken or stirred.
    *   **Cornstarch and water mixture (Oobleck):** Shear-thickening (dilatant) – becomes more viscous and solid-like when hit or stirred rapidly.

**Answer 6:**
Given:
$\mu = 0.01$ Pa·s
$\rho = 900$ kg/m³

Kinematic viscosity ($\nu$) = $\frac{\mu}{\rho}$
$\nu = \frac{0.01 \text{ Pa·s}}{900 \text{ kg/m³}}$
$\nu = \frac{0.01 \text{ N·s/m²}}{900 \text{ kg/m³}}$
Since 1 N = 1 kg·m/s²,
$\nu = \frac{0.01 \text{ (kg·m/s²)·s/m²}}{900 \text{ kg/m³}}$
$\nu = \frac{0.01 \text{ kg·m/(s·m²)}}{900 \text{ kg/m³}}$
$\nu = \frac{0.01 \text{ kg/(s·m)}}{900 \text{ kg/m³}}$
$\nu = \frac{0.01}{900} \frac{\text{kg}}{\text{s·m}} \times \frac{\text{m³}}{\text{kg}}$
$\nu = 1.111 \times 10^{-5} \text{ m²/s}$

**Answer 7:**
Given:
Distance between plates ($dy$) = 5 mm = 0.005 m
Velocity of top plate ($du$) = 1 m/s
Dynamic viscosity ($\mu$) = 0.05 Pa·s

Assuming a linear velocity profile, the velocity gradient $\frac{du}{dy}$ is constant.
$\frac{du}{dy} = \frac{1 \text{ m/s}}{0.005 \text{ m}} = 200 \text{ s⁻¹}$

Using Newton's Law of Viscosity:
$\tau = \mu \frac{du}{dy}$
$\tau = (0.05 \text{ Pa·s}) \times (200 \text{ s⁻¹})$
$\tau = 10 \text{ Pa}$

The shear stress in the fluid is 10 Pa.

---

### Important Points to Remember:

*   **Viscosity is resistance to shear flow.**
*   **Newtonian fluids have constant viscosity.**
*   **Newton's Law of Viscosity: $\tau = \mu \frac{du}{dy}$.**
*   **Dynamic viscosity ($\mu$) measures internal friction.**
*   **Kinematic viscosity ($\nu$) relates $\mu$ to density and indicates ease of flow under gravity.**
*   **Liquids: Viscosity decreases with temperature.**
*   **Gases: Viscosity increases with temperature.**
*   **Non-Newtonian fluids do not follow this linear relationship.**
*   **Viscosity is crucial for understanding friction, drag, and pipe flow.**
