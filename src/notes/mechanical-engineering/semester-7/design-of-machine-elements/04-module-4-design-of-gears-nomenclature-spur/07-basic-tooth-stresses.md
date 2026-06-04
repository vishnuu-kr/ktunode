---
title: "basic tooth stresses"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 4: Design of gears: Nomenclature: spur"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d83"
status: "completed"
scrapedAt: "2026-05-20T18:11:13.175Z"
---
# DESIGN OF MACHINE ELEMENTS

## Module 4: Design of Gears: Nomenclature: Spur

### Topic: Basic Tooth Stresses

---

### **1. Introduction to Spur Gears and Tooth Stresses**

Spur gears are the most common type of gears used for transmitting power between parallel shafts. The design of a spur gear involves ensuring that its teeth can withstand the applied loads without failure. This failure can occur due to several reasons, primarily related to the stresses induced in the gear teeth. This topic focuses on understanding the fundamental stresses that gear teeth are subjected to.

**Key Concept:** Gear tooth failure is often related to the bending stress at the root of the tooth and the contact stress on the tooth surface.

**Relevance to Course Outcomes:**
*   **CO5:** Modeling suitable spur gear drives directly relies on understanding and calculating these basic tooth stresses to ensure adequate strength and prevent failure. (Knowledge Level: K3)

**References:**
*   **Bhandari, V. B. (2020). Design of Machine Elements.** (Chapter on Gears, sections on gear tooth stresses).
*   **Norton, R. L. (2018). Machine Design – An Integrated Approach.** (Chapter on Gears, sections on gear tooth stresses).
*   **Shigley, J. E. (2003). Mechanical Engineering Design.** (Chapter on Gears, sections on gear tooth stresses).

---

### **2. Types of Stresses in Spur Gear Teeth**

Gear teeth are subjected to a combination of forces and stresses due to the transmitted power and the meshing action. The primary stresses considered in the design are:

*   **Bending Stress:** This is the stress developed in the gear tooth due to the bending moment caused by the tangential force acting at the tooth tip.
*   **Contact Stress (Surface Stress or Hertz Stress):** This is the compressive stress developed on the surfaces of the meshing teeth due to the curvature of the mating profiles.
*   **Shear Stress:** While generally less critical than bending and contact stress in typical spur gear design, shear stress can occur at the root of the tooth.
*   **Crushing Stress:** Related to contact stress, this refers to the compressive stress that could lead to surface deformation or crushing.

---

### **3. Bending Stress in Gear Teeth (Lewis Formula)**

The most fundamental approach to calculating bending stress in gear teeth is the Lewis formula, developed by Wilfred Lewis. This formula considers the tooth as a cantilever beam fixed at the root.

**Key Concepts:**
*   **Tangential Force (Wt):** The force acting tangentially at the pitch circle that transmits power.
*   **Bending Moment (Mb):** The moment created by the tangential force acting at a distance from the root of the tooth.
*   **Section Modulus (y * b * m^2):** Related to the geometry of the tooth cross-section at the root.

**Derivation/Formula:**
The tangential force $W_t$ acts at the pitch circle. Assuming the force acts at the outer edge of the tooth, it creates a bending moment at the root.

$M_b = W_t \times h$

where:
*   $W_t$ is the tangential force
*   $h$ is the distance from the point of force application to the root of the tooth.

The bending stress ($\sigma_b$) is given by:

$\sigma_b = \frac{M_b}{Z}$

where $Z$ is the section modulus of the tooth at the root.

Lewis then approximated the tooth shape and developed the **Lewis Form Factor (y)**. The Lewis formula for bending stress is:

$\sigma_b = \frac{W_t}{b \cdot m \cdot y}$

where:
*   $\sigma_b$ = bending stress in the gear tooth (MPa or psi)
*   $W_t$ = tangential force acting at the pitch circle (N or lb)
*   $b$ = face width of the gear (mm or in)
*   $m$ = module of the gear (mm or in) - *For diametral pitch (P), $m = 25.4/P$*
*   $y$ = Lewis form factor, a dimensionless factor dependent on the tooth profile and pressure angle.

**Important Considerations for Lewis Formula:**
*   **Assumptions:**
    *   The tooth is treated as a cantilever beam fixed at the base.
    *   The tangential force is assumed to act at the outer edge of the tooth.
    *   The tooth is assumed to be under uniform stress distribution.
    *   The effect of radial force is neglected.
    *   The effect of stress concentration at the root fillet is neglected (though modern design accounts for this).
*   **Form Factor (y):** The value of 'y' depends on the tooth form and pressure angle. Standard values for full-depth, straight-sided teeth are available in tables (e.g., in Bhandari's textbook or PSG Data Book). It generally increases with the number of teeth.
*   **Force Application:** For more accurate analysis, the tangential force should be considered to act at the most unfavorable position, which is usually at the tip of the tooth.

**Example:**
A spur gear has a module of 5 mm, a face width of 50 mm, and transmits a tangential force of 2000 N. If the Lewis form factor for this gear is 0.3. Calculate the bending stress.

**Solution:**
$\sigma_b = \frac{W_t}{b \cdot m \cdot y}$
$\sigma_b = \frac{2000 \text{ N}}{(50 \text{ mm}) \cdot (5 \text{ mm}) \cdot 0.3}$
$\sigma_b = \frac{2000}{75} \text{ N/mm}^2$
$\sigma_b = 26.67 \text{ MPa}$

**References:**
*   **Bhandari, V. B. (2020). Design of Machine Elements.** (Chapter on Gears, detailed explanation of Lewis formula and form factor tables).
*   **PSG Design Data (2022).** (Tables for Lewis form factor 'y').
*   **Sharma & Agarwal, (2017). Machine Design.** (Similar coverage of Lewis formula).

---

### **4. Contact Stress (Hertz Stress) in Gear Teeth**

Contact stress is crucial for preventing surface fatigue (pitting) on the gear teeth. It arises from the compressive forces between the mating teeth as they roll and slide against each other. The analysis is based on Hertzian contact stress theory.

**Key Concepts:**
*   **Hertzian Theory:** Deals with the elastic deformation and stress distribution when two curved surfaces are brought into contact.
*   **Effective Radius of Curvature:** Represents the combined curvature of the two mating teeth at the point of contact.
*   **Surface Fatigue (Pitting):** Failure mode characterized by the formation of small pits on the tooth surface.

**Formula:**
The contact stress ($\sigma_c$) on the tooth surface is given by:

$\sigma_c = Z_e \sqrt{\frac{W_t}{b \cdot d \cdot I}}$

where:
*   $\sigma_c$ = contact stress (MPa or psi)
*   $W_t$ = tangential force acting at the pitch circle (N or lb)
*   $b$ = face width of the gear (mm or in)
*   $d$ = pitch diameter of the pinion (or smaller gear) (mm or in)
*   $I$ = geometric factor, which depends on the pressure angle and the sum of the teeth numbers of the mating gears.
*   $Z_e$ = elastic coefficient, which depends on the materials of the mating gears.

A more common and practical form of the contact stress equation, often used in design standards (like AGMA), is:

$\sigma_c = Z_m \sqrt{\frac{W_t \cdot K_a \cdot K_v \cdot K_s}{b \cdot d \cdot I \cdot Z_o}}$

where:
*   $Z_m$ = Material factor (related to elastic coefficients of mating materials)
*   $K_a$ = Application factor (accounts for shock and erratic loading)
*   $K_v$ = Dynamic factor (accounts for dynamic effects due to gear inaccuracies and speed)
*   $K_s$ = Size factor (accounts for manufacturing variations)
*   $Z_o$ = Overload factor (accounts for overload)
*   $I$ = Geometry factor (combines elastic properties and curvature of mating teeth)

**Important Considerations for Contact Stress:**
*   **Point of Contact:** The contact stress is usually highest at the highest point of single tooth contact (HPSTC), which is typically near the tip of the active profile.
*   **Elastic Coefficient ($Z_e$ or $Z_m$):** This factor accounts for the elastic properties (Poisson's ratio and Young's modulus) of the gear and pinion materials. Values are tabulated.
*   **Geometric Factor ($I$ or $I$ term in $Z_o$):** This factor accounts for the geometry of the tooth profile and the curvature of the mating teeth. It is dependent on the pressure angle and the ratio of the number of teeth. Standard values or formulas are available.
*   **Dynamic and Application Factors:** These are empirical factors to account for real-world operating conditions which are not captured by the ideal Lewis or Hertzian formulas.
*   **Pitting:** The primary failure mode associated with high contact stress.

**Example:**
For a pair of spur gears, the tangential force is 1500 N, face width is 40 mm, and the pitch diameter of the pinion is 100 mm. The elastic coefficient is $165 \text{ MPa}^{0.5}$, and the geometric factor for contact is 0.12. Calculate the contact stress.

**Solution:**
Using a simplified Hertzian formula:
$\sigma_c = Z_e \sqrt{\frac{W_t}{b \cdot d \cdot I}}$
$\sigma_c = 165 \text{ MPa}^{0.5} \sqrt{\frac{1500 \text{ N}}{(40 \text{ mm}) \cdot (100 \text{ mm}) \cdot 0.12}}$
$\sigma_c = 165 \sqrt{\frac{1500}{480}} \text{ MPa}$
$\sigma_c = 165 \sqrt{3.125} \text{ MPa}$
$\sigma_c = 165 \times 1.7677 \text{ MPa}$
$\sigma_c \approx 291.67 \text{ MPa}$

**References:**
*   **Norton, R. L. (2018). Machine Design – An Integrated Approach.** (Detailed explanation of contact stress and Hertzian theory).
*   **Juvinall & Marshek, (2011). Fundamentals of Machine Component Design.** (Comprehensive treatment of contact stress and surface fatigue).
*   **Bhandari, V. B. (2020). Design of Machine Elements.** (Sections on contact stress and its calculation).
*   **Mahadevan & Reddy, (2019). Design Data Hand Book.** (Tables for elastic coefficient and geometric factors).

---

### **5. Shear Stress at the Root**

While bending stress at the root is the primary concern for tooth breakage, shear stress also exists. In most practical spur gear designs, the bending stress is the limiting factor, and the shear stress is sufficiently low.

**Key Concept:** Shear stress is induced due to the cutting action or the force acting across the cross-section at the root.

**Formula:**
The shear stress ($\tau$) at the root can be approximated as:

$\tau = \frac{K_s \cdot W_t}{A}$

where:
*   $\tau$ = shear stress at the root
*   $K_s$ = Shear factor (accounts for the non-uniform distribution of shear stress)
*   $W_t$ = tangential force
*   $A$ = cross-sectional area of the tooth at the root (typically $b \times$ thickness at root).

**Note:** This is often simplified or considered implicitly within the bending stress calculations, as the bending stress is usually the dominant stress at the root.

---

### **6. Buckingham's Equation and Dynamic Load**

The Lewis formula assumes a static load. In reality, gears are subjected to dynamic loads due to inertia of the rotating masses and inaccuracies in the tooth profile and spacing. Buckingham developed an equation to account for this dynamic load.

**Key Concept:** Dynamic load increases the effective tangential force acting on the gear teeth.

**Buckingham's Equation (Simplified Form):**

$W_d = W_t + W_m$

where:
*   $W_d$ = Dynamic load
*   $W_t$ = Tangential load calculated from transmitted power (static)
*   $W_m$ = Incremental load due to dynamic effects, calculated as:

$W_m = \frac{0.015 \cdot v \cdot b \cdot E}{0.015 \cdot v + \sqrt{\frac{0.015 \cdot b \cdot E}{c}}}$

where:
*   $v$ = pitch line velocity (m/s)
*   $b$ = face width (mm)
*   $E$ = modulus of elasticity of gear material (MPa)
*   $c$ = error in tooth profile and spacing, typically taken as $0.00001 \times$ module (mm)

**Important Considerations for Buckingham's Equation:**
*   **Pitch Line Velocity:** This is a critical parameter. As speed increases, the dynamic load increases.
*   **Material Properties:** The modulus of elasticity ($E$) plays a significant role.
*   **Gear Accuracy:** The error in tooth profile and spacing ($c$) is crucial. Higher accuracy leads to lower dynamic load.
*   **Modern Standards:** While Buckingham's equation provides a good understanding, modern design often relies on AGMA (American Gear Manufacturers Association) or ISO standards, which have more refined dynamic load calculations and empirical factors ($K_v$).

**Example Calculation (Illustrative):**
Consider a spur gear operating at a pitch line velocity of 10 m/s, with a face width of 50 mm. The material is steel with $E = 200 \text{ GPa}$ ($200,000 \text{ MPa}$), and the error in tooth profile is $c = 0.000025 \times m$ (assume module $m=5$, so $c = 0.000125$ mm). If the static tangential load $W_t = 3000 \text{ N}$.

First, calculate $W_m$:
$v = 10 \text{ m/s}$
$b = 50 \text{ mm}$
$E = 200000 \text{ MPa}$
$c = 0.000125 \text{ mm}$

$W_m = \frac{0.015 \cdot 10 \cdot 50 \cdot 200000}{0.015 \cdot 10 + \sqrt{\frac{0.015 \cdot 50 \cdot 200000}{0.000125}}}$
$W_m = \frac{1500000}{0.15 + \sqrt{\frac{150000}{0.000125}}}$
$W_m = \frac{1500000}{0.15 + \sqrt{1.2 \times 10^9}}$
$W_m = \frac{1500000}{0.15 + 34641}$
$W_m \approx \frac{1500000}{34641} \approx 43.3 \text{ N}$

So, $W_d = W_t + W_m = 3000 \text{ N} + 43.3 \text{ N} = 3043.3 \text{ N}$.
In this case, the dynamic load is only slightly higher than the static load. However, at higher speeds, the dynamic load can become significantly larger.

**References:**
*   **Bhandari, V. B. (2020). Design of Machine Elements.** (Chapter on Gears, Dynamic Load and Buckingham's Equation).
*   **Sharma & Agarwal, (2017). Machine Design.** (Similar coverage).
*   **Norton, R. L. (2018). Machine Design – An Integrated Approach.** (Discusses dynamic loads).

---

### **7. Stress Concentration at the Root Fillet**

The Lewis formula assumes a smooth, uniform stress distribution. However, the fillet at the root of the gear tooth acts as a stress raiser. This concentration of stress needs to be accounted for in a more accurate design.

**Key Concept:** Stress concentration factor ($K_t$) amplifies the nominal stress at the root.

**Formula:**
The actual bending stress considering stress concentration is:

$\sigma_{b,actual} = K_t \cdot \sigma_b = K_t \cdot \frac{W_t}{b \cdot m \cdot y}$

where:
*   $K_t$ is the stress concentration factor. It depends on the tooth geometry, fillet radius, and pressure angle. Standard values or charts are available from sources like Shigley or design handbooks.
*   $y$ is the Lewis form factor, which may also be adjusted for stress concentration in more advanced treatments.

**Important Note:** Modern design procedures (like AGMA) often incorporate the effect of stress concentration and dynamic loads into combined factors, simplifying the direct application of $K_t$ in the basic Lewis formula. However, understanding the concept is vital.

---

### **8. Design Considerations Based on Stresses**

The ultimate goal is to design gears that can safely transmit the required power under given operating conditions. This involves ensuring that the induced stresses are within the permissible limits for the gear material.

**Design Procedure Outline:**
1.  **Determine Transmitted Power and Torque:** Based on the application.
2.  **Calculate Tangential Force ($W_t$):** Using the torque and pitch diameter.
3.  **Consider Dynamic Load ($W_d$):** Using Buckingham's equation or equivalent factors from standards.
4.  **Calculate Bending Stress ($\sigma_b$):** Using Lewis formula with dynamic load and form factor.
5.  **Calculate Contact Stress ($\sigma_c$):** Using Hertzian formula with dynamic load and appropriate geometric factors.
6.  **Compare Stresses with Permissible Limits:** The calculated bending stress should be less than the permissible bending stress (often related to the material's fatigue strength at the root). The contact stress should be less than the permissible contact stress (related to the material's surface fatigue strength or pitting resistance).
7.  **Adjust Design Parameters:** If stresses exceed limits, adjust face width ($b$), module ($m$), tooth profile (pressure angle, addendum), or material.

**Key Principle:** The design must satisfy both strength (bending stress) and surface durability (contact stress) requirements.

**References:**
*   **Bhandari, V. B. (2020). Design of Machine Elements.** (Comprehensive design procedure for gears).
*   **Norton, R. L. (2018). Machine Design – An Integrated Approach.** (Provides a step-by-step design approach).
*   **Shigley, J. E. (2003). Mechanical Engineering Design.** (Detailed design considerations and examples).

---

### **9. Practice Questions and Exercises**

**Question 1:**
A spur gear is designed to transmit 10 kW power at 1200 rpm. The gear has a module of 5 mm and a face width of 60 mm. The tangential force is transmitted at the pitch circle. If the Lewis form factor ($y$) is 0.35, calculate the bending stress induced in the gear tooth. Assume no dynamic load for this calculation.

**Answer:**
1.  **Calculate Torque (T):**
    $P = 10 \text{ kW} = 10 \times 10^3 \text{ W}$
    $\omega = 1200 \text{ rpm} = \frac{1200 \times 2\pi}{60} \text{ rad/s} = 40\pi \text{ rad/s}$
    $T = \frac{P}{\omega} = \frac{10 \times 10^3}{40\pi} = \frac{250}{\pi} \text{ Nm} = 79.58 \text{ Nm}$

2.  **Assume Pitch Diameter (d):** Let's assume a pitch diameter for the gear. Typically, the pinion dictates the size. Let's assume a pinion diameter $d_p = 150$ mm (0.15 m).
    $W_t = \frac{2T}{d_p} = \frac{2 \times 79.58 \text{ Nm}}{0.15 \text{ m}} = 1061 \text{ N}$

3.  **Calculate Bending Stress ($\sigma_b$):**
    $\sigma_b = \frac{W_t}{b \cdot m \cdot y} = \frac{1061 \text{ N}}{(60 \text{ mm}) \cdot (5 \text{ mm}) \cdot 0.35}$
    $\sigma_b = \frac{1061}{105} \text{ MPa}$
    $\sigma_b \approx 10.1 \text{ MPa}$

**Question 2:**
For the same gear in Question 1, if the pitch line velocity is 8 m/s, the material has $E = 210 \text{ GPa}$ and the allowable error is $c = 0.00015$ mm, calculate the dynamic load and the resulting bending stress.

**Answer:**
1.  **Calculate $W_m$ using Buckingham's equation:**
    $v = 8 \text{ m/s}$
    $b = 60 \text{ mm}$
    $E = 210000 \text{ MPa}$
    $c = 0.00015 \text{ mm}$

    $W_m = \frac{0.015 \cdot v \cdot b \cdot E}{0.015 \cdot v + \sqrt{\frac{0.015 \cdot b \cdot E}{c}}}$
    $W_m = \frac{0.015 \cdot 8 \cdot 60 \cdot 210000}{0.015 \cdot 8 + \sqrt{\frac{0.015 \cdot 60 \cdot 210000}{0.00015}}}$
    $W_m = \frac{151200}{0.12 + \sqrt{\frac{189000}{0.00015}}}$
    $W_m = \frac{151200}{0.12 + \sqrt{1.26 \times 10^9}}$
    $W_m = \frac{151200}{0.12 + 35496.5}$
    $W_m \approx \frac{151200}{35496.62} \approx 4.26 \text{ N}$

2.  **Calculate Dynamic Load ($W_d$):**
    $W_d = W_t + W_m = 1061 \text{ N} + 4.26 \text{ N} = 1065.26 \text{ N}$

3.  **Calculate Bending Stress with Dynamic Load:**
    $\sigma_{b,dynamic} = \frac{W_d}{b \cdot m \cdot y} = \frac{1065.26 \text{ N}}{(60 \text{ mm}) \cdot (5 \text{ mm}) \cdot 0.35}$
    $\sigma_{b,dynamic} = \frac{1065.26}{105} \text{ MPa}$
    $\sigma_{b,dynamic} \approx 10.14 \text{ MPa}$

    *(Note: In this specific example, the dynamic load increase is negligible. However, this demonstrates the calculation process. For higher speeds, $W_m$ would be significantly larger.)*

---

### **10. Important Points to Remember**

*   **Lewis Formula:** Primarily for bending stress at the root, treats tooth as a cantilever beam. Form factor 'y' is crucial.
*   **Contact Stress (Hertz Stress):** For surface fatigue (pitting), depends on material properties ($Z_e$), tooth geometry ($I$), and applied load.
*   **Dynamic Load:** Increases the effective load on the teeth due to speed and inaccuracies. Buckingham's equation is a model for this.
*   **Stress Concentration:** Exists at the root fillet and increases the actual bending stress.
*   **Design Criteria:** Must satisfy both bending strength and surface durability.
*   **Modern Design:** Often uses AGMA or ISO standards, which incorporate empirical factors for dynamic loads, stress concentration, and other effects.

---

This concludes the basic study of tooth stresses in spur gears. Understanding these fundamental concepts is essential for proceeding to more advanced gear design topics.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
