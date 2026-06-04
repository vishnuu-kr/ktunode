---
title: "Sound propagation in open or a closed tube"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 2: Point source, spherical source, Line source, Monopole, dipole"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463fe8"
status: "completed"
scrapedAt: "2026-05-20T18:09:39.142Z"
---
# Acoustics and Noise Control: Module 2 - Sound Propagation in Tubes

## Topic: Sound Propagation in Open or a Closed Tube

This topic delves into how sound waves behave when confined within tubes, either open at one or both ends, or closed at one or both ends. Understanding this is crucial for analyzing sound transmission in ductwork, musical instruments, and exhaust systems.

**Course Outcomes Alignment:**

*   **CO1 (K2):** Defining acoustic terminologies and understanding wave propagation physics. This topic will introduce concepts like resonance, standing waves, and characteristic impedance, fundamental to wave behavior.
*   **CO2 (K4):** Analyzing sound transmission through different media and tubes. This is the core focus of this topic, examining how tube geometry and boundary conditions influence sound transmission.

### 1. Introduction to Sound Propagation in Tubes

Sound waves in open space (like from a point source) tend to spread out spherically, losing intensity with distance. However, when sound is channeled through a tube, its propagation is significantly altered. The tube walls can reflect the sound waves, leading to phenomena like standing waves and resonance.

**Key Concepts:**

*   **Waveguide:** A structure that guides waves, such as a tube for sound waves.
*   **Boundary Conditions:** The conditions imposed at the ends of the tube, which significantly affect the wave behavior.
*   **Reflection:** Sound waves bouncing off the ends of the tube.
*   **Transmission:** Sound waves passing through the open ends of the tube.

**Reference:**

*   **Ekinsler, Frey, Coppens, Sanders (2000):** Chapter 7 "Architectural Acoustics" and Chapter 8 "Musical Acoustics" likely discuss tube acoustics in the context of concert halls and instruments.
*   **Ver & Beranek (2006):** Chapters related to duct acoustics and mufflers would be relevant here.

### 2. Types of Tubes and Boundary Conditions

The behavior of sound in a tube is heavily dependent on the conditions at its ends.

#### 2.1 Open Tube

An open tube is open at both ends. At an open end, the air particles can move freely, leading to a **pressure node** and an **antinode of particle velocity**.

*   **Boundary Conditions at Open End:**
    *   Pressure variation is zero ($\Delta p = 0$). This is an **open end** or **free end** condition.
    *   Particle velocity is maximum.

#### 2.2 Closed Tube

A closed tube is closed at one or both ends. At a closed end, the air particles cannot move, leading to an **antinode of pressure** and a **pressure node of particle velocity**.

*   **Boundary Conditions at Closed End:**
    *   Particle velocity is zero ($u = 0$). This is a **closed end** or **rigid end** condition.
    *   Pressure variation is maximum.

#### 2.3 Partially Open/Closed Tubes

Tubes can also have one open end and one closed end, or even be closed at both ends (though less common for sound propagation studies in this context unless considering internal resonance).

### 3. Sound Propagation in an Open Tube (Both Ends Open)

This scenario is analogous to the behavior of sound in musical instruments like flutes or organ pipes.

*   **Wave Pattern:** For a tube open at both ends, **standing waves** are formed due to reflections from both ends.
*   **Resonance Conditions:** Resonance occurs when the length of the tube ($L$) is an integer multiple of half wavelengths.
    *   **Fundamental Frequency (First Harmonic):** $L = \lambda_1 / 2 \implies \lambda_1 = 2L$
    *   **Second Harmonic:** $L = \lambda_2 \implies \lambda_2 = L$
    *   **Third Harmonic:** $L = 3\lambda_3 / 2 \implies \lambda_3 = 2L/3$
    *   **General Condition:** $L = n \lambda_n / 2$, where $n = 1, 2, 3, ...$
*   **Frequencies:** The resonant frequencies ($f_n$) are given by:
    $f_n = \frac{c}{\lambda_n} = \frac{nc}{2L}$, where $c$ is the speed of sound.
    *   $f_1 = \frac{c}{2L}$ (Fundamental frequency)
    *   $f_2 = \frac{c}{L} = 2f_1$ (Second harmonic or first overtone)
    *   $f_3 = \frac{3c}{2L} = 3f_1$ (Third harmonic or second overtone)
    The resonant frequencies are integer multiples of the fundamental frequency, meaning they form an **harmonic series**.

**Important Point:** In reality, the "open end" condition is not perfectly at the end of the tube. Sound waves extend slightly beyond the opening, leading to an "end correction." For simplicity in introductory analysis, we often assume the pressure node is exactly at the end.

**Reference:**

*   **Ekinsler, Frey, Coppens, Sanders (2000):** Chapter 8 "Musical Acoustics" provides detailed derivations for open and closed pipes, including the concept of end correction.
*   **Munjal (2013):** Chapter 4 "Acoustic Filters and Silencers" would discuss duct acoustics and resonances.

### 4. Sound Propagation in a Closed Tube (One End Closed, One End Open)

This scenario is similar to a clarinet or a trumpet.

*   **Boundary Conditions:** One open end (pressure node) and one closed end (pressure antinode).
*   **Wave Pattern:** Standing waves are formed with a pressure antinode at the closed end and a pressure node at the open end.
*   **Resonance Conditions:** Resonance occurs when the length of the tube ($L$) is an odd multiple of quarter wavelengths.
    *   **Fundamental Frequency (First Harmonic):** $L = \lambda_1 / 4 \implies \lambda_1 = 4L$
    *   **Second Harmonic:** $L = 3\lambda_2 / 4 \implies \lambda_2 = 4L/3$
    *   **Third Harmonic:** $L = 5\lambda_3 / 4 \implies \lambda_3 = 4L/5$
    *   **General Condition:** $L = (2n-1) \lambda_n / 4$, where $n = 1, 2, 3, ...$
*   **Frequencies:** The resonant frequencies ($f_n$) are given by:
    $f_n = \frac{c}{\lambda_n} = \frac{(2n-1)c}{4L}$
    *   $f_1 = \frac{c}{4L}$ (Fundamental frequency)
    *   $f_2 = \frac{3c}{4L} = 3f_1$ (Third harmonic or first overtone)
    *   $f_3 = \frac{5c}{4L} = 5f_1$ (Fifth harmonic or second overtone)
    The resonant frequencies are odd multiples of the fundamental frequency, meaning they form an **odd harmonic series**.

**Important Point:** Again, end corrections apply to the open end.

**Reference:**

*   **Ekinsler, Frey, Coppens, Sanders (2000):** Chapter 8 "Musical Acoustics."
*   **Ver & Beranek (2006):** Discussions on Helmholtz resonators and duct acoustics.

### 5. Sound Propagation in a Closed Tube (Both Ends Closed)

In a tube closed at both ends, both ends act as pressure antinodes.

*   **Boundary Conditions:** Both ends have pressure antinodes (particle velocity nodes).
*   **Resonance Conditions:** Resonance occurs when the length of the tube ($L$) is an integer multiple of half wavelengths.
    *   **Fundamental Frequency:** $L = \lambda_1 / 2 \implies \lambda_1 = 2L$
    *   **General Condition:** $L = n \lambda_n / 2$, where $n = 1, 2, 3, ...$
*   **Frequencies:** The resonant frequencies ($f_n$) are given by:
    $f_n = \frac{c}{\lambda_n} = \frac{nc}{2L}$
    This results in the same harmonic series as an open tube, but the practical excitation and observation of these modes might differ.

### 6. Acoustic Impedance and Transmission in Tubes

A crucial concept for analyzing sound propagation in tubes, especially in noise control applications like mufflers, is **acoustic impedance**.

*   **Specific Acoustic Impedance ($z_s$):** The ratio of acoustic pressure ($p$) to particle velocity ($u$).
    $z_s = \frac{p}{u}$
    The unit is Pascal-second per meter (Pa·s/m) or Rayl (in SI units).

*   **Characteristic Impedance of Air ($z_0$):** The specific acoustic impedance of the medium (air) in free field.
    $z_0 = \rho_0 c$, where $\rho_0$ is the density of air and $c$ is the speed of sound.
    For air at room temperature (approx. 20°C), $\rho_0 \approx 1.21$ kg/m³ and $c \approx 343$ m/s, so $z_0 \approx 415$ Pa·s/m.

*   **Impedance at the End of a Tube:** The impedance at an end of a tube depends on the boundary condition.
    *   **Open End:** Approximately $z_s \approx 0$ (pressure antinode, velocity node). In reality, due to radiation into the open air, the impedance is slightly resistive and reactive.
    *   **Closed End:** Approximately $z_s = \infty$ (pressure antinode, velocity node). This is a good approximation for a perfectly rigid closed end.

*   **Transmission Loss (TL):** In noise control, we often want to reduce the sound transmitted through a tube (e.g., in a muffler). This is quantified by Transmission Loss.

    $TL = 10 \log_{10} \left( \frac{W_{in}}{W_{out}} \right)$, where $W_{in}$ is the sound power entering the tube and $W_{out}$ is the sound power exiting the tube.
    Alternatively, in terms of pressure: $TL = 10 \log_{10} \left( \frac{|p_{in}|^2 / Z_{in}}{|p_{out}|^2 / Z_{out}} \right)$, where $Z$ is the acoustic impedance.

**How Impedance Affects Transmission:**
Maximum transmission occurs when the impedance of the tube matches the impedance of the medium at the inlet and outlet. Maximum reflection (and thus attenuation) occurs when there is a large impedance mismatch.

*   **Mufflers/Silencers:** Devices designed to reduce noise in ductwork work by creating impedance mismatches. For example, a sudden expansion or contraction in a duct, or the use of baffles and cavities, can create impedance mismatches that reflect sound waves back towards the source, reducing the sound power transmitted downstream.

**Reference:**

*   **Ver & Beranek (2006):** Chapters on mufflers and silencers (e.g., Chapter 16) will heavily utilize acoustic impedance and transmission loss concepts.
*   **Munjal (2013):** Chapter 4 "Acoustic Filters and Silencers" is dedicated to this.
*   **Crocker (2007):** Handbook chapters on silencers and duct acoustics.

### 7. End Correction

As mentioned, the effective length of a tube for resonance is slightly longer than its physical length due to the way sound waves extend beyond the opening into the free air. This is called the end correction.

*   **For an Open Tube:** The effective length is often taken as $L + \delta$, where $\delta$ is the end correction. A common approximation for a tube of radius $r$ is $\delta \approx 0.613r$.
*   **For a Closed Tube:** The end correction is typically applied only to the open end.

This end correction shifts the resonant frequencies slightly lower than predicted by the simple formulas.

**Reference:**

*   **Ekinsler, Frey, Coppens, Sanders (2000):** Chapter 8 "Musical Acoustics."

### 8. Applications in Noise Control

*   **Duct Acoustics:** Sound generated by fans or other machinery can propagate through ductwork, causing noise pollution. Understanding resonances within ducts is crucial for designing effective silencers.
*   **Silencers/Mufflers:** These devices are essentially specially designed tubes with internal structures (baffles, resonators, absorptive materials) to create impedance mismatches and absorb sound energy, thereby reducing noise transmission.
*   **Resonant Cavities:** Sometimes used deliberately to target specific problematic frequencies.
*   **Helmholtz Resonators:** A necked cavity (like a bottle) that exhibits resonance at a specific frequency, often used for noise absorption. While not strictly a simple tube, the principles of resonance and impedance are related.

**Reference:**

*   **Ver & Beranek (2006):** Chapters on mufflers and silencers.
*   **Barron (2001):** Chapters on industrial silencers and duct acoustics.

---

### Practice Questions and Exercises

**Question 1 (CO1, CO2):**
A flute can be approximated as a cylindrical tube open at both ends. If the fundamental frequency of a flute is 261.6 Hz (Middle C), and the speed of sound in air is approximately 343 m/s, what is the approximate physical length of the flute? (Assume no end correction for simplicity).

**Answer 1:**
For a tube open at both ends, the fundamental frequency is given by $f_1 = c / (2L)$.
Rearranging for $L$: $L = c / (2f_1)$
$L = 343 \text{ m/s} / (2 \times 261.6 \text{ Hz})$
$L = 343 \text{ m/s} / 523.2 \text{ Hz}$
$L \approx 0.655$ meters or 65.5 cm.

**Question 2 (CO1, CO2):**
A clarinet is approximated as a cylindrical tube closed at one end. If its fundamental frequency is 130.8 Hz (Middle C sharp), what is its approximate physical length? (Assume no end correction for simplicity).

**Answer 2:**
For a tube closed at one end, the fundamental frequency is given by $f_1 = c / (4L)$.
Rearranging for $L$: $L = c / (4f_1)$
$L = 343 \text{ m/s} / (4 \times 130.8 \text{ Hz})$
$L = 343 \text{ m/s} / 523.2 \text{ Hz}$
$L \approx 0.655$ meters or 65.5 cm.
*Note: The calculation yields the same length as the open pipe for a lower fundamental, highlighting the difference in harmonic series.*

**Question 3 (CO1, CO2):**
Consider a tube of length 1 meter, open at both ends.
a) What are the first three resonant frequencies? (Assume $c = 343$ m/s).
b) If one end of this tube were closed, what would be the first three resonant frequencies?

**Answer 3:**
a) For an open tube: $f_n = nc / (2L)$
$f_1 = 1 \times 343 \text{ m/s} / (2 \times 1 \text{ m}) = 171.5 \text{ Hz}$
$f_2 = 2 \times 343 \text{ m/s} / (2 \times 1 \text{ m}) = 343.0 \text{ Hz}$
$f_3 = 3 \times 343 \text{ m/s} / (2 \times 1 \text{ m}) = 514.5 \text{ Hz}$

b) For a tube closed at one end: $f_n = (2n-1)c / (4L)$
$f_1 = (2 \times 1 - 1) \times 343 \text{ m/s} / (4 \times 1 \text{ m}) = 1 \times 343 \text{ m/s} / 4 \text{ m} = 85.75 \text{ Hz}$
$f_2 = (2 \times 2 - 1) \times 343 \text{ m/s} / (4 \times 1 \text{ m}) = 3 \times 343 \text{ m/s} / 4 \text{ m} = 257.25 \text{ Hz}$
$f_3 = (2 \times 3 - 1) \times 343 \text{ m/s} / (4 \times 1 \text{ m}) = 5 \times 343 \text{ m/s} / 4 \text{ m} = 428.75 \text{ Hz}$

**Question 4 (CO1, CO2):**
What is acoustic impedance? How does it relate to sound transmission in tubes and the function of mufflers?

**Answer 4:**
Acoustic impedance ($z_s$) is the ratio of acoustic pressure to particle velocity ($z_s = p/u$). It quantifies the resistance a medium or structure offers to the propagation of sound.
In tubes, impedance mismatches at the ends or internal structures cause sound wave reflection. For example, a sudden expansion in a duct creates a mismatch between the impedance inside the smaller duct and the impedance of the larger volume, reflecting sound. Mufflers are designed to incorporate such impedance mismatches (e.g., chambers, baffles) to reflect sound waves back towards the source, thus reducing the sound power transmitted downstream. A good muffler creates significant impedance mismatches at the frequencies of interest.

---

### Important Points to Remember

*   **Boundary Conditions are Key:** The behavior of sound in a tube is dictated by whether the ends are open (pressure node) or closed (pressure antinode).
*   **Standing Waves and Resonance:** Reflections from the ends of a tube cause standing waves to form. Resonance occurs at specific lengths of the tube where constructive interference leads to amplified sound.
*   **Harmonic Series:**
    *   **Open Tube (Both Ends Open):** Resonant frequencies are integer multiples of the fundamental ($f, 2f, 3f, ...$).
    *   **Closed Tube (One End Closed):** Resonant frequencies are odd integer multiples of the fundamental ($f, 3f, 5f, ...$).
*   **Acoustic Impedance:** A critical concept for understanding how sound is transmitted or reflected in tubes, especially in noise control devices like mufflers. Impedance mismatch leads to reflection and attenuation.
*   **End Correction:** The effective length of a tube for resonance is slightly longer than its physical length, especially at open ends, due to the wave extending into the surrounding medium.
*   **Applications:** Understanding tube acoustics is vital for designing HVAC duct systems, musical instruments, and noise control devices like mufflers and silencers.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
