---
title: "Comparison of all-stop, skip-stop, zonal and express/local operations"
subject: "PUBLIC TRANSPORTATION SYSTEMS"
module: "Module 2: Transit Line Capacity: Elements and Computation"
branch: "Civil Engineering"
semester: 8
topicId: "689f15d156b5e963ba811a96"
status: "completed"
scrapedAt: "2026-05-20T19:03:45.566Z"
---
# PUBLIC TRANSPORTATION SYSTEMS

## Module 2: Transit Line Capacity: Elements and Computation

### Topic: Comparison of All-Stop, Skip-Stop, Zonal, and Express/Local Operations

---

## Introduction to Transit Service Patterns

Transit line operations are designed to balance the competing needs of serving a wide range of origins and destinations while minimizing travel times. Different service patterns achieve this balance in distinct ways, impacting capacity, speed, and passenger experience. This topic explores the fundamental characteristics, advantages, disadvantages, and applications of four primary service patterns: all-stop, skip-stop, zonal, and express/local.

---

### Learning Outcomes

By the end of this topic, you will be able to:

*   **Define and describe** the characteristics of all-stop, skip-stop, zonal, and express/local transit operations.
*   **Identify the key elements** that contribute to the capacity of each service pattern.
*   **Analyze and compare** the operational advantages and disadvantages of each service pattern.
*   **Understand the impact** of each service pattern on travel time, passenger convenience, and operational efficiency.
*   **Determine appropriate contexts** for implementing each service pattern.
*   **Perform basic calculations** to understand the trade-offs between different service patterns.

---

## 1. All-Stop (Local) Operations

### Definition

In an all-stop operation, a transit vehicle serves every designated stop along its route. It is the most basic and common form of bus and rail service.

### Key Concepts and Definitions

*   **Stop Dwell Time:** The time a vehicle spends at a stop with its doors open, allowing passengers to board and alight. This is a crucial factor in determining overall travel time and capacity.
*   **Headway:** The time interval between successive vehicles operating on the same route.
*   **Operating Speed:** The average speed of the vehicle, including dwell times and stop-to-stop travel times.
*   **Vehicle Capacity:** The maximum number of passengers a vehicle can carry.

### Operational Characteristics

*   **Maximum Coverage:** Serves all potential passenger origins and destinations along the route.
*   **Highest Dwell Time Impact:** Every stop adds to the total travel time.
*   **Lower Operating Speed:** Due to frequent stops and dwell times.
*   **Simplicity:** Easy to understand and implement for passengers.

### Elements Affecting Capacity

*   **Number of Stops:** More stops lead to longer travel times and reduced line capacity.
*   **Average Dwell Time per Stop:** Higher dwell times significantly reduce capacity. Factors include:
    *   Boarding/alighting passenger volume.
    *   Fare collection methods (cash vs. off-board payment).
    *   Vehicle door configuration.
    *   Accessibility requirements (e.g., wheelchair ramps).
*   **Headway:** Shorter headways can increase system capacity, but are limited by vehicle acceleration/deceleration capabilities and block times.
*   **Vehicle Capacity:** The absolute limit on passengers per vehicle.

### Advantages

*   **Maximum accessibility:** Serves all locations.
*   **Convenient for short-distance travelers:** Passengers can board and alight at their nearest stop.
*   **Simple for passengers to use:** No need to figure out which stops a particular bus/train serves.

### Disadvantages

*   **Slow travel times:** Especially for longer journeys.
*   **Reduced operational efficiency:** Vehicles spend a significant portion of their time stopped.
*   **Lower line capacity:** The rate at which passengers can be moved along the entire line is limited by the cumulative dwell time and stop spacing.

### Example

A local bus route in a residential neighborhood that stops at every intersection.

### Practice Question

A local bus route has 30 stops. The average stop dwell time is 20 seconds. If the bus travels between stops at an average speed of 15 km/h and the average distance between stops is 400 meters, calculate the total time spent at stops and in transit for one full trip.

### Answer

*   **Time spent at stops:** 30 stops * 20 seconds/stop = 600 seconds (10 minutes)
*   **Number of segments between stops:** 30 stops - 1 = 29 segments
*   **Time spent in transit:** (29 segments * 400 meters/segment) / (15,000 meters/hour) * 3600 seconds/hour = 29 * 400 * 3600 / 15000 = 2784 seconds (approximately 46.4 minutes)
*   **Total trip time:** 10 minutes + 46.4 minutes = 56.4 minutes

---

## 2. Skip-Stop Operations

### Definition

Skip-stop operations involve designating certain stops along a route to be served only by specific vehicles, while other vehicles skip these stops and serve different ones. This aims to reduce the number of stops per vehicle, thereby improving travel times.

### Key Concepts and Definitions

*   **Alternating Stops:** Vehicles serve alternating stops.
*   **Segmented Service:** The route is divided into segments, with different vehicles serving different sets of stops within those segments.

### Operational Characteristics

*   **Improved Travel Times:** By skipping stops, vehicles spend less time stopped.
*   **Increased Operating Speed:** Compared to all-stop service.
*   **Reduced Passenger Convenience (for some):** Passengers at skipped stops must walk further or use a different vehicle.
*   **Complexity in Scheduling and Information:** Passengers need to know which vehicle serves their stop.

### Elements Affecting Capacity

*   **Reduced Dwell Time Impact:** Fewer stops per vehicle means less cumulative dwell time.
*   **Increased Stop Spacing (effectively):** For individual vehicles, the distance between stops they serve is greater.
*   **Headway and Schedule Coordination:** Critical for ensuring adequate service coverage and avoiding bunching.
*   **Vehicle Capacity:** Remains the same per vehicle.

### Advantages

*   **Faster travel times:** Significantly reduces journey durations for passengers on served stops.
*   **Improved efficiency:** Vehicles can operate at higher average speeds.
*   **Can increase overall system throughput:** By reducing the time vehicles spend on the line.

### Disadvantages

*   **Reduced accessibility:** Passengers at skipped stops may face longer walks.
*   **Requires clear passenger information:** To avoid confusion about which service to take.
*   **Can lead to unbalanced loads:** If not carefully managed, some services might be overloaded while others are underutilized.

### Example

A bus route where one bus (Bus A) serves stops 1, 3, 5, 7, etc., and another bus (Bus B) serves stops 2, 4, 6, 8, etc.

### Practice Question

Compare the theoretical line capacity (measured in passengers per hour) of two identical routes.
Route 1: All-stop, 20 stops, 20-second dwell time, 400m stop spacing, 15 km/h operating speed between stops, 40 passengers per vehicle, 5-minute headway.
Route 2: Skip-stop (alternating stops), 10 stops served per vehicle, 20-second dwell time, 800m stop spacing, 15 km/h operating speed between stops, 40 passengers per vehicle, 5-minute headway. Assume the city can absorb the passenger demand served by both routes in total.

### Answer

This is a simplified capacity calculation focusing on the impact of stops.

**Route 1 (All-Stop):**
*   Time per stop cycle (including transit and dwell): (400m / 15000m/hr * 3600s/hr) + 20s = 96s + 20s = 116 seconds.
*   Number of stops per km: 1000m / 400m/stop = 2.5 stops/km.
*   Effective speed considering stops: (400m) / (116s) = 14.48 km/h (This is a simplification; a more rigorous calculation would consider total trip time).
*   *More accurately:*
    *   Total stops = 20
    *   Total time at stops = 20 stops * 20 s/stop = 400 s
    *   Total distance = 20 stops * 400 m/stop = 8000 m = 8 km
    *   Time in transit = 8000 m / 15000 m/hr * 3600 s/hr = 1920 s
    *   Total trip time = 400 s + 1920 s = 2320 s (approx 38.67 minutes)
    *   Trips per hour = 3600 s/hr / 2320 s/trip = 1.55 trips/hr
    *   Capacity = 1.55 trips/hr * 40 passengers/vehicle = **62 passengers/hour**

**Route 2 (Skip-Stop):**
*   Time per stop cycle (including transit and dwell): (800m / 15000m/hr * 3600s/hr) + 20s = 192s + 20s = 212 seconds.
*   *More accurately:*
    *   Total stops served per vehicle = 10
    *   Total time at stops = 10 stops * 20 s/stop = 200 s
    *   Total distance = 10 stops * 800 m/stop = 8000 m = 8 km
    *   Time in transit = 8000 m / 15000 m/hr * 3600 s/hr = 1920 s
    *   Total trip time = 200 s + 1920 s = 2120 s (approx 35.33 minutes)
    *   Trips per hour = 3600 s/hr / 2120 s/trip = 1.698 trips/hr
    *   Capacity = 1.698 trips/hr * 40 passengers/vehicle = **67.9 passengers/hour**

**Comparison:** Skip-stop operation, with fewer stops per vehicle, allows for slightly more trips per hour and therefore higher theoretical line capacity, assuming demand can be met.

---

## 3. Zonal Operations

### Definition

Zonal operations divide a route into distinct zones. Vehicles may operate as all-stop within the first zone, then become express (skipping stops) to reach the next zone, and so on. Alternatively, some vehicles might serve only specific zones.

### Key Concepts and Definitions

*   **Zone:** A defined segment of the transit line.
*   **Inter-zone Travel:** Travel between different zones.
*   **Intra-zone Travel:** Travel within a single zone.
*   **Transfer Points:** Key locations where passengers might need to transfer between services (e.g., between an all-stop service and an express service).

### Operational Characteristics

*   **Hybrid Approach:** Combines features of all-stop and express services.
*   **Improved Speed for Longer Journeys:** By skipping intermediate zones.
*   **Maintains Some Local Coverage:** Within each zone.
*   **Potential for Complexity:** Requires passengers to understand which service operates in which zone or to transfer.

### Elements Affecting Capacity

*   **Number and size of zones:** Affects the number of skips.
*   **Definition of service within each zone:** All-stop or express.
*   **Efficiency of transfer points:** Smooth transfers are crucial.
*   **Headway management:** Ensuring adequate service in each zone and for transfers.
*   **Vehicle Capacity:** Per vehicle.

### Advantages

*   **Balances local coverage and speed:** Offers better speed for longer-distance travelers while retaining some local access.
*   **Can serve high-demand corridors effectively:** By providing faster service in the core section.
*   **More adaptable than pure skip-stop:** Allows for flexibility in service design within zones.

### Disadvantages

*   **Requires good passenger information and signage:** To guide passengers.
*   **Potential for transfers:** Can add time and inconvenience for some passengers.
*   **Complex to operate and manage:** Requires precise scheduling and coordination.
*   **Can lead to unbalanced loads:** If not managed carefully.

### Example

A bus route from a suburban area into a city center.
*   **Zone 1 (Suburban):** All-stop service to serve local residents.
*   **Zone 2 (Mid-section):** Express service, skipping all stops between the last stop in Zone 1 and the first stop in Zone 3.
*   **Zone 3 (City Center):** All-stop service to serve the dense downtown area.

### Practice Question

A zonal route has two zones. Zone 1 has 5 all-stop stations with 20s dwell time each and is 2km long. Zone 2 has 3 express stations with 30s dwell time each and is 4km long. The bus travels at 15 km/h between stops in Zone 1 and 20 km/h between stops in Zone 2. The average stop spacing in Zone 1 is 400m. In Zone 2, the express stops are located at the beginning and end of the zone, and one midway, meaning 2 segments between the 3 stops. If the headway is 10 minutes and vehicle capacity is 50 passengers, what is the line capacity?

### Answer

*   **Zone 1 (All-Stop):**
    *   Stops: 5
    *   Dwell time per stop: 20 s
    *   Total dwell time in Zone 1: 5 stops * 20 s/stop = 100 s
    *   Distance: 2 km = 2000 m
    *   Stop spacing in Zone 1: 2000 m / 5 stops = 400 m (consistent with problem)
    *   Time in transit in Zone 1: 2000 m / 15000 m/hr * 3600 s/hr = 480 s
    *   Total time in Zone 1: 100 s + 480 s = 580 s

*   **Zone 2 (Express):**
    *   Stops: 3
    *   Dwell time per stop: 30 s
    *   Total dwell time in Zone 2: 3 stops * 30 s/stop = 90 s
    *   Distance: 4 km = 4000 m
    *   Time in transit in Zone 2: 4000 m / 20000 m/hr * 3600 s/hr = 720 s
    *   Total time in Zone 2: 90 s + 720 s = 810 s

*   **Total trip time:** Time in Zone 1 + Time in Zone 2 = 580 s + 810 s = 1390 s (approx 23.17 minutes)
*   **Trips per hour:** 3600 s/hr / 1390 s/trip = 2.59 trips/hr
*   **Line Capacity:** 2.59 trips/hr * 50 passengers/vehicle = **129.5 passengers/hour**

---

## 4. Express/Local Operations

### Definition

This is a widely used hybrid system, often seen on rail lines or high-demand bus routes. A single route is operated by two types of services:
*   **Express Service:** Skips many stops, serving only key points or major transfer stations.
*   **Local Service:** Operates like a traditional all-stop service, serving all or most stops.

Often, express and local services run on the same track or guideway, but on different headways or with different scheduling.

### Key Concepts and Definitions

*   **Dual Service:** Offering two distinct service levels on the same corridor.
*   **Major Stops/Hubs:** Key locations served by both express and local services.
*   **Feeder Service:** Local services often act as feeders to the express service.

### Operational Characteristics

*   **Optimized for Speed and Coverage:** Provides fast service for longer-distance travelers while maintaining local access.
*   **Increased System Capacity:** By offering two service types, the overall number of passengers that can be moved is higher.
*   **Requires Sophisticated Scheduling:** To manage interactions between express and local vehicles.

### Elements Affecting Capacity

*   **Number of express stops vs. local stops:** Directly impacts travel times.
*   **Headway of express and local services:** Crucial for balancing service levels.
*   **Coordination at shared stops:** To minimize delays when both services stop.
*   **Vehicle capacity:** Per vehicle.
*   **Capacity of shared infrastructure:** The number of vehicles the track/road can handle.

### Advantages

*   **Superior Travel Times for Express Riders:** Significantly faster than all-stop.
*   **Retains Local Access:** Ensures that areas with lower demand are still served.
*   **High System Capacity:** Can move more people than a single service type.
*   **Flexibility:** Can be tailored to demand patterns.

### Disadvantages

*   **Requires passengers to choose the correct service:** Needs clear signage and information.
*   **Potential for confusion:** Especially at stations where both services stop.
*   **Complex to schedule and manage:** Requires careful coordination.
*   **Risk of unbalanced loads:** If demand is heavily skewed towards one service type.

### Example

A subway line where "A" trains run express, skipping every other station, and "B" trains run local, stopping at every station. Both train types might use the same tracks.

### Practice Question

A subway line operates with two services: Express and Local.
*   **Express Service:** Serves 5 major stations, 40-second dwell time, 1 km average spacing, 30 km/h operating speed between stations. Headway is 10 minutes. Vehicle capacity is 150 passengers.
*   **Local Service:** Serves 10 stations (including the 5 major ones), 25-second dwell time, 0.5 km average spacing, 20 km/h operating speed between stations. Headway is 5 minutes. Vehicle capacity is 100 passengers.
Calculate the total line capacity (passengers per hour) for both services combined.

### Answer

**Express Service:**
*   Number of stops: 5
*   Total dwell time: 5 stops * 40 s/stop = 200 s
*   Total distance: 5 stops * 1 km/stop = 5 km = 5000 m
*   Time in transit: 5000 m / 30000 m/hr * 3600 s/hr = 600 s
*   Total trip time (Express): 200 s + 600 s = 800 s (approx 13.33 minutes)
*   Trips per hour (Express): 3600 s/hr / 800 s/trip = 4.5 trips/hr
*   Capacity (Express): 4.5 trips/hr * 150 passengers/vehicle = **675 passengers/hour**

**Local Service:**
*   Number of stops: 10
*   Total dwell time: 10 stops * 25 s/stop = 250 s
*   Total distance: 10 stops * 0.5 km/stop = 5 km = 5000 m
*   Time in transit: 5000 m / 20000 m/hr * 3600 s/hr = 900 s
*   Total trip time (Local): 250 s + 900 s = 1150 s (approx 19.17 minutes)
*   Trips per hour (Local): 3600 s/hr / 1150 s/trip = 3.13 trips/hr
*   Capacity (Local): 3.13 trips/hr * 100 passengers/vehicle = **313 passengers/hour**

**Total Line Capacity:** Capacity (Express) + Capacity (Local) = 675 + 313 = **988 passengers/hour**

---

## Comparison Summary Table

| Feature           | All-Stop (Local)                               | Skip-Stop                                            | Zonal                                                                    | Express/Local                                                                |
| :---------------- | :--------------------------------------------- | :--------------------------------------------------- | :----------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
| **Definition**    | Serves every stop.                             | Vehicles skip designated stops; different vehicles serve different stops. | Route divided into zones; service type (all-stop/express) varies by zone. | Route has two services: one express (few stops), one local (many stops).     |
| **Travel Time**   | Slowest                                        | Faster than all-stop                                 | Moderate to fast (depending on zone configuration)                       | Fastest (Express) to moderate (Local)                                        |
| **Coverage**      | Maximum                                        | Reduced at skipped stops                             | Moderate (good within zones, requires transfers between zones)           | Good overall (Express serves major points, Local serves all)               |
| **Passenger Convenience** | High (simple)                                  | Lower (requires understanding of service)           | Moderate to lower (potential for transfers)                            | Moderate (need to choose the correct service)                                |
| **Operational Complexity** | Low                                            | Moderate                                             | High                                                                     | High                                                                         |
| **Line Capacity** | Lowest                                         | Moderate                                             | Moderate to High                                                         | Highest (combined)                                                           |
| **Key Capacity Driver** | Dwell time, stop density                       | Reduced dwell time impact, increased stop spacing    | Zone definition, transfer efficiency                                     | Headways, coordination of express/local services                           |
| **Best For**      | High-density, short-distance travel; feeder routes. | Medium-density corridors where speed is crucial; supplementing express. | Long corridors with varying density; balancing local access and speed. | High-demand corridors; providing both rapid transit and local service.       |
| **Disadvantages** | Slow, inefficient for long trips               | Reduced local access, needs clear information        | Complex scheduling, potential for transfers                            | Requires good passenger information, complex operations                    |

---

## Important Points to Remember

*   **Trade-off:** There's a fundamental trade-off between coverage/accessibility and speed/efficiency/capacity.
*   **Dwell Time:** Is the single most significant factor affecting the capacity of local and all-stop services. Reducing dwell time (e.g., through off-board fare payment) dramatically improves capacity.
*   **Stop Spacing:** Directly impacts travel time between stops and the total number of stops on a route.
*   **Headway:** Shorter headways generally increase line capacity, assuming vehicles can maintain their schedule.
*   **Demand Management:** The choice of service pattern should align with passenger demand patterns along the route.
*   **Passenger Information:** Clear, accurate, and easily accessible information is crucial for skip-stop, zonal, and express/local services to be successful.
*   **System Integration:** The effectiveness of these service patterns often relies on how well they are integrated with other routes and modes of transport.

---
