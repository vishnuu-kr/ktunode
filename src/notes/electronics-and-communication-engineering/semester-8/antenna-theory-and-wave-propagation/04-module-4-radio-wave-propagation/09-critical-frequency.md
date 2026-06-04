---
title: "Critical frequency"
subject: "ANTENNA THEORY AND WAVE PROPAGATION"
module: "Module 4: Radio Wave Propagation"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff78d"
status: "completed"
scrapedAt: "2026-05-23T18:12:51.989Z"
---
# ANTENNA THEORY AND WAVE PROPAGATION

## Module 4: Radio Wave Propagation

### Topic: Critical Frequency

---

**Course Outcomes Addressed:**

*   **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2)** - This topic directly contributes to understanding a key parameter influencing skywave propagation.

**Learning Outcomes Covered:**

*   Understand the concept of critical frequency and its importance in skywave propagation.
*   Learn the factors affecting critical frequency.
*   Explore the relationship between critical frequency, electron density, and the ionosphere.
*   Understand the application of critical frequency in determining the maximum usable frequency (MUF).

---

### 1. Introduction to Critical Frequency

The **critical frequency ($f_c$)** is a fundamental parameter in radio wave propagation, specifically for skywave propagation via the ionosphere. It represents the **highest frequency** at which a radio wave, incident **vertically** on an ionospheric layer, will be reflected back to Earth.

*   **Key Concept:** Reflection of radio waves from the ionosphere is due to the interaction of the waves with the free electrons present in the ionospheric layers.
*   **Importance:** Understanding critical frequency is crucial for predicting the skip distance, range, and feasibility of skywave communication at different frequencies.

---

### 2. The Ionosphere and Electron Density

The ionosphere is a region of the Earth's upper atmosphere, roughly between 60 km and 1000 km altitude, that is ionized by solar radiation. This ionization creates a plasma consisting of free electrons and positive ions.

*   **Source of Ionization:** Primarily ultraviolet (UV) and X-ray radiation from the Sun.
*   **Layers:** The ionosphere is typically divided into several layers:
    *   **D layer (60-90 km):** Absorbs HF waves, especially during the day.
    *   **E layer (90-140 km):** Reflects frequencies up to around 20 MHz.
    *   **F1 layer (140-210 km):** Reflects frequencies between E and F2 layers during the day.
    *   **F2 layer (210-500 km):** The most important layer for long-distance HF communication, reflecting higher frequencies.
*   **Electron Density (N):** The number of free electrons per unit volume. This is the primary factor determining the refractive index of the ionosphere and, consequently, the critical frequency.
    *   Electron density varies with altitude, time of day, season, and solar activity.
    *   Generally, electron density is highest in the F2 layer.

---

### 3. Derivation and Concept of Critical Frequency

The critical frequency is directly related to the electron density of the ionospheric plasma. The refractive index ($\mu$) of a plasma for an electromagnetic wave is given by:

$$ \mu = \sqrt{1 - \frac{Ne^2}{\epsilon_0 m \omega^2}} $$

Where:
*   $N$ is the electron density (electrons/m³).
*   $e$ is the charge of an electron (approximately $1.602 \times 10^{-19}$ C).
*   $\epsilon_0$ is the permittivity of free space (approximately $8.854 \times 10^{-12}$ F/m).
*   $m$ is the mass of an electron (approximately $9.109 \times 10^{-31}$ kg).
*   $\omega$ is the angular frequency of the radio wave ($\omega = 2\pi f$).

**Reflection occurs when the refractive index becomes zero.** This happens when the term inside the square root is zero:

$$ 1 - \frac{Ne^2}{\epsilon_0 m \omega_c^2} = 0 $$

Where $\omega_c$ is the critical angular frequency. Rearranging this equation:

$$ \omega_c^2 = \frac{Ne^2}{\epsilon_0 m} $$

$$ \omega_c = \sqrt{\frac{Ne^2}{\epsilon_0 m}} $$

Converting this to frequency ($f_c = \omega_c / 2\pi$):

$$ f_c = \frac{1}{2\pi} \sqrt{\frac{Ne^2}{\epsilon_0 m}} $$

This formula shows that the critical frequency is proportional to the square root of the electron density.

*   **Important Point:** This derivation assumes the wave is incident vertically and that the electron density is uniform. In reality, the ionosphere is layered and the density varies gradually.

---

### 4. Factors Affecting Critical Frequency

The critical frequency of an ionospheric layer is primarily determined by the **maximum electron density ($N_{max}$) of that layer.**

*   **Electron Density ($N_{max}$):**
    *   **Altitude:** $N_{max}$ varies with altitude. For the F2 layer, $N_{max}$ is typically around $10^{11}$ to $10^{12}$ electrons/m³.
    *   **Time of Day:** During the day, solar ionization is higher, leading to higher electron densities and thus higher critical frequencies, especially in the E and F1 layers. The F2 layer's behavior is more complex; its peak density might occur in the evening.
    *   **Season:** Seasonal variations in solar radiation affect electron density.
    *   **Solar Activity:** Solar cycles (approximately 11 years) significantly impact the intensity of solar radiation, directly affecting $N_{max}$. Higher solar activity leads to higher critical frequencies.
    *   **Geographical Location:** Different latitudes experience different amounts of solar radiation.

*   **Frequency of the Radio Wave ($f$):** The critical frequency is a property of the ionospheric layer itself at a given time. A radio wave will be reflected if its frequency is *less than or equal to* the critical frequency of the layer it encounters.

---

### 5. Critical Frequency and Reflection

*   **Vertical Incidence:** For a radio wave incident vertically on an ionospheric layer with critical frequency $f_c$:
    *   If $f < f_c$, the wave enters the ionosphere, is refracted, and returns to Earth.
    *   If $f = f_c$, the wave is reflected back.
    *   If $f > f_c$, the wave penetrates the layer and is not reflected.

*   **Oblique Incidence:** For a wave incident at an angle $\theta$ to the vertical, the reflection can occur at frequencies higher than the critical frequency. The apparent critical frequency at oblique incidence is given by:

    $$ f_{c, \text{oblique}} = f_c \sec(\theta) $$

    Where $\theta$ is the angle between the wave normal and the vertical.

    *   **Relationship to MUF:** This relationship is crucial for understanding the **Maximum Usable Frequency (MUF)**. The MUF for a given transmission path is the highest frequency that can be used for skywave communication between two points. It is related to the critical frequency of the ionospheric layer that supports the propagation.

*   **Example:** If the critical frequency of the E layer is 5 MHz, and a signal is transmitted at a 60-degree angle of incidence (i.e., $\theta$ is related to the path, but for vertical incidence, $\theta=0$). At oblique incidence, the *effective* critical frequency will be higher. If the angle of elevation from the transmitting antenna is 45 degrees, the angle of incidence with the ionospheric layer is $\theta = 90^\circ - 45^\circ = 45^\circ$.
    *   $f_{c, \text{oblique}} = 5 \text{ MHz} \times \sec(45^\circ) = 5 \text{ MHz} \times \sqrt{2} \approx 7.07 \text{ MHz}$.
    *   This means frequencies up to approximately 7.07 MHz can be reflected by the E layer at this oblique angle.

---

### 6. Critical Frequency and Maximum Usable Frequency (MUF)

The **Maximum Usable Frequency (MUF)** is a key parameter for skywave communication. It is the highest frequency that can be used for reliable communication between two points on Earth via ionospheric reflection at a particular time and path.

*   **Relationship to Critical Frequency:**
    *   MUF is determined by the critical frequency of the ionospheric layers that support the propagation.
    *   Specifically, MUF is often related to the critical frequency of the F2 layer, as it supports the highest frequencies.
    *   The MUF is not simply $f_c$ but depends on the geometry of the path and the angle of incidence. The MUF for a given path is approximately $f_c \sec(\theta)$, where $f_c$ is the critical frequency of the reflecting layer and $\theta$ is the angle of incidence at the ionosphere.

*   **Factors Affecting MUF:**
    *   Critical frequency ($f_c$) of the ionospheric layer.
    *   Angle of incidence ($\theta$).
    *   Height of the ionospheric layer.
    *   Electron density variations.

*   **Practical Consideration:** For reliable communication, the operating frequency (often called the Optimum Working Frequency, **OWF**) is typically chosen to be around 85% of the MUF. This provides a margin for fluctuations in ionospheric conditions.

---

### 7. Measuring Critical Frequency

Critical frequency is typically measured using **ionosondes**.

*   **Ionosonde Operation:** An ionosonde is a ground-based instrument that sweeps a range of radio frequencies from the ground upwards.
    *   It transmits pulses of radio waves vertically into the ionosphere.
    *   It measures the height at which these pulses are reflected back to the ground.
    *   By plotting the reflection height against frequency, an **ionogram** is produced.

*   **Interpreting Ionograms:**
    *   The ionogram shows distinct traces corresponding to reflections from different ionospheric layers (E, F1, F2).
    *   The **critical frequency ($f_c$)** for each layer is the highest frequency on the corresponding trace that is reflected vertically. This is read directly from the frequency axis where the reflection trace becomes vertical.

*   **Textbook Reference:** Balanis (4th Ed., 2016) discusses ionospheric propagation and the factors influencing it, which would include the concept of critical frequency as a reflection property. Collin (2nd Ed., 2001) also covers radio wave propagation phenomena in detail, including the ionosphere.

---

### 8. Key Points to Remember

*   **Critical Frequency ($f_c$)**: Highest frequency reflected by an ionospheric layer for vertical incidence.
*   **Ionosphere**: Region of ionized atmosphere supporting skywave propagation.
*   **Electron Density ($N$)**: Primary factor determining $f_c$; higher $N$ means higher $f_c$.
*   **Reflection Condition**: $f \le f_c$ for vertical incidence; $f \le f_c \sec(\theta)$ for oblique incidence.
*   **MUF**: Maximum Usable Frequency for a given path, related to $f_c$ and angle of incidence.
*   **Ionosonde**: Instrument for measuring $f_c$ by producing ionograms.
*   **Factors affecting $f_c$**: Time of day, season, solar activity, geographic location.

---

### 9. Practice Questions and Exercises

**Question 1:**
Define critical frequency and explain its physical significance in radio wave propagation.

**Answer 1:**
Critical frequency ($f_c$) is the highest frequency at which a radio wave, incident vertically on an ionospheric layer, will be reflected back to Earth. Its physical significance lies in setting the upper limit of frequencies that can be reflected by a particular ionospheric layer at vertical incidence, and it directly influences the maximum usable frequency for skywave communication at oblique incidence.

**Question 2:**
If the maximum electron density in the F2 layer is $5 \times 10^{11}$ electrons/m³, calculate the critical frequency for this layer. Use the following constants: $e = 1.602 \times 10^{-19}$ C, $\epsilon_0 = 8.854 \times 10^{-12}$ F/m, $m = 9.109 \times 10^{-31}$ kg.

**Answer 2:**
Using the formula: $f_c = \frac{1}{2\pi} \sqrt{\frac{Ne^2}{\epsilon_0 m}}$
$f_c = \frac{1}{2\pi} \sqrt{\frac{(5 \times 10^{11} \text{ m}^{-3})(1.602 \times 10^{-19} \text{ C})^2}{(8.854 \times 10^{-12} \text{ F/m})(9.109 \times 10^{-31} \text{ kg})}}$
$f_c = \frac{1}{2\pi} \sqrt{\frac{(5 \times 10^{11})(2.566 \times 10^{-38})}{7.071 \times 10^{-42}}}$
$f_c = \frac{1}{2\pi} \sqrt{\frac{12.83 \times 10^{-27}}{7.071 \times 10^{-42}}}$
$f_c = \frac{1}{2\pi} \sqrt{1.814 \times 10^{15}}$
$f_c = \frac{1}{2\pi} \times 4.259 \times 10^7 \text{ Hz}$
$f_c \approx 6.77 \times 10^6 \text{ Hz} = 6.77 \text{ MHz}$

**Question 3:**
A radio wave is to be reflected from the E layer of the ionosphere. If the critical frequency of the E layer is 6 MHz and the angle of incidence at the ionosphere is 30 degrees (with respect to the vertical), what is the maximum frequency that can be reflected?

**Answer 3:**
The maximum frequency that can be reflected at oblique incidence is given by $f_{max} = f_c \sec(\theta)$.
Given $f_c = 6 \text{ MHz}$ and $\theta = 30^\circ$.
$f_{max} = 6 \text{ MHz} \times \sec(30^\circ)$
$f_{max} = 6 \text{ MHz} \times \frac{1}{\cos(30^\circ)}$
$f_{max} = 6 \text{ MHz} \times \frac{1}{\sqrt{3}/2}$
$f_{max} = 6 \text{ MHz} \times \frac{2}{\sqrt{3}}$
$f_{max} \approx 6 \text{ MHz} \times 1.1547$
$f_{max} \approx 6.93 \text{ MHz}$

**Question 4:**
List three factors that influence the critical frequency of an ionospheric layer.

**Answer 4:**
1.  **Maximum Electron Density ($N_{max}$)**: The primary factor.
2.  **Time of Day**: Higher ionization during daylight hours.
3.  **Solar Activity**: Increased solar radiation during solar maximum increases electron density.
4.  **Season**: Variations in solar radiation due to Earth's tilt.
5.  **Geographical Location**: Latitude affects the intensity of solar radiation.

---

**End of Notes: Critical Frequency**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
