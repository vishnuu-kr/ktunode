---
title: "Vibrational spectroscopy – Principle- Number of vibrational modes - Vibrational modes of CO 2 and H 2O – Applications"
subject: "CHEMISTRY FOR INFORMATION SCIENCE & ELECTRICAL SCIENCE"
module: "Module 3: Molecular  Spectroscopy  and Analytical  Techniques"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213d9ece2bdd875f93cd"
status: "completed"
scrapedAt: "2026-05-23T16:01:14.167Z"
---
# Module 3: Molecular Spectroscopy and Analytical Techniques

## Topic: Vibrational Spectroscopy – Principle, Number of Vibrational Modes, Vibrational Modes of CO$_{2}$ and H$_{2}$O, and Applications

Welcome, everyone! In this session, we're diving into a fascinating area of molecular spectroscopy: **Vibrational Spectroscopy**. This technique allows us to peek into the very heart of molecules and understand how they move, vibrate, and interact with light. For us in Information Science and Electrical Science, understanding molecular behavior is crucial for developing new materials, sensors, and communication technologies. Think about how light interacts with optical fibers, or how different materials respond to electrical fields – these are all rooted in molecular properties, including vibrations.

This topic directly ties into our **Course Outcome 3 (CO3): Apply appropriate analytical techniques for the synthesis and characterization of various engineering materials.** Vibrational spectroscopy is a powerful tool for characterizing materials, helping us identify compounds, understand their structure, and even probe their purity.

### The Principle of Vibrational Spectroscopy: Molecules as Tiny Springs

So, what exactly is vibrational spectroscopy? Imagine molecules not as rigid structures, but as collections of atoms connected by "bonds" that behave much like springs. These springs can stretch, bend, and twist. Just like a guitar string vibrates when plucked, the bonds within a molecule can vibrate when they absorb energy.

The core principle of vibrational spectroscopy is that these molecular vibrations are quantized, meaning they can only occur at specific energy levels. When a molecule is exposed to electromagnetic radiation, it can absorb energy from this radiation if the energy of the photon precisely matches the energy difference between two vibrational energy levels. This absorption causes the molecule to transition to a higher vibrational state.

We can detect and analyze these absorbed frequencies to gain information about the molecule. There are two main types of vibrational spectroscopy, and we'll focus on the underlying principle that connects them:

*   **Infrared (IR) Spectroscopy:** Molecules absorb IR radiation when their vibrations cause a change in their **dipole moment**. The dipole moment is essentially a measure of the charge separation within a molecule.
*   **Raman Spectroscopy:** Molecules scatter light, and in Raman spectroscopy, we look at the energy shift of the scattered light. This shift occurs when the molecule absorbs or emits energy during a vibration, and it depends on the **polarizability** of the molecule. Polarizability is how easily the electron cloud of a molecule can be distorted by an electric field.

For our purposes, the key takeaway is that **specific molecular vibrations absorb or scatter light at characteristic frequencies**. By analyzing the pattern of absorbed or scattered light, we can identify the molecule and understand its structure. This is incredibly useful for material characterization, as mentioned in CO3. If we synthesize a new material, its IR or Raman spectrum acts like a unique fingerprint.

### Number of Vibrational Modes: How Many Ways Can a Molecule Dance?

Now, how do we predict how many ways a molecule can vibrate? This is determined by its **degrees of freedom** and its structure.

Every atom in a molecule has three translational degrees of freedom (moving along the x, y, and z axes). For a molecule with *N* atoms, the total number of degrees of freedom is $3N$.

These degrees of freedom are partitioned into translational, rotational, and vibrational modes:

*   **Translational Modes:** A molecule as a whole can move in three dimensions. So, there are always **3 translational degrees of freedom**.
*   **Rotational Modes:** A molecule can rotate around axes passing through its center of mass.
    *   **Linear Molecules:** Can rotate around two axes perpendicular to the molecular axis. So, they have **2 rotational degrees of freedom**.
    *   **Non-linear Molecules:** Can rotate around three axes. So, they have **3 rotational degrees of freedom**.
*   **Vibrational Modes:** The remaining degrees of freedom correspond to the internal vibrations of the molecule.

Therefore, the number of vibrational modes can be calculated as:

*   **For Linear Molecules:** Number of vibrational modes = $3N - 3$ (total degrees of freedom) - $2$ (rotational degrees of freedom) = **$3N - 5$**
*   **For Non-linear Molecules:** Number of vibrational modes = $3N - 3$ (total degrees of freedom) - $3$ (rotational degrees of freedom) = **$3N - 6$**

Let's see this in action with some examples.

### Vibrational Modes of CO$_{2}$ and H$_{2}$O: Unpacking Molecular Dance

Understanding the vibrational modes of simple molecules helps us grasp the concept. These are classic examples often discussed in textbooks like Tembe, Kamaluddin, and Krishnan.

#### 1. Carbon Dioxide (CO$_{2}$): A Linear Molecule

CO$_{2}$ has the structure O=C=O. It's a linear molecule.
*   Number of atoms, $N = 3$.
*   Since it's linear, the number of vibrational modes is $3N - 5 = 3(3) - 5 = 9 - 5 = 4$ vibrational modes.

What are these four modes? Let's visualize them. Imagine the atoms as spheres and the bonds as springs.

*   **Symmetric Stretching (1 mode):** Both C=O bonds stretch and contract in phase. The oxygen atoms move away from and towards the carbon atom simultaneously. The dipole moment remains zero throughout this vibration. This mode is IR inactive but Raman active.
    O $\leftarrow$ C $\rightarrow$ O (stretching)
    O $\rightarrow$ C $\leftarrow$ O (contracting)

*   **Asymmetric Stretching (1 mode):** One C=O bond stretches while the other contracts. This is like a seesaw motion of the bonds. Crucially, during this vibration, the molecule becomes momentarily asymmetrical, and its dipole moment changes. This makes it an **IR active** mode.
    O $\leftarrow$ C $\rightarrow$ O (one bond stretches, the other contracts)

*   **Bending (2 modes):** The molecule bends at the central carbon atom. Since bending can occur in two perpendicular planes (like bending up-down or bending left-right relative to the molecular plane), there are **two degenerate bending modes**. These modes also cause a change in the dipole moment, making them **IR active**.
    *   Out-of-plane bending
    *   In-plane bending

So, CO$_{2}$ has 4 vibrational modes: one symmetric stretch (Raman active), one asymmetric stretch (IR active), and two degenerate bends (IR active).

**Think of it this way:** If you were to wiggle the atoms in CO$_{2}$, you could do it in four distinct ways that involve changes in bond lengths or angles, and importantly, for IR activity, these wiggles must create a "wobble" in the molecule's electrical balance (dipole moment).

#### 2. Water (H$_{2}$O): A Non-linear Molecule

Water (H$_{2}$O) has a bent structure, making it a non-linear molecule.
*   Number of atoms, $N = 3$.
*   Since it's non-linear, the number of vibrational modes is $3N - 6 = 3(3) - 6 = 9 - 6 = 3$ vibrational modes.

What are these three modes?

*   **Symmetric Stretching (1 mode):** Both O-H bonds stretch and contract simultaneously and in phase. The molecule remains symmetrical, and the dipole moment change is along the symmetry axis. This mode is **IR active**.
    H $\leftarrow$ O $\rightarrow$ H (stretching)
    H $\rightarrow$ O $\leftarrow$ H (contracting)

*   **Asymmetric Stretching (1 mode):** One O-H bond stretches while the other contracts. This also leads to a change in dipole moment and is **IR active**.
    H $\leftarrow$ O $\rightarrow$ H (one bond stretches, the other contracts)

*   **Bending (Scissoring) (1 mode):** The angle between the two O-H bonds changes. The molecule bends like a pair of scissors closing and opening. This also causes a change in the dipole moment and is **IR active**.
    H $\swarrow$ O $\searrow$ H (bending, angle decreases)
    H $\searrow$ O $\swarrow$ H (bending, angle increases)

All three modes of vibration in water are IR active because the bent structure ensures that any stretching or bending motion leads to a change in the molecule's dipole moment. This is why water is such a strong absorber of IR radiation, a property that has significant implications for Earth's atmosphere (the greenhouse effect).

**Analogy:** Imagine a child on a swing. The forward and backward motion is like stretching/contracting, and the side-to-side movement is like bending. Water, being non-linear, can exhibit these three fundamental motions.

### Applications of Vibrational Spectroscopy: More Than Just Molecules

Vibrational spectroscopy, particularly IR and Raman spectroscopy, is incredibly versatile and finds applications across many fields, including those relevant to information science and electrical science.

Here are some key applications:

1.  **Material Identification and Characterization (CO3):** This is a primary application. Every pure substance has a unique vibrational spectrum.
    *   **Quality Control:** In manufacturing, IR spectroscopy is used to verify the identity and purity of raw materials and finished products. For example, in the electronics industry, polymers used in insulation or casings can be quickly identified.
    *   **Forensics:** Identifying unknown substances based on their spectral fingerprints.
    *   **Pharmaceuticals:** Ensuring the correct drug molecules are present and in the right form.

2.  **Structural Elucidation:** By analyzing the frequencies and intensities of the absorption bands, chemists can determine the functional groups present in a molecule and even deduce its overall structure. This is fundamental to understanding the properties of synthesized materials.

3.  **Monitoring Chemical Reactions:** As a reaction proceeds, the reactants are consumed, and products are formed. Vibrational spectroscopy can monitor the disappearance of reactant peaks and the appearance of product peaks, allowing scientists to track the progress and kinetics of a reaction in real-time. This is vital for optimizing synthesis processes in materials science.

4.  **Studying Molecular Interactions:** How molecules interact with each other or with surfaces can be studied using vibrational spectroscopy.
    *   **Surface Science:** IR spectroscopy can identify molecules adsorbed onto surfaces, crucial for understanding catalysis and material surface properties. For electrical engineers, this can be important for understanding how dielectrics interact with their environment.
    *   **Biomolecular Studies:** Understanding how proteins fold or how drugs bind to targets involves studying changes in their vibrational spectra.

5.  **Process Analytical Technology (PAT) in Manufacturing:** Vibrational spectroscopy techniques are increasingly integrated directly into manufacturing lines (e.g., for polymers, pharmaceuticals, chemicals) to provide real-time monitoring and control, leading to improved efficiency and consistency. This is where our electrical and information science skills merge with chemistry – designing and implementing these spectroscopic sensors and data analysis systems.

6.  **Nanomaterials Characterization:** As mentioned in one of our reference books (The Chemistry of Nanomaterials by Rao et al.), vibrational spectroscopy is essential for characterizing nanomaterials. It can confirm the presence of specific functional groups on the surface of nanoparticles, study their structural integrity, and monitor their interactions with surrounding media. For instance, understanding the vibrational modes of carbon nanotubes or graphene can reveal their electronic properties.

7.  **Organic Electronics:** Materials used in organic light-emitting diodes (OLEDs) or organic photovoltaic cells often involve complex organic molecules. Vibrational spectroscopy can help characterize these materials, understand their packing, and study degradation mechanisms, which is critical for device performance and longevity. (Seymour & Carraher, Ogawa reference this kind of application).

**Quick Recall Tip:** For vibrational spectroscopy, remember the "springs and masses" analogy. Different molecules and different bond types (single, double, triple) have different spring constants and masses, leading to unique vibration frequencies. Also, remember the selection rules for IR and Raman activity – it's about whether the vibration *changes* the dipole moment (IR) or polarizability (Raman).

### Connecting to Course Outcomes:

*   **CO1: Electrochemistry and Corrosion:** While not directly about electrochemistry, understanding molecular vibrations is foundational to understanding how molecules behave at interfaces, which is relevant to corrosion processes and electrochemical reactions. For example, vibrational spectroscopy can identify corrosion products or monitor surface changes.
*   **CO2: Engineering Materials:** Vibrational spectroscopy is a primary tool for characterizing the chemical structure and functional groups of various engineering materials, from polymers to ceramics to composites. This directly aids in describing their properties and applications.
*   **CO3: Analytical Techniques for Synthesis and Characterization:** This topic is a direct embodiment of CO3. We are learning *how* to use vibrational spectroscopy as an analytical technique to characterize materials we might synthesize. The number of modes and specific frequencies tell us about the molecule's identity, purity, and structure.

### Summary and Key Takeaways

Vibrational spectroscopy probes the internal vibrations of molecules, treating bonds as springs.
*   The **principle** is the absorption or scattering of specific frequencies of light that match these vibrational energy transitions.
*   The **number of vibrational modes** depends on whether the molecule is linear ($3N-5$) or non-linear ($3N-6$), where N is the number of atoms.
*   We examined **CO$_{2}$ (linear)** with 4 modes (1 symm stretch, 1 asymm stretch, 2 bends) and **H$_{2}$O (non-linear)** with 3 modes (1 symm stretch, 1 asymm stretch, 1 bend). Remember which ones are IR active based on dipole moment change!
*   **Applications** are vast, from identifying materials and understanding their structure to monitoring reactions and characterizing advanced materials like nanomaterials and organic electronics. This is where our chemistry knowledge empowers our work in information and electrical sciences.

Remember this: Vibrational spectra are like molecular fingerprints, unique and informative, providing a bridge between molecular structure and material properties.

---

## Sample Questions with Answers

Here are a few questions to test your understanding, ranging from conceptual to more applied:

**Q1. (Conceptual) A molecule with 4 atoms in a linear arrangement is known to have 6 vibrational modes. Using the formula for the number of vibrational modes, determine if this molecule is linear or non-linear.**

**Answer:**
Let $N$ be the number of atoms. We are given $N=4$ and the number of vibrational modes is 6.
The formula for the number of vibrational modes for a linear molecule is $3N - 5$.
For $N=4$, this would be $3(4) - 5 = 12 - 5 = 7$ vibrational modes.
The formula for the number of vibrational modes for a non-linear molecule is $3N - 6$.
For $N=4$, this would be $3(4) - 6 = 12 - 6 = 6$ vibrational modes.
Since the molecule has 6 vibrational modes, it must be **non-linear**.

**Q2. (Conceptual) Explain why the symmetric stretching vibration of CO$_{2}$ is IR inactive but Raman active.**

**Answer:**
For a vibration to be **IR active**, it must cause a change in the molecule's **dipole moment**. In the symmetric stretching of CO$_{2}$ (O $\leftarrow$ C $\rightarrow$ O $\leftrightarrow$ O $\rightarrow$ C $\leftarrow$), both C=O bonds stretch and contract simultaneously and in phase. The CO$_{2}$ molecule, being linear and symmetric, has no permanent dipole moment. Even during the symmetric stretch, the charge distribution remains symmetrical, so the dipole moment remains zero throughout the vibration. Therefore, it cannot interact with IR radiation, making it IR inactive.

For a vibration to be **Raman active**, it must cause a change in the molecule's **polarizability**. Polarizability is the ease with which the electron cloud can be distorted. During the symmetric stretch of CO$_{2}$, the electron clouds of the C=O bonds are distorted in a way that changes the overall polarizability of the molecule. This change in polarizability allows it to interact with incident light and produce Raman scattering.

**Q3. (Exam-Oriented/Application) You are given two unknown samples. Sample A gives a spectrum with a strong absorption band around 1700 cm$^{-1}$ and another strong band around 2900 cm$^{-1}$. Sample B shows a spectrum with a broad, strong absorption band centered around 3300 cm$^{-1}$ and another band around 1600 cm$^{-1}$. Based on this information, what functional groups might be present in each sample? What analytical technique likely provided this data?**

**Answer:**
The data provided is typical of **Infrared (IR) Spectroscopy**.

*   **Sample A:**
    *   The strong band around **1700 cm$^{-1}$** is characteristic of the **carbonyl group (C=O)**, commonly found in aldehydes, ketones, carboxylic acids, and esters.
    *   The strong band around **2900 cm$^{-1}$** is characteristic of **C-H stretching vibrations** in alkyl or aliphatic groups.
    *   **Inference:** Sample A likely contains a compound with a carbonyl group and an alkyl chain, such as a ketone (e.g., acetone) or an aldehyde (e.g., acetaldehyde).

*   **Sample B:**
    *   The broad, strong band around **3300 cm$^{-1}$** is highly characteristic of **O-H stretching vibrations**, typically found in alcohols or carboxylic acids. The broadness suggests hydrogen bonding.
    *   The band around **1600 cm$^{-1}$** could be a **C=C stretching vibration** or possibly a **C=O stretching vibration** in certain contexts (like a conjugated system or a carboxylic acid salt). However, given the strong O-H band, it's likely related to the alcohol or carboxylic acid structure. If it were a carboxylic acid, the C=O would usually be closer to 1700 cm$^{-1}$, but hydrogen bonding can shift this.
    *   **Inference:** Sample B likely contains an alcohol (due to the strong O-H stretch) or perhaps a carboxylic acid. The presence of the 1600 cm$^{-1}$ band would need further analysis but is consistent with the broader functional groups expected.

This type of question assesses your ability to link spectral features to molecular structures, a core aspect of CO3.
