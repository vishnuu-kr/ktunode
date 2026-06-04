---
title: "Impulse and reaction turbines-velocity diagram-condition for maximum efficiency-compounding-reheat factor-blade height-governing of steam turbines-cogeneration and combined cycle power generation"
subject: "POWER PLANT ENGINEERING"
module: "Module 2: Steam generator classifications"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1951d0cf48044643a2"
status: "completed"
scrapedAt: "2026-05-20T18:16:14.301Z"
---
# Power Plant Engineering - Module 2: Steam Turbine Classifications and Operation

This module focuses on the core components of a thermal power plant, specifically the steam turbine, its various classifications, operational principles, and advanced concepts like cogeneration and combined cycles.

**Learning Outcomes:**

*   Understand the working principles of impulse and reaction steam turbines.
*   Analyze steam turbine performance using velocity diagrams.
*   Determine the condition for maximum efficiency in steam turbines.
*   Explain different methods of compounding in steam turbines.
*   Define and calculate the reheat factor.
*   Understand the concept of blade height and its significance.
*   Explain the governing mechanisms of steam turbines.
*   Discuss the principles and benefits of cogeneration and combined cycle power generation.

**Course Outcomes Addressed:**

*   **CO1 (K2):** Explains the working of steam power plants. (Understanding turbine operation contributes to this.)
*   **CO3 (K3):** Calculates performance parameters of steam turbines. (Velocity diagrams, efficiency conditions, and compounding directly relate to this.)

---

## 1. Impulse and Reaction Turbines

Steam turbines convert the thermal energy of steam into mechanical energy. The two fundamental types are impulse and reaction turbines, distinguished by how the steam pressure changes across the moving blades.

### 1.1 Impulse Turbines

*   **Princ:** In an impulse turbine, the entire pressure drop of the steam occurs in the stationary nozzles. The high-velocity steam jet then impinges on the moving blades, causing a change in momentum and hence a force on the blades.
*   **Mechanism:**
    *   Steam expands through stationary nozzles (fixed blades) and its pressure energy is converted into kinetic energy, producing a high-velocity jet.
    *   This high-velocity jet strikes the moving blades tangentially.
    *   The force on the blades is due to the change in momentum of the steam jet.
    *   **Key Characteristic:** The pressure of the steam remains constant across the moving blades.
*   **Diagrammatic Representation:**
    *   A converging-diverging nozzle is used for supersonic steam velocities.
    *   The rotor is fitted with rows of impulse blades.
*   **Example:** De Laval turbine is a classic example of a pure impulse turbine.

### 1.2 Reaction Turbines

*   **Princ:** In a reaction turbine, the steam expands both in the stationary nozzles (or guide vanes) and in the moving blades. The pressure drops across both stages, resulting in a reaction force on the moving blades.
*   **Mechanism:**
    *   Steam expands partly in the stationary nozzles and partly in the moving blades.
    *   The pressure drop in the moving blades causes the steam to accelerate *relative to the blades*.
    *   The force on the blades is due to the change in momentum of the steam, acting as both an impulse and a reaction.
    *   **Key Characteristic:** There is a pressure drop across the moving blades.
*   **Diagrammatic Representation:**
    *   The stationary blades are designed as nozzles to partially expand the steam.
    *   The moving blades are shaped like nozzles to further expand the steam.
*   **Example:** Parsons turbine is a classic example of a reaction turbine. In a pure reaction turbine, the pressure drop in the moving blades is equal to the pressure drop in the stationary nozzles for the same stage.

### 1.3 Comparison: Impulse vs. Reaction

| Feature           | Impulse Turbine                                 | Reaction Turbine                                    |
| :---------------- | :---------------------------------------------- | :-------------------------------------------------- |
| Pressure Change   | Entirely in stationary nozzles                  | In both stationary nozzles and moving blades        |
| Steam Velocity    | High velocity jet impinges on blades            | Steam accelerates relative to moving blades         |
| Force on Blades   | Primarily impulse force (change in momentum)    | Impulse and reaction forces (change in momentum)    |
| Blade Design      | Simple, often symmetrical                       | Aerofoil shaped, act as nozzles                     |
| Pressure Loss     | No pressure loss across moving blades           | Pressure loss across moving blades                  |
| Efficiency        | Can be high at optimal speeds                   | Generally higher efficiency over a wider speed range|
| Steam Leakage     | Less susceptible to leakage                     | More susceptible to leakage                         |
| Construction      | Simpler, fewer stages for same pressure drop    | More complex, many stages for large pressure drops  |
| Rotational Speed  | Higher rotational speeds                        | Lower rotational speeds                             |

---

## 2. Velocity Diagram

Velocity diagrams are crucial for analyzing the energy transfer and efficiency of steam turbines. They depict the velocities of the steam relative to the fixed and moving blades.

### 2.1 Velocity Components

For a single stage of a turbine (a row of stationary nozzles and a row of moving blades), we consider the following velocities:

*   **Absolute Velocity of Steam Entering Moving Blades ($v_1$):** The velocity of the steam jet as it leaves the nozzle and enters the moving blade.
*   **Blade Velocity ($u$):** The tangential velocity of the moving blades. This is constant around the circumference of the rotor.
*   **Relative Velocity of Steam Entering Moving Blades ($v_{r1}$):** The velocity of the steam relative to the moving blade as it enters.
    *   $v_{r1}^2 = v_1^2 + u^2 - 2 v_1 u \cos(\alpha_1)$ (where $\alpha_1$ is the angle between $v_1$ and $u$)
*   **Absolute Velocity of Steam Leaving Moving Blades ($v_2$):** The velocity of the steam as it leaves the moving blade and enters the next set of stationary blades or the exhaust.
*   **Relative Velocity of Steam Leaving Moving Blades ($v_{r2}$):** The velocity of the steam relative to the moving blade as it leaves.
*   **Blade Angle at Inlet ($\beta_1$):** The angle between the relative velocity of steam entering the blade ($v_{r1}$) and the tangent to the blade at the point of entry.
*   **Blade Angle at Outlet ($\beta_2$):** The angle between the relative velocity of steam leaving the blade ($v_{r2}$) and the tangent to the blade at the point of exit.
*   **Nozzle Angle ($\alpha_1$):** The angle between the absolute velocity of steam entering the moving blade ($v_1$) and the direction of blade motion ($u$). This is also the exit angle of the stationary nozzle.
*   **Exit Angle of Moving Blade ($\alpha_2$):** The angle between the absolute velocity of steam leaving the moving blade ($v_2$) and the direction of blade motion ($u$).

### 2.2 Velocity Diagram Construction

*   **Step 1: Blade Velocity ($u$):** Draw a vector representing the blade velocity $u$.
*   **Step 2: Absolute Velocity ($v_1$):** From the same origin, draw the absolute velocity $v_1$ at an angle $\alpha_1$ to the blade velocity vector $u$.
*   **Step 3: Relative Velocity ($v_{r1}$):** Complete the vector triangle by drawing $v_{r1}$ from the tip of $v_1$ to the tip of $u$. This vector $v_{r1}$ represents the direction of the incoming steam relative to the blade. The blade is designed to match this angle, so $\beta_1$ is the angle between $v_{r1}$ and $u$.
*   **Step 4: Relative Velocity ($v_{r2}$):** From the tip of $u$, draw the relative velocity $v_{r2}$ at an angle $\beta_2$ to the tangent at the exit of the blade.
*   **Step 5: Absolute Velocity ($v_2$):** Complete the vector triangle by drawing $v_2$ from the tip of $v_{r2}$ to the tip of $u$. This $v_2$ is the absolute velocity of the steam leaving the moving blades. $\alpha_2$ is the angle between $v_2$ and $u$.

### 2.3 Force and Work Done

*   **Force on Blades:** The force exerted by the steam on the blades is proportional to the change in momentum of the steam.
    *   Tangential force ($F_t$) on the blades is responsible for producing torque.
    *   Axial force ($F_a$) acts along the shaft.
*   **Work Done per unit mass of steam:**
    *   The work done on the blades is equal to the change in kinetic energy of the steam relative to the blades, which is related to the change in momentum.
    *   Work done per unit mass = $u \times (\Delta v_x)$ where $\Delta v_x$ is the change in tangential component of absolute velocity.
    *   More directly, Work done per unit mass ($W$) = $u (v_{f1} + v_{f2})$ where $v_{f1}$ and $v_{f2}$ are the tangential velocity components of steam entering and leaving the moving blades. From the velocity diagram, $v_{f1} = v_1 \cos(\alpha_1)$ and $v_{f2} = v_2 \cos(\alpha_2)$.
    *   Therefore, $W = u(v_1 \cos \alpha_1 + v_2 \cos \alpha_2)$.

---

## 3. Condition for Maximum Efficiency

The efficiency of a steam turbine stage is maximized when the work done by the steam on the blades is maximized. This occurs under specific conditions relating steam velocity and blade speed.

### 3.1 Maximum Stage Efficiency (Single Stage)

For a single stage, the maximum efficiency is achieved when the steam leaving the moving blades is directed axially ($\alpha_2 = 90^\circ$). This means $v_2$ is purely radial, and its tangential component is zero.

In this ideal case:
*   From the velocity diagram, $v_{r2} = u - v_1 \cos \alpha_1$.
*   Also, for maximum efficiency, the velocity of steam entering the blade ($v_{r1}$) should be equal to the velocity of steam leaving the blade ($v_{r2}$). This implies no loss in relative velocity due to friction.
*   So, $v_{r1} = v_{r2} = u - v_1 \cos \alpha_1$.
*   And $v_{r1}^2 = v_1^2 + u^2 - 2 v_1 u \cos \alpha_1$.

Substituting $v_{r1} = v_{r2}$:
$v_1^2 + u^2 - 2 v_1 u \cos \alpha_1 = (u - v_1 \cos \alpha_1)^2$
$v_1^2 + u^2 - 2 v_1 u \cos \alpha_1 = u^2 + v_1^2 \cos^2 \alpha_1 - 2 v_1 u \cos \alpha_1$
$v_1^2 = v_1^2 \cos^2 \alpha_1$
This implies $\cos^2 \alpha_1 = 1$, which means $\alpha_1 = 0^\circ$. This is not practical.

A more practical condition for maximum efficiency is when the **blade speed ($u$) is equal to half the steam jet speed ($v_1$)**. This is known as **Stodola's condition** or the **maximum steam utilization condition** for impulse turbines with nozzles.

**Condition for Maximum Efficiency:** $u = v_1 / 2$

If this condition is met and the blade angles are optimized:
*   The steam enters the blades tangentially to the blade profile.
*   The steam leaves the blades axially.
*   The kinetic energy imparted to the steam leaving the stage is minimized.

### 3.2 Maximum Isentropic Efficiency

The isentropic efficiency ($\eta_{stage}$) of a turbine stage is defined as the ratio of the actual work done by the steam on the blades to the isentropic work that could be done by the steam if it expanded isentropically through the pressure drop of that stage.

$\eta_{stage} = \frac{\text{Actual Work Done}}{\text{Isentropic Work}}$

The theoretical maximum work done occurs when the exit absolute velocity ($v_2$) is zero, meaning all kinetic energy from the nozzle is transferred to the rotor. This gives a theoretical maximum velocity ratio of $u/v_1 = 1$. However, this is impractical as it requires infinite blade angles or leads to excessive exhaust losses.

The condition for maximum **stage efficiency** is $u = v_1 \cos \alpha_1$.
For pure impulse turbines, the nozzle angle $\alpha_1$ is typically around 15-20 degrees.
If $\alpha_1 = 20^\circ$, then $u = v_1 \cos 20^\circ \approx 0.94 v_1$.

**Key Point:** The optimal blade speed is a significant fraction of the jet speed. For maximum efficiency, the blade speed is often taken as approximately half the steam jet speed ($u \approx v_1/2$).

---

## 4. Compounding of Steam Turbines

High steam velocities required for efficient operation in impulse turbines can lead to very high blade speeds, which are structurally unsafe. Compounding is a technique to reduce the blade speed and improve efficiency by dividing the total pressure drop or the kinetic energy of the steam into several stages.

### 4.1 Types of Compounding

#### 4.1.1 Velocity Compounding

*   **Princ:** The total pressure drop occurs in a single set of stationary nozzles. The resulting high-velocity steam jet is then made to expand over multiple rows of moving blades, separated by stationary blades (guide vanes) which redirect the steam.
*   **Mechanism:**
    *   Steam expands in the first set of nozzles, achieving a high velocity.
    *   The steam passes through the first row of moving blades, losing some velocity.
    *   The stationary blades redirect the steam and increase its velocity slightly (without significant pressure drop).
    *   The steam passes through a second row of moving blades, further reducing its velocity.
    *   This process can be repeated for multiple stages.
*   **Pressure & Temperature:** Pressure and temperature drop only in the nozzles. They remain constant across moving blades.
*   **Efficiency:** Improves efficiency by reducing the blade speed requirement, but the reheating of steam by stationary blades in subsequent stages can reduce efficiency.
*   **Example:** Curtis turbine is a classic example of a velocity-compounded impulse turbine.

#### 4.1.2 Pressure Compounding

*   **Princ:** The total pressure drop is divided into several stages, with each stage consisting of a set of stationary nozzles and a set of moving blades.
*   **Mechanism:**
    *   The steam expands in the first set of stationary nozzles, and the pressure drop occurs here.
    *   The steam then passes through the first set of moving blades, doing work.
    *   The steam then enters a second set of stationary nozzles (often fixed to the same casing), where further expansion and pressure drop occurs.
    *   This process is repeated for multiple stages.
*   **Pressure & Temperature:** Pressure and temperature drop in each set of stationary nozzles. They remain constant across the moving blades.
*   **Efficiency:** Generally more efficient than velocity compounding, as it avoids reheating effects and allows for lower blade speeds with better steam utilization.
*   **Example:** Parsons turbine is essentially a pressure-compounded reaction turbine, where each stage consists of a row of nozzles and a row of blades.

#### 4.1.3 Pressure-Velocity Compounding

*   **Princ:** Combines features of both velocity and pressure compounding. The total pressure drop is divided into several stages. Within each stage, there is a pressure drop in the nozzles and the velocity is utilized over multiple moving blades.
*   **Mechanism:**
    *   The total pressure drop is divided into stages.
    *   Each stage typically has one row of nozzles and multiple rows of moving blades interspersed with stationary guide blades.
*   **Example:** Rateau turbine can be considered as a type of pressure-velocity compounding, though it's more of a series of simple impulse stages, each with its own nozzle (effectively pressure compounded).

---

## 5. Reheat Factor

In a multi-stage turbine, especially in reaction turbines and pressure-compounded impulse turbines, the steam undergoes expansion and does work. The actual expansion process is not perfectly isentropic due to irreversible losses (friction, turbulence).

*   **Definition:** The reheat factor ($R$) is defined as the ratio of the actual work done by the steam in a multi-stage turbine to the work that would be done if the expansion occurred isentropically through the same total pressure drop.
*   **Formula:**
    $R = \frac{\text{Actual work done by steam in multi-stage turbine}}{\text{Isentropic work done for the same total pressure drop}}$

*   **Explanation:**
    *   In each stage, some energy is lost due to irreversibilities (friction, turbulence), leading to a slightly higher enthalpy of the steam leaving the stage than in an isentropic expansion.
    *   This slightly higher enthalpy means the steam has more internal energy available for subsequent stages.
    *   Therefore, the total actual work done is slightly greater than the work that would be done in a single isentropic expansion through the total pressure drop.
    *   The reheat factor is always greater than unity ($R > 1$).

*   **Calculation:**
    Let $h_{01}, h_{02}, ..., h_{0n}$ be the stagnation enthalpies at the inlet of each stage.
    Let $h_{11}, h_{12}, ..., h_{1n}$ be the stagnation enthalpies at the outlet of each stage.
    The actual work done in stage $i$ is $w_{actual,i} = h_{0i} - h_{1i}$.
    Total actual work, $W_{actual} = \sum_{i=1}^{n} (h_{0i} - h_{1i})$.

    If expansion in stage $i$ was isentropic, the enthalpy at the outlet would be $h_{1i,s}$.
    Isentropic work in stage $i$, $w_{isentropic,i} = h_{0i} - h_{1i,s}$.
    Total isentropic work, $W_{isentropic} = \sum_{i=1}^{n} (h_{0i} - h_{1i,s})$.

    Then, $R = \frac{W_{actual}}{W_{isentropic}}$.

*   **Significance:** The reheat factor accounts for the positive effect of irreversible losses in earlier stages on the work output of later stages. It is a measure of the "gain" in work output due to the steam being superheated at the end of each stage compared to a single isentropic expansion.
*   **Typical Values:** Reheat factors are typically between 1.03 and 1.15 for most practical turbines.

---

## 6. Blade Height

The height of the turbine blades is a critical design parameter, influencing the volumetric flow rate of steam and the overall efficiency of the turbine.

### 6.1 Concept

*   **Definition:** Blade height refers to the axial length of the moving blades, which determines the annular area through which the steam flows.
*   **Blade Annulus:** The area between the inner and outer diameters of the rotor where the steam flows is called the blade annulus. The blade height is the radial extent of this annulus.
*   **Blade Height ($h$):** For a cylindrical blade, $h = R_o - R_i$, where $R_o$ is the outer radius and $R_i$ is the inner radius of the blade.

### 6.2 Significance and Design Considerations

*   **Steam Flow Rate:** The volumetric flow rate of steam through a blade row is given by $Q = \text{Annular Area} \times \text{Axial Velocity of Steam}$.
    *   Annular Area = $\pi (D_o^2 - D_i^2)/4 = \pi (D_o - D_i)(D_o + D_i)/4$.
    *   Let $D_o$ be outer diameter and $D_i$ be inner diameter. Let mean diameter $D_m = (D_o + D_i)/2$. Then $D_o - D_i = 2h$.
    *   Annular Area $\approx \pi (2h) D_m$.
    *   Therefore, $Q \approx (\pi D_m \cdot 2h) \cdot v_{ax}$, where $v_{ax}$ is the axial velocity of steam.
    *   This shows that blade height is directly proportional to the flow rate.

*   **Work Output:** The work done by a stage is proportional to the blade speed ($u$) and the tangential component of the steam velocity.
    *   Torque ($T$) $\propto$ $u \times (\text{mass flow rate})$.
    *   Mass flow rate ($\dot{m}$) = $\rho \times Q = \rho \times (\pi D_m \cdot 2h) \cdot v_{ax}$.
    *   Work done per unit mass $\propto u$.
    *   Thus, Work done per stage $\propto u \times \dot{m} \propto u \times \rho \times (\pi D_m \cdot 2h) \cdot v_{ax}$.

*   **Velocity Ratio ($u/v_1$):** For a given turbine speed, a larger diameter rotor results in a higher blade speed $u$.
    *   If the mean diameter ($D_m$) is increased, $u$ increases.
    *   To maintain an optimal velocity ratio ($u/v_1$) for efficiency, the steam velocity ($v_1$) must also be increased or the blade speed needs to be managed.

*   **High-Speed Turbines (Large Blade Heights):**
    *   At high rotational speeds and large diameters, blade speeds ($u$) become very high.
    *   To maintain efficiency (i.e., $u \approx v_1/2$), the steam velocity ($v_1$) must also be high.
    *   A higher steam velocity ($v_1$) means a higher pressure drop across the nozzles.
    *   To handle the large volumetric flow rates at high speeds and low steam densities (at later stages), the blade height must be increased significantly.
    *   **Problem:** As blade height increases, tip leakage losses (steam passing over the blade tips) become more significant, reducing efficiency.

*   **Low-Speed Turbines (Small Blade Heights):**
    *   At lower rotational speeds and smaller diameters, blade speeds ($u$) are lower.
    *   Lower steam velocities ($v_1$) are required.
    *   Lower volumetric flow rates require smaller blade heights.
    *   Tip leakage losses are less problematic.

*   **Design Trade-offs:**
    *   **Increasing blade height:** Increases steam flow capacity and potential work output but also increases tip leakage losses.
    *   **Decreasing blade height:** Reduces tip leakage losses but limits steam flow and potential work output.
    *   Turbine designers carefully balance these factors based on steam conditions, power output, and desired efficiency.

---

## 7. Governing of Steam Turbines

Governing is the process of controlling the speed of the turbine, and thus the electrical output of the generator, by regulating the steam flow to the turbine.

### 7.1 Objective of Governing

*   Maintain a constant speed (e.g., 3000 RPM for 50 Hz generators, 3600 RPM for 60 Hz generators) under varying load conditions.
*   Protect the turbine from over-speeding in case of sudden load shedding.
*   Ensure stable operation of the power grid.

### 7.2 Governing Mechanisms

The primary method of governing is by controlling the amount of steam admitted to the turbine. This is achieved using a **governor**.

#### 7.2.1 Mechanical Governor (Centrifugal Governor)

*   **Princ:** Based on the centrifugal force acting on flyweights.
*   **Components:**
    *   **Flyweights:** Rotated by the turbine shaft. As speed increases, they move outwards.
    *   **Governor Sleeve:** Moves axially along the rotating shaft as the flyweights change position.
    *   **Springs:** Provide a restoring force to the flyweights, balancing the centrifugal force.
    *   **Linkage Mechanism:** Connects the governor sleeve to the control valve.
    *   **Control Valve (Throttle Valve):** Regulates the steam flow to the turbine.
*   **Operation:**
    1.  **Increased Load (Decreased Speed):** Turbine speed drops. Flyweights move inwards. Sleeve moves down. Control valve opens further, admitting more steam to increase speed.
    2.  **Decreased Load (Increased Speed):** Turbine speed increases. Flyweights move outwards. Sleeve moves up. Control valve closes slightly, reducing steam flow to decrease speed.
*   **Limitations:** Mechanical governors are relatively slow to respond and can have significant speed variations (droop).

#### 7.2.2 Hydraulic Governor

*   **Princ:** Uses a hydraulic relay system to amplify the force from a sensing element (often a mechanical or electronic speed sensor) to operate the control valve.
*   **Components:**
    *   **Speed Sensing Element:** Could be a mechanical flyweight system or an electronic sensor (e.g., tachometer).
    *   **Pilot Valve:** Controlled by the speed sensing element.
    *   **Main Piston/Actuator:** Driven by hydraulic pressure, controlled by the pilot valve.
    *   **Control Valve:** Operated by the main piston.
*   **Operation:** Faster and more accurate response compared to purely mechanical governors due to hydraulic amplification.

#### 7.2.3 Electronic Governor

*   **Princ:** Uses electronic sensors (like magnetic pickups or optical tachometers) to measure speed and an electronic controller (microprocessor) to process this information and actuate the control valve.
*   **Actuation:** The control signal from the electronic controller is typically used to operate an electro-hydraulic converter or a hydraulic actuator, which then manipulates the steam control valves.
*   **Advantages:**
    *   Very fast and precise response.
    *   Can implement complex control strategies (e.g., load shedding response, grid synchronization).
    *   Can integrate with plant control systems.
    *   Programmable for different operating modes.

### 7.3 Methods of Steam Admission

*   **Throttle Governing:**
    *   **Princ:** A single control valve (throttle valve) is used to regulate the steam flow to the entire turbine.
    *   **Effect:** As the throttle valve is partially closed, the pressure of the steam admitted to the first stage decreases, and the steam becomes more superheated in the initial stages.
    *   **Efficiency:** Less efficient at part loads because the turbine operates with a lower inlet pressure and higher exhaust pressure, leading to increased throttling losses and reduced efficiency.
*   **Nozzle Control (Multi-Valve Governing):**
    *   **Princ:** The steam supply to different nozzles (or groups of nozzles) is controlled by individual valves.
    *   **Mechanism:** At full load, all nozzles admit steam. As load decreases, some valves are closed, shutting off steam to certain nozzles.
    *   **Advantage:** Improves part-load efficiency because the steam passes through fewer nozzles, resulting in a higher initial pressure and velocity for the steam that is admitted, and less throttling loss.
    *   **Efficiency:** More efficient at part loads compared to throttle governing.

---

## 8. Cogeneration and Combined Cycle Power Generation

These are advanced concepts aimed at improving the overall efficiency and economic viability of power generation by utilizing energy more effectively.

### 8.1 Cogeneration (Combined Heat and Power - CHP)

*   **Princ:** Simultaneously produces both electrical power and useful thermal energy (heat) from a single primary energy source (like fuel).
*   **Mechanism:**
    *   A prime mover (e.g., steam turbine, gas turbine) drives a generator to produce electricity.
    *   The exhaust heat from the prime mover, which would otherwise be wasted, is recovered and used for heating or industrial processes.
    *   In a steam turbine context: Steam is extracted from an intermediate stage of the turbine (extraction turbine) or from the exhaust of a topping turbine (in a combined cycle) for heating purposes.
*   **Diagram:** A steam turbine is coupled to a generator. A heat exchanger (e.g., feedwater heater, process heat exchanger) is connected to extract steam or hot water.
*   **Benefits:**
    *   **High Overall Efficiency:** Can achieve overall efficiencies of 80-90% (electricity + useful heat), significantly higher than typical power-only plants (35-45%).
    *   **Reduced Fuel Consumption:** Uses less fuel per unit of output compared to separate generation of power and heat.
    *   **Reduced Emissions:** Lower fuel consumption leads to lower overall greenhouse gas emissions.
    *   **Economic Advantages:** Lower operating costs.
*   **Applications:** Industrial processes (chemical plants, paper mills, food processing), district heating systems, large commercial buildings.

### 8.2 Combined Cycle Power Generation (CCPG)

*   **Princ:** Integrates a gas turbine and a steam turbine to generate electricity. The exhaust heat from the gas turbine is used to produce steam in a Heat Recovery Steam Generator (HRSG), which then drives a steam turbine.
*   **Mechanism:**
    1.  **Gas Turbine Cycle (Brayton Cycle):** Air is compressed, mixed with fuel, and combusted. The hot, high-pressure gas expands through the gas turbine, producing power and driving the compressor.
    2.  **Heat Recovery Steam Generator (HRSG):** The hot exhaust gases from the gas turbine (at high temperature, but with significant residual energy) pass through an HRSG. The HRSG contains boiler tubes where water is heated and converted into high-pressure steam.
    3.  **Steam Turbine Cycle (Rankine Cycle):** The high-pressure steam produced in the HRSG expands through a steam turbine, producing additional electrical power.
    4.  **Condenser:** The exhaust steam from the steam turbine is condensed back into water and pumped back to the HRSG.
*   **Diagram:**
    *   Air Intake -> Compressor -> Combustor (Fuel Injection) -> Gas Turbine -> Generator 1
    *   Gas Turbine Exhaust -> HRSG (Boiler) -> Steam Turbine -> Generator 2
    *   Steam Turbine Exhaust -> Condenser -> Feedwater Pump -> HRSG
*   **Benefits:**
    *   **Very High Efficiencies:** Achieves efficiencies of 50-60% or even higher, significantly exceeding simple cycle gas turbines or steam turbines alone.
    *   **Fuel Flexibility:** Can utilize various fuels for the gas turbine.
    *   **Reduced Emissions:** Generally lower NOx emissions than conventional steam plants, and overall lower CO2 per unit of electricity due to higher efficiency.
    *   **Faster Start-up:** Compared to traditional steam plants.
*   **Types of Combined Cycles:**
    *   **Single-Pressure:** HRSG produces steam at one pressure level.
    *   **Dual-Pressure/Multi-Pressure:** HRSG produces steam at multiple pressure levels (e.g., high-pressure, intermediate-pressure, low-pressure) to optimize heat recovery and steam turbine efficiency.
    *   **Reheat Combined Cycle:** Steam is reheated in the HRSG before entering the steam turbine for higher efficiency.
*   **Applications:** Power generation, especially for baseload and intermediate load.

---

## Practice Questions and Answers

**Q1:** In a pure impulse turbine, what is the primary reason for the force exerted on the moving blades?
**Answer:** The force is primarily due to the change in momentum of the high-velocity steam jet as it impinges on the blades.

**Q2:** What is the condition for maximum efficiency in a simple impulse turbine stage?
**Answer:** The blade speed ($u$) should be approximately half the steam jet speed ($v_1$), i.e., $u \approx v_1/2$. (Or $u = v_1 \cos \alpha_1$ for optimal stage efficiency with non-axial exit).

**Q3:** Explain the difference between velocity compounding and pressure compounding.
**Answer:**
*   **Velocity Compounding:** The entire pressure drop occurs in the nozzle, creating a high-velocity jet. This jet then expands over multiple rows of moving blades separated by stationary guide blades.
*   **Pressure Compounding:** The total pressure drop is divided into several stages, with each stage having its own nozzle and moving blade row. The pressure drops progressively across each set of nozzles.

**Q4:** What is the reheat factor, and why is it always greater than unity?
**Answer:** The reheat factor is the ratio of the actual work done by steam in a multi-stage turbine to the work that would be done if the expansion occurred isentropically through the same total pressure drop. It is greater than unity because the irreversible losses in earlier stages lead to slightly higher steam enthalpy at the exit of each stage, which is then recovered as additional work in subsequent stages.

**Q5:** Why is tip leakage loss a concern in turbines with large blade heights?
**Answer:** In turbines with large blade heights, the radial clearance (tip leakage gap) between the blade tips and the casing becomes significant relative to the blade height. Steam leaks over the blade tips from the high-pressure side to the low-pressure side, bypassing the intended flow path and reducing the work output.

**Q6:** A steam turbine is governed by a throttle valve. How does the turbine's efficiency change when the load is reduced?
**Answer:** When the load is reduced, the throttle valve is closed, reducing the steam inlet pressure. This leads to increased throttling losses and higher exhaust pressure relative to the inlet pressure, resulting in a decrease in the turbine's efficiency.

**Q7:** In a combined cycle power plant, what is the role of the Heat Recovery Steam Generator (HRSG)?
**Answer:** The HRSG uses the hot exhaust gases from the gas turbine to generate high-pressure steam, which is then used to drive a steam turbine, thereby recovering waste heat and increasing the overall efficiency of power generation.

**Q8:** Consider a turbine stage where the absolute steam velocity entering the moving blades is $v_1 = 400$ m/s, and the nozzle angle is $\alpha_1 = 20^\circ$. For maximum efficiency of this stage, what should be the blade velocity $u$? (Assume $\alpha_2 = 90^\circ$ for optimal conditions).
**Answer:** For maximum stage efficiency, $u = v_1 \cos \alpha_1$.
$u = 400 \text{ m/s} \times \cos(20^\circ)$
$u = 400 \text{ m/s} \times 0.9397$
$u \approx 375.88$ m/s.

**(Note for Q8: If the question implied a simple impulse turbine with $u = v_1/2$ for maximum overall efficiency, then $u = 400/2 = 200$ m/s. The context of "stage efficiency" vs. "overall turbine efficiency" can lead to slightly different optimal conditions.)**

---

## Important Points to Remember

*   **Impulse vs. Reaction:** Pressure drops in nozzles (impulse) vs. nozzles and blades (reaction).
*   **Velocity Diagram:** Visual tool for analyzing steam and blade velocities, crucial for calculating forces and work.
*   **Maximum Efficiency Condition:** For impulse turbines, $u \approx v_1/2$ is a key approximation for maximum efficiency. For staged efficiency, $u = v_1 \cos \alpha_1$.
*   **Compounding:** Reduces blade speed and improves efficiency by dividing pressure drop (pressure compounding) or kinetic energy utilization (velocity compounding).
*   **Reheat Factor ($R > 1$):** Accounts for the beneficial effect of losses in earlier stages on the work output of later stages in multi-stage turbines.
*   **Blade Height:** Directly proportional to steam flow rate and impacts tip leakage losses. Design involves balancing flow capacity with loss reduction.
*   **Governing:** Essential for maintaining constant speed by regulating steam flow, achieved through mechanical, hydraulic, or electronic governors. Throttle governing is less efficient at part loads than nozzle control.
*   **Cogeneration:** Produces both power and heat for high overall efficiency.
*   **Combined Cycle:** Integrates gas and steam turbines for very high power generation efficiencies.

---

This comprehensive set of notes covers the fundamental aspects of steam turbine classifications and operation, directly addressing the learning outcomes and relevant course outcomes within Power Plant Engineering. The examples and practice questions help solidify understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
