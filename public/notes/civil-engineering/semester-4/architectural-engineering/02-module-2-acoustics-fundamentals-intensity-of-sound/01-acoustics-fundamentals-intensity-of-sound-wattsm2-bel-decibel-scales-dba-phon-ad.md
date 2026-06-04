---
title: "Acoustics, fundamentals: Intensity of sound- Watts/m2- Bel- Decibel scales- dBA-Phon. Addition of sound levels."
subject: "ARCHITECTURAL ENGINEERING"
module: "Module 2: Acoustics, fundamentals: Intensity of sound"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810bbc"
status: "completed"
scrapedAt: "2026-05-20T18:42:55.055Z"
---
# Architectural Engineering: Module 2 - Acoustics Fundamentals: Intensity of Sound

This module delves into the fundamental concepts of sound intensity, its measurement, and how different scales are used to describe and understand sound levels in architectural contexts.

## 1. Understanding Sound Intensity (Watts/m²)

### 1.1 What is Sound Intensity?

*   **Definition:** Sound intensity (symbolized by *I*) is the average rate at which sound energy is transferred per unit area perpendicular to the direction of propagation. It's essentially the **power per unit area**.
*   **Units:** Measured in **Watts per square meter (W/m²)**. This tells us how much sound power is passing through a specific area.
*   **Physical Basis:** Sound travels as a wave, carrying energy. Intensity quantifies how concentrated this energy is in space.
*   **Relationship to Sound Pressure:** While intensity is the more fundamental physical quantity, sound pressure (measured in Pascals) is what we directly perceive and what many acoustic instruments measure. They are related, but not identical. For plane waves in a free field, intensity is proportional to the square of the sound pressure.

### 1.2 Factors Affecting Sound Intensity

*   **Sound Power (W):** The total energy radiated by a source per unit time. A louder source produces higher intensity.
*   **Distance from the Source:** Intensity decreases as the distance from the source increases due to the spreading of sound energy.
    *   **Inverse Square Law:** For a point source radiating uniformly in all directions (spherical spreading), intensity is inversely proportional to the square of the distance (*r*) from the source:
        $I \propto \frac{1}{r^2}$
        If you double the distance, the intensity drops to one-fourth. If you triple the distance, it drops to one-ninth.
*   **Room Acoustics (Reflection and Absorption):** In enclosed spaces, sound waves reflect off surfaces. This can increase the perceived intensity in some areas (constructive interference) or decrease it in others (destructive interference). Absorption reduces the overall intensity by converting sound energy into heat.

### 1.3 Examples of Sound Intensity

*   **Whisper (3 meters):** Approximately $1 \times 10^{-11}$ W/m²
*   **Conversation (1 meter):** Approximately $1 \times 10^{-6}$ W/m²
*   **Busy Street (1 meter):** Approximately $1 \times 10^{-3}$ W/m²
*   **Threshold of Pain:** Approximately 1 W/m²

**Key Point:** The range of sound intensities we can perceive is vast, spanning many orders of magnitude. This makes direct use of Watts/m² inconvenient for practical acoustic descriptions.

## 2. The Bel and Decibel (dB) Scales

### 2.1 Why Logarithmic Scales?

*   **Vast Range:** As seen above, sound intensity varies enormously. A linear scale would be unwieldy.
*   **Human Perception:** Our hearing system responds logarithmically. A doubling of perceived loudness doesn't correspond to a doubling of intensity, but rather an increase of about 10 times in intensity.
*   **Simplifies Calculations:** Logarithmic scales simplify calculations involving ratios and multiplications, especially when dealing with multiple sound sources or sound transmission through multiple media.

### 2.2 The Bel Scale (B)

*   **Definition:** The Bel scale is a logarithmic unit used to express the ratio of two quantities, typically power or intensity.
*   **Formula:**
    $Number\;of\;Bels = \log_{10} \left( \frac{I_1}{I_{ref}} \right)$
    Where:
    *   $I_1$ is the measured sound intensity.
    *   $I_{ref}$ is a reference intensity.
*   **Reference Intensity:** For sound intensity, the standard reference intensity is the threshold of hearing, approximately $1 \times 10^{-12}$ W/m².
*   **Limitation:** The Bel scale is rarely used in practice because its unit (Bels) is too large for most common sound levels.

### 2.3 The Decibel Scale (dB)

*   **Definition:** The Decibel (dB) is one-tenth of a Bel. It is the most commonly used unit in acoustics.
*   **Formula (for Intensity Level):**
    $Sound\;Intensity\;Level\;(L_I) = 10 \log_{10} \left( \frac{I}{I_{ref}} \right) \; dB$
    Where:
    *   $I$ is the measured sound intensity (W/m²).
    *   $I_{ref}$ is the reference intensity, $1 \times 10^{-12}$ W/m².

### 2.4 Key Concepts and Conversions

*   **+3 dB:** Represents a doubling of sound intensity (doubling of power).
    *   If $I_2 = 2 \times I_1$, then $L_{I2} = 10 \log_{10}(2I_1/I_{ref}) = 10 \log_{10}(2) + 10 \log_{10}(I_1/I_{ref}) \approx 3 + L_{I1}$.
*   **+10 dB:** Represents a tenfold increase in sound intensity (ten times the power).
    *   If $I_2 = 10 \times I_1$, then $L_{I2} = 10 \log_{10}(10I_1/I_{ref}) = 10 \log_{10}(10) + 10 \log_{10}(I_1/I_{ref}) = 10 + L_{I1}$.
*   **-3 dB:** Represents a halving of sound intensity.
*   **-10 dB:** Represents a tenfold decrease in sound intensity.
*   **0 dB:** Represents the reference intensity ($I = I_{ref} = 1 \times 10^{-12}$ W/m²). This is the approximate threshold of human hearing.

### 2.5 Sound Pressure Level (SPL)

*   **Relationship to Intensity:** For plane waves in a free field, intensity ($I$) is proportional to the square of the sound pressure ($p$):
    $I = \frac{p^2}{\rho c}$
    Where:
    *   $\rho$ is the density of the medium.
    *   $c$ is the speed of sound in the medium.
    *   $\rho c$ is the characteristic acoustic impedance of the medium (e.g., for air at room temperature, $\rho c \approx 415$ Rayls).
*   **Formula (for Sound Pressure Level, $L_p$):**
    $Sound\;Pressure\;Level\;(L_p) = 10 \log_{10} \left( \frac{p^2}{p_{ref}^2} \right) \; dB$
    This can be rewritten as:
    $L_p = 20 \log_{10} \left( \frac{p}{p_{ref}} \right) \; dB$
    Where:
    *   $p$ is the measured sound pressure (Pascals).
    *   $p_{ref}$ is the reference sound pressure, $20 \times 10^{-6}$ Pascals (Pa). This is the approximate threshold of human hearing for pure tones.
*   **Why 20 log?** Because intensity is proportional to $p^2$, and $\log(p^2) = 2 \log(p)$. The factor of 20 is used to maintain consistency with the 10 dB steps for a tenfold increase in intensity.

**Important Note:** In most architectural acoustics applications, when people refer to "decibels" (dB), they are implicitly referring to Sound Pressure Level (SPL), which is measured using a microphone.

## 3. The dBA Scale

### 3.1 Why Frequency Weighting?

*   **Human Hearing is Frequency Dependent:** Our ears are not equally sensitive to all frequencies. We are most sensitive to frequencies in the range of 1 kHz to 4 kHz (where human speech is concentrated) and less sensitive to very low and very high frequencies.
*   **Simulating Human Perception:** To measure sound levels in a way that better reflects how humans perceive loudness, frequency weighting curves are applied.

### 3.2 The A-Weighting Curve (dBA)

*   **Definition:** The **dBA scale** uses an **A-weighting filter**. This filter approximates the frequency response of the human ear at moderate sound levels.
*   **Characteristics of A-Weighting:**
    *   **Rolls off:** The filter attenuates (reduces) low-frequency and very high-frequency components of the sound.
    *   **Peak sensitivity:** It has peak sensitivity around 3-4 kHz.
    *   **Mimics loudness:** Sounds measured in dBA are generally considered to be more representative of perceived loudness than unweighted dB (which would typically be dB(Z) or zero-weighted).
*   **Application:** Commonly used for environmental noise measurements, occupational noise exposure, and general sound level assessments in buildings because it correlates well with human annoyance and perceived loudness.

### 3.3 Other Weighting Curves (Brief Mention)

*   **dBB:** Uses a B-weighting filter, less sensitive to low frequencies than A-weighting, but less common.
*   **dBC:** Uses a C-weighting filter, which is flatter and less attenuating at low frequencies than A-weighting. Used for measuring peak levels or when assessing noise with significant low-frequency content.
*   **dB(Z) or dB(Linear):** No weighting applied, measures the sound pressure level across the entire frequency spectrum.

**Key Point:** When you see "dBA" or "dB(A)", it specifically refers to the sound pressure level measured with an A-weighting filter applied.

## 4. The Phon Scale

### 4.1 What is Loudness Level?

*   **Subjective Perception:** Loudness is a subjective attribute of auditory sensation. It's not directly measurable with a physical instrument like intensity or pressure.
*   **Influences:** Loudness is influenced by both sound pressure level and frequency.

### 4.2 The Phon Scale (Phon)

*   **Definition:** The Phon scale is a unit used to measure **loudness level**. It quantifies the perceived loudness of a sound relative to a reference sound.
*   **Reference:** The reference sound is a 1 kHz pure tone.
*   **How it Works:** A sound with a loudness level of *X* Phons is perceived to be as loud as a 1 kHz pure tone with a sound pressure level of *X* dB.
*   **Relationship to dB:**
    *   A 1 kHz tone at 50 dB SPL has a loudness level of 50 Phons.
    *   A sound at a different frequency that is perceived to be *equally loud* as the 50 dB, 1 kHz tone is also assigned a loudness level of 50 Phons.
*   **Isoloudness Curves:** These curves plot the sound pressure level (in dB) required to produce a given loudness level (in Phons) across different frequencies. These curves show that:
    *   At low frequencies, higher sound pressure levels are needed to achieve the same perceived loudness as at 1 kHz.
    *   At high frequencies, sensitivity also decreases, requiring higher SPLs.
    *   The "equal loudness contour" for 40 Phons is often used as the basis for the A-weighting curve.

**Key Point:** Phons are a measure of **perceived loudness**, while decibels (dB) are a measure of physical sound pressure or intensity. The A-weighting curve (dBA) is designed to approximate loudness levels, but it's not a direct one-to-one mapping to Phons across all situations.

## 5. Addition of Sound Levels

### 5.1 The Challenge of Adding dB Levels

*   **Cannot Add Decibels Directly:** Sound levels in decibels (whether $L_p$ or $L_I$) are logarithmic. You cannot simply add dB values together to find the combined level of two sound sources.
    *   *Incorrect:* If Source A is 60 dB and Source B is 60 dB, the combined level is *not* 120 dB.
*   **Must Convert to Intensity or Pressure First:** To combine sound levels, you must convert them back to their linear forms (intensity or sound pressure), add those, and then convert back to decibels.

### 5.2 Method 1: Adding Sound Intensity Levels ($L_I$)

*   **Steps:**
    1.  Convert each sound intensity level ($L_{I1}, L_{I2}$, etc.) back to its linear intensity ($I_1, I_2$, etc.) using the formula:
        $I = I_{ref} \times 10^{(L_I / 10)}$
        Where $I_{ref} = 1 \times 10^{-12}$ W/m².
    2.  Add the individual intensities to find the total intensity:
        $I_{total} = I_1 + I_2 + ... + I_n$
    3.  Convert the total intensity back to a sound intensity level:
        $L_{I_{total}} = 10 \log_{10} \left( \frac{I_{total}}{I_{ref}} \right)$

### 5.3 Method 2: Adding Sound Pressure Levels ($L_p$)

*   **Steps:**
    1.  Convert each sound pressure level ($L_{p1}, L_{p2}$, etc.) back to its linear sound pressure ($p_1, p_2$, etc.) using the formula:
        $p = p_{ref} \times 10^{(L_p / 20)}$
        Where $p_{ref} = 20 \times 10^{-6}$ Pa.
    2.  Add the individual sound pressures to find the total sound pressure:
        $p_{total} = p_1 + p_2 + ... + p_n$
    3.  Convert the total sound pressure back to a sound pressure level:
        $L_{p_{total}} = 20 \log_{10} \left( \frac{p_{total}}{p_{ref}} \right)$

**Caveat:** Adding sound *pressures* linearly is only accurate when the sounds are coherent (i.e., have a fixed phase relationship) or if the pressures are measured at the same point in space and are uncorrelated. For uncorrelated sounds from multiple sources, it's more accurate to add intensities, as intensity is related to the average power of the sound wave. In practical acoustic measurements where sources are often uncorrelated, summing intensities is the more robust method. However, the pressure method is often taught for simplicity and works well for uncorrelated sources when the resulting pressure is essentially a sum of uncorrelated random variables.

### 5.4 Practical Approximation: Adding Two Sources

*   **Equal Levels:** If two identical sound sources contribute equally:
    *   If $L_1 = L_2 = L$, then $I_1 = I_2 = I$.
    *   $I_{total} = I + I = 2I$.
    *   $L_{total} = 10 \log_{10}(2I/I_{ref}) = 10 \log_{10}(2) + 10 \log_{10}(I/I_{ref}) \approx 3 + L$.
    *   **Rule of Thumb:** When adding two identical sound sources, the total level increases by approximately **3 dB**.
*   **Difference of 10 dB or More:** If the difference between two sound levels is 10 dB or more (e.g., $L_1$ and $L_2$ where $L_1 - L_2 \ge 10$ dB), the contribution of the quieter source is negligible, and the combined level is approximately equal to the level of the louder source.
    *   Example: 70 dB + 60 dB $\approx$ 70 dB.
*   **General Approximations:** A table of approximations exists for adding two sound levels:
    | Difference ($L_1 - L_2$) | Add to Louder Level ($L_1$) |
    | :----------------------- | :-------------------------- |
    | 0 dB                     | +3 dB                       |
    | 1 dB                     | +2.5 dB                     |
    | 2 dB                     | +2 dB                       |
    | 3 dB                     | +1.5 dB                     |
    | 4 dB                     | +1 dB                       |
    | 5 dB                     | +0.8 dB                     |
    | 6 dB                     | +0.7 dB                     |
    | 7 dB                     | +0.5 dB                     |
    | 8 dB                     | +0.4 dB                     |
    | 9 dB                     | +0.3 dB                     |
    | $\ge 10$ dB              | +0 dB                       |

## Practice Questions and Exercises

**Question 1:**
What is the unit of sound intensity, and what does it represent?

**Answer 1:**
The unit of sound intensity is Watts per square meter (W/m²). It represents the average rate at which sound energy is transferred per unit area perpendicular to the direction of propagation (i.e., sound power per unit area).

---

**Question 2:**
Calculate the sound intensity level in decibels for a sound intensity of $2.5 \times 10^{-5}$ W/m². Use the reference intensity $I_{ref} = 1 \times 10^{-12}$ W/m².

**Answer 2:**
$L_I = 10 \log_{10} \left( \frac{I}{I_{ref}} \right)$
$L_I = 10 \log_{10} \left( \frac{2.5 \times 10^{-5} \text{ W/m}^2}{1 \times 10^{-12} \text{ W/m}^2} \right)$
$L_I = 10 \log_{10} (2.5 \times 10^7)$
$L_I = 10 \times (\log_{10}(2.5) + \log_{10}(10^7))$
$L_I = 10 \times (0.398 + 7)$
$L_I = 10 \times 7.398$
$L_I \approx 74.0$ dB

---

**Question 3:**
If a sound source is emitting sound with an intensity of $1 \times 10^{-7}$ W/m² at a distance of 2 meters, what would its intensity be at a distance of 4 meters, assuming spherical spreading?

**Answer 3:**
Using the inverse square law: $I \propto \frac{1}{r^2}$
Let $I_1$ be the intensity at $r_1 = 2$ m, and $I_2$ be the intensity at $r_2 = 4$ m.
$\frac{I_2}{I_1} = \frac{r_1^2}{r_2^2}$
$I_2 = I_1 \times \left(\frac{r_1}{r_2}\right)^2$
$I_2 = (1 \times 10^{-7} \text{ W/m}^2) \times \left(\frac{2 \text{ m}}{4 \text{ m}}\right)^2$
$I_2 = (1 \times 10^{-7} \text{ W/m}^2) \times \left(\frac{1}{2}\right)^2$
$I_2 = (1 \times 10^{-7} \text{ W/m}^2) \times \frac{1}{4}$
$I_2 = 0.25 \times 10^{-7} \text{ W/m}^2 = 2.5 \times 10^{-8} \text{ W/m}^2$

---

**Question 4:**
Two identical sound sources are operating simultaneously. If each source produces a sound level of 70 dBA, what is the approximate combined sound level?

**Answer 4:**
When two identical sound sources are combined, the total sound level increases by approximately 3 dB.
Combined Level $\approx 70 \text{ dBA} + 3 \text{ dBA} = 73 \text{ dBA}$.

---

**Question 5:**
A sound has a measured sound pressure level of 80 dB. If this sound has significant low-frequency content, would its perceived loudness level be approximately equal to, greater than, or less than 80 Phons? Explain why.

**Answer 5:**
Its perceived loudness level would be **less than** 80 Phons.
Explanation: The A-weighting curve (which influences dBA and approximates perceived loudness) attenuates low frequencies. The Phon scale defines loudness relative to a 1 kHz tone. If a sound is dominated by low frequencies, its sound pressure level (in dB, unweighted or with a flatter weighting) will be higher than its perceived loudness level (in Phons) because our ears are less sensitive to low frequencies. Therefore, a sound measured at 80 dB that has significant low-frequency content will be perceived as less loud than a 1 kHz tone at 80 dB.

---

**Question 6:**
A sound system has two speakers. Speaker A produces 85 dB, and Speaker B produces 78 dB. What is the combined sound level, assuming uncorrelated sources? Use the approximation method.

**Answer 6:**
Difference = 85 dB - 78 dB = 7 dB.
Looking at the approximation table, a difference of 7 dB means we add approximately 0.5 dB to the louder level.
Combined Level $\approx 85 \text{ dB} + 0.5 \text{ dB} = 85.5 \text{ dB}$.

---

## Important Points to Remember

*   **Intensity (W/m²) vs. Decibels (dB):** Intensity is a physical measure of power per area. Decibels are a logarithmic scale that relates to intensity (or pressure) and human perception.
*   **Inverse Square Law:** Crucial for understanding how intensity decreases with distance in free space.
*   **dB vs. dBA:** dB (often implying dB SPL) refers to the sound pressure level, while dBA specifically uses an A-weighting filter to approximate human hearing perception.
*   **Phon:** A unit of perceived loudness level, defined relative to a 1 kHz tone. Isoloudness curves illustrate this.
*   **Adding Decibels:** Never add dB values directly. Convert to linear quantities (intensity or pressure), add, and then convert back to dB.
*   **+3 dB Rule:** Two identical sources add approximately 3 dB.
*   **10 dB Difference Rule:** If levels differ by 10 dB or more, the quieter source has negligible impact.
*   **Frequency Weighting:** Essential for understanding how our ears respond to sound, leading to scales like dBA.
