---
title: "Friis Transmission Equation and Radar Range Equation"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 1: Antenna theory: Radiation mechanism from an antenna"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7c5"
status: "completed"
scrapedAt: "2026-05-23T18:11:32.941Z"
---
# ANTENNA THEORY AND DESIGN

## Module 1: Antenna Theory: Radiation Mechanism from an Antenna

### Topic: Friis Transmission Equation and Radar Range Equation

---

### **Introduction**

This topic delves into two fundamental equations that govern the power transfer between antennas and the capabilities of radar systems. The **Friis Transmission Equation** quantifies the received power between two antennas, considering their properties and the distance between them. The **Radar Range Equation** extends this concept to radar systems, determining the maximum range at which a target can be detected. Understanding these equations is crucial for analyzing and designing antenna systems for various applications.

---

### **1. Friis Transmission Equation**

The Friis Transmission Equation is a cornerstone in understanding radio wave propagation and power transfer in wireless communication systems. It describes the ratio of the power delivered to the receiving antenna to the power transmitted by the transmitting antenna.

#### **Key Concepts and Definitions**

*   **Transmitted Power ($P_t$)**: The power supplied to the transmitting antenna.
*   **Power Density ($W_t$)**: The power per unit area at a given distance from the transmitting antenna.
*   **Isotropic Radiator**: A theoretical antenna that radiates power uniformly in all directions.
*   **Antenna Gain ($G_t, G_r$)**: A measure of how well an antenna concentrates radiated power in a specific direction compared to an isotropic radiator. It's a dimensionless quantity, often expressed in dBi (decibels relative to isotropic).
*   **Effective Aperture ($A_{et}, A_{er}$)**: The equivalent area of a receiving antenna that captures power from an incident electromagnetic wave. It's related to the antenna's gain by $A_e = \frac{\lambda^2}{4\pi}G$, where $\lambda$ is the wavelength.
*   **Path Loss**: The reduction in power density as the wave propagates from the transmitter to the receiver. This includes factors like spreading, absorption, and scattering.
*   **Received Power ($P_r$)**: The power delivered to the load connected to the receiving antenna.

#### **Derivation and Formulation**

The Friis Transmission Equation can be derived by considering the power density radiated by the transmitting antenna and the effective aperture of the receiving antenna.

1.  **Power radiated by the transmitting antenna**:
    Assume a transmitting antenna with power $P_t$ and gain $G_t$. If it were an isotropic radiator, the power density at a distance $R$ would be $\frac{P_t}{4\pi R^2}$. With a gain $G_t$, the power density in the direction of the receiver is:
    $W_t = \frac{P_t G_t}{4\pi R^2}$ (Power per unit area)

2.  **Power captured by the receiving antenna**:
    The receiving antenna with effective aperture $A_{er}$ intercepts this power density. The power delivered to the receiving antenna is:
    $P_{captured} = W_t \times A_{er}$

3.  **Relating effective aperture to gain**:
    The effective aperture of the receiving antenna is related to its gain by:
    $A_{er} = \frac{\lambda^2}{4\pi}G_r$

4.  **Substituting and simplifying**:
    Substitute the expressions for $W_t$ and $A_{er}$ into the captured power equation:
    $P_r = \left(\frac{P_t G_t}{4\pi R^2}\right) \times \left(\frac{\lambda^2}{4\pi}G_r\right)$

    Rearranging, we get the **Friis Transmission Equation**:

    $$ P_r = P_t \frac{G_t G_r}{4\pi R^2} \left(\frac{\lambda}{4\pi}\right)^2 $$

    Alternatively, it is often expressed as:

    $$ P_r = P_t \frac{G_t G_r}{L_{fs}} $$

    where $L_{fs}$ is the **free-space path loss**, given by:

    $$ L_{fs} = \left(\frac{4\pi R}{\lambda}\right)^2 $$

    Or, in terms of effective areas:

    $$ P_r = P_t \frac{A_{et} A_{er}}{(\lambda R)^2} $$

#### **Power Transmission in dB**

It's common to express power and gains in decibels (dB).

*   $P_{dBm} = 10 \log_{10}\left(\frac{P}{1 \text{ mW}}\right)$
*   $P_{dBi} = 10 \log_{10}(G)$

The Friis Transmission Equation in dB becomes:

$P_r (dBm) = P_t (dBm) + G_t (dBi) + G_r (dBi) - 20 \log_{10}\left(\frac{4\pi R}{\lambda}\right)$

**Important Note:** The term $-20 \log_{10}\left(\frac{4\pi R}{\lambda}\right)$ represents the path loss in dB. For each doubling of distance ($R$), the path loss increases by approximately 6 dB.

#### **Key Factors Influencing Received Power**

*   **Transmitted Power ($P_t$)**: Higher transmitted power leads to higher received power.
*   **Antenna Gains ($G_t, G_r$)**: Highly directive antennas (high gain) at both ends focus the power, increasing received power in the desired direction.
*   **Distance ($R$)**: Received power decreases rapidly with distance (inversely proportional to $R^2$).
*   **Wavelength ($\lambda$)**: For a fixed distance, shorter wavelengths (higher frequencies) experience less free-space path loss.

#### **Limitations and Assumptions**

*   **Free Space**: Assumes propagation in free space with no obstructions, reflections, or absorption.
*   **Far-Field**: Assumes both antennas are in the far-field of each other.
*   **Antenna Alignment**: Assumes antennas are properly aligned for maximum signal reception.
*   **Impedance Matching**: Assumes perfect impedance matching between antennas and transmission lines/loads.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


#### **Textbook References**

*   **Balanis (4th Ed.)**: Chapter 2 (Fundamental Parameters of Antennas) and Chapter 14 (Antennas for Specific Applications - e.g., point-to-point communication). Balanis provides a thorough derivation and discusses the concept of effective aperture in detail.
*   **Collin (2nd Ed.)**: Chapter 1 (Antenna Theory and Introduction) and discussions on wave propagation. Collin emphasizes the electromagnetic field quantities.
*   **Pozar (4th Ed.)**: Chapter 1 (Introduction) and Chapter 2 (Antennas and Wave Propagation). Pozar provides a concise derivation and discusses the parameters in the context of microwave systems.
*   **Kraus (3rd Ed.)**: Chapter 1 (Antenna Fundamentals) and Chapter 14 (Radio Communication Systems). Kraus offers practical insights into antenna applications.

#### **Example**

**Problem:** A transmitter with an output power of 10 W is connected to an antenna with a gain of 15 dBi. The receiver is connected to an antenna with a gain of 12 dBi. The antennas are separated by a distance of 10 km. The operating frequency is 10 GHz. Calculate the received power.

**Solution:**

1.  **Convert parameters to linear scale**:
    *   $P_t = 10 \text{ W}$
    *   $G_t = 15 \text{ dBi} = 10^{15/10} = 10^{1.5} \approx 31.62$
    *   $G_r = 12 \text{ dBi} = 10^{12/10} = 10^{1.2} \approx 15.85$
    *   $R = 10 \text{ km} = 10 \times 10^3 \text{ m}$
    *   Frequency $f = 10 \text{ GHz} = 10 \times 10^9 \text{ Hz}$
    *   Wavelength $\lambda = \frac{c}{f} = \frac{3 \times 10^8 \text{ m/s}}{10 \times 10^9 \text{ Hz}} = 0.03 \text{ m}$

2.  **Calculate the free-space path loss ($L_{fs}$)**:
    $L_{fs} = \left(\frac{4\pi R}{\lambda}\right)^2 = \left(\frac{4\pi \times 10 \times 10^3 \text{ m}}{0.03 \text{ m}}\right)^2 = \left(\frac{40\pi \times 10^3}{0.03}\right)^2 \approx (4.188 \times 10^6)^2 \approx 1.754 \times 10^{13}$

3.  **Calculate the received power ($P_r$) using the Friis Transmission Equation**:
    $P_r = P_t \frac{G_t G_r}{L_{fs}} = 10 \text{ W} \times \frac{31.62 \times 15.85}{1.754 \times 10^{13}}$
    $P_r \approx 10 \text{ W} \times \frac{501.047}{1.754 \times 10^{13}} \approx 10 \text{ W} \times 2.856 \times 10^{-11}$
    $P_r \approx 2.856 \times 10^{-10} \text{ W}$

4.  **Convert received power to dBm**:
    $P_r (dBm) = 10 \log_{10}\left(\frac{2.856 \times 10^{-10} \text{ W}}{1 \text{ mW}}\right) = 10 \log_{10}(2.856 \times 10^{-7}) \approx 10 \times (-6.54) \approx -65.4 \text{ dBm}$

---

### **2. Radar Range Equation**

The Radar Range Equation is a fundamental tool for determining the maximum range at which a radar system can detect a target. It builds upon the Friis Transmission Equation by incorporating factors specific to radar operations, such as the target's radar cross-section and the radar's system parameters.

#### **Key Concepts and Definitions**

*   **Radar**: Radio Detection and Ranging. A system that uses radio waves to detect the presence, direction, distance, and speed of objects.
*   **Radar Cross-Section ($\sigma$)**: A measure of how detectable a target is by radar. It represents the effective area that a target presents to radar for reflection. It's a function of the target's physical size, shape, material, and the aspect angle at which it is viewed by the radar. Units are typically in square meters ($m^2$).
*   **Pulse Repetition Frequency (PRF)**: The rate at which radar pulses are transmitted.
*   **Pulse Width ($\tau$)**: The duration of each transmitted radar pulse.
*   **Bandwidth (B)**: The range of frequencies over which the radar system operates.
*   **System Losses ($L$)**: Represents all losses in the radar system, including atmospheric absorption, antenna mismatch, waveguide losses, receiver noise, etc. These are typically greater than 1 (or negative in dB).
*   **Minimum Detectable Signal ($S_{min}$)**: The weakest signal the radar receiver can detect, usually defined by the signal-to-noise ratio (SNR) threshold.

#### **Derivation and Formulation**

The radar range equation considers the power transmitted, the power density at the target, the power scattered back by the target, the power density of the scattered signal at the radar, and the effective area of the radar's receiving antenna.

1.  **Power transmitted**:
    Let the radar transmit a peak power $P_t$.

2.  **Power density at the target**:
    Similar to the Friis equation, the power density at range $R$ from a radar antenna with gain $G$ is:
    $W_t = \frac{P_t G}{4\pi R^2}$

3.  **Power scattered back by the target**:
    The target has a radar cross-section $\sigma$. The power scattered isotropically by the target would be $W_t \times \sigma$. However, the target itself can have directional scattering properties. For simplicity in the basic equation, we assume the target scatters the intercepted power uniformly in all directions (like an isotropic scatterer). So, the power density back at the radar from the target is:
    $W_{target} = \frac{W_t \sigma}{4\pi R^2} = \frac{P_t G \sigma}{(4\pi R^2)^2}$

4.  **Power received by the radar antenna**:
    The radar's receiving antenna has an effective aperture $A_{er} = \frac{\lambda^2}{4\pi}G$. The received power is:
    $P_r = W_{target} \times A_{er} = \left(\frac{P_t G \sigma}{(4\pi R^2)^2}\right) \times \left(\frac{\lambda^2}{4\pi}G\right)$

5.  **Simplifying and substituting $\lambda$**:
    $P_r = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R^4}$

    Using $G = \frac{4\pi A_{et}}{\lambda^2}$ and $A_{et} = A_{er}$:
    $P_r = \frac{P_t \left(\frac{4\pi A_{er}}{\lambda^2}\right)^2 \lambda^2 \sigma}{(4\pi)^3 R^4} = \frac{P_t \frac{16\pi^2 A_{er}^2}{\lambda^4} \lambda^2 \sigma}{(4\pi)^3 R^4} = \frac{P_t A_{er}^2 \sigma}{4\pi R^4}$

6.  **Including System Losses ($L$)**:
    The actual received power is reduced by various system losses $L$ (where $L > 1$). The equation becomes:
    $P_r = \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R^4 L}$

7.  **Relating Received Power to Minimum Detectable Signal ($S_{min}$)**:
    For detection, the received power $P_r$ must be at least equal to the minimum detectable signal $S_{min}$.
    $S_{min} \le P_r$

    $$ S_{min} \le \frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R^4 L} $$

8.  **Solving for Maximum Range ($R_{max}$)**:
    To find the maximum range, we set $S_{min} = P_r$ and solve for $R$:

    $$ R_{max} = \left(\frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 R^4 L S_{min}}\right)^{1/4} $$

    Rearranging to a more common form:

    $$ R_{max} = \left(\frac{P_t G^2 \lambda^2 \sigma}{S_{min} (4\pi)^3 L}\right)^{1/4} $$

    Often, the term $G^2 \lambda^2$ is related to the antenna effective area $A_e$ as $A_e^2 (\frac{4\pi}{\lambda})^2$.
    Using $G = \frac{4\pi A_e}{\lambda^2}$:
    $R_{max} = \left(\frac{P_t (\frac{4\pi A_e}{\lambda^2})^2 \lambda^2 \sigma}{S_{min} (4\pi)^3 L}\right)^{1/4} = \left(\frac{P_t \frac{16\pi^2 A_e^2}{\lambda^4} \lambda^2 \sigma}{S_{min} (4\pi)^3 L}\right)^{1/4}$
    $R_{max} = \left(\frac{P_t A_e^2 \sigma}{S_{min} (4\pi) L}\right)^{1/4}$

    Another common way to express it is by using the **average power** $P_{avg} = P_t \tau \times PRF$. The relationship between peak power and average power depends on the duty cycle. However, the fundamental equation is often stated in terms of peak power.

    A common form of the **monostatic radar range equation** is:

    $$ R_{max} = \left(\frac{P_t G^2 \lambda^2 \sigma}{(4\pi)^3 L S_{min}}\right)^{1/4} $$

    **Key dependence:** The maximum range ($R_{max}$) is proportional to the fourth root of the transmitted power ($P_t$) and the square of the antenna gain ($G$). It is inversely proportional to the fourth root of the minimum detectable signal ($S_{min}$) and the radar cross-section ($\sigma$).

#### **Key Factors Influencing Maximum Range**

*   **Transmitted Power ($P_t$)**: Increasing $P_t$ by a factor of 16 doubles the range.
*   **Antenna Gain ($G$)**: Increasing $G$ by a factor of $\sqrt{2}$ (or 3 dB) doubles the range.
*   **Wavelength ($\lambda$)**: Longer wavelengths are generally better for range, but come with other trade-offs.
*   **Radar Cross-Section ($\sigma$)**: Larger targets are detectable at greater ranges.
*   **Minimum Detectable Signal ($S_{min}$)**: A more sensitive receiver (lower $S_{min}$) increases the range. This is often related to receiver noise figure and bandwidth.
*   **System Losses ($L$)**: Minimizing losses improves the range.

#### **Modifications and Considerations**

*   **Noise Figure (NF)**: $S_{min}$ is related to the noise power in the receiver's bandwidth ($B$) by $S_{min} = (SNR)_{min} \times K T_0 B \times NF$, where $K$ is Boltzmann's constant, $T_0$ is standard temperature, and $(SNR)_{min}$ is the minimum required signal-to-noise ratio.
*   **Target Fluctuations**: Real targets are not perfect reflectors and their RCS can fluctuate. This is accounted for by statistical models.
*   **Atmospheric Effects**: Absorption and scattering by atmospheric gases, rain, fog, and clouds can significantly increase system losses ($L$).
*   **Search Radar vs. Tracking Radar**: The equation is often presented for search radars. Tracking radars may have different requirements for SNR.

#### **Textbook References**

*   **Balanis (4th Ed.)**: Chapter 13 (Radar Cross Section). Balanis provides a detailed explanation of radar cross-section and how it's calculated for various shapes, which is critical input for the range equation.
*   **Collin (2nd Ed.)**: Chapter 1 (Antenna Theory and Introduction) and discussions on wave propagation and scattering.
*   **Pozar (4th Ed.)**: Chapter 12 (Radar Systems). Pozar offers a dedicated chapter on radar principles and the range equation.
*   **Milligan (2nd Ed.)**: Chapter 9 (Radar Antennas). Milligan discusses radar antennas in the context of system design.
*   **Kraus (3rd Ed.)**: Chapter 16 (Radar Systems). Kraus covers radar principles and equations.

#### **Example**

**Problem:** A search radar operates at 3 GHz with a peak transmitted power of 1 MW. The antenna has a gain of 40 dBi. The receiver requires a minimum SNR of 10 dB. The receiver noise figure is 5 dB, and the system losses are 10 dB. The target has a radar cross-section of $10 m^2$. Calculate the maximum range of the radar.

**Solution:**

1.  **Convert parameters to linear scale**:
    *   $P_t = 1 \text{ MW} = 10^6 \text{ W}$
    *   $G = 40 \text{ dBi} = 10^{40/10} = 10^4$
    *   $R_{max} = ?$
    *   $\lambda$: $f = 3 \text{ GHz} = 3 \times 10^9 \text{ Hz}$, so $\lambda = \frac{3 \times 10^8}{3 \times 10^9} = 0.1 \text{ m}$
    *   $\sigma = 10 m^2$
    *   $S_{min}$: $(SNR)_{min} = 10 \text{ dB} = 10$.
        $K = 1.38 \times 10^{-23} \text{ J/K}$ (Boltzmann's constant)
        $T_0 = 290 \text{ K}$ (standard temperature)
        Bandwidth $B$: Let's assume a typical pulse width of 1 µs for a search radar, so $B \approx 1/ \tau = 1/10^{-6} = 10^6 \text{ Hz}$.
        $NF = 5 \text{ dB} = 10^{5/10} = 3.16$
        $S_{min} = (SNR)_{min} \times K T_0 B \times NF = 10 \times (1.38 \times 10^{-23}) \times 290 \times 10^6 \times 3.16 \approx 1.27 \times 10^{-11} \text{ W}$
    *   $L = 10 \text{ dB} = 10^{10/10} = 10$ (total system loss)

2.  **Apply the Radar Range Equation**:
    $R_{max} = \left(\frac{P_t G^2 \lambda^2 \sigma}{S_{min} (4\pi)^3 L}\right)^{1/4}$

    $R_{max} = \left(\frac{(10^6 \text{ W}) \times (10^4)^2 \times (0.1 \text{ m})^2 \times (10 m^2)}{(1.27 \times 10^{-11} \text{ W}) \times (4\pi)^3 \times 10}\right)^{1/4}$

    $R_{max} = \left(\frac{10^6 \times 10^8 \times 0.01 \times 10}{1.27 \times 10^{-11} \times 248.3 \times 10}\right)^{1/4}$

    $R_{max} = \left(\frac{10^{13}}{3.15 \times 10^{-8}}\right)^{1/4}$

    $R_{max} = \left(3.17 \times 10^{20}\right)^{1/4}$

    $R_{max} \approx 1.33 \times 10^5 \text{ m}$

    $R_{max} \approx 133 \text{ km}$

---

### **3. Relation to Course Outcomes**

*   **CO1: Analyze the radiation mechanism of antennas (Knowledge Level: K3)**
    *   The Friis Transmission Equation directly quantifies the power transfer as a result of radiation and reception, linking antenna gain to the radiated power density and received power.
    *   The Radar Range Equation extends this by considering how the radiated signal interacts with a target and returns, demonstrating the complete radiation and scattering mechanism in a radar scenario.

*   **CO2: Design and measure the parameters of a microstrip antenna (Knowledge Level: K4)**
    *   While not directly about microstrip antenna design, understanding the Friis equation is essential for predicting link budget performance, which influences antenna selection and gain requirements in any system, including those using microstrip antennas. The gain parameter ($G$) is a key design parameter for microstrip antennas.

*   **CO3: Analyze and design advanced antennas (Knowledge Level: K4)**
    *   The equations provide the fundamental performance metrics that guide the design of antennas for specific applications. For advanced antennas (e.g., phased arrays, reflector antennas), their gain, effective aperture, and radiation patterns are critical inputs to these equations, allowing engineers to predict system performance and optimize antenna design for range, coverage, and signal strength.

*   **CO4: Explain the different modes and parameters of radio wave propagation (Knowledge Level: K2)**
    *   The Friis equation explicitly models free-space propagation loss. The Radar Range Equation implicitly includes propagation by assuming the power density decreases as $1/R^2$ twice (once to the target, once back). Understanding how distance and wavelength affect signal strength is fundamental to radio wave propagation.

---

### **4. Important Points to Remember**

*   **Friis Transmission Equation**: $P_r = P_t \frac{G_t G_r}{L_{fs}}$, where $L_{fs} = \left(\frac{4\pi R}{\lambda}\right)^2$. It's a link budget equation for power transfer.
*   **Gain is crucial**: Antenna gain directly impacts both the outgoing power density and the incoming signal capture.
*   **Distance dependence**: Power decreases with the square of the distance in Friis, and the received power in radar decreases with the fourth power of the distance.
*   **Radar Range Equation**: $R_{max} = \left(\frac{P_t G^2 \lambda^2 \sigma}{S_{min} (4\pi)^3 L}\right)^{1/4}$. It's a performance equation for radar detection range.
*   **Radar parameters**: Target RCS ($\sigma$) and minimum detectable signal ($S_{min}$) are critical system-dependent parameters.
*   **dB calculations**: Working with dB often simplifies calculations involving multiplications and divisions. Remember $10 \log_{10}$, $20 \log_{10}$, and $10^{x/10}$.
*   **Assumptions**: Be aware of the assumptions made in these equations (e.g., free space, far-field). Real-world scenarios often require modifications.

---

### **5. Practice Questions and Exercises**

**Question 1:**
A satellite communication system uses two antennas with gains of 20 dBi and 18 dBi. The transmitted power is 50 W. The distance between the satellite and ground station is 36,000 km. The operating frequency is 12 GHz. Calculate the received power in dBm.

**Question 2:**
A radar system has the following parameters:
*   Peak transmitted power ($P_t$): 500 kW
*   Antenna gain ($G$): 35 dBi
*   Operating frequency ($f$): 5 GHz
*   Target radar cross-section ($\sigma$): $5 m^2$
*   System losses ($L$): 6 dB
*   Minimum detectable signal ($S_{min}$): $10^{-13}$ W

Calculate the maximum range of this radar.

**Question 3:**
If the transmitted power in Question 2 were increased to 2 MW (keeping all other parameters the same), by what factor would the maximum range increase?

**Question 4:**
Explain the physical significance of the $\lambda^2$ term in the Friis Transmission Equation and the $\lambda^2$ term in the Radar Range Equation.

---

### **6. Answers to Practice Questions**

**Answer 1:**

1.  **Convert parameters**:
    *   $P_t = 50 \text{ W}$
    *   $G_t = 20 \text{ dBi} = 10^{20/10} = 100$
    *   $G_r = 18 \text{ dBi} = 10^{18/10} = 63.09$
    *   $R = 36,000 \text{ km} = 3.6 \times 10^7 \text{ m}$
    *   $f = 12 \text{ GHz} = 1.2 \times 10^{10} \text{ Hz}$
    *   $\lambda = \frac{3 \times 10^8 \text{ m/s}}{1.2 \times 10^{10} \text{ Hz}} = 0.025 \text{ m}$

2.  **Calculate $L_{fs}$**:
    $L_{fs} = \left(\frac{4\pi R}{\lambda}\right)^2 = \left(\frac{4\pi \times 3.6 \times 10^7 \text{ m}}{0.025 \text{ m}}\right)^2 \approx \left(1.81 \times 10^{10}\right)^2 \approx 3.27 \times 10^{20}$

3.  **Calculate $P_r$**:
    $P_r = P_t \frac{G_t G_r}{L_{fs}} = 50 \text{ W} \times \frac{100 \times 63.09}{3.27 \times 10^{20}} \approx 50 \text{ W} \times \frac{6309}{3.27 \times 10^{20}} \approx 9.68 \times 10^{-16} \text{ W}$

4.  **Convert to dBm**:
    $P_r (\text{dBm}) = 10 \log_{10}\left(\frac{9.68 \times 10^{-16} \text{ W}}{1 \text{ mW}}\right) = 10 \log_{10}(9.68 \times 10^{-13}) \approx 10 \times (-12.01) \approx -120.1 \text{ dBm}$

**Answer 2:**

1.  **Convert parameters**:
    *   $P_t = 500 \text{ kW} = 5 \times 10^5 \text{ W}$
    *   $G = 35 \text{ dBi} = 10^{35/10} = 10^{3.5} \approx 3162$
    *   $f = 5 \text{ GHz} = 5 \times 10^9 \text{ Hz}$
    *   $\lambda = \frac{3 \times 10^8 \text{ m/s}}{5 \times 10^9 \text{ Hz}} = 0.06 \text{ m}$
    *   $\sigma = 5 m^2$
    *   $L = 6 \text{ dB} = 10^{6/10} = 3.98$
    *   $S_{min} = 10^{-13} \text{ W}$

2.  **Apply Radar Range Equation**:
    $R_{max} = \left(\frac{P_t G^2 \lambda^2 \sigma}{S_{min} (4\pi)^3 L}\right)^{1/4}$
    $R_{max} = \left(\frac{(5 \times 10^5) \times (3162)^2 \times (0.06)^2 \times 5}{(10^{-13}) \times (4\pi)^3 \times 3.98}\right)^{1/4}$
    $R_{max} = \left(\frac{5 \times 10^5 \times 9.99 \times 10^6 \times 0.0036 \times 5}{10^{-13} \times 248.3 \times 3.98}\right)^{1/4}$
    $R_{max} = \left(\frac{8.99 \times 10^{10}}{9.88 \times 10^{-10}}\right)^{1/4}$
    $R_{max} = \left(9.10 \times 10^{19}\right)^{1/4}$
    $R_{max} \approx 5.5 \times 10^4 \text{ m}$
    $R_{max} \approx 55 \text{ km}$

**Answer 3:**
Let $R_1$ be the original range and $R_2$ be the new range.
$R_1 \propto P_t^{1/4}$
$R_2 \propto P_{t\_new}^{1/4}$

The factor by which the range increases is $\frac{R_2}{R_1} = \left(\frac{P_{t\_new}}{P_{t\_old}}\right)^{1/4}$.
$P_{t\_new} = 2 \text{ MW} = 2 \times 10^6 \text{ W}$
$P_{t\_old} = 500 \text{ kW} = 0.5 \times 10^6 \text{ W}$

Factor = $\left(\frac{2 \times 10^6}{0.5 \times 10^6}\right)^{1/4} = (4)^{1/4} = \sqrt{2} \approx 1.414$.
The maximum range would increase by a factor of approximately 1.414 (or about 41.4%).

**Answer 4:**
*   **Friis Transmission Equation ($\lambda^2$ term)**: The $\lambda^2$ term, combined with $G_t G_r$, represents the product of the effective areas of the transmit and receive antennas. Specifically, $A_{et} = \frac{\lambda^2}{4\pi}G_t$ and $A_{er} = \frac{\lambda^2}{4\pi}G_r$. The equation can be written as $P_r = P_t \frac{A_{et} A_{er}}{R^2 (\lambda)^2}$. This shows that for a fixed distance and antenna gain, a longer wavelength (smaller frequency) results in larger effective areas and thus more power transfer. Alternatively, $P_r = P_t \frac{G_t G_r}{(4\pi R/\lambda)^2}$. Here, a shorter wavelength (higher frequency) leads to less free-space path loss, hence more received power. The $\lambda^2$ influences the inverse square law relationship between power and wavelength.

*   **Radar Range Equation ($\lambda^2$ term)**: The $\lambda^2$ term in the numerator ($P_t G^2 \lambda^2 \sigma$) comes from the fact that antenna gain is related to effective aperture by $G = \frac{4\pi A_e}{\lambda^2}$. Substituting this into the equation gives $P_r \propto \frac{P_t (\frac{A_e}{\lambda^2})^2 \lambda^2 \sigma}{R^4} \propto \frac{P_t A_e^2 \sigma}{R^4 \lambda^2}$. This form shows that for a given transmitted power, target size, and receiver sensitivity, radar performance is better at longer wavelengths (lower frequencies), as the received power decreases less rapidly with distance (proportional to $\lambda^2$ in the numerator before the $R^4$ dependency dominates). However, higher frequencies generally allow for smaller antennas and better resolution.

---
This concludes the study notes for the Friis Transmission Equation and the Radar Range Equation.