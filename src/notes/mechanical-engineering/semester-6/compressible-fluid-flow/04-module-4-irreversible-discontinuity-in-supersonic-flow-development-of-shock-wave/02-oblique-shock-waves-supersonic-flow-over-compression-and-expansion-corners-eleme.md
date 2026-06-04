---
title: "Oblique shock waves - supersonic flow over compression and expansion corners (elementary idea only)."
subject: "COMPRESSIBLE FLUID FLOW"
module: "Module 4: Irreversible discontinuity in supersonic flow: Development of shock wave, types of shock waves, governing equations, strength of shock waves, normal Shock on T"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf48044637e2"
status: "completed"
scrapedAt: "2026-05-20T18:03:38.824Z"
---
# Module 4: Irreversible Discontinuity in Supersonic Flow: Oblique Shock Waves

## Topic: Oblique Shock Waves - Supersonic Flow Over Compression and Expansion Corners (Elementary Idea Only)

---

### 1. Introduction to Oblique Shock Waves

**1.1 What are Shock Waves?**

*   **Definition:** Shock waves are **abrupt**, **highly dissipative discontinuities** in supersonic flow (Mach number > 1) where there is a rapid and significant change in flow properties such as pressure, temperature, density, and Mach number.
*   **Nature:** They are fundamentally **irreversible processes**, characterized by a **sharp increase in entropy**.
*   **Formation:** Shock waves form to instantaneously change the flow from one supersonic state to another, or from a supersonic state to a subsonic state, while satisfying conservation laws.

**1.2 Distinction from Normal Shocks**

*   **Normal Shock:** Occurs when the shock wave is **perpendicular** to the direction of the incoming supersonic flow. The flow **immediately upstream** is supersonic, and **immediately downstream** is subsonic.
*   **Oblique Shock:** Occurs when the shock wave is **inclined** at an angle to the direction of the incoming supersonic flow. The flow **immediately upstream** and **immediately downstream** remains **supersonic** (though the Mach number decreases).

**1.3 Relevance and Occurrence**

Oblique shock waves are crucial in understanding supersonic flow phenomena around sharp corners and in various aerodynamic applications, including:

*   Supersonic aircraft wings and control surfaces
*   Inlets of supersonic engines (e.g., ramjets)
*   Nozzles and diffusers in supersonic applications
*   The flow around pointed bodies (e.g., missiles, bullets)

---

### 2. Flow Over Compression and Expansion Corners

**2.1 Compression Corner**

*   **Scenario:** A supersonic flow encounters a **deflection** in the surface that causes the flow to turn **towards** the surface.
*   **Effect:** This turning requires a compression of the fluid. In supersonic flow, such compression cannot occur isentropically over a curved surface; it requires a discontinuity – an oblique shock wave.
*   **Mechanism:** An oblique shock wave emanates from the corner, turning the flow by a certain angle $\theta$. The shock wave propagates outwards at an angle $\beta$ to the upstream flow direction.
*   **Key Concept:** For a given upstream Mach number ($M_1$), the turning angle ($\theta$) and the shock angle ($\beta$) are intrinsically linked.

**2.2 Expansion Corner**

*   **Scenario:** A supersonic flow encounters a **deflection** in the surface that causes the flow to turn **away** from the surface.
*   **Effect:** This turning requires an expansion of the fluid. In supersonic flow, such expansion occurs isentropically over a curved surface.
*   **Mechanism:** The expansion is achieved through a **Prandtl-Meyer expansion fan**, which is a continuous series of Mach waves. There is no shock wave formed at an expansion corner.
*   **Key Concept:** The flow turns smoothly and continuously, with a gradual decrease in pressure and increase in Mach number.

---

### 3. Oblique Shock Waves: The Basic Idea

**3.1 Formation and Geometry**

*   Consider a supersonic flow with Mach number $M_1$ approaching a sharp corner that turns the flow by an angle $\theta$.
*   An oblique shock wave is formed at the corner, inclined at an angle $\beta$ to the upstream flow direction.
*   The shock wave effectively "turns" the flow by the angle $\theta$.
*   The flow downstream of the shock is still supersonic, but with a reduced Mach number $M_2$ and is turned by the same angle $\theta$.

**3.2 The Wave Angle ($\beta$) and Mach Number ($M_1$)**

*   The angle of the oblique shock wave, $\beta$, depends on the upstream Mach number ($M_1$) and the turning angle ($\theta$).
*   There can be two possible solutions for $\beta$ for a given $M_1$ and $\theta$ (except for the maximum $\theta$, which corresponds to a weak oblique shock):
    *   **Weak Oblique Shock:** Smaller $\beta$, smaller $\theta$, smaller property changes.
    *   **Strong Oblique Shock:** Larger $\beta$, larger $\theta$, larger property changes.
*   For practical supersonic flows, the **weak oblique shock** is almost always the physically relevant one.

**3.3 The $\theta-\beta-M_1$ Relation (The $\theta$ Curve)**

*   This is a fundamental graphical representation in compressible flow.
*   It plots the turning angle ($\theta$) as a function of the shock angle ($\beta$) for various upstream Mach numbers ($M_1$).
*   **Key Features:**
    *   For a given $M_1$, there's a maximum turning angle ($\theta_{max}$) possible before a detached shock forms.
    *   For a given $M_1$ and $\theta$, there are generally two values of $\beta$.
    *   As $M_1$ increases, $\theta_{max}$ increases.
    *   The $\theta$ curve is crucial for determining the shock angle when the turning angle and upstream Mach number are known.
*   **Sources:** This relationship is derived from the conservation laws applied across the shock and the fact that the downstream flow Mach number ($M_2$) must be supersonic for an oblique shock. (Shapiro, Vol I, Chapter 11).

---

### 4. Governing Equations for Oblique Shocks (Governing Relations)

The conservation of mass, momentum, and energy applies across an oblique shock. By resolving velocities normal and tangential to the shock, we can derive the following relationships:

**4.1 Conservation of Mass:**

$\rho_1 u_{n1} = \rho_2 u_{n2}$

where $u_{n1}$ and $u_{n2}$ are the velocity components normal to the shock, upstream and downstream, respectively.

**4.2 Conservation of Momentum (Normal to Shock):**

$p_1 + \rho_1 u_{n1}^2 = p_2 + \rho_2 u_{n2}^2$

This is similar to the normal shock equation, but applied to the normal component of velocity.

**4.3 Conservation of Momentum (Tangential to Shock):**

$u_{t1} = u_{t2}$

The velocity component tangential to the shock remains unchanged across the shock wave.

**4.4 Conservation of Energy (Steady Flow Energy Equation):**

$h_1 + \frac{1}{2} u_1^2 = h_2 + \frac{1}{2} u_2^2$

This can also be expressed in terms of temperature and Mach number.

**4.5 Key Derived Relations:**

*   **Mach Number Normal to Shock:**
    $M_{n1}^2 = \frac{M_1^2 \sin^2\beta - 1}{\gamma M_1^2 \sin^2\beta - 1}$
    This equation relates the upstream Mach number ($M_1$), the shock angle ($\beta$), and the Mach number normal to the shock ($M_{n1}$).

*   **Relationship between Downstream and Upstream Mach Numbers ($M_2$):**
    $M_2^2 = \frac{(\gamma-1)M_1^2 \sin^2\beta + 2}{2\gamma M_1^2 \sin^2\beta - (\gamma-1)}$
    This is a crucial equation relating the upstream and downstream Mach numbers through the shock angle.

*   **Relation between Turning Angle ($\theta$) and Shock Angle ($\beta$):**
    $\tan\theta = \frac{2 \cot\beta (M_1^2 \sin^2\beta - 1)}{M_1^2 (\gamma + \cos(2\beta)) + 2}$
    This is the $\theta-\beta-M_1$ relation, which can be rearranged to solve for $\beta$ given $\theta$ and $M_1$, or vice versa. (Yahya, Chapter 6).

*   **Downstream Mach Number $M_2$ and Downstream Pressure Ratio $p_2/p_1$:**
    $\frac{p_2}{p_1} = 1 + \frac{2\gamma}{\gamma+1}(M_1^2 \sin^2\beta - 1)$

*   **Downstream Pressure $p_2$ and Upstream Pressure $p_1$:**
    The pressure increases across the shock. The relationship is derived from the momentum equation and the Mach number relation.

**Important Note:** These equations are valid for any oblique shock. To use them, one typically needs to know $M_1$ and either the turning angle $\theta$ or the shock angle $\beta$. The $\theta-\beta-M_1$ relation is then used to find the missing angle.

---

### 5. Strength of Oblique Shock Waves

*   **Definition:** The "strength" of a shock wave refers to the magnitude of the changes in flow properties across it. A stronger shock causes larger changes in pressure, density, temperature, and velocity.
*   **Factors Affecting Strength:**
    *   **Upstream Mach Number ($M_1$):** Higher $M_1$ generally leads to stronger shocks for a given turning angle.
    *   **Turning Angle ($\theta$):** Larger turning angles generally result in stronger shocks (up to $\theta_{max}$).
*   **Quantifying Strength:**
    *   **Pressure Ratio ($p_2/p_1$):** A common measure. Higher ratio means stronger shock.
    *   **Density Ratio ($\rho_2/\rho_1$):** Higher ratio means stronger shock.
    *   **Temperature Ratio ($T_2/T_1$):** Higher ratio means stronger shock.
    *   **Mach Number Decrease ($M_1 - M_2$):** Larger decrease indicates a stronger shock.
    *   **Entropy Increase ($\Delta s$):** The fundamental measure of irreversibility. Larger $\Delta s$ means stronger shock. (Rathakrishnan, Chapter 5).
*   **Weak vs. Strong Oblique Shocks:** For a given $M_1$ and $\theta$, the weak shock (smaller $\beta$) is less strong than the strong shock (larger $\beta$).

---

### 6. Normal Shock on $\theta-\beta-M_1$ Diagram

*   A normal shock can be considered a special case of an oblique shock where the shock angle $\beta = 90^\circ$.
*   On the $\theta-\beta-M_1$ diagram, a normal shock corresponds to the $\beta=90^\circ$ line.
*   At $\beta=90^\circ$, the turning angle $\theta$ is **zero**. This signifies that a normal shock brings the flow from supersonic ($M_1$) to subsonic ($M_2$) without any change in flow direction.
*   The $\theta-\beta-M_1$ relation, when $\beta=90^\circ$, reduces to the normal shock relations. For example, the equation for $M_2$ becomes the standard normal shock $M_2$ relation.

---

### 7. Learning Outcomes Alignment

*   **CO1: Understand the basic concepts of compressible fluid mechanics:** This topic builds upon concepts like Mach number, supersonic flow, and discontinuities, reinforcing the foundational understanding of compressible fluid mechanics. (Knowledge Level: K3)
*   **CO2: Analyze problems in one dimensional isentropic compressible flow:** While oblique shocks are inherently non-isentropic, the understanding of flow turning over corners, especially expansion corners (which are isentropic), complements the analysis of isentropic flows. (Knowledge Level: K4)
*   **CO5: Determine the variation in flow properties across normal and oblique shock waves:** This entire module is dedicated to this outcome. Specifically, the governing equations and the $\theta-\beta-M_1$ relation allow us to calculate property variations across oblique shocks. (Knowledge Level: K4)

---

### 8. Important Points to Remember

*   Oblique shocks occur when supersonic flow turns through an angle, and the shock wave is inclined to the flow.
*   Expansion corners result in continuous, isentropic expansion fans, not shocks.
*   The $\theta-\beta-M_1$ relation is fundamental for analyzing oblique shocks.
*   For a given $M_1$ and $\theta$, there are typically two possible oblique shock solutions (weak and strong). The weak shock is usually the physically relevant one.
*   The flow remains supersonic after an oblique shock, but its Mach number decreases.
*   Oblique shocks are irreversible processes, leading to an increase in entropy.
*   A normal shock is a special case of an oblique shock where $\beta = 90^\circ$ and $\theta = 0^\circ$.

---

### 9. Practice Questions and Exercises

**Question 1:**
A supersonic flow with $M_1 = 2.5$ approaches a compression corner that turns the flow by $\theta = 15^\circ$. Calculate the shock angle ($\beta$) and the downstream Mach number ($M_2$).

**Question 2:**
Consider a flow with $M_1 = 2.0$. What is the maximum turning angle ($\theta_{max}$) possible before a detached shock wave forms? At this angle, what is the shock angle ($\beta$) and the downstream Mach number ($M_2$)?

**Question 3:**
What is the difference between a compression corner and an expansion corner in supersonic flow?

**Question 4:**
For a given upstream Mach number $M_1$, how does the strength of an oblique shock wave generally change with the turning angle $\theta$?

---

### 10. Answers to Practice Questions

**Answer 1:**
To solve this, we need the $\theta-\beta-M_1$ relation. Using a $\theta-\beta-M_1$ chart or numerical solver:
Given $M_1 = 2.5$ and $\theta = 15^\circ$.
From typical $\theta-\beta-M_1$ charts, for $M_1 = 2.5$ and $\theta = 15^\circ$, we find:
*   Weak shock: $\beta \approx 27.4^\circ$.
*   Using the $M_2$ relation:
    $M_2^2 = \frac{(\gamma-1)M_1^2 \sin^2\beta + 2}{2\gamma M_1^2 \sin^2\beta - (\gamma-1)}$
    For $\gamma=1.4$:
    $M_1^2 \sin^2\beta = (2.5)^2 \sin^2(27.4^\circ) \approx 6.25 \times (0.460)^2 \approx 6.25 \times 0.2116 \approx 1.3225$
    $M_2^2 = \frac{(1.4-1)(1.3225) + 2}{2(1.4)(1.3225) - (1.4-1)} = \frac{0.4 \times 1.3225 + 2}{2.8 \times 1.3225 - 0.4} = \frac{0.529 + 2}{3.703 - 0.4} = \frac{2.529}{3.303} \approx 0.7657$
    $M_2 \approx \sqrt{0.7657} \approx 0.875$
    *(Note: Exact values may vary slightly depending on the chart or solver precision. This demonstrates the application of the formulas.)*

**Answer 2:**
The maximum turning angle ($\theta_{max}$) occurs at a specific shock angle $\beta$ for a given $M_1$. This is the point where the $\theta-\beta-M_1$ curve for that $M_1$ reaches its peak.
For $M_1 = 2.0$:
*   The $\theta_{max}$ is approximately $13.4^\circ$.
*   At this $\theta_{max}$, the shock angle $\beta$ is approximately $30.4^\circ$.
*   The downstream Mach number $M_2$ would be approximately $1.60$.
    *(These are typical values derived from charts or calculations. The actual calculation involves finding the minimum of a function related to the $\theta-\beta-M_1$ relation.)*

**Answer 3:**
*   **Compression Corner:** The surface turns the supersonic flow **towards** itself, requiring a compression. This is achieved via an **oblique shock wave**.
*   **Expansion Corner:** The surface turns the supersonic flow **away** from itself, requiring an expansion. This is achieved via a continuous **Prandtl-Meyer expansion fan**. No shock is formed.

**Answer 4:**
For a given upstream Mach number $M_1$, as the turning angle $\theta$ increases (towards $\theta_{max}$), the strength of the oblique shock wave also generally **increases**. This means the downstream pressure, density, and temperature ratios ($p_2/p_1$, $\rho_2/\rho_1$, $T_2/T_1$) increase, and the downstream Mach number $M_2$ decreases more significantly. The entropy increase across the shock also becomes larger.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 11. References and Further Reading

*   **Shapiro, A.H. (1977). The Dynamics and Thermodynamics of Compressible Fluid Flow. Vol I.** (Chapters related to oblique shocks and turning corners)
*   **Yahya, S. M. (2023). Fundamentals of Compressible flow.** (Chapter 6 on Oblique Shocks and Chapter 7 on Shock Waves in Two-Dimensional Flows)
*   **Rathakrishnan, E. (2021). Gas Dynamics.** (Chapter 5 on Oblique Shock Waves)
*   **Anderson, J. D. (2021). Modern Compressible Flow: With Historical Perspective.** (Relevant sections on oblique shocks and their applications)
*   **Liepmann, H. W., & Roshko, A. (2002). Elements of Gas Dynamics.** (Detailed theoretical treatment of oblique shocks)

---