---
title: "Path loss and shadowing"
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 4: Path loss and shadowing"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed2e"
status: "completed"
scrapedAt: "2026-05-23T17:59:04.915Z"
---
# ADVANCED COMMUNICATION THEORY: Module 4 - Path Loss and Shadowing

This module delves into the fundamental phenomena that affect signal propagation in wireless environments: path loss and shadowing. Understanding these concepts is crucial for designing robust and efficient wireless communication systems.

## Learning Outcomes:

*   **Understanding Path Loss:** Explain the phenomenon of path loss and its dependence on distance and frequency. (K2)
*   **Understanding Shadowing:** Describe the concept of shadowing and its causes. (K2)
*   **Modeling Path Loss:** Model path loss using different propagation models (e.g., Free Space, Log-Distance). (K3)
*   **Modeling Shadowing:** Model shadowing using statistical distributions (e.g., Lognormal). (K3)
*   **Combined Impact:** Analyze the combined impact of path loss and shadowing on signal strength. (K3)
*   **System Design Implications:** Discuss how path loss and shadowing affect system design parameters like coverage, transmit power, and antenna gain. (K2)

## 1. Introduction to Radio Wave Propagation

Radio waves, when transmitted from an antenna, do not reach the receiver with the same strength as they were emitted. Several physical phenomena cause the signal strength to attenuate (decrease) as it travels. These attenuations are broadly categorized as:

*   **Path Loss:** The loss of signal strength due to the signal traveling over a distance. This is the most fundamental loss.
*   **Shadowing:** The loss of signal strength due to obstacles in the propagation path that block or absorb the radio waves. This is a statistical phenomenon.
*   **Fading:** Fluctuations in signal strength caused by constructive and destructive interference of multipath components. (While not the primary focus of this module, it's an important related concept often discussed alongside path loss and shadowing).

Understanding and accurately modeling these phenomena is critical for:

*   **Coverage Prediction:** Determining the area where a signal can be reliably received.
*   **Interference Analysis:** Estimating the strength of interfering signals.
*   **Resource Allocation:** Deciding on transmit power, antenna heights, and gains.
*   **Link Budget Calculations:** Estimating the overall signal-to-noise ratio (SNR) of a wireless link.

**Relevant Textbook Reference:**
*   **Goldsmith, Chapter 3:** Discusses fundamental propagation mechanisms and models.
*   **Rappaport, Chapter 4:** Provides an in-depth analysis of propagation models.

## 2. Path Loss

**Definition:** Path loss refers to the reduction in the intensity of a radio signal as it travels from the transmitter to the receiver. It is a deterministic component of signal attenuation that primarily depends on the distance between the transmitter and receiver and the frequency of operation.

**Key Factors Influencing Path Loss:**

*   **Distance (d):** The most significant factor. Signal strength generally decreases with increasing distance.
*   **Frequency (f):** Higher frequencies tend to experience greater path loss than lower frequencies, especially in the presence of obstacles.
*   **Antenna Characteristics:** Transmit and receive antenna gains and heights influence how much power is radiated and received.
*   **Environment:** The nature of the propagation environment (open space, urban, indoor) significantly impacts path loss.

### 2.1 Free Space Path Loss (FSPL)

**Concept:** This is the simplest model, assuming a direct line-of-sight (LOS) path between the transmitter and receiver with no obstructions or reflections. It represents the minimum possible path loss.

**Formula:** The FSPL is the loss incurred when a signal propagates from an isotropic radiator (a hypothetical antenna radiating power uniformly in all directions) to a receiving antenna. It can be derived from the Friis transmission equation.

The power received ($P_r$) by an antenna with effective aperture ($A_e$) from a transmitter radiating power ($P_t$) from an antenna with gain ($G_t$) is given by:

$P_r = P_t G_t G_r \left(\frac{\lambda}{4\pi d}\right)^2$

Where:
*   $P_t$: Transmitted power (Watts)
*   $G_t$: Transmit antenna gain (dimensionless)
*   $G_r$: Receive antenna gain (dimensionless)
*   $\lambda$: Wavelength of the signal ($c/f$, where $c$ is the speed of light and $f$ is the frequency)
*   $d$: Distance between transmitter and receiver (meters)

**Path Loss (PL) in dB:** Path loss is typically expressed in decibels (dB).

$PL_{FSPL} (dB) = 10 \log_{10} \left(\frac{P_t}{P_r}\right)$

Substituting the Friis equation and simplifying, we get:

$PL_{FSPL} (dB) = 10 \log_{10} \left(\frac{(4\pi d)^2}{\lambda^2} \frac{1}{G_t G_r}\right)$

If we consider unit gain antennas ($G_t = G_r = 1$) and express $\lambda$ in terms of frequency ($ \lambda = c/f $):

$PL_{FSPL} (dB) = 20 \log_{10} \left(\frac{4\pi d f}{c}\right)$

**Important Points:**
*   FSPL is proportional to the square of the distance ($d^2$) and the square of the frequency ($f^2$).
*   In dB, FSPL increases by 20 dB for every tenfold increase in distance.
*   In dB, FSPL increases by 20 dB for every doubling of frequency (or 6 dB per octave).

**Example:**
Calculate the Free Space Path Loss at 2 GHz for a distance of 1 km with unit gain antennas.
$c = 3 \times 10^8$ m/s
$f = 2 \times 10^9$ Hz
$d = 1000$ m

$PL_{FSPL} (dB) = 20 \log_{10} \left(\frac{4\pi \times 1000 \times 2 \times 10^9}{3 \times 10^8}\right)$
$PL_{FSPL} (dB) = 20 \log_{10} \left(\frac{8\pi \times 10^{12}}{3 \times 10^8}\right)$
$PL_{FSPL} (dB) = 20 \log_{10} \left(\frac{8\pi}{3} \times 10^4\right)$
$PL_{FSPL} (dB) = 20 \log_{10} (83.77 \times 10^4)$
$PL_{FSPL} (dB) = 20 \log_{10} (8.377 \times 10^5)$
$PL_{FSPL} (dB) = 20 \times (\log_{10} 8.377 + \log_{10} 10^5)$
$PL_{FSPL} (dB) = 20 \times (0.923 + 5)$
$PL_{FSPL} (dB) = 20 \times 5.923 \approx 118.46$ dB

**Reference:**
*   **Goldsmith, Chapter 3.1.1:** Derivation of Free Space Path Loss.
*   **Rappaport, Chapter 4.3.1:** Free Space Path Loss formula and its implications.

### 2.2 Empirical Path Loss Models

In real-world scenarios, the environment is rarely "free space." Obstacles like buildings, trees, and terrain cause additional signal attenuation. Empirical models are developed based on measurements in various environments to predict path loss more accurately.

#### 2.2.1 The Log-Distance Path Loss Model

**Concept:** This model states that path loss is a function of distance, with the loss increasing logarithmically with distance. It is one of the most widely used empirical models.

**Formula:**
The path loss at distance $d$ is given by:

$PL(d) (dB) = PL(d_0) + 10n \log_{10} \left(\frac{d}{d_0}\right)$

Where:
*   $PL(d)$: Path loss in dB at distance $d$.
*   $PL(d_0)$: Path loss in dB at a reference distance $d_0$. This is often set to the FSPL at $d_0$.
*   $n$: The path loss exponent. This is a value that depends on the propagation environment.
*   $d$: The distance from the transmitter.
*   $d_0$: A reference distance (e.g., 1 meter or 100 meters), usually chosen to be in the "far-field" of the antennas.

**Path Loss Exponent (n):**
The value of 'n' is crucial and indicates how quickly the path loss increases with distance.

*   **Free Space:** $n = 2$ (corresponds to the $d^2$ dependency)
*   **Open Rural Area:** $n \approx 2$ to $2.5$
*   **Suburban Area:** $n \approx 2.7$ to $3.5$
*   **Urban Area:** $n \approx 3$ to $4$
*   **Indoor Environments:** $n \approx 1.5$ to $5$ (highly variable)

**Example:**
Consider a system where the path loss at 1 km is measured to be 120 dB. If the path loss exponent for the environment is $n=3.5$, what is the path loss at 5 km?
Let $d_0 = 1$ km, $PL(d_0) = 120$ dB.
$d = 5$ km.

$PL(5 \text{ km}) = 120 + 10 \times 3.5 \log_{10} \left(\frac{5}{1}\right)$
$PL(5 \text{ km}) = 120 + 35 \log_{10}(5)$
$PL(5 \text{ km}) = 120 + 35 \times 0.699$
$PL(5 \text{ km}) = 120 + 24.465 \approx 144.47$ dB

**Important Points:**
*   The log-distance model is effective for predicting path loss over a range of distances once the path loss exponent 'n' for a specific environment is known.
*   Choosing an appropriate reference distance ($d_0$) and path loss exponent ($n$) is critical for the accuracy of this model.
*   Higher values of 'n' indicate environments where signal strength decays more rapidly with distance, typically due to more obstructions.

**Reference:**
*   **Goldsmith, Chapter 3.2:** Log-distance path loss model.
*   **Rappaport, Chapter 4.3.2:** Log-distance model and its variations.

#### 2.2.2 Other Empirical Models

While the log-distance model is fundamental, other models have been developed for specific environments:

*   **Okumura-Hata Model:** An empirical model widely used for mobile communication systems in urban areas. It provides an average path loss based on frequency, distance, and the height of the base station antenna. (Rappaport, Chapter 4.3.3)
*   **Cost 231 Hata Model:** An extension of the Okumura-Hata model that is valid for higher frequencies and larger urban areas. (Rappaport, Chapter 4.3.4)
*   **Indoor Path Loss Models:** Models specific to indoor environments (e.g., office buildings, shopping malls) that account for walls, floors, and furniture. (Goldsmith, Chapter 3.2.2)

## 3. Shadowing

**Definition:** Shadowing, also known as "log-normal shadowing" or "slow fading," refers to the phenomenon where the signal strength fluctuates due to variations in the propagation environment caused by large objects (buildings, hills, etc.) that block or absorb radio waves. These variations occur relatively slowly as the receiver moves over larger distances.

**Causes of Shadowing:**

*   **Obstructions:** Buildings, terrain features, and even dense foliage can block or scatter radio waves.
*   **Absorption:** Materials like concrete, brick, and even water can absorb radio frequency energy.
*   **Reflection and Scattering:** Complex environments can lead to signal redirection, creating areas of deeper signal loss.

**Characteristics of Shadowing:**

*   **Statistical Nature:** Shadowing is inherently statistical. Its effect cannot be precisely predicted for a given location but can be characterized by probability distributions.
*   **Large-Scale Variations:** Shadowing is a large-scale effect, meaning it changes over distances of tens or hundreds of meters, in contrast to small-scale fading which occurs over wavelengths.
*   **Frequency Dependence:** Higher frequencies are more susceptible to shadowing because they are more easily blocked or absorbed by obstacles.

### 3.1 The Lognormal Shadowing Model

**Concept:** Shadowing is often modeled using a lognormal distribution. This means that the path loss due to shadowing, when expressed in decibels, is a random variable that follows a normal (Gaussian) distribution.

**Formula:**
The received signal power ($P_r$) is modeled as:

$P_r (dBm) = P_t (dBm) - PL_{FSPL}(d) (dB) - PL_{shadowing} (dB)$

Where $PL_{shadowing}$ is the shadowing loss. In the lognormal model, the shadowing loss is a random variable denoted by $X_{\sigma}$ with a mean of 0 and a standard deviation of $\sigma$.

$P_r (dBm) = P_t (dBm) - PL_{FSPL}(d) (dB) - X_{\sigma}$

The probability density function (PDF) of $X_{\sigma}$ is:

$f_{X_{\sigma}}(x) = \frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{x^2}{2\sigma^2}}$

This means that the received power (in dB) is given by:

$P_r (dB) = \text{average path loss} (dB) + X_{\sigma}$

The average path loss is usually calculated using a path loss model like the log-distance model.

**Standard Deviation ($\sigma$):**
The standard deviation, $\sigma$, is a parameter that quantifies the severity of shadowing. It is typically measured in decibels (dB).

*   **Open Areas:** $\sigma$ is small, around 3-6 dB.
*   **Suburban Areas:** $\sigma$ is moderate, around 6-10 dB.
*   **Urban Areas:** $\sigma$ is larger, around 8-12 dB or more.

**Example:**
Suppose the average path loss at a certain distance is 130 dB, and the shadowing standard deviation is $\sigma = 8$ dB. What is the probability that the actual path loss at this distance is less than 120 dB?

Let $PL_{actual} = PL_{average} + X_{\sigma}$. We want to find $P(PL_{actual} < 120)$.
$P(130 + X_{\sigma} < 120) = P(X_{\sigma} < -10)$.

To find this probability, we need to use the cumulative distribution function (CDF) of the normal distribution. Let $Z = X_{\sigma} / \sigma$. Then $Z$ is a standard normal random variable (mean 0, variance 1).

$P(X_{\sigma} < -10) = P(\frac{X_{\sigma}}{\sigma} < \frac{-10}{\sigma}) = P(Z < \frac{-10}{8}) = P(Z < -1.25)$

Using a standard normal distribution table or calculator, the probability $P(Z < -1.25)$ is approximately 0.1056.

**Important Points:**
*   Shadowing is a major source of signal variability and can cause signal strength to drop significantly below the predicted average.
*   The lognormal model is effective for understanding the statistical distribution of signal strength fluctuations due to shadowing.
*   The standard deviation ($\sigma$) is a crucial parameter that must be determined through site-specific measurements.

**Reference:**
*   **Goldsmith, Chapter 3.3:** Lognormal shadowing model.
*   **Rappaport, Chapter 4.4:** Shadowing effects and the lognormal model.
*   **Tse & Viswanath, Chapter 2.3:** Discusses the impact of shadowing on capacity.

## 4. Combined Impact of Path Loss and Shadowing

In practical wireless systems, both path loss and shadowing occur simultaneously. The total path loss is the sum of the deterministic path loss (e.g., from the log-distance model) and the random shadowing loss.

**Total Path Loss ($PL_{total}$) in dB:**

$PL_{total}(d) = PL_{FSPL}(d) \times (\frac{d}{d_0})^{\alpha} + X_{\sigma}$  (Using log-distance model as the deterministic part)

Where:
*   $PL_{FSPL}(d)$: Free space path loss at distance $d$.
*   $d_0$: Reference distance.
*   $\alpha$: Path loss exponent (here represented as $\alpha$ instead of $n$ for consistency with some literature, but it's the same concept).
*   $X_{\sigma}$: Lognormal shadowing random variable.

Alternatively, if $PL_{avg}(d)$ represents the average path loss at distance $d$ (calculated using a model like log-distance):

$PL_{total}(d) = PL_{avg}(d) + X_{\sigma}$

**Impact on System Design:**

*   **Coverage Area:** Shadowing reduces the effective coverage area. Even in areas where the average path loss is acceptable, deep shadowing fades can cause the signal to drop below the receiver's sensitivity threshold.
*   **Transmit Power:** To overcome shadowing, higher transmit power might be required to maintain a reliable link across the desired coverage area.
*   **Link Reliability:** Shadowing leads to variability in the received signal strength, impacting the reliability of communication. This can manifest as increased bit error rates (BER) or dropped calls.
*   **Antenna Diversity and Sectorization:** Techniques like antenna diversity and sectorization are employed to mitigate the effects of shadowing by providing alternative propagation paths or focusing power in specific directions.

**Reference:**
*   **Goldsmith, Chapter 3.4:** Combined path loss and shadowing.
*   **Schiller, Chapter 4.2:** Discusses propagation models and their limitations.

## 5. System Design Implications

**CO4: Explain the basic Principle of wireless communication techniques (Knowledge Level: K2)**

Path loss and shadowing are fundamental principles that dictate the feasibility and performance of wireless communication systems.

*   **Cell Size and Coverage:** The combined effects of path loss and shadowing determine the maximum coverage radius of a base station (cell). Higher path loss exponents and larger shadowing standard deviations lead to smaller cell sizes.
*   **Transmit Power Control:** Systems dynamically adjust transmit power to compensate for varying path loss and shadowing. This is crucial for efficient power usage and minimizing interference.
*   **Antenna Placement and Height:** Optimizing antenna placement and height can help reduce path loss by establishing LOS paths or minimizing obstruction effects.
*   **Link Budget Analysis:** A link budget is a detailed calculation of all gains and losses in a communication link. Path loss and shadowing are the dominant loss components that must be accurately accounted for to ensure the received signal is sufficient for reliable communication.

**Example of Link Budget Consideration:**
To maintain a minimum Signal-to-Noise Ratio (SNR) of 15 dB at the receiver, and given:
*   Transmitter power ($P_t$) = 1 W (0 dBm)
*   Receiver sensitivity = -100 dBm
*   Antenna gains ($G_t, G_r$) = 0 dB
*   Other losses (cables, filters) = 5 dB

The required received power is $P_r = \text{Sensitivity} - \text{Margin} = -100 \text{ dBm} - \text{Margin}$. Let's assume a required received power of -95 dBm for a good SNR.

Total losses = $P_t - P_r + G_t + G_r = 0 \text{ dBm} - (-95 \text{ dBm}) + 0 \text{ dB} + 0 \text{ dB} = 95 \text{ dB}$.

If the average path loss at the cell edge is 120 dB, and the shadowing standard deviation is 8 dB, then at the cell edge, the actual path loss could be anywhere from (approx) 120 - 8 = 112 dB to 120 + 8 = 128 dB.

If the actual path loss is 128 dB, the total loss becomes 128 dB, exceeding the 95 dB budget by 33 dB. This indicates a coverage hole. To mitigate this, the transmit power might need to be increased, or the cell size reduced.

**Reference:**
*   **Stuber, Chapter 4:** Covers link budget analysis and practical system considerations.
*   **Schiller, Chapter 4.2:** Discusses coverage planning and the role of propagation models.

## 6. Practice Questions

**Question 1:**
(K2) Explain the difference between path loss and shadowing in the context of wireless communication.

**Question 2:**
(K3) Calculate the Free Space Path Loss at 900 MHz for a distance of 2 km. Assume unit gain antennas.

**Question 3:**
(K3) In a suburban environment, the path loss at 1 km from a transmitter is measured to be 125 dB. If the path loss exponent for this environment is $n=3.2$, estimate the path loss at 10 km.

**Question 4:**
(K2) Describe the lognormal shadowing model. What does the standard deviation ($\sigma$) represent in this model?

**Question 5:**
(K3) A wireless system operates with an average path loss of 140 dB at the cell edge. The shadowing standard deviation is $\sigma=9$ dB. What is the probability that the actual path loss at the cell edge is greater than 150 dB?

**Question 6:**
(K2) How do path loss and shadowing affect the design of cellular networks?

---

## Answers to Practice Questions

**Answer 1:**
*   **Path Loss:** Is the deterministic loss of signal strength due to distance and frequency. It is generally predictable and follows established models like free space or log-distance.
*   **Shadowing:** Is the statistical loss of signal strength due to large obstacles blocking or absorbing the signal. It causes slow, random fluctuations in signal strength and is modeled using probability distributions like the lognormal distribution.

**Answer 2:**
$c = 3 \times 10^8$ m/s
$f = 900$ MHz = $900 \times 10^6$ Hz
$d = 2$ km = $2000$ m

$PL_{FSPL} (dB) = 20 \log_{10} \left(\frac{4\pi d f}{c}\right)$
$PL_{FSPL} (dB) = 20 \log_{10} \left(\frac{4\pi \times 2000 \times 900 \times 10^6}{3 \times 10^8}\right)$
$PL_{FSPL} (dB) = 20 \log_{10} \left(\frac{7.2 \pi \times 10^{12}}{3 \times 10^8}\right)$
$PL_{FSPL} (dB) = 20 \log_{10} \left(2.4 \pi \times 10^4\right)$
$PL_{FSPL} (dB) = 20 \log_{10} (7.54 \times 10^4)$
$PL_{FSPL} (dB) = 20 \times (\log_{10} 7.54 + \log_{10} 10^4)$
$PL_{FSPL} (dB) = 20 \times (0.877 + 4)$
$PL_{FSPL} (dB) = 20 \times 4.877 \approx 97.54$ dB

**Answer 3:**
Using the log-distance model:
$PL(d) = PL(d_0) + 10n \log_{10} \left(\frac{d}{d_0}\right)$
Given: $d_0 = 1$ km, $PL(d_0) = 125$ dB, $n = 3.2$, $d = 10$ km.

$PL(10 \text{ km}) = 125 + 10 \times 3.2 \log_{10} \left(\frac{10}{1}\right)$
$PL(10 \text{ km}) = 125 + 32 \log_{10}(10)$
$PL(10 \text{ km}) = 125 + 32 \times 1$
$PL(10 \text{ km}) = 157$ dB

**Answer 4:**
The lognormal shadowing model describes the shadowing loss (or the deviation from the average path loss) as a random variable that follows a normal (Gaussian) distribution when expressed in decibels.
The standard deviation ($\sigma$) quantifies the spread or variability of the shadowing. A larger $\sigma$ indicates more severe and unpredictable signal fluctuations due to shadowing. It is typically measured in decibels (dB).

**Answer 5:**
Let $PL_{avg} = 140$ dB and $\sigma = 9$ dB. We want to find $P(PL_{actual} > 150 \text{ dB})$.
$PL_{actual} = PL_{avg} + X_{\sigma}$
$P(140 + X_{\sigma} > 150) = P(X_{\sigma} > 10)$

Let $Z = X_{\sigma} / \sigma$.
$P(X_{\sigma} > 10) = P(\frac{X_{\sigma}}{\sigma} > \frac{10}{\sigma}) = P(Z > \frac{10}{9}) = P(Z > 1.11)$

Using the standard normal distribution, $P(Z > 1.11) = 1 - P(Z \leq 1.11)$.
From a Z-table, $P(Z \leq 1.11) \approx 0.8665$.
So, $P(Z > 1.11) \approx 1 - 0.8665 = 0.1335$.

The probability that the actual path loss at the cell edge is greater than 150 dB is approximately 13.35%.

**Answer 6:**
*   **Cell Size:** Path loss and shadowing limit the maximum radius of a cell. Higher losses require either a smaller cell size or higher transmit power.
*   **Coverage Holes:** Deep shadowing fades can create "coverage holes" where the signal strength drops below usable levels, leading to dropped calls or communication failures.
*   **Transmit Power Requirements:** To ensure coverage across the cell, especially in shadowed areas, base stations must transmit with sufficient power to overcome the expected path loss and shadowing.
*   **Interference Management:** Understanding path loss is crucial for predicting interference levels between cells, which impacts the overall capacity and reuse factor of the network.
*   **Antenna Design and Placement:** The choice of antenna gain and its physical placement (e.g., height, line-of-sight) are optimized to minimize path loss and mitigate shadowing effects.

## Important Points to Remember:

*   **Path Loss** is primarily a function of **distance** and **frequency**.
*   **Shadowing** is a **statistical phenomenon** caused by large obstacles, leading to **slow fluctuations** in signal strength.
*   The **log-distance model** is a widely used empirical model for predicting average path loss.
*   The **lognormal distribution** is used to model shadowing, with the **standard deviation ($\sigma$)** quantifying the severity of the fading.
*   Both path loss and shadowing **reduce the effective coverage area** of wireless systems.
*   **Link budget analysis** is essential for designing reliable wireless links, and path loss/shadowing are the primary loss components.
*   Higher frequencies are generally more susceptible to both path loss and shadowing.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
