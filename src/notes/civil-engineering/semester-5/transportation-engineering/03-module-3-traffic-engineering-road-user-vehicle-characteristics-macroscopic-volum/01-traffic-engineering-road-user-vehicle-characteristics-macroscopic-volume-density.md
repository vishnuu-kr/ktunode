---
title: "Traffic engineering:   Road user, vehicle characteristics, Macroscopic (Volume, Density and speed) and Microscopic (time and space headway) characteristics of traffic stream- Fundamental diagrams of traffic flow- Greenshield’s model (derivation not required), Capacity and Level of Service (Concept only)."
subject: "TRANSPORTATION ENGINEERING"
module: "Module 3: Traffic engineering:   Road user, vehicle characteristics, Macroscopic (Volume, Density and speed) and Microscopic (time and space headway) characteristics of traffic stream"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810dd9"
status: "completed"
scrapedAt: "2026-05-20T18:51:36.077Z"
---
# Transportation Engineering: Module 3 - Traffic Engineering

## Topic: Road User, Vehicle Characteristics, Traffic Stream Characteristics, Fundamental Diagrams, Capacity, and Level of Service

---

### Learning Outcomes:

*   Understand the basic characteristics of road users and vehicles that influence traffic flow.
*   Define and differentiate between macroscopic and microscopic traffic stream characteristics.
*   Explain the fundamental diagrams of traffic flow.
*   Understand Greenshield's model and its implications for traffic flow.
*   Grasp the concepts of traffic capacity and Level of Service (LOS).

---

### 1. Road User Characteristics

Road users are the individuals who operate vehicles or use the roadway. Their characteristics significantly influence traffic flow and safety.

**Key Characteristics:**

*   **Perception-Reaction Time (PRT):** The time it takes for a driver to perceive a stimulus (e.g., brake lights of a vehicle ahead), decide on an action, and initiate that action (e.g., applying brakes).
    *   **Factors influencing PRT:**
        *   Driver's age and experience
        *   Alertness and fatigue
        *   Distractions (e.g., mobile phones)
        *   Alcohol or drug impairment
        *   Visibility conditions (day/night, weather)
        *   Complexity of the situation
    *   **Typical values:** Generally assumed to be between 2.0 to 3.0 seconds in traffic engineering calculations.
*   **Driver Behavior:**
    *   **Speed Choice:** Drivers have preferred speeds influenced by personal preferences, vehicle capabilities, road conditions, and traffic conditions.
    *   **Following Distance:** The gap maintained behind a preceding vehicle, influenced by speed, PRT, and driver confidence.
    *   **Lane Changing:** Decision-making and execution of lane changes, affected by traffic density and gaps.
    *   **Aggressiveness:** Some drivers are more aggressive (e.g., tailgating, frequent lane changes), impacting traffic flow and safety.
*   **Human Limitations:**
    *   **Vision:** Field of vision, visual acuity, night vision.
    *   **Cognitive Load:** The mental effort required to process information and make decisions.
    *   **Fatigue:** Reduced alertness and slower reaction times due to prolonged driving.

**Example:** A driver's PRT directly affects the stopping distance. If a driver has a longer PRT, they will travel a greater distance before starting to brake, potentially leading to a collision.

---

### 2. Vehicle Characteristics

The physical and performance characteristics of vehicles also play a crucial role in traffic flow.

**Key Characteristics:**

*   **Vehicle Dimensions:**
    *   **Length:** Affects the space a vehicle occupies on the roadway and its ability to maneuver.
    *   **Width:** Determines lane width requirements and clearance between vehicles.
    *   **Height:** Relevant for bridges, underpasses, and tunnels.
*   **Vehicle Performance:**
    *   **Acceleration:** The rate at which a vehicle can increase its speed. Influences how quickly vehicles can merge, accelerate from stops, and maintain speed on grades.
    *   **Deceleration (Braking):** The rate at which a vehicle can decrease its speed.
    *   **Maximum Speed:** The highest speed a vehicle can attain.
*   **Vehicle Types:**
    *   **Passenger Cars:** Typical urban vehicles.
    *   **Heavy Vehicles (Trucks, Buses):** Longer, heavier, slower acceleration, larger turning radii, greater braking distances, and occupy more road space. Their presence significantly impacts overall traffic flow.
    *   **Motorcycles:** Smaller, more agile, but also more vulnerable.
*   **Vehicle Speed-Flow Relationships:** Different vehicle types have different optimal operating speeds and capacities.

**Example:** A large truck on a steep uphill grade will accelerate much slower than a passenger car, reducing the overall speed of traffic in that lane and potentially creating a bottleneck.

---

### 3. Traffic Stream Characteristics (Macroscopic)

Macroscopic traffic characteristics describe the traffic stream as a whole, without considering individual vehicles or drivers. They are statistical averages.

**Key Characteristics:**

*   **Volume (V):**
    *   **Definition:** The number of vehicles passing a point or section of a roadway during a given time interval.
    *   **Units:** Vehicles per hour (veh/hr), vehicles per day (veh/day).
    *   **Time Intervals:** Can be expressed as hourly volume, peak hour volume, daily volume, etc.
    *   **Types:**
        *   **Average Daily Traffic (ADT):** Total volume passing a point over a 24-hour period.
        *   **Diurnal Variation:** Traffic volumes change throughout the day, with peaks during morning and evening commutes.
        *   **Peak Hour Volume (PHV):** The maximum volume observed during a 60-minute period.
        *   **Average Annual Daily Traffic (AADT):** ADT averaged over a year.
    *   **Importance:** Essential for understanding traffic demand, planning capacity, and designing road infrastructure.

*   **Density (K):**
    *   **Definition:** The number of vehicles occupying a given length of roadway at a particular instant.
    *   **Units:** Vehicles per kilometer (veh/km) or vehicles per mile (veh/mi).
    *   **Measurement:** Difficult to measure directly, often estimated from speed and flow.
    *   **Range:** 0 (no vehicles) to K_jam (jam density - maximum number of vehicles that can physically fit on a road segment).
    *   **Importance:** Indicates the degree of congestion. High density means vehicles are close together.

*   **Speed (S):**
    *   **Definition:** The rate of motion of vehicles. Several types of speed are used:
        *   **Time Mean Speed (TMS):** The arithmetic average of the speeds of all vehicles passing a point over a given time interval.
            *   *Formula: TMS = Σv / n* (where 'v' is the speed of each vehicle and 'n' is the number of vehicles)
        *   **Space Mean Speed (SMS):** The arithmetic average of the speeds of all vehicles occupying a given length of roadway at a particular instant. This is the more relevant speed for traffic flow relationships.
            *   *Formula: SMS = L / Σ(t_i)* (where 'L' is the length of the road segment and 't_i' is the time taken by each vehicle to traverse the segment)
            *   *Relationship between TMS and SMS:* SMS ≤ TMS. SMS is always less than or equal to TMS because slower vehicles tend to spend more time in the observed segment.
        *   **Time Headway:** Average time between vehicles.
        *   **Space Headway:** Average distance between vehicles.
    *   **Units:** Kilometers per hour (km/hr) or miles per hour (mph).
    *   **Importance:** Affects travel time, capacity, and safety.

**Fundamental Relationship:** The core relationship between these three macroscopic variables is:
**Flow (Q) = Speed (S) × Density (K)**

This equation is fundamental to understanding traffic flow dynamics.

**Example:**
*   If a road segment has a volume of 1800 veh/hr and a space mean speed of 60 km/hr, the density is 1800 veh/hr / 60 km/hr = 30 veh/km.

---

### 4. Traffic Stream Characteristics (Microscopic)

Microscopic traffic characteristics describe the behavior of individual vehicles and their spacing within the traffic stream.

**Key Characteristics:**

*   **Time Headway (h_t):**
    *   **Definition:** The time interval between the front of a leading vehicle and the front of the following vehicle as they pass a fixed point.
    *   **Units:** Seconds (sec).
    *   **Relationship to Flow:** Flow (Q) = 3600 / Average Time Headway (in seconds). (3600 seconds in an hour)
    *   **Importance:** Directly relates to the rate at which vehicles can pass a point. Shorter headways (up to a safe minimum) allow for higher flow rates.

*   **Space Headway (h_s):**
    *   **Definition:** The distance between the front of a leading vehicle and the front of the following vehicle measured at the same instant.
    *   **Units:** Meters (m) or feet (ft).
    *   **Relationship to Speed and Time Headway:** Space Headway = Speed × Time Headway. (Note: Ensure consistent units!)
    *   **Relationship to Density:** Density (K) = 1000 / Average Space Headway (if headway is in meters and density in veh/km). Or K = 5280 / Average Space Headway (if headway is in feet and density in veh/mile).
    *   **Importance:** Represents the physical spacing and safety gap between vehicles.

**Example:**
*   If the average time headway between vehicles on a freeway is 2.0 seconds, the flow rate is 3600 sec/hr / 2.0 sec/veh = 1800 veh/hr.
*   If the average speed is 80 km/hr and the average time headway is 2.0 seconds, the space headway is (80 km/hr) * (2.0 sec / 3600 sec/hr) = 0.044 km = 44 meters.

---

### 5. Fundamental Diagrams of Traffic Flow

These diagrams graphically represent the relationships between the macroscopic traffic stream characteristics: Volume (Q), Speed (S), and Density (K). They are essential for understanding how traffic behaves under different conditions.

**The Three Primary Diagrams:**

1.  **Speed-Flow (S-Q) Diagram:**
    *   **X-axis:** Flow (Q)
    *   **Y-axis:** Speed (S)
    *   **Shape:** Generally shows an inverse relationship. At low flows, speed is high. As flow increases, speed decreases. At the maximum flow (capacity), speed drops significantly, and at jam density, speed is zero.
    *   **Key Points:**
        *   Starts at (0, S_free_flow) - Free flow speed.
        *   Increases to a maximum flow (capacity) at a certain speed.
        *   Decreases rapidly after capacity, eventually reaching zero speed at jam density.

2.  **Flow-Density (Q-K) Diagram:**
    *   **X-axis:** Density (K)
    *   **Y-axis:** Flow (Q)
    *   **Shape:** Typically parabolic.
    *   **Key Points:**
        *   Starts at (0, 0).
        *   Increases to a maximum flow (capacity) at an intermediate density (K_c).
        *   Decreases as density continues to increase, reaching zero flow at jam density (K_jam).
    *   **The relationship Q = S × K is central here.**

3.  **Speed-Density (S-K) Diagram:**
    *   **X-axis:** Density (K)
    *   **Y-axis:** Speed (S)
    *   **Shape:** Generally shows an inverse relationship.
    *   **Key Points:**
        *   Starts at (0, S_free_flow) - Free flow speed.
        *   Decreases as density increases.
        *   Reaches zero speed at jam density (K_jam).

**Important Observation:** The three diagrams are interconnected through the fundamental equation Q = S × K. If you know any two, you can derive the third.

---

### 6. Greenshield’s Model

**Concept:** Greenshield's model is one of the earliest and simplest macroscopic traffic flow models. It assumes a linear relationship between speed and density.

**Key Assumptions:**

*   There is a linear relationship between speed (S) and density (K).
*   The relationship between flow (Q) and density (K) is parabolic.
*   The relationship between flow (Q) and speed (S) is also parabolic.

**Model Equations (Derivation not required):**

*   **Speed-Density Relationship:**
    $S = S_{f} (1 - \frac{K}{K_{jam}})$
    Where:
    *   $S$ = Speed
    *   $S_{f}$ = Free Flow Speed (speed when density is zero)
    *   $K$ = Density
    *   $K_{jam}$ = Jam Density (maximum density)

*   **Flow-Density Relationship (Derived from Q = S × K):**
    $Q = S_{f} K (1 - \frac{K}{K_{jam}})$
    This is a parabolic equation. The maximum flow (capacity, $Q_{max}$) occurs when density is half the jam density ($K_c = K_{jam} / 2$).

*   **Speed-Flow Relationship (Derived from Q = S × K):**
    $S = \frac{Q}{K}$
    Substituting the expression for K from the S-K equation ($K = K_{jam} (1 - S/S_f)$) into Q = S * K leads to the S-Q relationship.

**Implications of Greenshield's Model:**

*   **Capacity (Q_max):** Occurs at $K_c = K_{jam} / 2$.
*   **Speed at Capacity (S_c):** $S_c = S_{f} (1 - \frac{K_c}{K_{jam}}) = S_{f} (1 - \frac{K_{jam}/2}{K_{jam}}) = S_{f}/2$.
    So, capacity occurs at half the free flow speed.
*   **Maximum Flow:** $Q_{max} = S_c \times K_c = (S_f / 2) \times (K_{jam} / 2) = \frac{S_f K_{jam}}{4}$.

**Limitations:**
*   The linear S-K relationship is a simplification. In reality, this relationship is often non-linear, especially at higher densities.
*   It assumes uniform traffic and driver behavior, which is rarely the case in real-world scenarios.

**Example:**
If $S_f = 100$ km/hr and $K_{jam} = 150$ veh/km:
*   The speed at capacity ($S_c$) = $100 / 2 = 50$ km/hr.
*   The density at capacity ($K_c$) = $150 / 2 = 75$ veh/km.
*   The maximum flow (capacity, $Q_{max}$) = $50$ km/hr * $75$ veh/km = $3750$ veh/hr (assuming conversion of units for flow).
    Using the formula: $Q_{max} = (100 \times 150) / 4 = 3750$ veh/hr.

---

### 7. Capacity

**Concept:**
*   **Definition:** The maximum number of vehicles that can pass a given point or section of a roadway during a specified period (usually one hour) under prevailing conditions.
*   **Units:** Vehicles per hour (veh/hr) or Passenger Car Units per hour (pcu/hr).
*   **Prevailing Conditions:** Include factors like lane width, shoulder width, grade, horizontal curvature, traffic composition (heavy vehicles), access points, driver behavior, and control measures.
*   **Peak Hour Capacity:** The maximum flow rate that can be sustained during the peak hour of traffic demand.

**Key Factors Affecting Capacity:**

*   **Lane Width:** Wider lanes generally increase capacity.
*   **Shoulder Width:** Adequate shoulders improve safety and can provide refuge, potentially increasing capacity.
*   **Grade:** Steep upgrades reduce capacity due to slower speeds of heavy vehicles.
*   **Trucks and Buses:** These vehicles have lower acceleration and occupy more space, reducing the capacity of a lane.
*   **Interchanges and Access Points:** Frequent entrances and exits disrupt traffic flow, reducing capacity.
*   **Driver Population:** Driver behavior and familiarity with the road.
*   **Parking:** On-street parking can reduce the effective lane width and obstruct flow.
*   **Weather Conditions:** Rain, snow, or fog can reduce speeds and capacity.

**Relationship to Flow-Density Diagram:** Capacity is the maximum point on the Flow-Density curve.

---

### 8. Level of Service (LOS)

**Concept:**
*   **Definition:** A qualitative measure describing the operational conditions within a traffic stream, based on factors like speed, travel time, freedom to maneuver, traffic interruptions, comfort, and convenience.
*   **Purpose:** To provide a way to classify highway or street segment performance and to assess the impact of traffic demand on the facility.
*   **Scales:** LOS is typically represented by a scale from **LOS A (best)** to **LOS F (worst)**.

**Levels of Service (General Description):**

*   **LOS A (Free Flow):**
    *   **Conditions:** Minimal congestion, high speeds, drivers have complete freedom to maneuver.
    *   **Characteristics:** Low density, long headways, minimal interference.

*   **LOS B (Very Little/Slight Restriction):**
    *   **Conditions:** Stable flow, some slight restriction in freedom to maneuver.
    *   **Characteristics:** Speeds are still high, but drivers may be more aware of surrounding traffic.

*   **LOS C (Moderate Restriction):**
    *   **Conditions:** Stable flow, but maneuverability is more noticeably limited.
    *   **Characteristics:** Speeds begin to decrease, drivers have to pay more attention to other vehicles.

*   **LOS D (Near Capacity):**
    *   **Conditions:** Flow is approaching capacity, maneuverability is significantly restricted.
    *   **Characteristics:** Speeds can be noticeably lower, delays start to become significant.

*   **LOS E (Capacity):**
    *   **Conditions:** Flow is at or very near capacity. Operations are unstable.
    *   **Characteristics:** Speeds are low, queues may form, drivers have very little freedom to maneuver. High likelihood of operational problems.

*   **LOS F (Forced or Breakdown Flow):**
    *   **Conditions:** Flow is greater than capacity; demand exceeds the ability of the facility to handle it.
    *   **Characteristics:** Breakdown in flow, forced reductions in speed, prolonged queues, significant delays.

**Factors Used to Determine LOS (Vary depending on facility type - e.g., freeway, urban street):**

*   **Freeways:** Density, speed, ratio of trucks and buses.
*   **Urban Streets:** Average speed, average travel time, density, ratio of signalized intersections.

**Importance of LOS:**
*   **Performance Evaluation:** Helps traffic engineers assess how well a road is performing.
*   **Planning and Design:** Used to determine the required capacity for new facilities or improvements.
*   **Traffic Management:** Identifies segments that require operational improvements.

**Example:**
A highway segment operating at LOS C means that traffic flow is stable, but drivers have moderate restrictions in their ability to maneuver, and speeds are somewhat reduced compared to free-flow conditions. If the same segment operates at LOS F, it indicates a complete breakdown of traffic flow, with severe congestion and long delays.

---

### Practice Questions and Exercises

**1. Definitions:**
    a) Define traffic volume and provide its units.
    b) Define traffic density and provide its units.
    c) Define time headway and provide its units.

**2. Relationships:**
    a) State the fundamental relationship between Flow, Speed, and Density.
    b) If the average speed on a road segment is 70 km/hr and the average time headway is 2.5 seconds, calculate the average space headway in meters.
    c) If the average space headway on a freeway is 50 meters and the average speed is 90 km/hr, calculate the traffic density in vehicles per kilometer. (Assume a standard vehicle length for conversion if needed, or work with the concept of headway as a proxy).

**3. Greenshield's Model Application:**
    Suppose Greenshield's model is used for a highway segment with $S_f = 120$ km/hr and $K_{jam} = 180$ veh/km.
    a) Calculate the speed at which maximum flow occurs.
    b) Calculate the density at which maximum flow occurs.
    c) Calculate the maximum flow (capacity) in veh/hr.

**4. Concepts:**
    a) Explain the difference between Time Mean Speed (TMS) and Space Mean Speed (SMS). Which is more relevant for traffic flow analysis and why?
    b) Briefly describe what LOS A and LOS F represent in traffic engineering.

---

### Answers to Practice Questions

**1. Definitions:**
    a) **Traffic Volume:** The number of vehicles passing a point or section of a roadway during a given time interval. Units: vehicles per hour (veh/hr).
    b) **Traffic Density:** The number of vehicles occupying a given length of roadway at a particular instant. Units: vehicles per kilometer (veh/km).
    c) **Time Headway:** The time interval between the front of a leading vehicle and the front of the following vehicle as they pass a fixed point. Units: seconds (sec).

**2. Relationships:**
    a) **Fundamental Relationship:** Flow (Q) = Speed (S) × Density (K)
    b) **Average Space Headway Calculation:**
        *   Convert speed to m/s: $70 \text{ km/hr} * (1000 \text{ m/km} / 3600 \text{ sec/hr}) = 19.44 \text{ m/s}$
        *   Space Headway = Speed × Time Headway
        *   Space Headway = $19.44 \text{ m/s} \times 2.5 \text{ sec} = 48.6 \text{ meters}$
    c) **Traffic Density Calculation:**
        *   Convert speed to km/sec: $90 \text{ km/hr} / 3600 \text{ sec/hr} = 0.025 \text{ km/sec}$
        *   Density (K) = 1 / Space Headway (in km).
        *   Space Headway in km = $50 \text{ m} / 1000 \text{ m/km} = 0.05 \text{ km}$
        *   Density (K) = $1 / 0.05 \text{ km} = 20 \text{ veh/km}$
        *(Alternatively, using the relationship $Q = S \times K$ and $Q = 3600 / h_t$: $S \times K = 3600 / h_t$. First, find $h_t$ from space headway and speed. $h_t = h_s / S = (50 \text{ m} / 1000 \text{ m/km}) / (90 \text{ km/hr}) = 0.05 \text{ km} / 90 \text{ km/hr} \approx 0.000556 \text{ hr}$. Now use $K = Q / S = (3600 / h_t) / S = (3600 / 0.000556) / 90 \approx 72000 / 90 \approx 800 \text{ veh/km}$ - this method is more complex and prone to errors due to unit conversions. The direct conversion using headway definition is simpler.)*
        Let's re-calculate using the direct definition:
        Space headway ($h_s$) is the distance between vehicles. Density ($K$) is the number of vehicles per unit length. If we consider a segment of length $L$, and there are $n$ vehicles, $K = n/L$. If the average space headway is $h_s$, then approximately $L = n \times h_s$. So $K = n / (n \times h_s) = 1 / h_s$.
        *   Space Headway = $50 \text{ meters} = 0.05 \text{ km}$
        *   Density (K) = $1 / 0.05 \text{ km} = 20 \text{ veh/km}$
        This assumes vehicles are perfectly spaced and that headway represents the spacing plus the length of the vehicle itself in a continuous flow. The simpler interpretation for density from headway is $K = \frac{3600}{S \times h_t}$. Since $h_s = S \times h_t$, then $K = \frac{3600}{h_s (\text{in km})}$.
        *   $h_s = 50 \text{ m} = 0.05 \text{ km}$
        *   $K = 3600 / (90 \text{ km/hr} \times 2.5 \text{ sec})$ - this is incorrect.
        Correct calculation from speed and space headway:
        *   Speed = $90 \text{ km/hr}$
        *   Space Headway = $50 \text{ m} = 0.05 \text{ km}$
        *   Time Headway ($h_t$) = Space Headway ($h_s$) / Speed ($S$)
        *   $h_t = 0.05 \text{ km} / 90 \text{ km/hr} = 0.000556 \text{ hours}$
        *   Flow ($Q$) = $3600 \text{ sec/hr} / (h_t \times 3600 \text{ sec/hr}) = 3600 / (0.000556 \times 3600)$ - No, this is incorrect.
        *   Flow ($Q$) = $3600 \text{ sec/hr} / (h_t \text{ in seconds})$
        *   $h_t = 0.000556 \text{ hours} \times 3600 \text{ sec/hr} = 2 \text{ seconds}$
        *   Flow ($Q$) = $3600 / 2 = 1800 \text{ veh/hr}$
        *   Now use $Q = S \times K$: $1800 \text{ veh/hr} = 90 \text{ km/hr} \times K$
        *   $K = 1800 / 90 = 20 \text{ veh/km}$

**3. Greenshield's Model Application:**
    Given $S_f = 120$ km/hr and $K_{jam} = 180$ veh/km.
    a) **Speed at Maximum Flow ($S_c$):** $S_c = S_f / 2 = 120 \text{ km/hr} / 2 = 60 \text{ km/hr}$.
    b) **Density at Maximum Flow ($K_c$):** $K_c = K_{jam} / 2 = 180 \text{ veh/km} / 2 = 90 \text{ veh/km}$.
    c) **Maximum Flow (Capacity, $Q_{max}$):** $Q_{max} = S_c \times K_c = 60 \text{ km/hr} \times 90 \text{ veh/km} = 5400 \text{ veh/hr}$.
        Alternatively, $Q_{max} = \frac{S_f K_{jam}}{4} = \frac{120 \text{ km/hr} \times 180 \text{ veh/km}}{4} = \frac{21600}{4} = 5400 \text{ veh/hr}$.

**4. Concepts:**
    a) **TMS vs. SMS:**
        *   **TMS (Time Mean Speed):** Average speed of vehicles passing a fixed point. It is influenced by the time spent by all vehicles. Slower vehicles spend more time in the observation point, so TMS tends to be higher than SMS.
        *   **SMS (Space Mean Speed):** Average speed of vehicles occupying a given length of roadway at an instant. It is more representative of the actual speed of traffic flow over a distance.
        *   **Relevance:** SMS is more relevant for traffic flow analysis (like the fundamental diagrams) because it represents the average speed of vehicles over space, which directly relates to flow and density.
    b) **LOS A and LOS F:**
        *   **LOS A (Free Flow):** Represents ideal conditions with very low traffic density, high speeds, and complete freedom of movement for drivers. Minimal congestion.
        *   **LOS F (Forced or Breakdown Flow):** Represents the worst operational conditions where traffic demand exceeds the capacity of the facility. This leads to significant congestion, very low speeds, breakdown in flow, and prolonged queues and delays.

---

### Important Points to Remember:

*   **Q = S x K** is the cornerstone of macroscopic traffic flow.
*   **SMS** is more critical than **TMS** for analyzing traffic flow relationships.
*   **Capacity** is the **maximum flow rate** a facility can handle under specific conditions.
*   **LOS** is a **qualitative measure** of operational performance.
*   Greenshield's model assumes a **linear Speed-Density** relationship and results in a **parabolic Flow-Density** relationship.
*   **Free Flow Speed ($S_f$)** is the speed at zero density.
*   **Jam Density ($K_{jam}$)** is the maximum density at zero flow.
*   **Capacity typically occurs at half the free flow speed and half the jam density** according to Greenshield's model.
*   Road user and vehicle characteristics are the *inputs* that influence the *outputs* of traffic stream characteristics and their relationships.
