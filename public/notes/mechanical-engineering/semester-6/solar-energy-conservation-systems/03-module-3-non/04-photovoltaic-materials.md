---
title: "Photovoltaic materials"
subject: "SOLAR ENERGY CONSERVATION SYSTEMS"
module: "Module 3: Non"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463bce"
status: "completed"
scrapedAt: "2026-05-20T18:08:21.487Z"
---
# SOLAR ENERGY CONSERVATION SYSTEMS

## Module 3: Non-Conventional Solar Energy Conversion Systems

### Topic: Photovoltaic Materials

**Learning Outcomes:** Upon completion of this topic, students will be able to:

*   Understand the fundamental principles of photovoltaic (PV) effect.
*   Identify and describe different types of photovoltaic materials used in solar cells.
*   Discuss the properties and characteristics of various semiconductor materials relevant to PV applications.
*   Analyze the advantages and disadvantages of different PV materials.
*   Explain the fabrication processes and structures of common photovoltaic devices.

**Course Outcomes Alignment:**

*   **CO1 (K2): Understand the basic concepts of solar radiation, the sun-earth relationship, and the effects of the atmosphere on solar energy.** (While not directly about materials, understanding solar radiation intensity is crucial for material performance evaluation.)
*   **CO2 (K1): Able to recall the various types of solar collectors and their theoretical principles, including flat plate collectors and concentrating collectors.** (This topic focuses on PV cells, which are the core component of PV collectors/modules, a distinct type of solar energy conversion.)
*   **CO3 (K3): Apply thermal analysis techniques to different solar collectors and implement design principles for both standalone and grid-connected PV systems.** (Understanding PV material properties is foundational to designing and analyzing PV systems, influencing efficiency and performance under varying thermal conditions.)

---

### 1. Introduction to Photovoltaic Effect and Solar Cells

**Definition:**
The **photovoltaic effect** is the creation of voltage or electric current in a material upon exposure to light. This phenomenon is the basis for solar cells, which convert light energy directly into electrical energy.

**How it Works (Basic Principle):**

1.  **Photon Absorption:** When photons (light particles) with sufficient energy strike a semiconductor material, they can excite electrons from the valence band to the conduction band, creating electron-hole pairs.
2.  **Charge Separation:** A built-in electric field within the semiconductor material, typically created by a p-n junction, separates these electron-hole pairs. Electrons are swept to one side (n-type), and holes are swept to the other (p-type).
3.  **Current Flow:** This separation of charges creates a voltage difference across the material. When an external circuit is connected, electrons flow from the n-type side to the p-type side, generating an electric current.

**Key Components of a Basic Solar Cell:**

*   **Semiconductor Material:** The heart of the solar cell, responsible for absorbing light and generating charge carriers.
*   **p-n Junction:** Created by doping different regions of the semiconductor with impurities, establishing an internal electric field.
*   **Electrical Contacts:** Conductive layers (e.g., metal grids) to collect the generated current.
*   **Anti-reflective Coating:** Minimizes light reflection from the surface, allowing more photons to enter the semiconductor.
*   **Encapsulation:** Protects the cell from environmental factors.

**References:**
*   Sukhatme, S. P. (2017) - Chapter on Photovoltaic Devices.
*   Goswami, D. Y., Kreith, F., & Kreider, J. F. (2015) - Chapter on Photovoltaic Conversion.
*   Tiwari, G. N. (2016) - Chapter on Photovoltaic Energy Conversion.
*   Messenger, R. A., & Ventre, J. (2012) - Chapter on Semiconductor Physics and Solar Cell Operation.

---

### 2. Properties of Ideal Photovoltaic Materials

An ideal photovoltaic material should possess the following properties for efficient solar energy conversion:

*   **Band Gap ($E_g$):** The energy difference between the valence and conduction bands.
    *   **Optimal Range:** Should be close to the energy of the most abundant photons in the solar spectrum (around 1.1 to 1.4 eV) for maximum theoretical efficiency.
    *   **Too Low:** Low-energy photons are absorbed, but the voltage generated is low.
    *   **Too High:** High-energy photons are absorbed, but their excess energy is lost as heat.
*   **High Absorption Coefficient:** The material should strongly absorb sunlight across a broad range of wavelengths. This allows for thinner layers, reducing material cost and improving charge carrier collection.
*   **Long Carrier Lifetime and Diffusion Length:** Generated electrons and holes should travel a sufficient distance before recombining (losing their energy and disappearing).
    *   **Diffusion Length ($L_n$, $L_p$):** The average distance a minority carrier travels before recombining.
    *   **Lifetime ($\tau_n$, $\tau_p$):** The average time a minority carrier exists before recombining.
    *   A longer diffusion length ensures that charge carriers generated deep within the material can reach the p-n junction.
*   **High Charge Carrier Mobility ($\mu_n$, $\mu_p$):** The ease with which electrons and holes move within the material under the influence of an electric field. Higher mobility leads to lower internal resistance and better current collection.
*   **Stability and Durability:** The material should withstand environmental factors (temperature, humidity, UV radiation) without significant degradation over its operational lifetime.
*   **Low Cost and Abundance:** For widespread adoption, the material should be readily available and inexpensive to process.
*   **Non-toxicity and Environmental Friendliness:** Important for sustainable energy solutions.

**References:**
*   Luque, A., & Hegedus, S. (2011) - Discusses material requirements for high-efficiency solar cells.
*   Solanki, C. S. (2013) - Explains material properties in relation to cell performance.

---

### 3. Classification of Photovoltaic Materials

Photovoltaic materials can be broadly classified based on their origin and complexity:

#### 3.1. Crystalline Silicon (c-Si)

*   **Dominant Technology:** Crystalline silicon is the most widely used material in the solar industry, accounting for over 90% of the market.
*   **Types:**
    *   **Monocrystalline Silicon (mono-Si):**
        *   **Structure:** Grown from a single silicon crystal.
        *   **Appearance:** Uniform dark color, often with rounded corners from the ingot slicing.
        *   **Efficiency:** Higher efficiency (18-24% or more) due to uniform crystal structure and fewer defects.
        *   **Cost:** Higher manufacturing cost compared to poly-Si.
        *   **References:** Messenger & Ventre (2012), Sukhatme (2017).
    *   **Polycrystalline Silicon (poly-Si or multi-Si):**
        *   **Structure:** Composed of multiple silicon crystals (grains) with grain boundaries.
        *   **Appearance:** Bluish, speckled appearance, typically square in shape.
        *   **Efficiency:** Slightly lower efficiency (15-20%) due to grain boundaries which act as recombination centers.
        *   **Cost:** Lower manufacturing cost due to simpler production process (casting).
        *   **References:** Messenger & Ventre (2012), Sukhatme (2017).
*   **Band Gap:** ~1.12 eV (at room temperature), which is close to the ideal for a single-junction solar cell.
*   **Advantages:**
    *   Well-established manufacturing processes.
    *   High efficiency and long operational lifetime (25+ years).
    *   Reliable and stable performance.
    *   Abundant and non-toxic.
*   **Disadvantages:**
    *   Relatively high processing temperature and energy intensive.
    *   Cost can still be a barrier for some applications.
    *   Rigid and heavy.
*   **Fabrication:** Czochralski process (mono-Si) and casting (poly-Si) for ingot growth, followed by wafering, cell fabrication (doping, junction formation, metallization).

---

#### 3.2. Thin-Film Photovoltaic Materials

Thin-film solar cells use very thin layers of photovoltaic material, typically a few micrometers thick, deposited onto a substrate (e.g., glass, plastic, metal).

*   **Advantages:**
    *   Lower material usage, leading to potentially lower costs.
    *   Flexibility and lighter weight (when on flexible substrates).
    *   Better performance in diffuse light and high temperatures compared to c-Si.
    *   Can be manufactured using continuous roll-to-roll processes.
*   **Disadvantages:**
    *   Generally lower efficiency compared to crystalline silicon.
    *   Some materials may contain toxic elements or have stability issues.
    *   Longer-term degradation mechanisms are still being researched for some types.

*   **Key Thin-Film Technologies:**

    *   **Cadmium Telluride (CdTe):**
        *   **Band Gap:** ~1.5 eV.
        *   **Efficiency:** 16-19% (record lab efficiencies higher).
        *   **Advantages:** High absorption coefficient, low manufacturing cost, good performance in diffuse light.
        *   **Disadvantages:** Cadmium is toxic, requiring careful handling and disposal. Long-term stability can be a concern for some formulations.
        *   **References:** Solanki (2013), Goswami, Kreith, & Kreider (2015).

    *   **Copper Indium Gallium Selenide (CIGS):**
        *   **Band Gap:** Tunable (1.0-1.7 eV) by varying the composition of In, Ga, Cu, and Se.
        *   **Efficiency:** 15-18% (record lab efficiencies higher).
        *   **Advantages:** High absorption coefficient, good performance in low light, potential for flexible substrates.
        *   **Disadvantages:** Complex material composition, Indium is relatively rare and expensive. Requires precise control of deposition parameters.
        *   **References:** Solanki (2013), Luque & Hegedus (2011).

    *   **Amorphous Silicon (a-Si):**
        *   **Structure:** Non-crystalline silicon.
        *   **Band Gap:** ~1.7 eV.
        *   **Efficiency:** 6-10% (lower than crystalline silicon).
        *   **Advantages:** Low-cost manufacturing (e.g., PECVD), flexible substrates, good performance in low light.
        *   **Disadvantages:** Significant performance degradation over time (Staebler-Wronski effect). Lower efficiency.
        *   **References:** Sukhatme (2017), Messenger & Ventre (2012).

---

#### 3.3. Emerging Photovoltaic Materials

These materials are under active research and development, aiming for higher efficiencies, lower costs, or unique properties.

*   **Perovskite Solar Cells:**
    *   **Structure:** Typically a hybrid organic-inorganic lead or tin halide-based material.
    *   **Band Gap:** Tunable, often around 1.5-1.6 eV.
    *   **Efficiency:** Rapidly increasing, with lab efficiencies exceeding 25%.
    *   **Advantages:** High absorption coefficient, tunable band gap, low-temperature solution-based processing, potential for very low cost. Can be printed on flexible substrates.
    *   **Disadvantages:** Stability issues (degradation by moisture, oxygen, heat, UV light). Lead toxicity is a concern for lead-based perovskites. Scalability of manufacturing is still being addressed.
    *   **References:** Luque & Hegedus (2011) (discusses promising new materials), Solanki (2013).

*   **Organic Photovoltaics (OPVs):**
    *   **Structure:** Based on carbon-based organic semiconductor materials.
    *   **Band Gap:** Tunable by molecular design.
    *   **Efficiency:** Typically 10-15% (lab records approaching 20%).
    *   **Advantages:** Flexible, lightweight, transparent or semi-transparent options, low-cost solution processing.
    *   **Disadvantages:** Lower efficiency compared to inorganic counterparts, limited operational lifetime due to degradation of organic materials.
    *   **References:** Boyle (2012), Solanki (2013).

*   **Dye-Sensitized Solar Cells (DSSCs):**
    *   **Structure:** Consists of a porous semiconductor layer (e.g., TiO2) coated with a light-absorbing dye, an electrolyte, and a counter electrode.
    *   **Efficiency:** Typically 7-12%.
    *   **Advantages:** Relatively low cost, good performance in diffuse light, can be made semi-transparent.
    *   **Disadvantages:** Lower efficiency, electrolyte stability issues, can be sensitive to temperature.
    *   **References:** Boyle (2012), Sukhatme (2017).

*   **Quantum Dot Solar Cells (QDSCs):**
    *   **Structure:** Utilize semiconductor nanocrystals (quantum dots) as the light-absorbing material.
    *   **Band Gap:** Tunable by controlling the size of the quantum dots.
    *   **Efficiency:** Promising lab results, but still in early stages of development for practical applications.
    *   **Advantages:** Potential for very high efficiency due to multiple exciton generation (MEG), tunable absorption spectrum.
    *   **Disadvantages:** Stability issues, complex synthesis and integration, toxicity concerns for some QD materials (e.g., Cd-based).
    *   **References:** Luque & Hegedus (2011).

---

### 4. Material Selection Criteria for PV Systems

The choice of photovoltaic material for a specific application depends on a balance of factors:

*   **Efficiency Requirements:** High efficiency is critical for space-constrained installations or maximizing energy output. Crystalline silicon is often preferred for residential and commercial rooftop systems.
*   **Cost Targets:** Thin-film technologies are often considered for large-scale utility projects where cost per watt is a primary driver.
*   **Installation Environment:**
    *   **Light Conditions:** Thin-film materials like a-Si and CIGS perform better in low-light or diffuse light conditions.
    *   **Temperature:** Some thin-film materials have better temperature coefficients than crystalline silicon, meaning their performance degrades less at higher operating temperatures.
*   **Aesthetics and Form Factor:** For building-integrated photovoltaics (BIPV), flexibility, transparency, or color options might be prioritized, favoring thin-film or emerging materials.
*   **Durability and Lifetime:** Crystalline silicon offers proven long-term reliability. Emerging technologies like perovskites require further validation of their lifespan.
*   **Environmental and Safety Concerns:** The presence of toxic materials (e.g., lead in perovskites, cadmium in CdTe) needs to be managed through careful manufacturing, installation, and end-of-life disposal protocols.

**References:**
*   Boxwell, M. (2020) - Practical considerations for system design and material choice.
*   Messenger & Ventre (2012) - Discusses system design aspects influencing material selection.

---

### 5. Key Concepts and Definitions to Remember

*   **Band Gap ($E_g$):** The minimum energy required to excite an electron from the valence band to the conduction band.
*   **Photon:** A particle of light, carrying a specific amount of energy proportional to its frequency.
*   **Electron-hole pair:** An excited state in a semiconductor created when an electron moves to the conduction band, leaving a "hole" in the valence band.
*   **p-n Junction:** The interface between p-type and n-type semiconductor materials, creating a built-in electric field.
*   **Recombination:** The process where an electron in the conduction band falls back to the valence band, annihilating an electron-hole pair.
*   **Diffusion Length:** The average distance a minority carrier travels before recombining.
*   **Absorption Coefficient:** A measure of how strongly a material absorbs light at a given wavelength.
*   **Staebler-Wronski Effect:** Light-induced degradation in amorphous silicon.
*   **Multiple Exciton Generation (MEG):** A phenomenon where a single high-energy photon can generate more than one electron-hole pair.

---

### 6. Practice Questions and Exercises

**Short Answer Questions:**

1.  What is the photovoltaic effect? (CO1 alignment)
2.  What are the two main types of crystalline silicon used in solar cells? Briefly describe their differences. (CO2 alignment)
3.  List three advantages of thin-film solar cells compared to crystalline silicon.
4.  Why is the band gap of a semiconductor material important for its photovoltaic performance? (CO1, CO3 alignment)
5.  What is the primary disadvantage of amorphous silicon solar cells?

**Problem Solving Questions:**

6.  A solar cell is made of a semiconductor material with a band gap of 1.4 eV. If a photon with an energy of 2.0 eV strikes this material, how much energy is lost as heat due to thermalization of the excited electron? (CO3 alignment)
    *   **Answer:** Energy lost = Photon Energy - Band Gap Energy = 2.0 eV - 1.4 eV = 0.6 eV.
7.  Consider two solar cells with the same efficiency but made from different materials. Cell A uses a material with a shorter diffusion length than Cell B. Which cell is likely to perform better if the light absorption occurs at a greater depth within the material? Explain your reasoning. (CO3 alignment)
    *   **Answer:** Cell B will likely perform better. A longer diffusion length means that charge carriers generated deeper within the material have a higher probability of reaching the p-n junction before recombining.

**Conceptual Questions:**

8.  Discuss the trade-offs between efficiency and cost when selecting photovoltaic materials for a large-scale solar power plant versus a portable electronic device. (CO3, CO4 alignment)
9.  Explain how the development of new photovoltaic materials, such as perovskites, could impact the future of solar energy.

---

### 7. Important Points to Remember

*   **Crystalline silicon (mono-Si and poly-Si) dominates the current solar market due to its proven reliability, efficiency, and mature manufacturing processes.**
*   **Thin-film technologies offer advantages in cost, flexibility, and performance in diffuse light, but generally have lower efficiencies.**
*   **Emerging materials like perovskites hold great promise for significantly higher efficiencies and lower costs, but stability and toxicity remain key challenges.**
*   **The band gap of a semiconductor is a critical parameter determining the spectral range of sunlight it can efficiently convert.**
*   **For effective solar cell operation, charge carriers (electrons and holes) must be generated, separated, and collected efficiently, which depends on material properties like absorption coefficient, carrier lifetime, and mobility.**
*   **Material selection is a multi-faceted decision involving technical performance, economic viability, and environmental considerations.**

---
This comprehensive set of study notes covers the essential aspects of photovoltaic materials as per the provided learning outcomes and course structure. Remember to cross-reference these notes with your textbooks for deeper understanding and additional examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
