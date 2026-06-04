---
title: "Determination of emissivity of a specimen"
subject: "THERMAL ENGINEERING LAB-1"
module: "Module 15: Determination of emissivity of a specimen"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf48044636c9"
status: "completed"
scrapedAt: "2026-05-20T18:02:19.591Z"
---
# THERMAL ENGINEERING LAB-1: Module 15 - Determination of Emissivity of a Specimen

## Topic: Determination of Emissivity of a Specimen

---

### **1. Introduction to Emissivity**

**Definition:** Emissivity ($\epsilon$) is a dimensionless property of a surface that describes its effectiveness in emitting thermal radiation compared to a perfect blackbody at the same temperature. It is defined as the ratio of the thermal radiation emitted by a real surface to the radiation emitted by a blackbody at the same temperature.

Mathematically:
$\epsilon = \frac{\text{Radiation emitted by the real surface}}{\text{Radiation emitted by a blackbody at the same temperature}}$

**Importance:** Emissivity plays a crucial role in understanding and quantifying thermal radiation heat transfer. It influences how much heat a surface loses or gains through radiation, impacting applications like:
*   **Thermal insulation:** Low emissivity surfaces reduce radiative heat loss.
*   **Radiators and heat sinks:** High emissivity surfaces enhance radiative heat dissipation.
*   **Spacecraft thermal control:** Managing radiative heat exchange is critical for temperature regulation.
*   **Solar energy applications:** Absorptivity (closely related to emissivity) is key for solar collectors.

**Blackbody:** A hypothetical object that absorbs all incident electromagnetic radiation, regardless of frequency or angle of incidence. It is also a perfect emitter of radiation, with its emission spectrum and intensity determined solely by its temperature, as described by Planck's Law.

**Graybody:** A surface whose emissivity is independent of wavelength and direction. While most real surfaces are not ideal graybodies, this is often a simplifying assumption in analysis.

**Selective Surface:** A surface whose emissivity (and absorptivity) varies with wavelength.

---

### **2. Theoretical Background of Thermal Radiation**

**(Referencing Cengel, Sachdeva, Holman, Incropera & DeWitt, Kothandaraman)**

Thermal radiation is the energy emitted by matter in the form of electromagnetic waves due to the thermal agitation of its constituent particles. Key principles include:

*   **Stefan-Boltzmann Law:** The total energy radiated per unit surface area of a blackbody per unit time is proportional to the fourth power of the blackbody's absolute temperature.
    $E_b = \sigma T^4$
    where:
    *   $E_b$ is the emissive power of a blackbody (W/m²)
    *   $\sigma$ is the Stefan-Boltzmann constant ($\sigma = 5.67 \times 10^{-8} \, \text{W/m}^2\text{K}^4$)
    *   $T$ is the absolute temperature of the blackbody (K)

*   **Radiation from Real Surfaces:** For a real surface, the emissive power ($E$) is related to the blackbody emissive power by its emissivity ($\epsilon$):
    $E = \epsilon E_b = \epsilon \sigma T^4$
    Here, $\epsilon$ is the **hemispherical total emissivity**, which is the ratio of the total radiation emitted by a real surface to the total radiation emitted by a blackbody at the same temperature.

*   **Radiation Exchange:** When two surfaces at different temperatures exchange radiation, the net heat transfer rate depends on their emissivities, temperatures, and geometry (view factor). The net radiative heat flux between two large, parallel, diffuse surfaces (or a small surface and a large enclosure) is given by:
    $q_{net} = \frac{\sigma(T_1^4 - T_2^4)}{\frac{1}{\epsilon_1} + \frac{1}{\epsilon_2} - 1}$
    For a small surface 1 in a large enclosure 2 at $T_2$, where surface 1 has emissivity $\epsilon_1$ and temperature $T_1$:
    $q_{net} = \epsilon_1 \sigma (T_1^4 - T_2^4)$
    This equation is fundamental to determining emissivity experimentally.

---

### **3. Learning Outcomes Addressed**

This module directly addresses the following learning outcomes:

*   **CO1: Measure thermo-physical properties of solid, liquid and gaseous fuels (Knowledge Level: K4)**
    *   While this experiment focuses on a solid specimen's surface property (emissivity), the underlying principle of measuring a thermal property (emissivity, which is related to radiative heat transfer) is aligned. The K4 level implies application and analysis of these measurements.
*   **CO2: Evaluate thermal properties of materials in conduction, convection and radiation (Knowledge Level: K4)**
    *   This experiment specifically focuses on evaluating a thermal property (emissivity) related to **radiation**. Students will apply their understanding of heat transfer principles (like Stefan-Boltzmann law) to determine this property.
*   **CO3: Analyse the performance of heat exchangers and heat pipes (Knowledge Level: K4)**
    *   Understanding emissivity is crucial for analyzing the radiative heat transfer component in many heat exchangers (e.g., those with large temperature differences or in vacuum). While not directly measuring heat exchanger performance, this experiment provides a fundamental parameter needed for such analysis.
*   **CO4: Measure solar radiation (Knowledge Level: K4)**
    *   Emissivity is closely related to absorptivity ($\alpha$), especially for opaque, diffuse surfaces (Kirchhoff's Law of Radiation: $\epsilon = \alpha$ at thermal equilibrium). Understanding emissivity aids in understanding how surfaces interact with solar radiation (which is a form of thermal radiation).

---

### **4. Experimental Setup and Procedure**

**Objective:** To determine the emissivity ($\epsilon$) of a given specimen.

**Typical Experimental Setup:**

1.  **Specimen:** A small, flat specimen with a known surface area and material.
2.  **Heated Surface:** A controlled heat source to raise the specimen's temperature. This could be a heated plate, a resistance heater, or a heating element embedded in the specimen.
3.  **Temperature Measurement Devices:**
    *   **Thermocouples or RTDs:** Attached to the specimen's surface or embedded within to measure its temperature ($T_s$).
    *   **Temperature Sensor for Ambient/Surroundings:** To measure the temperature of the environment ($T_{amb}$ or $T_{surr}$) with which the specimen exchanges radiation. This could be a thermocouple, IR thermometer, or a sensor measuring the temperature of the surrounding enclosure.
4.  **Power Measurement Device:** To measure the electrical power supplied to the heater ($P$).
5.  **Insulation:** To minimize heat losses by conduction and convection from the specimen and heater, ensuring that the measured power is predominantly dissipated by radiation.
6.  **Optional: IR Camera:** For visualizing and measuring surface temperatures and radiative emissions.
7.  **Optional: Known Blackbody Reference:** For calibration or comparative measurements.

**General Procedure (Common Approach):**

1.  **Preparation:**
    *   Measure the surface area of the specimen ($A$).
    *   Ensure the specimen surface is clean and representative of the material whose emissivity is to be determined.
    *   Attach temperature sensors (e.g., thermocouples) to the specimen to accurately measure its surface temperature ($T_s$).
    *   Place the specimen in the experimental setup, ensuring good thermal contact with the heater and adequate insulation for minimizing non-radiative losses.
    *   Measure the temperature of the surroundings ($T_{surr}$) or the enclosure.

2.  **Heating and Stabilization:**
    *   Apply electrical power ($P$) to the heater to raise the specimen's temperature.
    *   Monitor the specimen temperature ($T_s$) and surrounding temperature ($T_{surr}$).
    *   Allow the system to reach steady-state, where the specimen temperature remains constant over time.

3.  **Data Acquisition:**
    *   At steady-state, record the following values:
        *   Specimen surface temperature, $T_s$ (in K or °C, convert to K for calculations).
        *   Surrounding/ambient temperature, $T_{surr}$ (in K or °C, convert to K for calculations).
        *   Electrical power supplied to the heater, $P$ (Watts).

4.  **Data Collection over a Range of Temperatures:**
    *   Repeat steps 2 and 3 for several different power input levels to obtain data at various specimen temperatures. This is crucial for verifying if emissivity is constant or temperature-dependent.

---

### **5. Calculation of Emissivity**

**(Referencing Cengel, Sachdeva, Holman, Incropera & DeWitt, Kothandaraman)**

The core principle relies on energy balance at steady-state. The electrical power supplied to the heater ($P$) is converted into heat, which is then dissipated from the specimen's surface. Under ideal conditions (perfect insulation), all this heat is lost by radiation.

**Energy Balance Equation:**

At steady state, the electrical power input to the heater is equal to the rate of heat transfer from the specimen's surface. Assuming heat loss is primarily due to radiation to the surroundings:

$P_{total \, input} = Q_{radiation}$

However, in a real experiment, there will always be some heat loss due to convection ($Q_{convection}$) and possibly conduction ($Q_{conduction}$) through wires or mounting supports. Therefore, a more accurate energy balance is:

$P = Q_{radiation} + Q_{convection} + Q_{conduction}$

The objective is to minimize $Q_{convection}$ and $Q_{conduction}$ through good experimental design (insulation, vacuum if possible, careful thermocouple attachment).

**Simplified Calculation (Assuming negligible convection and conduction losses):**

If $Q_{convection}$ and $Q_{conduction}$ are assumed negligible

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
