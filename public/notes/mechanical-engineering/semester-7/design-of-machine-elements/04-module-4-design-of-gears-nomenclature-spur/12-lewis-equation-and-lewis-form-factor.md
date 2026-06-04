---
title: "Lewis equation and Lewis form factor"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 4: Design of gears: Nomenclature: spur"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d88"
status: "completed"
scrapedAt: "2026-05-20T18:11:16.655Z"
---
# DESIGN OF MACHINE ELEMENTS

## Module 4: Design of Gears: Nomenclature: Spur Gears

### Topic: Lewis Equation and Lewis Form Factor

**Learning Outcomes:**

*   Understand the fundamental principles behind the Lewis equation for gear tooth strength.
*   Define and explain the significance of the Lewis form factor ($y$).
*   Analyze the factors influencing the Lewis form factor.
*   Apply the Lewis equation for preliminary design and strength calculations of spur gear teeth.
*   Relate the Lewis equation to the overall design process of gear drives.

**Course Outcomes Alignment:**

*   **CO5: Model suitable spur or helical gear drive based on the industrial requirements. (Knowledge Level: K3)**
    *   This topic directly contributes to CO5 by providing the fundamental equation for calculating the bending strength of gear teeth, a critical step in modeling a gear drive. Understanding the Lewis equation allows engineers to select appropriate gear dimensions and materials to meet power transmission requirements.

---

### 1. Introduction to Gear Tooth Strength

Gears are essential machine elements used for transmitting power and motion between shafts. The design of gear teeth is crucial to ensure their reliability and durability under operating conditions. Gear teeth are subjected to various stresses, including:

*   **Bending Stress:** Due to the tangential force acting on the tooth.
*   **Contact Stress (Crushing Stress):** Due to the normal force acting on the contact surfaces.
*   **Wear Stress:** Due to surface friction and abrasion.

The Lewis equation, developed by Wilfred Lewis, is a pioneering approach to assess the **bending strength** of a gear tooth. It provides a simplified method to estimate the maximum bending stress induced in a gear tooth under load.

---

### 2. The Lewis Equation

The Lewis equation is derived based on the assumption that a gear tooth can be treated as a cantilever beam subjected to a tangential force at the tooth tip.

**Assumptions of the Lewis Equation:**

*   The gear tooth is considered as a **cantilever beam** fixed at the base.
*   The **tangential load** is assumed to act at the **tip** of the gear tooth. This represents the worst-case scenario for bending stress.
*   The **force distribution** across the width of the gear tooth is assumed to be uniform.
*   The **stress concentration** at the root of the tooth is neglected in the basic form.
*   The analysis assumes a **standard 20-degree full-depth involute tooth profile**.
*   The **effect of dynamic loading** is not directly included in the basic Lewis equation.

**Derivation of the Lewis Equation:**

Consider a single gear tooth subjected to a tangential force $W_t$ acting at the outer edge of the addendum.

*   **Force Analysis:** The tangential force $W_t$ is the primary force causing bending.
*   **Beam Model:** The tooth is modeled as a cantilever beam with its root as the fixed end.
*   **Critical Section:** The critical section for bending is at the root of the tooth.
*   **Section Modulus:** For a rectangular cross-section of width $b$ and thickness $t$ at the root, the section modulus ($Z$) is given by:
    $Z = \frac{I}{y_{max}} = \frac{bt^2/12}{t/2} = \frac{bt^2}{6}$

*   **Bending Moment ($M$):** The bending moment at the root of the tooth is the product of the tangential force and the distance from the point of application of the force to the root. Assuming the force acts at the tip, the distance is approximately equal to the radius of the base circle plus the addendum. For simplicity, the Lewis equation often considers the lever arm to be approximately the radial distance to the point of load application. A more refined approach considers the effective lever arm. The simplified bending moment is often approximated as:
    $M = W_t \times (\text{effective lever arm})$

    However, the Lewis equation directly incorporates the geometry of the tooth through the form factor. The force $W_t$ acts at the pitch point. For bending stress calculation, the critical section is at the root. The effective lever arm is related to the tooth geometry.

*   **Bending Stress ($\sigma$):** The bending stress is given by:
    $\sigma = \frac{M}{Z} = \frac{M}{bt^2/6}$

    Substituting $M$ and $Z$, and considering the specific geometry of an involute tooth, the Lewis equation is formulated as:

    $\sigma = \frac{W_t}{b \times p} \times \frac{6}{t/p}$

    where:
    *   $p$ is the circular pitch ($p = \pi m$, where $m$ is the module).
    *   $t$ is the tooth thickness at the root.

    The term $\frac{6}{t/p}$ is a geometric factor that accounts for the shape of the tooth. Lewis introduced a **form factor ($y$)** to represent this geometric characteristic.

    The Lewis equation is commonly expressed as:

    $\frac{W_t}{b} = \sigma \times p \times y$

    Or, rearranging to find the tangential load capacity based on bending stress:

    $W_t = \sigma \times b \times p \times y$

    where:
    *   $W_t$ = Tangential load acting at the pitch circle (N)
    *   $\sigma$ = Allowable bending stress for the gear material (N/mm²)
    *   $b$ = Face width of the gear (mm)
    *   $p$ = Circular pitch ($p = \pi m$, where $m$ is the module in mm)
    *   $y$ = Lewis form factor (dimensionless)

**Important Note:** The original Lewis equation considered the tangential force acting at the pitch line. However, for the worst-case bending stress, the load should ideally be considered at the *outer edge of the addendum*. Modern practice often accounts for this by adjusting the form factor or applying a load-position factor. The equation as presented is the foundational form.

---

### 3. The Lewis Form Factor ($y$)

The Lewis form factor ($y$) is a dimensionless factor that accounts for the geometry of the gear tooth and its resistance to bending. It is dependent on:

*   **Number of teeth ($N$) on the gear.**
*   **Pressure angle ($\phi$).**
*   **Tooth profile (e.g., full depth, stub, etc.).** For standard 20-degree full-depth involute teeth, specific values of $y$ are available.

**Significance of the Lewis Form Factor:**

*   It represents the **shape and size of the critical section** at the root of the tooth.
*   A higher value of $y$ indicates a stronger tooth section for a given pitch.
*   It allows for the simplification of complex stress calculations into a single, tabulated factor.

**Factors Influencing $y$:**

*   **Number of Teeth ($N$):** As the number of teeth increases (for a given module), the tooth becomes wider at the base and less tapered, leading to a higher form factor. Smaller gears with fewer teeth have a more pointed tooth profile, resulting in a lower form factor.
*   **Pressure Angle ($\phi$):** A larger pressure angle generally leads to thicker teeth at the root and thus a higher form factor. Standard pressure angles are 14.5° and 20°.
*   **Tooth System (Full Depth, Stub, etc.):** Different tooth systems have varying proportions that affect the tooth shape and, consequently, the form factor.

**Values of the Lewis Form Factor:**

The Lewis form factor is typically obtained from tables or charts, which are derived from mathematical analysis of the involute tooth profile. These tables are usually specific to a particular tooth system (e.g., 20-degree full-depth involute).

**Example Table of Lewis Form Factor ($y$) for 20° Full-Depth Involute Teeth:**

| Number of Teeth ($N$) | Lewis Form Factor ($y$) |
| :-------------------- | :---------------------- |
| 12                    | 0.110                   |
| 13                    | 0.115                   |
| 14                    | 0.120                   |
| 15                    | 0.125                   |
| 16                    | 0.130                   |
| 17                    | 0.135                   |
| 18                    | 0.140                   |
| 20                    | 0.150                   |
| 25                    | 0.165                   |
| 30                    | 0.175                   |
| 35                    | 0.180                   |
| 40                    | 0.190                   |
| 50                    | 0.200                   |
| 75                    | 0.215                   |
| 100 or more           | 0.225                   |

*(Note: These values are illustrative. Actual values may vary slightly depending on the source and the exact method of calculation. Refer to design handbooks like V.B. Bhandari or PSG Design Data for precise values.)*

**Interpolation:** If the number of teeth is not directly available in the table, linear interpolation can be used to estimate the form factor.

---

### 4. Application of the Lewis Equation in Gear Design

The Lewis equation is a fundamental tool for the preliminary design of spur gears, particularly for determining the required module or face width based on the transmitted power and material properties.

**Design Procedure using Lewis Equation:**

1.  **Determine the Tangential Force ($W_t$):** This is usually calculated from the transmitted power ($P$) and the pitch line velocity ($v$):
    $W_t = \frac{P}{v}$
    where $P$ is in Watts and $v$ is in m/s. The pitch line velocity can be calculated as:
    $v = \frac{\pi D N_{rpm}}{60} = \frac{\pi (\frac{p_d}{\pi} m) N_{rpm}}{60} = \frac{m \pi \times \text{number of teeth} \times N_{rpm}}{60 \times \pi \times m}$ (if diameter is in mm)
    $v = \frac{\pi D_{rpm} N_{rpm}}{60} = \frac{\pi (m \times N) N_{rpm}}{60} \times 10^{-3}$ (if D in mm)
    $v = \frac{\pi D_{rpm} N_{rpm}}{60}$ (if D in m)
    Let's use pitch diameter $D = m \times N$.
    $v = \frac{\pi D N_{rpm}}{60} = \frac{\pi m N N_{rpm}}{60}$ (if D in mm)
    $v = \frac{\pi m N N_{rpm}}{60 \times 1000}$ (if v in m/s)

    $W_t = \frac{P \times 1000}{v}$ (if P in kW and v in m/s)

2.  **Select the Allowable Bending Stress ($\sigma$):** This is based on the gear material and the desired safety factor. It is usually obtained from material property tables or design handbooks. For steel gears, this can range from 50-200 N/mm² or more, depending on heat treatment and safety factor.

3.  **Choose the Pressure Angle ($\phi$):** A standard pressure angle like 20° is typically used.

4.  **Determine the Lewis Form Factor ($y$):** Select the number of teeth ($N$) for the pinion (the smaller gear) and find the corresponding $y$ value from a table for the chosen pressure angle and tooth system. It's crucial to consider the pinion as it usually has fewer teeth and is thus weaker.

5.  **Calculate the Required Circular Pitch ($p$) or Module ($m$):**
    Using the Lewis equation: $W_t = \sigma \times b \times p \times y$
    Rearrange to solve for $p$: $p = \frac{W_t}{\sigma \times b \times y}$

    Since $p = \pi m$, we can also solve for the module: $m = \frac{p}{\pi} = \frac{W_t}{\sigma \times b \times y \times \pi}$

6.  **Determine the Face Width ($b$):** If the module ($m$) is fixed or chosen, the face width can be calculated:
    $b = \frac{W_t}{\sigma \times p \times y}$

    The face width is usually selected as a multiple of the module, e.g., $b = (10 \text{ to } 15) \times m$. This provides an iterative approach to design.

**Example Problem:**

A pair of spur gears is designed to transmit 10 kW power at 1000 rpm of the pinion. The gears are made of steel with an allowable bending stress of 100 N/mm². The pressure angle is 20°. The pinion has 20 teeth. Assuming a face width of 50 mm, determine the required module.

**Solution:**

1.  **Given:**
    *   Power ($P$) = 10 kW = 10,000 W
    *   Pinion speed ($N_{rpm}$) = 1000 rpm
    *   Allowable bending stress ($\sigma$) = 100 N/mm²
    *   Pressure angle ($\phi$) = 20°
    *   Number of teeth on pinion ($N$) = 20
    *   Face width ($b$) = 50 mm

2.  **Calculate Pitch Line Velocity ($v$):**
    First, assume a module (e.g., $m=4$ mm) to estimate the diameter.
    Pitch diameter of pinion ($D$) = $m \times N = 4 \times 20 = 80$ mm = 0.08 m
    $v = \frac{\pi D N_{rpm}}{60} = \frac{\pi \times 0.08 \times 1000}{60} = 4.189$ m/s

3.  **Calculate Tangential Force ($W_t$):**
    $W_t = \frac{P}{v} = \frac{10000 \text{ W}}{4.189 \text{ m/s}} = 2387.2$ N

4.  **Find Lewis Form Factor ($y$):**
    For $N=20$ and $\phi=20^\circ$ (full depth), from the table, $y = 0.150$.

5.  **Calculate Required Module ($m$):**
    The Lewis equation is $W_t = \sigma \times b \times p \times y$.
    We know $p = \pi m$.
    So, $W_t = \sigma \times b \times (\pi m) \times y$
    Rearranging for $m$:
    $m = \frac{W_t}{\sigma \times b \times \pi \times y} = \frac{2387.2 \text{ N}}{100 \text{ N/mm}^2 \times 50 \text{ mm} \times \pi \times 0.150}$
    $m = \frac{2387.2}{2356.19} \approx 1.013$ mm

    *Self-Correction/Refinement:* The initial assumption of $m=4$ mm was to calculate velocity. Now we have calculated the required module. The assumed module was not used in the calculation for the required module, only the number of teeth and velocity calculation. The calculation for $m$ should be based on the actual power and speed. Let's re-evaluate the velocity calculation assuming we are solving for module:

    We need to solve for $m$ iteratively or use a relationship that doesn't require a pre-assumed $m$. The Lewis equation relates force to geometric parameters.

    Let's re-arrange to solve for $p$:
    $p = \frac{W_t}{\sigma \times b \times y} = \frac{2387.2 \text{ N}}{100 \text{ N/mm}^2 \times 50 \text{ mm} \times 0.150} = \frac{2387.2}{750} = 3.183$ mm

    Now, calculate the module:
    $m = \frac{p}{\pi} = \frac{3.183}{\pi} \approx 1.013$ mm

    This value of $m=1.013$ mm is the required module based on the Lewis equation for the given conditions. Standard available modules might be 1, 1.25, 1.5, etc. We would select the next higher standard module to ensure adequate strength.

    *Let's check the velocity if we use a standard module, say $m=1.25$ mm.*
    $N=20$, $m=1.25$ mm
    Pitch diameter ($D$) = $m \times N = 1.25 \times 20 = 25$ mm = 0.025 m
    $v = \frac{\pi D N_{rpm}}{60} = \frac{\pi \times 0.025 \times 1000}{60} = 1.309$ m/s
    $W_t = \frac{P}{v} = \frac{10000 \text{ W}}{1.309 \text{ m/s}} = 7639.4$ N

    Now, with $W_t = 7639.4$ N, $m=1.25$ mm, $p = \pi m = 3.927$ mm, $b=50$ mm, $\sigma=100$ N/mm², $y=0.150$:
    Check if these parameters are safe according to Lewis equation:
    Tangential load capacity = $\sigma \times b \times p \times y = 100 \times 50 \times 3.927 \times 0.150 = 29452.5$ N

    Since the load capacity (29452.5 N) is greater than the required tangential force (7639.4 N), a module of 1.25 mm with a face width of 50 mm would be adequate according to the Lewis equation.

---

### 5. Limitations of the Lewis Equation

While a foundational equation, the Lewis equation has several limitations, and modern gear design often incorporates more advanced methods:

*   **Simplified Beam Model:** Treats the tooth as a simple cantilever beam, neglecting stress concentrations at the root fillet and the complex stress distribution.
*   **Load at the Tip Assumption:** Assumes the load acts at the tip of the addendum, which gives the maximum bending moment but doesn't account for the load sharing between teeth in mesh.
*   **Uniform Load Distribution:** Assumes uniform load distribution across the face width, which is not true in reality due to manufacturing inaccuracies and shaft deflections.
*   **No Consideration of Dynamic Loads:** Does not account for the impact and vibration effects that occur during operation, especially at higher speeds.
*   **Ignores Contact Stress and Wear:** The Lewis equation only addresses bending stress; it does not consider the stresses on the tooth surface (contact stress) which can lead to pitting or the stresses related to wear.
*   **Form Factor Simplification:** The form factor $y$ is an empirical approximation.
*   **Material Strength:** The allowable bending stress ($\sigma$) is usually an empirical value related to the material's yield strength and a safety factor.

**Improvements and Extensions:**

Modern gear design standards (like AGMA - American Gear Manufacturers Association, and ISO) use more refined methods that account for:

*   **Load Distribution Factor ($K_d$ or $C_x$):** Accounts for dynamic effects and inaccuracies in tooth spacing and profile.
*   **Surface Finish Factor ($K_r$ or $C_z$):** Accounts for the effect of surface finish on fatigue life.
*   **Size Factor ($K_s$ or $C_a$):** Accounts for the effect of tooth size on strength.
*   **Load Stress Factor ($K_v$ or $K_m$):** Accounts for the elasticity of the teeth.
*   **Rim Thickness Factor ($K_b$ or $C_h$):** Accounts for the effect of the gear rim thickness.
*   **Helical Gears:** Specific factors are introduced for helical gears to account for the helix angle and the resulting load sharing.

Despite its limitations, the Lewis equation remains valuable for:

*   **Preliminary Design:** Quickly estimating the required gear size.
*   **Understanding Fundamental Principles:** Explaining the influence of tooth geometry on bending strength.
*   **Educational Purposes:** As a stepping stone to more complex analyses.

---

### 6. Important Points to Remember

*   The Lewis equation primarily addresses the **bending stress** in a gear tooth.
*   The **Lewis form factor ($y$)** is crucial and depends on the number of teeth, pressure angle, and tooth system.
*   Values for $y$ are obtained from **tables or charts** specific to tooth profiles.
*   The **pinion** is usually the weaker member due to fewer teeth, so its form factor is used in calculations.
*   The equation assumes a **cantilever beam** model with the load at the tip.
*   It's a **simplified approach** and doesn't account for dynamic loads, stress concentrations, or surface stresses.
*   Modern gear design uses more comprehensive methods that build upon the principles of the Lewis equation.

---

### 7. Practice Questions and Exercises

**Question 1:**
Define the Lewis equation and state its assumptions. Explain the significance of the Lewis form factor.

**Answer:**
The Lewis equation is an empirical formula used to estimate the bending strength of a gear tooth. It is given by: $\frac{W_t}{b} = \sigma \times p \times y$.
**Assumptions:**
1.  Gear tooth acts as a cantilever beam.
2.  Tangential load acts at the tip of the tooth.
3.  Uniform load distribution across the face width.
4.  Standard 20° full-depth involute profile.
The Lewis form factor ($y$) is a dimensionless factor that accounts for the geometry of the tooth's cross-section at the root, its resistance to bending, and its shape. It is dependent on the number of teeth and pressure angle. A higher $y$ means a stronger tooth.

**Question 2:**
A spur gear transmits 5 kW of power at a pitch line velocity of 5 m/s. The allowable bending stress for the gear material is 150 N/mm². The gear has 40 teeth and a face width of 60 mm. The pressure angle is 20°. Using the Lewis equation, estimate the required module. (Assume $y = 0.190$ for 40 teeth, 20° pressure angle).

**Solution:**
1.  **Given:**
    *   Power ($P$) = 5 kW = 5000 W
    *   Pitch line velocity ($v$) = 5 m/s
    *   Allowable bending stress ($\sigma$) = 150 N/mm²
    *   Number of teeth ($N$) = 40
    *   Face width ($b$) = 60 mm
    *   Pressure angle ($\phi$) = 20°
    *   Lewis form factor ($y$) = 0.190

2.  **Calculate Tangential Force ($W_t$):**
    $W_t = \frac{P}{v} = \frac{5000 \text{ W}}{5 \text{ m/s}} = 1000$ N

3.  **Use Lewis Equation to find Circular Pitch ($p$):**
    $W_t = \sigma \times b \times p \times y$
    $1000 \text{ N} = 150 \text{ N/mm}^2 \times 60 \text{ mm} \times p \times 0.190$
    $1000 = 1710 \times p$
    $p = \frac{1000}{1710} \approx 0.5848$ mm

4.  **Calculate Module ($m$):**
    $m = \frac{p}{\pi} = \frac{0.5848}{\pi} \approx 0.186$ mm

    *Note: This module is very small. This highlights the importance of checking standard module sizes and recalculating for adequacy. The result suggests that for these high stress and face width parameters with this velocity, a much smaller module would be required if the Lewis equation alone dictated.*

**Question 3:**
For a 20-degree full-depth spur gear with 12 teeth, what is the approximate Lewis form factor? If the allowable bending stress is 80 N/mm², and the circular pitch is 10 mm, what is the maximum tangential force the tooth can withstand per unit face width?

**Solution:**
1.  **Lewis Form Factor ($y$):**
    From the table provided earlier, for $N=12$ and 20° full-depth involute teeth, $y = 0.110$.

2.  **Maximum Tangential Force per unit Face Width:**
    Using the Lewis equation: $\frac{W_t}{b} = \sigma \times p \times y$
    $\frac{W_t}{b} = 80 \text{ N/mm}^2 \times 10 \text{ mm} \times 0.110$
    $\frac{W_t}{b} = 88$ N/mm

    This means for every 1 mm of face width, the tooth can withstand a tangential force of 88 N.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 8. References from Textbooks and Data Books

*   **Design of Machine Elements by V. B. Bhandari (McGraw Hill Education):** Chapter on Gears will extensively cover the Lewis equation, form factors, and their application. Look for sections discussing gear tooth strength and design.
*   **Machine Design – An Integrated Approach by R. L. Norton (Pearson Education):** Similar to Bhandari, this textbook will detail the mechanics of gear tooth loading and the Lewis equation as a foundational tool.
*   **Design Data Hand Book by K. Mahadevan, K. Balaveera Reddy (CBS Publishers & Distributors):** Data handbooks are crucial for obtaining tables of Lewis form factors for various tooth systems and number of teeth.
*   **PSG Design Data by PSG Tech:** Another valuable resource for tabulated values of Lewis form factors and related gear design data.

*(Consult the relevant chapters and sections in these textbooks for detailed derivations, derivations of $y$ factors, and more examples.)*

---