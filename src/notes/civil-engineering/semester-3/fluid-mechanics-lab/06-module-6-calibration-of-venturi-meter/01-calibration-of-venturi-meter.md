---
title: "Calibration of Venturi meter"
subject: "FLUID MECHANICS LAB"
module: "Module 6: Calibration of Venturi meter"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba8108e0"
status: "completed"
scrapedAt: "2026-05-20T18:40:53.349Z"
---
# Fluid Mechanics Lab: Module 6 - Calibration of Venturi Meter

## 1. Introduction to Venturi Meters

**What is a Venturi Meter?**

A Venturi meter is a device used to measure the flow rate of a fluid (liquid or gas) in a pipe. It works based on **Bernoulli's Principle** and the **continuity equation**.

**How it Works:**

A Venturi meter consists of three main sections:
1.  **Converging Cone:** The pipe gradually narrows, increasing the fluid velocity.
2.  **Throat:** The narrowest section where the fluid velocity is highest and the pressure is lowest.
3.  **Diverging Cone:** The pipe gradually widens back to its original size, allowing the fluid to regain some of its pressure.

**Key Concepts:**

*   **Bernoulli's Principle:** For an inviscid, incompressible fluid in steady flow, the sum of static pressure, dynamic pressure (velocity head), and potential energy head is constant along a streamline. Mathematically:
    $P + \frac{1}{2}\rho v^2 + \rho g h = \text{constant}$
    Where:
    *   $P$ = static pressure
    *   $\rho$ = fluid density
    *   $v$ = fluid velocity
    *   $g$ = acceleration due to gravity
    *   $h$ = height (potential energy head)

*   **Continuity Equation:** For a steady, incompressible flow, the mass flow rate entering a control volume must equal the mass flow rate leaving it. For a fixed cross-sectional area, this simplifies to:
    $A_1 v_1 = A_2 v_2$
    Where:
    *   $A$ = cross-sectional area
    *   $v$ = fluid velocity
    *   Subscripts 1 and 2 refer to different sections of the pipe.

*   **Pressure Drop:** The pressure difference between the converging section and the throat is directly related to the velocity of the fluid. This pressure difference is what the Venturi meter utilizes to determine flow rate.

*   **Venturi Effect:** The reduction in pressure that results when a fluid flows through a constricted section (or "throat") of a pipe.

**Formula for Theoretical Discharge:**

The theoretical discharge ($Q_{th}$) through a Venturi meter can be derived from Bernoulli's principle and the continuity equation:

$Q_{th} = A_1 \sqrt{\frac{2(P_1 - P_2)}{\rho(1 - (A_2/A_1)^2)}}$

Where:
*   $A_1$ = Area of the upstream section (larger diameter)
*   $A_2$ = Area of the throat (smaller diameter)
*   $P_1$ = Pressure at the upstream section
*   $P_2$ = Pressure at the throat
*   $\rho$ = Density of the fluid

## 2. Learning Outcomes and Their Coverage

This section will cover the key learning outcomes associated with calibrating a Venturi meter.

### Learning Outcome 1: Understand the working principle of a Venturi meter.

*   **Coverage:** Explained in Section 1 above. The working principle is based on the conversion of pressure energy to kinetic energy as the fluid passes through the constricted throat, a direct application of Bernoulli's Principle and the Continuity Equation.

### Learning Outcome 2: Measure the pressure difference across the Venturi meter.

*   **Coverage:** This is a fundamental practical aspect of using a Venturi meter.
    *   **Instrumentation:** A **differential manometer** (usually a U-tube manometer) is used to measure the pressure difference ($P_1 - P_2$).
    *   **Manometer Fluid:** The manometer is filled with a fluid of known density (e.g., mercury, colored water, or a denser oil) that is immiscible with the fluid flowing in the pipe.
    *   **Measurement:** The difference in the levels of the manometer fluid indicates the pressure difference.
    *   **Formula for Pressure Difference (U-tube manometer):**
        $P_1 - P_2 = h_m (\rho_m - \rho)g$
        Where:
        *   $h_m$ = Manometric head (difference in fluid levels in the manometer)
        *   $\rho_m$ = Density of the manometer fluid
        *   $\rho$ = Density of the fluid flowing in the pipe
        *   $g$ = Acceleration due to gravity

### Learning Outcome 3: Determine the actual flow rate through the Venturi meter.

*   **Coverage:** This involves collecting a known volume of fluid over a specific time period.
    *   **Collection Method:** The fluid exiting the Venturi meter is collected in a **measuring tank** of known volume.
    *   **Timing:** A stopwatch is used to record the time taken to fill the measuring tank.
    *   **Actual Flow Rate Calculation:**
        $Q_{actual} = \frac{\text{Volume of collected fluid}}{\text{Time taken}}$
        (Typically in m³/s or L/min)

### Learning Outcome 4: Calculate the theoretical flow rate through the Venturi meter.

*   **Coverage:** Using the measured pressure difference and the dimensions of the Venturi meter, the theoretical flow rate is calculated using the formula mentioned in Section 1.
    *   **Required Data:**
        *   $A_1$ (Area of inlet)
        *   $A_2$ (Area of throat)
        *   $P_1 - P_2$ (Measured pressure difference using the manometer)
        *   $\rho$ (Density of the fluid flowing in the pipe)

### Learning Outcome 5: Determine the coefficient of discharge ($C_d$) for the Venturi meter.

*   **Coverage:** This is the core of calibration. The coefficient of discharge accounts for the actual flow conditions, which deviate from ideal assumptions (like viscosity and friction).
    *   **Definition:** $C_d$ is the ratio of the actual flow rate to the theoretical flow rate.
    *   **Formula:**
        $C_d = \frac{Q_{actual}}{Q_{th}}$
    *   **Significance:** A $C_d$ less than 1 indicates losses due to friction and other inefficiencies. For a Venturi meter, $C_d$ is typically between 0.95 and 0.99.

### Learning Outcome 6: Understand the factors affecting the coefficient of discharge.

*   **Coverage:** Several factors can influence the $C_d$ value:
    *   **Reynolds Number (Re):** Represents the ratio of inertial forces to viscous forces. Higher Re generally leads to a higher $C_d$.
    *   **Pipe Roughness:** Rougher internal surfaces cause more friction, reducing $C_d$.
    *   **Venturi Meter Geometry:** The angle of the converging cone, the length of the throat, and the angle of the diverging cone can all affect $C_d$.
    *   **Fluid Viscosity:** Viscous losses contribute to a lower $C_d$.
    *   **Mach Number (for compressible flow):** While this lab typically deals with incompressible flow, at very high velocities, compressibility effects become significant.

### Learning Outcome 7: Plot the coefficient of discharge against the Reynolds number.

*   **Coverage:** This is a graphical representation of how $C_d$ varies with flow conditions.
    *   **Procedure:**
        1.  Conduct the experiment at various flow rates.
        2.  For each flow rate, calculate $Q_{actual}$, $Q_{th}$, and $C_d$.
        3.  Calculate the Reynolds number for each flow rate.
        4.  Plot $C_d$ on the y-axis and Re on the x-axis.
    *   **Expected Trend:** The plot typically shows an initial rise in $C_d$ with increasing Re as viscous effects become less dominant, and then it may plateau or slightly decrease at very high Re.

## 3. Experimental Setup and Procedure

**Typical Lab Setup:**

1.  **Venturi Meter:** Mounted in a closed-loop pipe system.
2.  **Pump:** To circulate the fluid.
3.  **Flow Control Valve:** To adjust the flow rate.
4.  **Pressure Taps:** Located at the inlet (section 1) and the throat (section 2) of the Venturi meter.
5.  **Differential Manometer:** Connected to the pressure taps.
6.  **Measuring Tank:** To collect the fluid for volume and time measurement.
7.  **Stopwatch:** For timing the collection.
8.  **Measuring Cylinder/Scale:** To measure the volume of collected fluid.

**Experimental Procedure:**

1.  **Ensure System is Filled:** Fill the pipe system and manometer with the working fluid. Ensure no air bubbles are present.
2.  **Record Fluid Properties:** Note the density ($\rho$) and viscosity ($\mu$) of the fluid being used (usually water at room temperature).
3.  **Set Initial Flow Rate:** Open the flow control valve to achieve a desired flow rate.
4.  **Stabilize Flow:** Allow the flow to stabilize for a minute.
5.  **Record Manometer Readings:**
    *   Note the level of the manometer fluid in both limbs.
    *   Calculate the manometric head ($h_m$).
6.  **Record Timing Data:**
    *   Simultaneously start the stopwatch and open the valve to the measuring tank.
    *   When a sufficient volume of fluid is collected (e.g., half the tank), stop the stopwatch and close the valve to the tank.
    *   Record the time ($t$) and the volume ($V$) of the collected fluid.
7.  **Repeat for Different Flow Rates:** Adjust the flow control valve to obtain a range of flow rates and repeat steps 4-6. Typically, 5-7 readings are taken.
8.  **Turn off Pump:** After collecting all data, shut down the pump.

## 4. Data Analysis and Calculations

**For each experimental reading:**

1.  **Calculate Actual Flow Rate ($Q_{actual}$):**
    $Q_{actual} = V / t$ (m³/s)

2.  **Calculate Pressure Difference ($P_1 - P_2$):**
    $P_1 - P_2 = h_m (\rho_m - \rho)g$ (Pa)
    *   *Note:* Ensure consistent units. If $h_m$ is in mm, convert to meters.

3.  **Calculate Theoretical Flow Rate ($Q_{th}$):**
    $Q_{th} = A_1 \sqrt{\frac{2(P_1 - P_2)}{\rho(1 - (A_2/A_1)^2)}}$ (m³/s)
    *   Calculate $A_1$ and $A_2$ from the given diameters of the Venturi meter.
    *   $A_1 = \frac{\pi D_1^2}{4}$, $A_2 = \frac{\pi D_2^2}{4}$

4.  **Calculate Coefficient of Discharge ($C_d$):**
    $C_d = \frac{Q_{actual}}{Q_{th}}$

5.  **Calculate Reynolds Number (Re) at the Inlet (Section 1):**
    *   First, calculate the velocity at section 1: $v_1 = Q_{actual} / A_1$
    *   Then, calculate Reynolds number: $Re = \frac{\rho v_1 D_1}{\mu}$

**Tabulate Results:**

| Reading | Volume (V) (m³) | Time (t) (s) | $Q_{actual}$ (m³/s) | $h_m$ (m) | $P_1 - P_2$ (Pa) | $Q_{th}$ (m³/s) | $C_d$ | Re |
| :------ | :-------------- | :----------- | :------------------ | :-------- | :--------------- | :-------------- | :---- | :- |
| 1       |                 |              |                     |           |                  |                 |       |    |
| 2       |                 |              |                     |           |                  |                 |       |    |
| ...     |                 |              |                     |           |                  |                 |       |    |

**Plotting:**

*   Plot $C_d$ on the y-axis against Re on the x-axis.

## 5. Practice Questions and Exercises

**Scenario:**

A Venturi meter with an inlet diameter ($D_1$) of 0.1 m and a throat diameter ($D_2$) of 0.05 m is used to measure the flow of water ($\rho = 1000 \, \text{kg/m}^3$) in a pipe. A differential manometer containing mercury ($\rho_m = 13600 \, \text{kg/m}^3$) shows a manometric head ($h_m$) of 0.05 m. The actual flow rate measured by collecting water in a tank was found to be $0.02 \, \text{m}^3/\text{s}$.

**(a) Calculate the pressure difference across the Venturi meter.**
**(b) Calculate the theoretical flow rate through the Venturi meter.**
**(c) Calculate the coefficient of discharge ($C_d$) for the Venturi meter.**
**(d) If the velocity at the inlet is $2.55 \, \text{m/s}$ and the viscosity of water is $1 \times 10^{-3} \, \text{Pa.s}$, calculate the Reynolds number at the inlet.**

**Answers:**

**(a) Pressure Difference ($P_1 - P_2$):**
$P_1 - P_2 = h_m (\rho_m - \rho)g$
$P_1 - P_2 = 0.05 \, \text{m} \times (13600 \, \text{kg/m}^3 - 1000 \, \text{kg/m}^3) \times 9.81 \, \text{m/s}^2$
$P_1 - P_2 = 0.05 \times 12600 \times 9.81 \approx 6180.3 \, \text{Pa}$

**(b) Theoretical Flow Rate ($Q_{th}$):**
$A_1 = \frac{\pi D_1^2}{4} = \frac{\pi (0.1 \, \text{m})^2}{4} = 0.007854 \, \text{m}^2$
$A_2 = \frac{\pi D_2^2}{4} = \frac{\pi (0.05 \, \text{m})^2}{4} = 0.001963 \, \text{m}^2$
$(A_2/A_1)^2 = (0.001963 / 0.007854)^2 = (0.25)^2 = 0.0625$
$Q_{th} = 0.007854 \, \text{m}^2 \sqrt{\frac{2 \times 6180.3 \, \text{Pa}}{1000 \, \text{kg/m}^3 (1 - 0.0625)}}$
$Q_{th} = 0.007854 \sqrt{\frac{12360.6}{937.5}}$
$Q_{th} = 0.007854 \sqrt{13.1846} \approx 0.007854 \times 3.631 \approx 0.02853 \, \text{m}^3/\text{s}$

**(c) Coefficient of Discharge ($C_d$):**
$C_d = \frac{Q_{actual}}{Q_{th}} = \frac{0.02 \, \text{m}^3/\text{s}}{0.02853 \, \text{m}^3/\text{s}} \approx 0.701$
*   **Note:** This $C_d$ value is unusually low for a Venturi meter. In a real experiment, this would suggest a significant issue or a poorly designed meter.

**(d) Reynolds Number (Re):**
$Re = \frac{\rho v_1 D_1}{\mu}$
$Re = \frac{1000 \, \text{kg/m}^3 \times 2.55 \, \text{m/s} \times 0.1 \, \text{m}}{1 \times 10^{-3} \, \text{Pa.s}}$
$Re = \frac{255}{0.001} = 255,000$

## 6. Important Points to Remember

*   **Bernoulli's Principle and Continuity Equation:** These are the fundamental principles governing Venturi meter operation.
*   **Pressure Difference:** The key measured parameter to infer flow rate.
*   **Differential Manometer:** Essential for accurately measuring the pressure difference. Be mindful of the manometer fluid's density.
*   **Actual vs. Theoretical Flow:** Always distinguish between the measured flow rate and the calculated flow rate.
*   **Coefficient of Discharge ($C_d$):** Represents the real-world efficiency of the meter. Its value is crucial for accurate flow measurement.
*   **Reynolds Number:** A significant factor influencing $C_d$. Calibration curves are often plotted against Re.
*   **Units:** Maintain consistent units throughout all calculations to avoid errors.
*   **Air Bubbles:** Eliminate air bubbles from the system and manometer, as they can significantly affect pressure readings.
*   **Smooth Flow:** Ensure the flow is steady and as smooth as possible for accurate Bernoulli's principle application.

This comprehensive set of notes should provide a solid foundation for understanding and calibrating a Venturi meter in your Fluid Mechanics Lab. Good luck!
