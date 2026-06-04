---
title: "negative super elevation"
subject: "RAILWAY, PORT AND HARBOR ENGINEERING"
module: "Module 2: Geometric design of track : gradients"
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba8115f9"
status: "completed"
scrapedAt: "2026-05-20T19:00:57.259Z"
---
# Railway, Port, and Harbor Engineering

## Module 2: Geometric Design of Track - Gradients

### Topic: Negative Super Elevation

---

### 1. Introduction to Super Elevation

**Concept:** Super elevation (also known as cant or banking) is the practice of raising the outer rail on a curved track above the inner rail.

**Purpose:**
*   **Counteract centrifugal force:** To balance the outward force experienced by trains on curves, preventing them from tilting outwards.
*   **Improve passenger comfort:** Reduces lateral acceleration felt by passengers.
*   **Reduce wear and tear:** Minimizes lateral forces on the rails and wheels.

**Formula:**
The equilibrium speed ($V_e$) for a given super elevation ($e$) and radius of curvature ($R$) is given by:

$V_e = \sqrt{\frac{gRe}{1 - \frac{V_e^2}{c^2}}}$

where:
*   $V_e$ = Equilibrium speed (m/s)
*   $g$ = Acceleration due to gravity (approx. 9.81 m/s²)
*   $R$ = Radius of curve (m)
*   $e$ = Super elevation (m)
*   $c$ = Speed of sound (approx. 330 m/s, often neglected in railway calculations as $V_e \ll c$)

A simplified and commonly used formula is:

$V_e = \sqrt{1.27 R e}$ (for speeds in km/h and $e$ in mm, using empirical factors)

or

$V_e = \sqrt{R e \frac{g}{sin\theta}}$ where $\theta$ is the angle of inclination of the track.

**Equilibrium Speed:** The speed at which the resultant force (gravity and centrifugal force) acts perpendicular to the plane of the track, resulting in no lateral force.

**Unbalanced Centrifugal Force (Lateral Force):** The difference between the actual speed ($V$) and the equilibrium speed ($V_e$).
$F_L = \frac{WV^2}{gR} - \frac{We}{R}$ (simplified)
where $W$ is the weight of the rolling stock.

**Maximum Permissible Super Elevation:** This is limited by factors such as:
*   Passenger comfort (allowable lateral acceleration).
*   Safety (prevention of derailment, especially at low speeds).
*   Track structure limitations.
*   Speed restrictions.

---

### 2. Negative Super Elevation (Cant Deficiency)

**Definition:** Negative super elevation occurs when the outer rail is *lower* than the inner rail on a curve. This is an **undesirable condition** in standard railway practice as it increases the lateral forces acting on the track.

**When does it occur?**
Negative super elevation effectively means there is **insufficient** super elevation for the given speed of the train. This condition is more accurately termed **"cant deficiency"**.

**Cant Deficiency:** The difference between the theoretical super elevation required for a given speed and the actual super elevation provided.

**Formula for Cant Deficiency ($CD$):**
$CD = e_{required} - e_{actual}$

where:
*   $e_{required}$ is the super elevation theoretically needed to achieve equilibrium for a given speed.
*   $e_{actual}$ is the super elevation actually provided on the track.

If $e_{actual} < e_{required}$, then $CD > 0$. This is the situation that can be colloquially referred to as "negative super elevation" in terms of the *effect* it has.

**Consequences of Negative Super Elevation (Cant Deficiency):**

*   **Increased Lateral Force:** The unbalanced centrifugal force pushes the train outwards against the outer rail.
    $F_L = \frac{WV^2}{gR} - W \tan(\theta_{actual})$
    where $\theta_{actual}$ is the actual angle of inclination. If $e_{actual}$ is very small or zero, this force is significant.
*   **Increased Wear:** High lateral forces lead to accelerated wear on the outer rail and the flanges of the wheels.
*   **Passenger Discomfort:** Passengers experience a strong outward lurch.
*   **Risk of Derailment:** At very high speeds or with significant cant deficiency, there is an increased risk of the wheel flange mounting the rail and potentially derailing the train, especially on points and crossings or at low speeds.

**Causes of Cant Deficiency:**

*   **Trains running at speeds exceeding the design speed for the provided super elevation.** This is the most common cause.
*   **Insufficient super elevation provided during track construction or maintenance.**
*   **Speed restrictions being lifted or ignored.**
*   **Dynamic effects:** Even with correct super elevation, the actual speed can vary, leading to temporary cant deficiency.

---

### 3. Allowable Cant Deficiency

**Concept:** While perfect equilibrium is ideal, it's often impractical and unsafe to design for all trains to run at equilibrium speed. Therefore, a certain amount of cant deficiency is allowed to cater for the operational reality of varying train speeds.

**Factors influencing allowable cant deficiency:**

*   **Type of Rolling Stock:**
    *   Passenger trains: Generally allowed higher cant deficiency due to smoother running and better passenger comfort tolerance.
    *   Freight trains: Lower allowable cant deficiency due to rougher ride and heavier loads, which can exacerbate wear.
*   **Maximum Permissible Speed:** Higher speeds allow for less cant deficiency to avoid excessive lateral forces.
*   **Track Geometry:** The radius of the curve plays a role.
*   **Track Maintenance Standards:** Well-maintained tracks can tolerate slightly more cant deficiency.
*   **Passenger Comfort Standards:** The limit is often dictated by what is considered acceptable for passenger experience.

**General Guidelines (Illustrative - specific values vary by railway authority):**

*   **Passenger Trains:** Typically, a maximum cant deficiency of **100 mm to 150 mm** is permissible.
*   **Freight Trains:** Typically, a maximum cant deficiency of **75 mm to 100 mm** is permissible.

**Calculation of Required Super Elevation ($e_{required}$):**
To achieve equilibrium speed $V_e$:
$e_{required} = \frac{V_e^2}{gR}$ (in meters)
or, using common units for railway design (V in km/h, R in meters, e in mm):
$e_{required} = \frac{V_e^2}{127R}$ (approximate)

---

### 4. Designing for Varying Speeds and Cant Deficiency

**Strategy:** Railway tracks are designed with a *balance* between providing adequate super elevation for the majority of traffic while allowing for some cant deficiency for faster trains.

**Design Speed:** A design speed is chosen for a curve, which is typically higher than the average speed but lower than the absolute maximum possible speed. The super elevation is calculated based on this design speed.

**Balancing Curves:** Curves are often designed with transition curves (easement curves) to gradually introduce and remove super elevation, minimizing jerk and discomfort.

**Operation:**
*   **Trains running at or near the design speed:** Experience minimal lateral force (close to equilibrium).
*   **Trains running slower than the design speed:** Experience **cant excess**. This means the outer rail is too high, and the train tends to lean inwards. This also creates lateral forces, but directed inwards.
*   **Trains running faster than the design speed:** Experience **cant deficiency**, leading to outward lateral forces.

---

### 5. Practical Considerations and Safety

*   **Balance of Cant Excess and Cant Deficiency:** The design aims to balance the average amount of cant excess experienced by slower trains and the cant deficiency experienced by faster trains.
*   **Maximum Allowed Cant:** The absolute maximum super elevation is limited by the ability of slower vehicles to remain stable and by the risk of derailment if the train tips outwards.
*   **Derailment at Low Speeds:** A significant issue with negative super elevation is the risk of derailment at low speeds. If a train is moving very slowly on a sharply curved track with no super elevation (or negative super elevation), the outward centrifugal force is still present, and the lack of inward force from banking can cause the wheel flanges to mount the rail and derail.
*   **Track Maintenance:** Regular inspection and measurement of super elevation are crucial. Deviations from the designed super elevation can lead to unsafe conditions.
*   **Points and Crossings (P-ways):** At junctions, super elevation is typically limited or zero to ensure safe passage of trains at lower speeds, especially freight trains. This often leads to cant deficiency for faster passenger trains negotiating these areas.

---

### 6. Example Calculation

**Problem:** A railway curve has a radius of 500 meters. The maximum permissible speed for passenger trains is 100 km/h. Calculate the theoretical super elevation required for equilibrium at this speed and determine the resulting cant deficiency if the actual super elevation provided is 75 mm.

**Given:**
*   Radius of curve ($R$) = 500 m
*   Speed ($V$) = 100 km/h
*   Actual super elevation ($e_{actual}$) = 75 mm

**Calculations:**

1.  **Convert speed to m/s:**
    $V = 100 \text{ km/h} \times \frac{1000 \text{ m}}{1 \text{ km}} \times \frac{1 \text{ h}}{3600 \text{ s}} = 27.78 \text{ m/s}$

2.  **Calculate required super elevation ($e_{required}$) for equilibrium:**
    Using the simplified formula $e_{required} = \frac{V^2}{gR}$ (where $e$ will be in meters):
    $e_{required} = \frac{(27.78 \text{ m/s})^2}{9.81 \text{ m/s}^2 \times 500 \text{ m}}$
    $e_{required} = \frac{771.7 \text{ m}^2/\text{s}^2}{4905 \text{ m}^2/\text{s}^2} = 0.1573 \text{ m}$

3.  **Convert required super elevation to mm:**
    $e_{required} = 0.1573 \text{ m} \times 1000 \text{ mm/m} = 157.3 \text{ mm}$

4.  **Calculate Cant Deficiency ($CD$):**
    $CD = e_{required} - e_{actual}$
    $CD = 157.3 \text{ mm} - 75 \text{ mm}$
    $CD = 82.3 \text{ mm}$

**Answer:**
The theoretical super elevation required for equilibrium at 100 km/h on a 500 m radius curve is approximately 157.3 mm. If the actual super elevation provided is 75 mm, the cant deficiency is 82.3 mm. This value is within typical allowable limits for passenger trains.

---

### 7. Practice Questions

**Question 1:**
Define negative super elevation and explain why it is generally an undesirable condition in railway track design.

**Question 2:**
A train travels at 80 km/h on a curve with a radius of 400 meters. The actual super elevation provided is 50 mm.
a) Calculate the equilibrium speed for the provided super elevation.
b) Calculate the required super elevation for equilibrium at 80 km/h.
c) Determine the cant deficiency for this train.
d) If this were a freight train, would the calculated cant deficiency be acceptable? (Assume typical allowable limits).

**Question 3:**
What are the primary consequences of significant negative super elevation (cant deficiency) on the track structure and train operation?

**Question 4:**
List three factors that influence the allowable cant deficiency for different types of railway traffic.

---

### 8. Answers to Practice Questions

**Answer 1:**
Negative super elevation occurs when the outer rail on a curve is lower than the inner rail. This is equivalent to having **cant deficiency**, meaning the actual super elevation is less than what is required for equilibrium at the current speed. It is undesirable because it leads to unbalanced centrifugal forces pushing the train outwards, causing increased lateral wear, passenger discomfort, and a higher risk of derailment, especially at low speeds or with high speeds.

**Answer 2:**
Given:
*   $V$ = 80 km/h
*   $R$ = 400 m
*   $e_{actual}$ = 50 mm

**a) Calculate the equilibrium speed for the provided super elevation:**
*   Convert speed to m/s: $V = 80 \text{ km/h} \times \frac{1000}{3600} \approx 22.22 \text{ m/s}$
*   Using the simplified formula $V_e = \sqrt{1.27 R e_{actual}}$ (for $V_e$ in km/h and $e$ in mm):
    $V_e = \sqrt{1.27 \times 400 \times 50}$
    $V_e = \sqrt{25400} \approx 159.37 \text{ km/h}$
    Alternatively, using $V_e = \sqrt{gRe}$ where $e$ is in meters:
    $e_{actual} = 50 \text{ mm} = 0.05 \text{ m}$
    $V_e = \sqrt{9.81 \times 400 \times 0.05}$
    $V_e = \sqrt{196.2} \approx 14.01 \text{ m/s}$
    Convert to km/h: $14.01 \text{ m/s} \times \frac{3600}{1000} \approx 50.44 \text{ km/h}$
    *(Note: The first formula using 1.27 is an approximation for railway practice and generally preferred for consistency. The second is more fundamental).* Let's use the first one for consistency.
    Equilibrium speed ($V_e$) ≈ 159.37 km/h.

**b) Calculate the required super elevation for equilibrium at 80 km/h:**
*   $e_{required} = \frac{V^2}{127R}$ (for $V$ in km/h, $R$ in m, $e$ in mm)
    $e_{required} = \frac{(80)^2}{127 \times 400}$
    $e_{required} = \frac{6400}{50800} \approx 0.126 \text{ m}$
    $e_{required} \approx 126 \text{ mm}$

**c) Determine the cant deficiency for this train:**
*   $CD = e_{required} - e_{actual}$
    $CD = 126 \text{ mm} - 50 \text{ mm}$
    $CD = 76 \text{ mm}$

**d) If this were a freight train, would the calculated cant deficiency be acceptable?**
*   Typical allowable cant deficiency for freight trains is around 75-100 mm. A cant deficiency of 76 mm for a freight train at 80 km/h on a 400m curve would likely be **acceptable**, but it's at the lower end of the acceptable range. It's crucial to check specific railway standards. For passenger trains, this would also generally be acceptable.

**Answer 3:**
The primary consequences of significant negative super elevation (cant deficiency) are:
*   **Increased lateral forces:** Centrifugal force is not sufficiently counteracted by gravity, pushing the train towards the outer rail.
*   **Accelerated track wear:** Increased wear on the outer rail (gauge face) and wheel flanges.
*   **Reduced passenger comfort:** Passengers experience a strong outward lurch.
*   **Increased risk of derailment:** Especially at low speeds where the outward force can cause the wheel flange to climb the rail, or at high speeds where the lateral forces exceed track capacity.
*   **Stress on track components:** Increased forces on fastenings and ballast.

**Answer 4:**
Three factors that influence the allowable cant deficiency are:
1.  **Type of Rolling Stock:** Passenger trains can generally tolerate higher cant deficiency than freight trains due to smoother running and better passenger comfort.
2.  **Maximum Permissible Speed:** Higher speeds necessitate stricter limits on cant deficiency to avoid excessive lateral forces and wear.
3.  **Passenger Comfort Standards:** The comfort of passengers is a key limiting factor for public transport, dictating how much lateral acceleration (due to cant deficiency) is acceptable.

---

### Important Points to Remember:

*   **Negative Super Elevation = Cant Deficiency.** It's the *lack* of sufficient super elevation for the speed.
*   **Consequences:** Outward force, wear, discomfort, derailment risk.
*   **Allowable Limits Exist:** Railway design permits some cant deficiency to accommodate operational speeds.
*   **Different Limits for Passenger vs. Freight:** Passenger trains tolerate more.
*   **Equilibrium Speed:** The speed at which no lateral force exists.
*   **Design Speed:** The speed used to calculate the required super elevation.
*   **Track Maintenance:** Crucial for ensuring provided super elevation matches design.
