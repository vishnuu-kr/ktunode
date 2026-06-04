---
title: "determination of meta -centric height using analytical and experimental method (include derivation and numerical problems)"
subject: "FLUID MECHANICS"
module: "Module 2: Determination of total pressure and centre of pressure on surfaces (include numerical problems) : Vertical plane surface"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba8106ef"
status: "completed"
scrapedAt: "2026-05-20T18:40:29.956Z"
---
# Fluid Mechanics: Module 2 - Determination of Total Pressure and Center of Pressure on Surfaces

## Topic: Determination of Metacentric Height using Analytical and Experimental Methods

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the concept of stability of floating bodies.
*   Define metacentre and metacentric height.
*   Derive the analytical expression for metacentric height for a rectangular or circular submerged body.
*   Explain the experimental method for determining metacentric height.
*   Solve numerical problems related to the determination of metacentric height.

---

### 1. Introduction to Stability of Floating Bodies

A floating body is stable if, when slightly displaced from its equilibrium position, it tends to return to its original position. If it tends to move further away from its equilibrium position, it is unstable. If it remains in its new position, it is in neutral equilibrium.

The stability of a floating body is determined by the relative positions of its **center of gravity (G)** and its **metacentre (M)**.

---

### 2. Key Concepts and Definitions

*   **Center of Gravity (G):** The point where the entire weight of the floating body is considered to act vertically downwards.
*   **Center of Buoyancy (B):** The centroid of the submerged volume of the floating body. The buoyant force acts vertically upwards through the center of buoyancy.
*   **Metacentre (M):** For a floating body, the metacentre is the point where the vertical line passing through the new center of buoyancy (B') intersects the original vertical line passing through the original center of buoyancy (B) and the center of gravity (G) when the body is tilted through a small angle.
*   **Metacentric Height (GM):** The vertical distance between the center of gravity (G) and the metacentre (M). It is a crucial parameter for determining the stability of a floating body.

---

### 3. Stability Criteria for Floating Bodies

The stability of a floating body depends on the metacentric height (GM):

*   **Stable Equilibrium:** If **GM > 0** (M is above G). When the body is tilted, the couple formed by the weight and the buoyant force tends to restore the body to its original position.
*   **Unstable Equilibrium:** If **GM < 0** (M is below G). When the body is tilted, the couple formed by the weight and the buoyant force tends to increase the tilt, causing the body to overturn.
*   **Neutral Equilibrium:** If **GM = 0** (M coincides with G). When the body is tilted, the couple formed by the weight and the buoyant force neither restores nor further tilts the body; it remains in its new position.

---

### 4. Analytical Determination of Metacentric Height (GM)

Let's consider a floating body subjected to a small angular displacement $\theta$ about its longitudinal axis.

**Assumptions:**

*   The angle of tilt ($\theta$) is small.
*   The center of gravity (G) remains in its original position.
*   The density of the fluid is constant.

**Derivation for a Rectangular Prism (e.g., a ship hull):**

Consider a floating rectangular body of width $2b$ and length $L$, submerged to a depth $h$.
Let the weight of the body be $W$ and the volume submerged be $V$.
The buoyant force is $F_B = \rho g V$, where $\rho$ is the density of the fluid.
In equilibrium, $W = F_B$.

When the body is tilted by a small angle $\theta$:

1.  **Original Position:**
    *   Center of gravity: G
    *   Center of buoyancy: B (at the centroid of the submerged rectangle)

2.  **Tilted Position:**
    *   The shape of the submerged volume changes. The submerged area at the water surface is now a trapezoid.
    *   The water recedes from one side and is added to the other.
    *   Let the original water line be a rectangle of dimensions $L \times 2b$.
    *   When tilted by $\theta$, the loss of buoyancy on one side and gain on the other forms wedges of displaced volume.
    *   The volume of the wedge lost on one side is approximately $\frac{1}{2} (b \theta) L \times h$ (considering a small depth of wedge). A more precise calculation considers the submerged depth. The wedge of fluid displaced has a triangular cross-section with base $b \theta$ and height $h$. The volume of this wedge is $dV = (\frac{1}{2} b \theta \times h) \times L$.
    *   The volume of the wedge gained on the other side is also $dV$.

    *   **New Center of Buoyancy (B'):** The new center of buoyancy B' will shift horizontally from the original center of buoyancy B.
    *   The shift in the center of buoyancy ($\Delta x$) can be calculated by considering the moment of the wedges of displaced fluid about the original center of buoyancy B.
    *   Moment of lost wedge about B = (Volume of lost wedge) $\times$ (Distance of its centroid from B)
    *   The centroid of the triangular wedge is at a distance $\frac{2}{3} b$ from the vertex (at the edge). So, its distance from B is $\frac{2}{3} b$.
    *   Moment of lost wedge $\approx (L \times \frac{1}{2} b \theta \times h) \times \frac{2}{3} b$.
    *   Moment of gained wedge about B = (Volume of gained wedge) $\times$ (Distance of its centroid from B)
    *   Moment of gained wedge $\approx (L \times \frac{1}{2} b \theta \times h) \times \frac{2}{3} b$.
    *   The total moment of the added and removed fluid about the original center of buoyancy B is the moment of the couple that produces the tilting.

    *   **A more direct approach using the second moment of the waterplane area:**
        The horizontal shift of the center of buoyancy ($\Delta x$) is given by:
        $$ \Delta x = \frac{I}{V_{submerged}} $$
        where:
        *   $I$ is the second moment of area of the waterplane about the longitudinal axis of tilt.
        *   $V_{submerged}$ is the submerged volume of the body.

        For a rectangular waterplane of length $L$ and width $2b$, the second moment of area about the longitudinal axis (passing through the center) is:
        $$ I = \frac{L \times (2b)^3}{12} = \frac{L(8b^3)}{12} = \frac{2}{3} L b^3 $$
        If the body is tilted about its center line, the distance from the axis of rotation to the edge is $b$. The shift of the center of buoyancy is the distance from the original center of buoyancy to the new center of buoyancy.

        Consider the wedges. The center of buoyancy shifts due to the redistribution of buoyant force. The buoyant force acting on the wedge of lost volume acts downwards through the centroid of that wedge, and the buoyant force acting on the wedge of gained volume acts upwards through the centroid of that wedge.

        The horizontal shift of the center of buoyancy ($\Delta x$) can be calculated as the moment of the wedges about the original center of buoyancy B.
        Moment of lost wedge about B = $\text{Volume of wedge} \times \text{distance of centroid}$
        Volume of wedge $\approx (L \times \frac{1}{2} \times b \times \theta \times h)$
        The centroid of the triangular wedge of fluid is at a distance $\frac{2}{3} b$ from the apex. So, its distance from B is $\frac{2}{3} b$.
        Moment of lost wedge $\approx (L \frac{b \theta h}{2}) \frac{2b}{3} = \frac{Lb^2 h \theta}{3}$
        Similarly, moment of gained wedge $\approx \frac{Lb^2 h \theta}{3}$

        The total moment causing the shift of the center of buoyancy is the difference between the moments of the two wedges (or rather, the sum of the moments considering their direction).
        The horizontal displacement of the center of buoyancy $BB'$ is the integral of the horizontal displacement of each infinitesimal slice of the wedge.

        **A more rigorous derivation leads to:**
        The horizontal shift of the center of buoyancy $BB'$ is given by:
        $$ BB' = \frac{I \tan \theta}{V_{submerged}} $$
        where $I$ is the second moment of area of the waterplane section about the axis of rotation.

    *   Now, consider the tilted position. The new buoyant force $F_B'$ acts vertically upwards through the new center of buoyancy B'.
    *   The weight $W$ acts vertically downwards through G.
    *   The restoring couple is formed by these two forces. The vertical line through B' intersects the original line of action of buoyancy (which passes through B and M) at M.
    *   In the small angle approximation, the distance $BM$ is equal to the horizontal shift $BB'$.
    *   Therefore, $BM = \frac{I}{V_{submerged}}$.

    *   The metacentric height $GM$ is the distance $BM$ minus the distance $BG$ (vertical distance between the original center of buoyancy and the center of gravity).
    *   $$ GM = BM - BG $$
    *   $$ GM = \frac{I}{V_{submerged}} - BG $$

**For a Rectangular Prism (width $2b$, length $L$, submerged to depth $h$):**

*   Waterplane area = $L \times 2b$.
*   Second moment of area of the waterplane about the longitudinal axis of tilt (center line) $I = \frac{L(2b)^3}{12} = \frac{2}{3} L b^3$.
*   Submerged volume $V_{submerged} = L \times 2b \times h$.
*   $$ GM = \frac{\frac{2}{3} L b^3}{L \times 2b \times h} - BG $$
*   $$ GM = \frac{b^2}{6h} - BG $$

**Important Point:** The distance $BG$ is the vertical distance between the center of buoyancy and the center of gravity. This needs to be known or calculated from the geometry of the body.

**Derivation for a Circular Prism (e.g., a cylindrical tank):**

Consider a floating cylinder of radius $r$ and length $L$, submerged to a depth $h$.
The waterplane is a rectangle of length $L$ and width $2\sqrt{r^2 - (r-h)^2}$. This can be complex.

**A simpler case:** Consider a rectangular plate of width $w$ and length $l$ submerged vertically in a fluid, and then tilted about its top edge. This relates to the center of pressure, not the metacentric height of a floating body.

**Let's focus on the standard metacentric height derivation for floating bodies.**

Consider a body floating in equilibrium. Let its weight be $W$ and the submerged volume be $V$.
The center of buoyancy is B, and the center of gravity is G.
When tilted by a small angle $\theta$, the waterplane area is $A$.
The volume of the submerged portion changes. The new center of buoyancy is B'.
The buoyant force $F_B'$ acts through B'.
The restoring moment is $W \times GM \sin \theta \approx W \times GM \times \theta$ (for small $\theta$).

This restoring moment is also equal to the moment of the shift of the center of buoyancy about G.
The horizontal shift of B to B' is $BB' = BM \tan \theta$.
The restoring moment is also $F_B \times (BM \sin \theta) \approx F_B \times BM \times \theta$.
Since $W = F_B$, we have:
$W \times GM \times \theta = F_B \times BM \times \theta$
$GM = BM$
And $BM = \frac{I}{V_{submerged}}$, where $I$ is the second moment of area of the waterplane about the axis of tilt.

**Example Derivation for a Rectangular Prism Tilted about its Longitudinal Axis:**

*   Body: Rectangular prism of width $2b$ and length $L$.
*   Submerged to a depth $h$.
*   Waterplane area: $A = L \times 2b$.
*   Axis of tilt: Longitudinal axis passing through the center of the waterplane.
*   Second moment of area of the waterplane about the longitudinal axis:
    $$ I = \int_{-b}^{b} L y^2 dy = L \left[ \frac{y^3}{3} \right]_{-b}^{b} = L \left( \frac{b^3}{3} - \frac{(-b)^3}{3} \right) = L \left( \frac{b^3}{3} + \frac{b^3}{3} \right) = \frac{2}{3} L b^3 $$
*   Submerged Volume: $V_{submerged} = L \times 2b \times h$.
*   Metacentric Radius ($BM$):
    $$ BM = \frac{I}{V_{submerged}} = \frac{\frac{2}{3} L b^3}{L \times 2b \times h} = \frac{b^2}{6h} $$
*   Metacentric Height ($GM$):
    $$ GM = BM - BG = \frac{b^2}{6h} - BG $$

---

### 5. Experimental Determination of Metacentric Height

The experimental method is used to determine the metacentric height of a floating body, such as a ship or a pontoon, when its geometric properties might be complex or unknown.

**Principle:** The experiment involves tilting the body by shifting known weights horizontally and observing the angle of tilt. The restoring moment created by the weight of the body is balanced by the moment created by the shifting weights.

**Procedure:**

1.  **Preparation:**
    *   Place the floating body (e.g., a pontoon or a model ship) in a sufficiently large tank of water.
    *   Ensure the body floats freely.
    *   Mark the center of gravity (G) of the body. If not precisely known, it's often assumed to be at the geometric center for models or determined separately.
    *   Fit a plumb bob with a string to the body, so it hangs freely and can indicate the vertical. The string should pass through a fixed point above the body.

2.  **Shifting Weights:**
    *   Place a known weight ($w$) on a horizontal deck of the floating body.
    *   Place this weight at the center line initially.
    *   Measure the vertical distance between the center of gravity (G) and the center of buoyancy (B). This distance is $BG$.
    *   Shift the weight ($w$) horizontally from the center line by a known distance ($x$). This causes the body to tilt by a small angle $\theta$.
    *   The horizontal shift of the weight creates an overturning moment.
    *   The weight of the body ($W$) acting through G and the buoyant force acting through B' create a restoring moment.

3.  **Measurements:**
    *   The overturning moment due to the shifted weight is $M_{overturning} = w \times x$.
    *   The restoring moment is provided by the weight of the body ($W$) acting through G and the buoyant force acting through the new center of buoyancy B'. This moment is equal to $W \times GM \sin \theta$.
    *   Observe the angle of tilt ($\theta$) by the plumb bob. The horizontal distance ($y$) between the plumb bob string at the fixed point and the vertical line through the fixed point is related to $\theta$ by $\tan \theta = y/L_p$, where $L_p$ is the length of the plumb line. For small angles, $\sin \theta \approx \tan \theta$.

4.  **Calculation:**
    *   Equate the overturning moment and the restoring moment:
        $$ w \times x = W \times GM \sin \theta $$
    *   Rearranging to find GM:
        $$ GM = \frac{w \times x}{W \sin \theta} $$
    *   Alternatively, if the angle of tilt is measured by the movement ($y$) of the plumb line a distance $L_p$ from the pivot:
        $$ \sin \theta \approx \tan \theta = \frac{y}{L_p} $$
        $$ GM = \frac{w \times x}{W \times (y/L_p)} = \frac{w \times x \times L_p}{W \times y} $$

5.  **Repeat and Average:**
    *   Repeat the experiment by shifting the weight to the opposite side.
    *   Shift the weight to different positions to obtain multiple readings for $\theta$ at different $x$.
    *   Calculate GM for each reading and take the average.

**Important Considerations for Experimental Method:**

*   The weight $W$ and the weight of the shifting weight $w$ should be accurately known.
*   The distance $x$ of the shift should be measured accurately.
*   The length of the plumb line $L_p$ should be reasonably long to get a measurable displacement $y$ for small angles.
*   The angle of tilt $\theta$ should be small (typically less than 10-15 degrees) for the approximations to be valid.
*   The body should float freely without touching the sides of the tank.
*   The weight $W$ is the total weight of the body when floating, including any fixed weights.

---

### 6. Numerical Problems

**Problem 1 (Analytical):**

A rectangular pontoon of 10 m length, 6 m width, and 3 m depth floats in fresh water ($\rho = 1000 \, \text{kg/m}^3$). It carries a load of 120 tonnes. The center of gravity of the pontoon and its load is 0.2 m above the bottom of the pontoon. The pontoon is also 0.5 m below the water surface. Determine the metacentric height of the pontoon.

**Solution:**

Given:
Length of pontoon, $L = 10 \, \text{m}$
Width of pontoon, $B = 6 \, \text{m}$
Depth of pontoon, $D = 3 \, \text{m}$
Density of fresh water, $\rho = 1000 \, \text{kg/m}^3$
Load carried, $m = 120 \, \text{tonnes} = 120 \times 1000 \, \text{kg}$
Submerged depth, $h = 0.5 \, \text{m}$
Center of gravity (G) is 0.2 m above the bottom.

1.  **Calculate the submerged volume ($V$):**
    $V = L \times B \times h = 10 \, \text{m} \times 6 \, \text{m} \times 0.5 \, \text{m} = 30 \, \text{m}^3$

2.  **Calculate the buoyant force ($F_B$):**
    $F_B = \rho g V = 1000 \, \text{kg/m}^3 \times 9.81 \, \text{m/s}^2 \times 30 \, \text{m}^3 = 294300 \, \text{N}$

3.  **Calculate the weight of the pontoon ($W_{pontoon}$):**
    The buoyant force equals the total weight of the floating body. Let's assume the pontoon itself has some weight that, when added to the load, equals the buoyant force. Or, if the problem implies the 120 tonnes is the *total* weight, we proceed with that. If the problem implies the pontoon *plus* the load equals the buoyant force, we need to know the pontoon's weight. Assuming the 120 tonnes is the total weight of the floating body:
    $W = m \times g = 120 \times 1000 \, \text{kg} \times 9.81 \, \text{m/s}^2 = 1177200 \, \text{N}$
    *Correction*: The problem states "It carries a load of 120 tonnes." This implies the total weight of the floating body is the weight of the pontoon + the load. If the pontoon floats when carrying this load, the buoyant force must equal this total weight. Let's re-read carefully: "The pontoon ... floats in fresh water. It carries a load of 120 tonnes." This means the total weight $W = W_{pontoon} + W_{load}$. The problem statement is a bit ambiguous if the pontoon's own weight is provided. Often in such problems, the total weight is implied by the load or the equilibrium condition. Let's assume the 120 tonnes is the total weight for now to proceed.

    *Let's re-interpret the problem:* "It carries a load of 120 tonnes." This means the weight of the cargo. We need the weight of the pontoon itself. However, if the pontoon is floating at a submerged depth of 0.5m, the buoyant force generated must be equal to the total weight.
    Let's assume the problem implies that *when loaded with 120 tonnes*, the pontoon is submerged to 0.5m.
    So, the buoyant force generated by this submersion is $F_B = 294300 \, \text{N}$. This $F_B$ must equal the total weight $W$.
    $W = F_B = 294300 \, \text{N}$. This seems very low for a 10m x 6m x 3m pontoon carrying 120 tonnes.

    **Let's assume the problem implies the *total weight* of the pontoon and its load is such that it's submerged to 0.5m, and the 120 tonnes is just a detail of the load.** This is still problematic.

    **Most likely interpretation:** The problem provides the dimensions of the pontoon. The *total* weight of the pontoon plus its load is $W$. When submerged to 0.5m, $F_B = \rho g V$. So $W = \rho g V$.
    Let's recalculate $W$ based on the assumption that the pontoon *itself* has a submerged volume of $10 \times 6 \times 0.5 = 30 \, \text{m}^3$ when carrying the load.
    $W = 1000 \, \text{kg/m}^3 \times 9.81 \, \text{m/s}^2 \times 30 \, \text{m}^3 = 294300 \, \text{N}$.
    This implies the pontoon (plus load) weighs 294300 N, which is approximately 30 tonnes. This contradicts the 120 tonnes load.

    **Let's assume the problem meant:** A pontoon of dimensions 10m x 6m x 3m has a total weight (pontoon + load) of 120 tonnes (i.e., $120 \times 1000$ kg) and it floats in water such that its submerged depth is 0.5m.
    Total weight $W = 120 \times 1000 \, \text{kg} \times 9.81 \, \text{m/s}^2 = 1177200 \, \text{N}$.
    Submerged volume $V = 10 \, \text{m} \times 6 \, \text{m} \times 0.5 \, \text{m} = 30 \, \text{m}^3$.
    Buoyant force required to support this weight $F_B = W = 1177200 \, \text{N}$.
    For this to be true, the density of the fluid should be:
    $\rho = W / (gV) = 1177200 \, \text{N} / (9.81 \, \text{m/s}^2 \times 30 \, \text{m}^3) \approx 4000 \, \text{kg/m}^3$. This is not fresh water.

    **Let's assume the problem statement implies:** The pontoon has certain dimensions. When loaded with 120 tonnes, it floats in fresh water. The submerged depth information is given to calculate the submerged volume needed to balance the weight. However, the problem statement is still tricky.

    **Let's try a more standard phrasing:** "A rectangular pontoon of length 10m, width 6m, and weight 120 tonnes floats in fresh water. The pontoon has a draught of 0.5m." This would be simpler.

    **Let's revert to the original phrasing and assume it means:** The pontoon has dimensions 10m x 6m x 3m. The total weight of the pontoon *plus* the 120-tonne load results in it being submerged to a depth of 0.5m in fresh water.
    Total weight $W = \rho_{water} g V_{submerged} = 1000 \, \text{kg/m}^3 \times 9.81 \, \text{m/s}^2 \times (10 \, \text{m} \times 6 \, \text{m} \times 0.5 \, \text{m}) = 294300 \, \text{N}$.
    This implies the total weight is 294300 N (approx 30 tonnes). The 120 tonnes load is confusing here.

    **Assumption for solving:** Let's assume the pontoon *itself* weighs some amount, and the 120 tonnes is the *additional* load. The total weight $W$ is such that the pontoon floats with 0.5m draught. The problem *must* imply that the buoyant force at 0.5m draught is what supports the total weight.

    **Let's ignore the "120 tonnes" for a moment and use the dimensions to find the submerged volume and thus the weight it supports:**
    Submerged volume, $V = L \times B \times h = 10 \times 6 \times 0.5 = 30 \, \text{m}^3$.
    Buoyant force (and thus total weight) $W = \rho g V = 1000 \times 9.81 \times 30 = 294300 \, \text{N}$.
    This means the total weight of the pontoon + load is 294300 N.

    Now consider the CG location: "The center of gravity of the pontoon and its load is 0.2 m above the bottom of the pontoon."
    Depth of pontoon = 3m. So the bottom is at z=0, top at z=3.
    The water surface is at z=0.5m.
    The center of buoyancy (B) is at the centroid of the submerged rectangle (10m x 6m) at a depth of 0.5m. So, B is at z = 0.5m / 2 = 0.25m from the bottom.
    The center of gravity (G) is at z = 0.2m from the bottom.

    Vertical distance $BG = |z_B - z_G| = |0.25 \, \text{m} - 0.2 \, \text{m}| = 0.05 \, \text{m}$.

4.  **Calculate the second moment of area of the waterplane ($I$):**
    The waterplane is a rectangle of 10 m x 6 m. The tilt is assumed to be about the longitudinal axis (along the length).
    Width of waterplane, $2b = 6 \, \text{m} \implies b = 3 \, \text{m}$.
    Length of waterplane, $L = 10 \, \text{m}$.
    $$ I = \frac{L (2b)^3}{12} = \frac{10 \times (6)^3}{12} = \frac{10 \times 216}{12} = 10 \times 18 = 180 \, \text{m}^4 $$

5.  **Calculate the metacentric radius ($BM$):**
    $$ BM = \frac{I}{V} = \frac{180 \, \text{m}^4}{30 \, \text{m}^3} = 6 \, \text{m} $$

6.  **Calculate the metacentric height ($GM$):**
    $$ GM = BM - BG = 6 \, \text{m} - 0.05 \, \text{m} = 5.95 \, \text{m} $$

**Answer to Problem 1:** The metacentric height of the pontoon is 5.95 m. The positive value indicates stable equilibrium.

---

**Problem 2 (Analytical):**

A solid cylinder of diameter 2 m and length 3 m floats vertically in oil of specific gravity 0.8. The weight of the cylinder is 150 kN. Determine the metacentric height of the cylinder.

**Solution:**

Given:
Diameter of cylinder, $D = 2 \, \text{m} \implies$ Radius, $r = 1 \, \text{m}$
Length of cylinder, $L = 3 \, \text{m}$
Specific gravity of oil, $S_{oil} = 0.8$
Density of water, $\rho_{water} = 1000 \, \text{kg/m}^3$
Density of oil, $\rho_{oil} = S_{oil} \times \rho_{water} = 0.8 \times 1000 = 800 \, \text{kg/m}^3$
Weight of cylinder, $W = 150 \, \text{kN} = 150 \times 1000 \, \text{N} = 150000 \, \text{N}$.

1.  **Calculate the submerged volume ($V$):**
    The weight of the cylinder is supported by the buoyant force.
    $W = F_B = \rho_{oil} g V$
    $150000 \, \text{N} = 800 \, \text{kg/m}^3 \times 9.81 \, \text{m/s}^2 \times V$
    $V = \frac{150000}{800 \times 9.81} \approx 19.368 \, \text{m}^3$

2.  **Calculate the submerged depth ($h$):**
    The submerged volume is a cylinder of radius $r=1$m and submerged depth $h$.
    $V = \frac{\pi D^2}{4} \times h = \frac{\pi (2)^2}{4} \times h = \pi h$
    $19.368 \, \text{m}^3 = \pi h$
    $h = \frac{19.368}{\pi} \approx 6.166 \, \text{m}$.

    *Wait!* The length of the cylinder is only 3 m. This means the cylinder must be fully submerged or floating with a part above the surface. Let's check the calculation.

    $V = 19.368 \, \text{m}^3$. The total volume of the cylinder is $V_{total} = \pi r^2 L = \pi (1)^2 \times 3 = 3\pi \approx 9.425 \, \text{m}^3$.
    Since the required submerged volume ($19.368 \, \text{m}^3$) is greater than the total volume of the cylinder ($9.425 \, \text{m}^3$), this implies the cylinder will **sink**.

    *Let's re-read the problem statement carefully:* "A solid cylinder...floats vertically". This implies it *is* floating. If it's floating, then the buoyant force must equal its weight.
    If the cylinder floats, the submerged volume must be less than or equal to its total volume.

    Let's assume the problem meant the cylinder floats with a certain draught. If the weight is 150 kN, and it floats in oil, the submerged volume is calculated as above. The fact that the required submerged volume exceeds the total volume indicates an issue with the problem statement itself or my interpretation.

    **Possible error in problem statement or my assumptions:**
    *   Perhaps the "solid cylinder" is meant to be a hollow one, but it's stated as solid.
    *   Perhaps the weight is incorrect, or the oil density is incorrect.

    **Let's assume the problem intended for the cylinder to float, and the weight of 150 kN is correct, and it floats in oil of SG 0.8.** This implies the cylinder must be partially submerged. The calculated submerged volume is derived from the weight.

    Let's check if the cylinder is denser than the oil.
    Volume of cylinder = $9.425 \, \text{m}^3$.
    Weight of cylinder = $150000 \, \text{N}$.
    Mass of cylinder = $150000 \, \text{N} / 9.81 \, \text{m/s}^2 \approx 15290.5 \, \text{kg}$.
    Density of cylinder = Mass / Volume = $15290.5 \, \text{kg} / 9.425 \, \text{m}^3 \approx 1622 \, \text{kg/m}^3$.
    Since the density of the cylinder (1622 kg/m³) is greater than the density of the oil (800 kg/m³), the cylinder will indeed sink.

    **Assuming the problem implies the cylinder floats, there must be a mistake in the given values.**

    **Let's re-frame the problem to make it solvable:**
    "A solid cylinder of diameter 2 m and length 3 m floats vertically in oil of specific gravity 0.8, with 2 m of its length submerged."

    **If this were the case:**
    Submerged depth, $h = 2 \, \text{m}$.
    Submerged volume, $V = \pi r^2 h = \pi (1)^2 \times 2 = 2\pi \, \text{m}^3$.
    Weight of cylinder, $W = \rho_{oil} g V = 800 \, \text{kg/m}^3 \times 9.81 \, \text{m/s}^2 \times 2\pi \, \text{m}^3 \approx 49300 \, \text{N}$ or 49.3 kN.
    This weight (49.3 kN) is different from the given 150 kN.

    **Let's proceed with the original problem statement and assume the "floats vertically" is the key and work backward or point out the inconsistency.**

    If the cylinder is to float, its weight must be equal to the buoyant force. The only way this works is if the stated weight of 150 kN is achievable with a submerged volume of the cylinder.

    **Let's assume the weight (150 kN) is correct, and the cylinder is floating, which implies the density of the fluid or the cylinder's dimensions are such that it floats.** If it's floating vertically, then the submerged volume must be such that $W = F_B$.

    **Let's assume the problem intended the cylinder to float at a specific draught such that the weight is supported.**
    Weight $W = 150000 \, \text{N}$.
    Submerged volume $V = 19.368 \, \text{m}^3$.
    This volume is greater than the cylinder's total volume.

    **Conclusion for Problem 2:** The provided parameters (cylinder dimensions, weight, and fluid density) indicate that the cylinder will sink rather than float. Therefore, the concept of metacentric height for a floating body does not apply in this scenario as stated.

    **However, if we MUST calculate GM assuming it *could* float with some equilibrium submerged volume, we would proceed as follows (hypothetically):**

    Assume the cylinder *does* float at some submerged depth $h$ such that $W = \rho_{oil} g (\pi r^2 h)$.
    And assume the weight is actually, say, 50 kN instead of 150 kN, so it floats.
    If $W = 50000 \, \text{N}$:
    $50000 = 800 \times 9.81 \times (\pi \times 1^2 \times h)$
    $h = \frac{50000}{800 \times 9.81 \times \pi} \approx 2.026 \, \text{m}$ (This is less than 3m, so it floats).

    Now calculate GM for this hypothetical case:
    *   Waterplane area ($A$): The waterplane is the cross-section of the cylinder, which is a circle of radius $r=1$ m.
        $A = \pi r^2 = \pi (1)^2 = \pi \, \text{m}^2$.
    *   Second moment of area of the waterplane about the axis of tilt (diameter):
        For a circle, the second moment of area about a diameter is $I = \frac{\pi D^4}{64} = \frac{\pi (2r)^4}{64} = \frac{\pi (16r^4)}{64} = \frac{\pi r^4}{4}$.
        $I = \frac{\pi (1)^4}{4} = \frac{\pi}{4} \, \text{m}^4$.
    *   Submerged volume $V = 2.026\pi \, \text{m}^3$.
    *   Metacentric Radius ($BM$):
        $$ BM = \frac{I}{V} = \frac{\pi/4}{2.026\pi} = \frac{1}{4 \times 2.026} \approx \frac{1}{8.104} \approx 0.123 \, \text{m} $$
    *   Metacentric Height ($GM$):
        For a cylinder floating vertically, the center of buoyancy (B) is at the centroid of the submerged portion. The submerged portion is a cylinder of height $h$. So, B is at $h/2$ from the bottom.
        Let's assume the cylinder's CG (G) is at its geometric center, i.e., at $L/2 = 3/2 = 1.5$ m from the bottom.
        $BG = |z_B - z_G| = |h/2 - L/2| = |2.026/2 - 1.5| = |1.013 - 1.5| = |-0.487| = 0.487 \, \text{m}$.
        $$ GM = BM - BG = 0.123 \, \text{m} - 0.487 \, \text{m} = -0.364 \, \text{m} $$
        Since GM is negative, the cylinder would be unstable in this hypothetical scenario.

    **This illustrates the importance of consistent problem data.**

---

**Problem 3 (Experimental):**

A ship has a displacement of 10,000 tonnes. When a weight of 50 tonnes is moved across the deck through a distance of 10 m, the ship heels by 5 degrees. If the length of the plumb line used to measure the angle of heel is 15 m, determine the metacentric height of the ship.

**Solution:**

Given:
Displacement (Weight) of ship, $W = 10000 \, \text{tonnes} = 10000 \times 1000 \, \text{kg}$.
Weight moved, $w = 50 \, \text{tonnes} = 50 \times 1000 \, \text{kg}$.
Distance moved, $x = 10 \, \text{m}$.
Angle of heel, $\theta = 5^\circ$.
Length of plumb line, $L_p = 15 \, \text{m}$.

We use the formula derived from equating the moments:
$w \times x = W \times GM \sin \theta$

1.  **Calculate the moment due to the shifted weight:**
    $M_{overturning} = w \times x = (50 \times 1000 \, \text{kg}) \times 10 \, \text{m} = 500000 \, \text{kg m}$
    Using force $w \times g = 50000 \times 9.81 = 490500 \, \text{N}$.
    $M_{overturning} = 490500 \, \text{N} \times 10 \, \text{m} = 4905000 \, \text{Nm}$.

2.  **Calculate the restoring moment (using GM):**
    $M_{restoring} = W \times GM \sin \theta$
    $W = 10000 \times 1000 \, \text{kg} \times 9.81 \, \text{m/s}^2 = 98100000 \, \text{N}$.
    $\sin(5^\circ) \approx 0.08716$

3.  **Equate moments and solve for GM:**
    $4905000 \, \text{Nm} = 98100000 \, \text{N} \times GM \times 0.08716$
    $GM = \frac{4905000}{98100000 \times 0.08716} \approx \frac{4905000}{8550400} \approx 0.5737 \, \text{m}$

**Alternative Calculation using $y$:**
First, calculate the horizontal displacement $y$ of the plumb bob.
$\tan \theta = y / L_p$
$\tan(5^\circ) \approx 0.08749$
$y = L_p \tan \theta = 15 \, \text{m} \times 0.08749 \approx 1.312 \, \text{m}$.

Now, the formula $GM = \frac{w \times x \times L_p}{W \times y}$:
$GM = \frac{(50 \times 1000 \, \text{kg}) \times 10 \, \text{m} \times 15 \, \text{m}}{(10000 \times 1000 \, \text{kg}) \times 1.312 \, \text{m}}$
$GM = \frac{50000 \times 10 \times 15}{10000000 \times 1.312} = \frac{7500000}{13120000} \approx 0.5716 \, \text{m}$

The slight difference is due to rounding $\sin(5^\circ)$ vs $\tan(5^\circ)$. Using $\tan$ is generally preferred if $y$ is measured.

**Answer to Problem 3:** The metacentric height of the ship is approximately 0.572 m.

---

### 7. Practice Questions

1.  A rectangular box-shaped barge of length 15 m, width 8 m, and depth 4 m floats in fresh water. It is loaded with cargo such that its total weight is 3000 kN. The center of gravity of the barge and its cargo is located 1.0 m above the bottom. If the barge is submerged to a depth of 2 m, calculate its metacentric height.
    (Assume $\rho_{fresh water} = 1000 \, \text{kg/m}^3$, $g = 9.81 \, \text{m/s}^2$).

2.  A ship has a displacement of 15,000 tonnes. A weight of 60 tonnes is shifted transversely across the deck at a distance of 12 m from the centreline. This causes the ship to heel by 4 degrees. Calculate the metacentric height of the ship. Assume the length of the plumb line to be 20 m.
    (Assume 1 tonne = 1000 kg).

---

### 8. Answers to Practice Questions

**Answer 1:**

Given:
$L = 15 \, \text{m}$, $B = 8 \, \text{m}$, $D = 4 \, \text{m}$
Total weight $W = 3000 \, \text{kN} = 3000 \times 1000 \, \text{N} = 3 \times 10^6 \, \text{N}$.
Submerged depth $h = 2 \, \text{m}$.
CG is 1.0 m above the bottom.
$\rho_{water} = 1000 \, \text{kg/m}^3$, $g = 9.81 \, \text{m/s}^2$.

1.  **Submerged Volume ($V$):**
    $V = L \times B \times h = 15 \, \text{m} \times 8 \, \text{m} \times 2 \, \text{m} = 240 \, \text{m}^3$.
    *Check if weight is consistent with submerged volume:*
    $W_{calculated} = \rho g V = 1000 \times 9.81 \times 240 = 2354400 \, \text{N} \approx 2354.4 \, \text{kN}$.
    The given weight (3000 kN) is higher than what the barge can support at 2m draught in fresh water. This indicates an inconsistency in the problem statement.

    **Assuming the submerged depth of 2m is correct, and the barge is floating:**
    Then the weight supported is $2354.4 \, \text{kN}$. Let's use this for calculations.
    $W = 2354400 \, \text{N}$.

2.  **Center of Buoyancy (B):**
    B is at the centroid of the submerged rectangle.
    Depth of B from the bottom = $h/2 = 2/2 = 1 \, \text{m}$.

3.  **Center of Gravity (G):**
    G is 1.0 m above the bottom.

4.  **Distance BG:**
    $BG = |z_B - z_G| = |1.0 \, \text{m} - 1.0 \, \text{m}| = 0 \, \text{m}$.
    This means the center of gravity and center of buoyancy coincide at the same vertical level.

5.  **Second moment of area of waterplane ($I$):**
    Waterplane dimensions: $L = 15 \, \text{m}$, Width $B = 8 \, \text{m}$.
    Axis of tilt is longitudinal. Width $2b = 8 \, \text{m} \implies b = 4 \, \text{m}$.
    $I = \frac{L (2b)^3}{12} = \frac{15 \times (8)^3}{12} = \frac{15 \times 512}{12} = 15 \times 42.666... = 640 \, \text{m}^4$.

6.  **Metacentric Radius ($BM$):**
    $BM = \frac{I}{V} = \frac{640 \, \text{m}^4}{240 \, \text{m}^3} = \frac{64}{24} = \frac{8}{3} \approx 2.667 \, \text{m}$.

7.  **Metacentric Height ($GM$):**
    $GM = BM - BG = 2.667 \, \text{m} - 0 \, \text{m} = 2.667 \, \text{m}$.

**Answer 1 (with corrected assumption on weight):** The metacentric height is approximately 2.667 m.

---

**Answer 2:**

Given:
Displacement $W = 15000 \, \text{tonnes} = 15000 \times 1000 \, \text{kg}$.
Shifted weight $w = 60 \, \text{tonnes} = 60 \times 1000 \, \text{kg}$.
Distance of shift $x = 12 \, \text{m}$.
Angle of heel $\theta = 4^\circ$.
Length of plumb line $L_p = 20 \, \text{m}$.

Using the formula $GM = \frac{w \times x}{W \sin \theta}$:
$w = 60000 \, \text{kg}$
$W = 15000000 \, \text{kg}$
$\sin(4^\circ) \approx 0.06976$

$GM = \frac{(60000 \, \text{kg}) \times 12 \, \text{m}}{(15000000 \, \text{kg}) \times 0.06976}$
$GM = \frac{720000}{1046400} \approx 0.6881 \, \text{m}$.

**Answer 2:** The metacentric height of the ship is approximately 0.688 m.

---

### 9. Important Points to Remember

*   **Stability depends on GM:** GM > 0 for stability, GM < 0 for instability, GM = 0 for neutral equilibrium.
*   **Analytical Method:** Requires knowledge of the geometry of the body and the fluid density. Relies on the formula $GM = BM - BG$, where $BM = I/V$.
*   **Experimental Method:** Useful when geometry is complex. It relies on observing the angle of heel due to a known shift of weight.
*   **Metacentric Radius (BM):** Depends on the second moment of area of the waterplane ($I$) and the submerged volume ($V$).
*   **BG:** The vertical distance between the center of buoyancy and the center of gravity.
*   **Waterplane:** The shape of the body at the water surface is critical for determining $I$.
*   **Axis of Tilt:** The metacentric height depends on the axis about which the body is tilted. For ships, it's usually the longitudinal axis.
*   **Small Angle Approximation:** The derivations for metacentric height assume small angles of tilt ($\theta$).

---
