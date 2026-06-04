---
title: "multiple sources"
subject: "AIR AND NOISE POLLUTION CONTROL ENGINEERING"
module: "Module 4: Noise pollution: Basics of acoustics and specification of sound; sound power"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba811689"
status: "completed"
scrapedAt: "2026-05-20T18:57:21.893Z"
---
# AIR AND NOISE POLLUTION CONTROL ENGINEERING

## Module 4: Noise Pollution: Basics of Acoustics and Specification of Sound; Sound Power

### Topic: Multiple Sources

---

### 1. Learning Outcomes

By the end of this topic, you should be able to:

*   Understand the concept of sound addition, particularly for multiple sound sources.
*   Calculate the combined sound pressure level (SPL) and sound power level (SWL) from multiple identical and non-identical sources.
*   Explain the practical implications of combining sound sources in various scenarios.
*   Apply the principles of sound addition to solve real-world noise control problems.

---

### 2. Key Concepts and Definitions

#### 2.1. Sound Intensity (I)

*   **Definition:** The rate at which sound energy flows per unit area. It is measured in Watts per square meter ($W/m^2$).
*   **Relationship with Sound Pressure:** For a plane wave in air, sound intensity is related to sound pressure ($P$) and the characteristic acoustic impedance of the medium ($\rho c$) by:
    $I = \frac{P^2}{\rho c}$
    where $\rho$ is the density of the medium and $c$ is the speed of sound.
*   **Importance:** Sound intensity is a more fundamental measure of sound energy flow than sound pressure, especially when considering multiple sources and their spatial distribution.

#### 2.2. Sound Power (W)

*   **Definition:** The total acoustic energy radiated by a sound source per unit time. It is measured in Watts (W).
*   **Relationship with Sound Intensity:** Sound power is the integral of sound intensity over a closed surface enclosing the source:
    $W = \oint_{A} I dA$
*   **Importance:** Sound power is a source characteristic and is independent of the environment or the distance from the source. This makes it a crucial parameter for comparing the noise output of different equipment.

#### 2.3. Sound Pressure Level (SPL)

*   **Definition:** A logarithmic measure of the effective sound pressure of a sound relative to a reference value. It is measured in decibels (dB).
*   **Formula:** $SPL = 20 \log_{10} \left( \frac{P}{P_{ref}} \right)$
    where $P$ is the effective sound pressure and $P_{ref}$ is the reference sound pressure (typically $20 \mu Pa$ for air).
*   **Key Point:** SPL is a measure of how loud a sound *perceived* at a specific location is.

#### 2.4. Sound Power Level (SWL)

*   **Definition:** A logarithmic measure of the sound power of a source relative to a reference value. It is measured in decibels (dB).
*   **Formula:** $SWL = 10 \log_{10} \left( \frac{W}{W_{ref}} \right)$
    where $W$ is the sound power and $W_{ref}$ is the reference sound power (typically $10^{-12}$ W).
*   **Key Point:** SWL is a characteristic of the *source itself*, regardless of the listening environment.

#### 2.5. The Decibel Scale and Sound Addition

*   **Non-linear Nature:** The decibel scale is logarithmic, meaning that simple arithmetic addition of decibel values is incorrect.
*   **Energy/Power Addition:** To combine the effects of multiple sound sources, we need to add their underlying physical quantities – sound intensity or sound power – in their linear form, and then convert back to decibels.

---

### 3. Combining Multiple Sound Sources

When multiple sound sources are present, their contributions to the overall sound level need to be combined. The method of combination depends on whether we are dealing with sound intensity or sound power.

#### 3.1. Combining Sound Intensity (for Sound Pressure Level)

*   **Princ:** Sound pressure levels (SPLs) are related to the square of the sound pressure, which is directly proportional to sound intensity. Therefore, to combine SPLs from multiple sources, we need to convert them back to sound pressures (or intensities), add these linear values, and then convert back to SPL.

*   **Scenario 1: Multiple Identical Sources**
    *   Let $SPL_1$ be the SPL from a single source at a specific location.
    *   Let $N$ be the number of identical sources.
    *   The combined SPL ($SPL_{total}$) from $N$ identical sources is:
        $SPL_{total} = SPL_1 + 10 \log_{10} (N)$

    *   **Explanation:**
        *   If we have 2 identical sources, $SPL_{total} = SPL_1 + 10 \log_{10}(2) \approx SPL_1 + 3 dB$. This means that doubling the number of identical sources increases the sound level by approximately 3 dB.
        *   If we have 10 identical sources, $SPL_{total} = SPL_1 + 10 \log_{10}(10) = SPL_1 + 10 dB$. Ten identical sources increase the sound level by 10 dB.

*   **Scenario 2: Multiple Non-Identical Sources**
    *   Let $SPL_1, SPL_2, ..., SPL_N$ be the SPLs from $N$ individual sources at a specific location.
    *   First, convert each SPL to its corresponding sound pressure level:
        $P_i = P_{ref} \times 10^{\frac{SPL_i}{20}}$
    *   Next, sum the *squares* of these sound pressures (which is proportional to summing intensities):
        $P_{total}^2 = P_1^2 + P_2^2 + ... + P_N^2$
    *   Finally, convert the total sound pressure back to SPL:
        $SPL_{total} = 20 \log_{10} \left( \frac{\sqrt{P_1^2 + P_2^2 + ... + P_N^2}}{P_{ref}} \right)$
    *   This can be simplified using the relationship $10^{\frac{SPL_i}{10}} = \frac{P_i^2}{P_{ref}^2}$:
        $SPL_{total} = 10 \log_{10} \left( 10^{\frac{SPL_1}{10}} + 10^{\frac{SPL_2}{10}} + ... + 10^{\frac{SPL_N}{10}} \right)$

    *   **Example:**
        If you have two sources with $SPL_1 = 70 dB$ and $SPL_2 = 73 dB$ at the same location:
        $SPL_{total} = 10 \log_{10} (10^{\frac{70}{10}} + 10^{\frac{73}{10}})$
        $SPL_{total} = 10 \log_{10} (10^7 + 10^{7.3})$
        $SPL_{total} = 10 \log_{10} (10^7 + 2 \times 10^7)$
        $SPL_{total} = 10 \log_{10} (3 \times 10^7)$
        $SPL_{total} = 10 (\log_{10} 3 + \log_{10} 10^7)$
        $SPL_{total} = 10 (0.477 + 7)$
        $SPL_{total} = 10 \times 7.477 \approx 74.77 dB$

    *   **Important Observation:** When combining non-identical sources, the dominant source (the one with the higher SPL) has a greater influence on the total SPL. The difference between the two sources is also important:
        *   If the difference is 0-1 dB: The total SPL is about 3 dB higher than the louder source.
        *   If the difference is 2-4 dB: The total SPL is about 2 dB higher than the louder source.
        *   If the difference is 5-10 dB: The total SPL is about 1 dB higher than the louder source.
        *   If the difference is > 10 dB: The louder source essentially dominates, and the total SPL is very close to the SPL of the louder source (less than 1 dB difference).

#### 3.2. Combining Sound Power

*   **Princ:** Sound power is a linear quantity. Therefore, to combine the sound power of multiple sources, we add their individual sound powers (in Watts) and then convert the total sound power back to a sound power level (SWL).

*   **Scenario 1: Multiple Identical Sources**
    *   Let $SWL_1$ be the SWL of a single source.
    *   Let $N$ be the number of identical sources.
    *   First, convert $SWL_1$ to sound power $W_1$:
        $W_1 = W_{ref} \times 10^{\frac{SWL_1}{10}}$
    *   The total sound power $W_{total}$ is:
        $W_{total} = N \times W_1$
    *   Convert $W_{total}$ back to SWL:
        $SWL_{total} = 10 \log_{10} \left( \frac{W_{total}}{W_{ref}} \right)$
        $SWL_{total} = 10 \log_{10} \left( \frac{N \times W_1}{W_{ref}} \right)$
        $SWL_{total} = 10 \log_{10} (N) + 10 \log_{10} \left( \frac{W_1}{W_{ref}} \right)$
        $SWL_{total} = SWL_1 + 10 \log_{10} (N)$
    *   This is the same formula as combining SPLs for identical sources.

*   **Scenario 2: Multiple Non-Identical Sources**
    *   Let $SWL_1, SWL_2, ..., SWL_N$ be the SWLs of $N$ individual sources.
    *   Convert each SWL to sound power $W_i$:
        $W_i = W_{ref} \times 10^{\frac{SWL_i}{10}}$
    *   Sum the sound powers:
        $W_{total} = W_1 + W_2 + ... + W_N$
    *   Convert the total sound power back to SWL:
        $SWL_{total} = 10 \log_{10} \left( \frac{W_{total}}{W_{ref}} \right)$
        $SWL_{total} = 10 \log_{10} \left( \frac{W_1 + W_2 + ... + W_N}{W_{ref}} \right)$
        $SWL_{total} = 10 \log_{10} \left( 10^{\frac{SWL_1}{10}} + 10^{\frac{SWL_2}{10}} + ... + 10^{\frac{SWL_N}{10}} \right)$
    *   This is mathematically identical to combining non-identical SPLs.

#### 3.3. Relationship Between Sound Power and Sound Pressure

*   **Spherical Radiation:** For a point source radiating sound uniformly in all directions in a free field, the sound intensity $I$ at a distance $r$ from the source is given by:
    $I = \frac{W}{4\pi r^2}$
*   **Combining these relationships:**
    *   $SPL = 10 \log_{10} \left( \frac{I \cdot A}{I_{ref} \cdot A_{ref}} \right)$ where $A$ is the area over which intensity is measured and $A_{ref}$ is a reference area (often $1 m^2$ for intensity, but $20 \mu Pa$ for pressure).
    *   For SPL measurements at a distance $r$ in a free field where $I = W/(4\pi r^2)$, we have:
        $SPL = SWL - 10 \log_{10}(4\pi r^2) + (10 \log_{10}(A) - 10 \log_{10}(A_{ref}))$
        If we consider a $1 m^2$ area at distance $r$ in free field:
        $SPL = SWL - 20 \log_{10}(r) - 10 \log_{10}(4\pi) + C$
        where C is a constant that accounts for reference pressure and intensity.
        Typically, for free-field conditions, the relationship is:
        $SPL \approx SWL - 20 \log_{10}(r) + 10.5$ (for distance in meters, reference pressure $20 \mu Pa$, reference power $10^{-12}W$, and assuming spherical spreading).

*   **Importance:** Understanding this relationship allows us to predict the sound pressure level at a given distance from the combined sound power of multiple sources.

---

### 4. Practical Examples and Scenarios

#### 4.1. Industrial Machinery

*   **Scenario:** A factory floor with 10 identical stamping machines, each producing an SWL of 95 dB. What is the total SWL of the machines, and approximately what would be the SPL at a point 10 meters away in a free field?
    *   **Total SWL:**
        $SWL_{total} = SWL_1 + 10 \log_{10}(N)$
        $SWL_{total} = 95 dB + 10 \log_{10}(10)$
        $SWL_{total} = 95 dB + 10 dB = 105 dB$
    *   **Approximate SPL at 10m:**
        Using the free-field approximation:
        $SPL \approx SWL_{total} - 20 \log_{10}(r) + 10.5$
        $SPL \approx 105 dB - 20 \log_{10}(10) + 10.5$
        $SPL \approx 105 dB - 20(1) + 10.5$
        $SPL \approx 95.5 dB$

#### 4.2. Traffic Noise

*   **Scenario:** A highway with 50 cars, each producing an average sound power level of 90 dB, and 5 trucks, each producing an average sound power level of 100 dB. What is the total SWL from the traffic?
    *   **Total SWL from cars:**
        $W_{cars} = 50 \times 10^{\frac{90}{10}} W = 50 \times 10^9 W$
    *   **Total SWL from trucks:**
        $W_{trucks} = 5 \times 10^{\frac{100}{10}} W = 5 \times 10^{10} W$
    *   **Total sound power:**
        $W_{total} = W_{cars} + W_{trucks} = 50 \times 10^9 W + 5 \times 10^{10} W$
        $W_{total} = 5 \times 10^{10} W + 5 \times 10^{10} W = 10 \times 10^{10} W = 10^{11} W$
    *   **Total SWL:**
        $SWL_{total} = 10 \log_{10} \left( \frac{10^{11}}{10^{-12}} \right)$
        $SWL_{total} = 10 \log_{10} (10^{23})$
        $SWL_{total} = 10 \times 23 = 230 dB$
        **(Note:** This is an extremely high SWL and indicates the scale of power. In reality, traffic noise is more complex and involves distance, ground absorption, etc.)

    *   **Alternative Calculation (More intuitive for differing SWLs):**
        $SWL_{total} = 10 \log_{10} (10^{\frac{90}{10}} \times 50 + 10^{\frac{100}{10}} \times 5)$
        $SWL_{total} = 10 \log_{10} (10^9 \times 50 + 10^{10} \times 5)$
        $SWL_{total} = 10 \log_{10} (5 \times 10^{10} + 5 \times 10^{10})$
        $SWL_{total} = 10 \log_{10} (10 \times 10^{10})$
        $SWL_{total} = 10 \log_{10} (10^{11}) = 110 dB$
        *(Self-correction: The previous calculation was incorrect due to misunderstanding the magnitude of reference power. The second method is correct and aligns with the principle of adding linear powers.)*

#### 4.3. Community Noise

*   **Scenario:** A residential area experiences noise from a distant highway (SPL 60 dB at the closest houses), a nearby construction site (SPL 70 dB), and local traffic (SPL 55 dB). What is the total SPL at the houses?
    *   $SPL_{total} = 10 \log_{10} (10^{\frac{60}{10}} + 10^{\frac{70}{10}} + 10^{\frac{55}{10}})$
    *   $SPL_{total} = 10 \log_{10} (10^6 + 10^7 + 10^{5.5})$
    *   $SPL_{total} = 10 \log_{10} (1,000,000 + 10,000,000 + 316,228)$
    *   $SPL_{total} = 10 \log_{10} (11,316,228)$
    *   $SPL_{total} \approx 10 \times 7.0538 \approx 70.54 dB$
    *   **Observation:** The construction site's noise dominates the total level.

---

### 5. Practice Questions and Exercises

**Question 1:**
A factory has 20 identical machines, each emitting a sound power level of 90 dB. What is the total sound power level of all machines operating together?

**Answer 1:**
$SWL_{total} = SWL_1 + 10 \log_{10}(N)$
$SWL_{total} = 90 dB + 10 \log_{10}(20)$
$SWL_{total} = 90 dB + 10 \times 1.301$
$SWL_{total} = 90 dB + 13.01 dB \approx 103.01 dB$

---

**Question 2:**
At a particular location, a fan produces an SPL of 75 dB, and an air conditioner produces an SPL of 72 dB. What is the combined SPL at that location?

**Answer 2:**
$SPL_{total} = 10 \log_{10} (10^{\frac{75}{10}} + 10^{\frac{72}{10}})$
$SPL_{total} = 10 \log_{10} (10^{7.5} + 10^{7.2})$
$SPL_{total} = 10 \log_{10} (31,622,777 + 15,848,932)$
$SPL_{total} = 10 \log_{10} (47,471,709)$
$SPL_{total} \approx 10 \times 7.676 \approx 76.76 dB$

---

**Question 3:**
You are measuring noise from a single engine at 50 meters and get an SPL of 80 dB. If you have 4 identical engines operating at the same distance in a free field, what would be the SPL?

**Answer 3:**
First, find the SPL from a single engine: $SPL_1 = 80 dB$.
For 4 identical engines:
$SPL_{total} = SPL_1 + 10 \log_{10}(N)$
$SPL_{total} = 80 dB + 10 \log_{10}(4)$
$SPL_{total} = 80 dB + 10 \times 0.602$
$SPL_{total} = 80 dB + 6.02 dB \approx 86.02 dB$

---

**Question 4:**
A construction site has a pile driver (SWL = 110 dB) and a concrete mixer (SWL = 95 dB). What is the total sound power level of the site?

**Answer 4:**
$SWL_{total} = 10 \log_{10} (10^{\frac{110}{10}} + 10^{\frac{95}{10}})$
$SWL_{total} = 10 \log_{10} (10^{11} + 10^{9.5})$
$SWL_{total} = 10 \log_{10} (10^{11} + 3.16 \times 10^9)$
$SWL_{total} = 10 \log_{10} (100 \times 10^9 + 3.16 \times 10^9)$
$SWL_{total} = 10 \log_{10} (103.16 \times 10^9)$
$SWL_{total} = 10 \log_{10} (1.0316 \times 10^{11})$
$SWL_{total} \approx 10 \times 11.013 \approx 110.13 dB$
*(Note: The pile driver's higher SWL dominates the total.)*

---

### 6. Important Points to Remember

*   **Decibels are logarithmic:** Never add decibel values directly. Always convert to linear units (intensity or power) before summing.
*   **Identical sources:** For $N$ identical sources, the increase in SPL or SWL is $10 \log_{10}(N)$.
*   **Non-identical sources:** Add their linear power or intensity values and then convert back to dB. The source with the highest level has the most significant impact.
*   **Dominance of the loudest source:** When the difference between two sound levels is 10 dB or more, the quieter source contributes negligibly to the total level (less than 1 dB increase).
*   **Sound Power vs. Sound Pressure:** SWL is a source property, while SPL is measured at a specific location. The relationship between them depends on distance and the acoustic environment (e.g., free field, reverberant field).
*   **Units:** Ensure consistency in units (Watts for power, $W/m^2$ for intensity, dB for levels).
