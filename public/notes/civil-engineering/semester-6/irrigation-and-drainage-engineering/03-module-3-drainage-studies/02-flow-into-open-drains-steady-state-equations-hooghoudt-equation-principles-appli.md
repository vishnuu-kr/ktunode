---
title: "Flow into open drains -steady state equations-Hooghoudt equation, Principles, applications for design use of nomographs for homogeneous and layered soils– Earnst equation, concept of horizontal vertical and radial flow, application to layered soils."
subject: "IRRIGATION AND DRAINAGE ENGINEERING"
module: "Module 3: Drainage studies "
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba811112"
status: "completed"
scrapedAt: "2026-05-20T18:55:10.165Z"
---
# IRRIGATION AND DRAINAGE ENGINEERING: Module 3: Drainage Studies

## Topic: Flow into Open Drains - Steady State Equations

This module focuses on understanding and quantifying the flow of groundwater into open drains under steady-state conditions. This is crucial for designing effective drainage systems that remove excess water from the soil to improve agricultural productivity and prevent waterlogging.

---

### 1. Introduction to Groundwater Flow into Open Drains

*   **Definition:** Groundwater flow into open drains refers to the movement of water from the saturated soil profile towards a drain that is open to the atmosphere.
*   **Importance:** Understanding this flow is essential for:
    *   Determining the capacity of drainage systems.
    *   Predicting the depth of the water table.
    *   Designing drain spacing and dimensions.
    *   Assessing the effectiveness of drainage measures.
*   **Steady State:** In steady-state flow, the rate of groundwater inflow into the drain is constant over time. This implies that the water table level and the flow rate are not changing. This is a common assumption for simplified drainage design, especially under consistent hydrological conditions.

---

### 2. Key Concepts and Definitions

*   **Water Table:** The upper surface of the saturated zone of groundwater.
*   **Ditch/Drain:** An open channel designed to collect and convey excess water.
*   **Hydraulic Conductivity (K):** A measure of the ease with which water can move through a porous medium (soil). Higher K means faster flow.
*   **Drainage Discharge (Q):** The volume of water flowing into the drain per unit time.
*   **Hydraulic Gradient (i):** The change in hydraulic head per unit distance. It represents the driving force for groundwater flow.
*   **Hydraulic Head (h):** The total energy of water per unit weight, expressed as a height. It includes pressure head and elevation head.
*   **Specific Yield (Sy):** The volume of water released from storage by a unit volume of saturated soil per unit decline in water table.
*   **Transmissivity (T):** The product of hydraulic conductivity (K) and the saturated thickness of the aquifer (b), i.e., T = K * b.

---

### 3. Hooghoudt Equation

The Hooghoudt equation is a fundamental steady-state analytical solution for calculating groundwater flow into a single, straight drain in a homogeneous, unconfined aquifer.

#### Principles of the Hooghoudt Equation:

1.  **Darcy's Law:** The equation is based on Darcy's Law, which states that the flow rate is proportional to the hydraulic gradient and the hydraulic conductivity of the soil.
2.  **Flow Geometry:** It considers the flow lines (paths of water particles) and equipotential lines (lines of equal hydraulic head).
3.  **Drain Geometry:** It assumes a single, infinitely long, straight drain with a specific depth.
4.  **Boundary Conditions:** It assumes a recharge rate from rainfall or irrigation and a no-flow boundary at a certain depth or an impermeable layer.
5.  **Hydraulic Resistance:** It accounts for the resistance to flow due to the shape and depth of the drain.

#### The Hooghoudt Equation (General Form for a Single Drain):

The general form of the Hooghoudt equation relates the drainage discharge ($Q$) per unit length of the drain to the hydraulic conductivity ($K$), the distance to the impermeable layer ($D$), the water table height above the drain bottom ($m$), and the width of the drain ($w$):

$$ Q = K \cdot m \cdot \frac{8 \cdot D}{ \pi \cdot w} \cdot \frac{1}{ \sum_{n=1}^{\infty} \frac{1}{n^2} \sinh^2(\frac{n \pi w}{2D})} $$

**Simplified Hooghoudt Equation (for narrow drains, i.e., $w$ << $D$):**

When the drain width ($w$) is much smaller than the depth to the impermeable layer ($D$), the summation term can be approximated, leading to a simpler form:

$$ Q = 8 \cdot K \cdot m \cdot \frac{D}{w} $$

**More widely used simplified form of Hooghoudt for practical design (considering drain spacing $L$ and water table height $h$ above the drain):**

A commonly used form for drain spacing ($L$) is derived from the steady-state continuity equation and Hooghoudt's drain flow concept:

$$ Q_{total} = K \cdot \frac{h^2 - m^2}{L} $$

Where:
*   $Q_{total}$ is the total drainage discharge per unit area (e.g., mm/day).
*   $K$ is the hydraulic conductivity (e.g., m/day).
*   $h$ is the average height of the water table above the drain (or reference level) in the field (m).
*   $m$ is the height of the water table directly above the drain bottom (m). Often, $m$ is taken as a small value (e.g., 0.1 m) or considered to be 0 if the drain is at the surface.
*   $L$ is the distance between parallel drains (m).

**The effective depth ($D_e$)**: Hooghoudt recognized that the flow into a drain is influenced by the depth to the impermeable layer. For practical purposes, he introduced an "equivalent depth" ($D_e$) which accounts for the radial flow component and the influence of the drain geometry. This $D_e$ can be considered a modified depth to the impermeable layer.

A more refined form of the Hooghoudt equation that incorporates the concept of effective depth $D_e$ is:

$$ Q = 8 \cdot K \cdot m \cdot \frac{D_e}{w} $$

However, the determination of $D_e$ is crucial and depends on the ratio of $D/w$. Hooghoudt provided tables and nomographs to determine $D_e$.

#### Applications for Design Use of Nomographs:

*   **Homogeneous Soils:** For homogeneous soils (uniform K throughout the profile), nomographs developed based on Hooghoudt's equation are widely used for drain spacing design. These nomographs typically relate:
    *   Drainage depth required (from the surface).
    *   Water table rise (from the drain level).
    *   Hydraulic conductivity of the soil.
    *   Drain spacing.
    *   Effective depth to the impermeable layer ($D_e$).

*   **Layered Soils:** For layered soils, the Hooghoudt equation needs to be modified or an equivalent hydraulic conductivity considered. The application of nomographs becomes more complex as the flow into the drain is influenced by the varying K values in different layers.

#### Use of Nomographs for Homogeneous Soils:

Nomographs are graphical tools that solve complex equations by plotting relationships between variables. For Hooghoudt's equation, a common nomograph might have:

*   **X-axis:** Drainage discharge ($Q$) or required drainage rate.
*   **Y-axis:** Water table height ($h$) above the drain or drainage depth.
*   **Sloping Lines:** Represent hydraulic conductivity ($K$).
*   **Another set of sloping lines:** Represent drain spacing ($L$).
*   **A parameter:** Indicating the depth to the impermeable layer ($D$) or effective depth ($D_e$).

**Example of Nomograph Use (Conceptual):**

1.  **Input:** You know the desired water table depth ($h$), the soil's hydraulic conductivity ($K$), and the soil type (which informs the depth to the impermeable layer, $D$).
2.  **Procedure:**
    *   Locate the hydraulic conductivity ($K$) on its axis.
    *   Locate the water table height ($h$) on its axis.
    *   Draw a line connecting these two points.
    *   Find the effective depth to the impermeable layer ($D_e$) from a lookup table or a separate chart based on $D$ and $w$.
    *   Using $D_e$, find the corresponding drain spacing ($L$) by intersecting the line from step 2 with the appropriate $D_e$ curve or line.

#### Use of Nomographs for Layered Soils:

When soils are layered, directly applying nomographs designed for homogeneous soils can lead to inaccuracies. However, approximations can be made:

*   **Equivalent Hydraulic Conductivity:** Calculate an equivalent hydraulic conductivity ($K_{eq}$) for the entire profile. This can be a weighted average based on the thickness of each layer and its hydraulic conductivity.
    *   **Arithmetic Mean (for vertical flow):** $K_{eq} = \frac{\sum K_i L_i}{\sum L_i}$ (less common for horizontal flow into drains).
    *   **Geometric Mean (for horizontal flow into drains):** This is more appropriate as horizontal flow is often dominant. $K_{eq} = (\prod K_i^{L_i})^{1/\sum L_i}$.
*   **Effective Depth ($D_e$) for Layered Soils:** This is more complex. The $D_e$ concept becomes more challenging to apply directly from standard nomographs designed for homogeneous profiles. Specialized charts or iterative calculations might be needed, considering the K of each layer and the position of the drain relative to these layers.

---

### 4. Earnst Equation

The Earnst equation is a more general analytical solution that can handle a wider range of drain geometries and aquifer properties compared to the simplified Hooghoudt equation. It is particularly useful for drains that are not infinitely narrow or when considering the precise shape of the flow field.

#### Concept of Horizontal, Vertical, and Radial Flow:

The Earnst equation explicitly accounts for the different components of groundwater flow towards a drain:

*   **Horizontal Flow:** Water moving parallel to the drain axis.
*   **Vertical Flow:** Water moving downwards from the recharge area towards the drain level.
*   **Radial Flow:** Water flowing radially towards the drain pipe itself from the surrounding soil.

#### The Earnst Equation:

The Earnst equation is derived using complex potential theory or conformal mapping and considers the drain as a cylinder or a trench of finite width.

A simplified representation for a drain of finite width $w$ and depth $d$ in a homogeneous aquifer with hydraulic conductivity $K$, water table height $h$ above the drain bottom, and depth to impermeable layer $D$, is often expressed in terms of drain spacing ($L$):

$$ Q_{total} = K \cdot \frac{h^2 - m^2}{L} $$

This looks similar to the simplified Hooghoudt, but the derivation and the underlying assumptions about flow components are more refined.

**Key features of Earnst's approach:**

*   **Drain Geometry:** Explicitly considers the drain's width and the fact that it has a finite size.
*   **Flow Net:** The solution is based on constructing a flow net, which visualizes the flow lines and equipotential lines.
*   **Radial Flow Component:** Better accounts for the radial flow of water into the drain material (e.g., perforated pipe surrounded by gravel).

#### Application to Layered Soils:

The Earnst equation can be extended to layered soils, but the analytical solutions become significantly more complex. This often involves:

*   **Superposition:** Solving for each layer separately and summing their contributions.
*   **Boundary Conditions:** The continuity of hydraulic head and flow across the interfaces between layers must be maintained.
*   **Numerical Methods:** For highly complex layered systems or irregular drain geometries, numerical methods (like Finite Element or Finite Difference methods) are often preferred over analytical solutions like Earnst or Hooghoudt.

**Key Point:** While Earnst's equation is more theoretically rigorous, in practice, for many common drainage design scenarios in homogeneous soils, the Hooghoudt equation (and its associated nomographs) provides sufficiently accurate results. Earnst's equation becomes more valuable when dealing with specific drain designs or non-ideal conditions.

---

### 5. Design Considerations and Use of Nomographs

*   **Input Parameters:** Accurate determination of hydraulic conductivity ($K$), water table depth ($h$), depth to impermeable layer ($D$), and drain dimensions is critical for using these equations and nomographs.
*   **Drain Spacing (L):** The primary output from these calculations is the optimal drain spacing to maintain the water table at the desired depth.
*   **Drain Depth:** The depth of the drain below the soil surface is also a crucial design parameter.
*   **Recharge Rate:** The steady-state equations assume a constant recharge rate. In reality, recharge can be variable, requiring a safety factor in design.
*   **Safety Factors:** It's common to incorporate safety factors in drainage design to account for uncertainties in soil properties, recharge rates, and the approximations in the equations.

---

### 6. Practice Questions and Exercises

**Question 1:**
A sandy loam soil has a hydraulic conductivity of $0.5$ m/day. The desired water table is $0.4$ m below the ground surface. The average rainfall recharge is such that it maintains the water table at $0.2$ m above the bottom of the drains. The drains are $1.0$ m deep and the impermeable layer is estimated to be $5.0$ m below the ground surface. Using the simplified Hooghoudt equation ($Q = K \cdot \frac{h^2 - m^2}{L}$), calculate the required drain spacing ($L$) if the total drainage discharge per unit area ($Q$) is $0.01$ m/day. Assume $m=0.1$ m (water table height above drain bottom when the water table is at its lowest point).

**Answer 1:**
Given:
*   $K = 0.5$ m/day
*   Desired water table depth below ground surface = $0.4$ m
*   Water table height above drain bottom ($h$) = $0.2$ m
*   Drain depth = $1.0$ m
*   Depth to impermeable layer ($D$) = $5.0$ m
*   $Q = 0.01$ m/day
*   $m = 0.1$ m

The equation is: $Q = K \cdot \frac{h^2 - m^2}{L}$

Rearranging for $L$: $L = K \cdot \frac{h^2 - m^2}{Q}$

$L = 0.5 \text{ m/day} \cdot \frac{(0.2 \text{ m})^2 - (0.1 \text{ m})^2}{0.01 \text{ m/day}}$
$L = 0.5 \cdot \frac{0.04 - 0.01}{0.01}$
$L = 0.5 \cdot \frac{0.03}{0.01}$
$L = 0.5 \cdot 3$
$L = 1.5$ m

**Therefore, the required drain spacing is 1.5 meters.**

**Question 2:**
A farmer wants to install drainage in a field with a hydraulic conductivity of $0.8$ m/day. The design objective is to keep the water table at a maximum of $0.6$ m below the ground surface. The drains are to be installed at a depth of $1.2$ m. The impermeable layer is at a depth of $6.0$ m below the ground surface.
a) Calculate the drain spacing using the Hooghoudt equation assuming the water table is $0.1$ m above the drain bottom ($m$) when the flow rate is at its design value. Assume $h$ represents the depth from the ground surface to the water table, so we need to relate it to the water table height above the drain. Let's rephrase the problem to be consistent with the formula: Assume the average height of the water table above the drain is $h=0.6$ m. And the height of the water table above the drain bottom is $m=0.1$ m. The total drainage discharge per unit area $Q$ is $0.015$ m/day.
b) Discuss how the drain spacing would change if the hydraulic conductivity of the soil was $0.4$ m/day (half the original value).

**Answer 2:**
Given:
*   $K = 0.8$ m/day
*   Average height of water table above drain ($h$) = $0.6$ m
*   Height of water table above drain bottom ($m$) = $0.1$ m
*   $Q = 0.015$ m/day

a) Using the Hooghoudt equation: $Q = K \cdot \frac{h^2 - m^2}{L}$

Rearranging for $L$: $L = K \cdot \frac{h^2 - m^2}{Q}$

$L = 0.8 \text{ m/day} \cdot \frac{(0.6 \text{ m})^2 - (0.1 \text{ m})^2}{0.015 \text{ m/day}}$
$L = 0.8 \cdot \frac{0.36 - 0.01}{0.015}$
$L = 0.8 \cdot \frac{0.35}{0.015}$
$L = 0.8 \cdot 23.33$
$L \approx 18.67$ m

**Therefore, the required drain spacing is approximately 18.67 meters.**

b) If the hydraulic conductivity ($K$) is $0.4$ m/day (half the original value):

$L = 0.4 \text{ m/day} \cdot \frac{(0.6 \text{ m})^2 - (0.1 \text{ m})^2}{0.015 \text{ m/day}}$
$L = 0.4 \cdot \frac{0.35}{0.015}$
$L = 0.4 \cdot 23.33$
$L \approx 9.33$ m

**Discussion:**
If the hydraulic conductivity is halved, the required drain spacing also halves (from 18.67 m to 9.33 m). This is because a lower hydraulic conductivity means water flows more slowly through the soil. To achieve the same drainage discharge ($Q$) and maintain the water table at the desired level, the drains need to be placed closer together. This demonstrates the direct proportionality between $K$ and $L$ in the simplified Hooghoudt equation (when other factors are constant).

**Question 3:**
Explain the concept of "effective depth" ($D_e$) in the context of Hooghoudt's equation and why it is important, especially when using nomographs for drainage design in homogeneous soils.

**Answer 3:**
The **effective depth** ($D_e$) in Hooghoudt's equation represents a modified depth to the impermeable layer that accounts for the fact that groundwater flow towards a drain is not purely vertical. It specifically addresses the **radial flow** component of water entering the drain.

**Why it's important:**

1.  **Accounts for Drain Geometry:** The original Hooghoudt equation is derived assuming a certain drain geometry (often a trench). However, real drains can be pipes with varying diameters surrounded by filter materials, or trenches of finite width. The effective depth attempts to simplify the complex radial flow into the drain by adjusting the depth to the impermeable layer.
2.  **Simplifies Analysis for Nomographs:** Nomographs are graphical tools that solve complex equations. They are typically designed for homogeneous soils and specific drain geometries. By introducing $D_e$, Hooghoudt and others were able to create nomographs that could be used for a range of practical drain widths and depths, by relating the actual depth to the impermeable layer ($D$) and the drain width ($w$) to an equivalent depth ($D_e$).
3.  **More Realistic Flow:** The effective depth acknowledges that as water approaches the drain, the flow lines become more radial and less uniformly vertical. This radial flow resistance influences the overall flow rate. A smaller $D_e$ (compared to $D$) implies greater resistance to flow due to the radial component or a closer impermeable layer influencing the flow pattern.
4.  **Design Accuracy:** Using $D_e$ instead of the actual depth to the impermeable layer ($D$) when using nomographs designed for it, leads to more accurate predictions of drain spacing and thus more effective drainage system design.

In essence, $D_e$ is a parameter that bridges the gap between the simplified mathematical model and the complex reality of groundwater flow into a drain, allowing for more practical application through tools like nomographs.

---

### 7. Important Points to Remember

*   **Steady-State Assumption:** These equations are valid only under steady-state conditions, meaning constant recharge and discharge rates.
*   **Homogeneous Soil:** Standard Hooghoudt nomographs are primarily for homogeneous soils. Layered soils require modifications or different approaches.
*   **Darcy's Law Foundation:** Both equations are based on Darcy's Law.
*   **Key Inputs:** Accurate hydraulic conductivity ($K$) and desired water table depth ($h$) are crucial.
*   **Drain Spacing (L):** The primary design output is the spacing between parallel drains.
*   **Effective Depth ($D_e$):** Crucial for using Hooghoudt nomographs, especially for accounting for radial flow and drain width.
*   **Earnst Equation:** More general but also more complex; useful for specific drain geometries.
*   **Nomographs:** Powerful graphical tools for rapid design in homogeneous soil conditions.

---
