---
title: "Tropospheric waves"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 4: Radio Wave Propagation"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7f6"
status: "completed"
scrapedAt: "2026-05-23T18:12:11.452Z"
---
# ANTENNA THEORY AND DESIGN
## Module 4: Radio Wave Propagation
## Topic: Tropospheric Waves

---

### 1. Introduction to Tropospheric Waves

Tropospheric wave propagation refers to the phenomenon where radio waves travel through the Earth's troposphere, the lowest layer of the atmosphere, extending from the Earth's surface up to about 10-15 km. This mode of propagation is crucial for radio communication links operating at frequencies typically above 30 MHz, where ground wave propagation becomes ineffective and skywave propagation is not possible due to the absence of an ionosphere in the upper atmosphere.

**Key Concepts:**

*   **Troposphere:** The lowest layer of Earth's atmosphere, characterized by weather phenomena, temperature inversions, and variations in humidity and pressure.
*   **Line-of-Sight (LoS):** For frequencies above approximately 30 MHz, direct propagation between antennas is the dominant mode, limited by the Earth's curvature and obstructions.
*   **Beyond Line-of-Sight (bLoS) Propagation:** Tropospheric wave propagation allows for communication beyond the geometrical line-of-sight, primarily through scattering and refraction within the troposphere.

**Learning Outcome Alignment:**

*   **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2)** - This topic directly addresses one of the primary modes of radio wave propagation.

**References:**

*   Balanis, C. A. (2016). *Antenna Theory: Analysis and Design* (4th ed.). Wiley. (Chapter 14, Radio Wave Propagation)
*   Collin, R. E. (2001). *Antennas and Radio Wave Propagation* (2nd ed.). McGraw Hill. (Chapter 11, Tropospheric Propagation)
*   Raju, G. S. N. (2009). *Antenna and Wave Propagation* (1st ed.). Pearson. (Chapter 10, Tropospheric Propagation)

---

### 2. Mechanisms of Tropospheric Propagation

Tropospheric propagation relies on several mechanisms that enable radio waves to extend beyond the geometric line-of-sight. These mechanisms are primarily influenced by the atmospheric conditions within the troposphere.

**Key Concepts & Definitions:**

*   **Refraction:** The bending of radio waves as they pass through regions of varying refractive index in the atmosphere. The refractive index changes due to variations in temperature, pressure, and humidity.
    *   **Standard Refraction:** In a standard atmosphere, the refractive index decreases with altitude, causing radio waves to bend downwards, extending the effective range.
    *   **Atmospheric Ducting:** A phenomenon where layers of air with significantly different refractive indices form a "duct," trapping and guiding radio waves over very long distances. This is analogous to how light is guided in an optical fiber.
*   **Scattering:** The redirection of radio waves in multiple directions due to irregularities and turbulence in the troposphere. This is particularly important for frequencies above the VHF band.
    *   **Volume Scattering:** Occurs due to small-scale inhomogeneities (e.g., turbulent eddies) distributed throughout the propagation medium.
    *   **Surface Scattering:** Occurs due to reflections from rough surfaces or atmospheric layers with sharp gradients.

**Mechanisms:**

*   **Reflection:** Occurs from layers of high moisture content, such as clouds and fog, or from sharply defined gradients in the refractive index.
*   **Diffraction:** While not the primary mechanism for tropospheric propagation, diffraction around atmospheric layers or obstacles can play a minor role in certain scenarios.

**Examples:**

*   **Extended LoS Communication:** A base station antenna can communicate with a mobile unit beyond the visible horizon due to standard atmospheric refraction.
*   **Super-refraction/Ducting:** During certain weather conditions (e.g., temperature inversions over the sea), a duct can form, allowing a VHF or UHF signal to travel hundreds or even thousands of kilometers, much farther than normally predicted by LoS calculations. This can lead to unexpected interference between distant transmitters.
*   **Forward Scattering:** Used in troposcatter communication systems, where signals are scattered by turbulent atmospheric volumes to establish communication links between terminals that are not in direct line-of-sight.

**References:**

*   Balanis, C. A. (2016). *Antenna Theory: Analysis and Design*. (Chapter 14)
*   Collin, R. E. (2001). *Antennas and Radio Wave Propagation*. (Chapter 11)
*   Garg, R. (2001). *Microstrip Antenna Design Handbook*. (While not directly on propagation, understanding antenna performance in different environments is relevant.)

---

### 3. Tropospheric Propagation Parameters and Factors Affecting Propagation

The performance of tropospheric wave propagation is influenced by various atmospheric conditions and signal parameters. Understanding these factors is crucial for designing reliable communication systems.

**Key Concepts & Definitions:**

*   **Effective Earth Radius (k-factor):** To account for standard atmospheric refraction, the Earth's radius is often modified by a factor 'k'. In a standard atmosphere, k = 4/3. This effectively flattens the Earth, making LoS calculations simpler.
    *   **$k = \frac{R_e + h_a}{R_e}$**, where $R_e$ is the Earth's radius and $h_a$ is the height of the standard atmosphere where refraction effects are considered significant.
    *   **Effective Earth Radius ($R_{eff}$):** $R_{eff} = k R_e$.
*   **Radio Horizon:** The geometrical line-of-sight distance from a transmitting antenna to the Earth's surface, considering the Earth's curvature.
    *   **Distance to Horizon ($d_h$):** $d_h \approx \sqrt{2 R_e h}$, where $R_e$ is the Earth's radius and $h$ is the antenna height.
    *   **Using k-factor:** $d_h \approx \sqrt{2 R_{eff} h} = \sqrt{2 k R_e h}$.
*   **Effective Radio Horizon:** The horizon considering atmospheric refraction.
*   **Fading:** Variations in signal strength over time, which can significantly impact the reliability of tropospheric communication.
    *   **Fading due to Multipath:** Signals arriving via different paths (refraction, scattering) can interfere constructively or destructively, causing fluctuations in signal strength.
    *   **Fading due to Turbulence:** Changes in atmospheric turbulence can alter scattering and refraction characteristics.
    *   **Fading due to Ducting:** Variations in ducting conditions can cause signals to enter or leave the duct, leading to rapid fading.
*   **Antenna Height:** Crucial for LoS propagation and extending range by clearing obstructions and reaching further horizons.
*   **Frequency:** Higher frequencies (VHF, UHF, microwave) are more susceptible to scattering effects but less attenuated by atmospheric absorption compared to lower frequencies.
*   **Atmospheric Conditions:**
    *   **Temperature Gradients (Inversions):** Can lead to ducting.
    *   **Humidity Gradients:** Influence the refractive index.
    *   **Turbulence:** Responsible for scattering.
    *   **Precipitation (Rain, Fog):** Can cause attenuation and scattering, especially at higher microwave frequencies.

**Calculations:**

*   **Distance to Radio Horizon (with k-factor):**
    *   Transmitter horizon: $d_{tx} \approx \sqrt{2 k R_e h_{tx}}$
    *   Receiver horizon: $d_{rx} \approx \sqrt{2 k R_e h_{rx}}$
    *   **Total LoS distance ($d_{LoS}$):** $d_{LoS} = d_{tx} + d_{rx} \approx \sqrt{2 k R_e h_{tx}} + \sqrt{2 k R_e h_{rx}}$
    *   Where: $R_e \approx 6371$ km, $h_{tx}$ and $h_{rx}$ are antenna heights in km.

**Examples:**

*   **Calculating the range for a VHF link:** For a transmitter at 100m and a receiver at 50m, with $k=4/3$ and $R_e = 6371$ km.
    *   $h_{tx} = 0.1$ km, $h_{rx} = 0.05$ km.
    *   $d_{tx} \approx \sqrt{2 \times (4/3) \times 6371 \times 0.1} \approx \sqrt{1699} \approx 41.2$ km.
    *   $d_{rx} \approx \sqrt{2 \times (4/3) \times 6371 \times 0.05} \approx \sqrt{849.5} \approx 29.1$ km.
    *   Total LoS range $\approx 41.2 + 29.1 = 70.3$ km.
*   **Impact of ducting:** During a super-refraction event, the same link might achieve a range of 150 km or more, demonstrating the significant impact of atmospheric conditions beyond standard refraction.

**Important Points to Remember:**

*   The k-factor simplifies propagation calculations by accounting for standard refraction.
*   Antenna height is paramount for extending the line-of-sight range.
*   Fading is a critical challenge in tropospheric communication and needs to be mitigated through techniques like diversity.

**References:**

*   Balanis, C. A. (2016). *Antenna Theory: Analysis and Design*. (Chapter 14)
*   Collin, R. E. (2001). *Antennas and Radio Wave Propagation*. (Chapter 11)
*   Raju, G. S. N. (2009). *Antenna and Wave Propagation*. (Chapter 10)

---

### 4. Troposcatter Communication

Troposcatter (or tropospheric scatter) communication is a technique that utilizes the scattering of radio waves by irregularities in the troposphere to establish communication links over distances significantly beyond the normal line-of-sight.

**Key Concepts & Definitions:**

*   **Troposcatter Link:** Consists of two terminals, typically with high-gain antennas pointed towards a common volume of the troposphere.
*   **Scattering Volume:** The region in the troposphere where the beams of the two antennas intersect. This volume is typically located at an altitude of several kilometers.
*   **Scattering Angle ($\theta$):** The angle between the direction of propagation from the transmitting antenna to the scattering volume and the direction of propagation from the scattering volume to the receiving antenna.
*   **Effective Antenna Beamwidth:** The angle subtended by the scattering volume at the antenna.
*   **Frequency Range:** Typically operates in the VHF and UHF bands (30 MHz to 3 GHz), with some applications extending into the lower microwave bands.
*   **Data Rates:** Generally lower compared to LoS links due to the nature of scattering.
*   **Modulation Techniques:** Often uses Frequency Modulation (FM) or digital modulation schemes designed for poor signal conditions.

**How it Works:**

1.  **Transmission:** A highly directional antenna transmits a powerful signal into the troposphere.
2.  **Scattering:** Small-scale atmospheric irregularities (turbulent eddies, variations in humidity and temperature) scatter a portion of the transmitted signal in various directions.
3.  **Reception:** A second highly directional antenna, aimed at the same scattering volume, receives the scattered signal.

**Factors Influencing Troposcatter Performance:**

*   **Transmitting and Receiving Antenna Gain:** High gain is essential to concentrate power into the scattering volume and to capture the weak scattered signals.
*   **Transmitter Power:** Higher power increases the signal strength at the scattering volume, improving the received signal.
*   **Frequency:** Lower frequencies within the VHF/UHF range are generally scattered more effectively.
*   **Atmospheric Turbulence:** Stronger turbulence leads to more effective scattering.
*   **Antenna Beamwidth and Alignment:** The antennas must be precisely aimed to illuminate the desired scattering volume.
*   **Scattering Angle:** Optimum scattering occurs for intermediate angles (typically 1-5 degrees). Very small angles are close to LoS, and very large angles result in weak scattering.

**Examples:**

*   **Military Communications:** Troposcatter has been widely used for mobile and secure communication links in tactical situations where laying cables or establishing LoS links is not feasible.
*   **Remote Area Communication:** Providing communication services in mountainous or otherwise inaccessible regions.
*   **Early Warning Systems:** Radar systems utilizing troposcatter principles for long-range detection.

**Important Points to Remember:**

*   Troposcatter is an over-the-horizon (OTH) communication technique.
*   It relies on scattering from atmospheric inhomogeneities, not reflections from the ionosphere.
*   High-gain antennas and significant transmitter power are required.

**References:**

*   Balanis, C. A. (2016). *Antenna Theory: Analysis and Design*. (Chapter 14)
*   Collin, R. E. (2001). *Antennas and Radio Wave Propagation*. (Chapter 11)
*   Raju, G. S. N. (2009). *Antenna and Wave Propagation*. (Chapter 10)

---

### 5. Atmospheric Ducting and Its Effects

Atmospheric ducting is a significant phenomenon in tropospheric propagation, allowing signals to travel much further than the normal line-of-sight.

**Key Concepts & Definitions:**

*   **Atmospheric Duct:** A layer of the troposphere where the refractive index gradient is significantly different from the average, causing radio waves to be trapped and guided.
*   **Types of Ducts:**
    *   **Surface Ducts:** Formed near the Earth's surface, often over water due to temperature inversions.
    *   **Elevated Ducts:** Formed at higher altitudes due to stable atmospheric layers.
*   **Trapping Mechanism:** Waves entering the duct are bent back towards the duct axis by refraction. The duct acts as a waveguide, confining the electromagnetic energy.
*   **Consequences of Ducting:**
    *   **Extended Range:** Significant increase in communication range beyond the geometric horizon.
    *   **Very Flat Fading:** Signals within the duct can experience very little fading.
    *   **High Signal Strengths:** Signals can be very strong within the duct.
    *   **Multipath Interference:** Signals can arrive via different paths within the duct, causing interference.
    *   **Interference:** Distant transmitters can interfere with local receivers, and vice-versa, due to ducting.

**Conditions for Duct Formation:**

*   **Temperature Inversion:** A layer where temperature increases with altitude, which is the opposite of the normal trend. This causes a rapid decrease in refractive index with altitude within the inversion layer.
*   **Humidity Gradient:** Sharp decrease in humidity with altitude also contributes to duct formation.

**Examples:**

*   **Over-the-horizon radar:** Radar systems can exploit ducting to detect targets far beyond the normal radar horizon.
*   **Unusual TV/Radio Reception:** Long-distance reception of FM radio or TV broadcasts that are normally only received locally, often due to ducting conditions.
*   **Interference in Microwave Links:** A microwave link in one city might experience interference from a transmitter in another city hundreds of kilometers away due to a duct.

**Important Points to Remember:**

*   Ducting is a powerful mechanism for long-range propagation but can also cause significant interference problems.
*   It is highly dependent on meteorological conditions.

**References:**

*   Balanis, C. A. (2016). *Antenna Theory: Analysis and Design*. (Chapter 14)
*   Collin, R. E. (2001). *Antennas and Radio Wave Propagation*. (Chapter 11)
*   Raju, G. S. N. (2009). *Antenna and Wave Propagation*. (Chapter 10)

---

### 6. Antenna Design Considerations for Tropospheric Propagation

The design of antennas for tropospheric wave propagation applications is heavily influenced by the propagation mechanisms and desired performance.

**Key Considerations:**

*   **High Gain Antennas:** Essential for both troposcatter links (to focus power into the scattering volume and capture weak signals) and for LoS links operating at the edge of coverage or in challenging environments. Examples include parabolic dishes, horn antennas, and Yagi-Uda antennas.
    *   *Reference:* Balanis, C. A. (2016). *Antenna Theory: Analysis and Design*. (Chapters 6 & 7 on Reflector and Array Antennas)
*   **Beamwidth:** For troposcatter, the antenna beamwidth must be chosen such that the intersection volume (scattering volume) is appropriately sized and located. A narrower beam concentrates more power but requires more precise aiming.
*   **Polarization:** Orthogonal polarizations can be used for diversity to mitigate fading. Circular polarization is often preferred for troposcatter to reduce the impact of Faraday rotation (though this is less significant in the troposphere than in the ionosphere) and to mitigate polarization mismatch due to scattering.
    *   *Reference:* Balanis, C. A. (2016). *Antenna Theory: Analysis and Design*. (Chapter 2 on Antenna Parameters)
*   **Antenna Height:** As discussed, higher antennas extend the geometric LoS range. Antenna towers are often used to elevate antennas for LoS links.
*   **Antenna Diversity:** Techniques like spatial diversity (using two antennas separated vertically or horizontally) or polarization diversity can significantly improve the reliability of tropospheric links by reducing the impact of fading. This requires multiple antennas and associated feed networks.
    *   *Reference:* Choudhury, S. (2023). *Reconfigurable Antennas* (2nd ed.). IoP Publishing. (Discusses diversity and adaptive antenna systems).
*   **Frequency of Operation:** Antenna design must be optimized for the chosen frequency band. For UHF and microwave frequencies, microstrip antennas can be used, but they often require beamforming or diversity techniques for OTH propagation.
    *   *Reference:* Garg, R. (2001). *Microstrip Antenna Design Handbook*. (Relevant for designing antennas operating at frequencies where tropospheric propagation is common).
*   **Environmental Robustness:** Antennas used in outdoor environments must be designed to withstand weather conditions (rain, wind, temperature changes).

**Examples:**

*   **Parabolic Dish Antennas:** Commonly used in point-to-point microwave links and for troposcatter applications due to their high gain and directivity.
*   **Horn Antennas:** Also used for their directional properties, often as feeds for parabolic reflectors or as standalone antennas.
*   **Yagi-Uda Antennas:** Used for VHF and UHF communication where moderate gain and directivity are required.

**Learning Outcome Alignment:**

*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3)** - Understanding how antenna parameters influence propagation.
*   **CO3: Analyse and design advanced antennas (Knowledge Level: K4)** - Designing antennas specifically for the demands of tropospheric propagation, including high gain and diversity.

---

### 7. Learning Outcome Mapping & Review

Let's ensure all learning outcomes are addressed within the context of tropospheric waves.

*   **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2)**
    *   This entire module is dedicated to understanding a key mode: tropospheric propagation. Concepts like refraction, scattering, ducting, fading, and parameters like effective Earth radius, horizon distance are covered.

*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3)**
    *   Understanding how the radiation characteristics (gain, beamwidth, polarization) of antennas are critical for effective tropospheric communication (e.g., high gain for troposcatter, beamwidth for scattering volume, polarization for diversity). This involves analyzing how antenna parameters interact with the propagation medium.

*   **CO3: Analyse and design advanced antennas (Knowledge Level: K4)**
    *   Designing antennas for specific tropospheric applications involves advanced concepts. For instance, designing a dual-polarized antenna for diversity reception in a troposcatter link, or calculating the optimal beamwidth for a parabolic reflector to achieve a specific scattering volume size. This requires analyzing the link budget and propagation conditions to determine antenna specifications.

*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4)**
    *   While not directly the focus of tropospheric wave propagation itself, microstrip antennas are commonly used in communication systems operating in the VHF/UHF/microwave bands where tropospheric propagation is relevant. Designing a microstrip antenna for a point-to-point link or a mobile terminal that might rely on tropospheric extension would fall under this outcome. The design handbook by Garg is a key reference here for practical antenna design.

---

### 8. Practice Questions and Answers

**Question 1:**
Explain the concept of standard refraction in tropospheric propagation and how it extends the radio horizon.

**Answer 1:**
Standard refraction occurs because the refractive index of the troposphere generally decreases with altitude due to decreasing temperature, pressure, and humidity. As radio waves pass through these layers, they bend downwards towards the region of higher refractive index (the Earth's surface). This downward bending effectively reduces the curvature of the radio wave path compared to the Earth's curvature. Consequently, the radio horizon appears further away than the geometrical horizon, extending the line-of-sight communication range. This effect is often accounted for by using an effective Earth radius ($R_{eff}$) which is larger than the actual Earth radius ($R_e$), typically by a factor $k=4/3$.

**Question 2:**
What are the primary mechanisms responsible for tropospheric propagation beyond the line-of-sight?

**Answer 2:**
The primary mechanisms are:
1.  **Refraction:** Bending of radio waves due to variations in the refractive index of the atmosphere, particularly pronounced during temperature inversions (ducting).
2.  **Scattering:** Redirection of radio waves by small-scale inhomogeneities and turbulence within the troposphere. This is the basis for troposcatter communication.
3.  **Reflection:** From layers with high moisture content (like clouds) or sharp gradients in refractive index.

**Question 3:**
For a transmitter located at a height of 50m and a receiver at 30m, calculate the approximate distance to the radio horizon assuming a standard atmosphere (k=4/3) and Earth's radius $R_e = 6371$ km.

**Answer 3:**
Given:
$h_{tx} = 50$ m = 0.05 km
$h_{rx} = 30$ m = 0.03 km
$k = 4/3$
$R_e = 6371$ km

Distance to transmitter horizon:
$d_{tx} \approx \sqrt{2 k R_e h_{tx}}$
$d_{tx} \approx \sqrt{2 \times (4/3) \times 6371 \times 0.05}$
$d_{tx} \approx \sqrt{849.467}$
$d_{tx} \approx 29.15$ km

Distance to receiver horizon:
$d_{rx} \approx \sqrt{2 k R_e h_{rx}}$
$d_{rx} \approx \sqrt{2 \times (4/3) \times 6371 \times 0.03}$
$d_{rx} \approx \sqrt{509.68}$
$d_{rx} \approx 22.58$ km

Total LoS distance $\approx d_{tx} + d_{rx}$
Total LoS distance $\approx 29.15 + 22.58 \approx 51.73$ km

**Question 4:**
What is atmospheric ducting and what are its consequences for radio communication?

**Answer 4:**
Atmospheric ducting is a phenomenon where a layer in the troposphere has a significantly different refractive index gradient, causing radio waves to be trapped and guided along the duct. This occurs typically due to temperature inversions. Consequences include:
*   **Extended Range:** Significant increase in communication range beyond the normal line-of-sight.
*   **Strong Signals:** High signal strengths within the duct.
*   **Flat Fading:** Reduced signal variations within the duct.
*   **Interference:** Can cause interference between distant transmitters and receivers due to unexpected signal propagation.
*   **Multipath:** Signals can propagate via multiple paths within the duct, leading to interference.

**Question 5:**
Why are high-gain antennas and significant transmitter power typically required for troposcatter communication?

**Answer 5:**
Troposcatter communication relies on scattering a portion of the transmitted signal from atmospheric irregularities. The scattered signal is very weak. Therefore:
*   **High-gain antennas:** Are needed to focus the transmitted power into the scattering volume and to efficiently capture the weak scattered signal at the receiver.
*   **Significant transmitter power:** Is required to ensure that enough power reaches the scattering volume to produce a detectable scattered signal at the receiver, overcoming the losses associated with scattering and the long path lengths.

---

### 9. Important Points to Remember

*   Tropospheric propagation is dominant for frequencies above 30 MHz, enabling communication beyond the geometric line-of-sight.
*   Key mechanisms are refraction (especially ducting) and scattering.
*   Standard refraction can be modeled using an effective Earth radius ($R_{eff} = k R_e$, with $k \approx 4/3$).
*   Antenna height is crucial for extending the line-of-sight range.
*   Troposcatter utilizes scattering from atmospheric turbulence for over-the-horizon communication, requiring high-gain antennas and significant power.
*   Atmospheric ducting can dramatically extend range but also cause interference.
*   Fading is a significant issue in tropospheric propagation and can be mitigated by diversity techniques.
*   Antenna design for these applications must consider gain, beamwidth, polarization, and diversity capabilities.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
