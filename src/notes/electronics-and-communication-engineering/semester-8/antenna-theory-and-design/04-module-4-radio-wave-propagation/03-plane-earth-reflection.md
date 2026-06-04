---
title: "Plane earth reflection"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 4: Radio Wave Propagation"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7f2"
status: "completed"
scrapedAt: "2026-05-23T18:12:08.239Z"
---
# ANTENNA THEORY AND DESIGN - Module 4: Radio Wave Propagation

## Topic: Plane Earth Reflection

---

### 1. Introduction to Plane Earth Reflection

**1.1. Importance in Radio Wave Propagation:**
Radio waves, especially at lower frequencies and over long distances, interact with the Earth's surface. The Earth, in many scenarios, can be approximated as a plane conductor or dielectric. Understanding how radio waves reflect off this plane is crucial for predicting signal strength, coverage, and multipath effects. This concept is fundamental to Course Outcome 4 (CO4): Explain the different modes and parameters of radio wave propagation.

**1.2. Idealized Model:**
For analytical purposes, the Earth's surface is often idealized as:
*   **Perfectly Conducting Plane:** Assumes infinite conductivity, meaning there is no loss of energy upon reflection. This is a good approximation for frequencies where the Earth behaves as a conductor.
*   **Dielectric Plane:** Considers the permittivity and conductivity of the Earth's material, leading to reflections that depend on the electrical properties of the surface. This is more realistic for understanding ground wave propagation and reflections from various types of terrain.

**1.3. Key Concepts:**
*   **Reflection:** The phenomenon where a wave bounces off a surface.
*   **Incident Wave:** The wave that strikes the surface.
*   **Reflected Wave:** The wave that bounces off the surface.
*   **Angle of Incidence:** The angle between the incident wave and the normal to the surface.
*   **Angle of Reflection:** The angle between the reflected wave and the normal to the surface. For reflection from a plane, the angle of incidence equals the angle of reflection.
*   **Reflection Coefficient:** A complex number that describes the amplitude and phase change of a wave upon reflection. It depends on the polarization of the wave, the angle of incidence, and the electrical properties of the reflecting surface.

---

### 2. Reflection from a Perfectly Conducting Plane

**2.1. Scenario:**
A transmitting antenna at height $h_t$ and a receiving antenna at height $h_r$ are positioned above a perfectly conducting plane (e.g., a large metal sheet). The antennas are separated by a horizontal distance $d$.

**2.2. Images:**
The reflection of a wave from a perfectly conducting plane can be mathematically modeled by introducing an "image" antenna.
*   **Transmitting Antenna:** An imaginary "image" antenna is placed at a depth $h_t$ below the conducting plane.
*   **Receiving Antenna:** Similarly, an "image" receiving antenna is placed at a depth $h_r$ below the conducting plane.

**2.3. Ray Diagram and Path Difference:**
The total received signal is the sum of two components:
*   **Direct Ray:** The wave traveling directly from the transmitting antenna to the receiving antenna.
*   **Ground-Reflected Ray:** The wave traveling from the transmitting antenna, reflecting off the conducting plane, and then reaching the receiving antenna.

![Plane Earth Reflection - Ray Diagram](https://i.imgur.com/12345.png)  *(Illustrative image - actual image would show antennas and reflection path)*

*   **Distance of Direct Ray ($r_0$):** Using Pythagorean theorem, $r_0 = \sqrt{d^2 + (h_t - h_r)^2}$.
*   **Distance of Reflected Ray ($r_1$):** The reflected ray travels from the transmitting antenna to the ground and then to the receiving antenna. This is equivalent to the distance between the transmitting antenna and the image receiving antenna (or vice versa).
    $r_1 = \sqrt{d^2 + (h_t + h_r)^2}$.

**2.4. Phase Difference:**
The path difference between the reflected ray and the direct ray is $\Delta r = r_1 - r_0$.
The phase difference ($\Delta \phi$) is related to the path difference by:
$\Delta \phi = \frac{2\pi}{\lambda} (r_1 - r_0)$
where $\lambda$ is the wavelength of the radio wave.

**2.5. Reflection Coefficient for a Perfectly Conducting Plane:**
For a perfectly conducting plane, the phase change upon reflection depends on the polarization.
*   **Vertical Polarization (TE Mode):** The electric field is perpendicular to the plane of incidence. The reflection coefficient is $\Gamma_v = -1$. This signifies a 180-degree phase shift upon reflection.
*   **Horizontal Polarization (TM Mode):** The magnetic field is perpendicular to the plane of incidence. The reflection coefficient is $\Gamma_h = +1$. This signifies no phase shift upon reflection.

**2.6. Total Received Field:**
The total field at the receiver is the vector sum of the direct and reflected fields.
$E_{total} = E_{direct} + E_{reflected}$
$E_{total} = E_{direct} + \Gamma E_{direct\_image}$ (where $E_{direct\_image}$ represents the field from the image antenna at the receiver location, accounting for its distance).

For antennas with the same polarization and assuming they are omnidirectional in the vertical plane for simplicity (as a first approximation), the received field magnitude at the receiver can be approximated as:
$|E_{total}| \approx |E_{direct}| + |\Gamma E_{reflected\_from\_image}|$
$|E_{total}| \approx |E_{direct}| + |\Gamma| |E_{direct}|$ (assuming identical antennas and propagation conditions except for distance and reflection)

The field strength is proportional to the inverse of the distance. So, $|E_{direct}| \propto \frac{1}{r_0}$ and $|E_{reflected\_from\_image}| \propto \frac{1}{r_1}$.
Since the antennas are typically identical and operating in the same way (except for distance), we can write:
$E_{total} \approx E_0 \left( \frac{e^{-j\beta r_0}}{r_0} + \Gamma \frac{e^{-j\beta r_1}}{r_1} \right)$
where $E_0$ is a constant related to the transmitted power and antenna gain, and $\beta = 2\pi/\lambda$.

**2.7. Effect of Phase Difference:**
The total field strength varies with distance and height due to the interference between the direct and reflected waves.
*   **Constructive Interference:** Occurs when the phase difference is an even multiple of $\pi$ ($ \Delta \phi = 2n\pi$). This leads to a stronger signal.
*   **Destructive Interference:** Occurs when the phase difference is an odd multiple of $\pi$ ($ \Delta \phi = (2n+1)\pi$). This leads to a weaker signal.

This interference pattern creates "lobes" and "nulls" in the vertical radiation pattern, which is a key characteristic of plane earth reflection.

**Important Point:** For a perfectly conducting Earth, the phase shift upon reflection is $\pi$ (180 degrees) for vertical polarization and 0 for horizontal polarization. This is a crucial distinction that affects the interference pattern. (Refer to Balanis, Chapter 3 and 4 on reflection coefficients).

---

### 3. Reflection from a Dielectric Plane (Earth)

**3.1. Scenario:**
The Earth is not a perfect conductor. It has dielectric properties characterized by its permittivity ($\epsilon$) and conductivity ($\sigma$). These properties influence the reflection coefficient.

**3.2. Reflection Coefficients:**
The reflection coefficients for a dielectric surface are more complex and depend on:
*   **Polarization:** Vertical (TE) and Horizontal (TM) polarization.
*   **Angle of Incidence ($\theta_i$):** The angle at which the wave strikes the surface.
*   **Electrical Properties of the Surface:** Permittivity ($\epsilon_r$) and conductivity ($\sigma$). The intrinsic impedance of the medium is given by $\eta_2 = \sqrt{\frac{j\omega\mu}{\sigma + j\omega\epsilon}}$, where $\omega$ is the angular frequency, $\mu$ is the permeability, and $\epsilon = \epsilon_r \epsilon_0$ is the permittivity.

**3.3. Fresnel Equations:**
The reflection coefficients for a dielectric interface are given by the Fresnel equations. For a wave propagating from a medium with intrinsic impedance $\eta_1$ (e.g., air) to a medium with intrinsic impedance $\eta_2$ (e.g., Earth):
*   **For Vertical Polarization (TE):**
    $\Gamma_v = \frac{\eta_2 \cos\theta_i - \eta_1 \cos\theta_t}{\eta_2 \cos\theta_i + \eta_1 \cos\theta_t}$
*   **For Horizontal Polarization (TM):**
    $\Gamma_h = \frac{\eta_2 \cos\theta_t - \eta_1 \cos\theta_i}{\eta_2 \cos\theta_t + \eta_1 \cos\theta_i}$

Here, $\theta_t$ is the angle of transmission, related to the angle of incidence by Snell's Law: $\cos\theta_t = \sqrt{1 - (\frac{\eta_1}{\eta_2}\sin\theta_i)^2}$.

**3.4. Characteristics of Dielectric Reflection:**
*   **Magnitude of Reflection Coefficient:** For most Earth surfaces (soil, water) at typical radio frequencies, the magnitude of the reflection coefficient $|\Gamma|$ is less than 1. This means some energy is absorbed by the Earth.
*   **Phase Shift:** The phase shift upon reflection is not always $\pi$ or 0. It varies with the angle of incidence and the electrical properties of the surface.
*   **Brewster Angle:** For vertically polarized waves (TM), there exists a Brewster angle ($\theta_B$) at which the reflection coefficient $\Gamma_v$ becomes zero. This means there is no reflected wave for that specific polarization and angle. $\tan \theta_B = \frac{\eta_2}{\eta_1}$ for a dielectric (non-conducting) medium. For a conducting medium, the concept is similar but the formula involves conductivity. (Refer to Collin, Chapter 4 on reflection from surfaces).
*   **Grazing Angle ($\theta_g \approx 90^\circ$):** At very low angles of incidence (near horizontal), the reflection coefficient for smooth surfaces tends to approach $+1$ for horizontal polarization and $-1$ for vertical polarization, similar to a perfect conductor. This is important for tropospheric propagation and ground wave propagation.

**Important Point:** The reflection coefficient for a dielectric is frequency, angle, polarization, and Earth property dependent. This leads to more complex multipath scenarios than with a perfect conductor. (Refer to Balanis, Chapter 4 on reflection from surfaces).

---

### 4. Examples and Applications

**4.1. AM Broadcasting:**
AM radio waves at frequencies around 1 MHz can travel long distances by ground wave propagation. The reflection from the Earth's surface plays a significant role in the field strength at different distances. The interaction with the Earth's dielectric properties influences the signal attenuation and coverage area. (Relevant to CO4).

**4.2. VHF/UHF Communication (e.g., FM Radio, TV Broadcasting):**
At VHF/UHF frequencies, the propagation is primarily line-of-sight. However, reflections from the ground, buildings, and other objects can cause multipath interference, leading to signal fading (scintillation) and ghosting in TV reception. Plane earth reflection is a simplified model to understand these effects. (Relevant to CO4, and implicitly to CO3 for understanding multipath effects in antenna design).

**4.3. Radar Systems:**
Ground clutter in radar systems is often caused by reflections from the Earth's surface. Understanding plane earth reflection helps in designing radar systems to discriminate between target echoes and ground reflections.

**4.4. Skywave Propagation:**
While skywave propagation involves ionospheric reflection, the initial reflection from the Earth's surface at the point of transmission and reception also needs to be considered for accurate path loss calculations.

---

### 5. Practice Questions and Answers

**Question 1:**
A transmitting antenna is located at a height of 10 m above a perfectly conducting plane. A receiving antenna is at a height of 5 m and a horizontal distance of 100 m from the transmitter. If the wavelength of the signal is 20 m, what is the path difference between the direct ray and the ground-reflected ray?

**Answer 1:**
Given:
$h_t = 10$ m
$h_r = 5$ m
$d = 100$ m
$\lambda = 20$ m

Distance of direct ray ($r_0$):
$r_0 = \sqrt{d^2 + (h_t - h_r)^2} = \sqrt{100^2 + (10 - 5)^2} = \sqrt{10000 + 25} = \sqrt{10025} \approx 100.125$ m

Distance of reflected ray ($r_1$):
$r_1 = \sqrt{d^2 + (h_t + h_r)^2} = \sqrt{100^2 + (10 + 5)^2} = \sqrt{10000 + 15^2} = \sqrt{10000 + 225} = \sqrt{10225} = 101.119$ m

Path difference ($\Delta r$):
$\Delta r = r_1 - r_0 = 101.119 - 100.125 = 0.994$ m

**Question 2:**
For the scenario in Question 1, if the transmitting antenna is vertically polarized and the receiving antenna is also vertically polarized, what is the phase difference between the direct and reflected rays at the receiving antenna? Will the interference be constructive or destructive?

**Answer 2:**
Phase difference ($\Delta \phi$):
$\Delta \phi = \frac{2\pi}{\lambda} \Delta r = \frac{2\pi}{20} \times 0.994 = \frac{\pi}{10} \times 0.994 \approx 0.312\pi$ radians

Reflection coefficient for vertical polarization from a perfect conductor ($\Gamma_v = -1$), which introduces a $\pi$ (180 degree) phase shift.

Total phase difference, including reflection:
Total phase difference = (Phase difference due to path) + (Phase shift due to reflection)
Total phase difference = $0.312\pi + \pi = 1.312\pi$ radians.

Since the total phase difference is not an integer multiple of $\pi$ (i.e., neither $n\pi$ nor $(2n+1)\pi$), the interference is neither perfectly constructive nor perfectly destructive. However, it is closer to constructive interference than destructive because the phase difference due to path is relatively small compared to the $\pi$ shift from reflection.

**Question 3:**
What is the significance of the Brewster angle in the context of plane earth reflection?

**Answer 3:**
The Brewster angle is the angle of incidence at which the reflection coefficient for vertically polarized (TM) waves from a dielectric surface becomes zero. This means that at the Brewster angle, there is no reflected vertically polarized wave. This phenomenon can lead to a reduction in multipath effects for vertically polarized signals when the angle of incidence matches the Brewster angle. For horizontally polarized (TE) waves, the reflection coefficient approaches unity at grazing angles, and for dielectric surfaces, it also has a minimum but not necessarily zero.

---

### 6. Important Points to Remember

*   **Image Theory:** A powerful tool for analyzing reflections from a perfectly conducting plane.
*   **Path Difference:** Determines the relative phase between direct and reflected rays.
*   **Phase Shift on Reflection:** Crucial for determining constructive or destructive interference. It's $\pi$ for vertically polarized waves and $0$ for horizontally polarized waves reflecting off a perfect conductor.
*   **Dielectric Properties:** For non-perfectly conducting Earth, reflection coefficients (Fresnel equations) depend on polarization, angle of incidence, permittivity, and conductivity.
*   **Interference Pattern:** Plane earth reflection leads to lobes and nulls in the vertical radiation pattern due to interference.
*   **Grazing Angle:** At very low angles of incidence, reflections are strong, similar to perfect conductors.
*   **Applications:** Understanding plane earth reflection is vital for AM broadcasting, VHF/UHF coverage, radar clutter, and general multipath analysis.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 7. Textbook and Reference Incorporations

This topic is extensively covered in:
*   **Balanis, Antenna Theory: Analysis and Design (4th Ed.)**: Chapters 3 (Radiation and Integration Methods) and 4 (Antenna Parameters) discuss wave propagation and reflection, including reflection from surfaces.
*   **Collin, Antennas and Radio Wave Propagation (2nd Ed.)**: Chapter 4 (Reflection and Refraction of Plane Waves) provides a detailed mathematical treatment of reflections from various surfaces, including dielectric and conducting planes, and the derivation of Fresnel coefficients.
*   **Raju, Antenna and Wave Propagation (1st Ed.)**: This book likely covers ground wave propagation and reflection phenomena as part of radio wave propagation.

While microstrip antenna design books (Garg, Choudhury) and metamaterials books (Singh et al.) might not focus solely on plane earth reflection as a primary topic, the principles of wave interaction with surfaces are foundational and can be implicitly understood in the context of how antennas interact with their environment. Pozar's Microwave Engineering also touches upon propagation and reflections in microwave systems. Milligan's Modern Antenna Design will also discuss propagation effects relevant to antenna performance.

---

### 8. Alignment with Course Outcomes

*   **CO4 (Knowledge Level K2): Explain the different modes and parameters of radio wave propagation.**
    This topic directly addresses this outcome by explaining the phenomenon of plane earth reflection as a mode of radio wave propagation and detailing parameters like path difference, phase difference, and reflection coefficients that govern its behavior.

*   **CO3 (Knowledge Level K4): Analyse and design advanced antennas.**
    Understanding plane earth reflection is crucial for analyzing antenna performance in real-world environments where ground reflections are present. For instance, designing antennas for ground-based mobile communication systems requires considering the multipath effects caused by ground reflections to optimize coverage and minimize fading. This topic provides the fundamental analysis required for such designs.

*   **CO1 (Knowledge Level K3): Analyse the radiation mechanism of antennas.**
    While not directly about radiation mechanisms, the received field strength in plane earth reflection is a consequence of the radiated field interacting with the Earth. Analyzing the resultant field at the receiver involves understanding how the radiated waves propagate and transform due to reflection, thus indirectly relating to the analyzed radiated fields.