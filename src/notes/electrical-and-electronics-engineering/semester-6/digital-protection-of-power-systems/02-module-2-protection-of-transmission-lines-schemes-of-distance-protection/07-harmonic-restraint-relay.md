---
title: "harmonic restraint relay"
subject: "DIGITAL PROTECTION OF POWER SYSTEMS"
module: "Module 2: Protection of Transmission Lines:  Schemes of distance protection"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36584"
status: "completed"
scrapedAt: "2026-05-23T16:25:57.041Z"
---
# Digital Protection of Power Systems: Module 2 - Protection of Transmission Lines: Schemes of Distance Protection - Harmonic Restraint Relay

---

## Introduction to Distance Protection

Distance protection is a primary method for protecting transmission lines. It operates based on the impedance measured between the relay location and the fault location. For a given line, this impedance is proportional to the distance to the fault. By setting the relay to operate for impedances below a certain threshold (corresponding to the line impedance), faults within the protected zone can be detected.

Distance relays provide several advantages, including:

*   **Stepped Zones of Protection:** Allows for graded tripping times, preventing unnecessary tripping for faults on adjacent lines.
*   **Independent of Source Impedances:** Unlike overcurrent relays, their operation is less affected by variations in source strength.
*   **Fault Location Estimation:** The measured impedance can be used to estimate the fault location.

However, distance relays can face challenges under certain fault conditions, such as:

*   **Power Swings:** Fluctuations in power flow can cause significant changes in apparent impedance, potentially leading to maloperation.
*   **Inrush Currents:** Magnetizing inrush currents in transformers can contain DC offset and harmonics, which can interfere with distance relay operation.
*   **Shunt Capacitor Banks:** Can cause an over-reach or under-reach depending on fault location and type.
*   **High-Impedance Faults:** Faults with significant resistance can present a higher impedance to the relay, making them harder to detect.
*   **Faults near Substations:** The presence of parallel lines or transformer impedances can distort the apparent impedance measured by the relay.

It is in addressing some of these challenges, particularly those related to fault current characteristics, that techniques like harmonic restraint are employed.

---

## Harmonic Restraint Relay: Principle and Operation

### 1. What are Harmonics?

In a power system, the ideal sinusoidal waveform of voltage and current can be distorted by various non-linear phenomena. This distortion can be represented as a sum of sinusoidal components at frequencies that are integer multiples of the fundamental frequency (50 Hz or 60 Hz). These higher frequency components are called harmonics.

**Sources of Harmonics:**

*   **Non-linear Loads:** Rectifiers, inverters, thyristor-controlled devices, arc furnaces, fluorescent lighting.
*   **Transformer Saturation:** During overexcitation or large DC offsets in fault currents, transformer cores can saturate, generating harmonics.
*   **Switching Operations:** Disconnection or connection of large equipment can inject transient currents with harmonic content.
*   **Faults:** Particularly during the initial stages of a fault, DC offset and saturation effects can lead to significant harmonic generation.

### 2. Need for Harmonic Restraint in Distance Protection

Certain fault conditions, especially those involving transformer energization (inrush) and some types of faults, produce fault currents with significant harmonic content. Without proper measures, these harmonics can cause distance relays, particularly older electromechanical or early digital designs, to misoperate.

**Specific scenarios where harmonics can cause issues for distance relays:**

*   **Transformer Magnetizing Inrush:** When a transformer is energized, the initial current (inrush current) can be very high and rich in harmonics (especially the 2nd and 5th harmonics) and have a large DC offset. This can mimic a fault condition and cause an unwarranted trip if not properly handled.
*   **Certain Fault Types:** Some types of faults, especially those involving broken conductors or high impedance faults, can also lead to fault currents with a noticeable harmonic content.

**The primary purpose of harmonic restraint is to prevent incorrect tripping during conditions that produce harmonics but do not represent a genuine power system fault within the protected zone.**

### 3. How Harmonic Restraint Works

Harmonic restraint is a feature implemented in digital distance relays to differentiate between fault conditions and other events that produce similar current waveforms (like transformer inrush). The principle is to:

*   **Detect the presence of significant harmonics in the fault current.**
*   **Use this harmonic content as a "restraining" signal.**
*   **If the harmonic content is above a certain threshold, the relay is restrained from tripping, even if the impedance measurement indicates a fault.**

**Mechanism:**

1.  **Digital Signal Processing (DSP):** Digital relays sample the voltage and current waveforms at a high rate.
2.  **Harmonic Analysis:** Using algorithms like the Discrete Fourier Transform (DFT) or Fast Fourier Transform (FFT), the relay analyzes the sampled waveforms to determine the magnitude of fundamental frequency components and various harmonic components (e.g., 2nd, 3rd, 5th harmonic).
3.  **Comparison with Thresholds:** The relay compares the ratio of a specific harmonic component (e.g., 2nd harmonic) to the fundamental frequency component of the current.
4.  **Restraining Logic:** If this ratio exceeds a pre-defined setting, the relay's tripping logic is blocked or "restrained."

**Mathematical Representation (Conceptual):**

The restraining action can be conceptually represented as a condition:

$ \text{If} \frac{\text{Harmonic Current Component}}{\text{Fundamental Current Component}} > \text{Threshold} \implies \text{Restrain Tripping} $

For transformer inrush, the 2nd harmonic is often a key indicator, as it is typically the most dominant harmonic component.

---

## Types of Harmonic Restraint Schemes

While the fundamental principle remains the same, different relays might use varying combinations of harmonic frequencies or focus on specific harmonic components for restraint.

*   **2nd Harmonic Restraint:** Most common for distinguishing transformer inrush from faults. The 2nd harmonic is usually the most prominent during inrush due to transformer saturation.
*   **5th Harmonic Restraint:** May be used in conjunction with 2nd harmonic restraint or as an additional check, as certain fault conditions can also generate the 5th harmonic.
*   **Combined Harmonic Restraint:** Some advanced relays might use a combination of multiple harmonic components to improve accuracy and robustness.

---

## Application of Harmonic Restraint in Distance Relays

### 1. Transformer Inrush Current Blocking

This is the most prominent application of harmonic restraint. When a transformer is energized, the high DC offset in the inrush current causes the transformer's magnetic core to saturate. This saturation generates significant even-harmonic currents, particularly the 2nd harmonic.

**How harmonic restraint helps:**

*   **Without restraint:** A distance relay might interpret the high current and distorted waveform during inrush as a fault and trip the circuit breaker, causing an unnecessary outage.
*   **With harmonic restraint:** The relay detects the high 2nd harmonic content in the current, recognizes it as inrush, and restrains itself from tripping.

**Important Considerations:**

*   **Transformer Size and Type:** The harmonic content of inrush current can vary with the size, impedance, and saturation characteristics of the transformer.
*   **CT Saturation:** During severe faults, the current transformers (CTs) themselves can saturate, leading to distorted current waveforms that might appear harmonic-rich. Harmonic restraint needs to be designed to be robust against CT saturation effects.

### 2. Faults on Transmission Lines

While primarily used for inrush, harmonic restraint can also play a role in correctly identifying faults, especially those with unusual characteristics.

*   **High-Impedance Faults:** Some high-impedance faults (e.g., a conductor resting on trees) can have reduced current magnitude and potentially a higher harmonic content compared to bolted faults. Harmonic restraint, if not set too aggressively, can help prevent maloperation under such conditions, although specialized algorithms are often better suited for high-impedance fault detection.
*   **Faults with Broken Conductors:** A broken conductor fault might exhibit characteristics that could be mistaken for inrush if not analyzed properly. Harmonic restraint can provide an additional layer of security.

---

## Implementation in Digital Relays

Digital relays, with their advanced processing capabilities, are well-suited for implementing harmonic restraint.

**Key Features in Digital Relays:**

*   **Accurate Waveform Sampling:** High-speed and high-resolution analog-to-digital converters (ADCs).
*   **Sophisticated Signal Processing Algorithms:** DFT/FFT for precise harmonic extraction.
*   **Programmable Restraining Levels:** Settings for harmonic ratios can be adjusted to suit specific system conditions.
*   **Adaptive Restraint:** Some advanced relays can adapt their harmonic restraint parameters based on system events or configurations.
*   **Simultaneous Distance and Harmonic Analysis:** The relay simultaneously calculates impedance and harmonic content.

**Example of Harmonic Restraint Setting (Conceptual):**

A relay might have a setting for the 2nd harmonic restraint:

*   **Operation:** Trip if impedance is within zone 1 and $ \frac{\text{Magnitude of 2nd Harmonic Current}}{\text{Magnitude of Fundamental Current}} < \text{Set Value} $
*   **Restraint:** Do not trip if $ \frac{\text{Magnitude of 2nd Harmonic Current}}{\text{Magnitude of Fundamental Current}} > \text{Set Value} $

The "Set Value" is a threshold that defines how much 2nd harmonic content is considered indicative of inrush or other non-fault conditions.

---

## Limitations and Considerations

While beneficial, harmonic restraint is not a panacea and has its limitations:

*   **CT Saturation:** As mentioned, CT saturation during severe faults can produce harmonics that might be misinterpreted by the relay, potentially causing it to restrain when it should trip. This is a critical issue.
*   **Aggressive Settings:** Setting the harmonic restraint too high can desensitize the relay to genuine faults that also exhibit harmonic content, leading to under-tripping.
*   **Inrush Variability:** The harmonic content of transformer inrush can vary significantly depending on the instant of switching and the transformer's design.
*   **Power Swing Interaction:** While harmonic restraint is primarily for inrush, careful consideration is needed to ensure it doesn't adversely interact with power swing detection algorithms.
*   **Not a Primary Fault Detection Method:** Harmonic restraint is a security enhancement. The primary tripping decision is still based on impedance measurement.

---

## Connection to Course Outcomes

*   **CO1: Identify the relay protection scheme suitable for overcurrent, differential and distance protection.**
    *   This topic directly relates to **distance protection**. Harmonic restraint is a feature that enhances the security of distance relays, making them more reliable in the presence of specific fault or switching conditions.
    *   **K3 Knowledge Level:** Students should be able to identify when harmonic restraint is necessary and how it fits into the overall distance protection philosophy.

*   **CO2: Develop the protection scheme for bus bars, transformers, generators, motors and distribution systems using appropriate protective relays.**
    *   Understanding transformer inrush and how to block it using harmonic restraint is crucial when designing protection schemes for **transformers**. This knowledge is applied when selecting distance relays for circuits connected to transformers.
    *   **K3 Knowledge Level:** Students should be able to incorporate harmonic restraint as a setting or feature in protection schemes involving transformers.

*   **CO3: Illustrate the operation of a numerical relay.**
    *   Harmonic restraint is a prime example of a **digital/numerical relay** feature that relies on signal processing. Illustrating how a numerical relay samples, analyzes for harmonics, and applies logic demonstrates its operational capabilities.
    *   **K2 Knowledge Level:** Students can explain the basic principle of harmonic restraint as implemented in numerical relays.

*   **CO4: Explain signal processing methods and algorithms in digital protection.**
    *   The core of harmonic restraint lies in **signal processing methods** like the Discrete Fourier Transform (DFT) or Fast Fourier Transform (FFT) to extract harmonic components from sampled voltage and current waveforms.
    *   **K2 Knowledge Level:** Students should be able to explain that harmonics are extracted using DSP techniques.

*   **CO5: Infer emerging protection schemes in power systems.**
    *   While harmonic restraint itself is a mature technique, its implementation in adaptive, multi-harmonic schemes, and its interplay with other advanced algorithms (like fault classification or advanced CT saturation compensation) can be considered an aspect of evolving protection.
    *   **K3 Knowledge Level:** Students can understand how harmonic analysis contributes to more sophisticated and secure protection schemes.

---

## Key Points to Remember

*   **Harmonic restraint is a security feature for distance relays.**
*   Its primary purpose is to **block tripping during transformer magnetizing inrush**.
*   It works by **detecting the presence of significant harmonic currents** (especially the 2nd harmonic) in the current waveform.
*   **Digital relays are well-suited** for implementing harmonic restraint due to their signal processing capabilities.
*   **CT saturation during severe faults is a major concern** that can cause incorrect operation of harmonic restraint.
*   Setting the harmonic restraint too aggressively can lead to **under-tripping for genuine faults**.
*   Harmonic restraint relies on **analyzing the frequency content of the current signal**.

---

## Practice Questions and Exercises

**Question 1:**

What is the primary purpose of harmonic restraint in distance protection schemes, and what common power system event is it designed to counter?

**Answer 1:**
The primary purpose of harmonic restraint in distance protection is to prevent maloperation (unnecessary tripping) of distance relays under conditions that generate significant harmonic currents but do not represent a fault within the protected zone. The most common power system event it is designed to counter is **transformer magnetizing inrush current**.

**Question 2:**

Which harmonic component is most commonly monitored for transformer inrush current blocking, and why?

**Answer 2:**
The **2nd harmonic** is most commonly monitored. This is because transformer saturation, which causes inrush, typically generates a dominant 2nd harmonic component in the inrush current waveform due to the non-linear nature of the magnetic core.

**Question 3:**

Explain how a digital relay uses signal processing to implement harmonic restraint.

**Answer 3:**
A digital relay samples the voltage and current waveforms at a high rate. It then uses digital signal processing algorithms, such as the Discrete Fourier Transform (DFT) or Fast Fourier Transform (FFT), to analyze the sampled waveform and extract the magnitudes of the fundamental frequency component and various harmonic components (e.g., 2nd, 3rd, 5th). The relay compares the ratio of a specific harmonic current magnitude to the fundamental current magnitude. If this ratio exceeds a pre-set threshold, the relay applies restraint and blocks the tripping command, even if the impedance measurement indicates a fault.

**Question 4:**

Discuss a potential limitation of harmonic restraint and how it can affect the protection system.

**Answer 4:**
A significant limitation of harmonic restraint is the possibility of **CT saturation during severe faults**. When CTs saturate, they can produce distorted current waveforms that might exhibit harmonic content similar to inrush. If the harmonic restraint is too sensitive, it might incorrectly interpret this CT saturation effect as inrush and restrain the relay from tripping for a genuine, severe fault. This can lead to an undesirable failure to trip, potentially causing damage to the protected equipment or cascading system disturbances.

**Question 5:**

Consider a scenario where a distance relay is applied to a transmission line connected to a heavily loaded transformer. If the transformer is energized and the relay exhibits a high 2nd harmonic current to fundamental current ratio, what action should the relay ideally take, and why?

**Answer 5:**
Ideally, the relay should **restrain from tripping**. This is because the high 2nd harmonic current ratio is a strong indicator of transformer magnetizing inrush. This inrush current, while large, does not represent a fault that requires tripping the circuit breaker for the transmission line. The harmonic restraint feature is specifically designed to identify and ignore such conditions, ensuring system stability and preventing unnecessary outages.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## References

*   **Digital Protection of Power System** by A. T. Johns and S. K. Salman: This text provides a foundational understanding of distance protection and the challenges faced by relays.
*   **Computer Relaying for Power Systems** by A. G. Phadke and James S. Thorpe: This book offers detailed insights into digital relaying principles, including signal processing techniques like DFT/FFT, which are essential for understanding harmonic restraint.
*   **Power System Protection and Switchgear** by Badri Ram and D. N. Viswakarma: Likely covers the practical aspects and applications of various protection schemes, including the need for blocking maloperations caused by inrush currents.
*   **Digital Signal Processing in Power System Protection and Control** by Waldemar Rebizant: This book would provide in-depth coverage of the DSP algorithms used for harmonic analysis in digital relays.

---