---
title: "Wind tunnel types, measurement of velocity, pressure, and temperature."
subject: "COMPRESSIBLE FLUID FLOW"
module: "Module 4: Irreversible discontinuity in supersonic flow: Development of shock wave, types of shock waves, governing equations, strength of shock waves, normal Shock on T"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf48044637e3"
status: "completed"
scrapedAt: "2026-05-20T18:03:39.520Z"
---
# Module 4: Irreversible Discontinuity in Supersonic Flow - Wind Tunnels and Flow Property Measurement

## Introduction

This module delves into the fascinating world of supersonic flow, specifically focusing on the abrupt changes that occur when flow properties jump discontinuously across shock waves. We will explore the types of shock waves, the fundamental equations governing their behavior, how to quantify their strength, and the specific case of normal shocks. Crucially, to study these phenomena, we rely on sophisticated experimental tools: **wind tunnels**. This section will introduce various wind tunnel types and the essential techniques for measuring key flow properties like velocity, pressure, and temperature in such high-speed regimes.

## Wind Tunnel Types

Wind tunnels are essential experimental facilities used to study the effects of air moving over a solid object. In the context of compressible fluid flow, and particularly supersonic flow, specialized designs are required.

**Key Concept:** A wind tunnel essentially reverses the flow: instead of an object moving through still air, air moves through a stationary channel.

### Classification of Wind Tunnels

Wind tunnels can be broadly classified based on their **mode of operation** and **flow characteristics**.

#### Based on Mode of Operation:

*   **Closed-circuit (or Continuous Flow) Wind Tunnels:**
    *   **Description:** Air circulates continuously in a closed loop. The air is driven by a large fan or compressor.
    *   **Advantages:**
        *   Good control over flow conditions (pressure, temperature, humidity).
        *   Reduced noise pollution.
        *   No need for external atmosphere, saving on compressed air costs.
    *   **Disadvantages:**
        *   High initial cost due to the complex circuit and powerful drive system.
        *   Significant power consumption.
        *   Potential for temperature rise due to viscous dissipation, requiring cooling systems.
    *   **Subtypes:**
        *   **Atmospheric:** Operate at ambient atmospheric pressure.
        *   **Pressurized:** Operate at pressures above or below atmospheric, allowing for higher Mach numbers and better Reynolds number simulation.
    *   **Textbook Reference:** Shapiro (1977) discusses continuous flow tunnels in detail, emphasizing their application in achieving stable and controlled flow conditions. Yahya (2023) also covers these designs, highlighting their efficiency for prolonged testing.

*   **Open-circuit Wind Tunnels:**
    *   **Description:** Air is drawn from the atmosphere, passed through the test section, and then discharged back into the atmosphere.
    *   **Advantages:**
        *   Simpler design and lower initial cost.
        *   Less power consumption compared to closed-circuit tunnels of similar size.
    *   **Disadvantages:**
        *   Limited to subsonic or low supersonic Mach numbers due to energy losses.
        *   Noisy operation.
        *   Flow conditions are subject to ambient atmospheric variations.
        *   Require a source of compressed air or a powerful fan to maintain flow.
    *   **Subtypes:**
        *   **Suction Type:** Air is drawn through the test section by a fan or vacuum pump.
        *   **Blower Type:** Air is pushed through the test section by a fan.
    *   **Textbook Reference:** Rathakrishnan (2021) provides insights into the simpler open-circuit designs, often used for introductory compressible flow experiments.

#### Based on Flow Characteristics (Mach Number):

*   **Subsonic Wind Tunnels:** Designed for Mach numbers less than 1. (M < 1)
*   **Transonic Wind Tunnels:** Designed for Mach numbers around 1 (0.8 < M < 1.2). These are complex as they involve regions of both subsonic and supersonic flow, and often shock waves.
*   **Supersonic Wind Tunnels:** Designed for Mach numbers greater than 1 (M > 1). These are crucial for studying shock waves.
    *   **Description:** Typically employ a **convergent-divergent (C-D) nozzle** to accelerate the flow to supersonic speeds. The test section is placed in the divergent section.
    *   **Types of Supersonic Tunnels:**
        *   **Blowdown Tunnels:** A large reservoir of high-pressure air is released through the C-D nozzle and test section to atmospheric pressure. They provide high-quality supersonic flow for short durations.
            *   **Advantages:** Can achieve very high Mach numbers and Reynolds numbers.
            *   **Disadvantages:** Limited run time, high cost of compressed air storage and maintenance.
            *   **Textbook Reference:** Anderson (2021) extensively discusses blowdown tunnels and their role in supersonic research.
        *   **Indraft (or Vacuum) Tunnels:** Air is drawn from the atmosphere through the C-D nozzle and test section into a large vacuum tank.
            *   **Advantages:** Longer run times than blowdown tunnels, no need for high-pressure storage.
            *   **Disadvantages:** Requires a powerful vacuum pump and large vacuum tanks, potential for moisture ingress.
            *   **Textbook Reference:** Yahya (2023) explores the principles behind indraft tunnels and their operational advantages.
        *   **Intermittent-Supersonic Tunnels (Ludwieg Tube):** A long tube filled with compressed air. A diaphragm at one end ruptures, creating a shock wave that travels down the tube, and the flow in the test section is established by the rarefaction wave following the initial shock.
            *   **Advantages:** Relatively simple, good for parametric studies.
            *   **Disadvantages:** Limited run time, characteristic length scale of the tube influences flow.
            *   **Textbook Reference:** Liepmann & Roshko (2002) provide historical context and analysis of Ludwieg tubes.

*   **Hypersonic Wind Tunnels:** Designed for Mach numbers greater than 5 (M > 5). These often use specialized methods like heated air or arc-heated tunnels to achieve the necessary high temperatures and velocities.

**Diagrammatic Representation (Conceptual):**

```
       [Drive System] ---> [Settling Chamber] ---> [Converging Section] ---> [Throat] ---> [Diverging Section (Test Section)] ---> [Diffuser] ---> [Exhaust/Return]
       (Fan/Compressor/Reservoir)                               (C-D Nozzle)                                 (To atmosphere or return circuit)
```

---

## Measurement of Flow Properties

Accurate measurement of flow properties in wind tunnels is crucial for validating theoretical models and understanding aerodynamic phenomena.

### 1. Measurement of Velocity

Direct measurement of velocity in supersonic flow is challenging. Velocity is often inferred from other measured properties like pressure, temperature, and Mach number. However, specialized probes are used.

*   **Pitot-Static Tube (Stagnation Tube):**
    *   **Description:** A tube with an opening facing the flow direction measures the stagnation pressure ($P_0$), and static ports perpendicular to the flow measure the static pressure ($P$).
    *   **Principle:** Based on Bernoulli's equation in compressible flow. For subsonic flow, $P_0 = P + \frac{1}{2}\rho V^2$. For supersonic flow, the flow *slows down to sonic speed* at the tube opening and then further to stagnation before entering the tube, creating a shock wave inside the tube if the external flow is supersonic. Therefore, direct application of the subsonic Bernoulli equation is incorrect.
    *   **Supersonic Measurement:** A Pitot tube in supersonic flow measures the **pitot pressure** ($P_{02}$), which is the stagnation pressure *after* a normal shock forms at the tube's entrance.
        *   **Governing Equation (Rankine-Hugoniot):** The relationship between upstream (supersonic) static pressure ($P_1$) and pitot pressure ($P_{02}$) for a normal shock is complex and derived from conservation laws.
        *   $P_{02}/P_1$ is a function of upstream Mach number ($M_1$). This relationship is tabulated or can be calculated using the normal shock relations.
        *   Once $P_{02}/P_1$ is known (by measuring $P_{02}$ and $P_1$), $M_1$ can be determined.
        *   Velocity ($V_1$) is then calculated using $V_1 = M_1 a_1$, where $a_1$ is the local speed of sound ($\sqrt{\gamma R T_1}$).
    *   **Important Note:** The Pitot tube measurement in supersonic flow is sensitive to misalignment.
    *   **Textbook Reference:** Shapiro (1977) provides detailed derivations of Pitot tube behavior in supersonic flow, including the Rankine-Hugoniot relations. Yahya (2023) offers practical aspects of using Pitot tubes.

*   **Hot-Wire Anemometer (HWA) / Hot-Film Anemometer:**
    *   **Description:** A thin wire or film is heated electrically. As fluid flows over it, heat is lost by convection, changing its resistance.
    *   **Principle:** The convective heat loss is related to the velocity of the fluid.
    *   **Application:** Can be used for velocity measurements, but requires calibration and is sensitive to fluid temperature changes and turbulence. Less common for direct supersonic velocity measurement compared to pressure-based methods but useful for turbulence studies.
    *   **Textbook Reference:** Rathakrishnan (2021) discusses anemometry techniques and their limitations in compressible flow.

*   **Laser Doppler Velocimetry (LDV) / Particle Image Velocimetry (PIV):**
    *   **Description:** Optical techniques that measure the velocity of small tracer particles seeded in the flow. LDV measures velocity at a point, while PIV measures velocity fields over an area.
    *   **Advantages:** Non-intrusive, can measure velocity in complex flow fields, including those with shocks.
    *   **Application:** Essential for detailed aerodynamic studies in supersonic wind tunnels.
    *   **Textbook Reference:** Anderson (2021) highlights the importance of non-intrusive measurement techniques like LDV and PIV in modern aerodynamic research.

### 2. Measurement of Pressure

Pressure is a fundamental parameter in compressible flow and is relatively easier to measure with high accuracy.

*   **Static Pressure Taps:**
    *   **Description:** Small holes drilled flush with the wall of the wind tunnel. The pressure measured is the static pressure ($P$) of the fluid at that point.
    *   **Application:** Used to determine the pressure distribution along the tunnel walls, in the test section, and across shock waves.
    *   **Important Note:** The diameter of the tap must be small compared to the boundary layer thickness, and the edges must be sharp and smooth to avoid errors.
    *   **Textbook Reference:** Shapiro (1977) discusses the practical considerations for installing pressure taps and minimizing errors.

*   **Manometers:**
    *   **Description:** U-shaped tubes containing a liquid (e.g., mercury, water, oil). The difference in liquid levels indicates the pressure difference.
    *   **Application:** Primarily used for measuring pressure differences in low-speed flows or for calibrating other pressure sensors. In supersonic tunnels, they are often used for measuring reservoir pressure, tunnel pressure, and differences between static and stagnation pressures.
    *   **Textbook Reference:** Yahya (2023) covers basic pressure measurement devices like manometers.

*   **Pressure Transducers (Strain Gauge, Capacitance, Piezoelectric):**
    *   **Description:** Electronic devices that convert pressure into an electrical signal.
    *   **Advantages:** Can measure a wide range of pressures, provide real-time readings, and are suitable for dynamic pressure measurements.
    *   **Application:** Widely used in modern wind tunnels for continuous data acquisition.
    *   **Important Note:** Calibration is essential for accuracy.
    *   **Textbook Reference:** Rathakrishnan (2021) explains the working principles of various pressure transducers.

*   **Pitot-Static Tube:** As discussed under velocity, it also measures static pressure ($P$).

### 3. Measurement of Temperature

Temperature measurement in high-speed flows can be challenging due to kinetic heating effects.

*   **Total Temperature Probe (Stagnation Temperature Probe):**
    *   **Description:** A shielded probe designed to measure the temperature of the air brought to rest (stagnation temperature, $T_0$).
    *   **Principle:** Measures the temperature of the fluid after it has been adiabatically brought to rest. For isentropic stagnation, $T_0$ remains constant. However, viscous effects and radiation can influence the reading.
    *   **Application:** Crucial for determining the stagnation enthalpy and isentropic conditions of the flow.
    *   **Formula:** $T_0 = T(1 + \frac{\gamma-1}{2}M^2)$. This allows calculation of Mach number if $T_0$ and $T$ are known.
    *   **Textbook Reference:** Shapiro (1977) details the theory and design of stagnation temperature probes.

*   **Thermocouples:**
    *   **Description:** Junction of two dissimilar metals that produces a voltage proportional to temperature.
    *   **Application:** Can be used to measure static temperature ($T$) by placing them flush with the tunnel wall or shielded from direct impact to minimize kinetic heating.
    *   **Important Note:** Kinetic heating must be accounted for when measuring static temperature in high-speed flows, especially with exposed sensors. The probe should be designed to minimize this effect (e.g., by using a fine wire sensor).
    *   **Textbook Reference:** Yahya (2023) covers the principles of thermocouples.

*   **Resistance Temperature Detectors (RTDs) / Thermistors:**
    *   **Description:** Temperature sensors whose electrical resistance changes significantly with temperature.
    *   **Application:** Similar to thermocouples, used for static temperature measurements. RTDs generally offer higher accuracy and stability but are less responsive than thermocouples.
    *   **Textbook Reference:** Rathakrishnan (2021) discusses the application of RTDs and thermistors in fluid mechanics.

*   **Optical Pyrometry:**
    *   **Description:** Non-contact measurement of temperature by detecting thermal radiation emitted by the flow.
    *   **Application:** Used for very high temperatures where physical probes might melt or influence the flow.
    *   **Textbook Reference:** Anderson (2021) mentions optical methods for high-temperature flow diagnostics.

---

## Learning Outcomes Covered:

*   **Understanding of Wind Tunnel Types:** This section covers the classification and operational principles of various wind tunnels, from subsonic to supersonic and hypersonic. (Relates to CO1).
*   **Measurement of Flow Properties:** Detailed explanations of how velocity, pressure, and temperature are measured in wind tunnels, with specific attention to the challenges in supersonic regimes. (Relates to CO1, and indirectly to CO2-CO5 by enabling experimental validation).

---

## Important Points to Remember:

*   **Convergent-Divergent Nozzle:** Essential for generating supersonic flow in wind tunnels.
*   **Pitot Pressure in Supersonic Flow:** Measures stagnation pressure *after* a normal shock.
*   **Non-Intrusive Techniques:** LDV and PIV are critical for accurate measurements without disturbing the flow.
*   **Kinetic Heating:** A significant factor affecting temperature measurements in high-speed flows.
*   **Calibration:** All measurement instruments require rigorous calibration for accurate results.
*   **Mach Meter:** Often derived from Pitot pressure and static pressure, or from temperature measurements, to directly indicate Mach number.

---

## Practice Questions:

1.  **Distinguish between closed-circuit and open-circuit wind tunnels. List one advantage and one disadvantage of each.**
2.  **Why is a convergent-divergent nozzle required to generate supersonic flow?**
3.  **Describe how a Pitot tube functions in subsonic versus supersonic flow. What specific pressure does it measure in supersonic flow?**
4.  **A Pitot tube in a supersonic wind tunnel measures a pitot pressure ($P_{02}$) of 250 kPa. The static pressure ($P_1$) is 100 kPa. Using normal shock tables or calculations (assume you have access to them), estimate the upstream Mach number ($M_1$). What are the implications of this measurement for velocity determination?**
5.  **What are the primary challenges in measuring static temperature in a high-speed supersonic flow? How can these be mitigated?**

---

## Answers to Practice Questions:

1.  **Closed-circuit:** Air recirculates. **Advantage:** Better control over flow conditions (humidity, temperature). **Disadvantage:** High initial cost and power consumption.
    **Open-circuit:** Air flows through once and is exhausted. **Advantage:** Simpler design, lower cost. **Disadvantage:** Limited to lower Mach numbers and susceptible to ambient conditions.

2.  A convergent-divergent nozzle is required to accelerate the flow from subsonic to supersonic speeds. In the convergent section, the flow accelerates to Mach 1 at the throat (sonic condition). In the divergent section, if the pressure ratio across the nozzle is sufficient, the flow continues to accelerate to supersonic speeds (M > 1) because the cross-sectional area is increasing, and the flow is now compressible and behaving differently than in the subsonic convergent section.

3.  **Subsonic flow:** The Pitot tube brings the flow to rest isentropically, and the measured pressure is the true stagnation pressure ($P_0$).
    **Supersonic flow:** A normal shock forms at the tube's entrance. The flow immediately behind the shock is subsonic. The Pitot tube then measures the stagnation pressure *after* this normal shock, referred to as the **pitot pressure** ($P_{02}$). This pressure is lower than the stagnation pressure upstream of the shock ($P_{01}$) due to the irreversibility of the shock process.

4.  **Estimation of $M_1$:**
    We are given $P_{02} = 250$ kPa and $P_1 = 100$ kPa.
    The pressure ratio across the normal shock is $P_{02}/P_1 = 250/100 = 2.5$.
    From normal shock tables (or iterative calculation using Rankine-Hugoniot relations), a ratio of $P_{02}/P_1 = 2.5$ corresponds to an upstream Mach number ($M_1$) of approximately **1.6**.
    *(Note: The exact value depends on the specific table or calculation method. For M=1.6, $P_1/P_{01} \approx 0.197$, $M_2 \approx 0.705$, $P_2/P_1 \approx 2.12$, $P_{02}/P_1 \approx 2.54$. So 1.6 is a good approximation.)*
    **Implications:** Measuring $P_{02}$ and $P_1$ allows us to determine the upstream Mach number $M_1$. Once $M_1$ and $P_1$ are known, along with the stagnation temperature $T_0$ (which can be measured separately), the velocity can be calculated using $V_1 = M_1 a_1 = M_1 \sqrt{\gamma R T_1}$.

5.  **Challenges in measuring static temperature in supersonic flow:**
    *   **Kinetic Heating:** As the flow is brought to rest by a sensor, its kinetic energy is converted into internal energy, increasing the local temperature. A sensor directly exposed to the flow will measure a temperature higher than the actual static temperature of the undisturbed flow.
    *   **Shock Wave Formation:** If the sensor is not perfectly aligned or is blunt, a small shock wave can form around it, further increasing the local temperature.
    *   **Mitigation:**
        *   Use **shielded probes** that minimize the direct impact of the flow on the temperature sensor.
        *   Use very **fine wire sensors** (e.g., fine wire thermocouples) where the thermal boundary layer thickness is small, and the probe's thermal inertia is low, reducing the temperature rise due to kinetic heating.
        *   **Correct for kinetic heating** if the recovery factor of the probe is known.
        *   Measure **total temperature ($T_0$)** and static pressure ($P$) and derive static temperature ($T$) using the isentropic relation: $T = T_0 / (1 + \frac{\gamma-1}{2}M^2)$, where $M$ is found from pressure measurements.

---
This concludes the notes for Wind Tunnel Types and Flow Property Measurement within Module 4. The next sections will delve into the shock waves themselves.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
