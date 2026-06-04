---
title: "Passenger volume analysis and service capacity determination"
subject: "PUBLIC TRANSPORTATION SYSTEMS"
module: "Module 1: Basic Operating Elements of Public Transit"
branch: "Civil Engineering"
semester: 8
topicId: "689f15d156b5e963ba811a86"
status: "completed"
scrapedAt: "2026-05-20T19:03:35.119Z"
---
# PUBLIC TRANSPORTATION SYSTEMS

## Module 1: Basic Operating Elements of Public Transit

### Topic: Passenger Volume Analysis and Service Capacity Determination

---

### 1. Understanding Passenger Volume Analysis

**1.1 What is Passenger Volume Analysis?**

Passenger volume analysis is the process of quantifying and understanding the number of passengers using a public transportation system. It involves collecting, organizing, and interpreting data related to passenger movements over time and space. This analysis is crucial for:

*   **Service Planning:** Determining the appropriate routes, frequencies, and vehicle sizes.
*   **Operational Efficiency:** Optimizing schedules, resource allocation, and driver assignments.
*   **Capacity Management:** Ensuring that the system can meet demand without overcrowding or underutilization.
*   **Financial Planning:** Estimating revenue and identifying areas for cost reduction.
*   **Policy Development:** Informing decisions on service expansion, fare structures, and infrastructure investments.

**1.2 Key Concepts and Metrics:**

*   **Passenger Trips:** A single journey made by one person from an origin to a destination using public transport.
*   **Boardings (On-board Count):** The number of passengers who get on a vehicle at a specific stop.
*   **Alightings (Off-board Count):** The number of passengers who get off a vehicle at a specific stop.
*   **Passenger Miles (or Kilometers):** The sum of the distances traveled by each passenger. This metric helps understand the "work" done by the system.
    *   *Formula:* Passenger Miles = Σ (Number of passengers on a segment * Length of the segment)
*   **Passenger Trips per Capita:** The average number of public transit trips taken by each person in a given population over a specific period.
    *   *Formula:* Passenger Trips per Capita = (Total Passenger Trips / Population)
*   **Peak Hour:** The period within a day with the highest passenger demand, typically during morning and evening commute times.
*   **Off-Peak Hour:** Periods outside of the peak hours with lower passenger demand.
*   **Peak Load Point:** The point on a route where the maximum number of passengers are simultaneously on a vehicle. This is often the most critical point for capacity planning.
*   **Passenger Load:** The number of passengers on a vehicle at a given time or on a specific segment.
*   **Headway:** The time interval between successive vehicles on the same route.

**1.3 Data Collection Methods:**

*   **Automatic Passenger Counters (APCs):** Electronic devices installed on vehicles that automatically count passengers boarding and alighting.
*   **Manual Counts:** Transit staff or trained enumerators physically counting passengers at stops.
*   **Farebox/Smart Card Data:** Information derived from ticket sales, smart cards (e.g., Oyster, Clipper), or mobile ticketing apps. This can provide trip origin-destination and passenger movement patterns.
*   **Surveys:** Passenger surveys to understand travel behavior, demographics, and trip purpose.
*   **Origin-Destination (O-D) Surveys:** Detailed surveys to understand where passengers start and end their journeys.

**1.4 Analyzing Passenger Volume Data:**

*   **Time-Series Analysis:** Examining how passenger volumes change over days, weeks, months, and years to identify trends, seasonality, and the impact of events.
*   **Spatial Analysis:** Mapping passenger volumes across different routes, stops, and segments to identify high-demand corridors and areas.
*   **Peak Period Analysis:** Focusing on understanding passenger demand during peak hours to ensure adequate service.
*   **Load Profile Analysis:** Plotting the passenger load along a route for a specific trip or time period to identify peak load points.

**Example:**

A bus route experiences the following boardings at its stops during the morning peak hour:

*   Stop A: 50 passengers
*   Stop B: 75 passengers
*   Stop C: 120 passengers
*   Stop D: 90 passengers
*   Stop E: 40 passengers

If the bus starts with 10 passengers from the depot, and assuming no alightings between stops:

*   Load at Stop B = 10 (initial) + 50 (Stop A) = 60 passengers
*   Load at Stop C = 60 (after Stop B) + 75 (Stop B) = 135 passengers
*   Load at Stop D = 135 (after Stop C) + 120 (Stop C) = 255 passengers
*   Load at Stop E = 255 (after Stop D) + 90 (Stop D) = 345 passengers

In this example, Stop D is the **peak load point** with 255 passengers on the bus. The next stop, Stop E, shows a significant decrease as passengers alight.

---

### 2. Determining Service Capacity

**2.1 What is Service Capacity?**

Service capacity refers to the maximum number of passengers a public transportation service (a route, a vehicle, or a system) can effectively carry over a given period. It's not just about the physical number of seats, but also about the operational limits and desired service quality.

**2.2 Types of Capacity:**

*   **Vehicle Capacity:** The maximum number of passengers a single vehicle can legally and comfortably carry. This includes seated and standing capacity.
    *   *Seated Capacity:* Number of seats.
    *   *Standing Capacity:* The number of passengers allowed to stand, typically governed by safety regulations and space.
*   **Route Capacity:** The maximum number of passengers a bus route or train line can handle over a specific period (e.g., per hour). This is determined by:
    *   *Vehicle Capacity*
    *   *Service Frequency (Headway)*
    *   *Running Speed*
    *   *Terminal Dwell Times*
    *   *Number of Stops*
    *   *Vehicle Type and Size*
*   **System Capacity:** The aggregate capacity of all routes and services within the entire public transportation network.

**2.3 Calculating and Determining Capacity:**

*   **Vehicle Capacity Calculation:**
    *   *Formula:* Vehicle Capacity = Seated Capacity + Standing Capacity
    *   *Note:* Standing capacity is often calculated based on a density assumption (e.g., 4-6 passengers per square meter in standing areas). Regulations and comfort levels play a role.
    *   *Example:* A bus with 40 seats and designated standing areas that can accommodate 40 standing passengers has a total vehicle capacity of 80 passengers.

*   **Route Capacity Calculation (Peak Hour):**
    *   *Formula:* Route Capacity (per hour) = (Vehicle Capacity / Average Headway in hours) * (Number of vehicles operating in peak hour)
    *   *Or, more commonly:* Route Capacity (per hour) = (Number of vehicles per hour) * Vehicle Capacity
    *   *Where:* Number of vehicles per hour = 60 minutes / Average Headway in minutes
    *   *Example:* If a bus route has a headway of 10 minutes during the peak hour, there are 60/10 = 6 buses per hour. If each bus has a capacity of 70 passengers, the route capacity is 6 buses/hour * 70 passengers/bus = 420 passengers per hour.

*   **Peak Load Point Capacity:** This is the most critical factor in determining if a service is adequate. The capacity of the service at the peak load point must be greater than or equal to the passenger demand at that point.
    *   *Formula:* Service Capacity at Peak Load Point = (Number of vehicles per hour) * Vehicle Capacity
    *   *If:* Demand at Peak Load Point > Service Capacity at Peak Load Point, then the service is **overloaded**.

**2.4 Service Standards and Capacity Planning:**

*   **Service Levels:** Public transit agencies set service standards that define the acceptable level of crowding. These are often expressed as maximum passenger loads per vehicle or per unit of capacity.
    *   *Example:* A service standard might state that no more than 1.5 times the seated capacity (1.5 * number of seats) should be occupied during peak hours, or that standing passengers should not exceed a certain density.
*   **Capacity Planning Process:**
    1.  **Identify Peak Demand:** Analyze passenger volume data to determine the peak demand at different points and times.
    2.  **Determine Peak Load Points:** Identify the locations on each route with the highest passenger loads.
    3.  **Calculate Required Capacity:** Based on service standards and peak load point demand, calculate the minimum capacity needed.
    4.  **Assess Current Service Capacity:** Calculate the current service capacity of the route based on vehicle capacity and frequency.
    5.  **Compare Demand and Capacity:** If demand exceeds capacity, adjustments are needed.

**2.5 Adjusting Service Capacity:**

When demand exceeds capacity, several strategies can be employed:

*   **Increase Service Frequency (Reduce Headway):** Add more vehicles to the route during peak periods.
*   **Use Larger Capacity Vehicles:** Replace smaller buses with articulated buses or coaches.
*   **Implement Express Services:** Offer services that skip some stops to speed up travel and concentrate passengers on fewer vehicles.
*   **Optimize Route Design:** Review stop spacing and locations to improve efficiency.
*   **Demand Management:** Implement policies that encourage off-peak travel or shift demand to other modes.

---

### 3. Practice Questions and Exercises

**Question 1:**
A bus route has an average headway of 15 minutes during the morning peak hour. If each bus has a capacity of 60 passengers, what is the hourly capacity of this bus route?

**Answer 1:**
*   Number of buses per hour = 60 minutes / 15 minutes/bus = 4 buses/hour
*   Hourly capacity = 4 buses/hour * 60 passengers/bus = **240 passengers per hour**

**Question 2:**
A subway line serves a busy corridor. During the peak hour, passenger demand at the busiest station (peak load point) is 10,000 passengers per hour. The subway operates trains with a capacity of 1,000 passengers each, and the headway is 3 minutes.
a) What is the current service capacity of this subway line during the peak hour?
b) Is the service overloaded? If so, by how much?

**Answer 2:**
a)
*   Number of trains per hour = 60 minutes / 3 minutes/train = 20 trains/hour
*   Current service capacity = 20 trains/hour * 1,000 passengers/train = **20,000 passengers per hour**

b)
*   Passenger demand = 10,000 passengers per hour
*   Service capacity = 20,000 passengers per hour
*   Since demand (10,000) is less than capacity (20,000), the service is **not overloaded**. In fact, there is surplus capacity of 10,000 passengers per hour.

**Question 3:**
Consider a bus route where passenger counts at each stop during the peak hour are as follows, starting from the origin with 15 passengers already on board:
*   Stop 1: 40 boardings
*   Stop 2: 60 boardings, 10 alightings
*   Stop 3: 80 boardings, 30 alightings
*   Stop 4: 50 boardings, 50 alightings
*   Stop 5: 20 boardings, 90 alightings

a) What is the passenger load on the bus after each stop?
b) Identify the peak load point on this route.

**Answer 3:**
a)
*   Before Stop 1: 15 passengers
*   After Stop 1: 15 (initial) + 40 (boardings) = **55 passengers**
*   After Stop 2: 55 (previous load) + 60 (boardings) - 10 (alightings) = **105 passengers**
*   After Stop 3: 105 (previous load) + 80 (boardings) - 30 (alightings) = **155 passengers**
*   After Stop 4: 155 (previous load) + 50 (boardings) - 50 (alightings) = **155 passengers**
*   After Stop 5: 155 (previous load) + 20 (boardings) - 90 (alightings) = **85 passengers**

b) The peak load point is at **Stop 3 and Stop 4**, where the passenger load reaches its maximum of **155 passengers**.

**Question 4:**
If the bus in Question 3 has a total capacity of 120 passengers (40 seats, 80 standing), is the service overloaded at its peak load point?

**Answer 4:**
*   Peak passenger load = 155 passengers
*   Bus capacity = 120 passengers
*   Since the peak load (155) exceeds the bus capacity (120), the service **is overloaded** at the peak load point.

---

### 4. Important Points to Remember

*   **Passenger volume analysis is foundational for effective transit planning and operations.** Understanding *who*, *when*, and *where* passengers travel is critical.
*   **Peak load points are the bottlenecks.** Service must be designed to accommodate demand at these specific locations.
*   **Capacity is a function of both vehicle size and service frequency.** You can increase capacity by running more buses or by using larger buses.
*   **Service standards define acceptable crowding levels.** These standards help determine when adjustments are needed.
*   **Data quality is paramount.** Accurate data collection methods are essential for reliable analysis and decision-making.
*   **Balancing capacity and demand is key.** Overcapacity leads to inefficient resource use, while undercapacity leads to poor service quality and lost ridership.

---
