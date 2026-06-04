---
title: "Molecular Spectroscopy: Types of spectra- Molecular energy levels - Beer Lambert’s law – Numerical problems - Electronic Spectroscopy – Principle, Types of electronic transitions –Role of Conjugation in absorption maxima - Instrumentation-Applications"
subject: "CHEMISTRY FOR PHYSICAL SCIENCE"
module: "Module 3: Instrumental Methods of Analysis"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1eddfeb4799d95e833b7"
status: "completed"
scrapedAt: "2026-05-20T17:37:07.766Z"
---
# Chemistry for Physical Science: Module 3 - Instrumental Methods of Analysis

## Topic: Molecular Spectroscopy

Welcome, everyone! Today, we're diving into a really fascinating and powerful area of chemistry: **Molecular Spectroscopy**. This topic is absolutely crucial for understanding how we can identify and quantify chemical substances using instruments. In fact, if you think about how we analyze anything in a lab – from checking the purity of a drug to understanding the composition of a new material – spectroscopy is often the go-to technique. This directly ties into our Course Outcome 3: **Apply appropriate analytical techniques for different engineering materials**. You'll see how these spectroscopic methods help us characterize all sorts of materials we encounter in engineering.

### 1. What is Spectroscopy? A Gentle Introduction

At its heart, spectroscopy is the study of the **interaction between matter and electromagnetic radiation**. Think of it like this: every molecule is like a unique fingerprint. When we shine different kinds of light (electromagnetic radiation) on a molecule, it absorbs or emits light at specific wavelengths, based on its structure and the energy levels within its atoms and bonds. By analyzing this absorption or emission pattern, we can deduce what the molecule is and even how much of it is present. It’s a bit like identifying a person by the unique sound of their voice – each molecule has its own "spectral voice"!

### 2. Types of Spectra: The Many Voices of Molecules

When we talk about molecular spectroscopy, we're not just talking about visible light. Electromagnetic radiation exists across a vast spectrum, from radio waves to gamma rays. Different regions of this spectrum interact with molecules in different ways, giving rise to various types of spectroscopy.

*   **Rotational Spectroscopy:** This involves very low-energy radio waves and microwaves. Molecules, when they absorb this radiation, start to rotate. The specific frequencies at which they rotate are quantized, meaning they can only rotate at certain speeds, determined by the molecule's moment of inertia (which depends on its mass and bond lengths). This is excellent for determining bond lengths and molecular geometry, especially for simple diatomic molecules.
*   **Vibrational Spectroscopy (Infrared - IR and Raman):** Here, we're dealing with infrared radiation. Molecules have bonds that can vibrate, much like springs. When IR radiation of the correct frequency matches the vibrational frequency of a bond, the molecule absorbs that energy and the vibration gets stronger. This absorption pattern is highly specific to the types of bonds present in a molecule. Think of it as the "molecular heartbeat" – different bonds have different heart rates. IR spectroscopy is a cornerstone for identifying functional groups in organic molecules. Raman spectroscopy uses visible light and detects scattered light, providing complementary information.
*   **Electronic Spectroscopy (UV-Visible - UV-Vis):** This is where we use ultraviolet and visible light. The energy in this region is high enough to promote electrons from lower energy electronic states to higher ones. When a molecule absorbs UV-Vis light, it's because an electron has jumped to a higher energy level. The specific wavelengths absorbed tell us about the electronic structure of the molecule, particularly the presence of conjugated systems (alternating single and double bonds). This is incredibly useful for analyzing coloured compounds and conjugated systems, which is a major focus of our study today.
*   **Nuclear Magnetic Resonance (NMR) Spectroscopy:** This technique uses radio waves in the presence of a strong magnetic field. It probes the magnetic properties of atomic nuclei (like hydrogen-1 or carbon-13). Different nuclei in different chemical environments absorb radio waves at different frequencies, giving detailed information about the connectivity of atoms in a molecule. It's like getting a detailed map of the molecule’s internal structure.
*   **Mass Spectrometry (MS):** While not strictly absorption or emission of EM radiation, MS is a crucial instrumental technique for molecular analysis. It involves ionizing molecules and then separating these ions based on their mass-to-charge ratio. This gives us the molecular weight and fragmentation patterns, which are invaluable for identifying unknown compounds.

### 3. Molecular Energy Levels: The Quantum Ladder

To understand *why* molecules absorb specific wavelengths of light, we need to talk about **quantization**. Just like we can only stand on certain steps of a staircase and not in between, molecules can only exist in specific, discrete energy levels. These energy levels correspond to different types of molecular motion:

*   **Electronic Energy Levels:** These are the highest energy levels, associated with the arrangement of electrons in orbitals around atoms and between atoms. Transitions between these levels typically require UV-Vis radiation.
*   **Vibrational Energy Levels:** Within each electronic state, there are multiple vibrational energy levels, associated with the stretching and bending of chemical bonds. These transitions require IR radiation.
*   **Rotational Energy Levels:** Within each vibrational state, there are even more closely spaced rotational energy levels, associated with the rotation of the molecule as a whole. These transitions require microwave radiation.

The energy difference ($\Delta E$) between two energy levels is directly proportional to the frequency ($\nu$) of the electromagnetic radiation absorbed or emitted, according to Planck's equation:

$$ \Delta E = h\nu $$

where $h$ is Planck's constant. Since the speed of light ($c$) is related to frequency and wavelength ($\lambda$) by $c = \nu\lambda$, we can also write:

$$ \Delta E = \frac{hc}{\lambda} $$

This fundamental relationship tells us that a larger energy difference corresponds to a shorter wavelength (higher frequency) of radiation. So, electronic transitions (large $\Delta E$) absorb UV-Vis light, while rotational transitions (small $\Delta E$) absorb microwave radiation.

**Remember this:** The energy spacing of these levels increases in the order: Rotational < Vibrational < Electronic. Therefore, the radiation needed to induce these transitions also increases in energy (frequency) or decreases in wavelength: Microwaves < IR < UV-Vis.

### 4. Beer-Lambert's Law: Quantifying Absorption

Now that we know molecules absorb light at specific wavelengths, how do we know *how much* light is absorbed? This is where **Beer-Lambert's Law** comes in. It's a cornerstone for quantitative analysis using UV-Vis spectroscopy and many other absorption-based techniques.

Imagine shining a beam of light through a solution. As the light passes through, some of it gets absorbed by the molecules in the solution. Beer-Lambert's Law relates the amount of light absorbed to the concentration of the absorbing substance and the path length the light travels through the sample.

The law states that the absorbance ($A$) of a solution is directly proportional to the concentration ($c$) of the absorbing species and the path length ($b$) of the light beam through the solution.

The mathematical expression is:

$$ A = \epsilon bc $$

Let's break down these terms:

*   **Absorbance ($A$):** This is a dimensionless quantity. It's not the amount of light absorbed, but rather a logarithmic measure of the fraction of light absorbed. It's defined as:
    $$ A = \log_{10} \left( \frac{I_0}{I} \right) $$
    where $I_0$ is the intensity of the incident light (the light going in) and $I$ is the intensity of the transmitted light (the light coming out). A higher absorbance means less light is getting through.

*   **Molar Absorptivity ($\epsilon$):** This is a constant for a given substance at a specific wavelength. It's a measure of how strongly a substance absorbs light at that particular wavelength. Its units are typically L mol$^{-1}$ cm$^{-1}$. A high $\epsilon$ means the substance is a strong absorber. This is a characteristic property of the molecule at a given wavelength.

*   **Path Length ($b$):** This is the distance the light travels through the sample, usually measured in centimeters (cm). In a standard UV-Vis cuvette, this is typically 1 cm.

**Why is this so important?** If $\epsilon$ and $b$ are constant (which they are for a specific experiment), then absorbance ($A$) is directly proportional to concentration ($c$). This means if we double the concentration, the absorbance doubles. This linear relationship is what allows us to determine the concentration of an unknown sample by measuring its absorbance and comparing it to a calibration curve made from known concentrations. This directly helps us with Course Outcome 3.

**Example:** Imagine you're analyzing the concentration of a coloured dye in water. You prepare solutions of known dye concentrations and measure their absorbance at a specific wavelength using a UV-Vis spectrophotometer (which employs this principle). You plot absorbance against concentration, creating a calibration curve. Then, you take your unknown sample, measure its absorbance, and find the corresponding concentration on your calibration curve. Simple, right? But incredibly powerful.

**Important Note:** Beer-Lambert's Law works best for dilute solutions. At high concentrations, interactions between molecules can affect the absorption, and the linearity might break down. Also, the radiation source and detector must be stable.

### 5. Numerical Problems with Beer-Lambert's Law

Let's work through a couple of examples to solidify your understanding.

**Example 1:** A solution of a compound has a concentration of 0.01 M. At a wavelength of 500 nm, it exhibits an absorbance of 0.50 when measured in a 1 cm cuvette. What is the molar absorptivity ($\epsilon$) of this compound at 500 nm?

*   **Given:**
    *   $c = 0.01$ M
    *   $A = 0.50$
    *   $b = 1$ cm
*   **Formula:** $A = \epsilon bc$
*   **Rearranging for $\epsilon$:** $\epsilon = \frac{A}{bc}$
*   **Calculation:** $\epsilon = \frac{0.50}{(0.01 \text{ M})(1 \text{ cm})} = 50$ L mol$^{-1}$ cm$^{-1}$

**Example 2:** A drug molecule has a molar absorptivity ($\epsilon$) of $1.5 \times 10^4$ L mol$^{-1}$ cm$^{-1}$ at 280 nm. If a solution of this drug in a 2 cm cuvette has an absorbance of 0.60 at 280 nm, what is its concentration?

*   **Given:**
    *   $\epsilon = 1.5 \times 10^4$ L mol$^{-1}$ cm$^{-1}$
    *   $A = 0.60$
    *   $b = 2$ cm
*   **Formula:** $A = \epsilon bc$
*   **Rearranging for $c$:** $c = \frac{A}{\epsilon b}$
*   **Calculation:** $c = \frac{0.60}{(1.5 \times 10^4 \text{ L mol}^{-1} \text{ cm}^{-1})(2 \text{ cm})} = \frac{0.60}{3.0 \times 10^4} \text{ M} = 0.2 \times 10^{-4} \text{ M} = 2.0 \times 10^{-5}$ M

These types of calculations are very common in exams. Make sure you're comfortable rearranging the formula and using the correct units.

### 6. Electronic Spectroscopy: Unveiling Electron Transitions

Now let's focus specifically on **Electronic Spectroscopy**, often referred to as UV-Visible (UV-Vis) Spectroscopy. This is a workhorse technique in many fields, from chemistry and biology to material science and environmental monitoring. It's all about those electron transitions we mentioned earlier.

#### Principle

The principle is straightforward: when a molecule is exposed to UV or visible light, electrons in lower-energy molecular orbitals can absorb energy and be promoted to higher-energy molecular orbitals. The specific wavelengths of light absorbed depend on the energy difference between these orbitals.

$$ \text{Ground State Electronic Configuration} \xrightarrow{\text{UV-Vis light}} \text{Excited State Electronic Configuration} $$

The energy required for these transitions is typically in the range of 1.5 to 6.5 eV (electron volts), which corresponds to wavelengths from about 200 nm to 800 nm.

#### Types of Electronic Transitions

In molecules, electrons occupy molecular orbitals formed from atomic orbitals. The most common types of electronic transitions observed in UV-Vis spectroscopy involve the valence electrons:

*   **$\sigma \rightarrow \sigma^*$ transitions:** These occur when a bonding sigma ($\sigma$) electron is promoted to an antibonding sigma ($\sigma^*$) orbital. These transitions require a lot of energy (short wavelengths, typically < 150 nm) and are not usually observed in standard UV-Vis spectra as most solvents and compounds have these bonds, but the energy gap is too large.
*   **$n \rightarrow \sigma^*$ transitions:** These involve non-bonding electrons ($n$), often from lone pairs on heteroatoms like oxygen, nitrogen, or halogens, being promoted to an antibonding sigma ($\sigma^*$) orbital. These transitions require less energy than $\sigma \rightarrow \sigma^*$ transitions and are observed in the UV region. Alkanes with heteroatoms, like ethers or alcohols, show these.
*   **$\pi \rightarrow \pi^*$ transitions:** These are very important and common in organic molecules. They involve promoting a pi ($\pi$) electron from a bonding pi orbital to an antibonding pi ($\pi^*$) orbital. These transitions require less energy than $\sigma \rightarrow \sigma^*$ transitions and are responsible for the absorption of UV and visible light in unsaturated compounds (those with double or triple bonds). They are often the strongest absorbers.
*   **$n \rightarrow \pi^*$ transitions:** These involve non-bonding electrons ($n$) being promoted to antibonding pi ($\pi^*$) orbitals. These transitions require even less energy than $\pi \rightarrow \pi^*$ transitions and are typically observed at longer wavelengths and are weaker in intensity. They are common in molecules containing carbonyl groups (C=O), nitro groups (NO2), etc.

**Order of energy required (shortest wavelength/highest energy to longest wavelength/lowest energy):**
$\sigma \rightarrow \sigma^*$ > $n \rightarrow \sigma^*$ > $\pi \rightarrow \pi^*$ > $n \rightarrow \pi^*$

#### Role of Conjugation in Absorption Maxima ($\lambda_{max}$)

This is a critical concept, especially for understanding why some compounds are coloured and others aren't. **Conjugation** refers to the presence of alternating single and double or triple bonds in a molecule.

Think of a conjugated system as a highway of electrons. In a molecule with isolated double bonds (like ethene), the $\pi$ electrons are localized. However, in a conjugated system (like butadiene, with alternating C=C-C=C), the $\pi$ electrons are delocalized and can spread out over several atoms.

**How does conjugation affect absorption?**
When $\pi$ electrons are delocalized in a conjugated system, the energy gap between the highest occupied molecular orbital (HOMO) and the lowest unoccupied molecular orbital (LUMO) *decreases*.

Recall $\Delta E = hc/\lambda$. If the energy gap ($\Delta E$) decreases, then the wavelength of light absorbed ($\lambda$) must *increase*. This means the absorption maximum ($\lambda_{max}$) shifts to longer wavelengths. This phenomenon is called a **bathochromic shift** or a **red shift**.

*   **Example:**
    *   Ethene (one double bond): $\lambda_{max} \approx 170$ nm (in the far UV, not typically seen).
    *   Butadiene (two conjugated double bonds): $\lambda_{max} \approx 217$ nm (in the UV).
    *   Hexatriene (three conjugated double bonds): $\lambda_{max} \approx 258$ nm (still in the UV).
    *   $\beta$-Carotene (eleven conjugated double bonds, found in carrots): $\lambda_{max} \approx 450-500$ nm (in the visible region!), which is why carrots are orange!

The longer the conjugated system, the smaller the HOMO-LUMO gap, and the longer the wavelength of light absorbed. When a molecule absorbs light in the visible region (400-800 nm), it means it's not absorbing all colours of white light, and the transmitted or reflected light will appear coloured.

**Auxochromes:** Groups attached to a conjugated system that can further increase the wavelength of maximum absorption (like -OH, -NH2, -OR) are called auxochromes. They typically have lone pairs that can extend the conjugation through resonance.

#### Instrumentation: The UV-Vis Spectrophotometer

A UV-Vis spectrophotometer is the instrument used for electronic spectroscopy. It's designed to measure the absorbance of a sample at different wavelengths. The basic components are:

1.  **Light Source:** Typically a deuterium lamp for UV radiation (190-350 nm) and a tungsten-halogen lamp for visible radiation (350-800 nm). Some instruments use a single source like a Xenon arc lamp that covers the entire range.
2.  **Wavelength Selector (Monochromator):** This is crucial. It uses a prism or a diffraction grating to disperse the light from the source into its constituent wavelengths and then selects a narrow band of wavelengths to pass through the sample.
3.  **Sample Compartment:** This holds the sample, usually in a quartz or glass cuvette. Quartz is essential for UV measurements because glass absorbs UV light.
4.  **Detector:** A device (like a photomultiplier tube or a photodiode) that measures the intensity of the light that has passed through the sample.
5.  **Readout Device:** This displays the absorbance or transmittance as a function of wavelength (a spectrum) or a specific absorbance value.

**How it works:** The instrument directs a beam of light of a specific wavelength through the reference (usually solvent) and then the sample. The detector measures the intensity of light that passes through both. By comparing the intensity of light transmitted through the sample ($I$) with the intensity of light transmitted through the reference ($I_0$), the instrument calculates the absorbance ($A$) using Beer-Lambert's Law. This process is repeated for a range of wavelengths to generate the UV-Vis spectrum.

#### Applications of Electronic Spectroscopy

UV-Vis spectroscopy is incredibly versatile. Here are some key applications, directly relevant to Course Outcome 3:

*   **Quantitative Analysis:** As we've seen with Beer-Lambert's Law, it's used to determine the concentration of substances in solution. This is vital in quality control, environmental monitoring (e.g., measuring pollutant levels), and pharmaceutical analysis.
*   **Identification of Compounds:** While not as definitive as NMR or Mass Spectrometry, the UV-Vis spectrum can provide clues about the structure of a molecule, particularly the presence of conjugated systems or chromophores (light-absorbing groups).
*   **Study of Reaction Kinetics:** By monitoring the change in absorbance of a reactant or product over time, we can determine the rate of a chemical reaction.
*   **Analysis of Coloured Materials:** It's essential for characterizing dyes, pigments, and coloured materials. For instance, in the textile industry or for food colouring analysis.
*   **Quality Control of Pharmaceuticals:** Ensuring the correct dosage and purity of drugs. Many drugs have characteristic UV absorption spectra.
*   **Environmental Science:** Measuring the concentration of nitrates, phosphates, and other pollutants in water.
*   **Biochemistry:** Quantifying DNA and proteins, which have characteristic UV absorptions.

**Connecting to Course Outcomes:**
*   **CO3 (Apply appropriate analytical techniques for different engineering materials):** UV-Vis spectroscopy is a prime example of an analytical technique used to characterize various engineering materials, especially those with colour or conjugated systems, like polymers, dyes, and even some advanced materials. Understanding its principle and application allows you to select and use it appropriately.

### Sample Questions with Answers

**Q1. State the Beer-Lambert Law and define its terms.**

**Answer:**
The Beer-Lambert Law states that the absorbance of a solution is directly proportional to the concentration of the absorbing species and the path length through the solution.
Mathematically, it is expressed as:
$A = \epsilon bc$
Where:
*   $A$ is the Absorbance (dimensionless)
*   $\epsilon$ is the Molar Absorptivity (units: L mol$^{-1}$ cm$^{-1}$), a measure of how strongly a substance absorbs light at a specific wavelength.
*   $b$ is the Path Length (units: cm), the distance the light travels through the sample.
*   $c$ is the Concentration (units: mol L$^{-1}$ or M), the amount of the absorbing substance per unit volume.

**Q2. A solution of substance X shows an absorbance of 0.75 at 350 nm in a 1 cm cuvette. If the molar absorptivity of substance X at 350 nm is $1.5 \times 10^4$ L mol$^{-1}$ cm$^{-1}$, what is the concentration of the solution?**

**Answer:**
We use the Beer-Lambert Law: $A = \epsilon bc$.
We need to find the concentration, $c$. Rearranging the formula: $c = \frac{A}{\epsilon b}$.
Given:
$A = 0.75$
$\epsilon = 1.5 \times 10^4$ L mol$^{-1}$ cm$^{-1}$
$b = 1$ cm

$c = \frac{0.75}{(1.5 \times 10^4 \text{ L mol}^{-1} \text{ cm}^{-1})(1 \text{ cm})}$
$c = \frac{0.75}{1.5 \times 10^4} \text{ mol L}^{-1}$
$c = 0.5 \times 10^{-4} \text{ mol L}^{-1}$
$c = 5.0 \times 10^{-5}$ M

**Q3. Explain why conjugation leads to a bathochromic shift in electronic spectra.**

**Answer:**
Conjugation in molecules involves alternating single and double bonds, leading to the delocalization of pi ($\pi$) electrons over a larger number of atoms. This delocalization increases the overlap between adjacent $\pi$ orbitals and stabilizes the system. Consequently, the energy gap between the highest occupied molecular orbital (HOMO) and the lowest unoccupied molecular orbital (LUMO) decreases. According to the relationship $\Delta E = hc/\lambda$, a smaller energy gap ($\Delta E$) requires less energy for an electronic transition. This corresponds to absorption at longer wavelengths. Therefore, as the extent of conjugation increases, the absorption maximum ($\lambda_{max}$) shifts to longer wavelengths, a phenomenon known as a bathochromic shift. For example, butadiene (two conjugated double bonds) absorbs at a shorter wavelength than hexatriene (three conjugated double bonds).

**Q4. List the main types of electronic transitions observed in UV-Vis spectroscopy and their typical relative energy requirements.**

**Answer:**
The main types of electronic transitions observed in UV-Vis spectroscopy, in order of increasing energy (decreasing wavelength), are:
1.  **$n \rightarrow \pi^*$ transitions:** Require the least energy.
2.  **$\pi \rightarrow \pi^*$ transitions:** Require more energy than $n \rightarrow \pi^*$ transitions.
3.  **$n \rightarrow \sigma^*$ transitions:** Require more energy than $\pi \rightarrow \pi^*$ transitions.
4.  **$\sigma \rightarrow \sigma^*$ transitions:** Require the most energy (often too high for standard UV-Vis).

**Q5. A solution containing a coloured compound has an absorbance of 0.80 at 600 nm using a 2 cm path length. Calculate the concentration of the compound if its molar absorptivity at 600 nm is $4.0 \times 10^3$ L mol$^{-1}$ cm$^{-1}$.**

**Answer:**
Using Beer-Lambert's Law, $A = \epsilon bc$.
We want to find $c$: $c = \frac{A}{\epsilon b}$.
Given:
$A = 0.80$
$\epsilon = 4.0 \times 10^3$ L mol$^{-1}$ cm$^{-1}$
$b = 2$ cm

$c = \frac{0.80}{(4.0 \times 10^3 \text{ L mol}^{-1} \text{ cm}^{-1})(2 \text{ cm})}$
$c = \frac{0.80}{8.0 \times 10^3} \text{ mol L}^{-1}$
$c = 0.1 \times 10^{-3} \text{ mol L}^{-1}$
$c = 1.0 \times 10^{-4}$ M

This concludes our overview of Molecular Spectroscopy, with a special focus on Electronic Spectroscopy. Remember, these techniques are fundamental tools for chemists and engineers alike! Keep practicing the calculations and understanding the principles behind these powerful instrumental methods.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=QXT4OVM4vFk) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=x00oX54G0Cg) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=l_a6hSj935s) |
