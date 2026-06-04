---
title: "High cycle fatigue"
subject: "FAILURE ANALYSIS AND DESIGN"
module: "Module 2: Fatigue loading"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463dd8"
status: "completed"
scrapedAt: "2026-05-20T18:12:29.376Z"
---
# Module 2: Fatigue Loading - High Cycle Fatigue

## Introduction to Fatigue Loading

Fatigue is a progressive and localized structural damage that occurs when a material is subjected to cyclic loading. It is a major cause of mechanical failure in many engineering applications. This module focuses on understanding fatigue loading and its implications, particularly **high cycle fatigue**.

**Key Concept:** Fatigue failure is typically brittle in appearance, even in ductile materials, and occurs at stress levels significantly below the material's ultimate tensile strength.

---

## Topic 1: High Cycle Fatigue (HCF)

High cycle fatigue (HCF) is characterized by a large number of stress cycles to failure, typically greater than $10^4$ or $10^5$ cycles. In HCF, the applied stresses are generally below the yield strength of the material, meaning deformation is primarily elastic.

**Definition:** High Cycle Fatigue (HCF) is fatigue failure occurring after a large number of stress cycles where the applied stresses are below the material's yield strength.

---

## Key Concepts and Definitions in High Cycle Fatigue

### 1. Stress Cycles

*   **Stress Amplitude ($\sigma_a$):** Half the difference between the maximum and minimum stress in a cycle: $\sigma_a = (\sigma_{max} - \sigma_{min})/2$.
*   **Mean Stress ($\sigma_m$):** The average of the maximum and minimum stress in a cycle: $\sigma_m = (\sigma_{max} + \sigma_{min})/2$.
*   **Stress Ratio (R):** The ratio of minimum stress to maximum stress: $R = \sigma_{min} / \sigma_{max}$.
    *   $R = 0$: Fluctuating tension (e.g., zero to maximum tensile stress).
    *   $R = -1$: Fully reversed stress (e.g., equal and opposite tensile and compressive stresses).
    *   $R < 0$: Indicates compression at some point in the cycle.
*   **Fatigue Strength:** The stress level at which a material can withstand a specific number of cycles without failure.

**Important Point to Remember:** The nature of the stress cycle (amplitude, mean stress, and stress ratio) significantly influences the fatigue life of a component.

### 2. Fatigue Crack Initiation and Propagation

HCF typically involves two distinct stages:

*   **Crack Initiation:** This is the longest stage of fatigue life. Cracks typically initiate at stress concentrations, such as surface defects (scratches, pores), geometric discontinuities (fillets, holes), or material inclusions.
    *   **Mechanisms:** Slip bands on the surface, micro-void formation, and crack growth from pre-existing flaws.
    *   **Reference:** *Engineering Materials 3–Materials Failure Analysis: Case Studies and Design Implications* by Jones D. R. H. (1993) discusses surface effects and their role in crack initiation.
*   **Crack Propagation:** Once a crack initiates, it grows incrementally with each applied stress cycle. This stage is often characterized by fracture mechanics principles.
    *   **Paris' Law:** Describes the relationship between crack growth rate ($\frac{da}{dN}$) and the stress intensity factor range ($\Delta K$): $\frac{da}{dN} = C (\Delta K)^m$.
    *   **Stress Intensity Factor ($\Delta K$):** A parameter that quantifies the stress state at the crack tip, dependent on applied stress, crack size, and geometry.
    *   **Reference:** *Elements of Fracture Mechanics* by Prashant Kumar (1999) provides detailed coverage of fracture mechanics principles, including Paris' Law.

**Important Point to Remember:** In HCF, crack initiation often dominates the fatigue life, meaning preventing or delaying crack initiation is crucial for design.

### 3. S-N Curves (Stress-Number of Cycles Curves)

S-N curves are empirical plots that relate the applied stress (S) to the number of cycles to failure (N) for a given material.

*   **Construction:** Typically generated from experiments where specimens are subjected to cyclic loading at various stress amplitudes until failure.
*   **Shape:**
    *   For ferrous metals (steels, titanium alloys), the S-N curve often flattens out at higher cycle numbers, indicating an **endurance limit (or fatigue limit)** – a stress level below which the material can theoretically withstand an infinite number of cycles.
    *   For non-ferrous metals (aluminum alloys, copper alloys), the S-N curve typically continues to decrease with increasing cycles, meaning there is no distinct endurance limit; instead, they have **fatigue strength** at a specific number of cycles.
*   **Reference:** *Failure Analysis and Prevention* ASM Handbook, Vol. 11 (2002) is a key resource for S-N curves and fatigue testing methodologies. *Failure of Materials in Mechanical Design* by Jack A. Collins (2013) also offers extensive treatment of S-N curves and their applications.

**Important Point to Remember:** S-N curves are material-specific and are sensitive to factors like surface finish, specimen geometry, and testing environment.

### 4. Endurance Limit and Fatigue Strength

*   **Endurance Limit ($\sigma_e$):** The maximum stress amplitude that a material can withstand for an infinite number of cycles without fatigue failure. Primarily observed in ferrous alloys.
*   **Fatigue Strength:** The stress amplitude that a material can withstand for a specified number of cycles (e.g., $10^6$ or $10^7$ cycles). Used when an endurance limit is not present or not relevant.

**Important Point to Remember:** The endurance limit is an idealized concept; in reality, fatigue failure can still occur at very high cycle counts even below this stress.

---

## Factors Affecting High Cycle Fatigue

Several factors influence the HCF life of a component:

### 1. Material Properties

*   **Ultimate Tensile Strength (UTS):** Generally, higher UTS materials tend to have higher fatigue strength.
*   **Yield Strength:** While HCF occurs below the yield strength, higher yield strength materials often show better fatigue resistance.
*   **Ductility:** Higher ductility can sometimes lead to more crack initiation sites, but can also allow for some plastic deformation that might blunt crack tips.
*   **Microstructure:** Grain size, phase distribution, and presence of inclusions significantly impact fatigue behavior. Fine-grained materials often exhibit better fatigue resistance.
*   **Work Hardening:** Materials that work harden well might show better fatigue resistance.
*   **Reference:** *Engineering Materials 3–Materials Failure Analysis: Case Studies and Design Implications* by Jones D. R. H. (1993) details how material properties influence failure modes.

### 2. Surface Conditions

*   **Surface Finish:** Rough surfaces have stress concentrators that promote crack initiation. Polished surfaces have significantly longer fatigue lives.
*   **Surface Treatments:**
    *   **Shot Peening/Peening:** Induces compressive residual stresses on the surface, which oppose tensile fatigue stresses, thus improving fatigue life.
    *   **Case Hardening (e.g., Nitriding, Carburizing):** Creates a hard, wear-resistant surface layer with beneficial compressive residual stresses.
*   **Surface Defects:** Scratches, pores, tool marks, and machining defects act as initiation sites.
*   **Reference:** *Failure Analysis and Prevention* ASM Handbook, Vol. 11 (2002) provides detailed information on surface treatments and their effect on fatigue.

### 3. Stress Concentrations

*   **Geometric Discontinuities:** Holes, notches, fillets, keyways, and changes in cross-section create localized areas of high stress, acting as fatigue crack initiation sites.
*   **Stress Concentration Factor ($K_t$):** A geometric factor that quantifies the degree of stress magnification at a discontinuity.
*   **Notch Sensitivity:** The extent to which a material is susceptible to the presence of notches. More ductile materials are generally less notch-sensitive.
*   **Reference:** *Failure of Materials in Mechanical Design* by Jack A. Collins (2013) offers thorough coverage of stress concentrations and notch effects in fatigue.

### 4. Mean Stress Effects

*   **Influence:** Tensile mean stresses generally reduce fatigue life, while compressive mean stresses increase fatigue life.
*   **Fatigue Limit Diagrams (e.g., Goodman, Soderberg, Gerber):** These diagrams are used to estimate the fatigue strength under various mean stress conditions.
    *   **Goodman Diagram:** A conservative linear relationship between alternating stress and mean stress.
    *   **Gerber Parabola:** A less conservative parabolic relationship that often better fits experimental data for some materials.
*   **Reference:** *Failure of Materials in Mechanical Design* by Jack A. Collins (2013) extensively covers mean stress effects and fatigue limit diagrams.

### 5. Environmental Factors

*   **Temperature:** High temperatures can reduce fatigue strength and accelerate creep-fatigue interactions. Low temperatures can increase notch sensitivity and reduce fracture toughness.
*   **Corrosion:** Corrosive environments can significantly reduce fatigue life by causing pitting (acting as stress concentrators) and participating in **corrosion fatigue**.
    *   **Corrosion Fatigue:** Fatigue failure that occurs in a corrosive environment, where the presence of corrosion can lead to crack initiation and accelerated propagation at stress levels below the fatigue limit in a benign environment.
*   **Reference:** *Failure Analysis and Prevention* ASM Handbook, Vol. 11 (2002) and *Failure of Materials in Mechanical Design* by Jack A. Collins (2013) both discuss environmental effects on fatigue. CO4 specifically addresses high-temperature effects and corrosion.

---

## Applications and Examples of High Cycle Fatigue

HCF is prevalent in a wide range of engineering components operating under cyclic loads:

*   **Rotating machinery:** Shafts, axles, gears in engines, turbines, and industrial equipment.
*   **Aerospace components:** Aircraft wings, landing gear, fuselage sections subjected to repeated flight loads.
*   **Automotive parts:** Connecting rods, crankshafts, suspension components, wheels.
*   **Structures:** Bridges, buildings, and other structures subjected to wind loads, traffic loads, or seismic activity.
*   **Medical implants:** Hip and knee replacements (though here, fretting and wear can be significant alongside fatigue).

**Example:** A steel crankshaft in an internal combustion engine experiences fluctuating stresses with each rotation. While the peak stresses might be below the material's yield strength, the millions of cycles can lead to fatigue failure if not designed properly. Surface treatments like induction hardening or nitriding are often used to enhance the fatigue life of critical journal surfaces.

---

## Relating to Course Outcomes

This topic directly contributes to the following course outcomes:

*   **CO1: Understand the different theories of failure and material behaviour under various loading conditions.**
    *   HCF illustrates a distinct failure mechanism governed by cyclic stress rather than static overload. We understand how materials behave elastically under these loads, with fatigue cracks initiating and propagating.
*   **CO2: Remember the factors affecting fatigue loading, S-N-P curves, and endurance diagrams for life prediction.**
    *   This topic extensively covers factors like mean stress, surface finish, and stress concentrations that influence fatigue life. S-N curves and fatigue limit diagrams are fundamental tools for life prediction in HCF.
*   **CO3: Apply principles of fracture mechanics to analyse and design against crack initiation and propagation.**
    *   While HCF is often dominated by crack initiation, the propagation phase can be analyzed using fracture mechanics (e.g., Paris' Law), which is crucial for predicting the remaining life of a component with a known flaw.
*   **CO4: Understand advanced failure mechanisms, including contact fatigue, high-temperature effects, and corrosion, and their impact on material properties and design.**
    *   This topic touches upon high-temperature effects and corrosion as factors that significantly alter HCF behavior, often leading to reduced fatigue life. While contact fatigue is distinct, the principles of cyclic loading and damage accumulation are related.

---

## Practice Questions and Exercises

**Question 1:**
Define High Cycle Fatigue (HCF). What distinguishes it from low cycle fatigue (LCF)?

**Answer 1:**
High Cycle Fatigue (HCF) is fatigue failure occurring after a large number of stress cycles ($>10^4$ or $10^5$ cycles) where the applied stresses are generally below the material's yield strength, and deformation is primarily elastic. Low Cycle Fatigue (LCF), in contrast, occurs after a relatively small number of cycles ($<10^4$ cycles) due to applied stresses that cause significant plastic deformation in each cycle.

**Question 2:**
List three critical factors that can significantly reduce the high cycle fatigue life of a steel component and explain how each factor contributes to the failure.

**Answer 2:**
1.  **Surface Roughness:** Rough surfaces contain stress concentration sites (micro-cracks, notches) where fatigue cracks can easily initiate. This directly leads to a reduced number of cycles required for crack initiation.
2.  **Tensile Mean Stress:** A tensile mean stress shifts the stress cycle towards higher tensile values, effectively increasing the stress amplitude and stress intensity factor range at the crack tip. This accelerates crack propagation and reduces the total fatigue life.
3.  **Presence of a Notch (e.g., a hole or fillet):** Geometric discontinuities create localized high stresses (stress concentration) that act as preferential sites for crack initiation. Even if the bulk stress is low, the stress at the notch root can be high enough to initiate fatigue cracks.

**Question 3:**
A component is designed to operate under a fully reversed stress cycle ($R=-1$) with an amplitude of 150 MPa. The material has an endurance limit of 200 MPa and a fatigue strength of 250 MPa at $10^7$ cycles. Based on this information, what can you infer about the expected fatigue life of the component? (Assume no significant stress concentrations or detrimental surface conditions.)

**Answer 3:**
Since the applied stress amplitude (150 MPa) is below the material's endurance limit (200 MPa), and assuming no other detrimental factors are present, the component is expected to have a very long fatigue life, theoretically infinite according to the endurance limit concept. It should withstand well over $10^7$ cycles.

**Question 4:**
Explain the purpose of shot peening in improving fatigue resistance. How does it achieve this?

**Answer 4:**
Shot peening is a surface treatment process used to improve fatigue resistance. It involves bombarding the surface of the material with small shot particles (e.g., steel balls). This impact causes localized plastic deformation on the surface, which in turn induces beneficial **compressive residual stresses** in the surface layer. These compressive stresses oppose the applied tensile fatigue stresses, making it harder for fatigue cracks to initiate and propagate, thereby increasing the fatigue life of the component.

---

## Important Points to Remember for HCF

*   **Fatigue is progressive damage:** It happens over time and with each stress cycle.
*   **HCF occurs below the yield strength:** This means deformation is mostly elastic, but damage still accumulates.
*   **Crack initiation is critical in HCF:** Often accounts for the majority of the fatigue life.
*   **Surface condition is paramount:** Surface finish, treatments, and defects strongly influence crack initiation.
*   **Stress concentrations are fatigue amplifiers:** Geometric discontinuities are prime sites for crack initiation.
*   **Mean stress matters:** Tensile mean stress reduces life; compressive mean stress increases life.
*   **S-N curves are essential tools:** They provide a basis for life prediction but must be used with caution, considering the numerous influencing factors.
*   **Endurance limit is an idealization:** For practical purposes, consider a very high cycle count (e.g., $10^7$ or $10^8$) as a threshold for very long life.
*   **Environmental factors can drastically reduce fatigue life:** Corrosion and high temperatures are significant concerns.

---
This concludes the study notes for High Cycle Fatigue. Remember to consult the recommended textbooks for deeper insights and detailed experimental data.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
