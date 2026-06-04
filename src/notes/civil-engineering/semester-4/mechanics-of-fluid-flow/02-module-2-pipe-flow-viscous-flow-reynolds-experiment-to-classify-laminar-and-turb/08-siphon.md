---
title: "siphon"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 2: Pipe Flow: Viscous flow: Reynolds experiment to classify laminar and turbulent flows"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a6d"
status: "completed"
scrapedAt: "2026-05-20T18:46:29.082Z"
---
# Mechanics of Fluid Flow: Module 2 - Pipe Flow: Viscous Flow

## Topic: Siphon

### 1. Introduction to Siphons

A siphon is a **tube, pipe, or hose used to convey liquid upwards from one container to another by means of atmospheric pressure, without the need for a pump.** It relies on the principle of gravity and the concept of pressure differences to move the fluid.

**Key Concepts:**

*   **Atmospheric Pressure:** The pressure exerted by the Earth's atmosphere on all surfaces. This is the driving force behind siphon action.
*   **Gravity:** The force that pulls the liquid down in the discharge leg of the siphon, creating a pressure difference.
*   **Pressure Difference:** The difference in pressure between the free surface of the liquid in the source container and the discharge point. This difference drives the fluid flow.
*   **Continuous Liquid Column:** For a siphon to work, the liquid must form a continuous column within the tube. No air bubbles should be trapped.

### 2. Working Principle of a Siphon

The operation of a siphon can be explained by considering the pressures at different points:

1.  **Initial Filling:** The siphon tube must first be filled with the liquid. This is usually done by submerging the entire tube and then placing one end in the source liquid and the other end below the source liquid level.
2.  **Pressure at Source Surface:** The free surface of the liquid in the source container is exposed to atmospheric pressure ($P_{atm}$).
3.  **Pressure at Highest Point of Siphon:** Let's consider the highest point of the siphon tube. The pressure at this point ($P_{high}$) is equal to the atmospheric pressure minus the hydrostatic pressure due to the height of the liquid column above this point in the *intake* leg.
    $P_{high} = P_{atm} - \rho g h_{intake}$
    where:
    *   $\rho$ is the density of the liquid
    *   $g$ is the acceleration due to gravity
    *   $h_{intake}$ is the vertical height from the source liquid surface to the highest point of the siphon.
4.  **Pressure at Discharge Point:** The pressure at the discharge end of the siphon ($P_{discharge}$) is equal to the atmospheric pressure plus the hydrostatic pressure due to the height of the liquid column from the highest point to the discharge point in the *discharge* leg.
    $P_{discharge} = P_{high} + \rho g h_{discharge}$
    where:
    *   $h_{discharge}$ is the vertical height from the highest point of the siphon to the discharge end.
5.  **Flow Initiation:** For flow to occur, the pressure at the discharge point must be lower than the pressure at the source surface. This happens when the discharge end is lower than the source liquid level. The gravitational pull on the liquid column in the discharge leg creates a lower pressure at the highest point than that at the source surface.
6.  **Driving Force:** The net driving force for the flow is the difference in hydrostatic pressure between the source liquid surface and the discharge point. This pressure difference is what overcomes the atmospheric pressure acting at the source surface and allows the liquid to be lifted and then flow down.

**Simplified Explanation:**

Imagine pushing water up a straw. If you suck from the other end, you reduce the pressure inside the straw. The atmospheric pressure on the surface of the water in the container then pushes the water up the straw into the low-pressure region. A siphon works similarly, but instead of suction, gravity in the longer discharge leg of the tube creates a continuous pull.

### 3. Conditions for Siphon Operation

Several conditions must be met for a siphon to function correctly:

*   **Discharge Point Lower Than Source Level:** The outlet of the siphon **must be lower than the free surface of the liquid in the source container.** If the outlet is at the same level or higher, flow will not occur or will cease.
*   **Continuous Liquid Column:** The entire siphon tube must be filled with liquid, and there should be no air bubbles or blockages. Any trapped air will break the liquid column and stop the flow.
*   **Height Limitation:** The highest point of the siphon tube **cannot be more than approximately 10.3 meters (or 33.9 feet) above the source liquid level.** This is because atmospheric pressure can only support a column of water of this height. Beyond this height, the pressure at the highest point would become negative (a vacuum), and the liquid column would break.
*   **No Significant Air Leaks:** The connections to the siphon tube must be airtight. Any air leaking into the tube will disrupt the continuous liquid column.

### 4. Siphon Design and Calculations

While a siphon is a simple device, its performance can be analyzed using fluid mechanics principles.

**Bernoulli's Equation for Siphon Flow:**

Bernoulli's equation can be applied to analyze the flow in a siphon. Let's consider two points:
*   Point 1: The free surface of the liquid in the source container.
*   Point 2: The discharge point of the siphon.

Assuming the siphon tube is filled and the liquid is moving steadily, Bernoulli's equation (in its ideal, frictionless form) states:

$\frac{P_1}{\rho g} + \frac{v_1^2}{2g} + z_1 = \frac{P_2}{\rho g} + \frac{v_2^2}{2g} + z_2$

Where:
*   $P_1$: Pressure at point 1 ($P_{atm}$)
*   $v_1$: Velocity at point 1 (assumed to be negligible, $v_1 \approx 0$)
*   $z_1$: Datum height for point 1
*   $P_2$: Pressure at point 2 ($P_{atm}$)
*   $v_2$: Velocity at point 2 (the exit velocity)
*   $z_2$: Datum height for point 2

Let's set the datum ($z=0$) at the level of the free surface in the source container. Then $z_1 = 0$. Let $h_L$ be the total vertical drop from the source surface to the discharge point, so $z_2 = -h_L$.

$\frac{P_{atm}}{\rho g} + 0 + 0 = \frac{P_{atm}}{\rho g} + \frac{v_2^2}{2g} - h_L$

This simplifies to:

$0 = \frac{v_2^2}{2g} - h_L$
$v_2^2 = 2gh_L$
$v_2 = \sqrt{2gh_L}$

This ideal exit velocity is the same as if the liquid were falling freely from the source level to the discharge level.

**Including Losses:**

In reality, there are energy losses due to friction within the pipe and losses at the inlet and outlet. These are accounted for by adding a head loss term ($h_{loss}$):

$\frac{P_1}{\rho g} + \frac{v_1^2}{2g} + z_1 = \frac{P_2}{\rho g} + \frac{v_2^2}{2g} + z_2 + h_{loss}$

Using the same assumptions as before:

$0 = \frac{v_2^2}{2g} - h_L + h_{loss}$
$h_L - h_{loss} = \frac{v_2^2}{2g}$

This means the actual head driving the flow is reduced by the losses. The head loss ($h_{loss}$) can be expressed as:

$h_{loss} = h_{f} + h_{m}$
Where:
*   $h_f$: Frictional losses along the length of the pipe. This can be calculated using the Darcy-Weisbach equation: $h_f = f \frac{L}{D} \frac{v^2}{2g}$, where $f$ is the friction factor, $L$ is the pipe length, $D$ is the pipe diameter, and $v$ is the average velocity.
*   $h_m$: Minor losses due to fittings, bends, and entrance/exit effects. These are often expressed as $h_m = \sum K \frac{v^2}{2g}$, where $K$ is the loss coefficient for each fitting.

The average velocity $v$ in the Darcy-Weisbach equation is related to the exit velocity $v_2$ (if the pipe diameter is constant throughout).

### 5. Reynolds Number and Siphon Flow

The Reynolds number ($Re$) is crucial for understanding the flow regime (laminar or turbulent) within the siphon tube.

$Re = \frac{\rho v D}{\mu}$

Where:
*   $\rho$: Density of the fluid
*   $v$: Average velocity of the fluid
*   $D$: Diameter of the pipe
*   $\mu$: Dynamic viscosity of the fluid

*   **Laminar Flow ($Re < 2300$):** The fluid flows in smooth, parallel layers. Friction losses are predictable.
*   **Turbulent Flow ($Re > 4000$):** The fluid flow is chaotic and irregular, with eddies and mixing. Friction losses are higher and more complex to calculate.
*   **Transitional Flow ($2300 < Re < 4000$):** The flow exhibits characteristics of both laminar and turbulent flow.

The Reynolds number influences the friction factor ($f$) in the Darcy-Weisbach equation, which in turn affects the head loss and thus the flow rate. A siphon can operate under both laminar and turbulent conditions.

### 6. Applications of Siphons

Siphons have numerous practical applications:

*   **Draining tanks or containers:** A common use for emptying water tanks, swimming pools, or even aquariums.
*   **Water supply systems:** In some domestic plumbing systems, siphonic action can be used to draw water from a higher reservoir.
*   **Wastewater treatment:** Siphons are used in some septic tank designs (e.g., dosing siphons) to periodically discharge effluent.
*   **Irrigation:** In some agricultural setups, siphons can be used for irrigation.
*   **Automotive:** The fuel system in older cars often used a siphon effect to draw fuel from the tank.
*   **Laboratory equipment:** Used for transferring liquids between beakers or flasks.
*   **Toilet flushing mechanisms:** The classic "siphon jet" toilet utilizes siphon action for efficient flushing.

### 7. Siphon vs. Pump

While both siphons and pumps move fluids, they operate on fundamentally different principles:

| Feature         | Siphon                                      | Pump                                         |
| :-------------- | :------------------------------------------ | :------------------------------------------- |
| **Mechanism**   | Relies on gravity and atmospheric pressure. | Uses mechanical energy to create pressure.   |
| **Energy Source** | Potential energy of the liquid.             | External power (electricity, engine).        |
| **Lifting Height** | Limited by atmospheric pressure (~10.3m).   | Can lift fluids to much greater heights.     |
| **Flow Rate**   | Generally lower and dependent on height.    | Can achieve higher and controlled flow rates. |
| **Complexity**  | Simple, few moving parts.                   | More complex, involves moving mechanical parts. |
| **Power Req.**  | None required.                              | Requires external power.                     |

### 8. Limitations of Siphons

*   **Maximum Lift Height:** As mentioned, the lift from the source liquid level to the highest point of the siphon is limited by atmospheric pressure (around 10.3 meters for water).
*   **Prime Requirement:** The siphon must be "primed" (filled with liquid) before it can operate.
*   **Vulnerability to Air:** Air leaks or dissolved gases coming out of solution can break the siphon.
*   **Limited Control:** Flow rate is primarily determined by the height difference and pipe characteristics, with less direct control than a pump.

### 9. Important Points to Remember

*   **Always check the vertical height difference.** The discharge end must be lower than the source surface.
*   **Ensure the siphon tube is fully primed.** No air should be trapped.
*   **The maximum suction lift is limited by atmospheric pressure.**
*   **The highest point of the siphon is critical for pressure calculations.**
*   **Friction and minor losses reduce the actual flow rate.**
*   **The Reynolds number helps determine the flow regime and influences head loss.**

---

### Practice Questions and Exercises

**Question 1:**

A simple siphon is used to transfer water from a reservoir to a lower point. The free surface of the water in the reservoir is at an elevation of 10 m. The highest point of the siphon tube is at an elevation of 2 m above the reservoir surface. The discharge end of the siphon is at an elevation of 5 m below the reservoir surface.

**(a)** What is the maximum possible theoretical height the reservoir surface can be above the discharge point for a siphon to function?
**(b)** Assuming ideal conditions (no losses), calculate the velocity of the water at the discharge end of the siphon.
**(c)** If the highest point of the siphon tube were 11 meters above the reservoir surface, would the siphon work? Explain why.

**Answer 1:**

**(a)** The maximum possible theoretical height the reservoir surface can be above the discharge point is limited by atmospheric pressure. Atmospheric pressure can support a column of water approximately 10.3 meters high. So, if the reservoir surface is 10.3 meters higher than the discharge point, the siphon could theoretically work. (However, for practical purposes, the maximum lift from the source surface to the highest point is the critical factor, around 10.3m, and the discharge needs to be below the source surface).

**(b)** Let the datum be at the reservoir surface ($z=0$).
*   $z_{source\_surface} = 0$
*   $h_{intake}$ (height from source surface to highest point) = 2 m. So, highest point elevation = 2 m.
*   $h_L$ (total vertical drop from source surface to discharge) = 10 m (from reservoir surface at 10m to discharge at 5m relative to reservoir surface, so the drop is 10 - 5 = 5m. Correction: Let's re-interpret the question stating elevations relative to an arbitrary datum. If reservoir surface is at 10m and discharge at 5m, the total vertical drop is 5m. However, if the question meant reservoir surface is at 0m and discharge is at -5m, then the drop is 5m. Let's assume the question meant the *difference in elevation* between the source surface and the discharge point is 10m).

Let's rephrase for clarity:
Reservoir surface elevation = $z_1 = 10$ m.
Discharge point elevation = $z_2 = 5$ m.
Total vertical drop ($h_L$) = $z_1 - z_2 = 10 - 5 = 5$ m.

Using the ideal velocity formula $v_2 = \sqrt{2gh_L}$:
$v_2 = \sqrt{2 \times 9.81 \, m/s^2 \times 5 \, m}$
$v_2 = \sqrt{98.1} \, m/s$
$v_2 \approx 9.90 \, m/s$

**(c)** No, the siphon would not work. If the highest point of the siphon tube is 11 meters above the reservoir surface, this exceeds the limit that atmospheric pressure can support (approximately 10.3 meters). The pressure at this highest point would become negative (a vacuum), breaking the continuous liquid column and stopping the flow.

---

**Question 2:**

Describe the conditions necessary for a siphon to operate effectively.

**Answer 2:**

The conditions necessary for a siphon to operate effectively are:
1.  **Discharge end lower than the source liquid level:** The outlet must be vertically below the surface of the liquid in the source container.
2.  **Continuous liquid column:** The siphon tube must be completely filled with liquid without any air bubbles or blockages.
3.  **Maximum height limitation:** The highest point of the siphon tube must be within the atmospheric pressure limit for lifting liquid (approximately 10.3 meters for water above the source surface).
4.  **Airtight connections:** Any joints or connections in the siphon tube must be airtight to prevent air ingress.

---

**Question 3:**

A siphon made of a flexible hose with an inner diameter of 2 cm is used to drain a large tank of water. The free surface of the water in the tank is 1.5 m above the outlet of the hose. The hose rises to a maximum height of 0.8 m above the tank's water surface before descending to the outlet. If the hose has a total length of 5 m, the friction factor $f = 0.02$, and the viscosity of water is $1 \times 10^{-3} Pa \cdot s$, density is $1000 kg/m^3$.

**(a)** Estimate the flow rate in $m^3/s$ and the Reynolds number.
**(b)** Comment on the flow regime (laminar or turbulent).

**Answer 3:**

First, let's define the parameters:
*   $D = 0.02 \, m$
*   $z_{source\_surface} = 0$ (datum)
*   $z_{discharge} = -1.5 \, m$
*   $h_{intake} = 0.8 \, m$ (height from source surface to highest point)
*   $L = 5 \, m$
*   $f = 0.02$
*   $\rho = 1000 \, kg/m^3$
*   $\mu = 1 \times 10^{-3} \, Pa \cdot s$

We need to use the energy equation with head losses:
$h_L - h_{loss} = \frac{v^2}{2g}$

The total head available to drive the flow is the vertical distance between the source surface and the discharge point, which is $h_L = 1.5 \, m$.

The head loss consists of:
*   Frictional loss: $h_f = f \frac{L}{D} \frac{v^2}{2g}$
*   Minor losses (we'll assume negligible for simplicity in this problem, but in a real case, entrance/exit losses would be included).

So, $h_{loss} = h_f = 0.02 \times \frac{5 \, m}{0.02 \, m} \times \frac{v^2}{2g} = 5 \times \frac{v^2}{2g}$.

Substituting into the energy equation:
$1.5 \, m - 5 \times \frac{v^2}{2g} = \frac{v^2}{2g}$
$1.5 \, m = 6 \times \frac{v^2}{2g}$
$9 = v^2$
$v = 3 \, m/s$

**(a)** Flow rate ($Q$) = Area $\times$ velocity = $(\frac{\pi D^2}{4}) \times v$
$Q = (\frac{\pi (0.02 \, m)^2}{4}) \times 3 \, m/s$
$Q = (\frac{\pi \times 0.0004 \, m^2}{4}) \times 3 \, m/s$
$Q = (\pi \times 0.0001 \, m^2) \times 3 \, m/s$
$Q \approx 9.42 \times 10^{-4} \, m^3/s$

Reynolds Number ($Re$) = $\frac{\rho v D}{\mu}$
$Re = \frac{1000 \, kg/m^3 \times 3 \, m/s \times 0.02 \, m}{1 \times 10^{-3} \, Pa \cdot s}$
$Re = \frac{60}{1 \times 10^{-3}}$
$Re = 60,000$

**(b)** Since $Re = 60,000$, which is much greater than 4000, the flow regime is **turbulent**.

**(Note:** The assumption of a constant friction factor $f$ for turbulent flow is generally valid, but it's worth noting that $f$ can also depend on the Reynolds number and pipe roughness. For a typical plastic or smooth hose, $f=0.02$ is a reasonable estimate).
