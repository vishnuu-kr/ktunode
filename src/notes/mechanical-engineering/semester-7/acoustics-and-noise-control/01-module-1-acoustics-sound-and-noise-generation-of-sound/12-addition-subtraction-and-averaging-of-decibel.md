---
title: "Addition, subtraction, and averaging of decibel"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 1: Acoustics, sound and noise, generation of sound"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463fdb"
status: "completed"
scrapedAt: "2026-05-20T18:09:30.675Z"
---
# ACOUSTICS AND NOISE CONTROL

## Module 1: Acoustics, Sound and Noise, Generation of Sound

### Topic: Addition, Subtraction, and Averaging of Decibels

---

### 1. Introduction to Decibels (dB)

*   **What is a Decibel?**
    *   The decibel (dB) is a logarithmic unit used to express the ratio of two values of a physical quantity, often related to power or intensity.
    *   It is a dimensionless unit, but it is commonly used with different reference values to represent various physical quantities like sound pressure level (SPL), sound intensity level, etc.
    *   **Why use Decibels?**
        *   **Wide Range of Sound Intensities:** Human hearing can perceive a vast range of sound intensities, from the faintest whisper to a jet engine. Decibels compress this wide range into a more manageable scale.
        *   **Perception of Loudness:** The human ear perceives loudness on a logarithmic scale, meaning that equal increments in decibels correspond to roughly equal perceived changes in loudness.
        *   **Simplifies Calculations:** In many acoustic calculations, decibels simplify complex multiplications and divisions into additions and subtractions, especially when dealing with ratios of powers or intensities.

*   **Key Formulas:**
    *   **Sound Pressure Level (SPL) in dB:**
        $L_p = 20 \log_{10} \left( \frac{p}{p_{ref}} \right)$
        where:
        *   $L_p$ is the Sound Pressure Level in decibels (dB).
        *   $p$ is the sound pressure in Pascals (Pa).
        *   $p_{ref}$ is the reference sound pressure, typically $20 \mu \text{Pa}$ (the threshold of human hearing at 1 kHz).

    *   **Sound Intensity Level in dB:**
        $L_I = 10 \log_{10} \left( \frac{I}{I_{ref}} \right)$
        where:
        *   $L_I$ is the Sound Intensity Level in decibels (dB).
        *   $I$ is the sound intensity in Watts per square meter ($\text{W/m}^2$).
        *   $I_{ref}$ is the reference sound intensity, typically $10^{-12} \text{ W/m}^2$.

    *   **Sound Power Level in dB:**
        $L_W = 10 \log_{10} \left( \frac{W}{W_{ref}} \right)$
        where:
        *   $L_W$ is the Sound Power Level in decibels (dB).
        *   $W$ is the sound power in Watts (W).
        *   $W_{ref}$ is the reference sound power, typically $10^{-12} \text{ W}$.

*   **Important Note:** The $20 \log_{10}$ factor for pressure-related quantities and the $10 \log_{10}$ factor for power/intensity-related quantities stem from the relationship between pressure and intensity ($I \propto p^2$).

---

### 2. Addition of Decibels

*   **The Challenge:** Decibels are logarithmic. You *cannot* simply add dB values together like linear quantities. For example, two identical sound sources each producing 80 dB will not result in a total of 160 dB.
*   **The Correct Approach: Convert back to linear scale, add, then convert back to dB.**
    1.  **Convert dB to the underlying quantity (pressure or intensity/power):**
        *   For pressure-related levels ($L_p$): $p = p_{ref} \times 10^{(L_p/20)}$
        *   For intensity/power-related levels ($L_I$, $L_W$): $Q = Q_{ref} \times 10^{(L_Q/10)}$ (where $Q$ can be intensity or power)

    2.  **Add the linear quantities.**

    3.  **Convert the sum back to decibels:**
        *   For pressure-related levels: $L_{p,total} = 20 \log_{10} \left( \frac{p_{total}}{p_{ref}} \right)$
        *   For intensity/power-related levels: $L_{Q,total} = 10 \log_{10} \left( \frac{Q_{total}}{Q_{ref}} \right)$

*   **Special Case: Adding Identical Sound Sources**
    *   If you have $N$ identical sound sources contributing equally to the sound field, and each source produces a level $L$:
        *   **For pressure-related levels:**
            $L_{p,total} = L_p + 20 \log_{10} (N)$
        *   **For intensity/power-related levels:**
            $L_{Q,total} = L_Q + 10 \log_{10} (N)$

    *   **Examples:**
        *   Adding two identical sources (N=2):
            *   Pressure: $L_{p,total} = L_p + 20 \log_{10}(2) \approx L_p + 6 \text{ dB}$
            *   Intensity/Power: $L_{Q,total} = L_Q + 10 \log_{10}(2) \approx L_Q + 3 \text{ dB}$
        *   Adding four identical sources (N=4):
            *   Pressure: $L_{p,total} = L_p + 20 \log_{10}(4) = L_p + 12 \text{ dB}$
            *   Intensity/Power: $L_{Q,total} = L_Q + 10 \log_{10}(4) = L_Q + 6 \text{ dB}$

*   **General Case: Adding Different Sound Sources**
    *   Let's say we have two sound sources with levels $L_1$ and $L_2$.
    *   **For intensity/power-related levels ($L_W$ or $L_I$):**
        $L_{total} = 10 \log_{10} \left( 10^{L_1/10} + 10^{L_2/10} \right)$
    *   **For pressure-related levels ($L_p$):** This is more complex as sound pressure levels don't add linearly even for incoherent sources, unless the sources are very far apart and the acoustic fields are well-defined. In practical noise control, for incoherent sources, we often assume addition of intensities. However, if we are specifically adding SPLs from coherent sources or in a reverberant field, the vector sum of pressures is needed. For simplicity and practical noise control contexts, assume intensity addition unless specified otherwise.
        *   If we assume intensity addition for pressure levels (common in many introductory contexts for uncorrelated sources):
            $L_{p,total} = 10 \log_{10} \left( 10^{L_{p1}/10} + 10^{L_{p2}/10} \right)$
            **Note:** This approximation is valid for uncorrelated sources where the resulting pressure variations are due to independent vibrations of the medium.

*   **Rule of Thumb for Adding Decibels (Intensity/Power):**
    *   If the levels differ by 0 dB: Add 3 dB to the higher level.
    *   If the levels differ by 1-2 dB: Add about 2.5 dB.
    *   If the levels differ by 3 dB: Add about 2 dB.
    *   If the levels differ by 4-5 dB: Add about 1.5 dB.
    *   If the levels differ by 6-9 dB: Add about 1 dB.
    *   If the levels differ by 10 dB or more: The lower level contributes negligibly; the total is approximately the higher level.

*   **References:**
    *   Ver & Beranek (2006), Chapter 2: Fundamentals of Acoustics, discusses the decibel scale and addition.
    *   Ekinsler, Frey, Coppens, Sanders (2000), Chapter 7: Sound Intensity and Energy.

---

### 3. Subtraction of Decibels

*   **The Challenge:** Similar to addition, you cannot simply subtract dB values.
*   **The Correct Approach: Convert back to linear scale, subtract, then convert back to dB.**
    1.  **Convert dB to the underlying quantity (intensity/power):**
        *   $Q_1 = Q_{ref} \times 10^{(L_1/10)}$
        *   $Q_2 = Q_{ref} \times 10^{(L_2/10)}$
    2.  **Subtract the linear quantities:** $Q_{diff} = Q_1 - Q_2$
    3.  **Convert the difference back to decibels:**
        *   $L_{diff} = 10 \log_{10} \left( \frac{Q_{diff}}{Q_{ref}} \right)$

*   **Formula for Subtraction (Intensity/Power):**
    $L_{diff} = 10 \log_{10} \left( 10^{L_1/10} - 10^{L_2/10} \right)$
    where $L_1$ is the higher level and $L_2$ is the lower level.

*   **When is Subtraction Used?**
    *   **Calculating the effect of noise control measures:** If you know the sound power/intensity before and after a treatment, you can find the reduction in dB.
    *   **Determining the contribution of a specific source:** If you have a total sound level and know the level of one dominant source, you can estimate the level of other sources.

*   **Example:**
    *   A machine produces a sound power level of 90 dB. After installing a silencer, the sound power level is measured to be 85 dB. What is the noise reduction in decibels?
        *   $L_1 = 90 \text{ dB}$, $L_2 = 85 \text{ dB}$
        *   $W_1 = W_{ref} \times 10^{90/10} = W_{ref} \times 10^9$
        *   $W_2 = W_{ref} \times 10^{85/10} = W_{ref} \times 10^{8.5}$
        *   $W_{reduction} = W_1 - W_2 = W_{ref} \times (10^9 - 10^{8.5})$
        *   $L_{reduction} = 10 \log_{10} \left( \frac{W_{ref} \times (10^9 - 10^{8.5})}{W_{ref}} \right)$
        *   $L_{reduction} = 10 \log_{10} (10^9 - 10^{8.5}) = 10 \log_{10} (10^{8.5} (10^{0.5} - 1))$
        *   $L_{reduction} = 10 \log_{10} (10^{8.5}) + 10 \log_{10} (10^{0.5} - 1)$
        *   $L_{reduction} = 85 + 10 \log_{10} (3.162 - 1) = 85 + 10 \log_{10} (2.162)$
        *   $L_{reduction} = 85 + 10 \times 0.335 = 85 + 3.35 = 88.35 \text{ dB}$
        *   **Wait, this is not subtraction, this is calculating the remaining power.** The question is asking for the *reduction*.
        *   **Correct Calculation for Noise Reduction:**
            *   Noise Reduction (NR) in dB is defined as the difference between the initial and final sound power/intensity levels.
            *   $NR = L_{initial} - L_{final}$
            *   $NR = 90 \text{ dB} - 85 \text{ dB} = 5 \text{ dB}$
        *   This is a direct subtraction of the levels. The conversion to linear scale is only needed when you're calculating the resulting level from combining sources.

*   **Important Distinction:**
    *   When adding sources, you combine their *powers* or *intensities*.
    *   When measuring *reduction*, you directly subtract the *levels* ($L_{initial} - L_{final}$).

*   **References:**
    *   Munjal (2013), Chapter 3: Noise Control Engineering Principles.

---

### 4. Averaging of Decibels

*   **Why Averaging?** Sound levels often fluctuate over time. We need a representative measure of the sound exposure.
*   **Types of Averaging:**
    1.  **Arithmetic Average (Not Suitable for dB):** Simply adding all dB values and dividing by the number of measurements is incorrect because decibels are logarithmic.
    2.  **Time-Weighted Average (TWA) / Equivalent Continuous Sound Level ($L_{eq}$):** This is the most common and scientifically relevant average for noise. It represents the steady-state sound level that would contain the same acoustic energy as the actual fluctuating sound over a given period.
        *   **Formula for $L_{eq}$:**
            $L_{eq, T} = 10 \log_{10} \left( \frac{1}{T} \int_{0}^{T} 10^{L(t)/10} dt \right)$
            where:
            *   $L_{eq, T}$ is the equivalent continuous sound level over time $T$.
            *   $L(t)$ is the instantaneous sound level (usually intensity or power level) as a function of time $t$.
            *   $T$ is the duration of the measurement.
        *   **For discrete measurements:** If you have $n$ measurements of sound level $L_i$ taken over durations $\Delta t_i$:
            $L_{eq} = 10 \log_{10} \left( \frac{\sum_{i=1}^{n} \Delta t_i \times 10^{L_i/10}}{\sum_{i=1}^{n} \Delta t_i} \right)$
        *   **Simplified $L_{eq}$ for equal time intervals:** If measurements are taken at regular intervals $\Delta t$, and there are $N$ such intervals:
            $L_{eq} = 10 \log_{10} \left( \frac{1}{N} \sum_{i=1}^{N} 10^{L_i/10} \right)$
            This essentially means:
            a. Convert each dB level to its corresponding intensity/power value.
            b. Calculate the arithmetic average of these intensity/power values.
            c. Convert the average intensity/power back to dB.

    3.  **Sound Exposure Level (SEL) / $L_{AE}$:** This represents the total sound energy of a single event (e.g., an aircraft flyover, a truck passing) normalized to a 1-second duration. It's useful for comparing impulsive or transient noises.
        *   $L_{AE} = 10 \log_{10} \left( \int_{t_1}^{t_2} 10^{L(t)/10} dt \right)$
        *   If $L(t)$ is constant during the event from $t_1$ to $t_2$ (duration $\Delta t$):
            $L_{AE} = L_{event} + 10 \log_{10} \left( \frac{\Delta t}{1 \text{ s}} \right)$
            where $L_{event}$ is the sound level during the event.

*   **References:**
    *   Crocker (2007), Chapter 2: Measurement and Analysis of Noise.
    *   Barron (2001), Chapter 3: Noise Measurement and Analysis.

---

### 5. Relation to Course Outcomes

*   **CO1 (Define acoustic terminologies and understand physics):** This topic directly addresses the dB scale, which is a fundamental acoustic terminology. Understanding the logarithmic nature is key to understanding sound perception and measurement. The physics behind the $10 \log$ vs $20 \log$ factors relates to the intensity-power relationship ($I \propto p^2$).
*   **CO2 (Analyze transmission through media/tubes):** While not directly about transmission *mechanisms*, the addition and averaging of decibels are crucial for analyzing the *combined* effect of sound from multiple sources or the overall sound exposure during transmission. If multiple sources are contributing to the sound field within a tube or medium, their levels would be combined using these principles.
*   **CO3 (Understand hearing mechanism, regulations, measurement devices):** The logarithmic nature of decibels is directly linked to the human ear's perception of loudness. Noise regulations (e.g., exposure limits) are often expressed in dB or related metrics like $L_{eq}$. Sound level meters use these principles to display measurements.
*   **CO4 (Explain noise reducing measures):** The concept of "subtraction" of decibels is essential for quantifying the effectiveness of noise reduction measures (e.g., sound insulation, silencers) by comparing the sound levels before and after implementation.

---

### 6. Practice Questions and Exercises

**Instructions:** For all calculations involving decibel addition/subtraction, assume the quantities are sound *intensity* or *power* levels unless otherwise specified. Use $p_{ref} = 20 \mu \text{Pa}$ if dealing with SPL.

**Question 1 (Addition):**
Two identical machines are operating simultaneously. Each machine produces a sound power level of 85 dB. What is the combined sound power level of the two machines?

**Question 2 (Addition):**
A factory has a background noise level of 70 dB. A new machine is installed, which produces a sound power level of 75 dB. What is the new total sound power level in the factory?

**Question 3 (Addition - Multiple Sources):**
A sound source emits a sound intensity level of 60 dB. A second, uncorrelated source emits a sound intensity level of 63 dB. A third, uncorrelated source emits a sound intensity level of 60 dB. What is the total sound intensity level?

**Question 4 (Subtraction):**
The sound pressure level (SPL) measured at a location near a ventilation fan is 78 dB. After installing a sound attenuator, the SPL at the same location is reduced to 72 dB. What is the noise reduction provided by the attenuator in dB?

**Question 5 (Averaging - $L_{eq}$):**
A sound level meter recorded the following sound pressure levels in consecutive 1-minute intervals over a 5-minute period: 75 dB, 78 dB, 80 dB, 76 dB, 74 dB. Calculate the equivalent continuous sound level ($L_{eq}$) for this 5-minute period.

**Question 6 (Combined Concepts):**
Consider a workshop with three identical machines, each generating a sound power level of 80 dB. The background noise in the workshop is 65 dB.
a) What is the total sound power level of the three machines alone?
b) What is the total sound power level of the workshop including the background noise?

---

### 7. Answers to Practice Questions

**Answer 1:**
*   Since the machines are identical, we can use the formula for adding identical sources (power level): $L_{total} = L + 10 \log_{10}(N)$
*   $L = 85 \text{ dB}$, $N = 2$
*   $L_{total} = 85 \text{ dB} + 10 \log_{10}(2) = 85 \text{ dB} + 10 \times 0.301 \approx 85 + 3.0 \text{ dB} = 88.0 \text{ dB}$
*   **Alternatively, using general formula:**
    $L_{total} = 10 \log_{10} (10^{85/10} + 10^{85/10}) = 10 \log_{10} (2 \times 10^{8.5}) = 10 \log_{10}(2) + 10 \log_{10}(10^{8.5})$
    $L_{total} = 3.01 + 85 = 88.01 \text{ dB}$
*   **Answer:** 88.0 dB

**Answer 2:**
*   These are two different sources, so we add their intensities (power levels): $L_{total} = 10 \log_{10} (10^{L_1/10} + 10^{L_2/10})$
*   $L_1 = 70 \text{ dB}$, $L_2 = 75 \text{ dB}$
*   $L_{total} = 10 \log_{10} (10^{70/10} + 10^{75/10}) = 10 \log_{10} (10^7 + 10^{7.5})$
*   $L_{total} = 10 \log_{10} (10^{7.5} (10^{-0.5} + 1)) = 10 \log_{10} (10^{7.5}) + 10 \log_{10} (0.316 + 1)$
*   $L_{total} = 75 + 10 \log_{10} (1.316) = 75 + 10 \times 0.119 = 75 + 1.19 \approx 76.2 \text{ dB}$
*   **Using rule of thumb:** The levels differ by 5 dB (75 - 70). For a 5 dB difference, we add about 1.5 dB to the higher level. $75 + 1.5 = 76.5 \text{ dB}$. The exact calculation is more precise.
*   **Answer:** 76.2 dB

**Answer 3:**
*   $L_1 = 60 \text{ dB}$, $L_2 = 63 \text{ dB}$, $L_3 = 60 \text{ dB}$.
*   We can add the two 60 dB sources first: $L_{1+3} = 60 + 10 \log_{10}(2) = 63 \text{ dB}$.
*   Now we have two sources of 63 dB and 60 dB.
*   $L_{total} = 10 \log_{10} (10^{63/10} + 10^{60/10}) = 10 \log_{10} (10^{6.3} + 10^6)$
*   $L_{total} = 10 \log_{10} (10^6 (10^{0.3} + 1)) = 10 \log_{10} (10^6) + 10 \log_{10} (2.0 + 1)$
*   $L_{total} = 60 + 10 \log_{10} (3.0) = 60 + 10 \times 0.477 = 60 + 4.77 = 64.77 \text{ dB}$
*   **Alternatively, adding all at once:**
    $L_{total} = 10 \log_{10} (10^{60/10} + 10^{63/10} + 10^{60/10}) = 10 \log_{10} (10^6 + 10^{6.3} + 10^6)$
    $L_{total} = 10 \log_{10} (2 \times 10^6 + 10^{6.3}) = 10 \log_{10} (2 \times 10^6 + 2.0 \times 10^6) = 10 \log_{10} (4 \times 10^6)$
    $L_{total} = 10 \log_{10} (4) + 10 \log_{10} (10^6) = 6.02 + 60 = 66.02 \text{ dB}$
    *Error in previous step calculation! Let's re-evaluate.*
    $L_{total} = 10 \log_{10} (10^6 + 10^{6.3} + 10^6) = 10 \log_{10} (1,000,000 + 1,995,262 + 1,000,000)$
    $L_{total} = 10 \log_{10} (3,995,262) = 10 \times 6.6015 = 66.015 \text{ dB}$
*   **Answer:** 66.0 dB

**Answer 4:**
*   Noise Reduction (NR) is the direct difference between the initial and final levels.
*   $NR = L_{initial} - L_{final}$
*   $NR = 78 \text{ dB} - 72 \text{ dB} = 6 \text{ dB}$
*   **Answer:** 6 dB

**Answer 5:**
*   This is an $L_{eq}$ calculation for discrete intervals of equal duration.
*   Convert each dB level to its intensity equivalent, sum them, then convert back.
*   $10^{75/10} = 10^{7.5} = 31,622,776$
*   $10^{78/10} = 10^{7.8} = 63,095,734$
*   $10^{80/10} = 10^{8.0} = 100,000,000$
*   $10^{76/10} = 10^{7.6} = 39,810,717$
*   $10^{74/10} = 10^{7.4} = 25,118,864$
*   Sum of intensity values: $31622776 + 63095734 + 100000000 + 39810717 + 25118864 = 259648091$
*   Average intensity = $259648091 / 5 = 51,929,618$
*   $L_{eq} = 10 \log_{10} (51,929,618) = 10 \times 7.7155 = 77.155 \text{ dB}$
*   **Answer:** 77.2 dB

**Answer 6:**
*   **a) Total sound power level of the three machines alone:**
    *   All three machines are identical, so we can use the formula for adding identical sources (power level): $L_{total\_machines} = L_{machine} + 10 \log_{10}(N)$
    *   $L_{machine} = 80 \text{ dB}$, $N = 3$
    *   $L_{total\_machines} = 80 \text{ dB} + 10 \log_{10}(3) = 80 \text{ dB} + 10 \times 0.477 \approx 80 + 4.8 \text{ dB} = 84.8 \text{ dB}$
    *   **Answer:** 84.8 dB

*   **b) Total sound power level of the workshop including the background noise:**
    *   Now we have the combined noise from the machines ($L_{machines} = 84.8 \text{ dB}$) and the background noise ($L_{background} = 65 \text{ dB}$). These are different sources.
    *   $L_{total\_workshop} = 10 \log_{10} (10^{L_{machines}/10} + 10^{L_{background}/10})$
    *   $L_{total\_workshop} = 10 \log_{10} (10^{84.8/10} + 10^{65/10}) = 10 \log_{10} (10^{8.48} + 10^{6.5})$
    *   $10^{8.48} \approx 3.01995 \times 10^8$
    *   $10^{6.5} \approx 3.16228 \times 10^6$
    *   Sum = $3.01995 \times 10^8 + 0.0316228 \times 10^8 = 3.05157 \times 10^8$
    *   $L_{total\_workshop} = 10 \log_{10} (3.05157 \times 10^8) = 10 \times 8.4845 = 84.845 \text{ dB}$
    *   **Note:** Since the machine noise (84.8 dB) is much higher than the background noise (65 dB) (difference of 19.8 dB), the background noise contributes very little. The total level is very close to the level of the machines alone.
    *   **Answer:** 84.8 dB

---

### 8. Important Points to Remember

*   **Decibels are Logarithmic:** Never add or subtract dB values directly. Always convert to the underlying linear quantity (intensity, power, or pressure), perform the arithmetic operation, and then convert back to dB.
*   **Intensity/Power vs. Pressure:** Use the $10 \log_{10}$ formula for sound intensity or sound power levels. Use the $20 \log_{10}$ formula for sound pressure levels. For practical addition of uncorrelated sources, we often add their intensities.
*   **Adding Identical Sources:** There are shortcuts for adding $N$ identical sources: $+3 \text{ dB}$ for doubling (2 sources), $+6 \text{ dB}$ for quadrupling (4 sources) for intensity/power levels.
*   **Difference of 10 dB:** If two sound levels differ by 10 dB or more, the higher level dominates, and the lower level contributes negligibly to the sum.
*   **$L_{eq}$ is the Standard Average:** For fluctuating noise, $L_{eq}$ represents the energy-equivalent steady sound level and is calculated by averaging the intensity/power values.
*   **Noise Reduction:** This is a direct subtraction of levels ($L_{initial} - L_{final}$), indicating how much the sound has been reduced.

---

This concludes the study notes for Topic: Addition, subtraction, and averaging of decibels. Ensure you practice these calculations to become proficient in handling decibel values in acoustics and noise control.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
