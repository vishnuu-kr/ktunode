---
title: "Route choice and assignment"
subject: "PUBLIC TRANSPORTATION SYSTEMS"
module: "Module 3: Transit Lines and Networks: Planning objectives"
branch: "Civil Engineering"
semester: 8
topicId: "689f15d156b5e963ba811a9f"
status: "completed"
scrapedAt: "2026-05-20T19:03:51.099Z"
---
# Public Transportation Systems: Module 3 - Transit Lines and Networks: Planning Objectives

## Topic: Route Choice and Assignment

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   **Understand the fundamental principles of route choice and assignment in transit planning.**
*   **Identify and explain the factors influencing traveller route choice.**
*   **Differentiate between various route choice models.**
*   **Describe the process of route assignment and its importance.**
*   **Recognize the challenges and considerations in route choice and assignment.**

---

### 1. Understanding the Fundamental Principles of Route Choice and Assignment

**Route choice** and **route assignment** are critical components of transit planning. They help us understand how people choose to travel and how to allocate them to specific transit routes within a network.

*   **Route Choice:** The process by which an individual selects a particular path (sequence of transit lines, stops, and transfers) to travel from an origin to a destination.
*   **Route Assignment:** The process of allocating all travellers between a specific origin and destination (OD pair) to the routes they have chosen. This is often done at an aggregate level for a given OD pair or for the entire network.

**Why are these important?**

*   **Efficient Network Design:** Understanding how travellers choose routes helps in designing efficient and attractive transit networks.
*   **Service Planning:** It informs decisions about the frequency, capacity, and routing of transit services.
*   **Demand Forecasting:** Accurate route choice and assignment are essential for forecasting ridership and revenue.
*   **Impact Analysis:** Helps in assessing the impact of changes to the transit network (e.g., new routes, service changes) on travel patterns.

---

### 2. Factors Influencing Traveller Route Choice

Travellers make route choices based on a variety of factors, which can be broadly categorized as:

#### 2.1. In-Vehicle Time

*   **Definition:** The time spent travelling on a transit vehicle between stops.
*   **Importance:** Generally considered the most significant factor. Travellers prefer shorter in-vehicle times.
*   **Example:** A bus route that travels directly without many intermediate stops will likely be preferred over one with frequent stops, even if the latter is slightly shorter in distance.

#### 2.2. Waiting Time

*   **Definition:** The time spent waiting at a transit stop for a vehicle to arrive.
*   **Importance:** Highly valued by travellers, often perceived as more burdensome than in-vehicle time. High frequency reduces waiting time.
*   **Example:** A bus arriving every 5 minutes will be more attractive than a bus arriving every 30 minutes, even if the in-vehicle journey is the same.

#### 2.3. Transfer Time

*   **Definition:** The time spent changing from one transit line to another, including walking between stops and waiting for the connecting service.
*   **Importance:** Transfers add complexity and uncertainty to the journey, so routes requiring fewer or no transfers are generally preferred.
*   **Example:** A route that directly connects two major activity centers is more attractive than one requiring two transfers between different bus lines.

#### 2.4. Walking Time

*   **Definition:** The time spent walking to or from transit stops.
*   **Importance:** Affects accessibility to the transit system. Longer walks can deter potential riders.
*   **Example:** A route with stops located further away from residential areas or employment centers might experience lower ridership.

#### 2.5. Reliability and Predictability

*   **Definition:** The consistency of service and the ability of travellers to predict arrival and departure times.
*   **Importance:** Unreliable services lead to longer perceived waiting times and uncertainty, making them less attractive.
*   **Example:** A bus route that is consistently late or experiences frequent cancellations will be avoided by travellers who value punctuality.

#### 2.6. Cost (Fare)

*   **Definition:** The monetary cost of using the transit service.
*   **Importance:** A significant factor, especially for price-sensitive travellers.
*   **Example:** If two routes offer similar journey times, the one with a lower fare will likely be preferred.

#### 2.7. Comfort and Convenience

*   **Definition:** Factors like seating availability, cleanliness of vehicles, crowding levels, ease of boarding, and availability of real-time information.
*   **Importance:** Subjective but can significantly influence route choice.
*   **Example:** A clean bus with ample seating is generally more appealing than an overcrowded and dirty one.

#### 2.8. Network Connectivity and Ease of Understanding

*   **Definition:** How well the transit network is integrated and how easy it is for travellers to understand the available options.
*   **Importance:** A well-connected and intuitive network simplifies route choice.
*   **Example:** A network with clear signage and integrated ticketing across different modes is easier to navigate.

---

### 3. Differentiating Between Various Route Choice Models

Route choice behaviour can be modelled using various mathematical and statistical techniques. These models aim to predict the probability of a traveller choosing a specific route based on the factors mentioned above.

#### 3.1. All-or-Nothing Assignment (AON)

*   **Definition:** A simple assignment method where all trips in an OD pair are assigned to the single shortest path (typically in terms of travel time).
*   **Pros:** Easy to implement and computationally inexpensive.
*   **Cons:** Highly unrealistic as it assumes perfect knowledge and no congestion. Ignores congestion effects and variations in traveller preferences.
*   **Example:** In a very basic transit network analysis, if Route A is 10 minutes and Route B is 15 minutes for an OD pair, all travellers are assigned to Route A.

#### 3.2. Capacity Restrained Assignment (CRA)

*   **Definition:** Assigns trips to routes, but takes into account the capacity of the routes. If a route exceeds its capacity, its travel time increases, making alternative routes more attractive.
*   **Pros:** More realistic than AON by incorporating congestion.
*   **Cons:** Can be computationally intensive.
*   **Mechanism:** Often uses a BPR (Bureau of Public Roads) function or similar to relate flow to travel time.
    *   $t = t_0 \times [1 + \alpha (V/C)^\beta]$
        *   $t$: Actual travel time
        *   $t_0$: Free-flow travel time
        *   $V$: Volume of traffic (ridership)
        *   $C$: Capacity of the route
        *   $\alpha, \beta$: Calibration parameters

#### 3.3. Logit Models (Discrete Choice Models)

*   **Definition:** Probabilistic models that predict the probability of a traveller choosing a particular route from a set of available routes. They are based on utility maximization principles.
*   **Utility:** Each route has a utility, which is a function of its attributes (travel time, cost, etc.) and the traveller's preferences.
    *   $U_{nj} = V_{nj} + \epsilon_{nj}$
        *   $U_{nj}$: Utility of route $n$ for traveller $j$
        *   $V_{nj}$: Systematic utility (observable attributes)
        *   $\epsilon_{nj}$: Random utility (unobservable attributes)
*   **Logit Formula:** The probability of choosing route $n$ is given by:
    *   $P_{nj} = \frac{e^{V_{nj}}}{\sum_{k \in C} e^{V_{nk}}}$
        *   $P_{nj}$: Probability of traveller $j$ choosing route $n$
        *   $C$: Set of all available routes for traveller $j$
*   **Types:**
    *   **Simple Logit:** Assumes Independence of Irrelevant Alternatives (IIA) property – the ratio of probabilities of choosing between two options is independent of the presence or attributes of other options.
    *   **Nested Logit:** Addresses IIA by grouping similar alternatives into nests, allowing for correlation in unobserved utilities.
    *   **Mixed Logit:** The most flexible model, allowing for correlations in unobserved utilities and random taste variation across individuals.
*   **Pros:** Highly flexible, can capture complex preferences and trade-offs between different route attributes.
*   **Cons:** Can be data-intensive (requires surveys) and computationally demanding to calibrate.

#### 3.4. System Optimal (SO) vs. User Equilibrium (UE)

These concepts are often discussed in the context of traffic assignment but are relevant to transit route choice as well, especially when considering how to manage demand to optimize the network.

*   **User Equilibrium (UE):**
    *   **Concept:** A state where no traveller can reduce their travel time by unilaterally changing their route. All used routes between an OD pair have equal travel times, and these travel times are less than or equal to the travel times on unused routes.
    *   **Assumption:** Travellers are rational and self-interested, aiming to minimize their individual travel time.
    *   **Relevance:** Represents how travellers might behave in reality.
*   **System Optimal (SO):**
    *   **Concept:** A state where the total travel time for all travellers in the network is minimized. This often requires some travellers to take routes that are not their individual shortest, in order to balance the load across the network and reduce overall congestion.
    *   **Assumption:** A central authority aims to optimize the entire system's performance, potentially by incentivizing or directing travellers.
    *   **Relevance:** Used for planning and policy decisions, such as tolling or service adjustments, to achieve system efficiency.

---

### 4. Describing the Process of Route Assignment

Route assignment is the subsequent step after route choice has been modelled or understood. It's about allocating the demand to the transit network.

#### 4.1. Trip Generation and Distribution (Pre-requisites)

*   **Trip Generation:** Estimating the number of trips originating or terminating in different zones.
*   **Trip Distribution:** Estimating the number of trips between origin and destination zones (OD matrices).

#### 4.2. Modal Split

*   **Definition:** Determining the proportion of trips that will be made by public transport versus other modes (e.g., private car, walking, cycling).
*   **Factors:** Influenced by the relative attractiveness of each mode, which is determined by factors like travel time, cost, comfort, and availability.

#### 4.3. Network Representation

*   **Definition:** The transit system needs to be represented in a digital format for analysis. This includes:
    *   **Nodes:** Stops, transfer points, intersections.
    *   **Links:** Segments of transit routes between stops, including travel time, capacity, and fare.
    *   **Routes:** Defined sequences of links.
*   **Example:** A digital map showing all bus stops, train stations, and the paths of different bus routes and train lines connecting them.

#### 4.4. Assignment Techniques

Once OD matrices for transit users are available, the assignment process allocates these trips to the transit network.

*   **All-or-Nothing (AON) Assignment:** As discussed earlier, all trips are assigned to the shortest path.
*   **Capacity-Constrained Assignment:** Iterative process where trips are assigned to paths, and link travel times are updated based on capacity utilization, until a stable state is reached (often approximating UE).
*   **Probabilistic Assignment (using Logit Models):** Trips are split among available routes based on the probabilities calculated by the choice models. For an OD pair, a percentage of trips might go via Route A, another percentage via Route B, etc.

#### 4.5. Iterative Process

Often, route assignment is an iterative process, especially when dealing with congestion (CRA or UE).

1.  **Initial Assignment:** Assign trips based on free-flow travel times.
2.  **Update Travel Times:** Recalculate link travel times based on assigned volumes and capacities.
3.  **Re-assign:** Re-assign trips based on the new travel times.
4.  **Repeat:** Continue until the travel times and assignments converge (i.e., changes are minimal between iterations).

---

### 5. Recognizing the Challenges and Considerations in Route Choice and Assignment

Several complexities arise when planning and implementing route choice and assignment strategies.

#### 5.1. Data Availability and Quality

*   **Challenge:** Accurate and up-to-date data on travel patterns, traveller preferences, and network attributes is crucial but often difficult to obtain.
*   **Considerations:**
    *   **Surveys:** Household travel surveys, on-board surveys.
    *   **Automated Data:** Smart card data, GPS data from vehicles and passengers.
    *   **GIS Data:** Road networks, stop locations.

#### 5.2. Modelling Complexities

*   **Challenge:** Real-world route choice behaviour is complex and influenced by many factors, making it hard to capture perfectly in models.
*   **Considerations:**
    *   **Transfer Behaviour:** How do people handle transfers? Do they wait for a specific connection or take the next available vehicle?
    *   **Information Availability:** How does real-time information (apps, displays) affect choice?
    *   **Mode Choice Interdependence:** Route choice is often made after modal choice.
    *   **Heterogeneity:** Different traveller groups (e.g., students, elderly, commuters) have different preferences.

#### 5.3. Congestion and Capacity Constraints

*   **Challenge:** Transit vehicles have limited capacity, and routes can become congested, impacting travel times and attractiveness.
*   **Considerations:**
    *   **Service Planning:** Ensuring sufficient frequency and vehicle size to meet demand.
    *   **Demand Management:** Strategies to shift demand away from peak periods or congested routes.

#### 5.4. Network Design and Evaluation

*   **Challenge:** How to design a network that is attractive and efficient for a wide range of users.
*   **Considerations:**
    *   **Trade-offs:** Balancing directness, coverage, frequency, and cost.
    *   **Network Structure:** Grid networks vs. radial networks vs. hybrid systems.
    *   **Integration:** How well do different lines and modes connect?

#### 5.5. Dynamic Nature of Travel

*   **Challenge:** Travel conditions and traveller choices can change dynamically due to real-time events (e.g., traffic incidents, service disruptions).
*   **Considerations:**
    *   **Real-time Information Systems:** Providing passengers with up-to-date information.
    *   **Adaptive Routing:** Dynamic adjustments to service based on real-time demand and conditions.

#### 5.6. Behavioural vs. System-Oriented Objectives

*   **Challenge:** Reconciling individual traveller preferences (User Equilibrium) with the overall efficiency of the transit system (System Optimal).
*   **Considerations:**
    *   **Policy Interventions:** Using fares, service levels, or information to steer behaviour towards system-optimal outcomes.

---

### Practice Questions and Exercises

**Question 1:**
A traveller is choosing between two bus routes (Route A and Route B) from their home to work.
*   **Route A:** In-vehicle time = 20 minutes, Waiting time = 5 minutes, Transfers = 0, Walking time = 5 minutes, Fare = $2.00.
*   **Route B:** In-vehicle time = 15 minutes, Waiting time = 8 minutes, Transfers = 1 (10 min walk + 5 min wait for connection), Walking time = 3 minutes, Fare = $2.50.

Assuming travellers primarily prioritize minimizing total travel time, which route would they likely prefer? Justify your answer.

**Answer 1:**
To compare, let's calculate the total perceived travel time for each route, assigning a higher "value" to waiting and transfer time. A common approach is to consider:
*   In-vehicle time: 1 unit of time
*   Waiting time: 2 units of time (often valued twice as much as in-vehicle)
*   Transfer time: 2 units of time (walk + wait for connection)
*   Walking time: 1.5 units of time (often valued slightly more than in-vehicle)

**Route A Total Perceived Time:**
*   In-vehicle: 20 minutes * 1 = 20 minutes
*   Waiting: 5 minutes * 2 = 10 minutes
*   Transfer: 0 minutes
*   Walking: 5 minutes * 1.5 = 7.5 minutes
*   **Total = 20 + 10 + 0 + 7.5 = 37.5 minutes**

**Route B Total Perceived Time:**
*   In-vehicle: 15 minutes * 1 = 15 minutes
*   Waiting: 8 minutes * 2 = 16 minutes
*   Transfer: 10 minutes (walk) * 1.5 + 5 minutes (wait) * 2 = 15 + 10 = 25 minutes
*   Walking: 3 minutes * 1.5 = 4.5 minutes
*   **Total = 15 + 16 + 25 + 4.5 = 60.5 minutes**

Based on this simplified valuation, **Route A is likely preferred** due to its significantly lower perceived total travel time, despite Route B having a shorter in-vehicle time. The additional waiting and transfer time on Route B makes it less attractive.

---

**Question 2:**
What is the primary difference between User Equilibrium (UE) and System Optimal (SO) in the context of transit assignment?

**Answer 2:**
*   **User Equilibrium (UE):** Focuses on individual traveller behaviour. It's a state where no single traveller can improve their situation (e.g., reduce travel time) by changing their route. All utilized paths between an OD pair have equal and minimal travel times for those paths.
*   **System Optimal (SO):** Focuses on the overall network efficiency. It's a state where the *total* travel time for *all* travellers in the system is minimized. This might involve some travellers taking longer routes to balance the load and reduce congestion for the benefit of the entire system.

---

**Question 3:**
Explain why a simple All-or-Nothing (AON) assignment might not be suitable for transit network planning in a congested urban environment.

**Answer 3:**
AON assignment assigns all trips in an OD pair to the single shortest path based on free-flow conditions. This is unsuitable for congested urban environments because:
1.  **It ignores congestion:** In reality, as more people use a route, its travel time increases due to congestion. AON does not account for this feedback loop.
2.  **It assumes perfect knowledge and no elasticity:** It assumes all travellers know the absolute shortest path and will always take it, without considering their own preferences or the impact of their choice on others.
3.  **It can overload routes:** AON can assign a disproportionately high number of trips to a single route, leading to unrealistic congestion and service breakdown, which then makes other routes more attractive.

More realistic models like Capacity Restrained Assignment (CRA) or probabilistic choice models (Logit) are needed to account for congestion and varied traveller behaviour.

---

### Important Points to Remember:

*   **Route choice and assignment are fundamental to understanding and planning effective transit networks.**
*   **Travellers weigh various factors, including in-vehicle time, waiting time, transfers, cost, reliability, and comfort.**
*   **Waiting and transfer times are often perceived as more burdensome than in-vehicle time.**
*   **All-or-Nothing (AON) assignment is a simple but often unrealistic method.**
*   **Logit models provide a probabilistic approach to route choice by incorporating utility maximization.**
*   **User Equilibrium (UE) reflects individual rational choices, while System Optimal (SO) aims for overall system efficiency.**
*   **Accurate data and sophisticated modelling techniques are essential for effective route assignment.**
*   **Congestion and capacity constraints are critical considerations that necessitate iterative assignment processes.**
*   **Understanding route choice helps in designing routes that are attractive, efficient, and meet passenger needs.**

---
This concludes the study notes for Topic: Route Choice and Assignment.
