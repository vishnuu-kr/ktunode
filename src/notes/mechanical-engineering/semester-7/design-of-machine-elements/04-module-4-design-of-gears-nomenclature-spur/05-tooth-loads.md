---
title: "tooth loads"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 4: Design of gears: Nomenclature: spur"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d81"
status: "completed"
scrapedAt: "2026-05-20T18:11:11.756Z"
---
# DESIGN OF MACHINE ELEMENTS - Module 4: Design of Gears: Nomenclature: Spur - Tooth Loads

## Introduction to Spur Gears and Tooth Loads

This module focuses on the design of spur gears, a fundamental component in power transmission systems. We will delve into the various types of loads that act on gear teeth and the methodologies used to calculate them. Understanding these loads is crucial for ensuring the durability and reliability of gear drives.

**Key Concepts:**

*   **Spur Gear:** A cylindrical gear with teeth cut parallel to the axis of rotation. They are the simplest type of gear and are used to transmit power between parallel shafts.
*   **Power Transmission:** The process of transferring mechanical energy from a driving source to a driven machine.
*   **Gear Ratio:** The ratio of the number of teeth on the driven gear to the number of teeth on the driving gear, which determines the speed and torque reduction or increase.
*   **Tooth Loads:** The forces that act on the teeth of a gear during operation. These loads can arise from transmitted power, dynamic effects, and wear.

**References:**

*   **Design of Machine Elements by V. B. Bhandari (Chapter 12: Gears)**
*   **Machine Design – An Integrated Approach by R. L. Norton (Chapter 10: Gears)**
*   **Machine Design by Dr P.C. Sharma, Dr D.K. Agarwal (Chapter 15: Spur Gears)**

---

## 1. Fundamental Forces Acting on a Gear Tooth

When a pair of gears meshes, forces are transmitted between the teeth. These forces can be resolved into three components:

*   **Tangential Force (Wt):** This is the primary force responsible for transmitting power. It acts along the line of action at the point of contact and is tangential to the pitch circles of both gears.
    *   **Formula:** $W_t = \frac{2T}{d}$
        *   $T$ = Torque transmitted (N-mm or N-m)
        *   $d$ = Pitch diameter of the gear (mm or m)
    *   **Purpose:** This force drives the driven gear and overcomes resistance.

*   **Radial (or Reversing) Force (Wr):** This force acts radially inwards towards the center of the gear. It is caused by the curvature of the teeth and tends to push the gears apart.
    *   **Formula:** $W_r = W_t \tan(\phi)$
        *   $\phi$ = Pressure angle of the gear teeth (typically 14.5° or 20°)
    *   **Purpose:** This force puts the gear shaft and bearings under radial load.

*   **Axial Force (Wa):** This force acts parallel to the axis of rotation. It is present in helical and bevel gears but is ideally zero for spur gears. However, due to manufacturing imperfections or improper mounting, a small axial force might be present in spur gears. For the purpose of basic spur gear design, this is often neglected.

**Important Points to Remember:**

*   The tangential force ($W_t$) is the most significant for power transmission.
*   The radial force ($W_r$) creates bending stress and bearing loads.
*   For ideal spur gears, the axial force ($W_a$) is zero.

**Example:**

A spur gear with a pitch diameter of 100 mm transmits a torque of 50 N-m. Calculate the tangential and radial forces acting on the teeth, assuming a pressure angle of 20°.

**Solution:**

*   Torque $T = 50 \text{ N-m} = 50 \times 10^3 \text{ N-mm}$
*   Pitch diameter $d = 100 \text{ mm}$
*   Pressure angle $\phi = 20^\circ$

1.  **Tangential Force ($W_t$):**
    $W_t = \frac{2T}{d} = \frac{2 \times 50 \times 10^3 \text{ N-mm}}{100 \text{ mm}} = 1000 \text{ N}$

2.  **Radial Force ($W_r$):**
    $W_r = W_t \tan(\phi) = 1000 \text{ N} \times \tan(20^\circ) \approx 1000 \text{ N} \times 0.364 = 364 \text{ N}$

---

## 2. Types of Tooth Loads in Spur Gears

Gear teeth are subjected to various types of loads, which can be broadly categorized as:

### 2.1. Static Tooth Load (or Endurance Limit Load)

This is the load that the gear teeth can withstand for an infinite life without fatigue failure. It is determined by the material properties of the gear and the geometry of the tooth.

*   **Based on Bending Strength (Lewis Equation):** This was one of the earliest methods for calculating tooth loads, developed by Wilfred Lewis. It considers the tooth as a cantilever beam subjected to the tangential load at the outer edge.
    *   **Formula:** $W_t = \sigma_b \times b \times m \times y$
        *   $\sigma_b$ = Allowable bending stress for the gear material (N/mm² or MPa)
        *   $b$ = Face width of the gear (mm)
        *   $m$ = Module of the gear (mm)
        *   $y$ = Lewis form factor (or tooth form factor), which depends on the number of teeth and the pressure angle. It accounts for the shape of the tooth and its stress concentration.

*   **Velocity Factor (Kv):** The Lewis equation assumes static conditions. In reality, dynamic effects due to the velocity of the teeth at the point of contact cause impact loading. The velocity factor is used to reduce the allowable stress or increase the load to account for this.
    *   **Formula (common approximation from AGMA - American Gear Manufacturers Association):** $K_v = \frac{6.1 + v}{6.1}$ for $v$ in m/s (often used for well-finished gears)
        *   $v$ = Pitch line velocity (m/s)
    *   **Note:** Various empirical formulas exist for $K_v$, and it's essential to refer to design standards or data books for specific applications.

*   **Service Factor (Ks):** This factor accounts for irregularities in the power source, driven load, and the distribution of load on more than one tooth. It includes:
    *   **Uniformity of driving torque:** Smooth (e.g., electric motor) vs. pulsating (e.g., internal combustion engine).
    *   **Uniformity of driven load:** Uniform (e.g., fan) vs. moderate shock (e.g., centrifugal pump) vs. heavy shock (e.g., rolling mill).
    *   **Impact of load:** Uniform, moderate shock, or heavy shock.
    *   **Application:** Often values are provided in tables based on application.

*   **Load Distribution Factor (Km):** This factor accounts for inaccuracies in the gear tooth profile, tooth spacing, shaft deflection, and housing rigidity, which can lead to uneven load distribution across the face width.
    *   **Formula (AGMA):** $K_m = 1 + c \times (\frac{b}{F_{pd}})$ where $c$ is a factor related to manufacturing accuracy and $F_{pd}$ is the diametral pitch.
    *   **Simplified approach:** Often, a value of $K_m = 1.25$ to $1.75$ or more might be used depending on the precision of the gear manufacturing and mounting.

*   **Surface Condition Factor (Cf):** This factor accounts for surface roughness and lubrication conditions, impacting the tangential load.

*   **Size Factor (Cs):** This factor accounts for the size of the gear teeth.

**Calculating the Design Tangential Load ($W_{t\_design}$):**

The design tangential load considers all these factors to ensure safe operation. A common formulation is:

$W_{t\_design} = \frac{W_t}{K_v \times K_s \times K_m \times K_f \times K_a \times K_x}$ (This is a general form, specific factors might vary based on standards).

A more practical approach often involves calculating the **allowable tangential load** based on the material properties and tooth geometry, and then comparing it with the actual load.

**Lewis Equation for Allowable Tangential Load:**

$W_{t\_allowable} = \sigma_{all} \times b \times m \times y$
where $\sigma_{all}$ is the allowable bending stress, which is the static bending strength divided by a factor of safety.

**Relationship with transmitted power (P):**

$P = \frac{2 \pi N T}{60 \times 1000}$ (in kW) or $P = \frac{2 \pi N T}{60}$ (in Watts)
where $T$ is in N-m and $N$ is in rpm.
$W_t = \frac{2T}{d}$
$W_t = \frac{2 \times P \times 1000}{2 \pi N} \times \frac{2}{d}$ (for P in kW, T in N-m)

The tangential load can also be expressed in terms of power and pitch line velocity:
$W_t = \frac{P}{v_{pitch}}$ where $v_{pitch} = \frac{\pi d N}{60000}$ (for $d$ in mm, $N$ in rpm, $v$ in m/s).

**References:**

*   **Design of Machine Elements by V. B. Bhandari (Chapter 12.10: Calculation of Gear Tooth Loads)**
*   **Machine Design – An Integrated Approach by R. L. Norton (Chapter 10.5: Gear Tooth Forces)**
*   **Machine Design Data Book by V B Bhandari (Section 12: Gears)**
*   **PSG Design Data (Section 7.2: Forces on Gear Teeth)**

### 2.2. Dynamic Tooth Load (Buckingham's Equation)

This load arises due to the impact that occurs when mating teeth come into contact. It is a more refined calculation than just using a velocity factor. Earle Buckingham developed an equation for dynamic load that considers the elasticity of the teeth and the inaccuracies in their profiles.

*   **Formula:** $W_{dyn} = W_t + \frac{21v(c e + W_t)}{21v + \sqrt{c e + W_t}}$
    *   $W_{dyn}$ = Dynamic load (N)
    *   $W_t$ = Tangential load calculated from power (N)
    *   $v$ = Pitch line velocity (m/s)
    *   $c$ = Factor of deformation (or elastic coefficient), which depends on the materials of the mating teeth. Values are available in tables.
    *   $e$ = Sum of errors in tooth profile and spacing, lead error, and parallelism error (mm). This is often called the "total composite error" or "effective pitch error".

**Factors affecting Dynamic Load:**

*   **Pitch line velocity ($v$):** Higher velocities lead to greater dynamic loads.
*   **Sum of errors in tooth profile and spacing ($e$):** Inaccuracies in manufacturing increase the impact.
*   **Factor of deformation ($c$):** Material properties influence how much the teeth deform under load.

**Load Factor ($K_v$ or $Y_v$):** Often, a factor known as the "dynamic factor" or "velocity factor" ($Y_v$) is used to modify the static load to account for dynamic effects. Buckingham's equation provides a more theoretical basis for this factor.

$W_{t\_design} = W_t (1 + Y_v)$ or $W_{t\_design} = W_t + W_{dyn}$ (depending on the formulation)

**References:**

*   **Design of Machine Elements by V. B. Bhandari (Chapter 12.10.2: Dynamic Load)**
*   **Machine Design – An Integrated Approach by R. L. Norton (Chapter 10.5: Gear Tooth Forces)**

### 2.3.  Wear Load

Gear teeth can also fail due to wear on their surfaces, especially in applications with abrasive contaminants or inadequate lubrication. Wear can occur on the flank of the teeth.

*   **Considerations:**
    *   **Material properties:** Hardness and resistance to abrasion.
    *   **Lubrication:** Proper lubrication reduces friction and wear.
    *   **Surface finish:** Smoother surfaces generally experience less wear.
    *   **Sliding velocity:** Higher sliding velocities can increase wear.
    *   **Load:** Higher loads can increase contact pressure and wear.

*   **Design approach for wear:** Design criteria for wear often involve calculating the **allowable wear load** based on surface durability considerations and comparing it with the actual load. This typically involves surface stress calculations (Hertzian contact stress).

**References:**

*   **Design of Machine Elements by V. B. Bhandari (Chapter 12.11: Wear Load)**
*   **Machine Design – An Integrated Approach by R. L. Norton (Chapter 10.6: Gear Tooth Wear)**

---

## 3. Combined Tangential Load and Factors of Safety

The actual load experienced by a gear tooth is a combination of the tangential load and dynamic effects. To ensure reliability, a factor of safety is applied.

*   **Factor of Safety (FS):** This is a multiplier used to account for uncertainties in calculations, material properties, operating conditions, and the consequences of failure.

*   **Design Tangential Load ($W_{t\_design}$):** This is the effective tangential load that the gear tooth must withstand. It is typically calculated by multiplying the basic tangential load by various modifying factors.

$W_{t\_design} = W_t \times K_v \times K_s \times K_m \times K_a \times K_x$ (This is a representative equation. The exact formulation and factors may vary based on design codes and standards like AGMA or ISO).

Let's break down some common modifying factors:

*   **Velocity Factor ($K_v$):** Accounts for dynamic effects due to speed (as discussed earlier).
*   **Application Factor ($K_s$):** Accounts for load variations and type of prime mover and driven machinery (similar to service factor).
*   **Load Distribution Factor ($K_m$):** Accounts for inaccuracies in mounting and tooth meshing.
*   **Miner's Rule for Fatigue (if cycles are known):** If the load varies significantly over the life of the gear, Miner's rule can be applied to cumulative fatigue damage.

**Important Point:** The design process usually involves:
1.  Calculating the basic tangential load ($W_t$) from the transmitted power and speed.
2.  Determining appropriate modifying factors based on the application, materials, and manufacturing quality.
3.  Calculating the design tangential load ($W_{t\_design}$).
4.  Using this design load in conjunction with tooth geometry and material strength to determine the required module or face width.

---

## 4. Design Procedures for Spur Gears (Considering Tooth Loads)

The design of spur gears involves several steps, with tooth load calculations being central to determining the required geometry and ensuring the gear's strength and durability.

**General Design Steps:**

1.  **Specify Design Requirements:**
    *   Power to be transmitted ($P$)
    *   Input speed ($N_1$) and output speed ($N_2$) (or desired gear ratio)
    *   Type of prime mover and driven load (for service/application factors)
    *   Center distance between shafts (if fixed)
    *   Material of gears (pinion and gear)
    *   Desired life of the gear drive
    *   Operating environment (e.g., lubrication, temperature, presence of contaminants)

2.  **Select Initial Parameters:**
    *   **Gear Ratio (i):** $i = N_1 / N_2 = d_2 / d_1 = T_2 / T_1$ (where $d$ is pitch diameter, $T$ is number of teeth).
    *   **Pressure Angle ($\phi$):** Commonly 20° or 14.5°. 20° is preferred for higher strength and less radial load.
    *   **Materials:** Select appropriate materials for pinion and gear based on strength, hardness, wear resistance, and cost. Heat treatment is often considered.

3.  **Determine the Tangential Load ($W_t$):**
    *   Calculate the torque ($T_1$) on the pinion (or gear): $T_1 = \frac{P \times 1000}{2 \pi N_1}$ (if P is in kW, N in rpm).
    *   Estimate the pitch diameter ($d_1$ or $d_2$) based on desired center distance or preliminary calculations. A common starting point is to relate pitch diameter to the torque or power.
    *   Calculate $W_t = \frac{2T_1}{d_1}$ (or $W_t = \frac{2T_2}{d_2}$).

4.  **Calculate the Design Tangential Load ($W_{t\_design}$):**
    *   Determine the pitch line velocity ($v$) from $d_1$ and $N_1$.
    *   Select appropriate modifying factors:
        *   Velocity Factor ($K_v$)
        *   Application Factor ($K_s$)
        *   Load Distribution Factor ($K_m$)
        *   Other factors as per design codes ($K_f, K_a, K_x$).
    *   $W_{t\_design} = W_t \times K_v \times K_s \times K_m \times K_a \times K_x$

5.  **Calculate Allowable Tooth Load:**
    *   **Bending Strength:** Determine the allowable bending stress ($\sigma_{all\_b}$) based on material properties, heat treatment, and a factor of safety for bending.
    *   **Lewis Form Factor (y):** Obtain from tables based on the number of teeth ($T_1$) and pressure angle ($\phi$).
    *   **Face width ($b$):** Initially assume a value for $b$ (e.g., $b = 10m$ to $12m$) or determine it based on empirical relations.
    *   **Allowable tangential load based on bending strength ($W_{t\_allowable\_b}$):**
        $W_{t\_allowable\_b} = \sigma_{all\_b} \times b \times m \times y$

    *   **Surface Durability (Wear):** Determine the allowable surface contact stress ($\sigma_{all\_c}$) based on material properties and a factor of safety for wear.
    *   **Surface durability factor ($Z_e$):** Depends on materials, geometry, and contact conditions.
    *   **Allowable tangential load based on surface durability ($W_{t\_allowable\_c}$):**
        $W_{t\_allowable\_c} = Z_e \times b \times d_1 \times I \times \frac{\sigma_{all\_c}^2}{E_{eff}}$ (This is a simplified representation; actual formulas involve contact ratios and specific geometric factors.)

6.  **Check for Adequacy:**
    *   The gear design is adequate if $W_{t\_allowable\_b} \ge W_{t\_design}$ and $W_{t\_allowable\_c} \ge W_{t\_design}$ (or the actual load).
    *   If not adequate, adjust the module ($m$), face width ($b$), number of teeth ($T$), or material.

7.  **Refine Design:**
    *   Re-calculate pitch diameter, face width, etc., based on the chosen module and number of teeth.
    *   Check for other design considerations like interference, undercut, bending strength of the shaft, bearing loads, etc.

**Learning Outcome Alignment:**

*   **CO5:** Model suitable spur or helical gear drive based on the industrial requirements. This entire design procedure directly addresses this outcome by providing a systematic approach to designing a spur gear drive based on power, speed, and material requirements, with tooth loads being a critical factor.
*   **K3 (Knowledge Level):** The steps involve applying known formulas and design procedures.

**Example Design Problem:**

Design a spur gear drive to transmit 10 kW power at 1200 rpm. The pinion is to be made of hardened steel (allowable bending stress = 180 N/mm²) and the gear of cast iron (allowable bending stress = 60 N/mm²). The pinion rotates clockwise. A module of 5 mm is proposed. The gears are manufactured to a good commercial grade.

**Solution Outline:**

1.  **Given:**
    *   Power ($P$) = 10 kW
    *   Pinion speed ($N_1$) = 1200 rpm
    *   Pinion material: Hardened steel ($\sigma_{all\_b1}$ = 180 N/mm²)
    *   Gear material: Cast iron ($\sigma_{all\_b2}$ = 60 N/mm²)
    *   Module ($m$) = 5 mm
    *   Pressure angle ($\phi$) = 20° (assumed)
    *   Desired life: Assume normal life (e.g., $10^7$ cycles).

2.  **Torque on Pinion:**
    $T_1 = \frac{P \times 1000}{2 \pi N_1} = \frac{10 \times 1000}{2 \pi \times 1200} \approx 132.6 \text{ N-m} = 132.6 \times 10^3 \text{ N-mm}$

3.  **Select Number of Teeth ($T_1$ and $T_2$) and Pitch Diameter ($d_1$ and $d_2$):**
    *   To avoid interference and undercut, a minimum number of teeth for the pinion is typically required. For $\phi = 20^\circ$, minimum $T_1 \approx 17$ or 18. Let's assume $T_1 = 20$.
    *   Assume a gear ratio $i = N_1/N_2$. If output speed $N_2 = 400$ rpm, then $i = 1200/400 = 3$.
    *   $T_2 = i \times T_1 = 3 \times 20 = 60$.
    *   Pitch diameter of pinion ($d_1$) = $m \times T_1 = 5 \times 20 = 100 \text{ mm}$.
    *   Pitch diameter of gear ($d_2$) = $m \times T_2 = 5 \times 60 = 300 \text{ mm}$.

4.  **Calculate Tangential Load ($W_t$):**
    $W_t = \frac{2T_1}{d_1} = \frac{2 \times 132.6 \times 10^3 \text{ N-mm}}{100 \text{ mm}} = 2652 \text{ N}$

5.  **Calculate Pitch Line Velocity ($v$):**
    $v = \frac{\pi d_1 N_1}{60000} = \frac{\pi \times 100 \text{ mm} \times 1200 \text{ rpm}}{60000} = 6.28 \text{ m/s}$

6.  **Determine Modifying Factors and Design Load ($W_{t\_design}$):**
    *   **Velocity Factor ($K_v$):** Using Buckingham's formula or a simplified AGMA approach, $K_v = \frac{6.1 + v}{6.1} = \frac{6.1 + 6.28}{6.1} \approx 2.03$. (Note: This factor can be significant. More precise calculation might be needed.)
    *   **Application Factor ($K_s$):** For a 10 kW motor driving a machine with moderate shock, $K_s$ might be around 1.5 (refer to tables).
    *   **Load Distribution Factor ($K_m$):** For good commercial grade, $K_m$ could be around 1.25 (depending on manufacturing precision and face width).
    *   **Lewis Form Factor (y):** For $T_1=20$ and $\phi=20^\circ$, $y \approx 0.30$ (from tables).
    *   **Face width ($b$):** Let's initially assume $b = 10 \times m = 10 \times 5 = 50 \text{ mm}$.
    *   **Design Tangential Load ($W_{t\_design}$):**
        $W_{t\_design} = W_t \times K_v \times K_s \times K_m = 2652 \text{ N} \times 2.03 \times 1.5 \times 1.25 \approx 10063 \text{ N}$

7.  **Check Bending Strength:**
    *   **Pinion (driving):**
        $W_{t\_allowable\_b1} = \sigma_{all\_b1} \times b \times m \times y = 180 \text{ N/mm}^2 \times 50 \text{ mm} \times 5 \text{ mm} \times 0.30 = 13500 \text{ N}$
        Since $13500 \text{ N} > 10063 \text{ N}$, the pinion has sufficient bending strength.

    *   **Gear (driven):**
        $W_{t\_allowable\_b2} = \sigma_{all\_b2} \times b \times m \times y = 60 \text{ N/mm}^2 \times 50 \text{ mm} \times 5 \text{ mm} \times 0.30 = 4500 \text{ N}$
        Here, $4500 \text{ N} < 10063 \text{ N}$. The gear does NOT have sufficient bending strength.

8.  **Redesign:** Since the gear is weak, we need to increase its strength.
    *   **Option 1: Increase Face Width ($b$):**
        Required $b = \frac{W_{t\_design}}{\sigma_{all\_b2} \times m \times y} = \frac{10063 \text{ N}}{60 \text{ N/mm}^2 \times 5 \text{ mm} \times 0.30} \approx 111.8 \text{ mm}$.
        So, a face width of approximately 112 mm would be needed for the gear.

    *   **Option 2: Increase Module ($m$):** If face width is limited, increase module.
    *   **Option 3: Use a stronger material for the gear.**

**Practice Questions:**

1.  Define the three fundamental forces acting on a gear tooth and their significance.
2.  Explain the concept of dynamic load in gear teeth and the factors that influence it.
3.  What is the purpose of the velocity factor and the load distribution factor in gear design?
4.  A spur gear pair transmits 15 kW of power at a pitch line velocity of 5 m/s. Calculate the tangential force. If the pressure angle is 20°, calculate the radial force.
5.  A pinion made of steel has a face width of 60 mm and a module of 4 mm. The allowable bending stress for the tooth is 150 N/mm², and the Lewis form factor is 0.32. Calculate the allowable tangential load based on bending strength.
6.  Discuss the importance of considering wear loads in gear design.

---

## 5. Practical Considerations and Data Sources

**Data Books:**

*   **V. B. Bhandari - Machine Design Data Book:** Contains extensive tables for Lewis form factors, velocity factors, load distribution factors, material properties, and design data for gears.
*   **PSG Design Data:** Similar to Bhandari's data book, providing essential parameters and formulas for gear design.
*   **K. Mahadevan, K. Balaveera Reddy - Design Data Hand Book:** Another valuable resource for mechanical design data.

**Design Standards (e.g., AGMA, ISO):**

These standards provide comprehensive guidelines, formulas, and factors for gear design, ensuring interchangeability and reliability. They often have more detailed methods for calculating dynamic loads, load distribution, and wear.

**Factors Influencing Load Calculations:**

*   **Gear tooth geometry:** Module, pressure angle, addendum, dedendum, helix angle (for helical gears).
*   **Number of teeth:** Affects the Lewis form factor and contact ratio.
*   **Face width:** Wider teeth can distribute the load better but may be more prone to misalignment.
*   **Materials:** Hardness, tensile strength, endurance limit, modulus of elasticity.
*   **Manufacturing accuracy:** Precision of hobbing, shaping, and finishing processes.
*   **Mounting and alignment:** Rigidity of shafts and housing.
*   **Lubrication:** Type and quality of lubricant.
*   **Operating conditions:** Speed, load variations, temperature, presence of contaminants.

---

## Conclusion

Understanding and accurately calculating the various tooth loads is fundamental to designing robust and reliable spur gear drives. The design process integrates these load calculations with material properties and geometric considerations to ensure that the gear teeth can withstand the operational stresses for the intended service life without failure due to bending, wear, or fatigue. By utilizing established design procedures and referring to relevant data books and standards, engineers can effectively model and select suitable gear drives for diverse industrial applications.

---

## Answers to Practice Questions:

1.  **Fundamental Forces:**
    *   **Tangential Force ($W_t$):** Responsible for power transmission, acts tangentially to pitch circles.
    *   **Radial Force ($W_r$):** Acts radially inward, causing bearing loads and bending stress. $W_r = W_t \tan(\phi)$.
    *   **Axial Force ($W_a$):** Ideally zero for spur gears, but can arise from manufacturing errors.

2.  **Dynamic Load:** Dynamic load is the impact force occurring when gear teeth come into contact due to tooth profile inaccuracies, spacing errors, and elasticity. It increases with pitch line velocity. Buckingham's equation quantifies this load.

3.  **Purpose of Factors:**
    *   **Velocity Factor ($K_v$):** Accounts for the impact and vibration of teeth at higher operating speeds, effectively reducing the allowable stress or increasing the load.
    *   **Load Distribution Factor ($K_m$):** Accounts for inaccuracies in tooth spacing, profile, and mounting, which cause the load to be unevenly distributed across the face width.

4.  **Calculations for Q3:**
    *   Tangential Force ($W_t$): $W_t = \frac{P}{v_{pitch}} = \frac{15 \text{ kW} \times 1000 \text{ W/kW}}{5 \text{ m/s}} = 3000 \text{ N}$
    *   Radial Force ($W_r$): $W_r = W_t \tan(\phi) = 3000 \text{ N} \times \tan(20^\circ) \approx 3000 \text{ N} \times 0.364 = 1092 \text{ N}$

5.  **Allowable Load Calculation for Q4:**
    *   $W_{t\_allowable\_b} = \sigma_{all\_b} \times b \times m \times y = 150 \text{ N/mm}^2 \times 60 \text{ mm} \times 4 \text{ mm} \times 0.32 = 115200 \text{ N}$

6.  **Importance of Wear Load:** Wear is a surface failure mode that can reduce the accuracy and efficiency of the gear drive and eventually lead to tooth breakage. Designing for wear involves ensuring the surface contact stress is within the allowable limit for the material, preventing excessive material removal and maintaining the intended tooth profile. This is crucial for applications with abrasive environments or extended service life requirements.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
