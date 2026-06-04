---
title: "Prestressed beam – cast in situ slab composite Sections- Analysis"
subject: "DESIGN OF PRESTRESSED CONCRETE"
module: "Module 4: Different anchorage system and design of end block by latest IS codes."
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810fe7"
status: "completed"
scrapedAt: "2026-05-20T18:47:57.058Z"
---
# DESIGN OF PRESTRESSED CONCRETE

## Module 4: Different Anchorage System and Design of End Block by Latest IS Codes

### Topic: Prestressed Beam – Cast-in-situ Slab Composite Sections – Analysis

---

### Learning Outcomes:

Upon successful completion of this topic, students will be able to:

*   Understand the concept of composite action in prestressed concrete structures.
*   Analyze the behavior of prestressed beams with cast-in-situ slabs under various loading conditions.
*   Determine the stresses at critical sections of composite members.
*   Calculate the ultimate strength of composite sections.
*   Understand the advantages and disadvantages of composite construction.
*   Apply relevant IS codes for the analysis and design of prestressed composite sections.

---

### 1. Introduction to Prestressed Composite Sections

Composite construction involves combining two or more structural materials (typically concrete and steel, or different grades of concrete) to act as a single unit, leveraging the best properties of each material. In prestressed concrete, a common application is the combination of a **pre-prestressed beam** (often pretensioned or post-tensioned) with a **cast-in-situ reinforced concrete slab**.

**Key Concepts:**

*   **Composite Action:** The synergistic behavior where the constituent materials work together to resist loads, sharing the stresses more effectively than if they were acting independently. This is achieved through:
    *   **Shear Connectors:** Devices (like studs, stirrups, or keyways) that effectively transfer shear forces between the pre-prestressed beam and the slab, ensuring they act as a single unit.
    *   **Interlocking:** Mechanical keying at the interface between the beam and slab can also contribute to composite action.
*   **Pre-prestressed Beam:** This is typically an I-beam, T-beam, or box beam that has been prestressed using high-strength steel tendons.
*   **Cast-in-situ Slab:** A reinforced concrete slab cast on top of the pre-prestressed beam.

**Advantages of Composite Construction:**

*   **Increased Load Carrying Capacity:** The slab contributes to the overall section's stiffness and strength, allowing for larger spans or higher loads.
*   **Improved Stiffness:** The combined section is stiffer than the prestressed beam alone, leading to reduced deflections.
*   **Efficient Material Utilization:** The slab can be made of plain or lightly reinforced concrete, as the primary bending and prestressing forces are handled by the pre-prestressed beam.
*   **Cost-Effectiveness:** Can reduce the amount of prestressing steel and concrete required compared to non-composite designs for the same span and load.
*   **Better Fire Resistance:** The slab can provide additional protection to the prestressed tendons.

**Disadvantages of Composite Construction:**

*   **Construction Complexity:** Requires careful detailing and execution to ensure proper shear connection and bonding.
*   **Creep and Shrinkage Effects:** Differential creep and shrinkage between the precast beam and cast-in-situ slab need to be accounted for in the analysis.
*   **Potential for Cracking:** Improper shear connection or load transfer can lead to cracking at the interface.

---

### 2. Types of Composite Sections

*   **Pretensioned Beam-Slab Composite:** The prestressing tendons are tensioned before concrete hardens in the precast beam.
*   **Post-tensioned Beam-Slab Composite:** The prestressing tendons are tensioned after the concrete hardens in the precast beam, usually after the slab has also cured.

---

### 3. Analysis of Prestressed Beam – Cast-in-situ Slab Composite Sections

The analysis typically involves two stages:

**Stage I: Analysis of the Precast Prestressed Beam Acting Alone (before the slab has attained significant strength or is acting as a non-composite element).**

This stage is relevant during the initial curing of the slab, or if the shear connectors are not yet effective. The analysis is similar to that of a standard prestressed concrete beam.

**Stage II: Analysis of the Composite Section (when the slab has cured and shear connectors are effective).**

This is the primary stage for considering the behavior of the composite section under service loads. The slab acts as a flange to the web of the prestressed beam.

**Key Considerations for Stage II Analysis:**

*   **Load Transfer:** All external loads and the prestressing force are distributed between the precast beam and the slab.
*   **Shear Transfer:** Shear forces are transferred from the slab to the beam through shear connectors.
*   **Material Properties:** The elastic properties (modulus of elasticity) of the precast concrete and the cast-in-situ concrete are used.
*   **Section Properties:** The transformed section properties (moment of inertia, section modulus) are calculated considering both materials.

---

### 4. Elastic Analysis of Composite Sections

The elastic analysis focuses on determining the stresses induced in both the precast beam and the slab under service loads, considering the prestressing force.

**4.1. Transformed Section Method:**

This is the most common method for elastic analysis. The concrete slab is transformed into an equivalent area of precast beam material by multiplying its width by the modular ratio ($m = E_p / E_s$, where $E_p$ is the modulus of elasticity of precast concrete and $E_s$ is the modulus of elasticity of cast-in-situ concrete).

**Steps for Elastic Analysis:**

1.  **Determine Section Properties of the Precast Beam:**
    *   Area ($A_p$)
    *   Moment of Inertia ($I_p$)
    *   Section Moduli ($Z_{pt}, Z_{pb}$) for top and bottom fibers, respectively.
    *   Centroidal axis location.

2.  **Determine Section Properties of the Cast-in-situ Slab:**
    *   Area ($A_s$)
    *   Moment of Inertia ($I_s$)
    *   Section Moduli ($Z_{st}, Z_{sb}$) for top and bottom fibers of the slab.
    *   Width of the slab ($b_f$).

3.  **Calculate Modular Ratio ($m$):**
    *   $m = E_p / E_s$. Where $E_p$ is the modulus of elasticity of precast concrete and $E_s$ is the modulus of elasticity of cast-in-situ concrete.
    *   **IS 1343:2012 Clause 25.3.2:** "The modular ratio $m$ shall be taken as the ratio of the modulus of elasticity of concrete in the pre-tensioned member to the modulus of elasticity of concrete in the cast-in-situ slab."
    *   $E_p = 5700 \sqrt{f_{ck,p}}$ and $E_s = 5700 \sqrt{f_{ck,s}}$ where $f_{ck,p}$ and $f_{ck,s}$ are the characteristic compressive strengths of concrete for precast and cast-in-situ elements respectively.

4.  **Transform the Slab into an Equivalent Precast Beam Section:**
    *   **Transformed Area of Slab ($A_{st}$):** $A_{st} = m \times A_s = m \times b_f \times t_s$ (where $t_s$ is the thickness of the slab).
    *   **Effective Flange Width ($b_{eff}$):** This is crucial for composite T-beams. IS 1016 Part 2 specifies criteria for effective flange width for composite sections. Generally, it is the lesser of:
        *   $b_f$ (actual flange width)
        *   $b_w + 12 t_s$ (where $b_w$ is the web width of the precast beam)
        *   $b_w + (L_0/4)$ (where $L_0$ is the span of the slab between supports).
        *   **IS 1343:2012 Clause 24.5.2:** Deals with the 'Effective flange width' of composite T-beams.

5.  **Calculate Properties of the Transformed Composite Section:**
    *   **Transformed Area ($A_{tr}$):** $A_{tr} = A_p + m \cdot A_s$
    *   **Centroid of the Transformed Section:** Calculate the neutral axis (NA) of the composite section by taking moments of areas about a reference axis (e.g., bottom of the precast beam).
        *   $y_{tr} = \frac{A_p y_p + m A_s y_s}{A_p + m A_s}$
        where $y_p$ and $y_s$ are the distances of the centroids of the precast beam and the slab from the reference axis.
    *   **Moment of Inertia of the Transformed Section ($I_{tr}$):** Calculate using the parallel axis theorem about the centroid of the transformed section.
        *   $I_{tr} = (I_p + A_p d_p^2) + m (I_s + A_s d_s^2)$
        where $d_p$ and $d_s$ are the distances of the centroid of the precast beam and the slab from the centroid of the transformed section.

6.  **Calculate Stresses at Different Stages:**

    *   **Stage I: Stresses due to Prestressing Force ($P$) only (acting alone):**
        *   At top fiber: $\sigma_{p1} = -\frac{P}{A_p} + \frac{P \cdot e}{Z_{pt}}$
        *   At bottom fiber: $\sigma_{p2} = -\frac{P}{A_p} - \frac{P \cdot e}{Z_{pb}}$
        where $e$ is the eccentricity of the prestressing force from the centroid of the precast beam.

    *   **Stage II: Stresses due to Prestressing Force ($P$) and Sustained/Transient Loads ($W$):**
        *   **Combined Effect of Prestress and Load:** Calculate the stresses in the transformed section due to the prestressing force and the applied loads ($W$). The applied loads are distributed over the transformed section.
            *   Bending moment due to prestress (if eccentricity exists) $M_p = P \cdot e$.
            *   Bending moment due to applied loads $M_w$.
        *   **Stresses at the Top Fiber of the Composite Section ($\sigma_{tc}$):**
            $\sigma_{tc} = \frac{P}{A_{tr}} + \frac{P e}{Z_{tr,top}} + \frac{M_w}{Z_{tr,top}}$ (where $Z_{tr,top}$ is the section modulus of the transformed section at the top fiber)
        *   **Stresses at the Bottom Fiber of the Composite Section ($\sigma_{bc}$):**
            $\sigma_{bc} = \frac{P}{A_{tr}} + \frac{P e}{Z_{tr,bottom}} + \frac{M_w}{Z_{tr,bottom}}$ (where $Z_{tr,bottom}$ is the section modulus of the transformed section at the bottom fiber)

        *   **More accurately, considering the stresses due to P, and moments due to P, and external loads on the transformed section:**
            *   Stress due to $P$ on the transformed section: $\sigma_{P/A_{tr}} = \frac{P}{A_{tr}}$ (compressive)
            *   Stress due to moment $M_p = P \cdot e$ on the transformed section: $\sigma_{M_p/Z_{tr}} = \frac{P e}{Z_{tr}}$ (compressive or tensile depending on location)
            *   Stress due to external moment $M_w$ on the transformed section: $\sigma_{M_w/Z_{tr}} = \frac{M_w}{Z_{tr}}$ (compressive or tensile depending on location)

        *   **Total Stresses at Critical Locations:**
            *   **Top of Slab:** $\sigma_{top\_slab} = \sigma_{P/A_{tr}} \pm \frac{P e}{Z_{tr,top}} + \frac{M_w}{Z_{tr,top}}$ (Top fiber of the composite section)
            *   **Bottom of Precast Beam:** $\sigma_{bottom\_beam} = \sigma_{P/A_{tr}} \pm \frac{P e}{Z_{tr,bottom}} + \frac{M_w}{Z_{tr,bottom}}$ (Bottom fiber of the composite section)
            *   **Interface (Top of Beam / Bottom of Slab):** Stresses here are important for bonding and shear transfer.
                *   The stress in the precast beam at the interface is obtained from the transformed section analysis at that level.
                *   The stress in the slab at the interface is also obtained from the transformed section analysis at that level.

    *   **Important Point:** The calculation of stresses needs to be done at the **extreme fibers of the composite section**, which are typically the top of the slab and the bottom of the precast beam. The neutral axis of the composite section will be higher than the neutral axis of the precast beam alone.

---

### 5. Stresses at the Interface

The stresses at the interface between the precast beam and the cast-in-situ slab are critical.

*   **Longitudinal Stresses:** These are calculated from the bending moment distribution in the transformed section at the interface level.
*   **Shear Stresses:** These are induced by the difference in longitudinal stresses between the precast beam and the slab. The shear is transferred through shear connectors.
    *   Shear stress ($\tau$) is typically calculated using the formula: $\tau = \frac{V \cdot Q}{I_{tr} \cdot b_{eff}}$
        where:
        *   $V$ is the shear force at the section.
        *   $Q$ is the first moment of area of the part of the section above (or below) the interface, about the neutral axis of the composite section.
        *   $I_{tr}$ is the moment of inertia of the transformed composite section about its neutral axis.
        *   $b_{eff}$ is the effective width of the flange (slab).

---

### 6. Effect of Creep and Shrinkage

*   **Differential Creep and Shrinkage:** The precast beam, often subjected to initial prestress, and the cast-in-situ slab will experience creep and shrinkage over time. If the properties are different, differential movements will occur.
*   **Loss of Prestress:** Differential shrinkage in the slab can cause additional loss of prestress in the beam due to the bond at the interface.
*   **Stress Redistribution:** Creep can lead to a redistribution of stresses, with compression tending to concentrate in the more rapidly aging concrete (usually the precast beam) and tension in the less rapidly aging concrete (the slab).
*   **Analysis Methods:** Advanced analysis techniques, considering time-dependent effects, may be required for critical structures. IS 1343 provides guidelines for accounting for these losses.

---

### 7. Ultimate Strength of Composite Sections

The ultimate strength is determined by the flexural capacity of the composite section at the ultimate limit state. This involves considering:

*   **Ultimate Bending Moment Capacity:** This is calculated based on the failure of the concrete flange or web, or the yielding of the tensile reinforcement (if any in the slab) or the ultimate strain capacity of the prestressing tendons.
*   **Contribution of the Slab:** The slab acts as a flange, significantly increasing the moment capacity.
*   **Shear Key Contribution:** The shear connectors ensure that the full flange width of the slab effectively participates in resisting bending.
*   **IS 1343:2012 Code Provisions:** The code provides methods for calculating the ultimate flexural strength of composite sections, often based on ultimate load theories and strain compatibility.

---

### 8. Design Considerations for Composite Sections (Brief Overview)

*   **Shear Connector Design:** Crucial for ensuring composite action. The number, spacing, and type of shear connectors must be designed to transfer the required shear forces. IS 1343 provides guidelines and methods for their design.
*   **Bond at Interface:** Ensuring good bond between the precast beam and the slab is vital. Surface preparation and proper casting procedures are important.
*   **Deflection Control:** Composite sections generally have better deflection characteristics due to increased stiffness. However, deflection calculations must consider the composite action and time-dependent effects.
*   **Crack Control:** While prestressing reduces cracking, the design must ensure that under service loads, cracking at the interface or in the slab is within acceptable limits.

---

### 9. Example Calculation (Simplified Elastic Analysis)

**Problem:** A post-tensioned prestressed concrete I-beam is used as a composite T-beam with a cast-in-situ slab.

**Given:**

*   **Precast Beam:**
    *   Cross-sectional area ($A_p$) = 80000 mm²
    *   Moment of Inertia ($I_p$) = 1.6 x 10⁹ mm⁴
    *   Section modulus to top fiber ($Z_{pt}$) = 80000 cm³
    *   Section modulus to bottom fiber ($Z_{pb}$) = 80000 cm³
    *   Centroid from bottom of beam ($y_{cp}$) = 150 mm
    *   $E_p$ = 35 GPa
*   **Cast-in-situ Slab:**
    *   Width ($b_f$) = 600 mm
    *   Thickness ($t_s$) = 120 mm
    *   Area of slab ($A_s$) = 600 mm x 120 mm = 72000 mm²
    *   Centroid from bottom of beam ($y_{cs}$) = 150 mm + 120 mm/2 = 210 mm
    *   $E_s$ = 30 GPa
*   **Prestressing Force ($P$) = 1000 kN (acting at the centroid of the precast beam)**
*   **Service Load (uniformly distributed) = 20 kN/m**
*   **Span of Beam = 10 m**

**Calculate:**

1.  Modular ratio ($m$)
2.  Effective flange width ($b_{eff}$) (assume it's the actual width)
3.  Properties of the transformed composite section (Area, Centroid, Moment of Inertia)
4.  Stresses at the top of the slab and bottom of the beam under service load.

**Solution:**

1.  **Modular Ratio ($m$):**
    $m = \frac{E_p}{E_s} = \frac{35 \text{ GPa}}{30 \text{ GPa}} = 1.167$

2.  **Effective Flange Width ($b_{eff}$):**
    Assume $b_{eff} = b_f = 600$ mm (for simplicity in this example).

3.  **Properties of Transformed Composite Section:**
    *   Transformed Area of Slab ($A_{st}$) = $m \times A_s = 1.167 \times 72000 \text{ mm}^2 = 83990 \text{ mm}^2$
    *   Total Transformed Area ($A_{tr}$) = $A_p + A_{st} = 80000 + 83990 = 163990 \text{ mm}^2$

    *   **Centroid of Transformed Section (from bottom of beam):**
        $y_{tr} = \frac{A_p y_{cp} + A_{st} y_{cs}}{A_p + A_{st}}$
        $y_{tr} = \frac{(80000 \text{ mm}^2)(150 \text{ mm}) + (83990 \text{ mm}^2)(210 \text{ mm})}{163990 \text{ mm}^2}$
        $y_{tr} = \frac{12000000 + 17637900}{163990} = \frac{29637900}{163990} \approx 180.7 \text{ mm}$

    *   **Moment of Inertia of Transformed Section ($I_{tr}$):**
        *   $I_p = 1.6 \times 10^9 \text{ mm}^4$
        *   Distance of centroid of beam from transformed centroid ($d_p$) = $|150 - 180.7| = 30.7 \text{ mm}$
        *   $I_s = \frac{b_f \cdot t_s^3}{12} = \frac{600 \cdot (120)^3}{12} = 86.4 \times 10^6 \text{ mm}^4$
        *   Distance of centroid of slab from transformed centroid ($d_s$) = $|210 - 180.7| = 29.3 \text{ mm}$

        $I_{tr} = (I_p + A_p d_p^2) + m (I_s + A_s d_s^2)$
        $I_{tr} = (1.6 \times 10^9 + 80000 \cdot (30.7)^2) + 1.167 (86.4 \times 10^6 + 72000 \cdot (29.3)^2)$
        $I_{tr} = (1.6 \times 10^9 + 75364000) + 1.167 (86.4 \times 10^6 + 61862400)$
        $I_{tr} = 1.675 \times 10^9 + 1.167 (148.26 \times 10^6)$
        $I_{tr} = 1.675 \times 10^9 + 172.97 \times 10^6 \approx 1.848 \times 10^9 \text{ mm}^4$

    *   **Section Modulus of Transformed Section:**
        *   Top fiber (top of slab): distance from centroid = $(150+120) - 180.7 = 99.3 \text{ mm}$
        *   Bottom fiber (bottom of beam): distance from centroid = $180.7 \text{ mm}$
        *   $Z_{tr,top} = \frac{I_{tr}}{99.3} = \frac{1.848 \times 10^9}{99.3} \approx 18.6 \times 10^6 \text{ mm}^3 = 18600 \text{ cm}^3$
        *   $Z_{tr,bottom} = \frac{I_{tr}}{180.7} = \frac{1.848 \times 10^9}{180.7} \approx 10.22 \times 10^6 \text{ mm}^3 = 10220 \text{ cm}^3$

4.  **Stresses under Service Load:**
    *   Prestressing force $P = 1000 \text{ kN} = 1000 \times 10^3 \text{ N}$
    *   Eccentricity $e = 0$ (acting at the centroid of the precast beam)
    *   Service load $w = 20 \text{ kN/m} = 20 \times 10^3 \text{ N/m}$
    *   Span $L = 10 \text{ m}$
    *   Maximum Bending Moment due to service load ($M_w$) = $\frac{w L^2}{8} = \frac{(20 \times 10^3 \text{ N/m})(10 \text{ m})^2}{8} = 250 \times 10^3 \text{ Nm} = 250 \text{ kNm}$
        *   $M_w = 250 \times 10^6 \text{ Nmm}$

    *   **Stress due to prestressing force ($P$):** Since $e=0$, there is no bending moment due to prestress.
        $\sigma_{P} = \frac{P}{A_{tr}} = \frac{1000 \times 10^3 \text{ N}}{163990 \text{ mm}^2} \approx 6.1 \text{ N/mm}^2$ (compressive)

    *   **Stress due to service load bending moment ($M_w$):** The moment is hogging (causing tension at the bottom and compression at the top).
        *   Stress at top fiber: $\sigma_{M_w,top} = \frac{M_w}{Z_{tr,top}} = \frac{250 \times 10^6 \text{ Nmm}}{18.6 \times 10^6 \text{ mm}^3} \approx 13.4 \text{ N/mm}^2$ (compressive)
        *   Stress at bottom fiber: $\sigma_{M_w,bottom} = \frac{M_w}{Z_{tr,bottom}} = \frac{250 \times 10^6 \text{ Nmm}}{10.22 \times 10^6 \text{ mm}^3} \approx 24.5 \text{ N/mm}^2$ (tensile)

    *   **Total Stresses:**
        *   **At the top of the slab:**
            $\sigma_{top\_slab} = \sigma_{P} + \sigma_{M_w,top}$ (Compression is negative)
            $\sigma_{top\_slab} = -6.1 \text{ N/mm}^2 + (-13.4 \text{ N/mm}^2) = -19.5 \text{ N/mm}^2$ (Compressive)

        *   **At the bottom of the beam:**
            $\sigma_{bottom\_beam} = \sigma_{P} + \sigma_{M_w,bottom}$ (Tensile is positive)
            $\sigma_{bottom\_beam} = -6.1 \text{ N/mm}^2 + (24.5 \text{ N/mm}^2) = 18.4 \text{ N/mm}^2$ (Tensile)

---

### 10. Practice Questions

**Question 1:**
Explain the concept of composite action in prestressed concrete structures and list its key advantages.

**Answer:**
Composite action refers to the synergistic behavior of two or more structural components, usually of different materials or construction methods, acting together as a single unit to resist loads. In prestressed concrete, this typically involves a precast prestressed beam and a cast-in-situ reinforced concrete slab. This is achieved through effective shear connectors that transfer shear forces between the elements, ensuring they act as a single, more efficient structural unit.

Advantages include:
*   Increased load-carrying capacity.
*   Improved stiffness and reduced deflections.
*   Efficient material utilization.
*   Cost-effectiveness.
*   Better fire resistance.

**Question 2:**
A post-tensioned prestressed concrete I-beam of area 70,000 mm² and moment of inertia 1.4 x 10⁹ mm⁴ is to be used with a cast-in-situ slab of width 500 mm and thickness 100 mm. The modulus of elasticity of the precast beam is 35 GPa, and that of the cast-in-situ slab is 30 GPa. Calculate the modular ratio and the transformed area of the slab.

**Answer:**
*   Modular ratio ($m$) = $E_{precast} / E_{slab} = 35 \text{ GPa} / 30 \text{ GPa} = 1.167$.
*   Area of slab ($A_s$) = 500 mm x 100 mm = 50000 mm².
*   Transformed area of slab ($A_{st}$) = $m \times A_s = 1.167 \times 50000 \text{ mm}^2 = 58350 \text{ mm}^2$.

**Question 3:**
For the composite section described in Question 2, if the centroid of the precast beam is 140 mm from its bottom face and the slab's centroid is 50 mm from its top face (which rests on the beam), determine the distance of the centroid of the transformed composite section from the bottom of the precast beam, assuming the slab is cast on top. (Given: Precast beam centroid from bottom = 140 mm, Slab centroid from top of slab = 50 mm).

**Answer:**
*   Let's assume the precast beam is an I-section.
*   Centroid of precast beam from bottom ($y_{cp}$) = 140 mm.
*   Centroid of slab from top of slab = 50 mm.
*   The interface is at the top of the precast beam. Let's assume the slab's bottom face is at the top of the beam.
*   The total depth of the precast beam is not given, but we know its centroid. Let's assume the slab's bottom surface is at the top face of the beam's web or flange.
*   Distance of slab's centroid from the interface = 50 mm.
*   We need the distance of the slab's centroid from the bottom of the beam. This requires knowing the total height of the precast beam and the position of the slab relative to it.

*Let's rephrase for a clear calculation:*
Assume the centroid of the precast beam is 140 mm from its bottom face. The slab is cast on top, with a thickness of 100 mm. The centroid of the slab is at its mid-depth, i.e., 50 mm from its top and bottom faces.

To calculate the centroid of the composite section, we need the centroid of the slab relative to the bottom of the beam.
Let's assume the top face of the precast beam is at height $h_p$ from its bottom. The slab is cast on top of this.
The centroid of the slab will be at $h_p + (100/2) = h_p + 50$ mm from the bottom of the beam, if the slab's bottom face aligns with the beam's top face.

**Let's assume a more standard scenario for calculation:**
Assume the precast beam has a total height such that its centroid is at 140 mm from its bottom. The slab of thickness 100 mm is cast directly on top.
The centroid of the slab will be at a distance $h_{beam\_total} - (h_{beam\_total} - 140) + 50$ from the bottom if the beam has uniform depth. This is getting complicated without the beam's overall geometry.

**Let's work with distances from a common reference:**
Reference: Bottom of the precast beam.
Centroid of precast beam ($y_{cp}$) = 140 mm.
Area of precast beam ($A_p$) = 70,000 mm².
Area of transformed slab ($A_{st}$) = 58,350 mm².

The slab is cast on top. The centroid of the slab is at its mid-depth. If we consider the interface to be the top of the precast beam, and the slab starts there.
Let's assume the centroid of the precast beam is at 140mm from the bottom. The slab of 100mm thickness sits on top of the precast beam. The centroid of the slab is at 50mm from its top and bottom. So, if the slab's bottom is at the top of the beam, the slab's centroid is at $140 + 50 = 190$ mm from the bottom of the beam (if beam is uniform).

**A more direct interpretation of the question:**
Assume the beam has a centroid at 140mm from its bottom. The slab is cast on top. The centroid of the slab is at its mid-depth. If the slab sits directly on top, and we take the bottom of the beam as reference, the slab's centroid will be at $140 \text{ mm} + ( \text{distance from beam centroid to top of beam} ) + 50 \text{ mm}$.

**Let's re-interpret Question 3 for clarity:**
Assume the top surface of the precast beam is at a distance $h_{top}$ from its bottom. The slab of thickness 100 mm is cast on this top surface.
The centroid of the slab is at its mid-depth, i.e., 50 mm from its bottom surface. So the centroid of the slab is at $h_{top} + 50$ mm from the bottom of the beam.
We know $y_{cp} = 140$ mm.

**Let's simplify and assume the slab's bottom surface is at the top of the precast beam:**
If the centroid of the precast beam is 140 mm from the bottom, and the slab (100 mm thick) is cast on top, the slab's centroid is at 50 mm from its bottom, so it's at $140 + 50 = 190$ mm from the bottom of the beam. This assumes the slab's bottom starts where the beam's centroid is, which is unlikely.

**Let's assume a common reference point:** Bottom of the precast beam.
Centroid of precast beam ($y_{cp}$) = 140 mm.
The slab is 100 mm thick and cast on top. Its centroid is at its mid-depth.
To find the centroid of the slab from the bottom of the beam, we need the distance of the slab's bottom surface from the bottom of the beam.
Let's assume the slab is cast on the top flange of the precast beam. Let the top surface of the precast beam be at a distance $H_{beam}$ from its bottom. The centroid of the slab will be at $H_{beam} + 100/2 = H_{beam} + 50$ mm from the bottom of the beam. We still need $H_{beam}$.

**Let's assume the question implies:**
Centroid of precast beam from its bottom = 140 mm.
The slab of thickness 100 mm is cast on top. The centroid of the slab is at its mid-depth. For calculation of composite centroid, we need the distance of the slab's centroid from the beam's bottom. Let's assume the slab's bottom face is at a level $X$ mm above the beam's bottom. Then slab centroid is at $X + 50$ mm.

**Let's provide a clear assumption for a solvable problem:**
Assume the precast beam has a total height of 200 mm. Its centroid is at 140 mm from its bottom. The slab of thickness 100 mm is cast on top of this beam.
Then, the slab's bottom is at 200 mm from the beam's bottom.
The slab's centroid is at 200 mm + 50 mm = 250 mm from the beam's bottom ($y_{cs} = 250$ mm).

$y_{tr} = \frac{A_p y_{cp} + A_{st} y_{cs}}{A_p + A_{st}}$
$y_{tr} = \frac{(70000)(140) + (58350)(250)}{70000 + 58350}$
$y_{tr} = \frac{9800000 + 14587500}{128350} = \frac{24387500}{128350} \approx 190 \text{ mm}$

**So, if we assume the precast beam is 200 mm high with its centroid at 140 mm from the bottom, the centroid of the transformed composite section is approximately 190 mm from the bottom of the precast beam.**

---

### 11. Important Points to Remember:

*   **Modular Ratio ($m$) is crucial:** It links the elastic behavior of the two concrete elements.
*   **Effective Flange Width ($b_{eff}$):** Properly determine for T-beam analysis.
*   **Transformed Section Properties:** Accurately calculate the centroid and moment of inertia of the composite section.
*   **Stresses:** Calculate stresses at the extreme fibers of the composite section (top of slab, bottom of beam).
*   **Shear Connector Design:** Essential for ensuring composite action.
*   **Creep and Shrinkage:** Consider their effects, especially in long-term loading.
*   **IS 1343:2012:** Refer to relevant clauses for effective flange width, modular ratio, and stress calculations in composite sections.

---
