---
title: "Design of gears: Nomenclature: spur"
subject: "DESIGN OF MACHINE ELEMENTS"
module: "Module 4: Design of gears: Nomenclature: spur"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463d7d"
status: "completed"
scrapedAt: "2026-05-20T18:11:08.973Z"
---
# Module 4: Design of Gears - Nomenclature: Spur Gears

## Introduction to Gears and Gear Drives

Gears are fundamental machine elements used to transmit rotational motion and power between shafts. They are essentially toothed wheels that mesh with other toothed wheels (gears) or with a rack (a linear toothed element) to achieve this transmission. Gear drives offer several advantages over other transmission methods like belt drives or chain drives, including:

*   **High efficiency:** Typically 98-99% for single-stage gear pairs.
*   **Positive drive:** No slip occurs, ensuring accurate speed ratios.
*   **Compactness:** Can transmit high power in a small space.
*   **Durability:** When properly designed and lubricated, gears can have a long service life.
*   **Versatility:** Can change speed, torque, direction of rotation, and axis of rotation.

This module focuses on **spur gears**, which are the most common type of gear. Spur gears have teeth that are parallel to the axis of rotation and are used to transmit motion between parallel shafts.

---

## Learning Outcomes Covered:

*   Understand the basic principles of gear operation.
*   Identify and define the key terms and nomenclature associated with spur gears.
*   Relate the geometrical parameters of spur gears to their functionality.
*   Appreciate the importance of proper gear terminology for design calculations and communication.

---

## Course Outcomes Alignment:

This topic directly contributes to **CO5: Model suitable spur or helical gear drive based on the industrial requirements.** Understanding the nomenclature is the foundational step in selecting and designing any gear drive.

---

## 1. Basic Principles of Gear Operation

*   **Meshing:** Gears work on the principle of rolling contact with positive engagement of teeth. When two gears mesh, their teeth interlock, and the rotation of one gear drives the rotation of the other.
*   **Involute Profile:** The most common tooth profile used in modern gears is the **involute profile**. This profile ensures that the velocity ratio between the gears remains constant throughout the period of contact, regardless of slight variations in the center distance between the shafts.

---

## 2. Nomenclature of Spur Gears

Understanding the terminology associated with spur gears is crucial for accurate design, specification, and communication. Let's define the key terms:

### 2.1 Key Terminology and Definitions

*   **Addendum (a):** The radial distance from the pitch circle to the top of the tooth.
    *   *Formula:* $a = m \times m$ (where $m$ is the module)
*   **Dedendum (b):** The radial distance from the pitch circle to the bottom of the tooth space.
    *   *Formula:* $b = m \times (1.25 \times m)$ (for standard gears)
*   **Circular Pitch ($p_c$):** The distance along the pitch circle from a point on one tooth to the corresponding point on the next tooth. It is the effective pitch.
    *   *Formula:* $p_c = \pi \times m$
*   **Module (m):** A fundamental parameter that defines the size of a gear. It is the ratio of the pitch diameter to the number of teeth.
    *   *Formula:* $m = \frac{\text{Pitch Diameter (D)}}{\text{Number of Teeth (T)}}$
    *   *Significance:* Gears of the same module can mesh with each other. It is usually specified in millimeters. Higher module means a larger gear.
*   **Diametral Pitch ($P_d$):** Another parameter defining gear size, commonly used in the US. It is the ratio of the number of teeth to the pitch diameter in inches.
    *   *Formula:* $P_d = \frac{\text{Number of Teeth (T)}}{\text{Pitch Diameter (D in inches)}}$
    *   *Relationship between Module and Diametral Pitch:* $P_d = \frac{25.4}{m}$ (when $m$ is in mm and $P_d$ is in teeth/inch)
*   **Addendum Circle (Outer Circle):** The circle passing through the tips of the teeth. Its diameter is the outside diameter of the gear.
    *   *Outside Diameter ($D_o$):* $D_o = D + 2a = D + 2m$
*   **Dedendum Circle (Root Circle):** The circle passing through the bottom of the tooth spaces.
    *   *Root Diameter ($D_r$):* $D_r = D - 2b = D - 2 \times 1.25m = D - 2.5m$
*   **Pitch Circle:** An imaginary circle on the gear that, if the gear were rolling without slipping on another pitch circle, would represent the point of contact. The pitch circle diameter is used to determine the gear ratio.
    *   *Pitch Diameter (D):* $D = m \times T$
*   **Face Width (F):** The width of the gear tooth along the axis of rotation.
*   **Tooth Thickness:** The thickness of the tooth measured along the pitch circle.
*   **Tooth Space:** The distance between adjacent teeth measured along the pitch circle.
*   **Clearance (c):** The radial distance between the tip of one gear's tooth and the root of the mating gear's tooth space when the gears are meshed.
    *   *Formula:* $c = b - a = 1.25m - m = 0.25m$ (for standard gears)
*   **Backlash:** The amount by which the width of a tooth space exceeds the thickness of the mating tooth, measured along the pitch circle. It is essential to prevent jamming and allow for lubrication and thermal expansion.
*   **Working Depth:** The sum of the addendum of the two meshing teeth.
    *   *Working Depth:* $a_1 + a_2$ (for standard gears, $a_1 = a_2 = m$, so working depth = $2m$)
*   **Whole Depth:** The sum of the addendum and dedendum of a tooth.
    *   *Whole Depth:* $a + b = m + 1.25m = 2.25m$ (for standard gears)
*   **Fillet Radius:** The radius at the root of the tooth, connecting the tooth flank to the root circle. This is important for stress concentration.
*   **Pressure Angle ($\phi$):** The angle between the line of action and the common tangent to the pitch circles at the pitch point. Common pressure angles are 14.5° and 20°. This angle influences the force distribution on the teeth.
*   **Line of Action:** The straight line that represents the path of the contact point between two meshing teeth during the entire period of contact. For involute gears, the line of action is tangent to the base circles of both gears.
*   **Base Circle:** The circle from which the involute tooth profile is generated. The diameter of the base circle ($D_b$) is related to the pitch diameter ($D$) and pressure angle ($\phi$) by:
    *   *Formula:* $D_b = D \cos \phi$
*   **Pitch Point:** The point on the pitch circle where two meshing gears are tangent.
*   **Pinion:** The smaller of the two meshing gears.
*   **Gear (Wheel):** The larger of the two meshing gears.
*   **Rack:** A gear with an infinite pitch radius, essentially a straight toothed member.

---

### 2.2 Visual Representation and Key Dimensions

*(Imagine a diagram of a spur gear here with all the labels mentioned above pointing to the respective parts. Since I cannot generate images, please refer to standard machine design textbooks like Bhandari or Norton for visual aids.)*

**Key dimensions and their relationships:**

*   **Pitch Diameter (D):** $D = m \times T$
*   **Outside Diameter ($D_o$):** $D_o = D + 2m = m(T + 2)$
*   **Root Diameter ($D_r$):** $D_r = D - 2.5m = m(T - 2.5)$
*   **Base Diameter ($D_b$):** $D_b = D \cos \phi = m T \cos \phi$
*   **Circular Pitch ($p_c$):** $p_c = \pi m$
*   **Addendum ($a$):** $a = m$
*   **Dedendum ($b$):** $b = 1.25m$
*   **Clearance ($c$):** $c = 0.25m$

---

## 3. Importance of Nomenclature in Design

*   **Accurate Calculation:** Precise definitions of terms are essential for calculating forces, stresses, bending moments, and contact stresses on gear teeth.
*   **Standardization:** Using standard nomenclature ensures that designs are interpretable by manufacturers, designers, and engineers globally.
*   **Gear Ratio Determination:** The pitch diameters and number of teeth directly determine the gear ratio, which is fundamental to speed and torque transmission.
*   **Interchangeability:** Understanding module and pressure angle ensures that gears from different manufacturers can mesh correctly.
*   **Material Selection and Heat Treatment:** Tooth geometry influences wear patterns and stress concentrations, which in turn guide material selection and heat treatment processes.
*   **Lubrication and Cooling:** Backlash and clearances are critical for proper lubrication and to prevent overheating.

---

## 4. Design Considerations Based on Nomenclature

*   **Module (m) Selection:** The module is the primary determinant of gear size and strength. It is selected based on the power to be transmitted, the speed of rotation, and the desired life of the gear drive. Higher power and speed generally require a larger module.
*   **Number of Teeth (T):** The number of teeth on a pinion and gear affects the gear ratio, the minimum number of teeth for a pinion to avoid undercutting (explained in later topics), and the smoothness of operation.
*   **Pressure Angle ($\phi$):**
    *   A higher pressure angle (e.g., 20°) generally results in stronger teeth (greater thickness at the root) and a smaller pinion can be used without undercutting.
    *   A lower pressure angle (e.g., 14.5°) results in lower bearing loads due to a more radial force component.
*   **Face Width (F):** The face width is increased to transmit more power and to reduce the load per unit width of the tooth. It also influences the stability of the mesh.

---

## Example Problem

**Problem:** A spur gear has a module of 5 mm and 20 teeth. Determine:
a) Pitch diameter
b) Outside diameter
c) Root diameter
d) Circular pitch
e) Addendum
f) Dedendum

**Solution:**

Given:
*   Module, $m = 5$ mm
*   Number of teeth, $T = 20$

Assume a standard gear with a pressure angle of 20° and addendum = $m$, dedendum = $1.25m$.

a) **Pitch diameter (D):**
   $D = m \times T$
   $D = 5 \text{ mm} \times 20$
   $D = 100$ mm

b) **Outside diameter ($D_o$):**
   $D_o = D + 2m$
   $D_o = 100 \text{ mm} + 2 \times 5 \text{ mm}$
   $D_o = 110$ mm

c) **Root diameter ($D_r$):**
   $D_r = D - 2.5m$
   $D_r = 100 \text{ mm} - 2.5 \times 5 \text{ mm}$
   $D_r = 100 \text{ mm} - 12.5 \text{ mm}$
   $D_r = 87.5$ mm

d) **Circular pitch ($p_c$):**
   $p_c = \pi \times m$
   $p_c = \pi \times 5 \text{ mm}$
   $p_c \approx 15.71$ mm

e) **Addendum (a):**
   $a = m$
   $a = 5$ mm

f) **Dedendum (b):**
   $b = 1.25 \times m$
   $b = 1.25 \times 5 \text{ mm}$
   $b = 6.25$ mm

---

## Practice Questions

1.  Define the following terms for a spur gear: Module, Circular Pitch, Addendum, Dedendum, and Pressure Angle.
2.  What is the significance of the module in gear design?
3.  Calculate the pitch diameter, outside diameter, and root diameter of a spur gear with 30 teeth and a module of 4 mm.
4.  If a spur gear has a pitch diameter of 120 mm and 24 teeth, what is its module?
5.  Explain the relationship between the base circle diameter, pitch circle diameter, and pressure angle for an involute gear.
6.  Why is backlash necessary in gear drives?

---

## Answers to Practice Questions

1.  **Module (m):** The ratio of the pitch diameter to the number of teeth ($m = D/T$). It defines the size of the gear and is a key parameter for meshing.
    **Circular Pitch ($p_c$):** The distance along the pitch circle from a point on one tooth to the corresponding point on the next tooth ($p_c = \pi m$).
    **Addendum (a):** The radial distance from the pitch circle to the top of the tooth ($a = m$ for standard gears).
    **Dedendum (b):** The radial distance from the pitch circle to the bottom of the tooth space ($b = 1.25m$ for standard gears).
    **Pressure Angle ($\phi$):** The angle between the line of action and the common tangent to the pitch circles at the pitch point.

2.  The module is the most important parameter defining the size and tooth proportions of a gear. Gears with the same module can mesh together. A larger module indicates a larger gear and a stronger tooth.

3.  Given: $T = 30$, $m = 4$ mm
    *   Pitch diameter ($D$) = $m \times T = 4 \times 30 = 120$ mm
    *   Outside diameter ($D_o$) = $D + 2m = 120 + 2(4) = 120 + 8 = 128$ mm
    *   Root diameter ($D_r$) = $D - 2.5m = 120 - 2.5(4) = 120 - 10 = 110$ mm

4.  Given: $D = 120$ mm, $T = 24$
    *   Module ($m$) = $D/T = 120 \text{ mm} / 24 = 5$ mm

5.  The relationship is given by $D_b = D \cos \phi$. This means the base circle diameter is always smaller than the pitch circle diameter (unless $\phi = 0$, which is not practical for gears), and the base circle is the generating circle for the involute tooth profile.

6.  Backlash is necessary to:
    *   Prevent jamming of teeth due to manufacturing inaccuracies.
    *   Allow for thermal expansion of gear teeth during operation.
    *   Provide space for lubrication to reach the meshing surfaces.

---

## Important Points to Remember

*   **Module (m)** is the primary parameter that determines gear size.
*   For standard gears: **Addendum (a) = m**, **Dedendum (b) = 1.25m**, **Clearance (c) = 0.25m**.
*   The **pitch circle** is where the ideal rolling contact occurs and determines the gear ratio.
*   The **pressure angle** affects tooth strength and bearing loads.
*   Understanding these terms is crucial for any further calculations and design of gear drives.
*   Always refer to the Design Data Handbooks (PSG, Bhandari) for standard values and formulas.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


## References

*   **Design of Machine Elements by V B Bhandari (McGraw Hill Education (India), 5th Edition, 2020):** Chapter on Gears (Nomenclature and Basics).
*   **Machine Design – An Integrated Approach by R. L. Norton (Pearson Education, 5th Edition, 2018):** Chapter on Gears (Gear Terminology and Geometry).
*   **Design Data Hand Book by K. Mahadevan, K. Balaveera Reddy (CBS Publishers & Distributors, 4th Edition, 2019):** Relevant sections on gear geometry and formulas.
*   **PSG Design Data by PSG Tech (DPV Printers, Coimbatore, 2022):** Useful for standard gear proportions and formulas.