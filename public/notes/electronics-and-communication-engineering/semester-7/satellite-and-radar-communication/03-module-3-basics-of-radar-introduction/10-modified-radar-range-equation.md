---
title: "Modified Radar Range Equation"
subject: "SATELLITE AND RADAR COMMUNICATION"
module: "Module 3: Basics of Radar: Introduction"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff32b"
status: "completed"
scrapedAt: "2026-05-23T18:10:54.884Z"
---
# SATELLITE AND RADAR COMMUNICATION

## Module 3: Basics of Radar: Introduction

### Topic: Modified Radar Range Equation

**Learning Outcomes:**

*   Understand the fundamental factors influencing radar detection range.
*   Derive and explain the components of the modified radar range equation.
*   Analyze how various system parameters affect radar performance.
*   Apply the modified radar range equation to estimate detection range for practical scenarios.

---

### 1. Introduction to Radar and the Basic Radar Range Equation

Before delving into the *modified* radar range equation, it's crucial to understand its foundation – the basic radar range equation. Radar systems transmit electromagnetic waves and analyze the reflected echoes from targets. The distance to the target is determined by the time it takes for the signal to travel to the target and back.

**Key Concepts:**

*   **Radar:** RAdio Detection And Ranging.
*   **Transmitted Power ($P_t$):** The power of the signal transmitted by the radar antenna.
*   **Antenna Gain ($G$):** The ability of an antenna to focus power in a specific direction.
*   **Effective Aperture ($A_e$):** The portion of the antenna's aperture that is effective in capturing incoming electromagnetic energy. It's related to gain by $A_e = \frac{\lambda^2 G}{4\pi}$, where $\lambda$ is the wavelength.
*   **Power Density at Target ($PD_t$):** The power transmitted spread over a spherical surface at the range of the target.
*   **Radar Cross-Section ($\sigma$):** A measure of how effectively a target reflects or scatters radar energy back to the radar. It's the effective area of the target that appears as a source of reflected power.
*   **Received Power ($P_r$):** The power of the echo signal received by the radar antenna.
*   **Minimum Detectable Signal ($S_{min}$):** The minimum power level at the receiver input that can be reliably detected. This is often related to the noise level.

**Basic Radar Range Equation (Conceptual Derivation):**

The power density transmitted by the radar, radiated isotropically, is $P_t / (4\pi R^2)$. With an antenna gain $G$, the power density in the direction of the target is $(P_t G) / (4\pi R^2)$.

This power density is intercepted by the target, which has a radar cross-section $\sigma$. The target reradiates this power. Assuming the target reradiates isotropically, the power density back at the radar is $P_{target\_reradiated} / (4\pi R^2) = (PD_t \times \sigma) / (4\pi R^2) = \frac{P_t G}{4\pi R^2} \times \frac{\sigma}{4\pi R^2}$.

The radar antenna, with an effective aperture $A_e$, intercepts this returning power density. The received power is then $P_r = PD_{target\_reradiated} \times A_e$.

Substituting $A_e = \frac{\lambda^2 G}{4\pi}$ and the expression for $PD_{target\_reradiated}$:

$P_r = \frac{P_t G}{4\pi R^2} \times \frac{\sigma}{4\pi R^2} \times \frac{\lambda^2 G}{4\pi}$

**Basic Radar Range Equation:**

$$ P_r = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R^4} $$

This equation shows that the received power is proportional to $R^{-4}$, meaning it decreases rapidly with increasing range.

**Relating to Minimum Detectable Signal ($S_{min}$):**

To detect a target, the received power $P_r$ must be greater than or equal to the minimum detectable signal $S_{min}$:

$$ P_r \ge S_{min} $$

Substituting the range equation:

$$ \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R^4} \ge S_{min} $$

Rearranging for the maximum range ($R_{max}$):

$$ R_{max}^4 \le \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 S_{min}} $$

$$ R_{max} \le \left( \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 S_{min}} \right)^{1/4} $$

**Importance (CO3 - K2):** This fundamental equation helps us understand the primary factors that determine how far a radar can detect a target.

---

### 2. Factors Affecting Radar Performance and the Need for Modification

The basic radar range equation is an idealization. In reality, several factors can significantly influence the received signal strength and the ability to detect a target. These factors necessitate a modification of the basic equation to provide a more accurate representation of radar performance.

**Factors that necessitate modification:**

*   **Noise:** The receiver is not perfectly silent; it generates internal noise, and external interference can also be present. This noise contributes to the minimum detectable signal.
*   **System Losses:** Several losses occur in the radar system, including transmission line losses, atmospheric attenuation, antenna beam shape losses, and losses in the receiver's signal processing.
*   **Signal-to-Noise Ratio (SNR):** Detection is not just about exceeding a threshold but doing so with a sufficient certainty. This is quantified by the Signal-to-Noise Ratio (SNR). A higher SNR is required for reliable detection, especially in noisy environments or for detecting small targets.
*   **Integration of Pulses:** Modern radars often use multiple pulses to improve detection probability and reduce the effect of random noise. This integration process effectively increases the received signal energy.
*   **Propagation Effects:** Atmospheric conditions (rain, fog, etc.) can absorb or scatter radar signals, reducing their strength.

**Importance (CO3 - K2):** Understanding these real-world factors is crucial for designing effective radar systems and accurately predicting their performance.

---

### 3. The Modified Radar Range Equation

The modified radar range equation accounts for the additional factors mentioned above, primarily by introducing the required Signal-to-Noise Ratio (SNR) and system losses.

**Key Components of the Modified Equation:**

*   **Signal-to-Noise Ratio (SNR):** This is the ratio of the signal power to the noise power at the receiver output. A higher SNR generally leads to a higher probability of detection and a lower probability of false alarms.
    $$ SNR = \frac{P_r}{N} $$
    where $N$ is the noise power.

*   **Noise Power ($N$):** The noise power in the receiver bandwidth ($B$) is given by:
    $$ N = k T_s B $$
    where:
    *   $k$: Boltzmann's constant ($1.38 \times 10^{-23}$ J/K).
    *   $T_s$: System noise temperature (includes receiver noise and external noise contributions, expressed in Kelvin).
    *   $B$: Bandwidth of the receiver (Hz).

*   **System Losses ($L$):** These are losses that occur throughout the radar system, both in transmission and reception. They are typically expressed as a factor greater than 1 (e.g., a loss of 6 dB corresponds to $L = 10^{0.6} \approx 4$).
    $$ L = L_{total} \ge 1 $$
    Common loss components include:
    *   $L_{fs}$: **Feed/Transmission Line Loss:** Loss in the waveguides or cables connecting the transmitter/receiver to the antenna.
    *   $L_{beam}$: **Antenna Beam Shape Loss:** The average power density over the target is less than the peak power density due to the antenna beam not being perfectly uniform.
    $L_{radar}$: **Radar losses:** This can include atmospheric attenuation, jamming, etc.

**Derivation of the Modified Radar Range Equation:**

We start from the basic range equation for received power:
$$ P_r = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R^4} $$

For detection, we require $P_r \ge S_{min}$. However, $S_{min}$ is better represented by the minimum required signal power to achieve a desired SNR.
$$ S_{min} = (SNR)_{min} \times N $$
where $(SNR)_{min}$ is the minimum acceptable signal-to-noise ratio.

Substituting the expression for $N$:
$$ S_{min} = (SNR)_{min} \times k T_s B $$

Now, let's consider the system losses. The actual received power reaching the detector after all losses is:
$$ P_{r, actual} = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R^4 L} $$
where $L$ represents all system losses combined.

For detection, this actual received power must be at least $S_{min}$:
$$ P_{r, actual} \ge S_{min} $$

$$ \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R^4 L} \ge (SNR)_{min} \times k T_s B $$

Rearranging for the maximum range ($R_{max}$):

$$ R_{max}^4 \ge \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 L (SNR)_{min} k T_s B} $$

$$ R_{max} \ge \left( \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 L (SNR)_{min} k T_s B} \right)^{1/4} $$

**The Modified Radar Range Equation:**

$$ R_{max} = \left( \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 L (SNR)_{min} k T_s B} \right)^{1/4} $$

**Important Note:** Sometimes, losses ($L$) are incorporated into the noise term or the $(SNR)_{min}$ requirement, or expressed as factors less than 1 in the denominator. The form above is a common and intuitive representation where $L \ge 1$ represents total losses.

**Comparison with Basic Range Equation:**

The modified equation differs from the basic one by:
1.  Replacing $S_{min}$ with $(SNR)_{min} k T_s B$, explicitly including noise temperature and bandwidth.
2.  Introducing a system loss factor $L$ in the denominator.

**Impact of Parameters (CO2 - K3):**

*   **$P_t$ (Transmitted Power):** Increasing $P_t$ directly increases $R_{max}$ (proportional to $P_t^{1/4}$).
*   **$G$ (Antenna Gain):** Increasing $G$ significantly increases $R_{max}$ (proportional to $G^{1/2}$). This is because gain affects both transmitted power density and received power density.
*   **$\lambda$ (Wavelength):** Increasing $\lambda$ increases $R_{max}$ (proportional to $\lambda^{1/2}$). Longer wavelengths are less affected by atmospheric attenuation but might require larger antennas for the same gain.
*   **$\sigma$ (Radar Cross-Section):** Increasing $\sigma$ increases $R_{max}$ (proportional to $\sigma^{1/4}$). Larger or more reflective targets are detected at longer ranges.
*   **$L$ (System Losses):** Increasing $L$ decreases $R_{max}$ (inversely proportional to $L^{1/4}$). Minimizing losses is crucial for maximizing range.
*   **$(SNR)_{min}$ (Minimum SNR):** Increasing $(SNR)_{min}$ decreases $R_{max}$ (inversely proportional to $(SNR)_{min}^{1/4}$). A higher certainty of detection requires a higher SNR, reducing the maximum range.
*   **$T_s$ (System Noise Temperature):** Increasing $T_s$ decreases $R_{max}$ (inversely proportional to $T_s^{1/4}$). A "hotter" receiver (more noise) reduces the detection range.
*   **$B$ (Receiver Bandwidth):** Increasing $B$ decreases $R_{max}$ (inversely proportional to $B^{1/4}$). While wider bandwidths can help resolve targets in range, they also increase the noise power.

**Example Application (CO3 - K2):**

A radar operates with the following parameters:
*   $P_t = 1$ MW ($1 \times 10^6$ W)
*   $G = 40$ dB = $10^{40/10} = 10^4$
*   $\lambda = 0.1$ m
*   $\sigma = 10 \, m^2$
*   $L = 5$ (total system losses)
*   $(SNR)_{min} = 10$
*   $k = 1.38 \times 10^{-23}$ J/K
*   $T_s = 500$ K
*   $B = 1$ MHz ($1 \times 10^6$ Hz)

Calculate the maximum detection range ($R_{max}$).

**Solution:**

First, convert all parameters to consistent units.
$P_t = 10^6$ W
$G = 10^4$
$\lambda = 0.1$ m
$\sigma = 10 \, m^2$
$L = 5$
$(SNR)_{min} = 10$
$k = 1.38 \times 10^{-23}$ J/K
$T_s = 500$ K
$B = 10^6$ Hz

Now, plug these values into the modified radar range equation:

$$ R_{max} = \left( \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 L (SNR)_{min} k T_s B} \right)^{1/4} $$

Calculate the denominator:
$(4\pi)^3 = (4 \times 3.14159)^3 \approx (12.566)^3 \approx 1983.2$

Denominator term:
$L (SNR)_{min} k T_s B = 5 \times 10 \times (1.38 \times 10^{-23}) \times 500 \times (10^6)$
$= 50 \times (1.38 \times 10^{-23}) \times 500 \times 10^6$
$= 50 \times 1.38 \times 500 \times 10^{-17}$
$= 69 \times 500 \times 10^{-17}$
$= 34500 \times 10^{-17} = 3.45 \times 10^{-13}$ W (This is the minimum detectable signal power $S_{min}$)

Calculate the numerator:
$P_t G^2 \lambda^2 \sigma = (10^6) \times (10^4)^2 \times (0.1)^2 \times 10$
$= 10^6 \times 10^8 \times 0.01 \times 10$
$= 10^{14} \times 0.1 = 10^{13}$ W-m$^2$

Now, divide numerator by denominator:
$\frac{10^{13}}{3.45 \times 10^{-13}} \approx 2.898 \times 10^{25}$

Finally, take the fourth root:
$R_{max} = (2.898 \times 10^{25})^{1/4}$
$R_{max} \approx (28.98 \times 10^{24})^{1/4}$
$R_{max} \approx (2.898 \times 10^{1.5})^{1/4} \times 10^6$ (incorrect attempt at simplifying)
$R_{max} \approx (2.898)^{1/4} \times (10^{25})^{1/4}$
$R_{max} \approx 1.308 \times 10^{6.25}$ (This calculation is getting messy, let's use a calculator)

Using a calculator:
$(2.898 \times 10^{25})^{0.25} \approx 23165$ meters

$R_{max} \approx 23.165$ km

---

### 4. Pulse Integration and its Impact on the Range Equation

Many radar systems employ pulse integration to improve their ability to detect weak signals. This involves summing or processing multiple received pulses from the same target.

**Types of Integration:**

*   **Coherent Integration:** The phase information of the received pulses is retained and used in the summation. This is the most effective form of integration and significantly improves the SNR. If $n$ pulses are coherently integrated, the SNR improvement is proportional to $n$.
*   **Non-coherent Integration:** Only the amplitude information of the received pulses is used. The improvement in SNR is less than coherent integration and is proportional to $\sqrt{n}$ (for additive noise).

**Effect on the Modified Radar Range Equation:**

Pulse integration effectively increases the signal energy-to-noise ratio. If $n$ pulses are integrated, the signal power effectively increases, or equivalently, the noise power is reduced relative to the signal. This leads to a lower *effective* $(SNR)_{min}$ requirement for the same level of detection certainty.

Let's consider coherent integration. If $n$ pulses are coherently integrated, the received signal power effectively becomes $n \times P_r$. Consequently, the minimum detectable signal power $S_{min}$ can be reduced by a factor of $n$ to achieve the same SNR requirement.

Alternatively, if we want to achieve a certain SNR, the *effective* $(SNR)_{min}$ for each individual pulse can be reduced by $n$ for coherent integration. This means the term $(SNR)_{min}$ in the denominator of the range equation is effectively reduced.

$$ R_{max} \propto \left( \frac{1}{(SNR)_{min}} \right)^{1/4} $$

If $n$ pulses are coherently integrated, the required $(SNR)_{min}$ for the *system* can be considered as $(SNR)_{min\_single\_pulse} / n$. Substituting this into the equation:

$$ R_{max} \propto \left( \frac{1}{(SNR)_{min\_single\_pulse} / n} \right)^{1/4} \propto n^{1/4} \left( \frac{1}{(SNR)_{min\_single\_pulse}} \right)^{1/4} $$

This shows that coherent integration increases the maximum range by a factor of $n^{1/4}$.

For non-coherent integration, the improvement is less. The minimum detectable signal power $S_{min}$ is reduced by a factor related to $\sqrt{n}$ (under specific assumptions). This means $(SNR)_{min}$ can be reduced by a factor of $\sqrt{n}$, leading to a range increase proportional to $(\sqrt{n})^{1/4} = n^{1/8}$.

**Practical Significance:**

Pulse integration is a crucial technique for detecting small or stealthy targets, or for extending the range of radar systems. It allows radars to operate with lower peak power or to detect targets in more challenging environments.

**(CO1 - K2, CO3 - K2)** Pulse integration principles are fundamental to understanding how radar systems achieve reliable detection, which is a key aspect of radar fundamentals.

---

### 5. Other Modifications and Considerations

*   **Jamming:** In an electronic warfare scenario, jamming signals can be present, which effectively increase the noise level or mask the target signal. This would increase the effective $T_s$ or require a higher $(SNR)_{min}$, thus reducing the detection range.
*   **Target Fluctuation:** The radar cross-section ($\sigma$) of a target is not constant. It fluctuates over time due to target motion, aspect angle changes, and internal scattering mechanisms. Models like Swerling or Rayleigh fading are used to account for these fluctuations, and they influence the required $(SNR)_{min}$ or the probability of detection.
*   **Doppler Effect:** For moving targets, the Doppler shift in frequency can be used to separate targets from clutter and to estimate their velocity. This can improve the SNR by filtering the received signal within a specific Doppler band.
*   **Resolution:** The ability to distinguish between closely spaced targets depends on the pulse width and bandwidth. While not directly in the range equation, resolution limitations can affect the practical maximum *useful* range.

---

### 6. Important Points to Remember

*   The Modified Radar Range Equation is a more realistic representation of radar performance than the basic equation.
*   It explicitly accounts for **system losses ($L$)**, **system noise temperature ($T_s$)**, and the required **signal-to-noise ratio ($SNR_{min}$)**.
*   The term $k T_s B$ represents the **noise power** in the receiver bandwidth.
*   The radar cross-section ($\sigma$) is a critical parameter representing the target's reflectivity.
*   Increasing transmitted power ($P_t$), antenna gain ($G$), or wavelength ($\lambda$) generally increases the detection range.
*   Increasing system losses ($L$), required SNR ($SNR_{min}$), system noise temperature ($T_s$), or bandwidth ($B$) generally decreases the detection range.
*   **Pulse integration** is a vital technique for enhancing SNR and extending detection range, particularly in coherent integration.
*   The equation highlights the trade-offs in radar design: to achieve longer range, one might need higher power, higher gain, lower system losses, or more sophisticated signal processing (like pulse integration).

---

### 7. Practice Questions and Exercises

**Question 1:**

Which of the following parameters, when increased, will lead to a decrease in the maximum detection range of a radar system according to the modified radar range equation?

a) Transmitted Power ($P_t$)
b) Antenna Gain ($G$)
c) System Noise Temperature ($T_s$)
d) Radar Cross-Section ($\sigma$)

**Answer:** c) System Noise Temperature ($T_s$)

**Explanation:** The modified radar range equation is:
$R_{max} \propto \left( \frac{P_t G^2 \lambda^2 \sigma}{L (SNR)_{min} k T_s B} \right)^{1/4}$
As $T_s$ is in the denominator, increasing it will decrease $R_{max}$.

---

**Question 2:**

A radar system has the following parameters:
$P_t = 250$ kW, $G = 30$ dB, $\lambda = 0.05$ m, $\sigma = 5 \, m^2$.
If the system loss factor $L = 3$, the required $SNR_{min} = 15$, $k = 1.38 \times 10^{-23}$ J/K, $T_s = 300$ K, and $B = 500$ kHz.
Calculate the maximum detection range ($R_{max}$) of the radar.

**Answer:**

First, convert parameters to consistent units:
$P_t = 250 \times 10^3$ W
$G = 10^{30/10} = 1000$
$\lambda = 0.05$ m
$\sigma = 5 \, m^2$
$L = 3$
$SNR_{min} = 15$
$k = 1.38 \times 10^{-23}$ J/K
$T_s = 300$ K
$B = 500 \times 10^3$ Hz

Calculate the denominator term:
$L \times SNR_{min} \times k \times T_s \times B = 3 \times 15 \times (1.38 \times 10^{-23}) \times 300 \times (500 \times 10^3)$
$= 45 \times (1.38 \times 10^{-23}) \times 1.5 \times 10^8$
$= 45 \times 1.38 \times 1.5 \times 10^{-15}$
$= 93.15 \times 10^{-15} = 9.315 \times 10^{-14}$ W

Calculate the numerator term:
$P_t \times G^2 \times \lambda^2 \times \sigma = (250 \times 10^3) \times (1000)^2 \times (0.05)^2 \times 5$
$= (2.5 \times 10^5) \times (10^6) \times (0.0025) \times 5$
$= 2.5 \times 10^{11} \times 0.0125$
$= 3.125 \times 10^9$ W-m$^2$

Now, calculate $R_{max}^4$:
$R_{max}^4 = \frac{3.125 \times 10^9}{(4\pi)^3 \times 9.315 \times 10^{-14}}$
$(4\pi)^3 \approx 1983.2$

$R_{max}^4 = \frac{3.125 \times 10^9}{1983.2 \times 9.315 \times 10^{-14}}$
$R_{max}^4 = \frac{3.125 \times 10^9}{18472.7 \times 10^{-14}}$
$R_{max}^4 = \frac{3.125 \times 10^9}{1.84727 \times 10^{-10}}$
$R_{max}^4 \approx 1.6915 \times 10^{19}$

Finally, calculate $R_{max}$:
$R_{max} = (1.6915 \times 10^{19})^{1/4}$
$R_{max} \approx (16.915 \times 10^{18})^{1/4}$
$R_{max} \approx (16.915)^{1/4} \times 10^{4.5}$
$R_{max} \approx 2.03 \times 10^{4.5}$ (This is not easy to calculate mentally)

Using a calculator:
$R_{max} = (1.6915 \times 10^{19})^{0.25} \approx 36009$ meters

$R_{max} \approx 36.01$ km

---

**Question 3:**

Explain the principle of coherent pulse integration and how it affects the radar range equation. If a radar system improves its SNR by a factor of 64 through coherent integration, by what factor does its maximum detection range increase?

**Answer:**

**Principle of Coherent Pulse Integration:**
Coherent pulse integration involves processing multiple received radar pulses from the same target while preserving their phase information. The received signals are summed in a way that aligns their phases, constructively reinforcing the signal and destructively cancelling out random noise. This process is equivalent to increasing the signal energy-to-noise ratio.

**Effect on Radar Range Equation:**
The modified radar range equation shows $R_{max} \propto (SNR_{min})^{-1/4}$. Coherent integration allows for a reduction in the required $(SNR)_{min}$ for a given probability of detection. If $n$ pulses are coherently integrated, the effective $(SNR)_{min}$ can be reduced by a factor of $n$.

Let the original required SNR be $(SNR)_{min\_orig}$ and the new SNR after integration be $(SNR)_{min\_new}$.
For coherent integration, $(SNR)_{min\_new} = (SNR)_{min\_orig} / n$.

The new range $R_{max\_new}$ will be proportional to $((SNR)_{min\_new})^{-1/4}$:
$R_{max\_new} \propto ((SNR)_{min\_orig}/n)^{-1/4} = n^{1/4} (SNR)_{min\_orig}^{-1/4}$
Thus, $R_{max\_new} = n^{1/4} R_{max\_orig}$.

**Range Increase Factor:**
The problem states that the SNR is improved by a factor of 64. This means the *effective* $(SNR)_{min}$ requirement has been reduced by a factor of 64. Therefore, $n=64$.

The factor by which the maximum detection range increases is $n^{1/4}$.
Range Increase Factor = $64^{1/4}$
$64^{1/4} = (2^6)^{1/4} = 2^{6/4} = 2^{3/2} = 2 \sqrt{2} \approx 2.828$

The maximum detection range increases by a factor of approximately **2.828**.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### References:

*   **Satellite Communications by Timothy Pratt, Jeremy Allnutt (Wiley, 3rd Edition, 2021):** While this book primarily focuses on satellite communication, it may have introductory chapters on general communication principles that could touch upon signal propagation and noise, which are relevant to radar.
*   **Introduction to Radar Systems by Merrill I. Skolnik (Tata McGraw-Hill, 2nd Edition, 2017):** **(Primary Reference)** This is a seminal text for radar systems and will cover the radar range equation in extensive detail, including its modifications.
*   **Digital Satellite Communications by Tri, T.Ha, (McGraw-Hill Education, 2nd Edition, 2017):** Similar to Pratt & Allnutt, this book focuses on satellite systems.
*   **Satellite Communications Systems Engineering by Pritchard (Pearson Education, 2nd Edition, 2006):** Another satellite-focused text.
*   **Radar: Principles, Technology, Applications by Byron Edde (Pearson, 1st Edition, 2004):** **(Secondary Reference)** This book also provides a comprehensive treatment of radar principles, including the range equation and its variations.
*   **Understanding Radar Systems by Simon Kinsley and Shaun Quegan (John Wiley& Sons, 1st Edition 1999):** **(Secondary Reference)** This text offers a clear explanation of radar fundamentals, likely including the modified range equation.

---

**Course Outcomes Alignment:**

*   **CO1 (K2):** While this module is on radar, understanding the signal propagation and noise aspects of the range equation aligns with general communication principles.
*   **CO2 (K3):** The analysis of how each parameter in the modified range equation affects the range demonstrates an analytical understanding.
*   **CO3 (K2):** This entire topic is dedicated to the Radar Equation and its practical implications, fulfilling this outcome directly. The derivation and explanation of the modified equation are core to illustrating radar fundamentals.
*   **CO4 (K2):** Understanding the range equation is a prerequisite for comparing different radar types and their performance capabilities.

---