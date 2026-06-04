---
title: "Radial flow compressors – general analysis, degree of reaction, velocity triangles, Effect of blade discharge angle on energy transfer and degree of reaction, Effect of blade discharge angle on performance."
subject: "TURBO MACHINERY"
module: "Module 2: General Analysis of Turbo machines:"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf480446300e"
status: "completed"
scrapedAt: "2026-05-20T17:57:18.238Z"
---
# TURBO MACHINERY - Module 2: General Analysis of Turbo machines

## Topic: Radial Flow Compressors – General Analysis, Degree of Reaction, Velocity Triangles, Effect of Blade Discharge Angle on Energy Transfer and Degree of Reaction, Effect of Blade Discharge Angle on Performance

**Knowledge Level:** K3 (Analysis)

**Course Outcomes Addressed:**
*   **CO1:** Use the fundamental principles of fluid mechanics and thermodynamics and find the efficiencies of power generating and power consuming turbomachines.
*   **CO2:** Analyse the velocity triangles for radial flow and axial flow turbomachines and find the performance for parametrical changes.
*   **CO4:** Select an appropriate power consuming turbomachine for a particular application.

---

### 1. Introduction to Radial Flow Compressors

Radial flow compressors, also known as centrifugal compressors, are a type of turbomachine where the fluid enters the impeller axially and is discharged radially outwards. They are characterized by a significant increase in static pressure due to both centrifugal action and diffusion in the volute or diffuser.

**Key Features:**
*   **Impeller:** The rotating component with curved blades that imparts kinetic energy to the fluid.
*   **Diffuser/Volute:** A stationary component that converts the high-velocity fluid leaving the impeller into a higher-pressure, lower-velocity flow.
*   **Pressure Rise:** Achieve a significant pressure rise per stage, making them suitable for high-pressure applications.
*   **Flow Path:** Fluid moves primarily in the radial direction.

**Applications:**
*   Turbochargers in internal combustion engines.
*   Refrigeration and air conditioning systems.
*   Industrial gas turbines.
*   Superchargers for aircraft engines.
*   Process industries for gas compression.

**References:**
*   Dixon, S.I., *Fluid Mechanics and Thermodynamics of Turbomachinery*, Chapter 8 (Centrifugal Compressors).
*   Venkanna, B.K., *Fundamentals of Turbo Machinery*, Chapter 5 (Centrifugal Compressors).
*   Yahya, S.H., *Turbines, Compressor and Fans*, Chapter 7 (Centrifugal Compressors).

---

### 2. General Analysis of Radial Flow Compressors

The general analysis of radial flow compressors involves understanding the energy transfer to the fluid, pressure rise, and efficiency. The core principle is based on Euler's turbomachinery equation.

#### 2.1 Euler's Turbomachinery Equation for Compressors

Euler's turbomachinery equation quantifies the energy transfer per unit mass of fluid. For a radial flow compressor, it relates the work done by the impeller to the change in whirl velocity of the fluid.

The specific work done ($W_s$) or head developed by the compressor per unit mass of fluid is given by:

$W_s = u_2 v_{u2} - u_1 v_{u1}$

Where:
*   $W_s$: Specific work done by the impeller (J/kg)
*   $u_1$: Tangential velocity of the fluid at the impeller inlet (m/s)
*   $v_{u1}$: Whirl velocity of the fluid at the impeller inlet (m/s)
*   $u_2$: Tangential velocity of the fluid at the impeller outlet (m/s)
*   $v_{u2}$: Whirl velocity of the fluid at the impeller outlet (m/s)

**Assumptions for Ideal Compressor Analysis:**
*   **Radial Entry:** The fluid enters the impeller radially, meaning the absolute velocity is purely radial. Thus, the whirl component at inlet ($v_{u1}$) is zero.
*   **Impeller Exit Tangential Velocity:** The fluid leaves the impeller with a velocity whose whirl component ($v_{u2}$) is determined by the impeller blade speed and blade angle.

With the assumption of radial entry ($v_{u1} = 0$), Euler's equation simplifies to:

$W_s = u_2 v_{u2}$

This equation signifies that the work done on the fluid is directly proportional to the tangential velocity of the impeller at the exit and the whirl velocity of the fluid at the exit.

#### 2.2 Pressure Rise and Work Input

The total pressure rise in a compressor is achieved through two mechanisms:
1.  **Dynamic Pressure Rise (Kinetic Energy Conversion):** In the impeller, kinetic energy is added to the fluid. This kinetic energy is then converted into static pressure in the diffuser and/or volute.
2.  **Centrifugal Action:** The rotation of the impeller creates a centrifugal force, leading to an increase in static pressure from the inlet to the outlet.

**Total Pressure Rise ($\Delta P_t$) = Static Pressure Rise ($\Delta P_s$) + Dynamic Pressure Rise ($\Delta P_d$)**

The theoretical total head developed by the compressor can be expressed in terms of fluid velocity and impeller speed.

From $W_s = u_2 v_{u2}$, we can relate this to enthalpy rise using the first law of thermodynamics for a steady flow process:

$W_s = \Delta h$ (assuming adiabatic process and negligible change in potential energy)

For an ideal gas, $\Delta h = c_p \Delta T$.

The actual work input per unit mass of fluid ($W$) is less than the theoretical work due to inefficiencies.

**Total Pressure Rise:**
The total pressure rise is related to the specific work input by:

$\Delta P_t = \rho W$ (for incompressible flow, which is an approximation)

For compressible flow, the relationship is more complex and involves the specific volume or density change. However, the fundamental principle remains that work input leads to an increase in fluid pressure and enthalpy.

**Key Point:** The impeller's primary role is to increase the kinetic energy and static pressure of the fluid through centrifugal action and tangential acceleration. The diffuser's role is to convert this kinetic energy into static pressure.

---

### 3. Velocity Triangles

Velocity triangles are graphical representations of the velocities of the fluid at the inlet and outlet of the impeller. They are crucial for understanding energy transfer and analyzing compressor performance.

#### 3.1 Velocity Triangle at the Impeller Inlet (Station 1)

*   **Absolute Velocity ($V_1$):** The velocity of the fluid as seen by a stationary observer.
*   **Blade Velocity ($u_1$):** The tangential velocity of the impeller at the inlet radius ($r_1$). $u_1 = \omega r_1$.
*   **Relative Velocity ($W_1$):** The velocity of the fluid as seen by an observer moving with the impeller blade.

**Components of Absolute Velocity:**
*   **Radial Component ($V_{f1}$):** The velocity component in the radial direction.
*   **Tangential (Whirl) Component ($V_{u1}$):** The velocity component in the tangential direction.

**Components of Relative Velocity:**
*   **Radial Component ($W_{f1}$):** The radial component of the relative velocity.
*   **Tangential (Whirl) Component ($W_{u1}$):** The tangential component of the relative velocity.

**Relationship:**
$\vec{V_1} = \vec{u_1} + \vec{W_1}$

In vector form: $V_1^2 = u_1^2 + W_1^2 + 2 u_1 W_1 \cos(\beta_1)$ (where $\beta_1$ is the blade angle measured from the tangential direction)

**Radial Entry Assumption:**
For radial entry, the absolute velocity is purely radial, meaning $V_{u1} = 0$. In this case, $V_1 = V_{f1}$ and $V_{u1} = 0$.
The velocity triangle simplifies, with the absolute velocity vector being purely radial. The relative velocity vector will have both radial and tangential components.

**Diagram (Radial Entry):**
*   Draw the impeller blade speed vector $u_1$ horizontally.
*   Draw the absolute velocity vector $V_1$ vertically upwards (purely radial).
*   The resultant vector $W_1$ connects the tip of $V_1$ to the tip of $u_1$.
*   $\beta_1$ is the angle between $W_1$ and the tangential direction $u_1$.

#### 3.2 Velocity Triangle at the Impeller Outlet (Station 2)

*   **Absolute Velocity ($V_2$):** The velocity of the fluid as seen by a stationary observer at the outlet.
*   **Blade Velocity ($u_2$):** The tangential velocity of the impeller at the outlet radius ($r_2$). $u_2 = \omega r_2$.
*   **Relative Velocity ($W_2$):** The velocity of the fluid as seen by an observer moving with the impeller blade at the outlet.

**Components of Absolute Velocity:**
*   **Radial Component ($V_{f2}$):** The velocity component in the radial direction.
*   **Tangential (Whirl) Component ($V_{u2}$):** The velocity component in the tangential direction.

**Components of Relative Velocity:**
*   **Radial Component ($W_{f2}$):** The radial component of the relative velocity.
*   **Tangential (Whirl) Component ($W_{u2}$):** The tangential component of the relative velocity.

**Relationship:**
$\vec{V_2} = \vec{u_2} + \vec{W_2}$

In vector form: $V_2^2 = u_2^2 + W_2^2 + 2 u_2 W_2 \cos(\beta_2)$ (where $\beta_2$ is the blade angle at the outlet).

**Diagram (Backward Curved Blades, $\beta_2 < 90^\circ$):**
*   Draw the impeller blade speed vector $u_2$ horizontally.
*   Draw the relative velocity vector $W_2$ from the tip of $u_2$. The angle $\beta_2$ is the angle between $W_2$ and the tangential direction $u_2$. $W_2$ is typically drawn such that its radial component $W_{f2}$ is downwards (outwards flow).
*   The absolute velocity vector $V_2$ is the resultant of $u_2$ and $W_2$. $V_2$ will generally have both radial ($V_{f2}$) and tangential ($V_{u2}$) components.

**Important Velocity Components:**
*   **$V_{f1}$ (Axial/Radial flow at inlet):** The mass flow rate is related to this component: $\dot{m} = \rho_1 A_1 V_{f1}$ (or $\rho_1 2 \pi r_1 b_1 V_{f1}$ for a radial entry).
*   **$V_{f2}$ (Radial flow at outlet):** $\dot{m} = \rho_2 A_2 V_{f2}$ (or $\rho_2 2 \pi r_2 b_2 V_{f2}$ for outlet flow).
*   **$u_1$, $u_2$:** Impeller tip speeds, determined by rotational speed and radii.
*   **$V_{u1}$:** Whirl at inlet. Typically zero for radial entry.
*   **$V_{u2}$:** Whirl at outlet. This component is crucial for work transfer. It's related to $u_2$, $W_2$, and $\beta_2$. From the velocity triangle: $V_{u2} = u_2 - W_{u2}$ (for backward curved blades where $W_{u2}$ is positive in the direction of $u_2$).

**References:**
*   Dixon, S.I., *Fluid Mechanics and Thermodynamics of Turbomachinery*, Chapter 8.
*   Venkanna, B.K., *Fundamentals of Turbo Machinery*, Chapter 5.
*   Yahya, S.H., *Turbines, Compressor and Fans*, Chapter 7.
*   Gambini, M., Vellini, M., *Turbomachinery – Fundamentals, Selection and Preliminary Design*, Chapter 5 (Centrifugal Compressors).

---

### 4. Degree of Reaction

The degree of reaction is a measure of how the static pressure rise is distributed between the impeller and the stationary passages (diffuser or volute). It indicates the proportion of static enthalpy rise that occurs within the rotor (impeller).

**Definition:**
Degree of Reaction ($R$) = (Static enthalpy rise in the rotor) / (Total enthalpy rise in the rotor)

$R = \frac{\Delta h_{rotor}}{\Delta h_{rotor} + \Delta h_{stator}}$

Where:
*   $\Delta h_{rotor}$: Static enthalpy rise in the impeller.
*   $\Delta h_{stator}$: Static enthalpy rise in the stationary passages (diffuser/volute).

Using velocity triangle parameters and assuming adiabatic flow:
*   Work done by impeller = $\Delta h_{rotor} = u_2 v_{u2} - u_1 v_{u1}$ (from Euler's equation).
*   For radial entry, $v_{u1} = 0$, so $\Delta h_{rotor} = u_2 v_{u2}$.

The static enthalpy rise in the impeller is related to the change in absolute velocity components.
$\Delta h_{rotor} = \frac{1}{2}(V_1^2 - V_2^2) + \frac{1}{2}(W_2^2 - W_1^2)$ (General form)

For radial entry ($V_{u1}=0, V_1=V_{f1}$):
$\Delta h_{rotor} = \frac{1}{2}(V_{f1}^2 - V_2^2) + \frac{1}{2}(W_2^2 - W_1^2)$

However, a more direct way to express the degree of reaction for radial flow compressors using velocity triangles is:

$R = \frac{W_1^2 - W_2^2 + u_2^2 - u_1^2}{2(u_2 v_{u2} - u_1 v_{u1})}$

For radial entry ($v_{u1} = 0$):
$R = \frac{W_1^2 - W_2^2 + u_2^2 - u_1^2}{2 u_2 v_{u2}}$

This formula can be simplified by considering the velocity triangle relationships:
$W_1^2 = V_{f1}^2 + W_{u1}^2$ (For radial entry, $W_{u1} = -V_{u1} = 0$, so $W_1^2 = V_{f1}^2$)
$V_2^2 = V_{f2}^2 + V_{u2}^2$
$V_{u2} = u_2 - W_{u2}$ (for backward curved blades, $W_{u2}$ is component of $W_2$ along $u_2$)

Substituting these into the degree of reaction equation is complex. A more practical approach relates the static pressure rise in the impeller to the total pressure rise.

A commonly used definition for radial flow machines relates the static pressure rise in the rotor to the total pressure rise:

$R = \frac{u_1 v_{u1} - u_2 v_{u2} - \frac{1}{2}(W_1^2 - W_2^2)}{u_1 v_{u1} - u_2 v_{u2}}$ (This formula is for turbines and needs adjustment for compressors)

Let's use a common definition for compressors:
The static pressure rise in the impeller is given by:
$\Delta P_{s, \text{impeller}} = \frac{1}{2}(W_1^2 - W_2^2) + \frac{1}{2}(u_2^2 - u_1^2) - \frac{1}{2}(V_{f2}^2 - V_{f1}^2)$ (This is derived from momentum and energy principles considering forces)

The total pressure rise in the impeller is:
$\Delta P_{t, \text{impeller}} = u_2 v_{u2} - u_1 v_{u1}$ (from Euler's equation, assuming negligible friction)

For radial entry ($v_{u1}=0$):
$\Delta P_{t, \text{impeller}} = u_2 v_{u2}$

**A widely used definition of degree of reaction for centrifugal compressors:**
$R = \frac{u_2 v_{u2} - \frac{1}{2}(W_1^2 - W_2^2 + u_2^2 - u_1^2)}{u_2 v_{u2}}$

If we consider the static pressure rise in the impeller, it's related to the change in relative and absolute velocities.
The static pressure rise across the impeller ($\Delta P_s$ for impeller) is related to the changes in relative velocity ($W$) and the blade speed ($u$).

A more practical definition of the degree of reaction is based on the distribution of static pressure rise:
$R = \frac{\Delta P_{s, \text{impeller}}}{\Delta P_{t, \text{impeller}}}$ (This is a simplification and depends on specific definitions of static and total pressure rise in the impeller)

**Using Velocity Triangle Components for $R$:**
A useful expression for the degree of reaction at the **impeller exit** (often the most critical point for defining reaction) is:

$R = 1 - \frac{V_{u2}}{u_2}$  (This definition is commonly used for axial machines and can be adapted)

Let's re-evaluate using a more common approach for radial machines:
The static enthalpy change in the impeller is:
$\Delta h_{rotor} = \frac{1}{2}(W_1^2 - W_2^2) + \frac{1}{2}(u_2^2 - u_1^2)$  (This assumes no change in absolute velocity radial component, which is not general)

**Correct approach using velocity components:**
The static pressure rise within the impeller can be approximated as:
$\Delta P_s(\text{impeller}) \approx \frac{1}{2}(u_2^2 - u_1^2) + \frac{1}{2}(W_1^2 - W_2^2) - \frac{1}{2}(V_{f2}^2 - V_{f1}^2)$

The total pressure rise by the impeller is given by Euler's equation:
$\Delta P_t(\text{impeller}) = \rho (u_2 v_{u2} - u_1 v_{u1})$

For radial entry ($v_{u1} = 0$):
$\Delta P_t(\text{impeller}) = \rho u_2 v_{u2}$

The degree of reaction, $R$, can be defined as the ratio of the static pressure rise in the impeller to the total pressure rise in the impeller:
$R = \frac{\Delta P_s(\text{impeller})}{\Delta P_t(\text{impeller})}$

Substituting for radial entry:
$R = \frac{\frac{1}{2}(u_2^2 - u_1^2) + \frac{1}{2}(W_1^2 - W_2^2) - \frac{1}{2}(V_{f2}^2 - V_{f1}^2)}{\rho u_2 v_{u2}}$

This definition requires careful consideration of the assumptions.

**A more fundamental and widely accepted definition of the degree of reaction:**
The degree of reaction refers to the ratio of static enthalpy rise in the rotor to the total enthalpy rise in the stage.
$R = \frac{\Delta h_{rotor}}{\Delta h_{stage}}$

Since $\Delta h_{stage} = W_s$ (ideal work per unit mass):
$R = \frac{\Delta h_{rotor}}{u_2 v_{u2}}$ (assuming radial entry)

$\Delta h_{rotor}$ is related to the static pressure rise in the impeller.
Consider the specific kinetic energy at impeller inlet and outlet:
KE$_1$ = $\frac{1}{2} V_1^2$
KE$_2$ = $\frac{1}{2} V_2^2$

Change in kinetic energy = KE$_2$ - KE$_1$
Change in static enthalpy = $\Delta h_{rotor}$

From the energy equation for the impeller (assuming adiabatic):
$W_s = \Delta h_{rotor} = u_2 v_{u2}$
$u_2 v_{u2} = h_2 - h_1$
$u_2 v_{u2} = c_p (T_2 - T_1)$

Also, $h_2 - h_1 = (T_2 - T_1) c_p = \frac{1}{2} V_2^2 - \frac{1}{2} V_1^2 + \frac{1}{2} W_2^2 - \frac{1}{2} W_1^2$
$u_2 v_{u2} = \frac{1}{2} (V_2^2 - V_1^2) + \frac{1}{2} (W_2^2 - W_1^2)$

**Simplifying for degree of reaction:**
The static enthalpy rise in the rotor ($\Delta h_{rotor}$) is related to the change in absolute velocity energy within the rotor.
$\Delta h_{rotor} \approx \frac{1}{2} (u_2^2 - u_1^2) + \frac{1}{2} (W_1^2 - W_2^2)$ (This is an approximation for static enthalpy change)

So, $R \approx \frac{\frac{1}{2} (u_2^2 - u_1^2) + \frac{1}{2} (W_1^2 - W_2^2)}{u_2 v_{u2}}$ (for radial entry, $v_{u1}=0$)

**Example:**
Consider a radial entry compressor where:
$u_1 = 0$
$u_2 = 100$ m/s
$V_{f1} = 30$ m/s
$V_{f2} = 50$ m/s
$\beta_2 = 30^\circ$ (backward curved blade)

From the velocity triangle at outlet:
$W_{u2} = u_2 - V_{u2}$
$V_{u2} = V_{f2} \cot(\beta_2) = 50 \cot(30^\circ) = 50 \times 1.732 = 86.6$ m/s
$u_2 = 100$ m/s
$W_{u2} = 100 - 86.6 = 13.4$ m/s

$W_2^2 = V_{f2}^2 + W_{u2}^2 = 50^2 + 13.4^2 = 2500 + 179.56 = 2679.56$
$W_2 = \sqrt{2679.56} \approx 51.76$ m/s

For radial entry, $v_{u1} = 0$.
$W_s = u_2 v_{u2} = 100 \times 86.6 = 8660$ J/kg

Approximating $\Delta h_{rotor}$:
$\Delta h_{rotor} \approx \frac{1}{2} (u_2^2 - u_1^2) + \frac{1}{2} (W_1^2 - W_2^2)$
For radial entry, $W_1 = V_{f1}$, so $W_1^2 = V_{f1}^2 = 30^2 = 900$.
$\Delta h_{rotor} \approx \frac{1}{2} (100^2 - 0^2) + \frac{1}{2} (900 - 2679.56)$
$\Delta h_{rotor} \approx \frac{1}{2} (10000) + \frac{1}{2} (-1779.56)$
$\Delta h_{rotor} \approx 5000 - 889.78 = 4110.22$ J/kg

$R \approx \frac{4110.22}{8660} \approx 0.475$ or 47.5%

**Interpretation of Degree of Reaction:**
*   **R = 0 (Impulse):** All static pressure rise occurs in the stationary passages (diffuser). The impeller only adds kinetic energy. This is rare in practice for compressors.
*   **R = 1 (Pure Reaction):** All static pressure rise occurs in the rotating passages (impeller). The stationary passages only convert kinetic energy to pressure with no static pressure rise. This is also rare.
*   **0 < R < 1 (Mixed Reaction):** Static pressure rise occurs in both impeller and stationary passages. Radial compressors typically have reactions between 0.3 and 0.6.

**Impact on Performance:**
*   **Higher Reaction:** Generally leads to smoother pressure distribution and can reduce susceptibility to stall. May require less area for diffusion.
*   **Lower Reaction:** Implies a larger portion of the pressure rise is achieved by converting kinetic energy in the diffuser.

**References:**
*   Dixon, S.I., *Fluid Mechanics and Thermodynamics of Turbomachinery*, Chapter 8.
*   Venkanna, B.K., *Fundamentals of Turbo Machinery*, Chapter 5.
*   Yahya, S.H., *Turbines, Compressor and Fans*, Chapter 7.
*   Dick, E., *Fundamentals of Turbomachines*, Chapter 4.

---

### 5. Effect of Blade Discharge Angle ($\beta_2$) on Energy Transfer and Degree of Reaction

The blade discharge angle $\beta_2$ is the angle between the impeller blade and the tangential direction at the outlet. For radial flow compressors, $\beta_2$ is typically between $0^\circ$ (radial blades) and $90^\circ$ (backward-curved blades). Forward-curved blades ($\beta_2 > 90^\circ$) are generally not used in compressors due to instability issues.

#### 5.1 Effect on Energy Transfer (Work Output)

**Euler's Equation:** $W_s = u_2 v_{u2}$
The work done is directly proportional to the whirl velocity at the outlet ($v_{u2}$).

From the velocity triangle at the outlet:
$v_{u2} = u_2 - W_{u2}$
where $W_{u2}$ is the tangential component of the relative velocity $W_2$.
$W_{u2} = W_2 \cos(\theta)$, where $\theta$ is the angle between $W_2$ and the tangential direction.
For backward-curved blades ($\beta_2 < 90^\circ$), the angle $\beta_2$ in the velocity triangle is the angle between $W_2$ and the negative tangential direction if $u_2$ is the reference. However, the standard definition is the angle of the blade relative to the tangential direction.

Using the standard velocity triangle, $\beta_2$ is the angle between the relative velocity $W_2$ and the tangent to the impeller at the outlet.
So, $V_{u2} = u_2 - W_{u2}$ (where $W_{u2}$ is the tangential component of $W_2$ in the same direction as $u_2$).
$W_{u2} = W_2 \cos(\beta_2)$ is not correct from the standard triangle construction.
Let's reconsider the outlet triangle.
$u_2$ is tangential.
$V_2$ is the absolute velocity, with components $V_{f2}$ (radial) and $V_{u2}$ (tangential).
$W_2$ is the relative velocity, with components $W_{f2}$ (radial) and $W_{u2}$ (tangential).

The vector equation is $\vec{V_2} = \vec{u_2} + \vec{W_2}$.
Resolving along the tangential direction:
$V_{u2} = u_2 + W_{u2}$.
Here, $W_{u2}$ is the tangential component of $W_2$ in the direction *opposite* to $u_2$ for backward-curved blades.
So, $V_{u2} = u_2 - W_{u2}'$, where $W_{u2}'$ is the component of $W_2$ along the direction of $u_2$.
If $\beta_2$ is the blade angle measured from the tangential, then $W_{u2}' = W_2 \cos(\beta_2)$.
So, $V_{u2} = u_2 - W_2 \cos(\beta_2)$.

**Impact of $\beta_2$ on $V_{u2}$:**
*   **Decreasing $\beta_2$ (more backward-curved):** For a fixed $u_2$ and radial velocity $V_{f2}$ (assuming $W_2$ is influenced by this), as $\beta_2$ decreases (becomes more backward-curved), $\cos(\beta_2)$ increases. This means $W_2 \cos(\beta_2)$ increases, leading to a **decrease in $V_{u2}$**.
*   **Increasing $\beta_2$ (towards radial):** As $\beta_2$ increases towards $90^\circ$, $\cos(\beta_2)$ decreases. This leads to an **increase in $V_{u2}$**.

**Therefore, for a given $u_2$ and $V_{f2}$, a larger $\beta_2$ (closer to radial) results in higher $V_{u2}$ and thus higher specific work output ($W_s = u_2 v_{u2}$).**

#### 5.2 Effect on Degree of Reaction

Using the approximation:
$R \approx \frac{\frac{1}{2} (u_2^2 - u_1^2) + \frac{1}{2} (W_1^2 - W_2^2)}{u_2 v_{u2}}$

Let's analyze how $\beta_2$ affects $W_2$ and $v_{u2}$.
From the velocity triangle: $W_2^2 = V_{f2}^2 + (u_2 - V_{u2})^2$.
Substituting $V_{u2} = u_2 - W_2 \cos(\beta_2)$ is not straightforward.

Let's use the relationship from the outlet velocity triangle:
$W_{u2} = u_2 - V_{u2}$ (where $W_{u2}$ is the tangential component of $W_2$ in the direction of $u_2$).
$W_{f2} = V_{f2}$ (assuming radial flow)
$W_2^2 = W_{f2}^2 + W_{u2}^2 = V_{f2}^2 + (u_2 - V_{u2})^2$.

Now, relate $V_{u2}$ to $\beta_2$:
$V_{u2} = u_2 - W_2 \cos(\beta_2)$ is the correct relation from the velocity triangle where $\beta_2$ is the blade angle.
This means $W_2 \cos(\beta_2) = u_2 - V_{u2}$.

Substituting $W_2 = \frac{u_2 - V_{u2}}{\cos(\beta_2)}$ into $W_2^2 = V_{f2}^2 + (u_2 - V_{u2})^2$:
$(\frac{u_2 - V_{u2}}{\cos(\beta_2)})^2 = V_{f2}^2 + (u_2 - V_{u2})^2$
$\frac{(u_2 - V_{u2})^2}{\cos^2(\beta_2)} = V_{f2}^2 + (u_2 - V_{u2})^2$
$(u_2 - V_{u2})^2 (\frac{1}{\cos^2(\beta_2)} - 1) = V_{f2}^2$
$(u_2 - V_{u2})^2 \tan^2(\beta_2) = V_{f2}^2$
$(u_2 - V_{u2}) \tan(\beta_2) = V_{f2}$
$u_2 - V_{u2} = V_{f2} \cot(\beta_2)$
$V_{u2} = u_2 - V_{f2} \cot(\beta_2)$

**Effect of $\beta_2$ on $V_{u2}$:**
*   **Decreasing $\beta_2$ (more backward-curved):** $\cot(\beta_2)$ increases. This means $V_{f2} \cot(\beta_2)$ increases, leading to a **decrease in $V_{u2}$**.
*   **Increasing $\beta_2$ (towards radial):** $\cot(\beta_2)$ decreases. This leads to an **increase in $V_{u2}$**.

So, increasing $\beta_2$ increases $V_{u2}$, which increases the specific work output ($W_s = u_2 v_{u2}$).

**Effect of $\beta_2$ on $W_2$:**
$W_2 = \frac{V_{f2}}{\sin(\beta_2)}$
*   **Decreasing $\beta_2$ (more backward-curved):** $\sin(\beta_2)$ decreases. This means $W_2$ increases.
*   **Increasing $\beta_2$ (towards radial):** $\sin(\beta_2)$ increases. This means $W_2$ decreases.

Now consider the degree of reaction expression:
$R \approx \frac{\frac{1}{2} (u_2^2 - u_1^2) + \frac{1}{2} (W_1^2 - W_2^2)}{u_2 v_{u2}}$

*   As $\beta_2$ decreases: $V_{u2}$ decreases, $W_2$ increases.
    *   $u_2 v_{u2}$ decreases (work output decreases).
    *   $W_1^2 - W_2^2$ becomes more negative (decrease in $W_2^2$).
    *   The numerator decreases.
    *   The overall effect on $R$ depends on the relative magnitudes.

Let's use another formulation for degree of reaction:
$R = \frac{\text{Static Pressure Rise in Impeller}}{\text{Total Pressure Rise in Impeller}}$
$\Delta P_{s, \text{impeller}} \approx \rho \left[ \frac{1}{2}(u_2^2 - u_1^2) + \frac{1}{2}(W_1^2 - W_2^2) \right]$ (This is a simplified view)
$\Delta P_{t, \text{impeller}} = \rho (u_2 v_{u2} - u_1 v_{u1})$

For radial entry, $v_{u1}=0$, $\Delta P_{t, \text{impeller}} = \rho u_2 v_{u2}$.
$R \approx \frac{\frac{1}{2}(u_2^2 - u_1^2) + \frac{1}{2}(W_1^2 - W_2^2)}{u_2 v_{u2}}$

As $\beta_2$ decreases:
*   $u_2 v_{u2}$ decreases.
*   $W_2$ increases, so $W_1^2 - W_2^2$ decreases.
*   The numerator decreases.

This indicates that as $\beta_2$ decreases (more backward curved), both the numerator and denominator decrease. The degree of reaction tends to **decrease** as $\beta_2$ becomes more backward-curved.
Conversely, as $\beta_2$ increases (towards radial), $V_{u2}$ increases, $W_2$ decreases.
*   $u_2 v_{u2}$ increases.
*   $W_1^2 - W_2^2$ increases (becomes less negative).
*   The numerator increases.
*   The degree of reaction tends to **increase** as $\beta_2$ becomes more radial.

**Summary:**
*   **Higher $\beta_2$ (closer to radial):** Higher $V_{u2}$, higher work output, higher degree of reaction.
*   **Lower $\beta_2$ (more backward-curved):** Lower $V_{u2}$, lower work output, lower degree of reaction.

**References:**
*   Dixon, S.I., *Fluid Mechanics and Thermodynamics of Turbomachinery*, Chapter 8.
*   Venkanna, B.K., *Fundamentals of Turbo Machinery*, Chapter 5.

---

### 6. Effect of Blade Discharge Angle ($\beta_2$) on Performance

Performance of a compressor is typically evaluated in terms of pressure ratio, flow rate, efficiency, and stall margin.

#### 6.1 Effect on Pressure Ratio and Flow Rate

*   **Pressure Ratio:** For a given rotational speed ($u_2$), a higher $\beta_2$ leads to a higher $V_{u2}$ and thus higher specific work output ($W_s = u_2 v_{u2}$). This directly contributes to a higher pressure rise capability. Therefore, **increasing $\beta_2$ generally increases the pressure ratio** for a given speed.
*   **Flow Rate:** The radial velocity $V_{f2}$ is related to the flow rate. From $V_{u2} = u_2 - V_{f2} \cot(\beta_2)$, we have $V_{f2} = (u_2 - V_{u2}) \cot(\beta_2)$.
    *   As $\beta_2$ decreases (more backward-curved), $\cot(\beta_2)$ increases. For a given $u_2$ and $V_{u2}$, $V_{f2}$ increases. This implies a **higher flow rate** for more backward-curved blades.
    *   As $\beta_2$ increases (towards radial), $\cot(\beta_2)$ decreases, leading to a **lower flow rate**.

#### 6.2 Effect on Efficiency

The choice of $\beta_2$ significantly impacts efficiency.
*   **Backward-curved blades ($\beta_2 < 90^\circ$):**
    *   **Advantages:** Generally provide a more favorable pressure distribution, reduce the risk of flow separation, and result in a wider stable operating range (higher stall margin). They also have a self-limiting characteristic in terms of speed, meaning centrifugal forces on the blades are lower.
    *   **Efficiency:** Can achieve high efficiencies, especially when designed appropriately for the operating point. The lower $V_{u2}$ implies lower theoretical work, but improved flow characteristics can compensate.
*   **Radial blades ($\beta_2 = 90^\circ$):**
    *   **Advantages:** Offer the highest theoretical work output for a given $u_2$ and $V_{f2}$.
    *   **Disadvantages:** Tend to have a narrower stable operating range and are more prone to stall. The flow leaving the impeller has a high velocity, and the diffuser has a greater task of converting kinetic energy to pressure, which can lead to higher diffusion losses.
    *   **Efficiency:** Can be efficient at their design point, but their operating range is more limited.

**General Trend for Efficiency:**
For most applications, backward-curved blades ($\beta_2$ typically 30-45 degrees) are preferred because they offer a better compromise between pressure rise, flow rate, efficiency, and stable operating range. While radial blades offer higher theoretical work, the overall practical efficiency and stability are often better with backward-curved blades.

#### 6.3 Effect on Stall Margin

Stall is an undesirable phenomenon in compressors where the flow detaches from the blade surfaces, leading to a rapid drop in pressure and flow rate.

*   **Backward-curved blades ($\beta_2 < 90^\circ$):** The lower degree of reaction and the favorable radial component of relative velocity at the outlet contribute to a more stable flow and a wider stall margin. The compressor can operate over a wider range of flow rates without stalling.
*   **Radial blades ($\beta_2 = 90^\circ$):** Have a narrower stall margin. They are more sensitive to variations in flow rate and can stall at higher flow rates compared to backward-curved blades.

**References:**
*   Dixon, S.I., *Fluid Mechanics and Thermodynamics of Turbomachinery*, Chapter 8.
*   Venkanna, B.K., *Fundamentals of Turbo Machinery*, Chapter 5.
*   Yahya, S.H., *Turbines, Compressor and Fans*, Chapter 7.
*   Gambini, M., Vellini, M., *Turbomachinery – Fundamentals, Selection and Preliminary Design*, Chapter 5.

---

### 7. Performance Characteristics of Radial Flow Compressors

Performance is usually presented as curves of pressure ratio and efficiency versus flow rate (or mass flow) at constant rotational speeds.

**Key Performance Parameters:**
*   **Pressure Ratio (PR):** Ratio of discharge total pressure to inlet total pressure ($P_{t2}/P_{t1}$).
*   **Isentropic Efficiency ($\eta_{is}$):** Ratio of ideal work input to actual work input.
    $\eta_{is} = \frac{h_{t2s} - h_{t1}}{h_{t2a} - h_{t1}} = \frac{T_{t2s} - T_{t1}}{T_{t2a} - T_{t1}}$
    For ideal gas: $\eta_{is} = \frac{T_{t1} [ (P_{t2}/P_{t1})^{(\gamma-1)/\gamma} - 1 ]}{T_{t2a} - T_{t1}}$
*   **Total-to-Static Efficiency ($\eta_{ts}$):** Ratio of ideal static pressure rise to actual work input.
    $\eta_{ts} = \frac{P_{s2} - P_{s1}}{P_{t2a} - P_{s1}}$ (This is an approximation)
    A better definition related to work is $\eta_{ts} = \frac{P_{s2} - P_{s1}}{\text{Actual Work Input}}$
*   **Head Rise:** Specific work done on the fluid.

**Typical Performance Curves:**
*   **Pressure Ratio vs. Flow Rate:** The pressure ratio generally increases with flow rate up to a certain point (surge point) and then starts to decrease. The peak pressure ratio is achieved at a lower flow rate.
*   **Efficiency vs. Flow Rate:** Efficiency is low at very low flow rates (due to surge and recirculation), increases to a maximum at the design flow rate, and then decreases again at higher flow rates due to increased kinetic energy losses and flow separation.
*   **Surge Line:** The point on the flow rate axis where the pressure ratio starts to drop. Operating beyond this line causes surge.
*   **Choke Line:** The point at which the flow rate is limited by the sonic velocity in the narrowest passage.

**Influence of $\beta_2$ on Performance Curves:**
*   **Backward-curved ($\beta_2 < 90^\circ$):**
    *   Show a more gradual drop in pressure ratio as flow rate increases, leading to a wider stable operating range and a higher surge flow rate.
    *   Efficiency curve is typically flatter and peaks at a higher flow rate.
*   **Radial ($\beta_2 = 90^\circ$):**
    *   Show a sharper drop in pressure ratio at higher flow rates, resulting in a narrower stable operating range and a lower surge flow rate.
    *   Efficiency curve is more peaked, indicating high efficiency only over a narrow flow range.

**Selection of $\beta_2$ for a Specific Application (CO4):**
*   **High Pressure Ratio Requirement:** A more radial blade angle might be considered, but with caution regarding stability.
*   **Wide Operating Range / Stability:** Backward-curved blades are preferred.
*   **High Peak Efficiency:** Can be achieved with both types, but backward-curved blades often offer higher efficiency over a broader range.
*   **Compactness:** Radial compressors are generally more compact for a given pressure ratio than axial compressors.

**References:**
*   Dixon, S.I., *Fluid Mechanics and Thermodynamics of Turbomachinery*, Chapter 8.
*   Venkanna, B.K., *Fundamentals of Turbo Machinery*, Chapter 5.
*   Yahya, S.H., *Turbines, Compressor and Fans*, Chapter 7.

---

### 8. Practice Questions and Exercises

**Question 1:**
A radial flow compressor has an impeller with inlet radius $r_1 = 0.05$ m and outlet radius $r_2 = 0.15$ m. It rotates at $15000$ rpm. The fluid enters radially at the inlet. At the outlet, the blade angle is $\beta_2 = 35^\circ$ (backward curved), and the radial velocity is $V_{f2} = 50$ m/s.
Calculate:
a) The impeller tip speeds at inlet ($u_1$) and outlet ($u_2$).
b) The whirl velocity at the outlet ($V_{u2}$).
c) The specific work done by the impeller ($W_s$).
d) The magnitude of the relative velocity at the outlet ($W_2$).
e) The approximate degree of reaction at the outlet.

**Given:**
*   $N = 15000$ rpm
*   $r_1 = 0.05$ m
*   $r_2 = 0.15$ m
*   Radial entry: $V_{u1} = 0$. Assume $V_{f1} = 0$ for simplicity in $W_1$ calculation if needed, or $W_1 \approx V_{f1}$ if radial entry means absolute velocity is radial. Let's assume $V_{f1}$ is given or can be inferred. For radial entry, $W_1 = V_{f1}$. Let's assume $V_{f1} = 20$ m/s.
*   $\beta_2 = 35^\circ$
*   $V_{f2} = 50$ m/s

**Solution:**
a) Rotational speed in rad/s: $\omega = \frac{2 \pi N}{60} = \frac{2 \pi \times 15000}{60} = 500 \pi$ rad/s $\approx 1570.8$ rad/s
$u_1 = \omega r_1 = 1570.8 \times 0.05 = 78.54$ m/s
$u_2 = \omega r_2 = 1570.8 \times 0.15 = 235.62$ m/s

b) From the outlet velocity triangle: $V_{u2} = u_2 - V_{f2} \cot(\beta_2)$
$V_{u2} = 235.62 - 50 \times \cot(35^\circ)$
$\cot(35^\circ) = \frac{1}{\tan(35^\circ)} \approx \frac{1}{0.7002} \approx 1.4281$
$V_{u2} = 235.62 - 50 \times 1.4281 = 235.62 - 71.405 = 164.215$ m/s

c) Specific work done: $W_s = u_2 v_{u2}$ (assuming radial entry $v_{u1}=0$)
$W_s = 235.62 \times 164.215 = 38707.7$ J/kg

d) Magnitude of relative velocity at outlet: $W_2 = \frac{V_{f2}}{\sin(\beta_2)}$
$W_2 = \frac{50}{\sin(35^\circ)} = \frac{50}{0.5736} \approx 87.17$ m/s

e) Approximate degree of reaction:
$R \approx \frac{\frac{1}{2} (u_2^2 - u_1^2) + \frac{1}{2} (W_1^2 - W_2^2)}{u_2 v_{u2}}$
Assume radial entry means $W_1 = V_{f1} = 20$ m/s.
$W_1^2 = 20^2 = 400$
$W_2^2 = 87.17^2 \approx 7598.6$
$R \approx \frac{\frac{1}{2} (235.62^2 - 78.54^2) + \frac{1}{2} (400 - 7598.6)}{38707.7}$
$R \approx \frac{\frac{1}{2} (55515.5 - 6168.5) + \frac{1}{2} (-7198.6)}{38707.7}$
$R \approx \frac{\frac{1}{2} (49347) - 3599.3}{38707.7}$
$R \approx \frac{24673.5 - 3599.3}{38707.7} = \frac{21074.2}{38707.7} \approx 0.544$ or 54.4%

**Answer Interpretation:** A degree of reaction of 54.4% means that approximately 54.4% of the total enthalpy rise (or pressure rise) occurs within the impeller.

---

**Question 2:**
How does a decrease in the impeller blade discharge angle ($\beta_2$) affect the performance characteristics of a radial flow compressor in terms of pressure ratio, flow rate, and stall margin?

**Answer:**
A decrease in the impeller blade discharge angle ($\beta_2$) (i.e., making the blades more backward-curved) leads to:
*   **Pressure Ratio:** A lower theoretical specific work output ($W_s = u_2 v_{u2}$) because $V_{u2}$ decreases. This generally results in a **lower pressure ratio** for a given rotational speed.
*   **Flow Rate:** An increase in the radial velocity component ($V_{f2}$) for a given tangential velocity and flow angle ($V_{f2} = (u_2 - V_{u2}) \cot(\beta_2)$). This means a **higher flow rate** capability.
*   **Stall Margin:** A **wider stall margin** and a more stable operating range. The compressor is less prone to stalling, allowing it to operate efficiently over a broader range of flow rates.
*   **Efficiency:** While the theoretical work is lower, the improved flow characteristics and reduced losses often lead to higher efficiencies over a wider operating range compared to radial or forward-curved blades.

---

### 9. Important Points to Remember

*   **Radial Entry Assumption:** Simplifies Euler's equation to $W_s = u_2 v_{u2}$.
*   **Velocity Triangles:** Essential for analyzing energy transfer and forces. Pay attention to the signs and directions of velocity components.
*   **Degree of Reaction:** Indicates the distribution of static pressure rise between the impeller and diffuser. Generally between 0 and 1.
*   **Blade Discharge Angle ($\beta_2$):**
    *   **Backward-curved ($\beta_2 < 90^\circ$):** Lower work output, higher flow rate, wider stall margin, generally better efficiency over a range.
    *   **Radial ($\beta_2 = 90^\circ$):** Higher work output, lower flow rate, narrower stall margin, efficiency is sensitive to operating point.
*   **Performance Curves:** Crucial for understanding operating limits (surge, choke) and selecting the compressor for a given application.
*   **Centrifugal Force:** A key mechanism for pressure rise in radial compressors, in addition to diffusion.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
