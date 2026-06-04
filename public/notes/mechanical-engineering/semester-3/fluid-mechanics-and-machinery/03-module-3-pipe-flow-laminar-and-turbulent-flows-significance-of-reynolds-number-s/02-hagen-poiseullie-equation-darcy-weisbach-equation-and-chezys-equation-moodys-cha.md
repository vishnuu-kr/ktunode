---
title: "– Hagen-Poiseullie equation, Darcy-Weisbach equation and Chezy’s equation , Moody’s chart for estimating frictional losses, Major and minor energy losses, hydraulic gradient, and total energy line."
subject: "FLUID MECHANICS AND MACHINERY"
module: "Module 3: Pipe flow – laminar and turbulent flows, significance of Reynolds number, shear stress and velocity distribution in a pipe flow."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462d21"
status: "completed"
scrapedAt: "2026-05-20T17:49:26.452Z"
---
# FLUID MECHANICS AND MACHINERY - Module 3: Pipe Flow

## Topic: Pipe Flow - Laminar and Turbulent Flows, Reynolds Number, Shear Stress and Velocity Distribution

This module delves into the behavior of fluids as they flow through pipes, a fundamental aspect of fluid mechanics with wide-ranging engineering applications. We will explore the different regimes of flow, the factors influencing them, and the resulting energy losses that must be accounted for in system design.

**Course Outcome Alignment:**

*   **CO3:** Analyze viscous flow through pipes and estimate the major and minor losses associated with piping network. (Knowledge Level: K3)

### 3.1 Introduction to Pipe Flow

Pipe flow is the movement of a fluid through a confined conduit, typically circular in cross-section. Understanding pipe flow is crucial for designing water supply systems, oil and gas pipelines, cooling systems, and numerous other engineering applications.

### 3.2 Laminar vs. Turbulent Flow

The nature of fluid flow in a pipe can be broadly categorized into two distinct regimes: laminar and turbulent.

#### 3.2.1 Laminar Flow

*   **Definition:** Laminar flow is characterized by smooth, orderly motion of fluid particles. Fluid layers slide past each other with minimal mixing. Imagine layers of cards sliding over each other.
*   **Characteristics:**
    *   Fluid particles move in straight, parallel paths.
    *   Velocity is uniformly distributed across the cross-section, being zero at the pipe wall and maximum at the center.
    *   Dominant forces are viscous forces.
    *   Occurs at low velocities and with highly viscous fluids.
*   **Velocity Distribution:** Parabolic profile, with $v_x(r) = v_{max} \left(1 - \frac{r^2}{R^2}\right)$, where $v_x$ is the velocity at a radial distance $r$ from the center, $v_{max}$ is the maximum velocity at the center, and $R$ is the pipe radius.
*   **Shear Stress Distribution:** Linear distribution, $\tau(r) = \tau_w \left(1 - \frac{r}{R}\right)$, where $\tau_w$ is the wall shear stress.

#### 3.2.2 Turbulent Flow

*   **Definition:** Turbulent flow is characterized by chaotic, irregular, and random motion of fluid particles, with significant mixing across the flow. Imagine smoke rising from a chimney.
*   **Characteristics:**
    *   Fluid particles move in eddies and swirls.
    *   Velocity profile is flatter and more uniform in the core region compared to laminar flow.
    *   Dominant forces are inertial forces.
    *   Occurs at high velocities and with less viscous fluids.
    *   Characterized by fluctuations in velocity and pressure.
*   **Velocity Distribution:** Flatter, more "plug-like" profile. A common approximation is the "law of the wall" or power-law profile, e.g., $\frac{v}{v^*} = \frac{1}{\kappa} \ln\left(\frac{y v^*}{\nu}\right) + B$ (logarithmic law) or $v = v_{max} \left(1 - \frac{r}{R}\right)^{1/n}$ (power-law, where $n$ is typically around 7 for smooth pipes).
*   **Shear Stress Distribution:** Also has a linear distribution, $\tau(r) = \tau_w \left(1 - \frac{r}{R}\right)$, but the wall shear stress $\tau_w$ is significantly higher in turbulent flow due to increased momentum transfer.

### 3.3 Reynolds Number ($Re$)

The Reynolds number is a dimensionless quantity that helps predict whether a flow will be laminar or turbulent. It represents the ratio of inertial forces to viscous forces within the fluid.

*   **Formula:** $Re = \frac{\rho v D}{\mu} = \frac{v D}{\nu}$
    *   $\rho$: Fluid density (kg/m³)
    *   $v$: Average velocity of the fluid (m/s)
    *   $D$: Characteristic length, typically the pipe diameter (m)
    *   $\mu$: Dynamic viscosity of the fluid (Pa·s or N·s/m²)
    *   $\nu$: Kinematic viscosity of the fluid ($\mu/\rho$) (m²/s)

*   **Flow Regimes based on Reynolds Number (for pipe flow):**
    *   $Re < 2300$: **Laminar Flow** (Smooth, orderly)
    *   $2300 < Re < 4000$: **Transitional Flow** (Unstable, can exhibit characteristics of both)
    *   $Re > 4000$: **Turbulent Flow** (Chaotic, random)

*   **Significance:** The Reynolds number is crucial for:
    *   Determining the flow regime (laminar or turbulent).
    *   Predicting friction losses in pipes.
    *   Scaling up experimental results to larger systems.

*   **Reference:** Cengel & Cimbala, Chapter 10 (Internal Flow); Som & Bodh, Chapter 7 (Flow Through Pipes); Bansal, Chapter 6 (Flow Through Pipes).

#### Example: Reynolds Number Calculation

Water at 20°C flows through a pipe of 5 cm diameter at an average velocity of 1 m/s. Determine the flow regime.

*   Given: $D = 0.05$ m, $v = 1$ m/s.
*   From properties of water at 20°C: $\rho \approx 998$ kg/m³, $\mu \approx 1.002 \times 10^{-3}$ Pa·s.
*   Calculate kinematic viscosity: $\nu = \mu/\rho = (1.002 \times 10^{-3} \text{ Pa·s}) / (998 \text{ kg/m}^3) \approx 1.004 \times 10^{-6}$ m²/s.
*   $Re = \frac{v D}{\nu} = \frac{(1 \text{ m/s}) \times (0.05 \text{ m})}{1.004 \times 10^{-6} \text{ m²/s}} \approx 49,700$

Since $Re > 4000$, the flow is turbulent.

### 3.4 Shear Stress in Pipe Flow

Shear stress in pipe flow is the frictional force per unit area exerted by the fluid on the pipe wall, and within the fluid layers themselves.

*   **Wall Shear Stress ($\tau_w$):** This is the shear stress acting at the pipe wall. It's a direct consequence of the fluid's viscosity and the velocity gradient near the wall.
    *   **Laminar Flow:** $\tau_w = \frac{4 \mu v}{D}$ or $\tau_w = \frac{8 \mu v}{D}$ where v is average velocity.
    *   **Turbulent Flow:** $\tau_w$ is more complex to calculate and depends on the velocity profile and turbulence characteristics. It's often related to the friction factor.

*   **Shear Stress Distribution ($\tau(r)$):**
    *   **Laminar Flow:** Linear distribution: $\tau(r) = \tau_w \left(1 - \frac{r}{R}\right)$. Shear stress is zero at the center and maximum at the wall.
    *   **Turbulent Flow:** Also exhibits a linear distribution of *mean* shear stress, $\tau(r) = \tau_w \left(1 - \frac{r}{R}\right)$. However, the instantaneous shear stress is highly fluctuating due to eddies. The effective shear stress in turbulent flow is larger than in laminar flow at the same average velocity due to momentum transfer by turbulent eddies.

### 3.5 Velocity Distribution in a Pipe Flow

The velocity of the fluid is not uniform across the pipe's cross-section. It is zero at the pipe wall due to the no-slip condition and increases towards the center.

*   **Laminar Flow:**
    *   **Parabolic Profile:** $v_x(r) = v_{max} \left(1 - \frac{r^2}{R^2}\right)$
    *   The average velocity $v$ is half the maximum velocity: $v = \frac{v_{max}}{2}$

*   **Turbulent Flow:**
    *   **Flatter Profile:** The velocity profile is much flatter in the core region and steeper near the walls compared to laminar flow.
    *   **Logarithmic Law of the Wall:** For smooth pipes, the velocity profile in the turbulent region can be approximated by:
        $\frac{v(y)}{v^*} = \frac{1}{\kappa} \ln\left(\frac{y v^*}{\nu}\right) + B$
        where:
        *   $y$: distance from the wall
        *   $v^* = \sqrt{\tau_w / \rho}$: friction velocity
        *   $\kappa \approx 0.41$ (von Kármán constant)
        *   $B \approx 5.0$ (empirical constant for smooth pipes)
    *   **Power-Law Profile:** Another approximation, especially for fully turbulent flow, is the power-law profile:
        $\frac{v(y)}{v_{max}} = \left(1 - \frac{y}{R}\right)^{1/n}$
        where $n$ is an empirical exponent that increases with Reynolds number (e.g., $n=7$ for $Re \approx 10^5$).

*   **Important Note:** The average velocity in turbulent flow is a larger fraction of the maximum velocity than in laminar flow.

### 3.6 Equations for Pressure Drop and Head Loss in Pipe Flow

Pressure drop (or head loss) in pipes is a critical factor in designing fluid systems. It represents the energy dissipated due to friction.

#### 3.6.1 Hagen-Poiseuille Equation (Laminar Flow Only)

The Hagen-Poiseuille equation describes the pressure drop in a pipe for **laminar flow**. It's derived by applying the momentum balance to a cylindrical fluid element, assuming a parabolic velocity profile.

*   **Derivation Basis:** Viscous forces dominate, and the Navier-Stokes equations simplify considerably.
*   **Formula for Pressure Drop ($\Delta P$):**
    $\Delta P = \frac{32 \mu L v}{D^2}$
    where:
    *   $\Delta P$: Pressure drop (Pa)
    *   $\mu$: Dynamic viscosity (Pa·s)
    *   $L$: Length of the pipe (m)
    *   $v$: Average velocity (m/s)
    *   $D$: Diameter of the pipe (m)

*   **Formula for Head Loss ($h_f$):** Head loss is the pressure drop expressed as an equivalent height of the fluid column.
    $h_f = \frac{\Delta P}{\rho g} = \frac{32 \mu L v}{\rho g D^2}$
    or
    $h_f = \frac{64 \mu L v}{\rho g D^2} \times \frac{D}{v} = \frac{64}{Re} \frac{L}{D} \frac{v^2}{2g}$

*   **Limitations:** This equation is strictly valid only for laminar flow ($Re < 2300$).

*   **Reference:** Cengel & Cimbala, Chapter 10; Som & Bodh, Chapter 7; Bansal, Chapter 6.

#### 3.6.2 Darcy-Weisbach Equation (Laminar and Turbulent Flow)

The Darcy-Weisbach equation is a more general equation applicable to **both laminar and turbulent flows**. It relates the head loss due to friction to the pipe characteristics, flow velocity, and a dimensionless friction factor.

*   **Formula for Head Loss ($h_f$):**
    $h_f = f \frac{L}{D} \frac{v^2}{2g}$
    where:
    *   $f$: Darcy friction factor (dimensionless)
    *   $L$: Length of the pipe (m)
    *   $D$: Diameter of the pipe (m)
    *   $v$: Average velocity (m/s)
    *   $g$: Acceleration due to gravity (m/s²)

*   **Darcy Friction Factor ($f$):**
    *   **Laminar Flow ($Re < 2300$):** $f = \frac{64}{Re}$. This shows consistency with the Hagen-Poiseuille equation.
    *   **Turbulent Flow ($Re > 4000$):** The friction factor $f$ depends on the Reynolds number ($Re$) and the relative roughness of the pipe ($\epsilon/D$). It's typically determined from empirical correlations or the Moody chart.
        *   $\epsilon$: Roughness height of the pipe material (m)
        *   $\epsilon/D$: Relative roughness

*   **Darcy-Weisbach Equation for Pressure Drop ($\Delta P$):**
    $\Delta P = \rho g h_f = f \frac{L}{D} \frac{\rho v^2}{2}$

*   **Reference:** Cengel & Cimbala, Chapter 10; Som & Bodh, Chapter 7; Bansal, Chapter 6.

#### 3.6.3 Chezy's Equation (Empirical for Turbulent Flow)

Chezy's equation is an older, empirical formula primarily used for turbulent flow, especially in open channels but also applied to pipes. It relates the average velocity to the hydraulic radius, slope of the energy line, and a Chezy coefficient.

*   **Formula for Velocity ($v$):**
    $v = C \sqrt{R_h S}$
    where:
    *   $v$: Average velocity (m/s)
    *   $C$: Chezy coefficient (dimensionless or depends on units, often empirically determined)
    *   $R_h$: Hydraulic radius ($A_c / P$), where $A_c$ is the cross-sectional area and $P$ is the wetted perimeter. For a circular pipe flowing full, $R_h = D/4$.
    *   $S$: Slope of the energy grade line (dimensionless), which is $h_f/L$ for a straight pipe.

*   **Formula for Head Loss ($h_f$):**
    $h_f = L \left(\frac{v}{C}\right)^2 \frac{1}{R_h} = \frac{L}{R_h} \left(\frac{v}{C}\right)^2$

*   **Relationship between Chezy's C and Darcy's f:**
    $C = \sqrt{\frac{8g}{f}}$

*   **Limitations:** It's an empirical formula, and the Chezy coefficient $C$ varies with flow conditions and pipe roughness. It's generally less accurate than the Darcy-Weisbach equation with modern friction factor correlations.

*   **Reference:** Som & Bodh, Chapter 7; Bansal, Chapter 6.

### 3.7 Moody's Chart for Estimating Frictional Losses

Moody's chart (also known as the Moody diagram) is a graphical representation of the relationship between the Darcy friction factor ($f$), Reynolds number ($Re$), and relative roughness ($\epsilon/D$) for turbulent flow in pipes.

*   **Axes:**
    *   **X-axis:** Reynolds number ($Re$), on a logarithmic scale.
    *   **Y-axis:** Darcy friction factor ($f$), on a logarithmic scale.
    *   **Curves:** Lines represent different values of relative roughness ($\epsilon/D$), ranging from smooth pipes ($\epsilon/D = 0$) to very rough pipes.

*   **How to Use Moody's Chart:**
    1.  **Calculate Reynolds Number ($Re$):** Determine $Re$ based on fluid properties, velocity, and pipe diameter.
    2.  **Determine Relative Roughness ($\epsilon/D$):** Find the absolute roughness ($\epsilon$) for the specific pipe material from tables, and divide by the pipe diameter ($D$).
    3.  **Locate the Intersection:** Find the intersection of the calculated $Re$ value on the x-axis and the appropriate relative roughness curve.
    4.  **Read the Friction Factor ($f$):** Read the corresponding friction factor ($f$) from the y-axis at this intersection point.

*   **Key Regions on the Chart:**
    *   **Laminar Flow Region (Left):** A single line where $f = 64/Re$.
    *   **Transition Zone (Middle):** An unstable region where the friction factor is influenced by both $Re$ and $\epsilon/D$.
    *   **Turbulent Flow Regions (Right):**
        *   **Smooth Pipe Zone:** Friction factor depends only on $Re$.
        *   **Rough Pipe Zone (or Complete Turbulence Zone):** Friction factor becomes independent of $Re$ and depends only on the relative roughness ($\epsilon/D$).

*   **Importance:** Moody's chart is a fundamental tool for engineers to estimate friction losses in turbulent pipe flow, which is the most common scenario.

*   **Reference:** Cengel & Cimbala, Chapter 10; Som & Bodh, Chapter 7; Bansal, Chapter 6.

#### Example: Using Moody's Chart

Oil with a kinematic viscosity of $1 \times 10^{-5}$ m²/s flows through a cast iron pipe with a diameter of 0.1 m at an average velocity of 2 m/s. The absolute roughness of cast iron is approximately $2.6 \times 10^{-4}$ m. Estimate the head loss per 100 m of pipe.

1.  **Calculate Reynolds Number:**
    $Re = \frac{vD}{\nu} = \frac{(2 \text{ m/s}) \times (0.1 \text{ m})}{1 \times 10^{-5} \text{ m²/s}} = 2 \times 10^5$

2.  **Calculate Relative Roughness:**
    $\epsilon/D = \frac{2.6 \times 10^{-4} \text{ m}}{0.1 \text{ m}} = 2.6 \times 10^{-3}$

3.  **Use Moody's Chart:**
    *   Locate $Re = 2 \times 10^5$ on the x-axis.
    *   Locate the curve for $\epsilon/D = 2.6 \times 10^{-3}$ on the chart.
    *   Find the intersection point.
    *   Read the friction factor $f$ from the y-axis. For these values, $f$ is approximately 0.026.

4.  **Calculate Head Loss using Darcy-Weisbach:**
    $h_f = f \frac{L}{D} \frac{v^2}{2g} = 0.026 \times \frac{100 \text{ m}}{0.1 \text{ m}} \times \frac{(2 \text{ m/s})^2}{2 \times 9.81 \text{ m/s²}}$
    $h_f = 0.026 \times 1000 \times \frac{4}{19.62} \approx 5.3 \text{ m}$

The head loss per 100 m of pipe is approximately 5.3 meters.

### 3.8 Major and Minor Energy Losses in Pipe Flow

Energy losses in pipe systems are categorized into two main types: major losses and minor losses.

#### 3.8.1 Major Losses (Frictional Losses)

*   **Definition:** Major losses are the head losses incurred due to **friction** along the length of a straight pipe. These are the dominant losses in long pipe runs.
*   **Cause:** Viscous effects and turbulence within the fluid, leading to dissipation of mechanical energy into thermal energy.
*   **Calculation:** Primarily calculated using the Darcy-Weisbach equation:
    $h_{f, \text{major}} = f \frac{L}{D} \frac{v^2}{2g}$
*   **Factors influencing Major Losses:**
    *   Pipe length ($L$)
    *   Pipe diameter ($D$)
    *   Average velocity ($v$)
    *   Fluid properties (viscosity $\mu$, density $\rho$)
    *   Pipe roughness ($\epsilon$)
    *   Reynolds number ($Re$)
    *   Friction factor ($f$)

#### 3.8.2 Minor Losses

*   **Definition:** Minor losses are head losses that occur due to **discontinuities or fittings** in the piping system, such as valves, elbows, tees, entrances, exits, and expansions/contractions.
*   **Cause:** Flow separation, turbulence generation, and eddy formation at these components.
*   **Calculation:** Minor losses are usually expressed as a function of the kinetic energy of the flow, using a **loss coefficient ($K_L$)**:
    $h_{f, \text{minor}} = K_L \frac{v^2}{2g}$
    where:
    *   $K_L$: Loss coefficient (dimensionless), which is specific to each component and flow condition. It is often determined experimentally.
    *   $v$: Average velocity in the pipe section to which the fitting is attached.

*   **Common Components and their $K_L$ values (typical ranges):**
    *   **Entrance (sharp-edged):** $K_L \approx 0.5$
    *   **Entrance (rounded):** $K_L \approx 0.02 - 0.2$ (depends on radius of curvature)
    *   **Exit (sudden expansion):** $K_L \approx 1.0$ (all kinetic energy is lost)
    *   **Contraction (sudden):** $K_L \approx 0.4$ (can vary)
    *   **Contraction (gradual):** $K_L$ is much smaller.
    *   **Elbows (90° threaded):** $K_L \approx 0.75 - 1.5$
    *   **Elbows (90° flanged/welded):** $K_L \approx 0.3$
    *   **Tees (flow through branch, straight):** $K_L \approx 0.2$
    *   **Tees (flow through branch, 90°):** $K_L \approx 0.4 - 0.7$
    *   **Valves (gate, fully open):** $K_L \approx 0.15 - 0.25$
    *   **Valves (globe, fully open):** $K_L \approx 6 - 10$

*   **Equivalent Length Method:** Minor losses can also be represented by an "equivalent length" ($L_e$), which is the length of straight pipe that would cause the same head loss as the fitting.
    $K_L \frac{v^2}{2g} = f \frac{L_e}{D} \frac{v^2}{2g} \implies L_e = K_L \frac{D}{f}$

*   **Total Head Loss:** The total head loss in a piping system is the sum of major and minor losses:
    $h_{L, \text{total}} = h_{f, \text{major}} + \sum h_{f, \text{minor}}$

*   **Reference:** Cengel & Cimbala, Chapter 10; Som & Bodh, Chapter 7; Bansal, Chapter 6.

#### Example: Calculating Total Head Loss

Water flows at an average velocity of 3 m/s through a 0.1 m diameter pipe. The pipe is 50 m long and made of drawn tubing (smooth). It has a sharp-edged entrance, two 90° standard elbows, and a fully open gate valve. Calculate the total head loss.

1.  **Major Loss:**
    *   Assume $\epsilon = 0$ (drawn tubing). For turbulent flow, $f$ for smooth pipes is typically found from correlations like Colebrook or explicit approximations. Let's assume $f \approx 0.02$ for a moderate $Re$ (e.g., $Re = vD/\nu = 3 \times 0.1 / 10^{-6} = 3 \times 10^5$, which gives $f \approx 0.018$). We'll use $f=0.018$.
    *   $h_{f, \text{major}} = f \frac{L}{D} \frac{v^2}{2g} = 0.018 \times \frac{50 \text{ m}}{0.1 \text{ m}} \times \frac{(3 \text{ m/s})^2}{2 \times 9.81 \text{ m/s²}}$
    *   $h_{f, \text{major}} = 0.018 \times 500 \times \frac{9}{19.62} \approx 4.59 \text{ m}$

2.  **Minor Losses:**
    *   Entrance ($K_L \approx 0.5$): $h_{f, \text{entrance}} = 0.5 \times \frac{(3 \text{ m/s})^2}{2 \times 9.81 \text{ m/s²}} = 0.5 \times \frac{9}{19.62} \approx 0.23 \text{ m}$
    *   Two 90° standard elbows ($K_L \approx 0.75$ each, total $2 \times 0.75 = 1.5$):
        $h_{f, \text{elbows}} = 1.5 \times \frac{(3 \text{ m/s})^2}{2 \times 9.81 \text{ m/s²}} = 1.5 \times \frac{9}{19.62} \approx 0.69 \text{ m}$
    *   Gate valve ($K_L \approx 0.2$): $h_{f, \text{valve}} = 0.2 \times \frac{(3 \text{ m/s})^2}{2 \times 9.81 \text{ m/s²}} = 0.2 \times \frac{9}{19.62} \approx 0.09 \text{ m}$

3.  **Total Head Loss:**
    $h_{L, \text{total}} = h_{f, \text{major}} + h_{f, \text{entrance}} + h_{f, \text{elbows}} + h_{f, \text{valve}}$
    $h_{L, \text{total}} = 4.59 + 0.23 + 0.69 + 0.09 \approx 5.60 \text{ m}$

### 3.9 Hydraulic Gradient and Total Energy Line

These lines are graphical representations of the energy distribution within a fluid flowing in a pipe. They are essential for visualizing pressure changes and energy losses.

#### 3.9.1 Hydraulic Grade Line (HGL)

*   **Definition:** The HGL represents the sum of the **pressure head ($P/\rho g$) and the elevation head ($z$)** along the pipe. It is the piezometric head.
*   **Graphical Representation:** It's the level to which water would rise in a series of piezometers inserted along the pipe.
*   **Behavior in a Pipe:**
    *   **Constant diameter, horizontal pipe:** HGL slopes downwards in the direction of flow due to frictional losses.
    *   **Incline pipe:** HGL follows the elevation of the pipe, but with a downward slope if there's friction.
    *   **Pump:** HGL shows a sudden jump upwards.
    *   **Turbine/Valve:** HGL shows a sudden drop.
    *   **Exit to atmosphere:** HGL ends at the surface of the fluid in the reservoir.
*   **Interpretation:** The HGL indicates the pressure head in the fluid. If the HGL is above the pipe, the pressure is positive. If it drops to the pipe centerline, the pressure is zero (gage). If it drops below the pipe centerline, the pressure becomes negative (gage), which can lead to cavitation if it falls below the vapor pressure.

#### 3.9.2 Total Energy Line (TEL)

*   **Definition:** The TEL represents the total mechanical energy per unit weight of the fluid. It is the sum of the **pressure head ($P/\rho g$), velocity head ($v^2/2g$), and elevation head ($z$)**.
*   **Graphical Representation:** It's the level to which water would rise in a series of Pitot tubes inserted along the pipe.
*   **Behavior in a Pipe:**
    *   **Constant diameter, horizontal pipe:** TEL slopes downwards in the direction of flow at a steeper rate than the HGL, because the velocity head ($v^2/2g$) is also decreasing due to flow restrictions (often assumed constant diameter, so velocity head is constant if there are no changes in diameter). However, in terms of the total energy, the TEL must always be above the HGL by the amount of the velocity head.
    *   **The vertical distance between the TEL and the HGL is equal to the velocity head ($v^2/2g$).**
    *   **The slope of the TEL represents the total head loss (major + minor) per unit length of the pipe.**
    *   **Pumps:** Cause a significant upward jump in the TEL.
    *   **Turbines/Valves:** Cause a significant downward drop in the TEL.
*   **Interpretation:** The TEL indicates the total mechanical energy available in the fluid. The difference in TEL between two points represents the total energy loss due to friction and fittings.

#### Relationship between HGL and TEL

*   The TEL is always above the HGL by an amount equal to the velocity head ($v^2/2g$).
*   In a pipe of constant diameter, the vertical distance between the TEL and HGL remains constant if the velocity is constant.
*   For laminar flow or very smooth turbulent flow where velocity is uniform, the HGL and TEL might appear very close. However, in typical turbulent flow with a flatter profile, the velocity head is significant.

#### Example Scenario: A Pumped Pipe System

Consider a system where a pump lifts water from a lower reservoir to an upper reservoir through a horizontal pipe with an elbow and a valve.

*   **Starting at the lower reservoir surface:** $z = $ elevation of reservoir surface, $P = 0$ (gage), $v = 0$. So, HGL = $z$, TEL = $z$.
*   **Entering the pipe:** As water enters the pipe, its velocity increases. The TEL drops by the entrance loss, and the HGL drops by the same amount. The vertical distance between TEL and HGL is the velocity head.
*   **Along the pipe:** Both HGL and TEL slope downwards due to friction. The TEL's slope is constant (if $f$ and $v$ are constant).
*   **At the elbow/valve:** Both HGL and TEL experience a sudden drop due to minor losses.
*   **Pump:** If a pump is in the system, it adds energy, causing a sharp upward rise in both HGL and TEL.
*   **Exiting to the upper reservoir:** As water exits the pipe to the upper reservoir, its velocity drops to zero. The minor loss for the exit is accounted for. The HGL will drop to the elevation of the reservoir surface, and the TEL will also be at the same elevation, as the velocity head becomes zero.

*   **Reference:** Cengel & Cimbala, Chapter 10; Som & Bodh, Chapter 7; Bansal, Chapter 6.

### Important Points to Remember

*   **Reynolds Number ($Re$):** The key parameter to distinguish between laminar ($Re < 2300$), transitional ($2300 < Re < 4000$), and turbulent ($Re > 4000$) flow.
*   **Hagen-Poiseuille:** Strictly for laminar flow, relating pressure drop directly to viscosity, length, velocity, and diameter.
*   **Darcy-Weisbach:** General equation for both laminar and turbulent flow, using the friction factor ($f$).
*   **Friction Factor ($f$):** For turbulent flow, $f$ depends on $Re$ and relative roughness ($\epsilon/D$), best determined from Moody's Chart or empirical correlations.
*   **Moody's Chart:** Essential graphical tool for turbulent flow friction factor determination.
*   **Major Losses:** Frictional losses in straight pipes, calculated by Darcy-Weisbach.
*   **Minor Losses:** Losses due to fittings and discontinuities, calculated using loss coefficients ($K_L$).
*   **Total Head Loss:** Sum of major and minor losses.
*   **HGL:** Represents pressure head + elevation head. Its slope indicates pressure changes.
*   **TEL:** Represents total energy (pressure head + velocity head + elevation head). Its slope indicates total head loss.
*   **TEL is always above HGL by $v^2/2g$.**

### Practice Questions and Exercises

**Question 1:**
A fluid flows through a pipe of 10 cm diameter at an average velocity of 0.5 m/s. The fluid has a density of 800 kg/m³ and a dynamic viscosity of 0.05 Pa·s.
(a) Calculate the Reynolds number.
(b) Determine the flow regime.
(c) If the flow is laminar, calculate the pressure drop over a 20 m length of the pipe.

**Answer 1:**
(a) $\nu = \mu/\rho = 0.05 \text{ Pa·s} / 800 \text{ kg/m³} = 6.25 \times 10^{-5} \text{ m²/s}$
$Re = \frac{vD}{\nu} = \frac{(0.5 \text{ m/s}) \times (0.1 \text{ m})}{6.25 \times 10^{-5} \text{ m²/s}} = 800$
(b) Since $Re = 800 < 2300$, the flow is **laminar**.
(c) Using Hagen-Poiseuille equation:
$\Delta P = \frac{32 \mu L v}{D^2} = \frac{32 \times (0.05 \text{ Pa·s}) \times (20 \text{ m}) \times (0.5 \text{ m/s})}{(0.1 \text{ m})^2}$
$\Delta P = \frac{160}{0.01} = 16,000 \text{ Pa}$ or $16 \text{ kPa}$

---

**Question 2:**
Water at 25°C flows through a horizontal pipe of 0.2 m diameter at an average velocity of 3 m/s. The pipe is 100 m long and is made of commercial steel, which has an absolute roughness $\epsilon = 4.5 \times 10^{-5}$ m.
(a) Calculate the Reynolds number.
(b) Determine the friction factor using the Colebrook equation (implicitly via Moody's chart or an approximation). Assume $\nu$ for water at 25°C is $0.893 \times 10^{-6}$ m²/s.
(c) Calculate the head loss due to friction using the Darcy-Weisbach equation.
(d) If the pipe had a sudden contraction to a 0.1 m diameter, what would be the additional minor loss? Assume $K_L \approx 0.4$ for a sudden contraction.

**Answer 2:**
(a) $Re = \frac{vD}{\nu} = \frac{(3 \text{ m/s}) \times (0.2 \text{ m})}{0.893 \times 10^{-6} \text{ m²/s}} \approx 6.72 \times 10^5$
(b) Relative roughness: $\epsilon/D = (4.5 \times 10^{-5} \text{ m}) / (0.2 \text{ m}) = 2.25 \times 10^{-4}$
Using Moody's chart or a correlation for $Re \approx 6.7 \times 10^5$ and $\epsilon/D = 2.25 \times 10^{-4}$, the friction factor $f$ is approximately **0.019**.
(c) $h_{f, \text{major}} = f \frac{L}{D} \frac{v^2}{2g} = 0.019 \times \frac{100 \text{ m}}{0.2 \text{ m}} \times \frac{(3 \text{ m/s})^2}{2 \times 9.81 \text{ m/s²}}$
$h_{f, \text{major}} = 0.019 \times 500 \times \frac{9}{19.62} \approx 4.33 \text{ m}$
(d) Minor loss for sudden contraction:
$h_{f, \text{minor}} = K_L \frac{v^2}{2g}$, where $v$ is the velocity in the larger pipe.
$h_{f, \text{minor}} = 0.4 \times \frac{(3 \text{ m/s})^2}{2 \times 9.81 \text{ m/s²}} = 0.4 \times \frac{9}{19.62} \approx 0.18 \text{ m}$

---

**Question 3:**
Describe the difference between the Hydraulic Grade Line (HGL) and the Total Energy Line (TEL). What does the vertical distance between them represent?

**Answer 3:**
The **Hydraulic Grade Line (HGL)** represents the sum of the pressure head and elevation head ($P/\rho g + z$). It indicates the level to which fluid would rise in a piezometer.
The **Total Energy Line (TEL)** represents the total mechanical energy per unit weight of the fluid, which is the sum of pressure head, velocity head, and elevation head ($P/\rho g + v^2/2g + z$). It indicates the level to which fluid would rise in a Pitot tube.
The vertical distance between the TEL and the HGL represents the **velocity head ($v^2/2g$)**. The TEL is always above the HGL by this amount. The slope of the TEL indicates the rate of energy loss per unit length due to friction and fittings, while the slope of the HGL is influenced by changes in velocity as well.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
