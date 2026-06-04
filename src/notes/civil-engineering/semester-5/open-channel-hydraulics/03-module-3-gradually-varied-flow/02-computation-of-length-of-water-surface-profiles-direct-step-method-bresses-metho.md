---
title: "Computation of length of water surface profiles - direct step method, Bresse’s method"
subject: "OPEN CHANNEL HYDRAULICS"
module: "Module 3: Gradually varied flow"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810eb0"
status: "completed"
scrapedAt: "2026-05-20T18:49:52.051Z"
---
# Open Channel Hydraulics: Module 3 - Gradually Varied Flow
## Topic: Computation of Length of Water Surface Profiles - Direct Step Method, Bresse's Method

### Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Understand the fundamental principles behind calculating the length of water surface profiles in gradually varied flow (GVF).
*   Apply the **Direct Step Method** to compute the horizontal length of a water surface profile between two sections.
*   Apply **Bresse's Method** (or approximations thereof) for computing GVF profile lengths, understanding its limitations and when it is applicable.
*   Identify the critical factors influencing the accuracy of these computational methods.
*   Solve practical problems involving the computation of GVF profile lengths.

---

## 1. Introduction to GVF Profile Length Computation

Gradually Varied Flow (GVF) is characterized by a slow and continuous change in water depth and velocity along the channel. When we need to determine the horizontal distance over which a specific change in water depth occurs, we are essentially calculating the length of the water surface profile. This is crucial for various engineering applications, such as:

*   **Design of spillways and culverts:** Determining the backwater effect upstream of structures.
*   **Flood routing:** Predicting flood wave propagation.
*   **Irrigation canals:** Analyzing flow conditions over long distances.
*   **Environmental impact assessment:** Understanding how changes in flow affect the riverbed and surrounding areas.

The fundamental equation governing GVF is derived from the energy equation, considering the spatial variation of depth and velocity. The general form of the GVF equation is:

$$ \frac{dy}{dx} = \frac{S_0 - S_f}{1 - \alpha \frac{V^2}{gD_h}} $$

Where:
*   $dy/dx$: Slope of the water surface.
*   $S_0$: Bed slope.
*   $S_f$: Friction slope (slope of the energy line).
*   $\alpha$: Velocity-depth coefficient (often assumed 1 for simplicity).
*   $V$: Average velocity.
*   $g$: Acceleration due to gravity.
*   $D_h$: Hydraulic depth ($A/T$).

### Key Concepts:

*   **Specific Energy (E):** $E = y + \frac{V^2}{2g}$.
*   **Friction Slope ($S_f$):** The energy loss per unit length due to friction, typically calculated using Manning's or Chezy's formula. For Manning's:
    $$ S_f = \frac{n^2 V^2}{R^{4/3}} = \frac{n^2 Q^2}{A^2 R^{4/3}} $$
    Where $n$ is Manning's roughness coefficient, $Q$ is discharge, $A$ is flow area, and $R$ is hydraulic radius.
*   **Normal Depth ($y_n$):** The depth at which the water surface slope equals the bed slope ($S_0 = S_f$).
*   **Critical Depth ($y_c$):** The depth at which specific energy is minimum for a given discharge ($V^2/gD_h = 1$).
*   **Water Surface Profile Types:** Based on the relative positions of $y$, $y_n$, and $y_c$, different GVF profile types exist (M1, M2, M3, S1, S2, S3, C1, C2, C3, etc.).

---

## 2. Computation of Length of Water Surface Profiles: Direct Step Method

The Direct Step Method is a numerical technique used to approximate the horizontal length ($x$) of a GVF profile by dividing the reach into small segments. It's a robust method that can be applied to any GVF profile type.

### Principle:

The method is based on integrating the inverse of the GVF equation with respect to depth:

$$ dx = \frac{1 - \alpha \frac{V^2}{gD_h}}{S_0 - S_f} dy $$

For practical computations, we often work with the horizontal distance:

$$ dx = \frac{1 - F^2}{S_0 - S_f} dA $$

Where $F$ is the Froude number and $dA$ is the change in flow area. However, the direct integration with respect to depth is more common in the direct step method.

The core idea is to divide the total length into small segments, say from section 1 to section 2. The length of each segment, $\Delta x$, is approximated by:

$$ \Delta x \approx \frac{E_2 - E_1}{S_0 - S_{f,avg}} $$

Where $E_1$ and $E_2$ are the specific energies at sections 1 and 2, and $S_{f,avg}$ is the average friction slope over the segment. A more common and accurate approach is to use the average of the friction slopes at the two sections:

$$ \Delta x \approx \frac{A_2 - A_1}{S_0 - \frac{S_{f1} + S_{f2}}{2}} $$

This formulation is derived by approximating $S_f$ as a linear function of $x$ or by using the trapezoidal rule for integration.

**More precisely, the direct step method is formulated as:**

$$ \Delta x = \left( \frac{A_2 - A_1}{S_0 - S_{f,avg}} \right) $$

Where $A_1$ and $A_2$ are the flow areas at sections 1 and 2, and $S_{f,avg}$ is the average friction slope over the segment. A common way to calculate $S_{f,avg}$ is using the average of the friction slopes at the two depths:

$$ S_{f,avg} = \frac{S_{f1} + S_{f2}}{2} $$

Alternatively, and more generally, we can consider the change in *specific energy* ($\Delta E$):

$$ \Delta x = \frac{E_2 - E_1}{S_0 - S_{f,avg}} $$

Or using the flow area $A$:

$$ \Delta x = \frac{A_2 - A_1}{S_0 - S_{f,avg}} $$

When integrating with respect to depth $y$, the formula becomes:

$$ \Delta x = \frac{x_2 - x_1}{y_2 - y_1} \Delta y $$

$$ \Delta x \approx \frac{1}{S_0 - S_{f,avg}} \Delta y $$

Here, $\Delta y$ is the change in depth over the segment.

### Steps for Direct Step Method:

1.  **Define the reach:** Identify the starting and ending sections for which the length is to be computed.
2.  **Choose a control section:** This is usually a section where the depth is known (e.g., a downstream control like a weir or sluice gate, or an upstream control like the start of a reservoir).
3.  **Select discrete sections:** Divide the reach into several intermediate sections. The choice of sections is crucial:
    *   For accurate results, sections should be closer together where the depth changes rapidly and farther apart where it changes slowly.
    *   Sections are typically chosen at depths that are evenly spaced (e.g., $y_1, y_2, y_3, ..., y_n$) or at depths corresponding to specific physical features.
4.  **Calculate hydraulic properties at each section:** For each chosen depth $y_i$:
    *   Calculate the **flow area ($A_i$)**.
    *   Calculate the **wetted perimeter ($P_i$)**.
    *   Calculate the **hydraulic radius ($R_i = A_i / P_i$)**.
    *   Calculate the **average velocity ($V_i = Q / A_i$)**.
    *   Calculate the **friction slope ($S_{fi}$) using Manning's or Chezy's formula**.
    *   Calculate the **specific energy ($E_i = y_i + V_i^2 / (2g)$)**.
    *   Calculate the **Froude number ($F_i = V_i / \sqrt{g D_{h,i}}$)** where $D_{h,i} = A_i / T_i$ is the hydraulic depth.
5.  **Calculate the length of each segment ($\Delta x_i$):** Consider a segment between section $i$ and section $i+1$ with depths $y_i$ and $y_{i+1}$.
    *   Calculate the average friction slope for the segment: $S_{f,avg} = (S_{fi} + S_{fi+1}) / 2$.
    *   Calculate the horizontal length of the segment:
        $$ \Delta x_i = \frac{A_{i+1} - A_i}{S_0 - S_{f,avg}} $$
    *   Alternatively, using specific energy:
        $$ \Delta x_i = \frac{E_{i+1} - E_i}{S_0 - S_{f,avg}} $$
    *   When integrating with respect to depth, the expression is:
        $$ \Delta x_i = \frac{y_{i+1} - y_i}{S_0 - S_{f,avg}} $$
    This is more commonly used as the "direct step" formulation, where the $\Delta y$ is the discrete step in depth.
6.  **Sum the segment lengths:** The total length of the profile is the sum of all $\Delta x_i$.
    $$ L = \sum_{i=1}^{n-1} \Delta x_i $$

**Important Consideration:** The direct step method computes the *horizontal* length. If the *slope distance* is required, it can be approximated as $L_{slope} \approx \sqrt{L^2 + (\Delta y_{total})^2}$, or more accurately, $L_{slope} = \sum \sqrt{(\Delta x_i)^2 + (\Delta y_i)^2}$. However, for GVF in typical channels, the bed slope is usually small, making the horizontal and slope lengths very close.

### Example: Direct Step Method

**Problem:** A rectangular channel 10 m wide carries a discharge of 20 m³/s. The bed slope is $S_0 = 0.001$ and Manning's $n = 0.020$. The flow depth at section 1 (upstream) is $y_1 = 2.0$ m. Calculate the distance to the section where the depth is $y_2 = 1.8$ m.

**Solution:**

We will use the direct step method with the formula:
$$ \Delta x = \frac{y_2 - y_1}{S_0 - S_{f,avg}} $$

Where $S_{f,avg} = (S_{f1} + S_{f2}) / 2$. We will need to calculate properties at $y_1 = 2.0$ m and $y_2 = 1.8$ m.

**Section 1 ($y_1 = 2.0$ m):**
*   Width $T_1 = 10$ m (rectangular channel)
*   Area $A_1 = T_1 \times y_1 = 10 \times 2.0 = 20.0$ m²
*   Wetted Perimeter $P_1 = T_1 + 2y_1 = 10 + 2(2.0) = 14.0$ m
*   Hydraulic Radius $R_1 = A_1 / P_1 = 20.0 / 14.0 = 1.4286$ m
*   Velocity $V_1 = Q / A_1 = 20.0 / 20.0 = 1.0$ m/s
*   Friction Slope $S_{f1} = \frac{n^2 V_1^2}{R_1^{4/3}} = \frac{(0.020)^2 (1.0)^2}{(1.4286)^{4/3}} = \frac{0.0004}{1.629} \approx 0.000245$

**Section 2 ($y_2 = 1.8$ m):**
*   Width $T_2 = 10$ m
*   Area $A_2 = T_2 \times y_2 = 10 \times 1.8 = 18.0$ m²
*   Wetted Perimeter $P_2 = T_2 + 2y_2 = 10 + 2(1.8) = 13.6$ m
*   Hydraulic Radius $R_2 = A_2 / P_2 = 18.0 / 13.6 = 1.3235$ m
*   Velocity $V_2 = Q / A_2 = 20.0 / 18.0 = 1.111$ m/s
*   Friction Slope $S_{f2} = \frac{n^2 V_2^2}{R_2^{4/3}} = \frac{(0.020)^2 (1.111)^2}{(1.3235)^{4/3}} = \frac{0.0004 \times 1.234}{1.503} \approx 0.000327$

**Calculate Average Friction Slope:**
*   $S_{f,avg} = (S_{f1} + S_{f2}) / 2 = (0.000245 + 0.000327) / 2 = 0.000286$

**Calculate $\Delta x$:**
*   $\Delta x = \frac{y_2 - y_1}{S_0 - S_{f,avg}} = \frac{1.8 - 2.0}{0.001 - 0.000286} = \frac{-0.2}{0.000714} \approx -280.1$ m

**Interpretation:** The negative sign indicates that to go from a depth of 2.0 m to 1.8 m, we move *upstream* (against the flow). The distance is approximately 280.1 m.

---

## 3. Bresse's Method (and Approximations)

Bresse's method, and many other analytical or semi-analytical methods for GVF, aim to provide a direct formula for the length of the water surface profile. However, the general GVF equation is often complex to integrate analytically.

### The GVF Equation for Integration:

$$ x = \int_{y_1}^{y_2} \frac{1 - F^2}{S_0 - S_f} dy $$

Where $F = V/\sqrt{gD_h}$ and $S_f$ depends on $V$ and $R$, which in turn depend on $y$. This makes direct analytical integration difficult.

### Bresse's Simplification:

Bresse's method is based on a simplification of the GVF equation, often assuming **uniform width** and the **Manning formula**. It aims to express the length as a function of the depths and critical depth.

A common form derived for rectangular channels using Manning's formula and assuming $S_f$ can be approximated linearly with depth is:

$$ x = \frac{1}{S_0} \left[ \left(1 - \frac{y_c^3}{y_1^3}\right) - \left(1 - \frac{y_c^3}{y_2^3}\right) \right] \times (\text{correction factors}) $$

This is often simplified into a form involving the **Bresse function** or similar tabulated values. A more practical interpretation of Bresse's method is the use of specific **GVP (Gradually Varied Flow Profile) functions** derived for different profile types.

**A generally applicable GVF length computation method, often attributed to Bresse or derived from similar principles, involves defining a function $\phi(y, y_c, n, S_0, Q)$ such that:**

$$ L = \frac{1}{S_0} \int_{y_1}^{y_2} \left(1 - \left(\frac{y_c}{y}\right)^{3/2} \frac{S_f \text{ at } y_n}{S_f \text{ at } y}\right) dy $$

This is still not a simple analytical integration. The true power of Bresse's method lies in its historical development and the specific approximations made.

### Practical Approximation of Bresse's Method (using GVP functions):

For rectangular channels, the GVF equation can be transformed, and the integral can be expressed in terms of functions. One common form used in practice, often derived from Bresse's work or similar analytical efforts, relates the length ($L$) to the difference in these functions at the two sections:

$$ L = \frac{1}{S_0} [f(y_2) - f(y_1)] $$

The function $f(y)$ is often a complex expression involving $y$, $y_c$, and the friction slope formulation.

**A simplified approach often taught as "Bresse's Method" or an approximation thereof involves:**

1.  **Calculate critical depth ($y_c$) and normal depth ($y_n$)** for the given discharge and channel properties.
2.  **Classify the GVF profile** (e.g., M1, S2).
3.  **Use tabulated GVP functions** or pre-derived formulas specific to the profile type.

For instance, for a **mild slope (M-type profile)** where $y > y_n > y_c$, a common formula to calculate the length from depth $y_1$ to $y_2$ ($y_1 > y_2$) is:

$$ L = \frac{Q^2}{g A_n^2 S_0} \left[ \int_{y_2}^{y_1} \frac{A(y)^3 (1 - F(y)^2)}{S_0 Q^2 A(y)^2 R(y)^{4/3} n^2} dy \right] $$

This is still an integral. Bresse's contribution was to simplify this. For rectangular channels, the integral can often be related to the integral of $y^m$ or $y^{-m}$ terms.

**Simplified integration for rectangular channels:**

If we assume a simplified friction slope relationship or use specific approximations, we might arrive at expressions like:

$$ x = \frac{Q^2}{g D_h^2 S_0} \left[ \phi(y_2) - \phi(y_1) \right] $$

Where $\phi(y)$ is the GVP function.

**For a rectangular channel, a common form of the GVP function derived from Manning's equation leads to:**

$$ \phi(y) = \left(\frac{n Q}{S_0^{1/2} b^{5/3}}\right)^2 \left[ \frac{1}{y^{1/3}} - \frac{1}{y_c^{1/3}} \right] \quad \text{(for M1 type, simplified integration)} $$
This is a highly simplified representation. The actual GVP functions are more complex and involve terms like:
$$ \phi(y) = \frac{1}{S_0} \left( \frac{1}{y^{1/3}} - \frac{1}{y_c^{1/3}} \right) $$
Or, considering the full integral more carefully:
$$ \phi(y) = \frac{1}{S_0} \left[ \frac{1}{y^{1/3}} - C \frac{1}{y^{1/3}} \right] $$

**A more accurate representation for rectangular channels, often found in textbooks, involving a function $J(y)$ is:**

$$ L = \frac{n^2 Q^2}{S_0} \left[ J(y_1) - J(y_2) \right] $$

Where $J(y)$ is a function of $y$, $y_c$, and Manning's $n$. The form of $J(y)$ depends on the specific assumptions made to simplify the integration.

**A commonly cited GVP function for rectangular channels (M1 profile) is:**

$$ J(y) = \frac{1}{y^{1/3}} - \left( \frac{y_c}{y} \right)^{8/3} \frac{1}{y^{1/3}} $$
This looks complicated and is often simplified or tabulated.

### When is Bresse's Method (or approximations) useful?

*   **Analytical Solution:** When a closed-form solution is desired, avoiding step-by-step numerical integration.
*   **Mild and Steep Slopes (M & S profiles):** These profiles are more amenable to analytical integration than critical slopes.
*   **Rectangular Channels:** Simplifications are most effective for simple geometries like rectangular channels.
*   **Preliminary Design:** For quick estimates of profile lengths.

### Limitations of Bresse's Method:

*   **Simplifications:** Relies on approximations of the friction slope and velocity distribution, which can reduce accuracy.
*   **Assumptions:** Often assumes uniform width, constant Manning's $n$, and sometimes simplified velocity profiles.
*   **Tabulated Functions:** Many practical applications rely on pre-computed tables or software that implement these functions, making it less of a "manual" method if tables are unavailable.
*   **Complex Geometries:** Not easily applicable to non-rectangular or irregular channels.
*   **Unstable Flows:** Less suitable for rapidly varied flow or transitional zones.

---

## 4. Comparison: Direct Step Method vs. Bresse's Method

| Feature           | Direct Step Method                                  | Bresse's Method (Approximations)                         |
| :---------------- | :-------------------------------------------------- | :------------------------------------------------------- |
| **Approach**      | Numerical integration (step-by-step)                | Analytical or semi-analytical integration                |
| **Accuracy**      | High accuracy with small steps; convergence-dependent | Varies with the accuracy of the underlying approximations |
| **Flexibility**   | Highly flexible; applicable to any profile type     | More applicable to specific profiles (M, S) and geometries |
| **Complexity**    | Iterative calculations for each step                | Requires understanding of GVP functions or derivations   |
| **Computational Effort** | Requires more manual computation or programming     | Can be faster if GVP functions/tables are available     |
| **Assumptions**   | Minimal; relies on accurate input parameters        | Relies on simplifying assumptions for integration       |
| **Application**   | General-purpose for any GVF problem                 | Useful for preliminary design and analytical insights    |

---

## 5. Practice Questions and Exercises

**Question 1 (Direct Step Method):**
A trapezoidal channel has a bottom width of 5 m, side slopes of 2 horizontal:1 vertical ($m=2$), Manning's $n = 0.025$, and a bed slope $S_0 = 0.0005$. The discharge is $Q = 30$ m³/s. Calculate the length of the water surface profile from a depth of $y_1 = 2.5$ m to $y_2 = 2.3$ m.

**Answer 1:**

We need to calculate properties at $y_1 = 2.5$ m and $y_2 = 2.3$ m.

**Section 1 ($y_1 = 2.5$ m):**
*   Top width $T_1 = b + 2my_1 = 5 + 2(2)(2.5) = 5 + 10 = 15$ m
*   Area $A_1 = \frac{b + T_1}{2} y_1 = \frac{5 + 15}{2} (2.5) = 20.0 \times 2.5 = 50.0$ m²
*   Wetted Perimeter $P_1 = b + 2y_1 \sqrt{1+m^2} = 5 + 2(2.5)\sqrt{1+2^2} = 5 + 5\sqrt{5} \approx 5 + 11.18 = 16.18$ m
*   Hydraulic Radius $R_1 = A_1 / P_1 = 50.0 / 16.18 \approx 3.090$ m
*   Velocity $V_1 = Q / A_1 = 30 / 50.0 = 0.6$ m/s
*   Friction Slope $S_{f1} = \frac{n^2 V_1^2}{R_1^{4/3}} = \frac{(0.025)^2 (0.6)^2}{(3.090)^{4/3}} = \frac{0.000625 \times 0.36}{4.223} \approx 0.000053$

**Section 2 ($y_2 = 2.3$ m):**
*   Top width $T_2 = b + 2my_2 = 5 + 2(2)(2.3) = 5 + 9.2 = 14.2$ m
*   Area $A_2 = \frac{b + T_2}{2} y_2 = \frac{5 + 14.2}{2} (2.3) = 9.6 \times 2.3 = 22.08$ m²
*   Wetted Perimeter $P_2 = b + 2y_2 \sqrt{1+m^2} = 5 + 2(2.3)\sqrt{1+2^2} = 5 + 4.6\sqrt{5} \approx 5 + 10.29 = 15.29$ m
*   Hydraulic Radius $R_2 = A_2 / P_2 = 22.08 / 15.29 \approx 1.444$ m
*   Velocity $V_2 = Q / A_2 = 30 / 22.08 \approx 1.359$ m/s
*   Friction Slope $S_{f2} = \frac{n^2 V_2^2}{R_2^{4/3}} = \frac{(0.025)^2 (1.359)^2}{(1.444)^{4/3}} = \frac{0.000625 \times 1.847}{1.690} \approx 0.000682$

**Calculate Average Friction Slope:**
*   $S_{f,avg} = (S_{f1} + S_{f2}) / 2 = (0.000053 + 0.000682) / 2 = 0.0003675$

**Calculate $\Delta x$:**
*   $\Delta x = \frac{y_2 - y_1}{S_0 - S_{f,avg}} = \frac{2.3 - 2.5}{0.0005 - 0.0003675} = \frac{-0.2}{0.0001325} \approx -1510$ m

The distance is approximately 1510 m. (Note: this is a very gentle slope, hence the large distance for a small depth change).

**Question 2 (Conceptual):**
When would you prefer the Direct Step Method over an analytical method like Bresse's for computing GVF profile lengths?

**Answer 2:**
You would prefer the Direct Step Method when:
*   The channel geometry is complex (non-rectangular, irregular).
*   Manning's $n$ is not constant along the reach or varies significantly with depth.
*   High accuracy is required, and a small step size can be employed.
*   The flow profile is of a type that is difficult to express analytically (e.g., transition profiles).
*   You need to calculate lengths over a very specific or irregular set of control points.

---

## 6. Important Points to Remember:

*   **GVF Equation:** Always start with the fundamental GVF equation and understand how $dy/dx$ is calculated.
*   **Direct Step Method:**
    *   It's a numerical method dividing the reach into small segments.
    *   The accuracy depends on the number and spacing of the segments.
    *   The formula involves the change in depth (or area/specific energy) and the average friction slope.
    *   It computes horizontal length.
*   **Bresse's Method:**
    *   Aims for analytical solutions by simplifying the GVF equation.
    *   Often relies on specific GVP functions or tabulated values.
    *   More applicable to simpler geometries and mild/steep slopes.
    *   Accuracy is limited by the approximations made.
*   **Control Sections:** Understanding the concept of control sections (upstream or downstream) is vital for setting up GVF computations.
*   **Profile Classification:** Knowing the GVF profile type helps in choosing the correct direction of computation and understanding flow behavior.
*   **Hydraulic Properties:** Accurate calculation of Area ($A$), Wetted Perimeter ($P$), Hydraulic Radius ($R$), Velocity ($V$), and Friction Slope ($S_f$) at each section is paramount for both methods.
*   **Trapezoidal Channels:** Remember the formulas for $A$, $P$, $R$, and $T$ for trapezoidal channels.
*   **Units:** Ensure consistency in units throughout calculations.

---

This concludes the notes on the Direct Step Method and Bresse's Method for computing the length of water surface profiles in Gradually Varied Flow. Remember to practice these methods with various problems to gain proficiency.
