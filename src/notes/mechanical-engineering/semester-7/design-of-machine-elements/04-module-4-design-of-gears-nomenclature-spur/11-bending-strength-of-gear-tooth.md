---
title: "bending strength of gear tooth"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 4: Design of gears: Nomenclature: spur"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d87"
status: "completed"
scrapedAt: "2026-05-20T18:11:15.943Z"
---
## DESIGN OF MACHINE ELEMENTS - MODULE 4: DESIGN OF GEARS - SPUR GEARS

### Topic: Bending Strength of Gear Tooth

**Course Outcomes Addressed:**
*   **CO5:** Model suitable spur or helical gear drive based on the industrial requirements. (Knowledge Level: K3)

**Learning Outcomes for this Topic:**
*   Understand the fundamental principles of bending stress in a gear tooth.
*   Identify the factors influencing the bending strength of a gear tooth.
*   Apply the Lewis equation for calculating bending stress.
*   Understand the concept of the form factor (y) and its significance.
*   Recognize the limitations of the Lewis equation and the need for modifications.
*   Understand the concept of service factor and its application in gear design.

---

### 1. Introduction to Bending Strength of Gear Teeth

Gear teeth are subjected to forces that cause bending stress, similar to a beam. When one gear tooth meshes with another, a tangential force is transmitted between them. This force, acting at the outer edge of the tooth, creates a bending moment at the root of the tooth. If this bending stress exceeds the material's allowable bending stress, the tooth can fracture due to bending.

**Key Concept:** The primary failure mode considered for gear teeth under load is **bending fatigue failure** at the tooth root.

**Reference:**
*   **Bhandari, V. B. (2020).** Chapter on Gears, particularly the section on bending stress.
*   **Norton, R. L. (2018).** Chapter on Gears, discussing tooth loading and stresses.
*   **Shigley, J. E. (2003).** Chapter on Spur Gears, covering tooth forces and bending stress calculations.

---

### 2. Forces Acting on a Gear Tooth

When two gear teeth mesh, the following forces are typically considered:

*   **Tangential Force (Wt):** This is the force that transmits power. It acts tangentially to the pitch circle and is responsible for the primary bending stress.
    *   $Wt = \frac{2 \times T}{D}$ where,
        *   $T$ = Torque transmitted (N-mm)
        *   $D$ = Pitch circle diameter (mm)
*   **Radial Force (Wr):** This force acts radially along the line of action and can cause tooth separation or crushing. It is generally less critical for bending strength.
*   **Axial Force (Wa):** For spur gears, this force is zero. For helical gears, it acts along the axis of rotation.

**Important Point:** For bending strength calculations, the **tangential force (Wt)** is the most significant.

---

### 3. Bending Stress Analysis - The Lewis Equation

The Lewis equation, developed by Wilfred Lewis in 1893, is the foundational equation for calculating the bending stress in a gear tooth. It treats the gear tooth as a cantilever beam fixed at the root.

**Assumptions of the Lewis Equation:**
1.  The gear tooth is treated as a cantilever beam.
2.  The tangential force ($Wt$) acts at the outermost point of the tooth.
3.  The stress distribution is uniform across the width of the tooth.
4.  The tooth is assumed to be a wedge-shaped beam.
5.  The effect of stress concentration at the root is neglected (in the basic form).

**Derivation Concept:**
Consider a tooth under the action of tangential force $Wt$ at the tip. The bending moment at the root of the tooth is:
$M = Wt \times h$
where $h$ is the height of the tooth from the root to the point of load application.

The bending stress ($\sigma$) is given by:
$\sigma = \frac{M \times y}{I}$
where:
*   $y$ is the distance from the neutral axis to the outermost fiber.
*   $I$ is the moment of inertia of the tooth cross-section at the root.

For a tooth with width $b$ and thickness $t$ at the root, the section modulus is approximated. The Lewis equation simplifies this by introducing a **form factor (y)** which accounts for the shape of the tooth and the location of the resultant force.

**The Lewis Equation:**
$\sigma = \frac{W_t}{b \times p_c} \times \frac{6}{t_{root}^2}$ (Simplified concept, not the direct Lewis equation)

The more commonly used form of the Lewis equation, which accounts for the form factor ($y$), is:

$\sigma = \frac{W_t}{b \times m} \times \frac{6}{y}$

Where:
*   $\sigma$ = Bending stress at the root of the tooth (N/mm² or MPa)
*   $W_t$ = Tangential force acting at the pitch circle (N)
*   $b$ = Face width of the gear (mm)
*   $m$ = Module of the gear (mm) = $p_c / \pi$, where $p_c$ is the circular pitch
*   $y$ = Lewis form factor (dimensionless)

**Important Point:** The Lewis equation directly relates the tangential force to the bending stress, incorporating a geometric factor ($y$) that accounts for the tooth shape and the position of the resultant force.

---

### 4. The Lewis Form Factor (y)

The Lewis form factor ($y$) is a crucial dimensionless factor that depends on the **tooth profile**, **pressure angle**, and **number of teeth**. It represents the geometric properties of the tooth's cross-section at the root and the location where the tangential force is assumed to act.

**Key Characteristics of the Lewis Form Factor:**
*   **Increases with the number of teeth:** For a constant module, as the number of teeth increases, the tooth becomes wider at the base relative to its height, leading to a lower bending stress for the same tangential force.
*   **Increases with pressure angle:** A larger pressure angle results in a thicker tooth base, thus increasing the form factor.
*   **It is tabular:** Values of $y$ are typically found in design data handbooks or derived from charts based on the number of teeth and pressure angle.

**Example of y values (Approximate, for standard 20-degree full depth involute teeth):**

| Number of Teeth (N) | y     |
| :------------------ | :---- |
| 12                  | 0.250 |
| 14                  | 0.275 |
| 17                  | 0.300 |
| 20                  | 0.325 |
| 25                  | 0.350 |
| 34                  | 0.375 |
| 50                  | 0.400 |
| 75                  | 0.425 |
| 100                 | 0.437 |
| 150                 | 0.450 |
| 200                 | 0.462 |
| Rack (∞)            | 0.481 |

**Reference:**
*   **Bhandari, V. B. (2020).** Contains tables and discussions on Lewis form factor.
*   **PSG Design Data (2022).** Provides extensive tables for Lewis form factor.
*   **Sharma, P. C., & Agarwal, D. K. (2017).** May have sections detailing the derivation or use of $y$.

---

### 5. Designing for Strength (Allowable Bending Stress)

The bending stress calculated using the Lewis equation must be less than or equal to the allowable bending stress of the gear material.

$\sigma \le \sigma_{allowable}$

The allowable bending stress ($\sigma_{allowable}$) is determined based on the material properties and the desired factor of safety. For fatigue considerations, it is often related to the **endurance limit** or **modified endurance limit** of the material.

$\sigma_{allowable} = \frac{\sigma_{e}'}{SF}$

Where:
*   $\sigma_{e}'$ = Modified endurance limit of the gear material.
*   $SF$ = Factor of safety.

**Important Consideration:** Gear teeth are subjected to dynamic loading, which can be more severe than static loading. This leads to the introduction of **dynamic factors** and **load-stress concentration factors** to refine the stress calculation.

---

### 6. Dynamic Load and Load-Stress Concentration Factors

The Lewis equation provides a static analysis. In reality, gear teeth are not perfectly formed, and the load application is not instantaneous or perfectly smooth. Dynamic effects introduce additional forces and stress concentrations.

*   **Dynamic Factor ($C_v$ or $K_v$):** Accounts for the effects of rotational speed and inaccuracies in tooth spacing and profile on the transmitted load. It reduces the effective tangential force.
    *   $W_{t, dynamic} = W_t \times C_v$
    *   Values of $C_v$ are typically less than 1 and are provided in tables based on pitch line velocity and accuracy grade.

*   **Load-Stress Concentration Factor ($K_{ss}$ or $Y_{z}$):** Accounts for stress concentration at the root fillet radius and variations in load distribution across the tooth width.
    *   $\sigma_{max} = \sigma \times K_{ss}$

**Modified Lewis Equation (incorporating dynamic and stress concentration factors):**

$\sigma = \frac{W_t \times C_v}{b \times m} \times \frac{6}{y} \times K_{ss}$

This is a more realistic representation of bending stress.

**Reference:**
*   **Bhandari, V. B. (2020).** Discusses dynamic load factors and stress concentration.
*   **Norton, R. L. (2018).** Often presents a unified equation including these factors.
*   **Shigley, J. E. (2003).** Details the AGMA (American Gear Manufacturers Association) approach which incorporates these factors.

---

### 7. Service Factor ($C_s$ or $K_f$)

The service factor is used to account for the nature of the load (uniform, moderate shock, or heavy shock) and the duration of service. It is a multiplier applied to the transmitted torque to represent the equivalent torque under the given service conditions.

*   **Uniform / Light Duty:** $C_s$ ranges from 1.0 to 1.25
*   **Moderate Shock:** $C_s$ ranges from 1.25 to 1.75
*   **Heavy Shock:** $C_s$ ranges from 1.75 to 2.50

The tangential force is then calculated using the rated power and the service factor:

$W_t = \frac{P \times K_s}{v}$

Where:
*   $P$ = Power transmitted (kW)
*   $K_s$ = Service factor
*   $v$ = Pitch line velocity (m/s)

**Alternatively, using torque:**

$W_t = \frac{2 \times T \times C_s}{D}$

Where $T$ is the rated torque.

**Important Point:** The service factor is a critical parameter that modifies the tangential force to reflect the real-world operating conditions and load severity.

---

### 8. Design Procedure for Bending Strength

The general procedure to design a gear tooth for bending strength involves:

1.  **Determine Input Parameters:** Power to be transmitted, speed of the driving gear, desired gear ratio, center distance (if known), material properties of gear and pinion, and operating conditions (load type).
2.  **Select Gear Material and Allowable Stress:** Choose a suitable material and determine its allowable bending stress, considering fatigue limits and factor of safety.
3.  **Estimate Number of Teeth and Pressure Angle:** Based on desired gear ratio and minimizing size, select an initial number of teeth for the pinion and a standard pressure angle (e.g., 20 degrees).
4.  **Determine Service Factor ($C_s$):** Select an appropriate service factor based on the load type (uniform, shock).
5.  **Calculate Tangential Force ($W_t$):** Calculate $W_t$ using the power, speed, pitch line velocity, and service factor.
6.  **Select Face Width ($b$):** Start with an initial estimation for face width, often a multiple of the module (e.g., $b = 10m$ to $15m$).
7.  **Determine Lewis Form Factor ($y$):** Obtain the value of $y$ from tables based on the number of teeth and pressure angle.
8.  **Calculate Module ($m$):** Using the modified Lewis equation and the calculated tangential force, rearrange to solve for the module:
    $m = \frac{W_t \times C_v}{b \times \sigma_{allowable}} \times \frac{6}{y} \times K_{ss}$
    (Note: $C_v$ and $K_{ss}$ might require an initial estimation of pitch line velocity and tooth geometry.)
9.  **Calculate Pitch Circle Diameter ($D$):** $D = m \times N$, where $N$ is the number of teeth.
10. **Calculate Pitch Line Velocity ($v$):** $v = \frac{\pi D N_{rpm}}{60 \times 1000}$ (in m/s)
11. **Refine Dynamic Factor ($C_v$) and Load-Stress Concentration ($K_{ss}$):** Based on the calculated pitch line velocity and initial tooth geometry, refine the values of $C_v$ and $K_{ss}$ using appropriate charts or empirical formulas (e.g., AGMA standards).
12. **Re-calculate Module:** Substitute the refined $C_v$ and $K_{ss}$ values back into the module calculation and iterate if necessary until the values stabilize.
13. **Check Other Design Criteria:** Verify the design for wear strength, beam strength under combined stresses, and other relevant factors.

**Example Scenario:** Design a spur gear for a machine tool drive transmitting 5 kW of power at 1000 rpm of the driving gear. The gear is to be made of medium carbon steel and operates under moderate shock conditions.

*(This example would require specific values for $C_v$, $K_{ss}$, and allowable stress based on the textbooks, which are not provided here. However, the steps illustrate the process.)*

---

### 9. Important Points to Remember

*   **Bending stress is a critical failure mode for gear teeth.**
*   **The Lewis equation is the foundational equation but needs modifications for dynamic loads and stress concentrations.**
*   **The Lewis form factor ($y$) is crucial and depends on the tooth geometry (number of teeth, pressure angle).**
*   **Service factor accounts for the severity of the load.**
*   **Dynamic factors ($C_v$) account for operating speed and manufacturing accuracy.**
*   **Load-stress concentration factors ($K_{ss}$) account for root fillet radius and load distribution.**
*   **The design process is iterative, especially for determining dynamic and stress concentration factors.**
*   **Always refer to design data handbooks for specific values of $y$, $C_v$, and $K_{ss}$.**

---

### 10. Practice Questions

1.  What is the primary mode of gear tooth failure that the Lewis equation addresses?
2.  Explain the significance of the Lewis form factor ($y$) in the bending strength calculation of a gear tooth. How does the number of teeth affect the Lewis form factor?
3.  What are the limitations of the basic Lewis equation? How are these limitations addressed in more advanced gear design calculations?
4.  Define the terms "service factor" and "dynamic factor" in the context of gear tooth bending strength.
5.  A spur gear is designed to transmit 10 kW of power at 1200 rpm. The gear has 30 teeth, a module of 5 mm, and a face width of 50 mm. If the allowable bending stress for the material is 150 MPa, and the Lewis form factor is 0.325, calculate the tangential force and the bending stress using the Lewis equation. Assume no dynamic or stress concentration factors for this basic calculation.
    *   **Answer:**
        *   Pitch circle diameter, $D = m \times N = 5 \times 30 = 150$ mm = 0.15 m
        *   Pitch line velocity, $v = \frac{\pi \times D \times N_{rpm}}{60 \times 1000} = \frac{\pi \times 150 \times 1200}{60 \times 1000} = 4.71$ m/s
        *   Tangential force, $W_t = \frac{P \times 1000}{v} = \frac{10 \times 1000}{4.71} = 2123.14$ N
        *   Bending stress, $\sigma = \frac{W_t}{b \times m} \times \frac{6}{y} = \frac{2123.14}{50 \times 5} \times \frac{6}{0.325} = 83.37 \times 18.46 \approx 1539.7$ MPa.
        *(Note: This stress is very high, indicating that the initial parameters in the question are not realistic or that other factors like wear strength would limit the design. This example is purely to demonstrate the calculation.)*

6.  A pinion made of steel has 20 teeth and operates with a mating gear with 60 teeth. The module is 4 mm, and the face width is 60 mm. The transmitted tangential force at the pitch circle is 3000 N. The Lewis form factor for the pinion tooth (with 20 teeth, 20-degree pressure angle) is approximately 0.325. Calculate the bending stress at the root of the pinion tooth using the Lewis equation.
    *   **Answer:**
        *   $\sigma = \frac{W_t}{b \times m} \times \frac{6}{y} = \frac{3000}{60 \times 4} \times \frac{6}{0.325} = 12.5 \times 18.46 \approx 230.75$ MPa

---
This concludes the notes on the bending strength of gear teeth for spur gears. Remember to consult the provided textbooks and reference materials for detailed tables, charts, and specific design procedures as per standards like AGMA.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
