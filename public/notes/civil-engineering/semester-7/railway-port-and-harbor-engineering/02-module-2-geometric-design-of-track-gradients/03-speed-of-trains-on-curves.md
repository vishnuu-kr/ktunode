---
title: "speed of trains on curves"
subject: "RAILWAY, PORT AND HARBOR ENGINEERING"
module: "Module 2: Geometric design of track : gradients"
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba8115f6"
status: "completed"
scrapedAt: "2026-05-20T19:00:55.052Z"
---
# Railway, Port and Harbor Engineering

## Module 2: Geometric Design of Track: Gradients

### Topic: Speed of Trains on Curves

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental principles governing the speed of trains on curves.
*   Identify the factors that influence the permissible speed on railway curves.
*   Explain the concept of equilibrium cant and its relationship to centrifugal force.
*   Calculate the cant deficiency and cant excess.
*   Apply the relevant formulas to determine safe and comfortable train speeds on curves.
*   Understand the role of super-elevation (cant) in mitigating the effects of centrifugal force.
*   Recognize the limitations and considerations for high-speed rail on curves.

---

### 1. Introduction to Train Speed on Curves

When a train traverses a curve, it experiences a **centrifugal force** acting outwards. This force, if not counteracted, can lead to derailment or discomfort for passengers. To mitigate this, railway tracks on curves are typically **superelevated** or **banked**.

**Key Concepts:**

*   **Centrifugal Force:** An apparent outward force that acts on an object moving in a circular path. It is proportional to the square of the speed and inversely proportional to the radius of the curve.
    *   Formula: $F_c = \frac{mv^2}{R}$
        *   $F_c$: Centrifugal force (Newtons)
        *   $m$: Mass of the train (kg)
        *   $v$: Speed of the train (m/s)
        *   $R$: Radius of the curve (m)

*   **Equilibrium Speed:** The speed at which the centrifugal force is perfectly balanced by the component of gravity acting inwards due to the superelevation. At equilibrium speed, there is no lateral force on the track, and passengers feel no sideways push.

*   **Superelevation (Cant):** The difference in elevation between the outer rail and the inner rail on a curve. It is expressed in terms of the difference in height (usually in mm) or as an angle.

    ![Superelevation Diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Canting_of_railway_tracks.svg/1200px-Canting_of_railway_tracks.svg.png)
    *(Image source: Wikipedia)*

---

### 2. Forces Acting on a Train on a Curve

When a train negotiates a curve with superelevation, the forces acting on it are:

*   **Weight of the Train (W):** Acts vertically downwards ($W = mg$).
*   **Centrifugal Force ($F_c$):** Acts horizontally outwards.
*   **Normal Force (N):** Acts perpendicular to the plane of the track.

When the track is superelevated by an angle $\theta$, the centrifugal force is counteracted by the component of gravity and the normal force.

**Derivation of Equilibrium Speed:**

Consider a train moving at speed $v$ on a curve of radius $R$ with superelevation $\theta$.

The forces acting on the train can be resolved into components parallel and perpendicular to the plane of the track.

*   **Vertical component of Centrifugal Force:** $F_c \sin \theta$ (acting downwards)
*   **Horizontal component of Centrifugal Force:** $F_c \cos \theta$ (acting outwards)
*   **Vertical component of Weight:** $W \cos \theta$ (acting downwards)
*   **Horizontal component of Weight:** $W \sin \theta$ (acting inwards)

For equilibrium (no lateral force on the track):
Horizontal outward force = Horizontal inward force
$F_c \cos \theta = W \sin \theta$

Substitute $F_c = \frac{mv^2}{R}$ and $W = mg$:
$\frac{mv^2}{R} \cos \theta = mg \sin \theta$

Divide by $m$:
$\frac{v^2}{R} \cos \theta = g \sin \theta$

Rearrange for $v^2$:
$v^2 = gR \frac{\sin \theta}{\cos \theta}$
$v^2 = gR \tan \theta$

If the angle of superelevation $\theta$ is small, then $\tan \theta \approx \sin \theta \approx \frac{c}{G}$, where:
*   $c$: Cant (superelevation) in meters
*   $G$: Gauge of the track in meters

Therefore, for small angles:
$v^2 \approx gR \left(\frac{c}{G}\right)$

Solving for $v$:
$v \approx \sqrt{gR \frac{c}{G}}$

This formula gives the equilibrium speed.

---

### 3. Factors Influencing Permissible Speed on Curves

The permissible speed on a curve is not just the equilibrium speed. Several other factors are considered to ensure safety, comfort, and track stability:

*   **Cant Deficiency:** The difference between the equilibrium speed for the maximum permissible cant and the actual speed of the train. A certain level of cant deficiency is acceptable and contributes to passenger comfort.
*   **Cant Excess:** Occurs when a train travels faster than the equilibrium speed for the actual cant. This leads to a net outward force on passengers and can be uncomfortable or unsafe.
*   **Gauge Widening:** On tighter curves, the gauge (distance between inner faces of the rails) is often widened to reduce the chance of the flange of the wheel climbing over the rail.
*   **Transition Curves (Spiral Curves):** These are gradual curves that connect a straight track to a circular curve. They allow for a smooth transition of superelevation, preventing sudden jerks.
*   **Track Geometry and Condition:** The curvature, transition curves, and overall condition of the track (e.g., rail wear, ballast condition) affect the permissible speed.
*   **Type of Rolling Stock:** Different types of trains (passenger, freight, high-speed) have different suspension systems and load distributions, influencing their ability to handle curves.
*   **Passenger Comfort:** To avoid discomfort, a limit is placed on the amount of cant deficiency allowed.
*   **Centrifugal Force and Passenger Comfort:** Passengers experience a sideways force when the train is not at equilibrium speed. This force is generally limited to avoid discomfort and potential safety issues. The allowable lateral acceleration is typically in the range of 0.5 m/s² to 1.0 m/s².

---

### 4. Cant Deficiency and Cant Excess

*   **Cant Deficiency ($\Delta c$):**
    *   This occurs when the actual train speed ($v$) is **less** than the equilibrium speed ($v_e$) for the given cant.
    *   Passengers feel pushed inwards.
    *   It is allowed to a certain extent for passenger comfort.
    *   The equilibrium speed for the actual cant is $v_e = \sqrt{gR \tan \theta}$.
    *   The actual speed is $v$.
    *   The deficiency in cant can be calculated as the cant that would be required to reach equilibrium at speed $v$:
        *   $v^2 = gR \tan (\theta + \Delta \theta)$ where $\Delta \theta$ is the angular deficiency.
        *   For small angles, $\frac{v^2}{gR} \approx \frac{c + \Delta c}{G}$
        *   Rearranging for $\Delta c$:
            $\Delta c = \frac{G v^2}{gR} - c$
    *   Alternatively, expressing in terms of speed difference:
        $v_e^2 - v^2 = gR (\tan \theta - \tan \phi)$ where $\phi$ is the angle for speed $v$.
        For small angles: $gR \frac{c}{G} - v^2 = gR \frac{\Delta c}{G}$
        $\Delta c = \frac{G}{gR} (v_e^2 - v^2)$

    **Simplified Formula for Cant Deficiency (in mm):**
    Let $v$ be in km/h, $R$ in meters, and $c$ in mm.
    $v^2 = \frac{gR \tan \theta_{eq}}{1} \implies v_e^2 = \frac{gR c_{eq}}{G_{m}}$ (where $G_m$ is gauge in meters)
    $v^2 = \frac{gR \tan \theta_{actual}}{1} \implies v_{actual}^2 = \frac{gR c_{actual}}{G_{m}}$

    Consider the actual speed $v$ and the equilibrium cant $c_e$ that would be needed for this speed:
    $v^2 = gR \tan \theta_{eq\_for\_v}$
    $c_{deficiency} = c_{eq\_for\_v} - c_{actual}$
    For small angles, $\tan \theta \approx c/G$.
    $v^2 \approx gR \frac{c_{eq\_for\_v}}{G}$
    $c_{eq\_for\_v} \approx \frac{G v^2}{gR}$

    The permissible cant deficiency, often denoted by $\Delta c_{max}$, is usually specified by railway authorities. This corresponds to a maximum allowable lateral acceleration.
    The lateral acceleration experienced by passengers is $a_y = g \tan(\theta - \phi)$, where $\theta$ is the cant angle and $\phi$ is the angle of inclination due to speed $v$.
    For small angles, $a_y \approx g(\frac{c}{G} - \frac{v^2}{gR})$.
    To have cant deficiency, we want the train speed to be higher than equilibrium for the actual cant.
    $v > v_e \implies$ cant excess.
    $v < v_e \implies$ cant deficiency.

    Let's re-evaluate cant deficiency in terms of the difference between the equilibrium cant for the actual speed and the provided cant.
    Equilibrium cant for speed $v$: $c_{eq\_v} = \frac{G v^2}{gR}$ (where $v$ is in m/s, $R$ in m, $G$ in m).
    Cant Deficiency $\Delta c = c_{eq\_v} - c_{actual}$.
    For comfort, the lateral acceleration $a_y$ is limited.
    $a_y = g \tan \phi - F_c \cos \phi / m$ (This is incorrect. Let's go back to the force balance).

    Consider the forces on a passenger. The resultant force is inclined.
    The vertical force is $mg$. The horizontal force is $mv^2/R$.
    The resultant force has a horizontal component $F_h = mv^2/R$.
    With superelevation $c$, the effective gravity component is $mg \cos\theta$ and the centrifugal force component is $(mv^2/R) \cos\theta$. The track surface is inclined at $\theta$.
    The net horizontal force towards the center is $(mg \sin \theta) - (mv^2/R \cos \theta)$.
    For equilibrium speed $v_e$, $mg \sin \theta = (mv_e^2/R) \cos \theta \implies v_e^2 = gR \tan \theta$.
    For actual speed $v$, the net inward force per unit mass is $g \sin \theta - (v^2/R) \cos \theta$.
    Using small angle approximation: $g(\theta) - (v^2/R)(1) = g(\frac{c}{G}) - \frac{v^2}{R}$.
    This net force per unit mass represents the lateral acceleration experienced by the passenger.
    $a_y = g \frac{c}{G} - \frac{v^2}{R}$
    *   **Cant Deficiency:** If $v < v_e$, then $v^2 < v_e^2 = gR \frac{c}{G}$.
        So, $\frac{v^2}{R} < g \frac{c}{G}$.
        $a_y = g \frac{c}{G} - \frac{v^2}{R} > 0$. This is a net inward acceleration.
        To quantify deficiency, we express it as a cant. What cant $c_{def}$ would be needed to make this acceleration zero?
        $g \frac{c_{def}}{G} - \frac{v^2}{R} = 0 \implies c_{def} = \frac{G v^2}{gR}$.
        The cant deficiency is $\Delta c = c_{def} - c = \frac{G v^2}{gR} - c$.
        This is the amount of cant *missing* for equilibrium at speed $v$.
        The lateral acceleration can be written as $a_y = g \frac{\Delta c}{G}$.

    **Maximum Permissible Cant Deficiency:**
    This is typically limited to ensure passenger comfort. A common limit for conventional railways is around 75-100 mm. For high-speed railways, this limit is much lower.

*   **Cant Excess ($\Delta c$):**
    *   This occurs when the actual train speed ($v$) is **greater** than the equilibrium speed ($v_e$) for the given cant.
    *   Passengers feel pushed outwards.
    *   It is generally **not allowed** for safety and comfort reasons, except for very short durations or very low values on specific types of lines.
    *   $v > v_e \implies v^2 > v_e^2 = gR \frac{c}{G}$.
    *   $a_y = g \frac{c}{G} - \frac{v^2}{R} < 0$. This is a net outward acceleration.
    *   We can express this excess as an equivalent cant:
        $c_{excess} = c - c_{eq\_v} = c - \frac{G v^2}{gR}$.
    *   The lateral acceleration is $a_y = -g \frac{c_{excess}}{G}$.

---

### 5. Calculating Permissible Speed

The maximum permissible speed on a curve is determined by the **maximum permissible cant deficiency**.

Let:
*   $v_{max}$ be the maximum permissible speed (in m/s).
*   $c_{max\_def}$ be the maximum permissible cant deficiency (in meters).
*   $R$ be the radius of the curve (in meters).
*   $G$ be the track gauge (in meters).
*   $g$ be the acceleration due to gravity (approx. 9.81 m/s²).

The relationship is derived from the cant deficiency formula:
$\Delta c = \frac{G v^2}{gR} - c$

For maximum speed, the cant deficiency is at its maximum permissible value:
$c_{max\_def} = \frac{G v_{max}^2}{gR} - c$

Rearranging to solve for $v_{max}^2$:
$\frac{G v_{max}^2}{gR} = c + c_{max\_def}$
$v_{max}^2 = \frac{gR}{G} (c + c_{max\_def})$
$v_{max} = \sqrt{\frac{gR}{G} (c + c_{max\_def})}$

**Important Note:** The cant ($c$) in this formula is the actual superelevation provided on the curve.

**Common Values:**

*   **Track Gauge ($G$):**
    *   Standard Gauge: 1.435 m
    *   Broad Gauge (e.g., India): 1.676 m
*   **Maximum Permissible Cant Deficiency ($\Delta c_{max}$):**
    *   Conventional Railways: 75 mm to 100 mm (0.075 m to 0.100 m)
    *   High-Speed Railways: 25 mm to 50 mm (0.025 m to 0.050 m)
*   **Maximum Permissible Cant ($c_{max}$):** This is limited by track stability, especially for slow-moving heavy freight trains, and is typically around 150-180 mm.

---

### 6. Example Calculations

**Example 1: Conventional Railway**

A train runs on a curve with a radius of 500 m. The track gauge is 1.435 m (standard gauge). The track is superelevated by 100 mm (0.100 m). The maximum permissible cant deficiency for this railway system is 75 mm (0.075 m). Calculate the maximum permissible speed of the train.

**Solution:**

Given:
*   $R = 500$ m
*   $G = 1.435$ m
*   $c = 0.100$ m
*   $c_{max\_def} = 0.075$ m
*   $g = 9.81$ m/s²

Using the formula:
$v_{max} = \sqrt{\frac{gR}{G} (c + c_{max\_def})}$
$v_{max} = \sqrt{\frac{9.81 \times 500}{1.435} (0.100 + 0.075)}$
$v_{max} = \sqrt{\frac{4905}{1.435} (0.175)}$
$v_{max} = \sqrt{3418.12 \times 0.175}$
$v_{max} = \sqrt{598.17}$
$v_{max} \approx 24.46$ m/s

Convert to km/h:
$v_{max} (\text{km/h}) = 24.46 \times \frac{18}{5} \approx 88.06$ km/h

**Therefore, the maximum permissible speed is approximately 88.06 km/h.**

---

**Example 2: High-Speed Railway**

Consider a high-speed train on a curve with a radius of 2000 m. The track gauge is 1.435 m. The superelevation provided is 150 mm (0.150 m). The maximum permissible cant deficiency for high-speed operation is 50 mm (0.050 m). Calculate the maximum permissible speed.

**Solution:**

Given:
*   $R = 2000$ m
*   $G = 1.435$ m
*   $c = 0.150$ m
*   $c_{max\_def} = 0.050$ m
*   $g = 9.81$ m/s²

Using the formula:
$v_{max} = \sqrt{\frac{gR}{G} (c + c_{max\_def})}$
$v_{max} = \sqrt{\frac{9.81 \times 2000}{1.435} (0.150 + 0.050)}$
$v_{max} = \sqrt{\frac{19620}{1.435} (0.200)}$
$v_{max} = \sqrt{13672.47 \times 0.200}$
$v_{max} = \sqrt{2734.49}$
$v_{max} \approx 52.29$ m/s

Convert to km/h:
$v_{max} (\text{km/h}) = 52.29 \times \frac{18}{5} \approx 188.24$ km/h

**Therefore, the maximum permissible speed is approximately 188.24 km/h.**

---

### 7. Speed of Trains on Transition Curves and Circular Curves

Ideally, the superelevation should be increased gradually along the transition curve. This allows trains to maintain a comfortable speed and avoid abrupt changes in lateral forces.

*   **At the start of the transition curve:** Cant is 0.
*   **At the junction of the transition curve and the circular curve:** Cant is maximum (equal to the equilibrium cant for the highest permissible speed on the curve).

The permissible speed on a curve is usually dictated by the tightest curve and the maximum allowable cant deficiency. The transition curves are designed to complement these circular curves.

---

### 8. Considerations for High-Speed Rail

High-speed rail (HSR) presents specific challenges for curve negotiation:

*   **Increased Centrifugal Force:** At higher speeds, centrifugal forces are significantly larger, requiring larger radii and/or greater superelevation.
*   **Reduced Cant Deficiency Limits:** To maintain passenger comfort and safety at very high speeds, the permissible cant deficiency is significantly reduced (e.g., 25-50 mm).
*   **Longer Transition Curves:** Transition curves need to be much longer to allow for a smooth and gradual introduction of superelevation, preventing severe lateral jolts.
*   **Aerodynamic Effects:** High-speed trains also generate significant aerodynamic forces that can influence stability on curves.
*   **Track Stability:** High forces exerted by HSR can lead to increased track wear and require robust track construction and maintenance.

---

### 9. Practice Questions and Exercises

**Question 1:**
Define centrifugal force and superelevation in the context of railway curves.

**Question 2:**
A train is moving on a curve of radius 400 m with a speed of 72 km/h. The track gauge is 1.676 m (Indian broad gauge). If the superelevation is 120 mm, calculate the cant deficiency. (Assume $g = 9.81$ m/s²).

**Question 3:**
What is the primary reason for providing superelevation on railway curves?

**Question 4:**
A railway line has a curve with a radius of 800 m and a standard gauge (1.435 m). The maximum permissible cant deficiency is 80 mm. If the track is superelevated by 120 mm, what is the maximum permissible speed for the train?

**Question 5:**
Discuss the key differences in the design considerations for curves on high-speed rail lines compared to conventional railway lines.

---

### Answers to Practice Questions

**Answer 1:**
*   **Centrifugal Force:** It is an apparent outward force experienced by a train as it moves along a curve. It is directly proportional to the mass of the train and the square of its speed, and inversely proportional to the radius of the curve. Its formula is $F_c = \frac{mv^2}{R}$.
*   **Superelevation (Cant):** It is the tilting of the track on a curve, achieved by raising the outer rail relative to the inner rail. This inward tilt helps to counteract the outward centrifugal force, reducing the lateral thrust on the track and improving passenger comfort.

**Answer 2:**
Given:
*   $R = 400$ m
*   $v = 72$ km/h = $72 \times \frac{5}{18}$ m/s = 20 m/s
*   $G = 1.676$ m
*   $c = 120$ mm = 0.120 m
*   $g = 9.81$ m/s²

First, calculate the equilibrium cant for the given speed and radius. The speed $v$ should be equal to the equilibrium speed $v_e$ for the actual cant $c$.
$v_e^2 = \frac{gR c}{G}$
$c = \frac{G v_e^2}{gR}$ (This is the equilibrium cant needed for speed $v_e$)

We have the actual speed $v$. The equilibrium cant required for this speed is:
$c_{eq\_v} = \frac{G v^2}{gR}$
$c_{eq\_v} = \frac{1.676 \times (20)^2}{9.81 \times 400}$
$c_{eq\_v} = \frac{1.676 \times 400}{3924}$
$c_{eq\_v} = \frac{670.4}{3924} \approx 0.1708$ m

Cant Deficiency $\Delta c = c_{eq\_v} - c_{actual}$
$\Delta c = 0.1708 \text{ m} - 0.120 \text{ m}$
$\Delta c = 0.0508$ m

In millimeters:
$\Delta c = 0.0508 \times 1000 = 50.8$ mm

**Therefore, the cant deficiency is 50.8 mm.**

**Answer 3:**
The primary reason for providing superelevation on railway curves is to counteract the outward centrifugal force acting on the train, thereby:
1.  **Reducing lateral thrust:** This minimizes wear on the rails and wheels.
2.  **Improving passenger comfort:** By reducing the sideways force felt by passengers.
3.  **Preventing derailment:** By keeping the forces acting on the track within safe limits.

**Answer 4:**
Given:
*   $R = 800$ m
*   $G = 1.435$ m
*   $c_{max\_def} = 80$ mm = 0.080 m
*   $c = 120$ mm = 0.120 m
*   $g = 9.81$ m/s²

Using the formula for maximum permissible speed:
$v_{max} = \sqrt{\frac{gR}{G} (c + c_{max\_def})}$
$v_{max} = \sqrt{\frac{9.81 \times 800}{1.435} (0.120 + 0.080)}$
$v_{max} = \sqrt{\frac{7848}{1.435} (0.200)}$
$v_{max} = \sqrt{5470.03 \times 0.200}$
$v_{max} = \sqrt{1094.01}$
$v_{max} \approx 33.08$ m/s

Convert to km/h:
$v_{max} (\text{km/h}) = 33.08 \times \frac{18}{5} \approx 119.09$ km/h

**Therefore, the maximum permissible speed is approximately 119.09 km/h.**

**Answer 5:**
Key differences in curve design considerations for high-speed rail (HSR) vs. conventional railways:

| Feature                   | Conventional Railways                                    | High-Speed Railways (HSR)                                     |
| :------------------------ | :------------------------------------------------------- | :------------------------------------------------------------ |
| **Curve Radii**           | Generally smaller radii are acceptable.                  | Much larger radii are required to maintain acceptable forces. |
| **Cant (Superelevation)** | Higher values are permissible (e.g., up to 150-180 mm).  | Generally lower values are preferred (e.g., up to 150 mm).    |
| **Cant Deficiency**       | Higher limits allowed (e.g., 75-100 mm) for comfort.     | Much lower limits are enforced (e.g., 25-50 mm) for comfort and safety. |
| **Cant Excess**           | Strictly avoided.                                        | Strictly avoided due to high speeds.                          |
| **Transition Curves**     | Shorter transition curves are often sufficient.          | Much longer transition curves are essential for gradual cant introduction. |
| **Lateral Acceleration**  | Higher lateral accelerations may be tolerated.           | Very strict limits on lateral acceleration to ensure comfort and stability. |
| **Track Structure**       | Standard ballast and sleeper arrangements.               | Robust track structures (e.g., concrete sleepers, ballastless track) are often used. |
| **Aerodynamics**          | Less significant impact.                                 | Significant aerodynamic forces need to be considered.       |
| **Maintenance**           | Standard maintenance schedules.                          | More frequent and intensive maintenance may be required.      |

---

### Important Points to Remember

*   **Centrifugal force** is the primary concern on curves.
*   **Superelevation (cant)** is the solution to counteract centrifugal force.
*   **Equilibrium speed** is the theoretical speed where forces are perfectly balanced.
*   **Cant deficiency** is the difference between the equilibrium cant for the actual speed and the provided cant. It is allowed for comfort.
*   **Cant excess** is when the train speed is higher than the equilibrium speed for the provided cant. It is generally avoided.
*   The **maximum permissible speed** is primarily governed by the **maximum permissible cant deficiency**.
*   **High-speed rail** requires larger curve radii, longer transition curves, and tighter limits on cant deficiency.
*   Always use consistent units in calculations. Convert km/h to m/s for force and speed calculations.
*   Remember to check the specific standards and guidelines of the railway authority you are designing for, as permissible values for cant deficiency can vary.
