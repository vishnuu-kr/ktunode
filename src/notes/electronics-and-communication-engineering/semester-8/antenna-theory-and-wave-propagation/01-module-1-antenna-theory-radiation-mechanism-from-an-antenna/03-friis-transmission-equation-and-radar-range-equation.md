---
title: "Friis Transmission Equation and Radar Range Equation."
subject: "ANTENNA THEORY AND WAVE PROPAGATION"
module: "Module 1: Antenna theory : Radiation mechanism from an antenna"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff762"
status: "completed"
scrapedAt: "2026-05-23T18:12:19.358Z"
---
# ANTENNA THEORY AND WAVE PROPAGATION

## Module 1: Antenna Theory: Radiation Mechanism from an Antenna

### Topic: Friis Transmission Equation and Radar Range Equation

---

### Learning Outcomes Covered:

*   **LO1: Understand the fundamental principles behind the Friis Transmission Equation and its applications.**
*   **LO2: Comprehend the derivation and components of the Radar Range Equation and its significance in radar system design.**
*   **LO3: Analyze the factors influencing the performance of wireless communication and radar systems based on these equations.**
*   **LO4: Apply the Friis Transmission Equation and Radar Range Equation to solve practical problems.**

---

### Introduction (CO1: Analyze the radiation mechanism of antennas - K3)

Understanding how antennas transmit and receive electromagnetic energy is fundamental to antenna theory. The **Friis Transmission Equation** and the **Radar Range Equation** are two cornerstone equations that quantify the power received in different electromagnetic systems, directly linking antenna characteristics to system performance. They allow us to predict and design for effective communication and detection ranges.

---

## 1. Friis Transmission Equation

The Friis Transmission Equation describes the power received by an antenna from a transmitting antenna in a free-space environment. It relates the received power to the transmitted power, the distance between antennas, and the characteristics of the antennas (gain).

**Key Concepts & Definitions:**

*   **Isotropic Radiator:** A theoretical antenna that radiates power equally in all directions. Its gain is 1 (or 0 dBi). It serves as a reference for antenna gain.
*   **Antenna Gain (G):** The ratio of the radiation intensity in a given direction to that of an isotropic radiator, for the same input power. It's a measure of how well an antenna concentrates power in a particular direction.
    *   $G = \frac{\text{Radiation Intensity in a given direction}}{\text{Radiation Intensity of an isotropic radiator}}$
    *   Often expressed in decibels (dBi) relative to an isotropic radiator.
*   **Power Density (W/m²):** The amount of power flowing through a unit area perpendicular to the direction of propagation.
*   **Effective Aperture (A_e):** The effective area of an antenna that captures power from an incoming electromagnetic wave. It is related to the antenna's gain and wavelength.
    *   $A_e = \frac{\lambda^2}{4\pi} G$
    *   Where $\lambda$ is the wavelength.

**Derivation and Equation:**

Consider a transmitting antenna with input power $P_t$.

1.  **Power Density at the Transmitting Antenna:** If the transmitting antenna were isotropic and had a gain $G_t$, the power density at a distance $R$ would be:
    $W_t = \frac{P_t G_t}{4\pi R^2}$ (W/m²)

2.  **Power Captured by the Receiving Antenna:** The receiving antenna, with effective aperture $A_{er}$, intercepts a portion of this power. The received power $P_r$ is:
    $P_r = W_t A_{er}$

3.  **Relating Effective Aperture to Gain:** We know that $A_{er} = \frac{\lambda^2}{4\pi} G_r$, where $G_r$ is the gain of the receiving antenna.

4.  **Substituting and Simplifying:**
    $P_r = \left(\frac{P_t G_t}{4\pi R^2}\right) \left(\frac{\lambda^2}{4\pi} G_r\right)$
    $P_r = P_t G_t G_r \left(\frac{\lambda}{4\pi R}\right)^2$

This is the **Friis Transmission Equation**.

**In terms of Power Density:**

The power density at the receiving antenna, $W_r$, can be expressed as:
$W_r = W_t A_{er} / A_{er} = W_t G_r / (4\pi)$ where $A_{er}$ is normalized. A more direct way is:
$W_r = \frac{P_t G_t}{4\pi R^2}$ (This is the power density at distance R from the transmitter, assuming the transmitter's gain is $G_t$).

Then, the received power is $P_r = W_r A_{er}$.
$P_r = \left(\frac{P_t G_t}{4\pi R^2}\right) \left(\frac{\lambda^2}{4\pi} G_r\right)$
$P_r = P_t G_t G_r \left(\frac{\lambda}{4\pi R}\right)^2$

**Important Points to Remember (Friis Transmission Equation):**

*   It is valid for **line-of-sight propagation** in **free space**.
*   It assumes **matched polarization** between antennas.
*   It quantifies the **power delivered to the receiver's input terminals**.
*   The term $(\frac{\lambda}{4\pi R})^2$ represents the **space loss** or **path loss**.
*   Gain is a key factor; higher gain antennas concentrate power, leading to better received signal strength.

**Applications:**

*   **Point-to-point wireless communication:** Satellite links, microwave links, Wi-Fi.
*   **Predicting signal strength:** Estimating received power based on distance, frequency, and antenna gains.
*   **Designing communication systems:** Determining required transmit power or antenna gains for a desired received signal level.

**Example (Friis Transmission Equation):**

A transmitter with $P_t = 10$ W, $G_t = 10$ dB, and a receiver with $G_r = 5$ dB are separated by $R = 10$ km. The operating frequency is $f = 2$ GHz. Calculate the received power $P_r$.

**Solution:**

1.  **Convert gains to linear scale:**
    $G_t(\text{linear}) = 10^{10/10} = 10$
    $G_r(\text{linear}) = 10^{5/10} = 10^{0.5} \approx 3.16$

2.  **Calculate wavelength ($\lambda$):**
    $c = 3 \times 10^8$ m/s
    $f = 2 \times 10^9$ Hz
    $\lambda = \frac{c}{f} = \frac{3 \times 10^8}{2 \times 10^9} = 0.15$ m

3.  **Calculate the path loss term:**
    $\frac{\lambda}{4\pi R} = \frac{0.15}{4\pi \times 10 \times 10^3} = \frac{0.15}{40000\pi} \approx 1.194 \times 10^{-6}$

4.  **Apply the Friis Transmission Equation:**
    $P_r = P_t G_t G_r \left(\frac{\lambda}{4\pi R}\right)^2$
    $P_r = 10 \times 10 \times 3.16 \times (1.194 \times 10^{-6})^2$
    $P_r \approx 316 \times (1.426 \times 10^{-12})$
    $P_r \approx 4.5 \times 10^{-10}$ W

    **In dBm (more practical for received power):**
    $P_r (\text{dBm}) = 10 \log_{10} \left(\frac{P_r (\text{W})}{1 \text{ mW}}\right) = 10 \log_{10} \left(\frac{4.5 \times 10^{-10} \text{ W}}{10^{-3} \text{ W}}\right)$
    $P_r (\text{dBm}) = 10 \log_{10} (4.5 \times 10^{-7}) \approx 10 \times (-6.35) \approx -63.5$ dBm

---

## 2. Radar Range Equation

The Radar Range Equation describes the maximum range at which a radar system can detect a target. It is similar to the Friis Transmission Equation but includes additional factors related to the target's characteristics and the radar's receiver sensitivity.

**Key Concepts & Definitions:**

*   **Radar System:** Transmits electromagnetic pulses and analyzes the reflected signals (echoes) from targets.
*   **Target Radar Cross-Section ($\sigma$):** The effective area of a target that reflects radar energy back to the radar. It's a measure of the target's "visibility" to radar and depends on the target's size, shape, material, and aspect angle. It is measured in m².
*   **Minimum Detectable Signal ($P_{r,min}$):** The weakest received signal power that the radar receiver can reliably detect, usually determined by the noise level in the receiver.
*   **Radar Bandwidth (B):** The range of frequencies over which the radar operates. It influences the noise power in the receiver.
*   **Noise Figure (NF):** A measure of the noise introduced by the radar receiver itself.

**Derivation and Equation:**

Consider a radar system transmitting a pulse of power $P_t$ with an antenna gain $G$.

1.  **Power Density at the Target:** The power density at the target at a distance $R$ is:
    $W_t = \frac{P_t G}{4\pi R^2}$ (W/m²)

2.  **Power Reflected by the Target:** The target intercepts a portion of this power density and re-radiates it. The amount of power reradiated in the direction of the radar is determined by its radar cross-section $\sigma$. The power density back at the radar from the target is:
    $W_r(\text{at radar}) = W_t \frac{\sigma}{4\pi R^2}$
    $W_r(\text{at radar}) = \left(\frac{P_t G}{4\pi R^2}\right) \left(\frac{\sigma}{4\pi R^2}\right)$
    $W_r(\text{at radar}) = \frac{P_t G \sigma}{(4\pi)^2 R^4}$ (W/m²)

3.  **Power Received by the Radar Antenna:** The radar antenna, with effective aperture $A_e$, captures this power density.
    $P_r = W_r(\text{at radar}) A_e$
    Using $A_e = \frac{\lambda^2}{4\pi} G$:
    $P_r = \left(\frac{P_t G \sigma}{(4\pi)^2 R^4}\right) \left(\frac{\lambda^2}{4\pi} G\right)$
    $P_r = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R^4}$

This is the **Pulsed Radar Range Equation** (for a single pulse). For a system that averages multiple pulses (e.g., MTJ), the equation is slightly modified, but the core relationship remains.

**Minimum Required Received Power:**

The radar can detect a target only if the received power $P_r$ is greater than or equal to the minimum detectable signal $P_{r,min}$.
$P_r \ge P_{r,min}$
$\frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R^4} \ge P_{r,min}$

**Maximum Range ($R_{max}$):**

To find the maximum range, we set $P_r = P_{r,min}$:
$\frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R_{max}^4} = P_{r,min}$

Solving for $R_{max}$:
$R_{max}^4 = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 P_{r,min}}$
$R_{max} = \left(\frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 P_{r,min}}\right)^{1/4}$

This is the **Radar Range Equation**.

**Including System Losses (L):**

In real systems, there are losses (e.g., atmospheric attenuation, transmission line losses, antenna mismatch). These are represented by a factor $L \ge 1$. The equation becomes:
$R_{max} = \left(\frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 P_{r,min}}\right)^{1/4} \left(\frac{1}{L}\right)^{1/4}$

**The Role of $P_{r,min}$:**

$P_{r,min}$ is often expressed in terms of the noise power $N$ in the receiver's bandwidth $B$ and the required signal-to-noise ratio (SNR).
$P_{r,min} = (\text{SNR})_{min} \times N$
The noise power $N$ is given by:
$N = k T_0 B \cdot \text{NF}$
Where:
*   $k$ is Boltzmann's constant ($1.38 \times 10^{-23}$ J/K).
*   $T_0$ is the standard temperature ($290$ K).
*   $B$ is the receiver bandwidth (Hz).
*   NF is the receiver noise figure.

So, $P_{r,min} = (\text{SNR})_{min} \cdot k T_0 B \cdot \text{NF}$.

Substituting this into the Radar Range Equation gives a more complete form:
$R_{max} = \left(\frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 k T_0 B (\text{SNR})_{min} \text{NF}}\right)^{1/4} \left(\frac{1}{L}\right)^{1/4}$

**Important Points to Remember (Radar Range Equation):**

*   Range is proportional to the **fourth root** of transmitted power, gain, wavelength, and radar cross-section.
*   Range is inversely proportional to the **fourth root** of the minimum detectable signal.
*   **Doubling the transmit power increases the range by only about 19%** ($2^{1/4} \approx 1.189$).
*   **Doubling the antenna gain quadruples the range** ($G^2$ term).
*   **Doubling the target's radar cross-section increases the range by about 19%**.
*   The $R^4$ dependence makes radar range highly sensitive to distance.

**Applications:**

*   **Radar system design:** Determining the required transmit power, antenna gain, or receiver sensitivity for a specific detection range.
*   **Performance prediction:** Estimating the maximum detection range for a given radar and target.
*   **Target detection capability:** Understanding how target characteristics affect detectability.

**Example (Radar Range Equation):**

A search radar operates at $f = 1.25$ GHz with $P_t = 500$ kW, $G = 40$ dB, and requires an SNR of 10 dB. The receiver has a noise figure of 6 dB. The minimum detectable signal $P_{r,min} = 1 \times 10^{-13}$ W. Assume a target with $\sigma = 10 \text{ m}^2$ and total system losses $L=5$. Calculate the maximum range $R_{max}$.

**Solution:**

1.  **Convert parameters to linear values:**
    $P_t = 500 \times 10^3$ W
    $G = 10^{40/10} = 10^4$
    $\text{SNR}_{min}(\text{linear}) = 10^{10/10} = 10$
    $L = 5$

2.  **Calculate wavelength ($\lambda$):**
    $f = 1.25 \times 10^9$ Hz
    $\lambda = \frac{c}{f} = \frac{3 \times 10^8}{1.25 \times 10^9} = 0.24$ m

3.  **Calculate $P_{r,min}$ using kTB formula (optional, as $P_{r,min}$ is given):**
    $k = 1.38 \times 10^{-23}$ J/K
    $T_0 = 290$ K
    $B$ is not given. If it were, we'd use it. Since $P_{r,min}$ is provided, we use that.

4.  **Apply the Radar Range Equation:**
    $R_{max} = \left(\frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 P_{r,min}}\right)^{1/4} \left(\frac{1}{L}\right)^{1/4}$

    Numerator:
    $P_t G^2 \lambda^2 \sigma = (500 \times 10^3) \times (10^4)^2 \times (0.24)^2 \times 10$
    $= (5 \times 10^5) \times (10^8) \times (0.0576) \times 10$
    $= 5 \times 10^{13} \times 0.576 = 2.88 \times 10^{13}$

    Denominator:
    $(4\pi)^3 P_{r,min} = (4\pi)^3 \times (1 \times 10^{-13})$
    $\approx (63.3) \times (1 \times 10^{-13}) = 6.33 \times 10^{-12}$

    Term inside the first parenthesis:
    $\frac{2.88 \times 10^{13}}{6.33 \times 10^{-12}} \approx 4.55 \times 10^{24}$

    First part of $R_{max}$:
    $(4.55 \times 10^{24})^{1/4} \approx (4550 \times 10^{21})^{1/4} \approx 25.9 \times 10^{5.25}$
    Let's use a calculator: $(4.55 \times 10^{24})^{0.25} \approx 2.59 \times 10^6$ m

    Second part of $R_{max}$ (loss factor):
    $(1/L)^{1/4} = (1/5)^{1/4} \approx (0.2)^{0.25} \approx 0.67$

    $R_{max} = (2.59 \times 10^6) \times 0.67 \approx 1.74 \times 10^6$ m
    $R_{max} \approx 1740$ km

---

### Connecting to Course Outcomes:

*   **CO1: Analyze the radiation mechanism of antennas (Knowledge Level: K3):** Both equations are direct applications of how antennas radiate and capture energy. The gain term ($G$) is central, linking the equations to antenna directivity and radiation patterns. The effective aperture ($A_e$) in Friis directly relates to how an antenna "collects" power from the wave, which is an outcome of its radiation mechanism.
*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4):** While not directly about microstrip antenna design, understanding these equations is crucial for realizing the performance of any antenna, including microstrip antennas. If you design a microstrip antenna with a certain gain, these equations allow you to predict its effectiveness in a system.
*   **CO3: Analyze and design advanced antennas (Knowledge Level: K4):** For advanced antennas (e.g., phased arrays, reconfigurable antennas), their overall system performance is evaluated using these fundamental equations. The gain of an array or the change in gain of a reconfigurable antenna directly impacts the transmission and radar ranges calculated by these formulas.
*   **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2):** These equations are derived assuming free-space propagation. They form the baseline against which other propagation effects (like fading, diffraction, multipath) are compared. Understanding the free-space path loss is the first step to understanding more complex propagation models.

---

### Practice Questions & Exercises:

**Question 1 (Friis Transmission Equation):**

A communication system operates at 10 GHz. The transmitting antenna has a gain of 15 dBi, and the receiving antenna has a gain of 12 dBi. The transmit power is 1 W. If the antennas are separated by 20 km in free space, what is the received power in dBm?

**Answer 1:**

1.  **Conversions:**
    $P_t = 1$ W
    $G_t = 10^{15/10} = 10^{1.5} \approx 31.62$
    $G_r = 10^{12/10} = 10^{1.2} \approx 15.85$
    $R = 20 \text{ km} = 20 \times 10^3$ m
    $f = 10 \text{ GHz} = 10 \times 10^9$ Hz
    $\lambda = c/f = (3 \times 10^8) / (10 \times 10^9) = 0.03$ m

2.  **Friis Equation:**
    $P_r = P_t G_t G_r \left(\frac{\lambda}{4\pi R}\right)^2$
    $P_r = 1 \times 31.62 \times 15.85 \times \left(\frac{0.03}{4\pi \times 20 \times 10^3}\right)^2$
    $P_r \approx 501.1 \times \left(\frac{0.03}{251327}\right)^2$
    $P_r \approx 501.1 \times (1.19 \times 10^{-7})^2$
    $P_r \approx 501.1 \times (1.42 \times 10^{-14}) \approx 7.12 \times 10^{-12}$ W

3.  **Convert to dBm:**
    $P_r (\text{dBm}) = 10 \log_{10} (7.12 \times 10^{-12} / 10^{-3})$
    $P_r (\text{dBm}) = 10 \log_{10} (7.12 \times 10^{-9}) \approx 10 \times (-8.15) \approx -81.5$ dBm

---

**Question 2 (Radar Range Equation):**

A radar system has the following parameters:
$P_t = 1$ MW ($10^6$ W)
$G = 30$ dB
$\lambda = 0.1$ m
$\sigma = 5 \text{ m}^2$
$P_{r,min} = 10^{-14}$ W
System losses $L = 4$

Calculate the maximum range of the radar.

**Answer 2:**

1.  **Conversions:**
    $P_t = 10^6$ W
    $G = 10^{30/10} = 1000$
    $\lambda = 0.1$ m
    $\sigma = 5 \text{ m}^2$
    $P_{r,min} = 10^{-14}$ W
    $L = 4$

2.  **Radar Range Equation:**
    $R_{max} = \left(\frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 P_{r,min}}\right)^{1/4} \left(\frac{1}{L}\right)^{1/4}$

    Numerator:
    $P_t G^2 \lambda^2 \sigma = (10^6) \times (1000)^2 \times (0.1)^2 \times 5$
    $= 10^6 \times 10^6 \times 0.01 \times 5 = 10^{12} \times 0.05 = 5 \times 10^{10}$

    Denominator:
    $(4\pi)^3 P_{r,min} = (63.3) \times (10^{-14}) \approx 6.33 \times 10^{-13}$

    Term inside the first parenthesis:
    $\frac{5 \times 10^{10}}{6.33 \times 10^{-13}} \approx 7.89 \times 10^{22}$

    First part of $R_{max}$:
    $(7.89 \times 10^{22})^{1/4} \approx (78.9 \times 10^{21})^{1/4} \approx 2.98 \times 10^{5.25}$
    Using calculator: $(7.89 \times 10^{22})^{0.25} \approx 2.98 \times 10^5$ m

    Second part of $R_{max}$ (loss factor):
    $(1/L)^{1/4} = (1/4)^{1/4} = (0.25)^{0.25} \approx 0.707$

    $R_{max} = (2.98 \times 10^5) \times 0.707 \approx 2.11 \times 10^5$ m
    $R_{max} \approx 211$ km

---

### Important Points to Remember (Overall):

*   **Friis Transmission Equation:** Purely for received power in a communication link in free space. Sensitive to distance and antenna gains.
*   **Radar Range Equation:** For detecting targets via reflected signals. Sensitive to distance, transmit power, antenna gain, target size, and receiver sensitivity. The $R^4$ dependence is crucial.
*   Both equations highlight the importance of **antenna gain** for system performance.
*   Both assume **free-space propagation** as a baseline. Real-world propagation can significantly alter the results.
*   **Units** are critical for accurate calculations. Always ensure consistency (e.g., Watts for power, meters for distance, Hz for frequency).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### References from Textbooks/Reference Books:

*   **Antenna Theory: Analysis and Design, by Constantine A. Balanis (Wiley, 4th Edition, 2016):** Balanis dedicates chapters to the fundamental principles of radiation, antenna parameters (including gain and effective aperture), and provides detailed derivations of transmission equations and their applications in communication systems. Chapters 2 and 3 are particularly relevant for the fundamentals.
*   **Antennas and radio Wave propagation by R.E.Collin (McGraw Hill, 2/e, 2001):** Collin's text also covers the fundamentals of electromagnetic radiation and wave propagation, providing a strong theoretical basis for understanding the Friis transmission equation and its assumptions.
*   **Microwave Engineering by David M. Pozar (Wiley India, 4/e, 2012):** Pozar's book, while focused on microwave engineering, provides excellent insights into the practical aspects of RF systems, including the link budget calculations that heavily rely on the Friis transmission equation and an introduction to radar systems where the Radar Range Equation is fundamental. Chapter 1 provides an introduction to microwave systems.
*   **Antennas for all applications by J D Kraus (Tata McGraw hill, 3/e, 2002):** Kraus's classic text offers a practical approach and covers various antenna types, their gains, and how these parameters influence the performance of communication and radar systems. He often provides intuitive explanations of these equations.

---
This concludes the study notes for the Friis Transmission Equation and Radar Range Equation. Remember to practice solving problems to solidify your understanding!