---
title: "grading resistance"
subject: "ELECTRIC VEHICLES"
module: "Module 1: Conventional Vehicles : Basics of vehicle performance"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3629c"
status: "completed"
scrapedAt: "2026-05-23T16:21:26.846Z"
---
# ELECTRIC VEHICLES

## Module 1: Conventional Vehicles: Basics of Vehicle Performance

### Topic: Grading Resistance

**Knowledge Level:** K2 (Familiarisation with performance of conventional vehicles)

**Course Outcome Alignment:** CO1 (Familiarise the performance of conventional vehicles and electric vehicles)

---

### 1. Introduction to Vehicle Performance

Vehicle performance is a critical aspect in understanding how vehicles operate, their efficiency, and the power required to move them under various conditions. This module, by focusing on conventional vehicles, provides a foundational understanding that is directly transferable to electric vehicles (EVs). Understanding the forces acting on a conventional vehicle helps us appreciate the demands placed on the powertrain, whether it's an internal combustion engine (ICE) or an electric motor.

**Key Concept:** Vehicle performance is determined by the balance of forces acting on the vehicle and the power required to overcome them.

---

### 2. Forces Acting on a Vehicle

To understand vehicle performance, we must first identify the primary forces that oppose its motion. These forces dictate the amount of power the powertrain needs to generate.

*   **Rolling Resistance ($F_r$):** This is the force opposing motion due to the deformation of tires and the road surface. It is largely independent of speed within typical driving ranges.
    *   **Factors influencing rolling resistance:**
        *   Tire pressure and construction
        *   Road surface type and condition (e.g., asphalt, concrete, gravel)
        *   Vehicle weight (load on the tires)
        *   Speed (slight increase with speed)
    *   **Formula:** $F_r = C_r \cdot W$
        *   $C_r$: Coefficient of rolling resistance (dimensionless). Typically around 0.01 to 0.02 for good tires on a paved surface.
        *   $W$: Total weight of the vehicle (mass $\times$ gravity, $W = m \cdot g$).
    *   **Reference:** *Electric Vehicles Machines and Drives* by K. T. Chau (Chapter 2, "Basic Concepts of Electric Vehicle Propulsion") often details these fundamental forces.

*   **Aerodynamic Drag ($F_a$):** This is the force exerted by the air on the vehicle as it moves through it. It increases significantly with speed.
    *   **Factors influencing aerodynamic drag:**
        *   Vehicle shape and design (coefficient of drag, $C_d$)
        *   Frontal area of the vehicle ($A$)
        *   Air density ($\rho$)
        *   Vehicle speed ($v$)
    *   **Formula:** $F_a = \frac{1}{2} \rho C_d A v^2$
    *   **Reference:** *Propulsion Systems for Hybrid Vehicles* by John M. Miller (Chapter 3, "Vehicle Dynamics and Performance") will cover this in detail.

*   **Grading Resistance ($F_g$):** This is the force that opposes a vehicle's motion when it is moving up or down an incline. It is directly related to the vehicle's weight and the angle of the incline.

---

### 3. Grading Resistance ($F_g$)

Grading resistance is a crucial force to understand, especially for EVs where maintaining range and efficient uphill performance is paramount.

*   **Definition:** Grading resistance is the component of the vehicle's weight that acts parallel to the inclined surface, either pulling it down (downhill) or opposing its upward motion (uphill).

*   **Calculation:**
    Consider a vehicle of weight $W$ on an incline with an angle $\theta$ to the horizontal.
    *   The force due to gravity acting on the vehicle is $W$ (downwards).
    *   This force can be resolved into two components:
        1.  **Perpendicular to the incline:** $W \cos(\theta)$ (This component is supported by the road surface).
        2.  **Parallel to the incline:** $W \sin(\theta)$ (This component is the grading resistance).

    *   **Formula for Grading Resistance:** $F_g = W \sin(\theta)$
        *   $F_g$: Grading Resistance (Newtons, N)
        *   $W$: Total weight of the vehicle (Newtons, N)
        *   $\theta$: Angle of the incline with respect to the horizontal (degrees or radians)

*   **Important Note on Small Angles:** For typical road grades encountered in everyday driving, the angle $\theta$ is small. In such cases, the sine of the angle can be approximated by the angle itself (in radians) or by the percentage grade divided by 100.
    *   **Percentage Grade:** Road grades are often expressed as a percentage. A 5% grade means that for every 100 units traveled horizontally, the elevation changes by 5 units.
    *   **Relationship between Percentage Grade and Angle:**
        *   If Grade (%) = $G$, then $\tan(\theta) = G/100$.
        *   For small angles, $\sin(\theta) \approx \tan(\theta) = G/100$.
    *   Therefore, for small angles, the grading resistance can be approximated as:
        **$F_g \approx W \times (\text{Grade} / 100)$**

*   **Direction of Grading Resistance:**
    *   **Uphill:** Grading resistance acts *down* the incline, opposing the vehicle's motion. The propulsion system must overcome this force.
    *   **Downhill:** Grading resistance acts *down* the incline, assisting the vehicle's motion. It can cause the vehicle to accelerate if not controlled.

*   **Reference:** *Hybrid Electric Vehicles – Principles and applications with practical perspectives* by Chris Mi, M A Masrur, D W Gao (Chapter 2, "Fundamentals of Vehicle Dynamics") will thoroughly explain these forces. *Electric and Hybrid Vehicles: Design Fundamentals* by Iqbal Hussein (Chapter 3, "Vehicle Dynamics") is another excellent resource.

---

### 4. Total Tractive Force Required

The total force the powertrain must generate to overcome all resistances and accelerate the vehicle is the sum of these individual forces.

*   **Total Resistance Force ($F_{total}$):** $F_{total} = F_r + F_a + F_g$ (for uphill motion)
*   **Force required for acceleration ($F_{accel}$):** $F_{accel} = m \cdot a$, where $m$ is the vehicle mass and $a$ is the acceleration.
*   **Total Force from Powertrain ($F_{propulsion}$):** $F_{propulsion} = F_{total} + F_{accel}$ (for uphill motion with acceleration)
    *   $F_{propulsion} = C_r \cdot W + \frac{1}{2} \rho C_d A v^2 + W \sin(\theta) + m \cdot a$

**Important Point:** Understanding grading resistance is crucial for sizing EV powertrains, managing battery power, and predicting driving range, especially in hilly terrains. EVs can utilize regenerative braking to recover energy when going downhill, which is a significant advantage.

---

### 5. Examples and Calculations

Let's illustrate with an example.

**Example 1:**

A vehicle has a total weight ($W$) of 15,000 N. It is traveling at a speed where rolling resistance ($F_r$) is 200 N and aerodynamic drag ($F_a$) is 300 N. The vehicle is about to ascend a slope with a grade of 8%.

**Question:**
1.  Calculate the grading resistance ($F_g$).
2.  Calculate the total resistance force ($F_{total}$) the vehicle needs to overcome to maintain a constant speed uphill.
3.  If the vehicle needs to accelerate at 1 m/s², what is the total force the powertrain must provide? (Assume vehicle mass $m = W/g = 15000/9.81 \approx 1530$ kg)

**Solution:**

1.  **Grading Resistance ($F_g$):**
    *   Grade = 8%
    *   Since the grade is a small percentage, we can use the approximation:
    *   $F_g \approx W \times (\text{Grade} / 100)$
    *   $F_g \approx 15000 \text{ N} \times (8 / 100)$
    *   $F_g \approx 15000 \text{ N} \times 0.08$
    *   $F_g \approx 1200 \text{ N}$

2.  **Total Resistance Force ($F_{total}$):**
    *   $F_{total} = F_r + F_a + F_g$
    *   $F_{total} = 200 \text{ N} + 300 \text{ N} + 1200 \text{ N}$
    *   $F_{total} = 1700 \text{ N}$

3.  **Total Force from Powertrain for Acceleration:**
    *   Force required for acceleration ($F_{accel}$):
        *   $F_{accel} = m \cdot a$
        *   $F_{accel} = 1530 \text{ kg} \times 1 \text{ m/s}^2$
        *   $F_{accel} = 1530 \text{ N}$
    *   Total force from powertrain ($F_{propulsion}$):
        *   $F_{propulsion} = F_{total} + F_{accel}$
        *   $F_{propulsion} = 1700 \text{ N} + 1530 \text{ N}$
        *   $F_{propulsion} = 3230 \text{ N}$

**Answer:**
1.  The grading resistance is approximately 1200 N.
2.  The total resistance force is 1700 N.
3.  The powertrain must provide approximately 3230 N of force.

---

### 6. Grading Resistance and Electric Vehicles

*   **Impact on Range:** Ascending steep grades consumes significant energy, directly reducing the driving range of an EV.
*   **Power Requirements:** The power required to overcome grading resistance is $P_g = F_g \times v = (W \sin(\theta)) \times v$. For a given grade, power increases linearly with speed.
*   **Regenerative Braking:** When descending a grade, EVs can utilize regenerative braking to recapture some of the lost energy. The motor acts as a generator, slowing the vehicle and recharging the battery. This is a key advantage of EVs over conventional vehicles.
*   **Importance in EV Design:** Designers must consider the typical grading the EV will encounter to ensure adequate performance and range. This influences the choice of motor, battery capacity, and gear ratios.

---

### 7. Practice Questions

1.  A vehicle weighing 18,000 N is traveling on a flat road. The rolling resistance is 250 N, and the aerodynamic drag is 400 N. If the vehicle then starts climbing a 6% grade, calculate the additional force due to grading resistance.
2.  Calculate the total force required to overcome resistances (rolling resistance, aerodynamic drag, and grading resistance) if the vehicle from question 1 is now moving uphill at a constant speed with a 6% grade.
3.  Describe how grading resistance differs for uphill and downhill travel and explain the role of regenerative braking in EVs when descending grades.

---

### 8. Answers to Practice Questions

1.  **Grading Resistance:**
    *   Weight ($W$) = 18,000 N
    *   Grade = 6%
    *   $F_g \approx W \times (\text{Grade} / 100)$
    *   $F_g \approx 18000 \text{ N} \times (6 / 100)$
    *   $F_g \approx 18000 \text{ N} \times 0.06$
    *   $F_g \approx 1080 \text{ N}$
    *   The additional force due to grading resistance is 1080 N.

2.  **Total Force to Overcome Resistances (Uphill, Constant Speed):**
    *   Rolling Resistance ($F_r$) = 250 N
    *   Aerodynamic Drag ($F_a$) = 400 N
    *   Grading Resistance ($F_g$) = 1080 N (from question 1)
    *   $F_{total} = F_r + F_a + F_g$
    *   $F_{total} = 250 \text{ N} + 400 \text{ N} + 1080 \text{ N}$
    *   $F_{total} = 1730 \text{ N}$
    *   The total force required is 1730 N.

3.  **Grading Resistance and Regenerative Braking:**
    *   **Uphill:** Grading resistance acts *against* the direction of motion, opposing the vehicle's travel up the slope. The powertrain must exert a force to overcome this.
    *   **Downhill:** Grading resistance acts *in* the direction of motion, assisting the vehicle's travel down the slope. Without intervention, it would cause the vehicle to accelerate.
    *   **Regenerative Braking in EVs:** When descending a grade, the EV's electric motor can be operated in reverse (as a generator). This converts the kinetic energy of the vehicle into electrical energy, which is stored in the battery. This process slows the vehicle down, acting like braking, and recovers energy that would otherwise be dissipated as heat by friction brakes. This significantly improves the overall energy efficiency of EVs, especially in varied terrain.

---

### 9. Important Points to Remember

*   Grading resistance is a force opposing motion on inclines.
*   It is calculated as $F_g = W \sin(\theta)$, where $W$ is weight and $\theta$ is the incline angle.
*   For small angles (common in roads), $F_g \approx W \times (\text{Grade} / 100)$.
*   Grading resistance acts downhill when climbing and downhill when descending.
*   It is a significant factor in EV range and power requirements, especially in hilly areas.
*   EVs can recover energy via regenerative braking when descending grades, improving efficiency.

---

This comprehensive set of notes covers the fundamental concept of grading resistance, its calculation, its impact on vehicle performance, and its specific relevance to electric vehicles, aligning with the specified learning outcomes and course objectives.
