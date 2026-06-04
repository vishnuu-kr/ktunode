---
title: "Determination of thermal conductivity of solids (composite wall/metal rod)"
subject: "THERMAL ENGINEERING LAB-1"
module: "Module 11: Determination of thermal conductivity of solids (composite wall/metal rod)"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf48044636c1"
status: "completed"
scrapedAt: "2026-05-20T18:02:16.853Z"
---
# THERMAL ENGINEERING LAB-1: MODULE 11 - DETERMINATION OF THERMAL CONDUCTIVITY OF SOLIDS (COMPOSITE WALL/METAL ROD)

## 1. Introduction to Thermal Conductivity

### 1.1. What is Thermal Conductivity?

Thermal conductivity ($k$) is a material property that quantifies its ability to conduct heat. It is defined as the rate of heat transfer through a unit thickness of the material per unit area per unit temperature difference. In simpler terms, it's a measure of how well a material transfers heat.

*   **High thermal conductivity:** Materials like metals (copper, aluminum) are good conductors of heat, meaning heat flows through them easily.
*   **Low thermal conductivity:** Materials like insulators (wood, foam, air) are poor conductors of heat, meaning they resist heat flow.

### 1.2. Importance in Thermal Engineering

Understanding and measuring thermal conductivity is crucial for:

*   **Designing efficient insulation:** To minimize heat loss or gain in buildings, refrigerators, and industrial processes.
*   **Selecting materials for heat transfer equipment:** Heat sinks, heat exchangers, and boilers require materials with appropriate thermal conductivity.
*   **Analyzing heat transfer in components:** From electronic devices to aerospace structures, predicting heat flow is vital for performance and reliability.

### 1.3. Units of Thermal Conductivity

The SI unit for thermal conductivity is **Watts per meter-Kelvin (W/(m·K))**.

## 2. Mechanisms of Heat Transfer

Thermal conductivity is directly related to heat transfer by **conduction**.

### 2.1. Conduction

Conduction is the transfer of heat through direct contact of particles. In solids, this occurs through:

*   **Lattice vibrations (Phonons):** Atoms in a solid vibrate, and these vibrations are passed on to adjacent atoms, transferring thermal energy.
*   **Free electron movement:** In metals, free electrons carry kinetic energy and move through the material, transferring heat. This is why metals are generally good thermal conductors.

**(Refer to Cengel, Ch. 2; Sachdeva, Ch. 3; Holman, Ch. 2; Incropera & DeWitt, Ch. 2; Kothandaraman, Ch. 3 for detailed explanations on conduction.)**

## 3. Determination of Thermal Conductivity of Solids

This module focuses on experimental methods to determine the thermal conductivity of solid materials, specifically in the form of composite walls and metal rods.

### 3.1. Governing Equation: Fourier's Law of Heat Conduction

Fourier's Law describes the rate of heat transfer by conduction. For one-dimensional steady-state conduction through a plane wall:

$Q = -kA \frac{dT}{dx}$

Where:
*   $Q$ = Rate of heat transfer (Watts, W)
*   $k$ = Thermal conductivity of the material (W/(m·K))
*   $A$ = Area perpendicular to the direction of heat flow (m²)
*   $\frac{dT}{dx}$ = Temperature gradient in the direction of heat flow (K/m)

**Important Note:** The negative sign indicates that heat transfer occurs in the direction of decreasing temperature.

#### 3.1.1. Integrated Form for a Plane Wall

For a composite wall with multiple layers, we can rearrange Fourier's Law and consider temperature drops across each layer. For a simple wall with constant $k$:

$Q = \frac{kA}{L}(T_1 - T_2)$

Where:
*   $L$ = Thickness of the material (m)
*   $T_1$ = Temperature at one surface (°C or K)
*   $T_2$ = Temperature at the other surface (°C or K)

#### 3.1.2. Thermal Resistance Concept

The concept of thermal resistance ($R_{th}$) is analogous to electrical resistance. It represents a material's opposition to heat flow.

$R_{th} = \frac{L}{kA}$

The total heat transfer can then be expressed as:

$Q = \frac{\Delta T}{R_{th}}$

For a composite wall with layers $1, 2, ..., n$:

$Q = \frac{T_{surface,1} - T_{surface,n+1}}{R_{total}} = \frac{T_{surface,1} - T_{surface,n+1}}{\sum_{i=1}^{n} R_{th,i}}$

Where $R_{total} = R_{th,1} + R_{th,2} + ... + R_{th,n}$.

### 3.2. Experimental Setup and Procedure

The general principle involves establishing a steady-state heat flow through a known geometry of the material and measuring the temperature difference across a known section.

#### 3.2.1. Composite Wall Apparatus

**Objective:** To determine the equivalent thermal conductivity of a composite wall formed by different materials.

**Apparatus Components:**

*   **Heater:** Provides a known heat input (often electrical heater).
*   **Test Section:** A composite wall made of two or more materials stacked together (e.g., metal disc + insulating material).
*   **Cooling Arrangement:** A cold plate or cooling fins to remove heat from the other side of the composite wall.
*   **Thermocouples/Temperature Sensors:** Placed at various points across the thickness of each material to measure temperatures.
*   **Power Meter/Ammeter & Voltmeter:** To measure the electrical power input to the heater.
*   **Insulation:** To minimize heat losses to the surroundings.

**Procedure:**

1.  **Assemble the Composite Wall:** Stack the materials (e.g., a metal disc and an insulating disc) ensuring good thermal contact.
2.  **Install Thermocouples:** Place thermocouples at the interfaces between materials and on the outer surfaces.
3.  **Apply Heat:** Turn on the heater and set a specific power input ($Q = V \times I$).
4.  **Start Cooling:** Activate the cooling system to maintain a constant low temperature on the other side.
5.  **Achieve Steady State:** Monitor the temperatures measured by the thermocouples. Steady state is reached when these temperatures no longer change significantly over time (e.g., < 0.1°C change in 5 minutes).
6.  **Record Data:** Once steady state is achieved, record:
    *   Power input to the heater ($Q$).
    *   Temperatures at each thermocouple location ($T_1, T_2, T_3, ...$).
    *   Dimensions of each material layer (thickness $L_1, L_2, ...$ and area $A$).
7.  **Repeat for Different Power Inputs:** Conduct the experiment for a few different heater power settings to verify consistency and obtain more data.

**Calculations:**

1.  **Calculate Heat Input:** $Q = V \times I$ (Watts)
2.  **Calculate Temperature Drop across each layer:** $\Delta T_1 = T_1 - T_2$, $\Delta T_2 = T_2 - T_3$, etc.
3.  **Calculate Thermal Resistance of each layer (if $k$ is known for one material):**
    *   For layer 1 (e.g., metal disc): $R_{th,1} = \frac{L_1}{k_{metal} A}$
    *   For layer 2 (e.g., insulating disc): $R_{th,2} = \frac{L_2}{k_{insulator} A}$
4.  **Calculate Thermal Resistance of each layer (to determine unknown $k$):**
    *   From Fourier's Law, for layer 1: $Q = \frac{k_1 A}{L_1} (T_1 - T_2) \implies k_1 = \frac{Q L_1}{A (T_1 - T_2)}$
    *   From Fourier's Law, for layer 2: $Q = \frac{k_2 A}{L_2} (T_2 - T_3) \implies k_2 = \frac{Q L_2}{A (T_2 - T_3)}$

    *Alternatively, using the resistance concept:*
    *   Total thermal resistance $R_{total} = \frac{T_{surface, hot} - T_{surface, cold}}{Q}$
    *   Then, for layer i: $R_{th,i} = \frac{L_i}{k_i A}$
    *   And $R_{total} = \sum R_{th,i}$

**Example Scenario (Composite Wall):**

Consider a composite wall made of a brass disc ($L_1 = 1 \text{ cm}$, $k_{brass} \approx 120 \text{ W/(m·K)}$) and a bakelite disc ($L_2 = 2 \text{ cm}$). The diameter of the discs is 5 cm. When a heat flux of $5000 \text{ W/m}^2$ is applied, the temperatures are measured as: $T_1$ (surface of brass) = 80°C, $T_2$ (interface) = 65°C, $T_3$ (surface of bakelite) = 40°C. Determine the thermal conductivity of bakelite.

*   Area $A = \pi (d/2)^2 = \pi (0.05/2)^2 = 0.001963 \text{ m}^2$.
*   Heat transfer rate $Q = \text{Heat Flux} \times A = 5000 \text{ W/m}^2 \times 0.001963 \text{ m}^2 = 9.815 \text{ W}$.
*   Temperature drop across brass: $\Delta T_1 = 80°C - 65°C = 15°C$.
*   Temperature drop across bakelite: $\Delta T_2 = 65°C - 40°C = 25°C$.

Using Fourier's Law for the bakelite layer:
$Q = \frac{k_{bakelite} A}{L_2} (T_2 - T_3)$
$9.815 \text{ W} = \frac{k_{bakelite} \times 0.001963 \text{ m}^2}{0.02 \text{ m}} (65°C - 40°C)$
$9.815 = k_{bakelite} \times 0.09815 \times 25$
$k_{bakelite} = \frac{9.815}{0.09815 \times 25} = \frac{9.815}{2.45375} \approx 4.0 \text{ W/(m·K)}$

**(Refer to Sachdeva, Ch. 3 for detailed experimental setups for composite walls.)**

#### 3.2.2. Metal Rod Apparatus (Guarded Hot Plate / Searle's Bar Method)

**Objective:** To determine the thermal conductivity of a homogeneous metal rod.

**Apparatus Components:**

*   **Heated End:** One end of the metal rod is heated, typically by an electrical heater.
*   **Cooled End:** The other end is kept cool, often by circulating water.
*   **Test Section of the Rod:** A uniform section of the rod where temperature measurements are taken.
*   **Guard Heater (Optional but important for accuracy):** A heater surrounding the central section of the rod to prevent radial heat losses and ensure one-dimensional axial heat flow.
*   **Thermocouples:** Placed at several points along the length of the rod at known distances.
*   **Cooling Water Jacket:** For the cooled end.
*   **Power Meter:** To measure the heat input.

**Searle's Bar Method Principle:**

The method involves heating one end of a metal bar and cooling the other. A steady-state temperature distribution is established along the bar. By measuring the temperature gradient ($dT/dx$) and the heat flow rate ($Q$), thermal conductivity can be calculated.

**Procedure:**

1.  **Assemble the Apparatus:** Mount the metal rod horizontally. Ensure the heated end is connected to the heater and the cooled end to the cooling arrangement.
2.  **Place Thermocouples:** Insert thermocouples at known, precisely measured distances along the bar.
3.  **Apply Heat and Cooling:** Start the heater and the cooling water.
4.  **Achieve Steady State:** Monitor the temperatures. Steady state is achieved when all thermocouple readings stabilize.
5.  **Record Data:** Once steady state is reached, record:
    *   Power input to the primary heater ($Q$).
    *   Temperatures at each thermocouple location ($T_1, T_2, T_3, ...$).
    *   Distances between thermocouples ($x_1, x_2, x_3, ...$).
    *   Cross-sectional area of the rod ($A$).
    *   If a guard heater is used, record its power to ensure radial heat loss is minimized (ideally zero).

**Calculations:**

1.  **Calculate Heat Input:** $Q = V \times I$ (Watts). This is the heat flowing through the bar.
2.  **Calculate Temperature Gradient:**
    *   Plot temperature vs. position.
    *   Determine the slope of the linear portion of the temperature profile. This slope represents $\frac{dT}{dx}$.
    *   Alternatively, for a short section between two thermocouples: $\frac{dT}{dx} \approx \frac{T_2 - T_1}{x_2 - x_1}$
3.  **Apply Fourier's Law:**
    $Q = -kA \frac{dT}{dx}$
    Rearranging to find $k$:
    $k = -\frac{Q}{A \frac{dT}{dx}}$

    Since heat flows from higher to lower temperature, if $x_2 > x_1$, then $T_2 < T_1$, making $(T_2 - T_1)$ negative. The negative sign in Fourier's Law accounts for this.

    $k = \frac{Q}{A \left( \frac{T_1 - T_2}{x_2 - x_1} \right)}$

    Where:
    *   $Q$ is the measured heat flow rate.
    *   $A$ is the cross-sectional area of the rod.
    *   $(T_1 - T_2)$ is the temperature difference between two points.
    *   $(x_2 - x_1)$ is the distance between these two points.

**Example Scenario (Metal Rod - Searle's Bar):**

A copper rod of 2 cm diameter and 1 m length is used in a Searle's bar experiment. The temperatures at points 20 cm apart along the rod are measured as follows:
*   Point A (0.2 m from heated end): $T_A = 90°C$
*   Point B (0.4 m from heated end): $T_B = 75°C$

The heat input to the rod is measured as 25 W. Determine the thermal conductivity of copper.

*   Area $A = \pi (d/2)^2 = \pi (0.02/2)^2 = 0.000314 \text{ m}^2$.
*   Temperature difference $\Delta T = T_A - T_B = 90°C - 75°C = 15°C$.
*   Distance between points $\Delta x = 0.4 \text{ m} - 0.2 \text{ m} = 0.2 \text{ m}$.

Using the formula for thermal conductivity:
$k = \frac{Q}{A \left( \frac{T_A - T_B}{x_B - x_A} \right)}$
$k = \frac{25 \text{ W}}{0.000314 \text{ m}^2 \left( \frac{90°C - 75°C}{0.4 \text{ m} - 0.2 \text{ m}} \right)}$
$k = \frac{25}{0.000314 \left( \frac{15}{0.2} \right)}$
$k = \frac{25}{0.000314 \times 75}$
$k = \frac{25}{0.02355} \approx 1061.3 \text{ W/(m·K)}$

**Note:** The actual thermal conductivity of copper is around 400 W/(m·K). The significantly higher value in this example indicates potential issues such as significant radial heat losses or inaccurate measurements in a hypothetical experiment. Real experiments require careful control of conditions.

**(Refer to Holman, Ch. 3; Sachdeva, Ch. 3; Kothandaraman, Ch. 3 for detailed discussion on guarded hot plate and Searle's bar methods.)**

## 4. Factors Affecting Thermal Conductivity

*   **Material Type:** As discussed, metals have high $k$, insulators have low $k$.
*   **Temperature:** Thermal conductivity of most solids varies with temperature. For metals, it generally decreases with increasing temperature, while for insulators, it often increases.
*   **Phase:** Thermal conductivity can differ between solid, liquid, and gaseous phases of a substance.
*   **Density:** For some materials (e.g., ceramics, polymers), density can influence thermal conductivity.
*   **Impurities and Alloying:** The presence of impurities or alloying elements can alter the thermal conductivity of a base material.
*   **Microstructure:** Crystal structure, grain boundaries, and porosity can affect heat transfer.

## 5. Important Points to Remember

*   **Steady State:** Ensure steady-state conditions are achieved before taking any readings. This means temperatures at all points are constant.
*   **One-Dimensional Heat Flow:** Minimize radial heat losses in rod experiments and ensure the heater and cooler are across the entire cross-section to promote one-dimensional flow. Guard heaters are crucial for this.
*   **Good Thermal Contact:** For composite walls, ensure intimate contact between layers to minimize interfacial thermal resistance.
*   **Accurate Measurement:** Precise measurement of temperatures, distances, and power is critical for accurate determination of thermal conductivity.
*   **Units:** Consistently use SI units (Watts, meters, Kelvin/Celsius, m²).

## 6. Alignment with Course Outcomes (COs)

*   **CO1: Measure thermo-physical properties of solid, liquid and gaseous fuels (Knowledge Level: K4)**
    *   This module directly deals with measuring a thermo-physical property (thermal conductivity) of solids. The experimental procedures involve measurements of temperature, distance, voltage, and current, which are fundamental to characterizing material properties. (K4 - Analysis/Evaluation)

*   **CO2: Evaluate thermal properties of materials in conduction, convection and radiation (Knowledge Level: K4)**
    *   This module specifically focuses on thermal conductivity, a key property governing **conduction**. The experiments are designed to isolate and measure heat transfer by conduction through solid materials. (K4 - Analysis/Evaluation)

*   **CO3: Analyse the performance of heat exchangers and heat pipes (Knowledge Level: K4)**
    *   While this module doesn't directly analyze heat exchangers or heat pipes, understanding the thermal conductivity of materials used in their construction (e.g., fins, tube walls, wick structures) is fundamental to analyzing their performance. Efficient heat transfer in these devices heavily relies on materials with appropriate thermal conductivity. (K4 - Analysis/Evaluation through foundational knowledge)

*   **CO4: Measure solar radiation (Knowledge Level: K4)**
    *   This module is not directly related to measuring solar radiation. However, understanding thermal properties like conductivity is crucial for analyzing how materials absorb and transfer solar energy, which is a separate topic but benefits from this foundational knowledge.

## 7. Practice Questions and Answers

**Question 1:** Define thermal conductivity and state its SI unit.

**Answer:** Thermal conductivity ($k$) is a material property that quantifies its ability to conduct heat. The SI unit is Watts per meter-Kelvin (W/(m·K)).

**Question 2:** Briefly explain the two main mechanisms of heat conduction in solids.

**Answer:** The two main mechanisms are:
1.  **Lattice vibrations (Phonons):** Vibrations of atoms passed between adjacent atoms.
2.  **Free electron movement:** Movement of free electrons carrying kinetic energy, predominant in metals.

**Question 3:** A composite wall consists of two materials: Material A (thickness $L_A = 0.05$ m, thermal conductivity $k_A = 10$ W/(m·K)) and Material B (thickness $L_B = 0.1$ m, thermal conductivity $k_B = 0.5$ W/(m·K)). The wall has a cross-sectional area of $A = 2$ m². If the temperature on the outer surface of Material A is 100°C and the temperature on the outer surface of Material B is 20°C, calculate the total thermal resistance of the composite wall and the rate of heat transfer through it.

**Answer:**
*   **Thermal resistance of Material A:** $R_{th,A} = \frac{L_A}{k_A A} = \frac{0.05 \text{ m}}{10 \text{ W/(m·K)} \times 2 \text{ m}^2} = \frac{0.05}{20} = 0.0025 \text{ K/W}$.
*   **Thermal resistance of Material B:** $R_{th,B} = \frac{L_B}{k_B A} = \frac{0.1 \text{ m}}{0.5 \text{ W/(m·K)} \times 2 \text{ m}^2} = \frac{0.1}{1} = 0.1 \text{ K/W}$.
*   **Total thermal resistance:** $R_{total} = R_{th,A} + R_{th,B} = 0.0025 + 0.1 = 0.1025 \text{ K/W}$.
*   **Temperature difference:** $\Delta T = 100°C - 20°C = 80°C = 80 \text{ K}$.
*   **Rate of heat transfer:** $Q = \frac{\Delta T}{R_{total}} = \frac{80 \text{ K}}{0.1025 \text{ K/W}} \approx 780.49 \text{ W}$.

**Question 4:** In a Searle's bar experiment, a brass rod of 3 cm diameter has temperatures measured at two points 30 cm apart. The temperatures are $T_1 = 95°C$ at the first point and $T_2 = 80°C$ at the second point. If the heat flow rate through the rod is 40 W, estimate the thermal conductivity of brass. (Assume $k_{brass} \approx 120$ W/(m·K) for comparison).

**Answer:**
*   **Area of the rod:** $A = \pi (d/2)^2 = \pi (0.03/2)^2 = \pi (0.015)^2 = 0.0007068 \text{ m}^2$.
*   **Temperature difference:** $\Delta T = T_1 - T_2 = 95°C - 80°C = 15°C = 15 \text{ K}$.
*   **Distance:** $\Delta x = 30 \text{ cm} = 0.3 \text{ m}$.
*   **Thermal conductivity:** $k = \frac{Q}{A \left( \frac{\Delta T}{\Delta x} \right)} = \frac{40 \text{ W}}{0.0007068 \text{ m}^2 \left( \frac{15 \text{ K}}{0.3 \text{ m}} \right)}$.
*   $k = \frac{40}{0.0007068 \times 50} = \frac{40}{0.03534} \approx 1131.86 \text{ W/(m·K)}$.

**(Note: This high value again suggests potential experimental inaccuracies or significant heat losses in this hypothetical scenario. A real experiment with brass would yield a value closer to 120 W/(m·K). This highlights the importance of accurate experimental procedures.)**

**Question 5:** Why is it important to achieve steady-state conditions before taking measurements in thermal conductivity experiments?

**Answer:** Steady-state conditions mean that the temperature at every point within the material remains constant over time. If conditions are not steady, the temperature gradient will be changing, and Fourier's Law (which assumes a constant gradient) cannot be applied directly to calculate thermal conductivity. Accurate determination of $k$ relies on a stable temperature profile.

---
This comprehensive set of study notes covers the fundamental concepts, experimental methods, calculations, and practical considerations for determining the thermal conductivity of solids (composite walls and metal rods) as per Module 11 of Thermal Engineering Lab-1. The content is aligned with the provided learning and course outcomes, referencing key principles from the specified textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
