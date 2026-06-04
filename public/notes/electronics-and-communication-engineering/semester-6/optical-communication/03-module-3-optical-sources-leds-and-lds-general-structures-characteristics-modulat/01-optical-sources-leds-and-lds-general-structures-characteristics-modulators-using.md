---
title: "Optical sources: LEDs and LDs, general structures, characteristics , modulators using LEDs and LDs. coupling with fibres,"
subject: "OPTICAL COMMUNICATION"
module: "Module 3: Optical sources: LEDs and LDs, general structures, characteristics , modulators using LEDs and LDs. coupling with fibres,"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fef06"
status: "completed"
scrapedAt: "2026-05-23T18:02:16.021Z"
---
# OPTICAL COMMUNICATION - Module 3: Optical Sources

## Topic: Optical Sources: LEDs and LDs, General Structures, Characteristics, Modulators using LEDs and LDs, Coupling with Fibres

This module delves into the fundamental optical sources used in fiber optic communication systems: Light Emitting Diodes (LEDs) and Laser Diodes (LDs). We will explore their structures, operational principles, key characteristics, how they are modulated, and the crucial aspect of coupling their light output into optical fibers.

**Relevant Course Outcomes:**
*   **CO3:** Illustrate the working of sources, detectors and optical amplifiers used in optical communication system (Knowledge Level: K2)

---

### 1. Introduction to Optical Sources

Optical sources are crucial components in optical communication systems. They convert electrical signals into optical signals that can be transmitted through optical fibers. The primary requirements for an optical source are:

*   **Efficient conversion:** High efficiency in converting electrical energy to optical energy.
*   **High output power:** Sufficient optical power to overcome losses in the fiber and achieve the desired transmission distance.
*   **Narrow spectral width:** A narrow spectrum of emitted light to minimize chromatic dispersion in the fiber.
*   **High modulation capability:** Ability to be switched on and off rapidly to carry information at high data rates.
*   **Reliability and longevity:** Long operational life and stability under various environmental conditions.
*   **Low cost:** Economical to manufacture and implement.

The two main types of semiconductor optical sources are:

*   **Light Emitting Diodes (LEDs)**
*   **Laser Diodes (LDs)**

---

### 2. Light Emitting Diodes (LEDs)

#### 2.1. Principle of Operation

LEDs are semiconductor devices that emit light through **spontaneous emission**. This process occurs when an electron and a hole recombine in the active region of the semiconductor junction. The energy released during this recombination is emitted as a photon.

*   **Spontaneous Emission:** An electron in a higher energy state (conduction band) randomly recombines with a hole in a lower energy state (valence band). This recombination releases energy in the form of a photon. The energy of the emitted photon ($h\nu$) is approximately equal to the bandgap energy ($E_g$) of the semiconductor material.
    *   $E_{photon} \approx E_g$
    *   The emission is random in time, direction, and phase, leading to a Lambertian radiation pattern and a broad spectral width.

#### 2.2. General Structures of LEDs

LEDs are essentially p-n junctions made from direct bandgap semiconductor materials. The primary structures used in optical communication are:

*   **Surface-Emitting LED (S-LED):**
    *   **Structure:** Consists of a p-n junction, typically made of GaAs or GaAlAs alloys. The active region is a thin layer. The emitted light exits perpendicular to the junction plane.
    *   **Mechanism:** Current is injected into the junction, causing electron-hole recombination. Photons are emitted in all directions within the semiconductor material.
    *   **Light Output:** Relatively low output power and a Lambertian (cosine-squared) emission pattern, which is not ideal for coupling into optical fibers.
    *   **Examples:** Standard GaAs or GaAlAs LEDs.

*   **Edge-Emitting LED (E-LED):**
    *   **Structure:** A double-heterojunction (DH) structure is common. It consists of an active layer sandwiched between two cladding layers of different refractive indices and energy bandgaps. The junction is designed to be narrow and elongated.
    *   **Mechanism:** Light is emitted from the edge of the junction. The higher refractive index of the active layer compared to the surrounding cladding layers creates an optical waveguide, which helps to direct the emitted light in a more forward direction.
    *   **Light Output:** Higher radiance and a more directional beam compared to S-LEDs, making them better for coupling into fibers.
    *   **Examples:** GaAlAs, InGaAsP based E-LEDs.

**Key Structural Features:**
*   **Active Region:** The region where electron-hole recombination occurs and light is generated.
*   **Cladding Layers:** Layers with lower refractive index and wider bandgap that confine the light and injected carriers.
*   **Substrate:** The supporting material for the semiconductor layers.
*   **Contacts:** Electrical contacts for current injection.
*   **Encapsulation/Lens:** Often used to shape and focus the emitted light.

#### 2.3. Characteristics of LEDs

*   **Spectral Characteristics:**
    *   **Spectral Width ($\Delta\lambda$):** LEDs emit light over a relatively wide range of wavelengths. This is due to the distribution of electron and hole energies in the conduction and valence bands and variations in the bandgap.
        *   Typically 20-50 nm (FWHM - Full Width at Half Maximum).
        *   A wider spectral width leads to increased chromatic dispersion in the fiber, limiting transmission bandwidth and distance.
    *   **Peak Emission Wavelength ($\lambda_p$):** The wavelength at which the light output is maximum. This depends on the semiconductor material.
        *   GaAs: ~850 nm
        *   GaAlAs: ~800-900 nm
        *   InGaAsP: ~1300 nm (low dispersion window) and ~1550 nm (low loss window).

*   **Optical Output Power and Radiance:**
    *   **Output Power:** The total optical power emitted by the LED. Generally lower than LDs.
        *   Surface emitters: typically a few hundred $\mu$W to a few mW.
        *   Edge emitters: can achieve tens of mW.
    *   **Radiance:** The optical power emitted per unit area per unit solid angle. Higher radiance is desirable for efficient coupling.
        *   E-LEDs have higher radiance than S-LEDs.

*   **Modulation Bandwidth:**
    *   The speed at which the light output can be modulated by an input electrical signal.
    *   Limited by the carrier lifetime in the active region and the RC time constant of the device.
    *   Typical bandwidths: a few MHz to a few hundred MHz. Some advanced E-LEDs can reach over 1 GHz.

*   **Efficiency:**
    *   **External Quantum Efficiency ($\eta_{ext}$):** The ratio of the number of photons emitted externally to the number of electrons injected into the device.
        *   $\eta_{ext} = \eta_{int} \times \eta_{rad}$
        *   $\eta_{int}$: Internal quantum efficiency (ratio of photons generated to injected electrons).
        *   $\eta_{rad}$: Radiative efficiency (fraction of internal photons that escape the semiconductor).
    *   **Power Efficiency:** The ratio of optical output power to electrical input power.
        *   Typically 1-10% for commercial LEDs.

*   **Responsivity ($R$):** The ratio of output optical power to input electrical current. Measured in A/W.

#### 2.4. Modulation using LEDs

LEDs can be modulated by varying the drive current. This can be done in two main ways:

*   **Direct Modulation:** The electrical data signal directly modulates the current supplied to the LED.
    *   **Mechanism:** The input electrical signal is applied as a forward bias current to the LED. A high-frequency AC signal superimposed on a DC bias current is typically used.
    *   **Advantages:** Simple circuitry, cost-effective.
    *   **Disadvantages:** Limited modulation bandwidth due to carrier lifetime effects and transient turn-on/off delays. Can introduce pattern-dependent effects (pattern jitter).

*   **Indirect Modulation (External Modulation):** The LED is operated continuously at a constant current (CW), and an external modulator is used to control the light beam.
    *   **Mechanism:** A modulator (e.g., an electro-optic modulator or an acousto-optic modulator) is placed in the path of the LED's light output. The electrical data signal controls the modulator, which either passes or blocks the light.
    *   **Advantages:** Can achieve higher modulation speeds than direct modulation as it bypasses the limitations of carrier lifetime.
    *   **Disadvantages:** More complex and expensive circuitry, introduces additional insertion loss.

**Important for Direct Modulation:**
*   **Bias Current:** A small DC bias current is usually applied to ensure the LED is always above its threshold current, reducing turn-on delay and improving linearity.
*   **Peak Current:** The amplitude of the AC signal determines the modulation depth.

---

### 3. Laser Diodes (LDs)

#### 3.1. Principle of Operation

LDs operate on the principle of **stimulated emission** in a semiconductor junction, similar to conventional lasers. This process results in coherent, monochromatic, and directional light.

*   **Stimulated Emission:** When a photon with energy equal to the bandgap energy passes near an excited electron in the conduction band, it stimulates the electron to recombine with a hole in the valence band, emitting an identical photon. This identical photon has the same wavelength, phase, direction, and polarization as the stimulating photon.
*   **Population Inversion:** Essential for lasing. Achieved by injecting a high density of electrons into the conduction band and holes into the valence band of the active region, creating a non-equilibrium state where more electrons are in the excited state than the ground state.
*   **Optical Gain:** Stimulated emission leads to amplification of light as it passes through the active region.
*   **Optical Cavity (Resonator):** A Fabry-Perot resonator is formed by reflecting surfaces at the ends of the active region. This cavity provides positive feedback, allowing the light to oscillate and build up in intensity. Photons bounce back and forth between the mirrors, stimulating more emission. One mirror is made partially transparent to allow the laser beam to exit.

#### 3.2. General Structures of LDs

LDs are also semiconductor p-n junctions, but their structures are more complex to achieve efficient stimulated emission and light confinement.

*   **Double-Heterostructure (DH) Laser Diode:** This is the most common type.
    *   **Structure:** Consists of an active layer (e.g., GaAs or InGaAsP) sandwiched between two cladding layers of different bandgap energy and refractive index (e.g., GaAlAs or InP/GaInAsP). The outer layers have lower refractive indices and wider bandgaps than the active layer.
    *   **Functions:**
        *   **Carrier Confinement:** The wider bandgap cladding layers confine the injected electrons and holes to the active region, increasing the carrier density and enabling population inversion.
        *   **Optical Confinement:** The difference in refractive indices between the active layer and the cladding layers creates an optical waveguide. This confines the emitted photons to the active region, increasing the probability of stimulated emission and interaction with carriers.
    *   **End Mirrors:** The cleaved facets of the semiconductor crystal form the reflecting surfaces of the optical cavity.
    *   **Types of DH Lasers:**
        *   **Stripe-Geometry Laser:** The active region is restricted to a narrow stripe to control the lateral current spreading and achieve single lateral mode operation. This leads to a more confined and stable beam. Examples include proton-bombarded, diffused, and ridge waveguide lasers.
        *   **Buried-Heterostructure (BH) Laser:** The active region is completely surrounded by lower refractive index material, providing excellent optical and current confinement. This results in lower threshold current and better mode stability.

*   **Quantum Well Lasers (QWLDs):**
    *   **Structure:** The active region is a very thin layer (a few nanometers thick) where quantum mechanical effects become significant. This creates discrete energy levels instead of continuous bands.
    *   **Advantages:** Lower threshold current, higher efficiency, narrower spectral width, tunable emission wavelength by controlling the well width.
    *   **Types:** Single Quantum Well (SQW) and Multiple Quantum Well (MQW) structures.

#### 3.3. Characteristics of LDs

*   **Spectral Characteristics:**
    *   **Spectral Width ($\Delta\lambda$):** Much narrower than LEDs due to stimulated emission.
        *   Typically 0.1-5 nm (FWHM).
        *   This leads to significantly lower chromatic dispersion, enabling higher bandwidth and longer transmission distances.
    *   **Longitudinal Modes:** The laser cavity supports multiple longitudinal modes (specific wavelengths that satisfy the cavity resonance condition).
        *   **Single-Mode Laser:** Emits light predominantly at a single longitudinal mode. Desirable for high-speed, long-haul systems.
        *   **Multi-Mode Laser:** Emits light at multiple longitudinal modes.

*   **Optical Output Power and Radiance:**
    *   **Output Power:** Significantly higher than LEDs.
        *   Continuous Wave (CW) output powers can range from a few mW to hundreds of mW.
    *   **Radiance:** Extremely high due to the concentrated and directional nature of the emitted beam.

*   **Modulation Bandwidth:**
    *   Can be very high, limited by the relaxation oscillation frequency of the laser cavity and the carrier recombination rates.
    *   Direct modulation bandwidths can reach several GHz, and external modulation can achieve tens of GHz or more.

*   **Efficiency:**
    *   **Differential Quantum Efficiency ($\eta_{diff}$):** The ratio of the change in the number of emitted photons to the change in the number of injected electrons above the threshold current.
    *   **Power Efficiency:** Can be much higher than LEDs, reaching 20-40% or more in some advanced lasers.

*   **Threshold Current ($I_{th}$):**
    *   The minimum drive current required to achieve lasing. Below $I_{th}$, the device behaves like an LED (spontaneous emission). Above $I_{th}$, stimulated emission dominates.
    *   Lower threshold current is desirable for lower power consumption and reduced heat generation.

*   **Beam Characteristics:**
    *   **Directionality:** Highly directional beam, with a small divergence angle.
    *   **Coherence:** Emitted light is coherent (same phase and frequency).

#### 3.4. Modulation using LDs

LDs can also be modulated using direct or indirect modulation techniques.

*   **Direct Modulation:**
    *   **Mechanism:** The drive current is modulated by the electrical data signal. Similar to LEDs, a DC bias current is applied to keep the laser above threshold.
    *   **Advantages:** Simple, cost-effective, high modulation speeds are achievable due to the fast switching nature of stimulated emission.
    *   **Disadvantages:** Can suffer from chirp (wavelength variation during modulation), pattern jitter, and mode hopping, especially at very high speeds.

*   **Indirect Modulation (External Modulation):**
    *   **Mechanism:** The laser is operated CW, and an external modulator (e.g., Mach-Zehnder modulator, Electro-Absorption Modulator - EAM) is used to control the light output. EAMs are often integrated with the laser.
    *   **Advantages:** Avoids chirp and pattern effects associated with direct modulation, enabling very high data rates and long-distance transmission.
    *   **Disadvantages:** Adds complexity, cost, and insertion loss to the system.

**Important for LD Modulation:**
*   **Bias Point:** Crucial for minimizing chirp and ensuring efficient modulation. The bias current is typically set just above the threshold current.
*   **Modulation Format:** Different modulation formats (e.g., NRZ, RZ) affect performance.

---

### 4. Coupling Optical Sources to Optical Fibers

Efficiently coupling the light emitted by the source into the optical fiber is critical for maximizing the signal strength and transmission distance. This is a significant loss factor in many systems.

#### 4.1. Coupling Losses

Several factors contribute to coupling losses:

*   **Mismatch in Radiance/Brightness:** The source's emission characteristics (size, divergence, radiance) may not match the fiber's acceptance characteristics.
*   **Numerical Aperture (NA) Mismatch:** The acceptance angle of the fiber (determined by its NA) must be large enough to capture the emitted light.
*   **Core Diameter Mismatch:** The core diameter of the fiber should be matched to the emitting area of the source to maximize power transfer.
*   **Alignment Misalignment:** Lateral (off-axis), angular, and end-separation misalignments between the source and the fiber.
*   **Reflection Losses:** Fresnel reflection at the fiber end face if not properly treated.

#### 4.2. Coupling Techniques

*   **For LEDs:**
    *   **Direct Butt Coupling:** The LED chip is placed directly against the end face of the optical fiber.
        *   **S-LEDs:** Suffer from significant losses due to the Lambertian emission pattern and the large emitting area.
        *   **E-LEDs:** Offer better coupling due to their more directional emission and smaller emitting area.
    *   **Lens-Assisted Coupling:** A lens (e.g., a hemispherical dome on the LED chip, or a separate microlens) is used to collimate or focus the LED's light into the fiber core.
        *   This significantly improves coupling efficiency by increasing the effective radiance and matching the source's angular distribution to the fiber's NA.
        *   **Pros:** Higher coupling efficiency, less sensitive to alignment.
        *   **Cons:** Added cost and complexity.

*   **For LDs:**
    *   **Direct Butt Coupling:** Can be used, but is less common due to the laser's highly directional beam. Alignment sensitivity is very high.
    *   **Lens-Assisted Coupling:** Standard practice.
        *   **Lenses:** Typically aspheric or spherical microlenses are used.
        *   **Function:** To collimate the laser beam and then focus it into the small core of the optical fiber.
        *   **Types of Lenses:** GRIN lenses (Graded-Index lenses) are often used.
        *   **Advantages:** Achieves very high coupling efficiencies (up to 70-80%) due to the laser's directional beam and the precise control offered by lenses.
        *   **Disadvantages:** Requires precise alignment of the lens and fiber with the laser chip, adding complexity.

**Important Considerations for Coupling:**
*   **Fiber Type:** Different fibers (e.g., multimode vs. single-mode) have different core sizes and NA values, requiring different coupling strategies.
*   **LED/LD Type:** The specific structure and emission characteristics of the source dictate the most suitable coupling method.
*   **Cost vs. Performance:** A trade-off often exists between the complexity of the coupling method and the achieved coupling efficiency.

---

### 5. Practice Questions and Answers

**Question 1:**
What is the primary difference in the emission mechanism between LEDs and Laser Diodes?
(A) Spontaneous emission vs. stimulated emission
(B) Stimulated emission vs. spontaneous emission
(C) Stimulated emission vs. electron-hole recombination
(D) Electron-hole recombination vs. stimulated emission

**Answer 1:**
(A) Spontaneous emission vs. stimulated emission

**Explanation:** LEDs rely on spontaneous emission, where photons are emitted randomly. Laser Diodes rely on stimulated emission, where emitted photons are identical to incident photons, leading to coherent light.

---

**Question 2:**
Which type of optical source generally has a narrower spectral width: LED or Laser Diode? Explain why.

**Answer 2:**
Laser Diode (LD).
**Explanation:** LDs utilize stimulated emission, which amplifies photons of specific wavelengths that are resonant with the laser cavity. This process inherently produces light with a much narrower spectral width (typically 0.1-5 nm) compared to LEDs, which emit over a broader spectrum (20-50 nm) due to spontaneous emission. A narrower spectral width is crucial for minimizing chromatic dispersion in optical fibers.

---

**Question 3:**
List two types of losses encountered when coupling an optical source to an optical fiber.

**Answer 3:**
1.  **Mismatch in radiance/brightness**
2.  **Core diameter mismatch**
3.  **Alignment misalignment (lateral, angular, end-separation)**
4.  **Numerical Aperture (NA) mismatch**
5.  **Reflection losses (Fresnel reflection)**

(Any two of the above are acceptable).

---

**Question 4:**
What is the role of the double-heterostructure in a laser diode?
(A) To increase the spectral width.
(B) To confine carriers and light to the active region.
(C) To enhance spontaneous emission.
(D) To reduce the efficiency of stimulated emission.

**Answer 4:**
(B) To confine carriers and light to the active region.

**Explanation:** The double-heterostructure consists of layers with different bandgaps and refractive indices that create potential barriers for carriers and an optical waveguide, respectively. This confinement is essential for achieving population inversion and efficient stimulated emission.

---

**Question 5:**
Compare and contrast direct modulation and indirect (external) modulation for optical sources.

**Answer 5:**
| Feature              | Direct Modulation                                    | Indirect (External) Modulation                       |
| :------------------- | :--------------------------------------------------- | :--------------------------------------------------- |
| **Mechanism**        | Electrical signal directly varies source drive current. | Source operates CW; external device modulates light. |
| **Circuitry**        | Simple, integrated with the source.                  | Complex, requires separate modulator.                |
| **Modulation Speed** | Limited by carrier lifetime, chirp, pattern effects. | Higher speeds possible, avoids source limitations.   |
| **Chirp**            | Significant issue.                                   | Minimal or absent.                                   |
| **Pattern Effects**  | Can occur (e.g., jitter).                            | Reduced or eliminated.                               |
| **Cost**             | Lower.                                               | Higher.                                              |
| **Efficiency**       | Direct conversion, no added optical loss.            | Introduces additional optical insertion loss.        |
| **Typical Use**      | Lower to moderate speed applications.                | High-speed, long-haul communications.                |

---

### 6. Important Points to Remember

*   **LEDs:** Spontaneous emission, broader spectrum, lower radiance, lower modulation bandwidth, cheaper, used for shorter distances and lower data rates.
*   **LDs:** Stimulated emission, narrow spectrum, higher radiance, higher modulation bandwidth, more expensive, used for higher data rates and longer distances.
*   **Double-Heterostructure (DH):** Crucial for both LEDs (especially E-LEDs) and LDs for carrier and optical confinement.
*   **Coupling Efficiency:** A major factor in system performance. Lens-assisted coupling is common for both sources, especially LDs.
*   **Modulation:** Directly modulating the drive current is simple but has limitations; external modulation offers higher speeds and better signal quality at the cost of complexity.
*   **Key Parameters:** Spectral width, output power, radiance, modulation bandwidth, threshold current (for LDs), efficiency are important for selecting the appropriate source.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 7. Textbook and Reference Material Alignment

This module's content is drawn from foundational principles discussed in the provided textbooks:

*   **Keiser, "Optical Fiber Communications":** Covers the basic physics of LEDs and LDs, their structures, characteristics, and modulation techniques in detail. Specific sections on semiconductor physics and optoelectronic devices are relevant.
*   **Senior, "Optical Fiber Communication: Principles and Practice":** Provides a comprehensive overview of optical sources, including their operational principles, types, performance metrics, and coupling considerations.
*   **Palais, "Fibre Optic Communications":** Discusses the practical aspects of optical sources, their applications, and the challenges associated with fiber coupling.
*   **Mishra and Ugale, "Fibre Optic Communication: Systems and Components":** Focuses on the component-level understanding of optical sources and their integration into communication systems.
*   **Agrawal, "Fibre Optic Communications Systems":** Offers in-depth analysis of semiconductor device physics relevant to lasers and LEDs, along with performance analysis.
*   **Reference Books:** Provide further theoretical backing and detailed explanations of specific phenomena, such as quantum mechanics in quantum well lasers or advanced modulation schemes.

**Alignment with Course Outcomes:**
*   **CO3:** The entire module directly addresses the working of optical sources (LEDs and LDs). Details on structures, principles of operation (spontaneous vs. stimulated emission), and characteristics (spectral, power, modulation) are covered to illustrate their functioning.

---