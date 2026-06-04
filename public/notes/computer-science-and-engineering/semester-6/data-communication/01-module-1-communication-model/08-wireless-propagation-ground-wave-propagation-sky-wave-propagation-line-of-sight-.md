---
title: "Wireless propagation - Ground wave propagation, Sky wave propagation, Line-of-Sight (LoS) propagation."
subject: "DATA COMMUNICATION"
module: "Module 1: Communication model "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bee1"
status: "completed"
scrapedAt: "2026-05-20T16:51:39.556Z"
---
# Data Communication: Module 1 - Communication Model

## Topic: Wireless Propagation

This module introduces the fundamental ways wireless signals travel from a transmitter to a receiver, a critical aspect of data communication. Understanding these propagation methods is essential for designing effective wireless systems.

---

### Learning Outcomes

Upon successful completion of this topic, you should be able to:

*   Describe the characteristics and principles of Ground Wave propagation.
*   Explain the phenomenon of Sky Wave propagation, including reflection and refraction.
*   Differentiate between various types of Sky Wave propagation (e.g., hop, skip).
*   Explain the principles and limitations of Line-of-Sight (LoS) propagation.
*   Identify the frequency ranges typically associated with each propagation method.
*   Discuss the factors influencing the effectiveness of each propagation method.
*   Compare and contrast the three main wireless propagation methods.

---

### 1. Ground Wave Propagation

Ground wave propagation involves radio waves that travel along the surface of the Earth. These waves tend to follow the curvature of the Earth.

**Key Concepts & Definitions:**

*   **Ground Wave:** A radio wave that propagates by following the curvature of the Earth's surface. It is also known as **surface wave**.
*   **Earth's Curvature:** The spherical shape of the Earth significantly influences how radio waves travel.
*   **Attenuation:** The loss of signal strength as it travels. Ground waves experience significant attenuation due to absorption by the Earth and diffraction around obstacles.
*   **Earth's Conductivity:** The electrical conductivity of the ground plays a crucial role. Higher conductivity leads to less attenuation.
*   **Dielectric Constant:** Another property of the Earth that affects ground wave propagation.

**Principles:**

1.  **Following the Earth's Contour:** The electromagnetic field associated with the ground wave is coupled to the Earth's surface and essentially "rolls" along it.
2.  **Diffraction:** The waves bend around the Earth's curvature, allowing communication beyond the geometric horizon.
3.  **Attenuation:** Signal strength decreases with distance due to:
    *   **Absorption:** Energy is absorbed by the Earth.
    *   **Reflection:** Some energy is reflected off the surface.
    *   **Diffraction Loss:** Energy spreading around the curvature.

**Frequency Range:**

*   Typically used for **Very Low Frequency (VLF)**, **Low Frequency (LF)**, and **Medium Frequency (MF)** bands.
*   **VLF (3-30 kHz):** Can propagate globally, experiencing very little attenuation.
*   **LF (30-300 kHz):** Good for moderate distances.
*   **MF (300 kHz - 3 MHz):** Used for AM broadcasting and some maritime communication.

**Factors Influencing Effectiveness:**

*   **Frequency:** Lower frequencies are better for ground wave propagation due to less attenuation.
*   **Earth Conductivity:** Highly conductive surfaces (like saltwater) are ideal. Dry soil and deserts are less conductive, leading to higher attenuation.
*   **Terrain:** Rough terrain and obstacles increase signal loss.
*   **Antenna Height:** Higher antennas can improve range, especially for the initial coupling of the wave to the Earth.

**Examples:**

*   **AM Radio Broadcasting:** Many AM radio stations use ground waves to transmit signals over hundreds of kilometers, especially during the day.
*   **Maritime Communication:** Low-frequency bands are used for long-distance communication with ships at sea.
*   **Submarine Communication:** VLF is used to communicate with submarines due to its ability to penetrate seawater.

---

### 2. Sky Wave Propagation

Sky wave propagation involves radio waves that are reflected or refracted by the Earth's ionosphere, allowing them to travel over much longer distances than ground waves.

**Key Concepts & Definitions:**

*   **Ionosphere:** A region of the Earth's upper atmosphere (approximately 60-1000 km above the Earth's surface) containing ionized particles (free electrons and ions) created by solar radiation.
*   **Reflection/Refraction:** The ionosphere acts like a mirror or a prism for radio waves, bending them back towards the Earth.
*   **Critical Frequency ($f_c$):** The highest frequency that will be reflected back to Earth by a particular layer of the ionosphere when the wave strikes it vertically.
*   **Maximum Usable Frequency (MUF):** The highest frequency that can be used for sky wave propagation between two specific points on Earth. It is always greater than the critical frequency.
*   **Skip Distance:** The minimum distance between the transmitter and receiver at which a sky wave returns to Earth.
*   **Virtual Height:** The apparent height from which the sky wave appears to be reflected. This is due to the gradual bending of the wave rather than a sharp reflection.
*   **Fading:** Fluctuations in signal strength caused by various factors, including changes in the ionosphere.
*   **Layers of the Ionosphere:**
    *   **D Layer (60-90 km):** Primarily absorbs MF and HF waves during the day, virtually disappears at night.
    *   **E Layer (90-150 km):** Reflects HF waves, can reflect VHF under certain conditions.
    *   **F1 Layer (150-250 km):** Reflects HF waves during the day.
    *   **F2 Layer (250-500 km):** The most important layer for long-distance HF communication, reflecting waves even at higher frequencies. It is present day and night.
*   **Single Hop/Multiple Hops:** A signal can be reflected once (single hop) or multiple times between the ionosphere and the Earth's surface (multiple hops) to cover very long distances.

**Principles:**

1.  **Ionization:** Solar ultraviolet and X-ray radiation ionizes atmospheric gases, creating free electrons and ions.
2.  **Refraction:** As radio waves pass through the ionosphere, their speed changes due to interaction with charged particles, causing them to bend (refract).
3.  **Backscatter/Reflection:** When the angle of incidence is not too steep, the bending is sufficient to cause the wave to return to Earth. The reflection is actually a continuous bending process.
4.  **Frequency Dependence:** The degree of refraction depends on the frequency of the radio wave and the electron density of the ionosphere. Lower frequencies are refracted more easily.
5.  **Time of Day & Solar Activity:** The ionosphere's density varies with the time of day (higher during the day), season, and solar activity (solar cycles).

**Frequency Range:**

*   Primarily used for **High Frequency (HF)** bands (3-30 MHz).
*   Can also be used for **Very High Frequency (VHF)** at lower end (around 30-50 MHz) under specific ionospheric conditions (e.g., F2 layer reflection).

**Factors Influencing Effectiveness:**

*   **Frequency:** Must be below the MUF for the path and time.
*   **Ionospheric Conditions:** Electron density, layer height, and stability are crucial.
*   **Angle of Incidence:** The angle at which the wave strikes the ionosphere affects reflection.
*   **Time of Day, Season, Solar Cycle:** These influence ionospheric conditions.
*   **Earth's Magnetic Field:** Can cause effects like Faraday rotation.

**Examples:**

*   **Shortwave Radio Broadcasting:** Used by international broadcasters (e.g., BBC World Service, Voice of America) to transmit programs worldwide.
*   **Amateur Radio (Ham Radio):** HF bands are extensively used by amateur radio operators for long-distance communication.
*   **Some Maritime and Aeronautical Communications:** HF is still used for long-range voice communication.

---

### 3. Line-of-Sight (LoS) Propagation

Line-of-Sight propagation occurs when the transmitter and receiver antennas are directly visible to each other, without significant obstructions. This is the most common propagation method for many modern wireless communication systems.

**Key Concepts & Definitions:**

*   **Line-of-Sight (LoS):** A direct, unobstructed path between the transmitting and receiving antennas.
*   **Geometric Horizon:** The limit of visibility based on the Earth's curvature.
*   **Fresnel Zone:** An elliptical region around the direct LoS path. For effective LoS communication, at least 60% of the first Fresnel zone must be clear of obstructions.
*   **Obstructions:** Buildings, mountains, trees, and other physical objects that can block or reflect the signal.
*   **Fading:** Signal strength variations can occur due to multipath interference (reflections from nearby objects) or atmospheric conditions.
*   **Antenna Height:** Crucial for establishing LoS, especially over longer distances due to Earth's curvature.

**Principles:**

1.  **Direct Path:** The radio wave travels in a straight line from the transmitter to the receiver.
2.  **Earth's Curvature Limitation:** The Earth's curvature limits the range of LoS communication. The higher the antennas, the further the horizon.
3.  **Reflections:** While the primary path is direct, signals can also be reflected off the Earth's surface or other objects, potentially leading to multipath interference.
4.  **Free-Space Path Loss:** Even with a clear path, signal strength decreases with the square of the distance due to the spreading of the electromagnetic wave (inverse square law).

**Frequency Range:**

*   Widely used for **Very High Frequency (VHF)**, **Ultra High Frequency (UHF)**, **Super High Frequency (SHF)**, and **Extremely High Frequency (EHF)** bands.
*   Higher frequencies are more directional and prone to obstruction.

**Factors Influencing Effectiveness:**

*   **Antenna Height:** Directly impacts the range of LoS.
*   **Clear Path:** Absence of physical obstructions is paramount.
*   **Fresnel Zone Clearance:** Ensuring the first Fresnel zone is clear.
*   **Atmospheric Conditions:** Heavy rain or fog can cause attenuation, especially at higher frequencies (rain fade).
*   **Distance:** Signal strength decreases significantly with distance (free-space path loss).

**Examples:**

*   **Wi-Fi Networks:** Typically operate in LoS, though signals can diffract slightly around small obstacles.
*   **Cellular Communication:** Base stations and mobile phones communicate via LoS (though signals can penetrate some buildings).
*   **Microwave Links:** Used for point-to-point communication (e.g., between cell towers or for long-distance backhaul).
*   **Satellite Communication:** Direct LoS from Earth station to satellite.
*   **Bluetooth:** Short-range LoS communication.

---

### Comparison of Propagation Methods

| Feature             | Ground Wave Propagation                               | Sky Wave Propagation                                     | Line-of-Sight (LoS) Propagation                        |
| :------------------ | :---------------------------------------------------- | :------------------------------------------------------- | :----------------------------------------------------- |
| **Mechanism**       | Follows Earth's curvature                             | Reflected/Refracted by Ionosphere                        | Direct path between antennas                           |
| **Frequency Range** | VLF, LF, MF (lower frequencies)                       | HF, sometimes VHF (middle to higher frequencies)         | VHF, UHF, SHF, EHF (higher frequencies)                |
| **Range**           | Moderate to Long (depends on frequency & conductivity) | Very Long (global potential with multiple hops)          | Limited by Earth's curvature and obstructions          |
| **Obstacles**       | Less affected by Earth's surface, but terrain matters | Ionosphere is the key factor, Earth's surface for hops   | Highly affected by physical obstructions                |
| **Key Influences**  | Earth's conductivity, frequency, terrain              | Ionospheric conditions (density, layers), frequency, time | Antenna height, Fresnel zone clearance, obstructions   |
| **Applications**    | AM Radio, Maritime, Submarine comms                   | Shortwave radio, Ham radio, some long-range voice comms  | Wi-Fi, Cellular, Microwave links, Satellite, Bluetooth |
| **Attenuation**     | High due to absorption and diffraction                | Variable due to ionospheric conditions and fading        | Primarily free-space path loss, also multipath         |
| **Day/Night Effect**| Relatively stable                                     | Significantly affected (D-layer disappears at night)     | Generally unaffected (except atmospheric effects)      |

---

### Important Points to Remember

*   **Frequency is Key:** The choice of propagation method is heavily dictated by the operating frequency.
*   **Ionosphere is Dynamic:** Sky wave propagation is heavily influenced by the constantly changing ionosphere.
*   **LoS is Direct but Limited:** LoS offers simplicity and efficiency but is constrained by physical geography.
*   **No single method is perfect:** The best method depends on the application's requirements (range, reliability, bandwidth, cost).
*   **Hybrid approaches are common:** Many wireless systems utilize a combination of propagation techniques.

---

### Practice Questions & Exercises

**Multiple Choice Questions:**

1.  Which type of propagation is primarily used by AM radio broadcasts?
    a) Sky wave propagation
    b) Line-of-sight propagation
    c) Ground wave propagation
    d) Tropospheric propagation

2.  The ionosphere is crucial for which type of wireless propagation?
    a) Ground wave propagation
    b) Sky wave propagation
    c) Line-of-sight propagation
    d) Surface wave propagation

3.  Which factor significantly limits the range of Line-of-Sight (LoS) propagation?
    a) The Earth's ionosphere
    b) The Earth's magnetic field
    c) The Earth's curvature and physical obstructions
    d) The solar cycle

4.  Which frequency band is most suitable for long-distance communication using sky wave propagation?
    a) VLF (Very Low Frequency)
    b) LF (Low Frequency)
    c) MF (Medium Frequency)
    d) HF (High Frequency)

5.  For effective Line-of-Sight (LoS) communication, it is important to have clearance of at least 60% of which zone?
    a) Second Fresnel zone
    b) Third Fresnel zone
    c) First Fresnel zone
    d) Geometric horizon

**Short Answer Questions:**

6.  Explain what the "critical frequency" is in the context of sky wave propagation.
7.  Describe two factors that influence the effectiveness of ground wave propagation.
8.  What is meant by "fading" in sky wave propagation, and what can cause it?
9.  Why are higher frequencies (like UHF and above) generally limited to line-of-sight propagation?
10. Give two examples of modern wireless technologies that primarily rely on Line-of-Sight propagation.

---

### Answers to Practice Questions

**Multiple Choice Questions:**

1.  **c) Ground wave propagation**
2.  **b) Sky wave propagation**
3.  **c) The Earth's curvature and physical obstructions**
4.  **d) HF (High Frequency)**
5.  **c) First Fresnel zone**

**Short Answer Questions:**

6.  The **critical frequency** ($f_c$) is the highest frequency that will be reflected back to Earth by a particular layer of the ionosphere when the wave strikes it **vertically**. Frequencies above the critical frequency will penetrate the ionosphere.
7.  Two factors influencing ground wave propagation are:
    *   **Frequency:** Lower frequencies experience less attenuation.
    *   **Earth's Conductivity:** Highly conductive surfaces (like saltwater) reduce attenuation.
    *   **Terrain:** Smoother terrain leads to less signal loss.
    *   **Antenna Height:** Can improve initial coupling.
8.  **Fading** in sky wave propagation refers to fluctuations in signal strength. It can be caused by:
    *   **Changes in ionospheric density and height:** Variations in solar radiation and atmospheric conditions.
    *   **Multipath interference:** Signals taking slightly different paths through the ionosphere and arriving at the receiver out of phase.
    *   **Polarization changes:** The Earth's magnetic field can affect the polarization of the radio wave.
9.  Higher frequencies (UHF and above) tend to travel in straighter lines and are less affected by the ionosphere (they often pass through it). They are also more directional and are more easily blocked by obstacles and the Earth's curvature, thus limiting them to LoS.
10. Two examples of modern wireless technologies that primarily rely on Line-of-Sight propagation are:
    *   **Wi-Fi**
    *   **Cellular Communication**
    *   **Bluetooth**
    *   **Microwave links**
    *   **Satellite Communication**

---
