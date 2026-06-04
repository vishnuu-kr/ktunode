---
title: "Fluid Statics: Fluid pressure"
subject: "FLUID MECHANICS"
module: "Module 1: Fluid properties"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106e2"
status: "completed"
scrapedAt: "2026-05-20T18:40:21.772Z"
---
# Fluid Mechanics: Module 1 - Fluid Properties

## Topic: Fluid Statics: Fluid Pressure

### 1. Introduction to Fluid Pressure

**What is Fluid Pressure?**

*   Fluid pressure is a scalar quantity representing the force exerted by a fluid per unit area.
*   It acts perpendicular to any surface it contacts.
*   In a static fluid, pressure is the same in all directions at a given point.

**Key Concepts:**

*   **Force (F):** The push or pull exerted by the fluid.
*   **Area (A):** The surface over which the force is distributed.
*   **Pressure (P):** Defined as Force per Unit Area: $P = \frac{F}{A}$

**Units of Pressure:**

*   **SI Units:** Pascal (Pa) = N/m²
    *   Common multiples: kilopascal (kPa) = 10³ Pa, megapascal (MPa) = 10⁶ Pa
*   **Other Common Units:**
    *   Atmosphere (atm): Average atmospheric pressure at sea level (approximately 101.325 kPa or 14.7 psi).
    *   Bar: 1 bar = 100 kPa = 0.9869 atm
    *   Pounds per square inch (psi)
    *   Torr (mmHg): 1 atm = 760 torr

**Important Points:**

*   Pressure is a **scalar** quantity, meaning it has magnitude but no direction.
*   In a static fluid, pressure acts **perpendicular** to any surface.
*   At a specific point within a static fluid, the pressure is the **same in all directions**.

### 2. Pressure Variation in a Static Fluid (Hydrostatic Pressure)

**Fundamental Principle:**

*   In a static fluid, pressure increases with depth due to the weight of the fluid above.
*   This increase in pressure with depth is called **hydrostatic pressure**.

**Derivation of the Hydrostatic Pressure Formula:**

Consider a small horizontal element of fluid of area $dA$ at a depth $h$ below the free surface of a fluid with density $\rho$.

*   **Force due to weight of fluid above:** The volume of the fluid column above the area $dA$ to the free surface is $dV = dA \times h$. The mass of this column is $dm = \rho \times dV = \rho \times dA \times h$. The weight of this column is $dF_{weight} = dm \times g = \rho \times dA \times h \times g$.
*   **Pressure at depth h:** The pressure at depth $h$ is the force per unit area:
    $P(h) = \frac{dF_{weight}}{dA} = \frac{\rho \times dA \times h \times g}{dA}$
    Therefore, $P(h) = \rho g h$

**Key Equation:**

The pressure at a depth $h$ in a static fluid of uniform density $\rho$ is given by:

$P = P_0 + \rho g h$

Where:

*   $P$: Absolute pressure at depth $h$.
*   $P_0$: Pressure at the free surface (often atmospheric pressure).
*   $\rho$: Density of the fluid (constant).
*   $g$: Acceleration due to gravity.
*   $h$: Depth from the free surface.

**Important Points:**

*   Pressure in a static fluid increases **linearly** with depth.
*   Pressure depends on the **density** of the fluid and the **depth**.
*   Pressure is **independent of the shape** of the container or the horizontal position.
*   For a fluid of uniform density, the pressure difference between two points at depths $h_1$ and $h_2$ is:
    $\Delta P = P_2 - P_1 = \rho g (h_2 - h_1)$

**Example:**

*   Consider a swimming pool filled with water ($\rho \approx 1000 \text{ kg/m³}$). If the atmospheric pressure at the surface is 101.3 kPa, what is the absolute pressure at a depth of 2 meters? (Assume $g \approx 9.81 \text{ m/s²}$)

    $P = P_0 + \rho g h$
    $P = 101.3 \text{ kPa} + (1000 \text{ kg/m³}) \times (9.81 \text{ m/s²}) \times (2 \text{ m})$
    $P = 101.3 \text{ kPa} + 19620 \text{ Pa}$
    $P = 101.3 \text{ kPa} + 19.62 \text{ kPa}$
    $P \approx 120.92 \text{ kPa}$

### 3. Pressure Measurement

**Absolute Pressure vs. Gauge Pressure:**

*   **Absolute Pressure:** The total pressure relative to a perfect vacuum. It's the actual pressure.
*   **Gauge Pressure:** The pressure relative to the ambient atmospheric pressure.
    *   Gauge Pressure ($P_{gauge}$) = Absolute Pressure ($P_{abs}$) - Atmospheric Pressure ($P_{atm}$)
*   **Vacuum Pressure:** If the absolute pressure is less than atmospheric pressure, the difference is called vacuum pressure.
    *   Vacuum Pressure = $P_{atm}$ - $P_{abs}$

**Important Relationships:**

*   $P_{abs} = P_{gauge} + P_{atm}$
*   If $P_{gauge}$ is negative, it represents a vacuum.

**Devices for Pressure Measurement:**

*   **Manometers:**
    *   U-shaped tubes containing a liquid (often mercury or water).
    *   Measure pressure differences by balancing the fluid pressure against the weight of a column of manometer fluid.
    *   **Simple U-tube manometer:**
        *   Used to measure gauge pressure of a fluid in a pipe or tank.
        *   Pressure difference is related to the height difference of the manometer fluid.
    *   **Inclined manometer:**
        *   Used for measuring small pressure differences.
        *   The inclination increases the length of the liquid column, making small height changes more easily measurable.
    *   **Differential manometer:**
        *   Used to measure the pressure difference between two points in a system.

    **Example of U-tube Manometer:**
    Consider a U-tube manometer connected to a pipe containing a fluid. The manometer fluid has a density $\rho_m$, and the fluid in the pipe has a density $\rho_f$. The height difference of the manometer fluid is $h$.

    *   If the fluid in the pipe is denser than the manometer fluid and the pipe pressure is higher:
        $P_{pipe} = P_{atm} + \rho_m g h - \rho_f g H$ (where H is the level difference of the pipe fluid)
    *   If the manometer fluid is denser and the pipe pressure is higher:
        $P_{pipe} = P_{atm} + \rho_f g H - \rho_m g h$

    *   **More generally, for measuring gauge pressure:**
        $P_{gauge} = \rho_{manometer} g h$ (if the manometer fluid level in the open arm is lower)
        $P_{gauge} = -\rho_{manometer} g h$ (if the manometer fluid level in the open arm is higher)

*   **Barometers:**
    *   Specifically used to measure atmospheric pressure.
    *   Typically a mercury-filled tube inverted in a dish of mercury.
    *   The height of the mercury column supported by atmospheric pressure indicates the pressure.
    *   $P_{atm} = \rho_{Hg} g h_{Hg}$

*   **Bourdon Gauges:**
    *   Mechanical gauges that use a curved, C-shaped tube (Bourdon tube).
    *   Pressure causes the tube to straighten, moving a pointer on a dial.
    *   Measures gauge pressure.

*   **Pressure Transducers/Transmitters:**
    *   Electronic devices that convert pressure into an electrical signal (e.g., voltage or current).
    *   Used in modern instrumentation and control systems.

**Important Points:**

*   Always be clear whether you are dealing with **absolute** or **gauge** pressure.
*   The choice of manometer fluid depends on the expected pressure difference and the density of the fluid being measured. Denser fluids are used for higher pressures.

### 4. Hydrostatic Force on Surfaces

**Force on a Submerged Plane Surface:**

*   **Horizontal Surface:**
    *   The pressure is uniform over the entire surface.
    *   $F_{hydrostatic} = P \times A = (P_0 + \rho g h) \times A$
    *   Where $A$ is the area of the horizontal surface and $h$ is the depth of the surface.

*   **Vertical or Inclined Surface:**
    *   The pressure varies linearly with depth.
    *   The resultant hydrostatic force ($F_R$) is the integral of the pressure over the surface area.
    *   $F_R = \int_A P dA = \int_A (\rho g y) dA$ (where $y$ is the vertical distance from the free surface)
    *   For a plane surface, the resultant force is:
        $F_R = \rho g h_c A$
    *   Where:
        *   $\rho$: Density of the fluid.
        *   $g$: Acceleration due to gravity.
        *   $h_c$: Depth of the **centroid** of the submerged area.
        *   $A$: Area of the submerged surface.

    *   **Center of Pressure (y_p):** The point where the resultant hydrostatic force acts. It is always below the centroid of the area for a submerged plane surface.
        $y_p = y_c + \frac{I_{xc}}{\rho g A y_c}$
        Where:
        *   $y_c$: Vertical distance from the free surface to the centroid of the area.
        *   $I_{xc}$: Moment of inertia of the area about its centroidal axis parallel to the free surface.

**Important Points:**

*   For a horizontal surface, the force is simply pressure at that depth multiplied by the area.
*   For inclined or vertical surfaces, the force is the pressure at the **centroid** multiplied by the total area.
*   The center of pressure is where the resultant force acts and is typically below the centroid.

**Example:**

*   A rectangular gate, 2 meters wide and 3 meters high, is submerged vertically in water. The top edge of the gate is at the water surface. Calculate the total hydrostatic force on the gate and the depth of the center of pressure.
    *   Area ($A$) = 2 m * 3 m = 6 m²
    *   Depth of centroid ($h_c$) = 3 m / 2 = 1.5 m
    *   Fluid density ($\rho$) = 1000 kg/m³
    *   $g$ = 9.81 m/s²

    *   **Hydrostatic Force:**
        $F_R = \rho g h_c A = (1000 \text{ kg/m³}) \times (9.81 \text{ m/s²}) \times (1.5 \text{ m}) \times (6 \text{ m²})$
        $F_R = 88290 \text{ N}$ or $88.29 \text{ kN}$

    *   **Center of Pressure:**
        For a rectangle with width $b$ and height $h$, and the top edge at the surface:
        Moment of inertia about the centroidal axis parallel to the width ($I_{xc}$) = $\frac{bh³}{12}$
        $I_{xc} = \frac{(2 \text{ m})(3 \text{ m})³}{12} = \frac{2 \times 27}{12} = \frac{54}{12} = 4.5 \text{ m⁴}$

        $y_p = y_c + \frac{I_{xc}}{A y_c}$
        $y_p = 1.5 \text{ m} + \frac{4.5 \text{ m⁴}}{(6 \text{ m²})(1.5 \text{ m})}$
        $y_p = 1.5 \text{ m} + \frac{4.5}{9}$
        $y_p = 1.5 \text{ m} + 0.5 \text{ m} = 2.0 \text{ m}$

    The center of pressure is 2 meters from the water surface.

### 5. Buoyancy and Archimedes' Principle

**Buoyancy:**

*   The upward force exerted by a fluid that opposes the weight of an immersed object.

**Archimedes' Principle:**

*   "Any body completely or partially submerged in a fluid (gas or liquid) at rest is acted upon by an upward, vertical force, equal to the weight of the fluid displaced by the body."

**Buoyant Force ($F_B$):**

*   $F_B = \text{Weight of displaced fluid}$
*   $F_B = m_{displaced\_fluid} \times g$
*   Since $m_{displaced\_fluid} = \rho_{fluid} \times V_{submerged}$,
    $F_B = \rho_{fluid} \times V_{submerged} \times g$

Where:

*   $\rho_{fluid}$: Density of the fluid.
*   $V_{submerged}$: Volume of the submerged part of the object (which is equal to the volume of the displaced fluid).

**Conditions for Floating, Sinking, and Neutral Equilibrium:**

Let $W_{object}$ be the weight of the object and $F_B$ be the buoyant force.

*   **Sinking:** If $W_{object} > F_B$, the net force is downwards, and the object sinks. This happens when the object's average density is greater than the fluid's density.
*   **Floating:** If $W_{object} = F_B$, the net force is zero, and the object floats. The object will be partially or fully submerged until the buoyant force equals its weight. This occurs when the object's average density is less than or equal to the fluid's density.
*   **Neutral Equilibrium:** If $W_{object} = F_B$ when fully submerged, the object remains at any level it is placed within the fluid. This happens when the object's average density is equal to the fluid's density.

**Important Points:**

*   The buoyant force depends on the **volume of the submerged part** of the object and the **density of the fluid**.
*   The buoyant force is **independent of the density of the object itself** or the **shape** of the object.
*   The center of buoyancy is the centroid of the volume of the displaced fluid.

**Example:**

*   A cube of side length 0.1 m is made of wood with a density of 600 kg/m³. It is placed in water ($\rho_{water}$ = 1000 kg/m³). What fraction of the cube will be submerged?
    *   Volume of the cube ($V_{cube}$) = (0.1 m)³ = 0.001 m³
    *   Mass of the cube ($m_{cube}$) = $\rho_{wood} \times V_{cube} = 600 \text{ kg/m³} \times 0.001 \text{ m³} = 0.6 \text{ kg}$
    *   Weight of the cube ($W_{cube}$) = $m_{cube} \times g = 0.6 \times g$ N

    *   For floating, $W_{cube} = F_B$.
    *   $F_B = \rho_{water} \times V_{submerged} \times g$
    *   $0.6 \times g = 1000 \times V_{submerged} \times g$
    *   $V_{submerged} = \frac{0.6}{1000} = 0.0006 \text{ m³}$

    *   Fraction submerged = $\frac{V_{submerged}}{V_{cube}} = \frac{0.0006 \text{ m³}}{0.001 \text{ m³}} = 0.6$
    *   Therefore, 60% of the cube will be submerged.

### 6. Stability of Floating and Submerged Bodies

**Stability:** Refers to the tendency of a body to return to its original position after being slightly disturbed.

*   **Submerged Bodies:**
    *   Stable: If the center of gravity (G) is below the center of buoyancy (B).
    *   Unstable: If G is above B.
    *   Neutral: If G and B coincide.

*   **Floating Bodies:**
    *   **Metacentric Height (GM):** The distance between the center of gravity (G) and the metacenter (M).
    *   **Metacenter (M):** The point of intersection of the line of action of the buoyant force (in the tilted position) with the original vertical axis of symmetry.
    *   **Stable Equilibrium:** If $GM > 0$ (i.e., M is above G).
    *   **Unstable Equilibrium:** If $GM < 0$ (i.e., M is below G).
    *   **Neutral Equilibrium:** If $GM = 0$ (i.e., M coincides with G).

    *   The metacentric height ($GM$) can be calculated as:
        $GM = BM - BG$
        Where:
        *   $BM = \frac{I}{V_{submerged}}$ (distance from the center of buoyancy to the metacenter)
        *   $I$: Moment of inertia of the waterplane area about the axis of tilt.
        *   $V_{submerged}$: Volume of the submerged portion of the body.
        *   $BG$: Distance between the center of buoyancy and the center of gravity.

**Important Points:**

*   For submerged bodies, stability depends on the relative positions of the center of gravity and center of buoyancy.
*   For floating bodies, the metacentric height is the key parameter for stability. A positive metacentric height indicates stability.

### 7. Practice Questions and Exercises

**Question 1:**
A tank contains oil with a density of 850 kg/m³. What is the gauge pressure at a depth of 1.5 meters?
(a) 12.75 kPa
(b) 8.50 kPa
(c) 15.00 kPa
(d) 21.25 kPa

**Question 2:**
A submarine is submerged at a depth where the pressure is 3 MPa. If the atmospheric pressure is 101.3 kPa, what is the gauge pressure at this depth?
(a) 3.1013 MPa
(b) 2.8987 MPa
(c) 3.0000 MPa
(d) 101.3 kPa

**Question 3:**
A circular gate of diameter 2 meters is vertically submerged in water. The top of the gate is at the water surface. Calculate the hydrostatic force on the gate and the depth of the center of pressure.
(Take $\rho_{water} = 1000 \text{ kg/m³}$ and $g = 9.81 \text{ m/s²}$)

**Question 4:**
A block of wood with a specific gravity of 0.7 floats in water. What percentage of its volume is submerged?
(a) 30%
(b) 50%
(c) 70%
(d) 100%

**Question 5:**
A horizontal pipe carries oil of density 800 kg/m³. A U-tube manometer containing mercury (density 13600 kg/m³) is connected to the pipe. The difference in mercury levels in the manometer is 0.2 meters. Calculate the gauge pressure of the oil in the pipe.
(Take $g = 9.81 \text{ m/s²}$)

---

### Answers to Practice Questions

**Answer 1:**
$P_{gauge} = \rho g h = (850 \text{ kg/m³}) \times (9.81 \text{ m/s²}) \times (1.5 \text{ m})$
$P_{gauge} \approx 12507.75 \text{ Pa} \approx 12.51 \text{ kPa}$
**Correct Answer: (a)**

**Answer 2:**
$P_{gauge} = P_{abs} - P_{atm} = 3 \text{ MPa} - 101.3 \text{ kPa}$
$P_{gauge} = 3000 \text{ kPa} - 101.3 \text{ kPa} = 2898.7 \text{ kPa} = 2.8987 \text{ MPa}$
**Correct Answer: (b)**

**Answer 3:**
*   **Hydrostatic Force:**
    *   Area ($A$) = $\pi r² = \pi (1 \text{ m})² = \pi \text{ m²} \approx 3.1416 \text{ m²}$
    *   Depth of centroid ($h_c$) = Diameter / 2 = 2 m / 2 = 1 m
    *   $F_R = \rho g h_c A = (1000 \text{ kg/m³}) \times (9.81 \text{ m/s²}) \times (1 \text{ m}) \times (\pi \text{ m²})$
    *   $F_R \approx 30832 \text{ N}$ or $30.83 \text{ kN}$

*   **Center of Pressure:**
    *   Moment of inertia of a circle about its diameter ($I_{xc}$) = $\frac{\pi D⁴}{64}$ where D is diameter.
    *   $I_{xc} = \frac{\pi (2 \text{ m})⁴}{64} = \frac{\pi \times 16}{64} = \frac{\pi}{4} \text{ m⁴} \approx 0.7854 \text{ m⁴}$
    *   $y_p = h_c + \frac{I_{xc}}{A h_c} = 1 \text{ m} + \frac{\pi/4 \text{ m⁴}}{(\pi \text{ m²})(1 \text{ m})} = 1 \text{ m} + \frac{1}{4} \text{ m} = 1 \text{ m} + 0.25 \text{ m} = 1.25 \text{ m}$
    *   The center of pressure is 1.25 meters from the water surface.

**Answer 4:**
Specific gravity (SG) is the ratio of the object's density to the density of water.
SG = $\frac{\rho_{object}}{\rho_{water}}$
Given SG = 0.7, so $\rho_{object} = 0.7 \times \rho_{water}$.

For floating, Weight of object = Buoyant force
$W_{object} = \rho_{object} \times V_{object} \times g$
$F_B = \rho_{water} \times V_{submerged} \times g$

$\rho_{object} \times V_{object} \times g = \rho_{water} \times V_{submerged} \times g$
$\rho_{object} \times V_{object} = \rho_{water} \times V_{submerged}$

$\frac{V_{submerged}}{V_{object}} = \frac{\rho_{object}}{\rho_{water}} = SG$
$\frac{V_{submerged}}{V_{object}} = 0.7$

So, 70% of the volume is submerged.
**Correct Answer: (c)**

**Answer 5:**
The gauge pressure of the oil in the pipe is equal to the pressure exerted by the column of oil that balances the difference in manometer levels.
$P_{oil\_gauge} = P_{manometer\_fluid} \times g \times h_{manometer}$
$P_{oil\_gauge} = (13600 \text{ kg/m³}) \times (9.81 \text{ m/s²}) \times (0.2 \text{ m})$
$P_{oil\_gauge} \approx 26683.2 \text{ Pa} \approx 26.68 \text{ kPa}$

The pressure of the oil in the pipe is approximately 26.68 kPa.

### Important Points to Remember:

*   **Pressure is force per unit area and acts perpendicular to surfaces.**
*   **Hydrostatic pressure increases linearly with depth: $P = \rho g h$.**
*   **Pressure in a static fluid is the same in all directions at a given point.**
*   **Absolute pressure = Gauge pressure + Atmospheric pressure.**
*   **Hydrostatic force on a submerged plane surface is $F_R = \rho g h_c A$, acting at the center of pressure.**
*   **Archimedes' Principle: Buoyant force equals the weight of the displaced fluid ($F_B = \rho_{fluid} V_{submerged} g$).**
*   **Stability of floating bodies is determined by the metacentric height ($GM$).**
