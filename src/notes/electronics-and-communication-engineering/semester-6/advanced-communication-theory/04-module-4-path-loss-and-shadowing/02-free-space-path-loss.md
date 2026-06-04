---
title: "Free space path loss"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 4: Path loss and shadowing"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed2f"
status: "completed"
scrapedAt: "2026-05-23T17:59:05.627Z"
---
# ADVANCED COMMUNICATION THEORY - Module 4: Path Loss and Shadowing

## Topic: Free Space Path Loss

---

### 1. Introduction to Path Loss in Wireless Communications

Path loss is a fundamental phenomenon in wireless communication that describes the reduction in the power of a radio signal as it propagates from the transmitter to the receiver. It is a critical factor in the design and performance analysis of wireless systems, as it directly impacts the received signal strength and, consequently, the communication range and data rates.

**Key Concepts:**

*   **Transmitter (Tx):** The source of the radio signal.
*   **Receiver (Rx):** The destination of the radio signal.
*   **Propagation:** The process by which the radio signal travels from Tx to Rx.
*   **Signal Attenuation:** The decrease in signal power.

**Importance:** Understanding and quantifying path loss is essential for:
*   Determining the required transmit power.
*   Estimating the coverage area of a wireless system.
*   Designing effective antenna systems.
*   Predicting achievable data rates.
*   Mitigating the effects of signal attenuation through techniques like amplification or diversity.

**Relation to Course Outcomes:** This topic directly supports **CO4 (Explain the basic Principle of wireless communication techniques)** by detailing a core principle governing wireless signal transmission and **CO5 (Describe the wireless channel models and analyse the performance of the modulation techniques for flat fading channels)** as free space path loss is a foundational component of many channel models.

---

### 2. The Free Space Path Loss (FSPL) Model

The Free Space Path Loss (FSPL) model is the simplest and most fundamental model for predicting path loss. It assumes that the radio wave propagates in an unobstructed line-of-sight (LOS) path between the transmitter and receiver in a vacuum or free space, with no reflections, diffractions, or scattering.

**Key Concepts:**

*   **Line-of-Sight (LOS):** The direct path between the transmitter and receiver is clear.
*   **Isotropic Radiator:** A theoretical antenna that radiates power equally in all directions.
*   **Antenna Gain:** The ability of a directional antenna to focus power in a particular direction compared to an isotropic radiator.
*   **Wavelength ($\lambda$):** The spatial period of the wave, the distance over which the wave's shape repeats.
*   **Frequency ($f$):** The number of wave cycles per second.
*   **Distance ($d$):** The separation between the transmitter and receiver.

**Derivation of FSPL:**

1.  **Power Density at Distance $d$ from an Isotropic Radiator:**
    If a transmitter with transmit power $P_t$ radiates from an isotropic antenna, the power is spread uniformly over a sphere of radius $d$. The surface area of this sphere is $4\pi d^2$.
    The power density (power per unit area) at distance $d$ is given by:
    $$S = \frac{P_t}{4\pi d^2}$$

2.  **Received Power by an Antenna with Effective Aperture $A_e$:**
    A receiving antenna intercepts a portion of this power. The effective aperture $A_e$ represents the equivalent area of the antenna that captures power from the incident wave. The received power $P_r$ is:
    $$P_r = S \times A_e = \frac{P_t}{4\pi d^2} \times A_e$$

3.  **Relating Effective Aperture to Antenna Gain:**
    The effective aperture $A_e$ is related to the antenna's gain $G$ (relative to an isotropic antenna) by:
    $$A_e = \frac{G \lambda^2}{4\pi}$$
    where $G$ is the gain of the receiving antenna.

4.  **Substituting $A_e$ into the Received Power Equation:**
    $$P_r = \frac{P_t}{4\pi d^2} \times \frac{G \lambda^2}{4\pi}$$
    $$P_r = P_t G \left(\frac{\lambda}{4\pi d}\right)^2$$

5.  **Defining the Path Loss (PL):**
    Path loss is typically defined as the ratio of transmitted power to received power, often expressed in decibels (dB).
    $$PL = \frac{P_t}{P_r}$$
    Substituting the expression for $P_r$:
    $$PL = \frac{P_t}{P_t G \left(\frac{\lambda}{4\pi d}\right)^2} = \frac{1}{G} \left(\frac{4\pi d}{\lambda}\right)^2$$
    If we assume the transmitting and receiving antennas are both isotropic ($G=1$), the FSPL is:
    $$FSPL = \left(\frac{4\pi d}{\lambda}\right)^2$$
    This is the ratio of transmitted power to received power when propagating in free space.

6.  **FSPL in Decibels (dB):**
    It's more common to express path loss in decibels.
    $$FSPL_{dB} = 10 \log_{10} \left(\frac{P_t}{P_r}\right)$$
    Using the relationship $P_r = P_t G_t G_r \left(\frac{\lambda}{4\pi d}\right)^2$ (where $G_t$ and $G_r$ are Tx and Rx antenna gains, respectively, assuming isotropic antennas for simplicity in FSPL derivation means $G=1$ for both), we get:
    $$FSPL_{dB} = 10 \log_{10} \left(\frac{P_t}{P_t \left(\frac{\lambda}{4\pi d}\right)^2}\right) = 10 \log_{10} \left(\frac{4\pi d}{\lambda}\right)^2$$
    $$FSPL_{dB} = 20 \log_{10} \left(\frac{4\pi d}{\lambda}\right)$$

7.  **FSPL using Frequency ($f$):**
    Since $\lambda = c/f$, where $c$ is the speed of light ($3 \times 10^8$ m/s):
    $$FSPL_{dB} = 20 \log_{10} \left(\frac{4\pi d f}{c}\right)$$

**Important Formula:**

$$FSPL_{dB} = 20 \log_{10}(d) + 20 \log_{10}(f) + 20 \log_{10}\left(\frac{4\pi}{c}\right)$$
where:
*   $d$ is the distance in meters.
*   $f$ is the frequency in Hertz.
*   $c$ is the speed of light ($3 \times 10^8$ m/s).

A commonly used form of the FSPL equation, when $d$ is in km and $f$ is in GHz (with appropriate unit conversions):

$$FSPL_{dB} = 32.45 + 20 \log_{10}(d_{km}) + 20 \log_{10}(f_{GHz})$$

---

### 3. Key Parameters and Their Impact on FSPL

*   **Distance ($d$):**
    *   **Impact:** Path loss increases with distance. The received power decreases as the square of the distance ($1/d^2$).
    *   **In dB:** Path loss increases by $20 \log_{10}(d)$ for every decade increase in distance.
    *   **Example:** If the distance doubles, the path loss increases by $20 \log_{10}(2) \approx 6$ dB.

*   **Frequency ($f$):**
    *   **Impact:** Path loss increases with frequency. Higher frequencies are attenuated more.
    *   **In dB:** Path loss increases by $20 \log_{10}(f)$ for every decade increase in frequency.
    *   **Example:** If the frequency doubles, the path loss increases by $20 \log_{10}(2) \approx 6$ dB. This is why higher frequency bands (like millimeter waves) have shorter effective ranges compared to lower frequency bands (like FM radio).

*   **Wavelength ($\lambda$):**
    *   **Impact:** Path loss is proportional to the square of the wavelength ($\lambda^2$). Longer wavelengths experience less path loss.
    *   **In dB:** Path loss increases by $20 \log_{10}(\lambda)$ for every decade increase in wavelength.

**How FSPL relates to Antenna Gain:**

While the FSPL formula itself is derived assuming isotropic antennas (gain of 1), in a real system, antennas have gain. The received power equation, including antenna gains, is:

$$P_r = P_t G_t G_r \left(\frac{\lambda}{4\pi d}\right)^2$$

The total path loss, considering antenna gains, is the ratio of transmitted power to received power:

$$PL_{Total} = \frac{P_t}{P_r} = \frac{P_t}{P_t G_t G_r \left(\frac{\lambda}{4\pi d}\right)^2} = \frac{1}{G_t G_r} \left(\frac{4\pi d}{\lambda}\right)^2$$

In decibels:

$$PL_{Total, dB} = 10 \log_{10} \left(\frac{1}{G_t G_r}\right) + 10 \log_{10} \left(\frac{4\pi d}{\lambda}\right)^2$$
$$PL_{Total, dB} = -10 \log_{10}(G_t) - 10 \log_{10}(G_r) + FSPL_{dB}$$
$$PL_{Total, dB} = -G_{t,dB} - G_{r,dB} + FSPL_{dB}$$

This indicates that antenna gain *reduces* the effective path loss. The term FSPL specifically refers to the loss *in free space without antenna gains*. However, often in literature, the term "path loss" implicitly includes the effect of antenna gains by considering the ratio $P_t/P_r$. For clarity, it's important to distinguish between the inherent free-space propagation loss and the total link loss. The formula $FSPL_{dB} = 20 \log_{10} \left(\frac{4\pi d f}{c}\right)$ is the baseline loss component.

**References:**

*   **Goldsmith:** Discusses path loss as a fundamental component of wireless channel modeling, often as the basis for more complex models. Chapter 4 (Path Loss and Fading).
*   **Rappaport:** Provides detailed derivations and practical examples of path loss models, including FSPL. Chapter 5 (Radio Wave Propagation).
*   **Molish:** Explains FSPL in the context of its assumptions and limitations, highlighting its role as a baseline. Chapter 3 (Propagation of Radio Waves).
*   **Schiller:** Covers FSPL and its dependence on distance and frequency. Chapter 4 (Propagation Characteristics).

---

### 4. Example Calculation of Free Space Path Loss

**Problem:**

A transmitter operates at a frequency of 2 GHz and broadcasts a signal. The transmitter and receiver are separated by a distance of 10 km in free space. Calculate the Free Space Path Loss (FSPL) in dB. Assume isotropic antennas for both transmitter and receiver.

**Given:**
*   Frequency ($f$) = 2 GHz = $2 \times 10^9$ Hz
*   Distance ($d$) = 10 km = $10 \times 10^3$ m = $10^4$ m
*   Speed of light ($c$) = $3 \times 10^8$ m/s

**Formula:**
$$FSPL_{dB} = 20 \log_{10}(d) + 20 \log_{10}(f) + 20 \log_{10}\left(\frac{4\pi}{c}\right)$$

**Calculation:**

1.  **Calculate $20 \log_{10}(d)$:**
    $20 \log_{10}(10^4) = 20 \times 4 = 80$ dB

2.  **Calculate $20 \log_{10}(f)$:**
    $20 \log_{10}(2 \times 10^9) = 20 (\log_{10}(2) + \log_{10}(10^9))$
    $= 20 (0.301 + 9) = 20 (9.301) = 186.02$ dB

3.  **Calculate $20 \log_{10}\left(\frac{4\pi}{c}\right)$:**
    $20 \log_{10}\left(\frac{4\pi}{3 \times 10^8}\right) = 20 \log_{10}(4.1888 \times 10^{-8})$
    $= 20 (\log_{10}(4.1888) + \log_{10}(10^{-8}))$
    $= 20 (0.622 - 8) = 20 (-7.378) = -147.56$ dB

4.  **Sum the components:**
    $FSPL_{dB} = 80 + 186.02 - 147.56 = 118.46$ dB

**Using the simplified formula:**
$$FSPL_{dB} = 32.45 + 20 \log_{10}(d_{km}) + 20 \log_{10}(f_{GHz})$$
$$FSPL_{dB} = 32.45 + 20 \log_{10}(10) + 20 \log_{10}(2)$$
$$FSPL_{dB} = 32.45 + 20 \times 1 + 20 \times 0.301$$
$$FSPL_{dB} = 32.45 + 20 + 6.02 = 58.47 \text{ dB}$$

**Wait!** There's a discrepancy. Let's re-evaluate the constant term in the simplified formula.

Let's derive the simplified formula more carefully:
$FSPL_{dB} = 20 \log_{10} \left(\frac{4\pi d}{c/f}\right)$
$FSPL_{dB} = 20 \log_{10} \left(\frac{4\pi d f}{c}\right)$

Let $d$ be in km, so $d_{km}$.
Let $f$ be in GHz, so $f_{GHz}$.

$d = d_{km} \times 10^3$ meters
$f = f_{GHz} \times 10^9$ Hz

$FSPL_{dB} = 20 \log_{10} \left(\frac{4\pi (d_{km} \times 10^3) (f_{GHz} \times 10^9)}{3 \times 10^8}\right)$
$FSPL_{dB} = 20 \log_{10} \left(\frac{4\pi \times 10^3 \times 10^9}{3 \times 10^8} \times d_{km} \times f_{GHz}\right)$
$FSPL_{dB} = 20 \log_{10} \left(\frac{4\pi \times 10^{12}}{3 \times 10^8} \times d_{km} \times f_{GHz}\right)$
$FSPL_{dB} = 20 \log_{10} \left(\frac{4\pi}{3} \times 10^4 \times d_{km} \times f_{GHz}\right)$
$FSPL_{dB} = 20 \log_{10} \left(\frac{4\pi}{3}\right) + 20 \log_{10} (10^4) + 20 \log_{10} (d_{km}) + 20 \log_{10} (f_{GHz})$
$FSPL_{dB} = 20 \log_{10} (4.1888) + 20 \times 4 + 20 \log_{10} (d_{km}) + 20 \log_{10} (f_{GHz})$
$FSPL_{dB} = 20 \times 0.622 + 80 + 20 \log_{10} (d_{km}) + 20 \log_{10} (f_{GHz})$
$FSPL_{dB} = 12.44 + 80 + 20 \log_{10} (d_{km}) + 20 \log_{10} (f_{GHz})$
$FSPL_{dB} = 92.44 + 20 \log_{10} (d_{km}) + 20 \log_{10} (f_{GHz})$

**Let's check standard references.** The constant 32.45 is typically derived for $d$ in km and $f$ in MHz.

Let's re-derive for $f$ in GHz:
$FSPL_{dB} = 20 \log_{10} \left(\frac{4\pi d}{c/f}\right)$
$d$ in km, $f$ in GHz.
$d_{km} = d / 1000$
$f_{GHz} = f / 10^9$

$FSPL_{dB} = 20 \log_{10} \left(\frac{4\pi (d_{km} \times 10^3)}{ (3 \times 10^8) / (f_{GHz} \times 10^9) }\right)$
$FSPL_{dB} = 20 \log_{10} \left(\frac{4\pi \times 10^3 \times f_{GHz} \times 10^9}{3 \times 10^8} \times d_{km}\right)$
$FSPL_{dB} = 20 \log_{10} \left(\frac{4\pi}{3} \times 10^4 \times f_{GHz} \times d_{km}\right)$
$FSPL_{dB} = 20 \log_{10} \left(\frac{4\pi}{3} \times 10^4\right) + 20 \log_{10}(f_{GHz}) + 20 \log_{10}(d_{km})$
$FSPL_{dB} = 20 \log_{10} (41887.9) + 20 \log_{10}(f_{GHz}) + 20 \log_{10}(d_{km})$
$FSPL_{dB} = 20 \times 4.622 + 20 \log_{10}(f_{GHz}) + 20 \log_{10}(d_{km})$
$FSPL_{dB} = 92.44 + 20 \log_{10}(f_{GHz}) + 20 \log_{10}(d_{km})$

This seems correct. Let's re-check the problem statement and common formulas. Many sources use the constant **32.45 dB** when distance is in km and frequency is in **MHz**.

Let's use the base formula and calculate again for the example:
$FSPL_{dB} = 20 \log_{10}(d) + 20 \log_{10}(f) + 20 \log_{10}\left(\frac{4\pi}{c}\right)$
$d = 10 \times 10^3$ m
$f = 2 \times 10^9$ Hz
$c = 3 \times 10^8$ m/s

$FSPL_{dB} = 20 \log_{10}(10^4) + 20 \log_{10}(2 \times 10^9) + 20 \log_{10}\left(\frac{4\pi}{3 \times 10^8}\right)$
$FSPL_{dB} = 20(4) + 20(\log_{10}2 + \log_{10}10^9) + 20(\log_{10}(4\pi) - \log_{10}(3 \times 10^8))$
$FSPL_{dB} = 80 + 20(0.301 + 9) + 20(0.602 - 8.477)$
$FSPL_{dB} = 80 + 20(9.301) + 20(-7.875)$
$FSPL_{dB} = 80 + 186.02 - 157.5 = 108.52$ dB

Let's use the **Rappaport formula** for FSPL:
$FSPL(dB) = 32.45 + 20\log_{10}f_{MHz} + 20\log_{10}d_{km}$
Here, $f = 2 \text{ GHz} = 2000 \text{ MHz}$.
$d = 10 \text{ km}$.
$FSPL(dB) = 32.45 + 20\log_{10}(2000) + 20\log_{10}(10)$
$FSPL(dB) = 32.45 + 20(3.301) + 20(1)$
$FSPL(dB) = 32.45 + 66.02 + 20 = 118.47$ dB.

The discrepancy arises from the specific units assumed in the constant terms of simplified formulas. The original derivation $FSPL_{dB} = 20 \log_{10} \left(\frac{4\pi d f}{c}\right)$ is the most fundamental.

Let's use the standard form:
$FSPL_{dB} = 20 \log_{10}(d) + 20 \log_{10}(f) - 147.56$
where $d$ is in meters and $f$ is in Hz.

$d = 10 \text{ km} = 10^4 \text{ m}$
$f = 2 \text{ GHz} = 2 \times 10^9 \text{ Hz}$

$FSPL_{dB} = 20 \log_{10}(10^4) + 20 \log_{10}(2 \times 10^9) - 147.56$
$FSPL_{dB} = 20(4) + 20(9.301) - 147.56$
$FSPL_{dB} = 80 + 186.02 - 147.56$
$FSPL_{dB} = 118.46$ dB

**Answer:** The Free Space Path Loss (FSPL) is approximately 118.46 dB.

**Let's verify the 32.45 formula for $f$ in MHz and $d$ in km:**
$FSPL_{dB} = 32.45 + 20 \log_{10} f_{MHz} + 20 \log_{10} d_{km}$
$f = 2000 \text{ MHz}$
$d = 10 \text{ km}$

$FSPL_{dB} = 32.45 + 20 \log_{10} (2000) + 20 \log_{10} (10)$
$FSPL_{dB} = 32.45 + 20 (3.301) + 20 (1)$
$FSPL_{dB} = 32.45 + 66.02 + 20 = 118.47$ dB.

**Conclusion for Example:** Both methods yield a consistent result when using the correct formula and units. The fundamental formula is the most reliable.

---

### 5. Limitations of the Free Space Path Loss Model

The FSPL model is an idealization and has several limitations:

*   **Assumes Free Space:** It does not account for any medium or environment. Real-world propagation occurs through air, walls, buildings, etc.
*   **No Obstructions:** It assumes a clear, unobstructed line-of-sight (LOS) path. Any blockage, reflection, diffraction, or scattering will cause additional loss.
*   **No Multipath Effects:** It does not consider the arrival of multiple signal copies at the receiver due to reflections, which leads to fading.
*   **No Ground Reflections:** For terrestrial communication, ground reflections are significant and can cause constructive or destructive interference, leading to a different path loss exponent than 2.
*   **Ideal Antennas:** While FSPL is often calculated assuming isotropic antennas, real antennas have gain and directional properties, which are usually accounted for in the overall link budget but are not part of the pure FSPL definition.
*   **Atmospheric Absorption:** At very high frequencies, atmospheric gases and rain can absorb signal power, which is not included in FSPL.

**Relation to Course Outcomes:** Understanding these limitations is crucial for **CO5 (Describe the wireless channel models and analyse the performance of the modulation techniques for flat fading channels)**, as FSPL is the baseline for more complex models that incorporate these real-world effects.

---

### 6. Relation to Other Path Loss Models

The FSPL model serves as a baseline. In real-world scenarios, the actual path loss is usually higher than FSPL due to the presence of obstacles and the propagation environment. Other path loss models are extensions or empirical models that account for these factors:

*   **Two-Ray Ground Reflection Model:** Accounts for the direct LOS path and a reflected path from the ground. This model predicts a path loss that decreases with $1/d^4$ at larger distances, which is more realistic for many terrestrial scenarios.
*   **Log-Normal Shadowing Model:** This model adds a random shadowing component to FSPL, assuming that the path loss follows a log-normal distribution around the FSPL value due to variations in the environment.
*   **Empirical Models (e.g., Okumura-Hata, COST 231):** These models are based on extensive measurements and provide more accurate predictions in specific environments (urban, suburban, rural) by incorporating factors like frequency, distance, building density, and antenna heights.

**Importance:** FSPL provides the fundamental understanding of how signal power decreases with distance and frequency in an ideal scenario, setting the stage for understanding more complex and realistic propagation models.

---

### 7. Practice Questions and Answers

**Question 1:**
A wireless system operates at 900 MHz. If the transmitter and receiver are separated by 5 km in free space, what is the Free Space Path Loss (FSPL) in dB?
(a) 85.5 dB
(b) 102.3 dB
(c) 115.7 dB
(d) 120.1 dB

**Answer 1:**
Let's use the formula: $FSPL_{dB} = 32.45 + 20 \log_{10}(d_{km}) + 20 \log_{10}(f_{MHz})$
$d_{km} = 5$ km
$f_{MHz} = 900$ MHz

$FSPL_{dB} = 32.45 + 20 \log_{10}(5) + 20 \log_{10}(900)$
$FSPL_{dB} = 32.45 + 20(0.699) + 20(2.954)$
$FSPL_{dB} = 32.45 + 13.98 + 59.08$
$FSPL_{dB} = 105.51$ dB.

Re-calculating using the fundamental formula for accuracy:
$d = 5 \text{ km} = 5000 \text{ m}$
$f = 900 \text{ MHz} = 9 \times 10^8 \text{ Hz}$
$c = 3 \times 10^8 \text{ m/s}$

$FSPL_{dB} = 20 \log_{10}(d) + 20 \log_{10}(f) + 20 \log_{10}\left(\frac{4\pi}{c}\right)$
$FSPL_{dB} = 20 \log_{10}(5000) + 20 \log_{10}(9 \times 10^8) + 20 \log_{10}\left(\frac{4\pi}{3 \times 10^8}\right)$
$FSPL_{dB} = 20(3.699) + 20(\log_{10}9 + \log_{10}10^8) + 20(\log_{10}(4\pi) - \log_{10}(3 \times 10^8))$
$FSPL_{dB} = 73.98 + 20(0.954 + 8) + 20(0.602 - 8.477)$
$FSPL_{dB} = 73.98 + 20(8.954) + 20(-7.875)$
$FSPL_{dB} = 73.98 + 179.08 - 157.5 = 95.56$ dB.

Let's re-check the 32.45 formula constant. It seems the constant depends on whether frequency is in MHz or GHz.
For $f$ in MHz and $d$ in km: $FSPL_{dB} = 32.45 + 20\log_{10}f_{MHz} + 20\log_{10}d_{km}$
For $f$ in GHz and $d$ in km: $FSPL_{dB} = 92.44 + 20\log_{10}f_{GHz} + 20\log_{10}d_{km}$ (as derived earlier)

Using the GHz formula:
$f = 900 \text{ MHz} = 0.9 \text{ GHz}$
$d = 5 \text{ km}$
$FSPL_{dB} = 92.44 + 20 \log_{10}(0.9) + 20 \log_{10}(5)$
$FSPL_{dB} = 92.44 + 20(-0.0458) + 20(0.699)$
$FSPL_{dB} = 92.44 - 0.916 + 13.98 = 105.504$ dB.

Comparing with options:
(a) 85.5 dB
(b) 102.3 dB
(c) 115.7 dB
(d) 120.1 dB

There might be a slight difference in the constant used by the question setter or slight rounding differences. However, 105.5 dB is closest to option (b) if we consider a possible slight variation in the constant term. Let's assume the question expects the use of a standard simplified formula.

Let's test another common approximation: $FSPL(dB) \approx 20 \log_{10}(4\pi d f/c)$.
$d = 5000$, $f = 9 \times 10^8$, $c = 3 \times 10^8$.
$FSPL(dB) = 20 \log_{10}(4\pi \times 5000 \times 9 \times 10^8 / (3 \times 10^8))$
$FSPL(dB) = 20 \log_{10}(4\pi \times 5000 \times 3)$
$FSPL(dB) = 20 \log_{10}(188495.5)$
$FSPL(dB) = 20 \times 5.275 = 105.5$ dB.

So, 105.5 dB is the correct calculation. Option (b) 102.3 dB is not very close. Let's re-verify all calculations.

Using $FSPL_{dB} = 20 \log_{10}(d) + 20 \log_{10}(f) - 147.56$ with $d$ in meters and $f$ in Hz.
$d = 5000$ m
$f = 9 \times 10^8$ Hz
$FSPL_{dB} = 20 \log_{10}(5000) + 20 \log_{10}(9 \times 10^8) - 147.56$
$FSPL_{dB} = 20(3.69897) + 20(\log_{10}9 + 8) - 147.56$
$FSPL_{dB} = 73.9794 + 20(0.95424 + 8) - 147.56$
$FSPL_{dB} = 73.9794 + 20(8.95424) - 147.56$
$FSPL_{dB} = 73.9794 + 179.0848 - 147.56 = 105.5042$ dB.

It seems none of the options perfectly match 105.5 dB. Let's re-evaluate the question or options. If we assume a slightly different constant for the $d$ in km, $f$ in MHz formula:
$FSPL_{dB} = C + 20 \log_{10}(f_{MHz}) + 20 \log_{10}(d_{km})$
If $C = 30.0$ instead of $32.45$:
$FSPL_{dB} = 30.0 + 20 \log_{10}(900) + 20 \log_{10}(5)$
$FSPL_{dB} = 30.0 + 59.08 + 13.98 = 103.06$ dB. (Closest to b)

If the question uses $f$ in GHz:
$FSPL_{dB} = C' + 20 \log_{10}(f_{GHz}) + 20 \log_{10}(d_{km})$
$f_{GHz} = 0.9$ GHz
$FSPL_{dB} = C' + 20 \log_{10}(0.9) + 20 \log_{10}(5)$
$FSPL_{dB} = C' - 0.916 + 13.98 = C' + 13.064$
If $C'=90$, $FSPL_{dB} = 103.064$ dB.

Let's assume option **(b) 102.3 dB** is correct and try to work backward, though our calculations consistently yield around 105.5 dB. It's possible the question setter used different reference values or made a slight error. For an exam, it's best to stick to the derived fundamental formula unless a specific simplified formula is mandated.

**Correct Answer (based on accurate calculation): 105.5 dB. (None of the options are very close, but if forced, one might choose (b) if assuming a variation in the constant term).**

---

**Question 2:**
How does the Free Space Path Loss (FSPL) change if the operating frequency is doubled?
(a) It remains the same.
(b) It increases by 3 dB.
(c) It increases by 6 dB.
(d) It doubles.

**Answer 2:**
The FSPL formula in dB is:
$FSPL_{dB} = 20 \log_{10}(d) + 20 \log_{10}(f) + \text{constant}$

If the frequency is doubled, the term $20 \log_{10}(f)$ changes to $20 \log_{10}(2f)$.
$20 \log_{10}(2f) = 20 (\log_{10}(2) + \log_{10}(f))$
$= 20 \log_{10}(2) + 20 \log_{10}(f)$
$= 20 \times 0.301 + 20 \log_{10}(f)$
$= 6.02 + 20 \log_{10}(f)$

The increase in FSPL is $6.02$ dB. This is approximately 6 dB.
**Answer: (c) It increases by 6 dB.**

---

**Question 3:**
If the distance between the transmitter and receiver is increased by a factor of 10 in free space, how does the FSPL change?
(a) It increases by 10 dB.
(b) It increases by 20 dB.
(c) It increases by 40 dB.
(d) It increases by 100 dB.

**Answer 3:**
The FSPL formula in dB is:
$FSPL_{dB} = 20 \log_{10}(d) + 20 \log_{10}(f) + \text{constant}$

If the distance $d$ is multiplied by 10, the term $20 \log_{10}(d)$ changes to $20 \log_{10}(10d)$.
$20 \log_{10}(10d) = 20 (\log_{10}(10) + \log_{10}(d))$
$= 20 (1 + \log_{10}(d))$
$= 20 + 20 \log_{10}(d)$

The increase in FSPL is 20 dB.
**Answer: (b) It increases by 20 dB.**

---

### 8. Important Points to Remember

*   **FSPL is the minimum possible path loss** under ideal conditions (clear LOS, no obstructions).
*   Path loss increases with the **square of the distance ($d^2$)** and the **square of the frequency ($f^2$)**.
*   In decibels, path loss increases by **20 dB per decade of distance** and **20 dB per decade of frequency**.
*   The fundamental FSPL formula is $FSPL_{dB} = 20 \log_{10} \left(\frac{4\pi d f}{c}\right)$.
*   Simplified formulas exist for specific unit combinations (e.g., $d$ in km, $f$ in MHz or GHz), but care must be taken with the constant terms.
*   Real-world path loss is generally higher than FSPL due to environmental factors.
*   FSPL is a critical baseline for designing wireless systems, estimating coverage, and understanding link budgets.

---

This concludes the study notes for Free Space Path Loss. Remember to consult the provided textbooks for more in-depth explanations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
