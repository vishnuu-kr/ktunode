---
title: "Laser Engineering Net Shaping (LENS)."
subject: "ADDITIVE MANUFACTURING"
module: "Module 3: Common AM technologies:  Principle, materials, process parameters, advantages and applications of: Selective Laser Sintering (SLS)"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463b6b"
status: "completed"
scrapedAt: "2026-05-20T18:02:42.718Z"
---
# ADDITIVE MANUFACTURING: MODULE 3 - COMMON AM TECHNOLOGIES

## Topic: Laser Engineered Net Shaping (LENS)

---

### 1. Introduction to LENS

Laser Engineered Net Shaping (LENS) is a powder-bed fusion (PBF) additive manufacturing (AM) process that uses a focused laser beam to melt and fuse metallic powder in a layer-by-layer fashion. It is a direct energy deposition (DED) process, distinguishing it from powder bed fusion techniques like Selective Laser Sintering (SLS) or Selective Laser Melting (SLM). LENS is particularly adept at building complex geometries, repairing existing components, and creating functional metal parts.

**Key Concept:** Direct Energy Deposition (DED) – In DED processes, material is delivered to a build platform in a molten or semi-molten state and fused by a directed energy source.

**Distinction from SLS:** While both LENS and SLS use lasers and powders, LENS typically uses a directed stream of powder that is melted as it's deposited, whereas SLS fuses pre-placed powder bed particles together. LENS also generally works with fully melting the metal powder, while SLS may only sinter or partially melt.

---

### 2. Principle of LENS Operation

The LENS process involves several key steps:

*   **Powder Delivery:** Fine metallic powder is precisely fed into the build zone using a gas stream. This powder is typically introduced through a nozzle.
*   **Laser Melting:** A high-power laser beam is focused onto the substrate or the previously deposited layer.
*   **Fusion and Deposition:** As the powder enters the laser's focus, it is rapidly melted and fuses with the substrate or the layer below. The laser head, often mounted on a multi-axis robotic arm or CNC system, moves to trace the cross-section of the part.
*   **Layer-by-Layer Buildup:** The laser head moves across the build surface, depositing and fusing material according to the digital design, building the part layer by layer.
*   **Controlled Atmosphere:** The process typically occurs within a controlled inert gas atmosphere (e.g., argon or nitrogen) to prevent oxidation of the molten metal and ensure material integrity.

**Visual Representation (Conceptual):**

```
     Gas Nozzle (Powder Inlet)
           / \
          /   \
         /     \
        /_______\  <-- Laser Beam
           | |
           | |
           V V
       Molten Pool
      /--------- \
     |           |  <-- Deposited Material
     |___________|
       Substrate/Previous Layer
```

**References:**

*   **Gibson, Rosen, & Stucker (2015), Chapter 6.5 (Direct Energy Deposition):** This chapter provides a comprehensive overview of DED technologies, including LENS, detailing the principles of material deposition and laser interaction.
*   **Chua, Leong, & Lim (2010), Chapter 5.5 (Directed Energy Deposition):** Discusses DED systems and their operational mechanisms, often referencing LENS as a prominent example.

---

### 3. Materials Used in LENS

LENS can process a wide range of metallic powders. The suitability of a powder depends on its melting point, powder morphology, and chemical reactivity.

**Commonly Used Materials:**

*   **Stainless Steels:** 304L, 17-4 PH stainless steel are frequently used for their good mechanical properties and corrosion resistance.
*   **Tool Steels:** H13, Maraging steel for tooling applications requiring high hardness and wear resistance.
*   **Nickel Alloys:** Inconel (e.g., 625, 718) for high-temperature applications, offering excellent strength and resistance to corrosion.
*   **Titanium Alloys:** Ti-6Al-4V for aerospace and biomedical applications due to its high strength-to-weight ratio and biocompatibility.
*   **Aluminum Alloys:** For lightweight applications where good thermal conductivity is needed.
*   **Refractory Metals:** Tungsten, Molybdenum for specialized high-temperature applications.

**Powder Characteristics:**

*   **Particle Size:** Typically in the range of 45-150 microns. Smaller particles can lead to finer features but may be more prone to oxidation.
*   **Morphology:** Spherical powder particles are preferred for consistent flowability and deposition.
*   **Purity:** High purity of the powder is crucial to avoid defects in the final part.

**References:**

*   **Pham & Dimov (2011), Chapter 4 (Materials in Rapid Prototyping):** While broader, it covers metallic materials and their processing considerations, relevant to LENS.
*   **Paul & Jinoop (2021), Chapter 7 (Metal Additive Manufacturing Technologies):** This chapter will detail the specific metal powders and their processing characteristics within various AM technologies, including LENS.

---

### 4. Process Parameters

Optimizing LENS process parameters is critical for achieving desired part quality, density, and mechanical properties. Key parameters include:

*   **Laser Power:** The intensity of the laser beam directly influences the melting pool size and depth of penetration. Too low power results in incomplete fusion, while too high power can lead to excessive melting, porosity, and distortion.
*   **Scan Speed:** The speed at which the laser moves across the surface. Higher speeds can lead to narrower melt tracks and reduced heat input, while lower speeds increase heat input, potentially causing excessive melting or lack of fusion.
*   **Powder Feed Rate:** The rate at which powder is delivered to the molten pool. This affects the build rate and the ratio of powder to energy.
*   **Layer Thickness:** The thickness of each deposited layer. Thicker layers generally lead to faster build times but can result in poorer surface finish and resolution.
*   **Shielding Gas Flow Rate:** Controls the environment around the molten pool, preventing oxidation and assisting in powder delivery.
*   **Nozzle Standoff Distance:** The distance between the nozzle and the build surface. This impacts powder delivery efficiency and focus.
*   **Laser Spot Size (Focus):** The diameter of the laser beam at the focal point. A smaller spot size allows for finer details, while a larger spot size can increase deposition rates.
*   **Hatch/Path Strategy:** The pattern and spacing of laser passes within a layer and between layers.

**Interdependence of Parameters:** These parameters are highly interdependent. For example, increasing laser power might necessitate increasing scan speed to maintain a stable melt pool.

**References:**

*   **Gibson, Rosen, & Stucker (2015), Chapter 6.5:** Discusses the impact of various parameters on DED processes, offering insights into optimization strategies.
*   **Srivastava, Rathee, & Maheshwari (2019), Chapter 3 (Process Parameters in Additive Manufacturing):** This chapter likely covers the influence of various parameters across different AM technologies, including LENS, on resulting part characteristics.

---

### 5. Advantages of LENS

LENS offers several significant advantages over traditional manufacturing methods and other AM technologies:

*   **High Material Utilization:** Nearly 100% of the deposited material becomes part of the final component, minimizing waste compared to subtractive methods.
*   **Repair and Remanufacturing:** LENS excels at repairing worn or damaged components (e.g., turbine blades, dies) by adding material to the affected areas. This significantly extends component life and reduces costs.
*   **Creation of Complex Geometries:** Can produce intricate internal structures and geometries that are difficult or impossible with conventional machining.
*   **Functionally Graded Materials (FGMs):** LENS can be used to create parts with continuously varying material properties by varying the powder feed composition during the build process.
*   **High Deposition Rates:** Generally has higher deposition rates compared to some powder bed fusion processes, leading to faster build times for larger or thicker parts.
*   **Build Parts to Near-Net Shape:** Reduces the need for extensive post-processing and machining.
*   **Wide Range of Metals:** Ability to process a broad spectrum of metallic alloys.

**Example:** Repairing a high-value turbine blade by adding material to a worn edge instead of replacing the entire blade.

**References:**

*   **Chua, Leong, & Lim (2010), Chapter 5.5:** Highlights the advantages of DED, including repair capabilities and complex part fabrication.
*   **Shiva & Shukla (2024), Chapter 10 (Metal AM Technologies):** Will likely detail the specific benefits of LENS in industrial applications, such as cost savings through repair.

---

### 6. Applications of LENS

LENS finds applications across various industries due to its ability to produce high-quality metal parts and its repair capabilities.

**Key Application Areas:**

*   **Aerospace:** Repair of aircraft components (e.g., turbine blades, landing gear components), manufacturing of lightweight and complex structural parts.
*   **Automotive:** Prototyping of high-performance components, tooling, and repair of engine parts.
*   **Energy:** Manufacturing of specialized components for gas turbines, power generation equipment, and oil and gas industries.
*   **Medical:** Creating custom surgical tools, implants, and complex medical devices.
*   **Tooling:** Manufacturing and repairing molds and dies, leading to reduced lead times and costs.
*   **Defense:** Manufacturing of critical components for military equipment and repair of operational hardware.

**Example:** Using LENS to create a custom implant for a patient with a specific anatomical need.

**References:**

*   **Gibson, Rosen, & Stucker (2015), Chapter 6.5:** Provides case studies and examples of LENS applications in various sectors.
*   **Paul & Jinoop (2021), Chapter 7:** Likely dedicates sections to specific industry applications of metal AM, including LENS.
*   **Srivastava, Rathee, & Maheshwari (2019), Chapter 7 (Applications of Additive Manufacturing):** Will offer broad insights into how LENS contributes to industrial applications.

---

### 7. Alignment with Course Outcomes

*   **CO1: Understand the concept of AM from conventional manufacturing systems. (Knowledge Level: K2)**
    *   LENS, as a DED process, offers a stark contrast to subtractive manufacturing (like CNC machining) and some formative processes. Its layer-by-layer deposition and direct material addition highlight a fundamental shift in manufacturing paradigms.
*   **CO2: Understand the data processing techniques in AM process (Knowledge Level: K2)**
    *   While LENS itself doesn't directly process CAD data, the generation of toolpaths for the laser and powder delivery systems relies on slicing software to convert 3D CAD models into machine-readable instructions (G-code or similar). This involves data translation and path planning.
*   **CO3: Understand the principles of AM processes. (Knowledge Level: K2)**
    *   This topic directly addresses the core principles of LENS: laser-based melting, powder delivery, layer-by-layer fabrication, and the importance of process parameters, fulfilling this CO.
*   **CO4: Understand the application of AM in industries (Knowledge Level: K2)**
    *   The "Applications of LENS" section explicitly details how this technology is utilized across aerospace, automotive, medical, and other key industries, directly satisfying this CO.

---

### 8. Important Points to Remember

*   LENS is a **Direct Energy Deposition (DED)** process, not a powder bed fusion process like SLS.
*   It uses a **laser to melt metallic powder** as it is deposited.
*   Key advantages include **repair/remanufacturing** capabilities and the ability to create **functionally graded materials**.
*   **Process parameter optimization** is crucial for part quality.
*   LENS is well-suited for **high-value, complex metal parts** and for **extending the lifespan of existing components**.
*   The process requires a **controlled atmosphere** to prevent oxidation.

---

### 9. Practice Questions & Answers

**Question 1:** Differentiate between Laser Engineered Net Shaping (LENS) and Selective Laser Sintering (SLS) in terms of their fundamental working principles and primary material states during fusion.

**Answer:**
LENS is a **Direct Energy Deposition (DED)** process where metallic powder is fed through a nozzle and melted by a laser beam as it is deposited onto a substrate or previous layer. The powder is typically **fully melted** to form a molten pool.
SLS is a **Powder Bed Fusion (PBF)** process where a laser selectively scans and **sinters or fuses** particles of a powder bed, which is pre-placed across the build platform. It typically involves partial melting or sintering of the powder bed particles.

**Question 2:** Identify two key advantages of using LENS for component repair and explain why.

**Answer:**
1.  **Cost Savings:** Repairing a component using LENS is often significantly cheaper than replacing it entirely, especially for high-value parts like turbine blades or molds.
2.  **Extended Component Lifespan:** LENS can restore worn or damaged components to their original specifications, extending their operational life and delaying the need for replacement.
    *   *Explanation:* LENS adds material precisely to the damaged area, effectively rebuilding the component's geometry and restoring its functionality without the need for full replacement.

**Question 3:** What are the main categories of metallic materials commonly processed using LENS technology? Provide one example for each category.

**Answer:**
The main categories of metallic materials commonly processed by LENS include:
*   **Stainless Steels:** e.g., 304L, 17-4 PH
*   **Nickel Alloys:** e.g., Inconel 625, Inconel 718
*   **Titanium Alloys:** e.g., Ti-6Al-4V
*   **Tool Steels:** e.g., H13

**Question 4:** List three critical process parameters that influence the quality of parts produced by LENS and briefly explain their impact.

**Answer:**
1.  **Laser Power:** Affects the size and depth of the melt pool. Too low power leads to lack of fusion; too high leads to excessive melting, porosity, or distortion.
2.  **Scan Speed:** Dictates the time the laser interacts with the material. Higher speeds reduce heat input; lower speeds increase heat input. Crucial for balancing melting and solidification.
3.  **Powder Feed Rate:** Controls the amount of material being deposited. Influences build rate and the energy density (energy per unit volume of material). Improper rates can lead to voids or excessive heat accumulation.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
