---
title: "Study of Parameters of Hydraulic Jump in Open channel Flow"
subject: "FLUID MECHANICS LAB"
module: "Module 13: Study of Parameters of Hydraulic Jump in Open channel Flow"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba8108ee"
status: "completed"
scrapedAt: "2026-05-20T18:40:58.212Z"
---
# Fluid Mechanics Lab: Module 13 - Study of Parameters of Hydraulic Jump in Open Channel Flow

---

## 1. Introduction to Hydraulic Jump

### 1.1. What is a Hydraulic Jump?

*   A **hydraulic jump** is a phenomenon in open channel flow where a **supercritical flow** transitions abruptly to a **subcritical flow**.
*   This transition is characterized by a sudden rise in the water surface, intense turbulence, and significant dissipation of energy.
*   It's essentially a standing wave where the flow undergoes a rapid deceleration and increase in depth.

### 1.2. Types of Flow in Open Channels

*   **Subcritical Flow (Tranquil Flow):**
    *   Characterized by a **low velocity** and **high depth**.
    *   The **Froude number (Fr)** is **less than 1 ($Fr < 1$)**.
    *   Disturbances can propagate upstream.
    *   Energy is relatively high, and there is minimal energy loss.

*   **Critical Flow:**
    *   A transitional state between subcritical and supercritical flow.
    *   Characterized by a **specific depth** and **minimum specific energy**.
    *   The **Froude number (Fr) is equal to 1 ($Fr = 1$)**.
    *   Disturbances propagate only to the point of origin.

*   **Supercritical Flow (Rapid Flow):**
    *   Characterized by a **high velocity** and **low depth**.
    *   The **Froude number (Fr)** is **greater than 1 ($Fr > 1$)**.
    *   Disturbances cannot propagate upstream.
    *   Energy is relatively low, and there is potential for significant energy loss.

### 1.3. Significance of Hydraulic Jumps

*   **Energy Dissipation:** Hydraulic jumps are highly effective in dissipating excess kinetic energy in the flow. This is crucial for preventing erosion and damage downstream of structures like spillways, sluice gates, and weirs.
*   **Aeration:** The intense turbulence and churning action during a hydraulic jump entrain air into the water, increasing dissolved oxygen levels. This is beneficial for downstream aquatic life.
*   **Flow Control:** Hydraulic jumps can be used to control water levels and flow conditions in certain applications.

---

## 2. Key Parameters of a Hydraulic Jump

The behavior and characteristics of a hydraulic jump are governed by several key parameters:

### 2.1. Froude Number (Fr)

*   **Definition:** The Froude number is a dimensionless parameter that represents the ratio of inertial forces to gravitational forces in open channel flow. It indicates the flow regime.
    $$Fr = \frac{V}{\sqrt{gD}}$$
    Where:
    *   $V$ = average velocity of flow
    *   $g$ = acceleration due to gravity
    *   $D$ = hydraulic depth (for rectangular channels, $D$ is the flow depth $y$)

*   **Significance:**
    *   $Fr < 1$: Subcritical flow
    *   $Fr = 1$: Critical flow
    *   $Fr > 1$: Supercritical flow

*   **Hydraulic Jump Occurrence:** A hydraulic jump occurs when flow transitions from $Fr_1 > 1$ (supercritical) to $Fr_2 < 1$ (subcritical). The jump is initiated at the point where the upstream Froude number ($Fr_1$) is typically around 1.7 or higher.

### 2.2. Upstream Depth ($y_1$)

*   **Definition:** The depth of the flow just *before* the hydraulic jump, in the supercritical regime.

### 2.3. Downstream Depth ($y_2$)

*   **Definition:** The depth of the flow just *after* the hydraulic jump, in the subcritical regime.

### 2.4. Length of the Jump ($L_j$)

*   **Definition:** The horizontal distance from the toe (start) of the jump to the end of the surface roller.

### 2.5. Conjugate Depths ($y_1$ and $y_2$)

*   **Definition:** The depths of flow upstream and downstream of a hydraulic jump that have the same specific energy. They are related by the **Belanger's momentum equation**.

*   **Belanger's Momentum Equation (for rectangular channels):**
    $$y_2 = \frac{y_1}{2} \left( \sqrt{1 + 8 Fr_1^2} - 1 \right)$$
    And conversely:
    $$y_1 = \frac{y_2}{2} \left( \sqrt{1 + 8 Fr_2^2} - 1 \right)$$
    Note: For a hydraulic jump, $Fr_1 > 1$ and $Fr_2 < 1$. The equation can be used with either upstream or downstream Froude number as long as the corresponding depth is used.

### 2.6. Energy Loss ($\Delta E$) or Dissipation ($E_L$)

*   **Definition:** The reduction in specific energy across the hydraulic jump due to turbulence and viscosity.

*   **Specific Energy ($E$):** The energy per unit weight of fluid. For a rectangular channel:
    $$E = y + \frac{V^2}{2g} = y + \frac{Q^2}{2gy^2A^2}$$
    Where $Q$ is the discharge and $A$ is the flow area.

*   **Energy Loss Calculation:**
    $$\Delta E = E_1 - E_2$$
    Where $E_1$ is the specific energy upstream and $E_2$ is the specific energy downstream.

*   **Percentage Energy Loss:**
    $$\% \text{ Energy Loss} = \frac{E_1 - E_2}{E_1} \times 100\%$$

### 2.7. Length of Jump to Depth Ratio ($L_j / y_2$)

*   **Definition:** This ratio is an empirical parameter that describes the relative length of the jump for a given downstream depth. It's often used to characterize the "strength" or "shape" of the jump.

*   **Empirical Relationship:** For a given range of $Fr_1$, this ratio is approximately constant.

---

## 3. Types of Hydraulic Jumps

The appearance and behavior of a hydraulic jump depend on the upstream Froude number ($Fr_1$).

*   **Undular Jump ($1 < Fr_1 \le 1.7$):**
    *   Very little energy loss.
    *   Surface undulations (waves) rather than a distinct roller.
    *   Not very effective for energy dissipation.

*   **Weak Jump ($1.7 < Fr_1 \le 2.5$):**
    *   Small energy loss.
    *   A small, smooth surface roller develops.

*   **Oscillating Jump ($2.5 < Fr_1 \le 4.5$):**
    *   The jump oscillates back and forth, causing uneven scour and fluctuating water levels.
    *   Can be problematic due to its instability.

*   **Stable Jump ($4.5 < Fr_1 \le 9.0$):**
    *   The jump is stable and located at a fixed position.
    *   Significant energy dissipation occurs.
    *   The surface roller is well-defined.
    *   This is the most desirable type for energy dissipation.

*   **Strong Jump ($Fr_1 > 9.0$):**
    *   Very large energy loss.
    *   The jump becomes very rough and turbulent.
    *   The surface roller is large and turbulent.

---

## 4. Experimental Procedure (Typical in a Lab)

1.  **Setup:** Set up an open channel with a slope that allows for supercritical flow. Install a flow control device (e.g., sluice gate, weir) upstream to create a high-velocity jet.
2.  **Measure Upstream Conditions:**
    *   Adjust the gate opening or weir crest to achieve a supercritical flow.
    *   Measure the upstream flow depth ($y_1$) and the flow rate ($Q$). The flow rate can be measured using a V-notch weir or a collection tank and stopwatch.
    *   Calculate the upstream velocity ($V_1 = Q/A_1$) and Froude number ($Fr_1$).
3.  **Observe and Measure the Jump:**
    *   Adjust the downstream control (e.g., tailgate) to initiate and stabilize a hydraulic jump.
    *   Measure the downstream flow depth ($y_2$) and the length of the jump ($L_j$). Use a point gauge or ruler for accurate depth measurements.
    *   The toe of the jump is the point where the supercritical flow starts to decelerate and rise. The end of the jump is typically where the surface roller dissipates.
4.  **Calculate Downstream Conditions:**
    *   Calculate the downstream velocity ($V_2 = Q/A_2$).
    *   Calculate the downstream Froude number ($Fr_2$).
5.  **Calculate Energy Loss:**
    *   Calculate the specific energy upstream ($E_1 = y_1 + V_1^2 / 2g$) and downstream ($E_2 = y_2 + V_2^2 / 2g$).
    *   Calculate the energy loss ($\Delta E = E_1 - E_2$) and percentage energy loss.
6.  **Repeat:** Repeat the measurements for different upstream Froude numbers by adjusting the upstream control or the channel slope.

---

## 5. Learning Outcomes Covered

This study of hydraulic jump parameters addresses the following key learning outcomes:

*   **Understanding the concept of hydraulic jump:** Defining what a hydraulic jump is and the conditions under which it occurs.
*   **Identifying flow regimes:** Differentiating between subcritical, critical, and supercritical flow using the Froude number.
*   **Measuring key parameters:** Learning to measure or calculate upstream depth ($y_1$), downstream depth ($y_2$), flow rate ($Q$), and jump length ($L_j$).
*   **Applying fundamental equations:** Using Belanger's momentum equation to relate conjugate depths.
*   **Calculating energy dissipation:** Determining the energy loss across the hydraulic jump and its significance.
*   **Correlating parameters:** Understanding the relationship between upstream Froude number and the characteristics of the jump (e.g., energy loss, length).
*   **Experimental verification:** Gaining practical experience in conducting experiments to study hydraulic phenomena.

---

## 6. Practice Questions and Answers

**Question 1:**
A hydraulic jump occurs in a rectangular channel with an upstream Froude number ($Fr_1$) of 3.0. If the upstream depth ($y_1$) is 0.2 meters, calculate the downstream depth ($y_2$) and the energy loss ($\Delta E$) per unit weight of water. Assume $g = 9.81 \, m/s^2$.

**Answer 1:**
*   **Calculate $y_2$ using Belanger's equation:**
    $$y_2 = \frac{y_1}{2} \left( \sqrt{1 + 8 Fr_1^2} - 1 \right)$$
    $$y_2 = \frac{0.2}{2} \left( \sqrt{1 + 8 (3.0)^2} - 1 \right)$$
    $$y_2 = 0.1 \left( \sqrt{1 + 72} - 1 \right)$$
    $$y_2 = 0.1 \left( \sqrt{73} - 1 \right)$$
    $$y_2 = 0.1 (8.544 - 1)$$
    $$y_2 = 0.1 \times 7.544 = 0.7544 \, \text{meters}$$

*   **To calculate energy loss, we first need $V_1$ and $V_2$.** We'll assume a unit width for simplicity to get flow per unit width ($q$). Let $q = V_1 y_1$.
    $$Fr_1 = \frac{V_1}{\sqrt{g y_1}}$$
    $$3.0 = \frac{V_1}{\sqrt{9.81 \times 0.2}}$$
    $$3.0 = \frac{V_1}{\sqrt{1.962}}$$
    $$V_1 = 3.0 \times \sqrt{1.962} \approx 3.0 \times 1.4007 \approx 4.202 \, m/s$$
    So, $q = V_1 y_1 = 4.202 \times 0.2 = 0.8404 \, m^2/s$.

*   **Calculate $V_2$:**
    $$V_2 = \frac{q}{y_2} = \frac{0.8404}{0.7544} \approx 1.114 \, m/s$$

*   **Calculate Specific Energies:**
    $$E_1 = y_1 + \frac{V_1^2}{2g} = 0.2 + \frac{(4.202)^2}{2 \times 9.81} = 0.2 + \frac{17.657}{19.62} \approx 0.2 + 0.900 = 1.100 \, \text{meters}$$
    $$E_2 = y_2 + \frac{V_2^2}{2g} = 0.7544 + \frac{(1.114)^2}{2 \times 9.81} = 0.7544 + \frac{1.241}{19.62} \approx 0.7544 + 0.063 = 0.817 \, \text{meters}$$

*   **Calculate Energy Loss:**
    $$\Delta E = E_1 - E_2 = 1.100 - 0.817 = 0.283 \, \text{meters}$$

**Question 2:**
Describe the characteristics of an oscillating hydraulic jump and why it is considered problematic in engineering applications.

**Answer 2:**
An oscillating hydraulic jump occurs when the upstream Froude number ($Fr_1$) is between approximately 2.5 and 4.5. Its main characteristic is its **instability**, where the jump oscillates back and forth along the channel bed. This oscillation is caused by a fluctuating pressure at the toe of the jump, which can lead to:

*   **Variable scour:** The oscillating toe can cause intermittent and uneven scour of the channel bed.
*   **Fluctuating forces:** Structures downstream can experience fluctuating impact forces.
*   **Increased noise and vibration:** The turbulent nature of the oscillation generates significant noise and vibration.
*   **Difficulty in design:** Its unpredictable location makes it difficult to design energy dissipation structures effectively.

Because of these issues, engineers aim to avoid oscillating jumps in practical designs, preferring stable jumps for reliable energy dissipation.

**Question 3:**
If a hydraulic jump is observed in a lab with $y_1 = 0.15$ m and $y_2 = 0.60$ m, determine the upstream Froude number ($Fr_1$).

**Answer 3:**
We can rearrange Belanger's equation to solve for $Fr_1$:
$$y_2 = \frac{y_1}{2} \left( \sqrt{1 + 8 Fr_1^2} - 1 \right)$$
$$\frac{2y_2}{y_1} = \sqrt{1 + 8 Fr_1^2} - 1$$
$$\frac{2y_2}{y_1} + 1 = \sqrt{1 + 8 Fr_1^2}$$
$$\left(\frac{2y_2}{y_1} + 1\right)^2 = 1 + 8 Fr_1^2$$
$$8 Fr_1^2 = \left(\frac{2y_2}{y_1} + 1\right)^2 - 1$$
$$Fr_1^2 = \frac{1}{8} \left[ \left(\frac{2y_2}{y_1} + 1\right)^2 - 1 \right]$$

Substitute the given values:
$$Fr_1^2 = \frac{1}{8} \left[ \left(\frac{2 \times 0.60}{0.15} + 1\right)^2 - 1 \right]$$
$$Fr_1^2 = \frac{1}{8} \left[ \left(\frac{1.20}{0.15} + 1\right)^2 - 1 \right]$$
$$Fr_1^2 = \frac{1}{8} \left[ (8 + 1)^2 - 1 \right]$$
$$Fr_1^2 = \frac{1}{8} \left[ 9^2 - 1 \right]$$
$$Fr_1^2 = \frac{1}{8} [81 - 1]$$
$$Fr_1^2 = \frac{80}{8} = 10$$
$$Fr_1 = \sqrt{10} \approx 3.16$$
The upstream Froude number is approximately 3.16.

---

## 7. Important Points to Remember

*   A hydraulic jump *always* transitions from **supercritical flow ($Fr > 1$)** to **subcritical flow ($Fr < 1$)**.
*   Hydraulic jumps are crucial for **energy dissipation** and preventing erosion.
*   The **Froude number** is the primary parameter determining the flow regime and the type of jump.
*   **Belanger's momentum equation** is the fundamental theoretical basis for relating conjugate depths in a hydraulic jump.
*   **Specific energy is always lost** across a hydraulic jump due to turbulence.
*   The **type of jump** (undular, weak, oscillating, stable, strong) is directly related to the upstream Froude number.
*   **Stable jumps ($Fr_1 > 4.5$)** are generally preferred for effective and reliable energy dissipation.
*   **Oscillating jumps ($2.5 < Fr_1 < 4.5$)** are undesirable due to their instability and potential for causing damage.

---
