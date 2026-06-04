---
title: "Microwave tubes:  Types, Structure and Principles of operation of  Two Cavity Klystron- Velocity Modulation, Bunching"
subject: "MICROWAVES & ANTENNAS"
module: "Module 2: Microwave tubes:  Types, Structure and Principles of operation of  Two Cavity Klystron"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780feda7"
status: "completed"
scrapedAt: "2026-05-23T18:01:37.820Z"
---
# MICROWAVES & ANTENNAS - Module 2: Microwave Tubes

## Topic: Two-Cavity Klystron: Velocity Modulation and Bunching

---

### 1. Introduction to Microwave Tubes

Microwave tubes are vacuum electronic devices that generate, amplify, or process electromagnetic waves in the microwave frequency range. They offer high power handling capabilities and efficiencies, making them essential in various applications like radar, satellite communication, and particle accelerators.

**Key Concept:** Vacuum Electronic Devices (VEDs) are devices that operate by the interaction of electron beams with electromagnetic fields in a vacuum.

**Example:** Klystrons, Magnetrons, Traveling Wave Tubes (TWTs), Backward Wave Oscillators (BWOs).

**Reference:** Das & Das, Chapter 1 (Introduction to Microwave Tubes)

---

### 2. Two-Cavity Klystron: Structure and Types

A two-cavity klystron is a basic type of linear-beam vacuum tube used for amplification. It consists of two resonant cavities and an electron gun.

#### 2.1. Structure of a Two-Cavity Klystron

*   **Electron Gun:** Generates a focused, high-velocity electron beam. It typically includes a cathode (thermionic emitter), a control grid, a pre-accelerating anode, and focusing electrodes.
*   **Velocity-Modulating Cavity (Input Cavity):** This is the first resonant cavity. A small RF signal is applied to this cavity. The RF voltage across the cavity gap modulates the velocity of the electrons passing through it.
*   **Drift Space:** A field-free region between the two cavities where the velocity-modulated electron beam travels.
*   **Bunching Cavity (Output Cavity):** This is the second resonant cavity. The velocity-modulated electron beam passes through this cavity. The velocity variations cause the electrons to form bunches. The bunched electron beam induces a large RF current in the output cavity, leading to amplified output power.
*   **Collector:** The electrons are collected at the end of the tube, converting their kinetic energy into heat.

**Diagram:** (Imagine a diagram showing the electron gun, two resonant cavities separated by a drift space, and a collector, with an electron beam passing through).

**Reference:** Liao, Chapter 10 (Klystrons), Das & Das, Chapter 2 (Two-Cavity Klystron)

#### 2.2. Types of Klystrons

While the focus is on the two-cavity klystron, it's good to be aware of other types:

*   **Two-Cavity Klystron:** Primarily used as an amplifier.
*   **Multi-Cavity Klystron:** Features more than two cavities, providing higher gain and bandwidth.
*   **Reflex Klystron:** Used as an oscillator. It has only one cavity and a repeller electrode that reflects the electron beam back through the cavity.

**Important Point:** The two-cavity klystron operates on the principle of velocity modulation and bunching of an electron beam.

---

### 3. Principles of Operation: Velocity Modulation and Bunching

The core operation of a two-cavity klystron relies on two fundamental processes: velocity modulation and electron bunching.

#### 3.1. Velocity Modulation

*   **Mechanism:** When a small RF signal is applied to the input cavity, an oscillating voltage develops across the gap of this cavity. As the electron beam passes through this gap, the RF voltage causes a variation in the velocity of the electrons.
*   **Phase-Dependent Velocity Change:**
    *   Electrons entering the gap when the RF voltage is positive are accelerated.
    *   Electrons entering the gap when the RF voltage is negative are decelerated.
    *   Electrons entering the gap when the RF voltage is zero experience no change in velocity.
*   **Result:** The initially mono-energetic electron beam becomes velocity-modulated, meaning the electrons now have varying velocities depending on the phase of the RF signal at which they passed through the input cavity gap.

**Mathematical Representation (Simplified):**

Let $V_{ac}$ be the AC voltage across the input cavity gap and $V_0$ be the DC accelerating voltage. The change in velocity $\Delta v$ experienced by an electron passing through the gap is proportional to the RF voltage:

$\Delta v \propto V_{ac}$

The velocity of an electron exiting the input cavity gap, $v(t)$, can be expressed as:

$v(t) = v_0 + \Delta v \sin(\omega t)$

where $v_0$ is the initial DC velocity, $\Delta v$ is the velocity modulation amplitude, and $\omega$ is the angular frequency of the RF signal.

**Course Outcome Alignment:** CO1 (Explain the basic mechanism of operation of cavity resonator and microwave sources). This section explains the RF interaction with the electron beam within the cavity.

**Reference:** Liao, Chapter 10 (Klystrons - Velocity Modulation), Das & Das, Chapter 2 (Velocity Modulation)

---

#### 3.2. Electron Bunching

*   **Mechanism:** After exiting the input cavity, the velocity-modulated electron beam enters the drift space. In the drift space, the electrons with higher velocities (accelerated) travel faster, while those with lower velocities (decelerated) travel slower.
*   **Formation of Bunches:** This difference in velocities causes the electrons to group together or "bunch" at specific points in time. Electrons that were accelerated behind slower electrons will catch up, and electrons that were decelerated will be overtaken by faster electrons.
*   **Drift Space Length:** The length of the drift space is crucial. It is designed such that by the time the electrons reach the output cavity gap, they have formed into well-defined bunches.
*   **Ideal Bunching:** In an ideal scenario, at the center of the drift space, electrons that were accelerated will have caught up with electrons that passed through the gap at zero voltage, and both will be ahead of electrons that were decelerated. This continues, forming denser bunches.

**Mathematical Representation (Drift Space):**

Let the length of the drift space be $L_d$. The time taken by an electron with velocity $v(t)$ to travel through the drift space is $t_{drift} = L_d / v(t)$.

Consider an electron that passed through the input cavity gap at time $t_0$. Its velocity upon exiting is $v(t_0) = v_0 + \Delta v \sin(\omega t_0)$.
The time it takes to reach the output cavity is approximately $t_{arrival} \approx t_0 + L_d / (v_0 + \Delta v \sin(\omega t_0))$.

The time variation of the electron arrival at the output cavity gap, $\Delta t_{arrival}$, is approximately:

$\Delta t_{arrival} \approx -\frac{L_d}{v_0^2} \Delta v \sin(\omega t_0)$

This shows that the arrival time at the output cavity is modulated by the initial velocity modulation.

**Key Concept:** The purpose of the drift space is to convert the velocity modulation introduced by the input cavity into density modulation (bunching) of the electron beam.

**Example:** Imagine a race where runners start at different speeds. Those who start faster will eventually catch up to and overtake slower runners, forming groups. The drift space is like the racetrack where this grouping happens.

**Reference:** Liao, Chapter 10 (Klystrons - Bunching Process), Das & Das, Chapter 2 (Electron Bunching)

---

#### 3.3. RF Current Generation at the Output Cavity

*   **Mechanism:** As the bunched electron beam passes through the gap of the output cavity, the bunches of electrons induce an RF current in the cavity.
*   **Beam Loading:** The oscillating electron bunches act as a time-varying source of charge, exciting the resonant modes of the output cavity.
*   **Power Transfer:** The kinetic energy of the bunched electrons is converted into electromagnetic energy stored in the output cavity. This energy can then be extracted as a high-power RF output signal.
*   **Condition for Maximum Output:** Maximum output power is achieved when the bunches are maximally dense when they pass through the output cavity gap. This typically occurs at an optimum drift space length.

**Important Point:** The bunched electron beam induces an RF current that is **in phase** with the RF voltage in the output cavity, leading to efficient power transfer and amplification.

**Course Outcome Alignment:** CO1 (Explain the basic mechanism of operation of cavity resonator and microwave sources). This explains how the bunched beam interacts with the output cavity to generate RF power.

---

### 4. Summarizing the Klystron Operation

1.  **Electron Generation:** An electron gun produces a focused electron beam.
2.  **Velocity Modulation:** The electron beam passes through the gap of the input cavity, where an RF voltage modulates the velocity of the electrons.
3.  **Bunching:** In the drift space, the velocity-modulated electrons regroup into bunches due to differences in their speeds.
4.  **RF Current Induction:** The bunched electron beam passes through the gap of the output cavity, inducing a strong RF current.
5.  **Power Amplification:** The RF current excites the output cavity, resulting in a large RF voltage and power output, which is an amplified version of the input signal.

---

### 5. Important Points to Remember

*   **Two-Cavity Klystron:** Primarily an amplifier.
*   **Velocity Modulation:** Achieved by an RF voltage across the input cavity gap.
*   **Bunching:** Conversion of velocity modulation to density modulation in the drift space.
*   **Output Cavity:** Excitation by bunched electron beam leads to RF power output.
*   **Drift Space Length:** Critical for achieving optimal bunching.
*   **Key Parameters:** Electron beam voltage and current, cavity resonant frequencies, Q-factor, and drift space length.

---

### 6. Practice Questions and Exercises

**Question 1:** What is the primary function of the two-cavity klystron?
**(a) Oscillation**
**(b) Amplification**
**(c) Frequency conversion**
**(d) Noise reduction**

**Question 2:** Explain the process of velocity modulation in a two-cavity klystron. What causes it?

**Question 3:** Describe the role of the drift space in the operation of a two-cavity klystron. How does it lead to electron bunching?

**Question 4:** How does the bunched electron beam induce an RF current in the output cavity?

**Question 5:** If an electron passes through the input cavity gap when the RF voltage is maximum positive, how will its velocity change compared to an electron passing when the RF voltage is zero?

---

### 7. Answers to Practice Questions

**Answer 1:**
**(b) Amplification**

**Answer 2:**
Velocity modulation occurs when the electron beam passes through the gap of the input cavity. An RF signal applied to the input cavity creates an oscillating voltage across its gap. Electrons entering this gap experience a change in their velocity that is proportional to the instantaneous RF voltage and the phase at which they encounter the gap. Electrons encountering a positive RF voltage are accelerated, while those encountering a negative RF voltage are decelerated. Electrons passing at zero crossing experience no velocity change. This results in a beam where electrons have varying velocities, dependent on the phase of the input RF signal.

**Answer 3:**
The drift space is a field-free region between the input and output cavities. After passing through the input cavity, the electron beam is velocity-modulated. In the drift space, electrons with higher velocities travel further than those with lower velocities in a given time. This difference in travel distance, based on their modulated velocities, causes the electrons to group together, forming "bunches." Electrons that were accelerated catch up to slower electrons, and slower electrons fall behind faster ones, leading to a concentration of electrons in specific regions of the beam.

**Answer 4:**
When the bunched electron beam passes through the gap of the output cavity, the closely spaced groups of electrons interact with the cavity's resonant structure. As a bunch of electrons enters the gap, it pushes charge onto the cavity walls, inducing a current. As the bunch moves through the gap and leaves, it pulls charge away, inducing a current in the opposite direction. Because the electron bunches arrive at specific phases of the RF cycle, they induce a sustained, oscillating RF current in the output cavity, which is amplified.

**Answer 5:**
If an electron passes through the input cavity gap when the RF voltage is maximum positive, its velocity will **increase** (it will be accelerated). This is because the electric field in the gap will be in the direction of the electron's motion, adding kinetic energy to it. This accelerated electron will have a higher velocity than an electron passing when the RF voltage is zero.

---

### 8. Course Outcome Alignment Summary

This module section primarily addresses:

*   **CO1: Explain the basic mechanism of operation of cavity resonator and microwave sources (Knowledge Level: K2)**
    *   The principles of velocity modulation and electron bunching are fundamental to understanding how microwave sources like klystrons operate. The interaction of the electron beam with the resonant cavities is explained.

This section lays the groundwork for understanding how a microwave source generates RF power. Further topics in Module 2 will delve deeper into other types of microwave tubes and their operational principles, also contributing to CO1.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
