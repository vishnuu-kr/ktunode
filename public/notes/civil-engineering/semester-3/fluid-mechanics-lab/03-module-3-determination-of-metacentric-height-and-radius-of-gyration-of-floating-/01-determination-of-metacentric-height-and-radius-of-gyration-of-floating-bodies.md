---
title: "Determination of metacentric height and radius of gyration of floating bodies."
subject: "FLUID MECHANICS LAB"
module: "Module 3: Determination of metacentric height and radius of gyration of floating bodies."
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba8108da"
status: "completed"
scrapedAt: "2026-05-20T18:40:51.310Z"
---
# Fluid Mechanics Lab: Module 3 - Metacentric Height and Radius of Gyration

## 1. Introduction to Stability of Floating Bodies

This module focuses on understanding and experimentally determining two crucial parameters that govern the stability of floating bodies: the **metacentric height** and the **radius of gyration**. A stable floating body will return to its original upright position after being slightly disturbed.

### Key Concepts:

*   **Buoyancy:** The upward force exerted by a fluid that opposes the weight of an immersed or floating object. It is equal to the weight of the fluid displaced by the object (Archimedes' Principle).
*   **Center of Buoyancy (B):** The point through which the buoyant force acts. It is the centroid of the displaced volume of fluid.
*   **Center of Gravity (G):** The point through which the total weight of the body acts.
*   **Metacenter (M):** A point on the vertical centerline of a floating body, which is the intersection of the vertical line through the new center of buoyancy (B') and the original vertical centerline.
*   **Metacentric Height (GM):** The vertical distance between the center of gravity (G) and the metacenter (M). This is the primary indicator of initial stability for small angles of heel.

### Archimedes' Principle:

For a floating body, the buoyant force ($F_B$) must equal the weight of the body ($W$).

$F_B = \rho_f \times V_{sub} \times g$

Where:
*   $\rho_f$ is the density of the fluid
*   $V_{sub}$ is the submerged volume of the body
*   $g$ is the acceleration due to gravity

## 2. Determination of Metacentric Height (GM)

The metacentric height is a measure of the initial stability of a floating body. A positive GM indicates stability, a zero GM indicates neutral equilibrium, and a negative GM indicates instability.

### Theoretical Basis:

When a floating body is heeled (tilted) by an angle $\theta$, the center of buoyancy shifts from its original position B to a new position B'. The buoyant force still acts vertically upwards through B'. The weight of the body acts vertically downwards through G.

For small angles of heel:
The moment created by the buoyant force and the weight, which tends to restore the body to its upright position, is called the **righting moment**.

Righting Moment ($M_R$) = Buoyant Force × Horizontal distance between the lines of action of the buoyant force and the weight.
$M_R = F_B \times GM \times \sin\theta$

Since $F_B = W$ for a floating body,
$M_R = W \times GM \times \sin\theta$

For small angles, $\sin\theta \approx \theta$ (in radians), so:
$M_R = W \times GM \times \theta$

The restoring torque per unit angle of heel is $W \times GM$. Therefore, $GM$ is directly proportional to the righting moment for a given weight and angle.

### Experimental Method (Rolling Period Method):

This is a common laboratory method to determine GM.

**Principle:** The period of oscillation (rolling) of a floating body is related to its metacentric height. For small oscillations, the motion is approximately simple harmonic motion (SHM).

**Derivation:**
Consider a ship-like hull. When tilted by a small angle $\theta$, the metacentric height $GM$ determines the restoring moment.
The moment of inertia ($I$) of the body about the axis of rotation (the longitudinal axis of rolling) is required.
For SHM, the angular acceleration ($\alpha$) is related to the angular displacement ($\theta$) by:
$\alpha = -\omega^2 \theta$
Where $\omega$ is the angular velocity.

The equation of motion is:
$I \alpha = -W \times GM \times \theta$
$I (-\omega^2 \theta) = -W \times GM \times \theta$
$\omega^2 = \frac{W \times GM}{I}$

The time period of oscillation ($T$) is related to the angular velocity by:
$T = \frac{2\pi}{\omega}$
So, $\omega = \frac{2\pi}{T}$

Substituting this into the equation for $\omega^2$:
$(\frac{2\pi}{T})^2 = \frac{W \times GM}{I}$
$\frac{4\pi^2}{T^2} = \frac{W \times GM}{I}$

Rearranging to find GM:
$GM = \frac{I \times 4\pi^2}{W \times T^2}$

**Experimental Procedure:**

1.  **Prepare the Floating Body:** Typically, a pontoon or a hull model is used. It should be capable of floating freely in water.
2.  **Determine the Weight (W):** This is usually done by suspending the body and measuring its weight.
3.  **Determine the Moment of Inertia (I):**
    *   **Case 1: With Added Masses:** Place known masses ($m$) at known distances ($d$) from the longitudinal axis of rolling. The total moment of inertia ($I_{total}$) will be the moment of inertia of the body about the rolling axis ($I_0$) plus the moment of inertia of the added masses about the same axis.
        $I_{total} = I_0 + 2 \times m \times d^2$ (since masses are added on both sides).
    *   **Case 2: Without Added Masses (if I0 is needed):** If you need the moment of inertia of the body itself ($I_0$), you might need to use a torsional pendulum or other methods if it's not easily calculable from geometry. However, in the context of GM determination, we are usually interested in the total moment of inertia.
4.  **Introduce a Small Heel:** Gently displace the body to one side by a small angle.
5.  **Measure the Rolling Period (T):** Release the body and measure the time for a certain number of complete oscillations (e.g., 10 oscillations). Calculate the period ($T$) by dividing the total time by the number of oscillations. Repeat this for several small angles of heel and calculate the average period.
6.  **Calculate GM:** Use the formula derived above.

### Example Calculation (Rolling Period Method):

**Given:**
*   Weight of the pontoon ($W$) = 50 N
*   Moment of inertia of the pontoon about its longitudinal axis of rolling ($I_0$) = 0.05 kg.m²
*   Two masses ($m$) = 1 kg each are added at a distance ($d$) = 0.2 m from the longitudinal axis.

**Calculation:**

1.  **Total Moment of Inertia ($I_{total}$):**
    $I_{total} = I_0 + 2 \times m \times d^2$
    $I_{total} = 0.05 \text{ kg.m}^2 + 2 \times 1 \text{ kg} \times (0.2 \text{ m})^2$
    $I_{total} = 0.05 + 2 \times 0.04 = 0.05 + 0.08 = 0.13 \text{ kg.m}^2$

2.  **Measure Rolling Period (T):** Assume the experimentally measured period for these added masses is $T = 1.5$ seconds.

3.  **Calculate GM:**
    $GM = \frac{I_{total} \times 4\pi^2}{W \times T^2}$
    $GM = \frac{0.13 \text{ kg.m}^2 \times 4 \times (3.14159)^2}{50 \text{ N} \times (1.5 \text{ s})^2}$
    $GM = \frac{0.13 \times 4 \times 9.8696}{50 \times 2.25}$
    $GM = \frac{5.1322}{112.5}$
    $GM \approx 0.0456 \text{ m}$

**Interpretation:** The metacentric height of the pontoon with the added masses is approximately 0.0456 meters (or 4.56 cm). This indicates a stable condition.

## 3. Determination of Radius of Gyration (k)

The radius of gyration is a property of a body or distribution of mass that relates its moment of inertia to its mass. It is the distance from the axis of rotation at which, if all the mass of the body were concentrated, the moment of inertia would be the same as that of the actual body.

### Theoretical Basis:

The moment of inertia ($I$) of a body about a given axis can be expressed as:
$I = m \times k^2$

Where:
*   $m$ is the total mass of the body
*   $k$ is the radius of gyration about that axis

### Experimental Method (Using Rolling Period):

The radius of gyration can be determined if the metacentric height and the period of oscillation are known, and vice-versa. However, the primary method to *find* the radius of gyration often involves a direct measurement of the moment of inertia, or it can be derived from the rolling period experiment if $I_0$ is the unknown.

**Scenario: Determining $k$ when $GM$ is known (or determined by other means):**

If you have a known metacentric height ($GM$) for a body of weight ($W$) and you measure its rolling period ($T$) with *known* added masses ($m$ at distance $d$), you can calculate the total moment of inertia ($I_{total}$). Then, you can find the moment of inertia of the body alone ($I_0$) if you know the moment of inertia of the added masses.

$I_{total} = I_0 + I_{added\_masses}$
$W \times GM = I_{total} \times (\frac{T}{2\pi})^2$ - this is incorrect, the formula is $GM = \frac{I_{total} \times 4\pi^2}{W \times T^2}$

Let's rephrase: If you have a body and you want to find its radius of gyration $k_0$ about the rolling axis.

1.  **Determine GM:** This can be done experimentally by adding known weights ($m$ at distance $d$) and measuring the rolling period ($T$). From this, calculate $I_{total}$ and then $GM$.
2.  **Calculate $I_0$:** If you know $GM$ for the pontoon *without* added masses, you can use its weight $W$ and its rolling period $T_0$ (if measured) to find $I_0$. Or, if you measure $T$ with added masses, you can calculate $I_{total}$, and if $I_{added\_masses}$ is known, then $I_0 = I_{total} - I_{added\_masses}$.
3.  **Calculate $k_0$:** Once you have $I_0$ and the mass of the body ($m_{body}$), you can calculate the radius of gyration:
    $k_0 = \sqrt{\frac{I_0}{m_{body}}}$

**More Direct Approach for Radius of Gyration:**

Often, if the geometry of the body is simple (e.g., a rectangular pontoon), the moment of inertia can be calculated theoretically. For a rectangular pontoon of length $L$, width $B$, and height $H$, with mass $m_{body}$ distributed uniformly, the moment of inertia about its longitudinal axis of rolling (passing through the center of gravity) is approximately:

$I_0 \approx m_{body} \times \frac{L^2 + H^2}{12}$ (This is an approximation, depends on the exact geometry and distribution of mass)
For a thin rectangular plate of width $B$ and length $L$ rotated about its centroidal axis parallel to $L$: $I = \frac{m_{body} L^2}{12}$. If the body is more like a box, the moment of inertia about the longitudinal axis passing through the center of gravity might be closer to: $I_0 = m_{body} (\frac{B^2 + H^2}{12})$.

**The relationship is often used the other way around:** Using the rolling period to find GM, and then using GM to assess stability, rather than using the rolling period to find k directly without prior knowledge of GM or I. However, if the problem implies determining k *from* the lab setup:

**Revised Experimental Approach for k:**

1.  **Determine the mass of the pontoon ($m_{body}$).**
2.  **Measure the rolling period ($T$) of the pontoon *without* any added masses.**
3.  **Calculate the moment of inertia ($I_0$) of the pontoon using its weight ($W$) and the measured period ($T_0$) and an *assumed* or independently known $GM_0$.** This is circular.

**Let's consider the setup:** You usually have a pontoon of known geometry and mass. You can calculate its theoretical $I_0$. Then you use the rolling period method to determine $GM$.

**To determine $k$ directly from the rolling period experiment:**

1.  **Determine the mass of the pontoon ($m_{body}$).**
2.  **Measure the rolling period ($T$) for different known added masses ($m$) at known distances ($d$).**
3.  **For each case, calculate the total moment of inertia ($I_{total}$).**
    $I_{total} = W_{body} \times GM \times (\frac{T}{2\pi})^2$. This still requires knowing GM.

**The most practical way the lab exercise connects to $k$ is:**

*   You can **calculate** the theoretical radius of gyration ($k_{theoretical}$) of the pontoon based on its geometry and mass distribution.
*   You can **determine** the metacentric height ($GM$) experimentally using the rolling period method.
*   You can then **verify** your theoretical moment of inertia and thus $k$ by relating it back to the $GM$ and measured $T$.

**Example:**

*   Pontoon dimensions: Length = 0.5 m, Width = 0.2 m, Height = 0.1 m. Mass ($m_{body}$) = 10 kg.
*   Let's assume the mass is uniformly distributed. The pontoon is like a rectangular prism. The moment of inertia about the longitudinal axis passing through its center of gravity is given by:
    $I_0 = m_{body} \times (\frac{\text{width}^2 + \text{height}^2}{12})$
    $I_0 = 10 \text{ kg} \times (\frac{(0.2 \text{ m})^2 + (0.1 \text{ m})^2}{12})$
    $I_0 = 10 \times (\frac{0.04 + 0.01}{12}) = 10 \times (\frac{0.05}{12}) \approx 0.0417 \text{ kg.m}^2$

*   Now, using the radius of gyration formula:
    $k_0 = \sqrt{\frac{I_0}{m_{body}}}$
    $k_0 = \sqrt{\frac{0.0417 \text{ kg.m}^2}{10 \text{ kg}}}$
    $k_0 = \sqrt{0.00417} \approx 0.0646 \text{ m}$

*   **Experimental verification:** If you then perform the rolling period experiment, measure $T$, and calculate $GM$, you should be able to work backwards to see if $I_{total}$ calculated from $GM$ and $T$ is consistent with $I_0$ (calculated from $k_0$) plus $I_{added\_masses}$.

## 4. Importance of Metacentric Height and Radius of Gyration

### Metacentric Height (GM):

*   **Stability:** A larger positive GM generally means greater initial stability against small disturbances. However, too large a GM can lead to very stiff rolling, making the vessel uncomfortable for passengers.
*   **Angle of Loll:** If GM is too small, the vessel may be unstable at larger angles of heel.
*   **Design Parameter:** It's a critical design parameter for ships, boats, and other floating structures.

### Radius of Gyration (k):

*   **Rotational Inertia:** It quantifies how the mass is distributed relative to the axis of rotation. A larger $k$ means more of the mass is further from the axis, resulting in a larger moment of inertia.
*   **Oscillation Period:** Directly influences the period of oscillation. A larger $k$ (for a given GM and W) leads to a longer period of oscillation.
*   **Dynamic Response:** Important in understanding the dynamic behavior of the floating body, such as its response to waves and its rolling characteristics.

## 5. Practice Questions and Exercises

**Question 1:**
A floating pontoon of weight 200 N has a metacentric height of 0.08 m. If it is made to oscillate about its longitudinal axis, what will be its approximate period of oscillation if its moment of inertia about this axis is 0.5 kg.m²?

**Answer 1:**
We use the formula: $GM = \frac{I \times 4\pi^2}{W \times T^2}$
Rearranging for T: $T = \sqrt{\frac{I \times 4\pi^2}{W \times GM}}$
Given: $W = 200$ N, $GM = 0.08$ m, $I = 0.5$ kg.m²
$T = \sqrt{\frac{0.5 \times 4 \times (3.14159)^2}{200 \times 0.08}}$
$T = \sqrt{\frac{0.5 \times 4 \times 9.8696}{16}}$
$T = \sqrt{\frac{19.7392}{16}}$
$T = \sqrt{1.2337} \approx 1.11$ seconds

**Question 2:**
A vessel has a weight of 10,000 kN. Its radius of gyration about the rolling axis is 7.5 m. During a rolling test, the time for 10 oscillations was measured to be 150 seconds. Calculate the metacentric height of the vessel. Assume the moment of inertia of the added masses to be negligible compared to the vessel's own moment of inertia for this calculation.

**Answer 2:**
First, calculate the period of oscillation ($T$).
$T = \frac{150 \text{ s}}{10 \text{ oscillations}} = 15$ seconds

The mass of the vessel ($m$) is $W/g = 10,000 \text{ kN} / 9.81 \text{ m/s}^2 \approx 1019.37 \text{ kN.s}^2/\text{m}$ (or kg, for practical purposes here, let's use mass).
$m \approx \frac{10,000 \text{ kN}}{9.81 \text{ m/s}^2} \approx 1019.37 \text{ tonnes} \times 1000 \text{ kg/tonne} \approx 1.019 \times 10^6 \text{ kg}$.
For simpler calculations, if $W$ is in Newtons, $m = W/g$. If $W$ is in kN, $W \times 1000$ is in Newtons.
Let's assume W = 10,000 kN = $10,000 \times 1000$ N = $10^7$ N.
$m = \frac{10^7 \text{ N}}{9.81 \text{ m/s}^2} \approx 1.019 \times 10^6$ kg.

Now calculate the moment of inertia ($I$) using the radius of gyration:
$I = m \times k^2$
$I \approx (1.019 \times 10^6 \text{ kg}) \times (7.5 \text{ m})^2$
$I \approx 1.019 \times 10^6 \times 56.25 \approx 57.32 \times 10^6 \text{ kg.m}^2$

Now use the formula for GM:
$GM = \frac{I \times 4\pi^2}{W \times T^2}$
$GM = \frac{(5.732 \times 10^7 \text{ kg.m}^2) \times 4 \times (3.14159)^2}{(10^7 \text{ N}) \times (15 \text{ s})^2}$
$GM = \frac{5.732 \times 10^7 \times 9.8696}{10^7 \times 225}$
$GM = \frac{5.655 \times 10^8}{2.25 \times 10^9}$
$GM \approx 0.251$ m

**Question 3:**
You are conducting a metacentric height experiment using a pontoon. You measure the rolling period to be 2.0 seconds when two 2 kg masses are placed at 0.3 m from the center. The weight of the pontoon is 80 N, and its moment of inertia about the rolling axis is 0.03 kg.m². Calculate the metacentric height.

**Answer 3:**
1.  **Calculate the total moment of inertia ($I_{total}$):**
    $I_{added\_masses} = 2 \times m \times d^2 = 2 \times 2 \text{ kg} \times (0.3 \text{ m})^2 = 4 \times 0.09 = 0.36 \text{ kg.m}^2$
    $I_{total} = I_0 + I_{added\_masses} = 0.03 \text{ kg.m}^2 + 0.36 \text{ kg.m}^2 = 0.39 \text{ kg.m}^2$

2.  **Calculate GM:**
    $GM = \frac{I_{total} \times 4\pi^2}{W \times T^2}$
    $GM = \frac{0.39 \text{ kg.m}^2 \times 4 \times (3.14159)^2}{80 \text{ N} \times (2.0 \text{ s})^2}$
    $GM = \frac{0.39 \times 39.478}{80 \times 4}$
    $GM = \frac{15.396}{320}$
    $GM \approx 0.0481$ m

## 6. Important Points to Remember

*   **Stability depends on GM:** Positive GM = Stable, Zero GM = Neutral, Negative GM = Unstable.
*   **Small Angles:** The rolling period method is based on the assumption of small angles of heel and oscillation.
*   **Moment of Inertia:** Accurate determination of the moment of inertia is crucial for accurate GM calculation.
*   **Center of Gravity vs. Center of Buoyancy:** The relative positions of G and B and their shift during heeling are fundamental to stability.
*   **Radius of Gyration:** It's a measure of mass distribution and directly affects rotational inertia and oscillation periods.
*   **Practical Considerations:** Ensure the pontoon is floating freely, measure periods accurately, and use consistent units.

This concludes the study notes for Module 3. Good luck with your laboratory work!
