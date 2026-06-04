---
title: "Design of signal timing at isolated intersections- Phase design- optimum cycle time (Webster’s approach), green splitting-pedestrian phase -phase diagrams, timing diagram."
subject: "TRAFFIC ENGINEERING AND MANAGEMENT"
module: "Module 4: Traffic Signals "
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba8111e9"
status: "completed"
scrapedAt: "2026-05-20T18:56:22.836Z"
---
# Traffic Engineering and Management: Module 4 - Traffic Signals

## Topic: Design of Signal Timing at Isolated Intersections

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the principles of phase design for isolated intersections.
*   Calculate the optimum cycle time using Webster's approach.
*   Determine appropriate green splits for different phases.
*   Incorporate pedestrian phases into signal timing plans.
*   Interpret and create phase diagrams.
*   Develop and understand timing diagrams.

---

### 1. Introduction to Signal Timing at Isolated Intersections

Isolated intersections are those where the influence of other nearby signals is negligible. The primary goal of signal timing is to allocate right-of-way to competing traffic movements efficiently and safely, minimizing delays and the risk of collisions.

---

### 2. Phase Design

**2.1 Definition of a Phase:**

A phase is a period during which a specific set of traffic movements (e.g., a specific approach or a combination of approaches with compatible movements) is given a green signal.

**2.2 Types of Phases:**

*   **Exclusive Phase:** A phase dedicated to a single traffic movement or a group of movements that do not conflict with each other.
    *   *Example:* A left-turn-only phase for a particular approach.
*   **Protected Phase:** A phase where a specific movement is protected by a green arrow, indicating it has exclusive right-of-way and is not in conflict with opposing traffic.
*   **Permitted Phase:** A phase where a movement (usually a left turn) is allowed to proceed on a circular green signal, but it must yield to opposing traffic and pedestrians.
*   **Protected-Permitted Phase:** A phase that begins with a protected green arrow followed by a permitted period on a circular green.

**2.3 Phase Sequencing:**

The order in which phases are displayed is crucial for efficient operation. Common sequencing strategies include:

*   **Lead-Lag Left Turns:**
    *   **Lead:** The left turn phase is displayed before the corresponding through traffic.
    *   **Lag:** The left turn phase is displayed after the corresponding through traffic.
    *   *Considerations:*
        *   **Volume of left turns:** High left-turn volumes might benefit from a lead phase.
        *   **Opposing through traffic volume:** High opposing through traffic might necessitate a lag phase to reduce conflicts.
        *   **Pedestrian activity:** Pedestrian crossing times influence the suitability of lead or lag phases.
        *   **Sight distance:** Limited sight distance for left-turning vehicles might favor a protected lead phase.

**2.4 Number of Phases:**

The number of phases depends on the complexity of the intersection and the movements to be accommodated. Common configurations:

*   **Two-Phase:** Typically for simple intersections with two major movements (e.g., North-South through and East-West through).
*   **Three-Phase:** May include one or more left-turn phases alongside through movements.
*   **Four-Phase:** Accommodates all major movements, often with separate phases for left turns from opposing directions.
*   **More than Four Phases:** Used for complex intersections with multiple turning movements or significant pedestrian activity.

**2.5 Key Considerations in Phase Design:**

*   **Traffic Volume:** The number and distribution of vehicles on each approach.
*   **Turning Movements:** The volume of left and right turns.
*   **Pedestrian Activity:** The number of pedestrians and their crossing patterns.
*   **Vehicle Classification:** The mix of vehicles (cars, trucks, buses).
*   **Minimum Green Times:** The shortest duration a phase can be green to allow vehicles to start and clear the intersection.
*   **Lost Time:** The time lost at the beginning and end of each green interval due to start-up delays and clearance.

---

### 3. Optimum Cycle Time (Webster's Approach)

The cycle time (C) is the total time it takes for the signal to display all its phases in sequence. Webster's approach is a widely used method to determine the optimum cycle time that minimizes total intersection delay.

**3.1 Key Concepts:**

*   **Lost Time (L):** The total time during a cycle when the signal is not effectively serving traffic. It includes:
    *   **Start-up Lost Time (Y):** The time lost at the beginning of a green interval before the first vehicle in a platoon can proceed.
    *   **Clearance Lost Time (r):** The time lost at the end of a green interval due to vehicles needing to clear the intersection during the yellow and all-red phases.
    *   **Total Lost Time per Phase (l):** The sum of start-up lost time and clearance lost time for a single phase.
    *   **Total Lost Time per Cycle (L):** The sum of lost time for all phases in a cycle. $L = \sum l_i$ (where $l_i$ is the lost time for phase $i$).
*   **Critical Lane Group:** The lane group with the highest ratio of flow to saturation flow rate for a given phase.
*   **Saturation Flow Rate ($s$):** The maximum rate at which vehicles can pass through an intersection from a given lane or group of lanes, assuming a continuous green signal.
*   **Actual Flow Rate ($q$):** The actual number of vehicles passing through an intersection per unit of time.
*   **Lost Time Factor ($x$):** The ratio of critical flow rate to saturation flow rate for a given phase: $x = q/s$.
*   **Effective Green Time ($g_e$):** The actual green time available for a phase plus the yellow clearance. $g_e = g + y$ (where $g$ is the net green time and $y$ is the yellow clearance).
*   **Effective Cycle Time ($C_e$):** The total cycle time plus the total lost time per cycle. $C_e = C + L$.

**3.2 Webster's Formula for Optimum Cycle Time ($C_{opt}$):**

Webster's formula aims to balance the utilization of green time and minimize the sum of delays. It is derived from queuing theory and traffic flow principles.

$$ C_{opt} = \frac{1.5L + 5}{1 - Y} $$

Where:

*   $C_{opt}$ = Optimum cycle time (seconds)
*   $L$ = Total lost time per cycle (seconds)
*   $Y$ = Sum of the ratios of critical flow to saturation flow for all phases in the cycle (Y = $\sum (q_i / s_i)$)

**3.3 Steps to Calculate $C_{opt}$:**

1.  **Identify Phases:** Determine the necessary phases for the intersection.
2.  **Estimate Saturation Flow Rates ($s_i$):** Determine the saturation flow rate for each critical movement in each phase. This is often based on standard values or adjusted for local conditions (e.g., lane width, heavy vehicles, grades).
3.  **Estimate Critical Flow Rates ($q_i$):** Determine the peak hour flow rate (or design hour flow rate) for each critical movement.
4.  **Calculate Flow Ratios ($x_i = q_i / s_i$):** For each phase, calculate the ratio of critical flow to saturation flow.
5.  **Calculate Sum of Flow Ratios ($Y$):** Sum the flow ratios for all phases: $Y = \sum x_i$.
6.  **Estimate Lost Time per Phase ($l_i$):** Estimate the lost time associated with each phase. This typically includes:
    *   **Start-up Lost Time:** Typically 2-3 seconds.
    *   **Clearance Lost Time:** Typically the sum of the yellow change interval and the all-red interval.
7.  **Calculate Total Lost Time per Cycle ($L$):** Sum the lost time per phase for all phases: $L = \sum l_i$.
8.  **Apply Webster's Formula:** Substitute the values of $L$ and $Y$ into the formula: $C_{opt} = \frac{1.5L + 5}{1 - Y}$.
9.  **Set a Practical Minimum Cycle Time:** Apply a practical minimum cycle time (e.g., 40-60 seconds) to ensure at least some vehicles can pass, especially for low-volume approaches.
10. **Set a Practical Maximum Cycle Time:** Apply a practical maximum cycle time (e.g., 120-150 seconds) to avoid excessive delays for any single movement and to prevent drivers from becoming impatient.
11. **Select Final Cycle Time:** Choose a cycle time within the practical limits that is closest to $C_{opt}$ and considers other operational factors.

**3.4 Example Calculation:**

Consider a simple four-leg intersection with two phases:

*   **Phase 1 (North-South):** Through movements
*   **Phase 2 (East-West):** Through movements

**Data:**

| Movement          | Saturation Flow Rate ($s$) | Peak Hour Flow Rate ($q$) | Lost Time per Phase ($l$) |
| :---------------- | :------------------------- | :------------------------ | :------------------------ |
| N-S Through       | 1800 vph                   | 600 vph                   | 5 seconds (Y+AR)          |
| E-W Through       | 1700 vph                   | 500 vph                   | 5 seconds (Y+AR)          |

**Calculations:**

1.  **Flow Ratios:**
    *   $x_1 = q_1 / s_1 = 600 / 1800 = 0.333$
    *   $x_2 = q_2 / s_2 = 500 / 1700 = 0.294$
2.  **Sum of Flow Ratios ($Y$):**
    *   $Y = x_1 + x_2 = 0.333 + 0.294 = 0.627$
3.  **Total Lost Time per Cycle ($L$):**
    *   $L = l_1 + l_2 = 5 + 5 = 10$ seconds
4.  **Optimum Cycle Time ($C_{opt}$):**
    *   $C_{opt} = \frac{1.5L + 5}{1 - Y} = \frac{1.5(10) + 5}{1 - 0.627} = \frac{15 + 5}{0.373} = \frac{20}{0.373} \approx 53.6$ seconds

**Practical Considerations:**

*   If a minimum cycle time of 60 seconds is desired, then 60 seconds would be chosen.
*   If a maximum cycle time of 100 seconds is desired, 53.6 seconds is well within this limit.
*   A cycle time of 55 seconds or 60 seconds might be selected.

---

### 4. Green Splitting

Green splitting is the process of allocating the available effective green time within a cycle to the different phases in proportion to their demands.

**4.1 Principles of Green Splitting:**

*   **Proportional to Demand:** Green time should be allocated based on the ratio of the critical flow rate to the sum of critical flow rates for all phases.
*   **Proportional to Ratio of Flows:** Similar to proportional to demand, but uses the flow ratio ($q/s$).
*   **Proportional to Critical Lane Capacity:** Distributes green time to provide equal levels of service or capacity to critical lanes.
*   **Webster's Method for Green Splitting:**
    *   The effective green time for each phase ($g_{e,i}$) is determined as:
        $$ g_{e,i} = \frac{x_i}{Y} \times C_{cycle} $$
    *   Where:
        *   $g_{e,i}$ = Effective green time for phase $i$
        *   $x_i = q_i / s_i$ (flow ratio for phase $i$)
        *   $Y = \sum x_i$ (sum of flow ratios for all phases)
        *   $C_{cycle}$ = The selected cycle time (often the optimum cycle time or a practical cycle time).

**4.2 Calculating Net Green Time ($g_i$):**

Once the effective green time ($g_{e,i}$) is calculated, the net green time ($g_i$) can be found by subtracting the yellow clearance interval ($y_i$):

$$ g_i = g_{e,i} - y_i $$

**4.3 Sequencing and Intergreens:**

*   **Intergreen Period:** The time between the clearance of one phase and the commencement of the next phase. It includes the yellow change interval and the all-red interval.
*   **Total Intergreen:** The sum of yellow and all-red times for a phase. This is the clearance lost time ($l_i$) if start-up lost time is excluded.
*   **Total Lost Time ($L$):** $L = \sum (\text{yellow}_i + \text{all-red}_i)$ for all phases. Note that start-up lost time is often implicitly accounted for by the $1.5L$ term in Webster's formula.

**4.4 Example Calculation (Continuing from previous example):**

Using the same data and selecting a cycle time ($C_{cycle}$) of 60 seconds:

**Data:**

*   Phase 1 (N-S): $x_1 = 0.333$, $q_1 = 600$ vph, $s_1 = 1800$ vph, $y_1 = 3$ seconds (assume yellow)
*   Phase 2 (E-W): $x_2 = 0.294$, $q_2 = 500$ vph, $s_2 = 1700$ vph, $y_2 = 3$ seconds (assume yellow)
*   $Y = 0.627$
*   $C_{cycle} = 60$ seconds

**Calculations:**

1.  **Effective Green Time ($g_{e,i}$):**
    *   $g_{e,1} = \frac{x_1}{Y} \times C_{cycle} = \frac{0.333}{0.627} \times 60 \approx 0.531 \times 60 \approx 31.9$ seconds
    *   $g_{e,2} = \frac{x_2}{Y} \times C_{cycle} = \frac{0.294}{0.627} \times 60 \approx 0.469 \times 60 \approx 28.1$ seconds
    *   *Check:* $g_{e,1} + g_{e,2} = 31.9 + 28.1 = 60$ seconds (equal to $C_{cycle}$)

2.  **Net Green Time ($g_i$):**
    *   $g_1 = g_{e,1} - y_1 = 31.9 - 3 = 28.9$ seconds
    *   $g_2 = g_{e,2} - y_2 = 28.1 - 3 = 25.1$ seconds

**Important Note:** The sum of net green times ($g_1 + g_2 = 28.9 + 25.1 = 54$ seconds) plus the lost times (yellows: $3+3=6$ seconds) equals the cycle time (60 seconds). However, this simplistic approach doesn't account for all-red intervals and start-up lost time directly in the green split calculation.

**A More Refined Approach to Green Splitting:**

A more robust approach is to allocate the **available green time** (Cycle Time minus Total Lost Time) proportionally.

*   Total Lost Time ($L$) considering start-up (2 sec) and clearance (Yellow + All-Red):
    *   Assume start-up lost time ($l_{su}$) = 2 sec for each phase.
    *   Assume yellow ($y$) = 3 sec for each phase.
    *   Assume all-red ($AR$) = 1 sec for each phase.
    *   Lost time per phase ($l_i$) = $l_{su} + y + AR = 2 + 3 + 1 = 6$ seconds.
    *   Total Lost Time per Cycle ($L$) = $l_1 + l_2 = 6 + 6 = 12$ seconds.

*   **Available Green Time:** $C_{cycle} - L = 60 - 12 = 48$ seconds.

*   **Proportional Allocation of Available Green Time:**
    *   Phase 1: $(x_1 / Y) \times (\text{Available Green Time}) = (0.333 / 0.627) \times 48 \approx 0.531 \times 48 \approx 25.5$ seconds
    *   Phase 2: $(x_2 / Y) \times (\text{Available Green Time}) = (0.294 / 0.627) \times 48 \approx 0.469 \times 48 \approx 22.5$ seconds

*   **Net Green Time ($g_i$):**
    *   $g_1 = 25.5$ seconds
    *   $g_2 = 22.5$ seconds

*   **Effective Green Time ($g_{e,i}$):**
    *   $g_{e,1} = g_1 + y_1 + AR_1 = 25.5 + 3 + 1 = 29.5$ seconds
    *   $g_{e,2} = g_2 + y_2 + AR_2 = 22.5 + 3 + 1 = 26.5$ seconds
    *   *Check:* Sum of effective green times = $29.5 + 26.5 = 56$ seconds.
    *   Total Cycle Time = Sum of effective green times + Total lost time (start-up) = $56 + (2+2) = 60$ seconds. This method is more aligned with the components of Webster's formula.

---

### 5. Pedestrian Phase

Pedestrian signals provide a protected time for pedestrians to cross the roadway, often coordinated with vehicular phases.

**5.1 Pedestrian Timing Components:**

*   **Walk Interval (W):** The period when the "WALK" symbol is displayed, indicating that pedestrians may begin to cross.
*   **Flashing Don't Walk (FDW) Interval:** The period when the "Flashing DON'T WALK" symbol is displayed. Pedestrians should not start crossing, but those already in the crosswalk should finish crossing. This is typically calculated based on pedestrian walking speed.
*   **Pedestrian Clearance Time ($T_p$):** The total time allocated for pedestrians to cross, which includes the Walk interval and the Flashing Don't Walk interval.
    *   $T_p = W + FDW$
*   **Pedestrian Clearance Calculation:**
    *   $FDW = \frac{\text{Crossing Distance} - \text{Effective Width}}{\text{Pedestrian Walking Speed}}$
    *   **Effective Width:** The width of the crosswalk that needs to be cleared. This is typically the width of the crosswalk minus the width of the curb return or any medians.
    *   **Pedestrian Walking Speed:** Typically assumed to be 1.0 to 1.2 m/s (3.3 to 4.0 ft/s). The lower end is often used for safety and accessibility.

**5.2 Integrating Pedestrian Phases:**

Pedestrian phases are typically integrated into the vehicular signal phasing plan.

*   **Concurrent Pedestrian Phase:** The pedestrian crossing occurs simultaneously with a vehicular phase. The pedestrian phase must be timed to clear the crosswalk before the conflicting vehicular phase receives a green signal.
*   **Exclusive Pedestrian Phase (Scramble Crossing):** All vehicular traffic is stopped, and pedestrians can cross in any direction, including diagonally. This is less common for isolated intersections unless pedestrian volumes are very high.

**5.3 Timing a Pedestrian Phase:**

1.  **Determine Crossing Distance:** Measure the width of the crosswalk.
2.  **Determine Pedestrian Walking Speed:** Select an appropriate speed (e.g., 1.2 m/s).
3.  **Determine Walk Interval:** A minimum of 7 seconds is generally recommended.
4.  **Calculate Pedestrian Clearance Time ($T_p$):**
    *   $T_p = \text{Walk Interval} + \frac{\text{Crossing Distance}}{\text{Pedestrian Walking Speed}}$
5.  **Allocate Pedestrian Clearance to FDW:**
    *   $FDW = T_p - \text{Walk Interval}$
6.  **Integrate with Vehicle Phases:** The pedestrian clearance time ($T_p$) must fit within the effective green time of the concurrent vehicle phase. The pedestrian phase is typically provided during the protected phase for the adjacent vehicular movement.

**5.4 Example: Pedestrian Crossing Timing**

*   **Intersection:** Main Street (North-South) and First Avenue (East-West).
*   **Pedestrian Crossing:** Crossing Main Street at First Avenue.
*   **Crossing Distance:** 20 meters.
*   **Pedestrian Walking Speed:** 1.2 m/s.
*   **Walk Interval:** 7 seconds.

**Calculations:**

1.  **Pedestrian Clearance Time ($T_p$):**
    *   $T_p = 7 \text{ sec} + \frac{20 \text{ m}}{1.2 \text{ m/s}} = 7 \text{ sec} + 16.7 \text{ sec} = 23.7$ seconds
2.  **Flashing Don't Walk Interval (FDW):**
    *   $FDW = T_p - \text{Walk Interval} = 23.7 \text{ sec} - 7 \text{ sec} = 16.7$ seconds

**Integration:**

*   If this pedestrian phase is concurrent with the N-S through vehicle phase, the effective green time for the N-S phase must be at least $T_p = 23.7$ seconds. The "WALK" would be displayed for 7 seconds, followed by "Flashing DON'T WALK" for 16.7 seconds. This pedestrian clearance time must be accommodated within the green split for the N-S vehicular phase.

---

### 6. Phase Diagrams

A phase diagram visually represents the sequence and duration of each phase within a signal cycle. It helps to understand the flow of traffic and pedestrian movements.

**6.1 Components of a Phase Diagram:**

*   **Phases:** Clearly labeled with the movements they serve (e.g., N-S Through, E-W Left).
*   **Colors:** Typically represented by blocks of color:
    *   Green: Permitted movement.
    *   Yellow: Change interval.
    *   Red: Stop interval.
    *   All-Red: Clearance interval.
*   **Time Axis:** Represents the duration of each interval within the cycle.
*   **Minimum Green:** The shortest duration a phase can be green.
*   **Maximum Green:** The longest duration a phase can be green (if using actuated control, though this topic focuses on isolated intersections, implying pre-timed or less complex actuated).
*   **Lost Time:** Often indicated by the yellow and all-red intervals.

**6.2 Creating a Phase Diagram (using previous example):**

*   **Cycle Time:** 60 seconds
*   **Phase 1 (N-S Through):**
    *   Effective Green ($g_{e,1}$): 29.5 seconds
    *   Yellow ($y_1$): 3 seconds
    *   All-Red ($AR_1$): 1 second
    *   Net Green ($g_1$): 25.5 seconds
*   **Phase 2 (E-W Through):**
    *   Effective Green ($g_{e,2}$): 26.5 seconds
    *   Yellow ($y_2$): 3 seconds
    *   All-Red ($AR_2$): 1 second
    *   Net Green ($g_2$): 22.5 seconds

**Phase Diagram Representation:**

```
Cycle Time = 60 seconds

Phase 1 (N-S Through):
    | Green (25.5s) | Yellow (3s) | All-Red (1s) | Red (30.5s) |
    -------------------------------------------------------------> Time

Phase 2 (E-W Through):
                               | Red (25.5s) | Green (22.5s) | Yellow (3s) | All-Red (1s) | Red (7s) |
                               -------------------------------------------------------------------------> Time
```

**Note:** In a phase diagram, the red intervals of one phase will overlap with the green/yellow/all-red intervals of other phases. The diagram below shows the sequence of effective green times and clearance intervals.

**Simplified Phase Diagram:**

```
      _____________________________________________________
     | Phase 1 (N-S) Green | Phase 1 Yellow | Phase 1 AR |
     |_____________________|________________|____________|
     |                     | Phase 2 Red    | Phase 2 Green| Phase 2 Yellow | Phase 2 AR |
     |_____________________|________________|____________|________________|____________|
     0s                                    29.5s          32.5s             33.5s         60s (start of next cycle)
```

*   Phase 1 Green: 0s to 25.5s (Net Green)
*   Phase 1 Yellow: 25.5s to 28.5s
*   Phase 1 All-Red: 28.5s to 29.5s
*   Phase 2 Green: 29.5s to 52.0s (29.5 + 22.5)
*   Phase 2 Yellow: 52.0s to 55.0s
*   Phase 2 All-Red: 55.0s to 56.0s
*   The remaining time (56.0s to 60.0s) is red for both phases, representing the end of the cycle.

---

### 7. Timing Diagram

A timing diagram is a more detailed representation of the signal timing for all approaches at an intersection. It shows the start and end times of each signal indication (Green, Yellow, Red) for each approach.

**7.1 Components of a Timing Diagram:**

*   **Approaches:** Listed vertically for each street.
*   **Time Axis:** Horizontal, showing the cycle length.
*   **Signal Indications:** Blocks representing the color of the signal head for each approach during specific time intervals.

**7.2 Creating a Timing Diagram (using previous example):**

*   **Cycle Time:** 60 seconds
*   **Phase 1 (N-S Through):**
    *   Effective Green: 29.5 seconds (0s to 29.5s)
    *   Yellow: 3 seconds (29.5s to 32.5s)
    *   All-Red: 1 second (32.5s to 33.5s)
    *   Red: 33.5s to 60.0s
*   **Phase 2 (E-W Through):**
    *   Red: 0s to 29.5s
    *   Green: 29.5s to 52.0s (Effective Green)
    *   Yellow: 52.0s to 55.0s
    *   All-Red: 55.0s to 56.0s
    *   Red: 56.0s to 60.0s

**Timing Diagram Representation:**

```
                  0s      25.5s   29.5s   32.5s   33.5s              52.0s   55.0s   56.0s   60.0s
Approach        ------------------------------------------------------------------------------------
N-S Through     | GREEN   | GREEN   | YELLOW  | ALL-RED | RED     | RED     | RED     | RED     |
                | (25.5s) | (4s)    | (3s)    | (1s)    | (26.5s) | (4s)    | (1s)    | (4s)    |
----------------------------------------------------------------------------------------------------
E-W Through     | RED     | RED     | RED     | RED     | GREEN   | GREEN   | YELLOW  | ALL-RED |
                | (25.5s) | (4s)    | (3s)    | (1s)    | (22.5s) | (3s)    | (1s)    | (4s)    |
```

**Explanation:**

*   The N-S approach gets its net green of 25.5 seconds, followed by yellow and all-red.
*   During the N-S green and clearance, the E-W approach is red.
*   After the N-S phase clears (at 33.5s), the E-W approach starts its green phase of 22.5 seconds, followed by yellow and all-red.
*   The diagram shows the precise timing of each signal indication for every approach, allowing for clear understanding and implementation of the signal timing plan.

---

### Practice Questions and Exercises

**Question 1:**

A two-phase isolated intersection has the following critical lane volumes and saturation flow rates:

*   **Phase 1 (North-South Through):** $q_1 = 700$ vph, $s_1 = 1900$ vph
*   **Phase 2 (East-West Through):** $q_2 = 600$ vph, $s_2 = 1800$ vph

The lost time per phase (including yellow and all-red) is estimated at 5 seconds for each phase. Calculate the optimum cycle time using Webster's approach.

**Answer 1:**

1.  **Flow Ratios:**
    *   $x_1 = q_1 / s_1 = 700 / 1900 \approx 0.368$
    *   $x_2 = q_2 / s_2 = 600 / 1800 \approx 0.333$
2.  **Sum of Flow Ratios ($Y$):**
    *   $Y = x_1 + x_2 = 0.368 + 0.333 = 0.701$
3.  **Total Lost Time per Cycle ($L$):**
    *   $L = l_1 + l_2 = 5 + 5 = 10$ seconds
4.  **Optimum Cycle Time ($C_{opt}$):**
    *   $C_{opt} = \frac{1.5L + 5}{1 - Y} = \frac{1.5(10) + 5}{1 - 0.701} = \frac{15 + 5}{0.299} = \frac{20}{0.299} \approx 66.9$ seconds

**Question 2:**

For the intersection in Question 1, if a cycle time of 70 seconds is selected, determine the effective green time for each phase using Webster's method for green splitting. Assume the yellow time for each phase is 3 seconds.

**Answer 2:**

1.  **Given:**
    *   $C_{cycle} = 70$ seconds
    *   $x_1 = 0.368$, $x_2 = 0.333$, $Y = 0.701$
    *   $y_1 = 3$ seconds, $y_2 = 3$ seconds

2.  **Effective Green Time ($g_{e,i}$):**
    *   $g_{e,1} = \frac{x_1}{Y} \times C_{cycle} = \frac{0.368}{0.701} \times 70 \approx 0.525 \times 70 \approx 36.75$ seconds
    *   $g_{e,2} = \frac{x_2}{Y} \times C_{cycle} = \frac{0.333}{0.701} \times 70 \approx 0.475 \times 70 \approx 33.25$ seconds
    *   *Check:* $36.75 + 33.25 = 70$ seconds

3.  **Net Green Time ($g_i$):**
    *   $g_1 = g_{e,1} - y_1 = 36.75 - 3 = 33.75$ seconds
    *   $g_2 = g_{e,2} - y_2 = 33.25 - 3 = 30.25$ seconds

**Question 3:**

A pedestrian crossing a road is 15 meters wide. The allocated Walk interval is 7 seconds. Assuming a pedestrian walking speed of 1.2 m/s, calculate the required pedestrian clearance time (Walk + Flashing Don't Walk).

**Answer 3:**

1.  **Calculate Pedestrian Clearance Time ($T_p$):**
    *   $T_p = \text{Walk Interval} + \frac{\text{Crossing Distance}}{\text{Pedestrian Walking Speed}}$
    *   $T_p = 7 \text{ sec} + \frac{15 \text{ m}}{1.2 \text{ m/s}} = 7 \text{ sec} + 12.5 \text{ sec} = 19.5$ seconds

2.  **Calculate Flashing Don't Walk Interval (FDW):**
    *   $FDW = T_p - \text{Walk Interval} = 19.5 \text{ sec} - 7 \text{ sec} = 12.5$ seconds

**Exercise:**

Create a simplified phase diagram for a three-phase intersection with the following data:

*   **Phase 1 (N-S Through):** Effective Green = 30s, Yellow = 3s, All-Red = 1s
*   **Phase 2 (E-W Through):** Effective Green = 25s, Yellow = 3s, All-Red = 1s
*   **Phase 3 (N-S Left Turn):** Effective Green = 15s, Yellow = 3s, All-Red = 1s

Assume the cycle starts with Phase 1.

**Answer:**

(This would be a visual diagram. Here's a description and a simplified text representation.)

*   **Cycle Time:** 30s (G1) + 3s (Y1) + 1s (AR1) + 25s (G2) + 3s (Y2) + 1s (AR2) + 15s (G3) + 3s (Y3) + 1s (AR3) = 82 seconds. *Correction: The phases run sequentially. Effective greens are allocated within the cycle. Let's assume an optimum cycle time or a given cycle time for the purpose of the diagram.*

Let's assume a **cycle time of 80 seconds** for this exercise, and the phases are sequenced: Phase 1, Phase 2, Phase 3. We need to fit the effective green times and lost times within the cycle.

*   **Phase 1 (N-S Through):** Net Green = 30s, Yellow = 3s, AR = 1s. Total effective green interval = 34s.
*   **Phase 2 (E-W Through):** Net Green = 25s, Yellow = 3s, AR = 1s. Total effective green interval = 29s.
*   **Phase 3 (N-S Left Turn):** Net Green = 15s, Yellow = 3s, AR = 1s. Total effective green interval = 19s.

**Simplified Phase Diagram (Cycle Time = 80 seconds):**

```
Cycle Time = 80 seconds

Phase 1 (N-S Through):
    | Green (30s) | Yellow (3s) | All-Red (1s) | Red (46s) |
    -------------------------------------------------------------> Time

Phase 2 (E-W Through):
                               | Red (34s) | Green (25s) | Yellow (3s) | All-Red (1s) | Red (17s) |
                               -------------------------------------------------------------------------> Time

Phase 3 (N-S Left Turn):
                                                                       | Red (29s) | Green (15s) | Yellow (3s) | All-Red (1s) | Red (27s) |
                                                                       ----------------------------------------------------------------------------> Time
```

*   **N-S Through:** Starts at 0s, ends effective green at 30s, yellow to 33s, AR to 34s. Red until 80s.
*   **E-W Through:** Red from 0s to 34s. Starts effective green at 34s, ends effective green at 59s, yellow to 62s, AR to 63s. Red until 80s.
*   **N-S Left Turn:** Red from 0s to 63s. Starts effective green at 63s, ends effective green at 78s, yellow to 81s, AR to 82s. *Note: If using 80s cycle, the AR for Phase 3 will extend into the next cycle's Phase 1. This highlights the need to ensure the cycle length accommodates all phases and their lost times.*

A more realistic timing diagram would show the specific start and end times of each color for each approach, fitting within the chosen cycle length.

---

### Important Points to Remember

*   **Webster's Formula:** $C_{opt} = \frac{1.5L + 5}{1 - Y}$ is a key tool for determining the optimal cycle time.
*   **Lost Time:** Crucial for accurate signal timing calculations. It includes start-up and clearance delays.
*   **Flow Ratio ($q/s$):** Represents the demand on a particular phase relative to its capacity.
*   **Green Splitting:** Allocate green time proportionally to demand ($q/s$) to balance intersection performance.
*   **Pedestrian Clearance:** Ensure sufficient time for pedestrians to cross safely by considering walking speed and crossing distance.
*   **Phase Diagrams and Timing Diagrams:** Essential for visualizing and communicating signal timing plans.
*   **Practical Limits:** Always consider practical minimum and maximum cycle times to avoid excessively long or short cycles.
*   **Start-up Lost Time:** While not explicitly in the green splitting formula, it's accounted for in the $1.5L$ term of Webster's cycle time formula and should be considered when calculating available green.
*   **Isolated Intersections:** Simplifies analysis as interactions with adjacent signals are not a concern.

---
