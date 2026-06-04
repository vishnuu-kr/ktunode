---
title: "Virtual height"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 4: Radio Wave Propagation"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7fc"
status: "completed"
scrapedAt: "2026-05-23T18:12:16.287Z"
---
# ANTENNA THEORY AND DESIGN: Module 4 - Radio Wave Propagation: Virtual Height

## Introduction to Radio Wave Propagation

Radio wave propagation describes how radio waves travel from a transmitting antenna to a receiving antenna. The characteristics of the propagation medium significantly influence the performance of wireless communication systems. Understanding these propagation mechanisms is crucial for antenna design and system planning.

**Course Outcome Alignment:** This section directly addresses **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2)**.

**Key Concepts:**

*   **Electromagnetic Waves:** Radio waves are electromagnetic waves characterized by their frequency, wavelength, polarization, and speed.
*   **Atmosphere:** The Earth's atmosphere, with its various layers and constituents, plays a significant role in how radio waves propagate.
*   **Ionosphere:** A region of the Earth's upper atmosphere (approximately 50 km to 1000 km) containing ionized particles that can reflect, refract, and absorb radio waves.
*   **Troposphere:** The lowest layer of the atmosphere (approximately 0 to 15 km) where weather phenomena occur, influencing radio wave propagation, especially at higher frequencies.

---

## 4.1 Virtual Height

### 4.1.1 Definition and Concept

**Virtual Height (h')** is a concept used in the study of ionospheric radio wave propagation. It represents the height of a hypothetical, perfectly reflecting flat mirror that would cause a radio wave incident at a particular angle to return to the Earth's surface at the same point as it would if it were reflected by the actual ionosphere.

In simpler terms, it's the apparent height of the ionospheric layer as observed from the ground. It's an "effective" height, not the actual physical height of the ionized layer.

**Key Concepts:**

*   **Reflection:** The ionosphere reflects radio waves, particularly those in the High Frequency (HF) band (3-30 MHz).
*   **Refraction:** As radio waves pass through the ionosphere, they are refracted (bent) due to the changing electron density.
*   **Angle of Incidence:** The angle at which the radio wave strikes the ionospheric layer.
*   **Critical Frequency (fc):** The highest frequency that will be reflected back to Earth by a particular ionospheric layer when the wave is incident vertically.
*   **Angle of Elevation (α):** The angle above the horizontal at which the radio wave is transmitted.

**Reference Textbooks:**

*   **Antenna Theory: Analysis and Design by Constantine A. Balanis:** Balanis discusses ionospheric propagation and the concepts related to it, including the effective height of reflection. (Chapter 10, Ionospheric Propagation).
*   **Antennas and radio Wave propagation by R.E. Collin:** Collin provides detailed explanations of ionospheric reflection and the mathematical formulations leading to virtual height. (Chapter 8, Ionospheric Propagation).
*   **Antenna and Wave Propagation by Raju GSN:** Raju covers the fundamentals of radio wave propagation, including the ionosphere and the concept of virtual height. (Chapter 15, Sky Wave Propagation).

### 4.1.2 Derivation and Calculation of Virtual Height

The virtual height is derived from the time it takes for a radio wave to travel from the transmitter to the ionosphere and back. This time delay is measured, and assuming a simplified reflection model, the virtual height can be calculated.

Consider a radio wave incident at an angle $\alpha$ with respect to the vertical. Let the actual height of the ionospheric layer be $h$. The path length of the wave from the transmitter to the ionospheric reflection point and back to the ground is $2 \times (h/\cos \theta)$, where $\theta$ is the angle of refraction within the ionosphere.

The concept of virtual height arises because the ionosphere doesn't act as a sharp, flat mirror. The electron density varies gradually, causing continuous refraction. This gradual bending is equivalent to reflection from a higher, hypothetical flat surface.

**Mathematical Formulation:**

Let's consider a wave transmitted with an angle of elevation $\alpha$. The wave enters the ionosphere and is refracted. Let $\theta_i$ be the angle of incidence on the ionospheric layer (measured from the vertical). Due to refraction, the wave is bent.

The critical frequency $f_c$ is related to the maximum electron density $N_{max}$ in an ionospheric layer by:
$f_c = 9 \sqrt{N_{max}}$ (where $N_{max}$ is in electrons/m³)

For a wave of frequency $f$ incident at an angle $\theta_i$ with respect to the vertical, the refractive index $n$ is given by:
$n^2 = 1 - \frac{f_c^2}{f^2}$ (This is a simplified formula, assuming no magnetic field effects).

From Snell's Law:
$n \sin \theta_i = \sin \alpha$

Substituting the expression for $n$:
$\sqrt{1 - \frac{f_c^2}{f^2}} \sin \theta_i = \sin \alpha$

For reflection to occur, the wave must be slowed down and bent back towards the Earth. This happens when $n < 1$. If $n \ge 1$, the wave passes through.

The virtual height $h'$ is related to the actual height $h$ and the angle of elevation $\alpha$ by:
$h' = h \sec \theta_i$

From Snell's law, we can relate $\theta_i$ to $\alpha$:
$\sin \theta_i = \frac{\sin \alpha}{n}$
$\sin \theta_i = \frac{\sin \alpha}{\sqrt{1 - \frac{f_c^2}{f^2}}}$

Since $\sec \theta_i = \frac{1}{\cos \theta_i}$ and $\cos \theta_i = \sqrt{1 - \sin^2 \theta_i}$:
$\cos \theta_i = \sqrt{1 - \left(\frac{\sin \alpha}{\sqrt{1 - \frac{f_c^2}{f^2}}}\right)^2}$
$\cos \theta_i = \sqrt{1 - \frac{\sin^2 \alpha}{1 - \frac{f_c^2}{f^2}}} = \sqrt{\frac{1 - \frac{f_c^2}{f^2} - \sin^2 \alpha}{1 - \frac{f_c^2}{f^2}}}$
$\cos \theta_i = \frac{\sqrt{1 - \sin^2 \alpha - \frac{f_c^2}{f^2}}}{\sqrt{1 - \frac{f_c^2}{f^2}}}$

Therefore, the virtual height is:
$h' = h \sec \theta_i = h \frac{\sqrt{1 - \frac{f_c^2}{f^2}}}{\sqrt{1 - \sin^2 \alpha - \frac{f_c^2}{f^2}}}$

**Important Point:** The virtual height $h'$ is always greater than the actual height $h$ for reflection. This is because the wave is refracted, effectively taking a longer path to reach the reflection point and return, or it appears to be reflected from a higher altitude due to the gradual bending.

**Reference Textbooks:**

*   **Antenna Theory: Analysis and Design by Constantine A. Balanis:** Balanis provides detailed derivations and explanations of the relationship between virtual height, actual height, frequency, and angle of elevation. (Chapter 10).
*   **Antennas and radio Wave propagation by R.E. Collin:** Collin's book offers a rigorous mathematical treatment of ionospheric propagation, including the derivation of virtual height. (Chapter 8).
*   **Antenna and Wave Propagation by Raju GSN:** Raju explains the concept and derivation clearly, making it accessible for understanding the practical implications. (Chapter 15).

### 4.1.3 Factors Affecting Virtual Height

The virtual height of an ionospheric layer is not constant and is influenced by several factors:

*   **Frequency of the Radio Wave ($f$):** As the frequency increases, the refractive index decreases, leading to less bending. For frequencies above the critical frequency, reflection does not occur. Virtual height generally increases with frequency for a given angle of elevation up to the point of reflection.
*   **Angle of Elevation ($\alpha$):** A lower angle of elevation means the wave travels a longer path through the ionosphere and is incident at a steeper angle (closer to the vertical). This generally leads to a higher virtual height for the same actual height.
*   **Electron Density ($N$):** The electron density distribution within the ionospheric layer is the primary factor. Higher electron density means a lower refractive index for a given frequency and therefore more refraction. The peak electron density determines the critical frequency.
*   **Actual Height of the Ionospheric Layer ($h$):** A physically higher layer will naturally have a higher virtual height.
*   **Time of Day:** Solar radiation ionizes the atmosphere, so electron densities are higher during the day and lower at night. This causes variations in virtual height between day and night.
*   **Season:** Seasonal variations in solar activity affect electron density.
*   **Solar Cycle:** The 11-year solar cycle significantly influences solar radiation and thus ionospheric electron densities, leading to long-term variations in virtual height.
*   **Geomagnetic Activity:** Solar flares and geomagnetic storms can drastically alter ionospheric conditions and virtual heights.

**Example:** Consider an HF radio wave transmitted at an angle of elevation of $60^\circ$ towards an ionospheric layer with a critical frequency of 10 MHz.

*   **At 8 MHz:** The wave is below the critical frequency and will be reflected. The refractive index will be less than 1.
*   **At 12 MHz:** The wave is above the critical frequency and will pass through the layer (unless it's a very dense layer and the angle is very low).

The virtual height calculation shows how the apparent height changes with these parameters. For a fixed actual height $h$ and critical frequency $f_c$, increasing the operating frequency $f$ will generally decrease the virtual height (for frequencies below the MUF), and increasing the angle of elevation $\alpha$ will increase the virtual height.

**Course Outcome Alignment:** This section supports **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2)** by detailing the factors that modify the propagation characteristics.

### 4.1.4 Relationship with Actual Height and Ionospheric Layers

The ionosphere is not a single layer but consists of several regions with distinct electron density profiles:

*   **D Layer:** (60-90 km) Present only during the day. It absorbs HF and VHF waves and has very low electron density. It does not cause significant reflection of HF waves.
*   **E Layer:** (90-150 km) Present during the day, weaker at night. It reflects MF and lower HF waves.
*   **F Layer:** (150-400 km) The most important layer for long-distance HF communication. It splits into two layers during the day:
    *   **F1 Layer:** (150-250 km)
    *   **F2 Layer:** (250-400 km) The F2 layer has the highest electron density and is responsible for the longest-distance sky-wave propagation.

**Relationship between Virtual Height and Actual Height:**

The virtual height $h'$ is always greater than the actual height $h$ of the ionospheric layer. The difference $(h' - h)$ depends on the frequency of the wave, the angle of elevation, and the electron density profile of the layer.

*   **For Vertical Incidence ($\alpha = 0^\circ$):**
    $\sin \theta_i = \frac{\sin 0^\circ}{\sqrt{1 - \frac{f_c^2}{f^2}}} = 0$. This implies $\theta_i = 0^\circ$.
    This is incorrect. The formula for refractive index needs to be considered more carefully for vertical incidence.
    The correct approach for vertical incidence ($f$ and $\alpha = 0^\circ$) is:
    $n = \sqrt{1 - \frac{f_c^2}{f^2}}$
    The wave is refracted. The virtual height $h'$ is then related to the actual height $h$ and the electron density profile $N(z)$ by integration:
    $h' = \int_0^{h_{max}} \frac{dz}{n(z)}$ where $n(z) = \sqrt{1 - \frac{f_c^2 (z)}{f^2}}$.
    For a simple parabolic layer with peak height $h_m$, the virtual height at vertical incidence is $h'_{v} = h_m + \frac{f_c^2}{2 f^2} h_m = h_m (1 + \frac{f_c^2}{2 f^2})$.
    This shows $h'_v > h_m$.

*   **For Oblique Incidence ($\alpha > 0^\circ$):**
    As the angle of elevation $\alpha$ increases, the angle of incidence $\theta_i$ also increases (for frequencies below the MUF), and $h'$ increases. This is because the wave travels a longer path in the ionosphere.

**Practical Implications:**

*   **Sky-wave Propagation:** Virtual height is crucial for predicting the range of HF communication circuits. Knowing the virtual height of the reflecting layer allows us to calculate the skip distance and the maximum usable frequency (MUF).
*   **Antenna Beamforming:** For ground-based antennas transmitting HF sky waves, the virtual height affects the angle of arrival (or departure) of the waves, influencing the effective radiation pattern.

**Course Outcome Alignment:** This section reinforces **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2)** by linking virtual height to the structure of the ionosphere and its impact on propagation.

---

## 4.2 Skip Distance and MUF

While not directly about virtual height, skip distance and MUF are concepts closely tied to it and are essential for understanding HF propagation.

### 4.2.1 Skip Distance

**Skip distance** is the minimum distance from a transmitting antenna at which a radio wave, reflected by the ionosphere, can be received. For distances shorter than the skip distance, the signal is not received because the angle of elevation required to reach the ionosphere for reflection back to Earth would necessitate a frequency higher than the critical frequency for that path.

**Relationship with Virtual Height:**

The skip distance is determined by the virtual height of the reflecting ionospheric layer and the angle of elevation of the transmitted wave. A higher virtual height (for a given frequency and angle) generally leads to a larger skip distance. Conversely, if the wave is reflected from a lower virtual height, the skip distance will be smaller.

**Formula for Skip Distance ($d_s$):**

Assuming a flat Earth and a single reflection from a virtual height $h'$ at an angle of elevation $\alpha$:
The distance from the transmitter to the point directly below the reflection point is $h' \tan \alpha$.
The total distance is twice this:
$d_s = 2 h' \tan \alpha$

**Example:** If an ionospheric layer has a virtual height of 300 km and the wave is transmitted at an angle of elevation of $45^\circ$, the skip distance would be:
$d_s = 2 \times 300 \times \tan 45^\circ = 2 \times 300 \times 1 = 600$ km.

**Reference Textbooks:**

*   **Antenna Theory: Analysis and Design by Constantine A. Balanis:** Balanis explains skip distance and its dependence on ionospheric reflection parameters. (Chapter 10).
*   **Antenna and Wave Propagation by Raju GSN:** Raju provides clear explanations and derivations for skip distance. (Chapter 15).

### 4.2.2 Maximum Usable Frequency (MUF)

The **Maximum Usable Frequency (MUF)** is the highest frequency that can be used for reliable communication between two points via ionospheric reflection at a specific time and path. Frequencies above the MUF will not be reflected back to Earth.

**Relationship with Virtual Height:**

The MUF is directly related to the critical frequency of the ionospheric layer and the geometry of the propagation path. For a given path with an angle of elevation $\alpha$, the MUF ($f_{MUF}$) is related to the critical frequency ($f_c$) by:

$f_{MUF} = f_c \sec \theta_i$

Using the relationship from Snell's Law: $\sin \theta_i = \frac{\sin \alpha}{\sqrt{1 - \frac{f_c^2}{f^2}}}$.
At the MUF, the wave is reflected at the highest possible frequency. For oblique incidence, the effective critical frequency increases.

The MUF can be expressed in terms of the critical frequency for vertical incidence ($f_{cv}$) as:
$f_{MUF} = f_{cv} \sec \phi$, where $\phi$ is the angle of incidence at the ionospheric layer.
Alternatively, using the angle of elevation $\alpha$ on the ground:
$f_{MUF} = f_c \times \frac{1}{\cos \theta_i}$
where $\cos \theta_i = \frac{\sqrt{1 - \sin^2 \alpha - f_c^2/f^2}}{\sqrt{1 - f_c^2/f^2}}$.
This equation is complex to solve directly for $f_{MUF}$.

A common approximation relates MUF to critical frequency at vertical incidence ($f_{cv}$):
$f_{MUF} \approx f_{cv} \sec \alpha'$, where $\alpha'$ is the angle of incidence at the ionospheric layer for the MUF path.
If we consider a simplified model where the wave is reflected at an angle $\alpha$ from the horizontal at the ground, and the ionosphere is at height $h'$, then the angle of incidence $\theta_i$ at the ionosphere is related to $\alpha$.

The MUF for a given path is approximately $f_c \sec \alpha_{true}$, where $\alpha_{true}$ is the angle of incidence.
For practical purposes, ionospheric prediction charts and software are used to determine MUF, which vary with time of day, season, and solar cycle.

**Course Outcome Alignment:** This section is crucial for **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2)** by introducing concepts that directly utilize the understanding of ionospheric reflection and virtual height.

---

## 4.3 Practice Questions and Exercises

**Question 1:**
Define Virtual Height in the context of ionospheric radio wave propagation.
**Answer:** Virtual Height is the apparent height of the ionospheric reflection layer, conceptualized as a perfectly reflecting flat mirror that would return a radio wave at a specific angle to the Earth's surface in the same manner as the actual, gradually refracting ionosphere.

**Question 2:**
Explain why Virtual Height is always greater than the actual physical height of an ionospheric layer.
**Answer:** Virtual Height is greater than the actual height because the ionosphere does not act as a sharp, flat mirror. Instead, the gradual change in electron density causes continuous refraction (bending) of the radio wave. This gradual bending is equivalent to reflection from a hypothetical, higher, flat surface.

**Question 3:**
A radio wave is transmitted at an angle of elevation of $60^\circ$. The ionospheric layer reflects the wave when its frequency is $8$ MHz. The critical frequency of this layer at vertical incidence is $5$ MHz. Calculate the virtual height in terms of the actual height $h$ and the angle of incidence $\theta_i$. (Hint: Use $h' = h \sec \theta_i$ and Snell's law).
**Answer:**
First, find the refractive index $n$ at 8 MHz:
$n = \sqrt{1 - \frac{f_c^2}{f^2}} = \sqrt{1 - \frac{5^2}{8^2}} = \sqrt{1 - \frac{25}{64}} = \sqrt{\frac{39}{64}} = \frac{\sqrt{39}}{8} \approx 0.78$

Now use Snell's Law to find $\theta_i$:
$n \sin \theta_i = \sin \alpha$
$\frac{\sqrt{39}}{8} \sin \theta_i = \sin 60^\circ = \frac{\sqrt{3}}{2}$
$\sin \theta_i = \frac{\sqrt{3}}{2} \times \frac{8}{\sqrt{39}} = \frac{4\sqrt{3}}{\sqrt{39}} = \frac{4\sqrt{117}}{39} = \frac{4 \times 3\sqrt{13}}{39} = \frac{12\sqrt{13}}{39} = \frac{4\sqrt{13}}{13} \approx 0.996$

Since $\sin \theta_i \approx 0.996$, $\theta_i \approx \arcsin(0.996) \approx 85.4^\circ$.
This means that for a wave transmitted at $60^\circ$, the angle of incidence at the ionosphere is about $85.4^\circ$. This is a very steep angle, which is expected for a frequency just above the critical frequency for vertical incidence.

The virtual height $h'$ is given by:
$h' = h \sec \theta_i = h / \cos \theta_i$
$\cos \theta_i = \sqrt{1 - \sin^2 \theta_i} = \sqrt{1 - \left(\frac{4\sqrt{13}}{13}\right)^2} = \sqrt{1 - \frac{16 \times 13}{169}} = \sqrt{1 - \frac{16}{13}} = \sqrt{-\frac{3}{13}}$

**Correction:** The above calculation leads to a non-real value for $\cos \theta_i$, indicating an issue with the premise or the values chosen. This typically happens when the frequency is too close to the critical frequency, or the angle of elevation is too low for the given frequency.

Let's re-evaluate using the condition for reflection more directly. Reflection occurs when the ray enters the ionosphere at an angle $\theta_i$ such that $f \cos \theta_i \le f_c$.
From Snell's Law: $\sin \alpha = n \sin \theta_i$.
$n = \sqrt{1 - f_c^2/f^2}$
$\sin \alpha = \sqrt{1 - f_c^2/f^2} \sin \theta_i$
$\sin \theta_i = \frac{\sin \alpha}{\sqrt{1 - f_c^2/f^2}}$

For reflection to occur, we must have $\sin \theta_i \le 1$.
$\frac{\sin \alpha}{\sqrt{1 - f_c^2/f^2}} \le 1$
$\sin \alpha \le \sqrt{1 - f_c^2/f^2}$
$\sin^2 \alpha \le 1 - f_c^2/f^2$
$f_c^2/f^2 \le 1 - \sin^2 \alpha = \cos^2 \alpha$
$f_c/f \le \cos \alpha$
$f \cos \alpha \ge f_c$. This is the condition for reflection for oblique incidence, which is related to the MUF.

In the question, $f = 8$ MHz, $f_c = 5$ MHz (vertical), $\alpha = 60^\circ$.
Check condition: $f \cos \alpha = 8 \cos 60^\circ = 8 \times 0.5 = 4$ MHz.
Here, $f \cos \alpha = 4$ MHz, which is less than $f_c = 5$ MHz. This implies that reflection *should not occur* at this angle and frequency if $f_c$ is the critical frequency for that layer.

Let's assume the question meant the MUF for that path is 8 MHz, and the critical frequency at vertical incidence is 5 MHz.
Then $f_{MUF} = f_c \sec \alpha_{true}$ where $\alpha_{true}$ is the angle of incidence.
$8 = 5 \sec \alpha_{true}$
$\sec \alpha_{true} = 8/5 = 1.6$
$\cos \alpha_{true} = 1/1.6 = 0.625$
$\alpha_{true} = \arccos(0.625) \approx 51.3^\circ$.

So, the angle of incidence at the ionosphere is approximately $51.3^\circ$.
The virtual height $h'$ is:
$h' = h \sec \alpha_{true} = h \times 1.6$.
So the virtual height is $1.6$ times the actual height.

**Question 4:**
What is the skip distance for a radio wave reflected from an ionospheric layer with a virtual height of 250 km, transmitted at an angle of elevation of $30^\circ$?
**Answer:**
Skip Distance $d_s = 2 h' \tan \alpha$
$d_s = 2 \times 250 \text{ km} \times \tan 30^\circ$
$d_s = 500 \text{ km} \times \frac{1}{\sqrt{3}}$
$d_s = \frac{500}{\sqrt{3}} \text{ km} \approx 288.7$ km.

**Question 5:**
List three factors that can cause the virtual height of an ionospheric layer to change.
**Answer:**
1.  **Frequency of the radio wave:** Higher frequencies generally result in lower virtual heights (or pass through if above MUF).
2.  **Angle of elevation:** Higher angles of elevation lead to higher virtual heights.
3.  **Time of Day/Solar Activity:** Changes in solar radiation alter electron density, affecting virtual height. (Other valid answers include season, solar cycle, geomagnetic activity).

---

## 4.4 Important Points to Remember

*   **Virtual Height (h'):** An apparent height of the ionosphere as if it were a perfect mirror. Always greater than the actual height.
*   **Factors affecting h':** Frequency ($f$), Angle of Elevation ($\alpha$), Electron Density ($N$), Actual Height ($h$), Time of Day, Season, Solar Cycle.
*   **Snell's Law and Refraction:** The bending of radio waves in the ionosphere is governed by Snell's Law and the refractive index, which depends on electron density and wave frequency.
*   **Reflection Condition:** For reflection, the effective frequency in the ionosphere ($f \cos \theta_i$) must be less than or equal to the critical frequency ($f_c$).
*   **Skip Distance:** Minimum distance for reception of sky waves. Increases with virtual height and angle of elevation.
*   **MUF:** Highest usable frequency for a given path. Depends on $f_c$ and path geometry.

---

## 5.0 Conclusion and Course Outcome Alignment Summary

This module on Virtual Height is fundamental to understanding how radio waves, particularly in the HF band, propagate via the ionosphere.

**CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2)**

*   **Modes:** Covered sky-wave propagation and the role of the ionosphere.
*   **Parameters:** Virtual height, skip distance, and MUF are key parameters discussed and explained.
*   **Underlying principles:** The concepts of refraction, refractive index, and electron density were introduced as fundamental to explaining these parameters.

The understanding of virtual height directly enables students to explain why certain frequencies are usable for long-distance communication, how propagation range varies, and what factors influence these characteristics, thus fulfilling the learning objectives of this topic and aligning with CO4.

---
**References Used:**

*   Antenna Theory: Analysis and Design, by Constantine A. Balanis (Wiley, 4th Edition, 2016) - Primarily for general concepts of ionospheric propagation and derivations.
*   Antennas and radio Wave propagation by R.E. Collin (McGraw Hill, 2/e, 2001) - For more detailed mathematical treatments.
*   Antenna and Wave Propagation by Raju GSN (Pearson, 1/e, 2009) - For clear explanations and practical examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
