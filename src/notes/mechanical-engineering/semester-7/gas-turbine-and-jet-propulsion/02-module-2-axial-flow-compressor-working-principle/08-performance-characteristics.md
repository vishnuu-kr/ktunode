---
title: "performance characteristics"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 2: Axial flow compressor – Working principle"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463ca6"
status: "completed"
scrapedAt: "2026-05-20T18:13:52.655Z"
---
# Gas Turbine and Jet Propulsion: Module 2 - Axial Flow Compressor - Performance Characteristics

## Introduction to Axial Flow Compressors

Axial flow compressors are crucial components in gas turbine engines, responsible for increasing the pressure of the incoming air. They achieve this through a series of rotating blades (rotors) and stationary blades (stators) arranged axially. Understanding their performance characteristics is vital for designing and operating efficient gas turbine systems.

**Key Concepts:**

*   **Pressure Ratio (π):** The ratio of the total pressure at the compressor outlet to the total pressure at the compressor inlet. A higher pressure ratio generally indicates a more efficient compression process.
    *   **Total Pressure Ratio:** $ \pi_c = \frac{P_{t2}}{P_{t1}} $
*   **Work Input Factor:** A dimensionless parameter representing the amount of work required to compress a unit mass of air.
*   **Isentropic Efficiency ($ \eta_{is} $):** The ratio of the ideal (isentropic) work input to the actual work input required to achieve the same pressure rise.
    *   $ \eta_{is} = \frac{\text{Isentropic work}}{\text{Actual work}} = \frac{h_{t2s} - h_{t1}}{h_{t2} - h_{t1}} $ (for ideal gas, $ h = c_p T $)
    *   $ \eta_{is} = \frac{T_{t2s} - T_{t1}}{T_{t2} - T_{t1}} $
*   **Polytropic Efficiency ($ \eta_{poly} $):** An efficiency defined for an infinite number of stages, representing the work done over a continuous compression process.
    *   $ \eta_{poly} = \frac{\ln(P_{t2}/P_{t1})}{ \frac{T_{t2}}{T_{t1}} - 1 } $
*   **Stalling:** A phenomenon where airflow separates from the blades, leading to a significant drop in performance, surge, and potential damage to the compressor.
*   **Surge:** A condition where the flow in the compressor becomes unstable and can reverse direction, causing a violent oscillation.

**Textbook References:**

*   **V Ganesan, "Gas Turbines" (McGraw Hill Education, Third, 2017):** Chapter 3 covers the fundamental principles of axial flow compressors and introduces performance parameters.
*   **S M Yahya, "Turbines, Compressors and Fans" (McGraw Hill, Fourth, 2011):** Chapter 5 delves into the detailed working and performance analysis of axial flow compressors.
*   **Mathur M L, "Gas Turbine & Jet Rocket Propulsion" (Standard Publishers Distributors, First, 2010):** Chapter 4 provides a good overview of compressor characteristics and their importance in jet propulsion.

## Performance Characteristics of Axial Flow Compressors

The performance of an axial flow compressor is typically represented by a series of characteristic curves. These curves help engineers understand how the compressor behaves under varying operating conditions.

### 1. Pressure Ratio vs. Mass Flow Rate

*   **Description:** This is a primary characteristic map. For a given rotational speed (RPM), the pressure ratio increases with increasing mass flow rate up to a certain point.
*   **Explanation:** As mass flow rate increases, the work done per unit mass of air generally increases due to higher blade speeds relative to the airflow. However, at very high flow rates, aerodynamic inefficiencies and potential choking can limit the pressure ratio.
*   **Behavior:**
    *   At low flow rates, the compressor operates with high efficiency and pressure ratio.
    *   As flow rate increases, pressure ratio also increases.
    *   Beyond a certain flow rate, the pressure ratio starts to decrease.
    *   The curves are typically plotted for various constant rotational speeds (e.g., 80% RPM, 90% RPM, 100% RPM).

### 2. Efficiency vs. Mass Flow Rate (or Pressure Ratio)

*   **Description:** This curve shows how the isentropic (or polytropic) efficiency varies with mass flow rate or pressure ratio for a specific rotational speed.
*   **Explanation:**
    *   **Low Flow Rates:** Efficiency is generally low due to significant incidence losses (air entering blades at an unfavorable angle) and recirculation effects.
    *   **Optimal Flow Rate:** As the flow rate increases, incidence losses decrease, and the flow becomes more aligned with the blades, leading to higher efficiency.
    *   **High Flow Rates:** Efficiency starts to decrease again as aerodynamic losses (like secondary flow losses and diffusion inefficiencies) become dominant.
*   **Behavior:** The efficiency curve typically shows a peak at an intermediate mass flow rate, which corresponds to the most efficient operating point for that rotational speed.

### 3. Surge Line

*   **Description:** The surge line represents the limit of stable operation for the compressor. It is the locus of points (typically mass flow rate and pressure ratio) below which the compressor will surge.
*   **Explanation:** As the back pressure increases (or the mass flow rate decreases), the incidence angle on the blades increases. Eventually, this leads to flow separation, stalls, and then surge. The surge line is usually plotted as pressure ratio against mass flow rate.
*   **Behavior:** The surge line typically slopes upwards with decreasing mass flow rate. This means that as you try to achieve a higher pressure ratio at lower flow rates, you are more likely to encounter surge.

### 4. Stall Line

*   **Description:** Similar to the surge line, the stall line indicates the onset of flow separation (stall) on the blades. While surge is a system instability, stall is a local phenomenon on the blades. The surge line is the ultimate consequence of severe stalling.
*   **Explanation:** The stall line defines the minimum flow rate at which each stage can operate without significant flow separation.
*   **Behavior:** The stall line also typically slopes upwards with decreasing mass flow rate, but is usually at a slightly higher mass flow rate than the surge line for a given pressure ratio.

### 5. Operating Range

*   **Description:** The range of stable operation for a compressor is defined by the surge line and the choke line (or maximum flow limit).
*   **Explanation:**
    *   **Lower Limit:** The surge line defines the minimum mass flow rate at which the compressor can operate stably.
    *   **Upper Limit:** The choke line (or maximum flow limit) represents the point where further increases in mass flow rate are not possible due to the blades becoming "choked" aerodynamically. At this point, the flow in the last stage is at sonic velocity.
*   **Operating Envelope:** The region between the surge line and the choke line, for a given rotational speed, is the stable operating envelope.

### 6. Characteristic Curves and Rotational Speed

*   **Description:** The performance characteristics (pressure ratio vs. flow, efficiency vs. flow) change with rotational speed.
*   **Explanation:** Increasing the rotational speed increases the work done by the blades, leading to higher pressure ratios and mass flow rates. The efficiency also generally improves up to an optimal speed, but further increases in speed can lead to higher losses if the blade angles are not optimized for that speed.
*   **Visual Representation:** The characteristic map typically shows multiple curves of pressure ratio vs. mass flow rate and efficiency vs. mass flow rate, each corresponding to a different rotational speed. The surge line and stall lines are also plotted on this map.

**Reference Book Integration:**

*   **H. Cohen, "Gas Turbine Theory" (Pearson Education, Seventh, 2019):** Cohen's book provides a detailed mathematical treatment of compressor aerodynamics and presents characteristic maps with in-depth explanations of the underlying fluid dynamics that create these curves. He emphasizes the importance of matching compressor characteristics with engine requirements.
*   **Rolls Royce, "The Jet Engine" (Wiley, First, 2015):** This book offers a more practical perspective, illustrating how these performance characteristics are used in the design and operation of actual jet engines, including strategies to avoid surge.

**Course Outcome Alignment:**

*   **CO2 (Analyze performance characteristics and efficiencies of axial flow compressors):** This entire topic directly addresses this outcome. Understanding these curves allows for the analysis of compressor performance.
*   **CO3 (Analyse the performance of gas turbine systems by understanding the characteristics of various components):** The compressor is a key component. Its performance characteristics dictate the overall engine performance, especially in terms of the pressure rise and airflow provided to the combustor and turbine.
*   **CO1 (Apply principles of thermodynamics and fluid dynamics):** The explanation of these characteristics relies heavily on thermodynamic principles (pressure ratios, efficiencies) and fluid dynamics (flow separation, choking, incidence losses).

## Important Points to Remember

*   **Interdependence:** Pressure ratio, mass flow rate, efficiency, and rotational speed are all interconnected.
*   **Surge Avoidance:** Operating an axial compressor too close to the surge line can lead to engine instability and damage.
*   **Choke Limit:** The maximum mass flow rate is limited by choking in the final stage.
*   **Characteristic Map:** The collection of these curves (pressure ratio vs. flow, efficiency vs. flow, surge line) forms the compressor's characteristic map, which is essential for engine matching.
*   **Variable Stator Vanes (VSVs):** Many modern compressors utilize VSVs to optimize the incidence angle at different operating points, effectively shifting the compressor characteristics and widening the stable operating range. While not explicitly a performance characteristic curve, VSVs are a design feature that influences these characteristics.

## Practice Questions and Exercises

**Question 1:**
Define the terms "surge" and "stall" in the context of axial flow compressors. What causes these phenomena?

**Answer:**
*   **Stall:** Flow separation from the blades, leading to a loss of lift and increased losses. It's a local phenomenon.
*   **Surge:** A system instability where airflow reverses direction within the compressor. It's caused by severe stalling in multiple stages, leading to a breakdown of continuous flow. Causes include excessive back pressure, low rotational speed, or operation too far to the left of the surge line on the performance map.

**Question 2:**
Sketch typical characteristic curves for an axial flow compressor, showing:
a) Pressure Ratio vs. Mass Flow Rate for different rotational speeds.
b) Isentropic Efficiency vs. Mass Flow Rate for a specific rotational speed.
c) The Surge Line on the Pressure Ratio vs. Mass Flow Rate plot.

**Answer:**
*(Refer to the explanations and descriptions above for the general shape and behavior of these curves. A visual sketch would be provided in a live session or printed notes, showing increasing pressure ratio with flow up to a point, efficiency peaking at an intermediate flow, and the surge line generally sloping upwards as flow decreases.)*

**Question 3:**
An axial flow compressor has an isentropic efficiency of 85% when operating at a certain point. If the inlet total temperature is 288 K and the outlet total temperature is 432 K, calculate the isentropic outlet total temperature.

**Given:**
$ \eta_{is} = 0.85 $
$ T_{t1} = 288 \, \text{K} $
$ T_{t2} = 432 \, \text{K} $

**Formula:**
$ \eta_{is} = \frac{T_{t2s} - T_{t1}}{T_{t2} - T_{t1}} $

**Calculation:**
$ 0.85 = \frac{T_{t2s} - 288}{432 - 288} $
$ 0.85 = \frac{T_{t2s} - 288}{144} $
$ T_{t2s} - 288 = 0.85 \times 144 $
$ T_{t2s} - 288 = 122.4 $
$ T_{t2s} = 288 + 122.4 $
$ T_{t2s} = 410.4 \, \text{K} $

**Answer:** The isentropic outlet total temperature is 410.4 K.

**Question 4:**
Why is it important to avoid operating an axial flow compressor near its surge line?

**Answer:**
Operating near the surge line leads to unstable flow, vibrations, reduced efficiency, and can cause significant damage to the compressor blades due to rapid fluctuations in pressure and flow. It can ultimately lead to a complete breakdown of airflow and engine stall.

**Question 5:**
Explain the concept of "choking" in an axial flow compressor and how it relates to the maximum mass flow rate.

**Answer:**
Choking occurs when the flow velocity at the narrowest part of the flow passage (e.g., at the throat of the blade passage in the last stage) reaches the local speed of sound. At this point, the passage becomes "acoustically choked," and further increases in back pressure or decreases in inlet pressure will not lead to an increase in mass flow rate. This defines the upper limit of the compressor's operating range for a given rotational speed.

---

This set of notes covers the performance characteristics of axial flow compressors, aligning with the learning outcomes and course objectives for Module 2. The inclusion of textbook references and practice questions aims to provide a comprehensive study resource.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
