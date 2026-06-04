---
title: "Measure the deformation (strain) of an object using strain gauges."
subject: "MATERIALS TESTING LAB"
module: "Module 15: Measure the deformation (strain) of an object using strain gauges."
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1351d0cf4804462e8c"
status: "completed"
scrapedAt: "2026-05-20T17:50:28.758Z"
---
# Materials Testing Lab - Module 15: Measuring Deformation (Strain) with Strain Gauges

## 1. Introduction to Strain and Strain Gauges

### 1.1 What is Strain?

*   **Definition:** Strain ($\epsilon$) is a measure of deformation representing the displacement between particles in a material body divided by an original length. It is a dimensionless quantity, often expressed as a ratio, percentage, or in microstrain ($\mu\epsilon$).
*   **Types of Strain:**
    *   **Normal Strain ($\epsilon_n$):** Change in length per unit original length in the direction of the applied stress.
        *   Tensile strain: Elongation, positive.
        *   Compressive strain: Contraction, negative.
        *   Formula: $\epsilon_n = \frac{\Delta L}{L_0}$, where $\Delta L$ is the change in length and $L_0$ is the original length.
    *   **Shear Strain ($\gamma$):** Change in angle between originally perpendicular lines. It's a measure of angular distortion.
        *   Formula: $\gamma = \tan(\theta) \approx \theta$ (for small angles), where $\theta$ is the change in angle in radians.

### 1.2 Why Measure Strain?

*   **Understanding Material Behavior:** Strain measurements are crucial for characterizing how materials deform under load, which directly relates to their mechanical properties. (Relates to **CO1**, **CO5**)
*   **Stress Determination:** By measuring strain and knowing the material's elastic modulus (Young's Modulus, $E$), stress ($\sigma$) can be calculated using Hooke's Law ($\sigma = E\epsilon$). This is fundamental to evaluating mechanical properties. (Relates to **CO1**, **CO4**)
*   **Structural Analysis:** Strain gauges are used to monitor the performance of structures and components under real-world conditions, helping to assess their integrity and predict failure. (Relates to **CO3**, **CO5**)
*   **Experimental Verification:** Validating theoretical predictions and simulations of material and structural behavior. (Relates to **CO4**, **CO5**)

### 1.3 Introduction to Strain Gauges

*   **Definition:** A strain gauge is a sensor whose resistance varies with the amount of strain applied to the object it is attached to. It is a type of transducer that converts mechanical deformation into a measurable electrical signal.
*   **Princ of Operation:**
    *   The core principle relies on the **piezo-resistive effect**, where the electrical resistance of a conductor or semiconductor changes when it is mechanically deformed.
    *   When a strain gauge is stretched (tensile strain), its length increases, and its cross-sectional area decreases. This leads to an increase in its electrical resistance.
    *   When a strain gauge is compressed (compressive strain), its length decreases, and its cross-sectional area increases. This leads to a decrease in its electrical resistance.
    *   The relationship between resistance change ($\Delta R$) and strain ($\epsilon$) is quantified by the **gauge factor (GF)**.
*   **Gauge Factor (GF):**
    *   **Definition:** The gauge factor is a dimensionless quantity that defines the sensitivity of a strain gauge. It is the ratio of the relative change in electrical resistance to the mechanical strain.
    *   **Formula:** $GF = \frac{\Delta R / R_0}{\epsilon}$, where $\Delta R$ is the change in resistance, $R_0$ is the initial resistance, and $\epsilon$ is the strain.
    *   **Typical Values:** For metallic strain gauges (e.g., constantan foil), GF is typically around 2. For semiconductor strain gauges, GF can be significantly higher (50-100+).
    *   **Importance:** A higher GF means a larger change in resistance for a given strain, leading to a more sensitive measurement.

### 1.4 Types of Strain Gauges

*   **1.4.1 Metallic Strain Gauges (Foil Gauges):**
    *   **Construction:** Typically made of a thin foil (e.g., constantan, karma alloy) etched into a grid pattern on a backing material (e.g., polyimide film). The grid pattern is designed to maximize the length of the resistive element within a small area and to minimize transverse sensitivity.
    *   **Advantages:** Relatively inexpensive, wide operating temperature range, good linearity, stable.
    *   **Disadvantages:** Lower GF (around 2), susceptible to transverse strain (though grid design mitigates this).
    *   **Application:** Widely used in various mechanical testing and structural monitoring applications. (Refer to Callister, Ch. on Electrical Properties; Kuhn & Medlin, Vol 8, Ch. on Strain Gauges).
*   **1.4.2 Wire Strain Gauges:**
    *   **Construction:** Thin wire wound back and forth on a backing. Less common now due to the prevalence of foil gauges.
    *   **Advantages:** Simpler to manufacture than foil gauges initially.
    *   **Disadvantages:** Lower sensitivity, more prone to transverse effects.
*   **1.4.3 Semiconductor Strain Gauges:**
    *   **Construction:** Made from semiconductor materials (e.g., silicon). The piezoresistive effect is much more pronounced in semiconductors.
    *   **Advantages:** Very high GF (50-100+), allowing for highly sensitive measurements. Can be made very small.
    *   **Disadvantages:** Non-linear behavior, temperature sensitivity can be higher, more expensive, more fragile.
    *   **Application:** Used where high sensitivity or miniaturization is critical.

## 2. Wheatstone Bridge and Strain Measurement

### 2.1 The Wheatstone Bridge Circuit

*   **Purpose:** The Wheatstone bridge is the standard electrical circuit used to measure small changes in resistance, such as those produced by a strain gauge. It amplifies the resistance change and provides a voltage output proportional to the strain.
*   **Configuration:** Typically consists of four resistors ($R_1, R_2, R_3, R_4$) arranged in a diamond shape. A voltage source ($V_{in}$) is applied across two opposite corners, and the output voltage ($V_{out}$) is measured across the other two corners.
*   **Balanced Bridge:** When the bridge is balanced, there is no voltage difference between the output terminals ($V_{out} = 0$). This occurs when the ratio of resistances in adjacent arms is equal: $\frac{R_1}{R_2} = \frac{R_3}{R_4}$.
*   **Unbalanced Bridge:** When the resistance in one or more arms changes, the bridge becomes unbalanced, and a voltage difference appears across the output terminals.

### 2.2 Strain Gauge Configurations in a Wheatstone Bridge

*   **2.2.1 Single Active Gauge:**
    *   One strain gauge (active) is used in one arm of the bridge, and the other three arms are fixed resistors.
    *   **Advantages:** Simple to set up.
    *   **Disadvantages:** Very sensitive to temperature changes (as temperature affects the fixed resistors as well) and bending in the specimen that is not aligned with the gauge. The output is proportional to strain, but also affected by other factors.
*   **2.2.2 Dual Active Gauge (Half-Bridge):**
    *   Two active strain gauges are used.
        *   **Configuration A (Series):** One gauge in tension ($\epsilon_1$) in one arm, and another gauge experiencing opposite strain (compression, $-\epsilon_1$) in an adjacent arm. The other two arms are fixed resistors.
        *   **Configuration B (Parallel):** One gauge in tension ($\epsilon_1$) in one arm, and another gauge experiencing the same strain ($\epsilon_1$) in the opposite arm. The other two arms are fixed resistors.
    *   **Advantages:**
        *   **Temperature Compensation:** If the two active gauges are placed in regions of similar temperature, the temperature-induced resistance changes will cancel each other out. This is because both gauges will experience the same resistance change due to temperature.
        *   **Increased Sensitivity:** In Configuration B, the strain-induced resistance changes add up, doubling the effective strain signal.
    *   **Disadvantages:** Requires careful placement of gauges.
*   **2.2.3 Full-Bridge:**
    *   Four active strain gauges are used in all four arms of the Wheatstone bridge.
    *   **Common Configurations:**
        *   **Quarter-Bridge (1 active, 1 dummy):** One active gauge, one dummy gauge (unloaded but in the same temperature environment) to compensate for temperature, and two fixed resistors.
        *   **Half-Bridge (2 active):** Two active gauges, one in tension and one in compression (or two in tension/compression with cancellation).
        *   **Full-Bridge (4 active):**
            *   **Full-Bridge Bending:** Two gauges on the tension side and two on the compression side. The tensile strain gauges are placed in opposite arms, and the compressive strain gauges are placed in the other opposite arms. This configuration maximizes sensitivity and provides excellent temperature compensation.
            *   **Full-Bridge Tension/Compression:** Two gauges measure tension, and two measure compression, typically placed on opposite sides of a specimen experiencing uniform axial stress.
    *   **Advantages:**
        *   **Maximum Sensitivity:** The strain signals from all four gauges are additive, resulting in the highest output voltage for a given strain.
        *   **Excellent Temperature Compensation:** All four gauges experience similar temperature variations, which are effectively cancelled out by the bridge configuration.
        *   **Cancellation of Transverse Effects:** Proper gauge placement can minimize the influence of strains perpendicular to the gauge axis.

### 2.3 Output Voltage and Strain Calculation

*   For a Wheatstone bridge with four equal resistors $R_0$ and an input voltage $V_{in}$, when a small resistance change $\Delta R$ occurs in one arm:
    *   **Single Active Gauge:** $V_{out} \approx V_{in} \cdot \frac{1}{4} \cdot \frac{\Delta R}{R_0}$.
    *   Substituting $\frac{\Delta R}{R_0} = GF \cdot \epsilon$:
    *   $V_{out} \approx V_{in} \cdot \frac{1}{4} \cdot GF \cdot \epsilon$.
*   For multi-gauge configurations, the output voltage is amplified. For example, in a full-bridge configuration with two gauges in tension and two in compression (like in bending), the output can be approximately:
    *   $V_{out} \approx V_{in} \cdot \frac{GF \cdot \epsilon}{2}$ (for a pure bending setup where the strain in opposite arms are equal and opposite).
*   **Strain Calculation from $V_{out}$:**
    *   Rearranging the output voltage equation to solve for strain:
    *   $\epsilon = \frac{4 \cdot V_{out}}{V_{in} \cdot GF}$ (for a single active gauge).
    *   The exact formula depends on the bridge configuration.

## 3. Practical Aspects of Strain Gauge Application

### 3.1 Strain Gauge Selection

*   **Material Properties:** Consider the material being tested, its expected strain range, and temperature.
*   **Gauge Type:** Foil gauges are common for general use. Semiconductor gauges for high sensitivity.
*   **Gauge Size:** Larger gauges have lower resolution but are easier to handle and less sensitive to localized effects. Smaller gauges offer higher resolution and can measure strain over smaller areas.
*   **Gauge Pattern:** Linear gauges for axial strain, rosette gauges for multi-axial strain.
*   **Backing Material:** Choose a backing suitable for the specimen surface and operating environment.
*   **Resistance:** Common resistances are 120 $\Omega$ or 350 $\Omega$. Lower resistance gauges provide a stronger signal but can draw more current, potentially causing self-heating.

### 3.2 Surface Preparation

*   **Importance:** Proper surface preparation is critical for ensuring good adhesion of the strain gauge and accurate strain transfer.
*   **Steps:**
    *   **Cleaning:** Remove dirt, grease, oils, and oxides from the specimen surface using appropriate solvents (e.g., acetone, ethanol).
    *   **Abrasion/Sanding:** Lightly abrade the surface to create a smooth, uniform surface profile that promotes adhesion. This can be done with fine-grit sandpaper or abrasive pads.
    *   **Neutralization:** Often, a neutralizing agent (e.g., acid etch) is used to remove any remaining metal oxides.
    *   **Drying:** Ensure the surface is completely dry before applying the gauge.

### 3.3 Gauge Installation (Bonding)

*   **Adhesives:** Special strain gauge adhesives are used for bonding. These adhesives are designed to cure quickly and provide a strong, stable bond that effectively transfers strain from the specimen to the gauge. Common adhesives include cyanoacrylates (quick cure) and epoxy resins (stronger, slower cure).
*   **Application Process:**
    1.  Apply a small amount of adhesive to the prepared surface or the strain gauge backing.
    2.  Carefully position the strain gauge on the specimen surface using tweezers.
    3.  Apply firm, uniform pressure to the gauge to ensure intimate contact and to squeeze out excess adhesive. A backing paper or a special applicator tool is often used to apply pressure.
    4.  Allow the adhesive to cure completely according to the manufacturer's instructions.
*   **Alignment:** Precise alignment of the gauge with the expected direction of strain is crucial, especially for single-element gauges.

### 3.4 Wiring and Connections

*   **Lead Wires:** Low-resistance lead wires are used to connect the strain gauge to the measuring instrument.
*   **Soldering/Crimping:** Connections between the gauge terminals and lead wires are typically made by soldering or crimping. Careful technique is needed to avoid overheating the gauge or inducing strain.
*   **Shielding:** Shielded cables are often used to minimize electrical noise interference.
*   **Terminating:** Proper termination of the wiring is essential to avoid spurious signals.

### 3.5 Data Acquisition and Instrumentation

*   **Strain Indicators/Data Loggers:** These instruments are used to excite the Wheatstone bridge and measure the output voltage. They often have built-in features for temperature compensation, bridge balancing, and direct strain readouts.
*   **Calibration:** The strain indicator must be calibrated to ensure accurate strain readings. This typically involves setting the gauge factor and performing a zero-balance adjustment.
*   **Sampling Rate:** For dynamic strain measurements, a sufficient sampling rate is required to capture the variations in strain.

## 4. Advanced Concepts and Applications

### 4.1 Strain Rosettes

*   **Purpose:** Used to measure strain in multiple directions at a single point on a specimen surface. This is essential for analyzing stress states in complex geometries or under multi-axial loading.
*   **Types:**
    *   **Rectangular Rosette:** Consists of three gauges arranged at 0°, 45°, and 90° to each other.
    *   **Deltar Rosette:** Consists of three gauges arranged at 0°, 60°, and 120° to each other.
*   **Analysis:** By measuring the strains in three different directions ($\epsilon_a, \epsilon_b, \epsilon_c$), the principal strains ($\epsilon_1, \epsilon_2$) and principal stress directions can be calculated using strain rosette equations. (Refer to Gere & Goodno, Ch. on Stress and Strain Transformation).
    *   Example calculation for principal strains from a rectangular rosette:
        *   $\epsilon_1 = \frac{\epsilon_a + \epsilon_c}{2} + \frac{1}{2} \sqrt{(\epsilon_a - \epsilon_b)^2 + (\epsilon_b - \epsilon_c)^2}$
        *   $\epsilon_2 = \frac{\epsilon_a + \epsilon_c}{2} - \frac{1}{2} \sqrt{(\epsilon_a - \epsilon_b)^2 + (\epsilon_b - \epsilon_c)^2}$
        *   The orientation of the principal strains can also be determined.

### 4.2 Stress Analysis

*   **Relating Strain to Stress:** Using Hooke's Law and the material's elastic properties (Young's Modulus, Poisson's Ratio), stress can be calculated from measured strains.
    *   **Uniaxial Stress:** $\sigma = E \cdot \epsilon$
    *   **Biaxial Stress:**
        *   $\sigma_1 = \frac{E}{1-\nu^2} (\epsilon_1 + \nu \epsilon_2)$
        *   $\sigma_2 = \frac{E}{1-\nu^2} (\epsilon_2 + \nu \epsilon_1)$
        (where $\nu$ is Poisson's Ratio)
*   **Applications:** Stress analysis of machine components, aircraft structures, bridges, etc. This directly supports **CO3** and **CO5**.

### 4.3 Temperature Compensation Techniques

*   **Dummy Gauges:** Placing an identical, unloaded strain gauge in the same temperature environment as the active gauge, but in an unloaded section of the specimen, allows for temperature compensation in a Wheatstone bridge.
*   **Self-Temperature Compensating (STC) Gauges:** These gauges are manufactured with a specific alloy that has a built-in compensation for the thermal expansion of a particular material (e.g., steel).
*   **Bridge Configurations:** As discussed earlier, half-bridge and full-bridge configurations inherently provide temperature compensation.

### 4.4 Dynamic Strain Measurement

*   **Requirements:** For measuring rapidly changing strains, high-frequency response instrumentation and data acquisition systems are needed.
*   **Applications:** Measuring strain during impact events, vibrations, fatigue testing, and operational deflection analysis.

### 4.5 Crack Propagation Monitoring

*   **Method:** Placing strain gauges near a potential crack initiation site can detect the localized strain changes as a crack grows.
*   **Significance:** Aids in understanding fracture mechanics and material fatigue. (Relates to **CO1**, **CO2**)

## 5. Learning Outcomes Alignment

*   **CO1: Evaluate the mechanical properties of different materials under various loading conditions.**
    *   Strain gauges directly measure deformation, which, when combined with stress calculations (derived from load), allows for the determination of Young's Modulus, yield strength, tensile strength, etc. (Knowledge Level: K3)
*   **CO2: Relate material microstructure to its mechanical behaviour.**
    *   By observing how different microstructures (e.g., annealed vs. work-hardened metals) respond in terms of strain under the same load, insights into the microstructure-property relationship can be gained. (Knowledge Level: K4)
*   **CO3: Analyse the effect of design features on the performance of mechanical components.**
    *   Strain gauges can be strategically placed on components to measure localized strains in areas of high stress concentration due to design features (e.g., holes, fillets). This helps in identifying critical areas and optimizing designs. (Knowledge Level: K4)
*   **CO4: Utilize experimental techniques to determine material properties.**
    *   This entire module focuses on the practical application of strain gauges as an experimental technique for measuring deformation and inferring material properties. (Knowledge Level: K3)
*   **CO5: Apply fundamental engineering principles to analyse the behaviour of structures under load.**
    *   By measuring strain and applying Hooke's Law and stress transformation principles, the stress distribution and deformation within structures can be analyzed, enabling prediction of structural response. (Knowledge Level: K3)

## 6. Important Points to Remember

*   **Strain is a measure of deformation per unit length.**
*   **Strain gauges work based on the piezoresistive effect.**
*   **Gauge Factor (GF) quantifies strain gauge sensitivity.**
*   **Wheatstone bridge is essential for amplifying small resistance changes.**
*   **Bridge configurations (half-bridge, full-bridge) offer temperature compensation and increased sensitivity.**
*   **Surface preparation is critical for accurate strain transfer.**
*   **Proper wiring and instrumentation are vital for reliable measurements.**
*   **Strain rosettes are used for multi-axial strain analysis.**
*   **Hooke's Law ($\sigma = E\epsilon$) is fundamental for converting strain to stress.**

## 7. Practice Questions and Answers

**Question 1:** A metallic strain gauge with a gauge factor of 2 is bonded to a specimen. When a load is applied, the resistance of the gauge changes from 120 $\Omega$ to 120.36 $\Omega$. If the original length of the specimen section where the gauge is bonded was 100 mm, what is the strain experienced by the specimen?

**Answer 1:**
*   Given: $GF = 2$, $R_0 = 120 \Omega$, $\Delta R = 120.36 \Omega - 120 \Omega = 0.36 \Omega$.
*   First, calculate the relative change in resistance: $\frac{\Delta R}{R_0} = \frac{0.36 \Omega}{120 \Omega} = 0.003$.
*   Using the gauge factor formula: $GF = \frac{\Delta R / R_0}{\epsilon}$
*   $\epsilon = \frac{\Delta R / R_0}{GF} = \frac{0.003}{2} = 0.0015$.
*   The strain is $0.0015$ or $1500 \mu\epsilon$. The original length of 100 mm is not directly needed for strain calculation, only the change in length would be if not using resistance.

**Question 2:** A strain gauge is used in a single-arm Wheatstone bridge. The input voltage is 5V, and the gauge factor is 2. If the measured output voltage is 10 mV (0.01 V), what is the strain?

**Answer 2:**
*   Given: $V_{in} = 5$ V, $GF = 2$, $V_{out} = 0.01$ V.
*   Using the formula for a single active gauge: $V_{out} \approx V_{in} \cdot \frac{1}{4} \cdot GF \cdot \epsilon$
*   Rearranging to solve for strain: $\epsilon = \frac{4 \cdot V_{out}}{V_{in} \cdot GF}$
*   $\epsilon = \frac{4 \cdot 0.01 \text{ V}}{5 \text{ V} \cdot 2} = \frac{0.04}{10} = 0.004$.
*   The strain is $0.004$ or $4000 \mu\epsilon$.

**Question 3:** Explain why a full-bridge configuration with four active gauges is preferred over a single-arm bridge for strain measurement, particularly in a laboratory setting.

**Answer 3:**
A full-bridge configuration with four active gauges is preferred for several key reasons:
1.  **Increased Sensitivity:** All four active gauges contribute to the output signal, typically resulting in an output voltage that is 4 times that of a single-arm bridge (for the same strain). This makes the measurement more sensitive to small strains.
2.  **Temperature Compensation:** If all four gauges are subjected to the same temperature variations, the resistance changes due to thermal expansion/contraction will cancel out in the bridge circuit. This is crucial for accurate strain measurements, as temperature fluctuations can otherwise lead to significant errors.
3.  **Cancellation of Transverse Effects:** With proper placement (e.g., two gauges experiencing axial strain and two experiencing transverse strain in a bending scenario), the effects of strain perpendicular to the gauge's primary sensing direction can be minimized.
4.  **Load Cell Applications:** Full-bridge configurations are standard in load cells, where they provide a robust and accurate way to measure the deformation (and thus the applied load) of the elastic element.

**Question 4:** What are the primary steps involved in preparing a specimen surface for strain gauge bonding?

**Answer 4:**
The primary steps involved in specimen surface preparation for strain gauge bonding are:
1.  **Cleaning:** Removing any contaminants such as grease, oil, dirt, or oxide layers using appropriate solvents (e.g., acetone, IPA).
2.  **Abrasion:** Lightly abrading the surface (e.g., with fine-grit sandpaper or a special abrasive pad) to create a smooth, uniform, and slightly roughened surface. This improves the mechanical interlocking and adhesion of the strain gauge adhesive.
3.  **Neutralization:** Applying a neutralizing agent (often a mild acid etch) to remove any residual metal oxides exposed by abrasion and to provide a chemically clean surface.
4.  **Drying:** Thoroughly drying the specimen surface to remove any residual solvent or moisture, ensuring it is completely dry before adhesive application.

This comprehensive set of notes covers the fundamental principles, practical applications, and theoretical underpinnings of using strain gauges for measuring deformation, aligning with the stated learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
