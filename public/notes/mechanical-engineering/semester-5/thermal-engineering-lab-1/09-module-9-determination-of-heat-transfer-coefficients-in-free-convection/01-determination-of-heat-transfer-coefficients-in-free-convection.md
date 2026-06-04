---
title: "Determination of heat transfer coefficients in free convection"
subject: "THERMAL ENGINEERING LAB-1"
module: "Module 9: Determination of heat transfer coefficients in free convection"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf48044636bd"
status: "completed"
scrapedAt: "2026-05-20T18:02:15.258Z"
---
# THERMAL ENGINEERING LAB-1: Module 9 - Determination of Heat Transfer Coefficients in Free Convection

## Topic: Determination of Heat Transfer Coefficients in Free Convection

### 1. Introduction to Free Convection

Free convection, also known as natural convection, is a mode of heat transfer that occurs due to density differences in a fluid caused by temperature gradients. Unlike forced convection, where external means (like fans or pumps) are used to move the fluid, free convection relies on the buoyancy forces that arise naturally.

**Key Concepts:**

*   **Buoyancy Force:** When a fluid is heated, its density decreases. The cooler, denser surrounding fluid then exerts an upward force (buoyancy) on the warmer, less dense fluid, causing it to rise. This continuous movement of fluid due to density variations constitutes free convection.
*   **Density Gradients:** The presence of temperature variations within a fluid is the fundamental cause of density gradients, which in turn drive free convection.
*   **Boundary Layer:** A thin layer of fluid near the surface where viscous effects are significant and the velocity gradient is non-zero. In free convection, a thermal boundary layer also forms, where temperature gradients are significant.

**Reference:** Cengel, Chapter 12: Natural Convection. This chapter provides a thorough introduction to the mechanisms and fundamental principles of free convection.

### 2. Governing Principles and Equations

The rate of heat transfer in free convection is governed by Newton's Law of Cooling:

$Q_{conv} = h A (T_s - T_\infty)$

Where:
*   $Q_{conv}$: Rate of heat transfer by convection (Watts)
*   $h$: Convective heat transfer coefficient (W/m².K)
*   $A$: Surface area for convection (m²)
*   $T_s$: Surface temperature (K or °C)
*   $T_\infty$: Ambient fluid temperature (K or °C)

The core of determining heat transfer coefficients in free convection lies in understanding the dimensionless numbers that characterize the flow and heat transfer phenomena.

**Key Dimensionless Numbers:**

*   **Grashof Number ($Gr$)**: Represents the ratio of buoyancy forces to viscous forces. It is a key indicator of the onset and magnitude of free convection.
    $Gr = \frac{g \beta (T_s - T_\infty) L^3}{\nu^2}$
    Where:
    *   $g$: Acceleration due to gravity (m/s²)
    *   $\beta$: Volumetric thermal expansion coefficient of the fluid (1/K)
    *   $L$: Characteristic length (m)
    *   $\nu$: Kinematic viscosity of the fluid (m²/s)

*   **Prandtl Number ($Pr$)**: Represents the ratio of momentum diffusivity to thermal diffusivity. It relates the velocity and thermal boundary layer thicknesses.
    $Pr = \frac{\nu}{\alpha} = \frac{\nu}{k/(\rho c_p)} = \frac{\mu c_p}{k}$
    Where:
    *   $\alpha$: Thermal diffusivity (m²/s)
    *   $k$: Thermal conductivity of the fluid (W/m.K)
    *   $\rho$: Density of the fluid (kg/m³)
    *   $c_p$: Specific heat at constant pressure (J/kg.K)
    *   $\mu$: Dynamic viscosity of the fluid (kg/m.s)

*   **Rayleigh Number ($Ra$)**: A combination of Grashof and Prandtl numbers, it is the most important dimensionless number for characterizing free convection. It represents the ratio of buoyancy forces to viscous and thermal diffusion effects.
    $Ra = Gr \cdot Pr = \frac{g \beta (T_s - T_\infty) L^3}{\nu \alpha}$

**Flow Regimes:**

The flow in free convection can be either laminar or turbulent, depending on the Rayleigh number. The transition typically occurs around $Ra \approx 10^9$.

*   **Laminar Flow:** The fluid moves in smooth, ordered layers.
*   **Turbulent Flow:** The fluid motion is chaotic and irregular, with significant mixing.

**Reference:** Sachdeva, Chapter 15: Natural Convection Heat Transfer. This chapter extensively covers the dimensionless parameters, correlations, and governing equations for free convection. Cengel also provides a good overview in Chapter 12.

### 3. Experimental Determination of Heat Transfer Coefficient

The primary goal of this lab is to experimentally determine the convective heat transfer coefficient, $h$, for free convection from a specific geometry. This is typically done by measuring the heat transfer rate and other relevant parameters, and then calculating $h$ using the fundamental heat transfer equation.

**Experimental Setup and Procedure (General):**

A typical experimental setup might involve:

*   **Heated Surface:** A geometrically defined object (e.g., a cylinder, a flat plate, a sphere) that is heated electrically.
*   **Power Supply:** A controllable power supply to provide heat to the object.
*   **Temperature Measurement:** Thermocouples or resistance temperature detectors (RTDs) to measure the surface temperature of the object and the ambient fluid temperature.
*   **Insulation:** To minimize heat losses by conduction and radiation from the sides and bottom of the heated object, focusing on convection from the exposed surface.
*   **Measuring Instruments:** Ammeter and voltmeter to measure electrical power input, and a thermometer for ambient temperature.

**Steps in the Experiment:**

1.  **Setup and Calibration:** Assemble the apparatus and ensure all instruments are calibrated.
2.  **Power Input:** Apply a known electrical power input ($P_{in}$) to the heating element.
3.  **Steady State:** Allow the system to reach a steady state, where temperatures no longer change significantly with time.
4.  **Measurements:** Record the following at steady state:
    *   Voltage ($V$) across the heater
    *   Current ($I$) flowing through the heater
    *   Surface temperature of the object ($T_s$)
    *   Ambient fluid temperature ($T_\infty$)
5.  **Calculate Heat Transfer Rate:** The electrical power input is converted to heat.
    $Q_{in} = V \times I$
6.  **Account for Losses:** In a practical lab, some heat will be lost through other modes (conduction and radiation). For accurate determination of convective heat transfer, these losses must be estimated or minimized.
    *   **Conduction Losses:** Often minimized by good insulation.
    *   **Radiation Losses ($Q_{rad}$):** Can be calculated using the Stefan-Boltzmann Law:
        $Q_{rad} = \epsilon \sigma A (T_s^4 - T_\infty^4)$
        Where:
        *   $\epsilon$: Emissivity of the surface
        *   $\sigma$: Stefan-Boltzmann constant ($5.67 \times 10^{-8}$ W/m².K⁴)
        *   $A$: Surface area for radiation
    *   **Net Convection Heat Transfer:** The heat transferred by convection ($Q_{conv}$) is the total heat input minus the losses from other modes.
        $Q_{conv} = Q_{in} - Q_{rad}$ (assuming conduction losses are negligible)
7.  **Calculate Convective Heat Transfer Coefficient ($h$):** Using Newton's Law of Cooling:
    $h = \frac{Q_{conv}}{A (T_s - T_\infty)}$

**Course Outcome Alignment:**

*   **CO1:** While not directly measuring fuel properties, understanding the fluid properties ($\beta$, $\nu$, $k$, $\rho$, $c_p$) is crucial, and some experiments might involve varying fluids.
*   **CO2:** This experiment directly measures and evaluates a thermal property – the convective heat transfer coefficient.
*   **CO3 & CO4:** Not directly related to this specific module.

**Reference:** Holman, Chapter 6: Natural Convection. This chapter details experimental techniques and considerations for measuring convection heat transfer. Cengel also provides practical insights in Chapter 12.

### 4. Empirical Correlations for Free Convection

In many cases, direct measurement of the convective heat transfer coefficient can be complex. Empirical correlations are widely used to predict $h$ based on the geometry of the surface and the fluid properties. These correlations are derived from experimental data and are typically expressed in terms of dimensionless numbers.

**Common Geometries and Their Correlations:**

*   **Vertical Plates and Cylinders:**
    *   Laminar Flow ($10^4 < Ra < 10^9$): $Nu = 0.59 Ra^{1/4}$
    *   Turbulent Flow ($Ra > 10^9$): $Nu = 0.10 Ra^{1/3}$
    *   Where $Nu = \frac{h L}{k}$ (Nusselt Number) and $L$ is the characteristic length (height for a plate, diameter for a cylinder).

*   **Horizontal Plates:**
    *   **Heated from Below, Cooled from Above:**
        *   Laminar Flow ($10^4 < Ra < 10^9$): $Nu = 0.54 Ra^{1/4}$
    *   **Heated from Above, Cooled from Below:** Generally, convection is suppressed, and heat transfer is dominated by conduction.
    *   Characteristic length $L$ is typically the side length for a square plate or the diameter for a circular plate.

*   **Horizontal Cylinders:**
    *   Laminar Flow ($10^4 < Ra < 10^9$): $Nu = 0.53 Ra^{1/4}$
    *   Turbulent Flow ($Ra > 10^9$): $Nu = 0.125 Ra^{1/3}$
    *   Characteristic length $L$ is the diameter of the cylinder.

**Important Considerations for Correlations:**

*   **Characteristic Length ($L$):** Crucial to select the correct characteristic length for the geometry.
*   **Fluid Properties:** These properties should be evaluated at the **film temperature** ($T_f = (T_s + T_\infty)/2$), as this is where most of the heat transfer occurs.
*   **Range of Validity:** Ensure the calculated Rayleigh number falls within the range for which the correlation is valid.
*   **Combined Regimes:** For large surfaces where the flow might transition from laminar to turbulent, a weighted average or specific correlations that account for both regimes are used.

**Reference:** Cengel, Chapter 12, and Sachdeva, Chapter 15, provide extensive tables and discussions of these empirical correlations for various geometries. Kothandaraman also offers a good selection of correlations.

### 5. Laboratory Practice and Analysis

**Objective:** To experimentally determine the average free convection heat transfer coefficient from a specified surface (e.g., a heated cylinder) and compare it with values predicted by empirical correlations.

**Experimental Setup (Example: Heated Cylinder):**

*   A horizontal cylinder (e.g., made of metal) with a heating coil embedded inside.
*   A power source to supply controlled electrical power.
*   Thermocouples to measure the surface temperature of the cylinder.
*   A thermometer to measure the ambient air temperature.
*   A voltmeter and ammeter to measure electrical power.
*   An enclosure or insulation to minimize external influences and radiation losses.

**Procedure Steps (Detailed Example):**

1.  **Identify the geometry:** Determine the surface area ($A$) and characteristic length ($L$) of the cylinder (e.g., diameter).
2.  **Measure ambient temperature:** Record $T_\infty$.
3.  **Apply power:** Set the power supply to a specific value.
4.  **Reach steady state:** Monitor the cylinder's surface temperature ($T_s$) until it stabilizes.
5.  **Record data:** At steady state, record $V$, $I$, and $T_s$.
6.  **Repeat:** Repeat steps 3-5 for several different power inputs to obtain a range of surface temperatures.
7.  **Calculate Power Input:** For each data point, $Q_{in} = V \times I$.
8.  **Estimate Radiation Losses:**
    *   Determine the emissivity ($\epsilon$) of the cylinder's surface.
    *   Calculate $Q_{rad} = \epsilon \sigma A (T_s^4 - T_\infty^4)$. (Ensure temperatures are in Kelvin: $T_K = T_{°C} + 273.15$)
9.  **Calculate Convective Heat Transfer Rate:** $Q_{conv} = Q_{in} - Q_{rad}$.
10. **Calculate Experimental Heat Transfer Coefficient:** $h_{exp} = \frac{Q_{conv}}{A (T_s - T_\infty)}$.
11. **Calculate Dimensionless Numbers:**
    *   Calculate the film temperature $T_f = (T_s + T_\infty)/2$.
    *   Obtain fluid properties (density $\rho$, specific heat $c_p$, thermal conductivity $k$, viscosity $\mu$, thermal expansion coefficient $\beta$) for air at $T_f$ from steam tables or property charts. (Note: $\beta = 1/T_f$ for ideal gases).
    *   Calculate kinematic viscosity $\nu = \mu / \rho$.
    *   Calculate Prandtl Number $Pr$.
    *   Calculate Grashof Number $Gr = \frac{g \beta (T_s - T_\infty) L^3}{\nu^2}$.
    *   Calculate Rayleigh Number $Ra = Gr \cdot Pr$.
12. **Predict Heat Transfer Coefficient using Correlations:**
    *   Based on the calculated $Ra$, choose the appropriate correlation for a horizontal cylinder (e.g., laminar or turbulent regime).
    *   Calculate the Nusselt Number ($Nu$) using the correlation.
    *   Calculate the theoretical heat transfer coefficient: $h_{theo} = \frac{Nu \cdot k}{L}$.
13. **Compare and Analyze:**
    *   Compare $h_{exp}$ with $h_{theo}$ for each data point.
    *   Calculate the percentage error: $\text{Error} = \left| \frac{h_{exp} - h_{theo}}{h_{theo}} \right| \times 100\%$.
    *   Plot $h_{exp}$ vs. $(T_s - T_\infty)$ and $h_{theo}$ vs. $(T_s - T_\infty)$ to visualize the comparison.
    *   Discuss reasons for any discrepancies (e.g., accuracy of radiation loss estimation, validity of correlations, experimental errors).

**Course Outcome Alignment:**

*   **CO2:** Directly evaluates the thermal property $h$.
*   **CO1:** Requires obtaining fluid properties for air.

**Reference:** Incropera & DeWitt, Chapter 9: Natural Convection from Surfaces. This chapter provides detailed guidance on correlations and their application.

### 6. Practice Questions and Exercises

**Question 1:** Define free convection and explain the role of buoyancy forces.

**Answer:** Free convection is heat transfer driven by density differences within a fluid, caused by temperature gradients. Buoyancy forces, arising from these density differences, cause the warmer, less dense fluid to rise and the cooler, denser fluid to sink, leading to fluid motion and heat transfer.

**Question 2:** What are the key dimensionless numbers used to characterize free convection, and what physical significance do they represent?

**Answer:**
*   **Grashof Number ($Gr$):** Ratio of buoyancy forces to viscous forces. Indicates the strength of free convection.
*   **Prandtl Number ($Pr$):** Ratio of momentum diffusivity to thermal diffusivity. Relates momentum and thermal boundary layer thicknesses.
*   **Rayleigh Number ($Ra$):** Product of Grashof and Prandtl numbers ($Ra = Gr \cdot Pr$). The primary dimensionless parameter that dictates the flow regime and heat transfer rate in free convection.

**Question 3:** A heated horizontal cylinder with a diameter of 0.05 m and emissivity of 0.8 is submerged in quiescent air at 25°C. The cylinder surface temperature is maintained at 125°C. Calculate the average heat transfer coefficient due to free convection using the appropriate empirical correlation. (Assume properties of air at the film temperature).

**Given:**
*   $D = 0.05$ m ($L = D = 0.05$ m)
*   $\epsilon = 0.8$
*   $T_\infty = 25^\circ$C = 298.15 K
*   $T_s = 125^\circ$C = 398.15 K

**Solution:**

1.  **Film Temperature ($T_f$):**
    $T_f = \frac{T_s + T_\infty}{2} = \frac{125 + 25}{2} = 75^\circ$C = 348.15 K

2.  **Properties of Air at $T_f = 348.15$ K (from property tables, approximate values):**
    *   $\nu = 20.45 \times 10^{-6}$ m²/s (Kinematic viscosity)
    *   $k = 0.0287$ W/m.K (Thermal conductivity)
    *   $Pr = 0.711$ (Prandtl Number)
    *   $\beta = \frac{1}{T_f} = \frac{1}{348.15}$ K⁻¹ $\approx 0.00287$ K⁻¹

3.  **Calculate Grashof Number ($Gr$):**
    $Gr = \frac{g \beta (T_s - T_\infty) L^3}{\nu^2}$
    $Gr = \frac{(9.81 \text{ m/s}^2) (0.00287 \text{ K}^{-1}) (125 - 25)^\circ\text{C} (0.05 \text{ m})^3}{(20.45 \times 10^{-6} \text{ m}^2/\text{s})^2}$
    $Gr = \frac{9.81 \times 0.00287 \times 100 \times (0.05)^3}{(20.45 \times 10^{-6})^2}$
    $Gr \approx \frac{0.2815 \times 1.25 \times 10^{-4}}{4.182 \times 10^{-10}} \approx 8.43 \times 10^6$

4.  **Calculate Rayleigh Number ($Ra$):**
    $Ra = Gr \cdot Pr = (8.43 \times 10^6) \times 0.711 \approx 5.99 \times 10^6$

5.  **Choose Correlation:** Since $10^4 < Ra < 10^9$, the laminar flow correlation for a horizontal cylinder is appropriate:
    $Nu = 0.53 Ra^{1/4}$

6.  **Calculate Nusselt Number ($Nu$):**
    $Nu = 0.53 (5.99 \times 10^6)^{1/4} \approx 0.53 \times 27.83 \approx 14.75$

7.  **Calculate Heat Transfer Coefficient ($h_{theo}$):**
    $h_{theo} = \frac{Nu \cdot k}{L} = \frac{14.75 \times 0.0287 \text{ W/m.K}}{0.05 \text{ m}} \approx 8.46$ W/m².K

**Answer:** The average heat transfer coefficient due to free convection is approximately **8.46 W/m².K**.

**Question 4:** A vertical plate, 1 meter high, is at 100°C in ambient air at 20°C. Estimate the free convection heat transfer coefficient using empirical correlations.

**Given:**
*   $L = 1$ m (height of the plate)
*   $T_s = 100^\circ$C
*   $T_\infty = 20^\circ$C

**Solution:**

1.  **Film Temperature ($T_f$):**
    $T_f = \frac{100 + 20}{2} = 60^\circ$C = 333.15 K

2.  **Properties of Air at $T_f = 333.15$ K (approximate values):**
    *   $\nu = 18.97 \times 10^{-6}$ m²/s
    *   $k = 0.0280$ W/m.K
    *   $Pr = 0.713$
    *   $\beta = \frac{1}{333.15}$ K⁻¹ $\approx 0.00300$ K⁻¹

3.  **Calculate Grashof Number ($Gr$):**
    $Gr = \frac{g \beta (T_s - T_\infty) L^3}{\nu^2}$
    $Gr = \frac{(9.81) (0.00300) (100 - 20) (1)^3}{(18.97 \times 10^{-6})^2}$
    $Gr = \frac{9.81 \times 0.00300 \times 80 \times 1}{(18.97 \times 10^{-6})^2}$
    $Gr \approx \frac{2.3544}{3.60 \times 10^{-10}} \approx 6.54 \times 10^9$

4.  **Calculate Rayleigh Number ($Ra$):**
    $Ra = Gr \cdot Pr = (6.54 \times 10^9) \times 0.713 \approx 4.66 \times 10^9$

5.  **Choose Correlation:** Since $Ra > 10^9$, the turbulent flow correlation for a vertical plate is appropriate:
    $Nu = 0.10 Ra^{1/3}$

6.  **Calculate Nusselt Number ($Nu$):**
    $Nu = 0.10 (4.66 \times 10^9)^{1/3} \approx 0.10 \times 1642.4 \approx 164.24$

7.  **Calculate Heat Transfer Coefficient ($h_{theo}$):**
    $h_{theo} = \frac{Nu \cdot k}{L} = \frac{164.24 \times 0.0280 \text{ W/m.K}}{1 \text{ m}} \approx 4.60$ W/m².K

**Answer:** The free convection heat transfer coefficient for the vertical plate is approximately **4.60 W/m².K**.

### 7. Important Points to Remember

*   **Steady State:** Ensure the system has reached steady state before taking measurements.
*   **Fluid Properties:** Always evaluate fluid properties at the film temperature ($T_f = (T_s + T_\infty)/2$).
*   **Characteristic Length:** Correctly identify the characteristic length ($L$) for the given geometry when using correlations.
*   **Radiation Losses:** For accurate experimental determination of $h$, radiation losses must be considered and accounted for, especially at higher temperatures.
*   **Emissivity:** The emissivity of the surface is critical for calculating radiation losses.
*   **Assumptions:** Be aware of the assumptions made when using empirical correlations (e.g., nature of fluid, range of dimensionless numbers, geometry).
*   **Ideal Gas Assumption for Air:** For air, $\beta = 1/T_f$ is a valid approximation.
*   **Units:** Maintain consistent units throughout all calculations.
*   **Comparison:** Comparing experimental results with theoretical correlations helps validate the understanding and experimental accuracy.

This comprehensive set of notes covers the fundamental principles, experimental procedures, and theoretical correlations relevant to determining heat transfer coefficients in free convection, aligning with the learning outcomes and course objectives of Thermal Engineering Lab-1.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
