---
title: "Stability of finite slopes - Toe failure, base failure, slip failure - Swedish Circle Method (Procedure only)"
subject: "FOUNDATION ENGINEERING"
module: "Module 1: Earth pressure "
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810e2d"
status: "completed"
scrapedAt: "2026-05-20T18:48:27.897Z"
---
# FOUNDATION ENGINEERING - Module 1: Earth Pressure

## Topic: Stability of Finite Slopes - Toe Failure, Base Failure, Slip Failure - Swedish Circle Method (Procedure Only)

---

### 1. Introduction to Slope Stability

Finite slopes are commonly encountered in civil engineering projects such as **embankments, cuttings, dams, and retaining walls**. Ensuring the **stability of these slopes** is crucial to prevent catastrophic failures that can lead to significant economic losses and loss of life. Slope stability analysis aims to determine the **factor of safety (FS)**, which is the ratio of the resisting forces to the driving forces. A factor of safety greater than 1 indicates stability, while a factor of safety less than 1 indicates instability.

**Key Concepts:**

*   **Slope:** The angle of inclination of the ground surface.
*   **Finite Slope:** A slope with defined boundaries, as opposed to an infinite slope where the conditions are assumed to be uniform and extend indefinitely.
*   **Factor of Safety (FS):** The ratio of the shear strength of the soil to the shear stress acting along a potential failure surface.
    $FS = \frac{\text{Resisting Forces}}{\text{Driving Forces}} = \frac{\text{Shear Strength}}{\text{Shear Stress}}$
*   **Failure Surface:** The hypothetical surface along which a slope is likely to fail.

---

### 2. Types of Slope Failures in Finite Slopes

In finite slopes, failures typically occur along curved surfaces. The most common types of failures are:

#### 2.1. Toe Failure

*   **Description:** This is the most common type of failure in finite slopes. The failure surface is a circular arc that emerges at the toe (the bottom of the slope). The failure essentially involves the sliding of a wedge of soil along this curved surface.
*   **Characteristics:**
    *   Failure surface passes through the toe of the slope.
    *   Often occurs in slopes with relatively uniform soil properties.
    *   Can be influenced by external loads at the crest of the slope or water pressure at the toe.
*   **Visual Representation (Conceptual):** Imagine a curved line starting from the toe and extending upwards and backwards into the slope, eventually reaching the ground surface at the crest or somewhere on the slope face.

#### 2.2. Base Failure (or Mid-Base Failure)

*   **Description:** In base failure, the failure surface is a circular arc that emerges at the **base of the slope**, usually below the toe. This type of failure is more common in slopes where the foundation soil is significantly weaker than the embankment or cutting soil.
*   **Characteristics:**
    *   Failure surface passes through the base of the slope, often at a considerable depth below the toe.
    *   Indicates that the foundation material is the critical factor in slope stability.
    *   Can occur in situations where a weaker layer underlies a stronger layer.
*   **Visual Representation (Conceptual):** A curved line originating from the base of the slope and extending upwards and backwards into the slope.

#### 2.3. Slip Failure (or Face Failure/Surface Failure)

*   **Description:** This type of failure involves a sliding mass along a curved surface that emerges on the **slope face** itself, above the toe. It is characterized by rotational movement of a block of soil.
*   **Characteristics:**
    *   Failure surface emerges on the slope face, typically above the toe.
    *   Often occurs in slopes with a steeper inclination or when there are significant external loads applied close to the crest.
    *   The failure mass can be a relatively thin slice of the slope.
*   **Visual Representation (Conceptual):** A curved line that originates from the ground surface at the crest and emerges on the slope face at some point between the crest and the toe.

**Important Point to Remember:** While these are distinct descriptions, in practice, a single analysis (like the Swedish Circle Method) often involves checking multiple potential circular failure surfaces, and the "worst-case scenario" (lowest FS) dictates the stability. The terminology primarily helps in understanding the location where the slip surface emerges.

---

### 3. Swedish Circle Method (Procedure Only)

The Swedish Circle Method, also known as the **Fellenius method** or **Ordinary Method of Slices**, is a widely used graphical and analytical technique for analyzing the stability of finite slopes. It assumes the failure surface to be a circular arc.

**Procedure:**

1.  **Identify the Geometry:** Accurately define the slope geometry, including the height of the slope ($H$), the angle of the slope ($\beta$), and the location of the toe.

2.  **Assume a Potential Failure Surface:** Assume a circular arc as the potential failure surface. This arc is defined by its **center (O)** and its **radius (r)**.

3.  **Divide the Sliding Mass into Vertical Slices:** Divide the soil mass lying above the assumed circular arc into a series of vertical slices. The number of slices depends on the desired accuracy.

4.  **Calculate the Weight of Each Slice ($W_i$):**
    *   Determine the area of each slice.
    *   Multiply the area by the unit weight of the soil ($\gamma$) to get the weight of each slice. If the slope has layered soils, use the respective unit weights for each layer.
    *   $W_i = (\text{Area of slice}_i) \times \gamma_i$

5.  **Determine the Forces Acting on Each Slice:** For each slice $i$:
    *   **Weight ($W_i$):** Acts vertically downwards through the centroid of the slice.
    *   **Normal Force ($N_i$):** Acts perpendicular to the assumed circular arc at its base.
    *   **Shear Force ($T_i$):** Acts tangential to the assumed circular arc at its base, representing the resisting shear force.
    *   **Cohesion Force ($c_i \cdot l_i$):** The cohesive force acting along the base of the slice, where $c_i$ is the cohesion of the soil in the slice and $l_i$ is the length of the arc segment at the base of the slice.
    *   **Friction Force ($N_i \cdot \tan \phi_i$):** The frictional resistance acting along the base of the slice, where $\phi_i$ is the angle of internal friction of the soil in the slice.

6.  **Calculate the Total Resisting Moment about the Center of the Circle:**
    The resisting moment is generated by the cohesive forces and the frictional forces acting along the base of each slice.
    *   Resisting Moment ($M_R$) for slice $i$: $(c_i \cdot l_i + N_i \cdot \tan \phi_i) \cdot r$
    *   Total Resisting Moment ($M_R$) = $\sum_{i=1}^{n} (c_i \cdot l_i + N_i \cdot \tan \phi_i) \cdot r$
    Where $n$ is the total number of slices.

7.  **Calculate the Total Driving Moment about the Center of the Circle:**
    The driving moment is generated by the weight of each slice, which acts at a distance from the center of rotation.
    *   Driving Moment ($M_D$) for slice $i$: $W_i \cdot x_i$, where $x_i$ is the horizontal distance of the centroid of slice $i$ from the center of rotation ($O$).
    *   Total Driving Moment ($M_D$) = $\sum_{i=1}^{n} W_i \cdot x_i$

8.  **Calculate the Factor of Safety (FS):**
    The factor of safety for the assumed circular arc is the ratio of the total resisting moment to the total driving moment.
    *   $FS = \frac{\text{Total Resisting Moment}}{\text{Total Driving Moment}} = \frac{\sum_{i=1}^{n} (c_i \cdot l_i + N_i \cdot \tan \phi_i) \cdot r}{\sum_{i=1}^{n} W_i \cdot x_i}$

    **Simplified Form (for cohesive-frictional soils, $\phi_u$ and $c_u$ for undrained conditions):**
    In simplified analyses, especially for undrained conditions where effective stress parameters are not directly used in this method, the cohesion and friction components are often considered together. The shear strength ($\tau_f$) of the soil is given by $\tau_f = c + \sigma_n \tan \phi$, where $\sigma_n$ is the normal stress. However, in the Swedish circle method, it's often presented as:
    $FS = \frac{\sum (\text{Shear Strength along arc segment}_i)}{\sum (\text{Shear Stress along arc segment}_i)}$
    The shear strength for each slice is $c_i l_i + N_i \tan \phi_i$.

    **Crucial Simplification in the Ordinary Method of Slices:** The normal forces ($N_i$) acting on the base of each slice are **not explicitly calculated** in the initial formulation of the Swedish Circle Method. Instead, the method relies on the assumption that the tangential component of the weight of each slice is the primary driving force, and the resisting force is the shear strength distributed along the arc.

    **Revised calculation of FS for the Ordinary Method of Slices:**
    $FS = \frac{\sum (c_i l_i + N_i \tan \phi_i)}{\sum T_i}$

    Where:
    *   $c_i$ = cohesion of the soil in slice $i$
    *   $l_i$ = length of the arc segment at the base of slice $i$
    *   $N_i$ = normal force on the base of slice $i$ (This is the complicated part, but the "ordinary" method simplifies by *ignoring the interslice forces* and focusing on the moments)
    *   $\phi_i$ = angle of internal friction of the soil in slice $i$
    *   $T_i$ = tangential component of the weight of slice $i$ acting along the arc.

    **The most common formulation in textbooks for the Ordinary Method of Slices (ignoring interslice forces) focuses on moments:**
    $FS = \frac{\sum (\text{resisting moment from cohesion}_i + \text{resisting moment from friction}_i)}{\sum (\text{driving moment from weight}_i)}$

    Where:
    *   Resisting moment from cohesion$_i$ = $c_i \cdot l_i \cdot r$
    *   Resisting moment from friction$_i$ = $N_i \cdot \tan \phi_i \cdot r$
    *   Driving moment from weight$_i$ = $W_i \cdot x_i$

    **A more direct interpretation of the Ordinary Method of Slices, as often taught for simplicity:**
    The stability is assessed by considering the ratio of the sum of shear strengths along the arc to the sum of shear stresses. The shear stress is often approximated as the tangential component of the weight of the slice.

    $FS = \frac{\sum (\text{Shear Strength})_i}{\sum (\text{Shear Stress})_i}$

    Where for slice $i$:
    *   Shear Strength$_i = c_i l_i + N_i \tan \phi_i$
    *   Shear Stress$_i = \text{Tangential component of } W_i \text{ along the arc}$

    **The key simplification is that the lateral forces between slices are neglected.**

    **Let's stick to the moment equilibrium approach as it's more illustrative of the Swedish Circle Method's concept before more advanced methods:**

    **Revised Step 6 & 7 and re-calculate FS:**

    6.  **Calculate the Resisting Moment ($M_R$) for each slice:**
        *   Normal force ($N_i$) acting on the base of the slice (perpendicular to the arc) needs to be determined. For the Ordinary Method of Slices, the normal force is approximated by the component of the slice weight perpendicular to the arc: $N_i \approx W_i \cos \alpha_i$, where $\alpha_i$ is the angle the arc segment makes with the horizontal.
        *   Shear resistance ($S_i$) for slice $i$: $S_i = c_i l_i + N_i \tan \phi_i = c_i l_i + (W_i \cos \alpha_i) \tan \phi_i$
        *   Resisting Moment ($M_{R,i}$) for slice $i$: $S_i \cdot r = (c_i l_i + W_i \cos \alpha_i \tan \phi_i) \cdot r$
        *   Total Resisting Moment ($M_R$) = $\sum_{i=1}^{n} (c_i l_i + W_i \cos \alpha_i \tan \phi_i) \cdot r$

    7.  **Calculate the Driving Moment ($M_D$) for each slice:**
        *   Driving Moment ($M_{D,i}$) for slice $i$: $W_i \cdot x_i$, where $x_i$ is the horizontal distance from the center of rotation to the centroid of the slice.
        *   Total Driving Moment ($M_D$) = $\sum_{i=1}^{n} W_i \cdot x_i$

    8.  **Calculate the Factor of Safety (FS):**
        *   $FS = \frac{\text{Total Resisting Moment}}{\text{Total Driving Moment}} = \frac{\sum_{i=1}^{n} (c_i l_i + W_i \cos \alpha_i \tan \phi_i) \cdot r}{\sum_{i=1}^{n} W_i \cdot x_i}$

9.  **Repeat for Different Potential Failure Surfaces:** Since the actual failure surface is unknown, the procedure is repeated by assuming different circular arcs. The center of the circle is typically chosen from a zone located a certain distance above the crest and within a horizontal range from the slope.

10. **Determine the Critical Failure Surface:** The circular arc that yields the **lowest Factor of Safety** is considered the critical failure surface, and this lowest FS is the stability number for the slope under the given conditions.

**Graphical Method:**
The Swedish Circle Method can also be performed graphically. This involves:
*   Drawing the slope profile to scale.
*   Assuming a center of rotation and drawing the circular arc.
*   Dividing the mass into slices and determining their weights graphically.
*   Resolving forces graphically for each slice.
*   Summing moments graphically.

**Important Note on Simplified Swedish Circle Method:**
Many practical applications and introductory texts refer to a simplified version where the cohesion and friction components are directly related to the total resisting force and the total driving force, often by considering the average shear strength along the slip surface. However, the moment equilibrium approach described above is more fundamentally representative of the method's mechanics.

---

### 4. Practice Questions and Exercises

**Question 1:**

A homogeneous embankment has a height of 10m and a slope angle of 45 degrees. The soil has the following properties:
*   Cohesion ($c$) = 15 kPa
*   Angle of internal friction ($\phi$) = 20 degrees
*   Unit weight ($\gamma$) = 18 kN/m³

If a potential circular failure surface is analyzed using the Swedish Circle Method, and for a particular slice:
*   Weight ($W_i$) = 50 kN
*   Length of arc segment ($l_i$) = 2.5 m
*   Normal force on arc segment ($N_i$) = 40 kN
*   Angle of arc segment with horizontal ($\alpha_i$) = 30 degrees
*   Horizontal distance from centroid to center of rotation ($x_i$) = 3.0 m
*   Radius of the circle ($r$) = 7.0 m

Calculate the Factor of Safety for this specific slice, considering only the contribution of this slice to the total moments. (Note: This is a simplified calculation for one slice. A full analysis would involve summing contributions from all slices and potentially multiple slip surfaces).

**Answer to Question 1:**

First, calculate the resisting force for the slice:
Shear resistance ($S_i$) = $c_i l_i + N_i \tan \phi_i$
$S_i = (15 \text{ kPa}) \cdot (2.5 \text{ m}) + (40 \text{ kN}) \cdot \tan(20^\circ)$
$S_i = 37.5 \text{ kN} + 40 \cdot 0.364 = 37.5 + 14.56 = 52.06 \text{ kN}$

Now, calculate the resisting moment and driving moment for this slice:
Resisting Moment ($M_{R,i}$) = $S_i \cdot r = 52.06 \text{ kN} \cdot 7.0 \text{ m} = 364.42 \text{ kNm}$
Driving Moment ($M_{D,i}$) = $W_i \cdot x_i = 50 \text{ kN} \cdot 3.0 \text{ m} = 150 \text{ kNm}$

Factor of Safety (for this slice's contribution) = $\frac{M_{R,i}}{M_{D,i}} = \frac{364.42 \text{ kNm}}{150 \text{ kNm}} \approx 2.43$

**Question 2:**

Describe the key difference between a "toe failure" and a "base failure" in finite slopes.

**Answer to Question 2:**

The key difference lies in the location where the failure surface emerges from the slope.
*   **Toe Failure:** The failure surface emerges at the **toe** (the bottom edge) of the slope.
*   **Base Failure:** The failure surface emerges at the **base** of the slope, typically below the toe, indicating that the foundation soil is the controlling factor.

**Question 3:**

In the Swedish Circle Method, why is it necessary to check multiple potential failure surfaces?

**Answer to Question 3:**

The exact location and shape of the critical failure surface are not known beforehand. By analyzing multiple circular arcs, engineers aim to find the arc that results in the **lowest Factor of Safety**. This lowest FS represents the most critical condition and indicates the likelihood of failure for the slope.

---

### 5. Important Points to Remember

*   **Factor of Safety (FS):** A critical parameter in slope stability, indicating the margin of safety against failure. $FS > 1.0$ for stability.
*   **Swedish Circle Method:** Assumes a **circular arc failure surface**.
*   **Moment Equilibrium:** The method is fundamentally based on balancing the **resisting moments** (from cohesion and friction) against the **driving moments** (from the weight of the soil mass).
*   **Simplification:** The "Ordinary Method of Slices" (a common implementation of the Swedish Circle Method) simplifies the analysis by **neglecting interslice forces**.
*   **Critical Failure Surface:** The circular arc that yields the **minimum Factor of Safety** is the critical one.
*   **Failure Types:** Understanding **toe failure, base failure, and slip failure** helps in conceptualizing potential failure mechanisms based on the geometry and soil conditions.
*   **Soil Properties:** Accurate determination of **cohesion ($c$), angle of internal friction ($\phi$), and unit weight ($\gamma$)** is paramount for reliable analysis.
*   **Water Table:** The presence and level of the water table significantly affect pore water pressure and effective stresses, thereby influencing slope stability. The Swedish Circle Method can be adapted to account for pore water pressures.

---
