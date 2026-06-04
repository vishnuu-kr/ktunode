---
title: "Li-ion battery & H 2-O2 fuel cell (acid electrolyte only) construction and working."
subject: "CHEMISTRY FOR PHYSICAL SCIENCE"
module: "Module 2: Electrochemistry and Corrosion Science"
branch: "Civil Engineering"
semester: 1
topicId: "68b54566d74ec52cc0912d86"
status: "completed"
scrapedAt: "2026-05-20T18:28:52.837Z"
---
# Module 2: Electrochemistry and Corrosion Science

## Topic: Li-ion Battery & H₂-O₂ Fuel Cell (Acid Electrolyte Only) Construction and Working

Welcome, everyone! Today, we're diving into two incredibly important electrochemical devices: the Lithium-ion battery and the Hydrogen-Oxygen fuel cell. These technologies are at the heart of so many modern conveniences, from powering our smartphones to potentially revolutionizing how we generate clean energy. Our aim today is to understand their construction and how they actually *work*. This will directly help us achieve **CO1** (understanding materials in industries) and **CO2** (explaining electrochemistry for engineering applications).

### 1. The Lithium-ion Battery: The Ubiquitous Powerhouse

Think about your phone, your laptop, your electric car – they all rely on lithium-ion batteries. They've become so common, we almost take them for granted! But how are they built, and what makes them tick?

#### 1.1 Construction of a Li-ion Battery

A typical Li-ion battery has three main components, sandwiched together:

*   **Anode (Negative Electrode):** This is where the lithium ions *start* their journey when the battery is discharging. In most Li-ion batteries, the anode material is graphite (specifically, carbon in its graphite form). Why graphite? It has a layered structure that can readily intercalate (meaning, insert and hold) lithium ions. Imagine it like a stack of papers where lithium ions can slip in between the pages.

*   **Cathode (Positive Electrode):** This is where the lithium ions *end up* when the battery is discharging. The cathode is typically made of a metal oxide that contains lithium, such as lithium cobalt oxide (LiCoO₂), lithium manganese oxide (LiMn₂O₄), or lithium iron phosphate (LiFePO₄). The choice of cathode material significantly affects the battery's voltage, capacity, and lifespan. From textbooks like Jain & Jain, you'll see discussions on how these different metal oxides offer varying electrochemical potentials, directly impacting battery performance.

*   **Electrolyte:** This is the medium that allows lithium ions to travel between the anode and cathode. Critically, it *does not* allow electrons to pass through directly. The electrolyte is usually a liquid organic solvent (like ethylene carbonate or dimethyl carbonate) that contains a dissolved lithium salt (such as LiPF₆). This salt dissociates into lithium ions (Li⁺) and anions. The electrolyte must be stable over a wide voltage range and be a good ionic conductor but a poor electronic conductor.

*   **Separator:** Sandwiched between the anode and cathode is a porous plastic membrane, often made of polyethylene or polypropylene. Its job is crucial: it physically separates the anode and cathode to prevent short-circuiting, while still allowing lithium ions to pass through the pores.

**Analogy:** Think of the Li-ion battery like a rechargeable battery-powered toy. The anode is the "storage garage" for the lithium ions when the battery is "empty" (discharged). The cathode is the "destination garage" when the battery is "full" (charged). The electrolyte is like a special tunnel that only lithium ions can travel through, and the separator is like a fence keeping the garages from touching directly.

#### 1.2 Working of a Li-ion Battery

The magic happens through the reversible movement of lithium ions between the anode and cathode during charging and discharging.

**1. Discharging (Providing Power):**
When you use a device powered by a Li-ion battery (like your phone), the following happens:

*   **At the Anode:** Lithium atoms in the graphite anode lose an electron, becoming lithium ions (Li⁺). This process can be represented as:
    `LiC₆ → Li⁺ + e⁻ + C₆`
    (Where LiC₆ represents lithium intercalated into graphite).
*   **Electron Flow:** These freed electrons travel through the external circuit (your phone's circuitry) to power the device. This flow of electrons is the electric current.
*   **Ion Movement:** The lithium ions (Li⁺) then migrate through the electrolyte and the separator to the cathode.
*   **At the Cathode:** The lithium ions are inserted into the crystal structure of the cathode material, and they combine with the electrons that arrived through the external circuit. For example, with LiCoO₂:
    `Li⁺ + e⁻ + CoO₂ → LiCoO₂`
    The overall reaction is essentially the lithium ions moving from the anode to the cathode, carrying charge.

**2. Charging:**
When you plug your device in to charge, you're reversing the process:

*   **External Power:** An external power source (the charger) forces electrons back into the anode and pulls electrons away from the cathode.
*   **At the Cathode:** Lithium ions are extracted from the cathode material, and electrons are also removed.
    `LiCoO₂ → Li⁺ + e⁻ + CoO₂`
*   **Ion Movement:** These lithium ions then travel back through the electrolyte and separator to the anode.
*   **At the Anode:** The lithium ions are inserted back into the graphite structure, and they combine with the electrons supplied by the charger.
    `Li⁺ + e⁻ + C₆ → LiC₆`

**Key takeaway:** Lithium-ion batteries work by the reversible intercalation and de-intercalation of lithium ions between the anode and cathode materials, with electrons flowing through the external circuit to provide power. This concept ties directly into **CO2** as it's a prime example of electrochemical principles applied in practical engineering devices.

**Exam Tip:** Be ready to write down the half-cell reactions for both anode and cathode during discharge and charge. The choice of cathode material dictates the specific cathode reaction and the overall voltage.

### 2. The H₂-O₂ Fuel Cell (Acid Electrolyte): A Clean Energy Converter

Now, let's shift gears to another fascinating electrochemical device: the hydrogen-oxygen fuel cell. Unlike a battery, which stores energy and discharges it, a fuel cell *continuously* generates electricity as long as it's supplied with fuel (in this case, hydrogen) and an oxidant (oxygen). We'll focus on the acid electrolyte type, which is common.

#### 2.1 Construction of an Acid Electrolyte H₂-O₂ Fuel Cell

The construction is different from a battery, focusing on facilitating the reaction of gases.

*   **Electrodes:** Like batteries, fuel cells have an anode and a cathode. However, these are usually porous structures made of **catalytic materials**, most commonly **platinum (Pt)**. Platinum is used because it's an excellent catalyst for the reactions involving hydrogen and oxygen. These electrodes need to be porous to allow the reactant gases (H₂ and O₂) to reach the catalyst sites. They are also typically coated with the electrolyte.

*   **Electrolyte:** For an acid electrolyte fuel cell, the electrolyte is typically an **acid**, such as **sulfuric acid (H₂SO₄)** or a **proton-exchange membrane (PEM)** like Nafion™.
    *   **Liquid Acid:** If it's a liquid acid, it's held within the porous structure of the electrodes.
    *   **PEM:** This is more common in modern fuel cells. Nafion™ is a perfluorinated sulfonic acid polymer that is excellent at conducting protons (H⁺) while being impermeable to gases and electrons. This acts as both the electrolyte and the separator. Imagine it as a very selective filter that only lets protons through.

*   **Gas Diffusion Layers (GDLs):** These are porous carbon papers or felts that sit between the electrodes and the flow fields. They ensure uniform distribution of the reactant gases to the electrode surface and also help conduct electrons away from or to the electrodes.

*   **Flow Fields/Current Collectors:** These are typically grooved plates (often bipolar plates in a stack) that direct the flow of reactant gases to the electrodes and also collect the electric current generated. They are designed to allow gases to reach the GDLs and electrolyte while efficiently removing water byproduct.

**Analogy:** Imagine a specialized chemical "factory." The anode is where hydrogen gas enters and gets "processed." The cathode is where oxygen gas enters and also gets "processed." The electrolyte is the "conveyor belt" that only allows the "processed parts" (protons) to move from the anode side to the cathode side. The "finished product" (electricity and water) emerges.

#### 2.2 Working of an Acid Electrolyte H₂-O₂ Fuel Cell

The overall reaction is the combination of hydrogen and oxygen to form water, releasing energy in the process. This is simply the reverse of electrolysis of water.

**1. At the Anode (Oxidation of Hydrogen):**
Hydrogen gas (H₂) is fed to the anode. At the catalytic surface (platinum), hydrogen molecules are oxidized, losing electrons and forming protons (H⁺).
*   **Reaction:** `H₂(g) → 2H⁺(aq) + 2e⁻`
    This is an oxidation process, as hydrogen loses electrons. The protons generated then move through the electrolyte towards the cathode. The electrons, unable to pass through the electrolyte, travel through the external circuit.

**2. Electron Flow:**
The electrons produced at the anode travel through the external circuit, creating an electric current that can be used to power a device.

**3. At the Cathode (Reduction of Oxygen):**
Oxygen gas (O₂) is fed to the cathode. Here, oxygen molecules combine with the protons that have migrated from the anode (through the electrolyte) and the electrons that have arrived via the external circuit.
*   **Reaction:** `O₂(g) + 4H⁺(aq) + 4e⁻ → 2H₂O(l)`
    This is a reduction process, as oxygen gains electrons. Water is formed as a byproduct.

**Overall Reaction:**
To get the overall reaction, we need to balance the electrons. The anode reaction produces 2 electrons per H₂ molecule, while the cathode reaction consumes 4 electrons per O₂ molecule. So, we need two molecules of H₂ for every one molecule of O₂.
*   Anode: `2H₂(g) → 4H⁺(aq) + 4e⁻`
*   Cathode: `O₂(g) + 4H⁺(aq) + 4e⁻ → 2H₂O(l)`
*   **Overall:** `2H₂(g) + O₂(g) → 2H₂O(l)`

This process generates electricity continuously as long as hydrogen and oxygen are supplied. This is a fantastic illustration of **CO2**, showing how electrochemistry is applied to produce power. The fact that it produces only water as a byproduct makes it a very attractive clean energy technology.

**Key takeaway:** Fuel cells convert chemical energy directly into electrical energy through a controlled electrochemical reaction. In an acid fuel cell, hydrogen is oxidized at the anode, and oxygen is reduced at the cathode, with protons being the charge carriers through the acid electrolyte.

**Exam Tip:** Always remember the half-cell reactions for the anode and cathode in an acid fuel cell. The overall reaction is crucial for understanding the efficiency and byproduct. Pay attention to the role of the catalyst (platinum).

### Connecting to Course Outcomes:

*   **CO1 (Materials in Industries):** We've discussed graphite, lithium metal oxides, organic solvents, platinum, and polymer membranes. These are all critical engineering materials whose properties (conductivity, stability, catalytic activity) are essential for the performance of these electrochemical devices in industries ranging from electronics to automotive and energy.
*   **CO2 (Electrochemistry & Applications):** Both the Li-ion battery and the H₂-O₂ fuel cell are direct applications of electrochemical principles. We've seen oxidation-reduction reactions, the movement of ions and electrons, and the generation of electrical potential. Understanding these devices is key to exploring their potential in various engineering fields like energy storage and conversion.
*   **CO3 (Analytical Techniques):** While not directly covered in construction and working, understanding the performance and degradation of these devices often requires analytical techniques to identify reaction products, electrode materials, and electrolyte composition. Techniques like spectroscopy (mentioned in reference books) can be vital here.
*   **CO4 (Water Treatment/Waste Management):** The H₂-O₂ fuel cell is a prime example of a technology that produces water as a byproduct, contributing to cleaner processes. While not directly about water treatment, understanding the byproducts of energy generation is relevant to environmental considerations.

### Sample Questions and Answers:

**1. Conceptual Question:**
Explain the fundamental difference between a battery and a fuel cell.

**Answer:**
A **battery** is an electrochemical device that stores chemical energy and converts it into electrical energy through internal chemical reactions. It is a self-contained unit that discharges and can be recharged by reversing the chemical reaction. A **fuel cell**, on the other hand, continuously converts chemical energy into electrical energy as long as fuel and oxidant are supplied externally. It does not store energy internally; it generates electricity directly from the fuel.

**2. Exam-Oriented Question:**
Write down the anode and cathode half-cell reactions for a hydrogen-oxygen fuel cell operating with an acid electrolyte.

**Answer:**
*   **Anode (Oxidation):** `H₂(g) → 2H⁺(aq) + 2e⁻`
*   **Cathode (Reduction):** `O₂(g) + 4H⁺(aq) + 4e⁻ → 2H₂O(l)`

**Reasoning:** At the anode, hydrogen gas is oxidized to protons and electrons. At the cathode, oxygen gas, protons, and electrons combine to form water. The acid electrolyte facilitates the movement of protons (H⁺) from the anode to the cathode.

**3. Application-Based Question:**
Why is platinum commonly used as a catalyst in hydrogen-oxygen fuel cells, particularly in the anode and cathode?

**Answer:**
Platinum is a highly effective catalyst for the electrochemical reactions involved in hydrogen-oxygen fuel cells. Specifically:
*   At the anode, platinum catalyzes the dissociation of hydrogen molecules (H₂) into protons (H⁺) and electrons (e⁻).
*   At the cathode, platinum catalyzes the combination of oxygen molecules (O₂), protons (H⁺), and electrons (e⁻) to form water.
This catalytic activity significantly speeds up the reaction rates, reduces the energy required for the reactions (lowering the activation overpotential), and allows the fuel cell to operate efficiently at lower temperatures. This is a key material property highlighted in **CO1**.

**4. Conceptual Question (Li-ion Battery):**
What is the role of the separator in a lithium-ion battery?

**Answer:**
The separator in a lithium-ion battery is a porous membrane (typically made of polyethylene or polypropylene) that physically separates the anode and cathode. Its primary function is to prevent direct electrical contact between the electrodes, thereby avoiding short-circuiting. However, it must be permeable to the electrolyte and allow lithium ions (Li⁺) to pass through it freely, enabling their migration between the anode and cathode during charge and discharge cycles.

Remember, understanding these fundamental principles of electrochemistry is crucial for appreciating the vast range of applications in modern technology and engineering. Keep these concepts clear!
