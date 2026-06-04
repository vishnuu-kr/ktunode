---
title: "Specific thrust of turbojet engine"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 4: Jet propulsion – Cycles and analysis – Gas turbine engines"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463cc6"
status: "completed"
scrapedAt: "2026-05-20T18:14:14.271Z"
---
# Module 4: Jet Propulsion – Cycles and Analysis – Gas Turbine Engines

## Topic: Specific Thrust of Turbojet Engine

**Course Outcomes Alignment:**

*   **CO1 (K3):** Understand the thermodynamic principles governing the generation of thrust in a turbojet engine.
*   **CO2 (K4):** Analyze the performance characteristics related to thrust generation.
*   **CO3 (K4):** Understand how component performance influences specific thrust.
*   **CO4 (K2):** Comprehend the fundamental principles of jet propulsion and thrust generation.

**Learning Outcomes:**

Upon completion of this topic, you will be able to:

*   Define specific thrust and its significance in turbojet engine performance.
*   Derive the mathematical expression for specific thrust.
*   Analyze the factors affecting specific thrust in a turbojet engine.
*   Relate specific thrust to engine efficiency and performance.
*   Compare specific thrust values for different turbojet engine designs.

---

### 1. Introduction to Jet Propulsion and Thrust

Jet propulsion is a method of propulsion where a jet of fluid is expelled from a nozzle at high velocity, producing a reaction force that propels the vehicle forward. This reaction force is known as **thrust**.

**Key Concept:** Newton's Third Law of Motion (For every action, there is an equal and opposite reaction) is the fundamental principle behind jet propulsion. The action is the expulsion of high-velocity gas, and the reaction is the forward thrust.

**Reference:** Mathur M. L., *Gas Turbine & Jet Rocket Propulsion* (2010) emphasizes the application of Newton's laws to jet propulsion.

---

### 2. The Turbojet Engine: A Basic Overview

A turbojet engine is a type of gas turbine engine that produces thrust by expelling a high-velocity jet of exhaust gases. It typically consists of the following components:

*   **Inlet (Intake):** Captures ambient air.
*   **Compressor:** Increases the pressure of the incoming air.
*   **Combustor (Combustion Chamber):** Fuel is mixed with compressed air and ignited, leading to a significant increase in temperature and volume of the gases.
*   **Turbine:** Extracts energy from the high-temperature, high-pressure gases to drive the compressor and accessories.
*   **Nozzle (Exhaust):** Accelerates the exhaust gases to a high velocity, generating thrust.

**Example:** The early jet engines used in aircraft like the Messerschmitt Me 262 or the Gloster Meteor were primarily turbojets.

**Reference:** Ganesan V., *Gas Turbines* (2017) provides a detailed description of each component of a gas turbine engine, including the turbojet.

---

### 3. Defining Specific Thrust

**Specific Thrust ($F_s$)** is defined as the thrust produced per unit mass flow rate of air entering the engine. It is a crucial parameter for evaluating the performance of a jet engine, particularly in terms of its propulsive efficiency and its suitability for different applications.

**Key Concept:** Specific thrust allows for a standardized comparison of engines, irrespective of their size or the total amount of air they process.

**Significance:**
*   **Engine Design:** Helps in selecting appropriate engine sizes for specific aircraft requirements.
*   **Performance Analysis:** Indicates how effectively the engine converts fuel energy into propulsive force.
*   **Efficiency Assessment:** Higher specific thrust generally implies better propulsive efficiency, especially at higher flight speeds.

---

### 4. Mathematical Derivation of Specific Thrust

Let's consider a turbojet engine operating under steady flow conditions.

*   **Mass flow rate of air entering the engine:** $\dot{m}_a$ (kg/s)
*   **Mass flow rate of fuel:** $\dot{m}_f$ (kg/s)
*   **Total mass flow rate of exhaust gases:** $\dot{m}_e = \dot{m}_a + \dot{m}_f$ (kg/s)
*   **Velocity of air entering the engine (flight velocity):** $V_0$ (m/s)
*   **Velocity of exhaust gases leaving the nozzle:** $V_e$ (m/s)

The net thrust ($F$) produced by the engine is the difference between the momentum of the exhaust gases and the momentum of the incoming air, accounting for the mass flow rate of fuel added.

**Thrust Equation (General Form):**
$F = \dot{m}_e V_e - \dot{m}_a V_0 + (P_e - P_0) A_e$

Where:
*   $P_e$ is the pressure at the nozzle exit.
*   $P_0$ is the ambient pressure.
*   $A_e$ is the nozzle exit area.

For a typical turbojet engine, the nozzle is designed to be convergent or convergent-divergent, and often operates with an exit pressure ($P_e$) close to ambient pressure ($P_0$), especially at design conditions. In many simplified analyses and for understanding the core concept of specific thrust, the pressure thrust term $(P_e - P_0) A_e$ is sometimes neglected, or it's assumed that $P_e \approx P_0$.

**Simplified Thrust Equation (neglecting pressure thrust or assuming $P_e = P_0$):**
$F \approx \dot{m}_e V_e - \dot{m}_a V_0$

The mass flow rate of fuel is typically much smaller than the mass flow rate of air ($\dot{m}_f \ll \dot{m}_a$). Therefore, we can approximate:
$\dot{m}_e \approx \dot{m}_a$

Substituting this into the simplified thrust equation:
$F \approx \dot{m}_a V_e - \dot{m}_a V_0$
$F \approx \dot{m}_a (V_e - V_0)$

Now, to find the **specific thrust ($F_s$)**, we divide the net thrust by the mass flow rate of air entering the engine ($\dot{m}_a$):

$F_s = \frac{F}{\dot{m}_a}$

Substituting the simplified thrust equation:
$F_s \approx \frac{\dot{m}_a (V_e - V_0)}{\dot{m}_a}$

**$F_s \approx V_e - V_0$ (m/s or N/(kg/s))**

This is the simplified expression for specific thrust. It represents the difference between the exhaust jet velocity and the flight velocity.

**Important Consideration (from Ganesan, 2017):** The more accurate representation of specific thrust should consider the actual mass flow rate and the pressure thrust term.
$F_s = \frac{\dot{m}_e V_e - \dot{m}_a V_0 + (P_e - P_0) A_e}{\dot{m}_a}$
$F_s = \frac{\dot{m}_a(1+f) V_e - \dot{m}_a V_0 + (P_e - P_0) A_e}{\dot{m}_a}$
$F_s = (1+f) V_e - V_0 + \frac{(P_e - P_0) A_e}{\dot{m}_a}$

Where $f = \frac{\dot{m}_f}{\dot{m}_a}$ is the fuel-air ratio.

However, in many analyses, especially when comparing basic engine types or understanding the primary driver of thrust, the simplified form $F_s = V_e - V_0$ is widely used and sufficient. The term $(P_e - P_0)A_e$ is known as **pressure thrust**.

**Reference:** Cohen H., *Gas Turbine Theory* (2019) thoroughly explains the derivation of thrust, including the pressure thrust term. Yahya S. M., *Turbines, Compressors and Fans* (2011) also covers thrust calculations.

---

### 5. Factors Affecting Specific Thrust

Several factors influence the specific thrust of a turbojet engine:

*   **Exhaust Velocity ($V_e$):** This is the primary determinant of specific thrust. Higher exhaust velocity leads to higher specific thrust.
    *   **Combustion Temperature:** Higher combustion temperatures (achieved through better combustion technology and higher turbine inlet temperatures) lead to higher exhaust velocities.
    *   **Expansion Ratio in the Nozzle:** A well-designed nozzle expands the hot gases efficiently, converting thermal and pressure energy into kinetic energy, thus increasing $V_e$.
    *   **Turbine Work Extraction:** The turbine must extract enough work to drive the compressor, but not so much that it leaves insufficient energy for the exhaust gases to achieve high velocity.

*   **Flight Velocity ($V_0$):** Specific thrust decreases as flight velocity increases. At high speeds, the incoming air's momentum is significant, and the effective velocity difference for thrust generation reduces.
    *   **Example:** An engine producing a specific thrust of 300 m/s will have less actual thrust at a flight speed of 200 m/s (effective velocity difference of 100 m/s) than at a flight speed of 50 m/s (effective velocity difference of 250 m/s), assuming $V_e$ remains constant.

*   **Mass Flow Rate ($\dot{m}_a$):** While specific thrust is defined per unit mass flow, the total thrust ($F = \dot{m}_a \times F_s$) is directly proportional to the mass flow rate. Larger engines with higher mass flow rates produce more total thrust.

*   **Fuel-Air Ratio ($f$):** A higher fuel-air ratio increases the exhaust gas mass flow ($\dot{m}_e = \dot{m}_a(1+f)$) and can slightly increase exhaust velocity due to higher gas specific heat and molecular weight. However, it also means more fuel consumption.
    *   **Reference:** Rolls Royce, *The Jet Engine* (2015) discusses the trade-offs in engine design related to fuel-air ratios and their impact on performance.

*   **Pressure Thrust Term $(P_e - P_0) A_e$:**
    *   **Nozzle Design:** A convergent-divergent nozzle can accelerate gases to supersonic speeds, and if designed correctly for a given ambient pressure, can achieve an exit pressure ($P_e$) lower than ambient ($P_0$), resulting in negative pressure thrust. Conversely, if the nozzle is simply convergent and exits at supersonic speed, $P_e$ will be higher than $P_0$, contributing positively to thrust.
    *   **Altitude and Speed:** The ambient pressure ($P_0$) changes with altitude, affecting the pressure thrust component.

**CO1 (K3) & CO2 (K4) Link:** Understanding these factors helps analyze how thermodynamic cycles (combustion, expansion) and fluid dynamic principles (nozzle flow) directly influence the performance parameter of specific thrust.

---

### 6. Specific Thrust and Engine Efficiency

*   **Propulsive Efficiency ($\eta_p$):** This is the ratio of the useful propulsive power to the kinetic energy imparted to the working fluid.
    $P_{propulsive} = F \times V_0 = \dot{m}_a (V_e - V_0) V_0$ (simplified)
    $P_{kinetic} = \frac{1}{2} \dot{m}_e V_e^2 - \frac{1}{2} \dot{m}_a V_0^2$ (kinetic energy increase of the stream)

    $\eta_p = \frac{F \times V_0}{\frac{1}{2} \dot{m}_e V_e^2 - \frac{1}{2} \dot{m}_a V_0^2} = \frac{\dot{m}_a (V_e - V_0) V_0}{\frac{1}{2} \dot{m}_a (1+f) V_e^2 - \frac{1}{2} \dot{m}_a V_0^2}$
    $\eta_p = \frac{2 (V_e - V_0) V_0}{(1+f) V_e^2 - V_0^2}$

    Assuming $f \ll 1$, $\dot{m}_e \approx \dot{m}_a$:
    $\eta_p \approx \frac{2 (V_e - V_0) V_0}{V_e^2 - V_0^2} = \frac{2 (V_e - V_0) V_0}{(V_e - V_0)(V_e + V_0)} = \frac{2 V_0}{V_e + V_0}$

    This equation shows that propulsive efficiency is highest when $V_e$ is close to $V_0$. For turbojets, which are designed for high-speed flight, $V_e$ is significantly higher than $V_0$, leading to lower propulsive efficiencies compared to turbofan engines.

*   **Relationship to Specific Thrust:**
    *   For a given flight speed ($V_0$), a higher exhaust velocity ($V_e$) leads to higher specific thrust.
    *   However, for propulsive efficiency, the ideal scenario is $V_e = V_0$.
    *   This creates a trade-off: high specific thrust engines achieve high $V_e$, which is good for high-speed flight but inherently reduces propulsive efficiency.

**CO1 (K3) & CO4 (K2) Link:** This highlights how the thermodynamic cycle's performance (determining $V_e$) affects both thrust generation and propulsive efficiency, core concepts in jet propulsion.

---

### 7. Typical Values and Comparisons

Specific thrust values vary significantly depending on the engine type and design:

*   **Turbojets:** Typically have higher specific thrust values than turbofans or turboprops.
    *   Values can range from **200 m/s to over 1000 m/s** for modern high-performance turbojets.
    *   **Example:** Early turbojets might have had specific thrust around 200-400 m/s. High-speed military jets with advanced turbojets or low-bypass turbofans could achieve 600-900 m/s.

*   **Turbofans:** Have lower specific thrust but higher propulsive efficiency at subsonic speeds due to the bypass air.
    *   Specific thrust is generally lower because the bypass air is accelerated to a lower velocity than the core jet.

*   **Turboprops:** Have the lowest specific thrust but the highest propulsive efficiency at low speeds.

**Importance of Comparison:**
*   **Aircraft Type:** High specific thrust is desirable for fighter jets and supersonic aircraft where high flight speeds are achieved and engine weight is critical. Lower specific thrust engines are preferred for commercial airliners where fuel efficiency at subsonic speeds is paramount.
*   **Engine Size:** Specific thrust helps in optimizing engine size for a given aircraft.

**Reference:** Mathur M. L., *Gas Turbine & Jet Rocket Propulsion* (2010) often includes comparative data for different engine types.

---

### 8. Practice Questions and Answers

**Question 1:** Define specific thrust and state its units.

**Answer:** Specific thrust is the thrust produced per unit mass flow rate of air entering the engine. Its units are typically meters per second (m/s) or Newtons per kilogram per second (N/(kg/s)).

**Question 2:** Derive the simplified expression for specific thrust of a turbojet engine.

**Answer:**
Starting with the simplified thrust equation: $F \approx \dot{m}_a (V_e - V_0)$
Specific Thrust ($F_s$) is $F / \dot{m}_a$.
$F_s \approx \frac{\dot{m}_a (V_e - V_0)}{\dot{m}_a} = V_e - V_0$.

**Question 3:** A turbojet engine has an exhaust velocity ($V_e$) of 700 m/s and a flight velocity ($V_0$) of 200 m/s. Calculate its specific thrust.

**Answer:**
$F_s = V_e - V_0$
$F_s = 700 \text{ m/s} - 200 \text{ m/s} = 500 \text{ m/s}$

**Question 4:** Explain how an increase in flight velocity affects the specific thrust of a turbojet engine.

**Answer:** As flight velocity ($V_0$) increases, the specific thrust ($F_s = V_e - V_0$) decreases, assuming the exhaust velocity ($V_e$) remains constant. This is because the incoming air already possesses significant momentum, reducing the net momentum change produced by the engine for a given exhaust velocity.

**Question 5:** What are two factors that influence the exhaust velocity ($V_e$) of a turbojet engine?

**Answer:**
1.  **Combustion Temperature:** Higher combustion temperatures lead to higher exhaust velocities.
2.  **Nozzle Expansion Ratio:** Efficient expansion of gases in the nozzle increases exhaust velocity.

---

### 9. Important Points to Remember

*   **Specific Thrust** is a measure of thrust per unit mass flow of air.
*   The simplified formula for specific thrust is **$F_s = V_e - V_0$**.
*   **Higher exhaust velocity ($V_e$)** leads to higher specific thrust.
*   **Higher flight velocity ($V_0$)** leads to lower specific thrust.
*   Turbojets generally have **higher specific thrust** than turbofans or turboprops.
*   High specific thrust is crucial for **high-speed aircraft** but often comes at the cost of **lower propulsive efficiency** at subsonic speeds.
*   The **pressure thrust term $(P_e - P_0) A_e$** can be significant and should be considered for a complete analysis.

---

This study guide provides a comprehensive overview of specific thrust in turbojet engines, covering its definition, derivation, influencing factors, and relationship to efficiency, aligned with the specified learning and course outcomes. Remember to refer to the provided textbooks for deeper understanding and detailed analysis.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
