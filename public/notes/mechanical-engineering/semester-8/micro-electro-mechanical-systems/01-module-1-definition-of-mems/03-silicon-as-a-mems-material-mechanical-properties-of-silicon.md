---
title: "Silicon as a MEMS material – mechanical properties of silicon."
subject: "MICRO ELECTRO MECHANICAL SYSTEMS"
module: "Module 1: Definition of MEMS."
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1a51d0cf480446477f"
status: "completed"
scrapedAt: "2026-05-20T18:22:21.971Z"
---
# MICRO ELECTRO MECHANICAL SYSTEMS (MEMS)

## Module 1: Definition of MEMS

### Topic: Silicon as a MEMS Material – Mechanical Properties of Silicon

---

### **1. Introduction to MEMS Materials**

*   **Definition of MEMS:** Micro Electro-Mechanical Systems (MEMS) are devices that combine mechanical and electrical functions at the micro-scale. They are typically fabricated using integrated circuit (IC) manufacturing techniques. (Hsu, 2008)
*   **Importance of Material Selection:** The choice of material is crucial for MEMS devices as it dictates their performance, fabrication methods, and ultimate application. Many materials are used in MEMS, including silicon, polymers, ceramics, and metals.
*   **Silicon's Prominence:** Silicon is the most widely used material in MEMS due to a confluence of factors:
    *   **Abundant:** Silicon is the second most abundant element in the Earth's crust.
    *   **Well-Established Fabrication Technology:** The semiconductor industry has developed mature and cost-effective processes for silicon processing, which can be adapted for MEMS.
    *   **Excellent Mechanical Properties:** Silicon exhibits remarkable mechanical characteristics suitable for micro-scale structures.
    *   **Electrical Properties:** Silicon's semiconductor properties allow for the integration of sensing and actuation mechanisms.

---

### **2. Mechanical Properties of Silicon**

This section delves into the mechanical properties of silicon that make it an ideal material for MEMS. These properties are critical for understanding how silicon microstructures will behave under stress and strain, which directly impacts device performance and reliability.

#### **2.1 Young's Modulus (Elastic Modulus, E)**

*   **Definition:** Young's Modulus is a measure of a material's stiffness or resistance to elastic deformation under tensile or compressive stress. It is the ratio of stress to strain in the elastic region.
    *   **Formula:** $E = \frac{\text{Stress}}{\text{Strain}} = \frac{\sigma}{\epsilon}$
*   **Silicon's Young's Modulus:**
    *   Silicon's Young's Modulus is anisotropic, meaning it varies depending on the crystallographic orientation.
    *   **Commonly cited values:**
        *   Along the <100> crystallographic direction: $E_{100} \approx 130 \text{ GPa}$
        *   Along the <110> crystallographic direction: $E_{110} \approx 166 \text{ GPa}$
        *   Along the <111> crystallographic direction: $E_{111} \approx 186 \text{ GPa}$
    *   **Implication for MEMS:** This anisotropy allows designers to select specific crystallographic orientations for beams, diaphragms, and other structural elements to achieve desired stiffness or flexibility. For example, a beam oriented along the <110> direction will be stiffer than one along the <100> direction. (Hsu, 2008; Madou, 2002)
*   **Comparison:** Silicon's Young's Modulus is comparable to that of steel, making it suitable for load-bearing applications at the micro-scale.

#### **2.2 Poisson's Ratio ($\nu$)**

*   **Definition:** Poisson's ratio is the ratio of transverse strain (strain perpendicular to the applied stress) to axial strain (strain in the direction of applied stress).
    *   **Formula:** $\nu = -\frac{\epsilon_{\text{transverse}}}{\epsilon_{\text{axial}}}$
*   **Silicon's Poisson's Ratio:**
    *   Like Young's Modulus, Poisson's ratio for silicon is also anisotropic.
    *   **Values typically range from:** $\approx 0.25$ to $0.3$.
    *   **Implication for MEMS:** This property is important for understanding how a material will deform laterally when stretched or compressed. It influences the behavior of membranes and thin films.

#### **2.3 Tensile Strength and Yield Strength**

*   **Definition of Tensile Strength:** The maximum stress a material can withstand while being stretched or pulled before necking (local reduction in cross-sectional area) and breaking.
*   **Definition of Yield Strength:** The stress at which a material begins to deform plastically (permanently). Below the yield strength, the material returns to its original shape after the stress is removed (elastic deformation).
*   **Silicon's Strength:**
    *   Single-crystal silicon possesses very high tensile strength, often quoted in the range of several GPa.
    *   **Crucially, silicon exhibits a very high yield strength.** This means that micro-scale silicon structures can withstand significant stress before permanent deformation occurs.
    *   **Values:** Tensile strength can be as high as $\approx 7 \text{ GPa}$ for defect-free single-crystal silicon. Yield strength is also very high.
    *   **Implication for MEMS:** The high yield strength allows MEMS devices to operate under significant mechanical loads without permanent damage, leading to higher reliability and robustness. (Hsu, 2008; Gad-el-Hak, 2002)
*   **Anisotropy in Strength:** Strength can also vary with crystallographic orientation, though this effect is often less pronounced than that for Young's modulus.

#### **2.4 Fracture Toughness ($K_{IC}$)**

*   **Definition:** Fracture toughness is a measure of a material's resistance to the propagation of a crack. It quantifies the stress intensity factor at which a crack will begin to grow.
*   **Silicon's Fracture Toughness:**
    *   Silicon's fracture toughness is relatively low compared to ductile metals, meaning it is more susceptible to brittle fracture if there are pre-existing flaws or cracks.
    *   **Typical values:** $K_{IC} \approx 0.7 - 1.5 \text{ MPa}\sqrt{m}$.
    *   **Implication for MEMS:** This property highlights the importance of careful fabrication to minimize defects and stresses. Understanding fracture toughness is crucial for predicting the service life of MEMS components under dynamic or cyclic loading. (Hsu, 2008; Madou, 2002)

#### **2.5 Hardness**

*   **Definition:** Hardness is a measure of a material's resistance to scratching, indentation, or abrasion.
*   **Silicon's Hardness:**
    *   Silicon is a very hard material.
    *   **Mohs Hardness:** Silicon has a Mohs hardness of approximately 7.
    *   **Vickers Hardness:** Vickers hardness values can range from 800 to 1100 $\text{kgf/mm}^2$.
    *   **Implication for MEMS:** Its hardness makes silicon resistant to wear and abrasion during operation. However, it also makes machining and grinding more challenging.

#### **2.6 Density ($\rho$)**

*   **Definition:** Density is the mass of a substance per unit volume.
*   **Silicon's Density:**
    *   **Value:** $\rho_{\text{Si}} \approx 2.33 \text{ g/cm}^3$ (for crystalline silicon).
    *   **Implication for MEMS:** Density influences the inertial properties of MEMS devices, such as resonant frequency and acceleration response. Lower density is often desirable for high-speed applications or for devices that need to be lightweight.

#### **2.7 Thermal Properties (Relevant to Mechanical Behavior)**

*   **Coefficient of Thermal Expansion (CTE):**
    *   **Definition:** The fractional change in volume per unit degree change in temperature.
    *   **Silicon's CTE:** Isotropic for <100> and <110> orientations at room temperature, $\alpha_{\text{Si}} \approx 2.6 \times 10^{-6} /^\circ\text{C}$.
    *   **Implication for MEMS:** CTE mismatch between silicon and other materials used in a MEMS device (e.g., packaging, electrodes) can lead to significant stress due to temperature variations, potentially causing device failure. For example, bonding silicon to a substrate with a different CTE requires careful consideration. (Hsu, 2008)
*   **Thermal Conductivity:**
    *   **Definition:** The ability of a material to conduct heat.
    *   **Silicon's Thermal Conductivity:** High, $\approx 149 \text{ W/(m}\cdot\text{K)}$ at room temperature.
    *   **Implication for MEMS:** High thermal conductivity is beneficial for dissipating heat generated by electrical components or from frictional losses in moving parts.

---

### **3. Anisotropy and its Significance**

*   **Crystallographic Planes and Directions:** Silicon crystallizes in a diamond cubic lattice structure. The arrangement of atoms is different on different crystallographic planes and along different directions.
*   **Impact on Properties:** This atomic arrangement leads to variations in:
    *   **Young's Modulus:** Different stiffnesses along different crystallographic axes.
    *   **Tensile Strength:** Slight variations in strength.
    *   **Etching Rates:** This is a critical aspect for fabrication. Chemical etching processes (e.g., using KOH) attack different crystallographic planes at vastly different rates.
        *   **Etch Stop Planes:** Planes like {111} are often used as etch stops because they are etched much slower than other planes like {100} or {110}.
        *   **Example:** Deep reactive ion etching (DRIE) relies on the anisotropic nature of silicon etching to create high-aspect-ratio structures like vertical sidewalls. (Madou, 2002; Gad-el-Hak, 2002)
*   **Design Considerations:** MEMS designers must leverage this anisotropy:
    *   **Beam Design:** Orienting beams along specific crystallographic directions to control stiffness and resonant frequencies.
    *   **Diaphragm Design:** Choosing wafer orientations to achieve specific mechanical responses under pressure.
    *   **Microstructures:** Creating precisely angled sidewalls or features using anisotropic etching.

---

### **4. MEMS Design Concepts and Working Principles (K2 Alignment)**

*   **How Silicon's Mechanical Properties Influence Design:**
    *   **Springs and Beams:** The high Young's modulus and yield strength allow for the creation of stiff and durable micro-springs and beams that can withstand mechanical loads without yielding. The anisotropy allows tuning of their stiffness.
    *   **Diaphragms and Membranes:** Silicon's ability to be thinned down to a few micrometers and its mechanical strength enable the creation of pressure-sensitive diaphragms for sensors like pressure sensors. The specific crystallographic orientation can influence the deflection characteristics.
    *   **Micro-actuators:** The high strength and elasticity of silicon are crucial for micro-actuators like electrostatic or piezoelectric actuators, which rely on the precise deformation of silicon structures.
    *   **Micro-resonators:** The stiffness and density of silicon determine the resonant frequency of micro-mechanical resonators, which are used in applications like filters and sensors.
*   **Working Principles:** The mechanical properties dictate how these components will deform, vibrate, or transmit forces under applied electrical or physical stimuli, forming the basis of many MEMS working principles. For instance, in a capacitive accelerometer, the inertial mass (made of silicon) deflects under acceleration, changing the capacitance between two electrodes. The silicon beam supporting the mass needs sufficient stiffness and strength to withstand the forces.

---

### **5. MEMS Fabrication Process (K2 Alignment)**

*   **Silicon as a Substrate:** Silicon wafers are the foundational substrate for most MEMS fabrication.
*   **Bulk Micromachining:** Processes like wet etching (e.g., KOH) and dry etching (e.g., DRIE) are used to selectively remove silicon to create 3D structures. The anisotropic etching behavior of silicon is fundamental to achieving specific geometries. For example, etching a (100) silicon wafer in KOH solution will create V-grooves with {111} sidewalls.
*   **Surface Micromachining:** This involves depositing and patterning thin films on a silicon substrate. The mechanical properties of these thin films (often polysilicon or silicon nitride) are critical, and their interaction with the silicon substrate under thermal or mechanical stress must be considered.
*   **Wafer Bonding:** Silicon wafers can be bonded to other materials. Understanding the thermal expansion coefficients of silicon and the bonding material is crucial to prevent stress-induced failure after bonding.

---

### **6. Examples**

*   **Pressure Sensors:** Diaphragms made of silicon deflect under pressure. The stress distribution within the diaphragm is directly related to silicon's Young's modulus and Poisson's ratio.
*   **Accelerometers:** A proof mass suspended by silicon beams. The stiffness and strength of these beams, determined by silicon's mechanical properties and orientation, are critical for the sensor's range and sensitivity.
*   **Micro-mirrors (e.g., in DLP projectors):** Individual mirrors are fabricated from silicon and tilted using electrostatic forces. The stiffness of the hinge mechanism, made of silicon, influences the mirror's response time and stability.
*   **Micro-resonators:** Tiny tuning fork-like structures made of silicon vibrate at a specific frequency. The resonant frequency is a direct function of silicon's mechanical properties and the geometry of the resonator.

---

### **7. Important Points to Remember**

*   **Anisotropy is key:** Silicon's mechanical properties (Young's Modulus, etching rates) are direction-dependent due to its crystal structure. This is both a challenge and an opportunity in MEMS design and fabrication.
*   **High Strength and Stiffness:** Silicon's high tensile and yield strength, along with a comparable Young's modulus to steel, make it excellent for load-bearing micro-structures.
*   **Brittle Nature:** While strong, silicon is brittle. Its fracture toughness is lower than ductile metals, making defect control crucial.
*   **CTE Mismatch:** The coefficient of thermal expansion needs careful consideration when integrating silicon with other materials.
*   **Foundation of MEMS:** Silicon's versatility stems from the synergy of its excellent mechanical properties and the mature semiconductor fabrication technologies available for it.

---

### **8. Practice Questions and Exercises**

**Question 1:**
Explain why silicon is the most popular material for MEMS fabrication, referencing its mechanical properties.

**Answer 1:**
Silicon is the most popular MEMS material due to:
1.  **Abundance and Cost-Effectiveness:** It is readily available and leverages established semiconductor manufacturing processes, making it cost-effective.
2.  **Excellent Mechanical Properties:**
    *   **High Young's Modulus:** Makes silicon structures stiff and resistant to deformation, suitable for load-bearing applications.
    *   **High Tensile and Yield Strength:** Allows MEMS devices to withstand significant mechanical stress without permanent damage, enhancing reliability.
    *   **Anisotropy:** The directional dependence of its mechanical properties (e.g., Young's Modulus) allows designers to tune stiffness and etching characteristics by choosing specific crystallographic orientations.
3.  **Semiconductor Properties:** Allows for the integration of electrical functions (sensing, actuation) with mechanical structures.
4.  **Mature Fabrication Technology:** Decades of development in the IC industry have provided sophisticated tools and techniques for processing silicon.

**Question 2:**
A silicon beam is to be designed as a spring element in a micro-accelerometer.
a) How does the crystallographic orientation of the silicon wafer affect the stiffness of the beam?
b) If the beam is subjected to a temperature change, what property of silicon needs to be considered to predict potential stress?

**Answer 2:**
a) The stiffness of a silicon beam is directly related to its Young's Modulus, which is anisotropic.
*   A beam oriented along the <110> direction will have a higher Young's Modulus ($\approx 166 \text{ GPa}$) than one oriented along the <100> direction ($\approx 130 \text{ GPa}$).
*   Therefore, a beam fabricated along the <110> direction will be stiffer for the same dimensions. The design choice of orientation allows for tuning the spring constant of the accelerometer's suspension.

b) The **Coefficient of Thermal Expansion (CTE)** of silicon needs to be considered. If the silicon beam is bonded to or integrated with another material that has a different CTE, temperature variations will induce stress in both materials due to differential expansion or contraction. This can lead to deformation, fatigue, or even fracture of the MEMS device.

**Question 3:**
What is the primary implication of silicon's relatively low fracture toughness for MEMS design and fabrication?

**Answer 3:**
The relatively low fracture toughness of silicon means it is more susceptible to brittle fracture if there are pre-existing flaws, micro-cracks, or stress concentrations. This necessitates:
*   **Careful Fabrication:** Minimizing defects during etching, deposition, and bonding processes.
*   **Stress Management:** Avoiding or mitigating residual stresses induced during fabrication.
*   **Design Considerations:** Designing structures to avoid sharp corners or stress raisers where cracks can initiate and propagate.
*   **Understanding Load Limits:** Operating devices within stress limits that prevent crack growth, especially under dynamic or cyclic loading.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### **9. References**

*   Hsu, T.-R. (2008). *Mems & Microsystems Design and Manufacturing* (2nd ed.). John Wiley & Sons.
*   Madou, M. J. (2002). *Fundamentals of Microfabrication* (2nd ed.). CRC Press.
*   Gad-el-Hak, M. (2002). *The MEMS Handbook*. CRC Press.

---
This concludes the study notes for "Silicon as a MEMS Material – Mechanical Properties of Silicon." Please ensure you refer to the textbooks for more detailed explanations and illustrations.