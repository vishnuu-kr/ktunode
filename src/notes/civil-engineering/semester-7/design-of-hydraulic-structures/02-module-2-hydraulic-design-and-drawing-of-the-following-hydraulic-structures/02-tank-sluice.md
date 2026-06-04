---
title: "Tank sluice"
subject: "DESIGN OF HYDRAULIC STRUCTURES"
module: "Module 2: Hydraulic design   and Drawing of the following hydraulic structures:"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba81170c"
status: "completed"
scrapedAt: "2026-05-20T18:57:47.140Z"
---
# DESIGN OF HYDRAULIC STRUCTURES - Module 2: Hydraulic Design and Drawing of Hydraulic Structures

## Topic: Tank Sluice

---

### 1. Introduction to Tank Sluices

**Definition:**
A tank sluice is a type of regulator or gate installed at the outlet of a tank or reservoir to control the flow of water into or out of it, typically for irrigation purposes. It serves to regulate the discharge, prevent scour at the outlet, and allow for the de-silting of the tank bed.

**Purpose and Functions:**
*   **Regulation of Discharge:** To control and regulate the amount of water released from the tank to the distribution system (e.g., canals, watercourses).
*   **De-silting:** To allow for the removal of silt accumulated at the bottom of the tank.
*   **Prevention of Scour:** To dissipate energy of flowing water and prevent erosion of the ground downstream of the outlet.
*   **Water Supply Control:** To manage the supply of water for various purposes like irrigation, domestic use, or industrial needs.
*   **Emergency Outlet:** Can sometimes function as an emergency outlet for rapid drainage of the tank.

**Types of Tank Sluices:**
Tank sluices can be broadly classified based on their operation and construction:

*   **Gate Type:**
    *   **Flap Gates:** Hinged at the bottom, opening outwards. Simple, but can be submerged and difficult to operate under pressure.
    *   **Slide Gates (Radial Gates, Rolling Gates):** Move vertically or radially. Offer better control and are easier to operate under pressure.
    *   **Drum Gates:** Cylindrical gates that are raised or lowered. Used for larger discharges.
*   **Orifice Type:**
    *   **Fixed Orifice:** A permanent opening with a controlled size.
    *   **Adjustable Orifice:** Orifice size can be varied to control discharge.
*   **Stoney Gates:** Heavy cast-iron gates supported by rollers, used for large spans and high heads.

*In the context of typical tank sluices for irrigation, gate-type sluices (especially slide or radial gates) are more common due to their ease of operation and precise control.*

---

### 2. Hydraulic Design of Tank Sluices

This section focuses on the fundamental hydraulic principles governing the design of a tank sluice.

#### 2.1. Components of a Tank Sluice

A typical tank sluice consists of the following components:

*   **Upstream Approach Channel/Bay:** The channel leading water to the sluice.
*   **Gate/Regulator:** The movable component that controls the flow.
*   **Gate Guides/Grooves:** Channels into which the gate slides or pivots.
*   **Sill/Floor:** The bottom structural element of the sluice.
*   **Side Walls/Abutments:** Walls supporting the gate and containing the flow.
*   **Downstream Cut-off Walls:** To prevent seepage under the structure.
*   **Energy Dissipating Arrangement (if necessary):** Such as a downstream apron or stilling basin.

#### 2.2. Discharge Calculation and Gate Operation

**Key Concepts:**
*   **Head:** The difference in water levels upstream and downstream of the sluice.
*   **Opening:** The vertical height of the gate that is raised to allow flow.
*   **Coefficient of Discharge ($C_d$):** A factor that accounts for energy losses due to friction and contraction of flow. It depends on the shape of the opening and the gate.

**Formulas for Discharge:**

The discharge ($Q$) through a sluice gate can be calculated using the following formula:

$Q = C_d \times A \times \sqrt{2gH}$

Where:
*   $Q$ = Discharge (m³/s or cusecs)
*   $C_d$ = Coefficient of discharge (typically 0.6 to 0.9 depending on gate type and opening)
*   $A$ = Area of the opening (m² or sq. ft.) = Width of sluice $\times$ Height of opening
*   $g$ = Acceleration due to gravity (9.81 m/s² or 32.2 ft/s²)
*   $H$ = Effective head over the center of the opening (m or ft.)

**Considerations for Head ($H$):**

*   **Submerged Gate:** If the downstream water level is above the top of the opening, the head is the difference between upstream and downstream water levels.
    $H = H_u - H_d$
    Where $H_u$ = Upstream water level, $H_d$ = Downstream water level.
*   **Unsubmerged Gate:** If the downstream water level is below the top of the opening, the head is typically taken as the depth of water above the center of the opening.
    $H = H_u - \text{sill level} - \frac{\text{opening}}{2}$

**Design Steps for Discharge Control:**

1.  **Determine the required maximum discharge ($Q_{max}$) and minimum discharge ($Q_{min}$) from the tank.** This is usually dictated by the irrigation demand.
2.  **Select the number and width of sluice bays ($n$ and $w$).** This depends on site constraints, structural considerations, and operational flexibility.
3.  **Calculate the required gate opening ($h$) for the maximum discharge.**
    *   Rearrange the discharge formula: $h = \frac{Q_{max}}{C_d \times w \times \sqrt{2gH}}$
    *   Estimate an appropriate $C_d$ value (e.g., 0.6 for sharp-edged opening, 0.8-0.9 for well-formed openings with rounded edges).
    *   Determine the upstream and downstream water levels to calculate $H$.
4.  **Check if the calculated opening is feasible.** The opening should not exceed the height of the tank wall or the gate width.
5.  **Calculate the discharge for various gate openings and downstream conditions** to ensure the sluice can meet all operational requirements.

#### 2.3. Energy Dissipation and Scour Prevention

**Problem:** Water exiting a sluice gate at high velocity can cause significant erosion (scour) in the downstream channel.

**Solutions:**
*   **Energy Dissipating Apron:** A paved or concrete surface downstream of the sluice to protect the bed from scour.
*   **Stilling Basin:** A specially designed structure downstream to safely dissipate the kinetic energy of the water before it enters the natural channel.
*   **Length of Apron:** The length of the apron is determined based on the critical velocity for scour and the velocity of the water exiting the sluice. Lacey's or Isbash's formulas can be used to estimate the scour depth and subsequently the required apron length.

**Isbash's Formula (for scour depth):**
$D_s = C \sqrt{Q_f}$
Where:
*   $D_s$ = Scour depth (m)
*   $C$ = A constant depending on the type of material and flow (e.g., for cohesive soils, C=0.86)
*   $Q_f$ = Discharge per foot width of the exit channel (m³/s/m)

**Apron Length:**
The length of the apron should be sufficient to prevent scour to a depth greater than the thickness of the apron itself, or to a specified safe depth.

#### 2.4. Structural Design Considerations (Brief Overview)

While this module focuses on hydraulic design, it's important to note that structural design is integral.

*   **Loads:** Water pressure, gate weight, operating forces, earth pressure.
*   **Materials:** Concrete, steel (for gates and guides).
*   **Foundations:** Design to withstand loads and prevent uplift.
*   **Gate Mechanism:** Hoisting equipment for operating the gates.

---

### 3. Drawing of Tank Sluices

This section covers the graphical representation of a tank sluice.

#### 3.1. Components to be Shown in Drawings

*   **Plan View:**
    *   Layout of the tank outlet bay.
    *   Number and width of sluice bays.
    *   Upstream and downstream approach channels.
    *   Sill elevation.
    *   Gate guides.
    *   Side walls and abutments.
    *   Cut-off walls (upstream and downstream).
    *   Apron dimensions.
*   **Section View (Longitudinal):**
    *   Water levels (full supply, low supply).
    *   Gate in closed and/or open position.
    *   Sill and floor levels.
    *   Bed levels upstream and downstream.
    *   Upstream and downstream protection works.
    *   Dimensions of the structure.
*   **Section View (Transverse):**
    *   Cross-section of the bays.
    *   Dimensions of walls and floor.
    *   Gate guides and sealing arrangements.
    *   Apron thickness.

#### 3.2. Typical Drawings and Details

**Common Drawing Sheets:**

*   **General Layout Plan:** Shows the overall arrangement within the tank outlet area.
*   **Detailed Plan:** Shows the dimensions of the bays, walls, floor, apron, etc.
*   **Longitudinal Section:** Illustrates the profile of the structure along the flow path.
*   **Transverse Section:** Shows the cross-sectional details of the bays.
*   **Gate Details:** Specific drawings of the gate itself, including materials, lifting mechanism, and sealing.

**Key Drawing Elements:**

*   **Hatching:** To represent different materials (concrete, earth, steel).
*   **Dimensioning:** Clear and consistent dimensioning of all critical features.
*   **Water Levels:** Indicating Full Supply Level (FSL) and Low Supply Level (LSL).
*   **Levels:** Spot levels at key points (sill, top of walls, floor).
*   **Notes and Specifications:** Providing important design parameters, material requirements, and construction details.
*   **Scale:** Clearly indicated on each drawing.

**Example of a Typical Tank Sluice Layout (Conceptual):**

Imagine a concrete structure built across the outlet of an earthen tank.

*   **Upstream:** Water approaches a concrete bay.
*   **Bay:** Contains one or more sluice gates, which can be raised or lowered. The gates slide within vertical guides.
*   **Sill:** A concrete sill at the bottom of the bay, typically at a level that allows for de-silting.
*   **Downstream Apron:** A concrete slab extending downstream from the sill to prevent scour.
*   **Wing Walls:** Concrete walls extending from the abutments to guide the flow and protect the tank embankment.
*   **Cut-off Walls:** Embedded concrete walls upstream and downstream of the apron to prevent seepage.

---

### 4. Learning Outcomes Checklist & Key Concepts

**Learning Outcomes Covered:**

*   [X] Understanding the purpose and function of tank sluices.
*   [X] Identifying different types of tank sluices.
*   [X] Applying hydraulic principles for discharge calculation.
*   [X] Understanding energy dissipation requirements and scour prevention.
*   [X] Recognizing the components of a tank sluice.
*   [X] Understanding the typical elements to be shown in drawings.

**Key Concepts to Remember:**

*   **Discharge Equation:** $Q = C_d \times A \times \sqrt{2gH}$ is fundamental.
*   **Coefficient of Discharge ($C_d$):** Crucial for accurate discharge calculation.
*   **Effective Head ($H$):** Correctly determining $H$ based on submerged/unsubmerged conditions is vital.
*   **Scour:** The primary concern downstream, requiring proper energy dissipation.
*   **Apron Length:** Directly related to preventing scour.
*   **Drawings:** Must clearly depict all functional and structural elements with accurate dimensions and levels.

---

### 5. Practice Questions and Exercises

**Question 1: Hydraulic Design**

A tank sluice is designed to pass a maximum discharge of 5 m³/s. The sluice has two bays, each 2.0 meters wide. The upstream water level is 2.5 m above the sill, and the downstream water level is 0.5 m above the sill. Assume a coefficient of discharge ($C_d$) of 0.75 for the gate opening.

(a) Calculate the required height of the gate opening for the maximum discharge.
(b) If the downstream water velocity is 3 m/s, and the soil is alluvial with a critical velocity for scour of 1.2 m/s, what is the likely impact on the downstream bed? Briefly explain the need for an apron.

**Answer 1:**

(a) **Calculation of required gate opening:**
*   Total width of sluice = $2 \times 2.0$ m = 4.0 m
*   Effective head ($H$): Since the downstream water level (0.5m above sill) is below the potential opening (which will be above the sill), we can consider the head over the center of the opening. Let's assume the opening height is 'h'. The center of the opening is at $h/2$ above the sill.
    $H = H_u - (\text{sill level} + h/2)$
    Assuming sill level = 0 for simplicity in calculating head relative to sill.
    $H = 2.5 - h/2$
    The discharge formula becomes:
    $Q = C_d \times (n \times w \times h) \times \sqrt{2g(H_u - \text{sill level} - h/2)}$
    $5 = 0.75 \times (2 \times 2.0 \times h) \times \sqrt{2 \times 9.81 \times (2.5 - h/2)}$
    $5 = 0.75 \times 4.0 \times h \times \sqrt{19.62 \times (2.5 - h/2)}$
    $5 = 3.0 \times h \times \sqrt{49.05 - 9.81h}$

    This is a non-linear equation for 'h'. We can solve it iteratively or by trial and error. Let's try some values for 'h' keeping in mind that the opening must be less than the upstream head (2.5m).

    *   **Try h = 0.5 m:**
        $Q = 3.0 \times 0.5 \times \sqrt{49.05 - 9.81 \times 0.5} = 1.5 \times \sqrt{49.05 - 4.905} = 1.5 \times \sqrt{44.145} \approx 1.5 \times 6.64 \approx 9.96$ m³/s. This is too high. So, the opening must be smaller.

    *   **Try h = 0.25 m:**
        $Q = 3.0 \times 0.25 \times \sqrt{49.05 - 9.81 \times 0.25} = 0.75 \times \sqrt{49.05 - 2.4525} = 0.75 \times \sqrt{46.5975} \approx 0.75 \times 6.826 \approx 5.12$ m³/s.

    This is very close to the required 5 m³/s. So, the required height of the gate opening is approximately **0.25 meters**.

(b) **Impact of downstream velocity and need for apron:**
The downstream water velocity (3 m/s) is significantly higher than the critical velocity for scour (1.2 m/s). This velocity is capable of picking up and transporting the bed material. Therefore, if the sluice is operated, the water exiting will have high kinetic energy and can cause significant erosion or scour in the downstream bed. An apron is necessary to protect the downstream bed from this scour by providing a stable, paved surface that the high-velocity water can flow over without causing erosion.

**Question 2: Drawing Interpretation**

In a drawing of a tank sluice, you see a longitudinal section. What key information would you look for regarding the gate operation and downstream protection?

**Answer 2:**

Regarding **gate operation**:
*   **Gate position:** Is it shown closed, partially open, or fully open?
*   **Gate guides:** Details of the vertical grooves into which the gate slides, ensuring a good seal.
*   **Lifting mechanism:** Indication of how the gate is operated (e.g., a handwheel and screw mechanism at the top).
*   **Clearance:** The space provided above the gate when fully open.

Regarding **downstream protection**:
*   **Apron:** The presence and dimensions (length, thickness) of the concrete apron downstream of the sill.
*   **Cut-off walls:** Upstream and downstream cut-off walls to prevent seepage under the apron.
*   **Energy dissipating structures:** If a stilling basin or other energy dissipation measures are included.
*   **Bed protection:** Any additional pitching or revetment of the downstream channel.
*   **Levels:** The difference in levels between the apron and the downstream natural bed, and how the apron is integrated.

---

### 6. Important Points to Remember

*   **Efficiency of $C_d$:** $C_d$ is not constant and can vary with the gate opening and head. For preliminary design, standard values are used, but refined calculations may consider these variations.
*   **Silt Exclusion:** The sill level is critical. It should be set sufficiently high to allow the coarser silt to be deposited in the tank and not pass through the sluice, but low enough to allow for de-silting when needed.
*   **Gate Sealing:** Proper sealing of gates is essential to prevent leakage when closed. This involves designing grooves and sealing strips.
*   **Uplift Pressure:** Downstream cut-off walls and the apron are designed to reduce uplift pressure on the foundation, which can be significant under high heads.
*   **Operation and Maintenance:** The design should facilitate easy operation and maintenance of the gates and associated mechanisms.
*   **Economic considerations:** The number and size of bays are often a trade-off between structural complexity, operational flexibility, and cost.

---
