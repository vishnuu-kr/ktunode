---
title: "Design of vertical alignment - gradient - grade compensation – summit curves and valley curves"
subject: "TRANSPORTATION ENGINEERING"
module: "Module 1: Introduction:  Classification of roads"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810dd2"
status: "completed"
scrapedAt: "2026-05-20T18:51:32.579Z"
---
# Transportation Engineering: Module 1 - Introduction: Classification of Roads

## Topic: Design of Vertical Alignment - Gradient, Grade Compensation, Summit Curves, and Valley Curves

This module introduces the fundamental concepts of vertical alignment design in transportation engineering, focusing on how the road's elevation changes and the geometric elements required to ensure safe and comfortable travel.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Understand the concept of gradient and its significance in road design.**
*   **Define and explain grade compensation and its purpose.**
*   **Describe the necessity and types of summit curves.**
*   **Explain the design principles and types of valley curves.**
*   **Apply learned principles to solve basic design problems related to gradients, grade compensation, and curve design.**

---

### 1. Gradient (or Grade)

**Definition:**
A gradient, also known as a grade, is the **slope** of the roadway expressed as a **percentage**. It represents the rate of change in elevation with respect to horizontal distance.

**Significance:**
Gradients are crucial in vertical alignment design because they affect:
*   **Vehicle Performance:** Steep gradients can significantly reduce vehicle speed, increase fuel consumption, and impact braking efficiency, especially for heavy vehicles.
*   **Drainage:** Gradients facilitate surface water drainage, preventing water accumulation on the roadway.
*   **Sight Distance:** Gradients can limit sight distance, which is critical for safe stopping and overtaking.
*   **Construction Costs:** Steep gradients often require more earthwork (cuts and fills), increasing construction costs.
*   **Riding Comfort:** Excessive gradients can lead to an uncomfortable ride for passengers.

**Representation:**
Gradients are typically expressed as:
*   **Percentage:** Rise or fall in meters per 100 meters of horizontal distance.
    *   Example: A 5% grade means a rise or fall of 5 meters for every 100 meters of horizontal distance.
*   **Ratio:** Rise or fall in units per horizontal units.
    *   Example: 1 in 20 means a rise or fall of 1 unit for every 20 units of horizontal distance. (This is equivalent to 5%).

**Types of Gradients:**
*   **Ruling Gradient:** The **maximum allowable gradient** on a particular road section, determined by considering terrain, vehicle performance, and economic factors. It's the steepest gradient that should be encountered unless absolutely unavoidable.
*   **Exceptional Gradient:** A gradient that is **steeper than the ruling gradient** but is allowed in specific, short sections where the ruling gradient cannot be practically achieved due to topographical constraints.
*   **Limiting Gradient:** The **absolute steepest gradient** permitted for any road, often determined by national standards or specific project requirements. It's a maximum limit that should be avoided if at all possible.

**IRC Recommended Gradients (Indian Roads Congress):**

| Terrain Type | Ruling Gradient (%) | Exceptional Gradient (%) |
| :----------- | :------------------ | :----------------------- |
| Plain        | 3.3 (1 in 30)       | 5.0 (1 in 20)            |
| Rolling      | 5.0 (1 in 20)       | 6.7 (1 in 15)            |
| Mountainous  | 6.7 (1 in 15)       | 8.0 (1 in 12.5)          |
| Steep        | 8.0 (1 in 12.5)     | 10.0 (1 in 10)           |

**Important Note:** For highways and expressways, steeper ruling gradients are generally preferred to minimize construction costs, especially in hilly terrain.

---

### 2. Grade Compensation

**Definition:**
Grade compensation is the **reduction in the gradient** on a horizontal curve. It's an allowance made to counteract the additional resistance (both tractive and braking) experienced by vehicles when traversing a horizontal curve, especially on an upgrade.

**Purpose:**
*   **To offset the extra resistance:** When a vehicle negotiates a horizontal curve, particularly on an upgrade, it experiences increased tractive resistance due to the centrifugal force (which tends to push it outwards) and the steering effort required. Grade compensation helps to reduce the effective gradient, making it easier for vehicles to climb the curve.
*   **To maintain vehicle speed and performance:** By compensating for the extra resistance, grade compensation helps maintain a more consistent vehicle speed and performance on curves, improving traffic flow and safety.

**Methods of Grade Compensation:**

1.  **For Upgrades:** The gradient is reduced on the curve.
    *   **Formula:** Compensated Grade = Actual Grade - Grade Compensation Amount
    *   **Grade Compensation Amount:** This is usually calculated as a percentage and deducted from the actual grade.

2.  **For Downgrades:** Grade compensation is generally **not applied** to downgrades. This is because on a downgrade, gravity assists the vehicle's motion, and the extra resistance on a curve can be managed through braking. In fact, some designers might even consider a slight increase in the effective gradient on curves to promote faster drainage on downgrades, though this is less common and depends on specific design policies.

**IRC Recommendations for Grade Compensation:**

The IRC provides specific rules for calculating grade compensation. The amount of compensation to be deducted from the grade on curves is the **least** of the following:

*   **30% of the actual grade:** This is a simple percentage deduction.
*   **Grade equivalent of the centrifugal force:** This is calculated based on the speed and the radius of the curve. The formula is often expressed as:
    $\text{Grade Equivalent} = \frac{11.75 R}{R - 30}$  (where R is the radius of the horizontal curve in meters). This formula is derived from considering the centrifugal force and its effect on vehicle resistance. *Note: The specific formula might vary slightly based on design codes and assumptions, but the principle remains the same.*
*   **6.7%:** This is an absolute maximum compensation amount.

**Calculation Example:**

*   **Scenario:** A road has a horizontal curve with a radius of 200 meters and an upgrade of 4%.
*   **IRC Grade Compensation Rules:**
    *   **30% of actual grade:** $0.30 \times 4\% = 1.2\%$
    *   **Grade equivalent of centrifugal force:** Let's assume the speed is 60 kmph. The formula for grade equivalent is often related to the centrifugal ratio ($f_c = \frac{V^2}{gR}$), where V is speed, g is acceleration due to gravity, and R is the radius. A common simplified approach for grade compensation calculation using speed and radius is: $\text{Grade Compensation} = \frac{V^2}{2.27R}$ (where V is in kmph and R is in meters).
        For V = 60 kmph and R = 200m:
        Grade Compensation = $\frac{60^2}{2.27 \times 200} = \frac{3600}{454} \approx 7.93\%$
    *   **Absolute Maximum:** 6.7%

*   **Determining the Compensation:** The least of 1.2%, 7.93%, and 6.7% is **1.2%**.
*   **Compensated Grade:** $4\% - 1.2\% = 2.8\%$

**Important Point to Remember:** Grade compensation is only applied to **upgrades** and when the ruling gradient is approached or exceeded on a curve.

---

### 3. Summit Curves (Crest Curves)

**Definition:**
A summit curve, also known as a crest curve, is a **vertical curve** that connects two successive grades, where the first grade is **upward** and the second grade is **downward**. These curves occur at the crest of a hill or embankment.

**Necessity:**
*   **Riding Comfort:** To provide a smooth transition between two different gradients, preventing abrupt changes in vertical acceleration that can be uncomfortable for passengers.
*   **Sight Distance:** Primarily to provide adequate **stopping sight distance (SSD)**. On summit curves, the obstructing embankment in front of the driver limits the line of sight. The curve must be designed so that the driver can see far enough ahead to safely stop the vehicle if an obstacle appears.

**Types of Summit Curves:**

*   **Symmetric Summit Curve:** The tangent lengths from the point of vertical intersection (PVI) to the points of vertical tangency (PVT) are equal. The curve is parabolic.
*   **Asymmetric Summit Curve:** The tangent lengths are unequal. These are less common for standard vertical alignment and usually occur when joining a very short tangent length.

**Design Considerations:**

*   **Stopping Sight Distance (SSD):** This is the most critical factor. The summit curve must be long enough to ensure that the line of sight from the driver's eye to an object on the road is not obstructed by the curve itself.
*   **Comfort:** The rate of change of centrifugal acceleration should be within acceptable limits for passenger comfort.
*   **Aesthetics:** To create a visually pleasing transition.

**Key Geometric Parameters:**

*   **Point of Vertical Intersection (PVI):** The theoretical intersection of the two tangent grades.
*   **Point of Vertical Tangency (PVT):** The point where the tangent grade ends and the vertical curve begins.
*   **Point of Vertical Curve (PVC):** The point where the vertical curve begins.
*   **Length of Vertical Curve (L):** The horizontal distance between the PVC and the PVT.
*   **Tangent Length (T):** The horizontal distance from the PVI to the PVC (or PVT for symmetric curves). For symmetric parabolic curves, $T = L/2$.
*   **Offset (y):** The vertical distance between the tangent grade and the curve at any horizontal distance 'x' from the PVC. For a parabolic curve, $y = \frac{Ax^2}{2L}$, where A is the algebraic difference in grades (change in gradient).

**Design Formula (for Parabolic Summit Curves):**

The length of the summit curve (L) is determined by the required stopping sight distance (SSD) and the algebraic difference in grades (A). The IRC provides design criteria.

The length of the summit curve required to provide a certain SSD can be calculated using the following simplified formulas (derived from considering the line of sight tangent to the curve):

*   **When SSD < L:**
    $L = \frac{2 \times SSD \times A}{h_1 + h_2}$

    Where:
    *   $L$ = Length of the vertical curve (in meters)
    *   $SSD$ = Required stopping sight distance (in meters)
    *   $A$ = Algebraic difference in grades (in percent)
    *   $h_1$ = Height of the driver's eye above the pavement (typically 1.2 meters)
    *   $h_2$ = Height of the object on the road (typically 0.15 meters for fixed objects, or 0.45m for low-lying vehicles)

*   **When SSD > L:** (This formula accounts for comfort as well)
    $L = \frac{SSD \times A}{1.5}$  (for comfort criteria, if A is positive, meaning upgrade followed by downgrade)

    $L = SSD$  (if A is negative, meaning downgrade followed by upgrade, but this is for valley curves)

**Simplified IRC Formula for Summit Curves (primarily for SSD):**

The required length of summit curve (L) for SSD is determined by comparing the actual sight distance provided by a curve of a certain length with the required SSD.

*   **For SSD $\ge$ L:**
    $L = \frac{2 \times SSD \times A}{h_1 + h_2}$  (This formula is often used to determine L when SSD is limiting)

*   **For SSD < L:**
    $L = \frac{SSD \times A}{1.5}$ (This formula ensures a minimum rate of change of acceleration for comfort. $1.5$ is related to the maximum allowable rate of change of acceleration).

**Key to remember:** The primary design criterion for summit curves is to ensure adequate **stopping sight distance**.

---

### 4. Valley Curves (Sag Curves)

**Definition:**
A valley curve, also known as a sag curve, is a **vertical curve** that connects two successive grades, where the first grade is **downward** and the second grade is **upward**. These curves occur in sag points, such as at the bottom of a dip or underpass.

**Necessity:**
*   **Riding Comfort:** To provide a smooth transition between two downward and upward gradients. This is crucial to avoid abrupt upward acceleration, which can be uncomfortable and alarming to passengers.
*   **Sight Distance:** To provide adequate **stopping sight distance (SSD)**. In valley curves, the visible portion of the road ahead is limited by the curvature of the valley itself. The driver's line of sight can be obstructed by the curve of the road.
*   **Drainage:** While not the primary design factor for the curve's geometry, proper valley curves facilitate drainage to the low point.

**Types of Valley Curves:**

*   **Symmetric Valley Curve:** Similar to summit curves, the tangent lengths from PVI to PVT are equal.
*   **Asymmetric Valley Curve:** Tangent lengths are unequal.

**Design Considerations:**

*   **Comfort:** This is the **most critical factor** for valley curves. The upward acceleration experienced by passengers on a valley curve can be substantial and should be kept within comfortable limits.
*   **Stopping Sight Distance (SSD):** While important, it's often secondary to comfort, as the line of sight is generally less obstructed in valley curves compared to summit curves (unless there are overhead obstructions like bridges).
*   **Headlight Sight Distance (HSD):** In nighttime driving, the driver's ability to see objects illuminated by their headlights is crucial. The headlight beam typically illuminates a certain distance ahead, and the valley curve's length must ensure that the illuminated portion is adequate.

**Key Geometric Parameters:**

Similar to summit curves: PVI, PVT, PVC, L, T, and offsets (y).

**Design Formula (for Parabolic Valley Curves):**

The length of the valley curve (L) is determined by comfort criteria and, in some cases, headlight sight distance (HSD).

*   **For Comfort (most critical):**
    $L = \frac{V^2 \times A}{c}$

    Where:
    *   $L$ = Length of the vertical curve (in meters)
    *   $V$ = Design speed of the road (in kmph)
    *   $A$ = Algebraic difference in grades (in percent). For valley curves, A is usually considered as the absolute value of the difference in grades.
    *   $c$ = Maximum allowable rate of change of centrifugal acceleration (comfort criterion), typically 0.3 m/s³ for national highways.

*   **For Headlight Sight Distance (HSD):**
    $L = \frac{2 \times HSD \times A}{h_1 + h_2}$  (This formula is similar to the SSD formula for summit curves, but HSD is used instead of SSD, and $h_1$ and $h_2$ are heights related to headlight beam)

    Where:
    *   $HSD$ = Required headlight sight distance (in meters)
    *   $h_1$ = Height of the headlight beam above the pavement (typically 0.6 meters)
    *   $h_2$ = Height of the object on the road (typically 0.15 meters)

**IRC Recommended Values for Comfort Criterion (c):**

| Road Category      | Maximum Rate of Change of Acceleration (c) (m/s³) |
| :----------------- | :------------------------------------------------ |
| National Highways  | 0.3                                               |
| State Highways     | 0.5                                               |
| Other Roads        | 0.6 - 0.8                                         |

**Key to remember:** The primary design criterion for valley curves is **passenger comfort** due to upward acceleration.

---

### Practice Questions and Exercises

**Question 1:**
A road in rolling terrain has a ruling gradient of 5%. If a horizontal curve on an upgrade has a radius of 150 meters, calculate the required grade compensation. Assume the design speed is 60 kmph.

**Question 2:**
Design a summit curve for a road with the following:
*   Incoming grade: +3%
*   Outgoing grade: -4%
*   Design speed: 80 kmph
*   Assume height of driver's eye ($h_1$) = 1.2 m, and height of object ($h_2$) = 0.15 m.
*   Calculate the required length of the summit curve based on stopping sight distance.

**Question 3:**
A valley curve is to be designed to connect a downgrade of 4% to an upgrade of 3% at a design speed of 100 kmph. Calculate the required length of the valley curve for comfort, assuming a maximum allowable rate of change of acceleration (c) of 0.3 m/s³.

---

### Answers to Practice Questions

**Answer 1:**
*   **Actual Grade:** 5%
*   **IRC Grade Compensation Rules:**
    *   30% of actual grade = $0.30 \times 5\% = 1.5\%$
    *   Grade equivalent of centrifugal force (using $L = \frac{V^2}{2.27R}$ to find compensated grade and then subtract from actual grade, or directly calculating grade compensation):
        Grade Compensation = $\frac{V^2}{2.27R} = \frac{60^2}{2.27 \times 150} = \frac{3600}{340.5} \approx 10.57\%$
    *   Absolute Maximum = 6.7%
*   **Required Grade Compensation:** The least of 1.5%, 10.57%, and 6.7% is **1.5%**.
*   **Compensated Grade:** $5\% - 1.5\% = 3.5\%$

**Answer 2:**
*   **Algebraic difference in grades (A):** $|-4\% - (+3\%)| = |-7\%| = 7\%$
*   **Stopping Sight Distance (SSD) for 80 kmph:** (This value needs to be referenced from standard IRC tables or formulas. Assuming a typical value for 80 kmph, let's say SSD = 130 meters for calculation purposes. *Note: In a real exam, you would be provided with SSD values or asked to calculate them separately.*)
*   **Design Criteria:** We need to check both SSD and comfort.
    *   **For SSD:**
        $L = \frac{2 \times SSD \times A}{h_1 + h_2} = \frac{2 \times 130 \times 7}{1.2 + 0.15} = \frac{1820}{1.35} \approx 1348.15$ meters.
    *   **For comfort:** The formula for comfort for summit curves is often given as $L = \frac{SSD \times A}{1.5}$ (if SSD < L). If we consider comfort as a primary driver, we can use the IRC guidelines. A common formula related to comfort is $L = \frac{V^2}{c \times (\text{some factor})}$. For summit curves, the comfort criterion is related to the rate of change of centrifugal acceleration. A simplified IRC approach for summit curves related to comfort is to ensure the curve is long enough that the rate of change of acceleration is within limits. If we assume a maximum rate of change of acceleration factor of say 0.5 (related to the comfort parameter 'c' for valley curves, but used differently for summit curves), we could estimate. However, the most common IRC approach for summit curves focuses on SSD.
*   **Required Length of Summit Curve:** Based on SSD, the required length is approximately **1349 meters**. *It's important to use the specific IRC guidelines provided for the particular course to ensure the correct comfort criterion is applied if it's a primary driver for summit curves.*

**Answer 3:**
*   **Incoming Grade:** -4%
*   **Outgoing Grade:** +3%
*   **Algebraic difference in grades (A):** $|+3\% - (-4\%)| = |+7\%| = 7\%$
*   **Design Speed (V):** 100 kmph
*   **Comfort Criterion (c):** 0.3 m/s³
*   **Required Length of Valley Curve (for comfort):**
    $L = \frac{V^2 \times A}{c} = \frac{100^2 \times 7}{0.3 \times 1000}$ (Convert A to decimal and c to units compatible with V²)
    $L = \frac{10000 \times 7}{300} = \frac{70000}{300} = 233.33$ meters.
    *Note: The formula for 'c' often involves units of m/s³, and V is in m/s. Converting V to m/s: 100 kmph = $100 \times \frac{1000}{3600} = 27.78$ m/s.*
    $L = \frac{(27.78)^2 \times 7}{0.3} = \frac{771.7 \times 7}{0.3} \approx 1799.5$ meters.

    Let's re-verify the formula units. The IRC formula $L = \frac{V^2 A}{c}$ with V in kmph, A in %, and c in m/s³ is common. A common simplification is:
    $L = \frac{V \times A}{1.5}$ (where V is speed in kmph, A is grade difference in %) for comfort on summit curves.
    For valley curves, the IRC uses a formula derived from comfort considerations. The formula $L = \frac{V^2 A}{c}$ where $c$ is the rate of change of acceleration. If $c$ is in m/s³, V should be in m/s.
    $V = 100 \text{ kmph} = 100 \times \frac{5}{18} \text{ m/s} = 27.78 \text{ m/s}$
    $A = 7\%$
    $c = 0.3 \text{ m/s}³$
    $L = \frac{(27.78 \text{ m/s})^2 \times 7\%}{0.3 \text{ m/s}³}$
    *We need to be careful with units. The % in A needs to be handled. $A=7\% = 0.07$ (as a ratio). If A is kept as percentage, c might have different units.*

    Let's use a common IRC format where V is in kmph, A is in %:
    IRC recommends for comfort: $L = \frac{V \times A}{1.5}$ for summit curves.
    For valley curves, a common approach is:
    $L = \frac{V^2 A}{1050}$ where V is in kmph, A is in %, and L is in meters. (This is a simplified empirical formula that incorporates comfort)
    $L = \frac{100^2 \times 7}{1050} = \frac{10000 \times 7}{1050} = \frac{70000}{1050} \approx 66.67$ meters.

    **Another common IRC formula for valley curves based on comfort:**
    $L = \frac{V \times A}{c'}$ where $c'$ is a coefficient related to comfort (e.g., for 70-80 kmph, it might be around 0.5).
    *However, the most universally accepted IRC formula for valley curves based on comfort uses the rate of change of acceleration.*

    Let's use the formula provided with the question directly: $L = \frac{V^2 \times A}{c}$
    Where $V$ is in m/s, $A$ is the difference in gradient as a decimal, and $c$ is the rate of change of acceleration.
    $V = 100 \text{ kmph} = 27.78 \text{ m/s}$
    $A = 7\% = 0.07$
    $c = 0.3 \text{ m/s}³$
    $L = \frac{(27.78)^2 \times 0.07}{0.3} = \frac{771.7 \times 0.07}{0.3} = \frac{54.02}{0.3} \approx 180.07$ meters.

    **The answer is approximately 180 meters.** (It's crucial to use the exact IRC formulas and coefficients provided in your specific course material for precise answers).

---

### Important Points to Remember:

*   **Gradients:** Affect vehicle performance, drainage, sight distance, cost, and comfort. Ruling gradients are key design parameters.
*   **Grade Compensation:** Applied to **upgrades** on horizontal curves to offset extra tractive resistance. The IRC provides specific rules for calculation (least of 30% grade, grade equivalent, or 6.7%).
*   **Summit Curves:** Connect an upgrade to a downgrade. Primarily designed for **stopping sight distance (SSD)**. The length is determined by SSD and algebraic difference in grades.
*   **Valley Curves:** Connect a downgrade to an upgrade. Primarily designed for **passenger comfort** due to upward acceleration. The length is determined by design speed, algebraic difference in grades, and the comfort criterion ('c'). Headlight sight distance is also a consideration for valley curves.
*   **Parabolic curves** are typically used for vertical curves due to their desirable properties in terms of consistent rate of change of acceleration and ease of calculation.

---
This concludes the notes for the design of vertical alignment elements. Remember to consult your specific course materials for exact IRC formulas, coefficients, and design speed values.
