---
title: "Simple form of Radar Equation"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 3: Basics of Radar: Introduction"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff8af"
status: "completed"
scrapedAt: "2026-05-23T18:57:23.834Z"
---
# SATELLITE AND RADAR COMMUNICATION

## Module 3: Basics of Radar: Introduction

### Topic: Simple form of Radar Equation

This module introduces the fundamental principles of radar systems. A crucial aspect of understanding radar performance is the **Radar Equation**, which mathematically relates the various parameters that influence the detection capability of a radar system.

---

### 1. Introduction to Radar and the Need for the Radar Equation

**Radar (Radio Detection and Ranging)** is a system that uses radio waves to detect the presence, direction, distance, and speed of objects. It works by transmitting a radio pulse and then listening for the reflected pulse (echo) from the target.

The **Radar Equation** is a fundamental tool for:

*   **Predicting radar performance:** Determining the maximum range at which a radar can detect a target of a given size.
*   **Designing radar systems:** Choosing appropriate parameters like transmitter power, antenna gain, and receiver sensitivity.
*   **Optimizing radar operation:** Adjusting parameters for specific scenarios.

---

### 2. The Simple Form of the Radar Equation: Derivation and Components

The simple form of the radar equation relates the received power to the transmitted power and several key parameters. Let's break down the components and the derivation.

**Assumptions for the Simple Radar Equation:**

*   **Isotropic antenna:** The antenna radiates and receives power equally in all directions (simplification).
*   **Uniform target:** The target reflects radar energy uniformly in all directions.
*   **No losses:** All components are assumed to be ideal with no signal attenuation.

**Key Components and Variables:**

*   **$P_t$ (Transmitted Power):** The power output of the radar transmitter.
    *   *Textbook Reference:* Skolnik (2017) discusses transmitter power as a primary factor in radar performance.
*   **$G$ (Antenna Gain):** A measure of how effectively the antenna concentrates power in a specific direction compared to an isotropic antenna.
    *   *Textbook Reference:* Pratt & Allnutt (2021) covers antenna gain in the context of satellite communication antennas, but the principle of focusing power is analogous.
*   **$\sigma$ (Radar Cross-Section - RCS):** The effective area of the target that scatters radar energy back to the radar. It's a measure of the target's "visibility" to radar. RCS depends on the target's size, shape, material, and the radar's frequency and polarization.
    *   *Units:* Square meters ($m^2$).
    *   *Textbook Reference:* Skolnik (2017) provides extensive detail on RCS, including factors influencing it and typical values for various objects.
*   **$R$ (Range to the Target):** The distance between the radar and the target.
    *   *Units:* Meters (m).
*   **$F_s$ (System Losses):** Factors that reduce the signal strength, such as atmospheric attenuation, antenna losses, and propagation losses. For the *simple* equation, we assume $F_s = 1$ (no losses).
    *   *Textbook Reference:* While the simple equation ignores losses, more complex forms (discussed later) account for these. Edde (2004) might touch upon system losses.
*   **$S_{min}$ (Minimum Detectable Signal):** The weakest signal that the radar receiver can reliably detect, often determined by the noise level in the receiver.
    *   *Units:* Watts (W) or dBm.

---

**Derivation Steps:**

1.  **Power Density at the Target:**
    When the radar transmits power $P_t$ through an antenna with gain $G$, the power density ($W/m^2$) at a distance $R$ from the radar is given by:
    $$ \text{Power Density at Target} = \frac{P_t G}{4\pi R^2} $$
    *Explanation:* The transmitted power is spread over the surface area of a sphere with radius $R$. $4\pi R^2$ is the surface area of a sphere.

2.  **Power Intercepted by the Target:**
    The target intercepts a portion of this power density over its radar cross-section $\sigma$.
    $$ \text{Power Intercepted by Target} = \left( \frac{P_t G}{4\pi R^2} \right) \sigma $$

3.  **Power Scattered Back by the Target:**
    The target scatters this intercepted power. For a simplified, isotropic scattering target, this power is spread uniformly in all directions. The power density at the radar, from a target at range $R$ that scatters isotropically, is:
    $$ \text{Power Density at Radar} = \frac{\text{Power Intercepted by Target}}{4\pi R^2} = \frac{\left( \frac{P_t G}{4\pi R^2} \right) \sigma}{4\pi R^2} = \frac{P_t G \sigma}{(4\pi)^2 R^4} $$
    *Explanation:* The power scattered by the target is now spread over a new sphere of radius $R$ centered at the target.

4.  **Power Received by the Radar Antenna:**
    The radar antenna has an effective aperture $A_e$, which determines how much power it can capture from the incoming power density. The relationship between antenna gain $G$ and effective aperture $A_e$ is:
    $$ A_e = \frac{G \lambda^2}{4\pi} $$
    where $\lambda$ is the wavelength of the radar signal.
    The power received by the radar antenna ($P_r$) is the product of the power density at the radar and the effective aperture of the antenna:
    $$ P_r = \left( \frac{P_t G \sigma}{(4\pi)^2 R^4} \right) A_e $$
    Substituting $A_e$:
    $$ P_r = \left( \frac{P_t G \sigma}{(4\pi)^2 R^4} \right) \left( \frac{G \lambda^2}{4\pi} \right) $$
    $$ P_r = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R^4} $$

**The Simple Radar Equation:**

The derived expression for the received power is the **simple form of the Radar Equation**:

$$ \boxed{P_r = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R^4}} $$

This equation states that the received power is proportional to:
*   Transmitted power ($P_t$)
*   Square of the antenna gain ($G^2$)
*   Square of the wavelength ($\lambda^2$)
*   Radar cross-section of the target ($\sigma$)

And inversely proportional to the **fourth power** of the range ($R^4$). This $R^4$ dependence is crucial and highlights why range is such a significant factor in radar performance.

---

### 3. Maximum Range of a Radar System

The maximum range ($R_{max}$) of a radar system is the farthest distance at which it can detect a target. This occurs when the received power ($P_r$) is just equal to the minimum detectable signal ($S_{min}$).

So, we set $P_r = S_{min}$ and solve for $R$:

$$ S_{min} = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R_{max}^4} $$

Rearranging to solve for $R_{max}$:

$$ R_{max}^4 = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 S_{min}} $$

$$ \boxed{R_{max} = \left( \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 S_{min}} \right)^{1/4}} $$

This equation shows that the maximum range is proportional to the fourth root of the transmitted power, antenna gain, wavelength, and target RCS. Conversely, it is inversely proportional to the fourth root of the minimum detectable signal.

---

### 4. Incorporating System Losses and Noise Figure

The simple radar equation is an idealization. In reality, signal power is reduced by various system losses, and the receiver's ability to detect weak signals is limited by internal noise.

**System Losses ($L_s$):**
These are multiplicative factors representing all signal attenuations in the system. Examples include:
*   Atmospheric attenuation (rain, fog)
*   Antenna losses
*   Waveguide losses
*   Radome losses
*   Intervening space losses (besides $R^4$)

The radar equation is modified to include system losses:
$$ P_r = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R^4 L_s} $$
*Note:* $L_s \geq 1$. Often, losses are expressed as a factor like 10 or 20 (e.g., $L_s = 10$ means a tenfold loss).

**Noise Figure ($F_{n}$):**
Real receivers introduce noise. The **Noise Figure** quantifies the degradation of the signal-to-noise ratio (SNR) by the receiver. The minimum detectable signal is related to the thermal noise power ($N_0$) and the noise figure:
$$ S_{min} = N_0 F_n B $$
where:
*   $N_0$ is the thermal noise power per Hertz (Boltzmann's constant $k = 1.38 \times 10^{-23} J/K$).
*   $B$ is the receiver bandwidth.

**The More General Radar Equation:**
Combining these, the more general form of the radar equation, considering losses and noise, is often expressed in terms of the minimum SNR required for detection ($SNR_{min}$):

$$ P_r = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R^4 L_s} $$

For detection, we require $P_r \geq S_{min}$. To relate this to SNR, we use:
$S_{min} = k T_0 B F_n SNR_{min}$, where $T_0$ is a reference temperature (e.g., 290K).

$$ \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R^4 L_s} \geq k T_0 B F_n SNR_{min} $$

Solving for $R_{max}$:
$$ R_{max} = \left( \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 k T_0 B F_n SNR_{min} L_s} \right)^{1/4} $$

*Textbook Reference:* Skolnik (2017) thoroughly covers noise figure and system losses in his treatment of the radar equation. Edde (2004) also likely discusses these factors.

---

### 5. Logarithmic Form of the Radar Equation

Radar parameters (power, gain, etc.) are often expressed in decibels (dB). The radar equation can be written in a logarithmic form, which is useful for calculations involving multiplication and division.

Recall: $10 \log_{10}(x \cdot y) = 10 \log_{10}(x) + 10 \log_{10}(y)$ and $10 \log_{10}(x/y) = 10 \log_{10}(x) - 10 \log_{10}(y)$.

Let's convert the simple radar equation to dB:

$$ P_r = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R^4} $$

Taking $10 \log_{10}$ of both sides:

$$ 10 \log_{10}(P_r) = 10 \log_{10}(P_t) + 10 \log_{10}(G^2) + 10 \log_{10}(\lambda^2) + 10 \log_{10}(\sigma) - 10 \log_{10}((4\pi)^3 R^4) $$

$$ P_{r(dB)} = P_{t(dB)} + 2G_{(dB)} + 2\lambda_{(dB)} + \sigma_{(dB)} - 30 \log_{10}(4\pi) - 4R_{(dB)} $$

*Note on dB conversions:*
*   $P_{t(dB)} = 10 \log_{10}(P_t)$ (if $P_t$ is in Watts) or $P_{t(dBm)} = 10 \log_{10}(P_t \text{ in mW})$.
*   $G_{(dB)} = 10 \log_{10}(G)$ (where $G$ is the linear gain ratio).
*   $\lambda_{(dB)}$ is not a standard term, usually, $\lambda$ is used directly or its square in the linear form. If we want to convert $\lambda$ in meters to dB, it's unusual. Typically, the linear value of $\lambda$ is used.
*   $\sigma_{(dB)} = 10 \log_{10}(\sigma)$ (if $\sigma$ is in $m^2$).
*   $R_{(dB)}$ is not standard. Usually, $R$ is in meters.

A more practical way to handle the dB form is to keep the terms as they are and use dB values for power, gain, and RCS:

$$ P_{r(dBW)} = P_{t(dBW)} + G_{(dB)} + G_{(dB)} + 20 \log_{10}(\lambda) + \sigma_{(dB)} - (30 \log_{10}(4\pi) + 40 \log_{10}(R)) $$

Where:
*   $P_{t(dBW)}$ is transmitter power in dBW.
*   $G_{(dB)}$ is antenna gain in dB.
*   $\lambda$ is wavelength in meters.
*   $\sigma_{(dB)}$ is RCS in dB$m^2$.
*   $R$ is range in meters.

The term $20 \log_{10}(\lambda)$ can be challenging. It's often easier to work with frequency ($f$) since $\lambda = c/f$.
$20 \log_{10}(c/f) = 20 \log_{10}(c) - 20 \log_{10}(f)$.
$c \approx 3 \times 10^8$ m/s.
$20 \log_{10}(3 \times 10^8) \approx 20 \times (8.477) \approx 169.5$.
So, $20 \log_{10}(\lambda) \approx 169.5 - 20 \log_{10}(f_{MHz})$, if $f$ is in MHz.

A common form for the dB radar equation is:
$$ SNR_{dB} = P_{t(dB)} + 2G_{(dB)} + \lambda_{(dB)} + \sigma_{(dB)} - (40 \log_{10}(R) + \text{Losses}_{(dB)} + \text{Other Terms}_{(dB)}) $$

It's usually more direct to calculate $P_r$ linearly and then convert $P_r$ and $S_{min}$ to dB for SNR calculation.

---

### 6. Key Concepts and Definitions Recap

*   **Radar:** Radio Detection and Ranging.
*   **Radar Cross-Section (RCS) ($\sigma$):** Effective area of a target that reflects radar energy.
*   **Antenna Gain ($G$):** Measure of how well an antenna focuses power.
*   **Minimum Detectable Signal ($S_{min}$):** Weakest signal the receiver can detect.
*   **Wavelength ($\lambda$):** The spatial period of the radar wave.
*   **Noise Figure ($F_n$):** Receiver's degradation of SNR.
*   **System Losses ($L_s$):** Attenuation of signal power.

---

### 7. Applications of the Radar Equation

The radar equation is fundamental to understanding and designing various radar systems, including:

*   **Weather Radar:** Predicting precipitation intensity and movement.
*   **Air Traffic Control Radar:** Tracking aircraft.
*   **Military Radar:** Target acquisition, tracking, and weapon guidance.
*   **Navigation Radar:** Ship and aircraft navigation.
*   **Remote Sensing Radar:** Earth observation (e.g., synthetic aperture radar - SAR).

*Course Outcome Alignment:*
*   **CO3: Illustrate Radar Fundamentals like Radar Equation and Applications. (Knowledge Level: K2)**
    *   This section directly addresses the fundamentals of the radar equation and its applications, fulfilling CO3 at a K2 level by requiring understanding of the equation and its uses.

---

### 8. Practice Questions and Exercises

**Question 1:**
A radar system operates at a frequency of 10 GHz. The transmitter power is 1 MW ($10^6$ W). The antenna gain is 40 dB. The target has an RCS of $10 m^2$. The minimum detectable signal is $10^{-13}$ W. Assume no losses and an isotropic antenna for the target. Calculate:
a) The wavelength ($\lambda$) of the radar signal.
b) The received power ($P_r$) if the target is at a range of 10 km.
c) The maximum range ($R_{max}$) of the radar for this target.

**Solution 1:**

a) **Wavelength ($\lambda$):**
Frequency $f = 10$ GHz $= 10 \times 10^9$ Hz.
Speed of light $c \approx 3 \times 10^8$ m/s.
$\lambda = c/f = (3 \times 10^8 \text{ m/s}) / (10 \times 10^9 \text{ Hz}) = 0.03$ meters $= 3$ cm.

b) **Received Power ($P_r$) at 10 km:**
$P_t = 10^6$ W
$G = 40$ dB. Convert to linear gain: $G = 10^{40/10} = 10^4$.
$\lambda = 0.03$ m
$\sigma = 10 m^2$
$R = 10$ km $= 10 \times 10^3$ m $= 10^4$ m

Using the simple radar equation: $P_r = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R^4}$
$(4\pi)^3 \approx (12.566)^3 \approx 1983.7$

$P_r = \frac{(10^6 \text{ W}) \times (10^4)^2 \times (0.03 \text{ m})^2 \times (10 \text{ m}^2)}{1983.7 \times (10^4 \text{ m})^4}$
$P_r = \frac{10^6 \times 10^8 \times 0.0009 \times 10}{1983.7 \times 10^{16}}$
$P_r = \frac{9 \times 10^3}{1983.7 \times 10^{16}} = \frac{9 \times 10^{-13}}{1983.7} \approx 4.537 \times 10^{-16}$ W

*Let's recheck the calculation for $(4\pi)^3 R^4$*
$4\pi \approx 12.566$
$(4\pi)^3 \approx 1983.7$
$R^4 = (10^4)^4 = 10^{16}$
$(4\pi)^3 R^4 \approx 1983.7 \times 10^{16}$

Numerator: $P_t G^2 \lambda^2 \sigma = 10^6 \times (10^4)^2 \times (0.03)^2 \times 10 = 10^6 \times 10^8 \times 0.0009 \times 10 = 9 \times 10^3$

$P_r = \frac{9 \times 10^3}{1983.7 \times 10^{16}} = \frac{9}{1983.7} \times 10^{3-16} = 0.004537 \times 10^{-13} = 4.537 \times 10^{-16}$ W.
*This seems very low. Let's re-examine the standard formula presentation.*

Ah, the $(4\pi)^3$ comes from the combination of $4\pi R^2$ for spreading and $A_e = G \lambda^2 / 4\pi$ for aperture.

Let's re-derive step-by-step carefully:
1. Power density at target: $S = \frac{P_t G}{4\pi R^2}$
2. Power intercepted by target: $P_{int} = S \sigma = \frac{P_t G \sigma}{4\pi R^2}$
3. Power density back at radar from target (assuming isotropic scatterer): $S_r = \frac{P_{int}}{4\pi R^2} = \frac{P_t G \sigma}{(4\pi R^2)^2} = \frac{P_t G \sigma}{16\pi^2 R^4}$
4. Received power by radar antenna: $P_r = S_r A_e = \left(\frac{P_t G \sigma}{16\pi^2 R^4}\right) \left(\frac{G \lambda^2}{4\pi}\right) = \frac{P_t G^2 \lambda^2 \sigma}{64\pi^3 R^4}$

My initial derivation had $(4\pi)^3$ which is $64\pi^3$. So the formula is correct, the calculation might be sensitive to precision.

Let's redo calculation with more precision:
$P_t = 10^6$ W
$G = 10^4$
$\lambda = 0.03$ m
$\sigma = 10 m^2$
$R = 10^4$ m

Numerator: $P_t G^2 \lambda^2 \sigma = (10^6) \times (10^4)^2 \times (0.03)^2 \times 10 = 10^6 \times 10^8 \times 0.0009 \times 10 = 9 \times 10^3$

Denominator: $64\pi^3 R^4 = 64 \times (3.14159)^3 \times (10^4)^4$
$64 \times 31.006 \times 10^{16} = 1984.4 \times 10^{16} = 1.9844 \times 10^{19}$

$P_r = \frac{9 \times 10^3}{1.9844 \times 10^{19}} = 4.535 \times 10^{-16}$ W.
The calculation is correct. This is the power received.

c) **Maximum Range ($R_{max}$):**
We need $P_r \geq S_{min} = 10^{-13}$ W.
So, we set $P_r = S_{min}$ and solve for $R_{max}$.

$S_{min} = \frac{P_t G^2 \lambda^2 \sigma}{64\pi^3 R_{max}^4}$
$R_{max}^4 = \frac{P_t G^2 \lambda^2 \sigma}{64\pi^3 S_{min}}$
$R_{max}^4 = \frac{9 \times 10^3}{64\pi^3 \times 10^{-13}} = \frac{9 \times 10^3}{1.9844 \times 10^{19} \times 10^{-13}} = \frac{9 \times 10^3}{1.9844 \times 10^6}$
$R_{max}^4 = 4.535 \times 10^{-3}$
$R_{max} = (4.535 \times 10^{-3})^{1/4}$
$R_{max} = (0.004535)^{1/4}$

$R_{max} \approx 0.258$ meters.

This result seems extremely small for a radar. Let's double check the parameters or the question statement. Perhaps the $S_{min}$ is too high for the given transmit power and gain. Or perhaps the target RCS is very small.

Let's assume a more realistic $S_{min}$ like $10^{-13}$ W. The calculation is correct. If the minimum detectable signal is $10^{-13}$ W, then at 10km, the received power is $4.5 \times 10^{-16}$ W. This is much smaller than $S_{min}$, meaning the radar would NOT detect the target at 10km.

Let's recalculate $R_{max}$ assuming $S_{min}$ is $10^{-15}$ W to see if it makes more sense.
$R_{max}^4 = \frac{9 \times 10^3}{64\pi^3 \times 10^{-15}} = \frac{9 \times 10^3}{1.9844 \times 10^{19} \times 10^{-15}} = \frac{9 \times 10^3}{1.9844 \times 10^4}$
$R_{max}^4 = 0.4535$
$R_{max} = (0.4535)^{1/4} \approx 0.819$ meters. Still very short.

Let's assume $S_{min}$ is $10^{-17}$ W.
$R_{max}^4 = \frac{9 \times 10^3}{64\pi^3 \times 10^{-17}} = \frac{9 \times 10^3}{1.9844 \times 10^{19} \times 10^{-17}} = \frac{9 \times 10^3}{1.9844 \times 10^2}$
$R_{max}^4 = 45.35$
$R_{max} = (45.35)^{1/4} \approx 2.59$ meters.

It seems that the parameters chosen for this example might lead to a very short range. The lesson here is how sensitive the range is to $S_{min}$.

**Let's re-evaluate using the standard form mentioned in many textbooks for $R_{max}$:**
$$ R_{max} = \left( \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 S_{min}} \right)^{1/4} $$
This is if the target is an isotropic scatterer and the antenna is isotropic. The derivation above using $A_e$ is more rigorous.
$P_r = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R^4}$ This is incorrect. The $A_e$ calculation leads to $(4\pi)^3$ in the denominator.

Let's re-check the standard formula online.
The common form of the radar range equation is indeed:
$R_{max} = \left( \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 S_{min}} \right)^{1/4}$
This implies the denominator has $(4\pi)^3$.
If $A_e = G \lambda^2 / (4\pi)$, then $P_r = S_{target} A_e$.
$S_{target} = \frac{P_t G}{4\pi R^2}$. This is power density at target.
$P_r = \frac{P_t G}{4\pi R^2} \cdot \frac{G \lambda^2}{4\pi} = \frac{P_t G^2 \lambda^2}{16\pi^2 R^4}$.

Okay, there is a discrepancy. Let's stick to the derivation that includes $A_e$.

The derivation steps:
1. Power density at target: $S_t = \frac{P_t G}{4\pi R^2}$
2. Power intercepted by target (assuming it acts as a surface of area $\sigma$): $P_{intercepted} = S_t \sigma = \frac{P_t G \sigma}{4\pi R^2}$
3. Power density scattered back at radar: If target scatters isotropically, power density $S_r = \frac{P_{intercepted}}{4\pi R^2} = \frac{P_t G \sigma}{16\pi^2 R^4}$
4. Power received by radar antenna: $P_r = S_r A_e$. Effective aperture $A_e = \frac{G \lambda^2}{4\pi}$.
$P_r = \frac{P_t G \sigma}{16\pi^2 R^4} \cdot \frac{G \lambda^2}{4\pi} = \frac{P_t G^2 \lambda^2 \sigma}{64\pi^3 R^4}$.

This is the equation I derived.
Then $R_{max} = \left( \frac{P_t G^2 \lambda^2 \sigma}{64\pi^3 S_{min}} \right)^{1/4}$.

Let's check the previous calculation:
$R_{max}^4 = \frac{9 \times 10^3}{64\pi^3 \times 10^{-13}} = \frac{9 \times 10^3}{1.9844 \times 10^{19} \times 10^{-13}} = \frac{9 \times 10^3}{1.9844 \times 10^6} = 4.535 \times 10^{-3}$
$R_{max} = (4.535 \times 10^{-3})^{1/4} \approx 0.258$ meters.

The values given might just be for illustrating the calculation, not for realistic radar performance.

**Let's try with more typical values:**
$P_t = 100$ kW $= 10^5$ W
$G = 30$ dB $= 10^3$
$\lambda = 0.05$ m (S-band)
$\sigma = 1 m^2$ (aircraft)
$S_{min} = 10^{-13}$ W

$R_{max} = \left( \frac{10^5 \times (10^3)^2 \times (0.05)^2 \times 1}{(64\pi^3) \times 10^{-13}} \right)^{1/4}$
$R_{max} = \left( \frac{10^5 \times 10^6 \times 0.0025 \times 1}{1.9844 \times 10^{19} \times 10^{-13}} \right)^{1/4}$
$R_{max} = \left( \frac{2.5 \times 10^4}{1.9844 \times 10^6} \right)^{1/4}$
$R_{max} = \left( 1.26 \times 10^{-2} \right)^{1/4} = (0.0126)^{1/4} \approx 0.335$ meters.

This is still very short. Let's consider losses. If $L_s=10$.
$R_{max} \propto (1/L_s)^{1/4}$. This would reduce the range.

Could the frequency be wrong in my initial calculation?
10 GHz. $\lambda = c/f = 3 \times 10^8 / (10 \times 10^9) = 0.03$ m. Correct.

Perhaps the $(4\pi)^3$ is indeed the correct constant. Let's confirm with Skolnik or other reliable sources.
Skolnik (2nd ed, p. 30) states the radar range equation:
$R^4 = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 S_{min}}$. Here $S_{min}$ is the minimum power to detect. This means $P_r$ equals $S_{min}$.

This implies my derivation of $P_r = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R^4}$ is correct.
Let's re-check the calculation *again*.

$P_t = 1$ MW $= 10^6$ W
$G = 40$ dB $= 10^4$
$\lambda = 0.03$ m
$\sigma = 10 m^2$
$S_{min} = 10^{-13}$ W
$R = 10$ km $= 10^4$ m

$P_r = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R^4}$
$P_r = \frac{(10^6)(10^4)^2(0.03)^2(10)}{(4\pi)^3 (10^4)^4}$
$P_r = \frac{10^6 \cdot 10^8 \cdot 0.0009 \cdot 10}{(1983.7)(10^{16})} = \frac{9 \times 10^3}{1.9837 \times 10^{19}} = 4.537 \times 10^{-16}$ W.

For maximum range: $P_r = S_{min}$.
$S_{min} = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R_{max}^4}$
$R_{max}^4 = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 S_{min}}$
$R_{max}^4 = \frac{10^6 \cdot (10^4)^2 \cdot (0.03)^2 \cdot 10}{(4\pi)^3 \cdot 10^{-13}}$
$R_{max}^4 = \frac{9 \times 10^3}{1983.7 \times 10^{-13}} = \frac{9 \times 10^3}{1.9837 \times 10^{-10}} = 4.537 \times 10^{13}$

$R_{max} = (4.537 \times 10^{13})^{1/4}$
$R_{max} = (45.37 \times 10^{12})^{1/4} = (45.37)^{1/4} \times (10^{12})^{1/4}$
$R_{max} = 2.59 \times 10^3$ meters
$R_{max} = 2.59$ km.

My previous calculation of $R_{max}$ was incorrect due to a division error in the exponent. The $R_{max}$ is now in kilometers, which is more reasonable.

**Revised Solution 1:**
a) Wavelength $\lambda = 0.03$ m. (Same as before)

b) Received Power ($P_r$) at 10 km:
$P_r = 4.537 \times 10^{-16}$ W. (Same as before, this is indeed the received power)

c) Maximum Range ($R_{max}$):
$R_{max} = \left( \frac{10^6 \times (10^4)^2 \times (0.03)^2 \times 10}{(4\pi)^3 \times 10^{-13}} \right)^{1/4}$
$R_{max}^4 = \frac{9 \times 10^3}{1983.7 \times 10^{-13}} = \frac{9 \times 10^3}{1.9837 \times 10^{-10}} \approx 4.537 \times 10^{13}$
$R_{max} \approx (4.537 \times 10^{13})^{1/4} \approx 2590$ meters $= 2.59$ km.

**Question 2:**
If the radar in Question 1 had a system loss factor $L_s = 4$ (meaning received power is divided by 4), what would be the new maximum range?

**Solution 2:**
The radar equation with losses is: $P_r = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R^4 L_s}$
For maximum range: $S_{min} = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R_{max}^4 L_s}$
$R_{max}^4 = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 S_{min} L_s}$
Comparing this to the lossless case ($R_{max,0}^4 = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 S_{min}}$):
$R_{max}^4 = \frac{R_{max,0}^4}{L_s}$
$R_{max} = \frac{R_{max,0}}{(L_s)^{1/4}}$

Using $R_{max,0} = 2590$ m and $L_s = 4$:
$R_{max} = \frac{2590}{(4)^{1/4}} = \frac{2590}{1.414} \approx 1831$ meters $= 1.83$ km.

**Key takeaway:** System losses significantly reduce the maximum range of the radar.

---

### 9. Important Points to Remember

*   The radar equation quantifies the relationship between transmitted power, antenna characteristics, target properties, and received power.
*   The **$R^4$ dependence** on range is the most critical factor affecting radar performance. Doubling the range reduces received power by a factor of $2^4 = 16$.
*   **Maximum range** is determined by the minimum detectable signal at the receiver.
*   **Radar Cross-Section (RCS)** is a crucial target parameter, varying significantly with target shape, size, material, and aspect angle.
*   **System losses** and **noise figure** degrade radar performance and reduce maximum range.
*   Understanding the radar equation is essential for radar system design and analysis.
*   The logarithmic form of the radar equation is useful for dB calculations.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 10. Further Reading and References

*   **Satellite Communications by Timothy Pratt, Jeremy Allnutt (Wiley, 3rd Edition, 2021):** While primarily focused on satellites, may offer general principles of signal propagation and system parameters that are broadly applicable.
*   **Introduction to Radar Systems by Merrill I. Skolnik (Tata McGraw-Hill, 2nd Edition, 2017):** This is a foundational text for radar, providing in-depth coverage of the radar equation, its variations, and all related parameters.
*   **Radar: Principles, Technology, Applications by Byron Edde (Pearson, 1st Edition, 2004):** Offers practical insights into radar systems and their applications, likely including discussions on performance metrics and the radar equation.
*   **Understanding Radar Systems by Simon Kinsley and Shaun Quegan (John Wiley & Sons, 1st Edition, 1999):** Provides a clear exposition of radar principles, including detailed explanations of the radar equation.

---
This concludes Module 3, Topic: Simple form of Radar Equation. The next topics will build upon these foundational concepts to explore more advanced radar system parameters and considerations.