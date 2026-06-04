---
title: "comparison with centrifugal compressor"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 2: Axial flow compressor – Working principle"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463ca7"
status: "completed"
scrapedAt: "2026-05-20T18:13:53.367Z"
---
# GAS TURBINE AND JET PROPULSION: Module 2 - Axial Flow Compressor: Comparison with Centrifugal Compressor

## Introduction to Compressors in Gas Turbines

Gas turbines are heat engines that convert thermal energy into mechanical work. A crucial component in this process is the compressor, responsible for increasing the pressure and density of the incoming air. This compressed air is then mixed with fuel and ignited, producing hot combustion gases that drive the turbine. Compressors are broadly categorized into two main types: **Centrifugal Compressors** and **Axial Flow Compressors**. Understanding their differences is vital for selecting the appropriate compressor for a given application and analyzing gas turbine performance.

**(References: Ganesan, Chapter 5; Yahya, Chapter 5; Mathur, Chapter 4)**

## 1. Working Principles of Centrifugal and Axial Flow Compressors

While both types of compressors perform the same fundamental function (pressure rise), they achieve it through distinct mechanical processes.

### 1.1 Centrifugal Compressor

*   **Working Principle:** Air enters the compressor axially at the center of a rotating impeller. The impeller has vanes that impart kinetic energy to the air, accelerating it radially outwards. As the air moves radially outwards, its velocity increases, and it is then passed through a diffuser. The diffuser is a stationary passage that gradually increases in area, converting the high kinetic energy (velocity) of the air into potential energy (pressure).
*   **Key Components:**
    *   **Impeller:** A rotating disc with vanes that adds kinetic energy to the air.
    *   **Diffuser:** A stationary passage that converts kinetic energy into pressure energy.
    *   **Volute (or collector):** A spiral-shaped casing that collects the high-pressure air from the diffuser and directs it to the outlet.
*   **Pressure Rise Mechanism:** Primarily achieved through centrifugal action and the subsequent diffusion process. The centrifugal force throws the air outwards, increasing its velocity, and the diffuser then converts this velocity into pressure.

**(References: Ganesan, Section 5.1; Yahya, Section 5.1; Mathur, Section 4.1)**

### 1.2 Axial Flow Compressor

*   **Working Principle:** Air flows through a series of rotating blades (rotors) and stationary blades (stators) arranged axially. The rotor blades rotate at high speed, imparting kinetic energy and some pressure rise to the air. The stator vanes, fixed to the casing, are designed to redirect the airflow and convert some of the kinetic energy into pressure energy, preparing the air for the next stage of rotor blades. Each rotor-stator pair constitutes a stage, and multiple stages are cascaded to achieve a significant overall pressure rise.
*   **Key Components:**
    *   **Rotors:** Rotating blades that accelerate the airflow and cause a partial pressure rise.
    *   **Stators:** Stationary vanes that redirect the airflow and convert kinetic energy to pressure energy, preparing the air for the next rotor.
    *   **Casing:** Houses the rotor and stator assemblies.
*   **Pressure Rise Mechanism:** Achieved through multiple stages of acceleration and deceleration. The rotor adds kinetic energy and some pressure. The stator converts this kinetic energy into pressure, and the process is repeated through successive stages. This results in a gradual, stage-by-stage pressure build-up.

**(References: Ganesan, Section 5.2; Yahya, Section 5.2; Mathur, Section 4.2)**

## 2. Comparison of Centrifugal and Axial Flow Compressors

This section directly addresses the learning outcome by comparing the two types of compressors across various performance parameters.

| Feature                 | Centrifugal Compressor                                   | Axial Flow Compressor                                      |
| :---------------------- | :------------------------------------------------------- | :--------------------------------------------------------- |
| **Flow Path**           | Radial (outwards from center)                            | Axial (along the axis of rotation)                         |
| **Pressure Rise per Stage** | High (can be 4:1 to 6:1 in a single stage)               | Low to Moderate (typically 1.1:1 to 1.5:1 per stage)       |
| **Overall Pressure Ratio** | Achieved by multi-staging or using multiple centrifugal stages. Can reach high ratios but is less efficient at very high ratios. | Achieved by a large number of stages. Can achieve very high pressure ratios (up to 40:1 or more). |
| **Mass Flow Rate**      | Relatively Low                                           | High                                                       |
| **Efficiency**          | Can be high at design point but drops off rapidly with changes in flow rate. Less efficient at very high pressure ratios. | Generally more efficient over a wider range of operating conditions, especially at high pressure ratios. |
| **Size & Weight**       | More compact radially, but can be bulky due to the diffuser and volute. Heavier for a given pressure ratio and flow rate compared to axial. | Lighter and more compact axially, leading to better power-to-weight ratio. |
| **Complexity**          | Simpler construction, fewer stages typically needed.      | More complex construction due to numerous stages and tight tolerances. |
| **Operating Range**     | Limited operating range before surge or stall occurs.    | Wider operating range, more tolerant to variations in inlet conditions. |
| **Applications**        | Small gas turbines (e.g., auxiliary power units, small aircraft engines, turbochargers), superchargers, industrial applications. | Large gas turbines (e.g., main engines in jet aircraft, power generation), high-performance applications. |
| **Susceptibility to Stall/Surge** | More prone to surge, especially at off-design conditions. | Less prone to surge but susceptible to stall if aerodynamic design is poor. |
| **Maintenance**         | Generally easier to maintain due to simpler design.      | More complex maintenance due to numerous delicate parts.   |

**(References: Ganesan, Section 5.3; Yahya, Section 5.3; Mathur, Section 4.3; Rolls Royce, Chapter 3)**

**Example:** Consider a small turbocharger in a car. It typically uses a centrifugal compressor because it's cost-effective, compact, and can provide a significant pressure boost for smaller engines. In contrast, a large commercial jet engine employs an axial flow compressor to handle the massive airflow required and achieve the high overall pressure ratios needed for efficient thrust generation.

## 3. Key Concepts and Definitions

*   **Pressure Ratio:** The ratio of the discharge pressure to the inlet pressure ($P_{discharge} / P_{inlet}$).
*   **Stage:** In an axial flow compressor, a stage consists of one row of rotor blades and one row of stator blades.
*   **Impeller:** The rotating component in a centrifugal compressor that imparts kinetic energy to the fluid.
*   **Diffuser:** A stationary component in a centrifugal compressor that converts kinetic energy into pressure energy.
*   **Surge:** An unsteady flow condition in a compressor where the airflow reverses momentarily, leading to a loss of pressure and potential damage. Centrifugal compressors are more prone to surge.
*   **Stall:** A condition in an axial flow compressor where the airflow separates from the blade surfaces, leading to a reduction in pressure rise and efficiency.
*   **Work Input:** The energy supplied to the compressor to increase the pressure of the air. In a compressor, this is typically expressed as specific work input per unit mass of air.
*   **Isentropic Efficiency:** The ratio of the ideal (isentropic) work input to the actual work input required to achieve the same pressure rise.
    *   $\eta_{compressor} = \frac{W_{isentropic}}{W_{actual}}$
    *   This is a crucial parameter for evaluating compressor performance. Higher efficiency means less work input for a given pressure rise, leading to better overall gas turbine efficiency.

**(References: Ganesan, Chapter 5; Yahya, Chapter 5; Cohen, Chapter 4)**

## 4. Performance Characteristics and Analysis (Relating to CO2 & CO3)

Understanding how these compressors perform under different operating conditions is critical.

### 4.1 Centrifugal Compressor Performance

*   **Pressure Rise vs. Flow Rate:** A centrifugal compressor typically exhibits a **rising characteristic** for pressure rise with increasing flow rate, up to a certain point. Beyond this point, the pressure rise starts to fall.
*   **Efficiency vs. Flow Rate:** Efficiency is generally highest at the design point and falls off as the flow rate deviates from the design value.
*   **Surge Line:** The curve on a performance map (Pressure Ratio vs. Mass Flow Rate) below which surge occurs.
*   **Stonewall (or Choke) Line:** The curve above which the compressor cannot deliver more flow due to choking of the flow at the impeller exit.
*   **Map:** The performance map of a centrifugal compressor typically shows pressure ratio on the y-axis and mass flow rate on the x-axis, with various efficiency contours and operating lines (e.g., surge line, stonewall line).

**(References: Ganesan, Section 5.1.4; Yahya, Section 5.1.4)**

### 4.2 Axial Flow Compressor Performance

*   **Pressure Rise vs. Flow Rate:** Axial compressors typically have a **flatter characteristic** compared to centrifugal compressors. The pressure rise remains relatively constant over a range of flow rates.
*   **Efficiency vs. Flow Rate:** Axial compressors generally maintain higher efficiencies over a wider operating range.
*   **Stall Line:** A curve on the performance map indicating the onset of stall. Stall is a critical limitation for axial compressors.
*   **Choke Line:** Similar to centrifugal compressors, this indicates the maximum flow rate the compressor can handle.
*   **Map:** The performance map for axial compressors also plots pressure ratio against mass flow rate, with efficiency contours and the stall and choke lines.

**(References: Ganesan, Section 5.2.4; Yahya, Section 5.2.4; Cohen, Chapter 4)**

**Key Point to Remember:** The wider operating range and higher efficiency over a broader spectrum make axial flow compressors the preferred choice for high-performance applications like aircraft engines, despite their higher complexity. Centrifugal compressors are favored for their simplicity and cost-effectiveness in applications where extreme pressure ratios or high mass flow rates are not the primary concern.

## 5. Application in Gas Turbine Cycles (Relating to CO1 & CO3)

The choice of compressor significantly impacts the overall performance and efficiency of the gas turbine cycle.

*   **Brayton Cycle:** Both compressor types are used in Brayton cycles.
    *   **Centrifugal compressors** are suitable for smaller, simpler gas turbine engines where the overall pressure ratio requirement is moderate. Their robustness and ease of manufacturing are advantageous.
    *   **Axial flow compressors** are essential for high-performance gas turbines, including those used in aircraft propulsion and large-scale power generation, due to their ability to achieve high pressure ratios and high efficiencies.
*   **Impact on Cycle Efficiency:** A compressor with higher isentropic efficiency requires less work input from the turbine. This means more net power is available for useful work (thrust or shaft power). Therefore, the efficiency of the compressor is directly linked to the overall thermal efficiency of the gas turbine. Axial compressors, with their higher efficiencies at high pressure ratios, contribute significantly to the improved performance of modern gas turbines.

**(References: Ganesan, Chapter 1; Yahya, Chapter 1; Mathur, Chapter 2; Cohen, Chapter 4)**

**Example:** A small turboshaft engine used in helicopters might employ a centrifugal compressor stage or two to keep costs down and weight manageable. Conversely, a large turbofan engine powering a commercial airliner will have a multi-stage axial compressor to achieve the high pressure ratios necessary for efficient fuel consumption and high thrust output.

## 6. Practice Questions and Exercises

**Question 1:**

Briefly explain the primary difference in the working principle between a centrifugal compressor and an axial flow compressor.

**Answer:**
The primary difference lies in the direction of airflow through the compressor. In a centrifugal compressor, air flows radially outwards, driven by the centrifugal force from a rotating impeller and then diffused. In an axial flow compressor, air flows parallel to the axis of rotation, passing through alternating stages of rotating rotor blades and stationary stator vanes, with each stage contributing to a gradual pressure rise.

---

**Question 2:**

List three key advantages of an axial flow compressor over a centrifugal compressor for high-performance gas turbine applications.

**Answer:**
1.  **Higher Efficiency at High Pressure Ratios:** Axial compressors can achieve much higher pressure ratios with better efficiency compared to centrifugal compressors.
2.  **Higher Mass Flow Rate:** Axial compressors can handle significantly larger volumes of air for a given frontal area.
3.  **Better Power-to-Weight Ratio:** Due to their more compact axial design and efficient airflow, axial compressors contribute to lighter and more powerful gas turbine engines, which is crucial for aerospace applications.

---

**Question 3:**

A gas turbine engine requires a very high overall pressure ratio and a high mass flow rate. Based on the comparison, which type of compressor would be more suitable, and why?

**Answer:**
An **axial flow compressor** would be more suitable.
**Reasoning:** Axial flow compressors are designed to achieve very high overall pressure ratios by cascading multiple stages. They can also handle large mass flow rates efficiently. Centrifugal compressors, while capable of significant pressure rise per stage, are less suited for very high overall pressure ratios and large mass flow rates in a single unit without becoming excessively large or inefficient.

---

**Question 4 (Applying CO2 & CO3):**

Consider the performance map of an axial flow compressor. What is the significance of the "stall line"?

**Answer:**
The stall line on an axial flow compressor performance map represents the boundary of stable operation. As the compressor operates at conditions that move towards the stall line (e.g., lower mass flow rate or increased back pressure), airflow separation occurs on the compressor blades. This separation leads to a loss of pressure rise, a significant drop in efficiency, and potentially unstable operation, which can damage the compressor. Operating an axial compressor close to its stall line is undesirable, and control systems are often used to prevent it.

---

**Question 5 (Applying CO1):**

How does the isentropic efficiency of a compressor affect the overall efficiency of a gas turbine operating on the Brayton cycle?

**Answer:**
The isentropic efficiency ($\eta_{compressor}$) of a compressor is defined as the ratio of ideal (isentropic) work input to the actual work input required to achieve a given pressure rise.
$\eta_{compressor} = \frac{W_{isentropic}}{W_{actual}}$
A higher compressor efficiency means that less actual work is required from the turbine to drive the compressor. This leaves more of the turbine's work output available for useful shaft power or thrust. Consequently, a higher compressor efficiency directly leads to a higher net work output from the gas turbine and, therefore, a higher overall thermal efficiency of the Brayton cycle.

---

## 7. Important Points to Remember

*   **Flow Direction:** Centrifugal compressors have radial flow; axial flow compressors have axial flow.
*   **Pressure Rise:** Centrifugal compressors offer high pressure rise per stage; axial flow compressors achieve high overall pressure ratios through multiple stages.
*   **Mass Flow:** Axial flow compressors are designed for higher mass flow rates.
*   **Efficiency:** Axial flow compressors generally offer better and more consistent efficiency over a wider operating range, especially at high pressure ratios.
*   **Applications:** Centrifugal compressors are common in smaller engines and turbochargers. Axial flow compressors are dominant in large aircraft engines and power generation turbines.
*   **Stability:** Centrifugal compressors are more prone to surge. Axial flow compressors are susceptible to stall.
*   **Weight & Size:** Axial compressors generally offer a better power-to-weight ratio and are more compact axially.

## Conclusion

The comparison between centrifugal and axial flow compressors highlights their distinct characteristics and suitability for different applications. While centrifugal compressors offer simplicity and a high pressure rise per stage, axial flow compressors excel in achieving high overall pressure ratios, handling large mass flow rates, and maintaining high efficiencies over a broad operating range, making them indispensable for modern high-performance gas turbines. The choice between them is a critical design consideration, directly impacting the performance, efficiency, and operational envelope of the gas turbine system.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
