---
title: "Design of horizontal alignment - Stopping sight distance, Overtaking sight distance, super elevation, extra widening, transition curve, length and shift of transition curve, - worked out problems"
subject: "TRANSPORTATION ENGINEERING"
module: "Module 1: Introduction:  Classification of roads"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810dd1"
status: "completed"
scrapedAt: "2026-05-20T18:51:31.873Z"
---
# Transportation Engineering: Module 1 - Introduction & Classification of Roads

## Topic: Design of Horizontal Alignment

This module introduces the fundamental concepts of horizontal alignment design in transportation engineering, focusing on critical sight distances, geometric features like superelevation and widening, and the use of transition curves.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the importance of sight distances in road design for safety.
*   Calculate Stopping Sight Distance (SSD) and Overtaking Sight Distance (OSD).
*   Explain the concept and necessity of superelevation.
*   Calculate superelevation rates and limiting lengths.
*   Understand the purpose and calculation of extra widening.
*   Explain the function of transition curves and their necessity in horizontal curves.
*   Calculate the length and shift of transition curves.
*   Solve practical problems related to the design of horizontal alignment.

---

### 1. Introduction to Horizontal Alignment

Horizontal alignment refers to the horizontal path of a road, which is defined by a series of straight sections (tangents) connected by horizontal curves. The design of horizontal alignment is crucial for:

*   **Safety:** Ensuring adequate visibility and stability for vehicles.
*   **Comfort:** Providing a smooth ride for passengers.
*   **Economy:** Minimizing construction and maintenance costs.
*   **Aesthetics:** Integrating the road with the surrounding landscape.

---

### 2. Sight Distances in Road Design

Sight distance is the length of the roadway ahead that is visible to the driver. It's a critical factor for preventing accidents.

#### 2.1. Stopping Sight Distance (SSD)

**Definition:** The minimum distance required for a driver to perceive a hazard, react, and bring the vehicle to a complete stop before reaching the hazard.

**Factors Affecting SSD:**

*   **Driver's Reaction Time:** The time taken by the driver to perceive and react to a hazard.
*   **Braking Efficiency:** The ability of the vehicle's brakes to slow down the vehicle.
*   **Grade of the Road:** Uphill grades reduce SSD, while downhill grades increase it.
*   **Friction between Tires and Pavement:** Higher friction allows for quicker stopping.

**Formula for SSD:**

$SSD = d_1 + d_2$

Where:
*   $d_1$ = **Braking Distance:** The distance traveled during the perception-reaction time ($t_r$).
*   $d_2$ = **Reaction Distance:** The distance traveled during the braking period.

**IRC (Indian Roads Congress) Recommendations for $t_r$:**

*   For design purposes, $t_r$ is typically taken as **2.5 seconds** for design speeds up to 100 kmph, and 3.0 seconds for higher speeds.

**Formula for $d_1$ (Reaction Distance):**

$d_1 = V \times t_r$

Where:
*   $V$ = Design Speed (in m/s)
*   $t_r$ = Reaction Time (in seconds)

**Formula for $d_2$ (Braking Distance):**

$d_2 = \frac{V^2}{2 \times g \times (f \pm G)}$

Where:
*   $V$ = Design Speed (in m/s)
*   $g$ = Acceleration due to gravity (9.81 m/s²)
*   $f$ = Coefficient of longitudinal friction (depends on speed)
*   $G$ = Percentage grade of the road (expressed as a decimal, positive for upgrade, negative for downgrade)

**Converting kmph to m/s:**

$V (\text{m/s}) = V (\text{kmph}) \times \frac{1000}{3600} = V (\text{kmph}) \times \frac{5}{18}$

**Common IRC Values for Coefficient of Longitudinal Friction ($f$):**

| Design Speed (kmph) | Coefficient of Friction ($f$) |
| :------------------ | :---------------------------- |
| 50                  | 0.38                          |
| 65                  | 0.36                          |
| 80                  | 0.35                          |
| 100                 | 0.34                          |
| 120                 | 0.32                          |

**Worked Out Problem (SSD):**

**Problem:** Calculate the Stopping Sight Distance for a national highway with a design speed of 80 kmph and a grade of +2% (uphill).

**Solution:**

1.  **Convert Speed to m/s:**
    $V = 80 \text{ kmph} \times \frac{5}{18} = 22.22 \text{ m/s}$

2.  **Reaction Time ($t_r$):**
    $t_r = 2.5 \text{ seconds}$

3.  **Reaction Distance ($d_1$):**
    $d_1 = V \times t_r = 22.22 \text{ m/s} \times 2.5 \text{ s} = 55.55 \text{ meters}$

4.  **Coefficient of Friction ($f$) at 80 kmph:**
    $f = 0.35$ (from IRC table)

5.  **Grade ($G$):**
    $G = +2\% = +0.02$

6.  **Braking Distance ($d_2$):**
    $d_2 = \frac{V^2}{2 \times g \times (f + G)}$ (Using '+' for uphill grade)
    $d_2 = \frac{(22.22)^2}{2 \times 9.81 \times (0.35 + 0.02)}$
    $d_2 = \frac{493.73}{19.62 \times 0.37}$
    $d_2 = \frac{493.73}{7.2594} = 67.99 \text{ meters}$

7.  **Stopping Sight Distance (SSD):**
    $SSD = d_1 + d_2 = 55.55 \text{ m} + 67.99 \text{ m} = 123.54 \text{ meters}$

**Therefore, the Stopping Sight Distance required is approximately 123.54 meters.**

---

#### 2.2. Overtaking Sight Distance (OSD)

**Definition:** The minimum distance required for a fast-moving vehicle to overtake a slow-moving vehicle safely. It is the distance visible to the driver of the overtaking vehicle from the moment it starts to change lanes to the moment it returns to its original lane.

**Factors Affecting OSD:**

*   **Speed of the overtaking vehicle.**
*   **Speed of the overtaken vehicle.**
*   **Speed of the oncoming vehicle (if any).**
*   **Acceleration of the overtaking vehicle.**
*   **Rate of change of gradient.**
*   **Lane width.**
*   **Width of the carriageway.**

**Components of OSD (IRC):**

OSD is generally considered to be **three times the SSD** for two-way traffic. However, for detailed design, it is calculated based on the time taken to overtake.

**Time taken for Overtaking ($T$):**

$T = t_1 + t_2 + t_3$

Where:
*   $t_1$ = Time taken for the driver to perceive and decide to overtake (same as reaction time, $t_r$).
*   $t_2$ = Time taken to accelerate the overtaking vehicle and clear the overtaken vehicle.
*   $t_3$ = Time taken for the oncoming vehicle to reach the position where the overtaking vehicle has rejoined its lane.

**IRC Formula for OSD:**

$OSD = d + 2 \times D$

Where:
*   $d$ = Distance traveled by the overtaking vehicle during the reaction time ($t_1$).
*   $D$ = Distance between the overtaking vehicle and the overtaken vehicle when the overtaking vehicle starts to move.
*   $2D$ = Distance between the overtaken vehicle and the oncoming vehicle when the overtaking vehicle rejoins its lane.

**Simplified IRC Formula for OSD (assuming $V_o$, $V_p$, $V_{op}$ are speeds of overtaking, overtaken, and oncoming vehicles respectively):**

$OSD = V \times T + 2 \times V \times (T - t_1) / 2 \times a \times t_2^2$

This simplified formula is complex. A more practical approach from IRC is:

$OSD = 2.5 \times V + \frac{V \times T}{2}$ (for two-lane roads, assuming a single overtaking maneuver)

Where:
*   $V$ = Design speed of the road (in m/s)
*   $T$ = Total time taken for overtaking (seconds)
*   $V$ is the speed of the overtaking vehicle.
*   The speed of the overtaken vehicle is taken as $V - \Delta V$, where $\Delta V$ is the speed difference.
*   The speed of the oncoming vehicle is also taken as $V$ (worst case).

**Key Assumptions in OSD Calculation (IRC):**

*   The overtaken vehicle travels at a constant speed.
*   The overtaking vehicle accelerates from its initial speed.
*   The oncoming vehicle travels at a constant speed.
*   The speed difference between the overtaking and overtaken vehicle is around 16 kmph.
*   The reaction time ($t_1$) is 2.5 seconds.
*   The acceleration of the overtaking vehicle is around $1.67 \text{ m/s}^2$ (for speeds up to 65 kmph) and $1.07 \text{ m/s}^2$ (for speeds above 65 kmph).
*   The clearance distance between the overtaking and oncoming vehicles is typically 1.5 times the width of the overtaken vehicle.

**Formula for OSD (IRC, simplified):**

$OSD = 0.278 \times V \times T + 2 \times 0.278 \times V \times t_2$ (using V in kmph)
$OSD = 0.278 \times V \times t_1 + 0.278 \times V \times (t_1 + t_2 + t_3)$
$OSD = 0.278 \times V \times t_1 + 2 \times 0.278 \times V \times t_2$

Where:
*   $V$ is the design speed in kmph.
*   $t_1$ = Reaction time (typically 2.5 sec).
*   $t_2$ = Time taken for overtaking by the fast vehicle (can be calculated from acceleration).
*   $t_3$ = Time taken for the oncoming vehicle to travel the distance $2D$.

A more commonly used IRC formula for OSD on two-lane roads is:

$OSD = 0.278 \times V \times t_1 + 2 \times 0.278 \times V \times t_2$

Where:
*   $V$ is the design speed of the road in kmph.
*   $t_1$ is the reaction time (2.5 seconds).
*   $t_2$ is the time to overtake (calculated based on acceleration).
*   The speed of the overtaken vehicle is assumed to be $V - 16$ kmph.
*   The speed of the oncoming vehicle is assumed to be $V$ kmph.

**Let's use the IRC formula for OSD based on the speed difference and acceleration:**

$OSD = V \times t_1 + \frac{V \times T}{2} + \frac{(V - \Delta V) \times T}{2}$
$OSD = d_1 + d_2$

Where:
*   $d_1$ is the distance traveled by the overtaking vehicle during reaction time ($t_1$).
*   $d_2$ is the distance traveled by the overtaking vehicle during its acceleration to overtake and clear the overtaken vehicle, plus the distance traveled by the oncoming vehicle to clear the overtaking vehicle.

$OSD = 0.278 \times V \times t_1 + 2 \times 0.278 \times V \times t_2$ (This is a simplified form, and often used)

$t_2 = \frac{V - V_p}{a}$ (where $V_p$ is the speed of overtaken vehicle and $a$ is acceleration)

**Typical values for $t_2$ (time to overtake for a given speed difference):**

| Design Speed (kmph) | $t_1$ (sec) | $t_2$ (sec) | OSD (m) |
| :------------------ | :---------- | :---------- | :------ |
| 65                  | 2.5         | 11.2        | 500     |
| 80                  | 2.5         | 11.2        | 500     |
| 100                 | 2.5         | 10.5        | 750     |
| 120                 | 2.5         | 10.5        | 900     |

**Worked Out Problem (OSD):**

**Problem:** Calculate the Overtaking Sight Distance for a rural highway with a design speed of 100 kmph. Assume the speed difference between overtaking and overtaken vehicles is 16 kmph, and the acceleration of the overtaking vehicle is $1.07 \text{ m/s}^2$.

**Solution:**

1.  **Design Speed ($V$):**
    $V = 100 \text{ kmph}$

2.  **Reaction Time ($t_1$):**
    $t_1 = 2.5 \text{ seconds}$

3.  **Speed of Overtaken Vehicle ($V_p$):**
    $V_p = V - 16 \text{ kmph} = 100 - 16 = 84 \text{ kmph}$

4.  **Acceleration ($a$):**
    $a = 1.07 \text{ m/s}^2$

5.  **Time taken to overtake ($t_2$):**
    Convert speeds to m/s:
    $V = 100 \text{ kmph} = 100 \times \frac{5}{18} = 27.78 \text{ m/s}$
    $V_p = 84 \text{ kmph} = 84 \times \frac{5}{18} = 23.33 \text{ m/s}$

    $t_2 = \frac{V - V_p}{a} = \frac{27.78 \text{ m/s} - 23.33 \text{ m/s}}{1.07 \text{ m/s}^2} = \frac{4.45}{1.07} = 4.16 \text{ seconds}$

    **(Note:** IRC generally uses a fixed $t_2$ for different speed ranges. The above calculation provides a more precise $t_2$. For exam purposes, using the typical IRC $t_2$ values might be expected if not specified.)

6.  **Calculate OSD using the simplified IRC formula:**
    $OSD = 0.278 \times V \times t_1 + 2 \times 0.278 \times V \times t_2$
    $OSD = 0.278 \times 100 \times 2.5 + 2 \times 0.278 \times 100 \times 4.16$
    $OSD = 695 + 2 \times 115.768$
    $OSD = 695 + 231.54 = 926.54 \text{ meters}$

    **Using the typical IRC OSD value for 100 kmph (which is 750m) is also a valid approach if specific calculations are not required.** The difference arises from the simplified assumptions in the IRC tables versus detailed calculation. For precise design, the detailed calculation is preferred.

**Therefore, the Overtaking Sight Distance required is approximately 926.54 meters (or 750 meters based on standard IRC tables).**

---

### 3. Superelevation ($e$)

**Definition:** The transverse inclination of the pavement on a horizontal curve, which is provided by raising the outer edge of the pavement with respect to the inner edge. This helps to counteract the centrifugal force that acts on a vehicle moving along the curve, thereby reducing the skidding tendency and improving comfort.

**Forces Acting on a Vehicle on a Horizontal Curve:**

1.  **Weight of the vehicle ($W = mg$)** acting vertically downwards.
2.  **Centrifugal force ($F_c = \frac{mV^2}{R}$) ** acting horizontally outwards.
3.  **Normal reaction ($N$)** from the pavement.

On a superelevated curve, the resultant of weight and centrifugal force is balanced by the normal reaction.

**Equilibrium Condition:**

By resolving forces perpendicular to the inclined surface:
$N \cos \theta - F_c \sin \theta = W$
$N \sin \theta + F_c \cos \theta = R_{horizontal}$ (Radial force, centripetal force)

For equilibrium, $R_{horizontal} = F_c$.

By considering the forces, the equilibrium condition for a vehicle on a superelevated curve without side friction is:

$\tan \theta = \frac{F_c}{W} = \frac{mV^2/R}{mg} = \frac{V^2}{gR}$

Where:
*   $\theta$ is the angle of superelevation.
*   $V$ is the speed of the vehicle (m/s).
*   $R$ is the radius of the horizontal curve (m).

Since $\tan \theta \approx \theta$ for small angles, and $\tan \theta = e$ (superelevation rate), we have:

$e = \frac{V^2}{gR}$

**IRC Formula for Superelevation:**

IRC considers both superelevation ($e$) and the lateral coefficient of friction ($f_r$) between the tires and the pavement to counter the centrifugal force.

**Equilibrium Equation:**

$e + f_r = \frac{V^2}{gR}$

Where:
*   $e$ = Rate of superelevation (decimal).
*   $f_r$ = Lateral coefficient of friction (depends on speed).
*   $V$ = Design speed (m/s).
*   $g$ = Acceleration due to gravity (9.81 m/s²).
*   $R$ = Radius of the horizontal curve (m).

**IRC Values for Lateral Coefficient of Friction ($f_r$):**

| Design Speed (kmph) | Lateral Friction ($f_r$) |
| :------------------ | :----------------------- |
| 50                  | 0.15                     |
| 65                  | 0.14                     |
| 80                  | 0.13                     |
| 100                 | 0.12                     |
| 120                 | 0.11                     |

**IRC Recommendations for Superelevation Rate ($e$):**

*   **Maximum allowable superelevation rate ($e_{max}$):**
    *   Plains and Rolling Terrain: 7% (0.07) or 1 in 14.3
    *   Mountainous and Steep Terrain: 10% (0.10) or 1 in 10
    *   Urban Areas: 4% (0.04) or 1 in 25 (can be higher depending on local conditions)

**Calculation of Required Superelevation ($e_{req}$):**

The required superelevation is calculated using the design speed and radius of the curve.

$e_{req} = \frac{V^2}{gR} - f_r$

**Design of Superelevation:**

1.  **Determine the design speed ($V$) and the radius of the horizontal curve ($R$).**
2.  **Calculate the required superelevation:** $e_{req} = \frac{V^2}{gR} - f_r$.
3.  **Compare $e_{req}$ with $e_{max}$.**
    *   If $e_{req} \le e_{max}$, then the calculated superelevation $e = e_{req}$ is adopted.
    *   If $e_{req} > e_{max}$, it means the combination of speed and radius is too severe. The superelevation is restricted to $e_{max}$, and the lateral friction requirement will be higher. In such cases, the radius might need to be increased, or the design speed reduced.

**Limiting Length of Equilibrium Superelevation:**

There's a limiting length of a curve for which full equilibrium superelevation can be maintained without any side friction. This is when $e = 0$ and $f_r = \frac{V^2}{gR}$.

**Design of Superelevation on Curves:**

*   **Full Superelevation:** Provided on curves where the design speed is met, and $e_{req}$ is within limits.
*   **Gradual Introduction of Superelevation:** Superelevation is gradually introduced along the tangent using a transition curve. The superelevation rate is increased from 0 at the tangent point to the design rate at the beginning of the circular curve.

**Worked Out Problem (Superelevation):**

**Problem:** Calculate the required superelevation for a horizontal curve with a radius of 300 meters on a national highway designed for a speed of 80 kmph.

**Solution:**

1.  **Design Speed ($V$):**
    $V = 80 \text{ kmph} = 80 \times \frac{5}{18} = 22.22 \text{ m/s}$

2.  **Radius of Curve ($R$):**
    $R = 300 \text{ meters}$

3.  **Lateral Coefficient of Friction ($f_r$) at 80 kmph:**
    $f_r = 0.13$ (from IRC table)

4.  **Calculate Required Superelevation ($e_{req}$):**
    $e_{req} = \frac{V^2}{gR} - f_r$
    $e_{req} = \frac{(22.22)^2}{9.81 \times 300} - 0.13$
    $e_{req} = \frac{493.73}{2943} - 0.13$
    $e_{req} = 0.1678 - 0.13 = 0.0378$

5.  **Convert to Rate (e.g., 1 in X):**
    $e_{req} = 0.0378$
    Rate $= 1 / 0.0378 \approx 26.46$
    So, superelevation is 1 in 26.46.

6.  **Check against Maximum Superelevation:**
    For national highways in plains, $e_{max}$ is typically 7% (1 in 14.3).
    Since $0.0378 < 0.07$, the calculated superelevation can be provided.

**Therefore, the required superelevation for this curve is 0.0378 or approximately 1 in 26.46.**

---

### 4. Extra Widening ($EW$)

**Definition:** An additional width provided to the normal width of the pavement on a horizontal curve. This is done to compensate for the difficulty of driving a vehicle along a curve and to reduce the tendency of the driver to cut across the inner edge of the curve.

**Reasons for Extra Widening:**

1.  **Increased swept path of the driven vehicle:** The rear wheels follow a path inside the path of the front wheels, especially on curves. This requires more space.
2.  **Psychological effect:** Drivers tend to steer wider on curves than on straight sections.
3.  **Slow-moving vehicles:** When a vehicle is slowed down on a curve, it tends to hug the inner edge, requiring additional space for overtaking or passing.

**Formulas for Extra Widening ($EW$):**

*   **For single-lane, two-lane, and multi-lane pavements:**
    $EW = \frac{nL^2}{2R} - \frac{W^2}{2R}$ (IRC)

    Where:
    *   $n$ = Number of lanes (e.g., 1 for single lane, 2 for two lanes).
    *   $L$ = Length of the wheelbase of the vehicle (usually taken as 6 meters for cars).
    *   $R$ = Radius of the horizontal curve (meters).
    *   $W$ = Width of the carriage way (e.g., 3.5m for single lane, 7m for two lanes).

*   **IRC Recommended Formula (Simplified for most cases):**
    $EW = \frac{nL^2}{2R}$ (This formula considers the increased swept path of the rear wheels)

    Where:
    *   $L$ = Wheelbase (6 meters for cars, 8 meters for trucks).

*   **Another common IRC formula, which also accounts for psychological effects:**
    $EW = \frac{nL^2}{2R}$ (This is often sufficient, but if a broader margin is needed, the psychological effect can be implicitly considered by using a slightly larger $L$ or a specific factor).

**IRC Recommended Values for $EW$ (Minimum Extra Widening):**

| Design Speed (kmph) | Width of Carriage Way (m) | $EW$ for Curves (m) |
| :------------------ | :------------------------ | :------------------ |
| 50                  | Single Lane: 3.5, Two Lanes: 7 | Single Lane: 0.6, Two Lanes: 0.9 |
| 65                  | Single Lane: 3.5, Two Lanes: 7 | Single Lane: 0.75, Two Lanes: 1.0 |
| 80                  | Single Lane: 3.5, Two Lanes: 7 | Single Lane: 0.9, Two Lanes: 1.2 |
| 100                 | Single Lane: 3.5, Two Lanes: 7 | Single Lane: 1.0, Two Lanes: 1.5 |
| 120                 | Single Lane: 3.5, Two Lanes: 7 | Single Lane: 1.2, Two Lanes: 1.8 |

**Important Note:** The minimum extra widening values provided by IRC are generally adequate. The formula is more for checking and understanding the principle.

**When Extra Widening is Applied:**

*   Only on horizontal curves.
*   Not required on curves with very large radii (where the effect is negligible). IRC specifies a limiting radius (e.g., 300m for 7m wide carriageway) below which extra widening is applied.

**Worked Out Problem (Extra Widening):**

**Problem:** Calculate the extra widening required for a two-lane highway (width 7m) on a horizontal curve with a radius of 250 meters, for a design speed of 80 kmph.

**Solution:**

1.  **Number of Lanes ($n$):**
    $n = 2$

2.  **Length of Wheelbase ($L$):**
    Let's assume it's for a car, so $L = 6 \text{ meters}$.

3.  **Radius of Curve ($R$):**
    $R = 250 \text{ meters}$

4.  **Calculate Extra Widening ($EW$) using the IRC formula:**
    $EW = \frac{nL^2}{2R}$
    $EW = \frac{2 \times (6)^2}{2 \times 250}$
    $EW = \frac{2 \times 36}{500}$
    $EW = \frac{72}{500} = 0.144 \text{ meters}$

5.  **Compare with IRC Minimum Extra Widening:**
    For 80 kmph and a two-lane highway, IRC recommends a minimum $EW$ of 1.2 meters.

**Conclusion:** The calculated extra widening of 0.144 meters is very small compared to the IRC recommended minimum of 1.2 meters. Therefore, the minimum extra widening of **1.2 meters** should be provided for this curve. The formula is important to understand the principle, but in practice, the IRC tables for minimum extra widening are often used.

---

### 5. Transition Curve ($T.C.$)

**Definition:** A gradual change in the radius from infinity (on a tangent) to the desired radius of the circular curve. It is provided at the beginning and end of a circular curve.

**Necessity of Transition Curves:**

1.  **Gradual Introduction of Superelevation:** As the vehicle moves onto the curve, the superelevation is gradually increased from zero on the tangent to the design value on the circular curve. This prevents sudden jerks and improves comfort.
2.  **Gradual Introduction of Centrifugal Force:** The centrifugal force also increases gradually, preventing sudden lateral acceleration.
3.  **Improved Comfort and Safety:** Reduces the discomfort and potential danger associated with abrupt changes in the path and forces.
4.  **Reduced Wear and Tear:** Minimizes stress on the vehicle's suspension and tires.

**Types of Transition Curves:**

The ideal transition curve should have a radius that increases linearly with the distance from the tangent point. Several types of curves approximate this:

1.  **Clothoid (or Euler Spiral):** This is the most commonly used and preferred type of transition curve. Its radius $R$ is inversely proportional to the distance $s$ along the curve ($R \propto s$ or $Rs = K^2$, where $K$ is the "clothoid parameter").
2.  **Lemniscate:** Used in some older designs.
3.  **Cosine Curve:** Less common.
4.  **Quartic Parabola:** Used in some specific contexts.

**IRC recommends the use of Clothoid as the transition curve.**

---

### 6. Length of Transition Curve ($L_T$)

**Factors Determining the Length of Transition Curve:**

The length of the transition curve ($L_T$) should be sufficient to allow for:

1.  **Gradual change in deflection angle:** The rate of change of deflection angle should be gradual.
2.  **Gradual introduction of superelevation:** The rate of change of superelevation should be gradual.
3.  **Gradual introduction of centrifugal force:** The rate of change of centrifugal force should be gradual.

**IRC Formulas for Length of Transition Curve ($L_T$):**

IRC provides three conditions to determine the minimum length of the transition curve. The largest of these is adopted:

1.  **Based on Rate of Change of Centrifugal Acceleration:**
    The centrifugal acceleration is $a_c = V^2/R$. For a transition curve, the rate of change of centrifugal acceleration ($da_c/dt$) should be manageable.
    $L_T = \frac{V^3}{cR}$
    Where:
    *   $V$ = Design speed (m/s).
    *   $R$ = Radius of the circular curve (m).
    *   $c$ = Rate of change of centrifugal acceleration. IRC recommends $c = 0.8 \text{ m/s}^3$ for normal grade sections and $0.55 \text{ m/s}^3$ for spiral transition curves. **Use $c = 0.8 \text{ m/s}^3$ for clothoids.**

2.  **Based on Rate of Change of Superelevation:**
    The rate of change of superelevation ($\Delta e / L_T$) should not exceed a certain limit for passenger comfort.
    $L_T = \frac{e \times V}{c_e}$
    Where:
    *   $e$ = Design superelevation rate.
    *   $V$ = Design speed (m/s).
    *   $c_e$ = Rate of change of superelevation. IRC recommends $c_e = 0.0015$ (for $V=80$ kmph) to $0.002$ (for $V=100$ kmph) on plain and rolling terrain, and $0.002$ to $0.003$ on mountainous terrain. **A common value used is $c_e = 0.0015 \times W$ (for 2 lanes, W=7m, gives 0.0105) or directly from IRC tables.**
    A more common and simpler IRC recommendation for rate of change of superelevation is:
    For roads other than urban: $0.0015 \times V$ (V in kmph) or $0.000417 \times V$ (V in m/s)
    For urban roads: $0.001 \times V$ (V in kmph) or $0.000278 \times V$ (V in m/s)

    **Revised IRC formula based on rate of change of superelevation:**
    $L_T = \frac{eV}{21.4}$ (for plain and rolling terrain)
    $L_T = \frac{eV}{14.7}$ (for hilly terrain)
    Where $V$ is in kmph.

3.  **Based on Geometric Considerations (OSD):**
    The length of the transition curve should also be sufficient to provide the necessary Overtaking Sight Distance if OSD is the limiting factor.
    $L_T \ge OSD$ (This is usually a very large value and less restrictive than the other two).

4.  **Minimum Length of Transition Curve:**
    IRC also specifies minimum lengths based on design speed and type of terrain:

    | Design Speed (kmph) | Minimum $L_T$ (m) - Plains & Rolling | Minimum $L_T$ (m) - Mountainous & Steep |
    | :------------------ | :------------------------------------- | :---------------------------------------- |
    | 50                  | 50                                     | 30                                        |
    | 65                  | 75                                     | 45                                        |
    | 80                  | 100                                    | 60                                        |
    | 100                 | 120                                    | 75                                        |
    | 120                 | 150                                    | 90                                        |

**Calculation of Required Length of Transition Curve ($L_T$):**

Calculate $L_T$ using all applicable IRC conditions and take the maximum.

**Worked Out Problem (Length of Transition Curve):**

**Problem:** Calculate the length of the transition curve required for a circular curve of radius 250 meters on a national highway with a design speed of 80 kmph. Assume the terrain is plains.

**Solution:**

1.  **Design Speed ($V$):**
    $V = 80 \text{ kmph}$
    $V (\text{m/s}) = 80 \times \frac{5}{18} = 22.22 \text{ m/s}$

2.  **Radius of Circular Curve ($R$):**
    $R = 250 \text{ meters}$

3.  **Superelevation ($e$):**
    We calculated $e = 0.0378$ for 80 kmph and 250m radius earlier.
    Let's recalculate $e_{max}$ for 80 kmph: $e_{max} = 0.07$.
    Required $e_{req} = \frac{V^2}{gR} - f_r$. If we assume $f_r=0$, $e_{req} = \frac{(22.22)^2}{9.81 \times 250} = 0.201$. Since this is greater than $e_{max}$, we must use $e = e_{max} = 0.07$.
    So, design superelevation $e = 0.07$.

4.  **Calculate $L_T$ based on Condition 1 (Rate of Change of Centrifugal Acceleration):**
    Using $c = 0.8 \text{ m/s}^3$:
    $L_T = \frac{V^3}{cR} = \frac{(22.22)^3}{0.8 \times 250} = \frac{10960.8}{200} = 54.8 \text{ meters}$

5.  **Calculate $L_T$ based on Condition 2 (Rate of Change of Superelevation):**
    For plains, use $L_T = \frac{eV}{21.4}$ (where V is in kmph)
    $L_T = \frac{0.07 \times 80}{21.4} = \frac{5.6}{21.4} = 0.26 \text{ meters}$
    **(Note:** This value is extremely low, indicating that the rate of change of superelevation is not the limiting factor in this case. It's usually the centrifugal acceleration that governs.)

6.  **Calculate $L_T$ based on Condition 3 (OSD):**
    $OSD$ for 80 kmph is approximately 500 meters.
    $L_T \ge OSD \implies L_T \ge 500 \text{ meters}$. This is usually not the governing factor.

7.  **Check Minimum Length for 80 kmph (Plains):**
    Minimum $L_T = 100 \text{ meters}$.

8.  **Determine the final $L_T$:**
    The governing conditions give:
    *   Condition 1: $54.8 \text{ m}$
    *   Condition 2: $0.26 \text{ m}$
    *   Condition 3: $500 \text{ m}$
    *   Minimum: $100 \text{ m}$

    The required length of the transition curve is the maximum of these, which is **100 meters** (governed by the minimum length requirement).

**Therefore, the length of the transition curve required is 100 meters.**

---

### 7. Shift of Transition Curve ($S$)

**Definition:** The horizontal distance by which the transition curve is shifted inwards from the tangent point of the original circular curve, without changing the tangent length.

**Purpose of Shift:**

The shift is introduced to keep the total tangent length the same as it would be for a circular curve alone, while incorporating the transition curves at the beginning and end. This means the tangent point of the actual combined curve (tangent + transition + circular) is shifted inwards.

**Formula for Shift ($S$):**

For a clothoid transition curve, the shift ($S$) is given by:

$S = \frac{L_T^2}{24R}$

Where:
*   $L_T$ = Length of the transition curve (meters).
*   $R$ = Radius of the circular curve (meters).

**Important Points about Shift:**

*   The shift is applied perpendicular to the original tangent at the tangent point.
*   The total length of the combined curve (tangent + transition + circular + transition) remains the same as the original tangent length of the circular curve.
*   The tangent length of the actual layout is $T' = T - S$, where $T$ is the tangent length of the circular curve without transition.
*   The length of the long chord of the transition curve is also affected by the shift.

**Worked Out Problem (Shift of Transition Curve):**

**Problem:** Calculate the shift of the transition curve for the previous problem where $L_T = 100$ meters and $R = 250$ meters.

**Solution:**

1.  **Length of Transition Curve ($L_T$):**
    $L_T = 100 \text{ meters}$

2.  **Radius of Circular Curve ($R$):**
    $R = 250 \text{ meters}$

3.  **Calculate the Shift ($S$):**
    $S = \frac{L_T^2}{24R}$
    $S = \frac{(100)^2}{24 \times 250}$
    $S = \frac{10000}{6000}$
    $S = 1.67 \text{ meters}$

**Therefore, the shift of the transition curve is 1.67 meters.**

---

### 8. Design of Horizontal Curves - Summary and Interrelationship

*   **Design Speed:** The primary input parameter.
*   **Radius of Curve ($R$):** Determined by the design speed, superelevation, and friction.
*   **Superelevation ($e$):** Calculated based on $V$ and $R$, limited by $e_{max}$.
*   **Extra Widening ($EW$):** Added to the normal carriage way width for curves, based on $V$, $n$, $L$, and $R$.
*   **Transition Curve Length ($L_T$):** Determined by various conditions, ensuring gradual changes in forces and superelevation. It should also be greater than or equal to the minimum length specified by IRC.
*   **Shift ($S$):** Introduced to maintain the original tangent length, calculated from $L_T$ and $R$.

---

### Practice Questions:

1.  Calculate the Stopping Sight Distance (SSD) for a highway with a design speed of 65 kmph on a downgrade of 3%. Assume the coefficient of friction is 0.36 and reaction time is 2.5 seconds.
2.  Determine the Overtaking Sight Distance (OSD) for a road with a design speed of 100 kmph. Use the simplified IRC formula and assume typical values for $t_1$ and $t_2$.
3.  Calculate the required superelevation for a horizontal curve with a radius of 400 meters on a road with a design speed of 100 kmph. Assume the terrain is plains. What is the maximum allowable superelevation if the terrain is mountainous?
4.  A two-lane road (width 7m) is being designed with a horizontal curve of radius 200m. If the design speed is 80 kmph, calculate the extra widening required.
5.  Calculate the length of the transition curve required for a circular curve with a radius of 300m on a highway designed for 100 kmph in rolling terrain.
6.  If the length of a transition curve is 120 meters and the radius of the circular curve is 350 meters, calculate the shift of the transition curve.

---

### Answers to Practice Questions:

1.  **SSD Calculation:**
    *   $V = 65 \text{ kmph} = 18.06 \text{ m/s}$
    *   $t_r = 2.5 \text{ s}$
    *   $f = 0.36$
    *   $G = -3\% = -0.03$ (downgrade)
    *   $d_1 = V \times t_r = 18.06 \times 2.5 = 45.15 \text{ m}$
    *   $d_2 = \frac{V^2}{2g(f - G)} = \frac{(18.06)^2}{2 \times 9.81 \times (0.36 - 0.03)} = \frac{326.16}{19.62 \times 0.33} = \frac{326.16}{6.4746} = 50.37 \text{ m}$
    *   $SSD = d_1 + d_2 = 45.15 + 50.37 = 95.52 \text{ meters}$

2.  **OSD Calculation:**
    *   $V = 100 \text{ kmph}$
    *   Assume $t_1 = 2.5 \text{ s}$ and $t_2 = 10.5 \text{ s}$ (typical for 100 kmph)
    *   $OSD = 0.278 \times V \times t_1 + 2 \times 0.278 \times V \times t_2$
    *   $OSD = 0.278 \times 100 \times 2.5 + 2 \times 0.278 \times 100 \times 10.5$
    *   $OSD = 695 + 2 \times 291.9 = 695 + 583.8 = 1278.8 \text{ meters}$
    *   *(Note: The IRC table value for 100 kmph OSD is 750m. The discrepancy arises from simplified assumptions. For exam purposes, using the table value is often acceptable if not explicitly asked for detailed calculation.)*

3.  **Superelevation Calculation:**
    *   $V = 100 \text{ kmph} = 27.78 \text{ m/s}$
    *   $R = 400 \text{ m}$
    *   $f_r$ at 100 kmph = 0.12
    *   $e_{req} = \frac{V^2}{gR} - f_r = \frac{(27.78)^2}{9.81 \times 400} - 0.12 = \frac{771.73}{3924} - 0.12 = 0.1966 - 0.12 = 0.0766$
    *   **Required Superelevation for plains:** Since $0.0766 > 0.07$ ($e_{max}$ for plains), the superelevation must be limited to $e = 0.07$ or 7%.
    *   **Maximum Superelevation for mountainous terrain:** $e_{max}$ for mountainous terrain is 10% or 0.10. In this case, the required superelevation of 0.0766 can be provided, and $e = 0.0766$ or approximately 1 in 13.05.

4.  **Extra Widening Calculation:**
    *   $n = 2$ lanes
    *   $W = 7 \text{ m}$
    *   $R = 200 \text{ m}$
    *   Assume car wheelbase $L = 6 \text{ m}$
    *   $EW = \frac{nL^2}{2R} = \frac{2 \times (6)^2}{2 \times 200} = \frac{72}{400} = 0.18 \text{ meters}$
    *   Minimum EW for 80 kmph (2 lanes) from IRC is 1.2 meters.
    *   Therefore, provide **1.2 meters** of extra widening.

5.  **Length of Transition Curve Calculation:**
    *   $V = 100 \text{ kmph}$
    *   $R = 300 \text{ m}$
    *   Terrain: Rolling.
    *   Superelevation ($e$) for 100 kmph and 300m radius:
        $e_{req} = \frac{(27.78)^2}{9.81 \times 300} - 0.12 = \frac{771.73}{2943} - 0.12 = 0.262 - 0.12 = 0.142$
        Since $0.142 > 0.07$ ($e_{max}$ for plains/rolling), use $e = 0.07$.
    *   Condition 1 ($c=0.8 \text{ m/s}^3$): $L_T = \frac{V^3}{cR} = \frac{(27.78)^3}{0.8 \times 300} = \frac{21433}{240} = 89.3 \text{ meters}$
    *   Condition 2 ($L_T = \frac{eV}{21.4}$): $L_T = \frac{0.07 \times 100}{21.4} = 0.33 \text{ meters}$
    *   Condition 3 ($L_T \ge OSD$): OSD for 100 kmph is 750m. So $L_T \ge 750 \text{ m}$.
    *   Minimum $L_T$ for 100 kmph (Plains/Rolling) = 120 m.
    *   The governing factor is the minimum length. Therefore, $L_T = \mathbf{120 \text{ meters}}$.

6.  **Shift of Transition Curve Calculation:**
    *   $L_T = 120 \text{ meters}$
    *   $R = 350 \text{ meters}$
    *   $S = \frac{L_T^2}{24R} = \frac{(120)^2}{24 \times 350} = \frac{14400}{8400} = 1.71 \text{ meters}$

---

### Important Points to Remember:

*   **Sight Distances are Crucial:** SSD and OSD directly impact safety. Always use correct formulas and IRC values.
*   **Superelevation is for Comfort and Safety:** It balances centrifugal force. Understand the equilibrium equation and the role of friction.
*   **Extra Widening Compensates for Vehicle Geometry:** It accounts for the swept path of vehicles on curves.
*   **Transition Curves Smooth the Ride:** They provide a gradual transition between tangents and curves, introducing superelevation and centrifugal forces gently.
*   **Clothoid is the Standard:** Use clothoid properties for transition curves.
*   **Multiple Conditions for $L_T$:** Always check all IRC conditions for the minimum length of the transition curve.
*   **Practice Problems:** Work through as many problems as possible to solidify your understanding of the formulas and their application.

---
