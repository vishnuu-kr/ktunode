---
title: "Pipe flow - Computation of major losses in pipes (derivation of Darcy Weisbach equation) - Computation of minor losses in pipes (equations only)"
subject: "FLUID MECHANICS"
module: "Module 4: Flow through Orifices: hydraulic coefficients and experimental determination of hydraulic coefficients (associated numerical problems)"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810703"
status: "completed"
scrapedAt: "2026-05-20T18:40:42.271Z"
---
# Fluid Mechanics: Module 4 - Pipe Flow Analysis

This module delves into the crucial aspects of fluid flow within pipes, focusing on the calculation of energy losses, both major and minor, which are essential for understanding and designing fluid systems.

## 1. Pipe Flow: Computation of Major Losses in Pipes

Major losses are the frictional losses that occur due to the viscosity of the fluid and the roughness of the pipe walls. These losses are the dominant component of total head loss in long pipes.

### 1.1. Key Concepts and Definitions

*   **Head Loss ($h_f$)**: The energy lost per unit weight of fluid due to friction and other flow disturbances. It's typically expressed in units of length (e.g., meters or feet).
*   **Friction Factor ($f$)**: A dimensionless coefficient that quantifies the resistance to flow due to friction. It depends on the Reynolds number and the relative roughness of the pipe.
*   **Reynolds Number ($Re$)**: A dimensionless parameter that characterizes the flow regime (laminar or turbulent). It's defined as $Re = \frac{\rho v D}{\mu}$, where:
    *   $\rho$ is the fluid density.
    *   $v$ is the average flow velocity.
    *   $D$ is the pipe diameter.
    *   $\mu$ is the dynamic viscosity of the fluid.
*   **Relative Roughness ($\epsilon/D$)**: The ratio of the absolute roughness of the pipe wall ($\epsilon$) to the pipe diameter ($D$).
*   **Absolute Roughness ($\epsilon$)**: A measure of the average height of the surface irregularities of the pipe wall.

### 1.2. Derivation of the Darcy-Weisbach Equation

The Darcy-Weisbach equation is the fundamental equation for calculating major losses in pipe flow. It's derived from principles of dimensional analysis and experimental data.

**Assumptions:**

1.  **Steady, incompressible flow**: Fluid properties and flow rate remain constant over time.
2.  **Fully developed flow**: The velocity profile is constant along the length of the pipe.
3.  **Uniform pipe cross-section**: The pipe diameter is constant.

**Derivation Steps (Conceptual Outline):**

The derivation typically involves considering the forces acting on a cylindrical element of fluid in a pipe and applying momentum principles.

*   **Force Balance on a Fluid Element:** Consider a cylindrical element of fluid of length $L$ and diameter $D$. The forces acting on it are:
    *   Pressure forces at the ends: $P_1 A - P_2 A$, where $A = \frac{\pi D^2}{4}$ is the cross-sectional area.
    *   Shear force due to friction on the pipe wall: $\tau_w P_{wall} L$, where $\tau_w$ is the wall shear stress and $P_{wall} = \pi D$ is the wetted perimeter.
*   **Momentum Principle:** For steady flow, the net force acting on the fluid element must be zero.
    $\sum F_x = 0$
    $(P_1 - P_2)A - \tau_w (\pi D L) = 0$
*   **Relating Pressure Drop to Head Loss:** The pressure drop $(P_1 - P_2)$ is related to the head loss ($h_f$) by:
    $P_1 - P_2 = \rho g h_f$
*   **Relating Shear Stress to Friction Factor:** The wall shear stress ($\tau_w$) is related to the friction factor ($f$) by:
    $\tau_w = f \frac{\rho v^2}{8}$
*   **Substituting and Rearranging:** Substituting these relationships into the force balance equation and simplifying leads to the Darcy-Weisbach equation:

    $$h_f = f \frac{L}{D} \frac{v^2}{2g}$$

    Where:
    *   $h_f$ = Head loss due to friction (m or ft)
    *   $f$ = Darcy friction factor (dimensionless)
    *   $L$ = Length of the pipe (m or ft)
    *   $D$ = Diameter of the pipe (m or ft)
    *   $v$ = Average velocity of the fluid (m/s or ft/s)
    *   $g$ = Acceleration due to gravity (9.81 m/s² or 32.2 ft/s²)

### 1.3. Determining the Friction Factor ($f$)

The friction factor is not constant and depends on the flow regime.

*   **Laminar Flow ($Re < 2300$):**
    *   The flow is smooth and orderly.
    *   Friction is primarily due to viscous forces.
    *   **Hagen-Poiseuille Law:** For laminar flow, the friction factor can be derived from the Hagen-Poiseuille equation:
        $$f = \frac{64}{Re}$$
*   **Turbulent Flow ($Re > 4000$):**
    *   The flow is chaotic and characterized by eddies and mixing.
    *   Friction is influenced by both viscosity and the roughness of the pipe walls.
    *   **Moody Chart:** The friction factor for turbulent flow is typically determined using the Moody chart, which plots $f$ against $Re$ for various values of relative roughness ($\epsilon/D$).
    *   **Colebrook Equation (Implicit):** The Colebrook equation is an empirical correlation that accurately predicts $f$ for turbulent flow. It's an implicit equation, meaning $f$ appears on both sides, and requires iterative solution:
        $$\frac{1}{\sqrt{f}} = -2.0 \log_{10}\left(\frac{\epsilon/D}{3.7} + \frac{2.51}{Re\sqrt{f}}\right)$$
    *   **Explicit Approximations (e.g., Swamee-Jain Equation):** For practical engineering calculations without iteration, explicit approximations are often used. The Swamee-Jain equation is a good example:
        $$f = \frac{0.25}{\left[\log_{10}\left(\frac{\epsilon/D}{3.7} + \frac{5.74}{Re^{0.9}}\right)\right]^2}$$

### 1.4. Examples and Numerical Problems (Major Losses)

**Example 1: Calculating Head Loss in a Smooth Pipe**

Water at 20°C flows through a smooth pipe of 0.1 m diameter at an average velocity of 2 m/s. The pipe is 100 m long. Calculate the head loss due to friction.

**Given:**
*   $D = 0.1$ m
*   $v = 2$ m/s
*   $L = 100$ m
*   Fluid: Water at 20°C. From tables, $\rho = 998.2$ kg/m³, $\mu = 1.002 \times 10^{-3}$ Pa·s.
*   Pipe is smooth, so $\epsilon \approx 0$.

**Solution:**

1.  **Calculate Reynolds Number ($Re$)**:
    $Re = \frac{\rho v D}{\mu} = \frac{(998.2 \text{ kg/m}^3)(2 \text{ m/s})(0.1 \text{ m})}{1.002 \times 10^{-3} \text{ Pa} \cdot \text{s}} \approx 1.99 \times 10^5$

2.  **Determine Flow Regime**: Since $Re > 4000$, the flow is turbulent.

3.  **Determine Friction Factor ($f$)**: For a smooth pipe, we can use the simplified form of the Colebrook equation or an explicit approximation like Swamee-Jain. Using Swamee-Jain for smooth pipe ($\epsilon=0$):
    $f = \frac{0.25}{\left[\log_{10}\left(\frac{5.74}{Re^{0.9}}\right)\right]^2} = \frac{0.25}{\left[\log_{10}\left(\frac{5.74}{(1.99 \times 10^5)^{0.9}}\right)\right]^2}$
    $f \approx \frac{0.25}{\left[\log_{10}\left(\frac{5.74}{83000}\right)\right]^2} \approx \frac{0.25}{(-2.06)^2} \approx 0.059$

    *(Alternatively, using a Moody chart with $Re \approx 2 \times 10^5$ and $\epsilon/D = 0$ would yield a similar value.)*

4.  **Calculate Head Loss ($h_f$) using Darcy-Weisbach Equation**:
    $h_f = f \frac{L}{D} \frac{v^2}{2g} = (0.059) \frac{100 \text{ m}}{0.1 \text{ m}} \frac{(2 \text{ m/s})^2}{2 \times 9.81 \text{ m/s}^2}$
    $h_f \approx 0.059 \times 1000 \times \frac{4}{19.62} \approx 12.03$ m

**Answer:** The head loss due to friction is approximately 12.03 meters.

**Practice Question 1:**

Oil with a kinematic viscosity of $2 \times 10^{-5}$ m²/s and a specific gravity of 0.85 flows through a cast iron pipe of internal diameter 0.2 m at an average velocity of 1.5 m/s. The pipe is 50 m long. Calculate the head loss due to friction. (Assume absolute roughness for cast iron, $\epsilon = 0.00026$ m. Use $\rho_{water} = 1000$ kg/m³).

**Answer:**
1.  $\rho_{oil} = 0.85 \times 1000 = 850$ kg/m³
2.  $Re = \frac{vD}{\nu} = \frac{(1.5 \text{ m/s})(0.2 \text{ m})}{2 \times 10^{-5} \text{ m}^2/\text{s}} = 1.5 \times 10^4$
3.  Flow is turbulent.
4.  Relative roughness, $\epsilon/D = \frac{0.00026 \text{ m}}{0.2 \text{ m}} = 0.0013$
5.  Using Swamee-Jain:
    $f = \frac{0.25}{\left[\log_{10}\left(\frac{0.0013}{3.7} + \frac{5.74}{(1.5 \times 10^4)^{0.9}}\right)\right]^2} \approx \frac{0.25}{\left[\log_{10}\left(0.000351 + \frac{5.74}{7780}\right)\right]^2}$
    $f \approx \frac{0.25}{\left[\log_{10}\left(0.000351 + 0.000738\right)\right]^2} = \frac{0.25}{[\log_{10}(0.001089)]^2} \approx \frac{0.25}{(-2.96)^2} \approx 0.0285$
6.  $h_f = 0.0285 \times \frac{50 \text{ m}}{0.2 \text{ m}} \times \frac{(1.5 \text{ m/s})^2}{2 \times 9.81 \text{ m/s}^2} \approx 0.0285 \times 250 \times 0.1147 \approx 0.816$ m

**Answer: $h_f \approx 0.816$ m**

### 1.5. Important Points to Remember (Major Losses)

*   Major losses are due to friction along the pipe length.
*   The Darcy-Weisbach equation is the primary tool for calculating major losses.
*   The friction factor ($f$) is critical and depends on the Reynolds number and relative roughness.
*   For laminar flow ($Re < 2300$), $f = 64/Re$.
*   For turbulent flow ($Re > 4000$), use the Moody chart or empirical equations (Colebrook, Swamee-Jain) to find $f$.
*   Always ensure consistent units when using the Darcy-Weisbach equation.
*   The roughness of the pipe material significantly impacts the friction factor in turbulent flow.

## 2. Pipe Flow: Computation of Minor Losses in Pipes (Equations Only)

Minor losses, also known as localized losses, occur due to changes in the pipe geometry or flow direction, such as bends, valves, fittings, contractions, and expansions. These losses are typically expressed as a fraction of the kinetic energy of the flow.

### 2.1. Key Concepts and Definitions

*   **Minor Loss Coefficient ($K_L$)**: A dimensionless coefficient that quantifies the head loss for a specific flow element. It's unique to each type of fitting or disturbance.
*   **Velocity Head ($v^2/2g$)**: The kinetic energy per unit weight of the fluid.

### 2.2. Equations for Minor Losses

The general form of the equation for minor losses is:

$$h_m = K_L \frac{v^2}{2g}$$

Where:
*   $h_m$ = Head loss for a minor loss element (m or ft)
*   $K_L$ = Minor loss coefficient (dimensionless)
*   $v$ = Average velocity of the fluid in the pipe section immediately downstream of the element (m/s or ft/s)
*   $g$ = Acceleration due to gravity (9.81 m/s² or 32.2 ft/s²)

**Note:** The velocity used in the equation is typically the velocity in the main pipe. For expansions or contractions where the diameter changes, the velocity may need to be calculated for the appropriate section.

### 2.3. Common Minor Loss Elements and their $K_L$ Values (General Forms/Equations)

The $K_L$ values are often determined experimentally and can vary depending on the specific design and size of the fitting.

*   **Entrance Loss (sudden)**:
    $$K_{L,entrance} = 1$$
    (For a sharp-edged entrance)

*   **Exit Loss (sudden)**:
    $$K_{L,exit} = 1$$
    (The fluid jet expands to fill the tank, dissipating all kinetic energy)

*   **Contraction Loss (sudden)**:
    $$K_L = \left(1 - \frac{A_2}{A_1}\right)^2$$
    Where $A_1$ is the upstream area and $A_2$ is the downstream area. A more refined formula considering the vena contracta effect is:
    $$K_L = 0.5 \left(1 - \frac{A_2}{A_1}\right)$$

*   **Expansion Loss (sudden)**:
    $$K_L = \left(1 - \frac{A_1}{A_2}\right)^2$$
    Where $A_1$ is the upstream area and $A_2$ is the downstream area.

*   **Bends (Elbows)**:
    *   **Standard 90° Elbow**: $K_L \approx 0.75$ to $0.9$ (depends on radius ratio and whether it has a bell mouth).
    *   **Standard 45° Elbow**: $K_L \approx 0.4$
    *   **Return Bend**: $K_L \approx 2.0$
    *   For specific bends, $K_L$ is often provided in tables or charts by manufacturers.

*   **Tees and Crosses**:
    *   **Branch Flow**: $K_L$ varies significantly depending on whether the flow goes straight through or branches.
        *   Straight-through: $K_L \approx 0.2$ to $0.4$
        *   Branching: $K_L \approx 0.7$ to $1.0$
    *   Specific values are usually obtained from manufacturers' data or empirical correlations.

*   **Valves**:
    *   **Gate Valve (fully open)**: $K_L \approx 0.15$ to $0.2$
    *   **Globe Valve (fully open)**: $K_L \approx 4$ to $6$
    *   **Check Valve (swing type)**: $K_L \approx 2$ to $2.5$
    *   **Ball Valve (fully open)**: $K_L \approx 0.05$ to $0.2$
    *   $K_L$ for partially open valves can be significantly higher.

*   **Sudden Reduction in Area (similar to contraction)**:
    $$K_L = \left(1 - \frac{A_2}{A_1}\right)^2$$
    Or, using a more refined approach involving the vena contracta:
    $$K_L = 0.5 \left(1 - \frac{A_2}{A_1}\right)$$

*   **Gradual Contraction/Expansion**: For gradual changes, the loss coefficients are generally lower than for sudden changes and depend on the angle of convergence/divergence. Specific empirical formulas or tabulated values are used.

### 2.4. Total Head Loss in a Pipe System

The total head loss in a pipe system is the sum of the major losses and all the minor losses:

$$h_{L,total} = h_f + \sum h_{m}$$

$$h_{L,total} = f \frac{L}{D} \frac{v^2}{2g} + \sum \left(K_L \frac{v^2}{2g}\right)$$

$$h_{L,total} = \left(f \frac{L}{D} + \sum K_L\right) \frac{v^2}{2g}$$

### 2.5. Examples and Numerical Problems (Minor Losses)

**Example 2: Calculating Total Head Loss with Minor Losses**

Water flows at 3 m/s through a 0.1 m diameter pipe that is 50 m long. The pipe is made of commercial steel and has a sharp-edged entrance from a reservoir. It also contains two standard 90° elbows and a fully open gate valve. Calculate the total head loss.

**Given:**
*   $D = 0.1$ m
*   $v = 3$ m/s
*   $L = 50$ m
*   Material: Commercial steel ($\epsilon \approx 0.00045$ m)
*   Entrance: Sharp-edged, $K_{L,entrance} = 1$
*   Elbows: Two standard 90°, $K_{L,elbow} \approx 0.9$ each. Total $K_{L,elbows} = 2 \times 0.9 = 1.8$.
*   Valve: One gate valve (fully open), $K_{L,valve} \approx 0.2$.
*   Fluid: Water. For $v=3$ m/s and $D=0.1$ m, $Re \approx \frac{1000 \times 3 \times 0.1}{10^{-3}} = 3 \times 10^5$.

**Solution:**

1.  **Calculate Major Loss**:
    *   Relative roughness, $\epsilon/D = \frac{0.00045 \text{ m}}{0.1 \text{ m}} = 0.0045$.
    *   From Moody chart or Swamee-Jain for $Re = 3 \times 10^5$ and $\epsilon/D = 0.0045$:
        $f = \frac{0.25}{\left[\log_{10}\left(\frac{0.0045}{3.7} + \frac{5.74}{(3 \times 10^5)^{0.9}}\right)\right]^2} \approx \frac{0.25}{\left[\log_{10}\left(0.001216 + \frac{5.74}{123000}\right)\right]^2}$
        $f \approx \frac{0.25}{\left[\log_{10}(0.001216 + 0.0000467)\right]^2} = \frac{0.25}{[\log_{10}(0.00126)]^2} \approx \frac{0.25}{(-2.9)^2} \approx 0.0296$
    *   $h_f = f \frac{L}{D} \frac{v^2}{2g} = 0.0296 \times \frac{50 \text{ m}}{0.1 \text{ m}} \times \frac{(3 \text{ m/s})^2}{2 \times 9.81 \text{ m/s}^2}$
        $h_f \approx 0.0296 \times 500 \times \frac{9}{19.62} \approx 6.77$ m

2.  **Calculate Minor Losses**:
    *   $\sum K_L = K_{L,entrance} + K_{L,elbows} + K_{L,valve} = 1 + 1.8 + 0.2 = 3.0$
    *   $h_m = \sum K_L \frac{v^2}{2g} = 3.0 \times \frac{(3 \text{ m/s})^2}{2 \times 9.81 \text{ m/s}^2} = 3.0 \times \frac{9}{19.62} \approx 1.38$ m

3.  **Calculate Total Head Loss**:
    *   $h_{L,total} = h_f + h_m = 6.77 \text{ m} + 1.38 \text{ m} = 8.15$ m

**Answer:** The total head loss is approximately 8.15 meters.

**Practice Question 2:**

A pump supplies water to a tank through a 0.05 m diameter pipe. The pipe is 20 m long and made of smooth plastic. It has a sharp-edged entrance from the pump, a 45° standard elbow, and a sudden expansion into a large tank. The average velocity in the 0.05 m pipe is 2 m/s. Calculate the total head loss in the pipe.

**Answer:**
1.  **Major Loss ($h_f$)**:
    *   $D = 0.05$ m, $L = 20$ m, $v = 2$ m/s, smooth pipe ($\epsilon \approx 0$).
    *   $Re = \frac{1000 \times 2 \times 0.05}{10^{-3}} = 10^5$.
    *   For smooth pipe, $f = \frac{0.25}{\left[\log_{10}\left(\frac{5.74}{(10^5)^{0.9}}\right)\right]^2} = \frac{0.25}{\left[\log_{10}\left(\frac{5.74}{79400}\right)\right]^2} \approx \frac{0.25}{(-2.09)^2} \approx 0.057$
    *   $h_f = 0.057 \times \frac{20 \text{ m}}{0.05 \text{ m}} \times \frac{(2 \text{ m/s})^2}{2 \times 9.81 \text{ m/s}^2} \approx 0.057 \times 400 \times 0.204 \approx 4.65$ m

2.  **Minor Losses ($h_m$)**:
    *   Entrance: $K_{L,entrance} = 1$
    *   45° Elbow: $K_{L,elbow} \approx 0.4$
    *   Sudden Expansion: $A_1 = \pi (0.05/2)^2$, $A_2$ is very large (tank), so $A_2/A_1 \to \infty$, meaning $A_1/A_2 \to 0$.
        $K_{L,expansion} = (1 - A_1/A_2)^2 \approx (1 - 0)^2 = 1$. (This assumes the pipe discharges into a very large quiescent fluid body, essentially dissipating all kinetic energy.)
    *   $\sum K_L = 1 + 0.4 + 1 = 2.4$
    *   $h_m = \sum K_L \frac{v^2}{2g} = 2.4 \times \frac{(2 \text{ m/s})^2}{2 \times 9.81 \text{ m/s}^2} = 2.4 \times \frac{4}{19.62} \approx 0.49$ m

3.  **Total Head Loss**:
    *   $h_{L,total} = h_f + h_m = 4.65 \text{ m} + 0.49 \text{ m} = 5.14$ m

**Answer: The total head loss is approximately 5.14 meters.**

### 2.6. Important Points to Remember (Minor Losses)

*   Minor losses are due to fittings, valves, bends, etc.
*   They are calculated using the minor loss coefficient ($K_L$) and the velocity head ($v^2/2g$).
*   The $K_L$ value is specific to each type of fitting and its geometry.
*   For sudden expansions and contractions, the loss coefficients are related to the ratio of the cross-sectional areas.
*   Entrance and exit losses are significant and must be accounted for.
*   The total head loss is the sum of all major and minor losses.
*   In systems with many fittings or short pipes, minor losses can be a significant portion of the total head loss.

This concludes Module 4's focus on pipe flow. Understanding major and minor losses is fundamental for analyzing fluid systems in various engineering applications.
