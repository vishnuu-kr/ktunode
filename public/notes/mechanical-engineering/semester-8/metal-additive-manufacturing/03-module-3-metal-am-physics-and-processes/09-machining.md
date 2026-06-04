---
title: "Machining"
subject: "METAL ADDITIVE MANUFACTURING"
module: "Module 3: Metal AM physics and processes"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464585"
status: "completed"
scrapedAt: "2026-05-20T18:21:51.669Z"
---
# METAL ADDITIVE MANUFACTURING

## Module 3: Metal AM Physics and Processes

### Topic: Machining in Metal Additive Manufacturing

---

### 1. Introduction to Machining in Metal AM

*   **Definition:** Machining, in the context of Metal Additive Manufacturing (MAM), refers to the subtractive manufacturing processes used to finish or modify parts that have been built using additive techniques. While MAM builds parts layer-by-layer, it often results in surfaces that are not perfectly smooth or dimensionally accurate. Machining is employed to achieve the required surface finish, tight tolerances, and desired geometric features that MAM alone cannot consistently provide.

*   **Purpose of Machining in MAM:**
    *   **Achieve Tight Tolerances:** MAM processes, especially powder-bed fusion (PBF) methods, can have inherent geometric inaccuracies due to factors like thermal distortion, lack of full support, and stair-stepping effects. Machining is crucial for bringing these features within specified dimensional tolerances. (Ref: Yang & Michaleris, Chapter X - Post-Processing)
    *   **Improve Surface Finish:** The as-built surface finish from MAM can be rough, characterized by visible layers, powder particles, and sometimes porosity. Machining removes this roughness to achieve smoother, more functional surfaces. (Ref: Gibson et al., Chapter Y - Surface Finish and Machining)
    *   **Create Complex Geometries:** While MAM excels at creating complex internal geometries, certain external features, like sharp edges, precise threads, or mating surfaces, might still require machining for accuracy and functionality.
    *   **Remove Support Structures:** Support structures are often necessary during MAM to prevent warping or collapse. Machining, along with other methods like EDM or wire cutting, is used to remove these supports cleanly.
    *   **Surface Hardening/Texturing:** Machining operations can also be used to impart specific surface properties, such as hardness or textures, through processes like grinding or polishing.

*   **Alignment with Course Outcomes:**
    *   **CO1: Basic MAM Techniques (K2):** Understanding that machining is a post-processing step is fundamental to grasping the overall MAM workflow.
    *   **CO2: Features and Control of MAM Methods (K2):** Knowing the limitations of MAM in terms of surface finish and dimensional accuracy necessitates understanding the role of machining in achieving desired part quality.
    *   **CO3: Metallurgy of MAM Processes (K3):** Machining of additively manufactured metals involves understanding how the altered microstructure and properties (e.g., residual stresses, anisotropy) of MAM parts influence machining behavior.
    *   **CO4: Reverse Engineering and AM (K2):** Machining might be used in conjunction with reverse engineering to replicate complex geometries or to finish parts that have been scanned and then modified before AM.

---

### 2. Common Machining Processes Used in MAM

The choice of machining process depends on the material, the required tolerances, surface finish, and the specific features to be machined.

#### 2.1. Turning

*   **Description:** A cutting tool moves linearly to remove material from a rotating workpiece. This is suitable for producing cylindrical or conical shapes.
*   **Application in MAM:** Often used for finishing bores, shafts, and outer diameters of parts fabricated via MAM, especially when high accuracy and smooth surfaces are needed.
*   **Considerations for MAM Parts:**
    *   **Residual Stresses:** MAM parts often have significant residual stresses, which can lead to distortion during machining. Pre-machining stress relief treatments might be necessary.
    *   **Anisotropy:** Due to the layer-by-layer build-up, MAM parts can exhibit anisotropic mechanical properties, which can affect cutting forces and tool wear.
    *   **Surface Roughness:** Initial surface roughness might require lighter cuts or specialized tools.
*   **Textbook Reference:** Li Yang & Pan Michaleris (Springer) might discuss post-processing techniques, including turning, as a method to address dimensional inaccuracies.

#### 2.2. Milling

*   **Description:** A rotating multi-point cutting tool removes material from a stationary workpiece. This is versatile for creating flat surfaces, slots, pockets, and complex contours.
*   **Application in MAM:** Widely used for achieving precise planar surfaces, creating mating features, removing excess material, and finishing internal channels. CNC milling is essential for complex geometries.
*   **Considerations for MAM Parts:**
    *   **Tool Path Optimization:** Tool paths need to be designed carefully to account for the as-built geometry and to avoid excessive material removal or premature tool wear.
    *   **Workholding:** Securing MAM parts, which might have irregular shapes or internal features, can be challenging. Custom fixtures are often required.
    *   **Surface Integrity:** The goal is to remove the "as-built" surface layer and achieve the desired surface finish without inducing excessive damage.
*   **Textbook Reference:** Gibson et al. (Springer) likely covers milling as a primary post-processing method for various AM parts.

#### 2.3. Drilling

*   **Description:** A rotating tool with cutting edges creates a cylindrical hole.
*   **Application in MAM:** Used to create holes for fasteners, fluid channels, or for further processing like reaming.
*   **Considerations for MAM Parts:**
    *   **Hole Quality:** As-built holes might be oversized or have a poor surface finish. Drilling ensures accurate hole diameters and quality.
    *   **Support Removal:** In some cases, drilling can be used to remove internal support structures.

#### 2.4. Grinding

*   **Description:** Uses abrasive particles to remove material, typically for achieving very fine surface finishes and high dimensional accuracy.
*   **Application in MAM:** Essential for polishing surfaces, achieving mirror finishes, and for machining very hard or brittle MAM materials that are difficult to machine with conventional tools.
*   **Considerations for MAM Parts:**
    *   **Material Removal Rate:** Grinding is a slower process but offers superior surface finish.
    *   **Thermal Effects:** Careful control of grinding parameters is needed to avoid inducing thermal damage.

#### 2.5. Electrical Discharge Machining (EDM)

*   **Description:** Uses electrical sparks to erode material. It's a non-contact process suitable for hard materials and complex shapes.
*   **Application in MAM:**
    *   **Support Removal:** EDM is excellent for cleanly removing internal support structures, especially in intricate designs where mechanical removal might be difficult or damaging.
    *   **Machining Conductive Materials:** Effective for machining high-strength alloys or materials that are difficult to machine by conventional means.
    *   **Creating Fine Features:** Can produce sharp corners and fine details that are challenging with other methods.
*   **Textbook Reference:** Li Yang & Pan Michaleris might mention EDM as a post-processing technique for specific applications. Robert Pederson et al. (IntechOpen) may also discuss machining of high-performance metals, where EDM is often relevant.

#### 2.6. Waterjet Cutting

*   **Description:** A high-pressure stream of water, often mixed with abrasive particles, cuts through material.
*   **Application in MAM:**
    *   **Support Removal:** Can be used to remove larger support structures, especially for larger parts or those with less intricate internal geometries.
    *   **Cutting Large Parts:** Can cut through thick sections of MAM parts.
*   **Considerations for MAM Parts:**
    *   **Edge Quality:** May leave a slightly rounded edge compared to EDM or milling.
    *   **Material Properties:** Effectiveness depends on the material's resistance to erosion.

---

### 3. Key Considerations for Machining MAM Parts

Understanding the unique characteristics of MAM parts is critical for successful machining.

#### 3.1. Material Properties and Microstructure

*   **As-Built vs. Traditional:** MAM materials often have a different microstructure compared to their conventionally manufactured counterparts. This can be due to rapid solidification rates, alloying element segregation, and the presence of powder particles.
*   **Microstructure:** The layer-by-layer deposition can lead to anisotropic properties, with differences in tensile strength, ductility, and fatigue life depending on the build orientation.
*   **Hardness and Strength:** Many MAM alloys are designed for high strength and temperature resistance, making them harder and more challenging to machine.
*   **Porosity:** While efforts are made to minimize porosity, residual pores can act as crack initiation sites during machining, leading to tool chatter or surface defects. (Ref: Li Yang & Pan Michaleris, Chapter on Material Properties)
*   **Residual Stresses:** Thermal gradients during the layer-by-layer build process induce significant residual stresses, which can cause:
    *   **Warping/Distortion:** Parts may deform upon removal from the build plate or during machining.
    *   **Stress Relief Machining:** Light "stress relief cuts" might be performed before final machining to allow the part to relax.
    *   **Machining-Induced Stresses:** Machining itself can introduce new stresses, which need to be managed.

#### 3.2. Surface Integrity

*   **As-Built Surface Roughness:** As mentioned, the as-built surface can be rough, with a "stair-stepping" effect from the layers.
*   **Surface Defects:** May include unmelted powder particles, oxide layers, or micro-cracks.
*   **Goal of Machining:** To remove these defects and achieve the desired surface finish (Ra value) and critical surface geometry.

#### 3.3. Workholding and Fixturing

*   **Challenges:** MAM parts can have complex or irregular geometries, lack of datum features, and internal cavities, making traditional workholding difficult.
*   **Solutions:**
    *   **Custom Fixtures:** Designing specific fixtures that support the part without damaging delicate features is often necessary.
    *   **Additive Fixturing:** Sometimes, fixtures themselves are additively manufactured to precisely match the geometry of the MAM part.
    *   **Soft Jaws:** Using softer materials for clamping can prevent damage to the part.
    *   **Balancing:** Parts may need to be balanced for high-speed machining operations.

#### 3.4. Tool Selection and Machining Parameters

*   **Tool Material:** High-speed steel (HSS) or tungsten carbide tools are common, but advanced ceramic or diamond-coated tools may be required for harder MAM alloys.
*   **Cutting Speed:** Generally lower speeds are used initially for MAM parts due to their potentially altered mechanical properties and residual stresses.
*   **Feed Rate:** Must be carefully controlled to manage cutting forces and prevent surface damage.
*   **Depth of Cut:** Shallower depths of cut are often preferred to manage residual stresses and avoid excessive material removal.
*   **Coolant and Lubrication:** Essential for reducing heat and friction, extending tool life, and improving surface finish.

#### 3.5. Thermal Management

*   **Heat Generation:** Machining generates heat, which can exacerbate residual stresses, lead to thermal expansion, and affect the material's microstructure.
*   **Cooling Strategies:** Effective coolant delivery and thermal management are crucial.

#### 3.6. Tool Path Strategies

*   **Consideration of Anisotropy:** Tool paths may need to be adjusted based on the build orientation to account for varying material properties.
*   **Minimizing Overhangs:** Machining strategies should avoid creating new stress concentrations.
*   **Surface Finish Optimization:** Strategies like trochoidal milling or high-speed finishing passes are used to achieve desired surface finishes.

---

### 4. The Role of Machining in the Overall MAM Workflow

Machining is typically a *post-processing step* in the MAM lifecycle.

1.  **Design:** CAD model of the part.
2.  **Build Preparation:** Slicing the model, generating toolpaths for the AM machine, and orienting the part.
3.  **Additive Manufacturing:** Building the part layer by layer (e.g., Laser Powder Bed Fusion - LPBF, Directed Energy Deposition - DED).
4.  **Post-Build Processing:**
    *   **Removal from Build Plate:** Cutting or breaking the part off the build plate.
    *   **Support Removal:** Mechanical methods, EDM, waterjet.
    *   **Heat Treatment:** Stress relief, annealing, HIP (Hot Isostatic Pressing) to improve microstructure and reduce residual stresses.
    *   **Surface Finishing:** Tumbling, blasting, polishing.
    *   **Machining:** Turning, milling, drilling, grinding for dimensional accuracy and surface finish.
    *   **Inspection:** Dimensional checks, NDT (Non-Destructive Testing).

*   **Example:** A complex aerospace bracket is additively manufactured using LPBF. The as-built part might have slightly out-of-tolerance mounting holes and a rough exterior surface. The process would then involve removing it from the build plate, stress relieving it, and then using CNC milling to precisely machine the mounting hole diameters and face the mounting surfaces to achieve the required ±0.02 mm tolerance.

---

### 5. Integration with Other Post-Processing Techniques

Machining is often performed in conjunction with other post-processing steps to achieve the final desired part quality.

*   **Heat Treatment:** Pre-machining heat treatments (e.g., stress relief annealing) are vital for stabilizing the part and reducing distortion during machining. Post-machining heat treatments might be used to achieve specific material properties. (Ref: Robert Pederson et al., chapter on heat treatment of high-performance alloys)
*   **Surface Treatments:** Before or after machining, processes like shot peening, sandblasting, or polishing can enhance surface integrity, fatigue life, and aesthetics.
*   **Inspection:** Machining accuracy is verified using Coordinate Measuring Machines (CMMs), optical scanners, or other metrology tools.

---

### 6. Examples and Case Studies

*   **Aerospace Components:** Many complex aerospace parts, such as turbine blades or fuel nozzles, are additively manufactured and then machined to achieve the required tight tolerances on critical features like cooling channels or mating surfaces. The ability to manufacture complex internal cooling passages via AM, followed by CNC milling of external features, is a prime example.
*   **Medical Implants:** Patient-specific implants (e.g., hip stems, cranial plates) are often additively manufactured and then machined to ensure proper fit and biological integration. Machining may be used to create textured surfaces for bone ingrowth or to achieve precise contours for articulation.
*   **Tooling and Molds:** Additively manufactured conformal cooling channels in injection molds can significantly improve cooling efficiency. Machining is then used to create the mold cavity and ensure precise surface finish and dimensional accuracy.

---

### 7. Practice Questions and Answers

**Question 1:**
What is the primary reason for using machining as a post-processing step for additively manufactured metal parts?
    a) To increase the build speed of AM parts.
    b) To additively deposit more material.
    c) To achieve desired dimensional tolerances and surface finish.
    d) To remove powder particles from the build chamber.

**Answer 1:**
c) To achieve desired dimensional tolerances and surface finish.

**Question 2:**
Which of the following machining processes is particularly effective for removing internal support structures from complex additively manufactured parts without causing damage?
    a) Grinding
    b) Turning
    c) Milling
    d) Electrical Discharge Machining (EDM)

**Answer 2:**
d) Electrical Discharge Machining (EDM)

**Question 3:**
True or False: Additively manufactured metal parts typically have very low residual stresses compared to conventionally manufactured parts, making them easier to machine.

**Answer 3:**
False. Additively manufactured metal parts often have significant residual stresses due to the layer-by-layer thermal cycling, which can lead to distortion during machining.

**Question 4:**
Explain why workholding can be a challenge when machining additively manufactured parts. Provide one solution.

**Answer 4:**
Workholding is challenging because additively manufactured parts can have complex or irregular geometries, lack pre-defined datum features, or contain internal cavities, making it difficult to secure them using conventional clamping methods without potentially damaging delicate features.
One solution is to use custom-designed fixtures that precisely match the geometry of the part, or to employ "soft jaws" that conform to the part's surface.

**Question 5:**
How might the anisotropic nature of additively manufactured metals influence the choice of machining parameters?

**Answer 5:**
The anisotropic nature means that the material properties (strength, stiffness, thermal conductivity) can vary depending on the build direction. This can affect cutting forces, tool wear, and surface finish. For example, machining parallel to a weaker build direction might require different cutting speeds and feed rates than machining perpendicular to it to avoid delamination or excessive tool wear. Tool path strategies might also need to be optimized to account for these variations.

---

### 8. Important Points to Remember

*   **Machining is a crucial *post-processing* step in MAM.**
*   **Key objectives of machining MAM parts are:** achieving dimensional accuracy (tolerances) and improving surface finish.
*   **MAM parts have unique characteristics:** residual stresses, anisotropy, and potential as-built surface roughness/defects, which significantly influence machining.
*   **Common machining processes used include:** turning, milling, drilling, grinding, EDM, and waterjet cutting.
*   **Workholding and fixturing are often challenging** and may require custom solutions.
*   **Tool selection and machining parameters** must be carefully chosen to account for the material's as-built condition.
*   **Heat treatment** is often performed before or after machining to manage residual stresses and improve material properties.
*   **Understanding the metallurgy (CO3)** of MAM is essential for effective machining.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
