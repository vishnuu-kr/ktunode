---
title: "Surface Treatment and NDT Methods."
subject: "METAL ADDITIVE MANUFACTURING"
module: "Module 3: Metal AM physics and processes"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464586"
status: "completed"
scrapedAt: "2026-05-20T18:21:52.390Z"
---
# Metal Additive Manufacturing: Module 3 - Metal AM Physics and Processes
## Topic: Surface Treatment and Non-Destructive Testing (NDT) Methods

---

### **Introduction**

This topic delves into the critical post-processing stages of Metal Additive Manufacturing (MAM): surface treatment and Non-Destructive Testing (NDT). While MAM offers unparalleled design freedom, the as-built surfaces often possess characteristics that necessitate improvement for functional applications. Similarly, ensuring the integrity and quality of the manufactured parts without causing damage is paramount. This module aims to equip you with the knowledge of various surface treatment techniques and NDT methods applicable to MAM, their underlying physics, and their importance in achieving desired part performance and reliability.

---

### **1. Surface Treatment in Metal Additive Manufacturing**

The as-built surfaces from MAM processes, particularly Powder Bed Fusion (PBF) techniques like Selective Laser Melting (SLM) and Electron Beam Melting (EBM), often exhibit:

*   **Roughness:** Due to the layer-by-layer building process and unfused powder particles adhering to the surface.
*   **Porosity:** Internal voids or surface irregularities.
*   **Oxidation:** Formation of oxide layers, especially in SLM due to interaction with the atmosphere.
*   **Anisotropy:** Surface properties may vary depending on the build direction.
*   **Internal Stresses:** Residual stresses from rapid heating and cooling cycles.

Surface treatments are crucial to mitigate these issues and enhance various properties:

*   **Mechanical Properties:** Surface hardness, fatigue strength, wear resistance.
*   **Surface Finish:** Aesthetic appeal, reduced friction, improved fluid flow.
*   **Corrosion Resistance:** Protective coatings, removal of susceptible layers.
*   **Dimensional Accuracy:** Achieving tighter tolerances.

---

#### **1.1 Mechanical Surface Treatments**

These methods impart surface modifications through mechanical action.

##### **1.1.1 Shot Peening / Ball Burnishing**

*   **Concept:** Involves bombarding the surface with small, hard media (shot or balls) at high velocity. This process introduces compressive residual stresses into the surface layer, which significantly improves fatigue life and wear resistance.
*   **Physics:** The impact of the media causes localized plastic deformation, creating compressive stresses. The depth and magnitude of these stresses depend on the media size, velocity, material properties, and exposure time.
*   **Application in MAM:** Particularly effective for components subjected to cyclic loading, such as aerospace and automotive parts.
*   **Reference:** Gibson, Rosen, & Stucker (2015) discuss surface finishing techniques and their impact on mechanical properties. Yang & Michaleris (2018) likely cover residual stress mitigation through peening.
*   **Key Points:**
    *   Introduces compressive residual stresses.
    *   Enhances fatigue strength and wear resistance.
    *   Can also contribute to surface smoothing.

##### **1.1.2 Tumbling / Vibratory Finishing**

*   **Concept:** Parts are placed in a rotating or vibrating barrel with abrasive media and a finishing compound. The media abrades the surface, removing rough features and improving smoothness.
*   **Physics:** Abrasive action by the media removes material from the surface, smoothing peaks and valleys.
*   **Application in MAM:** Primarily for deburring, radiusing sharp edges, and general surface smoothing.
*   **Key Points:**
    *   Removes burrs and sharp edges.
    *   Improves surface smoothness.
    *   Suitable for various part geometries.

---

#### **1.2 Thermal Surface Treatments**

These methods utilize heat to alter the surface microstructure and properties.

##### **1.2.1 Heat Treatment (Stress Relieving, Annealing, Quenching, Tempering)**

*   **Concept:** A broad category of processes involving controlled heating and cooling to modify the material's microstructure and relieve internal stresses induced during the AM process.
    *   **Stress Relieving:** Heating to a sub-critical temperature to reduce internal stresses without significant microstructural changes.
    *   **Annealing:** Heating to a higher temperature followed by slow cooling to soften the material, relieve stresses, and improve ductility.
    *   **Quenching & Tempering:** Heat treatments to achieve specific hardness and strength properties.
*   **Physics:** Heat treatment alters the distribution of dislocations and grain boundaries within the material, affecting its mechanical properties. For instance, annealing allows for grain growth and recrystallization, reducing hardness and internal stresses.
*   **Application in MAM:** Essential for mitigating residual stresses, improving ductility, and achieving desired mechanical properties in AM parts. Often performed after the build and support removal.
*   **Reference:** Yang & Michaleris (2018) extensively cover the metallurgical aspects of MAM, including the role of heat treatments in managing residual stresses and microstructural evolution. Pederson, Sokolov, & Ma (2019) likely discuss thermal processing for high-performance alloys.
*   **Key Points:**
    *   Crucial for stress mitigation.
    *   Improves ductility and machinability.
    *   Can be tailored to achieve specific mechanical properties.
    *   **Important for CO3 (Metallurgy of MAM Processes)**.

##### **1.2.2 Laser Remelting / Laser Polishing**

*   **Concept:** A focused laser beam is scanned across the surface to remelt a thin layer of the material. This process smooths the surface by reducing the height of the irregularities.
*   **Physics:** The laser energy melts the surface layer, allowing surface tension forces to pull the molten material into a smoother profile. Rapid solidification follows.
*   **Application in MAM:** Can significantly improve surface finish, reducing roughness from typical Ra 5-20 µm to below 3 µm.
*   **Reference:** Gibson, Rosen, & Stucker (2015) describe laser-based finishing techniques.
*   **Key Points:**
    *   Improves surface roughness.
    *   Can be a line-of-sight process, potentially leaving some texture.
    *   Introduces a localized heat affected zone.

---

#### **1.3 Chemical and Electrochemical Surface Treatments**

These methods use chemical reactions or electrochemical processes to modify the surface.

##### **1.3.1 Chemical Polishing (Chem-Polishing)**

*   **Concept:** Immersing the part in a specific chemical solution that selectively dissolves surface irregularities.
*   **Physics:** Chemical reactions between the solution and the surface material lead to the removal of high points and smoothing.
*   **Application in MAM:** Effective for achieving very smooth surfaces, especially for intricate geometries where mechanical methods might be difficult.
*   **Key Points:**
    *   Can achieve very fine surface finishes.
    *   Requires careful control of chemical concentrations and temperatures.
    *   May alter surface composition.

##### **1.3.2 Electrochemical Polishing (Electro-Polishing)**

*   **Concept:** An electrolytic process where the part is made the anode in an electrolytic cell. Under controlled conditions, material is preferentially dissolved from high points.
*   **Physics:** Anodic dissolution of the metal surface, enhanced at protrusions due to higher current density.
*   **Application in MAM:** Excellent for deburring, smoothing, and improving the surface finish of complex parts, especially those with internal channels.
*   **Reference:** Gibson, Rosen, & Stucker (2015) mention electropolishing as a post-processing technique.
*   **Key Points:**
    *   Provides a very smooth and often bright surface finish.
    *   Effective for deburring and removing oxide layers.
    *   Good for complex geometries.

---

#### **1.4 Hybrid and Other Surface Treatments**

##### **1.4.1 Abrasive Flow Machining (AFM)**

*   **Concept:** A semi-solid abrasive media is forced through passages or over surfaces of the part.
*   **Physics:** Controlled, localized abrasion by the media.
*   **Application in MAM:** Ideal for finishing internal passages, complex cavities, and turbine blades where other methods struggle to reach.
*   **Key Points:**
    *   Excellent for internal and complex geometries.
    *   Reduces surface roughness and removes burrs.

##### **1.4.2 Coating**

*   **Concept:** Application of a new layer of material onto the surface to enhance properties like wear resistance, corrosion resistance, or hardness.
*   **Examples:** Physical Vapor Deposition (PVD), Chemical Vapor Deposition (CVD), thermal spray coatings, electroplating.
*   **Application in MAM:** Used to overcome limitations of the base AM material or to impart new functionalities.
*   **Key Points:**
    *   Tailors surface properties for specific applications.
    *   Requires good adhesion to the AM substrate.

---

### **2. Non-Destructive Testing (NDT) Methods in Metal Additive Manufacturing**

NDT methods are essential for verifying the quality, integrity, and performance of AM parts without causing damage. They are used at various stages: during the build, post-build, and for in-service inspection.

#### **2.1 In-Situ Monitoring (During the Build)**

These methods monitor the process in real-time to detect anomalies and ensure build quality.

##### **2.1.1 Optical Imaging / Pyrometry**

*   **Concept:** Using cameras and thermal sensors to monitor the melt pool behavior, temperature distribution, and layer formation.
*   **Physics:** Detects thermal radiation emitted from the melt pool. Deviations in melt pool size, shape, or temperature can indicate process irregularities (e.g., lack of fusion, pore formation).
*   **Application in MAM:** Real-time detection of defects like balling, lack of fusion, and porosity.
*   **Key Points:**
    *   Provides real-time feedback on the build process.
    *   Essential for process control and anomaly detection.
    *   **Important for CO2 (Features and control of MAM Methods)**.

##### **2.1.2 Acoustic Emission (AE)**

*   **Concept:** Detecting stress waves (acoustic emissions) generated by micro-events like crack formation, pore formation, or spatter during the build.
*   **Physics:** Microstructural changes and material failure generate transient elastic waves that can be detected by sensors.
*   **Application in MAM:** Identifying cracking, pore formation, and other internal defects.
*   **Key Points:**
    *   Sensitive to micro-events within the material.
    *   Can help differentiate between defect types.

##### **2.1.3 Melt Pool Monitoring (e.g., High-Speed Imaging)**

*   **Concept:** Capturing images of the melt pool at very high frame rates to analyze its dynamics.
*   **Physics:** Visual observation of melt pool geometry, spatter, and keyhole formation.
*   **Application in MAM:** Understanding and controlling the melt pool dynamics directly relates to the quality of the solidified layer.
*   **Key Points:**
    *   Provides visual evidence of melt pool stability.
    *   Crucial for optimizing process parameters.

---

#### **2.2 Post-Build NDT Methods**

These methods are applied after the part has been fabricated and typically post-processed.

##### **2.2.1 Visual Inspection (VI)**

*   **Concept:** Manual or automated examination of the surface for visible defects like cracks, pores, surface roughness issues, or incomplete fusion.
*   **Physics:** Direct observation using the human eye or magnification tools.
*   **Application in MAM:** Initial assessment of surface quality and identification of gross defects.
*   **Key Points:**
    *   Simple, cost-effective, and widely used.
    *   Limited to detecting surface or near-surface defects.

##### **2.2.2 Liquid Penetrant Testing (PT)**

*   **Concept:** A liquid penetrant is applied to the surface, seeps into surface-breaking defects, and is then removed. A developer is applied, drawing the penetrant out of the defects, making them visible.
*   **Physics:** Capillary action draws the penetrant into surface-breaking flaws.
*   **Application in MAM:** Detecting surface-breaking cracks and porosity.
*   **Key Points:**
    *   Effective for detecting fine surface cracks.
    *   Requires a clean surface.
    *   Only detects surface-breaking defects.

##### **2.2.3 Magnetic Particle Testing (MT)**

*   **Concept:** Applicable to ferromagnetic materials. The part is magnetized, and then fine magnetic particles are applied. The particles are attracted to areas of magnetic flux leakage caused by surface or near-surface discontinuities.
*   **Physics:** Magnetic flux leakage at defect sites.
*   **Application in MAM:** Detecting surface and near-surface cracks in ferromagnetic AM parts.
*   **Key Points:**
    *   Sensitive to surface and near-surface defects in ferromagnetic materials.
    *   Requires magnetization of the part.

##### **2.2.4 Eddy Current Testing (ET)**

*   **Concept:** An alternating electrical current is passed through a coil, generating a magnetic field. When the coil is brought near a conductive material, eddy currents are induced in the material. Changes in the material's conductivity, permeability, or the presence of flaws affect the eddy current flow and the impedance of the coil.
*   **Physics:** Electromagnetic induction.
*   **Application in MAM:** Detecting surface and near-surface cracks, subsurface defects, and material property variations. Can also be used for coating thickness measurement.
*   **Reference:** Yang & Michaleris (2018) likely discuss various NDT methods for AM.
*   **Key Points:**
    *   Non-contact method.
    *   Sensitive to surface and near-surface defects.
    *   Material must be electrically conductive.

##### **2.2.5 Ultrasonic Testing (UT)**

*   **Concept:** High-frequency sound waves are transmitted into the material. Reflections from internal flaws or interfaces are detected by a transducer.
*   **Physics:** Sound wave propagation and reflection.
*   **Application in MAM:** Detecting internal defects like porosity, lack of fusion, and cracks. Also used for thickness gauging and material characterization.
*   **Reference:** Gibson, Rosen, & Stucker (2015) provide an overview of ultrasonic testing.
*   **Key Points:**
    *   Excellent for detecting internal defects.
    *   Can be used on a wide range of materials.
    *   Requires good acoustic coupling.
    *   **Important for CO1 (Basic MAM Techniques)** and **CO2 (Features and control of MAM Methods)** as it's a common quality assurance tool.

##### **2.2.6 Radiographic Testing (RT) / X-ray Imaging**

*   **Concept:** X-rays or gamma rays are passed through the part, and the transmitted radiation is captured on a detector (film or digital). Variations in material density or thickness, including voids and inclusions, create contrast.
*   **Physics:** Differential absorption of radiation by the material.
*   **Application in MAM:** Detecting internal voids, porosity, lack of fusion, and foreign inclusions.
*   **Reference:** Yang & Michaleris (2018) discuss X-ray computed tomography (CT) as a powerful NDT tool for AM.
*   **Key Points:**
    *   Provides a 3D representation of internal features (with CT).
    *   Sensitive to density variations.
    *   Requires safety precautions due to radiation.
    *   **Important for CO1 & CO2** for internal defect characterization.

##### **2.2.7 Computed Tomography (CT) / X-ray CT**

*   **Concept:** A more advanced form of radiography where multiple 2D X-ray projections are taken from different angles and reconstructed into a 3D volume.
*   **Physics:** Reconstruction of a 3D volumetric dataset from multiple 2D projections.
*   **Application in MAM:** Comprehensive internal metrology and defect analysis, providing detailed information on porosity, internal geometry, and microstructural features.
*   **Reference:** Yang & Michaleris (2018) highlight CT as a crucial NDT method for AM, enabling detailed 3D defect analysis.
*   **Key Points:**
    *   Provides a complete 3D picture of the internal structure.
    *   Enables quantitative analysis of defects (size, shape, location, volume fraction).
    *   Crucial for validating simulation results and process improvements.
    *   **Important for CO1, CO2, and CO3**.

---

### **3. Relationship with Reverse Engineering (Brief Mention)**

While not the primary focus, NDT methods play a role in reverse engineering. For example, CT scans can be used to create a digital model of an existing part for redesign or to verify the dimensional accuracy of a re-engineered component.

*   **Application:** CT data can be used to create CAD models of existing or damaged parts, facilitating their repair or replication using additive manufacturing.
*   **Reference:** Yang & Michaleris (2018) might touch upon the synergistic use of NDT and design/manufacturing.
*   **Key Points:**
    *   CT scans provide highly accurate geometric data.
    *   Facilitates digital twinning and inspection for reverse engineering.
    *   **Relevant for CO4 (Relation between reverse engineering and additive manufacturing)**.

---

### **Important Points to Remember**

*   **Surface treatment is not an afterthought:** It's integral to achieving functional AM parts.
*   **Choice of surface treatment depends on application:** Consider the required properties (mechanical, aesthetic, chemical).
*   **NDT is vital for quality assurance:** It validates the manufacturing process and ensures part reliability.
*   **In-situ monitoring provides proactive quality control:** It allows for early detection and correction of defects.
*   **CT scanning is a powerful tool for internal defect analysis:** It provides detailed 3D information crucial for understanding MAM processes.
*   **Understanding the physics behind each technique is key:** This allows for effective selection and application.

---

### **Practice Questions and Answers**

**Question 1:** What is the primary benefit of shot peening for components produced by Metal Additive Manufacturing?
**Answer:** Shot peening introduces compressive residual stresses into the surface layer, significantly improving the fatigue life and wear resistance of the component.

**Question 2:** Which NDT method is most suitable for detecting internal porosity in a 3D printed titanium part?
**Answer:** Ultrasonic Testing (UT) or Computed Tomography (CT) are most suitable for detecting internal porosity. CT provides more detailed 3D information about the size, shape, and distribution of the pores.

**Question 3:** Briefly explain the concept of Laser Polishing in MAM.
**Answer:** Laser polishing involves scanning a focused laser beam across the surface of an AM part to remelt a thin layer. Surface tension forces then smooth out the irregularities as the material solidifies, resulting in a finer surface finish.

**Question 4:** Why is heat treatment often a necessary post-processing step for parts manufactured using Powder Bed Fusion (PBF)?
**Answer:** PBF processes involve rapid heating and cooling cycles, which can induce significant residual stresses within the part. Heat treatment, such as stress relieving or annealing, is crucial for mitigating these stresses, improving ductility, and preventing distortion or premature failure.

**Question 5:** You are inspecting a critical aerospace component manufactured using SLM for cracks. Which NDT methods would you consider and why?
**Answer:**
*   **Visual Inspection (VI):** For initial detection of any visible cracks on the surface.
*   **Liquid Penetrant Testing (PT):** To detect fine surface-breaking cracks that might not be visible to the naked eye.
*   **Eddy Current Testing (ET):** To detect surface and near-surface cracks, especially if the material is conductive.
*   **Ultrasonic Testing (UT) or Radiographic Testing (RT)/CT:** To detect any subsurface cracks or internal defects that could compromise structural integrity.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### **References Recap**

*   **Yang, L., & Michaleris, P. (2018).** *Additive Manufacturing of Metals: The Technology, Materials, Design and Production*. Springer.
*   **Pederson, R., Sokolov, M. S., & Ma, C. (2019).** *Additive Manufacturing of High-Performance Metals and Alloys*. IntechOpen.
*   **Gibson, I., Rosen, D. W., & Stucker, B. (2015).** *Additive Manufacturing Technologies: 3D Printing, Rapid Prototyping, and Direct Digital Manufacturing*. Springer.

---
This concludes Module 3, Topic: Surface Treatment and NDT Methods. Understanding these post-processing steps is as crucial as the build process itself for realizing the full potential of Metal Additive Manufacturing.