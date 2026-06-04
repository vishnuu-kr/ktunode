---
title: "Classification of additive manufacturing processes"
subject: "ADDITIVE MANUFACTURING"
module: "Module 1: Introduction to Additive Manufacturing (AM)  –Basic principle of AM"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463b51"
status: "completed"
scrapedAt: "2026-05-20T18:02:25.976Z"
---
# Additive Manufacturing: Module 1 - Introduction to AM - Basic Principles

## Topic: Classification of Additive Manufacturing Processes

**Course Outcomes (CO) Addressed:** CO1, CO3

**Knowledge Level:** K2 (Understanding)

---

### 1. Introduction to Additive Manufacturing (AM)

Additive Manufacturing (AM), often referred to as 3D Printing, is a revolutionary manufacturing approach that builds objects layer by layer from digital design data. This contrasts sharply with traditional subtractive manufacturing methods (e.g., machining) where material is removed from a larger block.

**Key Concept:** Layer-by-layer fabrication.

**Basic Principle:** AM processes utilize digital design files (CAD models) to guide the deposition or fusion of material in successive layers to create a three-dimensional object.

---

### 2. Why Classify AM Processes?

Understanding the different AM processes is crucial for selecting the most suitable technology for a specific application. Classification helps in:

*   **Technology Selection:** Matching process capabilities to material requirements, geometric complexity, and desired part properties.
*   **Process Understanding:** Identifying the underlying physical principles, advantages, and limitations of each method.
*   **Material Compatibility:** Recognizing which materials can be processed by which AM technologies.
*   **Application Alignment:** Connecting specific AM processes to their common industry applications.

---

### 3. Major AM Process Classification Systems

While there are various ways to categorize AM processes, the most widely adopted and comprehensive classification is based on the **method of layer formation and material binding**. This system is commonly used in major textbooks and industry standards.

---

### 4. Classification by ASTM International (Based on ISO/ASTM 52900:2021)

The International Organization for Standardization (ISO) and ASTM International have standardized terminology and classification for AM. The current standard identifies **seven major categories**:

---

#### 4.1. Material Extrusion (ME)

*   **Principle:** Material is selectively dispensed through a nozzle or orifice. The material is typically heated and extruded in a molten or semi-molten state and then deposited layer by layer.

*   **Key Concepts:**
    *   **Thermoplastic Filament:** Most common material, extruded through a heated nozzle.
    *   **Nozzle Diameter:** Affects feature resolution and build speed.
    *   **Layer Height:** Determines vertical resolution.
    *   **Bed Leveling:** Crucial for initial layer adhesion.
    *   **Support Structures:** Often required for overhanging features.

*   **Examples of Processes/Technologies:**
    *   **Fused Deposition Modeling (FDM) / Fused Filament Fabrication (FFF):** (Gibson et al., 2nd Ed., Chapter 4) The most widely known and accessible AM technology. Uses thermoplastic filaments like PLA, ABS, PETG, Nylon.
    *   **Robotic Extrusion:** Large-scale extrusion systems using robotic arms.
    *   **Paste Extrusion:** Extruding pastes (e.g., ceramic pastes, food products).

*   **Materials:** Thermoplastics, elastomers, ceramics (as pastes), food ingredients.

*   **Applications:** Prototyping, functional parts, tooling, architectural models, low-cost manufacturing.

*   **Important Point to Remember:** FDM/FFF is characterized by its use of filament feedstock and heated extrusion.

---

#### 4.2. Vat Photopolymerization (VP)

*   **Principle:** A liquid photopolymer resin in a vat is selectively exposed to light (UV or visible light) to cure or solidify it layer by layer.

*   **Key Concepts:**
    *   **Photopolymer Resin:** Liquid material that cures upon light exposure.
    *   **Light Source:** UV lasers (e.g., DLP) or UV LEDs.
    *   **Build Platform:** Moves within the resin vat.
    *   **Masking or Scanning:** Determines which areas are exposed.
    *   **Post-curing:** Often required to achieve full material properties.

*   **Examples of Processes/Technologies:**
    *   **Stereolithography (SLA):** (Chua et al., 3rd Ed., Chapter 5) Uses a UV laser to selectively cure resin. Known for high accuracy and smooth surface finish.
    *   **Digital Light Processing (DLP):** Uses a digital projector to cure an entire layer of resin simultaneously. Faster than SLA for larger layers.
    *   **Continuous Liquid Interface Production (CLIP):** (Gibson et al., 2nd Ed., Chapter 5) A variation that uses an oxygen-permeable window to create a "dead zone" allowing for continuous, rapid printing.

*   **Materials:** Photopolymer resins (e.g., acrylics, epoxies).

*   **Applications:** High-resolution prototypes, detailed models, dental applications, jewelry, medical devices.

*   **Important Point to Remember:** VP relies on light-induced curing of liquid resins.

---

#### 4.3. Powder Bed Fusion (PBF)

*   **Principle:** A layer of powder material is spread across a build platform, and an energy source selectively fuses or melts the powder particles together according to the digital design. A new layer of powder is then spread, and the process repeats.

*   **Key Concepts:**
    *   **Powder Feedstock:** Fine particles of metal, polymer, or ceramic.
    *   **Energy Source:** Laser or electron beam.
    *   **Fusion/Melting:** Particles bond together.
    *   **Powder Recoating:** Spreading a uniform layer of powder.
    *   **Support Structures:** Often built from the same powder material.

*   **Examples of Processes/Technologies:**
    *   **Selective Laser Sintering (SLS):** (Gibson et al., 2nd Ed., Chapter 7) Uses a laser to sinter (fuse particles without melting) polymer powders (e.g., Nylon).
    *   **Selective Laser Melting (SLM) / Direct Metal Laser Sintering (DMLS):** (Gibson et al., 2nd Ed., Chapter 9; Pham & Dimov, Chapter 3) Uses a laser to fully melt metal powders. Produces dense, strong metal parts.
    *   **Electron Beam Melting (EBM):** Uses an electron beam in a vacuum to melt metal powders. Offers higher build speeds and is often used for reactive metals.

*   **Materials:** Polymers (Nylon, TPU), Metals (Titanium, Aluminum, Stainless Steel), Ceramics.

*   **Applications:** Functional metal parts, complex geometries, aerospace components, automotive parts, medical implants.

*   **Important Point to Remember:** PBF fuses powdered materials using a laser or electron beam.

---

#### 4.4. Binder Jetting (BJ)

*   **Principle:** A liquid binding agent is selectively deposited onto a bed of powder particles to bond them together layer by layer.

*   **Key Concepts:**
    *   **Powder Bed:** Similar to PBF, but the powder is not melted.
    *   **Binding Agent (Inkjet):** A liquid adhesive that glues the powder particles.
    *   **Curing/Sintering (Post-processing):** Often required to achieve part strength and density.
    *   **Color Printing:** The binder can be colored to create full-color parts.

*   **Examples of Processes/Technologies:**
    *   **Binder Jetting:** (Gibson et al., 2nd Ed., Chapter 6) Can be used for polymers, metals, and ceramics. Metal parts typically require infiltration or sintering.
    *   **Sand Casting:** Binder jetting is widely used to create sand molds and cores for casting.

*   **Materials:** Polymers, Metals (requiring post-processing), Ceramics, Sand.

*   **Applications:** Full-color models, prototypes, sand molds for casting, functional metal parts (with post-processing).

*   **Important Point to Remember:** BJ uses a liquid binder to join powder particles, unlike PBF which fuses the powder itself.

---

#### 4.5. Material Jetting (MJ)

*   **Principle:** Droplets of build material (e.g., photopolymers) are selectively deposited onto a build platform, similar to inkjet printing, and then cured by UV light.

*   **Key Concepts:**
    *   **Droplet Deposition:** Similar to inkjet printing.
    *   **Photopolymer Materials:** Often used for high detail and multi-material capabilities.
    *   **UV Curing:** Solidifies the deposited droplets.
    *   **Multi-Material Printing:** Can deposit different materials simultaneously.

*   **Examples of Processes/Technologies:**
    *   **PolyJet / MultiJet Modeling (MJM):** (Gibson et al., 2nd Ed., Chapter 3) Allows for the printing of parts with multiple materials and colors in a single build, creating realistic prototypes with varying properties.
    *   **Inkjet Printing:** Can be used for polymers, but also for ceramics and metals in specialized applications.

*   **Materials:** Photopolymers (various properties like rigidity, flexibility, transparency), Waxes.

*   **Applications:** Realistic prototypes, concept models, visual aids, functional prototypes with multi-material properties.

*   **Important Point to Remember:** MJ is characterized by jetting droplets of build material which are then cured.

---

#### 4.6. Directed Energy Deposition (DED)

*   **Principle:** Material is deposited and simultaneously fused by a focused thermal energy source as it is being jetted onto a surface. This is often used for repairing or adding material to existing parts.

*   **Key Concepts:**
    *   **Simultaneous Deposition and Fusion:** Material is fed into a melt pool created by the energy source.
    *   **Energy Sources:** Lasers, electron beams, or plasma arcs.
    *   **Powder or Wire Feedstock:** Material can be supplied in powder or wire form.
    *   **Repair and Cladding:** Common applications for DED.

*   **Examples of Processes/Technologies:**
    *   **Laser Engineered Net Shaping (LENS):** (Gibson et al., 2nd Ed., Chapter 10) Uses a laser to melt powder fed through a nozzle.
    *   **Electron Beam Additive Manufacturing (EBAM):** Uses an electron beam to melt wire feedstock.
    *   **Wire Arc Additive Manufacturing (WAAM):** Uses arc welding processes (e.g., GMAW, GTAW) to deposit material from wire.

*   **Materials:** Metals (Titanium, Aluminum, Steel), High-temperature alloys.

*   **Applications:** Repairing high-value parts (e.g., turbine blades), adding features to existing components, large-scale metal part fabrication.

*   **Important Point to Remember:** DED involves feeding material directly into a melt pool created by an energy source, often for repair or adding features.

---

#### 4.7. Sheet Lamination (SL)

*   **Principle:** Layers of material (typically sheets) are bonded together and then cut to shape. The layers can be bonded by adhesive, ultrasonic welding, or by fusing material through mechanical means.

*   **Key Concepts:**
    *   **Sheet Material:** Paper, plastic, metal foils.
    *   **Bonding Mechanism:** Adhesive, welding, or thermal bonding.
    *   **Cutting Mechanism:** Laser cutting, waterjet cutting, or milling.
    *   **Layer by Layer Assembly:** Parts are built by stacking and cutting laminated sheets.

*   **Examples of Processes/Technologies:**
    *   **Laminated Object Manufacturing (LOM):** (Chua et al., 3rd Ed., Chapter 6) Uses adhesive-coated sheets (e.g., paper, plastic) that are bonded together and then cut by a laser.
    *   **Ultrasonic Additive Manufacturing (UAM):** Bonds metal foil layers using ultrasonic welding, then mills the shape.

*   **Materials:** Paper, Plastic, Metal Foils.

*   **Applications:** Prototypes, form and fit models, tooling, architectural models, decorative items.

*   **Important Point to Remember:** SL builds parts by laminating and cutting sheets of material.

---

### 5. Comparison of AM Processes

| Process Category        | Core Principle                                   | Material Form         | Energy Source (Typical)      | Key Advantages                                                               | Key Limitations                                                                   |
| :---------------------- | :----------------------------------------------- | :-------------------- | :--------------------------- | :--------------------------------------------------------------------------- | :-------------------------------------------------------------------------------- |
| **Material Extrusion**  | Dispensing and solidifying material layer by layer | Filament, Paste       | Thermal Heat             | Cost-effective, diverse materials, good for prototypes & functional parts    | Lower resolution, visible layer lines, potential for warping                     |
| **Vat Photopolymerization** | Curing liquid photopolymer with light            | Liquid Resin          | UV Laser/LEDs            | High resolution, smooth surfaces, excellent for intricate details            | Limited material properties, requires post-curing, material cost, limited build size |
| **Powder Bed Fusion**   | Fusing or melting powder particles layer by layer    | Powder                | Laser, Electron Beam     | High mechanical properties, complex geometries, good for metals & polymers     | High cost of equipment and materials, post-processing (powder removal)           |
| **Binder Jetting**      | Depositing binder onto powder particles          | Powder                | Liquid Binder            | Full-color printing, faster than PBF for some applications, lower cost than PBF | Lower part strength without post-processing, porosity                           |
| **Material Jetting**    | Jetting droplets of material and curing          | Liquid Photopolymer   | UV Light                 | Multi-material and multi-color capabilities, high accuracy, good surface finish | Limited material range, proprietary materials, part properties can be anisotropic  |
| **Directed Energy Dep.** | Depositing material into a melt pool             | Powder, Wire          | Laser, Electron Beam, Arc | Repair of parts, addition of features, large part fabrication, high material deposition rate | Lower resolution than PBF, surface finish can be rough, requires skilled operation |
| **Sheet Lamination**    | Bonding and cutting stacked sheets               | Sheet (Paper, Plastic, Metal) | Adhesive, Welding, Thermal | Large build volumes, some metal capabilities, potentially lower cost         | Limited geometric complexity, anisotropic properties, visible layer lines          |

---

### 6. Connecting to Course Outcomes (COs)

*   **CO1: Understand the concept of AM from conventional manufacturing systems.**
    *   This classification highlights the fundamental difference between additive (layer-by-layer) and subtractive (material removal) processes. The basic principles of each AM category further differentiate them from traditional methods.
*   **CO3: Understand the principles of AM processes.**
    *   This entire topic is dedicated to explaining the underlying principles of each of the seven major AM categories, including their material handling, energy sources, and layer formation mechanisms.

---

### 7. Practice Questions and Answers

**Question 1:** Which AM process category utilizes a laser or electron beam to fuse powdered materials?
    *   a) Material Extrusion
    *   b) Vat Photopolymerization
    *   c) Powder Bed Fusion
    *   d) Binder Jetting

**Answer:** c) Powder Bed Fusion

**Question 2:** What is the primary difference between Selective Laser Sintering (SLS) and Selective Laser Melting (SLM)?
    *   a) SLS uses powder, SLM uses filament.
    *   b) SLS fuses polymers, SLM fuses metals.
    *   c) SLS sinters particles below melting point, SLM melts particles.
    *   d) SLS uses a laser, SLM uses an electron beam.

**Answer:** c) SLS sinters particles below melting point, SLM melts particles. (While SLM is often associated with metals and SLS with polymers, the core distinction is the sintering vs. melting aspect of the powder fusion.)

**Question 3:** If you need to print a highly detailed, smooth prototype with intricate internal features, which AM process would be most suitable?
    *   a) Material Extrusion (FDM/FFF)
    *   b) Vat Photopolymerization (SLA/DLP)
    *   c) Sheet Lamination (LOM)
    *   d) Binder Jetting

**Answer:** b) Vat Photopolymerization (SLA/DLP) is known for its high resolution and smooth surface finish, making it ideal for intricate details.

**Question 4:** Describe the basic principle of Material Jetting (MJ) and give an example of a technology within this category.
    *   **Answer:** Material Jetting involves selectively depositing droplets of build material onto a build platform, similar to inkjet printing, and then curing these droplets, typically with UV light. An example technology is PolyJet or MultiJet Modeling (MJM).

**Question 5:** Which AM process is commonly used for creating sand molds for metal casting?
    *   a) Material Extrusion
    *   b) Powder Bed Fusion
    *   c) Binder Jetting
    *   d) Directed Energy Deposition

**Answer:** c) Binder Jetting is widely used for printing sand molds and cores due to its ability to bind sand particles with a binder.

---

### 8. Important Points to Remember

*   **Layer-by-Layer:** The fundamental principle shared by all AM processes.
*   **Digital to Physical:** AM transforms digital 3D models into physical objects.
*   **Seven Categories:** Understand the distinct principles of Material Extrusion, Vat Photopolymerization, Powder Bed Fusion, Binder Jetting, Material Jetting, Directed Energy Deposition, and Sheet Lamination.
*   **Material and Energy:** Each category has specific ways of handling materials (filament, powder, liquid, sheet) and using energy sources (thermal, light, electron beam, binder).
*   **Applications:** The choice of AM process is driven by the desired part properties, complexity, material, and application.
*   **Standardization:** The ASTM/ISO classification provides a common framework for understanding and discussing AM technologies.

---

**References Used:**

*   Gibson, l D. W. Rosen l, and B. Stucker. *Additive Manufacturing Technologies-3D Printing, Rapid Prototyping, and Direct Digital Manufacturing*. Second Edition. Springer, 2015.
*   Chua, C.K., Leong K.F., and Lim C.S. *Rapid prototyping: Principles and applications*. Third edition. World Scientific Publishers, 2010.
*   Pham, D.T., and Dimov, S.S. *Rapid Manufacturing The Technologies and Applications of Rapid Prototyping and Rapid Tooling*. Softcover reprint of the original 1st ed. 2001, 2011. Springer London Ltd.
*   ISO/ASTM 52900:2021 *Additive manufacturing — General principles — Terminology*.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
