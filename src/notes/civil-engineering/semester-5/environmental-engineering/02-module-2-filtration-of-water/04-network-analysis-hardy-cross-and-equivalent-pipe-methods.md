---
title: "Network analysis –Hardy cross and equivalent pipe methods."
subject: "ENVIRONMENTAL ENGINEERING"
module: "Module 2: Filtration of water"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810e06"
status: "completed"
scrapedAt: "2026-05-20T18:48:15.573Z"
---
# Environmental Engineering: Module 2 - Filtration of Water

## Topic: Network Analysis – Hardy Cross and Equivalent Pipe Methods

---

### 1. Introduction to Water Distribution Networks

Water distribution networks are complex systems of interconnected pipes that transport water from a source to consumers. Analyzing these networks is crucial for:

*   **Ensuring adequate supply:** Meeting demand under various conditions.
*   **Maintaining pressure:** Delivering water at sufficient pressure to all users.
*   **Minimizing energy consumption:** Optimizing pump operation.
*   **Identifying inefficiencies:** Detecting leaks and blockages.
*   **Planning for future growth:** Expanding the network to accommodate increased demand.

The flow of water in these networks is governed by the principles of fluid mechanics, specifically relating flow rate, pressure drop, and pipe characteristics.

---

### 2. Challenges in Analyzing Water Distribution Networks

*   **Interconnectedness:** Flow in one pipe affects flow in many others, making direct calculation difficult.
*   **Numerous loops:** The presence of multiple closed loops creates redundant paths for flow, making it challenging to determine the flow distribution.
*   **Varying demand:** Water consumption fluctuates throughout the day, week, and year.
*   **Pipe deterioration:** Aging pipes can have increased roughness, leading to higher head losses.
*   **Valve and hydrant operation:** The state of valves and hydrants (open/closed) significantly impacts flow patterns.

---

### 3. Key Concepts and Definitions

*   **Head Loss (h<sub>f</sub>):** The reduction in hydraulic head (pressure head + elevation head) of water as it flows through a pipe due to friction and minor losses.
*   **Hydraulic Grade Line (HGL):** A line representing the elevation of the total energy (pressure head + elevation head) of the water in the system.
*   **Energy Grade Line (EGL):** A line representing the total energy of the water, including velocity head. In most water distribution networks, velocity heads are negligible, so HGL and EGL are nearly identical.
*   **Discharge (Q):** The volume of water flowing per unit time, typically measured in m³/s or L/s.
*   **Velocity (V):** The speed at which water flows through a pipe, typically measured in m/s.
*   **Pipe Diameter (D):** The internal diameter of the pipe, typically measured in meters.
*   **Pipe Length (L):** The length of the pipe segment, typically measured in meters.
*   **Friction Factor (f):** A dimensionless parameter that accounts for the resistance to flow due to the roughness of the pipe's inner surface.
*   **Minor Losses:** Head losses that occur due to fittings, valves, entrances, exits, and other flow disturbances. These are often expressed as a fraction of the velocity head.
*   **Darcy-Weisbach Equation:** A fundamental equation used to calculate head loss due to friction in pipes:

    $h_f = f \frac{L}{D} \frac{V^2}{2g}$

    Where:
    *   $h_f$ = head loss due to friction (m)
    *   $f$ = Darcy friction factor (dimensionless)
    *   $L$ = pipe length (m)
    *   $D$ = pipe diameter (m)
    *   $V$ = average flow velocity (m/s)
    *   $g$ = acceleration due to gravity (m/s²)

*   **Hazen-Williams Equation:** An empirical formula commonly used in water distribution network analysis, especially for civil engineers. It's often preferred for its simplicity when dealing with turbulent flow in water systems.

    $V = k C L^{0.54} D^{0.63} S^{0.54}$

    Where:
    *   $V$ = flow velocity (m/s)
    *   $k$ = a constant depending on units (1.318 for SI units, 1.0 for metric units if $V$ is in ft/s and $D$ is in ft)
    *   $C$ = Hazen-Williams roughness coefficient (dimensionless, varies with pipe material and age)
    *   $L$ = pipe length (m)
    *   $D$ = pipe diameter (m)
    *   $S$ = slope of the hydraulic grade line ($h_f/L$)

    The Hazen-Williams equation can be rearranged to calculate head loss ($h_f$):

    $h_f = \frac{L}{C^{1.852} D^{4.87}} Q^{1.852}$

    Or, more commonly in network analysis:

    $h_f = \frac{k' L}{C^{1.852} D^{4.87}} Q^{1.852}$

    Where $k'$ is a constant that depends on the units used for Q and D. A common form used in network analysis is:

    $h_f = K Q^{1.852}$

    Where $K = \frac{k' L}{C^{1.852} D^{4.87}}$.

*   **Head Loss (h<sub>f</sub>) in Network Analysis:** Often expressed as $h_f = r Q^n$, where $r$ is a resistance coefficient and $n$ is typically around 1.852 for Hazen-Williams or 2 for Darcy-Weisbach (simplified).

---

### 4. Hardy Cross Method (Method of Cross-Over)

The Hardy Cross method is an iterative technique used to balance the flow and head losses in a closed loop of a water distribution network. It is based on the principle that in a steady-state system, the sum of head losses around any closed loop must be zero, and the flow entering a junction must equal the flow leaving it.

**Learning Outcome 1: Understand the Hardy Cross method for analyzing pipe networks.**

**Key Concepts:**

*   **Loops:** Closed paths within the pipe network where water can circulate.
*   **Junctions (Nodes):** Points where pipes connect.
*   **Discharge (Q):** Flow rate in each pipe.
*   **Head Loss (h<sub>f</sub>):** Calculated using an assumed flow and pipe characteristics.
*   **Balance:** Achieving zero net head loss around a loop.

**Steps of the Hardy Cross Method:**

1.  **Assume Initial Flows:** Assign initial tentative flow rates to each pipe in the network. This can be done by:
    *   Visually inspecting the network and assigning plausible flows.
    *   Determining flows based on the demand at junctions and source supply.
    *   **Important:** Ensure that the continuity equation (flow in = flow out) is satisfied at all junctions.

2.  **Identify Loops:** Identify all independent closed loops in the network.

3.  **Calculate Head Losses in Each Pipe:** For each assumed flow rate ($Q_{assumed}$), calculate the head loss ($h_f$) in each pipe segment using an appropriate formula (e.g., Hazen-Williams: $h_f = r Q_{assumed}^{1.852}$).

4.  **Calculate Loop Misclosure (ΔQ):** For each loop, calculate the algebraic sum of the head losses. If the sum is not zero, there is a misclosure.
    *   Flows in the *clockwise* direction are usually considered positive.
    *   Flows in the *counter-clockwise* direction are usually considered negative.
    *   The sum of head losses ($Σh_f$) around the loop will be non-zero.

    The correction in flow ($ΔQ$) is calculated using the following formula:

    $ΔQ = \frac{Σh_f}{n Σ\frac{h_f}{Q}}$

    Where:
    *   $ΔQ$ is the correction to be applied to the initial assumed flows in the loop.
    *   $Σh_f$ is the algebraic sum of head losses around the loop for the assumed flows.
    *   $n$ is the exponent in the head loss formula ($Q^n$). For Hazen-Williams, $n = 1.852$.
    *   $Σ\frac{h_f}{Q}$ is the sum of the derivatives of head loss with respect to flow for each pipe in the loop. This is equivalent to summing $n \cdot r \cdot Q^{n-1}$ or more simply, summing $\frac{h_f}{Q}$ for each pipe.

5.  **Adjust Flows:**
    *   Add $ΔQ$ to all pipes flowing in the *assumed positive (clockwise)* direction.
    *   Subtract $ΔQ$ from all pipes flowing in the *assumed negative (counter-clockwise)* direction.
    *   **Important:** For pipes that are part of multiple loops, the adjustments from each loop are applied sequentially. The flow in a pipe that is part of two loops is adjusted based on the $ΔQ$ calculated for each loop.

6.  **Repeat:** Recalculate the head losses with the adjusted flows and repeat steps 4 and 5 until the loop misclosure ($Σh_f$) in each loop is acceptably small (e.g., < 0.1 m or a small percentage of the total head loss).

**Example of Hardy Cross Method:**

Consider a single square loop with four pipes: A, B, C, D.
Let the Hazen-Williams equation be $h_f = r Q^{1.852}$.
Assume clockwise flow direction is positive.

| Pipe | Length (L) | Diameter (D) | C    | r ($k' L / C^{1.852} D^{4.87}$) | Assumed Q (clockwise) | $h_f = r Q^{1.852}$ | $h_f/Q$ |
| :--- | :--------- | :----------- | :--- | :------------------------------- | :-------------------- | :------------------ | :---- |
| A    | 100        | 0.2          | 130  | 2.5                              | 5 L/s                 | 2.5 * 5<sup>1.852</sup> = 69.9 | 14.0  |
| B    | 100        | 0.2          | 130  | 2.5                              | 5 L/s                 | 2.5 * 5<sup>1.852</sup> = 69.9 | 14.0  |
| C    | 100        | 0.2          | 130  | 2.5                              | 5 L/s                 | 2.5 * 5<sup>1.852</sup> = 69.9 | 14.0  |
| D    | 100        | 0.2          | 130  | 2.5                              | 5 L/s                 | 2.5 * 5<sup>1.852</sup> = 69.9 | 14.0  |

**Iteration 1:**

*   Assume all flows are 5 L/s in the clockwise direction.
*   $Σh_f = 69.9 + 69.9 + 69.9 + 69.9 = 279.6$ m (This is a large positive misclosure, indicating the assumed flows are too high or the pipe resistance is high).
*   $Σ(h_f/Q) = 14.0 + 14.0 + 14.0 + 14.0 = 56.0$
*   $n = 1.852$
*   $ΔQ = \frac{279.6}{1.852 \times 56.0} = \frac{279.6}{103.712} ≈ 2.696$ L/s

**Adjust Flows:**
Add $ΔQ$ to all pipes (since they are all assumed clockwise):
*   New Q(A) = 5 + 2.696 = 7.696 L/s
*   New Q(B) = 5 + 2.696 = 7.696 L/s
*   New Q(C) = 5 + 2.696 = 7.696 L/s
*   New Q(D) = 5 + 2.696 = 7.696 L/s

**Important Note:** In a real scenario, if the initial assumption leads to a large misclosure, it might indicate an error in assumption or that the network is not physically balanced with the assumed conditions. However, for the purpose of demonstrating the method, we proceed with the calculation. Let's re-calculate with a more reasonable initial assumption to better illustrate the balancing process.

**Revised Example (for illustration of balancing):**

Suppose the demand at junction X is 10 L/s and the supply is from point S. The network has a loop.

| Pipe | r     | Assumed Q (Clockwise) | $h_f = r Q^{1.852}$ | $h_f/Q$ |
| :--- | :---- | :-------------------- | :------------------ | :---- |
| 1    | 100   | 8                     | 100 * 8<sup>1.852</sup> = 4631 | 578.9 |
| 2    | 150   | 6                     | 150 * 6<sup>1.852</sup> = 4215 | 702.5 |
| 3    | 120   | -3 (Counter-clockwise) | 120 * 3<sup>1.852</sup> = 1049 | 349.7 |
| 4    | 180   | -5 (Counter-clockwise) | 180 * 5<sup>1.852</sup> = 1309 | 261.8 |

**Iteration 1:**

*   **Loop 1 (Pipes 1 and 2 are part of the loop):**
    *   Let's assume pipes 1 and 2 form a loop, and pipes 3 and 4 are supply/demand lines.
    *   Pipe 1: Assume Q = 8 L/s (clockwise), $h_f = 4631$. $h_f/Q = 578.9$.
    *   Pipe 2: Assume Q = 6 L/s (clockwise), $h_f = 4215$. $h_f/Q = 702.5$.
    *   Loop Misclosure ($Σh_f$) = 4631 + 4215 = 8846.
    *   $Σ(h_f/Q)$ for the loop = 578.9 + 702.5 = 1281.4
    *   $n = 1.852$
    *   $ΔQ = \frac{8846}{1.852 \times 1281.4} = \frac{8846}{2372.7} ≈ 3.728$ L/s

*   **Adjust Flows for Loop 1:**
    *   New Q(1) = 8 + 3.728 = 11.728 L/s
    *   New Q(2) = 6 + 3.728 = 9.728 L/s

*   **Loop 2 (Pipes 3 and 4 form a loop):**
    *   Pipe 3: Assume Q = 3 L/s (counter-clockwise), $h_f = 1049$. $h_f/Q = 349.7$.
    *   Pipe 4: Assume Q = 5 L/s (counter-clockwise), $h_f = 1309$. $h_f/Q = 261.8$.
    *   Loop Misclosure ($Σh_f$) = -1049 - 1309 = -2358 (Negative because flows are counter-clockwise).
    *   $Σ(h_f/Q)$ for the loop = 349.7 + 261.8 = 611.5
    *   $ΔQ = \frac{-2358}{1.852 \times 611.5} = \frac{-2358}{1132.3} ≈ -2.082$ L/s

*   **Adjust Flows for Loop 2:**
    *   New Q(3) = 3 - (-2.082) = 5.082 L/s (now clockwise)
    *   New Q(4) = 5 - (-2.082) = 7.082 L/s (now clockwise)

After the first iteration, the flows are updated. You would then recalculate $h_f$ and $h_f/Q$ for all pipes with the new flows and repeat the process for all identified loops until convergence.

**Learning Outcome 2: Calculate flow rates and head losses in pipe networks using the Hardy Cross method.**

---

### 5. Equivalent Pipe Method

The equivalent pipe method is used to simplify a system of pipes in parallel or series into a single equivalent pipe. This simplifies calculations, especially for complex branched networks that can be reduced to simpler forms.

**Learning Outcome 3: Determine the equivalent pipe for a series and parallel pipe system.**

**Key Concepts:**

*   **Series Pipes:** Pipes connected end-to-end. The total head loss is the sum of head losses in individual pipes, and the flow rate is the same through all.
*   **Parallel Pipes:** Pipes connected between two common points. The total flow rate is the sum of flow rates through individual pipes, and the head loss is the same across all parallel pipes.

**Equivalent Pipe for Pipes in Series:**

For pipes in series, the total head loss is the sum of individual head losses for the same flow rate ($Q$).

$h_{f,total} = h_{f1} + h_{f2} + h_{f3} + ...$

Using the formula $h_f = r Q^n$:

$r_{eq} Q_{eq}^n = r_1 Q_1^n + r_2 Q_2^n + r_3 Q_3^n + ...$

Since $Q_{eq} = Q_1 = Q_2 = Q_3 = ...$, we have:

$r_{eq} Q^n = (r_1 + r_2 + r_3 + ...) Q^n$

Therefore, the equivalent resistance coefficient is the sum of individual resistance coefficients:

$r_{eq} = r_1 + r_2 + r_3 + ...$

**Learning Outcome 4: Simplify pipe networks using the equivalent pipe method.**

**Equivalent Pipe for Pipes in Parallel:**

For pipes in parallel, the head loss across each pipe is the same, and the total flow is the sum of individual flows.

$h_{f,eq} = h_{f1} = h_{f2} = h_{f3} = ...$
$Q_{total} = Q_1 + Q_2 + Q_3 + ...$

Using the formula $h_f = r Q^n$, which can be rewritten as $Q = (h_f/r)^{1/n}$:

$Q_{eq} = Q_1 + Q_2 + Q_3 + ...$
$(\frac{h_{f,eq}}{r_{eq}})^{\frac{1}{n}} = (\frac{h_{f1}}{r_1})^{\frac{1}{n}} + (\frac{h_{f2}}{r_2})^{\frac{1}{n}} + (\frac{h_{f3}}{r_3})^{\frac{1}{n}} + ...$

Since $h_{f,eq} = h_{f1} = h_{f2} = h_{f3} = ...$, let $h_f = h_{f,eq}$:

$(\frac{h_f}{r_{eq}})^{\frac{1}{n}} = (\frac{h_f}{r_1})^{\frac{1}{n}} + (\frac{h_f}{r_2})^{\frac{1}{n}} + (\frac{h_f}{r_3})^{\frac{1}{n}} + ...$

Divide by $h_f^{1/n}$:

$\frac{1}{r_{eq}^{\frac{1}{n}}} = \frac{1}{r_1^{\frac{1}{n}}} + \frac{1}{r_2^{\frac{1}{n}}} + \frac{1}{r_3^{\frac{1}{n}}} + ...$

$\frac{1}{r_{eq}^{\frac{1}{n}}} = \sum_{i=1}^{N} \frac{1}{r_i^{\frac{1}{n}}}$

To find $r_{eq}$:

$r_{eq} = (\sum_{i=1}^{N} \frac{1}{r_i^{\frac{1}{n}}})^{-n}$

For the common case of $n=1.852$ (Hazen-Williams):

$r_{eq} = (\sum_{i=1}^{N} \frac{1}{r_i^{0.537}})^{-1.852}$

**Example of Equivalent Pipe Method:**

**Scenario 1: Series Pipes**
Pipe 1: $L=100m$, $D=0.2m$, $C=120$, $r_1 = 150$
Pipe 2: $L=150m$, $D=0.2m$, $C=120$, $r_2 = 225$
(Assuming $r \propto L$, so $r_1 = k \times 100$ and $r_2 = k \times 150$, where $k$ is a constant for diameter and C)

Equivalent pipe for series:
$r_{eq} = r_1 + r_2 = 150 + 225 = 375$.
The equivalent pipe would have a resistance coefficient of 375. Its length and diameter can be determined based on the original pipes' properties to maintain the same relationship. For instance, if we want an equivalent pipe of diameter 0.2m, we can calculate its equivalent length.

**Scenario 2: Parallel Pipes**
Pipe A: $r_A = 100$, $n=1.852$
Pipe B: $r_B = 150$, $n=1.852$

Equivalent pipe for parallel:
$n = 1.852$
$\frac{1}{r_{eq}^{1/n}} = \frac{1}{r_A^{1/n}} + \frac{1}{r_B^{1/n}}$
$\frac{1}{r_{eq}^{0.537}} = \frac{1}{100^{0.537}} + \frac{1}{150^{0.537}}$
$100^{0.537} \approx 34.4$
$150^{0.537} \approx 46.3$
$\frac{1}{r_{eq}^{0.537}} = \frac{1}{34.4} + \frac{1}{46.3} = 0.02907 + 0.02159 = 0.05066$
$r_{eq}^{0.537} = \frac{1}{0.05066} \approx 19.74$
$r_{eq} = (19.74)^{1/0.537} \approx (19.74)^{1.862} \approx 810$

So, the equivalent pipe has a resistance coefficient of approximately 810.

**Simplifying Branched Networks:**
The equivalent pipe method is particularly useful for simplifying complex branched networks. One can start from the furthest points of the network and progressively replace parallel or series pipe segments with their equivalent single pipes until the entire network is reduced to a simpler form, often a single loop or a few key pipes.

---

### 6. Practice Questions and Exercises

**Question 1 (Hardy Cross):**
Consider a simple single loop with four pipes. The resistance coefficients ($r$ for $h_f = r Q^{1.852}$) and initial assumed flows (in L/s) are given below. Calculate the correction ($ΔQ$) for this loop.

| Pipe | r     | Assumed Q (Clockwise) |
| :--- | :---- | :-------------------- |
| 1    | 100   | 10                    |
| 2    | 150   | 8                     |
| 3    | 120   | -5 (Counter-clockwise) |
| 4    | 180   | -7 (Counter-clockwise) |

**Answer 1:**
First, calculate $h_f$ and $h_f/Q$ for each pipe:

| Pipe | r     | Assumed Q | $h_f = r Q^{1.852}$ | $h_f/Q$ |
| :--- | :---- | :-------- | :------------------ | :---- |
| 1    | 100   | 10        | 100 * 10<sup>1.852</sup> = 7115 | 711.5 |
| 2    | 150   | 8         | 150 * 8<sup>1.852</sup> = 4631 | 578.9 |
| 3    | 120   | -5        | 120 * 5<sup>1.852</sup> = 2995 | 599.0 |
| 4    | 180   | -7        | 180 * 7<sup>1.852</sup> = 4154 | 593.4 |

Now, calculate the loop misclosure and sum of $(h_f/Q)$:
*   Assume Pipe 1 and 2 are in clockwise direction of the loop.
*   Assume Pipe 3 and 4 are in counter-clockwise direction of the loop.

Let's define the loop such that pipes 1 and 3 are in one direction and pipes 2 and 4 are in the other. For simplicity, let's consider a loop where Pipe 1 and Pipe 4 are in the same direction (e.g., clockwise), and Pipe 2 and Pipe 3 are in the opposite direction (counter-clockwise).

Alternatively, let's assume a single loop where all flows are defined relative to that loop.
If we assume a clockwise loop:
Pipe 1: Q = 10 (clockwise), $h_f = 7115$. $h_f/Q = 711.5$.
Pipe 2: Q = 8 (clockwise), $h_f = 4631$. $h_f/Q = 578.9$.
Pipe 3: Q = -5 (counter-clockwise, so effectively 5 counter-clockwise), $h_f = 2995$ (absolute value of head loss). To get $h_f/Q$ in the formula, we use the actual assumed $Q$. So, for pipe 3, $h_f = 120 \times (-5)^{1.852}$ is not directly applicable with negative $Q$ in the $h_f = rQ^n$ form.

Let's rephrase: For Hardy Cross, we *assume* directions.
Assume a loop: Pipe 1 (clockwise), Pipe 2 (clockwise), Pipe 3 (counter-clockwise), Pipe 4 (counter-clockwise).

| Pipe | r     | Assumed Q (Clockwise) | $h_f = r Q^{1.852}$ | $h_f/Q$ |
| :--- | :---- | :-------------------- | :------------------ | :---- |
| 1    | 100   | +10                   | 7115                | 711.5 |
| 2    | 150   | +8                    | 4631                | 578.9 |
| 3    | 120   | -5                    | 120 * 5<sup>1.852</sup> = 2995 | 599.0 |
| 4    | 180   | -7                    | 180 * 7<sup>1.852</sup> = 4154 | 593.4 |

**Loop Misclosure ($Σh_f$):**
Head loss for a counter-clockwise flow in pipe 3 and 4 would be negative relative to the clockwise direction.
So, $Σh_f = h_{f1} + h_{f2} - h_{f3} - h_{f4}$ (if the absolute values of $h_f$ are used and signs are applied based on assumed direction).
More correctly, for Hardy Cross, we use the signed $h_f$ values based on the assumed $Q$.
If $Q$ is positive (clockwise), $h_f$ is positive. If $Q$ is negative (counter-clockwise), $h_f$ is negative.
$h_{f1} = 100 \times (10)^{1.852} = 7115$
$h_{f2} = 150 \times (8)^{1.852} = 4631$
$h_{f3} = 120 \times (-5)^{1.852}$ This form isn't directly used. We use the magnitude and then apply the sign.
Let's use the definition: $h_f = r Q^{1.852}$. If Q is negative, this formula directly doesn't work for head loss calculation without considering the sign of flow.
The correct way to represent the head loss due to friction for a flow Q is $sign(Q) \times r \times |Q|^{1.852}$.

So, $h_{f1} = +7115$. $h_{f2} = +4631$.
For pipe 3, assumed Q = -5. $h_{f3} = sign(-5) \times 120 \times |-5|^{1.852} = -1 \times 120 \times 5^{1.852} = -2995$.
For pipe 4, assumed Q = -7. $h_{f4} = sign(-7) \times 180 \times |-7|^{1.852} = -1 \times 180 \times 7^{1.852} = -4154$.

$Σh_f = 7115 + 4631 + (-2995) + (-4154) = 11746 - 7149 = 4597$.

Now calculate $Σ\frac{h_f}{Q}$:
We use the absolute value of $h_f$ divided by the absolute value of $Q$.
$h_{f1}/Q_1 = 7115 / 10 = 711.5$
$h_{f2}/Q_2 = 4631 / 8 = 578.9$
$h_{f3}/Q_3 = 2995 / 5 = 599.0$ (using absolute values)
$h_{f4}/Q_4 = 4154 / 7 = 593.4$ (using absolute values)

$Σ\frac{h_f}{Q}$ (using magnitudes for the divisor) $= 711.5 + 578.9 + 599.0 + 593.4 = 2482.8$.

$n = 1.852$
$ΔQ = \frac{Σh_f}{n Σ\frac{h_f}{Q}} = \frac{4597}{1.852 \times 2482.8} = \frac{4597}{4598.3} ≈ 0.9995$ L/s.
So, $ΔQ \approx 1.0$ L/s.

**Question 2 (Equivalent Pipe):**
Three pipes are laid in parallel connecting two points A and B.
Pipe 1: $r_1 = 200$, $n=1.852$
Pipe 2: $r_2 = 300$, $n=1.852$
Pipe 3: $r_3 = 250$, $n=1.852$
Calculate the resistance coefficient ($r_{eq}$) of a single equivalent pipe.

**Answer 2:**
Using the formula for parallel pipes:
$r_{eq} = (\sum_{i=1}^{N} \frac{1}{r_i^{\frac{1}{n}}})^{-n}$

$n = 1.852$, so $1/n \approx 0.537$.
$r_1^{0.537} = 200^{0.537} \approx 43.2$
$r_2^{0.537} = 300^{0.537} \approx 56.1$
$r_3^{0.537} = 250^{0.537} \approx 50.5$

$\sum \frac{1}{r_i^{0.537}} = \frac{1}{43.2} + \frac{1}{56.1} + \frac{1}{50.5}$
$= 0.02315 + 0.01783 + 0.01980 = 0.06078$

$r_{eq} = (0.06078)^{-1.852}$
$r_{eq} = (16.45)^{1.852} \approx 692$

The equivalent pipe has a resistance coefficient of approximately 692.

**Question 3 (Mixed Series/Parallel):**
A network has a pipe A in series with a parallel combination of pipes B and C.
Pipe A: $r_A = 100$, $n=1.852$
Pipe B: $r_B = 200$, $n=1.852$
Pipe C: $r_C = 300$, $n=1.852$
Find the resistance coefficient of the equivalent pipe for the entire series-parallel combination.

**Answer 3:**
First, find the equivalent resistance for the parallel pipes B and C.
From Question 2, we can reuse the calculation for parallel pipes.
Let's recalculate for B and C:
$r_B^{0.537} = 200^{0.537} \approx 43.2$
$r_C^{0.537} = 300^{0.537} \approx 56.1$
$\sum \frac{1}{r_i^{0.537}} = \frac{1}{43.2} + \frac{1}{56.1} = 0.02315 + 0.01783 = 0.04098$
$r_{BC} = (0.04098)^{-1.852} = (24.40)^{1.852} \approx 146.8$

Now, pipe A is in series with the equivalent pipe BC.
$r_{eq, total} = r_A + r_{BC}$
$r_{eq, total} = 100 + 146.8 = 246.8$

The equivalent resistance coefficient for the entire combination is approximately 246.8.

---

### 7. Important Points to Remember

*   **Hardy Cross:** Iterative method for loop analysis. Ensure continuity at junctions and balance head loss in loops. Clockwise flows are usually positive.
*   **Hazen-Williams vs. Darcy-Weisbach:** Hazen-Williams is empirical and often preferred for water distribution analysis due to its simplicity. Darcy-Weisbach is more fundamental.
*   **Exponent 'n':** For Hazen-Williams, $n \approx 1.852$. For Darcy-Weisbach (simplified), $n \approx 2$.
*   **Equivalent Pipe:** Simplifies network analysis. Series: resistances add. Parallel: inverse nth power resistances are summed.
*   **Units Consistency:** Always maintain consistent units throughout calculations.
*   **Convergence:** Hardy Cross requires iteration until the loop misclosure is sufficiently small.
*   **Computer Software:** For large and complex networks, specialized hydraulic modeling software (e.g., EPANET) is used, which often employs methods like Hardy Cross or more advanced algorithms.

---

### 8. Learning Outcomes Covered

*   **Understand the Hardy Cross method for analyzing pipe networks.** (Covered in Section 4)
*   **Calculate flow rates and head losses in pipe networks using the Hardy Cross method.** (Covered in Section 4 with examples)
*   **Determine the equivalent pipe for a series and parallel pipe system.** (Covered in Section 5)
*   **Simplify pipe networks using the equivalent pipe method.** (Covered in Section 5 with explanation of application)

---
