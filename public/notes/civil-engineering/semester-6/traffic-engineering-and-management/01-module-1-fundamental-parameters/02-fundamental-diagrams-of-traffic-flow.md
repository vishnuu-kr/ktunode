---
title: "Fundamental diagrams of traffic flow."
subject: "TRAFFIC ENGINEERING AND MANAGEMENT"
module: "Module 1: Fundamental parameters"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba8111d9"
status: "completed"
scrapedAt: "2026-05-20T18:56:13.099Z"
---
# TRAFFIC ENGINEERING AND MANAGEMENT

## Module 1: Fundamental Parameters

### Topic: Fundamental Diagrams of Traffic Flow

---

### 1. Introduction to Traffic Flow and its Characteristics

Traffic flow is the study of interactions between vehicles and infrastructure. Understanding these interactions is crucial for designing and managing transportation systems effectively. The fundamental parameters that describe traffic flow are:

*   **Flow Rate (q):** The number of vehicles passing a point or section of a road per unit of time.
    *   **Units:** Vehicles per hour (veh/hr) or vehicles per second (veh/s).
    *   **Definition:**  $q = \frac{N}{T}$, where $N$ is the number of vehicles and $T$ is the time interval.
    *   **Example:** If 120 vehicles pass a point in 10 minutes, the flow rate is $\frac{120 \text{ veh}}{10 \text{ min}} \times \frac{60 \text{ min}}{1 \text{ hr}} = 720 \text{ veh/hr}$.

*   **Density (k):** The number of vehicles occupying a given length of roadway at a particular instant.
    *   **Units:** Vehicles per kilometer (veh/km) or vehicles per mile (veh/mi).
    *   **Definition:** $k = \frac{N}{L}$, where $N$ is the number of vehicles and $L$ is the length of the roadway section.
    *   **Example:** If 30 vehicles are present in a 1 km stretch of highway, the density is 30 veh/km.

*   **Space Mean Speed (S) / Speed (v):** The average speed of all vehicles occupying a given section of roadway at a particular instant.
    *   **Units:** Kilometers per hour (km/hr) or miles per hour (mph).
    *   **Definition:** The average speed calculated by considering the speeds of all vehicles within a specific section.
    *   **Relationship with Flow and Density:** The fundamental relationship between flow, density, and speed is:
        $$q = k \times S$$
        This equation states that the flow rate is the product of density and space mean speed.

---

### 2. The Fundamental Diagrams of Traffic Flow

The fundamental diagrams of traffic flow are graphical representations of the relationships between flow rate (q), density (k), and speed (S). They are essential tools for understanding traffic behavior under various conditions. There are three primary fundamental diagrams:

#### 2.1. Speed-Flow (S-q) Relationship

*   **Description:** This diagram plots the relationship between speed (S) on the y-axis and flow rate (q) on the x-axis.
*   **Key Characteristics:**
    *   **Low Density, Low Flow:** At low densities, speeds are generally high, but the flow rate is low because there are few vehicles.
    *   **Increasing Flow with Increasing Speed:** As density increases, flow also increases, and speeds tend to remain relatively high until a certain point.
    *   **Maximum Flow (Capacity):** The diagram reaches a peak flow rate, known as the **capacity (C)** of the roadway. At this point, the roadway is operating at its maximum efficiency.
    *   **Decreasing Flow with Increasing Speed (Beyond Capacity):** If the flow rate attempts to exceed capacity, speeds begin to decrease due to congestion, leading to a breakdown in flow.
    *   **Free Flow Speed (v_f):** The maximum speed achieved at very low densities, representing the speed limit or the desired speed of drivers.
*   **Diagram Shape:** Typically an inverted 'U' shape, starting from zero flow at zero speed, rising to a peak (capacity), and then decreasing.

    ```
          ^ Speed (S)
          |
          |      /-----\
          |     /       \
          |    /         \
          |   /           \
          |  /             \
          | /               \
          +---------------------> Flow Rate (q)
         0        Capacity (C)
    ```

#### 2.2. Speed-Density (S-k) Relationship

*   **Description:** This diagram plots the relationship between speed (S) on the y-axis and density (k) on the x-axis.
*   **Key Characteristics:**
    *   **Low Density, High Speed:** At low densities, vehicles can travel at their free flow speed.
    *   **Decreasing Speed with Increasing Density:** As density increases, vehicles have to travel closer together, leading to reduced speeds.
    *   **Jam Density (k_j):** The maximum density that can be achieved when traffic is completely stopped or moving at an extremely low speed. At jam density, flow is zero.
    *   **Free Flow Speed (v_f):** The speed at zero density.
*   **Diagram Shape:** Typically a straight line or a curve that starts at the free flow speed at zero density and decreases linearly or curvilinearly to zero speed at jam density.

    ```
          ^ Speed (S)
          |
          |    /|
          |   / |
          |  /  |
          | /   |
          |/    |
          +-----|-------------> Density (k)
         0      |     Jam Density (k_j)
                v_f
    ```

#### 2.3. Flow-Density (q-k) Relationship

*   **Description:** This diagram plots the relationship between flow rate (q) on the y-axis and density (k) on the x-axis. This is often referred to as the **"fundamental diagram"** in its purest sense.
*   **Key Characteristics:**
    *   **Linear Region (Free Flow):** At low densities, flow is approximately linearly proportional to density, with the slope representing the average speed.
    *   **Maximum Flow (Capacity, C):** The diagram reaches a peak flow rate at a specific density, which is the capacity of the roadway.
    *   **Congested Region:** Beyond the capacity point, as density continues to increase, flow starts to decrease. This region represents congested conditions where vehicles are bumper-to-bumper.
    *   **Jam Density (k_j):** The maximum density where flow is zero.
*   **Diagram Shape:** Typically a parabolic or triangular shape. It starts from zero flow at zero density, rises to a peak (capacity), and then falls to zero flow at jam density.

    ```
          ^ Flow Rate (q)
          |
          |      /-----\
          |     /       \
          |    /         \
          |   /           \
          |  /             \
          | /               \
          +---------------------> Density (k)
         0     k_c       k_j
                Capacity (C)
    ```

---

### 3. Traffic States and Regimes

The fundamental diagrams help define different traffic states or regimes:

*   **Free Flow:**
    *   **Characteristics:** Low density, high speeds, vehicles are independent of each other.
    *   **Diagram Region:** The initial portion of the q-k and S-q diagrams where flow is low and speed is high. On the S-k diagram, this is the upper part.
*   **Synchronized Flow:**
    *   **Characteristics:** Intermediate densities, speeds are reduced but still relatively uniform, vehicles influence each other's movement. Flow is approaching capacity.
    *   **Diagram Region:** The region where flow is increasing towards capacity on the q-k diagram. On the S-q diagram, this is the upward sloping part. On the S-k diagram, this is the downward sloping part.
*   **Wide Moving Jam:**
    *   **Characteristics:** High densities, low speeds, vehicles travel in platoons, with stop-and-go waves. This is a state of congestion.
    *   **Diagram Region:** The portion of the q-k diagram where flow is decreasing beyond capacity. On the S-q diagram, this is the downward sloping part. On the S-k diagram, this is the lower part approaching zero speed.
*   **Jam or Stagnation:**
    *   **Characteristics:** Extremely high densities, near-zero speeds, complete stoppage of traffic.
    *   **Diagram Region:** The point of jam density (k_j) on the q-k diagram where flow is zero. On the S-k diagram, this is where speed is zero.

---

### 4. Capacity and Critical Density

*   **Capacity (C):**
    *   **Definition:** The maximum flow rate that can be sustained on a facility under prevailing conditions.
    *   **Significance:** Represents the theoretical upper limit of traffic throughput.
    *   **Location on Diagrams:** The peak of the q-k and S-q diagrams.
*   **Critical Density (k_c):**
    *   **Definition:** The density at which maximum flow (capacity) occurs.
    *   **Significance:** Represents the density at which the roadway is operating most efficiently.
    *   **Location on Diagrams:** The density corresponding to the peak flow rate on the q-k diagram.

---

### 5. Drivers of Traffic Flow

The fundamental diagrams are based on the behavior of drivers. Key aspects include:

*   **Desired Speed:** The speed a driver wishes to travel at in the absence of constraints.
*   **Headway:** The time interval between the front of a vehicle and the front of the succeeding vehicle.
*   **Spacing:** The distance between the front of a vehicle and the front of the succeeding vehicle.

**Important Relationship:**
*   $S = \frac{3600}{h}$ (where $h$ is headway in seconds, and S is in veh/hr, assuming average vehicle length and clearance)
*   $k = \frac{1000}{s}$ (where $s$ is spacing in meters, and k is in veh/km)

---

### 6. Types of Traffic Flow Models

Different models attempt to represent these fundamental relationships:

*   **Greenshields Model (Linear Model):**
    *   **Assumption:** Assumes a linear relationship between speed and density (S-k) and a parabolic relationship between flow and density (q-k).
    *   **Equations:**
        *   $S = v_f - \frac{v_f}{k_j}k$
        *   $q = k \times S = k(v_f - \frac{v_f}{k_j}k) = v_f k - \frac{v_f}{k_j}k^2$
    *   **Pros:** Simple, intuitive, widely used for basic analysis.
    *   **Cons:** May not accurately represent all traffic conditions, particularly the transition to congestion.

*   **Greenberg Model (Logarithmic Model):**
    *   **Assumption:** Assumes a logarithmic relationship between speed and density.
    *   **Equations:**
        *   $S = v_0 \ln(\frac{k_0}{k})$ (where $v_0$ and $k_0$ are parameters)
    *   **Pros:** Better captures the behavior in congested traffic.
    *   **Cons:** Less intuitive and more complex.

*   **Drake Model (Exponential Model):**
    *   **Assumption:** Assumes an exponential relationship.
    *   **Equations:**
        *   $q = k e^{-a k}$ (where $a$ is a parameter)
    *   **Pros:** Can model the entire range of traffic conditions.
    *   **Cons:** Complex to calibrate.

*   **Payne-Whitham Model (Cell Transmission Model - CTM):**
    *   **Approach:** A discrete-time, discrete-space macroscopic traffic flow model.
    *   **Description:** Divides the road network into cells and models traffic flow between cells based on flow-density relationships and a bottleneck flow rate (capacity).
    *   **Significance:** Widely used in traffic simulation software and for real-time traffic management.

---

### 7. Applications of Fundamental Diagrams

*   **Traffic Capacity Analysis:** Estimating the maximum flow a road can handle.
*   **Traffic State Identification:** Determining whether traffic is free-flowing, congested, or at capacity.
*   **Traffic Prediction and Forecasting:** Estimating future traffic conditions based on current parameters.
*   **Traffic Control Design:** Informing decisions on traffic signal timing, speed limits, and ramp metering.
*   **Impact Assessment:** Evaluating the effect of road geometry, traffic composition, and incidents on traffic flow.
*   **Simulation Model Development:** Providing the underlying relationships for traffic simulation software.

---

### 8. Important Points to Remember

*   The fundamental diagrams are **empirical relationships**, meaning they are based on observed data and can vary for different roadways and traffic conditions.
*   **Capacity (C)** is the maximum flow rate, not the average flow rate.
*   **Jam density (k_j)** is the density at which flow stops.
*   The **S-q, S-k, and q-k diagrams are interconnected** through the fundamental relationship $q = k \times S$.
*   Traffic flow can be categorized into different **regimes** (free flow, synchronized flow, wide moving jam) based on density and speed.
*   Understanding these diagrams is crucial for effective **traffic management and control**.

---

### Practice Questions and Exercises

**Question 1:**
If the average speed on a highway segment is 80 km/hr and the flow rate is 1600 vehicles/hr, what is the density of traffic on that segment?

**Answer 1:**
Using the relationship $q = k \times S$:
$1600 \text{ veh/hr} = k \times 80 \text{ km/hr}$
$k = \frac{1600 \text{ veh/hr}}{80 \text{ km/hr}} = 20 \text{ veh/km}$
The density is 20 vehicles per kilometer.

**Question 2:**
Consider a highway segment operating at its capacity. If the capacity is 2200 vehicles/hr and the critical density is 40 vehicles/km, what is the average speed at capacity?

**Answer 2:**
Using the relationship $q = k \times S$:
$2200 \text{ veh/hr} = 40 \text{ veh/km} \times S$
$S = \frac{2200 \text{ veh/hr}}{40 \text{ veh/km}} = 55 \text{ km/hr}$
The average speed at capacity is 55 km/hr.

**Question 3:**
Describe the typical shape of the Flow-Density (q-k) diagram and explain the significance of the peak point and the point of jam density.

**Answer 3:**
The Flow-Density (q-k) diagram is typically a curve that starts at zero flow and zero density, rises to a maximum flow rate (capacity) at a critical density, and then decreases to zero flow at jam density.
*   **Peak Point (Capacity):** Represents the maximum number of vehicles that can pass a point on the road per unit time. Beyond this point, congestion begins to form, and flow decreases despite increasing density.
*   **Jam Density:** Represents the maximum possible density of vehicles on a roadway segment, where traffic is essentially stopped. At jam density, the flow rate is zero.

**Question 4:**
What are the three fundamental parameters of traffic flow, and how are they related?

**Answer 4:**
The three fundamental parameters of traffic flow are:
1.  **Flow Rate (q):** The number of vehicles passing a point per unit time.
2.  **Density (k):** The number of vehicles occupying a given length of roadway at an instant.
3.  **Speed (S):** The average speed of vehicles on a roadway segment.

They are related by the fundamental equation: **$q = k \times S$**.

**Question 5:**
Under what traffic conditions is the "Free Flow" regime typically observed, and what are its characteristics in terms of speed and density?

**Answer 5:**
The Free Flow regime is observed under conditions of **low traffic density**. In this regime:
*   **Speed:** Vehicles travel at their desired speeds, which are generally high and close to the speed limit.
*   **Density:** Density is low, meaning vehicles are spaced far apart.
*   **Flow:** Flow rate is low because there are few vehicles.
*   **Interactions:** Vehicle interactions are minimal, and drivers are not significantly constrained by other vehicles.

---
