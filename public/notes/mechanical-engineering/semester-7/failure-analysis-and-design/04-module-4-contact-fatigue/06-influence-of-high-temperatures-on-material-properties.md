---
title: "Influence of high temperatures on material properties"
subject: "FAILURE ANALYSIS AND DESIGN"
module: "Module 4: Contact fatigue"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463df1"
status: "completed"
scrapedAt: "2026-05-20T18:12:45.498Z"
---
# Module 4: Contact Fatigue - Influence of High Temperatures on Material Properties

## 1. Introduction to High-Temperature Effects on Materials

This section explores how elevated temperatures alter the fundamental mechanical properties of materials, particularly in the context of contact fatigue. Understanding these changes is crucial for designing components that operate reliably in high-temperature environments. This aligns with **CO4 (K2)**, which focuses on understanding advanced failure mechanisms, including high-temperature effects.

### 1.1. General Impact of Temperature on Material Properties

*   **Decreased Strength and Stiffness:** As temperature increases, the atomic vibrations within the material become more energetic. This leads to a reduction in the interatomic forces, resulting in a lower yield strength, tensile strength, and elastic modulus.
*   **Increased Ductility:** Conversely, the increased atomic mobility at higher temperatures generally leads to an increase in ductility. Materials become more capable of plastic deformation before fracture.
*   **Oxidation and Corrosion:** High temperatures often accelerate chemical reactions, leading to oxidation (reaction with oxygen) or other forms of corrosion. This can degrade the surface properties, reduce material thickness, and introduce stress concentrators.
*   **Creep:** At sufficiently high temperatures, materials can deform permanently under constant stress over time. This phenomenon, known as creep, is time-dependent and can lead to catastrophic failure if not accounted for.
*   **Phase Transformations:** Some materials undergo phase transformations at specific temperatures, which can significantly alter their mechanical properties. For example, steel can transform from ferrite to austenite at elevated temperatures.

**Important Point:** The magnitude of these effects is highly dependent on the specific material. Metals, ceramics, and polymers will exhibit different responses to elevated temperatures.

---

## 2. Specific Material Properties Affected by High Temperatures

This section delves into how key material properties relevant to contact fatigue are influenced by high temperatures. This directly supports **CO1 (K2)** by understanding material behavior under various conditions and **CO4 (K2)** by addressing high-temperature effects.

### 2.1. Yield Strength and Tensile Strength

*   **Definition:** Yield strength is the stress at which a material begins to deform plastically. Tensile strength is the maximum stress a material can withstand before it starts to neck.
*   **Influence of High Temperature:** Both yield and tensile strength generally decrease with increasing temperature. This is because the thermal energy facilitates the movement of dislocations, which are the primary carriers of plastic deformation.
    *   **Metals:** For most metals, the reduction in strength is significant at elevated temperatures. For example, steel loses a substantial portion of its strength at temperatures around 600°C.
    *   **Ceramics:** Ceramics generally retain their strength better at high temperatures than metals, but their fracture toughness can be reduced.
    *   **Polymers:** Polymers typically experience a dramatic loss of strength as they approach their glass transition temperature ($T_g$) and melting point ($T_m$).

**Example:** A steel gear designed for room-temperature operation might fail prematurely due to plastic deformation (yielding) under the same load when operated at 400°C, as its yield strength has significantly decreased.

### 2.2. Hardness

*   **Definition:** Hardness is a measure of a material's resistance to localized plastic deformation, such as indentation or scratching.
*   **Influence of High Temperature:** Similar to strength, hardness typically decreases with increasing temperature. This is directly related to the reduced yield strength.
    *   **Metallurgical Implications:** In heat-treatable alloys, tempering effects can become more pronounced at elevated operating temperatures, leading to a loss of hardness and strength over time.

### 2.3. Elastic Modulus (Young's Modulus)

*   **Definition:** The elastic modulus is a measure of a material's stiffness, representing the ratio of stress to strain in the elastic region.
*   **Influence of High Temperature:** The elastic modulus generally decreases with increasing temperature. This means the material becomes less stiff and deforms more under a given load.
    *   **Consequences:** A lower elastic modulus can lead to increased deflections and stresses in structural components under the same applied load, potentially contributing to fatigue or contact fatigue failure.

**Example:** A ceramic bearing that operates at high temperatures will have a lower elastic modulus, meaning the Hertzian contact stresses under the same load might be higher if deflections are considered.

### 2.4. Fatigue Strength and Endurance Limit

*   **Definition:** Fatigue strength refers to the stress level at which a material can withstand a specified number of fatigue cycles. The endurance limit is the stress level below which a material can theoretically endure an infinite number of cycles without fatigue failure.
*   **Influence of High Temperature:** Fatigue strength and endurance limit are significantly reduced at elevated temperatures.
    *   **Mechanisms:**
        *   **Oxidation:** Oxidation can attack grain boundaries and create surface cracks, which act as stress concentrators, initiating fatigue cracks earlier.
        *   **Creep-Fatigue Interaction:** At higher temperatures, creep deformation can occur simultaneously with cyclic loading, leading to a phenomenon known as creep-fatigue interaction, which can be more damaging than either creep or fatigue alone.
        *   **Reduced Material Strength:** The inherent reduction in yield and tensile strength at high temperatures also contributes to lower fatigue resistance.

**Reference:** Jones D. R. H. (1993) in "Materials Failure Analysis: Case Studies and Design Implications" discusses various fatigue mechanisms and how environmental factors like temperature can exacerbate them.

### 2.5. Fracture Toughness

*   **Definition:** Fracture toughness ($K_{Ic}$) is a material's resistance to crack propagation.
*   **Influence of High Temperature:** The effect of temperature on fracture toughness is complex and material-dependent.
    *   **Ductile-Brittle Transition Temperature (DBTT):** For some materials, particularly ferritic steels, there is a DBTT. Below the DBTT, the material is brittle, and fracture toughness is low. Above the DBTT, the material is ductile, and fracture toughness is higher. As temperature increases, materials move further above their DBTT, generally increasing fracture toughness.
    *   **Ceramics:** For many ceramics, fracture toughness may decrease slightly with increasing temperature due to reduced grain boundary strength or phase changes.
    *   **Creep Effects:** At very high temperatures where creep is significant, fracture toughness can be affected by creep crack growth mechanisms.

**Reference:** Prashant Kumar (1999) in "Elements of Fracture Mechanics" provides detailed insights into fracture toughness and its temperature dependence, particularly concerning brittle fracture and ductile crack extension.

---

## 3. High-Temperature Mechanisms Relevant to Contact Fatigue

This section focuses on specific failure mechanisms exacerbated or introduced by high temperatures in the context of contact fatigue. This directly addresses **CO4 (K2)**.

### 3.1. Creep

*   **Definition:** Creep is the time-dependent plastic deformation of a material under constant stress at elevated temperatures.
*   **Relevance to Contact Fatigue:**
    *   **Surface Deformation:** Under cyclic contact loading at high temperatures, creep can cause permanent deformation of the contact surfaces. This can lead to changes in the contact geometry, altering stress distributions and potentially accelerating fatigue.
    *   **Subsurface Damage:** Creep can occur in the subsurface region of contact, leading to the formation of voids and cavities that can coalesce and contribute to crack initiation.
    *   **Creep-Fatigue Interaction:** As mentioned earlier, the combination of creep and cyclic loading can be particularly damaging. Stress relaxation due to creep can alter the stress cycles, and creep voids can act as crack initiation sites.

**Example:** A bearing operating at high temperatures under a constant load might experience gradual deformation of the races due to creep. This deformation, combined with the cyclic nature of rolling contact, can lead to a unique form of failure known as creep-fatigue.

### 3.2. Oxidation and Corrosion

*   **Definition:** Oxidation is the chemical reaction of a material with oxygen, forming oxides on the surface. Corrosion is a broader term encompassing electrochemical degradation.
*   **Relevance to Contact Fatigue:**
    *   **Surface Roughening:** Oxidation can create a brittle oxide layer that can spall off during contact, leading to surface roughening and increased stress concentrations.
    *   **Crack Initiation:** Oxides can penetrate pre-existing micro-cracks or form new cracks at the surface, significantly reducing the fatigue life.
    *   **Material Thinning:** In aggressive environments, oxidation can lead to a loss of material thickness, altering the geometry and stress state.
    *   **Embrittlement:** Certain oxidation processes can lead to the embrittlement of the surface layer, making it more susceptible to cracking.

**Reference:** ASM Handbook, Vol. 11, "Failure Analysis and Prevention" provides extensive case studies and explanations of how oxidation and corrosion contribute to various failure modes, including fatigue.

### 3.3. Thermal Fatigue

*   **Definition:** Thermal fatigue is the failure caused by repeated thermal stress cycles, typically due to expansion and contraction of the material with temperature fluctuations.
*   **Relevance to Contact Fatigue:**
    *   **Combined Loading:** In applications involving significant temperature gradients and cyclic contact loads, thermal fatigue can act in conjunction with mechanical fatigue.
    *   **Micro-cracking:** Repeated thermal cycling can induce micro-cracking within the material, which can then serve as initiation sites for contact fatigue cracks.

### 3.4. Microstructural Changes

*   **Definition:** High temperatures can induce changes in the material's microstructure, such as grain growth, precipitation coarsening, or phase transformations.
*   **Relevance to Contact Fatigue:**
    *   **Grain Growth:** Larger grains generally have lower fatigue strength and fracture toughness than finer grains.
    *   **Precipitation Effects:** In alloys strengthened by precipitation, high temperatures can cause precipitates to coarsen or dissolve, reducing their strengthening effect and consequently lowering yield strength and fatigue resistance.
    *   **Phase Transformations:** Unwanted phase transformations can lead to changes in hardness, strength, and toughness, potentially compromising the material's integrity under contact loading.

**Example:** A superalloy used in a jet engine turbine disc experiences high temperatures and cyclic loads. Over time, the strengthening precipitates within the alloy can coarsen, leading to a decrease in its creep and fatigue resistance, potentially causing failure.

---

## 4. Design Considerations for High-Temperature Contact Fatigue

This section outlines practical design strategies to mitigate the risks associated with high-temperature contact fatigue. This directly addresses **CO1 (K2)** and **CO4 (K2)**.

### 4.1. Material Selection

*   **High-Temperature Alloys:** Utilize materials specifically designed for high-temperature service, such as:
    *   **Superalloys:** Nickel-based and cobalt-based superalloys offer excellent strength, creep resistance, and oxidation resistance at very high temperatures.
    *   **Ceramics and Ceramic Matrix Composites (CMCs):** These materials have very high melting points and excellent high-temperature strength and oxidation resistance, but can be brittle.
    *   **Refractory Metals:** Tungsten, molybdenum, and niobium offer very high melting points but can have issues with oxidation and brittleness at lower high temperatures.
*   **Coatings and Surface Treatments:** Apply protective coatings (e.g., thermal barrier coatings, ceramic coatings, diffusion coatings) to improve oxidation resistance, reduce friction, and enhance fatigue life.

### 4.2. Design Modifications

*   **Reduced Stress Concentrations:** Minimize sharp corners, notches, and surface defects, which can act as initiation sites for fatigue cracks, especially at high temperatures where oxidation can exacerbate these features.
*   **Lubrication:** While challenging at very high temperatures, appropriate lubrication can reduce friction, wear, and the severity of surface fatigue. Specialized high-temperature lubricants or solid lubricants may be required.
*   **Thermal Management:** Design for effective heat dissipation to keep operating temperatures as low as possible. This might involve cooling channels or heat shields.
*   **Geometry Optimization:** Optimize the geometry of contacting components to distribute stress more evenly and reduce peak contact pressures.

### 4.3. Life Prediction and Analysis

*   **High-Temperature Fatigue Data:** Use S-N curves and fatigue crack growth rate data that are specific to the operating temperature. Generic room-temperature data will be insufficient.
*   **Creep-Fatigue Life Prediction Models:** Employ models that account for the combined effects of creep and fatigue.
*   **Finite Element Analysis (FEA):** Conduct FEA to predict stress and temperature distributions, and potentially use it in conjunction with fatigue life prediction software.

**Reference:** Jack A. Collins (2013) in "Failure of Materials in Mechanical Design" emphasizes the importance of considering environmental factors, including temperature, in the design process and provides methods for fatigue life prediction under various conditions.

---

## 5. Practice Questions and Answers

These questions are designed to test understanding of the concepts covered and align with the specified course outcomes.

**Question 1 (CO4 - K2):** Explain how creep can contribute to contact fatigue failure in a component operating at high temperatures, even if the applied stresses are below the material's yield strength at that temperature.

**Answer:** At high temperatures, even stresses below the yield strength can cause time-dependent deformation known as creep. In contact fatigue, this creep can lead to:
*   **Surface Distortion:** The contacting surfaces can deform permanently under repeated loading, altering the contact geometry and increasing stress concentrations.
*   **Subsurface Void Formation:** Creep can cause the formation of vacancies and voids in the subsurface material. These voids can coalesce, forming micro-cracks that act as initiation sites for fatigue failure.
*   **Creep-Fatigue Interaction:** Creep and fatigue cycles can interact synergistically, where creep processes facilitate crack initiation and growth under cyclic loading, leading to a reduced overall fatigue life compared to operation at lower temperatures.

**Question 2 (CO1 - K2):** Describe two significant ways in which increasing temperature affects the mechanical properties of a metal relevant to contact fatigue analysis.

**Answer:**
1.  **Reduced Strength (Yield and Tensile):** As temperature increases, atomic vibrations become more energetic, weakening the interatomic bonds. This leads to a decrease in the stress required to initiate plastic deformation (yield strength) and the maximum stress the material can withstand before failure (tensile strength). In contact fatigue, this means the material can plastically deform more easily under contact loads, leading to surface damage and potentially cracking.
2.  **Reduced Fatigue Strength/Endurance Limit:** Elevated temperatures often decrease a material's resistance to cyclic loading. This is due to factors like accelerated oxidation at the surface, which can create stress-raising defects, and the potential for creep-fatigue interaction. Components will likely have a shorter fatigue life at higher operating temperatures.

**Question 3 (CO3 - K3):** A component made of a ferritic steel is operating at room temperature, just above its DBTT. If the operating temperature increases to well above its DBTT, how would you expect the fracture toughness of the material to change, and what implications does this have for contact fatigue analysis?

**Answer:**
As the operating temperature increases from just above the DBTT to well above it, the ferritic steel transitions from a relatively brittle to a more ductile state. This transition typically results in a **significant increase in fracture toughness ($K_{Ic}$)**.

**Implications for contact fatigue analysis:**
*   **Increased Resistance to Crack Propagation:** Higher fracture toughness means the material is more resistant to the propagation of existing cracks under cyclic stress. This could potentially extend the fatigue life.
*   **Shift in Dominant Failure Mechanism:** While fracture toughness increases, it's important to remember that other high-temperature effects like creep, oxidation, and reduced yield/fatigue strength might become dominant failure mechanisms. Therefore, relying solely on the increased fracture toughness without considering other factors could be misleading. The analysis needs to consider the combined effect of all temperature-dependent properties.

**Question 4 (CO4 - K2):** Discuss the role of oxidation in accelerating contact fatigue failure at elevated temperatures.

**Answer:** Oxidation can significantly accelerate contact fatigue failure at elevated temperatures through several mechanisms:
*   **Surface Roughening:** Formation of oxide scales on the surface can lead to irregular surfaces. During contact, these asperities can deform and break, creating new stress concentrations and initiating cracks.
*   **Crack Initiation and Growth:** Oxide layers can be brittle and prone to cracking. Pre-existing micro-cracks can be readily penetrated by oxygen, forming internal oxide layers that weaken the material and promote crack growth. New oxide cracks can also form at the surface under contact stresses.
*   **Embrittlement of Surface Layer:** In some cases, the oxidation process can lead to the embrittlement of the surface material, making it more susceptible to brittle fracture under cyclic contact loading.
*   **Loss of Material:** Continuous oxidation can lead to a reduction in the effective cross-sectional area, increasing the nominal stresses in the remaining material.

**Question 5 (CO1 - K2, CO4 - K2):** You are designing a component that will experience cyclic contact loading at 500°C. What are the key material properties you need to consider and how do they typically change at this temperature compared to room temperature?

**Answer:**
At 500°C, the following key material properties need to be considered, and they typically change as follows compared to room temperature:

*   **Yield Strength and Tensile Strength:** Significantly **decrease**. This means the material can plastically deform more easily under the same contact load.
*   **Elastic Modulus:** **Decreases**. The material becomes less stiff, leading to potentially larger deformations and altered stress distributions.
*   **Fatigue Strength/Endurance Limit:** **Decreases**. The material can withstand fewer cycles or lower stress levels before fatigue failure.
*   **Hardness:** **Decreases**, mirroring the reduction in yield strength.
*   **Creep Resistance:** Becomes a critical factor. While not a property that "changes" like strength, the *onset* and *rate* of creep become significant. At 500°C, many materials that are creep-resistant at room temperature will exhibit noticeable creep deformation under sustained load, especially when combined with cyclic loading.
*   **Oxidation/Corrosion Resistance:** Becomes crucial. The rate of oxidation and corrosion increases significantly with temperature, potentially degrading the surface and initiating cracks.
*   **Fracture Toughness:** The change is material-dependent. For ferritic steels, it generally increases. For some ceramics or other alloys, it might decrease.

---

## 6. Summary and Important Points to Remember

*   **Temperature is a critical factor:** High temperatures significantly alter material behavior, impacting their resistance to contact fatigue.
*   **Strength and stiffness decrease:** Yield strength, tensile strength, and elastic modulus generally reduce with increasing temperature.
*   **Fatigue life is reduced:** Fatigue strength and endurance limits are lowered due to mechanisms like oxidation and creep-fatigue interaction.
*   **Creep becomes significant:** Time-dependent plastic deformation (creep) can cause surface distortion and subsurface damage, contributing to fatigue failure.
*   **Oxidation is a major concern:** Surface oxidation can lead to roughening, crack initiation, and embrittlement, accelerating fatigue.
*   **Microstructural evolution:** High temperatures can cause detrimental microstructural changes like grain growth and precipitate coarsening.
*   **Material selection is paramount:** Choose materials specifically designed for high-temperature service and consult high-temperature property data.
*   **Design must account for temperature effects:** Minimize stress concentrations, consider thermal management, and use appropriate lubrication.
*   **Life prediction models should include temperature:** Use high-temperature fatigue data and consider creep-fatigue interaction models for accurate life assessments.

**Reference Check:** This study guide has incorporated concepts from all the provided textbooks, particularly emphasizing failure mechanisms and design implications as discussed in Jones, ASM Handbook, and Collins. Fracture mechanics principles from Prashant Kumar are implicitly relevant when discussing crack initiation and propagation influenced by temperature. The content directly addresses the learning outcomes and aligns with the knowledge levels outlined for the course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
