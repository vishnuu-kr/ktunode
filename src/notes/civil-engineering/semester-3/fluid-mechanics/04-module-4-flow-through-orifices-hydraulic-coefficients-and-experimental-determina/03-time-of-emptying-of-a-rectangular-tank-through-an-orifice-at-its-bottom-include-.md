---
title: "time of emptying of a rectangular tank through an orifice at its bottom (include numerical problems)"
subject: "FLUID MECHANICS"
module: "Module 4: Flow through Orifices: hydraulic coefficients and experimental determination of hydraulic coefficients (associated numerical problems)"
branch: "Civil Engineering"
semester: 3
topicId: "689f15ca56b5e963ba810702"
status: "completed"
scrapedAt: "2026-05-20T18:40:41.577Z"
---
# Fluid Mechanics: Module 4 - Flow through Orifices

## Topic: Time of Emptying of a Rectangular Tank through an Orifice at its Bottom

This module focuses on understanding the flow of fluids through orifices, particularly the time it takes to empty a tank. We will delve into the theoretical aspects and how to determine these times experimentally.

---

### 1. Understanding the Concepts:

Before we dive into calculating the time of emptying, let's establish the foundational concepts.

#### 1.1. Orifice:

*   **Definition:** An orifice is a small opening or hole in the side or bottom of a tank or vessel through which a fluid flows out.
*   **Types:**
    *   **Sharp-edged orifice:** The edges are sharp and square, leading to a well-defined vena contracta.
    *   **Rounded orifice:** The edges are rounded, reducing the contraction effect.
    *   **Dredge orifice:** A specific type with a protruding edge.
    *   **Square orifice, triangular orifice, etc.:** Classified by their shape.

#### 1.2. Vena Contracta:

*   **Definition:** As a fluid exits an orifice, the jet of fluid contracts in cross-section for a short distance downstream of the orifice. The point of maximum contraction is called the vena contracta.
*   **Significance:** The area of the vena contracta is smaller than the actual area of the orifice, which affects the flow rate.

#### 1.3. Hydraulic Coefficients:

These coefficients are dimensionless ratios that account for the losses and deviations from ideal flow when a fluid passes through an orifice.

*   **Coefficient of Velocity ($C_v$)**:
    *   **Definition:** The ratio of the actual velocity of the fluid jet at the vena contracta to the theoretical velocity calculated by Torricelli's theorem.
    *   **Formula:** $C_v = \frac{\text{Actual velocity}}{\text{Theoretical velocity}}$
    *   **Theoretical Velocity:** $v_{th} = \sqrt{2gh}$, where $h$ is the height of the fluid above the orifice.
    *   **Actual Velocity:** $v_{act} = C_v \sqrt{2gh}$
    *   **Typical Value:** $C_v$ is generally between 0.95 and 0.99 for sharp-edged orifices.

*   **Coefficient of Contraction ($C_c$)**:
    *   **Definition:** The ratio of the area of the vena contracta to the actual area of the orifice.
    *   **Formula:** $C_c = \frac{\text{Area of vena contracta}}{\text{Area of orifice}}$
    *   **Typical Value:** $C_c$ is generally between 0.61 and 0.65 for sharp-edged orifices.

*   **Coefficient of Discharge ($C_d$)**:
    *   **Definition:** The ratio of the actual discharge (flow rate) through the orifice to the theoretical discharge. It represents the overall efficiency of the orifice in allowing flow.
    *   **Formula:** $C_d = \frac{\text{Actual discharge}}{\text{Theoretical discharge}}$
    *   **Theoretical Discharge ($Q_{th}$):** $Q_{th} = A_{orifice} \times v_{th} = A_{orifice} \sqrt{2gh}$, where $A_{orifice}$ is the area of the orifice.
    *   **Actual Discharge ($Q_{act}$):** $Q_{act} = A_{vena\_contracta} \times v_{act} = (C_c A_{orifice}) \times (C_v \sqrt{2gh}) = C_d A_{orifice} \sqrt{2gh}$
    *   **Relationship:** $C_d = C_v \times C_c$
    *   **Typical Value:** $C_d$ is generally between 0.60 and 0.65 for sharp-edged orifices.

#### 1.4. Torricelli's Theorem:

*   **Statement:** The velocity of efflux of a fluid through a sharp-edged orifice at a depth $h$ below the free surface is the same as the velocity that a body would acquire in falling freely from rest through a height $h$.
*   **Formula:** $v_{th} = \sqrt{2gh}$

---

### 2. Time of Emptying a Rectangular Tank:

Consider a rectangular tank with base dimensions $L \times B$ and an initial height of liquid $H$. A small orifice of area $a$ is located at the bottom of the tank.

#### 2.1. Derivation of the Formula:

Let:
*   $A$ be the cross-sectional area of the tank ($A = L \times B$).
*   $h$ be the height of the liquid at any time $t$.
*   $dh$ be the infinitesimal change in height of the liquid.
*   $dt$ be the infinitesimal time taken for the height to change by $dh$.
*   $a$ be the area of the orifice.
*   $C_d$ be the coefficient of discharge for the orifice.

**Step 1: Consider a small drop in liquid level.**
In a small time interval $dt$, let the liquid level drop by $dh$.
The volume of liquid that leaves the tank in time $dt$ is given by:
$dV_{out} = Q_{act} \times dt = C_d \times a \times \sqrt{2gh} \times dt$

**Step 2: Relate the volume of liquid leaving to the drop in liquid level.**
The volume of liquid that leaves the tank is also equal to the volume of the liquid layer that has been removed from the top of the tank.
$dV_{out} = -A \times dh$ (The negative sign indicates that the height is decreasing).

**Step 3: Equate the two expressions for $dV_{out}$ and rearrange.**
$-A \times dh = C_d \times a \times \sqrt{2gh} \times dt$

Rearrange to get $dt$:
$dt = -\frac{A}{C_d \times a \times \sqrt{2gh}} dh$

**Step 4: Integrate to find the total time of emptying.**
To find the total time $T$ required to empty the tank from an initial height $H$ to a final height of 0, we integrate the equation with respect to $h$ from $H$ to 0.

$T = \int_{0}^{T} dt = \int_{H}^{0} -\frac{A}{C_d \times a \times \sqrt{2gh}} dh$

$T = \frac{A}{C_d \times a \times \sqrt{2g}} \int_{0}^{H} h^{-1/2} dh$

The integral of $h^{-1/2}$ is $2h^{1/2}$.

$T = \frac{A}{C_d \times a \times \sqrt{2g}} \left[ 2h^{1/2} \right]_{0}^{H}$

$T = \frac{A}{C_d \times a \times \sqrt{2g}} (2\sqrt{H} - 2\sqrt{0})$

$T = \frac{2A\sqrt{H}}{C_d \times a \times \sqrt{2g}}$

$T = \frac{A}{a C_d} \sqrt{\frac{2H}{g}}$

**Alternatively, we can write it as:**

$T = \frac{A}{a C_d} \times \frac{\sqrt{2H}}{\sqrt{g}} = \frac{A}{a C_d} \times \frac{\sqrt{2}\sqrt{H}}{\sqrt{g}} = \frac{A}{a C_d} \times \frac{\sqrt{2}\sqrt{H}\sqrt{g}}{g}$

$T = \frac{A}{a C_d} \frac{\sqrt{2gH}}{g}$

Since $v_{th} = \sqrt{2gH}$ (theoretical velocity at the initial height $H$) and $Q_{th, initial} = a \sqrt{2gH}$ (theoretical discharge at initial height $H$):

$T = \frac{A}{a C_d} \frac{\sqrt{2gH}}{g} = \frac{A}{C_d a \sqrt{2g}} \sqrt{2H}$

**Key Formula for Time of Emptying:**

$T = \frac{A}{a C_d} \sqrt{\frac{2H}{g}}$

Where:
*   $T$ = Time of emptying (seconds)
*   $A$ = Cross-sectional area of the tank (m²)
*   $a$ = Area of the orifice (m²)
*   $C_d$ = Coefficient of discharge of the orifice
*   $H$ = Initial height of the liquid in the tank (m)
*   $g$ = Acceleration due to gravity (approximately 9.81 m/s²)

---

### 3. Time to Empty to a Certain Depth:

If we need to find the time to empty the tank from an initial height $H_1$ to a final height $H_2$, the formula becomes:

$T = \frac{A}{a C_d} \left( \sqrt{\frac{2H_1}{g}} - \sqrt{\frac{2H_2}{g}} \right)$

$T = \frac{A}{a C_d \sqrt{g}} \left( \sqrt{2H_1} - \sqrt{2H_2} \right)$

---

### 4. Experimental Determination of Hydraulic Coefficients:

Hydraulic coefficients are often determined experimentally. The most common method is to measure the actual discharge over a period of time.

#### 4.1. Method:

1.  **Set up:** A tank with a known orifice is used. The dimensions of the tank and the orifice are accurately measured.
2.  **Fill the tank:** Fill the tank to a known initial height $H$.
3.  **Measure discharge:** Allow the fluid to flow out through the orifice. Measure the volume of fluid discharged ($V$) in a measured time interval ($t$) using a collecting tank or flow meter.
4.  **Calculate actual discharge:** $Q_{actual} = \frac{V}{t}$.
5.  **Calculate theoretical discharge:** Using Torricelli's theorem, calculate the theoretical discharge at the average head during the time interval. However, for a more accurate determination of $C_d$, it's better to use the time of emptying formula or measure discharge over a small time interval where the head change is minimal.

**Determining $C_d$ using time of emptying:**
If the total time of emptying $T$ is measured experimentally for a tank filled to a height $H$, then $C_d$ can be calculated using the derived formula:

$C_d = \frac{A}{aT} \sqrt{\frac{2H}{g}}$

**Determining $C_v$ and $C_c$:**
Once $C_d$ is known, and if the area of the vena contracta ($a_{vena\_contracta}$) is measured experimentally (e.g., by collecting the jet in a container and measuring its diameter at the point of maximum contraction), then:

*   $C_c = \frac{a_{vena\_contracta}}{a_{orifice}}$
*   $C_v = \frac{C_d}{C_c}$

---

### 5. Numerical Problems and Solutions:

**Problem 1:**
A rectangular tank with a base of 2 m x 3 m is filled with water to a height of 1.5 m. A sharp-edged orifice of diameter 5 cm is provided at the bottom. Calculate the time required to empty the tank. Assume the coefficient of discharge ($C_d$) is 0.62.
(g = 9.81 m/s²)

**Solution:**

Given:
*   Length of tank, $L = 3$ m
*   Width of tank, $B = 2$ m
*   Base area of tank, $A = L \times B = 3 \times 2 = 6$ m²
*   Initial height of water, $H = 1.5$ m
*   Diameter of orifice, $d = 5$ cm $= 0.05$ m
*   Radius of orifice, $r = d/2 = 0.025$ m
*   Area of orifice, $a = \pi r^2 = \pi (0.025)^2 = \pi \times 0.000625 \approx 0.001963$ m²
*   Coefficient of discharge, $C_d = 0.62$
*   Acceleration due to gravity, $g = 9.81$ m/s²

Using the formula for the time of emptying:
$T = \frac{A}{a C_d} \sqrt{\frac{2H}{g}}$

$T = \frac{6}{0.001963 \times 0.62} \sqrt{\frac{2 \times 1.5}{9.81}}$

$T = \frac{6}{0.00121706} \sqrt{\frac{3}{9.81}}$

$T = 4930.5 \times \sqrt{0.3058}$

$T = 4930.5 \times 0.5530$

$T \approx 2726.6$ seconds

**Therefore, the time required to empty the tank is approximately 2726.6 seconds.**

**Problem 2:**
A rectangular tank measuring 10 m long, 5 m wide, and 4 m deep is filled with a liquid. A sharp-edged orifice of area 0.01 m² is fitted at the bottom. The coefficient of discharge is 0.60. Calculate the time required to empty the tank from a height of 4 m to 1 m.
(g = 9.81 m/s²)

**Solution:**

Given:
*   Length of tank, $L = 10$ m
*   Width of tank, $B = 5$ m
*   Base area of tank, $A = L \times B = 10 \times 5 = 50$ m²
*   Initial height of liquid, $H_1 = 4$ m
*   Final height of liquid, $H_2 = 1$ m
*   Area of orifice, $a = 0.01$ m²
*   Coefficient of discharge, $C_d = 0.60$
*   Acceleration due to gravity, $g = 9.81$ m/s²

Using the formula for the time to empty from $H_1$ to $H_2$:
$T = \frac{A}{a C_d} \left( \sqrt{\frac{2H_1}{g}} - \sqrt{\frac{2H_2}{g}} \right)$

$T = \frac{50}{0.01 \times 0.60} \left( \sqrt{\frac{2 \times 4}{9.81}} - \sqrt{\frac{2 \times 1}{9.81}} \right)$

$T = \frac{50}{0.006} \left( \sqrt{\frac{8}{9.81}} - \sqrt{\frac{2}{9.81}} \right)$

$T = 8333.33 \left( \sqrt{0.8155} - \sqrt{0.2039} \right)$

$T = 8333.33 (0.9030 - 0.4515)$

$T = 8333.33 \times 0.4515$

$T \approx 3763.9$ seconds

**Therefore, the time required to empty the tank from 4 m to 1 m is approximately 3763.9 seconds.**

**Problem 3:**
A rectangular tank with a base area of 10 m² is to be emptied through an orifice at the bottom. The initial head of water is 5 m. If the time taken to empty the tank completely is experimentally found to be 2000 seconds, and the coefficient of discharge of the orifice is 0.60, determine the area of the orifice.
(g = 9.81 m/s²)

**Solution:**

Given:
*   Base area of tank, $A = 10$ m²
*   Initial height of water, $H = 5$ m
*   Time of emptying, $T = 2000$ seconds
*   Coefficient of discharge, $C_d = 0.60$
*   Acceleration due to gravity, $g = 9.81$ m/s²

We need to find the area of the orifice, $a$. Rearranging the time of emptying formula:
$T = \frac{A}{a C_d} \sqrt{\frac{2H}{g}}$

$a = \frac{A}{T C_d} \sqrt{\frac{2H}{g}}$

$a = \frac{10}{2000 \times 0.60} \sqrt{\frac{2 \times 5}{9.81}}$

$a = \frac{10}{1200} \sqrt{\frac{10}{9.81}}$

$a = 0.008333 \times \sqrt{1.0194}$

$a = 0.008333 \times 1.00965$

$a \approx 0.00841$ m²

**Therefore, the area of the orifice is approximately 0.00841 m².**

---

### 6. Important Points to Remember:

*   The time of emptying is inversely proportional to the coefficient of discharge ($C_d$) and the area of the orifice ($a$). A smaller orifice or a lower $C_d$ will result in a longer emptying time.
*   The time of emptying is directly proportional to the base area of the tank ($A$) and the square root of the initial height of the liquid ($\sqrt{H}$).
*   The derivation assumes a constant $C_d$ and that the orifice area is much smaller than the tank's cross-sectional area, so the velocity of the liquid surface drop is negligible compared to the velocity of efflux.
*   For practical calculations, it's crucial to use the correct coefficient of discharge for the given orifice type and fluid.
*   Units must be consistent throughout the calculations.

---

This concludes Module 4's topic on the time of emptying of a rectangular tank through an orifice. Understanding these concepts and formulas will allow you to analyze and predict fluid behavior in such scenarios.
