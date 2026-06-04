---
title: "Transmission Characteristics: Attenuation, Absorption losses, Linear and Non linear scattering losses, bend losses."
subject: "OPTICAL COMMUNICATION"
module: "Module 1: Optical fiber Communications: Structure of Optical fiber , materials, General block diagram of optical communication system, Advantages."
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780feefe"
status: "completed"
scrapedAt: "2026-05-23T18:02:10.745Z"
---
# OPTICAL COMMUNICATION

## Module 1: Optical Fiber Communications

### Topic: Transmission Characteristics - Attenuation, Absorption Losses, Linear and Non-linear Scattering Losses, Bend Losses

**Course Outcome Alignment:** This topic directly addresses **CO2: Describe the transmission characteristics and evaluate losses in optical fiber (Knowledge Level: K2)**. Understanding these characteristics is fundamental to designing and operating effective optical communication systems.

---

### 1. Introduction to Transmission Characteristics

Transmission characteristics define how optical signals propagate through an optical fiber and how their power is affected during transmission. The primary factor affecting signal quality over distance is **attenuation**, which is the loss of optical power as the signal travels through the fiber. Other factors contributing to signal degradation include **dispersion** (which we will cover in a later module, but is related to how signal components travel at different speeds) and various types of **losses**.

---

### 2. Attenuation in Optical Fibers

**Definition:** Attenuation, also known as **signal loss** or **insertion loss**, is the reduction in the power of an optical signal as it propagates through an optical fiber. It is typically expressed in decibels per kilometer (dB/km).

**Formula:**
Attenuation (α) in dB/km is given by:
$$ \alpha (dB/km) = \frac{10}{L} \log_{10} \left( \frac{P_{in}}{P_{out}} \right) $$
Where:
*   $L$ is the length of the fiber in kilometers.
*   $P_{in}$ is the input optical power.
*   $P_{out}$ is the output optical power.

**Key Concept:** Lower attenuation values are desirable for long-haul communication, as they allow signals to travel further before requiring amplification.

**Sources of Attenuation:** Attenuation is primarily caused by two mechanisms: **absorption** and **scattering**.

---

### 3. Absorption Losses

**Definition:** Absorption is the process where the optical energy carried by light is converted into other forms of energy, such as heat, within the fiber material. This happens when the photon energy matches the energy required for excitation of electrons in the glass material.

**Causes of Absorption:**

*   **Intrinsic Absorption:**
    *   **Ultraviolet Absorption:** Occurs due to the excitation of valence electrons to higher energy bands by high-energy photons (short wavelengths). This loss is significant at wavelengths shorter than 0.2 µm. (Keiser, 5th/e, p. 41)
    *   **Infrared Absorption:** Occurs due to molecular vibrations within the glass network. As wavelengths increase (lower photon energy), the photon energy becomes sufficient to excite these vibrational modes, leading to absorption. This is a major limiting factor for longer wavelengths. For silica glass, the primary infrared absorption band is due to the Si-O bond vibrational resonance around 9.1 µm. (Senior, 3rd/e, p. 85)

*   **Extrinsic Absorption:**
    *   **Impurity Absorption:** This is the most significant type of absorption loss in practical optical fibers. Transition metal ions (like iron, copper, nickel) and hydroxyl (OH-) ions present as impurities in the glass can absorb light at specific wavelengths.
        *   **Hydroxyl (OH-) Ion Absorption:** Particularly problematic for communication fibers. Absorption peaks occur around 0.95 µm, 1.24 µm, and most importantly, **1.38 µm**. To minimize OH- absorption, fibers are fabricated in dry environments. (Palais, 5th/e, p. 36)
        *   **Transition Metal Ion Absorption:** For example, iron can cause absorption in the visible spectrum.

**Example:** In the early days of optical fiber development, water impurities (leading to OH- ions) caused significant losses, limiting communication distances. Advancements in manufacturing processes led to ultra-pure silica glass, drastically reducing these losses.

**Important Point to Remember:** The "water peak" at 1.38 µm is a critical factor in fiber selection and system design. Modern fibers are manufactured to minimize OH- content.

---

### 4. Scattering Losses

**Definition:** Scattering is the phenomenon where optical energy is redirected from its original forward path into different directions. While some scattering is unavoidable, it becomes a loss mechanism when the scattered light is not captured by the fiber's core or escapes the fiber.

**Types of Scattering:**

*   **Linear Scattering:** Scattering that is proportional to the intensity of the incident light.
    *   **Rayleigh Scattering:**
        *   **Description:** This is the dominant scattering mechanism in optical fibers, responsible for the transparency of silica glass in the near-infrared region (1.3-1.6 µm). It is caused by **microscopic density and refractive index fluctuations** within the glass material. These fluctuations are inherent to the amorphous structure of glass and are frozen into the material during the manufacturing process. The size of these fluctuations is much smaller than the wavelength of light. (Keiser, 5th/e, p. 42)
        *   **Wavelength Dependence:** Rayleigh scattering is **strongly dependent on wavelength**, varying as $\lambda^{-4}$. This means that shorter wavelengths experience significantly higher scattering losses than longer wavelengths.
        *   **Importance:** This $\lambda^{-4}$ dependence explains why optical communication systems operate in the infrared region (e.g., 1.3 µm and 1.55 µm) where attenuation is minimized. At 1.55 µm, Rayleigh scattering is considerably lower than at 0.85 µm. (Senior, 3rd/e, p. 86)
        *   **Example:** The inherent transparency of silica at wavelengths like 1.3 µm and 1.55 µm is a direct consequence of low Rayleigh scattering at these wavelengths.

    *   **Mie Scattering:**
        *   **Description:** This type of scattering occurs due to **larger imperfections or inhomogeneities** in the fiber, such as variations in the core-cladding refractive index profile, dust particles, or bubbles. The size of these imperfections is comparable to or larger than the wavelength of light. (Palais, 5th/e, p. 37)
        *   **Wavelength Dependence:** Mie scattering is **less dependent on wavelength** compared to Rayleigh scattering, and it tends to scatter light more in the forward direction.
        *   **Importance:** Mie scattering is generally undesirable and is minimized through careful fiber manufacturing and handling. It contributes to signal loss by redirecting light out of the fiber core.

*   **Non-linear Scattering:** Scattering that is proportional to the **square or higher power** of the incident light intensity. These effects become significant at very high optical power levels, typically encountered in modern high-speed and long-haul optical communication systems using powerful lasers.

    *   **Stimulated Brillouin Scattering (SBS):**
        *   **Description:** Occurs when a high-intensity optical signal (pump signal) generates acoustic waves (phonons) in the fiber. These acoustic waves then scatter the pump light back towards the source, with a frequency shift equal to the acoustic wave frequency. This is a **backscattering** phenomenon. (Agrawal, 4th Ed, Ch. 8)
        *   **Threshold:** SBS has a power threshold above which it becomes significant. Once this threshold is exceeded, a large portion of the optical power is reflected back, leading to significant signal loss and potential damage to the laser source.
        *   **Wavelength Dependence:** SBS is more pronounced at longer wavelengths.
        *   **Importance:** SBS limits the maximum optical power that can be launched into a fiber for single-channel transmission. It is a concern in systems using high-power lasers, especially in long-haul and dense wavelength-division multiplexing (DWDM) systems.

    *   **Stimulated Raman Scattering (SRS):**
        *   **Description:** Similar to SBS, SRS is an inelastic scattering process where high-intensity light interacts with molecular vibrations in the fiber. The incident photon transfers some of its energy to a molecular vibration, creating a lower-frequency (longer wavelength) photon. This phenomenon can transfer power from a shorter wavelength channel to a longer wavelength channel in a multiplexed system. (Keiser, 5th/e, p. 45)
        *   **Wavelength Dependence:** SRS can occur over a range of wavelengths, but it is characterized by specific spectral bands related to the molecular structure of the fiber material.
        *   **Importance:** SRS is a major limiting factor in **Wavelength Division Multiplexing (WDM)** systems. If channels with shorter wavelengths have higher power than channels with longer wavelengths, SRS can transfer power from the shorter to the longer wavelengths, leading to power imbalance among channels and potential signal degradation.

**Important Point to Remember:** Non-linear scattering effects (SBS and SRS) are intensity-dependent and become critical at high optical powers, impacting system performance in high-capacity systems.

---

### 5. Bend Losses

**Definition:** Bend losses occur when an optical fiber is bent, causing some of the guided light to escape from the core into the cladding and radiate away. There are two types of bends: macroscopic bends (larger radius) and microscopic bends (smaller, random fluctuations).

*   **Macrobend Losses:**
    *   **Description:** Caused by the physical bending of the fiber with a radius of curvature larger than the fiber's diameter. When a fiber is bent, the optical path length for light traveling along the outer side of the bend is longer than the path length along the inner side. To maintain phase coherence, the light on the outer side must experience a higher propagation velocity or a lower refractive index, which can cause it to escape the core. (Senior, 3rd/e, p. 88)
    *   **Wavelength Dependence:** Macrobend losses are **more significant at longer wavelengths**. This is because longer wavelengths are more susceptible to escaping the guiding structure when the bend radius is not sufficiently large.
    *   **Radius of Curvature:** The loss increases sharply as the radius of curvature of the bend decreases. Manufacturers specify minimum bend radii to avoid significant losses.
    *   **Importance:** Proper installation and handling of optical fibers are crucial to avoid excessive bending. Cable management and connectorization design must consider bend radii.

*   **Microbend Losses:**
    *   **Description:** Caused by small, random, and localized distortions of the fiber axis. These are essentially very small bends. They can arise from:
        *   **Manufacturing imperfections:** Inhomogeneities in the fiber coating or cabling process.
        *   **External forces:** Pressure or stress applied during installation or operation (e.g., tightly wound cables, rough handling).
    *   **Mechanism:** Microbends cause coupling of the guided modes into higher-order modes or directly into radiation modes, leading to loss.
    *   **Importance:** Microbending losses are often introduced during the cabling and installation process and are difficult to predict and control precisely. Careful fiber coating and cabling techniques are employed to minimize these losses.

**Example:** A technician carelessly pulling an optical fiber cable through a sharp corner or tightly wrapping a fiber optic patch cord around a small object can induce significant bend losses, reducing the signal strength at the receiving end.

**Important Point to Remember:** Macrobending losses are wavelength-dependent and increase as the bend radius decreases. Microbending losses are caused by small, random perturbations.

---

### 6. Total Attenuation

The total attenuation in an optical fiber is the sum of losses due to all these mechanisms:
$$ \text{Total Attenuation} = \text{Absorption Losses} + \text{Scattering Losses} + \text{Bend Losses} $$

**Loss Budget:** In a practical optical communication system, a "loss budget" is calculated, which accounts for the expected attenuation from the fiber itself, connectors, splices, and any bends. This budget determines the maximum allowable link loss for a given transmitter power and receiver sensitivity.

---

### 7. Practice Questions and Answers

**Question 1:** What is the primary mechanism responsible for the intrinsic transparency of silica fibers in the near-infrared spectrum?
    a) Absorption
    b) Mie scattering
    c) Rayleigh scattering
    d) Stimulated Brillouin scattering

**Answer 1:** c) Rayleigh scattering. Rayleigh scattering, caused by microscopic density fluctuations, is inversely proportional to the fourth power of wavelength ($\lambda^{-4}$), making it minimal at longer wavelengths where silica is transparent.

**Question 2:** If the input power to a 10 km fiber optic cable is 1 mW and the output power is 0.5 mW, what is the attenuation of the fiber in dB/km?
    a) 0.15 dB/km
    b) 0.30 dB/km
    c) 1.0 dB/km
    d) 1.5 dB/km

**Answer 2:**
Let $P_{in} = 1 \text{ mW}$ and $P_{out} = 0.5 \text{ mW}$. Length $L = 10 \text{ km}$.
Attenuation $(\alpha) = \frac{10}{L} \log_{10} \left( \frac{P_{in}}{P_{out}} \right)$
$\alpha = \frac{10}{10} \log_{10} \left( \frac{1}{0.5} \right)$
$\alpha = 1 \times \log_{10} (2)$
$\alpha = 1 \times 0.30103$
$\alpha \approx 0.301 \text{ dB/km}$
So, the answer is **b) 0.30 dB/km**.

**Question 3:** Which type of scattering is caused by imperfections comparable to or larger than the wavelength of light?
    a) Rayleigh scattering
    b) Mie scattering
    c) Non-linear scattering
    d) Absorption

**Answer 3:** b) Mie scattering. Mie scattering arises from macroscopic imperfections in the fiber or its environment.

**Question 4:** Explain why longer wavelengths (like 1.55 µm) are generally preferred for long-haul optical communication compared to shorter wavelengths (like 0.85 µm). Mention at least two reasons related to transmission characteristics.

**Answer 4:**
Longer wavelengths are preferred for long-haul optical communication for the following reasons related to transmission characteristics:
1.  **Lower Rayleigh Scattering:** Rayleigh scattering varies as $\lambda^{-4}$. At 1.55 µm, Rayleigh scattering is significantly lower than at 0.85 µm, resulting in lower signal attenuation due to scattering. This allows signals to travel much further.
2.  **Reduced Absorption:** While OH- absorption peaks exist, ultra-pure silica fibers exhibit minimal intrinsic absorption in the 1.3-1.6 µm window. In particular, the region around 1.55 µm is chosen because it has a minimum in the combined absorption from impurities (like OH-) and scattering losses.

**Question 5:** What are the two main types of non-linear scattering phenomena that limit the power handling capacity of optical fibers?
    a) Absorption and Mie scattering
    b) Rayleigh scattering and absorption
    c) Stimulated Brillouin Scattering (SBS) and Stimulated Raman Scattering (SRS)
    d) Macrobending and microbending

**Answer 5:** c) Stimulated Brillouin Scattering (SBS) and Stimulated Raman Scattering (SRS). These effects become significant at high optical power levels.

---

### 8. Summary of Important Points

*   **Attenuation:** The overall reduction in optical power. Measured in dB/km.
*   **Absorption:** Conversion of optical energy to heat, caused by material impurities (extrinsic, e.g., OH-) or intrinsic material properties (UV/IR absorption).
*   **Scattering:** Redirection of light.
    *   **Rayleigh Scattering:** Inherent to glass, proportional to $\lambda^{-4}$, dominant in clean fibers, minimal at longer wavelengths.
    *   **Mie Scattering:** Caused by larger imperfections, less wavelength-dependent, minimized by good manufacturing.
*   **Non-linear Scattering:** Intensity-dependent.
    *   **SBS:** Backscattering, power threshold, limits single-channel power.
    *   **SRS:** Power transfer between channels in WDM systems, affects power balance.
*   **Bend Losses:**
    *   **Macrobending:** Caused by large-radius bends, increases with decreasing bend radius, worse at longer wavelengths.
    *   **Microbending:** Caused by small, random distortions, introduced by cabling/stress.
*   **Wavelength Choice:** 1.3 µm and 1.55 µm windows are chosen to minimize combined absorption and scattering losses. 1.55 µm generally has the lowest total attenuation due to lower Rayleigh scattering.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 9. References

*   Keiser, Gerd. *Optical Fiber Communications*. McGraw Hill, 5th/e, 2021. (Chapter 2: Attenuation and Dispersion)
*   Senior, John M. *Optical Fiber Communication: Principles and Practice*. Pearson Education, 3rd/e, 2014. (Chapter 4: Signal Losses in Optical Fibers)
*   Palais, Joseph C. *Fibre Optic Communications*. Pearson Education, 5th/e, 2013. (Chapter 3: Attenuation and Distortion)
*   Agrawal, G P. *Fibre Optic Communications Systems*. WILEY, 4th Ed. (Chapter 2: Attenuation and Dispersion)
*   Mishra and Ugale. *Fibre optic Communication: Systems and Components*. Wiley, 2019. (Chapter 2: Optical Fibers – Structure and Properties)

---