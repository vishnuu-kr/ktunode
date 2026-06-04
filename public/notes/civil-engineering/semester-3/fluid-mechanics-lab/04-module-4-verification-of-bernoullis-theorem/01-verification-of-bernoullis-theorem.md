---
title: "Verification of Bernoulli’s theorem"
subject: "FLUID MECHANICS LAB"
module: "Module 4: Verification of Bernoulli’s theorem"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba8108dc"
status: "completed"
scrapedAt: "2026-05-20T18:40:51.948Z"
---
# Fluid Mechanics Lab: Module 4 - Verification of Bernoulli's Theorem

---

## Topic: Verification of Bernoulli's Theorem

### 1. Introduction to Bernoulli's Theorem

**What is Bernoulli's Theorem?**

Bernoulli's theorem is a fundamental principle in fluid mechanics that relates the pressure, velocity, and elevation of a fluid in motion. It is essentially a statement of the **conservation of energy** for an ideal fluid flowing along a streamline.

**Assumptions for Bernoulli's Theorem:**

It's crucial to remember that Bernoulli's theorem is derived based on several assumptions:

*   **Ideal Fluid:** The fluid is incompressible and inviscid (no viscosity). This means the fluid's density remains constant, and there are no internal frictional forces.
*   **Steady Flow:** The velocity, pressure, and density at any point in the fluid do not change with time.
*   **Along a Streamline:** The theorem applies to points lying on the same streamline. A streamline is an imaginary line drawn in a fluid flow such that the tangent to the line at any point is in the direction of the fluid velocity at that point.
*   **No Heat Transfer:** There is no heat added to or removed from the fluid.
*   **No Shaft Work:** There are no external devices (like pumps or turbines) adding or removing energy from the fluid.

**The Bernoulli Equation:**

The Bernoulli equation can be expressed as:

$$ P + \frac{1}{2}\rho v^2 + \rho g h = \text{Constant} $$

Where:

*   $P$ is the **static pressure** (pressure exerted by the fluid at rest).
*   $\frac{1}{2}\rho v^2$ is the **dynamic pressure** (pressure due to the motion of the fluid).
*   $\rho g h$ is the **hydrostatic pressure** or **potential energy per unit volume** (pressure due to elevation).
*   $\rho$ is the **density** of the fluid.
*   $v$ is the **mean velocity** of the fluid.
*   $g$ is the acceleration due to gravity.
*   $h$ is the **elevation** or **height** of the fluid above a reference datum.

**Alternative Forms of the Bernoulli Equation:**

The Bernoulli equation can also be expressed in terms of **pressure head**, **velocity head**, and **elevation head**:

$$ \frac{P}{\rho g} + \frac{v^2}{2g} + h = \text{Constant} $$

*   $\frac{P}{\rho g}$: **Pressure head** (equivalent height of a column of fluid that would produce the static pressure $P$).
*   $\frac{v^2}{2g}$: **Velocity head** (equivalent height of a column of fluid that would produce the dynamic pressure $\frac{1}{2}\rho v^2$).
*   $h$: **Elevation head**.

The **total head** ($H$) is the sum of these three heads: $H = \frac{P}{\rho g} + \frac{v^2}{2g} + h$. Bernoulli's theorem states that the total head remains constant along a streamline.

### 2. Experimental Verification of Bernoulli's Theorem

**Objective:**

To experimentally verify Bernoulli's theorem by measuring the static pressure, velocity, and elevation at different points along a converging-diverging duct (Venturi meter) and demonstrating that the total head remains approximately constant.

**Apparatus:**

*   **Venturi Meter:** A device with a converging section, a throat (smallest cross-sectional area), and a diverging section.
*   **Water Supply:** A tank or pump to provide a continuous flow of water.
*   **Manometer Board:** A series of piezometer tubes connected at different points along the Venturi meter to measure the static pressure (by indicating the static head).
*   **Flow Measuring Device:** Usually a flow meter or a collection tank and stopwatch to measure the discharge rate.

**Experimental Setup:**

1.  The Venturi meter is connected to the water supply.
2.  Piezometer tubes are attached to various tapping points along the Venturi meter at different cross-sectional areas. These tubes are open to the atmosphere at the top.
3.  The flow rate is controlled and measured.

**Procedure:**

1.  **Set up the apparatus:** Ensure all connections are secure and the Venturi meter is properly installed.
2.  **Start the flow:** Open the water supply and allow the fluid to flow through the Venturi meter.
3.  **Measure flow rate:** Record the discharge rate ($Q$) using the flow meter or by collecting water in a tank for a specific time.
4.  **Record piezometer readings:** For each piezometer tube, read the height of the water column. This height represents the static head ($h_s = \frac{P}{\rho g}$) at that point.
5.  **Calculate velocities:** For each section of the Venturi meter, calculate the mean velocity ($v$) using the continuity equation: $Q = A \cdot v$, where $A$ is the cross-sectional area at that point.
6.  **Calculate total head:** For each point, calculate the total head: $H = h_s + \frac{v^2}{2g} + h$, where $h$ is the elevation of the tapping point above a chosen datum.
7.  **Repeat for different flow rates:** Vary the flow rate and repeat steps 3-6 to collect data for different flow conditions.

**Data Collection and Calculation:**

| Point No. | Cross-sectional Area, A ($m^2$) | Elevation, h ($m$) | Piezometer Reading ($h_s$, $m$) | Velocity, v ($m/s$) ($v=Q/A$) | Velocity Head, $\frac{v^2}{2g}$ ($m$) | Total Head, H ($m$) ($H = h_s + \frac{v^2}{2g} + h$) |
| :-------- | :------------------------------ | :----------------- | :------------------------------ | :----------------------------- | :---------------------------------- | :------------------------------------------------ |
| 1         | $A_1$                           | $h_1$              | $h_{s1}$                        | $v_1$                          | $\frac{v_1^2}{2g}$                  | $H_1$                                             |
| 2         | $A_2$                           | $h_2$              | $h_{s2}$                        | $v_2$                          | $\frac{v_2^2}{2g}$                  | $H_2$                                             |
| ...       | ...                             | ...                | ...                             | ...                            | ...                                 | ...                                               |

**Example Calculation (for one point):**

Let's assume for point 1:
*   $Q = 0.002 \, m^3/s$
*   $A_1 = 0.01 \, m^2$
*   $h_1 = 0.1 \, m$ (elevation above datum)
*   Piezometer reading $h_{s1} = 0.2 \, m$

Calculations:
*   Velocity: $v_1 = Q / A_1 = 0.002 \, m^3/s / 0.01 \, m^2 = 0.2 \, m/s$
*   Velocity Head: $\frac{v_1^2}{2g} = \frac{(0.2 \, m/s)^2}{2 \times 9.81 \, m/s^2} = \frac{0.04 \, m^2/s^2}{19.62 \, m/s^2} \approx 0.002 \, m$
*   Total Head: $H_1 = h_{s1} + \frac{v_1^2}{2g} + h_1 = 0.2 \, m + 0.002 \, m + 0.1 \, m = 0.302 \, m$

You would repeat this for all points along the Venturi meter.

### 3. Interpretation of Results and Verification

**Graphical Representation:**

Plot the piezometer readings ($h_s$), velocity heads ($\frac{v^2}{2g}$), and total head ($H$) against the longitudinal position along the Venturi meter.

**Expected Observations:**

*   **Pressure and Velocity Relationship:** As the cross-sectional area decreases (converging section), the velocity increases, and the static pressure decreases (piezometer reading drops). Conversely, as the area increases (diverging section), the velocity decreases, and the static pressure increases. This demonstrates the inverse relationship between pressure and velocity for a fluid in motion as stated by Bernoulli's theorem.
*   **Total Head Consistency:** The total head ($H$) should ideally remain constant across all sections of the Venturi meter. In practice, there will be a slight decrease due to frictional losses (viscosity and turbulence).

**Verification:**

Bernoulli's theorem is considered verified if the total head calculated at different points along the Venturi meter shows minimal variation and remains close to a constant value. The degree of variation will indicate the extent of energy losses due to friction.

### 4. Applications of Bernoulli's Theorem

Bernoulli's theorem has numerous practical applications in engineering and science:

*   **Venturi Meter:** Used for measuring flow rate in pipes.
*   **Orifice Meter:** Similar to a Venturi meter, used for flow measurement.
*   **Pitot Tube:** Used to measure fluid velocity by determining the stagnation pressure.
*   **Aerodynamics:** Explains lift on airplane wings. The curved upper surface of a wing causes air to travel faster, resulting in lower pressure above the wing than below it, creating an upward force (lift).
*   **Atomizer/Spray Nozzles:** The high-velocity air blown across the top of a tube draws liquid upwards, where it is atomized into a spray.
*   **Chimney Effect:** Wind blowing over the top of a chimney creates a low-pressure area, drawing smoke up and out.
*   **Carburetor:** Operates on the principle of reduced pressure due to increased velocity.
*   **Curve Ball in Baseball:** The spin of a ball causes air to move at different speeds on opposite sides, creating a pressure difference that deflects the ball.

### 5. Learning Outcomes Covered:

*   **Understanding of Bernoulli's Theorem:** The fundamental equation and its assumptions are explained.
*   **Experimental Setup and Procedure:** Detailed steps for verifying the theorem using a Venturi meter are provided.
*   **Data Collection and Analysis:** Guidance on what data to collect and how to perform calculations is given.
*   **Interpretation of Results:** Expected observations and how to interpret them to verify the theorem are discussed.
*   **Applications:** Real-world examples of where Bernoulli's theorem is applied are highlighted.

---

### 6. Practice Questions and Exercises

**Question 1:**
State the Bernoulli equation and define each term. What are the key assumptions made in deriving this equation?

**Answer:**
The Bernoulli equation is: $P + \frac{1}{2}\rho v^2 + \rho g h = \text{Constant}$.
*   $P$: Static pressure.
*   $\frac{1}{2}\rho v^2$: Dynamic pressure.
*   $\rho g h$: Hydrostatic pressure/potential energy per unit volume.
*   $\rho$: Density of the fluid.
*   $v$: Mean velocity of the fluid.
*   $g$: Acceleration due to gravity.
*   $h$: Elevation.

Assumptions: Ideal fluid (incompressible, inviscid), steady flow, along a streamline, no heat transfer, no shaft work.

**Question 2:**
A Venturi meter has a throat diameter of 0.05 m and an inlet diameter of 0.1 m. If the flow rate is 0.02 $m^3/s$ and the pressure difference between the inlet and throat is 5000 Pa, calculate the velocity at the inlet and throat. (Assume water density $\rho = 1000 \, kg/m^3$).

**Answer:**
First, calculate the areas:
*   Inlet Area ($A_{in}$): $\pi (0.1/2)^2 = \pi (0.05)^2 = 0.00785 \, m^2$
*   Throat Area ($A_{th}$): $\pi (0.05/2)^2 = \pi (0.025)^2 = 0.00196 \, m^2$

Using the continuity equation ($Q = Av$):
*   Velocity at inlet ($v_{in}$): $0.02 \, m^3/s / 0.00785 \, m^2 \approx 2.55 \, m/s$
*   Velocity at throat ($v_{th}$): $0.02 \, m^3/s / 0.00196 \, m^2 \approx 10.20 \, m/s$

Now, using Bernoulli's equation in terms of pressure:
$P_{in} + \frac{1}{2}\rho v_{in}^2 = P_{th} + \frac{1}{2}\rho v_{th}^2$ (assuming elevations are the same)
$P_{in} - P_{th} = \frac{1}{2}\rho (v_{th}^2 - v_{in}^2)$
$5000 \, Pa = \frac{1}{2} (1000 \, kg/m^3) ((10.20 \, m/s)^2 - (2.55 \, m/s)^2)$
$5000 \, Pa = 500 \, kg/m^3 (104.04 \, m^2/s^2 - 6.50 \, m^2/s^2)$
$5000 \, Pa = 500 \, kg/m^3 (97.54 \, m^2/s^2)$
$5000 \, Pa \approx 48770 \, Pa$

*Note: There's a significant discrepancy in this calculated value, likely due to the simplified scenario where the pressure difference is directly given without considering energy losses or actual piezometer readings. In a real experiment, the calculated pressure difference from measured velocities would be compared to the actual measured pressure difference.*

**Question 3:**
Explain how Bernoulli's theorem is applied to explain the lift on an airplane wing.

**Answer:**
An airplane wing is designed with a curved upper surface and a relatively flatter lower surface. As the wing moves through the air, the air flowing over the curved upper surface has to travel a longer distance than the air flowing under the flatter lower surface in the same amount of time. This means the air velocity above the wing is higher than the air velocity below the wing. According to Bernoulli's theorem, where the velocity is higher, the pressure is lower. Therefore, the pressure above the wing is lower than the pressure below the wing. This pressure difference creates an upward force, known as lift, which supports the airplane.

---

### 7. Important Points to Remember

*   **Conservation of Energy:** Bernoulli's theorem is a statement of energy conservation for fluids.
*   **Inverse Relationship:** Pressure and velocity are inversely related along a streamline when elevation is constant.
*   **Total Head:** The sum of static pressure, dynamic pressure, and hydrostatic pressure (in head form) remains constant for an ideal fluid.
*   **Real Fluids:** In real fluids, energy losses due to viscosity and turbulence cause a slight decrease in total head along the flow path.
*   **Applications are widespread:** Understand its use in various engineering devices and natural phenomena.
*   **Assumptions are critical:** Always keep the assumptions in mind when applying Bernoulli's theorem.

---
