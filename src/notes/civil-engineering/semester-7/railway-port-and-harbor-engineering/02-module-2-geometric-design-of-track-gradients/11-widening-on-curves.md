---
title: "widening on curves"
subject: "RAILWAY, PORT AND HARBOR ENGINEERING"
module: "Module 2: Geometric design of track : gradients"
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba8115fe"
status: "completed"
scrapedAt: "2026-05-20T19:01:01.038Z"
---
# Railway, Port and Harbor Engineering

## Module 2: Geometric Design of Track

### Topic: Widening on Curves

---

### Learning Outcomes:

Upon successful completion of this topic, you should be able to:

*   Understand the necessity and principles of widening railway tracks on curves.
*   Calculate the required widening for different types of track and rolling stock.
*   Apply the concept of equilibrium cant and its relation to widening.
*   Determine the maximum permissible widening for various track configurations.
*   Understand the factors influencing the magnitude of widening.
*   Appreciate the practical implications and design considerations for widening on curves.

---

### 1. Introduction to Track Widening on Curves

#### 1.1 Why is Widening Necessary?

When a train negotiates a curve, centrifugal force acts outwards on the rolling stock. This force, if not counteracted, would tend to push the wheels against the outer rail. To mitigate this effect and ensure safe and comfortable passage, several geometric adjustments are made on curves, with track widening being a primary one.

**Key Reasons for Widening:**

*   **Centrifugal Force Counteraction:** Widening provides additional clearance between the inner rail and the rolling stock, as well as between the rolling stock and adjacent tracks or structures, thereby accommodating the outward thrust caused by centrifugal force.
*   **Axle/Bogie Swing:** The bogies or axles of rolling stock do not remain perfectly radial on a curve. They tend to swing outwards, increasing the effective width occupied by the rolling stock.
*   **Wheel Flange Contact:** The wheel flanges, designed to keep the train on the track, can come into contact with the outer rail on a curve. Widening provides space for this contact and reduces wear and tear.
*   **Clearance Requirements:** Adequate clearance is essential between the rolling stock and fixed objects such as platforms, bridges, tunnels, and adjacent tracks. Widening ensures these clearances are maintained even when the train is on a curve.
*   **Comfort of Passengers:** Reduced lateral acceleration and oscillations contribute to a more comfortable ride for passengers.

#### 1.2 Principles of Widening

The fundamental principle behind widening is to provide sufficient lateral clearance to accommodate the effects of centrifugal force and the geometry of the rolling stock on curves. This is achieved by increasing the distance between the centerlines of the two rails beyond the standard gauge.

**Key Concepts:**

*   **Equilibrium Cant (Superelevation):** This is the banking of the track on a curve, where the outer rail is raised relative to the inner rail. The purpose of cant is to use gravity to counteract the centrifugal force, making the passage of trains on curves smoother and safer.
*   **Cant Deficiency:** When a train travels on a curve at a speed lower than that for which the cant is designed, there is a tendency for the train to slide down the canted plane. This difference in speed is related to cant deficiency.
*   **Cant Excess:** When a train travels on a curve at a speed higher than that for which the cant is designed, there is a tendency for the train to be thrown outwards. This difference in speed is related to cant excess.

The amount of widening is directly influenced by the degree of curve, the speed of the train, and the type of rolling stock.

---

### 2. Calculation of Track Widening

The total widening required for a curve is typically calculated as the sum of several components. Different railway authorities and standards may have slightly varying formulas, but the core principles are similar.

#### 2.1 Components of Widening

The total widening ($W$) is generally expressed as:

$W = G + S + C$

Where:
*   $G$ = Gauge of the track (distance between the inner faces of the running rails). This is the fundamental width.
*   $S$ = Widening due to **equilibrium cant**.
*   $C$ = Additional widening due to **bogie swing** and **flange interaction**.

#### 2.2 Widening due to Equilibrium Cant ($S$)

This component is related to the **cant ratio** (cant to gauge ratio). While widening itself doesn't directly counter centrifugal force (cant does), the design speeds associated with different cant values influence the required widening.

For broad gauge tracks, a common approach considers the reduction in allowable speed due to **cant deficiency**. Widening is often provided to accommodate speeds where a certain amount of cant deficiency is permitted, which in turn relates to the centrifugal force.

**Simplified Approach (Conceptual):**

In some contexts, widening is conceptually linked to the centrifugal force. Centrifugal force ($F_c$) is given by:

$F_c = \frac{mv^2}{R}$

Where:
*   $m$ = mass of the rolling stock
*   $v$ = speed of the rolling stock
*   $R$ = radius of the curve

The centrifugal force is balanced by the component of gravity along the canted plane. The lateral acceleration ($a_c$) is $a_c = \frac{v^2}{R}$.

While $S$ is not a direct formula derived from $F_c$, it's a practical provision to manage the effects of higher speeds and associated forces.

#### 2.3 Widening due to Bogie Swing ($C_1$)

The bogie swing is the lateral displacement of the bogie frame relative to the track centerline when the rolling stock negotiates a curve. This swing is more pronounced for shorter wheelbase bogies and sharper curves.

The widening due to bogie swing is generally calculated as:

$C_1 = k \times \text{Wheelbase of Bogie}$

Where $k$ is a coefficient that depends on the radius of the curve and the design standards. A simplified empirical formula often used is:

$C_1 = \frac{L^2}{2R}$

Where:
*   $L$ = wheelbase of the bogie (distance between the center pivots of the bogies)
*   $R$ = radius of the curve

**Example:**
Consider a coaching stock with a bogie wheelbase of 2.5 meters on a curve with a radius of 300 meters.
$C_1 = \frac{(2.5 \text{ m})^2}{2 \times 300 \text{ m}} = \frac{6.25}{600} \approx 0.0104 \text{ meters} = 10.4 \text{ mm}$

#### 2.4 Widening due to Flange Interaction ($C_2$)

This component accounts for the lateral play between the wheel flanges and the gauge. It includes:

*   **Clearance between flange and rail:** There is a small gap between the wheel flange and the rail head.
*   **Lateral play of the axle:** The axle can shift laterally within its axle box.
*   **Wear and tear:** Wear on wheels and rails can increase this lateral play.

A common empirical value for this component, often standardized by railway authorities, is around **10 mm to 15 mm** per rail, or a total of **20 mm to 30 mm**.

**Example (using a typical value):**
Assume a typical allowance for flange interaction is 25 mm.
$C_2 = 25 \text{ mm} = 0.025 \text{ meters}$

#### 2.5 Total Widening Calculation

Let's combine the components.

**Formula for Total Widening ($W$):**

$W = \text{Gauge} + \text{Widening for Equilibrium Cant} + \text{Widening for Bogie Swing} + \text{Widening for Flange Interaction}$

**Indian Railway Standards (Example - may vary):**

For broad gauge (1676 mm):

*   **Widening ($W$) = 0.00065 $\times$ D** (for coaching stock)
*   **Widening ($W$) = 0.00084 $\times$ D** (for freight stock)

Where $D$ is the **degree of the curve** in degrees.

**Relationship between Degree of Curve (D) and Radius (R):**

$D = \frac{1750}{R}$ (for broad gauge, where R is in meters)

Let's rework the bogie swing calculation using the degree of curve.

$R = \frac{1750}{D}$

$C_1 = \frac{L^2}{2R} = \frac{L^2}{2 \times \frac{1750}{D}} = \frac{L^2 \times D}{3500}$

If $L$ is in meters and $D$ is in degrees, and we want $C_1$ in meters:

$C_1 \approx 0.000286 \times L^2 \times D$

**Total Widening (in meters) on Broad Gauge:**

$W = \frac{\text{Gauge}}{1000} + \frac{L^2 \times D}{3500} + 0.025$ (assuming 25mm for flange interaction)

*Note: The gauge itself is the base width. The widening refers to the *additional* width provided beyond the standard gauge.*

**Revised Definition:** The term "widening" often refers to the *additional* width provided on curves. So, the actual distance between the inner faces of the rails on a curve will be:

$\text{Actual Gauge} = \text{Standard Gauge} + W_{total}$

Where $W_{total}$ is the total widening calculated.

**Let's consider a practical example using Indian Railways standards for broad gauge:**

**Scenario:** A broad gauge track with coaching stock on a curve of 4 degrees.
*   Standard Gauge (G) = 1676 mm = 1.676 m
*   Degree of Curve (D) = 4 degrees

**Using the Indian Railway formula for coaching stock:**
Widening ($W$) = 0.00065 $\times$ D
$W = 0.00065 \times 4 = 0.0026$ meters = 2.6 mm

This appears to be a very small widening. It's important to note that standards vary, and sometimes the formula includes an allowance for bogie swing implicitly or is presented differently.

**Let's use a more comprehensive approach based on common design principles:**

**Scenario:** Broad gauge coaching stock, curve radius R = 400 m, average bogie wheelbase $L$ = 2.5 m.
*   Standard Gauge ($G$) = 1.676 m

**1. Widening due to Bogie Swing ($C_1$):**
$C_1 = \frac{L^2}{2R} = \frac{(2.5 \text{ m})^2}{2 \times 400 \text{ m}} = \frac{6.25}{800} \approx 0.0078 \text{ m} = 7.8 \text{ mm}$

**2. Widening due to Flange Interaction ($C_2$):**
Let's assume a value of 25 mm (0.025 m) for flange play and wear.

**3. Widening for Equilibrium Cant Consideration (S):**
This is where it gets tricky as direct calculation from equilibrium cant isn't straightforward. However, the design speed for a given cant is often higher than the speed allowed with cant deficiency. Widening is primarily to handle the effects of speed and bogie swing.
For broad gauge on curves, the widening is typically a fixed allowance plus a component related to the degree of curve and wheelbase.

**Let's re-examine a common engineering approach:**

**Total Widening ($W$) = Widening for Bogie Swing + Widening for Flange Play + Allowance for Equilibrium Cant effects**

A commonly cited formula for widening ($W$) in addition to the standard gauge, for broad gauge tracks on curves is:

$W = (\frac{L}{2R} + \delta) \times 1000 \text{ mm}$

Where:
*   $L$ = Wheelbase of the bogie (m)
*   $R$ = Radius of the curve (m)
*   $\delta$ = Additional clearance for flange play and wear (typically 10-20 mm per side, so ~0.01 to 0.02 m)

Let's apply this to our scenario:
$L = 2.5 \text{ m}$
$R = 400 \text{ m}$
Let's take $\delta = 15 \text{ mm}$ (0.015 m) for total flange interaction allowance.

$W = (\frac{2.5}{2 \times 400} + 0.015) \times 1000$
$W = (\frac{2.5}{800} + 0.015) \times 1000$
$W = (0.003125 + 0.015) \times 1000$
$W = 0.018125 \times 1000 = 18.125 \text{ mm}$

So, the additional widening on each side would be 18.125 mm. The total distance between the inner faces of the rails would be $1676 \text{ mm} + 18.125 \text{ mm} = 1694.125 \text{ mm}$.

**It is crucial to refer to the specific railway authority's design manual for precise formulas and values.**

#### 2.6 Factors Influencing Widening

*   **Radius of the Curve (R):** Sharper curves (smaller R) require more widening.
*   **Speed of Trains (v):** Higher speeds are associated with greater centrifugal forces, which indirectly influence the need for widening.
*   **Wheelbase of Rolling Stock (L):** Longer wheelbases of bogies lead to more swing, thus requiring more widening.
*   **Type of Rolling Stock:** Passenger coaches, freight wagons, and high-speed trains have different characteristics (wheelbase, suspension) that dictate widening needs.
*   **Gauge of the Track:** Different gauges (e.g., broad gauge, standard gauge, narrow gauge) will have different base widths and potentially different widening formulas.
*   **Maximum Permissible Cant Deficiency:** The allowance for cant deficiency influences the allowable speed and thus the centrifugal forces.
*   **Clearance Requirements:** Proximity of structures, platforms, and adjacent tracks dictate the minimum safe clearances, which might necessitate additional widening.
*   **Track Maintenance Standards:** The condition of rails and wheels can affect the actual lateral play.

---

### 3. Widening for Different Types of Curves and Rolling Stock

The magnitude of widening varies based on the specific context.

#### 3.1 Widening for Passenger vs. Freight Trains

*   **Passenger Trains:** Typically operate at higher speeds. While cant is the primary countermeasure for centrifugal force, the design speed and comfort requirements for passengers might necessitate a specific widening allowance. The shorter wheelbase of modern passenger bogies might also influence the widening calculation.
*   **Freight Trains:** Generally operate at lower speeds but have heavier loads and can have longer, more rigid bogie structures. Their longer wheelbases can lead to greater bogie swing, requiring more widening.

#### 3.2 Widening for Different Gauges

*   **Broad Gauge:** Has a wider standard gauge, and potentially different widening formulas tailored to its operational characteristics.
*   **Standard Gauge:** Common in many parts of the world, with specific standards for widening.
*   **Narrow Gauge:** Generally used for lighter traffic and lower speeds, might have smaller widening requirements.

#### 3.3 Transition Curves (Spiral Easements)

Transition curves are used to gradually introduce cant and curvature. Widening is also typically applied progressively along the transition curve, starting from zero at the tangent point and increasing to the full widening amount at the junction with the circular curve.

---

### 4. Maximum Permissible Widening

There are practical limits to how much a track can be widened. Excessive widening can lead to:

*   **Increased lateral forces on the track structure:** Especially on bridges and viaducts.
*   **Reduced stability of the track:** Potentially leading to derailment.
*   **Interference with adjacent tracks or structures:** Making it difficult to maintain standard clearances elsewhere.
*   **Uncomfortable ride:** If the widening is too much relative to other geometric parameters.

**General Limits:**

*   The total distance between the inner faces of the rails on a curve should not exceed a certain limit, often around **1700 mm** for broad gauge or a specific percentage of the standard gauge.
*   Specific railway authorities set maximum allowable widening values based on their operating speeds, rolling stock, and track construction standards. For example, a common maximum allowance for widening might be in the range of **25 mm to 75 mm** depending on the context.

---

### 5. Practical Considerations

*   **Gradual Application:** Widening is typically applied gradually on transition curves.
*   **Clearance Diagrams:** Detailed clearance diagrams are essential to ensure adequate space for all rolling stock and any potential movements on curves.
*   **Maintenance:** Widened tracks require careful maintenance to ensure the intended geometry is maintained.
*   **Interchange Points:** At points where curves meet, or where different types of track geometry are used, careful design is needed to ensure smooth transitions.
*   **Economic Factors:** The cost of providing extra ballast and track materials for widening needs to be balanced against safety and operational requirements.

---

### 6. Summary of Key Points to Remember

*   **Purpose of Widening:** To accommodate centrifugal force effects, bogie swing, flange interaction, and maintain clearances on curves.
*   **Components:** Widening is typically a sum of allowances for bogie swing, flange interaction, and sometimes indirectly for equilibrium cant considerations.
*   **Key Influencing Factors:** Radius of curve, speed, wheelbase of rolling stock, type of rolling stock, and track gauge.
*   **Bogie Swing:** Directly related to $L^2/R$, meaning sharper curves and longer wheelbases require more widening.
*   **Flange Interaction:** Accounts for lateral play and wear.
*   **Empirical Formulas:** Many formulas for widening are empirical and specific to railway authorities. Always consult relevant design codes.
*   **Transition Curves:** Widening is applied gradually on transition curves.
*   **Limits:** There are maximum permissible widening limits to ensure safety and stability.

---

### 7. Practice Questions and Exercises

**Question 1:**
Explain the primary reasons for widening railway tracks on curves.

**Answer:**
The primary reasons for widening railway tracks on curves are:
1.  **Centrifugal Force Counteraction:** To provide extra space for the outward thrust experienced by rolling stock on curves.
2.  **Bogie Swing:** To accommodate the lateral movement of bogies as they negotiate the curve.
3.  **Flange Interaction:** To allow for the lateral play between wheel flanges and the rail, and to account for wear.
4.  **Clearance Requirements:** To maintain adequate clearance between the rolling stock and adjacent structures (platforms, bridges, tunnels, etc.) or other tracks.

**Question 2:**
A broad gauge coaching train operates on a curve with a radius of 250 meters. The average wheelbase of its bogies is 2.2 meters. Calculate the widening required solely due to bogie swing. Assume the gauge is 1.676 meters.

**Answer:**
Using the formula $C_1 = \frac{L^2}{2R}$:
*   $L = 2.2$ m (wheelbase of bogie)
*   $R = 250$ m (radius of curve)

$C_1 = \frac{(2.2 \text{ m})^2}{2 \times 250 \text{ m}} = \frac{4.84 \text{ m}^2}{500 \text{ m}} = 0.00968 \text{ meters}$
$C_1 = 9.68 \text{ mm}$

So, the widening required due to bogie swing is approximately 9.68 mm.

**Question 3:**
What are the main factors that influence the magnitude of track widening required on a curve?

**Answer:**
The main factors influencing track widening are:
*   **Radius of the Curve (R):** Sharper curves require more widening.
*   **Speed of Trains (v):** Higher speeds are associated with greater centrifugal forces, indirectly influencing widening needs.
*   **Wheelbase of Rolling Stock (L):** Longer wheelbases lead to more bogie swing and require more widening.
*   **Type of Rolling Stock:** Passenger vs. freight trains have different characteristics.
*   **Gauge of the Track:** Different gauges have different base widths and potentially different design considerations.
*   **Flange Play and Wear:** Allowances for lateral movement and wear are included.

**Question 4:**
Discuss the practical implications of excessive track widening.

**Answer:**
Excessive track widening can lead to:
*   **Reduced Track Stability:** Potentially causing derailment.
*   **Increased Lateral Forces:** Damaging track components and adjacent structures.
*   **Clearance Violations:** Interfering with adjacent tracks or structures.
*   **Uncomfortable Ride:** Disrupting the intended dynamic behavior of the train.
*   **Increased Cost:** More materials and potential need for reinforced structures.

---

This concludes the study notes on Widening on Curves for Module 2 of Railway, Port and Harbor Engineering. Remember to consult specific railway design manuals for precise regulations and values applicable to your region or project.
