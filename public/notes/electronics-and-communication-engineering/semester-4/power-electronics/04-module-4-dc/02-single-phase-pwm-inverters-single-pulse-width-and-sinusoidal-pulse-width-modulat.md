---
title: "Single phase PWM inverters (Single pulse width and sinusoidal pulse width modulation) – rms output voltage equation and output voltage waveforms."
subject: "POWER ELECTRONICS"
module: "Module 4: DC"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe603"
status: "completed"
scrapedAt: "2026-05-23T17:52:15.624Z"
---
# Power Electronics - Module 4: DC - Single Phase PWM Inverters

## 1. Introduction to Single-Phase Inverters

Inverters are power electronic circuits that convert DC power to AC power. Single-phase inverters are used in applications requiring single-phase AC output, such as uninterruptible power supplies (UPS), variable frequency drives (VFD) for single-phase motors, and solar power conditioning systems.

**Key Concept:** The fundamental goal of an inverter is to produce an AC waveform from a DC source.

**Types of Single-Phase Inverters:**

*   **Voltage Source Inverters (VSI):** Assume a stiff DC voltage source. The output voltage waveform is primarily determined by the switching pattern.
*   **Current Source Inverters (CSI):** Assume a stiff DC current source. The output current waveform is primarily determined by the switching pattern.

This module focuses on Voltage Source Inverters (VSIs) and their Pulse Width Modulation (PWM) techniques.

**Course Outcome Alignment:** CO4 (Illustrate different types of inverter circuits) - This section introduces the fundamental concept and types of inverters. (Knowledge Level: K2)

---

## 2. Basic Operation of a Single-Phase VSI

A basic single-phase VSI uses four semiconductor switches (typically IGBTs or MOSFETs) arranged in an H-bridge configuration. These switches are controlled to connect the AC load to the DC source in a specific sequence to generate an AC output voltage.

**H-Bridge Configuration:**

```
      DC+ ---/\/\/\--- SW1 ---/\/\/\--- SW3 ---/\/\/\---
             |         |         |         |
             |         |         |         |
             |       Load        |
             |         |         |         |
      DC- ---/\/\/\--- SW2 ---/\/\/\--- SW4 ---/\/\/\---
```

**Switching Operation:**

*   **SW1 and SW4 ON, SW2 and SW3 OFF:** Load connected across DC+ and DC-. The output voltage is positive ($+V_{dc}$).
*   **SW2 and SW3 ON, SW1 and SW4 OFF:** Load connected across DC- and DC+. The output voltage is negative ($-V_{dc}$).

**Simple Square Wave Inverter:**
In its simplest form, the switches are turned on and off at the desired frequency (e.g., 50 or 60 Hz). This results in a square wave output voltage.

**Waveform:**

```
      +Vdc |-------/--------\--------/--------\-------
           |      /          \      /          \
           |     /            \    /            \
      0 ---|----/--------------\--/--------------\--
           |   /                \/                \/
           |  /                  \                  \
      -Vdc |-/--------------------\------------------\---
           |
         Time
```

**RMS Output Voltage Equation for Square Wave Inverter:**
For a purely square wave output with amplitude $V_{dc}$, the RMS output voltage is equal to the DC input voltage.

$V_{out, rms} = V_{dc}$

**Limitations of Square Wave Inverters:**
*   **Harmonic Content:** Square waves contain significant odd harmonics (3rd, 5th, 7th, etc.), which can cause problems in connected loads (e.g., overheating, reduced efficiency, electromagnetic interference).
*   **Poor Output Quality:** The distorted waveform is not suitable for many applications without filtering.

**Textbook Reference:**
*   **Rashid, M. H. (Third Edition).** Chapter 7 discusses the basic principles of inverters, including the H-bridge configuration and square wave operation.
*   **Umanand, L. (Reprint Edition 2014).** Chapter 12 covers the basic inverter topologies and their operation.

**Course Outcome Alignment:**
*   CO4 (Illustrate different types of inverter circuits) - Explains the fundamental H-bridge inverter. (Knowledge Level: K2)
*   CO3 (Analyze different power converter circuits) - Provides a basic understanding of inverter operation. (Knowledge Level: K3)

---

## 3. Pulse Width Modulation (PWM) Techniques

PWM is a technique used to control the output voltage and frequency of an inverter by varying the width of the pulses applied to the switching devices. This allows for a more sinusoidal output voltage waveform and better control over the fundamental component of the output.

**Key Concept:** By controlling the on-time and off-time of the switching devices, the fundamental component of the output voltage can be varied while reducing harmonics.

**Types of PWM for Single-Phase Inverters:**

### 3.1 Single Pulse Width Modulation (SPWM)

In SPWM, a single pulse is generated within each half-cycle of the output waveform. The width of this pulse is varied to control the fundamental component of the output voltage.

**How it works:**

1.  **Carrier Signal:** A high-frequency triangular or sawtooth wave is used as the carrier signal.
2.  **Modulating Signal:** A low-frequency sinusoidal wave (desired output waveform) is used as the modulating signal.
3.  **Comparison:** The modulating signal is compared with the carrier signal.
4.  **Switching Pulses:** When the modulating signal is greater than the carrier signal, the switching device in one leg of the H-bridge is turned ON, and the opposite switch is turned OFF. Conversely, when the modulating signal is less than the carrier signal, the switching pattern is reversed.

**SPWM Control:**

*   **Amplitude Modulation Ratio ($M_a$):** The ratio of the amplitude of the modulating signal to the amplitude of the carrier signal. $M_a = A_{mod} / A_{carrier}$.
*   **Output Voltage Control:** The fundamental component of the output voltage is proportional to $M_a$. $V_{out,1} = M_a \cdot V_{dc}$ (for bipolar SPWM).

**SPWM Waveform (Conceptual):**

Consider a half-cycle of the desired sinusoidal output. A wide pulse corresponds to a higher fundamental voltage, while a narrow pulse corresponds to a lower fundamental voltage. The pulse width is adjusted based on the instantaneous value of the modulating sine wave.

**Example:**

If the modulating signal is $A_{mod} \sin(\omega_{0}t)$ and the carrier is a triangle wave, the switching decision for one leg of the inverter depends on whether $A_{mod} \sin(\omega_{0}t) > V_{carrier}$ or $A_{mod} \sin(\omega_{0}t) < V_{carrier}$.

**RMS Output Voltage Equation for SPWM (Bipolar SPWM):**

For bipolar SPWM, where the polarity of the output voltage changes with each half-cycle, the fundamental component of the output voltage is given by:

$V_{out,1} = M_a \cdot V_{dc}$

To find the RMS value of the fundamental component:

$V_{out,1, rms} = \frac{M_a \cdot V_{dc}}{\sqrt{2}}$

**Important Note:** SPWM is generally used to control the *fundamental* component of the output voltage. The overall RMS output voltage will depend on the harmonic content as well. However, in PWM techniques, the primary goal is to shape the waveform such that the fundamental component is dominant and controlled, and harmonics are minimized.

**Textbook Reference:**
*   **Rashid, M. H. (Third Edition).** Chapter 10 discusses PWM techniques, including SPWM and its variations.
*   **Umanand, L. (Reprint Edition 2014).** Chapter 12 delves into various PWM strategies.
*   **Mohan, N., Undeland, T. M., & Robbins, W. P. (Third Edition).** Chapter 8 provides a detailed explanation of PWM techniques.

**Course Outcome Alignment:**
*   CO3 (Analyze different power converter circuits) - Essential for understanding how PWM controls the inverter output. (Knowledge Level: K3)
*   CO4 (Illustrate different types of inverter circuits) - Demonstrates a method to improve inverter output quality. (Knowledge Level: K2)

---

### 3.2 Sinusoidal Pulse Width Modulation (SPWM) - Detailed Explanation

Sinusoidal PWM (SPWM) is a widely used PWM technique that generates a sinusoidal output voltage by modulating the width of switching pulses based on a sinusoidal reference signal. It aims to produce an output voltage where the fundamental component is sinusoidal and the harmonic content is reduced.

**Key Concepts:**

*   **Modulating Signal:** A sinusoidal waveform of the desired output frequency and amplitude, $V_{ref}(t) = A_{ref} \sin(\omega_0 t)$.
*   **Carrier Signal:** A high-frequency triangular or sawtooth waveform with frequency $f_c$ (carrier frequency) and amplitude $A_c$.
*   **Frequency Modulation Ratio ($m_f$):** The ratio of the carrier frequency to the modulating frequency. $m_f = f_c / f_0$.
*   **Amplitude Modulation Ratio ($M_a$):** The ratio of the amplitude of the modulating signal to the amplitude of the carrier signal. $M_a = A_{ref} / A_c$.

**Generation of PWM Pulses:**

The PWM pulses for the inverter switches are generated by comparing the sinusoidal modulating signal ($V_{ref}$) with the triangular carrier signal ($V_{tri}$).

**For a bipolar SPWM scheme:**

*   **Leg 1 (Switches S1, S2):**
    *   When $V_{ref}(t) > V_{tri}(t)$, S1 is ON and S2 is OFF.
    *   When $V_{ref}(t) < V_{tri}(t)$, S1 is OFF and S2 is ON.
*   **Leg 2 (Switches S3, S4):**
    *   When $V_{ref}(t) < V_{tri}(t)$ (inverted reference), S3 is ON and S4 is OFF.
    *   When $V_{ref}(t) > V_{tri}(t)$ (inverted reference), S3 is OFF and S4 is ON.

Alternatively, a simpler bipolar SPWM generates pulses for one leg based on $V_{ref}$ vs $V_{tri}$. The other leg's switches are complementarily switched, ensuring that switches in the same leg do not conduct simultaneously. For bipolar PWM, the switching in the second leg is often inverted relative to the first leg's control signal's behavior relative to the carrier.

**Output Voltage Waveform (Bipolar SPWM):**

The output voltage switches between $+V_{dc}$ and $-V_{dc}$. The width of these pulses is varied according to the modulating signal.

*   When the reference sine wave is positive and greater than the triangle wave, the output is $+V_{dc}$.
*   When the reference sine wave is positive and less than the triangle wave, the output is $-V_{dc}$.
*   When the reference sine wave is negative and less than the triangle wave, the output is $-V_{dc}$.
*   When the reference sine wave is negative and greater than the triangle wave, the output is $+V_{dc}$.

This results in a waveform that approximates a sine wave.

**Example of SPWM Generation:**

Let $V_{ref}(t) = A_{ref} \sin(2\pi f_0 t)$ and $V_{tri}(t)$ be a triangular wave with amplitude $A_c$ and frequency $f_c$.

*   If $M_a < 1$, the output fundamental voltage can be controlled.
*   When $M_a$ increases, the width of the pulses generally increases, leading to a larger fundamental output voltage.

**RMS Output Voltage Equation for SPWM:**

The fundamental component of the output voltage for bipolar SPWM is given by:

$V_{out,1} = M_a \cdot V_{dc}$

where $M_a = A_{ref} / A_c$. This equation holds as long as $M_a \le 1$.

The RMS value of the fundamental component is:

$V_{out,1, rms} = \frac{M_a \cdot V_{dc}}{\sqrt{2}}$

**Maximum Fundamental Output Voltage:**

The maximum value for $M_a$ is 1 without distortion of the fundamental. If $M_a > 1$, the modulating signal clips the triangular wave, leading to a phenomenon called "third harmonic injection" or "overmodulation," which can increase the fundamental voltage but distorts its sinusoidal shape.

**Harmonic Analysis:**

SPWM is effective in shifting most of the switching frequency harmonics to frequencies around the carrier frequency ($f_c$) and its multiples. This makes filtering easier. The distortion introduced is primarily switching frequency sidebands and lower-order harmonics, which are significantly smaller than in square wave inverters.

**Textbook Reference:**
*   **Rashid, M. H. (Third Edition).** Chapter 10 is a primary source for SPWM.
*   **Umanand, L. (Reprint Edition 2014).** Chapter 12 provides a thorough treatment of SPWM.
*   **Mohan, N., Undeland, T. M., & Robbins, W. P. (Third Edition).** Chapter 8 is excellent for understanding the principles and analysis of PWM.
*   **Hart, D. W. (2011).** Chapter 11 discusses PWM techniques and their impact on output waveforms.

**Course Outcome Alignment:**
*   CO3 (Analyze different power converter circuits) - Crucial for understanding the control strategy and output characteristics. (Knowledge Level: K3)
*   CO4 (Illustrate different types of inverter circuits) - Details a sophisticated method of controlling inverter output. (Knowledge Level: K2)

---

## 4. Unipolar PWM Techniques (Brief Mention)

While the focus is on bipolar SPWM, it's worth noting that unipolar PWM techniques also exist. In unipolar PWM, one leg of the inverter switches between $+V_{dc}$ and $0$ (or $-V_{dc}$ and $0$), while the other leg switches complementarily. This typically results in fewer switching losses and a cleaner output waveform, but the control logic can be slightly more complex.

**Key Concept:** Reduces the number of distinct output voltage levels per half-cycle, potentially leading to fewer switching operations.

**Textbook Reference:**
*   **Rashid, M. H. (Third Edition).** Chapter 10 may also cover unipolar PWM.
*   **Umanand, L. (Reprint Edition 2014).** Chapter 12 might discuss unipolar variations.

---

## 5. RMS Output Voltage Equation and Output Voltage Waveforms

### 5.1 RMS Output Voltage Equation

**Square Wave Inverter (Bipolar):**
*   Output voltage is $V_{dc}$ for $0 < \theta < \pi$ and $-V_{dc}$ for $\pi < \theta < 2\pi$.
*   $V_{out, rms} = V_{dc}$

**SPWM (Bipolar):**
*   The fundamental component of the output voltage is controlled by the amplitude modulation ratio $M_a$.
*   $V_{out,1} = M_a \cdot V_{dc}$
*   $V_{out,1, rms} = \frac{M_a \cdot V_{dc}}{\sqrt{2}}$

This equation represents the RMS value of the *fundamental* component of the output voltage. The total RMS output voltage will include the contribution of harmonics, which are present but ideally suppressed by PWM. In practice, for an ideal SPWM with $M_a \le 1$, the total RMS output voltage is very close to $V_{out,1, rms}$ if the switching frequency is high and harmonics are well-attenuated. However, the question typically refers to the controllable fundamental component.

**Important Distinction:** When referring to "RMS output voltage equation" in the context of PWM, it's most often about the RMS value of the fundamental component, as this is what is being controlled by the modulation.

### 5.2 Output Voltage Waveforms

**Square Wave Inverter:**
A symmetrical square wave with amplitude $V_{dc}$.

```
      +Vdc |-------/\--------\--------/\--------\-------
           |      /  \        /  \      /  \        /  \
           |     /    \      /    \    /    \      /    \
      0 ---|----/------\----/------\--/------\----/------\--
           |   /        \/        \/        \/        \/
           |  /          \        \        \        \
      -Vdc |-/------------\--------\--------\--------\-------
           |
         Time
```

**SPWM Inverter (Bipolar):**
A series of pulses of varying widths, switching between $+V_{dc}$ and $-V_{dc}$. The width of these pulses is determined by the comparison of the sine wave and the triangle wave.

```
      +Vdc |---/\--/\--/\--/\--/\--/\--/\--/\--/\-------  (Example pulse pattern)
           |  /  \/  \/  \/  \/  \/  \/  \/  \/  \
           | /    \  /    \  /    \  /    \  /    \  \
      0 ---|/------\/------\/------\/------\/------\/--\---
           |                                         \
      -Vdc |-------------------------------------------\-------
           |
         Time
```

The overall shape will resemble a sine wave, with the switching transitions occurring at high frequencies.

**Harmonic Content:**

*   **Square Wave:** Contains significant odd harmonics (3rd, 5th, 7th...). The $n$-th harmonic amplitude is proportional to $1/n$.
*   **SPWM:** Harmonics are concentrated around the switching frequency ($f_c$) and its multiples. The lower-order harmonics (3rd, 5th, 7th...) are significantly reduced compared to a square wave.

**Example Waveform Visualization (SPWM):**

Imagine a sine wave modulating a triangle wave.
*   When the sine wave is high, the pulse width for $+V_{dc}$ is wide.
*   When the sine wave is low, the pulse width for $-V_{dc}$ is wide.
*   The transitions happen at the points where the sine wave crosses the triangle wave.

**Textbook Reference:**
*   **Rashid, M. H. (Third Edition).** Chapter 10 provides graphical illustrations of SPWM waveforms.
*   **Umanand, L. (Reprint Edition 2014).** Chapter 12 includes waveform examples for different PWM techniques.
*   **Mohan, N., Undeland, T. M., & Robbins, W. P. (Third Edition).** Chapter 8 shows detailed waveforms and harmonic spectra for PWM inverters.
*   **Hart, D. W. (2011).** Chapter 11 includes helpful diagrams of PWM waveforms.

**Course Outcome Alignment:**
*   CO3 (Analyze different power converter circuits) - Understanding the output characteristics is key to analysis. (Knowledge Level: K3)
*   CO4 (Illustrate different types of inverter circuits) - Visualizing the output is part of illustration. (Knowledge Level: K2)

---

## 6. Important Points to Remember

*   **Inverters convert DC to AC.**
*   **H-bridge configuration** is fundamental for single-phase inverters.
*   **Square wave inverters** are simple but have poor output quality due to harmonics.
*   **PWM techniques** are used to improve the output waveform quality and control the fundamental voltage.
*   **SPWM** compares a sinusoidal reference with a high-frequency carrier.
*   **Amplitude Modulation Ratio ($M_a$)** controls the fundamental output voltage in SPWM ($V_{out,1} = M_a \cdot V_{dc}$).
*   **Frequency Modulation Ratio ($m_f$)** is the ratio of carrier to modulating frequency.
*   **Bipolar SPWM** switches the output between $+V_{dc}$ and $-V_{dc}$.
*   **RMS output voltage (fundamental component)** for bipolar SPWM is $V_{out,1, rms} = \frac{M_a \cdot V_{dc}}{\sqrt{2}}$.
*   **Harmonics in SPWM** are shifted to the carrier frequency and its multiples, making filtering easier.
*   **$M_a > 1$ (Overmodulation)** can increase the fundamental output voltage but distorts the sine wave.

---

## 7. Practice Questions and Answers

**Question 1:** A single-phase voltage source inverter using bipolar SPWM has a DC input voltage of $V_{dc} = 100 \, V$. If the amplitude modulation ratio $M_a = 0.8$, what is the RMS value of the fundamental component of the output voltage?

**Answer:**
The RMS value of the fundamental component of the output voltage for bipolar SPWM is given by:
$V_{out,1, rms} = \frac{M_a \cdot V_{dc}}{\sqrt{2}}$
Given $V_{dc} = 100 \, V$ and $M_a = 0.8$.
$V_{out,1, rms} = \frac{0.8 \cdot 100 \, V}{\sqrt{2}} = \frac{80}{\sqrt{2}} \, V \approx 56.57 \, V$

**Question 2:** What is the main advantage of using SPWM over a simple square wave inverter?
    a) Higher output frequency capability
    b) Reduced harmonic content in the output voltage
    c) Lower switching losses
    d) Simpler control circuitry

**Answer:**
b) Reduced harmonic content in the output voltage. SPWM shifts harmonics to higher frequencies, making the output waveform closer to sinusoidal.

**Question 3:** For a square wave inverter, what is the RMS output voltage if the DC input is $120 \, V$?

**Answer:**
For a square wave inverter, the RMS output voltage is equal to the DC input voltage.
$V_{out, rms} = V_{dc} = 120 \, V$

**Question 4:** If the amplitude of the modulating sine wave in an SPWM is $6 \, V$ and the amplitude of the triangular carrier wave is $10 \, V$, what is the amplitude modulation ratio $M_a$? What is the fundamental component of the output voltage if $V_{dc} = 150 \, V$ using bipolar SPWM?

**Answer:**
Amplitude Modulation Ratio, $M_a = \frac{\text{Amplitude of Modulating Signal}}{\text{Amplitude of Carrier Signal}} = \frac{6 \, V}{10 \, V} = 0.6$
The fundamental component of the output voltage (amplitude) is $V_{out,1} = M_a \cdot V_{dc}$.
$V_{out,1} = 0.6 \cdot 150 \, V = 90 \, V$

**Question 5:** Briefly explain the role of the carrier wave and the modulating wave in SPWM.

**Answer:**
The **modulating wave** (typically a sine wave) dictates the desired output voltage waveform (frequency and amplitude). The **carrier wave** (typically a high-frequency triangle or sawtooth wave) is used as a reference for pulse generation. The comparison between these two signals determines the switching instants and the width of the output pulses, thereby controlling the fundamental output voltage and reducing harmonics.

---

This concludes the study notes for Single-Phase PWM Inverters (Single Pulse Width and Sinusoidal Pulse Width Modulation) from Module 4: DC. These notes cover the fundamental principles, operational aspects, voltage equations, waveforms, and practical considerations for these important power electronic converters.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
