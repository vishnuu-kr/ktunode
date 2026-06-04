---
title: "Determination of characteristics of transducers: LVDT, Strain gauge, and Load-cell"
subject: "CIRCUITS AND MEASUREMENTS LAB"
module: "Module 19: Determination of characteristics of transducers: LVDT, Strain gauge, and Load"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35d07"
status: "completed"
scrapedAt: "2026-05-23T16:12:06.506Z"
---
# CIRCUITS AND MEASUREMENTS LAB - Module 19: Determination of Characteristics of Transducers

## Topic: Determination of Characteristics of Transducers: LVDT, Strain Gauge, and Load-cell

### 1. Introduction to Transducers

**Definition:** A transducer is a device that converts one form of energy into another form of energy. In the context of electrical measurements, transducers are typically used to convert a physical phenomenon (like displacement, force, pressure, temperature) into an electrical signal. This electrical signal can then be measured, processed, or transmitted.

**Importance in Instrumentation:** Transducers are fundamental components in measurement and instrumentation systems. They act as the interface between the physical world and the electrical domain, enabling the quantification of various physical quantities.

**Relevance to Course Outcomes:** This module directly addresses **CO6: Analyse the characteristics of various types of transducer systems (Knowledge Level: K3)**. By understanding and experimenting with the characteristics of LVDT, strain gauges, and load cells, students will gain practical knowledge of how these transducers operate and how their performance is evaluated.

### 2. Linear Variable Differential Transformer (LVDT)

**2.1 Principle of Operation:**
*   An LVDT is an electromechanical transducer that converts linear displacement into a proportional AC voltage.
*   It consists of a primary winding and two secondary windings wound on a cylindrical former. A movable ferromagnetic core is placed inside the former.
*   The primary winding is excited by an AC voltage. The induced voltages in the two secondary windings are connected in series opposition.
*   When the core is at the *null position* (centered between the secondary windings), the voltage induced in each secondary winding is equal in magnitude but opposite in phase. The net output voltage is zero.
*   As the core moves from the null position, the magnetic coupling between the primary and secondary windings changes, resulting in an output voltage proportional to the displacement. The phase of the output voltage indicates the direction of displacement relative to the null position.

**2.2 Construction:**
*   **Primary Winding:** Excited by an AC source.
*   **Secondary Windings (2):** Wound on the same former, placed symmetrically.
*   **Core:** A movable ferromagnetic material, typically cylindrical. It is free to move along the axis of the windings.

**2.3 Characteristics of LVDT:**
*   **Sensitivity:** The change in output voltage per unit change in displacement. It is usually expressed in mV/V/mm or mV/V/mil.
*   **Linearity:** The extent to which the output voltage is directly proportional to the input displacement over a specified range.
*   **Range:** The maximum displacement that the LVDT can accurately measure.
*   **Resolution:** The smallest change in displacement that can be detected.
*   **Hysteresis:** The difference in output voltage for the same displacement when approached from opposite directions.
*   **Null Voltage:** The residual output voltage when the core is at the null position. Ideally, it should be zero.
*   **Frequency Response:** The range of frequencies over which the LVDT can operate accurately.

**2.4 Applications:**
*   Measurement of displacement, position, velocity, and acceleration.
*   Automated manufacturing systems.
*   Robotics.
*   Machine tools.
*   Aerospace applications.

**2.5 Experimental Determination of Characteristics:**
*   **Setup:** LVDT, AC excitation source (sine wave generator), AC voltmeter (or CRO), displacement mechanism (e.g., micrometer screw gauge), calibrated scale.
*   **Procedure:**
    1.  Connect the AC excitation source to the primary winding of the LVDT.
    2.  Connect the AC voltmeter across the two secondary windings.
    3.  Position the core at the null position and record the output voltage.
    4.  Gradually move the core over its operational range using the displacement mechanism.
    5.  For each increment of displacement, record the output voltage.
    6.  Reverse the direction of displacement and repeat the readings.
*   **Data Analysis:**
    *   Plot the output voltage (V_out) versus displacement (x). This graph will show the linearity and sensitivity.
    *   Determine the sensitivity from the slope of the linear portion of the graph.
    *   Assess linearity by observing how closely the plotted points lie on a straight line.
    *   Calculate null voltage and any residual voltage.
    *   Observe hysteresis by comparing readings taken when approaching a point from the increasing and decreasing displacement directions.

**2.6 Reference Content (from Textbooks):**
*   **Sawhney (A. K.):** Chapter on "Angular and Linear Measurement". Sawhney provides detailed explanations of the construction, working principle, and electrical networks associated with LVDTs, including signal conditioning circuits. He often discusses the phasor diagrams and their implications on output.
*   **Gupta (J. B.):** Chapter on "Transducers and Sensors". Gupta likely covers the basic theory, types of LVDTs, and their advantages/disadvantages. He might also include typical circuit diagrams for excitation and signal conditioning.
*   **Kalsi (H. S.):** Chapter on "Linear Displacement Transducers". Kalsi is known for his clear explanations of instrument principles. He would likely detail the core-winding interaction and the resulting voltage generation, perhaps with graphical representations of flux distribution.

**2.7 Important Points to Remember:**
*   LVDTs are AC transducers; they require an AC excitation source.
*   The output is proportional to displacement and is usually conditioned to a DC voltage for easier processing.
*   The phase of the output voltage relative to the excitation voltage provides directional information.
*   LVDTs are non-contact transducers, leading to low friction and high resolution.

### 3. Strain Gauge

**3.1 Principle of Operation:**
*   A strain gauge is a transducer whose electrical resistance changes proportionally to the amount of strain applied to it.
*   The change in resistance is due to two effects:
    1.  **Change in dimensions:** When a conductor is stretched (tension), its length increases, and its cross-sectional area decreases, both leading to an increase in resistance. When compressed (compression), its length decreases, and its cross-sectional area increases, leading to a decrease in resistance. This is described by the piezoresistive effect.
    2.  **Piezoresistive Effect:** The resistivity of a material itself changes with strain.

**3.2 Construction:**
*   Typically made of a thin foil, wire, or semiconductor material arranged in a grid pattern on a flexible backing.
*   The grid pattern maximizes the resistance change for a given strain and minimizes the effect of directional strain.
*   The backing material (e.g., paper, plastic film) is attached to the object whose strain is to be measured.

**3.3 Gauge Factor (GF):**
*   **Definition:** The ratio of the fractional change in resistance to the fractional change in length (strain).
*   **Formula:**
    $$GF = \frac{\Delta R/R}{\Delta L/L} = \frac{\Delta R/R}{\epsilon}$$
    Where:
    *   $\Delta R$ is the change in resistance.
    *   $R$ is the initial resistance.
    *   $\epsilon = \Delta L/L$ is the strain.
*   **Significance:** A higher gauge factor indicates a greater change in resistance for a given strain, making the transducer more sensitive.

**3.4 Wheatstone Bridge Configuration:**
*   Strain gauges are almost always used in conjunction with a Wheatstone bridge circuit to measure the small changes in resistance.
*   A balanced Wheatstone bridge produces zero output voltage.
*   When a strain gauge is placed in one or more arms of the bridge, and strain is applied, the bridge becomes unbalanced, producing an output voltage proportional to the strain.
*   **Common Configurations:**
    *   **Quarter Bridge:** One strain gauge in one arm. Output voltage is proportional to strain.
    *   **Half Bridge:** Two active strain gauges (e.g., one in tension, one in compression) or one active gauge and one dummy gauge. Provides higher sensitivity and compensates for temperature effects.
    *   **Full Bridge:** Four active strain gauges (e.g., two in tension, two in compression). Offers maximum sensitivity and excellent temperature compensation.

**3.5 Applications:**
*   Measurement of stress and strain in structures (bridges, buildings, aircraft).
*   Force and pressure measurement (by incorporating strain gauges into load cells or diaphragms).
*   Weight measurement (load cells).
*   Torque measurement.
*   Aerospace, automotive, and civil engineering.

**3.6 Experimental Determination of Characteristics:**
*   **Setup:** Strain gauge, Wheatstone bridge circuit, DC or AC excitation source for the bridge, sensitive voltmeter (or digital multimeter), a method to apply known strain (e.g., dead weights on a cantilever beam, tensile testing machine).
*   **Procedure:**
    1.  Mount the strain gauge on the specimen to be tested.
    2.  Connect the strain gauge and possibly a dummy gauge into a Wheatstone bridge configuration.
    3.  Balance the Wheatstone bridge to obtain zero output voltage.
    4.  Apply a known strain to the specimen (e.g., by applying a known load to a cantilever beam).
    5.  Record the output voltage of the bridge for each applied strain.
    6.  If possible, measure the actual strain using a mechanical extensometer or from the applied load and material properties.
*   **Data Analysis:**
    *   Plot the output voltage (V_out) versus applied strain ($\epsilon$).
    *   Determine the sensitivity of the transducer-bridge system (e.g., $\mu$V/V/$\mu$strain).
    *   Assess linearity by observing how closely the plotted points lie on a straight line.
    *   Calculate the gauge factor if the actual strain is measured or can be reliably calculated.

**3.7 Reference Content (from Textbooks):**
*   **Sawhney (A. K.):** Chapter on "Strain Gauges". Sawhney provides extensive coverage, including different types of strain gauges (wire, foil, semiconductor), the piezoresistive effect, gauge factor definition, and detailed explanations of Wheatstone bridge configurations for strain measurement. He often includes equivalent circuits and analysis.
*   **Gupta (J. B.):** Chapter on "Strain Gauges". Gupta would likely cover the basic principles, construction, gauge factor, and the necessity of Wheatstone bridges. He might discuss different bridge circuits and their advantages.
*   **Kalsi (H. S.):** Chapter on "Strain Gauges and Their Applications". Kalsi often explains the practical aspects of strain gauge mounting, wiring, and the importance of temperature compensation, possibly discussing dummy gauges and compensation techniques.

**3.8 Important Points to Remember:**
*   Strain gauges measure strain, which can then be related to stress using Hooke's Law ($\sigma = E\epsilon$).
*   Wheatstone bridge is essential for measuring the small resistance changes.
*   Temperature compensation is crucial as temperature changes can affect the resistance of the gauge and the bridge components.
*   Proper mounting and bonding of the strain gauge are critical for accurate measurements.

### 4. Load Cell

**4.1 Principle of Operation:**
*   A load cell is a transducer that converts a force or weight into an electrical signal.
*   Most modern load cells are based on strain gauges. They consist of a precisely machined piece of metal (the mechanical structure) onto which strain gauges are bonded in a specific arrangement.
*   When an external force (load) is applied, it deforms the mechanical structure. This deformation causes strain in the material, which in turn changes the resistance of the bonded strain gauges.
*   These strain gauges are typically arranged in a Wheatstone bridge configuration. The bridge output voltage is proportional to the applied force.

**4.2 Types of Load Cells (based on construction/principle):**
*   **Strain Gauge Load Cells:** The most common type.
    *   **Bending Beam:** Used for single-point applications (e.g., bench scales).
    *   **Shear Beam:** Load is applied in shear.
    *   **Canister/Column:** Load is applied axially.
    *   **Diaphragm:** Load applied to a diaphragm causing bending.
*   **Hydraulic Load Cells:** Use a fluid and a hydraulic ram. Force is converted to hydraulic pressure.
*   **Pneumatic Load Cells:** Similar to hydraulic but use air.
*   **Capacitive Load Cells:** Measure changes in capacitance due to deformation.
*   **Piezoelectric Load Cells:** Utilize the piezoelectric effect where certain materials generate a voltage when subjected to mechanical stress.

**4.3 Construction (Strain Gauge Load Cells):**
*   **Mechanical Structure (Spring Element):** Made of materials like alloy steel, aluminum, or stainless steel, machined to deform predictably under load. Common shapes include S-type, button, canister, etc.
*   **Strain Gauges:** Bonded to specific locations on the mechanical structure where strain is maximized and predictable.
*   **Wheatstone Bridge:** Typically a full-bridge configuration is used for high sensitivity and accuracy, with strain gauges arranged to measure both tensile and compressive strains.
*   **Housing and Sealing:** Protects the internal components from environmental factors.

**4.4 Characteristics of Load Cells:**
*   **Capacity:** The maximum load the load cell can measure.
*   **Sensitivity:** Output signal per unit of applied force (e.g., mV/V/kg or mV/V/lb).
*   **Accuracy:** The deviation of the measured value from the true value.
*   **Linearity:** The degree to which the output signal is proportional to the input force.
*   **Repeatability:** The ability of the load cell to produce the same output for repeated applications of the same load.
*   **Hysteresis:** The difference in output for the same load when approached from increasing and decreasing load directions.
*   **Zero Balance:** The output voltage when no load is applied.
*   **Temperature Effects:** Changes in output due to ambient temperature variations (e.g., zero shift, span shift).
*   **Creep:** The slow change in output over time when a constant load is applied.

**4.5 Applications:**
*   Weighing systems (industrial scales, truck scales, balances).
*   Force measurement in testing machines.
*   Process control.
*   Material handling.
*   Automotive testing.

**4.6 Experimental Determination of Characteristics:**
*   **Setup:** Load cell, calibrated force application system (e.g., dead weights, testing machine), load cell excitation and signal conditioning unit (often includes amplification and bridge completion), voltmeter (or digital display).
*   **Procedure:**
    1.  Mount the load cell and connect it to the excitation and measurement system.
    2.  Apply zero load and adjust the zero balance of the system.
    3.  Apply known increments of force (loads) over the operational range of the load cell.
    4.  For each applied load, record the corresponding output signal.
    5.  Record readings while increasing the load and then decreasing the load to assess hysteresis.
    6.  If possible, repeat measurements at different temperatures to assess temperature effects.
*   **Data Analysis:**
    *   Plot the output signal (V_out) versus applied force (F).
    *   Determine the sensitivity from the slope of the linear portion of the calibration curve.
    *   Assess linearity and repeatability from the plot.
    *   Calculate hysteresis from the difference in readings at the same load point during increasing and decreasing load cycles.
    *   If the load cell's rated output is given (e.g., 2 mV/V), and the excitation voltage is known, the actual sensitivity can be compared to the specified sensitivity.

**4.7 Reference Content (from Textbooks):**
*   **Sawhney (A. K.):** Chapter on "Force and Torque Measurement". Sawhney would likely discuss the strain gauge load cell in detail, including its construction, the Wheatstone bridge arrangement, and the various types of mechanical structures used. He might also cover calibration procedures and sources of error.
*   **Gupta (J. B.):** Chapter on "Force and Pressure Measurement". Gupta would cover load cells as a primary means of force measurement, focusing on the strain gauge transducer principle. He might differentiate between different load cell designs and discuss their suitability for various applications.
*   **Kalsi (H. S.):** Chapter on "Force and Strain Measurement". Kalsi would likely provide a clear overview of how strain gauges are integrated into load cells, emphasizing the calibration process and the impact of environmental factors. He might also touch upon digital signal processing for load cell outputs.

**4.8 Important Points to Remember:**
*   Load cells are force transducers, typically utilizing strain gauges.
*   Proper calibration is essential for accurate force measurement.
*   The Wheatstone bridge configuration is crucial for extracting the small signals.
*   Environmental factors like temperature and vibration can affect load cell performance.
*   The mechanical structure is designed to elastically deform, and the strain gauges measure this deformation.

---

### 4. Practice Questions and Exercises

**Instructions:** Attempt the following questions to test your understanding of the module.

**Question 1: LVDT**
An LVDT has a linear range from -5 mm to +5 mm. Its sensitivity in this range is 50 mV/V/mm. If the LVDT is excited by a 5V RMS AC voltage, what is the maximum output voltage at the extreme ends of its linear range? If the core is at the null position, what is the theoretical output voltage?

**Answer 1:**
*   Maximum output voltage = Sensitivity × Excitation Voltage × Maximum Displacement
*   Maximum output voltage = (50 mV/V/mm) × (5 V) × (5 mm) = 250 mV
*   Theoretical output voltage at null position = 0 mV (ideally)

**Question 2: Strain Gauge**
A strain gauge has a gauge factor of 2. When subjected to a strain of $1000 \mu\epsilon$ (micro-strain), its resistance changes by 0.5 $\Omega$. If the initial resistance of the strain gauge was $120 \Omega$, calculate the strain gauge factor. Is this value typical for a foil strain gauge?

**Answer 2:**
*   Given: $\epsilon = 1000 \mu\epsilon = 1000 \times 10^{-6} = 10^{-3}$
*   $\Delta R = 0.5 \Omega$
*   $R = 120 \Omega$
*   Gauge Factor ($GF$) = $(\Delta R / R) / \epsilon$
*   $GF = (0.5 \Omega / 120 \Omega) / 10^{-3}$
*   $GF = (0.004167) / 10^{-3} = 4.167$
*   Yes, a gauge factor of around 2 is typical for foil strain gauges, but values can vary slightly. This calculated value is a bit higher than the typical range but possible.

**Question 3: Load Cell**
A load cell with a capacity of 500 kg is calibrated with a bridge excitation of 10V. The load cell has a rated output of 3 mV/V. When a load of 200 kg is applied, the output voltage is 12 mV.
a) Calculate the actual sensitivity of the load cell in mV/V/kg.
b) What is the theoretical output voltage for 200 kg applied load based on the rated output?
c) Compare the actual output with the theoretical output.

**Answer 3:**
*   Given: Capacity = 500 kg, Excitation Voltage ($V_{ex}$) = 10 V, Rated Output = 3 mV/V.
*   Applied Load = 200 kg, Measured Output Voltage ($V_{out}$) = 12 mV.

a) Actual Sensitivity:
   *   Actual Sensitivity = $V_{out}$ / ($V_{ex}$ × Applied Load)
   *   Actual Sensitivity = 12 mV / (10 V × 200 kg) = 12 mV / 2000 V·kg = 0.006 mV/V/kg

b) Theoretical Output Voltage:
   *   Theoretical Output Voltage = Rated Output × Excitation Voltage × Applied Load
   *   Theoretical Output Voltage = (3 mV/V) × (10 V) × (200 kg) = 30 mV/kg × 200 kg = 6000 mV = 6 V

c) Comparison:
   *   The measured output voltage is 12 mV, while the theoretical output voltage based on the rated output is 6000 mV (6 V). This indicates a significant discrepancy. It's possible the question implies the output is measured directly without further amplification, or there's a misunderstanding in the question's phrasing. If the output is expected in millivolts, then the rating of 3 mV/V implies the sensitivity in millivolts for a given excitation voltage and a nominal load.
   *   Let's re-evaluate based on a common interpretation where rated output is given as a final value per unit of excitation voltage for full scale. If rated output is 3mV/V for a 500kg load:
      *   Theoretical output at full scale = 3 mV/V * 10 V = 30 mV.
      *   Then, for 200 kg: Theoretical output = (30 mV / 500 kg) * 200 kg = 12 mV.
      *   In this interpretation, the measured output (12 mV) matches the theoretical output (12 mV).

   *   **Corrected Interpretation for the question:** Assuming the rated output is given in mV per Volt *at full scale capacity*, and the output is measured in millivolts.
      *   Rated output for 500 kg load = 3 mV/V.
      *   This means for 10V excitation, the output at 500 kg would be 3 mV/V * 10 V = 30 mV.
      *   The sensitivity is therefore 30 mV / 500 kg = 0.06 mV/kg (for 10V excitation).
      *   Or, expressed as mV/V/kg: Sensitivity = (30 mV / 10 V) / 500 kg = 3 mV/V / 500 kg = 0.006 mV/V/kg.

   *   a) Actual sensitivity calculated earlier: 0.006 mV/V/kg. This matches the interpretation.
   *   b) Theoretical output for 200 kg: Using the calculated sensitivity: 0.006 mV/V/kg * 10 V * 200 kg = 12 mV.
   *   c) The actual output (12 mV) matches the theoretical output (12 mV) under this common interpretation. The load cell is performing as expected based on its rating.

---

### 5. Summary and Key Takeaways

*   **LVDT:** Converts linear displacement to AC voltage. Sensitive, accurate, and suitable for non-contact measurement. Requires AC excitation and signal conditioning.
*   **Strain Gauge:** Measures strain via a change in electrical resistance. Principle relies on the piezoresistive effect and dimensional changes. Used with Wheatstone bridges for sensitive measurement. Temperature compensation is critical.
*   **Load Cell:** A force transducer, typically a strain gauge assembly on a mechanical structure. Converts force to an electrical signal. Accuracy and repeatability are key characteristics, determined through calibration.

This module provides a hands-on understanding of fundamental transducers used extensively in electrical and mechanical measurements. By performing experiments, you will learn to calibrate and analyze their performance characteristics.
