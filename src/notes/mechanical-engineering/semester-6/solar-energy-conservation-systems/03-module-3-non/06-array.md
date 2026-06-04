---
title: "Array"
subject: "SOLAR ENERGY CONSERVATION SYSTEMS"
module: "Module 3: Non"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463bd0"
status: "completed"
scrapedAt: "2026-05-20T18:08:22.917Z"
---
This is a very comprehensive request! I will generate detailed study notes for the topic "Array" within Module 3: Non in SOLAR ENERGY CONSERVATION SYSTEMS. Given the topic "Array" within a "Non" module, and without further specific context on what "Non" might refer to (e.g., Non-Concentrating Collectors, Non-PV Systems), I will focus on the common understanding of "solar array" in the context of photovoltaic (PV) systems, as this is a very prevalent aspect of solar energy conservation systems. If "Non" refers to something else, please provide clarification.

I will structure the notes to cover the provided learning outcomes and align with the course outcomes and their knowledge levels. I will also incorporate concepts from the specified textbooks.

---

# SOLAR ENERGY CONSERVATION SYSTEMS

## Module 3: Non (Focus on Photovoltaic Arrays)

## Topic: Array

### Introduction to Solar Arrays

A solar array, specifically a photovoltaic (PV) array, is a collection of interconnected solar panels (modules) that work together to convert sunlight directly into electricity. This topic delves into the fundamental aspects of designing, understanding, and evaluating solar PV arrays.

---

### Learning Outcomes Covered:

*   **Understanding the composition and function of a solar array.**
*   **Factors influencing the performance of a solar array.**
*   **Methods for connecting solar panels to form an array.**
*   **Designing and optimizing solar arrays for specific applications.**
*   **Evaluating the performance and economics of solar arrays.**

---

### Alignment with Course Outcomes:

*   **CO1: Understand the basic concepts of solar radiation, the sun-earth relationship, and the effects of the atmosphere on solar energy.**
    *   *(K2)* While not the primary focus of "Array," understanding incident solar radiation is crucial for array performance.
*   **CO2: Able to recall the various types of solar collectors and their theoretical principles, including flat plate collectors and concentrating collectors.**
    *   *(K1)* This topic focuses on PV modules (which are a type of solar collector in a broader sense) and their arrangement, rather than the detailed principles of flat-plate or concentrating collectors themselves. However, the performance of PV modules is directly linked to the solar radiation they receive.
*   **CO3: Apply thermal analysis techniques to different solar collectors and implement design principles for both standalone and grid-connected PV systems.**
    *   *(K3)* This is a **key outcome** for the "Array" topic, as designing arrays involves electrical and spatial considerations for PV systems, often with thermal implications for module performance.
*   **CO4: Understand the methods for calculating plant economy, including life cycle cost, payback period, and the relevance of economic feasibility evaluations for energy technologies.**
    *   *(K2)* Array sizing and performance directly impact the economic viability of a solar energy system.

---

## Key Concepts and Definitions

### 1. Solar Panel (Photovoltaic Module)

*   **Definition:** The fundamental building block of a solar array, composed of multiple solar cells connected in series and/or parallel and encapsulated to form a weatherproof unit.
*   **Function:** Converts photons from sunlight into direct current (DC) electricity through the photovoltaic effect.
*   **Key Components:**
    *   **Solar Cells:** Semiconductor devices (typically silicon) that generate electricity.
    *   **Encapsulant:** Protects cells from environmental damage (e.g., EVA - Ethylene Vinyl Acetate).
    *   **Backsheet:** Provides electrical insulation and protection to the rear of the module.
    *   **Front Cover:** Usually tempered glass, provides protection and allows maximum light transmission.
    *   **Frame:** Typically aluminum, provides structural integrity and mounting points.
    *   **Junction Box:** Contains bypass diodes and output terminals.
*   **Reference:** Sukhatme, Chapter 9: Photovoltaic Systems; Goswami, Kreith, & Kreider, Chapter 10: Photovoltaics.

### 2. Solar Array

*   **Definition:** An assembly of two or more solar panels connected together, either electrically or structurally, to produce a desired amount of electrical power.
*   **Function:** To generate sufficient DC electricity by combining the output of individual PV modules.
*   **Types of Connections:**
    *   **Series Connection:** Increases voltage; current remains the same as the lowest-current panel.
        *   *Example:* Connecting two 12V, 5A panels in series results in a 24V, 5A output.
        *   *Important Note:* If one panel in a series string is shaded or faulty, it can significantly reduce the output of the entire string due to the lowest current limitation.
    *   **Parallel Connection:** Increases current; voltage remains the same as the lowest-voltage panel.
        *   *Example:* Connecting two 12V, 5A panels in parallel results in a 12V, 10A output.
        *   *Important Note:* Panels must have very similar voltage characteristics to avoid current flow from one panel to another, potentially causing damage.
    *   **Series-Parallel Connection:** A combination of series and parallel connections to achieve desired voltage and current ratings. This is the most common method for larger arrays.
        *   *Example:* Two strings of two series-connected panels in parallel. (Panel1-Panel2 in series, Panel3-Panel4 in series, then String1 parallel to String2).

*   **Reference:** Messenger & Ventre, Chapter 4: PV Module Interconnections; Solanki, Chapter 3: PV Module Interconnection.

### 3. Array Configuration (Layout)

*   **Definition:** The physical arrangement of solar panels within the array. This is crucial for optimizing energy capture and minimizing shading.
*   **Factors Influencing Configuration:**
    *   **Site Constraints:** Available area, roof shape, ground slope.
    *   **Shading:** Obstacles like trees, buildings, chimneys, or other rows of panels.
    *   **Tilt Angle:** The angle at which panels are inclined relative to the horizontal.
    *   **Azimuth Angle:** The orientation of the array relative to true south (in the Northern Hemisphere) or true north (in the Southern Hemisphere).
    *   **Spacing:** Distance between rows or panels to avoid self-shading.
*   **Types of Mounting Structures:**
    *   **Fixed Mount:** Panels are mounted at a fixed tilt and azimuth.
    *   **Single-Axis Tracker:** Panels rotate on one axis (e.g., east-west) to follow the sun's path.
    *   **Dual-Axis Tracker:** Panels rotate on two axes (e.g., east-west and north-south) to continuously face the sun directly.

*   **Reference:** Sukhatme, Chapter 9: Photovoltaic Systems (discusses orientation); Goswami, Kreith, & Kreider, Chapter 10: Photovoltaics (discusses mounting).

### 4. Array Performance Parameters

*   **Rated Power (kWp or Wp):** The maximum power output of the array under Standard Test Conditions (STC).
    *   *STC:* Irradiance of 1000 W/m², cell temperature of 25°C, and Air Mass of 1.5.
*   **Fill Factor (FF):** A measure of the "squareness" of the PV cell's I-V curve, indicating how well the cell operates at its maximum power point.
    *   $FF = (V_{mp} \times I_{mp}) / (V_{oc} \times I_{sc})$
    *   Where $V_{mp}$ is voltage at maximum power, $I_{mp}$ is current at maximum power, $V_{oc}$ is open-circuit voltage, and $I_{sc}$ is short-circuit current.
*   **Performance Ratio (PR):** A measure of the overall performance of the PV system, defined as the ratio of the actual energy delivered to the theoretical energy that could be delivered based on the rated power and incident solar radiation.
    *   $PR = E_a / E_{th}$
    *   Where $E_a$ is actual energy output and $E_{th}$ is theoretical energy output. A higher PR indicates better system performance.
*   **Capacity Factor:** The ratio of the actual energy produced over a period to the maximum possible energy that could have been produced if the array operated at its rated power continuously during that period.

*   **Reference:** Sukhatme, Chapter 9: Photovoltaic Systems; Messenger & Ventre, Chapter 3: PV Module Electrical Characteristics.

### 5. Shading Effects

*   **Definition:** When sunlight is blocked from reaching one or more solar panels by an obstruction.
*   **Impact:** Shading can drastically reduce the output of an entire array, especially if panels are not adequately protected.
    *   **Series Strings:** A shaded panel in a series string acts as a resistor, limiting the current for the entire string. This can lead to significant power loss and potential hot spots.
    *   **Bypass Diodes:** These are often incorporated into PV modules to mitigate the impact of partial shading. When a panel is significantly shaded, its bypass diode conducts, effectively bypassing the shaded panel and allowing the rest of the string to continue producing power.
*   **Mitigation:**
    *   Careful array siting and design to avoid known shading sources.
    *   Using string inverters with Maximum Power Point Tracking (MPPT) for each string.
    *   Using microinverters or DC optimizers attached to individual panels.
    *   Proper placement and use of bypass diodes.

*   **Reference:** Messenger & Ventre, Chapter 5: PV System Components (discusses bypass diodes); Solanki, Chapter 3: PV Module Interconnection (discusses shading).

### 6. Array Sizing and Design Considerations

*   **Load Matching:** The array must be sized to meet the electrical demand of the connected load (e.g., household appliances, grid demand).
*   **Energy Requirements:** Calculate the daily and annual energy consumption in kWh.
*   **Solar Resource:** Determine the average daily solar radiation (insolation) available at the site. This is often expressed in kWh/m²/day or Peak Sun Hours.
*   **System Losses:** Account for various losses, including:
    *   **Temperature Losses:** PV module efficiency decreases with increasing temperature.
    *   **Soiling Losses:** Dust, dirt, and debris on panel surfaces.
    *   **Mismatch Losses:** Variations in performance between panels in an array.
    *   **Inverter Losses:** Efficiency of the DC-to-AC converter (for grid-connected systems).
    *   **Wiring Losses:** Resistance in electrical connections.
    *   **Shading Losses:** As discussed above.
*   **Tilt and Azimuth Optimization:** Selecting the optimal tilt and azimuth angles maximizes annual energy production. This often involves modeling based on location and latitude.
    *   *General Rule of Thumb:* For fixed-tilt systems, a tilt angle roughly equal to the site's latitude is often a good starting point for annual optimization. Adjustments can be made for seasonal optimization (steeper tilt for winter, shallower for summer).

*   **Reference:** Goswami, Kreith, & Kreider, Chapter 10: Photovoltaics; Sukhatme, Chapter 9: Photovoltaic Systems; Boxwell, Chapters on System Design.

### 7. Economic Evaluation of Arrays

*   **Levelized Cost of Energy (LCOE):** The average cost per unit of electricity generated by the PV system over its lifetime.
    *   $LCOE = \frac{\text{Total Lifetime Cost}}{\text{Total Lifetime Energy Production}}$
    *   **Lifetime Cost:** Includes initial capital costs, installation, maintenance, operation, and financing.
    *   **Lifetime Energy Production:** Array size multiplied by annual energy production, considering degradation.
*   **Payback Period:** The time it takes for the cumulative savings or revenue generated by the PV system to equal the initial investment.
    *   *Simple Payback:* Initial Investment / Annual Savings
    *   *Discounted Payback:* Considers the time value of money.
*   **Net Present Value (NPV):** The difference between the present value of cash inflows and the present value of cash outflows over a period of time. A positive NPV indicates a profitable investment.
*   **Internal Rate of Return (IRR):** The discount rate at which the NPV of all cash flows from a particular project equals zero. It represents the effective rate of return of an investment.

*   **Reference:** Sukhatme, Chapter 7: Economics of Solar Energy Systems; Tiwari, Chapter 15: Economic Analysis of Solar Energy Systems.

---

## Important Points to Remember

*   **Series vs. Parallel:** Understand the voltage and current implications of each connection type. Mismatched panels in series are particularly problematic.
*   **Shading is Critical:** Even partial shading can drastically reduce array output. Design and mitigation strategies are essential.
*   **STC vs. Real-World Conditions:** STC is a benchmark; actual performance is affected by temperature, soiling, irradiance levels, and other factors.
*   **Tilt and Azimuth:** Proper orientation is key to maximizing energy yield.
*   **Performance Ratio (PR):** A good indicator of how well a system is performing relative to its potential.
*   **Economic Viability:** Beyond technical performance, understanding LCOE, payback period, and NPV is crucial for project success.
*   **Bypass Diodes:** They are protective components that help in partial shading scenarios but do not eliminate the performance loss entirely.

---

## Practice Questions and Exercises

**Question 1 (CO3 - K3):**

You have four identical solar panels, each rated at 20V and 3A.
a) If you connect two panels in series, and then connect another two panels in series to form two strings, and finally connect these two strings in parallel, what is the total voltage and current of the resulting array?
b) If one of the panels in the first series string experiences significant shading, what would be the likely impact on the output of that string compared to the unshaded string? (Assume no bypass diodes for simplicity in this part).

**Answer 1:**
a)
*   First string (2 panels in series): 20V + 20V = 40V, 3A.
*   Second string (2 panels in series): 20V + 20V = 40V, 3A.
*   Connecting the two strings in parallel: Voltage remains 40V. Current becomes 3A + 3A = 6A.
*   Total array output: **40V, 6A**.

b) If one panel in the first series string is shaded, its current output will drop significantly (e.g., to 1A). Since panels in series are limited by the lowest current, the entire first string's current will drop to that shaded panel's current (1A). The second string, being unshaded, will continue to produce 3A. When these strings are connected in parallel, the voltage of the first string will be lower due to the reduced current through its internal resistance and the panel's lower voltage under shade. The overall output of the array will be significantly reduced, primarily limited by the shaded string's reduced current and voltage.

**Question 2 (CO4 - K2):**

A small off-grid solar PV system costs $10,000 upfront and is expected to generate $1,200 worth of electricity savings per year. Calculate the simple payback period for this system. If the system has a lifespan of 25 years and the total energy generated over its lifetime is 100,000 kWh, what is the LCOE if the total lifetime costs (including maintenance) are $15,000?

**Answer 2:**
*   **Simple Payback Period:**
    *   Simple Payback = Initial Investment / Annual Savings
    *   Simple Payback = $10,000 / $1,200/year = **8.33 years**

*   **Levelized Cost of Energy (LCOE):**
    *   LCOE = Total Lifetime Cost / Total Lifetime Energy Production
    *   LCOE = $15,000 / 100,000 kWh = **$0.15/kWh**

**Question 3 (CO1 & CO3 - K2/K3):**

Explain how ambient temperature affects the power output of a solar PV array. Refer to the concept of temperature coefficient of power.

**Answer 3:**
Solar PV modules' power output decreases as their temperature increases. This is because higher temperatures increase the kinetic energy of electrons within the semiconductor material, leading to increased recombination of charge carriers and a reduction in voltage.

The **temperature coefficient of power (Pmax)**, typically expressed in %/°C or %/K, quantifies this effect. Most silicon-based PV modules have a negative temperature coefficient. For example, a typical module might have a temperature coefficient of -0.3%/°C. This means that for every degree Celsius the module temperature rises above the STC temperature of 25°C, its maximum power output will decrease by 0.3%.

*   *Example:* If a panel rated at 300Wp at 25°C operates at 50°C (a 25°C increase), its power output would decrease by approximately:
    *   Power Loss = 25°C * (-0.3%/°C) = -7.5%
    *   Actual Power Output ≈ 300Wp * (1 - 0.075) = 300Wp * 0.925 = 277.5Wp.

Therefore, understanding site-specific ambient temperatures and the module's temperature coefficient is crucial for accurate array performance prediction and sizing.

---

This concludes the study notes for the "Array" topic within Module 3. Remember to consult your textbooks for more in-depth explanations and detailed calculations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
