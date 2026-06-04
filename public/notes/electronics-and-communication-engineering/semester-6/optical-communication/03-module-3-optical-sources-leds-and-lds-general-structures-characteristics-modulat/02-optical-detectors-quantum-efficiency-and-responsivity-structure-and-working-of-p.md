---
title: "Optical detectors: Quantum efficiency and Responsivity, Structure and working of PIN and APD"
subject: "OPTICAL COMMUNICATION"
module: "Module 3: Optical sources: LEDs and LDs, general structures, characteristics , modulators using LEDs and LDs. coupling with fibres,"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fef07"
status: "completed"
scrapedAt: "2026-05-23T18:02:16.890Z"
---
# OPTICAL COMMUNICATION - Module 3: Optical Sources and Detectors

## Topic: Optical Detectors: Quantum Efficiency and Responsivity, Structure and Working of PIN and APD

This module delves into the crucial components of an optical communication system: optical detectors. These devices are responsible for converting the optical signal transmitted through the fiber back into an electrical signal for processing. We will explore their fundamental characteristics and the operational principles of two primary types: PIN photodiodes and Avalanche Photodiodes (APDs).

---

### 1. Introduction to Optical Detectors

Optical detectors are semiconductor devices that exhibit the **photoelectric effect**. When photons strike a semiconductor material, they can generate electron-hole pairs, which can then be collected as an electrical current. The efficiency and speed of this process are critical for the performance of an optical communication system.

**Key Concept:** **Photoelectric Effect:** The emission of electrons or other free carriers when light shines on a material.

---

### 2. Quantum Efficiency ($\eta$)

**Definition:** Quantum efficiency is a measure of the efficiency with which incoming photons generate electron-hole pairs that are collected by the device. It is defined as the ratio of the number of collected charge carriers to the number of incident photons.

**Formula:**
$$ \eta = \frac{\text{Number of collected charge carriers}}{\text{Number of incident photons}} $$

*   **Explanation:**
    *   A higher quantum efficiency means that more of the incident light is converted into an electrical signal, leading to a stronger output.
    *   It is a dimensionless quantity, often expressed as a percentage or a decimal.
    *   The quantum efficiency is dependent on the material used, the wavelength of the incident light, and the device structure.

**Factors Affecting Quantum Efficiency:**

*   **Absorption Coefficient:** The material's ability to absorb light at a specific wavelength.
*   **Reflection Losses:** Light reflected from the surface of the detector.
*   **Recombination Losses:** Electron-hole pairs recombining before they can be collected.
*   **Transit Time Losses:** Carriers not reaching the collection electrodes due to finite transit times.
*   **Bandwidth Limitations:** The speed at which carriers can be generated and collected.

**Important Point to Remember:** For a given wavelength, a higher quantum efficiency is always desirable for better signal detection.

---

### 3. Responsivity ($R$)

**Definition:** Responsivity is a measure of the detector's electrical output (current) per unit of optical input power. It relates the generated photocurrent to the incident optical power.

**Formula:**
$$ R = \frac{\text{Photocurrent (I)}}{\text{Incident Optical Power (P)}} $$

*   **Units:** Amperes per Watt (A/W).
*   **Explanation:**
    *   Responsivity combines the effects of quantum efficiency and the energy of the incident photons.
    *   A higher responsivity indicates a larger photocurrent for a given optical power.

**Relationship between Responsivity and Quantum Efficiency:**

The responsivity can be expressed in terms of quantum efficiency and the wavelength of the incident light.

**Formula:**
$$ R = \frac{\eta q}{h\nu} = \frac{\eta q \lambda}{hc} $$

Where:
*   $ \eta $ = Quantum Efficiency
*   $ q $ = Elementary charge ($1.602 \times 10^{-19}$ C)
*   $ h $ = Planck's constant ($6.626 \times 10^{-34}$ J·s)
*   $ c $ = Speed of light ($3 \times 10^8$ m/s)
*   $ \nu $ = Optical frequency (Hz)
*   $ \lambda $ = Wavelength of light (m)

**Example:**
If a detector has a quantum efficiency of 80% ($\eta = 0.8$) at a wavelength of 1300 nm, its responsivity can be calculated as:

$ \lambda = 1300 \text{ nm} = 1300 \times 10^{-9} \text{ m} $
$ R = \frac{0.8 \times (1.602 \times 10^{-19} \text{ C}) \times (1300 \times 10^{-9} \text{ m})}{(6.626 \times 10^{-34} \text{ J·s}) \times (3 \times 10^8 \text{ m/s})} $
$ R \approx 0.83 \text{ A/W} $

**Important Point to Remember:** Responsivity is a more practical parameter for system designers as it directly relates the optical power to the electrical current generated.

---

### 4. Optical Detectors: Types

Two common types of photodetectors used in optical communication systems are:

1.  **PIN Photodiodes**
2.  **Avalanche Photodiodes (APDs)**

---

### 5. PIN Photodiodes

PIN photodiodes are the most widely used detectors in optical fiber communication systems due to their good performance and relatively low cost. The name "PIN" comes from its unique semiconductor structure.

**Structure:**

A PIN photodiode consists of three semiconductor layers:

1.  **p-layer:** A heavily doped p-type semiconductor.
2.  **Intrinsic (I) layer:** A lightly doped or undoped intrinsic semiconductor layer, typically made of silicon or germanium. This is the key feature of a PIN diode.
3.  **n-layer:** A heavily doped n-type semiconductor.

The intrinsic layer is sandwiched between the p and n layers. This structure forms a large depletion region.

**(Diagram of PIN Photodiode Structure would be beneficial here, showing p, intrinsic, n layers and the depletion region)**

**Working Principle:**

1.  **Reverse Bias:** PIN photodiodes are operated under reverse bias. This means a positive voltage is applied to the n-layer and a negative voltage to the p-layer.
2.  **Depletion Region:** The reverse bias widens the depletion region, which primarily exists within the intrinsic layer. The intrinsic layer has a low conductivity, which minimizes capacitance and allows for faster response.
3.  **Photon Absorption:** When incident photons with energy greater than the bandgap energy of the semiconductor material strike the depletion region, they generate electron-hole pairs.
4.  **Carrier Drift:** The strong electric field across the depletion region causes these generated carriers to drift towards the electrodes. Electrons drift towards the p-side and holes drift towards the n-side.
5.  **Photocurrent Generation:** The movement of these carriers constitutes a photocurrent. The magnitude of this photocurrent is proportional to the incident optical power.

**Key Features and Advantages of PIN Photodiodes:**

*   **Large Depletion Region:** The intrinsic layer provides a wider depletion region compared to a standard PN junction diode. This leads to:
    *   **Higher Quantum Efficiency:** More photons can be absorbed within the depletion region, increasing $\eta$.
    *   **Faster Response Time:** Carriers travel a longer distance but are less likely to encounter trapping centers, and the drift velocity is high.
*   **Low Capacitance:** The wide intrinsic layer results in a lower junction capacitance, which is crucial for high-speed operation. Lower capacitance means less time is needed to charge and discharge the junction, enabling faster switching speeds.
*   **Linear Response:** PIN diodes offer a linear relationship between incident optical power and photocurrent over a wide range.
*   **Cost-Effective:** Generally less expensive to manufacture than APDs.
*   **Low Dark Current:** The leakage current in the absence of light is relatively low.

**Limitations of PIN Photodiodes:**

*   **No Internal Gain:** The photocurrent generated is directly proportional to the incident light and there is no internal amplification mechanism. This means the signal-to-noise ratio (SNR) can be limited by the noise from the subsequent amplifier.
*   **Lower Sensitivity:** Compared to APDs, they are less sensitive to very low optical power levels.

**Example Application:** PIN photodiodes are commonly used in short-to-medium reach optical links where the signal power is sufficient and the cost is a significant factor, such as in Fiber-to-the-Home (FTTH) or local area networks (LANs).

**(Refer to Keiser, Chapter 4; Senior, Chapter 3; Palais, Chapter 3 for detailed discussions on PIN photodiodes.)**

---

### 6. Avalanche Photodiodes (APDs)

APDs are more sensitive detectors than PIN photodiodes, capable of detecting very low optical power levels. This enhanced sensitivity is achieved through an internal gain mechanism called **avalanche multiplication**.

**Structure:**

An APD typically has a more complex structure than a PIN diode, often comprising several semiconductor layers. A common structure involves:

1.  **p+-layer:** Heavily doped p-type layer.
2.  **p-layer:** Lightly doped p-type layer.
3.  **Intrinsic (I) or lightly doped intrinsic layer:** Similar to the PIN diode, this layer is where initial photon absorption and electron-hole pair generation occurs.
4.  **n-layer:** Lightly doped n-type layer.
5.  **n+-layer:** Heavily doped n-type layer (sometimes referred to as the "multiplication layer").

The key difference from a PIN diode is the presence of a region designed to achieve high electric field strength for impact ionization.

**(Diagram of APD structure, showing different doping levels and regions of high electric field would be beneficial here.)**

**Working Principle:**

1.  **Reverse Bias:** APDs are operated under a much higher reverse bias voltage than PIN diodes, typically in the range of 100-400V.
2.  **Depletion Region and Multiplication Region:** The high reverse bias creates a very strong electric field, particularly in a specific region (often the n-layer or a separate multiplication layer), where the electric field is high enough to cause **impact ionization**.
3.  **Initial Photon Absorption:** Photons with energy greater than the bandgap energy are absorbed in the intrinsic or lightly doped absorption region, generating electron-hole pairs.
4.  **Carrier Drift and Acceleration:** Under the high electric field, these initial carriers (either electrons or holes) are accelerated.
5.  **Avalanche Multiplication (Impact Ionization):** When an accelerated carrier gains enough kinetic energy, it can collide with the semiconductor lattice and create more electron-hole pairs. This process is called **impact ionization**.
    *   The newly created carriers are also accelerated by the electric field and can cause further impact ionization events.
    *   This cascading effect leads to an **avalanche** of charge carriers, effectively multiplying the initial photocurrent.
6.  **Gain (M):** The avalanche multiplication process results in an internal gain, denoted by $M$. The total photocurrent is $M$ times the initial photocurrent generated by the incident photons.
    $$ I_{\text{total}} = M \times I_{\text{primary}} $$
    Where $I_{\text{primary}}$ is the photocurrent generated by the incident photons.

**Types of APDs based on Carrier Responsible for Multiplication:**

*   **Reach-Through APDs (RT-APDs):** Initially, these were common, where carriers multiplied in a drift region and then "reached through" to the multiplication region.
*   **Separated Absorption and Multiplication APDs (SAM-APDs):** This is the most common type. The absorption region (often a p-i-n structure) is separated from the multiplication region (a p+-n junction with a high electric field). This separation provides better control over the gain mechanism and reduces noise.

**Key Features and Advantages of APDs:**

*   **Internal Gain:** The primary advantage is the internal gain ($M$), which amplifies the weak signal before it is further processed. This significantly improves the **signal-to-noise ratio (SNR)**, especially for low light levels.
*   **High Sensitivity:** Capable of detecting very low optical power levels, making them suitable for long-haul, high-speed communication systems.
*   **Wider Dynamic Range:** Can handle a wider range of input optical powers due to the gain mechanism.

**Limitations of APDs:**

*   **Higher Cost:** More complex manufacturing processes make them more expensive than PIN photodiodes.
*   **Higher Noise:** The avalanche multiplication process is inherently noisy, leading to increased noise levels (e.g., multiplication noise). This noise is dependent on the ratio of ionization coefficients for electrons and holes.
*   **Higher Operating Voltage:** Require higher reverse bias voltages, which adds complexity to the power supply design.
*   **Temperature Sensitivity:** The gain and performance of APDs can be sensitive to temperature variations.
*   **Bandwidth Limitations:** The avalanche process can limit the bandwidth, although modern APDs achieve very high speeds.

**Example Application:** APDs are preferred in long-haul optical fiber systems (e.g., backbone networks, submarine cables) and in applications requiring high sensitivity for detecting weak signals, such as satellite communications or certain sensor applications.

**(Refer to Keiser, Chapter 4; Senior, Chapter 3; Palais, Chapter 3 for detailed discussions on APDs.)**

---

### 7. Comparison between PIN Photodiodes and APDs

| Feature             | PIN Photodiode                               | Avalanche Photodiode (APD)                         |
| :------------------ | :------------------------------------------- | :------------------------------------------------- |
| **Structure**       | p-i-n junction                               | More complex, often with separate absorption and multiplication regions |
| **Operating Bias**  | Low reverse bias (few volts)                 | High reverse bias (tens to hundreds of volts)      |
| **Internal Gain**   | No gain ($M=1$)                              | Yes, $M > 1$                                       |
| **Sensitivity**     | Moderate                                     | High                                               |
| **SNR at Low Power**| Lower                                        | Higher                                             |
| **Noise**           | Primarily thermal noise and shot noise       | Multiplication noise, thermal noise, shot noise    |
| **Speed**           | High (limited by transit time and capacitance) | High (limited by transit time and carrier dynamics) |
| **Cost**            | Lower                                        | Higher                                             |
| **Applications**    | Short/medium reach, low-cost systems         | Long-haul, high-speed, high-sensitivity systems    |

---

### 8. Coupling with Fibers (Brief Mention - as this is more related to sources)

While this topic focuses on detectors, it's worth noting that the output from the optical fiber must be efficiently coupled to the active area of the detector. The detector's active area size and packaging are designed to match the fiber core diameter and numerical aperture (NA) to minimize coupling losses.

**(Refer to Keiser, Chapter 4 for details on detector-fiber coupling.)**

---

### 9. Practice Questions and Answers

**Question 1:**
Define Quantum Efficiency and Responsivity. What is the relationship between them?

**Answer:**
*   **Quantum Efficiency ($\eta$):** The ratio of the number of collected charge carriers to the number of incident photons. It's a measure of how effectively photons generate usable charge carriers.
*   **Responsivity ($R$):** The ratio of the output photocurrent to the input optical power (in A/W). It's a measure of the detector's electrical output per unit of optical input.
*   **Relationship:** $ R = \frac{\eta q \lambda}{hc} $. Responsivity is directly proportional to quantum efficiency and wavelength.

---

**Question 2:**
What is the primary advantage of using an Avalanche Photodiode (APD) over a PIN photodiode in an optical communication system?

**Answer:**
The primary advantage of an APD is its **internal gain** mechanism (avalanche multiplication), which amplifies the photocurrent. This significantly improves the **signal-to-noise ratio (SNR)**, making APDs much more sensitive to low optical power levels compared to PIN photodiodes.

---

**Question 3:**
Explain the role of the intrinsic layer in a PIN photodiode.

**Answer:**
The intrinsic (I) layer in a PIN photodiode is crucial because:
1.  It is lightly doped or undoped, allowing for a **wide depletion region** under reverse bias.
2.  This wide depletion region increases the probability of **photon absorption**, leading to higher quantum efficiency.
3.  It results in **low junction capacitance**, which is essential for achieving high-speed operation.

---

**Question 4:**
A photodetector receives an optical power of 1 mW at a wavelength of 1550 nm. It generates a photocurrent of 0.5 mA. Calculate its responsivity and quantum efficiency.

**Answer:**
Given:
*   Optical Power ($P$) = 1 mW = $1 \times 10^{-3}$ W
*   Wavelength ($\lambda$) = 1550 nm = $1550 \times 10^{-9}$ m
*   Photocurrent ($I$) = 0.5 mA = $0.5 \times 10^{-3}$ A

**1. Calculate Responsivity (R):**
$ R = \frac{I}{P} = \frac{0.5 \times 10^{-3} \text{ A}}{1 \times 10^{-3} \text{ W}} = 0.5 \text{ A/W} $

**2. Calculate Quantum Efficiency ($\eta$):**
Using the formula $ R = \frac{\eta q \lambda}{hc} $, we rearrange to solve for $\eta$:
$ \eta = \frac{R \times h \times c}{q \times \lambda} $

Where:
*   $R = 0.5$ A/W
*   $h = 6.626 \times 10^{-34}$ J·s
*   $c = 3 \times 10^8$ m/s
*   $q = 1.602 \times 10^{-19}$ C
*   $\lambda = 1550 \times 10^{-9}$ m

$ \eta = \frac{(0.5 \text{ A/W}) \times (6.626 \times 10^{-34} \text{ J·s}) \times (3 \times 10^8 \text{ m/s})}{(1.602 \times 10^{-19} \text{ C}) \times (1550 \times 10^{-9} \text{ m})} $
$ \eta \approx \frac{2.485 \times 10^{-25}}{2.483 \times 10^{-25}} \approx 1 $

So, $\eta \approx 100\%$.

**Answer:** The responsivity is 0.5 A/W, and the quantum efficiency is approximately 100%.

---

### 10. Important Points to Remember

*   **Detectors convert light to electricity.**
*   **Quantum Efficiency ($\eta$)** measures photon-to-carrier conversion efficiency.
*   **Responsivity ($R$)** measures current output per unit optical power input.
*   **PIN diodes** are good all-rounders: low capacitance, fast response, moderate sensitivity, and cost-effective.
*   **APDs** offer high sensitivity due to internal gain, making them suitable for weak signal detection, but are more complex and noisy.
*   The **intrinsic layer** is key to PIN diodes' performance.
*   **Avalanche multiplication** is the gain mechanism in APDs.
*   **SNR improvement** is the main benefit of APDs for low-light applications.

---

### 11. Alignment with Course Outcomes

*   **CO1 (Explain structure, fabrication, principle of operation and classifications of optical fibers):** While this module focuses on detectors, understanding their semiconductor structure and operating principles (photoelectric effect, PN junctions, avalanche breakdown) aligns with the broader understanding of optical components.
*   **CO2 (Describe transmission characteristics and evaluate losses in optical fiber):** This module deals with detecting the transmitted signal. Understanding detector characteristics like responsivity and quantum efficiency is crucial for evaluating the overall system performance and the impact of signal degradation (loss).
*   **CO3 (Illustrate the working of sources, detectors and optical amplifiers used in optical communication system):** This is directly addressed by explaining the structure and working of PIN and APD detectors.
*   **CO4 (Explain the concepts of Multiplexing, Optical Networks and Free Space Communication):** Understanding detector performance is fundamental to designing and analyzing optical networks, as detectors are key interfaces within these systems.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 12. References

*   **Optical Fiber Communications by Gerd Keiser (McGraw Hill, 5th/e, 2021)**: Chapters 4 (Optical Detectors)
*   **Optical Fiber Communication: Principles and Practice by John M Senior (Pearson Education, 3rd/e, 2014)**: Chapters 3 (Optical Fibre Transmitters and Receivers)
*   **Fibre Optic Communications by Joseph C. Palais (Pearson Education, 5th/e, 2013)**: Chapters 3 (Optical Sources and Detectors)
*   **Fibre optic Communication: Systems and Components by Mishra and Ugale (Wiley, 2019)**: Relevant sections on photodetectors.
*   **Fibre Optic Communications Systems by G P Agrawal (WILEY, 4th Ed)**: Relevant sections on photodetectors.

---
**(End of Notes)**