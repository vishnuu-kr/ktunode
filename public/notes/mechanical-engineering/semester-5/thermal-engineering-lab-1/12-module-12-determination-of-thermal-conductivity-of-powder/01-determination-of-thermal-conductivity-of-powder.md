---
title: "Determination of thermal conductivity of powder"
subject: "THERMAL ENGINEERING LAB-1"
module: "Module 12: Determination of thermal conductivity of powder"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf48044636c3"
status: "completed"
scrapedAt: "2026-05-20T18:02:17.553Z"
---
# THERMAL ENGINEERING LAB-1: Module 12 - Determination of Thermal Conductivity of Powder

This module focuses on understanding and experimentally determining the thermal conductivity of powders, a crucial property in various engineering applications.

## 1. Introduction to Thermal Conductivity of Powders

### 1.1 What is Thermal Conductivity?

**Definition:** Thermal conductivity ($k$) is a material property that quantifies its ability to conduct heat. It is defined as the amount of heat transferred per unit time through a unit area of a material per unit temperature gradient.

**Fourier's Law of Heat Conduction:**
$$q = -kA \frac{dT}{dx}$$
where:
*   $q$ is the rate of heat transfer (W)
*   $k$ is the thermal conductivity (W/m·K)
*   $A$ is the area perpendicular to the heat flow (m²)
*   $\frac{dT}{dx}$ is the temperature gradient (K/m)

**Key Concept:** Materials with high thermal conductivity transfer heat more readily than those with low thermal conductivity.

### 1.2 Why is Thermal Conductivity of Powders Important?

Powders are ubiquitous in many industrial processes and products. Their thermal properties significantly influence:

*   **Thermal Insulation:** Many powders are used as insulating materials (e.g., in construction, aerospace).
*   **Heat Transfer in Packed Beds:** In chemical reactors, catalytic converters, and food processing, powders form packed beds where heat transfer is critical for reaction rates and product quality.
*   **Electronic Packaging:** Powders are used as thermal interface materials (TIMs) to fill gaps and improve heat dissipation from electronic components.
*   **Composite Materials:** Powders can be incorporated into matrices to enhance thermal conductivity.
*   **Manufacturing Processes:** Processes like powder metallurgy and additive manufacturing rely on understanding the thermal behavior of powders.

**Example:** In a furnace, refractory bricks made of powdered alumina are used for insulation. The thermal conductivity of the alumina powder directly impacts how much heat is lost from the furnace.

### 1.3 Factors Affecting Thermal Conductivity of Powders

Unlike bulk solids, powders have complex thermal behavior due to the presence of inter-particle voids. The effective thermal conductivity of a powder bed depends on:

*   **Particle Properties:**
    *   **Intrinsic Thermal Conductivity of the Solid Material:** The conductivity of the individual particles.
    *   **Particle Size and Shape:** Affects contact area and void distribution.
    *   **Particle Surface Properties:** Roughness can influence contact.
*   **Inter-Particle Contact:**
    *   **Contact Resistance:** Resistance to heat flow at the points where particles touch. This is a major contributor to the low conductivity of powders.
    *   **Number and Quality of Contacts:** Higher number of contacts generally increases conductivity.
*   **Void Properties:**
    *   **Void Fraction (Porosity):** The volume fraction of empty space between particles. This is a dominant factor.
    *   **Fluid in the Void:** If the voids are filled with a fluid (gas or liquid), the fluid's thermal conductivity and convective properties will play a significant role. Air is a common fluid in powder voids.
*   **Packing Density/Arrangement:** How tightly the powder is packed. Denser packing usually leads to higher thermal conductivity.
*   **Temperature:** Thermal conductivity of both the solid particles and the interstitial fluid can be temperature-dependent.

**Reference:** Cengel's "Heat Transfer: A Practical Approach" (Chapter 2) discusses thermal conductivity of different materials, and while not specific to powders, it lays the foundation for understanding this property in various media. Sachdeva's "Fundamentals of Engineering, Heat and Mass Transfer" also covers conduction in solids and fluids, which are components of powder behavior.

## 2. Experimental Methods for Determining Thermal Conductivity of Powder

Several methods can be used. The choice often depends on the powder type, desired accuracy, and available equipment. We will focus on a common and illustrative method: the guarded hot plate method adapted for powders.

### 2.1 Guarded Hot Plate Method (Adapted for Powders)

This method is based on establishing a steady-state one-dimensional heat flow through a known thickness of the powder sample and measuring the temperature difference across it.

#### 2.1.1 Principle

A known amount of electrical power is supplied to a heater sandwiched between two identical powder samples. Guard heaters surround the main heater to minimize radial heat losses, ensuring that heat flows primarily in one direction through the samples. Temperature sensors are placed at the surfaces of the samples.

#### 2.1.2 Experimental Setup

*   **Main Heater:** A flat electric heater (e.g., resistive wire embedded in a ceramic or mica sheet) with a known surface area ($A$).
*   **Guard Heaters:** Similar heaters surrounding the main heater, controlled to maintain the same temperature as the main heater. This creates an adiabatic condition along the sides of the main heater.
*   **Cold Plates:** Two chilled plates (e.g., circulating coolant) maintained at a constant lower temperature.
*   **Powder Samples:** Two identical samples of the powder to be tested, placed between the main heater and the cold plates. The thickness ($L$) of each sample is precisely measured.
*   **Temperature Sensors:** Thermocouples or RTDs placed at the hot surface (in contact with the heater) and the cold surface (in contact with the cold plate) of each sample.
*   **Power Supply and Measurement:** A DC or AC power supply for the main heater, with meters to measure voltage ($V$) and current ($I$) to calculate the input power ($Q_{in} = V \times I$).
*   **Insulation:** The entire assembly is typically enclosed in insulation to further minimize heat losses to the surroundings.

#### 2.1.3 Procedure

1.  **Sample Preparation:** Ensure the powder is dry and free from moisture. Carefully fill the sample holders or the space between the plates, ensuring uniform packing density. Measure the exact thickness ($L$) and surface area ($A$) of the powder layer.
2.  **Assembly:** Assemble the heater, cold plates, and powder samples carefully. Ensure good thermal contact between the heater/cold plates and the powder.
3.  **Apply Power:** Turn on the power supply to the main heater and the guard heaters. Adjust the guard heater power to match the temperature of the main heater.
4.  **Establish Steady State:** Allow sufficient time for the system to reach steady-state conditions. This is indicated by stable temperature readings from all sensors.
5.  **Measure:** Once steady state is reached, record:
    *   Input power to the main heater ($Q_{in}$).
    *   Hot surface temperature ($T_h$).
    *   Cold surface temperature ($T_c$).
6.  **Calculate Heat Flow:** In an ideal guarded hot plate, the heat generated by the main heater ($Q_{in}$) flows equally through the two powder samples. Therefore, the heat flow through one sample is $Q = Q_{in} / 2$.
    *   **Important Note:** Minor heat losses from the main heater to the surroundings can occur. More advanced setups might have a flux meter or use calibration experiments to account for this. For a basic lab, we often assume $Q \approx Q_{in}/2$.
7.  **Calculate Thermal Conductivity:** Using Fourier's Law for steady-state, one-dimensional heat conduction:
    $$Q = k A \frac{(T_h - T_c)}{L}$$
    Rearranging to find the effective thermal conductivity of the powder:
    $$k = \frac{Q \times L}{A \times (T_h - T_c)}$$

#### 2.1.4 Example Calculation

Suppose in an experiment:
*   Main heater power input ($Q_{in}$) = 50 W
*   Area of the heater ($A$) = 0.01 m²
*   Thickness of each powder sample ($L$) = 0.02 m
*   Hot surface temperature ($T_h$) = 100 °C
*   Cold surface temperature ($T_c$) = 50 °C

**Steps:**

1.  **Heat flow through one sample:** $Q = Q_{in} / 2 = 50 \text{ W} / 2 = 25 \text{ W}$
2.  **Temperature difference:** $\Delta T = T_h - T_c = 100^\circ\text{C} - 50^\circ\text{C} = 50^\circ\text{C}$ (or 50 K)
3.  **Calculate thermal conductivity:**
    $$k = \frac{Q \times L}{A \times \Delta T} = \frac{25 \text{ W} \times 0.02 \text{ m}}{0.01 \text{ m}^2 \times 50 \text{ K}}$$
    $$k = \frac{0.5}{0.5} = 1.0 \text{ W/m·K}$$

**Reference:** Holman's "Heat Transfer" (Chapter 3, Conduction) provides detailed explanations of steady-state conduction and the guarded hot plate method, which can be adapted for powders. Incropera and DeWitt's "Fundamentals of Heat and Mass Transfer" also offers comprehensive coverage of conduction principles and experimental techniques.

### 2.2 Other Methods (Brief Mention)

*   **Transient Methods:** These methods involve measuring the temperature response of the material over time after a sudden change in thermal boundary conditions. They are often faster but can be more complex to analyze. Examples include the hot-wire method (often used for fluids but can be adapted for some powders) and transient plane source (TPS) methods.
*   **Radial Heat Flow Method:** For cylindrical samples, heat can be applied radially, and temperature is measured at different radial positions.

## 3. Learning Outcomes and Course Outcome Alignment

This module directly addresses the following:

### 3.1 Learning Outcomes

*   **Understanding the concept of thermal conductivity:** This is fundamental to the entire module.
*   **Identifying factors affecting thermal conductivity of powders:** Discussed in Section 1.3.
*   **Understanding the principle of the guarded hot plate method:** Explained in Section 2.1.2.
*   **Performing experiments to determine thermal conductivity:** The procedure is outlined in Section 2.1.3.
*   **Calculating thermal conductivity from experimental data:** Demonstrated in Section 2.1.4.
*   **Analyzing experimental results and identifying potential sources of error:** This is a crucial step in any lab experiment.

### 3.2 Alignment with Course Outcomes (COs)

*   **CO1: Measure thermo-physical properties of solid, liquid and gaseous fuels.**
    *   **Alignment:** While this module focuses on powders, the experimental techniques and underlying principles of measuring thermal properties are transferable. Powders can be considered aggregated solids. Measuring $k$ for a powder falls under measuring thermo-physical properties.
    *   **Knowledge Level (K4 - Analyzing):** Students will analyze the factors influencing the measurements and the reliability of the determined property.

*   **CO2: Evaluate thermal properties of materials in conduction, convection and radiation.**
    *   **Alignment:** This module specifically focuses on **conduction** through powders. The effective thermal conductivity determined is a measure of the material's ability to conduct heat. While convection and radiation might contribute to heat transfer within the voids, the primary focus is on the conductive component.
    *   **Knowledge Level (K4 - Analyzing):** Students will analyze how the powder structure (voids, contacts) affects the overall conductive heat transfer.

*   **CO3: Analyse the performance of heat exchangers and heat pipes.**
    *   **Alignment:** Understanding the thermal conductivity of powders is crucial for designing and analyzing systems involving packed beds or powders as thermal interface materials, which are often components within heat exchangers or heat pipes. For instance, the efficiency of a heat exchanger using a porous material will depend on its thermal conductivity.
    *   **Knowledge Level (K4 - Analyzing):** Students can analyze how varying powder properties (and thus thermal conductivity) would impact the performance of such devices.

*   **CO4: Measure solar radiation.**
    *   **Alignment:** This is a less direct alignment. However, solar energy applications often involve powders for selective coatings or as thermal storage media. Understanding their thermal conductivity is important for predicting temperature rise and heat transfer rates in such systems.
    *   **Knowledge Level (K4 - Analyzing):** Analyzing the thermal response of a system involving powders under solar irradiation.

## 4. Practice Questions and Exercises

**Question 1:** Define thermal conductivity and state Fourier's Law of heat conduction.
**Answer:** Thermal conductivity ($k$) is a material property that quantifies its ability to conduct heat. Fourier's Law states that the rate of heat transfer ($q$) through a material is proportional to the negative temperature gradient and the area perpendicular to the gradient: $q = -kA \frac{dT}{dx}$.

**Question 2:** List at least four factors that significantly influence the effective thermal conductivity of a powder.
**Answer:**
1.  Void fraction (porosity)
2.  Intrinsic thermal conductivity of the solid particles
3.  Inter-particle contact resistance
4.  Fluid in the voids (thermal conductivity and convection)
5.  Particle size and shape
6.  Packing density

**Question 3:** In a guarded hot plate experiment for determining the thermal conductivity of a powder, the following data is obtained:
*   Power supplied to the main heater, $Q_{in} = 30$ W
*   Area of the heater, $A = 0.008$ m²
*   Thickness of the powder sample, $L = 0.015$ m
*   Hot surface temperature, $T_h = 80^\circ\text{C}$
*   Cold surface temperature, $T_c = 40^\circ\text{C}$

Calculate the effective thermal conductivity of the powder.

**Answer:**
1.  Heat flow through one sample: $Q = Q_{in} / 2 = 30 \text{ W} / 2 = 15 \text{ W}$
2.  Temperature difference: $\Delta T = T_h - T_c = 80^\circ\text{C} - 40^\circ\text{C} = 40^\circ\text{C}$ (or 40 K)
3.  Calculate thermal conductivity:
    $$k = \frac{Q \times L}{A \times \Delta T} = \frac{15 \text{ W} \times 0.015 \text{ m}}{0.008 \text{ m}^2 \times 40 \text{ K}}$$
    $$k = \frac{0.225}{0.32} = 0.703125 \text{ W/m·K}$$

**Question 4:** Why are guard heaters essential in the guarded hot plate method?
**Answer:** Guard heaters are essential to minimize radial heat losses from the main heater. By maintaining the guard heater at the same temperature as the main heater, a condition of near adiabatic lateral boundaries is created. This ensures that the heat generated by the main heater flows primarily in one direction (axially) through the samples, making the calculation of heat flow ($Q$) more accurate.

**Question 5:** Explain the concept of contact resistance in powders.
**Answer:** Contact resistance is the resistance to heat flow that occurs at the interface between two solid surfaces in contact. In powders, heat must flow from one particle to another through these contact points. Due to microscopic imperfections, gaps, and the presence of interstitial fluid (like air) at the contact points, there is a thermal resistance, which significantly reduces the overall heat transfer compared to a solid block of the same material.

## 5. Important Points to Remember

*   **Effective Thermal Conductivity:** The thermal conductivity measured for a powder is an *effective* thermal conductivity, representing the combined effect of the solid particles, voids, and interstitial fluid.
*   **Steady State:** Ensure the system has reached steady state before taking measurements.
*   **Uniform Packing:** Consistent packing density is crucial for reproducible results.
*   **Heat Loss Minimization:** Guard heaters and proper insulation are vital for accurate measurements.
*   **Temperature Dependence:** The thermal conductivity of powders can be dependent on temperature. Experiments should ideally be conducted over a range of temperatures if this dependence is of interest.
*   **Moisture Content:** Moisture can significantly alter the thermal conductivity of powders, often increasing it due to the higher conductivity of water compared to air. Samples should be kept dry.
*   **Units:** Always be mindful of units (W, m, K, °C) during calculations. For temperature differences, K and °C are interchangeable.

This concludes the study notes for Module 12. By understanding these concepts and principles, you will be well-equipped to conduct experiments and analyze the thermal conductivity of powders in the laboratory.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
