---
title: "Classification of additive manufacturing processes"
subject: "ADDITIVE MANUFACTURING"
module: "Module 1: Introduction to Additive Manufacturing (AM)  –Basic principle of AM"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf4804463560"
status: "completed"
scrapedAt: "2026-05-20T17:57:27.703Z"
---
# Additive Manufacturing: Module 1 - Introduction to Additive Manufacturing (AM)
## Topic: Classification of Additive Manufacturing Processes

---

### **Module Overview**

This module introduces the fundamental principles of Additive Manufacturing (AM), also known as 3D printing. We will explore how AM differs from traditional subtractive and formative manufacturing processes and understand the basic concept of building objects layer by layer. This topic focuses specifically on classifying the various AM processes available, providing a framework for understanding their underlying mechanisms, materials, and applications.

---

### **Course Outcomes Addressed in this Topic:**

*   **CO1: Understand the concept of AM from conventional manufacturing systems. (Knowledge Level: K2)**
    *   This topic will highlight the layer-by-layer approach of AM and contrast it with subtractive (e.g., machining) and formative (e.g., molding) methods.
*   **CO3: Understand the principles of AM processes. (Knowledge Level: K2)**
    *   The core of this topic is to detail the principles behind different AM process categories.

---

### **Learning Outcomes for this Topic:**

Upon successful completion of this topic, you will be able to:

*   Categorize the major additive manufacturing processes based on their underlying working principles.
*   Explain the fundamental working mechanism of each major AM process category.
*   Identify the primary material types used in each AM process category.
*   Relate specific AM processes to their common applications.

---

## **1. Introduction: The Need for Classification**

Additive Manufacturing encompasses a diverse range of technologies, each with unique methods of material deposition, fusion, and solidification. To effectively understand and select the appropriate AM process for a given application, it's crucial to classify these processes. This classification helps in comprehending their strengths, limitations, material compatibility, and potential applications.

**(Reference: Gibson et al., Chapter 1: Introduction to Additive Manufacturing Technologies)**

---

## **2. Major Classification Schemes for AM Processes**

While various classification systems exist, a commonly accepted and comprehensive approach is based on the **method of material addition or the state of the material used**. The **ISO/ASTM 52900 standard** is a key reference for standardizing AM terminology and classification. This standard categorizes AM processes into seven major families.

**(Reference: Gibson et al., Chapter 2: Classification of Additive Manufacturing Technologies)**
**(Reference: Chua et al., Chapter 2: Introduction to Rapid Prototyping Technologies)**

---

## **3. The Seven Major AM Process Families (ISO/ASTM 52900 Standard)**

Let's delve into each of these families:

### **3.1. Vat Photopolymerization**

This category utilizes a liquid photopolymer (resin) that solidifies when exposed to specific wavelengths of light, typically UV light. The light source selectively cures the resin layer by layer.

*   **Key Principle:** Photopolymerization (curing of liquid resin by light).
*   **Material State:** Liquid photopolymer resin.
*   **Process Description:** A build platform is lowered into a vat of liquid photopolymer. A light source (UV laser or digital projector) scans or projects a pattern onto the resin surface, selectively curing it to form a solid layer. The platform is then raised or lowered by a small increment, and the process is repeated for subsequent layers.
*   **Sub-processes:**
    *   **Stereolithography (SLA):** Uses a UV laser to trace the cross-section of each layer on the surface of the liquid photopolymer.
        *   *Example:* Producing highly detailed prototypes, intricate jewelry molds.
    *   **Digital Light Processing (DLP):** Uses a digital projector screen to flash an image of an entire layer at once onto the resin surface.
        *   *Example:* Faster production of multiple parts simultaneously, dental applications.
    *   **Continuous Liquid Interface Production (CLIP) / Projection Micro Stereolithography (PµSL):** Advanced variations that can achieve faster build speeds by using a "dead zone" of low-oxygen liquid resin at the interface between the curing resin and the build platform.
*   **Materials:** Photopolymer resins (acrylics, epoxies, etc.) with varying properties (toughness, flexibility, transparency, biocompatibility).
*   **Advantages:** High resolution, smooth surface finish, good for complex geometries.
*   **Disadvantages:** Limited material choices, post-curing often required, can be brittle.

**(Reference: Gibson et al., Chapter 3: Vat Photopolymerization)**
**(Reference: Chua et al., Chapter 3: Stereolithography Apparatus (SLA))**

### **3.2. Powder Bed Fusion (PBF)**

This family of processes uses a thermal energy source (laser or electron beam) to fuse or melt powdered material layer by layer.

*   **Key Principle:** Selective melting or fusion of powder particles.
*   **Material State:** Powder.
*   **Process Description:** A thin layer of powder is spread across a build platform. A thermal energy source then selectively fuses the powder particles according to the cross-section of the part. The build platform is lowered, a new layer of powder is spread, and the process repeats. Unfused powder acts as support material for overhangs.
*   **Sub-processes:**
    *   **Selective Laser Sintering (SLS):** Uses a laser to sinter (fuse without fully melting) powdered polymers.
        *   *Example:* Functional prototypes, end-use parts made from nylon or TPU.
    *   **Selective Laser Melting (SLM) / Direct Metal Laser Sintering (DMLS):** Uses a laser to fully melt metal powders.
        *   *Example:* Aerospace components, medical implants, intricate metal tooling.
    *   **Electron Beam Melting (EBM):** Uses an electron beam in a vacuum to melt metal powders.
        *   *Example:* High-performance metal parts with excellent mechanical properties.
    *   **Multi Jet Fusion (MJF):** Uses an inkjet array to apply fusing and detailing agents to a powder bed, followed by a heat source that fuses the areas with the fusing agent.
        *   *Example:* High-throughput production of polymer parts.
*   **Materials:** Polymers (nylon, TPU), metals (titanium, aluminum, stainless steel, cobalt-chrome), ceramics.
*   **Advantages:** Wide range of materials (especially metals), no external support structures needed (powder bed acts as support), good for complex geometries and functional parts.
*   **Disadvantages:** Higher cost, often requires post-processing (powder removal, heat treatment), surface finish can be rough.

**(Reference: Gibson et al., Chapter 4: Powder Bed Fusion)**
**(Reference: Chua et al., Chapter 4: Selective Laser Sintering (SLS))**
**(Reference: Pham & Dimov, Chapter 3: Powder-based Processes)**

### **3.3. Material Jetting (MJ) / Inkjet Printing**

This process is analogous to inkjet printing but uses print heads to deposit droplets of build material (often photopolymers or waxes) that are then cured or solidified.

*   **Key Principle:** Droplet deposition of build material.
*   **Material State:** Liquid (photopolymers, waxes).
*   **Process Description:** Print heads selectively deposit droplets of build material onto the build platform. These droplets are often UV-cured immediately after deposition or solidified by other means. Support structures can be printed simultaneously using a different material that is easily removable.
*   **Sub-processes:**
    *   **Material Jetting (PolyJet, MultiJet):** Deposition of photopolymer droplets that are immediately cured by UV light. Multiple print heads can deposit different materials in the same layer, allowing for multi-material and multi-color parts.
        *   *Example:* Realistic prototypes with different material properties and colors, visual models.
    *   **Wax Printing:** Uses molten wax that solidifies upon cooling. Often used for casting patterns.
        *   *Example:* Investment casting patterns for metals.
*   **Materials:** Photopolymer resins, waxes.
*   **Advantages:** Excellent surface finish, high accuracy, ability to print multi-material and multi-color parts, supports can be easily removed.
*   **Disadvantages:** Limited material properties compared to PBF, can be expensive.

**(Reference: Gibson et al., Chapter 5: Material Jetting)**
**(Reference: Chua et al., Chapter 5: Material Jetting)**

### **3.4. Binder Jetting (BJ)**

This process uses a liquid binding agent (glue) to selectively join powder particles.

*   **Key Principle:** Selective application of a liquid binder to powder.
*   **Material State:** Powder.
*   **Process Description:** A thin layer of powder is spread on the build platform. An inkjet print head then moves over the powder bed and deposits droplets of a liquid binding agent according to the cross-section of the part. The binder holds the powder particles together. The platform is lowered, a new layer of powder is spread, and the process repeats. The "green" part is then typically post-processed (e.g., infiltration, sintering) for strength and density.
*   **Materials:** Metals, ceramics, sand.
*   **Advantages:** Wide range of materials (including metals and sand), relatively fast build speed, no supports needed (powder bed provides support), cost-effective for large parts.
*   **Disadvantages:** Green parts are fragile, requires significant post-processing to achieve desired properties (e.g., infiltration with metal for metal parts, firing for ceramic parts), porosity can be an issue.
*   *Example:* Metal parts made by infiltration, sand molds and cores for metal casting.

**(Reference: Gibson et al., Chapter 6: Binder Jetting)**
**(Reference: Paul & Jinoop, Chapter 4: Binder Jetting Technology)**

### **3.5. Material Extrusion (ME)**

This is perhaps the most widely recognized AM process due to the popularity of desktop 3D printers. Material is selectively dispensed through a nozzle or orifice.

*   **Key Principle:** Extrusion of material in a semi-molten or viscous state.
*   **Material State:** Filament, pellet, or paste.
*   **Process Description:** Material is fed from a spool (filament), hopper (pellets), or syringe (paste) and pushed through a heated nozzle. The nozzle moves in a 2D plane according to the cross-section of the part, depositing a bead of material. The build platform is then lowered (or the nozzle assembly is raised), and the next layer is deposited on top of the previous one.
*   **Sub-processes:**
    *   **Fused Deposition Modeling (FDM) / Fused Filament Fabrication (FFF):** Extrudes thermoplastic filament.
        *   *Example:* Prototyping, functional parts, educational tools.
    *   **Robotic Arm Extrusion:** Uses a robotic arm with an extruder for large-scale or complex path printing.
        *   *Example:* Large architectural models, construction elements.
    *   **Paste Extrusion:** Extrudes viscous materials like clay, cement, or food.
        *   *Example:* 3D printed ceramics, concrete structures, food printing.
*   **Materials:** Thermoplastics (ABS, PLA, PETG, Nylon), composite materials, ceramics, food, concrete.
*   **Advantages:** Relatively low cost, wide range of materials available, easy to use, good for functional prototypes and end-use parts.
*   **Disadvantages:** Visible layer lines, lower resolution and surface finish compared to Vat Photopolymerization and Material Jetting, anisotropy in mechanical properties.

**(Reference: Gibson et al., Chapter 7: Material Extrusion)**
**(Reference: Chua et al., Chapter 4: Fused Deposition Modeling (FDM))**
**(Reference: Srivastava et al., Chapter 2: Material Extrusion based AM Technologies)**

### **3.6. Directed Energy Deposition (DED)**

This process uses a focused thermal energy source (laser or electron beam) to melt material as it is being deposited.

*   **Key Principle:** Simultaneous deposition and melting of material.
*   **Material State:** Powder or wire.
*   **Process Description:** A focused thermal energy source (laser or electron beam) melts material (powder or wire) as it is fed through a nozzle. The nozzle is typically mounted on a multi-axis robotic arm or gantry system, allowing for deposition onto existing surfaces or in free space.
*   **Sub-processes:**
    *   **Laser Engineered Net Shaping (LENS) / Direct Energy Deposition (DED):** Uses a laser to melt metal powder or wire as it is fed into the melt pool.
        *   *Example:* Repairing high-value metal parts, adding features to existing components, building large metal structures.
    *   **Electron Beam Additive Manufacturing (EBAM):** Uses an electron beam to melt metal wire.
        *   *Example:* Large-scale metal parts with good material properties.
*   **Materials:** Metals (titanium, aluminum, stainless steel, nickel alloys).
*   **Advantages:** Ability to repair parts, add features to existing components, build large metal parts, high deposition rates.
*   **Disadvantages:** Lower resolution than powder bed fusion, surface finish is rough and often requires post-machining, material property anisotropy can occur.

**(Reference: Gibson et al., Chapter 8: Directed Energy Deposition)**
**(Reference: Shiva & Shukla, Chapter 3: Directed Energy Deposition (DED))**

### **3.7. Sheet Lamination (SL)**

This process involves joining sheet materials together layer by layer.

*   **Key Principle:** Layering and bonding of sheet materials.
*   **Material State:** Sheets (paper, plastic, metal).
*   **Process Description:** Sheets of material are cut to the desired cross-sectional shape and then bonded together. The bonding can be achieved through mechanical fastening, ultrasonic welding, or adhesion. For paper-based systems, a binding agent is often applied, and the sheets are then compressed.
*   **Sub-processes:**
    *   **Laminated Object Manufacturing (LOM):** Uses a laser or blade to cut successive layers of paper, plastic, or composite film, which are then bonded together.
        *   *Example:* Large architectural models, aesthetic prototypes.
    *   **Ultrasonic Additive Manufacturing (UAM):** Bonds layers of metal foil together using ultrasonic welding, followed by CNC milling to define the final shape.
        *   *Example:* Metal-composite hybrid parts, heat exchangers.
*   **Materials:** Paper, plastic films, metal foils.
*   **Advantages:** Can produce large parts relatively quickly, can incorporate different materials, no support structures needed for most cases.
*   **Disadvantages:** Limited geometric complexity, anisotropic material properties, post-processing (e.g., deburring, smoothing) often required.

**(Reference: Gibson et al., Chapter 9: Sheet Lamination)**
**(Reference: Chua et al., Chapter 6: Laminated Object Manufacturing (LOM))**

---

## **4. Summary Table of AM Process Families**

| Process Family         | Key Principle                               | Material State | Common Materials                     | Primary Energy Source/Method | Example Applications                                     |
| :--------------------- | :------------------------------------------ | :------------- | :----------------------------------- | :--------------------------- | :------------------------------------------------------- |
| Vat Photopolymerization | Photopolymerization by light                | Liquid         | Photopolymer resins                  | UV Light (Laser/Projector)   | Prototypes, intricate models, dental aligners            |
| Powder Bed Fusion      | Selective melting/fusion of powder          | Powder         | Polymers, Metals, Ceramics           | Laser, Electron Beam         | Functional prototypes, aerospace parts, medical implants |
| Material Jetting       | Droplet deposition                          | Liquid         | Photopolymers, Waxes                 | UV Light                     | Realistic prototypes, multi-color models, casting patterns |
| Binder Jetting         | Selective binding of powder                 | Powder         | Metals, Ceramics, Sand               | Liquid Binder                | Metal parts (post-processed), sand molds and cores       |
| Material Extrusion     | Extrusion of material                       | Filament/Paste | Thermoplastics, Composites, Paste    | Heated Nozzle                | Prototyping, tooling, functional parts, construction     |
| Directed Energy Dep.   | Simultaneous deposition and melting         | Powder/Wire    | Metals                               | Laser, Electron Beam         | Part repair, feature addition, large metal components    |
| Sheet Lamination       | Layering and bonding of sheet materials     | Sheets         | Paper, Plastics, Metal Foils         | Laser, Blade, Ultrasonic     | Models, architectural parts, hybrid components           |

---

## **5. Connecting AM Classification to Course Outcomes**

*   **CO1: Understand the concept of AM from conventional manufacturing systems.**
    *   The classification highlights how AM builds objects layer by layer, contrasting with subtractive methods (removing material) and formative methods (shaping material in a mold). For example, Material Extrusion is like building with a hot glue gun, fundamentally different from CNC machining.
*   **CO3: Understand the principles of AM processes.**
    *   This entire topic is dedicated to explaining the underlying principles of each of the seven major AM process families, such as photopolymerization, powder fusion, extrusion, etc.

---

## **6. Important Points to Remember**

*   **Layer-by-Layer Buildup:** The fundamental principle common to all AM processes.
*   **ISO/ASTM 52900 Standard:** The recognized standard for classifying AM processes into seven families.
*   **Material State:** A primary differentiator between process families (liquid, powder, sheet).
*   **Energy Source:** The method used to consolidate or bond the material (light, heat, binder).
*   **Applications:** Each process family is suited for different types of applications based on material capabilities, geometric complexity, and desired part properties.
*   **Trade-offs:** No single AM process is superior for all applications. Understanding their strengths and weaknesses is crucial for selection.

---

## **7. Practice Questions and Exercises**

**Question 1:** Which AM process family uses a liquid photopolymer that solidifies upon exposure to UV light?
    a) Material Extrusion
    b) Binder Jetting
    c) Vat Photopolymerization
    d) Powder Bed Fusion

**Question 2:** Differentiate between Selective Laser Sintering (SLS) and Stereolithography (SLA) in terms of material used and primary solidification mechanism.

**Question 3:** You need to create a highly detailed prototype with smooth surface finish using a polymer. Which AM process family would be most suitable?
    a) Directed Energy Deposition
    b) Material Extrusion
    c) Binder Jetting
    d) Vat Photopolymerization

**Question 4:** What is the main advantage of using unfused powder as support structures in Powder Bed Fusion processes?

**Question 5:** Describe the core principle of Material Extrusion, providing one common example.

---

## **8. Answers to Practice Questions**

**Answer 1:**
    c) Vat Photopolymerization

**Answer 2:**
    *   **Selective Laser Sintering (SLS):** Uses powdered polymers (e.g., Nylon) and a laser to sinter (fuse) the powder particles without fully melting them.
    *   **Stereolithography (SLA):** Uses liquid photopolymer resins and a UV laser to selectively cure and solidify the resin layer by layer.

**Answer 3:**
    d) Vat Photopolymerization (SLA and DLP within this family are known for high resolution and smooth surfaces).

**Answer 4:**
    The main advantage is that it eliminates the need for separate, manually printed support structures, simplifying the build process and allowing for complex internal geometries. The unfused powder itself supports overhangs and delicate features.

**Answer 5:**
    The core principle of Material Extrusion is the deposition of material through a nozzle in a semi-molten or viscous state, building the object layer by layer.
    *   **Example:** Fused Deposition Modeling (FDM) or Fused Filament Fabrication (FFF), where thermoplastic filament is melted and extruded through a heated nozzle.

---

This concludes the introduction to the classification of additive manufacturing processes. Understanding these categories is fundamental to appreciating the diverse capabilities and applications of AM.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
