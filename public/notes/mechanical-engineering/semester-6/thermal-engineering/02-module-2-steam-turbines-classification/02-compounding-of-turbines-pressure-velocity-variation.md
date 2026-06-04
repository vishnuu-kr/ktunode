---
title: "compounding of turbines-pressure
velocity variation."
subject: "THERMAL ENGINEERING"
module: "Module 2: Steam turbines : Classification"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf480446398c"
status: "completed"
scrapedAt: "2026-05-20T18:08:39.196Z"
---
## THERMAL ENGINEERING: Module 2: Steam Turbines - Classification

### Topic: Compounding of Turbines - Pressure and Velocity Variation

This topic focuses on how steam turbines are designed to manage the high-velocity steam produced from a pressure drop, primarily through the process of **compounding**. Compounding involves dividing the expansion of steam across multiple stages or rotors to achieve higher efficiencies and overcome limitations of single-stage turbines. We will explore how pressure and velocity are managed across these stages.

---

### Learning Outcomes:

*   **Understand the need for compounding in steam turbines.**
*   **Differentiate between various methods of compounding (pressure, velocity, and pressure-velocity compounding).**
*   **Analyze the pressure and velocity variations across different stages in compounded turbines.**
*   **Explain the working principle and advantages of each compounding method.**
*   **Relate compounding techniques to improvements in steam turbine efficiency.**

---

### Course Outcomes Alignment:

*   **CO1 (K4):** Understanding the principles behind compounding allows for a deeper analysis of how steam expansion is managed, contributing to the understanding of steam power cycles.
*   **CO2 (K3):** This topic directly addresses methods to improve steam turbine efficiency by explaining how compounding mitigates losses and optimizes energy extraction from steam.
*   **CO5 (K6):** Understanding these concepts is foundational for designing or analyzing turbine performance in case studies or simulations.

---

### 1. Introduction to Steam Turbines and the Need for Compounding

*   **Steam Turbine:** A rotary mechanical device that extracts thermal energy from pressurized steam and uses it to do mechanical work on a rotating output shaft.
*   **Princ of Operation:** High-pressure steam expands through a nozzle, converting its internal energy and pressure into kinetic energy (high velocity). This high-velocity steam then impinges on a series of blades attached to a rotor, causing the rotor to spin.
*   **The Problem with Single-Stage Expansion:**
    *   If the entire pressure drop of the steam (from boiler pressure to exhaust pressure) occurs in a single nozzle and passes through a single set of blades, the steam velocity achieved will be extremely high.
    *   **High Steam Velocity Issues:**
        *   **Excessive Kinetic Energy Loss:** A significant portion of the steam's kinetic energy is lost as heat due to friction with the air and blades at such high speeds.
        *   **Blade Erosion:** The high-velocity steam can cause significant erosion of the turbine blades, reducing their lifespan and efficiency.
        *   **Low Rotational Speed:** To efficiently absorb the energy from very high-velocity steam, the rotor would need to rotate at extremely high speeds, which are often impractical and structurally challenging to achieve. The optimum blade speed is roughly half the steam jet speed.
        *   **Backflow:** At very high velocities, some steam might flow backward from the exhaust side to the inlet side, leading to inefficiency.

*   **Compounding as a Solution:** Compounding divides the total pressure drop into smaller pressure drops across multiple stages. This, in turn, reduces the steam velocity in each stage, making the energy extraction more efficient and manageable.

---

### 2. Methods of Compounding

Compounding can be achieved by distributing the pressure drop, velocity changes, or both, across multiple stages. The primary methods are:

#### 2.1. Pressure Compounding (Reaction Turbines)

*   **Concept:** The total pressure drop is divided into several smaller pressure drops, each occurring over a different set of stationary and moving blades.
*   **Mechanism:**
    *   The steam expands in the **stationary nozzles** (also called guide vanes or stator blades), converting pressure energy into kinetic energy and increasing its velocity.
    *   This high-velocity steam then expands further and does work on the **moving blades** (rotor blades).
    *   Crucially, in pressure compounding, a portion of the steam expansion also occurs within the **moving blades** themselves. This means the pressure drops across both stationary and moving blade passages.
*   **Pressure Variation:**
    *   The pressure of the steam decreases progressively as it passes through successive stages of stationary and moving blades.
    *   Within each stage (nozzle + rotor), the pressure drops.
    *   The pressure drop across the moving blades is significant, leading to a reaction force that drives the rotor.
*   **Velocity Variation:**
    *   Steam velocity increases as it passes through the stationary nozzles.
    *   The velocity decreases as the steam does work on the moving blades.
    *   However, because the pressure drop is distributed, the maximum velocity achieved in any single nozzle is lower than in an impulse turbine with the same total pressure drop.
*   **Example:** **Reaction Turbines** (e.g., Parsons Turbine). In a reaction turbine, the pressure drop is distributed approximately equally between the stationary and moving blades.
*   **Key Feature:** Both stationary and moving blades are shaped as nozzles.

#### 2.2. Velocity Compounding (Impulse Turbines)

*   **Concept:** The total pressure drop occurs entirely in a single set of stationary nozzles, resulting in a very high steam velocity. This high-velocity steam is then directed onto multiple rows of moving blades, with intermediate stationary guide blades.
*   **Mechanism:**
    *   **First Nozzle Set:** The entire pressure drop takes place in the first set of stationary nozzles, creating a high-velocity steam jet.
    *   **First Moving Blade Row:** The high-velocity steam impinges on the first row of moving blades, transferring some of its kinetic energy. This causes the blades to rotate. The steam velocity reduces significantly.
    *   **First Stationary Blade Row (Guide Blades):** The steam, now with reduced velocity but still possessing significant kinetic energy, is redirected by a set of stationary blades without any further pressure drop. These blades are designed to change the direction of the steam flow to impinge optimally on the next row of moving blades.
    *   **Second Moving Blade Row:** The redirected steam hits the second row of moving blades, transferring more kinetic energy.
    *   This process can be repeated for several stages of moving and stationary blades.
*   **Pressure Variation:**
    *   The pressure of the steam remains **constant** throughout the moving blade rows. The entire pressure drop occurs in the initial stationary nozzles.
*   **Velocity Variation:**
    *   Steam velocity increases dramatically in the initial stationary nozzles.
    *   The velocity decreases as steam passes through each row of moving blades.
    *   The velocity is restored (increased) after passing through the stationary guide blades, ready for the next row of moving blades.
    *   The velocity of the steam jet decreases progressively with each subsequent pair of moving and stationary blades.
*   **Example:** **Curtis Turbine** is a classic example of velocity compounding.
*   **Key Feature:** Only stationary blades are nozzles. Moving blades are shaped to reverse the steam flow.

#### 2.3. Pressure-Velocity Compounding (Combination)

*   **Concept:** This method combines aspects of both pressure and velocity compounding to achieve better efficiency. The total pressure drop is divided into several stages, and within each stage, the pressure drop is further divided between stationary and moving blades.
*   **Mechanism:**
    *   The total pressure drop is split into multiple stages (like pressure compounding).
    *   Within each stage, a portion of the pressure drop occurs in the stationary nozzles, increasing steam velocity.
    *   The remaining pressure drop within that stage occurs across the moving blades, causing further expansion and driving the rotor.
    *   This results in lower steam velocities in each nozzle and across each set of moving blades compared to pure velocity compounding.
*   **Pressure Variation:**
    *   The pressure drops progressively across each stage, similar to pressure compounding.
    *   Within each stage, there are smaller pressure drops across both stationary and moving blades.
*   **Velocity Variation:**
    *   Steam velocity increases in stationary nozzles and decreases in moving blades, with the magnitude of change being less extreme than in pure velocity compounding.
    *   The velocity variations are more moderate than in pure velocity compounding, and the overall steam velocity is lower than in pure velocity compounding for the same total pressure drop.
*   **Example:** **Rateau Turbine** is a type of pressure-velocity compounded turbine where the pressure drop is divided into many stages, with each stage consisting of a nozzle diaphragm and a row of moving blades. The pressure drops across the nozzles, and further pressure drop occurs across the moving blades.
*   **Key Feature:** Combines pressure drops across both stationary and moving blades, but the pressure drop per stage is smaller than in a pure reaction turbine, and the velocity changes are more controlled than in a pure impulse turbine.

---

### 3. Pressure and Velocity Variation Diagrams

Visualizing the pressure and velocity changes is crucial for understanding compounding.

#### 3.1. Pressure Compounding (Reaction Turbine)

*   **Pressure:** Decreases continuously across stationary and moving blades.
*   **Velocity:** Increases across stationary blades, decreases across moving blades, and then increases again across the next stationary blades. The peak velocity in any nozzle is moderate.

*(Imagine a diagram showing pressure dropping steadily from inlet to outlet. Velocity would show a zig-zag pattern with peaks after each stationary nozzle and troughs after each moving blade row, but the peaks are not excessively high.)*

#### 3.2. Velocity Compounding (Impulse Turbine)

*   **Pressure:** Remains constant across all moving blades; drops sharply only in the initial stationary nozzles.
*   **Velocity:** Increases sharply in the first nozzles, then decreases significantly in each subsequent row of moving and stationary blades as energy is extracted.

*(Imagine a diagram showing pressure dropping only at the very beginning and remaining constant thereafter. Velocity would show a sharp initial rise, followed by steep declines after each moving blade row and a partial recovery after each stationary guide blade row, with progressively lower peak velocities.)*

#### 3.3. Pressure-Velocity Compounding (Rateau Turbine)

*   **Pressure:** Decreases progressively across stages, with a portion of the drop in stationary nozzles and the rest in moving blades.
*   **Velocity:** Increases in stationary nozzles and decreases in moving blades, with more moderate variations than in pure velocity compounding.

*(Imagine a diagram showing a stepped pressure drop across stages. Velocity would show moderate increases in stationary nozzles and moderate decreases in moving blades within each stage, with overall velocity generally lower than in pure velocity compounding.)*

---

### 4. Comparison and Advantages of Compounding

| Feature             | Pressure Compounding (Reaction)                               | Velocity Compounding (Impulse)                              | Pressure-Velocity Compounding (Rateau)                               |
| :------------------ | :------------------------------------------------------------ | :---------------------------------------------------------- | :------------------------------------------------------------------- |
| **Pressure Drop**   | Divided across many stages (stationary & moving blades)       | Entire drop in first stationary nozzles                     | Divided across stages; portion in stationary, rest in moving blades  |
| **Steam Velocity**  | Moderate, but continuous increase and decrease                | Very high initially, then gradually reduced                 | Moderate, with controlled variations                                 |
| **Blade Speed**     | Lower blade speeds required for efficiency                    | Higher blade speeds required for efficiency                 | Intermediate blade speeds                                            |
| **Number of Stages**| High number of stages (many rows of moving & stationary blades) | Fewer stages needed for total pressure drop                 | Moderate number of stages                                            |
| **Efficiency**      | Generally higher at partial loads; good for lower speeds      | Can be efficient at high speeds, but less so at partial loads | Good overall efficiency, balancing pressure and velocity             |
| **Construction**    | More complex due to shaped nozzles on both blade sets         | Simpler blade design (mostly impulse blades)                | More complex than impulse, simpler than pure reaction                |
| **Leakage Losses**  | Higher due to many blade rows and sealing requirements        | Lower leakage losses                                        | Moderate leakage losses                                              |
| **Blade Erosion**   | Less severe due to lower steam velocities                     | More severe due to very high steam velocities               | Less severe than velocity compounding                                |
| **Example**         | Parsons Turbine                                               | Curtis Turbine                                              | Rateau Turbine                                                       |

---

### 5. Worked Example (Conceptual)

Let's consider a turbine with a total pressure drop of 10 bar to 0.1 bar (1000 kPa to 10 kPa).

*   **Single Stage (Impulse):**
    *   The entire 9.9 bar pressure drop occurs in one set of nozzles.
    *   Steam velocity could reach upwards of 1200 m/s.
    *   Blade speed for optimal efficiency would be around 600 m/s. This is very high.
    *   Significant kinetic energy losses and erosion issues.

*   **Velocity Compounding (e.g., Curtis):**
    *   Pressure drop of 9.9 bar in the first set of nozzles. Steam velocity ~1200 m/s.
    *   First moving blades extract energy, reducing velocity.
    *   Stationary blades redirect steam, maintaining reasonable velocity.
    *   Second moving blades extract more energy.
    *   The peak velocity is still high, but it's used more effectively over multiple blade rows. Requires higher rotor speed.

*   **Pressure Compounding (e.g., Parsons):**
    *   The 9.9 bar drop is divided into perhaps 10-20 stages.
    *   Each stage might have a pressure drop of 0.5-1 bar.
    *   Nozzle velocities would be much lower (e.g., 200-300 m/s).
    *   Optimal blade speeds would be lower (100-150 m/s).
    *   Requires many more blade rows, increasing cost and potential leakage.

*   **Pressure-Velocity Compounding (e.g., Rateau):**
    *   The 9.9 bar drop is divided into, say, 5 stages.
    *   Each stage might have a pressure drop of ~2 bar.
    *   Within each stage, some drop in nozzles, some in moving blades.
    *   Steam velocities are moderate, and blade speeds are intermediate.
    *   Offers a good compromise between efficiency, speed, and complexity.

---

### 6. Important Points to Remember:

*   **Compounding is essential to manage high steam velocities resulting from large pressure drops.**
*   **Pressure compounding (Reaction) divides the pressure drop across both stationary and moving blades.**
*   **Velocity compounding (Impulse) concentrates the pressure drop in stationary nozzles and uses multiple moving blade rows with intermediate guide blades.**
*   **Pressure-velocity compounding offers a balance between the two.**
*   **The choice of compounding method depends on desired turbine speed, efficiency requirements, and cost considerations.**
*   **Lower steam velocities lead to reduced kinetic energy losses and blade erosion.**
*   **Optimizing blade speed to approximately half the steam jet speed is crucial for efficiency.**

---

### 7. Practice Questions and Exercises:

**Question 1:** Explain why compounding is necessary in steam turbines. (CO1, CO2)

**Answer:** Compounding is necessary because a large pressure drop in a single stage results in extremely high steam velocities. These high velocities lead to significant kinetic energy losses due to friction and shock, cause erosion of turbine blades, and require impractically high rotor speeds for efficient energy transfer. Compounding divides the total pressure drop into smaller steps, reducing steam velocity at each stage and improving overall efficiency and turbine lifespan.

**Question 2:** Differentiate between pressure compounding and velocity compounding in terms of:
    a) Pressure distribution across stages
    b) Velocity distribution across stages
    c) Blade speed requirements (CO2)

**Answer:**
    *   **a) Pressure Distribution:**
        *   **Pressure Compounding:** Pressure drops progressively across both stationary nozzles and moving blades.
        *   **Velocity Compounding:** Pressure drops only in the initial stationary nozzles; it remains constant across moving blades.
    *   **b) Velocity Distribution:**
        *   **Pressure Compounding:** Steam velocity increases in stationary nozzles and decreases in moving blades, with moderate peak velocities.
        *   **Velocity Compounding:** Steam velocity increases very high in initial nozzles and decreases significantly in each subsequent row of moving and stationary blades.
    *   **c) Blade Speed Requirements:**
        *   **Pressure Compounding:** Lower blade speeds are required for optimal efficiency.
        *   **Velocity Compounding:** Higher blade speeds are required for optimal efficiency, matching the high steam jet velocity.

**Question 3:** In a velocity compounded turbine, why are stationary guide blades placed between moving blade rows? (CO2)

**Answer:** Stationary guide blades in a velocity compounded turbine are placed between moving blade rows to **redirect the steam flow**. After passing through a row of moving blades, the steam's direction is altered, and its velocity is reduced but still significant. The guide blades change the steam's direction so that it strikes the next row of moving blades at the optimal angle, allowing for further efficient energy extraction. They do not cause a pressure drop but efficiently use the remaining kinetic energy.

**Question 4:** Which type of compounding is best suited for applications requiring moderate rotor speeds? Justify your answer. (CO2)

**Answer:** **Pressure compounding (Reaction turbines)** is generally best suited for applications requiring moderate rotor speeds. This is because the pressure is divided into many small drops, resulting in lower steam velocities in each stage. Consequently, the required blade speeds to efficiently absorb this energy are also lower, making them suitable for applications where high-speed operation might be impractical or undesirable.

**Question 5:** A steam turbine experiences a total pressure drop of 50 bar to 0.5 bar.
    a) What would be the approximate theoretical steam velocity if the entire expansion occurred in a single set of nozzles? (Assume ideal conditions and use an approximate velocity formula if needed, or discuss qualitatively).
    b) How would compounding help mitigate the issues associated with this high velocity? (CO1, CO2)

**Answer:**
    *   **a) Approximate Velocity:**
        The enthalpy drop corresponding to a pressure drop from 50 bar to 0.5 bar is significant. A very rough approximation for isentropic expansion velocity ($V$) can be given by $V = \sqrt{2 \times \Delta h}$, where $\Delta h$ is the specific enthalpy drop. For such a large pressure drop, the enthalpy drop would be substantial, leading to theoretical velocities well over 1000 m/s, likely in the range of 1200-1400 m/s or even higher, depending on the initial steam conditions.
        *(Note: A precise calculation requires steam tables and isentropic expansion assumptions. The qualitative discussion is more important here.)*
    *   **b) How Compounding Helps:**
        Compounding would divide this large pressure drop. For example, in a velocity-compounded turbine, the entire 49.5 bar drop occurs in the first nozzle, yielding the high velocity. However, this high velocity is then utilized by multiple moving blade rows. In pressure-compounded turbines, the 49.5 bar drop is spread over many stages, with each stage having a much smaller pressure drop. This leads to significantly lower steam velocities in each nozzle (e.g., perhaps 200-400 m/s). These lower velocities are easier to handle, reduce frictional losses, minimize erosion, and allow for more efficient energy transfer at lower, more practical rotor speeds.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 8. References:

*   **Thermal Engineering by Rudra Moorthy** (McGraw Hill Education India, 2003) - Likely covers classification, working principles, and compounding methods.
*   **Thermal Engineering by R.K Rajput** (Laxmi publications, 2010) - Expected to provide detailed explanations of different turbine types and compounding techniques.

*(Note: The other listed textbooks and reference books are for IC Engines and are not directly relevant to this specific topic on Steam Turbines. The focus should be on the Steam Turbine specific literature.)*

---