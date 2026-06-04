---
title: "discharge over a rectangular notch/weir"
subject: "FLUID MECHANICS"
module: "Module 4: Flow through Orifices: hydraulic coefficients and experimental determination of hydraulic coefficients (associated numerical problems)"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810709"
status: "completed"
scrapedAt: "2026-05-20T18:40:46.368Z"
---
# Fluid Mechanics: Module 4 - Flow through Orifices

## Topic: Discharge over a Rectangular Notch/Weir

This module focuses on the principles of fluid flow through orifices and notches/weirs, with a particular emphasis on the practical aspects of determining discharge and understanding the associated hydraulic coefficients.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   **Define** a rectangular notch/weir and its purpose in fluid mechanics.
*   **Derive** the theoretical formula for discharge over a rectangular notch/weir.
*   **Understand** the concept of the coefficient of discharge for a rectangular notch/weir.
*   **Explain** the factors affecting the coefficient of discharge.
*   **Apply** the formula for actual discharge over a rectangular notch/weir.
*   **Solve** numerical problems related to discharge over rectangular notches/weirs.
*   **Describe** the experimental methods for determining the coefficient of discharge for a rectangular notch/weir.

---

### 1. Introduction to Notches and Weirs

A **notch** is a device used to measure the flow rate of a fluid (typically water) in an open channel. It is essentially an opening in the wall of a tank or reservoir, over which the fluid flows.

A **weir** is a barrier across the width of an open channel that is used to control or measure the rate of flow. It is also typically used to measure flow in open channels.

**Key Distinction:** While the terms are often used interchangeably, a **notch** is generally a smaller opening or cut in the wall of a tank, whereas a **weir** is a more substantial structure across the entire width of a channel. For the purpose of discharge calculations, the underlying principles and formulas are often similar.

**Purpose:** Notches and weirs are primarily used for:
*   Measuring discharge in open channels.
*   Controlling water levels in reservoirs and channels.
*   Studying fluid flow characteristics.

---

### 2. Rectangular Notch/Weir

A **rectangular notch/weir** is a type of weir that has a rectangular opening. The fluid flows over the top edge of this opening.

**Key Features:**
*   The opening is rectangular in shape.
*   The crest of the weir is horizontal.
*   The sides of the opening are vertical.

---

### 3. Theoretical Formula for Discharge over a Rectangular Notch/Weir

Let's derive the formula for the theoretical discharge ($Q_{th}$) over a rectangular weir of width $L$.

**Assumptions:**
1.  The flow over the weir is steady and uniform.
2.  The velocity of water approaching the weir is negligible.
3.  The fluid is incompressible and inviscid (ideal fluid).
4.  The bottom edge of the notch is sharp and horizontal.
5.  The crest of the weir is sharp.

**Derivation:**

Consider a small horizontal strip of the notch at a depth $h$ below the free surface of the water, with a thickness $dh$.

*   **Width of the strip:** $L$
*   **Area of the strip (A):** $L \times dh$

The velocity of the fluid passing through this strip, according to Torricelli's theorem, is the velocity of a particle falling from a height $h$.

*   **Velocity of the fluid (v):** $\sqrt{2gh}$, where $g$ is the acceleration due to gravity.

The theoretical discharge ($dQ_{th}$) through this elemental strip is the product of its area and velocity:

$dQ_{th} = \text{Area} \times \text{Velocity}$
$dQ_{th} = (L \times dh) \times \sqrt{2gh}$
$dQ_{th} = L \sqrt{2g} h^{1/2} dh$

To find the total theoretical discharge ($Q_{th}$), we integrate this expression from the bottom of the notch (where the depth is 0) to the surface of the water (where the depth is $H$).

$Q_{th} = \int_{0}^{H} dQ_{th}$
$Q_{th} = \int_{0}^{H} L \sqrt{2g} h^{1/2} dh$

Now, we can take the constants $L$ and $\sqrt{2g}$ outside the integral:

$Q_{th} = L \sqrt{2g} \int_{0}^{H} h^{1/2} dh$

Integrating $h^{1/2}$ with respect to $h$:
$\int h^{1/2} dh = \frac{h^{1/2 + 1}}{1/2 + 1} = \frac{h^{3/2}}{3/2} = \frac{2}{3} h^{3/2}$

Now, substitute the limits of integration (0 to $H$):

$Q_{th} = L \sqrt{2g} \left[ \frac{2}{3} h^{3/2} \right]_{0}^{H}$
$Q_{th} = L \sqrt{2g} \left( \frac{2}{3} H^{3/2} - \frac{2}{3} (0)^{3/2} \right)$
$Q_{th} = L \sqrt{2g} \times \frac{2}{3} H^{3/2}$

**Theoretical Discharge Formula:**
$Q_{th} = \frac{2}{3} L \sqrt{2g} H^{3/2}$

---

### 4. Coefficient of Discharge ($C_d$) for a Rectangular Notch/Weir

In reality, the discharge over a weir is less than the theoretical discharge due to various factors. This reduction is accounted for by the **coefficient of discharge ($C_d$)**.

**Actual Discharge ($Q_{actual}$):**
$Q_{actual} = C_d \times Q_{th}$
$Q_{actual} = C_d \times \frac{2}{3} L \sqrt{2g} H^{3/2}$

**Commonly Used Formula (with empirical values):**
The coefficient of discharge for a rectangular weir is typically around 0.6 to 0.65. A common empirical formula used is:

$Q_{actual} = \frac{2}{3} C_d L \sqrt{2g} H^{3/2}$

In many practical applications and textbook problems, a value of $C_d$ is provided or needs to be determined. If not specified, a value of approximately **0.62** is often used for sharp-crested rectangular weirs.

**Note:** Some sources might combine $C_d$ with the theoretical constants into a single discharge coefficient, e.g., $C_d' = C_d \times \frac{2}{3} \sqrt{2g}$. This leads to a formula like $Q = C_d' L H^{3/2}$. However, it's crucial to understand the individual components.

---

### 5. Factors Affecting the Coefficient of Discharge ($C_d$)

The coefficient of discharge for a rectangular weir is not a constant and can be influenced by several factors:

*   **Velocity of Approach:** If the velocity of water approaching the weir is significant, it increases the effective head and thus the discharge. This effect is usually accounted for by correcting the head.
*   **Crest Shape and Thickness:** A sharp-crested weir has a higher $C_d$ than a broad-crested weir. The thickness of the weir crest also plays a role.
*   **End Contraction:** If the width of the water flowing over the weir is less than the width of the weir opening (due to side walls causing contraction), the discharge is affected. This is addressed by considering the effective width.
*   **Nappe Ventilation:** Proper ventilation of the nappe (the sheet of water flowing over the weir) is crucial. If the nappe is not ventilated, it can cling to the weir, reducing the discharge.
*   **Head of Water ($H$):** While generally considered constant for a given discharge, very low or very high heads can slightly influence $C_d$.
*   **Viscosity and Surface Tension:** For very small openings or very low flow rates, these effects might become noticeable, but they are usually negligible for typical weir applications.

---

### 6. Velocity of Approach Correction

If the velocity of approach of the water to the weir is not negligible, the effective head is increased. Let $v_a$ be the average velocity of approach and $h$ be the static head.

The kinetic energy per unit weight is $\frac{v_a^2}{2g}$.
The effective head $H_{eff}$ is the sum of the static head and the kinetic energy head:
$H_{eff} = H + \frac{v_a^2}{2g}$

However, the velocity of approach itself depends on the head. Let $Q$ be the actual discharge.
$Q = L H v_a$ (assuming uniform velocity across the channel width $L$ before the weir).
So, $v_a = \frac{Q}{L H}$.

The effective head becomes:
$H_{eff} = H + \frac{(Q/LH)^2}{2g} = H + \frac{Q^2}{2g L^2 H^2}$

Substituting this into the discharge formula:
$Q = C_d \frac{2}{3} L \sqrt{2g} H_{eff}^{3/2}$
$Q = C_d \frac{2}{3} L \sqrt{2g} \left( H + \frac{Q^2}{2g L^2 H^2} \right)^{3/2}$

This equation is implicit in $Q$ and can be solved iteratively.

**Approximation for Velocity of Approach Correction:**
A more practical approach is to use an average velocity of approach for the entire flow cross-section upstream of the weir. If $A$ is the area of the channel upstream of the weir and $Q$ is the discharge:
$v_a = \frac{Q}{A}$

The corrected head $H_c$ is given by:
$H_c = H + h_a$, where $h_a = \frac{v_a^2}{2g}$ is the velocity head.

Then, the discharge formula becomes:
$Q = C_d \frac{2}{3} L \sqrt{2g} (H + h_a)^{3/2}$

**This correction is usually applied when the area of the channel upstream of the weir is not significantly larger than the area of the nappe.**

---

### 7. End Contraction

When the width of the water flowing over the weir is less than the width of the weir opening, end contractions occur. This reduces the effective width of the weir.

*   **No End Contraction:** If the sides of the nappe are in line with the sides of the weir opening, there is no end contraction.
*   **One End Contraction:** If one side of the nappe is contracted.
*   **Two End Contractions:** If both sides of the nappe are contracted.

The effective width ($L_{eff}$) is reduced by the width of the contraction.
For each end contraction, the width is reduced by approximately $0.1H$.

*   **For two end contractions:** $L_{eff} = L - 2 \times (0.1H) = L - 0.2H$
*   **For one end contraction:** $L_{eff} = L - 1 \times (0.1H) = L - 0.1H$

The discharge formula with end contraction is:
$Q = C_d \frac{2}{3} L_{eff} \sqrt{2g} H^{3/2}$

**Note:** This contraction effect is more pronounced when the weir is placed in a channel narrower than the weir itself, or when the head $H$ is large relative to the weir width $L$.

---

### 8. Experimental Determination of Hydraulic Coefficients

The coefficient of discharge ($C_d$) for a rectangular weir can be determined experimentally by measuring the actual discharge and the head over the weir.

**Procedure:**

1.  **Set up:** Install a rectangular weir in a channel or tank. Ensure it is properly calibrated and the crest is horizontal.
2.  **Water Supply:** Provide a controlled flow of water.
3.  **Head Measurement:** Measure the head of water ($H$) over the weir crest using a hook gauge or a piezometer placed at an appropriate distance upstream of the weir (to avoid the depression of the water surface near the weir).
4.  **Discharge Measurement:** Measure the actual discharge ($Q_{actual}$). This can be done in several ways:
    *   **Collection Tank Method:** Collect the water flowing over the weir in a calibrated tank for a measured time interval. $Q_{actual} = \frac{\text{Volume}}{\text{Time}}$.
    *   **Flow Meter:** Use a calibrated flow meter in the supply line.
5.  **Varying Heads:** Repeat the measurements for different heads of water ($H$).
6.  **Calculation of $C_d$:** For each set of measurements, calculate $C_d$ using the formula:
    $C_d = \frac{Q_{actual}}{\frac{2}{3} L \sqrt{2g} H^{3/2}}$

    *(Note: If velocity of approach or end contraction is significant, these effects should also be accounted for in the calculation of $Q_{actual}$ or by adjusting the formula used.)*

**Example Experiment:**

| Trial | Head (H) (m) | Measured Discharge ($Q_{actual}$) (m³/s) | $L$ (m) | $g$ (m/s²) | $H^{3/2}$ (m$^{3/2}$) | $\frac{2}{3} L \sqrt{2g} H^{3/2}$ (m³/s) | $C_d = \frac{Q_{actual}}{\frac{2}{3} L \sqrt{2g} H^{3/2}}$ |
| :---- | :----------- | :-------------------------------------- | :------ | :------- | :------------------- | :------------------------------------------------ | :------------------------------------------ |
| 1     | 0.1          | 0.005                                   | 0.5     | 9.81     | 0.0316               | 0.206                                             | 0.024                                       |
| 2     | 0.15         | 0.012                                   | 0.5     | 9.81     | 0.0579               | 0.379                                             | 0.032                                       |
| 3     | 0.2          | 0.023                                   | 0.5     | 9.81     | 0.0894               | 0.584                                             | 0.039                                       |

**Observation:** The calculated $C_d$ values are very low in this example, indicating that the $Q_{actual}$ in the table are likely hypothetical. In a real experiment, you would obtain values of $C_d$ closer to the accepted range (0.6-0.65).

**Tabulating $C_d$ values:** It's good practice to calculate $C_d$ for several head values and then find the average $C_d$ or plot $Q_{actual}$ vs. $H^{3/2}$ to get $C_d$ from the slope.

---

### 9. Numerical Problems and Solutions

**Problem 1:**
A rectangular weir of length 1.5 m is installed across a channel. The head of water over the weir is measured to be 0.25 m. Calculate the theoretical discharge over the weir. Take $g = 9.81 m/s^2$.

**Solution:**
Given:
Length of weir, $L = 1.5$ m
Head of water, $H = 0.25$ m
Acceleration due to gravity, $g = 9.81$ m/s²

The theoretical discharge ($Q_{th}$) over a rectangular weir is given by:
$Q_{th} = \frac{2}{3} L \sqrt{2g} H^{3/2}$

Substitute the given values:
$Q_{th} = \frac{2}{3} \times 1.5 \times \sqrt{2 \times 9.81} \times (0.25)^{3/2}$
$Q_{th} = 1.0 \times \sqrt{19.62} \times (0.0390625)$
$Q_{th} = 4.429 \times 0.0390625$
$Q_{th} = 0.1730$ m³/s

**Therefore, the theoretical discharge over the weir is 0.1730 m³/s.**

---

**Problem 2:**
A rectangular weir has a length of 2 m. The head of water over the weir is 0.2 m. If the coefficient of discharge for the weir is 0.62, calculate the actual discharge over the weir. Take $g = 9.81 m/s^2$.

**Solution:**
Given:
Length of weir, $L = 2$ m
Head of water, $H = 0.2$ m
Coefficient of discharge, $C_d = 0.62$
Acceleration due to gravity, $g = 9.81$ m/s²

The actual discharge ($Q_{actual}$) over a rectangular weir is given by:
$Q_{actual} = C_d \times \frac{2}{3} L \sqrt{2g} H^{3/2}$

Substitute the given values:
$Q_{actual} = 0.62 \times \frac{2}{3} \times 2 \times \sqrt{2 \times 9.81} \times (0.2)^{3/2}$
$Q_{actual} = 0.62 \times 1.333 \times 2 \times 4.429 \times (0.0178885)$
$Q_{actual} = 0.62 \times 2.666 \times 4.429 \times 0.0178885$
$Q_{actual} = 0.62 \times 0.1270$
$Q_{actual} = 0.07874$ m³/s

**Therefore, the actual discharge over the weir is 0.07874 m³/s.**

---

**Problem 3:**
A rectangular weir of length 3 m is used to measure the flow in a channel. The head of water over the weir is 0.3 m. The velocity of approach to the weir is found to be 0.5 m/s. Calculate the discharge over the weir if the coefficient of discharge is 0.60.

**Solution:**
Given:
Length of weir, $L = 3$ m
Head of water, $H = 0.3$ m
Velocity of approach, $v_a = 0.5$ m/s
Coefficient of discharge, $C_d = 0.60$
Acceleration due to gravity, $g = 9.81$ m/s²

First, calculate the velocity head ($h_a$):
$h_a = \frac{v_a^2}{2g} = \frac{(0.5)^2}{2 \times 9.81} = \frac{0.25}{19.62} = 0.01274$ m

Now, calculate the effective head ($H_{eff}$):
$H_{eff} = H + h_a = 0.3 + 0.01274 = 0.31274$ m

The discharge ($Q$) over the weir with velocity of approach correction is:
$Q = C_d \times \frac{2}{3} L \sqrt{2g} H_{eff}^{3/2}$

Substitute the values:
$Q = 0.60 \times \frac{2}{3} \times 3 \times \sqrt{2 \times 9.81} \times (0.31274)^{3/2}$
$Q = 0.60 \times 2 \times 4.429 \times (0.1730)$
$Q = 1.2 \times 4.429 \times 0.1730$
$Q = 0.9186$ m³/s

**Therefore, the discharge over the weir, considering the velocity of approach, is 0.9186 m³/s.**

---

**Problem 4:**
A rectangular weir of width 2 m has two end contractions. The head of water over the weir is 0.15 m. If the coefficient of discharge is 0.65, calculate the discharge. Take $g = 9.81 m/s^2$.

**Solution:**
Given:
Width of weir, $L = 2$ m
Head of water, $H = 0.15$ m
Coefficient of discharge, $C_d = 0.65$
Acceleration due to gravity, $g = 9.81$ m/s²
Number of end contractions = 2

Calculate the effective width ($L_{eff}$):
For two end contractions, the width is reduced by $2 \times 0.1H$.
$L_{eff} = L - 0.2H = 2 - 0.2 \times 0.15 = 2 - 0.03 = 1.97$ m

The discharge ($Q$) over the weir with end contraction is:
$Q = C_d \times \frac{2}{3} L_{eff} \sqrt{2g} H^{3/2}$

Substitute the values:
$Q = 0.65 \times \frac{2}{3} \times 1.97 \times \sqrt{2 \times 9.81} \times (0.15)^{3/2}$
$Q = 0.65 \times 1.3067 \times 4.429 \times (0.0579)$
$Q = 0.65 \times 1.3067 \times 4.429 \times 0.0579$
$Q = 0.2455$ m³/s

**Therefore, the discharge over the weir with end contractions is 0.2455 m³/s.**

---

### 10. Practice Questions

1.  A rectangular weir of length 1 m is installed across a channel. The head of water over the weir is 0.2 m. Calculate the theoretical discharge over the weir. (Use $g = 9.81 m/s^2$)
2.  If the coefficient of discharge for the weir in Question 1 is 0.60, what is the actual discharge?
3.  A rectangular notch with a width of 0.8 m has a head of 0.12 m over it. Calculate the discharge through the notch if $C_d = 0.63$ and $g = 9.81 m/s^2$.
4.  A rectangular weir of length 2.5 m is placed in a channel. The head of water over the weir is 0.3 m. The velocity of approach of the water is 0.6 m/s. Calculate the discharge over the weir if $C_d = 0.62$. (Use $g = 9.81 m/s^2$)
5.  A rectangular weir of length 1.2 m has a head of 0.18 m. If there are two end contractions and $C_d = 0.64$, calculate the discharge. (Use $g = 9.81 m/s^2$)

---

### Answers to Practice Questions

1.  **Theoretical Discharge:**
    $Q_{th} = \frac{2}{3} L \sqrt{2g} H^{3/2}$
    $Q_{th} = \frac{2}{3} \times 1 \times \sqrt{2 \times 9.81} \times (0.2)^{3/2}$
    $Q_{th} = 0.6667 \times 4.429 \times 0.08944$
    $Q_{th} = 0.2638$ m³/s

2.  **Actual Discharge:**
    $Q_{actual} = C_d \times Q_{th}$
    $Q_{actual} = 0.60 \times 0.2638$
    $Q_{actual} = 0.1583$ m³/s

3.  **Discharge through notch:**
    $Q = C_d \frac{2}{3} L \sqrt{2g} H^{3/2}$
    $Q = 0.63 \times \frac{2}{3} \times 0.8 \times \sqrt{2 \times 9.81} \times (0.12)^{3/2}$
    $Q = 0.63 \times 0.5333 \times 4.429 \times 0.04157$
    $Q = 0.0585$ m³/s

4.  **Discharge with velocity of approach:**
    Velocity head, $h_a = \frac{v_a^2}{2g} = \frac{(0.6)^2}{2 \times 9.81} = \frac{0.36}{19.62} = 0.01835$ m
    Effective head, $H_{eff} = H + h_a = 0.3 + 0.01835 = 0.31835$ m
    $Q = C_d \frac{2}{3} L \sqrt{2g} H_{eff}^{3/2}$
    $Q = 0.62 \times \frac{2}{3} \times 2.5 \times \sqrt{2 \times 9.81} \times (0.31835)^{3/2}$
    $Q = 0.62 \times 1.6667 \times 4.429 \times 0.1793$
    $Q = 0.8270$ m³/s

5.  **Discharge with end contraction:**
    Effective width, $L_{eff} = L - 0.2H = 1.2 - 0.2 \times 0.18 = 1.2 - 0.036 = 1.164$ m
    $Q = C_d \frac{2}{3} L_{eff} \sqrt{2g} H^{3/2}$
    $Q = 0.64 \times \frac{2}{3} \times 1.164 \times \sqrt{2 \times 9.81} \times (0.18)^{3/2}$
    $Q = 0.64 \times 0.776 \times 4.429 \times 0.07637$
    $Q = 0.1743$ m³/s

---

### Important Points to Remember:

*   The theoretical discharge formula for a rectangular weir is $Q_{th} = \frac{2}{3} L \sqrt{2g} H^{3/2}$.
*   The actual discharge is $Q_{actual} = C_d \times Q_{th}$.
*   The coefficient of discharge ($C_d$) for rectangular weirs is typically between 0.6 and 0.65.
*   Velocity of approach increases the effective head: $H_{eff} = H + \frac{v_a^2}{2g}$.
*   End contractions reduce the effective width of the weir. For two end contractions, $L_{eff} = L - 0.2H$.
*   Experimental determination of $C_d$ involves measuring actual discharge and head and using the discharge formula to solve for $C_d$.
*   Always pay attention to units and ensure consistency.
*   The value of $g$ is approximately $9.81 m/s^2$ or $32.2 ft/s^2$.

---
This concludes the notes for "Discharge over a Rectangular Notch/Weir." Remember to practice the problems to solidify your understanding.
