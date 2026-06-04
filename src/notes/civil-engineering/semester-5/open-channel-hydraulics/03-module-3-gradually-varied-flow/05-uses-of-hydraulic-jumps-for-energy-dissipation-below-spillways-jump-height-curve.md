---
title: "Uses of hydraulic jumps for energy dissipation below spillways- jump height curve"
subject: "OPEN CHANNEL HYDRAULICS"
module: "Module 3: Gradually varied flow"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810eb3"
status: "completed"
scrapedAt: "2026-05-20T18:49:54.473Z"
---
# OPEN CHANNEL HYDRAULICS: MODULE 3 - GRADUALLY VARIED FLOW

## Topic: Uses of Hydraulic Jumps for Energy Dissipation Below Spillways - Jump Height Curve

This module delves into the behavior of water flow in open channels where the water surface profile is not uniform. Specifically, this topic focuses on a critical application of one such non-uniform flow phenomenon: the hydraulic jump, and its role in dissipating excess energy below spillways. We will also explore the "jump height curve" which is a graphical tool used in designing these energy dissipation structures.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

1.  **Explain the purpose and necessity of energy dissipation below spillways.**
2.  **Define and describe the characteristics of a hydraulic jump.**
3.  **Explain the principles of momentum conservation as applied to hydraulic jumps.**
4.  **Derive and explain the conjugate depth relationship (or sequent depth relationship) for a rectangular channel.**
5.  **Define and explain the concept of the jump height and the jump height curve.**
6.  **Identify and discuss the factors influencing the position and characteristics of a hydraulic jump.**
7.  **Discuss the design considerations for using hydraulic jumps for energy dissipation below spillways.**
8.  **Solve practical problems related to hydraulic jumps in energy dissipators.**

---

### 1. Purpose and Necessity of Energy Dissipation Below Spillways

*   **What is a Spillway?**
    *   A spillway is a structure in dams or other water control structures designed to provide a safe passage for floodwaters that exceed the storage capacity of a reservoir. It allows excess water to flow downstream without overtopping or damaging the dam.

*   **The Problem with High Velocity Flow from Spillways:**
    *   Water flowing over a spillway, especially from a high dam, possesses significant kinetic energy due to its high velocity.
    *   If this high-velocity, high-energy water is released directly into the natural riverbed downstream, it can cause severe erosion and scour.
    *   This erosion can undermine the dam's foundation, destabilize the riverbanks, and damage downstream structures and ecosystems.

*   **The Role of Energy Dissipation:**
    *   Energy dissipation is the process of converting the excess kinetic energy of the high-velocity flow into heat and sound, or into turbulence that is less erosive.
    *   The goal is to reduce the water velocity and energy to a level that the downstream channel can safely accommodate without significant erosion.

*   **Hydraulic Jumps as an Energy Dissipation Mechanism:**
    *   A hydraulic jump is a phenomenon that occurs when supercritical flow transitions abruptly to subcritical flow.
    *   This transition is characterized by a rapid rise in the water surface, intense turbulence, and a significant loss of energy.
    *   Hydraulic jumps are highly effective at dissipating energy and are commonly used in energy dissipation structures below spillways, such as stilling basins.

---

### 2. Definition and Characteristics of a Hydraulic Jump

*   **Definition:**
    *   A hydraulic jump is a phenomenon in open channel flow where there is an abrupt and turbulent transition from supercritical flow (Froude number, Fr > 1) to subcritical flow (Froude number, Fr < 1).

*   **Key Characteristics:**
    *   **Supercritical Inlet Flow:** The flow approaching the jump is fast and shallow (high velocity, low depth).
    *   **Abrupt Rise in Water Surface:** The water surface suddenly rises.
    *   **Intense Turbulence:** A region of highly turbulent and aerated water is formed.
    *   **Energy Loss:** A significant portion of the upstream kinetic energy is dissipated through turbulence, friction, and aeration.
    *   **Subcritical Outlet Flow:** The flow downstream of the jump is slow and deep (low velocity, high depth).
    *   **Formation Location:** Hydraulic jumps typically form when a high-velocity flow encounters a downstream section with a higher water depth, such as at the toe of a spillway or a downstream weir.

*   **Froude Number (Fr):**
    *   The Froude number is a dimensionless parameter that characterizes the flow regime in open channels.
    *   $Fr = \frac{V}{\sqrt{gy}}$
        *   Where:
            *   $V$ is the flow velocity.
            *   $g$ is the acceleration due to gravity.
            *   $y$ is the flow depth.
    *   **Supercritical Flow:** $Fr > 1$ (velocity is greater than the wave celerity, flow is unstable and prone to jumps).
    *   **Critical Flow:** $Fr = 1$ (minimum specific energy for a given discharge).
    *   **Subcritical Flow:** $Fr < 1$ (velocity is less than the wave celerity, flow is stable).

---

### 3. Principles of Momentum Conservation Applied to Hydraulic Jumps

*   **Energy Dissipation vs. Momentum Conservation:**
    *   While energy is lost during a hydraulic jump, **momentum is conserved** across the jump (neglecting external forces like bed friction and pressure forces acting on the sides over the short jump length).

*   **Derivation of Conjugate Depths (using Momentum):**
    *   Consider a control volume encompassing the hydraulic jump in a rectangular channel of width $B$.
    *   **Assumptions:**
        *   Uniform velocity distribution at the upstream and downstream sections of the jump.
        *   Negligible shear forces at the channel bed and sides over the short length of the jump.
        *   Pressure distribution is hydrostatic at the upstream and downstream sections.
    *   **Forces acting on the control volume:**
        *   Force due to upstream pressure: $F_1 = \frac{1}{2} \rho g y_1 B y_1 = \frac{1}{2} \rho g B y_1^2$
        *   Force due to downstream pressure: $F_2 = \frac{1}{2} \rho g y_2 B y_2 = \frac{1}{2} \rho g B y_2^2$
        *   Net external force = $F_1 - F_2$ (assuming downstream pressure is greater and opposing motion)

    *   **Momentum flux at the upstream section:** $M_1 = \rho Q V_1 = \rho (B y_1) V_1^2$
    *   **Momentum flux at the downstream section:** $M_2 = \rho Q V_2 = \rho (B y_2) V_2^2$
    *   **Net change in momentum flux:** $M_2 - M_1$

    *   **Applying the momentum equation:**
        *   Sum of forces in the direction of flow = Rate of change of momentum.
        *   $F_1 - F_2 = M_2 - M_1$ (This is a simplified form, the actual derivation involves integration of pressure forces and momentum flux over the control volume faces.)

    *   A more rigorous derivation, considering hydrostatic pressure forces and momentum flux, leads to the **momentum equation for a hydraulic jump**:
        *   $\frac{q^2}{g y_1} + \frac{y_1^2}{2} = \frac{q^2}{g y_2} + \frac{y_2^2}{2}$
        *   Where $q = Q/B$ is the discharge per unit width.

---

### 4. Derivation and Explanation of the Conjugate Depth Relationship (Rectangular Channel)

*   **Conjugate Depths (or Sequent Depths):**
    *   Two depths $y_1$ and $y_2$ are called conjugate depths if they correspond to the same specific energy at a given discharge per unit width $q$.
    *   For a rectangular channel, the relationship between conjugate depths $y_1$ (upstream) and $y_2$ (downstream) is derived from the momentum equation.

*   **Derivation:**
    *   Start with the momentum equation:
        $\frac{q^2}{g y_1} + \frac{y_1^2}{2} = \frac{q^2}{g y_2} + \frac{y_2^2}{2}$
    *   Rearrange to group terms:
        $\frac{q^2}{g} (\frac{1}{y_1} - \frac{1}{y_2}) = \frac{y_2^2 - y_1^2}{2}$
    *   Simplify and substitute $y_2^2 - y_1^2 = (y_2 - y_1)(y_2 + y_1)$:
        $\frac{q^2}{g} \frac{y_2 - y_1}{y_1 y_2} = \frac{(y_2 - y_1)(y_2 + y_1)}{2}$
    *   Since for a jump, $y_1 \neq y_2$, we can divide by $(y_2 - y_1)$:
        $\frac{q^2}{g y_1 y_2} = \frac{y_1 + y_2}{2}$
    *   Rearrange to solve for $y_2$:
        $2 q^2 = g y_1 y_2 (y_1 + y_2)$
        $2 q^2 = g y_1^2 y_2 + g y_1 y_2^2$
        $g y_1 y_2^2 + g y_1^2 y_2 - \frac{2 q^2}{g} = 0$
        $y_2^2 + y_1 y_2 - \frac{2 q^2}{g y_1} = 0$
    *   This is a quadratic equation in $y_2$. Solving for $y_2$:
        $y_2 = \frac{-y_1 \pm \sqrt{y_1^2 - 4(1)(-\frac{2 q^2}{g y_1})}}{2}$
        $y_2 = \frac{-y_1 \pm \sqrt{y_1^2 + \frac{8 q^2}{g y_1}}}{2}$
    *   Since depth must be positive, we take the positive root:
        **$y_2 = \frac{-y_1 + \sqrt{y_1^2 + \frac{8 q^2}{g y_1}}}{2}$**

*   **Alternative Form using Froude Number:**
    *   We know $Fr_1 = \frac{q}{\sqrt{g y_1}}$, so $q = Fr_1 \sqrt{g y_1}$.
    *   Substitute this into the equation for $y_2$:
        $y_2 = \frac{-y_1 + \sqrt{y_1^2 + \frac{8 (Fr_1 \sqrt{g y_1})^2}{g y_1}}}{2}$
        $y_2 = \frac{-y_1 + \sqrt{y_1^2 + \frac{8 Fr_1^2 g y_1}{g y_1}}}{2}$
        $y_2 = \frac{-y_1 + \sqrt{y_1^2 + 8 Fr_1^2}}{2}$
    *   Divide numerator and denominator by $y_1$:
        **$\frac{y_2}{y_1} = \frac{-1 + \sqrt{1 + 8 Fr_1^2}}{2}$**

*   **Key Observations from the Conjugate Depth Relationship:**
    *   $y_1$ is the upstream depth (supercritical).
    *   $y_2$ is the downstream depth (subcritical).
    *   The ratio $y_2/y_1$ is solely a function of the upstream Froude number $Fr_1$.
    *   As $Fr_1$ increases, the ratio $y_2/y_1$ increases, meaning the jump becomes taller and dissipates more energy.
    *   For a jump to occur, $Fr_1 > 1$.

---

### 5. Definition and Explanation of the Jump Height and the Jump Height Curve

*   **Jump Height (h_j):**
    *   The jump height is defined as the difference in depth between the upstream and downstream conjugate depths:
        **$h_j = y_2 - y_1$**

*   **Specific Energy (E):**
    *   It's important to remember the concept of specific energy: $E = y + \frac{V^2}{2g} = y + \frac{q^2}{2gy^2}$.
    *   While energy is lost in a jump, the specific energy at the upstream and downstream sections are related by the energy loss: $E_1 - E_2 = \Delta E_{loss}$.
    *   However, the conjugate depth relationship is derived from momentum, which is conserved (ignoring external forces).

*   **Jump Height Curve:**
    *   The jump height curve is a graphical representation of the relationship between the jump height ($h_j$) and the upstream Froude number ($Fr_1$) for a rectangular channel.
    *   It is plotted with $Fr_1$ on the x-axis and $h_j/y_1$ (dimensionless jump height) on the y-axis.
    *   The curve helps in visualizing how the jump height increases with the upstream Froude number.

*   **Plotting the Jump Height Curve:**
    *   For a given $Fr_1$, calculate $y_2/y_1$ using $\frac{y_2}{y_1} = \frac{-1 + \sqrt{1 + 8 Fr_1^2}}{2}$.
    *   Calculate the dimensionless jump height: $\frac{h_j}{y_1} = \frac{y_2 - y_1}{y_1} = \frac{y_2}{y_1} - 1$.
    *   Plot points of $(Fr_1, h_j/y_1)$.

    *   **Example Calculations:**
        | $Fr_1$ | $1 + 8 Fr_1^2$ | $\sqrt{1 + 8 Fr_1^2}$ | $y_2/y_1$ | $h_j/y_1 = (y_2/y_1) - 1$ |
        | :----- | :------------- | :------------------- | :-------- | :------------------------ |
        | 2.0    | 33.0           | 5.74               | 2.37      | 1.37                      |
        | 3.0    | 73.0           | 8.54               | 3.77      | 2.77                      |
        | 4.0    | 137.0          | 11.70              | 4.85      | 3.85                      |
        | 5.0    | 201.0          | 14.18              | 5.59      | 4.59                      |

*   **Significance of the Jump Height Curve:**
    *   It illustrates that the jump is more significant (taller) at higher Froude numbers.
    *   It's a tool for understanding the scale of the jump and its implications for designing stilling basins.

---

### 6. Factors Influencing the Position and Characteristics of a Hydraulic Jump

*   **Upstream Froude Number ($Fr_1$):**
    *   This is the **most crucial factor**. A higher $Fr_1$ leads to a stronger jump, greater energy dissipation, and a larger $y_2/y_1$ ratio.

*   **Downstream Water Depth ($y_2$ or Tailwater Depth):**
    *   The actual downstream depth (tailwater depth) dictates whether a jump will form and where it will stabilize.
    *   For a jump to form and be stable, the tailwater depth ($y_{tw}$) must be greater than or equal to the sequent depth ($y_2$) calculated from the upstream conditions.
    *   If $y_{tw} < y_2$, the jump is submerged and may not dissipate energy effectively.
    *   If $y_{tw}$ is significantly greater than $y_2$, the jump might be drowned, leading to a weaker jump and less energy dissipation.
    *   **The ideal condition for a jump to occur is $y_{tw} = y_2$.** This is often achieved by designing the downstream apron or tailwater control.

*   **Discharge ($Q$ or $q$):**
    *   Higher discharge leads to higher velocities and thus higher Froude numbers, promoting jump formation and increasing jump characteristics.

*   **Channel Geometry (Non-Rectangular Channels):**
    *   The conjugate depth relationship derived earlier is for **rectangular channels**.
    *   For non-rectangular channels (trapezoidal, triangular, or irregular), the momentum equation is more complex, involving the cross-sectional area ($A$) and the location of the centroid of the wetted area ($y_c$):
        $\frac{V_1^2}{g y_{c1}} + y_{c1} + \frac{A_1}{B_1} = \frac{V_2^2}{g y_{c2}} + y_{c2} + \frac{A_2}{B_2}$ (Simplified form, more accurate treatment involves pressure force terms).
    *   The relationship between conjugate depths becomes channel-specific.

*   **Channel Bed Roughness:**
    *   Bed roughness contributes to energy losses, which can affect the precise location and strength of the jump. However, for the idealized derivation of conjugate depths, it's often neglected.

*   **Presence of Appurtenances (Boulders, Blocks):**
    *   Stilling basins often include energy dissipation structures like chute blocks, end sills, and baffle blocks. These structures enhance turbulence and energy dissipation within the jump and downstream.

---

### 7. Design Considerations for Using Hydraulic Jumps for Energy Dissipation Below Spillways

*   **Type of Hydraulic Jump:**
    *   Based on the upstream Froude number ($Fr_1$), jumps are classified:
        *   **Undular Jump ($1 < Fr_1 < 1.7$):** Weak jump, undulating surface, little energy loss (around 5%). Not suitable for significant energy dissipation.
        *   **Weak Jump ($1.7 < Fr_1 < 2.5$):** Some turbulence, surface oscillations, energy loss around 5-15%.
        *   **Oscillating Jump ($2.5 < Fr_1 < 4.5$):** Unstable, oscillates back and forth, causing damage. Must be avoided in design.
        *   **Stable Jump ($4.5 < Fr_1 < 9.0$):** Most desirable for energy dissipation. Predictable, stable, and efficient. Energy loss 45-70%.
        *   **Strong Jump ($Fr_1 > 9.0$):** High energy dissipation, but very rough and highly aerated. Energy loss > 70%.

    *   **Design Goal:** To ensure a **stable jump** ($4.5 < Fr_1 < 9.0$). If the spillway discharge results in $Fr_1 < 4.5$, energy dissipation structures (like a downstream weir or sill) are often needed to raise the tailwater depth ($y_{tw}$) to ensure a stable jump forms at the desired location.

*   **Stilling Basin Design:**
    *   A stilling basin is a structure constructed downstream of the spillway toe to house the hydraulic jump and provide effective energy dissipation.
    *   **Length of the Stilling Basin (L_sj):**
        *   Empirical formulas are used to estimate the length of the stilling basin required to contain the jump. A common formula is:
            **$L_{sj} = y_2 \times (6 \text{ to } 6.5)$** (for stable jumps). This length ensures the jump is fully contained within the basin.
    *   **Depth of the Stilling Basin (e.g., $y_2$ or slightly more):**
        *   The stilling basin must be deep enough to accommodate the sequent depth ($y_2$) and provide adequate submergence for effective energy dissipation.
    *   **Appurtenances:**
        *   **Chute Blocks:** Placed at the upstream end of the stilling basin. They help to break up the high-velocity jet, increase turbulence, and promote jump formation.
        *   **Baffle Blocks:** Placed downstream of chute blocks. They further enhance energy dissipation by creating intense turbulence.
        *   **End Sill:** A submerged weir at the downstream end of the stilling basin. It is used to control the tailwater depth and ensure that the tailwater depth is sufficient to stabilize the jump at the desired location within the basin, especially when natural tailwater conditions are insufficient. The height of the end sill is designed to raise the tailwater to $y_2$.

*   **Location of the Jump:**
    *   The jump should ideally be located within the stilling basin.
    *   This is achieved by adjusting the tailwater depth, often by using an end sill.
    *   The position of the jump can be influenced by the ratio $y_2/y_1$ and the submergence ratio ($y_{tw}/y_1$).

*   **Material and Structural Integrity:**
    *   The stilling basin is subjected to intense hydraulic forces and abrasion due to the turbulent flow and suspended sediment.
    *   It must be constructed with robust materials (e.g., reinforced concrete) capable of withstanding these conditions.

*   **Energy Dissipation Efficiency:**
    *   The efficiency of energy dissipation is calculated as:
        **Efficiency $(\%) = \frac{E_1 - E_2}{E_1} \times 100\%$**
        where $E_1 = y_1 + V_1^2/(2g)$ and $E_2 = y_2 + V_2^2/(2g)$.
    *   For stable jumps, the energy dissipation can be very high (up to 70-80%).

---

### 8. Practice Questions and Exercises

**Question 1:**
A spillway discharges water at a rate of 20 m³/s per meter width into a rectangular channel. The depth of flow downstream of the spillway is 1.5 m. Calculate the upstream depth ($y_1$) and the Froude number ($Fr_1$) at the toe of the spillway just before the hydraulic jump. If a hydraulic jump forms, determine the sequent depth ($y_2$).

**Answer 1:**
*   Given: $q = 20 \, \text{m}^3/\text{s/m}$.
*   We need to find $y_1$ and $Fr_1$. The specific energy equation for supercritical flow is $E = y + \frac{q^2}{2gy^2}$.
*   The upstream depth $y_1$ and the downstream depth $y_2$ are conjugate depths. The relation is:
    $\frac{y_2}{y_1} = \frac{-1 + \sqrt{1 + 8 Fr_1^2}}{2}$
*   We also know that for a rectangular channel, the conjugate depth relation from momentum is:
    $\frac{q^2}{g y_1} + \frac{y_1^2}{2} = \frac{q^2}{g y_2} + \frac{y_2^2}{2}$
*   Substitute $q = 20$ and $y_2 = 1.5$:
    $\frac{(20)^2}{g (1.5)^2} + \frac{(1.5)^2}{2} = \frac{(20)^2}{g y_1} + \frac{y_1^2}{2}$
    (Wait, this is incorrect. The given downstream depth is $y_2$, not $y_1$. So we use the relation where $y_1$ is unknown and $y_2$ is known.)

Let's rephrase the approach. We have $q=20 \, \text{m}^3/\text{s/m}$ and $y_2 = 1.5 \, \text{m}$. We need to find $y_1$ and $Fr_1$.
The conjugate depth relationship is $\frac{y_2}{y_1} = \frac{-1 + \sqrt{1 + 8 Fr_1^2}}{2}$.
We also know $Fr_1 = \frac{q}{\sqrt{g y_1}}$.
So, $Fr_1^2 = \frac{q^2}{g y_1}$.
Substituting $Fr_1^2$ into the conjugate depth equation:
$\frac{y_2}{y_1} = \frac{-1 + \sqrt{1 + 8 \frac{q^2}{g y_1}}}{2}$
$2 \frac{y_2}{y_1} = -1 + \sqrt{1 + \frac{8 q^2}{g y_1}}$
$2 \frac{y_2}{y_1} + 1 = \sqrt{1 + \frac{8 q^2}{g y_1}}$
$(2 \frac{y_2}{y_1} + 1)^2 = 1 + \frac{8 q^2}{g y_1}$
$4 \frac{y_2^2}{y_1^2} + 4 \frac{y_2}{y_1} + 1 = 1 + \frac{8 q^2}{g y_1}$
$4 \frac{y_2^2}{y_1^2} + 4 \frac{y_2}{y_1} = \frac{8 q^2}{g y_1}$
Multiply by $y_1^2$:
$4 y_2^2 + 4 y_2 y_1 = \frac{8 q^2 y_1}{g}$
Divide by $4 y_2$:
$y_2 + y_1 = \frac{2 q^2 y_1}{g y_2}$
$y_1 ( \frac{2 q^2}{g y_2} - 1 ) = y_2$
$y_1 = \frac{y_2}{\frac{2 q^2}{g y_2} - 1}$

Substitute values $q=20 \, \text{m}^3/\text{s/m}$, $y_2=1.5 \, \text{m}$, $g=9.81 \, \text{m/s}^2$:
$y_1 = \frac{1.5}{\frac{2 (20)^2}{(9.81)(1.5)} - 1}$
$y_1 = \frac{1.5}{\frac{800}{14.715} - 1}$
$y_1 = \frac{1.5}{54.366 - 1}$
$y_1 = \frac{1.5}{53.366} \approx 0.0281 \, \text{m}$

Now calculate $Fr_1$:
$Fr_1 = \frac{q}{\sqrt{g y_1}} = \frac{20}{\sqrt{9.81 \times 0.0281}} = \frac{20}{\sqrt{0.2757}} = \frac{20}{0.525} \approx 38.1$

This $Fr_1$ value is very high, indicating a strong jump. The calculated $y_1$ is very small, which is consistent with a high Froude number and a large jump.

**Question 2:**
For the conditions in Question 1, calculate the energy loss per unit width in the hydraulic jump.

**Answer 2:**
*   Upstream depth $y_1 = 0.0281 \, \text{m}$.
*   Upstream velocity $V_1 = \frac{q}{y_1} = \frac{20}{0.0281} \approx 711.7 \, \text{m/s}$. (This is an unrealistic velocity for typical spillways, but mathematically consistent with the given numbers.)
*   Upstream specific energy $E_1 = y_1 + \frac{V_1^2}{2g} = 0.0281 + \frac{(711.7)^2}{2 \times 9.81} = 0.0281 + \frac{506517}{19.62} \approx 0.0281 + 25816 \approx 25816 \, \text{m}$.
*   Downstream depth $y_2 = 1.5 \, \text{m}$.
*   Downstream velocity $V_2 = \frac{q}{y_2} = \frac{20}{1.5} \approx 13.33 \, \text{m/s}$.
*   Downstream specific energy $E_2 = y_2 + \frac{V_2^2}{2g} = 1.5 + \frac{(13.33)^2}{2 \times 9.81} = 1.5 + \frac{177.69}{19.62} \approx 1.5 + 9.05 \approx 10.55 \, \text{m}$.
*   Energy loss per unit width $\Delta E_{loss} = E_1 - E_2 = 25816 - 10.55 \approx 25805.45 \, \text{m}$.

*(Note: The calculated upstream velocity and specific energy in this example are extremely high, suggesting that the initial parameters might be for a theoretical exercise rather than a real-world spillway. In practical scenarios, such high Froude numbers are less common, or specific design features are used to manage them.)*

**Question 3:**
Design a stilling basin for a rectangular channel spillway section with an upstream depth $y_1 = 1.0 \, \text{m}$ and an upstream Froude number $Fr_1 = 5.0$. Assume the discharge per unit width is constant. Determine:
a) The sequent depth ($y_2$).
b) The jump height ($h_j$).
c) The length of the stilling basin ($L_{sj}$).
d) If the natural tailwater depth is $y_{tw} = 3.0 \, \text{m}$, what type of appurtenance might be needed at the end of the stilling basin, and why?

**Answer 3:**
a) **Sequent depth ($y_2$):**
   Using the conjugate depth relationship:
   $\frac{y_2}{y_1} = \frac{-1 + \sqrt{1 + 8 Fr_1^2}}{2}$
   $\frac{y_2}{1.0} = \frac{-1 + \sqrt{1 + 8 (5.0)^2}}{2} = \frac{-1 + \sqrt{1 + 8(25)}}{2} = \frac{-1 + \sqrt{201}}{2}$
   $\frac{y_2}{1.0} = \frac{-1 + 14.18}{2} = \frac{13.18}{2} = 6.59$
   $y_2 = 6.59 \times 1.0 = 6.59 \, \text{m}$

b) **Jump height ($h_j$):**
   $h_j = y_2 - y_1 = 6.59 - 1.0 = 5.59 \, \text{m}$

c) **Length of the stilling basin ($L_{sj}$):**
   Using the empirical formula $L_{sj} \approx 6 \times y_2$ to $6.5 \times y_2$:
   Let's use $L_{sj} = 6.5 \times y_2 = 6.5 \times 6.59 \approx 42.84 \, \text{m}$.

d) **Appurtenance needed:**
   The sequent depth $y_2 = 6.59 \, \text{m}$. The natural tailwater depth $y_{tw} = 3.0 \, \text{m}$.
   Since $y_{tw} < y_2$, the tailwater is insufficient to submerge the jump to its sequent depth. This would result in the jump being "short" or possibly "submerged" in a way that doesn't provide optimal energy dissipation, or it might be unstable.
   An **end sill** would be needed at the downstream end of the stilling basin. The end sill would act as a submerged weir, raising the tailwater level within the stilling basin to at least $y_2$. The height of the end sill would be designed to effectively raise the tailwater from 3.0 m to approximately 6.59 m.

---

### Important Points to Remember:

*   **Momentum is conserved across a hydraulic jump (neglecting external forces), while energy is lost.**
*   **The conjugate depth relationship is crucial for predicting the downstream depth of a hydraulic jump.**
*   **The Froude number is the primary determinant of the strength and characteristics of a hydraulic jump.**
*   **A stable jump occurs for $4.5 < Fr_1 < 9.0$.**
*   **The tailwater depth ($y_{tw}$) must be greater than or equal to the sequent depth ($y_2$) for a jump to form and stabilize.**
*   **Stilling basins are essential for dissipating energy below spillways and are often equipped with appurtenances like chute blocks and end sills to ensure stable and efficient jump formation.**
*   **The jump height curve is a visual tool to understand how jump height scales with the upstream Froude number.**
*   **For non-rectangular channels, the analysis of hydraulic jumps becomes more complex, requiring consideration of channel geometry.**
