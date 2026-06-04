---
title: "Simple form of Radar Equation"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 3: Basics of Radar: Introduction"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff325"
status: "completed"
scrapedAt: "2026-05-23T18:10:49.965Z"
---
# SATELLITE AND RADAR COMMUNICATION

## Module 3: Basics of Radar: Introduction

### Topic: Simple Form of Radar Equation

---

### 1. Learning Outcomes Covered

This topic will help you understand:

*   **Basic principles of radar operation:** How radar detects targets. (Relates to CO3)
*   **The fundamental factors influencing radar performance:** What makes a radar work well or poorly. (Relates to CO3)
*   **How to calculate the minimum detectable signal and maximum range:** Key performance metrics for a radar system. (Relates to CO3)
*   **The impact of various radar parameters on its range:** Understanding trade-offs in radar design. (Relates to CO3)

---

### 2. Introduction to Radar

Radar, an acronym for **RAdio Detection And Ranging**, is a system that uses radio waves to determine the range, angle, or velocity of objects. It works by transmitting a radio signal and then listening for the reflected signal (echo) from the target.

**Key Concepts:**

*   **Transmitter:** Generates and emits the radio wave.
*   **Antenna:** Focuses and directs the transmitted wave and collects the reflected wave.
*   **Receiver:** Detects and amplifies the weak reflected signal.
*   **Signal Processor:** Analyzes the received signal to extract information about the target (range, velocity, etc.).
*   **Display:** Presents the processed information to the operator.

---

### 3. The Simple Form of the Radar Equation

The radar equation is a fundamental relationship that relates the **maximum range** of a radar system to its various parameters. It's derived by considering the power flow from the radar transmitter to the target and back to the receiver.

**Objective:** To determine the maximum range ($R_{max}$) at which a target can be detected.

**Derivation and Key Components:**

Let's consider the journey of the radar signal:

1.  **Transmitted Power ($P_t$):** The power output of the radar transmitter.
2.  **Antenna Gain ($G$):** The ability of the antenna to focus the transmitted power in a specific direction. It's a dimensionless quantity, often expressed in decibels (dB). A higher gain means a more directive beam.
3.  **Power Density at the Target ($S_t$):** The power transmitted is spread over a sphere of radius $R$ (the range to the target). The power density at the target is given by:
    $$S_t = \frac{P_t G}{4\pi R^2}$$
    *(Refer to Skolnik, Chapter 2, for detailed derivation of power density)*

4.  **Radar Cross-Section ($\sigma$):** This is a measure of how effectively a target reflects radar energy back towards the radar. It's the area of an isotropic scatterer that would return the same power density as the target. Units are typically square meters ($m^2$). The value of $\sigma$ depends on the target's size, shape, material, and the radar's frequency and polarization.
    *   **Isotropic Scatterer:** A hypothetical point that scatters incident power equally in all directions.
    *   *(Refer to Skolnik, Chapter 2, for detailed discussion on Radar Cross-Section)*

5.  **Power Intercepted by the Target:** The power intercepted by the target is the power density at the target multiplied by its radar cross-section:
    $$P_{intercepted} = S_t \sigma = \frac{P_t G \sigma}{4\pi R^2}$$

6.  **Power Scattered Back to the Radar:** The target scatters this intercepted power. For simplicity, we often assume the target scatters power isotropically (equally in all directions). However, in reality, the scattering is often directional. We can still represent the effectiveness of this backscatter as part of $\sigma$.

7.  **Power Density at the Radar Antenna ($S_r$):** This scattered power also spreads over a sphere of radius $R$. The power density at the radar antenna is:
    $$S_r = \frac{P_{intercepted}}{4\pi R^2} = \frac{P_t G \sigma}{(4\pi R^2)^2}$$

8.  **Effective Aperture of the Receiving Antenna ($A_e$):** The antenna not only focuses transmitted power but also collects the reflected power. The effective aperture is related to the antenna's physical size and its gain by:
    $$A_e = \frac{G \lambda^2}{4\pi}$$
    where $\lambda$ is the wavelength of the radar signal.
    *(Refer to Skolnik, Chapter 2, for the relationship between Gain and Effective Aperture)*

9.  **Received Power ($P_r$):** The power received by the radar is the power density at the antenna multiplied by its effective aperture:
    $$P_r = S_r A_e = \left(\frac{P_t G \sigma}{(4\pi R^2)^2}\right) \left(\frac{G \lambda^2}{4\pi}\right)$$
    Simplifying this, we get the **Simple Form of the Radar Equation**:
    $$P_r = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R^4}$$

**Important Note:** This equation assumes that the target is a point scatterer and doesn't account for factors like atmospheric attenuation, antenna beamwidth, signal processing losses, or the minimum detectable signal.

---

### 4. Minimum Detectable Signal ($P_{rmin}$)

The receiver in a radar system can only detect signals that are above a certain minimum level, known as the **minimum detectable signal** ($P_{rmin}$). This minimum level is determined by the noise within the receiver.

**Key Concepts:**

*   **Noise Figure ($F$):** A measure of the noise added by the receiver components. A lower noise figure means a less noisy receiver.
*   **Boltzmann's Constant ($k$):** A fundamental physical constant ($k \approx 1.38 \times 10^{-23}$ J/K).
*   **System Temperature ($T_0$):** The effective noise temperature of the radar system, including the receiver and external noise sources (e.g., atmospheric noise, sky noise).
*   **Bandwidth ($B$):** The range of frequencies over which the receiver operates. A wider bandwidth generally means more noise.

The minimum detectable signal can be approximated as:
$$P_{rmin} = k T_0 F B L_{loss}$$
where $L_{loss}$ represents system losses (e.g., losses in transmission lines, connections).

**Important Point:** For detection, the received signal power must be greater than or equal to the minimum detectable signal power:
$$P_r \ge P_{rmin}$$

---

### 5. Maximum Range ($R_{max}$) of the Radar

To find the maximum range, we set the received power ($P_r$) equal to the minimum detectable signal ($P_{rmin}$) and solve for $R$.

$$P_{rmin} = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R_{max}^4}$$

Rearranging to solve for $R_{max}$:

$$R_{max}^4 = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 P_{rmin}}$$

$$R_{max} = \left(\frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 P_{rmin}}\right)^{1/4}$$

This equation shows how the maximum range is influenced by various radar parameters.

---

### 6. Factors Affecting Radar Range (from the Radar Equation)

Let's analyze the impact of each parameter on $R_{max}$:

*   **Transmitted Power ($P_t$):** Range is proportional to $P_t^{1/4}$. Increasing transmitted power by a factor of 16 would double the maximum range.
*   **Antenna Gain ($G$):** Range is proportional to $G^{1/2}$. Doubling the antenna gain would increase the maximum range by a factor of $\sqrt{2} \approx 1.414$.
*   **Wavelength ($\lambda$):** Range is proportional to $\lambda^{1/2}$. Longer wavelengths tend to improve range for a given antenna size (as $G$ is typically inversely proportional to $\lambda^2$ for a fixed antenna area). However, longer wavelengths can also lead to poorer resolution.
*   **Radar Cross-Section ($\sigma$):** Range is proportional to $\sigma^{1/4}$. Larger targets are detectable at longer ranges.
*   **Minimum Detectable Signal ($P_{rmin}$):** Range is inversely proportional to $P_{rmin}^{1/4}$. A more sensitive receiver (lower $P_{rmin}$) extends the range.

**Example:** If you want to double the maximum range of a radar, you would need to increase the transmitted power by a factor of $2^4 = 16$.

---

### 7. Incorporating System Losses ($L$)

In a real radar system, there are always losses ($L$). These can be due to atmospheric attenuation, waveguide losses, filter losses, etc. These losses are typically greater than 1 and reduce the signal strength. They are often incorporated into the radar equation by dividing the received power by $L$.

A more comprehensive form of the radar equation often includes a total system loss factor ($L_{sys}$) in the denominator:

$$P_r = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R^4 L_{sys}}$$

And the maximum range equation becomes:

$$R_{max} = \left(\frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 P_{rmin} L_{sys}}\right)^{1/4}$$

**Important Point:** System losses decrease the maximum range.

---

### 8. Course Outcome Alignment

*   **CO1: Illustrate the principles of satellite communication (Knowledge Level: K2)**
    While this topic focuses on radar, understanding the concept of signal transmission, reception, and range limitations is a fundamental communication principle applicable to both satellite and radar systems. The basic idea of power density and inverse square law applies to both.

*   **CO3: Illustrate Radar Fundamentals like Radar Equation and Applications. (Knowledge Level: K2)**
    This topic directly addresses the core of CO3 by introducing the radar equation, defining its parameters ($P_t, G, \lambda, \sigma, P_{rmin}$), and explaining how they influence the radar's maximum range. Understanding the radar equation is crucial for understanding radar applications.

---

### 9. Important Points to Remember

*   The **Simple Radar Equation** relates transmitted power, antenna gain, wavelength, target radar cross-section, and minimum detectable signal to the radar's maximum range.
*   **Maximum range ($R_{max}$) is proportional to $\sigma^{1/4}$ and $P_t^{1/4}$**.
*   **Maximum range ($R_{max}$) is proportional to $G^{1/2}$ and $\lambda^{1/2}$**.
*   A more sensitive receiver (lower $P_{rmin}$) increases maximum range.
*   **System losses reduce the effective range** of a radar system.
*   The radar equation is a **simplification** and does not account for all real-world effects.

---

### 10. Practice Questions & Exercises

**Question 1:**
A search radar operates with the following parameters:
Transmitted Power ($P_t$) = 1 MW (MegaWatt)
Antenna Gain ($G$) = 20 dB
Wavelength ($\lambda$) = 0.1 m
Radar Cross-Section of target ($\sigma$) = 10 $m^2$
Minimum Detectable Signal ($P_{rmin}$) = $10^{-13}$ W (Watt)
System Losses ($L_{sys}$) = 3 dB (express as a factor)

Calculate the maximum range of this radar.
(Assume Boltzmann's constant $k = 1.38 \times 10^{-23}$ J/K, $T_0 = 290$ K, $B = 1$ MHz, and $F=2$ for calculating $P_{rmin}$ if needed, but for this problem, $P_{rmin}$ is directly given).

**Answer:**

First, convert all parameters to their base units:
$P_t = 1 \text{ MW} = 1 \times 10^6 \text{ W}$
$G = 20 \text{ dB} = 10^{20/10} = 10^2 = 100$
$L_{sys} = 3 \text{ dB} = 10^{3/10} \approx 1.995$ (we can approximate as 2 for simplicity in some cases, but let's use the precise value for calculation)

The formula for maximum range is:
$$R_{max} = \left(\frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 P_{rmin} L_{sys}}\right)^{1/4}$$

Let's calculate the denominator terms:
$(4\pi)^3 = (4 \times 3.14159)^3 \approx (12.566)^3 \approx 1985.4$
$P_{rmin} = 10^{-13} \text{ W}$
$L_{sys} \approx 1.995$

Numerator terms:
$P_t = 10^6 \text{ W}$
$G^2 = 100^2 = 10000$
$\lambda^2 = (0.1)^2 = 0.01 \text{ m}^2$
$\sigma = 10 \text{ m}^2$

Now substitute these values into the equation:
$$R_{max} = \left(\frac{(10^6) \times (10000) \times (0.01) \times (10)}{(1985.4) \times (10^{-13}) \times (1.995)}\right)^{1/4}$$
$$R_{max} = \left(\frac{10^6 \times 10^4 \times 10^{-2} \times 10}{1985.4 \times 1.995 \times 10^{-13}}\right)^{1/4}$$
$$R_{max} = \left(\frac{10^{10}}{3961.07 \times 10^{-13}}\right)^{1/4}$$
$$R_{max} = \left(\frac{10^{10}}{3.961 \times 10^{-10}}\right)^{1/4}$$
$$R_{max} = \left(0.2524 \times 10^{20}\right)^{1/4}$$
$$R_{max} = (2.524 \times 10^{19})^{1/4}$$

To calculate the fourth root:
$R_{max} = (25.24 \times 10^{18})^{1/4} = (25.24)^{1/4} \times (10^{18})^{1/4}$
$(10^{18})^{1/4} = 10^{4.5} = 10^4 \times 10^{0.5} = 10^4 \times \sqrt{10} \approx 10^4 \times 3.162$
$(25.24)^{1/4}$: $2^4=16$, $3^4=81$. So it's between 2 and 3.
Let's estimate $(25.24)^{1/4} \approx 2.24$ (since $2.24^4 \approx 25$)

$R_{max} \approx 2.24 \times 10^{4.5} \approx 2.24 \times 31620 \approx 70870 \text{ meters}$
$R_{max} \approx 70.87 \text{ km}$

**Let's use a calculator for more precise calculation:**
$(2.524 \times 10^{19})^{1/4} \approx 70867$ meters or $70.87$ km.

**Question 2:**
If the transmitted power of the radar in Question 1 is increased by a factor of 8, what will be the new maximum range?

**Answer:**
The maximum range is proportional to $P_t^{1/4}$.
If $P_t$ is increased by a factor of 8, the new range ($R_{max, new}$) will be:
$R_{max, new} = R_{max, old} \times (8)^{1/4}$
$R_{max, new} = 70.87 \text{ km} \times (8)^{1/4}$
$(8)^{1/4} = (2^3)^{1/4} = 2^{3/4} \approx 1.68$
$R_{max, new} \approx 70.87 \text{ km} \times 1.68 \approx 119.1 \text{ km}$

**Question 3:**
What would be the effect on the maximum range if the antenna gain was doubled instead of increasing the transmitted power by a factor of 8 (as in Question 2)?

**Answer:**
The maximum range is proportional to $G^{1/2}$.
If $G$ is doubled, the new range ($R_{max, new}$) will be:
$R_{max, new} = R_{max, old} \times (2)^{1/2}$
$R_{max, new} = 70.87 \text{ km} \times \sqrt{2}$
$R_{max, new} \approx 70.87 \text{ km} \times 1.414 \approx 100.2 \text{ km}$

**Comparison:** Increasing transmitted power by a factor of 8 (as in Q2) gives a longer range (119.1 km) compared to doubling the antenna gain (100.2 km), illustrating the different sensitivities of the radar equation to these parameters.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 10. Textbook References

*   **Satellite Communications by Timothy Pratt, Jeremy Allnutt:** While primarily focused on satellite communication, foundational concepts of signal propagation, power budgets, and link analysis are relevant. The principles of signal strength and range limitations discussed here share similarities with calculating link budgets in satellite systems.
*   **Introduction to Radar Systems by Merrill I. Skolnik:** This is the primary reference for radar fundamentals. Chapter 2 of Skolnik provides a detailed derivation and explanation of the radar equation, including the components like radar cross-section, antenna gain, and power density.

---

### 11. Reference Book References

*   **Radar: Principles, Technology, Applications by Byron Edde:** Edde's book also covers the radar equation in detail, often presenting it from a slightly different perspective but arriving at the same fundamental relationships.
*   **Understanding Radar Systems by Simon Kinsley and Shaun Quegan:** This book offers a comprehensive approach to radar systems and will delve into the nuances of the radar equation and its various forms.

---

This concludes the notes on the Simple Form of the Radar Equation. Understanding this equation is a crucial step in understanding how radar systems work and how their performance can be optimized.