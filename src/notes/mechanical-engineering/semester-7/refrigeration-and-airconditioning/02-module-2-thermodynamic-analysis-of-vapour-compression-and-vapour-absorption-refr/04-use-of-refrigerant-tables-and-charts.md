---
title: "Use of refrigerant tables and charts"
subject: "REFRIGERATION AND AIRCONDITIONING"
module: "Module 2: Thermodynamic analysis of vapour compression and vapour absorption refrigeration systems."
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463f64"
status: "completed"
scrapedAt: "2026-05-20T18:17:13.501Z"
---
Sure, let's get started with comprehensive study notes on the Use of Refrigerant Tables and Charts for your "Refrigeration and Air Conditioning" course.

## Module 2: Thermodynamic Analysis of Vapour Compression and Vapour Absorption Refrigeration Systems

### Topic: Use of Refrigerant Tables and Charts

---

### 1. Introduction and Importance

In the thermodynamic analysis of refrigeration and air conditioning systems, accurately determining the properties of the refrigerant at various stages of the cycle is crucial. Refrigerant tables and charts serve as essential tools for this purpose. They provide tabulated or graphical representations of thermodynamic properties like temperature, pressure, specific enthalpy, specific entropy, specific volume, and quality of refrigerants under different saturation and superheated conditions.

**Key Concepts:**

*   **Thermodynamic Properties:** Properties that define the state of a substance (e.g., pressure, temperature, enthalpy, entropy, specific volume).
*   **Saturation Conditions:** The state where a substance exists as a mixture of liquid and vapor at a constant temperature and pressure.
*   **Superheated Conditions:** The state where a substance exists as a vapor above its saturation temperature at a given pressure.
*   **Quality (x):** The ratio of the mass of vapor to the total mass of the mixture in a saturated liquid-vapor mixture.

**Importance:**

*   **Accurate Performance Evaluation:** Enables precise calculation of work done by the compressor, heat absorbed in the evaporator, heat rejected in the condenser, and consequently, the Coefficient of Performance (COP).
*   **System Design:** Provides data for selecting appropriate operating pressures and temperatures.
*   **Troubleshooting:** Helps identify deviations from ideal performance by comparing actual operating conditions with theoretical values.
*   **Understanding Refrigerant Behavior:** Facilitates learning how refrigerant properties change with varying conditions.

**Textbook References:**

*   **Arora C.P. (2021), Chapter 4 & 5:** Discusses the properties of refrigerants and their thermodynamic behavior, often referencing tables and charts.
*   **Ramesh Chandra Arora (2015), Chapter 3 & 4:** Explains the use of thermodynamic property tables and diagrams for refrigerants.
*   **Arora S.C. and Domkundwar (2018), Chapter 2 & 3:** Provides detailed information on refrigerant properties and their applications in thermodynamic analysis.
*   **Ahamadul Ameen (2020), Chapter 3:** Covers refrigerant properties and their utilization in performance calculations.
*   **Jones W.P. (2001), Chapter 4:** Focuses on the thermodynamic properties of refrigerants and their graphical representation.
*   **Kothandaraman C.P. (2023), Data Book:** This is the primary resource for refrigerant tables and charts.

---

### 2. Types of Refrigerant Tables and Charts

**2.1 Refrigerant Tables**

Refrigerant tables are organized sets of data that list the thermodynamic properties of a specific refrigerant at various conditions. They are typically divided into:

*   **Saturation Tables:** These tables list properties at saturation conditions (liquid and vapor phases coexisting). They are usually organized by either:
    *   **Temperature-based tables:** Property values are listed for various saturation temperatures. For each temperature, saturation pressure, specific volume of saturated liquid ($v_f$), specific volume of saturated vapor ($v_g$), specific enthalpy of saturated liquid ($h_f$), specific enthalpy of vaporization ($h_{fg}$), specific entropy of saturated liquid ($s_f$), and specific entropy of vaporization ($s_{fg}$) are provided.
    *   **Pressure-based tables:** Property values are listed for various saturation pressures. The data presented is similar to temperature-based tables.
*   **Superheated Tables:** These tables list properties for the refrigerant in its superheated vapor state. They are typically organized by pressure, and within each pressure, by temperature. For a given pressure and temperature, values for specific volume ($v$), specific enthalpy ($h$), and specific entropy ($s$) are provided.

**Key Properties Found in Tables:**

*   **Pressure (P):** The pressure at which the refrigerant exists.
*   **Temperature (T):** The temperature at which the refrigerant exists.
*   **Specific Volume (v):** Volume per unit mass ($m^3/kg$).
*   **Internal Energy (u):** Energy stored within the refrigerant ($kJ/kg$).
*   **Enthalpy (h):** Total energy of the refrigerant, $h = u + Pv$ ($kJ/kg$). This is a critical property for analyzing heat transfer.
*   **Entropy (s):** A measure of the disorder of the refrigerant ($kJ/kg \cdot K$). Crucial for analyzing isentropic processes.
*   **Quality (x):** For saturated mixtures, the fraction of vapor.

**Example (Fictional Data for Refrigerant R-134a):**

**Saturation Table (Temperature Basis)**

| T (°C) | P (bar) | $v_f$ ($m^3/kg$) | $v_g$ ($m^3/kg$) | $h_f$ ($kJ/kg$) | $h_{fg}$ ($kJ/kg$) | $s_f$ ($kJ/kg \cdot K$) | $s_{fg}$ ($kJ/kg \cdot K$) |
| :----- | :------ | :-------------- | :-------------- | :------------- | :---------------- | :----------------------- | :------------------------- |
| 0      | 2.92    | 0.000771        | 0.0671          | 190.3          | 160.4             | 0.767                    | 0.584                      |
| 10     | 4.28    | 0.000785        | 0.0455          | 208.8          | 156.2             | 0.832                    | 0.551                      |

**Superheated Table (Example for R-134a at 2 bar)**

| T (°C) | $v$ ($m^3/kg$) | $h$ ($kJ/kg$) | $s$ ($kJ/kg \cdot K$) |
| :----- | :------------ | :----------- | :------------------- |
| 20     | 0.0958        | 220.5        | 0.885                |
| 40     | 0.1084        | 245.3        | 0.972                |

**Textbook References:**

*   **Kothandaraman C.P. (2023), Data Book:** Contains comprehensive tables for various refrigerants.
*   **Arora C.P. (2021), Chapters 4 & 5:** Includes sample tables and their interpretation.

**2.2 Refrigerant Charts (Mollier Charts)**

Refrigerant charts are graphical representations of the thermodynamic properties of a refrigerant. The most common type used in refrigeration is the **Enthalpy-Entropy (h-s) diagram**, also known as the Mollier chart.

**Key Features of an h-s Diagram:**

*   **X-axis:** Entropy (s)
*   **Y-axis:** Enthalpy (h)
*   **Saturation Curves:** Define the boundary between the saturated liquid and saturated vapor regions. The dome-shaped curve represents the saturation region.
*   **Constant Pressure Lines:** Straight vertical lines in the superheated region.
*   **Constant Temperature Lines:** Curve from the saturation region into the superheated region.
*   **Constant Quality Lines (x):** Straight lines originating from the saturated liquid line and extending into the superheated region. They indicate the percentage of vapor in a saturated mixture.
*   **Constant Specific Volume Lines ($v$):** Curve through the superheated region.

**How to Use an h-s Diagram:**

1.  **Locate a state point:** Find the intersection of two known properties (e.g., temperature and pressure, or pressure and quality).
2.  **Read other properties:** From the intersection point, trace horizontally to read enthalpy, vertically to read entropy, and along the appropriate curves to read other properties like quality or specific volume.

**Advantages of h-s Diagrams:**

*   **Visual Representation:** Provides an intuitive understanding of the refrigeration cycle.
*   **Easy Interpolation:** Allows for relatively easy estimation of properties between tabulated values.
*   **Cycle Visualization:** The entire vapour-compression cycle can be plotted on the chart, making it easy to analyze the processes.

**Disadvantages of h-s Diagrams:**

*   **Accuracy:** Less precise than tables, especially for states far from grid lines.
*   **Limited to specific refrigerants:** Each chart is specific to a particular refrigerant.
*   **Space limitations:** Can be bulky to carry and use.

**Example of Cycle Representation on an h-s Diagram:**

1.  **Compressor Inlet (State 1):** Locate on the saturated vapor line or in the superheated region based on evaporator outlet conditions.
2.  **Compressor Outlet (State 2):** Follow a constant entropy (isentropic) line upwards from State 1 until it intersects the constant pressure line corresponding to the condenser pressure.
3.  **Condenser Outlet (State 3):** Follow the constant pressure line downwards until it intersects the saturated liquid line.
4.  **Expansion Valve Outlet (State 4):** Follow a constant enthalpy line horizontally from State 3 to the evaporator pressure.

**Textbook References:**

*   **Kothandaraman C.P. (2023), Data Book:** Includes Mollier charts for various refrigerants.
*   **Arora C.P. (2021), Chapter 5:** Demonstrates the use of h-s diagrams for cycle analysis.
*   **Ramesh Chandra Arora (2015), Chapter 4:** Explains the construction and usage of Mollier charts.
*   **Ahamadul Ameen (2020), Chapter 3:** Illustrates cycle representation on h-s diagrams.
*   **Jones W.P. (2001), Chapter 4:** Provides examples of using charts for thermodynamic analysis.

---

### 3. Interpolation Techniques

When the desired property is not directly listed in the tables, interpolation is used to estimate the value.

**3.1 Linear Interpolation**

This is the most common method. For a desired value 'y' corresponding to an independent variable 'x', when 'x' lies between $x_1$ and $x_2$ with corresponding values $y_1$ and $y_2$:

$y = y_1 + \frac{x - x_1}{x_2 - x_1} \times (y_2 - y_1)$

**Example:**

Find the enthalpy ($h$) of R-134a at 15°C from the temperature-based saturation table (using the fictional data provided earlier).

Given:
*   At 10°C, $h_f = 208.8 kJ/kg$
*   At 20°C, $h_f = 227.3 kJ/kg$ (assuming for illustration)

We want to find $h_f$ at 15°C.
Let $T_1 = 10°C$, $h_{f1} = 208.8 kJ/kg$
Let $T_2 = 20°C$, $h_{f2} = 227.3 kJ/kg$
Desired temperature $T = 15°C$.

$h_f(15°C) = 208.8 + \frac{15 - 10}{20 - 10} \times (227.3 - 208.8)$
$h_f(15°C) = 208.8 + \frac{5}{10} \times (18.5)$
$h_f(15°C) = 208.8 + 0.5 \times 18.5$
$h_f(15°C) = 208.8 + 9.25$
$h_f(15°C) = 218.05 kJ/kg$

**Textbook References:**

*   **Arora C.P. (2021), Chapter 4:** Demonstrates interpolation for property values.
*   **Ramesh Chandra Arora (2015), Chapter 3:** Explains various interpolation methods.
*   **Kothandaraman C.P. (2023), Data Book:** Often includes a brief explanation of interpolation.

---

### 4. Application in Thermodynamic Analysis of Vapour Compression Systems

Refrigerant tables and charts are fundamental for performing the thermodynamic analysis of a vapour compression refrigeration (VCR) cycle. This analysis allows for the evaluation of the system's performance and efficiency.

**Steps for Analysis:**

1.  **Identify Operating Conditions:** Determine the evaporator temperature ($T_e$) and condenser temperature ($T_c$).
2.  **Determine State Points:**
    *   **State 1 (Compressor Inlet):** Typically saturated vapor at the evaporator pressure ($P_e$). Use saturation tables or charts to find $h_1$ and $s_1$.
    *   **State 2 (Compressor Outlet):** Assume isentropic compression ($s_2 = s_1$) to the condenser pressure ($P_c$). Locate this state in the superheated tables or on the h-s diagram using $P_c$ and $s_2$. Read $h_2$.
    *   **State 3 (Condenser Outlet):** Saturated liquid at the condenser pressure ($P_c$). Use saturation tables to find $h_3$.
    *   **State 4 (Expansion Valve Outlet):** Isenthalpic expansion ($h_4 = h_3$). The refrigerant is a low-quality saturated mixture at the evaporator pressure ($P_e$).
3.  **Calculate Cycle Performance Parameters:**
    *   **Refrigerating Effect (RE):** Heat absorbed in the evaporator per unit mass of refrigerant.
        $RE = h_1 - h_4$ ($kJ/kg$)
    *   **Work of Compression (W_c):** Work done by the compressor per unit mass of refrigerant.
        $W_c = h_2 - h_1$ ($kJ/kg$)
    *   **Heat Rejected in Condenser (QR):** Heat rejected in the condenser per unit mass of refrigerant.
        $QR = h_2 - h_3$ ($kJ/kg$)
    *   **Coefficient of Performance (COP_R):** Ratio of refrigerating effect to work of compression.
        $COP_R = \frac{RE}{W_c} = \frac{h_1 - h_4}{h_2 - h_1}$

**Example:**

Consider a vapour compression refrigeration system using R-134a with the following conditions:
*   Evaporator temperature: -10°C
*   Condenser temperature: 40°C
*   Compressor outlet is superheated.

**Using R-134a tables (hypothetical values for demonstration):**

*   **State 1 (Compressor Inlet):** Saturated vapor at -10°C.
    *   Evaporator Pressure ($P_e$) = 2.32 bar (from saturation table)
    *   $h_1$ = 238.6 kJ/kg (from saturation table)
    *   $s_1$ = 0.930 kJ/kg·K (from saturation table)

*   **State 2 (Compressor Outlet):** Isentropic compression to 40°C (Condenser Pressure $P_c$ = 10.17 bar).
    *   $s_2 = s_1 = 0.930$ kJ/kg·K
    *   From superheated tables at $P_c = 10.17$ bar and $s = 0.930$ kJ/kg·K (requires interpolation or reading from chart):
        *   Assume $h_2$ = 275.5 kJ/kg

*   **State 3 (Condenser Outlet):** Saturated liquid at 40°C.
    *   $h_3$ = 107.7 kJ/kg (from saturation table)

*   **State 4 (Expansion Valve Outlet):** Isenthalpic expansion.
    *   $h_4 = h_3 = 107.7$ kJ/kg

**Calculations:**

*   **Refrigerating Effect (RE):**
    $RE = h_1 - h_4 = 238.6 - 107.7 = 130.9 kJ/kg$

*   **Work of Compression (W_c):**
    $W_c = h_2 - h_1 = 275.5 - 238.6 = 36.9 kJ/kg$

*   **Heat Rejected in Condenser (QR):**
    $QR = h_2 - h_3 = 275.5 - 107.7 = 167.8 kJ/kg$

*   **COP_R:**
    $COP_R = \frac{RE}{W_c} = \frac{130.9}{36.9} \approx 3.55$

**Course Outcome Alignment:**

*   **CO3:** "Perform Thermodynamic Analysis of Vapour Compression and Absorption Systems." This topic directly addresses this outcome by showing how to use tables/charts to perform calculations for the VCR cycle. (Knowledge Level: K3, K4)

**Textbook References:**

*   **Arora C.P. (2021), Chapter 5:** Detailed examples of VCR cycle analysis using tables and charts.
*   **Ramesh Chandra Arora (2015), Chapter 4:** Illustrates cycle analysis with specific refrigerant examples.
*   **Arora S.C. and Domkundwar (2018), Chapter 3:** Worked examples of cycle analysis.
*   **Ahamadul Ameen (2020), Chapter 3:** step-by-step guide for cycle analysis.
*   **Jones W.P. (2001), Chapter 4:** Practical application of charts in cycle analysis.

---

### 5. Application in Thermodynamic Analysis of Vapour Absorption Systems

While the core principles of thermodynamic analysis apply, the "refrigerant" and "absorbent" in vapour absorption systems (VAS) have different roles. Often, the analysis focuses on the energy flows and state points of the primary refrigerant (e.g., ammonia, water) and the mixture of refrigerant and absorbent (e.g., ammonia-lithium bromide, water-lithium bromide).

**Key Differences and Considerations for VAS:**

*   **Working Fluids:** VAS often use mixtures (refrigerant-absorbent), which have complex property behavior.
*   **Property Data:** Special tables or charts are required for these mixtures, or specific property calculation software is used.
*   **Processes:** Analysis involves understanding heat inputs to the generator, heat rejected in the condenser and absorber, and heat absorbed in the evaporator.
*   **COP_R (VAS):** $COP_R = \frac{\text{Refrigerating Effect}}{\text{Heat Input to Generator} + \text{Auxiliary Work}}$
*   **State Points:** The analysis involves tracing the states of the refrigerant and the solution through various components like the evaporator, absorber, generator, condenser, and expansion valve.

**How Tables/Charts are Used in VAS:**

*   **Refrigerant (e.g., Ammonia, Water):** Tables/charts for pure refrigerants are used for the evaporator, condenser, and expansion valve states, similar to VCR systems.
*   **Absorbent (e.g., LiBr):** Tables/charts for the absorbent might be used to understand its properties, especially if it's not ideal.
*   **Refrigerant-Absorbent Mixtures:** This is where specialized data is crucial. Tables or charts for binary mixtures (e.g., ammonia-water, LiBr-water) are used to determine properties like enthalpy, entropy, and phase equilibrium (vapor pressure of refrigerant over the solution). These are significantly more complex than pure refrigerant tables.

**Example (Conceptual):**

In an Ammonia-Water absorption system:
*   **Evaporator:** Ammonia absorbs heat, turning from vapor to liquid. Tables for pure ammonia are used.
*   **Absorber:** Ammonia vapor is absorbed by weak Aqua (water-rich solution). The properties of the ammonia-water mixture (enthalpy, temperature, concentration) are critical. Specialized tables or charts for ammonia-water mixtures are needed to determine the heat of absorption and the resulting strong Aqua properties.
*   **Generator:** Heat is supplied to the strong Aqua to vaporize the ammonia. Again, mixture properties are vital here to determine the amount of heat required and the properties of the weak Aqua leaving the generator.

**Textbook References:**

*   **Arora C.P. (2021), Chapter 7:** Might discuss absorption systems and reference the need for specialized property data.
*   **Ramesh Chandra Arora (2015), Chapter 5:** Could provide an introduction to absorption systems and the types of property data needed.
*   **ASHRAE Handbook:** A highly valuable reference for detailed property data of refrigerant-absorbent mixtures.

**Course Outcome Alignment:**

*   **CO3:** "Perform Thermodynamic Analysis of Vapour Compression and Absorption Systems." While this topic focuses on tables and charts, their application to VAS requires specialized data, acknowledging the complexity. (Knowledge Level: K3, K4)

---

### 6. Common Refrigerants and their Data Sources

Different refrigerants have different thermodynamic properties and are suitable for different applications. It's important to know where to find data for common refrigerants.

**Common Refrigerants and Applications:**

*   **R-134a (Tetrafluoroethane):** Widely used in automotive air conditioning, domestic refrigerators, and medium-temperature applications. (CFC-free)
*   **R-410A (A blend of R-32 and R-125):** Common in residential and commercial air conditioning. (HFC blend)
*   **R-717 (Ammonia):** Highly efficient but toxic and corrosive, used in large industrial refrigeration.
*   **R-744 (Carbon Dioxide):** Natural refrigerant, used in cascade systems, heat pumps, and some automotive AC.
*   **R-290 (Propane):** Natural refrigerant, used in domestic refrigerators and some AC units. Flammable.
*   **R-600a (Isobutane):** Common in domestic refrigerators. Flammable.
*   **R-404A:** Used in low and medium-temperature commercial refrigeration. (HFC blend)

**Primary Data Sources:**

*   **Kothandaraman C.P. (2023), Data Book:** This is the most accessible and comprehensive source for a wide range of refrigerants in tables and charts.
*   **ASHRAE Handbooks:** Provide authoritative and detailed property data, especially for newer refrigerants and mixtures.
*   **Manufacturer Data Sheets:** Specific refrigerant manufacturers often provide detailed property data for their products.
*   **Online Property Calculators:** Many websites offer calculators that can determine refrigerant properties based on input conditions.

**Course Outcome Alignment:**

*   **CO4:** "Explain and Select Appropriate Refrigerants and System Components." Understanding refrigerant properties is crucial for selection. This topic directly supports this outcome. (Knowledge Level: K2, K3)

---

### 7. Important Points to Remember

*   **Consistency:** Always use the same set of tables or charts for all state points within a single analysis to ensure consistency.
*   **Units:** Pay close attention to the units used in the tables and charts (e.g., pressure in bar, kPa, or MPa; temperature in °C or K; enthalpy in kJ/kg or J/g).
*   **Saturation vs. Superheated:** Correctly identify whether the refrigerant is in the saturated mixture region or the superheated vapor region to use the appropriate tables.
*   **Quality (x):** If the refrigerant is in the saturated mixture region, the quality is essential for calculating enthalpy and specific volume:
    *   $h = h_f + x \cdot h_{fg}$
    *   $v = v_f + x \cdot v_{fg}$ (where $v_{fg} = v_g - v_f$)
*   **Interpolation Accuracy:** Use linear interpolation for most cases, but be aware of its limitations for highly non-linear property variations.
*   **Mollier Chart Usage:** Practice plotting cycles on the Mollier chart to visualize the energy transfers and work done.
*   **Refrigerant Choice:** The thermodynamic properties of the refrigerant directly impact the system's efficiency and operating conditions.
*   **Absorption Systems:** Recognize the need for specialized property data for refrigerant-absorbent mixtures.

---

### 8. Practice Questions and Exercises

**Question 1:**

A vapour compression refrigeration system uses R-134a. The evaporator operates at -5°C and the condenser at 45°C. Saturated vapor enters the compressor, and saturated liquid leaves the condenser. Assuming isentropic compression, determine:
a) The enthalpy and entropy at the compressor inlet.
b) The pressure and enthalpy at the compressor outlet.
c) The enthalpy at the expansion valve outlet.
d) The refrigerating effect per kg of refrigerant.
e) The work of compression per kg of refrigerant.
f) The coefficient of performance.

*(Hint: Use R-134a tables. Assume appropriate saturation pressures from a table if not given.)*

**Answer 1:**

*(Assuming typical R-134a property values for demonstration. Actual values will depend on the specific table used.)*

*   **Evaporator Temperature:** -5°C
*   **Condenser Temperature:** 45°C

*   **From R-134a Saturation Tables:**
    *   At -5°C: $P_{evap} = 2.43$ bar, $h_1 = 238.5$ kJ/kg, $s_1 = 0.927$ kJ/kg·K
    *   At 45°C: $P_{cond} = 10.77$ bar, $h_3 = 115.0$ kJ/kg

*   **State 1 (Compressor Inlet):**
    a) $h_1 = 238.5$ kJ/kg, $s_1 = 0.927$ kJ/kg·K

*   **State 2 (Compressor Outlet):**
    b) $P_2 = P_{cond} = 10.77$ bar. Assume isentropic compression, $s_2 = s_1 = 0.927$ kJ/kg·K.
       Using superheated tables for R-134a at 10.77 bar and $s=0.927$ kJ/kg·K (requires interpolation):
       Let's assume $h_2 \approx 272.0$ kJ/kg.

*   **State 3 (Condenser Outlet):**
    $h_3 = 115.0$ kJ/kg

*   **State 4 (Expansion Valve Outlet):**
    c) $h_4 = h_3 = 115.0$ kJ/kg

*   **Performance Calculations:**
    d) Refrigerating Effect (RE) = $h_1 - h_4 = 238.5 - 115.0 = 123.5$ kJ/kg
    e) Work of Compression (W_c) = $h_2 - h_1 = 272.0 - 238.5 = 33.5$ kJ/kg
    f) COP_R = $RE / W_c = 123.5 / 33.5 \approx 3.69$

---

**Question 2:**

Using an h-s diagram for R-134a (or refer to a similar chart if available), plot the following cycle and estimate the COP:

*   Evaporator pressure: 2 bar
*   Condenser pressure: 8 bar
*   Compressor inlet: Saturated vapor
*   Compressor outlet: Superheated vapor with specific entropy of 0.75 kJ/kg·K

**Answer 2:**

*(This question requires a visual approach using an h-s diagram. The steps involve plotting the points and reading values.)*

1.  **Locate State 1:** Find the saturated vapor line corresponding to 2 bar and locate State 1. Read $h_1$.
2.  **Locate State 2:** From State 1, move vertically upwards along a constant entropy line (s = 0.75 kJ/kg·K, which is given). Intersect this line with the constant pressure line for 8 bar. This is State 2. Read $h_2$.
3.  **Locate State 3:** From State 2, move vertically downwards along the constant pressure line for 8 bar until you reach the saturated liquid line. This is State 3. Read $h_3$.
4.  **Locate State 4:** From State 3, move horizontally to the left along a constant enthalpy line until you intersect the constant pressure line for 2 bar. This is State 4. Read $h_4$.

**Estimated COP Calculation:**

*   $RE = h_1 - h_4$
*   $W_c = h_2 - h_1$
*   $COP_R = RE / W_c$

*(The specific numerical answer will depend on the exact h-s diagram used, but the process of plotting and reading is the key.)*

---

This comprehensive set of notes covers the essential aspects of using refrigerant tables and charts in the context of thermodynamic analysis for refrigeration and air conditioning systems, aligning with your course outcomes. Remember to consult your textbooks and data book for specific values and detailed examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
