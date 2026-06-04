---
title: "DC-AC Switch Mode Inverters: Inverter topologies, Driven Inverters: Push-Pull, Half bridge and Full bridge configurations"
subject: "POWER ELECTRONICS"
module: "Module 4: DC"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe602"
status: "completed"
scrapedAt: "2026-05-23T17:52:14.898Z"
---
# Power Electronics: Module 4 - DC-AC Switch Mode Inverters

This module delves into the operation and various configurations of DC-AC switch mode inverters, which are fundamental components in converting DC power to AC power. We will explore different inverter topologies, focusing on driven inverters like the push-pull, half-bridge, and full-bridge configurations.

**Course Outcomes Addressed:**

*   **CO4:** Illustrate different types of inverter circuits (Knowledge Level: K2) - This module directly addresses this by explaining the fundamental principles and structures of common inverter topologies.

## 1. Introduction to DC-AC Switch Mode Inverters

**Key Concept:** Inverters are power electronic converters that convert DC power into AC power. Switch mode inverters achieve this conversion by rapidly switching power semiconductor devices (like MOSFETs, IGBTs, or Thyristors) ON and OFF at high frequencies.

**Definition:**
*   **Inverter:** A power electronic circuit that converts DC input voltage into AC output voltage.
*   **Switch Mode Inverter:** An inverter that utilizes switching elements to create the AC output waveform. The switching action effectively "chops" the DC input to generate the desired AC waveform.

**Importance:**
*   Variable Speed Drives (VSDs) for AC motors.
*   Uninterruptible Power Supplies (UPS).
*   HVDC transmission systems.
*   AC voltage regulators.
*   Induction heating.
*   Photovoltaic (PV) power systems.

**Types of Inverters:**
Based on the output waveform:
*   **Square Wave Inverters:** Produce a square wave output.
*   **Quasi-Square Wave Inverters:** Produce a modified square wave with notches.
*   **Sinusoidal Pulse Width Modulation (SPWM) Inverters:** Produce a nearly sinusoidal output by varying the pulse width of switching signals.

Based on the DC input type:
*   **Voltage Source Inverters (VSIs):** The DC input is a voltage source (typically a stiff DC voltage).
*   **Current Source Inverters (CSIs):** The DC input is a current source (typically a stiff DC current).

**Textbook Reference:**
*   **Rashid, M. H. (Third Edition).** Chapter 11, "Inverters," provides a foundational overview of inverter principles and classifications.
*   **Umanand, L. (Reprint Edition 2014).** Chapter 10, "DC-AC Converters (Inverters)," introduces various inverter topologies and their basic operation.

---

## 2. Inverter Topologies: Driven Inverters

Driven inverters are a class of inverters where the switching devices are actively controlled (driven) to produce the AC output. We will focus on the most common configurations: Push-Pull, Half-Bridge, and Full-Bridge.

### 2.1. Push-Pull Inverter

**Key Concept:** A push-pull inverter uses a center-tapped transformer on the AC side and two switching devices. The devices alternately conduct, transferring current in opposite directions through the transformer primary, thus generating an AC output.

**Circuit Configuration:**

```
      +Vdc ---/\/\/---- SW1 ----/\/\/----
               |                    |
               |                    |
             [Transformer]         SW2 ----/\/\/----
               |                    |
               |                    |
      Output ---/\/\/---- GND ----/\/\/----
```

*   **Components:**
    *   DC Voltage Source ($V_{dc}$)
    *   Center-tapped Transformer
    *   Two switching devices (e.g., BJTs, MOSFETs, IGBTs) - SW1 and SW2.
    *   Diodes (often used for freewheeling, though not explicitly shown in the simplified diagram).

**Operation:**

1.  **SW1 ON, SW2 OFF:** Current flows from $V_{dc}$ through SW1, half of the transformer primary, and back to the DC source. This produces a magnetic flux in one direction.
2.  **SW1 OFF, SW2 ON:** Current flows from $V_{dc}$ through SW2, the other half of the transformer primary (in the opposite direction), and back to the DC source. This produces a magnetic flux in the opposite direction.

**Output Waveform:**
The output voltage across the secondary of the transformer will be a bipolar square wave.

**Advantages:**
*   Simple configuration.
*   Requires only two switching devices.
*   Can achieve a higher output voltage than a half-bridge for the same DC input voltage due to the transformer action.

**Disadvantages:**
*   Requires a center-tapped transformer, which is bulky and expensive.
*   DC current flows through each half of the transformer primary. If the switching is not perfectly symmetrical, the transformer can saturate, leading to increased losses and potential damage.
*   The switching devices must be able to withstand twice the DC input voltage ($2V_{dc}$) in terms of blocking voltage.

**Important Point to Remember:**
The push-pull inverter relies on the transformer to invert the polarity of the voltage during the switching cycles. Symmetrical switching is crucial to prevent transformer saturation.

**Textbook Reference:**
*   **Rashid, M. H.** Chapter 11.3.1, "Single-Phase Bridge Inverters," discusses the push-pull configuration as a basic bridge inverter.
*   **Umanand, L.** Chapter 10.2.1, "Half-bridge Inverter," implicitly covers the push-pull concept when discussing transformer-based inverters.

---

### 2.2. Half-Bridge Inverter

**Key Concept:** A half-bridge inverter uses two switching devices and two capacitors in series to create a voltage division. The switching devices connect the load alternately to the positive and negative DC rails (or a midpoint), generating a bipolar output.

**Circuit Configuration:**

```
      +Vdc ---/\/\/---- SW1 ----/\/\/----
               |                      |
               C1                     |
               |                      |
               | ------ Load ------- |
               |                      |
               C2                     |
               |                      |
      ----/\/\/---- SW2 ----/\/\/----
      |
     GND
```

*   **Components:**
    *   DC Voltage Source ($V_{dc}$)
    *   Two switching devices (SW1, SW2).
    *   Two capacitors (C1, C2) forming a voltage divider. For symmetrical operation, C1 = C2 = C.
    *   Load (connected between the midpoint of the capacitors and the switching nodes).

**Operation:**

1.  **SW1 ON, SW2 OFF:** The load is connected to the upper DC rail ($+V_{dc}/2$ across C1, if capacitors are charged). The current flows through SW1, the load, and C2 back to the DC source.
2.  **SW1 OFF, SW2 ON:** The load is connected to the lower DC rail ($-V_{dc}/2$ across C2, if capacitors are charged). The current flows through C1, the load, and SW2 back to the DC source.

**Output Waveform:**
The output voltage across the load is a bipolar square wave, switching between $+V_{dc}/2$ and $-V_{dc}/2$.

**Advantages:**
*   Simpler than a full-bridge inverter.
*   Requires fewer switching devices than a full-bridge.
*   No need for a center-tapped transformer.

**Disadvantages:**
*   The output voltage is half of the DC input voltage ($V_{dc}/2$), limiting the power output for a given DC voltage.
*   Requires capacitors for voltage division, which can be bulky and introduce voltage balancing issues if not managed properly.
*   Each switching device must block $V_{dc}$.

**Important Point to Remember:**
The capacitors in a half-bridge inverter act as a voltage divider, creating a virtual ground or midpoint. The output voltage is the voltage across the load, which is switched between the positive and negative sides of the DC bus.

**Textbook Reference:**
*   **Umanand, L.** Chapter 10.2.1, "Half-bridge Inverter," provides a detailed explanation of its circuit and operation.
*   **Rashid, M. H.** Chapter 11.3.1, "Single-Phase Bridge Inverters," also covers the half-bridge configuration.

---

### 2.3. Full-Bridge Inverter (H-Bridge)

**Key Concept:** A full-bridge inverter, also known as an H-bridge, uses four switching devices and connects the load across two points that are alternately switched to the positive and negative DC rails. This configuration offers a higher output voltage and more flexibility compared to the half-bridge.

**Circuit Configuration:**

```
      +Vdc ---/\/\/---- SW1 ----/\/\/---- SW3 ----/\/\/----
               |                      |                      |
               |                      |                      |
               Load <-----------------|---------------------> Load
               |                      |                      |
               |                      |                      |
      ----/\/\/---- SW2 ----/\/\/---- SW4 ----/\/\/----
      |                                                      |
     GND                                                    GND
```

*   **Components:**
    *   DC Voltage Source ($V_{dc}$)
    *   Four switching devices (SW1, SW2, SW3, SW4).
    *   Load.
    *   Freewheeling diodes (often parallel to the switching devices for inductive loads).

**Operation:**

1.  **SW1 ON, SW4 ON (SW2, SW3 OFF):** Current flows from $V_{dc}$ through SW1, the load (left to right), and SW4 back to the DC source. The load voltage is $+V_{dc}$.
2.  **SW2 ON, SW3 ON (SW1, SW4 OFF):** Current flows from $V_{dc}$ through SW3, the load (right to left), and SW2 back to the DC source. The load voltage is $-V_{dc}$.
3.  **Other combinations (e.g., SW1, SW3 ON):** These are typically avoided as they create a short circuit across the DC source.

**Output Waveform:**
The output voltage across the load is a bipolar square wave, switching between $+V_{dc}$ and $-V_{dc}$. By controlling the switching sequence, different output waveforms (e.g., quasi-square, SPWM) can be generated.

**Advantages:**
*   Provides a higher output voltage ($V_{dc}$) compared to the half-bridge ($V_{dc}/2$).
*   Can generate bipolar output voltages without a transformer.
*   More flexible in generating various output waveforms.
*   Lower switching losses per device compared to push-pull for the same output.

**Disadvantages:**
*   Requires four switching devices, increasing complexity and cost.
*   Requires careful control to avoid shoot-through (both devices in a leg conducting simultaneously).

**Important Point to Remember:**
The H-bridge is the most versatile single-phase inverter topology. Proper gating signals are essential to prevent short-circuiting the DC supply. The output voltage can be controlled by varying the duty cycle of the switching or by using PWM techniques.

**Textbook Reference:**
*   **Rashid, M. H.** Chapter 11.3.1, "Single-Phase Bridge Inverters," details the operation of the full-bridge inverter.
*   **Umanand, L.** Chapter 10.2.2, "Full-bridge Inverter," provides a comprehensive study of this configuration.
*   **Mohan, N., Undeland, T. M., & Robbins, W. P.** Chapter 11, "Bridge Inverters," discusses the full-bridge (or H-bridge) topology extensively.
*   **Hart, D. W.** Chapter 8, "Inverters," covers the H-bridge inverter and its applications.

---

## 3. Control Strategies for Inverters (Brief Mention)

While this module focuses on topologies, it's important to acknowledge that the output waveform's quality and characteristics are heavily dependent on the control strategy.

*   **Bipolar Voltage Switching:** Both legs of the inverter switch, resulting in a full DC voltage across the load in each state.
*   **Unipolar Voltage Switching:** One leg of the inverter remains fixed while the other leg switches, leading to fewer transitions and potentially reduced switching losses.
*   **Pulse Width Modulation (PWM):**
    *   **Sinusoidal PWM (SPWM):** Compares a sinusoidal reference signal with a triangular carrier signal to generate switching pulses, resulting in a near-sinusoidal output voltage.
    *   **Space Vector PWM (SVPWM):** A more advanced technique, especially for three-phase inverters, that offers better utilization of DC bus voltage and reduced harmonics.

**Textbook Reference:**
*   **Rashid, M. H.** Chapter 11.4, "Control of Inverters," and Chapter 11.5, "Harmonic Reduction Techniques," are crucial for understanding how to shape the output waveform.
*   **Umanand, L.** Chapter 10.3, "PWM Techniques," provides insights into controlling inverter output.

---

## 4. Practice Questions and Exercises

**Question 1:**
The push-pull inverter requires a center-tapped transformer. What is the primary disadvantage of using a center-tapped transformer in power electronic circuits?
**(a)** It increases voltage regulation.
**(b)** It can lead to transformer saturation if switching is asymmetrical.
**(c)** It reduces the output power capability.
**(d)** It requires more switching devices.

**Answer 1:**
**(b)** It can lead to transformer saturation if switching is asymmetrical.

**Question 2:**
What is the maximum output voltage that can be obtained from a half-bridge inverter with a DC input voltage of $V_{dc}$?
**(a)** $V_{dc}$
**(b)** $V_{dc}/2$
**(c)** $2V_{dc}$
**(d)** $V_{dc}/\sqrt{2}$

**Answer 2:**
**(b)** $V_{dc}/2$

**Question 3:**
Describe the key difference in the number of switching devices required between a half-bridge inverter and a full-bridge inverter.

**Answer 3:**
A half-bridge inverter requires two switching devices, while a full-bridge inverter requires four switching devices.

**Question 4:**
Explain why avoiding shoot-through is critical in a full-bridge inverter. What could happen if shoot-through occurs?

**Answer 4:**
Shoot-through occurs when both switches in the same leg of the inverter (e.g., SW1 and SW2 in the same vertical branch) are turned ON simultaneously. This creates a direct short circuit across the DC voltage source, leading to very high currents that can damage the switching devices and the DC source.

**Question 5:**
Consider a half-bridge inverter operating with a DC input voltage of 100V. What will be the peak output voltage across the load? If the switching frequency is 1kHz, what is the fundamental frequency of the output waveform (assuming ideal square wave output)?

**Answer 5:**
*   **Peak Output Voltage:** For a half-bridge inverter, the peak output voltage is $V_{dc}/2$. So, the peak output voltage is 100V / 2 = **50V**.
*   **Fundamental Frequency:** If the switching frequency (frequency of switching between states) is 1kHz, and it's switching between two states for each half cycle of the output, the fundamental frequency of the output waveform will also be **1kHz**.

---

## 5. Important Points to Remember

*   **Inverter Function:** Convert DC to AC.
*   **Switch Mode Principle:** Rapid switching of power devices.
*   **Push-Pull:** Uses a center-tapped transformer, two switches. Susceptible to transformer saturation. Output voltage is stepped up by transformer ratio.
*   **Half-Bridge:** Uses two capacitors for voltage division, two switches. Output voltage is half the DC input. Simpler than full-bridge but lower output voltage.
*   **Full-Bridge (H-Bridge):** Uses four switches. Offers full DC voltage across the load. More complex but more versatile.
*   **Switching Device Voltage Rating:** For a half-bridge, each switch must block $V_{dc}$. For a push-pull, each switch must block $2V_{dc}$. For a full-bridge, each switch must block $V_{dc}$.
*   **Control is Key:** The switching sequence and timing determine the output waveform quality and efficiency. PWM is crucial for generating sinusoidal outputs.
*   **Freewheeling Diodes:** Essential for inductive loads to provide a path for inductive current when the switches turn OFF, preventing voltage spikes.

---

## 6. Connection to Course Outcomes

*   **CO4 (Illustrate different types of inverter circuits):** This entire module is dedicated to illustrating the circuits and operational principles of key inverter topologies: push-pull, half-bridge, and full-bridge. The diagrams, operation descriptions, and advantages/disadvantages all contribute to fulfilling this outcome.

---

This study guide provides a foundational understanding of common DC-AC switch mode inverter topologies. Further study into control techniques, harmonic analysis, and the selection of power semiconductor devices will provide a more complete picture of power inverter design and application.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
