---
title: "Inlet and nozzles – Subsonic inlets"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 3: Combustion – Theory of Combustion"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463cb5"
status: "completed"
scrapedAt: "2026-05-20T18:14:03.031Z"
---
## Gas Turbine and Jet Propulsion: Module 3 - Combustion

### Topic: Inlet and Nozzles – Subsonic Inlets

---

### **1. Introduction to Inlets and Nozzles in Gas Turbines**

Inlets and nozzles are critical components of a gas turbine engine, responsible for efficiently bringing air into the engine and expelling the high-velocity exhaust gases, respectively. Their design directly impacts the engine's overall performance, thrust generation, and fuel efficiency.

*   **Inlet:** The component that captures ambient air and delivers it to the compressor.
*   **Nozzle:** The component that accelerates the hot combustion gases to produce thrust.

**Relevance to Learning Outcomes:**

*   **CO3 (Analyze the performance of gas turbine systems by understanding the characteristics of various components):** Understanding inlet and nozzle design is crucial for analyzing the overall performance of a gas turbine. Inefficient inlets or nozzles can significantly reduce thrust and efficiency.
*   **CO4 (Understand the principles and characteristics of jet and rocket propulsion systems):** Inlets are the starting point for air-breathing jet engines, and nozzles are the mechanism for generating thrust.

**Reference:**

*   *Gas Turbines* by V. Ganesan (Chapter on Inlet and Nozzles)
*   *Gas Turbine Theory* by H. Cohen (Chapter on Inlet and Nozzles)

---

### **2. Functions of an Inlet**

The primary functions of an inlet are:

*   **Capture air:** To efficiently gather a sufficient mass flow rate of air from the surrounding atmosphere.
*   **Deliver air to the compressor:** To guide the captured air smoothly into the compressor with minimal losses.
*   **Convert kinetic energy to pressure energy (Subsonic Inlets):** To slow down the incoming air, converting its kinetic energy into static pressure, which benefits the compressor's performance. This is particularly important for subsonic inlets.
*   **Provide uniform flow:** To ensure a steady and uniform flow of air entering the compressor to prevent stall and uneven loading.
*   **Minimize drag:** To reduce aerodynamic drag imposed on the aircraft.

**Key Concepts:**

*   **Mass Flow Rate ($\dot{m}$):** The amount of air passing through the inlet per unit time.
*   **Ram Recovery:** The increase in static pressure at the inlet throat compared to the free-stream static pressure.
*   **Total Pressure:** The sum of static pressure and dynamic pressure.
*   **Static Pressure:** The pressure of the fluid at rest.
*   **Dynamic Pressure:** The pressure due to the motion of the fluid.

**Example:**
During cruise, an aircraft inlet needs to capture a large volume of air efficiently and slow it down to match the compressor's operating speed, thereby increasing the pressure before it enters the compressor.

---

### **3. Types of Inlets**

Inlets are broadly classified based on their operating Mach number and design:

**A. Subsonic Inlets:**

*   Operate at freestream Mach numbers less than 1.
*   The primary goal is to recover as much dynamic pressure as possible into static pressure (diffusion).
*   They are designed to decelerate the incoming air.

**B. Supersonic Inlets:**

*   Operate at freestream Mach numbers greater than 1.
*   They utilize oblique shocks and/or normal shocks to decelerate the flow from supersonic to subsonic before it enters the compressor.
*   More complex in design due to the need for shock management.

**Focus of this Topic: Subsonic Inlets**

---

### **4. Subsonic Inlet Design and Operation**

Subsonic inlets are designed to diffuse the incoming airflow, converting kinetic energy into static pressure. This process is governed by the principles of isentropic flow up to the throat (minimum area).

**Key Components and Features:**

*   **Lip:** The leading edge of the inlet. Its shape significantly affects performance, especially at high angles of attack and low speeds.
    *   **Rounded Lip:** Generally provides better performance at low speeds and high angles of attack by minimizing flow separation.
    *   **Sharp Lip:** Can be more efficient at very low angles of attack but prone to separation at higher angles.
*   **Divergent Duct:** The portion of the inlet after the lip that expands to slow down the air and increase its static pressure.
*   **Throat:** The point of minimum area in the inlet. For subsonic inlets, the flow at the throat is subsonic.

**Thermodynamic Considerations (Isentropic Flow):**

For an ideal, isentropic flow through a subsonic diffuser (inlet):

*   **Mass flow rate ($\dot{m}$):** Remains constant.
*   **Total Temperature ($T_0$):** Remains constant.
*   **Total Pressure ($P_0$):** Ideally remains constant (no losses). In reality, there are some losses due to friction and turbulence.
*   **Static Temperature ($T$):** Increases as the velocity decreases.
*   **Static Pressure ($P$):** Increases as the velocity decreases.
*   **Velocity ($V$):** Decreases.

**Governing Equations (Isentropic Flow Relations):**

The relationship between static and total properties for isentropic flow is given by:

$\frac{T_0}{T} = 1 + \frac{\gamma - 1}{2} M^2$

$\frac{P_0}{P} = \left(1 + \frac{\gamma - 1}{2} M^2\right)^{\frac{\gamma}{\gamma-1}}$

Where:
*   $T_0$ = Total Temperature
*   $T$ = Static Temperature
*   $P_0$ = Total Pressure
*   $P$ = Static Pressure
*   $\gamma$ = Ratio of specific heats (approx. 1.4 for air)
*   $M$ = Mach number

**Ram Recovery:**

The effectiveness of a subsonic inlet is often measured by its ram recovery, which is the ratio of the total pressure at the inlet exit to the free-stream total pressure.

Ram Recovery = $\frac{P_{0, \text{inlet exit}}}{P_{0, \text{freestream}}}$

*   Ideally, for a perfect diffuser, this ratio is 1.
*   In reality, losses reduce this value.

**Inlet Efficiency (Pressure Recovery):**

Inlet efficiency ($\eta_{\text{inlet}}$) can be defined as the ratio of the actual total pressure recovery to the isentropic total pressure recovery:

$\eta_{\text{inlet}} = \frac{P_{0, \text{inlet exit}} / P_{\text{freestream}}}{P_{0, \text{isentropic}} / P_{\text{freestream}}}$

**Important Points to Remember:**

*   Subsonic inlets aim to decelerate air (diffuse) to increase static pressure.
*   The lip design is crucial for preventing flow separation.
*   Ideal subsonic inlets operate isentropically, conserving total pressure and temperature.
*   Ram recovery indicates how well the inlet converts kinetic energy to static pressure.

**Reference:**

*   *Gas Turbines* by V. Ganesan (Chapter 3: Combustion - Inlet and Nozzles, Section on Subsonic Inlets)
*   *Turbines, Compressors and Fans* by S. M. Yahya (Chapter on Air Intake Design)

---

### **5. Factors Affecting Subsonic Inlet Performance**

Several factors influence the performance of subsonic inlets:

*   **Inlet Geometry:**
    *   **Lip Shape:** Rounded lips generally perform better over a wider range of conditions.
    *   **Divergence Angle:** A smaller divergence angle (typically < 7 degrees) minimizes flow separation and friction losses. Larger angles can lead to inefficient diffusion and potential stall.
    *   **Length to Throat Area Ratio:** Longer inlets with gradual diffusion tend to have better pressure recovery but add weight and drag.
*   **Angle of Attack ($\alpha$):** As the angle of attack increases, the flow can separate on the upper surface of the inlet lip, leading to reduced mass flow and pressure recovery.
*   **Sideslip Angle ($\beta$):** Similar to angle of attack, sideslip can cause flow asymmetry and separation.
*   **Mach Number:** At higher subsonic Mach numbers, the airflow approaches the speed of sound, and compressibility effects become more pronounced, leading to potential choking at the throat and increased losses.
*   **Airspeed:** Affects the velocity and dynamic pressure of the incoming air.
*   **Altitude:** Affects ambient density and temperature, influencing mass flow rate and engine performance.
*   **Surface Roughness:** Friction between the air and the inlet walls causes losses.
*   **Internal Obstructions:** Any foreign objects or internal components can disrupt the flow and reduce performance.

**Example:**
An aircraft flying at a high angle of attack will experience a decrease in the airflow quality entering the engine if the inlet lip is not designed to handle such conditions, potentially leading to compressor stall.

**Reference:**

*   *Gas Turbine Theory* by H. Cohen (Chapter on Intake Design)

---

### **6. Types of Subsonic Inlets**

Subsonic inlets can be categorized based on their application and design complexity:

*   **External Compression Inlets:**
    *   These are the simplest type.
    *   The diffusion process occurs entirely within the external duct.
    *   Examples include simple cylindrical or conical ducts with a lip.
    *   Often used in low-speed aircraft and helicopters.

*   **Internal Compression Inlets:**
    *   These inlets involve diffusion occurring both externally and internally within the duct.
    *   They might have a contraction section followed by a divergent section.
    *   More complex designs are often employed to achieve higher pressure recovery.

*   **Mixed Compression Inlets:**
    *   Used in supersonic aircraft, where both subsonic and supersonic flow phenomena are involved in deceleration. (Not the focus of this topic but worth noting the progression).

**Specific Subsonic Inlet Designs:**

*   **Cowled Propeller Inlets:** Designed for propeller-driven aircraft, often integrated with the propeller spinner.
*   **Centrifugal Compressor Inlets:** Typically short and wide to capture a large volume of air for the centrifugal compressor.
*   **Axial Compressor Inlets:** Generally longer and more carefully contoured to deliver uniform axial flow to the axial compressor.

**Reference:**

*   *Gas Turbine & Jet Rocket Propulsion* by Mathur M. L. (Chapter on Air Intake)

---

### **7. Performance Parameters and Measurement**

Key parameters used to evaluate the performance of a subsonic inlet:

*   **Mass Flow Rate ($\dot{m}$):** Directly impacts thrust.
*   **Total Pressure Recovery ($P_{0, \text{inlet exit}} / P_{0, \text{freestream}}$):** A measure of how much total pressure is lost. Higher recovery is desirable.
*   **Total Temperature Rise ($\Delta T_0$):** Ideally zero for isentropic flow. Any rise indicates internal losses.
*   **Flow Uniformity:** The variation of velocity and pressure across the inlet duct exit. Non-uniformity can lead to compressor stall.
*   **Drag Factor:** Represents the thrust loss due to the presence of the inlet.
*   **Divergence Loss:** Loss of total pressure due to friction and turbulent mixing in the diverging section.
*   **Lip Loss:** Loss of total pressure associated with the flow over the inlet lip, particularly at high angles of attack.

**Reference:**

*   *Gas Turbines* by V. Ganesan (Chapter 3: Combustion - Inlet and Nozzles)

---

### **8. Practice Questions and Answers**

**Question 1:**
What is the primary function of a subsonic inlet in a gas turbine engine?

**Answer:**
The primary function of a subsonic inlet is to efficiently capture ambient air and deliver it to the compressor, while simultaneously diffusing the airflow to increase its static pressure and reduce its velocity. This pressure increase benefits the compressor's performance.

**Question 2:**
What are the key advantages of a rounded lip design for a subsonic inlet, especially at high angles of attack?

**Answer:**
A rounded lip design minimizes the risk of flow separation on the inlet surface at high angles of attack. This helps maintain a more uniform flow into the compressor and reduces losses in mass flow and pressure recovery, thus preventing potential compressor stall.

**Question 3:**
Define "Ram Recovery" for a subsonic inlet.

**Answer:**
Ram Recovery is the ratio of the total pressure at the inlet exit to the total pressure of the freestream air. It quantifies how effectively the inlet converts the freestream kinetic energy into static pressure at the inlet exit.

**Question 4:**
If the divergence angle in a subsonic inlet is too large, what is the likely consequence?

**Answer:**
A large divergence angle can lead to flow separation from the inlet walls. This separation increases turbulence and friction, resulting in significant losses in total pressure and reduced pressure recovery, making the inlet less efficient.

**Question 5:**
Consider an aircraft flying at 300 knots at sea level where the ambient static temperature is 288 K and the static pressure is 101.3 kPa. Assuming the air density is approximately 1.225 kg/m³. If the inlet captures air and decelerates it isentropically to a speed of 100 knots at the compressor face, calculate the static pressure at the compressor face. (Assume $\gamma = 1.4$ and $R = 287$ J/kg.K).

**Solution:**
*   First, calculate the freestream velocity. 300 knots ≈ 154.3 m/s. 100 knots ≈ 51.4 m/s.
*   Calculate the Mach number at freestream:
    *   Speed of sound ($a$) = $\sqrt{\gamma R T} = \sqrt{1.4 \times 287 \times 288} \approx 341.2$ m/s
    *   $M_{\text{freestream}} = V_{\text{freestream}} / a = 154.3 / 341.2 \approx 0.452$
*   Calculate the total pressure at freestream:
    *   $P_{0, \text{freestream}} = P_{\text{freestream}} (1 + \frac{\gamma - 1}{2} M_{\text{freestream}}^2)^{\frac{\gamma}{\gamma-1}}$
    *   $P_{0, \text{freestream}} = 101.3 \times (1 + \frac{1.4 - 1}{2} \times 0.452^2)^{\frac{1.4}{1.4-1}}$
    *   $P_{0, \text{freestream}} = 101.3 \times (1 + 0.2 \times 0.2043)^{3.5}$
    *   $P_{0, \text{freestream}} = 101.3 \times (1.04086)^{3.5} \approx 101.3 \times 1.151 \approx 116.6$ kPa
*   Calculate the Mach number at the compressor face:
    *   $M_{\text{compressor face}} = V_{\text{compressor face}} / a = 51.4 / 341.2 \approx 0.151$
*   Calculate the static pressure at the compressor face (assuming isentropic deceleration):
    *   The total pressure at the compressor face is the same as the freestream total pressure if the deceleration is isentropic.
    *   $P_{\text{compressor face}} = P_{0, \text{compressor face}} / (1 + \frac{\gamma - 1}{2} M_{\text{compressor face}}^2)^{\frac{\gamma}{\gamma-1}}$
    *   $P_{\text{compressor face}} = 116.6 / (1 + \frac{1.4 - 1}{2} \times 0.151^2)^{\frac{1.4}{1.4-1}}$
    *   $P_{\text{compressor face}} = 116.6 / (1 + 0.2 \times 0.0228)^{3.5}$
    *   $P_{\text{compressor face}} = 116.6 / (1.00456)^{3.5} \approx 116.6 / 1.016 \approx 114.76$ kPa

**Answer:** The static pressure at the compressor face is approximately 114.76 kPa.

---

### **9. Important Points to Remember**

*   Subsonic inlets **diffuse** the airflow, converting kinetic energy to static pressure.
*   The ideal subsonic inlet operates **isentropically**, with constant total temperature and total pressure.
*   **Ram recovery** is a key performance metric for subsonic inlets.
*   The **lip design** is critical for preventing flow separation, especially at high angles of attack.
*   **Divergence angle** in the inlet duct must be kept low (typically < 7°) to minimize losses.
*   Inlet performance is affected by **Mach number, angle of attack, sideslip, and geometry**.

---

### **10. Alignment with Course Outcomes**

*   **CO1 (Apply principles of thermodynamics and fluid dynamics):** The analysis of subsonic inlets involves applying concepts like isentropic flow, pressure-velocity relationships, and energy conservation equations.
*   **CO3 (Analyze performance of gas turbine systems by understanding component characteristics):** Understanding the role and performance characteristics of the inlet is essential for analyzing the overall gas turbine system's efficiency and thrust.
*   **CO4 (Understand principles and characteristics of jet and rocket propulsion systems):** The inlet is the primary air-breathing component of a jet engine, and its function is fundamental to the operation of such systems.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
