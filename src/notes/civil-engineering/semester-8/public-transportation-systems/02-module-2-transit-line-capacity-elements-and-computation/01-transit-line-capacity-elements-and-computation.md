---
title: "Transit Line Capacity: Elements and Computation"
subject: "PUBLIC TRANSPORTATION SYSTEMS"
module: "Module 2: Transit Line Capacity: Elements and Computation"
branch: "Civil Engineering"
semester: 8
topicId: "689f15d156b5e963ba811a8e"
status: "completed"
scrapedAt: "2026-05-20T19:03:39.985Z"
---
# PUBLIC TRANSPORTATION SYSTEMS - Module 2: Transit Line Capacity: Elements and Computation

## Topic: Transit Line Capacity: Elements and Computation

---

### **1. Introduction to Transit Line Capacity**

*   **Definition:** Transit line capacity refers to the maximum number of passengers that a transit route or line can carry within a given period (typically an hour) under specified operating conditions. It is a crucial factor in designing and operating efficient transit systems.

*   **Importance:**
    *   **Service Planning:** Helps determine the number of vehicles required, service frequency, and vehicle size to meet passenger demand.
    *   **Operational Efficiency:** Identifies potential bottlenecks and allows for optimization of operations.
    *   **Investment Decisions:** Informs decisions about infrastructure upgrades and fleet expansion.
    *   **Passenger Comfort:** Ensures that the system can handle anticipated passenger volumes without excessive crowding.

*   **Key Concept:** Capacity is not static; it can vary depending on various factors. Understanding these factors is essential for accurate estimation.

---

### **2. Elements Affecting Transit Line Capacity**

This section breaks down the core components that influence how many passengers a transit line can handle.

#### **2.1 Vehicle Capacity**

*   **Definition:** The maximum number of passengers a single transit vehicle can accommodate.

*   **Components:**
    *   **Seated Capacity:** The number of designated seats.
    *   **Standing Capacity:** The number of passengers that can safely stand. This is often determined by standing room space and regulations (e.g., persons per square meter).
    *   **Total Passenger Capacity:** Seated Capacity + Standing Capacity.

*   **Factors Influencing Standing Capacity:**
    *   **Vehicle Design:** Layout, aisle width, placement of poles and handrails.
    *   **Loading Standards:** Acceptable level of crowding (e.g., determined by passenger comfort or safety regulations).
    *   **Peak Hour vs. Off-Peak:** Standing capacity is often considered more critically during peak hours.

*   **Examples:**
    *   A standard city bus might have 40 seats and standing room for 40 passengers, giving a total capacity of 80.
    *   A modern articulated bus might have 60 seats and standing room for 60 passengers, totaling 120.
    *   A subway car might have 50 seats and standing room for 100 passengers, totaling 150.

#### **2.2 Service Frequency (Headway)**

*   **Definition:** The rate at which vehicles depart from a specific point on the line, typically measured in vehicles per hour or as the time interval between consecutive vehicles (headway).

*   **Relationship with Capacity:** Higher service frequency (shorter headway) generally leads to higher line capacity, assuming vehicles are not operating at their maximum individual capacity.

*   **Formula:**
    *   `Service Frequency (vehicles/hour) = 60 / Headway (minutes)`

*   **Example:**
    *   If buses depart every 10 minutes, the service frequency is 60 / 10 = 6 vehicles per hour.
    *   If buses depart every 5 minutes, the service frequency is 60 / 5 = 12 vehicles per hour.

#### **2.3 Vehicle Speed**

*   **Definition:** The average speed at which vehicles travel along the transit line.

*   **Impact on Capacity:**
    *   **Higher Speed:** Allows for more trips per hour, thus increasing the number of vehicles that can operate on the line, and consequently, total line capacity.
    *   **Lower Speed:** Reduces the number of trips, limiting capacity.

*   **Factors Affecting Vehicle Speed:**
    *   **Traffic Conditions:** Congestion, signal delays, interaction with other traffic.
    *   **Route Design:** Number of stops, stop dwell times, road geometry.
    *   **Operating Environment:** Dedicated lanes (busways), signal priority, mixed traffic.

#### **2.4 Stop Dwell Time**

*   **Definition:** The amount of time a vehicle spends stopped at a passenger stop to board and alight passengers.

*   **Impact on Capacity:** Longer dwell times reduce the effective speed of the vehicle and decrease the number of trips that can be completed per hour, thereby reducing line capacity.

*   **Factors Affecting Dwell Time:**
    *   **Passenger Boarding/Alighting:** Number of passengers, fare payment methods (cash vs. smart cards), use of multiple doors.
    *   **Vehicle Doors:** Number and width of doors, door opening/closing speed.
    *   **Accessibility Features:** Wheelchair ramps, kneeling buses.
    *   **Boarding Procedures:** Driver actions, ticket checks.

*   **Example:**
    *   A bus stop with heavy passenger activity might have a dwell time of 30-60 seconds.
    *   A stop with minimal activity might have a dwell time of 10-20 seconds.

#### **2.5 Route Length and Geometry**

*   **Definition:** The total length of the transit line and its physical characteristics.

*   **Impact on Capacity:**
    *   **Longer Routes:** Can accommodate more vehicles in operation simultaneously, potentially increasing capacity. However, if a longer route has many constraints, its capacity might be limited.
    *   **Geometrical Constraints:** Sharp curves, steep grades, and narrow roads can reduce vehicle speed and maneuverability, limiting capacity.
    *   **Number of Stops:** More stops on a route generally increase total travel time and reduce effective speed, thus reducing capacity.

#### **2.6 Operational Constraints and Reliability**

*   **Definition:** Factors that affect the smooth and predictable operation of the transit service.

*   **Impact on Capacity:**
    *   **Reliability:** Consistent on-time performance ensures that vehicles maintain their scheduled headway. Delays and bunching (multiple vehicles arriving together) reduce effective capacity and service quality.
    *   **Vehicle Breakdowns:** Unexpected mechanical issues can remove vehicles from service, reducing the number of operating vehicles.
    *   **Labor Availability:** Shortages of drivers or maintenance staff can limit the number of vehicles that can be operated.
    *   **Dispatching and Scheduling:** Effective scheduling and dispatching are crucial to maintain headway and prevent disruptions.

---

### **3. Computation of Transit Line Capacity**

This section focuses on the mathematical methods used to calculate capacity.

#### **3.1 Basic Capacity Calculation**

*   **Concept:** The fundamental idea is to multiply the number of vehicles operating on the line by the capacity of each vehicle.

*   **Formula:**
    *   `Line Capacity (passengers/hour) = Service Frequency (vehicles/hour) * Vehicle Capacity (passengers/vehicle)`

*   **Example:**
    *   A bus route with a service frequency of 15 buses per hour, and each bus has a capacity of 70 passengers:
        *   Line Capacity = 15 vehicles/hour * 70 passengers/vehicle = 1050 passengers/hour.

#### **3.2 Including Stop Dwell Time and Travel Time**

*   **Concept:** This approach considers the time it takes for a vehicle to complete a round trip, which is influenced by travel time between stops and dwell times at stops. This helps determine the maximum number of trips a single vehicle can make in an hour, and thus, the number of vehicles that can be accommodated.

*   **Key Terms:**
    *   **Travel Time:** The time spent moving between stops.
    *   **Dwell Time:** The time spent stationary at stops.
    *   **One-Way Trip Time:** Travel Time + Sum of Dwell Times for all stops on one leg of the route.
    *   **Round Trip Time:** Two * One-Way Trip Time (assuming the same number of stops and dwell times in both directions).
    *   **Maximum Number of Trips per Vehicle per Hour:** `60 minutes / (Round Trip Time in minutes)` (This is a simplification; in reality, headway is the more direct determinant of frequency).

*   **More Sophisticated Approach (Focusing on effective frequency):**
    *   The practical number of vehicles that can operate on a route is limited by the time it takes for a vehicle to complete its cycle (travel time + dwell time).
    *   The maximum achievable service frequency is limited by `60 / (Minimum Realistic Headway)`. The minimum realistic headway is often dictated by safety, operational capabilities (e.g., turning radius), and the time needed for the previous vehicle to clear the next stop.

*   **Example:**
    *   Consider a bus route with the following:
        *   Number of stops: 15
        *   Average dwell time per stop: 20 seconds
        *   Average travel time between stops: 2 minutes
        *   Average one-way trip time = (15 stops * 20 seconds/stop) + (14 segments * 2 minutes/segment)
            *   Convert seconds to minutes: 15 stops * (20/60) minutes/stop = 5 minutes
            *   One-way trip time = 5 minutes + 28 minutes = 33 minutes
        *   Round trip time = 33 minutes * 2 = 66 minutes
    *   If a bus takes 66 minutes for a round trip, it can complete approximately `60 minutes / 66 minutes/round-trip` = 0.91 round trips per hour. This implies that if the route is very short and has many stops, the number of vehicles that can be effectively operated and maintain a consistent schedule might be limited.
    *   **More practically, the headway is what's set.** If the operator aims for a 10-minute headway, they need to ensure that the trip time plus dwell times allow for this. If a one-way trip takes 30 minutes (including stops), a 10-minute headway is impossible on a single vehicle loop. However, on a route with multiple vehicles, the headway is the *interval between vehicles*, not the trip completion time of a single vehicle.

    *   **Let's reframe:** If a vehicle's one-way trip time is 30 minutes (travel + dwell), and it needs to return to the starting point for another trip, the total cycle time for that specific vehicle is at least 60 minutes (assuming no layover). This means a single vehicle can only make one round trip in an hour. To achieve a 10-minute headway (6 vehicles per hour), you would need 6 vehicles running concurrently. The capacity of the line is then determined by these 6 vehicles.

*   **Focus on Headway as the Primary Determinant of Frequency:**
    *   In practice, transit agencies set desired service frequencies (e.g., every 10 minutes). The operational elements (speed, dwell time) must then be managed to achieve this headway.
    *   If a 10-minute headway is desired, and each bus can carry 70 passengers:
        *   Line Capacity = (60 minutes / 10 minutes/vehicle) * 70 passengers/vehicle = 6 vehicles/hour * 70 passengers/vehicle = 420 passengers/hour.

#### **3.3 Capacity Utilization and Saturation**

*   **Definition:** Capacity utilization refers to how close the actual passenger load is to the maximum theoretical capacity. Saturation occurs when the passenger demand meets or exceeds the available capacity.

*   **Load Factor:**
    *   `Load Factor = Actual Passengers Carried / Maximum Vehicle Capacity`
    *   A load factor of 1 means the vehicle is at its maximum capacity.
    *   Load factors above 1 indicate overcrowding.

*   **Importance:**
    *   **Identifying Overcrowding:** Crucial for passenger comfort and safety.
    *   **Resource Allocation:** Helps determine if more vehicles or larger vehicles are needed.
    *   **Service Standards:** Ensures that service levels meet passenger expectations.

#### **3.4 Maximum Theoretical vs. Practical Capacity**

*   **Maximum Theoretical Capacity:** The absolute maximum number of passengers a line *could* carry under ideal conditions, often assuming vehicles are packed beyond comfortable levels and with very short headways.
*   **Practical Capacity:** The maximum number of passengers that can be carried while maintaining acceptable service levels, comfort, and safety. This is what transit operators aim for.
    *   `Practical Capacity = Service Frequency * (Vehicle Capacity * Acceptable Load Factor)`
    *   An acceptable load factor might be 0.7 to 0.8 for peak hours on buses, and higher for rapid transit systems where standing is expected.

*   **Example:**
    *   Using the previous example: Line Capacity = 420 passengers/hour (based on 10-minute headway and 70-passenger capacity).
    *   If an acceptable load factor for peak hour is 0.8, then the practical capacity for peak hour might be considered:
        *   Practical Capacity = (60 minutes / 10 minutes/vehicle) * (70 passengers/vehicle * 0.8) = 6 vehicles/hour * 56 passengers/vehicle = 336 passengers/hour.
    *   This signifies that while the buses *can* carry 70 passengers, for practical and comfortable service, they should aim for around 56 passengers per bus during peak times on this route.

---

### **4. Improving Transit Line Capacity**

Strategies to increase the passenger-carrying ability of a transit line.

#### **4.1 Increasing Service Frequency**

*   **How:** Reducing headway by scheduling more vehicles.
*   **Requires:** Sufficient vehicles, drivers, and operational capacity (e.g., avoiding bottlenecks that prevent frequent service).

#### **4.2 Increasing Vehicle Capacity**

*   **How:** Using larger vehicles (e.g., articulated buses, longer trains).
*   **Requires:** Infrastructure compatibility (e.g., road width, station length, track gauge), financial investment.

#### **4.3 Reducing Stop Dwell Times**

*   **How:**
    *   **Off-board Fare Payment:** Pre-paid tickets, smart cards, validators at stops.
    *   **All-Door Boarding:** Utilizing multiple doors for faster passenger entry and exit.
    *   **Improved Bus Stop Design:** Shelters, clear signage, level boarding.
    *   **Passenger Assistance:** Information provided by drivers or dedicated staff.
    *   **Consolidating Stops:** Removing less-used stops to reduce overall dwell time burden.

#### **4.4 Increasing Vehicle Speed**

*   **How:**
    *   **Dedicated Bus Lanes:** Separating buses from general traffic.
    *   **Transit Signal Priority (TSP):** Allowing buses to influence traffic signals.
    *   **Improved Route Design:** Avoiding sharp turns, fewer traffic lights.
    *   **Express Services:** Skipping intermediate stops.

#### **4.5 Optimizing Operations**

*   **How:**
    *   **Real-time Monitoring and Dispatch:** Addressing disruptions quickly.
    *   **Preventive Maintenance:** Reducing vehicle breakdowns.
    *   **Improved Scheduling and Rostering:** Ensuring sufficient resources.
    *   **Managing Bunching:** Strategies to keep vehicles evenly spaced.

---

### **5. Practice Questions and Exercises**

**Question 1:**
A bus route operates with 12 buses per hour. Each bus has a seating capacity of 45 passengers and a standing capacity of 35 passengers. Assuming a full standing capacity can be utilized during peak hours, what is the maximum theoretical line capacity in passengers per hour?

**Answer 1:**
*   Vehicle Capacity = Seated Capacity + Standing Capacity = 45 + 35 = 80 passengers/vehicle
*   Line Capacity = Service Frequency * Vehicle Capacity
*   Line Capacity = 12 vehicles/hour * 80 passengers/vehicle = **960 passengers/hour**

**Question 2:**
A new bus route is being planned. The projected one-way trip time (including average dwell times) is 40 minutes.
a) What is the maximum number of round trips a single bus can complete in a 60-minute period?
b) If the operator aims for a 15-minute headway, what is the maximum theoretical line capacity assuming each bus has a capacity of 60 passengers?

**Answer 2:**
a) A single bus's one-way trip is 40 minutes. A round trip would be 80 minutes (40 minutes out + 40 minutes back).
*   Maximum round trips in 60 minutes = 60 minutes / 80 minutes/round-trip = **0.75 round trips**. This means a single bus cannot even complete one full round trip within an hour. This highlights that to achieve frequent service, multiple buses are needed.

b) If the desired headway is 15 minutes, the service frequency is:
*   Service Frequency = 60 minutes / 15 minutes/vehicle = 4 vehicles/hour
*   Line Capacity = Service Frequency * Vehicle Capacity
*   Line Capacity = 4 vehicles/hour * 60 passengers/vehicle = **240 passengers/hour**

**Question 3:**
A bus operator wants to increase the practical capacity of a route from 500 passengers/hour to 700 passengers/hour. The current service frequency is 10 vehicles per hour, and each bus has a capacity of 70 passengers. The operator can implement all-door boarding to reduce average stop dwell time by 10 seconds per stop. If the route has 15 stops, and the original average dwell time was 25 seconds per stop, how does reducing dwell time potentially affect capacity? (Assume headway is the primary factor for frequency).

**Answer 3:**
*   **Current State:**
    *   Service Frequency = 10 vehicles/hour
    *   Vehicle Capacity = 70 passengers/vehicle
    *   Current Line Capacity = 10 vehicles/hour * 70 passengers/vehicle = 700 passengers/hour.
    *   *Note: The current line capacity is already 700 passengers/hour. The goal is to reach 700, which is already met. Let's assume the goal is to reach *at least* 700 and the question intends to show how changes *impact* capacity towards a higher target.*

*   **Impact of Reducing Dwell Time:**
    *   Original Average Dwell Time = 25 seconds/stop
    *   Total original dwell time per one-way trip = 15 stops * 25 seconds/stop = 375 seconds
    *   Reduced Dwell Time = 25 seconds - 10 seconds = 15 seconds/stop
    *   New Total Dwell Time per one-way trip = 15 stops * 15 seconds/stop = 225 seconds

    *   **How this affects headway:** Reducing dwell time directly contributes to reducing the overall trip time. If the trip time is reduced, the time it takes for a vehicle to complete its cycle is reduced. This allows for a shorter headway to be maintained or for more trips to be completed within an hour by the same number of vehicles.
    *   If the reduction in dwell time allows for a reduction in headway from 6 minutes (10 vehicles/hour) to 5 minutes (12 vehicles/hour):
        *   New Service Frequency = 60 minutes / 5 minutes/vehicle = 12 vehicles/hour
        *   New Line Capacity = 12 vehicles/hour * 70 passengers/vehicle = **840 passengers/hour**.

    *   **Conclusion:** By reducing stop dwell times, the operator can potentially increase the service frequency, thereby increasing the overall line capacity from 700 passengers/hour to 840 passengers/hour. This strategy helps achieve or exceed the target of 700 passengers/hour.

---

### **Important Points to Remember**

*   **Capacity is a system-wide concept:** It's not just about vehicle size but also how frequently vehicles run and how quickly they operate.
*   **Practical vs. Theoretical:** Always distinguish between what's possible under ideal conditions and what's achievable and desirable in real-world operations.
*   **Dwell time and speed are critical operational levers:** Small improvements in these areas can lead to significant capacity gains.
*   **Headway is the primary driver of frequency:** Managing headway is key to maximizing line capacity.
*   **Bottlenecks can limit capacity:** Even with high individual vehicle capacity, a slow segment of the route or a congested terminal can reduce overall line capacity.
*   **Passenger comfort and safety are paramount:** Capacity should be managed to maintain acceptable service quality, not just to move the absolute maximum number of people.

---
---
