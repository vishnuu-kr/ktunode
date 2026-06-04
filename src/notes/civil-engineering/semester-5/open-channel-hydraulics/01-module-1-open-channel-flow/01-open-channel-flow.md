---
title: "Open channel flow"
subject: "OPEN CHANNEL HYDRAULICS"
module: "Module 1: Open channel flow"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810ea3"
status: "completed"
scrapedAt: "2026-05-20T18:49:43.603Z"
---
# OPEN CHANNEL HYDRAULICS

## Module 1: Open Channel Flow

---

### Topic: Open Channel Flow

**Description:** This topic provides a fundamental understanding of open channel flow, differentiating it from pipe flow and introducing key concepts and parameters used to describe and analyze it.

---

### Learning Outcomes:

*   **LO1: Differentiate between open channel flow and pipe flow.**
*   **LO2: Identify the key characteristics of open channel flow.**
*   **LO3: Understand the fundamental principles governing open channel flow.**
*   **LO4: Define and explain key parameters used in open channel flow analysis (e.g., flow area, wetted perimeter, hydraulic radius, Froude number).**
*   **LO5: Classify open channel flow based on different criteria.**

---

### 1. Introduction to Open Channel Flow

#### 1.1 Definition of Open Channel Flow

*   **Open Channel Flow:** A type of fluid flow where the free surface of the liquid is exposed to the atmosphere. This exposure to atmospheric pressure is the defining characteristic.

#### 1.2 Open Channel vs. Pipe Flow

| Feature         | Open Channel Flow                                | Pipe Flow                                         |
| :-------------- | :----------------------------------------------- | :------------------------------------------------ |
| **Free Surface** | **Present and exposed to atmosphere.**           | **Absent; the pipe is completely full of fluid.** |
| **Pressure**    | **Atmospheric pressure at the free surface.**    | **Pressure is the dominant driving force.**       |
| **Cross-section**| Can be of any shape (natural, artificial).      | Typically circular, but can be other shapes.      |
| **Driving Force**| Gravity (slope of the channel bed).              | Pressure difference and gravity.                  |
| **Examples**    | Rivers, canals, streams, sewers, irrigation channels. | Water supply pipes, pipelines carrying oil.     |

#### 1.3 Key Characteristics of Open Channel Flow

*   **Free Surface:** The upper surface of the fluid is in contact with the atmosphere.
*   **Gravity Driven:** Flow is primarily driven by the gravitational force acting on the fluid, which is proportional to the slope of the channel bed.
*   **Variable Depth:** The depth of flow can change along the length of the channel and also across the width.
*   **Atmospheric Pressure:** The pressure at the free surface is constant and equal to atmospheric pressure.
*   **No Pressure Boundary:** Unlike pipe flow, there is no pressurized boundary.

---

### 2. Fundamental Principles Governing Open Channel Flow

*   **Conservation of Mass (Continuity Equation):**
    *   For steady flow, the rate of mass entering a control volume must equal the rate of mass leaving it.
    *   In terms of volume flow rate ($Q$): $Q = A \times V$, where $A$ is the flow area and $V$ is the average velocity.
    *   For steady flow in a channel: $A_1 V_1 = A_2 V_2$ (where subscripts 1 and 2 refer to different sections of the channel).

*   **Conservation of Momentum:**
    *   Relates the forces acting on a fluid mass to its change in momentum.
    *   Crucial for analyzing transitions in flow depth and velocity (e.g., hydraulic jump).

*   **Conservation of Energy (Bernoulli's Equation - with modifications):**
    *   While the basic Bernoulli's equation applies to inviscid flow, for open channels, it's often modified to account for energy losses due to friction and other factors.
    *   **Specific Energy (E):** The sum of the flow depth ($y$) and the velocity head ($V^2 / 2g$).
        *   $E = y + \frac{V^2}{2g}$
    *   Specific energy is a crucial concept for understanding flow behavior, especially in relation to critical flow.

---

### 3. Key Parameters in Open Channel Flow Analysis

#### 3.1 Flow Area (A)

*   **Definition:** The cross-sectional area of the flow perpendicular to the direction of flow.
*   **Calculation:** Depends on the shape of the channel and the flow depth.
    *   **Rectangular Channel:** $A = B \times y$ (where $B$ is the channel width and $y$ is the flow depth).
    *   **Trapezoidal Channel:** $A = (B + Z y) y$ (where $B$ is the bottom width and $Z$ is the side slope, defined as horizontal distance per unit vertical distance).
    *   **Circular Channel:** (More complex, involving trigonometric functions).

#### 3.2 Wetted Perimeter (P)

*   **Definition:** The length of the channel boundary that is in contact with the flowing fluid.
*   **Calculation:** Depends on the shape of the channel and the flow depth.
    *   **Rectangular Channel:** $P = B + 2y$.
    *   **Trapezoidal Channel:** $P = B + 2y\sqrt{1 + Z^2}$.
    *   **Circular Channel:** (More complex, involving trigonometric functions).

#### 3.3 Hydraulic Radius (R_h or R)

*   **Definition:** The ratio of the flow area to the wetted perimeter. It's a measure of the "efficiency" of the channel's cross-section in carrying flow. A larger hydraulic radius generally indicates less resistance to flow.
*   **Formula:** $R_h = \frac{A}{P}$
*   **Significance:** Used in friction loss calculations (e.g., Manning's equation).

#### 3.4 Hydraulic Depth (D)

*   **Definition:** The ratio of the flow area to the top width of the free surface ($T$).
*   **Formula:** $D = \frac{A}{T}$
*   **Significance:** Used in the calculation of the Froude number.

#### 3.5 Top Width (T)

*   **Definition:** The width of the free surface of the flow.
*   **Calculation:** Depends on the shape of the channel and the flow depth.
    *   **Rectangular Channel:** $T = B$.
    *   **Trapezoidal Channel:** $T = B + 2Zy$.
    *   **Circular Channel:** (More complex, involves trigonometric functions).

#### 3.6 Froude Number (Fr)

*   **Definition:** A dimensionless number that characterizes the flow regime in open channels. It represents the ratio of the flow velocity to the wave celerity (the speed at which a small surface disturbance propagates).
*   **Formula:** $Fr = \frac{V}{\sqrt{gD}}$ (where $g$ is acceleration due to gravity and $D$ is the hydraulic depth).
*   **Significance:** Crucial for classifying flow as subcritical, critical, or supercritical.

---

### 4. Classification of Open Channel Flow

Open channel flow can be classified based on several criteria:

#### 4.1 Based on the Froude Number (Flow Regime)

*   **Subcritical Flow (Tranquil Flow):**
    *   $Fr < 1$
    *   $V < \sqrt{gD}$
    *   The flow velocity is less than the wave celerity.
    *   Disturbances can propagate upstream, influencing the flow profile.
    *   Flow is sub-critical.
    *   Energy is usually greater than the minimum required for a given discharge.

*   **Critical Flow:**
    *   $Fr = 1$
    *   $V = \sqrt{gD}$
    *   The flow velocity equals the wave celerity.
    *   This is a state of minimum specific energy for a given discharge.
    *   Occurs at control sections like weirs, gates, and channel constrictions.

*   **Supercritical Flow (Rapid Flow):**
    *   $Fr > 1$
    *   $V > \sqrt{gD}$
    *   The flow velocity is greater than the wave celerity.
    *   Disturbances cannot propagate upstream.
    *   Flow is super-critical.
    *   Energy is greater than the minimum required for a given discharge.

**Important Point to Remember:** The Froude number is the *most important* parameter for classifying the flow regime in open channels.

#### 4.2 Based on Depth Variation

*   **Uniform Flow:**
    *   The flow depth, velocity, and cross-sectional area are constant along the length of the channel.
    *   The channel bed slope, water surface slope, and energy line slope are all parallel and equal.
    *   $dy/dx = 0$.
    *   Typically occurs in long, straight channels with constant cross-section and slope.

*   **Non-uniform Flow:**
    *   The flow depth, velocity, and cross-sectional area vary along the length of the channel.
    *   The water surface slope, energy line slope, and channel bed slope are not parallel.
    *   **Gradually Varied Flow (GVF):**
        *   Depth changes slowly along the channel.
        *   The energy equation can be used with integration.
        *   Examples: Flow approaching a weir or a change in slope.
    *   **Rapidly Varied Flow (RVF):**
        *   Depth changes abruptly over a short distance.
        *   Momentum equation is often required for analysis.
        *   Examples: Hydraulic jump, flow over a spillway crest.

#### 4.3 Based on Time Variation

*   **Steady Flow:**
    *   Flow properties (depth, velocity, discharge) at any point in the channel do not change with time.
    *   $∂y/∂t = 0$, $∂V/∂t = 0$.

*   **Unsteady Flow:**
    *   Flow properties at any point in the channel change with time.
    *   Examples: Floods, tidal flows, dam break analysis.

#### 4.4 Based on Uniformity of Cross-section

*   **Prismatic Channel:**
    *   A channel with a constant cross-sectional shape and a constant bottom slope along its length.
    *   Examples: Concrete lined canals, rectangular concrete channels.

*   **Non-prismatic Channel:**
    *   A channel where the cross-sectional shape or bottom slope (or both) changes along its length.
    *   Examples: Natural river channels, channels with varying lining.

---

### 5. Practice Questions and Exercises

**Question 1:** A rectangular channel is 2 meters wide and the flow depth is 1.5 meters. The average flow velocity is 2 m/s. Calculate:
    a) The flow area (A)
    b) The wetted perimeter (P)
    c) The hydraulic radius (R_h)
    d) The top width (T)
    e) The hydraulic depth (D)
    f) The Froude number (Fr)

**Answer 1:**
Given: Width $B = 2$ m, Depth $y = 1.5$ m, Velocity $V = 2$ m/s, $g = 9.81$ m/s².

a) **Flow Area (A):**
   $A = B \times y = 2 \text{ m} \times 1.5 \text{ m} = 3.0 \text{ m}^2$

b) **Wetted Perimeter (P):**
   $P = B + 2y = 2 \text{ m} + 2 \times 1.5 \text{ m} = 2 \text{ m} + 3 \text{ m} = 5.0 \text{ m}$

c) **Hydraulic Radius (R_h):**
   $R_h = \frac{A}{P} = \frac{3.0 \text{ m}^2}{5.0 \text{ m}} = 0.6 \text{ m}$

d) **Top Width (T):**
   $T = B = 2.0 \text{ m}$

e) **Hydraulic Depth (D):**
   $D = \frac{A}{T} = \frac{3.0 \text{ m}^2}{2.0 \text{ m}} = 1.5 \text{ m}$

f) **Froude Number (Fr):**
   $Fr = \frac{V}{\sqrt{gD}} = \frac{2 \text{ m/s}}{\sqrt{9.81 \text{ m/s}^2 \times 1.5 \text{ m}}} = \frac{2}{\sqrt{14.715}} = \frac{2}{3.836} \approx 0.52$

**Conclusion for Question 1:** Since $Fr \approx 0.52 < 1$, the flow is **subcritical**.

---

**Question 2:** Differentiate between uniform flow and gradually varied flow, and provide an example of each.

**Answer 2:**
*   **Uniform Flow:** In uniform flow, the flow depth, velocity, and cross-sectional area remain constant along the entire length of the channel. This means the water surface slope, the energy grade line slope, and the channel bed slope are all parallel and equal.
    *   **Example:** Water flowing in a long, straight, concrete-lined canal with a constant bottom slope and cross-section, where the discharge is steady.

*   **Gradually Varied Flow (GVF):** In GVF, the flow depth, velocity, and cross-sectional area change gradually along the length of the channel. The water surface slope, energy grade line slope, and channel bed slope are not parallel. The changes are slow enough that the momentum equation can be simplified, and the energy equation can be integrated to describe the flow profile.
    *   **Example:** The flow profile upstream of a sluice gate in a river, where the water surface gradually changes due to the obstruction.

---

**Question 3:** What is the significance of the Froude number in open channel flow analysis?

**Answer 3:**
The Froude number ($Fr$) is a dimensionless parameter that signifies the ratio of the inertial forces (related to flow velocity) to the gravitational forces (related to wave propagation). Its significance lies in its ability to classify the flow regime:

*   $Fr < 1$: Subcritical flow (flow is slow relative to wave speed; disturbances propagate upstream).
*   $Fr = 1$: Critical flow (flow velocity equals wave speed; minimum specific energy for a given discharge).
*   $Fr > 1$: Supercritical flow (flow is fast relative to wave speed; disturbances cannot propagate upstream).

Understanding the Froude number is essential for predicting flow behavior, analyzing transitions (like hydraulic jumps), and designing hydraulic structures.

---

### 6. Important Points to Remember

*   **Free Surface is Key:** The defining characteristic of open channel flow is the presence of a free surface exposed to the atmosphere.
*   **Gravity is the Driver:** Flow is primarily driven by the channel's slope.
*   **Hydraulic Radius:** A measure of flow efficiency, $R_h = A/P$.
*   **Froude Number:** The critical parameter for classifying flow regimes ($Fr < 1$ subcritical, $Fr = 1$ critical, $Fr > 1$ supercritical).
*   **Specific Energy:** $E = y + V^2/2g$, a fundamental concept for understanding flow behavior, especially at critical points.
*   **Uniform flow:** Depth and velocity are constant along the channel.
*   **Non-uniform flow:** Depth and velocity vary; can be gradual (GVF) or rapid (RVF).

---
**End of Module 1, Topic: Open Channel Flow**
