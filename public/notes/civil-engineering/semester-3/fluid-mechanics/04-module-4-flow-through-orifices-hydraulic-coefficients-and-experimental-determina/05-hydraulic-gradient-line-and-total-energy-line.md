---
title: "hydraulic gradient line and total energy line"
subject: "FLUID MECHANICS"
module: "Module 4: Flow through Orifices: hydraulic coefficients and experimental determination of hydraulic coefficients (associated numerical problems)"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810704"
status: "completed"
scrapedAt: "2026-05-20T18:40:42.966Z"
---
# Fluid Mechanics: Module 4 - Flow Through Orifices

## Topic: Hydraulic Gradient Line (HGL) and Total Energy Line (TEL)

This topic delves into the graphical representation of energy within a fluid flow system, particularly relevant when analyzing flow through orifices and other pipe/channel sections. Understanding the HGL and TEL is crucial for visualizing energy losses and gains.

---

### 1. Introduction to Energy in Fluid Flow

*   **Energy is conserved in an ideal fluid flow (Bernoulli's Principle).** However, real fluids experience energy losses due to viscosity and turbulence.
*   **Energy per unit weight of fluid** is a convenient way to represent energy in fluid mechanics.

---

### 2. Components of Total Energy per Unit Weight

The total energy per unit weight of fluid at any point in a flow system can be expressed as the sum of three components:

*   **Pressure Energy (or Flow Energy) Head ($\frac{P}{\rho g}$):**
    *   Represents the energy due to the pressure of the fluid.
    *   $P$ = Pressure of the fluid (N/m²)
    *   $\rho$ = Density of the fluid (kg/m³)
    *   $g$ = Acceleration due to gravity (m/s²)
    *   Units: Meters (m)

*   **Kinetic Energy Head ($\frac{V^2}{2g}$):**
    *   Represents the energy due to the velocity of the fluid.
    *   $V$ = Average velocity of the fluid (m/s)
    *   Units: Meters (m)

*   **Potential Energy Head (or Elevation Head) ($z$):**
    *   Represents the energy due to the elevation of the fluid above a datum.
    *   $z$ = Elevation of the fluid (m)
    *   Units: Meters (m)

---

### 3. The Total Energy Line (TEL)

*   **Definition:** The Total Energy Line (TEL) is a line that represents the sum of the pressure head, kinetic energy head, and potential energy head at all points along a fluid flow path.
*   **Equation:**
    $$TEL = \frac{P}{\rho g} + \frac{V^2}{2g} + z$$
*   **Significance:** The TEL represents the **total mechanical energy per unit weight** of the fluid. In an ideal, frictionless flow, the TEL would be horizontal. In real flows, the TEL will slope downwards due to energy losses.
*   **Graphical Representation:**
    *   The TEL is always above the Hydraulic Gradient Line (unless the velocity is zero).
    *   The vertical distance between the TEL and the datum is the total energy per unit weight.

---

### 4. The Hydraulic Gradient Line (HGL)

*   **Definition:** The Hydraulic Gradient Line (HGL) is a line that represents the sum of the pressure head and potential energy head at all points along a fluid flow path. It can also be visualized as the level to which water would rise in a series of piezometers inserted into the flow.
*   **Equation:**
    $$HGL = \frac{P}{\rho g} + z$$
*   **Significance:** The HGL represents the **piezometric head**. It indicates the pressure and elevation energy available in the fluid.
*   **Graphical Representation:**
    *   The HGL is always below the TEL by an amount equal to the kinetic energy head ($\frac{V^2}{2g}$).
    *   When the velocity is zero ($V=0$), the HGL and TEL coincide.
    *   The HGL will decrease in a pipe flow system due to friction losses.
    *   If the flow is through an expansion (e.g., from a smaller pipe to a larger pipe), the velocity decreases, and the TEL will drop less rapidly (or even increase if there's a minor gain in head). The HGL will rise in an expansion.
    *   If the flow is through a contraction (e.g., from a larger pipe to a smaller pipe), the velocity increases, and the TEL will drop more rapidly. The HGL will fall in a contraction.

---

### 5. Relationship Between TEL and HGL

*   **TEL = HGL + Kinetic Energy Head**
*   **TEL = HGL + $\frac{V^2}{2g}$**
*   The vertical distance between the TEL and the HGL is always equal to the kinetic energy head ($\frac{V^2}{2g}$).
*   This distance varies with the velocity of the fluid. Where velocity is high, the distance is large. Where velocity is low, the distance is small.

---

### 6. Behavior of TEL and HGL in Different Flow Scenarios

*   **Flow in a Uniform Pipe with Friction:**
    *   Both TEL and HGL slope downwards in the direction of flow, indicating energy loss due to friction.
    *   The TEL is always above the HGL.
    *   The vertical distance between TEL and HGL remains constant if the pipe diameter (and thus velocity) is constant.

*   **Flow Through a Venturi Meter or Orifice (Contraction):**
    *   As the flow contracts, the velocity ($V$) increases.
    *   The kinetic energy head ($\frac{V^2}{2g}$) increases.
    *   Consequently, the HGL drops significantly as pressure energy is converted to kinetic energy.
    *   The TEL drops due to frictional losses, but the drop is less pronounced than the drop in HGL. The distance between TEL and HGL increases.

*   **Flow Through a Diffuser or Expansion (e.g., expanding pipe):**
    *   As the flow expands, the velocity ($V$) decreases.
    *   The kinetic energy head ($\frac{V^2}{2g}$) decreases.
    *   Consequently, the HGL rises as kinetic energy is converted back to pressure energy.
    *   The TEL continues to drop due to friction, but the rate of drop might be less than the rate of drop of HGL in the preceding section. The distance between TEL and HGL decreases.

*   **Flow Through an Orifice (Discharge into Atmosphere):**
    *   When a fluid flows through an orifice from a tank, the jet emerges with a certain velocity.
    *   The HGL at the vena contracta (point of minimum jet area) is generally considered to be at the level of the vena contracta itself.
    *   The TEL at the vena contracta is above the HGL by the kinetic energy head of the jet.
    *   The TEL at the surface of the liquid in the tank is at the free surface level (assuming atmospheric pressure).
    *   The drop in TEL from the tank surface to the orifice jet is due to frictional losses in the pipe leading to the orifice and the losses associated with the orifice itself.

---

### 7. Piezometers and Pitot Tubes

*   **Piezometer:** A simple tube attached to a pipe or tank that measures the pressure head. The liquid rises in the piezometer to the HGL.
*   **Pitot Tube:** A device used to measure the stagnation pressure. It is inserted facing the flow. The fluid brought to rest at the tip of the pitot tube experiences a stagnation pressure.
    *   The reading in a piezometer connected to the side of the pitot tube (measuring static pressure) and the height in the pitot tube itself (which measures stagnation pressure) can be used to determine the velocity.
    *   The height in the pitot tube represents the total energy head (TEL) relative to the point where the static pressure is measured.

---

### 8. Numerical Problems and Examples

**Example 1: Uniform Pipe Flow**

Water flows through a horizontal pipe of diameter 10 cm at a rate of 0.02 m³/s. The pipe is 100 m long and has a friction factor $f = 0.02$. The pressure at the inlet is 200 kPa. Determine the pressure at the outlet.

**Solution:**

1.  **Calculate velocity (V):**
    *   Area (A) = $\pi r^2 = \pi (0.05 m)^2 = 0.00785 m^2$
    *   $V = \frac{Q}{A} = \frac{0.02 m^3/s}{0.00785 m^2} = 2.55 m/s$

2.  **Calculate kinetic energy head ($\frac{V^2}{2g}$):**
    *   $\frac{V^2}{2g} = \frac{(2.55 m/s)^2}{2 \times 9.81 m/s^2} = \frac{6.5025 m^2/s^2}{19.62 m/s^2} = 0.33 m$

3.  **Calculate pressure head at inlet ($\frac{P_1}{\rho g}$):**
    *   $\frac{P_1}{\rho g} = \frac{200 \times 10^3 N/m^2}{1000 kg/m^3 \times 9.81 m/s^2} = 20.39 m$

4.  **Calculate friction head loss ($h_f$):**
    *   Using Darcy-Weisbach equation: $h_f = f \frac{L}{D} \frac{V^2}{2g}$
    *   $h_f = 0.02 \times \frac{100 m}{0.1 m} \times 0.33 m = 2 \times 0.33 m = 6.6 m$

5.  **Apply Bernoulli's equation with head loss:**
    *   $\frac{P_1}{\rho g} + \frac{V_1^2}{2g} + z_1 = \frac{P_2}{\rho g} + \frac{V_2^2}{2g} + z_2 + h_f$
    *   Since the pipe is horizontal, $z_1 = z_2$. The diameter is uniform, so $V_1 = V_2$.
    *   $\frac{P_1}{\rho g} = \frac{P_2}{\rho g} + h_f$
    *   $\frac{P_2}{\rho g} = \frac{P_1}{\rho g} - h_f = 20.39 m - 6.6 m = 13.79 m$

6.  **Calculate pressure at outlet ($P_2$):**
    *   $P_2 = \rho g \times \frac{P_2}{\rho g} = 1000 kg/m^3 \times 9.81 m/s^2 \times 13.79 m = 135280 Pa = 135.28 kPa$

**Interpretation of TEL and HGL for Example 1:**

*   **Datum:** Let's set the datum at the center of the pipe. So, $z_1 = z_2 = 0$.
*   **TEL at inlet:** $TEL_1 = \frac{P_1}{\rho g} + \frac{V_1^2}{2g} + z_1 = 20.39 m + 0.33 m + 0 m = 20.72 m$
*   **HGL at inlet:** $HGL_1 = \frac{P_1}{\rho g} + z_1 = 20.39 m + 0 m = 20.39 m$
*   **TEL at outlet:** $TEL_2 = \frac{P_2}{\rho g} + \frac{V_2^2}{2g} + z_2 = 13.79 m + 0.33 m + 0 m = 14.12 m$
*   **HGL at outlet:** $HGL_2 = \frac{P_2}{\rho g} + z_2 = 13.79 m + 0 m = 13.79 m$

**Observation:** The TEL drops from 20.72 m to 14.12 m, a total drop of 6.6 m, which is the friction head loss. The HGL drops from 20.39 m to 13.79 m, also a drop of 6.6 m. The vertical distance between TEL and HGL is constant at 0.33 m (the kinetic energy head).

---

**Example 2: Flow Through an Orifice**

Water flows from a large tank through a sharp-edged orifice of diameter 2 cm located 2 m below the free surface. The jet strikes the ground 3 m horizontally away from the vena contracta. Assuming $C_c = 0.62$ and $C_v = 0.95$. Determine:
a) The velocity of the jet at the vena contracta.
b) The discharge through the orifice.
c) The coefficient of discharge ($C_d$).
d) The height of the TEL and HGL at the vena contracta relative to the orifice level.

**Solution:**

**Assumptions:**
*   The fluid is water ($\rho = 1000 \, kg/m^3$).
*   The datum is at the level of the orifice.

**Given:**
*   $H = 2 \, m$ (head of water above the orifice)
*   $x = 3 \, m$ (horizontal distance)
*   $C_c = 0.62$
*   $C_v = 0.95$
*   Orifice diameter $d = 0.02 \, m$

**a) Velocity of the jet at the vena contracta ($V_j$):**

The trajectory of the jet can be analyzed using projectile motion. The vertical distance fallen is $y = H_{vc}$, and the horizontal distance is $x$. Let $V_{vc}$ be the velocity at the vena contracta.
The time to fall $y$ is $t = \sqrt{\frac{2y}{g}}$.
The horizontal distance $x = V_{vc} \times t$.
So, $x = V_{vc} \sqrt{\frac{2y}{g}}$.

However, we are given the total head $H$ from the free surface to the orifice. The actual velocity at the vena contracta is related to the theoretical velocity by $C_v$:
$V_{vc} = C_v \times V_{theoretical}$
$V_{theoretical} = \sqrt{2gH}$

Let's use the trajectory information:
The jet falls from the orifice level to the ground. Let's assume the orifice is at some height above the ground, or the ground is at the level of the orifice (simplification for analysis). Let's consider the vertical drop of the jet from the vena contracta to the ground is $y$.

If we assume the jet falls from the level of the orifice to the ground, and the orifice is at the top of the jet trajectory (this is not typical for a standard orifice problem, usually the jet falls from the orifice opening).

Let's re-evaluate the problem statement's intent. "The jet strikes the ground 3 m horizontally away from the vena contracta." This implies a trajectory. The vertical distance the jet falls from the vena contracta to the ground is not explicitly given.

**A more standard approach for jet trajectory:**
Let's assume the jet discharges from the orifice at height $z=0$ (our datum). The jet velocity $V_{vc}$ has horizontal and vertical components. However, for a horizontal orifice, the initial vertical velocity is zero.
If the orifice is on the side of the tank and discharges horizontally:
The jet starts at $(0, H)$ relative to the orifice level and strikes the ground at $(x, -y)$, where $y$ is the vertical distance from the orifice to the ground.

Let's assume the ground is *at* the level of the orifice opening for simplicity in analyzing the trajectory from the vena contracta. If the ground is at the level of the vena contracta, then the jet would not fall. This is likely not the case.

**A more common setup:**
The orifice is on the vertical side of a tank. The free surface is at height $H$ above the orifice centerline. The jet then falls.
Let's assume the ground is at the same level as the orifice opening for this part of the problem.
The horizontal distance travelled by the jet from the vena contracta is $x = 3 \, m$.
Let the vertical distance from the vena contracta to the point where the jet hits is $y$.
The velocity at the vena contracta is $V_{vc}$.
$x = V_{vc} \times t$
$y = \frac{1}{2} g t^2$

This problem statement is slightly ambiguous about the vertical drop. A typical setup would be that the orifice is at some height, and the jet falls a distance.

**Let's use the given $C_c$ and $C_v$ to first find $V_{vc}$ and then check trajectory.**

**a) Velocity of the jet at the vena contracta ($V_{vc}$):**
*   Theoretical velocity, $V_{theoretical} = \sqrt{2gH} = \sqrt{2 \times 9.81 \, m/s^2 \times 2 \, m} = \sqrt{39.24} \approx 6.26 \, m/s$
*   Actual velocity at vena contracta, $V_{vc} = C_v \times V_{theoretical} = 0.95 \times 6.26 \, m/s \approx 5.95 \, m/s$

**b) Discharge through the orifice ($Q$):**
*   Area of vena contracta, $A_{vc} = C_c \times A_o$
    *   Area of orifice, $A_o = \pi (d/2)^2 = \pi (0.02 m / 2)^2 = \pi (0.01 m)^2 = 0.000314 \, m^2$
    *   $A_{vc} = 0.62 \times 0.000314 \, m^2 \approx 0.000195 \, m^2$
*   Discharge, $Q = A_{vc} \times V_{vc} = 0.000195 \, m^2 \times 5.95 \, m/s \approx 0.00116 \, m^3/s$

**c) Coefficient of discharge ($C_d$):**
*   $C_d = C_v \times C_c = 0.95 \times 0.62 = 0.59$

**Now let's check the trajectory with the calculated $V_{vc}$:**
The jet velocity $V_{vc}$ is assumed to be horizontal at the vena contracta.
The horizontal distance $x = 3 \, m$.
Time of flight $t = x / V_{vc} = 3 \, m / 5.95 \, m/s \approx 0.504 \, s$.
The vertical distance fallen in this time is $y = \frac{1}{2} g t^2 = \frac{1}{2} \times 9.81 \, m/s^2 \times (0.504 \, s)^2 \approx 1.24 \, m$.
So, the jet strikes the ground 1.24 m below the vena contracta. This implies the "ground" is 1.24 m below the orifice opening.

**d) Height of TEL and HGL at the vena contracta relative to the orifice level (Datum = Orifice level):**

*   **Datum:** Let the level of the orifice (vena contracta) be $z = 0$.
*   **Velocity at vena contracta ($V_{vc}$):** $5.95 \, m/s$
*   **Kinetic energy head at vena contracta ($\frac{V_{vc}^2}{2g}$):**
    *   $\frac{(5.95 \, m/s)^2}{2 \times 9.81 \, m/s^2} = \frac{35.4025}{19.62} \approx 1.80 \, m$

*   **Pressure head at vena contracta ($\frac{P_{vc}}{\rho g}$):**
    *   At the vena contracta, the jet is exposed to atmospheric pressure, so $P_{vc} = P_{atm}$.
    *   If we consider gauge pressure, $P_{vc} = 0 \, N/m^2$.
    *   Therefore, the pressure head is 0.

*   **Potential energy head at vena contracta ($z_{vc}$):**
    *   As per our datum, $z_{vc} = 0 \, m$.

*   **HGL at vena contracta:**
    *   $HGL_{vc} = \frac{P_{vc}}{\rho g} + z_{vc} = 0 \, m + 0 \, m = 0 \, m$.
    *   This means the HGL is at the level of the vena contracta.

*   **TEL at vena contracta:**
    *   $TEL_{vc} = \frac{P_{vc}}{\rho g} + \frac{V_{vc}^2}{2g} + z_{vc} = 0 \, m + 1.80 \, m + 0 \, m = 1.80 \, m$.
    *   The TEL is 1.80 m above the level of the vena contracta.

**Interpretation:**
The HGL being at the level of the vena contracta indicates that all the pressure energy (relative to atmospheric) and potential energy (relative to datum) at the orifice opening have been converted into kinetic energy, plus any remaining potential energy. Since we set the datum at the orifice and considered gauge pressure, the HGL is at zero. The TEL is at 1.80 m, which is precisely the kinetic energy head of the jet.

**Let's visualize the energy at the free surface:**
*   Datum = Orifice level ($z=0$)
*   Free surface is at $H = 2 \, m$ above the orifice level. So, $z_{surface} = 2 \, m$.
*   Pressure at the free surface is atmospheric ($P_{surface} = 0$ gauge).
*   Velocity at the free surface is negligible ($V_{surface} \approx 0$).
*   **HGL at free surface:** $HGL_{surface} = \frac{P_{surface}}{\rho g} + z_{surface} = 0 + 2 \, m = 2 \, m$.
*   **TEL at free surface:** $TEL_{surface} = \frac{P_{surface}}{\rho g} + \frac{V_{surface}^2}{2g} + z_{surface} = 0 + 0 + 2 \, m = 2 \, m$.

**Energy Loss:**
The TEL at the free surface is 2 m. The TEL at the vena contracta is 1.80 m.
The energy loss from the free surface to the vena contracta is $TEL_{surface} - TEL_{vc} = 2 \, m - 1.80 \, m = 0.20 \, m$.
This loss is primarily due to friction in the pipe leading to the orifice and the contraction losses.

---

### 9. Practice Questions

1.  **Question:** A pipe carries water at a velocity of 3 m/s. The pressure at a point in the pipe is 300 kPa, and the elevation is 10 m above datum. Calculate the total energy head and the piezometric head at this point. (Assume $\rho = 1000 \, kg/m^3$, $g = 9.81 \, m/s^2$).
    *   **Answer:**
        *   Kinetic head = $\frac{3^2}{2 \times 9.81} = 0.46 \, m$
        *   Pressure head = $\frac{300 \times 10^3}{1000 \times 9.81} = 30.58 \, m$
        *   Potential head = $10 \, m$
        *   Total Energy Head (TEL) = $0.46 + 30.58 + 10 = 41.04 \, m$
        *   Piezometric Head (HGL) = $30.58 + 10 = 40.58 \, m$

2.  **Question:** In a horizontal pipe, the velocity of water changes from 2 m/s to 6 m/s. If the pressure at the section with velocity 2 m/s is 400 kPa, what is the pressure at the section with velocity 6 m/s? Assume no head loss.
    *   **Answer:**
        *   $V_1 = 2 \, m/s$, $P_1 = 400 \, kPa$
        *   $V_2 = 6 \, m/s$, $P_2 = ?$
        *   Kinetic head at section 1: $\frac{2^2}{2 \times 9.81} = 0.20 \, m$
        *   Kinetic head at section 2: $\frac{6^2}{2 \times 9.81} = 1.83 \, m$
        *   Pressure head at section 1: $\frac{400 \times 10^3}{1000 \times 9.81} = 40.77 \, m$
        *   Since it's horizontal, $z_1 = z_2$. With no head loss, $TEL_1 = TEL_2$.
        *   $\frac{P_1}{\rho g} + \frac{V_1^2}{2g} = \frac{P_2}{\rho g} + \frac{V_2^2}{2g}$
        *   $40.77 \, m + 0.20 \, m = \frac{P_2}{\rho g} + 1.83 \, m$
        *   $\frac{P_2}{\rho g} = 40.97 \, m - 1.83 \, m = 39.14 \, m$
        *   $P_2 = 1000 \times 9.81 \times 39.14 = 384063 \, Pa \approx 384.1 \, kPa$

3.  **Question:** Draw a schematic diagram showing the HGL and TEL for flow from a reservoir through a pipe with an orifice at the end, discharging into the atmosphere. Indicate the different energy components.

    *   **Diagram Description:**
        *   A reservoir with a free surface.
        *   A pipe extending from the reservoir.
        *   An orifice at the end of the pipe.
        *   Datum line.
        *   The TEL starts at the free surface level and slopes downwards due to friction.
        *   The HGL starts at the free surface level and also slopes downwards, always below the TEL by the kinetic head.
        *   At the orifice, the HGL is at the level of the vena contracta.
        *   The TEL is above the HGL at the vena contracta by the kinetic head of the jet.
        *   The vertical distance between TEL and HGL at any point in the pipe represents the kinetic energy head.
        *   The vertical distance between the HGL and the datum represents the piezometric head (pressure head + potential head).
        *   The vertical distance between the TEL and the datum represents the total energy head.

---

### 10. Important Points to Remember

*   **TEL** represents the total mechanical energy per unit weight of fluid.
*   **HGL** represents the piezometric head (pressure head + potential head).
*   **TEL = HGL + Kinetic Energy Head ($\frac{V^2}{2g}$)**.
*   The vertical distance between TEL and HGL is always equal to the kinetic energy head.
*   In real fluid flow, TEL always slopes downwards due to energy losses (friction, minor losses).
*   HGL also slopes downwards due to friction losses.
*   In a contraction, velocity increases, kinetic energy head increases, so HGL drops relative to TEL.
*   In an expansion, velocity decreases, kinetic energy head decreases, so HGL rises relative to TEL.
*   For flow through an orifice, the HGL at the vena contracta is at the level of the vena contracta (if gauge pressure is used and datum is at the orifice).
*   When velocity is zero, TEL and HGL coincide.
*   Piezometers measure the HGL.
*   The TEL is always above the HGL, except when velocity is zero.

---
