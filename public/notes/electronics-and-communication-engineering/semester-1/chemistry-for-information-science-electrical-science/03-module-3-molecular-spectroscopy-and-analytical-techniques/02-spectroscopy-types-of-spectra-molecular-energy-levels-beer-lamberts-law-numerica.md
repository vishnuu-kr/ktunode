---
title: "Spectroscopy -Types of spectra- Molecular energy levels - Beer Lambert’s law – Numerical problems - Electronic Spectroscopy – Principle, Types of electronic transitions –Role of conjugation in absorption maxima- Instrumentation-Applications"
subject: "CHEMISTRY FOR INFORMATION SCIENCE & ELECTRICAL SCIENCE"
module: "Module 3: Molecular  Spectroscopy  and Analytical  Techniques"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487da07e"
status: "completed"
scrapedAt: "2026-05-23T17:33:16.413Z"
---
## Module 3: Molecular Spectroscopy and Analytical Techniques - Spectroscopy

Welcome, everyone, to our journey into the fascinating world of spectroscopy! In this module, we're going to explore how we can use light and other forms of electromagnetic radiation to understand molecules. This is a cornerstone of modern analytical chemistry, and understanding it will directly help you with **CO3: Apply appropriate analytical techniques for the synthesis and characterization of various engineering materials.** Think of spectroscopy as our molecular "decoder ring" – it tells us about the structure, composition, and even the environment of molecules, which is crucial for characterizing any material you're working with, whether it's a new semiconductor, a polymer, or a nanomaterial.

### What is Spectroscopy? A Molecular Window to the World

At its heart, spectroscopy is the study of the interaction between matter and electromagnetic radiation. When radiation hits a molecule, something interesting can happen: the molecule can absorb, emit, or scatter this radiation. The *way* it does this – at which wavelengths or frequencies – is unique to that molecule, almost like a molecular fingerprint. This is what we mean by a **spectrum**.

Imagine shining white light, which is a mixture of all colors, through a colored solution. What happens? The solution absorbs some colors and lets others pass through. The light that comes out is no longer white; it’s the "missing" colors that have been absorbed. A spectrophotometer measures how much light is absorbed at each color (wavelength), and the resulting graph is the absorption spectrum. This simple concept is the basis of many powerful analytical techniques.

#### Types of Spectra: A Symphony of Molecular Interactions

Molecules are complex entities, and they can interact with electromagnetic radiation in several ways, leading to different types of spectra:

*   **Absorption Spectra:** As we just discussed, this is when a molecule absorbs specific wavelengths of radiation, causing it to move to a higher energy state. The spectrum shows "dips" at the wavelengths absorbed. Think of it like a radio receiver tuning into a specific station – it only picks up that particular frequency.
*   **Emission Spectra:** This happens when an excited molecule (one that has absorbed energy) returns to a lower energy state, releasing the excess energy as radiation. The spectrum shows "peaks" at the emitted wavelengths. This is like a light bulb emitting light; it's giving off energy.
*   **Scattering Spectra:** Here, the incident radiation is deflected by the molecule. While the scattered light has the same wavelength (Rayleigh scattering), in Raman spectroscopy, a small fraction of the scattered light has different wavelengths, giving us valuable information about molecular vibrations.

For our purposes in this module, we'll primarily focus on **absorption spectroscopy**, as it's widely used for quantitative analysis.

### Molecular Energy Levels: The Quantum Dance of Molecules

To understand *why* molecules absorb or emit specific wavelengths, we need to delve into the quantum nature of molecules. Remember from earlier chemistry, electrons aren't just orbiting the nucleus like planets; they exist in specific energy levels or orbitals. Molecules, too, have quantized energy levels, but these are more complex because they involve not just electronic energy but also vibrational and rotational energies.

A molecule can exist in its lowest energy state, called the **ground state**. When it absorbs the correct amount of energy (from photons of light), it can jump to a higher energy state, called an **excited state**. This energy difference ($\Delta E$) must precisely match the energy of the incoming photon.

The relationship between energy ($E$) and the frequency ($\nu$) or wavelength ($\lambda$) of electromagnetic radiation is given by Planck's equation:

$E = h\nu = \frac{hc}{\lambda}$

where:
*   $h$ is Planck's constant ($6.626 \times 10^{-34} \text{ J s}$)
*   $c$ is the speed of light ($3.00 \times 10^8 \text{ m/s}$)
*   $\nu$ is the frequency (Hz or s$^{-1}$)
*   $\lambda$ is the wavelength (m)

This equation is fundamental to spectroscopy. It tells us that if we know the energy difference between two molecular states, we can predict the wavelength of light that will be absorbed or emitted. Conversely, by measuring the absorbed or emitted wavelength, we can determine the energy difference.

#### Types of Molecular Energy Transitions

The energy levels in molecules can be broadly categorized, and transitions between them correspond to different regions of the electromagnetic spectrum:

*   **Electronic Transitions:** These involve the excitation of an electron from a lower energy electronic orbital to a higher energy electronic orbital. These transitions require significant energy and correspond to absorption in the **ultraviolet (UV) and visible (Vis)** regions of the electromagnetic spectrum. This is what we'll focus on next!
*   **Vibrational Transitions:** Molecules are not rigid structures; their bonds can stretch and bend, like tiny springs. These vibrations occur at specific frequencies, and absorption of infrared (IR) radiation can cause a molecule to transition from one vibrational energy level to another. This forms the basis of **IR spectroscopy**.
*   **Rotational Transitions:** Molecules can also rotate in space, and these rotational energies are quantized. Transitions between rotational levels occur when molecules absorb or emit energy in the **microwave** region of the spectrum.
*   **Nuclear Spin Transitions:** In Nuclear Magnetic Resonance (NMR) spectroscopy, we exploit the magnetic properties of atomic nuclei. Transitions between nuclear spin states occur in the radiofrequency region.

### Beer-Lambert Law: Quantifying the Absorbance

Now that we know molecules absorb specific wavelengths, how do we relate this absorption to the concentration of the substance in a sample? This is where the **Beer-Lambert Law** (often just called Beer's Law) comes in. It's incredibly important for quantitative analysis, allowing us to determine the concentration of a dissolved substance.

Imagine a beam of light with a certain intensity ($I_0$) passing through a solution. As it travels through the solution, some light is absorbed. The intensity of the light that emerges from the other side ($I$) will be less than $I_0$. Beer's Law quantitatively describes this relationship.

The law states that the absorbance of a solution is directly proportional to the concentration of the absorbing species and the path length through which the light travels. Mathematically, it's expressed as:

$A = \epsilon bc$

where:
*   $A$ is the **Absorbance**, a dimensionless quantity. It's defined as $A = \log_{10}(\frac{I_0}{I})$, where $I_0$ is the initial intensity of light and $I$ is the transmitted intensity. You can think of absorbance as a measure of "how dark" the solution appears to the light at that specific wavelength. Higher absorbance means more light is blocked.
*   $\epsilon$ (epsilon) is the **molar absorptivity** (or molar extinction coefficient). This is a constant for a given substance at a specific wavelength and solvent. It's a measure of how strongly a substance absorbs light at that wavelength. Units are typically L mol$^{-1}$ cm$^{-1}$. A high molar absorptivity means the substance is a strong absorber.
*   $b$ is the **path length** of the cuvette (the sample holder) through which the light passes, usually in centimeters (cm). Most standard cuvettes have a path length of 1 cm.
*   $c$ is the **concentration** of the absorbing substance in the solution, usually in moles per liter (mol L$^{-1}$).

**Think of it like this:** If you have a murky pond, the murkier it is (higher concentration of particles), the less light will pass through from one side to the other. Also, if the pond is deeper (longer path length), even less light will get through. Beer's Law is the precise mathematical formulation of this intuitive idea for molecular absorption.

**Important Considerations for Beer's Law:**

*   **Monochromatic Light:** Beer's Law is strictly valid only when the incident light is monochromatic (consists of a single wavelength). In practice, spectrophotometers use a narrow band of wavelengths, and the law is a good approximation.
*   **Dilute Solutions:** The law holds true for dilute solutions. At high concentrations, molecules can interact, and the absorptivity might change.
*   **No Scattering or Reflection:** The sample should not scatter or reflect light.
*   **No Chemical Interactions:** The absorbing species should not associate, dissociate, or react with the solvent in a way that changes its concentration or absorptivity.

**Why is this important for you?** If you're characterizing a new material or monitoring a chemical reaction, you might need to determine the concentration of a specific component. Using Beer's Law and a spectrophotometer, you can do just that. This directly relates to **CO3**.

#### Numerical Problems on Beer-Lambert Law

Let's test our understanding with a typical problem:

**Problem 1:** A solution of a compound has a concentration of $5 \times 10^{-5}$ M. At a wavelength of 280 nm, it exhibits an absorbance of 0.45 in a 1 cm cuvette. What is the molar absorptivity of the compound at this wavelength?

**Solution:**
We are given:
*   $c = 5 \times 10^{-5}$ M
*   $A = 0.45$
*   $b = 1$ cm

Using Beer's Law, $A = \epsilon bc$:
$0.45 = \epsilon \times (1 \text{ cm}) \times (5 \times 10^{-5} \text{ M})$

Rearranging to solve for $\epsilon$:
$\epsilon = \frac{A}{bc} = \frac{0.45}{1 \text{ cm} \times 5 \times 10^{-5} \text{ M}}$
$\epsilon = \frac{0.45}{5 \times 10^{-5}} \text{ L mol}^{-1} \text{ cm}^{-1}$
$\epsilon = 0.09 \times 10^5 \text{ L mol}^{-1} \text{ cm}^{-1}$
$\epsilon = 9000 \text{ L mol}^{-1} \text{ cm}^{-1}$

**Remember this:** Always pay attention to the units!

**Problem 2:** A substance has a molar absorptivity of $1.5 \times 10^4$ L mol$^{-1}$ cm$^{-1}$ at 500 nm. If a solution of this substance has a concentration of $2 \times 10^{-4}$ M, what will be its absorbance in a 2 cm cuvette at 500 nm?

**Solution:**
We are given:
*   $\epsilon = 1.5 \times 10^4$ L mol$^{-1}$ cm$^{-1}$
*   $c = 2 \times 10^{-4}$ M
*   $b = 2$ cm

Using Beer's Law, $A = \epsilon bc$:
$A = (1.5 \times 10^4 \text{ L mol}^{-1} \text{ cm}^{-1}) \times (2 \text{ cm}) \times (2 \times 10^{-4} \text{ M})$
$A = (1.5 \times 10^4) \times (4 \times 10^{-4})$
$A = 1.5 \times 4 \times 10^{(4-4)}$
$A = 6 \times 10^0$
$A = 6$

**Wait a minute!** An absorbance of 6? While theoretically possible, in practice, absorbances above 2 or 3 are often problematic for standard spectrophotometers due to reduced sensitivity and potential deviations from Beer's Law. This highlights the importance of choosing appropriate concentrations for your measurements.

### Electronic Spectroscopy: Unveiling Molecular Structure with UV-Vis Light

Now, let's zoom in on **Electronic Spectroscopy**, specifically using UV-Visible (UV-Vis) light. This is one of the most widely used spectroscopic techniques in chemistry and beyond, especially for characterizing organic molecules and materials.

#### Principle of Electronic Spectroscopy

The core principle, as we've touched upon, is the absorption of UV or visible light by a molecule, causing an electron to jump from a lower energy molecular orbital to a higher energy molecular orbital. These transitions are often referred to as **electronic transitions**.

The energy difference between these orbitals dictates the wavelength of light absorbed. UV-Vis spectroscopy essentially measures how much light is absorbed by a sample across a range of UV and visible wavelengths. The resulting spectrum plots absorbance against wavelength, revealing characteristic absorption peaks that are unique to the electronic structure of the molecule.

**Think of it like this:** Electrons in a molecule are like people in a multi-story building. They are usually on the lower floors (ground state orbitals). When you provide energy (in the form of UV-Vis photons), they can jump to higher floors (excited state orbitals). The height of the jump (energy difference) determines how much energy is needed. If the energy of the photon perfectly matches the energy difference for a particular jump, that photon will be absorbed.

#### Types of Electronic Transitions

Electronic transitions are categorized based on the type of molecular orbitals involved. The most common ones we encounter in organic molecules and conjugated systems are:

1.  **$\sigma \rightarrow \sigma^*$ Transitions:** These involve promoting an electron from a sigma ($\sigma$) bonding orbital to a sigma antibonding ($\sigma^*$) orbital. These transitions require a very high amount of energy because $\sigma$ bonds are strong, and the energy gap between $\sigma$ and $\sigma^*$ orbitals is large. They typically occur in the far-UV region (wavelengths < 200 nm), which is often inaccessible with standard UV-Vis instruments. Alkanes primarily exhibit these transitions.

2.  **$n \rightarrow \sigma^*$ Transitions:** Here, an electron from a non-bonding orbital ($n$) – usually containing lone pairs of electrons on atoms like oxygen, nitrogen, sulfur, or halogens – is promoted to a $\sigma^*$ antibonding orbital. These transitions require less energy than $\sigma \rightarrow \sigma^*$ transitions because the $n$ orbitals are generally higher in energy than $\sigma$ bonding orbitals. They occur in the UV region, typically between 170-250 nm. Examples include alcohols, ethers, and amines.

3.  **$\pi \rightarrow \pi^*$ Transitions:** These are very common and important in UV-Vis spectroscopy. They involve promoting an electron from a pi ($\pi$) bonding orbital to a pi antibonding ($\pi^*$) orbital. These transitions require less energy than $\sigma \rightarrow \sigma^*$ transitions because the energy gap between $\pi$ and $\pi^*$ orbitals is smaller. They are typically observed in the UV and visible regions. Molecules with double and triple bonds (alkenes, alkynes, carbonyl compounds, aromatic rings) exhibit these transitions.

4.  **$n \rightarrow \pi^*$ Transitions:** These involve promoting an electron from a non-bonding orbital ($n$) to a $\pi^*$ antibonding orbital. These transitions require the least amount of energy among the common types because the energy gap between $n$ and $\pi^*$ orbitals is the smallest. They are often observed at longer wavelengths than $\pi \rightarrow \pi^*$ transitions and are typically found in molecules with conjugated double bonds and heteroatoms, like carbonyl compounds (ketones, aldehydes, esters). These transitions are often weaker (have lower molar absorptivity) than $\pi \rightarrow \pi^*$ transitions.

**Which ones are most relevant to you?** For characterizing materials, especially polymers or organic electronic components, understanding $\pi \rightarrow \pi^*$ and $n \rightarrow \pi^*$ transitions is key, as they relate to conjugation and color. This directly supports **CO3**.

#### Role of Conjugation in Absorption Maxima

This is a crucial concept for understanding why some molecules absorb at longer wavelengths (which might even extend into the visible region, giving them color). **Conjugation** refers to the presence of alternating single and multiple bonds (e.g., $-\text{C}=\text{C}-\text{C}=\text{C}-$ or $-\text{C}=\text{C}-\text{C}=\text{O}$).

In conjugated systems, the $\pi$ electrons are not localized to a single bond but are delocalized over the entire conjugated system. This delocalization has a profound effect on the molecular orbital energy levels:

*   **Lowering of the $\pi^* $ Orbital Energy:** The $\pi^*$ antibonding orbital energy is lowered.
*   **Raising of the $\pi $ Orbital Energy (to a lesser extent):** The $\pi$ bonding orbital energy is slightly raised.

The net effect is a **decrease in the energy gap ($\Delta E$) between the highest occupied molecular orbital (HOMO) and the lowest unoccupied molecular orbital (LUMO)**. Since $E = hc/\lambda$, a smaller $\Delta E$ means a larger wavelength ($\lambda$) of absorbed light.

**What does this mean in practice?**

*   **Increased Conjugation Length:** As the length of a conjugated system increases (e.g., adding more double bonds in a row), the $\Delta E$ gets smaller and smaller, shifting the absorption maximum ($\lambda_{max}$) to longer wavelengths.
    *   Ethene ($\text{CH}_2=\text{CH}_2$): $\pi \rightarrow \pi^*$ transition at ~170 nm (UV)
    *   Butadiene ($\text{CH}_2=\text{CH}-\text{CH}=\text{CH}_2$): $\pi \rightarrow \pi^*$ transition at ~217 nm (UV)
    *   Hexatriene ($\text{CH}_2=\text{CH}-\text{CH}=\text{CH}-\text{CH}=\text{CH}_2$): $\pi \rightarrow \pi^*$ transition at ~258 nm (UV)
    *   Beta-carotene (many conjugated double bonds): Absorbs in the visible region (~450-500 nm), giving it an orange-yellow color!

*   **Auxochromes:** Electron-donating groups (like $-\text{OH}$, $-\text{NH}_2$, $-\text{OR}$) attached to a conjugated system can further increase electron density and delocalization, often leading to a bathochromic shift (shift to longer wavelength) and hyperchromic effect (increase in intensity, $\epsilon$). This is because they can donate lone pair electrons into the $\pi$ system, effectively extending conjugation.

This principle is vital for designing colored materials, understanding the optical properties of dyes and pigments, and for analyzing conjugated polymers used in organic electronics. For example, in **organic electronics materials and devices**, tailoring the conjugation length is a primary way to tune the absorption and emission wavelengths for applications like organic light-emitting diodes (OLEDs) and organic photovoltaics (OPVs). This links directly to **CO3** and **CO2** (understanding material properties).

#### Instrumentation: The UV-Vis Spectrophotometer

A UV-Vis spectrophotometer is the instrument used to measure absorption spectra. It's relatively simple in concept and very widely used. The essential components are:

1.  **Light Source:** Typically, a deuterium lamp for the UV region (190-350 nm) and a tungsten-halogen lamp for the visible region (350-700 nm). Some advanced instruments use a single source like a Xenon lamp that covers both ranges.

2.  **Wavelength Selector:** This is a crucial part. It isolates a narrow band of wavelengths from the broad spectrum emitted by the source. This is usually achieved using:
    *   **Prism:** Refracts light, separating it by wavelength.
    *   **Diffraction Grating:** Uses the principle of diffraction to separate wavelengths. Gratings are more common in modern instruments due to better resolution.
    The selected wavelength is then directed towards the sample.

3.  **Sample Compartment:** Holds the sample in a transparent container called a **cuvette**. As mentioned, cuvettes are typically made of quartz or fused silica for UV transparency, or glass/plastic for visible light only. The path length ($b$) is usually standardized at 1 cm.

4.  **Detector:** This device measures the intensity of the light that passes through the sample ($I$). Common detectors include a **phototube** or a **photodiode**.

5.  **Readout Device:** Displays the absorbance ($A$) or transmittance ($T$) as a function of wavelength. Modern instruments are computer-controlled and display the full spectrum.

**How it works in a nutshell:**
The instrument splits the light source into its constituent wavelengths. For each wavelength, it measures the intensity of light passing through a **blank** (containing the solvent but no analyte) to get $I_0$. Then, it measures the intensity of light passing through the sample to get $I$. The instrument then calculates $A = \log_{10}(I_0/I)$ and plots it against wavelength.

#### Applications of Electronic Spectroscopy (UV-Vis)

UV-Vis spectroscopy is incredibly versatile. Here are some key applications relevant to your studies:

1.  **Quantitative Analysis (Concentration Determination):** This is perhaps the most common use. By preparing standard solutions of known concentrations and measuring their absorbances at $\lambda_{max}$, you can create a calibration curve (absorbance vs. concentration). Then, you can determine the concentration of an unknown sample by measuring its absorbance and interpolating on the calibration curve. This is directly applicable to **CO3**.

2.  **Qualitative Analysis (Identification):** While not as definitive as techniques like IR or NMR for full structure elucidation, the $\lambda_{max}$ values and the shape of the UV-Vis spectrum can provide clues about the presence of certain functional groups, especially conjugated systems and aromatic rings.

3.  **Monitoring Reaction Kinetics:** By following the change in absorbance of a reactant or product over time, you can determine the rate of a chemical reaction. For instance, if a colored product is formed, its concentration can be tracked by monitoring its absorbance. This is a direct application of **CO3**.

4.  **Purity Assessment:** Impurities that absorb in the UV-Vis region can often be detected. For example, if a sample is expected to have a clean absorption peak but shows broad, unwanted absorption at other wavelengths, it suggests the presence of impurities.

5.  **Characterization of Polymers:** UV-Vis spectroscopy is used to study the electronic properties of polymers, particularly conjugated polymers used in organic electronics. The absorption spectrum can reveal information about the band gap, conjugation length, and the presence of defects or impurities in the polymer chains. This is highly relevant to **CO2** and **CO3** when dealing with advanced materials.

6.  **Color Measurement:** The visible absorption spectrum is directly related to the color of a substance. By analyzing which wavelengths are absorbed and which are transmitted or reflected, we can understand and quantify color. This is important in the dye and pigment industry, as well as in characterizing colored nanomaterials.

7.  **Biochemical Assays:** Many biological molecules, such as proteins and nucleic acids, have characteristic UV absorption (e.g., proteins at 280 nm due to aromatic amino acids, DNA/RNA at 260 nm). UV-Vis is extensively used for their quantification and purity checks.

**Example for Information/Electrical Science:**
Imagine you're developing organic semiconductors for flexible displays. You might synthesize a new conjugated polymer. By performing UV-Vis spectroscopy, you can:
*   Determine its absorption spectrum to see if it absorbs in the visible region, which would be necessary for a light-emitting or light-absorbing material.
*   Analyze how conjugation length affects its optical properties.
*   Use Beer's Law to quantify the concentration of the polymer in a solution for processing.
*   Assess the purity of your synthesized polymer.

This illustrates how spectroscopy is a fundamental tool for material scientists and engineers working with new materials, directly addressing **CO3**.

### Summary and Key Takeaways

Let's recap the essential points from this section:

*   **Spectroscopy** is the study of light-matter interaction, providing a "fingerprint" of molecules.
*   **Molecular energy levels** are quantized (electronic, vibrational, rotational). Absorption/emission of specific wavelengths corresponds to transitions between these levels.
*   **Beer-Lambert Law ($A = \epsilon bc$)** is crucial for quantitative analysis, relating absorbance to concentration and path length.
*   **Electronic Spectroscopy (UV-Vis)** probes transitions of electrons between molecular orbitals ($\sigma \rightarrow \sigma^*$, $n \rightarrow \sigma^*$, $\pi \rightarrow \pi^*$, $n \rightarrow \pi^*$).
*   **Conjugation** lowers the HOMO-LUMO gap, shifting absorption maxima to longer wavelengths.
*   **UV-Vis spectrophotometers** use a light source, wavelength selector, cuvette, and detector to measure absorption spectra.
*   Applications are vast, including quantitative analysis, purity checks, reaction monitoring, and characterizing advanced materials like polymers and nanomaterials, directly supporting **CO3**.

Understanding these concepts will provide you with a powerful toolset for analyzing and characterizing the materials you'll encounter and develop in your respective fields.

---

### Sample Questions and Answers

**Conceptual Questions:**

1.  **Question:** Explain why conjugation in a molecule leads to absorption at longer wavelengths.
    **Answer:** In conjugated systems, $\pi$ electrons are delocalized over the entire system. This delocalization lowers the energy of the $\pi^*$ antibonding molecular orbital relative to the $\pi$ bonding molecular orbital. The result is a smaller energy gap ($\Delta E$) between the HOMO and LUMO. According to the equation $E = hc/\lambda$, a smaller energy gap corresponds to absorption of lower energy photons, which means longer wavelengths. This is often referred to as a bathochromic shift.

2.  **Question:** What is the fundamental principle behind UV-Vis spectroscopy?
    **Answer:** UV-Vis spectroscopy is based on the absorption of ultraviolet and visible light by molecules, which causes electronic transitions. Electrons in lower energy molecular orbitals (ground state) are promoted to higher energy molecular orbitals (excited state) when they absorb photons of specific wavelengths that match the energy difference between these orbitals. The instrument measures the amount of light absorbed at each wavelength.

3.  **Question:** What are the limitations of Beer-Lambert Law?
    **Answer:** Beer-Lambert Law is strictly valid under specific conditions. Its limitations include:
    *   **Non-monochromatic radiation:** The law assumes monochromatic light.
    *   **High concentrations:** Deviations occur at high concentrations due to intermolecular interactions.
    *   **Scattering or fluorescence:** The sample should not scatter light or fluoresce.
    *   **Chemical interactions:** The absorbing species should not undergo association, dissociation, or chemical reactions in solution that alter its concentration or absorptivity.

**Exam-Oriented Questions:**

4.  **Question:** A compound shows maximum absorbance ($\lambda_{max}$) at 250 nm. If this compound is further conjugated by adding more double bonds, what would you expect to happen to its $\lambda_{max}$? Justify your answer.
    **Answer:** You would expect the $\lambda_{max}$ to shift to a longer wavelength (red shift or bathochromic shift). This is because increasing conjugation leads to a decrease in the energy gap between the HOMO and LUMO, requiring lower energy photons (longer wavelengths) for electronic transitions.

5.  **Question:** A solution of a substance has a concentration of $2.0 \times 10^{-4}$ M and absorbs 60% of the incident light at a given wavelength in a 1 cm cuvette. Calculate its molar absorptivity ($\epsilon$) at this wavelength.
    **Answer:**
    If 60% of the light is absorbed, then 40% of the light is transmitted.
    $T = 0.40$
    $A = -\log_{10}(T) = -\log_{10}(0.40)$
    $A \approx 0.3979$ (using a calculator)

    Using Beer-Lambert Law, $A = \epsilon bc$:
    $0.3979 = \epsilon \times (1 \text{ cm}) \times (2.0 \times 10^{-4} \text{ M})$
    $\epsilon = \frac{0.3979}{1 \times 2.0 \times 10^{-4}} \text{ L mol}^{-1} \text{ cm}^{-1}$
    $\epsilon \approx 19895 \text{ L mol}^{-1} \text{ cm}^{-1}$

6.  **Question:** Name the most common types of electronic transitions responsible for UV-Vis absorption in organic molecules and state which type typically occurs at the longest wavelengths and has the lowest intensity.
    **Answer:** The most common types of electronic transitions are $\sigma \rightarrow \sigma^*$, $n \rightarrow \sigma^*$, $\pi \rightarrow \pi^*$, and $n \rightarrow \pi^*$. The $n \rightarrow \pi^*$ transition typically occurs at the longest wavelengths (lowest energy) and has the lowest molar absorptivity (intensity) among these common transitions.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=IV4IUsholjg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=kYGDGvL4Xf8) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=2G1410K0MQA) |
