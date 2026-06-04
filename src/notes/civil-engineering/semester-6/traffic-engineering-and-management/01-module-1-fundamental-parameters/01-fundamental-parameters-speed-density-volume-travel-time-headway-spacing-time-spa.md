---
title: "Fundamental parameters- speed, density, volume, travel time, headway, spacing, time-space diagram, time mean speed, space mean speed and their relation."
subject: "TRAFFIC ENGINEERING AND MANAGEMENT"
module: "Module 1: Fundamental parameters"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba8111d8"
status: "completed"
scrapedAt: "2026-05-20T18:56:12.350Z"
---
# TRAFFIC ENGINEERING AND MANAGEMENT

## Module 1: Fundamental Parameters

This module introduces the core parameters used to understand and analyze traffic flow. These fundamental parameters are the building blocks for all traffic engineering and management activities.

---

### 1. Speed

**Definition:** Speed is the rate at which a vehicle travels over a given distance. It is typically measured in units of distance per time (e.g., km/h, mph).

**Key Concepts:**

*   **Instantaneous Speed:** The speed of a vehicle at a specific point in time.
*   **Average Speed:** The total distance traveled divided by the total time taken.
*   **Posted Speed Limit:** The maximum legal speed allowed on a particular stretch of road.

**Types of Speed Measurements:**

*   **Time Mean Speed (TMS):** The arithmetic average of the speeds of all vehicles passing a specific point over a period of time. This is the speed measured by a stationary observer or a loop detector.
*   **Space Mean Speed (SMS):** The arithmetic average of the speeds of all vehicles occupying a given length of roadway at a specific instant in time. This is the average speed of vehicles along a stretch of road.

**Formulae:**

*   **Average Speed (for a single vehicle over a distance):**
    $ \text{Average Speed} = \frac{\text{Distance}}{\text{Travel Time}} $

**Examples:**

*   A car travels 100 km in 2 hours. Its average speed is 100 km / 2 h = 50 km/h.
*   A traffic detector records the speeds of 10 vehicles passing a point: 50 km/h, 55 km/h, 60 km/h, 45 km/h, 52 km/h, 58 km/h, 62 km/h, 48 km/h, 53 km/h, 56 km/h.
    *   **Time Mean Speed (TMS)** is the average of these 10 values.

---

### 2. Volume

**Definition:** Volume is the number of vehicles passing a specific point or a section of roadway during a given time interval. It is typically expressed as vehicles per hour (veh/h) or vehicles per day (veh/d).

**Key Concepts:**

*   **Peak Hour Volume (PHV):** The maximum volume of traffic observed during a 60-minute period.
*   **15-Minute Peak Volume:** The maximum volume observed during a 15-minute period, often used to derive the PHV using a Peak Hour Factor.
*   **Average Daily Traffic (ADT):** The total volume of traffic passing a point or section of road over a 24-hour period, averaged over a specified number of days.
*   **Diurnal Variation:** The pattern of traffic volume over a 24-hour period.
*   **Weekly Variation:** The pattern of traffic volume over a week.
*   **Seasonal Variation:** The pattern of traffic volume over a year.

**Formulae:**

*   **Volume (V):**
    $ V = \frac{\text{Number of Vehicles}}{\text{Time Interval}} $

**Examples:**

*   During a 15-minute interval, 150 vehicles pass a point. The hourly volume is 150 veh * 4 = 600 veh/h.
*   If the volumes recorded in four consecutive 15-minute periods of an hour are 150, 160, 180, and 140 vehicles, the Peak Hour Factor (PHF) is (150+160+180+140) / (4 * 180) = 630 / 720 = 0.875.

---

### 3. Density

**Definition:** Density is the number of vehicles occupying a given length of roadway at a particular instant. It is typically expressed as vehicles per kilometer (veh/km) or vehicles per mile (veh/mi).

**Key Concepts:**

*   **Congestion:** Occurs when density is high, leading to reduced speeds and increased travel times.
*   **Jam Density:** The maximum possible density, occurring when vehicles are stopped and spaced very closely together.
*   **Free-Flow Density:** The density at which there is no interaction between vehicles, and speed is at its maximum.

**Formulae:**

*   **Density (k):**
    $ k = \frac{\text{Number of Vehicles}}{\text{Length of Roadway}} $

**Examples:**

*   On a 1-kilometer stretch of highway, 50 vehicles are present at a specific moment. The density is 50 veh/km.
*   If 10 vehicles are counted on a 200-meter section of road, the density is 10 veh / 0.2 km = 50 veh/km.

---

### 4. Travel Time

**Definition:** Travel time is the time taken by a vehicle to traverse a specified segment of roadway.

**Key Concepts:**

*   **Average Travel Time:** The total travel time of all vehicles divided by the number of vehicles.
*   **Travel Time Reliability:** The consistency of travel times under varying traffic conditions.
*   **Congestion:** Significantly increases travel time.

**Formulae:**

*   **Average Travel Time (TT):** Can be calculated by observing a sample of vehicles or by using speed data.

**Examples:**

*   A driver takes 10 minutes to travel from point A to point B.
*   If the average speed on a 5 km stretch of road is 30 km/h, the average travel time is 5 km / 30 km/h = 0.167 hours = 10 minutes.

---

### 5. Headway

**Definition:** Headway is the time interval between two consecutive vehicles passing a fixed point, measured from the front of one vehicle to the front of the next.

**Key Concepts:**

*   **Gap:** The time interval between the front of one vehicle and the rear of the preceding vehicle.
*   **Relationship with Speed and Spacing:** Headway is inversely related to flow and directly related to spacing.

**Formulae:**

*   **Average Headway (h):**
    $ h = \frac{\text{Total Time Interval}}{\text{Number of Headways}} $
    Alternatively, if the flow (q) is known:
    $ h = \frac{1}{q} $ (where q is in vehicles per unit time)

**Examples:**

*   If 60 vehicles pass a point in one minute (3600 seconds), the average headway is 3600 seconds / 60 vehicles = 60 seconds/vehicle.
*   If the flow rate is 1800 vehicles per hour, the average headway is 3600 seconds / 1800 vehicles = 2 seconds/vehicle.

---

### 6. Spacing

**Definition:** Spacing is the distance between two consecutive vehicles, measured from the front of one vehicle to the front of the next.

**Key Concepts:**

*   **Clearance (Gap):** The distance between the rear of the leading vehicle and the front of the following vehicle.
*   **Relationship with Speed and Headway:** Spacing is directly related to speed and headway.

**Formulae:**

*   **Average Spacing (s):**
    $ s = \frac{\text{Total Length of Roadway}}{\text{Number of Vehicles - 1}} $ (approximately, for a section of road with N vehicles)
    Alternatively, if speed (v) and headway (h) are known:
    $ s = v \times h $ (where v is in distance/time and h is in time)

**Examples:**

*   If the average headway is 2 seconds and the average speed is 20 m/s (72 km/h), the average spacing is 20 m/s * 2 s = 40 meters.
*   On a 1 km (1000 m) stretch of road with 25 vehicles, the average spacing is approximately 1000 m / 25 vehicles = 40 meters/vehicle.

---

### 7. Time-Space Diagram

**Definition:** A time-space diagram is a graphical representation of vehicle movement over time and distance. The horizontal axis represents time, and the vertical axis represents distance.

**Key Concepts:**

*   **Vehicle Trajectory:** Each vehicle's movement is represented by a straight line, with its slope indicating the vehicle's speed.
*   **Slope:**
    *   Steeper slope = higher speed
    *   Flatter slope = lower speed
    *   Vertical line = stationary vehicle
*   **Interactions:** Points where vehicle trajectories intersect indicate overtakes or proximity.
*   **Flow Rate (Volume):** Can be determined by counting vehicles within a specific distance and time interval.
*   **Density:** Can be determined by counting vehicles at a specific time along a specific distance.
*   **Speed:** The slope of a vehicle's trajectory.

**Graphical Representation:**

```
      ^ Distance
      |
      |     Vehicle B
      |    /
      |   /
      |  / Vehicle A
      | /
      |/
      +--------------------> Time
```

*   Vehicle A has a higher speed (steeper slope).
*   Vehicle B has a lower speed (flatter slope).
*   The intersection point indicates when Vehicle A overtakes Vehicle B.

**Applications:**

*   Visualizing traffic flow patterns.
*   Analyzing individual vehicle behavior.
*   Understanding the impact of incidents or control measures.

---

### 8. Time Mean Speed (TMS) vs. Space Mean Speed (SMS)

**8.1 Time Mean Speed (TMS)**

*   **Definition:** The arithmetic average of the speeds of all vehicles passing a fixed point during a given time period.
*   **Measurement:** Typically measured by a stationary observer or a loop detector at a single point.
*   **Formula:** $ \text{TMS} = \frac{\sum_{i=1}^{N} v_i}{N} $, where $v_i$ is the speed of the $i$-th vehicle and $N$ is the number of vehicles observed.
*   **Bias:** TMS tends to be higher than SMS because faster vehicles are more likely to pass a given point than slower vehicles in the same time interval. Imagine a queue of cars with varying speeds; the faster cars will reach the measurement point more frequently.

**8.2 Space Mean Speed (SMS)**

*   **Definition:** The harmonic average of the speeds of all vehicles occupying a given length of roadway at a specific instant in time. It represents the average speed of vehicles *along* the roadway.
*   **Measurement:** Requires measuring the travel time of each vehicle over a defined segment of the road.
*   **Formula:** $ \text{SMS} = \frac{N}{\sum_{i=1}^{N} \frac{1}{v_i}} $, where $v_i$ is the speed of the $i$-th vehicle and $N$ is the number of vehicles occupying the segment.
*   **Bias:** SMS is generally lower than TMS because it accounts for the fact that slower vehicles spend more time on the road segment, thus contributing more to the average speed of vehicles *on* that segment.

---

### 9. Relation between TMS and SMS

**Key Relationship:** For any given traffic stream, **Space Mean Speed (SMS) is always less than or equal to Time Mean Speed (TMS)** ($ \text{SMS} \leq \text{TMS} $).

**Derivation of the Relationship:**

Consider $N$ vehicles occupying a roadway segment of length $L$.
Let the speed of the $i$-th vehicle be $v_i$.

*   **Space Mean Speed (SMS):**
    The time taken by the $i$-th vehicle to traverse the length $L$ is $t_i = L/v_i$.
    The sum of travel times for all $N$ vehicles is $ \sum_{i=1}^{N} t_i = \sum_{i=1}^{N} \frac{L}{v_i} $.
    The average travel time is $ \bar{t} = \frac{\sum t_i}{N} = \frac{L}{N} \sum \frac{1}{v_i} $.
    We know that $ \text{SMS} = \frac{L}{\bar{t}} $.
    Therefore, $ \text{SMS} = \frac{L}{\frac{L}{N} \sum \frac{1}{v_i}} = \frac{N}{\sum \frac{1}{v_i}} $. This confirms the definition of SMS.

*   **Time Mean Speed (TMS):**
    TMS is the average speed of vehicles passing a point. If we consider a long duration of time $T$, and $N$ vehicles pass a point during this time, with speeds $v_1, v_2, ..., v_N$.
    $ \text{TMS} = \frac{\sum_{i=1}^{N} v_i}{N} $.

**Relationship between Flow (q), Density (k), and Speed (v):**

The fundamental relationship in traffic flow theory is:
$ q = k \times v $

This relationship holds true for both TMS and SMS, but it's crucial to use the corresponding speed.

*   $ q = k \times \text{SMS} $ (This is the fundamental relationship that defines traffic flow)
*   $ q $ is the flow in vehicles per unit time.
*   $ k $ is the density in vehicles per unit length.
*   $ v $ is the speed.

**Why SMS is more fundamental for flow analysis:**
Density ($k$) represents vehicles per unit length. To relate this to flow ($q$, vehicles per unit time), we need to consider the average speed at which these vehicles traverse that length, which is the Space Mean Speed (SMS).

**The Inequality:**
The inequality $ \text{SMS} \leq \text{TMS} $ arises from the fact that faster vehicles are observed more frequently by a stationary observer (TMS) than slower vehicles. When averaging speeds over a length of road (SMS), slower vehicles, which spend more time on the segment, have a greater influence on the average.

---

### Summary of Key Parameters and Relationships

| Parameter   | Definition                                                                            | Units     | Formula (if applicable)                                      | Relationship with Others                                     |
| :---------- | :------------------------------------------------------------------------------------ | :-------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| **Speed**   | Rate of travel                                                                        | km/h, mph | $ v = d/t $                                                  | Affects travel time, headway, spacing.                       |
| **Volume**  | Number of vehicles passing a point/section per unit time                              | veh/h     | $ q = \text{Number of Vehicles} / \text{Time Interval} $     | $ q = k \times v $                                           |
| **Density** | Number of vehicles per unit length of roadway at an instant                           | veh/km    | $ k = \text{Number of Vehicles} / \text{Length} $           | $ q = k \times v $                                           |
| **Travel Time** | Time taken to traverse a road segment                                             | h, min    | $ TT = \text{Distance} / \text{Speed} $                     | Inversely proportional to speed.                             |
| **Headway** | Time between consecutive vehicles at a point                                        | s         | $ h = 1/q $                                                   | Inversely proportional to flow. Related to spacing by $ s = v \times h $. |
| **Spacing** | Distance between consecutive vehicles at an instant                                   | m, km     | $ s = v \times h $                                           | Directly proportional to speed and headway.                  |
| **TMS**     | Arithmetic average of speeds of vehicles passing a point                            | km/h, mph | $ \text{TMS} = \sum v_i / N $                                | $ \text{TMS} \geq \text{SMS} $. More common in detector data. |
| **SMS**     | Harmonic average of speeds of vehicles occupying a road length at an instant          | km/h, mph | $ \text{SMS} = N / \sum (1/v_i) $                            | $ \text{SMS} \leq \text{TMS} $. Fundamental for $ q = k \times v $. |

---

### Important Points to Remember

*   **$q = k \times v$ is the fundamental traffic flow equation.** Always use **SMS** for $v$ in this equation.
*   **TMS is measured at a point, SMS is measured over a length.**
*   **TMS is always greater than or equal to SMS.**
*   Headway and spacing are inverse concepts related to time and distance between vehicles, respectively.
*   Time-space diagrams are powerful visual tools for understanding traffic dynamics.
*   Understanding these fundamental parameters is crucial for diagnosing traffic problems and designing effective solutions.

---

### Practice Questions

1.  A traffic detector at an intersection counts 300 vehicles passing in a 15-minute period. What is the hourly volume in vehicles per hour (veh/h)?
2.  On a 500-meter section of highway, 20 vehicles are present at a specific instant. Calculate the density in vehicles per kilometer (veh/km).
3.  A vehicle travels a distance of 10 km at an average speed of 40 km/h. What is its travel time?
4.  If the average headway on a freeway is 2.5 seconds, what is the flow rate in vehicles per hour (veh/h)?
5.  A car travels at a constant speed of 72 km/h. If the headway is 3 seconds, what is the spacing between cars in meters?
6.  At a measurement point, the speeds of 5 vehicles are recorded as: 60 km/h, 70 km/h, 50 km/h, 80 km/h, 65 km/h.
    a) Calculate the Time Mean Speed (TMS).
    b) If these 5 vehicles occupy a 100-meter stretch of road at a specific instant, calculate their Space Mean Speed (SMS). (Assume constant speed for the calculation over the length).
7.  Explain why Space Mean Speed is a more fundamental measure for traffic flow analysis than Time Mean Speed, particularly in the context of the $q = k \times v$ relationship.

---

### Answers to Practice Questions

1.  **Hourly Volume:**
    $ \text{Hourly Volume} = 300 \text{ veh} / 15 \text{ min} = 300 \text{ veh} / (15/60) \text{ h} = 300 \text{ veh} / 0.25 \text{ h} = 1200 \text{ veh/h} $

2.  **Density:**
    $ \text{Length} = 500 \text{ m} = 0.5 \text{ km} $
    $ \text{Density} = \frac{20 \text{ veh}}{0.5 \text{ km}} = 40 \text{ veh/km} $

3.  **Travel Time:**
    $ \text{Travel Time} = \frac{\text{Distance}}{\text{Speed}} = \frac{10 \text{ km}}{40 \text{ km/h}} = 0.25 \text{ hours} = 0.25 \times 60 \text{ minutes} = 15 \text{ minutes} $

4.  **Flow Rate from Headway:**
    $ \text{Headway} = 2.5 \text{ seconds/vehicle} $
    $ \text{Flow Rate (q)} = \frac{1}{\text{Headway}} = \frac{1}{2.5 \text{ s/veh}} = 0.4 \text{ veh/s} $
    To convert to veh/h:
    $ q = 0.4 \text{ veh/s} \times (3600 \text{ s/h}) = 1440 \text{ veh/h} $

5.  **Spacing from Speed and Headway:**
    First, convert speed to m/s:
    $ v = 72 \text{ km/h} = 72 \times \frac{1000 \text{ m}}{3600 \text{ s}} = 20 \text{ m/s} $
    Headway is given in seconds.
    $ \text{Spacing (s)} = v \times h = 20 \text{ m/s} \times 3 \text{ s} = 60 \text{ meters} $

6.  **TMS and SMS Calculation:**
    a) **Time Mean Speed (TMS):**
    $ \text{TMS} = \frac{60 + 70 + 50 + 80 + 65}{5} = \frac{325}{5} = 65 \text{ km/h} $

    b) **Space Mean Speed (SMS):**
    First, calculate the travel time for each vehicle over the 100-meter stretch. Convert speeds to m/s:
    $ v_1 = 60 \text{ km/h} = 16.67 \text{ m/s} \Rightarrow t_1 = 100 \text{ m} / 16.67 \text{ m/s} = 6.00 \text{ s} $
    $ v_2 = 70 \text{ km/h} = 19.44 \text{ m/s} \Rightarrow t_2 = 100 \text{ m} / 19.44 \text{ m/s} = 5.14 \text{ s} $
    $ v_3 = 50 \text{ km/h} = 13.89 \text{ m/s} \Rightarrow t_3 = 100 \text{ m} / 13.89 \text{ m/s} = 7.20 \text{ s} $
    $ v_4 = 80 \text{ km/h} = 22.22 \text{ m/s} \Rightarrow t_4 = 100 \text{ m} / 22.22 \text{ m/s} = 4.50 \text{ s} $
    $ v_5 = 65 \text{ km/h} = 18.06 \text{ m/s} \Rightarrow t_5 = 100 \text{ m} / 18.06 \text{ m/s} = 5.54 \text{ s} $

    $ \text{SMS} = \frac{N}{\sum (1/v_i)} $
    Alternatively, using travel times:
    Average Travel Time $ \bar{t} = \frac{6.00 + 5.14 + 7.20 + 4.50 + 5.54}{5} = \frac{28.38}{5} = 5.676 \text{ s} $
    $ \text{SMS} = \frac{\text{Length}}{\bar{t}} = \frac{100 \text{ m}}{5.676 \text{ s}} = 17.62 \text{ m/s} $
    Convert SMS back to km/h:
    $ \text{SMS} = 17.62 \text{ m/s} \times \frac{3600 \text{ s/h}}{1000 \text{ m/km}} = 63.43 \text{ km/h} $

    *Note: SMS (63.43 km/h) is indeed less than TMS (65 km/h).*

7.  **Explanation for SMS being more fundamental:**
    The fundamental relationship of traffic flow, $q = k \times v$, describes how the rate of vehicles passing a point ($q$) is determined by the number of vehicles present per unit length ($k$) and the speed at which they travel ($v$).
    *   **Density ($k$)** is inherently a measure of vehicles occupying a *length* of roadway.
    *   To relate this to flow per *time*, we need a speed that represents the average movement of vehicles *across* that length.
    *   **Space Mean Speed (SMS)** is the average speed of vehicles occupying a given length of roadway at an instant. It directly reflects how quickly the vehicles within that segment are moving and thus contributing to the flow out of that segment.
    *   **Time Mean Speed (TMS)** is the average speed of vehicles passing a *point*. While it's easier to measure with stationary detectors, it doesn't directly represent the average speed of vehicles *within* a segment, which is what's needed to combine with density. TMS overestimates the average speed of vehicles on a road segment because faster vehicles are encountered more frequently at a point than slower vehicles. Therefore, using TMS in $q=k \times v$ would lead to incorrect predictions of flow. SMS, being the harmonic mean of speeds (or average speed over a length), accurately represents the speed component in the flow equation.
