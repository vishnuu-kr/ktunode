---
title: "Critical frequency"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 4: Radio Wave Propagation"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7fa"
status: "completed"
scrapedAt: "2026-05-23T18:12:14.671Z"
---
# ANTENNA THEORY AND DESIGN - Module 4: Radio Wave Propagation

## Topic: Critical Frequency

### 1. Introduction to Radio Wave Propagation and the Ionosphere

Radio waves, when propagating through the Earth's atmosphere, interact with different layers. The ionosphere, a region of the upper atmosphere (roughly 60 km to 1000 km altitude), is ionized by solar ultraviolet (UV) radiation. This ionization creates a plasma of free electrons and ions. The behavior of radio waves propagating through the ionosphere is crucial for long-distance communication, especially in the High Frequency (HF) and Very High Frequency (VHF) bands.

**Key Concept:** The ionosphere acts as a refractive and reflective medium for radio waves, enabling skywave propagation.

**Relevant Textbooks:**
*   **Balanis, C.A. (2016). *Antenna Theory: Analysis and Design*. (4th Ed.).** Balanis extensively covers wave propagation phenomena, including ionospheric effects, in its chapters on propagation. (Refer to chapters related to wave propagation, likely towards the end of the book).
*   **Collin, R.E. (2001). *Antennas and radio Wave propagation*. (2nd Ed.).** Collin provides detailed mathematical treatments of radio wave propagation, including ionospheric models.

**Course Outcome Alignment:**
*   **CO4:** Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2). This topic directly addresses the modes enabled by the ionosphere.

---

### 2. Ionospheric Layers and Their Properties

The ionosphere is not a uniform layer but is stratified into several sub-regions or layers, each with varying electron densities and characteristics. These layers influence radio wave propagation differently.

*   **D Layer (approx. 60-90 km):** Primarily present during daylight hours. Has a relatively low electron density. It absorbs HF radio waves, especially at lower frequencies. It plays a significant role in daytime radio propagation.
*   **E Layer (approx. 90-130 km):** Present both day and night, but more pronounced during the day. Has a moderate electron density. Can reflect HF waves. Sporadic E (Es) phenomena can cause unusual propagation.
*   **F Layer (approx. 130-1000 km):** This is the most important layer for long-distance HF communication. It further divides into:
    *   **F1 Layer (approx. 130-210 km):** Present during the day, merges with F2 at night.
    *   **F2 Layer (approx. 210-1000 km):** The highest and most ionized layer. It is responsible for most long-distance HF skywave propagation. Its electron density varies significantly with time of day, season, and solar activity.

**Key Concepts:**
*   **Electron Density ($N_e$):** The number of free electrons per unit volume. This is the primary factor determining the refractive properties of the ionosphere.
*   **Plasma Frequency ($f_p$):** The natural oscillation frequency of free electrons in a plasma. It is directly proportional to the square root of the electron density.

**Formula for Plasma Frequency:**
$f_p = \sqrt{\frac{N_e e^2}{\epsilon_0 m_e}}$

Where:
*   $N_e$ = electron density (electrons/$m^3$)
*   $e$ = elementary charge ($1.602 \times 10^{-19}$ C)
*   $\epsilon_0$ = permittivity of free space ($8.854 \times 10^{-12}$ F/m)
*   $m_e$ = rest mass of an electron ($9.109 \times 10^{-31}$ kg)

**Important Point to Remember:** The plasma frequency represents the frequency below which radio waves are reflected by the ionosphere and above which they pass through.

---

### 3. The Concept of Critical Frequency

The **critical frequency** ($f_c$) is a fundamental parameter that defines the maximum frequency of a radio wave that will be reflected vertically (at 90 degrees incidence) by a specific ionospheric layer. For frequencies above the critical frequency, the wave will penetrate the ionosphere and escape into space.

**Key Definition:** Critical Frequency ($f_c$) is the highest frequency that will be reflected by a given ionospheric layer when the radio wave is incident normally (vertically) upon it.

**Relationship to Electron Density:**
The critical frequency is directly related to the maximum electron density ($N_{e,max}$) of an ionospheric layer.

**Formula for Critical Frequency:**
$f_c = f_p = \sqrt{\frac{N_{e,max} e^2}{\epsilon_0 m_e}}$

This can be simplified to:
$f_c = 9\sqrt{N_{e,max}}$ (where $f_c$ is in MHz and $N_{e,max}$ is in electrons/$cm^3$)

**Example:**
If the maximum electron density in the F2 layer is $10^6$ electrons/$cm^3$, the critical frequency for that layer would be:
$f_c = 9\sqrt{10^6} = 9 \times 10^3 = 9000$ kHz = 9 MHz.

**Important Point to Remember:** The critical frequency is a property of the ionospheric layer itself, dependent on its electron density. It's the frequency that is *just* reflected at vertical incidence.

---

### 4. Frequency of Maximum Usage (FMU) and Maximum Usable Frequency (MUF)

While the critical frequency defines reflection at vertical incidence, most skywave propagation involves oblique incidence (at an angle to the vertical).

*   **Frequency of Maximum Usage (FMU):** This is the highest frequency that can be used for communication between two specific points via skywave propagation at a particular time, considering all propagation factors. FMU is typically 85% of MUF.

*   **Maximum Usable Frequency (MUF):** The MUF is the highest frequency that can be reflected by the ionosphere for a given path between two points at a specific time. It is always higher than the critical frequency for the same ionospheric layer because of the oblique angle of incidence.

**Relationship between Critical Frequency and MUF:**
The MUF is related to the critical frequency ($f_c$) of the reflecting layer by the **secant law**:

$MUF = f_c \times sec(\theta)$

Where:
*   $\theta$ is the angle of incidence of the radio wave on the ionosphere.

**Example:**
If the critical frequency of a layer is 5 MHz, and the angle of incidence is 60 degrees, the MUF would be:
$MUF = 5 \text{ MHz} \times \sec(60^\circ) = 5 \text{ MHz} \times 2 = 10 \text{ MHz}$.

**Important Points to Remember:**
*   For frequencies *below* the MUF, skywave propagation is possible between the two points.
*   For frequencies *above* the MUF, the waves will penetrate the ionosphere.
*   The MUF varies significantly with time of day, season, geographic location, and solar cycle.

**Relevant Textbooks:**
*   **Raju, G.S.N. (2009). *Antenna and Wave Propagation*. (1st Ed.).** Raju's book often provides practical insights and graphical representations related to MUF and ionospheric propagation. (Look for chapters on ionospheric propagation and skywave).
*   **Milligan, T.A. (2005). *Modern Antenna Design*. (2nd Ed.).** Milligan discusses the practical aspects of antenna systems for various propagation environments, including HF communication.

---

### 5. Factors Affecting Critical Frequency and MUF

The critical frequency and consequently the MUF are not constant but vary due to several factors:

*   **Electron Density Variation:**
    *   **Time of Day:** Solar UV radiation is strongest during the day, leading to higher electron densities and thus higher critical frequencies and MUFs. At night, recombination reduces electron density, lowering critical frequencies and MUFs, especially in the lower layers (D and E). The F2 layer often remains ionized at night, supporting long-distance communication.
    *   **Season:** Seasonal variations in solar radiation angle and intensity affect ionospheric ionization. Summer generally exhibits higher ionization.
    *   **Solar Cycle:** The 11-year solar cycle (sunspot cycle) has a significant impact. Periods of high solar activity (solar maximum) result in increased UV and X-ray radiation, leading to higher electron densities, higher critical frequencies, and higher MUFs. Conversely, solar minimum sees lower values.
    *   **Geographic Location:** The Earth's magnetic field influences ionization patterns. Equatorial regions have specific phenomena like the equatorial anomaly.

*   **Angle of Incidence ($\theta$):** As seen in the secant law, the angle at which the wave strikes the ionosphere directly affects the MUF. For a fixed critical frequency, a smaller angle of incidence (steeper take-off angle) leads to a higher MUF for that path.

*   **Earth's Magnetic Field:** While not directly in the simple $f_c$ formula, the Earth's magnetic field influences the behavior of free electrons and leads to phenomena like Faraday rotation and magneto-ionic splitting of waves, which are more advanced considerations.

**Important Point to Remember:** Understanding these variations is crucial for predicting optimal frequencies for HF communication.

---

### 6. Practical Implications and Applications

The concept of critical frequency is fundamental to understanding and utilizing skywave propagation for:

*   **Shortwave Radio Broadcasting:** HF bands (3-30 MHz) are used for long-distance broadcasting, and the selection of operating frequencies depends heavily on the MUF.
*   **Amateur Radio (Ham Radio):** Ham operators rely on skywave propagation to communicate globally. They use propagation prediction tools based on ionospheric data to choose appropriate frequencies.
*   **Over-the-Horizon Radar:** Some radar systems utilize ionospheric reflection to detect targets beyond the geometric horizon.
*   **Communications Systems:** Military, aviation, and maritime communications often utilize HF bands for long-range, reliable communication, especially in areas where satellite communication may not be available.

**Example:**
If a radio operator wants to communicate with someone 3000 km away, they would consult an ionospheric prediction chart or software. This would give them the MUF for that path at a specific time. They would then choose an operating frequency that is below the MUF, typically around 85% of the MUF (i.e., the FMU), to ensure reliable reflection and avoid sporadic outages.

**Relevant Textbooks:**
*   **Kraus, J.D. (2002). *Antennas for all applications*. (3rd Ed.).** Kraus provides a broad overview of antennas and their applications, including discussions on HF antennas and their operating environment.
*   **Singh, A.K., Abegaonkar, M.P., Koul, S.K. (2021). *Metamaterials for Antenna Applications*. (2nd Ed.).** While focused on metamaterials, advanced antenna design texts sometimes touch upon the propagation environments for which these antennas are designed, including ionospheric effects relevant to HF antennas.

**Course Outcome Alignment:**
*   **CO4:** Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2). This section reinforces the practical importance of understanding these parameters.

---

### 7. Practice Questions and Answers

**Question 1:**
Define critical frequency in your own words. What is the relationship between critical frequency and the electron density of an ionospheric layer?

**Answer:**
Critical frequency ($f_c$) is the highest radio frequency that will be reflected back to Earth by a particular layer of the ionosphere when the radio wave strikes it at a 90-degree angle. It is directly proportional to the square root of the maximum electron density ($N_{e,max}$) of that ionospheric layer, as described by the formula $f_c = 9\sqrt{N_{e,max}}$.

**Question 2:**
A particular ionospheric layer has a critical frequency of 7 MHz. Calculate the MUF for this layer if the angle of incidence is 55 degrees.

**Answer:**
Using the secant law:
$MUF = f_c \times \sec(\theta)$
$MUF = 7 \text{ MHz} \times \sec(55^\circ)$
$MUF = 7 \text{ MHz} \times 1.7434$
$MUF \approx 12.20 \text{ MHz}$

**Question 3:**
Which ionospheric layer is primarily responsible for long-distance HF communication during the day, and why?

**Answer:**
The F2 layer is primarily responsible for long-distance HF communication during the day. This is because it has the highest electron density among the ionospheric layers, resulting in the highest critical frequencies and MUFs, allowing for the reflection of a wider range of frequencies needed for global communication.

**Question 4:**
How does solar activity (e.g., sunspot cycle) affect the critical frequency and MUF?

**Answer:**
During periods of high solar activity (solar maximum), the Sun emits more UV and X-ray radiation. This increased radiation leads to higher ionization in the ionosphere, resulting in increased electron densities. Consequently, the critical frequencies and MUFs of the ionospheric layers increase, enabling communication on higher frequencies and potentially over longer distances. Conversely, during solar minimum, critical frequencies and MUFs are lower.

**Question 5:**
A radio operator wants to establish a reliable communication link using skywave propagation. They determine the MUF for their desired path and time is 15 MHz. What frequency would they likely choose to operate on, and why?

**Answer:**
The operator would likely choose a frequency below 15 MHz. A common practice is to select a frequency that is about 85% of the MUF, which is known as the Frequency of Maximum Usage (FMU).
FMU = 0.85 * MUF = 0.85 * 15 MHz = 12.75 MHz.
This frequency provides a good margin for reliable communication, as frequencies too close to the MUF are more susceptible to disruption and outages due to minor fluctuations in ionospheric conditions.

---

### 8. Summary and Key Takeaways

*   The ionosphere is crucial for skywave propagation, enabling long-distance radio communication.
*   **Critical Frequency ($f_c$)** is the maximum frequency reflected vertically by an ionospheric layer. It depends directly on the layer's electron density ($N_e$).
*   **Maximum Usable Frequency (MUF)** is the highest frequency that can be reflected for a specific communication path at an oblique angle.
*   The **secant law ($MUF = f_c \times \sec(\theta)$)** relates MUF to critical frequency and the angle of incidence.
*   The MUF is always greater than the critical frequency for oblique incidence.
*   Critical frequencies and MUFs are dynamic and vary with time of day, season, solar cycle, and geographic location.
*   Understanding these parameters is essential for selecting optimal operating frequencies for HF communications.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
