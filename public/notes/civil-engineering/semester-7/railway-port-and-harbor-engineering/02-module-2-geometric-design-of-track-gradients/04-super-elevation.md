---
title: "super elevation"
subject: "RAILWAY, PORT AND HARBOR ENGINEERING"
module: "Module 2: Geometric design of track : gradients"
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba8115f7"
status: "completed"
scrapedAt: "2026-05-20T19:00:55.798Z"
---
# Railway, Port and Harbor Engineering: Module 2 - Geometric Design of Track: Gradients

## Topic: Super Elevation

### 1. Learning Outcomes Covered:

By the end of this topic, you should be able to:

*   Understand the necessity of super elevation in railway track design.
*   Define super elevation and its purpose.
*   Explain the forces acting on a train on a curved track and the role of super elevation in balancing them.
*   Derive the formula for calculating the equilibrium speed and the required super elevation.
*   Determine the permissible super elevation based on various factors.
*   Calculate the equilibrium speed for a given curve with super elevation.
*   Calculate the required super elevation for a given curve and speed.
*   Understand the concept of cant deficiency and cant excess.
*   Discuss the implications of cant deficiency and cant excess on train operation and passenger comfort.
*   Explain the methods of providing super elevation.
*   Discuss the maintenance considerations for super elevated tracks.

### 2. Key Concepts and Definitions:

*   **Curved Track:** A section of railway track that deviates from a straight line.
*   **Centrifugal Force:** An apparent outward force experienced by an object moving in a circular path. In railway engineering, this force acts on the train due to its motion on a curve.
*   **Gravity:** The downward force acting on the train due to its mass.
*   **Super Elevation (Cant/Camber/Banking):** The difference in elevation between the outer rail and the inner rail on a curved track. The outer rail is raised above the inner rail.
*   **Equilibrium Speed:** The speed at which the centrifugal force is perfectly balanced by the component of gravity acting inwards along the canted plane. At equilibrium speed, there is no lateral thrust on the rails.
*   **Equilibrium Condition:** The state where the resultant of centrifugal force and gravity acts perpendicular to the plane of the track, meaning no lateral force is exerted on the rails.
*   **Cant Deficiency:** The condition where the actual speed of the train is higher than the equilibrium speed for the provided super elevation. This results in an outward lateral force on the outer rail.
*   **Cant Excess:** The condition where the actual speed of the train is lower than the equilibrium speed for the provided super elevation. This results in an inward lateral force on the inner rail.
*   **Lateral Thrust:** The horizontal force exerted by the train on the rails due to centrifugal action.
*   **Passenger Comfort:** The degree of comfort experienced by passengers inside a train, significantly influenced by the lateral forces and accelerations.

### 3. Why is Super Elevation Necessary?

When a train travels on a straight track, the forces acting on it are vertical (gravity) and horizontal (if there's acceleration/deceleration). However, on a curved track, an additional force comes into play: the **centrifugal force**.

*   **Without Super Elevation:** On a curved track without super elevation, the centrifugal force acts outwards, horizontally. This force pushes the outer rail away from the inner rail, leading to:
    *   **Wear and Tear:** Increased wear on rails and wheels, particularly on the outer rail.
    *   **Derailment Risk:** High speeds can lead to the train being thrown outwards, causing derailment.
    *   **Passenger Discomfort:** Passengers experience a strong outward push.
    *   **Increased Stress on Track Structure:** The track structure (sleepers, ballast) is subjected to uneven loading.

*   **With Super Elevation:** By raising the outer rail relative to the inner rail, we create a sloped track. This slope allows a component of the gravitational force to act inwards, counteracting the centrifugal force. This is analogous to how banked roads help vehicles negotiate curves.

### 4. Forces Acting on a Train on a Curved Track with Super Elevation:

Consider a train of mass 'm' moving at a speed 'v' on a curve of radius 'R' with super elevation 'e'.

*   **Weight (W):** Acts vertically downwards. $W = mg$, where 'g' is the acceleration due to gravity.
*   **Centrifugal Force ($F_c$):** Acts horizontally outwards. $F_c = \frac{mv^2}{R}$.

When the track is super elevated, the forces can be analyzed by considering the plane of the track.

*   **Component of Weight acting inwards along the plane:** $W \sin \theta = mg \sin \theta$.
*   **Component of Centrifugal Force acting outwards along the plane:** $F_c \cos \theta = \frac{mv^2}{R} \cos \theta$.

For equilibrium, the inward component of weight must balance the outward component of centrifugal force:

$mg \sin \theta = \frac{mv^2}{R} \cos \theta$

$\frac{\sin \theta}{\cos \theta} = \frac{v^2}{gR}$

$\tan \theta = \frac{v^2}{gR}$

**Derivation of Super Elevation Formula:**

Super elevation 'e' is the difference in height between the outer and inner rails. The cant is usually measured at the center of the sleeper.

Let 'G' be the gauge of the track (distance between the inner faces of the two rails).
Let 'D' be the distance between the centers of the rails (approximately equal to gauge 'G').

From the geometry of the banked curve, the angle of inclination $\theta$ can be related to the super elevation 'e' and the distance 'D' between the rails:

$\tan \theta = \frac{e}{D}$

Substituting this into the equilibrium equation:

$\frac{e}{D} = \frac{v^2}{gR}$

$e = \frac{v^2 D}{gR}$

This is the theoretical super elevation required for equilibrium.

In practice, the speed 'v' is often considered in kmph, and the radius 'R' is in meters. We need to convert the units:

*   $v$ (kmph) to $v'$ (m/s): $v' = v \times \frac{1000}{3600} = \frac{5v}{18}$
*   $g \approx 9.81 m/s^2$

So, $e = \frac{(\frac{5v}{18})^2 D}{gR} = \frac{25v^2 D}{324gR}$

To simplify calculations and account for practical considerations, empirical formulas are often used. For Indian Railways, a common formula is:

$e = \frac{Gv^2}{127R}$ (where G is in mm, v in kmph, R in meters, and e is in mm)

Or, more generally, using SI units:

$e = \frac{v^2}{228.7 R}$ (where v is in m/s, R in meters, and e is in meters)

If v is in kmph and R is in meters:

$e = \frac{17 \times v^2}{R}$ (This formula is simplified and used for quick estimations, check specific railway codes for precise values).

**Important Point to Remember:**
The equilibrium speed is the speed at which centrifugal force is perfectly balanced by the component of gravity acting inwards.

**Equilibrium Speed ($v_e$):**
Rearranging the formula $e = \frac{v^2 D}{gR}$ for speed:

$v^2 = \frac{e g R}{D}$

$v = \sqrt{\frac{e g R}{D}}$

### 5. Permissible Super Elevation:

The theoretical super elevation calculated for equilibrium might not always be desirable or practical due to several factors:

*   **Passenger Comfort:** Trains are not always operated at the equilibrium speed. If a train travels slower than the equilibrium speed, passengers will experience an inward push. To maintain comfort, the super elevation is often designed for a speed slightly lower than the maximum permissible speed.
*   **Maximum Permissible Speed:** The maximum speed allowed on a particular track section, determined by track structure, signaling, and other factors.
*   **Cant Deficiency:** The difference between the super elevation required for the actual speed and the provided super elevation. High cant deficiency can lead to passenger discomfort and increased stress on the track.
*   **Cant Excess:** The difference between the provided super elevation and the super elevation required for the actual speed. High cant excess can lead to undesirable forces on the inner rail.
*   **Allowable Cant Deficiency/Excess:** Railway authorities specify maximum allowable values for cant deficiency and excess to ensure passenger comfort and track safety. For example, Indian Railways allows a maximum cant deficiency of 76 mm for broad gauge.
*   **Track Gauge:** The width of the track.
*   **Axle Load:** The load carried by each axle of the train.
*   **Track Structure:** The type of rails, sleepers, and ballast used.

The permissible super elevation is usually a limit based on these factors. For example, on Indian Railways (Broad Gauge), the maximum permissible super elevation is typically around 168 mm.

### 6. Cant Deficiency and Cant Excess:

*   **Cant Deficiency ($\Delta e$):**
    *   Occurs when the actual speed ($v_a$) is greater than the equilibrium speed ($v_e$) for the provided super elevation ($e_p$).
    *   $e_{req}$ (required super elevation for $v_a$) $> e_p$
    *   $\Delta e = e_{req} - e_p = \frac{v_a^2 D}{gR} - e_p$
    *   This means the train is traveling faster than what the provided super elevation can balance. The excess centrifugal force results in an outward push on the outer rail.
    *   **Consequences:** Passenger discomfort (feeling pushed outwards), increased wear on the outer rail, and potential for derailment if the deficiency is too high.

*   **Cant Excess ($EC$):**
    *   Occurs when the actual speed ($v_a$) is less than the equilibrium speed ($v_e$) for the provided super elevation ($e_p$).
    *   $e_{req}$ (required super elevation for $v_a$) $< e_p$
    *   $EC = e_p - e_{req} = e_p - \frac{v_a^2 D}{gR}$
    *   This means the train is traveling slower than the speed for which the super elevation was designed. The component of gravity acting inwards is larger than needed to balance the centrifugal force. The resultant force on the track is inwards.
    *   **Consequences:** Passenger discomfort (feeling pushed inwards), increased wear on the inner rail, and potential for the train to "climb" the inner rail if excess is very high (though less common than outward derailment).

**Rule of Thumb:** Super elevation is typically designed to balance the centrifugal force at approximately 75-80% of the maximum permissible speed to manage cant deficiency and ensure passenger comfort.

### 7. Methods of Providing Super Elevation:

Super elevation is achieved by tilting the track. This is done by varying the depth of ballast under the sleepers.

1.  **Gradual Introduction (Transition Curves):** Super elevation is not applied abruptly at the beginning of a curve. It is gradually increased from zero on the straight section to the full designed value at the point where the circular curve begins. This is achieved using **transition curves (e.g., clothoids)**.
    *   **Function of Transition Curves:** To provide a smooth change in curvature and a gradual introduction of super elevation, preventing sudden shocks and lateral forces on passengers and the track.
    *   **Methods of Providing Super Elevation on Transition Curves:**
        *   **Method A (Whittaker's Method):** The track is rotated about the center of the track. Both rails are raised and lowered equally.
        *   **Method B (Constant Rotation about Inner Rail):** The inner rail remains at its original level, and the outer rail is raised. This is less common due to potential drainage issues.
        *   **Method C (Rotated about Center of Sleeper):** The track is rotated about the center of the sleeper, providing a balanced approach.

2.  **Super Elevation on Circular Curves:** Once the full super elevation is reached on the circular curve, it is maintained consistently throughout the length of the circular curve.

### 8. Maintenance Considerations for Super Elevated Tracks:

*   **Monitoring Super Elevation:** Regular checks are crucial to ensure the provided super elevation is maintained within acceptable limits.
*   **Ballast Compaction:** Uneven settlement of ballast can lead to loss of super elevation.
*   **Sleeper Settlement:** Settlement of sleepers under load can also affect the super elevation.
*   **Rail Wear:** The outer rail in a super elevated curve experiences more wear. Periodic rail grinding and renewal are necessary.
*   **Drainage:** Proper drainage of the track bed is essential, especially with super elevation, to prevent ballast degradation and track instability.
*   **Tamping and Ballast Cleaning:** Routine maintenance activities like tamping and ballast cleaning help maintain track geometry, including super elevation.
*   **Defects Assessment:** Identifying and rectifying defects like rail kinks, sleeper damage, and ballast fouling is vital.

### 9. Examples:

**Example 1: Calculate the equilibrium speed for a curve.**

**Given:**
*   Radius of curve, R = 400 m
*   Gauge of track (distance between centers of rails), D = 1.75 m (for Broad Gauge)
*   Super elevation provided, e = 100 mm = 0.1 m
*   Acceleration due to gravity, g = 9.81 m/s²

**Formula:** $v_e = \sqrt{\frac{e g R}{D}}$

**Calculation:**
$v_e = \sqrt{\frac{0.1 \times 9.81 \times 400}{1.75}}$
$v_e = \sqrt{\frac{3924}{1.75}}$
$v_e = \sqrt{2242.28}$
$v_e \approx 47.35$ m/s

**Convert to kmph:**
$v_e$ (kmph) $= 47.35 \times \frac{18}{5} \approx 170.46$ kmph

**Answer:** The equilibrium speed for this curve with 100 mm super elevation is approximately 170.46 kmph.

**Example 2: Calculate the required super elevation for a given speed and curve.**

**Given:**
*   Radius of curve, R = 300 m
*   Speed of train, v = 120 kmph
*   Gauge of track (distance between centers of rails), D = 1.75 m
*   Acceleration due to gravity, g = 9.81 m/s²

**Convert speed to m/s:**
$v = 120 \times \frac{5}{18} \approx 33.33$ m/s

**Formula:** $e = \frac{v^2 D}{gR}$

**Calculation:**
$e = \frac{(33.33)^2 \times 1.75}{9.81 \times 300}$
$e = \frac{1110.89 \times 1.75}{2943}$
$e = \frac{1944.06}{2943}$
$e \approx 0.6605$ m

**Convert to mm:**
$e \approx 0.6605 \times 1000 \approx 660.5$ mm

**Answer:** The required super elevation is approximately 660.5 mm.

**Note:** This calculated super elevation is very high and likely exceeds permissible limits for passenger comfort or track stability on many railways. This example highlights the need to consider permissible limits.

**Example 3: Determine Cant Deficiency.**

**Given:**
*   A track has a super elevation of 100 mm provided.
*   The maximum permissible speed on this curve is 160 kmph.
*   Radius of curve, R = 300 m
*   Gauge, D = 1.75 m
*   g = 9.81 m/s²

**Step 1: Calculate the equilibrium speed for the provided super elevation.**
From Example 1 (using similar values):
If $e = 100$ mm ($0.1$ m) and $R = 300$ m, $D = 1.75$ m
$v_e = \sqrt{\frac{0.1 \times 9.81 \times 300}{1.75}} \approx 40.85$ m/s $\approx 147.06$ kmph

**Step 2: Calculate the super elevation required for the maximum permissible speed.**
$v = 160$ kmph $\approx 44.44$ m/s
$e_{req} = \frac{v^2 D}{gR} = \frac{(44.44)^2 \times 1.75}{9.81 \times 300} \approx 0.704$ m $\approx 704$ mm

**Step 3: Calculate Cant Deficiency.**
$\Delta e = e_{req} - e_p$
$\Delta e = 704$ mm $- 100$ mm
$\Delta e = 604$ mm

**Answer:** The cant deficiency at 160 kmph is 604 mm. This is a very high deficiency, indicating that the provided super elevation is insufficient for the maximum permissible speed. In practice, the super elevation would be designed for a lower speed or the maximum speed would be reduced.

### 10. Practice Questions:

1.  **Define Super Elevation and explain its primary purpose in railway track design.**
2.  **What are the consequences of not providing super elevation on a curved track?**
3.  **Derive the relationship between super elevation (e), gauge (D), speed (v), radius (R), and acceleration due to gravity (g).**
4.  **Calculate the equilibrium speed in kmph for a curve with a radius of 500 m and a super elevation of 120 mm. Assume a track gauge of 1.676 m (Broad Gauge) and g = 9.81 m/s².**
5.  **For a Broad Gauge track on a curve of 400 m radius, the permissible speed is 140 kmph. Calculate the required super elevation. Is this value likely to be permissible from a passenger comfort perspective? Justify your answer by considering typical allowable cant deficiency.**
6.  **Explain the concepts of Cant Deficiency and Cant Excess. What are the implications of each on train operation and passenger comfort?**
7.  **A train is operating on a curve with 150 mm super elevation at a speed of 120 kmph. The equilibrium speed for this super elevation is calculated to be 100 kmph. Identify whether this situation represents Cant Deficiency or Cant Excess, and calculate its magnitude.**
8.  **Briefly describe two methods of providing super elevation on a railway track.**
9.  **List at least three maintenance considerations for super elevated tracks.**

---

### Answers to Practice Questions:

1.  **Definition and Purpose:** Super elevation (or cant) is the banking of the track on curves, where the outer rail is raised higher than the inner rail. Its primary purpose is to counteract the centrifugal force acting on a moving train, thereby reducing lateral forces on the rails, preventing excessive wear, ensuring passenger comfort, and preventing derailment.

2.  **Consequences without Super Elevation:**
    *   **Excessive Lateral Thrust:** Centrifugal force acts horizontally outwards, pushing the outer rail.
    *   **Increased Wear:** Significant wear on the outer rail and the tread of the outer wheels.
    *   **Passenger Discomfort:** Passengers feel a strong outward push.
    *   **Derailment Risk:** High speeds can lead to the train being thrown off the tracks.
    *   **Uneven Stress:** Increased stress on track components like sleepers and ballast.

3.  **Derivation:**
    *   Forces: Weight (mg) acting vertically downwards, Centrifugal Force ($F_c = \frac{mv^2}{R}$) acting horizontally outwards.
    *   With super elevation 'e' and distance 'D' between rail centers, the angle of inclination $\theta$ is such that $\tan \theta = \frac{e}{D}$.
    *   For equilibrium, the component of gravity acting inwards along the banked plane must balance the component of centrifugal force acting outwards along the banked plane.
    *   $mg \sin \theta = \frac{mv^2}{R} \cos \theta$
    *   $\frac{\sin \theta}{\cos \theta} = \frac{v^2}{gR} \implies \tan \theta = \frac{v^2}{gR}$
    *   Substituting $\tan \theta = \frac{e}{D}$:
    *   $\frac{e}{D} = \frac{v^2}{gR} \implies e = \frac{v^2 D}{gR}$

4.  **Equilibrium Speed Calculation:**
    *   Given: R = 500 m, e = 120 mm = 0.12 m, D = 1.676 m, g = 9.81 m/s²
    *   $v_e = \sqrt{\frac{e g R}{D}} = \sqrt{\frac{0.12 \times 9.81 \times 500}{1.676}}$
    *   $v_e = \sqrt{\frac{588.6}{1.676}} = \sqrt{351.25} \approx 59.27$ m/s
    *   $v_e$ (kmph) $= 59.27 \times \frac{18}{5} \approx 213.37$ kmph

5.  **Required Super Elevation and Permissibility:**
    *   Given: R = 400 m, v = 140 kmph, D = 1.75 m, g = 9.81 m/s²
    *   Convert v to m/s: $v = 140 \times \frac{5}{18} \approx 38.89$ m/s
    *   $e_{req} = \frac{v^2 D}{gR} = \frac{(38.89)^2 \times 1.75}{9.81 \times 400} = \frac{1512.43 \times 1.75}{3924} = \frac{2646.75}{3924} \approx 0.6745$ m
    *   $e_{req} \approx 674.5$ mm
    *   **Permissibility:** This value (674.5 mm) is very high and likely exceeds typical permissible super elevation limits (e.g., ~168 mm for Indian BG). To assess permissibility, consider the concept of cant deficiency. If the maximum permissible super elevation is, say, 168 mm, and we are operating at 140 kmph, we would calculate the cant deficiency. A high required super elevation often means either the maximum speed needs to be reduced or the radius of the curve needs to be increased.

6.  **Cant Deficiency and Excess:**
    *   **Cant Deficiency ($\Delta e$):** Occurs when the actual speed is higher than the equilibrium speed for the provided super elevation. It means the provided super elevation is insufficient.
        *   **Implications:** Passenger discomfort (outward push), increased wear on the outer rail, higher stress on the track structure, potential for derailment if excessive.
    *   **Cant Excess ($EC$):** Occurs when the actual speed is lower than the equilibrium speed for the provided super elevation. It means the provided super elevation is more than what is needed.
        *   **Implications:** Passenger discomfort (inward push), increased wear on the inner rail, potential for the train to climb the inner rail if excessive.

7.  **Identify Deficiency/Excess and Calculate:**
    *   Provided super elevation ($e_p$) = 150 mm
    *   Actual speed ($v_a$) = 120 kmph
    *   Equilibrium speed for $e_p$ ($v_e$) = 100 kmph
    *   Since $v_a > v_e$, this situation represents **Cant Deficiency**.
    *   To calculate the magnitude, we need to find the super elevation required for the actual speed ($e_{req}$) and then calculate $\Delta e = e_{req} - e_p$.
    *   Assuming similar values for R and D as previous examples (e.g., R=300m, D=1.75m):
        *   $e_{req}$ for 120 kmph on a 300m radius curve $\approx 660.5$ mm (from Q5 calculation).
        *   $\Delta e = e_{req} - e_p = 660.5$ mm $- 150$ mm $= 510.5$ mm.
    *   *Correction:* The question implies the equilibrium speed *for the provided 150 mm super elevation* is 100 kmph. This means $e_p = 150$ mm corresponds to $v_e = 100$ kmph.
    *   Now, calculate the required super elevation for the actual speed of 120 kmph ($e_{req}$). Let's assume R=300m and D=1.75m again for demonstration.
    *   $e_{req}$ for 120 kmph $\approx 660.5$ mm.
    *   $\Delta e = e_{req} - e_p = 660.5 \text{ mm} - 150 \text{ mm} = 510.5 \text{ mm}$.
    *   **Answer:** Cant Deficiency. Magnitude is approximately 510.5 mm (based on assumed R and D).

8.  **Methods of Providing Super Elevation:**
    *   **Gradual Introduction using Transition Curves:** Super elevation is smoothly increased from zero on the straight to the full value at the start of the circular curve.
    *   **Providing Super Elevation on Circular Curves:** The full designed super elevation is maintained throughout the length of the circular curve.
    *   *Specific methods within these:* Rotation about the center of the track (Whittaker's), rotation about the inner rail, rotation about the center of the sleeper.

9.  **Maintenance Considerations:**
    *   Regular monitoring of super elevation levels.
    *   Ensuring proper ballast compaction and drainage.
    *   Addressing rail wear on the outer rail.
    *   Rectifying sleeper settlement.
    *   Carrying out tamping and ballast cleaning to maintain geometry.

---
### 11. Important Points to Remember:

*   **Purpose:** Super elevation is crucial for safe and comfortable train operation on curves.
*   **Centrifugal Force Counteraction:** It balances the outward centrifugal force with an inward component of gravity.
*   **Equilibrium Speed:** The ideal speed for a given super elevation where forces are balanced.
*   **Formula:** $e = \frac{v^2 D}{gR}$ is the fundamental relationship.
*   **Units Matter:** Be consistent with units (m/s vs. kmph, meters vs. mm).
*   **Passenger Comfort:** Super elevation is often designed for a speed slightly lower than the maximum permissible speed to manage cant deficiency.
*   **Cant Deficiency vs. Cant Excess:** Understand when each occurs and their implications.
*   **Transition Curves:** Essential for the smooth introduction of super elevation.
*   **Maintenance:** Regular checks and upkeep are vital to ensure the designed super elevation is maintained.

---
