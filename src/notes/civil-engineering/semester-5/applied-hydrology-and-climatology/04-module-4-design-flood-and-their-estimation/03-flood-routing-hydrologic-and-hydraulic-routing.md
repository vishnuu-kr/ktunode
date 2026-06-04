---
title: "Flood Routing-Hydrologic and Hydraulic routing"
subject: "APPLIED HYDROLOGY AND CLIMATOLOGY"
module: "Module 4: Design flood and their Estimation "
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810f0e"
status: "completed"
scrapedAt: "2026-05-20T18:47:36.026Z"
---
# APPLIED HYDROLOGY AND CLIMATOLOGY

## Module 4: Design Flood and Their Estimation

### Topic: Flood Routing – Hydrologic and Hydraulic Routing

---

### 1. Introduction to Flood Routing

Flood routing is the process of determining the time variation of a flood wave as it travels downstream through a river channel, reservoir, or other hydraulic structure. It is a crucial tool for:

*   **Predicting flood levels and discharges downstream:** Essential for flood forecasting and warning systems.
*   **Designing hydraulic structures:** Culverts, bridges, dams, spillways, and levees need to withstand or manage flood flows.
*   **Managing reservoirs:** Optimizing water release for power generation, irrigation, and flood control.
*   **Understanding flood wave attenuation and distortion:** How the flood hydrograph changes as it moves downstream.

**Key Concept:** Flood routing essentially involves solving the equations of motion and continuity for a given reach or structure.

---

### 2. Types of Flood Routing Methods

Flood routing methods can be broadly categorized into two main types:

*   **Hydrologic Routing:** These methods are based on continuity of flow and empirical relationships between inflow, outflow, and storage. They are generally simpler and require less detailed data.
*   **Hydraulic Routing:** These methods are based on the fundamental principles of fluid mechanics, specifically the Saint-Venant equations (or simplified versions). They provide a more detailed and accurate representation of the flood wave's behavior.

---

### 3. Hydrologic Routing

#### 3.1. Principle: Continuity Equation

The fundamental principle of hydrologic routing is the **continuity equation**:

$$
\text{Rate of change of storage} = \text{Rate of inflow} - \text{Rate of outflow}
$$

In differential form:

$$
\frac{dS}{dt} = Q_{in}(t) - Q_{out}(t)
$$

Where:
*   $S(t)$ = Storage in the reach/reservoir at time $t$
*   $Q_{in}(t)$ = Inflow discharge at time $t$
*   $Q_{out}(t)$ = Outflow discharge at time $t$

#### 3.2. Muskingum Method

The Muskingum method is a widely used hydrologic routing technique that accounts for both storage and the wave's travel time. It assumes that the storage in a channel reach can be expressed as a linear combination of inflow and outflow:

$$
S(t) = K \left[ x Q_{in}(t) + (1-x) Q_{out}(t) \right]
$$

Where:
*   $K$ = Storage time constant (related to the travel time of the flood wave through the reach). Units: time (e.g., hours).
*   $x$ = Weighting factor for inflow and outflow (dimensionless, $0 \le x \le 0.5$).
    *   $x = 0$: Pure prism storage (storage is only a function of outflow, e.g., reservoir).
    *   $x = 0.5$: Wedge and prism storage (storage is equally influenced by inflow and outflow, typical for natural channels).

**Derivation and Practical Application:**

The continuity equation is discretized over small time intervals $\Delta t$. For a time interval from $t$ to $t + \Delta t$:

$$
\frac{S_{t+\Delta t} - S_t}{\Delta t} = \frac{Q_{in, t+\Delta t} + Q_{in, t}}{2} - \frac{Q_{out, t+\Delta t} + Q_{out, t}}{2}
$$

Using the Muskingum storage equation:

$$
S_t = K [x Q_{in, t} + (1-x) Q_{out, t}]
$$
$$
S_{t+\Delta t} = K [x Q_{in, t+\Delta t} + (1-x) Q_{out, t+\Delta t}]
$$

Substituting these into the discretized continuity equation and rearranging, we get the Muskingum routing equation:

$$
Q_{out, t+\Delta t} = C_1 Q_{in, t+\Delta t} + C_2 Q_{in, t} + C_3 Q_{out, t}
$$

Where the coefficients are:

$$
C_1 = \frac{\Delta t - 2Kx}{2K(1-x) + \Delta t}
$$

$$
C_2 = \frac{\Delta t + 2Kx}{2K(1-x) + \Delta t}
$$

$$
C_3 = \frac{2K(1-x) - \Delta t}{2K(1-x) + \Delta t}
$$

**Important Note on $\Delta t$ and $K$:** For stable and accurate results, $\Delta t$ should typically be less than or equal to $2K$. Commonly, $\Delta t \approx K$.

**Procedure for Muskingum Routing:**

1.  **Determine $K$ and $x$:** These parameters are usually obtained by matching historical flood events or through calibration. $K$ is often estimated as the travel time of the center of mass of the flood wave.
2.  **Establish Initial Conditions:** $Q_{out, t}$ for the first time step (usually pre-flood flow).
3.  **Iterative Calculation:** For each time step:
    *   Calculate $Q_{out, t+\Delta t}$ using the routing equation.
    *   Use the calculated $Q_{out, t+\Delta t}$ as the outflow for the next time step ($Q_{out, t}$ in the subsequent calculation).
    *   Ensure the inflow hydrograph is provided for each time step.

**Example:**

A reach has the following parameters: $K = 6$ hours, $x = 0.2$. The time interval for routing is $\Delta t = 3$ hours.
The inflow hydrograph is:
Time (hr) | Inflow ($Q_{in}$) (m³/s)
------- | --------
0       | 100
3       | 200
6       | 500
9       | 800
12      | 600
15      | 400
18      | 200

**Pre-flood outflow:** $Q_{out, 0} = 100$ m³/s.

**Calculate coefficients:**
$2K(1-x) = 2 \times 6 \times (1 - 0.2) = 12 \times 0.8 = 9.6$ hours
$2Kx = 2 \times 6 \times 0.2 = 2.4$ hours

$C_1 = \frac{3 - 2.4}{9.6 + 3} = \frac{0.6}{12.6} \approx 0.0476$
$C_2 = \frac{3 + 2.4}{9.6 + 3} = \frac{5.4}{12.6} \approx 0.4286$
$C_3 = \frac{9.6 - 3}{9.6 + 3} = \frac{6.6}{12.6} \approx 0.5238$

Check: $C_1 + C_2 + C_3 = 0.0476 + 0.4286 + 0.5238 = 1.0000$ (approximately due to rounding).

**Routing Calculation:**

$Q_{out, t+\Delta t} = 0.0476 Q_{in, t+\Delta t} + 0.4286 Q_{in, t} + 0.5238 Q_{out, t}$

*   **t=0 to t=3:**
    $Q_{out, 3} = 0.0476 \times 200 + 0.4286 \times 100 + 0.5238 \times 100$
    $Q_{out, 3} = 9.52 + 42.86 + 52.38 = 104.76$ m³/s

*   **t=3 to t=6:**
    $Q_{out, 6} = 0.0476 \times 500 + 0.4286 \times 200 + 0.5238 \times 104.76$
    $Q_{out, 6} = 23.80 + 85.72 + 54.90 = 164.42$ m³/s

...and so on.

#### 3.3. Reservoir Routing (Pondage Routing)

This is a simpler form of hydrologic routing where storage is solely a function of outflow. This is typical for reservoirs with a fixed spillway crest or gate operation.

$$
S(t) = f(Q_{out}(t))
$$

The continuity equation is applied:

$$
\frac{dS}{dt} = Q_{in}(t) - Q_{out}(t)
$$

**Practical Application (Graphical Method):**

1.  **Storage-Outflow Relationship:** Develop a relationship between storage ($S$) and outflow ($Q_{out}$), usually from reservoir geometry and gate/spillway characteristics.
2.  **Storage-Inflow Relationship:** Similarly, develop a relationship between storage ($S$) and inflow ($Q_{in}$), assuming a certain outflow (e.g., the outflow at the beginning of the time step).
3.  **Plotting:** Plot both $S$ vs. $Q_{out}$ and $S$ vs. $Q_{in}$ (for a specific $Q_{out}$) on the same graph.
4.  **Routing:**
    *   Start with known initial storage and outflow.
    *   For a given time interval $\Delta t$:
        *   Calculate the change in storage $\Delta S = (Q_{in, avg} - Q_{out, avg}) \Delta t$.
        *   Update the storage $S_{new} = S_{old} + \Delta S$.
        *   From the $S$ vs. $Q_{out}$ curve, find the new outflow $Q_{out, new}$ corresponding to $S_{new}$.
        *   Alternatively, using graphical methods, you can determine the new outflow by finding the intersection of curves.

**Simplified Numerical Method for Reservoir Routing:**

Using the average inflow and outflow over a time step $\Delta t$:

$$
\frac{S_{t+\Delta t} - S_t}{\Delta t} = \frac{Q_{in, t+\Delta t} + Q_{in, t}}{2} - \frac{Q_{out, t+\Delta t} + Q_{out, t}}{2}
$$

Rearranging:

$$
S_{t+\Delta t} + \frac{\Delta t}{2} Q_{out, t+\Delta t} = S_t - \frac{\Delta t}{2} Q_{out, t} + \Delta t \frac{Q_{in, t+\Delta t} + Q_{in, t}}{2}
$$

Let $A = S_t - \frac{\Delta t}{2} Q_{out, t}$ and $B = S_{t+\Delta t} + \frac{\Delta t}{2} Q_{out, t+\Delta t}$.
The equation becomes: $B = A + \Delta t \times (\text{average inflow over the step})$.

**Procedure:**

1.  **Initial Conditions:** $S_0$ and $Q_{out, 0}$.
2.  **For each time step:**
    *   Calculate $A = S_t - \frac{\Delta t}{2} Q_{out, t}$.
    *   Calculate the average inflow over the step: $Q_{in, avg} = \frac{Q_{in, t+\Delta t} + Q_{in, t}}{2}$.
    *   Determine a trial $Q_{out, t+\Delta t}$.
    *   Calculate $S_{t+\Delta t}$ from the $S$ vs. $Q_{out}$ relationship using the trial $Q_{out, t+\Delta t}$.
    *   Calculate $B = S_{t+\Delta t} + \frac{\Delta t}{2} Q_{out, t+\Delta t}$.
    *   Compare $B$ with $A + \Delta t \times Q_{in, avg}$.
    *   Adjust the trial $Q_{out, t+\Delta t}$ and repeat until $B \approx A + \Delta t \times Q_{in, avg}$. This often involves trial and error or interpolation.

---

### 4. Hydraulic Routing

#### 4.1. Principle: Saint-Venant Equations

Hydraulic routing is based on the fundamental equations of unsteady flow in open channels, derived from conservation of mass and momentum. These are known as the **Saint-Venant equations**:

*   **Continuity Equation:**
    $$
    \frac{\partial A}{\partial t} + \frac{\partial (AU)}{\partial x} = q_l
    $$
    Where:
    *   $A$ = Cross-sectional area of flow
    *   $U$ = Average velocity
    *   $x$ = Longitudinal distance
    *   $t$ = Time
    *   $q_l$ = Lateral inflow per unit length

*   **Momentum Equation:**
    $$
    \frac{\partial U}{\partial t} + U \frac{\partial U}{\partial x} + g \frac{\partial h}{\partial x} + g(S_f - S_0) = 0
    $$
    Where:
    *   $h$ = Flow depth
    *   $g$ = Acceleration due to gravity
    *   $S_f$ = Friction slope (e.g., calculated using Manning's equation)
    *   $S_0$ = Bed slope

**Note:** $S_f = \frac{n^2 U |U|}{R^{4/3}}$, where $n$ is Manning's roughness coefficient and $R$ is the hydraulic radius.

These are a system of two partial differential equations (PDEs) that describe the space-time variation of flow depth ($h$) and velocity ($U$) in an open channel.

#### 4.2. Simplified Hydraulic Routing Methods

Solving the full Saint-Venant equations is complex and requires advanced numerical techniques. Several simplified or approximate methods are used:

*   **Kinematic Wave Routing:**
    *   **Assumption:** Neglect inertial and viscous terms in the momentum equation. The momentum equation is simplified to: $g \frac{\partial h}{\partial x} + g(S_f - S_0) \approx 0$, which means $S_f = S_0$.
    *   **Relationship:** This leads to a direct relationship between discharge ($Q$) and flow area ($A$) or depth ($h$) and slope: $Q = C \sqrt{A} \sqrt{S_0}$, where $C$ is related to Manning's $n$.
    *   **Advantages:** Simpler to solve, captures the essential behavior of flood waves in wide, gently sloping channels.
    *   **Limitations:** Does not account for wave celerity changes, attenuation, or backwater effects.

*   **Diffusion Wave Routing:**
    *   **Assumption:** Neglect the $\frac{\partial U}{\partial t}$ and $U \frac{\partial U}{\partial x}$ terms in the momentum equation. The equation becomes: $g \frac{\partial h}{\partial x} + g(S_f - S_0) \approx 0$.
    *   **Relationship:** Includes the effect of friction slope ($S_f$) and bed slope ($S_0$), allowing for attenuation and shape changes of the flood wave.
    *   **Advantages:** Captures wave attenuation and distortion better than kinematic wave.
    *   **Limitations:** Still neglects some inertial effects.

*   **Dynamic Wave Routing:**
    *   **Assumption:** Solves the full Saint-Venant equations.
    *   **Advantages:** Most accurate, captures all physical phenomena including backwater effects, surge propagation, etc.
    *   **Disadvantages:** Requires complex numerical schemes (e.g., finite difference, finite element methods) and significant computational resources.

#### 4.3. Numerical Methods for Hydraulic Routing

*   **Finite Difference Method (e.g., Preissmann Scheme):** Discretizes the Saint-Venant equations in space and time, approximating derivatives with differences. Several schemes exist (e.g., explicit, implicit, characteristic) with varying stability and accuracy.
*   **Finite Element Method:** Divides the domain into smaller elements, applying the equations within each element.
*   **Finite Volume Method:** A robust method for conservation laws, ensuring that quantities like mass are conserved over control volumes.

**Software Implementation:**
Software like HEC-RAS (Hydrologic Engineering Center's River Analysis System) and MIKE 11 are commonly used to perform hydraulic routing based on the Saint-Venant equations. These software packages require detailed geometric data of the channel, boundary conditions (inflow hydrograph), and initial conditions.

---

### 5. Comparison of Hydrologic and Hydraulic Routing

| Feature              | Hydrologic Routing (e.g., Muskingum)                                 | Hydraulic Routing (e.g., Saint-Venant)                                           |
| :------------------- | :--------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| **Underlying Basis** | Continuity equation + Empirical Storage-Outflow relationships (e.g., $S = K(xQ_{in} + (1-x)Q_{out})$) | Continuity and Momentum equations (Saint-Venant equations)                     |
| **Complexity**       | Relatively simple, easy to implement.                                  | Complex, requires advanced numerical methods.                                    |
| **Data Requirements**| Inflow hydrograph, channel reach characteristics ($K, x$ or $S-Q$ curves). | Detailed channel geometry, bed slope, roughness, inflow hydrograph, boundary conditions. |
| **Accuracy**         | Good for general flood forecasting and preliminary design.             | High accuracy, captures detailed wave dynamics, backwater effects.                 |
| **Phenomena Captured**| Wave translation and attenuation.                                      | Wave translation, attenuation, backwater, surges, reflections, etc.              |
| **Applications**     | Flood forecasting, reservoir regulation, preliminary design.           | Detailed flood analysis, dam break analysis, bridge/culvert design, flood mitigation studies. |

---

### 6. Key Concepts and Definitions Recap

*   **Flood Routing:** Determining the time variation of a flood wave as it moves through a system.
*   **Continuity Equation:** $\frac{dS}{dt} = Q_{in} - Q_{out}$. The fundamental principle for all routing methods.
*   **Muskingum Method:** A hydrologic routing method that uses $S = K[x Q_{in} + (1-x) Q_{out}]$ to relate storage to inflow and outflow.
*   **Reservoir Routing:** Hydrologic routing where storage is a function of outflow only ($S = f(Q_{out})$).
*   **Saint-Venant Equations:** The governing partial differential equations for unsteady flow in open channels, combining continuity and momentum.
*   **Kinematic Wave:** Simplification of Saint-Venant equations where friction slope equals bed slope ($S_f = S_0$).
*   **Diffusion Wave:** Simplification where inertial terms are neglected.
*   **Dynamic Wave:** Solution of the full Saint-Venant equations.
*   **$K$ (Storage Time Constant):** Parameter in Muskingum method related to travel time.
*   **$x$ (Weighting Factor):** Parameter in Muskingum method, indicates influence of inflow vs. outflow on storage.

---

### 7. Practice Questions

**Question 1 (Muskingum Routing):**
A river reach is to be routed using the Muskingum method with $K = 10$ hours and $x = 0.25$. The time interval for routing is $\Delta t = 5$ hours. The inflow hydrograph is given below, and the initial outflow is $Q_{out, 0} = 50 \, \text{m}^3/\text{s}$. Calculate the outflow at $t = 10$ hours.

| Time (hr) | Inflow ($Q_{in}$) (m³/s) |
| :-------- | :----------------------- |
| 0         | 50                       |
| 5         | 150                      |
| 10        | 400                      |
| 15        | 300                      |
| 20        | 100                      |

**Question 2 (Conceptual):**
Explain the primary difference between hydrologic and hydraulic flood routing methods. Under what circumstances would you prefer one over the other?

**Question 3 (Reservoir Routing - Conceptual):**
Describe the steps involved in routing a flood through a reservoir using a graphical method, assuming you have the reservoir's stage-storage and stage-discharge relationships.

---

### 8. Answers to Practice Questions

**Answer 1 (Muskingum Routing):**

**1. Calculate Coefficients:**
*   $K = 10$ hr, $x = 0.25$, $\Delta t = 5$ hr
*   $2K(1-x) = 2 \times 10 \times (1 - 0.25) = 20 \times 0.75 = 15$ hr
*   $2Kx = 2 \times 10 \times 0.25 = 5$ hr
*   Denominator: $2K(1-x) + \Delta t = 15 + 5 = 20$ hr
*   $C_1 = \frac{\Delta t - 2Kx}{\text{Denominator}} = \frac{5 - 5}{20} = \frac{0}{20} = 0$
*   $C_2 = \frac{\Delta t + 2Kx}{\text{Denominator}} = \frac{5 + 5}{20} = \frac{10}{20} = 0.5$
*   $C_3 = \frac{2K(1-x) - \Delta t}{\text{Denominator}} = \frac{15 - 5}{20} = \frac{10}{20} = 0.5$
*   Check: $C_1 + C_2 + C_3 = 0 + 0.5 + 0.5 = 1.0$.

**2. Routing Equation:**
$Q_{out, t+\Delta t} = 0 \cdot Q_{in, t+\Delta t} + 0.5 \cdot Q_{in, t} + 0.5 \cdot Q_{out, t}$
$Q_{out, t+\Delta t} = 0.5 (Q_{in, t} + Q_{out, t})$

**3. Routing Calculation:**
*   **t=0 to t=5:**
    *   $Q_{in, 0} = 50$, $Q_{out, 0} = 50$
    *   $Q_{in, 5} = 150$
    *   $Q_{out, 5} = 0.5 (Q_{in, 0} + Q_{out, 0}) = 0.5 (50 + 50) = 0.5 \times 100 = 50 \, \text{m}^3/\text{s}$

*   **t=5 to t=10:**
    *   $Q_{in, 5} = 150$, $Q_{out, 5} = 50$
    *   $Q_{in, 10} = 400$
    *   $Q_{out, 10} = 0.5 (Q_{in, 5} + Q_{out, 5}) = 0.5 (150 + 50) = 0.5 \times 200 = 100 \, \text{m}^3/\text{s}$

**Answer:** The outflow at $t = 10$ hours is $100 \, \text{m}^3/\text{s}$.

**Answer 2 (Conceptual):**
*   **Hydrologic Routing:** Relies on the continuity equation and empirical relationships between inflow, outflow, and storage (e.g., Muskingum, reservoir routing). It simplifies the physics of flow.
*   **Hydraulic Routing:** Solves the fundamental equations of fluid mechanics (Saint-Venant equations) to describe the flow dynamics in detail.
*   **Preference:**
    *   **Hydrologic routing** is preferred when detailed channel geometry is unavailable, for quick estimates, or when phenomena like backwater are less critical (e.g., general flood forecasting).
    *   **Hydraulic routing** is preferred for detailed analysis, design of hydraulic structures, understanding complex flow behaviors (e.g., dam breaks, urban flooding), and when high accuracy is required.

**Answer 3 (Reservoir Routing - Conceptual):**
1.  **Data Preparation:** Obtain the reservoir's stage-storage relationship (e.g., $S$ vs. $h$) and stage-discharge relationship (e.g., $Q_{out}$ vs. $h$) for the spillway/gates.
2.  **Initial Conditions:** Identify the initial water surface elevation (stage) and outflow discharge at the beginning of the flood. From the initial stage, determine the initial storage ($S_0$) using the stage-storage curve.
3.  **Time Discretization:** Divide the flood event into small time steps ($\Delta t$).
4.  **Iterative Calculation:** For each time step ($t$ to $t+\Delta t$):
    *   Calculate the average inflow over the interval: $Q_{in, avg} = (Q_{in, t} + Q_{in, t+\Delta t})/2$.
    *   Calculate the change in storage required: $\Delta S = (Q_{in, avg} - Q_{out, avg}) \Delta t$. Since $Q_{out, avg}$ is unknown, we use a trial approach.
    *   **Trial Outflow:** Assume a trial outflow $Q_{out, t+\Delta t}$ for the end of the interval.
    *   **Corresponding Storage:** From the stage-discharge curve, find the stage corresponding to the trial $Q_{out, t+\Delta t}$. Then, use the stage-storage curve to find the storage $S_{t+\Delta t}$ corresponding to this stage.
    *   **Calculate Change in Storage:** $\Delta S_{calculated} = S_{t+\Delta t} - S_t$.
    *   **Check Continuity:** Compare the calculated $\Delta S_{calculated}$ with the required $\Delta S$ from step 4a.
    *   **Adjust and Repeat:** If $\Delta S_{calculated}$ is not equal to $\Delta S$ (within a tolerance), adjust the trial $Q_{out, t+\Delta t}$ and repeat steps 4b-4e until continuity is satisfied. This can be done graphically by plotting $S_{t+\Delta t}$ against trial $Q_{out, t+\Delta t}$ and finding where it intersects the required $S_{t+\Delta t}$ (which is $S_t + \Delta S$).

---

### 9. Important Points to Remember

*   **Continuity is King:** All routing methods are fundamentally based on the conservation of mass.
*   **Trade-off between Simplicity and Accuracy:** Hydrologic methods are simpler but less accurate than hydraulic methods.
*   **Parameter Calibration:** $K$ and $x$ in the Muskingum method are often determined by calibrating the model with observed historical flood data.
*   **Muskingum Stability:** Choose $\Delta t$ appropriately relative to $K$ (typically $\Delta t \le 2K$) to ensure numerical stability.
*   **Hydraulic Routing Complexity:** Solving the full Saint-Venant equations is numerically intensive and requires specialized software.
*   **Data Quality is Crucial:** Accurate inflow hydrographs and reliable geometric/hydraulic data are essential for any routing method.
*   **Purpose Dictates Method:** The choice of routing method depends on the specific objective of the analysis, available data, and required accuracy.
