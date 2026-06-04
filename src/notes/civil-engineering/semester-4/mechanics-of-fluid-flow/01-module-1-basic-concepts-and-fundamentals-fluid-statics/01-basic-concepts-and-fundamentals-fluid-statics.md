---
title: "Basic Concepts and Fundamentals: Fluid statics"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 1: Basic Concepts and Fundamentals: Fluid statics"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a5d"
status: "completed"
scrapedAt: "2026-05-20T18:46:18.833Z"
---
# MECHANICS OF FLUID FLOW - MODULE 1: BASIC CONCEPTS AND FUNDAMENTALS: FLUID STATICS

## Topic: Basic Concepts and Fundamentals: Fluid Statics

---

### Learning Outcomes:

Upon completion of this topic, you should be able to:

*   **Define and differentiate between a fluid and a solid.**
*   **Understand and apply fundamental properties of fluids.**
*   **Define and explain the concept of pressure in fluids.**
*   **State and apply Pascal's Law.**
*   **Define and explain hydrostatic pressure and its variation with depth.**
*   **Derive and apply the hydrostatic equation.**
*   **Understand the concept of manometers and their applications.**
*   **Define and explain buoyancy and Archimedes' Principle.**
*   **Analyze hydrostatic forces on submerged plane and curved surfaces.**
*   **Understand the concept of stability of submerged and floating bodies.**

---

### 1. Introduction to Fluids and Solids

#### 1.1 What is a Fluid?

*   **Definition:** A fluid is a substance that deforms continuously under the action of an applied shear stress, no matter how small.
*   **Key Characteristic:** Fluids have no intrinsic shape and take the shape of their container.
*   **Distinction from Solids:** Solids resist shear stress by deformation, and once the stress is removed, they return to their original shape (elasticity). Fluids continue to deform.

#### 1.2 Properties of Fluids

*   **Density ($\rho$):**
    *   **Definition:** Mass per unit volume.
    *   **Formula:** $\rho = \frac{m}{V}$ (where $m$ is mass, $V$ is volume).
    *   **Units:** kg/m³ (SI), lb/ft³ (Imperial).
    *   **Example:** Water has a density of approximately 1000 kg/m³. Air has a density of approximately 1.225 kg/m³ at sea level.

*   **Specific Weight ($\gamma$):**
    *   **Definition:** Weight per unit volume.
    *   **Formula:** $\gamma = \rho g$ (where $g$ is acceleration due to gravity).
    *   **Units:** N/m³ (SI), lb/ft³ (Imperial).
    *   **Example:** For water, $\gamma \approx 9810 \, \text{N/m}^3$.

*   **Specific Gravity (SG):**
    *   **Definition:** The ratio of the density of a substance to the density of a reference substance (usually water at 4°C).
    *   **Formula:** $SG = \frac{\rho_{substance}}{\rho_{water}}$
    *   **Dimensionless:** Has no units.
    *   **Example:** The specific gravity of mercury is 13.6, meaning mercury is 13.6 times denser than water.

*   **Viscosity ($\mu$):**
    *   **Definition:** A measure of a fluid's resistance to shear deformation. It represents the internal friction within the fluid.
    *   **Newtonian Fluids:** Fluids for which the shear stress is directly proportional to the rate of shear strain (e.g., water, air, oil).
    *   **Dynamic Viscosity ($\mu$):**
        *   **Formula (Newtonian):** $\tau = \mu \frac{du}{dy}$ (where $\tau$ is shear stress, $\frac{du}{dy}$ is the velocity gradient or rate of shear strain).
        *   **Units:** Pa·s or N·s/m² (SI), poise (P) or centipoise (cP) (cgs). 1 cP = 0.001 Pa·s.
        *   **Example:** Honey is much more viscous than water.

    *   **Kinematic Viscosity ($\nu$):**
        *   **Definition:** The ratio of dynamic viscosity to density. It represents the ratio of viscous forces to inertial forces.
        *   **Formula:** $\nu = \frac{\mu}{\rho}$
        *   **Units:** m²/s (SI), stokes (St) or centistokes (cSt) (cgs). 1 cSt = 10⁻⁶ m²/s.
        *   **Example:** Lubricating oils have higher kinematic viscosity than gasoline.

*   **Surface Tension ($\sigma$):**
    *   **Definition:** The tendency of liquid surfaces to shrink into the minimum surface area possible. It acts like a thin elastic membrane.
    *   **Units:** N/m (SI), dyne/cm (cgs).
    *   **Cause:** Cohesive forces between liquid molecules.
    *   **Example:** Water droplets form spheres due to surface tension. It causes capillary rise in narrow tubes.

*   **Vapor Pressure ($P_v$):**
    *   **Definition:** The pressure exerted by the vapor in thermodynamic equilibrium with its condensed phases (solid or liquid) at a given temperature in a closed system.
    *   **Units:** Pa (SI), psi (Imperial).
    *   **Cavitation:** If the pressure in a liquid drops below its vapor pressure, the liquid can vaporize, forming bubbles. These bubbles collapse violently when they move to a region of higher pressure, causing damage (cavitation).

---

### 2. Pressure in Fluids

#### 2.1 Definition of Pressure

*   **Definition:** Pressure is the force exerted per unit area. In fluids, it's the normal force exerted by the fluid on a unit area of a surface.
*   **Formula:** $P = \frac{F}{A}$ (where $F$ is the force perpendicular to the area $A$).
*   **Units:** Pascal (Pa) or N/m² (SI), psi (lb/in²) (Imperial).
    *   1 atm (atmosphere) ≈ 101325 Pa ≈ 1.013 bar ≈ 760 mmHg ≈ 14.7 psi.

#### 2.2 Pressure Variation in a Static Fluid (Hydrostatic Pressure)

*   **Key Concept:** In a static fluid, pressure increases with depth.
*   **Derivation (Hydrostatic Equation):**
    Consider a small rectangular prism of fluid of height $dz$ and area $dA$ within a static fluid.
    *   Forces acting vertically:
        *   Pressure at the bottom surface: $P \, dA$ (upward)
        *   Pressure at the top surface: $(P + dP) \, dA$ (downward)
        *   Weight of the fluid element: $dW = dm \cdot g = (\rho \, dV) g = (\rho \, dA \, dz) g$ (downward)
    *   For equilibrium, the sum of vertical forces is zero:
        $P \, dA - (P + dP) \, dA - (\rho \, dA \, dz) g = 0$
        $-dP \, dA - \rho g \, dA \, dz = 0$
        Divide by $dA$: $-dP - \rho g \, dz = 0$
        Rearranging: $dP = -\rho g \, dz$
    *   **Integrating from point 1 (depth $z_1$, pressure $P_1$) to point 2 (depth $z_2$, pressure $P_2$):**
        $\int_{P_1}^{P_2} dP = -\int_{z_1}^{z_2} \rho g \, dz$
        $P_2 - P_1 = -\int_{z_1}^{z_2} \rho g \, dz$
    *   **For a fluid of constant density:**
        $P_2 - P_1 = -\rho g (z_2 - z_1)$
        Let $h = z_1 - z_2$ be the vertical distance between the two points (depth difference). If $z_1$ is higher than $z_2$, then $z_2 - z_1 = -h$.
        $P_2 - P_1 = -\rho g (-h) = \rho g h$
        **Hydrostatic Equation:** $P_2 = P_1 + \rho g h$
        Or, in terms of gauge pressure (pressure above atmospheric): $P_{gauge} = \rho g h$
        **Absolute Pressure:** $P_{absolute} = P_{ambient} + P_{gauge} = P_{ambient} + \rho g h$

#### 2.3 Important Points about Pressure in Static Fluids

*   **Pressure acts normal to any surface.**
*   **Pressure is the same at all points in a static fluid at the same horizontal level.**
*   **Pressure increases linearly with depth.**
*   **Pressure is independent of the shape of the container.** This is known as the **hydrostatic paradox**.

#### 2.4 Pascal's Law

*   **Statement:** Pressure applied to an enclosed fluid is transmitted undiminished to every portion of the fluid and the walls of the containing vessel.
*   **Formula:** $\Delta P_{applied} = \Delta P_{transmitted}$
*   **Applications:** Hydraulic systems (lifts, brakes), pressure gauges.

#### 2.5 Manometers

*   **Definition:** Devices used to measure pressure difference between two points in a fluid or the pressure of a fluid relative to atmospheric pressure.
*   **Princ:** Based on the hydrostatic equation and the principle that pressure at the same horizontal level in a continuous fluid at rest is the same.
*   **Types:**
    *   **Simple U-tube Manometer:** Measures gauge pressure.
        *   **Example:** A U-tube manometer filled with mercury is connected to a pipe containing water under pressure. The height difference in the mercury columns indicates the pressure.
        *   If liquid in the pipe is **denser** than manometer fluid: $P_A = P_B + \rho_m g h_m - \rho_f g h_f$
        *   If liquid in the pipe is **less dense** than manometer fluid: $P_A = P_B + \rho_f g h_f - \rho_m g h_m$

    *   **Inclined Manometer:** Used to measure small pressure differences by increasing sensitivity.

#### 2.6 Hydrostatic Force on Surfaces

*   **Hydrostatic Force on a Submerged Plane Surface:**
    *   **Centroid:** The geometric center of the plane area.
    *   **Center of Pressure (CP):** The point where the resultant hydrostatic force acts on the surface. It is always below the centroid for a submerged plane surface (except for a horizontal surface where CP coincides with centroid).
    *   **Magnitude of Force (F):**
        *   **Horizontal Surface:** $F = P \cdot A = P_{gauge} \cdot A = \rho g h A$ (where $h$ is the depth of the surface).
        *   **Inclined Surface:** $F = P_{centroid} \cdot A = (\rho g h_c) A$ (where $h_c$ is the vertical depth of the centroid).
        *   **Vertical Surface:** Same as inclined surface.
    *   **Location of Center of Pressure ($y_{CP}$):**
        $y_{CP} = y_c + \frac{I_{xc}}{\bar{y}_c A}$
        where:
            *   $y_{CP}$ is the distance from the free surface to the CP along the inclined plane.
            *   $y_c$ is the distance from the free surface to the centroid along the inclined plane.
            *   $I_{xc}$ is the moment of inertia of the plane area about the horizontal axis passing through its centroid.
            *   $A$ is the area of the submerged surface.

*   **Hydrostatic Force on Submerged Curved Surfaces:**
    *   The resultant hydrostatic force on a curved surface is found by considering its horizontal and vertical components.
    *   **Horizontal Component ($F_H$):** Equal to the hydrostatic force on the projection of the curved surface onto a vertical plane.
    *   **Vertical Component ($F_V$):** Equal to the weight of the fluid column above the curved surface, extending to the free surface.
    *   **Magnitude:** $F = \sqrt{F_H^2 + F_V^2}$
    *   **Direction:** The angle of the resultant force with the horizontal is $\theta = \tan^{-1} \left( \frac{F_V}{F_H} \right)$.

---

### 3. Buoyancy and Stability

#### 3.1 Buoyancy

*   **Archimedes' Principle:** When a body is partially or completely immersed in a fluid, it experiences an upward buoyant force equal to the weight of the fluid displaced by the body.
*   **Buoyant Force ($F_B$):**
    *   **Formula:** $F_B = \rho_{fluid} g V_{submerged}$ (where $\rho_{fluid}$ is the density of the fluid, $g$ is acceleration due to gravity, and $V_{submerged}$ is the volume of the submerged part of the body).
*   **Conditions for Floating, Sinking, or Suspended:**
    *   **Floating:** $F_B > W_{body}$ (body rises until $F_B = W_{body}$)
    *   **Sinking:** $F_B < W_{body}$ (body sinks)
    *   **Suspended:** $F_B = W_{body}$ (body remains at any depth)
    *   Where $W_{body}$ is the weight of the body.

#### 3.2 Stability of Submerged and Floating Bodies

*   **Stability of Submerged Bodies:**
    *   A submerged body is in **stable equilibrium** if its center of gravity (CG) is above its center of buoyancy (CB).
    *   It is in **unstable equilibrium** if its CG is below its CB.
    *   It is in **neutral equilibrium** if its CG and CB coincide.

*   **Stability of Floating Bodies:**
    *   **Center of Buoyancy (CB):** The centroid of the submerged volume of the body.
    *   **Center of Gravity (CG):** The center of mass of the body.
    *   **Metacentric Height (GM):** The distance between the CG and the metacenter (M).
        *   **Metacenter (M):** The point of intersection of the line of action of the buoyant force with the original vertical line through the CG when the body is tilted by a small angle.
    *   **Conditions for Stability:**
        *   **Stable Equilibrium:** $GM > 0$ (Metacenter (M) is above the Center of Gravity (CG)).
        *   **Unstable Equilibrium:** $GM < 0$ (Metacenter (M) is below the Center of Gravity (CG)).
        *   **Neutral Equilibrium:** $GM = 0$ (Metacenter (M) coincides with the Center of Gravity (CG)).
    *   **Formula for Metacentric Height ($GM$):**
        $GM = BM - BG$
        where:
            *   $BM = \frac{I}{V_{submerged}}$ (Metacentric radius, $I$ is the moment of inertia of the waterplane area about the axis of tilt).
            *   $BG$ is the distance between the Center of Buoyancy and the Center of Gravity ($BG = CG - CB$).

---

### Important Points to Remember:

*   **Fluids deform continuously under shear stress.**
*   **Pressure in a static fluid increases linearly with depth: $P = \rho g h$.**
*   **Pascal's Law: Pressure applied to an enclosed fluid is transmitted equally in all directions.**
*   **Buoyant force is equal to the weight of the displaced fluid (Archimedes' Principle).**
*   **The stability of a floating body depends on the metacentric height (GM).**
*   **For inclined plane surfaces, the hydrostatic force acts at the Center of Pressure (CP), which is below the centroid.**
*   **The vertical component of hydrostatic force on a curved surface is the weight of the fluid above it.**

---

### Practice Questions/Exercises:

**1. Concepts & Definitions:**

*   What is the fundamental difference between a fluid and a solid?
*   Define density and specific weight. Give their SI units.
*   State Pascal's Law.
*   State Archimedes' Principle.

**2. Hydrostatic Pressure:**

*   A tank contains water to a depth of 5 meters. Calculate the gauge pressure at the bottom of the tank. (Assume $\rho_{water} = 1000 \, \text{kg/m}^3$ and $g = 9.81 \, \text{m/s}^2$).
*   If the atmospheric pressure is $101 \, \text{kPa}$, what is the absolute pressure at the bottom of the tank?
*   A rectangular plate 2 m wide and 3 m high is immersed vertically in oil of specific gravity 0.8. The top edge of the plate is 1 m below the oil surface. Calculate the total hydrostatic force on one side of the plate and the depth of the center of pressure.
    ($\rho_{oil} = 0.8 \times 1000 \, \text{kg/m}^3$, $g = 9.81 \, \text{m/s}^2$)
    *   *Hint for CP:* For a rectangle of width $b$ and height $h$ immersed vertically with the top edge at depth $H$, $I_{xc} = \frac{bh^3}{12}$ and $y_c = H + \frac{h}{2}$.

**3. Buoyancy & Stability:**

*   A wooden block with a weight of 50 N and a volume of $0.01 \, \text{m}^3$ is floating in water. What is the buoyant force acting on the block?
*   Calculate the volume of the wooden block that is submerged in water.
*   A ship weighs $50,000 \, \text{kN}$. When floating in fresh water, it sinks to a depth of 10 m. When floating in seawater of specific gravity 1.025, it sinks to a depth of 9.5 m. Calculate the ratio of the volume of fresh water displaced to the volume of seawater displaced.

**4. Manometers:**

*   A U-tube manometer is used to measure the pressure of oil flowing in a pipe. The oil has a specific gravity of 0.9. The manometer contains mercury (specific gravity 13.6). The level of mercury in the side connected to the pipe is 0.5 m lower than the level of mercury in the open side. Calculate the gauge pressure of the oil.
    ($\rho_{oil} = 0.9 \times 1000 \, \text{kg/m}^3$, $\rho_{mercury} = 13.6 \times 1000 \, \text{kg/m}^3$, $g = 9.81 \, \text{m/s}^2$)

---

### Answers to Practice Questions:

**1. Concepts & Definitions:**

*   **Fluid vs. Solid:** Fluids deform continuously under shear stress, while solids deform and return to their original shape (or fracture) when the shear stress is removed.
*   **Density ($\rho$):** Mass per unit volume (kg/m³).
*   **Specific Weight ($\gamma$):** Weight per unit volume ($\gamma = \rho g$) (N/m³).
*   **Pascal's Law:** Pressure applied to an enclosed fluid is transmitted undiminished to every portion of the fluid and the walls of the containing vessel.
*   **Archimedes' Principle:** A body immersed in a fluid experiences an upward buoyant force equal to the weight of the fluid displaced by the body.

**2. Hydrostatic Pressure:**

*   **Gauge Pressure at the bottom:**
    $P_{gauge} = \rho g h = 1000 \, \text{kg/m}^3 \times 9.81 \, \text{m/s}^2 \times 5 \, \text{m} = 49050 \, \text{Pa} = 49.05 \, \text{kPa}$.
*   **Absolute Pressure at the bottom:**
    $P_{absolute} = P_{ambient} + P_{gauge} = 101 \, \text{kPa} + 49.05 \, \text{kPa} = 150.05 \, \text{kPa}$.
*   **Force and Center of Pressure:**
    *   $\rho_{oil} = 0.8 \times 1000 \, \text{kg/m}^3 = 800 \, \text{kg/m}^3$.
    *   Depth of centroid ($h_c$): $h_c = 1 \, \text{m} + \frac{3 \, \text{m}}{2} = 1 + 1.5 = 2.5 \, \text{m}$.
    *   Area of plate ($A$): $A = 2 \, \text{m} \times 3 \, \text{m} = 6 \, \text{m}^2$.
    *   **Total Hydrostatic Force (F):**
        $F = \rho_{oil} g h_c A = 800 \, \text{kg/m}^3 \times 9.81 \, \text{m/s}^2 \times 2.5 \, \text{m} \times 6 \, \text{m}^2 = 117720 \, \text{N} = 117.72 \, \text{kN}$.
    *   **Depth of Center of Pressure ($y_{CP}$):**
        *   $y_c$ is the distance from the free surface to the centroid along the inclined plane (which is the same as the vertical depth for a vertical surface). So, $y_c = 2.5 \, \text{m}$.
        *   $I_{xc} = \frac{bh^3}{12} = \frac{2 \, \text{m} \times (3 \, \text{m})^3}{12} = \frac{2 \times 27}{12} = 4.5 \, \text{m}^4$.
        *   $y_{CP} = y_c + \frac{I_{xc}}{y_c A} = 2.5 \, \text{m} + \frac{4.5 \, \text{m}^4}{2.5 \, \text{m} \times 6 \, \text{m}^2} = 2.5 \, \text{m} + \frac{4.5}{15} \, \text{m} = 2.5 \, \text{m} + 0.3 \, \text{m} = 2.8 \, \text{m}$.
        The center of pressure is 2.8 m from the free surface.

**3. Buoyancy & Stability:**

*   **Buoyant Force:** Since the block is floating, the buoyant force is equal to its weight. $F_B = 50 \, \text{N}$.
*   **Submerged Volume:**
    $F_B = \rho_{water} g V_{submerged}$
    $50 \, \text{N} = 1000 \, \text{kg/m}^3 \times 9.81 \, \text{m/s}^2 \times V_{submerged}$
    $V_{submerged} = \frac{50}{1000 \times 9.81} \approx 0.005097 \, \text{m}^3$.
*   **Ratio of Displaced Volumes:**
    Weight of ship $W = 50,000 \, \text{kN} = 50,000,000 \, \text{N}$.
    In fresh water: $W = \rho_{freshwater} g V_{freshwater\_displaced}$
    $50,000,000 \, \text{N} = 1000 \, \text{kg/m}^3 \times 9.81 \, \text{m/s}^2 \times V_{freshwater\_displaced}$
    $V_{freshwater\_displaced} = \frac{50,000,000}{1000 \times 9.81} \approx 5096.84 \, \text{m}^3$.
    In seawater: $W = \rho_{seawater} g V_{seawater\_displaced}$
    $\rho_{seawater} = 1.025 \times 1000 \, \text{kg/m}^3 = 1025 \, \text{kg/m}^3$.
    $50,000,000 \, \text{N} = 1025 \, \text{kg/m}^3 \times 9.81 \, \text{m/s}^2 \times V_{seawater\_displaced}$
    $V_{seawater\_displaced} = \frac{50,000,000}{1025 \times 9.81} \approx 4972.53 \, \text{m}^3$.
    Ratio = $\frac{V_{freshwater\_displaced}}{V_{seawater\_displaced}} = \frac{5096.84}{4972.53} \approx 1.025$.

**4. Manometers:**

*   Let $P_{oil}$ be the gauge pressure of the oil.
    $\rho_{oil} = 0.9 \times 1000 \, \text{kg/m}^3 = 900 \, \text{kg/m}^3$.
    $\rho_{mercury} = 13.6 \times 1000 \, \text{kg/m}^3 = 13600 \, \text{kg/m}^3$.
    Let the point in the pipe be A, and the corresponding point in the mercury column on the open side be B.
    Pressure at A = Pressure at B (in the same horizontal level in mercury).
    $P_{oil} + \rho_{oil} g h_{oil} = \rho_{mercury} g h_{mercury}$
    Here, the height difference in mercury is 0.5 m. The oil column contributing to this pressure difference is also 0.5 m (since the mercury level difference is caused by the oil pressure acting on the interface).
    $P_{oil} + 900 \times 9.81 \times 0.5 = 13600 \times 9.81 \times 0.5$
    $P_{oil} + 4414.5 = 66708$
    $P_{oil} = 66708 - 4414.5 = 62293.5 \, \text{Pa} = 62.29 \, \text{kPa}$.
    The gauge pressure of the oil is approximately 62.29 kPa.

---
This concludes the study notes for Module 1, Topic: Basic Concepts and Fundamentals: Fluid Statics. Review these notes and practice the problems to solidify your understanding.
