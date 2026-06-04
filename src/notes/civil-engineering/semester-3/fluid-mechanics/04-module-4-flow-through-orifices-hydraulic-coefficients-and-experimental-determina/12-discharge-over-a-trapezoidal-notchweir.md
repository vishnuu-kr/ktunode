---
title: "discharge over a trapezoidal notch/weir"
subject: "FLUID MECHANICS"
module: "Module 4: Flow through Orifices: hydraulic coefficients and experimental determination of hydraulic coefficients (associated numerical problems)"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba81070b"
status: "completed"
scrapedAt: "2026-05-20T18:40:47.881Z"
---
# Module 4: Flow through Orifices

## Topic: Discharge over a Trapezoidal Notch/Weir

This topic delves into the principles of fluid flow over trapezoidal notches and weirs, focusing on the calculation of discharge and the influence of hydraulic coefficients.

---

### Learning Outcomes Covered:

*   **Understanding the concept of discharge over a trapezoidal notch/weir:** How to define and conceptually grasp the flow of fluid over this specific type of structure.
*   **Derivation of the formula for discharge over a trapezoidal notch/weir:** Understanding the theoretical basis for calculating the flow rate.
*   **Explanation of hydraulic coefficients (Cd, Cv, Cc) in the context of trapezoidal notches/weirs:** Recognizing their role in accounting for real-world flow inefficiencies.
*   **Methods for experimental determination of hydraulic coefficients:** How to practically measure and determine these coefficients.
*   **Solving numerical problems related to discharge over trapezoidal notches/weirs:** Applying the derived formulas and understanding the impact of hydraulic coefficients.

---

### 1. Introduction to Notches and Weirs

*   **Weir:** A solid obstruction placed across an open channel that diverts the flow of water and causes it to flow over it. It is typically a masonry or concrete structure.
*   **Notch:** A notch is essentially a small opening in the wall of a tank or reservoir, through which the fluid flows. It is usually made of metal and has a sharp edge.
*   **Purpose:** Both weirs and notches are used for measuring the discharge in open channels or tanks.

---

### 2. Trapezoidal Notch/Weir

*   A **trapezoidal notch/weir** is characterized by a trapezoidal opening through which the fluid flows.
*   It is commonly known as the **Ci$\text{a}$lan's Weir** or **Trapezoidal Notch**.
*   This type of notch is particularly useful for measuring low discharges and provides a more linear relationship between head and discharge compared to a rectangular notch, especially for varying flow rates.

---

### 3. Theoretical Derivation of Discharge over a Trapezoidal Notch/Weir

The derivation involves considering the flow over the trapezoidal opening as a combination of flow over a rectangular section and two triangular sections.

**Assumptions:**

*   The velocity of approach is negligible.
*   The nappe is not supported.
*   The coefficient of discharge is constant over the entire surface.
*   The bottom edge of the notch is horizontal.

**Consider a trapezoidal notch with the following parameters:**

*   $L$: Length of the bottom of the notch (m).
*   $H$: Height of the water surface above the bottom of the notch (head) (m).
*   $\theta$: Angle which the sloping sides make with the vertical (degrees or radians).

**Breakdown of the Trapezoidal Notch:**

The trapezoidal notch can be visualized as a rectangle of width $L$ and height $H$, and two triangles on either side.

*   **At a depth $h$ below the free surface of water:**
    *   Consider a thin horizontal strip of height $dh$ at this depth.
    *   The width of the strip, $b$, can be determined.

**Relating Width to Head:**

Let's consider one of the sloping sides. At a depth $h$ from the free surface, the vertical distance from the bottom of the notch is $(H-h)$.
The horizontal distance from the vertical centerline can be related to this vertical distance by the angle $\theta$.

*   From the geometry, the half-width of the opening at a depth $h$ from the free surface is given by:
    *   Distance from the vertex to the strip = $H - h$.
    *   Half-width of the trapezoid at the water surface = $L/2$.
    *   Consider a point on the sloping side at height $y$ from the bottom. The width at this height is $L + 2y \tan(\theta)$.
    *   Alternatively, consider the width of the strip at a height $y$ from the bottom. The width is $L + 2y \tan(\alpha)$, where $\alpha$ is the angle with the horizontal. If $\theta$ is the angle with the vertical, then $\alpha = 90^\circ - \theta$.
    *   So, $b_{strip} = L + 2y \tan(90^\circ - \theta) = L + 2y \cot(\theta)$.

*   **Let's use a more direct approach related to the head $h$ from the free surface:**
    *   At the bottom of the notch (where $h=H$), the width is $L$.
    *   At the water surface (where $h=0$), the width is $L + 2H \cot(\theta)$.
    *   Consider a strip at a distance $h$ from the free surface. The vertical distance from the bottom of the notch is $H-h$.
    *   The width of the trapezoid at height $y$ from the bottom is $L + 2y \tan\alpha$.
    *   Let $y = H - h$.
    *   So, the width of the strip at depth $h$ from the free surface is $b = L + 2(H-h)\tan\alpha$.
    *   Here, $\alpha$ is the angle the sloping side makes with the horizontal. If $\theta$ is the angle with the vertical, then $\alpha = 90^\circ - \theta$, so $\tan\alpha = \cot\theta$.
    *   Therefore, the width of the strip at depth $h$ from the free surface is $b = L + 2(H-h)\cot\theta$.

**Discharge through the Strip ($dQ$):**

*   The area of the strip is $dA = b \cdot dh$.
*   The velocity of the fluid through this strip is given by the theoretical velocity for free fall from height $h$: $v = \sqrt{2gh}$.
*   The theoretical discharge through the strip is $dQ = v \cdot dA = \sqrt{2gh} \cdot b \cdot dh$.
*   Substituting the expression for $b$:
    $dQ = \sqrt{2gh} \cdot [L + 2(H-h)\cot\theta] \cdot dh$
    $dQ = \sqrt{2g} \cdot [L h^{1/2} + 2(H-h)h^{1/2} \cot\theta] \cdot dh$
    $dQ = \sqrt{2g} \cdot [L h^{1/2} + 2(H h^{1/2} - h^{3/2}) \cot\theta] \cdot dh$

**Total Theoretical Discharge ($Q_{th}$):**

Integrate $dQ$ from $h=0$ to $h=H$:

$Q_{th} = \int_{0}^{H} dQ = \sqrt{2g} \int_{0}^{H} [L h^{1/2} + 2H h^{1/2} \cot\theta - 2 h^{3/2} \cot\theta] dh$

$Q_{th} = \sqrt{2g} \left[ L \frac{h^{3/2}}{3/2} + 2H \frac{h^{3/2}}{3/2} \cot\theta - 2 \frac{h^{5/2}}{5/2} \cot\theta \right]_{0}^{H}$

$Q_{th} = \sqrt{2g} \left[ \frac{2}{3} L H^{3/2} + \frac{4}{3} H \cdot H^{3/2} \cot\theta - \frac{4}{5} H^{5/2} \cot\theta \right]$

$Q_{th} = \sqrt{2g} \left[ \frac{2}{3} L H^{3/2} + \frac{4}{3} H^{5/2} \cot\theta - \frac{4}{5} H^{5/2} \cot\theta \right]$

Combine the terms with $H^{5/2} \cot\theta$:

$\frac{4}{3} - \frac{4}{5} = \frac{20 - 12}{15} = \frac{8}{15}$

$Q_{th} = \sqrt{2g} \left[ \frac{2}{3} L H^{3/2} + \frac{8}{15} H^{5/2} \cot\theta \right]$

$Q_{th} = \frac{2}{3} \sqrt{2g} L H^{3/2} + \frac{8}{15} \sqrt{2g} H^{5/2} \cot\theta$

This is the theoretical discharge.

**Actual Discharge ($Q$):**

The actual discharge is obtained by multiplying the theoretical discharge by the coefficient of discharge ($C_d$):

$Q = C_d \cdot Q_{th}$

$Q = C_d \left[ \frac{2}{3} \sqrt{2g} L H^{3/2} + \frac{8}{15} \sqrt{2g} H^{5/2} \cot\theta \right]$

**Commonly Used Formula for Trapezoidal Notch (Ci$\text{a}$lan's Formula):**

The formula is often expressed with a combined coefficient:

$Q = C_d \cdot \frac{8}{15} \sqrt{2g} \tan(\theta/2) H^{5/2}$  -- This formula is for a **triangular notch**.

For a **trapezoidal notch**, the formula derived above is the correct one. However, it is often seen in a simplified form or with a different representation of the angle.

Let's re-examine the geometry and the relationship between the angle and the width.
If the angle $\phi$ is given as the angle of the sloping sides with the vertical:
The width at the water surface is $L + 2H \tan\phi$.
The width of the strip at depth $h$ from the free surface is $b = L + 2(H-h)\tan\phi$.
Then $\cot\theta$ in our formula becomes $\tan\phi$.

So, $Q = C_d \left[ \frac{2}{3} \sqrt{2g} L H^{3/2} + \frac{8}{15} \sqrt{2g} H^{5/2} \tan\phi \right]$

Often, the angle $\theta$ is defined as the angle the sloping side makes with the horizontal. In that case, $\theta = 90^\circ - \phi$, so $\tan\phi = \cot\theta$.
If the angle given is $\beta$ (say, the angle between the sloping side and the horizontal, as used in many texts for Ci$\text{a}$lan's weir), then the width of the strip at a height $y$ from the bottom is $L + 2y \tan\beta$.
Substituting $y = H-h$: $b = L + 2(H-h)\tan\beta$.

The formula then becomes:
$Q = C_d \left[ \frac{2}{3} \sqrt{2g} L H^{3/2} + \frac{8}{15} \sqrt{2g} H^{5/2} \tan\beta \right]$

This is the **standard formula for discharge over a trapezoidal notch (Ci$\text{a}$lan's weir)**, where $\beta$ is the angle the sloping sides make with the horizontal.

**Important Note on the Angle:** Always clarify the definition of the angle used in the problem statement. If the angle is given with respect to the vertical, use $\tan\phi$ where $\phi$ is that angle. If the angle is given with respect to the horizontal, use $\tan\beta$ where $\beta$ is that angle.

**Let's use $\beta$ as the angle with the horizontal.**

$Q = C_d \frac{2}{3} \sqrt{2g} L H^{3/2} + C_d \frac{8}{15} \sqrt{2g} \tan\beta H^{5/2}$

---

### 4. Hydraulic Coefficients for Trapezoidal Notches/Weirs

*   **Coefficient of Discharge ($C_d$):**
    *   **Definition:** The ratio of the actual discharge to the theoretical discharge. It accounts for all energy losses due to friction, contraction of the jet (nappe), and other flow disturbances.
    *   $C_d = \frac{\text{Actual Discharge}}{\text{Theoretical Discharge}}$
    *   **Typical Values:** For trapezoidal notches, $C_d$ generally ranges from 0.60 to 0.65, but it can vary depending on the design of the notch, the head of water, and the sharpness of the edges.
    *   **Factors Affecting $C_d$:**
        *   Sharpness of the crest edge.
        *   Head of water ($H$).
        *   Velocity of approach (if not negligible).
        *   Ventilation of the nappe.
        *   The angle $\beta$.

*   **Coefficient of Velocity ($C_v$):**
    *   **Definition:** The ratio of the actual velocity of the jet to the theoretical velocity. It accounts for energy losses due to friction.
    *   $C_v = \frac{\text{Actual Velocity}}{\text{Theoretical Velocity}}$
    *   In the context of weirs and orifices, the coefficient of discharge is often approximated as the product of the coefficient of velocity and the coefficient of contraction ($C_d \approx C_v \cdot C_c$).

*   **Coefficient of Contraction ($C_c$):**
    *   **Definition:** The ratio of the actual area of the jet at the vena contracta to the area of the opening. It accounts for the reduction in the cross-sectional area of the jet due to the shape of the opening and the fluid's tendency to contract.
    *   $C_c = \frac{\text{Area of Jet at Vena Contracta}}{\text{Area of Opening}}$

**Relationship:** $C_d = C_v \cdot C_c$

For notches, the concept of a distinct vena contracta is less pronounced compared to orifices, and the coefficient of discharge is the primary parameter used.

---

### 5. Experimental Determination of Hydraulic Coefficients

Hydraulic coefficients for trapezoidal notches/weirs are typically determined experimentally by measuring the actual discharge under various head conditions and comparing it to the theoretical discharge.

**Method:**

1.  **Setup:** A trapezoidal notch is installed in an open channel or tank. A hook gauge or a calibrated measuring device is used to accurately measure the head ($H$) of the water above the crest of the notch.
2.  **Discharge Measurement:** The actual discharge ($Q_{actual}$) is measured using a calibrated collection tank and a stopwatch, or a flow meter.
    *   **Collection Tank Method:** Collect the water flowing over the notch for a specific duration and measure the volume collected. $Q_{actual} = \text{Volume} / \text{Time}$.
3.  **Varying Head:** Repeat the measurements for different heads ($H$).
4.  **Calculation of Theoretical Discharge:** For each measured head, calculate the theoretical discharge ($Q_{th}$) using the derived formula:
    $Q_{th} = \frac{2}{3} \sqrt{2g} L H^{3/2} + \frac{8}{15} \sqrt{2g} \tan\beta H^{5/2}$
5.  **Calculation of $C_d$:** For each head, calculate the coefficient of discharge:
    $C_d = \frac{Q_{actual}}{Q_{th}}$
6.  **Analysis:** Plot $C_d$ against $H$ to observe any variations. Often, an average value of $C_d$ is taken for a specific range of heads or a functional relationship is established.

**Important Considerations for Experimental Determination:**

*   **Accuracy of Measurements:** Precise measurement of head ($H$), volume, and time is crucial.
*   **Ventilation:** Ensure the nappe is properly ventilated. If the nappe is not ventilated, it can cling to the downstream face of the notch, leading to different flow characteristics and affecting $C_d$.
*   **Velocity of Approach:** If the velocity of the water approaching the notch is significant, it should be accounted for in the theoretical discharge calculation. This is done by adding a velocity of approach correction term.
*   **Sharp Edges:** The crest and sides of the notch should be sharp to ensure consistent and predictable flow.
*   **Surface Tension and Viscosity:** For very low heads, surface tension and viscosity effects might become noticeable.

---

### 6. Numerical Problems and Examples

**Example 1: Calculating Discharge**

A trapezoidal notch has a bottom width of 0.3 m and sloping sides making an angle of $45^\circ$ with the horizontal. If the head of water over the crest is 0.15 m, calculate the discharge over the notch. Assume $C_d = 0.62$ and $g = 9.81 \text{ m/s}^2$.

**Solution:**

Given:
*   Bottom width, $L = 0.3$ m
*   Angle with horizontal, $\beta = 45^\circ$
*   Head, $H = 0.15$ m
*   Coefficient of discharge, $C_d = 0.62$
*   Acceleration due to gravity, $g = 9.81 \text{ m/s}^2$

The formula for discharge over a trapezoidal notch is:
$Q = C_d \left[ \frac{2}{3} \sqrt{2g} L H^{3/2} + \frac{8}{15} \sqrt{2g} \tan\beta H^{5/2} \right]$

First, calculate the individual components:
$\frac{2}{3} \sqrt{2g} L H^{3/2} = \frac{2}{3} \sqrt{2 \times 9.81} \times 0.3 \times (0.15)^{3/2}$
$= \frac{2}{3} \sqrt{19.62} \times 0.3 \times (0.05809)$
$= \frac{2}{3} \times 4.429 \times 0.3 \times 0.05809$
$= 0.1736 \text{ m}^3/\text{s}$

$\frac{8}{15} \sqrt{2g} \tan\beta H^{5/2} = \frac{8}{15} \sqrt{2 \times 9.81} \times \tan(45^\circ) \times (0.15)^{5/2}$
$= \frac{8}{15} \times 4.429 \times 1 \times (0.004217)$
$= 0.1988 \text{ m}^3/\text{s}$

Now, substitute these values into the formula for $Q$:
$Q = 0.62 \times [0.1736 + 0.1988]$
$Q = 0.62 \times [0.3724]$
$Q = 0.2309 \text{ m}^3/\text{s}$

**Therefore, the discharge over the trapezoidal notch is approximately $0.2309 \text{ m}^3/\text{s}$.**

---

**Example 2: Finding the Head for a Given Discharge**

A trapezoidal notch is to be used to measure a discharge of $0.05 \text{ m}^3/\text{s}$. The bottom width of the notch is 0.2 m, and the sloping sides make an angle of $30^\circ$ with the horizontal. If $C_d = 0.60$, find the head of water over the notch.

**Solution:**

Given:
*   Discharge, $Q = 0.05 \text{ m}^3/\text{s}$
*   Bottom width, $L = 0.2$ m
*   Angle with horizontal, $\beta = 30^\circ$
*   Coefficient of discharge, $C_d = 0.60$
*   $g = 9.81 \text{ m/s}^2$

The formula is:
$Q = C_d \left[ \frac{2}{3} \sqrt{2g} L H^{3/2} + \frac{8}{15} \sqrt{2g} \tan\beta H^{5/2} \right]$

Let's calculate the constant parts:
$\frac{2}{3} \sqrt{2g} L = \frac{2}{3} \sqrt{2 \times 9.81} \times 0.2 = \frac{2}{3} \times 4.429 \times 0.2 = 0.5905$
$\frac{8}{15} \sqrt{2g} \tan\beta = \frac{8}{15} \sqrt{2 \times 9.81} \times \tan(30^\circ) = \frac{8}{15} \times 4.429 \times 0.5773 = 1.360$

Substitute these into the formula:
$0.05 = 0.60 \left[ 0.5905 H^{3/2} + 1.360 H^{5/2} \right]$

Divide by $C_d$:
$\frac{0.05}{0.60} = 0.5905 H^{3/2} + 1.360 H^{5/2}$
$0.08333 = 0.5905 H^{3/2} + 1.360 H^{5/2}$

This is a complex equation to solve directly for $H$. It requires iterative methods or numerical solvers. However, we can estimate by trial and error, or by making approximations if the terms are significantly different.

Let's try to rearrange:
$0.08333 = H^{3/2} (0.5905 + 1.360 H)$

**Trial and Error:**

*   **Try $H = 0.1$ m:**
    $0.5905 (0.1)^{3/2} + 1.360 (0.1)^{5/2} = 0.5905 \times 0.0316 + 1.360 \times 0.001 = 0.01865 + 0.00136 = 0.02001$ (Too low)

*   **Try $H = 0.15$ m:**
    $0.5905 (0.15)^{3/2} + 1.360 (0.15)^{5/2} = 0.5905 \times 0.0581 + 1.360 \times 0.0042 = 0.0343 + 0.0057 = 0.0400$ (Still too low)

*   **Try $H = 0.2$ m:**
    $0.5905 (0.2)^{3/2} + 1.360 (0.2)^{5/2} = 0.5905 \times 0.0894 + 1.360 \times 0.0080 = 0.0527 + 0.0109 = 0.0636$ (Close, but slightly too high)

*   **Try $H = 0.19$ m:**
    $0.5905 (0.19)^{3/2} + 1.360 (0.19)^{5/2} = 0.5905 \times 0.0826 + 1.360 \times 0.0064 = 0.04878 + 0.0087 = 0.0575$ (Closer, but still high)

*   **Try $H = 0.18$ m:**
    $0.5905 (0.18)^{3/2} + 1.360 (0.18)^{5/2} = 0.5905 \times 0.0763 + 1.360 \times 0.0052 = 0.0450 + 0.0071 = 0.0521$ (Very close)

*   **Try $H = 0.175$ m:**
    $0.5905 (0.175)^{3/2} + 1.360 (0.175)^{5/2} = 0.5905 \times 0.0730 + 1.360 \times 0.0048 = 0.0431 + 0.0065 = 0.0496$ (Very close)

**Therefore, the head of water over the notch is approximately $0.175$ m.**

---

### 7. Practice Questions

1.  A trapezoidal notch has a bottom width of 0.4 m. The angles of the sloping sides with the vertical are $71^\circ 32'$. If the head of water over the notch is 0.2 m, calculate the discharge. Take $C_d = 0.60$ and $g = 9.81 \text{ m/s}^2$.
    *   **Hint:** The angle with the vertical is given. So, if $\phi = 71^\circ 32'$, then the angle with the horizontal is $\beta = 90^\circ - \phi = 90^\circ - 71^\circ 32' = 18^\circ 28'$. $\tan(18^\circ 28') \approx 0.3333$.

2.  The discharge over a trapezoidal notch is $0.08 \text{ m}^3/\text{s}$. The bottom width is 0.3 m. The sloping sides make an angle of $30^\circ$ with the horizontal. If $C_d = 0.62$, find the head over the notch.

3.  Explain the importance of the coefficient of discharge ($C_d$) for a trapezoidal notch and list the factors that influence it.

---

### 8. Answers to Practice Questions

**Answer 1:**

Given:
*   $L = 0.4$ m
*   Angle with vertical $= 71^\circ 32'$
*   Angle with horizontal, $\beta = 90^\circ - 71^\circ 32' = 18^\circ 28'$
*   $H = 0.2$ m
*   $C_d = 0.60$
*   $g = 9.81 \text{ m/s}^2$

$\tan\beta = \tan(18^\circ 28') \approx 0.3333$

Calculate the components:
$\frac{2}{3} \sqrt{2g} L H^{3/2} = \frac{2}{3} \sqrt{2 \times 9.81} \times 0.4 \times (0.2)^{3/2}$
$= \frac{2}{3} \times 4.429 \times 0.4 \times 0.08944 = 0.3520 \text{ m}^3/\text{s}$

$\frac{8}{15} \sqrt{2g} \tan\beta H^{5/2} = \frac{8}{15} \sqrt{2 \times 9.81} \times 0.3333 \times (0.2)^{5/2}$
$= \frac{8}{15} \times 4.429 \times 0.3333 \times 0.01789 = 0.1406 \text{ m}^3/\text{s}$

$Q = C_d \left[ 0.3520 + 0.1406 \right]$
$Q = 0.60 \times [0.4926]$
$Q = 0.2956 \text{ m}^3/\text{s}$

**Therefore, the discharge is $0.2956 \text{ m}^3/\text{s}$.**

---

**Answer 2:**

Given:
*   $Q = 0.08 \text{ m}^3/\text{s}$
*   $L = 0.3$ m
*   $\beta = 30^\circ$
*   $C_d = 0.62$
*   $g = 9.81 \text{ m/s}^2$

Formula: $Q = C_d \left[ \frac{2}{3} \sqrt{2g} L H^{3/2} + \frac{8}{15} \sqrt{2g} \tan\beta H^{5/2} \right]$

Calculate constants:
$\frac{2}{3} \sqrt{2g} L = \frac{2}{3} \sqrt{2 \times 9.81} \times 0.3 = \frac{2}{3} \times 4.429 \times 0.3 = 0.8858$
$\frac{8}{15} \sqrt{2g} \tan\beta = \frac{8}{15} \sqrt{2 \times 9.81} \times \tan(30^\circ) = \frac{8}{15} \times 4.429 \times 0.5773 = 1.360$

Substitute:
$0.08 = 0.62 \left[ 0.8858 H^{3/2} + 1.360 H^{5/2} \right]$

$\frac{0.08}{0.62} = 0.8858 H^{3/2} + 1.360 H^{5/2}$
$0.12903 = H^{3/2} (0.8858 + 1.360 H)$

Using trial and error:
*   Try $H = 0.1$ m: $0.8858(0.1)^{1.5} + 1.360(0.1)^{2.5} = 0.8858 \times 0.0316 + 1.360 \times 0.001 = 0.0280 + 0.0014 = 0.0294$ (Too low)
*   Try $H = 0.15$ m: $0.8858(0.15)^{1.5} + 1.360(0.15)^{2.5} = 0.8858 \times 0.0581 + 1.360 \times 0.0042 = 0.0515 + 0.0057 = 0.0572$ (Too low)
*   Try $H = 0.2$ m: $0.8858(0.2)^{1.5} + 1.360(0.2)^{2.5} = 0.8858 \times 0.0894 + 1.360 \times 0.0080 = 0.0792 + 0.0109 = 0.0901$ (Close, but high)
*   Try $H = 0.19$ m: $0.8858(0.19)^{1.5} + 1.360(0.19)^{2.5} = 0.8858 \times 0.0826 + 1.360 \times 0.0064 = 0.0732 + 0.0087 = 0.0819$ (Very close)

**Therefore, the head over the notch is approximately $0.19$ m.**

---

**Answer 3:**

The coefficient of discharge ($C_d$) for a trapezoidal notch is crucial because it accounts for all the deviations of the actual flow from the idealized theoretical flow. The theoretical derivation assumes frictionless flow, a perfectly sharp-edged opening, and no velocity of approach or contraction effects. In reality, these factors are present and reduce the actual flow rate.

*   **Importance of $C_d$:**
    *   **Real-world Accuracy:** It bridges the gap between theoretical calculations and actual flow measurements, ensuring that discharge calculations are practically relevant.
    *   **Accounting for Losses:** It encapsulates the cumulative effect of energy losses due to friction along the wetted surfaces of the notch and losses associated with the contraction of the nappe.
    *   **Flow Control:** Understanding $C_d$ is essential for designing notches and weirs that accurately measure or control flow rates in engineering applications.

*   **Factors Influencing $C_d$:**
    *   **Sharpness of the Crest and Edges:** Sharp edges promote a cleaner break of the nappe and more predictable contraction, generally leading to higher and more consistent $C_d$ values. Rounded or worn edges increase energy losses.
    *   **Head of Water ($H$):** The coefficient of discharge is not always constant and can vary slightly with the head of water. For very low heads, surface tension and viscosity can play a role. For higher heads, the velocity of approach might become significant and affect the overall $C_d$.
    *   **Ventilation of the Nappe:** Proper ventilation of the underside of the nappe (the sheet of water flowing over the notch) is essential. If the nappe is not ventilated, it can cling to the downstream face of the notch, increasing the pressure on the downstream side and altering the flow pattern and discharge. Unventilated nappe generally leads to a higher $C_d$.
    *   **Velocity of Approach:** If the water velocity approaching the notch is significant, its kinetic energy contributes to the discharge. This effect is usually corrected for by adding a velocity of approach term to the head, or by adjusting the $C_d$.
    *   **Shape of the Notch:** The geometry of the trapezoidal notch itself, including the angle $\beta$, can influence $C_d$, although the primary dependence is captured in the formula.
    *   **Condition of the Notch:** Fouling, silt deposition, or damage to the notch can alter the flow and affect $C_d$.

---

### 9. Important Points to Remember

*   **Ci$\text{a}$lan's Weir:** The trapezoidal notch is also known as Ci$\text{a}$lan's weir.
*   **Formula Structure:** The discharge formula for a trapezoidal notch consists of two parts: one related to the rectangular portion of the flow (proportional to $H^{3/2}$) and another related to the triangular portions (proportional to $H^{5/2}$).
*   **Angle Definition:** Pay close attention to whether the angle given for the sloping sides is with the **horizontal** or the **vertical**. The formula uses $\tan\beta$, where $\beta$ is the angle with the **horizontal**.
*   **Coefficient of Discharge ($C_d$):** Always use the given $C_d$ value. If not given, a typical range is 0.60 to 0.65. Experimental determination is required for precise values.
*   **Solving for Head:** Equations involving $H^{3/2}$ and $H^{5/2}$ are often transcendental and may require numerical methods (like trial and error) to solve for the head.
*   **Velocity of Approach:** If the velocity of approach is significant, it should be accounted for. The effective head becomes $(H + h_a)$, where $h_a$ is the head due to velocity of approach ($v_a^2 / 2g$).

---

This concludes the study notes for discharge over a trapezoidal notch/weir. Remember to practice solving various problems to solidify your understanding.
