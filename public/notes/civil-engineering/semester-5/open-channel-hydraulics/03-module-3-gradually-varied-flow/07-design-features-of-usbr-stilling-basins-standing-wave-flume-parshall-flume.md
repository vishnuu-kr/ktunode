---
title: "Design features of USBR stilling basins, Standing wave flume, Parshall flume"
subject: "OPEN CHANNEL HYDRAULICS"
module: "Module 3: Gradually varied flow"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810eb5"
status: "completed"
scrapedAt: "2026-05-20T18:49:56.068Z"
---
# Open Channel Hydraulics: Module 3 - Gradually Varied Flow

## Topic: Design Features of USBR Stilling Basins, Standing Wave Flume, Parshall Flume

### Learning Outcomes:

*   **Understand the purpose and principles of energy dissipation structures in open channels.**
*   **Identify and describe the key design features of USBR Stilling Basins (Types I, II, III, IV).**
*   **Explain the hydraulic principles behind the operation of Standing Wave Flumes.**
*   **Describe the construction and operational characteristics of Parshall Flumes.**
*   **Compare and contrast the applicability and advantages/disadvantages of USBR Stilling Basins, Standing Wave Flumes, and Parshall Flumes.**

---

### 1. Energy Dissipation Structures in Open Channels

**Purpose:**
*   To safely dissipate the excess kinetic energy of high-velocity flow in open channels, preventing erosion and damage downstream.
*   Commonly used below spillways, sluice gates, drops, and other hydraulic structures that cause a rapid increase in flow velocity and a decrease in water depth.

**Key Concepts:**
*   **Specific Energy (E):** The sum of the flow depth (y) and the velocity head ($V^2/2g$). $E = y + V^2/2g$. Specific energy curves illustrate the relationship between depth and velocity for a given discharge.
*   **Critical Depth ($y_c$):** The depth at which specific energy is minimum for a given discharge. Flow at critical depth has a Froude number ($Fr = V/\sqrt{gy}$) of 1.
*   **Supercritical Flow:** Flow with a Froude number greater than 1. Characterized by high velocity and shallow depth.
*   **Subcritical Flow:** Flow with a Froude number less than 1. Characterized by low velocity and greater depth.
*   **Hydraulic Jump:** A phenomenon occurring when supercritical flow transitions to subcritical flow. This transition is accompanied by a significant increase in depth, a decrease in velocity, and substantial energy dissipation through turbulence. The length of the hydraulic jump is crucial for energy dissipation.

**Why Dissipation is Needed:**
*   **Erosion:** High-velocity jets can scour the channel bed and banks, leading to structural damage and sedimentation problems downstream.
*   **Structural Integrity:** Undesipated energy can cause vibrations and cavitation in downstream structures.
*   **Water Surface Control:** Dissipation helps to stabilize the water surface and prevent downstream flooding or adverse hydraulic conditions.

---

### 2. USBR Stilling Basins

**Developed by the U.S. Bureau of Reclamation (USBR) for efficient energy dissipation.** They are primarily designed to create a controlled hydraulic jump downstream of a structure.

**General Design Principles:**
*   **Sufficient length to contain the hydraulic jump.** The length is determined by the Froude number of the incoming supercritical flow.
*   **Appropriate width to accommodate the flow.**
*   **Use of appurtenances (chutes, blocks, sills) to promote jump formation and stability.**

---

#### 2.1 USBR Stilling Basin Type I

*   **Description:** The simplest type, consisting of a rectangular chute terminating in a concrete apron. It's suitable for low to moderate Froude numbers ($F_1$ from 1.7 to 4.5).
*   **Design Features:**
    *   **Apron:** A paved, impervious downstream floor designed to withstand the forces of the hydraulic jump.
    *   **Length:** Determined by empirical formulas and hydraulic jump length charts based on $F_1$.
    *   **Width:** Generally the same as the approach channel or chute.
*   **Limitations:** Less effective for higher Froude numbers, as the jump may extend beyond the apron, and energy dissipation is less efficient.

---

#### 2.2 USBR Stilling Basin Type II

*   **Description:** An enhanced Type I basin designed for moderate to high Froude numbers ($F_1$ from 4.5 to 9.0). It incorporates specific appurtenances to stabilize and shorten the hydraulic jump.
*   **Design Features:**
    *   **Uprush Guard (or Toe Protection):** A low sill at the end of the apron to prevent upstream sweep of the jump.
    *   **Chute Blocks:** Upstream floor blocks that break the continuous supercritical flow into jets, promoting turbulence and jump formation.
    *   **Solid Downstream Apron:** A continuous concrete floor extending downstream.
*   **Advantages:** More effective energy dissipation than Type I for moderate to high $F_1$.

---

#### 2.3 USBR Stilling Basin Type III

*   **Description:** Designed for very high Froude numbers ($F_1$ from 4.5 to 9.0, sometimes extended to 17.0). It uses a transition chute and additional appurtenances for maximum energy dissipation.
*   **Design Features:**
    *   **Transition Chute:** Narrows the flow at the downstream end to increase the velocity and ensure a higher $F_1$ for jump formation within the basin.
    *   **Chute Blocks:** Similar to Type II, to break up the flow.
    *   **Splayed Walls:** The downstream walls are splayed outwards, reducing the velocity and providing better mixing.
    *   **Solid Downstream Apron:** Extends downstream from the jump.
*   **Advantages:** Highly effective for high $F_1$ flows.

---

#### 2.4 USBR Stilling Basin Type IV

*   **Description:** Designed for a wide range of Froude numbers ($F_1$ from 2.5 to 17.0). It is a highly efficient basin featuring a combination of appurtenances for robust energy dissipation.
*   **Design Features:**
    *   **Transition Chute:** Similar to Type III, often with a constant width.
    *   **Chute Blocks:** Upstream floor blocks.
    *   **Dentinment Wall (or End Sill):** A solid concrete wall at the downstream end of the apron. This sill is designed to raise the water surface and ensure the jump occurs fully within the basin. The height of the dentention wall is critical and depends on $F_1$ and the tailwater depth.
    *   **Flared Walls:** Downstream walls are flared outwards to dissipate energy through expansion and mixing.
*   **Advantages:** Very versatile and effective across a wide range of $F_1$. Often preferred for its reliability.

---

### 3. Standing Wave Flume

**Purpose:** A type of critical-depth flume used for measuring discharge in open channels. It operates by creating a standing wave (a controlled hydraulic jump) within a specially shaped channel section.

**Key Concepts:**
*   **Critical Flow Condition:** The flume is designed such that critical depth occurs at a specific control section (usually a constriction or hump).
*   **Standing Wave:** The desired hydraulic jump is intentionally created at the downstream end of the flume or within a downstream section, where the downstream water level is sufficiently high.
*   **Stage-Discharge Relationship:** The discharge is uniquely related to the upstream water level (stage) for a given flume geometry, provided the flow is choked by the critical section and the downstream condition doesn't interfere.

**Design Features:**
*   **Approach Section:** A smooth, straight section upstream of the control section.
*   **Constriction or Hump:** A section where the channel width is reduced or a raised floor creates a constriction. This forces the flow to pass through critical depth.
*   **Throat Section:** The narrowest part of the constriction.
*   **Downstream Section:** This section can be a simple widening or designed to create a stable standing wave. The tailwater condition must be managed such that it does not drown the critical control section.
*   **Measurement Point:** The water level is measured upstream of the influence of the standing wave or constriction.

**Hydraulic Principles:**
1.  **Critical Depth at Throat:** The flume is designed so that critical depth ($y_c$) occurs at the throat of the constriction or at the crest of the hump.
2.  **Choking:** The flow at critical depth acts as a control. Any increase in downstream water level will not significantly affect the discharge as long as the critical section remains the control.
3.  **Discharge Calculation:** The discharge ($Q$) is calculated using the specific energy at the measurement section and the flow depth at that section, or more commonly, using empirical equations derived from the flume's geometry and calibration. For a flume with a critical control section:
    $Q = C \times H^{n}$
    Where:
    *   $C$ is a discharge coefficient.
    *   $H$ is the upstream water level (head) above a reference point.
    *   $n$ is an exponent, often around 1.5 or 2.5 depending on the flume design.

**Advantages:**
*   **Accurate Discharge Measurement:** Provides a reliable method for flow measurement.
*   **No Moving Parts:** Simple and robust.
*   **Low Head Loss:** Generally a small head loss compared to many other flow measurement devices.

**Disadvantages:**
*   **Requires Calibration:** The discharge coefficient needs to be determined through calibration.
*   **Sensitive to Downstream Conditions:** If the downstream water level is too high, it can drown the critical control section, invalidating the measurement.
*   **Potential for Sediment Accumulation:** Can be susceptible to sediment deposition if not properly designed or maintained.

---

### 4. Parshall Flume

**Purpose:** A well-known and widely used type of critical-depth flume for measuring discharge in open channels, particularly in irrigation and agricultural settings.

**Design Features:**
*   **Converging Section:** A section where the channel width gradually narrows. This leads to an increase in velocity and a decrease in depth.
*   **Throat Section:** The narrowest section of the flume, where the critical depth is established. It is typically a straight, parallel section.
*   **Diverging Section:** A section where the channel width gradually widens. This section is designed to recover some of the energy lost due to the constriction, minimizing the head loss across the flume.
*   **Stilling Pool (Optional but Recommended):** A downstream pool can help to stabilize the downstream water level and prevent erosion.
*   **Crest (Optional):** Some designs may incorporate a slight hump or crest to ensure critical flow.
*   **Standardized Designs:** Parshall flumes are highly standardized, with specific dimensions and discharge tables available for different sizes.

**Hydraulic Principles:**
1.  **Critical Flow at Throat:** Similar to standing wave flumes, the Parshall flume is designed such that critical flow occurs at the throat. The geometry ensures that the throat is the control section.
2.  **Free Flow vs. Drowned Flow:**
    *   **Free Flow:** The downstream water level is sufficiently low that it does not influence the flow at the throat. The discharge is a function of the upstream head ($H_a$) measured at a specific point upstream of the converging section.
    *   **Drowned Flow:** The downstream water level is high enough to affect the flow at the throat. In this condition, the discharge is a function of both the upstream head ($H_a$) and the downstream head ($H_b$) measured in the diverging section.
3.  **Discharge Calculation (Free Flow):** For free flow conditions, the discharge ($Q$) is calculated using standardized empirical formulas based on the upstream head ($H_a$):
    $Q = C \times W \times H_a^{1.522 W^{0.026}}$ (This is a simplified representation; actual formulas are more complex and tabular data is often used).
    Where:
    *   $C$ is a constant.
    *   $W$ is the width of the throat in feet.
    *   $H_a$ is the upstream head in feet.

**Advantages:**
*   **Robust and Reliable:** Widely tested and proven for accuracy.
*   **Standardized Sizes:** Available in various standard sizes, simplifying selection and installation.
*   **Tolerant of Silt and Debris:** The open throat and diverging section are less prone to clogging than some other devices.
*   **Relatively Low Head Loss:** The diverging section helps to recover head.
*   **Can Measure Flow in Drowned Conditions:** With appropriate measurement, it can still measure flow even when partially drowned.

**Disadvantages:**
*   **Requires Installation in a Straight Channel:** Needs a straight approach and downstream section for accurate operation.
*   **Less Accurate in Drowned Conditions:** Accuracy decreases when the flume is significantly drowned.
*   **Cost:** Can be more expensive to construct than simple weirs or other flumes.
*   **Relies on Accurate Water Level Measurement:** The accuracy of the discharge measurement depends heavily on the precision of the head measurement.

---

### 5. Comparison and Applicability

| Feature             | USBR Stilling Basins                                 | Standing Wave Flume                                      | Parshall Flume                                           |
| :------------------ | :--------------------------------------------------- | :------------------------------------------------------- | :------------------------------------------------------- |
| **Primary Purpose** | Energy Dissipation                                   | Discharge Measurement                                    | Discharge Measurement                                    |
| **Key Principle**   | Controlled Hydraulic Jump                            | Critical Depth Control                                   | Critical Depth Control                                   |
| **Applicability**   | Below spillways, gates, drops, etc.                  | Irrigation canals, small streams, sewage channels        | Irrigation canals, agricultural channels, effluent channels |
| **Froude Number Range** | Wide range ($F_1$ 1.7 - 17+) depending on type | Dependent on design, but aims for critical flow          | Optimized for critical flow at the throat              |
| **Design Complexity** | Moderate to High (depends on type)                   | Moderate                                                 | Standardized, but specific geometry required             |
| **Head Loss**       | High (intentional for dissipation)                   | Low                                                      | Relatively low                                           |
| **Energy Dissipation** | High                                                 | Low (some minor dissipation)                             | Low (some minor dissipation)                             |
| **Sediment/Debris** | Can handle high-velocity flow but design matters     | Can be prone to deposition if not maintained             | Relatively tolerant                                      |
| **Cost**            | High (due to size and complexity)                    | Moderate                                                 | Moderate to High (depending on size)                     |
| **Advantages**      | Effective energy dissipation, prevents scour         | Accurate measurement, low head loss, no moving parts     | Reliable, standardized, tolerant of debris, measures drowned flow |
| **Disadvantages**   | Large footprint, high cost                           | Requires specific downstream conditions, calibration needed | Requires straight approach, accuracy reduces when drowned |

---

### 6. Practice Questions and Exercises

**Question 1:**
What is the primary purpose of a stilling basin in open channel hydraulics?
a) To increase flow velocity
b) To dissipate energy and prevent scour
c) To measure discharge
d) To control water level

**Question 2:**
Which USBR stilling basin type is generally considered the most versatile and effective across a wide range of Froude numbers?
a) Type I
b) Type II
c) Type III
d) Type IV

**Question 3:**
A standing wave flume operates by creating a controlled phenomenon at a specific section. What is this phenomenon called?
a) Subcritical flow
b) Critical flow
c) Supercritical flow
d) Hydraulic jump (standing wave)

**Question 4:**
In a Parshall flume, if the downstream water level rises significantly, affecting the flow at the throat, the flume is said to be operating under:
a) Free flow conditions
b) Drowned flow conditions
c) Critical flow conditions
d) Subcritical flow conditions

**Question 5:**
List two key design features common to most USBR stilling basins designed for energy dissipation.

**Question 6 (Calculation):**
A USBR Type II stilling basin is designed for an incoming supercritical flow with a Froude number ($F_1$) of 6.0.
(a) What are the typical appurtenances found in a Type II basin?
(b) What is the primary hydraulic phenomenon this basin aims to utilize for energy dissipation?

**Question 7 (Comparison):**
Compare and contrast the primary function and a key advantage of a Parshall flume versus a USBR Stilling Basin.

---

### Answers to Practice Questions

**Answer 1:**
b) To dissipate energy and prevent scour

**Answer 2:**
d) Type IV

**Answer 3:**
d) Hydraulic jump (standing wave)

**Answer 4:**
b) Drowned flow conditions

**Answer 5:**
Two key design features include:
*   **Apron:** A paved downstream floor to withstand hydraulic forces.
*   **Appurtenances:** Such as chute blocks, dentention walls, or splayed walls to promote jump formation and stability. (Any two of these are acceptable).

**Answer 6:**
(a) Typical appurtenances in a USBR Type II basin include chute blocks and a solid downstream apron.
(b) The primary hydraulic phenomenon is the **hydraulic jump**, which dissipates energy through turbulence.

**Answer 7:**
*   **Primary Function:**
    *   **Parshall Flume:** Discharge measurement.
    *   **USBR Stilling Basin:** Energy dissipation.
*   **Key Advantage:**
    *   **Parshall Flume:** Reliable and standardized for flow measurement, relatively low head loss.
    *   **USBR Stilling Basin:** Effectively prevents erosion and protects downstream structures by dissipating high kinetic energy.

---

### Important Points to Remember:

*   **Froude Number (Fr):** Crucial for classifying flow regimes (subcritical, critical, supercritical) and designing energy dissipation structures. $Fr = V/\sqrt{gy}$.
*   **Hydraulic Jump:** The fundamental process for energy dissipation in USBR stilling basins, converting supercritical to subcritical flow.
*   **Critical Depth:** The depth at which specific energy is minimum for a given discharge, essential for critical-depth flumes (Standing Wave and Parshall).
*   **Stage-Discharge Relationship:** The core principle for flow measurement using flumes, where water level (stage) is directly related to discharge.
*   **Downstream Conditions:** Always critical for the performance of both energy dissipators and flow measurement structures. For flumes, the downstream level can cause drowning, affecting accuracy. For stilling basins, the tailwater depth influences the tailwater rating curve and energy dissipation efficiency.
*   **Standardization:** Parshall flumes are highly standardized, making selection and operation straightforward. USBR basins have types, but their specific dimensions are often site-specific.
*   **Purpose Driven Design:** Energy dissipators are designed to *dissipate*, while flumes are designed to *measure*. This fundamental difference dictates their features and applications.
