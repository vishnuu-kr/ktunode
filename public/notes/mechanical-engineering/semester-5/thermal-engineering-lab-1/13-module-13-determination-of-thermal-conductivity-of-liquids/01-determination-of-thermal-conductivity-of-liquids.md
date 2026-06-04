---
title: "Determination of thermal conductivity of liquids"
subject: "THERMAL ENGINEERING LAB-1"
module: "Module 13: Determination of thermal conductivity of liquids"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf48044636c5"
status: "completed"
scrapedAt: "2026-05-20T18:02:18.249Z"
---
# THERMAL ENGINEERING LAB-1: Module 13 - Determination of Thermal Conductivity of Liquids

## Topic: Determination of Thermal Conductivity of Liquids

**Course Outcomes Addressed:**
*   **CO1:** Measure thermo-physical properties of solid, liquid and gaseous fuels (Knowledge Level: K4) - This lab directly contributes to measuring a thermo-physical property (thermal conductivity) of a liquid.
*   **CO2:** Evaluate thermal properties of materials in conduction, convection and radiation (Knowledge Level: K4) - This lab focuses on evaluating a thermal property (thermal conductivity) in the context of conduction.

### 1. Introduction to Thermal Conductivity

**Key Concept:** Thermal conductivity (k) is a material property that describes its ability to conduct heat. It quantifies how efficiently heat energy is transferred through a material via conduction when there is a temperature gradient.

**Definition:** Thermal conductivity is defined as the rate of heat transfer through a unit thickness of a material per unit area per unit temperature difference.

**Units:**
*   SI Units: W/(m·K) or W/(m·°C)
*   CGS Units: cal/(s·cm·°C)

**Importance in Liquids:**
*   Understanding the thermal conductivity of liquids is crucial in various engineering applications, including:
    *   **Cooling systems:** Efficient heat removal in engines, electronics, and chemical processes.
    *   **Heating systems:** Transferring heat in boilers, heat exchangers, and domestic heating.
    *   **Chemical reactors:** Controlling reaction temperatures.
*   Liquids generally have lower thermal conductivity compared to solids but higher than gases. This is because the molecular spacing and intermolecular forces differ across the phases.

### 2. Theoretical Background

**Heat Conduction (Fourier's Law of Heat Conduction):**
The fundamental law governing heat transfer by conduction is Fourier's Law.

*   **For a plane wall:**
    $$ Q_x = -kA \frac{dT}{dx} $$
    Where:
    *   $Q_x$ = Rate of heat transfer in the x-direction (W)
    *   $k$ = Thermal conductivity of the material (W/(m·K))
    *   $A$ = Area perpendicular to the direction of heat transfer (m²)
    *   $\frac{dT}{dx}$ = Temperature gradient in the x-direction (K/m)

*   **Simplified for steady-state, one-dimensional heat transfer with constant k:**
    $$ Q = kA \frac{\Delta T}{\Delta x} $$
    Or, if considering a thin layer of thickness $\Delta x$:
    $$ Q = kA \frac{(T_1 - T_2)}{\Delta x} $$
    Where:
    *   $T_1$ and $T_2$ are the temperatures on opposite sides of the layer.

**Thermal Conductivity of Liquids:**
*   The thermal conductivity of liquids is influenced by:
    *   **Molecular structure:** The arrangement and bonding of molecules.
    *   **Temperature:** Generally, thermal conductivity of liquids increases with temperature (an exception is water, where it decreases slightly with increasing temperature within a certain range).
    *   **Pressure:** The effect of pressure is usually negligible for liquids.
    *   **Intermolecular forces:** Stronger forces can lead to higher thermal conductivity.

**Reference Material:**
*   **Cengel & Ghajar (Heat Transfer a Practical Approach):** Chapter 2 discusses fundamental heat transfer principles, including conduction and thermal conductivity. They provide typical values for thermal conductivity of various fluids.
*   **Sachdeva (Fundamentals of Engineering, Heat and Mass Transfer):** Chapter 2 covers conduction heat transfer and defines thermal conductivity with its units and influencing factors.
*   **Holman (Heat Transfer):** Chapter 1 and 2 deal with fundamental concepts of heat transfer, including conduction and material properties like thermal conductivity.
*   **Incropera & DeWitt (Fundamentals of Heat and Mass Transfer):** Chapter 2 provides a detailed treatment of conduction, including Fourier's Law and the concept of thermal conductivity for different material types.
*   **Kothandaraman (Fundamentals of Heat and Mass Transfer):** Chapter 1 introduces the basic modes of heat transfer and defines thermal conductivity, discussing its dependence on temperature.

### 3. Experimental Methods for Determining Thermal Conductivity of Liquids

Several methods can be used to determine the thermal conductivity of liquids. We will focus on common laboratory techniques.

#### 3.1. Guarded Hot Plate Method (Modified for Liquids)

This method is a direct application of Fourier's Law. A controlled heat flux is applied to one side of a liquid sample, and the temperature gradient is measured.

**Princ:**
Steady-state, one-dimensional heat conduction through a liquid sample of known geometry and controlled temperature difference.

**Apparatus:**
*   **Heating Element:** Typically a thin electrical heater.
*   **Guard Heater:** Surrounds the main heater to prevent radial heat losses and ensure one-dimensional axial heat flow.
*   **Cooling Surface:** A cold plate maintained at a constant temperature.
*   **Liquid Sample:** Contained between the heater and cooler, with a defined thickness.
*   **Temperature Sensors (Thermocouples/RTDs):** Placed at different locations within the liquid sample to measure temperature.
*   **Power Measurement Device:** To measure the electrical power supplied to the heater.
*   **Micrometer/Calipers:** To measure the thickness of the liquid sample.
*   **Voltmeter and Ammeter:** To measure voltage and current supplied to the heater, to calculate power ($P = VI$).

**Procedure:**
1.  **Setup:** Assemble the apparatus, ensuring the liquid sample is contained between the heated and cooled surfaces with a precise gap (thickness).
2.  **Temperature Control:** Set the temperature of the cooling surface to a desired value.
3.  **Heating:** Apply a known electrical power ($P$) to the central heater. The guard heater is adjusted to match the temperature of the central heater to minimize radial heat losses.
4.  **Steady State:** Allow the system to reach steady state. This is indicated by the temperature readings from the sensors remaining constant over time.
5.  **Measurements:**
    *   Record the electrical power input to the central heater ($P$).
    *   Record the temperatures at two different locations within the liquid sample ($T_1$ and $T_2$).
    *   Measure the distance between these two temperature measurement points ($\Delta x$).
    *   Measure the area ($A$) through which heat is conducted (typically the area of the heater).
6.  **Repeat:** Repeat the experiment for different power inputs or temperature differences.

**Calculation:**
Assuming one-dimensional, steady-state heat conduction, the heat transfer rate ($Q$) through the liquid sample is equal to the power supplied to the central heater ($P$), neglecting losses.

From Fourier's Law:
$$ Q = kA \frac{(T_1 - T_2)}{\Delta x} $$

Rearranging to find thermal conductivity ($k$):
$$ k = \frac{Q \cdot \Delta x}{A \cdot (T_1 - T_2)} $$
Substituting $Q = P$:
$$ k = \frac{P \cdot \Delta x}{A \cdot (T_1 - T_2)} $$

**Example:**
Suppose in an experiment:
*   Power supplied to the heater, $P = 20$ W
*   Area of the heater, $A = 0.01$ m²
*   Thickness of the liquid sample (distance between sensors), $\Delta x = 0.005$ m
*   Temperature at the hot surface, $T_1 = 60$ °C
*   Temperature at the cold surface, $T_2 = 50$ °C

Calculate the thermal conductivity of the liquid:
$$ k = \frac{20 \text{ W} \cdot 0.005 \text{ m}}{0.01 \text{ m}² \cdot (60 \text{ °C} - 50 \text{ °C})} $$
$$ k = \frac{0.1 \text{ W·m}}{0.01 \text{ m}² \cdot 10 \text{ °C}} $$
$$ k = \frac{0.1 \text{ W·m}}{0.1 \text{ m}² \cdot \text{°C}} $$
$$ k = 1.0 \text{ W/(m·°C)} $$

#### 3.2. Coaxial Cylinder (Searle's Method)

This method is suitable for liquids and involves heat transfer through a cylindrical shell.

**Princ:**
Steady-state, radial heat conduction through a liquid confined between two concentric cylinders.

**Apparatus:**
*   **Inner Cylinder (Heated):** A heated tube or cylinder.
*   **Outer Cylinder (Cooled):** A cooled concentric tube or cylinder, with a jacket for circulating coolant.
*   **Liquid Sample:** Fills the annular space between the inner and outer cylinders.
*   **Temperature Sensors:** Thermocouples or RTDs placed at various radial positions in the liquid.
*   **Heating Element:** Located within the inner cylinder.
*   **Cooling System:** For the outer cylinder.
*   **Insulation:** To minimize heat losses from the ends.
*   **Measuring Instruments:** For power input, voltage, current, and temperature.

**Procedure:**
1.  **Setup:** Place the liquid sample in the annular space. Ensure proper insulation of the ends to minimize axial heat losses.
2.  **Temperature Control:** Maintain the outer cylinder at a constant, lower temperature by circulating coolant.
3.  **Heating:** Apply a known electrical power ($P$) to the inner cylinder.
4.  **Steady State:** Allow the system to reach steady state, where temperatures at various radial positions are stable.
5.  **Measurements:**
    *   Record the electrical power input ($P$).
    *   Record temperatures at two radial positions, $T_1$ at radius $r_1$ and $T_2$ at radius $r_2$.
    *   Measure the radii $r_1$ and $r_2$.
    *   Measure the length ($L$) of the heated section.
6.  **Repeat:** Repeat for different power inputs.

**Calculation:**
For radial heat conduction in a hollow cylinder, the heat transfer rate ($Q$) is given by:
$$ Q = \frac{2 \pi k L (T_1 - T_2)}{\ln(r_2/r_1)} $$
Where:
*   $Q$ = Rate of heat transfer (W)
*   $k$ = Thermal conductivity (W/(m·K))
*   $L$ = Length of the cylinder (m)
*   $T_1$ = Temperature at inner radius $r_1$ (°C or K)
*   $T_2$ = Temperature at outer radius $r_2$ (°C or K)
*   $r_1$ = Inner radius (m)
*   $r_2$ = Outer radius (m)

Rearranging to find thermal conductivity ($k$):
$$ k = \frac{Q \ln(r_2/r_1)}{2 \pi L (T_1 - T_2)} $$
Substituting $Q = P$:
$$ k = \frac{P \ln(r_2/r_1)}{2 \pi L (T_1 - T_2)} $$

**Example:**
In a Searle's method experiment:
*   Power input, $P = 30$ W
*   Length of heated section, $L = 0.2$ m
*   Inner radius, $r_1 = 0.02$ m
*   Outer radius, $r_2 = 0.03$ m
*   Temperature at $r_1$, $T_1 = 70$ °C
*   Temperature at $r_2$, $T_2 = 60$ °C

Calculate the thermal conductivity:
$$ k = \frac{30 \text{ W} \cdot \ln(0.03 \text{ m} / 0.02 \text{ m})}{2 \pi \cdot 0.2 \text{ m} \cdot (70 \text{ °C} - 60 \text{ °C})} $$
$$ k = \frac{30 \text{ W} \cdot \ln(1.5)}{1.2566 \text{ m} \cdot 10 \text{ °C}} $$
$$ k = \frac{30 \text{ W} \cdot 0.4054}{12.566 \text{ m} \cdot \text{°C}} $$
$$ k = \frac{12.162 \text{ W}}{12.566 \text{ m} \cdot \text{°C}} $$
$$ k \approx 0.968 \text{ W/(m·°C)} $$

#### 3.3. Transient Methods (Brief Mention)

These methods involve measuring the temperature response of the liquid to a sudden change in heat input. They are often faster but require more complex analysis. Examples include:
*   **Hot-Wire Method:** A thin wire immersed in the liquid is heated, and its temperature rise is monitored.
*   **Laser Flash Method:** A short laser pulse heats one surface of a liquid sample, and the temperature rise on the opposite surface is measured.

**Reference Material:**
*   **Incropera & DeWitt (Fundamentals of Heat and Mass Transfer):** Chapter 11 provides an overview of transient conduction, which is the basis for transient methods.
*   **Holman (Heat Transfer):** Chapter 4 discusses transient heat conduction.

### 4. Sources of Error and Precautions

*   **Heat Losses:** Radial heat losses in guarded hot plate and axial heat losses in coaxial cylinder methods can significantly affect accuracy. Proper insulation and guard heating are crucial.
*   **Temperature Measurement Accuracy:** Calibration of thermocouples/RTDs and their proper placement are important. Ensure good thermal contact.
*   **Geometry Measurement:** Precise measurement of sample thickness ($\Delta x$), area ($A$), radii ($r_1, r_2$), and length ($L$).
*   **Steady-State Attainment:** Ensuring the system has truly reached steady state before taking readings.
*   **Liquid Properties:** The thermal conductivity can vary with temperature. Ensure the temperature range for measurement is consistent with the intended application.
*   **Convection:** In some setups, particularly with larger temperature gradients or vertical arrangements, natural convection can occur, which bypasses pure conduction and leads to erroneous results. This is why methods are designed to minimize convection or operate in a regime where conduction dominates.
*   **Sample Purity:** Impurities in the liquid can alter its thermal conductivity.

**Important Points to Remember:**
*   The experiment should be conducted under **steady-state** conditions.
*   Minimize **heat losses** and ensure **one-dimensional heat flow** as much as possible.
*   Accurate measurement of **geometry and temperatures** is critical.
*   Always use the correct formula based on the **experimental setup**.

### 5. Practice Questions and Answers

**Question 1:**
Define thermal conductivity and state its SI units.

**Answer:**
Thermal conductivity is a material property that quantifies its ability to conduct heat. It is defined as the rate of heat transfer through a unit thickness of a material per unit area per unit temperature difference. The SI unit for thermal conductivity is Watts per meter-Kelvin (W/(m·K)).

**Question 2:**
In a guarded hot plate experiment to determine the thermal conductivity of a liquid, the following data were recorded:
Power supplied to the heater, $P = 15$ W
Area of the heater, $A = 0.008$ m²
Thickness of the liquid sample, $\Delta x = 0.004$ m
Temperature at the hot surface, $T_1 = 65$ °C
Temperature at the cold surface, $T_2 = 55$ °C

Calculate the thermal conductivity of the liquid.

**Answer:**
Using the formula $k = \frac{P \cdot \Delta x}{A \cdot (T_1 - T_2)}$:
$$ k = \frac{15 \text{ W} \cdot 0.004 \text{ m}}{0.008 \text{ m}² \cdot (65 \text{ °C} - 55 \text{ °C})} $$
$$ k = \frac{0.06 \text{ W·m}}{0.008 \text{ m}² \cdot 10 \text{ °C}} $$
$$ k = \frac{0.06 \text{ W·m}}{0.08 \text{ m}² \cdot \text{°C}} $$
$$ k = 0.75 \text{ W/(m·°C)} $$

**Question 3:**
Describe the main principle behind Searle's method for determining the thermal conductivity of liquids.

**Answer:**
Searle's method relies on the principle of steady-state, one-dimensional radial heat conduction through a liquid confined in the annular space between two concentric cylinders. Heat is supplied to the inner cylinder and removed from the outer cylinder, creating a radial temperature gradient. By measuring the heat input and the temperature difference across a known radial thickness, the thermal conductivity can be calculated using Fourier's Law for radial conduction.

**Question 4:**
What are the main sources of error in experiments determining the thermal conductivity of liquids? (List at least three)

**Answer:**
1.  **Heat Losses:** Radial heat losses (e.g., in guarded hot plate) or axial heat losses (e.g., in Searle's method).
2.  **Temperature Measurement Errors:** Inaccurate calibration of sensors or poor thermal contact.
3.  **Convection Currents:** Unwanted heat transfer by convection that can dominate over conduction.
4.  **Geometry Measurement Errors:** Inaccurate measurement of dimensions like thickness, area, or radii.
5.  **Failure to Reach Steady State:** Taking measurements before thermal equilibrium is established.

### 6. Learning Outcomes Check

*   **Outcome 1:** Measure thermo-physical properties of solid, liquid and gaseous fuels (Knowledge Level: K4).
    *   This module directly addresses measuring a thermo-physical property (thermal conductivity) of a liquid, enabling students to perform and analyze such measurements.
*   **Outcome 2:** Evaluate thermal properties of materials in conduction, convection and radiation (Knowledge Level: K4).
    *   This module focuses on evaluating a specific thermal property (thermal conductivity) within the context of conduction heat transfer, fulfilling the requirement of evaluating thermal properties of materials.

### 7. Conclusion

The determination of thermal conductivity of liquids is a fundamental experiment in thermal engineering. Understanding the underlying principles of heat conduction and the practical aspects of experimental setup, measurement, and error analysis is crucial for obtaining accurate results. The guarded hot plate and coaxial cylinder methods are standard laboratory techniques that demonstrate the application of Fourier's Law to liquids.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
