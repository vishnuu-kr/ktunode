---
title: "Pipe Flow: Viscous flow: Reynolds experiment to classify laminar and turbulent flows"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 2: Pipe Flow: Viscous flow: Reynolds experiment to classify laminar and turbulent flows"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a66"
status: "completed"
scrapedAt: "2026-05-20T18:46:24.393Z"
---
# Mechanics of Fluid Flow: Module 2: Pipe Flow: Viscous Flow

## Topic: Reynolds Experiment to Classify Laminar and Turbulent Flows

This module delves into the fundamental concept of viscous flow within pipes, focusing on the groundbreaking work of Osborne Reynolds in distinguishing between two distinct flow regimes: laminar and turbulent. Understanding this distinction is crucial for predicting and controlling fluid behavior in a wide range of engineering applications.

---

### 1. Introduction to Viscous Flow in Pipes

*   **Viscous Flow:** Fluid flow where the effects of viscosity are significant. Viscosity is a measure of a fluid's internal resistance to flow (its "thickness").
*   **Pipe Flow:** Fluid flow confined within a conduit, typically a cylindrical pipe.
*   **Importance:** Understanding pipe flow is essential for designing pipelines for water, oil, gas, and for analyzing fluid movement in biological systems (e.g., blood flow).

---

### 2. Reynolds' Experiments (1883)

Osborne Reynolds conducted a series of elegant experiments to visualize and understand the transition from smooth to chaotic fluid motion.

#### 2.1. Experimental Setup

*   **Apparatus:** A long, transparent glass pipe through which water flowed from a reservoir.
*   **Flow Control:** A valve at the outlet of the pipe allowed for precise control of the flow rate.
*   **Visualization Technique:** A thin, colored filament of dye was introduced at the pipe's entrance. The behavior of this dye filament provided visual cues about the flow regime.

#### 2.2. Observation of Flow Regimes

Reynolds observed three distinct behaviors of the dye filament as he gradually increased the flow rate:

*   **Laminar Flow (Low Velocity):**
    *   The dye filament remained as a **smooth, straight, and unbroken line** throughout the length of the pipe.
    *   Fluid particles move in **parallel layers (laminae)** with no significant mixing between them.
    *   Each layer slides smoothly over the adjacent layer.
    *   Viscous forces dominate, acting as a damping mechanism against disturbances.

*   **Transitional Flow (Intermediate Velocity):**
    *   The dye filament began to **waver and oscillate** irregularly.
    *   Small eddies and swirls appeared.
    *   This is an unstable regime where the flow is neither purely laminar nor fully turbulent.

*   **Turbulent Flow (High Velocity):**
    *   The dye filament **broke up and diffused rapidly** throughout the pipe.
    *   The flow is characterized by **chaotic, random, and irregular motion** of fluid particles.
    *   Formation of **eddies and vortices** at various scales.
    *   Significant mixing occurs across the pipe cross-section.
    *   Inertial forces dominate over viscous forces.

---

### 3. Classification of Flow: The Reynolds Number (Re)

Reynolds realized that the transition between laminar and turbulent flow was not solely dependent on velocity but also on other factors. He proposed a dimensionless parameter to characterize the flow regime.

#### 3.1. Definition of Reynolds Number

The **Reynolds Number (Re)** is a dimensionless quantity that represents the ratio of inertial forces to viscous forces within a fluid.

$$ \text{Re} = \frac{\text{Inertial Forces}}{\text{Viscous Forces}} $$

#### 3.2. Formula for Pipe Flow

For flow in a circular pipe of diameter \(D\), the Reynolds number is given by:

$$ \text{Re} = \frac{\rho v D}{\mu} $$

Where:
*   \(\rho\) (rho) = Density of the fluid (\(\text{kg/m}^3\))
*   \(v\) = Average velocity of the fluid (\(\text{m/s}\))
*   \(D\) = Characteristic length, which is the **internal diameter** of the pipe (\(\text{m}\))
*   \(\mu\) (mu) = Dynamic viscosity of the fluid (\(\text{Pa} \cdot \text{s}\) or \(\text{N} \cdot \text{s/m}^2\))

#### 3.3. Alternative Formula using Kinematic Viscosity

The formula can also be expressed using kinematic viscosity (\(\nu\), nu), where \(\nu = \mu / \rho\):

$$ \text{Re} = \frac{v D}{\nu} $$

#### 3.4. Dimensionless Nature

The units in the Reynolds number formula cancel out, making it a dimensionless quantity. This means the Reynolds number is independent of the system of units used.

#### 3.5. Significance of the Reynolds Number

The Reynolds number provides a universal criterion for predicting whether flow will be laminar or turbulent.

*   **Laminar Flow:** Generally occurs at **low Reynolds numbers**.
    *   **Re \(\leq\) 2100 (approximately):** Flow is definitively laminar.
*   **Transitional Flow:** Occurs over a range of Reynolds numbers.
    *   **2100 < Re < 4000 (approximately):** Flow is in the transitional regime, exhibiting characteristics of both laminar and turbulent flow. The exact range can vary depending on pipe roughness and entrance conditions.
*   **Turbulent Flow:** Generally occurs at **high Reynolds numbers**.
    *   **Re \(\geq\) 4000 (approximately):** Flow is definitively turbulent.

#### 3.6. Importance of Critical Reynolds Number

*   **Lower Critical Reynolds Number (\(\text{Re}_{\text{crit, lower}}\)):** The Reynolds number below which the flow is always laminar, regardless of disturbances. Typically around 2100 for pipe flow.
*   **Upper Critical Reynolds Number (\(\text{Re}_{\text{crit, upper}}\)):** The Reynolds number above which the flow is always turbulent. This value is not as sharply defined as the lower critical value and can be significantly higher (e.g., 4000 or even higher depending on conditions).

**Important Point:** The transition zone is sensitive to factors like pipe roughness, vibrations, and the smoothness of the pipe entrance. A perfectly smooth pipe with a very gradual entrance might sustain laminar flow at Reynolds numbers slightly higher than 2100.

---

### 4. Characteristics and Implications of Flow Regimes

#### 4.1. Laminar Flow

*   **Velocity Profile:** Parabolic. The velocity is zero at the pipe wall and maximum at the centerline.
*   **Shear Stress:** Proportional to the velocity gradient (\(\tau = \mu \frac{dv}{dy}\)).
*   **Energy Loss:** Primarily due to viscous friction between fluid layers. Lower energy loss compared to turbulent flow for the same flow rate.
*   **Applications:** Very low flow rates, highly viscous fluids, situations where mixing is undesirable (e.g., some chemical processes, lubrication).

#### 4.2. Turbulent Flow

*   **Velocity Profile:** Flatter, more "plug-like" in the central region of the pipe, with a steep velocity gradient near the walls.
*   **Shear Stress:** Includes both viscous shear and turbulent shear (due to momentum exchange from eddies). Turbulent shear is significantly larger than viscous shear at higher Reynolds numbers.
*   **Energy Loss:** Higher energy loss due to chaotic mixing, eddy formation, and increased friction with the pipe walls. This results in greater pressure drop for the same flow rate.
*   **Applications:** Most real-world pipe flow scenarios (water supply, oil pipelines, air conditioning systems).

#### 4.3. Transitional Flow

*   **Behavior:** Unstable and unpredictable. Can exhibit characteristics of both laminar and turbulent flow intermittently.
*   **Engineering Concern:** Generally avoided in design due to its unpredictability and potential for fluctuating pressures and energy losses.

---

### 5. Examples

#### Example 1: Determining the Flow Regime

Water at 20°C flows through a pipe of internal diameter 0.05 m. If the average velocity is 0.1 m/s, determine whether the flow is laminar or turbulent.

**Given:**
*   Diameter, \(D = 0.05 \, \text{m}\)
*   Average velocity, \(v = 0.1 \, \text{m/s}\)

**From Appendix (or standard tables):**
*   Density of water (\(\rho\)) at 20°C \(\approx 998 \, \text{kg/m}^3\)
*   Dynamic viscosity of water (\(\mu\)) at 20°C \(\approx 1.002 \times 10^{-3} \, \text{Pa} \cdot \text{s}\)

**Calculation:**
$$ \text{Re} = \frac{\rho v D}{\mu} $$
$$ \text{Re} = \frac{(998 \, \text{kg/m}^3) \times (0.1 \, \text{m/s}) \times (0.05 \, \text{m})}{1.002 \times 10^{-3} \, \text{Pa} \cdot \text{s}} $$
$$ \text{Re} = \frac{4.99 \, \text{kg} \cdot \text{m} \cdot \text{s}^{-1} \cdot \text{m}}{1.002 \times 10^{-3} \, \text{kg} \cdot \text{m}^{-1} \cdot \text{s}^{-1}} $$
$$ \text{Re} \approx 4980 $$

**Conclusion:**
Since Re \(\approx 4980\), which is greater than 4000, the flow is **turbulent**.

#### Example 2: Finding the Velocity for Laminar Flow

Consider a flow of oil with kinematic viscosity \(\nu = 2 \times 10^{-4} \, \text{m}^2/\text{s}\) in a pipe of diameter 0.02 m. What is the maximum average velocity for the flow to remain laminar?

**Given:**
*   Kinematic viscosity, \(\nu = 2 \times 10^{-4} \, \text{m}^2/\text{s}\)
*   Diameter, \(D = 0.02 \, \text{m}\)
*   For laminar flow, \( \text{Re} \leq 2100 \)

**Formula:**
$$ \text{Re} = \frac{v D}{\nu} $$

**Rearranging to find v:**
$$ v = \frac{\text{Re} \cdot \nu}{D} $$

**Calculation:**
To find the maximum velocity for laminar flow, we use the upper limit of the laminar regime, \(\text{Re} = 2100\).
$$ v_{\text{max, laminar}} = \frac{2100 \times (2 \times 10^{-4} \, \text{m}^2/\text{s})}{0.02 \, \text{m}} $$
$$ v_{\text{max, laminar}} = \frac{0.42 \, \text{m}^2/\text{s}}{0.02 \, \text{m}} $$
$$ v_{\text{max, laminar}} = 21 \, \text{m/s} $$

**Conclusion:**
The maximum average velocity for the flow to remain laminar is 21 m/s.

---

### 6. Practice Questions

**Question 1:**
Osborne Reynolds' experiments visually demonstrated the transition between flow regimes using a filament of dye. What are the three primary flow regimes identified by Reynolds?

**Question 2:**
Define the Reynolds number and explain its physical significance in fluid flow.

**Question 3:**
For flow in a circular pipe, what are the approximate ranges of the Reynolds number that define laminar, transitional, and turbulent flow?

**Question 4:**
Air at 15°C flows through a pipe with an internal diameter of 0.1 m at an average velocity of 0.5 m/s. Calculate the Reynolds number for this flow and determine its regime.
*(Assume properties of air at 15°C: \(\rho \approx 1.225 \, \text{kg/m}^3\), \(\mu \approx 1.81 \times 10^{-5} \, \text{Pa} \cdot \text{s}\))*

**Question 5:**
In a pipe of diameter 0.01 m, water (\(\nu \approx 1 \times 10^{-6} \, \text{m}^2/\text{s}\)) flows at an average velocity of 0.05 m/s. Is this flow laminar or turbulent?

---

### 7. Answers to Practice Questions

**Answer 1:**
The three primary flow regimes identified by Reynolds are:
1.  **Laminar Flow:** Smooth, orderly flow in parallel layers.
2.  **Transitional Flow:** Unstable flow with intermittent disturbances.
3.  **Turbulent Flow:** Chaotic, random, and irregular motion with significant mixing.

**Answer 2:**
The Reynolds number (\(\text{Re}\)) is a dimensionless parameter defined as the ratio of inertial forces to viscous forces within a fluid. It signifies the relative importance of these forces in determining the flow behavior. A high Reynolds number indicates that inertial forces dominate, leading to turbulent flow, while a low Reynolds number indicates that viscous forces dominate, resulting in laminar flow.

**Answer 3:**
For flow in a circular pipe:
*   **Laminar Flow:** \(\text{Re} \leq 2100\)
*   **Transitional Flow:** \(2100 < \text{Re} < 4000\)
*   **Turbulent Flow:** \(\text{Re} \geq 4000\)

**Answer 4:**
**Given:**
*   \(D = 0.1 \, \text{m}\)
*   \(v = 0.5 \, \text{m/s}\)
*   \(\rho = 1.225 \, \text{kg/m}^3\)
*   \(\mu = 1.81 \times 10^{-5} \, \text{Pa} \cdot \text{s}\)

**Calculation:**
$$ \text{Re} = \frac{\rho v D}{\mu} = \frac{(1.225 \, \text{kg/m}^3) \times (0.5 \, \text{m/s}) \times (0.1 \, \text{m})}{1.81 \times 10^{-5} \, \text{Pa} \cdot \text{s}} $$
$$ \text{Re} = \frac{0.06125 \, \text{kg} \cdot \text{m} \cdot \text{s}^{-1}}{1.81 \times 10^{-5} \, \text{kg} \cdot \text{m}^{-1} \cdot \text{s}^{-1}} $$
$$ \text{Re} \approx 33840 $$

**Conclusion:**
Since Re \(\approx 33840 \geq 4000\), the flow is **turbulent**.

**Answer 5:**
**Given:**
*   \(D = 0.01 \, \text{m}\)
*   \(v = 0.05 \, \text{m/s}\)
*   \(\nu = 1 \times 10^{-6} \, \text{m}^2/\text{s}\)

**Calculation:**
$$ \text{Re} = \frac{v D}{\nu} = \frac{(0.05 \, \text{m/s}) \times (0.01 \, \text{m})}{1 \times 10^{-6} \, \text{m}^2/\text{s}} $$
$$ \text{Re} = \frac{0.0005 \, \text{m}^2/\text{s}}{1 \times 10^{-6} \, \text{m}^2/\text{s}} $$
$$ \text{Re} = 500 $$

**Conclusion:**
Since Re = 500 \(\leq 2100\), the flow is **laminar**.

---

### 8. Important Points to Remember

*   **Viscosity is key:** It's the internal friction that smooths out disturbances and keeps flow laminar.
*   **Reynolds Number is king:** It's the dimensionless parameter that definitively classifies flow as laminar, transitional, or turbulent.
*   **Pipe Diameter matters:** It's the characteristic length for pipe flow in the Reynolds number calculation.
*   **Turbulence means more mixing, more energy loss:** This is critical for pressure drop calculations and pump sizing.
*   **The transition zone is tricky:** Be aware that factors like pipe roughness can influence the exact Re values for the transition.

---
This concludes Module 2, Topic: Pipe Flow: Viscous Flow: Reynolds Experiment. You should now have a solid understanding of how to differentiate between laminar and turbulent flow and the role of the Reynolds number.
