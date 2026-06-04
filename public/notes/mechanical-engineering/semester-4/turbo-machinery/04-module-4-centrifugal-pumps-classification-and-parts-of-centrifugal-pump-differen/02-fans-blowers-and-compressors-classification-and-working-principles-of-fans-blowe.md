---
title: "Fans, Blowers and Compressors: Classification and working principles of fans, blowers and compressors."
subject: "TURBO MACHINERY"
module: "Module 4: Centrifugal Pumps: Classification and parts of centrifugal pump, different heads and efficiencies of centrifugal pump, Theoretical head – capacity relationship, Minimum speed for starting the flow, Maximum suction lift, Net positive suction head, Cavitation, Need for priming, Pumps in series and parallel."
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804463018"
status: "completed"
scrapedAt: "2026-05-20T17:57:24.036Z"
---
## Turbo Machinery: Module 4 - Fans, Blowers, and Compressors

This module delves into the operation and characteristics of fans, blowers, and compressors, crucial power-consuming turbomachines. We will explore their classifications, working principles, and differentiate them based on their pressure rise characteristics.

### 1. Introduction to Fans, Blowers, and Compressors

These are all turbomachines that impart energy to a fluid, typically a gas, to increase its pressure and/or velocity. The primary distinction lies in the **magnitude of pressure rise** they can achieve.

*   **Fans:** Impart a relatively low pressure rise to the fluid. Their primary function is to move large volumes of air or gas at low velocities.
    *   *Example:* Ceiling fans, ventilation fans, exhaust fans.
*   **Blowers:** Achieve a moderate pressure rise compared to fans. They can move a significant volume of gas at higher velocities.
    *   *Example:* Turbochargers in internal combustion engines, industrial air blowers, forced draft blowers in boilers.
*   **Compressors:** Achieve a significant pressure rise, significantly increasing the density of the gas.
    *   *Example:* Refrigeration compressors, air compressors for pneumatic tools, jet engine compressors.

**Key Concept:** The pressure rise is the fundamental parameter differentiating these devices. While the underlying principles of fluid acceleration and pressure generation are similar, the design and performance targets vary significantly.

**References:**
*   Dixon, S.I. (1999). *Fluid Mechanics and Thermodynamics of Turbomachinery*. Pergamom Press. (Chapter on Positive Displacement Machines and Centrifugal Machines)
*   Yahya, S.H. (1996). *Turbines, Compressor and Fans*. Tata Mc Graw Hill. (Chapter 1: Introduction to Turbomachines)

### 2. Classification of Fans, Blowers, and Compressors

While all three are turbomachines, their classification can be done based on several criteria, including the **direction of fluid flow** relative to the axis of rotation.

#### 2.1. Based on Direction of Fluid Flow:

##### 2.1.1. Radial Flow Machines (Centrifugal Machines):

*   **Working Principle:** Fluid enters the impeller axially and is discharged radially outwards due to centrifugal force. The impeller vanes impart kinetic energy to the fluid, which is then converted into pressure energy in the volute casing or diffuser.
*   **Characteristics:**
    *   High pressure rise for a given diameter and speed.
    *   Relatively lower flow rates compared to axial flow machines of similar size.
    *   Suitable for applications requiring significant pressure build-up.
*   **Examples:**
    *   **Fans:** Centrifugal fans (e.g., squirrel cage fans, sirocco fans) used in HVAC systems, vacuum cleaners.
    *   **Blowers:** Many industrial blowers and turbochargers.
    *   **Compressors:** Centrifugal compressors (e.g., in turbochargers, multi-stage centrifugal compressors for process industries).

##### 2.1.2. Axial Flow Machines:

*   **Working Principle:** Fluid flows parallel to the axis of rotation through the impeller. The impeller blades are airfoil-shaped and impart momentum to the fluid, increasing its velocity. This kinetic energy is then converted into pressure energy in subsequent stages or diffusers.
*   **Characteristics:**
    *   High flow rates for a given diameter and speed.
    *   Relatively low pressure rise per stage.
    *   Multiple stages are often used to achieve significant pressure rise.
*   **Examples:**
    *   **Fans:** Propeller fans, ceiling fans, axial flow ventilation fans.
    *   **Blowers:** Axial flow fans used in large ventilation systems, cooling towers.
    *   **Compressors:** Axial flow compressors (e.g., in jet engines, large industrial air separation plants).

##### 2.1.3. Mixed Flow Machines:

*   **Working Principle:** Fluid enters axially and is discharged at an angle between radial and axial directions. They combine features of both radial and axial flow machines.
*   **Characteristics:**
    *   Moderate flow rates and moderate pressure rise.
    *   Often used where a balance between flow and pressure is required.
*   **Examples:** Some types of pumps and compressors.

#### 2.2. Other Classifications:

*   **Based on Number of Stages:**
    *   **Single-stage:** One impeller.
    *   **Multi-stage:** Multiple impellers in series to achieve higher pressures.
*   **Based on Casing Design:**
    *   **Volute Casing:** A spiral-shaped casing that gradually increases in cross-sectional area to convert kinetic energy into pressure energy.
    *   **Diffuser Casing:** Uses a series of stationary vanes (diffuser vanes) to slow down the fluid and increase pressure.

**Important Point to Remember:** The choice between radial and axial flow design is driven by the required flow rate and pressure rise. For high pressure and low flow, radial is preferred. For high flow and low pressure, axial is preferred.

**Learning Outcome Alignment:** CO1 (Knowledge Level: K3) - Understanding these classifications and their underlying principles helps in identifying the efficiency and performance characteristics of these machines. CO4 (Knowledge Level: K3) - This forms the basis for selecting an appropriate turbomachine for a given application.

### 3. Working Principles of Fans, Blowers, and Compressors

The fundamental principle behind all these machines is the **conversion of mechanical energy into fluid energy**. This is achieved through the rotation of an impeller fitted with vanes.

#### 3.1. Fans:

*   **Working Principle:** Fans primarily increase the kinetic energy of the air or gas. The pressure rise is relatively small. The impeller rotates, imparting velocity to the fluid. This velocity increase is the main driver of airflow.
*   **Energy Conversion:** Mechanical Energy $\rightarrow$ Kinetic Energy $\rightarrow$ Small Pressure Energy
*   **Key Components:**
    *   **Impeller:** Rotating disc with blades that push the fluid.
    *   **Casing:** Encloses the impeller, directing the flow and facilitating pressure recovery.
*   **Example (Propeller Fan):** Blades are airfoil-shaped. As they rotate, they create a low-pressure zone in front and a high-pressure zone behind, pushing air forward.

#### 3.2. Blowers:

*   **Working Principle:** Blowers impart a moderate pressure rise. They increase both the kinetic energy and the pressure energy of the gas. The design is often similar to centrifugal pumps, but optimized for gaseous fluids.
*   **Energy Conversion:** Mechanical Energy $\rightarrow$ Kinetic Energy $\rightarrow$ Moderate Pressure Energy
*   **Key Components:**
    *   **Impeller:** Can be radial or mixed flow.
    *   **Casing:** Often a volute or diffuser to recover pressure from the kinetic energy.
*   **Example (Centrifugal Blower):** Fluid enters the eye of the impeller, is accelerated radially by the vanes, and exits at a higher pressure due to centrifugal force and diffusion in the casing.

#### 3.3. Compressors:

*   **Working Principle:** Compressors are designed to achieve a significant pressure rise by imparting a large amount of energy to the gas. This increased pressure also leads to an increase in gas density. The process involves increasing the kinetic energy of the gas and then efficiently converting it into pressure energy, often through multiple stages.
*   **Energy Conversion:** Mechanical Energy $\rightarrow$ Kinetic Energy $\rightarrow$ Significant Pressure Energy
*   **Key Components:**
    *   **Impeller/Rotors:** In centrifugal compressors, these are the rotating components. In axial compressors, these are the rotating blades.
    *   **Diffuser/Stators:** Stationary vanes that slow down the high-velocity gas from the impeller/rotors, converting kinetic energy into pressure energy. In axial compressors, diffusers are often called stators or guide vanes.
*   **Example (Axial Compressor Stage):**
    1.  **Rotor:** Rotates and accelerates the air, increasing its velocity and imparting some pressure rise.
    2.  **Stator:** Stationary vanes that follow the rotor. They diffuse the air (slow it down), converting the kinetic energy into a significant pressure rise.

**Reference:**
*   Venkanna, B.K. (2009). *Fundamentals of Turbo Machinery*. PHI Learning Pvt. Ltd. (Chapter 10: Centrifugal Compressors, Chapter 11: Axial Flow Compressors)

**Learning Outcome Alignment:** CO1 (Knowledge Level: K3) - Understanding these working principles is crucial for calculating efficiencies. CO2 (Knowledge Level: K3) - The velocity triangles at the impeller and diffuser exit are fundamental to analyzing the performance of these machines.

### 4. Velocity Triangles for Radial and Axial Flow Machines

Velocity triangles are a graphical representation of the velocities of the fluid at the inlet and outlet of an impeller blade. They are essential for calculating the energy transferred and the performance of turbomachines.

#### 4.1. Radial Flow Machines (e.g., Centrifugal Compressor):

*   **Inlet Velocity Triangle (Blade Speed $u_1$, Absolute Velocity $V_1$, Relative Velocity $W_1$, Whirl Velocity $V_{w1}$):**
    *   $u_1$: Tangential velocity of the impeller at the inlet. $u_1 = \omega r_1$.
    *   $V_1$: Absolute velocity of the fluid entering the impeller.
    *   $W_1$: Velocity of the fluid relative to the impeller.
    *   $V_{w1}$: Whirl component of the absolute velocity at the inlet.
    *   $V_{f1}$: Meridional (axial for centrifugal) component of the absolute velocity at the inlet.

*   **Outlet Velocity Triangle (Blade Speed $u_2$, Absolute Velocity $V_2$, Relative Velocity $W_2$, Whirl Velocity $V_{w2}$):**
    *   $u_2$: Tangential velocity of the impeller at the outlet. $u_2 = \omega r_2$.
    *   $V_2$: Absolute velocity of the fluid leaving the impeller.
    *   $W_2$: Velocity of the fluid relative to the impeller at the outlet.
    *   $V_{w2}$: Whirl component of the absolute velocity at the outlet.
    *   $V_{f2}$: Meridional (radial for centrifugal) component of the absolute velocity at the outlet.

*   **Euler's Turbine Equation (for pumps, fans, compressors):** The theoretical work done per unit mass of fluid is given by:
    $W_{th} = u_2 V_{w2} - u_1 V_{w1}$

*   **Theoretical Head:** The theoretical head developed by the impeller is $H_{th} = \frac{W_{th}}{g}$.
    $H_{th} = \frac{1}{g}(u_2 V_{w2} - u_1 V_{w1})$

**Example:** For a radial flow compressor with no pre-whirl at the inlet ($V_{w1} = 0$), the theoretical head becomes $H_{th} = \frac{u_2 V_{w2}}{g}$.

#### 4.2. Axial Flow Machines (e.g., Axial Compressor):

*   **Inlet Velocity Triangle:**
    *   $u_1$: Tangential velocity of the rotor at the inlet.
    *   $V_1$: Absolute velocity of the fluid entering the rotor.
    *   $W_1$: Velocity of the fluid relative to the rotor.
    *   $V_{w1}$: Whirl component of the absolute velocity at the inlet.
    *   $V_{f1}$: Meridional (axial) component of the absolute velocity at the inlet.

*   **Outlet Velocity Triangle (after rotor):**
    *   $u_2$: Tangential velocity of the rotor at the outlet.
    *   $W_2$: Velocity of the fluid relative to the rotor at the outlet.
    *   $V_{w2}$: Whirl component of the absolute velocity after the rotor.
    *   $V_{f2}$: Meridional (axial) component of the absolute velocity after the rotor.

*   **Outlet Velocity Triangle (after stator):**
    *   $V_2'$: Absolute velocity of the fluid leaving the stator.
    *   $V_{w2}'$: Whirl component of the absolute velocity leaving the stator.
    *   $V_{f2}'$: Meridional (axial) component of the absolute velocity leaving the stator (ideally $V_{f2}' = V_{f2}$).
    *   Stators change the direction of the absolute velocity without significantly changing the velocity magnitude in an ideal scenario.

*   **Euler's Turbine Equation (for one stage):**
    $W_{th, stage} = (u_2 V_{w2} - u_1 V_{w1}) - (u_1 V_{w1}' - u_2 V_{w2}') $
    However, for a compressor stage, work is done *on* the fluid. The work done by the rotor is $(u_2 V_{w2} - u_1 V_{w1})$ and the stator does no net work. So for the stage, it's the work done by the rotor.

    $W_{th, stage} = u_2 V_{w2} - u_1 V_{w1}$ (where $V_{w2}$ is the whirl after the rotor, and $V_{w1}$ is the whirl entering the rotor. The stator straightens the flow, so ideally $V_{w1}'$ and $V_{w2}'$ relate to the flow entering and leaving the stator, but the net whirl change across the stage is dominated by the rotor).

    More precisely, if we consider the entire stage (rotor + stator):
    $W_{th, stage} = (u_2 V_{w2} - u_1 V_{w1})$ where $V_{w1}$ is whirl entering rotor and $V_{w2}$ is whirl leaving rotor.
    The stator's role is to convert dynamic pressure to static pressure, and straighten the flow.

    **For a single stage of axial compressor:**
    Work done per unit mass = $u \Delta V_w = u (V_{w2} - V_{w1})$ (where $u$ is constant along the stage, and $V_{w1}, V_{w2}$ are whirl components before and after the rotor).
    Work done per unit mass = $u_2 V_{w2} - u_1 V_{w1}$ (general form where $u_1 \neq u_2$).

**Reference:**
*   Dixon, S.I. (1999). *Fluid Mechanics and Thermodynamics of Turbomachinery*. Pergamom Press. (Chapter 7: Centrifugal Pumps and Compressors, Chapter 8: Axial Flow Machines)
*   Yahya, S.H. (1996). *Turbines, Compressor and Fans*. Tata Mc Graw Hill. (Chapter 4: Velocity Diagrams, Chapter 5: Axial Flow Compressors)

**Learning Outcome Alignment:** CO2 (Knowledge Level: K3) - This section directly addresses the analysis of velocity triangles and how they relate to performance.

### 5. Performance Characteristics (Head-Capacity, Power-Capacity)

The performance of fans, blowers, and compressors is typically represented by characteristic curves, plotting head (pressure rise) and power consumption against flow rate (capacity).

#### 5.1. Head-Capacity (H-Q) Curves:

*   **Fans:** Typically have a relatively flat H-Q curve. The pressure rise doesn't change drastically with flow rate.
*   **Blowers:** Have a more sloped H-Q curve than fans, indicating a more significant pressure rise with increasing flow.
*   **Compressors:**
    *   **Centrifugal Compressors:** Exhibit a drooping H-Q curve, meaning the head decreases as flow rate increases. There's a surge limit at low flow rates and a choke limit at high flow rates.
    *   **Axial Compressors:** Also have a drooping H-Q curve, but typically steeper than centrifugal compressors. They are also susceptible to surge and choke.

**Key Concepts:**

*   **Flow Rate (Capacity):** Volume of fluid delivered per unit time (e.g., m³/s, CFM).
*   **Head:** Equivalent height of the fluid column that the machine can generate (e.g., meters of water, psi). For gases, pressure rise is often used directly.
*   **Surge:** A phenomenon in compressors occurring at low flow rates, characterized by unstable flow, backflow, and vibration. It happens when the mass flow rate falls below a certain minimum.
*   **Choke:** Occurs at high flow rates when the fluid velocity reaches the speed of sound in some part of the compressor, limiting further flow increase.

#### 5.2. Power-Capacity (P-Q) Curves:

*   **Fans:** Power consumption generally increases with flow rate.
*   **Blowers:** Power consumption increases more significantly with flow rate.
*   **Compressors:** Power consumption increases substantially with flow rate. For centrifugal compressors, the power required often peaks and then decreases slightly before the choke point.

**Reference:**
*   Dixon, S.I. (1999). *Fluid Mechanics and Thermodynamics of Turbomachinery*. Pergamom Press. (Chapter 7 & 8 Performance Characteristics)
*   Venkanna, B.K. (2009). *Fundamentals of Turbo Machinery*. PHI Learning Pvt. Ltd. (Performance curves for compressors)

**Learning Outcome Alignment:** CO1 (Knowledge Level: K3) - Understanding these curves is crucial for determining the efficiencies of these machines under various operating conditions. CO4 (Knowledge Level: K3) - This knowledge is vital for selecting a machine that operates efficiently within the desired range.

### 6. Minimum Speed for Starting Flow and Maximum Suction Lift (Relevant to Pumps, but foundational for understanding fluid movement)

While the module focuses on fans, blowers, and compressors, concepts like minimum speed for starting flow and maximum suction lift are integral to understanding fluid handling by turbomachines.

*   **Minimum Speed for Starting Flow:** For any turbomachine to deliver fluid, the impeller must rotate at a speed high enough to overcome the system head (static head + friction losses) and any internal losses. Below this speed, the machine may not deliver any net flow or may even act as a motor.
*   **Maximum Suction Lift (for pumps):** The maximum vertical distance from the free surface of the liquid to the impeller eye that a pump can lift the liquid. This is limited by atmospheric pressure, vapor pressure of the liquid, and friction losses in the suction pipe.

**Relevance to Fans/Blowers/Compressors:** Although these terms are more common for pumps, the underlying principle of overcoming system resistance for flow to initiate applies. For a compressor, the minimum speed required to achieve a positive pressure rise against atmospheric pressure is a similar concept.

### 7. Net Positive Suction Head (NPSH) and Cavitation (Primarily for Pumps, but relevant to fluid behavior)

*   **Net Positive Suction Head (NPSH):** The absolute pressure at the suction port of the pump (or inlet of a blower/compressor), minus the vapor pressure of the liquid, expressed in units of head. It represents the pressure available to prevent cavitation.
    *   **NPSH Available (NPSHa):** Determined by the system and installation.
    *   **NPSH Required (NPSHr):** Determined by the pump/machine design and operating speed.
*   **Cavitation:** The formation and subsequent collapse of vapor bubbles within the fluid due to low pressure. This collapse can cause significant damage to impeller blades and other components.

**Relevance to Fans/Blowers/Compressors:** While cavitation is less common in gas handling systems due to the low vapor pressure of gases, similar phenomena of flow separation and instability can occur, especially at high speeds or with specific gas compositions. The concept of ensuring sufficient pressure at the inlet to avoid undesirable effects is universal.

### 8. Need for Priming (Primarily for Pumps)

*   **Priming:** The process of filling the pump casing and suction line with the fluid to be pumped before starting the pump. This is necessary for pumps that cannot create sufficient suction to lift the fluid from the source, especially if air is present in the suction line.
*   **Fans and Blowers:** Typically do not require priming as they are designed to handle air and start with ambient pressure.
*   **Compressors:** Also generally do not require priming in the same way as pumps, as they are designed to compress atmospheric air or process gases.

### 9. Pumps in Series and Parallel (Relevant to Centrifugal Pumps, provides context for system performance)

Understanding how multiple pumps are configured helps in appreciating system performance enhancement.

*   **Pumps in Series:**
    *   **Purpose:** To increase the total head delivered to the system for a given flow rate.
    *   **Arrangement:** Discharge of one pump is connected to the suction of the next.
    *   **Characteristic:** Flow rate remains approximately the same, while heads add up.
*   **Pumps in Parallel:**
    *   **Purpose:** To increase the total flow rate delivered to the system for a given head.
    *   **Arrangement:** Suction of both pumps connected to the common suction, and discharges connected to a common discharge.
    *   **Characteristic:** Heads remain approximately the same, while flow rates add up.

**Relevance:** While not directly about fans, blowers, and compressors, this concept highlights how multiple turbomachines can be used to meet system demands, influencing the overall selection and design.

**Learning Outcome Alignment:** CO4 (Knowledge Level: K3) - Understanding these configurations can inform the selection of multiple turbomachines for a large-scale application, such as multiple fans in a large ventilation system.

---

### Practice Questions and Answers

**Question 1:** Differentiate between a fan, a blower, and a compressor based on the typical pressure rise they achieve.

**Answer 1:**
*   **Fans:** Achieve a low pressure rise, primarily used for moving large volumes of air at low velocities.
*   **Blowers:** Achieve a moderate pressure rise, higher than fans.
*   **Compressors:** Achieve a significant pressure rise, substantially increasing the gas density.

**Question 2:** In which type of turbomachine is the fluid flow primarily parallel to the axis of rotation?
    a) Centrifugal Compressor
    b) Axial Compressor
    c) Radial Blower
    d) Mixed Flow Fan

**Answer 2:** b) Axial Compressor

**Question 3:** What is the fundamental equation used to calculate the theoretical work done per unit mass of fluid in a turbomachine based on velocity triangles?

**Answer 3:** Euler's Turbine Equation: $W_{th} = u_2 V_{w2} - u_1 V_{w1}$

**Question 4:** Describe the phenomenon of "surge" in compressors.

**Answer 4:** Surge is an unstable operating condition in compressors that occurs at low flow rates. It is characterized by intermittent backflow of fluid, flow fluctuations, and significant vibration. It happens when the mass flow rate falls below a certain minimum threshold, where the impeller can no longer impart enough energy to sustain the flow against the system resistance.

**Question 5:** If two identical centrifugal compressors are connected in series, how would the overall head and flow rate change compared to a single compressor operating at the same speed?

**Answer 5:**
*   **Head:** The total head will be approximately double the head of a single compressor (heads add up).
*   **Flow Rate:** The flow rate will remain approximately the same as that of a single compressor.

**Question 6:** A centrifugal fan is used for ventilation. If you need to increase the volume of air circulated, what would be the primary strategy from a performance perspective (assuming the fan speed is fixed)?

**Answer 6:** To increase the volume of air circulated at a fixed speed, you would need to reduce the resistance in the system (e.g., open more vents, reduce duct friction). If the fan is operating at its maximum flow rate, increasing the fan speed would be necessary to achieve a higher flow rate.

**Question 7:** What is the primary purpose of a stator in an axial flow compressor stage?

**Answer 7:** The primary purpose of a stator in an axial flow compressor stage is to diffuse the high-velocity fluid exiting the rotor. This diffusion process converts the kinetic energy imparted by the rotor into a significant pressure rise. Stators also straighten the flow, preparing it for the next rotor stage.

---

### Important Points to Remember:

*   **Pressure Rise is Key:** The main differentiator between fans, blowers, and compressors is the magnitude of pressure rise they generate.
*   **Flow Direction:** Radial flow machines generally provide higher pressure, while axial flow machines provide higher flow rates.
*   **Euler's Equation:** This is a fundamental tool for analyzing the theoretical performance of all turbomachines.
*   **Performance Curves:** H-Q and P-Q curves are essential for understanding the operating range and efficiency of these machines.
*   **Surge and Choke:** These are critical limitations for compressors and must be considered during selection and operation.
*   **Velocity Triangles:** These provide a detailed insight into the fluid dynamics within the impeller and are crucial for design and analysis.

---

This comprehensive study note covers the classification and working principles of fans, blowers, and compressors, aligning with the learning outcomes of Module 4. It incorporates key concepts, definitions, and theoretical foundations from the specified textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
