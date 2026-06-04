---
title: "Acoustics, fundamentals: Intensity of sound- Watts/m2- Bel- Decibel scales- dBA-Phon. Addition of sound levels."
subject: "FUNDAMENTALS OF BUILDING PLANNING"
module: "Module 2: Acoustics, fundamentals: Intensity of sound"
branch: "Civil Engineering"
semester: 8
topicId: "689f15d156b5e963ba811ad6"
status: "completed"
scrapedAt: "2026-05-20T19:03:01.889Z"
---
# Fundamentals of Building Planning: Module 2 - Acoustics, Fundamentals: Intensity of Sound

This module delves into the fundamental concepts of sound intensity, its measurement, and how we perceive and quantify loudness in the context of building planning. Understanding these principles is crucial for designing spaces that are acoustically comfortable and functional.

---

## 1. Introduction to Sound Intensity

Sound is a form of energy that travels as mechanical waves through a medium (like air, water, or solids). Sound intensity is a measure of the **power** of this sound wave per unit area.

**Key Concepts:**

*   **Sound Wave:** A disturbance that propagates through a medium, characterized by oscillations in pressure and displacement of particles.
*   **Power:** The rate at which energy is transferred or converted. In acoustics, it's the energy radiated by a sound source per unit time.
*   **Area:** The surface over which the sound energy is distributed.

---

## 2. Measuring Sound Intensity: Watts per Square Meter (W/m²)

The most fundamental unit for sound intensity is **Watts per square meter (W/m²)**. This unit directly quantifies the sound power passing through a unit area perpendicular to the direction of wave propagation.

**Definition:**

*   **Sound Intensity (I):** The average rate of sound energy flow per unit area in a direction perpendicular to that area.

**Formula:**

$I = P/A$

Where:
*   $I$ = Sound Intensity (W/m²)
*   $P$ = Sound Power (Watts, W)
*   $A$ = Area (m²)

**Examples:**

*   A very quiet room might have a sound intensity of $10^{-12}$ W/m².
*   A rock concert could have sound intensities exceeding $1$ W/m².

**Important Points to Remember:**

*   Sound intensity decreases as the distance from the sound source increases. For a point source radiating uniformly in all directions (spherical spreading), the intensity is inversely proportional to the square of the distance from the source ($I \propto 1/r^2$).

---

## 3. The Need for a Logarithmic Scale: The Bel

Human perception of sound intensity is not linear. A doubling of sound power does not sound twice as loud. Instead, we perceive loudness on a logarithmic scale. The **Bel** was the first unit developed to represent this logarithmic relationship.

**Definition:**

*   **Bel (B):** A unit used to express the ratio of two values of a physical quantity, on a logarithmic scale. It is defined as the base-10 logarithm of the ratio.

**Formula:**

$L_{\text{Bels}} = \log_{10} (I/I_0)$

Where:
*   $L_{\text{Bels}}$ = Sound intensity level in Bels
*   $I$ = Measured sound intensity (W/m²)
*   $I_0$ = Reference sound intensity (commonly the threshold of human hearing, $10^{-12}$ W/m²)

**Example:**

If a sound intensity is $10^{-11}$ W/m²:
$L_{\text{Bels}} = \log_{10} (10^{-11} / 10^{-12}) = \log_{10} (10^1) = 1$ Bel

**Disadvantage:**

The Bel scale is too large for practical everyday use. A small change in sound intensity results in a large change in Bels.

---

## 4. The Practical Unit: The Decibel (dB)

To overcome the large scale of the Bel, the **Decibel (dB)** scale was introduced. A decibel is one-tenth of a Bel.

**Definition:**

*   **Decibel (dB):** A unit of measurement for sound pressure or sound intensity levels, defined as ten times the base-10 logarithm of the ratio of two values.

**Formula for Sound Intensity Level (SIL):**

$L_I = 10 \log_{10} (I/I_0)$

Where:
*   $L_I$ = Sound Intensity Level (dB)
*   $I$ = Measured sound intensity (W/m²)
*   $I_0$ = Reference sound intensity ($10^{-12}$ W/m²)

**Relationship between Bel and Decibel:**

$1 \text{ Bel} = 10 \text{ dB}$

**Key Insights and Examples:**

*   **Doubling of Sound Intensity:** An increase in sound intensity by a factor of 10 corresponds to an increase of 10 dB in sound intensity level.
    *   If $I = 10 \times I_0$, $L_I = 10 \log_{10} (10 I_0 / I_0) = 10 \log_{10}(10) = 10 \text{ dB}$.
*   **Increase by a Factor of 2:** An increase in sound intensity by a factor of 2 corresponds to approximately a 3 dB increase in sound intensity level.
    *   If $I = 2 \times I_0$, $L_I = 10 \log_{10} (2 I_0 / I_0) = 10 \log_{10}(2) \approx 10 \times 0.301 \approx 3 \text{ dB}$.
*   **Perceived Loudness:** A 10 dB increase is generally perceived as roughly doubling the loudness.
*   **Reference Point:** The threshold of human hearing is approximately 0 dB.
*   **Pain Threshold:** Sounds above 120-130 dB can cause pain and permanent hearing damage.

| Sound Intensity (W/m²) | Sound Intensity Level (dB) | Example                               |
| :--------------------- | :--------------------------- | :------------------------------------ |
| $10^{-12}$             | 0                            | Threshold of hearing                  |
| $10^{-11}$             | 10                           | Very quiet room, rustling leaves      |
| $10^{-10}$             | 20                           | Whisper (1 meter away)                |
| $10^{-9}$              | 30                           | Library, quiet rural area             |
| $10^{-8}$              | 40                           | Normal conversation (1 meter away)    |
| $10^{-7}$              | 50                           | Office environment                    |
| $10^{-6}$              | 60                           | Dishwasher, moderate rainfall         |
| $10^{-5}$              | 70                           | Vacuum cleaner, busy street           |
| $10^{-4}$              | 80                           | Heavy traffic, garbage disposal       |
| $10^{-3}$              | 90                           | Motorcycle, power lawn mower          |
| $10^{-2}$              | 100                          | Snowmobile, subway train (underground)|
| $10^{-1}$              | 110                          | Rock concert, heavy machinery         |
| $1$                    | 120                          | Thunderclap, jet engine (at takeoff)  |
| $10$                   | 130                          | Pain threshold                        |

---

## 5. Sound Pressure Level (SPL)

While intensity is a physical measure of power per area, in practice, sound is often measured in terms of **sound pressure**. Sound pressure is the variation in atmospheric pressure caused by the sound wave. For plane or spherical waves in air, sound intensity is directly proportional to the square of the sound pressure.

**Definition:**

*   **Sound Pressure (p):** The difference between the instantaneous total pressure and the average ambient pressure at a point in the medium, caused by a sound wave. Measured in Pascals (Pa).

**Formula for Sound Pressure Level (SPL):**

$L_p = 20 \log_{10} (p/p_0)$

Where:
*   $L_p$ = Sound Pressure Level (dB)
*   $p$ = Measured sound pressure (Pa)
*   $p_0$ = Reference sound pressure ($20 \times 10^{-6}$ Pa, which is approximately the threshold of human hearing for pressure)

**Important Note:**

Although the reference values ($I_0$ and $p_0$) are different, the resulting decibel values for common sound sources are often very similar. For most practical building acoustics, we refer to sound levels in dB, implying Sound Pressure Level unless otherwise specified.

---

## 6. Frequency Weighting: The Decibel A-weighting (dBA)

Human hearing sensitivity is not uniform across all frequencies. We are most sensitive to sounds in the mid-frequency range (around 1 kHz to 4 kHz) and less sensitive to very low and very high frequencies. **A-weighting** is a frequency filter applied to sound measurements to approximate human hearing perception.

**Definition:**

*   **Decibel A-weighting (dBA):** A unit of sound level that accounts for the human ear's sensitivity to different frequencies. It filters out low and high frequencies that humans are less sensitive to.

**How it works:**

The A-weighting curve essentially attenuates (reduces) the measured sound pressure level at low and high frequencies, mimicking the Fletcher-Munson curves (equal-loudness contours).

**Examples:**

*   A quiet office might be rated at 40-50 dBA.
*   Traffic noise might be 70-80 dBA.
*   A concert might peak at 110-120 dBA.

**Why is it important in Building Planning?**

*   **Regulatory Standards:** Many building codes and environmental regulations specify noise limits in dBA to protect occupants from noise pollution.
*   **Subjective Loudness:** dBA values provide a better indication of how loud a sound will be perceived by humans compared to unweighted dB measurements.

**Important Points to Remember:**

*   dBA is the most common unit used for environmental noise and noise control in buildings.
*   A sound source with the same intensity at all frequencies (a "flat" spectrum) will be perceived as louder at mid-frequencies and quieter at extreme frequencies when measured in dBA.

---

## 7. Perceived Loudness: The Phon Scale

The **Phon** scale is another unit used to measure perceived loudness, directly relating to the **subjective** experience of loudness. It is defined such that a pure tone of 1 kHz at a sound pressure level of X dB has a loudness of X Phons.

**Definition:**

*   **Phon (Ph):** A unit of perceived loudness. A sound with a loudness level of X Phons is perceived to be as loud as a 1 kHz tone with a sound pressure level of X dB.

**Key Concepts:**

*   **Equal-Loudness Contours (Fletcher-Munson Curves):** These curves illustrate how the perceived loudness of a sound varies with its frequency and sound pressure level. At low sound pressure levels, humans are less sensitive to low and high frequencies. As the sound pressure level increases, the sensitivity across frequencies becomes more uniform.
*   **Loudness Level:** The loudness level of a sound, in Phons, is the sound pressure level, in decibels, of a 1 kHz pure tone that is judged by listeners to be equally loud.

**Relationship to dBA:**

While dBA is a physical measurement with a filter, Phons are a perceptual measure. For pure tones at 1 kHz, the Phon level is numerically equal to the dB SPL. For other frequencies and complex sounds, the Phon level can differ significantly from the dBA value.

**Example:**

A sound measured at 60 dB SPL at 100 Hz might be perceived as having a loudness level of around 40 Phons, whereas a 60 dB SPL sound at 1 kHz would be 60 Phons. This illustrates the reduced sensitivity at lower frequencies.

**Relevance in Building Planning:**

While less commonly used in direct design specifications than dBA, understanding Phons helps in appreciating why certain sounds might be more annoying or intrusive than others, even if their dBA levels are similar.

---

## 8. Addition of Sound Levels

This is a crucial aspect of building acoustics, as noise in a space is often a combination of multiple sources or the same source at different times/locations. **You cannot simply add dB values together.** Because the dB scale is logarithmic, we need to convert back to intensity or pressure, add those values, and then convert back to dB.

**General Principle:**

To add sound levels, you must first convert them to their linear (intensity or pressure) equivalents, sum these linear values, and then convert the result back to decibels.

**Method 1: Using Intensity**

Let's say you have two sound sources with intensity levels $L_{I1}$ and $L_{I2}$:

1.  **Convert dB to Intensity:**
    $I_1 = I_0 \times 10^{(L_{I1}/10)}$
    $I_2 = I_0 \times 10^{(L_{I2}/10)}$

2.  **Add Intensities:**
    $I_{total} = I_1 + I_2$

3.  **Convert back to dB:**
    $L_{I, total} = 10 \log_{10} (I_{total}/I_0)$

**Method 2: Using Pressure (More Common in Practice with SPL)**

Let's say you have two sound sources with sound pressure levels $L_{p1}$ and $L_{p2}$:

1.  **Convert dB to Pressure:**
    $p_1 = p_0 \times 10^{(L_{p1}/20)}$
    $p_2 = p_0 \times 10^{(L_{p2}/20)}$

2.  **Add Pressures (Square of pressure is proportional to intensity):**
    $p_{total}^2 = p_1^2 + p_2^2$
    So, $p_{total} = \sqrt{p_1^2 + p_2^2}$

3.  **Convert back to dB:**
    $L_{p, total} = 20 \log_{10} (p_{total}/p_0)$

**Simplified Approach for Equal Sound Sources:**

If two identical sound sources are present (i.e., they produce the same sound level), the total sound level increases by approximately **3 dB**.

*   If $L_{p1} = L_{p2} = L_p$, then $L_{p, total} \approx L_p + 3 \text{ dB}$.

**Example for Addition:**

Suppose you have two identical air conditioning units, each producing a sound level of 70 dBA. What is the combined sound level?

Using the simplified rule:
Combined Level = 70 dBA + 3 dB = 73 dBA

**Example for Different Sound Levels:**

Suppose you have a street noise at 75 dBA and an office machine at 65 dBA. What is the combined sound level?

1.  **Convert to Intensity (or pressure squared):**
    Let's use intensity, with $I_0 = 10^{-12}$ W/m².
    $I_1 = 10^{-12} \times 10^{(75/10)} = 10^{-12} \times 10^{7.5} = 10^{-4.5}$ W/m²
    $I_2 = 10^{-12} \times 10^{(65/10)} = 10^{-12} \times 10^{6.5} = 10^{-5.5}$ W/m²

2.  **Add Intensities:**
    $I_{total} = 10^{-4.5} + 10^{-5.5}$
    $I_{total} = 10^{-4.5} + 0.1 \times 10^{-4.5}$
    $I_{total} = 1.1 \times 10^{-4.5}$ W/m²

3.  **Convert back to dB:**
    $L_{total} = 10 \log_{10} (1.1 \times 10^{-4.5} / 10^{-12})$
    $L_{total} = 10 \log_{10} (1.1 \times 10^{7.5})$
    $L_{total} = 10 (\log_{10}(1.1) + \log_{10}(10^{7.5}))$
    $L_{total} = 10 (0.041 + 7.5)$
    $L_{total} = 10 \times 7.541 \approx 75.4 \text{ dBA}$

**Key Observation:** When adding sound levels, the dominant source (the higher dB value) contributes most significantly. The difference between the two levels matters.

*   If the difference is $\ge$ 10 dB, the lower source has a negligible effect on the total level (adding 1 dB or less).
*   If the difference is 3 dB, the total level increases by 3 dB.
*   If the difference is 0 dB (identical sources), the total level increases by 3 dB.

**Rule of thumb for adding levels:**

*   **Difference 0 dB:** Add 3 dB
*   **Difference 1-2 dB:** Add 2 dB
*   **Difference 3-5 dB:** Add 1 dB
*   **Difference $\ge$ 6 dB:** Add 0 dB (negligible impact)

---

## Practice Questions/Exercises

1.  **Calculate the sound intensity level in dB for a sound intensity of $5 \times 10^{-5}$ W/m².** (Assume $I_0 = 10^{-12}$ W/m²)
2.  **If a sound source doubles its sound intensity, by how many decibels does its sound intensity level increase?**
3.  **A quiet library is measured to have a sound pressure level of 45 dBA. What is the corresponding sound pressure in Pascals?** (Assume $p_0 = 20 \times 10^{-6}$ Pa)
4.  **Two identical air conditioning units are operating, each producing 70 dBA. What is the total sound level produced by both units combined?**
5.  **A ventilation fan produces a sound level of 60 dBA, and a printer produces a sound level of 55 dBA in the same room. Calculate the combined sound level.**

---

## Answers to Practice Questions

1.  **Calculation:**
    $L_I = 10 \log_{10} (I/I_0)$
    $L_I = 10 \log_{10} (5 \times 10^{-5} / 10^{-12})$
    $L_I = 10 \log_{10} (5 \times 10^7)$
    $L_I = 10 (\log_{10}(5) + \log_{10}(10^7))$
    $L_I = 10 (0.699 + 7)$
    $L_I = 10 \times 7.699 \approx \mathbf{77 \text{ dB}}$

2.  **Increase in dB for Doubled Intensity:**
    Let the initial intensity be $I$. The initial level is $10 \log_{10}(I/I_0)$.
    The new intensity is $2I$. The new level is $10 \log_{10}(2I/I_0)$.
    Difference = $10 \log_{10}(2I/I_0) - 10 \log_{10}(I/I_0)$
    Difference = $10 [\log_{10}(2I/I_0) - \log_{10}(I/I_0)]$
    Difference = $10 \log_{10} [(2I/I_0) / (I/I_0)]$
    Difference = $10 \log_{10} (2) \approx 10 \times 0.301 \approx \mathbf{3 \text{ dB}}$

3.  **Sound Pressure Calculation:**
    $L_p = 20 \log_{10} (p/p_0)$
    $45 = 20 \log_{10} (p / (20 \times 10^{-6}))$
    $45/20 = \log_{10} (p / (20 \times 10^{-6}))$
    $2.25 = \log_{10} (p / (20 \times 10^{-6}))$
    $10^{2.25} = p / (20 \times 10^{-6})$
    $177.8 \approx p / (20 \times 10^{-6})$
    $p \approx 177.8 \times 20 \times 10^{-6}$
    $p \approx 3556 \times 10^{-6} \text{ Pa} \approx \mathbf{3.56 \times 10^{-3} \text{ Pa}}$

4.  **Combined Sound Level (Identical Sources):**
    Two identical sources at 70 dBA combine to: $70 \text{ dBA} + 3 \text{ dB} = \mathbf{73 \text{ dBA}}$

5.  **Combined Sound Level (Different Sources):**
    $L_1 = 60$ dBA, $L_2 = 55$ dBA.
    Difference = $60 - 55 = 5$ dB.
    According to the rule of thumb, when the difference is 5 dB, we add 1 dB.
    Combined Level = $60 \text{ dBA} + 1 \text{ dB} = \mathbf{61 \text{ dBA}}$

    *(Alternatively, using calculations)*
    $I_1 = 10^{-12} \times 10^{(60/10)} = 10^{-6}$ W/m²
    $I_2 = 10^{-12} \times 10^{(55/10)} = 10^{-6.5}$ W/m²
    $I_{total} = 10^{-6} + 10^{-6.5} = 10^{-6} + 0.316 \times 10^{-6} = 1.316 \times 10^{-6}$ W/m²
    $L_{total} = 10 \log_{10} (1.316 \times 10^{-6} / 10^{-12})$
    $L_{total} = 10 \log_{10} (1.316 \times 10^6)$
    $L_{total} = 10 (\log_{10}(1.316) + \log_{10}(10^6))$
    $L_{total} = 10 (0.119 + 6) = 10 \times 6.119 \approx 61.2 \text{ dBA}$

---

## Summary of Key Takeaways

*   **Sound Intensity (W/m²):** Physical measure of sound power per unit area.
*   **Decibel (dB):** Logarithmic scale for sound intensity or pressure level, providing a more manageable range.
*   **$I_0 = 10^{-12}$ W/m² & $p_0 = 20 \times 10^{-6}$ Pa:** Standard reference values for dB calculations.
*   **Doubling Intensity = +10 dB; Doubling Perceived Loudness ≈ +10 dB.**
*   **dBA:** Frequency-weighted dB that better approximates human hearing perception. Crucial for building regulations.
*   **Phon:** Perceptual measure of loudness, based on equal-loudness contours.
*   **Adding dB values is incorrect.** Convert to linear values, add, then convert back to dB.
*   **Two identical sources add 3 dB.**
*   **When adding disparate sound levels, the dominant source has the most significant impact.**

---
This concludes Module 2 on the Fundamentals of Sound Intensity. Understanding these concepts is vital for assessing noise sources and designing acoustically suitable environments.
