---
title: "Maximum usable Frequency"
subject: "ANTENNA THEORY AND WAVE PROPAGATION"
module: "Module 4: Radio Wave Propagation"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff78e"
status: "completed"
scrapedAt: "2026-05-23T18:12:52.742Z"
---
# ANTENNA THEORY AND WAVE PROPAGATION

## Module 4: Radio Wave Propagation

### Topic: Maximum Usable Frequency (MUF)

---

### 1. Introduction to Radio Wave Propagation and MUF

This topic focuses on understanding the factors that influence the range and reliability of radio communication, particularly in the context of ionospheric propagation. The **Maximum Usable Frequency (MUF)** is a critical parameter that dictates the highest frequency that can be used for reliable communication between two points via reflection from the ionosphere at a given time and location.

**Learning Outcomes Addressed:**

*   **LO: Understand the concept of Maximum Usable Frequency (MUF).**
*   **LO: Explain the factors affecting MUF.**
*   **LO: Describe the relationship between MUF and critical frequency.**
*   **LO: Illustrate the calculation of MUF for different scenarios.**
*   **LO: Discuss the importance of MUF in practical radio communication systems.**

**Course Outcomes Alignment:**

*   **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2).** This topic directly contributes to understanding a key parameter (MUF) within ionospheric propagation modes.

**Textbook References:**

*   **Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.).** Balanis provides a foundational understanding of wave propagation, including ionospheric effects.
*   **Collin, R. E. (2001). *Antennas and Radio Wave Propagation* (2nd ed.).** Collin's work offers detailed explanations of propagation phenomena, including the ionosphere's impact on radio waves.
*   **Raju, G. S. N. (2009). *Antenna and Wave Propagation*.** Raju's book often includes practical aspects and derivations related to MUF.

---

### 2. Key Concepts and Definitions

#### 2.1 Ionosphere and its Layers

The ionosphere is a region of the Earth's upper atmosphere, approximately 60 to 1,000 kilometers (37 to 620 miles) above the surface, that is ionized by solar and cosmic radiation. This ionization creates a plasma that can refract (bend) and reflect radio waves. The ionosphere is typically divided into three main regions:

*   **D Layer (35-90 km):** Present only during daylight. It absorbs lower frequencies and is less reflective.
*   **E Layer (90-150 km):** Present during both day and night, though its density varies. Can reflect frequencies up to around 20 MHz.
*   **F Layer (150-1000 km):** This is the most important layer for long-distance communication. It splits into F1 and F2 layers during the day and merges into a single F layer at night. The F2 layer is the most ionized and supports reflection of the highest frequencies.

**Important Point:** The density of ionization in these layers varies with time of day, season, solar cycle, and geographic location.

#### 2.2 Critical Frequency ($f_c$)

The **critical frequency ($f_c$)** is the highest frequency that will be reflected back to Earth by a specific ionospheric layer when the radio waves are incident vertically on the ionosphere.

*   **Definition:** The maximum frequency that can be reflected by the ionosphere at vertical incidence.
*   **Relationship to Electron Density:** $f_c = 9 \sqrt{N_{max}}$, where $N_{max}$ is the maximum electron density in electrons per cubic meter ($\text{el/m}^3$).

#### 2.3 Virtual Height ($h'$)

The **virtual height ($h'$)** is the apparent height from which a radio wave is reflected. It is usually greater than the actual height of the reflecting layer due to the slowing down and bending of the wave within the ionosphere.

#### 2.4 Skip Distance

The **skip distance** is the minimum distance from the transmitter at which a radio wave, after being reflected by the ionosphere, can be received on the Earth's surface. Frequencies below the critical frequency for a given layer, transmitted at oblique angles, will be reflected and return to Earth. As the frequency increases, the skip distance decreases until it reaches zero at the critical frequency (for vertical incidence).

#### 2.5 Maximum Usable Frequency (MUF)

The **Maximum Usable Frequency (MUF)** is the highest frequency that can be used for reliable skywave propagation between two points on the Earth's surface for a given path and time. It is always greater than the critical frequency.

*   **Definition:** The highest frequency for reliable skywave propagation.
*   **Dependence:** It depends on the critical frequency of the ionospheric layer and the angle of incidence of the radio wave on the ionosphere.

#### 2.6 Lowest Usable Frequency (LUF)

The **Lowest Usable Frequency (LUF)** is the lowest frequency that can be used for reliable skywave propagation between two points. Below the LUF, the signal is too weak to be received effectively due to absorption in the ionosphere.

#### 2.7 Optimum Working Frequency (OWF)

The **Optimum Working Frequency (OWF)** is typically chosen to be around 85% of the MUF, as it provides the most reliable communication, balancing the benefits of higher frequencies (less absorption, wider skip distance) with the limitations imposed by the MUF.

---

### 3. Factors Affecting MUF

The MUF is not a static value; it fluctuates significantly due to several factors:

*   **Ionospheric Layer Characteristics:**
    *   **Electron Density ($N$):** Higher electron density leads to higher critical frequency and thus a higher MUF. This is the primary factor.
    *   **Layer Height ($h$):** The height of the ionospheric layer influences the angle of incidence for a given transmission path.
*   **Geographic Location:** The Earth's magnetic field and the position relative to the sun affect ionization levels.
*   **Time of Day:** Ionization is highest during daylight hours when solar radiation is strongest.
*   **Season:** Seasonal variations in solar radiation affect ionization.
*   **Solar Cycle:** The 11-year sunspot cycle significantly impacts solar activity and, consequently, ionospheric ionization. Higher solar activity generally means higher MUFs.
*   **Angle of Incidence:** The angle at which the radio wave strikes the ionosphere is crucial. For a given ionospheric layer, a lower angle of incidence allows reflection of higher frequencies.

**Important Point:** MUF is path-dependent. Different communication paths will have different MUFs at the same time.

---

### 4. Relationship Between MUF and Critical Frequency

The relationship between MUF and critical frequency is governed by the **Maximum Usable Frequency (MUF) Factor**, often denoted by 'm' or 'secant law factor'. This factor accounts for the oblique angle of incidence.

For a specific ionospheric layer with critical frequency $f_c$, the MUF for a path with an angle of incidence $\theta$ is given by:

$MUF = f_c \times m$

Where 'm' is the MUF factor. A common approximation for 'm' is the secant of the angle of incidence, $\sec \theta$, when the ionosphere is treated as a flat reflector:

$MUF \approx f_c \times \sec \theta$

However, this is an approximation. A more accurate representation considers the curvature of the Earth and the ionosphere. If the angle of elevation of the transmitting antenna is $\alpha$, and assuming a flat Earth and ionosphere at height $h$, then $\theta = 90^\circ - \alpha$. The MUF factor $m$ can be approximated by $\sec \alpha$.

More precisely, the MUF factor depends on the angle of elevation of the ray at the point of reflection from the ionosphere, which is related to the distance between the transmitter and receiver.

**Example:**

If the critical frequency of the F2 layer is 12 MHz and the angle of elevation of the ray reaching the ionosphere is 30 degrees, then the angle of incidence $\theta$ is $90^\circ - 30^\circ = 60^\circ$.

Using the secant approximation:
$MUF \approx 12 \, \text{MHz} \times \sec(60^\circ) = 12 \, \text{MHz} \times 2 = 24 \, \text{MHz}$

**Important Point:** The MUF is directly proportional to the critical frequency and increases with decreasing angle of incidence (i.e., lower elevation angles).

---

### 5. Calculation of MUF

The calculation of MUF involves several steps and often relies on empirical models and ionospheric charts.

#### 5.1 Basic MUF Calculation (Secant Law Approximation)

This method uses the critical frequency and the geometry of the communication path.

*   **Step 1: Determine the critical frequency ($f_c$)** for the relevant ionospheric layer (usually F2) at the desired time and location. This often requires consulting ionospheric prediction charts or using real-time data.
*   **Step 2: Determine the angle of elevation ($\alpha$)** or the angle of incidence ($\theta$) for the communication path. This can be calculated based on the distance between the transmitter and receiver and the height of the ionospheric layer.
    *   For a flat Earth and ionosphere at height $h$, and a distance $d$ between transmitter and receiver, the angle of elevation $\alpha$ can be approximated using the tangent: $\tan \alpha = h / (d/2)$.
    *   The angle of incidence is $\theta = 90^\circ - \alpha$.
*   **Step 3: Calculate MUF using the secant law:** $MUF \approx f_c \times \sec \theta = f_c \times \csc \alpha$.

**Example:**

A communication link between two points is 2000 km apart. The height of the reflecting layer is 300 km. The critical frequency of the F2 layer is 15 MHz.

*   Calculate the angle of elevation $\alpha$:
    The distance to the reflection point is approximately $d/2 = 1000$ km.
    $\tan \alpha = h / (d/2) = 300 \, \text{km} / 1000 \, \text{km} = 0.3$
    $\alpha = \arctan(0.3) \approx 16.7^\circ$
*   Calculate the angle of incidence $\theta$:
    $\theta = 90^\circ - 16.7^\circ = 73.3^\circ$
*   Calculate MUF (using secant law):
    $MUF \approx 15 \, \text{MHz} \times \sec(73.3^\circ) \approx 15 \, \text{MHz} \times 3.42 \approx 51.3 \, \text{MHz}$

**Caution:** This secant law approximation is valid for flat Earth and a thin ionospheric layer. For real-world scenarios, more sophisticated methods are used.

#### 5.2 Ionospheric Charts and Prediction Services

In practice, MUF values are obtained from:

*   **Ionospheric Prediction Charts:** These charts are published by organizations like the National Oceanic and Atmospheric Administration (NOAA) in the US. They provide MUF values for different geographical regions and times, often as a function of distance and season. These charts are derived from extensive measurements and sophisticated modeling.
*   **Real-time Ionospheric Data:** For critical applications, real-time ionospheric data can be used to determine current MUF conditions.
*   **Software Tools:** Various software tools and online services utilize complex ionospheric models to predict MUF for specific communication paths.

**Balanis (2016)** and **Collin (2001)** discuss these empirical methods and the underlying physics of ionospheric modeling.

#### 5.3 Other Related Frequencies

*   **Basic MUF (BMUF):** The MUF calculated for a flat Earth.
*   ** berpengaruh (Affected) MUF (AMUF):** The MUF adjusted for the curvature of the Earth and ionosphere, which is the practically used MUF.
*   **Median MUF:** The MUF value that is exceeded 50% of the time.
*   **3000 km MUF:** A standard value quoted from ionospheric charts, representing the MUF for a transmission distance of 3000 km.

---

### 6. Importance of MUF in Practical Radio Communication Systems

Understanding and utilizing MUF is crucial for reliable radio communication, especially for High Frequency (HF) bands (3-30 MHz) that rely on skywave propagation.

*   **Frequency Selection:** Operators choose frequencies within the range of LUF to MUF for a specific communication path. Using frequencies above the MUF will result in the signal not being reflected back to Earth, leading to no communication. Using frequencies below the LUF will result in excessive absorption and weak or no reception.
*   **Communication Reliability:** By operating close to the OWF (around 85% of MUF), the highest probability of establishing and maintaining a stable skywave link is achieved.
*   **Predictive Communication:** Knowledge of MUF variations allows for planning communication schedules and selecting appropriate frequencies for long-distance links in advance.
*   **System Design:** Antenna designs and transmission power can be optimized based on expected MUF conditions for a given path.
*   **Understanding Communication Blackouts:** During periods of intense solar activity (e.g., solar flares), the D layer can become highly absorptive, leading to radio blackouts, particularly for lower HF frequencies. MUF predictions help anticipate these conditions.

**Raju (2009)** often provides practical examples of HF communication system design where MUF is a primary consideration.

---

### 7. Examples

#### Example 1: Simple MUF Calculation

A radio signal is to be transmitted to a distance where the angle of elevation of the ray from the ionospheric reflection point is 45 degrees. The critical frequency of the F2 layer is 10 MHz.

*   Angle of incidence $\theta = 90^\circ - 45^\circ = 45^\circ$.
*   $MUF \approx f_c \times \sec \theta = 10 \, \text{MHz} \times \sec(45^\circ) = 10 \, \text{MHz} \times \sqrt{2} \approx 14.14 \, \text{MHz}$.

**Interpretation:** For this path, frequencies up to approximately 14.14 MHz can be used for reliable communication via the F2 layer.

#### Example 2: Considering LUF

Suppose for a particular path, the MUF is 25 MHz and the LUF is 8 MHz.

*   **Possible Frequencies:** Any frequency between 8 MHz and 25 MHz can be used.
*   **Optimum Working Frequency (OWF):** $OWF \approx 0.85 \times MUF = 0.85 \times 25 \, \text{MHz} = 21.25 \, \text{MHz}$.

**Interpretation:** Operating at 21.25 MHz would offer the most reliable communication. Using frequencies below 8 MHz would likely result in too much absorption, and frequencies above 25 MHz would not be reflected.

---

### 8. Practice Questions and Exercises

1.  **Define Critical Frequency and Maximum Usable Frequency.**
    *   **Answer:**
        *   Critical Frequency ($f_c$): The highest frequency that will be reflected back to Earth by a specific ionospheric layer when the radio waves are incident vertically on the ionosphere.
        *   Maximum Usable Frequency (MUF): The highest frequency that can be used for reliable skywave propagation between two points on the Earth's surface for a given path and time.

2.  **List the main factors that affect the Maximum Usable Frequency (MUF).**
    *   **Answer:** Ionospheric electron density, layer height, geographic location, time of day, season, solar cycle, and angle of incidence.

3.  **If the critical frequency of the E layer is 8 MHz, what is the MUF for a communication path where the angle of incidence is 70 degrees? Use the secant law approximation.**
    *   **Answer:**
        Angle of incidence $\theta = 70^\circ$.
        $f_c = 8 \, \text{MHz}$.
        $MUF \approx f_c \times \sec \theta = 8 \, \text{MHz} \times \sec(70^\circ) \approx 8 \, \text{MHz} \times 2.924 \approx 23.39 \, \text{MHz}$.

4.  **Explain why the MUF is always greater than the critical frequency.**
    *   **Answer:** The MUF is greater than the critical frequency because skywave propagation typically involves oblique incidence (transmission at an angle), not vertical incidence. At oblique angles, the ionosphere appears "thicker" to the wave, allowing it to refract higher frequencies. The secant law mathematically describes this increase with the angle of incidence.

5.  **Describe the role of the ionosphere in radio wave propagation.**
    *   **Answer:** The ionosphere, a region of ionized gases, acts as a refractive medium for radio waves. It can bend or reflect radio waves, especially in the High Frequency (HF) band, enabling long-distance communication by bouncing signals off the ionospheric layers back to Earth.

6.  **A communication system operates in the HF band. The MUF for a specific path is predicted to be 20 MHz, and the LUF is predicted to be 5 MHz. What is the optimum working frequency?**
    *   **Answer:**
        OWF $\approx 0.85 \times MUF = 0.85 \times 20 \, \text{MHz} = 17 \, \text{MHz}$.
        The operating frequency should be around 17 MHz for the best reliability.

---

### 9. Important Points to Remember

*   **MUF is path-dependent and time-dependent.**
*   **Higher electron density in the ionosphere leads to higher MUF.**
*   **The secant law ($MUF \approx f_c \times \sec \theta$) is a fundamental relationship, but real-world calculations use more complex models.**
*   **HF communication relies heavily on MUF predictions for reliable operation.**
*   **OWF is typically 85% of MUF for optimal performance.**
*   **The F2 layer is generally responsible for the highest MUF values.**

---

This concludes the study notes on Maximum Usable Frequency. Understanding MUF is crucial for anyone involved in HF radio communication planning, design, and operation.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
