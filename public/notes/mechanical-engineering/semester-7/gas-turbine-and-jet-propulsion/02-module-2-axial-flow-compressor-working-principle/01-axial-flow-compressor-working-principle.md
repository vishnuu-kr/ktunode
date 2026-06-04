---
title: "Axial flow compressor – Working principle"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 2: Axial flow compressor – Working principle"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463c9f"
status: "completed"
scrapedAt: "2026-05-20T18:13:47.789Z"
---
# Gas Turbine and Jet Propulsion: Module 2 - Axial Flow Compressor - Working Principle

This module delves into the fundamental working principle of axial flow compressors, a critical component in gas turbine engines. Understanding this principle is essential for analyzing engine performance and efficiency, as highlighted in Course Outcomes CO1, CO2, and CO3.

## 1. Introduction to Axial Flow Compressors

Axial flow compressors are rotary positive-displacement machines that are used to increase the pressure of a fluid. They are characterized by the fluid flowing parallel to the axis of rotation. These compressors are widely used in gas turbine engines for aircraft propulsion and power generation due to their high efficiency and ability to handle large volumes of air at high speeds.

**Key Concepts:**

*   **Compressor:** A device that increases the pressure of a fluid (typically a gas).
*   **Axial Flow:** The direction of fluid movement is predominantly parallel to the axis of rotation of the compressor.
*   **Gas Turbine Engine:** A type of internal combustion engine that uses a gas turbine as its main source of power. The compressor is the first stage, increasing the pressure of the incoming air before it enters the combustor.

**Relevance to Course Outcomes:**

*   **CO1 (K3):** Understanding the working principle allows us to apply thermodynamics and fluid dynamics principles to analyze the compressor's performance and efficiency.
*   **CO2 (K4):** This module directly addresses the analysis of axial flow compressor performance characteristics.
*   **CO3 (K4):** Analyzing the compressor's operation is crucial for understanding the overall performance of gas turbine systems.

**References:**

*   **Ganesan, V. (2017).** *Gas Turbines.* (Third ed.). McGraw Hill Education. (Chapter on Compressors)
*   **Yahya, S. M. (2011).** *Turbines, Compressors and Fans.* (Fourth ed.). McGraw Hill. (Chapter on Axial Flow Compressors)
*   **Mathur, M. L. (2010).** *Gas Turbine & Jet Rocket Propulsion.* (First ed.). Standard Publishers Distributors. (Chapter on Compressors)

---

## 2. Working Principle of Axial Flow Compressors

The axial flow compressor operates by a series of rotating and stationary blades, also known as **rotors** and **stators**, respectively. Each pair of rotor and stator blades constitutes a **stage**. The primary function of the rotor is to add kinetic energy to the fluid, and the stator then converts this kinetic energy into pressure energy by diffusing the flow.

### 2.1. Components of an Axial Flow Compressor

*   **Rotor Blades:** These are airfoil-shaped blades attached to a rotating disk (rotor). They impart energy to the incoming air, increasing its velocity and pressure. The blades are designed to accelerate the flow and produce a swirling motion.
*   **Stator Blades (Vanes):** These are stationary airfoil-shaped blades attached to the casing of the compressor. They are positioned between the rotor stages. Their primary function is to diffuse the high-velocity air from the rotor, converting kinetic energy into static pressure rise. They also straighten the flow and guide it to the next rotor stage at the correct angle.
*   **Rotor Disks:** The rotating disks that hold the rotor blades and are connected to the engine's shaft.
*   **Casing:** The outer housing that encloses the rotor and stator assembly.
*   **Shaft:** The rotating shaft driven by the turbine, which drives the rotor blades.

### 2.2. The Compression Process - Stage by Stage

A single stage of an axial flow compressor typically consists of a row of rotor blades followed by a row of stator blades. The process within a stage can be understood by considering the energy addition and conversion.

**Rotor Stage (Work Input):**

1.  **Energy Addition:** The rotor blades, rotating at high speed, exert a force on the air as it passes through them. This force does work on the air, increasing its kinetic energy (velocity) and to a lesser extent, its internal energy (temperature and pressure).
2.  **Swirl Generation:** The rotor blades are angled to impart a tangential velocity component to the air, causing it to swirl.

**Stator Stage (Diffusion and Pressure Recovery):**

1.  **Diffusion:** The stator blades are designed with diverging passages. As the swirling, high-velocity air passes through the stator, the passages widen, causing the air to slow down.
2.  **Kinetic to Pressure Energy Conversion:** According to Bernoulli's principle, as the kinetic energy decreases, the static pressure increases. This diffusion process is crucial for achieving a significant pressure rise.
3.  **Flow Rectification:** The stator blades also guide the air and reduce the swirl, directing it axially towards the next rotor stage at an optimal angle to maximize the work input in the subsequent stage.

**Multi-Stage Compression:**

*   An axial flow compressor comprises multiple stages arranged in series.
*   The air is compressed sequentially by each rotor-stator pair.
*   The pressure ratio across each stage is typically low, but the cumulative effect of many stages results in a significant overall pressure rise.
*   The number of stages can range from a few in small engines to over a dozen in large, high-pressure ratio engines.

### 2.3. Velocity Diagrams

Velocity diagrams are powerful tools for analyzing the fluid flow and energy transfer within each stage of an axial flow compressor. They represent the velocities of the air at the inlet and outlet of the rotor and stator blades.

**Key Velocities:**

*   **Absolute Velocity ($V$):** The velocity of the air as observed from a stationary frame of reference.
*   **Relative Velocity ($W$):** The velocity of the air as observed from the moving rotor blades.
*   **Blade Velocity ($U$):** The tangential velocity of the rotor blades. This is constant across the radius for a simple rotor disk.

**Velocity Components:**

*   **Axial Velocity ($V_a$):** The component of velocity parallel to the compressor axis. Ideally, this is kept constant through the compressor for simplicity in initial analysis, although in reality, it may vary slightly.
*   **Tangential Velocity ($V_u$):** The component of velocity perpendicular to the compressor axis, representing the swirl.

**Diagram for a Rotor Blade (Inlet and Outlet):**

*   **Inlet:** The air enters the rotor with absolute velocity $V_1$. The relative velocity is $W_1 = V_1 - U$.
*   **Outlet:** The air leaves the rotor with absolute velocity $V_2$ and relative velocity $W_2$.

The velocity triangle at the rotor outlet shows that $V_2$ is the vector sum of $W_2$ and $U$.

**Diagram for a Stator Blade (Inlet and Outlet):**

*   **Inlet:** The air enters the stator with absolute velocity $V_2$.
*   **Outlet:** The air leaves the stator with absolute velocity $V_3$. The stator's role is to diffuse $V_2$ and straighten the flow, ideally making the tangential component zero ($V_{u3} \approx 0$).

**Work Done by Rotor:**

The work done per unit mass of air by the rotor is given by Euler's turbomachine equation:

$W_{rotor} = U (V_{u2} - V_{u1})$

Where:
*   $U$ is the blade speed.
*   $V_{u1}$ is the tangential velocity of the air entering the rotor.
*   $V_{u2}$ is the tangential velocity of the air leaving the rotor.

For an axial flow compressor, the air entering the first rotor has negligible tangential velocity ($V_{u1} \approx 0$). Therefore, the work done is $W_{rotor} = U V_{u2}$.

**Pressure Rise in a Stage:**

The total pressure rise in a stage is a combination of the pressure rise due to the increase in kinetic energy from the rotor (which is then converted by the stator) and the diffusion process in the stator.

**Relevance to Course Outcomes:**

*   **CO1 (K3):** Velocity diagrams are directly derived from fluid dynamics principles and are used to calculate work done and energy transfer.
*   **CO2 (K4):** Analyzing these diagrams is fundamental to understanding the performance characteristics of axial flow compressors.

**References:**

*   **Cohen, H. (2019).** *Gas Turbine Theory.* (Seventh ed.). Pearson Education. (Chapter on Axial Flow Compressors)
*   **Ganesan, V. (2017).** *Gas Turbines.* (Third ed.). McGraw Hill Education. (Chapter on Compressors)
*   **Yahya, S. M. (2011).** *Turbines, Compressors and Fans.* (Fourth ed.). McGraw Hill. (Chapter on Axial Flow Compressors)

---

## 3. Energy Transfer and Efficiency

The primary goal of the compressor is to increase the pressure of the air. This is achieved by adding energy to the air and then converting that energy into a pressure rise.

### 3.1. Work Input

The theoretical work input to the compressor per unit mass of air is given by the integral of $U \cdot dV_u$ across the rotor. For a simplified analysis, assuming constant blade speed $U$:

$W_{ideal} = U (V_{u,out} - V_{u,in})$

In an axial flow compressor, the incoming air to the first stage is usually axial, so $V_{u,in} = 0$. Thus, $W_{ideal} = U V_{u,out}$.

### 3.2. Stagnation Pressure Rise

The stagnation pressure ($P_0$) is the pressure that would be reached if the fluid were brought to rest isentropically. The increase in stagnation pressure is a measure of the compressor's effectiveness.

**Pressure Ratio:**

The overall pressure ratio ($PR$) of the compressor is defined as the ratio of the total pressure at the outlet to the total pressure at the inlet:

$PR = \frac{P_{0,out}}{P_{0,in}}$

### 3.3. Isentropic Efficiency

The isentropic efficiency ($\eta_{isen}$) of a compressor measures how close the actual compression process is to an ideal (isentropic) process.

$\eta_{isen} = \frac{\text{Isentropic work input}}{\text{Actual work input}} = \frac{W_{isentropic}}{W_{actual}}$

In terms of stagnation pressures and temperatures:

$\eta_{isen} = \frac{T_{0,in} [(\frac{P_{0,out}}{P_{0,in}})^{\frac{\gamma-1}{\gamma}} - 1]}{T_{0,out} - T_{0,in}}$

Where:
*   $T_{0,in}$ is the stagnation temperature at the inlet.
*   $T_{0,out}$ is the actual stagnation temperature at the outlet.
*   $P_{0,in}$ is the stagnation pressure at the inlet.
*   $P_{0,out}$ is the actual stagnation pressure at the outlet.
*   $\gamma$ is the ratio of specific heats for the gas.

**Higher efficiency means less work is required for a given pressure rise, leading to better fuel economy in the gas turbine engine.**

### 3.4. Work Factor

The work factor is a parameter used to account for the variation of blade speed ($U$) across the radius of the rotor. For a simple rotor disk, $U$ is proportional to the radius ($r$).

$W_{actual} = \int_{r_{hub}}^{r_{tip}} U_{r} dW_{actual,r}$

The work factor is often incorporated to simplify the calculation of work done when blade speed varies.

**Relevance to Course Outcomes:**

*   **CO1 (K3):** Understanding efficiency is key to applying thermodynamic principles to assess performance.
*   **CO2 (K4):** Calculating and analyzing efficiency is a core part of analyzing compressor performance.
*   **CO3 (K4):** The compressor's efficiency directly impacts the overall gas turbine system performance.

**References:**

*   **Ganesan, V. (2017).** *Gas Turbines.* (Third ed.). McGraw Hill Education. (Chapter on Compressors)
*   **Yahya, S. M. (2011).** *Turbines, Compressors and Fans.* (Fourth ed.). McGraw Hill. (Chapter on Axial Flow Compressors)

---

## 4. Blade Aerodynamics and Design Considerations

The efficiency and performance of an axial flow compressor are highly dependent on the aerodynamic design of its blades.

### 4.1. Airfoil Shapes

*   **Aerodynamic Profile:** Both rotor and stator blades are essentially airfoils designed to efficiently transfer energy and change the fluid's momentum.
*   **Lift and Drag:** The blades are designed to generate lift, which contributes to the work done on the fluid by the rotor. Minimizing drag is crucial for efficiency.
*   **Angle of Attack:** The angle between the relative airflow and the chord line of the airfoil. An optimal angle of attack maximizes lift and minimizes drag.

### 4.2. Blade Speed and Radial Variation

*   **Blade Speed (U):** As mentioned, blade speed ($U$) varies with radius ($U = \omega r$, where $\omega$ is angular velocity and $r$ is radius). This radial variation in blade speed affects the velocity triangles and work distribution.
*   **Hub-to-Tip Ratio:** The ratio of the inner radius (hub) to the outer radius (tip) of the compressor stages. This ratio influences the design and performance, particularly concerning radial work distribution. A lower hub-to-tip ratio generally implies a larger variation in blade speed across the annulus.

### 4.3. Flow Through Blades

*   **Axial Velocity Profile:** In a multi-stage compressor, the axial velocity may not be uniform across the annulus. This can lead to variations in incidence angles and efficiency across the blade span.
*   **Circulation:** The swirling motion imparted by the rotor blades is related to the circulation generated by the blades.
*   **Diffusion Factor (D):** A measure of the adverse pressure gradient along the suction surface of a blade. A higher diffusion factor indicates a greater risk of flow separation and stall.

$D = 1 - \frac{W_{exit}}{W_{inlet}} + \frac{V_{u,in} - V_{u,exit}}{W_{inlet} \cdot D_{inlet}}$

Where $D_{inlet}$ is the inlet passage width.

**Relevance to Course Outcomes:**

*   **CO2 (K4):** Blade design and aerodynamic principles are central to analyzing compressor performance characteristics.
*   **CO3 (K4):** Understanding these details is vital for analyzing the characteristics of compressor components within a larger system.

**References:**

*   **Cohen, H. (2019).** *Gas Turbine Theory.* (Seventh ed.). Pearson Education. (Chapter on Axial Flow Compressors)
*   **Rolls Royce. (2015).** *The Jet Engine.* (First ed.). Wiley. (Chapters on Compressor Design)
*   **Yahya, S. M. (2011).** *Turbines, Compressors and Fans.* (Fourth ed.). McGraw Hill. (Chapter on Axial Flow Compressors)

---

## 5. Practice Questions and Exercises

Here are some questions to test your understanding of the working principle of axial flow compressors.

**Question 1:**

Describe the primary function of a rotor blade and a stator blade in an axial flow compressor.

**Answer:**
The rotor blade's primary function is to add kinetic energy to the air, increasing its velocity and imparting a swirling motion. The stator blade's primary function is to diffuse the high-velocity air from the rotor, converting kinetic energy into static pressure rise, and to guide the flow to the next stage.

---

**Question 2:**

What is the significance of velocity diagrams in the analysis of axial flow compressors?

**Answer:**
Velocity diagrams are crucial for analyzing the energy transfer and flow behavior within each stage. They help in determining work input, predicting pressure rise, and understanding the aerodynamic performance of the blades. They are derived from fluid dynamics principles.

---

**Question 3:**

Define isentropic efficiency for a compressor and explain its importance.

**Answer:**
Isentropic efficiency is the ratio of ideal (isentropic) work input to the actual work input required to achieve a given pressure rise. It is important because it quantizes how effectively the compressor converts mechanical work into useful pressure energy, indicating the level of irreversibilities (like friction and turbulence) in the process. A higher efficiency implies better performance and reduced energy consumption.

---

**Question 4:**

Given the following data for a single stage of an axial flow compressor:
*   Blade speed ($U$) = 200 m/s
*   Tangential velocity of air leaving the rotor ($V_{u2}$) = 150 m/s
*   Tangential velocity of air entering the rotor ($V_{u1}$) = 0 m/s

Calculate the theoretical work done per unit mass of air by the rotor.

**Answer:**
Theoretical work done ($W_{ideal}$) = $U (V_{u2} - V_{u1})$
$W_{ideal}$ = 200 m/s * (150 m/s - 0 m/s)
$W_{ideal}$ = 200 * 150 J/kg
$W_{ideal}$ = 30,000 J/kg or 30 kJ/kg

---

**Question 5:**

Explain why axial flow compressors use multiple stages.

**Answer:**
Axial flow compressors use multiple stages to achieve a high overall pressure ratio. Each stage contributes a relatively small pressure rise. By arranging many stages in series, the cumulative pressure rise becomes substantial, which is necessary for efficient operation of a gas turbine engine.

---

## 6. Important Points to Remember

*   **Axial flow compressors** increase air pressure by passing it through alternating rows of **rotor** and **stator** blades.
*   **Rotors** add kinetic energy and impart swirl; **stators** convert kinetic energy into pressure energy (diffusion) and straighten the flow.
*   **Velocity diagrams** are essential for analyzing the fluid dynamics and work transfer within each stage.
*   The **work done by the rotor** is directly related to the blade speed and the change in tangential velocity of the air.
*   **Isentropic efficiency** is a key performance metric, indicating how close the actual compression process is to the ideal.
*   The **pressure ratio** is the overall pressure increase achieved by the compressor.
*   Multi-staging is necessary to achieve the high pressure ratios required for gas turbine engines.
*   **Blade aerodynamics** (airfoil shape, angle of attack, diffusion factor) are critical for compressor performance and efficiency.

---

## Conclusion

This module has provided a comprehensive understanding of the working principle of axial flow compressors. The sequential action of rotor and stator blades, supported by sound aerodynamic design and analyzed through velocity diagrams, allows these compressors to efficiently increase the pressure of the working fluid, forming the cornerstone of gas turbine engine operation. The concepts learned here directly contribute to achieving Course Outcomes CO1, CO2, and CO3.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
