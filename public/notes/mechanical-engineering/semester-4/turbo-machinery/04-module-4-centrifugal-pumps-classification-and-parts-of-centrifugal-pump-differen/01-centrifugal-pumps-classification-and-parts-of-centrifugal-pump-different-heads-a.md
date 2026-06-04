---
title: "Centrifugal Pumps: Classification and parts of centrifugal pump, different heads and efficiencies of centrifugal pump, Theoretical head – capacity relationship, Minimum speed for starting the flow, Maximum suction lift, Net positive suction head, Cavitation, Need for priming, Pumps in series and parallel."
subject: "TURBO MACHINERY"
module: "Module 4: Centrifugal Pumps: Classification and parts of centrifugal pump, different heads and efficiencies of centrifugal pump, Theoretical head – capacity relationship, Minimum speed for starting the flow, Maximum suction lift, Net positive suction head, Cavitation, Need for priming, Pumps in series and parallel."
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804463017"
status: "completed"
scrapedAt: "2026-05-20T17:57:23.327Z"
---
# TURBO MACHINERY - Module 4: Centrifugal Pumps

## 1. Introduction to Centrifugal Pumps

Centrifugal pumps are a type of dynamic pump that uses a rotating impeller to increase the pressure of a fluid. They are widely used in various applications, from domestic water supply to industrial processes.

**Key Concept:** Centrifugal pumps operate on the principle of converting rotational kinetic energy into hydrodynamic energy.

### 1.1. Classification of Centrifugal Pumps

Centrifugal pumps can be classified based on several criteria:

*   **Based on Casing Design:**
    *   **Volute Casing:** The casing is designed with a gradually increasing cross-sectional area around the impeller. This converts the high-velocity fluid discharged from the impeller into pressure energy.
        *   **Advantages:** Simple construction, good efficiency.
        *   **Disadvantages:** Larger in size compared to diffuser casings.
        *   *Refer to Dixon, S.I. (1999), Chapter 7 for detailed discussion on casing designs.*
    *   **Diffuser Casing:** A ring of stationary guide vanes (diffusers) are placed around the impeller. These vanes create expanding passages, which slow down the fluid and convert kinetic energy into pressure energy.
        *   **Advantages:** More efficient at specific operating points, more compact.
        *   **Disadvantages:** More complex construction, sensitive to off-design operation.
        *   *Refer to Venkanna, B.K. (2009), Chapter 8 for a comparison of volute and diffuser casings.*

*   **Based on Impeller Type:**
    *   **Open Impeller:** The vanes are attached to the hub but are not enclosed by shrouds.
        *   **Applications:** Pumping fluids with solids or high viscosity.
        *   **Advantages:** Less prone to clogging.
        *   **Disadvantages:** Lower efficiency due to leakage.
    *   **Semi-Open Impeller:** Vanes are attached to the hub on one side and enclosed by a shroud on the other.
        *   **Applications:** Similar to open impellers but with better efficiency.
    *   **Closed Impeller:** Vanes are enclosed between two shrouds.
        *   **Applications:** Pumping clean liquids, most common type.
        *   **Advantages:** Higher efficiency due to reduced leakage.
        *   **Disadvantages:** Prone to clogging with solids.

*   **Based on Suction Type:**
    *   **Single-Suction Pump:** Fluid enters the impeller from one side only.
    *   **Double-Suction Pump:** Fluid enters the impeller from both sides, reducing the axial thrust on the impeller.

*   **Based on Number of Stages:**
    *   **Single-Stage Pump:** Has only one impeller. Used for lower head applications.
    *   **Multi-Stage Pump:** Has two or more impellers mounted on the same shaft. Used for high head applications.

*   **Based on Casing Split:**
    *   **Radially Split Casing:** The casing is split along a plane perpendicular to the shaft.
    *   **Axially Split Casing (Horizontal Split):** The casing is split along a plane containing the shaft. Easier for maintenance.

### 1.2. Parts of a Centrifugal Pump

Understanding the components of a centrifugal pump is crucial for comprehending its operation.

1.  **Impeller:** The rotating component with vanes that imparts energy to the fluid.
    *   **Key Features:** Vane curvature (backward-curved vanes are most common for efficiency and stability), eye diameter, shroud.
    *   *Refer to Yahya, S.H. (1996), Chapter 5 for detailed impeller design considerations.*
2.  **Casing:** The stationary housing that encloses the impeller. It collects the fluid discharged from the impeller and converts kinetic energy into pressure energy.
    *   **Types:** Volute, Diffuser (as discussed above).
3.  **Shaft:** Transmits the rotational power from the motor to the impeller.
4.  **Bearings:** Support the shaft and allow it to rotate smoothly.
5.  **Stuffing Box/Mechanical Seal:** Prevents leakage of fluid along the shaft where it exits the casing.
    *   **Stuffing Box:** Uses packing rings.
    *   **Mechanical Seal:** Uses precisely lapped faces to create a leak-tight seal.
6.  **Shaft Sleeve:** Protects the shaft from wear at the sealing area.
7.  **Back Plates/Shrouds:** Enclose the impeller vanes (in closed impellers) to prevent leakage from the discharge side to the suction side.
8.  **Wearing Rings:** Replaceable rings fitted on the casing and impeller to maintain close clearance and reduce wear.
9.  **Coupling:** Connects the pump shaft to the driver (e.g., electric motor).

## 2. Heads and Efficiencies of Centrifugal Pumps

Understanding different heads and efficiencies is vital for analyzing pump performance.

### 2.1. Different Heads

*   **Static Head ($H_s$):** The total vertical distance between the free surface of the suction reservoir and the free surface of the discharge reservoir.
    *   $H_s = H_{discharge} - H_{suction}$ (where $H$ is the vertical elevation of the water surface).
*   **Suction Head ($h_s$):** The vertical distance between the pump centerline and the free surface of the suction reservoir.
    *   **Positive Suction Head:** Free surface of the suction reservoir is *above* the pump centerline.
    *   **Negative Suction Head (Suction Lift):** Free surface of the suction reservoir is *below* the pump centerline.
*   **Discharge Head ($h_d$):** The vertical distance between the pump centerline and the free surface of the discharge reservoir.
*   **Manometric Head ($H_m$):** The total head developed by the pump, measured by pressure gauges located at the suction and discharge nozzles. It represents the difference in pressure energy per unit weight of fluid, including velocity and elevation changes between the suction and discharge.
    *   $H_m = \frac{P_d - P_s}{\rho g} + \frac{V_d^2 - V_s^2}{2g} + (z_d - z_s)$
    *   Where:
        *   $P_d$: Discharge pressure
        *   $P_s$: Suction pressure
        *   $\rho$: Density of the fluid
        *   $g$: Acceleration due to gravity
        *   $V_d$: Velocity of fluid at discharge nozzle
        *   $V_s$: Velocity of fluid at suction nozzle
        *   $z_d$: Elevation of discharge nozzle
        *   $z_s$: Elevation of suction nozzle
    *   *Note: Manometric head is what the pump actually *delivers*.*
*   **Total Dynamic Head (TDH) or Total Head ($H$):** The total equivalent height to which the pump must lift the fluid. It includes static head, friction losses in pipes, and velocity head.
    *   $H = H_s + h_f + \frac{V_d^2 - V_s^2}{2g}$
    *   Where:
        *   $H_s$: Static head
        *   $h_f$: Total friction losses in suction and discharge pipes.
    *   *Important: The pump must generate a head greater than the TDH to overcome system resistance and circulate the fluid.*
*   **Head Loss in Suction Pipe ($h_{fs}$):** Friction losses in the suction pipe.
*   **Head Loss in Discharge Pipe ($h_{fd}$):** Friction losses in the discharge pipe.
*   **Velocity Head ($h_v$):** $\frac{V^2}{2g}$, where $V$ is the velocity of the fluid.

### 2.2. Efficiencies

Pump efficiency is a measure of how effectively the pump converts input power into useful fluid power.

*   **Hydraulic Efficiency ($\eta_h$):** The ratio of the power imparted to the fluid by the impeller to the power supplied by the shaft to the impeller. It accounts for losses within the impeller and casing due to friction, turbulence, and recirculation.
    *   $\eta_h = \frac{\text{Hydraulic Power}}{\text{Shaft Power Delivered to Impeller}}$
*   **Mechanical Efficiency ($\eta_m$):** The ratio of the power delivered by the shaft to the impeller to the power supplied to the pump shaft (input power from the motor). It accounts for losses in bearings, stuffing box/mechanical seal, and disc friction (friction between the rotating impeller and the fluid in the casing).
    *   $\eta_m = \frac{\text{Shaft Power Delivered to Impeller}}{\text{Brake Horsepower (BHP) or Shaft Input Power}}$
*   **Overall Efficiency ($\eta_o$ or $\eta_{overall}$):** The ratio of the useful hydraulic power delivered to the fluid to the power supplied to the pump shaft (input power from the motor). It is the product of hydraulic and mechanical efficiencies.
    *   $\eta_o = \frac{\text{Water Horsepower (WHP)}}{\text{Brake Horsepower (BHP)}}$
    *   $\eta_o = \eta_h \times \eta_m$
    *   Where:
        *   **Water Horsepower (WHP):** Useful power delivered to the fluid.
            *   $WHP = \frac{\rho g Q H_m}{1000 \times 75}$ (in HP, for metric units)
            *   $WHP = \frac{Q H_m}{1050}$ (in HP, for US customary units)
        *   **Brake Horsepower (BHP):** Power delivered to the pump shaft.
            *   $BHP = \frac{\rho g Q H_m}{\eta_o \times 1000 \times 75}$ (in HP, for metric units)
            *   $BHP = \frac{Q H_m}{\eta_o \times 1050}$ (in HP, for US customary units)

    *   **Important:** $\eta_o$ is the most commonly referred to efficiency when discussing pump performance.

## 3. Theoretical Head-Capacity Relationship (H-Q Curve)

The theoretical head developed by a centrifugal pump is related to the fluid velocity leaving the impeller.

*   **Euler's Turbine Equation:** For a centrifugal pump (which is an inward radial flow machine in reverse), the theoretical head developed by the impeller is given by:
    *   $H_{theoretical} = \frac{1}{g} (u_2 v_{w2} - u_1 v_{w1})$
    *   Where:
        *   $u_1, u_2$: Tangential velocity of the impeller at the inlet and outlet respectively.
        *   $v_{w1}, v_{w2}$: Whirl velocity of the fluid at the inlet and outlet respectively.
*   **Velocity Triangles:** The velocity triangles at the impeller inlet and outlet are crucial for determining the whirl velocities.
    *   **Inlet Velocity Triangle:**
        *   $v_{f1}$: Absolute velocity of fluid entering the impeller.
        *   $u_1$: Peripheral velocity of the impeller at the inlet.
        *   $v_{u1}$: Component of $v_{f1}$ tangential to the impeller.
        *   $v_{r1}$: Relative velocity of fluid with respect to the impeller at the inlet.
    *   **Outlet Velocity Triangle:**
        *   $v_{f2}$: Absolute velocity of fluid leaving the impeller.
        *   $u_2$: Peripheral velocity of the impeller at the outlet.
        *   $v_{u2}$: Component of $v_{f2}$ tangential to the impeller (whirl velocity).
        *   $v_{r2}$: Relative velocity of fluid with respect to the impeller at the outlet.
*   **Theoretical Head with Backward Curved Vanes:** For backward-curved vanes ($0^\circ < \beta_2 < 90^\circ$), the whirl velocity $v_{w2}$ is positive. For most centrifugal pumps, $v_{w1}$ is zero or negative due to pre-whirl. Assuming $v_{w1}=0$ and purely radial flow at inlet, and neglecting slip, the theoretical head is:
    *   $H_{theoretical} = \frac{u_2 v_{u2}}{g}$
    *   From the outlet velocity triangle, $v_{u2} = u_2 - v_{f2} \cot \beta_2$.
    *   So, $H_{theoretical} = \frac{u_2}{g} (u_2 - v_{f2} \cot \beta_2)$.
    *   Since $v_{f2}$ is proportional to the flow rate $Q$ (capacity), the theoretical head decreases as capacity increases for backward-curved vanes.
    *   $H_{theoretical} \propto (u_2^2 - u_2 v_{f2} \cot \beta_2)$.
*   **Actual Head (Manometric Head):** The actual head developed by the pump ($H_m$) is always less than the theoretical head due to various losses.
    *   $H_m = H_{theoretical} - H_{losses}$
    *   $H_{losses}$ include: hydraulic losses (friction, turbulence, shock losses at vane leading edge), slip (difference between ideal and actual whirl velocity at outlet), disk friction, leakage losses.
*   **Head-Capacity Curve (H-Q Curve):** A plot of pump head against flow rate.
    *   **Theoretical H-Q Curve (for backward-curved vanes):** Shows a decreasing head with increasing capacity.
    *   **Actual H-Q Curve:** Shows a gradual decrease in head as capacity increases. The shape of the curve depends on impeller design, vane angle, and casing type.
    *   *Refer to Gambini & Vellini (2021), Chapter 4 for detailed analysis of H-Q characteristics.*

## 4. Minimum Speed for Starting the Flow

A centrifugal pump requires a minimum speed to start circulating the fluid. This is because the pressure generated by the impeller must overcome the static head and friction losses to initiate flow.

*   **Condition for Flow Initiation:** The head developed by the pump must be equal to or greater than the total head required by the system at zero flow rate (which is essentially the static head or the discharge head if the suction is below the pump).
*   **Minimum Speed:** The speed at which the head developed by the pump equals the static head plus initial friction losses.
    *   For a backward-curved vane impeller, the head developed is proportional to the square of the impeller speed ($H \propto N^2$).
    *   Let $H_0$ be the head developed at zero flow (shut-off head), which is approximately $H_0 \approx \frac{u_2^2}{2g}$ for backward curved vanes.
    *   The minimum speed $N_{min}$ can be estimated when the developed head is just enough to overcome the static head ($H_s$).
    *   $H_{min\_speed} = k \cdot N_{min}^2 = H_s$ (where $k$ is a proportionality constant).
    *   If we consider the shut-off head $H_{shutoff}$ at speed $N_{shutoff}$, then $H_{shutoff} = k \cdot N_{shutoff}^2$.
    *   $k = \frac{H_{shutoff}}{N_{shutoff}^2}$
    *   $N_{min} = \sqrt{\frac{H_s}{k}} = N_{shutoff} \sqrt{\frac{H_s}{H_{shutoff}}}$
*   **Important:** If the pump is not submerged and has a negative suction head (suction lift), the minimum speed must also be sufficient to create enough suction head to lift the fluid to the impeller.

## 5. Maximum Suction Lift

Suction lift is the ability of a pump to draw fluid from a level below its impeller. The maximum suction lift is limited by atmospheric pressure and the vapor pressure of the liquid.

*   **Suction Lift ($h_{SL}$):** The vertical distance from the pump centerline to the free surface of the liquid in the suction reservoir, measured downwards. This is the case when the liquid level is below the pump.
*   **Suction Head ($h_s$):** The vertical distance from the pump centerline to the free surface of the liquid in the suction reservoir, measured upwards. This is the case when the liquid level is above the pump.
*   **Atmospheric Pressure:** The pressure exerted by the atmosphere on the surface of the liquid in the suction reservoir.
*   **Vapor Pressure ($P_v$):** The pressure at which a liquid boils at a given temperature. If the pressure in the suction pipe drops below the vapor pressure, the liquid will vaporize, forming bubbles (cavitation).
*   **Maximum Static Suction Lift:** The maximum theoretical lift possible when the pump is operating at zero flow and the suction pipe is filled with liquid, neglecting friction and velocity head.
    *   $H_{max\_static} = \frac{P_{atm}}{\rho g} - h_v$
    *   Where:
        *   $P_{atm}$: Atmospheric pressure.
        *   $h_v = \frac{P_v}{\rho g}$: Vapor head.
    *   This is approximately 10.3 meters of water at standard atmospheric pressure (1 atm = 101.325 kPa).
*   **Actual Maximum Suction Lift:** In practice, the maximum suction lift is significantly less than the theoretical maximum due to:
    *   **Friction losses in the suction pipe.**
    *   **Velocity head in the suction pipe.**
    *   **Head developed by the impeller at zero flow (shut-off head).**
    *   **Pressure losses in the suction strainer and fittings.**
    *   **$H_{max\_actual} = \frac{P_{atm}}{\rho g} - h_v - h_{fs} - h_{vs} - H_{shutoff}$** (where $h_{fs}$ and $h_{vs}$ are friction and velocity head losses in the suction pipe).
*   **Important:** For the pump to operate successfully, the pressure at the impeller eye must remain above the vapor pressure of the liquid.

## 6. Net Positive Suction Head (NPSH)

NPSH is a critical parameter that determines the susceptibility of a pump to cavitation. It represents the absolute pressure at the pump suction nozzle, expressed in terms of head of liquid.

*   **Available NPSH ($NPSH_a$):** The absolute pressure head at the suction nozzle of the pump, above the vapor pressure of the liquid. It is a characteristic of the installation.
    *   $NPSH_a = \frac{P_s - P_v}{\rho g} - h_{fs} - \frac{V_s^2}{2g}$
    *   Where:
        *   $P_s$: Absolute pressure at the free surface of the suction reservoir.
        *   $P_v$: Vapor pressure of the liquid at the pumping temperature.
        *   $h_{fs}$: Friction losses in the suction pipe.
        *   $\frac{V_s^2}{2g}$: Velocity head in the suction pipe.
    *   If the suction reservoir is open to the atmosphere, $P_s = P_{atm}$.
    *   If the suction reservoir is pressurized, $P_s$ will be higher.
    *   If the liquid level is below the pump (suction lift), $P_s$ will be lower, and $NPSH_a$ will be reduced.
*   **Required NPSH ($NPSH_r$):** The minimum absolute pressure head required at the pump suction nozzle for the pump to operate without cavitation. It is a characteristic of the pump itself and is determined by the pump's design and operating speed. This is usually provided by the pump manufacturer as a curve.
    *   $NPSH_r$ is the pressure drop required within the pump from the suction flange to the point of lowest pressure within the impeller eye.
*   **Condition for Cavitation-Free Operation:** For successful pump operation, the available NPSH must always be greater than the required NPSH.
    *   $NPSH_a > NPSH_r$
*   **Margin:** A safety margin is usually added to ensure reliable operation, i.e., $NPSH_a \ge NPSH_r + \text{Margin}$.
*   *Refer to Venkanna, B.K. (2009), Chapter 9 for a thorough explanation of NPSH and cavitation.*
*   *Refer to Dick, E. (2022), Chapter 6 for advanced NPSH calculations and influencing factors.*

## 7. Cavitation

Cavitation is a phenomenon that occurs when the pressure in a fluid drops below its vapor pressure, causing the formation of vapor bubbles. When these bubbles collapse in regions of higher pressure, they can damage the pump components.

*   **Mechanism of Cavitation:**
    1.  **Low Pressure:** As the fluid enters the impeller eye, its velocity increases, leading to a decrease in pressure (Bernoulli's principle). If this pressure drops below the vapor pressure of the liquid, vapor bubbles form.
    2.  **Bubble Collapse:** These vapor bubbles are swept along with the fluid into regions of higher pressure (e.g., further into the impeller or casing). The higher ambient pressure causes the bubbles to collapse violently.
    3.  **Damage:** The implosion of these bubbles creates shock waves and micro-jets of liquid that strike the pump surfaces, causing pitting, erosion, and fatigue failure of impeller vanes and casing walls.
*   **Symptoms of Cavitation:**
    *   **Noise:** A rattling or grinding sound, like gravel passing through the pump.
    *   **Vibration:** Increased vibration levels.
    *   **Reduced Performance:** Drop in head and flow rate.
    *   **Efficiency Loss:** Significant decrease in pump efficiency.
    *   **Physical Damage:** Pitting and erosion of impeller vanes and casing.
*   **Causes of Cavitation:**
    *   **Low NPSH_a:** Insufficient available NPSH compared to the required NPSH.
    *   **High Pumping Temperature:** Increases the vapor pressure of the liquid.
    *   **High Suction Lift or Low Suction Head:** Reduces the absolute pressure at the suction.
    *   **Excessive Flow Rate:** Can lead to higher velocities and lower pressures.
    *   **Clogged Suction Strainer:** Increases friction losses in the suction line.
    *   **Excessive Speed:** Increases velocities and fluid accelerations.
*   **Preventing Cavitation:**
    *   **Ensure NPSH_a > NPSH_r:** Increase NPSH_a by raising the liquid level, reducing suction pipe friction, lowering pumping temperature, or reducing pump speed.
    *   **Use Pumps with Low NPSH_r:** Select pumps designed for low NPSH requirements.
    *   **Proper Suction Piping Design:** Minimize friction losses and avoid restrictions.
    *   **Operate within Design Limits:** Avoid operating the pump at excessively high speeds or flow rates that lead to cavitation.
    *   **Install a Suction Booster Pump:** For very demanding applications.

## 8. Need for Priming

Priming is the process of filling the pump casing and suction line with the liquid to be pumped *before* starting the pump. Centrifugal pumps cannot pump air effectively.

*   **Why Priming is Necessary:**
    *   **No Air-Handling Capability:** Centrifugal pumps rely on the presence of the liquid to create the pressure difference that moves the fluid. Air, being much less dense and compressible, cannot be effectively compressed and pushed out by the impeller.
    *   **Cavitation:** If a centrifugal pump attempts to pump air, the pressure in the impeller eye will drop significantly, potentially leading to cavitation even with air.
    *   **Loss of Priming:** If the pump loses its prime (e.g., due to leakage in the suction line), it will stop pumping.
*   **Methods of Priming:**
    *   **Manual Priming:** Opening a priming port and filling the casing and suction line with liquid from an external source.
    *   **Foot Valve and Priming Pipe:** A foot valve at the end of the suction pipe prevents the liquid from draining back. A priming pipe connects the discharge side of the pump to the suction side, allowing the pump to recirculate liquid and build up pressure to discharge the air.
    *   **Self-Priming Pumps:** These pumps are designed with a built-in mechanism (e.g., a priming chamber or an auxiliary priming device) that allows them to expel air from the suction line and prime themselves automatically.
    *   **Using a Vacuum Pump:** An external vacuum pump can be used to evacuate air from the suction line and pump casing.
*   **When Priming is Critical:**
    *   When the pump is located above the liquid level (suction lift).
    *   When starting the pump for the first time after installation or maintenance.
    *   When there's a possibility of the suction line emptying.

## 9. Pumps in Series and Parallel

Connecting multiple pumps can modify the overall head-capacity performance of the pumping system.

### 9.1. Pumps in Series

When pumps are connected in series, the discharge of the first pump is connected to the suction of the second pump.

*   **Purpose:** To increase the total head delivered by the system.
*   **Characteristics:**
    *   **Flow Rate:** The flow rate through each pump remains the same.
    *   **Head:** The heads developed by each pump are added together to get the total head.
    *   **System Curve:** The combined pump curve is obtained by adding the heads of individual pumps at the same flow rate.
    *   **Combined H-Q Curve:** $H_{total} = H_1 + H_2$ (at the same Q).
*   **When Used:** For high-head applications where a single pump cannot achieve the required head.
*   **Considerations:**
    *   The pumps should have similar characteristics for optimal performance.
    *   The shut-off head of the first pump must be able to handle the suction head of the second pump.
    *   Intermediate discharge must be able to withstand the pressure from the upstream pump.
*   *Refer to Dixon, S.I. (1999), Chapter 7 for graphical representation of series operation.*

### 9.2. Pumps in Parallel

When pumps are connected in parallel, the suction of both pumps are connected to a common suction header, and their discharges are connected to a common discharge header.

*   **Purpose:** To increase the total flow rate delivered by the system at a given head.
*   **Characteristics:**
    *   **Head:** The head developed by each pump is approximately the same.
    *   **Flow Rate:** The flow rates from each pump are added together at the same head.
    *   **System Curve:** The combined pump curve is obtained by adding the flow rates of individual pumps at the same head.
    *   **Combined H-Q Curve:** $Q_{total} = Q_1 + Q_2$ (at the same H).
*   **When Used:** For high-flow rate applications.
*   **Considerations:**
    *   The pumps should ideally have similar head-capacity characteristics. If they differ significantly, one pump may dominate the operation, or one might operate inefficiently.
    *   Ensure check valves are used on the discharge of each pump to prevent backflow when one pump is shut off.
    *   The system curve should intersect the combined pump curve at a stable operating point. Avoid parallel operation if the individual pump curves have steep shut-off heads, as this can lead to instability.
*   *Refer to Venkanna, B.K. (2009), Chapter 10 for analysis of parallel pump operation.*
*   *Refer to Dick, E. (2022), Chapter 7 for practical aspects of pump configuration.*

---

## Practice Questions and Answers

**Question 1:** Define Manometric Head and explain its significance in pump performance.

**Answer:** Manometric Head ($H_m$) is the total head developed by the pump, measured by pressure gauges at the suction and discharge nozzles. It represents the difference in pressure energy per unit weight of fluid, accounting for velocity and elevation changes between the suction and discharge. It is significant because it represents the actual head that the pump is delivering to the fluid, accounting for internal pump losses that are not part of the shaft input power.

**Question 2:** What is the fundamental difference between Available NPSH ($NPSH_a$) and Required NPSH ($NPSH_r$)?

**Answer:**
*   **$NPSH_a$** is a characteristic of the *installation* and represents the absolute pressure head at the pump suction nozzle, above the vapor pressure of the liquid. It depends on the system's configuration, fluid properties, and operating conditions.
*   **$NPSH_r$** is a characteristic of the *pump* itself and represents the minimum pressure head required at the suction nozzle to prevent cavitation. It is determined by the pump's design, speed, and operating point.

**Question 3:** A centrifugal pump is operating at 1500 rpm. If the pump is connected in series with an identical pump operating at the same speed, what will be the effect on the head and flow rate?

**Answer:** When two identical pumps are connected in series, the flow rate will remain the same, but the total head developed will be approximately double the head developed by a single pump.

**Question 4:** Explain the primary reason why a centrifugal pump needs priming.

**Answer:** A centrifugal pump needs priming because it cannot pump air effectively. It relies on the liquid to create the necessary pressure difference for fluid movement. Air, being compressible, prevents the pump from building up the required pressure head to circulate the fluid.

**Question 5:** What are the typical symptoms of cavitation in a centrifugal pump?

**Answer:** Typical symptoms of cavitation include:
*   A rattling or grinding noise.
*   Increased vibration.
*   A drop in head and flow rate.
*   Reduced pump efficiency.
*   Physical damage to the impeller and casing (pitting, erosion).

---

## Important Points to Remember

*   **Backward-curved vanes** are preferred in most centrifugal pumps for stable operation and higher efficiency.
*   **Manometric Head ($H_m$)** is what the pump delivers, while **Total Dynamic Head (TDH)** is what the system requires.
*   **NPSH is critical:** Always ensure $NPSH_a > NPSH_r$ to prevent cavitation.
*   **Cavitation leads to damage:** It is caused by low pressure and can destroy pump components.
*   **Priming is essential:** Centrifugal pumps cannot pump air and need to be filled with liquid before starting.
*   **Series connection increases head, parallel connection increases flow.**
*   **Pump efficiency** is a key parameter for energy consumption and operational cost.

---

## Alignment with Course Outcomes (CO)

*   **CO1:** Use the fundamental principles of fluid mechanics and thermodynamics and find the efficiencies of power generating and power consuming turbomachines. (Knowledge Level: K3)
    *   **Note Coverage:** This module covers various efficiencies ($\eta_h, \eta_m, \eta_o$), head calculations (Bernoulli's, Manometric), and the principles behind pump operation, which are fundamental to understanding both power-consuming (pumps) and indirectly power-generating (turbines) turbomachines.
*   **CO2:** Analyse the velocity triangles for radial flow and axial flow turbomachines and find the performance for parametrical changes. (Knowledge Level: K3)
    *   **Note Coverage:** Velocity triangles are explained for centrifugal pumps (radial flow) in the context of theoretical head calculations. Parametric changes (speed, flow rate) and their impact on head and NPSH are discussed.
*   **CO3:** Select an appropriate power generating turbomachine for a particular application (Knowledge Level: K3)
    *   **Note Coverage:** While this module focuses on pumps, understanding pump principles (head generation, efficiency, system curves) provides a foundational understanding of turbomachinery that is transferable to selecting power-generating machines.
*   **CO4:** Select an appropriate power consuming turbomachine for a particular application (Knowledge Level: K3)
    *   **Note Coverage:** This module directly addresses the selection and application of centrifugal pumps. Topics like H-Q curves, NPSH, cavitation, and series/parallel operation are essential for selecting the right pump for a given task.

This comprehensive set of notes covers the specified topic from Module 4 of Turbo Machinery, incorporating key concepts, definitions, theoretical explanations, practical considerations, and alignment with the course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
