---
title: "Performance test on pumps (positive displacement and rotodynamic pumps)"
subject: "FLUID MECHANICS LAB"
module: "Module 17: Performance test on pumps (positive displacement and rotodynamic pumps)"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba8108f6"
status: "completed"
scrapedAt: "2026-05-20T18:41:01.042Z"
---
# Fluid Mechanics Lab: Module 17 - Performance Test on Pumps

## Introduction

This module focuses on understanding and conducting performance tests on various types of pumps. Pumps are essential fluid machinery used to transport fluids by adding energy to them. We will explore the characteristic performance curves of both **positive displacement pumps** and **rotodynamic pumps** and learn how to interpret the data obtained from their experimental testing.

---

## Learning Outcomes

By the end of this module, you should be able to:

1.  **Understand the principles of operation for positive displacement and rotodynamic pumps.**
2.  **Identify the key parameters measured during a pump performance test.**
3.  **Explain the significance of pump performance curves.**
4.  **Conduct a performance test on a given pump (either positive displacement or rotodynamic).**
5.  **Analyze and interpret the results of a pump performance test.**
6.  **Determine the efficiency of a pump at different operating points.**
7.  **Compare the performance characteristics of different types of pumps.**

---

## 1. Principles of Pump Operation

### 1.1 Positive Displacement (PD) Pumps

**Key Concept:** PD pumps trap a fixed volume of fluid and force it into the discharge pipe. They deliver a relatively constant flow rate regardless of the discharge pressure (within their operating limits).

**Key Characteristics:**
*   **High Efficiency:** Generally maintain high efficiency over a wide range of pressures.
*   **Self-Priming:** Many PD pumps can create a vacuum and draw liquid from a lower level.
*   **Pulsating Flow:** Can produce a pulsating flow, which may require dampeners.
*   **Sensitive to Solids:** Some PD pumps are sensitive to abrasive solids in the fluid.
*   **Can generate high pressures:** Capable of developing very high discharge pressures.

**Types of PD Pumps:**
*   **Reciprocating Pumps:**
    *   **Piston Pumps:** A piston moves back and forth within a cylinder, drawing fluid in and pushing it out through valves.
        *   *Example:* Hydration pumps in oil and gas, high-pressure cleaning systems.
    *   **Plunger Pumps:** Similar to piston pumps but use a solid plunger instead of a piston with rings.
        *   *Example:* High-pressure metering pumps, injection pumps.
    *   **Diaphragm Pumps:** A flexible diaphragm is moved by a mechanical linkage or fluid pressure, changing the volume of a chamber.
        *   *Example:* Chemical metering, handling corrosive or abrasive fluids.
*   **Rotary Pumps:**
    *   **Gear Pumps:** Two meshing gears trap fluid in the spaces between the teeth and the casing, and transport it.
        *   *Example:* Lubrication systems, fuel pumps, hydraulic systems.
    *   **Lobe Pumps:** Similar to gear pumps but with lobes instead of gears.
        *   *Example:* Food processing, pharmaceuticals, handling viscous fluids.
    *   **Screw Pumps:** One or more screws rotate within a casing, moving fluid axially.
        *   *Example:* Oil transfer, sewage pumps.
    *   **Vane Pumps:** Rotating vanes slide in and out of slots in a rotor, trapping and moving fluid.
        *   *Example:* Power steering, fuel pumps, hydraulic systems.

### 1.2 Rotodynamic (Centrifugal) Pumps

**Key Concept:** Rotodynamic pumps use a rotating impeller to impart kinetic energy to the fluid. This kinetic energy is then converted into pressure energy in the volute or diffuser.

**Key Characteristics:**
*   **Smooth, Continuous Flow:** Deliver a non-pulsating flow.
*   **Good for low to medium pressures and high flow rates.**
*   **Efficiency varies with flow rate.**
*   **Not self-priming (usually):** Require the casing to be filled with fluid before starting.
*   **Can be damaged by cavitation:** If the suction pressure is too low.
*   **Can handle some solids:** Depending on impeller design.

**Types of Rotodynamic Pumps:**
*   **Centrifugal Pumps:** The most common type. Fluid enters the impeller eye, is thrown outwards by centrifugal force, and collects in the volute casing.
    *   **Radial Flow:** Fluid flows radially outward from the impeller.
    *   **Axial Flow:** Fluid flows parallel to the shaft axis (like a propeller).
        *   *Example:* Large volume, low head applications like drainage, irrigation, cooling water.
    *   **Mixed Flow:** Fluid flows both radially and axially.
        *   *Example:* Fire pumps, dewatering.
*   **Propeller Pumps:** Primarily axial flow.
*   **Mixed Flow Pumps:** A combination of radial and axial flow.

---

## 2. Key Parameters Measured During a Pump Performance Test

A typical pump performance test involves measuring the following parameters to characterize the pump's behavior:

*   **Flow Rate (Q):** The volume of fluid delivered per unit time.
    *   **Units:** Liters per minute (LPM), Gallons per minute (GPM), cubic meters per second ($m^3/s$).
    *   **Measurement:** Flow meters (e.g., orifice plate, venturi meter, turbine meter, electromagnetic flow meter).

*   **Head (H):** The total energy imparted to the fluid per unit weight. It represents the equivalent height of a column of the fluid that the pump can lift.
    *   **Definition:** $H = \frac{P}{\rho g} + \frac{v^2}{2g} + z$
        *   $P$: Pressure
        *   $\rho$: Fluid density
        *   $g$: Acceleration due to gravity
        *   $v$: Fluid velocity
        *   $z$: Elevation
    *   **Units:** Meters (m) or feet (ft) of fluid.
    *   **Measurement:** Pressure gauges and manometers at the suction and discharge ports. The difference in pressure, accounting for velocity head and elevation difference, gives the pump head.
        *   **Total Dynamic Head (TDH):** $H_{total} = (P_{discharge} - P_{suction}) / (\rho g) + (v_{discharge}^2 - v_{suction}^2) / (2g) + (z_{discharge} - z_{suction})$

*   **Power Input ( $P_{in}$ or $W_{in}$ ):** The mechanical power delivered to the pump shaft.
    *   **Units:** Watts (W), Kilowatts (kW), Horsepower (HP).
    *   **Measurement:** Power meter or by measuring torque and speed. For a dynamometer: $P_{in} = \tau \omega$, where $\tau$ is torque and $\omega$ is angular velocity.

*   **Fluid Power ( $P_{out}$ or $W_{out}$ ):** The power delivered to the fluid by the pump. This is also known as hydraulic power or water horsepower.
    *   **Formula:** $P_{out} = Q \times H \times \rho \times g$
    *   **Units:** Watts (W), Kilowatts (kW).

*   **Efficiency ($\eta$):** The ratio of fluid power output to power input.
    *   **Formula:** $\eta = \frac{P_{out}}{P_{in}} = \frac{Q \times H \times \rho \times g}{P_{in}}$
    *   **Units:** Percentage (%).

*   **Speed (N):** The rotational speed of the pump shaft.
    *   **Units:** Revolutions per minute (RPM).
    *   **Measurement:** Tachometer.

---

## 3. Significance of Pump Performance Curves

Pump performance curves (also known as characteristic curves) are graphical representations of a pump's behavior under varying operating conditions. They are crucial for selecting the right pump for a specific application and for understanding its operating limits.

**Key Curves:**

*   **Head-Flow Curve (H-Q Curve):** Plots the Total Dynamic Head (H) against the Flow Rate (Q).
    *   **PD Pumps:** Typically have a nearly vertical H-Q curve, meaning head remains relatively constant with varying flow.
    *   **Rotodynamic Pumps:** Typically have a descending H-Q curve. As flow increases, head decreases. The shape of this curve varies significantly with pump design.

*   **Efficiency Curve ($\eta$-Q Curve):** Plots the pump efficiency ($\eta$) against the Flow Rate (Q).
    *   **PD Pumps:** Often have a relatively flat efficiency curve over a wide operating range.
    *   **Rotodynamic Pumps:** Have a parabolic-shaped efficiency curve. There is a specific flow rate, called the **Best Efficiency Point (BEP)**, where the pump operates most efficiently. Operating too far to the left or right of the BEP leads to lower efficiency.

*   **Power Input Curve ($P_{in}$-Q Curve):** Plots the power input required by the pump against the Flow Rate (Q).
    *   **PD Pumps:** Power input generally increases with flow rate and pressure.
    *   **Rotodynamic Pumps:** Power input typically increases with flow rate. For some types of centrifugal pumps (e.g., radial flow), the power input continues to rise as flow increases. For others (e.g., backward-swept vanes), power input reaches a maximum and then decreases at higher flow rates.

**Typical Curves for Centrifugal Pump:**

```
       ^ Head (H)
       |      /
       |     /
       |    /
       |   /
       |  /
       | /
       |/____________________> Flow Rate (Q)

       ^ Efficiency (η)
       |     /\
       |    /  \
       |   /    \
       |  /      \
       | /________\___________> Flow Rate (Q)
            BEP

       ^ Power Input (Pin)
       |     /
       |    /
       |   /
       |  /
       | /____________________> Flow Rate (Q)
```

**Important Points:**

*   **Operating Point:** The intersection of the pump's H-Q curve and the system's resistance curve (system curve) determines the actual operating point of the pump in a given system.
*   **System Curve:** Represents the total head required to overcome static lift, friction losses, and velocity changes in the piping system for a given flow rate.

---

## 4. Conducting a Performance Test (General Procedure)

The specific setup will vary depending on the lab equipment, but the general procedure involves:

1.  **Setup:**
    *   Connect the pump to the power source.
    *   Install necessary instrumentation (flow meter, pressure gauges/manometers, tachometer, power meter).
    *   Ensure the suction and discharge lines are properly connected.
    *   For centrifugal pumps, ensure the pump and suction line are filled with fluid (primed).

2.  **Data Acquisition:**
    *   **Vary the operating conditions:** This is typically done by adjusting a valve on the discharge side of the pump. Closing the valve reduces the flow rate and increases the head, while opening it increases the flow rate and decreases the head.
    *   **Record readings:** At several distinct operating points (e.g., from shut-off head to maximum flow), record the following:
        *   Flow rate (Q)
        *   Suction pressure ($P_s$)
        *   Discharge pressure ($P_d$)
        *   Pump shaft speed (N)
        *   Power input ($P_{in}$)
    *   **Maintain consistent fluid density and temperature** if possible, or correct for variations.

3.  **Calculations:**
    *   **Calculate pump head (H)** for each operating point using the pressure readings, velocities, and elevations.
    *   **Calculate fluid power output ($P_{out}$)** using $P_{out} = Q \times H \times \rho \times g$.
    *   **Calculate efficiency ($\eta$)** for each operating point using $\eta = \frac{P_{out}}{P_{in}}$.

4.  **Plotting:**
    *   Plot the recorded and calculated data to generate the performance curves:
        *   H vs. Q
        *   $\eta$ vs. Q
        *   $P_{in}$ vs. Q
    *   If the speed was varied, plot these curves for each speed tested.

---

## 5. Analyzing and Interpreting Results

*   **Identify the BEP:** From the $\eta$-Q curve, find the flow rate at which the efficiency is maximum. This is the most economical operating point.
*   **Check for cavitation:** For centrifugal pumps, if the suction pressure drops too low, cavitation can occur, leading to noise, vibration, and damage. Monitor suction pressure.
*   **Compare with manufacturer data:** If available, compare your experimental curves with the manufacturer's specified curves to assess the pump's performance.
*   **System Matching:** Overlay the system curve onto the pump's H-Q curve to determine the expected operating point in the specific system.
*   **PD Pump Specifics:** For PD pumps, the H-Q curve should be relatively flat. Deviations may indicate internal leakage (slip). The power input will generally increase with pressure.

---

## 6. Determining Pump Efficiency

Efficiency is a critical parameter as it directly relates to operating costs.

*   **Overall Efficiency:** The efficiency calculated from measured power input and hydraulic power output.
*   **Volumetric Efficiency (PD Pumps):** The ratio of actual flow rate to theoretical flow rate.
    *   $Volumetric \ Efficiency = \frac{Q_{actual}}{Q_{theoretical}}$
    *   $Q_{theoretical} = \{Displacement \ per \ revolution\} \times N$
*   **Mechanical Efficiency (PD Pumps):** The ratio of power delivered to the fluid to the power supplied to the shaft.
    *   $Mechanical \ Efficiency = \frac{P_{out}}{\{Displacement \ per \ revolution\} \times N \times \{Pressure \ \times \ Fluid \ Density \times g\}}$ (This is complex and often combined into overall efficiency).

**Importance of Efficiency:** A pump operating at its BEP will consume less energy, leading to lower operating costs and reduced environmental impact.

---

## 7. Comparing Performance Characteristics

| Feature            | Positive Displacement Pumps                        | Rotodynamic (Centrifugal) Pumps                      |
| :----------------- | :------------------------------------------------- | :--------------------------------------------------- |
| **Flow Rate**      | Nearly constant, independent of head.              | Variable, decreases as head increases.               |
| **Head**           | Can generate very high heads.                      | Generally lower heads per stage, but can be multi-staged. |
| **Efficiency**     | High and consistent over a wide range of pressures. | Peaks at BEP, decreases significantly at off-design. |
| **Flow Control**   | Best controlled by variable speed or bypass.       | Easily controlled by discharge valve throttling.     |
| **Suction Lift**   | Good self-priming capabilities.                    | Generally requires priming, sensitive to NPSH.       |
| **Fluid Handling** | Can handle viscous fluids, sometimes solids.       | Best for low-viscosity fluids, specific designs for solids. |
| **Pressure Pulsation** | Can be significant.                               | Generally smooth flow.                               |
| **Application**    | Metering, high pressure, viscous fluids.           | Water supply, HVAC, circulation, general transfer.   |

---

## Practice Questions & Exercises

**Question 1:** A centrifugal pump delivers 100 LPM of water ($\rho = 1000$ kg/$m^3$) against a total head of 20 meters. The shaft power input to the pump is 1.5 kW. Calculate the fluid power output and the overall efficiency of the pump.
($g = 9.81$ $m/s^2$)

**Answer 1:**
*   Convert flow rate: $Q = 100 \text{ LPM} = \frac{100}{1000 \times 60} m^3/s \approx 0.00167 m^3/s$
*   Fluid Power Output ($P_{out}$): $P_{out} = Q \times H \times \rho \times g = 0.00167 m^3/s \times 20 m \times 1000 kg/m^3 \times 9.81 m/s^2 \approx 327.3 \text{ W}$
*   Overall Efficiency ($\eta$): $\eta = \frac{P_{out}}{P_{in}} = \frac{327.3 \text{ W}}{1500 \text{ W}} \times 100\% \approx 21.8\%$

**Question 2:** What is the primary characteristic of the Head-Flow (H-Q) curve for a positive displacement pump?
a) It shows a significant decrease in head as flow rate increases.
b) It is nearly vertical, indicating head is largely independent of flow rate.
c) It has a parabolic shape.
d) It is always zero.

**Answer 2:**
b) It is nearly vertical, indicating head is largely independent of flow rate.

**Question 3:** Define the Best Efficiency Point (BEP) for a rotodynamic pump. What are the consequences of operating a centrifugal pump far from its BEP?

**Answer 3:**
The Best Efficiency Point (BEP) is the flow rate at which a rotodynamic pump achieves its maximum efficiency. Operating a centrifugal pump far from its BEP leads to:
*   **Reduced efficiency:** The pump consumes more energy for the same output.
*   **Increased operating costs:** Higher energy consumption.
*   **Potential for increased wear and damage:** Operating at very low flows can lead to recirculation and heat buildup, while operating at very high flows can lead to cavitation and increased radial thrust, causing vibration and premature bearing failure.

**Question 4:** A reciprocating pump has a bore of 10 cm and a stroke of 15 cm. It operates at 200 RPM. If its volumetric efficiency is 95%, calculate the actual flow rate in LPM.

**Answer 4:**
*   Radius ($r$) = Bore/2 = 10 cm / 2 = 5 cm = 0.05 m
*   Stroke length ($L$) = 15 cm = 0.15 m
*   Volume per stroke = $\pi r^2 L = \pi \times (0.05 m)^2 \times 0.15 m \approx 0.001178 m^3$
*   Theoretical flow rate ($Q_{theoretical}$) = Volume per stroke $\times$ Speed
    $Q_{theoretical} = 0.001178 m^3/stroke \times 200 \text{ strokes/min} \approx 0.2356 m^3/min$
*   Actual flow rate ($Q_{actual}$) = $Q_{theoretical} \times$ Volumetric Efficiency
    $Q_{actual} = 0.2356 m^3/min \times 0.95 \approx 0.2238 m^3/min$
*   Convert to LPM: $Q_{actual} \approx 0.2238 m^3/min \times 1000 \text{ L/m}^3 \approx 223.8 \text{ LPM}$

---

## Important Points to Remember

*   **Distinguish between PD and Rotodynamic pumps:** Their fundamental operating principles and performance characteristics are very different.
*   **Accurate measurements are crucial:** The quality of your performance curves depends entirely on the accuracy of your instrument readings.
*   **Understand units:** Ensure consistency in units throughout your calculations.
*   **Plotting is key for interpretation:** Visualizing the data in the form of curves makes analysis straightforward.
*   **BEP is important for efficiency:** Aim to operate pumps near their BEP for optimal performance and cost-effectiveness.
*   **System curve is essential for real-world application:** A pump's performance in a system is dictated by the system's resistance.

---
