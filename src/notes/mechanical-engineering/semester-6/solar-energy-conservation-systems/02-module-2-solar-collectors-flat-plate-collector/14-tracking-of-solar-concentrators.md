---
title: "Tracking of solar concentrators"
subject: "SOLAR ENERGY CONSERVATION SYSTEMS"
module: "Module 2: Solar collectors: Flat plate collector"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463bc6"
status: "completed"
scrapedAt: "2026-05-20T18:08:16.346Z"
---
# SOLAR ENERGY CONSERVATION SYSTEMS
## Module 2: Solar Collectors: Flat Plate Collectors
### Topic: Tracking of Solar Concentrators

---

### 1. Introduction to Solar Concentrators and Tracking (CO2, K1)

**Definition:** Solar concentrators are optical devices that use mirrors or lenses to redirect and focus sunlight onto a smaller area. This concentration of solar energy increases the intensity of radiation, leading to higher temperatures and improved efficiency in solar thermal systems.

**Why Tracking is Necessary:**
*   **Maximizing Incident Solar Radiation:** The sun's position in the sky changes throughout the day and year due to the Earth's rotation and revolution. For a concentrator to capture the maximum amount of solar energy, it must be continuously oriented to face the sun directly.
*   **Maintaining Optimal Focus:** Concentrators rely on precise alignment of reflective or refractive surfaces to focus sunlight onto a receiver. Deviations from this alignment due to the sun's movement will cause the focal point to shift, reducing the energy density and thermal performance.
*   **Improving System Efficiency:** By ensuring maximum energy capture and maintaining the optimal focal point, solar tracking systems significantly improve the overall energy output and efficiency of concentrating solar power (CSP) systems.

**Distinction from Flat Plate Collectors:**
While flat plate collectors are generally designed to be stationary and capture diffuse and direct radiation over a broad range of angles, concentrating collectors (e.g., parabolic troughs, solar dishes, heliostats) require precise alignment with the direct beam radiation from the sun. Therefore, tracking is **essential** for the effective operation of concentrating solar collectors, unlike most flat plate collectors.

**Key Concept:** *Direct Normal Irradiance (DNI)* is the most important parameter for concentrating solar collectors. Tracking systems aim to maximize the capture of DNI.

---

### 2. Types of Solar Tracking Systems (CO2, K1)

Solar tracking systems can be broadly categorized based on the number of axes of rotation:

#### 2.1. Single-Axis Tracking

*   **Description:** These systems track the sun's movement along one axis. The most common are:
    *   **North-South Axis (Polar Mount):** The collector rotates on an axis tilted to the local latitude, parallel to the Earth's axis of rotation. This tracks the sun's apparent movement from East to West throughout the day.
    *   **East-West Axis:** The collector rotates on a horizontal axis aligned East to West. This is often used for simpler tracking of the sun's daily path.
    *   **Horizontal North-South Axis:** The collector rotates on a horizontal axis that runs North-South. This tracks the sun's elevation changes throughout the day.

*   **Advantages:**
    *   Simpler mechanical design and control systems compared to dual-axis trackers.
    *   Lower cost of installation and maintenance.
    *   Can achieve significant energy gains over fixed-tilt systems.

*   **Disadvantages:**
    *   Less effective at capturing the sun's elevation changes throughout the year, especially during summer and winter.
    *   May not achieve the full potential energy gain compared to dual-axis tracking.

*   **Examples:**
    *   Parabolic trough collectors often use single-axis tracking, typically rotating on a North-South axis to follow the sun's East-West movement.

*   **Reference:** Sukhatme (2017) discusses various collector types and their mounting configurations, including single-axis tracking for parabolic collectors.

#### 2.2. Dual-Axis Tracking

*   **Description:** These systems track the sun's movement along two axes, allowing for precise alignment with the sun's position at all times.
    *   **Azimuth-Altitude (Alt-Azimuth) Tracking:** One axis (azimuth) rotates horizontally, and the other axis (altitude) rotates vertically. This is analogous to how a telescope tracks celestial objects.
    *   **Equatorial Tracking:** One axis is aligned with the Earth's polar axis (declination axis), and the other axis rotates perpendicular to it (hour axis). This simplifies tracking by compensating for the Earth's rotation.

*   **Advantages:**
    *   Maximizes solar energy capture throughout the day and year by always pointing directly at the sun.
    *   Can achieve the highest energy yields for concentrating systems.

*   **Disadvantages:**
    *   More complex mechanical design and control systems.
    *   Higher installation and maintenance costs.
    *   Can be more susceptible to wind loads due to their ability to orient in any direction.

*   **Examples:**
    *   Parabolic dish collectors and heliostat fields (for power tower systems) often use dual-axis tracking to maintain precise focus on the central receiver.

*   **Reference:** Goswami, Kreith, and Kreider (2015) provide detailed explanations of tracking mechanisms and their impact on CSP system performance, including dual-axis systems.

---

### 3. Tracking Control Strategies (CO3, K3)

The accuracy and efficiency of a tracking system depend on its control strategy.

#### 3.1. Active Tracking (Feedback Control)

*   **Description:** These systems use sensors to detect the sun's position and continuously adjust the collector orientation to maintain optimal alignment.
    *   **Light Sensor/Photodetector Control:** Typically uses differential photodiodes or light-sensitive resistors. When the sun's rays are not perpendicular to the sensor, an imbalance in the detected light creates a signal that drives motors to adjust the collector's position.
    *   **Celestial Algorithms:** These systems use pre-programmed algorithms based on astronomical data (date, time, location) to calculate the sun's precise position and command the actuators. This is often combined with feedback to correct for inaccuracies.

*   **Advantages:**
    *   High accuracy in tracking the sun.
    *   Can compensate for atmospheric refraction and other environmental factors.

*   **Disadvantages:**
    *   Requires additional sensors and complex control electronics.
    *   Can be susceptible to false readings from clouds or other bright objects.

*   **Reference:** Tiwari (2016) covers various control methods for solar systems, including sensor-based tracking for CSP.

#### 3.2. Passive Tracking (Thermosyphonic/Bias Control)

*   **Description:** These systems rely on the differential heating of a fluid or a bimetallic strip to cause movement. As the sun moves, it heats one side more than the other, creating a temperature difference that mechanically moves the tracker.
    *   **Thermosyphonic Tracking:** Typically involves two connected cylinders filled with a volatile fluid. As the sun moves, it heats one cylinder more, causing the fluid to vaporize and expand, shifting the balance and moving the tracker.

*   **Advantages:**
    *   Simple and robust design.
    *   No need for electronic sensors or complex controls.
    *   Lower cost.

*   **Disadvantages:**
    *   Lower accuracy compared to active tracking.
    *   Can be slow to respond to rapid changes in sun position.
    *   Performance can be affected by ambient temperature variations.

*   **Reference:** Boyle (2012) mentions passive tracking as a simpler alternative for some solar collectors.

---

### 4. Performance Improvements and Considerations (CO3, K3)

#### 4.1. Energy Gain from Tracking

*   **Comparison:** Tracking systems can increase the annual energy yield of concentrating solar collectors by **15-30%** compared to fixed-tilt systems, depending on the latitude, season, and type of tracker. Dual-axis trackers generally provide higher gains than single-axis trackers.
*   **Factors Affecting Gain:**
    *   **Latitude:** Higher latitudes experience greater variations in sun elevation and duration, leading to larger gains from tracking.
    *   **Collector Type:** The benefit of tracking is more pronounced for systems that rely heavily on direct beam radiation.
    *   **Weather Patterns:** Sunny climates benefit more from tracking than cloudy ones.

#### 4.2. Cost-Benefit Analysis

*   **Trade-off:** The increased energy output from tracking must be weighed against the additional cost of the tracking system (installation, maintenance, and energy consumption for the motors).
*   **Economic Feasibility:** The decision to use a tracking system is an economic one, depending on the levelized cost of energy (LCOE) and the project's overall financial viability. (Relates to CO4)

#### 4.3. Wind Loading and Structural Stability

*   **Impact:** Tracking systems are exposed to significant wind forces, especially when oriented towards the sun.
*   **Design Considerations:** Structures must be designed to withstand these loads, and control systems often include "stow" positions to orient the collectors into a safe, low-drag configuration during high winds.

#### 4.4. Shading and Inter-row Spacing (for large fields)

*   **Issue:** In large solar fields, collectors can shade each other, particularly when tracking.
*   **Mitigation:** Proper spacing between rows of collectors and careful selection of tracking strategies can minimize self-shading and maximize overall field output.

*   **Reference:** Messenger and Ventre (2012) discuss system design considerations, including the impact of environmental factors on PV system performance, which can be extended to CSP for tracking aspects like wind loads.

---

### 5. Examples of Concentrating Collectors Requiring Tracking

*   **Parabolic Troughs:** Use a parabolic reflector to focus sunlight onto a receiver tube located at the focal line. Typically use single-axis tracking.
*   **Parabolic Dishes:** Use a parabolic reflector to focus sunlight onto a receiver at the focal point. Require dual-axis tracking for maximum efficiency.
*   **Linear Fresnel Reflectors (LFRs):** Use long, narrow, flat or slightly curved mirrors to focus sunlight onto a stationary receiver tube above them. Can use single or dual-axis tracking.
*   **Heliostats (Power Towers):** Large, individually controlled mirrors that track the sun and reflect its energy onto a central receiver atop a tower. Require dual-axis tracking.

*   **Reference:** Solanki (2013) provides an overview of different solar technologies, including concentrating collectors and their operational requirements. Luque and Hegedus (2011) delve into the physics and engineering of solar energy conversion, relevant to understanding why tracking is critical for concentrators.

---

### 6. Key Points to Remember

*   **Concentrators need tracking:** Unlike most flat plate collectors, concentrating solar collectors *require* tracking to operate efficiently because they rely on direct beam radiation.
*   **Maximize DNI:** The primary goal of tracking is to maximize the capture of Direct Normal Irradiance (DNI).
*   **Single-axis vs. Dual-axis:** Single-axis trackers offer a balance of cost and performance, while dual-axis trackers provide the highest energy yields but at a higher cost and complexity.
*   **Control strategies:** Active (sensor-based or algorithmic) tracking is more accurate than passive tracking.
*   **Energy gain:** Tracking can significantly increase energy output, but the economic benefit must be carefully evaluated against the costs.
*   **Wind loads:** A critical design consideration for tracking systems.

---

### 7. Practice Questions and Answers

**Question 1:** Why is solar tracking essential for concentrating solar collectors but not for most flat plate collectors?
**Answer:** Concentrating collectors focus direct beam radiation onto a small receiver. This requires precise alignment with the sun's position, which changes continuously. Flat plate collectors, on the other hand, are designed to capture both direct and diffuse radiation over a wider range of angles, making them less sensitive to precise orientation.

**Question 2:** Differentiate between single-axis and dual-axis tracking systems. Provide an example of a collector type that typically uses each.
**Answer:**
*   **Single-axis tracking:** Follows the sun along one axis (e.g., East-West daily movement). Example: Parabolic troughs.
*   **Dual-axis tracking:** Follows the sun along two axes (e.g., daily East-West movement and seasonal elevation changes). Example: Parabolic dishes, Heliostats.

**Question 3:** What are the two main types of tracking control strategies? Briefly describe their operational principles.
**Answer:**
*   **Active Tracking:** Uses sensors (photodiodes) or calculations (celestial algorithms) to detect the sun's position and actively adjust the collector's orientation.
*   **Passive Tracking:** Relies on differential heating of materials (e.g., thermosyphonic effect) to mechanically move the tracker as the sun's position changes.

**Question 4:** What is the primary advantage of using a dual-axis tracking system compared to a fixed-tilt system for a parabolic dish collector?
**Answer:** The primary advantage is a significant increase in the amount of solar energy captured throughout the day and year. Dual-axis tracking ensures that the parabolic dish is always precisely aimed at the sun, maximizing the concentration of sunlight onto the receiver and thus increasing the thermal output and overall system efficiency.

**Question 5:** (Conceptual) A CSP project manager is deciding whether to invest in dual-axis trackers or single-axis trackers for a large solar field of parabolic troughs. What factors should they consider in their cost-benefit analysis?
**Answer:** The project manager should consider:
*   **Increased energy yield:** How much more energy will dual-axis trackers capture compared to single-axis trackers at the specific location?
*   **Additional capital cost:** The purchase and installation cost of dual-axis trackers is higher.
*   **Maintenance costs:** Dual-axis trackers have more complex mechanisms, potentially leading to higher maintenance.
*   **Energy consumption of trackers:** The motors in dual-axis trackers may consume more energy.
*   **Land usage:** The spacing requirements might differ.
*   **Reliability and lifespan:** The robustness of each system.
*   **Local weather conditions:** Wind loads and cloud cover can influence the effectiveness of each system.
*   **Financial incentives and electricity prices:** To determine the payback period and overall economic viability.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
