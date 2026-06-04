---
title: "Cell Module, Thin-Film PV Modules, III–V Single Junction and Multifunction PV Modules-Emerging and New PV Systems -Packing Factor of the PV Module - Efficiency of the PV Module -Energy Balance Equations for PV Modules -Series and Parallel Combination of PV Modules.- Effect of shadowing-MPPT Techniques-P&O , incremental conductance method-Maximum Power Point Tracker (MPPT) using buck-boost converter."
subject: "DESIGN OF SOLAR PV SYSTEMS"
module: "Module 3: Solar PV Systems "
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36a90"
status: "completed"
scrapedAt: "2026-05-23T16:34:32.169Z"
---
## DESIGN OF SOLAR PV SYSTEMS - Module 3: Solar PV Systems - Detailed Study Notes

This module delves into the fundamental building blocks of solar PV systems, from individual cells to modules, and explores various system configurations, performance factors, and optimization techniques.

---

### 1. Solar PV Cells and Modules: The Foundation

This section introduces the basic units of PV systems and their characteristics.

#### 1.1 The Solar PV Cell

*   **Definition:** A photovoltaic cell (or solar cell) is a semiconductor device that converts light energy into electrical energy through the photovoltaic effect.
*   **Photovoltaic Effect:** The phenomenon where a material generates an electric current when exposed to light.
*   **Basic Structure:** Typically consists of a P-N junction formed in a semiconductor material (most commonly silicon).
    *   **P-type semiconductor:** Doped with trivalent impurities (e.g., Boron) creating an excess of holes.
    *   **N-type semiconductor:** Doped with pentavalent impurities (e.g., Phosphorus) creating an excess of electrons.
    *   **P-N Junction:** The interface between P-type and N-type materials, where a depletion region and an electric field are formed.
*   **Operation:**
    1.  When photons with sufficient energy strike the semiconductor, they excite electrons, creating electron-hole pairs.
    2.  The built-in electric field at the P-N junction separates these charge carriers. Electrons are swept to the N-side, and holes are swept to the P-side.
    3.  This separation of charge creates a voltage across the cell.
    4.  When an external circuit is connected, current flows from the N-side to the P-side through the circuit.

**Key Concept:** The P-N junction is crucial for separating the photogenerated charge carriers and establishing an open-circuit voltage.

#### 1.2 Types of PV Modules

Modules are collections of interconnected solar cells designed to deliver a usable voltage and current.

##### 1.2.1 Conventional Crystalline Silicon PV Modules

*   **Monocrystalline Silicon:**
    *   **Structure:** Made from a single crystal of silicon.
    *   **Characteristics:** High efficiency (typically 17-22%), uniform appearance, higher cost.
    *   **Manufacturing:** Grown from a single silicon ingot using the Czochralski method.
    *   **Textbook Reference:** Solanki (Chapter 3) discusses crystalline silicon technologies in detail.
*   **Polycrystalline Silicon (Multicrystalline Silicon):**
    *   **Structure:** Made from multiple silicon crystals melted and cast together.
    *   **Characteristics:** Lower efficiency than monocrystalline (typically 15-19%), visible grain boundaries, lower cost.
    *   **Manufacturing:** Silicon is melted and poured into molds, then cooled.
    *   **Textbook Reference:** Solanki (Chapter 3) also covers polycrystalline silicon.

##### 1.2.2 Thin-Film PV Modules

*   **Definition:** Thin-film PV modules are made by depositing thin layers (micrometers thick) of photovoltaic material onto a substrate.
*   **Advantages:** Lower material usage, potentially lower manufacturing costs, flexibility, lighter weight.
*   **Disadvantages:** Generally lower efficiencies compared to crystalline silicon, degradation can be an issue for some types.
*   **Types:**
    *   **Cadmium Telluride (CdTe):**
        *   **Characteristics:** Most successful thin-film technology, good efficiency (up to 20% in labs), relatively low cost.
        *   **Textbook Reference:** Solanki (Chapter 4) provides a comprehensive overview of thin-film technologies including CdTe.
    *   **Copper Indium Gallium Selenide (CIGS):**
        *   **Characteristics:** High efficiency potential (up to 23% in labs), good performance in diffuse light.
        *   **Textbook Reference:** Solanki (Chapter 4) discusses CIGS.
    *   **Amorphous Silicon (a-Si):**
        *   **Characteristics:** Lower efficiency (6-10%), flexible, good performance in low light and high temperatures.
        *   **Textbook Reference:** Solanki (Chapter 4) details a-Si.

##### 1.2.3 III–V Single Junction and Multifunction PV Modules

*   **III–V Semiconductor Materials:** These are compound semiconductors made from elements in Group III (e.g., Gallium, Indium) and Group V (e.g., Arsenic, Phosphorus) of the periodic table.
*   **III–V Single Junction PV Modules:**
    *   **Characteristics:** Very high efficiencies (often exceeding 25% in terrestrial applications, and even higher in space), high cost.
    *   **Applications:** Space satellites, concentrator photovoltaics (CPV).
    *   **Materials:** Gallium Arsenide (GaAs) is a common material.
    *   **Textbook Reference:** Solanki (Chapter 5) extensively covers III-V solar cells.
*   **Multifunction PV Modules (Tandem/Multi-junction Cells):**
    *   **Concept:** Consist of multiple P-N junctions made from different semiconductor materials with different bandgaps.
    *   **Operation:** Each junction is optimized to absorb a specific portion of the solar spectrum, leading to higher overall conversion efficiency.
    *   **Characteristics:** Highest efficiencies currently achievable (exceeding 40% in labs), extremely high cost, complex manufacturing.
    *   **Applications:** High-performance applications where efficiency is paramount.
    *   **Textbook Reference:** Solanki (Chapter 5) details multi-junction solar cells.

#### 1.3 Emerging and New PV Systems

*   **Perovskite Solar Cells:**
    *   **Characteristics:** Rapidly developing technology, high efficiency potential, low-cost manufacturing, but stability and lead toxicity are challenges.
    *   **Textbook Reference:** Solanki (Chapter 7) likely discusses emerging PV technologies.
*   **Organic Photovoltaics (OPV):**
    *   **Characteristics:** Flexible, lightweight, low-cost potential, but lower efficiencies and shorter lifespan.
    *   **Textbook Reference:** Solanki (Chapter 7) likely discusses emerging PV technologies.
*   **Quantum Dot Solar Cells:**
    *   **Characteristics:** Utilize quantum dots as the light-absorbing material, potential for tunable bandgaps and high efficiencies.
    *   **Textbook Reference:** Solanki (Chapter 7) likely discusses emerging PV technologies.

---

### 2. PV Module Performance Parameters

Understanding these parameters is crucial for assessing the performance and design of PV systems.

#### 2.1 Packing Factor of the PV Module

*   **Definition:** The ratio of the total active area of the solar cells within a module to the total area of the module itself.
*   **Formula:**
    $$ \text{Packing Factor} = \frac{\text{Total Active Cell Area}}{\text{Total Module Area}} $$
*   **Factors Influencing Packing Factor:**
    *   Interconnect ribbons between cells.
    *   Busbars on the cells.
    *   Spacing between cells.
    *   Frame and borders of the module.
*   **Significance:** A higher packing factor means more active cell area is utilized, leading to higher power output for a given module size.
*   **Typical Values:** For crystalline silicon modules, it's typically around 85-90%.

#### 2.2 Efficiency of the PV Module ($\eta$)

*   **Definition:** The ratio of the electrical power output of the PV module to the incident solar power on the module.
*   **Formula:**
    $$ \eta = \frac{P_{out}}{P_{in}} = \frac{P_{out}}{G \times A_{module}} $$
    Where:
    *   $P_{out}$ is the maximum electrical power output of the module (Watts).
    *   $P_{in}$ is the incident solar power on the module (Watts).
    *   $G$ is the incident solar irradiance (W/m²).
    *   $A_{module}$ is the total area of the module (m²).
*   **Standard Test Conditions (STC):** Module efficiency is typically rated under STC:
    *   Irradiance: 1000 W/m²
    *   Cell Temperature: 25 °C
    *   Air Mass: AM 1.5
*   **Textbook Reference:** Solanki (Chapter 2) explains module efficiency and STC. Tiwari (Chapter 3) might also cover performance parameters.

#### 2.3 Energy Balance Equations for PV Modules

This section describes how energy flows through a PV module and the factors affecting its temperature.

*   **Energy Input:** Incident solar radiation ($P_{in}$).
*   **Energy Conversion:** A portion of $P_{in}$ is converted into electrical energy ($P_{electrical}$).
*   **Energy Losses:**
    *   Reflection losses.
    *   Recombination losses (electron-hole recombination).
    *   Resistive losses (in contacts, busbars, and wiring).
    *   Thermalization losses (photons with energy greater than the bandgap lose excess energy as heat).
*   **Energy dissipated as Heat:** The remaining energy that is not converted into electricity is dissipated as heat, leading to an increase in the module's temperature.
*   **Energy Balance Equation (Conceptual):**
    $$ P_{in} = P_{electrical} + P_{losses} $$
    Where $P_{losses}$ includes optical, electrical, and thermal losses.
*   **Temperature Effects:** The efficiency of most PV cells decreases with increasing temperature. This is because increased temperature leads to:
    *   Increased intrinsic carrier concentration.
    *   Reduced bandgap energy.
    *   Increased recombination rates.
    *   Decreased open-circuit voltage ($V_{oc}$) and fill factor, while short-circuit current ($I_{sc}$) increases slightly.
*   **Temperature Coefficient:** Manufacturers provide temperature coefficients for $V_{oc}$, $I_{sc}$, and $P_{max}$. The temperature coefficient of power is typically negative (e.g., -0.4 to -0.5 %/°C for silicon).
*   **Textbook Reference:** Solanki (Chapter 2) discusses the temperature dependence of PV cell performance. Tiwari (Chapter 3) also covers thermal aspects.

---

### 3. PV Module Interconnection and System Configurations

How individual modules are connected to form a PV array.

#### 3.1 Series Combination of PV Modules

*   **Purpose:** To increase the overall voltage of the PV array.
*   **Connection:** The positive terminal of one module is connected to the negative terminal of the next module.
*   **Characteristics:**
    *   **Voltage:** The total voltage of the series string is the sum of the individual module voltages. ($V_{string} = n \times V_{module}$)
    *   **Current:** The current in a series string is limited by the module with the lowest short-circuit current ($I_{string} = I_{module, min}$).
*   **Diagram:**
    ```
    [+]--Module1--[-] [+]--Module2--[-] [+]--Module3--[-] ...
    ```
    The output is taken from the first positive terminal and the last negative terminal.

#### 3.2 Parallel Combination of PV Modules

*   **Purpose:** To increase the overall current of the PV array.
*   **Connection:** The positive terminals of multiple modules are connected together, and the negative terminals are connected together.
*   **Characteristics:**
    *   **Voltage:** The voltage of a parallel string is the same as the voltage of an individual module. ($V_{string} = V_{module}$)
    *   **Current:** The total current of the parallel string is the sum of the individual module currents. ($I_{string} = m \times I_{module}$)
*   **Diagram:**
    ```
    (+)-------Module1-------(-)
     |                       |
    (+)-------Module2-------(-)
     |                       |
    (+)-------Module3-------(-)
    ```
    The output is taken from the common positive and common negative connections.

#### 3.3 Series-Parallel Combination

*   **Purpose:** To achieve desired voltage and current levels for the array.
*   **Configuration:** Modules are connected in series to form strings, and then these strings are connected in parallel.
*   **Design Consideration:** It's crucial to match the electrical characteristics (voltage and current) of modules within a series string to avoid mismatch losses. Modules with similar performance under varying conditions should be paralleled.

**Important Point to Remember:** Mismatch losses can significantly reduce the power output of a PV array. Cells or modules with different electrical characteristics should not be connected in series.

---

### 4. Effect of Shadowing

Shadowing can severely impact the performance of a PV array.

*   **Definition:** When part of a PV module or array is obscured from sunlight, reducing the amount of light incident on the cells.
*   **Types of Shadowing:**
    *   **Partial Cell Shadowing:** A small portion of a cell is shaded.
    *   **Full Cell Shadowing:** An entire cell is shaded.
    *   **Module Shadowing:** An entire module is shaded.
    *   **Bypass Diodes:** Most modern PV modules are equipped with bypass diodes. These diodes are connected in parallel across groups of cells (typically 10-20 cells per diode).
*   **Impact of Shadowing on Series Connected Cells/Modules:**
    *   When a cell or module in a series string is shaded, its current output drops significantly.
    *   Since current in a series string is limited by the lowest output, the shaded cell/module acts as a resistor and can dissipate power as heat, potentially causing "hot spots."
    *   This can lead to a drastic reduction in the overall string current and power output, even if only a small part of the array is shaded.
*   **Role of Bypass Diodes:**
    *   If a cell or group of cells is shaded and its current drops below the current of the shaded group, the bypass diode across that group becomes forward-biased.
    *   The diode bypasses the shaded cells, allowing the rest of the string to continue operating at a higher current.
    *   This prevents the shaded cells from acting as resistors and reduces the risk of hot spots.
*   **Textbook Reference:** Solanki (Chapter 2) discusses the effects of shading and bypass diodes.

**Example:** Consider a string of 3 series-connected modules. If one module is shaded and its current drops to half, the entire string's current will be limited to that lower value, significantly reducing power. If bypass diodes are present, the shaded module might be bypassed, allowing the other two modules to contribute their full current to the string.

---

### 5. Maximum Power Point Tracking (MPPT)

MPPT is essential for extracting the maximum possible power from a PV module under varying conditions.

#### 5.1 Why MPPT is Needed

*   **Non-linear I-V Characteristics:** A PV module's power output is not constant but depends on the load connected to it. It has a unique power-voltage (P-V) curve with a single point where the power output is maximum.
*   **Varying Conditions:** Factors like solar irradiance and temperature constantly change, causing the module's P-V curve to shift.
*   **Load Matching:** Without MPPT, the load connected to the PV module might not always draw power from the maximum power point, leading to energy loss.
*   **Goal of MPPT:** To continuously adjust the electrical load presented to the PV module so that it operates at its Maximum Power Point (MPP).

#### 5.2 Key MPPT Concepts

*   **Maximum Power Point (MPP):** The operating point (voltage $V_{mpp}$ and current $I_{mpp}$) on the PV module's I-V curve where the power output ($P_{max} = V_{mpp} \times I_{mpp}$) is maximized.
*   **Characteristic Curves:**
    *   **I-V Curve:** Current vs. Voltage.
    *   **P-V Curve:** Power vs. Voltage. The MPP is the peak of the P-V curve.

#### 5.3 MPPT Algorithms

These algorithms are implemented in DC-DC converters to adjust the operating point.

##### 5.3.1 Perturb and Observe (P&O) Method

*   **Princ:** This is one of the simplest and most widely used MPPT algorithms. It works by periodically perturbing (changing) the operating voltage of the PV module and observing the effect on the power output.
*   **Algorithm Steps:**
    1.  Start at a known operating voltage $V$.
    2.  Measure the current $I$ and calculate the power $P = V \times I$.
    3.  Perturb the voltage by a small step, $\Delta V$. This means either increasing or decreasing the voltage.
    4.  Measure the new current $I'$ and calculate the new power $P' = (V+\Delta V) \times I'$.
    5.  **Decision Logic:**
        *   If $P' > P$ (power has increased): Move the operating point in the direction of perturbation. Set $V = V + \Delta V$.
        *   If $P' < P$ (power has decreased): Move the operating point in the opposite direction of perturbation. Set $V = V - \Delta V$.
        *   If $P' = P$ (power has remained the same): The system is likely at the MPP, or oscillating around it.
    6.  Repeat steps 2-5 periodically.
*   **Advantages:** Simple to implement, relatively effective.
*   **Disadvantages:**
    *   **Oscillation:** The operating point oscillates around the MPP, especially under steady conditions.
    *   **Slow Response:** Can be slow to track rapid changes in irradiance, especially when the step size $\Delta V$ is small to minimize oscillation. If $\Delta V$ is large, it can overshoot the MPP.
*   **Textbook Reference:** Solanki (Chapter 8) and Tiwari (Chapter 7) discuss MPPT techniques.

##### 5.3.2 Incremental Conductance (IncCond) Method

*   **Princ:** This method utilizes the fact that the slope of the P-V curve is zero at the MPP ($\frac{dP}{dV} = 0$). It also uses the relationship between the derivative of power and the derivative of voltage with respect to current:
    $P = V \times I$
    $\frac{dP}{dV} = V \frac{dI}{dV} + I$
    At MPP, $\frac{dP}{dV} = 0$, so:
    $V \frac{dI}{dV} + I = 0$
    This can be rewritten as:
    $\frac{dI}{dV} = -\frac{I}{V}$
    In terms of conductance ($G = 1/R$) and incremental conductance ($g = dI/dV$):
    $g = -G$
*   **Algorithm Steps:**
    1.  Start at a known operating voltage $V$ and current $I$.
    2.  Calculate the instantaneous conductance $G = I/V$.
    3.  Perturb the voltage by a small step $\Delta V$ and measure the new current $I'$.
    4.  Calculate the incremental conductance $g = (I' - I) / \Delta V$.
    5.  **Decision Logic:**
        *   If $g > 0$ (i.e., $\frac{dI}{dV} > 0$): The operating point is to the left of the MPP. Increase the voltage.
        *   If $g < 0$ (i.e., $\frac{dI}{dV} < 0$): The operating point is to the right of the MPP. Decrease the voltage.
        *   If $g = 0$ (i.e., $\frac{dI}{dV} = -I/V$): The operating point is at the MPP. Keep the voltage constant.
    6.  Repeat steps 1-5 periodically.
*   **Advantages:**
    *   Can converge to the MPP without oscillation, unlike P&O.
    *   Generally faster and more accurate tracking of the MPP, especially under rapidly changing irradiance.
*   **Disadvantages:** More complex to implement due to the need for calculating derivatives or approximations of derivatives.
*   **Textbook Reference:** Solanki (Chapter 8) and Tiwari (Chapter 7) cover this method.

#### 5.4 Maximum Power Point Tracker (MPPT) using Buck-Boost Converter

*   **DC-DC Converters for MPPT:** DC-DC converters are used to interface the PV module with the load (or battery, or grid inverter) and to regulate the voltage and current to achieve the MPP. Common converters include buck, boost, and buck-boost.
*   **Buck-Boost Converter for MPPT:**
    *   **Purpose:** The buck-boost converter can either step up or step down the voltage, making it suitable for a wide range of PV module voltages and load requirements. It can operate in regions where the input voltage is lower, equal to, or higher than the output voltage.
    *   **Operation:** The converter's duty cycle (D) is controlled by the MPPT algorithm. The duty cycle determines the voltage conversion ratio.
        *   For a basic buck-boost converter: $V_{out} = -V_{in} \frac{D}{1-D}$ (inverting).
        *   However, in MPPT applications, the goal is to present an equivalent resistance to the PV module that matches the MPP resistance. The converter's input impedance is controlled by the duty cycle.
    *   **MPPT Control Loop:**
        1.  The MPPT algorithm (e.g., P&O, IncCond) determines the desired operating voltage ($V_{mpp}$) or current ($I_{mpp}$) for the PV module.
        2.  Based on the target MPP voltage, the MPPT algorithm adjusts the duty cycle (D) of the buck-boost converter.
        3.  The buck-boost converter then changes its switching behavior, altering its input impedance to match the PV module to its MPP.
        4.  The PV module's voltage and current are monitored, and this feedback is used by the MPPT algorithm to refine the duty cycle in the next iteration.
*   **Textbook Reference:** Kothari, Jamil (Chapter 6/7 on Power Conditioning) might discuss converter topologies for PV systems. Solanki (Chapter 8) also covers MPPT implementation with converters.

**Example of Buck-Boost MPPT Control:**
Suppose the PV module's MPP is at 18V, and the desired output voltage (e.g., for charging a battery) is 12V. A buck-boost converter with an appropriate duty cycle can achieve this voltage conversion. The MPPT algorithm would continuously monitor the module's voltage and current. If the voltage deviates from 18V, the MPPT algorithm calculates the required change in duty cycle to bring the module back to 18V.

---

### Practice Questions and Exercises

**Question 1:**
Define the packing factor of a PV module and explain its significance. What are the typical factors that influence it?

**Answer 1:**
The packing factor of a PV module is the ratio of the total active area of the solar cells within the module to the total physical area of the module. It signifies how effectively the module's space is utilized for energy conversion. Factors influencing it include interconnect ribbons, busbars, cell spacing, and module frame. A higher packing factor leads to greater power output for a given module size.

**Question 2:**
Describe the effect of shadowing on a series-connected string of PV modules. How do bypass diodes mitigate this effect?

**Answer 2:**
In a series string, shadowing of a single cell or module reduces its current output. Since current is limited by the lowest output in a series connection, the entire string's current drops, and the shaded component can act as a resistor, dissipating power as heat and potentially causing hot spots. Bypass diodes, connected in parallel across groups of cells, become forward-biased when a group is shaded. They provide an alternate path for the current, bypassing the shaded cells and allowing the rest of the string to operate at a higher current, thus minimizing power loss and preventing hot spots.

**Question 3:**
Explain the basic principle of the Perturb and Observe (P&O) MPPT algorithm. What are its main advantages and disadvantages?

**Answer 3:**
The P&O algorithm works by periodically perturbing the operating voltage of the PV module and observing the resulting change in power. If power increases, the perturbation continues in the same direction; if power decreases, the direction is reversed. Advantages include simplicity of implementation. Disadvantages are oscillations around the MPP and slow response to rapid irradiance changes.

**Question 4:**
How does the Incremental Conductance (IncCond) method differ from the Perturb and Observe method in tracking the Maximum Power Point?

**Answer 4:**
The IncCond method uses the relationship $\frac{dI}{dV} = -\frac{I}{V}$ at the MPP. It calculates the instantaneous conductance ($I/V$) and the incremental conductance ($(I' - I)/\Delta V$). It adjusts the voltage based on the sign of the incremental conductance: increase voltage if positive (left of MPP), decrease voltage if negative (right of MPP), and maintain voltage if zero (at MPP). This allows it to converge directly to the MPP without oscillation, unlike P&O.

**Question 5:**
A PV array consists of 4 strings connected in parallel. Each string has 10 modules connected in series. If each module has a nominal voltage of 0.5V and a nominal current of 8A at STC, calculate the approximate open-circuit voltage and short-circuit current of the entire array. Assume no mismatch losses.

**Answer 5:**
*   **Voltage of one string:** $V_{string} = 10 \text{ modules} \times 0.5 \text{ V/module} = 5 \text{ V}$ (open-circuit voltage of the string will be the sum of open-circuit voltages of modules, approximately 0.5V to 0.6V per module, so let's assume open circuit voltage per module is 0.6V for calculation).
    $V_{oc, string} \approx 10 \text{ modules} \times 0.6 \text{ V/module} = 6 \text{ V}$
*   **Current of one string:** $I_{sc, string} \approx 8 \text{ A}$ (limited by the module with the lowest short-circuit current, assuming they are identical).
*   **Array Voltage (parallel connection):** Since the strings are in parallel, the array voltage is the same as the string voltage.
    $V_{oc, array} \approx V_{oc, string} \approx 6 \text{ V}$
*   **Array Current (parallel connection):** The total current is the sum of currents from each parallel string.
    $I_{sc, array} = 4 \text{ strings} \times I_{sc, string} \approx 4 \times 8 \text{ A} = 32 \text{ A}$

Therefore, the approximate open-circuit voltage of the entire array is 6V, and the approximate short-circuit current is 32A.

---

### Important Points to Remember

*   **Efficiency is key:** Understand the factors affecting module efficiency, especially temperature.
*   **Mismatch losses:** Avoid connecting modules with significantly different electrical characteristics in series.
*   **Shadowing:** Be aware of the detrimental effects of shadowing and the role of bypass diodes.
*   **MPPT is crucial:** It ensures maximum energy harvest from the PV system.
*   **Algorithm choice:** Different MPPT algorithms have trade-offs between complexity, accuracy, and tracking speed.
*   **Converter selection:** The DC-DC converter topology (buck, boost, buck-boost) is important for efficient MPPT operation.

---

This comprehensive set of notes covers the essential aspects of Module 3 for the Design of Solar PV Systems, aligning with the provided learning and course outcomes. Refer to the recommended textbooks for more in-depth understanding and detailed examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
