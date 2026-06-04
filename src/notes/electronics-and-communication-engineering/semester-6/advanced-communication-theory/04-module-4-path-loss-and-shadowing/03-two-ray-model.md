---
title: "Two-Ray model"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 4: Path loss and shadowing"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed30"
status: "completed"
scrapedAt: "2026-05-23T17:59:06.340Z"
---
# Advanced Communication Theory: Module 4 - Path Loss and Shadowing

## Topic: Two-Ray Model

---

### 1. Introduction

The Two-Ray model is a fundamental propagation model used in wireless communication to predict signal strength at a receiver. It is a simplified model that accounts for the direct path (line-of-sight) and the reflected path of a radio signal from the ground or other large surfaces. This model is particularly useful for understanding signal behavior in scenarios where the transmitter and receiver are at moderate to large distances and at heights above the ground.

This topic aligns with **Course Outcome CO5: Describe the wireless channel models and analyze the performance of the modulation techniques for flat fading channels (Knowledge Level: K2)**, as the Two-Ray model is a foundational channel model for understanding propagation effects.

---

### 2. Key Concepts and Definitions

#### 2.1. Line-of-Sight (LOS) Path

*   **Definition:** The direct path between the transmitter (Tx) and receiver (Rx) where the signal travels without significant obstruction.
*   **Significance:** This path is often the strongest signal component.

#### 2.2. Reflected Path

*   **Definition:** The path where the signal is reflected off a surface (e.g., ground, buildings) and then reaches the receiver.
*   **Significance:** This path can interfere constructively or destructively with the LOS path, depending on the path length difference and phase.

#### 2.3. Ground Reflection

*   **Definition:** A common scenario where the signal is reflected off the Earth's surface. The reflection coefficient of the ground plays a crucial role.
*   **Significance:** The properties of the reflecting surface (e.g., conductivity, permittivity) affect the amplitude and phase of the reflected wave.

#### 2.4. Path Length Difference

*   **Definition:** The difference in distance traveled by the signal along the LOS path and the reflected path. This difference is critical in determining the phase relationship between the two components at the receiver.

#### 2.5. Phase Difference

*   **Definition:** The difference in phase between the LOS signal and the reflected signal at the receiver. This is directly related to the path length difference.

#### 2.6. Reflection Coefficient ($\Gamma$)

*   **Definition:** A complex number that describes how an electromagnetic wave is reflected by a surface. It quantifies both the amplitude and phase change upon reflection.
*   **Factors:** Depends on the properties of the reflecting surface (e.g., conductivity, permittivity, angle of incidence) and the polarization of the wave.
*   **Goldsmith (2005), Chapter 2:** Discusses reflection coefficients for various surfaces, including smooth earth and rough surfaces. For a perfectly conducting surface, the reflection coefficient is -1 for both polarizations. For a dielectric surface (like earth), it's more complex.

#### 2.7. Antenna Heights

*   **Definition:** The heights of the transmitting and receiving antennas above the reflecting surface.
*   **Significance:** These heights significantly influence the path lengths and the path length difference, thus affecting the received signal strength.

---

### 3. The Two-Ray Model: Derivation and Analysis

Consider a scenario with a transmitter Tx at height $h_t$ and a receiver Rx at height $h_r$, separated by a distance $d$. Assume a flat reflecting surface at ground level.

#### 3.1. Path Lengths

*   **Direct Path Length ($d_1$):** Assuming $d \gg h_t$ and $d \gg h_r$, the direct path length is approximately the horizontal distance $d$.
    $d_1 \approx d$

*   **Reflected Path Length ($d_2$):** Using the Pythagorean theorem, the reflected path length can be approximated. Imagine a virtual transmitter at a depth $h_t$ below the ground. The distance from this virtual transmitter to the receiver is $\sqrt{d^2 + (h_t + h_r)^2}$.
    $d_2 = \sqrt{d^2 + (h_t + h_r)^2}$

#### 3.2. Path Length Difference ($\Delta d$)

$\Delta d = d_2 - d_1 = \sqrt{d^2 + (h_t + h_r)^2} - d$

For $d \gg (h_t + h_r)$, we can use the binomial approximation $(1+x)^n \approx 1+nx$ for small $x$.
$\sqrt{d^2 + (h_t + h_r)^2} = d \sqrt{1 + \frac{(h_t + h_r)^2}{d^2}} \approx d \left(1 + \frac{1}{2} \frac{(h_t + h_r)^2}{d^2}\right) = d + \frac{(h_t + h_r)^2}{2d}$

Therefore, the path length difference is:
$\Delta d \approx \frac{(h_t + h_r)^2}{2d}$

#### 3.3. Received Electric Field Strength

The received electric field strength ($E_r$) is the vector sum of the electric fields from the direct path ($E_1$) and the reflected path ($E_2$).

$E_r = E_1 + E_2$

Where:
*   $E_1$ is the field strength from the direct path.
*   $E_2$ is the field strength from the reflected path, which includes the reflection coefficient $\Gamma$ and a phase shift due to the path length difference.

Assuming isotropic antennas and a free-space path loss for the direct path, and considering the reflection:
$E_1 = \frac{\sqrt{P_t G_t G_r} e^{-j\beta d_1}}{d_1}$
$E_2 = \frac{\sqrt{P_t G_t G_r} \Gamma e^{-j\beta d_2}}{d_2}$

Where:
*   $P_t$ is the transmitted power.
*   $G_t$ is the gain of the transmitting antenna.
*   $G_r$ is the gain of the receiving antenna.
*   $\beta = \frac{2\pi}{\lambda}$ is the phase constant, where $\lambda$ is the wavelength.

The total received electric field is:
$E_r = \frac{\sqrt{P_t G_t G_r}}{d} \left( e^{-j\beta d} + \Gamma e^{-j\beta \sqrt{d^2 + (h_t + h_r)^2}} \right)$

Using the approximation for $d_2$:
$E_r \approx \frac{\sqrt{P_t G_t G_r}}{d} \left( e^{-j\beta d} + \Gamma e^{-j(\beta d + \beta \Delta d)} \right)$
$E_r \approx \frac{\sqrt{P_t G_t G_r}}{d} e^{-j\beta d} \left( 1 + \Gamma e^{-j\beta \Delta d} \right)$

#### 3.4. Received Power ($P_r$)

The received power is proportional to the square of the magnitude of the received electric field:
$P_r = \frac{|E_r|^2}{Z_0}$ (where $Z_0$ is the characteristic impedance of the medium)

$P_r \propto |E_r|^2$
$P_r = \frac{P_t G_t G_r}{d^2} |1 + \Gamma e^{-j\beta \Delta d}|^2$

Assuming $\Gamma$ is real (e.g., for a perfectly conducting surface where $\Gamma=-1$, or for a grazing incidence on the ground), and $\beta \Delta d = \frac{2\pi}{\lambda} \frac{(h_t+h_r)^2}{2d}$:

$|1 + \Gamma e^{-j\beta \Delta d}|^2 = (1 + \Gamma \cos(\beta \Delta d))^2 + (\Gamma \sin(\beta \Delta d))^2$
$= 1 + 2\Gamma \cos(\beta \Delta d) + \Gamma^2 \cos^2(\beta \Delta d) + \Gamma^2 \sin^2(\beta \Delta d)$
$= 1 + 2\Gamma \cos(\beta \Delta d) + \Gamma^2$

If we consider a scenario with the receiver at ground level and a transmitter at a height $h_t$, with reflection off the ground:
*   The direct path length is approximately $d$.
*   The reflected path length is approximately $d + \frac{h_t^2}{d}$.
*   The path length difference $\Delta d \approx \frac{h_t^2}{d}$.
*   The phase difference $\phi = \beta \Delta d = \frac{2\pi h_t^2}{\lambda d}$.

The received power can be expressed as:
$P_r(d) = \frac{P_t G_t G_r}{d^2} \left|1 + \Gamma e^{-j \phi}\right|^2$

Assuming a smooth Earth with a reflection coefficient $\Gamma$ that is negative (e.g., $\Gamma \approx -1$ for vertical polarization and near-grazing incidence), and considering the phase shift upon reflection, the received power becomes:
$P_r(d) \approx \frac{P_t G_t G_r}{d^2} \left|1 - e^{-j \phi}\right|^2$
$P_r(d) \approx \frac{P_t G_t G_r}{d^2} |(1 - \cos \phi) + j \sin \phi|^2$
$P_r(d) \approx \frac{P_t G_t G_r}{d^2} (1 - 2\cos \phi + \cos^2 \phi + \sin^2 \phi)$
$P_r(d) \approx \frac{P_t G_t G_r}{d^2} (2 - 2\cos \phi)$
$P_r(d) \approx \frac{P_t G_t G_r}{d^2} (4 \sin^2(\phi/2))$

Substituting $\phi = \frac{2\pi h_t^2}{\lambda d}$:
$P_r(d) \approx \frac{P_t G_t G_r}{d^2} \left( \frac{4\pi^2 h_t^2}{\lambda^2 d^2} \right)$
$P_r(d) \approx \frac{P_t G_t G_r h_t^2}{\lambda^2 d^4}$

This shows that for distances where the two-ray model dominates, the path loss exponent is 4, meaning the received power drops as $d^{-4}$. This is a significant increase in path loss compared to free-space propagation ($d^{-2}$).

**Rappaport (2022), Chapter 3:** Discusses the Two-Ray model and its approximation for predicting path loss, emphasizing the $d^4$ dependence in certain scenarios.

---

### 4. Limitations of the Two-Ray Model

*   **Assumes Flat Earth:** It does not account for terrain variations or curvature of the Earth for very long distances.
*   **Single Reflection Point:** Assumes a single dominant reflection point, which might not be true in complex environments.
*   **No Multipath Fading:** It does not inherently capture the rapid fluctuations in signal strength caused by constructive and destructive interference of multiple reflected paths, which is the essence of fading.
*   **Simplified Reflection Coefficient:** Assumes a constant or smoothly varying reflection coefficient, which might not hold for all surfaces and angles.
*   **Antenna Patterns:** Often simplified to isotropic or omnidirectional antennas, neglecting directional antenna gains.
*   **Valid for Moderate Distances:** Becomes less accurate for very short distances (where LOS dominates) or very long distances (where Earth's curvature becomes significant).

---

### 5. Comparison with Other Propagation Models

*   **Free-Space Model:** Assumes no reflections or obstructions, leading to a $d^{-2}$ path loss. The Two-Ray model predicts a steeper path loss ($d^{-4}$) at distances where reflection is significant.
*   **Log-Distance Path Loss Model:** An empirical model that uses a path loss exponent, typically between 2 and 4, to approximate path loss. The Two-Ray model provides a theoretical basis for the $d^4$ exponent.
*   **Ray Tracing:** A more sophisticated model that traces multiple rays (direct, reflected, diffracted) in a detailed 3D environment, providing a more accurate prediction but requiring significant computational resources.

---

### 6. Importance and Applications

*   **Understanding Signal Behavior:** Provides a fundamental understanding of how ground reflections affect signal propagation.
*   **Predicting Path Loss:** Useful for estimating signal strength in urban and suburban environments where ground reflections are prevalent.
*   **Antenna Height Optimization:** Helps in understanding the impact of antenna heights on received signal strength.
*   **Foundation for More Complex Models:** Serves as a building block for more advanced propagation models.

---

### 7. Key Points to Remember

*   The Two-Ray model considers both the direct (LOS) and the reflected path of a signal.
*   The received signal strength is a result of constructive or destructive interference between these two paths.
*   The path length difference, dependent on antenna heights and distance, determines the phase difference.
*   For distances where the ground reflection is significant and the transmitter/receiver heights are moderate, the path loss exponent can be as high as 4 ($d^{-4}$).
*   The model is simplified and has limitations, particularly in complex environments or for very long distances.
*   It's a crucial model for understanding the impact of the wireless channel on signal propagation.

---

### 8. Practice Questions and Exercises

**Question 1:**
A transmitter and receiver are separated by a distance of 1 km. The transmitting antenna is at a height of 30 meters, and the receiving antenna is at a height of 10 meters. The carrier frequency is 2 GHz. Assume the ground reflection coefficient is approximately -1.

a) Calculate the path length difference between the direct and reflected paths.
b) Calculate the phase difference at the receiver.
c) If the transmitted power is 1 W, and the antenna gains ($G_t, G_r$) are 1, and the wavelength ($\lambda$) is 0.15 meters, estimate the received power using the Two-Ray model. Assume $d \gg (h_t + h_r)$.

**Solution 1:**
Given:
$d = 1 \text{ km} = 1000 \text{ m}$
$h_t = 30 \text{ m}$
$h_r = 10 \text{ m}$
$f = 2 \text{ GHz}$
$\Gamma \approx -1$
$P_t = 1 \text{ W}$
$G_t = 1, G_r = 1$

First, calculate the wavelength:
$\lambda = \frac{c}{f} = \frac{3 \times 10^8 \text{ m/s}}{2 \times 10^9 \text{ Hz}} = 0.15 \text{ m}$

a) Path length difference ($\Delta d$):
$\Delta d = \sqrt{d^2 + (h_t + h_r)^2} - d$
$h_t + h_r = 30 + 10 = 40 \text{ m}$
$\Delta d = \sqrt{1000^2 + 40^2} - 1000$
$\Delta d = \sqrt{1000000 + 1600} - 1000$
$\Delta d = \sqrt{1001600} - 1000$
$\Delta d \approx 1000.8 \text{ m} - 1000 \text{ m} = 0.8 \text{ m}$

Alternatively, using the approximation:
$\Delta d \approx \frac{(h_t + h_r)^2}{2d} = \frac{(40 \text{ m})^2}{2 \times 1000 \text{ m}} = \frac{1600}{2000} = 0.8 \text{ m}$

b) Phase difference ($\phi$):
$\phi = \beta \Delta d = \frac{2\pi}{\lambda} \Delta d$
$\phi = \frac{2\pi}{0.15 \text{ m}} \times 0.8 \text{ m}$
$\phi \approx 41.89 \times 0.8 \approx 33.51 \text{ radians}$

c) Received Power ($P_r$):
$P_r = P_t \left(\frac{\lambda}{4\pi}\right)^2 G_t G_r \frac{1}{d^2} |1 + \Gamma e^{-j \phi}|^2$
$P_r = P_t \left(\frac{0.15}{4\pi}\right)^2 (1)(1) \frac{1}{1000^2} |1 + (-1) e^{-j 33.51}|^2$
$P_r = 1 \times \left(\frac{0.15}{4\pi}\right)^2 \times 10^{-6} |1 - (\cos(33.51) - j \sin(33.51))|^2$
$P_r \approx (4.42 \times 10^{-4})^2 \times 10^{-6} |1 - (-0.998 - j 0.0628)|^2$
$P_r \approx 1.95 \times 10^{-7} \times 10^{-6} |1.998 + j 0.0628|^2$
$P_r \approx 1.95 \times 10^{-13} \times (1.998^2 + 0.0628^2)$
$P_r \approx 1.95 \times 10^{-13} \times (3.992 + 0.0039)$
$P_r \approx 1.95 \times 10^{-13} \times 3.996 \approx 7.8 \times 10^{-13} \text{ W}$

Let's re-evaluate using the simplified formula when $\Gamma \approx -1$ and phase difference is $\phi$:
$P_r(d) \approx \frac{P_t G_t G_r}{d^2} (4 \sin^2(\phi/2))$
$\phi/2 \approx 33.51/2 = 16.755$ radians
$\sin(16.755) \approx -0.9999$ (since $16.755 \text{ rad} \approx 5.33 \pi$)
$\sin^2(16.755) \approx (-0.9999)^2 \approx 1$

$P_r(d) \approx \frac{1 \times 1 \times 1}{1000^2} \times 4 \times 1 = \frac{4}{10^6} = 4 \times 10^{-6} \text{ W}$

The discrepancy arises from the approximation $|1 + \Gamma e^{-j \phi}|^2$ when $\Gamma=-1$.
$|1 - e^{-j \phi}|^2 = |1 - (\cos\phi - j \sin\phi)|^2 = (1-\cos\phi)^2 + \sin^2\phi = 1 - 2\cos\phi + \cos^2\phi + \sin^2\phi = 2 - 2\cos\phi = 4 \sin^2(\phi/2)$.

Using $\phi \approx 33.51$ radians:
$\cos(33.51) \approx -0.998$
$P_r = \frac{1 \times 1 \times 1}{1000^2} |1 + (-1) e^{-j 33.51}|^2$
$P_r = 10^{-6} |1 - (-0.998 - j 0.0628)|^2$
$P_r = 10^{-6} |1.998 + j 0.0628|^2$
$P_r = 10^{-6} (1.998^2 + 0.0628^2) \approx 10^{-6} (3.992 + 0.0039) \approx 3.996 \times 10^{-6} \text{ W}$.

This result is closer to the $d^{-4}$ approximation:
$P_r(d) \approx \frac{P_t G_t G_r h_t^2}{\lambda^2 d^4} = \frac{1 \times 1 \times 1 \times (30)^2}{(0.15)^2 \times (1000)^4} = \frac{900}{0.0225 \times 10^{12}} = \frac{900}{2.25 \times 10^{10}} = 400 \times 10^{-10} = 4 \times 10^{-8} \text{ W}$.

This indicates that the $d^{-4}$ approximation is valid only when the path length difference term $(h_t+h_r)^2/(2d)$ is small, and the phase is such that the interference is destructive. The $d^{-4}$ formula is derived assuming the path length difference leads to destructive interference.

Let's use the formula for received power considering the phase:
$P_r = \frac{P_t G_t G_r}{d_1^2} \left|1 + \Gamma \frac{d_1}{d_2} e^{-j\beta(d_2-d_1)}\right|^2$.
When $d_1 \approx d_2 \approx d$, and $\Gamma \approx -1$:
$P_r \approx \frac{P_t G_t G_r}{d^2} |1 - e^{-j\phi}|^2 = \frac{P_t G_t G_r}{d^2} (2 - 2\cos\phi)$

Using $\phi \approx 33.51$ radians:
$P_r \approx \frac{1 \times 1 \times 1}{1000^2} (2 - 2 \cos(33.51))$
$P_r \approx 10^{-6} (2 - 2(-0.998)) = 10^{-6} (2 + 1.996) = 3.996 \times 10^{-6} \text{ W}$.

**Key takeaway:** The $d^{-4}$ approximation is a simplification that holds when the interference is close to maximum destructive interference. The more general formula involving $\cos(\phi)$ is more accurate.

**Question 2:**
Explain why the path loss exponent in the Two-Ray model can be higher than in the Free-Space model.
**Answer:**
In the Free-Space model, the only dominant path is the direct line-of-sight path, and the received power decreases with the square of the distance ($d^{-2}$). The Two-Ray model accounts for an additional reflected path. At moderate to large distances, the reflected path and the direct path interfere. The phase difference between these two paths depends on the path length difference, which is influenced by antenna heights and the distance. When the paths interfere destructively (e.g., a phase difference of $\pi$, $3\pi$, etc.), the received signal strength is significantly reduced. This constructive and destructive interference, coupled with the increasing path length difference with distance, leads to a more rapid decrease in signal strength compared to free space. Specifically, when the path length difference is such that the reflection causes significant attenuation, the received power can decrease with the fourth power of the distance ($d^{-4}$).

**Question 3:**
Under what conditions is the $d^{-4}$ path loss dependency most prominent in the Two-Ray model?
**Answer:**
The $d^{-4}$ path loss dependency is most prominent when:
1.  **The distance ($d$) is significantly larger than the sum of the antenna heights ($h_t + h_r$):** This allows for the approximation of path lengths and the path length difference $\Delta d \approx (h_t+h_r)^2/(2d)$.
2.  **The reflection coefficient ($\Gamma$) is close to -1:** This is typical for reflections off smooth, highly conductive surfaces like the ground at near-grazing incidence, or for certain polarizations.
3.  **The phase difference ($\phi = \beta \Delta d$) results in destructive interference:** For $\Gamma = -1$, this occurs when $\phi = (2k+1)\pi$ for integer $k$. This means $4 \sin^2(\phi/2)$ is close to 4, leading to $P_r \propto d^{-4}$.

---

### 9. Alignment with Course Outcomes

*   **CO5 (Knowledge Level: K2):** The Two-Ray model is a fundamental wireless channel model. Understanding its principles and the factors affecting received signal strength (path loss, interference) directly addresses this outcome. It helps in describing how wireless signals propagate in a common scenario.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 10. References

*   **Goldsmith, A. (2005).** *Wireless Communications*. Cambridge University Press. (Chapter 2, discussing propagation models and free space loss, provides foundational concepts).
*   **Rappaport, T. S. (2022).** *Wireless Communication: Principles and Practice*. Pearson Education. (Chapter 3, often covers basic propagation models including the Two-Ray model and its implications for path loss).

---