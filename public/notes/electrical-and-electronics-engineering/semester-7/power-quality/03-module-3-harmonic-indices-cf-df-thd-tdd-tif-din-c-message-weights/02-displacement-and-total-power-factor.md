---
title: "Displacement and total power factor"
subject: "POWER QUALITY"
module: "Module 3: Harmonic indices  (CF, DF, THD, TDD, TIF, DIN, C – message weights)"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36978"
status: "completed"
scrapedAt: "2026-05-23T16:38:55.288Z"
---
# Power Quality: Module 3 - Harmonic Indices

## Topic: Displacement and Total Power Factor

### Introduction

In AC power systems, the efficiency of power transfer is crucial. Power factor is a key metric that quantifies this efficiency. While traditionally power factor was solely associated with the displacement of the fundamental voltage and current waveforms, the presence of non-linear loads in modern power systems introduces harmonics, which significantly impact the overall power factor. This topic delves into understanding the distinction between displacement power factor and total power factor, and how harmonic indices play a role in their assessment.

### Learning Outcomes Covered:

*   **CO1: Identify the sources and effects of power quality problems.** (K2)
    *   Understanding the contribution of non-linear loads to harmonic distortion and its impact on power factor.
*   **CO2: Apply Fourier concepts for harmonic analysis.** (K3)
    *   The mathematical foundation for separating the fundamental and harmonic components of current, essential for calculating displacement and total power factor.
*   **CO3: Explain the important aspects of power quality monitoring.** (K2)
    *   How power factor measurements are a crucial aspect of power quality monitoring.
*   **CO4: Examine power quality mitigation techniques.** (K2)
    *   Understanding how power factor correction techniques are affected by harmonics and how to address them.

### 1. Understanding Power Factor

**Definition:** Power factor (PF) is the ratio of real power (P) consumed by a load to the apparent power (S) delivered to the load. It represents the effectiveness of the electrical power being used.

*   **Real Power (P):** The power that performs useful work, measured in Watts (W).
*   **Reactive Power (Q):** The power required to establish and maintain magnetic fields (in inductive loads) or electric fields (in capacitive loads), measured in Volt-Amperes Reactive (VAR).
*   **Apparent Power (S):** The vector sum of real and reactive power, representing the total power that must be supplied by the source, measured in Volt-Amperes (VA).

Mathematically, in a purely sinusoidal system:

$$PF = \frac{P}{S} = \cos(\phi)$$

Where $\phi$ is the phase angle between the voltage and current waveforms.

**Importance of High Power Factor:**

*   **Reduced Utility Bills:** Utilities often penalize industrial customers with low power factors due to increased losses in their transmission and distribution networks.
*   **Increased System Capacity:** A higher power factor means less apparent power is required for the same amount of real power, freeing up capacity in transformers, conductors, and generators.
*   **Improved Voltage Regulation:** Lower current for the same real power leads to reduced voltage drops.

### 2. Displacement Power Factor (DPF)

**Definition:** Displacement Power Factor (DPF) is the power factor that considers only the fundamental frequency components of voltage and current. It accounts for the phase displacement between the fundamental voltage and fundamental current waveforms.

*   **Calculation:** DPF is calculated using the cosine of the phase angle between the fundamental voltage and fundamental current.
    *   $V(t) = V_1 \sin(\omega t)$
    *   $I(t) = I_1 \sin(\omega t - \phi_1)$
    *   $DPF = \cos(\phi_1)$

**When is DPF the sole indicator?**

DPF is a good indicator of power factor in systems where the current waveform is purely sinusoidal, meaning there are no significant harmonic distortions. This was typically the case in older power systems with primarily linear loads (e.g., incandescent lamps, motors, heaters).

**Limitations of DPF in Modern Systems:**

Modern power systems are characterized by the widespread use of non-linear loads such as:

*   Switch-mode power supplies (SMPS) in computers and electronics.
*   Variable frequency drives (VFDs) for motor speed control.
*   Rectifiers and inverters.
*   Arc furnaces.
*   Fluorescent and LED lighting ballasts.

These non-linear loads draw current that is not sinusoidal, even when the voltage is. This distorted current waveform can be represented as a fundamental component and multiple harmonic components using Fourier analysis. While DPF only considers the fundamental component, the harmonic currents contribute to the total power delivered and consumed.

### 3. Total Power Factor (TPF)

**Definition:** Total Power Factor (TPF) is the power factor that accounts for both the displacement of the fundamental frequency and the distortion caused by harmonic currents. It represents the true ratio of real power to apparent power delivered to a load.

**Mathematical Representation of Current:**

Using Fourier analysis, the current waveform can be represented as:

$$I(t) = I_1 \sin(\omega t - \phi_1) + \sum_{h=2}^{\infty} I_h \sin(h\omega t - \phi_h)$$

Where:
*   $I_1$ is the RMS value of the fundamental current.
*   $\phi_1$ is the phase angle of the fundamental current with respect to the fundamental voltage.
*   $I_h$ is the RMS value of the h-th harmonic current.
*   $\phi_h$ is the phase angle of the h-th harmonic current.

**Relationship between Total Power Factor, DPF, and Distortion Factor (DF):**

The Total Power Factor can be expressed as:

$$TPF = \frac{P}{S}$$

Where:
*   $P = V_{rms} I_{rms} \cos(\phi_{avg})$ (This is not directly useful for calculation without $\phi_{avg}$)
*   $S = V_{rms} I_{rms}$

In a system with harmonics, the RMS value of the current is given by:

$$I_{rms} = \sqrt{I_1^2 + \sum_{h=2}^{\infty} I_h^2}$$

The real power consumed by the load is the sum of the power consumed by each harmonic component (assuming the voltage is perfectly sinusoidal):

$$P = V_1 I_1 \cos(\phi_1) + \sum_{h=2}^{\infty} V_h I_h \cos(\phi_h)$$

Assuming the voltage is purely sinusoidal ($V_h = 0$ for $h > 1$), and $V_1$ is the RMS fundamental voltage:

$$P = V_1 I_1 \cos(\phi_1)$$

Now, consider the apparent power $S$:

$$S = V_{rms} I_{rms}$$

The Total Power Factor is then:

$$TPF = \frac{P}{S} = \frac{V_1 I_1 \cos(\phi_1)}{V_{rms} I_{rms}}$$

Since $V_{rms} = V_1$ (assuming pure sinusoidal voltage):

$$TPF = \frac{I_1 \cos(\phi_1)}{I_{rms}}$$

We can rewrite this as:

$$TPF = \frac{I_1}{I_{rms}} \times \cos(\phi_1)$$

Notice that $\frac{I_1}{I_{rms}}$ is the reciprocal of the Distortion Factor (DF), where $DF = \frac{I_{rms}}{I_1}$.

Therefore:

$$TPF = DF \times DPF$$

**Key Takeaway:**
The Total Power Factor is the product of the Displacement Power Factor and the Distortion Factor. The presence of harmonics (which leads to a DF less than 1) inherently reduces the TPF below the DPF.

**Example:**

Consider a load with the following current and voltage:
*   Voltage: $v(t) = 120 \sin(\omega t)$ V (RMS $V_{rms} = 120$ V)
*   Current: $i(t) = 10 \sin(\omega t - 30^\circ) + 4 \sin(3\omega t + 15^\circ) + 2 \sin(5\omega t - 45^\circ)$ A

**Calculations:**

1.  **Fundamental Current ($I_1$):** $I_1 = 10$ A
2.  **Fundamental Phase Angle ($\phi_1$):** $\phi_1 = 30^\circ$
3.  **Harmonic Currents:** $I_3 = 4$ A, $I_5 = 2$ A. All other harmonic currents are negligible.
4.  **RMS Value of Total Current ($I_{rms}$):**
    $$I_{rms} = \sqrt{I_1^2 + I_3^2 + I_5^2}$$
    $$I_{rms} = \sqrt{10^2 + 4^2 + 2^2} = \sqrt{100 + 16 + 4} = \sqrt{120} \approx 10.95 \text{ A}$$
5.  **Displacement Power Factor (DPF):**
    $$DPF = \cos(\phi_1) = \cos(30^\circ) = 0.866$$
6.  **Distortion Factor (DF):**
    $$DF = \frac{I_1}{I_{rms}} = \frac{10}{10.95} \approx 0.913$$
7.  **Total Power Factor (TPF):**
    $$TPF = DF \times DPF = 0.913 \times 0.866 \approx 0.791$$

**Interpretation:**

Even though the fundamental components of voltage and current are phase-shifted by only 30 degrees (resulting in a DPF of 0.866), the presence of harmonic currents reduces the total power factor to 0.791. This means the load is drawing more apparent power than what would be expected based on the fundamental frequency alone, leading to reduced efficiency and potentially larger conductor sizes and transformer ratings.

### 4. Connection to Other Harmonic Indices

This topic is intrinsically linked to other harmonic indices introduced in this module, particularly Distortion Factor (DF) and Total Harmonic Distortion (THD).

*   **Distortion Factor (DF):** As shown above, $DF = \frac{I_1}{I_{rms}}$. It quantifies the impact of harmonics on the current waveform's RMS value relative to its fundamental component. A DF of 1 indicates a pure sinusoidal current, while a DF less than 1 signifies distortion.
*   **Total Harmonic Distortion (THD):** THD is usually defined for voltage or current as the ratio of the RMS value of the harmonic content to the RMS value of the fundamental component.
    *   $THD_I = \frac{\sqrt{\sum_{h=2}^{\infty} I_h^2}}{I_1}$
    *   We know $I_{rms}^2 = I_1^2 + \sum_{h=2}^{\infty} I_h^2$.
    *   So, $\sum_{h=2}^{\infty} I_h^2 = I_{rms}^2 - I_1^2$.
    *   $THD_I = \frac{\sqrt{I_{rms}^2 - I_1^2}}{I_1} = \sqrt{\frac{I_{rms}^2 - I_1^2}{I_1^2}} = \sqrt{\left(\frac{I_{rms}}{I_1}\right)^2 - 1} = \sqrt{DF^{-2} - 1}$

    From $TPF = DF \times DPF$, we have $DF = \frac{TPF}{DPF}$.
    Substituting this into the THD relation:
    $THD_I = \sqrt{\left(\frac{TPF}{DPF}\right)^{-2} - 1}$

    Alternatively, from $DF = \frac{I_1}{I_{rms}}$, we have $DF^2 = \frac{I_1^2}{I_{rms}^2}$.
    $TPF^2 = DF^2 \times DPF^2 = \frac{I_1^2}{I_{rms}^2} \times DPF^2$.
    $TPF = \sqrt{DF^2 \times DPF^2}$.

    This demonstrates how the distortion in the current waveform (quantified by DF and THD) directly impacts the total power factor.

### 5. Implications for Power Quality Monitoring and Mitigation

*   **Monitoring:** Power quality monitoring instruments must be capable of separating fundamental and harmonic components to accurately assess both DPF and TPF. Simply measuring the overall phase angle between voltage and current can be misleading if harmonics are present. Utilities and industrial facilities typically monitor both to identify issues and ensure compliance with standards.
*   **Mitigation:**
    *   **Capacitor Banks:** Standard capacitor banks installed for power factor correction are designed for the fundamental frequency. When significant harmonics are present, these capacitors can resonate with the system inductance, leading to amplified harmonic currents and voltages. This resonance can damage equipment and exacerbate power quality problems.
    *   **Harmonic Filters:** To address the issue of low TPF due to harmonics, specialized harmonic filters (e.g., passive filters, active filters) are often employed. These filters are designed to absorb or cancel out specific harmonic currents, thereby improving the current waveform, reducing harmonic distortion, and consequently increasing the TPF.
    *   **Active Harmonic Filters (AHFs):** AHFs inject compensating currents at harmonic frequencies to cancel out the harmonic content drawn by the load, effectively presenting a near-sinusoidal current to the source. This significantly improves the power factor.

### Key Points to Remember

*   **DPF** accounts only for the phase shift between fundamental voltage and current.
*   **TPF** accounts for both phase shift and harmonic distortion.
*   **Harmonic distortion reduces TPF** compared to DPF.
*   **TPF = DPF × DF**.
*   Non-linear loads are the primary cause of harmonic distortion.
*   Low TPF leads to inefficiencies and can result in utility penalties.
*   Capacitor banks used for PF correction can be problematic in the presence of harmonics.
*   Harmonic filters are used to improve TPF by mitigating harmonic distortion.

### Practice Questions

1.  Define Displacement Power Factor (DPF) and Total Power Factor (TPF). (K2)
2.  Explain why the Total Power Factor is often lower than the Displacement Power Factor in modern industrial systems. (K2)
3.  A load draws a fundamental current of 50 A with a phase lag of 20 degrees from the voltage. It also draws a third harmonic current of 10 A and a fifth harmonic current of 5 A. The voltage is sinusoidal and has an RMS value of 400 V. Calculate:
    a) The RMS value of the total current. (K3)
    b) The Displacement Power Factor (DPF). (K3)
    c) The Distortion Factor (DF). (K3)
    d) The Total Power Factor (TPF). (K3)
4.  Discuss the potential problems associated with using standard capacitor banks for power factor correction in a system with significant harmonic distortion. (K2)
5.  How can Fourier analysis be used to calculate both DPF and TPF? (K3)

### Answers to Practice Questions

1.  **DPF:** The power factor that considers only the fundamental frequency components of voltage and current, defined as the cosine of the phase angle between the fundamental voltage and fundamental current.
    **TPF:** The power factor that accounts for both the phase displacement of the fundamental frequency and the distortion caused by harmonic currents. It is the ratio of real power to apparent power.

2.  In modern industrial systems, non-linear loads (e.g., VFDs, SMPS) draw non-sinusoidal currents. This distorted current waveform contains harmonic components in addition to the fundamental frequency. While DPF only considers the fundamental component's phase shift, the harmonic currents contribute to the overall RMS current, thereby increasing the apparent power drawn. This increase in apparent power relative to the real power (which is primarily determined by the fundamental current) leads to a lower TPF.

3.  Given:
    *   Fundamental Current ($I_1$) = 50 A
    *   Fundamental Phase Angle ($\phi_1$) = 20 degrees
    *   Third Harmonic Current ($I_3$) = 10 A
    *   Fifth Harmonic Current ($I_5$) = 5 A
    *   RMS Voltage ($V_{rms}$) = 400 V (Assuming $V_1 = V_{rms} = 400$ V as voltage is sinusoidal)

    a) **RMS value of the total current ($I_{rms}$):**
    $$I_{rms} = \sqrt{I_1^2 + I_3^2 + I_5^2}$$
    $$I_{rms} = \sqrt{50^2 + 10^2 + 5^2} = \sqrt{2500 + 100 + 25} = \sqrt{2625}$$
    $$I_{rms} \approx 51.23 \text{ A}$$

    b) **Displacement Power Factor (DPF):**
    $$DPF = \cos(\phi_1) = \cos(20^\circ)$$
    $$DPF \approx 0.9397$$

    c) **Distortion Factor (DF):**
    $$DF = \frac{I_1}{I_{rms}} = \frac{50}{51.23}$$
    $$DF \approx 0.9760$$

    d) **Total Power Factor (TPF):**
    $$TPF = DF \times DPF$$
    $$TPF = 0.9760 \times 0.9397$$
    $$TPF \approx 0.9173$$

4.  Standard capacitor banks are tuned to resonate at the fundamental frequency (50 Hz or 60 Hz). In a system with significant harmonic distortion, especially the third harmonic, the capacitor bank can form a resonant circuit with the system inductance. This resonance can amplify the third harmonic currents and voltages, leading to:
    *   **Overheating and failure of capacitors:** Capacitors are not designed to handle significantly amplified harmonic currents.
    *   **Increased harmonic distortion in the system:** The resonant circuit can inject amplified harmonic currents back into the power system.
    *   **Potential damage to other connected equipment:** Amplified harmonic voltages can stress and damage other electrical equipment.
    *   **Reduced effectiveness of power factor correction:** The presence of harmonics can shift the point of resonance away from the fundamental frequency.

5.  Fourier analysis decomposes a complex, non-sinusoidal waveform into a sum of sinusoidal components at the fundamental frequency and its integer multiples (harmonics).
    *   **For DPF:** Fourier analysis identifies the fundamental component of the current ($I_1$) and its phase angle ($\phi_1$) relative to the fundamental voltage. DPF is then calculated as $\cos(\phi_1)$.
    *   **For TPF:** Fourier analysis allows for the calculation of the RMS value of the fundamental current ($I_1$) and the RMS values of all harmonic currents ($I_2, I_3, \dots, I_h$).
        *   The RMS value of the total current ($I_{rms}$) is calculated as $I_{rms} = \sqrt{I_1^2 + I_2^2 + I_3^2 + \dots}$.
        *   The real power ($P$) consumed by the load is calculated as the sum of the power delivered by each harmonic component: $P = \sum_{h=1}^{\infty} V_h I_h \cos(\phi_h)$. Assuming sinusoidal voltage ($V_h=0$ for $h>1$) and $V_1$ is the RMS fundamental voltage, $P = V_1 I_1 \cos(\phi_1)$.
        *   The apparent power ($S$) is calculated as $S = V_{rms} I_{rms}$. Assuming sinusoidal voltage ($V_{rms}=V_1$), $S = V_1 I_{rms}$.
        *   Therefore, TPF is calculated as $\frac{P}{S} = \frac{V_1 I_1 \cos(\phi_1)}{V_1 I_{rms}} = \frac{I_1 \cos(\phi_1)}{I_{rms}}$. This shows how Fourier analysis is fundamental to calculating both DPF and TPF.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### References:

*   **Dugan, R. C., Me Granaghen, M. F., & Beaty, H. W. (2012). Electrical Power System Quality.** (McGraw-Hill) - This textbook provides comprehensive coverage of power factor, harmonic distortion, and their impact on system performance, including detailed derivations and examples.
*   **Sankaran, C. (2002). Power Quality.** (CRC Press) - Explains the concepts of power factor and harmonic distortion, and their relationship, from a system perspective.
*   **Bollen, Math H. (1999). Understanding Power Quality Problems.** (Wiley-IEEE Press) - Offers insights into the causes and effects of power quality issues, including how harmonic currents contribute to power factor degradation.
*   **Singh, B., Chandra, A., & Al-Haddad, K. (2015). Power Quality problems and mitigation techniques.** (John Wiley and Sons Ltd) - Discusses mitigation strategies for low power factor problems that arise due to harmonic distortion.

---
This concludes the study notes on Displacement and Total Power Factor within the context of Module 3: Harmonic Indices. Remember to revisit the definitions and the relationship between DPF, DF, and TPF, as these are critical for understanding power quality issues.