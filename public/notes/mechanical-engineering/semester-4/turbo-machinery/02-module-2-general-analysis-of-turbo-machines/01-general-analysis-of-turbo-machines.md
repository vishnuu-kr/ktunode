---
title: "General Analysis of Turbo machines:"
subject: "TURBO MACHINERY"
module: "Module 2: General Analysis of Turbo machines:"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf480446300d"
status: "completed"
scrapedAt: "2026-05-20T17:57:17.528Z"
---
# Turbo Machinery: Module 2 - General Analysis of Turbomachines

This module focuses on understanding the fundamental principles that govern the operation of all turbomachines, regardless of whether they are power-generating or power-consuming. We will analyze the energy transfer mechanisms and develop tools for performance evaluation.

---

## 1. Introduction to Turbomachines

**Definition:** A turbomachine is a device that transfers energy between a rotor and a fluid by utilizing the principles of fluid mechanics and thermodynamics.

**Key Concepts:**

*   **Rotor:** The rotating component of the turbomachine (e.g., impeller, turbine blades).
*   **Fluid:** The working substance that interacts with the rotor.
*   **Energy Transfer:** Energy is transferred from the fluid to the rotor (in turbines) or from the rotor to the fluid (in pumps, compressors, fans).
*   **Types of Turbomachines:**
    *   **Power Generating:** Extract energy from a fluid to produce mechanical power.
        *   *Examples:* Steam turbines, gas turbines, hydraulic turbines (Pelton, Francis, Kaplan), wind turbines.
    *   **Power Consuming:** Use mechanical power to transfer energy to a fluid, increasing its pressure or velocity.
        *   *Examples:* Pumps, compressors, fans, blowers.

**Importance of General Analysis:** Understanding the general principles allows for a unified approach to designing, analyzing, and selecting various types of turbomachines. It helps in predicting performance and optimizing efficiency.

**Reference:** Dixon, S.I. (1999) - Chapter 1: Introduction

---

## 2. Energy Transfer in Turbomachines

**Core Principle:** Energy transfer occurs through the interaction of the fluid with the rotating blades of the rotor. This interaction results in a change in the fluid's momentum and enthalpy.

**Key Concepts:**

*   **Work Done:** The energy transferred per unit mass of fluid.
*   **Euler's Turbomachine Equation:** This fundamental equation relates the work done per unit mass of fluid to the change in angular momentum of the fluid as it passes through the rotor.

    *   **Derivation (Simplified):** Consider a fluid element interacting with a rotor blade. The tangential component of the fluid velocity is crucial for work transfer. Euler's equation states:

        $W_{shaft} = u_2 v_{\theta2} - u_1 v_{\theta1}$

        Where:
        *   $W_{shaft}$ = Shaft work done per unit mass of fluid (J/kg)
        *   $u_1$ = Tangential velocity of the rotor at the inlet (m/s)
        *   $v_{\theta1}$ = Tangential component of the absolute fluid velocity at the inlet (m/s)
        *   $u_2$ = Tangential velocity of the rotor at the outlet (m/s)
        *   $v_{\theta2}$ = Tangential component of the absolute fluid velocity at the outlet (m/s)

    *   **Sign Convention:**
        *   Positive work: Fluid does work on the rotor (turbines).
        *   Negative work: Rotor does work on the fluid (pumps, compressors).

*   **Impact of Velocity Triangles:** The velocity triangles at the inlet and outlet of the rotor are essential for determining the tangential velocity components ($v_{\theta1}$, $v_{\theta2}$).

**Example:**
In a turbine, the fluid's tangential velocity at the outlet ($v_{\theta2}$) is reduced from the tangential velocity at the inlet ($v_{\theta1}$), resulting in positive work done on the rotor. In a pump, the fluid's tangential velocity at the outlet ($v_{\theta2}$) is increased, requiring work input from the rotor.

**Reference:**
*   Dixon, S.I. (1999) - Chapter 2: The Work Done and Euler’s Equation
*   Venkanna, B.K. (2009) - Chapter 2: Energy Transfer in Turbomachines

---

## 3. Velocity Triangles

**Definition:** Velocity triangles are graphical representations of the velocity vectors of the fluid and the rotor at the inlet and outlet of the rotor passages. They are crucial for analyzing the energy transfer and determining performance.

**Key Components of a Velocity Triangle:**

*   **Absolute Velocity ($V$):** The velocity of the fluid as observed by a stationary observer.
*   **Relative Velocity ($W$):** The velocity of the fluid as observed by an observer moving with the rotor blade.
*   **Blade Velocity ($U$):** The tangential velocity of the rotor at a given radius.

**Relationships:**

The fundamental relationship between these velocities is given by:
$V = W + U$ (vector addition)

This vector equation can be resolved into tangential and radial components.

**Types of Flow:**

*   **Radial Flow Turbomachines:** Fluid enters and leaves the rotor predominantly in a radial direction. Examples include Francis turbines and centrifugal pumps.
    *   **Inlet:** $V_{f1}$ (radial), $V_{\theta1}$ (tangential), $U_1$ (tangential)
    *   **Outlet:** $V_{f2}$ (radial), $V_{\theta2}$ (tangential), $U_2$ (tangential)

*   **Axial Flow Turbomachines:** Fluid flows predominantly in an axial direction through the rotor. Examples include Kaplan turbines and axial flow compressors/fans.
    *   **Inlet:** $V_{f1}$ (axial), $V_{\theta1}$ (tangential), $U_1$ (tangential)
    *   **Outlet:** $V_{f2}$ (axial), $V_{\theta2}$ (tangential), $U_2$ (tangential)

**Analysis of Velocity Triangles:**

By analyzing the velocity triangles, we can determine:

*   **Blade angles:** The angles at which the fluid enters and leaves the rotor.
*   **Tangential velocity components:** $v_{\theta1}$ and $v_{\theta2}$, which are critical for Euler's equation.
*   **Energy transfer:** As derived from Euler's equation.
*   **Forces on blades:** By applying Newton's laws to the momentum changes.

**Example (Radial Flow Pump - Centrifugal):**
*   **Inlet:** Fluid enters radially (assume $V_{\theta1} \approx 0$). $V_{f1}$ is the radial inlet velocity. $U_1$ is the tangential velocity at the impeller eye.
*   **Outlet:** Fluid leaves the impeller eye at the outer diameter. $V_{f2}$ is the radial outlet velocity. $U_2$ is the tangential velocity at the impeller outer diameter. $V_{\theta2}$ is the tangential component of the absolute velocity at the outlet. The relative velocity $W_2$ is the velocity of the fluid relative to the blade tip.

**Practice Question:**
A centrifugal pump impeller has an inlet eye diameter of 100 mm and an outlet diameter of 300 mm. It rotates at 1500 rpm. If the fluid enters the impeller eye radially with an absolute velocity of 5 m/s and leaves at the outer diameter with a radial velocity component of 3 m/s and a tangential velocity component of 10 m/s, calculate the work done per unit mass of fluid.

**Answer:**
Given:
*   $d_1 = 100$ mm = 0.1 m, $r_1 = 0.05$ m
*   $d_2 = 300$ mm = 0.3 m, $r_2 = 0.15$ m
*   $N = 1500$ rpm
*   $V_{f1} = 0$ (radial inlet means $V_{\theta1} = 0$)
*   $V_{f2} = 3$ m/s
*   $V_{\theta2} = 10$ m/s

Calculate rotor speeds:
*   $\omega = \frac{2\pi N}{60} = \frac{2\pi \times 1500}{60} = 50\pi$ rad/s
*   $U_1 = \omega r_1 = 50\pi \times 0.05 = 2.5\pi \approx 7.85$ m/s
*   $U_2 = \omega r_2 = 50\pi \times 0.15 = 7.5\pi \approx 23.56$ m/s

Work done per unit mass ($W_{shaft}$):
*   $W_{shaft} = u_2 v_{\theta2} - u_1 v_{\theta1}$
*   Since $v_{\theta1} = 0$ for radial entry:
*   $W_{shaft} = U_2 V_{\theta2} = 23.56 \times 10 = 235.6$ J/kg

**Reference:**
*   Dixon, S.I. (1999) - Chapter 3: Velocity Diagrams
*   Venkanna, B.K. (2009) - Chapter 3: Velocity Triangles

---

## 4. Efficiency of Turbomachines

**Definition:** Efficiency is a measure of how effectively a turbomachine converts input energy to output energy or vice-versa.

**Types of Efficiencies:**

*   **Hydraulic/Isentropic Efficiency ($\eta_h$ or $\eta_s$):**
    *   **For Turbines:** Ratio of actual work output to the ideal work output (based on isentropic expansion).
        $\eta_h = \frac{\text{Actual Work Output}}{\text{Ideal Work Output}} = \frac{W_{actual}}{W_{ideal}}$
    *   **For Pumps/Compressors:** Ratio of ideal work input (based on isentropic compression) to the actual work input.
        $\eta_h = \frac{\text{Ideal Work Input}}{\text{Actual Work Input}} = \frac{W_{ideal}}{W_{actual}}$
    *   **Key Concept:** This accounts for fluid friction and other irreversibilities within the flow path.

*   **Mechanical Efficiency ($\eta_m$):**
    *   Ratio of shaft power output to the power delivered to the shaft by the fluid.
        $\eta_m = \frac{\text{Shaft Power Output}}{\text{Power Delivered to Shaft}}$
    *   **Key Concept:** This accounts for losses in bearings, seals, and windage (friction from rotating parts in the surrounding air).

*   **Volumetric Efficiency ($\eta_v$):**
    *   **For Pumps/Compressors:** Ratio of the actual volume flow rate to the swept volume (theoretical displacement).
        $\eta_v = \frac{\text{Actual Flow Rate}}{\text{Swept Volume Flow Rate}}$
    *   **Key Concept:** Accounts for leakage and internal recirculation of the fluid.

*   **Overall Efficiency ($\eta_o$):**
    *   The product of the component efficiencies.
    *   **For Turbines:** $\eta_o = \eta_h \times \eta_m$
    *   **For Pumps/Compressors:** $\eta_o = \eta_h \times \eta_m \times \eta_v$ (or simply $\eta_h$ if mechanical and volumetric losses are implicitly included in the definition of actual work).
    *   **Key Concept:** Represents the overall performance of the machine.

**Relationship with Energy Transfer:**

*   **Turbines:** The hydraulic efficiency relates the actual work output (which is less than the ideal work due to losses) to the ideal work.
*   **Pumps/Compressors:** The hydraulic efficiency relates the actual work input (which is more than the ideal work due to losses) to the ideal work.

**Calculating Efficiencies from Velocity Triangles:**

*   **Work Done per Unit Mass ($W_{shaft}$):** From Euler's equation ($W_{shaft} = U_2 V_{\theta2} - U_1 V_{\theta1}$).
*   **Ideal Work (Turbines):** Based on isentropic enthalpy drop (or temperature drop for gases). For incompressible fluids, it's related to pressure head.
*   **Ideal Work (Pumps/Compressors):** Based on isentropic enthalpy rise.

**CO1 Alignment:** This section directly addresses CO1 by explaining how to find efficiencies using fundamental principles of fluid mechanics (velocity triangles, Euler's equation) and thermodynamics (isentropic processes).

**Example:**
A hydraulic turbine produces 1000 kW of shaft power. The ideal power that could be extracted from the water flow is 1200 kW. The mechanical losses are estimated to be 50 kW. Calculate the hydraulic and overall efficiencies.

**Answer:**
*   Actual Work Output ($W_{actual}$) = 1000 kW
*   Ideal Work Output ($W_{ideal}$) = 1200 kW
*   Mechanical Loss = 50 kW

Hydraulic Efficiency ($\eta_h$):
*   $\eta_h = \frac{W_{actual}}{W_{ideal}} = \frac{1000}{1200} = 0.8333$ or 83.33%

Mechanical Efficiency ($\eta_m$):
*   Power Delivered to Shaft = Shaft Power Output + Mechanical Losses
*   Power Delivered to Shaft = 1000 kW + 50 kW = 1050 kW
*   $\eta_m = \frac{\text{Shaft Power Output}}{\text{Power Delivered to Shaft}} = \frac{1000}{1050} = 0.9524$ or 95.24%

Overall Efficiency ($\eta_o$):
*   $\eta_o = \eta_h \times \eta_m = 0.8333 \times 0.9524 = 0.7936$ or 79.36%

**Reference:**
*   Dixon, S.I. (1999) - Chapter 4: Efficiency and Performance
*   Venkanna, B.K. (2009) - Chapter 4: Efficiency of Turbomachines

---

## 5. Losses in Turbomachines

Understanding losses is crucial for improving efficiency. Losses can be categorized as follows:

**Types of Losses:**

1.  **Hydraulic Losses:**
    *   **Friction Losses:** Due to viscosity of the fluid flowing over the blade surfaces and through the passages. Proportional to the square of the velocity.
    *   **Incidence Losses:** Occur when the fluid enters the rotor passage at an angle different from the blade angle, causing flow separation and turbulence.
    *   **Diffusion Losses:** Occur in diverging passages (diffuser sections) where the flow may decelerate too rapidly, leading to flow separation and turbulence.
    *   **Recirculation Losses:** Internal leakage of fluid from high-pressure regions to low-pressure regions (e.g., around seals).

2.  **Mechanical Losses:**
    *   **Bearing Friction:** Friction in bearings supporting the rotor.
    *   **Seal Friction:** Friction in seals that prevent leakage between stationary and rotating parts.
    *   **Windage Losses:** Friction due to the rotation of the rotor in the surrounding fluid (especially air in compressors and gas turbines).

3.  **Leakage Losses:**
    *   Fluid leaking past seals, tip clearances, or through relief valves.

4.  **Volumetric Losses:**
    *   Primarily in positive displacement machines, where the actual delivered volume is less than the theoretical swept volume due to internal leakage.

**Impact of Losses on Performance:**

*   Reduce the actual work output of turbines.
*   Increase the actual work input required for pumps and compressors.
*   Lower the overall efficiency.

**Reference:**
*   Yahya, S.H. (1996) - Chapter 5: Losses in Turbomachines
*   Gambini, M., Vellini, M. (2021) - Chapter 6: Aerodynamic Losses

---

## 6. Specific Speed and Dimensional Analysis

**Concept:** Specific speed is a dimensionless parameter that characterizes the geometric shape and performance of a turbomachine. It is used for comparing and selecting machines of similar design, irrespective of their size.

**Dimensional Analysis:** A technique used to derive fundamental relationships between physical quantities. Buckingham's Pi theorem is often used.

**Derivation of Specific Speed:**

Specific speed is derived by considering the conditions under which different types of turbomachines operate most efficiently.

*   **For Turbines:**
    $N_s = \frac{N \sqrt{P}}{\rho^{1/2} H^{5/4}}$
    Where:
    *   $N$ = Rotational speed (rpm)
    *   $P$ = Power output (Watts)
    *   $\rho$ = Fluid density (kg/m³)
    *   $H$ = Net head (m)

*   **For Pumps/Centrifugal Compressors:**
    $N_s = \frac{N \sqrt{Q}}{H^{3/4}}$
    Where:
    *   $N$ = Rotational speed (rpm)
    *   $Q$ = Flow rate (m³/s)
    *   $H$ = Head developed (m)

*   **For Axial Flow Pumps/Fans/Turbines:**
    $N_s = \frac{N \sqrt{Q}}{H^{3/4}}$ (same formula as centrifugal, but the operating regime and typical values of $N_s$ are different)

**Significance of Specific Speed:**

*   **Machine Type Selection:** Different ranges of specific speed are characteristic of different types of turbomachines.
    *   Low specific speed ($\approx$ 10-50): Radial flow (Pelton turbines, centrifugal pumps)
    *   Medium specific speed ($\approx$ 50-200): Mixed flow (Francis turbines)
    *   High specific speed ($\approx$ 200-1000+): Axial flow (Kaplan turbines, axial flow fans/compressors)
*   **Geometric Similarity:** Machines with the same specific speed have similar geometric proportions.

**CO3 & CO4 Alignment:** Specific speed is a crucial tool for selecting appropriate turbomachines for specific applications. By knowing the required flow rate, head/power, and allowable speed, a suitable specific speed can be calculated, guiding the selection of the machine type.

**Example:**
A pump is required to deliver 0.1 m³/s of water against a head of 20 m at a speed of 1200 rpm. Calculate its specific speed and suggest the likely type of pump.

**Answer:**
Given:
*   $N = 1200$ rpm
*   $Q = 0.1$ m³/s
*   $H = 20$ m
*   $\rho$ (water) $\approx 1000$ kg/m³

Using the pump specific speed formula:
$N_s = \frac{N \sqrt{Q}}{H^{3/4}} = \frac{1200 \sqrt{0.1}}{(20)^{3/4}} = \frac{1200 \times 0.3162}{11.89} \approx \frac{379.44}{11.89} \approx 31.9$

A specific speed of approximately 32 is generally characteristic of a **centrifugal pump** operating at the lower end of the specific speed range for centrifugal designs, leaning towards a radial flow characteristic.

**Reference:**
*   Venkanna, B.K. (2009) - Chapter 7: Specific Speed
*   Yahya, S.H. (1996) - Chapter 12: Specific Speed

---

## 7. Performance Characteristics

**Definition:** Performance characteristics (or characteristic curves) are graphical representations of a turbomachine's performance over a range of operating conditions (flow rate, head, speed, power).

**Key Performance Parameters:**

*   **Head (H):** The energy imparted to the fluid per unit weight (or pressure rise).
*   **Flow Rate (Q):** The volume of fluid passing through the machine per unit time.
*   **Shaft Power (P):** The mechanical power delivered to or by the rotor.
*   **Efficiency ($\eta$):** Hydraulic or overall efficiency.

**Types of Characteristic Curves:**

*   **Head-Flow Curve (H-Q):** Shows how the head developed changes with the flow rate at a constant speed.
    *   *Centrifugal Pumps:* Typically shows a rising or drooping characteristic.
    *   *Axial Flow Pumps:* Generally a flatter curve.
*   **Power-Flow Curve (P-Q):** Shows how the shaft power required or produced changes with the flow rate.
*   **Efficiency-Flow Curve ($\eta$-Q):** Shows how the efficiency varies with the flow rate. This curve typically has a peak at a specific flow rate, which is the best efficiency point (BEP).
*   **Speed-Flow Curve:** For turbines, shows how the speed changes with flow rate.

**Effect of Speed on Performance:**

The affinity laws (or pump laws/fan laws) describe how performance changes with speed:

*   **Flow Rate (Q):** $Q \propto N$
*   **Head (H):** $H \propto N^2$
*   **Power (P):** $P \propto N^3$

Where $N$ is the rotational speed.

**CO2 Alignment:** Analyzing velocity triangles allows us to predict how changes in parameters like flow rate, speed, or blade angles will affect the performance (head, power, efficiency), which is key to CO2.

**Example:**
A centrifugal pump operating at 1500 rpm delivers 100 m³/hr of water against a head of 15 m. If the speed is increased to 1800 rpm, what will be the new flow rate and head, assuming the efficiency remains constant?

**Answer:**
Given:
*   $N_1 = 1500$ rpm, $Q_1 = 100$ m³/hr, $H_1 = 15$ m
*   $N_2 = 1800$ rpm

Using the affinity laws:
*   New Flow Rate ($Q_2$):
    $Q_2 = Q_1 \times \frac{N_2}{N_1} = 100 \text{ m³/hr} \times \frac{1800}{1500} = 100 \times 1.2 = 120 \text{ m³/hr}$

*   New Head ($H_2$):
    $H_2 = H_1 \times \left(\frac{N_2}{N_1}\right)^2 = 15 \text{ m} \times \left(\frac{1800}{1500}\right)^2 = 15 \times (1.2)^2 = 15 \times 1.44 = 21.6 \text{ m}$

**Reference:**
*   Venkanna, B.K. (2009) - Chapter 6: Characteristic Curves of Turbomachines
*   Yahya, S.H. (1996) - Chapter 8: Performance Characteristics

---

## 8. Selection of Turbomachines

**CO3 & CO4 Alignment:** This is a direct application of the concepts learned throughout the module.

**Factors for Selection:**

1.  **Application Requirements:**
    *   **Flow Rate (Q):** The volume of fluid to be moved per unit time.
    *   **Head (H) or Pressure Rise ($\Delta p$):** The energy to be imparted to the fluid.
    *   **Fluid Properties:** Density, viscosity, temperature, presence of solids, corrosiveness.
    *   **Power Source:** Availability of electric motor, engine, etc., and its characteristics.
    *   **Operating Environment:** Temperature, humidity, space constraints.

2.  **Machine Type and Specific Speed:**
    *   Determine the specific speed range based on the required $N$, $Q$, and $H$.
    *   Match the specific speed to the appropriate type of turbomachine (radial, mixed, axial).

3.  **Performance Characteristics:**
    *   Select a machine whose H-Q curve matches the system resistance curve for stable operation.
    *   Ensure the Best Efficiency Point (BEP) of the machine aligns with the typical operating point.

4.  **Efficiency:**
    *   Choose a machine with high efficiency at the intended operating point to minimize energy consumption.

5.  **Cost:**
    *   Initial purchase cost.
    *   Operating and maintenance costs over the machine's lifetime.

6.  **Reliability and Maintenance:**
    *   Consider the manufacturer's reputation and the ease of maintenance.

**Example Scenarios:**

*   **Low Flow Rate, High Head:** Pelton turbine (for power generation) or centrifugal pump with a small impeller diameter and high speed (for pumping).
*   **High Flow Rate, Low Head:** Kaplan turbine (for power generation) or axial flow pump/fan (for pumping/ventilation).
*   **Intermediate Flow Rate, Medium Head:** Francis turbine (for power generation) or a mixed-flow pump.

**Reference:**
*   Yahya, S.H. (1996) - Chapter 13: Selection of Turbomachines
*   Gambini, M., Vellini, M. (2021) - Chapter 8: Turbomachinery Selection

---

## Important Points to Remember

*   **Euler's Turbomachine Equation** is the cornerstone for understanding energy transfer.
*   **Velocity triangles** are essential for visualizing and calculating velocity components needed for Euler's equation.
*   **Specific speed** is a crucial dimensionless parameter for classifying and selecting turbomachines.
*   **Efficiency** is a key metric for evaluating the performance and economic viability of turbomachines.
*   **Losses** directly impact efficiency and must be minimized.
*   **Affinity laws** help predict performance changes with speed variations.
*   **Characteristic curves** provide a comprehensive view of a machine's performance across different operating conditions.

---

## Practice Questions

1.  **Work Done:** A centrifugal pump impeller has an inlet eye diameter of 80 mm and an outlet diameter of 250 mm. It rotates at 1440 rpm. The fluid enters the impeller eye radially. At the outlet, the tangential component of the absolute velocity is 12 m/s. Calculate the work done per unit mass of water by the impeller. (CO1)
2.  **Efficiency:** A turbine receives 50 m³/s of water under a head of 100 m. The turbine generates 45 MW of shaft power. If the hydraulic efficiency is 90%, calculate the mechanical efficiency. (CO1)
3.  **Velocity Triangle Analysis:** For an axial flow turbine stage, the rotor blade speed is 150 m/s. The absolute velocity of the steam entering the rotor has a tangential component of 100 m/s and a radial component of 0 m/s. The steam leaves the rotor with an absolute velocity whose tangential component is 20 m/s and radial component is 50 m/s. Determine the work done per unit mass of steam. (CO2)
4.  **Specific Speed:** A pump delivers 2000 liters per minute of oil against a head of 30 meters at a speed of 1000 rpm. Calculate the specific speed of the pump. If the density of oil is 900 kg/m³, does this value suggest a radial or axial flow pump? (CO3)
5.  **Affinity Laws:** A fan operating at 800 rpm delivers 2 m³/s of air and requires 1 kW of power. If the speed is increased to 1000 rpm, what will be the new flow rate and power requirement, assuming similar efficiency? (CO2)

---

## Answers to Practice Questions

1.  **Work Done:**
    *   $N = 1440$ rpm, $\omega = \frac{2\pi \times 1440}{60} = 48\pi$ rad/s
    *   $r_1 = 40$ mm = 0.04 m, $r_2 = 125$ mm = 0.125 m
    *   $U_1 = \omega r_1 = 48\pi \times 0.04 = 1.92\pi \approx 6.03$ m/s
    *   $U_2 = \omega r_2 = 48\pi \times 0.125 = 6\pi \approx 18.85$ m/s
    *   Fluid enters radially, so $V_{\theta1} = 0$.
    *   $V_{\theta2} = 12$ m/s (given)
    *   $W_{shaft} = U_2 V_{\theta2} - U_1 V_{\theta1} = (18.85 \times 12) - (6.03 \times 0) = 226.2$ J/kg

2.  **Efficiency:**
    *   Ideal Power $= \frac{\text{Actual Power}}{\text{Hydraulic Efficiency}} = \frac{45 \text{ MW}}{0.90} = 50 \text{ MW}$
    *   Power Delivered to Shaft $= \text{Actual Power} + \text{Mechanical Losses}$
    *   Let $P_{mech\_loss}$ be the mechanical loss.
    *   Hydraulic Efficiency $\eta_h = \frac{W_{actual}}{W_{ideal}}$ (This is usually defined for turbine as actual power output / power available from fluid head). If $W_{ideal}$ is the power available from head, then $W_{actual} = 45$ MW. The calculation of mechanical efficiency requires the power delivered *to* the shaft by the fluid, which is the ideal power output from the fluid.
    *   Let's rephrase the question: If the power *available* from the head is 50 MW, and the turbine generates 45 MW shaft power, and mechanical losses are such that the hydraulic efficiency is 90%, what is the mechanical efficiency?
    *   Power delivered to the rotor = $W_{actual} / \eta_h = 45 \text{ MW} / 0.90 = 50 \text{ MW}$ (This implies the hydraulic efficiency is indeed calculated as actual work output / power delivered to rotor).
    *   Let's assume the initial 50 m³/s under 100m head implies ideal power of $50 \text{ m³/s} \times 100 \text{ m} \times 1000 \text{ kg/m³} \times 9.81 \text{ m/s²} \approx 49.05 \text{ MW}$. Let's stick to the given MW values.
    *   If ideal power output from fluid is 50 MW, and shaft power output is 45 MW.
    *   If $\eta_h = 0.90$, and it is defined as $\frac{\text{Actual Work Output}}{\text{Ideal Work Output}}$ (where Ideal Work Output is from the fluid), then Ideal Work Output = 45 MW / 0.90 = 50 MW. This matches the given.
    *   Mechanical efficiency $\eta_m = \frac{\text{Shaft Power Output}}{\text{Power Delivered to Shaft}} = \frac{45 \text{ MW}}{\text{Power Delivered to Shaft}}$
    *   We need the power delivered *to* the shaft. The total power put into the machine by the fluid is the ideal power output from the fluid which is 50 MW. This power is then converted into shaft power by the rotor, with mechanical losses occurring.
    *   Let's use the relationship: $\eta_o = \eta_h \times \eta_m$.
    *   We need the overall efficiency. The problem statement is a bit ambiguous without stating what the 50 MW represents (ideal power from fluid or power delivered to the shaft). Assuming the 50 MW is the power delivered to the shaft by the fluid *before* mechanical losses:
    *   Power Delivered to Shaft = 50 MW
    *   Shaft Power Output = 45 MW
    *   $\eta_m = \frac{45}{50} = 0.90$ or 90%

3.  **Velocity Triangle Analysis:**
    *   $U = 150$ m/s (constant for axial flow)
    *   $V_{\theta1} = 100$ m/s
    *   $V_{\theta2} = 20$ m/s
    *   $W_{shaft} = U (V_{\theta2} - V_{\theta1})$ (For axial flow, U is constant, and the equation simplifies if we consider the relative velocity changes across the blade, but using absolute velocities and rotor speed directly is Euler's formulation. For axial flow, typically $W_{shaft} = U_2 V_{\theta2} - U_1 V_{\theta1}$ where $U_1 = U_2$. We consider the change in tangential momentum due to the rotor.)
    *   Using Euler's equation with absolute velocities:
        $W_{shaft} = U_2 V_{\theta2} - U_1 V_{\theta1}$
        Here $U_1 = U_2 = U = 150$ m/s.
        $W_{shaft} = 150 \times (20 - 100) = 150 \times (-80) = -12000$ J/kg
        Since this is a turbine, work is done *by* the fluid, so the tangential component of absolute velocity decreases. The formula typically uses the change in angular momentum. A more direct way for turbines is to consider the change in whirl velocity across the rotor that imparts energy.
        Let's re-examine Euler's equation: $W = u_2v_{\theta2} - u_1v_{\theta1}$. For a turbine, the fluid velocity whirl is reduced.
        If we consider the velocity relative to the blade, the work done is $W = U (W_{u1} - W_{u2})$ where $W_{u}$ is the whirl component of relative velocity.
        Using absolute velocities and the convention from Dixon: $W_{shaft} = u_2 v_{\theta2} - u_1 v_{\theta1}$.
        With $u_1 = u_2 = 150$ m/s, $v_{\theta1} = 100$ m/s, $v_{\theta2} = 20$ m/s:
        $W_{shaft} = 150 \times 20 - 150 \times 100 = 3000 - 15000 = -12000$ J/kg.
        The negative sign indicates work is done *by* the rotor on the fluid, which is incorrect for a turbine.
        The work done *by* the fluid is $W_{shaft} = U(V_{\theta1} - V_{\theta2})$ if the whirl decreases and is the primary contributor.
        Let's use the standard form from Dixon: $W_{shaft} = u_2v_{\theta2} - u_1v_{\theta1}$. For a turbine, $v_{\theta2}$ is typically less than $v_{\theta1}$.
        If the question implies the absolute tangential velocity *changes* from 100 m/s to 20 m/s, and the rotor speed is 150 m/s, then the work done is indeed $150 \times (100 - 20) = 150 \times 80 = 12000$ J/kg. This is the work done *on* the fluid if $v_{\theta1} > v_{\theta2}$.
        Correct application for turbine: Work done by fluid is $U_1 V_{\theta1} - U_2 V_{\theta2}$ if we consider the torque.
        If $U$ is constant, $W_{shaft} = U (V_{\theta1} - V_{\theta2})$.
        $W_{shaft} = 150 \times (100 - 20) = 150 \times 80 = 12000$ J/kg.
        (Note: The sign convention in Euler's equation can be tricky. $W_{shaft} = u_2 v_{\theta2} - u_1 v_{\theta1}$ gives work done *on* the fluid. For work done *by* the fluid, it's the negative of this if $u$ is consistent).
        $W_{by\,fluid} = -(u_2 v_{\theta2} - u_1 v_{\theta1}) = u_1 v_{\theta1} - u_2 v_{\theta2}$.
        $W_{by\,fluid} = 150 \times 100 - 150 \times 20 = 15000 - 3000 = 12000$ J/kg.

4.  **Specific Speed:**
    *   $Q = 2000$ liters/min $= \frac{2000}{60 \times 1000}$ m³/s $= 0.0333$ m³/s
    *   $N = 1000$ rpm
    *   $H = 30$ m
    *   $N_s = \frac{N \sqrt{Q}}{H^{3/4}} = \frac{1000 \sqrt{0.0333}}{(30)^{3/4}} = \frac{1000 \times 0.1826}{13.00} \approx 14.05$
    *   A specific speed of approximately 14.05 is very low, characteristic of a **radial flow pump** (e.g., a centrifugal pump with a compact, high-head design).

5.  **Affinity Laws:**
    *   $N_1 = 800$ rpm, $Q_1 = 2$ m³/s, $P_1 = 1$ kW
    *   $N_2 = 1000$ rpm
    *   New Flow Rate ($Q_2$):
        $Q_2 = Q_1 \times \frac{N_2}{N_1} = 2 \text{ m³/s} \times \frac{1000}{800} = 2 \times 1.25 = 2.5 \text{ m³/s}$
    *   New Power Requirement ($P_2$):
        $P_2 = P_1 \times \left(\frac{N_2}{N_1}\right)^3 = 1 \text{ kW} \times \left(\frac{1000}{800}\right)^3 = 1 \times (1.25)^3 = 1 \times 1.953 = 1.953 \text{ kW}$

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
