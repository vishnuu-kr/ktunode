---
title: "Strain measurements"
subject: "ADVANCED SOLID MECHANICS"
module: "Module 2: Analysis of strain"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109f9"
status: "completed"
scrapedAt: "2026-05-20T18:42:35.575Z"
---
# ADVANCED SOLID MECHANICS - Module 2: Analysis of Strain

## Topic: Strain Measurements

---

### **Learning Outcomes Covered:**

*   **LO1:** Understand the fundamental principles of strain measurement, including extensometers, strain gauges, and optical methods.
*   **LO2:** Discuss the practical applications and limitations of different strain measurement techniques.
*   **LO3:** Analyze experimental data obtained from strain measurements to determine strain components and material behavior.
*   **LO4:** Evaluate the accuracy and reliability of strain measurement techniques in various engineering scenarios.
*   **LO5:** Understand the concept of strain rosette and its application in determining principal strains and stresses.

---

### **1. Introduction to Strain Measurement**

*   **Definition of Strain:** Strain is a measure of deformation representing the displacement between particles in a body per unit of reference length. It's a dimensionless quantity, often expressed as microstrain ($\mu\epsilon$) or percentage (%).
*   **Types of Strain:**
    *   **Normal Strain ($\epsilon$):** Change in length per unit original length in a specific direction.
    *   **Shear Strain ($\gamma$):** Change in angle between two initially perpendicular lines in a material.
*   **Importance of Strain Measurement:**
    *   Validating theoretical models.
    *   Understanding material behavior under load.
    *   Detecting structural damage and fatigue.
    *   Quality control in manufacturing.
    *   Experimental stress analysis.

---

### **2. Methods of Strain Measurement**

This section will cover various techniques used to quantify strain in a material.

#### **2.1 Mechanical Extensometers**

*   **Princ:** Directly measure the elongation of a specimen by mechanical amplification.
*   **Components:**
    *   **Clamps/Grips:** Securely attach the extensometer to the specimen.
    *   **Measuring Element:** Lever systems, dial indicators, or linear variable differential transformers (LVDTs) to translate displacement into a readable output.
*   **Types:**
    *   **Clip-on Extensometers:** Attached to the specimen surface via spring-loaded clips. Simple and portable.
    *   **Averaging Extensometers:** Measure strain over a longer gauge length, reducing the impact of localized effects.
    *   **Transverse Extensometers:** Measure strain perpendicular to the applied load, used to determine Poisson's ratio.
*   **Advantages:**
    *   Relatively inexpensive.
    *   Can measure large strains.
    *   No electrical excitation required for basic dial types.
*   **Limitations:**
    *   Can be bulky and may influence the strain field.
    *   Limited sensitivity for small strains.
    *   Requires careful attachment to avoid slippage.
    *   Contact method, can induce stress concentrations.
*   **Example:** Measuring the elongation of a tensile test specimen to determine Young's modulus.

#### **2.2 Electrical Resistance Strain Gauges**

*   **Princ:** Based on the piezoresistive effect, where the electrical resistance of a conductor changes with applied strain.
*   **Key Concept:** Gauge Factor ($GF$): The ratio of the fractional change in electrical resistance to the fractional change in length.
    $$GF = \frac{\Delta R / R}{\Delta L / L} = \frac{\Delta R / R}{\epsilon}$$
    *   For metallic strain gauges, $GF$ is typically around 2.
*   **Construction:**
    *   **Grid:** Thin metallic foil (e.g., constantan, iso-elastic alloy) etched into a pattern of fine wires or ribbons to maximize resistance and sensitivity within a small area.
    *   **Carrier:** A thin, flexible insulating material (e.g., polyimide, phenolic resin) to which the grid is bonded.
    *   **Backing:** Provides mechanical support and allows for bonding to the surface.
    *   **Leads:** Connect the strain gauge to the measuring instrument.
*   **Wheatstone Bridge Configuration:** The most common method for measuring small changes in resistance.
    *   **Basic Wheatstone Bridge:** Four resistors in a diamond configuration.
    *   **Sensitivity:** A strain gauge is typically used as one arm of a balanced Wheatstone bridge. When the strain gauge experiences strain, its resistance changes, causing the bridge to become unbalanced, producing an output voltage proportional to the strain.
    *   **Complete Bridge:** Using four active strain gauges (e.g., two active in tension and two active in compression, or two active and two dummy gauges) provides maximum sensitivity and cancels out temperature effects.
    *   **Half Bridge:** One active gauge and one dummy gauge (or a fixed resistor).
    *   **Quarter Bridge:** One active gauge and three fixed resistors.
*   **Types of Strain Gauges:**
    *   **Foil Gauges:** Most common, versatile.
    *   **Wire Gauges:** Used for high temperatures or specific applications.
    *   **Semiconductor Gauges:** Higher gauge factor, but more temperature sensitive and brittle.
*   **Installation:**
    *   **Surface Preparation:** Crucial for accurate measurements. Degreasing, sanding, and cleaning are essential.
    *   **Adhesive:** Special strain gauge adhesives (e.g., M-Bond 200) are used for strong bonding.
    *   **Wiring:** Correct wiring to the Wheatstone bridge is vital.
    *   **Encapsulation:** Protecting the gauge from environmental factors (moisture, abrasion).
*   **Advantages:**
    *   High sensitivity and accuracy.
    *   Small gauge length, allowing measurement of localized strain.
    *   Can be applied to various geometries and materials.
    *   Can measure both static and dynamic strains.
*   **Limitations:**
    *   Requires careful installation and surface preparation.
    *   Sensitive to temperature changes (requiring compensation techniques).
    *   Limited to the accessible surface.
    *   Can be fragile.
    *   Requires electrical excitation.
*   **Example:** Measuring strain on a bridge component during load testing to assess its structural integrity.

#### **2.3 Optical Methods**

*   **Princ:** Utilize light to measure deformation without physical contact or minimal contact.
*   **Types:**
    *   **Interferometry (e.g., Michelson Interferometer):** Measures very small displacements by analyzing interference patterns of light waves. Highly sensitive but requires precise alignment and stable environments.
    *   **Laser Speckle Interferometry:** Analyzes the change in speckle patterns generated when laser light scatters off a rough surface. Sensitive to surface deformation.
    *   **Moire Fringe Techniques:** Involve overlaying a fine grid (master grating) with a deformed grid (specimen grating) to create interference patterns (Moire fringes) that represent strain contours.
        *   **Optical Setup:** Requires a light source, a master grating, and a specimen with a grating or a surface that can be gratings applied to it.
        *   **Interpretation:** The spacing and direction of Moire fringes are directly related to the displacement and strain components.
    *   **Digital Image Correlation (DIC):** A non-contact optical technique that tracks the displacement of a random speckle pattern applied to the surface of a deforming object.
        *   **Process:**
            1.  Apply a random, high-contrast speckle pattern to the specimen.
            2.  Capture images of the specimen in its undeformed state.
            3.  Apply load and capture images of the deformed state.
            4.  Software correlates subsets of pixels in the deformed images with the undeformed images to determine displacement fields.
            5.  Strain fields are derived from the displacement fields.
        *   **Advantages:**
            *   Full-field measurement (provides strain distribution over the entire surface).
            *   Non-contact, does not affect the deformation.
            *   Can measure large deformations.
            *   Suitable for complex geometries.
            *   Can measure in-plane and out-of-plane displacements.
        *   **Limitations:**
            *   Requires a clear line of sight.
            *   Speckle pattern application is crucial.
            *   Requires sophisticated image processing software.
            *   Can be sensitive to lighting conditions.
*   **Example:** Using DIC to map strain distribution on a composite material panel under bending.

#### **2.4 Other Methods**

*   **Capacitive Strain Gauges:** Measure strain by detecting changes in capacitance between conductive plates.
*   **Inductive Strain Gauges (LVDTs):** Measure displacement by changes in inductance. Often used in extensometers.
*   **Fiber Optic Strain Sensors:** Utilize changes in light properties (e.g., refractive index, wavelength) propagating through optical fibers as they are strained. Offer advantages in harsh environments, EMI immunity, and multiplexing.

---

### **3. Strain Rosettes**

*   **Purpose:** To determine the state of strain (normal strains in different directions) at a point on a surface, from which principal strains and principal stresses can be calculated.
*   **Concept:** Strain gauges are arranged in a specific pattern on the surface. By measuring the strains in these known directions, the strain state at that point can be fully characterized.
*   **Types of Rosettes:**
    *   **Rectangular (45° Rosette):** Three gauges placed at 0°, 45°, and 90° to a reference axis.
        *   *Diagram:* [Imagine three strain gauges arranged like a clover leaf, with one pointing up, one to the right, and one diagonally at 45 degrees relative to the first two].
        *   *Gauges:* $\epsilon_0$, $\epsilon_{45}$, $\epsilon_{90}$.
    *   **Delta (60° Rosette):** Three gauges placed at 0°, 60°, and 120° to a reference axis.
        *   *Diagram:* [Imagine three strain gauges arranged like a Y shape, with equal spacing of 60 degrees between them].
        *   *Gauges:* $\epsilon_0$, $\epsilon_{60}$, $\epsilon_{120}$.
    *   **T-Rosette:** Two gauges placed at 0° and 90°, with a third gauge at 180° (which is redundant with $\epsilon_0$ for in-plane measurements but can be useful for specific applications or error checking).
*   **Mathematical Formulation (General):**
    The normal strain $\epsilon_\theta$ in a direction $\theta$ relative to an axis $x$ is given by:
    $$\epsilon_\theta = \epsilon_x \cos^2\theta + \epsilon_y \sin^2\theta + 2\gamma_{xy} \sin\theta \cos\theta$$
    This can be rewritten as:
    $$\epsilon_\theta = \frac{\epsilon_x + \epsilon_y}{2} + \frac{\epsilon_x - \epsilon_y}{2} \cos(2\theta) + \gamma_{xy} \sin(2\theta)$$

*   **Derivation of Principal Strains from a Rectangular Rosette ($\epsilon_0, \epsilon_{45}, \epsilon_{90}$):**
    1.  **Calculate Shear Strain ($\gamma_{xy}$):**
        From the general formula, for $\theta = 45^\circ$:
        $$\epsilon_{45} = \frac{\epsilon_x + \epsilon_y}{2} + \frac{\epsilon_x - \epsilon_y}{2} \cos(90^\circ) + \gamma_{xy} \sin(90^\circ)$$
        $$\epsilon_{45} = \frac{\epsilon_x + \epsilon_y}{2} + \gamma_{xy}$$
        We also know:
        $$\epsilon_0 = \epsilon_x$$
        $$\epsilon_{90} = \epsilon_y$$
        Substituting these into the $\epsilon_{45}$ equation:
        $$\epsilon_{45} = \frac{\epsilon_0 + \epsilon_{90}}{2} + \gamma_{xy}$$
        Therefore,
        $$\gamma_{xy} = \epsilon_{45} - \frac{\epsilon_0 + \epsilon_{90}}{2}$$
    2.  **Calculate Principal Strains ($\epsilon_1, \epsilon_2$):**
        The principal strains occur at angles $\phi$ where the shear strain is zero. Using the formula for $\epsilon_\theta$:
        $$\epsilon_\theta = \frac{\epsilon_x + \epsilon_y}{2} + \frac{\epsilon_x - \epsilon_y}{2} \cos(2\theta) + \gamma_{xy} \sin(2\theta)$$
        The angle of the principal strain is given by:
        $$\tan(2\phi) = \frac{\gamma_{xy}}{(\epsilon_x - \epsilon_y)/2}$$
        Substituting the values:
        $$\tan(2\phi) = \frac{\epsilon_{45} - (\epsilon_0 + \epsilon_{90})/2}{(\epsilon_0 - \epsilon_{90})/2} = \frac{2\epsilon_{45} - \epsilon_0 - \epsilon_{90}}{\epsilon_0 - \epsilon_{90}}$$
        The magnitude of the principal strains is:
        $$\epsilon_{1,2} = \frac{\epsilon_x + \epsilon_y}{2} \pm \sqrt{\left(\frac{\epsilon_x - \epsilon_y}{2}\right)^2 + \gamma_{xy}^2}$$
        Substituting the measured strains:
        $$\epsilon_{1,2} = \frac{\epsilon_0 + \epsilon_{90}}{2} \pm \sqrt{\left(\frac{\epsilon_0 - \epsilon_{90}}{2}\right)^2 + \left(\epsilon_{45} - \frac{\epsilon_0 + \epsilon_{90}}{2}\right)^2}$$

*   **Derivation of Principal Strains from a Delta Rosette ($\epsilon_0, \epsilon_{60}, \epsilon_{120}$):**
    1.  **Calculate Shear Strain ($\gamma_{xy}$):**
        Using the general formula:
        $$\epsilon_{60} = \frac{\epsilon_x + \epsilon_y}{2} + \frac{\epsilon_x - \epsilon_y}{2} \cos(120^\circ) + \gamma_{xy} \sin(120^\circ)$$
        $$\epsilon_{120} = \frac{\epsilon_x + \epsilon_y}{2} + \frac{\epsilon_x - \epsilon_y}{2} \cos(240^\circ) + \gamma_{xy} \sin(240^\circ)$$
        This leads to:
        $$\gamma_{xy} = \frac{2}{\sqrt{3}}\left(\epsilon_{60} - \epsilon_{120}\right)$$
        (Note: The derivation for $\gamma_{xy}$ and principal strains for a delta rosette is slightly more complex algebraically but follows the same principles). A more convenient formula for principal strains directly from a delta rosette is:
    2.  **Calculate Principal Strains ($\epsilon_1, \epsilon_2$):**
        $$\epsilon_{1,2} = \frac{\epsilon_0 + \epsilon_{60} + \epsilon_{120}}{3} \pm \frac{\sqrt{2}}{3}\sqrt{(\epsilon_0 - \epsilon_{60})^2 + (\epsilon_{60} - \epsilon_{120})^2 + (\epsilon_{120} - \epsilon_0)^2}$$

*   **Calculating Principal Stresses:**
    Once principal strains ($\epsilon_1, \epsilon_2$) are known, principal stresses ($\sigma_1, \sigma_2$) can be calculated using generalized Hooke's Law for plane stress:
    $$\sigma_1 = \frac{E}{1-\nu^2} (\epsilon_1 + \nu\epsilon_2)$$
    $$\sigma_2 = \frac{E}{1-\nu^2} (\epsilon_2 + \nu\epsilon_1)$$
    Where $E$ is Young's Modulus and $\nu$ is Poisson's Ratio.

---

### **4. Practical Considerations and Sources of Error**

*   **Temperature Compensation:**
    *   **Princ:** Temperature changes cause thermal expansion, which is interpreted as strain by the gauge.
    *   **Methods:**
        *   **Dummy Gauge:** A strain gauge of identical type and orientation, bonded to an unstressed piece of the same material, placed in the same temperature environment, and wired in the Wheatstone bridge to cancel out temperature effects.
        *   **Bridge Circuit Design:** Using specific bridge configurations (e.g., half-bridge with a dummy) can automatically compensate.
        *   **Software Compensation:** Applying known thermal expansion coefficients in post-processing.
*   **Transverse Sensitivity:** Strain gauges respond to strains perpendicular to their primary axis. This effect needs to be accounted for, especially in situations with significant transverse strain.
    *   **Transverse Sensitivity Coefficient ($K_t$):** Defined as the ratio of transverse strain to axial strain that produces the same resistance change.
    *   **Correction:** $\epsilon_{true} = \frac{\epsilon_{measured} - K_t \epsilon_{transverse}}{1 - K_t \nu}$ (simplified form) or using more comprehensive bridge output equations.
*   **Installation Errors:**
    *   **Adhesive Quality:** Poor bonding can lead to slippage or gauge detachment.
    *   **Surface Preparation:** Contamination can affect bonding and strain transfer.
    *   **Alignment:** Misalignment of the gauge relative to the expected strain field.
*   **Gauge Factor Variation:** The actual $GF$ of a gauge might deviate slightly from the nominal value. Calibration is important.
*   **Non-Linearity:** At very large strains, the piezoresistive effect may become non-linear.
*   **Dynamic Strain Measurement:**
    *   **Frequency Response:** The strain gauge system must have a sufficiently high natural frequency to accurately capture dynamic strains.
    *   **Damping:** Proper damping of the system is needed to avoid oscillations.
    *   **Carrier Frequency Amplification:** For very high-frequency strains, AC-coupled amplifiers with carrier frequency modulation are used.
*   **Environmental Factors:** Humidity, chemical exposure, radiation.

---

### **5. Applications of Strain Measurement**

*   **Structural Health Monitoring:** Monitoring bridges, aircraft, buildings for signs of stress or fatigue.
*   **Material Testing:** Determining elastic properties (Young's modulus, Poisson's ratio), yield strength, ultimate tensile strength.
*   **Component Design & Validation:** Stress analysis on automotive parts, aerospace components, machine elements.
*   **Manufacturing Quality Control:** Ensuring parts are manufactured within tolerance.
*   **Biomechanics:** Measuring strain on bone, implants, or tissues.
*   **Pressure Transducers:** Strain gauges are often used as the sensing element in pressure sensors.
*   **Force/Torque Sensors:** Load cells utilize strain gauges to measure applied forces or torques.

---

### **6. Accuracy and Reliability Evaluation**

*   **Calibration:** Regular calibration of strain gauges and associated instrumentation against known standards.
*   **Systematic vs. Random Errors:** Understanding the sources of error and implementing measures to minimize them.
*   **Uncertainty Analysis:** Quantifying the overall uncertainty in the strain measurement, considering all contributing factors.
*   **Redundancy:** Using multiple strain gauges or measurement systems to verify results.
*   **Comparison with Other Methods:** Validating strain gauge results with analytical solutions or other measurement techniques.

---

### **Practice Questions & Exercises**

**Question 1 (LO1, LO5):**
A rectangular strain rosette is applied to a surface. The readings obtained are $\epsilon_0 = 200 \mu\epsilon$, $\epsilon_{45} = 350 \mu\epsilon$, and $\epsilon_{90} = 400 \mu\epsilon$. Calculate:
a) The strain in the x-direction ($\epsilon_x$).
b) The strain in the y-direction ($\epsilon_y$).
c) The shear strain ($\gamma_{xy}$).
d) The principal strains ($\epsilon_1, \epsilon_2$).
e) The angle of the principal strain $\epsilon_1$ with respect to the x-axis.

**Answer 1:**
Given: $\epsilon_0 = 200 \mu\epsilon$, $\epsilon_{45} = 350 \mu\epsilon$, $\epsilon_{90} = 400 \mu\epsilon$.

a) $\epsilon_x = \epsilon_0 = 200 \mu\epsilon$
b) $\epsilon_y = \epsilon_{90} = 400 \mu\epsilon$
c) $\gamma_{xy} = \epsilon_{45} - \frac{\epsilon_0 + \epsilon_{90}}{2} = 350 - \frac{200 + 400}{2} = 350 - 300 = 50 \mu\epsilon$

d) Principal Strains:
$\epsilon_{1,2} = \frac{\epsilon_0 + \epsilon_{90}}{2} \pm \sqrt{\left(\frac{\epsilon_0 - \epsilon_{90}}{2}\right)^2 + \left(\epsilon_{45} - \frac{\epsilon_0 + \epsilon_{90}}{2}\right)^2}$
$\epsilon_{1,2} = \frac{200 + 400}{2} \pm \sqrt{\left(\frac{200 - 400}{2}\right)^2 + \left(350 - \frac{200 + 400}{2}\right)^2}$
$\epsilon_{1,2} = 300 \pm \sqrt{\left(\frac{-200}{2}\right)^2 + (350 - 300)^2}$
$\epsilon_{1,2} = 300 \pm \sqrt{(-100)^2 + (50)^2}$
$\epsilon_{1,2} = 300 \pm \sqrt{10000 + 2500}$
$\epsilon_{1,2} = 300 \pm \sqrt{12500}$
$\epsilon_{1,2} = 300 \pm 111.803 \mu\epsilon$

$\epsilon_1 = 300 + 111.803 = 411.803 \mu\epsilon$
$\epsilon_2 = 300 - 111.803 = 188.197 \mu\epsilon$

e) Angle of $\epsilon_1$:
$\tan(2\phi) = \frac{2\epsilon_{45} - \epsilon_0 - \epsilon_{90}}{\epsilon_0 - \epsilon_{90}} = \frac{2(350) - 200 - 400}{200 - 400} = \frac{700 - 600}{-200} = \frac{100}{-200} = -0.5$
$2\phi = \arctan(-0.5) \approx -26.565^\circ$
$\phi \approx -13.28^\circ$

**Question 2 (LO2, LO4):**
Discuss two significant limitations of using foil strain gauges for measuring strains in a high-temperature environment and how these limitations can be mitigated.

**Answer 2:**
Two significant limitations of foil strain gauges in high-temperature environments are:

1.  **Thermal Expansion and Zero Shift:**
    *   **Limitation:** At elevated temperatures, both the specimen material and the strain gauge itself undergo thermal expansion. This thermal expansion is interpreted as strain by the gauge, leading to a "zero shift" and inaccurate readings. The adhesive can also soften or degrade.
    *   **Mitigation:**
        *   **Temperature Compensation Techniques:** Using dummy gauges in a Wheatstone bridge configuration that are exposed to the same temperature but not the same strain. This cancels out the effect of thermal expansion.
        *   **Using High-Temperature Strain Gauges:** Specialized strain gauges made with alloys and backing materials designed for high-temperature stability (e.g., Karma alloy, Kapton backing) can be used.
        *   **Careful Adhesive Selection:** Employing high-temperature adhesives that maintain their bonding strength and electrical insulation properties at elevated temperatures.
        *   **Software Correction:** Calibrating the system at various temperatures and applying correction factors based on the known thermal expansion coefficients.

2.  **Change in Gauge Factor and Resistivity:**
    *   **Limitation:** The electrical resistivity and, consequently, the gauge factor of the metallic foil used in strain gauges can change with temperature. This change can be non-linear and depends on the specific alloy.
    *   **Mitigation:**
        *   **Calibration:** Performing thorough calibration of the strain gauge system across the operating temperature range.
        *   **Using Temperature-Compensated Gauges:** Manufacturers often produce gauges with inherent temperature compensation, where the alloy and grid design are optimized to minimize $GF$ variation with temperature.
        *   **Bridge Configurations:** Utilizing full-bridge configurations with multiple active gauges can help average out some of these effects, especially if the gauges experience similar temperature variations.

**Question 3 (LO1, LO3):**
A delta strain rosette is applied to a component. The readings are $\epsilon_A = 150 \mu\epsilon$, $\epsilon_B = -50 \mu\epsilon$, and $\epsilon_C = 200 \mu\epsilon$, where the gauges are oriented at 0°, 120°, and 240° respectively. Determine the principal strains and principal stresses if the material is steel with $E = 200 \text{ GPa}$ and $\nu = 0.3$. Assume plane stress conditions.

**Answer 3:**
Given: $\epsilon_A = 150 \mu\epsilon$ (at 0°), $\epsilon_B = -50 \mu\epsilon$ (at 120°), $\epsilon_C = 200 \mu\epsilon$ (at 240°).
$E = 200 \text{ GPa} = 200 \times 10^9 \text{ Pa}$
$\nu = 0.3$

Principal Strains ($\epsilon_{1,2}$):
Using the formula for a delta rosette:
$\epsilon_{1,2} = \frac{\epsilon_A + \epsilon_B + \epsilon_C}{3} \pm \frac{\sqrt{2}}{3}\sqrt{(\epsilon_A - \epsilon_B)^2 + (\epsilon_B - \epsilon_C)^2 + (\epsilon_C - \epsilon_A)^2}$

Sum of strains: $\epsilon_A + \epsilon_B + \epsilon_C = 150 + (-50) + 200 = 300 \mu\epsilon$
$\frac{\epsilon_A + \epsilon_B + \epsilon_C}{3} = \frac{300}{3} = 100 \mu\epsilon$

Term under the square root:
$(\epsilon_A - \epsilon_B)^2 = (150 - (-50))^2 = (200)^2 = 40000$
$(\epsilon_B - \epsilon_C)^2 = (-50 - 200)^2 = (-250)^2 = 62500$
$(\epsilon_C - \epsilon_A)^2 = (200 - 150)^2 = (50)^2 = 2500$

Sum of squared differences: $40000 + 62500 + 2500 = 105000$

$\epsilon_{1,2} = 100 \pm \frac{\sqrt{2}}{3}\sqrt{105000}$
$\epsilon_{1,2} = 100 \pm \frac{1.4142}{3} \times 324.037$
$\epsilon_{1,2} = 100 \pm 0.4714 \times 324.037$
$\epsilon_{1,2} = 100 \pm 152.75 \mu\epsilon$

$\epsilon_1 = 100 + 152.75 = 252.75 \mu\epsilon$
$\epsilon_2 = 100 - 152.75 = -52.75 \mu\epsilon$

Principal Stresses (Plane Stress):
$\sigma_1 = \frac{E}{1-\nu^2} (\epsilon_1 + \nu\epsilon_2)$
$\sigma_1 = \frac{200 \times 10^9 \text{ Pa}}{1-(0.3)^2} (252.75 \times 10^{-6} + 0.3 \times (-52.75 \times 10^{-6}))$
$\sigma_1 = \frac{200 \times 10^9}{0.91} (252.75 \times 10^{-6} - 15.825 \times 10^{-6})$
$\sigma_1 = 219.78 \times 10^9 \text{ Pa} \times (236.925 \times 10^{-6})$
$\sigma_1 \approx 52.09 \times 10^6 \text{ Pa} = 52.09 \text{ MPa}$

$\sigma_2 = \frac{E}{1-\nu^2} (\epsilon_2 + \nu\epsilon_1)$
$\sigma_2 = \frac{200 \times 10^9 \text{ Pa}}{1-(0.3)^2} (-52.75 \times 10^{-6} + 0.3 \times 252.75 \times 10^{-6})$
$\sigma_2 = \frac{200 \times 10^9}{0.91} (-52.75 \times 10^{-6} + 75.825 \times 10^{-6})$
$\sigma_2 = 219.78 \times 10^9 \text{ Pa} \times (23.075 \times 10^{-6})$
$\sigma_2 \approx 5.07 \times 10^6 \text{ Pa} = 5.07 \text{ MPa}$

---

### **Important Points to Remember:**

*   Strain is a dimensionless measure of deformation.
*   Extensometers are mechanical devices, generally less sensitive but can measure large strains.
*   Strain gauges rely on the piezoresistive effect and are highly sensitive but require careful installation and temperature compensation.
*   Wheatstone bridges are essential for accurately measuring small resistance changes from strain gauges.
*   Optical methods like DIC offer full-field, non-contact strain measurement.
*   Strain rosettes are crucial for determining the complete in-plane strain state and subsequently calculating principal strains and stresses.
*   Temperature effects and proper installation are critical sources of error in strain measurement.
*   Understanding the limitations and advantages of each technique is vital for selecting the appropriate method for a given application.

---
