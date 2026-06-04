---
title: "Discharge through large orifices- rectangular orifice (discharging freely, fully submerged and partially submerged)"
subject: "FLUID MECHANICS"
module: "Module 4: Flow through Orifices: hydraulic coefficients and experimental determination of hydraulic coefficients (associated numerical problems)"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810701"
status: "completed"
scrapedAt: "2026-05-20T18:40:40.940Z"
---
# Fluid Mechanics: Module 4 - Flow Through Orifices

## Topic: Discharge through Large Orifices - Rectangular Orifice

---

### Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Understand the concept of a large orifice.
*   Define and explain the hydraulic coefficients associated with orifice flow.
*   Determine the theoretical and actual discharge through a rectangular orifice.
*   Analyze discharge through a rectangular orifice under different conditions:
    *   Freely discharging rectangular orifice.
    *   Fully submerged rectangular orifice.
    *   Partially submerged rectangular orifice.
*   Apply the relevant formulas to solve numerical problems related to discharge through rectangular orifices.
*   Understand the principles of experimental determination of hydraulic coefficients.

---

### 1. Introduction to Orifices and Large Orifices

*   **Orifice:** An orifice is a small opening in the side or base of a tank or vessel through which a fluid flows out.
*   **Large Orifice:** An orifice is considered "large" when the head of the fluid above the orifice is not constant over the entire area of the orifice. This means the velocity of the fluid issuing from different parts of the orifice varies significantly.
*   **Classification of Orifices by Size:**
    *   **Small Orifice:** The head of the fluid above the orifice is large compared to the dimensions of the orifice. The velocity of the fluid can be considered uniform across the orifice.
    *   **Large Orifice:** The head of the fluid above the orifice is small compared to the dimensions of the orifice. The velocity of the fluid varies significantly across the orifice due to the varying head.

### 2. Rectangular Orifice

A rectangular orifice is an orifice with a rectangular shape. For this topic, we will focus on how the discharge is calculated for a rectangular opening in a tank.

---

### 3. Hydraulic Coefficients

When fluid flows through an orifice, the actual discharge is less than the theoretical discharge due to various energy losses. These losses are accounted for by using hydraulic coefficients.

*   **Coefficient of Velocity ($C_v$)**: The ratio of the actual velocity of the jet at the vena contracta to the theoretical velocity.
    *   $C_v = \frac{\text{Actual velocity}}{\text{Theoretical velocity}}$
    *   Theoretically, velocity of efflux $v = \sqrt{2gh}$, where $h$ is the head of the fluid above the center of the orifice.
    *   **Important Point:** $C_v$ is typically between 0.95 and 0.99. It accounts for frictional losses as the fluid passes through the orifice.

*   **Coefficient of Contraction ($C_c$)**: The ratio of the area of the jet at the vena contracta to the actual area of the orifice.
    *   $C_c = \frac{\text{Area of jet at vena contracta}}{\text{Area of orifice}}$
    *   **Vena Contracta:** The point downstream of the orifice where the jet cross-section is smallest due to the contraction of the fluid stream.
    *   **Important Point:** $C_c$ is typically between 0.61 and 0.65 for sharp-edged orifices. It accounts for the converging flow lines as the fluid approaches the orifice.

*   **Coefficient of Discharge ($C_d$)**: The ratio of the actual discharge to the theoretical discharge.
    *   $C_d = \frac{\text{Actual discharge}}{\text{Theoretical discharge}}$
    *   It can also be expressed as the product of $C_v$ and $C_c$.
    *   $C_d = C_v \times C_c$
    *   **Important Point:** $C_d$ is always less than 1 and typically ranges from 0.60 to 0.65 for sharp-edged orifices. It is the most important coefficient for calculating actual flow rates.

---

### 4. Discharge Through Rectangular Orifices

The calculation of discharge through a rectangular orifice depends on whether the head above the orifice is considered constant or varying. For a *large* rectangular orifice, the head varies across its height.

#### 4.1. Rectangular Orifice Discharging Freely

This occurs when the orifice discharges into the atmosphere, and the downstream fluid level is below the bottom of the orifice.

**Assumptions for Large Orifices:**

*   The head of the fluid above the top edge of the orifice is negligible or zero.
*   The head of the fluid above the bottom edge of the orifice is significant.
*   The velocity of the fluid varies across the area of the orifice.

**Derivation:**

Consider a rectangular orifice of width $B$ and depth $D$ in the side of a tank. Let $H$ be the head of the fluid above the top edge of the orifice. The bottom edge of the orifice is at a depth of $H+D$ from the free surface.

We will consider a small horizontal strip of the orifice of thickness $dh$ at a depth $h$ from the free surface.

*   **Area of the strip ($dA$)**: $dA = B \times dh$
*   **Velocity of the fluid through the strip ($v$)**: $v = \sqrt{2gh}$ (Theoretical velocity)
*   **Theoretical discharge through the strip ($dQ_{th}$)**: $dQ_{th} = \text{Area} \times \text{Velocity} = dA \times v = (B \times dh) \times \sqrt{2gh}$

To find the total theoretical discharge ($Q_{th}$) through the large rectangular orifice, we integrate $dQ_{th}$ from the top edge ($h=H$) to the bottom edge ($h=H+D$).

$Q_{th} = \int_{H}^{H+D} B \sqrt{2gh} dh$
$Q_{th} = B \sqrt{2g} \int_{H}^{H+D} h^{1/2} dh$
$Q_{th} = B \sqrt{2g} \left[ \frac{h^{3/2}}{3/2} \right]_{H}^{H+D}$
$Q_{th} = \frac{2}{3} B \sqrt{2g} \left[ (H+D)^{3/2} - H^{3/2} \right]$

**Actual Discharge ($Q_{actual}$)**:

The actual discharge is obtained by multiplying the theoretical discharge by the coefficient of discharge ($C_d$).

$Q_{actual} = C_d \times Q_{th}$
$Q_{actual} = C_d \times \frac{2}{3} B \sqrt{2g} \left[ (H+D)^{3/2} - H^{3/2} \right]$

**Important Special Case for Large Orifices:**

Often, for a large orifice, the head above the top edge is small, or it's assumed to be negligible ($H=0$). This implies the orifice is discharging from the free surface downwards. In such cases, the formula simplifies.

If $H=0$ (orifice starts from the free surface):
$Q_{th} = \frac{2}{3} B \sqrt{2g} \left[ (0+D)^{3/2} - 0^{3/2} \right]$
$Q_{th} = \frac{2}{3} B \sqrt{2g} D^{3/2}$

And the actual discharge:
$Q_{actual} = C_d \times \frac{2}{3} B \sqrt{2g} D^{3/2}$

---

#### 4.2. Rectangular Orifice Fully Submerged

This occurs when the orifice is completely under the water surface, and the downstream level is below the bottom of the orifice. Both the top and bottom edges are submerged.

Let $h_1$ be the head of the fluid above the top edge and $h_2$ be the head of the fluid above the bottom edge. The depth of the orifice is $D = h_2 - h_1$.

Consider a small horizontal strip of thickness $dh$ at a depth $h$ from the free surface.

*   **Area of the strip ($dA$)**: $dA = B \times dh$
*   **Velocity of the fluid through the strip ($v$)**: $v = \sqrt{2gh}$ (Theoretical velocity)
*   **Theoretical discharge through the strip ($dQ_{th}$)**: $dQ_{th} = dA \times v = (B \times dh) \times \sqrt{2gh}$

To find the total theoretical discharge ($Q_{th}$) through the fully submerged large rectangular orifice, we integrate $dQ_{th}$ from the head above the top edge ($h=h_1$) to the head above the bottom edge ($h=h_2$).

$Q_{th} = \int_{h_1}^{h_2} B \sqrt{2gh} dh$
$Q_{th} = B \sqrt{2g} \int_{h_1}^{h_2} h^{1/2} dh$
$Q_{th} = B \sqrt{2g} \left[ \frac{h^{3/2}}{3/2} \right]_{h_1}^{h_2}$
$Q_{th} = \frac{2}{3} B \sqrt{2g} \left[ h_2^{3/2} - h_1^{3/2} \right]$

**Actual Discharge ($Q_{actual}$)**:

$Q_{actual} = C_d \times Q_{th}$
$Q_{actual} = C_d \times \frac{2}{3} B \sqrt{2g} \left[ h_2^{3/2} - h_1^{3/2} \right]$

---

#### 4.3. Rectangular Orifice Partially Submerged

This occurs when the orifice is partly submerged, and the downstream level is above the bottom of the orifice but below the top of the orifice.

This scenario is less common when discussing large orifices in the typical sense as "partially submerged" usually refers to the downstream fluid level being above the bottom edge. However, if we interpret "partially submerged" as the downstream fluid level being *above* the orifice itself, then the flow is considered suppressed, and the discharge calculation becomes more complex, often involving head loss due to friction in the approach channel.

A more standard interpretation of "partially submerged" for an orifice implies that the downstream liquid level is somewhere *between* the top and bottom edges of the orifice. In this case, the discharge calculation needs to consider two parts:

1.  **The part of the orifice above the downstream water level:** This part discharges freely.
2.  **The part of the orifice below the downstream water level:** This part is effectively a submerged orifice discharging into another body of liquid. The driving head for this portion is the *difference* in water levels between the upstream and downstream sides.

Let:
*   $h_1$ = head of water above the top edge of the orifice.
*   $h_2$ = head of water above the bottom edge of the orifice.
*   $h_d$ = depth of the downstream water level from the free surface of the upstream water.
*   Assume $h_1 < h_d < h_2$.

**Part 1: Above the downstream water level (Free Discharge)**

*   The head above the top edge is $h_1$.
*   The head above the downstream water level is $h_d$.
*   The height of this portion is $(h_d - h_1)$.
*   The theoretical discharge through this portion ($Q_{th1}$) is calculated by integrating from $h=h_1$ to $h=h_d$:
    $Q_{th1} = \int_{h_1}^{h_d} B \sqrt{2gh} dh = \frac{2}{3} B \sqrt{2g} \left[ h_d^{3/2} - h_1^{3/2} \right]$
*   The actual discharge through this portion ($Q_{actual1}$):
    $Q_{actual1} = C_d \times Q_{th1} = C_d \times \frac{2}{3} B \sqrt{2g} \left[ h_d^{3/2} - h_1^{3/2} \right]$

**Part 2: Below the downstream water level (Submerged Discharge)**

*   The driving head for this portion is the difference between the upstream and downstream water levels: $(h_d - h_2)$. This is the "effective head" across this section of the orifice.
*   The height of this portion is $(h_2 - h_d)$.
*   The theoretical discharge through this portion ($Q_{th2}$) is calculated by integrating from $h=h_d$ to $h=h_2$, but using the effective head. This is a bit more nuanced. A simpler approach is to consider the entire submerged section as if discharging under a constant head difference.
*   **Effective head difference ($\Delta h$)**: $\Delta h = h_2 - h_d$.
*   Area of this submerged portion = $B \times (h_2 - h_d)$.
*   Theoretical discharge through the submerged portion ($Q_{th2}$) can be approximated as:
    $Q_{th2} \approx C_d \times (\text{Area}) \times \sqrt{2g \times \text{Average Head Difference}}$
    A more rigorous approach for submerged discharge uses the head difference across the section. The effective head for discharge through the submerged part is the difference in water levels, $h_2 - h_d$. If we consider the flow through this submerged area $B(h_2-h_d)$ under the head difference $(h_2-h_d)$, the theoretical discharge is $(B(h_2-h_d))\sqrt{2g(h_2-h_d)}$. However, this is not integrating over varying heads.

Let's re-evaluate Part 2 more accurately using integration. Consider a strip $dh$ at depth $h$ from the upstream free surface, where $h_d \le h \le h_2$. The head causing flow is the difference between the upstream free surface and the downstream free surface. This difference is constant for all these strips, equal to $(h_2 - h_d)$. So, the velocity through each strip is $\sqrt{2g(h_2-h_d)}$.

*   Theoretical discharge through the strip ($dQ_{th2}$) = $(B \times dh) \times \sqrt{2g(h_2-h_d)}$
*   Integrating from $h=h_d$ to $h=h_2$:
    $Q_{th2} = \int_{h_d}^{h_2} B \sqrt{2g(h_2-h_d)} dh$
    $Q_{th2} = B \sqrt{2g(h_2-h_d)} \int_{h_d}^{h_2} dh$
    $Q_{th2} = B \sqrt{2g(h_2-h_d)} [h]_{h_d}^{h_2}$
    $Q_{th2} = B \sqrt{2g(h_2-h_d)} (h_2 - h_d)$
*   Actual discharge through this portion ($Q_{actual2}$):
    $Q_{actual2} = C_d \times Q_{th2} = C_d \times B (h_2 - h_d)^{3/2} \sqrt{2g}$

**Total Actual Discharge ($Q_{total}$)**:
$Q_{total} = Q_{actual1} + Q_{actual2}$
$Q_{total} = C_d \times \frac{2}{3} B \sqrt{2g} \left[ h_d^{3/2} - h_1^{3/2} \right] + C_d \times B \sqrt{2g} (h_2 - h_d)^{3/2}$

**Important Note:** This analysis assumes the downstream water level is *between* the top and bottom edges. If the downstream water level is *above* the bottom edge but *below* the top edge, then the entire orifice is considered "partially submerged" in the sense that the downstream level is higher than the orifice opening. This is a more complex scenario often treated as flow over a weir with a submerged condition. For the context of orifices, the interpretation above is more typical.

---

### 5. Experimental Determination of Hydraulic Coefficients

Hydraulic coefficients ($C_v$, $C_c$, $C_d$) are usually determined experimentally. This involves measuring the actual discharge and comparing it with the theoretical discharge.

**Experimental Setup:**

*   A tank with an orifice of known dimensions.
*   A method to maintain a constant head of water above the orifice (e.g., a weir-controlled overflow pipe).
*   A collecting tank or measuring tank to measure the volume of water discharged over a specific period.
*   A hook gauge or similar device to accurately measure the head of water.

**Procedure:**

1.  **Set up the orifice:** Fix the rectangular orifice to the side of the tank.
2.  **Maintain constant head:** Ensure the water level in the tank is stable and at a known height. Measure the head of water above the orifice.
3.  **Measure actual discharge:**
    *   Allow the jet of water from the orifice to fall into a measuring tank.
    *   Measure the time taken to collect a certain volume of water.
    *   Calculate the actual discharge ($Q_{actual}$) in m³/s or L/s using:
        $Q_{actual} = \frac{\text{Volume collected}}{\text{Time taken}}$
4.  **Calculate theoretical discharge:**
    *   Use the appropriate formula for the type of orifice (small or large) and its position. For a rectangular orifice, the integration method is used if it's large.
5.  **Calculate Hydraulic Coefficients:**
    *   **Coefficient of Discharge ($C_d$)**:
        $C_d = \frac{Q_{actual}}{Q_{th}}$
    *   **To determine $C_v$ and $C_c$ separately:**
        *   **Measure the jet trajectory:** The jet issuing from the orifice follows a parabolic path. By measuring the horizontal distance (range, $x$) and the vertical drop ($y$) of the jet from the vena contracta, one can estimate the actual velocity.
            *   Horizontal velocity = $v_{actual}$
            *   Vertical motion: $y = \frac{1}{2}gt^2$
            *   Horizontal motion: $x = v_{actual} \times t$
            *   From these, $t = x/v_{actual}$. Substituting into the vertical equation: $y = \frac{1}{2}g (\frac{x}{v_{actual}})^2 \Rightarrow v_{actual} = \sqrt{\frac{gx^2}{2y}}$
        *   **Measure the vena contracta area:** This is typically done by measuring the diameter or dimensions of the jet after it has contracted.
        *   **Calculate $C_v$:** $C_v = \frac{\text{Measured actual velocity}}{\text{Theoretical velocity at vena contracta}}$
        *   **Calculate $C_c$:** $C_c = \frac{\text{Measured area of vena contracta}}{\text{Area of orifice}}$
        *   **Verify:** Check if $C_d = C_v \times C_c$.

---

### 6. Numerical Problems and Solutions

**Commonly Used Values:**

*   $\sqrt{2g} = \sqrt{2 \times 9.81} \approx 4.427$ m$^{1/2}$/s

**Problem 1 (Freely Discharging Large Rectangular Orifice):**

A rectangular orifice $1 \text{ m}$ wide and $0.8 \text{ m}$ deep is fitted to a large tank. The top edge of the orifice is at a depth of $0.5 \text{ m}$ below the free surface of the water. Calculate the theoretical and actual discharge through the orifice. Assume $C_d = 0.62$.

**Solution:**

*   Width of orifice, $B = 1 \text{ m}$
*   Depth of orifice, $D = 0.8 \text{ m}$
*   Head above the top edge, $H = 0.5 \text{ m}$
*   Head above the bottom edge, $H+D = 0.5 + 0.8 = 1.3 \text{ m}$
*   $C_d = 0.62$

**Theoretical Discharge ($Q_{th}$):**
$Q_{th} = \frac{2}{3} B \sqrt{2g} \left[ (H+D)^{3/2} - H^{3/2} \right]$
$Q_{th} = \frac{2}{3} (1 \text{ m}) \times 4.427 \text{ m}^{1/2}/\text{s} \left[ (1.3 \text{ m})^{3/2} - (0.5 \text{ m})^{3/2} \right]$
$Q_{th} = 2.951 \times [1.488 - 0.354] \text{ m}^3/\text{s}$
$Q_{th} = 2.951 \times 1.134 \text{ m}^3/\text{s}$
$Q_{th} \approx 3.346 \text{ m}^3/\text{s}$

**Actual Discharge ($Q_{actual}$):**
$Q_{actual} = C_d \times Q_{th}$
$Q_{actual} = 0.62 \times 3.346 \text{ m}^3/\text{s}$
$Q_{actual} \approx 2.075 \text{ m}^3/\text{s}$

---

**Problem 2 (Fully Submerged Large Rectangular Orifice):**

A rectangular orifice $1.2 \text{ m}$ wide and $0.6 \text{ m}$ deep is submerged in water. The top edge of the orifice is at a depth of $1 \text{ m}$ and the bottom edge is at a depth of $1.6 \text{ m}$ from the free surface. Determine the theoretical and actual discharge through the orifice if $C_d = 0.60$.

**Solution:**

*   Width of orifice, $B = 1.2 \text{ m}$
*   Depth of orifice, $D = 0.6 \text{ m}$
*   Head above the top edge, $h_1 = 1 \text{ m}$
*   Head above the bottom edge, $h_2 = 1.6 \text{ m}$
*   $C_d = 0.60$

**Theoretical Discharge ($Q_{th}$):**
$Q_{th} = \frac{2}{3} B \sqrt{2g} \left[ h_2^{3/2} - h_1^{3/2} \right]$
$Q_{th} = \frac{2}{3} (1.2 \text{ m}) \times 4.427 \text{ m}^{1/2}/\text{s} \left[ (1.6 \text{ m})^{3/2} - (1 \text{ m})^{3/2} \right]$
$Q_{th} = 3.542 \times [2.024 - 1] \text{ m}^3/\text{s}$
$Q_{th} = 3.542 \times 1.024 \text{ m}^3/\text{s}$
$Q_{th} \approx 3.627 \text{ m}^3/\text{s}$

**Actual Discharge ($Q_{actual}$):**
$Q_{actual} = C_d \times Q_{th}$
$Q_{actual} = 0.60 \times 3.627 \text{ m}^3/\text{s}$
$Q_{actual} \approx 2.176 \text{ m}^3/\text{s}$

---

**Problem 3 (Partially Submerged Large Rectangular Orifice):**

A large rectangular orifice is $2 \text{ m}$ wide and $1 \text{ m}$ deep. The top edge is $0.2 \text{ m}$ below the free surface. The downstream water level is $0.7 \text{ m}$ below the free surface. Calculate the discharge through the orifice. Assume $C_d = 0.63$.

**Solution:**

*   Width of orifice, $B = 2 \text{ m}$
*   Depth of orifice, $D = 1 \text{ m}$
*   Head above top edge, $h_1 = 0.2 \text{ m}$
*   Head above bottom edge, $h_2 = 0.2 + 1 = 1.2 \text{ m}$
*   Downstream water level, $h_d = 0.7 \text{ m}$
*   $C_d = 0.63$

Since $h_1 < h_d < h_2$ ($0.2 < 0.7 < 1.2$), the orifice is partially submerged with the downstream level between the top and bottom edges.

**Part 1: Above downstream water level (Free Discharge portion)**

*   This portion extends from $h=h_1=0.2 \text{ m}$ to $h=h_d=0.7 \text{ m}$.
*   Actual discharge through this part ($Q_{actual1}$):
    $Q_{actual1} = C_d \times \frac{2}{3} B \sqrt{2g} \left[ h_d^{3/2} - h_1^{3/2} \right]$
    $Q_{actual1} = 0.63 \times \frac{2}{3} (2 \text{ m}) \times 4.427 \text{ m}^{1/2}/\text{s} \left[ (0.7 \text{ m})^{3/2} - (0.2 \text{ m})^{3/2} \right]$
    $Q_{actual1} = 5.903 \times [0.581 - 0.089] \text{ m}^3/\text{s}$
    $Q_{actual1} = 5.903 \times 0.492 \text{ m}^3/\text{s}$
    $Q_{actual1} \approx 2.904 \text{ m}^3/\text{s}$

**Part 2: Below downstream water level (Submerged Discharge portion)**

*   This portion extends from $h=h_d=0.7 \text{ m}$ to $h=h_2=1.2 \text{ m}$.
*   The effective head difference is $(h_2 - h_d) = 1.2 - 0.7 = 0.5 \text{ m}$.
*   Actual discharge through this part ($Q_{actual2}$):
    $Q_{actual2} = C_d \times B \sqrt{2g} (h_2 - h_d)^{3/2}$
    $Q_{actual2} = 0.63 \times (2 \text{ m}) \times 4.427 \text{ m}^{1/2}/\text{s} \times (0.5 \text{ m})^{3/2}$
    $Q_{actual2} = 5.534 \times 0.354 \text{ m}^3/\text{s}$
    $Q_{actual2} \approx 1.960 \text{ m}^3/\text{s}$

**Total Actual Discharge ($Q_{total}$):**
$Q_{total} = Q_{actual1} + Q_{actual2}$
$Q_{total} = 2.904 \text{ m}^3/\text{s} + 1.960 \text{ m}^3/\text{s}$
$Q_{total} \approx 4.864 \text{ m}^3/\text{s}$

---

### 7. Practice Questions

1.  A rectangular orifice $1.5 \text{ m}$ wide and $0.75 \text{ m}$ deep is installed in a tank. The head over the top edge of the orifice is $0.6 \text{ m}$. Calculate the theoretical discharge and the actual discharge if the coefficient of discharge is $0.61$.
    *(Answer: $Q_{th} \approx 3.653 \text{ m}^3/\text{s}$, $Q_{actual} \approx 2.228 \text{ m}^3/\text{s}$)*

2.  A fully submerged rectangular orifice has dimensions $1 \text{ m} \times 0.5 \text{ m}$. The water level above the top edge is $1.2 \text{ m}$ and above the bottom edge is $1.7 \text{ m}$. If $C_d = 0.65$, find the actual discharge.
    *(Answer: $Q_{actual} \approx 2.747 \text{ m}^3/\text{s}$)*

3.  A rectangular orifice of width $2 \text{ m}$ and depth $1.2 \text{ m}$ is fitted to a tank. The top edge is $0.3 \text{ m}$ below the free surface. The downstream water level is $0.9 \text{ m}$ below the free surface. Calculate the discharge through the orifice, assuming $C_d = 0.64$.
    *(Answer: $Q_{total} \approx 3.747 \text{ m}^3/\text{s}$)*

---

### 8. Important Points to Remember

*   Large orifices are characterized by a significant variation in head across their area.
*   For large orifices, discharge is calculated by integrating the discharge through elemental horizontal strips.
*   The formula for theoretical discharge through a large rectangular orifice discharging freely is $Q_{th} = \frac{2}{3} B \sqrt{2g} \left[ (H+D)^{3/2} - H^{3/2} \right]$.
*   For fully submerged orifices, the formula is $Q_{th} = \frac{2}{3} B \sqrt{2g} \left[ h_2^{3/2} - h_1^{3/2} \right]$, where $h_1$ and $h_2$ are heads above the top and bottom edges, respectively.
*   For partially submerged orifices (where downstream level is between top and bottom edges), the total discharge is the sum of discharge from the freely discharging upper part and the submerged lower part.
*   Actual discharge is always obtained by multiplying the theoretical discharge by the coefficient of discharge ($C_d$).
*   Hydraulic coefficients ($C_v, C_c, C_d$) account for energy losses and flow contraction. $C_d = C_v \times C_c$.
*   Experimental determination involves measuring actual flow and comparing it to theoretical flow.

---
