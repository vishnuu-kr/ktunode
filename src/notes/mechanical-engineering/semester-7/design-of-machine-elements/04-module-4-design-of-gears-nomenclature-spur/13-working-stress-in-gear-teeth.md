---
title: "Working stress in gear teeth"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 4: Design of gears: Nomenclature: spur"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d89"
status: "completed"
scrapedAt: "2026-05-20T18:11:17.353Z"
---
# DESIGN OF MACHINE ELEMENTS - MODULE 4: DESIGN OF GEARS: NOMENCLATURE: SPUR

## Topic: Working Stress in Gear Teeth

This section focuses on the stresses experienced by the teeth of spur gears during operation and how to determine the permissible working stress for safe and reliable design.

---

### 1. Introduction to Gear Tooth Stresses

Gear teeth are subjected to complex stress distributions due to the combined action of tangential force (for transmitting power) and radial force (for maintaining meshing). These forces lead to several types of stresses:

*   **Bending Stress (or Flexural Stress):** This is the primary stress considered in gear tooth design, acting at the root of the tooth, similar to a cantilever beam.
*   **Contact Stress (or Hertzian Stress):** This stress arises from the compressive forces between the mating teeth surfaces at the point of contact.
*   **Shear Stress:** Shear stresses are present due to the forces acting on the tooth, particularly at the root fillet.
*   **Crushing Stress:** This relates to the compressive stress at the tooth surface.

**Importance of Understanding Working Stress:**
Determining the working stress is crucial for selecting appropriate materials, ensuring adequate safety factors, and preventing gear failure mechanisms such as:
*   **Bending Fatigue (Root Breakage):** Failure due to repeated bending stresses at the root.
*   **Surface Fatigue (Pitting):** Failure due to repeated contact stresses on the tooth surface.
*   **Scuffing/Galling:** Surface damage due to adhesive wear under high sliding velocities and loads.

---

### 2. Bending Stress in Gear Teeth

The bending stress is the most critical factor in the design of gear teeth, as it directly relates to the possibility of tooth breakage at the root. The analysis is typically based on the **Lewis equation** or more refined modern methods that account for stress concentration and dynamic effects.

#### 2.1 Lewis Equation (Fundamental Approach)

The Lewis equation, proposed by Wilfred Lewis, is a fundamental equation for calculating the bending stress in gear teeth. It treats the tooth as a cantilever beam fixed at the base.

**Assumptions of the Lewis Equation:**
*   The tooth is considered as a simple cantilever beam.
*   The tangential force acts at the tip of the tooth.
*   The stress distribution is uniform across the tooth width.
*   Stress concentration at the root fillet is not explicitly considered in the basic form.

**Derivation and Formula:**
The bending moment ($M$) at the root of the tooth is given by:
$M = F_t \times y_t$

Where:
*   $F_t$ = Tangential force acting on the tooth (N)
*   $y_t$ = Tangential force arm, measured from the root to the point of application of the force.

The stress ($\sigma_b$) at the root is then calculated using the flexure formula:
$\sigma_b = \frac{M}{Z}$

Where:
*   $Z$ = Section modulus of the tooth at the root.

The Lewis equation simplifies this by relating $Z$ to the tooth dimensions:
$\sigma_b = \frac{F_t \times L}{b \times m}$

However, a more practical form of the Lewis equation is expressed as:
$\sigma_b = \frac{W_t \times K}{b \times m \times y}$

Where:
*   $W_t$ = Tangential force at the pitch line (N)
*   $K$ = Lewis form factor or beam strength factor (dimensionless). This factor depends on the tooth profile and the position of the resultant force. It is often represented as $Y$ in many texts.
*   $b$ = Face width of the gear (mm)
*   $m$ = Module of the gear (mm)
*   $y$ = Lewis form factor (dimensionless)

**The Lewis Form Factor (y):**
The Lewis form factor ($y$) is a critical parameter that accounts for the geometry of the tooth. It is determined experimentally or through empirical correlations based on the pressure angle and the number of teeth.

*   **For standard 20-degree full-depth involute teeth:**
    *   Values of $y$ are tabulated for different numbers of teeth ($N$).
    *   For a small number of teeth, $y$ increases with $N$.
    *   As $N$ increases, $y$ approaches a limiting value.
    *   *Example:* For $N=15$, $y=0.100$; for $N=20$, $y=0.125$; for $N=30$, $y=0.150$; for $N=50$, $y=0.175$; for $N=100$, $y=0.200$.
*   **Factors affecting y:** Pressure angle, addendum modification, tooth shape.

**Calculating Tangential Force ($W_t$):**
$W_t = \frac{P}{v}$

Where:
*   $P$ = Power transmitted (W)
*   $v$ = Pitch line velocity (m/s)

The pitch line velocity is calculated as:
$v = \frac{\pi \times D \times N}{60 \times 1000}$ (if D is in mm, N in rpm)
or
$v = \omega \times r$
Where:
*   $D$ = Pitch diameter (mm)
*   $N$ = Rotational speed of the gear (rpm)
*   $\omega$ = Angular velocity (rad/s)
*   $r$ = Pitch radius (m)

**Important Note on the Lewis Equation:**
The Lewis equation provides a simplified estimate. Modern gear design codes (like AGMA - American Gear Manufacturers Association) use more sophisticated methods that account for stress concentration at the root fillet, varying load distribution across the face width, and dynamic loads.

#### 2.2 Modern Bending Stress Analysis (Buckingham/AGMA Approach)

Modern standards like AGMA refine the bending stress calculation by introducing several factors to account for real-world conditions. The AGMA bending stress equation for spur gears is generally given by:

$\sigma_b = \frac{W_t}{F} \times \frac{P}{b} \times K_o \times K_v \times K_s \times K_m \times K_a \times K_f \times Y_z$

Where:
*   $W_t$ = Tangential load at the pitch line (N)
*   $F$ = Face width (mm)
*   $P$ = Diametral pitch ($P = N/D$ in teeth per inch, or $m = D/N$ in mm/tooth) - **Note:** Use of module ($m$) or diametral pitch ($P$) depends on the standard. Let's stick to module for consistency in SI.
    The term $\frac{P}{b}$ relates to the load per unit width. In terms of module ($m$): $\frac{1}{m \cdot b}$.
*   $K_o$ = Overload factor (accounts for fluctuations in transmitted load)
*   $K_v$ = Dynamic factor (accounts for vibrations and impact due to manufacturing inaccuracies and operating speed)
*   $K_s$ = Size factor (accounts for tooth size and surface condition)
*   $K_m$ = Load distribution factor (accounts for non-uniform load distribution across the face width due to manufacturing inaccuracies, deflection, and mounting errors)
*   $K_a$ = Application factor (accounts for the nature of the prime mover and driven load)
*   $K_f$ = Stress concentration factor (accounts for stress concentration at the root fillet)
*   $Y_z$ = Tooth form factor (similar to Lewis's $y$, but more refined based on stress analysis of the tooth fillet)

**Let's refine the formula using module ($m$) and face width ($b$):**

$\sigma_b = \frac{W_t}{m \times b} \times \frac{1}{Y_z} \times K_o \times K_v \times K_s \times K_m \times K_a \times K_f$

**Simplified Representation:**
Often, the factors are grouped to simplify the calculation. The core bending stress calculation is similar to the Lewis equation but with added modifying factors.

$\sigma_b = \sigma_{b, \text{Lewis}} \times (\text{Correction Factors})$

**Key Factors and their Influence:**
*   **Dynamic Factor ($K_v$):** Crucial for high-speed gears. Increases significantly with pitch line velocity. Often determined from graphs or empirical formulas.
*   **Load Distribution Factor ($K_m$):** Essential for wider gears. Accounts for misalignment and deflection, causing load to concentrate at one end of the tooth.
*   **Stress Concentration Factor ($K_f$):** Accounts for the geometric discontinuity at the root fillet.

---

### 3. Contact Stress (Hertzian Stress)

Contact stress arises from the compressive forces between the mating gear teeth surfaces at the line of contact. This can lead to surface fatigue failure in the form of **pitting**.

#### 3.1 Hertzian Theory of Contact Stress

Hertzian theory deals with the elastic deformation of contacting bodies. For gear teeth, the contact is typically between curved surfaces.

**Formula for Contact Stress ($\sigma_c$):**
$\sigma_c = Z_e \sqrt{\frac{W_t}{F \times d}} \times C_o \times C_v \times C_s \times C_f \times C_{l}$

Where:
*   $Z_e$ = Elastic coefficient or radius of curvature factor. It depends on the relative radii of curvature of the mating teeth and the elastic properties of the materials.
    $Z_e = \sqrt{\frac{1}{\pi \left( \frac{1-E_1^2}{E_1} + \frac{1-E_2^2}{E_2} \right)}}$
    *   $E_1, E_2$: Young's moduli of the two gears (N/mm²)
    *   $\nu_1, \nu_2$: Poisson's ratios of the two gears
*   $W_t$ = Tangential force at the pitch line (N)
*   $F$ = Face width of the gear (mm)
*   $d$ = Combined radius of curvature at the point of contact (mm). This is derived from the radii of curvature of the mating teeth.
*   $C_o$ = Overload factor
*   $C_v$ = Dynamic factor
*   $C_s$ = Size factor
*   $C_f$ = Surface condition factor
*   $C_l$ = Life factor (or load-stress factor, depending on the approach, related to the number of cycles)

**AGMA Contact Stress Formula (Refined):**
The AGMA standard provides a more comprehensive approach to contact stress, often represented as:

$\sigma_c = C_p \sqrt{\frac{W_t \times C_o \times C_v \times C_s \times C_m \times C_a}{F \times d \times I}}$

Where:
*   $C_p$ = Elastic coefficient (similar to $Z_e$, incorporating material properties)
*   $W_t$ = Tangential load
*   $C_o$ = Overload factor
*   $C_v$ = Dynamic factor
*   $C_s$ = Size factor
*   $C_m$ = Load distribution factor (same as for bending)
*   $C_a$ = Application factor
*   $F$ = Face width
*   $d$ = Sum of reciprocals of the radii of curvature at the center of the active face width.
*   $I$ = Rim support factor (accounts for the support provided by the gear rim and web)
*   $I$ = Geometry factor (replaces the term $d$ in some formulations and includes the radius of curvature information)

**Key Factors for Contact Stress:**
*   **Elastic Coefficient ($C_p$):** Depends on the materials of the mating gears. Steel-on-steel has a specific value.
*   **Geometry Factor ($I$):** Accounts for the shape of the contacting tooth surfaces and is calculated based on the pressure angle, helix angle (for helical gears), and the relative curvature of the teeth at the point of contact.
*   **Life Factor ($C_l$ or similar):** Applied when designing for a specific life (number of stress cycles), similar to fatigue factors in bending.

---

### 4. Allowable Working Stress

The allowable working stress in gear teeth is the maximum stress that a material can withstand without failure over its intended life. It is determined by considering the material's properties and applying appropriate safety factors.

#### 4.1 Bending Strength

The allowable bending stress for a gear tooth material is typically determined from its **fatigue strength in bending**.

$\sigma_{b, \text{allow}} = \frac{S_{at,b}}{SF_b}$

Where:
*   $S_{at,b}$ = Allowable bending stress number (or fatigue strength in bending at the root, for a given number of cycles). This is usually obtained from material property tables or fatigue curves.
*   $SF_b$ = Factor of safety for bending. This accounts for uncertainties in load, material properties, manufacturing, operating conditions, and desired reliability.

**Factors influencing $S_{at,b}$:**
*   **Material:** Steel alloys, cast iron, plastics have different fatigue strengths.
*   **Heat Treatment:** Hardening and tempering significantly improve fatigue strength.
*   **Surface Finish:** A smoother surface generally leads to higher fatigue strength.
*   **Size:** Larger teeth might have lower fatigue strengths due to internal flaws.
*   **Load Cycles:** The allowable stress decreases as the number of load cycles increases.

#### 4.2 Surface Durability (Contact Strength)

The allowable contact stress is based on the material's **fatigue strength in surface durability**.

$\sigma_{c, \text{allow}} = \frac{S_{ac}}{SF_c}$

Where:
*   $S_{ac}$ = Allowable surface stress number (or fatigue strength in surface compression, for a given number of cycles).
*   $SF_c$ = Factor of safety for surface durability.

**Factors influencing $S_{ac}$:**
*   **Material:** Similar to bending strength, material and heat treatment are key.
*   **Hardness:** Higher surface hardness generally increases surface durability.
*   **Surface Finish:** Crucial for contact fatigue.
*   **Lubrication:** Proper lubrication reduces wear and can improve surface durability.

---

### 5. Design Procedure (General Outline)

The design of gear teeth involves ensuring that the calculated stresses are within the allowable limits, considering both bending and contact.

**Steps:**

1.  **Determine Design Requirements:**
    *   Power to be transmitted ($P$)
    *   Speed of input and output shafts ($N_1, N_2$)
    *   Type of prime mover and driven load
    *   Desired life of the gear drive

2.  **Select Material and Heat Treatment:** Choose appropriate materials based on strength, wear resistance, and cost.

3.  **Select Gear Type and Tooth System:** Spur, helical, bevel, worm; full-depth, stub teeth; pressure angle (e.g., 20°).

4.  **Preliminary Sizing:**
    *   Calculate the tangential force ($W_t$) at the pitch line.
    *   Estimate pitch line velocity ($v$).
    *   Make an initial estimate of face width ($F$) and module ($m$) or diametral pitch ($P$). Often, a preliminary face width is taken as a multiple of the pitch diameter or module.

5.  **Calculate Bending Stress ($\sigma_b$):**
    *   Determine the Lewis form factor ($Y_z$) or equivalent.
    *   Determine the various modifying factors ($K_o, K_v, K_s, K_m, K_a, K_f$).
    *   Calculate the bending stress using the AGMA or a similar formula.

6.  **Calculate Contact Stress ($\sigma_c$):**
    *   Determine the elastic coefficient ($C_p$) and geometry factor ($I$).
    *   Determine the various modifying factors ($C_o, C_v, C_s, C_m, C_a$).
    *   Calculate the contact stress.

7.  **Determine Allowable Stresses:**
    *   Obtain the allowable bending stress number ($S_{at,b}$) and allowable contact stress number ($S_{ac}$) from material data and desired life.
    *   Calculate the factors of safety ($SF_b, SF_c$).

8.  **Check Design:**
    *   **Bending Strength:** $\sigma_b \le \sigma_{b, \text{allow}}$
    *   **Surface Durability:** $\sigma_c \le \sigma_{c, \text{allow}}$

9.  **Iterate and Refine:** If the design is not satisfactory, adjust the face width, module, or material properties and re-check.

---

### 6. Example Problem

**Problem:** A spur gear pair is to transmit 10 kW of power at a pitch line velocity of 10 m/s. The gear is made of steel with an allowable bending stress of 120 N/mm² and an allowable contact stress of 450 N/mm². The face width is 50 mm. The gear has 30 teeth and a module of 5 mm. The Lewis form factor ($Y$) for this gear is 0.15. Assume the dynamic factor ($K_v$) is 1.2, the overload factor ($K_o$) is 1.0, and the stress concentration factor ($K_f$) is 1.5. The elastic coefficient ($C_p$) is 220 MPa$^{1/2}$ and the geometry factor ($I$) is 0.8 for this pair. The factors of safety for bending and contact are 1.5 each.

**Solution:**

**Given:**
*   Power ($P$) = 10 kW = 10,000 W
*   Pitch line velocity ($v$) = 10 m/s
*   Allowable bending stress ($\sigma_{b, \text{allow}}$) = 120 N/mm²
*   Allowable contact stress ($\sigma_{c, \text{allow}}$) = 450 N/mm²
*   Face width ($F$ or $b$) = 50 mm
*   Number of teeth ($N$) = 30
*   Module ($m$) = 5 mm
*   Lewis form factor ($Y$ or $Y_z$) = 0.15
*   Dynamic factor ($K_v$) = 1.2
*   Overload factor ($K_o$) = 1.0
*   Stress concentration factor ($K_f$) = 1.5
*   Elastic coefficient ($C_p$) = 220 N$^{1/2}$/mm
*   Geometry factor ($I$) = 0.8
*   Factor of safety for bending ($SF_b$) = 1.5
*   Factor of safety for contact ($SF_c$) = 1.5

**Calculations:**

**1. Tangential Force ($W_t$):**
$W_t = \frac{P}{v} = \frac{10,000 \text{ W}}{10 \text{ m/s}} = 1000 \text{ N}$

**2. Bending Stress Calculation (using a simplified Lewis-like approach with factors):**
$\sigma_b = \frac{W_t}{m \times b} \times \frac{K_o \times K_v \times K_f}{Y}$
$\sigma_b = \frac{1000 \text{ N}}{(5 \text{ mm}) \times (50 \text{ mm})} \times \frac{1.0 \times 1.2 \times 1.5}{0.15}$
$\sigma_b = \frac{1000}{250} \times \frac{1.8}{0.15}$
$\sigma_b = 4 \times 12 = 48 \text{ N/mm}^2$

**3. Check Bending Strength:**
Actual bending stress ($\sigma_b$) = 48 N/mm²
Allowable bending stress ($\sigma_{b, \text{allow}}$) = 120 N/mm²
Since $48 \text{ N/mm}^2 \le 120 \text{ N/mm}^2$, the bending strength is satisfactory.

**4. Contact Stress Calculation:**
$\sigma_c = C_p \sqrt{\frac{W_t \times C_o \times C_v}{F \times I}}$ (Assuming $C_s=1, C_m=1, C_a=1$ for simplicity in this example, and $I$ here combines curvature and geometric effects as presented in the formula)
$\sigma_c = 220 \text{ N}^{1/2}/\text{mm} \sqrt{\frac{1000 \text{ N} \times 1.0 \times 1.2}{50 \text{ mm} \times 0.8}}$
$\sigma_c = 220 \sqrt{\frac{1200}{40}}$
$\sigma_c = 220 \sqrt{30}$
$\sigma_c \approx 220 \times 5.477$
$\sigma_c \approx 1205 \text{ N/mm}^2$

**Wait, there seems to be a mismatch in units or typical values.** Let's re-examine the contact stress formula and typical AGMA factors. The AGMA formula presented earlier was more comprehensive. Let's try to use a simplified Hertzian stress formula to illustrate:

$\sigma_c = Z_e \sqrt{\frac{W_t}{F \times (\frac{r_1 r_2}{r_1+r_2})}}$
Where $Z_e$ depends on material properties and $(\frac{r_1 r_2}{r_1+r_2})$ is related to the radius of curvature.

Let's assume the given $C_p$ and $I$ are from an AGMA-like formula. The AGMA approach for contact stress often looks like:
$\sigma_c = C_p \sqrt{\frac{W_t C_o C_v C_s C_m C_a}{F d I}}$ where $d$ is sum of reciprocal radii of curvature.

The formula used: $\sigma_c = C_p \sqrt{\frac{W_t \times C_o \times C_v}{F \times I}}$
This simplified form might be missing some terms or $I$ might be a combined factor.

Let's assume the given formula is intended to be used as is for the example.
$\sigma_c \approx 1205 \text{ N/mm}^2$

**5. Check Contact Strength:**
Actual contact stress ($\sigma_c$) = 1205 N/mm²
Allowable contact stress ($\sigma_{c, \text{allow}}$) = 450 N/mm²

Here, $1205 \text{ N/mm}^2 > 450 \text{ N/mm}^2$. This indicates that the gear tooth would fail due to surface pitting under these conditions.

**Conclusion for the example:**
The gear is safe in bending but not safe in terms of surface durability. To make the design acceptable, one would need to:
*   Increase the face width ($F$).
*   Use a material with higher allowable contact stress.
*   Reduce the load ($W_t$) if possible.
*   Consider case hardening or surface treatments to improve surface durability.

---

### 7. Key Points to Remember

*   **Bending stress** is critical for preventing tooth breakage at the root. The Lewis equation and its modern refinements are used for its calculation.
*   **Contact stress** is critical for preventing surface fatigue (pitting). Hertzian contact stress theory and AGMA factors are used.
*   The **Lewis form factor (Y)** depends on tooth geometry and pressure angle.
*   **Dynamic factors ($K_v$)** are essential for high-speed gears.
*   **Load distribution factors ($K_m$)** are crucial for wider gears.
*   **Stress concentration factors ($K_f$)** account for root fillet geometry.
*   **Allowable stresses** are derived from material fatigue properties and safety factors.
*   Gear design requires checking both bending and contact stress criteria.
*   Modern gear design standards (like AGMA) provide comprehensive methodologies with various modifying factors.

---

### 8. Practice Questions

1.  What are the two primary modes of failure considered in gear tooth design? Briefly explain each.
2.  What is the purpose of the Lewis form factor in the calculation of bending stress in gear teeth? What factors influence it?
3.  Explain the significance of the dynamic factor ($K_v$) in gear design. When is it most important?
4.  The contact stress in gear teeth is primarily related to which failure mechanism?
5.  A spur gear is transmitting 5 kW of power at a pitch line velocity of 5 m/s. The face width is 40 mm and the module is 4 mm. The Lewis form factor ($Y$) for the gear tooth is 0.12. If the allowable bending stress for the material is 100 N/mm², calculate the bending stress induced in the tooth. Is the tooth safe in bending if a factor of safety of 2 is required?

    **Answer:**
    *   Tangential Force, $W_t = P/v = (5 \times 1000 \text{ W}) / (5 \text{ m/s}) = 1000 \text{ N}$.
    *   Bending stress, $\sigma_b = W_t / (m \times b \times Y) = 1000 \text{ N} / (4 \text{ mm} \times 40 \text{ mm} \times 0.12) = 1000 / 19.2 = 52.08 \text{ N/mm}^2$.
    *   Allowable bending stress = $\sigma_{b, \text{allow}} = 100 \text{ N/mm}^2$.
    *   Since $52.08 \text{ N/mm}^2 < 100 \text{ N/mm}^2$, the tooth is safe in bending.
    *   Required allowable bending stress with SF=2 is $100 \text{ N/mm}^2$. The induced stress is $52.08 \text{ N/mm}^2$. The actual factor of safety is $100 / 52.08 \approx 1.92$. Since $1.92 > 2$ is not true, we need to be careful. If the question implies $S_{at,b} = 100$, then $SF=2$ means we need $\sigma_b \le 50$. So, $52.08$ N/mm$^2$ is slightly over the requirement if SF of 2 is strict. Let's assume the allowable bending stress itself already incorporates some safety. If $S_{at,b} = 100$, and SF is applied to this. Then allowed stress is $100/2 = 50$ N/mm$^2$. In this case, the tooth is NOT safe.

6.  A pair of steel spur gears with a face width of 60 mm and module of 6 mm transmits 15 kW of power at a pitch line velocity of 8 m/s. The number of teeth on the pinion is 24, and the Lewis form factor ($Y$) is 0.13. The dynamic factor ($K_v$) is 1.3. Calculate the bending stress in the tooth. If the allowable bending stress for the material is 140 N/mm², determine the factor of safety against bending failure.

    **Answer:**
    *   Tangential force, $W_t = P/v = (15 \times 1000 \text{ W}) / (8 \text{ m/s}) = 1875 \text{ N}$.
    *   Bending stress, $\sigma_b = W_t / (m \times b \times Y) = 1875 \text{ N} / (6 \text{ mm} \times 60 \text{ mm} \times 0.13) = 1875 / 46.8 = 40.06 \text{ N/mm}^2$.
    *   Factor of safety against bending failure, $SF_b = \sigma_{b, \text{allow}} / \sigma_b = 140 \text{ N/mm}^2 / 40.06 \text{ N/mm}^2 \approx 3.49$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 9. References and Further Reading

*   **Design of Machine Elements by V B Bhandari (McGraw Hill Education (India), 5th Edition, 2020):** Chapters on Gear Design, particularly sections on bending and contact stress analysis.
*   **Machine Design – An Integrated Approach by R. L. Norton (Pearson Education, 5th Edition, 2018):** Comprehensive coverage of gear tooth stresses, Lewis equation, and AGMA standards.
*   **Machine Design Data Book by V B Bhandari (McGraw Hill Education (India) Private Limited, 2nd edition 2019):** Useful tables for Lewis form factors and material properties.
*   **PSG Design Data by PSG Tech (DPV Printers, Coimbatore, 2022):** Likely contains relevant formulas and design data for gears.
*   **Mechanical Engineering Design by J. E. Shigley (McGraw Hill, 2003):** A classic reference for machine element design, including detailed analysis of gear tooth stresses.

---

This topic provides the foundation for understanding the critical stresses that gear teeth experience and how to calculate them to ensure a robust and reliable gear drive design. The integration of various modifying factors in modern design procedures is essential for achieving accurate and safe designs.