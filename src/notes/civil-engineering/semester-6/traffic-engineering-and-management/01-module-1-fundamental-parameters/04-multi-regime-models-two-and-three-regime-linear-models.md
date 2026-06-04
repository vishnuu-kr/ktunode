---
title: "Multi-Regime models – Two and three regime linear models."
subject: "TRAFFIC ENGINEERING AND MANAGEMENT"
module: "Module 1: Fundamental parameters"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba8111db"
status: "completed"
scrapedAt: "2026-05-20T18:56:14.592Z"
---
# Traffic Engineering and Management: Module 1 - Fundamental Parameters

## Topic: Multi-Regime Models – Two and Three Regime Linear Models

This topic delves into how traffic flow behavior can be more realistically represented by models that acknowledge different operational states, or "regimes," of traffic. Unlike simple linear models, multi-regime models break down the relationship between fundamental traffic parameters (density, speed, flow) into segments, each with its own linear characteristic. This approach offers a more nuanced understanding of how traffic behaves under varying conditions, from free-flow to congested states.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

1.  **Define and explain the concept of multi-regime traffic flow models.**
2.  **Describe the characteristics and underlying assumptions of two-regime linear traffic flow models.**
3.  **Illustrate the graphical representation of two-regime linear models and identify key parameters.**
4.  **Discuss the advantages and limitations of two-regime linear models.**
5.  **Describe the characteristics and underlying assumptions of three-regime linear traffic flow models.**
6.  **Illustrate the graphical representation of three-regime linear models and identify key parameters.**
7.  **Compare and contrast two-regime and three-regime linear models.**
8.  **Apply multi-regime models to analyze and understand traffic flow behavior in different scenarios.**

---

### 1. Defining and Explaining Multi-Regime Traffic Flow Models

*   **Concept:** Traffic flow is not static; it changes significantly with increasing density. Simple models that assume a single linear relationship between parameters might not accurately capture this dynamic behavior. Multi-regime models acknowledge that traffic flow can be divided into distinct operational states (regimes), each characterized by different relationships between fundamental traffic variables.
*   **Motivation:**
    *   **Realism:** Real-world traffic flow exhibits non-linear behavior. As density increases, speed decreases, and flow eventually reaches a maximum before declining. Multi-regime models provide a more realistic piecewise linear approximation of this behavior.
    *   **Capturing Congestion:** They are particularly useful for understanding the onset and progression of congestion.
    *   **Predictive Power:** More accurate representations lead to better predictions of traffic conditions.

---

### 2. Two-Regime Linear Traffic Flow Models

*   **Concept:** This is the simplest form of multi-regime modeling. It divides the entire range of traffic density into **two distinct regimes**, typically representing:
    *   **Regime 1: Free Flow (or Uncongested Flow)**
    *   **Regime 2: Congested Flow**

*   **Assumptions:**
    *   **Linearity within each regime:** The relationship between fundamental variables (speed-density, flow-density, flow-speed) is assumed to be linear within each regime.
    *   **Clear transition point:** There is a specific density value where the behavior abruptly changes from free flow to congested flow. This point is crucial.
    *   **Continuity:** While the slope changes, it is usually assumed that the traffic variables (speed, flow) are continuous at the transition point.

*   **Graphical Representation (Speed-Density Relationship):**
    *   **Regime 1 (Free Flow):**
        *   Starts at zero density (speed is maximum, denoted as $V_f$ or $V_{max}$).
        *   As density increases, speed decreases linearly.
        *   Ends at a critical density ($k_c$) where speed is the free-flow speed.
        *   The equation is typically of the form: $V = V_f - m_1 \cdot k$, where $m_1$ is the slope of the speed-density curve in the free-flow regime. $m_1$ is usually negative.
    *   **Regime 2 (Congested Flow):**
        *   Starts at the critical density ($k_c$) where speed is $V_c$ (usually $V_c < V_f$).
        *   As density further increases, speed continues to decrease linearly.
        *   Ends at the jam density ($k_j$) where speed is zero.
        *   The equation is typically of the form: $V = V_c - m_2 \cdot (k - k_c)$, where $m_2$ is the slope of the speed-density curve in the congested regime. $m_2$ is usually negative and often steeper than $m_1$.

*   **Key Parameters:**
    *   **Free-flow speed ($V_f$):** The speed of vehicles when there is no interference from other vehicles.
    *   **Critical density ($k_c$):** The density at which the traffic flow transitions from free flow to congested flow.
    *   **Speed at critical density ($V_c$):** The speed of vehicles at the critical density. Often, $V_c$ is assumed to be some fraction of $V_f$.
    *   **Jam density ($k_j$):** The maximum possible density of vehicles on a roadway, occurring when vehicles are stopped bumper-to-bumper.
    *   **Slopes ($m_1$, $m_2$):** Represent the rate of speed reduction with respect to density in each regime.

*   **Flow-Density Relationship:**
    *   Flow ($q$) is the product of speed ($V$) and density ($k$): $q = V \cdot k$.
    *   In Regime 1, $q = (V_f - m_1 \cdot k) \cdot k = V_f \cdot k - m_1 \cdot k^2$. This is a quadratic relationship.
    *   In Regime 2, $q = (V_c - m_2 \cdot (k - k_c)) \cdot k$. This is also a quadratic relationship.
    *   The maximum flow ($q_{max}$) typically occurs at the critical density ($k_c$) in a two-regime model, so $q_{max} = V_c \cdot k_c$.

*   **Example (Speed-Density):**
    Consider a road segment with:
    *   $V_f = 80$ km/h
    *   $k_c = 20$ veh/km
    *   $V_c = 60$ km/h
    *   $k_j = 120$ veh/km

    **Regime 1 (0 to 20 veh/km):**
    *   We need to find $m_1$. At $k=0$, $V=V_f=80$. At $k=k_c=20$, $V=V_c=60$.
    *   $V = V_f - m_1 \cdot k$
    *   $60 = 80 - m_1 \cdot 20$
    *   $20 \cdot m_1 = 20 \implies m_1 = 1$ km/h per veh/km.
    *   So, $V = 80 - 1 \cdot k$ for $0 \le k \le 20$.

    **Regime 2 (20 to 120 veh/km):**
    *   We need to find $m_2$. At $k=k_c=20$, $V=V_c=60$. At $k=k_j=120$, $V=0$.
    *   $V = V_c - m_2 \cdot (k - k_c)$
    *   $0 = 60 - m_2 \cdot (120 - 20)$
    *   $0 = 60 - m_2 \cdot 100$
    *   $100 \cdot m_2 = 60 \implies m_2 = 0.6$ km/h per veh/km.
    *   So, $V = 60 - 0.6 \cdot (k - 20)$ for $20 \le k \le 120$.

---

### 3. Advantages and Limitations of Two-Regime Linear Models

*   **Advantages:**
    *   **Simplicity:** Easier to understand and implement compared to more complex non-linear models.
    *   **Improved Realism:** Captures the basic transition from free flow to congestion, which is a significant improvement over single-regime models.
    *   **Identifies Key Transition Point:** Clearly defines the critical density, a vital parameter for capacity analysis.

*   **Limitations:**
    *   **Abrupt Transition:** Assumes an instantaneous change in behavior at $k_c$, which is not always realistic. In reality, the transition might be more gradual.
    *   **Linearity Assumption:** The strict linearity within each regime can still be an oversimplification for very complex traffic conditions.
    *   **No Intermediate States:** Doesn't explicitly model intermediate states like "slightly unstable flow" or "synchronized flow" before full breakdown.

---

### 4. Three-Regime Linear Traffic Flow Models

*   **Concept:** To address the limitations of the abrupt transition in two-regime models, three-regime models introduce an **intermediate regime**. This model typically divides traffic density into:
    *   **Regime 1: Free Flow (Uncongested)**
    *   **Regime 2: Intermediate/Transitional Flow (Unstable Flow)**
    *   **Regime 3: Congested Flow (Stop-and-Go)**

*   **Assumptions:**
    *   **Linearity within each regime:** Similar to the two-regime model.
    *   **Two transition points:** Clear points where the behavior changes between regimes.
    *   **Continuity:** Variables are assumed to be continuous at transition points.

*   **Graphical Representation (Speed-Density Relationship):**
    *   **Regime 1 (Free Flow):**
        *   Similar to the two-regime model. Starts at $(0, V_f)$, decreases linearly to $(k_{c1}, V_{c1})$.
        *   Equation: $V = V_f - m_1 \cdot k$ for $0 \le k \le k_{c1}$.
    *   **Regime 2 (Intermediate/Transitional Flow):**
        *   This regime captures the onset of instability. Speed continues to decrease with increasing density, but possibly at a different rate than in free flow.
        *   Starts at $(k_{c1}, V_{c1})$ and ends at $(k_{c2}, V_{c2})$.
        *   Equation: $V = V_{c1} - m_2 \cdot (k - k_{c1})$ for $k_{c1} \le k \le k_{c2}$.
        *   Often, $m_2$ is negative and can be steeper than $m_1$.
    *   **Regime 3 (Congested Flow):**
        *   Represents the fully congested, stop-and-go conditions.
        *   Starts at $(k_{c2}, V_{c2})$ and ends at $(k_j, 0)$.
        *   Equation: $V = V_{c2} - m_3 \cdot (k - k_{c2})$ for $k_{c2} \le k \le k_j$.
        *   $m_3$ is usually negative and often steeper than $m_2$.

*   **Key Parameters:**
    *   **Free-flow speed ($V_f$)**
    *   **First critical density ($k_{c1}$):** Density where transition from free to intermediate flow occurs.
    *   **Speed at first critical density ($V_{c1}$)**
    *   **Second critical density ($k_{c2}$):** Density where transition from intermediate to congested flow occurs.
    *   **Speed at second critical density ($V_{c2}$)**
    *   **Jam density ($k_j$)**
    *   **Slopes ($m_1, m_2, m_3$)**

*   **Flow-Density Relationship:**
    *   Similar to the two-regime model, flow is $q = V \cdot k$.
    *   Each regime will have a quadratic flow-density relationship.
    *   The maximum flow ($q_{max}$) is typically associated with the transition into or within the unstable regime, often at $k_{c1}$ or $k_{c2}$, depending on the specific model formulation. If $q_{max}$ occurs at $k_{c1}$, then $q_{max} = V_{c1} \cdot k_{c1}$.

*   **Example (Speed-Density):**
    Consider a road segment with:
    *   $V_f = 80$ km/h
    *   $k_{c1} = 15$ veh/km (transition to unstable)
    *   $V_{c1} = 70$ km/h
    *   $k_{c2} = 35$ veh/km (transition to congested)
    *   $V_{c2} = 40$ km/h
    *   $k_j = 150$ veh/km

    **Regime 1 (0 to 15 veh/km):**
    *   $V = V_f - m_1 \cdot k$
    *   $70 = 80 - m_1 \cdot 15$
    *   $15 \cdot m_1 = 10 \implies m_1 = 10/15 = 0.67$ km/h per veh/km.
    *   So, $V = 80 - 0.67k$ for $0 \le k \le 15$.

    **Regime 2 (15 to 35 veh/km):**
    *   $V = V_{c1} - m_2 \cdot (k - k_{c1})$
    *   $40 = 70 - m_2 \cdot (35 - 15)$
    *   $40 = 70 - m_2 \cdot 20$
    *   $20 \cdot m_2 = 30 \implies m_2 = 1.5$ km/h per veh/km.
    *   So, $V = 70 - 1.5(k - 15)$ for $15 \le k \le 35$.

    **Regime 3 (35 to 150 veh/km):**
    *   $V = V_{c2} - m_3 \cdot (k - k_{c2})$
    *   $0 = 40 - m_3 \cdot (150 - 35)$
    *   $0 = 40 - m_3 \cdot 115$
    *   $115 \cdot m_3 = 40 \implies m_3 = 40/115 \approx 0.35$ km/h per veh/km.
    *   So, $V = 40 - 0.35(k - 35)$ for $35 \le k \le 150$.

---

### 5. Comparing Two-Regime and Three-Regime Models

| Feature                | Two-Regime Model                                   | Three-Regime Model                                          |
| :--------------------- | :------------------------------------------------- | :---------------------------------------------------------- |
| **Number of Regimes**  | Two (Free Flow, Congested)                         | Three (Free Flow, Intermediate/Unstable, Congested)         |
| **Transition Points**  | One ($k_c$)                                        | Two ($k_{c1}$, $k_{c2}$)                                    |
| **Transition Behavior**| Abrupt change from free to congested               | Gradual transition from free to unstable, then to congested |
| **Realism**            | More realistic than single-regime, but still simplified | More realistic, better captures transition to breakdown     |
| **Complexity**         | Simpler                                            | More complex, more parameters                               |
| **Parameters**         | $V_f, k_c, V_c, k_j, m_1, m_2$                     | $V_f, k_{c1}, V_{c1}, k_{c2}, V_{c2}, k_j, m_1, m_2, m_3$   |
| **Applications**       | Basic capacity analysis, general flow behavior     | Detailed analysis of breakdown, shockwaves, and congestion |

---

### 6. Applying Multi-Regime Models to Analyze Traffic Flow

*   **Capacity Analysis:** Identifying the maximum flow capacity ($q_{max}$) and the density at which it occurs ($k_{cap}$). In simplified multi-regime models, $q_{max}$ is often at $k_c$ (two-regime) or $k_{c1}$ (three-regime).
*   **Understanding Congestion:**
    *   **Onset of Congestion:** The transition points ($k_c$ or $k_{c1}, k_{c2}$) indicate when congestion begins to develop.
    *   **Breakdown:** The point where flow starts to decrease significantly with increasing density.
    *   **Stop-and-Go:** Characterized by the lower speeds and higher densities in the congested regime.
*   **Shockwave Analysis:** Multi-regime models, particularly three-regime models, provide a basis for understanding how congestion propagates (e.g., as a shockwave moving upstream).
*   **Traffic Control:** Insights from these models can inform the design and effectiveness of traffic control strategies like ramp metering, variable speed limits, and incident management.

---

### Key Points to Remember:

*   **Multi-regime models are piecewise linear approximations of non-linear traffic flow behavior.**
*   **The primary goal is to provide a more realistic representation of traffic states.**
*   **Two-regime models divide flow into free and congested states with one transition point.**
*   **Three-regime models add an intermediate/unstable flow regime, providing a more nuanced understanding of congestion development.**
*   **Key parameters include free-flow speed, jam density, critical densities, and the slopes of the speed-density relationships in each regime.**
*   **The choice between models depends on the desired level of detail and the specific application.**

---

### Practice Questions and Exercises:

**Question 1:**
Explain the fundamental difference between a two-regime and a three-regime linear traffic flow model. What advantage does the three-regime model offer?

**Answer 1:**
The fundamental difference lies in the number of distinct traffic behavior segments. A two-regime model divides traffic into "free flow" and "congested flow" with a single transition point. A three-regime model further subdivides this into "free flow," "intermediate/unstable flow," and "congested flow," with two transition points. The advantage of the three-regime model is its ability to capture the gradual breakdown of traffic flow and the onset of instability more realistically, rather than assuming an abrupt shift from free to congested flow.

**Question 2:**
A researcher has collected data and determined the following parameters for a two-regime linear speed-density model:
*   Free-flow speed ($V_f$) = 90 km/h
*   Critical density ($k_c$) = 25 veh/km
*   Speed at critical density ($V_c$) = 70 km/h
*   Jam density ($k_j$) = 160 veh/km

a) Determine the equation for the speed-density relationship in the free-flow regime.
b) Determine the equation for the speed-density relationship in the congested regime.
c) Calculate the maximum flow rate ($q_{max}$) and the density at which it occurs.

**Answer 2:**

**a) Free-flow regime (0 to 25 veh/km):**
The equation is $V = V_f - m_1 \cdot k$.
We know $V_f = 90$ km/h.
At $k = k_c = 25$ veh/km, $V = V_c = 70$ km/h.
$70 = 90 - m_1 \cdot 25$
$25 \cdot m_1 = 90 - 70 = 20$
$m_1 = 20 / 25 = 0.8$ km/h per veh/km.
**Equation for free-flow regime: $V = 90 - 0.8k$**

**b) Congested regime (25 to 160 veh/km):**
The equation is $V = V_c - m_2 \cdot (k - k_c)$.
We know $V_c = 70$ km/h, $k_c = 25$ veh/km.
At $k = k_j = 160$ veh/km, $V = 0$ km/h.
$0 = 70 - m_2 \cdot (160 - 25)$
$0 = 70 - m_2 \cdot 135$
$135 \cdot m_2 = 70$
$m_2 = 70 / 135 \approx 0.52$ km/h per veh/km.
**Equation for congested regime: $V = 70 - 0.52(k - 25)$**

**c) Maximum flow rate:**
In a two-regime model, maximum flow typically occurs at the critical density ($k_c$).
$q_{max} = V_c \cdot k_c$
$q_{max} = 70 \text{ km/h} \cdot 25 \text{ veh/km}$
$q_{max} = 1750 \text{ veh/h}$

**Maximum flow rate is 1750 veh/h, occurring at a density of 25 veh/km.**

**Question 3:**
What is the primary limitation of assuming a linear relationship within each regime of a multi-regime model?

**Answer 3:**
The primary limitation is that even within a defined regime (e.g., free flow), the actual relationship between speed, density, and flow might not be perfectly linear. Real-world traffic behavior can be more complex, with subtle non-linearities that a piecewise linear model might not fully capture. For example, the rate at which speed drops with density might not be constant even in ostensibly "free flow" conditions, especially as vehicles start to interact more closely.

---
