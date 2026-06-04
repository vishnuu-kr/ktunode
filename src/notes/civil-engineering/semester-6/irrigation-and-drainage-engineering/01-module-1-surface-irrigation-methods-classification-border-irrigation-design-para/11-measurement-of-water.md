---
title: "Measurement of water"
subject: "IRRIGATION AND DRAINAGE ENGINEERING"
module: "Module 1: Surface Irrigation methods : Classification – Border irrigation: design parameters, evaluation and ideal wetting pattern"
branch: "Civil Engineering"
semester: 6
topicId: "689f15ce56b5e963ba811104"
status: "completed"
scrapedAt: "2026-05-20T18:55:00.096Z"
---
# IRRIGATION AND DRAINAGE ENGINEERING: Module 1 - Surface Irrigation Methods
## Topic: Measurement of Water

This module focuses on surface irrigation methods, specifically border irrigation. This topic delves into the crucial aspect of accurately measuring the water applied during irrigation, which is fundamental for efficient water use, crop health, and proper design of irrigation systems.

---

### Learning Outcomes:

Upon completion of this topic, you should be able to:

1.  **Identify and describe common methods for measuring irrigation water flow.**
2.  **Explain the principles behind different flow measurement devices.**
3.  **Discuss the factors influencing the selection of an appropriate flow measurement method.**
4.  **Understand the concept of water application depth and its calculation.**
5.  **Relate water measurement to irrigation efficiency and performance evaluation.**

---

### 1. Introduction to Water Measurement in Irrigation

Accurate measurement of irrigation water is vital for:

*   **Efficient Water Application:** Ensuring the right amount of water is delivered to the crop, avoiding both under-watering (stress) and over-watering (waste, waterlogging).
*   **Irrigation Design:** Calculating flow rates needed for specific border dimensions and application depths.
*   **Performance Evaluation:** Assessing how well an irrigation system is performing and identifying areas for improvement.
*   **Water Management and Allocation:** Fair distribution of water resources among users.
*   **Research and Data Collection:** Gathering reliable data for studies on crop water requirements and irrigation techniques.

---

### 2. Common Methods for Measuring Irrigation Water Flow

Irrigation water flow can be measured using various devices, broadly categorized into **gravimetric methods** (less common in field irrigation) and **volumetric/flow rate methods**. In surface irrigation, we primarily deal with flow rates and volumetric applications.

#### 2.1. Flow Rate Measurement Devices

These devices measure the volume of water passing through a given point per unit of time (e.g., liters per second (L/s), cubic meters per hour (m³/h), or cubic feet per second (cfs)).

##### 2.1.1. Weir and Flumes (Open Channel Flow Measurement)

Weirs and flumes are structures built into open channels (like canals or irrigation ditches) to create a controlled obstruction. The flow rate is determined by measuring the water level (head) behind or over the obstruction.

*   **Weirs:**
    *   **Definition:** A solid barrier built across an open channel over which water flows. The flow rate is dependent on the geometry of the weir crest and the head of water above it.
    *   **Types:**
        *   **Rectangular Weir:** Simple to construct, can handle larger flows.
        *   **Triangular (V-notch) Weir:** More sensitive for low flows, accurate for a range of flows.
    *   **Principle:** Based on the relationship between the water head and the discharge, often expressed by a formula like $Q = C \cdot L \cdot H^{3/2}$ (for rectangular) or $Q = C \cdot H^{5/2}$ (for V-notch), where:
        *   $Q$ = Discharge (flow rate)
        *   $C$ = Discharge coefficient (depends on weir geometry and flow conditions)
        *   $L$ = Length of the weir crest
        *   $H$ = Head of water above the weir crest
    *   **Advantages:** Relatively simple to install and understand, can be accurate when properly calibrated.
    *   **Disadvantages:** Can cause upstream ponding, susceptible to debris accumulation, requires careful installation and maintenance.

*   **Flumes:**
    *   **Definition:** A specially shaped open channel section designed to pass a known flow rate without significant upstream ponding. The flow rate is measured by the water level in a specific section of the flume.
    *   **Types:**
        *   **Parshall Flume:** Widely used, has a converging section, a throat, and a diverging section. The free flow condition in the throat allows for simple measurement of the head ($H_a$) upstream.
        *   **Venturi Flume:** Similar to Parshall flumes but with different geometry.
    *   **Principle:** Based on the flow through a constricted section where the water velocity increases and the head decreases. The discharge is related to the head measured at a specific point using a calibrated formula. For a Parshall flume, a common formula for free flow is $Q = 4WH_a^{1.5}$ (where W is the throat width and $H_a$ is the head in the approach section), though more complex empirical formulas exist.
    *   **Advantages:** Less prone to silting and debris than weirs, causes less upstream ponding, maintains a "free flow" condition over a wider range of downstream water levels.
    *   **Disadvantages:** More complex to construct than simple weirs, requires specific installation criteria.

##### 2.1.2. Flow Meters (In-Pipe Flow Measurement)

These devices are used when water is conveyed through pipes, which is common in modern irrigation systems, though less so for direct border irrigation unless it's the delivery point.

*   **Propeller Meters:**
    *   **Definition:** A propeller or turbine mounted in a pipe whose rotation speed is proportional to the flow rate.
    *   **Principle:** The kinetic energy of the flowing water rotates the propeller. The rotational speed is translated into a flow rate reading, often displayed digitally.
    *   **Advantages:** Relatively inexpensive, good for a wide range of flows, can be installed in-line.
    *   **Disadvantages:** Can be affected by debris, requires straight pipe lengths upstream and downstream for accurate readings, can cause a slight pressure drop.

*   **Magnetic Flow Meters (Mag Meters):**
    *   **Definition:** Measure flow rate by detecting the voltage induced by the movement of conductive fluid through a magnetic field.
    *   **Principle:** Based on Faraday's Law of Electromagnetic Induction. As a conductive fluid flows through a magnetic field, it generates a voltage proportional to its velocity.
    *   **Advantages:** No moving parts (less wear and tear), no obstruction to flow (no pressure drop), very accurate, suitable for dirty water.
    *   **Disadvantages:** More expensive than propeller meters, only work with conductive fluids (water is generally conductive enough).

*   **Orifice Meters:**
    *   **Definition:** A plate with a precisely sized opening inserted into a pipe. The flow rate is determined by measuring the pressure difference across the orifice.
    *   **Principle:** Creates a pressure drop due to the constriction. The discharge is calculated using Bernoulli's principle and a discharge coefficient.
    *   **Advantages:** Simple and relatively inexpensive.
    *   **Disadvantages:** Can cause significant pressure loss, prone to clogging by sediment, less accurate for varying flow rates.

##### 2.1.3. Current Meters

*   **Definition:** Devices with rotating blades (propeller or impeller) that measure the velocity of water at a specific point, typically in a channel or river.
*   **Principle:** The speed of rotation of the blades is calibrated to the water velocity. By measuring velocity at several points across a cross-section and knowing the area, the total discharge can be calculated.
*   **Advantages:** Useful for measuring flow in large canals or rivers where fixed structures are not feasible.
*   **Disadvantages:** Can be time-consuming and labor-intensive to obtain an accurate cross-sectional velocity profile, requires skilled operation.

---

### 3. Measuring Water Application Depth in Border Irrigation

In border irrigation, the goal is to apply a specific *depth* of water over the entire border length and width. This is achieved by controlling the *flow rate* and the *duration* of application.

*   **Water Application Depth (d):** The uniform depth of water applied to the soil surface.
    *   **Formula:** $d = \frac{Q \times t}{A}$
        *   $d$ = Water application depth (e.g., mm or inches)
        *   $Q$ = Flow rate supplied to the border (e.g., L/s or m³/s)
        *   $t$ = Duration of water application (e.g., seconds or hours)
        *   $A$ = Area of the border (e.g., m² or acres)

*   **Key Considerations for Border Irrigation:**
    *   **Flow Rate ($Q$):** The total flow delivered from the source to the head of the border. This needs to be measured accurately.
    *   **Application Time ($t$):** The time the measured flow is allowed to run into the border.
    *   **Border Area ($A$):** Calculated from the border length and width.
    *   **Uniformity:** The ideal is uniform application. In reality, there will be variations due to factors like intake rate, infiltration, and runoff.

*   **Example Calculation:**
    *   A border is 100 meters long and 10 meters wide (Area $A = 100 \text{ m} \times 10 \text{ m} = 1000 \text{ m}^2$).
    *   The irrigation water is supplied at a flow rate of 50 L/s.
    *   The farmer wants to apply a depth of 50 mm (0.05 m) of water.
    *   **Calculate the required application time (t):**
        *   Convert flow rate to m³/s: $50 \text{ L/s} = 0.05 \text{ m}^3\text{/s}$
        *   Rearrange the formula: $t = \frac{d \times A}{Q}$
        *   $t = \frac{0.05 \text{ m} \times 1000 \text{ m}^2}{0.05 \text{ m}^3\text{/s}}$
        *   $t = 1000 \text{ seconds}$
    *   Therefore, the water needs to be run for 1000 seconds (approximately 16.7 minutes) to apply a 50 mm depth.

---

### 4. Factors Influencing the Selection of a Flow Measurement Method

Choosing the right method depends on several factors:

*   **Accuracy Requirements:** Some applications demand higher precision than others.
*   **Flow Rate Range:** Different devices are suited for different flow ranges.
*   **Channel/Pipe Characteristics:** Open channel vs. closed conduit, size of the channel/pipe.
*   **Water Quality:** Presence of sediment, debris, or other contaminants.
*   **Cost of Installation and Maintenance:** Initial investment and ongoing upkeep.
*   **Ease of Operation and Reading:** Skill level of the operator.
*   **Availability of Power:** Some meters may require electricity.
*   **Pressure Drop Tolerance:** How much head loss is acceptable.
*   **Regulatory or Reporting Needs:** Specific standards might dictate the method.

**For Border Irrigation:**

*   At the source of water delivery (e.g., canal outlet), **weirs** or **flumes** are common for measuring the bulk flow entering the distribution system.
*   If water is delivered through a pipe to the head of the border, **propeller meters** or **magnetic flow meters** can be used.
*   **Current meters** are less common for direct border irrigation application measurement but might be used for characterizing source water flow.

---

### 5. Water Measurement and Irrigation Efficiency

Accurate water measurement is fundamental for calculating and improving irrigation efficiency.

*   **Water Application Efficiency ($E_a$):** The ratio of the amount of water stored in the root zone to the amount of water delivered to the field.
    *   $E_a = \frac{W_s}{W_d} \times 100\%$
        *   $W_s$ = Water stored in the root zone (calculated by measuring moisture change or irrigation requirement).
        *   $W_d$ = Water delivered to the field (measured using flow rate and time).
*   **Conveyance Efficiency ($E_c$):** Ratio of water delivered to the field to water diverted from the source.
*   **Distribution Uniformity ($DU$):** How evenly water is distributed across the field. While not directly a measurement of *total* water, understanding flow behavior using measurement devices helps in assessing uniformity.

**Importance:** By measuring the amount of water delivered ($W_d$) and estimating the amount beneficially used ($W_s$), farmers can calculate $E_a$. If $E_a$ is low, it indicates significant losses (e.g., deep percolation or surface runoff), and adjustments to flow rate, duration, or border design can be made.

---

### 6. Ideal Wetting Pattern and Water Measurement

While this topic focuses on water measurement, it's important to connect it to the ideal wetting pattern discussed in border irrigation.

*   **Ideal Wetting Pattern:** Uniform application of water across the entire border width and along its length, reaching the desired depth in the root zone without significant deep percolation below the root zone or excessive surface runoff.
*   **Role of Measurement:** Accurate measurement of flow rate and duration allows the irrigator to *control* the amount of water applied. This control is crucial for achieving the ideal wetting pattern.
    *   If the flow rate is too high for a given infiltration rate, water will run off the end of the border.
    *   If the flow rate is too low, the front of the border may become over-watered before the tail end receives sufficient water.
    *   The duration of application must be precisely controlled to deliver the target depth without over- or under-watering.

---

### Key Points to Remember:

*   **Accurate water measurement is the cornerstone of efficient irrigation.**
*   **Weirs and flumes are common for open channel flow measurement.**
*   **Flow meters are used for piped water delivery.**
*   **The relationship $d = Q \times t / A$ is fundamental for calculating application depth.**
*   **Choosing the right measurement device depends on various practical and technical factors.**
*   **Water measurement data is essential for calculating irrigation efficiencies ($E_a$) and improving water management.**
*   **Precise flow and time control, enabled by accurate measurement, is key to achieving the ideal wetting pattern in border irrigation.**

---

### Practice Questions and Exercises:

**Question 1:**
A farmer is using border irrigation and needs to apply a water depth of 75 mm to a border that is 120 meters long and 8 meters wide. The water is supplied through a pipe with a propeller meter, which reads a constant flow rate of 60 liters per second. How long should the water be applied to achieve the desired depth?

**Answer 1:**
*   **Calculate Border Area (A):**
    $A = \text{Length} \times \text{Width} = 120 \text{ m} \times 8 \text{ m} = 960 \text{ m}^2$
*   **Convert desired depth to meters (d):**
    $d = 75 \text{ mm} = 0.075 \text{ m}$
*   **Convert flow rate to cubic meters per second (Q):**
    $Q = 60 \text{ L/s} = 0.060 \text{ m}^3\text{/s}$
*   **Calculate application time (t) using $t = \frac{d \times A}{Q}$:**
    $t = \frac{0.075 \text{ m} \times 960 \text{ m}^2}{0.060 \text{ m}^3\text{/s}}$
    $t = \frac{72 \text{ m}^3}{0.060 \text{ m}^3\text{/s}} = 1200 \text{ seconds}$
*   **Convert to minutes:**
    $t = 1200 \text{ seconds} / 60 \text{ seconds/minute} = 20 \text{ minutes}$

    **Answer:** The water should be applied for 1200 seconds or 20 minutes.

**Question 2:**
List three different types of flow measurement devices and briefly describe their operating principle.

**Answer 2:**
1.  **Parshall Flume:** A structure with converging, throat, and diverging sections in an open channel. Flow rate is determined by measuring the water head at a specific point in the throat using a calibrated formula.
2.  **Propeller Meter:** A rotating propeller installed in a pipe. The speed of rotation is proportional to the water velocity and thus the flow rate, which is then displayed.
3.  **Triangular (V-notch) Weir:** A barrier with a V-shaped opening across an open channel. The flow rate is calculated based on the height of the water above the V-notch crest.

**Question 3:**
What are the key advantages of using a Parshall flume over a simple rectangular weir for flow measurement in an irrigation canal?

**Answer 3:**
Key advantages of a Parshall flume over a simple rectangular weir include:
*   **Less upstream ponding:** It causes less backwater effect, which is beneficial for maintaining flow in upstream channels.
*   **Less susceptible to silting and debris:** Its design is less prone to sediment accumulation and blockage by floating debris compared to weirs.
*   **Maintains free flow over a wider range:** It can accurately measure flow even when the downstream water level is relatively high, whereas weirs can become "submerged" and lose accuracy.

---
