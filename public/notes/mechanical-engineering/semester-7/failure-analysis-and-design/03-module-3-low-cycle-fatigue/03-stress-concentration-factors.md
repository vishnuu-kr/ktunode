---
title: "Stress concentration factors"
subject: "FAILURE ANALYSIS AND DESIGN"
module: "Module 3: Low cycle fatigue"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463de4"
status: "completed"
scrapedAt: "2026-05-20T18:12:37.102Z"
---
# Failure Analysis and Design: Module 3 - Low Cycle Fatigue

## Topic: Stress Concentration Factors

This topic focuses on how geometric discontinuities in a component can lead to localized increases in stress, significantly impacting its behavior under cyclic loading, particularly in the low cycle fatigue regime.

---

### **1. Introduction to Stress Concentration**

Stress concentration is a phenomenon where the stress at a point or region in a material is significantly higher than the nominal or average stress in the surrounding material. This occurs due to geometric irregularities such as holes, notches, fillets, grooves, and changes in cross-section.

**Key Concepts:**

*   **Nominal Stress ($\sigma_{nom}$):** The average stress calculated by dividing the applied load by the gross cross-sectional area of the component.
*   **Local Stress ($\sigma_{loc}$):** The actual stress experienced at a specific point within the material, often at the location of a geometric discontinuity.
*   **Stress Concentration Factor ($K_t$):** A dimensionless factor that quantifies the severity of stress concentration. It is defined as the ratio of the maximum local stress to the nominal stress.

    $\qquad K_t = \frac{\sigma_{loc, max}}{\sigma_{nom}}$

**Importance in Fatigue:**

Stress concentrations are particularly critical in fatigue analysis because cracks often initiate at these high-stress locations. Under cyclic loading, even small stresses can lead to crack initiation and growth if they are repeatedly applied at a stress concentration point. In low cycle fatigue (LCF), where strains are high and cycles to failure are relatively low, stress concentration effects can be pronounced due to the non-linear stress-strain behavior at these locations.

---

### **2. Stress Concentration in Different Loading Conditions**

Stress concentrations can occur under various types of loading:

*   **Tension/Compression:** A hole in a plate subjected to tensile stress.
*   **Bending:** Notches or fillets in a beam under bending load.
*   **Torsion:** Keyways or holes in a shaft subjected to torsional stress.

**Examples:**

*   **Hole in a Plate (Tension):** A circular hole in an infinitely wide plate subjected to uniaxial tension. The stress is highest at the edges of the hole, perpendicular to the applied load.
*   **Notch in a Plate (Tension):** A V-shaped notch or a U-shaped notch in a plate under tension will have a concentration of stress at the root of the notch.
*   **Fillet in a Shaft (Bending):** A shaft with a change in diameter will experience stress concentration at the fillet connecting the two diameters under bending.

---

### **3. Stress Concentration Factors ($K_t$)**

The value of $K_t$ depends on the geometry of the discontinuity and the type of loading. It is typically determined through:

*   **Analytical Solutions:** For simple geometries (e.g., hole in a plate), analytical solutions from elasticity theory are available.
*   **Numerical Methods:** Finite Element Analysis (FEA) is widely used for complex geometries.
*   **Experimental Methods:** Photoelasticity and strain gauges can be used to measure actual stress distributions.
*   **Empirical Data and Charts:** Numerous charts and tables are available in design handbooks that provide $K_t$ values for various geometries.

**Key Considerations for $K_t$:**

*   **Sharpness of the Notch/Discontinuity:** Sharper corners lead to higher $K_t$ values.
*   **Size of the Discontinuity:** The ratio of the discontinuity's dimension to the component's width/diameter.
*   **Type of Loading:** Tension, bending, torsion.

**Textbook References:**

*   **Jones (1993), Chapter 4, "Stress Concentrations"**: Likely discusses the fundamental concepts of stress concentration and provides examples of geometric factors affecting $K_t$.
*   **Collins (2013), Chapter 3, "Stress Analysis Concepts" or Chapter 5, "Fatigue Analysis"**: Will likely cover stress concentration in the context of failure analysis and fatigue, including how to apply these factors in design.
*   **ASM Handbook, Vol. 11 (2002), Chapter 1, "Stress Concentrations"**: This handbook is an excellent resource for empirical data and charts for various geometries and loading conditions.

---

### **4. Fatigue Stress Concentration Factors ($K_f$)**

While $K_t$ represents the elastic stress concentration, fatigue often involves yielding at the notch root, which can "blunt" the stress concentration. Therefore, a separate factor, the fatigue stress concentration factor ($K_f$), is used for fatigue analysis.

**Key Concepts:**

*   **Fatigue Stress Concentration Factor ($K_f$):** The ratio of the fatigue strength of a plain specimen to the fatigue strength of a notched specimen, both tested under the same conditions.
    $\qquad K_f = \frac{\sigma_{fatigue, plain}}{\sigma_{fatigue, notched}}$

**Relationship between $K_t$ and $K_f$:**

*   **$K_f \le K_t$**: In most cases, $K_f$ is less than or equal to $K_t$. This is because yielding at the notch root under cyclic loading can redistribute stress, reducing the severity of the concentration.
*   **Notch Sensitivity ($q$):** A material property that quantifies how susceptible a material is to notch effects. It is defined as:
    $\qquad q = \frac{K_f - 1}{K_t - 1}$
    *   **$q = 1$**: Highly notch sensitive ( $K_f \approx K_t$) - brittle materials like hardened steels, ceramics.
    *   **$q = 0$**: Notch insensitive ( $K_f \approx 1$) - ductile materials with low yield strength, like soft annealed metals, especially at high temperatures or low frequencies.
    *   **$0 < q < 1$**: Intermediate notch sensitivity.

**Factors Affecting $K_f$ and Notch Sensitivity:**

*   **Material Properties:** Ductility, yield strength, tensile strength. Brittle materials are more notch sensitive.
*   **Geometry of the Notch:** Notch radius, depth, shape. Smaller notch radii (sharper notches) increase notch sensitivity.
*   **Loading Conditions:** Type of stress (axial, bending, torsional), and importantly for LCF, the *strain amplitude*.
*   **Surface Finish:** Rougher surfaces can act as pre-existing stress raisers, increasing notch sensitivity.
*   **Temperature and Loading Frequency:** In LCF, higher temperatures and lower frequencies can lead to creep and other time-dependent effects that can reduce notch sensitivity by promoting ductility and stress relaxation.

**Textbook References:**

*   **Collins (2013), Chapter 5, "Fatigue Analysis"**: This chapter will be crucial for understanding $K_f$ and notch sensitivity ($q$) in the context of fatigue life prediction. It will likely provide equations or methods for estimating $K_f$ from $K_t$.
*   **Jones (1993), Chapter 4, "Stress Concentrations"**: May discuss the distinction between elastic and fatigue stress concentration factors and the concept of notch sensitivity.

---

### **5. Stress Concentration in Low Cycle Fatigue (LCF)**

In LCF, cyclic strains are high, often exceeding the material's elastic limit. This means that stresses at the notch root will experience significant yielding.

**Key Considerations for LCF:**

*   **Strain Concentration:** Instead of elastic stress concentration, it's more appropriate to consider *strain concentration* in LCF. The localized strains at the discontinuity can be significantly higher than the nominal strains.
*   **Neuber's Rule:** A widely used approximation to relate elastic stress concentration factors to fatigue notch factors, particularly useful when yielding occurs. It suggests that the geometric mean of the stress concentration factor and the strain concentration factor is constant for a given geometry.
    $\qquad K_f = 1 + q(K_t - 1)$ (This is a common approximation for $K_f$ related to notch sensitivity $q$ and $K_t$. More advanced forms might be presented in textbooks.)
    A more accurate relationship for strain concentration ($K_\epsilon$) and stress concentration ($K_\sigma$) is given by:
    $\qquad \sqrt{K_\sigma K_\epsilon} = K_t$
    And for fatigue analysis, it is often assumed that $K_\sigma = K_f$ and $K_\epsilon$ is related to $K_\sigma$ by the material's cyclic stress-strain curve.
*   **Material Behavior:** The cyclic stress-strain behavior of the material (e.g., hardening or softening) plays a vital role in how stresses and strains are redistributed at the notch root.
*   **Geometric Factor for Strain:** In LCF, it's often the *strain concentration factor* ($K_\epsilon$) that is more relevant.
    $\qquad K_\epsilon = \frac{\epsilon_{loc, max}}{\epsilon_{nom}}$
    This $K_\epsilon$ is often related to $K_t$ and the material's stress-strain curve.

**Impact on LCF Life:**

Stress and strain concentrations significantly reduce the fatigue life of components in LCF. A small geometric defect that might be negligible in static loading or high-cycle fatigue can be a critical life-limiting feature in LCF due to the amplified local strains.

---

### **6. Design Implications and Mitigation**

Understanding stress concentration is crucial for designing components that can withstand cyclic loading.

**Design Strategies to Mitigate Stress Concentration:**

*   **Generous Fillets and Radii:** Use larger fillet radii at changes in cross-section instead of sharp corners. This is one of the most effective ways to reduce $K_t$.
*   **Avoid Abrupt Changes in Cross-Section:** Gradually transition the geometry where possible.
*   **Smooth Surfaces:** Proper machining and finishing of surfaces, especially in critical areas, to avoid introducing micro-stress raisers.
*   **Drill Tear-Drop Holes:** At the ends of slots or cutouts, using tear-drop shapes instead of sharp corners can significantly reduce stress concentration.
*   **Reinforce Critical Areas:** Add material or modify geometry to reduce stress gradients.
*   **Weld Treatments:** Proper weld toe grinding and post-weld heat treatment can reduce stress concentrations at weld joints.

**Textbook References:**

*   **Jones (1993), Chapter 5, "Design for Fatigue"**: Likely provides practical design guidelines and methods to minimize fatigue failures, including strategies for reducing stress concentrations.
*   **Collins (2013), Chapter 5, "Fatigue Analysis" and Chapter 7, "Design for Fatigue"**: Will offer in-depth guidance on incorporating stress concentration factors into fatigue design calculations and practical design modifications.

---

### **7. Practice Questions and Exercises**

**Question 1:**
Define stress concentration factor ($K_t$) and explain its significance in fatigue analysis, especially in the context of low cycle fatigue (LCF). (K2)

**Answer:**
Stress concentration factor ($K_t$) is the ratio of the maximum localized stress at a geometric discontinuity to the nominal stress in the surrounding material. It signifies how effectively a geometric feature concentrates stress. In LCF, where cyclic strains are high and yielding occurs, stress concentrations are critical because they lead to even higher localized strains, accelerating crack initiation and propagation, thus significantly reducing fatigue life.

**Question 2:**
Distinguish between the elastic stress concentration factor ($K_t$) and the fatigue stress concentration factor ($K_f$). Which one is generally used for fatigue life prediction and why? (K2)

**Answer:**
$K_t$ is an elastic parameter based on geometry and is calculated assuming linear elastic material behavior. $K_f$ is a fatigue parameter reflecting the actual reduction in fatigue strength due to a discontinuity, accounting for material yielding and notch sensitivity. $K_f$ is generally used for fatigue life prediction because it accounts for the real-world reduction in fatigue strength caused by geometric discontinuities, whereas $K_t$ alone can overestimate fatigue life in situations involving significant plastic deformation.

**Question 3:**
A round bar of diameter 20 mm is subjected to a tensile load of 50 kN. It has a transverse hole of diameter 5 mm drilled through it. Using appropriate data from a handbook or provided charts (assume $K_t = 2.5$ for this geometry in tension), calculate:
a) The nominal stress in the bar.
b) The maximum localized stress at the edge of the hole.
c) If the material has a notch sensitivity $q = 0.7$ for this notch geometry and loading, calculate the fatigue stress concentration factor $K_f$. (K3)

**Assumptions:**
*   $K_t = 2.5$ for the hole in tension.

**Given:**
*   Bar diameter ($D$) = 20 mm
*   Hole diameter ($d$) = 5 mm
*   Load ($P$) = 50 kN = $50 \times 10^3$ N

**Solution:**
a) **Nominal stress ($\sigma_{nom}$):**
Gross cross-sectional area of the bar ($A_{gross}$) = $\frac{\pi D^2}{4} = \frac{\pi (20 \text{ mm})^2}{4} = 100\pi \text{ mm}^2 \approx 314.16 \text{ mm}^2$
$\sigma_{nom} = \frac{P}{A_{gross}} = \frac{50 \times 10^3 \text{ N}}{314.16 \text{ mm}^2} \approx 159.15 \text{ N/mm}^2 = 159.15 \text{ MPa}$

b) **Maximum localized stress ($\sigma_{loc, max}$):**
$\sigma_{loc, max} = K_t \times \sigma_{nom}$
$\sigma_{loc, max} = 2.5 \times 159.15 \text{ MPa} \approx 397.88 \text{ MPa}$

c) **Fatigue stress concentration factor ($K_f$):**
Using the formula $K_f = 1 + q(K_t - 1)$:
$K_f = 1 + 0.7(2.5 - 1)$
$K_f = 1 + 0.7(1.5)$
$K_f = 1 + 1.05 = 2.05$

**Question 4:**
Discuss design strategies to minimize the effect of stress concentrations in machine components subjected to fatigue loading. (K2)

**Answer:**
To minimize stress concentrations:
1.  **Increase Fillet Radii:** Replace sharp corners with generous, rounded fillets at changes in cross-section.
2.  **Avoid Abrupt Geometry Changes:** Gradually transition the component's shape to reduce stress gradients.
3.  **Smooth Surface Finish:** Ensure good surface finish, especially in critical areas, to prevent pre-existing micro-defects from acting as stress raisers.
4.  **Optimize Hole Shapes:** For cutouts or holes, use tear-drop shapes or rounded corners instead of sharp notches.
5.  **Reinforcement:** Add material or design features to locally strengthen areas prone to high stress.
6.  **Weld Preparation and Treatment:** Properly prepare weld edges and consider post-weld treatments like grinding or heat treatment to reduce stress concentrations at welds.

---

### **8. Important Points to Remember**

*   **Geometric Discontinuities are Stress Raisers:** Holes, notches, fillets, and changes in cross-section cause localized increases in stress.
*   **$K_t$ vs. $K_f$:** $K_t$ is for elastic stress concentration, while $K_f$ is for fatigue life prediction and accounts for material yielding and notch sensitivity ($q$).
*   **Notch Sensitivity ($q$):** A material property that dictates how much the fatigue strength is reduced by a notch. Brittle materials are more notch sensitive.
*   **LCF and Strain Concentration:** In LCF, high cyclic strains mean yielding occurs, and it's often the strain concentration ($K_\epsilon$) that is critical.
*   **Design for Fatigue:** Use generous radii, smooth transitions, and good surface finish to minimize stress concentrations and extend fatigue life.

---

### **9. Alignment with Course Outcomes**

*   **CO1 (K2):** This topic helps understand material behavior under cyclic loading by explaining how geometry influences stress distribution and failure initiation.
*   **CO2 (K1):** Directly addresses factors affecting fatigue loading (stress concentrations) and is foundational for life prediction.
*   **CO3 (K3):** While this topic primarily deals with stress/strain concentration, understanding these factors is essential before applying fracture mechanics principles to crack propagation from a stress concentration site. For instance, the stress intensity factor calculations would start with knowing the stress magnitude, which is influenced by stress concentration.
*   **CO4 (K2):** Understanding stress concentrations is a fundamental aspect of advanced failure mechanisms that can lead to fatigue, corrosion fatigue, or contact fatigue initiation.

---

This concludes Module 3's topic on Stress Concentration Factors. Remember to consult the provided textbooks for more detailed examples, specific charts for $K_t$ values, and advanced theoretical treatments.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
