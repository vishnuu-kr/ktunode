---
title: "Flow measurement: Gross flow rate measuring meters"
subject: "ENGINEERING INSTRUMENTS AND MEASUREMENTS"
module: "Module 4: Flow measurement: Gross flow rate measuring meters"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464326"
status: "completed"
scrapedAt: "2026-05-20T18:11:51.687Z"
---
# ENGINEERING INSTRUMENTS AND MEASUREMENTS
## Module 4: Flow Measurement: Gross Flow Rate Measuring Meters

---

### Introduction to Flow Measurement

Flow measurement is a crucial aspect of many engineering disciplines, including chemical processing, manufacturing, and environmental monitoring. It involves quantifying the rate at which a fluid (liquid or gas) moves through a system. Gross flow rate meters measure the total quantity of fluid that has passed through a point over a period of time.

**Learning Outcome:** This module aims to equip students with the knowledge to understand and analyze different types of gross flow rate measuring meters, contributing to CO4 (ability to measure flow and temperature) at a Knowledge Level of K4. It also supports CO5 (ability to select measurement system for engineering applications) at a Knowledge Level of K3.

---

### 1. Classification of Flow Meters

Flow meters can be broadly classified based on their operating principles:

*   **Inferential Meters:** These meters measure a flow-dependent characteristic of the fluid and infer the flow rate from this measurement.
    *   **Velocity Meters:** Measure the fluid velocity and calculate flow rate using the cross-sectional area.
    *   **Inferential Meters (Derived from Pressure Drop):** Measure the pressure difference created by a restriction in the flow path.
*   **Positive Displacement (PD) Meters:** These meters trap a fixed volume of fluid and count the number of times this volume is displaced. They directly measure the quantity of fluid.

**Key Concept:** The choice of flow meter depends on factors such as the fluid properties, desired accuracy, flow rate range, pressure and temperature conditions, and cost. (CO5 - K3)

---

### 2. Positive Displacement (PD) Flow Meters

PD meters are known for their high accuracy, especially at low to medium flow rates. They are ideal for custody transfer applications where precise measurement of quantity is essential.

#### 2.1. Oval Gear Meters

*   **Working Principle:** Two meshing oval-shaped gears rotate within a precisely machined casing. As fluid flows, it drives the gears, filling the chambers created between the gears and the casing. Each rotation of the gears displaces a known volume of fluid.
*   **Construction:** Typically consist of a housing, two meshing oval rotors, and a shaft.
*   **Advantages:**
    *   High accuracy.
    *   Good for viscous fluids.
    *   Low pressure drop.
    *   Suitable for a wide range of flow rates.
*   **Disadvantages:**
    *   Can be sensitive to dirt and debris, which can cause jamming.
    *   Not ideal for very low viscosity fluids as leakage can occur.
*   **Applications:** Fuel dispensing, oil and gas industry, chemical dosing.
*   **Textbook Reference:** Sawhney & Sawhney (12th ed., 2009) extensively covers PD meters, including oval gear types, detailing their construction and working. Dobelin (4th ed., 1990) also provides insights into the principles of volume displacement.

#### 2.2. Nutating Disc Meters

*   **Working Principle:** A disc wobbles (nutates) within a spherical chamber without rotating. The disc has a central ball that rides in a slot in a central partition. As fluid enters and exits, it causes the disc to nutate, displacing a known volume of fluid with each cycle.
*   **Construction:** A casing with a spherical chamber, a disc with a central ball, and a central partition.
*   **Advantages:**
    *   Relatively simple and robust.
    *   Good accuracy for a variety of liquids.
    *   Compact design.
*   **Disadvantages:**
    *   Can be susceptible to wear from abrasive fluids.
    *   Not as accurate as oval gear meters for very low flow rates.
*   **Applications:** Water metering, domestic gas metering (in some designs), general fluid dispensing.
*   **Textbook Reference:** Nakra & Chaudhry (3rd ed., 2009) offers detailed explanations and diagrams of nutating disc meters.

#### 2.3. Rotary Piston Meters

*   **Working Principle:** A piston reciprocates within a cylinder, or a rotary piston rotates within a chamber. The motion of the piston, driven by the fluid flow, displaces a fixed volume of fluid with each stroke or rotation.
*   **Construction:** A cylinder, piston(s), and a mechanism to guide the piston's motion.
*   **Advantages:**
    *   High accuracy.
    *   Good for viscous fluids.
    *   Can handle moderate pressures.
*   **Disadvantages:**
    *   More complex than other PD meters.
    *   Can be sensitive to debris.
*   **Applications:** Hydraulic systems, industrial fluid transfer.
*   **Textbook Reference:** Rajput (2006) likely discusses the mechanics of rotary piston movement in the context of flow measurement.

#### 2.4. Vane Type Meters

*   **Working Principle:** A rotor with spring-loaded vanes (or vanes mounted on a shaft) rotates within a casing. The vanes are forced against the casing walls by centrifugal force or springs, creating chambers that trap and measure discrete volumes of fluid.
*   **Construction:** A cylindrical casing, a rotor with sliding vanes.
*   **Advantages:**
    *   Simple construction.
    *   Relatively inexpensive.
    *   Can handle a range of fluids.
*   **Disadvantages:**
    *   Lower accuracy compared to Oval Gear or Rotary Piston meters.
    *   Wear on vanes can affect accuracy.
    *   Higher pressure drop.
*   **Applications:** Lubricating oil flow, fuel flow.
*   **Textbook Reference:** Singh (2009) might categorize vane type meters under volumetric meters and discuss their operational characteristics.

**Important Point to Remember:** PD meters are generally volumetric and provide a direct measurement of the quantity of fluid, making them highly accurate for totalized flow.

---

### 3. Inferential Flow Meters (Gross Flow Rate Measuring)

Inferential meters measure a characteristic related to the fluid's velocity or kinetic energy and infer the volumetric or mass flow rate.

#### 3.1. Orifice Plate Meters

*   **Working Principle:** A plate with a precisely machined hole (orifice) is inserted into a pipeline. When fluid flows through the orifice, its velocity increases, and its pressure decreases (Bernoulli's principle). The difference in pressure upstream and downstream of the orifice is measured using differential pressure transmitters. This pressure difference is proportional to the square of the flow rate.
*   **Construction:** A thin plate with a sharp-edged hole, installed between pipeline flanges. Requires upstream and downstream pressure taps.
*   **Advantages:**
    *   Simple and robust construction.
    *   Low cost.
    *   Suitable for a wide range of flow rates and fluids.
    *   No moving parts.
*   **Disadvantages:**
    *   Lower accuracy compared to PD meters.
    *   Significant permanent pressure loss.
    *   Sensitive to viscosity changes and fluid density.
    *   Prone to clogging with particulate matter.
    *   Requires calibration for different fluids.
*   **Formula:**
    $Q = C_d \times A_0 \times \sqrt{\frac{2 \Delta P}{\rho}}$
    Where:
    *   $Q$ = Volumetric flow rate
    *   $C_d$ = Discharge coefficient (dependent on orifice geometry and Reynolds number)
    *   $A_0$ = Area of the orifice
    *   $\Delta P$ = Differential pressure across the orifice
    *   $\rho$ = Fluid density
*   **Applications:** Water, steam, air, gas flow measurement in various industrial processes.
*   **Textbook Reference:** Dobelin (4th ed., 1990) provides a thorough explanation of orifice plate meters, including the theoretical basis (Bernoulli's principle) and the factors affecting the discharge coefficient. Sawhney & Sawhney (12th ed., 2009) also details orifice plate installation and associated calculations.

#### 3.2. Venturi Meters

*   **Working Principle:** A Venturi meter consists of a converging section, a throat (the narrowest part), and a diverging section. As fluid flows from the wider section to the narrower throat, its velocity increases, and its pressure decreases (Bernoulli's principle). The differential pressure between the inlet and the throat is measured and related to the flow rate.
*   **Construction:** A smooth converging cone, a cylindrical throat, and a diverging cone with a downstream pressure tap.
*   **Advantages:**
    *   Lower permanent pressure loss compared to orifice plates.
    *   High accuracy.
    *   Less prone to clogging.
    *   Suitable for a wide range of fluids.
*   **Disadvantages:**
    *   Higher initial cost and larger installation size compared to orifice plates.
    *   More complex construction.
*   **Formula:** Similar to orifice plates, but with a different discharge coefficient and area relationship.
    $Q = C_v \times A_t \times \sqrt{\frac{2 \Delta P}{\rho (1 - (A_t/A_1)^2)}}$
    Where:
    *   $C_v$ = Velocity coefficient
    *   $A_t$ = Area of the throat
    *   $A_1$ = Area of the inlet
*   **Applications:** Water flow measurement in pipelines, industrial processes.
*   **Textbook Reference:** Nakra & Chaudhry (3rd ed., 2009) and Dobelin (4th ed., 1990) provide comprehensive details on Venturi meters, including their design, working principle, and performance characteristics.

#### 3.3. Flow Nozzles

*   **Working Principle:** A flow nozzle is a compromise between an orifice plate and a Venturi meter. It has a smooth, rounded inlet contour and a cylindrical throat. It produces a higher differential pressure than a Venturi meter but has less permanent pressure loss than an orifice plate.
*   **Construction:** A precisely formed nozzle with a converging inlet and a cylindrical throat.
*   **Advantages:**
    *   Less permanent pressure loss than orifice plates.
    *   Can handle higher flow rates and higher velocity fluids than orifice plates.
    *   More robust than orifice plates for high velocity conditions.
*   **Disadvantages:**
    *   Higher cost than orifice plates.
    *   More prone to erosion than Venturi meters.
*   **Applications:** High-velocity steam and gas flow measurement.
*   **Textbook Reference:** Sawhney & Sawhney (12th ed., 2009) likely discusses flow nozzles as another type of differential pressure flow element.

**Important Point to Remember:** Inferential meters rely on the relationship between flow rate and differential pressure. Accurate pressure measurement and knowledge of fluid density are crucial for accurate flow rate determination. The accuracy is often affected by changes in Reynolds number and fluid properties. (CO4 - K4)

---

### 4. Other Inferential Flow Meters (Brief Overview)

While PD meters and differential pressure meters are common for gross flow rate measurement, other inferential methods also exist:

#### 4.1. Turbine Meters

*   **Working Principle:** A rotor with blades (like a propeller) is placed in the fluid stream. The fluid flow causes the rotor to spin. The rotational speed of the rotor is proportional to the fluid velocity. The rotational speed is typically measured by a magnetic pickup sensor or a proximity sensor.
*   **Advantages:**
    *   Good accuracy.
    *   Relatively low pressure drop.
    *   Good for clean liquids and gases.
*   **Disadvantages:**
    *   Moving parts are subject to wear.
    *   Not suitable for very viscous or dirty fluids.
    *   Can be affected by flow profile disturbances.
*   **Applications:** Fuel flow, water flow, gas flow.
*   **Textbook Reference:** Singh (2009) and Nakra & Chaudhry (3rd ed., 2009) usually cover turbine meters, highlighting their construction and the principle of rotational speed measurement.

#### 4.2. Electromagnetic Flow Meters (Magmeters)

*   **Working Principle:** Based on Faraday's Law of Electromagnetic Induction. When a conductive fluid flows through a magnetic field, a voltage is induced across the fluid, perpendicular to both the flow direction and the magnetic field. The magnitude of this induced voltage is directly proportional to the average flow velocity.
*   **Advantages:**
    *   No obstruction to flow, thus zero pressure drop.
    *   Excellent for slurries and corrosive fluids.
    *   High accuracy.
    *   Unaffected by fluid viscosity or density.
*   **Disadvantages:**
    *   Only works with conductive fluids.
    *   Higher cost compared to some other types.
    *   Requires a full pipe.
*   **Applications:** Water treatment, chemical processing, wastewater.
*   **Textbook Reference:** Dobelin (4th ed., 1990) and Singh (2009) provide detailed explanations of the electromagnetic principle and its application in flow measurement.

#### 4.3. Vortex Meters

*   **Working Principle:** A bluff body (shedder bar) is placed in the fluid stream. As the fluid flows past the bluff body, it creates alternating vortices (swirls) downstream. The frequency of vortex shedding is directly proportional to the fluid velocity. This frequency is measured by a sensor (e.g., piezoelectric, capacitive).
*   **Advantages:**
    *   No moving parts.
    *   No obstruction to flow.
    *   Good accuracy over a wide range of flow rates.
    *   Suitable for clean liquids and gases.
*   **Disadvantages:**
    *   Not ideal for highly viscous fluids or slurries.
    *   Can be sensitive to vibration.
*   **Applications:** Steam, gas, and liquid flow measurement.
*   **Textbook Reference:** Nakra & Chaudhry (3rd ed., 2009) and Singh (2009) typically include vortex meters in their discussion of non-obstructive flow measurement techniques.

---

### 5. Selection Criteria for Flow Meters

Selecting the appropriate flow meter is crucial for successful measurement. Key factors to consider include:

*   **Fluid Properties:**
    *   **Conductivity:** For electromagnetic meters.
    *   **Viscosity:** PD meters and Venturi meters are good for viscous fluids; turbine and vortex meters are not.
    *   **Corrosiveness:** Magmeters or materials with good chemical resistance are needed for corrosive fluids.
    *   **Presence of Solids/Particulates:** PD meters and differential pressure meters can be problematic; Magmeters or Vortex meters might be better.
    *   **Density:** Affects differential pressure meters.
*   **Flow Conditions:**
    *   **Flow Rate Range:** Different meters have different operating ranges.
    *   **Flow Profile:** Straight pipe runs are important for many inferential meters.
    *   **Pulsating Flow:** Can affect the accuracy of some meters.
*   **Accuracy Requirements:** Custody transfer applications require high accuracy (PD meters).
*   **Pressure and Temperature:** The meter must withstand the operating conditions.
*   **Pressure Drop:** Some applications may require low or zero pressure drop (Magmeters).
*   **Installation Space:** Venturi meters are larger than orifice plates.
*   **Cost:** Initial purchase cost, installation, maintenance, and calibration costs.
*   **Maintenance Requirements:** Meters with moving parts require more maintenance.

**Course Outcome Alignment:** This section directly addresses CO5 (To select measurement system for engineering applications) at a Knowledge Level of K3 by outlining the decision-making process.

---

### Practice Questions & Exercises

**Question 1:**
Which type of flow meter is considered a "Positive Displacement" meter and directly measures the volume of fluid passing through it?
a) Orifice Plate Meter
b) Venturi Meter
c) Oval Gear Meter
d) Turbine Meter

**Answer:** c) Oval Gear Meter

**Question 2:**
The working principle of an orifice plate meter relies on:
a) Faraday's Law of Induction
b) Bernoulli's Principle and pressure drop
c) Vortex shedding frequency
d) Direct volumetric trapping

**Answer:** b) Bernoulli's Principle and pressure drop

**Question 3:**
A key advantage of electromagnetic flow meters (Magmeters) is:
a) They can measure very viscous fluids accurately.
b) They introduce no obstruction to flow, resulting in zero pressure drop.
c) They are the least expensive flow meter option.
d) They require a high degree of fluid purity.

**Answer:** b) They introduce no obstruction to flow, resulting in zero pressure drop.

**Question 4:**
List three factors that you would consider when selecting a flow meter for a specific engineering application.

**Answer:**
Possible answers include:
*   Fluid properties (viscosity, conductivity, presence of solids)
*   Flow rate range
*   Required accuracy
*   Pressure drop limitations
*   Cost (initial, installation, maintenance)
*   Environmental conditions (temperature, vibration)

**Question 5 (Calculation - Application of CO4):**
An oval gear flow meter displaces 0.1 liters per revolution. If the meter registers 500 revolutions in 2 minutes, what is the average volumetric flow rate in liters per minute?

**Answer:**
Volume displaced = 0.1 liters/revolution * 500 revolutions = 50 liters
Time = 2 minutes
Average flow rate = Volume / Time = 50 liters / 2 minutes = 25 liters/minute

---

### Important Points to Remember

*   **PD Meters:** Direct volume measurement, high accuracy, good for viscous fluids, count discrete volumes.
*   **Inferential Meters (Differential Pressure):** Indirect measurement based on pressure drop (orifice, Venturi, nozzle), sensitive to fluid properties and density.
*   **Inferential Meters (Velocity-based):** Measure fluid velocity (turbine, vortex, magmeter) and infer flow rate.
*   **Magmeters:** Require conductive fluids, zero pressure drop, ideal for corrosive and slurried fluids.
*   **Nozzles and Venturi Meters:** Offer lower pressure loss than orifice plates but are more costly and complex.
*   **Selection:** Always consider fluid characteristics, desired accuracy, and operating conditions.

---

This concludes Module 4: Flow Measurement: Gross Flow Rate Measuring Meters. The concepts covered here are foundational for understanding and applying various flow measurement technologies in engineering.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
