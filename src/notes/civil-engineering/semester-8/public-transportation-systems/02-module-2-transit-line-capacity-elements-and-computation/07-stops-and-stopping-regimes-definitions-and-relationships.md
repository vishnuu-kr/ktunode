---
title: "Stops and stopping regimes: Definitions and relationships"
subject: "PUBLIC TRANSPORTATION SYSTEMS"
module: "Module 2: Transit Line Capacity: Elements and Computation"
branch: "Civil Engineering"
semester: 8
topicId: "689f15d156b5e963ba811a94"
status: "completed"
scrapedAt: "2026-05-20T19:03:44.174Z"
---
# Public Transportation Systems: Module 2 - Transit Line Capacity: Elements and Computation

## Topic: Stops and Stopping Regimes: Definitions and Relationships

---

### **Learning Outcomes Covered:**

*   Understand the fundamental role of stops in transit line capacity.
*   Define and differentiate various types of transit stops.
*   Explain the concept of stopping regimes and their impact on service.
*   Analyze the relationships between stop location, frequency, and overall line capacity.
*   Identify factors that influence stop dwell times.
*   Comprehend how stopping patterns affect passenger experience and operational efficiency.

---

### **1. The Fundamental Role of Stops in Transit Line Capacity**

*   **Definition:** Stops are designated locations where transit vehicles (buses, trams, trains, etc.) are scheduled to pause to allow passengers to board and alight.
*   **Impact on Capacity:** Stops are critical determinants of transit line capacity because they represent points where vehicles *lose* momentum and spend valuable time. This time spent at stops, known as **dwell time**, directly reduces the effective operational time available for the vehicle to move along the route.
*   **Bottlenecks:** Inefficiently designed or overcrowded stops can become bottlenecks, slowing down the entire transit line and limiting the number of vehicles that can operate on the route.
*   **Passenger Interface:** Stops are the primary points of passenger interaction with the transit system. Their design, accessibility, and information provision significantly impact passenger experience and ridership.

---

### **2. Types of Transit Stops**

Transit stops can be categorized based on several criteria, including their location, design, and the types of services they support.

*   **By Location:**
    *   **Street Stops:** Located along the general roadway, often curbside.
        *   **Examples:** Bus stops in urban streets, tram stops on road segments.
        *   **Considerations:** Can be affected by traffic congestion, require careful integration with road traffic.
    *   **Dedicated Right-of-Way Stops:** Located on tracks or lanes exclusively for transit vehicles.
        *   **Examples:** Train stations, metro stations, bus rapid transit (BRT) stations.
        *   **Considerations:** Generally allow for faster boarding and alighting due to less interference from other traffic.
    *   **Terminal Stops:** The beginning and end points of a route.
        *   **Examples:** Bus depots, train termini.
        *   **Considerations:** Often have more complex facilities for vehicle layover, maintenance, and passenger amenities.
    *   **Intermediate Stops:** All stops between the terminal stops.

*   **By Design and Facilities:**
    *   **Basic Stop:** A simple sign indicating the stopping location.
        *   **Example:** A bus stop pole with a route number.
    *   **Sheltered Stop:** Includes a waiting shelter to protect passengers from weather.
    *   **Enclosed Station:** A fully enclosed structure with multiple passenger amenities.
        *   **Examples:** Train stations, subway stations.
    *   **Platform Stops:** Stops with raised platforms for level boarding, common in rail transit.
    *   **Curb-Side Stops:** Stops located at the edge of the roadway, common for buses.
        *   **Bus Bulge/Curb Extension:** An extension of the sidewalk at a bus stop, allowing buses to pull out of the traffic lane for boarding/alighting, minimizing disruption.

---

### **3. The Concept of Stopping Regimes**

A **stopping regime** refers to the pattern and frequency of stops a transit service makes along its route. It's a strategic choice that balances service accessibility with operational speed.

*   **Definition:** The stopping regime dictates *which* stops a particular service iteration will serve.
*   **Key Aspects:**
    *   **Frequency of Stops:** How close together stops are located.
    *   **Selection of Stops:** Which stops are designated as "request stops" or "mandatory stops" for a given service.
    *   **Service Level:** Directly influences the travel time and convenience for passengers.

*   **Common Types of Stopping Regimes:**
    *   **All-Stop Service (Local Service):** The vehicle stops at every designated stop along the route.
        *   **Pros:** High accessibility, serves all potential passengers.
        *   **Cons:** Slowest travel times, can be inefficient for longer journeys.
        *   **Capacity Impact:** Highest dwell time impact per route, lower vehicle throughput.
    *   **Limited-Stop Service (Skip-Stop Service):** The vehicle serves only a subset of stops, skipping others.
        *   **Pros:** Faster travel times than all-stop, more efficient for medium-to-long distance travel.
        *   **Cons:** Lower accessibility, requires passengers to plan journeys carefully based on which service they take.
        *   **Capacity Impact:** Reduced dwell time impact per route, higher vehicle throughput.
    *   **Express Service:** The vehicle makes very few stops, typically only at major transfer points or distant termini.
        *   **Pros:** Fastest travel times, efficient for long-distance commuter travel.
        *   **Cons:** Very low accessibility, serves only a small portion of potential passengers.
        *   **Capacity Impact:** Minimal dwell time impact, highest vehicle throughput.

*   **Example Scenario:**
    Imagine a bus route in a city.
    *   **All-Stop:** The bus stops at every corner.
    *   **Limited-Stop:** The bus only stops at major intersections or designated "limited-stop" locations.
    *   **Express:** The bus only stops at the central business district and a few suburban hubs.

---

### **4. Relationships Between Stop Location, Frequency, and Line Capacity**

These three elements are intrinsically linked and directly influence the capacity of a transit line.

*   **Stop Location & Dwell Time:**
    *   **Closer Stops:** More stops along a given route segment.
        *   **Effect:** Increased frequency of stopping events.
        *   **Impact on Capacity:** Higher total dwell time per route cycle, leading to lower line capacity.
    *   **Further Apart Stops:** Fewer stops along a given route segment.
        *   **Effect:** Decreased frequency of stopping events.
        *   **Impact on Capacity:** Lower total dwell time per route cycle, leading to higher line capacity.

*   **Stop Frequency & Service Level:**
    *   **High Stop Frequency (All-Stop):** High passenger accessibility but low travel speed.
    *   **Low Stop Frequency (Express):** Low passenger accessibility but high travel speed.
    *   **Trade-off:** Transit agencies must balance the desire for accessibility (serving many stops) with the need for efficiency and speed (serving fewer stops) to maximize line capacity and passenger satisfaction.

*   **Stop Location & Traffic Interaction:**
    *   **Street Stops (in traffic):** Can cause delays for following traffic, potentially impacting bus speed and schedule adherence.
    *   **Dedicated Lane/Offset Stops:** Minimize traffic interference, allowing buses to enter/exit traffic more efficiently, improving operational speed and capacity.

*   **Line Capacity Calculation Consideration:**
    *   **Throughput:** The number of passengers or vehicles that can pass a point on the line in a given time.
    *   **Formulaic Relationship (Simplified):**
        *   *Line Capacity* is inversely proportional to the *time spent at stops* per cycle.
        *   The *time spent at stops* is directly related to the *number of stops* and the *average dwell time per stop*.
        *   Therefore, reducing the number of stops or the dwell time per stop generally increases line capacity.

---

### **5. Factors Influencing Stop Dwell Times**

Dwell time is the total time a vehicle spends stationary at a stop. It's a critical component of operational efficiency and a major determinant of line capacity.

*   **Passenger Boarding and Alighting:**
    *   **Number of Passengers:** More passengers boarding/alighting = longer dwell time.
    *   **Fare Payment Method:**
        *   **On-board Payment (Cash/Card):** Slower due to transaction processing.
        *   **Off-board Payment/Pre-paid Fares (e.g., transit cards, mobile ticketing):** Significantly faster.
    *   **Boarding/Alighting Device Usage:**
        *   **Level Boarding (Platform Stops):** Faster and easier for all passengers.
        *   **Ramps/Lifts for Accessibility:** Add to dwell time but are crucial for inclusivity.
    *   **Passenger Behavior:** Passengers fumbling for fares, searching for seats, or moving slowly.
    *   **Vehicle Door Configuration:** Number and width of doors, door opening/closing speed.
    *   **Bus Layout:** Internal layout of seats and standing room, proximity of seats to doors.

*   **Operational Factors:**
    *   **Schedule Adherence:** Drivers may spend extra time at stops to make up for lost time.
    *   **Driver Behavior:** Efficiency in handling passengers and closing doors.
    *   **Vehicle Mechanical Issues:** Brief pauses for minor operational checks.

*   **Stop Design and Location:**
    *   **Platform Length:** Insufficient platform length can lead to bottlenecks if multiple doors are used.
    *   **Curb Extensions/Bus Bulges:** Can sometimes create conflicts with traffic if not well-designed, potentially increasing dwell time indirectly.
    *   **Stop Placement relative to traffic signals:** Being stuck at a red light before or after a stop can extend the effective "dwell" time.

*   **Service Type:**
    *   **All-stop services** inherently have longer total dwell times due to more frequent stops.

---

### **6. How Stopping Patterns Affect Passenger Experience and Operational Efficiency**

The choice of stopping regime has profound implications for both passengers and the transit operator.

*   **Impact on Passenger Experience:**
    *   **Accessibility vs. Speed:**
        *   *All-Stop:* High accessibility, convenient for short trips, but slow for longer trips, leading to frustration.
        *   *Limited/Express:* Faster travel times, appealing for longer journeys, but may inconvenience passengers needing to travel short distances or to less served stops.
    *   **Convenience:** Passengers want to board and alight as close as possible to their origin and destination.
    *   **Predictability:** A clear stopping pattern makes it easier for passengers to plan their journeys.
    *   **Comfort:** Reduced travel time generally leads to a more comfortable experience.

*   **Impact on Operational Efficiency:**
    *   **Vehicle Utilization:**
        *   Faster services (limited/express) allow vehicles to complete more round trips in a given time, increasing the number of passengers served by the fleet.
        *   This directly impacts the **line capacity** (passengers per hour per direction).
    *   **Headway Maintenance:** Shorter dwell times and faster travel speeds make it easier for buses/trains to maintain consistent headways (time between vehicles), leading to a more reliable and higher-capacity service.
    *   **Fuel Consumption & Emissions:** Shorter dwell times, less stop-and-go traffic, and smoother acceleration/deceleration can lead to better fuel efficiency and reduced emissions.
    *   **Labour Costs:** Higher operational efficiency means more service can be provided with the same number of drivers.

*   **Balancing Act:** Transit agencies must find the optimal stopping regime that balances the needs of different passenger groups and maximizes overall system efficiency. This often leads to the implementation of multiple service types on a single route (e.g., an all-stop service and a limited-stop service operating concurrently).

---

### **Practice Questions & Exercises**

**Question 1:**
Define "dwell time" and explain why it is a critical factor in transit line capacity.

**Question 2:**
List three distinct types of transit stops based on their location.

**Question 3:**
Compare and contrast "All-Stop Service" and "Limited-Stop Service" in terms of their impact on passenger accessibility and travel time.

**Question 4:**
What is the primary trade-off transit agencies must consider when designing stopping regimes?

**Question 5:**
Identify four factors that can significantly increase the dwell time at a bus stop.

---

### **Answers**

**Answer 1:**
Dwell time is the total time a transit vehicle spends stationary at a stop for passengers to board and alight. It is critical to transit line capacity because it represents time lost from moving along the route. The more time vehicles spend at stops, the fewer trips they can complete in a given period, thus reducing the overall capacity of the line.

**Answer 2:**
1.  **Street Stops:** Located along the general roadway (e.g., curbside bus stops).
2.  **Dedicated Right-of-Way Stops:** Located on exclusive transit paths (e.g., train stations, BRT stations).
3.  **Terminal Stops:** The origin and destination points of a route.

**Answer 3:**
*   **All-Stop Service:**
    *   **Passenger Accessibility:** High; serves every stop, catering to passengers with short-distance travel needs or those at less common locations.
    *   **Travel Time:** Slow; frequent stops lead to high total dwell time and reduced operational speed.
*   **Limited-Stop Service:**
    *   **Passenger Accessibility:** Moderate; skips some stops, requiring passengers to choose the correct service or walk further.
    *   **Travel Time:** Faster; fewer stops reduce total dwell time, increasing operational speed and attractiveness for longer journeys.

**Answer 4:**
The primary trade-off is between **passenger accessibility** (serving many stops) and **operational efficiency/speed** (serving fewer stops). Transit agencies must balance the need to serve as many potential passengers as possible with the need to move vehicles quickly and efficiently to maximize line capacity and minimize travel times for longer journeys.

**Answer 5:**
Four factors that can increase dwell time are:
1.  **High number of passengers boarding/alighting.**
2.  **On-board fare payment (e.g., cash transactions).**
3.  **Use of accessibility ramps or lifts.**
4.  **Inefficient fare collection systems or passenger behavior.**
    *(Other valid answers include vehicle door configuration, stop design, or driver practices).*

---

### **Important Points to Remember:**

*   **Stops are critical capacity bottlenecks:** Every stop adds to the total time a vehicle is out of service for movement.
*   **Dwell time is a key controllable variable:** Efficient stop design, fare collection, and operational practices can significantly reduce dwell times.
*   **Stopping regimes are strategic tools:** They directly manage the trade-off between accessibility and speed, influencing line capacity and passenger satisfaction.
*   **Fewer stops generally mean higher line capacity**, but at the cost of accessibility.
*   **Off-board fare payment and level boarding are crucial for efficient operations and higher capacity.**
*   The relationships between stop location, frequency, and stopping patterns are interdependent and must be considered holistically when designing transit service.
