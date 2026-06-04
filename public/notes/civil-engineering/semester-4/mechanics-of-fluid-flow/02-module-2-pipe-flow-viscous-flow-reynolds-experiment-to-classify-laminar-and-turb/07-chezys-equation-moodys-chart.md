---
title: "Chezy’s equation Moody’s chart"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 2: Pipe Flow: Viscous flow: Reynolds experiment to classify laminar and turbulent flows"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a6c"
status: "completed"
scrapedAt: "2026-05-20T18:46:28.385Z"
---
# Mechanics of Fluid Flow: Module 2 - Pipe Flow: Viscous Flow

## Topic: Chezy's Equation and Moody's Chart

This module delves into the behavior of viscous fluids flowing through pipes, focusing on the transition from smooth, ordered flow to chaotic, turbulent flow. We will explore how to characterize these flow regimes and the empirical tools used to predict flow behavior and head loss.

### 1. Reynolds' Experiment: Classifying Laminar and Turbulent Flows

**1.1 Introduction to Flow Regimes**

*   **Laminar Flow:** Characterized by smooth, orderly movement of fluid particles in parallel layers (laminae). There is no significant mixing between layers. Imagine layers of cards sliding smoothly over each other.
    *   **Characteristics:** Low velocity, high viscosity, narrow passages.
    *   **Appearance:** Generally appears transparent or clear.
*   **Turbulent Flow:** Characterized by chaotic, irregular, and swirling motion of fluid particles. Significant mixing occurs between layers, leading to higher energy dissipation. Imagine a turbulent river.
    *   **Characteristics:** High velocity, low viscosity, wider passages, presence of roughness.
    *   **Appearance:** Often appears opaque or milky due to suspended particles.
*   **Transition Flow:** A regime between laminar and turbulent flow where the flow is unstable and can fluctuate between laminar and turbulent characteristics.

**1.2 Osborne Reynolds' Experiment (1883)**

*   **Objective:** To experimentally determine the conditions under which flow transitions from laminar to turbulent.
*   **Setup:**
    *   A long, transparent pipe filled with water.
    *   A reservoir of water to maintain a steady flow.
    *   A flow control valve to regulate the velocity.
    *   A dye stream introduced at the entrance of the pipe.
*   **Observations and Conclusions:**
    *   **Low Velocity:** The dye stream flowed smoothly and continuously along the center of the pipe, indicating **laminar flow**.
    *   **Increasing Velocity:** As the velocity increased, the dye stream began to waver and break up, indicating the onset of **transition flow**.
    *   **High Velocity:** At higher velocities, the dye stream dispersed rapidly throughout the pipe, indicating **turbulent flow**.
*   **Key Discovery: The Reynolds Number (Re)**
    *   Reynolds observed that the transition from laminar to turbulent flow was not solely dependent on velocity but also on the **fluid properties (viscosity)** and the **pipe dimensions**.
    *   He proposed a dimensionless parameter, the Reynolds number, to characterize the flow regime.
    *   **Definition:** The Reynolds number is the ratio of inertial forces to viscous forces within the fluid.
        *   **Inertial Forces:** Tend to keep the fluid moving in its current path and contribute to turbulence. Proportional to $\rho V^2 D$.
        *   **Viscous Forces:** Resist motion and tend to dampen out disturbances, promoting laminar flow. Proportional to $\mu V / D^2$ or $\mu V / D$.
    *   **Formula:**
        $$ Re = \frac{\rho V D}{\mu} $$
        Where:
        *   $\rho$ (rho) = Density of the fluid ($kg/m^3$)
        *   $V$ = Average velocity of the fluid ($m/s$)
        *   $D$ = Characteristic length (e.g., diameter of the pipe for circular pipes) ($m$)
        *   $\mu$ (mu) = Dynamic viscosity of the fluid ($Pa \cdot s$ or $N \cdot s/m^2$)
    *   **Alternative Formula using Kinematic Viscosity:**
        $$ Re = \frac{V D}{\nu} $$
        Where:
        *   $\nu$ (nu) = Kinematic viscosity of the fluid ($\mu / \rho$) ($m^2/s$)
*   **Flow Regime Classification based on Reynolds Number (for flow in pipes):**
    *   **Laminar Flow:** $Re < 2300$ (approximately)
    *   **Transition Flow:** $2300 < Re < 4000$ (approximately)
    *   **Turbulent Flow:** $Re > 4000$ (approximately)
    *   **Important Note:** These values are approximate and can vary slightly depending on the smoothness of the pipe and entrance conditions.

**Example 1.1:**
Water at 20°C flows through a smooth pipe of diameter 0.05 m at an average velocity of 1 m/s. Determine the flow regime.
*   Given:
    *   Diameter, $D = 0.05$ m
    *   Velocity, $V = 1$ m/s
    *   Density of water at 20°C, $\rho \approx 998$ kg/m³
    *   Dynamic viscosity of water at 20°C, $\mu \approx 1.002 \times 10^{-3}$ Pa·s
*   Calculation of Reynolds Number:
    $$ Re = \frac{\rho V D}{\mu} = \frac{(998 \, kg/m^3) \times (1 \, m/s) \times (0.05 \, m)}{1.002 \times 10^{-3} \, Pa \cdot s} $$
    $$ Re \approx 49800 $$
*   **Conclusion:** Since $Re \approx 49800 > 4000$, the flow is **turbulent**.

### 2. Chezy's Equation

**2.1 Historical Context**

*   Developed by Antoine Chézy in 1775 for the design of the Canal de l'Ourcq.
*   An **empirical formula** primarily used for **turbulent flow** in open channels and pipes.
*   It relates the average velocity of flow to the hydraulic radius, slope of the channel/pipe, and a resistance coefficient.

**2.2 The Equation**

*   **Formula:**
    $$ V = C \sqrt{R_h S_f} $$
    Where:
    *   $V$ = Average velocity of flow ($m/s$)
    *   $C$ = Chezy's coefficient (a dimensionless or dimensionally dependent factor representing resistance)
    *   $R_h$ = Hydraulic radius ($m$)
    *   $S_f$ = Frictional slope (dimensionless, equal to head loss per unit length: $h_f / L$)
*   **Hydraulic Radius ($R_h$):**
    *   Defined as the ratio of the cross-sectional area of flow ($A$) to the wetted perimeter ($P$).
    *   $$ R_h = \frac{A}{P} $$
    *   **For a circular pipe flowing full:**
        *   Area, $A = \pi D^2 / 4$
        *   Wetted Perimeter, $P = \pi D$
        *   $$ R_h = \frac{\pi D^2 / 4}{\pi D} = \frac{D}{4} $$
        Where $D$ is the diameter of the pipe.
*   **Frictional Slope ($S_f$):**
    *   Represents the energy loss due to friction per unit length of the pipe.
    *   $$ S_f = \frac{h_f}{L} $$
    *   Where $h_f$ is the head loss due to friction and $L$ is the length of the pipe.

**2.3 Chezy's Coefficient (C)**

*   The value of $C$ depends on the roughness of the pipe walls and the flow conditions.
*   **Empirical Formulas for C:**
    *   **Gauckler-Manning Formula (also known as Manning's formula):** This is a more commonly used and refined version that expresses $C$ in terms of roughness and hydraulic radius.
        $$ C = \frac{1}{n} R_h^{1/6} $$
        Where:
        *   $n$ = Manning's roughness coefficient (dimensionally dependent, typically $m^{1/3}/s$ in SI units).
        *   $R_h$ = Hydraulic radius.
    *   **Chezy's original formulation for C:** Chezy's original $C$ was treated as a constant for a given conduit, but later experiments showed it varies with flow conditions. Various empirical formulas were developed for $C$, often relating it to the Reynolds number and relative roughness.
*   **Relationship to Head Loss:**
    *   Substituting $V = \sqrt{\frac{8g h_f}{f L}}$ (from Darcy-Weisbach equation, discussed later) and $V = C \sqrt{R_h S_f} = C \sqrt{R_h \frac{h_f}{L}}$:
    *   $C \sqrt{R_h \frac{h_f}{L}} = \sqrt{\frac{8g h_f}{f L}}$
    *   $C^2 R_h \frac{h_f}{L} = \frac{8g h_f}{f L}$
    *   $C^2 R_h = \frac{8g}{f}$
    *   $$ C = \sqrt{\frac{8g}{f}} $$
    *   This shows a relationship between Chezy's coefficient and the friction factor ($f$) from the Darcy-Weisbach equation.

**2.4 Limitations of Chezy's Equation**

*   Primarily empirical and less theoretically sound than the Darcy-Weisbach equation.
*   The coefficient $C$ is difficult to determine accurately and depends on many factors, including roughness and flow regime.
*   Less effective in the laminar and transition flow regimes.

### 3. Moody's Chart

**3.1 Introduction to Friction Factor (f)**

*   In turbulent flow, the primary resistance to flow is due to friction between the fluid and the pipe walls, and also due to eddy viscosity and mixing within the fluid itself.
*   The friction factor ($f$) is a dimensionless parameter that quantifies this resistance.
*   It is incorporated into the **Darcy-Weisbach Equation** for calculating head loss due to friction.

**3.2 Darcy-Weisbach Equation**

*   **Formula:**
    $$ h_f = f \frac{L}{D} \frac{V^2}{2g} $$
    Where:
    *   $h_f$ = Head loss due to friction ($m$)
    *   $f$ = Darcy friction factor (dimensionless)
    *   $L$ = Length of the pipe ($m$)
    *   $D$ = Diameter of the pipe ($m$)
    *   $V$ = Average velocity of flow ($m/s$)
    *   $g$ = Acceleration due to gravity ($m/s^2$)
*   **Note:** The Darcy-Weisbach equation is considered a more fundamental and widely applicable formula for head loss in pipe flow, covering both laminar and turbulent regimes.

**3.3 The Need for Moody's Chart**

*   The Darcy friction factor ($f$) is not a constant. It depends on:
    *   **Reynolds Number ($Re$):** Dictates whether the flow is laminar, transition, or turbulent.
    *   **Relative Roughness ($\epsilon/D$):** The ratio of the absolute roughness ($\epsilon$) of the pipe material to the pipe diameter ($D$).
*   Determining $f$ experimentally for all combinations of $Re$ and $\epsilon/D$ would be impractical.
*   **Moody's Chart (or Moody Diagram)** is a graphical representation that plots the Darcy friction factor ($f$) against the Reynolds number ($Re$) for various values of relative roughness ($\epsilon/D$).

**3.4 Structure and Usage of Moody's Chart**

*   **Axes:**
    *   **X-axis:** Reynolds Number ($Re$) on a logarithmic scale.
    *   **Y-axis:** Darcy Friction Factor ($f$) on a logarithmic scale.
*   **Curves:** A family of curves, each representing a specific value of relative roughness ($\epsilon/D$).
*   **Regions:**
    *   **Laminar Flow Region (Leftmost, $Re < 2300$):** A single straight line where $f = 64/Re$. The friction factor is independent of roughness in this region.
    *   **Transition Flow Region ($2300 < Re < 4000$):** A poorly defined region where the friction factor is uncertain and varies significantly with slight changes in conditions. The curves are shown as dashed or shaded.
    *   **Turbulent Flow Region (Rightmost, $Re > 4000$):**
        *   **Smooth Pipe Region:** For very low relative roughness values (e.g., glass, drawn tubing), the friction factor depends primarily on $Re$ and is relatively low.
        *   **Rough Pipe Region (Lower Curves):** As relative roughness increases, the friction factor also increases. In the fully rough turbulent flow regime (for very high $Re$), the friction factor becomes almost independent of $Re$ and depends solely on the relative roughness.
*   **How to Use Moody's Chart:**
    1.  **Calculate the Reynolds Number ($Re$)** for the flow.
    2.  **Determine the relative roughness ($\epsilon/D$)**:
        *   Find the absolute roughness ($\epsilon$) for the specific pipe material (often available in tables).
        *   Calculate the ratio $\epsilon/D$.
    3.  **Locate the point** on the chart corresponding to the calculated $Re$ and the appropriate relative roughness curve.
    4.  **Read the corresponding Darcy friction factor ($f$)** from the y-axis.

**Example 3.4.1:**
Consider the water flow from Example 1.1: $Re \approx 49800$. Assume the pipe is made of commercial steel, which has an absolute roughness $\epsilon \approx 0.045$ mm. Calculate the Darcy friction factor using Moody's chart.

*   Given:
    *   $Re \approx 49800$
    *   Pipe diameter, $D = 0.05$ m $= 50$ mm
    *   Absolute roughness, $\epsilon = 0.045$ mm
*   Calculate Relative Roughness:
    $$ \frac{\epsilon}{D} = \frac{0.045 \, mm}{50 \, mm} = 0.0009 $$
*   **Using Moody's Chart:**
    1.  Locate $Re \approx 5 \times 10^4$ on the x-axis.
    2.  Find the curve for relative roughness $\epsilon/D = 0.0009$.
    3.  Follow this curve up to the intersection with the $Re$ line.
    4.  From the intersection point, read the value of $f$ on the y-axis.
*   **Estimated f value:** From typical Moody charts, for $Re \approx 5 \times 10^4$ and $\epsilon/D = 0.0009$, $f$ is approximately **0.022**.

**Example 3.4.2:**
Air at 15°C flows through a smooth plastic pipe of diameter 10 cm at a velocity of 5 m/s. Determine the friction factor.

*   Given:
    *   $D = 0.1$ m
    *   $V = 5$ m/s
    *   Pipe material: Smooth plastic, so $\epsilon \approx 0$ (or a very small value).
    *   Properties of air at 15°C: $\rho \approx 1.225$ kg/m³, $\mu \approx 1.81 \times 10^{-5}$ Pa·s
*   Calculate Reynolds Number:
    $$ Re = \frac{\rho V D}{\mu} = \frac{(1.225 \, kg/m^3) \times (5 \, m/s) \times (0.1 \, m)}{1.81 \times 10^{-5} \, Pa \cdot s} $$
    $$ Re \approx 338400 $$
*   Calculate Relative Roughness:
    $$ \frac{\epsilon}{D} = \frac{0}{0.1 \, m} = 0 $$
*   **Using Moody's Chart:**
    1.  Locate $Re \approx 3.4 \times 10^5$ on the x-axis.
    2.  Find the curve for $\epsilon/D = 0$ (the uppermost curve in the turbulent region).
    3.  Read the corresponding $f$ value.
*   **Estimated f value:** For $Re \approx 3.4 \times 10^5$ and $\epsilon/D = 0$, $f$ is approximately **0.015**.

### 4. Connecting Chezy's Equation and Moody's Chart

*   Chezy's equation is primarily for turbulent flow. The Chezy coefficient $C$ is related to the friction factor $f$.
*   Using the relationship $C = \sqrt{\frac{8g}{f}}$, we can substitute $f$ obtained from Moody's chart into Chezy's equation.
*   However, it's more common to use the Darcy-Weisbach equation with $f$ from Moody's chart for calculating head loss in turbulent flow, as it is considered more accurate and versatile.
*   Manning's formula, which is closely related to Chezy's, is widely used in open channel flow and can be related to the Darcy-Weisbach equation through the friction factor.

### Summary of Key Concepts

*   **Laminar Flow:** Ordered, layered motion.
*   **Turbulent Flow:** Chaotic, mixed motion.
*   **Reynolds Number (Re):** Dimensionless parameter ($Re = \rho V D / \mu$) to classify flow regimes.
    *   $Re < 2300$: Laminar
    *   $2300 < Re < 4000$: Transition
    *   $Re > 4000$: Turbulent
*   **Chezy's Equation:** Empirical formula for turbulent flow velocity: $V = C \sqrt{R_h S_f}$.
*   **Hydraulic Radius ($R_h$):** $A/P$. For a full pipe, $R_h = D/4$.
*   **Frictional Slope ($S_f$):** $h_f/L$.
*   **Darcy Friction Factor ($f$):** Dimensionless factor in the Darcy-Weisbach equation, quantifying resistance.
*   **Darcy-Weisbach Equation:** $h_f = f \frac{L}{D} \frac{V^2}{2g}$.
*   **Moody's Chart:** Graphical tool to find $f$ based on $Re$ and relative roughness ($\epsilon/D$).

### Important Points to Remember

*   The Reynolds number is crucial for determining the flow regime.
*   Roughness significantly affects the friction factor in turbulent flow, but not in laminar flow.
*   Moody's chart is a practical tool for finding the friction factor for turbulent flow.
*   The Darcy-Weisbach equation is the standard for calculating head loss due to friction in pipes.
*   Chezy's equation is an older empirical formula, often superseded by Darcy-Weisbach for pipe flow analysis.

---

### Practice Questions

**Question 1:**
Oil with a density of 850 kg/m³ and a dynamic viscosity of 0.05 Pa·s flows through a pipe of 0.02 m diameter at an average velocity of 0.5 m/s.
(a) Calculate the Reynolds number.
(b) Determine the flow regime.

**Question 2:**
A pipe with a diameter of 0.15 m carries water at an average velocity of 2 m/s. The head loss due to friction over a 100 m length of pipe is 5 m. Calculate the Chezy coefficient, $C$, and the frictional slope, $S_f$.

**Question 3:**
Air at 20°C flows through a concrete pipe (absolute roughness $\epsilon = 0.001$ m) with a diameter of 0.2 m. If the average velocity is 8 m/s, determine the Darcy friction factor using Moody's chart and then calculate the head loss per 100 m of pipe.
(Assume properties of air at 20°C: $\rho \approx 1.204$ kg/m³, $\mu \approx 1.827 \times 10^{-5}$ Pa·s).

**Question 4:**
Explain the significance of the Reynolds number in fluid flow and how it relates to the classification of flow in pipes.

**Question 5:**
How does the relative roughness of a pipe affect the friction factor in turbulent flow, as depicted in Moody's chart?

---

### Answers to Practice Questions

**Answer 1:**
(a)
*   $Re = \frac{\rho V D}{\mu} = \frac{(850 \, kg/m^3) \times (0.5 \, m/s) \times (0.02 \, m)}{0.05 \, Pa \cdot s}$
*   $Re = 17000$

(b) Since $Re = 17000 > 4000$, the flow regime is **turbulent**.

**Answer 2:**
*   Hydraulic Radius, $R_h = D/4 = 0.15 \, m / 4 = 0.0375 \, m$
*   Frictional Slope, $S_f = h_f / L = 5 \, m / 100 \, m = 0.05$
*   Chezy's Equation: $V = C \sqrt{R_h S_f}$
*   $2 \, m/s = C \sqrt{(0.0375 \, m) \times (0.05)}$
*   $2 = C \sqrt{0.001875}$
*   $2 = C \times 0.0433$
*   $C = \frac{2}{0.0433} \approx 46.19$

**Answer 3:**
*   Properties of air at 20°C: $\rho = 1.204$ kg/m³, $\mu = 1.827 \times 10^{-5}$ Pa·s
*   $D = 0.2$ m
*   $V = 8$ m/s
*   $\epsilon = 0.001$ m

1.  **Calculate Reynolds Number:**
    $$ Re = \frac{\rho V D}{\mu} = \frac{(1.204 \, kg/m^3) \times (8 \, m/s) \times (0.2 \, m)}{1.827 \times 10^{-5} \, Pa \cdot s} $$
    $$ Re \approx 105600 $$
2.  **Calculate Relative Roughness:**
    $$ \frac{\epsilon}{D} = \frac{0.001 \, m}{0.2 \, m} = 0.005 $$
3.  **Find Friction Factor ($f$) using Moody's Chart:**
    *   Locate $Re \approx 1.06 \times 10^5$ on the x-axis.
    *   Find the curve for $\epsilon/D = 0.005$.
    *   Read $f$ from the y-axis.
    *   Estimated $f \approx 0.029$ (This is an estimate from a typical chart. Exact values might vary slightly.)
4.  **Calculate Head Loss per 100 m:**
    $$ h_f = f \frac{L}{D} \frac{V^2}{2g} = (0.029) \frac{100 \, m}{0.2 \, m} \frac{(8 \, m/s)^2}{2 \times 9.81 \, m/s^2} $$
    $$ h_f = 0.029 \times 500 \times \frac{64}{19.62} $$
    $$ h_f \approx 14.5 \times 3.26 $$
    $$ h_f \approx 47.25 \, m $$
    The head loss per 100 m of pipe is approximately **47.25 meters**.

**Answer 4:**
The Reynolds number is a dimensionless parameter that characterizes the ratio of inertial forces to viscous forces in a fluid flow. It is crucial for classifying the flow regime:
*   **Low Re (Re < 2300):** Viscous forces dominate, leading to smooth, ordered **laminar flow**.
*   **High Re (Re > 4000):** Inertial forces dominate, leading to chaotic, irregular **turbulent flow** with significant mixing.
*   **Intermediate Re (2300 < Re < 4000):** A **transition flow** regime where the flow is unstable.

**Answer 5:**
In turbulent flow, as depicted in Moody's chart, the relative roughness ($\epsilon/D$) plays a significant role in determining the friction factor ($f$):
*   **Smooth Pipes (low $\epsilon/D$):** The friction factor is primarily dependent on the Reynolds number ($Re$) and is relatively low.
*   **Rough Pipes (high $\epsilon/D$):** The friction factor increases with increasing relative roughness. For very high Reynolds numbers (fully rough turbulent flow), the friction factor becomes almost independent of $Re$ and depends solely on the relative roughness. This indicates that the roughness elements on the pipe wall cause significant flow separation and energy dissipation.
