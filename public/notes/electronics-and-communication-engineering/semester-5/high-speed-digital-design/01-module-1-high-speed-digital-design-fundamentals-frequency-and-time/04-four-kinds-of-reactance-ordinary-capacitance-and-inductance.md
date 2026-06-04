---
title: "four kinds of reactance- ordinary capacitance and inductance"
subject: "HIGH SPEED DIGITAL DESIGN"
module: "Module 1: High Speed Digital Design: Fundamentals: Frequency and time"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feb5a"
status: "completed"
scrapedAt: "2026-05-23T17:57:05.330Z"
---
# HIGH SPEED DIGITAL DESIGN: Module 1 - Fundamentals: Frequency and Time

## Topic: Four Kinds of Reactance - Ordinary Capacitance and Inductance

This module delves into the fundamental behaviors of passive circuit elements – capacitance and inductance – in the context of high-speed digital design. Understanding how these reactances affect signal propagation is crucial for predictable and reliable circuit performance at high frequencies.

### Learning Outcomes Addressed in this Topic:

*   **Illustrate the effects of passive circuit elements on signal propagation in high speed digital circuits (CO1, K2).** This topic directly addresses how capacitance and inductance impede or alter the flow of digital signals, especially as frequencies increase.

---

### 1. Introduction to Reactance

In AC circuits, reactances are the opposition to current flow that arises from energy storage in electric and magnetic fields. Unlike resistance, which dissipates energy as heat, reactance causes energy to be stored and released cyclically. In high-speed digital design, these reactive effects become significant because the rapid switching of signals involves high-frequency components.

**Key Concept:** Reactance is the frequency-dependent opposition to current flow.

**Important Point:** At DC, ideal capacitors act as open circuits and ideal inductors act as short circuits. As frequency increases, their behavior changes dramatically.

---

### 2. Ordinary Capacitance

**Definition:** Capacitance is the ability of a component or circuit to store electrical energy in the form of an electric field. It is typically associated with two conductors separated by an insulator (dielectric).

**Unit:** Farad (F)

**Formula:**

*   $C = \frac{\epsilon A}{d}$
    *   $C$: Capacitance
    *   $\epsilon$: Permittivity of the dielectric material
    *   $A$: Area of overlap between the conductors
    *   $d$: Distance between the conductors

**Behavior with Frequency (Capacitive Reactance):**

A capacitor opposes changes in voltage. In AC circuits, this opposition is known as capacitive reactance ($X_C$).

**Formula for Capacitive Reactance:**

*   $X_C = \frac{1}{2\pi fC}$
    *   $X_C$: Capacitive Reactance (Ohms, $\Omega$)
    *   $f$: Frequency (Hertz, Hz)
    *   $C$: Capacitance (Farads, F)

**Key Observations from the Formula:**

*   As frequency ($f$) increases, capacitive reactance ($X_C$) decreases.
*   As capacitance ($C$) increases, capacitive reactance ($X_C$) decreases.

**Implications in High-Speed Digital Design:**

*   **Loading Effect:** Capacitors tend to "load down" the signal. At high frequencies, the low capacitive reactance allows more current to flow through the capacitor, effectively shunting the signal to ground or reducing its amplitude.
*   **Phase Shift:** Capacitors cause a current to lead the voltage across them by 90 degrees in an ideal AC circuit. In digital signals, this means the current drawn to charge and discharge the capacitance can affect the timing of the signal transitions.
*   **Signal Degradation:** Stray capacitances (between traces, between layers, at component leads, etc.) are ubiquitous in PCBs and integrated circuits. These unmanaged capacitances can slow down rise and fall times, reduce signal amplitude, and cause inter-symbol interference.
*   **Filtering:** Capacitors are used as filters. In high-speed circuits, they can act as unintentional low-pass filters, attenuating high-frequency components of the signal.

**Examples in High-Speed Digital Design:**

*   **Input/Output (I/O) Capacitance of ICs:** Every digital gate and I/O pin has inherent input capacitance. As signal speeds increase, this capacitance becomes a significant factor in determining the driving strength required from the source. (Refer to Johnson & Graham, Chapter 3, "The Nature of Signal Propagation").
*   **Stray Capacitance on PCBs:** Capacitance between adjacent traces, between a trace and the ground plane, or at vias. These are often in the picofarad (pF) range but can become critical at gigahertz frequencies.
*   **Decoupling Capacitors:** While intentionally used to provide local charge for fast switching, their parasitic inductance and resistance (ESR) become important at high frequencies. The "capacitance" of a decoupling capacitor is only effective over a certain frequency range.

**Textbook Reference:**
*   Johnson & Graham, "High Speed Digital Design: A Handbook of Black Magic": Discusses the pervasive nature of capacitance and its impact on signal integrity, particularly in Chapters 3 and 4, focusing on transmission lines and their characteristic impedance.

---

### 3. Ordinary Inductance

**Definition:** Inductance is the property of an electrical conductor by which a change in the current flowing through it induces an electromotive force (voltage) in both the conductor itself (self-inductance) and in any nearby conductors (mutual inductance). It is associated with energy storage in a magnetic field.

**Unit:** Henry (H)

**Formula for Self-Inductance (for a long straight wire):**

*   $L \approx \frac{\mu_0}{2\pi} \ln\left(\frac{2l}{r}\right)$ (simplified, neglecting internal inductance)
    *   $L$: Inductance
    *   $\mu_0$: Permeability of free space
    *   $l$: Length of the wire
    *   $r$: Radius of the wire

**Behavior with Frequency (Inductive Reactance):**

An inductor opposes changes in current. In AC circuits, this opposition is known as inductive reactance ($X_L$).

**Formula for Inductive Reactance:**

*   $X_L = 2\pi fL$
    *   $X_L$: Inductive Reactance (Ohms, $\Omega$)
    *   $f$: Frequency (Hertz, Hz)
    *   $L$: Inductance (Henrys, H)

**Key Observations from the Formula:**

*   As frequency ($f$) increases, inductive reactance ($X_L$) increases.
*   As inductance ($L$) increases, inductive reactance ($X_L$) increases.

**Implications in High-Speed Digital Design:**

*   **Opposition to Fast Changes:** Inductors strongly oppose rapid changes in current. This means they slow down both rising and falling edges of digital signals.
*   **Phase Shift:** Inductors cause current to lag the voltage across them by 90 degrees in an ideal AC circuit. This phase shift can also contribute to timing issues.
*   **Series Impedance:** Inductance in series with a signal path increases the overall impedance at high frequencies, potentially causing signal reflections and reducing signal amplitude.
*   **Parasitic Inductance:** Wires, traces, component leads, and vias all have inherent inductance. At high frequencies, even small amounts of inductance can have a significant impact.
*   **Resonance:** When inductance and capacitance are present together, they can form resonant circuits, leading to undesirable oscillations or peaking in the signal's frequency response.

**Examples in High-Speed Digital Design:**

*   **Inductance of Traces and Wires:** A one-inch length of trace on a PCB can have an inductance of several nanohenries (nH). At gigahertz frequencies, this small inductance contributes significant reactance. (Refer to Johnson & Graham, Chapter 3, "The Nature of Signal Propagation").
*   **Via Inductance:** Vias, used to connect different layers of a PCB, have significant parasitic inductance due to their short length but relatively large diameter and the presence of plated through-holes. This can be a major limitation in multi-layer PCB design.
*   **Inductance of Component Leads:** Leads of discrete components like resistors, capacitors, and connectors add inductance to the circuit path.
*   **Chokes/Ferrites:** While sometimes used intentionally to suppress high-frequency noise, their effectiveness is limited by their own parasitic inductance and frequency response.

**Textbook Reference:**
*   Johnson & Graham, "High Speed Digital Design: A Handbook of Black Magic": Discusses inductance in the context of transmission lines and the impact of vias, particularly in Chapters 3 and 4.
*   Hall, Hall, & McCall, "High-Speed Digital System Design—A Handbook of Interconnect Theory and Design Practices": Provides detailed analysis of the electrical properties of interconnects, including inductance and its contribution to signal behavior.

---

### 4. The Combined Effect: Impedance and Resonance

**Key Concept:** Impedance ($Z$) is the total opposition to current flow in an AC circuit, considering both resistance ($R$) and reactance ($X$). For a series RLC circuit, $Z = R + j(X_L - X_C)$.

**The Importance of $X_L$ and $X_C$ at High Frequencies:**

As frequencies increase, both $X_L$ and $X_C$ become significant.

*   $X_C$ decreases with frequency, becoming a low impedance path.
*   $X_L$ increases with frequency, becoming a high impedance path.

**Resonance:**

Resonance occurs when inductive reactance ($X_L$) equals capacitive reactance ($X_C$). At the resonant frequency ($f_0$), the impedance is purely resistive (if there's no inherent resistance).

**Resonant Frequency Formula:**

*   $f_0 = \frac{1}{2\pi\sqrt{LC}}$

**Implications of Resonance:**

*   **Peaking:** If the signal's frequency components coincide with a resonant frequency of the interconnect, the signal can be amplified, leading to undesirable overshoot and ringing.
*   **Signal Distortion:** Resonance can cause certain frequencies within the signal spectrum to be emphasized or attenuated more than others, distorting the waveform.
*   **Unwanted Oscillations:** In feedback loops or with improper terminations, resonance can lead to sustained oscillations.

**Managing Reactance:**

*   **Minimize Parasitics:** Careful PCB layout, component selection, and via design are crucial to minimize stray capacitance and inductance.
*   **Controlled Impedance:** Designing traces to have a specific characteristic impedance (often 50 $\Omega$ or 100 $\Omega$) helps minimize reflections. This is achieved by controlling trace width, dielectric thickness, and proximity to a reference plane.
*   **Termination:** Adding resistors at the end of transmission lines to match the characteristic impedance absorbs signal energy, preventing reflections.
*   **Decoupling:** Strategic placement of decoupling capacitors near IC power pins helps mitigate the effects of inductance in the power distribution network.

**Textbook Reference:**
*   Johnson & Graham, Chapters 3, 4, and 5 are highly relevant, discussing transmission lines, reflections, and the concept of impedance.
*   Ott, "Noise Reduction Techniques in Electronic Systems": Provides comprehensive coverage of how parasitic reactances contribute to noise and signal integrity issues, and techniques to mitigate them.

---

### 5. Connecting to Course Outcomes:

*   **CO1: Illustrate the fundamentals of the effects of passive circuit elements on signal propagation in high speed digital circuits (Knowledge Level: K2).**
    *   This topic has directly illustrated how capacitance (lowering $X_C$ at high $f$) and inductance (increasing $X_L$ at high $f$) impede or alter signal propagation by affecting signal amplitude, rise/fall times, and causing reflections.

---

### 6. Practice Questions

1.  **Question:** For a digital signal with significant frequency components up to 1 GHz, explain why a 10 pF stray capacitance on a signal trace becomes a critical factor, whereas a 10 $\Omega$ resistor might be less concerning at that frequency. (Relates to CO1)
    *   **Answer:** At 1 GHz, the capacitive reactance ($X_C = \frac{1}{2\pi fC}$) of 10 pF is approximately $X_C = \frac{1}{2\pi (1 \times 10^9 Hz)(10 \times 10^{-12} F)} \approx \frac{1}{62.8} \Omega \approx 0.016 \Omega$. This very low reactance means the capacitor acts almost like a short circuit at high frequencies, significantly loading the signal. In contrast, a 10 $\Omega$ resistor has a constant opposition to current flow regardless of frequency (assuming no parasitic effects), and while it represents some attenuation, the parasitic capacitance has a much more dramatic frequency-dependent effect.

2.  **Question:** Describe the impact of the inductance of a via on a high-speed signal passing through it. How does this inductance behave as the signal frequency increases? (Relates to CO1)
    *   **Answer:** The inductance of a via acts as a series impedance. As the signal frequency increases, the inductive reactance ($X_L = 2\pi fL$) of the via increases. This rising impedance can cause signal reflections at the via, reduce the signal amplitude, and distort the waveform by slowing down its transitions.

3.  **Question:** What is the resonant frequency of a trace with 10 nH of inductance and a load capacitance of 5 pF at its end? (Relates to CO1)
    *   **Answer:** The resonant frequency ($f_0$) is given by $f_0 = \frac{1}{2\pi\sqrt{LC}}$.
        *   $L = 10 \times 10^{-9} H$
        *   $C = 5 \times 10^{-12} F$
        *   $f_0 = \frac{1}{2\pi\sqrt{(10 \times 10^{-9} H)(5 \times 10^{-12} F)}} = \frac{1}{2\pi\sqrt{50 \times 10^{-21}}} = \frac{1}{2\pi\sqrt{5 \times 10^{-20}}}$
        *   $f_0 = \frac{1}{2\pi \times 2.236 \times 10^{-10}} \approx \frac{1}{1.405 \times 10^{-9}} \approx 711 \times 10^{6} Hz = 711 MHz$.
        *   At this frequency, the inductive reactance and capacitive reactance would be equal in magnitude, potentially causing signal peaking if not managed.

---

### 7. Important Points to Remember

*   **Frequency Dependence:** The behavior of capacitors and inductors is highly dependent on frequency. At DC, capacitors block current and inductors pass current. At high frequencies, capacitors pass current (low $X_C$) and inductors block current (high $X_L$).
*   **Parasitics are Key:** In high-speed design, stray (parasitic) capacitance and inductance are often more critical than the intended component values.
*   **Signal Integrity:** Reactance is a primary cause of signal degradation, including reduced amplitude, slower rise/fall times, ringing, and reflections.
*   **Impedance Matching:** Understanding and controlling impedance (a combination of resistance and reactance) is fundamental to minimizing reflections and ensuring efficient signal transfer.
*   **Resonance is a Danger:** Unintended resonant circuits formed by parasitic L and C can lead to signal distortion and instability.

---

This concludes the study of ordinary capacitance and inductance in Module 1. The subsequent modules will build upon these fundamental concepts to explore their impact on more complex high-speed phenomena.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
