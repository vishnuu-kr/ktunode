---
title: "supersonic inlets"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 3: Combustion – Theory of Combustion"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463cb7"
status: "completed"
scrapedAt: "2026-05-20T18:14:04.455Z"
---
# GAS TURBINE AND JET PROPULSION

## Module 3: Combustion – Theory of Combustion

### Topic: Supersonic Inlets

**Learning Outcomes:**

*   Understand the basic principles of supersonic flow and its behavior.
*   Identify the key functions and challenges of supersonic inlets.
*   Describe the different types of supersonic inlets and their operational principles.
*   Analyze the thermodynamic processes occurring within supersonic inlets.
*   Explain the importance of shock waves in supersonic inlet design and operation.
*   Discuss the factors affecting the performance of supersonic inlets.

---

### 1. Introduction to Supersonic Flow

Supersonic flow is a regime of fluid motion where the flow velocity exceeds the speed of sound in that medium. This behavior deviates significantly from subsonic flow, introducing unique phenomena and design considerations, especially critical for high-speed aircraft.

**Key Concepts & Definitions:**

*   **Mach Number (M):** The ratio of the flow velocity (V) to the local speed of sound (a).
    *   $M = \frac{V}{a}$
    *   **Subsonic:** $M < 1$
    *   **Sonic:** $M = 1$
    *   **Supersonic:** $M > 1$
    *   **Hypersonic:** $M > 5$ (often considered a subset of supersonic)

*   **Speed of Sound (a):** The speed at which a pressure disturbance propagates through a medium. For an ideal gas, it is given by:
    *   $a = \sqrt{\gamma R T}$
    *   Where:
        *   $\gamma$ = ratio of specific heats (isentropic exponent)
        *   $R$ = specific gas constant
        *   $T$ = static temperature of the gas

*   **Compressibility Effects:** In supersonic flow, density changes significantly with pressure and velocity, unlike incompressible flow where density is considered constant. This is a fundamental difference.

**Important Points to Remember:**

*   The speed of sound is dependent on temperature. As temperature increases, the speed of sound increases.
*   In supersonic flow, a fluid can be slowed down by expanding rather than compressing, a concept vital for inlet design.

**References:**

*   **Ganesan, V. (2017).** *Gas Turbines.* Chapter on compressors and intakes will likely discuss flow regimes.
*   **Yahya, S. M. (2011).** *Turbines, Compressors and Fans.* This book is highly relevant and likely has detailed sections on intakes.
*   **Cohen, H. (2019).** *Gas Turbine Theory.* Expect a thorough treatment of fluid dynamics, including supersonic regimes.

---

### 2. Functions and Challenges of Supersonic Inlets

Supersonic inlets are crucial components of jet engines operating at supersonic speeds. Their primary role is to efficiently capture and decelerate the incoming supersonic airflow to a subsonic (or near-sonic) velocity before it enters the compressor.

**Key Functions:**

*   **Air Capture:** Efficiently collect the required amount of air for the engine at high speeds.
*   **Air Deceleration:** Reduce the kinetic energy of the incoming supersonic air to a subsonic or transonic speed suitable for the compressor. This is achieved by converting kinetic energy into pressure energy (ram effect).
*   **Pressure Recovery:** Maximize the stagnation pressure (total pressure) of the air entering the compressor. This is critical for engine performance and efficiency.
*   **Flow Stability:** Ensure a uniform and stable subsonic flow to the compressor to prevent stall and surge.

**Challenges:**

*   **Shock Waves:** The deceleration process inherently involves the formation of shock waves. These are discontinuities in flow properties (pressure, temperature, density, velocity) that cause significant losses in total pressure and entropy increase. Managing these shocks is paramount.
*   **Drag:** Inlets contribute to the aircraft's drag. Minimizing this drag is essential for fuel efficiency.
*   **Structural Integrity:** Inlets experience high dynamic pressures and temperatures at supersonic speeds, requiring robust structural design.
*   **Variable Geometry:** To operate efficiently over a wide range of Mach numbers (from subsonic to supersonic), many supersonic inlets require movable components (variable geometry) to adjust the flow path and shock system. This adds complexity and weight.
*   **Flow Distortion:** Ensuring uniform flow into the compressor is difficult due to the presence of shock waves and potential boundary layer effects.

**References:**

*   **Yahya, S. M. (2011).** *Turbines, Compressors and Fans.* This textbook is likely to detail the functions and challenges of various engine components, including inlets.
*   **Rolls Royce. (2015).** *The Jet Engine.* This reference is excellent for understanding the practical aspects of jet engine design and operation, including inlet requirements for different flight regimes.

---

### 3. Types of Supersonic Inlets

Supersonic inlets are classified based on their design and how they generate and manage shock waves for deceleration.

**A. External Compression Inlets:**

*   **Principle:** Utilize external oblique shock waves generated by ramps, cones, or spikes to decelerate the flow. The flow is then further decelerated by a normal shock wave near the throat.
*   **Subtypes:**
    *   **Ramp Inlets:** Feature one or more ramps (flat or variable) that generate oblique shocks.
        *   **Single Ramp:** Simple design, suitable for moderate supersonic speeds (e.g., M=2).
        *   **Two-Dimensional (2D) Ramp:** Common in modern aircraft, allows for more efficient deceleration over a wider Mach range by using multiple oblique shocks.
        *   **Three-Dimensional (3D) Cone/Spike Inlet:** Uses a central cone or spike to generate a series of conical shock waves. The shock system is highly effective for decelerating flow to sonic conditions at the throat.
    *   **Mixed Compression Inlets:** Designed to utilize both external and internal oblique shocks, followed by a terminal normal shock. These offer higher pressure recovery and lower drag at higher Mach numbers.

*   **Operation:**
    1.  The leading edge (ramp or spike) creates an oblique shock.
    2.  Subsequent ramps or the nacelle contour generate additional oblique shocks.
    3.  These oblique shocks progressively slow down and compress the air.
    4.  The flow at the throat is ideally sonic ($M=1$).
    5.  A terminal normal shock (or a near-normal shock in mixed compression) occurs just downstream of the throat, completing the deceleration to subsonic speeds.

*   **Advantages:** Relatively simpler to design and manufacture, good performance at moderate supersonic speeds.
*   **Disadvantages:** Can suffer from lower pressure recovery and higher drag at higher Mach numbers compared to mixed compression inlets.

**B. Mixed Compression Inlets:**

*   **Principle:** Combine external compression (via ramps or cones) with internal compression. A series of oblique shocks propagate both externally and internally within the inlet duct. A terminal normal shock occurs within the duct, often downstream of the throat.
*   **Design:** Typically feature variable geometry, often with a movable cone or ramp and a movable throat.
*   **Operation:**
    1.  External oblique shocks are generated by a central body (cone or spike) and/or external ramps.
    2.  These shocks compress and slow down the air.
    3.  As the flow enters the duct, further oblique shocks are generated by the inner walls or a variable ramp.
    4.  The total compression is achieved through a series of oblique shocks, and the final deceleration to subsonic speeds occurs across a terminal normal shock within the duct.
*   **Advantages:** Higher pressure recovery and lower drag at high supersonic speeds (M > 2). More efficient use of the available Mach number range.
*   **Disadvantages:** More complex to design, manufacture, and control due to the need for variable geometry. Sensitive to angle of attack and Mach number variations.

**C. Isentropic Inlets (Theoretical Ideal):**

*   **Principle:** Theoretically, flow deceleration could occur through an isentropic expansion process, similar to a supersonic nozzle working in reverse. However, achieving pure isentropic deceleration with high Mach numbers is practically impossible due to irreversibilities and the need for a shock system to achieve a significant pressure rise.
*   **Relevance:** While not purely isentropic, the design goal is to minimize irreversibilities by using multiple weak oblique shocks instead of a single strong normal shock, approximating an isentropic compression process.

**Examples:**

*   **Ramp Inlets:** Concorde used a complex variable geometry ramp inlet. Many fighter jets utilize 2D ramp inlets.
*   **Cone/Spike Inlets:** The SR-71 Blackbird had an iconic variable geometry spike inlet. Many supersonic aircraft also use cone inlets.
*   **Mixed Compression Inlets:** Designed for advanced supersonic aircraft and some missiles.

**References:**

*   **Ganesan, V. (2017).** *Gas Turbines.* Likely covers different intake types and their aerodynamic principles.
*   **Yahya, S. M. (2011).** *Turbines, Compressors and Fans.* This is a primary source for detailed descriptions of various inlet designs.
*   **Mathur, M. L. (2010).** *Gas Turbine & Jet Rocket Propulsion.* Will offer insights into the propulsion aspects of these inlets.
*   **Rolls Royce. (2015).** *The Jet Engine.* Provides practical context and examples of inlet applications.
*   **Cohen, H. (2019).** *Gas Turbine Theory.* Offers a rigorous theoretical foundation for understanding these designs.

---

### 4. Thermodynamic Processes in Supersonic Inlets

The primary goal of an inlet is to convert kinetic energy into pressure energy, thereby recovering the stagnation pressure of the incoming air. This process involves complex thermodynamic changes due to the presence of shock waves and flow deceleration.

**Key Processes:**

*   **Adiabatic Flow:** Ideally, the entire deceleration process within the inlet is considered adiabatic, meaning there is no heat transfer to or from the surroundings. The stagnation temperature ($T_0$) remains constant.
    *   $T_{0, \text{inlet}} = T_{0, \text{compressor}}$
*   **Isentropic Compression (Ideal/Approximation):** In the absence of irreversibilities, the compression would be isentropic. However, shock waves are inherently irreversible.
*   **Shock Wave Effects:**
    *   **Oblique Shocks:** Occur when the flow is turned by an angle less than 90 degrees. The flow remains supersonic after the shock (unless it's a very strong oblique shock), but there is a pressure increase and a decrease in velocity. There is a loss in total pressure and an increase in entropy across an oblique shock.
    *   **Normal Shock:** Occurs when the flow is turned by 90 degrees. The flow is decelerated from supersonic to subsonic across the shock. This results in a significant increase in pressure and temperature, and a substantial loss in total pressure and increase in entropy.

**Thermodynamic Relationships (for reference, often applied across shocks):**

*   **Stagnation Temperature:** $T_0 = T (1 + \frac{\gamma-1}{2} M^2)$
*   **Stagnation Pressure:** $P_0 = P (1 + \frac{\gamma-1}{2} M^2)^{\frac{\gamma}{\gamma-1}}$
*   **Across a Normal Shock:**
    *   $M_2 = \sqrt{\frac{1 + \frac{\gamma-1}{2} M_1^2}{ \gamma M_1^2 - \frac{\gamma-1}{2} }}$
    *   $\frac{P_{02}}{P_{01}} = \frac{[(\frac{\gamma+1}{2}) M_1^2]^{\frac{\gamma}{\gamma-1}}}{[(\frac{2\gamma}{\gamma+1}) M_1^2 - \frac{\gamma-1}{\gamma+1}]^{\frac{1}{\gamma-1}}}$
    *   $\frac{T_{02}}{T_{01}} = 1$ (Adiabatic process)
    *   $\frac{P_2}{P_1} = 1 + \frac{2\gamma}{\gamma+1} (M_1^2 - 1)$
    *   $\frac{T_2}{T_1} = \frac{(1 + \frac{\gamma-1}{2} M_1^2)( \frac{2\gamma}{\gamma+1} M_1^2 - \frac{\gamma-1}{\gamma+1} )}{1 + \frac{\gamma-1}{2} M_2^2}$

**Impact on Engine Performance:**

*   **Pressure Recovery ($P_{0\text{out}} / P_{0\text{in}}$):** This is the ratio of the total pressure at the inlet exit to the total pressure of the undisturbed freestream. Higher pressure recovery means less loss and better engine performance. The primary goal of inlet design is to maximize pressure recovery while minimizing drag.
*   **Isentropic Efficiency ($\eta_{inlet}$):** Can be defined as the ratio of actual total pressure recovery to isentropic total pressure recovery:
    *   $\eta_{inlet} = \frac{P_{0\text{out}} / P_{0\text{in, freestream}}}{P_{0\text{out, isentropic}} / P_{0\text{in, freestream}}}$
    *   (Note: $P_{0\text{in, freestream}}$ is the stagnation pressure of the undisturbed freestream, which is equal to the static pressure $P_{\infty}$ plus dynamic pressure $\frac{1}{2}\rho_{\infty}V_{\infty}^2$. For an adiabatic flow, $P_{0\text{in, freestream}} = P_{0\text{out}}$ if there were no losses and the flow remained subsonic.)

**Important Points to Remember:**

*   The stagnation temperature ($T_0$) of the air entering the inlet remains constant throughout the adiabatic process within the inlet.
*   The stagnation pressure ($P_0$) decreases across shock waves due to irreversibilities.
*   The objective is to achieve a high total pressure at the compressor face (high pressure recovery).

**References:**

*   **Ganesan, V. (2017).** *Gas Turbines.* Likely covers thermodynamics of compressible flow and its application to engine components.
*   **Yahya, S. M. (2011).** *Turbines, Compressors and Fans.* This text is highly likely to detail the thermodynamic analysis of inlets.
*   **Cohen, H. (2019).** *Gas Turbine Theory.* Provides the fundamental theoretical framework for compressible flow thermodynamics and shock waves.

---

### 5. Importance of Shock Waves in Supersonic Inlet Design

Shock waves are an unavoidable consequence of decelerating supersonic flow and are strategically employed in the design of supersonic inlets to achieve the necessary deceleration and pressure recovery.

**Role of Shock Waves:**

*   **Deceleration Mechanism:** Shock waves are the primary mechanism for slowing down supersonic flow to subsonic speeds.
*   **Pressure Rise:** They cause a significant increase in static pressure, which translates to a rise in stagnation pressure (though with losses).
*   **Flow Control:** The position and strength of shock waves can be controlled by inlet geometry and engine operation.

**Managing Shock Waves:**

*   **Multiple Oblique Shocks:** Using a series of weak oblique shocks is more efficient than a single strong normal shock. This is because the total pressure loss and entropy increase are less for a given pressure rise when using multiple oblique shocks.
*   **Terminal Normal Shock:** The final deceleration to subsonic speeds within the inlet duct typically occurs across a normal shock. The goal is to position this normal shock as far downstream as possible and to make the flow entering it as close to sonic ($M \approx 1$) as possible to minimize losses.
*   **Isentropic Compression Approximation:** Inlet designs aim to approximate isentropic compression by carefully arranging oblique shocks. The more oblique shocks and the weaker they are, the closer the process is to isentropic.
*   **Positioning the Terminal Normal Shock:**
    *   If the terminal normal shock forms *ahead* of the throat (in an external compression inlet with a subsonically choked throat), it causes the throat to become supersonic, and the flow can then become subsonic again *after* the shock. This is known as **inlet unstart**, a critical failure condition.
    *   The inlet must be designed such that the terminal normal shock remains *at or behind* the throat for stable operation.

**Inlet Design Strategies:**

*   **Ramps:** Generate oblique shocks. The angle of the ramp determines the shock angle.
*   **Cones/Spikes:** Generate conical shocks. The cone angle influences the shock waves.
*   **Variable Geometry:** To maintain optimal shock system alignment across different Mach numbers, variable geometry is often employed:
    *   **Variable Angle Ramps/Cones:** Adjust the shock angles.
    *   **Variable Throat Area:** Controls the flow and positioning of the terminal normal shock.
    *   **Variable Exit Area (for fixed geometry throats):** Used in some designs to maintain optimal conditions.

**Consequences of Poor Shock Management:**

*   **Inlet Unstart:** A sudden breakdown of the normal shock system, leading to a violent expulsion of air from the inlet, loss of thrust, and potential engine damage.
*   **Low Pressure Recovery:** Excessive losses in total pressure reduce engine efficiency and thrust.
*   **High Drag:** Inefficient shock systems or flow separation can increase drag.
*   **Flow Distortion:** Can lead to compressor stall or surge.

**References:**

*   **Yahya, S. M. (2011).** *Turbines, Compressors and Fans.* This book is essential for understanding the aerodynamics and design principles of shock-based inlets.
*   **Rolls Royce. (2015).** *The Jet Engine.* Provides practical examples and challenges related to shock waves in real engines.
*   **Cohen, H. (2019).** *Gas Turbine Theory.* Offers a detailed theoretical treatment of shock phenomena.

---

### 6. Factors Affecting Supersonic Inlet Performance

The efficiency and effectiveness of a supersonic inlet are influenced by a multitude of factors.

**Key Factors:**

*   **Mach Number (M):** The primary design parameter. Inlets are optimized for a specific Mach range. Performance degrades significantly outside this range.
*   **Angle of Attack ($\alpha$):** Deviations from the intended flight path cause flow asymmetry and can lead to one-sided shock formation, potential flow separation, and inlet unstart. Variable geometry helps to mitigate this.
*   **Engine Mass Flow Demand:** The inlet must be able to supply the required airflow for the engine at all operating conditions. If the engine demands more air than the inlet can efficiently capture and decelerate, performance suffers.
*   **Internal Geometry (Duct Shape):** The contouring of the inlet duct is critical for managing shock waves and ensuring smooth transition to subsonic flow.
*   **Surface Roughness and Boundary Layer:** Friction along the inlet walls can cause boundary layer growth, which can lead to flow separation, particularly at high Mach numbers and adverse pressure gradients. This reduces pressure recovery and can cause distortion.
*   **Bleed Systems:** Some inlets incorporate bleed ports to remove boundary layer air or to control shock position and strength, thereby improving performance and stability.
*   **Variable Geometry Control:** The effectiveness of variable geometry in adapting to changing flight conditions is crucial. Precise control is needed to maintain optimal shock formation.
*   **Altitude and Ambient Conditions:** While the inlet's primary function is Mach number management, ambient density and temperature also affect overall performance and the specific impulse.

**Performance Metrics:**

*   **Pressure Recovery ($P_{0, \text{exit}} / P_{0, \text{freestream}}$):** As discussed, the ratio of total pressure at the compressor face to the freestream total pressure.
*   **Inlet Efficiency ($\eta_{\text{inlet}}$):** Measures how effectively the inlet recovers total pressure.
*   **Drag Coefficient ($C_D$):** Represents the aerodynamic drag produced by the inlet.
*   **Flow Distortion Index:** Quantifies the uniformity of the flow entering the compressor.

**Important Points to Remember:**

*   No supersonic inlet can achieve perfect isentropic compression; losses are inherent due to shock waves and viscous effects.
*   Variable geometry is essential for inlets designed for operation over a wide range of Mach numbers and angles of attack.
*   Inlet unstart is a critical operational failure that must be avoided.

**References:**

*   **Yahya, S. M. (2011).** *Turbines, Compressors and Fans.* This is the go-to source for understanding inlet performance and the factors that influence it.
*   **Rolls Royce. (2015).** *The Jet Engine.* Offers practical insights into how these factors impact real-world engine performance.
*   **Cohen, H. (2019).** *Gas Turbine Theory.* Provides the theoretical basis for analyzing these performance factors.

---

### Practice Questions & Exercises

**Question 1 (Knowledge - K2):**
What is the primary function of a supersonic inlet?

**Answer:** The primary function of a supersonic inlet is to capture and efficiently decelerate the incoming supersonic airflow to subsonic (or near-sonic) velocity before it enters the compressor, while maximizing pressure recovery.

---

**Question 2 (Application - K3):**
If an aircraft is flying at Mach 2.5, and the incoming air temperature is 250 K, calculate the speed of sound and the velocity of the incoming air. (Assume $\gamma = 1.4$ and $R = 287 \, \text{J/kg}\cdot\text{K}$)

**Answer:**
*   Speed of sound ($a$):
    $a = \sqrt{\gamma R T} = \sqrt{1.4 \times 287 \, \text{J/kg}\cdot\text{K} \times 250 \, \text{K}}$
    $a = \sqrt{100450} \approx 317 \, \text{m/s}$
*   Velocity of incoming air ($V$):
    $V = M \times a = 2.5 \times 317 \, \text{m/s}$
    $V \approx 792.5 \, \text{m/s}$

---

**Question 3 (Analysis - K4):**
Compare and contrast external compression inlets and mixed compression inlets in terms of their operational principles, advantages, and disadvantages for supersonic flight.

**Answer:**
*   **External Compression Inlets:**
    *   **Principle:** Use external oblique shock waves generated by ramps or cones, followed by a terminal normal shock.
    *   **Advantages:** Simpler design, good for moderate supersonic speeds (e.g., M=2).
    *   **Disadvantages:** Lower pressure recovery and higher drag at higher Mach numbers.
*   **Mixed Compression Inlets:**
    *   **Principle:** Combine external and internal oblique shocks, with a terminal normal shock located within the duct.
    *   **Advantages:** Higher pressure recovery and lower drag at high supersonic speeds (M > 2).
    *   **Disadvantages:** More complex, requires variable geometry, sensitive to angle of attack.

---

**Question 4 (Analysis - K4):**
Explain why managing shock waves is crucial for the performance and stability of supersonic inlets. Discuss the concept of "inlet unstart" and its causes.

**Answer:**
Managing shock waves is crucial because they are the mechanism for decelerating supersonic flow but also cause significant losses in total pressure (reducing engine efficiency) and increase entropy. The goal is to use multiple weak oblique shocks for efficient deceleration and to position the terminal normal shock at or behind the throat.
"Inlet unstart" occurs when the terminal normal shock, which should be within the inlet duct to decelerate flow to subsonic speeds, is expelled from the inlet. This typically happens when the flow entering the shock is too fast (Mach number too high for the current geometry) or when there's a sudden loss of engine mass flow demand. Causes include exceeding the inlet's Mach number capability, large angles of attack, or rapid throttle movements. Unstart leads to a severe loss of thrust, backfire, and can damage the engine.

---

**Question 5 (Knowledge - K2):**
What is the Mach number at which the speed of sound is reached in the inlet throat of an ideally designed supersonic inlet?

**Answer:** Ideally, the Mach number at the throat is 1 (sonic).

---

**Question 6 (Analysis - K4, applying CO1 & CO3):**
A supersonic aircraft flying at Mach 3.0 experiences an ambient temperature of 220 K. The inlet is designed to recover as much stagnation pressure as possible. If the inlet employs a series of oblique shocks and a final normal shock to decelerate the flow to Mach 0.8 at the compressor face, describe the thermodynamic processes and discuss the key performance indicator that would be monitored to assess the inlet's effectiveness.

**Answer:**
The thermodynamic process involves:
1.  **Adiabatic Flow:** No heat transfer occurs within the inlet. The stagnation temperature remains constant.
2.  **Oblique Shocks:** Multiple oblique shocks are used to progressively decelerate and compress the supersonic flow. Each oblique shock causes a reduction in total pressure and an increase in entropy, but these losses are minimized compared to a single normal shock.
3.  **Normal Shock (or near-normal):** The final deceleration from supersonic (ideally sonic at the throat, transitioning to supersonic if it's a mixed compression inlet before the terminal shock) to subsonic Mach 0.8 occurs across a normal shock. This shock causes the most significant loss in total pressure and increase in entropy.

The key performance indicator to assess the inlet's effectiveness is **pressure recovery**, specifically the ratio of the total pressure at the compressor face ($P_{0, \text{compressor}}$) to the total pressure of the undisturbed freestream ($P_{0, \text{freestream}}$). A higher pressure recovery indicates less total pressure loss and thus better inlet performance, directly impacting engine thrust and efficiency (CO1, CO3).

---

**Important Points to Remember (Summary):**

*   Supersonic inlets are designed to slow down high-speed air to a manageable speed for the compressor.
*   Mach number is key: $M=V/a$. Supersonic means $M>1$.
*   Inlets use shock waves for deceleration: oblique shocks for gradual compression, normal shocks for final deceleration.
*   Total pressure is lost across shocks (irreversibilities).
*   Stagnation temperature is constant (adiabatic process).
*   External compression inlets use external shocks; mixed compression inlets use both external and internal shocks.
*   Variable geometry is crucial for efficient operation over a range of Mach numbers.
*   Inlet unstart is a critical failure mode where the shock system is expelled.
*   Pressure recovery is the primary performance metric.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
