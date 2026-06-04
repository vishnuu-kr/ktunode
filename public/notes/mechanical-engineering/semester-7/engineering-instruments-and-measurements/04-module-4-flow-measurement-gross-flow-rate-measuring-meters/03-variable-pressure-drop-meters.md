---
title: "variable pressure drop meters"
subject: "ENGINEERING INSTRUMENTS AND MEASUREMENTS"
module: "Module 4: Flow measurement: Gross flow rate measuring meters"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464328"
status: "completed"
scrapedAt: "2026-05-20T18:11:53.092Z"
---
# Engineering Instruments and Measurements - Module 4: Flow Measurement: Gross Flow Rate Measuring Meters

## Topic: Variable Pressure Drop Meters

---

### Introduction to Flow Measurement

Flow measurement is a critical aspect of many engineering disciplines, from process control in chemical plants to monitoring fluid dynamics in aerospace. It involves quantifying the rate at which a fluid (liquid or gas) moves through a system. Gross flow rate measuring meters are devices designed to measure the total volume or mass of fluid passing a point over a given period.

**Course Outcome Alignment:**
*   **CO4:** To acquire the ability to measure flow and temperature and enabling them to address complex engineering challenges in these areas effectively. (Knowledge Level: K4)
*   **CO5:** To select measurement system for engineering applications (Knowledge Level: K3)

---

### 4.1 Variable Pressure Drop Meters: An Overview

Variable pressure drop meters are a class of flowmeters that infer flow rate by measuring the pressure difference (pressure drop) created when a fluid flows through a constriction or obstruction in a pipe. The fundamental principle behind these meters is **Bernoulli's Equation**, which relates fluid velocity and pressure.

**Key Concept: Bernoulli's Equation**
For a steady, incompressible, inviscid flow along a streamline, the sum of static pressure, kinetic energy per unit volume, and potential energy per unit volume is constant.

$P + \frac{1}{2}\rho v^2 + \rho g h = \text{constant}$

Where:
*   $P$ = Static pressure
*   $\rho$ = Fluid density
*   $v$ = Fluid velocity
*   $g$ = Acceleration due to gravity
*   $h$ = Height

In a horizontal pipe section where the elevation change ($h$) is negligible, the equation simplifies to:

$P_1 + \frac{1}{2}\rho v_1^2 = P_2 + \frac{1}{2}\rho v_2^2$

When a constriction is introduced, the velocity ($v$) increases at the constriction, leading to a decrease in pressure ($P$) according to Bernoulli's principle. The magnitude of this pressure drop is related to the flow rate.

**Course Outcome Alignment:**
*   **CO1:** To identify and classify different measuring instruments and their static and dynamic characteristics, ensuring proper selection and usage for various engineering applications (Knowledge Level: K2) - *Understanding the underlying principle of operation.*
*   **CO4:** To acquire the ability to measure flow and temperature and enabling them to address complex engineering challenges in these areas effectively. (Knowledge Level: K4) - *Applying the principle to flow measurement.*

**Important Point to Remember:** The accuracy of these meters is highly dependent on the flow profile. Laminar flow conditions lead to predictable pressure drops, while turbulent flow can introduce complexities.

---

### 4.2 Types of Variable Pressure Drop Meters

The most common variable pressure drop meters utilize a primary element to create a predictable obstruction, generating a pressure drop that is then measured by a differential pressure (DP) transmitter.

#### 4.2.1 Orifice Plate

*   **Description:** A flat plate with a precisely machined hole (orifice) placed in the pipeline. The fluid is forced through the orifice, causing an acceleration and a subsequent pressure drop.
*   **Operation:**
    *   The fluid approaches the orifice with a certain velocity and pressure.
    *   As it passes through the orifice, its velocity increases due to the reduced cross-sectional area.
    *   According to Bernoulli's principle, this increase in velocity results in a decrease in pressure.
    *   The pressure is measured at the upstream side of the orifice and at the point of minimum pressure (vena contracta) downstream of the orifice.
*   **Flow Rate Calculation:** The volumetric flow rate ($Q$) is approximately proportional to the square root of the differential pressure ($\Delta P$).
    $Q \propto \sqrt{\Delta P}$
    More precisely: $Q = C_d \frac{A_o}{\sqrt{1 - \beta^4}} \sqrt{\frac{2 \Delta P}{\rho}}$
    Where:
    *   $Q$ = Volumetric flow rate
    *   $C_d$ = Discharge coefficient (accounts for losses due to friction and contraction)
    *   $A_o$ = Area of the orifice
    *   $\beta$ = Ratio of orifice diameter to pipe diameter ($d/D$)
    *   $\rho$ = Fluid density
*   **Advantages:**
    *   Simple design and construction.
    *   Relatively inexpensive.
    *   Can be used for a wide range of fluids and flow rates.
    *   Can withstand high pressures and temperatures.
*   **Disadvantages:**
    *   Significant permanent pressure loss (energy loss).
    *   Prone to clogging with fluids containing solids.
    *   Requires upstream and downstream straight pipe runs for accurate readings.
    *   Accuracy can be affected by wear and tear of the orifice edge.
*   **Textbook References:**
    *   Dobelin (1990) provides detailed explanations of orifice plate design and its application in flow measurement.
    *   Sawhney & Sawhney (2009) cover the fundamental principles and practical considerations.
    *   Nakra & Chaudhry (2009) discuss the calculation of flow rate and the discharge coefficient.

**Example:** In a chemical plant, an orifice plate is used to measure the flow rate of water in a pipe. A DP transmitter measures the pressure difference across the plate, and the flow rate is displayed on a control panel.

---

#### 4.2.2 Venturi Meter

*   **Description:** A gradually converging section followed by a short throat section and then a gradually diverging section. It is named after Giovanni Battista Venturi.
*   **Operation:**
    *   As the fluid enters the converging section, its velocity increases, and its pressure decreases.
    *   At the throat, the velocity is maximum, and the pressure is minimum.
    *   The diverging section allows the fluid to decelerate gradually, recovering a significant portion of the pressure that was lost.
*   **Flow Rate Calculation:** Similar to the orifice plate, the flow rate is proportional to the square root of the differential pressure between the inlet and the throat.
    $Q = C_v \frac{A_t}{\sqrt{1 - (A_t/A_1)^2}} \sqrt{\frac{2 \Delta P}{\rho}}$
    Where:
    *   $C_v$ = Velocity coefficient (often close to 1 for Venturi meters)
    *   $A_t$ = Area of the throat
    *   $A_1$ = Area of the inlet
    *   $\Delta P$ = Differential pressure between inlet and throat
    *   $\rho$ = Fluid density
*   **Advantages:**
    *   Low permanent pressure loss compared to orifice plates due to the gradual diverging section.
    *   Higher accuracy and less sensitive to flow profile variations than orifice plates.
    *   Less prone to clogging.
*   **Disadvantages:**
    *   More expensive than orifice plates.
    *   Larger in size and requires more installation space.
    *   More complex to manufacture.
*   **Textbook References:**
    *   Dobelin (1990) discusses the design and efficiency of Venturi meters.
    *   Sawhney & Sawhney (2009) compare Venturi meters with other flow measurement devices.
    *   Nakra & Chaudhry (2009) detail the theoretical basis and practical applications.

**Example:** Venturi meters are often used in water distribution systems and for measuring the flow of clean, low-viscosity fluids where minimizing pressure loss is important.

---

#### 4.2.3 Flow Nozzle

*   **Description:** A device with a precisely shaped nozzle that the fluid passes through. It is essentially a streamlined orifice.
*   **Operation:** Similar to an orifice plate, it causes an increase in velocity and a decrease in pressure. The streamlined shape of the nozzle reduces the abruptness of the flow contraction, leading to better pressure recovery and a higher discharge coefficient than an orifice plate.
*   **Flow Rate Calculation:** The formula is similar to the orifice plate, but with a different discharge coefficient ($C_d$).
    $Q = C_d \frac{A_n}{\sqrt{1 - \beta^4}} \sqrt{\frac{2 \Delta P}{\rho}}$
    Where $A_n$ is the area of the nozzle throat.
*   **Advantages:**
    *   Lower permanent pressure loss than orifice plates.
    *   Can handle higher flow rates and temperatures than orifice plates.
    *   More robust and less prone to erosion than orifice plates.
*   **Disadvantages:**
    *   More expensive than orifice plates.
    *   Requires straight upstream and downstream pipe runs.
*   **Textbook References:**
    *   Raghavendra (2013) discusses the various types of flow nozzles and their applications.
    *   Kumar (2012) provides a comparative analysis of flow nozzles with other head-type flowmeters.

**Example:** Flow nozzles are commonly used in high-pressure steam and water flow measurement applications in power plants.

---

#### 4.2.4 Pitot Tube

*   **Description:** A simple device consisting of a tube pointing directly into the fluid flow. It measures the stagnation pressure.
*   **Operation:**
    *   **Stagnation Pressure:** The fluid flowing into the open end of the Pitot tube is brought to rest (stagnation). At this point, the kinetic energy is converted into pressure energy, resulting in the stagnation pressure ($P_s$).
    *   **Static Pressure:** The static pressure ($P$) of the fluid is measured by perforations on the side of the tube, or by a separate static pressure tapping.
    *   **Dynamic Pressure:** The difference between stagnation pressure and static pressure is the dynamic pressure ($P_d$), which is directly related to the square of the fluid velocity.
        $P_d = P_s - P = \frac{1}{2}\rho v^2$
    *   The velocity ($v$) can then be calculated as: $v = \sqrt{\frac{2(P_s - P)}{\rho}}$
*   **Flow Rate Calculation:** The volumetric flow rate ($Q$) is calculated by multiplying the velocity by the cross-sectional area of the pipe ($A$):
    $Q = v \times A = A \sqrt{\frac{2(P_s - P)}{\rho}}$
*   **Advantages:**
    *   Very simple and inexpensive.
    *   Causes negligible obstruction to the flow.
    *   Can be used for high-temperature and high-pressure applications.
*   **Disadvantages:**
    *   Measures velocity at a single point, so it's only accurate for uniform flow. For average flow, multiple measurements or a traverse is required.
    *   Prone to clogging with suspended solids or in low-velocity flows.
    *   Sensitive to misalignment with the flow direction.
*   **Textbook References:**
    *   Dobelin (1990) explains the theory behind Pitot tubes and their limitations.
    *   Sawhney & Sawhney (2009) provide practical details on their use and installation.
    *   Singh (2009) discusses its application in industrial settings.

**Example:** Pitot tubes are commonly used in aircraft to measure airspeed and in wind tunnels to measure air velocity.

---

### 4.3 Key Considerations for Variable Pressure Drop Meters

*   **Reynolds Number (Re):** The performance of these meters is significantly influenced by the Reynolds number, which characterizes the flow regime (laminar vs. turbulent). The formulas derived often assume turbulent flow conditions.
    $Re = \frac{\rho v D}{\mu}$
    Where:
    *   $\rho$ = Fluid density
    *   $v$ = Average fluid velocity
    *   $D$ = Characteristic length (e.g., pipe diameter)
    *   $\mu$ = Dynamic viscosity of the fluid
*   **Discharge Coefficient ($C_d$):** This is an empirical factor that accounts for deviations from ideal flow, including frictional losses and vena contracta effects. It is dependent on the geometry of the primary element, the Reynolds number, and pipe roughness.
*   **Permanent Pressure Loss:** All variable pressure drop meters cause a loss of energy from the system, manifested as a permanent pressure drop. This can be a significant consideration in applications where energy efficiency is critical.
*   **Installation Requirements:** Proper installation, including sufficient straight upstream and downstream pipe lengths, is crucial for accurate measurements, as flow disturbances can affect the flow profile and the resulting differential pressure.
*   **Fluid Properties:** The density and viscosity of the fluid must be known or measurable to accurately calculate the flow rate. Changes in fluid properties (e.g., temperature variations affecting density) will impact the accuracy if not compensated for.
*   **DP Transmitter:** A differential pressure transmitter is used to measure the pressure difference across the primary element. The transmitter converts the pressure difference into an electrical signal (e.g., 4-20 mA) that can be displayed or used for control.

**Course Outcome Alignment:**
*   **CO1:** To identify and classify different measuring instruments and their static and dynamic characteristics, ensuring proper selection and usage for various engineering applications (Knowledge Level: K2) - *Understanding the impact of Reynolds number, discharge coefficient, and installation on accuracy.*
*   **CO4:** To acquire the ability to measure flow and temperature and enabling them to address complex engineering challenges in these areas effectively. (Knowledge Level: K4) - *Considering practical aspects like pressure loss and fluid properties.*
*   **CO5:** To select measurement system for engineering applications (Knowledge Level: K3) - *Evaluating trade-offs between different variable pressure drop meters based on cost, accuracy, and pressure loss.*

**Important Points to Remember:**
*   The relationship between flow rate and $\Delta P$ is often non-linear ($\Delta P \propto Q^2$).
*   Always refer to standardized measurement standards (e.g., ISO 5167) for the selection and installation of these devices to ensure accuracy.

---

### 4.4 Comparison of Variable Pressure Drop Meters

| Feature                | Orifice Plate                                 | Venturi Meter                                     | Flow Nozzle                                   | Pitot Tube                                       |
| :--------------------- | :-------------------------------------------- | :------------------------------------------------ | :-------------------------------------------- | :----------------------------------------------- |
| **Permanent Pressure Loss** | High                                          | Low                                               | Medium                                        | Very Low (negligible)                            |
| **Accuracy**           | Moderate                                      | High                                              | High                                          | Low (single point measurement)                   |
| **Cost**               | Low                                           | High                                              | Medium                                        | Very Low                                         |
| **Installation Space** | Compact                                       | Requires more space                               | Requires straight pipe runs                   | Minimal                                          |
| **Clogging Tendency**  | High                                          | Low                                               | Low                                           | High (for solids/low velocity)                   |
| **Fluid Suitability**  | Clean fluids, moderate viscosity              | Clean fluids, moderate viscosity                  | Higher pressures/temperatures, cleaner fluids | Clean fluids, uniform flow, higher velocities |
| **Manufacturing Complexity** | Simple                                        | Complex                                           | Moderate                                      | Simple                                           |
| **Primary Application** | General purpose, cost-sensitive applications | High accuracy, low pressure loss applications   | High-pressure/temp applications               | Airspeed measurement, local velocity indication |

**Course Outcome Alignment:**
*   **CO5:** To select measurement system for engineering applications (Knowledge Level: K3) - *Directly aids in selecting the appropriate meter.*

---

### 4.5 Practice Questions

1.  **Question:** A fluid flows through a pipe with an orifice plate. If the flow rate doubles, what happens to the differential pressure measured across the orifice plate, assuming the fluid density remains constant?
    **Answer:** The differential pressure will increase by a factor of four ($ \Delta P \propto Q^2 $).

2.  **Question:** Explain the primary advantage of using a Venturi meter over an orifice plate for flow measurement in a system where energy efficiency is critical.
    **Answer:** The Venturi meter has a lower permanent pressure loss due to its gradual diverging section, allowing for better pressure recovery and thus higher energy efficiency compared to the orifice plate.

3.  **Question:** For which type of fluid are Pitot tubes generally unsuitable for accurate flow rate measurement?
    **Answer:** Pitot tubes are generally unsuitable for fluids containing suspended solids or in low-velocity flows where the tube might get clogged or where the dynamic pressure becomes too small to measure accurately. They are also less accurate for flows that are not uniform across the pipe.

4.  **Question:** An orifice plate flowmeter is being used to measure the flow of water. If the temperature of the water increases significantly, how might this affect the flow rate reading if not properly accounted for?
    **Answer:** An increase in water temperature will likely decrease its density. Since the flow rate calculation depends on density (often in the denominator under the square root), a decrease in density would lead to a calculated flow rate that is higher than the actual flow rate, assuming the density correction is not applied.

5.  **Question:** What is the role of the "discharge coefficient" in the flow rate equation for a variable pressure drop meter?
    **Answer:** The discharge coefficient ($C_d$) is an empirical factor that accounts for real-world flow losses that are not captured by the ideal Bernoulli's equation. These losses include frictional effects within the flow element and the vena contracta (the point of maximum contraction of the fluid stream downstream of the orifice or nozzle).

**Course Outcome Alignment:**
*   **CO1, CO4, CO5:** These questions test understanding of the principles, applications, and selection criteria for variable pressure drop meters, aligning with the specified knowledge levels.

---

### 4.6 Summary and Important Points to Remember

*   **Variable pressure drop meters** infer flow rate by measuring the pressure difference created by a constriction in the flow path.
*   The fundamental principle is **Bernoulli's Equation**, relating velocity and pressure.
*   Common types include **Orifice Plates**, **Venturi Meters**, **Flow Nozzles**, and **Pitot Tubes**.
*   The flow rate is generally proportional to the **square root of the differential pressure** ($Q \propto \sqrt{\Delta P}$).
*   Key design considerations include the **Reynolds number**, **discharge coefficient**, and **permanent pressure loss**.
*   Accurate **installation** with adequate straight pipe runs is crucial for all these meters.
*   Each type has its own advantages and disadvantages in terms of cost, accuracy, pressure loss, and suitability for different fluid conditions.
*   **Selection** of the appropriate meter depends on the specific application requirements, fluid properties, and economic considerations.

---

This concludes the study notes for Variable Pressure Drop Meters. Ensure you review the relevant sections in your textbooks for deeper insights and additional examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
