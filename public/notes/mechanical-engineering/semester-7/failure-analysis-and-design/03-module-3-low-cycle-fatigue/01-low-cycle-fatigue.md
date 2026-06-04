---
title: "Low cycle fatigue"
subject: "FAILURE ANALYSIS AND DESIGN"
module: "Module 3: Low cycle fatigue"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463de2"
status: "completed"
scrapedAt: "2026-05-20T18:12:35.705Z"
---
# Failure Analysis and Design: Module 3 - Low Cycle Fatigue

---

## Introduction to Low Cycle Fatigue (LCF)

Low Cycle Fatigue (LCF) is a phenomenon where materials fail after a relatively small number of strain cycles, typically less than $10^4$ to $10^5$ cycles. This occurs under conditions of high cyclic strain, often leading to plastic deformation in each cycle. LCF is a critical failure mechanism in components subjected to significant stress reversals or thermal cycling.

---

### **Learning Outcomes Covered:**

*   **LO1:** Understand the fundamental principles of low cycle fatigue and its distinction from high cycle fatigue.
*   **LO2:** Analyze the role of plastic strain in LCF behavior.
*   **LO3:** Discuss the mechanisms of crack initiation and propagation in LCF.
*   **LO4:** Explore methods for predicting LCF life and design considerations for LCF resistance.
*   **LO5:** Understand the influence of material properties and environmental factors on LCF life.

---

### **Course Outcomes Alignment:**

*   **CO1 (K2):** Understand material behavior under various loading conditions (specifically high cyclic strain).
*   **CO2 (K1):** Remember factors affecting fatigue loading (high strain amplitude).
*   **CO3 (K3):** Apply principles of fracture mechanics to analyze and design against crack initiation and propagation (in LCF regime).
*   **CO4 (K2):** Understand advanced failure mechanisms (LCF as a primary mechanism).

---

## 1. Fundamentals of Low Cycle Fatigue (LCF)

### **1.1 Definition and Distinction from High Cycle Fatigue (HCF)**

*   **Low Cycle Fatigue (LCF):** Failure occurring under high cyclic strains, leading to significant plastic deformation in each cycle. The number of cycles to failure ($N_f$) is typically less than $10^4$ to $10^5$.
*   **High Cycle Fatigue (HCF):** Failure occurring under lower cyclic stresses, where the deformation is primarily elastic. The number of cycles to failure ($N_f$) is typically greater than $10^5$.

**Key Distinction:** The dominant deformation mechanism. LCF is driven by **plastic strain**, while HCF is driven by **elastic stress**.

### **1.2 Stress vs. Strain Controlled Fatigue**

*   **Stress Controlled:** In HCF, the applied load is controlled to maintain a certain stress amplitude.
*   **Strain Controlled:** In LCF, it is often more practical to control the strain amplitude, as high stresses tend to cause yielding.

**Important Point:** In LCF, the applied strain is of such magnitude that it causes yielding of the material during each loading cycle.

### **1.3 Mechanisms of Deformation in LCF**

*   **Plastic Strain Accumulation:** Repeated plastic deformation in each cycle leads to the accumulation of irreversible strain.
*   **Cyclic Hardening/Softening:** Materials can exhibit cyclic hardening (strength increases) or cyclic softening (strength decreases) in response to cyclic plastic deformation. This behavior significantly influences LCF life.
    *   **Cyclic Hardening:** Dislocation tangles form, increasing resistance to further plastic flow.
    *   **Cyclic Softening:** Dislocation annihilation or dynamic recovery occurs, reducing resistance to plastic flow.

**Reference:** Jones, D. R. H. (1993) discusses cyclic plasticity and its impact on fatigue behavior.

---

## 2. LCF Behavior and Material Response

### **2.1 The Stress-Strain Hysteresis Loop**

*   During cyclic straining, a stress-strain hysteresis loop is formed for each cycle.
*   The area enclosed by the loop represents the energy dissipated per unit volume per cycle, primarily due to plastic deformation.
*   The shape and width of the loop provide information about the material's cyclic behavior (e.g., elastic modulus, yield strength, hardening/softening).

**Example:** A material that cyclically hardens will show an increasing stress amplitude for a constant strain amplitude over cycles, leading to a narrower hysteresis loop as it approaches saturation.

### **2.2 Cyclic Stress-Strain Curves**

*   These curves describe the relationship between stress and strain under cyclic loading conditions after the material has reached a stable cyclic state (saturation).
*   They are often represented by a power-law relationship:
    $\sigma_a = K' (\epsilon_{pa})^n'$
    where:
    *   $\sigma_a$ is the cyclic stress amplitude
    *   $\epsilon_{pa}$ is the cyclic plastic strain amplitude
    *   $K'$ is the cyclic strength coefficient
    *   $n'$ is the cyclic strain hardening exponent

**Important Point:** The cyclic strain hardening exponent ($n'$) is a crucial parameter for LCF. A lower $n'$ indicates a greater sensitivity to plastic strain.

### **2.3 Manson-Coffin Law (Strain-Life Approach)**

*   The Manson-Coffin law is a fundamental relationship for predicting LCF life based on the plastic strain amplitude.
*   It states that the plastic strain range ($\Delta\epsilon_p$) is related to the number of cycles to failure ($N_f$) by:
    $\frac{\Delta\epsilon_p}{2} = \epsilon_f' (N_f)^c$
    where:
    *   $\frac{\Delta\epsilon_p}{2}$ is the plastic strain amplitude
    *   $\epsilon_f'$ is the fatigue ductility coefficient (representing the true fracture ductility in a completely reversed torsion test)
    *   $c$ is the fatigue ductility exponent (a material constant, typically between -0.5 and -0.7 for metals)

**Reference:** Collins, J. A. (2013) provides a thorough discussion of the strain-life approach and the Manson-Coffin law.

### **2.4 Total Strain vs. Plastic Strain**

*   The total strain amplitude ($\epsilon_a$) can be decomposed into elastic strain amplitude ($\epsilon_e$) and plastic strain amplitude ($\epsilon_p$):
    $\epsilon_a = \epsilon_e + \epsilon_p$
*   The Morrow or Smith-Watson-Topper (SWT) mean stress correction can be incorporated to account for mean stress effects.
*   The **total strain range life relationship** combines both elastic and plastic strain contributions:
    $\frac{\Delta\epsilon}{2} = \frac{\sigma_f'}{E} (N_f)^b + \epsilon_f' (N_f)^c$
    where:
    *   $\frac{\Delta\epsilon}{2}$ is the total strain amplitude
    *   $\sigma_f'$ is the fatigue strength coefficient
    *   $E$ is the Young's modulus
    *   $b$ is the fatigue strength exponent (for HCF)
    *   $c$ is the fatigue ductility exponent (for LCF)

**Important Point:** The Manson-Coffin part of the equation ($ \epsilon_f' (N_f)^c $) dominates in the LCF regime (low $N_f$), while the elastic part ($ \frac{\sigma_f'}{E} (N_f)^b $) dominates in the HCF regime (high $N_f$).

---

## 3. Crack Initiation and Propagation in LCF

### **3.1 Crack Initiation**

*   In LCF, plastic deformation is concentrated at stress concentrations (e.g., surface defects, geometric discontinuities, inclusions).
*   Persistent slip bands (PSBs) are often observed in metals experiencing cyclic plastic deformation. Cracks can initiate at the surface within these PSBs due to dislocation accumulation and localized strain.
*   Surface finish plays a critical role; rough surfaces or surface treatments that introduce residual stresses can significantly reduce LCF life.

**Reference:** ASM Handbook, Vol. 11 (2002) provides case studies and discusses the influence of surface conditions on fatigue failure.

### **3.2 Crack Propagation**

*   Once a small crack initiates, it propagates under cyclic loading.
*   The crack growth rate ($da/dN$) in LCF can be influenced by factors such as:
    *   **Stress Intensity Factor Range ($\Delta K$)**: Similar to HCF, $\Delta K$ drives crack growth.
    *   **Plastic Zone Size**: The larger plastic zone at the crack tip in LCF can affect crack growth mechanisms.
    *   **Mean Stress**: Mean stress has a significant impact on crack propagation in LCF.
    *   **Cyclic Softening/Hardening**: Localized cyclic behavior at the crack tip can influence growth.

**Reference:** Kumar, P. (1999) provides foundational principles of fracture mechanics, including stress intensity factors, which are applicable to crack propagation analysis in LCF.

### **3.3 Failure Surfaces in LCF Fractography**

*   Fracture surfaces in LCF often exhibit:
    *   **Smooth, beach-mark-like patterns**: Indicating crack arrest or periods of slower growth.
    *   **Ductile tearing regions**: Near the final fracture area, characterized by dimples.
    *   **Irregularities**: Due to cyclic loading causing crack branching and arrest.
    *   **Evidence of plastic deformation**: Elongated features or microvoid coalescence.

---

## 4. Factors Affecting LCF Life

### **4.1 Material Properties**

*   **Fatigue Ductility Coefficient ($\epsilon_f'$)**: A higher $\epsilon_f'$ indicates better resistance to LCF.
*   **Fatigue Strength Coefficient ($\sigma_f'$)**: Influences the elastic portion of the strain-life curve.
*   **Cyclic Strain Hardening Exponent ($n'$)**: A higher $n'$ generally leads to better LCF life, as the material is less sensitive to plastic strain.
*   **Microstructure**: Grain size, dislocation structure, and presence of precipitates can affect cyclic behavior.
*   **Surface Condition**: Surface roughness, residual stresses (from machining or heat treatment), and surface defects significantly reduce LCF life.

### **4.2 Loading Conditions**

*   **Strain Amplitude**: The primary driver of LCF. Higher strain amplitudes lead to shorter lives.
*   **Mean Stress**: Tensile mean stresses generally reduce LCF life, while compressive mean stresses can increase it. Corrections like the SWT parameter or Walker parameter are used to account for mean stress.
*   **Loading Frequency**: At higher frequencies, adiabatic heating can occur, leading to thermal effects that might accelerate fatigue. However, for many metals, frequency has a less pronounced effect on LCF than on HCF, unless oxidation or creep is involved.
*   **Waveform**: The shape of the strain cycle (e.g., saw-tooth, triangular, sinusoidal) can influence LCF life, especially if it leads to significant mean stress relaxation.

### **4.3 Environmental Factors**

*   **Temperature**: Elevated temperatures can lead to creep-fatigue interaction, where time-dependent deformation (creep) and fatigue combine to accelerate failure. At very low temperatures, embrittlement can occur.
*   **Corrosion**: Corrosive environments can accelerate fatigue crack initiation and growth, especially in conjunction with cyclic stresses (corrosion fatigue).

**Reference:** Jones, D. R. H. (1993) and Collins, J. A. (2013) discuss the impact of temperature and environment on fatigue.

---

## 5. Design Considerations for LCF Resistance

### **5.1 Material Selection**

*   Choose materials with high fatigue ductility coefficients ($\epsilon_f'$).
*   Consider materials that exhibit cyclic stability (minimal hardening or softening).
*   Select materials with microstructures optimized for LCF resistance.

### **5.2 Stress/Strain Concentration Management**

*   Minimize sharp corners, notches, and sudden changes in cross-section, as these are sites for high strain concentration.
*   Employ generous fillet radii in designs.
*   Smooth transitions in geometry are crucial.

### **5.3 Surface Treatment**

*   **Surface Finishing**: Polishing or other surface finishing techniques can improve LCF life by reducing crack initiation sites.
*   **Surface Treatments**: Shot peening, case hardening, or nitriding can introduce beneficial compressive residual stresses at the surface, improving LCF resistance.

### **5.4 Life Prediction Methods**

*   **Strain-Life Approach (Manson-Coffin Law)**: Used for LCF regime, based on controlled strain tests.
*   **Stress-Life Approach (S-N Curves)**: Primarily for HCF, but can be extended to the lower end of the LCF regime with corrections.
*   **Fracture Mechanics Approach**: Used for crack propagation analysis and predicting remaining life of components with existing cracks.

### **5.5 Mean Stress Effects**

*   Design to minimize tensile mean stresses.
*   Utilize compressive residual stresses where possible.
*   Apply appropriate mean stress correction factors in life prediction.

---

## 6. Practice Questions and Answers

**Question 1:** Differentiate between Low Cycle Fatigue (LCF) and High Cycle Fatigue (HCF) based on the primary driving mechanism.

**Answer 1:** LCF is driven by high cyclic **plastic strain**, leading to failure in a relatively low number of cycles ($< 10^4 - 10^5$). HCF is driven by **elastic stress**, with failure occurring after a large number of cycles ($> 10^5$).

**Question 2:** State the Manson-Coffin law and define its parameters.

**Answer 2:** The Manson-Coffin law is given by:
$\frac{\Delta\epsilon_p}{2} = \epsilon_f' (N_f)^c$
Where:
*   $\frac{\Delta\epsilon_p}{2}$: Plastic strain amplitude
*   $\epsilon_f'$: Fatigue ductility coefficient
*   $N_f$: Number of cycles to failure
*   $c$: Fatigue ductility exponent

**Question 3:** A component experiences a total strain amplitude ($\epsilon_a$) of 0.008. The material properties are $\sigma_f' = 1000$ MPa, $E = 200$ GPa, $\epsilon_f' = 0.5$, and $c = -0.6$. Using the total strain-life equation: $\frac{\Delta\epsilon}{2} = \frac{\sigma_f'}{E} (N_f)^b + \epsilon_f' (N_f)^c$, and assuming $b \approx -0.12$ (typical for metals), estimate the fatigue life ($N_f$).

**Answer 3:**
First, we need to estimate the plastic strain amplitude. Assuming the elastic strain is $\epsilon_e = \sigma_a/E$ and plastic strain is $\epsilon_p$, $\epsilon_a = \epsilon_e + \epsilon_p$. For LCF, $\epsilon_p$ is significant.
A simplified approach for estimation is to consider the dominant term. In the LCF regime, the plastic strain term often dominates. Let's estimate the plastic strain amplitude using the total strain and an assumed elastic strain. If we assume the stress amplitude $\sigma_a$ is roughly the cyclic yield strength, say 400 MPa, then $\epsilon_e = 400 \text{ MPa} / 200 \text{ GPa} = 0.002$.
Then, $\epsilon_p = \epsilon_a - \epsilon_e = 0.008 - 0.002 = 0.006$.
Using the Manson-Coffin law:
$\frac{\Delta\epsilon_p}{2} = \frac{0.006}{2} = 0.003$
$0.003 = 0.5 (N_f)^{-0.6}$
$N_f^{-0.6} = \frac{0.003}{0.5} = 0.006$
$N_f = (0.006)^{-1/0.6} = (0.006)^{-1.6667}$
$N_f \approx 1050$ cycles.

*Note: A more rigorous approach would involve iteration to satisfy the full strain-life equation simultaneously.*

**Question 4:** Why is surface finish particularly critical in LCF compared to HCF?

**Answer 4:** In LCF, high cyclic plastic strains concentrate at stress raisers. Surface defects (scratches, pores, inclusions) act as significant stress concentration sites for plastic deformation, leading to easier crack initiation. In HCF, where deformation is primarily elastic, these defects might not cause yielding, making their impact less severe.

**Question 5:** What is cyclic softening and how might it affect LCF life?

**Answer 5:** Cyclic softening is a phenomenon where a material's yield strength decreases under repeated cyclic plastic deformation. This can happen through mechanisms like dislocation annihilation or rearrangement. Cyclic softening in LCF can lead to an increase in plastic strain amplitude for a given applied total strain, thereby reducing the fatigue life.

---

## 7. Important Points to Remember

*   **LCF is driven by plastic strain.**
*   **Manson-Coffin Law** is central to LCF life prediction.
*   **Fatigue ductility coefficient ($\epsilon_f'$)** is a key material property for LCF resistance.
*   **Surface finish and stress concentrations** are critical for crack initiation in LCF.
*   **Cyclic hardening/softening** significantly influences LCF behavior.
*   **Total strain amplitude** accounts for both elastic and plastic components.
*   **Mean stress** has a significant detrimental effect on LCF life.
*   **Elevated temperatures** can introduce creep-fatigue interactions.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


## 8. References

*   Jones, D. R. H. (1993). *Engineering Materials 3 – Materials Failure Analysis: Case Studies and Design Implications*. Pergamon Press.
*   ASM Publications. (2002). *Failure Analysis and Prevention*. ASM Handbook, Vol. 11. ASM.
*   Collins, J. A. (2013). *Failure of Materials in Mechanical Design* (2nd Edition). Wiley Interscience Publishers.
*   Kumar, P. (1999). *Elements of Fracture Mechanics*. Wheeler Publishing.

---