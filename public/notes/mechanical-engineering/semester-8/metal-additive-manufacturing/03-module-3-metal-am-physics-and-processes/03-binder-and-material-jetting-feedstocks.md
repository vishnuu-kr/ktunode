---
title: "Binder and Material Jetting Feedstocks"
subject: "METAL ADDITIVE MANUFACTURING"
module: "Module 3: Metal AM physics and processes"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf480446457f"
status: "completed"
scrapedAt: "2026-05-20T18:21:47.431Z"
---
# METAL ADDITIVE MANUFACTURING

## Module 3: Metal AM Physics and Processes

### Topic: Binder and Material Jetting Feedstocks

---

### 1. Introduction to Binder and Material Jetting Processes

Binder Jetting and Material Jetting are two distinct Metal Additive Manufacturing (MAM) processes that share a common characteristic: they utilize a liquid or semi-liquid feedstock that is selectively deposited to build a part layer by layer. Unlike powder bed fusion (PBF) methods where the entire powder bed is involved, these processes precisely deposit material only where it's needed.

*   **Binder Jetting (BJT):** This process involves depositing a liquid binding agent onto a bed of powder, selectively binding the powder particles together. The unbound powder acts as a support structure, allowing for complex geometries without the need for additional supports. After printing, the "green" part is typically post-processed through sintering or infiltration to achieve its final density and mechanical properties.
    *   **Knowledge Level (CO1, K2):** Understanding the basic principle of selectively binding powder particles.
    *   **Knowledge Level (CO2, K2):** Recognizing BJT as a MAM method with distinct features compared to PBF.
    *   **Reference:** Gibson, I., Rosen, D. W., & Stucker, B. (2015). *Additive Manufacturing Technologies: 3D Printing, Rapid Prototyping, and Direct Digital Manufacturing* (2nd ed.). Springer. (Likely discusses BJT in detail as a key MAM technology).

*   **Material Jetting (MJ):** This process involves the precise deposition of droplets of molten metal or metal-infused material onto a build platform. Similar to inkjet printing, it uses print heads to jet these droplets, building the part layer by layer. These processes often require a curing or sintering step to consolidate the jetted material.
    *   **Knowledge Level (CO1, K2):** Understanding the basic principle of depositing material in droplet form.
    *   **Knowledge Level (CO2, K2):** Recognizing MJ as a MAM method with distinct features compared to BJT and PBF.
    *   **Reference:** Yang, L., & Michaleris, P. (2017). *Additive Manufacturing of Metals: The Technology, Materials, Design and Production*. Springer. (Likely covers various MAM methods including MJ and their feedstock requirements).

---

### 2. Binder Jetting Feedstocks

The feedstock in Binder Jetting is primarily comprised of **metal powder** and a **liquid binding agent**. The properties of both components are critical to the success of the printing process and the quality of the final part.

#### 2.1. Metal Powder Characteristics

The metal powder used in Binder Jetting is similar to that used in Powder Bed Fusion, but with some key differences in particle size distribution and morphology due to the different consolidation mechanisms.

*   **Material Types:**
    *   **Stainless Steels:** 316L, 17-4 PH are common due to their good mechanical properties and availability.
    *   **Tool Steels:** H13, M2 for wear resistance and hardness.
    *   **Nickel Alloys:** Inconel 625, 718 for high-temperature applications.
    *   **Bronze:** For casting patterns and decorative applications.
    *   **Other Metals:** Aluminum alloys, titanium alloys (though less common in traditional BJT than PBF due to binder interactions and sintering challenges).
    *   **Reference:** Yang, L., & Michaleris, P. (2017). *Additive Manufacturing of Metals: The Technology, Materials, Design and Production*. Springer. (Will likely provide detailed information on suitable metal powders for various MAM processes).

*   **Particle Size and Distribution:**
    *   **Typical Range:** Generally in the **micrometer range (10-50 µm)**.
    *   **Importance:** A controlled particle size distribution is crucial for achieving good packing density and flowability in the powder bed.
        *   **Fine particles:** Can lead to better green strength but may cause issues with print head clogging or binder distribution.
        *   **Coarse particles:** Can improve flowability but might result in larger pores and lower green density.
        *   **Optimized distribution:** A mixture of fine and coarse particles is often used to achieve a balance between packing density and flowability. This creates a more uniform and dense powder bed.
    *   **Reference:** Gibson, I., Rosen, D. W., & Stucker, B. (2015). *Additive Manufacturing Technologies: 3D Printing, Rapid Prototyping, and Direct Digital Manufacturing* (2nd ed.). Springer. (Likely discusses the impact of powder characteristics on printability).

*   **Particle Morphology:**
    *   **Spherical particles:** Preferred for good flowability and packing density. However, irregular or angular particles can sometimes be beneficial for green strength due to mechanical interlocking.
    *   **Reference:** Pederson, R., Sokolov, M. S., & Ma, C. (2019). *Additive Manufacturing of High-Performance Metals and Alloys*. IntechOpen. (May explore how morphology influences sintering behavior).

*   **Powder Flowability:**
    *   **Definition:** The ease with which powder can be spread evenly across the build platform.
    *   **Importance:** Good flowability ensures consistent layer thickness and a well-packed powder bed, which directly impacts the printed part's dimensional accuracy and density.
    *   **Factors affecting flowability:** Particle size distribution, particle shape, surface roughness, and electrostatic charges.

*   **Powder Packing Density:**
    *   **Definition:** The fraction of the total volume occupied by the solid powder particles.
    *   **Importance:** Higher packing density leads to denser green parts, which translates to lower shrinkage and less porosity after sintering.

#### 2.2. Liquid Binding Agent Characteristics

The binder is responsible for holding the powder particles together after deposition. Its properties significantly influence the green part's strength and the subsequent post-processing.

*   **Types of Binders:**
    *   **Organic Binders:** Water-based or solvent-based solutions containing polymers (e.g., polyvinyl alcohol - PVA, polyethylene glycol - PEG). These are the most common type.
    *   **Ceramic Binders:** Used for certain ceramic or composite applications, often requiring specific curing methods.
    *   **Inorganic Binders:** Less common for metal AM, but can be used in composite materials.

*   **Key Binder Properties:**
    *   **Viscosity:** Crucial for droplet formation and deposition accuracy.
        *   Too low viscosity: Droplets can spread excessively, leading to poor resolution.
        *   Too high viscosity: Can cause print head clogging and inconsistent droplet ejection.
        *   **Reference:** Gibson, I., Rosen, D. W., & Stucker, B. (2015). *Additive Manufacturing Technologies: 3D Printing, Rapid Prototyping, and Direct Digital Manufacturing* (2nd ed.). Springer. (Will likely discuss fluid dynamics in inkjet processes).
    *   **Surface Tension:** Affects droplet formation and wetting of the powder particles.
    *   **Wetting Behavior:** The binder should effectively wet the powder particles to ensure good adhesion.
    *   **Evaporation Rate:** Influences drying time and potential for binder bridging between adjacent powder particles.
    *   **Binder Content:** The amount of binder deposited per unit volume of powder. An optimal balance is needed to achieve sufficient green strength without compromising the sintering process. Too much binder can lead to excessive carbon buildup during sintering.
    *   **Curing/Drying Mechanism:** Binders often need to be dried or cured to solidify and bind the powder particles. This can involve evaporation of the solvent/water or chemical cross-linking.

*   **Binder-to-Powder Ratio:**
    *   The optimal ratio is determined by the specific powder characteristics and the desired green strength. It dictates the mechanical integrity of the "green" part before post-processing.

*   **Post-processing Considerations:**
    *   The binder is typically burned out during the sintering process. The binder composition and burnout temperature are critical to avoid excessive porosity or degradation of the metal part.

---

### 3. Material Jetting Feedstocks

Material Jetting processes for metals are often variations of droplet-based printing. The feedstock can be in various forms, including molten metal alloys, metal-infused polymers, or metal slurries.

#### 3.1. Molten Metal Jetting

This is a more direct approach where molten metal is jetted.

*   **Material Types:**
    *   **Low Melting Point Alloys:** Typically **solders** (tin-lead, tin-silver), **low-melting point solders** (e.g., Wood's metal), and some **aluminum alloys**.
    *   **Reference:** Yang, L., & Michaleris, P. (2017). *Additive Manufacturing of Metals: The Technology, Materials, Design and Production*. Springer. (Might discuss the limitations of jetting higher melting point metals directly).

*   **Feedstock Characteristics:**
    *   **Melting Point:** Must be low enough to be handled by the jetting equipment without significant degradation or volatilization.
    *   **Viscosity at Jetting Temperature:** Critical for droplet formation and trajectory. Similar to binder viscosity, it dictates print quality.
    *   **Surface Tension:** Affects droplet formation and spread.
    *   **Wetting Behavior:** How the molten metal interacts with the build platform or previously deposited layers.
    *   **Thermal Expansion Coefficient:** Important for managing stresses during cooling.
    *   **Oxidation Tendency:** High melting point alloys tend to oxidize more readily, requiring inert atmospheres.

*   **Process Example:** Some systems deposit droplets of molten solder to create complex solder joints or structures.

#### 3.2. Metal-Infused Polymer Jetting

This approach uses a polymer as the primary carrier for metal particles.

*   **Feedstock Composition:**
    *   **Polymer Matrix:** Thermoplastics or photocurable resins.
    *   **Metal Particles:** Fine metal powders (similar to BJT but may be smaller for better dispersion).
    *   **Additives:** Dispersants, rheology modifiers, curing agents, etc.

*   **Key Feedstock Properties:**
    *   **Metal Loading:** The concentration of metal particles in the polymer matrix. High loading is desirable for metallic properties but can affect printability.
    *   **Particle Dispersion:** Uniform distribution of metal particles within the polymer is crucial for consistent material properties and to avoid clogging.
    *   **Viscosity:** Must be suitable for jetting. The presence of solid particles generally increases viscosity.
    *   **Curing Mechanism:** The polymer matrix is typically cured (e.g., by UV light for photopolymers, or by cooling for thermoplastics) to solidify the jetted droplets.

*   **Post-processing:**
    *   The polymer matrix is usually burned out or removed, and the metal particles are then consolidated through sintering or hot isostatic pressing (HIP). This is a crucial step that transforms the "green" part into a dense metal component.

#### 3.3. Metal Slurry Jetting

This is an emerging area where a suspension of fine metal particles in a liquid carrier is jetted.

*   **Feedstock Composition:**
    *   **Metal Particles:** Very fine metal powders (nanoparticles or sub-micron particles).
    *   **Liquid Carrier:** Water, organic solvents, or specialized fluids.
    *   **Stabilizers/Dispersants:** Essential to prevent particle agglomeration and maintain slurry stability.
    *   **Binders:** Organic binders may also be included.

*   **Key Feedstock Properties:**
    *   **Slurry Viscosity:** Highly dependent on particle size, concentration, and stabilizing agents.
    *   **Particle Size and Distribution:** Nanoparticles offer potential for higher packing density but can be challenging to stabilize.
    *   **Stability:** The slurry must remain stable over time and during the printing process, preventing settling or agglomeration.
    *   **Drying/Sintering Behavior:** The carrier liquid and binder need to be removed, and the particles consolidated.

*   **Reference:** Pederson, R., Sokolov, M. S., & Ma, C. (2019). *Additive Manufacturing of High-Performance Metals and Alloys*. IntechOpen. (This book is likely to delve into more advanced and emerging MAM materials and processes, including slurry-based approaches).

---

### 4. Post-Processing for Binder and Material Jetting

Both BJT and MJ processes typically produce "green" parts that require significant post-processing to achieve the desired material properties and fully dense components.

*   **Depowdering (Binder Jetting):** Removal of excess unbound powder from the printed part. This is usually done with brushes, compressed air, or vacuum.
*   **Curing/Drying:** Solidifying the binder or polymer matrix to achieve sufficient green strength.
*   **Binder Burnout:** The gradual heating of the green part to remove the organic binder before sintering. This needs to be carefully controlled to prevent cracking or excessive carbon residue.
    *   **Knowledge Level (CO3, K3):** Understanding how binders are removed and their impact on metallurgy.
*   **Sintering:** Heating the part to a high temperature (below melting point) to consolidate the metal particles through diffusion, leading to densification and the development of mechanical properties.
    *   **Furnace Type:** Vacuum furnaces, inert atmosphere furnaces.
    *   **Atmosphere Control:** Crucial to prevent oxidation.
    *   **Temperature and Time:** Dictate the extent of densification and microstructure development.
    *   **Reference:** Yang, L., & Michaleris, P. (2017). *Additive Manufacturing of Metals: The Technology, Materials, Design and Production*. Springer. (Will cover sintering physics and its importance in MAM).
    *   **Knowledge Level (CO3, K3):** Familiarity with sintering as a post-processing step for achieving metallic properties.
*   **Infiltration (Binder Jetting):** For certain BJT applications, a lower melting point metal (e.g., bronze) can be infiltrated into the porous structure of a sintered metal part to fill voids and improve density and mechanical properties.
*   **Hot Isostatic Pressing (HIP):** Applying high pressure and temperature simultaneously to further densify parts, reducing internal porosity and improving mechanical properties, especially for high-performance applications.
    *   **Reference:** Pederson, R., Sokolov, M. S., & Ma, C. (2019). *Additive Manufacturing of High-Performance Metals and Alloys*. IntechOpen. (HIP is a common post-processing technique for high-performance alloys, likely discussed here).
*   **Machining/Finishing:** As-sintered parts may require secondary operations like machining for tighter tolerances, surface finishing, or heat treatment.

---

### 5. Advantages and Limitations of Binder and Material Jetting Feedstocks

#### 5.1. Binder Jetting Feedstocks

*   **Advantages:**
    *   **Wide Range of Materials:** Compatible with many metal powders.
    *   **Low Thermal Distortion:** Minimal warpage during printing as only binder is jetted.
    *   **Good Resolution:** Achievable with fine powders and precise binder jetting.
    *   **High Throughput Potential:** Can be relatively fast for printing the green part.
    *   **No Need for Support Structures (in powder bed):** Unbound powder supports overhangs.

*   **Limitations:**
    *   **Limited Green Strength:** Green parts are brittle and require careful handling.
    *   **Porosity:** As-sintered parts can retain some porosity, affecting mechanical properties.
    *   **Shrinkage:** Significant shrinkage occurs during sintering, requiring careful design compensation.
    *   **Binder Residue:** Incomplete binder burnout can lead to defects.
    *   **Post-processing Intensive:** Requires significant post-processing (sintering, infiltration).

#### 5.2. Material Jetting Feedstocks

*   **Advantages (Molten Metal Jetting):**
    *   **Direct Metal Deposition:** Potentially simpler process if low melting point metals are used.
    *   **High Speed (for certain applications):** Droplet deposition can be fast.

*   **Advantages (Metal-Infused Polymer Jetting):**
    *   **Good Geometric Complexity:** Similar to other jetting processes.
    *   **Potentially Higher Metal Content:** Compared to some composite approaches.

*   **Limitations (Molten Metal Jetting):**
    *   **Limited Material Range:** Restricted to low melting point metals.
    *   **Thermal Management:** Controlling the molten metal jetting and solidification is challenging.
    *   **Nozzle Clogging:** Molten metal can solidify in the nozzle.

*   **Limitations (Metal-Infused Polymer Jetting):**
    *   **Lower Metal Loading:** Often lower than PBF or BJT for comparable properties.
    *   **Polymer Burnout Issues:** Can lead to porosity or carbon contamination.
    *   **Post-processing:** Sintering of the metal particles is still required.
    *   **Viscosity Challenges:** Incorporating high metal loadings can make the feedstock too viscous.

---

### 6. Relation to Course Outcomes

*   **CO1: To study the basic Metal Additive Manufacturing Techniques (Knowledge Level: K2)**
    *   This topic introduces Binder Jetting and Material Jetting as fundamental MAM techniques, distinct from powder bed fusion, by focusing on their selective deposition of feedstocks.
*   **CO2: To understand the features and control of various MAM Methods (Knowledge Level: K2)**
    *   The notes detail the specific features of BJT and MJ feedstocks (powder vs. droplets, binder vs. polymer matrix) and the critical parameters that need to be controlled (viscosity, particle size, binder content) for successful printing.
*   **CO3: To familiarize the metallurgy of MAM Processes. (Knowledge Level: K3)**
    *   The discussion on sintering, binder burnout, and infiltration directly relates to the metallurgical transformations that occur during post-processing. Understanding the role of the binder and its removal is crucial for controlling the final microstructure and properties of the sintered metal part.
*   **CO4: To study the relation between reverse engineering and additive manufacturing. (Knowledge Level: K2)**
    *   While not directly addressed in this specific topic, the ability of BJT and MJ to create complex geometries makes them suitable for producing parts derived from reverse-engineered designs. The feedstock selection and post-processing are critical for matching the material properties of the original part.

---

### 7. Important Points to Remember

*   **Binder Jetting:** Relies on a liquid binder to selectively fuse metal powder. The unbound powder acts as support. Post-processing (sintering) is essential.
*   **Material Jetting:** Deposits droplets of molten metal or metal-infused material. Requires careful control of rheology and thermal properties.
*   **Feedstock Control is Key:** For both processes, the properties of the powder, binder, or slurry (particle size, distribution, viscosity, wetting, dispersion) are paramount for printability and final part quality.
*   **Post-processing is Crucial:** Green parts from BJT and MJ are not functional. Sintering, binder burnout, and sometimes infiltration or HIP are required for densification and property development.
*   **Trade-offs Exist:** Every feedstock and process combination involves trade-offs between printability, achievable properties, cost, and complexity.

---

### 8. Practice Questions

**Question 1:**
What are the two primary components of a feedstock in Binder Jetting, and why is a specific particle size distribution important?
**Answer:** The two primary components are metal powder and a liquid binding agent. A specific particle size distribution is important for achieving good packing density in the powder bed and ensuring proper flowability, which directly impacts layer uniformity and green part integrity.

**Question 2:**
Describe the main difference between the feedstock used in Binder Jetting and Material Jetting.
**Answer:** Binder Jetting uses a bed of metal powder that is selectively bound by a liquid agent. Material Jetting, in contrast, deposits discrete droplets of molten metal or metal-infused material.

**Question 3:**
List at least three critical properties of a liquid binder used in Binder Jetting.
**Answer:** Critical properties include viscosity, surface tension, wetting behavior, and evaporation rate.

**Question 4:**
What is the primary post-processing step required to consolidate metal particles in both Binder Jetting and Metal-Infused Polymer Jetting to achieve a dense metal part?
**Answer:** Sintering is the primary post-processing step.

**Question 5:**
What are the potential advantages of using metal-infused polymer jetting as a MAM process compared to direct molten metal jetting?
**Answer:** Metal-infused polymer jetting can potentially handle a wider range of metals (not limited by low melting point) and offers better control over droplet formation due to the polymer matrix. It also allows for higher geometric complexity than some molten metal processes.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
