---
title: "Mechanical"
subject: "METAL ADDITIVE MANUFACTURING"
module: "Module 3: Metal AM physics and processes"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464581"
status: "completed"
scrapedAt: "2026-05-20T18:21:48.842Z"
---
# METAL ADDITIVE MANUFACTURING: Module 3: Metal AM Physics and Processes - Mechanical Properties

This module delves into the mechanical aspects of Metal Additive Manufacturing (MAM), exploring how the unique physics and processes influence the material's behavior and performance. We will connect these principles to fundamental MAM techniques and their metallurgical underpinnings.

---

## Module 3: Metal AM Physics and Processes - Mechanical Properties

### 1. Introduction to Mechanical Properties in MAM

Metal Additive Manufacturing (MAM) processes involve building parts layer by layer using metallic materials. This additive nature, combined with the high-energy input (laser, electron beam) and rapid solidification, leads to unique microstructural features and, consequently, distinct mechanical properties compared to traditional wrought or cast metals. Understanding these properties is crucial for designing functional and reliable AM components.

**Key Concepts:**

*   **Mechanical Properties:** Quantifiable characteristics of a material that describe its response to applied forces. These include strength, hardness, ductility, toughness, fatigue resistance, and creep resistance.
*   **Wrought vs. AM Materials:** Traditional manufacturing methods often involve deformation (e.g., rolling, forging) which homogenizes the microstructure and refines grain structure, leading to predictable mechanical properties. MAM processes bypass bulk deformation, resulting in microstructures influenced by thermal cycles and solidification rates.

**Learning Outcomes Covered:**

*   Understanding the influence of MAM physics on mechanical properties.
*   Relating mechanical properties to the MAM process.

**Course Outcomes Alignment:**

*   **CO1: To study the basic Metal Additive Manufacturing Techniques (Knowledge Level: K2)** - Understanding the mechanical implications of different AM techniques.
*   **CO3: To familiarize the metallurgy of MAM Processes. (Knowledge Level: K3)** - Connecting microstructural features to mechanical behavior.

---

### 2. Key Mechanical Properties and Their Manifestation in MAM

This section explores critical mechanical properties and how MAM processes influence them.

#### 2.1. Tensile Strength (Yield Strength, Ultimate Tensile Strength)

*   **Definition:** The maximum stress a material can withstand before it begins to deform permanently (yield strength) and before it fractures (ultimate tensile strength).
*   **MAM Influence:**
    *   **Fine Grain Structure:** The rapid solidification rates inherent in many MAM processes (e.g., Powder Bed Fusion - PBF) can lead to finer grain sizes. Finer grains generally increase yield strength according to the Hall-Petch relationship ($\sigma_y = \sigma_0 + k_y d^{-1/2}$), where $\sigma_y$ is yield strength, $\sigma_0$ is a material constant, $k_y$ is the Hall-Petch coefficient, and $d$ is the average grain diameter.
    *   **Porosity:** Internal defects such as pores, lack of fusion, and keyholing can act as stress concentrators, significantly reducing tensile strength. The presence and size of porosity are highly dependent on process parameters (laser power, scan speed, layer thickness, powder characteristics).
    *   **Anisotropy:** Due to the layer-by-layer building, mechanical properties can vary depending on the build direction. This is often attributed to preferential grain growth and residual stresses. Tensile properties are typically lower in the inter-layer (z-axis) direction compared to the in-plane (x-y axis) directions.
    *   **Solidification Substructures:** The rapid cooling can result in cellular or dendritic solidification substructures within grains, which can also influence strength.

*   **Example:** In Laser Powder Bed Fusion (LPBF) of stainless steel, optimizing parameters to minimize porosity can lead to tensile strengths comparable to or exceeding wrought equivalents. However, build orientation can significantly affect elongation.

*   **From Textbooks:**
    *   *Additive Manufacturing of Metals* (Yang & Michaleris) discusses how process parameters directly influence porosity levels and consequently tensile properties. They emphasize the importance of understanding the relationship between energy density and defect formation.
    *   *Additive Manufacturing Technologies* (Gibson, Rosen, Stucker, Khorasani) details the impact of thermal history on grain size and morphology, which are direct contributors to tensile strength.

**Important Points to Remember:**

*   Porosity is a primary enemy of tensile strength in MAM.
*   Anisotropy due to build direction is a common characteristic.
*   Fine grain size can be a benefit for strength.

#### 2.2. Ductility (Elongation, Reduction in Area)

*   **Definition:** The ability of a material to deform plastically before fracturing. Ductility is often measured by percentage elongation at fracture and percentage reduction in area at fracture.
*   **MAM Influence:**
    *   **Porosity:** Similar to strength, porosity acts as a defect that can initiate cracks and reduce the material's ability to deform plastically, thus lowering ductility.
    *   **Grain Boundaries and Precipitates:** The presence of brittle phases or inclusions at grain boundaries can hinder dislocation movement and reduce ductility. The rapid cooling can sometimes lead to non-equilibrium phases.
    *   **Residual Stresses:** High residual stresses can reduce the strain the material can accommodate before fracture.
    *   **Anisotropy:** Ductility often exhibits significant anisotropy, with lower values in the build direction due to inter-layer weaknesses or preferential crack propagation.

*   **Example:** Parts built with significant lack of fusion will exhibit very low ductility, fracturing prematurely with little plastic deformation. Post-processing heat treatments are often employed to improve ductility.

*   **From Textbooks:**
    *   *Additive Manufacturing of High-Performance Metals and Alloys* (Pederson, Sokolov, Ma) highlights that achieving high ductility in AM parts requires careful control over microstructure, often through targeted post-processing like hot isostatic pressing (HIP) to eliminate porosity and annealing to relieve stresses and spheroidize precipitates.

**Important Points to Remember:**

*   Ductility is often more sensitive to defects than tensile strength.
*   Anisotropy in ductility can be more pronounced than in strength.
*   Post-processing is critical for achieving good ductility.

#### 2.3. Hardness

*   **Definition:** The resistance of a material to permanent indentation or scratching.
*   **MAM Influence:**
    *   **Grain Size:** Finer grain sizes generally lead to higher hardness (Hall-Petch relationship also applies to hardness).
    *   **Phase Composition:** The presence of harder phases (e.g., martensite in steels, precipitation hardening phases) can significantly increase hardness. The rapid cooling rates in MAM can sometimes retain metastable phases or promote precipitation.
    *   **Porosity:** While porosity reduces strength and ductility, its direct impact on hardness is less pronounced than on tensile properties, as hardness tests involve localized plastic deformation. However, large pores can still lead to lower bulk hardness measurements.
    *   **Work Hardening:** The process itself, especially with some scan strategies, can induce some level of work hardening.

*   **Example:** Ti-6Al-4V alloys produced by LPBF often exhibit higher hardness than their wrought counterparts due to finer grain structures and the potential retention of metastable alpha-prime ($\alpha'$) martensite.

*   **From Textbooks:**
    *   *Additive Manufacturing of Metals* (Yang & Michaleris) emphasizes that hardness is a good indicator of microstructural changes and can be readily measured to assess process consistency.

**Important Points to Remember:**

*   Hardness often correlates with fine grain size.
*   Hardness can be a useful metric for process quality control.

#### 2.4. Toughness (Impact Toughness, Fracture Toughness)

*   **Definition:** The ability of a material to absorb energy and deform plastically before fracturing. Impact toughness is measured using impact tests (e.g., Charpy, Izod), while fracture toughness quantifies resistance to crack propagation.
*   **MAM Influence:**
    *   **Porosity and Defects:** These are critical factors reducing toughness as they act as initiation sites for fracture.
    *   **Microstructural Features:** The morphology of inclusions, grain boundaries, and phase distributions significantly impacts toughness. Brittle inclusions or unfavorable grain boundary structures can lead to low toughness.
    *   **Residual Stresses:** High residual stresses can reduce the energy required to propagate a crack.
    *   **Anisotropy:** Toughness is often anisotropic. In the build direction, cracks can propagate along inter-layer interfaces, leading to lower toughness.

*   **Example:** For applications requiring high fracture toughness, such as aerospace components subjected to fatigue and stress concentrations, AM parts may require extensive post-processing to mitigate defects and refine the microstructure to improve toughness.

*   **From Textbooks:**
    *   *Additive Manufacturing Technologies* (Gibson, Rosen, Stucker, Khorasani) highlights that achieving good toughness in MAM components often requires careful control of thermal cycles and post-processing treatments to minimize brittle phases and defects.

**Important Points to Remember:**

*   Toughness is highly sensitive to internal defects.
*   Anisotropy in toughness can be a significant design consideration.
*   Microstructural control is paramount for good toughness.

#### 2.5. Fatigue Strength and Life

*   **Definition:** The ability of a material to withstand repeated cycles of stress without fracturing. Fatigue strength is the stress level below which a material can endure an infinite number of cycles, while fatigue life is the number of cycles to failure at a given stress level.
*   **MAM Influence:**
    *   **Surface Roughness:** AM parts often have inherent surface roughness (e.g., "stair-stepping" effect from layers, powder adhesion). Surface imperfections act as stress risers, significantly initiating fatigue cracks and reducing fatigue life. This is often the most critical factor limiting fatigue performance.
    *   **Internal Defects (Porosity, Lack of Fusion):** These internal flaws serve as crack initiation sites, dramatically reducing fatigue life.
    *   **Residual Stresses:** Tensile residual stresses can reduce fatigue life by promoting crack initiation and growth. Compressive residual stresses can enhance it.
    *   **Microstructure:** Grain size, phase distribution, and presence of brittle inclusions all influence fatigue crack initiation and propagation.
    *   **Anisotropy:** Fatigue properties can be anisotropic, with fatigue life often being lower in the build direction due to the inherent anisotropy in defect distribution and microstructure.

*   **Example:** An LPBF part used in a rotating shaft application would be highly susceptible to fatigue failure if the surface is not properly machined or polished to remove surface asperities.

*   **From Textbooks:**
    *   *Additive Manufacturing of Metals* (Yang & Michaleris) dedicates significant attention to fatigue performance, emphasizing that surface finish and internal defects are the primary drivers of reduced fatigue life in AM components. They discuss strategies like post-machining and surface polishing to improve fatigue properties.
    *   *Additive Manufacturing of High-Performance Metals and Alloys* (Pederson, Sokolov, Ma) also stresses the importance of surface integrity and post-processing for achieving competitive fatigue performance, often comparing AM fatigue behavior to wrought materials.

**Important Points to Remember:**

*   **Surface finish is paramount for fatigue life.**
*   Internal defects are major detractors from fatigue performance.
*   Residual stresses play a significant role.
*   Anisotropy in fatigue is common.

#### 2.6. Creep Resistance

*   **Definition:** The ability of a material to resist deformation under sustained load at elevated temperatures.
*   **MAM Influence:**
    *   **Grain Structure:** Fine grain sizes, often seen in MAM, can lead to higher creep rates at elevated temperatures due to grain boundary sliding. However, the presence of precipitates can pin grain boundaries and improve creep resistance.
    *   **Porosity:** Porosity can accelerate creep by providing pathways for diffusion and void coalescence.
    *   **Phase Stability:** The presence of non-equilibrium phases, which might form during rapid cooling, can be unstable at elevated temperatures, potentially transforming and affecting creep behavior.
    *   **Dislocations:** The high dislocation density in some AM materials can influence creep mechanisms.

*   **Example:** For high-temperature applications (e.g., turbine blades), achieving good creep resistance in AM parts requires careful microstructural control, often involving post-build heat treatments to promote precipitate formation and grain stabilization.

*   **From Textbooks:**
    *   *Additive Manufacturing of Metals* (Yang & Michaleris) discusses that the microstructural characteristics imparted by MAM can lead to different creep mechanisms compared to wrought materials, requiring specific characterization.

**Important Points to Remember:**

*   Grain boundary sliding is a key mechanism influenced by grain size at high temperatures.
*   Precipitation hardening is often crucial for creep resistance.
*   Phase stability at operating temperatures is critical.

---

### 3. Factors Influencing Mechanical Properties in MAM

This section details the specific factors stemming from the MAM process that dictate the mechanical performance of the final part.

#### 3.1. Process Parameters

*   **Laser Power/Beam Power:** Higher power can lead to deeper penetration and potentially larger melt pools, affecting grain size and defect formation.
*   **Scan Speed:** Faster scan speeds generally result in smaller melt pools and faster cooling rates, promoting finer grain structures but can also lead to lack of fusion if too fast.
*   **Layer Thickness:** Thicker layers can lead to higher thermal gradients and potentially larger defects.
*   **Hatch Spacing/Scan Strategy:** Overlap between scan paths is crucial for achieving full fusion and minimizing lack of fusion defects. Different scan strategies (e.g., island scanning, unidirectional scanning) can influence residual stress distribution and microstructure.
*   **Powder Properties:** Powder size distribution, morphology, and flowability affect melt pool dynamics and defect formation. Spherical powders with good flowability are generally preferred.
*   **Build Atmosphere:** Inert gases (Argon, Helium) are used to prevent oxidation and contamination.

**Learning Outcomes Covered:**

*   Understanding how MAM methods (physics and processes) control mechanical properties.

**Course Outcomes Alignment:**

*   **CO2: To understand the features and control of various MAM Methods (Knowledge Level: K2)** - This is directly addressed by understanding how parameters control microstructural outcomes and thus mechanical properties.
*   **CO3: To familiarize the metallurgy of MAM Processes. (Knowledge Level: K3)** - Process parameters dictate the thermal history, which is a core metallurgical factor.

#### 3.2. Microstructure

*   **Grain Size and Morphology:** As discussed, fine grains generally increase strength and hardness but can decrease ductility and creep resistance. Grain shape (equiaxed, columnar) also plays a role.
*   **Porosity:** Any type of porosity (gas porosity, lack of fusion, keyholing) degrades mechanical properties.
*   **Inclusions:** Non-metallic inclusions (e.g., oxides, carbides) can act as stress concentrators.
*   **Phase Distribution:** The presence of desired (e.g., strengthening precipitates) or undesired (e.g., brittle intermetallics) phases significantly impacts properties.
*   **Dislocation Density:** Higher dislocation densities can contribute to work hardening and increased strength.

**Learning Outcomes Covered:**

*   Connecting microstructural outcomes to mechanical behavior.

**Course Outcomes Alignment:**

*   **CO3: To familiarize the metallurgy of MAM Processes. (Knowledge Level: K3)** - This is the core of understanding how the material is structured and how that structure dictates performance.

#### 3.3. Residual Stresses

*   **Origin:** Developed due to non-uniform thermal expansion and contraction during the layer-by-layer solidification and cooling process.
*   **Impact:** Can be tensile or compressive. Tensile residual stresses can reduce tensile strength, ductility, and fatigue life, and can lead to distortion or cracking during the build. Compressive residual stresses can be beneficial.
*   **Mitigation:** Stress relief heat treatments, controlled cooling strategies, and in-situ monitoring can help manage residual stresses.

**Learning Outcomes Covered:**

*   Understanding the physics of thermal cycling and its impact.

**Course Outcomes Alignment:**

*   **CO3: To familiarize the metallurgy of MAM Processes. (Knowledge Level: K3)** - Thermal history is intimately linked to residual stress formation.

#### 3.4. Surface Finish and Geometry

*   **Surface Roughness:** As mentioned, critical for fatigue performance. Causes stress concentrations.
*   **Geometric Features:** Sharp corners, thin walls, and overhangs can all be sources of stress concentrations and can be prone to defects during manufacturing.

**Learning Outcomes Covered:**

*   Connecting design features and manufacturing artifacts to mechanical performance.

**Course Outcomes Alignment:**

*   **CO1: To study the basic Metal Additive Manufacturing Techniques (Knowledge Level: K2)** - Understanding the inherent surface characteristics of different techniques.

---

### 4. Post-Processing for Mechanical Property Enhancement

MAM parts often require post-processing to achieve desired mechanical properties and to mitigate inherent process-induced issues.

#### 4.1. Heat Treatments

*   **Annealing/Stress Relief:** Reduces residual stresses, softens the material, and can spheroidize precipitates, improving ductility and toughness.
*   **Solution Treatment:** Dissolves secondary phases into the matrix, preparing for precipitation hardening.
*   **Precipitation Hardening (Age Hardening):** Develops fine, dispersed precipitates within the matrix to increase strength and hardness.
*   **Isothermal Annealing:** Can be used to control grain growth and phase transformations.

#### 4.2. Hot Isostatic Pressing (HIP)

*   **Process:** Subjecting the part to high pressure and temperature simultaneously.
*   **Benefits:** Effectively closes internal voids and porosity, significantly improving tensile strength, ductility, and fatigue life. Can also relieve some residual stresses.

#### 4.3. Surface Finishing

*   **Machining:** Essential for achieving critical tolerances and removing rough AM surfaces. Critical for improving fatigue life.
*   **Polishing (Mechanical, Electropolishing):** Reduces surface roughness, thereby improving fatigue performance.
*   **Surface Treatments (Shot Peening, Laser Peening):** Can induce compressive residual stresses on the surface, enhancing fatigue resistance.

**Learning Outcomes Covered:**

*   How to optimize mechanical properties after the AM process.

**Course Outcomes Alignment:**

*   **CO2: To understand the features and control of various MAM Methods (Knowledge Level: K2)** - Understanding how post-processing complements the initial AM method.
*   **CO3: To familiarize the metallurgy of MAM Processes. (Knowledge Level: K3)** - Heat treatments directly alter the metallurgy and thus mechanical properties.

---

### 5. Design Considerations for Mechanical Performance

Designing for MAM requires an understanding of how process limitations and material behaviors interact.

*   **Orientation:** Designing the part orientation during the build process to minimize critical stress concentrations and align potential anisotropy favorably with applied loads.
*   **Feature Size:** Avoiding overly thin sections or sharp re-entrant corners that are prone to defects or stress concentrations.
*   **Support Structures:** Designing effective support structures that minimize distortion and are easily removable, while also considering their potential impact on the surface finish of critical areas.
*   **Functional Grading:** In some advanced applications, AM can be used to create functionally graded materials where composition and microstructure (and thus properties) vary across the part.

**Learning Outcomes Covered:**

*   Integrating knowledge of MAM processes and mechanical properties into design.

**Course Outcomes Alignment:**

*   **CO1: To study the basic Metal Additive Manufacturing Techniques (Knowledge Level: K2)** - Understanding the limitations and capabilities of AM techniques from a design perspective.
*   **CO4: To study the relation between reverse engineering and additive manufacturing. (Knowledge Level: K2)** - While not directly covered, the ability to design for AM with specific mechanical requirements is a prerequisite for successful implementation in a reverse engineering workflow where existing part performance needs to be replicated or improved.

---

### 6. Practice Questions and Answers

**Question 1:** How does the fine grain size, often achieved in Metal Additive Manufacturing, typically affect the yield strength and hardness of a material?

**Answer:** Fine grain size generally increases both yield strength and hardness according to the Hall-Petch relationship. Smaller grains present more grain boundaries, which act as barriers to dislocation movement, making it harder for the material to deform plastically (increasing yield strength) and resist indentation (increasing hardness).

**Question 2:** What is the primary reason why fatigue life is often significantly reduced in as-built AM parts compared to their wrought counterparts?

**Answer:** The primary reason is surface roughness. The "stair-stepping" effect from the layer-by-layer building process, along with powder adhesion, creates surface asperities that act as stress concentration sites, leading to early fatigue crack initiation. Internal defects like porosity also contribute significantly.

**Question 3:** Which post-processing technique is most effective at eliminating internal porosity in AM parts and what mechanical property improvement does it primarily target?

**Answer:** Hot Isostatic Pressing (HIP) is the most effective post-processing technique for eliminating internal porosity. This primarily targets the improvement of tensile strength, ductility, and fatigue life, as porosity significantly degrades these properties.

**Question 4:** Explain the phenomenon of anisotropy in MAM and how it relates to mechanical properties. Provide an example.

**Answer:** Anisotropy in MAM refers to the directional dependence of material properties. It arises from the layer-by-layer building process, leading to preferential grain growth along the build direction and an anisotropic distribution of defects (like lack of fusion or internal stresses). For example, tensile strength and ductility can be lower in the build direction (z-axis) compared to the in-plane directions (x-y axes) due to weaker inter-layer bonding.

**Question 5:** If a critical component produced by MAM is intended for a high-temperature, load-bearing application, what specific mechanical property is of most concern, and what microstructural factors are important for it?

**Answer:** The most critical property is creep resistance. Important microstructural factors include grain size (fine grains can lead to more grain boundary sliding, but pinning by precipitates can improve resistance), the presence and stability of strengthening precipitates, and the absence of porosity that can accelerate creep damage.

---

### 7. Key Takeaways and Summary

*   **Process Dictates Properties:** The fundamental physics of MAM processes directly influence the resulting mechanical properties through control over microstructure, defect formation, and residual stresses.
*   **Porosity is Critical:** Internal defects like porosity and lack of fusion are major detractors from tensile strength, ductility, toughness, and fatigue life.
*   **Surface Finish Matters:** Surface roughness is the dominant factor limiting fatigue performance in as-built AM parts.
*   **Anisotropy is Common:** Mechanical properties can vary significantly depending on the build orientation.
*   **Post-Processing is Essential:** Heat treatments, HIP, and surface finishing are crucial for achieving desired mechanical performance and reliability in AM components.
*   **Design for AM:** Understanding these mechanical considerations is vital for designing parts that leverage the capabilities of MAM while mitigating its limitations.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
